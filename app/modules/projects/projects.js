'use strict';
angular.module('jhApp')
.factory('projects', function($resource) {
	var ProjectsResource = $resource('api/courses/:id', {id: '@id'},
		{update: {method:'PUT', isArray:false}
	});

	return ProjectsResource;
});


// return {
// 		items: [
// 			{	
// 				id: 1,
// 				name: 'project1',
// 				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo, velit tempora molestiae, ullam provident magnam pariatur nam accusantium necessitatibus quis praesentium veniam, minima mollitia tempore beatae laborum eligendi autem!',
// 				tags: 'HTML5, JS'
// 			},
// 			{	
// 				id: 2,
// 				name: 'project2',
// 				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo, velit tempora molestiae, ullam provident magnam pariatur nam accusantium necessitatibus quis praesentium veniam, minima mollitia tempore beatae laborum eligendi autem!',
// 				tags: 'HTML5, JS'
// 			},
// 			{	
// 				id: 3,
// 				name: 'project3',
// 				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo, velit tempora molestiae, ullam provident magnam pariatur nam accusantium necessitatibus quis praesentium veniam, minima mollitia tempore beatae laborum eligendi autem!',
// 				tags: 'HTML5, JS'
// 			},
// 			{	
// 				id: 4,
// 				name: 'project4',
// 				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo, velit tempora molestiae, ullam provident magnam pariatur nam accusantium necessitatibus quis praesentium veniam, minima mollitia tempore beatae laborum eligendi autem!',
// 				tags: 'HTML5, JS'
// 			},
// 			{	
// 				id: 5,
// 				name: 'project5',
// 				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo, velit tempora molestiae, ullam provident magnam pariatur nam accusantium necessitatibus quis praesentium veniam, minima mollitia tempore beatae laborum eligendi autem!',
// 				tags: 'HTML5, JS'
// 			}
// 		]
// 	};