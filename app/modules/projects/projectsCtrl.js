'use strict';
angular.module('jhApp')
.controller('projectsCtrl', function($scope, projects) {
	$scope.projects = projects.items;
});