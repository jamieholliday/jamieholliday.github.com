var	projects = require('../controllers/projects');

module.exports = function(router) {
	//Users
	// router.get('/api/users')

	//Projects
	router.get('/api/projects', projects.getProjects);
	router.post('/api/projects', projects.newProject);
	router.get('/api/projects/:id', projects.getProjectById);
	router.put('/api/projects/:id', projects.updateProject);
	router.delete('/api/projects/:id', projects.deleteProject);

	router.all('/api/*', function(req, res) {
		console.log('404');
		res.send(404);
	});

}
