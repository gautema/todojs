'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [
      {name: 'one', completed: false},
      {name: 'two', completed: true}
    ];

    $scope.remainingCount = $scope.items.filter(function(element){ return !element.completed;}).length;
    $scope.completedCount = $scope.items.length - $scope.remainingCount;

    $scope.deleteItem = function(item){
      var index = $scope.items.indexOf(item);
      $scope.items.splice(index, 1);
      if(item.completed){
        $scope.completedCount--;
      }else{
        $scope.remainingCount--;
      }

    };
    $scope.completedChanged = function(item){
      $scope.remainingCount += item.completed ? -1:1;
      $scope.completedCount -= item.completed ? -1:1;
    };

    $scope.addItem = function(){
      $scope.items.push({name: $scope.newItem, completed: false});
      $scope.remainingCount++;
      $scope.newItem = '';
    };


  });
