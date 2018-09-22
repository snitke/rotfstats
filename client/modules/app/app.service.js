(function () {
  "use strict";
  
  function AppService(User, $q) {

    return {
      test: test
    };

    function test() {

    }
  }
  AppService.$inject = ["User", "$q"];
    
  angular.module("app").service("AppService", AppService);
})();