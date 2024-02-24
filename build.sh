#! /bin/bash

(cd src && npm run build)

zip -r genshin.zip module.prop webroot
