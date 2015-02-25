'use strict';
angular.module('jhApp')
.controller('adminPostsCtrl', function(resourceCache, jhNotifier) {
    var adminPosts = this;
	adminPosts.items = resourceCache.query('post');

	adminPosts.delete = function(post) {
		resourceCache.delete('post', {id:post._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				adminPosts.items = resourceCache.query('post');
				jhNotifier.notify('Post deleted');
			}
		});
	};
});