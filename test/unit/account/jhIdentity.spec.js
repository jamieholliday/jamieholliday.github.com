describe('jhIdentity', function() {
	'use strict';

    var jhIdentity,
        $window;

    beforeEach(module('jhApp'));

    beforeEach(function() {
    	module(function($provide) {
    		$provide.value('$window', {
                sessionStorage: {
                    getItem: function() {},
                    setItem: function() {},
                    removeItem: function() {}
                }
            });
    	});
    });

    beforeEach(inject(function(_jhIdentity_, _$window_) {
    	jhIdentity = _jhIdentity_;
    	$window = _$window_;

        spyOn($window.sessionStorage, 'getItem').and.returnValue(JSON.stringify({user: 'john', roles: ['admin']}));

        spyOn($window.sessionStorage, 'setItem');
        spyOn($window.sessionStorage, 'removeItem');
    }));

    it('should show is user is authenticated', function() {
        expect(jhIdentity.isAuthenticated()).toEqual(true);
    });

    it('should check if the user has the correct role', function() {
        expect(jhIdentity.isAuthorized('ninja')).toEqual(false);
        expect(jhIdentity.isAuthorized('admin')).toEqual(true);
    });

    it('should remove the current user from session storage if user is not defined', function() {
        jhIdentity.setCurrentUser();
        expect($window.sessionStorage.setItem).not.toHaveBeenCalled();
        expect($window.sessionStorage.removeItem).toHaveBeenCalledWith('currentUser');
        expect(jhIdentity.currentUser).toEqual(undefined);
    });

    it('should set the currentUser to sessionStorage', function() {
        jhIdentity.setCurrentUser({user: 'john'});
        expect($window.sessionStorage.setItem).toHaveBeenCalledWith('currentUser', '{"user":"john"}');
        expect(jhIdentity.currentUser).toEqual({user: 'john'});
    });

    it('should get the  current user from sessionStorage if they exist', function() {
        var user = jhIdentity.getCurrentUser();
        expect(user).toEqual({user: 'john', roles: ['admin']});
        expect($window.sessionStorage.getItem).toHaveBeenCalledWith('currentUser');
    });

    it('should clear current user from sessionStorage', function() {
        jhIdentity.clearCurrentUser();
        expect($window.sessionStorage.removeItem).toHaveBeenCalledWith('currentUser');
    });
    
});