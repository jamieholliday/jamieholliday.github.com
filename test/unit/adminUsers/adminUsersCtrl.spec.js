describe('adminUsersCtrl', function() {
    'use strict';
    var createController, 
        $rootScope, 
        deferred, 
        adminUsers,
        users, 
        scope, 
        jhNotifier;

    beforeEach(module('jhApp'));

    beforeEach(inject(function($controller, _$rootScope_, $q) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        deferred = $q.defer();

        users = {
            delete: function() {},
            query: function() {}
        };

        jhNotifier = {
            notify: function () {}
        };

        createController = function() {
            return $controller('adminUsersCtrl', { 
                users: users, 
                jhNotifier: jhNotifier 
            } );
        };

        spyOn(users, 'delete').and.returnValue(deferred.promise);
        spyOn(jhNotifier, 'notify');
        adminUsers = createController();

    }));

    it('deletes a user', function() {
        adminUsers.delete({_id: 1});
        expect(users.delete).toHaveBeenCalled();

        deferred.resolve({deleted: true});
        scope.$digest();
        expect(jhNotifier.notify).toHaveBeenCalledWith('User deleted');
    });
});