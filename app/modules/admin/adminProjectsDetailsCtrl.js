'use strict';
angular.module('jhApp')
.controller('adminProjectsDetailsCtrl', function($scope, $stateParams, $location, projects) {

	var _updatePost,
		_newPost,
		project;

	//Setup
	project = {
		published: false
	};

	//if there is an id this edit if not its new
	if($stateParams && $stateParams.id) {
		project = projects.get({id:$stateParams.id});
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

	//Private
	_updatePost = function() {
		projects.update({id:project._id}, project);
	}

	_newPost = function() {
		//TODO use promise here
		projects.save(project, function(responceData) {
			if(responceData._id) {
				$location.path('/adminprojects/' + responceData._id);
			}
		});
	}
});