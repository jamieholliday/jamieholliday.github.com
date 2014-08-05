'use strict';
angular.module('jhApp')
.factory('projects', function() {
	return {
		items: [
			{
				name: 'project1',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo, velit tempora molestiae, ullam provident magnam pariatur nam accusantium necessitatibus quis praesentium veniam, minima mollitia tempore beatae laborum eligendi autem!',
				tags: 'HTML5, JS'
			},
			{
				name: 'project2',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo, velit tempora molestiae, ullam provident magnam pariatur nam accusantium necessitatibus quis praesentium veniam, minima mollitia tempore beatae laborum eligendi autem!',
				tags: 'HTML5, JS'
			},
			{
				name: 'project3',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo, velit tempora molestiae, ullam provident magnam pariatur nam accusantium necessitatibus quis praesentium veniam, minima mollitia tempore beatae laborum eligendi autem!',
				tags: 'HTML5, JS'
			},
			{
				name: 'project4',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo, velit tempora molestiae, ullam provident magnam pariatur nam accusantium necessitatibus quis praesentium veniam, minima mollitia tempore beatae laborum eligendi autem!',
				tags: 'HTML5, JS'
			},
			{
				name: 'project5',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores explicabo, velit tempora molestiae, ullam provident magnam pariatur nam accusantium necessitatibus quis praesentium veniam, minima mollitia tempore beatae laborum eligendi autem!',
				tags: 'HTML5, JS'
			}
		]
	};
});