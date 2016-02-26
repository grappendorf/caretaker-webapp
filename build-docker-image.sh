#!/bin/bash
VERSION=$(cat bower.json |grep -o -P "(?<=\"version\": \")(.+)(?=\")")
docker build -t grappendorf/caretaker-webapp:${VERSION} .
