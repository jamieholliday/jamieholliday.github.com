const summary = require('./content/summary');

module.exports = {
  exportPathMap() {
    const posts = Object.keys(summary.fileMap).reduce((acc, next) => {
      const id = summary.fileMap[next].base.split('.json').join('');
      return Object.assign({}, acc, {
        [`/blog/${id}`]: { page: '/post', query: { id } },
      });
    }, {});

    return Object.assign({}, posts, {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
    });
  },
};
