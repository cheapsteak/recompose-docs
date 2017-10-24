const fs = require('fs');
const path = require('path');
const marked = require('marked');
const got = require('got');

const githubMarkdownCSS = fs.readFileSync(path.join(__dirname, './node_modules/github-markdown-css/github-markdown.css'), 'utf8');

const docUrl = 'https://raw.githubusercontent.com/acdlite/recompose/master/docs/API.md';

const getDocs = () => got(docUrl);

getDocs().then(response => console.log(response))