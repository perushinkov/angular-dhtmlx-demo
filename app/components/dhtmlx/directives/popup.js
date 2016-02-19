"use strict";
/**
 * Created by Emanuil on 08/02/2016.
 *
 * TODO: Currently dhxPopup targets parent. Add more ways of doing this.
 */
angular.module('dhxDirectives')
  .directive('dhxPopup', function factory() {
    return {
      restrict: 'E',
      require: 'dhxPopup',
      controller: function () {
      },
      scope: {
        dhxPopup: '=',
        /**
         * Determines if the popup is active. Note that the popup may hide if clicked upon, or
         * upon user refocus. To reappear it see dhxRefresh.
         */
        dhxShow: '=',
        /**
         * if dhxRefresh is changed the popup is refresh. It reappears if dhxShow is true,
         * else hides.
         */
        dhxRefresh: '='
      },
      link: function (scope, element/*, attrs, popupCtrl*/) {
        //noinspection JSPotentiallyInvalidConstructorUsage
        var popup = new dhtmlXPopup();
        scope.dhxPopup ? scope.dhxPopup = popup : '';
        var parent = $(element[0]).parent()[0];
        var child = element.detach();

        var renderPopup = function () {
          !!scope.dhxShow ?
            popup.show(
              window.dhx4.absLeft(parent),
              window.dhx4.absTop(parent),
              parent.offsetWidth,
              parent.offsetHeight) :
            popup.hide();
        };
        popup.attachObject(child[0]);
        scope.dhxShow ? popup.show() : popup.hide()
        scope.$watch('dhxShow', renderPopup);
        scope.$watch('dhxRefresh', renderPopup);
      }
    };
  });
