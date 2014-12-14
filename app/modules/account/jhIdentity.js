'use strict';
angular.module('jhApp').service('jhIdentity', function($window, jhUser) {

    return {
        currentUser: JSON.parse($window.sessionStorage.getItem('currentUser')) || null,

        isAuthenticated: function() {
            return !!this.currentUser;
        },
        isAuthorized: function(role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        },
        setCurrentUser: function(user) {
            $window.sessionStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUser = user;
        },
        getCurrentUser: function() {
            return this.currentUser;
        },
        clearCurrentUser: function() {
            $window.sessionStorage.removeItem('currentUser');
        }
    };
});
