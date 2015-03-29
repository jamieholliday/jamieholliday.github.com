;(function() {
	'use strict';
	angular.module('jhApp')
	.filter('jhRawHtml', function($sce) {		
		return function (val) {
			return $sce.trustAsHtml(val);
		};
	});
})();