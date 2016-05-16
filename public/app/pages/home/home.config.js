(function() {
  angular.module('app.home', [])
  .config( Route );

  function Route($stateProvider) {

    $stateProvider
    .state('app.home', {
      url:'/',
      template:'<h1>Hello Conrad</h1>'
    });
}
}
)();
