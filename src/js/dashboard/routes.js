'use strict';

/**
 * Route configuration for the Dashboard module.
 */
angular.module('Dashboard').config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'dashboard.html'
        })
        .state('tables', {
            url: '/tables', 
            templateUrl: 'tables.html'
        })
        .state('humidity', {
            url: '/humidity', 
            templateUrl: 'humidity.html',
            controller: 'HumidityController'
        })
        // .state('servers', {
        //     url: '/servers', 
        //     templateUrl: 'servers.html'
        // })
        .state('settings', {
            url: '/settings', 
            templateUrl: 'settings.html'
        })

        .state('cats', {
            url: '/cats', 
            template: '<h1>cats!</h1></hr><br><p>they are an animal!</p>'
        });
}]);
