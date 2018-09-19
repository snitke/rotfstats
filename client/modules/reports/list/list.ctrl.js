angular
.module("app")
.controller("ReportListController",
["$scope", "$state", "$sce", "ReportsService", "AppService",
function ReportListController($scope, $state, $sce, ReportsService, AppService) {

  $scope.trustSource = function(src) {
    return $sce.trustAsResourceUrl(src);
  };
  
  ReportsService.getVerifiedReports()
  .then((reports) => {
    reports.forEach(function(report) {
      report.evidenceLink = report.evidenceLink.replace("watch?v=", "embed/")
    });
    $scope.reports = reports;
  })
  .catch((err) => {
    console.log(err);
  });
}]);