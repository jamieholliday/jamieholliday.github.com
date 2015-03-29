describe('dashboardCtrl', function() {
    'use strict';
    var createController, 
        $rootScope, 
        queryDeferred,
        resourceCache,
        dashboard,
        scope;

    beforeEach(module('jhApp'));

    beforeEach(inject(function($controller, _$rootScope_, $q) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
            queryDeferred = $q.defer();

        resourceCache = {
            query: function () {}
        };

        createController = function() {
            return $controller('dashboardCtrl', { 
                resourceCache: resourceCache
            } );
        };

        spyOn(resourceCache, 'query').and.returnValue(queryDeferred.promise);

        dashboard = createController();

    }));

    it('sets pages data', function() {

        var items = [{
          test: 'test'
        }];
     
        queryDeferred.resolve(items);
        scope.$digest();
         
        expect(dashboard.pages).toEqual(items);
    });
});