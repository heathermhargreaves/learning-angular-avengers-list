angular.module("avengersApp")
  .controller('MainCtrl', function($scope, dataService) {

     $scope.getHeroes = function() { //javascript hoisting
      $scope.avengers = dataService.avengers();
    };



    console.log(dataService); //will populate 15 objects in console

  }); //end main controller
