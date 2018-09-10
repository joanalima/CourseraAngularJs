(function () {

  'use strict';

  angular.module('data')
  .component('categories', {
    templateUrl: 'src/categoriesList.template.html',
    bindings: {
      items: '<'
    }
  });

})();
