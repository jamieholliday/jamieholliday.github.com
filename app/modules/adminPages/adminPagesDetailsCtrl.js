'use strict';
angular.module('jhApp')
.controller('adminPagesDetailsCtrl', function($scope, $stateParams, $location, resourceCache, jhNotifier) {

	var _updatePage,
		_newPage,
		page;

	//setup
	page = {
		published: false
	};

	//if there is an id this edit if not its new
	if($stateParams && $stateParams.id) {
		resourceCache.get('page', {id:$stateParams.id}).then(function(obj) {
			$scope.page = page = obj;
		});
	} else {
		$scope.page = page;
	}

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
		resourceCache.delete('page', {id:page._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				$location.path('/adminpages');
			}
		});
	};

	//Private
	_updatePage = function() {
		resourceCache.update('page', {id:page._id}, page).then(function(responceData) {
			if(responceData.message === 'Success') {
				jhNotifier.notify('Updated page');
			}
		});
	};

	_newPage = function() {
		resourceCache.save('page', page).then(function(responceData) {
			if(responceData._id) {
				$location.path('/adminpages/' + responceData._id);
				jhNotifier.notify('Saved page');
			}
		});
	};
});
