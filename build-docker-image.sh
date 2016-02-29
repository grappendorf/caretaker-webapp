#!/bin/bash
VERSION=$(cat bower.json |grep -o -P "(?<=\"version\": \")(.+)(?=\")")
DOCKERFILE=${1:-Dockerfile}
docker build -t grappendorf/caretaker-webapp:${VERSION} -f $DOCKERFILE .
