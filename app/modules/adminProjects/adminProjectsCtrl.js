'use strict';
angular.module('jhApp')
.controller('adminProjectsCtrl', function(resourceCache, jhNotifier) {
	
    var adminProjects = this;
	resourceCache.query('project')
	.then(function(items) {
		adminProjects.items = items;
	});

	adminProjects.delete = function(project) {
		resourceCache.delete('project', {id:project._id})
		.then(function(responceData) {
			if(responceData.deleted === true) {
				resourceCache.query('project')
				.then(function(items) {
					adminProjects.items = items;
				});
				jhNotifier.notify('Project deleted');
			}
		});
	};

});