#!/bin/sh

generate_docs() {
  mkdir -p './docs/'
  npx jsdoc-to-markdown './src/index.js' > './docs/flump-api.md'
}

generate_readme() {
  npx jsdoc-to-markdown './src/index.js' --template './README.hbs' > './README.md'
}

generate_docs && generate_readme
