'use strict';
angular.module('jhApp')
.controller('adminProjectsDetailsCtrl', function($scope, $stateParams, $location, resourceCache) {

	var _updatePost,
		_newPost,
		project;

	//Setup
	project = {
		published: false
	};

	//if there is an id this edit if not its new
	if($stateParams && $stateParams.id) {
		project = resourceCache.get('project', {id:$stateParams.id});
	}

	$scope.project = project;

	//Public
	$scope.publish = function(bool) {
		project.published = bool;
	};

	$scope.saveForm = function(isValid) {
		if (!isValid) return;
		if(project._id) {
			_updatePost();
		} else {
			_newPost();
		}
	};

	$scope.delete = function() {
		resourceCache.delete('project', {id:project._id}, function(responceData) {
			if(responceData.deleted === true) {
				$location.path('/adminprojects');
			}
		});
	}

	//Private
	_updatePost = function() {
		resourceCache.update('project', {id:project._id}, project);
	}

	_newPost = function() {
		//TODO use promise here
		resourceCache.save('project', project, function(responceData) {
			if(responceData._id) {
				$location.path('/adminprojects/' + responceData._id);
			}
		});
	}
});