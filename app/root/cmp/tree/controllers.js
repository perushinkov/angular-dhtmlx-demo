"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp')
  .controller('TreeController', ['$scope', function ($scope) {
    $scope.treeData = {
      "id": 0,
      "item": [
        {
          "id": "dataCmps",
          "text": "Data",
          "item": [
            {
              "id": "Grid",
              "text": "Grid"
            },
            {
              "id": "Tree",
              "text": "Tree"
            }
          ]
        },
        {
          "id": "Windows",
          "text": "Windows"
        },
        {
          "id": "Layout",
          "text": "Layout"
        }
      ]
    };

    $scope.treeDataLoaded = function (tree) {
      console.log('Data has been loaded!');
    };

    $scope.treeHandlers = [
      {
        type: "onClick",
        handler: function (id) {
          console.log('You have clicked \'' + id + '\'');
        }
      }
    ];
  }]);
