(function(){

var depends = [
  'ui.router',
  'app.home',
  'app.auth',
  'app.comments',
  'app.services'
];

angular.module('app', depends);

})();
