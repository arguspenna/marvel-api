'use strict';

/**
 * @ngdoc overview
 * @name desafioApp
 * @description
 * # desafioApp
 *
 * Main module of the application.
 */
angular
  .module('desafioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      })
      .when('/details/:heroId', {
        templateUrl: 'views/details.html',
        controller: 'DetailController',
        controllerAs: 'detailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
