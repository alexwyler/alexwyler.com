(function () {
    'use strict';

    var app = angular.module('alexwylercom', [
        'ui.router'
    ]);
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/static/html/home.html',
            controller: function($scope) {
                $scope.greeting = "HELLO FROM ANGULAR";
            }
        });
    });
}());

