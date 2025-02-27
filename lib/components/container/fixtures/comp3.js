"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  type: 'form',
  components: [{
    label: 'Text Field',
    tableView: true,
    validate: {
      required: true,
      minLength: 2
    },
    key: 'textField',
    type: 'textfield',
    input: true
  }, {
    label: 'Container',
    tableView: false,
    validate: {
      required: true
    },
    key: 'container',
    type: 'container',
    input: true,
    components: [{
      label: 'Text Field',
      tableView: true,
      validate: {
        required: true,
        minLength: 2
      },
      key: 'textField',
      type: 'textfield',
      input: true
    }]
  }, {
    label: 'Submit as Draft',
    action: 'saveState',
    showValidations: false,
    theme: 'secondary',
    tableView: false,
    key: 'submitAsDraft',
    type: 'button',
    state: 'draft',
    input: true
  }, {
    label: 'Submit',
    showValidations: false,
    tableView: false,
    key: 'submit',
    type: 'button',
    input: true,
    saveOnEnter: false
  }],
  display: 'form',
  name: 'fio37151',
  path: 'fio37151',
  project: '6103a71934405111ce3f64fa'
};
exports["default"] = _default;