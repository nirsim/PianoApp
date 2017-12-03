var pianoApp = angular.module("pianoApp", ["ngRoute"]);

pianoApp.config(function($routeProvider) {
    $routeProvider
        .when ('/', {
            controller: 'pianoCtrl',
            tamplateUrl: 'index.html'
            })
        .when ('/pianoUser',
            {controller: 'pianoCtrl',
             templateUrl: 'pianoUser.html'
            })
        .when ('/pianoCalendar',
        {controller: 'pianoDaysCtrl',
         templateUrl: 'pianoCalendar.html'
        })

        .otherwise ({ redirecTo: '/'})
    }) ;
    