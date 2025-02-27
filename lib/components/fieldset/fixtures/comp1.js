"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  'key': 'fieldset1',
  'input': false,
  'tableView': true,
  'legend': 'User Information',
  'components': [{
    'input': true,
    'tableView': true,
    'inputType': 'text',
    'inputMask': '',
    'label': 'First Name',
    'key': 'firstName',
    'placeholder': '',
    'prefix': '',
    'suffix': '',
    'multiple': false,
    'defaultValue': '',
    'protected': false,
    'unique': false,
    'persistent': true,
    'clearOnHide': true,
    'validate': {
      'required': false,
      'minLength': '',
      'maxLength': '',
      'pattern': '',
      'custom': '',
      'customPrivate': false
    },
    'conditional': {
      'show': '',
      'when': null,
      'eq': ''
    },
    'type': 'textfield',
    'tags': []
  }, {
    'input': true,
    'tableView': true,
    'inputType': 'text',
    'inputMask': '',
    'label': 'Last Name',
    'key': 'lastName',
    'placeholder': '',
    'prefix': '',
    'suffix': '',
    'multiple': false,
    'defaultValue': '',
    'protected': false,
    'unique': false,
    'persistent': true,
    'clearOnHide': true,
    'validate': {
      'required': false,
      'minLength': '',
      'maxLength': '',
      'pattern': '',
      'custom': '',
      'customPrivate': false
    },
    'conditional': {
      'show': '',
      'when': null,
      'eq': ''
    },
    'type': 'textfield',
    'tags': []
  }],
  'type': 'fieldset',
  'tags': [],
  'conditional': {
    'show': '',
    'when': null,
    'eq': ''
  }
};
exports["default"] = _default;