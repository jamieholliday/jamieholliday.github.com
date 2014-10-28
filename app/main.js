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
		.state('posts', {
			url: '/blog',
			templateUrl: 'views/posts.html',
			controller: 'postsCtrl'
		})
		.state('postsdetails', {
			url: '/blog/:id',
			templateUrl: 'views/postsDetails.html',
			controller: 'postsDetailsCtrl'
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
		.state('pages', {
			url: '/',
			templateUrl: 'views/pages.html',
			controller: 'pagesCtrl'
		})
		.state('adminpages', {
			url: '/adminpages',
			templateUrl: 'views/adminPages.html',
			controller: 'adminPagesCtrl'
		})
		.state('adminpagesdetails', {
			url: '/adminpages/:id',
			templateUrl: 'views/adminPagesDetails.html',
			controller: 'adminPagesDetailsCtrl'
		})
		.state('adminpagesedit', {
			url: '/adminpages/edit',
			templateUrl: 'views/adminPagesDetails.html',
			controller: 'adminPagesDetailsCtrl'
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
		})
		.state('login', {
			url: '/login',
			templateUrl: 'views/adminLogin.html',
			controller: 'adminLoginCtrl'
		});
});
