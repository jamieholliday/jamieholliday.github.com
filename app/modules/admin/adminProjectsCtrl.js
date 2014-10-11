'use strict';
angular.module('jhApp')
.controller('adminProjectsCtrl', function($scope, projects) {
	$scope.projects = projects.query();

	$scope.delete = function(project) {
		projects.delete({id:project._id}, function(responceData) {
			if(responceData.deleted === true) {
				$scope.projects = projects.query();
			}
		});
	}
});