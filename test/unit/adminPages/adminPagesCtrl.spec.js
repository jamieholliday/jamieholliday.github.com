describe('adminPagesCtrl', function() {
    'use strict';
    var createController, $rootScope, deferred, resourceCache, scope, jhNotifier;

    beforeEach(module('jhApp'));

    beforeEach(inject(function($controller, _$rootScope_, $q) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
            deferred = $q.defer();

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

    }));

    it('deletes a page', function() {
        var adminPages = createController();

        var items = [{
          test: 'test'
        }];
     
        spyOn(resourceCache, 'delete').and.returnValue(deferred.promise);
        spyOn(resourceCache, 'query').and.returnValue(items);
        spyOn(jhNotifier, 'notify');
         
        adminPages.delete({_id: 1});
        deferred.resolve({deleted: true});
        scope.$digest();
         
        expect(resourceCache.delete).toHaveBeenCalledWith('page', {id: page._id});
        expect(resourceCache.query).toHaveBeenCalledWith('page');
        expect(adminPages.items).toEqual(items);
        expect(jhNotifier.notify).toHaveBeenCalledWith('Page deleted');
    });
});