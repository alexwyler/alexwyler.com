(function () {
    'use strict';

    var app = angular.module('alexwylercom', [
        'ui.router'
    ]);
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });


        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/static/html/home.html',
            controller: function($scope) {
                $scope.greeting = "HELLO FROM ANGULAR";
            }
        });
    });
}());

