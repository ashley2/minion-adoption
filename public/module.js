var app = angular.module('minionApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){


  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('owners', {
    url: "/",
    templateUrl: "templates/owners.html",
    controller: "ownersCtrl"
  })
  .state('minion', {
    url: "/minions/",
    templateUrl: "templates/minions.html",
    controller: "minionsCtrl"
  })
  





})