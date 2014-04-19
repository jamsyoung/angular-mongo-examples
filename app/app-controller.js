/* globals angular */
/* exported myApp, UserListController */
'use strict';

var myApp = angular.module('myApp', []);

function UserListController($scope, $http, $templateCache) {
    var method = 'POST',
        postUrl = 'http://localhost:8080/api/user';

    $scope.response = '';

    $scope.save = function () {
        var data,
            stringifiedData;

        data = {
            username: this.username,
            password: this.password,
            email: this.email
        };

        this.username = '';
        this.password = '';
        this.email = '';

        stringifiedData = JSON.stringify(data);

        $http({
            method: method,
            url: postUrl,
            data: stringifiedData,
            headres: { 'Content-Type': 'application/x-www-form-urlencoded' },
            cache: $templateCache
        }).
        success(function (response) {
            console.log('success');
            $scope.response = response.data;
            console.log($scope.response);
        }).
        error(function (response) {
            $scope.response = response || 'Request Failed';
            console.log($scope.response);
        });

        $scope.list();

        return false;
    };

    $scope.list = function () {
        var url = 'http://localhost:8080/api/user';

        $http.get(url).success(function (data) {
            $scope.users = data;
        });
    };

    $scope.list();
}