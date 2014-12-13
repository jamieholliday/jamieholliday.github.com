'use strict';
angular.module('jhApp')
.controller('adminPostsCtrl', function($scope, resourceCache) {
	$scope.posts = resourceCache.query('post');

	$scope.delete = function(post) {
		resourceCache.delete('post', {id:post._id}, function(responceData) {
			if(responceData.deleted === true) {
				$scope.posts = resourceCache.query('post');
			}
		});
	}
});