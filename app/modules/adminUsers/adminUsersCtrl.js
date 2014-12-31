'use strict';
angular.module('jhApp')
.controller('adminUsersCtrl', function($scope, users, jhNotifier) {
	$scope.users = users.query();

	$scope.delete = function(user) {
		users.delete({id:user._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				jhNotifier.notify('User deleted');
			}
		});
	}
});