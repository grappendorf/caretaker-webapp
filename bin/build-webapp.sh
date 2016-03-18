#!/usr/bin/env bash

VERSION=$(cat bower.json |grep -o -P "(?<=\"version\": \")(.+)(?=\")")
docker build -t grappendorf/caretaker-webapp:latest -f docker/Dockerfile .
docker tag grappendorf/caretaker-webapp:latest grappendorf/caretaker-webapp:$VERSION
