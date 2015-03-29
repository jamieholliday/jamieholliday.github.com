describe('projectsCtrl', function() {
    'use strict';
    var createController, 
        $rootScope, 
        queryDeferred,
        resourceCache,
        projects,
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
            return $controller('projectsCtrl', { 
                resourceCache: resourceCache
            } );
        };

        spyOn(resourceCache, 'query').and.returnValue(queryDeferred.promise);

        projects = createController();

    }));

    it('sets projects data', function() {

        var items = [
        {
          name: 'project1',
          type: 'project'
        },
        {
          name: 'presentation1',
          type: 'presentation'
        }
        ];
     
        queryDeferred.resolve(items);
        scope.$digest();
         
        expect(projects.items.length).toBe(1);
        expect(projects.items[0].name).toBe('project1');

        expect(projects.presentations.length).toBe(1);
        expect(projects.presentations[0].name).toBe('presentation1');
    });
});