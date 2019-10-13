angular.module('lotvueAssignment').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.public.users', {
            url: "/users",
            controller: "UsersController",
            controllerAs: '$ctrl',
            templateUrl: "angular-app/user/users.html",
            resolve: {
              users: ['UserService',function(UserService){
                return UserService.query().$promise;
              }],
            }
          })
          .state('container.public.user', {
              url: "/users/:userId",
              controller: "UserController",
              controllerAs: '$ctrl',
              templateUrl: "angular-app/user/user.html",
              resolve: {
                userId: ['$stateParams',function($stateParams){
                  return $stateParams.userId;
                }],
                user: ['userId','UserService',function(userId,UserService){
                  return UserService.get({id: userId}).$promise;
                }],
                metas: ['userId','UserMetaService',function(userId,UserMetaService){
                  return UserMetaService.query({user_id: userId}).$promise;
                }],
              }
            })
}]);
