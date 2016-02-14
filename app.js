var app = angular.module('myApp', ['ngRoute']);

    // configure our routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'HomeCtrl'
            })
        
            // route for the home page
            .when('/counter', {
                templateUrl : 'counter.html',
                controller  : 'MainCtrl'
            })

            // route for the about page
            .when('/cards', {
                templateUrl : 'cards.html',
                controller  : 'JsonCtrl'
            });
    });