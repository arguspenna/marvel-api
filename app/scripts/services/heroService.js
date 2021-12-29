(function(){
    'use strict'
    angular
    .module('desafioApp')
    .service('HeroesService', HeroesService);
    
    function HeroesService($http){
        var vm = this;
        
        vm.getHeroes = function(heroName,index){
            return $http.get("https://gateway.marvel.com/v1/public/characters",{params: {apikey: "38b1589a4602db99bea14aebbc96fb99", limit: 20, offset: index*20, nameStartsWith: heroName}})
        };

        vm.getHeroDetails = function(heroId){
            var url = "https://gateway.marvel.com/v1/public/characters/"+heroId;
            return $http.get(url,{params: {apikey: "38b1589a4602db99bea14aebbc96fb99"}});
        };
    }
})();