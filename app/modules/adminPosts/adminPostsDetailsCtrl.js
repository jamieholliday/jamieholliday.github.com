'use strict';
angular.module('jhApp')
.controller('adminPostsDetailsCtrl', function($stateParams, $location, resourceCache, jhNotifier) {

	var _updatePost,
		_newPost,
		post,
        adminPostsDetails = this;

	//setup
	post = {
		published: false
	};

	//if there is an id this edit if not its new
	if($stateParams && $stateParams.id) {
		resourceCache.get('post', {id:$stateParams.id}).then(function(obj) {
			adminPostsDetails.post = post = obj;
		});
	} else {
		adminPostsDetails.post = post;
	}

	//Public
	adminPostsDetails.publish = function(bool) {
		post.published = bool;
	};

	adminPostsDetails.saveForm = function(isValid) {
		if (!isValid) { return; }
		if(post._id) {
			_updatePost();
		} else {
			_newPost();
		}
	};

	adminPostsDetails.delete = function() {
		resourceCache.delete('post', {id:post._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				$location.path('/adminposts');
			}
		});
	};

	//Private
	_updatePost = function() {
		resourceCache.update('post', {id:post._id}, post).then(function(responceData) {
			if(responceData.message === 'Success') {
				jhNotifier.notify('Updated post');
			}
		});
	};

	_newPost = function() {
		resourceCache.save('post', post).then(function(responceData) {
			if(responceData._id) {
				$location.path('/adminposts/' + responceData._id);
				jhNotifier.notify('Saved post');
			}
		});
	};
});