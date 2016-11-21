(function() {
  'use strict';

  angular.module('common')
    .service('MenuService', MenuService);

  MenuService.$inject = ['$http', 'ApiPath'];
  function MenuService($http) {
    var service = this;

    service.getCategories = function($http, ApiPath) {
      return $http.get(ApiPath + '/categories.json').then(function(response) {
        return response.data;
      });
    }
  }
})();
