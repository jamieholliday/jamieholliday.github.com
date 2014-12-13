'use strict';
angular.module('jhApp')
.controller('adminProjectsCtrl', function($scope, projects) {
	$scope.projects = projects.query();
	
	$scope.onConfirm = function() {
		console.log('confirm');
	}
});