'use strict';
angular.module('jhApp')
.controller('adminPagesDetailsCtrl', function($scope, $stateParams, $location, resourceCache) {

	var _updatePage,
		_newPage,
		page;

	//Setup
	page = {
		published: false
	};

	//if there is an id this edit if not its new
	if($stateParams && $stateParams.id) {
		page = resourceCache.get('page', {id:$stateParams.id});
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
		resourceCache.delete('page', {id:page._id}, function(responceData) {
			if(responceData.deleted === true) {
				$location.path('/adminpages');
			}
		});
	};

	//Private
	_updatePage = function() {
		resourceCache.update('page', {id:page._id}, page);
	};

	_newPage = function() {
		//TODO use promise here
		resourceCache.save('page', page, function(responceData) {
			if(responceData._id) {
				$location.path('/adminpages/' + responceData._id);
			}
		});
	};
});
