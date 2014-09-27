'use strict';
angular.module('jhApp')
.controller('adminProjectsDetailsCtrl', function($scope, $stateParams, projects) {
	var project = projects.get({id:$stateParams.id});
	$scope.project = project;

	$scope.getPublished = function() {
		return project.published ? 'Published' : 'Draft';
	}
});