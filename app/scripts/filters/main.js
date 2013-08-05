'use strict';

angular.module('mainFilters', []).filter('completed', function() {
  return function(input) {
    return !!input.completed;
  };
});