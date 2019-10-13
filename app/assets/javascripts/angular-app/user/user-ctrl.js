angular.module('lotvueAssignment').controller('UserController', ['$scope','user','metas','$state','UserMetaService','$uibModal', function ($scope,user,metas,$state,UserMetaService,$uibModal) {

  var $ctrl = this;

  $ctrl.animationsEnabled = true;

  $ctrl.user = user.user;

  $ctrl.metaDatas = metas.user_meta;

  $scope.newMetaData = {};

  $scope.openMetaDataPopup = function (metaData,size ) {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'angular-app/user-meta/user-meta-update-template.html',
      controller: 'MetaModalInstanceCtrl',
      controllerAs: '$ctrl',
      keyboard: false,
      backdrop: 'static',
      size: size,
      resolve: {
        user: function(){
          return $ctrl.user;
        },
        metaData: function(){
          return angular.copy(metaData);
        }
      }
    });

    modalInstance.result.then(function (user) {
      $state.reload();
    }, function () {
      // $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.removeMetaData = function(metaData){

    if( confirm("Are you sure you want to remove this metaData?") ){
        UserMetaService.delete({id: metaData.id}).$promise.then(function(resp) {
            console.log(resp);
            // handle success response
            $state.reload();
          })
          .catch(function(resp) {
            alert(resp.data.errors);
            // handle error response
          });
    }

  }


}]);
