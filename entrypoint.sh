#!/bin/sh

# This file is used as a CMD in production docker image and should contain all commends needed to run on app startup,
# for example running typeorm migrations.

yarn run generate:metadata
pm2-runtime dist/main.js --no-deamon -f -i max
