'use strict';
angular.module('jhApp')
.controller('postsCtrl', function($scope, resourceCache) {
	$scope.posts = resourceCache.query('post');
});