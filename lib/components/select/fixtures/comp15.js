"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  _id: '6110fab8ca845631779c2bc5',
  type: 'form',
  components: [{
    label: 'Select',
    widget: 'html5',
    tableView: true,
    dataSrc: 'resource',
    data: {
      resource: '6110fa7961e298191332514d',
      project: 'gjrwbdsqkpxesha'
    },
    dataType: 'object',
    valueProperty: 'data',
    template: '<span>{{ item.data }}</span>',
    validate: {
      select: false
    },
    key: 'select',
    type: 'select',
    searchField: 'data__regex',
    input: true,
    addResource: false,
    reference: false
  }, {
    label: 'Submit',
    showValidations: false,
    tableView: false,
    key: 'submit',
    type: 'button',
    input: true
  }],
  title: 'FIO-3011',
  display: 'form',
  name: 'fio3011',
  path: 'fio3011',
  project: '6108d710d447e01ac3d81b8f'
};
exports["default"] = _default;