(function(){
  angular.module('app.auth')
  .controller('AuthCtrl', AuthCtrl);
  function AuthCtrl(UserService, $state){
    var vm = this;

    vm.handleSignUp = function(){

      UserService.signUpAuth(vm.newUser);
      vm.newUser = {};
    }



  }
})()
