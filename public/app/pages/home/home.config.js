(function() {
  angular.module('app.home', [])
  .config( Route );

  function Route($stateProvider) {

    $stateProvider
    .state('app.home', {
      url:'/',
      templateUrl:'app/pages/home/_home.html'
    });
}
}
)();
