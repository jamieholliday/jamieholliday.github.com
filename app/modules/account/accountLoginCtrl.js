'use strict';
angular.module('jhApp')
.controller('accountLoginCtrl', function($http, jhIdentity, jhAuth, $state, jhNotifier){
    var accountLogin = this;
    accountLogin.identity = jhIdentity;

    accountLogin.signin = function(details, username, password) {
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
    };

});
