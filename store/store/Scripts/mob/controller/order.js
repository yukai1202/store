'use strict';

angular.module('storeApp').controller('orderCtrl', ['$scope', '$state', '$timeout', 'storeService', 'CacheData', '$location',
	function ($scope, $state, $timeout, storeService, CacheData, $location) {

	    $scope.confirmProduct = function () {

	        $location.path("/confirm");
	    };

	    $scope.popupTimepicker = function () {

	    };

	    $scope.init = function () {

	        var list = CacheData.getProducts();
	        if (jQuery.isEmptyObject(list))
	            list = JSON.parse(localStorage.getItem("order_list"));
	        $scope.products = list.products;
           
	    };

	    $scope.init();
	}
]);