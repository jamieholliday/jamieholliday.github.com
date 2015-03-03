'use strict';

angular.module('jhApp')
.directive('jhEquals', function() {
	
	return {
		restrict: 'A',
		require: '?ngModel',
		link: linker
	};

	function linker(scope, elem, attrs, ngModel) {
		if(!ngModel) {
			return false;
		}

		//watch own value and re-validate
		scope.$watch(attrs.ngModel, function() {
			validate();
		});

		//observe other value and re-validate on change
		attrs.$observe('jhEquals', function() {
			validate();
		});

		var validate = function() {
			var val1 = ngModel.$viewValue;
			var val2 = attrs.jhEquals;

			//set validity
			if(val1 && val2) {
				ngModel.$setValidity('jhEquals', !val1 || !val2 || val1 === val2);
			}
		};
	}
	
	return {
		restrict: 'A',
		require: '?ngModel',
		link: linker
	};

});