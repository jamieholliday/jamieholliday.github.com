describe('adminProjectsCtrl', function() {
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
            return $controller('adminProjectsCtrl', { 
                resourceCache: resourceCache, 
                jhNotifier: jhNotifier 
            } );
        };

        spyOn(resourceCache, 'query').and.returnValue(queryDeferred.promise);
        spyOn(resourceCache, 'delete').and.returnValue(deleteDeferred.promise);
        spyOn(jhNotifier, 'notify');

    }));

    it('deletes a project', function() {
        var adminProjects = createController();

        var items = [{
          test: 'test'
        }];

        queryDeferred.resolve(items);
        scope.$digest();
       
        adminProjects.delete({_id: 1});
        deleteDeferred.resolve({deleted: true});
        scope.$digest();
         
        expect(resourceCache.delete).toHaveBeenCalledWith('project', {id: 1});
        expect(resourceCache.query).toHaveBeenCalledWith('project');
        expect(adminProjects.items).toEqual(items);
        expect(jhNotifier.notify).toHaveBeenCalledWith('Project deleted');
    });
});