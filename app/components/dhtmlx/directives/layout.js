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
angular.module('dhxDirectives')
  .directive('dhxLayout', function factory(DhxUtils) {
    var letters = "abcdefg";
    return {
      restrict: 'E',
      require: 'dhxLayout',
      controller: function ($scope) {
        $scope.panes = [];
        this.getNextId = (function () {
          var letters = "abcdefg";
          var current = -1;
          return function () {
            current++;
            return current < 7 ? letters[current] : console.error('Too many dhxLayout panes.');
          };
        })();
        this.registerPane = function (pane) {
          $scope.panes.push(pane);
        };
      },
      scope: {
        dhxLayoutCode: "@",
        dhxWidth: "=", // Optional... Default is 100%. If set, use ems or pixels.
        dhxHeight: "=", // Mandatory.
        dhxUseEms: "=", // Optional... If width and height is in ems. Px is   default;
        dhxHandlers: '=',
        dhxObj: '=',
        dhxWhenDone: '='
      },
      link: function (scope, element, attrs, layoutCtrl) {
        $(element).empty();
        $('<div></div>').appendTo(element[0]);
        var rootElem = element.children().first();

        var dim = (scope.dhxUseEms ? 'em' : 'px');
        //TODO: Come up with a way to do 100% height (Within current container)
        var height = scope.dhxHeight? (scope.dhxHeight + dim) : '100%';//console.warn('Please set dhx-layout height!');
        var width = scope.dhxWidth? (scope.dhxWidth + dim) : '100%';

        rootElem.css('width', width);
        rootElem.css('height', height);
        rootElem.css('padding', '0px');
        rootElem.css('margin', '0px');
        rootElem.css('overflow', 'hidden');
        rootElem.css('display', 'block');

        //noinspection JSPotentiallyInvalidConstructorUsage
        rootElem[0]._isParentCell = true;
        var layout = new dhtmlXLayoutObject({
            parent: rootElem[0],
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
                paneObj.cellConfig.id = layoutCtrl.getNextId();
                return paneObj.cellConfig;
              })
          }
        );
        if (scope.dhxObj)
          scope.dhxObj = layout;
        layout.setSizes();

        for (var i = 0; i < scope.panes.length; i++) {
          var dom =  scope.panes[i].jqElem[0];
          if (dom != null) {
            layout.cells(letters[i]).appendObject(dom);
          }
          
        }
        DhxUtils.attachDhxHandlers(layout, scope.dhxHandlers);
        DhxUtils.dhxUnloadOnScopeDestroy(scope, layout);
		if (scope.dhxWhenDone) {
			scope.dhxWhenDone(layout);
		}      }
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
        dhxFixSize: '='
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
