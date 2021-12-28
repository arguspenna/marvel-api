(function () {
  'use strict';

  angular
    .module('desafioApp')
    .controller('MainController', MainController);

    function MainController($location,HeroesService){
      var vm = this;
      
      //#region methods
        vm.onInit = onInit;
        vm.disableBtn = disableBtn;
        vm.SearchHeros = SearchHeros;
        vm.editHero = editHero;
      //#endregion

      //#region attributes
        vm.disableSearch = true;
        vm.herosList = [];
      //#endregion

      function onInit(){
        
      }

      //método usado para fazer a requisição a API
      function SearchHeros(heroName){
        HeroesService.getHeroes(heroName)
        .then(function(response){
          vm.herosList = response.data.data.results;
        });
      }

      //método para verificar se o botão de pesquisa deve ficar habilitado
      function disableBtn(heroFilter){
        if (heroFilter.length > 3) {
          vm.disableSearch = false;
        }
      }

      function editHero(hero){
        $location.path('/details/' + hero.id);
      }

    }
})();
