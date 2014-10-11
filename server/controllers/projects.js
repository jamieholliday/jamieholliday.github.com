var Project = require('mongoose').model('Project');

exports.getProjects = function(req, res) {
	Project.find({}).exec(function(err, collection) {
		res.send(collection);
	});
};

exports.newProject = function(req, res) {
	var projectData = {
		name: req.body.name,
		description: req.body.description,
		tags: req.body.tags,
		published: req.body.published,
		date: new Date(),
		permalink: req.body.permalink
	};
	Project.create(projectData, function(err, project) {
		res.send(project);
	});
};

exports.getProjectById = function(req, res) {
	console.log(req.params.id);
	Project.find({_id:req.params.id}).exec(function(err, project) {
		res.send(project[0]);
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