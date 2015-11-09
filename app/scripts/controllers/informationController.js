'use strict';

/**
 * @ngdoc function
 * @name HappyTrailIonic.controller:InformationController
 * @description
 * # InformationController
 */
angular.module('HappyTrailIonic')
  .controller('InformationController', function($scope, TrailService, $location, $stateParams, $timeout) {
    $scope.trailId = $stateParams.id;
    $scope.allTrails = TrailService.getResults();
    $scope.thisTrail = _.find($scope.allTrails.places, function(trail){
      return $scope.trailId == trail.unique_id;
    });

    var Initialize = function(){
      var myLatlng = new google.maps.LatLng($scope.thisTrail.lat, $scope.thisTrail.lon);
      var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
          mapOptions);

      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: $scope.thisTrail.name
        });

      $scope.map = map;
    };

    $timeout(function () {
      Initialize();
    }, 100);

    $scope.goBack = function(){
      $location.path('/app/trails');
    };
  })
  .filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
  }]);
