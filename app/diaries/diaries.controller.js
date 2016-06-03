'use strict';
app.controller('diariesController', ['$scope', 'diariesService', function ($scope, diariesService) {

    $scope.orders = [];

    diariesService.getDiaries().then(function (results) {

        $scope.diaries = results.data;

    }, function (error) {
        //alert(error.data.message);
    });

}]);