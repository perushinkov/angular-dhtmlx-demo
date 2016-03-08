"use strict";
/**
 * Created by Emanuil on 24/02/2016.
 *
 * Links:
 *   for validate properties:
 *   http://docs.dhtmlx.com/form__validation.html#validation
 */
(function () {
  var linkFn = function (scope, element/*, json*/) {
    var obj = {};
    var list = [];

    //if (json === undefined) {
    $(element[0]).children('JSON').each(function () {
      list.push($(this).val());
    });

    for (var property in scope) {
      if (scope.hasOwnProperty(property) && scope[property] !== undefined) {
        var prefix = property.substr(0, 3);
        if (prefix !== "dhx") continue;

        var param = property.substr(3);
        param = param[0].toLowerCase() + param.substr(1);
        obj[param] = scope[property];
      }
    }

    var tagName = element.prop('tagName').substr(6).toLowerCase();
    if (tagName !== 'option') {
      obj.type = tagName.split('-').join('');
    }

    var newElem = $('<JSON>');
    newElem.attr('savedTagName', tagName);
    if (list.length != 0) {
      switch (tagName) {
        case 'combo':
        case 'select':
        case 'multiselect':
          obj.options = list;
          break;
        case 'radio':
        case 'checkbox':
        case 'fieldset':
        case 'block':
        case 'rm':
          obj.list = list;
          break;
      }
    }


    if (tagName != 'rm') {
      newElem.val(obj);
      element.replaceWith(newElem);
    }
    return obj;
  };

  var module = angular.module('dhxDirectives');
  module.directive('dhxForm', function factory(DhxUtils) {
    return {
      restrict: 'E',
      scope: {
        dhxObj: '=',
        dhxHandlers: '='
      },
      link: function (scope, element) {
        var data = linkFn(scope, element).list;
        element.empty();
        var div = $('<div></div>').appendTo(element[0]);
        console.log(JSON.stringify(data));
        var form = new dhtmlXForm(div[0], data);
        form.enableLiveValidation(true);
        form.validate();
        scope.dhxObj ? scope.dhxObj = form : '';
        DhxUtils.attachDhxHandlers(form, scope.dhxHandlers);

      }
    };
  });

  module.directive('dhxFBlock', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxList: '=',
        dhxName: '@',
        dhxWidth: '='
      },
      link: linkFn
    };
  });
  module.directive('dhxFButton', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxName: '@',
        dhxTooltip: '@',
        dhxUserdata: '=',
        dhxValue: '@',
        dhxWidth: '='
      },
      link: linkFn
    };
  });
  module.directive('dhxFCalendar', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxCalendarPosition: '@',
        dhxDateFormat: '@',
        dhxDisabled: '=',
        dhxEnableTime: '=',
        dhxEnableTodayButton: '=',
        dhxHidden: '=',
        dhxInfo: '=',
        dhxLabel: '@',
        dhxMinutesInterval: '=',
        dhxName: '@',
        dhxRequired: '=',
        dhxServerDateFormat: '@',
        dhxShowWeekNumbers: '=',
        dhxTooltip: '@',
        dhxUserdata: '=',
        dhxValue: '@',
        dhxWeekStart: '='
      },
      link: linkFn
    };
  });
  module.directive('dhxFCheckbox', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxChecked: '=',
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxInfo: '=',
        dhxLabel: '@',
        dhxList: '=',
        dhxName: '@',
        dhxReadonly: '=',
        dhxRequired: '=',
        dhxTooltip: '@',
        dhxUserdata: '=',
        dhxValue: '@'
      },
      link: linkFn
    };
  });
  module.directive('dhxFColorpicker', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxCpPosition: '@',
        dhxCustomColors: '@',
        dhxDisabled: '=',
        dhxEnableCustomColors: '=',
        dhxHidden: '=',
        dhxInfo: '=',
        dhxLabel: '@',
        dhxName: '@',
        dhxReadonly: '=',
        dhxRequired: '=',
        dhxTooltip: '@',
        dhxUserdata: '=',
        dhxValidate: '=',
        dhxValue: '@'
      },
      link: linkFn
    };
  });
  module.directive('dhxFCombo', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxComboType: '=',
        dhxDisabled: '=',
        dhxFiltering: '=',
        dhxHidden: '=',
        dhxInfo: '=',
        dhxLabel: '@',
        dhxName: '@',
        dhxReadonly: '=',
        dhxRequired: '=',
        dhxTooltip: '@',
        dhxUserdata: '=',
        dhxValidate: '=',
        dhxValue: '@'
      },
      link: linkFn
    };
  });
  module.directive('dhxFFieldset', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxLabel: '@',
        dhxList: '=',
        dhxName: '@',
        dhxUserdata: '=',
        dhxWidth: '='
      },
      link: linkFn
    };
  });
  module.directive('dhxFImage', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxImageHeight: '=',
        dhxImageWidth: '=',
        dhxInfo: '=',
        dhxLabel: '@',
        dhxName: '@',
        dhxStyle: '@',
        dhxTooltip: '@',
        dhxUrl: '@',
        dhxUserdata: '=',
        dhxValue: '@'
      },
      link: linkFn
    };
  });
  module.directive('dhxFInput', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxInfo: '=',
        dhxLabel: '@',
        dhxMaxLength: '=',
        dhxName: '@',
        dhxNumberFormat: '@',
        dhxReadonly: '=',
        dhxRequired: '=',
        dhxRows: '=',
        dhxStyle: '@',
        dhxTooltip: '@',
        dhxUserdata: '=',
        dhxValidate: '=',
        dhxValue: '@'
      },
      link: linkFn
    };
  });
  module.directive('dhxFLabel', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxLabel: '@',
        dhxName: '@',
        dhxUserdata: '='
      },
      link: linkFn
    };
  });
  module.directive('dhxFMultiSelect', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxInfo: '=',
        dhxLabel: '@',
        dhxName: '@',
        dhxRequired: '=',
        dhxStyle: '@',
        dhxTooltip: '@',
        dhxUserdata: '='
      },
      link: linkFn
    };
  });
  module.directive('dhxFNewColumn', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxOffset: '='
      },
      link: linkFn
    };
  });
  module.directive('dhxFNote', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxText: '@',
        dhxWidth: '='
      },
      link: linkFn
    };
  });
  module.directive('dhxFOption', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxSelected: '=',
        dhxText: '@',
        dhxValue: '@'
      },
      link: linkFn
    };
  });
  module.directive('dhxFPassword', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxInfo: '=',
        dhxLabel: '@',
        dhxMaxLength: '=',
        dhxName: '@',
        dhxReadonly: '=',
        dhxRequired: '=',
        dhxStyle: '@',
        dhxTooltip: '@',
        dhxUserdata: '=',
        dhxValidate: '=',
        dhxValue: '@'
      },
      link: linkFn
    };
  });
  module.directive('dhxFRadio', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxChecked: '=',
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxInfo: '=',
        dhxLabel: '@',
        dhxName: '@',
        dhxReadonly: '=',
        dhxRequired: '=',
        dhxTooltip: '@',
        dhxUserdata: '=',
        dhxValue: '@'
      },
      link: linkFn
    };
  });
  module.directive('dhxFSelect', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxInfo: '=',
        dhxLabel: '@',
        dhxName: '@',
        dhxRequired: '=',
        dhxStyle: '@',
        dhxTooltip: '@',
        dhxUserdata: '='
      },
      link: linkFn
    };
  });
  module.directive('dhxFSettings', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxBlockOffset: '=',
        dhxInputHeight: '=',
        dhxInputWidth: '=',
        dhxLabelAlign: '@',
        dhxLabelHeight: '=',
        dhxLabelWidth: '=',
        dhxNoteWidth: '=',
        dhxOffsetLeft: '=',
        dhxOffsetTop: '=',
        dhxPosition: '@'

      },
      link: linkFn
    };
  });

  module.directive('dhxFUpload', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxDisabled: '=',
        dhxHidden: '=',
        dhxMode: '@',
        dhxName: '@',
        dhxRequired: '=',
        dhxTitleScreen: '=',
        dhxTitleText: '@',
        dhxUrl: '@',
        dhxUserdata: '='
      },
      link: linkFn
    };
  });
  //TODO: Make it so that it can mix with the other approach
  module.directive('dhxFJson', function factory() {
    return {
      restrict: 'E',
      scope: {
        dhxJson: '='
      },
      link: function (scope, element) {
        linkFn(scope, element, scope.dhxJson);
      }
    };
  });
  //module.directive('dhxFormCmp', function factory() {
  //  return {
  //    restrict: 'E',
  //    scope: {
  //      dhxCalendarPosition: '@',
  //      dhxChecked: '=',
  //      dhxComboType: '=',
  //      dhxCpPosition: '@',
  //      dhxCustomColors: '@',
  //      dhxDateFormat: '@',
  //      dhxDisabled: '=',
  //      dhxEnableCustomColors: '=',
  //      dhxEnableTime: '=',
  //      dhxEnableTodayButton: '=',
  //      dhxFiltering: '=',
  //      dhxHidden: '=',
  //      dhxImageHeight: '=',
  //      dhxImageWidth: '=',
  //      dhxInfo: '=',
  //      dhxLabel: '@',
  //      dhxList: '=',
  //      dhxMaxLength: '=',
  //      dhxMinutesInterval: '=',
  //      dhxMode: '@',
  //      dhxName: '@',
  //      dhxNumberFormat: '@',
  //      dhxReadonly: '=',
  //      dhxRequired: '=',
  //      dhxRows: '=',
  //      dhxSelected: '=',
  //      dhxServerDateFormat: '@',
  //      dhxShowWeekNumbers: '=',
  //      dhxStyle: '@',
  //      dhxText: '@',
  //      dhxTitleScreen: '=',
  //      dhxTitleText: '@',
  //      dhxTooltip: '@',
  //      dhxUrl: '@',
  //      dhxUserdata: '=',
  //      dhxValidate: '=',
  //      dhxValue: '@',
  //      dhxWeekStart: '=',
  //      dhxWidth: '='
  //    },
  //    link: linkFn
  //  };
  //});
  // Use for other form cmps
})();
