// (function () {
//     'use strict';
//     angular.module("baoApp.shopping",[])
//         .controller("CartController",["$scope",function ($scope) {
//         $scope.items=[
//             {title:'Paint pots',quantity:5,price:3.95},
//             {title:'Paint pots',quantity:17,price:12.36},
//             {title:'Pebbles',quantity:8,price:6}
//         ];
//             $scope.remove=function (index) {
//                 $scope.items.splice(index,1);
//             }
//     }]);
// })();

//命名函数的标准写法
// (function () {
//     'use strict';
//     angular.module("baoApp.shopping",[])
//         .controller("CartController", ["$scope", cart]);//cart是一个回调函数名称
//
//     function cart(hello) {//hello其实指的是$scope,作用减少字符
//         var menuState = {};
//         hello.menuState = menuState;
//         hello.menuState.show=false;
//         hello.toggleMenu=function () {
//             hello.menuState.show=!hello.menuState.show;
//         };
//     }
// })();


// (function () {
//     "use strict";
//     angular.module("baoApp.shopping",[])
//         .controller("CartController",["$scope",counts]);
//     function counts(a){
//         a.setCount=function () {
//             a.count=3;
//         }
//     }
// })();


// (function () {
//     "use strict";
//     angular.module("baoApp.shopping",[])
//         .controller("CartController",["$scope",shoppingCart]);
//
//     function shoppingCart($scope) {
//         $scope.bill={};
//         $scope.items= [
//                 {title:'Paint pots',quantity:5,price:3.95},
//                 {title:'Paint pots',quantity:17,price:12.36},
//                 {title:'Pebbles',quantity:8,price:6}
//             ];
//         $scope.totalCarts=function () {
//             var total=0;
//             for(var i=0,len=$scope.items.length;i<len;i++){
//
//                 total=total+$scope.items[i].price*$scope.items[i].quantity;
//             }
//             return total;
//         };
//         $scope.subtotal=function () {
//             console.log($scope.totalCarts(), $scope.bill.discount);
//             return $scope.totalCarts()-$scope.bill.discount;
//         };
//         function calculateDiscount(newValue,oldValue,scope){
//             $scope.bill.discount=newValue>100 ? 10 :0;
//         };
//         $scope.$watch($scope.totalCarts,calculateDiscount);
//     }
// })();

// (function () {
//     "use strict";
//     angular.module("baoApp.shopping", [])
//         .controller("helloCtrl", ["$scope", helloCtrl]);
//     function helloCtrl($scope) {
//     }
// })();


// (function () {
//     "use strict";
//     angular.module("baoApp.shopping", [])
//         .controller("TextAreaCtrl",["$scope", TextAreaCtrl]);
//     function TextAreaCtrl($scope) {
//         $scope.remaining=function () {
//             var Max_LEN=100;
//             return Max_LEN-$scope.message;
//         };
//         $scope.shouldWarn=function () {
//             return $scope.remaining()<WARN_THRESHOLD;
//         };
//     };
// })();
(function () {
    "use strict";
    angular.module("baoApp.shopping",[])
        .controller("CartController",["$scope",CartController]);
    function CartController($scope) {
        var items=[
            {id:"1",name:"蜂蜜",price:60.00},
            {id:"2",name:"椰奶",price:18.00},
            {id:"3",name:"豆瓣酱",price:30.00},
            {id:"4",name:"娃哈哈",price:10.00},
            {id:"5",name:"泡面",price:3.50},
            {id:"6",name:"数码相机",price:3000.00}
        ];
        var boughtList = {};
        // var common={
        //     getTotal:function (total) {
        //         total=0;
        //         for(var k in bootList){
        //             if (bootList[k].num<=0){
        //                 bootList[k].num=0;
        //             }
        //             total+= bootList[k].num* bootList[k].price;
        //
        //         }
        //         return total;
        //     }
        //
        // }
        //
        // $scope.items=items;
        // $scope.bootList=bootList;
        // $scope.total=0;
        // for(var k in bootList){
        //     if (bootList[k]){
        //         $scope.total+= bootList[k].num* bootList[k].price;
        //     }
        // }
        // $scope.butAction=function ($event) {
        //     var el=$event.target;
        //     var id=el.getAttribute('item-id');
        //     if(bootList[id]){
        //         bootList[id].num+=1;
        //     }else {
        //         var arr=[];
        //         arr.name=el.getAttribute('name');
        //         arr.price=el.getAttribute('price');
        //         arr.num=1;
        //         arr.id=id;
        //         bootList[id]=arr;
        //     }
        //     $scope.total=common,getTotal($scope.total);
        // };
        // $scope.delect = function($event){
        //     var li = $event.target.parentNode;
        //     li.parentNode.removeChild(li);
        //     var id = $event.target.getAttribute('item-id');
        //     if(boughtList[id]){
        //         delete boughtList[id];
        //     }
        //     $scope.total = common.getTotal($scope.total);
        // }
        // $scope.changeNum = function($event,num){
        //     var id;
        //     if(typeof $event == 'string'){
        //         id = $event;
        //     }else{
        //         id = $event.target.parentNode.getAttribute('item-id');
        //     }
        //
        //     boughtList[id].number = num;
        //     $scope.total = common.getTotal($scope.total);
        // }
        var common = {
            getTotal : function(total){
                total = 0;
                for(var k in boughtList){
                    if(boughtList[k]){
                        if(boughtList[k].num <=0){
                            boughtList[k].num = 0;
                        }
                        total += boughtList[k].num*boughtList[k].price;
                    }
                }
                return total;
            }
        }

            $scope.items = items;
            $scope.boughtList = boughtList;
            $scope.total = 0;
            for (var k in boughtList) {
                if (boughtList[k]) {
                    $scope.total += boughtList[k].num * boughtList[k].price;
                }
            }
            $scope.buyAction = function ($event) {
                var el = $event.target;
                var id = el.getAttribute('item-id');
                if (boughtList[id]) {
                    boughtList[id].num += 1;
                } else {
                    var arr = [];
                    arr.name = el.getAttribute('name');
                    arr.price = el.getAttribute('price');
                    arr.num = 1;
                    arr.id = id;
                    boughtList[id] = arr;
                }
                $scope.total = common.getTotal($scope.total);
            }

            $scope.delItem = function ($event) {
                var li = $event.target.parentNode;
                li.parentNode.removeChild(li);
                var id = $event.target.getAttribute('item-id');
                if (boughtList[id]) {
                    delete boughtList[id];
                }
                $scope.total = common.getTotal($scope.total);
            }
            $scope.changeNum = function ($event, num) {
                var id;
                if (typeof $event == 'string') {
                    id = $event;
                } else {
                    id = $event.target.parentNode.getAttribute('item-id');
                }

                boughtList[id].number = num;
                $scope.total = common.getTotal($scope.total);
            }

    };
})();