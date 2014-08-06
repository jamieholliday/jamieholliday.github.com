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
		.state('dashboard', {
			url: '/admin',
			templateUrl: 'views/dashboard.html',
			controller: 'dashboardCtrl'
		})
		.state('adminProjects', {
			url: '/admin/projects',
			templateUrl: 'views/adminProjects.html',
			controller: 'adminProjectsCtrl'
		})
		.state('adminPosts', {
			url: '/admin/posts',
			templateUrl: 'views/adminPosts.html',
			controller: 'adminPostsCtrl'
		})
		.state('adminCv', {
			url: '/admin/cv',
			templateUrl: 'views/adminCv.html',
			controller: 'adminCvCtrl'
		});
});

