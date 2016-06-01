(function() {
  angular.module('app.comments', [])
  .config( Route );

  function Route($stateProvider) {

    $stateProvider
    .state('app.home.comment', {
      url: '/'
      controllerAs:'comment',
      controller: 'CommentCtrl',
      templateUrl:'app/pages/comments/_comments.html'
    });
}
}
)();
