"use strict";
//noinspection SpellCheckingInspection
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp')
  .controller('TreegridController', ['$scope' ,function ($scope) {
    $scope.gridData = {
      rows:[
        { id:'1001',
          data:[
            {"value":"row A","image":"folder.gif"},
            "A Time to Kill",
            "John Grisham",
            "12.99",
            "1",
            "05/01/1998"
          ],
          rows:[
            { id:'sub_1001',
              data:[
                "subrowA",
                "Blood and Smoke",
                "Stephen King",
                "0",
                "1",
                "01/01/2000"
              ]},
            { id:'sub_1002',
              data:[
                "subrowB",
                "Blood and Smoke",
                "Stephen King",
                "0",
                "1",
                "01/01/2000"
              ]}
          ]},
        { id:'1002',
          xmlkids:'1',
          data:[
            "row B",
            "The Green Mile",
            "Stephen King",
            "11.10",
            "1",
            "01/01/1992"]
        }
      ]
    };
  }]);
