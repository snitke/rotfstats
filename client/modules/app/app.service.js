(function () {
  'use strict';
  
  function AppService(User, LoopBackAuth, $q) {

    const TWO_WEEKS = 1209600;

    return {
      login: Login,
      logout: Logout,
      register: Register
    };

    function Login(username, password) {
      let self = this;

      return User.login({
        username: username,
        password: password,
        ttl: TWO_WEEKS
      }).$promise;
    }

    function Logout() {
      let self = this;

      console.log("accessToken", LoopBackAuth.accessTokenId);
      return User.logout(LoopBackAuth.accessTokenId).$promise;
    }

    function Register(username, email, password) {
      let self = this;

      return User.create({
        username: username,
        email: email,
        password: password
      }).$promise;
    }
  }
  AppService.$inject = ["User", "LoopBackAuth", "$q"];
    
  angular.module('app').service('AppService', AppService);
})();