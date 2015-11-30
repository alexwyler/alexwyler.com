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
        "Don't mind the blanket fort.",
        "Hey, can you hold this for a second?",
        "Snape kills dumbledore.",
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
            templateUrl: '/static/html/chrome.html',
            resolve: {
                backgroundImage: function() {
                    return {
                        src: '/static/images/thought1.jpg',
                        opacity: 0.8
                    };
                }
            }
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
            },
            onEnter: function($anchorScroll) {
                $anchorScroll();
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
                },
                backgroundImage: function() {
                    return {
                        src: '/static/images/macbook_code_bw.jpg',
                        opacity: 0.7
                    };
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
                },
                backgroundImage: function() {
                    return {
                        src: '/static/images/forlorn_ruins_bw.jpg',
                        opacity: 0.7
                    };
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
                },
                backgroundImage: function() {
                    return {
                        src: '/static/images/flstudio_project_bw_blur.jpg',
                        opacity: 0.7
                    };
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
            console.log($rootScope.$resolves);
        });
    });

    var max_range = new Array(5);
    app.directive('skillRatingItem', function() {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: '/static/html/skill-rating.html',
            link: function(scope, element, attrs) {
                scope.skill = attrs.skill;
                scope.range = max_range.slice(0, +attrs.rating);
            }
          };
    });
}());

