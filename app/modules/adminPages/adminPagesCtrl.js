'use strict';
angular.module('jhApp')
.controller('adminPagesCtrl', function($scope, pages) {
	$scope.pages = pages.query();

	$scope.delete = function(page) {
		pages.delete({id:page._id}, function(responceData) {
			if(responceData.deleted === true) {
				$scope.pages = pages.query();
			}
		});
	};
});
