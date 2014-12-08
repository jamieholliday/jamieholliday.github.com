'use strict';

angular.module('jhApp', ['ui.router', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	var routeRoleChecks = {
    	admin: function(jhAuth) {
      		return jhAuth.authorizeCurrentUserForRoute('admin');
      		return true;
    	}
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
			resolve: routeRoleChecks
		})
		.state('adminprojectsdetails', {
			url: '/adminprojects/:id',
			templateUrl: 'views/adminProjectsDetails.html',
			controller: 'adminProjectsDetailsCtrl',
			resolve: routeRoleChecks
		})
		.state('adminprojectsedit', {
			url: '/adminprojects/edit',
			templateUrl: 'views/adminProjectsDetails.html',
			controller: 'adminProjectsDetailsCtrl',
			resolve: routeRoleChecks
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
			resolve: routeRoleChecks
		})
		.state('adminpostsdetails', {
			url: '/adminposts/:id',
			templateUrl: 'views/adminPostsDetails.html',
			controller: 'adminPostsDetailsCtrl',
			resolve: routeRoleChecks
		})
		.state('adminpostsedit', {
			url: '/adminposts/edit',
			templateUrl: 'views/adminPostsDetails.html',
			controller: 'adminPostsDetailsCtrl',
			resolve: routeRoleChecks
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
			resolve: routeRoleChecks
		})
		.state('adminpagesdetails', {
			url: '/adminpages/:id',
			templateUrl: 'views/adminPagesDetails.html',
			controller: 'adminPagesDetailsCtrl',
			resolve: routeRoleChecks
		})
		.state('adminpagesedit', {
			url: '/adminpages/edit',
			templateUrl: 'views/adminPagesDetails.html',
			controller: 'adminPagesDetailsCtrl',
			resolve: routeRoleChecks
		})
		.state('dashboard', {
			url: '/admin',
			templateUrl: 'views/dashboard.html',
			controller: 'dashboardCtrl',
			resolve: routeRoleChecks
		})
		.state('login', {
			url: '/login',
			templateUrl: 'views/accountLogin.html',
			controller: 'accountLoginCtrl'
		});
})
.run(function($rootScope, $state) {
	$rootScope.$on('$stateChangeError', function(event, unfoundState, fromState, fromParams) {
		$state.go('login');
	});
});
