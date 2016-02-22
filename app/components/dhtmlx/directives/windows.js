"use strict";
/**
 * Created by Emanuil on 18/02/2016.
 */
angular.module('dhxDirectives')
  .directive('dhxWindows', function factory(DhxUtils) {
    var nextTabbarId = DhxUtils.createCounter();
    return {
      restrict: 'E',
      require: 'dhxWindows',
      controller: function ($scope) {
        var _windowInfos = [];
        this.registerWindow = function (windowInfo) {
          _windowInfos.push(windowInfo);
        };

        this.getWindowInfos = function () {
          return _windowInfos;
        }
      },
      scope: {
        dhxObj: "=",
        dhxWidth: "=", // Optional... Default is 100%. If set, use ems or pixels.
        dhxHeight: "=", // Mandatory.
        dhxUseEms: "=", // Optional... If width and height is in ems. Px is default;
        dhxDisableScroll: "="
      },
      link: function (scope, element) {
        var dim = (scope.dhxUseEms ? 'em' : 'px');
        var height = scope.dhxHeight ? (scope.dhxHeight + dim) : '100%';
        var width = scope.dhxWidth ? (scope.dhxWidth + dim) : '100%';

        element.css('width', width);
        element.css('height', height);
        element.css('display', 'block');

        //noinspection JSPotentiallyInvalidConstructorUsage
        var tabbar = new dhtmlXTabBar(element[0]);
        scope.dhxObj ? scope.dhxObj = tabbar : '';
        scope.panes.forEach(function (tabInfo) {
          tabbar.addTab(
            tabInfo.id,
            tabInfo.text
          );
          tabbar.tabs(tabInfo.id).attachObject(tabInfo.elem[0]);
          tabbar.tabs(tabInfo.id).showInnerScroll();
          tabInfo.selected ? tabbar.tabs(tabInfo.id).setActive() : '';
        });

      }
    };
  })
  .directive('dhxWindow', function factory() {
    return {
      restrict: 'E',
      require: '^dhxWindows',
      scope: {
        dhxCenter: '=',
        dhxHeight: '=',
        dhxKeepInViewport: '=',
        dhxLeft: '=',
        dhxMove: '=',
        dhxPark: '=',
        dhxResize: '=',
        dhxText: '@',
        dhxTop: '=',
        dhxWidth: '='
      },
      link: function (scope, element, attrs, windowsCtrl) {
        windowsCtrl.registerWindow({
          elem: element.detach(),
          config : {
            center: scope.dhxCenter,
            height: scope.dhxHeight,
            keep_in_viewport: scope.dhxKeepInViewport,
            left : scope.dhxLeft,
            move: scope.dhxMove,
            park: scope.dhxPark,
            resize: scope.dhxResize,
            text : scope.dhxText,
            top : scope.dhxTop,
            width : scope.dhxWidth
            //NOTE: Feel free to add aditional configuration here
          }
        });
      }
    };
  });
