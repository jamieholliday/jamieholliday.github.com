describe('jhAuth', function() {
	'use strict';

    var jhNotifier,
        jhToastr;


    beforeEach(function() {
        module('jhApp');
        // module('templates');

        jhToastr = {
            success: function() {},
            error: function() {}
        };

    	module(function($provide) {
    		$provide.value('jhToastr', jhToastr);
    	});

        inject(function(_jhNotifier_) {
        	jhNotifier = _jhNotifier_;
        });

        spyOn(jhToastr, 'success');
        spyOn(jhToastr, 'error');  

    });

    it('should send success message', function() {
        jhNotifier.notify('message');
        expect(jhToastr.success).toHaveBeenCalledWith('message');
    });

    it('should send error message', function() {
        jhNotifier.error('error');
        expect(jhToastr.error).toHaveBeenCalledWith('error');
    });
    
});