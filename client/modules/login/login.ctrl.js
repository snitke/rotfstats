angular
.module("app")
.controller("LoginController",
["$scope", "$state", "TestTable", "AppService",
function LoginController($scope, $state, TestTable, AppService) {

  $scope.register = function(username, email, password) {

    AppService.register(username, email, password)
    .then(user => {
      console.log("User registered!", user);
      $state.go("home");
    })
    .catch(err => {
      console.warn("Registration failed!", err);
    });
  };

  $scope.login = function(username, password) {

    AppService.login(username, password)
    .then(accessToken => {
      console.log("User logged in!", accessToken);
      $state.go("home");
    })
    .catch(err => {
      console.warn("User login failed!");
    });
  };

  $scope.logout = function() {

    AppService.logout()
    .then(() => {
      console.log("User logged out!");
      $state.go("home");
    })
    .catch(err => {
      console.warn("User log out failed!");
    });
  };
}]);