(function () {
'use strict';

/**
 * @ngdoc function
 * @name desafioApp.controller:DetailController
 * @description
 * # DetailController
 * Controller of the desafioApp
 */
angular.module('desafioApp')
  .controller('DetailController', DetailController);

  function DetailController(HeroesService, $route){
    var vm = this;

    vm.OnLoad = OnLoad;
    vm.heroHasDescription = heroHasDescription;

    vm.hero = []

    function OnLoad(){
      HeroesService.getHeroDetails($route.current.params.heroId)
      .then(function(response){
        vm.hero = response.data.data.results[0]
      });  
    }

    function heroHasDescription(){
      if(vm.hero.description != ''){
        return vm.hero.description
      } else{
        return "Descrição não disponível"
      }
    }
  }
})();
