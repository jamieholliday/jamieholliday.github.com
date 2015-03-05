'use strict';
angular.module('jhApp')
.controller('accountLogoutCtrl', function($state, jhAuth) {
	
	var accountLogout = this;

	accountLogout.logoutUser = function() {
		jhAuth.logoutUser()
		.then(function() {
			$state.go('projects');
		});
	};

	accountLogout.logoutUser();
});