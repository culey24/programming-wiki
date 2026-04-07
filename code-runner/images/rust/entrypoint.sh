#!/bin/sh
set -e
rustc /workspace/code.rs -o /tmp/program 2>&1
/tmp/program
