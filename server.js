var express = require('express');
var env = process.env.NODE_ENV = 'development';
var app = express();
var router = express.Router();
var config = require('./server/config/config')[env];
var path = require('path');

require('./server/config/models')(config);
require('./server/config/express')(app, config, router);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(router, config);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});


