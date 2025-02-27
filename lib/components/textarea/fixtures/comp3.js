"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  type: 'form',
  components: [{
    label: 'Text Area',
    autoExpand: false,
    tableView: true,
    key: 'textArea',
    type: 'textarea',
    input: true
  }, {
    label: 'Submit',
    showValidations: false,
    tableView: false,
    key: 'submit',
    type: 'button',
    input: true
  }],
  revisions: '',
  _vid: 0,
  title: 'text area tests',
  display: 'form',
  name: 'textAriaTests',
  path: 'textAriaTests'
};
exports["default"] = _default;