'use strict';
angular.module('jhApp')
.controller('projectsCtrl', function(resourceCache) {
	
    var projects = this;
	projects.items = resourceCache.query('project');
});