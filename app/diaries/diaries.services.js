'use strict';
app.factory('diariesService', ['$http', 'appConfig', function ($http, appConfig) {

    var diariesServiceFactory = {};

    var _getDiaries = function () {

        return $http.get(appConfig.url + 'api/diaries/latest').then(function (results) {
            return results;
        });
    };

    diariesServiceFactory.getDiaries = _getDiaries;

    return diariesServiceFactory;

}]);