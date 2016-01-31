'use strict';

angular.module('storeApp').controller('homeCtrl', ['$scope', '$location', '$timeout', 'storeService', 'getHomeData',
	function ($scope, $location, $timeout, storeService, getHomeData) {


	    var data = getHomeData.getData();
	    $scope.categories = data.categories;
	    $scope.products = data.products;

	    $scope.menuScroll = Object.create(null);

	    $scope.selectedMenu = function (index, cate) {
	        alert("test");
	        $(".menu-items li:eq(" + index + ")").addClass("menu-item-active").siblings().removeClass("menu-item-active");
	    };

	    $scope.selecDone = function () {
	        alert("selected done");
	    };
	}
]);