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
    'dhxDirectives',
    'hljs'
  ])
  .config(function ($stateProvider, hljsServiceProvider) {
    $stateProvider
      .state('root', {
        url: "/",
        templateUrl: "root/root.html",
        controller : 'RootController'
      });

    hljsServiceProvider.setOptions({
      tabReplace: '  '
    });
  })
  .controller('AppController', ['$state' ,function ($state) {
    $state.go('root');
  }]);
