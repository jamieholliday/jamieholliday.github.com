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

        createUser: function(newUserData) {
            var newUser = new jhUser(newUserData);

            return newUser.$save()
            .then(function() {
                jhIdentity.setCurrentUser(newUser);
                return true;
            }, function(responce) {
                return (responce.data.reason);
            });
        },

        updateCurrentUser: function(newUserData) {
            var dfd  = $q.defer();

            var clone = angular.copy(jhIdentity.currentUser);
            angular.extend(clone, newUserData);
            clone.$update().then(function() {
                jhIdentity.setCurrentUser(clone);
                dfd.resolve();
            }, function(responce) {
                dfd.reject(responce.data.reason);
            });
            return dfd.promise;
        },

        logoutUser: function() {
            var dfd = $q.defer();
            $http.post('/logout', {logout: true}).then(function() {
                jhIdentity.setCurrentUser(undefined);
                dfd.resolve();
            });
            return dfd.promise;
        },
        authorizeCurrentUserForRoute: function(role) {
          if(jhIdentity.isAuthorized(role)) {
            return true;
          } else {
            return $q.reject('not authorized');
          }

        },
        authorizeAuthenticatedUserForRoute: function() {
          if(jhIdentity.isAuthenticated()) {
            return true;
          } else {
            return $q.reject('not authorized');
          }
        }
    };
});
