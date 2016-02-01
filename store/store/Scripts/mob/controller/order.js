'use strict';

angular.module('storeApp').controller('orderCtrl', ['$scope', '$state', '$timeout', 'storeService', 'CacheData',
	function ($scope, $state, $timeout, storeService, CacheData) {

	    $scope.confirmOrder = function () {


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