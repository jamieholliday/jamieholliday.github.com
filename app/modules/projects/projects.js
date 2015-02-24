'use strict';
angular.module('jhApp')
.factory('projects', function($resource) {
	var ProjectsResource = $resource('api/projects/:id', {id: '@id'},
		{update: {method:'PUT', isArray:false}
	});

	return ProjectsResource;
});