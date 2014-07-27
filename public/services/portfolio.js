'use strict';

angular.module('jhApp').factory('portfolio', function(portfolio){

	return {
		items: [
			{
				name: 'Portfolio1',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, eveniet enim. Amet odit ratione quis, asperiores modi illum cumque temporibus debitis at praesentium. Impedit, rem at aliquam illo officiis eligendi.',
				tech: 'HTML, CSS, JS'
			},
			{
				name: 'Portfolio2',
				text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, eveniet enim. Amet odit ratione quis, asperiores modi illum cumque temporibus debitis at praesentium. Impedit, rem at aliquam illo officiis eligendi.',
				tech: 'Magento'
			}
		]
	};
});