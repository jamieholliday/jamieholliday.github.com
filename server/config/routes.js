'use strict';
var	projects = require('../controllers/projects'),
	posts = require('../controllers/posts'),
	pages = require('../controllers/pages'),
	users = require('../controllers/users'),
	aws = require('../controllers/aws'),
	auth = require('./auth');

module.exports = function(router, config) {
	//Users
	router.get('/api/users', auth.requiresRole('admin'), users.getUsers);
	router.get('/api/users/:id', auth.requiresRole('admin'), users.getUserById);
	router.put('/api/users/:id', auth.requiresRole('admin'), users.updateUser);
	//router.post('/api/users', auth.requiresRole('admin'), users.createUser);
	//router.delete('/api/users', users.deleteUser);

	router.post('/login', auth.authenticate);
	router.post('/logout', function(req, res) {
		req.logout();
		res.end();
	});

	//Projects
	router.get('/api/projects', projects.getProjects);
	router.post('/api/projects', projects.newProject);
	router.get('/api/projects/:id', projects.getProjectById);
	router.put('/api/projects/:id', projects.updateProject);
	router.delete('/api/projects/:id', projects.deleteProject);

	//Posts
	router.get('/api/posts', posts.getPosts);
	router.post('/api/posts', posts.newPost);
	router.get('/api/posts/:id', posts.getPostById);
	router.put('/api/posts/:id', posts.updatePost);
	router.delete('/api/posts/:id', posts.deletePost);

	//Pages
	router.get('/api/pages', pages.getPages);
	router.post('/api/pages', pages.newPage);
	router.get('/api/pages/:id', pages.getPageById);
	router.put('/api/pages/:id', pages.updatePage);
	router.delete('/api/pages/:id', pages.deletePage);

	//Aws
	router.get('/api/aws', aws.getCreds);

	router.all('/api/*', function(req, res) {
		res.send(404);
	});

	router.get('/*', function(req, res) {
	  res.sendfile(config.rootPath + '/public/index.html');
	});

};
