'use strict';

angular.module('jhApp')
.controller('dashboardCtrl', function(resourceCache) {

	var dashboard = this;
	
	resourceCache.query('page')
	.then(function(items) {
		dashboard.pages = items;
	});
});