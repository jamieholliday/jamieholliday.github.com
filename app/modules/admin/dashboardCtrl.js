'use strict';

angular.module('jhApp')
.controller('dashboardCtrl', function($scope, resourceCache) {
	$scope.pages = resourceCache.query('page');
});