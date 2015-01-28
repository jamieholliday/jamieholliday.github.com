'use strict';
angular.module('jhApp')
.controller('accountLogoutCtrl', function($state, jhAuth) {
	jhAuth.logoutUser()
		.then(function(status) {
			$state.go('projects');
		});
});