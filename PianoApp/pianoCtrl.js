var pianoCtrl = pianoApp.controller("pianoCtrl", function($scope) {
  $scope.familyList = [
                        {'name':'Nir simovich',
                        'position':'Father',
                        'byear': 1973,
                        'age': function (){
                          var d = new Date();
                          return d.getFullYear() - this.byear ;
                          }
                        },
                        {'name':'Liat Simovich',
                        'position':'Mother',
                        'byear': 1973,
                        'age': function (){
                          var d = new Date();
                          return d.getFullYear() - this.byear ;
                          }
                        },
                        {'name':'Yael Simovich',
                        'position':'Daughter',
                        'byear': 2003,
                        'age': function (){
                          var d = new Date();
                          return d.getFullYear() - this.byear ;
                          }
                        },
                        {'name':'Karen Simovich',
                        'position':'Daughter',
                        'byear': 2007,
                        'age': function (){
                          var d = new Date();
                          return d.getFullYear() - this.byear ;
                          }
                        },
                        {'name':'Tomer Simovich',
                        'position':'Son',
                        'byear': 2010,
                        'age': function (){
                          var d = new Date();
                          return d.getFullYear() - this.byear ;
                          }
                        }
                    ];
            
          $scope.AddStudent = function(){
            $scope.familyList.push(
              {name: $scope.newStudent.name,
                position: $scope.newStudent.position,
                byear: $scope.newStudent.byear,
                age: $scope.newStudent.age()
              }
            )
          }

      });

      