angular.module('lotvueAssignment').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.public.roles', {
            url: "/roles",
            controller: "RoleController",
            controllerAs: '$ctrl',
            templateUrl: "angular-app/role/role.html",
            resolve: {
              roles: ['RoleService',function(RoleService){
                return RoleService.query().$promise;
              }],
            }
          })
}]);
