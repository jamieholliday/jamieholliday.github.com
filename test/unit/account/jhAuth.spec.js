describe('jhAuth', function() {
	'use strict';

    var jhAuth,
        jhUser,
        jhIdentity,
        deferred,
        $q,
        $httpBackend;


    beforeEach(function() {
        module('jhApp');
        module('templates');

        jhIdentity = {
            setCurrentUser: function(){}
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

            $httpBackend.expectPOST('/login');
        });

        spyOn(jhIdentity, 'setCurrentUser');
        deferred = $q.defer();

    });


    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should authenticate user', function() {
        var user = jhAuth.authenticateUser('john', 'password');
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
        $httpBackend.whenPOST('/login').respond( 200, {
            success: false,  
        });
        $httpBackend.flush();
        expect(jhIdentity.setCurrentUser).not.toHaveBeenCalled();
        user.then(function(result) {
            expect(result).toBe(false);
        });
    });
    
});