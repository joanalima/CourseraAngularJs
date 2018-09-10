(function() {
'use strict';

	angular.module('MenuApp')
	.config(MenuConfig);

	MenuConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function MenuConfig($stateProvider, $urlRouterProvider) {

	  // Redirect to tab 1 if no other URL matches
	  $urlRouterProvider.otherwise('/');


	  // Set up UI states
	  $stateProvider
		.state('home', {
		  url: '/',
		  templateUrl: 'src/home.template.html'
		})

		.state('categories', {
		  url: '/categories',
		  templateUrl: 'src/categories.template.html',
		  controller: 'CategoriesController as categoriesCtrl',
		  resolve: {
			  categories: ['MenuDataService', function(MenuDataService){
				  return MenuDataService.getAllCategories();
			  }]
		  }
		})

		.state('items', {
		  url: '/items/{categoryByShortName}',
		  templateUrl: 'src/items.template.html',
		  controller: 'ItemsController as itemsCtrl',
		  resolve : {
			  items: ['$stateParams','MenuDataService',
					function($stateParams, MenuDataService) {
						return MenuDataService.getItemsForCategory($stateParams.categoryByShortName);
					}
			  ]
		  }
		});
	}
})();
