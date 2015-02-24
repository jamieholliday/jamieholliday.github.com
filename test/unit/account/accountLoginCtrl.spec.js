describe('accountLoginCtrl', function() {
	'use strict';

    var createController, 
        $rootScope, 
        $state,
        deferred, 
        scope, 
        jhNotifier,
        jhAuth,
        accountLogin, 
        $state;

    beforeEach(module('jhApp'));

    beforeEach(inject(function($controller, _$rootScope_, $q) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        deferred = $q.defer();

        jhNotifier = {
            error: function () {},
        };

        jhAuth = {
            authenticateUser: function() {}
        };

        $state = {
            go: function() {}
        };

        createController = function() {
            return $controller('accountLoginCtrl', { 
                jhNotifier: jhNotifier,
                jhAuth: jhAuth,
                $state: $state
            } );
        };

        accountLogin = createController();

        spyOn(jhNotifier, 'error');
        spyOn(jhAuth, 'authenticateUser').and.returnValue(deferred.promise);
        spyOn($state, 'go');
    }));

    it('should not sign try to sign in a user if the login form is not vaild', function() {
        accountLogin.signin(false);
        expect(jhAuth.authenticateUser).not.toHaveBeenCalled();
    });

    it('should not sign in a user is their is an error with the login details', function() {

        accountLogin.signin(true, 'john', '123');
        expect(jhAuth.authenticateUser).toHaveBeenCalledWith('john', '123');

        deferred.resolve(false);
        scope.$digest();
        expect(jhNotifier.error).toHaveBeenCalledWith('Incorrect login details');
    });

    it('should redirect the user to admin posts if they have been signed in correctly', function() {

        accountLogin.signin(true, 'john', '123');
        deferred.resolve(true);
        scope.$digest();
        expect($state.go).toHaveBeenCalledWith('adminposts');
    });

});