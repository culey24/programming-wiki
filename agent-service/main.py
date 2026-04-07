"""
Programming Wiki — AI Agent Service

Provides two endpoints:
  POST /chat   — wiki-grounded conversational assistant
  POST /debug  — diagnose code errors with wiki context
  GET  /health — health check + index stats
"""

from contextlib import asynccontextmanager
import os
from typing import Literal

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import rag

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY", "")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
# See https://openrouter.ai/google/gemini-2.5-flash (preview slug may change or be removed)
MODEL = os.getenv("OPENROUTER_MODEL", "google/gemini-2.5-flash")

OPENROUTER_HEADERS = {
    "Authorization": f"Bearer {OPENROUTER_API_KEY}",
    "Content-Type": "application/json",
    "HTTP-Referer": "http://localhost:5173",
    "X-Title": "Programming Wiki Agent",
}


# ---------------------------------------------------------------------------
# Startup: build RAG index
# ---------------------------------------------------------------------------

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("[Agent] Building RAG index from wiki content…")
    rag.build_index()
    print("[Agent] Ready.")
    yield


app = FastAPI(title="Programming Wiki Agent Service", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001", "http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

async def call_llm(messages: list[dict], max_tokens: int = 2048) -> str:
    if not OPENROUTER_API_KEY:
        raise HTTPException(503, "OPENROUTER_API_KEY is not set.")

    payload = {
        "model": MODEL,
        "messages": messages,
        "max_tokens": max_tokens,
        "temperature": 0.6,
    }

    async with httpx.AsyncClient(timeout=40.0) as client:
        try:
            resp = await client.post(OPENROUTER_URL, json=payload, headers=OPENROUTER_HEADERS)
            resp.raise_for_status()
        except httpx.HTTPStatusError as e:
            raise HTTPException(502, f"OpenRouter error {e.response.status_code}: {e.response.text}")
        except httpx.RequestError as e:
            raise HTTPException(502, f"Network error: {e}")

    return resp.json()["choices"][0]["message"]["content"]


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------

class Message(BaseModel):
    role: Literal["user", "assistant", "system"]
    content: str


class ChatContext(BaseModel):
    page: str = "general"
    type: str = "general"
    language: str | None = None


class ChatRequest(BaseModel):
    messages: list[Message]
    context: ChatContext = ChatContext()


class DebugRequest(BaseModel):
    code: str
    language: str
    error: str
    context: ChatContext = ChatContext()


# ---------------------------------------------------------------------------
# POST /chat
# ---------------------------------------------------------------------------

@app.post("/chat")
async def chat(req: ChatRequest):
    """
    Wiki-grounded chat. For every user message, we:
    1. Search the wiki for relevant content
    2. Inject it into the system prompt
    3. Ask the LLM to answer using that context
    """
    # Build query from the last user message
    last_user = next(
        (m.content for m in reversed(req.messages) if m.role == "user"), ""
    )

    # RAG: search wiki with optional language filter
    lang_filter = None
    if req.context.type == "docs" and req.context.page:
        # narrow to the relevant folder (e.g. "Python" or "Rust")
        parts = req.context.page.split("/")
        if parts:
            lang_filter = parts[0]

    hits = rag.search(last_user, n_results=4, language_filter=lang_filter)
    wiki_context = rag.format_context(hits)

    # System prompt
    system_parts = [
        "You are an expert coding tutor for The Programming Wiki — an interactive learning platform.",
        "You always answer based on the wiki content provided below when it is relevant.",
        "When explaining code, use markdown code blocks with the correct language tag.",
        "Be concise, clear, and educational. Encourage understanding over copy-pasting.",
    ]

    if req.context.type == "docs":
        system_parts.append(f"The user is currently reading the '{req.context.page}' page.")
    elif req.context.type == "playground":
        lang = req.context.language or "unknown"
        system_parts.append(f"The user is in the code playground writing {lang} code.")

    if wiki_context:
        system_parts.append(f"\n{wiki_context}")
    else:
        system_parts.append(
            "\nNo specific wiki content was found for this query — answer from your general knowledge."
        )

    messages = [{"role": "system", "content": "\n".join(system_parts)}]
    messages += [{"role": m.role, "content": m.content} for m in req.messages[-20:]]

    content = await call_llm(messages)
    return {"content": content}


# ---------------------------------------------------------------------------
# POST /debug
# ---------------------------------------------------------------------------

@app.post("/debug")
async def debug_code(req: DebugRequest):
    """
    Diagnose a code error. Searches the wiki for content relevant to the
    language + error, then asks the agent to explain and fix the issue.
    """
    # Search wiki for this language + error keywords
    search_query = f"{req.language} {req.error[:200]}"
    hits = rag.search(search_query, n_results=4)
    wiki_context = rag.format_context(hits)

    system = "\n".join(filter(None, [
        "You are an expert coding tutor and debugger for The Programming Wiki.",
        f"The user has a bug in their {req.language} code.",
        "Your job is to:",
        "  1. Clearly explain what the error means in plain language.",
        "  2. Identify the exact line or cause of the bug.",
        "  3. Show the corrected code in a properly labelled code block.",
        "  4. Briefly explain why the fix works.",
        "Be direct and educational. Do not add unnecessary fluff.",
        wiki_context or None,
    ]))

    user_msg = f"""Here is my {req.language} code:

```{req.language}
{req.code}
```

I got this error:
```
{req.error}
```

Please help me understand and fix it."""

    messages = [
        {"role": "system", "content": system},
        {"role": "user", "content": user_msg},
    ]

    content = await call_llm(messages, max_tokens=2048)
    return {"content": content}


# ---------------------------------------------------------------------------
# GET /health
# ---------------------------------------------------------------------------

@app.get("/health")
def health():
    count = rag._collection.count() if rag._collection else 0
    return {
        "status": "ok",
        "model": MODEL,
        "wiki_chunks_indexed": count,
    }
