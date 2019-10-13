angular.module('lotvueAssignment').factory ('UserService', ['$resource', function($resource) {
  return $resource('/users/:id/:action',
    {id: '@id'}, {
    query: {isArray: false},
    update: { method: "PUT"}
  });

}]);
