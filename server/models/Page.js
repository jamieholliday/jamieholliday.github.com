var mongoose = require('mongoose');

var pagesSchema = mongoose.Schema({
	name: {type: String, required: '{PATH} is required'},
	content: String,
	published: {type: Boolean, required: '{PATH} is required'},
	date: {type: Date, required: '{PATH} is required'},
	//permalink: String,
});

var Page = mongoose.model('Page', pagesSchema);
