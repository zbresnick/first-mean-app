angular.module('app').controller('fmaNavBarLoginCtrl', function($scope, $http, fmaIdentity, fmaNotifier) {
  $scope.signin = function(username, password) {
    $http.post('/login', {username: username, password: password}).then(function(response) {
      if(response.data.success) {
        fmaIdentity.currentUser = response.data.user;
        fmaNotifier.notify('You have successfully logged in!');
      } else {
        fmaNotifier.notify('Invalid login!');
      }
    })
  }
});
