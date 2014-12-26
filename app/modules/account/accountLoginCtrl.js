'use strict';
angular.module('jhApp')
.controller('accountLoginCtrl', function($scope, $http, jhIdentity, jhAuth, $state, jhNotifier){

    $scope.identity = jhIdentity;

    $scope.signin = function(details, username, password) {
        if(!details) {
            return;
        }

        jhAuth.authenticateUser(username, password).
            then(function(success) {
                if(success) {
                    $state.go('adminposts');
                } else {
                    jhNotifier.error('Incorrect login details');
                }
            });
    }

});
