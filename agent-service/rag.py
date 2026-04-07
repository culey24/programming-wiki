"""
RAG pipeline — indexes wiki markdown files into ChromaDB and provides
semantic search so the agent can answer questions grounded in wiki content.
"""

import os
import re
from pathlib import Path
from typing import Optional

import chromadb
from chromadb.utils.embedding_functions import SentenceTransformerEmbeddingFunction
from chromadb.config import Settings

CONTENT_DIR = Path(os.getenv("CONTENT_DIR", "../content"))
CHROMA_PATH = Path(os.getenv("CHROMA_PATH", "./chroma_db"))

EMBEDDING_MODEL = "all-MiniLM-L6-v2"  # small, fast, runs locally
CHUNK_SIZE = 600   # characters
CHUNK_OVERLAP = 80

_client: Optional[chromadb.PersistentClient] = None
_collection = None
_embed_fn = None


def _get_embed_fn():
    global _embed_fn
    if _embed_fn is None:
        _embed_fn = SentenceTransformerEmbeddingFunction(model_name=EMBEDDING_MODEL)
    return _embed_fn


def _chunk_text(text: str, source: str) -> list[dict]:
    """Split markdown into overlapping chunks, keeping heading context."""
    chunks = []
    current_heading = ""

    lines = text.splitlines(keepends=True)
    buffer = ""
    chunk_id = 0

    for line in lines:
        # Track last seen heading for context
        if line.startswith("#"):
            current_heading = line.strip("#").strip()

        buffer += line
        if len(buffer) >= CHUNK_SIZE:
            chunk_text = buffer.strip()
            if chunk_text:
                chunks.append({
                    "id": f"{source}::chunk{chunk_id}",
                    "text": chunk_text,
                    "metadata": {"source": source, "heading": current_heading},
                })
                chunk_id += 1
            # Keep overlap
            buffer = buffer[-CHUNK_OVERLAP:]

    # Flush remaining
    if buffer.strip():
        chunks.append({
            "id": f"{source}::chunk{chunk_id}",
            "text": buffer.strip(),
            "metadata": {"source": source, "heading": current_heading},
        })

    return chunks


def _load_markdown_files() -> list[dict]:
    """Recursively read all .md files from CONTENT_DIR."""
    docs = []
    if not CONTENT_DIR.exists():
        print(f"[RAG] Content directory not found: {CONTENT_DIR}")
        return docs

    for path in sorted(CONTENT_DIR.rglob("*.md")):
        source = str(path.relative_to(CONTENT_DIR)).replace("\\", "/").removesuffix(".md")
        text = path.read_text(encoding="utf-8")
        docs.extend(_chunk_text(text, source))

    print(f"[RAG] Loaded {len(docs)} chunks from {CONTENT_DIR}")
    return docs


def build_index(force: bool = False):
    """Build or reload the ChromaDB vector index from wiki content."""
    global _client, _collection

    CHROMA_PATH.mkdir(parents=True, exist_ok=True)
    _client = chromadb.PersistentClient(
        path=str(CHROMA_PATH),
        settings=Settings(anonymized_telemetry=False),
    )

    embed_fn = _get_embed_fn()

    if force:
        try:
            _client.delete_collection("wiki")
        except Exception:
            pass

    _collection = _client.get_or_create_collection(
        name="wiki",
        embedding_function=embed_fn,
        metadata={"hnsw:space": "cosine"},
    )

    # If collection is empty (or force rebuild), index everything
    existing_count = _collection.count()
    if existing_count == 0 or force:
        docs = _load_markdown_files()
        if not docs:
            print("[RAG] No documents to index.")
            return

        # Upsert in batches of 100
        batch_size = 100
        for i in range(0, len(docs), batch_size):
            batch = docs[i : i + batch_size]
            _collection.upsert(
                ids=[d["id"] for d in batch],
                documents=[d["text"] for d in batch],
                metadatas=[d["metadata"] for d in batch],
            )
        print(f"[RAG] Indexed {len(docs)} chunks into ChromaDB.")
    else:
        print(f"[RAG] Using existing index with {existing_count} chunks.")


def search(query: str, n_results: int = 4, language_filter: str | None = None) -> list[dict]:
    """
    Semantic search over wiki content.
    Returns a list of {text, source, heading, distance} dicts.
    """
    if _collection is None:
        return []

    where = None
    if language_filter:
        # Filter to docs in a specific language folder e.g. "Python"
        where = {"source": {"$contains": language_filter}}

    try:
        results = _collection.query(
            query_texts=[query],
            n_results=min(n_results, _collection.count() or 1),
            where=where,
        )
    except Exception as e:
        print(f"[RAG] Search error: {e}")
        return []

    hits = []
    for i, doc in enumerate(results["documents"][0]):
        meta = results["metadatas"][0][i]
        dist = results["distances"][0][i] if results.get("distances") else 0
        hits.append({
            "text": doc,
            "source": meta.get("source", ""),
            "heading": meta.get("heading", ""),
            "distance": dist,
        })

    return hits


def format_context(hits: list[dict]) -> str:
    """Format search hits into a readable context block for the LLM."""
    if not hits:
        return ""

    parts = ["=== Relevant Wiki Content ==="]
    for hit in hits:
        source_label = hit["source"].replace("/", " › ")
        heading = f" — {hit['heading']}" if hit["heading"] else ""
        parts.append(f"\n[{source_label}{heading}]\n{hit['text']}")

    return "\n".join(parts)
