const fs = require('fs');
const path = require('path');
const got = require('got');
const cheerio = require('cheerio');

const githubMarkdownCSS = fs.readFileSync(path.join(__dirname, './node_modules/github-markdown-css/github-markdown.css'), 'utf8');
const docUrl = 'https://github.com/acdlite/recompose/blob/master/docs/API.md';


(async () => {
  const pageHtml = (await got(docUrl)).body;
  const docsHtml = cheerio.load(pageHtml)('.markdown-body');

  const html = `
  <!DOCTYPE html>
  <html class=docs lang=en>
    <head>
      <meta charset=utf-8>
      <style>
        ${githubMarkdownCSS}
        .markdown-body {
          padding: 45px;
        }
      </style>
    </head>
    <body>
      ${docsHtml}
    </body>
  </html>
  `;

  fs.writeFileSync('API.html', html, 'utf8');
})();
