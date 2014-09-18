'use strict';
angular.module('jhApp')
.controller('adminProjectsDetailsCtrl', function($scope, $stateParams, projects) {
	$scope.project = projects.get({id:$stateParams.id});
});