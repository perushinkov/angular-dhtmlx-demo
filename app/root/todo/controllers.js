"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp')
  .controller('TodoController', ['$scope', '$state' ,function ($scope, $state) {
    $scope.currentState = $state.current.url.substr(1);
    console.log($state.current);
  }]);
