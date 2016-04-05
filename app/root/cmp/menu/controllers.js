"use strict";
/**
 * Created by Emanuil on 01/02/2016.
 */
angular.module('myApp')
  .controller('MenuController', ['$scope', function ($scope) {
    $scope.alert = function (a,b,c,d) {
      dhtmlx.message('Clickaboo!');
      console.log('OnClick handler:' ,a,b,c);
    };
    var imgPrefix = 'http://dhtmlx.com/docs/products/dhtmlxMenu/samples/common/imgs/';
    $scope.jsonData = [
      {id:"file", text:"File", items:[
        {id: "new", text: "New", img: imgPrefix + "new.gif", imgdis: imgPrefix + "new_dis.gif"},
        {id: "file_sep_1", type: "separator"},
        {id: "open", text: "Open", img: imgPrefix + "open.gif", imgdis: imgPrefix + "open_dis.gif"},
        {id: "save", text: "Save", img: imgPrefix + "save.gif", imgdis: imgPrefix + "save_dis.gif"},
        {id: "saveAs", text: "Save As...", img: imgPrefix + "save_as.gif", imgdis: imgPrefix + "save_as_dis.gif", enabled: false},
        {id: "file_sep_2", type: "separator"},
        {id: "print", text: "Print", img: imgPrefix + "print.gif", imgdis: imgPrefix + "print_dis.gif"},
        {id: "pageSetup", text: "Page Setup", img: imgPrefix + "page_setup.gif", imgdis: imgPrefix + "page_setup_dis.gif", enabled: "false"},
        {id: "file_sep_3", type: "separator"},
        {id: "close", text: "Close", img: imgPrefix + "close.gif", imgdis: imgPrefix + "close_dis.gif"}
      ]},
      {id: "sep_top_1", type: "separator"},
      {id: "edit", text: "Edit", items:[
        {id: "undo", text: "Undo", img: imgPrefix + "undo.gif", imgdis: imgPrefix + "undo_dis.gif"},
        {id: "redo", text: "Redo", img: imgPrefix + "redo.gif", imgdis: imgPrefix + "redo_dis.gif"},
        {id: "edit_sep_1", type: "separator"},
        {id: "selectAll", text: "Select All", img: imgPrefix + "select_all.gif", imgdis: imgPrefix + "select_all_dis.gif"},
        {id: "edit_sep_2", type: "separator"},
        {id: "cut", text: "Cut", img: imgPrefix + "cut.gif", imgdis: imgPrefix + "cut_dis.gif"},
        {id: "copy", text: "Copy", img: imgPrefix + "copy.gif", imgdis: imgPrefix + "copy_dis.gif"},
        {id: "paste", text: "Paste", img: imgPrefix + "paste.gif", imgdis: imgPrefix + "paste_dis.gif"}
      ]},
      {id: "help", text: "Help", items:[
        {id: "about", text: "About...", img: imgPrefix + "about.gif", imgdis: imgPrefix + "about_dis.gif"},
        {id: "needhelp", text: "Help", img: imgPrefix + "help.gif", imgdis: imgPrefix + "help_dis.gif"},
        {id: "bugReporting", text: "Bug Reporting", img: imgPrefix + "bug_reporting.gif", imgdis: imgPrefix + "bug_reporting_dis.gif"}
      ]}
    ];
  }]);
