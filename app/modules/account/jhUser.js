'use strict';
angular.module('jhApp')
.factory('jhUser', function($resource) {
	
    var UserResource = $resource('/api/users/:id', {_id: '@id'}, {update: {method: 'PUT', isArray:false}});
    
    return UserResource;
});
