(function () {
    "use strict";
    angular.module("baoApp.myDate", ["checklist-model"])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider.when("/minutes", {
                templateUrl: "Dates/minutes.html",
            });
            $routeProvider.when("/hourly", {
                templateUrl: "Dates/hourly.html",
            })
        }])
        .controller("myDateCtrl", ["$scope", "$filter", myDateCtrl])


    function myDateCtrl($scope, $filter) {
        var RadioTab = {};
        $scope.RadioTab = RadioTab;
        $scope.RadioTab.daily = 1;

        var cronObj = {};
        $scope.cronObj = cronObj;


        //每分
        cronObj.mintues = 1;//每隔几分钟显示tab1

        //每时
        cronObj.hourly = {};
        cronObj.hourly.hour = 1;//每隔几小时显示tab2(1)
        var currentDate = new Date(Date.now());
        var dt2 = currentDate;
        var time = cronObj.time = dt2;
        var timeObj=cronObj.time.toLocaleTimeString("en-US");

        var timeAndHours = timeObj.split(":");
        var minutes = timeAndHours[1];
        var hour = timeAndHours[0];
        var amOrPm = timeObj.split(" ");
        var timeSplit= " " + minutes + " " + hour;

        cronObj.hourly.mintues=dt2;
        $scope.$watch("cronObj.hourly.mintues", function (result) {
            timeObj = result.toLocaleTimeString("en-US");
            timeAndHours = timeObj.split(":");
            minutes = timeAndHours[1];
           hour = timeAndHours[0];
            amOrPm = timeObj.split(" ");
            if (amOrPm[1] == 'PM' && hour < 12){
                hour = Number.parseInt(hour) + 12;
                timeSplit= " " + minutes + " " + hour;
            } else if (amOrPm[1] == 'AM' && hour == 12){
                timeSplit= " " + minutes + " 00";
            } else if (amOrPm[1] == 'AM' && hour < 12) {
                hour = Number.parseInt(hour);
                timeSplit= " " + minutes + " " + hour;
            }

        });

        //每天
        cronObj.daily = {};
        cronObj.daily = 1;//每隔几天显示tab3(1)
        cronObj.daily_weekDay = "MON-FRI";//每周一到周五显示tab3(2)
        cronObj.daily_startTime = dt2;
        $scope.$watch("cronObj.daily_startTime", function (result) {
            timeObj = result.toLocaleTimeString("en-US");
            timeAndHours = timeObj.split(":");
            minutes = timeAndHours[1];
            hour = timeAndHours[0];
            amOrPm = timeObj.split(" ");
            if (amOrPm[1] == 'PM' && hour < 12){
                hour = Number.parseInt(hour) + 12;
                timeSplit= " " + minutes + " " + hour;
            } else if (amOrPm[1] == 'AM' && hour == 12){
                timeSplit= " " + minutes + " 00";
            } else if (amOrPm[1] == 'AM' && hour < 12) {
                hour = Number.parseInt(hour);
                timeSplit= " " + minutes + " " + hour;
            }

        });


        //每周
        cronObj.weekly = {};
        cronObj.weekly.week = $scope.weeks =
        {
            MON: "星期一", TUES: "星期二", WED: "星期三",
            THUR: "星期四", FRI: "星期五", SAT: "星期六", SUN: "星期天"
        };
        $scope.wee = {
            weeks: []
        }
        cronObj.weekly.startTime = dt2;
        $scope.$watch("cronObj.weekly.startTime", function (result) {
            timeObj = result.toLocaleTimeString("en-US");
            timeAndHours = timeObj.split(":");
            minutes = timeAndHours[1];
            hour = timeAndHours[0];
            amOrPm = timeObj.split(" ");
            if (amOrPm[1] == 'PM' && hour < 12){
                hour = Number.parseInt(hour) + 12;
                timeSplit= " " + minutes + " " + hour;
            } else if (amOrPm[1] == 'AM' && hour == 12){
                timeSplit= " " + minutes + " 00";
            } else if (amOrPm[1] == 'AM' && hour < 12) {
                hour = Number.parseInt(hour);
                timeSplit= " " + minutes + " " + hour;
            }

        });

        //每月
        cronObj.monthly_month1 = 1;//每月tab5(1)
        cronObj.monthly_day = 1;//的第几天tab5(1)

        cronObj.monthly_month2 = 1;//每月tab5(2)
        cronObj.monthly_number = $scope.Number = [1, 2, 3, 4];
        cronObj.monthly_week = $scope.Week = {
            星期一: "MON", 星期二: "TUES", 星期三: "Wed", 星期四: "Thur", 星期五: "Fri", 星期六: "Sat", 星期天: "Sun"
        };
        cronObj.monthly_startTime = dt2;
        $scope.$watch("cronObj.monthly_startTime", function (result) {
            timeObj = result.toLocaleTimeString("en-US");
            timeAndHours = timeObj.split(":");
            minutes = timeAndHours[1];
            hour = timeAndHours[0];
            amOrPm = timeObj.split(" ");
            if (amOrPm[1] == 'PM' && hour < 12){
                hour = Number.parseInt(hour) + 12;
                timeSplit= " " + minutes + " " + hour;
            } else if (amOrPm[1] == 'AM' && hour == 12){
                timeSplit= " " + minutes + " 00";
            } else if (amOrPm[1] == 'AM' && hour < 12) {
                hour = Number.parseInt(hour);
                timeSplit= " " + minutes + " " + hour;
            }

        });

        //每年tab6(1)
        cronObj.yearly_month1 = $scope.Month = {
            一月: "JAN", 二月: "FEB", 三月: "MAR", 四月: "APR", 五月: "MAY", 六月: "JUN",
            七月: "JUL", 八月: "AUG", 九月: "SEP", 十月: "OCT", 十一月: "NOV", 十二月: "DEC"
        };
        cronObj.yearly_day = 1;
        cronObj.yearly_month2 = $scope.Month = {
            一月: "JAN", 二月: "FEB", 三月: "MAR", 四月: "APR", 五月: "MAY", 六月: "JUN",
            七月: "JUL", 八月: "AUG", 九月: "SEP", 十月: "OCT", 十一月: "NOV", 十二月: "DEC"
        };
        cronObj.yearly_number = $scope.Number = [1, 2, 3, 4];
        cronObj.yearly_week = $scope.Week = {
            星期一: "MON", 星期二: "TUES", 星期三: "Wed", 星期四: "Thur", 星期五: "Fri", 星期六: "Sat", 星期天: "Sun"
        };
        cronObj.yearly_startTime=dt2;
        $scope.$watch("cronObj.yearly_startTime", function (result) {
            timeObj = result.toLocaleTimeString("en-US");
            timeAndHours = timeObj.split(":");
            minutes = timeAndHours[1];
            hour = timeAndHours[0];
            amOrPm = timeObj.split(" ");
            if (amOrPm[1] == 'PM' && hour < 12){
                hour = Number.parseInt(hour) + 12;
                timeSplit= " " + minutes + " " + hour;
            } else if (amOrPm[1] == 'AM' && hour == 12){
                timeSplit= " " + minutes + " 00";
            } else if (amOrPm[1] == 'AM' && hour < 12) {
                hour = Number.parseInt(hour);
                timeSplit= " " + minutes + " " + hour;
            }

        });

        $scope.tabs = [
            {
                "id": 1,
                "title": "每分"
            },
            {
                "id": 2,
                "title": "每时"

            },
            {
                "id": 3,
                "title": "每天"

            },
            {
                "id": 4,
                "title": "每周"


            },
            {
                "id": 5,
                "title": "每月"


            },
            {
                "id": 6,
                "title": "每年"

            }
        ];
        var radioVariable = $scope.RadioTab;
        $scope.selectDailyRadio = function () {
            radioVariable.daily = radioVariable.currentRadio;
        };
        $scope.minutesClick = function () {
            var tabIndex = 0;
            var activeTabIndex = $scope.tabs.activeTab;
            for (tabIndex; tabIndex < $scope.tabs.length; tabIndex++) {
                //每分
                if (activeTabIndex == 0) {
                    cronObj.cronExpressionMintues = " 0 " + cronObj.mintues + " * * * * ? ";
                    console.log(cronObj.cronExpressionMintues);

                } //每时
                else if (activeTabIndex == 1) {
                    if (radioVariable.daily == 0) {
                        cronObj.cronExpressionHourlyr = " 0 " + " * " + cronObj.hourly.hour + " * * * ? ";
                        console.log(cronObj.cronExpressionHourlyr);

                    } else if (radioVariable.daily == 1) {
                        cronObj.cronExpressionHourlyr = "0" + timeSplit + " * * * ? ";
                        console.log(cronObj.cronExpressionHourlyr);
                    }

                }//每天
                else if (activeTabIndex == 2) {
                    if (radioVariable.daily == 0) {
                        cronObj.cronExpressionDay = " 0 " + " * " + " * " + cronObj.daily + " * * ? ";
                        console.log(cronObj.cronExpressionDay);
                    } else if (radioVariable.daily == 1) {
                        cronObj.cronExpressionDay = " 0 " + timeSplit + " ? " + " * " + cronObj.daily_weekDay;
                        console.log(cronObj.cronExpressionDay);
                    }


                } //每周
                else if (activeTabIndex == 3) {
                    cronObj.cronExpressionWeek = " 0 " + timeSplit+ " ? " + " * " + $scope.wee.weeks;
                    console.log(cronObj.cronExpressionWeek);

                } //每月
                else if (activeTabIndex == 4) {
                    if (radioVariable.daily == 0) {
                        cronObj.cronExpressionMonth = " 0 " + timeSplit + " " + cronObj.monthly_day + " " +cronObj.monthly_month1 + " * " + " ? ";
                        console.log(cronObj.cronExpressionMonth);
                    } else if (radioVariable.daily == 1) {
                        cronObj.cronExpressionMonth = " 0 " + timeSplit + " * " + cronObj.monthly_month2 + " " + cronObj.monthly_week +"#"+ cronObj.monthly_number;
                        // 0 15 10 ? * 6#3" 每月的第三个星期五上午10:15触发
                        console.log(cronObj.cronExpressionMonth);

                    }

                } //每年
                else if (activeTabIndex == 5) {
                    if (radioVariable.daily == 0) {
                        cronObj.cronExpressionYear = " 0 " + timeSplit + " " + cronObj.yearly_day + " "+ cronObj.yearly_month1 + " ? ";
                        console.log(cronObj.cronExpressionYear);
                    } else if (radioVariable.daily == 1) {
                        cronObj.cronExpressionYear = " 0 " + timeSplit + " ? " +cronObj.yearly_month2 + " "+  cronObj.yearly_week +"#"+ cronObj.yearly_number+ " " + " * ";
                        console.log(cronObj.cronExpressionYear);
                    }

                }
            }
        }
    }
})();