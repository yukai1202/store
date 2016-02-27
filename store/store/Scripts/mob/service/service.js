'use strict';

angular.module('storeApp').factory('storeService', ['$timeout', '$q', '$resource',
	function ($timeout, $q, $resource) {
	    var baseUrl = "/mobile/";
	    return {
	        getHomeData: function (pageIndex, pageSize, categoryId) {
	            //int pageIndex, int pageSize, int? categoryId
	            var url = baseUrl + "gethomedata/:categoryId/:pageIndex/:pageSize";
	            var delay = $q.defer();
	            $resource(url, {
	                pageIndex: '@pageIndex',
	                pageSize: '@pageSize',
	                categoryId: '@categoryId'
	            }).get({
	                pageIndex: 1,
	                pageSize: 15,
	                categoryId: 0
	            }, function (res) {
	                delay.resolve(res);
	            }, function (res) {
	                delay.reject(res);
	            });
	            return delay.promise;
	        }
	    };

	}
])
.factory("CacheData", ["$q", function ($q) {
    var data = {
        products: {}
    };

    return {
        getProducts: function () {
            return data.products;
        },
        setProducts: function (products) {
            data.products = products;
        }
    };

}]);
;