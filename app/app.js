'use strict';

// Declare app level module which depends on views, and components
angular.module('baoApp', [
    'ngRoute',
    'ngAnimate',
    'restangular',
    'ui.bootstrap.datetimepicker',
    'mgcrea.ngStrap',
    'baoApp.drilling',
    'baoApp.dateWindow',
    'baoApp.shopping',
    'baoApp.myTest',
    'baoApp.myDate',
    'baoApp.workInstance'
]).config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl("http://192.168.43.54:8080/api/v1.0");
    $routeProvider.otherwise({redirectTo: '/drilling'});
    $routeProvider.when("/date_window", {
        templateUrl: "date_window/dateWindow.html",
        controller: "dateWindowCtrl"
    });
    $routeProvider.when("/shoppingCart",{
       templateUrl:"shop_cart/shoppingCart.html" ,
        controller:"CartController"
    });
    $routeProvider.when("/myTest",{
        templateUrl:"myTest/myTest.html" ,
        controller:"myTestContrl"
    });
    $routeProvider.when("/myDate",{
        templateUrl:"DateControl/dateControl.html",
        controller:"myDateCtrl"
    });
    $routeProvider.when("/workInstance",{
        templateUrl:"WorkInstance/WorkInstanceTest.html" ,
        controller:"WorkExampleCtrl"
    });
}]);
