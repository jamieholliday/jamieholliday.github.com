'use strict';
angular.module('jhApp')
.controller('postsDetailsCtrl', function($scope, $stateParams, resourceCache) {
	
	resourceCache.get('post', {id:$stateParams.id}).then(function(obj) {
		$scope.post = obj;
	});
});
