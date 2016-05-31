(function () {
    'use strict';

    angular.module("baoApp.dateWindow", ['ui.bootstrap.datetimepicker'])
        .controller("dateWindowCtrl", ["$scope", "$filter","$interval", dateWindowCtrl]);

    function dateWindowCtrl($scope, $filter,$interval) {
        $scope.getDateTime = function () {
            var menuState = {};
            $scope.menuState = menuState;
            var selectedVale = $scope.dateTime;
            console.log(selectedVale);
            if (selectedVale == 1) {
                $scope.dt1 = new Date();
                $interval(function () {
                    $scope.dt1 = new Date();
                },3000);
                $scope.menuState.state1 = true;
            } else if (selectedVale == 2) {
                $scope.menuState.state2 = true;
                $scope.beforeRender = function ($view, $dates, $leftDate, $upDate, $rightDate) {
                    var index = Math.floor(Math.random() * $dates.length);
                    $dates[index].selectable = false;
                }
            } else if (selectedVale == 3) {
                $scope.menuState.state3 = true;
            }
            ;
        };
    };
})();
