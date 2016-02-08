"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('dhxDirectives')
  .factory('DhxUtils', [function () {
    var _imgPath = "bower_components/dhtmlx/imgs/dhxtree_skyblue/";

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
    return {
      attachDhxHandlers: attachDhxHandlers,
      getImagePath: getImagePath
    };
  }]);
