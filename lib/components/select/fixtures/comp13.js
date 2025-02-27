"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  label: 'Location',
  widget: 'html5',
  tableView: true,
  dataSrc: 'custom',
  data: {
    values: [{
      label: '',
      value: ''
    }],
    custom: 'values = [\r\n{\r\n        "label" : "Test 1",\r\n        "value" : "test1"\r\n    },\r\n{\r\n        "label" : "Test 2",\r\n        "value" : "test2"\r\n    }\r\n];\r\n'
  },
  refreshOn: 'district',
  clearOnRefresh: true,
  selectThreshold: 0.3,
  calculateServer: true,
  validate: {
    onlyAvailableItems: false
  },
  key: 'location',
  type: 'select',
  indexeddb: {
    filter: {}
  },
  input: true,
  hideOnChildrenHidden: false
};
exports["default"] = _default;