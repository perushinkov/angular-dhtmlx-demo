"use strict";
/**
 * Created by Emanuil on 25/01/2016.
 */
angular.module('DhxDirectives')
  .directive('dhxLayout', function factory() {
    return {
      restrict: 'E',
      require: 'dhxLayout',
      controller: function() {
      },
      scope: {
        dhxLayoutCode : "@"
      },
      compile: function compile(tElement, tAttrs, transclude) {
        return function (scope, element, attrs, ctrl) {
        }
      }
    };
  });
