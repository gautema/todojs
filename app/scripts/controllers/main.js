'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope, localStore) {
    $scope.items = localStore.get();

    $scope.$watch('items', function(){
      $scope.remainingCount = $scope.items.filter(function(element){ return !element.completed;}).length;
      $scope.completedCount = $scope.items.length - $scope.remainingCount;
      localStore.put($scope.items);
    }, true);

    $scope.deleteItem = function(item){
      var index = $scope.items.indexOf(item);
      $scope.items.splice(index, 1);
    };

    $scope.addItem = function(){
      $scope.items.push({name: $scope.newItem, completed: false});
      $scope.newItem = '';
    };
  });
