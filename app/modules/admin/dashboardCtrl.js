'use strict';

angular.module('jhApp')
.controller('dashboardCtrl', function(resourceCache) {
	
	this.pages = resourceCache.query('page');
});