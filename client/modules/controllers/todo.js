angular
.module('app')
.controller('TodoController', ['$scope', '$state', 'TestTable', function($scope,
    $state, TestTable) {
  TestTable.findById({
    id: 3
  })
  .$promise
  .then(function(result) {

    $scope.result = result;
  })
  .catch(function(err) {
    console.log(err);
  });
}]);