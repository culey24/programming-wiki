# Programming Wiki

An AI-powered interactive programming learning platform with a live code playground and AI tutor.

## Stack

| Layer | Tech |
|-------|------|
| Frontend | React 19 + Vite + Tailwind CSS + React Router |
| Editor | Monaco Editor (VS Code engine) |
| Backend | Node.js + Express + Socket.IO + JWT |
| AI Agent | Python FastAPI + ChromaDB RAG → OpenRouter (Gemini 2.5 Flash) |
| Code Runner | Docker containers (Python, JS, C++, Java, Rust) |
| Database | PostgreSQL |

## Project Structure

```
programming-wiki/
├── frontend/         # React + Vite app
├── backend/          # Node.js API + Socket.IO
├── agent-service/    # Python FastAPI AI Agent (RAG + debug)
├── code-runner/      # Docker images for sandboxed execution
├── content/          # Wiki markdown (shared: API + Docusaurus)
├── docs-site/        # Docusaurus documentation site
└── docker-compose.yml
```

## Quick Start

### 1. Build the code runner images (one-time)

```bash
cd code-runner && bash build.sh
```

### 2. Set environment variables (local dev)

```bash
cp backend/.env.example backend/.env
cp agent-service/.env.example agent-service/.env
# Edit agent-service/.env — add OPENROUTER_API_KEY
```

### 3. Run locally (without Compose)

Wiki docs are served by **Docusaurus** on port **3000**; the React app (playground, auth, AI tutor) is on **5173**.

```bash
docker compose up db -d   # or any Postgres on DATABASE_URL

# Terminal 1 — backend
cd backend && npm install && npm run dev

# Terminal 2 — agent-service
cd agent-service && pip install -r requirements.txt && uvicorn main:app --reload

# Terminal 3 — Docusaurus docs (wiki)
cd docs-site && npm install && npm start    # http://localhost:3000

# Terminal 4 — React app
cd frontend && npm install && npm run dev   # http://localhost:5173
```

Optional: set `VITE_DOCS_URL` if Docusaurus is not on `http://localhost:3000` (used for “Docs” links in the navbar).

Open the app at [http://localhost:5173](http://localhost:5173) and docs at [http://localhost:3000/docs/intro](http://localhost:3000/docs/intro).

### Docker Compose (stack in containers)

From the repo root, Compose starts **Postgres**, **backend**, **agent-service**, **docs-site** (Docusaurus, port 3000), and **frontend** (port 5173):

```bash
# One-time: sandbox images for the code playground (on the host Docker daemon)
cd code-runner && bash build.sh && cd ..

# Root .env (Compose reads this automatically)
echo "OPENROUTER_API_KEY=your_key_here" >> .env
echo "JWT_SECRET=your_secret_here" >> .env

docker compose up --build
```

Then open [http://localhost:5173](http://localhost:5173). The first **agent-service** start may take a few minutes while it downloads the embedding model and builds the wiki index.

**What Compose does *not* build:** the `programming-wiki-*` code-runner images — those are separate images the backend launches via the mounted Docker socket. Run `code-runner/build.sh` once on the same machine before using **Run** in the playground.

### Docker Desktop: BuildKit / `moby/buildkit` 500 error

If `docker compose build` or Buildx fails with **500** pulling `moby/buildkit:buildx-stable-1` (driver `docker-container`), try:

1. **`code-runner/build.sh`** — sets `DOCKER_BUILDKIT=0` so plain `docker build` skips that BuildKit bootstrap.
2. **Compose build without BuildKit:** `DOCKER_BUILDKIT=0 COMPOSE_DOCKER_CLI_BUILD=0 docker compose build`
3. **Use a `docker`-driver builder:** `docker buildx create --name local --driver docker --use`
4. **Restart Docker Desktop** if the daemon keeps returning 500.

## Features

- **Wiki** — Structured Python and Rust courses in markdown
- **Code Playground** — Monaco Editor with live execution via Docker sandboxes
- **AI Agent** — Wiki-grounded RAG agent (ChromaDB + sentence-transformers) on every page
- **🐛 Ask AI** — One-click error debugging from the playground output panel
- **Auth** — JWT-based register/login with PostgreSQL persistence
- **Security** — Docker containers run with `--network none`, memory/CPU/PID limits, read-only filesystem, 10s timeout
