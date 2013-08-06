/*global todoApp*/
'use strict';

todoApp.factory('localStore', function() {
  return {
    get: function(){
      return JSON.parse(localStorage.getItem('todos'))||[];
    },
    put: function(todos){
      debugger;
      return localStorage.setItem('todos', JSON.stringify(todos));
    }
  };
});