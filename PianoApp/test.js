var app = angular.module('nestedApp', []);
app.controller("nestedCtrl", ["$scope", function($scope) {
  
  $scope.users = [
      {
    dateTime: new Date(),
    detail: [{
      name: 'Anil Singh'
    }]
    }, 
    {
    dateTime: new Date(),
    detail: [{
      name: 'Sunil Singh'
    }]
  }];
  
}]);