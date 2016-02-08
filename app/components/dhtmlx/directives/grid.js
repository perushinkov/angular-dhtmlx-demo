"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 *
 * I do not exhaust the complete dhtmlXGrid API here...
 * however configure and dataLoaded callbacks let user
 * add any additional configuration they desire
 */
angular.module('dhxDirectives')
  .directive('dhxGrid', function factory(DhxUtils) {
    return {
      restrict: 'E',
      require: 'dhxGrid',
      controller: function () {
      },
      scope: {
        /**
         * Grid will be accessible in controller via this scope entry
         * after it's initialized.
         * NOTE: For better design and testability you should use instead the
         * configure and dataLoaded callbacks.
         */
        dhxGrid: '=',
        /** Mandatory in current implementation! */
        dhxMaxHeight: '=',
        /** Optional. Default is 100%. */
        dhxMaxWidth: '=',
        /**
         * Data is given here as an object. Not a filename! Must conform to the
         * specified or default dataFormat
         */
        dhxData: '=',
        /**
         * View possible formats here: http://docs.dhtmlx.com/grid__data_formats.html
         * Currently supported:
         * ['Basic JSON', 'Native JSON'] // 'Basic JSON' is default value
         */
        dhxDataFormat: '=',
        /** Optional! Recommended! http://docs.dhtmlx.com/api__dhtmlxgrid_setheader.html */
        dhxHeader: '=',
        /** Optional! http://docs.dhtmlx.com/api__dhtmlxgrid_setcoltypes.html */
        dhxColTypes: '=',
        /** Optional! http://docs.dhtmlx.com/api__dhtmlxgrid_setcolsorting.html */
        dhxColSorting: '=',
        /** Optional! http://docs.dhtmlx.com/api__dhtmlxgrid_setcolalign.html */
        dhxColAlign: '=',
        /** Optional! http://docs.dhtmlx.com/api__dhtmlxgrid_setinitwidthsp.html */
        dhxInitWidths: '=',
        /** Optional! http://docs.dhtmlx.com/api__dhtmlxgrid_setinitwidths.html */
        dhxInitWidthsP: '=',
        /**
         * preLoad and postLoad callbacks to controller for additional
         * customization power.
         */
        dhxConfigureFunc: '=',
        dhxOnDataLoaded: '=',
        /**
         * [{type: <handlerType>, handler: <handlerFunc>}]
         * where type is 'onSomeEvent'
         * Events can be seen at: http://docs.dhtmlx.com/api__refs__dhtmlxgrid_events.html
         * Optional
         */
        dhxHandlers: '='
      },
      compile: function compile(tElement, tAttrs, transclude) {
        return function (scope, element, attrs) {

          $('<div></div>').appendTo(element[0]);
          var rootElem = element.children().first();
          //noinspection JSPotentiallyInvalidConstructorUsage
          var grid = new dhtmlXGridObject(rootElem[0]);
          grid.setImagePath(DhxUtils.getImagePath());

          grid.enableAutoHeight(!!scope.dhxMaxHeight, scope.dhxMaxHeight, true);
          grid.enableAutoWidth(!!scope.dhxMaxWidth, scope.dhxMaxWidth, true);

          scope.dhxHeader ? grid.setHeader(scope.dhxHeader): '';
          scope.dhxColTypes ? grid.setColTypes(scope.dhxColTypes): '';
          scope.dhxColSorting ? grid.setColSorting(scope.dhxColSorting): '';
          scope.dhxColAlign ? grid.setColAlign(scope.dhxColAlign): '';
          scope.dhxInitWidths ? grid.setInitWidths(scope.dhxInitWidths): '';
          scope.dhxInitWidthsP ? grid.setInitWidthsP(scope.dhxInitWidthsP): '';

          DhxUtils.attachDhxHandlers(grid, scope.dhxHandlers);

          // Letting controller add configurations before data is parsed
          if (scope.dhxConfigureFunc) {
            scope.dhxConfigureFunc(grid);
          }

          grid.init();
          // Finally parsing data
          scope.dhxDataFormat = scope.dhxDataFormat || 'Basic JSON';
          switch (scope.dhxDataFormat) {
            case 'Basic JSON':
              grid.parse(scope.dhxData, 'json');
              break;
            case 'Native JSON':
              grid.load(scope.dhxData, 'js');
              break;
          }

          // Letting controller do data manipulation after data has been loaded
          if (scope.dhxOnDataLoaded) {
            scope.dhxOnDataLoaded(grid);
          }
        }
      }
    };
  })
