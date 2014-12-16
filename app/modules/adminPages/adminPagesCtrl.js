'use strict';
angular.module('jhApp')
.controller('adminPagesCtrl', function($scope, resourceCache, jhNotifier) {
	$scope.pages = resourceCache.query('page');

	$scope.delete = function(page) {
		resourceCache.delete('page', {id:page._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				$scope.pages = resourceCache.query('page');
				jhNotifier.notify('Page Deleted');
			}
		});
	};
});
