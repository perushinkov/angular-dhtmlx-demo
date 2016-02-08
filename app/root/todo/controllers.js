"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp')
  .controller('TodoController', ['$scope', '$state' ,function ($scope, $state) {
    $scope.currentState = $state.current.url.substr(1);
  }])
  .controller('DemoController', ['$scope', '$state', '$http', function ($scope, $state, $http) {

    var simpleStateName = $state.current.name.substr(3).toLowerCase();

    $scope.controllerFile = 'root/cmp/' + simpleStateName + '/controllers.js';
    $scope.templateFile = 'root/cmp/' + simpleStateName + '/demo.html';
    $scope.directiveFile = 'components/dhtmlx/directives/' + simpleStateName + '.js';
  }]);
