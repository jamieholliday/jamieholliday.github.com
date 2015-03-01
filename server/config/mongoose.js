var mongoose = require('mongoose'),
	projectModel = require('../models/Project'),
	userModel = require('../models/Users');

module.exports = function() {
	mongoose.connect(process.env.DB);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback() {
		console.log('jamieholliday db opened');
	});

	projectModel.createDefaultProjects();
	userModel.createDefaultUsers();
};