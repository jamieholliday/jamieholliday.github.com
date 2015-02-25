describe('accountLogoutCtrl', function() {
	'use strict';

    var createController, 
        $rootScope, 
        $state,
        deferred, 
        scope, 
        jhAuth,
        accountLogout;

    beforeEach(module('jhApp'));

    beforeEach(inject(function($controller, _$rootScope_, $q) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        deferred = $q.defer();

        jhAuth = {
            logoutUser: function() {}
        };

        $state = {
            go: function() {}
        };

        createController = function() {
            return $controller('accountLogoutCtrl', { 
                jhAuth: jhAuth,
                $state: $state
            } );
        };

        spyOn(jhAuth, 'logoutUser').and.returnValue(deferred.promise);
        spyOn($state, 'go');
        
        accountLogout = createController();
    }));

    it('should log you out', function() {
        expect(jhAuth.logoutUser).toHaveBeenCalled();
        deferred.resolve();
        scope.$digest();
        expect($state.go).toHaveBeenCalledWith('projects');
    });

});