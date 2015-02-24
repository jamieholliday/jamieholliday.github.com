describe('adminPagesDetailsCtrl', function() {
	'use strict';

    var createController, $rootScope, deferred, resourceCache, scope, jhNotifier, adminPagesDetails, deleteResponce, $location;

    beforeEach(module('jhApp'));

    beforeEach(inject(function($controller, _$rootScope_, $q, _$location_) {
        $rootScope = _$rootScope_;
        $location = _$location_;
        scope = $rootScope.$new();
        deferred = $q.defer();

        resourceCache = {
            query: function(){},
            save: function () {},
            update: function () {},
            delete: function () {}
        };

        jhNotifier = {
            notify: function () {}
        };

        deleteResponce = {
            message: 'Success'
        };

        createController = function() {
            return $controller('adminPagesDetailsCtrl', { 
                resourceCache: resourceCache, 
                jhNotifier: jhNotifier,
                $location: $location
            } );
        };

        adminPagesDetails = createController();

        spyOn(resourceCache, 'save').and.returnValue(deferred.promise);
        spyOn(resourceCache, 'update').and.returnValue(deferred.promise);
        spyOn(resourceCache, 'delete').and.returnValue(deferred.promise);
        spyOn(adminPagesDetails, '_updatePage').and.callThrough();
        spyOn(adminPagesDetails, '_newPage').and.callThrough();
        spyOn(jhNotifier, 'notify');
        spyOn($location, 'path');
    }));

    it('should set page status to published', function () {
        adminPagesDetails.publish(true); 
        expect(adminPagesDetails.page.published).toEqual(true);
    });

    it('should save the page if it is a new page', function() {  
        adminPagesDetails.page._id = null;
        adminPagesDetails.saveForm(true);

        expect(adminPagesDetails._newPage).toHaveBeenCalled();
    });

    it('should update the page if it is an exisiting page', function() {
        adminPagesDetails.page._id = 1;
        adminPagesDetails.saveForm(true);

        expect(adminPagesDetails._updatePage).toHaveBeenCalled();
    });

    it('should not save or update page if form is invalid', function() {
        var result = adminPagesDetails.saveForm(false);
        expect(result).toEqual(false);
        expect(adminPagesDetails._updatePage).not.toHaveBeenCalled();
        expect(adminPagesDetails._newPage).not.toHaveBeenCalled();
    });

    it('should delete a page', function () {
        adminPagesDetails.page._id = 1;
        adminPagesDetails.delete();
        expect(resourceCache.delete).toHaveBeenCalledWith('page', {id:1});
        deferred.resolve({deleted: true});
        scope.$digest();
        expect($location.path).toHaveBeenCalledWith('/adminpages');
    });

    it('should update the page', function() {
        adminPagesDetails.page._id = 1;
        adminPagesDetails._updatePage();
        
        expect(resourceCache.update).toHaveBeenCalledWith('page', {id: 1}, adminPagesDetails.page);
        deferred.resolve({message: 'Success'});
        scope.$digest();
        expect(jhNotifier.notify).toHaveBeenCalledWith('Updated page');
    });

    it('should create a new page', function() {
        adminPagesDetails._newPage();
        expect(resourceCache.save).toHaveBeenCalledWith('page', adminPagesDetails.page);
        deferred.resolve({_id: 1});
        scope.$digest();
        expect($location.path).toHaveBeenCalledWith('/adminpages/1');
        expect(jhNotifier.notify).toHaveBeenCalledWith('Saved page');
    });
});