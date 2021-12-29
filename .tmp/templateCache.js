angular.module('desafioApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/details.html',
    "<div class=\"row\" ng-init=\"detailCtrl.OnLoad()\"> <div class=\"col-12 col-md-6\"> <h1 class=\"mb-1 mt-4\">{{detailCtrl.hero.name}}</h1> <div class=\"text-center\" flex> <img class=\"w-100 recursive-image mt-2\" ng-src=\"{{detailCtrl.hero.thumbnail.path}}.{{detailCtrl.hero.thumbnail.extension}}\"> </div> <p class=\"description-text\"> {{detailCtrl.heroHasDescription()}}</p> </div> <div class=\"col-12 col-md-6\"> <h2 class=\"mb-3 mt-4\">Aparece em:</h2> <div class=\"panel panel-default\" class=\"scrollable-panel\"> <!-- Default panel contents --> <!-- <div class=\"panel-heading\">Comics <span class=\"badge\">{{detailCtrl.hero.comics.items.length}}</span></div> --> <ul class=\"list-group\" ng-if=\"detailCtrl.hero.comics.items.length > 0\"> <li ng-repeat=\"comic in detailCtrl.hero.comics.items\" class=\"list-group-item\">{{comic.name}}</li> </ul> </div> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"d-flex justify-content-center align-items-center p-5\"> <img class=\"w-50\" src=\"images/marvel_logo.png\"><br> </div>  <div class=\"form-group d-flex flex-column\"> <input type=\"text\" class=\"form-control inputSearch\" placeholder=\"Sobre qual herói quer pesquisar?\" ng-model=\"mainCtrl.HeroFilter\" ng-change=\"mainCtrl.disableBtn(mainCtrl.HeroFilter)\"> </div> <button class=\"btn btn-default btn-primary w-100 mb-4\" type=\"button\" ng-disabled=\"mainCtrl.disableSearch\" ng-click=\"mainCtrl.SearchHeros(mainCtrl.HeroFilter)\">Pesquisar</button> <div ng-if=\"mainCtrl.herosList.length > 0\"> <h1>Resultados:</h1> <div class=\"row\"> <div class=\"col-md-4\" ng-repeat=\"(key, hero) in mainCtrl.herosList\"> <div class=\"thumbnail thumbnail-result d-flex flex-column justify-content-between\"> <img class=\"w-100\" ng-src=\"{{hero.thumbnail.path}}.{{hero.thumbnail.extension}}\"> <div class=\"caption mb-4\"> <h2>{{hero.name}}</h2> <p ng-show=\"{{hero.description != ''}}\">{{hero.description}}</p> <p ng-show=\"{{hero.description == ''}}\">Descrição não disponível</p> </div> <button class=\"btn btn-primary btn-lg btn-block\" ng-click=\"mainCtrl.editHero(hero)\" flex>Detalhes</button> </div> </div> </div> <button class=\"btn btn-default btn-primary w-100 mb-4\" type=\"button\" ng-click=\"mainCtrl.SearchHeros(mainCtrl.HeroFilter, true)\">Pesquisar mais</button> </div> <div ng-if=\"mainCtrl.herosList.length == 0\" ng-show=\"mainCtrl.afterSearch\"> <h1>Nenhum resultado encontrado</h1> </div> <!-- <div class=\"list-group\" ng-if=\"mainCtrl.herosList.length > 0\">\r" +
    "\n" +
    "  <button ng-repeat=\"(key, hero) in mainCtrl.herosList\" type=\"button\" class=\"list-group-item\" ng-click=\"mainCtrl.editHero(hero)\">{{hero.name}}</button>\r" +
    "\n" +
    "</div> -->"
  );

}]);
