'use strict';
angular.module('jhApp')
.controller('adminUsersDetailsCtrl', function($scope, $stateParams, $location, users, jhNotifier) {

	var _updateUser,
		user;

	users.get({id:$stateParams.id}).$promise.then(function(obj) {
		$scope.user = user = obj;
	});

	$scope.saveForm = function(isValid) {
		if (!isValid) return;
		_updateUser();
	};

	_updateUser = function() {
		users.update({id:user._id}, user).$promise.then(function(responceData) {
			if(responceData.message === 'Success') {
				jhNotifier.notify('Updated user');
			}
		});
	}

});