'use strict';
angular.module('jhApp')
.controller('postsDetailsCtrl', function($scope, $stateParams, resourceCache) {
	$scope.post = resourceCache.get('post', {id:$stateParams.id});
});
