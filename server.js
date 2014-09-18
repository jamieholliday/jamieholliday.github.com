var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('my-application');

var env = process.env.NODE_ENV = 'development';

var config = require('./server/config/config')[env]

var routes = require('./server/config/routes');

var app = express();
var router = express.Router();

app.use(favicon(__dirname + '/public/favicon.ico'));
// Only use logger for development environment
if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
}
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);

require('./server/config/routes')(router);
app.use('/', router);

/* Get all other pages. */
router.get('/*', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
  console.log('Express running');
});