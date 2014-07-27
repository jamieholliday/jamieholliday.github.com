'use strict';

var angular = require('angular');
require('angular-ui-router/release/angular-ui-router');

//var WelcomeCtrl = require('./controllers/WelcomeCtrl'); // We can use our WelcomeCtrl.js as a module.

var jhApp = angular.module('jhApp', ['ui.router']);

jhApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/test');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'homeCtrl'
		});
}]);

//app.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);
