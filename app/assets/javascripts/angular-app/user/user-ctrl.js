angular.module('lotvueAssignment').controller('UserController', ['$scope','user','$state','UserMetaService','$uibModal', 'Upload', function ($scope,user,$state,UserMetaService,$uibModal,Upload) {

  var $ctrl = this;

  $ctrl.animationsEnabled = true;

  $ctrl.user = user.user;

  $ctrl.metaDatas = $ctrl.user.user_metas;

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

  $scope.upload = function (file) {


    Upload.upload({
        url: 'users/'+$ctrl.user.id+'/add_image',
        data: {image: file}
    }).then(function (resp) {
        // console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        
        $state.reload();
    }, function (resp) {
        console.log('Error status: ' + resp.status);
    }, function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
    });

  };




}]);
