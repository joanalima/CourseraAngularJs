(function () {
  "use strict";

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['user'];
  function MyInfoController(user) {
    var $ctrl = this;
    $ctrl.signedUp = false;
    $ctrl.favoriteMenuItem;

    if(user) {
      $ctrl.signedUp = true;
      $ctrl.first_name = user.first_name;
      $ctrl.last_name = user.last_name;
      $ctrl.email = user.email;
      $ctrl.phone_number = user.phone_number;
      $ctrl.favorite_dish = user.favorite_dish;
      $ctrl.fav_menu_item = user.fav_menu_item;

    }
    else {
      $ctrl.signedUp = false;
    }
  }

})();
