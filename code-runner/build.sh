#!/bin/bash
set -e

# Use the classic builder so Docker Desktop Linux does not need to pull
# moby/buildkit via a broken docker-container buildx driver (500 on images/create).
export DOCKER_BUILDKIT=0

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
IMAGES_DIR="$SCRIPT_DIR/images"

echo "Building Programming Wiki code runner images..."

docker build -t programming-wiki-python     "$IMAGES_DIR/python"
docker build -t programming-wiki-javascript "$IMAGES_DIR/javascript"
docker build -t programming-wiki-cpp        "$IMAGES_DIR/cpp"
docker build -t programming-wiki-java       "$IMAGES_DIR/java"
docker build -t programming-wiki-rust       "$IMAGES_DIR/rust"

echo ""
echo "All images built successfully!"
echo "  programming-wiki-python"
echo "  programming-wiki-javascript"
echo "  programming-wiki-cpp"
echo "  programming-wiki-java"
echo "  programming-wiki-rust"
