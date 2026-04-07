FROM node:20-alpine

# Official image already has non-root user `node` (UID 1000)
USER node
WORKDIR /workspace

ENTRYPOINT ["node", "code.js"]
