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
		//permalink: req.body.permalink,
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
	var pageUpdates = {
		name: req.body.name,
		content: req.body.content,
		published: req.body.published,
		date: new Date(),
		//permalink: req.body.permalink,
	};

	//remove undefined values
	for(var key in pageUpdates) {
		if(pageUpdates.hasOwnProperty(key) && !pageUpdates[key]) {
			delete pageUpdates[key];
		}
	}

	Page.update({_id:req.params.id}, pageUpdates, function(err, numberAffected, raw) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send({message: 'Success'});
		}
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
