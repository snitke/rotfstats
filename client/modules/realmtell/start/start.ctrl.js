angular
.module("app")
.controller("RealmTellMainController",
["$scope", "$state", "TestTable",
function RealmTellMainController($scope, $state, TestTable) {

  $scope.paste = function() {
    var copyTextareaBtn = document.querySelector('.btn-primary');
    var copyTextarea = document.querySelector('.js-copytextarea');
    copyTextarea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  };
}]);