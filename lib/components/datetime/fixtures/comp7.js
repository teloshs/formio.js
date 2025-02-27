"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  _id: '61c1e89cc6eafd71c3175f0d',
  title: 'Date Time',
  name: 'dateTime',
  path: 'datetime',
  type: 'form',
  display: 'form',
  components: [{
    label: 'Date / Time',
    format: 'yyyy-MM-dd',
    tableView: true,
    datePicker: {
      disableWeekends: false,
      disableWeekdays: false
    },
    enableTime: false,
    enableMinDateInput: false,
    enableMaxDateInput: false,
    key: 'dateTime',
    type: 'datetime',
    input: true,
    widget: {
      type: 'calendar',
      displayInTimezone: 'viewer',
      locale: 'en',
      useLocaleSettings: false,
      allowInput: true,
      mode: 'single',
      enableTime: false,
      noCalendar: false,
      format: 'yyyy-MM-dd',
      hourIncrement: 1,
      minuteIncrement: 1,
      'time_24hr': false,
      minDate: null,
      disableWeekends: false,
      disableWeekdays: false,
      maxDate: null
    }
  }, {
    type: 'button',
    label: 'Submit',
    key: 'submit',
    disableOnInvalid: true,
    input: true,
    tableView: false
  }],
  settings: {},
  properties: {},
  project: '61c101d0792d8ffc9be99694'
};
exports["default"] = _default;