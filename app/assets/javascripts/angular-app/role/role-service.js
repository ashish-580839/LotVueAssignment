angular.module('lotvueAssignment').factory ('RoleService', ['$resource', function($resource) {
  return $resource('/roles/:id/:action',
    {id: '@id'}, {
    query: {isArray: false},
    update: { method: "PUT"}
  });

}]);
