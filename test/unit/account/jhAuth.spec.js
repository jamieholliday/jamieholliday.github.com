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


            // spyOn($window.sessionStorage, 'getItem').and.returnValue(JSON.stringify({user: 'john', roles: ['admin']}));
            // 
            spyOn(jhIdentity, 'setCurrentUser');

        });

    });


    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should authenticate user', function() {
        // $httpBackend.expectPOST('/login');
        // $httpBackend.flush();
    });
    
});