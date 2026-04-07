#!/bin/sh
set -e
javac /workspace/Main.java -d /tmp 2>&1
java -cp /tmp Main
