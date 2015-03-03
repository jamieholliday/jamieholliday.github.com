'use strict';
angular.module('jhApp')
.factory('pages', function($resource) {
	
	var PagesResource = $resource('api/pages/:id', {id: '@id'},
		{update: {method:'PUT', isArray:false}
	});

	return PagesResource;
});
