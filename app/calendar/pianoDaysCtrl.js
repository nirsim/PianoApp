var pianoDaysCtrl = pianoApp.controller("pianoDaysCtrl", function($rootScope,$scope,$http,Note,Student,Task) {
    $scope.weekdays = [ 'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday'    
                        ];


    $scope.hours = ['09:00',
                    '10:00',
                    '11:00',
                    '12:00',
                    '13:00',
                    '14:00',
                    '15:00',
                    '16:00',
                    '17:00'
                    ];



    $scope.notesList = []

    
    $scope.LessonList = {
        "day":"Sunday",
        "hour":"09:00",
        "student": "Nir"
    }



    $scope.getLesson = function (day,hour) {
    
    
            if ($scope.LessonList.day == this.day && $scope.LessonList.hour == this.hour) {
                return $scope.LessonList.student + ", "// + $scope.notesList[0].composer
                //+", " + $scope.notesList[0].compositions[0];
        /*console.log("success: " + $scope.LessonList.student)*/
        }
        //console.log("fail: " + $scope.LessonList.day + " " + this.day + " " +$scope.LessonList.hour + " " + this.hour);
    }





      $http.get("app/data/notesList.json").then(function mySuccess(response) {
        for (var i = 0; i < response.data.length; i++) {
          $scope.notesList.push(new Note(
                                            response.data[i].composer,
                                            response.data[i].compositions
                                        )
                                    )  
        }
      }, function myError(response) {
        alert("notesList error" + JSON.stringify(response.status));
      })
  
  $scope.composer="";
  $scope.compositions="";
  
  
  
  $scope.addNote = function(){
        $scope.notesList.push(new Note($scope.composer,$scope.compositions));
          
          };
  
          
  $scope.delComposer = function(){
      
            for (var i = 0; i < $scope.notesList.length; i++) {
                if ($scope.notesList[i].composer === $scope.delNote.composer) {
                  $scope.notesList.splice(i, 1);
                    i--;
                }
            }
        };
     

});
  
        