'use strict';
angular.module('jhApp')
.controller('adminPagesCtrl', function($scope, cachedPages) {
	$scope.pages = cachedPages.query();

	$scope.delete = function(page) {
		cachedPages.delete({id:page._id}, function(responceData) {
			if(responceData.deleted === true) {
				$scope.pages = cachedPages.query();
			}
		});
	};
});
