'use strict';
angular.module('jhApp')
.controller('adminUsersCtrl', function($scope, resourceCache, jhNotifier) {
	$scope.users= resourceCache.query('user');

	$scope.delete = function(user) {
		resourceCache.delete('user', {id:user._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				$scope.projects = resourceCache.query('user');
				jhNotifier.notify('User deleted');
			}
		});
	}
});