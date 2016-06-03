'use strict';
app.factory('ordersService', ['$http', 'appConfig', function ($http, appConfig) {

    var ordersServiceFactory = {};

    var _getOrders = function () {

        return $http.get(appConfig.url + 'api/orders').then(function (results) {
            return results;
        });
    };

    ordersServiceFactory.getOrders = _getOrders;

    return ordersServiceFactory;

}]);