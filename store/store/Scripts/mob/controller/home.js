'use strict';

angular.module('storeApp').controller('homeCtrl', ['$scope', '$location', '$timeout', 'storeService', 'getHomeData', 'CacheData',
	function ($scope, $location, $timeout, storeService, getHomeData, CacheData) {

	    var cart = new ShoppingCart();
	    var data = getHomeData.getData();
	    $scope.categories = data.categories;
	    $scope.products = data.products;

	    $scope.menuScroll = Object.create(null);

	    $scope.selectedIndex = 0;
	    $scope.selectedMenu = function (index, cate) {
	        //$(".menu-items li:eq(" + index + ")").addClass("menu-item-active").siblings().removeClass("menu-item-active");
	        $scope.selectedIndex = index;
	    };

	    $scope.selecDone = function () {
	        //alert("selected done");
	        localStorage.setItem("order_list", JSON.stringify(cart));
	        CacheData.setProducts(cart);
	        $location.path("/order");
	    };

	    $scope.addProduct = function (prod, $event) {
	 
	        if ($("#animate-dot").is(':animated')) {
	            return;
	        }
	        var offset = $($event.target).offset();
	        var px = offset.left, py = offset.top;

	        var targetOffset = $("#Capa_1").offset();
	        var tpx = targetOffset.left, tpy = targetOffset.top;

	        if ($("#animate-dot").length > 0) {

	        } else {
	            var img = $('<img />',
                 {
                     id: 'animate-dot',
                     src: 'Content/img/rkoer93r3r_xsmall.png'
                 }).appendTo($('body'));

	        }
	        $('#animate-dot').css({
	            'left': px + "px",
	            'top': py + 25 + "px"
	        }).show();


	        $('#animate-dot').animate({
	            'left': tpx + "px",
	            'top': tpy + "px"
	        }, 300, function () {
	            $('#animate-dot').hide();

	            cart.addProduct(new Product(Math.floor(Math.random() * 10), "test title", 12.9));
	        });

	    };
 
	    $scope.init = function () {
	        if (localStorage.getItem("order_list")) {
	            var list = localStorage.getItem("order_list");
	            var obj = JSON.parse(list);
	            cart.products = obj.Product;
	            cart.totalQuantity = obj.totalQuantity;
	            cart.totalCost = obj.totalCost;
	        }

	    };
	}
]);