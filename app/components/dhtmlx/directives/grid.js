"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('dhxDirectives')
.directive('dhxGrid', function factory() {
  return {
    restrict: 'E',
    require: 'dhxGrid',
    controller: function() {
    },
    scope: {
    },
    compile: function compile(tElement, tAttrs, transclude) {
      return function (scope, element, attrs) {
        var grid = new dhtmlXGridObject(element[0]);
        //TODO:
      }
    }
  };
})
