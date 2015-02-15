describe('adminPagesDetailsCtrl', function() {
	'use strict';

    var createController, $rootScope, deferred, resourceCache, scope, jhNotifier, page, adminPagesDetails, deleteResponce;

    beforeEach(module('jhApp'));

    beforeEach(inject(function($controller, _$rootScope_, $q) {
        $rootScope = _$rootScope_;
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
                jhNotifier: jhNotifier
            } );
        };

        adminPagesDetails = createController();

        spyOn(resourceCache, 'save').and.returnValue(deferred.promise);
        spyOn(resourceCache, 'update').and.returnValue(deferred.promise);
        spyOn(resourceCache, 'delete').and.returnValue(deferred.promise);
        spyOn(adminPagesDetails, '_updatePage');
        spyOn(adminPagesDetails, '_newPage');
        spyOn(jhNotifier, 'notify');
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
        // deferred.resolve(deleteResponce);
        // scope.$digest();
        expect(resourceCache.delete).toHaveBeenCalledWith('page', {id:1});
    });
});