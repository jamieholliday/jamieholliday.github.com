'use strict';
angular.module('jhApp')
.controller('adminProjectsDetailsCtrl', function($scope, $stateParams, projects) {
	var project = projects.get({id:$stateParams.id});
	$scope.project = project;

	$scope.publish = function(bool) {
		project.published = bool;
	};

	$scope.saveForm = function() {
		console.log($scope.project);
		projects.update({id:project._id}, project);
	};
});