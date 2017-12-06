var pianoApp = angular.module("pianoApp", ["ngRoute","ngAnimate", "ui.bootstrap"]);

pianoApp.config(function($routeProvider) {
    $routeProvider
        .when ('/', {
            controller: 'NavCtrl',
            tamplateUrl: 'index.html'
            })
        .when ('/', {
            controller: 'homeCtrl',
            tamplateUrl: 'app/home/home.html'
            })
        .when ('/pianoUser',
            {controller: 'pianoCtrl',
             templateUrl: 'app/user/pianoUser.html'
            })
        .when ('/pianoCalendar',
        {controller: 'pianoDaysCtrl',
         templateUrl: 'app/calendar/pianoCalendar.html'
        })
        .when ('/login',
        {controller: 'loginCtrl',
         templateUrl: 'app/login/login.html'
        })


        .otherwise ({ redirecTo: '/'})
    }) ;
    