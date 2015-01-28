var mongoose = require('mongoose');
var permalink = require('mongoose-permalink');

var postsSchema = mongoose.Schema({
	name: {type: String, required: '{PATH} is required'},
	content: String,
	tags: String,
	published: {type: Boolean, required: '{PATH} is required'},
	date: {type: Date, required: '{PATH} is required'},
	permalink: String
});

postsSchema.plugin(permalink, {
	sources: ['name']
});

var Post = mongoose.model('Post', postsSchema);