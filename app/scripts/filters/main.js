angular.module('mainFilters', []).filter('boolean', function() {
  return function(input) {
    return !!input;
  };
});