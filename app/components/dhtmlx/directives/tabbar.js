"use strict";
/**
 * Created by Emanuil on 18/02/2016.
 */
angular.module('dhxDirectives')
  .directive('dhxTabbar', function factory(DhxUtils) {
    var nextTabbarId = DhxUtils.createCounter();
    return {
      restrict: 'E',
      require: 'dhxTabbar',
      controller: function ($scope) {
        var _tabbarId = nextTabbarId();
        $scope.panes = [];
        var _nextTabbarPaneId = DhxUtils.createCounter();
        this.getTabbarPaneId = function () {
          return 'tabbar_' + _tabbarId + '_' + _nextTabbarPaneId();
        };
        this.registerPane = function (tab) {
          $scope.panes.push(tab);
        };
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

        DhxUtils.dhxUnloadOnScopeDestroy(scope, tabbar);
      }
    };
  })
  .directive('dhxTabbarPane', function factory() {
    return {
      restrict: 'E',
      require: '^dhxTabbar',
      scope: {
        dhxText: '@',
        dhxSelected: '='
      },
      link: function (scope, element, attrs, tabbarCtrl) {
        tabbarCtrl.registerPane({
          elem: element.detach(),
          text: scope.dhxText || "",
          id: tabbarCtrl.getTabbarPaneId(),
          selected: !!scope.dhxSelected
          //NOTE: Feel free to add aditional configuration here
        });
      }
    };
  });
