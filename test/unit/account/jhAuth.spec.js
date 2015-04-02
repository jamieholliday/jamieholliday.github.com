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
            return {
                fn: 'jhUser',
                $save: function() {
                    return deferred.promise;
                }
            };
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

        deferred = $q.defer();
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

        expect(jhIdentity.setCurrentUser).toHaveBeenCalled();

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

    it('should create a user', function() {
        var user = jhAuth.createUser();
        //ADD EXPECT --------------
    });
    
});