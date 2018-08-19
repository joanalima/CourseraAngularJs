(function() {
  'use strict';

  var toBuyItemsArray = [
    { name: "Cookies", quantity: 2},
    { name: "Chips", quantity: 3},
    { name: "Jellies", quantity: 4},
    { name: "Ice Cream", quantity: 2},
    { name: "Coke Cans", quantity: 6}
  ];

  var boughtItemsArray = [];

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var itemsToBuyCtrl = this;
    itemsToBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();
    itemsToBuyCtrl.boughtItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var itemsBoughtCtrl = this;
    itemsBoughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = toBuyItemsArray;
    var boughtItems = boughtItemsArray;

    // get items to Buy
    service.getToBuyItems = function () {
      return toBuyItems;
    }
    // buy items
    service.buyItem = function (itemIndex) {
      var item = toBuyItems[itemIndex];
      // add to already bought list
      boughtItems.push(item);
      // remove from the 'to buy' shopping list
      toBuyItems.splice(itemIndex, 1);
    }
    // get items already bought
    service.getBoughtItems = function () {
      return boughtItems;
    }
  }

})();
