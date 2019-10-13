angular.module('lotvueAssignment').controller('UserModalInstanceCtrl',['$scope', '$uibModalInstance','user','UserService', 'activeRoles' ,function ($scope,$uibModalInstance,user,UserService, activeRoles) {
  var $ctrl = this;

  $ctrl.errors = [];

  $ctrl.user = user;
  $ctrl.activeRoles = activeRoles.roles;

  console.log($ctrl.activeRoles);

  var callService = function(){
    if(angular.isDefined($ctrl.user.id)) {
      return UserService.update({id: $ctrl.user.id,user: $ctrl.user}).$promise;
    }else{
      return UserService.save({user: $ctrl.user}).$promise;
    }
  };

  $ctrl.submit = function (form) {
    if(form.$invalid){
      return;
    }
    $ctrl.errors = [];

    callService().then(function(resp) {
          console.log(resp);
          // handle success response
          $uibModalInstance.close(resp);
        })
        .catch(function(resp) {
          $ctrl.errors = resp.data.errors;
          // handle error response
        });
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };





}]);
