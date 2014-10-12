var	projects = require('../controllers/projects');
var	posts = require('../controllers/posts');

module.exports = function(router) {
	//Users
	// router.get('/api/users')

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

	router.all('/api/*', function(req, res) {
		console.log('404');
		res.send(404);
	});

}
