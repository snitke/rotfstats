(function () {
  'use strict';
  
  function ReportsService(Report, $q) {

    const TWO_WEEKS = 1209600;

    return {
      getVerifiedReports: GetVerifiedReports,
      getUnverifiedReports: GetUnverifiedReports
    };

    function GetVerifiedReports() {
      let self = this;

      return Report.find({
        filter: {
          where: {
            verified: true
          }
        }
      })
      .$promise;
    }

    function GetUnverifiedReports() {
      let self = this;

      return Report.find({
        filter: {
          where: {
            verified: false
          }
        }
      })
      .$promise;
    }
  }
  ReportsService.$inject = ["Report", "$q"];
    
  angular.module('app').service('ReportsService', ReportsService);
})();