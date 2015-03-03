describe('adminUsersDetailsCtrl', function() {
    'use strict';
    var createController, 
        $rootScope, 
        deferred, 
        adminUsersDetails,
        users, 
        scope, 
        jhNotifier,
        resourceReturn;

    beforeEach(module('jhApp'));

    beforeEach(inject(function($controller, _$rootScope_, $q) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        deferred = $q.defer();

        users = {
            delete: function() {},
            query: function() {},
            get: function() {},
            update: function () {}
        };

        jhNotifier = {
            notify: function () {}
        };

        resourceReturn = {
            $promise: {
                then: function() {}
            }
        };

        createController = function() {
            return $controller('adminUsersDetailsCtrl', { 
                users: users, 
                jhNotifier: jhNotifier 
            } );
        };

        spyOn(users, 'update').and.returnValue(resourceReturn);
        spyOn(users, 'get').and.returnValue(resourceReturn);
        spyOn(jhNotifier, 'notify');
        adminUsersDetails = createController();
        spyOn(adminUsersDetails, '_updateUser').and.callThrough();

    }));

    it('should not continue if the form is invaild', function() {
        var result = adminUsersDetails.saveForm(false);
        expect(result).toEqual(false);
    });

    it('should update the user if the form is valid', function() {
        adminUsersDetails.user = {_id: 1};
        adminUsersDetails._updateUser();
        expect(users.update).toHaveBeenCalledWith({id: 1}, adminUsersDetails.user);
    });


});