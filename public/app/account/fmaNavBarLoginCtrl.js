angular.module('app').controller('fmaNavBarLoginCtrl', function($scope, $http, fmaIdentity, fmaNotifier, fmaAuth) {
  $scope.identity = fmaIdentity;
  $scope.signin = function(username, password) {
    fmaAuth.authenticateUser(username, password).then(function(success) {
      if(success) {
        fmaNotifier.notify('You have successfully logged in!');
      } else {
        fmaNotifier.notify('Invalid login!');
      }
    });
  }
});
