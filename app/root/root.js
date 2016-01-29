"use strict";
/**
 * Created by Emanuil on 22/01/2016.
 */
angular.module('myApp')
.controller('RootController', ['$scope' ,function ($scope) {
  $scope.msg = "Testing...";

    $scope.cmpTreeData = {
      id: 0,
      item: [
        {
          id: 'varModel',
          text: "VaR Modell"
        },
        {
          id: 'cfaAnalysis',
          text: "Cashflow Analysis",
          item: [
            {
              id: 'incrementalVar',
              text: 'Incremental VaR'
            },
            {
              id: 'marginalVar',
              text: 'Marginal VaR'
            },
            {
              id: 'spreadRisk',
              text: 'Spread Risk'
            }
          ]
        }
      ]
    };
}]);
