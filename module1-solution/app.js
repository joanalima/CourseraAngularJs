(function() {
  'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.allDishes = "";
  $scope.messageColor = {};
  $scope.textBoxColor = {};
  $scope.lunchMessage = "";

  $scope.checkDishes = function(){

    var dishes = $scope.allDishes.split(',');

    // if there's no dishes in the input
    if (dishes == ""){
      $scope.messageColor = {"color" : "red"};
      $scope.textBoxColor = {"border-color" : "red"};
      return $scope.lunchMessage = "Please enter data first";
    }
    // if the number of dishes is less than or equal to 3
    if (dishes.length <= 3){
      $scope.messageColor = {"color" : "green"};
      $scope.textBoxColor = {"border-color" : "green"};
      return $scope.lunchMessage = "Enjoy!";
    }
    // if the number of dishes is bigger then 3
    if (dishes.length > 3){
      $scope.messageColor = {"color" : "green"};
      $scope.textBoxColor = {"border-color" : "green"};
      return $scope.lunchMessage = "Too much!";
    }
  };
}

})();
