"use strict";
/**
 * Created by Emanuil on 09/02/2016.
 */
angular.module('dhxDirectives')
  .directive('dhxMessage', function factory(DhxUtils) {
    var nextMsgId = (function () {
      var _internalCounter = DhxUtils.createCounter();
      return function () {
        return 'msg_' + _internalCounter();
      };
    })();
    return {
      restrict: 'E',
      require: 'dhxMessage',
      controller: function () {
      },
      scope: {
        // shared props for notifications, confirms and alerts
        dhxInvoker: '=',
        dhxText: '@',
        /**
         * alert, alert-warning, alert-error,
         * confirm, confirm-warning, confirm-error,
         * ...anything else
         */
        dhxType: '@',
        // For notifications(a.k.a. plain messages)
        dhxExpire: '=',
        // shared props for confirms and alerts
        dhxCallback: '=',
        dhxHeight: '=',
        dhxWidth: '=',
        dhxPosition: '@',
        dhxTitle: '@',
        dhxOk: '@',
        // Just for Confirm
        dhxCancel: '@'
      },
      link: function (scope/*, element, attrs*/) {
        scope.dhxInvoker = function () {
          var instObj = {};

          // Not bothering with checks. Relying on the user providing just the data that's
          // needed for the message type
          instObj.id = nextMsgId();
          scope.dhxText !== undefined ? instObj.text = scope.dhxText : '';
          scope.dhxType !== undefined ? instObj.type = scope.dhxType : '';
          scope.dhxExpire !== undefined ? instObj.expire = scope.dhxExpire : '';
          scope.dhxHeight !== undefined ? instObj.height = scope.dhxHeight : '';
          scope.dhxWidth !== undefined ? instObj.width = scope.dhxWidth : '';
          scope.dhxPosition !== undefined ? instObj.position = scope.dhxPosition : '';
          scope.dhxTitle !== undefined ? instObj.title = scope.dhxTitle : '';
          scope.dhxOk !== undefined ? instObj.ok = scope.dhxOk : '';
          scope.dhxCancel !== undefined ? instObj.cancel = scope.dhxCancel : '';

          if (scope.dhxCallback !== undefined) {
            instObj.callback = function (data) {
              scope.dhxCallback(data);
            };
          }
          dhtmlx.message(instObj);

          scope.$on(
            "$destroy",
            function (/*event*/) {
              dhtmlx.message.hide(instObj.id);
            }
          );
        };
      }
    };
  });


