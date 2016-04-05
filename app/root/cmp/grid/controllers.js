"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp')
  .controller('GridController', ['$scope' ,function ($scope) {
    $scope.contextMenu = {};
    $scope.gridData = {
      rows:[
        { id:1, data: ["No time to think", "John Grasham", "100"]},
        { id:2, data: ["Of fancy title ", "Stephen Pink", "2000"]},
        { id:3, data: ["And that is why", "Terry Brattchet", "3000"]},
        { id:4, data: ["Have this recital", "Isaac Zimov", "4000"]},
        { id:5, data: ["The End!", "Sax Pear", "5000"]}
      ]
    };
  }]);
