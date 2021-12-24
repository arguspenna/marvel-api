(function () {
  'use strict';

  angular
    .module('desafioApp')
    .controller('MainController', MainController);

    function MainController($http){
      var vm = this;

      vm.onInit = onInit;

      function onInit(){
        $http({
          url: "https://developer.marvel.com/v1/public/characters", 
          method: "GET",
          params: {apikey: "38b1589a4602db99bea14aebbc96fb99"}
        }).success(function(data){
          console.log(data);
          //  vm.herosList = data
        });
      }
    }
})();
