(function () {

  'use strict';

  angular.module('data')
  .component('items', {
    templateUrl: 'src/itemsList.template.html',
    bindings: {
      items: '<'
    }
  });
})();
