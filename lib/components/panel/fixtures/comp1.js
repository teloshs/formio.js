"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  'conditional': {
    'eq': '',
    'when': null,
    'show': ''
  },
  'tags': [],
  'type': 'panel',
  'components': [{
    'tags': [],
    'type': 'textfield',
    'conditional': {
      'eq': '',
      'when': null,
      'show': ''
    },
    'validate': {
      'customPrivate': false,
      'custom': '',
      'pattern': '',
      'maxLength': '',
      'minLength': '',
      'required': false
    },
    'persistent': true,
    'unique': false,
    'protected': false,
    'defaultValue': '',
    'multiple': false,
    'suffix': '',
    'prefix': '',
    'placeholder': '',
    'key': 'firstName',
    'label': 'First Name',
    'inputMask': '',
    'inputType': 'text',
    'tableView': true,
    'input': true
  }, {
    'tags': [],
    'type': 'textfield',
    'conditional': {
      'eq': '',
      'when': null,
      'show': ''
    },
    'validate': {
      'customPrivate': false,
      'custom': '',
      'pattern': '',
      'maxLength': '',
      'minLength': '',
      'required': false
    },
    'persistent': true,
    'unique': false,
    'protected': false,
    'defaultValue': '',
    'multiple': false,
    'suffix': '',
    'prefix': '',
    'placeholder': '',
    'key': 'lastName',
    'label': 'Last Name',
    'inputMask': '',
    'inputType': 'text',
    'tableView': true,
    'input': true
  }],
  'nextPage': null,
  'theme': 'default',
  'title': 'User Information',
  'input': false,
  'key': 'panel1'
};
exports["default"] = _default;