'use strict';

angular.module('jhApp')
.factory('resourceCache', function(pages, projects, posts) {
	var cache = {},
		resource = {
			page: pages,
			project: projects,
			post: posts
		};

	return {
		query: function(type) {
			if(!cache[type]) {
				cache[type] = resource[type].query();
			}
			return cache[type];
		},
		delete: function(type, opts, cb) {
			resource[type].delete(opts, function(responceData) {
				if(responceData.deleted === true) {
					cache[type] = null;
				}
				cb(responceData);
			});
		},
		save: function(type, obj, cb) {
			resource[type].save(obj, function(responceData) {
				if(responceData._id) {
					cache[type] = null;
				}
				cb(responceData);
			});
		},
		update: function(type, opts, obj) {
			cache[type] = null;
			return resource[type].update(opts, obj);
		},
		get: function(type, opts) {
			if(cache[type]) {
				return cache[type].filter(function(elem) {
					return elem.id === opts.id;
				});
			} else {
				return resource[type].get(opts);
			}
		}
	}
});

//TODO this is not currently working correctly!!!!!!