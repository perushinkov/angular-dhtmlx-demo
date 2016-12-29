"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp')
  .controller('GridController', ['$scope' ,function ($scope) {
    $scope.grid = {
      obj: {},
      handlers: [
        {type: "onRowSelect", handler: function (id) {
          $scope.grid.obj.deleteRow(id);
        }}
      ]
    };

    $scope.alert = function alert(event_name) {
      switch (event_name) {
        case "refreshsize":
          $scope.grid.obj.setSizes();
      }
    };

    $scope.contextMenu = {};
    $scope.gridData = {
      rows:[
        { id:1, data: ["Click a row", "John Grasham", "100"]},
        { id:2, data: ["to have it", "Stephen Pink", "2000"]},
        { id:3, data: ["deleted", "Terry Brattchet", "3000"]},
        { id:4, data: ["La la la", "Isaac Zimov", "4000"]},
        { id:5, data: ["La la la", "Sax Pear", "5000"]}
      ]
    };
  }]);
