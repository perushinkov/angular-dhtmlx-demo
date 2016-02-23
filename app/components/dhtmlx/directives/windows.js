"use strict";
/**
 * Created by Emanuil on 18/02/2016.
 */
angular.module('dhxDirectives')
  .directive('dhxWindows', function factory(DhxUtils) {
    var nextWindowsId = DhxUtils.createCounter();
    return {
      restrict: 'E',
      require: 'dhxWindows',
      controller: function (/*$scope*/) {
        var _windowInfos = [];
        var _container = document.documentElement;

        var _winsId = nextWindowsId();
        var _idPerWin = DhxUtils.createCounter();

        this.getNextWindowId = function () {
          return "wins_" + _winsId + "_" + _idPerWin();
        };

        this.registerWindow = function (windowInfo) {
          _windowInfos.push(windowInfo);
        };

        this.setContainer = function (container) {
          _container = container;
        };

        this.getContainer = function () {
          return _container;
        };

        this.getWindowInfos = function () {
          return _windowInfos;
        }
      },
      scope: {
      },
      link: function (scope, element, attrs, windowsCtrl) {
        //noinspection JSPotentiallyInvalidConstructorUsage
        var windows = new dhtmlXWindows();
        windows.attachViewportTo(windowsCtrl.getContainer());

        windowsCtrl
          .getWindowInfos()
          .forEach(function (windowInfo) {
            var conf = windowInfo.config;
            DhxUtils.removeUndefinedProps(conf);
            var win = windows.createWindow(
              windowsCtrl.getNextWindowId(),
              conf.left,
              conf.top,
              conf.width,
              conf.height
            );
            conf.center !== undefined ? (conf.center ? win.center() : '') : '';
            conf.keep_in_viewport !== undefined ? win.keepInViewport(!!conf.keep_in_viewport) : '';
            conf.showInnerScroll !== undefined ?  (conf.showInnerScroll ? win.showInnerScroll() : '') : '';
            conf.move !== undefined ? win[(conf.move ? 'allow' : 'deny') + 'Move']() : '';
            conf.park !== undefined ? win[(conf.park ? 'allow' : 'deny') + 'Park']() : '';
            conf.resize !== undefined ? win[(conf.resize ? 'allow' : 'deny') + 'Resize']() : '';
            conf.text !== undefined ? win.setText(conf.text) : '';

            conf.btnClose !== undefined ? win.button('close')[conf.btnClose ? 'show' : 'hide']() : '';
            conf.btnMinmax !== undefined ? win.button('minmax')[conf.btnMinmax ? 'show' : 'hide']() : '';
            conf.btnPark !== undefined ? win.button('park')[conf.btnPark ? 'show' : 'hide']() : '';
            conf.btnStick !== undefined ? win.button('stick')[conf.btnStick ? 'show' : 'hide']() : '';
            conf.btnHelp !== undefined ? win.button('help')[conf.btnHelp ? 'show' : 'hide']() : '';

            var domElem = windowInfo.elem[0];
            win.attachObject(domElem);
          });

        //TODO: Add destructors for other components too, to free RAM and leaks
        scope.$on(
          "$destroy",
          function (/*event*/) {
            windows.unload();
          }
        );
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
        dhxShowInnerScroll: '=',
        dhxLeft: '=',
        dhxMove: '=',
        dhxPark: '=',
        dhxResize: '=',
        dhxText: '@',
        dhxTop: '=',
        dhxWidth: '=',
        dhxBtnClose: '=',
        dhxBtnMinmax: '=',
        dhxBtnPark: '=',
        dhxBtnStick: '=',
        dhxBtnHelp: '='
      },
      link: function (scope, element, attrs, windowsCtrl) {
        windowsCtrl.registerWindow({
          elem: element.detach(),
          config: {
            center: scope.dhxCenter,
            height: scope.dhxHeight,
            keep_in_viewport: scope.dhxKeepInViewport,
            showInnerScroll: scope.dhxShowInnerScroll,
            left: scope.dhxLeft,
            move: scope.dhxMove,
            park: scope.dhxPark,
            resize: scope.dhxResize,
            text: scope.dhxText,
            top: scope.dhxTop,
            width: scope.dhxWidth,
            btnClose : scope.dhxBtnClose,
            btnMinmax: scope.dhxBtnMinmax,
            btnPark: scope.dhxBtnPark,
            btnStick: scope.dhxBtnStick,
            btnHelp: scope.dhxBtnHelp
          }
        });
      }
    };
  })
  .directive('dhxWindowContainer', function factory() {
    return {
      restrict: 'E',
      require: '^dhxWindows',
      scope: {},
      link: function (scope, element, attrs, windowsCtrl) {
        windowsCtrl.setContainer(element[0]);
      }
    };
  });
