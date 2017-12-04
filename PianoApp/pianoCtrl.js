var pianoCtrl = pianoApp.controller("pianoCtrl", function($scope,Student,$rootScope,$http) {


  $rootScope.familyList = []

  
    $http.get("studentList.json").then(function mySuccess(response) {
      for (var i = 0; i < response.data.length; i++) {
        $rootScope.familyList.push(new Student(response.data[i].name, response.data[i].position, response.data[i].byear))  
      }
      //alert("success" + JSON.stringify(response.status));
    }, function myError(response) {
      alert("error" + JSON.stringify(response.status));
    })


$scope.name="";
$scope.position="";
$scope.byear=2015;

$scope.delName="";




$scope.addStudent = function(){
      $rootScope.familyList.push(new Student($scope.name,$scope.position,$scope.byear));
        };


$rootScope.delStudent = function(){
    
         for (var i = 0; i < $rootScope.familyList.length; i++) {
              if ($rootScope.familyList[i].name === $scope.delName.name) {
                $rootScope.familyList.splice(i, 1);
                  i--;
              }
          }
          
      };
      

      
                
});



