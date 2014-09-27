var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
	name: {type: String, required: '{PATH} is required'},
	description: String,
	tags: String,
	published: {type: Boolean, required: '{PATH} is required'},
	date: {type: Date, required: '{PATH} is required'},
	permalink: String
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
				date: new Date('10/1/2014'),
				permalink: 'test1'
			});
			Project.create({
				name: 'Test Project 2',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aspernatur, inventore repudiandae? Ab itaque quaerat, maxime, adipisci voluptatibus doloremque et necessitatibus, ipsam voluptas ut eaque. A facilis obcaecati, assumenda vero.',
				tags: 'Tag1, Tag2',
				published: true,
				date: new Date('10/2/2014'),
				permalink: ''
			});
		}
	});
};