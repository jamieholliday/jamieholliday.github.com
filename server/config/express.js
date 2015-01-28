var express = require('express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	passport = require('passport'),
	path = require('path'),
	favicon = require('serve-favicon'),
    MongoStore = require('connect-mongo')(session);

module.exports = function(app, config, router) {
	app.use(express.static(path.join(config.rootPath, 'public')));
	//app.use(favicon(__dirname + '/public/favicon.ico'));
	app.use(logger('dev'));
	app.use(cookieParser());
	app.use(bodyParser.json());
    app.use(session({
        secret: config.secret,
        maxAge: new Date(Date.now() + 3600000),
        store: new MongoStore({url: config.db})
    }))
	app.use(passport.initialize());
	app.use(passport.session());
	app.set('port', config.port);
	app.use('/', router);
}