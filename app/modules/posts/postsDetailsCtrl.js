'use strict';
angular.module('jhApp')
.controller('postsDetailsCtrl', function($stateParams, resourceCache) {
    
    var postsDetails = this;
	
	resourceCache.get('post', {id:$stateParams.id})
	.then(function(obj) {
		postsDetails.post = obj;
	});
});
