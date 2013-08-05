'use strict';

angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [
      {name: 'one', completed: false},
      {name: 'two', completed: true}
      ];
    $scope.unfinished = $scope.items.filter(function(val){
      return !val.completed});

    $scope.finished = $scope.items.filter(function(val){
      return val.completed;
    });

    $scope.completedChanged = function(item){

    };
  });
