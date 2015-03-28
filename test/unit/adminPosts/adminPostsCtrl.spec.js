describe('adminPostsCtrl', function() {
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
        deleteDeferred = $q.defer();
        queryDeferred = $q.defer();

        resourceCache = {
            delete: function () {},
            query: function () {}
        };

        jhNotifier = {
            notify: function () {}
        };


        createController = function() {
            return $controller('adminPostsCtrl', { 
                resourceCache: resourceCache, 
                jhNotifier: jhNotifier 
            } );
        };

        spyOn(resourceCache, 'delete').and.returnValue(deleteDeferred.promise);
        spyOn(resourceCache, 'query').and.returnValue(queryDeferred.promise);
        spyOn(jhNotifier, 'notify');
    }));

    it('deletes a post', function() {
        var adminPosts = createController();

        var items = [{
          test: 'test'
        }];
     
        queryDeferred.resolve(items);
        scope.$digest();
         
        adminPosts.delete({_id: 1});
        deleteDeferred.resolve({deleted: true});
        scope.$digest();
         
        expect(resourceCache.delete).toHaveBeenCalledWith('post', {id: 1});
        expect(resourceCache.query).toHaveBeenCalledWith('post');
        expect(adminPosts.items).toEqual(items);
        expect(jhNotifier.notify).toHaveBeenCalledWith('Post deleted');
    });
});