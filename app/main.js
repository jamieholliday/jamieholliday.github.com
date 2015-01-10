'use strict';

angular.module('jhApp', ['ui.router', 'ngResource', 'textAngular'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $provide) {

	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	var routeRoleChecks = {
    	admin: function(jhAuth) {
      		return jhAuth.authorizeCurrentUserForRoute('admin');
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
			url: '/blog/:id/:permalink',
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
		.state('adminusers', {
			url: '/adminusers',
			templateUrl: 'views/adminUsers.html',
			controller: 'adminUsersCtrl',
			resolve: routeRoleChecks
		})
		.state('adminusersdetails', {
			url: '/adminusers/:id',
			templateUrl: 'views/adminUsersDetails.html',
			controller: 'adminUsersDetailsCtrl',
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
		})
		.state('logout', {
			url: '/logout',
			controller: 'accountLogoutCtrl'
		})
		.state('adminmedia', {
			url: '/media',
			templateUrl: 'views/adminMedia.html',
			controller: 'adminMediaCtrl',
			resolve: routeRoleChecks
		});

		$provide.decorator('taOptions', ['$delegate', function(taOptions) {
			taOptions.toolbar = [
				['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
                ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                ['html', 'insertImage', 'insertLink']
			];
			return taOptions;
		}]);
})
.factory('jhAuthInterceptor', function($q, $location, $window) {
	return {
		response: function(responce) {
			if(responce.status === 403) {
				console.log('403');
			}
			return responce || $q.when(responce);
		},
		responseError: function(rejection) {
			if(rejection.status === 403) {
				$window.sessionStorage.clear();
				$location.path('/login');
			}
			return $q.reject(rejection);
		}
	}
})
.config(function($httpProvider) {
	$httpProvider.interceptors.push('jhAuthInterceptor');
})
.run(function($rootScope, $state) {
	$rootScope.$on('$stateChangeError', function(event, unfoundState, fromState, fromParams) {
		$state.go('login');
	});
});
