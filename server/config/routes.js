var	projects = require('../controllers/projects');

module.exports = function(router) {
	//Users
	// router.get('/api/users')

	//Projects
	router.get('/api/projects', projects.getProjects);

	router.all('/api/*', function(req, res) {
		console.log('404');
		res.send(404);
	});

}
