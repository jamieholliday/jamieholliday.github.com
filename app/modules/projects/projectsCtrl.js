'use strict';
angular.module('jhApp')
.controller('projectsCtrl', function($scope, resourceCache) {
	$scope.projects = resourceCache.query('project');
});