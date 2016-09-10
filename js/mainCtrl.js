angular.module('quoteBook')
  .controller('mainController', function($scope, dataService) {
      $scope.test = "this app is working"
      $scope.quotes = dataService.getData();
      $scope.deleteMe = dataService.removeQuote;
      $scope.addQuote = dataService.addQuote;
  });
