angular.module('myCoolApp', [])
  .controller('myCtrl', function(myService, $scope) {

    $scope.waitingSentence = "Are there unicorns here?";

    myService.someFunc().then(function(response) {

      $scope.waitingSentence = response;

    });


  })

  .service('myService', function($q, $timeout) {

      this.someFunc = function() {
        var deferred = $q.defer();

        $timeout(function() {

          return deferred.resolve('Yes, Sparkly Unicorn');

        }, 2000);

        return deferred.promise;

      };


  });
