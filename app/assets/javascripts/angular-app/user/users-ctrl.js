angular.module('lotvueAssignment').controller('UsersController', ['$scope','users','$state','UserService', 'RoleService','$uibModal', function ($scope,users,$state,UserService,RoleService,$uibModal) {

  var $ctrl = this;
  $ctrl.animationsEnabled = true;

  $ctrl.users = users.users;

  $scope.newUser = {};

  function userCopy(user){
    return {id: user.id, first_name: user.first_name, last_name: user.last_name, role_ids: user.role_ids, email: user.email };
  }

  $scope.openUserPopup = function (user,size ) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'angular-app/user/user-update-template.html',
      controller: 'UserModalInstanceCtrl',
      controllerAs: '$ctrl',
      keyboard: false,
      backdrop: 'static',
      size: size,
      resolve: {
        user: function(){
          return userCopy(user);
        },
        activeRoles: function(){
          return RoleService.query({is_active: true}).$promise;
        }
      }
    });

    modalInstance.result.then(function (user) {
      $state.reload();
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };



}]);
