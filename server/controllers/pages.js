var Page = require('mongoose').model('Page');

exports.getPages = function(req, res) {
	Page.find({}).exec(function(err, collection) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send(collection);
		}
	});
};

exports.newPage = function(req, res) {
	var pageData = {
		name: req.body.name,
		content: req.body.content,
		published: req.body.published,
		date: new Date(),
		permalink: req.body.permalink,
	};
	Page.create(pageData, function(err, page) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send(page);
		}
	});
};

exports.getPageById = function(req, res) {
	Page.find({_id:req.params.id}).exec(function(err, page) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send(page[0]);
		}
	});
};

exports.updatePage = function(req, res) {
	Page.findOne({_id:req.params.id}, function(err, page) {
		if(err) {
			res.send({error: err, message: 'Error'});
		}

		page.name = req.body.name;
		page.content = req.body.content;
		page.published = req.body.published;
		page.permalink = req.body.permalink;

		page.save(function(err) {
			if(err) {
				res.send({error: err, message: 'Error'});
			} else {
				res.send({message: 'Success'});
			}
		});
		
	});
};

exports.deletePage = function(req, res) {
	Page.remove({_id:req.params.id}).exec(function(err, bool) {
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
