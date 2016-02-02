'use strict';

angular.module('storeApp').controller('navCtrl', ['$scope', '$location', '$timeout','$state',
	function ($scope, $location, $timeout, $state) {
	    $scope.titles = [
            {
                href: "/home",
                name: "home",
                title: "超市",
                back: ""
            },
            {
                href: "/order",
                name: "order",
                title: "购物车",
                back: "home"
            },
            {
                href: "/confirm",
                name: "confirm",
                title: "确认订单",
                back: "order"
            },
            {
                href: "/result",
                name: "result",
                title: "预订成功",
                back: "home",
                titlecenter: true,
                backText:'返回'
            },
            {
                href: "/selectadd",
                name: "selectadd",
                title: "选择地址",
                back: "confirm"
            },
            {
                href: "/newadd",
                name: "newadd",
                title: "新建地址",
                back: "selectadd"
            },
            {
                href: "/login",
                name: "login",
                title: "登陆",
                back: "home",
                titlecenter: true,
                backText: '返回'
            },
            {
                href: "/register",
                name: "register",
                title: "注册",
                back: "login",
                titlecenter: true,
                backText: '返回'
            }
	    ];

	    $scope.goBack = function () {
	        if (name === "order") {
	            $state.go("home");
	        }
	    };

	    $scope.init = function () {
	        //$scope.currentTitle = $scope.titles[0];

	        var name = $state.current.name;

	        $.each($scope.titles, function (index, obj) {
	            if (obj.name === name) {
	                $scope.currentTitle = $scope.titles[index];
	                return true;
	            }
	        });
	         
	    };

	    $scope.init();
	    
	}
]);