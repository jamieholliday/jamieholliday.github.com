'use strict';
angular.module('jhApp')
.controller('adminPostsCtrl', function($scope, posts) {
	$scope.posts = posts.query();

	$scope.delete = function(post) {
		posts.delete({id:post._id}, function(responceData) {
			if(responceData.deleted === true) {
				$scope.posts = posts.query();
			}
		});
	}
});