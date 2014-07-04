/**
 * Created by kj on 14-7-4.
 */

var static_prefix = $(document).data('static_prefix');

var heartFatApp = angular.module('heartFatApp', [
    'ngRoute',
    'heartFatControllers'
]);
// configure existing services inside initialization blocks.
heartFatApp.config(['$interpolateProvider', function ($interpolateProvider) {
    // Configure existing providers
    $interpolateProvider.startSymbol('{=');
    $interpolateProvider.endSymbol('=}');
}]);

heartFatApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/index', {
            templateUrl: '/index',
            controller: 'HeartFatIndexCtrl'
        }).
        when('/login', {
            templateUrl: '/login',
            controller: 'HeartFatLoginCtrl'
        }).
        otherwise({
            redirectTo: '/index'
        });
}]);

