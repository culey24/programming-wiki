# Set error action to stop (equivalent to set -e)
$ErrorActionPreference = "Stop"

# Force classic builder
$env:DOCKER_BUILDKIT=0

# Get the script directory
$PSScriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
$IMAGES_DIR = "$PSScriptRoot\images"

Write-Host "Building Programming Wiki code runner images..." -ForegroundColor Cyan

docker build -t programming-wiki-python     "$IMAGES_DIR\python"
docker build -t programming-wiki-javascript "$IMAGES_DIR\javascript"
docker build -t programming-wiki-cpp        "$IMAGES_DIR\cpp"
docker build -t programming-wiki-java       "$IMAGES_DIR\java"
docker build -t programming-wiki-rust       "$IMAGES_DIR\rust"

Write-Host "`nAll images built successfully!" -ForegroundColor Green
Write-Host "  programming-wiki-python"
Write-Host "  programming-wiki-javascript"
Write-Host "  programming-wiki-cpp"
Write-Host "  programming-wiki-java"
Write-Host "  programming-wiki-rust"