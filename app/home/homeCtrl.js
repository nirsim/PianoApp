
pianoApp.controller("HomeCtrl", function ($scope, $uibModal) {
    $scope.login = function() {
        $uibModal.open({
            templateUrl: "/login.html",
            controller: "LoginCtrl"
        })
    }
});