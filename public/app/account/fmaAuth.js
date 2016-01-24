angular.module('app').factory('fmaAuth', function($http, fmaIdentity, $q) {
  return {
    authenticateUser: function(username, password) {
      var dfd = $q.defer();
      $http.post('/login', {username: username, password: password}).then(function(response) {
        if(response.data.success) {
          fmaIdentity.currentUser = response.data.user;
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }
      });
      return dfd.promise;
    }
  }
});
