angular.module('app').controller('fmaNavBarLoginCtrl', function($scope, $http) {
  $scope.signin = function(username, password) {
    $http.post('/login', {username: username, password: password}).then(function )
  }
});
