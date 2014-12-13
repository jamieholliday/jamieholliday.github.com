'use strict';
angular.module('jhApp')
.controller('adminPostsDetailsCtrl', function($scope, $stateParams, $location, resourceCache) {

	var _updatePost,
		_newPost,
		post;

	//Setup
	post = {
		published: false
	};

	//if there is an id this edit if not its new
	if($stateParams && $stateParams.id) {
		post = resourceCache.get('post', {id:$stateParams.id});
	}

	$scope.post = post;

	//Public
	$scope.publish = function(bool) {
		post.published = bool;
	};

	$scope.saveForm = function(isValid) {
		if (!isValid) return;
		if(post._id) {
			_updatePost();
		} else {
			_newPost();
		}
	};

	$scope.delete = function() {
		resourceCache.delete('post', {id:post._id}, function(responceData) {
			if(responceData.deleted === true) {
				$location.path('/adminposts');
			}
		});
	}

	//Private
	_updatePost = function() {
		resourceCache.update('post', {id:post._id}, post, function(responceData) {
			
		});
	}

	_newPost = function() {
		//TODO use promise here
		resourceCache.save('post', post, function(responceData) {
			if(responceData._id) {
				$location.path('/adminposts/' + responceData._id);
			}
		});
	}
});