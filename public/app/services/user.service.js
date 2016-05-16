(function() {
  angular.module('app.services')
  .service('UserService', UserService);

  function UserService($http, JWT) {
    var self = this;
    return {
      signUpAuth: function(user) {
        return $http.post('api/v1/users/signup', {user})
        .then(function(response){
          JWT.save(res.data.token)
          self.currentUser = res.data.id;

          return res;
        })
        .catch(function(error){
          console.log(error);
        })
      }
    }
  }

  UserService.$inject= ['$http', 'JWT']
})()
