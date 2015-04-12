describe('jhEquals', function() {
	'use strict';

	var scope,
		dirElement;

		beforeEach(function() {
			module('jhApp');
			module('templates');

			inject(function($rootScope, $compile) {
		        scope = $rootScope;
		        scope.user = {};

		        dirElement = angular.element('<input id="password" type="password" name="password" ng-model="user.password" jh-equals="{{user.passwordconfirm}}"><input id="newpasswordconfirm" type="password" name="newpasswordconfirm" ng-model="user.passwordconfirm" jh-equals="{{user.password}}>');

		        $compile(dirElement)(scope);
			});

			scope.$digest();
		});


	it('should check if values are equal', function() {
		var passwordInput = dirElement.find('#password');
		var confirmPasswordInput = dirElement.find('#newpasswordconfirm');

		angular.element(passwordInput).val('testpassword').trigger('input');
		angular.element(confirmPasswordInput).val('nottestpassword').trigger('input');
		scope.$digest();

		//expect this to be invalid

	});

});