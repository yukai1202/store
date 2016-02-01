'use strict';

angular.module('storeApp').controller('navCtrl', ['$scope', '$location', '$timeout','$state',
	function ($scope, $location, $timeout, $state) {



	    var name = $state.current.name;

	    if (name === "home") {
	        $scope.showBackBtn = true;
	    }


	    $scope.goBack = function () {
	        if (name === "order") {
	            $state.go("home");
	        }
	    };
	    
	}
]);