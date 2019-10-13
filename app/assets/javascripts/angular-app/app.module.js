angular.module('lotvueAssignment', [
        'ngResource',
        'ngAnimate',
        'templates', // Angular rails templates module
        'ui.router',
        'angular-loading-bar',
        'ui.bootstrap',
        'ngFileUpload'
    ]);

angular.module('lotvueAssignment')
      .run(['$http',function($http){

      }]);

angular.module('lotvueAssignment').config(["$httpProvider", function($httpProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }]);

angular.module('lotvueAssignment')
      .controller('RootController',['$scope',function($scope){

      }]);
