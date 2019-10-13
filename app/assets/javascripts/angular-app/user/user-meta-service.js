angular.module('lotvueAssignment').factory ('UserMetaService', ['$resource', function($resource) {
  return $resource('/user_metas/:id/:action',
    {id: '@id'}, {
    query: {isArray: false},
    update: { method: "PUT"}
  });

}]);
