var Project = require('mongoose').model('Project');

exports.getProjects = function(req, res) {
	console.log('all projects');
	Project.find({}).exec(function(err, collection) {
		res.send(collection);
	});
};

exports.getProjectById = function(req, res) {
	console.log(req.params.id);
	Project.find({_id:req.params.id}).exec(function(err, course) {
		res.send(course[0]);
	});
};

exports.updateProject = function(req, res) {
	var projectUpdates = {
		name: req.body.name,
		description: req.body.description,
		tags: req.body.tags,
		published: req.body.published,
		date: new Date(),
		permalink: req.body.permalink
	};

	Project.update({_id:req.params.id}, projectUpdates, function(err, numberAffected, raw) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send({message: 'Success'});	
		}
	});
}