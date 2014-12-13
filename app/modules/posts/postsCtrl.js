'use strict';
angular.module('jhApp')
.controller('postsCtrl', function($scope, posts) {
	$scope.posts = posts.query();
});