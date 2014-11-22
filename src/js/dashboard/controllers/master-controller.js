/**
 * Master Controller
 */
angular.module('Dashboard')
  .controller('MasterController', ['$scope', '$cookieStore','HumidityResource', MasterController]);

function MasterController($scope, $cookieStore, HumidityResource) {
  /**
   * Sidebar Toggle & Cookie Control
   *
   */
  var mobileView = 992;
  $scope.getWidth = function() { return window.innerWidth; };

  $scope.$watch($scope.getWidth, function(newValue, oldValue) {
    if (newValue >= mobileView) {
      if (angular.isDefined($cookieStore.get('toggle'))) {
        if ($cookieStore.get('toggle') == false) {
          $scope.toggle = false;
        } else {
          $scope.toggle = true;
        }
      } else {
        $scope.toggle = true;
      }
    } else {
      $scope.toggle = false;
    }
  });

  $scope.toggleSidebar = function() {
    $scope.toggle = ! $scope.toggle;
    $cookieStore.put('toggle', $scope.toggle);
  };
  window.onresize = function() { 
    $scope.$apply(); 
  };

  var humidity = HumidityResource.get();

  $scope.humidity = humidity;

  $scope.type = typeof(humidity);

  $scope.headers = function() {
    var headers = [];
    var humid_obj = HumidityResource.get();
    // for (var header in humid_obj) {
    //   headers.push(header);
    // };
    // return headers;
    return typeof(humid_obj);
  };

  $scope.fish = ["one", "two", "three"];
}
