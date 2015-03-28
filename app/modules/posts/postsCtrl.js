'use strict';
angular.module('jhApp')
.controller('postsCtrl', function(resourceCache) {
	
    var posts = this;
	resourceCache.query('post')
	.then(function(items) {
		posts.items = items;
	});
});