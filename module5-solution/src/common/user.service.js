(function() {
  'use strict';

  angular.module('common')
    .service("UserService", UserService);

  function UserService() {
    var service = this;
    var user;

    service.setUser = function(newUser) {
      user = {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        phone_number: newUser.phone_number,
        favorite_dish: newUser.favorite_dish,
        fav_menu_item: newUser.fav_menu_item
      };
    };

    service.getUser = function() {
      return user;
    }
  }
})();
