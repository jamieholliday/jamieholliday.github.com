describe('jhAuth', function() {
	'use strict';

    var jhAuth,
        jhUser,
        jhIdentity,
        $q,
        $httpBackend;


    beforeEach(function() {
        module('jhApp');
        module('templates');

        jhIdentity = {
            setCurrentUser: function() {},
            isAuthorized: function() {}
        };

        jhUser = function(){
            return {fn: 'jhUser'};
        };

    	module(function($provide) {
    		$provide.value('jhUser', jhUser);
            $provide.value('jhIdentity', jhIdentity);
    	});

        inject(function(_jhAuth_, _$q_, _$httpBackend_) {
        	jhAuth = _jhAuth_;
            $q = _$q_;
            $httpBackend = _$httpBackend_;

        });

        spyOn(jhIdentity, 'setCurrentUser');  

    });


    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should authenticate user', function() {
        var user = jhAuth.authenticateUser('john', 'password');
        $httpBackend.expectPOST('/login');
        $httpBackend.whenPOST('/login').respond( 200, {
            success: true,
            user: {
                firstName: 'fred',
                lastName: 'smith',
                id: '1'
            }   
        });
        $httpBackend.flush();

        expect(jhIdentity.setCurrentUser).toHaveBeenCalledWith({
            fn: 'jhUser',
            firstName: 'fred',
            lastName: 'smith',
            id: '1'
        });

        user.then(function(result) {
            expect(result).toBe(true);
        });
    });

    it('should not authenticate user', function() {
        var user = jhAuth.authenticateUser('notjohn', 'password');
        $httpBackend.expectPOST('/login');
        $httpBackend.whenPOST('/login').respond( 200, {
            success: false,  
        });
        $httpBackend.flush();
        expect(jhIdentity.setCurrentUser).not.toHaveBeenCalled();
        user.then(function(result) {
            expect(result).toBe(false);
        });
    });

    it('should logout a user', function() {
        jhAuth.logoutUser();
        $httpBackend.expectPOST('/logout', {logout: true});
        $httpBackend.whenPOST('/logout').respond(200);
        $httpBackend.flush();
        expect(jhIdentity.setCurrentUser).toHaveBeenCalledWith(undefined);
    });

    it('should check if user can access route', function() {
        var authed;

        spyOn(jhIdentity, 'isAuthorized').and.returnValue(true);
        authed = jhAuth.authorizeCurrentUserForRoute('admin'); 

        expect(jhIdentity.isAuthorized).toHaveBeenCalledWith('admin');
        expect(authed).toBe(true);

    });

    it('should check if user cant access route', function() {
        var authed;

        spyOn(jhIdentity, 'isAuthorized').and.returnValue(false);
        authed = jhAuth.authorizeCurrentUserForRoute('admin'); 

        expect(jhIdentity.isAuthorized).toHaveBeenCalledWith('admin');
        expect(authed.$$state.status).toBe(2);

    });
    
});