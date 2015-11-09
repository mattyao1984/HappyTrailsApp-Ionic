'use strict';

/**
 * @ngdoc function
 * @name HappyTrailIonic.controller:TrailsController
 * @description
 * # TrailsController
 */
angular.module('HappyTrailIonic')
  .controller('TrailsController', function($scope, TrailService, $location) {
    $scope.allTrails = TrailService.getResults();

    console.log($scope.allTrails);

    $scope.goHome = function(){
      $location.path('/app/home');
    };

    $scope.getThumbnail = function(trail){
      return (trail.activities[0].hasOwnProperty('thumbnail') && trail.activities[0].thumbnail != null) ? trail.activities[0].thumbnail : "/images/placeholder.jpg";
    };
  });
