'use strict';
angular.module('jhApp')
.directive('jhDeleteitem', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/jhDeleteItem.html',
		scope: {
			onConfirm: '&'
		},
		link : function(scope) {
			console.log(scope);
			var selected = false;

			scope.onDelete = function() {
				console.log(selected);
				if (selected) {
					scope.onConfirm();
				}
				selected = true;
			};

			scope.onBlur = function() {
				selected = false;
			}
		}
	}
});