"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.for-each.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.array.some.js");

require("core-js/modules/es.array.is-array.js");

require("core-js/modules/es.date.to-string.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.array.join.js");

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.define-property.js");

var _EventEmitter = _interopRequireDefault(require("./EventEmitter"));

var _Formio = require("./Formio");

var FormioUtils = _interopRequireWildcard(require("./utils/utils"));

var _i18next = _interopRequireDefault(require("i18next"));

var _lodash = _interopRequireDefault(require("lodash"));

var _moment = _interopRequireDefault(require("moment"));

var _vanillaTextMask = _interopRequireDefault(require("@formio/vanilla-text-mask"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The root component for all elements within the Form.io renderer.
 */
var Element = /*#__PURE__*/function () {
  function Element(options) {
    _classCallCheck(this, Element);

    /**
     * The options for this component.
     * @type {{}}
     */
    this.options = Object.assign({
      language: 'en',
      highlightErrors: true,
      componentErrorClass: 'formio-error-wrapper',
      componentWarningClass: 'formio-warning-wrapper',
      row: '',
      namespace: 'formio'
    }, options || {});
    /**
     * The ID of this component. This value is auto-generated when the component is created, but
     * can also be provided from the component.id value passed into the constructor.
     * @type {string}
     */

    this.id = FormioUtils.getRandomComponentId();
    /**
     * An array of event handlers so that the destry command can deregister them.
     * @type {Array}
     */

    this.eventHandlers = []; // Use the i18next that is passed in, otherwise use the global version.

    this.i18next = this.options.i18next || _i18next["default"];
    /**
     * An instance of the EventEmitter class to handle the emitting and registration of events.
     *
     * @type {EventEmitter}
     */

    this.events = options && options.events ? options.events : new _EventEmitter["default"]();
    this.defaultMask = null;
    /**
     * Conditional to show or hide helplinks in editForm
     *
     * @type {*|boolean}
     */

    this.helplinks = this.options.helplinks === 'false' ? false : this.options.helplinks || 'https://help.form.io';
  }
  /**
   * Register for a new event within this component.
   *
   * @example
   * let component = new BaseComponent({
   *   type: 'textfield',
   *   label: 'First Name',
   *   key: 'firstName'
   * });
   * component.on('componentChange', (changed) => {
   *   console.log('this element is changed.');
   * });
   *
   *
   * @param {string} event - The event you wish to register the handler for.
   * @param {function} cb - The callback handler to handle this event.
   */


  _createClass(Element, [{
    key: "on",
    value: function on(event, cb, internal) {
      var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!this.events) {
        return;
      }

      var type = "".concat(this.options.namespace, ".").concat(event); // Store the component id in the handler so that we can determine which events are for this component.

      cb.id = this.id;
      cb.key = this.key;
      cb.internal = internal; // Register for this event.

      return this.events[once ? 'once' : 'on'](type, cb);
    }
    /**
     * Register for a new single-fire event within this component.
     *
     * @param {string} event - The event you wish to register the handler for.
     * @param {function} cb - The callback handler to handle this event.
     */

  }, {
    key: "once",
    value: function once(event, cb, internal) {
      return this.on(event, cb, internal, true);
    }
    /**
     * Allow catching any event.
     *
     * @param cb
     * @returns {this}
     */

  }, {
    key: "onAny",
    value: function onAny(cb) {
      if (!this.events) {
        return;
      }

      return this.events.onAny(cb);
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @param cb
     * @returns {this}
     */

  }, {
    key: "offAny",
    value: function offAny(cb) {
      if (!this.events) {
        return;
      }

      return this.events.offAny(cb);
    }
    /**
     * Removes a listener for a certain event. Not passing the 2nd arg will remove all listeners for that event.
     *
     * @param {string} event - The event you wish to register the handler for.
     * @param {function|undefined} cb - The callback handler to handle this event.
     */

  }, {
    key: "off",
    value: function off(event, cb) {
      var _this = this;

      if (!this.events) {
        return;
      }

      var type = "".concat(this.options.namespace, ".").concat(event);
      this.events.listeners(type).forEach(function (listener) {
        // Ensure the listener is for this element
        if (!listener || listener.id !== _this.id) {
          return;
        } // If there is a given callback, only deal with the match


        if (cb && cb !== listener) {
          return;
        }

        _this.events.off(type, listener);
      });
    }
    /**
     * Emit a new event.
     *
     * @param {string} event - The event to emit.
     * @param {Object} data - The data to emit with the handler.
     */

  }, {
    key: "emit",
    value: function emit(event) {
      if (this.events) {
        var _this$events;

        for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          data[_key - 1] = arguments[_key];
        }

        (_this$events = this.events).emit.apply(_this$events, ["".concat(this.options.namespace, ".").concat(event)].concat(data));
      }
    }
    /**
     * Check if the component has an event handler set up for the event.
     *
     * @param {string} event - The event name.
     * @returns {boolean}
     */

  }, {
    key: "hasEventHandler",
    value: function hasEventHandler(event) {
      var _this2 = this;

      if (!this.events) {
        return false;
      }

      var type = "".concat(this.options.namespace, ".").concat(event);
      return this.events.listeners(type).some(function (listener) {
        if (!listener) {
          return false;
        }

        return listener.id === _this2.id || listener.key === _this2.key;
      });
    }
    /**
     * Wrapper method to add an event listener to an HTML element.
     *
     * @param obj
     *   The DOM element to add the event to.
     * @param type
     *   The event name to add.
     * @param func
     *   The callback function to be executed when the listener is triggered.
     * @param persistent
     *   If this listener should persist beyond "destroy" commands.
     */

  }, {
    key: "addEventListener",
    value: function addEventListener(obj, type, func, persistent) {
      if (!obj) {
        return;
      }

      if (!persistent) {
        this.eventHandlers.push({
          id: this.id,
          obj: obj,
          type: type,
          func: func
        });
      }

      if ('addEventListener' in obj) {
        obj.addEventListener(type, func, false);
      } else if ('attachEvent' in obj) {
        obj.attachEvent("on".concat(type), func);
      }

      return this;
    }
    /**
     * Remove an event listener from the object.
     *
     * @param obj
     * @param type
     */

  }, {
    key: "removeEventListener",
    value: function removeEventListener(obj, type) {
      var _this3 = this;

      var func = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var indexes = [];

      if (!obj) {
        return;
      }

      this.eventHandlers.forEach(function (handler, index) {
        if (handler.id === _this3.id && obj.removeEventListener && handler.type === type && (!func || handler.func === func)) {
          obj.removeEventListener(type, handler.func);
          indexes.push(index);
        }
      });

      if (indexes.length) {
        _lodash["default"].pullAt(this.eventHandlers, indexes);
      }

      return this;
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      var _this4 = this;

      this.eventHandlers.forEach(function (handler) {
        if (_this4.id === handler.id && handler.type && handler.obj && handler.obj.removeEventListener) {
          handler.obj.removeEventListener(handler.type, handler.func);
        }
      });
      this.eventHandlers = [];
    }
  }, {
    key: "removeAllEvents",
    value: function removeAllEvents(includeExternal) {
      var _this5 = this;

      _lodash["default"].each(this.events._events, function (events, type) {
        _lodash["default"].each(events, function (listener) {
          if (listener && _this5.id === listener.id && (includeExternal || listener.internal)) {
            _this5.events.off(type, listener);
          }
        });
      });
    }
    /**
     * Removes all event listeners attached to this component.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.removeEventListeners();
      this.removeAllEvents();
    }
    /**
     * Append an HTML DOM element to a container.
     *
     * @param element
     * @param container
     */

  }, {
    key: "appendTo",
    value: function appendTo(element, container) {
      container === null || container === void 0 ? void 0 : container.appendChild(element);
      return this;
    }
    /**
     * Prepend an HTML DOM element to a container.
     *
     * @param {HTMLElement} element - The DOM element to prepend.
     * @param {HTMLElement} container - The DOM element that is the container of the element getting prepended.
     */

  }, {
    key: "prependTo",
    value: function prependTo(element, container) {
      if (container) {
        if (container.firstChild) {
          try {
            container.insertBefore(element, container.firstChild);
          } catch (err) {
            console.warn(err);
            container.appendChild(element);
          }
        } else {
          container.appendChild(element);
        }
      }

      return this;
    }
    /**
     * Removes an HTML DOM element from its bounding container.
     *
     * @param {HTMLElement} element - The element to remove.
     * @param {HTMLElement} container - The DOM element that is the container of the element to remove.
     */

  }, {
    key: "removeChildFrom",
    value: function removeChildFrom(element, container) {
      if (container && container.contains(element)) {
        try {
          container.removeChild(element);
        } catch (err) {
          console.warn(err);
        }
      }

      return this;
    }
    /**
     * Alias for document.createElement.
     *
     * @param {string} type - The type of element to create
     * @param {Object} attr - The element attributes to add to the created element.
     * @param {Various} children - Child elements. Can be a DOM Element, string or array of both.
     *
     * @return {HTMLElement} - The created element.
     */

  }, {
    key: "ce",
    value: function ce(type, attr) {
      var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      // console.warn('Call to deprecated this.ce(). Dom elements should be created with templates, not manually with ce.');
      // Create the element.
      var element = document.createElement(type); // Add attributes.

      if (attr) {
        this.attr(element, attr);
      } // Append the children.


      this.appendChild(element, children);
      return element;
    }
    /**
     * Append different types of children.
     *
     * @param child
     */

  }, {
    key: "appendChild",
    value: function appendChild(element, child) {
      var _this6 = this;

      if (Array.isArray(child)) {
        child.forEach(function (oneChild) {
          return _this6.appendChild(element, oneChild);
        });
      } else if (child instanceof HTMLElement || child instanceof Text) {
        element.appendChild(child);
      } else if (child) {
        element.appendChild(this.text(child.toString()));
      }

      return this;
    }
    /**
     * Creates a new input mask placeholder.
     * @param {HTMLElement} mask - The input mask.
     * @returns {string} - The placeholder that will exist within the input as they type.
     */

  }, {
    key: "maskPlaceholder",
    value: function maskPlaceholder(mask) {
      var _this7 = this;

      return mask.map(function (_char) {
        return _char instanceof RegExp ? _this7.placeholderChar : _char;
      }).join('');
    }
  }, {
    key: "placeholderChar",
    get: function get() {
      var _this$component;

      return ((_this$component = this.component) === null || _this$component === void 0 ? void 0 : _this$component.inputMaskPlaceholderChar) || '_';
    }
    /**
     * Sets the input mask for an input.
     *
     * @param {HTMLElement} input - The html input to apply the mask to.
     * @param {String} inputMask - The input mask to add to this input.
     * @param {Boolean} usePlaceholder - Set the mask placeholder on the input.
     */

  }, {
    key: "setInputMask",
    value: function setInputMask(input, inputMask, usePlaceholder) {
      if (input && inputMask) {
        var mask = FormioUtils.getInputMask(inputMask, this.placeholderChar);
        this.defaultMask = mask;

        try {
          //destroy previous mask
          if (input.mask) {
            input.mask.destroy();
          }

          input.mask = (0, _vanillaTextMask["default"])({
            inputElement: input,
            mask: mask,
            placeholderChar: this.placeholderChar,
            shadowRoot: this.root ? this.root.shadowRoot : null
          });
        } catch (e) {
          // Don't pass error up, to prevent form rejection.
          // Internal bug of vanilla-text-mask on iOS (`selectionEnd`);
          console.warn(e);
        }

        if (mask.numeric) {
          input.setAttribute('pattern', '\\d*');
        }

        if (usePlaceholder) {
          input.setAttribute('placeholder', this.maskPlaceholder(mask));
        }
      }
    }
    /**
     * Translate a text using the i18n system.
     *
     * @param {string|Array<string>} text - The i18n identifier.
     * @param {Object} params - The i18n parameters to use for translation.
     */

  }, {
    key: "t",
    value: function t(text) {
      var _this$i18next;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_this$i18next = this.i18next).t.apply(_this$i18next, [text].concat(args));
    }
    /**
     * Alias to create a text node.
     * @param text
     * @returns {Text}
     */

  }, {
    key: "text",
    value: function text(_text) {
      return document.createTextNode(this.t(_text));
    }
    /**
     * Adds an object of attributes onto an element.
     * @param {HtmlElement} element - The element to add the attributes to.
     * @param {Object} attr - The attributes to add to the input element.
     */

  }, {
    key: "attr",
    value: function attr(element, _attr) {
      var _this8 = this;

      if (!element) {
        return;
      }

      _lodash["default"].each(_attr, function (value, key) {
        if (typeof value !== 'undefined') {
          if (key.indexOf('on') === 0) {
            // If this is an event, add a listener.
            _this8.addEventListener(element, key.substr(2).toLowerCase(), value);
          } else {
            // Otherwise it is just an attribute.
            element.setAttribute(key, value);
          }
        }
      });
    }
    /**
     * Determines if an element has a class.
     *
     * Taken from jQuery https://j11y.io/jquery/#v=1.5.0&fn=jQuery.fn.hasClass
     */

  }, {
    key: "hasClass",
    value: function hasClass(element, className) {
      if (!element) {
        return false;
      } // Allow templates to intercept.


      className = " ".concat(className, " ");
      return " ".concat(element.className, " ").replace(/[\n\t\r]/g, ' ').indexOf(className) > -1;
    }
    /**
     * Adds a class to a DOM element.
     *
     * @param element
     *   The element to add a class to.
     * @param className
     *   The name of the class to add.
     */

  }, {
    key: "addClass",
    value: function addClass(element, className) {
      if (!element || !(element instanceof HTMLElement)) {
        return this;
      } // Allow templates to intercept.


      var classes = element.getAttribute('class');

      if (!(classes !== null && classes !== void 0 && classes.includes(className))) {
        element.setAttribute('class', "".concat(classes, " ").concat(className));
      }

      return this;
    }
    /**
     * Remove a class from a DOM element.
     *
     * @param element
     *   The DOM element to remove the class from.
     * @param className
     *   The name of the class that is to be removed.
     */

  }, {
    key: "removeClass",
    value: function removeClass(element, className) {
      if (!element || !className || !(element instanceof HTMLElement)) {
        return this;
      } // Allow templates to intercept.


      var cls = element.getAttribute('class');

      if (cls) {
        cls = cls.replace(new RegExp(" ".concat(className), 'g'), '');
        element.setAttribute('class', cls);
      }

      return this;
    }
    /**
     * Empty's an HTML DOM element.
     *
     * @param {HTMLElement} element - The element you wish to empty.
     */

  }, {
    key: "empty",
    value: function empty(element) {
      if (element) {
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
      }
    }
    /**
     * Create an evaluation context for all script executions and interpolations.
     *
     * @param additional
     * @return {*}
     */

  }, {
    key: "evalContext",
    value: function evalContext(additional) {
      var _this$options;

      return Object.assign({
        _: _lodash["default"],
        utils: FormioUtils,
        util: FormioUtils,
        user: _Formio.GlobalFormio.getUser(),
        moment: _moment["default"],
        instance: this,
        self: this,
        token: _Formio.GlobalFormio.getToken({
          decode: true
        }),
        config: this.root && this.root.form && this.root.form.config ? this.root.form.config : (_this$options = this.options) !== null && _this$options !== void 0 && _this$options.formConfig ? this.options.formConfig : {}
      }, additional, _lodash["default"].get(this.root, 'options.evalContext', {}));
    }
    /**
     * Performs an interpolation using the evaluation context of this component.
     *
     * @param string
     * @param data
     * @return {XML|string|*|void}
     */

  }, {
    key: "interpolate",
    value: function interpolate(string, data) {
      var _this9 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (typeof string !== 'function' && (this.component.content || this.component.html) && !FormioUtils.Evaluator.templateSettings.interpolate.test(string)) {
        string = FormioUtils.translateHTMLTemplate(String(string), function (value) {
          return _this9.t(value);
        });
      }

      return FormioUtils.interpolate(string, this.evalContext(data), options);
    }
    /**
     * Performs an evaluation using the evaluation context of this component.
     *
     * @param func
     * @param args
     * @param ret
     * @param tokenize
     * @return {*}
     */

  }, {
    key: "evaluate",
    value: function evaluate(func, args, ret, tokenize) {
      return FormioUtils.evaluate(func, this.evalContext(args), ret, tokenize);
    }
    /**
     * Allow for options to hook into the functionality of this renderer.
     * @return {*}
     */

  }, {
    key: "hook",
    value: function hook() {
      var name = arguments[0];

      if (this.options && this.options.hooks && this.options.hooks[name]) {
        return this.options.hooks[name].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
        // If this is an async hook instead of a sync.
        var fn = typeof arguments[arguments.length - 1] === 'function' ? arguments[arguments.length - 1] : null;

        if (fn) {
          return fn(null, arguments[1]);
        } else {
          return arguments[1];
        }
      }
    }
  }]);

  return Element;
}();

exports["default"] = Element;