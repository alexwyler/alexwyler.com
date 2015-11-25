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
            resolve: {
                navItem: function() {
                    return 'home';
                },
                title: function() {
                    return 'Welcome';
                }
            }
        }).state('resume', {
            url: '/resume',
            parent: 'chrome',
            templateUrl: '/static/html/resume.html', 
            resolve: {
                navItem: function() {
                    return 'resume';
                },
                title: function() {
                    return 'Resume';
                }
            }
        }).state('blog', {
            url: '/blog',
            parent: 'chrome',
            templateUrl: '/static/html/blog.html',
            resolve: {
                navItem: function() {
                    return 'blog';
                },
                title: function() {
                    return 'Blog';
                }
            }
        });
    });

    app.run(function($rootScope, $timeout) {
        $rootScope.date = new Date();

        $rootScope.$on('$stateChangeSuccess', function() {
            $timeout(medium_embed_onload, 1);
        });
    });
}());

