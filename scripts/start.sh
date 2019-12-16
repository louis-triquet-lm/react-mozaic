#!/usr/bin/env bash

rm -rf public/fonts
mkdir public/fonts
cp node_modules/@mozaic-ds/web-fonts/*.woff public/fonts
cp node_modules/@mozaic-ds/web-fonts/*.woff2 public/fonts
#rm -rf src/Icons
#mkdir src/Icons
#cp node_modules/@mozaic-ds/icons/react/index.js src/Icons
yarn watch:css &
yarn start-js
