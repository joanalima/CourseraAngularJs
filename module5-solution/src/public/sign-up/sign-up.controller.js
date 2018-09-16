(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService', 'MenuService'];
  function SignUpController(UserService, MenuService) {
    var $ctrl = this;

    $ctrl.successSignUp = false;
    $ctrl.foundFavDish = false;

    $ctrl.signUp = function(event) {
      event.preventDefault();
      var user = {
        first_name: $ctrl.first_name,
        last_name: $ctrl.last_name,
        email: $ctrl.email,
        phone_number: $ctrl.phone_number,
        favorite_dish: $ctrl.favorite_dish
      };

      MenuService.getMenuItem($ctrl.favorite_dish)
        .then(function(data) {
          user.fav_menu_item = data;
          UserService.setUser(user);
          $ctrl.successSignUp = true;
          $ctrl.foundFavDish = true;
          console.log("Success");
        }, function(err) {
          console.log("Dish not found");
          UserService.setUser(user);
          $ctrl.successSignUp = true;
          $ctrl.foundFavDish = false;
        });
    };
  }
})();
