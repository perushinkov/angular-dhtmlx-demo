"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp')
  .config(function ($stateProvider) {
    var todoSubstates = [
      //DATA
      'cmpGrid', 'cmpTreeGrid', 'cmpTree', 'cmpDataView', 'cmpEditor', 'cmpCarousel', 'cmpChart'
      // LAYOUT
      , 'cmpTabbar', 'cmpWindows', 'cmpAccordion', 'cmpLayout'
      // NAVIGATION
      , 'cmpToolbar', 'cmpMenu', 'cmpRibbon'
      // NAV & LAYOUT
      , 'cmpSidebar'
      // FORM CMP
      , 'cmpCombo', 'cmpCalendar', 'cmpColorPicker', 'cmpSlider', 'cmpForm'
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
    })
  });
