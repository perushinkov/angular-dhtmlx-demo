"use strict";
/**
 * Created by Emanuil on 25/01/2016.
 *
 * Below is a list of configurations for dhxLayoutCode.
 * http://dhtmlx.com/docs/products/dhtmlxLayout/samples/02_conf/01_patterns.html
 */
//angular.element($0).scope() in console!
angular.module('dhxDirectives')
  .directive('dhxLayout', function factory() {
    var letters = "abcdefg";
    return {
      restrict: 'E',
      require: 'dhxLayout',
      controller: function ($scope) {
        $scope.panes = [];
        this.registerPane = function (pane) {
          $scope.panes.push(pane);
        };

        this.getNextId = (function () {
          var letters = "abcdefg";
          var current = -1;
          return function () {
            current++;
            return letters[current];
          };
        })();
      },
      scope: {
        dhxLayoutCode: "@"
      },
      compile: function compile(tElement, tAttrs, transclude) {
        console.log('Compile ' + tAttrs.dhxLayoutCode);
        console.log(tElement);
        //tElement.append(document.createTextNode('COMP -> '+ tAttrs.dhxLayoutCode));
        return function (scope, element, attrs, ctrl) {
          console.log('Link ' + attrs.dhxLayoutCode);
          console.log(element);
          console.log(scope);

          element.css('width', '800px');
          element.css('height', '400px');

          element.css('display', 'block');

          var layout = new dhtmlXLayoutObject(
            element[0],
            //'someOddId',
            scope.dhxLayoutCode
          //  {
          //  parent: element[0],
          //  pattern: attrs.dhxLayoutCode,
          //  offsets: {
          //    top: 10,
          //    right: 10,
          //    bottom: 10,
          //    left: 10
          //  }//,
          //  //cells: scope
          //  //  .panes
          //  //  .map(function (paneObj) {
          //  //    paneObj.cellConfig.id = ctrl.getNextId();
          //  //    return paneObj.cellConfig;
          //  //  }
          //  //)
          //}
          );

          for (var i = 0; i < scope.panes.length; i++) {
            layout.cells(letters[i]).appendObject(scope.panes[i].jqElem[0]);
           }
        }
      }
    };
  })
  .directive('dhxLayoutPane', function factory() {
    return {
      restrict: 'E',
      require: ['^dhxLayout'/*, 'dhxLayoutPane'*/],
      //controller: function() {
      //},
      scope: {
        dhxText: '@',
        dhxCollapsedText: '@',
        dhxHeader: '@',
        dhxWidth: '@',
        dhxHeight: '@',
        dhxCollapse: '@',
        dhxFixSize: '@'
      },
      compile: function compile(tElement, tAttrs, transclude) {
        return function (scope, element, attrs, ctrls) {
          var layoutCtrl = ctrls[0];
          layoutCtrl.registerPane({
            jqElem: element.detach(),
            cellConfig: {
              text: scope.dhxText || "",
              collapsed_text: scope.dhxCollapsedHeaderText || scope.dhxHeaderText || "",
              header: !!scope.dhxHeader,
              width: scope.dhxWidth,
              height: scope.dhxHeight,
              collapse: !!scope.dhxCollapse,
              fix_size: scope.dhxFixSize
            }
          });
        }
      }
    };
  });
