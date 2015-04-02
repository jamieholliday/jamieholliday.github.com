'use strict';
angular.module('jhApp')
.controller('projectsCtrl', function(resourceCache) {
	
    var projects = this;

	resourceCache.query('project')
	.then(function(items) {
		projects.items = items.filter(function(item) {
			return item.type === 'project';
		});

		projects.presentations = items.filter(function(item) {
			return item.type === 'presentation';
		});
	});
	
});