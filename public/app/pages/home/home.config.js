(function() {
  angular.module('app.home', [])
  .config( Route );

  function Route($stateProvider) {

    $stateProvider
  .state('app.home', {
    url: '/home',
    controllerAs: 'home',
    controller: 'HomeCtrl',
    template: require('./_home.html'),
    title: 'Home',
    resolve: {
      posts: [ 'PostService', (PostService) =>{
        return PostService.fetchPosts()
      }]
    }
  });
}
)();
