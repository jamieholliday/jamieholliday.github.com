'use strict';

angular.module('jhApp')
.directive('jhPage', function(resourceCache) {
	
	return {
		restrict: 'A',
		link: linker,
		template: '<div ng-bind-html="content"></div>'
	};

	function linker(scope, elem, attrs) {
		var pageId = attrs.jhPage;
		resourceCache.get('page', {id:pageId}).then(function(obj) {
			scope.content = obj.content;
		});
	}
});