angular
.module("app")
.controller("ReportCreateController",
["$scope", "$state", "Report", "AppService",
function ReportCreateController($scope, $state, Report, AppService) {
  
  $scope.reportPlayer = function() {

    Report.create({
      cheaterIGN: $scope.cheaterIGN,
      reporterIGN: $scope.reporterIGN,
      evidenceLink: $scope.evidenceLink
    })
    .$promise
    .then(function(report) {
      $scope.report = report;
    })
    .catch(function(err) {
      console.log(err);
    });
  }
}]);