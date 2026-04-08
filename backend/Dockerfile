FROM node:20-alpine

# Musl-native Docker CLI (copying docker:cli binary into Alpine breaks with ENOENT / wrong loader)
RUN apk add --no-cache docker-cli

WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev
COPY src ./src
EXPOSE 3001
CMD ["node", "src/index.js"]
