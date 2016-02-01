"use strict";
/**
 * Created by Emanuil on 29/01/2016.
 *
 * It is hard to exhaust the complete dhtmlxTree API here...
 * so feel free to adapt to your own needs.
 *
 * By binding the tree object itself to the controller scope,
 * and adding a configureFunc scope callback before data parse
 * I have tried to provide full access to the dhtmlxTree functionality
 */
angular.module('dhxDirectives')
  .directive('dhxTree', function factory() {
    return {
      restrict: 'E',
      require: 'dhxTree',
      controller: function () {
      },
      scope: {
        /**
         * Tree will be accessible in controller via this scope entry
         * after it's initialized
         */
        dhxTree: '=',
        /**
         * Please refer to the following link for format:
         * http://docs.dhtmlx.com/tree__syntax_templates.html#jsonformattemplate
         */
        dhxJsonData: '=',
        /**
         * [{type: <handlerType>, handler: <handlerFunc>}]
         * where type is 'onSomeEvent'
         * Events can be seen at: http://docs.dhtmlx.com/api__refs__dhtmlxtree_events.html
         * Optional
         */
        dhxHandlers: '=',
        /**
         * Not an exhaustive list of enablers... feel free to add more.
         * Optionals!
         */
        dhxEnableCheckBoxes: '=',
        dhxEnableDragAndDrop: '=',
        dhxEnableHighlighting: '=',
        dhxEnableThreeStateCheckboxes: '=',
        dhxEnableTreeLines: '=',
        dhxEnableTreeImages: '=',
        /**
         * preLoad and postLoad callbacks to controller for additional
         * customization power.
         */
        dhxConfigureFunc: '=',
        dhxOnDataLoaded: '='
      },
      link: function (scope, element/*, attrs, treeCtrl*/) {
        //noinspection JSPotentiallyInvalidConstructorUsage
        var tree = new dhtmlXTreeObject({
          parent: element[0],
          skin: "dhx_skyblue",
          checkbox: true,
          image_path: "bower_components/dhtmlx/imgs/dhxtree_skyblue/"
        });

        scope.dhxTree = tree;

        // Attaching event handlers
        scope.dhxHandlers = scope.dhxHandlers || [];
        var info;
        for (var i = 0; i < scope.dhxHandlers.length; i++) {
          info = scope.dhxHandlers[i];
          tree.attachEvent(info.type, info.handler);
        }

        // Additional optional configuration
        tree.enableCheckBoxes(scope.dhxEnableCheckBoxes);
        tree.enableDragAndDrop(scope.dhxEnableDragAndDrop);
        tree.enableHighlighting(scope.dhxEnableHighlighting);
        tree.enableThreeStateCheckboxes(scope.dhxEnableThreeStateCheckboxes);
        tree.enableTreeImages(scope.dhxEnableTreeImages);
        tree.enableTreeLines(scope.dhxEnableTreeLines);

        // Letting controller add configurations before data is parsed
        if (scope.dhxConfigureFunc) {
          scope.dhxConfigureFunc(tree);
        }

        // Finally parsing data
        tree.parse(scope.dhxJsonData, "json");

        // Letting controller do data manipulation after data has been loaded
        if (scope.dhxOnDataLoaded) {
          scope.dhxOnDataLoaded(tree);
        }
      }
    };
  });
