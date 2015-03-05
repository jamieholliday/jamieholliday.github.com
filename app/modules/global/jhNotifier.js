'use strict';

angular.module('jhApp')
.value('jhToastr', toastr)
.factory('jhNotifier', function(jhToastr) {
	
	return {
	  notify: function(msg) {
	    jhToastr.success(msg);
	  },
	  error: function(msg) {
	  	jhToastr.error(msg);
	  }
	};
});