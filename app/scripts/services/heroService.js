(function(){
    'use strict'
    angular
    .module('desafioApp')
    .service('HeroesService', HeroesService);
    
    function HeroesService($http){
        var vm = this;
        
        vm.getHeroes = function(heroName){
            // let herosList = [];
            return $http.get("https://gateway.marvel.com/v1/public/characters",{params: {apikey: "38b1589a4602db99bea14aebbc96fb99", limit: 100,nameStartsWith: heroName}})
            // .then(function(response){
            //     let qtdLoop = Math.ceil(response.data.data.total / 100);
            //     herosList = response.data.data.results;
            //     for(var i=1; i <= qtdLoop; i++){
            //         $http.get("https://gateway.marvel.com/v1/public/characters",{params: {apikey: "38b1589a4602db99bea14aebbc96fb99", limit: 100, offset: i*100, nameStartsWith: heroName}})
            //         .then(function(response){
            //             herosList.push(response.data.data.results);
            //         });
            //     }
            //     return herosList;
            //   }); 
            
        };

        vm.getHeroDetails = function(heroId){
            var url = "https://gateway.marvel.com/v1/public/characters/"+heroId;
            return $http.get(url,{params: {apikey: "38b1589a4602db99bea14aebbc96fb99"}});
        };
    }
})();