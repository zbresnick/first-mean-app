angular.module('app').value('fmaToastr', toastr);

angular.module('app').factory('fmaNotifier', function(fmaToastr) {
  return {
    notify: function(msg) {
      fmaToastr.success(msg);
      console.log(msg);
    }
  }
})
