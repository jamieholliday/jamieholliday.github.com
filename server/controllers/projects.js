var Project = require('mongoose').model('Project');

exports.getProjects = function(req, res) {
	Project.find({}).sort({date: 'desc'}).exec(function(err, collection) {
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
		permalink: req.body.permalink,
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
	Project.findOne({_id:req.params.id}, function(err, project) {
		if(err) {
			res.send({error: err, message: 'Error'});
		}

		project.name = req.body.name;
		project.description = req.body.description;
		project.tags = req.body.tags;
		project.published = req.body.published;
		project.permalink = req.body.permalink;
		project.url = req.body.url;
		project.type = req.body.typ;
		project.img = req.body.img;

		project.save(function(err) {
			if(err) {
				res.send({error: err, message: 'Error'});
			} else {
				res.send({message: 'Success'});
			}
		});
		
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