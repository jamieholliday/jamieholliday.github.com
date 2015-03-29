'use strict';
angular.module('jhApp')
.factory('jhAuth', function($http, jhIdentity, $q, jhUser) {
    return {
        
        authenticateUser: function(username, password) {
            return $http.post('/login', {
                username: username,
                password: password
            })
            .then(function(responce) {
                if(responce.data.success) {
                    var user = new jhUser();
                    angular.extend(user, responce.data.user);
                    jhIdentity.setCurrentUser(user);
                    return true;
                } else {
                    return false;
                }
            });
        },
        logoutUser: function() {
            return $http.post('/logout', {logout: true})
            .then(function() {
                jhIdentity.setCurrentUser(undefined);
                return true;
            });
        },
        authorizeCurrentUserForRoute: function(role) {
          if(jhIdentity.isAuthorized(role)) {
            return true;
          } else {
            return $q.reject('not authorized');
          }
        }

        //UNUSED BUT KEEP FOR LATER
        // createUser: function(newUserData) {
        //     var newUser = new jhUser(newUserData);

        //     return newUser.$save()
        //     .then(function() {
        //         jhIdentity.setCurrentUser(newUser);
        //         return true;
        //     }, function(responce) {
        //         return (responce.data.reason);
        //     });
        // },

        // updateCurrentUser: function(newUserData) {

        //     var clone = angular.copy(jhIdentity.getCurrentUser());
        //     angular.extend(clone, newUserData);

        //     return clone.$update()
        //     .then(function() {
        //         jhIdentity.setCurrentUser(clone);
        //         return true;
        //     }, function(responce) {
        //         return responce.data.reason;
        //     });
        // },
        // authorizeAuthenticatedUserForRoute: function() {
        //   if(jhIdentity.isAuthenticated()) {
        //     return true;
        //   } else {
        //     return $q.reject('not authorized');
        //   }
        // }

    };
});
