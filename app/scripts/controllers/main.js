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
        vm.pageNumber = 0;
        vm.afterSearch = false
      //#endregion

      function onInit(){
        
      }

      //método usado para fazer a requisição a API
      function SearchHeros(heroName,searchMore){
        if(searchMore){
          vm.pageNumber++
        }else{
          vm.herosList = [];
        }
        HeroesService.getHeroes(heroName,vm.pageNumber)
        .then(function(response){
          vm.afterSearch = true;
          if(vm.herosList.length > 0){
            vm.herosList.push(...response.data.data.results);
          }else{
            vm.herosList = response.data.data.results;
          }
        });
      }

      //método para verificar se o botão de pesquisa deve ficar habilitado
      function disableBtn(heroFilter){
        if (heroFilter.length > 0) {
          vm.disableSearch = false;
        }else{
          vm.disableSearch = true;
        }
      }

      function editHero(hero){
        $location.path('/details/' + hero.id);
      }

    }
})();
