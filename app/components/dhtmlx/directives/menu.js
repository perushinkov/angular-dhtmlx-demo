"use strict";
/**
 * Created by Emanuil on 08/02/2016.
 *
 * Useful links
 * @link http://docs.dhtmlx.com/menu__object_constructor.html#specifyingmenuitems
 * @link http://docs.dhtmlx.com/api__link__dhtmlxmenu_loadstruct.html
 * @link http://docs.dhtmlx.com/api__dhtmlxmenu_loadfromhtml.html
 *
 */
angular.module('dhxDirectives')
  .directive('dhxMenu', function factory(DhxUtils) {
    return {
      restrict: 'E',
      require: 'dhxMenu',
      controller: function () {
      },
      scope: {
        dhxMenu: '=',
        dhxHandlers: '=',
        dhxOnClick: '=',
        dhxOnLoadedAndRendered: '=',
        /**
         * if (loadFromHtml)
         *  LoadFromHtml_fromDomChildren(),
         * else if (loadXMLFromDom)
         *  loadStruct(xmlFromChildren)
         * else
         *  loadStruct(XmlJsonData)
         **/
        dhxLoadFromHtml: '=',
        dhxLoadXmlFromDom: '=',
        dhxXmlJsonData: '=',

        dhxContextMenuMode: '=',
        dhxContextZones: '=',
        dhxContextAsParent: '='
      },
      link: function (scope, element, attrs, menuCtrl) {
        //noinspection JSPotentiallyInvalidConstructorUsage

        var domChild = $(element).children().first().detach();

        var menu = new dhtmlXMenuObject(scope.dhxContextMenuMode ? undefined : element[0]);
        scope.dhxMenu ? scope.dhxMenu = menu : '';

        scope.dhxContextMenuMode ? menu.renderAsContextMenu() : undefined;

        if (scope.dhxContextZones) {
          scope.dhxContextZones.forEach(function (zone) {
            menu.addContextZone(zone);
          });
        }

        if (scope.dhxContextAsParent) {
          menu.addContextZone($(element).parent()[0]);
        }

        if (scope.dhxOnClick) {
          DhxUtils.attachDhxHandlers(menu, [
            {
              type: 'onClick',
              handler: scope.dhxOnClick
            }
          ]);
        }
        if (scope.dhxLoadFromHtml) {
          menu.loadFromHTML(domChild[0], false, scope.dhxOnLoadedAndRendered);
        } else if (scope.dhxLoadXmlFromDom) {
          menu.loadStruct(domChild[0].outerHTML, scope.dhxOnLoadedAndRendered);
        } else if (scope.dhxXmlJsonData) {
          menu.loadStruct(scope.dhxXmlJsonData);
        } else {
          console.error('Please specify one of dhx-load-from-html or dhx-load-from-dom or dhx-xml-json-data');
        }

        DhxUtils.attachDhxHandlers(menu, scope.dhxHandlers);
        DhxUtils.dhxUnloadOnScopeDestroy(scope, menu);
      }
    };
  });
