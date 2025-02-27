"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: 'FIO-3744',
  name: 'fio3744',
  path: 'fio3744',
  type: 'form',
  display: 'form',
  components: [{
    label: 'Resource',
    resource: '61377a53c202989e4ed9ff21',
    template: '<span>{{ item.data.textField }}</span>',
    tableView: true,
    unique: true,
    key: 'resource',
    type: 'resource',
    input: true,
    data: {
      resource: '61377a53c202989e4ed9ff21'
    },
    addResource: false
  }, {
    type: 'button',
    label: 'Submit',
    key: 'submit',
    disableOnInvalid: true,
    input: true,
    tableView: false
  }]
};
exports["default"] = _default;