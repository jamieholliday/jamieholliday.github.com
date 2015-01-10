'use strict';
angular.module('jhApp')
.controller('adminPagesCtrl', function(resourceCache, jhNotifier) {
    var adminPages = this;
	adminPages.items = resourceCache.query('page');

	adminPages.delete = function(page) {
		resourceCache.delete('page', {id:page._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				adminPages.items = resourceCache.query('page');
				jhNotifier.notify('Page deleted');
			}
		});
	};
});
