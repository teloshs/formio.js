"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.object.set-prototype-of.js");

require("core-js/modules/es.function.bind.js");

require("core-js/modules/es.object.get-prototype-of.js");

var _lodash = _interopRequireDefault(require("lodash"));

var _Element2 = _interopRequireDefault(require("../Element"));

var _nativePromiseOnly = _interopRequireDefault(require("native-promise-only"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var InputWidget = /*#__PURE__*/function (_Element) {
  _inherits(InputWidget, _Element);

  var _super = _createSuper(InputWidget);

  function InputWidget(settings, component, instance, index) {
    var _this;

    _classCallCheck(this, InputWidget);

    _this = _super.call(this, settings);
    _this.valueIndex = index || 0;
    _this.componentInstance = instance;
    _this.namespace = 'formio.widget';
    _this.component = component || {};
    _this.settings = _lodash["default"].merge({}, _this.defaultSettings, settings || {});
    return _this;
  }

  _createClass(InputWidget, [{
    key: "attach",
    value: function attach(input) {
      this._input = input;
      return _nativePromiseOnly["default"].resolve();
    }
  }, {
    key: "defaultSettings",
    get: function get() {
      return {};
    }
  }, {
    key: "disabled",
    set: function set(disabled) {
      if (disabled) {
        this._input.setAttribute('disabled', 'disabled');
      } else {
        this._input.removeAttribute('disabled');
      }
    }
  }, {
    key: "input",
    get: function get() {
      return this._input;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this._input.value;
    }
  }, {
    key: "getValueAsString",
    value: function getValueAsString(value) {
      return value;
    }
  }, {
    key: "validationValue",
    value: function validationValue(value) {
      return value;
    }
  }, {
    key: "addPrefix",
    value: function addPrefix() {
      return null;
    }
  }, {
    key: "addSuffix",
    value: function addSuffix() {
      return null;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this._input.value = value;
    }
  }], [{
    key: "defaultSettings",
    get: function get() {
      return {
        type: 'input'
      };
    }
  }]);

  return InputWidget;
}(_Element2["default"]);

exports["default"] = InputWidget;