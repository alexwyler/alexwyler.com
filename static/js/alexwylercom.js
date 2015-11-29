(function () {
    'use strict';

    var subtitles = [
        "I can't name all 150 pokemon.",
        "Take your shoes off. Stay awhile.",
        "Can I get you anything? Coffee? Tea?",
        "Here, let me take your coat.",
        "How's the fam?",
        "You're just in time for pie!",
        "Can you get some milk next time you're out?",
        "How was the drive up?",    
        "Get in! You must be freezing!",
        "Don't mind the dog.  He's friendly.",
        "Hungry for apples?",
        "Wasn't the meeting tomorrow though?",
        "Don't mind the blanket fort.",
        "Hey, can you hold this for a second?",
        "Snape kills dumbledore.",
        "Trying to define yourself is like trying to bite your own teeth.",
        "Take a left at the next street light.",
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
                },
                subtitle: function() {
                    return 'A leader and full-stack web developer.';
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
                },
                subtitle: function() {
                    return "More on what's interesting to me.";
                }
            }
        }).state('music', {
            url: '/music',
            parent: 'chrome',
            templateUrl: '/static/html/music.html',
            resolve: {
                navItem: function() {
                    return 'music';
                },
                title: function() {
                    return 'Music';
                },
                subtitle: function() {
                    return 'An aspiring producer.';
                }
            }
        });
    });

    app.run(function($rootScope, $timeout) {
        $rootScope.date = new Date();
        var genRandomSubtitle = function() {
            return subtitles[Math.floor(Math.random()*subtitles.length)];
        };

        $rootScope.$on('$stateChangeSuccess', function() {
            $timeout(medium_embed_onload, 1);
            $rootScope.randomSubtitle = genRandomSubtitle();
        });
    });
}());

