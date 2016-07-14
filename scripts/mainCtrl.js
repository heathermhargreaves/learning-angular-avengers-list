angular.module("avengersApp")
  .controller('MainCtrl', function($scope, dataService) {

     $scope.getHeroes = function() { //javascript hoisting
       dataService.avergers().then(function(response) {
         $scope.avengers = response;
      });
    };



    console.log(dataService); //will populate 15 objects in console

  }); //end main controller
