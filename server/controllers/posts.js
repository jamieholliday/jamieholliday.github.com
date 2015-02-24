var Post = require('mongoose').model('Post');

exports.getPosts = function(req, res) {
	Post.find({}).exec(function(err, collection) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send(collection);
		}
	});
};

exports.newPost = function(req, res) {
	var postData = {
		name: req.body.name,
		content: req.body.content,
		tags: req.body.tags,
		published: req.body.published,
		date: new Date(),
		permalink: req.body.permalink,
	};
	Post.create(postData, function(err, post) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send(post);
		}
	});
};

exports.getPostById = function(req, res) {
	Post.find({_id:req.params.id}).exec(function(err, post) {
		if(err) {
			res.send({error: err, message: 'Error'});
		} else {
			res.send(post[0]);
		}
	});
};

exports.updatePost = function(req, res) {
	Post.findOne({_id:req.params.id}, function(err, post) {
		if(err) {
			res.send({error: err, message: 'Error'});
		}

		post.name = req.body.name;
		post.content = req.body.content;
		post.tags = req.body.tags;
		post.published = req.body.published;
		post.permalink = req.body.permalink;

		post.save(function(err) {
			if(err) {
				res.send({error: err, message: 'Error'});
			} else {
				res.send({message: 'Success'});
			}
		});
		
	});
};

exports.deletePost = function(req, res) {
	Post.remove({_id:req.params.id}).exec(function(err, bool) {
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