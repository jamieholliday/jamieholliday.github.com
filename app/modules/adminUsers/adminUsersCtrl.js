'use strict';
angular.module('jhApp')
.controller('adminUsersCtrl', function(users, jhNotifier) {
    var adminUsers = this;
	adminUsers.items = users.query();

	adminUsers.delete = function(user) {
		users.delete({id:user._id}).then(function(responceData) {
			if(responceData.deleted === true) {
				jhNotifier.notify('User deleted');
			}
		});
	}
});