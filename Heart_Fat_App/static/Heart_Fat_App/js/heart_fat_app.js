/**
 * Created by kj on 14-7-4.
 */

var static_prefix = $(document).data('static_prefix');

var heartFatApp = angular.module('heartFatApp', [
    'ngRoute',
    'heartFatControllers',
    'heartFatAnimations'
]);

heartFatApp.factory('auth', function () {
    var _user;

    return {
        setUser: function (user) {
            _user = user;
        },
        isLoggedIn: function () {
            return !!_user;
        }
    };
});

heartFatApp.factory('authInterceptor', ['$log', function ($log) {
    $log.debug('Initializing auth interceptor...');
    var authInterceptor = {
        request: function (config) {
            // TODO:
        }
    };

    return authInterceptor;
}]);

heartFatApp.config(['$httpProvider', function ($httpProvider) {
    //$httpProvider.interceptors.push('authInterceptor')
}]);

// configure existing services inside initialization blocks.
heartFatApp.config(['$interpolateProvider', function ($interpolateProvider) {
    // Configure existing providers
    $interpolateProvider.startSymbol('{=');
    $interpolateProvider.endSymbol('=}');
}]);

heartFatApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/index', {
            templateUrl: '/app/index',
            controller: 'HeartFatIndexCtrl'
        }).
        when('/login', {
            templateUrl: '/app/login',
            controller: 'HeartFatLoginCtrl'
        }).
        otherwise({
            redirectTo: '/index'
        });
}]);


heartFatApp.run(['$rootScope', '$location', 'auth', function ($rootScope, $location, auth) {
    $rootScope.$on('$routeChangeStart', function (event) {
        if (!auth.isLoggedIn()) {
            console.log('Access denied.');
            event.preventDefault();
            $location.path('/login');
        }
    });
}]);

