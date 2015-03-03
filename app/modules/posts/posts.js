'use strict';
angular.module('jhApp')
.factory('posts', function($resource) {
	
	var PostsResource = $resource('api/posts/:id', {id: '@id'},
		{update: {method:'PUT', isArray:false}
	});

	return PostsResource;
});