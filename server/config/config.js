var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {  
     development: {
          port: process.env.PORT || 3000,
          rootPath: rootPath
     },
     production: {
          port: process.env.PORT || 80,
          rootPath: rootPath
     }
};