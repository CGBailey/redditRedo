(function(){
  angular.module('app.auth')
  .controller('AuthCtrl', AuthCtrl);
  function AuthCtrl(UserService, $state){
    var vm = this;
    var authType = $state.current.url;
    vm.handleAuth = function(){

    return  UserService.attemptAuth(authType, vm.user)
    .then(function() {
      $state.go('app.home', null, { reload: true })
    })
    }



  }
})()
