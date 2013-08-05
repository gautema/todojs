'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [
      {name: 'one', completed: false},
      {name: 'two', completed: true}
    ];

    $scope.remainingCount = $scope.items.filter(function(element){ return !element.completed}).length;
    $scope.completedCount = $scope.items.length - $scope.remainingCount;

    $scope.completedChanged = function(item){
      $scope.remainingCount += item.completed ? -1:1;
      $scope.completedCount -= item.completed ? -1:1;
    };
  });
