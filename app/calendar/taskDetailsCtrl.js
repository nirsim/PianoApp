pianoApp.controller("TaskDetailsCtrl", function ($scope, $location, tasks, activeUser,  $routeParams, Task) {
    
        // If the user is not logged in going back to home screen
        if (!activeUser.isLoggedIn()) {
            $location.path("/");
            return;
        }
    
        // Creating a copy of the task
        $scope.task = new Task(tasks.get($routeParams.taskIndex));
    
        $scope.cancel = function() {
            $location.path("/tasks");
        }
    
        $scope.update = function() {
            tasks.update($routeParams.taskIndex, $scope.task);
            $location.path("/tasks");
        }
    
        $scope.remove = function() {
            tasks.remove($routeParams.taskIndex);
            $location.path("/tasks");
        }
        
    })