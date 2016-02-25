"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp')
  .controller('FormController', ['$scope' ,function ($scope) {
    $scope.form = {};
    $scope.formHandlers = [
      {
        type: "onButtonClick",
        handler: function (name) {
          console.log('You have clicked \'' + name + '\'');
          alert('form in now available globally under "globForm". Open the console and play around!');
          window.globForm = $scope.form;

          console.log('Use globForm.getFormData() or globForm.getItemData() for specific items.');
          console.log('Data is fetched by item names.');
          console.log('WHere data name is missing, an id is generated.');
        }
      }
    ];
  }]);
