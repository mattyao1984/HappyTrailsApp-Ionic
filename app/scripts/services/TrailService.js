'use strict';

/**
 * @ngdoc function
 * @name HappyTrailIonic.serive:TrailService
 * @description
 * # TrailService
 */
angular.module('HappyTrailIonic')
  // use factory for services
  .factory('TrailService', function($http, $timeout, $q) {
    var x_mashape_key = 'cFRl2xkHdImshYx67yy7hfu3k5Kvp198qFejsnN1IV5vbjzfZZ';
    var searchResults = [];

    var searchTrails = function(mySearch){
      var req = {
        method: 'GET',
        url: 'https://trailapi-trailapi.p.mashape.com/?q[country_cont]=' + mySearch.country + '&q[city_cont]=' + mySearch.city,
				headers: {
					'X-Mashape-Key': x_mashape_key
				}
      };

      var promise = $http(req).success(function(data, status, headers, config) {
          return data;
      });

      return promise;
    };

    var getResults = function(){
      return searchResults;
    };

    var setResults = function(data){
      searchResults = data;
    };

    // public api
    return {
      searchTrails: searchTrails,
      getResults: getResults,
      setResults: setResults
    };
  });
