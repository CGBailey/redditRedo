(function(){
  angular.module('app')
    .controller("AppCtrl", AppCtrl);

  function AppCtrl(UserService){
    var vm = this;

    vm.user = UserService.currentUser;
  }
})();
