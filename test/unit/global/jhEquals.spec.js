describe('adminBurndown', function() {
	'use strict';

	var scope,
		elem;

		beforeEach(function() {
			module('jhApp');

			inject(function($rootScope, $compile) {
		        scope = $rootScope;

		        elem = angular.element('<input type="password" name="password" ng-model="adminUsersDetails.user.password" jh-equals="{{adminUsersDetails.user.passwordconfirm}}"><input type="password" name="newpasswordconfirm" ng-model="adminUsersDetails.user.passwordconfirm">');

		        $compile(elem)(scope);
		        scope.$digest();
			});

		});


	// it('should check if values are equal', function() {
		
	// });

});