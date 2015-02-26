describe('adminPostsDetailsCtrl', function() {
	'use strict';

    var createController, 
        $rootScope, 
        deferred, 
        resourceCache, 
        scope, 
        jhNotifier, 
        adminPostsDetails, 
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
            return $controller('adminPostsDetailsCtrl', { 
                resourceCache: resourceCache, 
                jhNotifier: jhNotifier,
                $location: $location
            } );
        };

        adminPostsDetails = createController();

        spyOn(resourceCache, 'save').and.returnValue(deferred.promise);
        spyOn(resourceCache, 'update').and.returnValue(deferred.promise);
        spyOn(resourceCache, 'delete').and.returnValue(deferred.promise);
        spyOn(adminPostsDetails, '_updatePost').and.callThrough();
        spyOn(adminPostsDetails, '_newPost').and.callThrough();
        spyOn(jhNotifier, 'notify');
        spyOn($location, 'path');
    }));

    it('should set post status to published', function () {
        adminPostsDetails.publish(true); 
        expect(adminPostsDetails.post.published).toEqual(true);
    });

    it('should save the post if it is a new Post', function() {  
        adminPostsDetails.post._id = null;
        adminPostsDetails.saveForm(true);

        expect(adminPostsDetails._newPost).toHaveBeenCalled();
    });

    it('should update the post if it is an exisiting post', function() {
        adminPostsDetails.post._id = 1;
        adminPostsDetails.saveForm(true);

        expect(adminPostsDetails._updatePost).toHaveBeenCalled();
    });

    it('should not save or update post if form is invalid', function() {
        var result = adminPostsDetails.saveForm(false);
        expect(result).toEqual(false);
        expect(adminPostsDetails._updatePost).not.toHaveBeenCalled();
        expect(adminPostsDetails._newPost).not.toHaveBeenCalled();
    });

    it('should delete a post', function () {
        adminPostsDetails.post._id = 1;
        adminPostsDetails.delete();
        expect(resourceCache.delete).toHaveBeenCalledWith('post', {id:1});

        deferred.resolve({deleted: true});
        scope.$digest();
        expect($location.path).toHaveBeenCalledWith('/adminposts');
    });

    it('should update the post', function() {
        adminPostsDetails.post._id = 1;
        adminPostsDetails._updatePost();
        expect(resourceCache.update).toHaveBeenCalledWith('post', {id: 1}, adminPostsDetails.post);

        deferred.resolve({message: 'Success'});
        scope.$digest();
        expect(jhNotifier.notify).toHaveBeenCalledWith('Updated post');
    });

    it('should create a new post', function() {
        adminPostsDetails._newPost();
        expect(resourceCache.save).toHaveBeenCalledWith('post', adminPostsDetails.post);
        deferred.resolve({_id: 1});
        scope.$digest();

        expect($location.path).toHaveBeenCalledWith('/adminposts/1');
        expect(jhNotifier.notify).toHaveBeenCalledWith('Saved post');
    });
});