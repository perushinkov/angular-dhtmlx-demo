"use strict";
/**
 * Created by Emanuil on 09/02/2016.
 */
angular.module('dhxDirectives')
  .directive('dhxChart', function factory(DhxUtils) {
    return {
      restrict: 'E',
      require: 'dhxChart',
      controller: function () {
      },
      scope: {
        dhxData: '=',
        dhxChartWidth: '@',
        dhxChartHeight: '@',
        dhxView: '@',
        dhxValue: '@',    //area, bar, line, pie, radar
        dhxXValue: '@',   //scatter
        dhxYValue: '@',//, //scatter
        // Optionals //TODO: Might or might not implement later
        dhxLabel: '@',
        //dhxColor: '@',
        //dhxWidth: '=',
        dhxTooltip: '@',//,
        //dhxXAxis: '=',
        //dhxYAxis: '=',
        //dhxSeries: '=',
        //dhxLegend: '='
        dhxPieInnerText: '@'
      },
      link: function (scope, element) {
        //$('<div></div>').appendTo(element[0]);
        var rootElem = element;//.children().first();
        rootElem.css('width', scope.dhxChartWidth);
        rootElem.css('height', scope.dhxChartHeight);
        rootElem.css('display', "inline-block");

        var descriptor = {
          view: scope.dhxView,
          container: rootElem[0]
        };

        if (scope.dhxView == 'scatter') {
          descriptor.xValue = scope.dhxXValue;
          descriptor.yValue = scope.dhxYValue;
        } else {
          descriptor.value = scope.dhxValue;
        }

        // Optionals

        scope.dhxLabel ? descriptor.label = scope.dhxLabel : '';
        //scope.dhxColor ? descriptor.color = scope.dhxColor : '';
        //scope.dhxWidth ? descriptor.width = scope.dhxWidth : '';
        scope.dhxTooltip ? descriptor.tooltip = scope.dhxTooltip : '';
        scope.dhxPieInnerText ? descriptor.pieInnerText = scope.dhxPieInnerText : '';
        //scope.dhxXAxis ? descriptor.xAxis = scope.dhxXAxis : '';
        //scope.dhxYAxis ? descriptor.yAxis = scope.dhxYAxis : '';
        //scope.dhxSeries ? descriptor.series = scope.dhxSeries : '';
        //scope.dhxLegend ? descriptor.legend = scope.dhxLegend : '';
        //scope.dhxWidth ? descriptor.width = scope.dhxWidth : '';

        //noinspection JSPotentiallyInvalidConstructorUsage
        var chart = new dhtmlXChart(descriptor);
        chart.parse(scope.dhxData, 'json');

        DhxUtils.dhxUnloadOnScopeDestroy(scope, chart);
      }
    };
  });


