angular.module('lotvueAssignment').controller('RoleController', ['$scope','roles','$state','RoleService','$uibModal', function ($scope,roles,$state,RoleService,$uibModal) {

  var $ctrl = this;

  $ctrl.animationsEnabled = true;

  $ctrl.roles = roles.roles;

  $scope.newRole = {};

  $scope.openRolePopup = function (role,size ) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'angular-app/role/role-update-template.html',
      controller: 'RoleModalInstanceCtrl',
      controllerAs: '$ctrl',
      keyboard: false,
      backdrop: 'static',
      size: size,
      resolve: {
        role: function(){
          return angular.copy(role);
        }
      }
    });

    modalInstance.result.then(function (user) {
      $state.reload();
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.updateActive = function(role, index,value){

    roleCopy = angular.copy(role);

    roleCopy.is_active = value;
    RoleService.update({id: roleCopy.id,role: roleCopy}).$promise.then(function(resp) {
          console.log(resp);
          $ctrl.roles[index] = roleCopy;
          alert("Role updated successfully")
          // handle success response
        })
        .catch(function(resp) {
          alert( resp.data.errors);
          // handle error response
        });
  }

}]);
