pianoApp.controller("loginCtrl", function ($scope, $http, $location, activeUser, Student, Task, tasks) {


    $scope.email = "FNir";
    $scope.password = "123";

    $http.get("app/data/studentList.json").then(function (response) {
        $scope.users = [];
        for (var i = 0; i < response.data.length; i++) {
            $scope.users.push(new Student(response.data[i].name,
                response.data[i].email, response.data[i].pass, response.data[i].byear
            )

            );
        }

        //console.log(JSON.stringify($scope.users));
    });

    $scope.failedAttempt = false;

    $scope.login = function () {
        var user = getLoggedInUser();
        if (user != null) {
            activeUser.login(user);

            $location.path("/homeCtrl")
        } else {
            $scope.failedAttempt = true;
        }


        //console.log($scope.email + " " + $scope.password)
    }

    var getLoggedInUser = function () {
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].email === $scope.email && $scope.users[i].pass === $scope.pass) {
                return $scope.users[i];
            }
        }
        return null;
    }

    $scope.dismiss = function () {

    }
});