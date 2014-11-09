'use strict';

angular.module('jhApp', ['ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	var routeRoleChecks = {
    	admin: function(jhAuth) {
      		return jhAuth.authorizeCurrentUserForRoute('admin');
    	},
    	user: {auth: function(jhAuth) {
	      	return jhAuth.authorizeAuthenticatedUserForRoute();
    	}}
	};

	$stateProvider
		.state('projects', {
			url: '/',
			templateUrl: 'views/projects.html',
			controller: 'projectsCtrl'
		})
		.state('adminprojects', {
			url: '/adminprojects',
			templateUrl: 'views/adminProjects.html',
			controller: 'adminProjectsCtrl',
			resolve: routeRoleChecks.admin
		})
		.state('adminprojectsdetails', {
			url: '/adminprojects/:id',
			templateUrl: 'views/adminProjectsDetails.html',
			controller: 'adminProjectsDetailsCtrl',
			resolve: routeRoleChecks.admin
		})
		.state('adminprojectsedit', {
			url: '/adminprojects/edit',
			templateUrl: 'views/adminProjectsDetails.html',
			controller: 'adminProjectsDetailsCtrl',
			resolve: routeRoleChecks.admin
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
			controller: 'adminPostsCtrl',
			resolve: routeRoleChecks.admin
		})
		.state('adminpostsdetails', {
			url: '/adminposts/:id',
			templateUrl: 'views/adminPostsDetails.html',
			controller: 'adminPostsDetailsCtrl',
			resolve: routeRoleChecks.admin
		})
		.state('adminpostsedit', {
			url: '/adminposts/edit',
			templateUrl: 'views/adminPostsDetails.html',
			controller: 'adminPostsDetailsCtrl',
			resolve: routeRoleChecks.admin
		})
		.state('pages', {
			url: '/',
			templateUrl: 'views/pages.html',
			controller: 'pagesCtrl'
		})
		.state('adminpages', {
			url: '/adminpages',
			templateUrl: 'views/adminPages.html',
			controller: 'adminPagesCtrl',
			resolve:{
				admin: function(jhAuth) {
					return jhAuth.authorizeCurrentUserForRoute('admin');
				}
			}
		})
		.state('adminpagesdetails', {
			url: '/adminpages/:id',
			templateUrl: 'views/adminPagesDetails.html',
			controller: 'adminPagesDetailsCtrl',
			resolve: routeRoleChecks.admin
		})
		.state('adminpagesedit', {
			url: '/adminpages/edit',
			templateUrl: 'views/adminPagesDetails.html',
			controller: 'adminPagesDetailsCtrl',
			resolve: routeRoleChecks.admin
		})
		.state('dashboard', {
			url: '/admin',
			templateUrl: 'views/dashboard.html',
			controller: 'dashboardCtrl',
			resolve: routeRoleChecks.admin
		})
		.state('login', {
			url: '/login',
			templateUrl: 'views/adminLogin.html',
			controller: 'adminLoginCtrl'
		});
})
.run(function($rootScope, $location) {
  $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
    console.log(event, unfoundState, fromState, fromParams);
});
});
