(function() {
  angular.module("app.auth", [])
    .config(Routes);

    function Routes($stateProvider) {
      $stateProvider
      .state('app.login', {
        url:'/login',
        templateUrl:'/app/pages/auth/_login.html',
        controllerAs: 'auth',
        controller: 'AuthCtrl'
      })
      .state('app.signup', {
        url:'/signup',
        templateUrl:'app/pages/auth/_signup.html',
        controllerAs: 'auth',
        controller: 'AuthCtrl'
      })

    }
})();
