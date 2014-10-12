'use strict';

angular.module('jhApp', ['ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');


	$stateProvider
		.state('projects', {
			url: '/',
			templateUrl: 'views/projects.html',
			controller: 'projectsCtrl'
		})
		.state('adminprojects', {
			url: '/adminprojects',
			templateUrl: 'views/adminProjects.html',
			controller: 'adminProjectsCtrl'
		})
		.state('adminprojectsdetails', {
			url: '/adminprojects/:id',
			templateUrl: 'views/adminProjectsDetails.html',
			controller: 'adminProjectsDetailsCtrl'
		})
		.state('adminprojectsedit', {
			url: '/adminprojects/edit',
			templateUrl: 'views/adminProjectsDetails.html',
			controller: 'adminProjectsDetailsCtrl'
		})
		.state('adminposts', {
			url: '/adminposts',
			templateUrl: 'views/adminPosts.html',
			controller: 'adminPostsCtrl'
		})
		.state('adminpostsdetails', {
			url: '/adminposts/:id',
			templateUrl: 'views/adminPostsDetails.html',
			controller: 'adminPostsDetailsCtrl'
		})
		.state('adminpostsedit', {
			url: '/adminposts/edit',
			templateUrl: 'views/adminPostsDetails.html',
			controller: 'adminPostsDetailsCtrl'
		})
		.state('adminCv', {
			url: '/admincv',
			templateUrl: 'views/adminCv.html',
			controller: 'adminCvCtrl'
		})
		.state('dashboard', {
			url: '/admin',
			templateUrl: 'views/dashboard.html',
			controller: 'dashboardCtrl'
		});
});

