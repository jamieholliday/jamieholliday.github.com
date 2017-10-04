// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "page-component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/Users/peterfox/Documents/jamieholliday.com/node_modules/gatsby-plugin-offline/app-shell.js")),
  "page-component---src-templates-blog-post-js": preferDefault(require("/Users/peterfox/Documents/jamieholliday.com/src/templates/blog-post.js")),
  "page-component---src-pages-blog-js": preferDefault(require("/Users/peterfox/Documents/jamieholliday.com/src/pages/blog.js")),
  "page-component---src-pages-index-js": preferDefault(require("/Users/peterfox/Documents/jamieholliday.com/src/pages/index.js"))
}

exports.json = {
  "offline-plugin-app-shell-fallback.json": require("/Users/peterfox/Documents/jamieholliday.com/.cache/json/offline-plugin-app-shell-fallback.json"),
  "drive-a-digger.json": require("/Users/peterfox/Documents/jamieholliday.com/.cache/json/drive-a-digger.json"),
  "bucket-list.json": require("/Users/peterfox/Documents/jamieholliday.com/.cache/json/bucket-list.json"),
  "blog.json": require("/Users/peterfox/Documents/jamieholliday.com/.cache/json/blog.json"),
  "index.json": require("/Users/peterfox/Documents/jamieholliday.com/.cache/json/index.json")
}

exports.layouts = {
  "index": preferDefault(require("/Users/peterfox/Documents/jamieholliday.com/src/layouts/index"))
}