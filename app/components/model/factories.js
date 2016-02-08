"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp').factory('Model', [function () {

  var getComponentsJson = function () {
    return {
      "id": 0,
      "item": [
        {
          "id": "dataCmps",
          "text": "Data",
          "item": [
            {
              "id": "Grid",
              "text": "Grid"
            },
            //{
            //  "id": "TreeGrid",
            //  "text": "TreeGrid"
            //},
            {
              "id": "Tree",
              "text": "Tree"
            }//,
            //{
            //  "id": "DataView",
            //  "text": "DataView"
            //},
            //{
            //  "id": "List", // Note: Does not exist in current version
            //  "text": "List"
            //},
            //{
            //  "id": "Editor",
            //  "text": "Editor"
            //},
            //{
            //  "id": "Carousel",
            //  "text": "Carousel"
            //},
            //{
            //  "id": "Chart",
            //  "text": "Chart"
            //}
          ]
        },
        {
          "id": "layoutCmps",
          "text": "Layout",
          "item": [
            //{
            //  "id": "Tabbar",
            //  "text": "Tabbar"
            //},
            //{
            //  "id": "Windows",
            //  "text": "Windows"
            //},
            //{
            //  "id": "Accordion",
            //  "text": "Accordion"
            //},
            {
              "id": "Layout",
              "text": "Layout"
            }
          ]
        }//,
        //{
        //  "id": "navCmps",
        //  "text": "Navigation",
        //  "item": [
        //    {
        //      "id": "Toolbar",
        //      "text": "Toolbar"
        //    },
        //    {
        //      "id": "Menu",
        //      "text": "Menu"
        //    },
        //    {
        //      "id": "Ribbon",
        //      "text": "Ribbon"
        //    }
        //  ]
        //},
        //{
        //  "id": "navLayoutCmps",
        //  "text": "Navigation & Layout",
        //  "item": [
        //    {
        //      "id": "Sidebar",
        //      "text": "Sidebar"
        //    }
        //  ]
        //},
        //{
        //  "id": "formCmps",
        //  "text": "Forms",
        //  "item": [
        //    {
        //      "id": "Combo",
        //      "text": "Combo"
        //    },
        //    {
        //      "id": "Calendar",
        //      "text": "Calendar"
        //    },
        //    {
        //      "id": "ColorPicker",
        //      "text": "ColorPicker"
        //    },
        //    {
        //      "id": "Slider",
        //      "text": "Slider"
        //    },
        //    {
        //      "id": "Form",
        //      "text": "Form"
        //    }
        //  ]
        //},
        //{
        //  "id": "notifyCmps",
        //  "text": "Notifications",
        //  "item": [
        //    {
        //      "id": "Popup",
        //      "text": "Popup"
        //    },
        //    {
        //      "id": "Message",
        //      "text": "Message"
        //    }
        //  ]
        //}
      ]
    };
  };

  return {
    getComponentsJson: getComponentsJson
  };
}]);
