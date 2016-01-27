'use strict';

/**
 * @ngdoc overview
 * @name angularDhtmlxDemoApp
 * @description
 * # angularDhtmlxDemoApp
 *
 * Main module of the application.
 */

angular.module('dhxDirectives', []);
angular
  .module('myApp', [
    'ui.router',
    'dhxDirectives'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('root', {
        url: "/",
        templateUrl: "root/root.html",
        controller : 'RootController'
      })
  })
  .controller('AppController', ['$state' ,function ($state) {
    $state.go('root');
  }]);
