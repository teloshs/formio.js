"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.reflect.get.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/web.timers.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.number.is-nan.js");

require("core-js/modules/es.number.constructor.js");

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.object.get-prototype-of.js");

var _textMaskAddons = require("text-mask-addons");

var _vanillaTextMask = require("@formio/vanilla-text-mask");

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("../../utils/utils");

var _Number = _interopRequireDefault(require("../number/Number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var CurrencyComponent = /*#__PURE__*/function (_NumberComponent) {
  _inherits(CurrencyComponent, _NumberComponent);

  var _super = _createSuper(CurrencyComponent);

  function CurrencyComponent(component, options, data) {
    _classCallCheck(this, CurrencyComponent);

    // Currency should default to have a delimiter unless otherwise specified.
    if (component && !component.hasOwnProperty('delimiter')) {
      component.delimiter = true;
    }

    return _super.call(this, component, options, data);
  }
  /**
   * Creates the number mask for currency numbers.
   *
   * @return {*}
   */


  _createClass(CurrencyComponent, [{
    key: "createNumberMask",
    value: function createNumberMask() {
      var decimalLimit = _lodash["default"].get(this.component, 'decimalLimit', 2);

      var affixes = (0, _utils.getCurrencyAffixes)({
        currency: this.component.currency,
        decimalLimit: decimalLimit,
        decimalSeparator: this.decimalSeparator,
        lang: this.options.language
      });
      this.currencyPrefix = this.options.prefix || affixes.prefix;
      this.currencySuffix = this.options.suffix || affixes.suffix;
      return (0, _textMaskAddons.createNumberMask)({
        prefix: this.currencyPrefix,
        suffix: this.currencySuffix,
        thousandsSeparatorSymbol: _lodash["default"].get(this.component, 'thousandsSeparator', this.delimiter),
        decimalSymbol: _lodash["default"].get(this.component, 'decimalSymbol', this.decimalSeparator),
        decimalLimit: decimalLimit,
        allowNegative: _lodash["default"].get(this.component, 'allowNegative', true),
        allowDecimal: this.isDecimalAllowed()
      });
    }
  }, {
    key: "isDecimalAllowed",
    value: function isDecimalAllowed() {
      return _lodash["default"].get(this.component, 'allowDecimal', true);
    }
  }, {
    key: "setInputMask",
    value: function setInputMask(input) {
      var affixes = (0, _utils.getCurrencyAffixes)({
        currency: this.component.currency,
        decimalSeparator: this.decimalSeparator,
        lang: this.options.language
      });
      var numberPattern = "".concat(affixes.prefix, "[0-9");
      numberPattern += this.decimalSeparator || '';
      numberPattern += this.delimiter || '';
      numberPattern += ']*';
      input.setAttribute('pattern', numberPattern);
      input.mask = (0, _vanillaTextMask.maskInput)({
        inputElement: input,
        mask: this.numberMask || '',
        pipe: function pipe(conformedValue) {
          if (conformedValue === '$0._') {
            // Delay to allow mask to update first.
            setTimeout(function () {
              var caretPosition = input.value.length - 1;
              input.setSelectionRange(caretPosition, caretPosition);
            });
          }

          return conformedValue;
        },
        shadowRoot: this.root ? this.root.shadowRoot : null
      });
    }
  }, {
    key: "defaultSchema",
    get: function get() {
      return CurrencyComponent.schema();
    }
  }, {
    key: "parseNumber",
    value: function parseNumber(value) {
      return _get(_getPrototypeOf(CurrencyComponent.prototype), "parseNumber", this).call(this, this.stripPrefixSuffix(value));
    }
  }, {
    key: "parseValue",
    value: function parseValue(value) {
      return _get(_getPrototypeOf(CurrencyComponent.prototype), "parseValue", this).call(this, this.stripPrefixSuffix(value));
    }
  }, {
    key: "addZerosAndFormatValue",
    value: function addZerosAndFormatValue(value) {
      if (!value && value !== 0) return;

      var decimalLimit = _lodash["default"].get(this.component, 'decimalLimit', 2);

      var integerPart;
      var decimalPart = '';
      var decimalPartNumbers = [];
      var negativeValueSymbol = '-';
      var hasPrefix = this.currencyPrefix ? value.includes(this.currencyPrefix) : false;
      var hasSuffix = this.currencySuffix ? value.includes(this.currencySuffix) : false;
      var isNegative = value.includes(negativeValueSymbol) || false;
      value = this.stripPrefixSuffix(isNegative ? value.replace(negativeValueSymbol, '') : value);

      if (value.includes(this.decimalSeparator)) {
        var _value$split = value.split(this.decimalSeparator);

        var _value$split2 = _slicedToArray(_value$split, 2);

        integerPart = _value$split2[0];
        decimalPart = _value$split2[1];
        decimalPartNumbers = _toConsumableArray(decimalPart.split(''));
      } else {
        integerPart = value;
      }

      if (decimalPart.length < decimalLimit) {
        while (decimalPartNumbers.length < decimalLimit) {
          decimalPartNumbers.push('0');
        }
      }

      var formattedValue = "".concat(isNegative ? negativeValueSymbol : '').concat(hasPrefix ? this.currencyPrefix : '').concat(integerPart).concat(this.decimalSeparator).concat(decimalPartNumbers.join('')).concat(hasSuffix ? this.currencySuffix : '');
      return _get(_getPrototypeOf(CurrencyComponent.prototype), "formatValue", this).call(this, formattedValue);
    }
  }, {
    key: "getValueAsString",
    value: function getValueAsString(value, options) {
      var stringValue = _get(_getPrototypeOf(CurrencyComponent.prototype), "getValueAsString", this).call(this, value, options); // eslint-disable-next-line eqeqeq


      if (value || value == '0') {
        return this.addZerosAndFormatValue(stringValue);
      }

      return stringValue;
    }
  }, {
    key: "formatValue",
    value: function formatValue(value) {
      if (value || value === '0') {
        return this.addZerosAndFormatValue(value);
      }

      return _get(_getPrototypeOf(CurrencyComponent.prototype), "formatValue", this).call(this, value);
    }
  }, {
    key: "stripPrefixSuffix",
    value: function stripPrefixSuffix(value) {
      if (typeof value === 'string') {
        try {
          var hasPrefix = this.currencyPrefix ? value.includes(this.currencyPrefix) : false;
          var hasSuffix = this.currencySuffix ? value.includes(this.currencySuffix) : false;
          var hasDelimiter = value.includes(this.delimiter);
          var hasDecimalSeparator = value.includes(this.decimalSeparator);

          if (this.currencyPrefix) {
            value = value.replace(this.currencyPrefix, '');
          }

          if (this.currencySuffix) {
            value = value.replace(this.currencySuffix, '');
          } //when we enter $ in the field using dashboard, it contains '_' that is NaN


          if ((hasPrefix || hasSuffix) && !hasDelimiter && !hasDecimalSeparator && (Number.isNaN(+value) || !value)) {
            value = '0';
          }
        } catch (err) {// If value doesn't have a replace method, continue on as before.
        }
      }

      return value;
    }
  }, {
    key: "addFocusBlurEvents",
    value: function addFocusBlurEvents(element) {
      var _this = this;

      _get(_getPrototypeOf(CurrencyComponent.prototype), "addFocusBlurEvents", this).call(this, element);

      this.addEventListener(element, 'focus', function () {
        if (element.defaultValue === element.value) {
          element.setSelectionRange(0, element.defaultValue.length);
        }
      });
      this.addEventListener(element, 'blur', function () {
        element.value = _this.getValueAsString(_this.addZerosAndFormatValue(_this.parseValue(element.value)));
      });
    }
  }], [{
    key: "schema",
    value: function schema() {
      for (var _len = arguments.length, extend = new Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _Number["default"].schema.apply(_Number["default"], [{
        type: 'currency',
        label: 'Currency',
        key: 'currency'
      }].concat(extend));
    }
  }, {
    key: "builderInfo",
    get: function get() {
      return {
        title: 'Currency',
        group: 'advanced',
        icon: 'usd',
        documentation: '/userguide/forms/form-components#currency',
        weight: 70,
        schema: CurrencyComponent.schema()
      };
    }
  }]);

  return CurrencyComponent;
}(_Number["default"]);

exports["default"] = CurrencyComponent;