'use strict';

/**
 * @ngdoc function
 * @name HappyTrailIonic.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('HappyTrailIonic')
  .controller('HomeController', function($scope, TrailService, $location, $timeout) {
    $scope.mySearch = {
      city: '',
      country: 'Australia',
      radius: 10
    };

    $scope.searchStart = false;

    $scope.searchTrails = function(){
      $scope.searchStart = true;
      TrailService.searchTrails($scope.mySearch).then(function(response){
        $scope.searchStart = false;
        TrailService.setResults(response.data);

        $timeout(function(){
          $location.path('/app/trails');
        }, 100);

      }, function(error){
        $scope.searchStart = false;
      });
    };
  });
