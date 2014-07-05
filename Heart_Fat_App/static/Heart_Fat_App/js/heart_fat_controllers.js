/**
 * Created by kj on 14-7-5.
 */

var heartFatControllers = angular.module('heartFatControllers', [

]);

heartFatControllers.controller('HeartFatIndexCtrl', ['$scope', '$http', '$ngAnimate',
    function ($scope, $http) {

    }
])

heartFatControllers.controller('HeartFatLoginCtrl', ['$scope', '$http', '$ngAnimate',
    function ($scope, $http) {
        // Todo:
        $scope.loginInfo = {};

        $scope.login = function (loginInfo) {
            $http.post('#/login/validate', loginInfo).
                success(function (data, status, header, config) {
                    if (data.success)
                        alert('Login successful.');
                    else
                        alert('Unauthenticated.');
                }).
                error(function (data, status, header, config) {
                    alert('Error...')
                });
        };
    }
]);