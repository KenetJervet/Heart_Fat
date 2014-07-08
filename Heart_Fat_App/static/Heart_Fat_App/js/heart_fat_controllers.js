/**
 * Created by kj on 14-7-5.
 */

var heartFatControllers = angular.module('heartFatControllers', [

]);

heartFatControllers.controller('HeartFatIndexCtrl', ['$scope', '$http',
    function ($scope, $http) {

    }
])

heartFatControllers.controller('HeartFatLoginCtrl', ['$scope', '$http', '$location', 'auth',
    function ($scope, $http, $location, auth) {
        $scope.loginFormInfo = {}
        $scope.login = function () {
            $http.post('/app/login', $scope.loginFormInfo).
                success(function (data, status, header, config) {
                    if (data && data.status == 0) {
                        auth.setUser(data.user)
                        $location.path('/')
                    }
                    else
                        alert('Unauthenticated.');
                }).
                error(function (data, status, header, config) {
                    alert('Error...')
                });
        };
    }
]);