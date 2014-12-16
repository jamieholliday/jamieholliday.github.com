'use strict';
angular.module('jhApp')
.controller('adminProjectsCtrl', function($scope, resourceCache, jhNotifier) {
	$scope.projects = resourceCache.query('project');

	$scope.delete = function(project) {
		resourceCache.delete('project', {id:project._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				$scope.projects = resourceCache.query('project');
				jhNotifier.notify('Project deleted');
			}
		});
	}
});