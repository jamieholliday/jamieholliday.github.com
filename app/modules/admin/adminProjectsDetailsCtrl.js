'use strict';
angular.module('jhApp')
.controller('adminProjectsDetailsCtrl', function($scope, $stateParams, projects) {
	$scope.projectId = $stateParams.id;
});