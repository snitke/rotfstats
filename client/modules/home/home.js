angular
.module("app")
.controller("HomeController",
["$scope", "$state",
function HomeController($scope, $state) {

  $scope.searchPlayer = function() {

    $scope.playerIGN2 = $scope.playerIGN;
  }
}]);