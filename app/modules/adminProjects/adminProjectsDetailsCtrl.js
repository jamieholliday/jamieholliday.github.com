'use strict';
angular.module('jhApp')
.controller('adminProjectsDetailsCtrl', function($stateParams, $location, resourceCache, jhNotifier) {

	var _updatePost,
		_newPost,
		project,
        adminProjectsDetails = this;

	//setup
	project = {
		published: false
	};

	//if there is an id this edit if not its new
	if($stateParams && $stateParams.id) {
		resourceCache.get('project', {id:$stateParams.id}).then(function(obj) {
			adminProjectsDetails.project = project = obj;
		});
	} else {
		adminProjectsDetails.project = project;
	}

	//Public
	adminProjectsDetails.publish = function(bool) {
		project.published = bool;
	};

	adminProjectsDetails.saveForm = function(isValid) {
		if (!isValid) return;
		if(adminProjectsDetails.project._id) {
			_updatePost();
		} else {
			_newPost();
		}
	};

	adminProjectsDetails.delete = function() {
		resourceCache.delete('project', {id:project._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				$location.path('/adminprojects');
			}
		});
	}

	//Private
	_updatePost = function() {
		resourceCache.update('project', {id:project._id}, project).then(function(responceData) {
			if(responceData.message === 'Success') {
				jhNotifier.notify('Updated project');
			}
		});
	}

	_newPost = function() {
		//TODO use promise here
		resourceCache.save('project', project).then(function(responceData) {
			if(responceData._id) {
				$location.path('/adminprojects/' + responceData._id);
				jhNotifier.notify('Saved project');
			}
		});
	}
});