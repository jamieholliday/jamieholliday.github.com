'use strict';
angular.module('jhApp').factory('jhIdentity', function($window, jhUser) {
    var currentUser;
    if(!!$window.bootstrappedUserObject) {
        currentUser = new jhUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }

    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        },
        isAuthorized: function(role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    };
});
