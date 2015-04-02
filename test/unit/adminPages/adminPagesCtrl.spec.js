describe('adminPagesCtrl', function() {
    'use strict';
    var createController, 
        $rootScope, 
        queryDeferred,
        deleteDeferred,
        resourceCache, 
        scope, 
        jhNotifier;

    beforeEach(module('jhApp'));

    beforeEach(inject(function($controller, _$rootScope_, $q) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
            queryDeferred = $q.defer();
            deleteDeferred = $q.defer();

        resourceCache = {
            delete: function () {},
            query: function () {}
        };

        jhNotifier = {
            notify: function () {}
        };


        createController = function() {
            return $controller('adminPagesCtrl', { 
                resourceCache: resourceCache, 
                jhNotifier: jhNotifier 
            } );
        };

        spyOn(resourceCache, 'query').and.returnValue(queryDeferred.promise);
        spyOn(resourceCache, 'delete').and.returnValue(deleteDeferred.promise);
        spyOn(jhNotifier, 'notify');

    }));

    it('deletes a page', function() {
        var adminPages = createController();

        var items = [{
          test: 'test'
        }];
     
        queryDeferred.resolve(items);
        scope.$digest();
         
        adminPages.delete({_id: 1});
        deleteDeferred.resolve({deleted: true});
        scope.$digest();
         
        expect(resourceCache.delete).toHaveBeenCalledWith('page', {id: 1});
        expect(resourceCache.query).toHaveBeenCalledWith('page');
        expect(adminPages.items).toEqual(items);
        expect(jhNotifier.notify).toHaveBeenCalledWith('Page deleted');
    });
});