describe('adminProjectsCtrl', function() {
    'use strict';
    var createController, 
        $rootScope, 
        deferred1, 
        deferred2,
        resourceCache, 
        scope, 
        jhNotifier;

    beforeEach(module('jhApp'));

    beforeEach(inject(function($controller, _$rootScope_, $q) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        deferred1 = $q.defer();
        deferred2 = $q.defer();

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

        spyOn(resourceCache, 'query').and.returnValue(deferred1.promise);
        spyOn(resourceCache, 'delete').and.returnValue(deferred2.promise);
        spyOn(jhNotifier, 'notify');

    }));

    it('deletes a project', function() {
        var adminProjects = createController();

        var items = [{
          test: 'test'
        }];

        deferred1.resolve(items);
        scope.$digest();
       
        adminProjects.delete({_id: 1});
        deferred2.resolve({deleted: true});
        scope.$digest();
         
        expect(resourceCache.delete).toHaveBeenCalledWith('project', {id: 1});
        expect(resourceCache.query).toHaveBeenCalledWith('project');
        expect(adminProjects.items).toEqual(items);
        expect(jhNotifier.notify).toHaveBeenCalledWith('Project deleted');
    });
});