require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  port: process.env.PORT,
  apiPort: process.env.APIPORT,
  app: {
    title: 'Jamie Holliday - Frontend Developer',
    description: 'Portfolio, blog and general place for my stuff',
    meta: {
      charSet: 'utf-8',
    }
  }
}, environment);
