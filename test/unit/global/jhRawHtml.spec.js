describe('jhRawHtml', function() {
	'use strict';

	var jhRawHtml,
		$sce;

	beforeEach(function() {
		module('jhApp');

		$sce = {
			trustAsHtml: function(val) {
				return {
					trusted: true,
					val: val
				};
			}
		};

		module(function($provide) {
    		$provide.value('$sce', $sce);
    	});

		inject(function(_jhRawHtmlFilter_) {
			jhRawHtml = _jhRawHtmlFilter_;
		});
	});

	it('should exist', function() {
		expect(jhRawHtml('<div>test</div>')).toEqual({
			trusted: true,
			val: '<div>test</div>'
		});
	});
});