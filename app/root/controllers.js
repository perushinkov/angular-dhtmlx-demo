/**
 * Created by Emanuil on 22/01/2016.
 */
angular.module('myApp')
  .controller('RootController', [
    '$scope', 'Model', '$state',
    function ($scope, Model, $state) {

      $scope.msg = "Testing...";
      $scope.dhxTree = {};
      $scope.cmpTreeData = Model.getComponentsJson();

      $scope.treeDataLoaded = function (tree) {
        var leafs = tree.getAllLeafs().split(',');
        var style = "  font-weight: bold; color: #000088;";
        leafs.forEach(function (leaf) {
          tree.setItemStyle(leaf, style);
        });
        console.log(leafs);
      };

      $scope.treeHandlers = [
        {
          type: "onClick",
          handler: function (id) {
            if ($scope.dhxTree.hasChildren(id) == 0) {
              console.log('cmp' + id);
              $state.go('cmp' + id);
            }
          }
        }
      ];
    }
  ]);
