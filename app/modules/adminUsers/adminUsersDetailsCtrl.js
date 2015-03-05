'use strict';
angular.module('jhApp')
.controller('adminUsersDetailsCtrl', function($stateParams, users, jhNotifier) {

	var adminUsersDetails = this;

	users.get({id:$stateParams.id}).$promise
	.then(function(obj) {
		adminUsersDetails.user = obj;
	});

	adminUsersDetails.saveForm = function(isValid) {
		if (!isValid) { 
			return false;
		}
		adminUsersDetails._updateUser();
	};

	adminUsersDetails._updateUser = function() {
		users.update({id:adminUsersDetails.user._id}, adminUsersDetails.user).$promise
		.then(function(responceData) {
			if(responceData.message === 'Success') {
				jhNotifier.notify('Updated user');
			}
		});
	};

});