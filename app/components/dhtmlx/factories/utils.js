"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('dhxDirectives')
  .factory('DhxUtils', [function () {
    var _imgPath = "bower_components/dhtmlx/imgs/";

    /**
     * @param dhxObject
     * @param dhxHandlers
     */
    var attachDhxHandlers = function (dhxObject, dhxHandlers) {
      (dhxHandlers || [])
        .forEach(function (info) {
          dhxObject.attachEvent(info.type, info.handler);
        });
    };

    var getImagePath = function () {
      return _imgPath;
    };

    var setImagePath = function (imgPath) {
      _imgPath = imgPath;
    };

    /**
     * I hope to never resort to using that
     */
    var createCounter = function () {
      var current = -1;
      return function () {
        current++;
        return current;
      };
    };

    var removeUndefinedProps = function(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
          delete obj[prop];
        }
      }
    };

    var dhxUnloadOnScopeDestroy = function (scope, dhxObj) {
      var destructorName =
        'destructor' in dhxObj
          ? 'destructor'
          :
          ('unload' in dhxObj
            ? 'unload'
            : null);
      if (destructorName === null) {
        console.error('Dhtmlx object does not have a destructor or unload method! Failed to register with scope destructor!');
        return;
      }

      scope.$on(
        "$destroy",
        function (/*event*/) {
          dhxObj[destructorName]();
        }
      );
    };

    return {
      attachDhxHandlers: attachDhxHandlers,
      getImagePath: getImagePath,
      setImagePath: setImagePath,
      createCounter: createCounter,
      removeUndefinedProps: removeUndefinedProps,
      dhxUnloadOnScopeDestroy: dhxUnloadOnScopeDestroy
    };
  }]);
