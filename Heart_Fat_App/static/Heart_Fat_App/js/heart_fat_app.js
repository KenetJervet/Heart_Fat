/**
 * Created by kj on 14-7-4.
 */

var static_prefix = $(document).data('static_prefix');

var heartFatApp = angular.module('heartFatApp', [
    'ngRoute',
    'ngCookies',
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

heartFatApp.config(['$httpProvider',
    '$interpolateProvider',
    '$routeProvider',
    '$locationProvider',
    function ($httpProvider, $interpolateProvider, $routeProvider, $locationProvider) {
        $interpolateProvider.startSymbol('{=');
        $interpolateProvider.endSymbol('=}');

        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

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

        $locationProvider.html5Mode(true);
    }]);


heartFatApp.run(['$rootScope', '$location', '$cookies', '$http', 'auth',
    function ($rootScope, $location, $cookies, $http, auth) {
        $rootScope.$on('$routeChangeStart', function (event) {
            if (!auth.isLoggedIn()) {
                event.preventDefault();
                $location.path('/login');
            }
        });

        $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    }]);

