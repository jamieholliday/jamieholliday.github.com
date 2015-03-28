'use strict';
angular.module('jhApp')
.controller('adminPagesCtrl', function(resourceCache, jhNotifier) {
	
    var adminPages = this;
	resourceCache.query('page')
	.then(function(items) {
		adminPages.items = items;
	});

	adminPages.delete = function(page) {
		resourceCache.delete('page', {id:page._id})
		.then(function(responceData) {
			if(responceData.deleted === true) {
				resourceCache.query('page')
				.then(function(items) {
					adminPages.items = items;
				});
				jhNotifier.notify('Page deleted');
			}
		});
	};
});
