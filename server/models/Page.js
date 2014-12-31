var mongoose = require('mongoose');
var permalink = require('mongoose-permalink');

var pagesSchema = mongoose.Schema({
	name: {type: String, required: '{PATH} is required'},
	content: String,
	published: {type: Boolean, required: '{PATH} is required'},
	date: {type: Date, required: '{PATH} is required'},
	permalink: String
});

pagesSchema.plugin(permalink, {
	sources: ['name']
});

var Page = mongoose.model('Page', pagesSchema);
