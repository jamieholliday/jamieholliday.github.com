describe('adminPagesCtrl', function() {
    var defferred,
        $rootScope;
    
    beforeEach(function() {
        inject(function($q, _$rootScope_) {
            $rootScope = _$rootScope_;
            defferred = $q.defer();
        });
    });
    
    it('does a thing', function() {
        expect(true).toBe(true);
    });
});