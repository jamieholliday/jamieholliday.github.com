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
        //Arrange
        var controller = createController();
        var page = {
          _id: 1
        };

        var response = {
          deleted: true
        };

        var items = [{
          test: 'test'
        }];

        var expectedDeleteParam = {
          id: page._id
        };
     
        spyOn(resourceCache, 'delete').and.returnValue(deferred.promise);
        spyOn(resourceCache, 'query').and.returnValue(items);
        spyOn(jhNotifier, 'notify');
         
        //Act
        controller.delete(page);
        deferred.resolve(response);
        scope.$digest();
         
        //Assert
        expect(resourceCache.delete).toHaveBeenCalledWith('page', expectedDeleteParam);
        expect(resourceCache.query).toHaveBeenCalledWith('page');
        expect(controller.items).toEqual(items);
        expect(jhNotifier.notify).toHaveBeenCalledWith('Page deleted');
    });
});