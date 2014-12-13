'use strict';
angular.module('jhApp')
.controller('postsDetailsCtrl', function($scope, $stateParams, posts) {
	$scope.post = posts.get({id:$stateParams.id});
});
