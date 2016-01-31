'use strict';

angular.module('storeApp').factory('storeService', ['$timeout', '$q', '$resource',
	function ($timeout, $q, $resource) {
	    var baseUrl = "/mobile/";
	    return {
	        getHomeData: function () {
	            var url = baseUrl + "gethomedata";
	            var delay = $q.defer();
	            $resource(url, {}).get({}, function (res) {
	                delay.resolve(res);
	            }, function (res) {
	                delay.reject(res);
	            });
	            return delay.promise;
	        }
	    };

	}
]);