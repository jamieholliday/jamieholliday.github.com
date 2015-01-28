'use strict';
angular.module('jhApp')
.controller('adminProjectsCtrl', function(resourceCache, jhNotifier) {
    var adminProjects = this;
	adminProjects.items = resourceCache.query('project');

	adminProjects.delete = function(project) {
		resourceCache.delete('project', {id:project._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				adminProjects.items = resourceCache.query('project');
				jhNotifier.notify('Project deleted');
			}
		});
	}
});