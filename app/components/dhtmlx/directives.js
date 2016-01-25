"use strict";
/**
 * Created by Emanuil on 25/01/2016.
 */
angular.module('myApp')
  .directive('dhxCombo', function factory() {
    return {
      restrict: 'EA',
      require: 'dhxCombo',
      controller: function() {
      },
      scope: {
      },
      compile: function compile(tElement, tAttrs, transclude) {

        return function (scope, element, attrs) {
        }
      }
    };
  });
