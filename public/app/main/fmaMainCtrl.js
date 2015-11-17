angular.module('app').controller('fmaMainCtrl', function($scope) {
  $scope.courses = [
    {name: 'Course 1', published: '1991'},
    {name: 'Course 2', published: '1992'},
    {name: 'Course 3', published: '1993'},
    {name: 'Course 4', published: '1994'}
  ];
});
