"use strict";
/**
 * Created by Emanuil on 25/01/2016.
 *
 * Below is a list of configurations for dhxLayoutCode.
 * http://dhtmlx.com/docs/products/dhtmlxLayout/samples/02_conf/01_patterns.html
 *
 * The layout initialization API used below can be seen here:
 * http://docs.dhtmlx.com/layout__init.html
 */
//angular.element($0).scope() in console!
angular.module('dhxDirectives')
  .directive('dhxLayout', function factory() {
    var letters = "abcdefg";

    var getNextId = (function () {
      var letters = "abcdefg";
      var current = -1;
      return function () {
        current++;
        return letters[current];
      };
    })();

    return {
      restrict: 'E',
      require: 'dhxLayout',
      controller: function ($scope) {
        $scope.panes = [];
        this.registerPane = function (pane) {
          $scope.panes.push(pane);
        };
      },
      scope: {
        dhxLayoutCode: "@",
        dhxWidth: "=", // Mandatory.
        dhxHeight: "=", // Mandatory.
        dhxUseEms: "=" // Optional... If width and height is in ems. Px is default;
      },
      link: function (scope, element, attrs) {
        console.log('Link ' + attrs.dhxLayoutCode);
        console.log(element);
        console.log(scope);

        var dim = (scope.dhxUseEms ? 'em' : 'px');
        element.css('width', scope.dhxWidth + dim);
        element.css('height', scope.dhxHeight + dim);

        element.css('display', 'block'); // Mandatory

        //noinspection JSPotentiallyInvalidConstructorUsage
        var layout = new dhtmlXLayoutObject({
            parent: element[0],
            pattern: scope.dhxLayoutCode,
            //offsets: { //TODO: Add them as optionals
            //  top: 10,
            //  right: 10,
            //  bottom: 10,
            //  left: 10
            //},
            cells: scope
              .panes
              .map(function (paneObj) {
                paneObj.cellConfig.id = getNextId();
                console.log(paneObj.cellConfig);
                return paneObj.cellConfig;
              })
          }
        );

        for (var i = 0; i < scope.panes.length; i++) {
          layout.cells(letters[i]).appendObject(scope.panes[i].jqElem[0]);
        }
      }
    };
  })
  .directive('dhxLayoutPane', function factory() {
    return {
      restrict: 'E',
      require: '^dhxLayout',
      scope: {
        dhxText: '@',
        dhxCollapsedText: '@', // If this is omitted it becomes dhxText
        dhxHeader: '=', // Expression... since it is a boolean value
        dhxWidth: '@',  // These are optional... However when specified they
        dhxHeight: '@', // should not conflict with the layout width and height
        dhxCollapse: '=', // Expression... since it is a boolean value
        dhxFixSize: '@'
      },
      link: function (scope, element, attrs, layoutCtrl) {
        layoutCtrl.registerPane({
          jqElem: element.detach(),
          cellConfig: {
            text: scope.dhxText || "",
            collapsed_text: scope.dhxCollapsedText || scope.dhxText || "",
            header: scope.dhxHeader,
            width: scope.dhxWidth,
            height: scope.dhxHeight,
            collapse: scope.dhxCollapse == undefined ? false : scope.dhxCollapse,
            fix_size: scope.dhxFixSize
          }
        });
      }
    };
  });
