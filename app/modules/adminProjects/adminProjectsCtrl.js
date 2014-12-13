'use strict';
angular.module('jhApp')
.controller('adminProjectsCtrl', function($scope, resourceCache) {
	$scope.projects = resourceCache.query('project');

	$scope.delete = function(project) {
		resourceCache.delete('project', {id:project._id}, function(responceData) {
			if(responceData.deleted === true) {
				$scope.projects = resourceCache.query('project');
			}
		});
	}
});