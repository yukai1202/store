
'use strict';
(function () {

    var storeApp = angular.module('storeApp', [
        'ui.router',
        'ngResource'
    ]);

    storeApp.run(['$rootScope', '$templateCache', '$http', function ($rootScope, $templateCache, $http) {
        $templateCache.put("home.html", ' <div class="store-content"> <div class="store-menu store-tc" id="wrapper-menu" scroll-carousel scroll-menu="menuScroll"> <div class="menu-items-wrapper menu-items-bord"> <ul class="menu-items"> <li ng-repeat="cate in categories" ng-click="selectedMenu($index, cate)" ng-class="{\'menu-item-active\': selectedIndex === $index}"> {{cate.categoryName}} </li> </ul> </div> </div> <div class="store-products store-tc" id="wrapper-prod"> <div class="menu-items-wrapper"> <div class="store-products-wrapper"> <div class="store-product-wrapper" ng-repeat="prod in products"> <img width="70" height="70" style="opacity: 1; transition: opacity 0.5s;float:left;" /> <div class="store-product-content"> <p class="product-name" ng-bind="prod.productName"></p> <div class="product-footer"> <span class="product-price" ng-bind="prod.price">¥21.00</span> <button class="product-btn-add" ng-click="addProduct(prod, $event)"></button> </div> </div> </div> </div> </div> </div></div><footer> <div class="cart-wrapper"> <svg width="24" height="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19.25 19.25" style="enable-background:new 0 0 19.25 19.25;" xml:space="preserve"> <g> <g id="Layer_1_107_"> <g> <path style="fill:#fff;" d="M19.006,2.97c-0.191-0.219-0.466-0.345-0.756-0.345H4.431L4.236,1.461 C4.156,0.979,3.739,0.625,3.25,0.625H1c-0.553,0-1,0.447-1,1s0.447,1,1,1h1.403l1.86,11.164c0.008,0.045,0.031,0.082,0.045,0.124 c0.016,0.053,0.029,0.103,0.054,0.151c0.032,0.066,0.075,0.122,0.12,0.179c0.031,0.039,0.059,0.078,0.095,0.112 c0.058,0.054,0.125,0.092,0.193,0.13c0.038,0.021,0.071,0.049,0.112,0.065c0.116,0.047,0.238,0.075,0.367,0.075 c0.001,0,11.001,0,11.001,0c0.553,0,1-0.447,1-1s-0.447-1-1-1H6.097l-0.166-1H17.25c0.498,0,0.92-0.366,0.99-0.858l1-7 C19.281,3.479,19.195,3.188,19.006,2.97z M17.097,4.625l-0.285,2H13.25v-2H17.097z M12.25,4.625v2h-3v-2H12.25z M12.25,7.625v2 h-3v-2H12.25z M8.25,4.625v2h-3c-0.053,0-0.101,0.015-0.148,0.03l-0.338-2.03H8.25z M5.264,7.625H8.25v2H5.597L5.264,7.625z M13.25,9.625v-2h3.418l-0.285,2H13.25z" /> <circle style="fill:#fff;" cx="6.75" cy="17.125" r="1.5" /> <circle style="fill:#fff;" cx="15.75" cy="17.125" r="1.5" /> </g> </g> </g> </svg> </div> <span class="prod-quantity">0</span> <span class="prod-cost">0.0</span> <button class="button-select pure-button" ng-click="selecDone()">选好了</button></footer>');
        //$templateCache.put("order.html",'<div>test order</div>');
         

    }]);

    storeApp.config(['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {
          $urlRouterProvider.otherwise('/');

          $stateProvider.
            state('home', {
                url: '/',
                views: {
                    'navbar': {
                        templateUrl: '/Scripts/mob/views/nav.html',
                        controller: 'navCtrl'
                    },
                    'content': {
                        templateUrl: 'home.html',
                        controller: 'homeCtrl'
                    }
                },
                resolve: {
                    getHomeData: function ($q, $timeout, storeService) {
                        var delay = $q.defer();

                        storeService.getHomeData().then(function (response) {
                            delay.resolve({
                                getData: function () {
                                    return response;
                                }
                            });
                        });
                        return delay.promise;
                    }

                }
            }).
            state('order', {
                url: '/order',
                views: {
                    'navbar': {
                        templateUrl: '/Scripts/mob/views/nav.html',
                        controller: 'navCtrl'
                    },
                    'content': {
                        templateUrl: '/Scripts/mob/views/order.html',
                        controller: 'orderCtrl'
                    }
                }
            }).
            state('confirm', {
                url: '/confirm',
                views: {
                    'navbar': {
                        templateUrl: '/Scripts/mob/views/nav.html',
                        controller: 'navCtrl'
                    },
                    'content': {
                        templateUrl: '/Scripts/mob/views/confirm.html',
                        controller: 'confirmCtrl'
                    }
                }
            }).
            state('selectadd', {
                url: '/selectadd',
                views: {
                    'navbar': {
                        templateUrl: '/Scripts/mob/views/nav.html',
                        controller: 'navCtrl'
                    },
                    'content': {
                        templateUrl: '/Scripts/mob/views/selectadd.html',
                        controller: 'selectaddCtrl'
                    }
                }
            }).
            state('newadd', {
                url: '/newadd',
                views: {
                    'navbar': {
                        templateUrl: '/Scripts/mob/views/nav.html',
                        controller: 'navCtrl'
                    },
                    'content': {
                        templateUrl: '/Scripts/mob/views/newadd.html',
                        controller: 'newaddCtrl'
                    }
                }
            }).
            state('result', {
                url: '/result',
                views: {
                    'navbar': {
                        templateUrl: '/Scripts/mob/views/nav.html',
                        controller: 'navCtrl'
                    },
                    'content': {
                        templateUrl: '/Scripts/mob/views/result.html',
                        controller: 'resultCtrl'
                    }
                }
            });
          

      }]);


    /*var loaded = function () {
        var cateScroll = new IScroll('#wrapper-menu', { useTransition: false });
        //prodScroll = new IScroll('#wrapper-prod', { useTransition: false });
    }
    
    setTimeout(function () {
        loaded();
    }, 3000);*/
})();



/*
$(function () {
    var cateScroll, prodScroll;

    var loaded = function () {
        cateScroll = new IScroll('#wrapper-menu', { useTransition: false });
        prodScroll = new IScroll('#wrapper-prod', { useTransition: false });
    }
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    loaded();

    function Category() {
        this.id = -1;
        this.title = "";
    }

    function Product(_id, _title, _price) {
        this.id = _id;
        this.img = "";
        this.title = _title;
        this.price = _price;
        this.quantity = 1;
    }

    function ShoppingCart() {
        this.products = [];
        this.totalQuantity = 0;
        this.totalCost = 0.0;
    }

    var cart = new ShoppingCart();

    ShoppingCart.prototype.addProduct = function (prod) {
        var indexCart = this.isProductSelected(prod);
        if (indexCart > -1) {
            this.products[indexCart].quantity++;
        } else {
            this.products.push(prod);
        }
        this.updateTotalQuantityAndCost();
    };

    ShoppingCart.prototype.isProductSelected = function (prod) {
        var index = -1;
        $.each(this.products, function (_index, obj) {
            if (obj.id === prod.id) {
                index = _index;
                return false;
            }
        });
        return index;
    };

    ShoppingCart.prototype.updateTotalQuantityAndCost = function () {
        var totalCost = 0.00, totalQuantity = 0;
        $.each(this.products, function (index, obj) {
            totalCost += obj.quantity * obj.price;
            totalQuantity += obj.quantity;
        });

        $(".prod-quantity").text(totalQuantity);
        $(".prod-cost").text(totalCost.toFixed(2));
    };

    ShoppingCart.prototype.updateTotalCost = function () {

    };

    ShoppingCart.prototype.minusProduct = function () {

    };

    ShoppingCart.prototype.removeProduct = function (prod) {
        $.each(this.products, function (index, obj) {
            if (obj.id === prod.id) {
                this.products.splice(index, 1);
                return false;
            }
        });
    };

    

    $(".menu-items").on("click touchend", "li", function (e) {
        $(this).addClass("menu-item-active").siblings().removeClass("menu-item-active");
    });

    $(".product-footer").on("click touchend", ".product-btn-add", function (e) {

        if ($("#animate-dot").is(':animated')) {
            return;
        }
        var offset = $(this).offset();
        var px = offset.left, py = offset.top;

        var targetOffset = $(".prod-quantity").offset();
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

            cart.addProduct(new Product(Math.floor(Math.random()*10), "test title", 12.9));
        });
     
    });
});
*/