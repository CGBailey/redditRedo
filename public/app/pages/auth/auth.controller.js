(function(){
  angular.module('app.auth')
  .controller('AuthCtrl', AuthCtrl);
  function AuthCtrl(UserService, $state){
    var vm = this;

    vm.handleSignUp = function(){

    return  UserService.signUpAuth(vm.newUser).then(function() {
      $state.go('app.home')
    })
    }

    vm.handleLogin = function(){
      console.log(vm.login);
      return UserService.loginAuth(vm.login).then(function() {
        $state.go('app.home')
      })
      vm.user = {};
    }

  }
})()
