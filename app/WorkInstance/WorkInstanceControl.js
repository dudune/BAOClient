(function () {
    "use strict";
    angular.module("baoApp.workInstance", ['restangular'])
        .controller("WorkExampleCtrl", ["$scope", WorkExampleCtrl]);

    function WorkExampleCtrl($scope) {
        var Radio = {};
        $scope.Radio = Radio;
        $scope.Radio.daily = 1;
        $scope.showRadio = false;

        var radioVariable = $scope.Radio;
        $scope.selectRadio = function () {
            radioVariable.daily = radioVariable.currRadio;
            console.log(radioVariable.daily);
            if ($scope.showRadio != radioVariable.daily) {
                $scope.showRadio = !$scope.showRadio;
            }
            ;
        };
    };
})();