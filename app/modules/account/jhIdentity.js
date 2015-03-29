'use strict';
angular.module('jhApp')
.factory('jhIdentity', function($window) {
    
    return {
        isAuthenticated: function() {
            return !!this.getCurrentUser();
        },
        isAuthorized: function(role) {
            return !!this.getCurrentUser() && this.getCurrentUser().roles.indexOf(role) > -1;
        },
        setCurrentUser: function(user) {
            if(user) {
                $window.sessionStorage.setItem('currentUser', JSON.stringify(user));
            } else {
                $window.sessionStorage.removeItem('currentUser');
            }
        },
        getCurrentUser: function() {
            return JSON.parse($window.sessionStorage.getItem('currentUser')) || null;
        },
        clearCurrentUser: function() {
            $window.sessionStorage.removeItem('currentUser');
        }
    };
});
