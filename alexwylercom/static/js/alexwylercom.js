(function () {
    'use strict';

    var subtitles = [
        "I can't name all 150 pokemon.",
        "Take your shoes off. Stay awhile.",
        "Can I get you anything? Cofee? Tea?",
        "Here, let me take your coat.",
        "How's the fam?",
        "Hold on, let me grab my phone.",
        "Just finishing up.  I'll be right out.",
        "You're just in time for pie!",
        "Can you get some milk next time you're out?",
        "My phone's on 5%, so I might lose you.",
        "How was the drive in?",
        "Get in! You must be freezing!",
        "Don't mind the dog.  He's friendly.",
        "Hungry for apples?",
        "Wasn't the meeting tomorrow though?",
        "Don't mind the mess.",
        "Hey, can you hold this for a second?",
        "Snape kills dumbledore.",
        "I had to Spark Notes 'Heart of Darkness'.",
        "Trying to define yourself is like trying to bite your own teeth.",
        "Take a left at the next street light.",
        "Don't use the garbage disposal!",
        "Thank god.  I'm famished."
    ];

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
        $rootScope.randomSubtitle = function() {
            return subtitles[Math.floor(Math.random()*subtitles.length)];
        };

        $rootScope.$on('$stateChangeSuccess', function() {
            $timeout(medium_embed_onload, 1);
        });
    });
}());

