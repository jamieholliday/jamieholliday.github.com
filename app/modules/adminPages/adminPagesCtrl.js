'use strict';
angular.module('jhApp')
.controller('adminPagesCtrl', function($scope, resourceCache) {
	$scope.pages = resourceCache.query('page');

	$scope.delete = function(page) {
		resourceCache.delete('page', {id:page._id}, function(responceData) {
			if(responceData.deleted === true) {
				$scope.pages = resourceCache.query('page');
			}
		});
	};
});
