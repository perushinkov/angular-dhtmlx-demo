"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp')
  .config(function ($stateProvider) {
    var todoSubstates = [
      //DATA
      'cmpDataView', 'cmpEditor', 'cmpCarousel'
      // LAYOUT
      , 'cmpAccordion'
      // NAVIGATION
      , 'cmpToolbar', 'cmpMenu', 'cmpRibbon'
      // NAV & LAYOUT
      , 'cmpSidebar'
      // FORM CMP
      , 'cmpCombo', 'cmpCalendar', 'cmpColorPicker', 'cmpSlider'
      // NOTIFICATIONS
    ];

    var readySubstates = [
      //DATA
      'cmpGrid', 'cmpTreeGrid', 'cmpTree', 'cmpChart'
      // LAYOUT
      , 'cmpWindows', 'cmpLayout', 'cmpTabbar'
      // NAVIGATION
      // NAV & LAYOUT
      // FORM CMP
      , 'cmpForm'
      // NOTIFICATIONS
      , 'cmpPopup', 'cmpMessage'
    ];

    var todoStateViews = {
      'demo': {
        templateUrl: 'root/todo/demo.html',
        controller: 'TodoController'
      },
      'docs': {
        templateUrl: 'root/todo/docs.html'
      }
    };

    //Generate To_Do state info
    todoSubstates.forEach(function (state) {
      $stateProvider
        .state(state, {
          url: '/' + state.substr(3).toLowerCase(),
          parent: 'root',
          views: todoStateViews
        });
    });

    //Generate completed state info
    readySubstates.forEach(function (state) {
      var smallName = state.substr(3).toLowerCase();
      $stateProvider
        .state(state, {
          url: '/' + smallName,
          parent: 'root',
          views: {
            'demo': {
              templateUrl: 'root/cmp/' + smallName + '/demo.html',
              controller: smallName[0].toUpperCase() + smallName.substring(1) + 'Controller'
            },
            'docs': {
              templateUrl: 'root/todo/docs.html',
              controller: 'DemoController'
            }
          }
        });
    });
  });
