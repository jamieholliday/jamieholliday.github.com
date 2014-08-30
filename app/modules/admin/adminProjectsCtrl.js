'use strict';
angular.module('jhApp')
.controller('adminProjectsCtrl', function($scope, projects) {
	$scope.projects = projects.items;
	// console.log(projects);
});