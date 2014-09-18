var mongoose = require('mongoose'),
	projectModel = require('../models/Project');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback() {
		console.log('jamieholliday db opened');
	});

	projectModel.createDefaultProjects();
};