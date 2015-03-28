'use strict';
angular.module('jhApp')
.controller('adminPostsCtrl', function(resourceCache, jhNotifier) {
	
    var adminPosts = this;
	resourceCache.query('post')
	.then(function(items) {
		adminPosts.items = items;
	});

	adminPosts.delete = function(post) {
		resourceCache.delete('post', {id:post._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				resourceCache.query('post')
				.then(function(items) {
					adminPosts.items = items;
				});
				jhNotifier.notify('Post deleted');
			}
		});
	};
});