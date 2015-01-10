'use strict';
angular.module('jhApp')
.controller('adminMediaCtrl', function($scope) {
	this.showUpload = false;

	this.showUploadForm = function() {
		this.showUpload = true;
	}	

});
