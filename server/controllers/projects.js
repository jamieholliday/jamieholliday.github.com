var Project = require('mongoose').model('Project');

exports.getProjects = function(req, res) {
	console.log('all projects');
	Project.find({}).exec(function(err, collection) {
		res.send(collection);
	});
}

exports.getProjectById = function(req, res) {
	console.log(req.params.id);
	Project.find({_id:req.params.id}).exec(function(err, course) {
		res.send(course[0]);
	});
} 