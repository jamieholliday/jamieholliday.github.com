// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "page-component---cache-dev-404-page-js": require("gatsby-module-loader?name=page-component---cache-dev-404-page-js!/Users/peterfox/Documents/jamieholliday.com/.cache/dev-404-page.js"),
  "page-component---src-templates-blog-post-js": require("gatsby-module-loader?name=page-component---src-templates-blog-post-js!/Users/peterfox/Documents/jamieholliday.com/src/templates/blog-post.js"),
  "page-component---src-pages-blog-js": require("gatsby-module-loader?name=page-component---src-pages-blog-js!/Users/peterfox/Documents/jamieholliday.com/src/pages/blog.js"),
  "page-component---src-pages-index-js": require("gatsby-module-loader?name=page-component---src-pages-index-js!/Users/peterfox/Documents/jamieholliday.com/src/pages/index.js")
}

exports.json = {
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/peterfox/Documents/jamieholliday.com/.cache/json/dev-404-page.json"),
  "bucket-list.json": require("gatsby-module-loader?name=path---bucket-list!/Users/peterfox/Documents/jamieholliday.com/.cache/json/bucket-list.json"),
  "drive-a-digger.json": require("gatsby-module-loader?name=path---drive-a-digger!/Users/peterfox/Documents/jamieholliday.com/.cache/json/drive-a-digger.json"),
  "blog.json": require("gatsby-module-loader?name=path---blog!/Users/peterfox/Documents/jamieholliday.com/.cache/json/blog.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/peterfox/Documents/jamieholliday.com/.cache/json/index.json")
}

exports.layouts = {
  "index": require("gatsby-module-loader?name=layout-component---index!/Users/peterfox/Documents/jamieholliday.com/src/layouts/index")
}