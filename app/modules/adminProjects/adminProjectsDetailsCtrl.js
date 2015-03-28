'use strict';
angular.module('jhApp')
.controller('adminProjectsDetailsCtrl', function($stateParams, $location, resourceCache, jhNotifier) {

	var adminProjectsDetails = this;

	//setup
	adminProjectsDetails.project = {
		published: false
	};

	//if there is an id this edit if not its new
	if($stateParams && $stateParams.id) {
		resourceCache.get('project', {id:$stateParams.id})
		.then(function(obj) {
			adminProjectsDetails.project = obj;
		});
	}

	//Public
	adminProjectsDetails.publish = function(bool) {
		adminProjectsDetails.project.published = bool;
	};

	adminProjectsDetails.saveForm = function(isValid) {
		if (!isValid) { 
			return false; 
		}
		if(adminProjectsDetails.project._id) {
			adminProjectsDetails._updateProject();
		} else {
			adminProjectsDetails._newProject();
		}
	};

	adminProjectsDetails.delete = function() {
		resourceCache.delete('project', {id:adminProjectsDetails.project._id})
		.then(function(responceData) {
			if(responceData.deleted === true) {
				$location.path('/adminprojects');
			}
		});
	};

	//Private
	adminProjectsDetails._updateProject = function() {
		resourceCache.update('project', {id:adminProjectsDetails.project._id}, adminProjectsDetails.project)
		.then(function(responceData) {
			if(responceData.message === 'Success') {
				jhNotifier.notify('Updated project');
			}
		});
	};

	adminProjectsDetails._newProject = function() {
		resourceCache.save('project', adminProjectsDetails.project)
		.then(function(responceData) {
			if(responceData._id) {
				$location.path('/adminprojects/' + responceData._id);
				jhNotifier.notify('Saved project');
			}
		});
	};
});