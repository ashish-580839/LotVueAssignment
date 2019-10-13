angular.module('lotvueAssignment').controller('MetaModalInstanceCtrl',['$scope', '$uibModalInstance','user','metaData','UserMetaService' ,function ($scope,$uibModalInstance,user,metaData,UserMetaService) {
  var $ctrl = this;

  $ctrl.errors = [];

  $ctrl.metaData = metaData;

  $ctrl.user = user;

  var callService = function(){
    if(angular.isDefined($ctrl.metaData.id)) {
      return UserMetaService.update({id: $ctrl.metaData.id, user_meta: $ctrl.metaData}).$promise;
    }else{
      return UserMetaService.save({user_id: user.id,  user_meta: $ctrl.metaData}).$promise;
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
