'use strict';

/**
 * @ngdoc function
 * @name HappyTrailIonic.controller:InformationController
 * @description
 * # InformationController
 */
angular.module('HappyTrailIonic')
  .controller('InformationController', function($scope, TrailService, $location, $stateParams) {
    $scope.trailId = $stateParams.id;
    $scope.allTrails = TrailService.getResults();
    $scope.thisTrail = _.find($scope.allTrails.places, function(trail){
      return $scope.trailId == trail.unique_id;
    })

    $scope.goBack = function(){
      $location.path('/app/trails');
    };

    $scope.getNumber = function(rating){
      console.log(new Array(parseInt(5)));
      return new Array(parseInt(rating));
    };
  })
  .filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
  }]);
