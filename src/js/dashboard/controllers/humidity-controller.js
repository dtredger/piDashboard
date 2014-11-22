// humidity-controller.js


angular.module('Dashboard').controller('HumidityController', ['$scope', 'HumidityResource', HumidityController]);

function HumidityController($scope, HumidityResource) {
	var humidityData = HumidityResource.query()
  $scope.type = typeof(humidityData);

  $scope.keys = function() {
  	return Object.keys(humidityData);
  }; 

  $scope.humidity = HumidityResource.query();


}