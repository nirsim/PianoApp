var pianoCtrl = pianoApp.controller("pianoCtrl", function($scope,Student,$rootScope,$http,Task,tasks,Note) {

  $rootScope.familyList = []

  
  
    $http.get("app/data/studentList.json").then(function mySuccess(response) {
      for (var i = 0; i < response.data.length; i++) {
        $rootScope.familyList.push(new Student(
                                                response.data[i].name,
                                                response.data[i].email,
                                                response.data[i].pass,
                                                response.data[i].byear
                                              )
                                  )  
      }
      //alert("success" + JSON.stringify(response.status));
    }, function myError(response) {
     console.log("familyList error" + JSON.stringify(response.status));
    })

$scope.name="";
$scope.email="";
$scope.pass=123;
$scope.byear=2015;

$scope.addStudent = function(){
      $rootScope.familyList.push(new Student($scope.name,$scope.email,$scope.pass,$scope.byear));
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
  


  pianoApp.controller("NewTaskCtrl", function ($scope, $location, tasks, activeUser, Task) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
        $scope.tasks = new Task({});
    
        $scope.cancel = function () {
            $location.path("/pianoCalendar");
        }
    
        $scope.create = function () {
            tasks.add($scope.task);
            $location.path("/pianoCalendar");
        }
    });
      