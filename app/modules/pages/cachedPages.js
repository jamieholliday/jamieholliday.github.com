'use strict';

angular.module('jhApp')
.factory('cachedPages', function(pages) {
	var allPages;

	return {
		query: function() {
			if(!allPages) {
				allPages = pages.query();
			}
			return allPages;
		},
		delete: function(opts, cb) {
			pages.delete(opts, function(responceData) {
				if(responceData.deleted === true) {
					allPages = null; //clear cache
					cb(responceData);
				}
			});
		},
		save: function(page, cb) {
			pages.save(page, function(responceData) {
				cb(responceData);
			});
		}, 
		update: function(opts, page) {
			return pages.update(opts, page);
		},
		get: function(opts) {
			return pages.get(opts);
		}
	}
});

//TODO this is not currently working correctly!!!!!!