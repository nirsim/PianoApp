var pianoCtrl = pianoApp.controller("pianoCtrl", function($scope,Student,$rootScope,$http,Task,tasks) {

  $rootScope.familyList = []
  
    $http.get("studentList.json").then(function mySuccess(response) {
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
      alert("error" + JSON.stringify(response.status));
    })

$scope.name="";
$scope.position="";
$scope.byear=2015;
$scope.delName="";

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


pianoApp.controller("pianoNotes", function($scope,Student,$rootScope,$http,Notes,activeUser,Task,tasks,TaskDetailsCtrl) {
  
    $rootScope.notesList = []
    
      $http.get("noteslist.json").then(function mySuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
          $rootScope.notesList.push(new Note(
                                                  response.data[i].composer,
                                                  response.data[i].compositions
                                                )
                                    )  
        }
      }, function myError(response) {
        alert("error" + JSON.stringify(response.status));
      })
  
  $scope.composer="";
  $scope.compositions="";
  $scope.note="";
  
  $scope.addNote = function(){
        $rootScope.notesList.push(new Note($scope.composer,$scope.compositions));
          };
  
/*            
  $rootScope.delComposer = function(){
      
            for (var i = 0; i < $rootScope.notesList.length; i++) {
                if ($rootScope.notesList[i].composer === $scope.delNote.composer) {
                  $rootScope.notesList.splice(i, 1);
                    i--;
                }
            }
        };
    */             
  });
  


  pianoApp.controller("NewTaskCtrl", function ($scope, $location, tasks, activeUser, Task) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
        $scope.tasks = new Task({});
    
        $scope.cancel = function () {
            $location.path("/tasks");
        }
    
        $scope.create = function () {
            tasks.add($scope.task);
            $location.path("/tasks");
        }
    });
      