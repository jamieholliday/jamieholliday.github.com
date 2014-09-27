var	projects = require('../controllers/projects');

module.exports = function(router) {
	//Users
	// router.get('/api/users')

	//Projects
	router.get('/api/projects', projects.getProjects);
	router.get('/api/projects/:id', projects.getProjectById);
	router.put('/api/projects/:id', projects.updateProject);

	router.all('/api/*', function(req, res) {
		console.log('404');
		res.send(404);
	});

}
