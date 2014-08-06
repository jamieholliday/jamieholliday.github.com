'use strict';

angular.module('jhApp')
.controller('dashboardCtrl', function($scope, projects) {
	$scope.projects = projects.items;
});