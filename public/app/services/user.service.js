(function() {
  angular.module('app.services')
  .service('UserService', UserService);

  function UserService($http, JWT) {
    var self = this;

    self.currentUser = null;
      self.signUpAuth = function(user) {
        return $http.post('/api/v1/users/signup', {user})
        .then(function(response){
          JWT.save(response.data.token)
          self.currentUser = response.data.id;

          return response;
        })
        .catch(function(error){
          console.log(error);
        })
      };

      self.loginAuth= function(user) {
        console.log(user);
        return $http.post('/api/v1/users/login', {user})
        .then(function(response){
          console.log("tokenised");
          JWT.save(response.data.token)
          self.currentUser = response.data.id;

          return response;
        })
        .catch(function(error){
          console.log(error);
        })
      }
  }

  UserService.$inject= ['$http', 'JWT']
})()
