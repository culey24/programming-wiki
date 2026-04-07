FROM eclipse-temurin:21-jdk-alpine

RUN adduser -D -u 1000 sandbox
WORKDIR /workspace

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

USER sandbox
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
