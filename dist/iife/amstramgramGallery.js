var AmstramgramGallery = (function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);
    _classCheckPrivateStaticFieldDescriptor(descriptor, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);
    _classCheckPrivateStaticFieldDescriptor(descriptor, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
  function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    _classCheckPrivateStaticAccess(receiver, classConstructor);
    return method;
  }
  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
  function _classCheckPrivateStaticAccess(receiver, classConstructor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
  }
  function _classCheckPrivateStaticFieldDescriptor(descriptor, action) {
    if (descriptor === undefined) {
      throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
  }
  function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  function _classPrivateMethodInitSpec(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
  }

  var _events = /*#__PURE__*/new WeakMap();
  var _eventsNames = /*#__PURE__*/new WeakMap();
  var _registerEvents = /*#__PURE__*/new WeakSet();
  var _updateEvents = /*#__PURE__*/new WeakSet();
  var _unregisterAll = /*#__PURE__*/new WeakSet();
  var _unregisterEvent = /*#__PURE__*/new WeakSet();
  var _unregisterCallback = /*#__PURE__*/new WeakSet();
  var AmstramgramEventEmitterLight = /*#__PURE__*/function () {
    /***********************************
     *           CONSTRUCTOR           *
     ***********************************/
    function AmstramgramEventEmitterLight() {
      _classCallCheck(this, AmstramgramEventEmitterLight);
      /**
       * Utility function to remove a specific callback of a given event
       * @param {String} eventName 
       * @param {Function} callback : callback to be removed for the given event
       * @param {Boolean} internal : true if called from the internal private function #unregisterEvent
       */
      _classPrivateMethodInitSpec(this, _unregisterCallback);
      /**
       * Utility function to remove all the callbacks of a given event
       * @param {String} eventName : event to be cleaned
       */
      _classPrivateMethodInitSpec(this, _unregisterEvent);
      /**
       * Utility function to remove all the events and their callbacks
       */
      _classPrivateMethodInitSpec(this, _unregisterAll);
      /**
       * Update #eventsNames
       * each time an event/callback is added or removed
       */
      _classPrivateMethodInitSpec(this, _updateEvents);
      /***********************************
       *        PRIVATE METHODS          *
       ***********************************/
      /**
       * Utility function to register events/callbacks set with the on() and once() methods
       * @param {String} eventsNames 
       * @param {Function} callback 
       */
      _classPrivateMethodInitSpec(this, _registerEvents);
      /***********************************
       *             PRIVATE             *
       ***********************************/
      /**
       * @description Associates eventNames and their callbacks
       * @property eventName
       * @value {Set} set of callbacks
       */
      _classPrivateFieldInitSpec(this, _events, {
        writable: true,
        value: {}
      });
      //Stores all the registered eventNames
      _classPrivateFieldInitSpec(this, _eventsNames, {
        writable: true,
        value: new Set()
      });
    }

    /***********************************
     *              GETTERS            *
     ***********************************/
    /**
     * @return {Object}
     * Returns an object which contains all the registered events and their callbacks
     * {
     *  eventName01 :  set listing the registered callbacks,
     *  ......
     *  eventName0n : set listing the registered callbacks
     * }
     */
    _createClass(AmstramgramEventEmitterLight, [{
      key: "eventsAndCallbacks",
      get: function get() {
        return _classPrivateFieldGet(this, _events);
      }

      /**
       * @return {Set}
       * Return a Set of all the registered events names
       */
    }, {
      key: "events",
      get: function get() {
        return _classPrivateFieldGet(this, _eventsNames);
      }

      /***********************************
       *              METHODS            *
       ***********************************/
      /**
       * @param {String} eventsNames : list of events names separated by a space
       * @param {Function} callback : callback to be registered for the given events
       * @returns this so methods can be chained
       */
    }, {
      key: "on",
      value: function on(eventsNames, callback) {
        _classPrivateMethodGet(this, _registerEvents, _registerEvents2).call(this, eventsNames, callback);
        return this;
      }

      /**
       * @param {String | function} [eventsNames = ''] : list of events names separated by a space
       * If empty string, all the callbacks for all the events are unregistered
       * If it's a function, it's treated as a callback. This callback is removed for all registered events.
       * @param {Function} [callback = undefined] - callback to be unregistered for the given events
       * If undefined, all the callbacks for all the given events are unregistered
       * @returns this so methods can be chained
       */
    }, {
      key: "off",
      value: function off() {
        var _this = this;
        var eventsNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        if (typeof eventsNames === 'string') {
          if (eventsNames == '') {
            _classPrivateMethodGet(this, _unregisterAll, _unregisterAll2).call(this);
          } else {
            eventsNames.split(' ').forEach(function (eventName) {
              if (callback == undefined) {
                _classPrivateMethodGet(_this, _unregisterEvent, _unregisterEvent2).call(_this, eventName);
              } else {
                _classPrivateMethodGet(_this, _unregisterCallback, _unregisterCallback2).call(_this, eventName, callback);
              }
            });
          }
        } else if (typeof eventsNames === 'function') {
          _classPrivateFieldGet(this, _eventsNames).forEach(function (eventName) {
            return _classPrivateMethodGet(_this, _unregisterCallback, _unregisterCallback2).call(_this, eventName, eventsNames);
          });
        }
        return this;
      }

      /**
       * @param {String} eventName 
       * @param  {...any} args applied to the callbacks
       * @returns this so methods can be chained
       */
    }, {
      key: "emit",
      value: function emit(eventName) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        if (typeof _classPrivateFieldGet(this, _events)[eventName] !== "undefined") {
          //https://underscorejs.org/docs/modules/isObject.html
          var isObject = function isObject(obj) {
            var type = _typeof(obj);
            return type === 'function' || type === 'object' && !!obj;
          };
          _classPrivateFieldGet(this, _events)[eventName].forEach(function (callback) {
            //If there is only one argument and if it's an object
            if (args.length == 1 && isObject(args[0])) {
              //Add a eventName property holding the event name
              args[0].eventName = eventName;
            } else {
              //Add the event name to the list of argument
              args.push(eventName);
            }
            callback.apply(this, args);
          }.bind(this));
        }
        return this;
      }
    }]);
    return AmstramgramEventEmitterLight;
  }();
  function _registerEvents2(eventsNames, callback) {
    var _this2 = this;
    eventsNames.split(' ').forEach(function (eventName) {
      //Build a new set of all the registered callbacks for eventName
      var callbacks = _classPrivateFieldGet(_this2, _events)[eventName] || new Set();
      if (!callbacks.has(callback)) {
        //If the callback is not yet registered
        var set = _classPrivateFieldGet(_this2, _events)[eventName] || (_classPrivateFieldGet(_this2, _events)[eventName] = new Set());
        set.add(callback);
        _classPrivateMethodGet(_this2, _updateEvents, _updateEvents2).call(_this2);
      }
    });
  }
  function _updateEvents2() {
    _classPrivateFieldSet(this, _eventsNames, new Set(_toConsumableArray(Object.keys(_classPrivateFieldGet(this, _events)))));
  }
  function _unregisterAll2() {
    var _this3 = this;
    Object.keys(_classPrivateFieldGet(this, _events)).forEach(function (eventName) {
      return _classPrivateMethodGet(_this3, _unregisterEvent, _unregisterEvent2).call(_this3, eventName);
    });
  }
  function _unregisterEvent2(eventName) {
    var _this4 = this;
    if (typeof _classPrivateFieldGet(this, _events)[eventName] !== "undefined") {
      _classPrivateFieldGet(this, _events)[eventName].forEach(function (callback) {
        _classPrivateMethodGet(_this4, _unregisterCallback, _unregisterCallback2).call(_this4, eventName, callback, true);
      });
    }
  }
  function _unregisterCallback2(eventName, callback) {
    var internal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (internal || typeof _classPrivateFieldGet(this, _events)[eventName] !== "undefined") {
      _classPrivateFieldGet(this, _events)[eventName].delete(callback);
      if (_classPrivateFieldGet(this, _events)[eventName].size == 0) delete _classPrivateFieldGet(this, _events)[eventName];
      _classPrivateMethodGet(this, _updateEvents, _updateEvents2).call(this);
    }
  }

  var _currentPointerType = /*#__PURE__*/new WeakMap();
  var _pointerEventsInterface = /*#__PURE__*/new WeakMap();
  var _changeCallbacks = /*#__PURE__*/new WeakMap();
  var _init = /*#__PURE__*/new WeakMap();
  //cSpell:words amstramgram amst
  /**
   * @class APD
   * @description Singleton in charge of pointer events names standardization
   * @example :
      //Add the amst__mouse class to the body when the current pointer used is a mouse
      import aPD from './import/aPD.js'
      aPD.mouseClass('amst__mouse')
   * 
   * 
   * 
   */
  var APD = /*#__PURE__*/function () {
    /* -------------------------------------------------------------------------- */
    /*                                  GETTERS                                   */
    /* -------------------------------------------------------------------------- */
    /**
     * @getter type
     * @returns {string} "pen", "mouse" or "touch"
     */

    /**
     * @getter interface
     * @returns {string} "pointer", "touch" or "mouse"
     */

    /* -------------------------------------------------------------------------- */
    /*                                 CONSTRUCTOR                                */
    /* -------------------------------------------------------------------------- */
    function APD() {
      var _this = this;
      _classCallCheck(this, APD);
      /* -------------------------------------------------------------------------- */
      /*                               PRIVATE FIELDS                               */
      /* -------------------------------------------------------------------------- */
      //Stores the current pointer type ("pen", "touch" or "mouse")
      _classPrivateFieldInitSpec(this, _currentPointerType, {
        writable: true,
        value: void 0
      });
      //Stores the current pointer events interface ("pointer", "touch" or "mouse")
      _classPrivateFieldInitSpec(this, _pointerEventsInterface, {
        writable: true,
        value: void 0
      });
      //Stores the callback(s) passed to the on() method
      _classPrivateFieldInitSpec(this, _changeCallbacks, {
        writable: true,
        value: new Set()
      });
      _classPrivateFieldInitSpec(this, _init, {
        writable: true,
        value: false
      });
      //If first instantiation
      if (!APD.aPD) {
        var w = window,
          on = function on(e, callback) {
            return w.addEventListener(e, callback);
          };
        /*
          If PointerEvent is detected, pointerEventsInterface is set to 'pointer'.
          If not and if TouchEvent is detected, pointerEventsInterface is set to 'touch'.
          Finally, if neither PointerEvent nor TouchEvent are detected, pointerEventsInterface is set to 'mouse'.
        */
        _classPrivateFieldSet(this, _pointerEventsInterface, w.PointerEvent ? 'pointer' : w.TouchEvent ? 'touch' : 'mouse');

        //By default, we set the currentPointerType as touch
        //unless the detected pointerEventsInterface is 'mouse'
        _classPrivateFieldSet(this, _currentPointerType, _classPrivateFieldGet(this, _pointerEventsInterface) == 'mouse' ? 'mouse' : 'touch');

        /*
          If the browser supports pointer events API, we have to know whether mouse is used or not to adapt the UI accordingly.
          When a change is detected, all the functions registered by the on method are executed.
        */
        if (_classPrivateFieldGet(this, _pointerEventsInterface) == 'pointer') {
          //Listening function
          var getPointerType = function getPointerType(e) {
            var type = e.pointerType;
            if (type == _classPrivateFieldGet(_this, _currentPointerType) && _classPrivateFieldGet(_this, _init)) return false;
            _classPrivateFieldSet(_this, _init, true);
            //If the pointer type is now mouse 
            if (type == 'mouse') {
              //We don't need anymore to watch the pointermove event.
              //Indeed, if the pointer changes from mouse to touch,
              //the pointerdown event will be triggered before the pointermove event.
              w.removeEventListener('pointermove', getPointerType);
            } else {
              //We're now waiting for a mouse event
              //We listen to the pointermove event which will be triggered
              //before pointerdown if the pointer changes from touch to mouse
              //window.addEventListener('pointermove', getPointerType)
              on('pointermove', getPointerType);
            }
            //Store the new detected pointerType
            _classPrivateFieldSet(_this, _currentPointerType, type);
            //Execute the registered callbacks
            _classPrivateFieldGet(_this, _changeCallbacks).forEach(function (fn) {
              return fn.apply(_this, [type]);
            });
          };
          //By default, we have defined the currentPointerType as touch
          //So we listen to the pointermove event to detect future mouse event
          //w.addEventListener('pointermove', getPointerType)
          on('pointermove', getPointerType);
          //And we listen to the pointerdown event
          //to detect if pointer type is 'pen' or 'touch'
          //w.addEventListener('pointerdown', getPointerType)
          on('pointerdown', getPointerType);
        }
        APD.aPD = this;
      }
      return APD.aPD;
    }
    /* -------------------------------------------------------------------------- */
    /*                               END CONSTRUCTOR                              */
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                   GETTERS                                  */
    /* -------------------------------------------------------------------------- */
    /**
     * @getter type
     * @returns {string} "mouse", "pen" or "touch"
     */
    _createClass(APD, [{
      key: "type",
      get: function get() {
        return _classPrivateFieldGet(this, _currentPointerType);
      }

      /**
       * @getter interface
       * @returns {string} "mouse", "pointer" or "touch"
       */
    }, {
      key: "interface",
      get: function get() {
        return _classPrivateFieldGet(this, _pointerEventsInterface);
      }

      /* -------------------------------------------------------------------------- */
      /*                                 END GETTERS                                */
      /* -------------------------------------------------------------------------- */

      /* -------------------------------------------------------------------------- */
      /*                               PUBLIC METHODS                               */
      /* -------------------------------------------------------------------------- */

      /**
       * @param {String} mouseClass 
       * @param {HTMLElement} [el = document.body ] 
       * @description add the mouseClass class to the HTMLElement el when mouse is detected
       */
    }, {
      key: "class",
      value: function _class(mouseClass) {
        var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
        var add = function add(_) {
          return el.classList.add(mouseClass);
        };
        if (_classPrivateFieldGet(this, _pointerEventsInterface) == 'pointer') {
          var onPointerChange = function onPointerChange(e) {
            return e == 'mouse' ? add() : el.classList.remove(mouseClass);
          };
          this.on(onPointerChange);
          onPointerChange(_classPrivateFieldGet(this, _currentPointerType));
        } else if (_classPrivateFieldGet(this, _pointerEventsInterface) == 'mouse') add();
        return this;
      }

      /**
       * @param {function} : function to be called when pointerType changes
       */
    }, {
      key: "on",
      value: function on(fn) {
        _classPrivateFieldGet(this, _changeCallbacks).add(fn);
        return this;
      }

      /**
       * @param {function} : remove the given function from the on callbacks
       */
    }, {
      key: "off",
      value: function off(fn) {
        _classPrivateFieldGet(this, _changeCallbacks).delete(fn);
        return this;
      }
      /* -------------------------------------------------------------------------- */
      /*                                  END CLASS                                 */
      /* -------------------------------------------------------------------------- */
    }]);
    return APD;
  }(); //Creating, freezing and exporting an unique instance
  var PD = Object.freeze(new APD());

  //Minify optimization
  var w$1 = window,
    p = 'pointer',
    t = 'touch',
    m = 'mouse';
  var _el = /*#__PURE__*/new WeakMap();
  var _pointerType = /*#__PURE__*/new WeakMap();
  var _moveEvent = /*#__PURE__*/new WeakMap();
  var _endEvent = /*#__PURE__*/new WeakMap();
  var _cancelEvent = /*#__PURE__*/new WeakMap();
  var _active = /*#__PURE__*/new WeakMap();
  var _t = /*#__PURE__*/new WeakMap();
  var _originalEvent = /*#__PURE__*/new WeakMap();
  var _startPageX = /*#__PURE__*/new WeakMap();
  var _startPageY = /*#__PURE__*/new WeakMap();
  var _startClientX = /*#__PURE__*/new WeakMap();
  var _startClientY = /*#__PURE__*/new WeakMap();
  var _currentPageX = /*#__PURE__*/new WeakMap();
  var _currentPageY = /*#__PURE__*/new WeakMap();
  var _currentClientX = /*#__PURE__*/new WeakMap();
  var _currentClientY = /*#__PURE__*/new WeakMap();
  var _previousClientX = /*#__PURE__*/new WeakMap();
  var _previousClientY = /*#__PURE__*/new WeakMap();
  var _deltaX = /*#__PURE__*/new WeakMap();
  var _deltaY = /*#__PURE__*/new WeakMap();
  var _threshold = /*#__PURE__*/new WeakMap();
  var _abs = /*#__PURE__*/new WeakSet();
  var _on = /*#__PURE__*/new WeakSet();
  var _off = /*#__PURE__*/new WeakSet();
  var _dispatch = /*#__PURE__*/new WeakSet();
  var _unregisterEvents = /*#__PURE__*/new WeakSet();
  var _start = /*#__PURE__*/new WeakMap();
  var _cancel = /*#__PURE__*/new WeakMap();
  var _move = /*#__PURE__*/new WeakMap();
  var _end = /*#__PURE__*/new WeakMap();
  var _getEventData = /*#__PURE__*/new WeakSet();
  var _checkOptions = /*#__PURE__*/new WeakSet();
  var _activate = /*#__PURE__*/new WeakSet();
  var SO = /*#__PURE__*/function () {
    /* -------------------------------------------------------------------------- */
    /*                          END PRIVATE METHODS                               */
    /*                              CONSTRUCTOR                                   */
    /* -------------------------------------------------------------------------- */
    /**
     * 
     * @param {HTMLElement} el : element to observe
     * @param {Object} opt
     *    @property {Boolean} [active = false] - If true, activate the swipe listener
     *    @property {Integer} [threshold = 20] - Minimum distance in pixels between the start and the end of the movement to detect a swipe
     */
    function SO(el) {
      var _this = this;
      var _opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, SO);
      /**
       * @description: Activate the swipe listener
       */
      _classPrivateMethodInitSpec(this, _activate);
      /**
       * @description: Validate the options passed to the constructor or to the on() method
       * @param {Object} opt
       *    @property {Integer} [threshold = 20] - Minimum distance in pixels between the start and the end of the movement to detect a swipe
       */
      _classPrivateMethodInitSpec(this, _checkOptions);
      /**
       * @description: Build the eventData object
       * @returns {Object} eventData
       *    @property {Object} client
       *        @property {Number} x - initial event clientX 
       *        @property {Number} y - initial event clientY
       *    @property {Object} delta
       *        @property {Number} x - horizontal distance traveled from the start
       *        @property {Number} y - vertical distance traveled from the start
       *    @property {String} direction - 'left', 'right', 'up' or 'down'
       *    @property {Integer} duration - Time elapsed since the start
       *    @property {String} orientation - 'hor' or 'vert'
       *    @property {TouchEvent | MouseEvent} original - Original event
       *    @property {Object} page
       *        @property {Number} x - initial event pageX 
       *        @property {Number} y - initial event pageY
       *    @property {String} pointerType - 'mouse', 'pen' or 'touch'
       */
      _classPrivateMethodInitSpec(this, _getEventData);
      /**
       * @description: unregister move, end and cancel events
       * Called when swipe ends or by the off() method
       */
      _classPrivateMethodInitSpec(this, _unregisterEvents);
      /**
       * @description: just a shortcut for dispatching event
       * @param {Event} e event to dispatch
       * @param {String} [name = 'swiping'] 'swiping' or 'swipe' 
       */
      _classPrivateMethodInitSpec(this, _dispatch);
      /**
       * @description: just a shortcut for removing event listener to the observed element
       * @param {String} event 
       * @param {Function} callback 
       * @returns this
       */
      _classPrivateMethodInitSpec(this, _off);
      /**
       * @description: just a shortcut for adding event listener to the observed element
       * @param {String} event 
       * @param {Function} callback 
       * @returns this
       */
      _classPrivateMethodInitSpec(this, _on);
      //Minimum distance for a swipe
      /* -------------------------------------------------------------------------- */
      /*                           END PRIVATE VARIABLES                            */
      /*                              PRIVATE METHODS                               */
      /* -------------------------------------------------------------------------- */
      /**
       * 
       * @description: just a shortcut for Math.abs
       * @param {Number} n 
       * @returns absolute value of n
       */
      _classPrivateMethodInitSpec(this, _abs);
      /* -------------------------------------------------------------------------- */
      /*                       END PRIVATE STATIC VARIABLES                           */
      /*                            PRIVATE VARIABLES                               */
      /* -------------------------------------------------------------------------- */
      //HTML element to be observed
      _classPrivateFieldInitSpec(this, _el, {
        writable: true,
        value: null
      });
      //Hold the name of the pointer type used : 'mouse', 'pen' or 'touch'
      //If the browser supports the PointerEvents interface, 
      //#pointerType is updated by the pointerType property of the starting event
      //Else if the browser supports the TouchEvents interface, #pointerType is 'touch'
      //Else #pointerType is 'mouse'
      _classPrivateFieldInitSpec(this, _pointerType, {
        writable: true,
        value: _classStaticPrivateFieldSpecGet(SO, SO, _pointerInterface) == t ? t : m
      });
      //Hold the name of the moving event accordingly to the pointer type detected
      //Is 'mousemove' if pointer type is 'mouse', 'touchmove' otherwise
      _classPrivateFieldInitSpec(this, _moveEvent, {
        writable: true,
        value: void 0
      });
      //Hold the name of the ending event accordingly to the pointer type detected
      //Is 'mouseup' if pointer type is 'mouse', 'touchend' otherwise
      _classPrivateFieldInitSpec(this, _endEvent, {
        writable: true,
        value: void 0
      });
      //Hold the name of the cancelling event accordingly to the pointer type detected
      //Is 'mouseleave' if pointer type is 'mouse', 'touchcancel' otherwise
      _classPrivateFieldInitSpec(this, _cancelEvent, {
        writable: true,
        value: void 0
      });
      //Observer state
      _classPrivateFieldInitSpec(this, _active, {
        writable: true,
        value: false
      });
      //Timestamp of the beginning of the movement
      _classPrivateFieldInitSpec(this, _t, {
        writable: true,
        value: null
      });
      _classPrivateFieldInitSpec(this, _originalEvent, {
        writable: true,
        value: void 0
      });
      //PageX, pageY, clientX, clientY of the starting point of the movement
      _classPrivateFieldInitSpec(this, _startPageX, {
        writable: true,
        value: null
      });
      _classPrivateFieldInitSpec(this, _startPageY, {
        writable: true,
        value: null
      });
      _classPrivateFieldInitSpec(this, _startClientX, {
        writable: true,
        value: null
      });
      _classPrivateFieldInitSpec(this, _startClientY, {
        writable: true,
        value: null
      });
      //PageX, pageY, clientX, clientY of the current point
      _classPrivateFieldInitSpec(this, _currentPageX, {
        writable: true,
        value: null
      });
      _classPrivateFieldInitSpec(this, _currentPageY, {
        writable: true,
        value: null
      });
      _classPrivateFieldInitSpec(this, _currentClientX, {
        writable: true,
        value: null
      });
      _classPrivateFieldInitSpec(this, _currentClientY, {
        writable: true,
        value: null
      });
      //clientX, clientY of the previous point
      _classPrivateFieldInitSpec(this, _previousClientX, {
        writable: true,
        value: null
      });
      _classPrivateFieldInitSpec(this, _previousClientY, {
        writable: true,
        value: null
      });
      //Delta between starting and current positions values during the movement
      _classPrivateFieldInitSpec(this, _deltaX, {
        writable: true,
        value: 0
      });
      _classPrivateFieldInitSpec(this, _deltaY, {
        writable: true,
        value: 0
      });
      //Instance threshold set in the constructor or passed to the on method
      _classPrivateFieldInitSpec(this, _threshold, {
        writable: true,
        value: 20
      });
      /**
       * @description: Callback for 'pointerdown', 'touchstart' or 'mousedown' event
       * @param {PointerEvent | TouchEvent | MouseEvent} e
       */
      _classPrivateFieldInitSpec(this, _start, {
        writable: true,
        value: function value(e) {
          var _classPrivateMethodGe3, _classPrivateMethodGe4;
          if (_classStaticPrivateFieldSpecGet(SO, SO, _pointerInterface) == p && !e.isPrimary) return;
          _classPrivateFieldSet(_this, _originalEvent, e);
          //Store relevant data
          _classPrivateFieldSet(_this, _t, Date.now());
          e = e.touches ? e.touches[0] : e;
          _classPrivateFieldSet(_this, _startPageX, _classPrivateFieldSet(_this, _currentPageX, e.pageX));
          _classPrivateFieldSet(_this, _startPageY, _classPrivateFieldSet(_this, _currentPageY, e.pageY));
          _classPrivateFieldSet(_this, _startClientX, _classPrivateFieldSet(_this, _currentClientX, _classPrivateFieldSet(_this, _previousClientX, e.clientX)));
          _classPrivateFieldSet(_this, _startClientY, _classPrivateFieldSet(_this, _currentClientY, _classPrivateFieldSet(_this, _previousClientY, e.clientY)));
          //Reset delta values
          _classPrivateFieldSet(_this, _deltaX, _classPrivateFieldSet(_this, _deltaY, 0));
          //Update #pointerType if PointerEvents are supported
          if (e.pointerType) _classPrivateFieldSet(_this, _pointerType, e.pointerType);
          var isMouse = _classPrivateFieldGet(_this, _pointerType) == m;
          //Set listeners
          //We can't use pointermove or pointercancel
          //because the pointermove is cancelled if touch-action is not set
          _classPrivateFieldSet(_this, _moveEvent, isMouse ? "".concat(m, "move") : "".concat(t, "move"));
          _classPrivateFieldSet(_this, _cancelEvent, isMouse ? "".concat(m, "leave") : "".concat(t, "cancel"));
          _classPrivateFieldSet(_this, _endEvent, isMouse ? "".concat(m, "up") : "".concat(t, "end"));
          _classPrivateMethodGet(_classPrivateMethodGe4 = _classPrivateMethodGet(_classPrivateMethodGe3 = _classPrivateMethodGet(_this, _on, _on2).call(_this, _classPrivateFieldGet(_this, _moveEvent), _classPrivateFieldGet(_this, _move)), _on, _on2).call(_classPrivateMethodGe3, _classPrivateFieldGet(_this, _endEvent), _classPrivateFieldGet(_this, _end)), _on, _on2).call(_classPrivateMethodGe4, _classPrivateFieldGet(_this, _cancelEvent), _classPrivateFieldGet(_this, _cancel));
        }
      });
      _classPrivateFieldInitSpec(this, _cancel, {
        writable: true,
        value: function value(e) {
          _classPrivateFieldGet(_this, _end).call(_this, e, true);
        }
      });
      /**
       * @description: Callback for 'touchmove' or 'mousemove' event
       * @param {TouchEvent | MouseEvent} e
       */
      _classPrivateFieldInitSpec(this, _move, {
        writable: true,
        value: function value(e) {
          var ev = e.touches ? e.touches[0] : e;
          _classPrivateFieldSet(_this, _currentClientX, ev.clientX);
          _classPrivateFieldSet(_this, _currentClientY, ev.clientY);
          _classPrivateFieldSet(_this, _currentPageX, ev.pageX);
          _classPrivateFieldSet(_this, _currentPageY, ev.pageY);
          if (!_classPrivateFieldGet(_this, _el).contains(document.elementFromPoint(_classPrivateFieldGet(_this, _currentClientX), _classPrivateFieldGet(_this, _currentClientY)))) {
            //The pointer is outside the observed element
            _classPrivateFieldGet(_this, _cancel).call(_this, e);
          } else {
            //Compute delta values
            _classPrivateFieldSet(_this, _deltaX, _classPrivateFieldGet(_this, _currentClientX) - _classPrivateFieldGet(_this, _previousClientX));
            _classPrivateFieldSet(_this, _deltaY, _classPrivateFieldGet(_this, _currentClientY) - _classPrivateFieldGet(_this, _previousClientY));
            _classPrivateFieldSet(_this, _previousClientX, _classPrivateFieldGet(_this, _currentClientX));
            _classPrivateFieldSet(_this, _previousClientY, _classPrivateFieldGet(_this, _currentClientY));
            _classPrivateMethodGet(_this, _dispatch, _dispatch2).call(_this, e);
          }
        }
      });
      /**
       * @description: Callback for 'touchend' or 'mouseup' event
       */
      _classPrivateFieldInitSpec(this, _end, {
        writable: true,
        value: function value(e) {
          var cancelled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          //Clean event listeners
          _classPrivateMethodGet(_this, _unregisterEvents, _unregisterEvents2).call(_this);
          //Compute event data
          _classPrivateFieldSet(_this, _deltaX, _classPrivateFieldGet(_this, _currentClientX) - _classPrivateFieldGet(_this, _startClientX));
          _classPrivateFieldSet(_this, _deltaY, _classPrivateFieldGet(_this, _currentClientY) - _classPrivateFieldGet(_this, _startClientY));
          var eventName = !cancelled && Math.max(_classPrivateMethodGet(_this, _abs, _abs2).call(_this, _classPrivateFieldGet(_this, _deltaX)), _classPrivateMethodGet(_this, _abs, _abs2).call(_this, _classPrivateFieldGet(_this, _deltaY))) > _classPrivateFieldGet(_this, _threshold) ? 'swipe' : 'cancel';
          _classPrivateMethodGet(_this, _dispatch, _dispatch2).call(_this, e, eventName);
        }
      });
      if (!el) return;
      _classPrivateFieldSet(this, _el, el);
      _classPrivateMethodGet(this, _checkOptions, _checkOptions2).call(this, _opt);
      if (_opt.active === true) _classPrivateMethodGet(this, _activate, _activate2).call(this);
    }
    /* -------------------------------------------------------------------------- */
    /*                              END CONSTRUCTOR                               */
    /*                                  METHODS                                   */
    /* -------------------------------------------------------------------------- */
    /**
     * @description : Activate the swipe listener and/or update the options
     * @param {Object} opt
     *    @property {Integer} [threshold = 20] - Minimum distance in pixels between the start and the end of the movement to detect a swipe
     */
    _createClass(SO, [{
      key: "on",
      value: function on() {
        var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classPrivateMethodGet(this, _checkOptions, _checkOptions2).call(this, opt);
        if (!_classPrivateFieldGet(this, _active)) _classPrivateMethodGet(this, _activate, _activate2).call(this);
      }

      /**
       * @description : Deactivate the swipe listener
       */
    }, {
      key: "off",
      value: function off() {
        _classPrivateMethodGet(this, _off, _off2).call(this, _classStaticPrivateFieldSpecGet(SO, SO, _startEvent), _classPrivateFieldGet(this, _start));
        _classPrivateMethodGet(this, _unregisterEvents, _unregisterEvents2).call(this);
      }

      /* -------------------------------------------------------------------------- */
      /*                                END METHODS                                 */
      /*                                  GETTERS                                   */
      /* -------------------------------------------------------------------------- */
      /**
       * @getter threshold
       */
    }, {
      key: "threshold",
      get: function get() {
        return _classPrivateFieldGet(this, _threshold);
      }

      /**
       * @getter active
       * @returns {boolean} state of the observer
       */
    }, {
      key: "active",
      get: function get() {
        return _classPrivateFieldGet(this, _active);
      }
      /* -------------------------------------------------------------------------- */
      /*                          END GETTERS / SETTERS                             */
      /* -------------------------------------------------------------------------- */
    }]);
    return SO;
  }();
  function _abs2(n) {
    return Math.abs(n);
  }
  function _on2(event, callback) {
    _classPrivateFieldGet(this, _el).addEventListener(event, callback, false);
    return this;
  }
  function _off2(event, callback) {
    _classPrivateFieldGet(this, _el).removeEventListener(event, callback, false);
    return this;
  }
  function _dispatch2(e) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'swiping';
    var data = _classPrivateMethodGet(this, _getEventData, _getEventData2).call(this, e);
    if (data) _classPrivateFieldGet(this, _el).dispatchEvent(new CustomEvent(name, {
      detail: data
    }));
  }
  function _unregisterEvents2() {
    var _classPrivateMethodGe, _classPrivateMethodGe2;
    _classPrivateMethodGet(_classPrivateMethodGe2 = _classPrivateMethodGet(_classPrivateMethodGe = _classPrivateMethodGet(this, _off, _off2).call(this, _classPrivateFieldGet(this, _moveEvent), _classPrivateFieldGet(this, _move)), _off, _off2).call(_classPrivateMethodGe, _classPrivateFieldGet(this, _endEvent), _classPrivateFieldGet(this, _end)), _off, _off2).call(_classPrivateMethodGe2, _classPrivateFieldGet(this, _cancelEvent), _classPrivateFieldGet(this, _cancel));
  }
  function _getEventData2(e) {
    var direction, orientation;
    if (_classPrivateMethodGet(this, _abs, _abs2).call(this, _classPrivateFieldGet(this, _deltaX)) > _classPrivateMethodGet(this, _abs, _abs2).call(this, _classPrivateFieldGet(this, _deltaY))) {
      // most significant
      orientation = _classPrivateFieldGet(this, _deltaX) == 0 ? '' : 'hor';
      direction = _classPrivateFieldGet(this, _deltaX) < 0 ? 'left' : _classPrivateFieldGet(this, _deltaX) == 0 ? '' : 'right';
    } else {
      orientation = _classPrivateFieldGet(this, _deltaY) == 0 ? '' : 'vert';
      direction = _classPrivateFieldGet(this, _deltaY) < 0 ? 'up' : _classPrivateFieldGet(this, _deltaY) == 0 ? '' : 'down';
    }
    if (direction == '') return false;
    var eventData = {
      client: {
        x0: _classPrivateFieldGet(this, _startClientX),
        y0: _classPrivateFieldGet(this, _startClientY),
        x1: _classPrivateFieldGet(this, _currentClientX),
        y1: _classPrivateFieldGet(this, _currentClientY)
      },
      delta: {
        x: _classPrivateFieldGet(this, _deltaX),
        y: _classPrivateFieldGet(this, _deltaY)
      },
      direction: direction,
      duration: Date.now() - _classPrivateFieldGet(this, _t),
      events: {
        start: _classPrivateFieldGet(this, _originalEvent),
        end: e
      },
      orientation: orientation,
      page: {
        x0: _classPrivateFieldGet(this, _startPageX),
        y0: _classPrivateFieldGet(this, _startPageY),
        x1: _classPrivateFieldGet(this, _currentPageX),
        y1: _classPrivateFieldGet(this, _currentPageY)
      },
      pointerType: _classPrivateFieldGet(this, _pointerType)
    };
    return eventData;
  }
  function _checkOptions2(opt) {
    var threshold = opt.threshold;
    _classPrivateFieldSet(this, _threshold, Number.isInteger(threshold) && threshold > 0 ? threshold : _classPrivateFieldGet(this, _threshold));
  }
  function _activate2() {
    _classPrivateFieldSet(this, _active, true);
    _classPrivateMethodGet(this, _on, _on2).call(this, _classStaticPrivateFieldSpecGet(SO, SO, _startEvent), _classPrivateFieldGet(this, _start), false);
  }
  //SO for SwipeObserver
  /* -------------------------------------------------------------------------- */
  /*                       PRIVATE STATIC VARIABLES                             */
  /* -------------------------------------------------------------------------- */
  //Hold the pointer event interface supported by the browser : 'pointer', 'touch' or 'mouse'
  var _pointerInterface = {
    writable: true,
    value: w$1.PointerEvent ? p : w$1.TouchEvent ? t : m
  };
  //Hold the name of the starting event accordingly to the pointer/touch/mouse interface detected
  var _startEvent = {
    writable: true,
    value: w$1.PointerEvent ? "".concat(p, "down") : w$1.TouchEvent ? "".concat(t, "start") : "".concat(m, "down")
  };

  //JUST SHORTCUTS FOR MINIFICATION
  var w = window,
    d = document,
    dE = d.documentElement,
    b = d.body,
    g = 'amst_gallery',
    on = function on(el, events, callback) {
      if (el) events.split(' ').forEach(function (ev) {
        return el.addEventListener(ev, callback);
      });
    },
    off = function off(el, event, callback) {
      el.removeEventListener(event, callback);
    },
    $ = function $(el, query) {
      return el.querySelector(query);
    },
    $$ = function $$(el, query) {
      return Array.from(el.querySelectorAll(query));
    },
    ins = function ins(el, content) {
      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'beforeend';
      el.insertAdjacentHTML(position, content);
    },
    check = function check(n) {
      return typeof n !== "number" || !Number.isInteger(n) || n < 0;
    };
  var _options = /*#__PURE__*/new WeakMap();
  var _items = /*#__PURE__*/new WeakMap();
  var _currentId = /*#__PURE__*/new WeakMap();
  var _load = /*#__PURE__*/new WeakSet();
  var _goTo = /*#__PURE__*/new WeakSet();
  var _prev = /*#__PURE__*/new WeakSet();
  var _next = /*#__PURE__*/new WeakSet();
  var _updateOptions = /*#__PURE__*/new WeakSet();
  var AG = /*#__PURE__*/function (_EE) {
    _inherits(AG, _EE);
    var _super = _createSuper(AG);
    /******************************************************
     *                                                    *
     *                    END PRIVATE                     *
     *                                                    *
     *                    CONSTRUCTOR                     *
     *                                                    *
     *****************************************************/
    //CONSTRUCTOR
    /**
     * @param {String} selector css selector defining the anchors to be included in the gallery
     * @param {Object} options gallery parameters
     *  @key {String} name : name of the gallery
     *                If the name is already in use, i'ts completed
     *                by an incremented integer
     *                ('myGallery' becomes 'myGallery-1').
     *                If not set, an unique name is generated : 
     *                'amst_gallery-' followed by an incremented integer
     *                ('amst_gallery-1', 'amst_gallery-2', and so on)
     *  @key {String} overlayBackground : content of the overlay background css property
     *                Default : rgba(0, 0, 0, 0.9)
     *  @key {String} navItemsBackground : content of the navigation items 
     *                (close button, left and right arrows) background css property
     *                Default : rgba(33, 33, 33, 0.5)
     *  @key {String} navItemsBackgroundHover : content of the navigation items 
     *                (close button, left and right arrows) background css property
     *                when hovered
     *                Default : rgba(33, 33, 33, 0.7)
     *  @key {String} navItemsColor : color of the navigation items 
     *                (close button, left and right arrows)
     *                Default : #aaa
     *  @key {String} navItemsColorHover : color of the navigation items 
     *                (close button, left and right arrows) when hovered
     *                Default : #ddd
     *  @key {String} captionBackground : content of the captions
     *                background css property
     *                Default : rgba(0, 0, 0, 0.7)
     *  @key {String} captionColor : color of the captions
     *                Default : #fff
     *  @key {String} captionFontFamily : font-family of the captions
     *                Default : inherit
     *  @key {String} captionFontSize : font-size of the captions
     *                Default : 1em
     *  @key {String} previousTitle : title attribute of the left arrow
     *                Default : 'Previous'
     *  @key {String} previousAriaLabel : aria-label attribute of the left arrow
     *                Default : 'Previous'
     *  @key {String} nextTitle : title attribute of the right arrow
     *                Default : 'Next'
     *  @key {String} nextAriaLabel : aria-label attribute of the right arrow
     *                Default : 'Next'
     *  @key {String} closeTitle : title attribute of the close button
     *                Default : 'Close'
     *  @key {String} closeAriaLabel : aria-label attribute of the close button
     *                Default : 'Close'
     * @param {function} callback function called when gallery is initialized
     */
    function AG(selector) {
      var _this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      _classCallCheck(this, AG);
      _this = _super.call(this);
      //If the second argument is a function,
      //#UPDATEOPTIONS
      /**
       * Called when a gallery is opened
       */
      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _updateOptions);
      //Called when 
      //  click on next arrow
      //  swipe to the left
      //  press on keyboard right arrow
      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _next);
      //#PREV - #NEXT
      //Called when 
      //  click on previous arrow
      //  swipe to the right
      //  press on keyboard left arrow
      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _prev);
      //#GOTO
      /**
       * Translate the slider so the image given by the id parameter is apparent
       * @param {Integer} id 
       * @param {Boolean} transition : do we need a transition ? (Default: false)
       *                  true if goto is called by a click on navigation arrows or a swipe
       *                  false ig the gallery is opening
       * @param {String} direction (Default :"")
       * "prev" if called by prev() method
       * "next" if called by next() method
       */
      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _goTo);
      //#LOAD
      /**
       * Load the img given by the id parameter
       * @param {Integer} id 
       */
      _classPrivateMethodInitSpec(_assertThisInitialized(_this), _load);
      //End #resize
      /******************************************************
       *                                                    *
       *                    END STATIC                      *
       *                                                    *
       *                      PRIVATE                       *
       *                                                    *
       *****************************************************/
      //#OPTIONS
      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _options, {
        writable: true,
        value: _objectSpread2({}, _classStaticPrivateFieldSpecGet(AG, AG, _defaultOptions))
      });
      //#ITEMS
      //Store all the gallery items
      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _items, {
        writable: true,
        value: []
      });
      //#CURRENTID
      //Store the currently display item id
      _classPrivateFieldInitSpec(_assertThisInitialized(_this), _currentId, {
        writable: true,
        value: -1
      });
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      //If option name has not been set,
      //name = 'amst_gallery_inst'
      options.name = options.name || 'amst_gallery_inst';
      //Check that the name is not already in use
      var _i = 0,
        n = options.name;
      while (_classStaticPrivateFieldSpecGet(AG, AG, _names).has(n) || n == 'amst_gallery_inst') {
        n = options.name + '-' + _i;
        _i++;
      }
      _this.name = n;
      _classStaticPrivateFieldSpecGet(AG, AG, _names).add(n);
      Object.keys(options).filter(function (key) {
        return key in _classPrivateFieldGet(_assertThisInitialized(_this), _options);
      }).forEach(function (key) {
        return _classPrivateFieldGet(_assertThisInitialized(_this), _options)[key] = options[key];
      });
      //Collect all the valid links
      //Link is valid if it's an anchor whose href attribute matches the regexp
      //or if it has a data-href attribute that matches the rexexp
      var links = Array.from($$(d, selector)).filter(function (el) {
        return el.tagName == "A" && el.href.match(_classStaticPrivateFieldSpecGet(AG, AG, _regexp)) || el.hasAttribute('data-href') && el.getAttribute('data-href').match(_classStaticPrivateFieldSpecGet(AG, AG, _regexp));
      });
      console.log(links);
      var linksLength = links.length;
      if (linksLength == 0) return _possibleConstructorReturn(_this);
      links.forEach(function (link, id) {
        var o = {};
        o.id = id;
        o.caption = link.getAttribute("data-caption") || "";
        o.container = [];
        o.title = link.getAttribute("data-title") || "";
        o.alt = link.getAttribute("data-alt") || $(link, "img") && $(link, "img").getAttribute("alt") || "";
        o.srcset = link.getAttribute("data-srcset") || "";
        o.loading = false; //Pass to true during loading. Reset to false when loaded and when gallery is closed
        o.loaded = false; //Pass to true when loaded. Reset to false when gallery is closed
        o.width = link.getAttribute("data-width") || 0;
        o.height = link.getAttribute("data-height") || 0;
        o.ratio = o.height == 0 ? 0 : o.width / o.height;
        o.previous = linksLength == 1 ? -1 : id == 0 ? linksLength - 1 : id - 1;
        o.next = linksLength == 1 ? -1 : id == linksLength - 1 ? 0 : id + 1;
        o.sources = $(link, "script") ? $(link, "script").innerHTML : "";
        o.currentSrc = o.src = link.href ? link.href : link.getAttribute('data-href');
        _classPrivateFieldGet(_assertThisInitialized(_this), _items).push(o);
        //Click on an link shows the gallery
        //link.addEventListener("click", (e) => {
        on(link, "click", function (e) {
          //Open the gallery if click does not occur on an internal anchor
          if (e.target.tagName != 'A') {
            e.preventDefault();
            _this.show(id);
          }
        });
      });
      _classStaticPrivateFieldSpecGet(AG, AG, _galleries).push(_assertThisInitialized(_this));
      //Callback
      if (callback && typeof callback === "function") {
        setTimeout(function (_) {
          callback.call(_assertThisInitialized(_this));
        }, 1);
      }
      return _this;
    }
    /******************************************************
     *                                                    *
     *                  END CONSTRUCTOR                   *
     *                                                    *
     *                      METHODS                       *
     *                                                    *
     *****************************************************/

    //SHOW
    /**
     * @method show(id)
     * @param {Integer} [0] id
     * @description show the image whose identifier is id
     */
    _createClass(AG, [{
      key: "options",
      get:
      /**
       * @get options
       * @returns {Object}
       * @description : returns the gallery options object
       */
      function get() {
        return _objectSpread2({}, _classPrivateFieldGet(this, _options));
      }

      /**
       * @set options
       * @param {Object} opts
       * @description : set the gallery options
       */,
      set: function set(opts) {
        var _this2 = this;
        var needToUpdate = false;
        Object.keys(opts).filter(function (key) {
          return key in _classPrivateFieldGet(_this2, _options) && _classPrivateFieldGet(_this2, _options)[key] != opts[key];
        }).forEach(function (key) {
          needToUpdate = true;
          _classPrivateFieldGet(_this2, _options)[key] = opts[key];
        });
        if (needToUpdate) _classPrivateMethodGet(this, _updateOptions, _updateOptions2).call(this);
      }
    }, {
      key: "items",
      get:
      /**
       * @get items
       * @returns {Array}
       * @description : returns an array of all gallery items
       * A gallery item is an object with the following properties :
       *       @key alt {String} : content of the img alt attribute
       *       @key caption {String} : content of the img caption
       *       @key container {Array} : An array of the item containers.
       *            For the first and last items, the array is composed of
       *            two figures (to achieve the loop effect).
       *            For all the others, it contains only one figure.
       *       @key content {String} : the HTML content of the picture tag
       *       @key currentSrc {String} : value of the img currentSrc property 
       *            (identical to src property if currentSrc is not supported)
       *       @key height {Integer} : content of the img height attribute
       *       @key id {Integer} : item identifier 
       *            (0 for the first image, 1 for the second, ...)
       *       @key loaded {Boolean} : true when img is loaded
       *            Reset to false when another gallery is opened
       *       @key loading {Boolean} : true when img is loading
       *            Reset to false when another gallery is opened
       *       @key next {Integer} : id of the next item
       *            -1 if there is only one image in the gallery
       *            0 (ie first item id) if the current item is the last
       *       @key previous {Integer} : id of the previous item
       *            -1 if there is only one image in the gallery
       *            id of the last gallery item if the current item is the first
       *       @key ratio {Number} : image ratio ie width/height
       *       @key sources {String} : content of the picture source tag
       *       @key src {String} : content of the img src attribute
       *       @key srcset {String} : content of the img srcset attribute
       *       @key title {String} : content of the img title attribute
       *       @key width {Integer} : content of the img width attribute
       * 
       * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
       *  when another gallery is opened :
       *    - loading and loaded properties are reset to false 
       *    - container property is reset to an empty array []
       *    - currentSrc property is set equal to src
       * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
       */
      function get() {
        return _toConsumableArray(_classPrivateFieldGet(this, _items));
      }
    }, {
      key: "currentId",
      get:
      /**
       * @get current
       * @returns {Integer}
       * @description : returns the currently display item id
       * Reset to -1 when another gallery is opened
       */
      function get() {
        return _classPrivateFieldGet(this, _currentId);
      }

      //CURRENTITEM
      /**
       * @get currentItem
       * @returns {Object}
       * @description : returns the currently display item
       * Reset to false when another gallery is opened
       */
    }, {
      key: "currentItem",
      get: function get() {
        return _classPrivateFieldGet(this, _currentId) == -1 ? false : _classPrivateFieldGet(this, _items)[_classPrivateFieldGet(this, _currentId)];
      }
    }, {
      key: "show",
      value: function show() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        /**
         *  check = n => {
         *    return typeof n !== "number" || !Number.isInteger(n) || n < 0
         *  }
         */
        if (check(id) || id > _classPrivateFieldGet(this, _items).length - 1) {
          id = _classPrivateFieldGet(this, _currentId) > 0 ? _classPrivateFieldGet(this, _currentId) : 0;
        }
        if (_classStaticPrivateFieldSpecGet(AG, AG, _currentGallery) != this) {
          if (_classStaticPrivateFieldSpecGet(AG, AG, _currentGallery)) {
            //Reset
            _classPrivateFieldSet(_classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _currentId, -1);
            //Cancel the loading of the images
            //AG.#overlay.querySelectorAll('source').forEach(s => s.parentElement.removeChild(s))
            $$(_classStaticPrivateFieldSpecGet(AG, AG, _overlay), 'source').forEach(function (s) {
              return s.parentElement.removeChild(s);
            });
            //AG.#overlay.querySelectorAll('img').forEach(img => img.src = '')
            $$(_classStaticPrivateFieldSpecGet(AG, AG, _overlay), 'img').forEach(function (img) {
              return img.src = '';
            });
            //If necessary, reset the loading and loaded properties of the currentGallery items
            _classPrivateFieldGet(_classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _items).forEach(function (i) {
              i.loading = i.loaded = false;
              i.currentSrc = i.src;
              i.container = [];
            });
          }
          _classPrivateMethodGet(this, _updateOptions, _updateOptions2).call(this);
          _classStaticPrivateFieldSpecSet(AG, AG, _currentGallery, this);
          _classStaticPrivateMethodGet(AG, AG, _buildSlider).call(AG);
        }
        _classPrivateMethodGet(this, _goTo, _goTo2).call(this, id);
        w.requestAnimationFrame(_classStaticPrivateMethodGet(AG, AG, _show));
        // AG.#show()
      }
    }], [{
      key: "defaultOptions",
      get:
      /**
       * @get defaultOptions
       * @returns {Object}
       * @description : get the class default options
       */
      function get() {
        return _objectSpread2({}, _classStaticPrivateFieldSpecGet(AG, AG, _defaultOptions));
      }

      //STATIC #REGEXP
      // Regexp pattern to match image files
      ,
      set:
      /**
       * @set defaultOptions
       * @description : set the class default options
       * @param {Object} opts
       *  @key {String} overlayBackground : content of the overlay background css property
       *                (Default: rgba(0, 0, 0, 0.9))
       *  @key {String} navItemsBackground : content of the navigation items 
       *                (close button, left and right arrows) background css property
       *                (Default: rgba(33, 33, 33, 0.5))
       *  @key {String} navItemsBackgroundHover : content of the navigation items 
       *                (close button, left and right arrows) background css property
       *                when hovered
       *                (Default: rgba(33, 33, 33, 0.5))
       *  @key {String} navItemsColor : color of the navigation items 
       *                (close button, left and right arrows)
       *                (Default: rgba(33, 33, 33, 0.5))
       *  @key {String} navItemsColorHover : color of the navigation items 
       *                (close button, left and right arrows) when hovered
       *                (Default: rgba(33, 33, 33, 0.5))
       *  @key {String} captionBackground : content of the captions
       *                background css property
       *                Default : rgba(0, 0, 0, 0.7)
       *  @key {String} captionColor : color of the captions
       *                Default : #fff
       *  @key {String} captionFontFamily : font-family of the captions
       *                Default : inherit
       *  @key {String} captionFontSize : font-size of the captions
       *                Default : 1em
       *  @key {String} previousTitle : title attribute of the left arrow
       *                (Default: 'Previous')
       *  @key {String} previousAriaLabel : aria-label attribute of the left arrow
       *                (Default: 'Previous')
       *  @key {String} nextTitle : title attribute of the right arrow
       *                (Default: 'Next')
       *  @key {String} nextAriaLabel : aria-label attribute of the right arrow
       *                (Default: 'Next')
       *  @key {String} closeTitle : title attribute of the close button
       *                (Default: 'Close')
       *  @key {String} closeAriaLabel : aria-label attribute of the close button
       *                (Default: 'Close')
       */
      function set(opts) {
        Object.keys(opts).filter(function (key) {
          return key in _classStaticPrivateFieldSpecGet(AG, AG, _defaultOptions);
        }).forEach(function (key) {
          return _classStaticPrivateFieldSpecGet(AG, AG, _defaultOptions)[key] = opts[key];
        });
      }
    }, {
      key: "regexp",
      get:
      /**
       * @get regexp
       * @returns {RegExp}
       * @description : get the class regexp
       */
      function get() {
        return _classStaticPrivateFieldSpecGet(AG, AG, _regexp);
      }

      //STATIC #GALLERIES
      //Array of instantiated galleries
      ,
      set:
      /**
       * @set regexp
       * @param {RegExp} exp
       * @default : /.+\.(gif|jpe?g|png|webp|avif)(\?(.*))?$/i
       * @description : set the regular expression to filter 
       *                the allowed image extensions 
       *                of the image pointed by the anchor.
       */
      function set(exp) {
        if (exp instanceof RegExp) _classStaticPrivateFieldSpecSet(AG, AG, _regexp, exp);
      }
    }, {
      key: "galleries",
      get:
      /**
       * @get galleries
       * @returns {Array}
       * @description : returns an array of all the instantiated galleries
       */
      function get() {
        return _toConsumableArray(_classStaticPrivateFieldSpecGet(AG, AG, _galleries));
      }

      //STATIC #NAMES
    }, {
      key: "names",
      get:
      /**
       * @get names
       * @returns {Set}
       * @description : returns a set of all the instantiated galleries names
       */
      function get() {
        return new Set(_classStaticPrivateFieldSpecGet(AG, AG, _names));
      }

      /**
       * @method getGalleryByName()
       * @param {String} n : name of the searched gallery
       * @returns the gallery instance whose name is n
       */
    }, {
      key: "getGalleryByName",
      value: function getGalleryByName(n) {
        return _classStaticPrivateFieldSpecGet(AG, AG, _galleries).find(function (g) {
          return g.name == n;
        });
      }

      //STATIC #OVERLAY
      //Store the overlay
      //document.body.querySelector(".amst_gallery-overlay")
    }, {
      key: "overlay",
      get:
      /**
       * @get overlay
       * @returns {HTMLElement}
       * @description : returns the overlay HTMLElement
       */
      function get() {
        return _classStaticPrivateFieldSpecGet(AG, AG, _overlay);
      }

      //static #CURRENTGALLERY
      //Store the currentGallery
    }, {
      key: "currentGallery",
      get:
      /**
       * @get currentGallery
       * @returns {AmstramgramGallery}
       * @description : returns the current gallery
       */
      function get() {
        return _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery);
      }

      //STATIC #VISIBLE
      //Is the gallery visible ?
    }, {
      key: "visible",
      get:
      /**
       * @get visible
       * @returns {Boolean}
       * @description : returns true if a gallery is opened
       */
      function get() {
        return _classStaticPrivateFieldSpecGet(AG, AG, _visible);
      }

      //STATIC #EMITTER
      //static private event emitter
      //Emits : 
      //  amst_gallery-opening
      //  amst_gallery-open
      //  amst_gallery-load
      //  amst_gallery-change
      //  amst_gallery-closing
      //  amst_gallery-close
      //
    }]);
    return AG;
  }(AmstramgramEventEmitterLight);
  //STATIC #BUILD
  /**
   * Insert the overlay in the DOM
   * Called on the first instanciation
   * @param {Object} options 
   */
  function _build(options) {
    //body.insertAdjacentHTML('beforeend', content)
    //${g} = 'amst_gallery'
    ins(b, "\n        <div class=\"".concat(g, "-overlay\">\n          <button class=\"").concat(g, "-nav-item ").concat(g, "-arrow ").concat(g, "-previous\" aria-label=\"").concat(options.previousAriaLabel, "\" title=\"").concat(options.previousTitle, "\"><span></span></button>\n          <button class=\"").concat(g, "-nav-item ").concat(g, "-arrow ").concat(g, "-next\" aria-label=\"").concat(options.nextAriaLabel, "\" title=\"").concat(options.nextTitle, "\"><span></span></button>\n          <button class=\"").concat(g, "-nav-item ").concat(g, "-close\" aria-label=\"").concat(options.closeAriaLabel, "\" title=\"").concat(options.closeTitle, "\"><span><span></span><span></span></span></button>\n        </div>\n      "));
    //Initialize the static private property #overlay 
    //const overlay = (AG.#overlay = body.querySelector(".amst_gallery-overlay"))
    var overlay = _classStaticPrivateFieldSpecSet(AG, AG, _overlay, $(b, ".".concat(g, "-overlay")));
    //Initialize pointerDetector
    //If a mouse is detected, add the amst_gallery-mouse class to the overlay block
    //pointerDetector.class(`amst_gallery-mouse`, overlay)
    PD.class("".concat(g, "-mouse"), overlay);

    //Set click listener to the close cross and the left and right arrows
    //overlay.querySelector(".amst_gallery-close").addEventListener...
    on($(overlay, ".".concat(g, "-close")), "click", _classStaticPrivateMethodGet(AG, AG, _hide));
    //overlay.querySelector(".amst_gallery-previous").addEventListener...
    on($(overlay, ".".concat(g, "-previous")), "click", function (_) {
      var _classStaticPrivateFi;
      return _classPrivateMethodGet(_classStaticPrivateFi = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _prev, _prev2).call(_classStaticPrivateFi);
    });
    //overlay.querySelector(".amst_gallery-next").addEventListener...
    on($(overlay, ".".concat(g, "-next")), "click", function (_) {
      var _classStaticPrivateFi2;
      return _classPrivateMethodGet(_classStaticPrivateFi2 = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _next, _next2).call(_classStaticPrivateFi2);
    });

    //Set a new SwipeObserver on the overlay :
    //Swipe left go to next image
    //Swipe right go to previous image
    //Swipe down close the gallery
    //The slider is translated during swiping.
    new SO(overlay, {
      active: true
    });
    //When swiping begins, the slider abscisse is stored in the sliderOriginX variable
    var sliderOriginX = 0;
    //overlay.addEventListener('swipe', ...
    //overlay.addEventListener('cancel', ...
    on(overlay, 'swipe cancel', function (e) {
      //Reset slideOriginX
      sliderOriginX = 0;
      //If horizontal swipe
      if (e.detail.orientation == 'hor') {
        //If the swipe delta.x is greater than 20% of the viewport width
        if (Math.abs(e.detail.delta.x) > 0.2 * dE.clientWidth) {
          if (e.detail.direction == 'left') {
            var _classStaticPrivateFi3;
            _classPrivateMethodGet(_classStaticPrivateFi3 = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _next, _next2).call(_classStaticPrivateFi3);
          } else {
            var _classStaticPrivateFi4;
            _classPrivateMethodGet(_classStaticPrivateFi4 = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _prev, _prev2).call(_classStaticPrivateFi4);
          }
        } else {
          var _classStaticPrivateFi5;
          //We cancel the movement
          _classPrivateMethodGet(_classStaticPrivateFi5 = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _goTo, _goTo2).call(_classStaticPrivateFi5, _classPrivateFieldGet(_classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _currentId), true);
        }
        //If it's a vertical swipe and if the swipe delta.y is greater than 20% of the viewport height
      } else if (e.detail.direction == 'down' && Math.abs(e.detail.delta.y) > 0.2 * dE.clientHeight) {
        _classStaticPrivateMethodGet(AG, AG, _hide).call(AG);
      }
    });
    on(overlay, 'swiping', function (e) {
      if (e.detail.orientation == 'vert') return;
      var slider = $(overlay, ".".concat(g, "-slider"));
      if (sliderOriginX == 0) {
        //Swiping begins
        //Store the slider abscisse
        sliderOriginX = slider.getBoundingClientRect().x;
      } else {
        //Swiping in progress
        var delta = sliderOriginX + e.detail.client.x1 - e.detail.client.x0;
        slider.style.transform = "translateX(".concat(delta, "px)");
      }
    });

    //Listen to the mousemove event to show/hide navigation elements
    //Add a amst_gallery-hover class to the overlay block when mouse moves
    //and remove it after 1500ms if the mouse stops moving
    var timeoutHover = null;
    on(overlay, "mousemove", function (e) {
      //If the pointer used is a mouse
      if (PD.type == "mouse") {
        //overlay.classList.add(`amst_gallery-hover`)
        overlay.classList.add("".concat(g, "-hover"));
        if (timeoutHover) clearInterval(timeoutHover);
        //Is the mouse over caption ?
        var overCaption = false;
        var item = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery).currentItem;
        if (item.caption) {
          var itemsLength = item.container.length,
            container = itemsLength == 1 || item.container.length > 1 && item.id < itemsLength - 1 ? item.container[0] : item.container[1],
            caption = $(container, "figcaption");
          overCaption = caption.contains(e.target);
        }
        //If the pointer is not over a navigation item
        //and not over the caption
        if (!e.target.classList.contains("".concat(g, "-nav-item")) && !overCaption) {
          //Start the timeout
          timeoutHover = setTimeout(function (_) {
            timeoutHover = null;
            //overlay.classList.remove(`amst_gallery-hover`)
            overlay.classList.remove("".concat(g, "-hover"));
          }, 1500);
        }
      }
    });

    //Tap on the overlay toggles the controls visibility
    //if the tap does not occur on a navigation item or on caption
    on(overlay, 'click', function (e) {
      if (PD.type != "mouse") {
        //Does the the tap occur in caption ?
        var inCaption = false;
        var item = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery).currentItem;
        if (item.caption) {
          var itemsLength = item.container.length,
            container = itemsLength == 1 || item.container.length > 1 && item.id < itemsLength - 1 ? item.container[0] : item.container[1],
            caption = $(container, "figcaption");
          inCaption = caption.contains(e.target);
        }
        if (!e.target.classList.contains("".concat(g, "-nav-item")) && !inCaption) {
          //overlay.classList.toggle("amst_gallery-hide-controls")
          overlay.classList.toggle("".concat(g, "-hide-controls"));
        }
      }
    });
  }
  //End #build
  //STATIC #BUILDSLIDER
  //Build the slider when a gallery is displayed
  function _buildSlider() {
    /**
     * 
     * @param {Object} item 
     * @param {Integer} id
     * @returns for an item with a caption defined as 'My beautiful legend' and an id of 0 :
     * <figure class="amst_gallery-item" data-amst_gallery-id="0">
     *  <div class="amst_gallery-loader"></div>
     *  <picture></picture>
     *  <figcaption>My beautiful legend</figcaption>
     * </figure>
     */
    function buildItem(item, id) {
      var
        //Add caption if item.caption is defined
        figcaption = item.caption ? "<figcaption class=\"".concat(g, "-caption\">").concat(item.caption, "</figcaption>") : '',
        //We add a data attribute to the figure element to keep a reference to the image id.
        ret = "<figure class=\"".concat(g, "-item\" data-").concat(g, "-id=\"").concat(id, "\">\n        <div class=\"").concat(g, "-loader\"></div>\n        <picture></picture>").concat(figcaption, "\n        </figure>");
      return ret;
    }
    var overlay = _classStaticPrivateFieldSpecGet(AG, AG, _overlay),
      currentGallery = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery),
      items = _classPrivateFieldGet(currentGallery, _items);

    //If necessary, remove the existent slider
    if ($(overlay, ".".concat(g, "-slider"))) overlay.removeChild($(overlay, ".".concat(g, "-slider")));

    /**
     * To simulate the loop effect, we insert a first container which holds the last image
     * Then as much containers as images in the gallery
     * Then a last container which holds the first image.
     */
    //First define the number of needed containers
    var numberOfContainers = items.length == 1 ? 1 : items.length + 2;
    //The width of the slider is given by 100% of the body width multiply by the number of containers
    var str = "<div class=\"".concat(g, "-slider\" style=\"width:calc(100% * ").concat(numberOfContainers, ");\">");

    //If we have more than one image
    //insert before all the others, a container holding the last image
    if (numberOfContainers > 1) {
      var id = items.length - 1;
      str += buildItem(items[id], id);
    }

    //Insert a container for each image
    items.forEach(function (item, id) {
      str += buildItem(item, id);
    });

    //If we have more than one image
    //insert after all the others, a container holding the first image
    if (numberOfContainers > 1) {
      str += buildItem(items[0], 0);
    }
    str += "</div>";
    // overlay.insertAdjacentHTML("beforeend", str)
    ins(overlay, str);

    /**
     * For a gallery holding 3 images :
     * 
     * <div class="amst_gallery-slider" style="width:calc(100% * 5);">`
     *  <figure class="amst_gallery-item" data-amst_gallery-id="2">
     *    <div class="amst_gallery-loader"></div>
     *    <picture></picture>
     *    <figcaption>My beautiful legend 2</figcaption>
     *  </figure>
     *  <figure class="amst_gallery-item" data-amst_gallery-id="0">
     *    <div class="amst_gallery-loader"></div>
     *    <picture></picture>
     *    <figcaption>My beautiful legend 0</figcaption>
     *  </figure>
     *  <figure class="amst_gallery-item" data-amst_gallery-id="1">
     *    <div class="amst_gallery-loader"></div>
     *    <picture></picture>
     *    <figcaption>My beautiful legend 1</figcaption>
     *  </figure>
     *  <figure class="amst_gallery-item" data-amst_gallery-id="2">
     *    <div class="amst_gallery-loader"></div>
     *    <picture></picture>
     *    <figcaption>My beautiful legend 2</figcaption>
     *  </figure>
     *  <figure class="amst_gallery-item" data-amst_gallery-id="0">
     *    <div class="amst_gallery-loader"></div>
     *    <picture></picture>
     *    <figcaption>My beautiful legend 0</figcaption>
     *  </figure>
     * </div>
     * 
     */
    items.forEach(function (i) {
      return i.container = $$(overlay, "figure[data-".concat(g, "-id=\"").concat(i.id, "\"]"));
    });
  }
  //End #buildSlider
  //STATIC #SHOW
  /**
  * Show the gallery by adding the amst_gallery-show class to the overlay
  * If there is only one item in the gallery, add also the amst_gallery-no-arrow class
  * to hide the arrows.
  */
  function _show() {
    var overlay = _classStaticPrivateFieldSpecGet(AG, AG, _overlay),
      currentGallery = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery);
    //Listen to keyboard event
    //document.body.addEventListener('keydown', AG.#keyboardListener)
    on(b, 'keydown', _classStaticPrivateMethodGet(AG, AG, _keyboardListener));
    //Listen to window resize event
    //window.addEventListener("resize", AG.#resize)
    on(w, "resize", _classStaticPrivateMethodGet(AG, AG, _resize));
    //Update the #visible property
    _classStaticPrivateFieldSpecSet(AG, AG, _visible, true);
    //Resize
    _classStaticPrivateMethodGet(AG, AG, _resize).call(AG);
    //Emit amst_gallery-opening event
    _classStaticPrivateFieldSpecGet(AG, AG, _emitter).emit("".concat(g, "-opening"), {
      current: currentGallery.currentItem,
      gallery: currentGallery
    });
    currentGallery.emit("".concat(g, "-opening"), {
      current: currentGallery.currentItem
    });
    //Emit amst_gallery-open after a 400ms delay (because transition on overlay opacity)
    on(overlay, 'transitionend', function waitForTransitionEnd(e) {
      if (e.propertyName == 'opacity' && e.target == overlay) {
        off(overlay, 'transitionend', waitForTransitionEnd);
        _classStaticPrivateFieldSpecGet(AG, AG, _emitter).emit("".concat(g, "-open"), {
          current: currentGallery.currentItem,
          gallery: currentGallery
        });
        currentGallery.emit("".concat(g, "-open"), {
          current: currentGallery.currentItem
        });
      }
    });
    //If there is only one item in the gallery
    if (_classPrivateFieldGet(currentGallery, _items).length == 1) {
      overlay.classList.add("".concat(g, "-no-arrow"));
    }
    overlay.classList.add("".concat(g, "-show"));
    //Force the visibility of the controls for 1500ms
    if (PD.type == 'mouse') overlay.dispatchEvent(new CustomEvent('mousemove'));
  }
  //End #show
  //STATIC #HIDE
  /**
   * hide the gallery by removing the amst_gallery-show class to the overlay
   */
  function _hide() {
    //Stop listening to keyboard event
    //document.body.removeEventListener('keydown', AG.#keyboardListener)
    off(b, 'keydown', _classStaticPrivateMethodGet(AG, AG, _keyboardListener));
    var currentGallery = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery),
      overlay = _classStaticPrivateFieldSpecGet(AG, AG, _overlay);

    //Emit amst_gallery-closing event
    _classStaticPrivateFieldSpecGet(AG, AG, _emitter).emit("".concat(g, "-closing"), {
      current: currentGallery.currentItem,
      gallery: currentGallery
    });
    currentGallery.emit("".concat(g, "-closing"), {
      current: currentGallery.currentItem
    });
    //Wait for the overlay opacity transition from 1 to 0
    on(overlay, 'transitionend', function waitForTransitionEnd(e) {
      if (e.propertyName == 'opacity' && e.target == overlay) {
        off(overlay, 'transitionend', waitForTransitionEnd);
        //Update the #visible property
        _classStaticPrivateFieldSpecSet(AG, AG, _visible, false);
        //Stop listening to window resize event
        //window.removeEventListener("resize", AG.#resize)
        off(w, "resize", _classStaticPrivateMethodGet(AG, AG, _resize));
        //Emit amst_gallery-close event
        _classStaticPrivateFieldSpecGet(AG, AG, _emitter).emit("".concat(g, "-close"), {
          current: currentGallery.currentItem,
          gallery: currentGallery
        });
        currentGallery.emit("".concat(g, "-close"), {
          current: currentGallery.currentItem
        });
      }
    });
    //Clean overlay classes
    //AG.#overlay.classList.remove(`${g}-show`, `${g}-no-arrow`, `${g}-hide-controls`)
    //is not supported by IE11
    new Array("".concat(g, "-show"), "".concat(g, "-no-arrow"), "".concat(g, "-hide-controls")).forEach(function (c) {
      return overlay.classList.remove(c);
    });
  }
  //End #hide
  //STATIC #KEYBOARDLISTENER
  /**
   * Listen to keyboard events
   * Left/Right arrow keys skip to the previous/next item
   * Escape key close the gallery
   * @param {keyboard event} e 
   */
  function _keyboardListener(e) {
    var _classStaticPrivateFi6, _classStaticPrivateFi7;
    if (!_classStaticPrivateFieldSpecGet(AG, AG, _visible)) return;
    var keys = ['Escape', 'Esc'];
    if (_classPrivateFieldGet(_classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _items).length > 1) keys.push('ArrowLeft', 'Left', 'ArrowRight', 'Right');
    if (keys.includes(e.key)) e.preventDefault();else return;
    switch (e.key) {
      case 'ArrowLeft':
      case 'Left':
        _classPrivateMethodGet(_classStaticPrivateFi6 = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _prev, _prev2).call(_classStaticPrivateFi6);
        break;
      case 'ArrowRight':
      case 'Right':
        _classPrivateMethodGet(_classStaticPrivateFi7 = _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _next, _next2).call(_classStaticPrivateFi7);
        break;
      case 'Escape':
      case 'Esc':
        _classStaticPrivateMethodGet(AG, AG, _hide).call(AG);
        break;
    }
  }
  //End #keyboardListener
  //STATIC #RESIZE
  /**
   * Listen to window resize event
   * Throttle via requestAnimationFrame
   * Adapt the image dimensions so it's fully contained in the overlay
   * If the image dimensions are less than those of the viewport,
   * just center the image.
   * Position the caption below the image if possible.
   * If not, caption is set at the bottom of the image.
   * 
   * Default styling for images set width to 100% and height to auto
   * If the image ratio is less than that of the viewport,
   * width is set to auto and height to 100% by adding the
   * amst_gallery-adapted-width class
   * 
   */
  function _resize() {
    //If there is a resizing computation running or if the gallery is hidden
    if (_classStaticPrivateFieldSpecGet(AG, AG, _resizeRunning) || !_classStaticPrivateFieldSpecGet(AG, AG, _visible)) return;
    //Update #resizeRunning
    _classStaticPrivateFieldSpecSet(AG, AG, _resizeRunning, true);
    requestAnimationFrame(function (_) {
      var windowWidth = dE.clientWidth,
        windowHeight = dE.clientHeight,
        windowRatio = windowWidth / windowHeight;
      //AG.#overlay.querySelectorAll("figure").forEach((figure) => {
      $$(_classStaticPrivateFieldSpecGet(AG, AG, _overlay), "figure").forEach(function (figure) {
        //Just in case
        if (!$(figure, "img")) return;
        var caption = $(figure, "figcaption"),
          item = _classPrivateFieldGet(_classStaticPrivateFieldSpecGet(AG, AG, _currentGallery), _items)[figure.getAttribute("data-".concat(g, "-id"))],
          adaptedWidth = figure.classList.contains("".concat(g, "-adapted-width"));
        //If there is a caption, clean its style
        if (caption) caption.removeAttribute('style');
        if (item.ratio < windowRatio) {
          //Image height is set to 100% and width to auto
          if (!adaptedWidth) figure.classList.add("".concat(g, "-adapted-width"));
          if (caption) {
            //The caption width is set equal to that of the image
            //Note that img dimensions can't be greater than its natural dimensions
            var css = "width:".concat(Math.ceil(Math.min(windowHeight * item.ratio, item.width)), "px;");
            //If the image height is smaller than that of the viewport
            //we position the caption below the image
            if (windowHeight > item.height) {
              var availableHeight = (windowHeight - item.height) / 2;
              css += "transform:translateY(".concat(-availableHeight, "px);background:transparent;");
            }
            caption.setAttribute('style', css);
          }
        } else {
          //Image width is set to 100% and height to auto
          if (adaptedWidth) figure.classList.remove("".concat(g, "-adapted-width"));
          if (caption) {
            var imgHeight = Math.min(windowWidth / item.ratio, item.height),
              _availableHeight = (windowHeight - imgHeight) / 2;
            if (_availableHeight - caption.offsetHeight > 0) {
              var _css = "transform:translateY(".concat(-_availableHeight, "px);background:transparent;");
              if (windowWidth > item.width) {
                _css += "width:".concat(item.width, "px;");
              }
              caption.setAttribute('style', _css);
            }
          }
        }
      });
      _classStaticPrivateFieldSpecSet(AG, AG, _resizeRunning, false);
    });
  }
  function _load2(id) {
    /**
     *  check = n => {
     *    return typeof n !== "number" || !Number.isInteger(n) || n < 0
     *  }
     */
    if (check(id) || id > _classPrivateFieldGet(this, _items).length - 1) return;
    //Get the item to load
    var item = _classPrivateFieldGet(this, _items)[id];
    //Leave if the item is already loading or loaded
    if ((item.loading || item.loaded) && $(_classStaticPrivateFieldSpecGet(AG, AG, _overlay), "figure[data-".concat(g, "-id=\"").concat(id, "\"] img"))) return;
    //The item is now set as loading
    item.loading = true;
    //Store the gallery instance
    var self = this;
    //Build the image element without the sources, srcset or src data
    function buildItemContent(i) {
      var content = "<img draggable=\"false\"";
      content += i.alt ? " alt=\"".concat(i.alt, "\"") : "";
      content += i.title ? " title=\"".concat(i.title, "\"") : "";
      content += i.width ? " width=\"".concat(i.width, "\"") : "";
      content += i.height ? " height=\"".concat(i.height, "\"") : "";
      content += i.width > 0 && i.height > 0 ? " style=\"max-width:".concat(i.width, "px;max-height:").concat(i.height, "px; aspect-ratio:").concat(i.ratio, ";\"") : "";
      content += "/>";
      return content;
    }
    if (!item.content) item.content = buildItemContent(item);
    //Insert the img tag inside each item container
    item.container.forEach(function (figure, i) {
      ins($(figure, "picture"), item.content);
      //If height and width have been specified
      //We may give a border to the img
      if (item.width && item.height) {
        $(figure, "img").classList.add("".concat(g, "-border"));
        //Resize
        if (i == item.container.length - 1) _classStaticPrivateMethodGet(AG, AG, _resize).call(AG);
      }
    });
    //For the first and last item, the img is loaded into two containers
    //We only watch the img hold by the first container.
    on($(item.container[0], 'img'), 'load', function loaded() {
      var img = this;
      //If the srcset attribute or the source tag have been defined
      //we need to keep the image onload listener.
      //If the window is resized, another source might be loaded
      //and we have to update width, height and style attribute.
      if (!item.srcset && !item.sources) off(img, 'load', loaded);
      //Update the item currentSrc property
      item.currentSrc = img.currentSrc || img.src;
      if (!item.loaded || item.srcset || item.sources) {
        /**
         * 
         * @param {Integer} w img naturalWidth
         * @param Integer h img naturalHeight
         * @description : update the img style and its width and height attributes
         */
        var _check = function _check(w, h) {
          var shouldUpdateWidthHeight = false;
          if (img.getAttribute('width') != w) {
            shouldUpdateWidthHeight = true;
            item.width = w;
          }
          if (img.getAttribute('height') != h) {
            shouldUpdateWidthHeight = true;
            item.height = h;
          }
          if (shouldUpdateWidthHeight) {
            item.ratio = w / h;
            //For first and last item, there are two img data to update!!
            item.container.forEach(function (figure) {
              var i = $(figure, 'img');
              i.setAttribute("width", w);
              i.setAttribute("height", h);
              i.setAttribute('style', "max-width:".concat(w, "px; max-height:").concat(h, "px; aspect-ratio:").concat(item.ratio, ";"));
            });
            item.content = buildItemContent(item);
          }
          if (!item.loaded) {
            item.container.forEach(function (figure) {
              on($(figure, ".".concat(g, "-loader")), "transitionend", function clean(e) {
                if (e.target == this) {
                  //this.removeEventListener("transitionend", clean)
                  off(this, "transitionend", clean);
                  try {
                    figure.removeChild(this);
                  } catch (err) {}
                }
              });
              //Remove the amst_gallery-border class of the img 
              $(figure, 'img').removeAttribute("class");
              figure.classList.add("".concat(g, "-item-loaded"));
            });
            //The item is set as loaded
            item.loaded = true;
            item.loading = false;
          }
          _classStaticPrivateFieldSpecGet(AG, AG, _emitter).emit("".concat(g, "-load"), {
            current: item,
            gallery: self
          });
          self.emit("".concat(g, "-load"), {
            current: item
          });
          _classStaticPrivateMethodGet(AG, AG, _resize).call(AG);
        };
        //Update the width/height/ratio properties
        //IE11 randomly returns 0 when getting this.naturalWidth or this.naturalHeight
        //If there is a srcset attribute, natural dimensions are not accurate
        //and we need to check it also
        if (img.naturalWidth == 0 || img.naturalHeight == 0 || item.srcset) {
          var checkImg = new Image();
          on(checkImg, 'load', function loaded() {
            off(checkImg, 'load', loaded);
            _check(this.naturalWidth, this.naturalHeight);
          });
          checkImg.src = item.currentSrc;
        } else {
          _check(img.naturalWidth, img.naturalHeight);
        }
      }
      var remainToLoad = _classPrivateFieldGet(self, _items).filter(function (i) {
        return !i.loaded && !i.loading;
      });
      //Preload the next and previous items
      //Must check if AG.#currentGallery == self in case of currentGallery changes
      //between load call and img loaded
      if (_classStaticPrivateFieldSpecGet(AG, AG, _visible) && remainToLoad.length > 0 && _classPrivateFieldGet(self, _items).filter(function (i) {
        return i.loading;
      }).length == 0 && item.previous != -1 && _classStaticPrivateFieldSpecGet(AG, AG, _currentGallery) == self) {
        if (remainToLoad == 1) {
          _classPrivateMethodGet(self, _load, _load2).call(self, remainToLoad[0].id);
        } else {
          var idNext = item.next;
          while (_classPrivateFieldGet(self, _items)[idNext].loading || _classPrivateFieldGet(self, _items)[idNext].loaded) {
            idNext = _classPrivateFieldGet(self, _items)[idNext].next;
          }
          var idPrev = item.previous;
          while (_classPrivateFieldGet(self, _items)[idPrev].loading || _classPrivateFieldGet(self, _items)[idPrev].loaded) {
            idPrev = _classPrivateFieldGet(self, _items)[idPrev].previous;
          }
          _classPrivateMethodGet(self, _load, _load2).call(self, idNext);
          if (idNext != idPrev) _classPrivateMethodGet(self, _load, _load2).call(self, idPrev);
        }
      }
    });
    item.container.forEach(function (figure, i) {
      if (item.sources) ins($(figure, "picture"), item.sources, 'afterbegin');
      if (item.srcset) $(figure, 'img').setAttribute('srcset', item.srcset);
      $(figure, 'img').src = item.src;
    });
  }
  function _goTo2(id) {
    var transition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    //If there is more than one item in the gallery
    if (_classPrivateFieldGet(this, _items).length > 1) {
      /*
      Because of the loop, there are two more containers than images.
      containers.length = items.length + 2
        First container holds the last image (imageID = items.length - 1, containerID = 0).
      Last container holds the first image (imageID = 0, containerID = containers.length - 1 = items.length + 1).
        If the gallery contains three images, we get five containers :
      0:[img2], 1:[img0], 2:[img1], 3:[img2], 4:[img0]
        When the user reaches the image 2 and asks for the next one (image 0), 
      we have to translate smoothly to the fifth container
      which holds the image 0 
      and has an id of 4 in the container's array.
      At the end of the translation, we translate once more 
      but without transition to the second container
      which also holds the image 0 
      but has an id of 1 in the container's array.
        If the user watches the image 0 ans asks for the previous one (image 2),
      we have to translate smoothly to the first container
      which holds the image 2 
      and has an id of 0 in the container's array.
      At the end of the translation, we translate once more 
      but without transition to the before last container
      which also holds the image 2 
      but has an id of 3 in the container's array.
      */

      //Do we need to update the translation ?
      //That will be true if we are going from the first to the last image (through prev() fonction)
      //or from the last to the first (through next() fonction).
      var needToUpdatePosition = true;
      var slider = $(_classStaticPrivateFieldSpecGet(AG, AG, _overlay), ".".concat(g, "-slider")),
        // slider = $(AG.#overlay, ".amst_gallery-slider"),
        // slider = AG.#overlay.querySelector(".amst_gallery-slider"),
        numberOfContainers = _classPrivateFieldGet(this, _items).length + 2;
      slider.classList.remove("".concat(g, "-slider-transition"));
      if (transition) {
        slider.classList.add("".concat(g, "-slider-transition"));
        //slider.addEventListener("transitionend", function end(e) {
        on(slider, "transitionend", function end(e) {
          if (e.target == slider) {
            //slider.removeEventListener("transitionend", end)
            off(slider, "transitionend", end);
            slider.classList.remove("".concat(g, "-slider-transition"));
            if (needToUpdatePosition) {
              //First case (go from the last to the first item) : 
              //  translate the slider to the second container
              //Second case (go from the first to the last item) : 
              //  translate the slider to the penultimate container
              slider.style.transform = "translateX(".concat(-100 / numberOfContainers * (id + 1), "%)");
            }
          }
        });
      }
      //If it's a previous call and currently displayed image is the first of the gallery
      if (_classPrivateFieldGet(this, _currentId) == 0 && direction == "prev") {
        //Go to the first container holding the last image with transition
        //At the end of the transition, we'll move to the penultimate container
        slider.style.transform = "translateX(0)";
        //If it's a next call and currently displayed image is the last of the gallery
      } else if (_classPrivateFieldGet(this, _currentId) == _classPrivateFieldGet(this, _items).length - 1 && direction == "next") {
        //Go to the last container holding the first image
        //At the end of the transition, we'll move to the second container
        slider.style.transform = "translateX(".concat(-100 / numberOfContainers * (_classPrivateFieldGet(this, _items).length + 1), "%)");
      } else {
        needToUpdatePosition = false;
        slider.style.transform = "translateX(".concat(-100 / numberOfContainers * (id + 1), "%)");
      }
    }
    if (id != _classPrivateFieldGet(this, _currentId)) {
      var previousItem = this.currentItem;
      _classPrivateFieldSet(this, _currentId, id);
      if (previousItem) {
        _classStaticPrivateFieldSpecGet(AG, AG, _emitter).emit("".concat(g, "-change"), {
          current: this.currentItem,
          previous: previousItem,
          gallery: this
        });
        this.emit("".concat(g, "-change"), {
          current: this.currentItem,
          previous: previousItem
        });
      }
      _classPrivateMethodGet(this, _load, _load2).call(this, id);
    }
  }
  function _prev2() {
    if (_classPrivateFieldGet(this, _items).length < 2) return;
    // this.#goTo(this.#items[this.#currentId].previous, true, "prev")
    _classPrivateMethodGet(this, _goTo, _goTo2).call(this, this.currentItem.previous, true, "prev");
  }
  function _next2() {
    if (_classPrivateFieldGet(this, _items).length < 2) return;
    // this.#goTo(this.#items[this.#currentId].next, true, "next")
    _classPrivateMethodGet(this, _goTo, _goTo2).call(this, this.currentItem.next, true, "next");
  }
  function _updateOptions2() {
    var _this3 = this;
    /**
     * @param {String} p 
     * @param {Boolean} camel @default false
     * @returns convert 
     *            aaa-bbb-ccc 
     *            to 
     *            AaaBbbCcc if camel is false (default)
     *            aaaBbbCcc if camel is true
     */
    function camelCase(p) {
      var camel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return p.split('-').map(function (w, id) {
        return id == 0 && camel ? w : w.charAt(0).toUpperCase() + w.slice(1);
      }).join('');
    }
    if (!_classStaticPrivateFieldSpecGet(AG, AG, _overlay)) {
      _classStaticPrivateMethodGet(AG, AG, _build).call(AG, _classPrivateFieldGet(this, _options));
    } else {
      var navs = $$(_classStaticPrivateFieldSpecGet(AG, AG, _overlay), ".".concat(g, "-nav-item")),
        ids = ['previous', 'next', 'close'],
        attrs = ['title', 'aria-label'];
      attrs.forEach(function (attr) {
        //title => Title
        //aria-label => AriaLabel
        var ATTR = camelCase(attr);
        navs.forEach(function (nav, id) {
          //this.#options[previousTitle]
          //this.#options[previousAriaLabel]
          //...
          var opt = _classPrivateFieldGet(_this3, _options)[ids[id] + ATTR];
          if (nav.getAttribute(attr) != opt) nav.setAttribute(attr, opt);
        });
      });
    }
    var cssProps = ['overlay-background', 'nav-items-background', 'nav-items-background-hover', 'nav-items-color', 'nav-items-color-hover', 'caption-background', 'caption-color', 'caption-font-family', 'caption-font-size'];
    cssProps.forEach(function (p) {
      //overlay-background => overlayBackground
      //nav-items-background => navItemsBackground
      //...
      var P = camelCase(p, true);
      _classStaticPrivateFieldSpecGet(AG, AG, _overlay).style.setProperty("--".concat(p), _classPrivateFieldGet(_this3, _options)[P]);
    });
  }
  /******************************************************
   *                                                    *
   *                        STATIC                      *
   *                                                    *
   *****************************************************/
  //STATIC #DEFAULTOPTIONS
  var _defaultOptions = {
    writable: true,
    value: {
      overlayBackground: 'rgba(0, 0, 0, 0.9)',
      navItemsBackground: 'rgba(33, 33, 33, 0.5)',
      navItemsBackgroundHover: 'rgba(33, 33, 33, 0.7)',
      navItemsColor: '#aaa',
      navItemsColorHover: '#ddd',
      captionBackground: 'rgba(0, 0, 0, 0.7)',
      captionColor: '#fff',
      captionFontFamily: 'inherit',
      captionFontSize: '1em',
      previousTitle: 'Previous',
      previousAriaLabel: 'Previous',
      nextTitle: 'Next',
      nextAriaLabel: 'Next',
      closeTitle: 'Close',
      closeAriaLabel: 'Close'
    }
  };
  var _regexp = {
    writable: true,
    value: /.+\.(gif|jpe?g|png|webp|avif)(\?(.*))?$/i
  };
  var _galleries = {
    writable: true,
    value: []
  };
  var _names = {
    writable: true,
    value: new Set()
  };
  var _overlay = {
    writable: true,
    value: void 0
  };
  var _currentGallery = {
    writable: true,
    value: void 0
  };
  var _visible = {
    writable: true,
    value: false
  };
  var _emitter = {
    writable: true,
    value: new AmstramgramEventEmitterLight()
  };
  //Mirror on function
  _defineProperty(AG, "on", function (e, fn) {
    return _classStaticPrivateFieldSpecGet(AG, AG, _emitter).on(e, fn);
  });
  //Mirror odd function
  _defineProperty(AG, "off", function (e, fn) {
    return _classStaticPrivateFieldSpecGet(AG, AG, _emitter).off(e, fn);
  });
  //Is a resize event running ?
  var _resizeRunning = {
    writable: true,
    value: false
  };

  return AG;

})();
