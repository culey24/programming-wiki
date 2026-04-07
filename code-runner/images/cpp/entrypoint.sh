#!/bin/sh
set -e
g++ -o /tmp/program /workspace/code.cpp 2>&1
/tmp/program
