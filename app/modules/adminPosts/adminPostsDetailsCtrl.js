'use strict';
angular.module('jhApp')
.controller('adminPostsDetailsCtrl', function($stateParams, $location, resourceCache, jhNotifier) {

	var adminPostsDetails = this;

	//setup
	adminPostsDetails.post = {
		published: false
	};

	//if there is an id this edit if not its new
	if($stateParams && $stateParams.id) {
		resourceCache.get('post', {id:$stateParams.id})
		.then(function(obj) {
			adminPostsDetails.post = obj;
		});
	}

	//Public
	adminPostsDetails.publish = function(bool) {
		adminPostsDetails.post.published = bool;
	};

	adminPostsDetails.saveForm = function(isValid) {
		if (!isValid) { 
			return false; 
		}
		if(adminPostsDetails.post._id) {
			adminPostsDetails._updatePost();
		} else {
			adminPostsDetails._newPost();
		}
	};

	adminPostsDetails.delete = function() {
		resourceCache.delete('post', {id:adminPostsDetails.post._id})
		.then(function(responceData) {
			if(responceData.deleted === true) {
				$location.path('/adminposts');
			}
		});
	};

	//Private
	adminPostsDetails._updatePost = function() {
		resourceCache.update('post', {id:post._id}, post)
		.then(function(responceData) {
			if(responceData.message === 'Success') {
				jhNotifier.notify('Updated post');
			}
		});
	};

	adminPostsDetails._newPost = function() {
		resourceCache.save('post', post)
		.then(function(responceData) {
			if(responceData._id) {
				$location.path('/adminposts/' + responceData._id);
				jhNotifier.notify('Saved post');
			}
		});
	};
});