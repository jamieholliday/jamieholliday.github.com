'use strict';
angular.module('jhApp')
.factory('users', function($resource) {
	
	var UsersResource = $resource('api/users/:id', {id: '@id'},
		{update: {method:'PUT', isArray:false}
	});

	return UsersResource;
});