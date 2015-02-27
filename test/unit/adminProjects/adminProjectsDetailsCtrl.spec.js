describe('adminProjectsDetailsCtrl', function() {
	'use strict';

    var createController, 
        $rootScope, 
        deferred, 
        resourceCache, 
        scope, 
        jhNotifier, 
        adminProjectsDetails, 
        deleteResponce, 
        $location;

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
            return $controller('adminProjectsDetailsCtrl', { 
                resourceCache: resourceCache, 
                jhNotifier: jhNotifier,
                $location: $location
            } );
        };

        adminProjectsDetails = createController();

        spyOn(resourceCache, 'save').and.returnValue(deferred.promise);
        spyOn(resourceCache, 'update').and.returnValue(deferred.promise);
        spyOn(resourceCache, 'delete').and.returnValue(deferred.promise);
        spyOn(adminProjectsDetails, '_updateProject').and.callThrough();
        spyOn(adminProjectsDetails, '_newProject').and.callThrough();
        spyOn(jhNotifier, 'notify');
        spyOn($location, 'path');
    }));

    it('should set project status to published', function () {
        adminProjectsDetails.publish(true); 
        expect(adminProjectsDetails.project.published).toEqual(true);
    });

    it('should save the project if it is a new Project', function() {  
        adminProjectsDetails.project._id = null;
        adminProjectsDetails.saveForm(true);

        expect(adminProjectsDetails._newProject).toHaveBeenCalled();
    });

    it('should update the project if it is an exisiting project', function() {
        adminProjectsDetails.project._id = 1;
        adminProjectsDetails.saveForm(true);

        expect(adminProjectsDetails._updateProject).toHaveBeenCalled();
    });

    it('should not save or update project if form is invalid', function() {
        var result = adminProjectsDetails.saveForm(false);
        expect(result).toEqual(false);
        expect(adminProjectsDetails._updateProject).not.toHaveBeenCalled();
        expect(adminProjectsDetails._newProject).not.toHaveBeenCalled();
    });

    it('should delete a project', function () {
        adminProjectsDetails.project._id = 1;
        adminProjectsDetails.delete();
        expect(resourceCache.delete).toHaveBeenCalledWith('project', {id:1});

        deferred.resolve({deleted: true});
        scope.$digest();
        expect($location.path).toHaveBeenCalledWith('/adminprojects');
    });

    it('should update the project', function() {
        adminProjectsDetails.project._id = 1;
        adminProjectsDetails._updateProject();
        expect(resourceCache.update).toHaveBeenCalledWith('project', {id: 1}, adminProjectsDetails.project);

        deferred.resolve({message: 'Success'});
        scope.$digest();
        expect(jhNotifier.notify).toHaveBeenCalledWith('Updated project');
    });

    it('should create a new project', function() {
        adminProjectsDetails._newProject();
        expect(resourceCache.save).toHaveBeenCalledWith('project', adminProjectsDetails.project);
        deferred.resolve({_id: 1});
        scope.$digest();

        expect($location.path).toHaveBeenCalledWith('/adminprojects/1');
        expect(jhNotifier.notify).toHaveBeenCalledWith('Saved project');
    });
});