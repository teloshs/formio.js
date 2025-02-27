"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: '4405',
  name: '4405',
  type: 'form',
  display: 'form',
  components: [{
    label: 'HTML',
    attrs: [{
      attr: '',
      value: ''
    }],
    content: '<H1>Assessment Checklist</H1>',
    refreshOnChange: false,
    type: 'htmlelement',
    input: false,
    key: 'html',
    tableView: false
  }, {
    type: 'button',
    label: 'Submit',
    key: 'submit',
    disableOnInvalid: true,
    input: true,
    tableView: false
  }, {
    title: 'Panel1',
    theme: 'primary',
    collapsible: false,
    type: 'panel',
    label: 'Panel',
    input: false,
    key: 'panel',
    tableView: false,
    components: [{
      label: 'Radio',
      optionsLabelPosition: 'right',
      inline: true,
      dataType: 'string',
      values: [{
        label: 'Yes',
        value: 'yes',
        shortcut: ''
      }, {
        label: 'No',
        value: 'no',
        shortcut: ''
      }],
      type: 'radio',
      input: true,
      key: 'radio',
      tableView: false
    }]
  }, {
    title: 'Panel2',
    theme: 'primary',
    collapsible: false,
    conditional: {
      show: false,
      when: 'radio',
      eq: 'no'
    },
    type: 'panel',
    label: 'Panel2',
    input: false,
    key: 'panel1',
    tableView: false,
    components: [{
      label: 'Text Area',
      isEditor: false,
      autoExpand: false,
      type: 'textarea',
      input: true,
      key: 'textArea',
      tableView: true
    }]
  }, {
    title: 'Panel3',
    theme: 'primary',
    collapsible: false,
    conditional: {
      show: false,
      when: 'radio',
      eq: 'no'
    },
    type: 'panel',
    label: 'Panel3',
    input: false,
    key: 'panel2',
    tableView: false,
    components: [{
      label: 'Radio',
      optionsLabelPosition: 'right',
      inline: false,
      tableView: false,
      values: [{
        label: 'Yes',
        value: 'yes',
        shortcut: ''
      }, {
        label: 'No',
        value: 'no',
        shortcut: ''
      }],
      dataType: 'string',
      key: 'radio2',
      type: 'radio',
      input: true
    }, {
      label: 'Text Area',
      isEditor: false,
      autoExpand: false,
      type: 'textarea',
      input: true,
      key: 'textArea1',
      tableView: true
    }]
  }],
  project: '61547bb9b027c7a861d855b6'
};
exports["default"] = _default;