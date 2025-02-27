"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  type: 'form',
  components: [{
    label: 'Edit Grid',
    openWhenEmpty: true,
    tableView: false,
    rowDrafts: false,
    key: 'editGrid',
    type: 'editgrid',
    displayAsTable: false,
    input: true,
    components: [{
      label: 'Text Field',
      tableView: true,
      key: 'textField',
      type: 'textfield',
      input: true
    }, {
      label: 'Number',
      mask: false,
      tableView: true,
      delimiter: false,
      requireDecimal: false,
      inputFormat: 'plain',
      truncateMultipleSpaces: false,
      key: 'number',
      type: 'number',
      input: true
    }]
  }, {
    type: 'button',
    label: 'Submit',
    key: 'submit',
    disableOnInvalid: true,
    input: true,
    tableView: false
  }],
  title: 'tetste',
  display: 'form',
  name: 'tetste',
  path: 'tetste'
};
exports["default"] = _default;