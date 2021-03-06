﻿'use strict';

angular.module('storeApp').directive('scrollCarousel', function ($timeout, $compile) {
    return {
        restrict: 'A',
        scope: {
            scrollMenu: "=",
            pickMenu: '&'
        },
        link: function (scope, element, attr) {
             
            document.getElementsByClassName("store-content")[0].addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

            $timeout(function () {
                scope.scrollMenu = new IScroll('#wrapper-menu', { useTransition: false, click: true });
            });
            
        }

    };

});