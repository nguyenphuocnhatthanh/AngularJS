/**
*  Module
*
* Description
*/
var demoApp = angular.module('demoApp', ['ngSanitize', 'ngRoute']);

demoApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/view1.html',
            controller: 'demoController'
        }).
        when('/ShowOrders', {
            templateUrl: 'partials/view2.html',
            controller: 'demoController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);


