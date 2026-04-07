FROM gcc:13-bookworm

RUN useradd -m -u 1000 sandbox
WORKDIR /workspace

# Compile and run in one step
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

USER sandbox
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
