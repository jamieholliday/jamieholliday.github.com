'use strict';
angular.module('jhApp')
.controller('adminPagesDetailsCtrl', function($scope, $stateParams, $location, cachedPages) {

	var _updatePage,
		_newPage,
		page;

	//Setup
	page = {
		published: false
	};

	//if there is an id this edit if not its new
	if($stateParams && $stateParams.id) {
		page = cachedPages.get({id:$stateParams.id});
	}

	$scope.page = page;

	//Public
	$scope.publish = function(bool) {
		page.published = bool;
	};

	$scope.saveForm = function(isValid) {
		if (!isValid) {
			return;
		}

		if(page._id) {
			_updatePage();
		} else {
			_newPage();
		}
	};

	$scope.delete = function() {
		cachedPages.delete({id:page._id}, function(responceData) {
			if(responceData.deleted === true) {
				$location.path('/adminpages');
			}
		});
	};

	//Private
	_updatePage = function() {
		cachedPages.update({id:page._id}, page);
	};

	_newPage = function() {
		//TODO use promise here
		cachedPages.save(page, function(responceData) {
			if(responceData._id) {
				$location.path('/adminpages/' + responceData._id);
			}
		});
	};
});
