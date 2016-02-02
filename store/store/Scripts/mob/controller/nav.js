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
                back: ""
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