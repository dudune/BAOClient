'use strict';
var baoService="http://192.168.43.54:8080";
angular.module('baoApp.drilling', ['ngRoute', 'angularFileUpload', "uiSwitch"])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/drilling', {
            templateUrl: 'dr-drilling/drilling.html',
            controller: 'BaoCtrl'
        });
    }])

    .controller('BaoCtrl', ['$scope', 'FileUploader', 'Restangular', '$q', function ($scope, FileUploader, Restangular, $q) {
        var baseJob = Restangular.all('/baodrill/job');
        var Drill = {};
        Drill.enabled = false;
        Drill.concurrentNumber = 1;
        $scope.Drill = Drill;

        var selectedJobIndex;
        var selectedJob;

        var uploader = $scope.uploader = new FileUploader();

        $scope.changeSynFn = function () {
            console.info($scope.Drill.enabled);
            Drill.enabled = $scope.Drill.enabled;
        };

        $scope.changeSynNumberFn = function () {
          Drill.concurrentNumber = $scope.Drill.concurrentNumber;
        };

        baseJob.getList().then(function (result) {
            Drill.jobList = result;
            return result;
        }).then(function (value) {
            $scope.$watch(value, function () {
                $scope.selectJobFn = function () {
                    selectedJobIndex = $scope.selectedJobIndex;
                    selectedJob = value[selectedJobIndex];
                    uploader.url = baoService+'/api/v1.0/upload';
                    uploader.formData.push({
                        asyn: Drill.enabled,
                        asynNum: Drill.concurrentNumber,
                        gridName: selectedJob.gridName,
                        processName: selectedJob.processName
                    });
                }
            });
        });

        uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function (fileItem) {
            var concurrentNumber = $scope['concurrentNumber'];
            console.info('onAfterAddingFile', fileItem, concurrentNumber);
        };
        uploader.onAfterAddingAll = function (addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function (item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function (fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function (progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
            console.log(fileItem);
            //todo
            //请求baoService+'/api/v1.0/execute/'+fileItem.id;
            var SuccessById = Restangular.all('/execute/'+fileItem.id);
            SuccessById.getList().then(function (id) {
                console.log("SuccessById:"+SuccessById);
            })

        };
        uploader.onErrorItem = function (fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function (fileItem, d, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function () {
            console.info('onCompleteAll');
        };
        // });
        // console.info('uploader', uploader);
    }]);