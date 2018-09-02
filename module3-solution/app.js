(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'menuCtrl',
      bindToController: true
    }

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menuCtrl = this;

    menuCtrl.searchTerm = "";
    menuCtrl.found = "";

    menuCtrl.searchMenu = function() {

      var promise = MenuSearchService.getMatchedMenuItems(menuCtrl.searchTerm.toLowerCase());
      menuCtrl.message = "";

      if( menuCtrl.searchTerm != ""){
        promise.then( function(foundItems) {
          if( foundItems.length == 0 ){
            menuCtrl.message = "Nothing found";
            menuCtrl.found = "";
          } else {
            menuCtrl.found = foundItems;
          }
        })
      } else {
        menuCtrl.message = "Nothing found";
        menuCtrl.found = "";
      }

    };

    menuCtrl.removeFromSearch = function(index) {
      menuCtrl.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/menu_items.json')
      }).then( function (result) {

        // process result and only keep items that match
        var foundItems = [];
        var data = result.data;

        data.menu_items.forEach( function(menuItem) {
          if ( menuItem.description.indexOf(searchTerm) != -1 ) {
            foundItems.push({
                name: menuItem.name,
                short_name: menuItem.short_name,
                description: menuItem.description
            });
          }
        });

        // return processed items
        return foundItems;
      });
    };
  }

})();
