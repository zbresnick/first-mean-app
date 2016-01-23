angular.module('app').factory('fmaIdentity', function() {
  return {
    currentUser: undefined,
    isAuthenticated: function() {
      return !!this.currentUser;
    }
  }
});
