angular.module('jhApp')
.factory('resourceCache', function(pages, projects, posts, $q) {
'use strict';
	
	var cache = {},
		resource = {
			page: pages,
			project: projects,
			post: posts
		};

	return {
		cache: cache,
		query: function(type) {
			var dfd = $q.defer();
			if(cache[type]) {
				dfd.resolve(cache[type]);
			} else {
				resource[type].query().$promise
				.then(function(data) {
					cache[type] = data;
					dfd.resolve(cache[type]);
				})
				.catch(function(err) {
					dfd.reject(err);
				});
			}
			return dfd.promise;
		},
		delete: function(type, opts) {
			cache[type] = null;
			return resource[type].delete(opts).$promise;
		},
		save: function(type, obj) {
			cache[type] = null;
			return resource[type].save(obj).$promise;
		},
		update: function(type, opts, obj) {
			cache[type] = null;
			return resource[type].update(opts, obj).$promise;
		},
		get: function(type, opts) {
			if(cache[type]) {
				var item = cache[type].filter(function(elem) {
					return elem._id === opts.id;
				});
				// always return a promise
				var dfd = $q.defer();
				dfd.resolve(item[0]);
				return dfd.promise;
				
			} else {
				return resource[type].get(opts).$promise;
			}
		}
	};
});