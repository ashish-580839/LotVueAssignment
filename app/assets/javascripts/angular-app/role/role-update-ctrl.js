angular.module('lotvueAssignment').controller('RoleModalInstanceCtrl',['$scope', '$uibModalInstance','role','RoleService' ,function ($scope,$uibModalInstance,role,RoleService) {
  var $ctrl = this;

  $ctrl.errors = [];

  $ctrl.role = role;

  var callService = function(){
    if(angular.isDefined($ctrl.role.id)) {
      return RoleService.update({id: $ctrl.role.id,role: $ctrl.role}).$promise;
    }else{
      return RoleService.save({role: $ctrl.role}).$promise;
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
