'use strict';

angular.module('storeApp').directive('resizeHeight', function ($timeout, $compile) {
    return {
        restrict: 'A',  
        link: function (scope, element, attr) {

            var height = $(document).height();

            // $(element).height(height+"px");
            $(element).css('min-height', height - 47 + "px");
        }


    };

});