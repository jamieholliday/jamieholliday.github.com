'use strict';
angular.module('jhApp')
.controller('adminPostsCtrl', function($scope, resourceCache, jhNotifier) {
	$scope.posts = resourceCache.query('post');

	$scope.delete = function(post) {
		resourceCache.delete('post', {id:post._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				$scope.posts = resourceCache.query('post');
				jhNotifier.notify('Post Deleted');
			}
		});
	}
});