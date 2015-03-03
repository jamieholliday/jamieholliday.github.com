'use strict';
angular.module('jhApp')
.controller('postsCtrl', function(resourceCache) {
	
    var posts = this;
	posts.items = resourceCache.query('post');
});