describe('resourcecache', function() {
    'use strict';

    var resourceCache,
        pages,
        projects,
        posts,
        deferred,
        testData,
        promiseFn,
        cachedData,
        $q,
        $rootScope,
        scope;


    beforeEach(function() {
        module('jhApp');

        testData = {
            test: 'test'
        };

        promiseFn = function(){
            return {
                $promise: deferred.promise
            };
        };

        pages = { 
            query: promiseFn,
            delete: promiseFn,
            save: promiseFn,
            update: promiseFn,
            get: promiseFn
        };

        cachedData = [
            {_id: 123, test: 'cached'},
            {_id: 456, test: 'cached'}
        ];

        module(function($provide) {
            $provide.value('pages', pages);
            $provide.value('projects', projects);
            $provide.value('posts', posts);
        });

        inject(function(_resourceCache_, _$q_, _$rootScope_) {
            $rootScope = _$rootScope_;
            scope = $rootScope.$new();
            resourceCache = _resourceCache_;
            $q = _$q_;
            deferred = $q.defer();
        });

        spyOn(pages, 'query').and.callThrough();
        spyOn(pages, 'delete').and.callThrough();
        spyOn(pages, 'save').and.callThrough();
        spyOn(pages, 'update').and.callThrough();
        spyOn(pages, 'get').and.callThrough();

    });

    it('should query for a resource from the server', function() {
        var result = resourceCache.query('page');
        expect(pages.query).toHaveBeenCalled();
        deferred.resolve(testData);

        result.then(function(data) {
            expect(data).toEqual(testData);
        });
        scope.$digest();
    });

    it('should get the resource from the cache', function() {
        var result;

        resourceCache.cache.page = cachedData;

        result = resourceCache.query('page');
        expect(pages.query).not.toHaveBeenCalled();

        result.then(function(data) {
            expect(data).toEqual(cachedData);
        });
        scope.$digest();

    });

    it('should delete a resource', function() {
        var result;
        resourceCache.cache.page = cachedData;
        expect(resourceCache.cache.page).toBe(cachedData);
        result = resourceCache.delete('page', {id: 123});
        expect(pages.delete).toHaveBeenCalledWith({id: 123});
        expect(resourceCache.cache.page).toBe(null);
    });

    it('should save a resource', function() {
        var result;
        resourceCache.cache.page = cachedData;
        expect(resourceCache.cache.page).toBe(cachedData);
        result = resourceCache.save('page', {name: 'fred'});
        expect(pages.save).toHaveBeenCalledWith({name: 'fred'});
        expect(resourceCache.cache.page).toBe(null);
    });

    it('should update a resource', function() {
        var result;
        resourceCache.cache.page = cachedData;
        expect(resourceCache.cache.page).toBe(cachedData);
        result = resourceCache.update('page', {id: 123}, {name: 'fred'});
        expect(pages.update).toHaveBeenCalledWith({id: 123}, {name: 'fred'});
        expect(resourceCache.cache.page).toBe(null);
    });

    it('should get a resource from the server', function() {
        var result;
        resourceCache.cache.page = null;

        result = resourceCache.get('page', {id: 123});
        expect(pages.get).toHaveBeenCalled();

        deferred.resolve(cachedData);

         result.then(function(data) {
            expect(data).toEqual(cachedData);
        });
        scope.$digest();
    });

    it('should get a resource from the cache', function() {
        var result;
        resourceCache.cache.page = cachedData;

        result = resourceCache.get('page', {id: 123});
        expect(pages.get).not.toHaveBeenCalled();

        result.then(function(data) {
            expect(data).toEqual({_id: 123, test: 'cached'});
        });
        scope.$digest();
    });
    
});