// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---cache-dev-404-page-js": preferDefault(require("/Users/peterfox/Documents/jamieholliday.com/.cache/dev-404-page.js")),
  "page-component---src-templates-blog-post-js": preferDefault(require("/Users/peterfox/Documents/jamieholliday.com/src/templates/blog-post.js")),
  "page-component---src-pages-blog-js": preferDefault(require("/Users/peterfox/Documents/jamieholliday.com/src/pages/blog.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/peterfox/Documents/jamieholliday.com/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/peterfox/Documents/jamieholliday.com/.cache/json/dev-404-page.json"),
  "bucket-list.json": require("/Users/peterfox/Documents/jamieholliday.com/.cache/json/bucket-list.json"),
  "drive-a-digger.json": require("/Users/peterfox/Documents/jamieholliday.com/.cache/json/drive-a-digger.json"),
  "blog.json": require("/Users/peterfox/Documents/jamieholliday.com/.cache/json/blog.json"),
  "index.json": require("/Users/peterfox/Documents/jamieholliday.com/.cache/json/index.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/peterfox/Documents/jamieholliday.com/src/layouts/index"))
}