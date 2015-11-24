(function () {
    'use strict';

    var app = angular.module('aw.resolves', [
        'ui.router'
        ]);

    app.run(function($rootScope, $state) {
        $rootScope.$on('$stateChangeSuccess', function() {
            /*
             * http://stackoverflow.com/questions/24634119/angularjs-ui-router-how-to-get-preload-resolve-value-when-statechangesuccess-t
             */
            $rootScope.$resolves = $state.$current.locals.resolve.$$values;
        });
    });
}());

