angular
.module("app")
.controller("HomeController",
["$scope", "$state",
function HomeController($scope, $state) {

  $scope.searchPlayer = function() {

    $scope.player = {
      IGN: $scope.playerIGN,
      fame: 143623,
      premiumLevel: 1
    }

    // Update the scope with the results from the search
    $scope.$apply();
    // $state.go("playerdetail", { id: 14 });
  }


}]);