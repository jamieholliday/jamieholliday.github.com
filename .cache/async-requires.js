// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "page-component---node-modules-gatsby-plugin-offline-app-shell-js": require("gatsby-module-loader?name=page-component---node-modules-gatsby-plugin-offline-app-shell-js!/Users/peterfox/Documents/jamieholliday.com/node_modules/gatsby-plugin-offline/app-shell.js"),
  "page-component---src-templates-blog-post-js": require("gatsby-module-loader?name=page-component---src-templates-blog-post-js!/Users/peterfox/Documents/jamieholliday.com/src/templates/blog-post.js"),
  "page-component---src-pages-blog-js": require("gatsby-module-loader?name=page-component---src-pages-blog-js!/Users/peterfox/Documents/jamieholliday.com/src/pages/blog.js"),
  "page-component---src-pages-index-js": require("gatsby-module-loader?name=page-component---src-pages-index-js!/Users/peterfox/Documents/jamieholliday.com/src/pages/index.js")
}

exports.json = {
  "offline-plugin-app-shell-fallback.json": require("gatsby-module-loader?name=path---offline-plugin-app-shell-fallback!/Users/peterfox/Documents/jamieholliday.com/.cache/json/offline-plugin-app-shell-fallback.json"),
  "drive-a-digger.json": require("gatsby-module-loader?name=path---drive-a-digger!/Users/peterfox/Documents/jamieholliday.com/.cache/json/drive-a-digger.json"),
  "bucket-list.json": require("gatsby-module-loader?name=path---bucket-list!/Users/peterfox/Documents/jamieholliday.com/.cache/json/bucket-list.json"),
  "blog.json": require("gatsby-module-loader?name=path---blog!/Users/peterfox/Documents/jamieholliday.com/.cache/json/blog.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/peterfox/Documents/jamieholliday.com/.cache/json/index.json")
}

exports.layouts = {
  "index": require("gatsby-module-loader?name=layout-component---index!/Users/peterfox/Documents/jamieholliday.com/src/layouts/index")
}