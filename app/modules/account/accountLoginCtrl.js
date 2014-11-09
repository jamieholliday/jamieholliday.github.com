'use strict';
angular.module('jhApp')
.controller('accountLoginCtrl', function($scope, $http){

    var login = $scope.login;

    $scope.submit = function(details) {
        if(!details) {
            return;
        }

        if($scope.login.username && $scope.login.password) {
            $http.post('api/login').then(function() {
                console.log('login');
            });
        }
    };

});
