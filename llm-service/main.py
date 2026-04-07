from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Literal
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Programming Wiki LLM Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001", "http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY", "")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = os.getenv("OPENROUTER_MODEL", "google/gemini-2.5-flash")


class Message(BaseModel):
    role: Literal["user", "assistant", "system"]
    content: str


class Context(BaseModel):
    page: str = "general"
    type: str = "general"
    language: str | None = None


class ChatRequest(BaseModel):
    messages: list[Message]
    context: Context = Context()


def build_system_prompt(context: Context) -> str:
    base = (
        "You are an expert coding tutor for The Programming Wiki — an interactive learning platform. "
        "You help learners understand programming concepts clearly and concisely. "
        "When explaining code, always use proper markdown code blocks with the language tag. "
        "Keep answers focused, practical, and educational. "
        "Encourage understanding rather than just providing answers."
    )

    if context.type == "docs":
        base += f" The user is currently reading the '{context.page}' documentation page."
    elif context.type == "playground":
        lang = context.language or "unknown"
        base += f" The user is working in the code playground, currently writing {lang} code."

    return base


@app.post("/chat")
async def chat(request: ChatRequest):
    if not OPENROUTER_API_KEY:
        raise HTTPException(status_code=503, detail="OPENROUTER_API_KEY is not configured.")

    system_prompt = build_system_prompt(request.context)

    messages = [{"role": "system", "content": system_prompt}]
    messages += [{"role": m.role, "content": m.content} for m in request.messages[-20:]]

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:5173",
        "X-Title": "Programming Wiki",
    }

    payload = {
        "model": MODEL,
        "messages": messages,
        "max_tokens": 2048,
        "temperature": 0.7,
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
        try:
            response = await client.post(OPENROUTER_URL, json=payload, headers=headers)
            response.raise_for_status()
        except httpx.HTTPStatusError as e:
            raise HTTPException(
                status_code=502,
                detail=f"OpenRouter API error: {e.response.status_code}"
            )
        except httpx.RequestError as e:
            raise HTTPException(status_code=502, detail=f"Network error: {str(e)}")

    data = response.json()
    content = data["choices"][0]["message"]["content"]
    return {"content": content}


@app.get("/health")
def health():
    return {"status": "ok", "model": MODEL}
