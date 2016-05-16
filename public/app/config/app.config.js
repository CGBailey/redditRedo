(function(){
  angular.module('app')
  .config(Route);

  function Route($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
    .state('app', {
      abstract: true,
      templateUrl:'app/config/_layout.html'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }

  Route.$inject = ['$stateProvider', "$urlRouterProvider", "$locationProvider"]
})();
