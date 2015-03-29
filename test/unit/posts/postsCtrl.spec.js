describe('postsCtrl', function() {
    'use strict';
    var createController, 
        $rootScope, 
        queryDeferred,
        resourceCache,
        posts,
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
            return $controller('postsCtrl', { 
                resourceCache: resourceCache
            } );
        };

        spyOn(resourceCache, 'query').and.returnValue(queryDeferred.promise);

        posts = createController();

    }));

    it('sets posts data', function() {

        var items = [{
          test: 'test'
        }];
     
        queryDeferred.resolve(items);
        scope.$digest();
         
        expect(posts.items).toEqual(items);
    });
});