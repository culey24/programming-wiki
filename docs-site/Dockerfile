# Build from repo root: docker build -f docs-site/Dockerfile .
FROM node:20-alpine AS builder
WORKDIR /app
COPY docs-site/package.json docs-site/package-lock.json* ./
RUN npm ci
COPY docs-site/ ./
COPY content /content
ENV DOCUSAURUS_CONTENT_DIR=/content
ARG MAIN_APP_URL=http://localhost:5173
ENV MAIN_APP_URL=$MAIN_APP_URL
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
