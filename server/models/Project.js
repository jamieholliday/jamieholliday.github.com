var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
	name: {type: String, required: '{PATH} is required'},
	description: String,
	tags: String,
	url: String,
	published: {type: Boolean, required: '{PATH} is required'},
	date: {type: Date, required: '{PATH} is required'},
	//permalink: String,
	type: String
});

var Project = mongoose.model('Project', projectSchema);