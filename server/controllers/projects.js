var Project = require('mongoose').model('Project');

exports.getProjects = function(req, res) {
	Project.find({}).exec(function(err, collection) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send(collection);
		}
	});
};

exports.newProject = function(req, res) {
	var projectData = {
		name: req.body.name,
		description: req.body.description,
		tags: req.body.tags,
		published: req.body.published,
		date: new Date(),
		//permalink: req.body.permalink,
		url: req.body.url,
		type: req.body.type
	};

	Project.create(projectData, function(err, project) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send(project);
		}
	});
};

exports.getProjectById = function(req, res) {
	Project.find({_id:req.params.id}).exec(function(err, project) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send(project[0]);
		}
	});
};

exports.updateProject = function(req, res) {
	var projectUpdates = {
		name: req.body.name,
		description: req.body.description,
		tags: req.body.tags,
		published: req.body.published,
		date: new Date(),
		//permalink: req.body.permalink,
		url: req.body.url,
		type: req.body.type
	};

	//remove undefined values
	for(var key in projectUpdates) {
		if(projectUpdates.hasOwnProperty(key) && !projectUpdates[key]) {
			delete projectUpdates[key];
		}
	}

	Project.update({_id:req.params.id}, projectUpdates, function(err, numberAffected, raw) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send({message: 'Success'});	
		}
	});
};

exports.deleteProject = function(req, res) {
	Project.remove({_id:req.params.id}).exec(function(err, bool) {
		if(err) {
			res.send({error: err, message: 'Error Deleting'})
		} else {
			success = {
				deleted: false,
				_id: req.params.id
			};
			if(bool === 1) {
				success.deleted = true;
			}
			res.send(success);
		}
	});
}