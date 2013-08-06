'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var MainCtrl,
    scope;

  beforeEach(module(function($provide) {
    $provide.factory('localStore',function(){
      return {
        get: function (){
          return [{name: 'one'},{name: 'two'}];
        }
      };
    });
  }));
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of items to the scope from localStorage', function () {
    expect(scope.items.length).toBe(2);
  });
});
