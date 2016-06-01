(function(){

  angular.module('app.services')
  .service('Comment', CommentService);

  function CommentService($window, $http){
    return {}

  }

CommentService.$inject = ['$window','$http']
})()
