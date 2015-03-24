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

    	module(function($provide) {
    		$provide.value('jhUser', function(){});
    	});

        inject(function(_jhAuth_, _jhIdentity_, _jhUser_, _$q_, _$httpBackend_) {
        	jhAuth = _jhAuth_;
            jhIdentity = _jhIdentity_;
            jhUser = _jhUser_;
            $q = _$q_;
            $httpBackend = _$httpBackend_;

            jhIdentity = {
                setCurrentUser: function(){}
            };

            jhUser = function(){};

            // spyOn($window.sessionStorage, 'getItem').and.returnValue(JSON.stringify({user: 'john', roles: ['admin']}));
            // 
            spyOn(jhIdentity, 'setCurrentUser');

            deferred = $q.defer();

            $httpBackend.whenPOST('/login')
            .respond( 200, deferred.promise );
            $httpBackend.expectPOST('/login');

        });

    });


    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should authenticate user', function() {
        jhAuth.authenticateUser('john', 'password');
        $httpBackend.flush();
    });
    
});