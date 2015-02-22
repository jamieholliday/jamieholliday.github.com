var mongoose = require('mongoose');
var permalink = require('mongoose-permalink');

var projectSchema = mongoose.Schema({
	name: {type: String, required: '{PATH} is required'},
	description: String,
	tags: String,
	url: String,
	published: {type: Boolean, required: '{PATH} is required'},
	date: {type: Date, required: '{PATH} is required'},
	permalink: String,
	type: String,
	img: String
});

projectSchema.plugin(permalink, {
	sources: ['name']
});

var Project = mongoose.model('Project', projectSchema);

exports.createDefaultProjects = function() {
	Project.find({}).exec(function(err, collection) {
		//Add some default projects to test
		if(collection.length === 0) {
			Project.create({
				name: 'Test Project 1',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aspernatur, inventore repudiandae? Ab itaque quaerat, maxime, adipisci voluptatibus doloremque et necessitatibus, ipsam voluptas ut eaque. A facilis obcaecati, assumenda vero.',
				tags: 'Tag1, Tag2',
				published: true,
				url: 'http://www.google.com',
				date: new Date('10/1/2014'),
				permalink: 'test1'
			});
			Project.create({
				name: 'Test Project 2',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aspernatur, inventore repudiandae? Ab itaque quaerat, maxime, adipisci voluptatibus doloremque et necessitatibus, ipsam voluptas ut eaque. A facilis obcaecati, assumenda vero.',
				tags: 'Tag1, Tag2',
				published: true,
				url: 'http://www.google.com',
				date: new Date('10/2/2014'),
				permalink: ''
			});
		}
	});
};