"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.object.define-properties.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.date.to-iso-string.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.object.get-prototype-of.js");

var _lodash = _interopRequireDefault(require("lodash"));

var _moment = _interopRequireDefault(require("moment"));

var _Input2 = _interopRequireDefault(require("../_classes/input/Input"));

var _utils = _interopRequireDefault(require("../../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DateTimeComponent = /*#__PURE__*/function (_Input) {
  _inherits(DateTimeComponent, _Input);

  var _super = _createSuper(DateTimeComponent);

  function DateTimeComponent(component, options, data) {
    var _this;

    _classCallCheck(this, DateTimeComponent);

    _this = _super.call(this, component, options, data);
    var timezone = _this.component.timezone || _this.options.timezone;
    var time24hr = !_lodash["default"].get(_this.component, 'timePicker.showMeridian', true); // Change the format to map to the settings.

    if (!_this.component.enableDate) {
      _this.component.format = _this.component.format.replace(/yyyy-MM-dd /g, '');
    }

    if (!_this.component.enableTime) {
      _this.component.format = _this.component.format.replace(/ hh:mm a$/g, '');
    } else if (time24hr) {
      _this.component.format = _this.component.format.replace(/hh:mm a$/g, 'HH:mm');
    } else {
      _this.component.format = _this.component.format.replace(/HH:mm$/g, 'hh:mm a');
    }

    var customOptions = _this.component.customOptions || {};

    if (typeof customOptions === 'string') {
      try {
        customOptions = JSON.parse(customOptions);
      } catch (err) {
        console.warn(err.message);
        customOptions = {};
      }
    }
    /* eslint-disable camelcase */


    _this.component.widget = _objectSpread({
      type: 'calendar',
      timezone: timezone,
      displayInTimezone: _lodash["default"].get(_this.component, 'displayInTimezone', 'viewer'),
      submissionTimezone: _this.submissionTimezone,
      locale: _this.options.language,
      useLocaleSettings: _lodash["default"].get(_this.component, 'useLocaleSettings', false),
      allowInput: _lodash["default"].get(_this.component, 'allowInput', true),
      mode: 'single',
      enableTime: _lodash["default"].get(_this.component, 'enableTime', true),
      noCalendar: !_lodash["default"].get(_this.component, 'enableDate', true),
      format: _this.component.format,
      hourIncrement: _lodash["default"].get(_this.component, 'timePicker.hourStep', 1),
      minuteIncrement: _lodash["default"].get(_this.component, 'timePicker.minuteStep', 5),
      time_24hr: time24hr,
      readOnly: _this.options.readOnly,
      minDate: _lodash["default"].get(_this.component, 'datePicker.minDate'),
      disabledDates: _lodash["default"].get(_this.component, 'datePicker.disable'),
      disableWeekends: _lodash["default"].get(_this.component, 'datePicker.disableWeekends'),
      disableWeekdays: _lodash["default"].get(_this.component, 'datePicker.disableWeekdays'),
      disableFunction: _lodash["default"].get(_this.component, 'datePicker.disableFunction'),
      maxDate: _lodash["default"].get(_this.component, 'datePicker.maxDate')
    }, customOptions);
    /* eslint-enable camelcase */
    // Add the validators date.

    _this.validators.push('date');

    return _this;
  }

  _createClass(DateTimeComponent, [{
    key: "performInputMapping",
    value: function performInputMapping(input) {
      if (input.widget && input.widget.settings) {
        input.widget.settings.submissionTimezone = this.submissionTimezone;
      }

      return input;
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return DateTimeComponent.schema();
    }
  }, {
    key: "defaultValue",
    get: function get() {
      var defaultValue = _get(_getPrototypeOf(DateTimeComponent.prototype), "defaultValue", this);

      if (!defaultValue && this.component.defaultDate) {
        defaultValue = _utils["default"].getDateSetting(this.component.defaultDate);
        defaultValue = defaultValue ? defaultValue.toISOString() : '';
      }

      return defaultValue;
    }
  }, {
    key: "emptyValue",
    get: function get() {
      return '';
    }
  }, {
    key: "momentFormat",
    get: function get() {
      return _utils["default"].convertFormatToMoment(this.component.format);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.dataValue;

      if (value && value.toString() === 'Invalid Date') {
        return true;
      }

      return _get(_getPrototypeOf(DateTimeComponent.prototype), "isEmpty", this).call(this, value);
    }
  }, {
    key: "formatValue",
    value: function formatValue(input) {
      var result = _moment["default"].utc(input).toISOString();

      return result === 'Invalid date' ? input : result;
    }
  }, {
    key: "isEqual",
    value: function isEqual(valueA) {
      var valueB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.dataValue;
      return this.isEmpty(valueA) && this.isEmpty(valueB) || _moment["default"].utc(valueA).format(this.momentFormat) === _moment["default"].utc(valueB).format(this.momentFormat);
    }
  }, {
    key: "createWrapper",
    value: function createWrapper() {
      return false;
    }
  }, {
    key: "checkValidity",
    value: function checkValidity(data, dirty, rowData) {
      if (this.refs.input) {
        this.refs.input.forEach(function (input) {
          if (input.widget && input.widget.enteredDate) {
            dirty = true;
          }
        });
      }

      return _get(_getPrototypeOf(DateTimeComponent.prototype), "checkValidity", this).call(this, data, dirty, rowData);
    }
  }, {
    key: "getValueAsString",
    value: function getValueAsString(value) {
      var format = _utils["default"].convertFormatToMoment(this.component.format);

      return (value ? (0, _moment["default"])(value).format(format) : value) || '';
    }
  }], [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _Input2["default"].schema.apply(_Input2["default"], [{
        type: 'datetime',
        label: 'Date / Time',
        key: 'dateTime',
        format: 'yyyy-MM-dd hh:mm a',
        useLocaleSettings: false,
        allowInput: true,
        enableDate: true,
        enableTime: true,
        defaultValue: '',
        defaultDate: '',
        displayInTimezone: 'viewer',
        timezone: '',
        datepickerMode: 'day',
        datePicker: {
          showWeeks: true,
          startingDay: 0,
          initDate: '',
          minMode: 'day',
          maxMode: 'year',
          yearRows: 4,
          yearColumns: 5,
          minDate: null,
          maxDate: null
        },
        timePicker: {
          hourStep: 1,
          minuteStep: 1,
          showMeridian: true,
          readonlyInput: false,
          mousewheel: true,
          arrowkeys: true
        },
        customOptions: {}
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Date / Time',
        group: 'advanced',
        icon: 'calendar',
        documentation: '/userguide/forms/form-components#date-time',
        weight: 40,
        schema: DateTimeComponent.schema()
      };
    }
  }]);

  return DateTimeComponent;
}(_Input2["default"]);

exports["default"] = DateTimeComponent;