'use strict';

angular.module('jhApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('projects', {
			url: '/',
			templateUrl: 'views/projects.html',
			controller: 'projectsCtrl'
		})
		.state('admin', {
			url: '/admin',
			templateUrl: 'admin/dashboard.html',
			controller: 'adminCtrl'
		});
});

