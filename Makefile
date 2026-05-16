# Programming Wiki — Dev Runner
# Usage:
#   make dev          → DB + backend + agent + docs + frontend
#   make db           → PostgreSQL (5432)
#   make backend      → Node.js Backend (3001)
#   make agent        → Python Agent Service (8000)
#   make docs         → Docusaurus Wiki (3002)
#   make fe           → Vite Frontend (5173)
#   make stop         → Stop all containers
#   make logs         → View container logs

.PHONY: dev db backend agent docs fe stop logs setup

# ── Colors ──────────────────────────────────────────────────────────────────
CYAN  := \033[0;36m
RESET := \033[0m

# ── Setup ────────────────────────────────────────────────────────────────────
setup:
	@echo "$(CYAN)▶ Installing dependencies for all services...$(RESET)"
	npm --prefix backend install
	npm --prefix docs-site install
	npm --prefix frontend install
	cd agent-service && uv pip install -r requirements.txt
	@echo "$(CYAN)✓ Setup complete$(RESET)"

# ── Database ─────────────────────────────────────────────────────────────────
db:
	@echo "$(CYAN)▶ Starting PostgreSQL (5432)...$(RESET)"
	docker compose up db -d || \
	  (echo "$(CYAN)⚠ DB might be running already — check: docker ps$(RESET)" && true)
	@echo "$(CYAN)✓ DB is ready on port 5432$(RESET)"

stop:
	@echo "$(CYAN)▶ Stopping all containers...$(RESET)"
	docker compose stop

logs:
	@echo "$(CYAN)▶ Viewing container logs...$(RESET)"
	docker compose logs -f

# ── Individual Services ──────────────────────────────────────────────────────
backend:
	@echo "$(CYAN)▶ Backend (Node.js :3001)...$(RESET)"
	npm --prefix backend run dev

agent:
	@echo "$(CYAN)▶ Agent Service (FastAPI :8000)...$(RESET)"
	cd agent-service && uv run uvicorn main:app --reload --port 8000

docs:
	@echo "$(CYAN)▶ Documentation Site (Docusaurus :3002)...$(RESET)"
	PORT=3002 npm --prefix docs-site run start

fe:
	@echo "$(CYAN)▶ Web Frontend (Vite :5173)...$(RESET)"
	npm --prefix frontend run dev

# ── Dev: All services in one command ─────────────────────────────────────────
dev: db
	@echo "$(CYAN)▶ Starting all services...$(RESET)"
	@echo "$(CYAN)  Press Ctrl+C to stop all$(RESET)"
	@trap 'kill 0' SIGINT; \
	  (npm --prefix backend run dev 2>&1 | sed "s/^/[back] /") & \
	  (cd agent-service && uv run uvicorn main:app --reload --port 8000 2>&1 | sed "s/^/[agnt] /") & \
	  (npm --prefix docs-site run start 2>&1 | sed "s/^/[docs] /") & \
	  (npm --prefix frontend run dev 2>&1 | sed "s/^/[front] /") & \
	  wait
