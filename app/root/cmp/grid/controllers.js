"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp')
  .controller('GridController', ['$scope' ,function ($scope) {
    $scope.currentState = $state.current.url.substr(1);
    console.log($state.current);
  }]);
