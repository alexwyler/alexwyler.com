(function () {
    'use strict';

    var app = angular.module('alexwylercom', [
        'ui.router',
        'aw.resolves'
    ]);
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });


        $stateProvider.state('chrome', {
            abstract: '/',
            templateUrl: '/static/html/chrome.html'
        }).state('home', {
            url: '/',
            parent: 'chrome',
            templateUrl: '/static/html/home.html',
            controller: function() {

            }, 
            resolve: {
                navItem: function() {
                    return 'home';
                }
            }
        }).state('resume', {
            url: '/resume',
            parent: 'chrome',
            templateUrl: '/static/html/resume.html',
            controller: function() {

            }, 
            resolve: {
                navItem: function() {
                    return 'resume';
                }
            }
        }).state('blog', {
            url: '/blog',
            parent: 'chrome',
            templateUrl: '/static/html/blog.html',
            controller: function() {

            }, 
            resolve: {
                navItem: function() {
                    return 'blog';
                }
            }
        });
    });
}());

