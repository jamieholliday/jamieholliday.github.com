'use strict';
angular.module('jhApp')
.controller('accountLoginCtrl', function($scope, $http, jhIdentity, jhAuth, $location){

    $scope.identity = jhIdentity;

    $scope.signin = function(details, username, password) {
        if(!details) {
            return;
        }

        jhAuth.authenticateUser(username, password).
            then(function(success) {
                if(success) {
                    //notify
                } else {
                    //notify
                }
            });
    }

    // $scope.submit = function(details) {
    //     if(!details) {
    //         return;
    //     }

    //     if($scope.login.username && $scope.login.password) {
    //         $http.post('login').then(function() {
    //             console.log('login');
    //         });
    //     }
    // };

});
