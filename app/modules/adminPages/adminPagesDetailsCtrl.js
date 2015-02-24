'use strict';
angular.module('jhApp')
.controller('adminPagesDetailsCtrl', function($stateParams, $location, resourceCache, jhNotifier) {

	var adminPagesDetails = this;

	//setup
	adminPagesDetails.page = {
		published: false
	};

	//if there is an id this edit if not its new
	if($stateParams && $stateParams.id) {
		resourceCache.get('page', {id:$stateParams.id})
		.then(function(obj) {
			adminPagesDetails.page = obj;
		});
	} 

	//Public
	adminPagesDetails.publish = function(bool) {
		adminPagesDetails.page.published = bool;
	};

	adminPagesDetails.saveForm = function(isValid) {
		if (!isValid) {
			return false;
		}

		if(adminPagesDetails.page._id) {
			adminPagesDetails._updatePage();
		} else {
			adminPagesDetails._newPage();
		}
	};

	adminPagesDetails.delete = function() {
		resourceCache.delete('page', {id:adminPagesDetails.page._id})
		.then(function(responceData) {
			if(responceData.deleted === true) {
				$location.path('/adminpages');
			}
		});
	};

	//Private
	adminPagesDetails._updatePage = function() {
		resourceCache.update('page', {id: adminPagesDetails.page._id}, adminPagesDetails.page)
		.then(function(responceData) {
			if(responceData.message === 'Success') {
				jhNotifier.notify('Updated page');
			}
		});
	};

	adminPagesDetails._newPage = function() {
		resourceCache.save('page', adminPagesDetails.page)
		.then(function(responceData) {
			if(responceData._id) {
				$location.path('/adminpages/' + responceData._id);
				jhNotifier.notify('Saved page');
			}
		});
	};
});
