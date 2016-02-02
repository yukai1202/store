'use strict';

angular.module('storeApp').controller('confirmCtrl', ['$scope', '$state', '$timeout', 'storeService', 'CacheData', '$location',
	function ($scope, $state, $timeout, storeService, CacheData, $location) {
          
	    $scope.createAdd = function () {
	        $location.path('/selectadd');
	    };
	   
	}
]);