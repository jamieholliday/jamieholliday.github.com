describe('adminProjectsCtrl', function() {
    'use strict';
    var createController, 
        $rootScope, 
        deferred, 
        resourceCache, 
        scope, 
        jhNotifier;

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
            return $controller('adminProjectsCtrl', { 
                resourceCache: resourceCache, 
                jhNotifier: jhNotifier 
            } );
        };

    }));

    it('deletes a project', function() {
        var adminProjects = createController();

        var items = [{
          test: 'test'
        }];
     
        spyOn(resourceCache, 'delete').and.returnValue(deferred.promise);
        spyOn(resourceCache, 'query').and.returnValue(items);
        spyOn(jhNotifier, 'notify');
         
        adminProjects.delete({_id: 1});
        deferred.resolve({deleted: true});
        scope.$digest();
         
        expect(resourceCache.delete).toHaveBeenCalledWith('project', {id: 1});
        expect(resourceCache.query).toHaveBeenCalledWith('project');
        expect(adminProjects.items).toEqual(items);
        expect(jhNotifier.notify).toHaveBeenCalledWith('Project deleted');
    });
});