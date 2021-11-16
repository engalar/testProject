
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
define(['exports', 'react', 'big.js'], function (exports, React, Big) { 'use strict';

	

	function ___$insertStyle(css) {
	  if (!css) {
	    return;
	  }

	  if (typeof window === 'undefined') {
	    return;
	  }

	  const style = document.createElement('style');
	  style.setAttribute('type', 'text/css');
	  style.innerHTML = css;
	  document.head.appendChild(style);
	  return css;
	}

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var Big__default = /*#__PURE__*/_interopDefaultLegacy(Big);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var classnames$1 = {exports: {}};

	/*!
	  Copyright (c) 2018 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function (module) {
	/* global define */
	(function () {

	  var hasOwn = {}.hasOwnProperty;

	  function classNames() {
	    var classes = [];

	    for (var i = 0; i < arguments.length; i++) {
	      var arg = arguments[i];
	      if (!arg) continue;
	      var argType = typeof arg;

	      if (argType === 'string' || argType === 'number') {
	        classes.push(arg);
	      } else if (Array.isArray(arg)) {
	        if (arg.length) {
	          var inner = classNames.apply(null, arg);

	          if (inner) {
	            classes.push(inner);
	          }
	        }
	      } else if (argType === 'object') {
	        if (arg.toString === Object.prototype.toString) {
	          for (var key in arg) {
	            if (hasOwn.call(arg, key) && arg[key]) {
	              classes.push(key);
	            }
	          }
	        } else {
	          classes.push(arg.toString());
	        }
	      }
	    }

	    return classes.join(' ');
	  }

	  if (module.exports) {
	    classNames.default = classNames;
	    module.exports = classNames;
	  } else {
	    window.classNames = classNames;
	  }
	})();
	}(classnames$1));

	var classNames$1 = classnames$1.exports;

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	/** Detect free variable `global` from Node.js. */

	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
	/** Detect free variable `self`. */

	var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;
	/** Used as a reference to the global object. */

	freeGlobal$1 || freeSelf$1 || Function('return this')();

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	/** Detect free variable `global` from Node.js. */

	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
	/** Detect free variable `self`. */

	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	/** Used as a reference to the global object. */

	freeGlobal || freeSelf || Function('return this')();

	function isDocumentVisible() {
	  if (typeof document !== 'undefined' && typeof document.visibilityState !== 'undefined') {
	    return document.visibilityState !== 'hidden';
	  }

	  return true;
	}
	function isOnline() {
	  if (typeof navigator.onLine !== 'undefined') {
	    return navigator.onLine;
	  }

	  return true;
	}

	var __read$8 = undefined && undefined.__read || function (o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	      r,
	      ar = [],
	      e;

	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
	      ar.push(r.value);
	    }
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }

	  return ar;
	};

	undefined && undefined.__spread || function () {
	  for (var ar = [], i = 0; i < arguments.length; i++) {
	    ar = ar.concat(__read$8(arguments[i]));
	  }

	  return ar;
	};

	var __read$7 = undefined && undefined.__read || function (o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	      r,
	      ar = [],
	      e;

	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
	      ar.push(r.value);
	    }
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }

	  return ar;
	};

	undefined && undefined.__spread || function () {
	  for (var ar = [], i = 0; i < arguments.length; i++) {
	    ar = ar.concat(__read$7(arguments[i]));
	  }

	  return ar;
	};

	// from swr
	var listeners$1 = [];

	var eventsBinded$1 = false;

	if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded$1) {
	  var revalidate$1 = function revalidate() {
	    if (!isDocumentVisible() || !isOnline()) return;

	    for (var i = 0; i < listeners$1.length; i++) {
	      var listener = listeners$1[i];
	      listener();
	    }
	  };

	  window.addEventListener('visibilitychange', revalidate$1, false);
	  window.addEventListener('focus', revalidate$1, false); // only bind the events once

	  eventsBinded$1 = true;
	}

	// from swr
	var listeners = [];

	var eventsBinded = false;

	if (typeof window !== 'undefined' && window.addEventListener && !eventsBinded) {
	  var revalidate = function revalidate() {
	    if (!isDocumentVisible()) return;

	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }
	  };

	  window.addEventListener('visibilitychange', revalidate, false); // only bind the events once

	  eventsBinded = true;
	}

	var __assign$4 = undefined && undefined.__assign || function () {
	  __assign$4 = Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];

	      for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	      }
	    }

	    return t;
	  };

	  return __assign$4.apply(this, arguments);
	};

	var __read$6 = undefined && undefined.__read || function (o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	      r,
	      ar = [],
	      e;

	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
	      ar.push(r.value);
	    }
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }

	  return ar;
	};

	undefined && undefined.__spread || function () {
	  for (var ar = [], i = 0; i < arguments.length; i++) {
	    ar = ar.concat(__read$6(arguments[i]));
	  }

	  return ar;
	};

	var __assign$3 = undefined && undefined.__assign || function () {
	  __assign$3 = Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];

	      for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	      }
	    }

	    return t;
	  };

	  return __assign$3.apply(this, arguments);
	};

	undefined && undefined.__rest || function (s, e) {
	  var t = {};

	  for (var p in s) {
	    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  }

	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	};

	var __read$5 = undefined && undefined.__read || function (o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	      r,
	      ar = [],
	      e;

	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
	      ar.push(r.value);
	    }
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }

	  return ar;
	};

	undefined && undefined.__spread || function () {
	  for (var ar = [], i = 0; i < arguments.length; i++) {
	    ar = ar.concat(__read$5(arguments[i]));
	  }

	  return ar;
	};

	var __assign$2 = undefined && undefined.__assign || function () {
	  __assign$2 = Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];

	      for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	      }
	    }

	    return t;
	  };

	  return __assign$2.apply(this, arguments);
	};

	undefined && undefined.__rest || function (s, e) {
	  var t = {};

	  for (var p in s) {
	    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  }

	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	};

	var __read$4 = undefined && undefined.__read || function (o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	      r,
	      ar = [],
	      e;

	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
	      ar.push(r.value);
	    }
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }

	  return ar;
	};

	undefined && undefined.__spread || function () {
	  for (var ar = [], i = 0; i < arguments.length; i++) {
	    ar = ar.concat(__read$4(arguments[i]));
	  }

	  return ar;
	};

	var ConfigContext = /*#__PURE__*/React__default['default'].createContext({});
	ConfigContext.displayName = 'UseRequestConfigContext';

	var __assign$1 = undefined && undefined.__assign || function () {
	  __assign$1 = Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];

	      for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	      }
	    }

	    return t;
	  };

	  return __assign$1.apply(this, arguments);
	};

	undefined && undefined.__rest || function (s, e) {
	  var t = {};

	  for (var p in s) {
	    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  }

	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	};

	var __read$3 = undefined && undefined.__read || function (o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	      r,
	      ar = [],
	      e;

	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
	      ar.push(r.value);
	    }
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }

	  return ar;
	};

	undefined && undefined.__spread || function () {
	  for (var ar = [], i = 0; i < arguments.length; i++) {
	    ar = ar.concat(__read$3(arguments[i]));
	  }

	  return ar;
	};

	ConfigContext.Provider; // UseAPIProvider 已经废弃，此处为了兼容 umijs 插件 plugin-request

	/**
	 * A collection of shims that provide minimal functionality of the ES6 collections.
	 *
	 * These implementations are not meant to be used outside of the ResizeObserver
	 * modules as they cover only a limited range of use cases.
	 */

	/* eslint-disable require-jsdoc, valid-jsdoc */
	var MapShim = function () {
	  if (typeof Map !== 'undefined') {
	    return Map;
	  }
	  /**
	   * Returns index in provided array that matches the specified key.
	   *
	   * @param {Array<Array>} arr
	   * @param {*} key
	   * @returns {number}
	   */


	  function getIndex(arr, key) {
	    var result = -1;
	    arr.some(function (entry, index) {
	      if (entry[0] === key) {
	        result = index;
	        return true;
	      }

	      return false;
	    });
	    return result;
	  }

	  return function () {
	    function class_1() {
	      this.__entries__ = [];
	    }

	    Object.defineProperty(class_1.prototype, "size", {
	      /**
	       * @returns {boolean}
	       */
	      get: function () {
	        return this.__entries__.length;
	      },
	      enumerable: true,
	      configurable: true
	    });
	    /**
	     * @param {*} key
	     * @returns {*}
	     */

	    class_1.prototype.get = function (key) {
	      var index = getIndex(this.__entries__, key);
	      var entry = this.__entries__[index];
	      return entry && entry[1];
	    };
	    /**
	     * @param {*} key
	     * @param {*} value
	     * @returns {void}
	     */


	    class_1.prototype.set = function (key, value) {
	      var index = getIndex(this.__entries__, key);

	      if (~index) {
	        this.__entries__[index][1] = value;
	      } else {
	        this.__entries__.push([key, value]);
	      }
	    };
	    /**
	     * @param {*} key
	     * @returns {void}
	     */


	    class_1.prototype.delete = function (key) {
	      var entries = this.__entries__;
	      var index = getIndex(entries, key);

	      if (~index) {
	        entries.splice(index, 1);
	      }
	    };
	    /**
	     * @param {*} key
	     * @returns {void}
	     */


	    class_1.prototype.has = function (key) {
	      return !!~getIndex(this.__entries__, key);
	    };
	    /**
	     * @returns {void}
	     */


	    class_1.prototype.clear = function () {
	      this.__entries__.splice(0);
	    };
	    /**
	     * @param {Function} callback
	     * @param {*} [ctx=null]
	     * @returns {void}
	     */


	    class_1.prototype.forEach = function (callback, ctx) {
	      if (ctx === void 0) {
	        ctx = null;
	      }

	      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
	        var entry = _a[_i];
	        callback.call(ctx, entry[1], entry[0]);
	      }
	    };

	    return class_1;
	  }();
	}();
	/**
	 * Detects whether window and document objects are available in current environment.
	 */


	var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

	var global$1 = function () {
	  if (typeof global !== 'undefined' && global.Math === Math) {
	    return global;
	  }

	  if (typeof self !== 'undefined' && self.Math === Math) {
	    return self;
	  }

	  if (typeof window !== 'undefined' && window.Math === Math) {
	    return window;
	  } // eslint-disable-next-line no-new-func


	  return Function('return this')();
	}();
	/**
	 * A shim for the requestAnimationFrame which falls back to the setTimeout if
	 * first one is not supported.
	 *
	 * @returns {number} Requests' identifier.
	 */


	var requestAnimationFrame$1 = function () {
	  if (typeof requestAnimationFrame === 'function') {
	    // It's required to use a bounded function because IE sometimes throws
	    // an "Invalid calling object" error if rAF is invoked without the global
	    // object on the left hand side.
	    return requestAnimationFrame.bind(global$1);
	  }

	  return function (callback) {
	    return setTimeout(function () {
	      return callback(Date.now());
	    }, 1000 / 60);
	  };
	}(); // Defines minimum timeout before adding a trailing call.


	var trailingTimeout = 2;
	/**
	 * Creates a wrapper function which ensures that provided callback will be
	 * invoked only once during the specified delay period.
	 *
	 * @param {Function} callback - Function to be invoked after the delay period.
	 * @param {number} delay - Delay after which to invoke callback.
	 * @returns {Function}
	 */

	function throttle(callback, delay) {
	  var leadingCall = false,
	      trailingCall = false,
	      lastCallTime = 0;
	  /**
	   * Invokes the original callback function and schedules new invocation if
	   * the "proxy" was called during current request.
	   *
	   * @returns {void}
	   */

	  function resolvePending() {
	    if (leadingCall) {
	      leadingCall = false;
	      callback();
	    }

	    if (trailingCall) {
	      proxy();
	    }
	  }
	  /**
	   * Callback invoked after the specified delay. It will further postpone
	   * invocation of the original function delegating it to the
	   * requestAnimationFrame.
	   *
	   * @returns {void}
	   */


	  function timeoutCallback() {
	    requestAnimationFrame$1(resolvePending);
	  }
	  /**
	   * Schedules invocation of the original function.
	   *
	   * @returns {void}
	   */


	  function proxy() {
	    var timeStamp = Date.now();

	    if (leadingCall) {
	      // Reject immediately following calls.
	      if (timeStamp - lastCallTime < trailingTimeout) {
	        return;
	      } // Schedule new call to be in invoked when the pending one is resolved.
	      // This is important for "transitions" which never actually start
	      // immediately so there is a chance that we might miss one if change
	      // happens amids the pending invocation.


	      trailingCall = true;
	    } else {
	      leadingCall = true;
	      trailingCall = false;
	      setTimeout(timeoutCallback, delay);
	    }

	    lastCallTime = timeStamp;
	  }

	  return proxy;
	} // Minimum delay before invoking the update of observers.


	var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
	// might affect dimensions of observed elements.

	var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

	var mutationObserverSupported = typeof MutationObserver !== 'undefined';
	/**
	 * Singleton controller class which handles updates of ResizeObserver instances.
	 */

	var ResizeObserverController = function () {
	  /**
	   * Creates a new instance of ResizeObserverController.
	   *
	   * @private
	   */
	  function ResizeObserverController() {
	    /**
	     * Indicates whether DOM listeners have been added.
	     *
	     * @private {boolean}
	     */
	    this.connected_ = false;
	    /**
	     * Tells that controller has subscribed for Mutation Events.
	     *
	     * @private {boolean}
	     */

	    this.mutationEventsAdded_ = false;
	    /**
	     * Keeps reference to the instance of MutationObserver.
	     *
	     * @private {MutationObserver}
	     */

	    this.mutationsObserver_ = null;
	    /**
	     * A list of connected observers.
	     *
	     * @private {Array<ResizeObserverSPI>}
	     */

	    this.observers_ = [];
	    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
	    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
	  }
	  /**
	   * Adds observer to observers list.
	   *
	   * @param {ResizeObserverSPI} observer - Observer to be added.
	   * @returns {void}
	   */


	  ResizeObserverController.prototype.addObserver = function (observer) {
	    if (!~this.observers_.indexOf(observer)) {
	      this.observers_.push(observer);
	    } // Add listeners if they haven't been added yet.


	    if (!this.connected_) {
	      this.connect_();
	    }
	  };
	  /**
	   * Removes observer from observers list.
	   *
	   * @param {ResizeObserverSPI} observer - Observer to be removed.
	   * @returns {void}
	   */


	  ResizeObserverController.prototype.removeObserver = function (observer) {
	    var observers = this.observers_;
	    var index = observers.indexOf(observer); // Remove observer if it's present in registry.

	    if (~index) {
	      observers.splice(index, 1);
	    } // Remove listeners if controller has no connected observers.


	    if (!observers.length && this.connected_) {
	      this.disconnect_();
	    }
	  };
	  /**
	   * Invokes the update of observers. It will continue running updates insofar
	   * it detects changes.
	   *
	   * @returns {void}
	   */


	  ResizeObserverController.prototype.refresh = function () {
	    var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
	    // be future ones caused by CSS transitions.

	    if (changesDetected) {
	      this.refresh();
	    }
	  };
	  /**
	   * Updates every observer from observers list and notifies them of queued
	   * entries.
	   *
	   * @private
	   * @returns {boolean} Returns "true" if any observer has detected changes in
	   *      dimensions of it's elements.
	   */


	  ResizeObserverController.prototype.updateObservers_ = function () {
	    // Collect observers that have active observations.
	    var activeObservers = this.observers_.filter(function (observer) {
	      return observer.gatherActive(), observer.hasActive();
	    }); // Deliver notifications in a separate cycle in order to avoid any
	    // collisions between observers, e.g. when multiple instances of
	    // ResizeObserver are tracking the same element and the callback of one
	    // of them changes content dimensions of the observed target. Sometimes
	    // this may result in notifications being blocked for the rest of observers.

	    activeObservers.forEach(function (observer) {
	      return observer.broadcastActive();
	    });
	    return activeObservers.length > 0;
	  };
	  /**
	   * Initializes DOM listeners.
	   *
	   * @private
	   * @returns {void}
	   */


	  ResizeObserverController.prototype.connect_ = function () {
	    // Do nothing if running in a non-browser environment or if listeners
	    // have been already added.
	    if (!isBrowser || this.connected_) {
	      return;
	    } // Subscription to the "Transitionend" event is used as a workaround for
	    // delayed transitions. This way it's possible to capture at least the
	    // final state of an element.


	    document.addEventListener('transitionend', this.onTransitionEnd_);
	    window.addEventListener('resize', this.refresh);

	    if (mutationObserverSupported) {
	      this.mutationsObserver_ = new MutationObserver(this.refresh);
	      this.mutationsObserver_.observe(document, {
	        attributes: true,
	        childList: true,
	        characterData: true,
	        subtree: true
	      });
	    } else {
	      document.addEventListener('DOMSubtreeModified', this.refresh);
	      this.mutationEventsAdded_ = true;
	    }

	    this.connected_ = true;
	  };
	  /**
	   * Removes DOM listeners.
	   *
	   * @private
	   * @returns {void}
	   */


	  ResizeObserverController.prototype.disconnect_ = function () {
	    // Do nothing if running in a non-browser environment or if listeners
	    // have been already removed.
	    if (!isBrowser || !this.connected_) {
	      return;
	    }

	    document.removeEventListener('transitionend', this.onTransitionEnd_);
	    window.removeEventListener('resize', this.refresh);

	    if (this.mutationsObserver_) {
	      this.mutationsObserver_.disconnect();
	    }

	    if (this.mutationEventsAdded_) {
	      document.removeEventListener('DOMSubtreeModified', this.refresh);
	    }

	    this.mutationsObserver_ = null;
	    this.mutationEventsAdded_ = false;
	    this.connected_ = false;
	  };
	  /**
	   * "Transitionend" event handler.
	   *
	   * @private
	   * @param {TransitionEvent} event
	   * @returns {void}
	   */


	  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
	    var _b = _a.propertyName,
	        propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

	    var isReflowProperty = transitionKeys.some(function (key) {
	      return !!~propertyName.indexOf(key);
	    });

	    if (isReflowProperty) {
	      this.refresh();
	    }
	  };
	  /**
	   * Returns instance of the ResizeObserverController.
	   *
	   * @returns {ResizeObserverController}
	   */


	  ResizeObserverController.getInstance = function () {
	    if (!this.instance_) {
	      this.instance_ = new ResizeObserverController();
	    }

	    return this.instance_;
	  };
	  /**
	   * Holds reference to the controller's instance.
	   *
	   * @private {ResizeObserverController}
	   */


	  ResizeObserverController.instance_ = null;
	  return ResizeObserverController;
	}();
	/**
	 * Defines non-writable/enumerable properties of the provided target object.
	 *
	 * @param {Object} target - Object for which to define properties.
	 * @param {Object} props - Properties to be defined.
	 * @returns {Object} Target object.
	 */


	var defineConfigurable = function (target, props) {
	  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
	    var key = _a[_i];
	    Object.defineProperty(target, key, {
	      value: props[key],
	      enumerable: false,
	      writable: false,
	      configurable: true
	    });
	  }

	  return target;
	};
	/**
	 * Returns the global object associated with provided element.
	 *
	 * @param {Object} target
	 * @returns {Object}
	 */


	var getWindowOf = function (target) {
	  // Assume that the element is an instance of Node, which means that it
	  // has the "ownerDocument" property from which we can retrieve a
	  // corresponding global object.
	  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
	  // provided element.

	  return ownerGlobal || global$1;
	}; // Placeholder of an empty content rectangle.


	var emptyRect = createRectInit(0, 0, 0, 0);
	/**
	 * Converts provided string to a number.
	 *
	 * @param {number|string} value
	 * @returns {number}
	 */

	function toFloat(value) {
	  return parseFloat(value) || 0;
	}
	/**
	 * Extracts borders size from provided styles.
	 *
	 * @param {CSSStyleDeclaration} styles
	 * @param {...string} positions - Borders positions (top, right, ...)
	 * @returns {number}
	 */


	function getBordersSize(styles) {
	  var positions = [];

	  for (var _i = 1; _i < arguments.length; _i++) {
	    positions[_i - 1] = arguments[_i];
	  }

	  return positions.reduce(function (size, position) {
	    var value = styles['border-' + position + '-width'];
	    return size + toFloat(value);
	  }, 0);
	}
	/**
	 * Extracts paddings sizes from provided styles.
	 *
	 * @param {CSSStyleDeclaration} styles
	 * @returns {Object} Paddings box.
	 */


	function getPaddings(styles) {
	  var positions = ['top', 'right', 'bottom', 'left'];
	  var paddings = {};

	  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
	    var position = positions_1[_i];
	    var value = styles['padding-' + position];
	    paddings[position] = toFloat(value);
	  }

	  return paddings;
	}
	/**
	 * Calculates content rectangle of provided SVG element.
	 *
	 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
	 *      to be calculated.
	 * @returns {DOMRectInit}
	 */


	function getSVGContentRect(target) {
	  var bbox = target.getBBox();
	  return createRectInit(0, 0, bbox.width, bbox.height);
	}
	/**
	 * Calculates content rectangle of provided HTMLElement.
	 *
	 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
	 * @returns {DOMRectInit}
	 */


	function getHTMLElementContentRect(target) {
	  // Client width & height properties can't be
	  // used exclusively as they provide rounded values.
	  var clientWidth = target.clientWidth,
	      clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
	  // detached elements. Though elements with width & height properties less
	  // than 0.5 will be discarded as well.
	  //
	  // Without it we would need to implement separate methods for each of
	  // those cases and it's not possible to perform a precise and performance
	  // effective test for hidden elements. E.g. even jQuery's ':visible' filter
	  // gives wrong results for elements with width & height less than 0.5.

	  if (!clientWidth && !clientHeight) {
	    return emptyRect;
	  }

	  var styles = getWindowOf(target).getComputedStyle(target);
	  var paddings = getPaddings(styles);
	  var horizPad = paddings.left + paddings.right;
	  var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
	  // only dimensions available to JS that contain non-rounded values. It could
	  // be possible to utilize the getBoundingClientRect if only it's data wasn't
	  // affected by CSS transformations let alone paddings, borders and scroll bars.

	  var width = toFloat(styles.width),
	      height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
	  // model is applied (except for IE).

	  if (styles.boxSizing === 'border-box') {
	    // Following conditions are required to handle Internet Explorer which
	    // doesn't include paddings and borders to computed CSS dimensions.
	    //
	    // We can say that if CSS dimensions + paddings are equal to the "client"
	    // properties then it's either IE, and thus we don't need to subtract
	    // anything, or an element merely doesn't have paddings/borders styles.
	    if (Math.round(width + horizPad) !== clientWidth) {
	      width -= getBordersSize(styles, 'left', 'right') + horizPad;
	    }

	    if (Math.round(height + vertPad) !== clientHeight) {
	      height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
	    }
	  } // Following steps can't be applied to the document's root element as its
	  // client[Width/Height] properties represent viewport area of the window.
	  // Besides, it's as well not necessary as the <html> itself neither has
	  // rendered scroll bars nor it can be clipped.


	  if (!isDocumentElement(target)) {
	    // In some browsers (only in Firefox, actually) CSS width & height
	    // include scroll bars size which can be removed at this step as scroll
	    // bars are the only difference between rounded dimensions + paddings
	    // and "client" properties, though that is not always true in Chrome.
	    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
	    var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
	    // E.g. for an element with content width of 314.2px it sometimes gives
	    // the client width of 315px and for the width of 314.7px it may give
	    // 314px. And it doesn't happen all the time. So just ignore this delta
	    // as a non-relevant.

	    if (Math.abs(vertScrollbar) !== 1) {
	      width -= vertScrollbar;
	    }

	    if (Math.abs(horizScrollbar) !== 1) {
	      height -= horizScrollbar;
	    }
	  }

	  return createRectInit(paddings.left, paddings.top, width, height);
	}
	/**
	 * Checks whether provided element is an instance of the SVGGraphicsElement.
	 *
	 * @param {Element} target - Element to be checked.
	 * @returns {boolean}
	 */


	var isSVGGraphicsElement = function () {
	  // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
	  // interface.
	  if (typeof SVGGraphicsElement !== 'undefined') {
	    return function (target) {
	      return target instanceof getWindowOf(target).SVGGraphicsElement;
	    };
	  } // If it's so, then check that element is at least an instance of the
	  // SVGElement and that it has the "getBBox" method.
	  // eslint-disable-next-line no-extra-parens


	  return function (target) {
	    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
	  };
	}();
	/**
	 * Checks whether provided element is a document element (<html>).
	 *
	 * @param {Element} target - Element to be checked.
	 * @returns {boolean}
	 */


	function isDocumentElement(target) {
	  return target === getWindowOf(target).document.documentElement;
	}
	/**
	 * Calculates an appropriate content rectangle for provided html or svg element.
	 *
	 * @param {Element} target - Element content rectangle of which needs to be calculated.
	 * @returns {DOMRectInit}
	 */


	function getContentRect(target) {
	  if (!isBrowser) {
	    return emptyRect;
	  }

	  if (isSVGGraphicsElement(target)) {
	    return getSVGContentRect(target);
	  }

	  return getHTMLElementContentRect(target);
	}
	/**
	 * Creates rectangle with an interface of the DOMRectReadOnly.
	 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
	 *
	 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
	 * @returns {DOMRectReadOnly}
	 */


	function createReadOnlyRect(_a) {
	  var x = _a.x,
	      y = _a.y,
	      width = _a.width,
	      height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

	  var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
	  var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

	  defineConfigurable(rect, {
	    x: x,
	    y: y,
	    width: width,
	    height: height,
	    top: y,
	    right: x + width,
	    bottom: height + y,
	    left: x
	  });
	  return rect;
	}
	/**
	 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
	 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
	 *
	 * @param {number} x - X coordinate.
	 * @param {number} y - Y coordinate.
	 * @param {number} width - Rectangle's width.
	 * @param {number} height - Rectangle's height.
	 * @returns {DOMRectInit}
	 */


	function createRectInit(x, y, width, height) {
	  return {
	    x: x,
	    y: y,
	    width: width,
	    height: height
	  };
	}
	/**
	 * Class that is responsible for computations of the content rectangle of
	 * provided DOM element and for keeping track of it's changes.
	 */


	var ResizeObservation = function () {
	  /**
	   * Creates an instance of ResizeObservation.
	   *
	   * @param {Element} target - Element to be observed.
	   */
	  function ResizeObservation(target) {
	    /**
	     * Broadcasted width of content rectangle.
	     *
	     * @type {number}
	     */
	    this.broadcastWidth = 0;
	    /**
	     * Broadcasted height of content rectangle.
	     *
	     * @type {number}
	     */

	    this.broadcastHeight = 0;
	    /**
	     * Reference to the last observed content rectangle.
	     *
	     * @private {DOMRectInit}
	     */

	    this.contentRect_ = createRectInit(0, 0, 0, 0);
	    this.target = target;
	  }
	  /**
	   * Updates content rectangle and tells whether it's width or height properties
	   * have changed since the last broadcast.
	   *
	   * @returns {boolean}
	   */


	  ResizeObservation.prototype.isActive = function () {
	    var rect = getContentRect(this.target);
	    this.contentRect_ = rect;
	    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
	  };
	  /**
	   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
	   * from the corresponding properties of the last observed content rectangle.
	   *
	   * @returns {DOMRectInit} Last observed content rectangle.
	   */


	  ResizeObservation.prototype.broadcastRect = function () {
	    var rect = this.contentRect_;
	    this.broadcastWidth = rect.width;
	    this.broadcastHeight = rect.height;
	    return rect;
	  };

	  return ResizeObservation;
	}();

	var ResizeObserverEntry = function () {
	  /**
	   * Creates an instance of ResizeObserverEntry.
	   *
	   * @param {Element} target - Element that is being observed.
	   * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
	   */
	  function ResizeObserverEntry(target, rectInit) {
	    var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
	    // and are also not enumerable in the native implementation.
	    //
	    // Property accessors are not being used as they'd require to define a
	    // private WeakMap storage which may cause memory leaks in browsers that
	    // don't support this type of collections.

	    defineConfigurable(this, {
	      target: target,
	      contentRect: contentRect
	    });
	  }

	  return ResizeObserverEntry;
	}();

	var ResizeObserverSPI = function () {
	  /**
	   * Creates a new instance of ResizeObserver.
	   *
	   * @param {ResizeObserverCallback} callback - Callback function that is invoked
	   *      when one of the observed elements changes it's content dimensions.
	   * @param {ResizeObserverController} controller - Controller instance which
	   *      is responsible for the updates of observer.
	   * @param {ResizeObserver} callbackCtx - Reference to the public
	   *      ResizeObserver instance which will be passed to callback function.
	   */
	  function ResizeObserverSPI(callback, controller, callbackCtx) {
	    /**
	     * Collection of resize observations that have detected changes in dimensions
	     * of elements.
	     *
	     * @private {Array<ResizeObservation>}
	     */
	    this.activeObservations_ = [];
	    /**
	     * Registry of the ResizeObservation instances.
	     *
	     * @private {Map<Element, ResizeObservation>}
	     */

	    this.observations_ = new MapShim();

	    if (typeof callback !== 'function') {
	      throw new TypeError('The callback provided as parameter 1 is not a function.');
	    }

	    this.callback_ = callback;
	    this.controller_ = controller;
	    this.callbackCtx_ = callbackCtx;
	  }
	  /**
	   * Starts observing provided element.
	   *
	   * @param {Element} target - Element to be observed.
	   * @returns {void}
	   */


	  ResizeObserverSPI.prototype.observe = function (target) {
	    if (!arguments.length) {
	      throw new TypeError('1 argument required, but only 0 present.');
	    } // Do nothing if current environment doesn't have the Element interface.


	    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
	      return;
	    }

	    if (!(target instanceof getWindowOf(target).Element)) {
	      throw new TypeError('parameter 1 is not of type "Element".');
	    }

	    var observations = this.observations_; // Do nothing if element is already being observed.

	    if (observations.has(target)) {
	      return;
	    }

	    observations.set(target, new ResizeObservation(target));
	    this.controller_.addObserver(this); // Force the update of observations.

	    this.controller_.refresh();
	  };
	  /**
	   * Stops observing provided element.
	   *
	   * @param {Element} target - Element to stop observing.
	   * @returns {void}
	   */


	  ResizeObserverSPI.prototype.unobserve = function (target) {
	    if (!arguments.length) {
	      throw new TypeError('1 argument required, but only 0 present.');
	    } // Do nothing if current environment doesn't have the Element interface.


	    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
	      return;
	    }

	    if (!(target instanceof getWindowOf(target).Element)) {
	      throw new TypeError('parameter 1 is not of type "Element".');
	    }

	    var observations = this.observations_; // Do nothing if element is not being observed.

	    if (!observations.has(target)) {
	      return;
	    }

	    observations.delete(target);

	    if (!observations.size) {
	      this.controller_.removeObserver(this);
	    }
	  };
	  /**
	   * Stops observing all elements.
	   *
	   * @returns {void}
	   */


	  ResizeObserverSPI.prototype.disconnect = function () {
	    this.clearActive();
	    this.observations_.clear();
	    this.controller_.removeObserver(this);
	  };
	  /**
	   * Collects observation instances the associated element of which has changed
	   * it's content rectangle.
	   *
	   * @returns {void}
	   */


	  ResizeObserverSPI.prototype.gatherActive = function () {
	    var _this = this;

	    this.clearActive();
	    this.observations_.forEach(function (observation) {
	      if (observation.isActive()) {
	        _this.activeObservations_.push(observation);
	      }
	    });
	  };
	  /**
	   * Invokes initial callback function with a list of ResizeObserverEntry
	   * instances collected from active resize observations.
	   *
	   * @returns {void}
	   */


	  ResizeObserverSPI.prototype.broadcastActive = function () {
	    // Do nothing if observer doesn't have active observations.
	    if (!this.hasActive()) {
	      return;
	    }

	    var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

	    var entries = this.activeObservations_.map(function (observation) {
	      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
	    });
	    this.callback_.call(ctx, entries, ctx);
	    this.clearActive();
	  };
	  /**
	   * Clears the collection of active observations.
	   *
	   * @returns {void}
	   */


	  ResizeObserverSPI.prototype.clearActive = function () {
	    this.activeObservations_.splice(0);
	  };
	  /**
	   * Tells whether observer has active observations.
	   *
	   * @returns {boolean}
	   */


	  ResizeObserverSPI.prototype.hasActive = function () {
	    return this.activeObservations_.length > 0;
	  };

	  return ResizeObserverSPI;
	}(); // Registry of internal observers. If WeakMap is not available use current shim
	// for the Map collection as it has all required methods and because WeakMap
	// can't be fully polyfilled anyway.


	var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
	/**
	 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
	 * exposing only those methods and properties that are defined in the spec.
	 */

	var ResizeObserver = function () {
	  /**
	   * Creates a new instance of ResizeObserver.
	   *
	   * @param {ResizeObserverCallback} callback - Callback that is invoked when
	   *      dimensions of the observed elements change.
	   */
	  function ResizeObserver(callback) {
	    if (!(this instanceof ResizeObserver)) {
	      throw new TypeError('Cannot call a class as a function.');
	    }

	    if (!arguments.length) {
	      throw new TypeError('1 argument required, but only 0 present.');
	    }

	    var controller = ResizeObserverController.getInstance();
	    var observer = new ResizeObserverSPI(callback, controller, this);
	    observers.set(this, observer);
	  }

	  return ResizeObserver;
	}(); // Expose public methods of ResizeObserver.


	['observe', 'unobserve', 'disconnect'].forEach(function (method) {
	  ResizeObserver.prototype[method] = function () {
	    var _a;

	    return (_a = observers.get(this))[method].apply(_a, arguments);
	  };
	});

	var index = function () {
	  // Export existing implementation if available.
	  if (typeof global$1.ResizeObserver !== 'undefined') {
	    return global$1.ResizeObserver;
	  }

	  return ResizeObserver;
	}();

	function getTargetElement(target, defaultElement) {
	  if (!target) {
	    return defaultElement;
	  }

	  var targetElement;

	  if (typeof target === 'function') {
	    targetElement = target();
	  } else if ('current' in target) {
	    targetElement = target.current;
	  } else {
	    targetElement = target;
	  }

	  return targetElement;
	}

	function usePersistFn(fn) {
	  var fnRef = React.useRef(fn);
	  fnRef.current = fn;
	  var persistFn = React.useRef();

	  if (!persistFn.current) {
	    persistFn.current = function () {
	      var args = [];

	      for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	      }

	      return fnRef.current.apply(this, args);
	    };
	  }

	  return persistFn.current;
	}

	function isFunction(obj) {
	  return typeof obj === 'function';
	}

	var useUnmount = function useUnmount(fn) {
	  var fnPersist = usePersistFn(fn);
	  React.useEffect(function () {
	    return function () {
	      if (isFunction(fnPersist)) {
	        fnPersist();
	      }
	    };
	  }, []);
	};

	var useUnmount$1 = useUnmount;

	var __read$2 = undefined && undefined.__read || function (o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	      r,
	      ar = [],
	      e;

	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
	      ar.push(r.value);
	    }
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }

	  return ar;
	};

	var useRafState = function useRafState(initialState) {
	  var frame = React.useRef(0);

	  var _a = __read$2(React.useState(initialState), 2),
	      state = _a[0],
	      setState = _a[1];

	  var setRafState = React.useCallback(function (value) {
	    cancelAnimationFrame(frame.current);
	    frame.current = requestAnimationFrame(function () {
	      setState(value);
	    });
	  }, []);
	  useUnmount$1(function () {
	    cancelAnimationFrame(frame.current);
	  });
	  return [state, setRafState];
	};

	var useRafState$1 = useRafState;

	var __read$1 = undefined && undefined.__read || function (o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	      r,
	      ar = [],
	      e;

	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
	      ar.push(r.value);
	    }
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }

	  return ar;
	};

	function useSize(target) {
	  var _a = __read$1(useRafState$1(function () {
	    var el = getTargetElement(target);
	    return {
	      width: (el || {}).clientWidth,
	      height: (el || {}).clientHeight
	    };
	  }), 2),
	      state = _a[0],
	      setState = _a[1];

	  React.useLayoutEffect(function () {
	    var el = getTargetElement(target);

	    if (!el) {
	      return function () {};
	    }

	    var resizeObserver = new index(function (entries) {
	      entries.forEach(function (entry) {
	        setState({
	          width: entry.target.clientWidth,
	          height: entry.target.clientHeight
	        });
	      });
	    });
	    resizeObserver.observe(el);
	    return function () {
	      resizeObserver.disconnect();
	    };
	  }, [target]);
	  return state;
	}

	var __assign = undefined && undefined.__assign || function () {
	  __assign = Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	      s = arguments[i];

	      for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	      }
	    }

	    return t;
	  };

	  return __assign.apply(this, arguments);
	};
	function useWhyDidYouUpdate(componentName, props) {
	  var prevProps = React.useRef({});
	  React.useEffect(function () {
	    if (prevProps.current) {
	      var allKeys = Object.keys(__assign(__assign({}, prevProps.current), props));
	      var changedProps_1 = {};
	      allKeys.forEach(function (key) {
	        if (prevProps.current[key] !== props[key]) {
	          changedProps_1[key] = {
	            from: prevProps.current[key],
	            to: props[key]
	          };
	        }
	      });

	      if (Object.keys(changedProps_1).length) {
	        console.log('[why-did-you-update]', componentName, changedProps_1);
	      }
	    }

	    prevProps.current = props;
	  });
	}

	var __read = undefined && undefined.__read || function (o, n) {
	  var m = typeof Symbol === "function" && o[Symbol.iterator];
	  if (!m) return o;
	  var i = m.call(o),
	      r,
	      ar = [],
	      e;

	  try {
	    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
	      ar.push(r.value);
	    }
	  } catch (error) {
	    e = {
	      error: error
	    };
	  } finally {
	    try {
	      if (r && !r.done && (m = i["return"])) m.call(i);
	    } finally {
	      if (e) throw e.error;
	    }
	  }

	  return ar;
	};

	undefined && undefined.__spread || function () {
	  for (var ar = [], i = 0; i < arguments.length; i++) {
	    ar = ar.concat(__read(arguments[i]));
	  }

	  return ar;
	};

	const useMapCenter = (map) => {
	    const [lngLat, setLngLat] = React.useState();
	    React.useEffect(() => {
	        const handle = () => {
	            setLngLat(map.getCenter());
	        };
	        map.on("mapmove", handle);
	        return () => {
	            map.off("mapmove", handle);
	        };
	    }, [map]);
	    return lngLat;
	};

	var classnames = {exports: {}};

	/*!
	  Copyright (c) 2018 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function (module) {
	/* global define */
	(function () {

	  var hasOwn = {}.hasOwnProperty;

	  function classNames() {
	    var classes = [];

	    for (var i = 0; i < arguments.length; i++) {
	      var arg = arguments[i];
	      if (!arg) continue;
	      var argType = typeof arg;

	      if (argType === 'string' || argType === 'number') {
	        classes.push(arg);
	      } else if (Array.isArray(arg)) {
	        if (arg.length) {
	          var inner = classNames.apply(null, arg);

	          if (inner) {
	            classes.push(inner);
	          }
	        }
	      } else if (argType === 'object') {
	        if (arg.toString === Object.prototype.toString) {
	          for (var key in arg) {
	            if (hasOwn.call(arg, key) && arg[key]) {
	              classes.push(key);
	            }
	          }
	        } else {
	          classes.push(arg.toString());
	        }
	      }
	    }

	    return classes.join(' ');
	  }

	  if (module.exports) {
	    classNames.default = classNames;
	    module.exports = classNames;
	  } else {
	    window.classNames = classNames;
	  }
	})();
	}(classnames));

	var classNames = classnames.exports;

	const Alert = ({
	  className,
	  bootstrapStyle,
	  children
	}) => React.Children.count(children) > 0 ? React.createElement("div", {
	  className: classNames(`alert alert-${bootstrapStyle}`, className)
	}, children) : null;
	Alert.displayName = "Alert";

	const executeAction = action => {
	  if (action && action.canExecute && !action.isExecuting) {
	    action.execute();
	  }
	};
	const debounce = (func, waitFor) => {
	  let timeout = null;

	  const debounced = (...args) => {
	    if (timeout !== null) {
	      clearTimeout(timeout);
	      timeout = null;
	    }

	    timeout = setTimeout(() => func(...args), waitFor);
	  };

	  return debounced;
	};

	var FormatterType;

	(function (FormatterType) {
	  FormatterType["Number"] = "number";
	  FormatterType["DateTime"] = "datetime";
	})(FormatterType || (FormatterType = {}));

	var _importedScript = {};
	/**
	 * load dependency by script tag
	 */

	function requireScript(src) {
	  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_react_amap';
	  var headElement = document && (document.head || document.getElementsByTagName('head')[0]);
	  return new Promise(function (resolve, reject) {
	    if (!document || src in _importedScript) {
	      resolve();
	      return;
	    }

	    var script = document.createElement('script');
	    script.type = 'text/javascript';
	    script.id = id;
	    script.async = true;
	    script.defer = true;
	    script.src = src;

	    script.onerror = function (err) {
	      headElement.removeChild(script);
	      reject(new URIError("The Script ".concat(src, " is no accessible.")));
	    };

	    script.onload = function () {
	      _importedScript[src] = true;
	      resolve();
	    };

	    headElement.appendChild(script);
	  });
	}

	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function _typeof(obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
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
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
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
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
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
	  if (call && (_typeof(call) === "object" || typeof call === "function")) {
	    return call;
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

	var runtime = {exports: {}};

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	(function (module) {
	var runtime = function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.

	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }

	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function (obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.

	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	    return generator;
	  }

	  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.

	  function tryCatch(fn, obj, arg) {
	    try {
	      return {
	        type: "normal",
	        arg: fn.call(obj, arg)
	      };
	    } catch (err) {
	      return {
	        type: "throw",
	        arg: err
	      };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.

	  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.

	  function Generator() {}

	  function GeneratorFunction() {}

	  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.


	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

	  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  define(Gp, "constructor", GeneratorFunctionPrototype);
	  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
	  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.

	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      define(prototype, method, function (arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  exports.mark = function (genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }

	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  }; // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.


	  exports.awrap = function (arg) {
	    return {
	      __await: arg
	    };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);

	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;

	        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function (error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise = // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    } // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).


	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  });
	  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.

	  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        } // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;

	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);

	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;
	        var record = tryCatch(innerFn, self, context);

	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };
	        } else if (record.type === "throw") {
	          state = GenStateCompleted; // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.

	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  } // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.


	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];

	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError("The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (!info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

	      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.

	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    } // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.


	    context.delegate = null;
	    return ContinueSentinel;
	  } // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.


	  defineIteratorMethods(Gp);
	  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.

	  define(Gp, iteratorSymbol, function () {
	    return this;
	  });
	  define(Gp, "toString", function () {
	    return "[object Generator]";
	  });

	  function pushTryEntry(locs) {
	    var entry = {
	      tryLoc: locs[0]
	    };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{
	      tryLoc: "root"
	    }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function (object) {
	    var keys = [];

	    for (var key in object) {
	      keys.push(key);
	    }

	    keys.reverse(); // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.

	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();

	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      } // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.


	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];

	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;
	          return next;
	        };

	        return next.next = next;
	      }
	    } // Return an iterator with no values.


	    return {
	      next: doneResult
	    };
	  }

	  exports.values = values;

	  function doneResult() {
	    return {
	      value: undefined$1,
	      done: true
	    };
	  }

	  Context.prototype = {
	    constructor: Context,
	    reset: function (skipTempReset) {
	      this.prev = 0;
	      this.next = 0; // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.

	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;
	      this.method = "next";
	      this.arg = undefined$1;
	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },
	    stop: function () {
	      this.done = true;
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;

	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },
	    dispatchException: function (exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;

	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	    abrupt: function (type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];

	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },
	    complete: function (record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },
	    finish: function (finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];

	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	    "catch": function (tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];

	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;

	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }

	          return thrown;
	        }
	      } // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.


	      throw new Error("illegal catch attempt");
	    },
	    delegateYield: function (iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  }; // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.

	  return exports;
	}( // If this script is executing as a CommonJS module, use module.exports
	// as the regeneratorRuntime namespace. Otherwise create a new empty
	// object. Either way, the resulting object will be used to initialize
	// the regeneratorRuntime variable at the top of this file.
	module.exports );

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, in modern engines
	  // we can explicitly access globalThis. In older engines we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}
	}(runtime));

	var regenerator = runtime.exports;

	function delay(time) {
	  return new Promise(function (resolve, reject) {
	    window.setTimeout(resolve, time);
	  });
	}
	var DEFAULT_RETRY_TIME = 3;
	/**
	 * APILoader 用于加载百度地图依赖
	 */

	var APILoader = /*#__PURE__*/function (_React$Component) {
	  _inherits(APILoader, _React$Component);

	  var _super = _createSuper(APILoader);
	  /**
	   * 全局可能存在多个 Loader 同时渲染, 但是只能由一个负责加载
	   */


	  function APILoader(props) {
	    var _this;

	    _classCallCheck(this, APILoader);

	    _this = _super.call(this, props);
	    _this.state = {
	      loaded: !!window.AMap
	    };

	    _this.handleError = function (error) {
	      _this.setState({
	        error: error
	      });
	    };

	    _this.finish = function () {
	      _this.setState({
	        loaded: true
	      });
	    };

	    if (props.akay === null) {
	      throw new TypeError('AMap: akay is required');
	    }

	    return _this;
	  }

	  _createClass(APILoader, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var callbackName = this.props.callbackName;

	      if (window.AMap == null) {
	        if (window[callbackName]) {
	          APILoader.waitQueue.push([this.finish, this.handleError]);
	          return;
	        }

	        this.loadMap();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return this.state.loaded ? this.props.children : this.props.fallback ? this.props.fallback(this.state.error) : this.state.error ? /*#__PURE__*/React__default['default'].createElement("div", {
	        style: {
	          color: 'red'
	        }
	      }, this.state.error.message) : null;
	    }
	  }, {
	    key: "getScriptSrc",
	    value: function getScriptSrc() {
	      var cfg = this.props;
	      var protocol = cfg.protocol || window.location.protocol;

	      if (protocol.indexOf(':') === -1) {
	        protocol += ':';
	      }

	      return "".concat(protocol, "//").concat(cfg.hostAndPath, "?v=").concat(cfg.version, "&key=").concat(cfg.akay, "&callback=").concat(cfg.callbackName);
	    }
	    /**
	     * load BaiduMap in script tag
	     */

	  }, {
	    key: "loadMap",
	    value: function () {
	      var _loadMap = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
	        var _this2 = this;

	        var callbackName, src, i, _ret;

	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                callbackName = this.props.callbackName;
	                src = this.getScriptSrc();

	                window[callbackName] = function () {
	                  // flush queue
	                  var queue = APILoader.waitQueue;
	                  APILoader.waitQueue = [];
	                  queue.forEach(function (task) {
	                    return task[0]();
	                  });

	                  _this2.finish();
	                };

	                i = 0;

	              case 4:
	                if (!(i < DEFAULT_RETRY_TIME)) {
	                  _context.next = 22;
	                  break;
	                }

	                _context.prev = 5;
	                _context.next = 8;
	                return requireScript(src);

	              case 8:
	                return _context.abrupt("break", 22);

	              case 11:
	                _context.prev = 11;
	                _context.t0 = _context["catch"](5);

	                if (!(i === DEFAULT_RETRY_TIME - 1)) {
	                  _context.next = 17;
	                  break;
	                }

	                _ret = function () {
	                  var err = new Error("Failed to load AMap: ".concat(_context.t0.message)); // flush queue

	                  var queue = APILoader.waitQueue;
	                  APILoader.waitQueue = [];
	                  queue.forEach(function (task) {
	                    return task[1](err);
	                  });

	                  _this2.handleError(err);

	                  return {
	                    v: void 0
	                  };
	                }();

	                if (!(_typeof(_ret) === "object")) {
	                  _context.next = 17;
	                  break;
	                }

	                return _context.abrupt("return", _ret.v);

	              case 17:
	                _context.next = 19;
	                return delay(i * 1000);

	              case 19:
	                i++;
	                _context.next = 4;
	                break;

	              case 22:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[5, 11]]);
	      }));

	      function loadMap() {
	        return _loadMap.apply(this, arguments);
	      }

	      return loadMap;
	    }()
	  }]);

	  return APILoader;
	}(React__default['default'].Component);
	APILoader.defaultProps = {
	  akay: '',
	  hostAndPath: 'webapi.amap.com/maps',
	  version: '2.0',
	  callbackName: 'load_amap_sdk'
	};
	APILoader.waitQueue = [];

	function _defineProperty(obj, key, value) {
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

	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);

	    if (enumerableOnly) {
	      symbols = symbols.filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	    }

	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = _objectWithoutPropertiesLoose(source, excluded);
	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	/**
	 * 对实例有 setStatus 更改状态的处理
	 * @param instance
	 * @param props
	 * @param propsName
	 */

	function useSetStatus(instance) {
	  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var propsName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  propsName.forEach(function (name) {
	    var eName = name; // eslint-disable-next-line react-hooks/rules-of-hooks

	    var _useState = React.useState(props[eName]),
	        _useState2 = _slicedToArray(_useState, 2),
	        state = _useState2[0],
	        setState = _useState2[1]; // eslint-disable-next-line react-hooks/rules-of-hooks


	    React.useEffect(function () {
	      if (instance && props[eName] !== undefined) {
	        if (props[eName] !== state) {
	          // map.setStatus({
	          //   dragEnable: true,
	          //   keyboardEnable: true,
	          //   doubleClickZoom: true,
	          //   zoomEnable: true,
	          //   rotateEnable: true
	          // });
	          var status = instance.getStatus();
	          instance.setStatus(_objectSpread2(_objectSpread2({}, status), {}, _defineProperty({}, eName, props[eName])));
	          setState(props[eName]);
	        }
	      } // eslint-disable-next-line react-hooks/exhaustive-deps

	    }, [instance, props[eName]]);
	  });
	}
	/**
	 * 针对 Overlay 类型的组件，有公共的是否显示 对象处理
	 * 通过参数 `visiable` 来控制执行 `show()` or `hide()`
	 */

	function useVisiable(instance, visiable) {
	  var _useState3 = React.useState(visiable),
	      _useState4 = _slicedToArray(_useState3, 2),
	      state = _useState4[0],
	      setState = _useState4[1];

	  React.useEffect(function () {
	    if (instance && visiable !== undefined) {
	      if (visiable) {
	        instance.show && instance.show();
	      } else {
	        instance.hide && instance.hide();
	      }

	      if (visiable !== state) {
	        setState(visiable);
	      }
	    } // eslint-disable-next-line react-hooks/exhaustive-deps

	  }, [instance, visiable]);
	}
	/**
	 * 绑定事件
	 * @param instance 实例对象
	 * @param props 传递进来的 props
	 * @param eventName 事件的名字，如，我们使用 `onClick` 事件，最终被转换成，`click` 绑定到实例中，`onDblClick` => `dblclick`
	 *
	 * @example
	 * ```js
	 * useEventProperties<BMap.Marker, UseMarker>(marker!, props, [
	 *   'onMouseMove', 'onZoomChange', 'onMapMove', 'onMouseWheel', 'onZoomStart'
	 * ]);
	 * ```
	 */

	function useEventProperties(instance) {
	  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var eventName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  eventName.forEach(function (name) {
	    var eventName = name;
	    var eventHandle = props[eventName]; // eslint-disable-next-line react-hooks/rules-of-hooks

	    React.useEffect(function () {
	      if (!instance) return;
	      var eName = name.toLocaleLowerCase().replace(/^on/, '');

	      if (eventHandle && eName) {
	        instance.on(eName, eventHandle);
	      }

	      return function () {
	        if (eName && eventHandle) {
	          instance.off(eName, eventHandle);
	        }
	      }; // eslint-disable-next-line react-hooks/exhaustive-deps
	    }, [instance, props[eventName]]);
	  });
	}
	/**
	 * 属性受控
	 * @param instance 实例对象
	 * @param props 属性值
	 * @param propsName 多个属性设置的名称
	 * @example
	 * ```ts
	 * useSettingProperties<AMap.Polyline, UsePolyline>(polyline!, props, [
	 *    'Path'
	 * ]);
	 * ```
	 */

	function useSettingProperties() {
	  var instance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var propsName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  propsName.forEach(function (name) {
	    var eName = "set".concat(name);
	    var vName = "".concat(name.charAt(0).toLowerCase()).concat(name.slice(1)); // eslint-disable-next-line react-hooks/rules-of-hooks

	    var _useState5 = React.useState(props[vName]),
	        _useState6 = _slicedToArray(_useState5, 2),
	        state = _useState6[0],
	        setState = _useState6[1]; // eslint-disable-next-line react-hooks/rules-of-hooks


	    React.useEffect(function () {
	      if (instance && props[vName] !== undefined) {
	        if (props[vName] !== state && instance[eName] && typeof instance[eName] === 'function') {
	          instance[eName](props[vName]);
	          setState(props[vName]);
	        }
	      } // eslint-disable-next-line react-hooks/exhaustive-deps

	    }, [instance, props[vName]]);
	  });
	}

	var useMap = function useMap() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var other = _extends({}, props);

	  var _useState = React.useState(),
	      _useState2 = _slicedToArray(_useState, 2),
	      map = _useState2[0],
	      setMap = _useState2[1];

	  var _useState3 = React.useState(props.zoom || 15),
	      _useState4 = _slicedToArray(_useState3, 2),
	      zoom = _useState4[0],
	      setZoom = _useState4[1];

	  var _useState5 = React.useState(props.container),
	      _useState6 = _slicedToArray(_useState5, 2),
	      container = _useState6[0],
	      setContainer = _useState6[1];

	  React.useEffect(function () {
	    var instance;

	    if (container && !map && AMap) {
	      instance = new AMap.Map(container, _objectSpread2({
	        zoom: zoom
	      }, other));
	      setMap(instance);
	    }

	    return function () {
	      if (instance) {
	        setMap(undefined); // instance.destroy();
	      }
	    };
	  }, [container]);
	  React.useMemo(function () {
	    if (map && typeof props.zoom === 'number' && zoom !== props.zoom && props.zoom >= 2 && props.zoom <= 20) {
	      setZoom(props.zoom);
	      map.setZoom(props.zoom);
	    }
	  }, [zoom, props.zoom]);
	  useSetStatus(map, props, ['dragEnable', 'zoomEnable', 'jogEnable', 'pitchEnable', 'rotateEnable', 'animateEnable', 'keyboardEnable']); // setStatus, setZoomAndCenter, setFitView

	  useSettingProperties(map, props, ['Zoom', 'LabelzIndex', 'Layers', 'Center', 'City', 'Bounds', 'LimitBounds', 'Lang', 'Rotation', 'DefaultCursor', 'MapStyle', 'Features', 'DefaultLayer', 'Pitch']);
	  useEventProperties(map, props, ['onMouseMove', 'onZoomChange', 'onMapMove', 'onMouseWheel', 'onZoomStart', 'onMouseOver', 'onMouseOut', 'onDblClick', 'onClick', 'onZoomEnd', 'onMoveEnd', 'onMouseUp', 'onMouseDown', 'onRightClick', 'onMoveStart', 'onDragStart', 'onDragging', 'onDragEnd', 'onHotspotOut', 'onHotspotOver', 'onTouchStart', 'onComplete', 'onHotspotClick', 'onTouchMove', 'onTouchEnd', 'onResize']);
	  return {
	    map: map,
	    setMap: setMap,
	    container: container,
	    setContainer: setContainer
	  };
	};

	var _excluded$3 = ["className", "style", "children"]; /// <reference types="../types" />
	var Map$1 = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
	  var className = _ref.className,
	      style = _ref.style,
	      children = _ref.children,
	      props = _objectWithoutProperties(_ref, _excluded$3);

	  var elmRef = React.useRef(null);

	  var _useMap = useMap(_objectSpread2({
	    container: elmRef.current
	  }, props)),
	      setContainer = _useMap.setContainer,
	      container = _useMap.container,
	      map = _useMap.map;

	  React.useEffect(function () {
	    return setContainer(elmRef.current);
	  }, [elmRef.current]);
	  React.useImperativeHandle(ref, function () {
	    return _objectSpread2(_objectSpread2({}, props), {}, {
	      map: map,
	      AMap: AMap,
	      container: elmRef.current
	    });
	  }, [map]);
	  var childs = React__default['default'].Children.toArray(children);
	  return /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
	    ref: elmRef,
	    className: className,
	    style: _objectSpread2({
	      fontSize: 1,
	      height: '100%'
	    }, style)
	  }), AMap && map && typeof children === 'function' && children({
	    AMap: AMap,
	    map: map,
	    container: container
	  }), AMap && map && childs.map(function (child, key) {
	    if (typeof child === 'string') {
	      return /*#__PURE__*/React__default['default'].cloneElement( /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, child), {
	        key: key
	      });
	    }

	    if (! /*#__PURE__*/React__default['default'].isValidElement(child)) return null;

	    if (child.type && typeof child.type === 'string') {
	      return /*#__PURE__*/React__default['default'].cloneElement(child, {
	        key: key
	      });
	    }

	    return /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
	      AMap: AMap,
	      map: map,
	      container: container,
	      key: key
	    }));
	  }));
	});

	var _excluded$2 = ["map", "visiable"];
	var useMarker = function useMarker() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var map = props.map,
	      visiable = props.visiable,
	      other = _objectWithoutProperties(props, _excluded$2);

	  var _useState = React.useState(),
	      _useState2 = _slicedToArray(_useState, 2),
	      marker = _useState2[0],
	      setMarker = _useState2[1];

	  React.useEffect(function () {
	    if (!AMap || !map) return;

	    if (!marker) {
	      var instance = new AMap.Marker(_objectSpread2({}, other));
	      map.add(instance);
	      setMarker(instance);
	      return function () {
	        if (instance) {
	          instance.remove();
	          setMarker(undefined);
	        }
	      };
	    } // eslint-disable-next-line react-hooks/exhaustive-deps

	  }, [map]);
	  useVisiable(marker, visiable);
	  useSettingProperties(marker, props, ['Path', 'Anchor', 'Offset', 'Animation', 'Clickable', 'Position', 'Angle', 'Label', 'zIndex', 'Icon', 'Draggable', 'Cursor', 'Content', 'Map', 'Title', 'Top', 'Shadow', 'Shape', 'ExtData']);
	  useEventProperties(marker, props, ['onClick', 'onDblClick', 'onRightClick', 'onMouseMove', 'onMouseOver', 'onMouseOut', 'onMouseDown', 'onMouseUp', 'onDragStart', 'onDragging', 'onDragEnd', 'onMoving', 'onMoveEnd', 'onMoveAlong', 'onTouchStart', 'onTouchMove', 'onTouchEnd']);
	  return {
	    marker: marker,
	    setMarker: setMarker
	  };
	};

	var Marker = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
	  var _useMarker = useMarker(props),
	      marker = _useMarker.marker;

	  React.useImperativeHandle(ref, function () {
	    return _objectSpread2(_objectSpread2({}, props), {}, {
	      marker: marker
	    });
	  });
	  return null;
	});

	var _excluded$1 = ["map", "position"];
	var useContextMenu = function useContextMenu() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var map = props.map,
	      position = props.position,
	      other = _objectWithoutProperties(props, _excluded$1);

	  var _useState = React.useState(),
	      _useState2 = _slicedToArray(_useState, 2),
	      contextMenu = _useState2[0],
	      setContextMenu = _useState2[1];

	  React.useEffect(function () {
	    if (!AMap || !map) return;

	    if (!contextMenu) {
	      var instance = new AMap.ContextMenu(_objectSpread2({}, other));
	      setContextMenu(instance);

	      var rightclick = function rightclick(e) {
	        return instance.open(map, position || e.lnglat);
	      };

	      map.on('rightclick', rightclick);
	      return function () {
	        if (instance) {
	          map.off('rightclick', rightclick);
	          map && map.removeLayer(instance);
	          setContextMenu(undefined);
	        }
	      };
	    }
	  }, [map]);
	  useEventProperties(contextMenu, props, ['onOpen', 'onClose']);
	  return {
	    contextMenu: contextMenu,
	    setContextMenu: setContextMenu
	  };
	};

	var noop = function noop() {};

	var Item = (function () {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _props$text = props.text,
	      text = _props$text === void 0 ? '' : _props$text,
	      _props$onClick = props.onClick,
	      onClick = _props$onClick === void 0 ? noop : _props$onClick;
	  React.useEffect(function () {
	    if (props.contextMenu) {
	      props.contextMenu.addItem(text, onClick, 1);
	    }

	    return function () {
	      if (props.contextMenu) {
	        props.contextMenu.removeItem(text, onClick);
	      }
	    };
	  }, [props.contextMenu, props.text, props.onClick]);
	  return null;
	});

	var ContextMenu = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
	  var _useContextMenu = useContextMenu(props),
	      contextMenu = _useContextMenu.contextMenu;

	  React.useImperativeHandle(ref, function () {
	    return _objectSpread2(_objectSpread2({}, props), {}, {
	      contextMenu: contextMenu
	    });
	  });
	  var childs = React__default['default'].Children.toArray(props.children);
	  return /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, AMap && contextMenu && childs.map(function (child, key) {
	    if (! /*#__PURE__*/React__default['default'].isValidElement(child)) return null;
	    return /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
	      AMap: AMap,
	      map: props.map,
	      contextMenu: contextMenu,
	      key: key
	    }));
	  }));
	});
	ContextMenu.Item = Item;

	var _excluded = ["map", "type", "onComplete", "onError"];
	var useGeolocation = function useGeolocation() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var map = props.map,
	      _props$type = props.type,
	      type = _props$type === void 0 ? 'position' : _props$type,
	      onComplete = props.onComplete,
	      onError = props.onError,
	      other = _objectWithoutProperties(props, _excluded);

	  var _useState = React.useState(),
	      _useState2 = _slicedToArray(_useState, 2),
	      geolocation = _useState2[0],
	      setGeolocation = _useState2[1];

	  React.useEffect(function () {
	    if (AMap && !geolocation) {
	      var instance;
	      AMap.plugin(['AMap.Geolocation'], function () {
	        instance = new AMap.Geolocation(_objectSpread2({}, other));
	        setGeolocation(instance);
	      });
	      return function () {
	        if (instance) {
	          setGeolocation(undefined);
	        }
	      };
	    }
	  }, [AMap]);

	  function callback(status, result) {
	    if (status === 'complete' && onComplete) {
	      onComplete(result);
	    } else if (onError) {
	      onError(result);
	    }
	  }

	  React.useMemo(function () {
	    if (!/^(position|cityInfo)$/.test(type)) return;
	    var funName = type === 'position' ? 'getCurrentPosition' : 'getCityInfo';

	    if (geolocation && map) {
	      geolocation[funName](callback);
	      map.addControl(geolocation);
	    } else if (geolocation) {
	      geolocation[funName](callback);
	    }
	  }, [geolocation]);
	  return {
	    geolocation: geolocation,
	    setGeolocation: setGeolocation
	  };
	};

	var Geolocation = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
	  var _useGeolocation = useGeolocation(props),
	      geolocation = _useGeolocation.geolocation;

	  React.useImperativeHandle(ref, function () {
	    return _objectSpread2(_objectSpread2({}, props), {}, {
	      geolocation: geolocation
	    });
	  });
	  return null;
	});

	function useScaleControl() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var _useState = React.useState(),
	      _useState2 = _slicedToArray(_useState, 2),
	      scaleControl = _useState2[0],
	      setScaleControl = _useState2[1];

	  var map = props.map,
	      position = props.position,
	      visiable = props.visiable,
	      offset = props.offset;
	  React.useEffect(function () {
	    if (map && !scaleControl) {
	      var instance;
	      map.plugin(['AMap.Scale'], function () {
	        instance = new AMap.Scale({
	          offset: offset,
	          position: position
	        });
	        map.addControl(instance);
	        setScaleControl(instance);
	      });
	      return function () {
	        if (instance) {
	          map.removeControl(instance);
	        }
	      };
	    }
	  }, [map]);
	  useVisiable(scaleControl, visiable);
	  return {
	    scaleControl: scaleControl,
	    setScaleControl: setScaleControl
	  };
	}

	var ScaleControl = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
	  var _useScaleControl = useScaleControl(props),
	      scaleControl = _useScaleControl.scaleControl;

	  React.useImperativeHandle(ref, function () {
	    return _objectSpread2(_objectSpread2({}, props), {}, {
	      scaleControl: scaleControl
	    });
	  }, [scaleControl]);
	  return null;
	});

	function useToolBarControl() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var _useState = React.useState(),
	      _useState2 = _slicedToArray(_useState, 2),
	      toolBarControl = _useState2[0],
	      setToolBarControl = _useState2[1];

	  var map = props.map,
	      position = props.position,
	      visiable = props.visiable,
	      offset = props.offset;
	  React.useEffect(function () {
	    if (map && !toolBarControl) {
	      var instance;
	      map.plugin(['AMap.ToolBar'], function () {
	        instance = new AMap.ToolBar({
	          offset: offset,
	          position: position
	        });
	        map.addControl(instance);
	        setToolBarControl(instance);
	      });
	      return function () {
	        if (instance) {
	          map.removeControl(instance);
	        }
	      };
	    }
	  }, [map]);
	  useVisiable(toolBarControl, visiable);
	  return {
	    toolBarControl: toolBarControl,
	    setToolBarControl: setToolBarControl
	  };
	}

	var ToolBarControl = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
	  var _useToolBarControl = useToolBarControl(props),
	      toolBarControl = _useToolBarControl.toolBarControl;

	  React.useImperativeHandle(ref, function () {
	    return _objectSpread2(_objectSpread2({}, props), {}, {
	      toolBarControl: toolBarControl
	    });
	  }, [toolBarControl]);
	  return null;
	});

	function useControlBarControl() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var _useState = React.useState(),
	      _useState2 = _slicedToArray(_useState, 2),
	      controlBarControl = _useState2[0],
	      setControlBarControl = _useState2[1];

	  var map = props.map,
	      position = props.position,
	      visiable = props.visiable,
	      offset = props.offset;
	  React.useEffect(function () {
	    if (map && !controlBarControl) {
	      var instance;
	      map.plugin(['AMap.ControlBar', 'AMap.HawkEye'], function () {
	        instance = new AMap.ControlBar({
	          offset: offset,
	          position: position
	        });
	        map.addControl(instance);
	        setControlBarControl(instance);
	      });
	      return function () {
	        if (instance) {
	          map.removeControl(instance);
	        }
	      };
	    }
	  }, [map]);
	  useVisiable(controlBarControl, visiable);
	  return {
	    controlBarControl: controlBarControl,
	    setControlBarControl: setControlBarControl
	  };
	}

	var ControlBarControl = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
	  var _useControlBarControl = useControlBarControl(props),
	      controlBarControl = _useControlBarControl.controlBarControl;

	  React.useImperativeHandle(ref, function () {
	    return _objectSpread2(_objectSpread2({}, props), {}, {
	      controlBarControl: controlBarControl
	    });
	  }, [controlBarControl]);
	  return null;
	});

	/**
	 * AMap child componet
	 * @param p
	 * @returns
	 */
	function LocationSelectPoint(p) {
	    const markerRef = React.useRef();
	    const size = useSize(p.container);
	    const center = useMapCenter(p.map);
	    React.useEffect(() => {
	        if (!markerRef.current) {
	            const marker = new AMap.Marker({
	                content: '<img class="amap-geolocation-marker" src="https://a.amap.com/jsapi/static/image/plugin/point.png">',
	                offset: new AMap.Pixel(-10, -10)
	            });
	            markerRef.current = marker;
	            p.map.add(marker);
	        }
	        if (size.width && size.height) {
	            const a = p.map.containerToLngLat([size.width / 2, size.height / 2]);
	            markerRef.current.setPosition([a.getLng(), a.getLat()]);
	        }
	    }, [size, center]);
	    return null;
	}
	function LocationMode(props) {
	    const [isMoving, setIsMoving] = React.useState(false);
	    const mapRef = React.useRef(null);
	    return (React.createElement(Map$1, { className: classNames$1("flexitem-9"), ref: mapRef, zoom: props.zoom, onMoveStart: () => setIsMoving(true), onMoveEnd: () => setIsMoving(false), onMapMove: () => {
	            var _a, _b;
	            if (props.onCenterChange) {
	                props.onCenterChange((_a = mapRef.current) === null || _a === void 0 ? void 0 : _a.map.getCenter().lat, (_b = mapRef.current) === null || _b === void 0 ? void 0 : _b.map.getCenter().lng);
	            }
	        }, onZoomChange: () => {
	            var _a, _b, _c;
	            if (props.onCenterChange) {
	                props.onCenterChange((_a = mapRef.current) === null || _a === void 0 ? void 0 : _a.map.getCenter().lat, (_b = mapRef.current) === null || _b === void 0 ? void 0 : _b.map.getCenter().lng);
	            }
	            return props.onZoomChange && props.onZoomChange((_c = mapRef.current) === null || _c === void 0 ? void 0 : _c.map.getZoom());
	        }, center: isMoving ? undefined : [props.lng, props.lat], onDblClick: (event) => {
	            if (props.onCenterChange) {
	                props.onCenterChange(event.lnglat.getLat(), event.lnglat.getLng());
	            }
	        } },
	        props.enableLocationMode ? (React.createElement(LocationSelectPoint, null)) : (React.createElement(Geolocation
	        // 是否使用高精度定位，默认:true
	        , { 
	            // 是否使用高精度定位，默认:true
	            enableHighAccuracy: true, 
	            // 超过10秒后停止定位，默认：5s
	            timeout: 10000, 
	            // 定位按钮的停靠位置
	            // 官方 v2 不再支持
	            // buttonPosition="RB"
	            // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
	            // 官方 v2 不再支持
	            // buttonOffset={new AMap.Pixel(10, 20)}
	            // 定位成功后是否自动调整地图视野到定位点
	            zoomToAccuracy: props.autoFocus, onComplete: data => {
	                console.log("返回数据：", data);
	            }, onError: data => {
	                console.log("错误返回数据：", data);
	            } })),
	        React.createElement(ScaleControl, { offset: [16, 20], position: "LB" }),
	        React.createElement(ToolBarControl, { offset: [16, 60], position: "RB" }),
	        React.createElement(ControlBarControl, { position: "RT" })));
	}

	function RoiMode(props) {
	    const [isMoving, setIsMoving] = React.useState(false);
	    const mapRef = React.useRef(null);
	    return (React.createElement(Map$1, { className: classNames$1("flexitem-9"), ref: mapRef, zoom: props.zoom, center: isMoving ? undefined : [props.lng, props.lat], onDblClick: (event) => {
	            if (props.change) {
	                props.change(event.lnglat.getLat(), event.lnglat.getLng());
	            }
	        }, onMoveStart: () => setIsMoving(true), onMoveEnd: () => setIsMoving(false), onMapMove: () => {
	            var _a, _b;
	            if (props.onCenterChange) {
	                props.onCenterChange((_a = mapRef.current) === null || _a === void 0 ? void 0 : _a.map.getCenter().lat, (_b = mapRef.current) === null || _b === void 0 ? void 0 : _b.map.getCenter().lng);
	            }
	        }, onZoomChange: () => {
	            var _a, _b, _c;
	            if (props.onCenterChange) {
	                props.onCenterChange((_a = mapRef.current) === null || _a === void 0 ? void 0 : _a.map.getCenter().lat, (_b = mapRef.current) === null || _b === void 0 ? void 0 : _b.map.getCenter().lng);
	            }
	            return props.onZoomChange && props.onZoomChange((_c = mapRef.current) === null || _c === void 0 ? void 0 : _c.map.getZoom());
	        } },
	        React.createElement(ScaleControl, { offset: [16, 20], position: "LB" }),
	        React.createElement(ToolBarControl, { offset: [16, 60], position: "RB" }),
	        React.createElement(ControlBarControl, { position: "RT" }),
	        props.marks.map((mark, idx) => (React.createElement(Marker, { key: idx, onDblClick: (e) => {
	                if (props.onDblClick) {
	                    props.onDblClick(e, idx);
	                }
	            }, visiable: true, title: mark.title, position: new AMap.LngLat(mark.lng, mark.lat) })))));
	}

	let lastPaneId = 1;
	function Driving(p) {
	    const lastDrivingRef = React.useRef();
	    React.useEffect(() => {
	        if (!p.startAndEnd) {
	            return;
	        }
	        if (lastDrivingRef.current) {
	            lastDrivingRef.current.clear();
	            lastDrivingRef.current = null;
	        }
	        // @ts-ignore
	        window.AMap.plugin("AMap.Driving", () => {
	            console.log(p.startAndEnd);
	            // @ts-ignore
	            const driving = new window.AMap.Driving({
	                // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
	                // @ts-ignore
	                policy: window.AMap.DrivingPolicy.LEAST_TIME,
	                map: p.map,
	                panel: p.paneId
	            });
	            lastDrivingRef.current = driving;
	            /*             const points = [
	                            { keyword: "北京市地震局（公交站）", city: "北京" },
	                            { keyword: "亦庄文化园（地铁站）", city: "北京" }
	                        ]; */
	            // @ts-ignore
	            driving.search(new AMap.LngLat(p.startAndEnd[0], p.startAndEnd[1]), new AMap.LngLat(p.startAndEnd[2], p.startAndEnd[3]), (status, result) => {
	                // 未出错时，result即是对应的路线规划方案
	                console.log(status, result);
	            });
	        });
	    }, [p.startAndEnd]);
	    return null;
	}
	function NavMode(props) {
	    const paneId = React.useMemo(() => +new Date() + "-pane" + lastPaneId++, []);
	    const mapRef = React.useRef(null);
	    return (React.createElement(React.Fragment, null,
	        React.createElement(Map$1, { className: classNames$1("flexitem-9"), ref: mapRef },
	            React.createElement(Driving, { paneId: paneId, startAndEnd: props.startAndEnd }),
	            React.createElement(ScaleControl, { offset: [16, 20], position: "LB" }),
	            React.createElement(ToolBarControl, { offset: [16, 60], position: "RB" }),
	            React.createElement(ControlBarControl, { position: "RT" })),
	        React.createElement("div", { id: paneId, className: classNames$1("flexitem-3"), style: { overflow: "auto" } })));
	}

	// @ts-ignore
	window._jsload_ = () => {
	    console.log("amap api loaded");
	};
	let lastValidAMap;
	const AMapComponent = (props) => {
	    const [isLoadingApi, setIsLoadingApi] = React.useState(true);
	    const ref = React.useRef();
	    const [keyIsInvalid, setKeyIsInvalid] = React.useState(false);
	    React.useEffect(() => {
	        if (isLoadingApi && props.amapKey && !window.AMap) {
	            window.require([`https://webapi.amap.com/maps?v=2.0&key=${props.amapKey}&plugin=AMap.Adaptor`], (_AMap) => {
	                if (!window.AMap && typeof _AMap === "object") {
	                    lastValidAMap = _AMap;
	                    window.AMap = _AMap;
	                }
	                if (_AMap === 3) {
	                    setKeyIsInvalid(true);
	                    if (lastValidAMap) {
	                        window.AMap = lastValidAMap;
	                    }
	                }
	                setIsLoadingApi(false);
	            });
	        }
	        if (window.AMap) {
	            setIsLoadingApi(false);
	        }
	    }, [isLoadingApi, props.amapKey]);
	    useWhyDidYouUpdate(props.name, { ...props });
	    if (keyIsInvalid) {
	        return React.createElement(Alert, { bootstrapStyle: "danger" }, "\u8BF7\u6307\u5B9A\u4E00\u4E2A\u6B63\u786E\u7684\u9AD8\u5FB7\u5730\u56FEwebapi key");
	    }
	    return (React.createElement("div", { ref: ref, className: classNames$1(props.class, "mx-amap", "flexcontainer"), tabIndex: props.tabIndex, style: props.style }, isLoadingApi ? (React.createElement("span", null, "loading")) : props.mode === "location" ? (React.createElement(LocationMode, { enableLocationMode: props.enableLocationMode, autoFocus: props.autoFocus, onCenterChange: props.onCenterChange, zoom: props.zoom, onZoomChange: props.onZoomChange, lat: props.lat, lng: props.lng })) : props.mode === "marker" ? (React.createElement(RoiMode, { change: props.onCenterChange, marks: props.marks, onCenterChange: props.onCenterChange, zoom: props.zoom, onZoomChange: props.onZoomChange, lat: props.lat, lng: props.lng, onDblClick: props.onDblClick })) : (React.createElement(NavMode, { startAndEnd: props.startAndEnd }))));
	};

	___$insertStyle("/*\nPlace your custom CSS here\n*/\n.mx-amap .amap-container {\n  min-width: 300px;\n  min-height: 350px;\n}");

	function AMap$1(props) {
	    const [isLoading, setIsLoading] = React.useState(false);
	    const [centerLat, setCenterLat] = React.useState(22.268233);
	    const [centerLng, setCenterLng] = React.useState(113.515943);
	    if (props.centerType === "dynamicValue") {
	        React.useEffect(() => {
	            if (props.lngCenter && props.lngCenter.status === "available" /* Available */) {
	                setCenterLng(props.lngCenter.value.toNumber());
	            }
	            if (props.latCenter && props.latCenter.status === "available" /* Available */) {
	                setCenterLat(props.latCenter.value.toNumber());
	            }
	        }, [props.latCenter, props.lngCenter]);
	    }
	    else {
	        React.useEffect(() => {
	            setCenterLat(props.latCenterStatic.toNumber());
	            setCenterLng(props.lngCenterStatic.toNumber());
	        }, [props.latCenterStatic, props.lngCenterStatic]);
	    }
	    const zoom = React.useMemo(() => {
	        if (props.zoomAttribute === undefined) {
	            setIsLoading(false);
	            return props.zoomConst.toNumber();
	        }
	        if (props.zoomAttribute && props.zoomAttribute.status === "available" /* Available */) {
	            setIsLoading(false);
	            return props.zoomAttribute.value.toNumber();
	        }
	        setIsLoading(true);
	        return 15;
	    }, [props.zoomAttribute]);
	    const onCenterChange = React.useCallback((lat, lng) => {
	        setCenterLat(lat);
	        setCenterLng(lng);
	        // setTimeout(() => {
	        //     executeAction(props.onChangeCenter);
	        // }, 500);
	        if (props.latCenter && props.latCenter.status === "available" /* Available */) {
	            props.latCenter.setValue(new Big__default['default'](lat));
	        }
	        if (props.lngCenter && props.lngCenter.status === "available" /* Available */) {
	            props.lngCenter.setValue(new Big__default['default'](lng));
	        }
	    }, [props.latCenter, props.lngCenter]);
	    const onZoomChange = React.useCallback(debounce((e) => {
	        var _a;
	        if (props.zoomAttribute && !props.zoomAttribute.readOnly) {
	            (_a = props.zoomAttribute) === null || _a === void 0 ? void 0 : _a.setValue(Big__default['default'](e));
	        }
	    }, 300), [props.zoomAttribute]);
	    const marks = React.useMemo(() => {
	        var _a;
	        if (props.enableMarker && props.displayMarker && ((_a = props.markers) === null || _a === void 0 ? void 0 : _a.status) === "available" /* Available */) {
	            return props.markers.items.map(item => ({
	                title: props.titleMarker.get(item).value,
	                lat: props.latMarker.get(item).value.toNumber(),
	                lng: props.lngMarker.get(item).value.toNumber()
	            }));
	        }
	        else {
	            return [];
	        }
	    }, [props.markers, props.latMarker, props.lngMarker, props.titleMarker]);
	    const onDblClick = React.useCallback((event, idx) => {
	        console.log(event);
	        if (props.markerSelect && props.markers && props.markers.status === "available" /* Available */) {
	            const myAction = props.markerSelect.get(props.markers.items[idx]);
	            executeAction(myAction);
	        }
	    }, [props.markerSelect, props.markers]);
	    const keystring = React.useMemo(() => {
	        if (props.amapKey.status === "available" /* Available */) {
	            return props.amapKey.value;
	        }
	    }, [props.amapKey]);
	    const [startAndEnd, setStartAndEnd] = React.useState();
	    React.useEffect(() => {
	        if (props.startLng &&
	            props.startLat &&
	            props.endLng &&
	            props.endLat &&
	            props.startLng.status === "available" /* Available */ &&
	            props.startLat.status === "available" /* Available */ &&
	            props.endLng.status === "available" /* Available */ &&
	            props.endLat.status === "available" /* Available */) {
	            setStartAndEnd([
	                props.startLng.value.toNumber(),
	                props.startLat.value.toNumber(),
	                props.endLng.value.toNumber(),
	                props.endLat.value.toNumber()
	            ]);
	        }
	    }, [props.startLng, props.startLat, props.endLng, props.endLat]);
	    return isLoading ? (React.createElement("span", null, "isLoading")) : (React.createElement(AMapComponent, { startAndEnd: startAndEnd, mode: props.mode, amapKey: keystring, onDblClick: onDblClick, marks: marks, onZoomChange: onZoomChange, zoom: zoom, lat: centerLat, lng: centerLng, enableLocationMode: props.enableLocationMode, onCenterChange: onCenterChange, autoFocus: props.enableAutoFocus, 
	        // mx
	        name: props.name, style: props.style, tabIndex: props.tabIndex, class: props.class }));
	}

	exports.AMap = AMap$1;

	Object.defineProperty(exports, '__esModule', { value: true });

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQU1hcC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC50aHJvdHRsZS9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvdXRpbHMvdXRpbHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL3V0aWxzL2xpbWl0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy91dGlscy91c2VQZXJzaXN0Rm4uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL3V0aWxzL3dpbmRvd0ZvY3VzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy91dGlscy93aW5kb3dWaXNpYmxlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy91c2VBc3luYy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvdXNlTG9hZE1vcmUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL3VzZVBhZ2luYXRlZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvY29uZmlnQ29udGV4dC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzaXplLW9ic2VydmVyLXBvbHlmaWxsL2Rpc3QvUmVzaXplT2JzZXJ2ZXIuZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3V0aWxzL2RvbS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXNlUGVyc2lzdEZuL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91dGlscy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXNlVW5tb3VudC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXNlU2l6ZS91c2VSYWZTdGF0ZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXNlU2l6ZS9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXNlV2h5RGlkWW91VXBkYXRlL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9ob29rcy91c2VNYXBDZW50ZXIudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29scy9waXctdXRpbHMtaW50ZXJuYWwvbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi90b29scy9waXctdXRpbHMtaW50ZXJuYWwvZGlzdC9jb21wb25lbnRzLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbHMvcGl3LXV0aWxzLWludGVybmFsL2Rpc3QvZnVuY3Rpb25zLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbHMvcGl3LXV0aWxzLWludGVybmFsL2Rpc3QvYnVpbGRlcnMvRWRpdGFibGVWYWx1ZUJ1aWxkZXIuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1hbWFwL2xpYi9lc20vdXRpbHMvcmVxdWlyZVNjcmlwdC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXIuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL0FQSUxvYWRlci9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL2NvbW1vbi9ob29rcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9NYXAvdXNlTWFwLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL01hcC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9NYXJrZXIvdXNlTWFya2VyLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL01hcmtlci9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9Db250ZXh0TWVudS91c2VDb250ZXh0TWVudS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9Db250ZXh0TWVudS9JdGVtLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL0NvbnRleHRNZW51L2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL0dlb2xvY2F0aW9uL3VzZUdlb2xvY2F0aW9uLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL0dlb2xvY2F0aW9uL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL1NjYWxlQ29udHJvbC91c2VTY2FsZUNvbnRyb2wuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1hbWFwL2xpYi9lc20vU2NhbGVDb250cm9sL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL1Rvb2xCYXJDb250cm9sL3VzZVRvb2xCYXJDb250cm9sLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL1Rvb2xCYXJDb250cm9sL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL0NvbnRyb2xCYXJDb250cm9sL3VzZUNvbnRyb2xCYXJDb250cm9sLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL0NvbnRyb2xCYXJDb250cm9sL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9jYXRpb25Nb2RlLnRzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1JvaU1vZGUudHN4IiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTmF2TW9kZS50c3giLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BTWFwQ29tcG9uZW50LnRzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9BTWFwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0RvY3VtZW50VmlzaWJsZSgpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSAnaGlkZGVuJztcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzT25saW5lKCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvci5vbkxpbmUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5hdmlnYXRvci5vbkxpbmU7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn0iLCJ2YXIgX19yZWFkID0gdGhpcyAmJiB0aGlzLl9fcmVhZCB8fCBmdW5jdGlvbiAobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLFxuICAgICAgcixcbiAgICAgIGFyID0gW10sXG4gICAgICBlO1xuXG4gIHRyeSB7XG4gICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxudmFyIF9fc3ByZWFkID0gdGhpcyAmJiB0aGlzLl9fc3ByZWFkIHx8IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaW1pdChmbiwgdGltZXNwYW4pIHtcbiAgdmFyIHBlbmRpbmcgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG5cbiAgICBpZiAocGVuZGluZykgcmV0dXJuO1xuICAgIHBlbmRpbmcgPSB0cnVlO1xuICAgIGZuLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoYXJncykpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcGVuZGluZyA9IGZhbHNlO1xuICAgIH0sIHRpbWVzcGFuKTtcbiAgfTtcbn0iLCJ2YXIgX19yZWFkID0gdGhpcyAmJiB0aGlzLl9fcmVhZCB8fCBmdW5jdGlvbiAobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLFxuICAgICAgcixcbiAgICAgIGFyID0gW10sXG4gICAgICBlO1xuXG4gIHRyeSB7XG4gICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxudmFyIF9fc3ByZWFkID0gdGhpcyAmJiB0aGlzLl9fc3ByZWFkIHx8IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VQZXJzaXN0Rm4oZm4pIHtcbiAgdmFyIHJlZiA9IHVzZVJlZihmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY2FsbCBhbiBldmVudCBoYW5kbGVyIHdoaWxlIHJlbmRlcmluZy4nKTtcbiAgfSk7XG4gIHJlZi5jdXJyZW50ID0gZm47XG4gIHZhciBwZXJzaXN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cblxuICAgIHZhciByZWZGbiA9IHJlZi5jdXJyZW50O1xuXG4gICAgaWYgKHJlZkZuKSB7XG4gICAgICByZXR1cm4gcmVmRm4uYXBwbHkodm9pZCAwLCBfX3NwcmVhZChhcmdzKSk7XG4gICAgfVxuICB9LCBbcmVmXSk7XG5cbiAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBwZXJzaXN0O1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUGVyc2lzdEZuOyIsIi8vIGZyb20gc3dyXG5pbXBvcnQgeyBpc0RvY3VtZW50VmlzaWJsZSwgaXNPbmxpbmUgfSBmcm9tICcuL3V0aWxzJztcbnZhciBsaXN0ZW5lcnMgPSBbXTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcbn1cblxudmFyIGV2ZW50c0JpbmRlZCA9IGZhbHNlO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJiYgIWV2ZW50c0JpbmRlZCkge1xuICB2YXIgcmV2YWxpZGF0ZSA9IGZ1bmN0aW9uIHJldmFsaWRhdGUoKSB7XG4gICAgaWYgKCFpc0RvY3VtZW50VmlzaWJsZSgpIHx8ICFpc09ubGluZSgpKSByZXR1cm47XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCByZXZhbGlkYXRlLCBmYWxzZSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHJldmFsaWRhdGUsIGZhbHNlKTsgLy8gb25seSBiaW5kIHRoZSBldmVudHMgb25jZVxuXG4gIGV2ZW50c0JpbmRlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1YnNjcmliZTsiLCIvLyBmcm9tIHN3clxuaW1wb3J0IHsgaXNEb2N1bWVudFZpc2libGUgfSBmcm9tICcuL3V0aWxzJztcbnZhciBsaXN0ZW5lcnMgPSBbXTtcblxuZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfTtcbn1cblxudmFyIGV2ZW50c0JpbmRlZCA9IGZhbHNlO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIgJiYgIWV2ZW50c0JpbmRlZCkge1xuICB2YXIgcmV2YWxpZGF0ZSA9IGZ1bmN0aW9uIHJldmFsaWRhdGUoKSB7XG4gICAgaWYgKCFpc0RvY3VtZW50VmlzaWJsZSgpKSByZXR1cm47XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCByZXZhbGlkYXRlLCBmYWxzZSk7IC8vIG9ubHkgYmluZCB0aGUgZXZlbnRzIG9uY2VcblxuICBldmVudHNCaW5kZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdWJzY3JpYmU7IiwidmFyIF9fYXNzaWduID0gdGhpcyAmJiB0aGlzLl9fYXNzaWduIHx8IGZ1bmN0aW9uICgpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG52YXIgX19yZWFkID0gdGhpcyAmJiB0aGlzLl9fcmVhZCB8fCBmdW5jdGlvbiAobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLFxuICAgICAgcixcbiAgICAgIGFyID0gW10sXG4gICAgICBlO1xuXG4gIHRyeSB7XG4gICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxudmFyIF9fc3ByZWFkID0gdGhpcyAmJiB0aGlzLl9fc3ByZWFkIHx8IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzRG9jdW1lbnRWaXNpYmxlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBnZXRDYWNoZSwgc2V0Q2FjaGUgfSBmcm9tICcuL3V0aWxzL2NhY2hlJztcbmltcG9ydCBsaW1pdCBmcm9tICcuL3V0aWxzL2xpbWl0JztcbmltcG9ydCB1c2VQZXJzaXN0Rm4gZnJvbSAnLi91dGlscy91c2VQZXJzaXN0Rm4nO1xuaW1wb3J0IHVzZVVwZGF0ZUVmZmVjdCBmcm9tICcuL3V0aWxzL3VzZVVwZGF0ZUVmZmVjdCc7XG5pbXBvcnQgc3Vic2NyaWJlRm9jdXMgZnJvbSAnLi91dGlscy93aW5kb3dGb2N1cyc7XG5pbXBvcnQgc3Vic2NyaWJlVmlzaWJsZSBmcm9tICcuL3V0aWxzL3dpbmRvd1Zpc2libGUnO1xudmFyIERFRkFVTFRfS0VZID0gJ0FIT09LU19VU0VfUkVRVUVTVF9ERUZBVUxUX0tFWSc7XG5cbnZhciBGZXRjaCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRmV0Y2goc2VydmljZSwgY29uZmlnLCBzdWJzY3JpYmUsIGluaXRTdGF0ZSkge1xuICAgIC8vIOivt+axguaXtuW6j1xuICAgIHRoaXMuY291bnQgPSAwOyAvLyB2aXNpYmxlIOWQju+8jOaYr+WQpue7p+e7rei9ruivolxuXG4gICAgdGhpcy5wb2xsaW5nV2hlblZpc2libGVGbGFnID0gZmFsc2U7XG4gICAgdGhpcy5wb2xsaW5nVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkaW5nRGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gW107XG4gICAgdGhpcy50aGF0ID0gdGhpcztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBwYXJhbXM6IFtdLFxuICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgIHJ1bjogdGhpcy5ydW4uYmluZCh0aGlzLnRoYXQpLFxuICAgICAgbXV0YXRlOiB0aGlzLm11dGF0ZS5iaW5kKHRoaXMudGhhdCksXG4gICAgICByZWZyZXNoOiB0aGlzLnJlZnJlc2guYmluZCh0aGlzLnRoYXQpLFxuICAgICAgY2FuY2VsOiB0aGlzLmNhbmNlbC5iaW5kKHRoaXMudGhhdCksXG4gICAgICB1bm1vdW50OiB0aGlzLnVubW91bnQuYmluZCh0aGlzLnRoYXQpXG4gICAgfTtcbiAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuXG4gICAgaWYgKGluaXRTdGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnN0YXRlKSwgaW5pdFN0YXRlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlYm91bmNlUnVuID0gdGhpcy5jb25maWcuZGVib3VuY2VJbnRlcnZhbCA/IGRlYm91bmNlKHRoaXMuX3J1biwgdGhpcy5jb25maWcuZGVib3VuY2VJbnRlcnZhbCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50aHJvdHRsZVJ1biA9IHRoaXMuY29uZmlnLnRocm90dGxlSW50ZXJ2YWwgPyB0aHJvdHRsZSh0aGlzLl9ydW4sIHRoaXMuY29uZmlnLnRocm90dGxlSW50ZXJ2YWwpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGltaXRSZWZyZXNoID0gbGltaXQodGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIHRoaXMuY29uZmlnLmZvY3VzVGltZXNwYW4pO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLnBvbGxpbmdJbnRlcnZhbCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZS5wdXNoKHN1YnNjcmliZVZpc2libGUodGhpcy5yZVBvbGxpbmcuYmluZCh0aGlzKSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5yZWZyZXNoT25XaW5kb3dGb2N1cykge1xuICAgICAgdGhpcy51bnN1YnNjcmliZS5wdXNoKHN1YnNjcmliZUZvY3VzKHRoaXMubGltaXRSZWZyZXNoLmJpbmQodGhpcykpKTtcbiAgICB9XG4gIH1cblxuICBGZXRjaC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocykge1xuICAgIGlmIChzID09PSB2b2lkIDApIHtcbiAgICAgIHMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuc3RhdGUpLCBzKTtcbiAgICB0aGlzLnN1YnNjcmliZSh0aGlzLnN0YXRlKTtcbiAgfTtcblxuICBGZXRjaC5wcm90b3R5cGUuX3J1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfSAvLyDlj5bmtojlt7LmnInlrprml7blmahcblxuXG4gICAgaWYgKHRoaXMucG9sbGluZ1RpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5wb2xsaW5nVGltZXIpO1xuICAgIH0gLy8g5Y+W5raIIGxvYWRpbmdEZWxheVRpbWVyXG5cblxuICAgIGlmICh0aGlzLmxvYWRpbmdEZWxheVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5sb2FkaW5nRGVsYXlUaW1lcik7XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudCArPSAxOyAvLyDpl63ljIXlrZjlgqjlvZPmrKHor7fmsYLnmoQgY291bnRcblxuICAgIHZhciBjdXJyZW50Q291bnQgPSB0aGlzLmNvdW50O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogIXRoaXMuY29uZmlnLmxvYWRpbmdEZWxheSxcbiAgICAgIHBhcmFtczogYXJnc1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmxvYWRpbmdEZWxheSkge1xuICAgICAgdGhpcy5sb2FkaW5nRGVsYXlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sIHRoaXMuY29uZmlnLmxvYWRpbmdEZWxheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5hcHBseSh0aGlzLCBfX3NwcmVhZChhcmdzKSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAoY3VycmVudENvdW50ICE9PSBfdGhpcy5jb3VudCkge1xuICAgICAgICAvLyBwcmV2ZW50IHJ1bi50aGVuIHdoZW4gcmVxdWVzdCBpcyBjYW5jZWxlZFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKCkge30pO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMubG9hZGluZ0RlbGF5VGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmxvYWRpbmdEZWxheVRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvcm1hdHRlZFJlc3VsdCA9IF90aGlzLmNvbmZpZy5mb3JtYXRSZXN1bHQgPyBfdGhpcy5jb25maWcuZm9ybWF0UmVzdWx0KHJlcykgOiByZXM7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogZm9ybWF0dGVkUmVzdWx0LFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5jb25maWcub25TdWNjZXNzKSB7XG4gICAgICAgIF90aGlzLmNvbmZpZy5vblN1Y2Nlc3MoZm9ybWF0dGVkUmVzdWx0LCBhcmdzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlZFJlc3VsdDtcbiAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKGN1cnJlbnRDb3VudCAhPT0gX3RoaXMuY291bnQpIHtcbiAgICAgICAgLy8gcHJldmVudCBydW4udGhlbiB3aGVuIHJlcXVlc3QgaXMgY2FuY2VsZWRcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLmxvYWRpbmdEZWxheVRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5sb2FkaW5nRGVsYXlUaW1lcik7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLmNvbmZpZy5vbkVycm9yKSB7XG4gICAgICAgIF90aGlzLmNvbmZpZy5vbkVycm9yKGVycm9yLCBhcmdzKTtcbiAgICAgIH0gLy8gSWYgdGhyb3dPbkVycm9yLCB1c2VyIHNob3VsZCBjYXRjaCB0aGUgZXJyb3Igc2VsZixcbiAgICAgIC8vIG9yIHRoZSBwYWdlIHdpbGwgY3Jhc2hcblxuXG4gICAgICBpZiAoX3RoaXMuY29uZmlnLnRocm93T25FcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzXG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgndXNlUmVxdWVzdCBoYXMgY2F1Z2h0IHRoZSBleGNlcHRpb24sIGlmIHlvdSBuZWVkIHRvIGhhbmRsZSB0aGUgZXhjZXB0aW9uIHlvdXJzZWxmLCB5b3UgY2FuIHNldCBvcHRpb25zLnRocm93T25FcnJvciB0byB0cnVlLicpO1xuICAgIH0pW1wiZmluYWxseVwiXShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY3VycmVudENvdW50ID09PSBfdGhpcy5jb3VudCkge1xuICAgICAgICBpZiAoX3RoaXMuY29uZmlnLnBvbGxpbmdJbnRlcnZhbCkge1xuICAgICAgICAgIC8vIOWmguaenOWxj+W5lemakOiXj++8jOW5tuS4lCAhcG9sbGluZ1doZW5IaWRkZW4sIOWImeWBnOatoui9ruivou+8jOW5tuiusOW9lSBmbGFn77yM562JIHZpc2libGUg5pe277yM57un57ut6L2u6K+iXG4gICAgICAgICAgaWYgKCFpc0RvY3VtZW50VmlzaWJsZSgpICYmICFfdGhpcy5jb25maWcucG9sbGluZ1doZW5IaWRkZW4pIHtcbiAgICAgICAgICAgIF90aGlzLnBvbGxpbmdXaGVuVmlzaWJsZUZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLnBvbGxpbmdUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX3J1bi5hcHBseShfdGhpcywgX19zcHJlYWQoYXJncykpO1xuICAgICAgICAgIH0sIF90aGlzLmNvbmZpZy5wb2xsaW5nSW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgRmV0Y2gucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZWJvdW5jZVJ1bikge1xuICAgICAgdGhpcy5kZWJvdW5jZVJ1bi5hcHBseSh0aGlzLCBfX3NwcmVhZChhcmdzKSk7IC8vIFRPRE8g5aaC5p6cIG9wdGlvbnMg5a2Y5ZyoIGRlYm91bmNlSW50ZXJ2YWzvvIzmiJYgdGhyb3R0bGVJbnRlcnZhbO+8jOWImSBydW4g5ZKMIHJlZnJlc2gg5LiN5Lya6L+U5ZueIFByb21pc2XjgIIg5bim57G75Z6L6ZyA6KaB5L+u5aSN5ZCO77yM5q2k5aSE5Y+Y5oiQIHJldHVybjvjgIJcblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aHJvdHRsZVJ1bikge1xuICAgICAgdGhpcy50aHJvdHRsZVJ1bi5hcHBseSh0aGlzLCBfX3NwcmVhZChhcmdzKSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ydW4uYXBwbHkodGhpcywgX19zcHJlYWQoYXJncykpO1xuICB9O1xuXG4gIEZldGNoLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZGVib3VuY2VSdW4pIHtcbiAgICAgIHRoaXMuZGVib3VuY2VSdW4uY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGhyb3R0bGVSdW4pIHtcbiAgICAgIHRoaXMudGhyb3R0bGVSdW4uY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9hZGluZ0RlbGF5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxvYWRpbmdEZWxheVRpbWVyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb2xsaW5nVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBvbGxpbmdUaW1lcik7XG4gICAgfVxuXG4gICAgdGhpcy5wb2xsaW5nV2hlblZpc2libGVGbGFnID0gZmFsc2U7XG4gICAgdGhpcy5jb3VudCArPSAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBGZXRjaC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5ydW4uYXBwbHkodGhpcywgX19zcHJlYWQodGhpcy5zdGF0ZS5wYXJhbXMpKTtcbiAgfTtcblxuICBGZXRjaC5wcm90b3R5cGUucmVQb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnBvbGxpbmdXaGVuVmlzaWJsZUZsYWcpIHtcbiAgICAgIHRoaXMucG9sbGluZ1doZW5WaXNpYmxlRmxhZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9O1xuXG4gIEZldGNoLnByb3RvdHlwZS5tdXRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hY2Nlc3Mtc3RhdGUtaW4tc2V0c3RhdGVcbiAgICAgICAgZGF0YTogZGF0YSh0aGlzLnN0YXRlLmRhdGEpIHx8IHt9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBGZXRjaC5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgcygpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBGZXRjaDtcbn0oKTtcblxuZnVuY3Rpb24gdXNlQXN5bmMoc2VydmljZSwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBfYSA9IF9vcHRpb25zLnJlZnJlc2hEZXBzLFxuICAgICAgcmVmcmVzaERlcHMgPSBfYSA9PT0gdm9pZCAwID8gW10gOiBfYSxcbiAgICAgIF9iID0gX29wdGlvbnMubWFudWFsLFxuICAgICAgbWFudWFsID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsXG4gICAgICBfYyA9IF9vcHRpb25zLm9uU3VjY2VzcyxcbiAgICAgIG9uU3VjY2VzcyA9IF9jID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9jLFxuICAgICAgX2QgPSBfb3B0aW9ucy5vbkVycm9yLFxuICAgICAgb25FcnJvciA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9kLFxuICAgICAgX2UgPSBfb3B0aW9ucy5kZWZhdWx0TG9hZGluZyxcbiAgICAgIGRlZmF1bHRMb2FkaW5nID0gX2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX2UsXG4gICAgICBsb2FkaW5nRGVsYXkgPSBfb3B0aW9ucy5sb2FkaW5nRGVsYXksXG4gICAgICBfZiA9IF9vcHRpb25zLnBvbGxpbmdJbnRlcnZhbCxcbiAgICAgIHBvbGxpbmdJbnRlcnZhbCA9IF9mID09PSB2b2lkIDAgPyAwIDogX2YsXG4gICAgICBfZyA9IF9vcHRpb25zLnBvbGxpbmdXaGVuSGlkZGVuLFxuICAgICAgcG9sbGluZ1doZW5IaWRkZW4gPSBfZyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9nLFxuICAgICAgX2ggPSBfb3B0aW9ucy5kZWZhdWx0UGFyYW1zLFxuICAgICAgZGVmYXVsdFBhcmFtcyA9IF9oID09PSB2b2lkIDAgPyBbXSA6IF9oLFxuICAgICAgX2ogPSBfb3B0aW9ucy5yZWZyZXNoT25XaW5kb3dGb2N1cyxcbiAgICAgIHJlZnJlc2hPbldpbmRvd0ZvY3VzID0gX2ogPT09IHZvaWQgMCA/IGZhbHNlIDogX2osXG4gICAgICBfayA9IF9vcHRpb25zLmZvY3VzVGltZXNwYW4sXG4gICAgICBmb2N1c1RpbWVzcGFuID0gX2sgPT09IHZvaWQgMCA/IDUwMDAgOiBfayxcbiAgICAgIGZldGNoS2V5ID0gX29wdGlvbnMuZmV0Y2hLZXksXG4gICAgICBjYWNoZUtleSA9IF9vcHRpb25zLmNhY2hlS2V5LFxuICAgICAgX2wgPSBfb3B0aW9ucy5jYWNoZVRpbWUsXG4gICAgICBjYWNoZVRpbWUgPSBfbCA9PT0gdm9pZCAwID8gNSAqIDYwICogMTAwMCA6IF9sLFxuICAgICAgX20gPSBfb3B0aW9ucy5zdGFsZVRpbWUsXG4gICAgICBzdGFsZVRpbWUgPSBfbSA9PT0gdm9pZCAwID8gMCA6IF9tLFxuICAgICAgZGVib3VuY2VJbnRlcnZhbCA9IF9vcHRpb25zLmRlYm91bmNlSW50ZXJ2YWwsXG4gICAgICB0aHJvdHRsZUludGVydmFsID0gX29wdGlvbnMudGhyb3R0bGVJbnRlcnZhbCxcbiAgICAgIGluaXRpYWxEYXRhID0gX29wdGlvbnMuaW5pdGlhbERhdGEsXG4gICAgICBfbyA9IF9vcHRpb25zLnJlYWR5LFxuICAgICAgcmVhZHkgPSBfbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vLFxuICAgICAgX3AgPSBfb3B0aW9ucy50aHJvd09uRXJyb3IsXG4gICAgICB0aHJvd09uRXJyb3IgPSBfcCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcDtcbiAgdmFyIG5ld3N0RmV0Y2hLZXkgPSB1c2VSZWYoREVGQVVMVF9LRVkpOyAvLyDmjIHkuYXljJbkuIDkupvlh73mlbBcblxuICB2YXIgc2VydmljZVBlcnNpc3QgPSB1c2VQZXJzaXN0Rm4oc2VydmljZSk7XG4gIHZhciBvblN1Y2Nlc3NQZXJzaXN0ID0gdXNlUGVyc2lzdEZuKG9uU3VjY2Vzcyk7XG4gIHZhciBvbkVycm9yUGVyc2lzdCA9IHVzZVBlcnNpc3RGbihvbkVycm9yKTtcbiAgdmFyIGZldGNoS2V5UGVyc2lzdCA9IHVzZVBlcnNpc3RGbihmZXRjaEtleSk7XG4gIHZhciBmb3JtYXRSZXN1bHQ7XG5cbiAgaWYgKCdmb3JtYXRSZXN1bHQnIGluIF9vcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgZm9ybWF0UmVzdWx0ID0gX29wdGlvbnMuZm9ybWF0UmVzdWx0O1xuICB9XG5cbiAgdmFyIGZvcm1hdFJlc3VsdFBlcnNpc3QgPSB1c2VQZXJzaXN0Rm4oZm9ybWF0UmVzdWx0KTtcbiAgdmFyIGNvbmZpZyA9IHtcbiAgICBmb3JtYXRSZXN1bHQ6IGZvcm1hdFJlc3VsdFBlcnNpc3QsXG4gICAgb25TdWNjZXNzOiBvblN1Y2Nlc3NQZXJzaXN0LFxuICAgIG9uRXJyb3I6IG9uRXJyb3JQZXJzaXN0LFxuICAgIGxvYWRpbmdEZWxheTogbG9hZGluZ0RlbGF5LFxuICAgIHBvbGxpbmdJbnRlcnZhbDogcG9sbGluZ0ludGVydmFsLFxuICAgIHBvbGxpbmdXaGVuSGlkZGVuOiBwb2xsaW5nV2hlbkhpZGRlbixcbiAgICAvLyByZWZyZXNoT25XaW5kb3dGb2N1cyBzaG91bGQgbm90IHdvcmsgb24gbWFudWFsIG1vZGVcbiAgICByZWZyZXNoT25XaW5kb3dGb2N1czogIW1hbnVhbCAmJiByZWZyZXNoT25XaW5kb3dGb2N1cyxcbiAgICBmb2N1c1RpbWVzcGFuOiBmb2N1c1RpbWVzcGFuLFxuICAgIGRlYm91bmNlSW50ZXJ2YWw6IGRlYm91bmNlSW50ZXJ2YWwsXG4gICAgdGhyb3R0bGVJbnRlcnZhbDogdGhyb3R0bGVJbnRlcnZhbCxcbiAgICB0aHJvd09uRXJyb3I6IHRocm93T25FcnJvclxuICB9O1xuICB2YXIgc3Vic2NyaWJlID0gdXNlUGVyc2lzdEZuKGZ1bmN0aW9uIChrZXksIGRhdGEpIHtcbiAgICBzZXRGZXRjaGVzKGZ1bmN0aW9uIChzKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHNba2V5XSA9IGRhdGE7XG4gICAgICByZXR1cm4gX19hc3NpZ24oe30sIHMpO1xuICAgIH0pO1xuICB9KTtcblxuICB2YXIgX3EgPSBfX3JlYWQodXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYTsgLy8g5aaC5p6c5pyJIOe8k+WtmO+8jOWImeS7jue8k+WtmOS4reivu+aVsOaNrlxuXG5cbiAgICBpZiAoY2FjaGVLZXkpIHtcbiAgICAgIHZhciBjYWNoZURhdGFfMSA9IChfYSA9IGdldENhY2hlKGNhY2hlS2V5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRhdGE7XG5cbiAgICAgIGlmIChjYWNoZURhdGFfMSkge1xuICAgICAgICBuZXdzdEZldGNoS2V5LmN1cnJlbnQgPSBjYWNoZURhdGFfMS5uZXdzdEZldGNoS2V5O1xuICAgICAgICAvKiDkvb/nlKggaW5pdFN0YXRlLCDph43mlrAgbmV3IEZldGNoICovXG5cbiAgICAgICAgdmFyIG5ld0ZldGNoZXNfMSA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjYWNoZURhdGFfMS5mZXRjaGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgY2FjaGVGZXRjaCA9IGNhY2hlRGF0YV8xLmZldGNoZXNba2V5XTtcbiAgICAgICAgICB2YXIgbmV3RmV0Y2ggPSBuZXcgRmV0Y2goc2VydmljZVBlcnNpc3QsIGNvbmZpZywgc3Vic2NyaWJlLmJpbmQobnVsbCwga2V5KSwge1xuICAgICAgICAgICAgbG9hZGluZzogY2FjaGVGZXRjaC5sb2FkaW5nLFxuICAgICAgICAgICAgcGFyYW1zOiBjYWNoZUZldGNoLnBhcmFtcyxcbiAgICAgICAgICAgIGRhdGE6IGNhY2hlRmV0Y2guZGF0YSxcbiAgICAgICAgICAgIGVycm9yOiBjYWNoZUZldGNoLmVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbmV3RmV0Y2hlc18xW2tleV0gPSBuZXdGZXRjaC5zdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdGZXRjaGVzXzE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9KSwgMiksXG4gICAgICBmZXRjaGVzID0gX3FbMF0sXG4gICAgICBzZXRGZXRjaGVzID0gX3FbMV07XG5cbiAgdmFyIGZldGNoZXNSZWYgPSB1c2VSZWYoZmV0Y2hlcyk7XG4gIGZldGNoZXNSZWYuY3VycmVudCA9IGZldGNoZXM7XG4gIHZhciByZWFkeU1lbW9yeVBhcmFtcyA9IHVzZVJlZigpO1xuICB2YXIgcnVuID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cblxuICAgIGlmICghcmVhZHkpIHtcbiAgICAgIC8vIOayoeaciSByZWFkeSwg6K6w5b2V6K+35rGC5Y+C5pWw77yM562JIHJlYWR5IOWQju+8jOWPkei1t+ivt+axgueUqFxuICAgICAgcmVhZHlNZW1vcnlQYXJhbXMuY3VycmVudCA9IGFyZ3M7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZldGNoS2V5UGVyc2lzdCkge1xuICAgICAgdmFyIGtleSA9IGZldGNoS2V5UGVyc2lzdC5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgIG5ld3N0RmV0Y2hLZXkuY3VycmVudCA9IGtleSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9LRVkgOiBrZXk7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRGZXRjaEtleSA9IG5ld3N0RmV0Y2hLZXkuY3VycmVudDsgLy8g6L+Z6YeM5b+F6aG755SoIGZldGNoc1JlZu+8jOiAjOS4jeiDveeUqCBmZXRjaGVz44CCXG4gICAgLy8g5ZCm5YiZ5ZyoIHJlc2V0IOWujO+8jOeri+WNsyBydW4g55qE5pe25YCZ77yM6L+Z6YeM5ou/5Yiw55qEIGZldGNoZXMg5piv5pen55qE44CCXG5cbiAgICB2YXIgY3VycmVudEZldGNoID0gZmV0Y2hlc1JlZi5jdXJyZW50W2N1cnJlbnRGZXRjaEtleV07XG5cbiAgICBpZiAoIWN1cnJlbnRGZXRjaCkge1xuICAgICAgdmFyIG5ld0ZldGNoID0gbmV3IEZldGNoKHNlcnZpY2VQZXJzaXN0LCBjb25maWcsIHN1YnNjcmliZS5iaW5kKG51bGwsIGN1cnJlbnRGZXRjaEtleSksIHtcbiAgICAgICAgZGF0YTogaW5pdGlhbERhdGFcbiAgICAgIH0pO1xuICAgICAgY3VycmVudEZldGNoID0gbmV3RmV0Y2guc3RhdGU7XG4gICAgICBzZXRGZXRjaGVzKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBzW2N1cnJlbnRGZXRjaEtleV0gPSBjdXJyZW50RmV0Y2g7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudEZldGNoLnJ1bi5hcHBseShjdXJyZW50RmV0Y2gsIF9fc3ByZWFkKGFyZ3MpKTtcbiAgfSwgW2ZldGNoS2V5LCBzdWJzY3JpYmUsIHJlYWR5XSk7XG4gIHZhciBydW5SZWYgPSB1c2VSZWYocnVuKTtcbiAgcnVuUmVmLmN1cnJlbnQgPSBydW47IC8vIGNhY2hlXG5cbiAgdXNlVXBkYXRlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FjaGVLZXkpIHtcbiAgICAgIHNldENhY2hlKGNhY2hlS2V5LCBjYWNoZVRpbWUsIHtcbiAgICAgICAgZmV0Y2hlczogZmV0Y2hlcyxcbiAgICAgICAgbmV3c3RGZXRjaEtleTogbmV3c3RGZXRjaEtleS5jdXJyZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtjYWNoZUtleSwgZmV0Y2hlc10pOyAvLyBmb3IgcmVhZHlcblxuICB2YXIgaGFzVHJpZ2dlcmVkQnlSZWFkeSA9IHVzZVJlZihmYWxzZSk7XG4gIHVzZVVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlYWR5KSB7XG4gICAgICBpZiAoIWhhc1RyaWdnZXJlZEJ5UmVhZHkuY3VycmVudCAmJiByZWFkeU1lbW9yeVBhcmFtcy5jdXJyZW50KSB7XG4gICAgICAgIHJ1blJlZi5jdXJyZW50LmFwcGx5KHJ1blJlZiwgX19zcHJlYWQocmVhZHlNZW1vcnlQYXJhbXMuY3VycmVudCkpO1xuICAgICAgfVxuXG4gICAgICBoYXNUcmlnZ2VyZWRCeVJlYWR5LmN1cnJlbnQgPSB0cnVlO1xuICAgIH1cbiAgfSwgW3JlYWR5XSk7IC8vIOesrOS4gOasoem7mOiupOaJp+ihjFxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuXG4gICAgaWYgKCFtYW51YWwpIHtcbiAgICAgIC8vIOWmguaenOaciee8k+WtmO+8jOWImemHjeaWsOivt+axglxuICAgICAgaWYgKE9iamVjdC5rZXlzKGZldGNoZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8g5aaC5p6cIHN0YWxlVGltZSDmmK8gLTHvvIzliJkgY2FjaGUg5rC45LiN6L+H5pyfXG4gICAgICAgIC8vIOWmguaenCBzdGF0bGVUaW1lIOi2heacn+S6hu+8jOWImemHjeaWsOivt+axglxuICAgICAgICB2YXIgY2FjaGVTdGFydFRpbWUgPSBjYWNoZUtleSAmJiAoKF9hID0gZ2V0Q2FjaGUoY2FjaGVLZXkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3RhcnRUaW1lKSB8fCAwO1xuXG4gICAgICAgIGlmICghKHN0YWxlVGltZSA9PT0gLTEgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBjYWNoZVN0YXJ0VGltZSA8PSBzdGFsZVRpbWUpKSB7XG4gICAgICAgICAgLyog6YeN5paw5omn6KGM5omA5pyJ55qEIGNhY2hlICovXG4gICAgICAgICAgT2JqZWN0LnZhbHVlcyhmZXRjaGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICBmLnJlZnJlc2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g56ys5LiA5qyh6buY6K6k5omn6KGM77yM5Y+v5Lul6YCa6L+HIGRlZmF1bHRQYXJhbXMg6K6+572u5Y+C5pWwXG4gICAgICAgIHJ1blJlZi5jdXJyZW50LmFwcGx5KHJ1blJlZiwgX19zcHJlYWQoZGVmYXVsdFBhcmFtcykpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pOyAvLyDph43nva4gZmV0Y2hlc1xuXG4gIHZhciByZXNldCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3QudmFsdWVzKGZldGNoZXNSZWYuY3VycmVudCkuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgZi51bm1vdW50KCk7XG4gICAgfSk7XG4gICAgbmV3c3RGZXRjaEtleS5jdXJyZW50ID0gREVGQVVMVF9LRVk7XG4gICAgc2V0RmV0Y2hlcyh7fSk7IC8vIOS4jeWGmeS8muaciemXrumimOOAguWmguaenOS4jeWGme+8jOatpOaXtueri+WNsyBydW7vvIzkvJrmmK/ogIHnmoTmlbDmja5cblxuICAgIGZldGNoZXNSZWYuY3VycmVudCA9IHt9O1xuICB9LCBbc2V0RmV0Y2hlc10pOyAvLyAgcmVmcmVzaERlcHMg5Y+Y5YyW77yM6YeN5paw5omn6KGM5omA5pyJ6K+35rGCXG5cbiAgdXNlVXBkYXRlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW1hbnVhbCkge1xuICAgICAgLyog5YWo6YOo6YeN5paw5omn6KGMICovXG4gICAgICBPYmplY3QudmFsdWVzKGZldGNoZXNSZWYuY3VycmVudCkuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgICBmLnJlZnJlc2goKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgX19zcHJlYWQocmVmcmVzaERlcHMpKTsgLy8g5Y246L2957uE5Lu26Kem5Y+RXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgT2JqZWN0LnZhbHVlcyhmZXRjaGVzUmVmLmN1cnJlbnQpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgZi51bm1vdW50KCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHZhciBub3RFeGVjdXRlZFdhcm5pbmcgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJZb3Ugc2hvdWxkJ3QgY2FsbCBcIiArIG5hbWUgKyBcIiB3aGVuIHNlcnZpY2Ugbm90IGV4ZWN1dGVkIG9uY2UuXCIpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHtcbiAgICBsb2FkaW5nOiByZWFkeSAmJiAhbWFudWFsIHx8IGRlZmF1bHRMb2FkaW5nLFxuICAgIGRhdGE6IGluaXRpYWxEYXRhLFxuICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgcGFyYW1zOiBbXSxcbiAgICBjYW5jZWw6IG5vdEV4ZWN1dGVkV2FybmluZygnY2FuY2VsJyksXG4gICAgcmVmcmVzaDogbm90RXhlY3V0ZWRXYXJuaW5nKCdyZWZyZXNoJyksXG4gICAgbXV0YXRlOiBub3RFeGVjdXRlZFdhcm5pbmcoJ211dGF0ZScpXG4gIH0sIGZldGNoZXNbbmV3c3RGZXRjaEtleS5jdXJyZW50XSB8fCB7fSksIHtcbiAgICBydW46IHJ1bixcbiAgICBmZXRjaGVzOiBmZXRjaGVzLFxuICAgIHJlc2V0OiByZXNldFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQXN5bmM7IiwidmFyIF9fYXNzaWduID0gdGhpcyAmJiB0aGlzLl9fYXNzaWduIHx8IGZ1bmN0aW9uICgpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbnZhciBfX3NwcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZCB8fCBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VBc3luYyBmcm9tICcuL3VzZUFzeW5jJztcbmltcG9ydCB1c2VVcGRhdGVFZmZlY3QgZnJvbSAnLi91dGlscy91c2VVcGRhdGVFZmZlY3QnO1xuXG5mdW5jdGlvbiB1c2VMb2FkTW9yZShzZXJ2aWNlLCBvcHRpb25zKSB7XG4gIHZhciBfYSA9IG9wdGlvbnMucmVmcmVzaERlcHMsXG4gICAgICByZWZyZXNoRGVwcyA9IF9hID09PSB2b2lkIDAgPyBbXSA6IF9hLFxuICAgICAgcmVmID0gb3B0aW9ucy5yZWYsXG4gICAgICBpc05vTW9yZSA9IG9wdGlvbnMuaXNOb01vcmUsXG4gICAgICBfYiA9IG9wdGlvbnMudGhyZXNob2xkLFxuICAgICAgdGhyZXNob2xkID0gX2IgPT09IHZvaWQgMCA/IDEwMCA6IF9iLFxuICAgICAgZmV0Y2hLZXkgPSBvcHRpb25zLmZldGNoS2V5LFxuICAgICAgcmVzdE9wdGlvbnMgPSBfX3Jlc3Qob3B0aW9ucywgW1wicmVmcmVzaERlcHNcIiwgXCJyZWZcIiwgXCJpc05vTW9yZVwiLCBcInRocmVzaG9sZFwiLCBcImZldGNoS2V5XCJdKTtcblxuICB2YXIgX2MgPSBfX3JlYWQodXNlU3RhdGUoZmFsc2UpLCAyKSxcbiAgICAgIGxvYWRpbmdNb3JlID0gX2NbMF0sXG4gICAgICBzZXRMb2FkaW5nTW9yZSA9IF9jWzFdO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9wdGlvbnMuZmV0Y2hLZXkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcInVzZVJlcXVlc3QgbG9hZE1vcmUgbW9kZSBkb24ndCBuZWVkIGZldGNoS2V5IVwiKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgdmFyIHJlc3VsdCA9IHVzZUFzeW5jKHNlcnZpY2UsIF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXN0T3B0aW9ucyksIHtcbiAgICBmZXRjaEtleTogZnVuY3Rpb24gZmV0Y2hLZXkoZCkge1xuICAgICAgdmFyIF9hO1xuXG4gICAgICByZXR1cm4gKChfYSA9IGQgPT09IG51bGwgfHwgZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZC5saXN0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSB8fCAwO1xuICAgIH0sXG4gICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgfVxuXG4gICAgICBzZXRMb2FkaW5nTW9yZShmYWxzZSk7XG5cbiAgICAgIGlmIChvcHRpb25zLm9uU3VjY2Vzcykge1xuICAgICAgICBvcHRpb25zLm9uU3VjY2Vzcy5hcHBseShvcHRpb25zLCBfX3NwcmVhZChwYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKTtcbiAgdmFyIGRhdGEgPSByZXN1bHQuZGF0YSxcbiAgICAgIHJ1biA9IHJlc3VsdC5ydW4sXG4gICAgICBwYXJhbXMgPSByZXN1bHQucGFyYW1zLFxuICAgICAgcmVzZXQgPSByZXN1bHQucmVzZXQsXG4gICAgICBsb2FkaW5nID0gcmVzdWx0LmxvYWRpbmcsXG4gICAgICBmZXRjaGVzID0gcmVzdWx0LmZldGNoZXM7XG4gIHZhciByZWxvYWQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmVzZXQoKTtcblxuICAgIHZhciBfYSA9IF9fcmVhZChwYXJhbXMpLFxuICAgICAgICByZXN0UGFyYW1zID0gX2Euc2xpY2UoMSk7XG5cbiAgICBydW4uYXBwbHkodm9pZCAwLCBfX3NwcmVhZChbdW5kZWZpbmVkXSwgcmVzdFBhcmFtcykpO1xuICB9LCBbcnVuLCByZXNldCwgcGFyYW1zXSk7XG4gIHZhciByZWxvYWRSZWYgPSB1c2VSZWYocmVsb2FkKTtcbiAgcmVsb2FkUmVmLmN1cnJlbnQgPSByZWxvYWQ7XG4gIC8qIGxvYWRNb3JlIOWcuuaZr+S4i++8jOWmguaenCByZWZyZXNoRGVwcyDlj5jljJbvvIzph43nva7liLDnrKzkuIDpobUgKi9cblxuICB1c2VVcGRhdGVFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8qIOWPquacieiHquWKqOaJp+ihjOeahOWcuuaZr++8jCByZWZyZXNoRGVwcyDmiY3mnInmlYggKi9cbiAgICBpZiAoIW9wdGlvbnMubWFudWFsKSB7XG4gICAgICByZWxvYWRSZWYuY3VycmVudCgpO1xuICAgIH1cbiAgfSwgX19zcHJlYWQocmVmcmVzaERlcHMpKTtcbiAgdmFyIGRhdGFHcm91cCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaXN0R3JvdXAgPSBbXTsgLy8g5ZyoIGxvYWRNb3JlIOaXtu+8jOS4jeW4jOacm+a4heepuuS4iuS4gOasoeeahCBkYXRh44CC6ZyA6KaB5oqK5pyA5ZCO5LiA5LiqIOmdniBsb2FkaW5nIOeahOivt+axgiBkYXRh77yM5pS+5Zue5Y6744CCXG5cbiAgICB2YXIgbGFzdE5vTG9hZGluZ0RhdGEgPSBkYXRhO1xuICAgIE9iamVjdC52YWx1ZXMoZmV0Y2hlcykuZm9yRWFjaChmdW5jdGlvbiAoaCkge1xuICAgICAgdmFyIF9hLCBfYjtcblxuICAgICAgaWYgKChfYSA9IGguZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxpc3QpIHtcbiAgICAgICAgbGlzdEdyb3VwID0gbGlzdEdyb3VwLmNvbmNhdCgoX2IgPSBoLmRhdGEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5saXN0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoLmxvYWRpbmcpIHtcbiAgICAgICAgbGFzdE5vTG9hZGluZ0RhdGEgPSBoLmRhdGE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBsYXN0Tm9Mb2FkaW5nRGF0YSksIHtcbiAgICAgIGxpc3Q6IGxpc3RHcm91cFxuICAgIH0pO1xuICB9LCBbZmV0Y2hlcywgZGF0YV0pO1xuICB2YXIgbm9Nb3JlID0gaXNOb01vcmUgPyAhbG9hZGluZyAmJiAhbG9hZGluZ01vcmUgJiYgaXNOb01vcmUoZGF0YUdyb3VwKSA6IGZhbHNlO1xuICB2YXIgbG9hZE1vcmUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5vTW9yZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldExvYWRpbmdNb3JlKHRydWUpO1xuXG4gICAgdmFyIF9hID0gX19yZWFkKHBhcmFtcyksXG4gICAgICAgIHJlc3RQYXJhbXMgPSBfYS5zbGljZSgxKTtcblxuICAgIHJ1bi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKFtkYXRhR3JvdXBdLCByZXN0UGFyYW1zKSk7XG4gIH0sIFtub01vcmUsIHJ1biwgZGF0YUdyb3VwLCBwYXJhbXNdKTtcbiAgLyog5LiK5ouJ5Yqg6L2955qE5pa55rOVICovXG5cbiAgdmFyIHNjcm9sbE1ldGhvZCA9IGZ1bmN0aW9uIHNjcm9sbE1ldGhvZCgpIHtcbiAgICBpZiAobG9hZGluZyB8fCBsb2FkaW5nTW9yZSB8fCAhcmVmIHx8ICFyZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgLSByZWYuY3VycmVudC5zY3JvbGxUb3AgPD0gcmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICsgdGhyZXNob2xkKSB7XG4gICAgICBsb2FkTW9yZSgpO1xuICAgIH1cbiAgfTsgLy8g5aaC5p6c5LiN55SoIHJlZu+8jOiAjOeUqOS5i+WJjeeahCB1c2VDYWxsYmFr77yM5Zyo5p+Q5Lqb5oOF5Ya15LiL5Lya5Ye66Zeu6aKY77yM6YCg5oiQ5ou/5Yiw55qEIGxvYWRpbmcg5LiN5piv5pyA5paw55qE44CCXG4gIC8vIGZpeCBodHRwczovL2dpdGh1Yi5jb20vYWxpYmFiYS9ob29rcy9pc3N1ZXMvNjMwXG5cblxuICB2YXIgc2Nyb2xsTWV0aG9kUmVmID0gdXNlUmVmKHNjcm9sbE1ldGhvZCk7XG4gIHNjcm9sbE1ldGhvZFJlZi5jdXJyZW50ID0gc2Nyb2xsTWV0aG9kO1xuICAvKiDlpoLmnpzmnIkgcmVm77yM5YiZ5Lya5LiK5ouJ5Yqg6L295pu05aSaICovXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXJlZiB8fCAhcmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsVHJpZ2dlciA9IGZ1bmN0aW9uIHNjcm9sbFRyaWdnZXIoKSB7XG4gICAgICByZXR1cm4gc2Nyb2xsTWV0aG9kUmVmLmN1cnJlbnQoKTtcbiAgICB9O1xuXG4gICAgcmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChyZWYgJiYgcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVHJpZ2dlcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3Njcm9sbE1ldGhvZFJlZl0pO1xuICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3VsdCksIHtcbiAgICBkYXRhOiBkYXRhR3JvdXAsXG4gICAgcmVsb2FkOiByZWxvYWQsXG4gICAgbG9hZGluZzogbG9hZGluZyAmJiBkYXRhR3JvdXAubGlzdC5sZW5ndGggPT09IDAsXG4gICAgbG9hZE1vcmU6IGxvYWRNb3JlLFxuICAgIGxvYWRpbmdNb3JlOiBsb2FkaW5nTW9yZSxcbiAgICBub01vcmU6IG5vTW9yZVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9hZE1vcmU7IiwidmFyIF9fYXNzaWduID0gdGhpcyAmJiB0aGlzLl9fYXNzaWduIHx8IGZ1bmN0aW9uICgpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbnZhciBfX3NwcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZCB8fCBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUFzeW5jIGZyb20gJy4vdXNlQXN5bmMnO1xuaW1wb3J0IHVzZVVwZGF0ZUVmZmVjdCBmcm9tICcuL3V0aWxzL3VzZVVwZGF0ZUVmZmVjdCc7XG5cbmZ1bmN0aW9uIHVzZVBhZ2luYXRlZChzZXJ2aWNlLCBvcHRpb25zKSB7XG4gIHZhciBwYWdpbmF0ZWQgPSBvcHRpb25zLnBhZ2luYXRlZCxcbiAgICAgIF9hID0gb3B0aW9ucy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBkZWZhdWx0UGFnZVNpemUgPSBfYSA9PT0gdm9pZCAwID8gMTAgOiBfYSxcbiAgICAgIF9iID0gb3B0aW9ucy5yZWZyZXNoRGVwcyxcbiAgICAgIHJlZnJlc2hEZXBzID0gX2IgPT09IHZvaWQgMCA/IFtdIDogX2IsXG4gICAgICBmZXRjaEtleSA9IG9wdGlvbnMuZmV0Y2hLZXksXG4gICAgICByZXN0T3B0aW9ucyA9IF9fcmVzdChvcHRpb25zLCBbXCJwYWdpbmF0ZWRcIiwgXCJkZWZhdWx0UGFnZVNpemVcIiwgXCJyZWZyZXNoRGVwc1wiLCBcImZldGNoS2V5XCJdKTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChmZXRjaEtleSkge1xuICAgICAgY29uc29sZS5lcnJvcihcInVzZVJlcXVlc3QgcGFnaW5hdGlvbidzIGZldGNoS2V5IHdpbGwgbm90IHdvcmshXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHZhciBfYyA9IHVzZUFzeW5jKHNlcnZpY2UsIF9fYXNzaWduKHtcbiAgICBkZWZhdWx0UGFyYW1zOiBbe1xuICAgICAgY3VycmVudDogMSxcbiAgICAgIHBhZ2VTaXplOiBkZWZhdWx0UGFnZVNpemVcbiAgICB9XVxuICB9LCByZXN0T3B0aW9ucykpLFxuICAgICAgZGF0YSA9IF9jLmRhdGEsXG4gICAgICBwYXJhbXMgPSBfYy5wYXJhbXMsXG4gICAgICBydW4gPSBfYy5ydW4sXG4gICAgICBsb2FkaW5nID0gX2MubG9hZGluZyxcbiAgICAgIHJlc3QgPSBfX3Jlc3QoX2MsIFtcImRhdGFcIiwgXCJwYXJhbXNcIiwgXCJydW5cIiwgXCJsb2FkaW5nXCJdKTtcblxuICB2YXIgX2QgPSBwYXJhbXMgJiYgcGFyYW1zWzBdID8gcGFyYW1zWzBdIDoge30sXG4gICAgICBfZSA9IF9kLmN1cnJlbnQsXG4gICAgICBjdXJyZW50ID0gX2UgPT09IHZvaWQgMCA/IDEgOiBfZSxcbiAgICAgIF9mID0gX2QucGFnZVNpemUsXG4gICAgICBwYWdlU2l6ZSA9IF9mID09PSB2b2lkIDAgPyBkZWZhdWx0UGFnZVNpemUgOiBfZixcbiAgICAgIF9nID0gX2Quc29ydGVyLFxuICAgICAgc29ydGVyID0gX2cgPT09IHZvaWQgMCA/IHt9IDogX2csXG4gICAgICBfaCA9IF9kLmZpbHRlcnMsXG4gICAgICBmaWx0ZXJzID0gX2ggPT09IHZvaWQgMCA/IHt9IDogX2g7IC8vIOWPquaUueWPmCBwYWdpbmF0aW9u77yM5YW25LuW5Y+C5pWw5Y6f5qC35Lyg6YCSXG5cblxuICB2YXIgcnVuQ2hhbmdlUGFnaW5hdGlvbiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwYWdpbmF0aW9uUGFyYW1zKSB7XG4gICAgdmFyIF9hID0gX19yZWFkKHBhcmFtcyksXG4gICAgICAgIG9sZFBhZ2luYXRpb25QYXJhbXMgPSBfYVswXSxcbiAgICAgICAgcmVzdFBhcmFtcyA9IF9hLnNsaWNlKDEpO1xuXG4gICAgcnVuLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoW19fYXNzaWduKF9fYXNzaWduKHt9LCBvbGRQYWdpbmF0aW9uUGFyYW1zKSwgcGFnaW5hdGlvblBhcmFtcyldLCByZXN0UGFyYW1zKSk7XG4gIH0sIFtydW4sIHBhcmFtc10pO1xuICB2YXIgdG90YWwgPSAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLnRvdGFsKSB8fCAwO1xuICB2YXIgdG90YWxQYWdlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKTtcbiAgfSwgW3BhZ2VTaXplLCB0b3RhbF0pO1xuICB2YXIgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoYywgcCkge1xuICAgIHZhciB0b0N1cnJlbnQgPSBjIDw9IDAgPyAxIDogYztcbiAgICB2YXIgdG9QYWdlU2l6ZSA9IHAgPD0gMCA/IDEgOiBwO1xuICAgIHZhciB0ZW1wVG90YWxQYWdlID0gTWF0aC5jZWlsKHRvdGFsIC8gdG9QYWdlU2l6ZSk7XG5cbiAgICBpZiAodG9DdXJyZW50ID4gdGVtcFRvdGFsUGFnZSkge1xuICAgICAgdG9DdXJyZW50ID0gdGVtcFRvdGFsUGFnZTtcbiAgICB9XG5cbiAgICBydW5DaGFuZ2VQYWdpbmF0aW9uKHtcbiAgICAgIGN1cnJlbnQ6IGMsXG4gICAgICBwYWdlU2l6ZTogcFxuICAgIH0pO1xuICB9LCBbdG90YWwsIHJ1bkNoYW5nZVBhZ2luYXRpb25dKTtcbiAgdmFyIGNoYW5nZUN1cnJlbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoYykge1xuICAgIG9uQ2hhbmdlKGMsIHBhZ2VTaXplKTtcbiAgfSwgW29uQ2hhbmdlLCBwYWdlU2l6ZV0pO1xuICB2YXIgY2hhbmdlUGFnZVNpemUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocCkge1xuICAgIG9uQ2hhbmdlKGN1cnJlbnQsIHApO1xuICB9LCBbb25DaGFuZ2UsIGN1cnJlbnRdKTtcbiAgdmFyIGNoYW5nZUN1cnJlbnRSZWYgPSB1c2VSZWYoY2hhbmdlQ3VycmVudCk7XG4gIGNoYW5nZUN1cnJlbnRSZWYuY3VycmVudCA9IGNoYW5nZUN1cnJlbnQ7XG4gIC8qIOWIhumhteWcuuaZr+S4i++8jOWmguaenCByZWZyZXNoRGVwcyDlj5jljJbvvIzph43nva7liIbpobUgKi9cblxuICB1c2VVcGRhdGVFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8qIOWPquacieiHquWKqOaJp+ihjOeahOWcuuaZr++8jCByZWZyZXNoRGVwcyDmiY3mnInmlYggKi9cbiAgICBpZiAoIW9wdGlvbnMubWFudWFsKSB7XG4gICAgICBjaGFuZ2VDdXJyZW50UmVmLmN1cnJlbnQoMSk7XG4gICAgfVxuICB9LCBfX3NwcmVhZChyZWZyZXNoRGVwcykpOyAvLyDooajmoLznv7vpobUg5o6S5bqPIOetm+mAieetiVxuXG4gIHZhciBjaGFuZ2VUYWJsZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwLCBmLCBzKSB7XG4gICAgcnVuQ2hhbmdlUGFnaW5hdGlvbih7XG4gICAgICBjdXJyZW50OiBwLmN1cnJlbnQsXG4gICAgICBwYWdlU2l6ZTogcC5wYWdlU2l6ZSB8fCBkZWZhdWx0UGFnZVNpemUsXG4gICAgICBmaWx0ZXJzOiBmLFxuICAgICAgc29ydGVyOiBzXG4gICAgfSk7XG4gIH0sIFtmaWx0ZXJzLCBzb3J0ZXIsIHJ1bkNoYW5nZVBhZ2luYXRpb25dKTtcbiAgcmV0dXJuIF9fYXNzaWduKHtcbiAgICBsb2FkaW5nOiBsb2FkaW5nLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgcnVuOiBydW4sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgY3VycmVudDogY3VycmVudCxcbiAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgIHRvdGFsOiB0b3RhbCxcbiAgICAgIHRvdGFsUGFnZTogdG90YWxQYWdlLFxuICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgICAgY2hhbmdlQ3VycmVudDogY2hhbmdlQ3VycmVudCxcbiAgICAgIGNoYW5nZVBhZ2VTaXplOiBjaGFuZ2VQYWdlU2l6ZVxuICAgIH0sXG4gICAgdGFibGVQcm9wczoge1xuICAgICAgZGF0YVNvdXJjZTogKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5saXN0KSB8fCBbXSxcbiAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICBvbkNoYW5nZTogY2hhbmdlVGFibGUsXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGN1cnJlbnQ6IGN1cnJlbnQsXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgdG90YWw6IHRvdGFsXG4gICAgICB9XG4gICAgfSxcbiAgICBzb3J0ZXI6IHNvcnRlcixcbiAgICBmaWx0ZXJzOiBmaWx0ZXJzXG4gIH0sIHJlc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VQYWdpbmF0ZWQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBDb25maWdDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuQ29uZmlnQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdVc2VSZXF1ZXN0Q29uZmlnQ29udGV4dCc7XG5leHBvcnQgZGVmYXVsdCBDb25maWdDb250ZXh0OyIsInZhciBfX2Fzc2lnbiA9IHRoaXMgJiYgdGhpcy5fX2Fzc2lnbiB8fCBmdW5jdGlvbiAoKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0O1xuICB9O1xuXG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG52YXIgX19zcHJlYWQgPSB0aGlzICYmIHRoaXMuX19zcHJlYWQgfHwgZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xuXG5cbmltcG9ydCB7IHVzZVJlZiwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VBc3luYyBmcm9tICcuL3VzZUFzeW5jJztcbmltcG9ydCB1c2VMb2FkTW9yZSBmcm9tICcuL3VzZUxvYWRNb3JlJztcbmltcG9ydCB1c2VQYWdpbmF0ZWQgZnJvbSAnLi91c2VQYWdpbmF0ZWQnO1xuaW1wb3J0IENvbmZpZ0NvbnRleHQgZnJvbSAnLi9jb25maWdDb250ZXh0JztcblxuZnVuY3Rpb24gdXNlUmVxdWVzdChzZXJ2aWNlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgY29udGV4dENvbmZpZyA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG5cbiAgdmFyIGZpbmFsT3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb250ZXh0Q29uZmlnKSwgb3B0aW9ucyk7XG5cbiAgdmFyIHBhZ2luYXRlZCA9IGZpbmFsT3B0aW9ucy5wYWdpbmF0ZWQsXG4gICAgICBsb2FkTW9yZSA9IGZpbmFsT3B0aW9ucy5sb2FkTW9yZSxcbiAgICAgIHJlcXVlc3RNZXRob2QgPSBmaW5hbE9wdGlvbnMucmVxdWVzdE1ldGhvZDtcbiAgdmFyIHBhZ2luYXRlZFJlZiA9IHVzZVJlZihwYWdpbmF0ZWQpO1xuICB2YXIgbG9hZE1vcmVSZWYgPSB1c2VSZWYobG9hZE1vcmUpO1xuXG4gIGlmIChwYWdpbmF0ZWRSZWYuY3VycmVudCAhPT0gcGFnaW5hdGVkKSB7XG4gICAgdGhyb3cgRXJyb3IoJ1lvdSBzaG91bGQgbm90IG1vZGlmeSB0aGUgcGFnaW5hdGVkIG9mIG9wdGlvbnMnKTtcbiAgfVxuXG4gIGlmIChsb2FkTW9yZVJlZi5jdXJyZW50ICE9PSBsb2FkTW9yZSkge1xuICAgIHRocm93IEVycm9yKCdZb3Ugc2hvdWxkIG5vdCBtb2RpZnkgdGhlIGxvYWRNb3JlIG9mIG9wdGlvbnMnKTtcbiAgfVxuXG4gIHBhZ2luYXRlZFJlZi5jdXJyZW50ID0gcGFnaW5hdGVkO1xuICBsb2FkTW9yZVJlZi5jdXJyZW50ID0gbG9hZE1vcmU7IC8vIEB0cy1pZ25vcmVcblxuICB2YXIgZmV0Y2hQcm94eSA9IGZ1bmN0aW9uIGZldGNoUHJveHkoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfSAvLyBAdHMtaWdub3JlXG5cblxuICAgIHJldHVybiBmZXRjaC5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKGFyZ3MpKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGZpbmFsUmVxdWVzdE1ldGhvZCA9IHJlcXVlc3RNZXRob2QgfHwgZmV0Y2hQcm94eTtcbiAgdmFyIHByb21pc2VTZXJ2aWNlO1xuXG4gIHN3aXRjaCAodHlwZW9mIHNlcnZpY2UpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcHJvbWlzZVNlcnZpY2UgPSBmdW5jdGlvbiBwcm9taXNlU2VydmljZSgpIHtcbiAgICAgICAgcmV0dXJuIGZpbmFsUmVxdWVzdE1ldGhvZChzZXJ2aWNlKTtcbiAgICAgIH07XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHZhciB1cmxfMSA9IHNlcnZpY2UudXJsLFxuICAgICAgICAgIHJlc3RfMSA9IF9fcmVzdChzZXJ2aWNlLCBbXCJ1cmxcIl0pO1xuXG4gICAgICBwcm9taXNlU2VydmljZSA9IGZ1bmN0aW9uIHByb21pc2VTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdE1ldGhvZCA/IHJlcXVlc3RNZXRob2Qoc2VydmljZSkgOiBmZXRjaFByb3h5KHVybF8xLCByZXN0XzEpO1xuICAgICAgfTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcHJvbWlzZVNlcnZpY2UgPSBmdW5jdGlvbiBwcm9taXNlU2VydmljZSgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgdmFyIHMgPSBzZXJ2aWNlLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoYXJncykpO1xuICAgICAgICAgIHZhciBmbiA9IHM7XG5cbiAgICAgICAgICBpZiAoIXMudGhlbikge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2Ygcykge1xuICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIGZuID0gZmluYWxSZXF1ZXN0TWV0aG9kKHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgdmFyIHVybF8yID0gcy51cmwsXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfMiA9IF9fcmVzdChzLCBbXCJ1cmxcIl0pO1xuXG4gICAgICAgICAgICAgICAgZm4gPSByZXF1ZXN0TWV0aG9kID8gcmVxdWVzdE1ldGhvZChzKSA6IGZldGNoUHJveHkodXJsXzIsIHJlc3RfMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm4udGhlbihyZXNvbHZlKVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICB9XG5cbiAgaWYgKGxvYWRNb3JlKSB7XG4gICAgcmV0dXJuIHVzZUxvYWRNb3JlKHByb21pc2VTZXJ2aWNlLCBmaW5hbE9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKHBhZ2luYXRlZCkge1xuICAgIHJldHVybiB1c2VQYWdpbmF0ZWQocHJvbWlzZVNlcnZpY2UsIGZpbmFsT3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gdXNlQXN5bmMocHJvbWlzZVNlcnZpY2UsIGZpbmFsT3B0aW9ucyk7XG59XG5cbnZhciBVc2VSZXF1ZXN0UHJvdmlkZXIgPSBDb25maWdDb250ZXh0LlByb3ZpZGVyOyAvLyBVc2VBUElQcm92aWRlciDlt7Lnu4/lup/lvIPvvIzmraTlpITkuLrkuoblhbzlrrkgdW1panMg5o+S5Lu2IHBsdWdpbi1yZXF1ZXN0XG5cbnZhciBVc2VBUElQcm92aWRlciA9IFVzZVJlcXVlc3RQcm92aWRlcjtcbmV4cG9ydCB7IHVzZUFzeW5jLCB1c2VQYWdpbmF0ZWQsIHVzZUxvYWRNb3JlLCBVc2VSZXF1ZXN0UHJvdmlkZXIsIFVzZUFQSVByb3ZpZGVyIH07XG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0OyIsIi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc2hpbXMgdGhhdCBwcm92aWRlIG1pbmltYWwgZnVuY3Rpb25hbGl0eSBvZiB0aGUgRVM2IGNvbGxlY3Rpb25zLlxyXG4gKlxyXG4gKiBUaGVzZSBpbXBsZW1lbnRhdGlvbnMgYXJlIG5vdCBtZWFudCB0byBiZSB1c2VkIG91dHNpZGUgb2YgdGhlIFJlc2l6ZU9ic2VydmVyXHJcbiAqIG1vZHVsZXMgYXMgdGhleSBjb3ZlciBvbmx5IGEgbGltaXRlZCByYW5nZSBvZiB1c2UgY2FzZXMuXHJcbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWpzZG9jLCB2YWxpZC1qc2RvYyAqL1xyXG52YXIgTWFwU2hpbSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIE1hcCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gTWFwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGluZGV4IGluIHByb3ZpZGVkIGFycmF5IHRoYXQgbWF0Y2hlcyB0aGUgc3BlY2lmaWVkIGtleS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PEFycmF5Pn0gYXJyXHJcbiAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0SW5kZXgoYXJyLCBrZXkpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gLTE7XHJcbiAgICAgICAgYXJyLnNvbWUoZnVuY3Rpb24gKGVudHJ5LCBpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoZW50cnlbMF0gPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2xhc3NfMS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19lbnRyaWVzX18ubGVuZ3RoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgodGhpcy5fX2VudHJpZXNfXywga2V5KTtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fX2VudHJpZXNfX1tpbmRleF07XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeVsxXTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX19baW5kZXhdWzFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fLnB1c2goW2tleSwgdmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyaWVzID0gdGhpcy5fX2VudHJpZXNfXztcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXgoZW50cmllcywga2V5KTtcclxuICAgICAgICAgICAgaWYgKH5pbmRleCkge1xyXG4gICAgICAgICAgICAgICAgZW50cmllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEhfmdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5zcGxpY2UoMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gW2N0eD1udWxsXVxyXG4gICAgICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGN0eCkge1xyXG4gICAgICAgICAgICBpZiAoY3R4ID09PSB2b2lkIDApIHsgY3R4ID0gbnVsbDsgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5fX2VudHJpZXNfXzsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY3R4LCBlbnRyeVsxXSwgZW50cnlbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gY2xhc3NfMTtcclxuICAgIH0oKSk7XHJcbn0pKCk7XG5cbi8qKlxyXG4gKiBEZXRlY3RzIHdoZXRoZXIgd2luZG93IGFuZCBkb2N1bWVudCBvYmplY3RzIGFyZSBhdmFpbGFibGUgaW4gY3VycmVudCBlbnZpcm9ubWVudC5cclxuICovXHJcbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCA9PT0gZG9jdW1lbnQ7XG5cbi8vIFJldHVybnMgZ2xvYmFsIG9iamVjdCBvZiBhIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbnZhciBnbG9iYWwkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gc2VsZjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PT0gTWF0aCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3c7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcclxuICAgIHJldHVybiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xyXG59KSgpO1xuXG4vKipcclxuICogQSBzaGltIGZvciB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHdoaWNoIGZhbGxzIGJhY2sgdG8gdGhlIHNldFRpbWVvdXQgaWZcclxuICogZmlyc3Qgb25lIGlzIG5vdCBzdXBwb3J0ZWQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJlcXVlc3RzJyBpZGVudGlmaWVyLlxyXG4gKi9cclxudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgLy8gSXQncyByZXF1aXJlZCB0byB1c2UgYSBib3VuZGVkIGZ1bmN0aW9uIGJlY2F1c2UgSUUgc29tZXRpbWVzIHRocm93c1xyXG4gICAgICAgIC8vIGFuIFwiSW52YWxpZCBjYWxsaW5nIG9iamVjdFwiIGVycm9yIGlmIHJBRiBpcyBpbnZva2VkIHdpdGhvdXQgdGhlIGdsb2JhbFxyXG4gICAgICAgIC8vIG9iamVjdCBvbiB0aGUgbGVmdCBoYW5kIHNpZGUuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKGdsb2JhbCQxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FsbGJhY2soRGF0ZS5ub3coKSk7IH0sIDEwMDAgLyA2MCk7IH07XHJcbn0pKCk7XG5cbi8vIERlZmluZXMgbWluaW11bSB0aW1lb3V0IGJlZm9yZSBhZGRpbmcgYSB0cmFpbGluZyBjYWxsLlxyXG52YXIgdHJhaWxpbmdUaW1lb3V0ID0gMjtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGVuc3VyZXMgdGhhdCBwcm92aWRlZCBjYWxsYmFjayB3aWxsIGJlXHJcbiAqIGludm9rZWQgb25seSBvbmNlIGR1cmluZyB0aGUgc3BlY2lmaWVkIGRlbGF5IHBlcmlvZC5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBkZWxheSBwZXJpb2QuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSAtIERlbGF5IGFmdGVyIHdoaWNoIHRvIGludm9rZSBjYWxsYmFjay5cclxuICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gKi9cclxuZnVuY3Rpb24gdGhyb3R0bGUgKGNhbGxiYWNrLCBkZWxheSkge1xyXG4gICAgdmFyIGxlYWRpbmdDYWxsID0gZmFsc2UsIHRyYWlsaW5nQ2FsbCA9IGZhbHNlLCBsYXN0Q2FsbFRpbWUgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBmdW5jdGlvbiBhbmQgc2NoZWR1bGVzIG5ldyBpbnZvY2F0aW9uIGlmXHJcbiAgICAgKiB0aGUgXCJwcm94eVwiIHdhcyBjYWxsZWQgZHVyaW5nIGN1cnJlbnQgcmVxdWVzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVBlbmRpbmcoKSB7XHJcbiAgICAgICAgaWYgKGxlYWRpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIGxlYWRpbmdDYWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmFpbGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgcHJveHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENhbGxiYWNrIGludm9rZWQgYWZ0ZXIgdGhlIHNwZWNpZmllZCBkZWxheS4gSXQgd2lsbCBmdXJ0aGVyIHBvc3Rwb25lXHJcbiAgICAgKiBpbnZvY2F0aW9uIG9mIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBkZWxlZ2F0aW5nIGl0IHRvIHRoZVxyXG4gICAgICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB0aW1lb3V0Q2FsbGJhY2soKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEocmVzb2x2ZVBlbmRpbmcpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTY2hlZHVsZXMgaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHByb3h5KCkge1xyXG4gICAgICAgIHZhciB0aW1lU3RhbXAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICAvLyBSZWplY3QgaW1tZWRpYXRlbHkgZm9sbG93aW5nIGNhbGxzLlxyXG4gICAgICAgICAgICBpZiAodGltZVN0YW1wIC0gbGFzdENhbGxUaW1lIDwgdHJhaWxpbmdUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gU2NoZWR1bGUgbmV3IGNhbGwgdG8gYmUgaW4gaW52b2tlZCB3aGVuIHRoZSBwZW5kaW5nIG9uZSBpcyByZXNvbHZlZC5cclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBpbXBvcnRhbnQgZm9yIFwidHJhbnNpdGlvbnNcIiB3aGljaCBuZXZlciBhY3R1YWxseSBzdGFydFxyXG4gICAgICAgICAgICAvLyBpbW1lZGlhdGVseSBzbyB0aGVyZSBpcyBhIGNoYW5jZSB0aGF0IHdlIG1pZ2h0IG1pc3Mgb25lIGlmIGNoYW5nZVxyXG4gICAgICAgICAgICAvLyBoYXBwZW5zIGFtaWRzIHRoZSBwZW5kaW5nIGludm9jYXRpb24uXHJcbiAgICAgICAgICAgIHRyYWlsaW5nQ2FsbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyYWlsaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHRpbWVvdXRDYWxsYmFjaywgZGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lU3RhbXA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJveHk7XHJcbn1cblxuLy8gTWluaW11bSBkZWxheSBiZWZvcmUgaW52b2tpbmcgdGhlIHVwZGF0ZSBvZiBvYnNlcnZlcnMuXHJcbnZhciBSRUZSRVNIX0RFTEFZID0gMjA7XHJcbi8vIEEgbGlzdCBvZiBzdWJzdHJpbmdzIG9mIENTUyBwcm9wZXJ0aWVzIHVzZWQgdG8gZmluZCB0cmFuc2l0aW9uIGV2ZW50cyB0aGF0XHJcbi8vIG1pZ2h0IGFmZmVjdCBkaW1lbnNpb25zIG9mIG9ic2VydmVkIGVsZW1lbnRzLlxyXG52YXIgdHJhbnNpdGlvbktleXMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCcsICd3aWR0aCcsICdoZWlnaHQnLCAnc2l6ZScsICd3ZWlnaHQnXTtcclxuLy8gQ2hlY2sgaWYgTXV0YXRpb25PYnNlcnZlciBpcyBhdmFpbGFibGUuXHJcbnZhciBtdXRhdGlvbk9ic2VydmVyU3VwcG9ydGVkID0gdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xyXG4vKipcclxuICogU2luZ2xldG9uIGNvbnRyb2xsZXIgY2xhc3Mgd2hpY2ggaGFuZGxlcyB1cGRhdGVzIG9mIFJlc2l6ZU9ic2VydmVyIGluc3RhbmNlcy5cclxuICovXHJcbnZhciBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcigpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbmRpY2F0ZXMgd2hldGhlciBET00gbGlzdGVuZXJzIGhhdmUgYmVlbiBhZGRlZC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRlbGxzIHRoYXQgY29udHJvbGxlciBoYXMgc3Vic2NyaWJlZCBmb3IgTXV0YXRpb24gRXZlbnRzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge2Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEtlZXBzIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgTXV0YXRpb25PYnNlcnZlci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtNdXRhdGlvbk9ic2VydmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbnVsbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIGxpc3Qgb2YgY29ubmVjdGVkIG9ic2VydmVycy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZlclNQST59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnNfID0gW107XHJcbiAgICAgICAgdGhpcy5vblRyYW5zaXRpb25FbmRfID0gdGhpcy5vblRyYW5zaXRpb25FbmRfLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoID0gdGhyb3R0bGUodGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIFJFRlJFU0hfREVMQVkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIG9ic2VydmVyIHRvIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgYWRkZWQuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5hZGRPYnNlcnZlciA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xyXG4gICAgICAgIGlmICghfnRoaXMub2JzZXJ2ZXJzXy5pbmRleE9mKG9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyc18ucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBsaXN0ZW5lcnMgaWYgdGhleSBoYXZlbid0IGJlZW4gYWRkZWQgeWV0LlxyXG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdF8oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlclNQSX0gb2JzZXJ2ZXIgLSBPYnNlcnZlciB0byBiZSByZW1vdmVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnNfO1xyXG4gICAgICAgIHZhciBpbmRleCA9IG9ic2VydmVycy5pbmRleE9mKG9ic2VydmVyKTtcclxuICAgICAgICAvLyBSZW1vdmUgb2JzZXJ2ZXIgaWYgaXQncyBwcmVzZW50IGluIHJlZ2lzdHJ5LlxyXG4gICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnMgaWYgY29udHJvbGxlciBoYXMgbm8gY29ubmVjdGVkIG9ic2VydmVycy5cclxuICAgICAgICBpZiAoIW9ic2VydmVycy5sZW5ndGggJiYgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdF8oKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLiBJdCB3aWxsIGNvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpbnNvZmFyXHJcbiAgICAgKiBpdCBkZXRlY3RzIGNoYW5nZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY2hhbmdlc0RldGVjdGVkID0gdGhpcy51cGRhdGVPYnNlcnZlcnNfKCk7XHJcbiAgICAgICAgLy8gQ29udGludWUgcnVubmluZyB1cGRhdGVzIGlmIGNoYW5nZXMgaGF2ZSBiZWVuIGRldGVjdGVkIGFzIHRoZXJlIG1pZ2h0XHJcbiAgICAgICAgLy8gYmUgZnV0dXJlIG9uZXMgY2F1c2VkIGJ5IENTUyB0cmFuc2l0aW9ucy5cclxuICAgICAgICBpZiAoY2hhbmdlc0RldGVjdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgZXZlcnkgb2JzZXJ2ZXIgZnJvbSBvYnNlcnZlcnMgbGlzdCBhbmQgbm90aWZpZXMgdGhlbSBvZiBxdWV1ZWRcclxuICAgICAqIGVudHJpZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIFwidHJ1ZVwiIGlmIGFueSBvYnNlcnZlciBoYXMgZGV0ZWN0ZWQgY2hhbmdlcyBpblxyXG4gICAgICogICAgICBkaW1lbnNpb25zIG9mIGl0J3MgZWxlbWVudHMuXHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUudXBkYXRlT2JzZXJ2ZXJzXyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBDb2xsZWN0IG9ic2VydmVycyB0aGF0IGhhdmUgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICB2YXIgYWN0aXZlT2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnNfLmZpbHRlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyLmdhdGhlckFjdGl2ZSgpLCBvYnNlcnZlci5oYXNBY3RpdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBEZWxpdmVyIG5vdGlmaWNhdGlvbnMgaW4gYSBzZXBhcmF0ZSBjeWNsZSBpbiBvcmRlciB0byBhdm9pZCBhbnlcclxuICAgICAgICAvLyBjb2xsaXNpb25zIGJldHdlZW4gb2JzZXJ2ZXJzLCBlLmcuIHdoZW4gbXVsdGlwbGUgaW5zdGFuY2VzIG9mXHJcbiAgICAgICAgLy8gUmVzaXplT2JzZXJ2ZXIgYXJlIHRyYWNraW5nIHRoZSBzYW1lIGVsZW1lbnQgYW5kIHRoZSBjYWxsYmFjayBvZiBvbmVcclxuICAgICAgICAvLyBvZiB0aGVtIGNoYW5nZXMgY29udGVudCBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCB0YXJnZXQuIFNvbWV0aW1lc1xyXG4gICAgICAgIC8vIHRoaXMgbWF5IHJlc3VsdCBpbiBub3RpZmljYXRpb25zIGJlaW5nIGJsb2NrZWQgZm9yIHRoZSByZXN0IG9mIG9ic2VydmVycy5cclxuICAgICAgICBhY3RpdmVPYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2ZXIpIHsgcmV0dXJuIG9ic2VydmVyLmJyb2FkY2FzdEFjdGl2ZSgpOyB9KTtcclxuICAgICAgICByZXR1cm4gYWN0aXZlT2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5jb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSBhZGRlZC5cclxuICAgICAgICBpZiAoIWlzQnJvd3NlciB8fCB0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTdWJzY3JpcHRpb24gdG8gdGhlIFwiVHJhbnNpdGlvbmVuZFwiIGV2ZW50IGlzIHVzZWQgYXMgYSB3b3JrYXJvdW5kIGZvclxyXG4gICAgICAgIC8vIGRlbGF5ZWQgdHJhbnNpdGlvbnMuIFRoaXMgd2F5IGl0J3MgcG9zc2libGUgdG8gY2FwdHVyZSBhdCBsZWFzdCB0aGVcclxuICAgICAgICAvLyBmaW5hbCBzdGF0ZSBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLm9uVHJhbnNpdGlvbkVuZF8pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIGlmIChtdXRhdGlvbk9ic2VydmVyU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5yZWZyZXNoKTtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8ub2JzZXJ2ZShkb2N1bWVudCwge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIERPTSBsaXN0ZW5lcnMuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLmRpc2Nvbm5lY3RfID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgcnVubmluZyBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IG9yIGlmIGxpc3RlbmVyc1xyXG4gICAgICAgIC8vIGhhdmUgYmVlbiBhbHJlYWR5IHJlbW92ZWQuXHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLm9uVHJhbnNpdGlvbkVuZF8pO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uc09ic2VydmVyXykge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXy5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfID0gbnVsbDtcclxuICAgICAgICB0aGlzLm11dGF0aW9uRXZlbnRzQWRkZWRfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0ZWRfID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBoYW5kbGVyLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge1RyYW5zaXRpb25FdmVudH0gZXZlbnRcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLm9uVHJhbnNpdGlvbkVuZF8gPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICB2YXIgX2IgPSBfYS5wcm9wZXJ0eU5hbWUsIHByb3BlcnR5TmFtZSA9IF9iID09PSB2b2lkIDAgPyAnJyA6IF9iO1xyXG4gICAgICAgIC8vIERldGVjdCB3aGV0aGVyIHRyYW5zaXRpb24gbWF5IGFmZmVjdCBkaW1lbnNpb25zIG9mIGFuIGVsZW1lbnQuXHJcbiAgICAgICAgdmFyIGlzUmVmbG93UHJvcGVydHkgPSB0cmFuc2l0aW9uS2V5cy5zb21lKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICEhfnByb3BlcnR5TmFtZS5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGlzUmVmbG93UHJvcGVydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpbnN0YW5jZSBvZiB0aGUgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtSZXNpemVPYnNlcnZlckNvbnRyb2xsZXJ9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VfKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VfID0gbmV3IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZV87XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb2xkcyByZWZlcmVuY2UgdG8gdGhlIGNvbnRyb2xsZXIncyBpbnN0YW5jZS5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZSB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuaW5zdGFuY2VfID0gbnVsbDtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXI7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBEZWZpbmVzIG5vbi13cml0YWJsZS9lbnVtZXJhYmxlIHByb3BlcnRpZXMgb2YgdGhlIHByb3ZpZGVkIHRhcmdldCBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgLSBPYmplY3QgZm9yIHdoaWNoIHRvIGRlZmluZSBwcm9wZXJ0aWVzLlxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBQcm9wZXJ0aWVzIHRvIGJlIGRlZmluZWQuXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRhcmdldCBvYmplY3QuXHJcbiAqL1xyXG52YXIgZGVmaW5lQ29uZmlndXJhYmxlID0gKGZ1bmN0aW9uICh0YXJnZXQsIHByb3BzKSB7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMocHJvcHMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfYVtfaV07XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wc1trZXldLFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn0pO1xuXG4vKipcclxuICogUmV0dXJucyB0aGUgZ2xvYmFsIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggcHJvdmlkZWQgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRhcmdldFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gKi9cclxudmFyIGdldFdpbmRvd09mID0gKGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgIC8vIEFzc3VtZSB0aGF0IHRoZSBlbGVtZW50IGlzIGFuIGluc3RhbmNlIG9mIE5vZGUsIHdoaWNoIG1lYW5zIHRoYXQgaXRcclxuICAgIC8vIGhhcyB0aGUgXCJvd25lckRvY3VtZW50XCIgcHJvcGVydHkgZnJvbSB3aGljaCB3ZSBjYW4gcmV0cmlldmUgYVxyXG4gICAgLy8gY29ycmVzcG9uZGluZyBnbG9iYWwgb2JqZWN0LlxyXG4gICAgdmFyIG93bmVyR2xvYmFsID0gdGFyZ2V0ICYmIHRhcmdldC5vd25lckRvY3VtZW50ICYmIHRhcmdldC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gICAgLy8gUmV0dXJuIHRoZSBsb2NhbCBnbG9iYWwgb2JqZWN0IGlmIGl0J3Mgbm90IHBvc3NpYmxlIGV4dHJhY3Qgb25lIGZyb21cclxuICAgIC8vIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICByZXR1cm4gb3duZXJHbG9iYWwgfHwgZ2xvYmFsJDE7XHJcbn0pO1xuXG4vLyBQbGFjZWhvbGRlciBvZiBhbiBlbXB0eSBjb250ZW50IHJlY3RhbmdsZS5cclxudmFyIGVtcHR5UmVjdCA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4vKipcclxuICogQ29udmVydHMgcHJvdmlkZWQgc3RyaW5nIHRvIGEgbnVtYmVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHZhbHVlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiB0b0Zsb2F0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMDtcclxufVxyXG4vKipcclxuICogRXh0cmFjdHMgYm9yZGVycyBzaXplIGZyb20gcHJvdmlkZWQgc3R5bGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xyXG4gKiBAcGFyYW0gey4uLnN0cmluZ30gcG9zaXRpb25zIC0gQm9yZGVycyBwb3NpdGlvbnMgKHRvcCwgcmlnaHQsIC4uLilcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlcykge1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBwb3NpdGlvbnNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9zaXRpb25zLnJlZHVjZShmdW5jdGlvbiAoc2l6ZSwgcG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZXNbJ2JvcmRlci0nICsgcG9zaXRpb24gKyAnLXdpZHRoJ107XHJcbiAgICAgICAgcmV0dXJuIHNpemUgKyB0b0Zsb2F0KHZhbHVlKTtcclxuICAgIH0sIDApO1xyXG59XHJcbi8qKlxyXG4gKiBFeHRyYWN0cyBwYWRkaW5ncyBzaXplcyBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICogQHJldHVybnMge09iamVjdH0gUGFkZGluZ3MgYm94LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UGFkZGluZ3Moc3R5bGVzKSB7XHJcbiAgICB2YXIgcG9zaXRpb25zID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcclxuICAgIHZhciBwYWRkaW5ncyA9IHt9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBwb3NpdGlvbnNfMSA9IHBvc2l0aW9uczsgX2kgPCBwb3NpdGlvbnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBwb3NpdGlvbnNfMVtfaV07XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydwYWRkaW5nLScgKyBwb3NpdGlvbl07XHJcbiAgICAgICAgcGFkZGluZ3NbcG9zaXRpb25dID0gdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFkZGluZ3M7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgY29udGVudCByZWN0YW5nbGUgb2YgcHJvdmlkZWQgU1ZHIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U1ZHR3JhcGhpY3NFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzXHJcbiAqICAgICAgdG8gYmUgY2FsY3VsYXRlZC5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICB2YXIgYmJveCA9IHRhcmdldC5nZXRCQm94KCk7XHJcbiAgICByZXR1cm4gY3JlYXRlUmVjdEluaXQoMCwgMCwgYmJveC53aWR0aCwgYmJveC5oZWlnaHQpO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIEhUTUxFbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGZvciB3aGljaCB0byBjYWxjdWxhdGUgdGhlIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgLy8gQ2xpZW50IHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgY2FuJ3QgYmVcclxuICAgIC8vIHVzZWQgZXhjbHVzaXZlbHkgYXMgdGhleSBwcm92aWRlIHJvdW5kZWQgdmFsdWVzLlxyXG4gICAgdmFyIGNsaWVudFdpZHRoID0gdGFyZ2V0LmNsaWVudFdpZHRoLCBjbGllbnRIZWlnaHQgPSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xyXG4gICAgLy8gQnkgdGhpcyBjb25kaXRpb24gd2UgY2FuIGNhdGNoIGFsbCBub24tcmVwbGFjZWQgaW5saW5lLCBoaWRkZW4gYW5kXHJcbiAgICAvLyBkZXRhY2hlZCBlbGVtZW50cy4gVGhvdWdoIGVsZW1lbnRzIHdpdGggd2lkdGggJiBoZWlnaHQgcHJvcGVydGllcyBsZXNzXHJcbiAgICAvLyB0aGFuIDAuNSB3aWxsIGJlIGRpc2NhcmRlZCBhcyB3ZWxsLlxyXG4gICAgLy9cclxuICAgIC8vIFdpdGhvdXQgaXQgd2Ugd291bGQgbmVlZCB0byBpbXBsZW1lbnQgc2VwYXJhdGUgbWV0aG9kcyBmb3IgZWFjaCBvZlxyXG4gICAgLy8gdGhvc2UgY2FzZXMgYW5kIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHBlcmZvcm0gYSBwcmVjaXNlIGFuZCBwZXJmb3JtYW5jZVxyXG4gICAgLy8gZWZmZWN0aXZlIHRlc3QgZm9yIGhpZGRlbiBlbGVtZW50cy4gRS5nLiBldmVuIGpRdWVyeSdzICc6dmlzaWJsZScgZmlsdGVyXHJcbiAgICAvLyBnaXZlcyB3cm9uZyByZXN1bHRzIGZvciBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IGxlc3MgdGhhbiAwLjUuXHJcbiAgICBpZiAoIWNsaWVudFdpZHRoICYmICFjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgfVxyXG4gICAgdmFyIHN0eWxlcyA9IGdldFdpbmRvd09mKHRhcmdldCkuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xyXG4gICAgdmFyIHBhZGRpbmdzID0gZ2V0UGFkZGluZ3Moc3R5bGVzKTtcclxuICAgIHZhciBob3JpelBhZCA9IHBhZGRpbmdzLmxlZnQgKyBwYWRkaW5ncy5yaWdodDtcclxuICAgIHZhciB2ZXJ0UGFkID0gcGFkZGluZ3MudG9wICsgcGFkZGluZ3MuYm90dG9tO1xyXG4gICAgLy8gQ29tcHV0ZWQgc3R5bGVzIG9mIHdpZHRoICYgaGVpZ2h0IGFyZSBiZWluZyB1c2VkIGJlY2F1c2UgdGhleSBhcmUgdGhlXHJcbiAgICAvLyBvbmx5IGRpbWVuc2lvbnMgYXZhaWxhYmxlIHRvIEpTIHRoYXQgY29udGFpbiBub24tcm91bmRlZCB2YWx1ZXMuIEl0IGNvdWxkXHJcbiAgICAvLyBiZSBwb3NzaWJsZSB0byB1dGlsaXplIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaWYgb25seSBpdCdzIGRhdGEgd2Fzbid0XHJcbiAgICAvLyBhZmZlY3RlZCBieSBDU1MgdHJhbnNmb3JtYXRpb25zIGxldCBhbG9uZSBwYWRkaW5ncywgYm9yZGVycyBhbmQgc2Nyb2xsIGJhcnMuXHJcbiAgICB2YXIgd2lkdGggPSB0b0Zsb2F0KHN0eWxlcy53aWR0aCksIGhlaWdodCA9IHRvRmxvYXQoc3R5bGVzLmhlaWdodCk7XHJcbiAgICAvLyBXaWR0aCAmIGhlaWdodCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHdoZW4gdGhlICdib3JkZXItYm94JyBib3hcclxuICAgIC8vIG1vZGVsIGlzIGFwcGxpZWQgKGV4Y2VwdCBmb3IgSUUpLlxyXG4gICAgaWYgKHN0eWxlcy5ib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xyXG4gICAgICAgIC8vIEZvbGxvd2luZyBjb25kaXRpb25zIGFyZSByZXF1aXJlZCB0byBoYW5kbGUgSW50ZXJuZXQgRXhwbG9yZXIgd2hpY2hcclxuICAgICAgICAvLyBkb2Vzbid0IGluY2x1ZGUgcGFkZGluZ3MgYW5kIGJvcmRlcnMgdG8gY29tcHV0ZWQgQ1NTIGRpbWVuc2lvbnMuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBXZSBjYW4gc2F5IHRoYXQgaWYgQ1NTIGRpbWVuc2lvbnMgKyBwYWRkaW5ncyBhcmUgZXF1YWwgdG8gdGhlIFwiY2xpZW50XCJcclxuICAgICAgICAvLyBwcm9wZXJ0aWVzIHRoZW4gaXQncyBlaXRoZXIgSUUsIGFuZCB0aHVzIHdlIGRvbid0IG5lZWQgdG8gc3VidHJhY3RcclxuICAgICAgICAvLyBhbnl0aGluZywgb3IgYW4gZWxlbWVudCBtZXJlbHkgZG9lc24ndCBoYXZlIHBhZGRpbmdzL2JvcmRlcnMgc3R5bGVzLlxyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKHdpZHRoICsgaG9yaXpQYWQpICE9PSBjbGllbnRXaWR0aCkge1xyXG4gICAgICAgICAgICB3aWR0aCAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICdsZWZ0JywgJ3JpZ2h0JykgKyBob3JpelBhZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGgucm91bmQoaGVpZ2h0ICsgdmVydFBhZCkgIT09IGNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAndG9wJywgJ2JvdHRvbScpICsgdmVydFBhZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBGb2xsb3dpbmcgc3RlcHMgY2FuJ3QgYmUgYXBwbGllZCB0byB0aGUgZG9jdW1lbnQncyByb290IGVsZW1lbnQgYXMgaXRzXHJcbiAgICAvLyBjbGllbnRbV2lkdGgvSGVpZ2h0XSBwcm9wZXJ0aWVzIHJlcHJlc2VudCB2aWV3cG9ydCBhcmVhIG9mIHRoZSB3aW5kb3cuXHJcbiAgICAvLyBCZXNpZGVzLCBpdCdzIGFzIHdlbGwgbm90IG5lY2Vzc2FyeSBhcyB0aGUgPGh0bWw+IGl0c2VsZiBuZWl0aGVyIGhhc1xyXG4gICAgLy8gcmVuZGVyZWQgc2Nyb2xsIGJhcnMgbm9yIGl0IGNhbiBiZSBjbGlwcGVkLlxyXG4gICAgaWYgKCFpc0RvY3VtZW50RWxlbWVudCh0YXJnZXQpKSB7XHJcbiAgICAgICAgLy8gSW4gc29tZSBicm93c2VycyAob25seSBpbiBGaXJlZm94LCBhY3R1YWxseSkgQ1NTIHdpZHRoICYgaGVpZ2h0XHJcbiAgICAgICAgLy8gaW5jbHVkZSBzY3JvbGwgYmFycyBzaXplIHdoaWNoIGNhbiBiZSByZW1vdmVkIGF0IHRoaXMgc3RlcCBhcyBzY3JvbGxcclxuICAgICAgICAvLyBiYXJzIGFyZSB0aGUgb25seSBkaWZmZXJlbmNlIGJldHdlZW4gcm91bmRlZCBkaW1lbnNpb25zICsgcGFkZGluZ3NcclxuICAgICAgICAvLyBhbmQgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLCB0aG91Z2ggdGhhdCBpcyBub3QgYWx3YXlzIHRydWUgaW4gQ2hyb21lLlxyXG4gICAgICAgIHZhciB2ZXJ0U2Nyb2xsYmFyID0gTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAtIGNsaWVudFdpZHRoO1xyXG4gICAgICAgIHZhciBob3JpelNjcm9sbGJhciA9IE1hdGgucm91bmQoaGVpZ2h0ICsgdmVydFBhZCkgLSBjbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgLy8gQ2hyb21lIGhhcyBhIHJhdGhlciB3ZWlyZCByb3VuZGluZyBvZiBcImNsaWVudFwiIHByb3BlcnRpZXMuXHJcbiAgICAgICAgLy8gRS5nLiBmb3IgYW4gZWxlbWVudCB3aXRoIGNvbnRlbnQgd2lkdGggb2YgMzE0LjJweCBpdCBzb21ldGltZXMgZ2l2ZXNcclxuICAgICAgICAvLyB0aGUgY2xpZW50IHdpZHRoIG9mIDMxNXB4IGFuZCBmb3IgdGhlIHdpZHRoIG9mIDMxNC43cHggaXQgbWF5IGdpdmVcclxuICAgICAgICAvLyAzMTRweC4gQW5kIGl0IGRvZXNuJ3QgaGFwcGVuIGFsbCB0aGUgdGltZS4gU28ganVzdCBpZ25vcmUgdGhpcyBkZWx0YVxyXG4gICAgICAgIC8vIGFzIGEgbm9uLXJlbGV2YW50LlxyXG4gICAgICAgIGlmIChNYXRoLmFicyh2ZXJ0U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICB3aWR0aCAtPSB2ZXJ0U2Nyb2xsYmFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnMoaG9yaXpTY3JvbGxiYXIpICE9PSAxKSB7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBob3JpelNjcm9sbGJhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3JlYXRlUmVjdEluaXQocGFkZGluZ3MubGVmdCwgcGFkZGluZ3MudG9wLCB3aWR0aCwgaGVpZ2h0KTtcclxufVxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgcHJvdmlkZWQgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgY2hlY2tlZC5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNTVkdHcmFwaGljc0VsZW1lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU29tZSBicm93c2VycywgbmFtZWx5IElFIGFuZCBFZGdlLCBkb24ndCBoYXZlIHRoZSBTVkdHcmFwaGljc0VsZW1lbnRcclxuICAgIC8vIGludGVyZmFjZS5cclxuICAgIGlmICh0eXBlb2YgU1ZHR3JhcGhpY3NFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLlNWR0dyYXBoaWNzRWxlbWVudDsgfTtcclxuICAgIH1cclxuICAgIC8vIElmIGl0J3Mgc28sIHRoZW4gY2hlY2sgdGhhdCBlbGVtZW50IGlzIGF0IGxlYXN0IGFuIGluc3RhbmNlIG9mIHRoZVxyXG4gICAgLy8gU1ZHRWxlbWVudCBhbmQgdGhhdCBpdCBoYXMgdGhlIFwiZ2V0QkJveFwiIG1ldGhvZC5cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRyYS1wYXJlbnNcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiAodGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdFbGVtZW50ICYmXHJcbiAgICAgICAgdHlwZW9mIHRhcmdldC5nZXRCQm94ID09PSAnZnVuY3Rpb24nKTsgfTtcclxufSkoKTtcclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYSBkb2N1bWVudCBlbGVtZW50ICg8aHRtbD4pLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gYmUgY2hlY2tlZC5cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0RvY3VtZW50RWxlbWVudCh0YXJnZXQpIHtcclxuICAgIHJldHVybiB0YXJnZXQgPT09IGdldFdpbmRvd09mKHRhcmdldCkuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGFuIGFwcHJvcHJpYXRlIGNvbnRlbnQgcmVjdGFuZ2xlIGZvciBwcm92aWRlZCBodG1sIG9yIHN2ZyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgY29udGVudCByZWN0YW5nbGUgb2Ygd2hpY2ggbmVlZHMgdG8gYmUgY2FsY3VsYXRlZC5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Q29udGVudFJlY3QodGFyZ2V0KSB7XHJcbiAgICBpZiAoIWlzQnJvd3Nlcikge1xyXG4gICAgICAgIHJldHVybiBlbXB0eVJlY3Q7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTVkdHcmFwaGljc0VsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgIHJldHVybiBnZXRTVkdDb250ZW50UmVjdCh0YXJnZXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50Q29udGVudFJlY3QodGFyZ2V0KTtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyByZWN0YW5nbGUgd2l0aCBhbiBpbnRlcmZhY2Ugb2YgdGhlIERPTVJlY3RSZWFkT25seS5cclxuICogU3BlYzogaHR0cHM6Ly9kcmFmdHMuZnh0Zi5vcmcvZ2VvbWV0cnkvI2RvbXJlY3RyZWFkb25seVxyXG4gKlxyXG4gKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIE9iamVjdCB3aXRoIHJlY3RhbmdsZSdzIHgveSBjb29yZGluYXRlcyBhbmQgZGltZW5zaW9ucy5cclxuICogQHJldHVybnMge0RPTVJlY3RSZWFkT25seX1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlYWRPbmx5UmVjdChfYSkge1xyXG4gICAgdmFyIHggPSBfYS54LCB5ID0gX2EueSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xyXG4gICAgLy8gSWYgRE9NUmVjdFJlYWRPbmx5IGlzIGF2YWlsYWJsZSB1c2UgaXQgYXMgYSBwcm90b3R5cGUgZm9yIHRoZSByZWN0YW5nbGUuXHJcbiAgICB2YXIgQ29uc3RyID0gdHlwZW9mIERPTVJlY3RSZWFkT25seSAhPT0gJ3VuZGVmaW5lZCcgPyBET01SZWN0UmVhZE9ubHkgOiBPYmplY3Q7XHJcbiAgICB2YXIgcmVjdCA9IE9iamVjdC5jcmVhdGUoQ29uc3RyLnByb3RvdHlwZSk7XHJcbiAgICAvLyBSZWN0YW5nbGUncyBwcm9wZXJ0aWVzIGFyZSBub3Qgd3JpdGFibGUgYW5kIG5vbi1lbnVtZXJhYmxlLlxyXG4gICAgZGVmaW5lQ29uZmlndXJhYmxlKHJlY3QsIHtcclxuICAgICAgICB4OiB4LCB5OiB5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgIHRvcDogeSxcclxuICAgICAgICByaWdodDogeCArIHdpZHRoLFxyXG4gICAgICAgIGJvdHRvbTogaGVpZ2h0ICsgeSxcclxuICAgICAgICBsZWZ0OiB4XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZWN0O1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIERPTVJlY3RJbml0IG9iamVjdCBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgZGltZW5zaW9ucyBhbmQgdGhlIHgveSBjb29yZGluYXRlcy5cclxuICogU3BlYzogaHR0cHM6Ly9kcmFmdHMuZnh0Zi5vcmcvZ2VvbWV0cnkvI2RpY3RkZWYtZG9tcmVjdGluaXRcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHggLSBYIGNvb3JkaW5hdGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gWSBjb29yZGluYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSBSZWN0YW5nbGUncyB3aWR0aC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFJlY3RhbmdsZSdzIGhlaWdodC5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUmVjdEluaXQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgcmV0dXJuIHsgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xyXG59XG5cbi8qKlxyXG4gKiBDbGFzcyB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBjb21wdXRhdGlvbnMgb2YgdGhlIGNvbnRlbnQgcmVjdGFuZ2xlIG9mXHJcbiAqIHByb3ZpZGVkIERPTSBlbGVtZW50IGFuZCBmb3Iga2VlcGluZyB0cmFjayBvZiBpdCdzIGNoYW5nZXMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2YXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2YXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIG9ic2VydmVkLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZhdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBCcm9hZGNhc3RlZCB3aWR0aCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnJvYWRjYXN0ZWQgaGVpZ2h0IG9mIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJyb2FkY2FzdEhlaWdodCA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIHRoZSBsYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge0RPTVJlY3RJbml0fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY29udGVudFJlY3RfID0gY3JlYXRlUmVjdEluaXQoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgY29udGVudCByZWN0YW5nbGUgYW5kIHRlbGxzIHdoZXRoZXIgaXQncyB3aWR0aCBvciBoZWlnaHQgcHJvcGVydGllc1xyXG4gICAgICogaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IGJyb2FkY2FzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gZ2V0Q29udGVudFJlY3QodGhpcy50YXJnZXQpO1xyXG4gICAgICAgIHRoaXMuY29udGVudFJlY3RfID0gcmVjdDtcclxuICAgICAgICByZXR1cm4gKHJlY3Qud2lkdGggIT09IHRoaXMuYnJvYWRjYXN0V2lkdGggfHxcclxuICAgICAgICAgICAgcmVjdC5oZWlnaHQgIT09IHRoaXMuYnJvYWRjYXN0SGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgJ2Jyb2FkY2FzdFdpZHRoJyBhbmQgJ2Jyb2FkY2FzdEhlaWdodCcgcHJvcGVydGllcyB3aXRoIGEgZGF0YVxyXG4gICAgICogZnJvbSB0aGUgY29ycmVzcG9uZGluZyBwcm9wZXJ0aWVzIG9mIHRoZSBsYXN0IG9ic2VydmVkIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtET01SZWN0SW5pdH0gTGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2YXRpb24ucHJvdG90eXBlLmJyb2FkY2FzdFJlY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmNvbnRlbnRSZWN0XztcclxuICAgICAgICB0aGlzLmJyb2FkY2FzdFdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgICAgICB0aGlzLmJyb2FkY2FzdEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiByZWN0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZhdGlvbjtcclxufSgpKTtcblxudmFyIFJlc2l6ZU9ic2VydmVyRW50cnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdGhhdCBpcyBiZWluZyBvYnNlcnZlZC5cclxuICAgICAqIEBwYXJhbSB7RE9NUmVjdEluaXR9IHJlY3RJbml0IC0gRGF0YSBvZiB0aGUgZWxlbWVudCdzIGNvbnRlbnQgcmVjdGFuZ2xlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckVudHJ5KHRhcmdldCwgcmVjdEluaXQpIHtcclxuICAgICAgICB2YXIgY29udGVudFJlY3QgPSBjcmVhdGVSZWFkT25seVJlY3QocmVjdEluaXQpO1xyXG4gICAgICAgIC8vIEFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlXHJcbiAgICAgICAgLy8gYW5kIGFyZSBhbHNvIG5vdCBlbnVtZXJhYmxlIGluIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24uXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBQcm9wZXJ0eSBhY2Nlc3NvcnMgYXJlIG5vdCBiZWluZyB1c2VkIGFzIHRoZXknZCByZXF1aXJlIHRvIGRlZmluZSBhXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBXZWFrTWFwIHN0b3JhZ2Ugd2hpY2ggbWF5IGNhdXNlIG1lbW9yeSBsZWFrcyBpbiBicm93c2VycyB0aGF0XHJcbiAgICAgICAgLy8gZG9uJ3Qgc3VwcG9ydCB0aGlzIHR5cGUgb2YgY29sbGVjdGlvbnMuXHJcbiAgICAgICAgZGVmaW5lQ29uZmlndXJhYmxlKHRoaXMsIHsgdGFyZ2V0OiB0YXJnZXQsIGNvbnRlbnRSZWN0OiBjb250ZW50UmVjdCB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckVudHJ5O1xyXG59KCkpO1xuXG52YXIgUmVzaXplT2JzZXJ2ZXJTUEkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNhbGxiYWNrfSBjYWxsYmFjayAtIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZFxyXG4gICAgICogICAgICB3aGVuIG9uZSBvZiB0aGUgb2JzZXJ2ZWQgZWxlbWVudHMgY2hhbmdlcyBpdCdzIGNvbnRlbnQgZGltZW5zaW9ucy5cclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfSBjb250cm9sbGVyIC0gQ29udHJvbGxlciBpbnN0YW5jZSB3aGljaFxyXG4gICAgICogICAgICBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHVwZGF0ZXMgb2Ygb2JzZXJ2ZXIuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyfSBjYWxsYmFja0N0eCAtIFJlZmVyZW5jZSB0byB0aGUgcHVibGljXHJcbiAgICAgKiAgICAgIFJlc2l6ZU9ic2VydmVyIGluc3RhbmNlIHdoaWNoIHdpbGwgYmUgcGFzc2VkIHRvIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlclNQSShjYWxsYmFjaywgY29udHJvbGxlciwgY2FsbGJhY2tDdHgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb2xsZWN0aW9uIG9mIHJlc2l6ZSBvYnNlcnZhdGlvbnMgdGhhdCBoYXZlIGRldGVjdGVkIGNoYW5nZXMgaW4gZGltZW5zaW9uc1xyXG4gICAgICAgICAqIG9mIGVsZW1lbnRzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge0FycmF5PFJlc2l6ZU9ic2VydmF0aW9uPn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZWdpc3RyeSBvZiB0aGUgUmVzaXplT2JzZXJ2YXRpb24gaW5zdGFuY2VzLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHByaXZhdGUge01hcDxFbGVtZW50LCBSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfID0gbmV3IE1hcFNoaW0oKTtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBjYWxsYmFjayBwcm92aWRlZCBhcyBwYXJhbWV0ZXIgMSBpcyBub3QgYSBmdW5jdGlvbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja18gPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfID0gY29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrQ3R4XyA9IGNhbGxiYWNrQ3R4O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgb2JzZXJ2aW5nIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIG9ic2VydmVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgY3VycmVudCBlbnZpcm9ubWVudCBkb2Vzbid0IGhhdmUgdGhlIEVsZW1lbnQgaW50ZXJmYWNlLlxyXG4gICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgXCJFbGVtZW50XCIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbnMgPSB0aGlzLm9ic2VydmF0aW9uc187XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBlbGVtZW50IGlzIGFscmVhZHkgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgaWYgKG9ic2VydmF0aW9ucy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmF0aW9ucy5zZXQodGFyZ2V0LCBuZXcgUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5hZGRPYnNlcnZlcih0aGlzKTtcclxuICAgICAgICAvLyBGb3JjZSB0aGUgdXBkYXRlIG9mIG9ic2VydmF0aW9ucy5cclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlZnJlc2goKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBzdG9wIG9ic2VydmluZy5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgY3VycmVudCBlbnZpcm9ubWVudCBkb2Vzbid0IGhhdmUgdGhlIEVsZW1lbnQgaW50ZXJmYWNlLlxyXG4gICAgICAgIGlmICh0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIShFbGVtZW50IGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgXCJFbGVtZW50XCIuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvYnNlcnZhdGlvbnMgPSB0aGlzLm9ic2VydmF0aW9uc187XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBlbGVtZW50IGlzIG5vdCBiZWluZyBvYnNlcnZlZC5cclxuICAgICAgICBpZiAoIW9ic2VydmF0aW9ucy5oYXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmF0aW9ucy5kZWxldGUodGFyZ2V0KTtcclxuICAgICAgICBpZiAoIW9ic2VydmF0aW9ucy5zaXplKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgb2JzZXJ2aW5nIGFsbCBlbGVtZW50cy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8ucmVtb3ZlT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb2xsZWN0cyBvYnNlcnZhdGlvbiBpbnN0YW5jZXMgdGhlIGFzc29jaWF0ZWQgZWxlbWVudCBvZiB3aGljaCBoYXMgY2hhbmdlZFxyXG4gICAgICogaXQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmdhdGhlckFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uZm9yRWFjaChmdW5jdGlvbiAob2JzZXJ2YXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmF0aW9uLmlzQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ucHVzaChvYnNlcnZhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEludm9rZXMgaW5pdGlhbCBjYWxsYmFjayBmdW5jdGlvbiB3aXRoIGEgbGlzdCBvZiBSZXNpemVPYnNlcnZlckVudHJ5XHJcbiAgICAgKiBpbnN0YW5jZXMgY29sbGVjdGVkIGZyb20gYWN0aXZlIHJlc2l6ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5icm9hZGNhc3RBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBvYnNlcnZlciBkb2Vzbid0IGhhdmUgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAgICBpZiAoIXRoaXMuaGFzQWN0aXZlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jYWxsYmFja0N0eF87XHJcbiAgICAgICAgLy8gQ3JlYXRlIFJlc2l6ZU9ic2VydmVyRW50cnkgaW5zdGFuY2UgZm9yIGV2ZXJ5IGFjdGl2ZSBvYnNlcnZhdGlvbi5cclxuICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5tYXAoZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVzaXplT2JzZXJ2ZXJFbnRyeShvYnNlcnZhdGlvbi50YXJnZXQsIG9ic2VydmF0aW9uLmJyb2FkY2FzdFJlY3QoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja18uY2FsbChjdHgsIGVudHJpZXMsIGN0eCk7XHJcbiAgICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXJzIHRoZSBjb2xsZWN0aW9uIG9mIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5jbGVhckFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18uc3BsaWNlKDApO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVGVsbHMgd2hldGhlciBvYnNlcnZlciBoYXMgYWN0aXZlIG9ic2VydmF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLmhhc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLmxlbmd0aCA+IDA7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyU1BJO1xyXG59KCkpO1xuXG4vLyBSZWdpc3RyeSBvZiBpbnRlcm5hbCBvYnNlcnZlcnMuIElmIFdlYWtNYXAgaXMgbm90IGF2YWlsYWJsZSB1c2UgY3VycmVudCBzaGltXHJcbi8vIGZvciB0aGUgTWFwIGNvbGxlY3Rpb24gYXMgaXQgaGFzIGFsbCByZXF1aXJlZCBtZXRob2RzIGFuZCBiZWNhdXNlIFdlYWtNYXBcclxuLy8gY2FuJ3QgYmUgZnVsbHkgcG9seWZpbGxlZCBhbnl3YXkuXHJcbnZhciBvYnNlcnZlcnMgPSB0eXBlb2YgV2Vha01hcCAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgV2Vha01hcCgpIDogbmV3IE1hcFNoaW0oKTtcclxuLyoqXHJcbiAqIFJlc2l6ZU9ic2VydmVyIEFQSS4gRW5jYXBzdWxhdGVzIHRoZSBSZXNpemVPYnNlcnZlciBTUEkgaW1wbGVtZW50YXRpb25cclxuICogZXhwb3Npbmcgb25seSB0aG9zZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGRlZmluZWQgaW4gdGhlIHNwZWMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlckNhbGxiYWNrfSBjYWxsYmFjayAtIENhbGxiYWNrIHRoYXQgaXMgaW52b2tlZCB3aGVuXHJcbiAgICAgKiAgICAgIGRpbWVuc2lvbnMgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVzaXplT2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIHRoaXMpO1xyXG4gICAgICAgIG9ic2VydmVycy5zZXQodGhpcywgb2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xyXG59KCkpO1xyXG4vLyBFeHBvc2UgcHVibGljIG1ldGhvZHMgb2YgUmVzaXplT2JzZXJ2ZXIuXHJcbltcclxuICAgICdvYnNlcnZlJyxcclxuICAgICd1bm9ic2VydmUnLFxyXG4gICAgJ2Rpc2Nvbm5lY3QnXHJcbl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XHJcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIChfYSA9IG9ic2VydmVycy5nZXQodGhpcykpW21ldGhvZF0uYXBwbHkoX2EsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59KTtcblxudmFyIGluZGV4ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIEV4cG9ydCBleGlzdGluZyBpbXBsZW1lbnRhdGlvbiBpZiBhdmFpbGFibGUuXHJcbiAgICBpZiAodHlwZW9mIGdsb2JhbCQxLlJlc2l6ZU9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlcjtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0RWxlbWVudCh0YXJnZXQsIGRlZmF1bHRFbGVtZW50KSB7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuIGRlZmF1bHRFbGVtZW50O1xuICB9XG5cbiAgdmFyIHRhcmdldEVsZW1lbnQ7XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0KCk7XG4gIH0gZWxzZSBpZiAoJ2N1cnJlbnQnIGluIHRhcmdldCkge1xuICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXQuY3VycmVudDtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldEVsZW1lbnQ7XG59IiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VQZXJzaXN0Rm4oZm4pIHtcbiAgdmFyIGZuUmVmID0gdXNlUmVmKGZuKTtcbiAgZm5SZWYuY3VycmVudCA9IGZuO1xuICB2YXIgcGVyc2lzdEZuID0gdXNlUmVmKCk7XG5cbiAgaWYgKCFwZXJzaXN0Rm4uY3VycmVudCkge1xuICAgIHBlcnNpc3RGbi5jdXJyZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm5SZWYuY3VycmVudC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHBlcnNpc3RGbi5jdXJyZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VQZXJzaXN0Rm47IiwiZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufSIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VQZXJzaXN0Rm4gZnJvbSAnLi4vdXNlUGVyc2lzdEZuJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscyc7XG5cbnZhciB1c2VVbm1vdW50ID0gZnVuY3Rpb24gdXNlVW5tb3VudChmbikge1xuICB2YXIgZm5QZXJzaXN0ID0gdXNlUGVyc2lzdEZuKGZuKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzRnVuY3Rpb24oZm5QZXJzaXN0KSkge1xuICAgICAgICBmblBlcnNpc3QoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VVbm1vdW50OyIsInZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VVbm1vdW50IGZyb20gJy4uL3VzZVVubW91bnQnO1xuXG52YXIgdXNlUmFmU3RhdGUgPSBmdW5jdGlvbiB1c2VSYWZTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGZyYW1lID0gdXNlUmVmKDApO1xuXG4gIHZhciBfYSA9IF9fcmVhZCh1c2VTdGF0ZShpbml0aWFsU3RhdGUpLCAyKSxcbiAgICAgIHN0YXRlID0gX2FbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF9hWzFdO1xuXG4gIHZhciBzZXRSYWZTdGF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lLmN1cnJlbnQpO1xuICAgIGZyYW1lLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgc2V0U3RhdGUodmFsdWUpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHVzZVVubW91bnQoZnVuY3Rpb24gKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lLmN1cnJlbnQpO1xuICB9KTtcbiAgcmV0dXJuIFtzdGF0ZSwgc2V0UmFmU3RhdGVdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmFmU3RhdGU7IiwidmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbmltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xuaW1wb3J0IHsgZ2V0VGFyZ2V0RWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgdXNlUmFmU3RhdGUgZnJvbSAnLi91c2VSYWZTdGF0ZSc7XG5cbmZ1bmN0aW9uIHVzZVNpemUodGFyZ2V0KSB7XG4gIHZhciBfYSA9IF9fcmVhZCh1c2VSYWZTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsID0gZ2V0VGFyZ2V0RWxlbWVudCh0YXJnZXQpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogKGVsIHx8IHt9KS5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogKGVsIHx8IHt9KS5jbGllbnRIZWlnaHRcbiAgICB9O1xuICB9KSwgMiksXG4gICAgICBzdGF0ZSA9IF9hWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfYVsxXTtcblxuICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IGdldFRhcmdldEVsZW1lbnQodGFyZ2V0KTtcblxuICAgIGlmICghZWwpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG5cbiAgICB2YXIgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIHdpZHRoOiBlbnRyeS50YXJnZXQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBlbnRyeS50YXJnZXQuY2xpZW50SGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9LCBbdGFyZ2V0XSk7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2l6ZTsiLCJ2YXIgX19hc3NpZ24gPSB0aGlzICYmIHRoaXMuX19hc3NpZ24gfHwgZnVuY3Rpb24gKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdDtcbiAgfTtcblxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2h5RGlkWW91VXBkYXRlKGNvbXBvbmVudE5hbWUsIHByb3BzKSB7XG4gIHZhciBwcmV2UHJvcHMgPSB1c2VSZWYoe30pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcmV2UHJvcHMuY3VycmVudCkge1xuICAgICAgdmFyIGFsbEtleXMgPSBPYmplY3Qua2V5cyhfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJldlByb3BzLmN1cnJlbnQpLCBwcm9wcykpO1xuICAgICAgdmFyIGNoYW5nZWRQcm9wc18xID0ge307XG4gICAgICBhbGxLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAocHJldlByb3BzLmN1cnJlbnRba2V5XSAhPT0gcHJvcHNba2V5XSkge1xuICAgICAgICAgIGNoYW5nZWRQcm9wc18xW2tleV0gPSB7XG4gICAgICAgICAgICBmcm9tOiBwcmV2UHJvcHMuY3VycmVudFtrZXldLFxuICAgICAgICAgICAgdG86IHByb3BzW2tleV1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZWRQcm9wc18xKS5sZW5ndGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1t3aHktZGlkLXlvdS11cGRhdGVdJywgY29tcG9uZW50TmFtZSwgY2hhbmdlZFByb3BzXzEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByZXZQcm9wcy5jdXJyZW50ID0gcHJvcHM7XG4gIH0pO1xufSIsInZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG52YXIgX19zcHJlYWQgPSB0aGlzICYmIHRoaXMuX19zcHJlYWQgfHwgZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbmltcG9ydCB1c2VSZXF1ZXN0LCB7IFVzZVJlcXVlc3RQcm92aWRlciB9IGZyb20gJ0BhaG9va3Nqcy91c2UtcmVxdWVzdCc7XG5pbXBvcnQgdXNlQ29udHJvbGxhYmxlVmFsdWUgZnJvbSAnLi91c2VDb250cm9sbGFibGVWYWx1ZSc7XG5pbXBvcnQgdXNlRHluYW1pY0xpc3QgZnJvbSAnLi91c2VEeW5hbWljTGlzdCc7XG5pbXBvcnQgdXNlRXZlbnRFbWl0dGVyIGZyb20gJy4vdXNlRXZlbnRFbWl0dGVyJztcbmltcG9ydCB1c2VWaXJ0dWFsTGlzdCBmcm9tICcuL3VzZVZpcnR1YWxMaXN0JztcbmltcG9ydCB7IGNvbmZpZ1Jlc3BvbnNpdmUsIHVzZVJlc3BvbnNpdmUgfSBmcm9tICcuL3VzZVJlc3BvbnNpdmUnO1xuaW1wb3J0IHVzZVNpemUgZnJvbSAnLi91c2VTaXplJztcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSBmcm9tICcuL3VzZUxvY2FsU3RvcmFnZVN0YXRlJztcbmltcG9ydCB1c2VTZXNzaW9uU3RvcmFnZVN0YXRlIGZyb20gJy4vdXNlU2Vzc2lvblN0b3JhZ2VTdGF0ZSc7XG5pbXBvcnQgdXNlVXBkYXRlRWZmZWN0IGZyb20gJy4vdXNlVXBkYXRlRWZmZWN0JztcbmltcG9ydCB1c2VVcGRhdGVMYXlvdXRFZmZlY3QgZnJvbSAnLi91c2VVcGRhdGVMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHVzZUJvb2xlYW4gZnJvbSAnLi91c2VCb29sZWFuJztcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSAnLi91c2VUb2dnbGUnO1xuaW1wb3J0IHVzZURvY3VtZW50VmlzaWJpbGl0eSBmcm9tICcuL3VzZURvY3VtZW50VmlzaWJpbGl0eSc7XG5pbXBvcnQgdXNlU2VsZWN0aW9ucyBmcm9tICcuL3VzZVNlbGVjdGlvbnMnO1xuaW1wb3J0IHVzZVRocm90dGxlIGZyb20gJy4vdXNlVGhyb3R0bGUnO1xuaW1wb3J0IHVzZVRocm90dGxlRm4gZnJvbSAnLi91c2VUaHJvdHRsZUZuJztcbmltcG9ydCB1c2VUaHJvdHRsZUVmZmVjdCBmcm9tICcuL3VzZVRocm90dGxlRWZmZWN0JztcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tICcuL3VzZURlYm91bmNlJztcbmltcG9ydCB1c2VEZWJvdW5jZUZuIGZyb20gJy4vdXNlRGVib3VuY2VGbic7XG5pbXBvcnQgdXNlUHJldmlvdXMgZnJvbSAnLi91c2VQcmV2aW91cyc7XG5pbXBvcnQgdXNlTW91c2UgZnJvbSAnLi91c2VNb3VzZSc7XG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gJy4vdXNlU2Nyb2xsJztcbmltcG9ydCB1c2VDbGlja0F3YXkgZnJvbSAnLi91c2VDbGlja0F3YXknO1xuaW1wb3J0IHVzZUZ1bGxzY3JlZW4gZnJvbSAnLi91c2VGdWxsc2NyZWVuJztcbmltcG9ydCB1c2VJblZpZXdwb3J0IGZyb20gJy4vdXNlSW5WaWV3cG9ydCc7XG5pbXBvcnQgdXNlS2V5UHJlc3MgZnJvbSAnLi91c2VLZXlQcmVzcyc7XG5pbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tICcuL3VzZUV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHVzZUhvdmVyIGZyb20gJy4vdXNlSG92ZXInO1xuaW1wb3J0IHVzZVVubW91bnQgZnJvbSAnLi91c2VVbm1vdW50JztcbmltcG9ydCB1c2VBbnRkVGFibGUgZnJvbSAnLi91c2VBbnRkVGFibGUnO1xuaW1wb3J0IHVzZUZ1c2lvblRhYmxlIGZyb20gJy4vdXNlRnVzaW9uVGFibGUnO1xuaW1wb3J0IHVzZVNldCBmcm9tICcuL3VzZVNldCc7XG5pbXBvcnQgdXNlUGVyc2lzdEZuIGZyb20gJy4vdXNlUGVyc2lzdEZuJztcbmltcG9ydCB1c2VNYXAgZnJvbSAnLi91c2VNYXAnO1xuaW1wb3J0IHVzZUNyZWF0aW9uIGZyb20gJy4vdXNlQ3JlYXRpb24nO1xuaW1wb3J0IHVzZURyb3AgZnJvbSAnLi91c2VEcm9wJztcbmltcG9ydCB1c2VEcmFnIGZyb20gJy4vdXNlRHJhZyc7XG5pbXBvcnQgdXNlTW91bnQgZnJvbSAnLi91c2VNb3VudCc7XG5pbXBvcnQgdXNlVGV4dFNlbGVjdGlvbiBmcm9tICcuL3VzZVRleHRTZWxlY3Rpb24nO1xuaW1wb3J0IHVzZUNvdW50ZXIgZnJvbSAnLi91c2VDb3VudGVyJztcbmltcG9ydCB1c2VVcGRhdGUgZnJvbSAnLi91c2VVcGRhdGUnO1xuaW1wb3J0IHVzZUV2ZW50VGFyZ2V0IGZyb20gJy4vdXNlRXZlbnRUYXJnZXQnO1xuaW1wb3J0IHVzZUhpc3RvcnlUcmF2ZWwgZnJvbSAnLi91c2VIaXN0b3J5VHJhdmVsJztcbmltcG9ydCB1c2VEZWJvdW5jZUVmZmVjdCBmcm9tICcuL3VzZURlYm91bmNlRWZmZWN0JztcbmltcG9ydCB1c2VDb29raWVTdGF0ZSBmcm9tICcuL3VzZUNvb2tpZVN0YXRlJztcbmltcG9ydCB1c2VTZXRTdGF0ZSBmcm9tICcuL3VzZVNldFN0YXRlJztcbmltcG9ydCB1c2VJbnRlcnZhbCBmcm9tICcuL3VzZUludGVydmFsJztcbmltcG9ydCB1c2VXaHlEaWRZb3VVcGRhdGUgZnJvbSAnLi91c2VXaHlEaWRZb3VVcGRhdGUnO1xuaW1wb3J0IHVzZVRpdGxlIGZyb20gJy4vdXNlVGl0bGUnO1xuaW1wb3J0IHVzZU5ldHdvcmsgZnJvbSAnLi91c2VOZXR3b3JrJztcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJy4vdXNlVGltZW91dCc7XG5pbXBvcnQgdXNlUmVhY3RpdmUgZnJvbSAnLi91c2VSZWFjdGl2ZSc7XG5pbXBvcnQgdXNlRmF2aWNvbiBmcm9tICcuL3VzZUZhdmljb24nO1xuaW1wb3J0IHVzZUNvdW50RG93biBmcm9tICcuL3VzZUNvdW50RG93bic7XG5pbXBvcnQgdXNlV2ViU29ja2V0IGZyb20gJy4vdXNlV2ViU29ja2V0JztcbmltcG9ydCB1c2VMb2NrRm4gZnJvbSAnLi91c2VMb2NrRm4nO1xuaW1wb3J0IHVzZVRyYWNrZWRFZmZlY3QgZnJvbSAnLi91c2VUcmFja2VkRWZmZWN0JztcbmltcG9ydCB1c2VVbm1vdW50ZWRSZWYgZnJvbSAnLi91c2VVbm1vdW50ZWRSZWYnO1xuaW1wb3J0IHVzZUV4dGVybmFsIGZyb20gJy4vdXNlRXh0ZXJuYWwnO1xuaW1wb3J0IHVzZVNhZmVTdGF0ZSBmcm9tICcuL3VzZVNhZmVTdGF0ZSc7XG5cbnZhciB1c2VDb250cm9sbGVkVmFsdWUgPSBmdW5jdGlvbiB1c2VDb250cm9sbGVkVmFsdWUoKSB7XG4gIHZhciBhcmdzID0gW107XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gIH1cblxuICBjb25zb2xlLndhcm4oJ3VzZUNvbnRyb2xsZWRWYWx1ZSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi4gUGxlYXNlIHVzZSB1c2VDb250cm9sbGFibGVWYWx1ZSBpbnN0ZWFkLicpO1xuICByZXR1cm4gdXNlQ29udHJvbGxhYmxlVmFsdWUuYXBwbHkodm9pZCAwLCBfX3NwcmVhZChhcmdzKSk7XG59O1xuXG5leHBvcnQgeyB1c2VDb250cm9sbGVkVmFsdWUsIHVzZUNvbnRyb2xsYWJsZVZhbHVlLCB1c2VEeW5hbWljTGlzdCwgdXNlVmlydHVhbExpc3QsIHVzZVJlc3BvbnNpdmUsIHVzZUV2ZW50RW1pdHRlciwgdXNlTG9jYWxTdG9yYWdlU3RhdGUsIHVzZVNlc3Npb25TdG9yYWdlU3RhdGUsIHVzZVNpemUsIGNvbmZpZ1Jlc3BvbnNpdmUsIHVzZVVwZGF0ZUVmZmVjdCwgdXNlVXBkYXRlTGF5b3V0RWZmZWN0LCB1c2VCb29sZWFuLCB1c2VUb2dnbGUsIHVzZURvY3VtZW50VmlzaWJpbGl0eSwgdXNlU2VsZWN0aW9ucywgdXNlVGhyb3R0bGUsIHVzZVRocm90dGxlRm4sIHVzZVRocm90dGxlRWZmZWN0LCB1c2VEZWJvdW5jZSwgdXNlRGVib3VuY2VGbiwgdXNlRGVib3VuY2VFZmZlY3QsIHVzZVByZXZpb3VzLCB1c2VNb3VzZSwgdXNlU2Nyb2xsLCB1c2VDbGlja0F3YXksIHVzZUZ1bGxzY3JlZW4sIHVzZUluVmlld3BvcnQsIHVzZUtleVByZXNzLCB1c2VFdmVudExpc3RlbmVyLCB1c2VIb3ZlciwgdXNlUmVxdWVzdCwgVXNlUmVxdWVzdFByb3ZpZGVyLCB1c2VBbnRkVGFibGUsIHVzZVVubW91bnQsIHVzZVNldCwgdXNlUGVyc2lzdEZuLCB1c2VNYXAsIHVzZUNyZWF0aW9uLCB1c2VEcmFnLCB1c2VEcm9wLCB1c2VNb3VudCwgdXNlQ291bnRlciwgdXNlVXBkYXRlLCB1c2VUZXh0U2VsZWN0aW9uLCB1c2VFdmVudFRhcmdldCwgdXNlSGlzdG9yeVRyYXZlbCwgdXNlRnVzaW9uVGFibGUsIHVzZUNvb2tpZVN0YXRlLCB1c2VTZXRTdGF0ZSwgdXNlSW50ZXJ2YWwsIHVzZVdoeURpZFlvdVVwZGF0ZSwgdXNlVGl0bGUsIHVzZU5ldHdvcmssIHVzZVRpbWVvdXQsIHVzZVJlYWN0aXZlLCB1c2VGYXZpY29uLCB1c2VDb3VudERvd24sIHVzZVRyYWNrZWRFZmZlY3QsIHVzZVdlYlNvY2tldCwgdXNlTG9ja0ZuLCB1c2VVbm1vdW50ZWRSZWYsIHVzZUV4dGVybmFsLCB1c2VTYWZlU3RhdGUgfTsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCB1c2VNYXBDZW50ZXIgPSAobWFwOiBBTWFwLk1hcCkgPT4ge1xuICAgIGNvbnN0IFtsbmdMYXQsIHNldExuZ0xhdF0gPSB1c2VTdGF0ZTxBTWFwLkxuZ0xhdD4oKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZXRMbmdMYXQobWFwLmdldENlbnRlcigpKTtcbiAgICAgICAgfTtcbiAgICAgICAgbWFwLm9uKFwibWFwbW92ZVwiLCBoYW5kbGUpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgbWFwLm9mZihcIm1hcG1vdmVcIiwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbbWFwXSk7XG4gICAgcmV0dXJuIGxuZ0xhdDtcbn07XG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImltcG9ydCB7IENoaWxkcmVuLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmV4cG9ydCBjb25zdCBBbGVydCA9ICh7IGNsYXNzTmFtZSwgYm9vdHN0cmFwU3R5bGUsIGNoaWxkcmVuIH0pID0+IENoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDAgPyAoY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhgYWxlcnQgYWxlcnQtJHtib290c3RyYXBTdHlsZX1gLCBjbGFzc05hbWUpIH0sIGNoaWxkcmVuKSkgOiBudWxsO1xyXG5BbGVydC5kaXNwbGF5TmFtZSA9IFwiQWxlcnRcIjtcclxuZXhwb3J0IGNvbnN0IEljb24gPSAoeyBpY29uLCBjbGFzc05hbWUgPSBcIlwiLCBmYWxsYmFjayB9KSA9PiB7XHJcbiAgICBpZiAoKGljb24gPT09IG51bGwgfHwgaWNvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogaWNvbi50eXBlKSA9PT0gXCJnbHlwaFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiZ2x5cGhpY29uXCIsIGNsYXNzTmFtZSwgaWNvbi5pY29uQ2xhc3MpLCBcImFyaWEtaGlkZGVuXCI6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoKGljb24gPT09IG51bGwgfHwgaWNvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogaWNvbi50eXBlKSA9PT0gXCJpbWFnZVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3JjOiBpY29uLmljb25VcmwsIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSwgYWx0OiBcIlwiIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbGxiYWNrIHx8IG51bGw7XHJcbn07XHJcbkljb24uZGlzcGxheU5hbWUgPSBcIkljb25cIjtcclxuIiwiZXhwb3J0IGNvbnN0IGV4ZWN1dGVBY3Rpb24gPSAoYWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uICYmIGFjdGlvbi5jYW5FeGVjdXRlICYmICFhY3Rpb24uaXNFeGVjdXRpbmcpIHtcclxuICAgICAgICBhY3Rpb24uZXhlY3V0ZSgpO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgaXNBdmFpbGFibGUgPSAocHJvcGVydHkpID0+IHtcclxuICAgIHJldHVybiBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIgLyogQXZhaWxhYmxlICovICYmIHByb3BlcnR5LnZhbHVlO1xyXG59O1xyXG5leHBvcnQgY29uc3QgcGFyc2VTdHlsZSA9IChzdHlsZSA9IFwiXCIpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlLnNwbGl0KFwiO1wiKS5yZWR1Y2UoKHN0eWxlT2JqZWN0LCBsaW5lKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhaXIgPSBsaW5lLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgICAgaWYgKHBhaXIubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gcGFpclswXS50cmltKCkucmVwbGFjZSgvKC0uKS9nLCBtYXRjaCA9PiBtYXRjaFsxXS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0W25hbWVdID0gcGFpclsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlT2JqZWN0O1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChfKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdEZvcikgPT4ge1xyXG4gICAgbGV0IHRpbWVvdXQgPSBudWxsO1xyXG4gICAgY29uc3QgZGVib3VuY2VkID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICBpZiAodGltZW91dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiBmdW5jKC4uLmFyZ3MpLCB3YWl0Rm9yKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZGVib3VuY2VkO1xyXG59O1xyXG4iLCJleHBvcnQgdmFyIEZvcm1hdHRlclR5cGU7XHJcbihmdW5jdGlvbiAoRm9ybWF0dGVyVHlwZSkge1xyXG4gICAgRm9ybWF0dGVyVHlwZVtcIk51bWJlclwiXSA9IFwibnVtYmVyXCI7XHJcbiAgICBGb3JtYXR0ZXJUeXBlW1wiRGF0ZVRpbWVcIl0gPSBcImRhdGV0aW1lXCI7XHJcbn0pKEZvcm1hdHRlclR5cGUgfHwgKEZvcm1hdHRlclR5cGUgPSB7fSkpO1xyXG5leHBvcnQgY2xhc3MgRWRpdGFibGVWYWx1ZUJ1aWxkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0YWJsZVZhbHVlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBkaXNwbGF5VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgIHN0YXR1czogXCJhdmFpbGFibGVcIiAvKiBBdmFpbGFibGUgKi8sXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb246IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcmVhZE9ubHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogamVzdC5mbihuYW1lID0+IGBGb3JtYXR0ZWQgJHtuYW1lfWApLFxyXG4gICAgICAgICAgICAgICAgcGFyc2U6IGplc3QuZm4oKSxcclxuICAgICAgICAgICAgICAgIHdpdGhDb25maWc6IGplc3QuZm4oKCkgPT4gbmV3IEVkaXRhYmxlVmFsdWVCdWlsZGVyKCkuYnVpbGQoKS5mb3JtYXR0ZXIpLFxyXG4gICAgICAgICAgICAgICAgZ2V0Rm9ybWF0UGxhY2Vob2xkZXI6IGplc3QuZm4oKSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IEZvcm1hdHRlclR5cGUuRGF0ZVRpbWUsXHJcbiAgICAgICAgICAgICAgICBjb25maWc6IHt9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldFZhbGlkYXRvcjogamVzdC5mbigpLFxyXG4gICAgICAgICAgICBzZXRWYWx1ZTogamVzdC5mbigodmFsdWUpID0+IHRoaXMud2l0aFZhbHVlKHZhbHVlKSksXHJcbiAgICAgICAgICAgIHNldFRleHRWYWx1ZTogamVzdC5mbigpLFxyXG4gICAgICAgICAgICBzZXRGb3JtYXR0ZXI6IGplc3QuZm4oKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB3aXRoVmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmVkaXRhYmxlVmFsdWUudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmVkaXRhYmxlVmFsdWUuZGlzcGxheVZhbHVlID0gdGhpcy5lZGl0YWJsZVZhbHVlLmZvcm1hdHRlci5mb3JtYXQodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgd2l0aEZvcm1hdHRlcihmb3JtYXR0ZXIpIHtcclxuICAgICAgICB0aGlzLmVkaXRhYmxlVmFsdWUuZm9ybWF0dGVyID0gZm9ybWF0dGVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaXNSZWFkT25seSgpIHtcclxuICAgICAgICB0aGlzLmVkaXRhYmxlVmFsdWUucmVhZE9ubHkgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaXNMb2FkaW5nKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdGFibGVWYWx1ZS5zdGF0dXMgPSBcImxvYWRpbmdcIiAvKiBMb2FkaW5nICovO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzUmVhZE9ubHkoKTtcclxuICAgIH1cclxuICAgIGlzVW5hdmFpbGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0YWJsZVZhbHVlLnN0YXR1cyA9IFwidW5hdmFpbGFibGVcIiAvKiBVbmF2YWlsYWJsZSAqLztcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1JlYWRPbmx5KCk7XHJcbiAgICB9XHJcbiAgICB3aXRoVmFsaWRhdGlvbih2YWxpZGF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0YWJsZVZhbHVlLnZhbGlkYXRpb24gPSB2YWxpZGF0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgd2l0aFVuaXZlcnNlKC4uLnZhbHVlcykge1xyXG4gICAgICAgIHRoaXMuZWRpdGFibGVWYWx1ZS51bml2ZXJzZSA9IHZhbHVlcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRhYmxlVmFsdWU7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIF9pbXBvcnRlZFNjcmlwdCA9IHt9O1xuLyoqXG4gKiBsb2FkIGRlcGVuZGVuY3kgYnkgY3NzIHRhZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlQ3NzKHNyYykge1xuICB2YXIgaGVhZEVsZW1lbnQgPSBkb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIWRvY3VtZW50IHx8IHNyYyBpbiBfaW1wb3J0ZWRTY3JpcHQpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvY3NzJztcbiAgICBzY3JpcHQucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIHNjcmlwdC5ocmVmID0gc3JjO1xuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBoZWFkRWxlbWVudC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgcmVqZWN0KG5ldyBVUklFcnJvcihcIlRoZSBjc3MgXCIuY29uY2F0KHNyYywgXCIgaXMgbm8gYWNjZXNzaWJsZS5cIikpKTtcbiAgICB9O1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF9pbXBvcnRlZFNjcmlwdFtzcmNdID0gdHJ1ZTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuXG4gICAgaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfSk7XG59XG4vKipcbiAqIGxvYWQgZGVwZW5kZW5jeSBieSBzY3JpcHQgdGFnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVTY3JpcHQoc3JjKSB7XG4gIHZhciBpZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ19yZWFjdF9hbWFwJztcbiAgdmFyIGhlYWRFbGVtZW50ID0gZG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFkb2N1bWVudCB8fCBzcmMgaW4gX2ltcG9ydGVkU2NyaXB0KSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LmlkID0gaWQ7XG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgIHNjcmlwdC5zcmMgPSBzcmM7XG5cbiAgICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGhlYWRFbGVtZW50LnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICByZWplY3QobmV3IFVSSUVycm9yKFwiVGhlIFNjcmlwdCBcIi5jb25jYXQoc3JjLCBcIiBpcyBubyBhY2Nlc3NpYmxlLlwiKSkpO1xuICAgIH07XG5cbiAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgX2ltcG9ydGVkU2NyaXB0W3NyY10gPSB0cnVlO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTkxZEdsc2N5OXlaWEYxYVhKbFUyTnlhWEIwTG5SeklsMHNJbTVoYldWeklqcGJJbDlwYlhCdmNuUmxaRk5qY21sd2RDSXNJbkpsY1hWcGNtVkRjM01pTENKemNtTWlMQ0pvWldGa1JXeGxiV1Z1ZENJc0ltUnZZM1Z0Wlc1MElpd2lhR1ZoWkNJc0ltZGxkRVZzWlcxbGJuUnpRbmxVWVdkT1lXMWxJaXdpVUhKdmJXbHpaU0lzSW5KbGMyOXNkbVVpTENKeVpXcGxZM1FpTENKelkzSnBjSFFpTENKamNtVmhkR1ZGYkdWdFpXNTBJaXdpZEhsd1pTSXNJbkpsYkNJc0ltaHlaV1lpTENKdmJtVnljbTl5SWl3aVpYSnlJaXdpY21WdGIzWmxRMmhwYkdRaUxDSlZVa2xGY25KdmNpSXNJbTl1Ykc5aFpDSXNJbUZ3Y0dWdVpFTm9hV3hrSWl3aWNtVnhkV2x5WlZOamNtbHdkQ0lzSW1sa0lpd2lZWE41Ym1NaUxDSmtaV1psY2lKZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1NVRkJUVUVzWlVGQmQwTXNSMEZCUnl4RlFVRnFSRHRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZEUVN4UFFVRlBMRk5CUVZORExGVkJRVlFzUTBGQmIwSkRMRWRCUVhCQ0xFVkJRV2RFTzBGQlEzSkVMRTFCUVUxRExGZEJRVmNzUjBGQlIwTXNVVUZCVVN4TFFVRkxRU3hSUVVGUkxFTkJRVU5ETEVsQlFWUXNTVUZCYVVKRUxGRkJRVkVzUTBGQlEwVXNiMEpCUVZRc1EwRkJPRUlzVFVGQk9VSXNSVUZCYzBNc1EwRkJkRU1zUTBGQmRFSXNRMEZCTlVJN1FVRkRRU3hUUVVGUExFbEJRVWxETEU5QlFVb3NRMEZCV1N4VlFVRkRReXhQUVVGRUxFVkJRVlZETEUxQlFWWXNSVUZCY1VJN1FVRkRkRU1zVVVGQlNTeERRVUZEVEN4UlFVRkVMRWxCUVdGR0xFZEJRVWNzU1VGQlNVWXNaVUZCZUVJc1JVRkJlVU03UVVGRGRrTlJMRTFCUVVGQkxFOUJRVTg3UVVGRFVEdEJRVU5FT3p0QlFVTkVMRkZCUVUxRkxFMUJRVTBzUjBGQlIwNHNVVUZCVVN4RFFVRkRUeXhoUVVGVUxFTkJRWFZDTEUxQlFYWkNMRU5CUVdZN1FVRkRRVVFzU1VGQlFVRXNUVUZCVFN4RFFVRkRSU3hKUVVGUUxFZEJRV01zVlVGQlpEdEJRVU5CUml4SlFVRkJRU3hOUVVGTkxFTkJRVU5ITEVkQlFWQXNSMEZCWVN4WlFVRmlPMEZCUTBGSUxFbEJRVUZCTEUxQlFVMHNRMEZCUTBrc1NVRkJVQ3hIUVVGaldpeEhRVUZrT3p0QlFVTkJVU3hKUVVGQlFTeE5RVUZOTEVOQlFVTkxMRTlCUVZBc1IwRkJhVUlzVlVGQlEwTXNSMEZCUkN4RlFVRlRPMEZCUTNoQ1lpeE5RVUZCUVN4WFFVRlhMRU5CUVVOakxGZEJRVm9zUTBGQmQwSlFMRTFCUVhoQ08wRkJRMEZFTEUxQlFVRkJMRTFCUVUwc1EwRkJReXhKUVVGSlV5eFJRVUZLTEcxQ1FVRjNRbWhDTEVkQlFYaENMSGRDUVVGRUxFTkJRVTQ3UVVGRFJDeExRVWhFT3p0QlFVbEJVU3hKUVVGQlFTeE5RVUZOTEVOQlFVTlRMRTFCUVZBc1IwRkJaMElzV1VGQlRUdEJRVU53UW01Q0xFMUJRVUZCTEdWQlFXVXNRMEZCUTBVc1IwRkJSQ3hEUVVGbUxFZEJRWFZDTEVsQlFYWkNPMEZCUTBGTkxFMUJRVUZCTEU5QlFVODdRVUZEVWl4TFFVaEVPenRCUVVsQlRDeEpRVUZCUVN4WFFVRlhMRU5CUVVOcFFpeFhRVUZhTEVOQlFYZENWaXhOUVVGNFFqdEJRVU5FTEVkQmJFSk5MRU5CUVZBN1FVRnRRa1E3UVVGRlJEdEJRVU5CTzBGQlEwRTdPMEZCUTBFc1QwRkJUeXhUUVVGVFZ5eGhRVUZVTEVOQlFYVkNia0lzUjBGQmRrSXNSVUZCSzBVN1FVRkJRU3hOUVVFelEyOUNMRVZCUVRKRExIVkZRVUU1UWl4aFFVRTRRanRCUVVOd1JpeE5RVUZOYmtJc1YwRkJWeXhIUVVGSFF5eFJRVUZSTEV0QlFVdEJMRkZCUVZFc1EwRkJRME1zU1VGQlZDeEpRVUZwUWtRc1VVRkJVU3hEUVVGRFJTeHZRa0ZCVkN4RFFVRTRRaXhOUVVFNVFpeEZRVUZ6UXl4RFFVRjBReXhEUVVGMFFpeERRVUUxUWp0QlFVTkJMRk5CUVU4c1NVRkJTVU1zVDBGQlNpeERRVUZaTEZWQlFVTkRMRTlCUVVRc1JVRkJWVU1zVFVGQlZpeEZRVUZ4UWp0QlFVTjBReXhSUVVGSkxFTkJRVU5NTEZGQlFVUXNTVUZCWVVZc1IwRkJSeXhKUVVGSlJpeGxRVUY0UWl4RlFVRjVRenRCUVVOMlExRXNUVUZCUVVFc1QwRkJUenRCUVVOUU8wRkJRMFE3TzBGQlEwUXNVVUZCVFVVc1RVRkJUU3hIUVVGSFRpeFJRVUZSTEVOQlFVTlBMR0ZCUVZRc1EwRkJkVUlzVVVGQmRrSXNRMEZCWmp0QlFVTkJSQ3hKUVVGQlFTeE5RVUZOTEVOQlFVTkZMRWxCUVZBc1IwRkJZeXhwUWtGQlpEdEJRVU5CUml4SlFVRkJRU3hOUVVGTkxFTkJRVU5aTEVWQlFWQXNSMEZCV1VFc1JVRkJXanRCUVVOQldpeEpRVUZCUVN4TlFVRk5MRU5CUVVOaExFdEJRVkFzUjBGQlpTeEpRVUZtTzBGQlEwRmlMRWxCUVVGQkxFMUJRVTBzUTBGQlEyTXNTMEZCVUN4SFFVRmxMRWxCUVdZN1FVRkRRV1FzU1VGQlFVRXNUVUZCVFN4RFFVRkRVaXhIUVVGUUxFZEJRV0ZCTEVkQlFXSTdPMEZCUTBGUkxFbEJRVUZCTEUxQlFVMHNRMEZCUTBzc1QwRkJVQ3hIUVVGcFFpeFZRVUZEUXl4SFFVRkVMRVZCUVZNN1FVRkRlRUppTEUxQlFVRkJMRmRCUVZjc1EwRkJRMk1zVjBGQldpeERRVUYzUWxBc1RVRkJlRUk3UVVGRFFVUXNUVUZCUVVFc1RVRkJUU3hEUVVGRExFbEJRVWxUTEZGQlFVb3NjMEpCUVRKQ2FFSXNSMEZCTTBJc2QwSkJRVVFzUTBGQlRqdEJRVU5FTEV0QlNFUTdPMEZCU1VGUkxFbEJRVUZCTEUxQlFVMHNRMEZCUTFNc1RVRkJVQ3hIUVVGblFpeFpRVUZOTzBGQlEzQkNia0lzVFVGQlFVRXNaVUZCWlN4RFFVRkRSU3hIUVVGRUxFTkJRV1lzUjBGQmRVSXNTVUZCZGtJN1FVRkRRVTBzVFVGQlFVRXNUMEZCVHp0QlFVTlNMRXRCU0VRN08wRkJTVUZNTEVsQlFVRkJMRmRCUVZjc1EwRkJRMmxDTEZkQlFWb3NRMEZCZDBKV0xFMUJRWGhDTzBGQlEwUXNSMEZ3UWswc1EwRkJVRHRCUVhGQ1JDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElGOXBiWEJ2Y25SbFpGTmpjbWx3ZERvZ2V5QmJjM0pqT2lCemRISnBibWRkT2lCMGNuVmxJSDBnUFNCN2ZUdGNibHh1THlvcVhHNGdLaUJzYjJGa0lHUmxjR1Z1WkdWdVkza2dZbmtnWTNOeklIUmhaMXh1SUNvdlhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NtVnhkV2x5WlVOemN5aHpjbU02SUhOMGNtbHVaeWs2SUZCeWIyMXBjMlU4ZG05cFpENGdlMXh1SUNCamIyNXpkQ0JvWldGa1JXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MElDWW1JQ2hrYjJOMWJXVnVkQzVvWldGa0lIeDhJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsS0Nkb1pXRmtKeWxiTUYwcE8xeHVJQ0J5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnUFQ0Z2UxeHVJQ0FnSUdsbUlDZ2haRzlqZFcxbGJuUWdmSHdnYzNKaklHbHVJRjlwYlhCdmNuUmxaRk5qY21sd2RDa2dlMXh1SUNBZ0lDQWdjbVZ6YjJ4MlpTZ3BPMXh1SUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0JqYjI1emRDQnpZM0pwY0hRZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Nkc2FXNXJKeWs3WEc0Z0lDQWdjMk55YVhCMExuUjVjR1VnUFNBbmRHVjRkQzlqYzNNbk8xeHVJQ0FnSUhOamNtbHdkQzV5Wld3Z1BTQW5jM1I1YkdWemFHVmxkQ2M3WEc0Z0lDQWdjMk55YVhCMExtaHlaV1lnUFNCemNtTTdYRzRnSUNBZ2MyTnlhWEIwTG05dVpYSnliM0lnUFNBb1pYSnlLU0E5UGlCN1hHNGdJQ0FnSUNCb1pXRmtSV3hsYldWdWRDNXlaVzF2ZG1WRGFHbHNaQ2h6WTNKcGNIUXBPMXh1SUNBZ0lDQWdjbVZxWldOMEtHNWxkeUJWVWtsRmNuSnZjaWhnVkdobElHTnpjeUFrZTNOeVkzMGdhWE1nYm04Z1lXTmpaWE56YVdKc1pTNWdLU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQnpZM0pwY0hRdWIyNXNiMkZrSUQwZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnWDJsdGNHOXlkR1ZrVTJOeWFYQjBXM055WTEwZ1BTQjBjblZsTzF4dUlDQWdJQ0FnY21WemIyeDJaU2dwTzF4dUlDQWdJSDA3WEc0Z0lDQWdhR1ZoWkVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb2MyTnlhWEIwS1R0Y2JpQWdmU2s3WEc1OVhHNWNiaThxS2x4dUlDb2diRzloWkNCa1pYQmxibVJsYm1ONUlHSjVJSE5qY21sd2RDQjBZV2RjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlISmxjWFZwY21WVFkzSnBjSFFvYzNKak9pQnpkSEpwYm1jc0lHbGtPaUJ6ZEhKcGJtY2dQU0FuWDNKbFlXTjBYMkZ0WVhBbktUb2dVSEp2YldselpUeDJiMmxrUGlCN1hHNGdJR052Ym5OMElHaGxZV1JGYkdWdFpXNTBJRDBnWkc5amRXMWxiblFnSmlZZ0tHUnZZM1Z0Wlc1MExtaGxZV1FnZkh3Z1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRITkNlVlJoWjA1aGJXVW9KMmhsWVdRbktWc3dYU2s3WEc0Z0lISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTZ29jbVZ6YjJ4MlpTd2djbVZxWldOMEtTQTlQaUI3WEc0Z0lDQWdhV1lnS0NGa2IyTjFiV1Z1ZENCOGZDQnpjbU1nYVc0Z1gybHRjRzl5ZEdWa1UyTnlhWEIwS1NCN1hHNGdJQ0FnSUNCeVpYTnZiSFpsS0NrN1hHNGdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1SUNBZ0lHTnZibk4wSUhOamNtbHdkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KM05qY21sd2RDY3BPMXh1SUNBZ0lITmpjbWx3ZEM1MGVYQmxJRDBnSjNSbGVIUXZhbUYyWVhOamNtbHdkQ2M3WEc0Z0lDQWdjMk55YVhCMExtbGtJRDBnYVdRN1hHNGdJQ0FnYzJOeWFYQjBMbUZ6ZVc1aklEMGdkSEoxWlR0Y2JpQWdJQ0J6WTNKcGNIUXVaR1ZtWlhJZ1BTQjBjblZsTzF4dUlDQWdJSE5qY21sd2RDNXpjbU1nUFNCemNtTTdYRzRnSUNBZ2MyTnlhWEIwTG05dVpYSnliM0lnUFNBb1pYSnlLU0E5UGlCN1hHNGdJQ0FnSUNCb1pXRmtSV3hsYldWdWRDNXlaVzF2ZG1WRGFHbHNaQ2h6WTNKcGNIUXBPMXh1SUNBZ0lDQWdjbVZxWldOMEtHNWxkeUJWVWtsRmNuSnZjaWhnVkdobElGTmpjbWx3ZENBa2UzTnlZMzBnYVhNZ2JtOGdZV05qWlhOemFXSnNaUzVnS1NrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0J6WTNKcGNIUXViMjVzYjJGa0lEMGdLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ1gybHRjRzl5ZEdWa1UyTnlhWEIwVzNOeVkxMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ2NtVnpiMngyWlNncE8xeHVJQ0FnSUgwN1hHNGdJQ0FnYUdWaFpFVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9jMk55YVhCMEtUdGNiaUFnZlNrN1hHNTlYRzRpWFgwPSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBmcm9tIFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIjtcbmltcG9ydCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCIuL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7XG4gIHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBnZXRQcm90b3R5cGVPZihEZXJpdmVkKSxcbiAgICAgICAgcmVzdWx0O1xuXG4gICAgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHtcbiAgICAgIHZhciBOZXdUYXJnZXQgPSBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcbiAgICAgIHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn0iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiO1xuaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCI7XG5cbi8qKlxuICog5Yid5aeL5YyW5ZKM5Yqg6L29YmFpZHXlnLDlm75cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlcXVpcmVTY3JpcHQgfSBmcm9tICcuLi91dGlscy9yZXF1aXJlU2NyaXB0JztcbmV4cG9ydCBmdW5jdGlvbiBkZWxheSh0aW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgd2luZG93LnNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG4gIH0pO1xufVxudmFyIERFRkFVTFRfUkVUUllfVElNRSA9IDM7XG4vKipcbiAqIEFQSUxvYWRlciDnlKjkuo7liqDovb3nmb7luqblnLDlm77kvp3otZZcbiAqL1xuXG5leHBvcnQgdmFyIEFQSUxvYWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQVBJTG9hZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEFQSUxvYWRlcik7XG5cbiAgLyoqXG4gICAqIOWFqOWxgOWPr+iDveWtmOWcqOWkmuS4qiBMb2FkZXIg5ZCM5pe25riy5p+TLCDkvYbmmK/lj6rog73nlLHkuIDkuKrotJ/otKPliqDovb1cbiAgICovXG4gIGZ1bmN0aW9uIEFQSUxvYWRlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBUElMb2FkZXIpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkZWQ6ICEhd2luZG93LkFNYXBcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAocHJvcHMuYWtheSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQU1hcDogYWtheSBpcyByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBUElMb2FkZXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIGNhbGxiYWNrTmFtZSA9IHRoaXMucHJvcHMuY2FsbGJhY2tOYW1lO1xuXG4gICAgICBpZiAod2luZG93LkFNYXAgPT0gbnVsbCkge1xuICAgICAgICBpZiAod2luZG93W2NhbGxiYWNrTmFtZV0pIHtcbiAgICAgICAgICBBUElMb2FkZXIud2FpdFF1ZXVlLnB1c2goW3RoaXMuZmluaXNoLCB0aGlzLmhhbmRsZUVycm9yXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkTWFwKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkZWQgPyB0aGlzLnByb3BzLmNoaWxkcmVuIDogdGhpcy5wcm9wcy5mYWxsYmFjayA/IHRoaXMucHJvcHMuZmFsbGJhY2sodGhpcy5zdGF0ZS5lcnJvcikgOiB0aGlzLnN0YXRlLmVycm9yID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2UpIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2NyaXB0U3JjXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjcmlwdFNyYygpIHtcbiAgICAgIHZhciBjZmcgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHByb3RvY29sID0gY2ZnLnByb3RvY29sIHx8IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbDtcblxuICAgICAgaWYgKHByb3RvY29sLmluZGV4T2YoJzonKSA9PT0gLTEpIHtcbiAgICAgICAgcHJvdG9jb2wgKz0gJzonO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQocHJvdG9jb2wsIFwiLy9cIikuY29uY2F0KGNmZy5ob3N0QW5kUGF0aCwgXCI/dj1cIikuY29uY2F0KGNmZy52ZXJzaW9uLCBcIiZrZXk9XCIpLmNvbmNhdChjZmcuYWtheSwgXCImY2FsbGJhY2s9XCIpLmNvbmNhdChjZmcuY2FsbGJhY2tOYW1lKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogbG9hZCBCYWlkdU1hcCBpbiBzY3JpcHQgdGFnXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsb2FkTWFwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfbG9hZE1hcCA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBjYWxsYmFja05hbWUsIHNyYywgaSwgX3JldDtcblxuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrTmFtZSA9IHRoaXMucHJvcHMuY2FsbGJhY2tOYW1lO1xuICAgICAgICAgICAgICAgIHNyYyA9IHRoaXMuZ2V0U2NyaXB0U3JjKCk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGZsdXNoIHF1ZXVlXG4gICAgICAgICAgICAgICAgICB2YXIgcXVldWUgPSBBUElMb2FkZXIud2FpdFF1ZXVlO1xuICAgICAgICAgICAgICAgICAgQVBJTG9hZGVyLndhaXRRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgcXVldWUuZm9yRWFjaChmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFza1swXSgpO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIF90aGlzMi5maW5pc2goKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGlmICghKGkgPCBERUZBVUxUX1JFVFJZX1RJTUUpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfY29udGV4dC5wcmV2ID0gNTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gODtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZVNjcmlwdChzcmMpO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwiYnJlYWtcIiwgMjIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDExO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbXCJjYXRjaFwiXSg1KTtcblxuICAgICAgICAgICAgICAgIGlmICghKGkgPT09IERFRkFVTFRfUkVUUllfVElNRSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcIkZhaWxlZCB0byBsb2FkIEFNYXA6IFwiLmNvbmNhdChfY29udGV4dC50MC5tZXNzYWdlKSk7IC8vIGZsdXNoIHF1ZXVlXG5cbiAgICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IEFQSUxvYWRlci53YWl0UXVldWU7XG4gICAgICAgICAgICAgICAgICBBUElMb2FkZXIud2FpdFF1ZXVlID0gW107XG4gICAgICAgICAgICAgICAgICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrWzFdKGVycik7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgX3RoaXMyLmhhbmRsZUVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHY6IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIShfdHlwZW9mKF9yZXQpID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE3O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBfcmV0LnYpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE5O1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWxheShpICogMTAwMCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzLCBbWzUsIDExXV0pO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBsb2FkTWFwKCkge1xuICAgICAgICByZXR1cm4gX2xvYWRNYXAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvYWRNYXA7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gQVBJTG9hZGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuQVBJTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWtheTogJycsXG4gIGhvc3RBbmRQYXRoOiAnd2ViYXBpLmFtYXAuY29tL21hcHMnLFxuICB2ZXJzaW9uOiAnMi4wJyxcbiAgY2FsbGJhY2tOYW1lOiAnbG9hZF9hbWFwX3Nkaydcbn07XG5BUElMb2FkZXIud2FpdFF1ZXVlID0gW107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5QlVFbE1iMkZrWlhJdmFXNWtaWGd1ZEhONElsMHNJbTVoYldWeklqcGJJbEpsWVdOMElpd2ljbVZ4ZFdseVpWTmpjbWx3ZENJc0ltUmxiR0Y1SWl3aWRHbHRaU0lzSWxCeWIyMXBjMlVpTENKeVpYTnZiSFpsSWl3aWNtVnFaV04wSWl3aWQybHVaRzkzSWl3aWMyVjBWR2x0Wlc5MWRDSXNJa1JGUmtGVlRGUmZVa1ZVVWxsZlZFbE5SU0lzSWtGUVNVeHZZV1JsY2lJc0luQnliM0J6SWl3aWMzUmhkR1VpTENKc2IyRmtaV1FpTENKQlRXRndJaXdpYUdGdVpHeGxSWEp5YjNJaUxDSmxjbkp2Y2lJc0luTmxkRk4wWVhSbElpd2labWx1YVhOb0lpd2lZV3RoZVNJc0lsUjVjR1ZGY25KdmNpSXNJbU5oYkd4aVlXTnJUbUZ0WlNJc0luZGhhWFJSZFdWMVpTSXNJbkIxYzJnaUxDSnNiMkZrVFdGd0lpd2lZMmhwYkdSeVpXNGlMQ0ptWVd4c1ltRmpheUlzSW1OdmJHOXlJaXdpYldWemMyRm5aU0lzSW1ObVp5SXNJbkJ5YjNSdlkyOXNJaXdpYkc5allYUnBiMjRpTENKcGJtUmxlRTltSWl3aWFHOXpkRUZ1WkZCaGRHZ2lMQ0oyWlhKemFXOXVJaXdpYzNKaklpd2laMlYwVTJOeWFYQjBVM0pqSWl3aWNYVmxkV1VpTENKbWIzSkZZV05vSWl3aWRHRnpheUlzSW1raUxDSmxjbklpTENKRmNuSnZjaUlzSWtOdmJYQnZibVZ1ZENJc0ltUmxabUYxYkhSUWNtOXdjeUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQUVN4TFFVRlFMRTFCUVd0Q0xFOUJRV3hDTzBGQlJVRXNVMEZCVTBNc1lVRkJWQ3hSUVVFNFFpeDNRa0ZCT1VJN1FVRkZRU3hQUVVGUExGTkJRVk5ETEV0QlFWUXNRMEZCWlVNc1NVRkJaaXhGUVVGcFJEdEJRVU4wUkN4VFFVRlBMRWxCUVVsRExFOUJRVW9zUTBGQldTeFZRVUZEUXl4UFFVRkVMRVZCUVZWRExFMUJRVllzUlVGQmNVSTdRVUZEZEVORExFbEJRVUZCTEUxQlFVMHNRMEZCUTBNc1ZVRkJVQ3hEUVVGclFrZ3NUMEZCYkVJc1JVRkJNa0pHTEVsQlFUTkNPMEZCUTBRc1IwRkdUU3hEUVVGUU8wRkJSMFE3UVVGalJDeEpRVUZOVFN4clFrRkJhMElzUjBGQlJ5eERRVUV6UWp0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRFFTeFhRVUZoUXl4VFFVRmlPMEZCUVVFN08wRkJRVUU3TzBGQlVVVTdRVUZEUmp0QlFVTkJPMEZCVFVVc2NVSkJRVzFDUXl4TFFVRnVRaXhGUVVFd1F6dEJRVUZCT3p0QlFVRkJPenRCUVVONFF5dzRRa0ZCVFVFc1MwRkJUanRCUVVSM1F5eFZRVXB1UTBNc1MwRkpiVU1zUjBGS2NFSTdRVUZEY0VKRExFMUJRVUZCTEUxQlFVMHNSVUZCUlN4RFFVRkRMRU5CUVVOT0xFMUJRVTBzUTBGQlEwODdRVUZFUnl4TFFVbHZRanM3UVVGQlFTeFZRWEZGYkVORExGZEJja1ZyUXl4SFFYRkZjRUlzVlVGQlEwTXNTMEZCUkN4RlFVRnJRanRCUVVOMFF5eFpRVUZMUXl4UlFVRk1MRU5CUVdNN1FVRkJSVVFzVVVGQlFVRXNTMEZCU3l4RlFVRk1RVHRCUVVGR0xFOUJRV1E3UVVGRFJDeExRWFpGZVVNN08wRkJRVUVzVlVGNVJXeERSU3hOUVhwRmEwTXNSMEY1UlhwQ0xGbEJRVTA3UVVGRGNrSXNXVUZCUzBRc1VVRkJUQ3hEUVVGak8wRkJRMXBLTEZGQlFVRkJMRTFCUVUwc1JVRkJSVHRCUVVSSkxFOUJRV1E3UVVGSFJDeExRVGRGZVVNN08wRkJSWGhETEZGQlFVbEdMRXRCUVVzc1EwRkJRMUVzU1VGQlRpeExRVUZsTEVsQlFXNUNMRVZCUVhsQ08wRkJRM1pDTEZsQlFVMHNTVUZCU1VNc1UwRkJTaXhEUVVGakxIZENRVUZrTEVOQlFVNDdRVUZEUkRzN1FVRktkVU03UVVGTGVrTTdPMEZCY2tKSU8wRkJRVUU3UVVGQlFTeFhRWFZDUlN3MlFrRkJNa0k3UVVGRGVrSXNWVUZCVVVNc1dVRkJVaXhIUVVGNVFpeExRVUZMVml4TFFVRTVRaXhEUVVGUlZTeFpRVUZTT3p0QlFVTkJMRlZCUVVsa0xFMUJRVTBzUTBGQlEwOHNTVUZCVUN4SlFVRmxMRWxCUVc1Q0xFVkJRWGxDTzBGQlEzWkNMRmxCUVVsUUxFMUJRVTBzUTBGQlEyTXNXVUZCUkN4RFFVRldMRVZCUVdsRE8wRkJReTlDV0N4VlFVRkJRU3hUUVVGVExFTkJRVU5aTEZOQlFWWXNRMEZCYjBKRExFbEJRWEJDTEVOQlFYbENMRU5CUVVNc1MwRkJTMHdzVFVGQlRpeEZRVUZqTEV0QlFVdElMRmRCUVc1Q0xFTkJRWHBDTzBGQlEwRTdRVUZEUkRzN1FVRkRSQ3hoUVVGTFV5eFBRVUZNTzBGQlEwUTdRVUZEUmp0QlFXaERTRHRCUVVGQk8wRkJRVUVzVjBGclEwVXNhMEpCUVdkQ08wRkJRMlFzWVVGQlR5eExRVUZMV2l4TFFVRk1MRU5CUVZkRExFMUJRVmdzUjBGRFRDeExRVUZMUml4TFFVRk1MRU5CUVZkakxGRkJSRTRzUjBGRlNDeExRVUZMWkN4TFFVRk1MRU5CUVZkbExGRkJRVmdzUjBGRFJpeExRVUZMWml4TFFVRk1MRU5CUVZkbExGRkJRVmdzUTBGQmIwSXNTMEZCUzJRc1MwRkJUQ3hEUVVGWFNTeExRVUV2UWl4RFFVUkZMRWRCUlVFc1MwRkJTMG9zUzBGQlRDeERRVUZYU1N4TFFVRllMR2RDUVVOR08wRkJRVXNzVVVGQlFTeExRVUZMTEVWQlFVVTdRVUZCUlZjc1ZVRkJRVUVzUzBGQlN5eEZRVUZGTzBGQlFWUTdRVUZCV2l4VFFVRXJRaXhMUVVGTFppeExRVUZNTEVOQlFWZEpMRXRCUVZnc1EwRkJhVUpaTEU5QlFXaEVMRU5CUkVVc1IwRkZRU3hKUVU1S08wRkJUMFE3UVVFeFEwZzdRVUZCUVR0QlFVRkJMRmRCTkVORkxIZENRVUYxUWp0QlFVTnlRaXhWUVVGTlF5eEhRVUZITEVkQlFVY3NTMEZCUzJ4Q0xFdEJRV3BDTzBGQlEwRXNWVUZCU1cxQ0xGRkJRVkVzUjBGQlNVUXNSMEZCUnl4RFFVRkRReXhSUVVGS0xFbEJRV2RDZGtJc1RVRkJUU3hEUVVGRGQwSXNVVUZCVUN4RFFVRm5Ra1FzVVVGQmFFUTdPMEZCUTBFc1ZVRkJTVUVzVVVGQlVTeERRVUZGUlN4UFFVRldMRU5CUVd0Q0xFZEJRV3hDTEUxQlFUSkNMRU5CUVVNc1EwRkJhRU1zUlVGQmJVTTdRVUZEYWtOR0xGRkJRVUZCTEZGQlFWRXNTVUZCU1N4SFFVRmFPMEZCUTBRN08wRkJRMFFzZFVKQlFWVkJMRkZCUVZZc1pVRkJkVUpFTEVkQlFVY3NRMEZCUTBrc1YwRkJNMElzWjBKQlFUUkRTaXhIUVVGSExFTkJRVU5MTEU5QlFXaEVMR3RDUVVFclJFd3NSMEZCUnl4RFFVRkRWaXhKUVVGdVJTeDFRa0ZCYjBaVkxFZEJRVWNzUTBGQlExSXNXVUZCZUVZN1FVRkRSRHRCUVVORU8wRkJRMFk3UVVGRFFUczdRVUYwUkVFN1FVRkJRVHRCUVVGQk8wRkJRVUVzT0VWQmRVUkZPMEZCUVVFN08wRkJRVUU3TzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRWVUVzWjBKQlFVRkJMRmxCUkZZc1IwRkRNa0lzUzBGQlMxWXNTMEZFYUVNc1EwRkRWVlVzV1VGRVZqdEJRVVZSWXl4blFrRkJRVUVzUjBGR1VpeEhRVVZqTEV0QlFVdERMRmxCUVV3c1JVRkdaRHM3UVVGSFJ6ZENMR2RDUVVGQlFTeE5RVUZFTEVOQlFXZENZeXhaUVVGb1FpeEpRVUYxUXl4WlFVRk5PMEZCUXpORE8wRkJRMEVzYzBKQlFVMW5RaXhMUVVGTExFZEJRVWN6UWl4VFFVRlRMRU5CUVVOWkxGTkJRWGhDTzBGQlEwRmFMR3RDUVVGQlFTeFRRVUZUTEVOQlFVTlpMRk5CUVZZc1IwRkJjMElzUlVGQmRFSTdRVUZEUVdVc2EwSkJRVUZCTEV0QlFVc3NRMEZCUTBNc1QwRkJUaXhEUVVGakxGVkJRVU5ETEVsQlFVUTdRVUZCUVN3eVFrRkJWVUVzU1VGQlNTeERRVUZETEVOQlFVUXNRMEZCU2l4RlFVRldPMEZCUVVFc2JVSkJRV1E3TzBGQlEwRXNhMEpCUVVFc1RVRkJTU3hEUVVGRGNrSXNUVUZCVER0QlFVTkVMR2xDUVU1RU96dEJRVkZUYzBJc1owSkJRVUZCTEVOQldGZ3NSMEZYWlN4RFFWaG1PenRCUVVGQk8wRkJRVUVzYzBKQlYydENRU3hEUVVGRExFZEJRVWN2UWl4clFrRllkRUk3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUVVFN1FVRkJRVHRCUVVGQkxIVkNRV0ZaVWl4aFFVRmhMRU5CUVVOclF5eEhRVUZFTEVOQllucENPenRCUVVGQk8wRkJRVUU3TzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVGQkxITkNRV2RDVlVzc1EwRkJReXhMUVVGTEwwSXNhMEpCUVd0Q0xFZEJRVWNzUTBGb1FuSkRPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVUZCTzBGQmFVSlJMSE5DUVVGTlowTXNSMEZCUnl4SFFVRkhMRWxCUVVsRExFdEJRVW9zWjBOQlFXdERMRmxCUVUxa0xFOUJRWGhETEVWQlFWb3NRMEZxUWxJc1EwRnJRbEU3TzBGQlEwRXNjMEpCUVUxVExFdEJRVXNzUjBGQlJ6TkNMRk5CUVZNc1EwRkJRMWtzVTBGQmVFSTdRVUZEUVZvc2EwSkJRVUZCTEZOQlFWTXNRMEZCUTFrc1UwRkJWaXhIUVVGelFpeEZRVUYwUWp0QlFVTkJaU3hyUWtGQlFVRXNTMEZCU3l4RFFVRkRReXhQUVVGT0xFTkJRV01zVlVGQlEwTXNTVUZCUkR0QlFVRkJMREpDUVVGVlFTeEpRVUZKTEVOQlFVTXNRMEZCUkN4RFFVRktMRU5CUVZGRkxFZEJRVklzUTBGQlZqdEJRVUZCTEcxQ1FVRmtPenRCUVVOQkxHdENRVUZCTEUxQlFVa3NRMEZCUXpGQ0xGZEJRVXdzUTBGQmFVSXdRaXhIUVVGcVFqczdRVUZEUVR0QlFVRkJPMEZCUVVFN1FVRjJRbEk3TzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJRVUU3TzBGQlFVRTdRVUZCUVR0QlFVRkJMSFZDUVhsQ1dYWkRMRXRCUVVzc1EwRkJRM05ETEVOQlFVTXNSMEZCUnl4SlFVRk1MRU5CZWtKcVFqczdRVUZCUVR0QlFWY3dRMEVzWjBKQlFVRkJMRU5CUVVNc1JVRllNME03UVVGQlFUdEJRVUZCT3p0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTEU5QmRrUkdPenRCUVVGQk8wRkJRVUU3UVVGQlFUczdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJRVUU3UVVGQlFTeEZRVUVyUW5oRExFdEJRVXNzUTBGQlF6SkRMRk5CUVhKRE8wRkJRV0ZxUXl4VExFTkJRMGRyUXl4WkxFZEJRV1U3UVVGRE0wSjZRaXhGUVVGQlFTeEpRVUZKTEVWQlFVVXNSVUZFY1VJN1FVRkZNMEpqTEVWQlFVRkJMRmRCUVZjc1JVRkJSU3h6UWtGR1l6dEJRVWN6UWtNc1JVRkJRVUVzVDBGQlR5eEZRVUZGTEV0QlNHdENPMEZCU1ROQ1lpeEZRVUZCUVN4WlFVRlpMRVZCUVVVN1FVRktZU3hETzBGQlJHeENXQ3hUTEVOQlYwbFpMRk1zUjBGQmVVTXNSU0lzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtseHVJQ29nNVlpZDVhZUw1WXlXNVpLTTVZcWc2TDI5WW1GcFpIWGxuTERsbTc1Y2JpQXFMMXh1YVcxd2IzSjBJRkpsWVdOMElHWnliMjBnSjNKbFlXTjBKenRjYm1sdGNHOXlkQ0I3SUVOdmJtWnBaeUI5SUdaeWIyMGdKeTR1TDJOdmJXMXZiaTl0WVhBbk8xeHVhVzF3YjNKMElIc2djbVZ4ZFdseVpWTmpjbWx3ZENCOUlHWnliMjBnSnk0dUwzVjBhV3h6TDNKbGNYVnBjbVZUWTNKcGNIUW5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWkdWc1lYa29kR2x0WlRvZ2JuVnRZbVZ5S1RvZ1VISnZiV2x6WlR4MWJtUmxabWx1WldRK0lIdGNiaUFnY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0NoeVpYTnZiSFpsTENCeVpXcGxZM1FwSUQwK0lIdGNiaUFnSUNCM2FXNWtiM2N1YzJWMFZHbHRaVzkxZENoeVpYTnZiSFpsTENCMGFXMWxLVHRjYmlBZ2ZTazdYRzU5WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1FWQkpURzloWkdWeVVISnZjSE1nWlhoMFpXNWtjeUJEYjI1bWFXY2dlMXh1SUNBdktpcGNiaUFnSUNvZzU1U281THFPNWJHVjU2UzY1WXFnNkwyOTVMaXQ1b2lXNlpTWjZLK3Y1NHEyNW9DQlhHNGdJQ0FxTDF4dUlDQm1ZV3hzWW1GamF6ODZJQ2hsY25KdmNqODZJRVZ5Y205eUtTQTlQaUJTWldGamRDNVNaV0ZqZEU1dlpHVTdYRzU5WEc1Y2JtbHVkR1Z5Wm1GalpTQlRkR0YwWlNCN1hHNGdJR3h2WVdSbFpEb2dZbTl2YkdWaGJqdGNiaUFnWlhKeWIzSS9PaUJGY25KdmNqdGNibjFjYmx4dVkyOXVjM1FnUkVWR1FWVk1WRjlTUlZSU1dWOVVTVTFGSUQwZ016dGNibHh1THlvcVhHNGdLaUJCVUVsTWIyRmtaWElnNTVTbzVMcU81WXFnNkwyOTU1bSs1YnFtNVp5dzVadSs1TDZkNkxXV1hHNGdLaTljYm1WNGNHOXlkQ0JqYkdGemN5QkJVRWxNYjJGa1pYSWdaWGgwWlc1a2N5QlNaV0ZqZEM1RGIyMXdiMjVsYm5ROFFWQkpURzloWkdWeVVISnZjSE0rSUh0Y2JpQWdjSFZpYkdsaklITjBZWFJwWXlCa1pXWmhkV3gwVUhKdmNITWdQU0I3WEc0Z0lDQWdZV3RoZVRvZ0p5Y3NYRzRnSUNBZ2FHOXpkRUZ1WkZCaGRHZzZJQ2QzWldKaGNHa3VZVzFoY0M1amIyMHZiV0Z3Y3ljc1hHNGdJQ0FnZG1WeWMybHZiam9nSnpJdU1DY3NYRzRnSUNBZ1kyRnNiR0poWTJ0T1lXMWxPaUFuYkc5aFpGOWhiV0Z3WDNOa2F5Y3NYRzRnSUgwN1hHNWNiaUFnTHlvcVhHNGdJQ0FxSU9XRnFPV3hnT1dQcitpRHZlV3RtT1djcU9Xa211UzRxaUJNYjJGa1pYSWc1WkNNNXBlMjVyaXk1cCtUTENEa3ZZYm1tSy9sajZyb2c3M25sTEhrdUlEa3VLcm90Si9vdEtQbGlxRG92YjFjYmlBZ0lDb3ZYRzRnSUhCeWFYWmhkR1VnYzNSaGRHbGpJSGRoYVhSUmRXVjFaVG9nUVhKeVlYazhXMFoxYm1OMGFXOXVMQ0JHZFc1amRHbHZibDArSUQwZ1cxMDdYRzRnSUhCMVlteHBZeUJ6ZEdGMFpUb2dVM1JoZEdVZ1BTQjdYRzRnSUNBZ2JHOWhaR1ZrT2lBaElYZHBibVJ2ZHk1QlRXRndMRnh1SUNCOU8xeHVYRzRnSUhCMVlteHBZeUJqYjI1emRISjFZM1J2Y2lod2NtOXdjem9nUVZCSlRHOWhaR1Z5VUhKdmNITXBJSHRjYmlBZ0lDQnpkWEJsY2lod2NtOXdjeWs3WEc0Z0lDQWdhV1lnS0hCeWIzQnpMbUZyWVhrZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMEZOWVhBNklHRnJZWGtnYVhNZ2NtVnhkV2x5WldRbktUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQndkV0pzYVdNZ1kyOXRjRzl1Wlc1MFJHbGtUVzkxYm5Rb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCallXeHNZbUZqYTA1aGJXVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnYVdZZ0tIZHBibVJ2ZHk1QlRXRndJRDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJR2xtSUNoM2FXNWtiM2RiWTJGc2JHSmhZMnRPWVcxbElHRnpJR0Z1ZVYwcElIdGNiaUFnSUNBZ0lDQWdRVkJKVEc5aFpHVnlMbmRoYVhSUmRXVjFaUzV3ZFhOb0tGdDBhR2x6TG1acGJtbHphQ3dnZEdocGN5NW9ZVzVrYkdWRmNuSnZjbDBwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0IwYUdsekxteHZZV1JOWVhBb0tUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQndkV0pzYVdNZ2NtVnVaR1Z5S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuTjBZWFJsTG14dllXUmxaQ0EvSUNoY2JpQWdJQ0FnSUhSb2FYTXVjSEp2Y0hNdVkyaHBiR1J5Wlc1Y2JpQWdJQ0FwSURvZ2RHaHBjeTV3Y205d2N5NW1ZV3hzWW1GamF5QS9JQ2hjYmlBZ0lDQWdJSFJvYVhNdWNISnZjSE11Wm1Gc2JHSmhZMnNvZEdocGN5NXpkR0YwWlM1bGNuSnZjaWxjYmlBZ0lDQXBJRG9nZEdocGN5NXpkR0YwWlM1bGNuSnZjaUEvSUNoY2JpQWdJQ0FnSUR4a2FYWWdjM1I1YkdVOWUzc2dZMjlzYjNJNklDZHlaV1FuSUgxOVBudDBhR2x6TG5OMFlYUmxMbVZ5Y205eUxtMWxjM05oWjJWOVBDOWthWFkrWEc0Z0lDQWdLU0E2SUc1MWJHdzdYRzRnSUgxY2JseHVJQ0J3Y21sMllYUmxJR2RsZEZOamNtbHdkRk55WXlncElIdGNiaUFnSUNCamIyNXpkQ0JqWm1jZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHeGxkQ0J3Y205MGIyTnZiQ0E5SUNoalptY3VjSEp2ZEc5amIyd2dmSHdnZDJsdVpHOTNMbXh2WTJGMGFXOXVMbkJ5YjNSdlkyOXNLU0JoY3lCRGIyNW1hV2RiSjNCeWIzUnZZMjlzSjEwN1hHNGdJQ0FnYVdZZ0tIQnliM1J2WTI5c0lTNXBibVJsZUU5bUtDYzZKeWtnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0J3Y205MGIyTnZiQ0FyUFNBbk9pYzdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJnSkh0d2NtOTBiMk52Ykgwdkx5UjdZMlpuTG1odmMzUkJibVJRWVhSb2ZUOTJQU1I3WTJabkxuWmxjbk5wYjI1OUptdGxlVDBrZTJObVp5NWhhMkY1ZlNaallXeHNZbUZqYXowa2UyTm1aeTVqWVd4c1ltRmphMDVoYldWOVlEdGNiaUFnZlZ4dUlDQXZLaXBjYmlBZ0lDb2diRzloWkNCQ1lXbGtkVTFoY0NCcGJpQnpZM0pwY0hRZ2RHRm5YRzRnSUNBcUwxeHVJQ0J3Y21sMllYUmxJR0Z6ZVc1aklHeHZZV1JOWVhBb0tTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCallXeHNZbUZqYTA1aGJXVWdmU0E5SUhSb2FYTXVjSEp2Y0hNN1hHNGdJQ0FnWTI5dWMzUWdjM0pqSUQwZ2RHaHBjeTVuWlhSVFkzSnBjSFJUY21Nb0tUdGNiaUFnSUNBb2QybHVaRzkzSUdGeklHRnVlU2xiWTJGc2JHSmhZMnRPWVcxbElHRnpJR0Z1ZVYwZ1BTQW9LU0E5UGlCN1hHNGdJQ0FnSUNBdkx5Qm1iSFZ6YUNCeGRXVjFaVnh1SUNBZ0lDQWdZMjl1YzNRZ2NYVmxkV1VnUFNCQlVFbE1iMkZrWlhJdWQyRnBkRkYxWlhWbE8xeHVJQ0FnSUNBZ1FWQkpURzloWkdWeUxuZGhhWFJSZFdWMVpTQTlJRnRkTzF4dUlDQWdJQ0FnY1hWbGRXVXVabTl5UldGamFDZ29kR0Z6YXlrZ1BUNGdkR0Z6YTFzd1hTZ3BLVHRjYmlBZ0lDQWdJSFJvYVhNdVptbHVhWE5vS0NrN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1JFVkdRVlZNVkY5U1JWUlNXVjlVU1UxRk95QnBLeXNwSUh0Y2JpQWdJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJR0YzWVdsMElISmxjWFZwY21WVFkzSnBjSFFvYzNKaktUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCOUlHTmhkR05vSUNobGNuSnZjaWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9hU0E5UFQwZ1JFVkdRVlZNVkY5U1JWUlNXVjlVU1UxRklDMGdNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZibk4wSUdWeWNpQTlJRzVsZHlCRmNuSnZjaWhnUm1GcGJHVmtJSFJ2SUd4dllXUWdRVTFoY0RvZ0pIdGxjbkp2Y2k1dFpYTnpZV2RsZldBcE8xeHVJQ0FnSUNBZ0lDQWdJQzh2SUdac2RYTm9JSEYxWlhWbFhHNGdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NYVmxkV1VnUFNCQlVFbE1iMkZrWlhJdWQyRnBkRkYxWlhWbE8xeHVJQ0FnSUNBZ0lDQWdJRUZRU1V4dllXUmxjaTUzWVdsMFVYVmxkV1VnUFNCYlhUdGNiaUFnSUNBZ0lDQWdJQ0J4ZFdWMVpTNW1iM0pGWVdOb0tDaDBZWE5yS1NBOVBpQjBZWE5yV3pGZEtHVnljaWtwTzF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YUdGdVpHeGxSWEp5YjNJb1pYSnlLVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1lYZGhhWFFnWkdWc1lYa29hU0FxSURFd01EQXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEJ5YVhaaGRHVWdhR0Z1Wkd4bFJYSnliM0lnUFNBb1pYSnliM0k2SUVWeWNtOXlLU0E5UGlCN1hHNGdJQ0FnZEdocGN5NXpaWFJUZEdGMFpTaDdJR1Z5Y205eUlIMHBPMXh1SUNCOU8xeHVYRzRnSUhCeWFYWmhkR1VnWm1sdWFYTm9JRDBnS0NrZ1BUNGdlMXh1SUNBZ0lIUm9hWE11YzJWMFUzUmhkR1VvZTF4dUlDQWdJQ0FnYkc5aFpHVmtPaUIwY25WbExGeHVJQ0FnSUgwcE8xeHVJQ0I5TzF4dWZWeHVJbDE5IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IGRlZmluZVByb3BlcnR5IGZyb20gXCIuL2RlZmluZVByb3BlcnR5LmpzXCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcblxuICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICog5a+55a6e5L6L5pyJIHNldFN0YXR1cyDmm7TmlLnnirbmgIHnmoTlpITnkIZcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHByb3BzXG4gKiBAcGFyYW0gcHJvcHNOYW1lXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNldFN0YXR1cyhpbnN0YW5jZSkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgcHJvcHNOYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcbiAgcHJvcHNOYW1lLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZU5hbWUgPSBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcblxuICAgIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShwcm9wc1tlTmFtZV0pLFxuICAgICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgICAgc3RhdGUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZTJbMV07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXG5cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGluc3RhbmNlICYmIHByb3BzW2VOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwcm9wc1tlTmFtZV0gIT09IHN0YXRlKSB7XG4gICAgICAgICAgLy8gbWFwLnNldFN0YXR1cyh7XG4gICAgICAgICAgLy8gICBkcmFnRW5hYmxlOiB0cnVlLFxuICAgICAgICAgIC8vICAga2V5Ym9hcmRFbmFibGU6IHRydWUsXG4gICAgICAgICAgLy8gICBkb3VibGVDbGlja1pvb206IHRydWUsXG4gICAgICAgICAgLy8gICB6b29tRW5hYmxlOiB0cnVlLFxuICAgICAgICAgIC8vICAgcm90YXRlRW5hYmxlOiB0cnVlXG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgdmFyIHN0YXR1cyA9IGluc3RhbmNlLmdldFN0YXR1cygpO1xuICAgICAgICAgIGluc3RhbmNlLnNldFN0YXR1cyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0YXR1cyksIHt9LCBfZGVmaW5lUHJvcGVydHkoe30sIGVOYW1lLCBwcm9wc1tlTmFtZV0pKSk7XG4gICAgICAgICAgc2V0U3RhdGUocHJvcHNbZU5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgICB9LCBbaW5zdGFuY2UsIHByb3BzW2VOYW1lXV0pO1xuICB9KTtcbn1cbi8qKlxuICog6ZKI5a+5IE92ZXJsYXkg57G75Z6L55qE57uE5Lu277yM5pyJ5YWs5YWx55qE5piv5ZCm5pi+56S6IOWvueixoeWkhOeQhlxuICog6YCa6L+H5Y+C5pWwIGB2aXNpYWJsZWAg5p2l5o6n5Yi25omn6KGMIGBzaG93KClgIG9yIGBoaWRlKClgXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZpc2lhYmxlKGluc3RhbmNlLCB2aXNpYWJsZSkge1xuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKHZpc2lhYmxlKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlNFsxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbnN0YW5jZSAmJiB2aXNpYWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodmlzaWFibGUpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2hvdyAmJiBpbnN0YW5jZS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5oaWRlICYmIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZpc2lhYmxlICE9PSBzdGF0ZSkge1xuICAgICAgICBzZXRTdGF0ZSh2aXNpYWJsZSk7XG4gICAgICB9XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW2luc3RhbmNlLCB2aXNpYWJsZV0pO1xufVxuLyoqXG4gKiDojrflj5bkuIrkuIDova7nmoQgcHJvcHMg5oiWIHN0YXRlXG4gKiBIb3cgdG8gZ2V0IHRoZSBwcmV2aW91cyBwcm9wcyBvciBzdGF0ZT9cbiAqIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1mYXEuaHRtbCNob3ctdG8tZ2V0LXRoZS1wcmV2aW91cy1wcm9wcy1vci1zdGF0ZVxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBmdW5jdGlvbiBDb3VudGVyKCkge1xuICogICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICogICBjb25zdCBwcmV2Q291bnQgPSB1c2VQcmV2aW91cyhjb3VudCk7XG4gKiAgIHJldHVybiA8aDE+Tm93OiB7Y291bnR9LCBiZWZvcmU6IHtwcmV2Q291bnR9PC9oMT47XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUpIHtcbiAgdmFyIHJlZiA9IHVzZVJlZigpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG5cbi8qKlxuICog57uR5a6a5LqL5Lu2XG4gKiBAcGFyYW0gaW5zdGFuY2Ug5a6e5L6L5a+56LGhXG4gKiBAcGFyYW0gcHJvcHMg5Lyg6YCS6L+b5p2l55qEIHByb3BzXG4gKiBAcGFyYW0gZXZlbnROYW1lIOS6i+S7tueahOWQjeWtl++8jOWmgu+8jOaIkeS7rOS9v+eUqCBgb25DbGlja2Ag5LqL5Lu277yM5pyA57uI6KKr6L2s5o2i5oiQ77yMYGNsaWNrYCDnu5HlrprliLDlrp7kvovkuK3vvIxgb25EYmxDbGlja2AgPT4gYGRibGNsaWNrYFxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogdXNlRXZlbnRQcm9wZXJ0aWVzPEJNYXAuTWFya2VyLCBVc2VNYXJrZXI+KG1hcmtlciEsIHByb3BzLCBbXG4gKiAgICdvbk1vdXNlTW92ZScsICdvblpvb21DaGFuZ2UnLCAnb25NYXBNb3ZlJywgJ29uTW91c2VXaGVlbCcsICdvblpvb21TdGFydCdcbiAqIF0pO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFdmVudFByb3BlcnRpZXMoaW5zdGFuY2UpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIGV2ZW50TmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG4gIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiB1bmRlZmluZWQ7XG4gIGV2ZW50TmFtZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGV2ZW50TmFtZSA9IG5hbWU7XG4gICAgdmFyIGV2ZW50SGFuZGxlID0gcHJvcHNbZXZlbnROYW1lXTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFpbnN0YW5jZSkgcmV0dXJuO1xuICAgICAgdmFyIGVOYW1lID0gbmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL15vbi8sICcnKTtcblxuICAgICAgaWYgKGV2ZW50SGFuZGxlICYmIGVOYW1lKSB7XG4gICAgICAgIGluc3RhbmNlLm9uKGVOYW1lLCBldmVudEhhbmRsZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChlTmFtZSAmJiBldmVudEhhbmRsZSkge1xuICAgICAgICAgIGluc3RhbmNlLm9mZihlTmFtZSwgZXZlbnRIYW5kbGUpO1xuICAgICAgICB9XG4gICAgICB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gICAgfSwgW2luc3RhbmNlLCBwcm9wc1tldmVudE5hbWVdXSk7XG4gIH0pO1xufVxuLyoqXG4gKiDlsZ7mgKflj5fmjqdcbiAqIEBwYXJhbSBpbnN0YW5jZSDlrp7kvovlr7nosaFcbiAqIEBwYXJhbSBwcm9wcyDlsZ7mgKflgLxcbiAqIEBwYXJhbSBwcm9wc05hbWUg5aSa5Liq5bGe5oCn6K6+572u55qE5ZCN56ewXG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqIHVzZVNldHRpbmdQcm9wZXJ0aWVzPEFNYXAuUG9seWxpbmUsIFVzZVBvbHlsaW5lPihwb2x5bGluZSEsIHByb3BzLCBbXG4gKiAgICAnUGF0aCdcbiAqIF0pO1xuICogYGBgXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNldHRpbmdQcm9wZXJ0aWVzKCkge1xuICB2YXIgaW5zdGFuY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgcHJvcHNOYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcbiAgcHJvcHNOYW1lLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZU5hbWUgPSBcInNldFwiLmNvbmNhdChuYW1lKTtcbiAgICB2YXIgdk5hbWUgPSBcIlwiLmNvbmNhdChuYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpKS5jb25jYXQobmFtZS5zbGljZSgxKSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXG4gICAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZShwcm9wc1t2TmFtZV0pLFxuICAgICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICAgIHN0YXRlID0gX3VzZVN0YXRlNlswXSxcbiAgICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGU2WzFdOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcblxuXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpbnN0YW5jZSAmJiBwcm9wc1t2TmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocHJvcHNbdk5hbWVdICE9PSBzdGF0ZSAmJiBpbnN0YW5jZVtlTmFtZV0gJiYgdHlwZW9mIGluc3RhbmNlW2VOYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGluc3RhbmNlW2VOYW1lXShwcm9wc1t2TmFtZV0pO1xuICAgICAgICAgIHNldFN0YXRlKHByb3BzW3ZOYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gICAgfSwgW2luc3RhbmNlLCBwcm9wc1t2TmFtZV1dKTtcbiAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5amIyMXRiMjR2YUc5dmEzTXVkSE1pWFN3aWJtRnRaWE1pT2xzaWRYTmxSV1ptWldOMElpd2lkWE5sVTNSaGRHVWlMQ0oxYzJWU1pXWWlMQ0oxYzJWVFpYUlRkR0YwZFhNaUxDSnBibk4wWVc1alpTSXNJbkJ5YjNCeklpd2ljSEp2Y0hOT1lXMWxJaXdpWm05eVJXRmphQ0lzSW01aGJXVWlMQ0psVG1GdFpTSXNJbk4wWVhSbElpd2ljMlYwVTNSaGRHVWlMQ0oxYm1SbFptbHVaV1FpTENKemRHRjBkWE1pTENKblpYUlRkR0YwZFhNaUxDSnpaWFJUZEdGMGRYTWlMQ0oxYzJWV2FYTnBZV0pzWlNJc0luWnBjMmxoWW14bElpd2ljMmh2ZHlJc0ltaHBaR1VpTENKMWMyVlFjbVYyYVc5MWN5SXNJblpoYkhWbElpd2ljbVZtSWl3aVkzVnljbVZ1ZENJc0luVnpaVVYyWlc1MFVISnZjR1Z5ZEdsbGN5SXNJbVYyWlc1MFRtRnRaU0lzSW5SNWNHVWlMQ0psZG1WdWRFaGhibVJzWlNJc0luUnZURzlqWVd4bFRHOTNaWEpEWVhObElpd2ljbVZ3YkdGalpTSXNJbTl1SWl3aWIyWm1JaXdpZFhObFUyVjBkR2x1WjFCeWIzQmxjblJwWlhNaUxDSjJUbUZ0WlNJc0ltTm9ZWEpCZENJc0luUnZURzkzWlhKRFlYTmxJaXdpYzJ4cFkyVWlYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEZOQlFWTkJMRk5CUVZRc1JVRkJiMEpETEZGQlFYQkNMRVZCUVRoQ1F5eE5RVUU1UWl4UlFVRTBReXhQUVVFMVF6dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRFFTeFBRVUZQTEZOQlFWTkRMRmxCUVZRc1EwRkRURU1zVVVGRVN5eEZRVWxNTzBGQlFVRXNUVUZHUVVNc1MwRkZRU3gxUlVGR1VTeEZRVVZTTzBGQlFVRXNUVUZFUVVNc1UwRkRRU3gxUlVGRWMwSXNSVUZEZEVJN1FVRkRRVUVzUlVGQlFVRXNVMEZCVXl4RFFVRkRReXhQUVVGV0xFTkJRV3RDTEZWQlFVTkRMRWxCUVVRc1JVRkJWVHRCUVVNeFFpeFJRVUZOUXl4TFFVRkxMRWRCUVVkRUxFbEJRV1FzUTBGRU1FSXNRMEZGTVVJN08wRkJRMEVzYjBKQlFUQkNVQ3hSUVVGUkxFTkJRVU5KTEV0QlFVc3NRMEZCUTBrc1MwRkJSQ3hEUVVGT0xFTkJRV3hETzBGQlFVRTdRVUZCUVN4UlFVRlBReXhMUVVGUU8wRkJRVUVzVVVGQlkwTXNVVUZCWkN4cFFrRklNRUlzUTBGSk1VSTdPenRCUVVOQldDeEpRVUZCUVN4VFFVRlRMRU5CUVVNc1dVRkJUVHRCUVVOa0xGVkJRVWxKTEZGQlFWRXNTVUZCU1VNc1MwRkJTeXhEUVVGRFNTeExRVUZFTEVOQlFVd3NTMEZCYVVKSExGTkJRV3BETEVWQlFUUkRPMEZCUXpGRExGbEJRVWxRTEV0QlFVc3NRMEZCUTBrc1MwRkJSQ3hEUVVGTUxFdEJRV2xDUXl4TFFVRnlRaXhGUVVFMFFqdEJRVU14UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdOQlFVMUhMRTFCUVUwc1IwRkJSMVFzVVVGQlVTeERRVUZEVlN4VFFVRlVMRVZCUVdZN1FVRkRRVllzVlVGQlFVRXNVVUZCVVN4RFFVRkRWeXhUUVVGVUxHbERRVUYzUWtZc1RVRkJlRUlzTWtKQlFXbERTaXhMUVVGcVF5eEZRVUY1UTBvc1MwRkJTeXhEUVVGRFNTeExRVUZFTEVOQlFUbERPMEZCUTBGRkxGVkJRVUZCTEZGQlFWRXNRMEZCUTA0c1MwRkJTeXhEUVVGRFNTeExRVUZFTEVOQlFVNHNRMEZCVWp0QlFVTkVPMEZCUTBZc1QwRmtZU3hEUVdWa096dEJRVU5FTEV0QmFFSlJMRVZCWjBKT0xFTkJRVU5NTEZGQlFVUXNSVUZCVjBNc1MwRkJTeXhEUVVGRFNTeExRVUZFTEVOQlFXaENMRU5CYUVKTkxFTkJRVlE3UVVGcFFrUXNSMEYwUWtRN1FVRjFRa1E3UVVGRlJEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hQUVVGUExGTkJRVk5QTEZkQlFWUXNRMEZCZFVWYUxGRkJRWFpGTEVWQlFXOUdZU3hSUVVGd1JpeEZRVUYzUnp0QlFVTTNSeXh0UWtGQk1FSm9RaXhSUVVGUkxFTkJRVU5uUWl4UlFVRkVMRU5CUVd4RE8wRkJRVUU3UVVGQlFTeE5RVUZQVUN4TFFVRlFPMEZCUVVFc1RVRkJZME1zVVVGQlpEczdRVUZEUVZnc1JVRkJRVUVzVTBGQlV5eERRVUZETEZsQlFVMDdRVUZEWkN4UlFVRkpTU3hSUVVGUkxFbEJRVWxoTEZGQlFWRXNTMEZCUzB3c1UwRkJOMElzUlVGQmQwTTdRVUZEZEVNc1ZVRkJTVXNzVVVGQlNpeEZRVUZqTzBGQlExcGlMRkZCUVVGQkxGRkJRVkVzUTBGQlEyTXNTVUZCVkN4SlFVRnBRbVFzVVVGQlVTeERRVUZEWXl4SlFVRlVMRVZCUVdwQ08wRkJRMFFzVDBGR1JDeE5RVVZQTzBGQlEweGtMRkZCUVVGQkxGRkJRVkVzUTBGQlEyVXNTVUZCVkN4SlFVRnBRbVlzVVVGQlVTeERRVUZEWlN4SlFVRlVMRVZCUVdwQ08wRkJRMFE3TzBGQlEwUXNWVUZCU1VZc1VVRkJVU3hMUVVGTFVDeExRVUZxUWl4RlFVRjNRanRCUVVOMFFrTXNVVUZCUVVFc1VVRkJVU3hEUVVGRFRTeFJRVUZFTEVOQlFWSTdRVUZEUkR0QlFVTkdMRXRCVm1Fc1EwRlhaRHM3UVVGRFJDeEhRVnBSTEVWQldVNHNRMEZCUTJJc1VVRkJSQ3hGUVVGWFlTeFJRVUZZTEVOQldrMHNRMEZCVkR0QlFXRkVPMEZCUlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlEwRXNUMEZCVHl4VFFVRlRSeXhYUVVGVUxFTkJRWGRDUXl4TFFVRjRRaXhGUVVGclF6dEJRVU4yUXl4TlFVRk5ReXhIUVVGSExFZEJRVWR3UWl4TlFVRk5MRVZCUVd4Q08wRkJRMEZHTEVWQlFVRkJMRk5CUVZNc1EwRkJReXhaUVVGTk8wRkJRMlJ6UWl4SlFVRkJRU3hIUVVGSExFTkJRVU5ETEU5QlFVb3NSMEZCWTBZc1MwRkJaRHRCUVVORUxFZEJSbEVzUTBGQlZEdEJRVWRCTEZOQlFVOURMRWRCUVVjc1EwRkJRME1zVDBGQldEdEJRVU5FT3p0QlFVbEVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR5eFRRVUZUUXl4clFrRkJWQ3hEUVVOTWNFSXNVVUZFU3l4RlFVdE1PMEZCUVVFc1RVRklRVU1zUzBGSFFTeDFSVUZJVVN4RlFVZFNPMEZCUVVFc1RVRkdRVzlDTEZOQlJVRXNkVVZCUm5OQ0xFVkJSWFJDTzBGQlFVRXNUVUZFUVVNc1NVRkRRVHRCUVVOQlJDeEZRVUZCUVN4VFFVRlRMRU5CUVVOc1FpeFBRVUZXTEVOQlFXdENMRlZCUVVORExFbEJRVVFzUlVGQlZUdEJRVU14UWl4UlFVRk5hVUlzVTBGQlV5eEhRVUZIYWtJc1NVRkJiRUk3UVVGRFFTeFJRVUZOYlVJc1YwRkJWeXhIUVVGSGRFSXNTMEZCU3l4RFFVRkRiMElzVTBGQlJDeERRVUY2UWl4RFFVWXdRaXhEUVVjeFFqczdRVUZEUVhwQ0xFbEJRVUZCTEZOQlFWTXNRMEZCUXl4WlFVRk5PMEZCUTJRc1ZVRkJTU3hEUVVGRFNTeFJRVUZNTEVWQlFXVTdRVUZEWml4VlFVRkpTeXhMUVVGTExFZEJRVWRFTEVsQlFVa3NRMEZCUTI5Q0xHbENRVUZNTEVkQlFYbENReXhQUVVGNlFpeERRVUZwUXl4TFFVRnFReXhGUVVGM1F5eEZRVUY0UXl4RFFVRmFPenRCUVVOQkxGVkJRVWxHTEZkQlFWY3NTVUZCU1d4Q0xFdEJRVzVDTEVWQlFUQkNPMEZCUTNoQ1RDeFJRVUZCUVN4UlFVRlJMRU5CUVVNd1FpeEZRVUZVTEVOQlFWbHlRaXhMUVVGYUxFVkJRVzFDYTBJc1YwRkJia0k3UVVGRFJEczdRVUZEUkN4aFFVRlBMRmxCUVUwN1FVRkRXQ3haUVVGSmJFSXNTMEZCU3l4SlFVRkphMElzVjBGQllpeEZRVUV3UWp0QlFVTjRRblpDTEZWQlFVRkJMRkZCUVZFc1EwRkJRekpDTEVkQlFWUXNRMEZCWVhSQ0xFdEJRV0lzUlVGQmIwSnJRaXhYUVVGd1FqdEJRVU5FTzBGQlEwWXNUMEZLUkN4RFFVNWpMRU5CVjJRN1FVRkRSQ3hMUVZwUkxFVkJXVTRzUTBGQlEzWkNMRkZCUVVRc1JVRkJWME1zUzBGQlN5eERRVUZEYjBJc1UwRkJSQ3hEUVVGb1FpeERRVnBOTEVOQlFWUTdRVUZoUkN4SFFXcENSRHRCUVd0Q1JEdEJRVVZFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hQUVVGUExGTkJRVk5QTEc5Q1FVRlVMRWRCUVhkSE8wRkJRVUVzVFVGQkwwUTFRaXhSUVVFclJDeDFSVUZCY0VRc1JVRkJiMFE3UVVGQlFTeE5RVUV6UTBNc1MwRkJNa01zZFVWQlFXNURMRVZCUVcxRE8wRkJRVUVzVFVGQk1VSkRMRk5CUVRCQ0xIVkZRVUZLTEVWQlFVazdRVUZETjBkQkxFVkJRVUZCTEZOQlFWTXNRMEZCUTBNc1QwRkJWaXhEUVVGclFpeFZRVUZEUXl4SlFVRkVMRVZCUVZVN1FVRkRNVUlzVVVGQlRVTXNTMEZCU3l4blFrRkJVMFFzU1VGQlZDeERRVUZZTzBGQlEwRXNVVUZCVFhsQ0xFdEJRVXNzWVVGQlRYcENMRWxCUVVrc1EwRkJRekJDTEUxQlFVd3NRMEZCV1N4RFFVRmFMRVZCUVdWRExGZEJRV1lzUlVGQlRpeFRRVUZ4UXpOQ0xFbEJRVWtzUTBGQlF6UkNMRXRCUVV3c1EwRkJWeXhEUVVGWUxFTkJRWEpETEVOQlFWZ3NRMEZHTUVJc1EwRkhNVUk3TzBGQlEwRXNjVUpCUVRCQ2JrTXNVVUZCVVN4RFFVRkRTU3hMUVVGTExFTkJRVU0wUWl4TFFVRkVMRU5CUVU0c1EwRkJiRU03UVVGQlFUdEJRVUZCTEZGQlFVOTJRaXhMUVVGUU8wRkJRVUVzVVVGQlkwTXNVVUZCWkN4cFFrRktNRUlzUTBGTE1VSTdPenRCUVVOQldDeEpRVUZCUVN4VFFVRlRMRU5CUVVNc1dVRkJUVHRCUVVOa0xGVkJRVWxKTEZGQlFWRXNTVUZCU1VNc1MwRkJTeXhEUVVGRE5FSXNTMEZCUkN4RFFVRk1MRXRCUVdsQ2NrSXNVMEZCYWtNc1JVRkJORU03UVVGRE1VTXNXVUZCU1ZBc1MwRkJTeXhEUVVGRE5FSXNTMEZCUkN4RFFVRk1MRXRCUVdsQ2RrSXNTMEZCYWtJc1NVRkJNRUpPTEZGQlFWRXNRMEZCUTBzc1MwRkJSQ3hEUVVGc1F5eEpRVUUyUXl4UFFVRlBUQ3hSUVVGUkxFTkJRVU5MTEV0QlFVUXNRMEZCWml4TFFVRXlRaXhWUVVFMVJTeEZRVUYzUmp0QlFVTnlSa3dzVlVGQlFVRXNVVUZCVVN4RFFVRkRTeXhMUVVGRUxFTkJRVlFzUTBGQmVVSktMRXRCUVVzc1EwRkJRelJDTEV0QlFVUXNRMEZCT1VJN1FVRkRRWFJDTEZWQlFVRkJMRkZCUVZFc1EwRkJRMDRzUzBGQlN5eERRVUZETkVJc1MwRkJSQ3hEUVVGT0xFTkJRVkk3UVVGRFJEdEJRVU5HTEU5QlRtRXNRMEZQWkRzN1FVRkRSQ3hMUVZKUkxFVkJVVTRzUTBGQlF6ZENMRkZCUVVRc1JVRkJWME1zUzBGQlN5eERRVUZETkVJc1MwRkJSQ3hEUVVGb1FpeERRVkpOTEVOQlFWUTdRVUZUUkN4SFFXWkVPMEZCWjBKRUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dkWE5sUldabVpXTjBMQ0IxYzJWVGRHRjBaU3dnZFhObFVtVm1JSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVYRzR2S2lwY2JpQXFJT1d2dWVXdW51UytpK2FjaVNCelpYUlRkR0YwZFhNZzVwdTA1cFM1NTRxMjVvQ0I1NXFFNWFTRTU1Q0dYRzRnS2lCQWNHRnlZVzBnYVc1emRHRnVZMlZjYmlBcUlFQndZWEpoYlNCd2NtOXdjMXh1SUNvZ1FIQmhjbUZ0SUhCeWIzQnpUbUZ0WlZ4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdkWE5sVTJWMFUzUmhkSFZ6UEZRZ1pYaDBaVzVrY3lCN0lHZGxkRk4wWVhSMWN6b2dLQ2tnUFQ0Z1lXNTVPeUJ6WlhSVGRHRjBkWE02SUNodmNIUTZJR0Z1ZVNrZ1BUNGdkbTlwWkNCOUxDQkdJRDBnZTMwK0tGeHVJQ0JwYm5OMFlXNWpaVG9nVkN4Y2JpQWdjSEp2Y0hNZ1BTQjdmU0JoY3lCR0xGeHVJQ0J3Y205d2MwNWhiV1U2SUhOMGNtbHVaMXRkSUQwZ1cxMHNYRzRwSUh0Y2JpQWdjSEp2Y0hOT1lXMWxMbVp2Y2tWaFkyZ29LRzVoYldVcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCbFRtRnRaU0E5SUc1aGJXVWdZWE1nYTJWNWIyWWdSanRjYmlBZ0lDQXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVWdjbVZoWTNRdGFHOXZhM012Y25Wc1pYTXRiMll0YUc5dmEzTmNiaUFnSUNCamIyNXpkQ0JiYzNSaGRHVXNJSE5sZEZOMFlYUmxYU0E5SUhWelpWTjBZWFJsS0hCeWIzQnpXMlZPWVcxbFhTazdYRzRnSUNBZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElISmxZV04wTFdodmIydHpMM0oxYkdWekxXOW1MV2h2YjJ0elhHNGdJQ0FnZFhObFJXWm1aV04wS0NncElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNocGJuTjBZVzVqWlNBbUppQndjbTl3YzF0bFRtRnRaVjBnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE5iWlU1aGJXVmRJQ0U5UFNCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJRzFoY0M1elpYUlRkR0YwZFhNb2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SUNBZ1pISmhaMFZ1WVdKc1pUb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQXZMeUFnSUd0bGVXSnZZWEprUlc1aFlteGxPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQzh2SUNBZ1pHOTFZbXhsUTJ4cFkydGFiMjl0T2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0FnSUM4dklDQWdlbTl2YlVWdVlXSnNaVG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0F2THlBZ0lISnZkR0YwWlVWdVlXSnNaVG9nZEhKMVpWeHVJQ0FnSUNBZ0lDQWdJQzh2SUgwcE8xeHVJQ0FnSUNBZ0lDQWdJR052Ym5OMElITjBZWFIxY3lBOUlHbHVjM1JoYm1ObExtZGxkRk4wWVhSMWN5Z3BPMXh1SUNBZ0lDQWdJQ0FnSUdsdWMzUmhibU5sTG5ObGRGTjBZWFIxY3loN0lDNHVMbk4wWVhSMWN5d2dXMlZPWVcxbFhUb2djSEp2Y0hOYlpVNWhiV1ZkSUgwcE8xeHVJQ0FnSUNBZ0lDQWdJSE5sZEZOMFlYUmxLSEJ5YjNCelcyVk9ZVzFsWFNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXNWxlSFF0YkdsdVpTQnlaV0ZqZEMxb2IyOXJjeTlsZUdoaGRYTjBhWFpsTFdSbGNITmNiaUFnSUNCOUxDQmJhVzV6ZEdGdVkyVXNJSEJ5YjNCelcyVk9ZVzFsWFYwcE8xeHVJQ0I5S1R0Y2JuMWNibHh1THlvcVhHNGdLaURwa29qbHI3a2dUM1psY214aGVTRG5zYnZsbm92bm1vVG51NFRrdTdidnZJem1uSW5saGF6bGhiSG5tb1RtbUsvbGtLYm1tTDducExvZzVhKzU2TEdoNWFTRTU1Q0dYRzRnS2lEcGdKcm92NGZsajRMbWxiQWdZSFpwYzJsaFlteGxZQ0RtbmFYbWpxZmxpTGJtaWFmb29Zd2dZSE5vYjNjb0tXQWdiM0lnWUdocFpHVW9LV0JjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlIVnpaVlpwYzJsaFlteGxQRlFnWlhoMFpXNWtjeUI3SUhOb2IzYzZJQ2dwSUQwK0lIWnZhV1E3SUdocFpHVTZJQ2dwSUQwK0lIWnZhV1FnZlQ0b2FXNXpkR0Z1WTJVNklGUXNJSFpwYzJsaFlteGxQem9nWW05dmJHVmhiaWtnZTF4dUlDQmpiMjV6ZENCYmMzUmhkR1VzSUhObGRGTjBZWFJsWFNBOUlIVnpaVk4wWVhSbEtIWnBjMmxoWW14bEtUdGNiaUFnZFhObFJXWm1aV04wS0NncElEMCtJSHRjYmlBZ0lDQnBaaUFvYVc1emRHRnVZMlVnSmlZZ2RtbHphV0ZpYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tIWnBjMmxoWW14bEtTQjdYRzRnSUNBZ0lDQWdJR2x1YzNSaGJtTmxMbk5vYjNjZ0ppWWdhVzV6ZEdGdVkyVXVjMmh2ZHlncE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2FXNXpkR0Z1WTJVdWFHbGtaU0FtSmlCcGJuTjBZVzVqWlM1b2FXUmxLQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JwWmlBb2RtbHphV0ZpYkdVZ0lUMDlJSE4wWVhSbEtTQjdYRzRnSUNBZ0lDQWdJSE5sZEZOMFlYUmxLSFpwYzJsaFlteGxLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElISmxZV04wTFdodmIydHpMMlY0YUdGMWMzUnBkbVV0WkdWd2MxeHVJQ0I5TENCYmFXNXpkR0Z1WTJVc0lIWnBjMmxoWW14bFhTazdYRzU5WEc1Y2JpOHFLbHh1SUNvZzZJNjM1WStXNUxpSzVMaUE2TDJ1NTVxRUlIQnliM0J6SU9hSWxpQnpkR0YwWlZ4dUlDb2dTRzkzSUhSdklHZGxkQ0IwYUdVZ2NISmxkbWx2ZFhNZ2NISnZjSE1nYjNJZ2MzUmhkR1UvWEc0Z0tpQm9kSFJ3Y3pvdkwzSmxZV04wYW5NdWIzSm5MMlJ2WTNNdmFHOXZhM010Wm1GeExtaDBiV3dqYUc5M0xYUnZMV2RsZEMxMGFHVXRjSEpsZG1sdmRYTXRjSEp2Y0hNdGIzSXRjM1JoZEdWY2JpQXFJRUJsZUdGdGNHeGxYRzRnS2lCZ1lHQnFjMXh1SUNvZ1puVnVZM1JwYjI0Z1EyOTFiblJsY2lncElIdGNiaUFxSUNBZ1kyOXVjM1FnVzJOdmRXNTBMQ0J6WlhSRGIzVnVkRjBnUFNCMWMyVlRkR0YwWlNnd0tUdGNiaUFxSUNBZ1kyOXVjM1FnY0hKbGRrTnZkVzUwSUQwZ2RYTmxVSEpsZG1sdmRYTW9ZMjkxYm5RcE8xeHVJQ29nSUNCeVpYUjFjbTRnUEdneFBrNXZkem9nZTJOdmRXNTBmU3dnWW1WbWIzSmxPaUI3Y0hKbGRrTnZkVzUwZlR3dmFERStPMXh1SUNvZ2ZWeHVJQ29nWUdCZ1hHNGdLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUIxYzJWUWNtVjJhVzkxY3p4VVBpaDJZV3gxWlRvZ1ZDa2dlMXh1SUNCamIyNXpkQ0J5WldZZ1BTQjFjMlZTWldZOFZENG9LVHRjYmlBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0J5WldZdVkzVnljbVZ1ZENBOUlIWmhiSFZsTzF4dUlDQjlLVHRjYmlBZ2NtVjBkWEp1SUhKbFppNWpkWEp5Wlc1ME8xeHVmVnh1WEc1bGVIQnZjblFnZEhsd1pTQkZkbVZ1ZEU1aGJXVlVlWEJsSUQwZ0oweHZkMlZ5UTJGelpTYzdYRzVjYmk4cUtseHVJQ29nNTd1UjVhNmE1THFMNUx1MlhHNGdLaUJBY0dGeVlXMGdhVzV6ZEdGdVkyVWc1YTZlNUw2TDVhKzU2TEdoWEc0Z0tpQkFjR0Z5WVcwZ2NISnZjSE1nNUx5ZzZZQ1M2TCtiNXAybDU1cUVJSEJ5YjNCelhHNGdLaUJBY0dGeVlXMGdaWFpsYm5ST1lXMWxJT1M2aStTN3R1ZWFoT1dRamVXdGwrKzhqT1dtZ3UrOGpPYUlrZVM3ck9TOXYrZVVxQ0JnYjI1RGJHbGphMkFnNUxxTDVMdTI3N3lNNXB5QTU3dUk2S0tyNkwyczVvMmk1b2lRNzd5TVlHTnNhV05yWUNEbnU1SGxycHJsaUxEbHJwN2t2b3ZrdUszdnZJeGdiMjVFWW14RGJHbGphMkFnUFQ0Z1lHUmliR05zYVdOcllGeHVJQ3BjYmlBcUlFQmxlR0Z0Y0d4bFhHNGdLaUJnWUdCcWMxeHVJQ29nZFhObFJYWmxiblJRY205d1pYSjBhV1Z6UEVKTllYQXVUV0Z5YTJWeUxDQlZjMlZOWVhKclpYSStLRzFoY210bGNpRXNJSEJ5YjNCekxDQmJYRzRnS2lBZ0lDZHZiazF2ZFhObFRXOTJaU2NzSUNkdmJscHZiMjFEYUdGdVoyVW5MQ0FuYjI1TllYQk5iM1psSnl3Z0oyOXVUVzkxYzJWWGFHVmxiQ2NzSUNkdmJscHZiMjFUZEdGeWRDZGNiaUFxSUYwcE8xeHVJQ29nWUdCZ1hHNGdLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUIxYzJWRmRtVnVkRkJ5YjNCbGNuUnBaWE04VkNCbGVIUmxibVJ6SUVGTllYQXVUV0Z3UlhabGJuUk1hWE4wWlc1bGNqeGhibmsrTENCR1BpaGNiaUFnYVc1emRHRnVZMlU2SUZRc1hHNGdJSEJ5YjNCeklEMGdlMzBnWVhNZ1JpeGNiaUFnWlhabGJuUk9ZVzFsT2lCemRISnBibWRiWFNBOUlGdGRMRnh1SUNCMGVYQmxQem9nUlhabGJuUk9ZVzFsVkhsd1pTeGNiaWtnZTF4dUlDQmxkbVZ1ZEU1aGJXVXVabTl5UldGamFDZ29ibUZ0WlNrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdWMlpXNTBUbUZ0WlNBOUlHNWhiV1VnWVhNZ2EyVjViMllnUmp0Y2JpQWdJQ0JqYjI1emRDQmxkbVZ1ZEVoaGJtUnNaU0E5SUhCeWIzQnpXMlYyWlc1MFRtRnRaVjA3WEc0Z0lDQWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJSEpsWVdOMExXaHZiMnR6TDNKMWJHVnpMVzltTFdodmIydHpYRzRnSUNBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0FnSUdsbUlDZ2hhVzV6ZEdGdVkyVXBJSEpsZEhWeWJqdGNiaUFnSUNBZ0lHeGxkQ0JsVG1GdFpTQTlJRzVoYldVdWRHOU1iMk5oYkdWTWIzZGxja05oYzJVb0tTNXlaWEJzWVdObEtDOWViMjR2TENBbkp5azdYRzRnSUNBZ0lDQnBaaUFvWlhabGJuUklZVzVrYkdVZ0ppWWdaVTVoYldVcElIdGNiaUFnSUNBZ0lDQWdhVzV6ZEdGdVkyVXViMjRvWlU1aGJXVXNJR1YyWlc1MFNHRnVaR3hsS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhKbGRIVnliaUFvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR2xtSUNobFRtRnRaU0FtSmlCbGRtVnVkRWhoYm1Sc1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdsdWMzUmhibU5sTG05bVppaGxUbUZ0WlN3Z1pYWmxiblJJWVc1a2JHVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5TzF4dUlDQWdJQ0FnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0Ym1WNGRDMXNhVzVsSUhKbFlXTjBMV2h2YjJ0ekwyVjRhR0YxYzNScGRtVXRaR1Z3YzF4dUlDQWdJSDBzSUZ0cGJuTjBZVzVqWlN3Z2NISnZjSE5iWlhabGJuUk9ZVzFsWFYwcE8xeHVJQ0I5S1R0Y2JuMWNibHh1THlvcVhHNGdLaURsc1o3bWdLZmxqNWZtanFkY2JpQXFJRUJ3WVhKaGJTQnBibk4wWVc1alpTRGxycDdrdm92bHI3bm9zYUZjYmlBcUlFQndZWEpoYlNCd2NtOXdjeURsc1o3bWdLZmxnTHhjYmlBcUlFQndZWEpoYlNCd2NtOXdjMDVoYldVZzVhU2E1TGlxNWJHZTVvQ242SzYrNTcydTU1cUU1WkNONTZld1hHNGdLaUJBWlhoaGJYQnNaVnh1SUNvZ1lHQmdkSE5jYmlBcUlIVnpaVk5sZEhScGJtZFFjbTl3WlhKMGFXVnpQRUZOWVhBdVVHOXNlV3hwYm1Vc0lGVnpaVkJ2Ykhsc2FXNWxQaWh3YjJ4NWJHbHVaU0VzSUhCeWIzQnpMQ0JiWEc0Z0tpQWdJQ0FuVUdGMGFDZGNiaUFxSUYwcE8xeHVJQ29nWUdCZ1hHNGdLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUIxYzJWVFpYUjBhVzVuVUhKdmNHVnlkR2xsY3p4VUxDQkdJRDBnZTMwK0tHbHVjM1JoYm1ObElEMGdlMzBnWVhNZ1ZDd2djSEp2Y0hNZ1BTQjdmU0JoY3lCR0xDQndjbTl3YzA1aGJXVTZJSE4wY21sdVoxdGRJRDBnVzEwcElIdGNiaUFnY0hKdmNITk9ZVzFsTG1admNrVmhZMmdvS0c1aGJXVXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmxUbUZ0WlNBOUlHQnpaWFFrZTI1aGJXVjlZQ0JoY3lCclpYbHZaaUJVTzF4dUlDQWdJR052Ym5OMElIWk9ZVzFsSUQwZ1lDUjdibUZ0WlM1amFHRnlRWFFvTUNrdWRHOU1iM2RsY2tOaGMyVW9LWDBrZTI1aGJXVXVjMnhwWTJVb01TbDlZQ0JoY3lCclpYbHZaaUJHTzF4dUlDQWdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J5WldGamRDMW9iMjlyY3k5eWRXeGxjeTF2Wmkxb2IyOXJjMXh1SUNBZ0lHTnZibk4wSUZ0emRHRjBaU3dnYzJWMFUzUmhkR1ZkSUQwZ2RYTmxVM1JoZEdVb2NISnZjSE5iZGs1aGJXVmRLVHRjYmlBZ0lDQXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVWdjbVZoWTNRdGFHOXZhM012Y25Wc1pYTXRiMll0YUc5dmEzTmNiaUFnSUNCMWMyVkZabVpsWTNRb0tDa2dQVDRnZTF4dUlDQWdJQ0FnYVdZZ0tHbHVjM1JoYm1ObElDWW1JSEJ5YjNCelczWk9ZVzFsWFNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHdjbTl3YzF0MlRtRnRaVjBnSVQwOUlITjBZWFJsSUNZbUlHbHVjM1JoYm1ObFcyVk9ZVzFsWFNBbUppQjBlWEJsYjJZZ2FXNXpkR0Z1WTJWYlpVNWhiV1ZkSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0tHbHVjM1JoYm1ObFcyVk9ZVzFsWFNCaGN5QmhibmtwS0hCeWIzQnpXM1pPWVcxbFhTazdYRzRnSUNBZ0lDQWdJQ0FnYzJWMFUzUmhkR1VvY0hKdmNITmJkazVoYldWZEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJSEpsWVdOMExXaHZiMnR6TDJWNGFHRjFjM1JwZG1VdFpHVndjMXh1SUNBZ0lIMHNJRnRwYm5OMFlXNWpaU3dnY0hKdmNITmJkazVoYldWZFhTazdYRzRnSUgwcE8xeHVmVnh1SWwxOSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNldFN0YXR1cywgdXNlRXZlbnRQcm9wZXJ0aWVzLCB1c2VTZXR0aW5nUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbW1vbi9ob29rcyc7XG5leHBvcnQgdmFyIHVzZU1hcCA9IGZ1bmN0aW9uIHVzZU1hcCgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgb3RoZXIgPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBtYXAgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0TWFwID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKHByb3BzLnpvb20gfHwgMTUpLFxuICAgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgICAgem9vbSA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRab29tID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgX3VzZVN0YXRlNSA9IHVzZVN0YXRlKHByb3BzLmNvbnRhaW5lciksXG4gICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICBjb250YWluZXIgPSBfdXNlU3RhdGU2WzBdLFxuICAgICAgc2V0Q29udGFpbmVyID0gX3VzZVN0YXRlNlsxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnN0YW5jZTtcblxuICAgIGlmIChjb250YWluZXIgJiYgIW1hcCAmJiBBTWFwKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBBTWFwLk1hcChjb250YWluZXIsIF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB6b29tOiB6b29tXG4gICAgICB9LCBvdGhlcikpO1xuICAgICAgc2V0TWFwKGluc3RhbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHNldE1hcCh1bmRlZmluZWQpOyAvLyBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2NvbnRhaW5lcl0pO1xuICB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobWFwICYmIHR5cGVvZiBwcm9wcy56b29tID09PSAnbnVtYmVyJyAmJiB6b29tICE9PSBwcm9wcy56b29tICYmIHByb3BzLnpvb20gPj0gMiAmJiBwcm9wcy56b29tIDw9IDIwKSB7XG4gICAgICBzZXRab29tKHByb3BzLnpvb20pO1xuICAgICAgbWFwLnNldFpvb20ocHJvcHMuem9vbSk7XG4gICAgfVxuICB9LCBbem9vbSwgcHJvcHMuem9vbV0pO1xuICB1c2VTZXRTdGF0dXMobWFwLCBwcm9wcywgWydkcmFnRW5hYmxlJywgJ3pvb21FbmFibGUnLCAnam9nRW5hYmxlJywgJ3BpdGNoRW5hYmxlJywgJ3JvdGF0ZUVuYWJsZScsICdhbmltYXRlRW5hYmxlJywgJ2tleWJvYXJkRW5hYmxlJ10pOyAvLyBzZXRTdGF0dXMsIHNldFpvb21BbmRDZW50ZXIsIHNldEZpdFZpZXdcblxuICB1c2VTZXR0aW5nUHJvcGVydGllcyhtYXAsIHByb3BzLCBbJ1pvb20nLCAnTGFiZWx6SW5kZXgnLCAnTGF5ZXJzJywgJ0NlbnRlcicsICdDaXR5JywgJ0JvdW5kcycsICdMaW1pdEJvdW5kcycsICdMYW5nJywgJ1JvdGF0aW9uJywgJ0RlZmF1bHRDdXJzb3InLCAnTWFwU3R5bGUnLCAnRmVhdHVyZXMnLCAnRGVmYXVsdExheWVyJywgJ1BpdGNoJ10pO1xuICB1c2VFdmVudFByb3BlcnRpZXMobWFwLCBwcm9wcywgWydvbk1vdXNlTW92ZScsICdvblpvb21DaGFuZ2UnLCAnb25NYXBNb3ZlJywgJ29uTW91c2VXaGVlbCcsICdvblpvb21TdGFydCcsICdvbk1vdXNlT3ZlcicsICdvbk1vdXNlT3V0JywgJ29uRGJsQ2xpY2snLCAnb25DbGljaycsICdvblpvb21FbmQnLCAnb25Nb3ZlRW5kJywgJ29uTW91c2VVcCcsICdvbk1vdXNlRG93bicsICdvblJpZ2h0Q2xpY2snLCAnb25Nb3ZlU3RhcnQnLCAnb25EcmFnU3RhcnQnLCAnb25EcmFnZ2luZycsICdvbkRyYWdFbmQnLCAnb25Ib3RzcG90T3V0JywgJ29uSG90c3BvdE92ZXInLCAnb25Ub3VjaFN0YXJ0JywgJ29uQ29tcGxldGUnLCAnb25Ib3RzcG90Q2xpY2snLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaEVuZCcsICdvblJlc2l6ZSddKTtcbiAgcmV0dXJuIHtcbiAgICBtYXA6IG1hcCxcbiAgICBzZXRNYXA6IHNldE1hcCxcbiAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICBzZXRDb250YWluZXI6IHNldENvbnRhaW5lclxuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlOWVhBdmRYTmxUV0Z3TG5SemVDSmRMQ0p1WVcxbGN5STZXeUoxYzJWVGRHRjBaU0lzSW5WelpVMWxiVzhpTENKMWMyVkZabVpsWTNRaUxDSjFjMlZUWlhSVGRHRjBkWE1pTENKMWMyVkZkbVZ1ZEZCeWIzQmxjblJwWlhNaUxDSjFjMlZUWlhSMGFXNW5VSEp2Y0dWeWRHbGxjeUlzSW5WelpVMWhjQ0lzSW5CeWIzQnpJaXdpYjNSb1pYSWlMQ0p0WVhBaUxDSnpaWFJOWVhBaUxDSjZiMjl0SWl3aWMyVjBXbTl2YlNJc0ltTnZiblJoYVc1bGNpSXNJbk5sZEVOdmJuUmhhVzVsY2lJc0ltbHVjM1JoYm1ObElpd2lRVTFoY0NJc0lrMWhjQ0lzSW5WdVpHVm1hVzVsWkNKZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNVMEZCVTBFc1VVRkJWQ3hGUVVGdFFrTXNUMEZCYmtJc1JVRkJORUpETEZOQlFUVkNMRkZCUVRaRExFOUJRVGRETzBGQlIwRXNVMEZCVTBNc1dVRkJWQ3hGUVVGMVFrTXNhMEpCUVhaQ0xFVkJRVEpEUXl4dlFrRkJNME1zVVVGQmRVVXNhVUpCUVhaRk8wRkJVMEVzVDBGQlR5eEpRVUZOUXl4TlFVRk5MRWRCUVVjc1UwRkJWRUVzVFVGQlV5eEhRVUYzUWp0QlFVRkJMRTFCUVhaQ1F5eExRVUYxUWl4MVJVRkJVQ3hGUVVGUE96dEJRVU0xUXl4TlFVRlhReXhMUVVGWUxHZENRVUZ4UWtRc1MwRkJja0k3TzBGQlEwRXNhMEpCUVhOQ1VDeFJRVUZSTEVWQlFUbENPMEZCUVVFN1FVRkJRU3hOUVVGUFV5eEhRVUZRTzBGQlFVRXNUVUZCV1VNc1RVRkJXanM3UVVGRFFTeHRRa0ZCZDBKV0xGRkJRVkVzUTBGQlEwOHNTMEZCU3l4RFFVRkRTU3hKUVVGT0xFbEJRV01zUlVGQlppeERRVUZvUXp0QlFVRkJPMEZCUVVFc1RVRkJUMEVzU1VGQlVEdEJRVUZCTEUxQlFXRkRMRTlCUVdJN08wRkJRMEVzYlVKQlFXdERXaXhSUVVGUkxFTkJRVU5QTEV0QlFVc3NRMEZCUTAwc1UwRkJVQ3hEUVVFeFF6dEJRVUZCTzBGQlFVRXNUVUZCVDBFc1UwRkJVRHRCUVVGQkxFMUJRV3RDUXl4WlFVRnNRanM3UVVGRFFWb3NSVUZCUVVFc1UwRkJVeXhEUVVGRExGbEJRVTA3UVVGRFpDeFJRVUZKWVN4UlFVRktPenRCUVVOQkxGRkJRVWxHTEZOQlFWTXNTVUZCU1N4RFFVRkRTaXhIUVVGa0xFbEJRWEZDVHl4SlFVRjZRaXhGUVVFclFqdEJRVU0zUWtRc1RVRkJRVUVzVVVGQlVTeEhRVUZITEVsQlFVbERMRWxCUVVrc1EwRkJRME1zUjBGQlZDeERRVUZoU2l4VFFVRmlPMEZCUVRCQ1JpeFJRVUZCUVN4SlFVRkpMRVZCUVVwQk8wRkJRVEZDTEZOQlFXMURTQ3hMUVVGdVF5eEZRVUZZTzBGQlEwRkZMRTFCUVVGQkxFMUJRVTBzUTBGQlEwc3NVVUZCUkN4RFFVRk9PMEZCUTBRN08wRkJRMFFzVjBGQlR5eFpRVUZOTzBGQlExZ3NWVUZCU1VFc1VVRkJTaXhGUVVGak8wRkJRMXBNTEZGQlFVRkJMRTFCUVUwc1EwRkJRMUVzVTBGQlJDeERRVUZPTEVOQlJGa3NRMEZGV2p0QlFVTkVPMEZCUTBZc1MwRk1SRHRCUVUxRUxFZEJXbEVzUlVGWlRpeERRVUZEVEN4VFFVRkVMRU5CV2swc1EwRkJWRHRCUVdOQldpeEZRVUZCUVN4UFFVRlBMRU5CUVVNc1dVRkJUVHRCUVVOYUxGRkJRVWxSTEVkQlFVY3NTVUZCU1N4UFFVRlBSaXhMUVVGTExFTkJRVU5KTEVsQlFXSXNTMEZCYzBJc1VVRkJOMElzU1VGQmVVTkJMRWxCUVVrc1MwRkJTMG9zUzBGQlN5eERRVUZEU1N4SlFVRjRSQ3hKUVVGblJVb3NTMEZCU3l4RFFVRkRTU3hKUVVGT0xFbEJRV01zUTBGQk9VVXNTVUZCYlVaS0xFdEJRVXNzUTBGQlEwa3NTVUZCVGl4SlFVRmpMRVZCUVhKSExFVkJRWGxITzBGQlEzWkhReXhOUVVGQlFTeFBRVUZQTEVOQlFVTk1MRXRCUVVzc1EwRkJRMGtzU1VGQlVDeERRVUZRTzBGQlEwRkdMRTFCUVVGQkxFZEJRVWNzUTBGQlEwY3NUMEZCU2l4RFFVRlpUQ3hMUVVGTExFTkJRVU5KTEVsQlFXeENPMEZCUTBRN1FVRkRSaXhIUVV4TkxFVkJTMG9zUTBGQlEwRXNTVUZCUkN4RlFVRlBTaXhMUVVGTExFTkJRVU5KTEVsQlFXSXNRMEZNU1N4RFFVRlFPMEZCVDBGU0xFVkJRVUZCTEZsQlFWa3NRMEZCYlVKTkxFZEJRVzVDTEVWQlFYbENSaXhMUVVGNlFpeEZRVUZuUXl4RFFVTXhReXhaUVVRd1F5eEZRVVV4UXl4WlFVWXdReXhGUVVjeFF5eFhRVWd3UXl4RlFVa3hReXhoUVVvd1F5eEZRVXN4UXl4alFVd3dReXhGUVUweFF5eGxRVTR3UXl4RlFVOHhReXhuUWtGUU1FTXNRMEZCYUVNc1EwRkJXaXhEUVRGQ05FTXNRMEZ0UXpWRE96dEJRVU5CUml4RlFVRkJRU3h2UWtGQmIwSXNRMEZCYlVKSkxFZEJRVzVDTEVWQlFYbENSaXhMUVVGNlFpeEZRVUZuUXl4RFFVTnNSQ3hOUVVSclJDeEZRVVZzUkN4aFFVWnJSQ3hGUVVkc1JDeFJRVWhyUkN4RlFVbHNSQ3hSUVVwclJDeEZRVXRzUkN4TlFVeHJSQ3hGUVUxc1JDeFJRVTVyUkN4RlFVOXNSQ3hoUVZCclJDeEZRVkZzUkN4TlFWSnJSQ3hGUVZOc1JDeFZRVlJyUkN4RlFWVnNSQ3hsUVZaclJDeEZRVmRzUkN4VlFWaHJSQ3hGUVZsc1JDeFZRVnByUkN4RlFXRnNSQ3hqUVdKclJDeEZRV05zUkN4UFFXUnJSQ3hEUVVGb1F5eERRVUZ3UWp0QlFXZENRVWdzUlVGQlFVRXNhMEpCUVd0Q0xFTkJRVzFDU3l4SFFVRnVRaXhGUVVGNVFrWXNTMEZCZWtJc1JVRkJaME1zUTBGRGFFUXNZVUZFWjBRc1JVRkZhRVFzWTBGR1owUXNSVUZIYUVRc1YwRklaMFFzUlVGSmFFUXNZMEZLWjBRc1JVRkxhRVFzWVVGTVowUXNSVUZOYUVRc1lVRk9aMFFzUlVGUGFFUXNXVUZRWjBRc1JVRlJhRVFzV1VGU1owUXNSVUZUYUVRc1UwRlVaMFFzUlVGVmFFUXNWMEZXWjBRc1JVRlhhRVFzVjBGWVowUXNSVUZaYUVRc1YwRmFaMFFzUlVGaGFFUXNZVUZpWjBRc1JVRmphRVFzWTBGa1owUXNSVUZsYUVRc1lVRm1aMFFzUlVGblFtaEVMR0ZCYUVKblJDeEZRV2xDYUVRc1dVRnFRbWRFTEVWQmEwSm9SQ3hYUVd4Q1owUXNSVUZ0UW1oRUxHTkJia0puUkN4RlFXOUNhRVFzWlVGd1FtZEVMRVZCY1VKb1JDeGpRWEpDWjBRc1JVRnpRbWhFTEZsQmRFSm5SQ3hGUVhWQ2FFUXNaMEpCZGtKblJDeEZRWGRDYUVRc1lVRjRRbWRFTEVWQmVVSm9SQ3haUVhwQ1owUXNSVUV3UW1oRUxGVkJNVUpuUkN4RFFVRm9ReXhEUVVGc1FqdEJRVFJDUVN4VFFVRlBPMEZCUTB4RkxFbEJRVUZCTEVkQlFVY3NSVUZCU0VFc1IwRkVTenRCUVVWTVF5eEpRVUZCUVN4TlFVRk5MRVZCUVU1QkxFMUJSa3M3UVVGSFRFY3NTVUZCUVVFc1UwRkJVeXhGUVVGVVFTeFRRVWhMTzBGQlNVeERMRWxCUVVGQkxGbEJRVmtzUlVGQldrRTdRVUZLU3l4SFFVRlFPMEZCVFVRc1EwRjBSazBpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCMWMyVlRkR0YwWlN3Z2RYTmxUV1Z0Ynl3Z2RYTmxSV1ptWldOMElIMGdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUhzZ1RXRndVSEp2Y0hNZ2ZTQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUJOWVhCRGFHbHNaRkJ5YjNCeklIMGdabkp2YlNBbkxpNHZZMjl0Ylc5dUwyMWhjQ2M3WEc1cGJYQnZjblFnZXlCMWMyVlRaWFJUZEdGMGRYTXNJSFZ6WlVWMlpXNTBVSEp2Y0dWeWRHbGxjeXdnZFhObFUyVjBkR2x1WjFCeWIzQmxjblJwWlhNZ2ZTQm1jbTl0SUNjdUxpOWpiMjF0YjI0dmFHOXZhM01uTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElGVnpaVTFoY0NCbGVIUmxibVJ6SUUxaGNGQnliM0J6TENCTllYQkRhR2xzWkZCeWIzQnpJSHRjYmlBZ0x5b3FYRzRnSUNBcUlPYU1oK1d1bXVlYWhPV3V1ZVdacUZ4dUlDQWdLaTljYmlBZ1kyOXVkR0ZwYm1WeVB6b2dTRlJOVEVScGRrVnNaVzFsYm5RZ2ZDQnVkV3hzTzF4dWZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2RYTmxUV0Z3SUQwZ0tIQnliM0J6T2lCVmMyVk5ZWEFnUFNCN2ZTa2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lDNHVMbTkwYUdWeUlIMGdQU0J3Y205d2N6dGNiaUFnWTI5dWMzUWdXMjFoY0N3Z2MyVjBUV0Z3WFNBOUlIVnpaVk4wWVhSbFBFRk5ZWEF1VFdGd1BpZ3BPMXh1SUNCamIyNXpkQ0JiZW05dmJTd2djMlYwV205dmJWMGdQU0IxYzJWVGRHRjBaU2h3Y205d2N5NTZiMjl0SUh4OElERTFLVHRjYmlBZ1kyOXVjM1FnVzJOdmJuUmhhVzVsY2l3Z2MyVjBRMjl1ZEdGcGJtVnlYU0E5SUhWelpWTjBZWFJsS0hCeWIzQnpMbU52Ym5SaGFXNWxjaWs3WEc0Z0lIVnpaVVZtWm1WamRDZ29LU0E5UGlCN1hHNGdJQ0FnYkdWMElHbHVjM1JoYm1ObE9pQkJUV0Z3TGsxaGNEdGNiaUFnSUNCcFppQW9ZMjl1ZEdGcGJtVnlJQ1ltSUNGdFlYQWdKaVlnUVUxaGNDa2dlMXh1SUNBZ0lDQWdhVzV6ZEdGdVkyVWdQU0J1WlhjZ1FVMWhjQzVOWVhBb1kyOXVkR0ZwYm1WeUxDQjdJSHB2YjIwc0lDNHVMbTkwYUdWeUlIMHBPMXh1SUNBZ0lDQWdjMlYwVFdGd0tHbHVjM1JoYm1ObEtUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2hwYm5OMFlXNWpaU2tnZTF4dUlDQWdJQ0FnSUNCelpYUk5ZWEFvZFc1a1pXWnBibVZrS1R0Y2JpQWdJQ0FnSUNBZ0x5OGdhVzV6ZEdGdVkyVXVaR1Z6ZEhKdmVTZ3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzRnSUgwc0lGdGpiMjUwWVdsdVpYSmRLVHRjYmx4dUlDQjFjMlZOWlcxdktDZ3BJRDArSUh0Y2JpQWdJQ0JwWmlBb2JXRndJQ1ltSUhSNWNHVnZaaUJ3Y205d2N5NTZiMjl0SUQwOVBTQW5iblZ0WW1WeUp5QW1KaUI2YjI5dElDRTlQU0J3Y205d2N5NTZiMjl0SUNZbUlIQnliM0J6TG5wdmIyMGdQajBnTWlBbUppQndjbTl3Y3k1NmIyOXRJRHc5SURJd0tTQjdYRzRnSUNBZ0lDQnpaWFJhYjI5dEtIQnliM0J6TG5wdmIyMHBPMXh1SUNBZ0lDQWdiV0Z3TG5ObGRGcHZiMjBvY0hKdmNITXVlbTl2YlNrN1hHNGdJQ0FnZlZ4dUlDQjlMQ0JiZW05dmJTd2djSEp2Y0hNdWVtOXZiVjBwTzF4dVhHNGdJSFZ6WlZObGRGTjBZWFIxY3p4QlRXRndMazFoY0N3Z1ZYTmxUV0Z3UGlodFlYQWhMQ0J3Y205d2N5d2dXMXh1SUNBZ0lDZGtjbUZuUlc1aFlteGxKeXhjYmlBZ0lDQW5lbTl2YlVWdVlXSnNaU2NzWEc0Z0lDQWdKMnB2WjBWdVlXSnNaU2NzWEc0Z0lDQWdKM0JwZEdOb1JXNWhZbXhsSnl4Y2JpQWdJQ0FuY205MFlYUmxSVzVoWW14bEp5eGNiaUFnSUNBbllXNXBiV0YwWlVWdVlXSnNaU2NzWEc0Z0lDQWdKMnRsZVdKdllYSmtSVzVoWW14bEp5eGNiaUFnWFNrN1hHNGdJQzh2SUhObGRGTjBZWFIxY3l3Z2MyVjBXbTl2YlVGdVpFTmxiblJsY2l3Z2MyVjBSbWwwVm1sbGQxeHVJQ0IxYzJWVFpYUjBhVzVuVUhKdmNHVnlkR2xsY3p4QlRXRndMazFoY0N3Z1ZYTmxUV0Z3UGlodFlYQWhMQ0J3Y205d2N5d2dXMXh1SUNBZ0lDZGFiMjl0Snl4Y2JpQWdJQ0FuVEdGaVpXeDZTVzVrWlhnbkxGeHVJQ0FnSUNkTVlYbGxjbk1uTEZ4dUlDQWdJQ2REWlc1MFpYSW5MRnh1SUNBZ0lDZERhWFI1Snl4Y2JpQWdJQ0FuUW05MWJtUnpKeXhjYmlBZ0lDQW5UR2x0YVhSQ2IzVnVaSE1uTEZ4dUlDQWdJQ2RNWVc1bkp5eGNiaUFnSUNBblVtOTBZWFJwYjI0bkxGeHVJQ0FnSUNkRVpXWmhkV3gwUTNWeWMyOXlKeXhjYmlBZ0lDQW5UV0Z3VTNSNWJHVW5MRnh1SUNBZ0lDZEdaV0YwZFhKbGN5Y3NYRzRnSUNBZ0owUmxabUYxYkhSTVlYbGxjaWNzWEc0Z0lDQWdKMUJwZEdOb0p5eGNiaUFnWFNrN1hHNGdJSFZ6WlVWMlpXNTBVSEp2Y0dWeWRHbGxjenhCVFdGd0xrMWhjQ3dnVlhObFRXRndQaWh0WVhBaExDQndjbTl3Y3l3Z1cxeHVJQ0FnSUNkdmJrMXZkWE5sVFc5MlpTY3NYRzRnSUNBZ0oyOXVXbTl2YlVOb1lXNW5aU2NzWEc0Z0lDQWdKMjl1VFdGd1RXOTJaU2NzWEc0Z0lDQWdKMjl1VFc5MWMyVlhhR1ZsYkNjc1hHNGdJQ0FnSjI5dVdtOXZiVk4wWVhKMEp5eGNiaUFnSUNBbmIyNU5iM1Z6WlU5MlpYSW5MRnh1SUNBZ0lDZHZiazF2ZFhObFQzVjBKeXhjYmlBZ0lDQW5iMjVFWW14RGJHbGpheWNzWEc0Z0lDQWdKMjl1UTJ4cFkyc25MRnh1SUNBZ0lDZHZibHB2YjIxRmJtUW5MRnh1SUNBZ0lDZHZiazF2ZG1WRmJtUW5MRnh1SUNBZ0lDZHZiazF2ZFhObFZYQW5MRnh1SUNBZ0lDZHZiazF2ZFhObFJHOTNiaWNzWEc0Z0lDQWdKMjl1VW1sbmFIUkRiR2xqYXljc1hHNGdJQ0FnSjI5dVRXOTJaVk4wWVhKMEp5eGNiaUFnSUNBbmIyNUVjbUZuVTNSaGNuUW5MRnh1SUNBZ0lDZHZia1J5WVdkbmFXNW5KeXhjYmlBZ0lDQW5iMjVFY21GblJXNWtKeXhjYmlBZ0lDQW5iMjVJYjNSemNHOTBUM1YwSnl4Y2JpQWdJQ0FuYjI1SWIzUnpjRzkwVDNabGNpY3NYRzRnSUNBZ0oyOXVWRzkxWTJoVGRHRnlkQ2NzWEc0Z0lDQWdKMjl1UTI5dGNHeGxkR1VuTEZ4dUlDQWdJQ2R2YmtodmRITndiM1JEYkdsamF5Y3NYRzRnSUNBZ0oyOXVWRzkxWTJoTmIzWmxKeXhjYmlBZ0lDQW5iMjVVYjNWamFFVnVaQ2NzWEc0Z0lDQWdKMjl1VW1WemFYcGxKeXhjYmlBZ1hTazdYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdiV0Z3TEZ4dUlDQWdJSE5sZEUxaGNDeGNiaUFnSUNCamIyNTBZV2x1WlhJc1hHNGdJQ0FnYzJWMFEyOXVkR0ZwYm1WeUxGeHVJQ0I5TzF4dWZUdGNiaUpkZlE9PSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcImNoaWxkcmVuXCJdO1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCIuLi90eXBlc1wiIC8+XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUltcGVyYXRpdmVIYW5kbGUsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTWFwIH0gZnJvbSAnLi91c2VNYXAnO1xuZXhwb3J0IHZhciBNYXAgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgdmFyIGVsbVJlZiA9IHVzZVJlZihudWxsKTtcblxuICB2YXIgX3VzZU1hcCA9IHVzZU1hcChfb2JqZWN0U3ByZWFkKHtcbiAgICBjb250YWluZXI6IGVsbVJlZi5jdXJyZW50XG4gIH0sIHByb3BzKSksXG4gICAgICBzZXRDb250YWluZXIgPSBfdXNlTWFwLnNldENvbnRhaW5lcixcbiAgICAgIGNvbnRhaW5lciA9IF91c2VNYXAuY29udGFpbmVyLFxuICAgICAgbWFwID0gX3VzZU1hcC5tYXA7XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2V0Q29udGFpbmVyKGVsbVJlZi5jdXJyZW50KTtcbiAgfSwgW2VsbVJlZi5jdXJyZW50XSk7XG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgbWFwOiBtYXAsXG4gICAgICBBTWFwOiBBTWFwLFxuICAgICAgY29udGFpbmVyOiBlbG1SZWYuY3VycmVudFxuICAgIH0pO1xuICB9LCBbbWFwXSk7XG4gIHZhciBjaGlsZHMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiBlbG1SZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH0sIHN0eWxlKVxuICB9KSwgQU1hcCAmJiBtYXAgJiYgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nICYmIGNoaWxkcmVuKHtcbiAgICBBTWFwOiBBTWFwLFxuICAgIG1hcDogbWFwLFxuICAgIGNvbnRhaW5lcjogY29udGFpbmVyXG4gIH0pLCBBTWFwICYmIG1hcCAmJiBjaGlsZHMubWFwKGZ1bmN0aW9uIChjaGlsZCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgY2hpbGQpLCB7XG4gICAgICAgIGtleToga2V5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSByZXR1cm4gbnVsbDtcblxuICAgIGlmIChjaGlsZC50eXBlICYmIHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAga2V5OiBrZXlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNoaWxkLnByb3BzKSwge30sIHtcbiAgICAgIEFNYXA6IEFNYXAsXG4gICAgICBtYXA6IG1hcCxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAga2V5OiBrZXlcbiAgICB9KSk7XG4gIH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OU5ZWEF2YVc1a1pYZ3VkSE40SWwwc0ltNWhiV1Z6SWpwYklsSmxZV04wSWl3aWRYTmxVbVZtSWl3aWRYTmxSV1ptWldOMElpd2lkWE5sU1cxd1pYSmhkR2wyWlVoaGJtUnNaU0lzSWtaeVlXZHRaVzUwSWl3aWRYTmxUV0Z3SWl3aVRXRndJaXdpWm05eWQyRnlaRkpsWmlJc0luSmxaaUlzSW1Oc1lYTnpUbUZ0WlNJc0luTjBlV3hsSWl3aVkyaHBiR1J5Wlc0aUxDSndjbTl3Y3lJc0ltVnNiVkpsWmlJc0ltTnZiblJoYVc1bGNpSXNJbU4xY25KbGJuUWlMQ0p6WlhSRGIyNTBZV2x1WlhJaUxDSnRZWEFpTENKQlRXRndJaXdpWTJocGJHUnpJaXdpUTJocGJHUnlaVzRpTENKMGIwRnljbUY1SWl3aVptOXVkRk5wZW1VaUxDSm9aV2xuYUhRaUxDSmphR2xzWkNJc0ltdGxlU0lzSW1Oc2IyNWxSV3hsYldWdWRDSXNJbWx6Vm1Gc2FXUkZiR1Z0Wlc1MElpd2lkSGx3WlNKZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRTdRVUZGUVN4UFFVRlBRU3hMUVVGUUxFbEJRV2RDUXl4TlFVRm9RaXhGUVVGM1FrTXNVMEZCZUVJc1JVRkJiVU5ETEcxQ1FVRnVReXhGUVVGM1JFTXNVVUZCZUVRc1VVRkJkMFVzVDBGQmVFVTdRVUZEUVN4VFFVRlRReXhOUVVGVUxGRkJRWFZDTEZWQlFYWkNPMEZCVjBFc1QwRkJUeXhKUVVGTlF5eEhRVUZITEdkQ1FVRkhUaXhMUVVGTExFTkJRVU5QTEZWQlFVNHNRMEZEYWtJc1owSkJRVEpEUXl4SFFVRXpReXhGUVVGdFJEdEJRVUZCTEUxQlFXaEVReXhUUVVGblJDeFJRVUZvUkVFc1UwRkJaMFE3UVVGQlFTeE5RVUZ5UTBNc1MwRkJjVU1zVVVGQmNrTkJMRXRCUVhGRE8wRkJRVUVzVFVGQk9VSkRMRkZCUVRoQ0xGRkJRVGxDUVN4UlFVRTRRanRCUVVGQkxFMUJRV3BDUXl4TFFVRnBRanM3UVVGRGFrUXNUVUZCVFVNc1RVRkJUU3hIUVVGSFdpeE5RVUZOTEVOQlFXbENMRWxCUVdwQ0xFTkJRWEpDT3p0QlFVTkJMR2RDUVVGNVEwa3NUVUZCVFR0QlFVRkhVeXhKUVVGQlFTeFRRVUZUTEVWQlFVVkVMRTFCUVUwc1EwRkJRMFU3UVVGQmNrSXNTMEZCYVVOSUxFdEJRV3BETEVWQlFTOURPMEZCUVVFc1RVRkJVVWtzV1VGQlVpeFhRVUZSUVN4WlFVRlNPMEZCUVVFc1RVRkJjMEpHTEZOQlFYUkNMRmRCUVhOQ1FTeFRRVUYwUWp0QlFVRkJMRTFCUVdsRFJ5eEhRVUZxUXl4WFFVRnBRMEVzUjBGQmFrTTdPMEZCUTBGbUxFVkJRVUZCTEZOQlFWTXNRMEZCUXp0QlFVRkJMRmRCUVUxakxGbEJRVmtzUTBGQlEwZ3NUVUZCVFN4RFFVRkRSU3hQUVVGU0xFTkJRV3hDTzBGQlFVRXNSMEZCUkN4RlFVRnhReXhEUVVGRFJpeE5RVUZOTEVOQlFVTkZMRTlCUVZJc1EwRkJja01zUTBGQlZEdEJRVU5CV2l4RlFVRkJRU3h0UWtGQmJVSXNRMEZCUTBzc1IwRkJSQ3hGUVVGTk8wRkJRVUVzTWtOQlFWbEpMRXRCUVZvN1FVRkJiVUpMTEUxQlFVRkJMRWRCUVVjc1JVRkJTRUVzUjBGQmJrSTdRVUZCZDBKRExFMUJRVUZCTEVsQlFVa3NSVUZCU2tFc1NVRkJlRUk3UVVGQk9FSktMRTFCUVVGQkxGTkJRVk1zUlVGQlJVUXNUVUZCVFN4RFFVRkRSVHRCUVVGb1JEdEJRVUZCTEVkQlFVNHNSVUZCYTBVc1EwRkJRMFVzUjBGQlJDeERRVUZzUlN4RFFVRnVRanRCUVVOQkxFMUJRVTFGTEUxQlFVMHNSMEZCUjI1Q0xFdEJRVXNzUTBGQlEyOUNMRkZCUVU0c1EwRkJaVU1zVDBGQlppeERRVUYxUWxZc1VVRkJka0lzUTBGQlpqdEJRVU5CTEhOQ1FVTkZMRzlDUVVGRExGRkJRVVFzY1VKQlEwVTdRVUZCU3l4SlFVRkJMRWRCUVVjc1JVRkJSVVVzVFVGQlZqdEJRVUZyUWl4SlFVRkJMRk5CUVZNc1JVRkJSVW9zVTBGQk4wSTdRVUZCZDBNc1NVRkJRU3hMUVVGTE8wRkJRVWxoTEUxQlFVRkJMRkZCUVZFc1JVRkJSU3hEUVVGa08wRkJRV2xDUXl4TlFVRkJRU3hOUVVGTkxFVkJRVVU3UVVGQmVrSXNUMEZCYjBOaUxFdEJRWEJETzBGQlFUZERMRWxCUkVZc1JVRkZSMUVzU1VGQlNTeEpRVUZKUkN4SFFVRlNMRWxCUVdVc1QwRkJUMDRzVVVGQlVDeExRVUZ2UWl4VlFVRnVReXhKUVVGcFJFRXNVVUZCVVN4RFFVRkRPMEZCUVVWUExFbEJRVUZCTEVsQlFVa3NSVUZCU2tFc1NVRkJSanRCUVVGUlJDeEpRVUZCUVN4SFFVRkhMRVZCUVVoQkxFZEJRVkk3UVVGQllVZ3NTVUZCUVVFc1UwRkJVeXhGUVVGVVFUdEJRVUZpTEVkQlFVUXNRMEZHTlVRc1JVRkhSMGtzU1VGQlNTeEpRVU5JUkN4SFFVUkVMRWxCUlVORkxFMUJRVTBzUTBGQlEwWXNSMEZCVUN4RFFVRlhMRlZCUVVOUExFdEJRVVFzUlVGQlVVTXNSMEZCVWl4RlFVRm5RanRCUVVONlFpeFJRVUZKTEU5QlFVOUVMRXRCUVZBc1MwRkJhVUlzVVVGQmNrSXNSVUZCSzBJN1FVRkROMElzTUVKQlFVOTRRaXhMUVVGTExFTkJRVU13UWl4WlFVRk9MR1ZCUVcxQ0xHOUNRVUZETEZGQlFVUXNVVUZCVjBZc1MwRkJXQ3hEUVVGdVFpeEZRVUZwUkR0QlFVRkZReXhSUVVGQlFTeEhRVUZITEVWQlFVaEJPMEZCUVVZc1QwRkJha1FzUTBGQlVEdEJRVU5FT3p0QlFVTkVMRkZCUVVrc1pVRkJRM3BDTEV0QlFVc3NRMEZCUXpKQ0xHTkJRVTRzUTBGQmNVSklMRXRCUVhKQ0xFTkJRVXdzUlVGQmEwTXNUMEZCVHl4SlFVRlFPenRCUVVOc1F5eFJRVUZKUVN4TFFVRkxMRU5CUVVOSkxFbEJRVTRzU1VGQll5eFBRVUZQU2l4TFFVRkxMRU5CUVVOSkxFbEJRV0lzUzBGQmMwSXNVVUZCZUVNc1JVRkJhMFE3UVVGRGFFUXNNRUpCUVU4MVFpeExRVUZMTEVOQlFVTXdRaXhaUVVGT0xFTkJRVzFDUml4TFFVRnVRaXhGUVVFd1FqdEJRVUZGUXl4UlFVRkJRU3hIUVVGSExFVkJRVWhCTzBGQlFVWXNUMEZCTVVJc1EwRkJVRHRCUVVORU96dEJRVU5FTEhkQ1FVRlBla0lzUzBGQlN5eERRVUZETUVJc1dVRkJUaXhEUVVGdFFrWXNTMEZCYmtJc2EwTkJRMFpCTEV0QlFVc3NRMEZCUTFvc1MwRkVTanRCUVVWTVRTeE5RVUZCUVN4SlFVRkpMRVZCUVVwQkxFbEJSa3M3UVVGSFRFUXNUVUZCUVVFc1IwRkJSeXhGUVVGSVFTeEhRVWhMTzBGQlNVeElMRTFCUVVGQkxGTkJRVk1zUlVGQlZFRXNVMEZLU3p0QlFVdE1WeXhOUVVGQlFTeEhRVUZITEVWQlFVaEJPMEZCVEVzc1QwRkJVRHRCUVU5RUxFZEJaa1FzUTBGTVNpeERRVVJHTzBGQmQwSkVMRU5CTDBKblFpeERRVUZhSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OHZJRHh5WldabGNtVnVZMlVnZEhsd1pYTTlYQ0l1TGk5MGVYQmxjMXdpSUM4K1hHNWNibWx0Y0c5eWRDQlNaV0ZqZEN3Z2V5QjFjMlZTWldZc0lIVnpaVVZtWm1WamRDd2dkWE5sU1cxd1pYSmhkR2wyWlVoaGJtUnNaU3dnUm5KaFoyMWxiblFnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUIxYzJWTllYQWdmU0JtY205dElDY3VMM1Z6WlUxaGNDYzdYRzVjYm5SNWNHVWdVbVZ1WkdWeVVISnZjSE1nUFZ4dUlDQjhJSHNnWTJocGJHUnlaVzQ2SUNoa1lYUmhPaUI3SUVGTllYQTZJSFI1Y0dWdlppQkJUV0Z3T3lCdFlYQTZJRUZOWVhBdVRXRndPeUJqYjI1MFlXbHVaWEkvT2lCSVZFMU1SR2wyUld4bGJXVnVkQ0I4SUc1MWJHd2dmU2tnUFQ0Z2RtOXBaQ0I5WEc0Z0lId2dleUJqYUdsc1pISmxiam9nVW1WaFkzUXVVbVZoWTNST2IyUmxJSDA3WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1RXRndVSEp2Y0hNZ1pYaDBaVzVrY3lCQlRXRndMazFoY0VWMlpXNTBjeXdnUVUxaGNDNU5ZWEJQY0hScGIyNXpJSHRjYmlBZ1kyeGhjM05PWVcxbFB6b2dVbVZoWTNRdVNGUk5URUYwZEhKcFluVjBaWE04U0ZSTlRFUnBka1ZzWlcxbGJuUStXeWRqYkdGemMwNWhiV1VuWFR0Y2JpQWdjM1I1YkdVL09pQlNaV0ZqZEM1SVZFMU1RWFIwY21saWRYUmxjenhJVkUxTVJHbDJSV3hsYldWdWRENWJKM04wZVd4bEoxMDdYRzU5WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JOWVhBZ1BTQlNaV0ZqZEM1bWIzSjNZWEprVW1WbVBFMWhjRkJ5YjNCeklDWWdleUJ0WVhBL09pQkJUV0Z3TGsxaGNDQjlMQ0JOWVhCUWNtOXdjeUFtSUZKbGJtUmxjbEJ5YjNCelBpaGNiaUFnS0hzZ1kyeGhjM05PWVcxbExDQnpkSGxzWlN3Z1kyaHBiR1J5Wlc0c0lDNHVMbkJ5YjNCeklIMHNJSEpsWmlrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdWc2JWSmxaaUE5SUhWelpWSmxaanhJVkUxTVJHbDJSV3hsYldWdWRENG9iblZzYkNrN1hHNGdJQ0FnWTI5dWMzUWdleUJ6WlhSRGIyNTBZV2x1WlhJc0lHTnZiblJoYVc1bGNpd2diV0Z3SUgwZ1BTQjFjMlZOWVhBb2V5QmpiMjUwWVdsdVpYSTZJR1ZzYlZKbFppNWpkWEp5Wlc1MExDQXVMaTV3Y205d2N5QjlLVHRjYmlBZ0lDQjFjMlZGWm1abFkzUW9LQ2tnUFQ0Z2MyVjBRMjl1ZEdGcGJtVnlLR1ZzYlZKbFppNWpkWEp5Wlc1MEtTd2dXMlZzYlZKbFppNWpkWEp5Wlc1MFhTazdYRzRnSUNBZ2RYTmxTVzF3WlhKaGRHbDJaVWhoYm1Sc1pTaHlaV1lzSUNncElEMCtJQ2g3SUM0dUxuQnliM0J6TENCdFlYQXNJRUZOWVhBc0lHTnZiblJoYVc1bGNqb2daV3h0VW1WbUxtTjFjbkpsYm5RZ2ZTa3NJRnR0WVhCZEtUdGNiaUFnSUNCamIyNXpkQ0JqYUdsc1pITWdQU0JTWldGamRDNURhR2xzWkhKbGJpNTBiMEZ5Y21GNUtHTm9hV3hrY21WdUtUdGNiaUFnSUNCeVpYUjFjbTRnS0Z4dUlDQWdJQ0FnUEVaeVlXZHRaVzUwUGx4dUlDQWdJQ0FnSUNBOFpHbDJJSEpsWmoxN1pXeHRVbVZtZlNCamJHRnpjMDVoYldVOWUyTnNZWE56VG1GdFpYMGdjM1I1YkdVOWUzc2dabTl1ZEZOcGVtVTZJREVzSUdobGFXZG9kRG9nSnpFd01DVW5MQ0F1TGk1emRIbHNaU0I5ZlNBdlBseHVJQ0FnSUNBZ0lDQjdRVTFoY0NBbUppQnRZWEFnSmlZZ2RIbHdaVzltSUdOb2FXeGtjbVZ1SUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUdOb2FXeGtjbVZ1S0hzZ1FVMWhjQ3dnYldGd0xDQmpiMjUwWVdsdVpYSWdmU2w5WEc0Z0lDQWdJQ0FnSUh0QlRXRndJQ1ltWEc0Z0lDQWdJQ0FnSUNBZ2JXRndJQ1ltWEc0Z0lDQWdJQ0FnSUNBZ1kyaHBiR1J6TG0xaGNDZ29ZMmhwYkdRc0lHdGxlU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCamFHbHNaQ0E5UFQwZ0ozTjBjbWx1WnljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUZKbFlXTjBMbU5zYjI1bFJXeGxiV1Z1ZENnOFJuSmhaMjFsYm5RK2UyTm9hV3hrZlR3dlJuSmhaMjFsYm5RK0xDQjdJR3RsZVNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaFVtVmhZM1F1YVhOV1lXeHBaRVZzWlcxbGJuUW9ZMmhwYkdRcEtTQnlaWFIxY200Z2JuVnNiRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqYUdsc1pDNTBlWEJsSUNZbUlIUjVjR1Z2WmlCamFHbHNaQzUwZVhCbElEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdVbVZoWTNRdVkyeHZibVZGYkdWdFpXNTBLR05vYVd4a0xDQjdJR3RsZVNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQlNaV0ZqZEM1amJHOXVaVVZzWlcxbGJuUW9ZMmhwYkdRc0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0xpNHVZMmhwYkdRdWNISnZjSE1zWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRUZOWVhBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUcxaGNDeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCclpYa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0I5S1gxY2JpQWdJQ0FnSUR3dlJuSmhaMjFsYm5RK1hHNGdJQ0FnS1R0Y2JpQWdmU3hjYmlrN1hHNGlYWDA9IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJtYXBcIiwgXCJ2aXNpYWJsZVwiXTtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VWaXNpYWJsZSwgdXNlRXZlbnRQcm9wZXJ0aWVzLCB1c2VTZXR0aW5nUHJvcGVydGllcyB9IGZyb20gJy4uL2NvbW1vbi9ob29rcyc7XG5leHBvcnQgdmFyIHVzZU1hcmtlciA9IGZ1bmN0aW9uIHVzZU1hcmtlcigpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgbWFwID0gcHJvcHMubWFwLFxuICAgICAgdmlzaWFibGUgPSBwcm9wcy52aXNpYWJsZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBtYXJrZXIgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0TWFya2VyID0gX3VzZVN0YXRlMlsxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghQU1hcCB8fCAhbWFwKSByZXR1cm47XG5cbiAgICBpZiAoIW1hcmtlcikge1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IEFNYXAuTWFya2VyKF9vYmplY3RTcHJlYWQoe30sIG90aGVyKSk7XG4gICAgICBtYXAuYWRkKGluc3RhbmNlKTtcbiAgICAgIHNldE1hcmtlcihpbnN0YW5jZSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5yZW1vdmUoKTtcbiAgICAgICAgICBzZXRNYXJrZXIodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICB9LCBbbWFwXSk7XG4gIHVzZVZpc2lhYmxlKG1hcmtlciwgdmlzaWFibGUpO1xuICB1c2VTZXR0aW5nUHJvcGVydGllcyhtYXJrZXIsIHByb3BzLCBbJ1BhdGgnLCAnQW5jaG9yJywgJ09mZnNldCcsICdBbmltYXRpb24nLCAnQ2xpY2thYmxlJywgJ1Bvc2l0aW9uJywgJ0FuZ2xlJywgJ0xhYmVsJywgJ3pJbmRleCcsICdJY29uJywgJ0RyYWdnYWJsZScsICdDdXJzb3InLCAnQ29udGVudCcsICdNYXAnLCAnVGl0bGUnLCAnVG9wJywgJ1NoYWRvdycsICdTaGFwZScsICdFeHREYXRhJ10pO1xuICB1c2VFdmVudFByb3BlcnRpZXMobWFya2VyLCBwcm9wcywgWydvbkNsaWNrJywgJ29uRGJsQ2xpY2snLCAnb25SaWdodENsaWNrJywgJ29uTW91c2VNb3ZlJywgJ29uTW91c2VPdmVyJywgJ29uTW91c2VPdXQnLCAnb25Nb3VzZURvd24nLCAnb25Nb3VzZVVwJywgJ29uRHJhZ1N0YXJ0JywgJ29uRHJhZ2dpbmcnLCAnb25EcmFnRW5kJywgJ29uTW92aW5nJywgJ29uTW92ZUVuZCcsICdvbk1vdmVBbG9uZycsICdvblRvdWNoU3RhcnQnLCAnb25Ub3VjaE1vdmUnLCAnb25Ub3VjaEVuZCddKTtcbiAgcmV0dXJuIHtcbiAgICBtYXJrZXI6IG1hcmtlcixcbiAgICBzZXRNYXJrZXI6IHNldE1hcmtlclxuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlOWVhKclpYSXZkWE5sVFdGeWEyVnlMblJ6ZUNKZExDSnVZVzFsY3lJNld5SjFjMlZUZEdGMFpTSXNJblZ6WlVWbVptVmpkQ0lzSW5WelpWWnBjMmxoWW14bElpd2lkWE5sUlhabGJuUlFjbTl3WlhKMGFXVnpJaXdpZFhObFUyVjBkR2x1WjFCeWIzQmxjblJwWlhNaUxDSjFjMlZOWVhKclpYSWlMQ0p3Y205d2N5SXNJbTFoY0NJc0luWnBjMmxoWW14bElpd2liM1JvWlhJaUxDSnRZWEpyWlhJaUxDSnpaWFJOWVhKclpYSWlMQ0pCVFdGd0lpd2lhVzV6ZEdGdVkyVWlMQ0pOWVhKclpYSWlMQ0poWkdRaUxDSnlaVzF2ZG1VaUxDSjFibVJsWm1sdVpXUWlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVN4VFFVRlRRU3hSUVVGVUxFVkJRVzFDUXl4VFFVRnVRaXhSUVVGdlF5eFBRVUZ3UXp0QlFVVkJMRk5CUVZORExGZEJRVlFzUlVGQmMwSkRMR3RDUVVGMFFpeEZRVUV3UTBNc2IwSkJRVEZETEZGQlFYTkZMR2xDUVVGMFJUdEJRVWRCTEU5QlFVOHNTVUZCVFVNc1UwRkJVeXhIUVVGSExGTkJRVnBCTEZOQlFWa3NSMEZCTmtJN1FVRkJRU3hOUVVFMVFrTXNTMEZCTkVJc2RVVkJRWEJDTEVWQlFXOUNPenRCUVVOd1JDeE5RVUZSUXl4SFFVRlNMRWRCUVc5RFJDeExRVUZ3UXl4RFFVRlJReXhIUVVGU08wRkJRVUVzVFVGQllVTXNVVUZCWWl4SFFVRnZRMFlzUzBGQmNFTXNRMEZCWVVVc1VVRkJZanRCUVVGQkxFMUJRVEJDUXl4TFFVRXhRaXcwUWtGQmIwTklMRXRCUVhCRE96dEJRVU5CTEd0Q1FVRTBRazRzVVVGQlVTeEZRVUZ3UXp0QlFVRkJPMEZCUVVFc1RVRkJUMVVzVFVGQlVEdEJRVUZCTEUxQlFXVkRMRk5CUVdZN08wRkJRMEZXTEVWQlFVRkJMRk5CUVZNc1EwRkJReXhaUVVGTk8wRkJRMlFzVVVGQlNTeERRVUZEVnl4SlFVRkVMRWxCUVZNc1EwRkJRMHdzUjBGQlpDeEZRVUZ0UWpzN1FVRkRia0lzVVVGQlNTeERRVUZEUnl4TlFVRk1MRVZCUVdFN1FVRkRXQ3hWUVVGSlJ5eFJRVUZ4UWl4SFFVRkhMRWxCUVVsRUxFbEJRVWtzUTBGQlEwVXNUVUZCVkN4dFFrRkJjVUpNTEV0QlFYSkNMRVZCUVRWQ08wRkJRMEZHTEUxQlFVRkJMRWRCUVVjc1EwRkJRMUVzUjBGQlNpeERRVUZSUml4UlFVRlNPMEZCUTBGR0xFMUJRVUZCTEZOQlFWTXNRMEZCUTBVc1VVRkJSQ3hEUVVGVU8wRkJRMEVzWVVGQlR5eFpRVUZOTzBGQlExZ3NXVUZCU1VFc1VVRkJTaXhGUVVGak8wRkJRMXBCTEZWQlFVRkJMRkZCUVZFc1EwRkJRMGNzVFVGQlZEdEJRVU5CVEN4VlFVRkJRU3hUUVVGVExFTkJRVU5OTEZOQlFVUXNRMEZCVkR0QlFVTkVPMEZCUTBZc1QwRk1SRHRCUVUxRUxFdEJXbUVzUTBGaFpEczdRVUZEUkN4SFFXUlJMRVZCWTA0c1EwRkJRMVlzUjBGQlJDeERRV1JOTEVOQlFWUTdRVUZuUWtGTUxFVkJRVUZCTEZkQlFWY3NRMEZCUTFFc1RVRkJSQ3hGUVVGVlJpeFJRVUZXTEVOQlFWZzdRVUZEUVVvc1JVRkJRVUVzYjBKQlFXOUNMRU5CUVhsQ1RTeE5RVUY2UWl4RlFVRnJRMG9zUzBGQmJFTXNSVUZCZVVNc1EwRkRNMFFzVFVGRU1rUXNSVUZGTTBRc1VVRkdNa1FzUlVGSE0wUXNVVUZJTWtRc1JVRkpNMFFzVjBGS01rUXNSVUZMTTBRc1YwRk1Na1FzUlVGTk0wUXNWVUZPTWtRc1JVRlBNMFFzVDBGUU1rUXNSVUZSTTBRc1QwRlNNa1FzUlVGVE0wUXNVVUZVTWtRc1JVRlZNMFFzVFVGV01rUXNSVUZYTTBRc1YwRllNa1FzUlVGWk0wUXNVVUZhTWtRc1JVRmhNMFFzVTBGaU1rUXNSVUZqTTBRc1MwRmtNa1FzUlVGbE0wUXNUMEZtTWtRc1JVRm5Rak5FTEV0QmFFSXlSQ3hGUVdsQ00wUXNVVUZxUWpKRUxFVkJhMEl6UkN4UFFXeENNa1FzUlVGdFFqTkVMRk5CYmtJeVJDeERRVUY2UXl4RFFVRndRanRCUVhGQ1FVZ3NSVUZCUVVFc2EwSkJRV3RDTEVOQlFYbENUeXhOUVVGNlFpeEZRVUZyUTBvc1MwRkJiRU1zUlVGQmVVTXNRMEZEZWtRc1UwRkVlVVFzUlVGRmVrUXNXVUZHZVVRc1JVRkhla1FzWTBGSWVVUXNSVUZKZWtRc1lVRktlVVFzUlVGTGVrUXNZVUZNZVVRc1JVRk5la1FzV1VGT2VVUXNSVUZQZWtRc1lVRlFlVVFzUlVGUmVrUXNWMEZTZVVRc1JVRlRla1FzWVVGVWVVUXNSVUZWZWtRc1dVRldlVVFzUlVGWGVrUXNWMEZZZVVRc1JVRlpla1FzVlVGYWVVUXNSVUZoZWtRc1YwRmllVVFzUlVGamVrUXNZVUZrZVVRc1JVRmxla1FzWTBGbWVVUXNSVUZuUW5wRUxHRkJhRUo1UkN4RlFXbENla1FzV1VGcVFubEVMRU5CUVhwRExFTkJRV3hDTzBGQmJVSkJMRk5CUVU4N1FVRkRURWtzU1VGQlFVRXNUVUZCVFN4RlFVRk9RU3hOUVVSTE8wRkJSVXhETEVsQlFVRkJMRk5CUVZNc1JVRkJWRUU3UVVGR1N5eEhRVUZRTzBGQlNVUXNRMEZvUlUwaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QjFjMlZUZEdGMFpTd2dkWE5sUldabVpXTjBJSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dUV0Z5YTJWeVVISnZjSE1nZlNCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QjFjMlZXYVhOcFlXSnNaU3dnZFhObFJYWmxiblJRY205d1pYSjBhV1Z6TENCMWMyVlRaWFIwYVc1blVISnZjR1Z5ZEdsbGN5QjlJR1p5YjIwZ0p5NHVMMk52YlcxdmJpOW9iMjlyY3ljN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdWWE5sVFdGeWEyVnlJR1Y0ZEdWdVpITWdUV0Z5YTJWeVVISnZjSE1nZTMxY2JtVjRjRzl5ZENCamIyNXpkQ0IxYzJWTllYSnJaWElnUFNBb2NISnZjSE1nUFNCN2ZTQmhjeUJWYzJWTllYSnJaWElwSUQwK0lIdGNiaUFnWTI5dWMzUWdleUJ0WVhBc0lIWnBjMmxoWW14bExDQXVMaTV2ZEdobGNpQjlJRDBnY0hKdmNITTdYRzRnSUdOdmJuTjBJRnR0WVhKclpYSXNJSE5sZEUxaGNtdGxjbDBnUFNCMWMyVlRkR0YwWlR4QlRXRndMazFoY210bGNqNG9LVHRjYmlBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0JwWmlBb0lVRk5ZWEFnZkh3Z0lXMWhjQ2tnY21WMGRYSnVPMXh1SUNBZ0lHbG1JQ2doYldGeWEyVnlLU0I3WEc0Z0lDQWdJQ0JzWlhRZ2FXNXpkR0Z1WTJVNklFRk5ZWEF1VFdGeWEyVnlJRDBnYm1WM0lFRk5ZWEF1VFdGeWEyVnlLSHNnTGk0dWIzUm9aWElnZlNrN1hHNGdJQ0FnSUNCdFlYQXVZV1JrS0dsdWMzUmhibU5sS1R0Y2JpQWdJQ0FnSUhObGRFMWhjbXRsY2locGJuTjBZVzVqWlNrN1hHNGdJQ0FnSUNCeVpYUjFjbTRnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JwWmlBb2FXNXpkR0Z1WTJVcElIdGNiaUFnSUNBZ0lDQWdJQ0JwYm5OMFlXNWpaUzV5WlcxdmRtVW9LVHRjYmlBZ0lDQWdJQ0FnSUNCelpYUk5ZWEpyWlhJb2RXNWtaV1pwYm1Wa0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzRnSUNBZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElISmxZV04wTFdodmIydHpMMlY0YUdGMWMzUnBkbVV0WkdWd2MxeHVJQ0I5TENCYmJXRndYU2s3WEc1Y2JpQWdkWE5sVm1semFXRmliR1VvYldGeWEyVnlJU3dnZG1semFXRmliR1VwTzF4dUlDQjFjMlZUWlhSMGFXNW5VSEp2Y0dWeWRHbGxjenhCVFdGd0xrMWhjbXRsY2l3Z1ZYTmxUV0Z5YTJWeVBpaHRZWEpyWlhJaExDQndjbTl3Y3l3Z1cxeHVJQ0FnSUNkUVlYUm9KeXhjYmlBZ0lDQW5RVzVqYUc5eUp5eGNiaUFnSUNBblQyWm1jMlYwSnl4Y2JpQWdJQ0FuUVc1cGJXRjBhVzl1Snl4Y2JpQWdJQ0FuUTJ4cFkydGhZbXhsSnl4Y2JpQWdJQ0FuVUc5emFYUnBiMjRuTEZ4dUlDQWdJQ2RCYm1kc1pTY3NYRzRnSUNBZ0oweGhZbVZzSnl4Y2JpQWdJQ0FuZWtsdVpHVjRKeXhjYmlBZ0lDQW5TV052Ymljc1hHNGdJQ0FnSjBSeVlXZG5ZV0pzWlNjc1hHNGdJQ0FnSjBOMWNuTnZjaWNzWEc0Z0lDQWdKME52Ym5SbGJuUW5MRnh1SUNBZ0lDZE5ZWEFuTEZ4dUlDQWdJQ2RVYVhSc1pTY3NYRzRnSUNBZ0oxUnZjQ2NzWEc0Z0lDQWdKMU5vWVdSdmR5Y3NYRzRnSUNBZ0oxTm9ZWEJsSnl4Y2JpQWdJQ0FuUlhoMFJHRjBZU2NzWEc0Z0lGMHBPMXh1SUNCMWMyVkZkbVZ1ZEZCeWIzQmxjblJwWlhNOFFVMWhjQzVOWVhKclpYSXNJRlZ6WlUxaGNtdGxjajRvYldGeWEyVnlJU3dnY0hKdmNITXNJRnRjYmlBZ0lDQW5iMjVEYkdsamF5Y3NYRzRnSUNBZ0oyOXVSR0pzUTJ4cFkyc25MRnh1SUNBZ0lDZHZibEpwWjJoMFEyeHBZMnNuTEZ4dUlDQWdJQ2R2YmsxdmRYTmxUVzkyWlNjc1hHNGdJQ0FnSjI5dVRXOTFjMlZQZG1WeUp5eGNiaUFnSUNBbmIyNU5iM1Z6WlU5MWRDY3NYRzRnSUNBZ0oyOXVUVzkxYzJWRWIzZHVKeXhjYmlBZ0lDQW5iMjVOYjNWelpWVndKeXhjYmlBZ0lDQW5iMjVFY21GblUzUmhjblFuTEZ4dUlDQWdJQ2R2YmtSeVlXZG5hVzVuSnl4Y2JpQWdJQ0FuYjI1RWNtRm5SVzVrSnl4Y2JpQWdJQ0FuYjI1TmIzWnBibWNuTEZ4dUlDQWdJQ2R2YmsxdmRtVkZibVFuTEZ4dUlDQWdJQ2R2YmsxdmRtVkJiRzl1Wnljc1hHNGdJQ0FnSjI5dVZHOTFZMmhUZEdGeWRDY3NYRzRnSUNBZ0oyOXVWRzkxWTJoTmIzWmxKeXhjYmlBZ0lDQW5iMjVVYjNWamFFVnVaQ2NzWEc0Z0lGMHBPMXh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJRzFoY210bGNpeGNiaUFnSUNCelpYUk5ZWEpyWlhJc1hHNGdJSDA3WEc1OU8xeHVJbDE5IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNYXJrZXIgfSBmcm9tICcuL3VzZU1hcmtlcic7XG5leHBvcnQgdmFyIE1hcmtlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfdXNlTWFya2VyID0gdXNlTWFya2VyKHByb3BzKSxcbiAgICAgIG1hcmtlciA9IF91c2VNYXJrZXIubWFya2VyO1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgbWFya2VyOiBtYXJrZXJcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBudWxsO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5TllYSnJaWEl2YVc1a1pYZ3VkSE40SWwwc0ltNWhiV1Z6SWpwYklsSmxZV04wSWl3aWRYTmxTVzF3WlhKaGRHbDJaVWhoYm1Sc1pTSXNJblZ6WlUxaGNtdGxjaUlzSWsxaGNtdGxjaUlzSW1admNuZGhjbVJTWldZaUxDSndjbTl3Y3lJc0luSmxaaUlzSW0xaGNtdGxjaUpkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEU5QlFVOUJMRXRCUVZBc1NVRkJaMEpETEcxQ1FVRm9RaXhSUVVFeVF5eFBRVUV6UXp0QlFVVkJMRk5CUVZORExGTkJRVlFzVVVGQk1FSXNZVUZCTVVJN1FVRkpRU3hQUVVGUExFbEJRVTFETEUxQlFVMHNaMEpCUVVkSUxFdEJRVXNzUTBGQlEwa3NWVUZCVGl4RFFVRnpSU3hWUVVGRFF5eExRVUZFTEVWQlFWRkRMRWRCUVZJc1JVRkJaMEk3UVVGRE1VY3NiVUpCUVcxQ1NpeFRRVUZUTEVOQlFVTkhMRXRCUVVRc1EwRkJOVUk3UVVGQlFTeE5RVUZSUlN4TlFVRlNMR05CUVZGQkxFMUJRVkk3TzBGQlEwRk9MRVZCUVVGQkxHMUNRVUZ0UWl4RFFVRkRTeXhIUVVGRUxFVkJRVTA3UVVGQlFTd3lRMEZCV1VRc1MwRkJXanRCUVVGdFFrVXNUVUZCUVVFc1RVRkJUU3hGUVVGT1FUdEJRVUZ1UWp0QlFVRkJMRWRCUVU0c1EwRkJia0k3UVVGRFFTeFRRVUZQTEVsQlFWQTdRVUZEUkN4RFFVcHhRaXhEUVVGbUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxZV04wTENCN0lIVnpaVWx0Y0dWeVlYUnBkbVZJWVc1a2JHVWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5QlBkbVZ5YkdGNVVISnZjSE1nZlNCbWNtOXRJQ2N1TGk5amIyMXRiMjR2YldGd0p6dGNibWx0Y0c5eWRDQjdJSFZ6WlUxaGNtdGxjaUI5SUdaeWIyMGdKeTR2ZFhObFRXRnlhMlZ5Snp0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQk5ZWEpyWlhKUWNtOXdjeUJsZUhSbGJtUnpJRTkyWlhKc1lYbFFjbTl3Y3l3Z1FVMWhjQzVOWVhKclpYSkZkbVZ1ZEhNc0lFRk5ZWEF1VFdGeWEyVnlUM0IwYVc5dWN5QjdmVnh1WEc1bGVIQnZjblFnWTI5dWMzUWdUV0Z5YTJWeUlEMGdVbVZoWTNRdVptOXlkMkZ5WkZKbFpqeE5ZWEpyWlhKUWNtOXdjeUFtSUhzZ2JXRnlhMlZ5UHpvZ1FVMWhjQzVOWVhKclpYSWdmU3dnVFdGeWEyVnlVSEp2Y0hNK0tDaHdjbTl3Y3l3Z2NtVm1LU0E5UGlCN1hHNGdJR052Ym5OMElIc2diV0Z5YTJWeUlIMGdQU0IxYzJWTllYSnJaWElvY0hKdmNITXBPMXh1SUNCMWMyVkpiWEJsY21GMGFYWmxTR0Z1Wkd4bEtISmxaaXdnS0NrZ1BUNGdLSHNnTGk0dWNISnZjSE1zSUcxaGNtdGxjaUI5S1NrN1hHNGdJSEpsZEhWeWJpQnVkV3hzTzF4dWZTazdYRzRpWFgwPSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wibWFwXCIsIFwicG9zaXRpb25cIl07XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRXZlbnRQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vY29tbW9uL2hvb2tzJztcbmV4cG9ydCB2YXIgdXNlQ29udGV4dE1lbnUgPSBmdW5jdGlvbiB1c2VDb250ZXh0TWVudSgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgbWFwID0gcHJvcHMubWFwLFxuICAgICAgcG9zaXRpb24gPSBwcm9wcy5wb3NpdGlvbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBfZXhjbHVkZWQpO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBjb250ZXh0TWVudSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRDb250ZXh0TWVudSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUFNYXAgfHwgIW1hcCkgcmV0dXJuO1xuXG4gICAgaWYgKCFjb250ZXh0TWVudSkge1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IEFNYXAuQ29udGV4dE1lbnUoX29iamVjdFNwcmVhZCh7fSwgb3RoZXIpKTtcbiAgICAgIHNldENvbnRleHRNZW51KGluc3RhbmNlKTtcblxuICAgICAgdmFyIHJpZ2h0Y2xpY2sgPSBmdW5jdGlvbiByaWdodGNsaWNrKGUpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLm9wZW4obWFwLCBwb3NpdGlvbiB8fCBlLmxuZ2xhdCk7XG4gICAgICB9O1xuXG4gICAgICBtYXAub24oJ3JpZ2h0Y2xpY2snLCByaWdodGNsaWNrKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgIG1hcC5vZmYoJ3JpZ2h0Y2xpY2snLCByaWdodGNsaWNrKTtcbiAgICAgICAgICBtYXAgJiYgbWFwLnJlbW92ZUxheWVyKGluc3RhbmNlKTtcbiAgICAgICAgICBzZXRDb250ZXh0TWVudSh1bmRlZmluZWQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW21hcF0pO1xuICB1c2VFdmVudFByb3BlcnRpZXMoY29udGV4dE1lbnUsIHByb3BzLCBbJ29uT3BlbicsICdvbkNsb3NlJ10pO1xuICByZXR1cm4ge1xuICAgIGNvbnRleHRNZW51OiBjb250ZXh0TWVudSxcbiAgICBzZXRDb250ZXh0TWVudTogc2V0Q29udGV4dE1lbnVcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5RGIyNTBaWGgwVFdWdWRTOTFjMlZEYjI1MFpYaDBUV1Z1ZFM1MGMzZ2lYU3dpYm1GdFpYTWlPbHNpZFhObFUzUmhkR1VpTENKMWMyVkZabVpsWTNRaUxDSjFjMlZGZG1WdWRGQnliM0JsY25ScFpYTWlMQ0oxYzJWRGIyNTBaWGgwVFdWdWRTSXNJbkJ5YjNCeklpd2liV0Z3SWl3aWNHOXphWFJwYjI0aUxDSnZkR2hsY2lJc0ltTnZiblJsZUhSTlpXNTFJaXdpYzJWMFEyOXVkR1Y0ZEUxbGJuVWlMQ0pCVFdGd0lpd2lhVzV6ZEdGdVkyVWlMQ0pEYjI1MFpYaDBUV1Z1ZFNJc0luSnBaMmgwWTJ4cFkyc2lMQ0psSWl3aWIzQmxiaUlzSW14dVoyeGhkQ0lzSW05dUlpd2liMlptSWl3aWNtVnRiM1psVEdGNVpYSWlMQ0oxYm1SbFptbHVaV1FpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFTeFRRVUZUUVN4UlFVRlVMRVZCUVcxQ1F5eFRRVUZ1UWl4UlFVRnZReXhQUVVGd1F6dEJRVVZCTEZOQlFWTkRMR3RDUVVGVUxGRkJRVzFETEdsQ1FVRnVRenRCUVVkQkxFOUJRVThzU1VGQlRVTXNZMEZCWXl4SFFVRkhMRk5CUVdwQ1FTeGpRVUZwUWl4SFFVRnJRenRCUVVGQkxFMUJRV3BEUXl4TFFVRnBReXgxUlVGQmVrSXNSVUZCZVVJN08wRkJRemxFTEUxQlFWRkRMRWRCUVZJc1IwRkJiME5FTEV0QlFYQkRMRU5CUVZGRExFZEJRVkk3UVVGQlFTeE5RVUZoUXl4UlFVRmlMRWRCUVc5RFJpeExRVUZ3UXl4RFFVRmhSU3hSUVVGaU8wRkJRVUVzVFVGQk1FSkRMRXRCUVRGQ0xEUkNRVUZ2UTBnc1MwRkJjRU03TzBGQlEwRXNhMEpCUVhORFNpeFJRVUZSTEVWQlFUbERPMEZCUVVFN1FVRkJRU3hOUVVGUFVTeFhRVUZRTzBGQlFVRXNUVUZCYjBKRExHTkJRWEJDT3p0QlFVTkJVaXhGUVVGQlFTeFRRVUZUTEVOQlFVTXNXVUZCVFR0QlFVTmtMRkZCUVVrc1EwRkJRMU1zU1VGQlJDeEpRVUZUTEVOQlFVTk1MRWRCUVdRc1JVRkJiVUk3TzBGQlEyNUNMRkZCUVVrc1EwRkJRMGNzVjBGQlRDeEZRVUZyUWp0QlFVTm9RaXhWUVVGSlJ5eFJRVUV3UWl4SFFVRkhMRWxCUVVsRUxFbEJRVWtzUTBGQlEwVXNWMEZCVkN4dFFrRkJNRUpNTEV0QlFURkNMRVZCUVdwRE8wRkJRMEZGTEUxQlFVRkJMR05CUVdNc1EwRkJRMFVzVVVGQlJDeERRVUZrT3p0QlFVTkJMRlZCUVUxRkxGVkJRVlVzUjBGQlJ5eFRRVUZpUVN4VlFVRmhMRU5CUVVORExFTkJRVVE3UVVGQlFTeGxRVUYxUWtnc1VVRkJVU3hEUVVGRFNTeEpRVUZVTEVOQlFXTldMRWRCUVdRc1JVRkJiVUpETEZGQlFWRXNTVUZCU1ZFc1EwRkJReXhEUVVGRFJTeE5RVUZxUXl4RFFVRjJRanRCUVVGQkxFOUJRVzVDT3p0QlFVTkJXQ3hOUVVGQlFTeEhRVUZITEVOQlFVTlpMRVZCUVVvc1EwRkJUeXhaUVVGUUxFVkJRWEZDU2l4VlFVRnlRanRCUVVOQkxHRkJRVThzV1VGQlRUdEJRVU5ZTEZsQlFVbEdMRkZCUVVvc1JVRkJZenRCUVVOYVRpeFZRVUZCUVN4SFFVRkhMRU5CUVVOaExFZEJRVW9zUTBGQlVTeFpRVUZTTEVWQlFYTkNUQ3hWUVVGMFFqdEJRVU5CVWl4VlFVRkJRU3hIUVVGSExFbEJRVWxCTEVkQlFVY3NRMEZCUTJNc1YwRkJTaXhEUVVGblFsSXNVVUZCYUVJc1EwRkJVRHRCUVVOQlJpeFZRVUZCUVN4alFVRmpMRU5CUVVOWExGTkJRVVFzUTBGQlpEdEJRVU5FTzBGQlEwWXNUMEZPUkR0QlFVOUVPMEZCUTBZc1IwRm1VU3hGUVdWT0xFTkJRVU5tTEVkQlFVUXNRMEZtVFN4RFFVRlVPMEZCWjBKQlNDeEZRVUZCUVN4clFrRkJhMElzUTBGQmJVTk5MRmRCUVc1RExFVkJRV2xFU2l4TFFVRnFSQ3hGUVVGM1JDeERRVUZETEZGQlFVUXNSVUZCVnl4VFFVRllMRU5CUVhoRUxFTkJRV3hDTzBGQlEwRXNVMEZCVHp0QlFVTk1TU3hKUVVGQlFTeFhRVUZYTEVWQlFWaEJMRmRCUkVzN1FVRkZURU1zU1VGQlFVRXNZMEZCWXl4RlFVRmtRVHRCUVVaTExFZEJRVkE3UVVGSlJDeERRWGhDVFNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lIVnpaVk4wWVhSbExDQjFjMlZGWm1abFkzUWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5QkRiMjUwWlhoMFRXVnVkVkJ5YjNCeklIMGdabkp2YlNBbkxpYzdYRzVwYlhCdmNuUWdleUIxYzJWRmRtVnVkRkJ5YjNCbGNuUnBaWE1nZlNCbWNtOXRJQ2N1TGk5amIyMXRiMjR2YUc5dmEzTW5PMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUZWelpVTnZiblJsZUhSTlpXNTFJR1Y0ZEdWdVpITWdRMjl1ZEdWNGRFMWxiblZRY205d2N5QjdmVnh1Wlhod2IzSjBJR052Ym5OMElIVnpaVU52Ym5SbGVIUk5aVzUxSUQwZ0tIQnliM0J6SUQwZ2UzMGdZWE1nVlhObFEyOXVkR1Y0ZEUxbGJuVXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2V5QnRZWEFzSUhCdmMybDBhVzl1TENBdUxpNXZkR2hsY2lCOUlEMGdjSEp2Y0hNN1hHNGdJR052Ym5OMElGdGpiMjUwWlhoMFRXVnVkU3dnYzJWMFEyOXVkR1Y0ZEUxbGJuVmRJRDBnZFhObFUzUmhkR1U4UVUxaGNDNURiMjUwWlhoMFRXVnVkVDRvS1R0Y2JpQWdkWE5sUldabVpXTjBLQ2dwSUQwK0lIdGNiaUFnSUNCcFppQW9JVUZOWVhBZ2ZId2dJVzFoY0NrZ2NtVjBkWEp1TzF4dUlDQWdJR2xtSUNnaFkyOXVkR1Y0ZEUxbGJuVXBJSHRjYmlBZ0lDQWdJR3hsZENCcGJuTjBZVzVqWlRvZ1FVMWhjQzVEYjI1MFpYaDBUV1Z1ZFNBOUlHNWxkeUJCVFdGd0xrTnZiblJsZUhSTlpXNTFLSHNnTGk0dWIzUm9aWElnZlNrN1hHNGdJQ0FnSUNCelpYUkRiMjUwWlhoMFRXVnVkU2hwYm5OMFlXNWpaU2s3WEc0Z0lDQWdJQ0JqYjI1emRDQnlhV2RvZEdOc2FXTnJJRDBnS0dVNklFRk5ZWEF1VFdGd2MwVjJaVzUwS1NBOVBpQnBibk4wWVc1alpTNXZjR1Z1S0cxaGNDd2djRzl6YVhScGIyNGdmSHdnWlM1c2JtZHNZWFFwTzF4dUlDQWdJQ0FnYldGd0xtOXVLQ2R5YVdkb2RHTnNhV05ySnl3Z2NtbG5hSFJqYkdsamF5azdYRzRnSUNBZ0lDQnlaWFIxY200Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCcFppQW9hVzV6ZEdGdVkyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCdFlYQXViMlptS0NkeWFXZG9kR05zYVdOckp5d2djbWxuYUhSamJHbGpheWs3WEc0Z0lDQWdJQ0FnSUNBZ2JXRndJQ1ltSUcxaGNDNXlaVzF2ZG1WTVlYbGxjaWhwYm5OMFlXNWpaU2s3WEc0Z0lDQWdJQ0FnSUNBZ2MyVjBRMjl1ZEdWNGRFMWxiblVvZFc1a1pXWnBibVZrS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNGdJSDBzSUZ0dFlYQmRLVHRjYmlBZ2RYTmxSWFpsYm5SUWNtOXdaWEowYVdWelBFRk5ZWEF1UTI5dWRHVjRkRTFsYm5Vc0lGVnpaVU52Ym5SbGVIUk5aVzUxUGloamIyNTBaWGgwVFdWdWRTRXNJSEJ5YjNCekxDQmJKMjl1VDNCbGJpY3NJQ2R2YmtOc2IzTmxKMTBwTzF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUdOdmJuUmxlSFJOWlc1MUxGeHVJQ0FnSUhObGRFTnZiblJsZUhSTlpXNTFMRnh1SUNCOU8xeHVmVHRjYmlKZGZRPT0iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX3Byb3BzJHRleHQgPSBwcm9wcy50ZXh0LFxuICAgICAgdGV4dCA9IF9wcm9wcyR0ZXh0ID09PSB2b2lkIDAgPyAnJyA6IF9wcm9wcyR0ZXh0LFxuICAgICAgX3Byb3BzJG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrLFxuICAgICAgb25DbGljayA9IF9wcm9wcyRvbkNsaWNrID09PSB2b2lkIDAgPyBub29wIDogX3Byb3BzJG9uQ2xpY2s7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb3BzLmNvbnRleHRNZW51KSB7XG4gICAgICBwcm9wcy5jb250ZXh0TWVudS5hZGRJdGVtKHRleHQsIG9uQ2xpY2ssIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJvcHMuY29udGV4dE1lbnUpIHtcbiAgICAgICAgcHJvcHMuY29udGV4dE1lbnUucmVtb3ZlSXRlbSh0ZXh0LCBvbkNsaWNrKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbcHJvcHMuY29udGV4dE1lbnUsIHByb3BzLnRleHQsIHByb3BzLm9uQ2xpY2tdKTtcbiAgcmV0dXJuIG51bGw7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlEYjI1MFpYaDBUV1Z1ZFM5SmRHVnRMblJ6ZUNKZExDSnVZVzFsY3lJNld5SjFjMlZGWm1abFkzUWlMQ0p1YjI5d0lpd2ljSEp2Y0hNaUxDSjBaWGgwSWl3aWIyNURiR2xqYXlJc0ltTnZiblJsZUhSTlpXNTFJaXdpWVdSa1NYUmxiU0lzSW5KbGJXOTJaVWwwWlcwaVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxGTkJRVk5CTEZOQlFWUXNVVUZCTUVJc1QwRkJNVUk3TzBGQlUwRXNTVUZCVFVNc1NVRkJTU3hIUVVGSExGTkJRVkJCTEVsQlFVOHNSMEZCV1N4RFFVRkZMRU5CUVROQ096dEJRVVZCTEdkQ1FVRmxMRmxCUVdsRE8wRkJRVUVzVFVGQmFFTkRMRXRCUVdkRExIVkZRVUZRTEVWQlFVODdRVUZET1VNc2IwSkJRWE5EUVN4TFFVRjBReXhEUVVGUlF5eEpRVUZTTzBGQlFVRXNUVUZCVVVFc1NVRkJVaXcwUWtGQlpTeEZRVUZtTzBGQlFVRXNkVUpCUVhORFJDeExRVUYwUXl4RFFVRnRRa1VzVDBGQmJrSTdRVUZCUVN4TlFVRnRRa0VzVDBGQmJrSXNLMEpCUVRaQ1NDeEpRVUUzUWp0QlFVTkJSQ3hGUVVGQlFTeFRRVUZUTEVOQlFVTXNXVUZCVFR0QlFVTmtMRkZCUVVsRkxFdEJRVXNzUTBGQlEwY3NWMEZCVml4RlFVRjFRanRCUVVOeVFrZ3NUVUZCUVVFc1MwRkJTeXhEUVVGRFJ5eFhRVUZPTEVOQlFXdENReXhQUVVGc1FpeERRVUV3UWtnc1NVRkJNVUlzUlVGQlowTkRMRTlCUVdoRExFVkJRWGxETEVOQlFYcERPMEZCUTBRN08wRkJRMFFzVjBGQlR5eFpRVUZOTzBGQlExZ3NWVUZCU1VZc1MwRkJTeXhEUVVGRFJ5eFhRVUZXTEVWQlFYVkNPMEZCUTNKQ1NDeFJRVUZCUVN4TFFVRkxMRU5CUVVOSExGZEJRVTRzUTBGQmEwSkZMRlZCUVd4Q0xFTkJRVFpDU2l4SlFVRTNRaXhGUVVGdFEwTXNUMEZCYmtNN1FVRkRSRHRCUVVOR0xFdEJTa1E3UVVGTFJDeEhRVlJSTEVWQlUwNHNRMEZCUTBZc1MwRkJTeXhEUVVGRFJ5eFhRVUZRTEVWQlFXOUNTQ3hMUVVGTExFTkJRVU5ETEVsQlFURkNMRVZCUVdkRFJDeExRVUZMTEVOQlFVTkZMRTlCUVhSRExFTkJWRTBzUTBGQlZEdEJRVlZCTEZOQlFVOHNTVUZCVUR0QlFVTkVMRU5CWWtRaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QjFjMlZGWm1abFkzUWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5Qk5ZWEJEYUdsc1pGQnliM0J6SUgwZ1puSnZiU0FuTGk0dlkyOXRiVzl1TDIxaGNDYzdYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5dWRHVjRkRTFsYm5WSmRHVnRJR1Y0ZEdWdVpITWdUV0Z3UTJocGJHUlFjbTl3Y3lCN1hHNGdJR052Ym5SbGVIUk5aVzUxUHpvZ1FVMWhjQzVEYjI1MFpYaDBUV1Z1ZFR0Y2JpQWdkR1Y0ZEQ4NklITjBjbWx1Wnp0Y2JpQWdiMjVEYkdsamF6ODZJQ2hsZG1WdWREb2dUVzkxYzJWRmRtVnVkQ2tnUFQ0Z2RtOXBaRHRjYm4xY2JseHVZMjl1YzNRZ2JtOXZjQ0E5SUdaMWJtTjBhVzl1SUNncElIdDlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvY0hKdmNITTZJRU52Ym5SbGVIUk5aVzUxU1hSbGJTQTlJSHQ5S1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnZEdWNGRDQTlJQ2NuTENCdmJrTnNhV05ySUQwZ2JtOXZjQ0I5SUQwZ2NISnZjSE03WEc0Z0lIVnpaVVZtWm1WamRDZ29LU0E5UGlCN1hHNGdJQ0FnYVdZZ0tIQnliM0J6TG1OdmJuUmxlSFJOWlc1MUtTQjdYRzRnSUNBZ0lDQndjbTl3Y3k1amIyNTBaWGgwVFdWdWRTNWhaR1JKZEdWdEtIUmxlSFFzSUc5dVEyeHBZMnNzSURFcE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ2FXWWdLSEJ5YjNCekxtTnZiblJsZUhSTlpXNTFLU0I3WEc0Z0lDQWdJQ0FnSUhCeWIzQnpMbU52Ym5SbGVIUk5aVzUxTG5KbGJXOTJaVWwwWlcwb2RHVjRkQ3dnYjI1RGJHbGpheWs3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmlBZ2ZTd2dXM0J5YjNCekxtTnZiblJsZUhSTlpXNTFMQ0J3Y205d2N5NTBaWGgwTENCd2NtOXdjeTV2YmtOc2FXTnJYU2s3WEc0Z0lISmxkSFZ5YmlCdWRXeHNPMXh1ZlR0Y2JpSmRmUT09IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUltcGVyYXRpdmVIYW5kbGUsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dE1lbnUgfSBmcm9tICcuL3VzZUNvbnRleHRNZW51JztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG52YXIgQ29udGV4dE1lbnUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX3VzZUNvbnRleHRNZW51ID0gdXNlQ29udGV4dE1lbnUocHJvcHMpLFxuICAgICAgY29udGV4dE1lbnUgPSBfdXNlQ29udGV4dE1lbnUuY29udGV4dE1lbnU7XG5cbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcyksIHt9LCB7XG4gICAgICBjb250ZXh0TWVudTogY29udGV4dE1lbnVcbiAgICB9KTtcbiAgfSk7XG4gIHZhciBjaGlsZHMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBBTWFwICYmIGNvbnRleHRNZW51ICYmIGNoaWxkcy5tYXAoZnVuY3Rpb24gKGNoaWxkLCBrZXkpIHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjaGlsZC5wcm9wcyksIHt9LCB7XG4gICAgICBBTWFwOiBBTWFwLFxuICAgICAgbWFwOiBwcm9wcy5tYXAsXG4gICAgICBjb250ZXh0TWVudTogY29udGV4dE1lbnUsXG4gICAgICBrZXk6IGtleVxuICAgIH0pKTtcbiAgfSkpO1xufSk7XG5Db250ZXh0TWVudS5JdGVtID0gSXRlbTtcbmV4cG9ydCBkZWZhdWx0IENvbnRleHRNZW51O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OURiMjUwWlhoMFRXVnVkUzlwYm1SbGVDNTBjM2dpWFN3aWJtRnRaWE1pT2xzaVVtVmhZM1FpTENKMWMyVkpiWEJsY21GMGFYWmxTR0Z1Wkd4bElpd2lSbkpoWjIxbGJuUWlMQ0oxYzJWRGIyNTBaWGgwVFdWdWRTSXNJa2wwWlcwaUxDSkRiMjUwWlhoMFRXVnVkU0lzSW1admNuZGhjbVJTWldZaUxDSndjbTl3Y3lJc0luSmxaaUlzSW1OdmJuUmxlSFJOWlc1MUlpd2lZMmhwYkdSeklpd2lRMmhwYkdSeVpXNGlMQ0owYjBGeWNtRjVJaXdpWTJocGJHUnlaVzRpTENKQlRXRndJaXdpYldGd0lpd2lZMmhwYkdRaUxDSnJaWGtpTENKcGMxWmhiR2xrUld4bGJXVnVkQ0lzSW1Oc2IyNWxSV3hsYldWdWRDSmRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRTlCUVU5QkxFdEJRVkFzU1VGQlowSkRMRzFDUVVGb1FpeEZRVUZ4UTBNc1VVRkJja01zVVVGQmNVUXNUMEZCY2tRN1FVRkZRU3hUUVVGVFF5eGpRVUZVTEZGQlFTdENMR3RDUVVFdlFqdEJRVU5CTEU5QlFVOURMRWxCUVZBc1RVRkJhVUlzVVVGQmFrSTdRVUZKUVN4SlFVRk5ReXhYUVVGWExHZENRVUZIVEN4TFFVRkxMRU5CUVVOTkxGVkJRVTRzUTBGQmNVUXNWVUZCUTBNc1MwRkJSQ3hGUVVGUlF5eEhRVUZTTEVWQlFXZENPMEZCUTNaR0xIZENRVUYzUWt3c1kwRkJZeXhEUVVGRFNTeExRVUZFTEVOQlFYUkRPMEZCUVVFc1RVRkJVVVVzVjBGQlVpeHRRa0ZCVVVFc1YwRkJVanM3UVVGRFFWSXNSVUZCUVVFc2JVSkJRVzFDTEVOQlFVTlBMRWRCUVVRc1JVRkJUVHRCUVVGQkxESkRRVUZaUkN4TFFVRmFPMEZCUVcxQ1JTeE5RVUZCUVN4WFFVRlhMRVZCUVZoQk8wRkJRVzVDTzBGQlFVRXNSMEZCVGl4RFFVRnVRanRCUVVOQkxFMUJRVTFETEUxQlFVMHNSMEZCUjFZc1MwRkJTeXhEUVVGRFZ5eFJRVUZPTEVOQlFXVkRMRTlCUVdZc1EwRkJkVUpNTEV0QlFVc3NRMEZCUTAwc1VVRkJOMElzUTBGQlpqdEJRVU5CTEhOQ1FVTkZMRzlDUVVGRExGRkJRVVFzVVVGRFIwTXNTVUZCU1N4SlFVTklUQ3hYUVVSRUxFbEJSVU5ETEUxQlFVMHNRMEZCUTBzc1IwRkJVQ3hEUVVGWExGVkJRVU5ETEV0QlFVUXNSVUZCVVVNc1IwRkJVaXhGUVVGblFqdEJRVU42UWl4UlFVRkpMR1ZCUVVOcVFpeExRVUZMTEVOQlFVTnJRaXhqUVVGT0xFTkJRWEZDUml4TFFVRnlRaXhEUVVGTUxFVkJRV3RETEU5QlFVOHNTVUZCVUR0QlFVTnNReXgzUWtGQlQyaENMRXRCUVVzc1EwRkJRMjFDTEZsQlFVNHNRMEZCYlVKSUxFdEJRVzVDTEd0RFFVRXJRa0VzUzBGQlN5eERRVUZEVkN4TFFVRnlRenRCUVVFMFEwOHNUVUZCUVVFc1NVRkJTU3hGUVVGS1FTeEpRVUUxUXp0QlFVRnJSRU1zVFVGQlFVRXNSMEZCUnl4RlFVRkZVaXhMUVVGTExFTkJRVU5STEVkQlFUZEVPMEZCUVd0RlRpeE5RVUZCUVN4WFFVRlhMRVZCUVZoQkxGZEJRV3hGTzBGQlFTdEZVU3hOUVVGQlFTeEhRVUZITEVWQlFVaEJPMEZCUVM5RkxFOUJRVkE3UVVGRFJDeEhRVWhFTEVOQlNFb3NRMEZFUmp0QlFWVkVMRU5CWkcxQ0xFTkJRWEJDTzBGQmJVSkRXaXhYUVVGRUxFTkJRVFpDUkN4SlFVRTNRaXhIUVVGdlEwRXNTVUZCY0VNN1FVRkZRU3hsUVVGbFF5eFhRVUZtSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZKbFlXTjBMQ0I3SUhWelpVbHRjR1Z5WVhScGRtVklZVzVrYkdVc0lFWnlZV2R0Wlc1MElIMGdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUhzZ1RXRndRMmhwYkdSUWNtOXdjeUI5SUdaeWIyMGdKeTR1TDJOdmJXMXZiaTl0WVhBbk8xeHVhVzF3YjNKMElIc2dkWE5sUTI5dWRHVjRkRTFsYm5VZ2ZTQm1jbTl0SUNjdUwzVnpaVU52Ym5SbGVIUk5aVzUxSnp0Y2JtbHRjRzl5ZENCSmRHVnRJR1p5YjIwZ0p5NHZTWFJsYlNjN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl1ZEdWNGRFMWxiblZRY205d2N5QmxlSFJsYm1SeklFMWhjRU5vYVd4a1VISnZjSE1zSUVGTllYQXVRMjl1ZEdWNGRFMWxiblZQY0hScGIyNXpMQ0JCVFdGd0xrTnZiblJsZUhSTlpXNTFSWFpsYm5SeklIdDlYRzVjYm1OdmJuTjBJRU52Ym5SbGVIUk5aVzUxSUQwZ1VtVmhZM1F1Wm05eWQyRnlaRkpsWmp4RGIyNTBaWGgwVFdWdWRWQnliM0J6TENCRGIyNTBaWGgwVFdWdWRWQnliM0J6UGlnb2NISnZjSE1zSUhKbFppa2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTnZiblJsZUhSTlpXNTFJSDBnUFNCMWMyVkRiMjUwWlhoMFRXVnVkU2h3Y205d2N5azdYRzRnSUhWelpVbHRjR1Z5WVhScGRtVklZVzVrYkdVb2NtVm1MQ0FvS1NBOVBpQW9leUF1TGk1d2NtOXdjeXdnWTI5dWRHVjRkRTFsYm5VZ2ZTa3BPMXh1SUNCamIyNXpkQ0JqYUdsc1pITWdQU0JTWldGamRDNURhR2xzWkhKbGJpNTBiMEZ5Y21GNUtIQnliM0J6TG1Ob2FXeGtjbVZ1S1R0Y2JpQWdjbVYwZFhKdUlDaGNiaUFnSUNBOFJuSmhaMjFsYm5RK1hHNGdJQ0FnSUNCN1FVMWhjQ0FtSmx4dUlDQWdJQ0FnSUNCamIyNTBaWGgwVFdWdWRTQW1KbHh1SUNBZ0lDQWdJQ0JqYUdsc1pITXViV0Z3S0NoamFHbHNaQ3dnYTJWNUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZTWldGamRDNXBjMVpoYkdsa1JXeGxiV1Z1ZENoamFHbHNaQ2twSUhKbGRIVnliaUJ1ZFd4c08xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQlNaV0ZqZEM1amJHOXVaVVZzWlcxbGJuUW9ZMmhwYkdRc0lIc2dMaTR1WTJocGJHUXVjSEp2Y0hNc0lFRk5ZWEFzSUcxaGNEb2djSEp2Y0hNdWJXRndMQ0JqYjI1MFpYaDBUV1Z1ZFN3Z2EyVjVJSDBwTzF4dUlDQWdJQ0FnSUNCOUtYMWNiaUFnSUNBOEwwWnlZV2R0Wlc1MFBseHVJQ0FwTzF4dWZTazdYRzVjYm5SNWNHVWdRMjl1ZEdWNGRFMWxiblVnUFNCMGVYQmxiMllnUTI5dWRHVjRkRTFsYm5VZ0ppQjdYRzRnSUVsMFpXMDZJSFI1Y0dWdlppQkpkR1Z0TzF4dWZUdGNiaWhEYjI1MFpYaDBUV1Z1ZFNCaGN5QkRiMjUwWlhoMFRXVnVkU2t1U1hSbGJTQTlJRWwwWlcwN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFTnZiblJsZUhSTlpXNTFJR0Z6SUVOdmJuUmxlSFJOWlc1MU8xeHVJbDE5IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJtYXBcIiwgXCJ0eXBlXCIsIFwib25Db21wbGV0ZVwiLCBcIm9uRXJyb3JcIl07XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IHZhciB1c2VHZW9sb2NhdGlvbiA9IGZ1bmN0aW9uIHVzZUdlb2xvY2F0aW9uKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBtYXAgPSBwcm9wcy5tYXAsXG4gICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICdwb3NpdGlvbicgOiBfcHJvcHMkdHlwZSxcbiAgICAgIG9uQ29tcGxldGUgPSBwcm9wcy5vbkNvbXBsZXRlLFxuICAgICAgb25FcnJvciA9IHByb3BzLm9uRXJyb3IsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgZ2VvbG9jYXRpb24gPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0R2VvbG9jYXRpb24gPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKEFNYXAgJiYgIWdlb2xvY2F0aW9uKSB7XG4gICAgICB2YXIgaW5zdGFuY2U7XG4gICAgICBBTWFwLnBsdWdpbihbJ0FNYXAuR2VvbG9jYXRpb24nXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBBTWFwLkdlb2xvY2F0aW9uKF9vYmplY3RTcHJlYWQoe30sIG90aGVyKSk7XG4gICAgICAgIHNldEdlb2xvY2F0aW9uKGluc3RhbmNlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgc2V0R2VvbG9jYXRpb24odW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIFtBTWFwXSk7XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2soc3RhdHVzLCByZXN1bHQpIHtcbiAgICBpZiAoc3RhdHVzID09PSAnY29tcGxldGUnICYmIG9uQ29tcGxldGUpIHtcbiAgICAgIG9uQ29tcGxldGUocmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKG9uRXJyb3IpIHtcbiAgICAgIG9uRXJyb3IocmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIS9eKHBvc2l0aW9ufGNpdHlJbmZvKSQvLnRlc3QodHlwZSkpIHJldHVybjtcbiAgICB2YXIgZnVuTmFtZSA9IHR5cGUgPT09ICdwb3NpdGlvbicgPyAnZ2V0Q3VycmVudFBvc2l0aW9uJyA6ICdnZXRDaXR5SW5mbyc7XG5cbiAgICBpZiAoZ2VvbG9jYXRpb24gJiYgbWFwKSB7XG4gICAgICBnZW9sb2NhdGlvbltmdW5OYW1lXShjYWxsYmFjayk7XG4gICAgICBtYXAuYWRkQ29udHJvbChnZW9sb2NhdGlvbik7XG4gICAgfSBlbHNlIGlmIChnZW9sb2NhdGlvbikge1xuICAgICAgZ2VvbG9jYXRpb25bZnVuTmFtZV0oY2FsbGJhY2spO1xuICAgIH1cbiAgfSwgW2dlb2xvY2F0aW9uXSk7XG4gIHJldHVybiB7XG4gICAgZ2VvbG9jYXRpb246IGdlb2xvY2F0aW9uLFxuICAgIHNldEdlb2xvY2F0aW9uOiBzZXRHZW9sb2NhdGlvblxuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlIWlc5c2IyTmhkR2x2Ymk5MWMyVkhaVzlzYjJOaGRHbHZiaTUwYzNnaVhTd2libUZ0WlhNaU9sc2lkWE5sVTNSaGRHVWlMQ0oxYzJWTlpXMXZJaXdpZFhObFJXWm1aV04wSWl3aWRYTmxSMlZ2Ykc5allYUnBiMjRpTENKd2NtOXdjeUlzSW0xaGNDSXNJblI1Y0dVaUxDSnZia052YlhCc1pYUmxJaXdpYjI1RmNuSnZjaUlzSW05MGFHVnlJaXdpWjJWdmJHOWpZWFJwYjI0aUxDSnpaWFJIWlc5c2IyTmhkR2x2YmlJc0lrRk5ZWEFpTENKcGJuTjBZVzVqWlNJc0luQnNkV2RwYmlJc0lrZGxiMnh2WTJGMGFXOXVJaXdpZFc1a1pXWnBibVZrSWl3aVkyRnNiR0poWTJzaUxDSnpkR0YwZFhNaUxDSnlaWE4xYkhRaUxDSjBaWE4wSWl3aVpuVnVUbUZ0WlNJc0ltRmtaRU52Ym5SeWIyd2lYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVN4VFFVRlRRU3hSUVVGVUxFVkJRVzFDUXl4UFFVRnVRaXhGUVVFMFFrTXNVMEZCTlVJc1VVRkJOa01zVDBGQk4wTTdRVUZKUVN4UFFVRlBMRWxCUVUxRExHTkJRV01zUjBGQlJ5eFRRVUZxUWtFc1kwRkJhVUlzUjBGQmEwTTdRVUZCUVN4TlFVRnFRME1zUzBGQmFVTXNkVVZCUVhwQ0xFVkJRWGxDT3p0QlFVTTVSQ3hOUVVGUlF5eEhRVUZTTEVkQlFXdEZSQ3hMUVVGc1JTeERRVUZSUXl4SFFVRlNPMEZCUVVFc2IwSkJRV3RGUkN4TFFVRnNSU3hEUVVGaFJTeEpRVUZpTzBGQlFVRXNUVUZCWVVFc1NVRkJZaXcwUWtGQmIwSXNWVUZCY0VJN1FVRkJRU3hOUVVGblEwTXNWVUZCYUVNc1IwRkJhMFZJTEV0QlFXeEZMRU5CUVdkRFJ5eFZRVUZvUXp0QlFVRkJMRTFCUVRSRFF5eFBRVUUxUXl4SFFVRnJSVW9zUzBGQmJFVXNRMEZCTkVOSkxFOUJRVFZETzBGQlFVRXNUVUZCZDBSRExFdEJRWGhFTERSQ1FVRnJSVXdzUzBGQmJFVTdPMEZCUTBFc2EwSkJRWE5EU2l4UlFVRlJMRVZCUVRsRE8wRkJRVUU3UVVGQlFTeE5RVUZQVlN4WFFVRlFPMEZCUVVFc1RVRkJiMEpETEdOQlFYQkNPenRCUVVOQlZDeEZRVUZCUVN4VFFVRlRMRU5CUVVNc1dVRkJUVHRCUVVOa0xGRkJRVWxWTEVsQlFVa3NTVUZCU1N4RFFVRkRSaXhYUVVGaUxFVkJRVEJDTzBGQlEzaENMRlZCUVVsSExGRkJRVW83UVVGRFFVUXNUVUZCUVVFc1NVRkJTU3hEUVVGRFJTeE5RVUZNTEVOQlFWa3NRMEZCUXl4clFrRkJSQ3hEUVVGYUxFVkJRV3RETEZsQlFVMDdRVUZEZEVORUxGRkJRVUZCTEZGQlFWRXNSMEZCUnl4SlFVRkpSQ3hKUVVGSkxFTkJRVU5ITEZkQlFWUXNiVUpCUVRCQ1RpeExRVUV4UWl4RlFVRllPMEZCUTBGRkxGRkJRVUZCTEdOQlFXTXNRMEZCUTBVc1VVRkJSQ3hEUVVGa08wRkJRMFFzVDBGSVJEdEJRVWxCTEdGQlFVOHNXVUZCVFR0QlFVTllMRmxCUVVsQkxGRkJRVW9zUlVGQll6dEJRVU5hUml4VlFVRkJRU3hqUVVGakxFTkJRVU5MTEZOQlFVUXNRMEZCWkR0QlFVTkVPMEZCUTBZc1QwRktSRHRCUVV0RU8wRkJRMFlzUjBGaVVTeEZRV0ZPTEVOQlFVTktMRWxCUVVRc1EwRmlUU3hEUVVGVU96dEJRV1ZCTEZkQlFWTkxMRkZCUVZRc1EwRkJhMEpETEUxQlFXeENMRVZCUVdkRVF5eE5RVUZvUkN4RlFVRm5SanRCUVVNNVJTeFJRVUZKUkN4TlFVRk5MRXRCUVVzc1ZVRkJXQ3hKUVVGNVFsZ3NWVUZCTjBJc1JVRkJlVU03UVVGRGRrTkJMRTFCUVVGQkxGVkJRVlVzUTBGQlExa3NUVUZCUkN4RFFVRldPMEZCUTBRc1MwRkdSQ3hOUVVWUExFbEJRVWxZTEU5QlFVb3NSVUZCWVR0QlFVTnNRa0VzVFVGQlFVRXNUMEZCVHl4RFFVRkRWeXhOUVVGRUxFTkJRVkE3UVVGRFJEdEJRVU5HT3p0QlFVVkViRUlzUlVGQlFVRXNUMEZCVHl4RFFVRkRMRmxCUVUwN1FVRkRXaXhSUVVGSkxFTkJRVU1zZDBKQlFYZENiVUlzU1VGQmVFSXNRMEZCTmtKa0xFbEJRVGRDTEVOQlFVd3NSVUZCZVVNN1FVRkRla01zVVVGQlRXVXNUMEZCVHl4SFFVRkhaaXhKUVVGSkxFdEJRVXNzVlVGQlZDeEhRVUZ6UWl4dlFrRkJkRUlzUjBGQk5rTXNZVUZCTjBRN08wRkJRMEVzVVVGQlNVa3NWMEZCVnl4SlFVRkpUQ3hIUVVGdVFpeEZRVUYzUWp0QlFVTjBRa3NzVFVGQlFVRXNWMEZCVnl4RFFVRkRWeXhQUVVGRUxFTkJRVmdzUTBGQmNVSktMRkZCUVhKQ08wRkJRMEZhTEUxQlFVRkJMRWRCUVVjc1EwRkJRMmxDTEZWQlFVb3NRMEZCWlZvc1YwRkJaanRCUVVORUxFdEJTRVFzVFVGSFR5eEpRVUZKUVN4WFFVRktMRVZCUVdsQ08wRkJRM1JDUVN4TlFVRkJRU3hYUVVGWExFTkJRVU5YTEU5QlFVUXNRMEZCV0N4RFFVRnhRa29zVVVGQmNrSTdRVUZEUkR0QlFVTkdMRWRCVkUwc1JVRlRTaXhEUVVGRFVDeFhRVUZFTEVOQlZFa3NRMEZCVUR0QlFWZEJMRk5CUVU4N1FVRkRURUVzU1VGQlFVRXNWMEZCVnl4RlFVRllRU3hYUVVSTE8wRkJSVXhETEVsQlFVRkJMR05CUVdNc1JVRkJaRUU3UVVGR1N5eEhRVUZRTzBGQlNVUXNRMEY2UTAwaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QjFjMlZUZEdGMFpTd2dkWE5sVFdWdGJ5d2dkWE5sUldabVpXTjBJSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dSMlZ2Ykc5allYUnBiMjVRY205d2N5QjlJR1p5YjIwZ0p5NG5PMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUZWelpVZGxiMnh2WTJGMGFXOXVJR1Y0ZEdWdVpITWdSMlZ2Ykc5allYUnBiMjVRY205d2N5QjdmVnh1Wlhod2IzSjBJR052Ym5OMElIVnpaVWRsYjJ4dlkyRjBhVzl1SUQwZ0tIQnliM0J6SUQwZ2UzMGdZWE1nVlhObFIyVnZiRzlqWVhScGIyNHBJRDArSUh0Y2JpQWdZMjl1YzNRZ2V5QnRZWEFzSUhSNWNHVWdQU0FuY0c5emFYUnBiMjRuTENCdmJrTnZiWEJzWlhSbExDQnZia1Z5Y205eUxDQXVMaTV2ZEdobGNpQjlJRDBnY0hKdmNITTdYRzRnSUdOdmJuTjBJRnRuWlc5c2IyTmhkR2x2Yml3Z2MyVjBSMlZ2Ykc5allYUnBiMjVkSUQwZ2RYTmxVM1JoZEdVOFFVMWhjQzVIWlc5c2IyTmhkR2x2Ymo0b0tUdGNiaUFnZFhObFJXWm1aV04wS0NncElEMCtJSHRjYmlBZ0lDQnBaaUFvUVUxaGNDQW1KaUFoWjJWdmJHOWpZWFJwYjI0cElIdGNiaUFnSUNBZ0lHeGxkQ0JwYm5OMFlXNWpaVG9nUVUxaGNDNUhaVzlzYjJOaGRHbHZianRjYmlBZ0lDQWdJRUZOWVhBdWNHeDFaMmx1S0ZzblFVMWhjQzVIWlc5c2IyTmhkR2x2YmlkZExDQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHbHVjM1JoYm1ObElEMGdibVYzSUVGTllYQXVSMlZ2Ykc5allYUnBiMjRvZXlBdUxpNXZkR2hsY2lCOUtUdGNiaUFnSUNBZ0lDQWdjMlYwUjJWdmJHOWpZWFJwYjI0b2FXNXpkR0Z1WTJVcE8xeHVJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQnlaWFIxY200Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCcFppQW9hVzV6ZEdGdVkyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCelpYUkhaVzlzYjJOaGRHbHZiaWgxYm1SbFptbHVaV1FwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JpQWdmU3dnVzBGTllYQmRLVHRjYmx4dUlDQm1kVzVqZEdsdmJpQmpZV3hzWW1GamF5aHpkR0YwZFhNNklDZGxjbkp2Y2ljZ2ZDQW5ZMjl0Y0d4bGRHVW5MQ0J5WlhOMWJIUTZJRUZOWVhBdVIyVnZiRzlqWVhScGIyNVNaWE4xYkhRcElIdGNiaUFnSUNCcFppQW9jM1JoZEhWeklEMDlQU0FuWTI5dGNHeGxkR1VuSUNZbUlHOXVRMjl0Y0d4bGRHVXBJSHRjYmlBZ0lDQWdJRzl1UTI5dGNHeGxkR1VvY21WemRXeDBLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLRzl1UlhKeWIzSXBJSHRjYmlBZ0lDQWdJRzl1UlhKeWIzSW9jbVZ6ZFd4MEtUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQjFjMlZOWlcxdktDZ3BJRDArSUh0Y2JpQWdJQ0JwWmlBb0lTOWVLSEJ2YzJsMGFXOXVmR05wZEhsSmJtWnZLU1F2TG5SbGMzUW9kSGx3WlNrcElISmxkSFZ5Ymp0Y2JpQWdJQ0JqYjI1emRDQm1kVzVPWVcxbElEMGdkSGx3WlNBOVBUMGdKM0J2YzJsMGFXOXVKeUEvSUNkblpYUkRkWEp5Wlc1MFVHOXphWFJwYjI0bklEb2dKMmRsZEVOcGRIbEpibVp2Snp0Y2JpQWdJQ0JwWmlBb1oyVnZiRzlqWVhScGIyNGdKaVlnYldGd0tTQjdYRzRnSUNBZ0lDQm5aVzlzYjJOaGRHbHZibHRtZFc1T1lXMWxYU2hqWVd4c1ltRmpheWs3WEc0Z0lDQWdJQ0J0WVhBdVlXUmtRMjl1ZEhKdmJDaG5aVzlzYjJOaGRHbHZiaWs3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2huWlc5c2IyTmhkR2x2YmlrZ2UxeHVJQ0FnSUNBZ1oyVnZiRzlqWVhScGIyNWJablZ1VG1GdFpWMG9ZMkZzYkdKaFkyc3BPMXh1SUNBZ0lIMWNiaUFnZlN3Z1cyZGxiMnh2WTJGMGFXOXVYU2s3WEc1Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCblpXOXNiMk5oZEdsdmJpeGNiaUFnSUNCelpYUkhaVzlzYjJOaGRHbHZiaXhjYmlBZ2ZUdGNibjA3WEc0aVhYMD0iLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlSW1wZXJhdGl2ZUhhbmRsZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUdlb2xvY2F0aW9uIH0gZnJvbSAnLi91c2VHZW9sb2NhdGlvbic7XG5leHBvcnQgdmFyIEdlb2xvY2F0aW9uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF91c2VHZW9sb2NhdGlvbiA9IHVzZUdlb2xvY2F0aW9uKHByb3BzKSxcbiAgICAgIGdlb2xvY2F0aW9uID0gX3VzZUdlb2xvY2F0aW9uLmdlb2xvY2F0aW9uO1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgZ2VvbG9jYXRpb246IGdlb2xvY2F0aW9uXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OUhaVzlzYjJOaGRHbHZiaTlwYm1SbGVDNTBjM2dpWFN3aWJtRnRaWE1pT2xzaVVtVmhZM1FpTENKMWMyVkpiWEJsY21GMGFYWmxTR0Z1Wkd4bElpd2lkWE5sUjJWdmJHOWpZWFJwYjI0aUxDSkhaVzlzYjJOaGRHbHZiaUlzSW1admNuZGhjbVJTWldZaUxDSndjbTl3Y3lJc0luSmxaaUlzSW1kbGIyeHZZMkYwYVc5dUlsMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNUMEZCVDBFc1MwRkJVQ3hKUVVGblFrTXNiVUpCUVdoQ0xGRkJRVEpETEU5QlFUTkRPMEZCUlVFc1UwRkJVME1zWTBGQlZDeFJRVUVyUWl4clFrRkJMMEk3UVVGWFFTeFBRVUZQTEVsQlFVMURMRmRCUVZjc1owSkJRVWRJTEV0QlFVc3NRMEZCUTBrc1ZVRkJUaXhEUVVGeFJDeFZRVUZEUXl4TFFVRkVMRVZCUVZGRExFZEJRVklzUlVGQlowSTdRVUZET1VZc2QwSkJRWGRDU2l4alFVRmpMRU5CUVVOSExFdEJRVVFzUTBGQmRFTTdRVUZCUVN4TlFVRlJSU3hYUVVGU0xHMUNRVUZSUVN4WFFVRlNPenRCUVVOQlRpeEZRVUZCUVN4dFFrRkJiVUlzUTBGQlEwc3NSMEZCUkN4RlFVRk5PMEZCUVVFc01rTkJRVmxFTEV0QlFWbzdRVUZCYlVKRkxFMUJRVUZCTEZkQlFWY3NSVUZCV0VFN1FVRkJia0k3UVVGQlFTeEhRVUZPTEVOQlFXNUNPMEZCUTBFc1UwRkJUeXhKUVVGUU8wRkJRMFFzUTBGS01FSXNRMEZCY0VJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1VtVmhZM1FzSUhzZ2RYTmxTVzF3WlhKaGRHbDJaVWhoYm1Sc1pTQjlJR1p5YjIwZ0ozSmxZV04wSnp0Y2JtbHRjRzl5ZENCN0lFOTJaWEpzWVhsUWNtOXdjeUI5SUdaeWIyMGdKeTR1TDJOdmJXMXZiaTl0WVhBbk8xeHVhVzF3YjNKMElIc2dkWE5sUjJWdmJHOWpZWFJwYjI0Z2ZTQm1jbTl0SUNjdUwzVnpaVWRsYjJ4dlkyRjBhVzl1Snp0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkhaVzlzYjJOaGRHbHZibEJ5YjNCeklHVjRkR1Z1WkhNZ1QzWmxjbXhoZVZCeWIzQnpMQ0JCVFdGd0xrZGxiMnh2WTJGMGFXOXVSWFpsYm5SekxDQkJUV0Z3TGtkbGIyeHZZMkYwYVc5dVQzQjBhVzl1Y3lCN1hHNGdJQzhxS2x4dUlDQWdLaURscnBya3ZZM25zYnZsbm90Y2JpQWdJQ29nTFNCd2IzTnBkR2x2YmlEb2pyZmxqNVlnNTVTbzVvaTM1NXFFNTdLKzU2R3U1TDJONTcydTc3eU01cHlKNWFTeDZMU2w1WWVnNTQ2SFhHNGdJQ0FxSUMwZ1kybDBlVWx1Wm04ZzVxQzU1bzJ1NTVTbzVvaTNJRWxRSU9pT3QrV1BsaURubEtqbWlMZm1pWURsbktqbG40N2x1SUxrdjZIbWdhOWNiaUFnSUNvZ1FHUmxabUYxYkhRZ2NHOXphWFJwYjI1Y2JpQWdJQ292WEc0Z0lIUjVjR1UvT2lBbmNHOXphWFJwYjI0bklId2dKMk5wZEhsSmJtWnZKenRjYm4xY2JtVjRjRzl5ZENCamIyNXpkQ0JIWlc5c2IyTmhkR2x2YmlBOUlGSmxZV04wTG1admNuZGhjbVJTWldZOFIyVnZiRzlqWVhScGIyNVFjbTl3Y3l3Z1IyVnZiRzlqWVhScGIyNVFjbTl3Y3o0b0tIQnliM0J6TENCeVpXWXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2V5Qm5aVzlzYjJOaGRHbHZiaUI5SUQwZ2RYTmxSMlZ2Ykc5allYUnBiMjRvY0hKdmNITXBPMXh1SUNCMWMyVkpiWEJsY21GMGFYWmxTR0Z1Wkd4bEtISmxaaXdnS0NrZ1BUNGdLSHNnTGk0dWNISnZjSE1zSUdkbGIyeHZZMkYwYVc5dUlIMHBLVHRjYmlBZ2NtVjBkWEp1SUc1MWJHdzdYRzU5S1R0Y2JpSmRmUT09IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VWaXNpYWJsZSB9IGZyb20gJy4uL2NvbW1vbi9ob29rcyc7XG5leHBvcnQgZnVuY3Rpb24gdXNlU2NhbGVDb250cm9sKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBzY2FsZUNvbnRyb2wgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U2NhbGVDb250cm9sID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgbWFwID0gcHJvcHMubWFwLFxuICAgICAgcG9zaXRpb24gPSBwcm9wcy5wb3NpdGlvbixcbiAgICAgIHZpc2lhYmxlID0gcHJvcHMudmlzaWFibGUsXG4gICAgICBvZmZzZXQgPSBwcm9wcy5vZmZzZXQ7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG1hcCAmJiAhc2NhbGVDb250cm9sKSB7XG4gICAgICB2YXIgaW5zdGFuY2U7XG4gICAgICBtYXAucGx1Z2luKFsnQU1hcC5TY2FsZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IEFNYXAuU2NhbGUoe1xuICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgbWFwLmFkZENvbnRyb2woaW5zdGFuY2UpO1xuICAgICAgICBzZXRTY2FsZUNvbnRyb2woaW5zdGFuY2UpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICBtYXAucmVtb3ZlQ29udHJvbChpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCBbbWFwXSk7XG4gIHVzZVZpc2lhYmxlKHNjYWxlQ29udHJvbCwgdmlzaWFibGUpO1xuICByZXR1cm4ge1xuICAgIHNjYWxlQ29udHJvbDogc2NhbGVDb250cm9sLFxuICAgIHNldFNjYWxlQ29udHJvbDogc2V0U2NhbGVDb250cm9sXG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5VFkyRnNaVU52Ym5SeWIyd3ZkWE5sVTJOaGJHVkRiMjUwY205c0xuUnplQ0pkTENKdVlXMWxjeUk2V3lKMWMyVkZabVpsWTNRaUxDSjFjMlZUZEdGMFpTSXNJblZ6WlZacGMybGhZbXhsSWl3aWRYTmxVMk5oYkdWRGIyNTBjbTlzSWl3aWNISnZjSE1pTENKelkyRnNaVU52Ym5SeWIyd2lMQ0p6WlhSVFkyRnNaVU52Ym5SeWIyd2lMQ0p0WVhBaUxDSndiM05wZEdsdmJpSXNJblpwYzJsaFlteGxJaXdpYjJabWMyVjBJaXdpYVc1emRHRnVZMlVpTENKd2JIVm5hVzRpTENKQlRXRndJaXdpVTJOaGJHVWlMQ0poWkdSRGIyNTBjbTlzSWl3aWNtVnRiM1psUTI5dWRISnZiQ0pkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEZOQlFWTkJMRk5CUVZRc1JVRkJiMEpETEZGQlFYQkNMRkZCUVc5RExFOUJRWEJETzBGQlJVRXNVMEZCVTBNc1YwRkJWQ3hSUVVFMFFpeHBRa0ZCTlVJN1FVRkpRU3hQUVVGUExGTkJRVk5ETEdWQlFWUXNSMEZCZDBRN1FVRkJRU3hOUVVFdlFrTXNTMEZCSzBJc2RVVkJRWFpDTEVWQlFYVkNPenRCUVVNM1JDeHJRa0ZCZDBOSUxGRkJRVkVzUlVGQmFFUTdRVUZCUVR0QlFVRkJMRTFCUVU5SkxGbEJRVkE3UVVGQlFTeE5RVUZ4UWtNc1pVRkJja0k3TzBGQlEwRXNUVUZCVVVNc1IwRkJVaXhIUVVFMFEwZ3NTMEZCTlVNc1EwRkJVVWNzUjBGQlVqdEJRVUZCTEUxQlFXRkRMRkZCUVdJc1IwRkJORU5LTEV0QlFUVkRMRU5CUVdGSkxGRkJRV0k3UVVGQlFTeE5RVUYxUWtNc1VVRkJka0lzUjBGQk5FTk1MRXRCUVRWRExFTkJRWFZDU3l4UlFVRjJRanRCUVVGQkxFMUJRV2xEUXl4TlFVRnFReXhIUVVFMFEwNHNTMEZCTlVNc1EwRkJhVU5OTEUxQlFXcERPMEZCUTBGV0xFVkJRVUZCTEZOQlFWTXNRMEZCUXl4WlFVRk5PMEZCUTJRc1VVRkJTVThzUjBGQlJ5eEpRVUZKTEVOQlFVTkdMRmxCUVZvc1JVRkJNRUk3UVVGRGVFSXNWVUZCU1Uwc1VVRkJTanRCUVVOQlNpeE5RVUZCUVN4SFFVRkhMRU5CUVVOTExFMUJRVW9zUTBGQlZ5eERRVUZETEZsQlFVUXNRMEZCV0N4RlFVRXlRaXhaUVVGTk8wRkJReTlDUkN4UlFVRkJRU3hSUVVGUkxFZEJRVWNzU1VGQlNVVXNTVUZCU1N4RFFVRkRReXhMUVVGVUxFTkJRV1U3UVVGRGVFSktMRlZCUVVGQkxFMUJRVTBzUlVGQlJVRXNUVUZFWjBJN1FVRkZlRUpHTEZWQlFVRkJMRkZCUVZFc1JVRkJVa0U3UVVGR2QwSXNVMEZCWml4RFFVRllPMEZCU1VGRUxGRkJRVUZCTEVkQlFVY3NRMEZCUTFFc1ZVRkJTaXhEUVVGbFNpeFJRVUZtTzBGQlEwRk1MRkZCUVVGQkxHVkJRV1VzUTBGQlEwc3NVVUZCUkN4RFFVRm1PMEZCUTBRc1QwRlFSRHRCUVZGQkxHRkJRVThzV1VGQlRUdEJRVU5ZTEZsQlFVbEJMRkZCUVVvc1JVRkJZenRCUVVOYVNpeFZRVUZCUVN4SFFVRkhMRU5CUVVOVExHRkJRVW9zUTBGQmEwSk1MRkZCUVd4Q08wRkJRMFE3UVVGRFJpeFBRVXBFTzBGQlMwUTdRVUZEUml4SFFXcENVU3hGUVdsQ1RpeERRVUZEU2l4SFFVRkVMRU5CYWtKTkxFTkJRVlE3UVVGdFFrRk1MRVZCUVVGQkxGZEJRVmNzUTBGQlEwY3NXVUZCUkN4RlFVRm5Ra2tzVVVGQmFFSXNRMEZCV0R0QlFVTkJMRk5CUVU4N1FVRkRURW9zU1VGQlFVRXNXVUZCV1N4RlFVRmFRU3haUVVSTE8wRkJSVXhETEVsQlFVRkJMR1ZCUVdVc1JVRkJaa0U3UVVGR1N5eEhRVUZRTzBGQlNVUWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUIxYzJWRlptWmxZM1FzSUhWelpWTjBZWFJsSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnVTJOaGJHVkRiMjUwY205c1VISnZjSE1nZlNCbWNtOXRJQ2N1THljN1hHNXBiWEJ2Y25RZ2V5QjFjMlZXYVhOcFlXSnNaU0I5SUdaeWIyMGdKeTR1TDJOdmJXMXZiaTlvYjI5cmN5YzdYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVlhObFUyTmhiR1ZEYjI1MGNtOXNJR1Y0ZEdWdVpITWdVMk5oYkdWRGIyNTBjbTlzVUhKdmNITWdlMzFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUhWelpWTmpZV3hsUTI5dWRISnZiQ2h3Y205d2N5QTlJSHQ5SUdGeklGVnpaVk5qWVd4bFEyOXVkSEp2YkNrZ2UxeHVJQ0JqYjI1emRDQmJjMk5oYkdWRGIyNTBjbTlzTENCelpYUlRZMkZzWlVOdmJuUnliMnhkSUQwZ2RYTmxVM1JoZEdVOFFVMWhjQzVUWTJGc1pUNG9LVHRjYmlBZ1kyOXVjM1FnZXlCdFlYQXNJSEJ2YzJsMGFXOXVMQ0IyYVhOcFlXSnNaU3dnYjJabWMyVjBJSDBnUFNCd2NtOXdjenRjYmlBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0JwWmlBb2JXRndJQ1ltSUNGelkyRnNaVU52Ym5SeWIyd3BJSHRjYmlBZ0lDQWdJR3hsZENCcGJuTjBZVzVqWlRvZ1FVMWhjQzVEYjI1MGNtOXNPMXh1SUNBZ0lDQWdiV0Z3TG5Cc2RXZHBiaWhiSjBGTllYQXVVMk5oYkdVblhTd2dLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnBibk4wWVc1alpTQTlJRzVsZHlCQlRXRndMbE5qWVd4bEtIdGNiaUFnSUNBZ0lDQWdJQ0J2Wm1aelpYUTZJRzltWm5ObGRDeGNiaUFnSUNBZ0lDQWdJQ0J3YjNOcGRHbHZiaXhjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lHMWhjQzVoWkdSRGIyNTBjbTlzS0dsdWMzUmhibU5sS1R0Y2JpQWdJQ0FnSUNBZ2MyVjBVMk5oYkdWRGIyNTBjbTlzS0dsdWMzUmhibU5sS1R0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVjM1JoYm1ObEtTQjdYRzRnSUNBZ0lDQWdJQ0FnYldGd0xuSmxiVzkyWlVOdmJuUnliMndvYVc1emRHRnVZMlVwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JpQWdmU3dnVzIxaGNGMHBPMXh1WEc0Z0lIVnpaVlpwYzJsaFlteGxLSE5qWVd4bFEyOXVkSEp2YkNFc0lIWnBjMmxoWW14bEtUdGNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQnpZMkZzWlVOdmJuUnliMndzWEc0Z0lDQWdjMlYwVTJOaGJHVkRiMjUwY205c0xGeHVJQ0I5TzF4dWZWeHVJbDE5IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTY2FsZUNvbnRyb2wgfSBmcm9tICcuL3VzZVNjYWxlQ29udHJvbCc7XG5leHBvcnQgdmFyIFNjYWxlQ29udHJvbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfdXNlU2NhbGVDb250cm9sID0gdXNlU2NhbGVDb250cm9sKHByb3BzKSxcbiAgICAgIHNjYWxlQ29udHJvbCA9IF91c2VTY2FsZUNvbnRyb2wuc2NhbGVDb250cm9sO1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgc2NhbGVDb250cm9sOiBzY2FsZUNvbnRyb2xcbiAgICB9KTtcbiAgfSwgW3NjYWxlQ29udHJvbF0pO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OVRZMkZzWlVOdmJuUnliMnd2YVc1a1pYZ3VkSE40SWwwc0ltNWhiV1Z6SWpwYklsSmxZV04wSWl3aWRYTmxTVzF3WlhKaGRHbDJaVWhoYm1Sc1pTSXNJblZ6WlZOallXeGxRMjl1ZEhKdmJDSXNJbE5qWVd4bFEyOXVkSEp2YkNJc0ltWnZjbmRoY21SU1pXWWlMQ0p3Y205d2N5SXNJbkpsWmlJc0luTmpZV3hsUTI5dWRISnZiQ0pkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEU5QlFVOUJMRXRCUVZBc1NVRkJaMEpETEcxQ1FVRm9RaXhSUVVFeVF5eFBRVUV6UXp0QlFVVkJMRk5CUVZORExHVkJRVlFzVVVGQlowTXNiVUpCUVdoRE8wRkJTVUVzVDBGQlR5eEpRVUZOUXl4WlFVRlpMR2RDUVVGSFNDeExRVUZMTEVOQlFVTkpMRlZCUVU0c1EwRkJkVVFzVlVGQlEwTXNTMEZCUkN4RlFVRlJReXhIUVVGU0xFVkJRV2RDTzBGQlEycEhMSGxDUVVGNVFrb3NaVUZCWlN4RFFVRkRSeXhMUVVGRUxFTkJRWGhETzBGQlFVRXNUVUZCVVVVc1dVRkJVaXh2UWtGQlVVRXNXVUZCVWpzN1FVRkRRVTRzUlVGQlFVRXNiVUpCUVcxQ0xFTkJRVU5MTEVkQlFVUXNSVUZCVFR0QlFVRkJMREpEUVVGWlJDeExRVUZhTzBGQlFXMUNSU3hOUVVGQlFTeFpRVUZaTEVWQlFWcEJPMEZCUVc1Q08wRkJRVUVzUjBGQlRpeEZRVUV3UXl4RFFVRkRRU3haUVVGRUxFTkJRVEZETEVOQlFXNUNPMEZCUTBFc1UwRkJUeXhKUVVGUU8wRkJRMFFzUTBGS01rSXNRMEZCY2tJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1VtVmhZM1FzSUhzZ2RYTmxTVzF3WlhKaGRHbDJaVWhoYm1Sc1pTQjlJR1p5YjIwZ0ozSmxZV04wSnp0Y2JtbHRjRzl5ZENCN0lFOTJaWEpzWVhsUWNtOXdjeUI5SUdaeWIyMGdKeTR1TDJOdmJXMXZiaTl0WVhBbk8xeHVhVzF3YjNKMElIc2dkWE5sVTJOaGJHVkRiMjUwY205c0lIMGdabkp2YlNBbkxpOTFjMlZUWTJGc1pVTnZiblJ5YjJ3bk8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRk5qWVd4bFEyOXVkSEp2YkZCeWIzQnpJR1Y0ZEdWdVpITWdUM1psY214aGVWQnliM0J6TENCQlRXRndMbE5qWVd4bFQzQjBhVzl1Y3lCN2ZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1UyTmhiR1ZEYjI1MGNtOXNJRDBnVW1WaFkzUXVabTl5ZDJGeVpGSmxaanhUWTJGc1pVTnZiblJ5YjJ4UWNtOXdjeXdnVTJOaGJHVkRiMjUwY205c1VISnZjSE0rS0Nod2NtOXdjeXdnY21WbUtTQTlQaUI3WEc0Z0lHTnZibk4wSUhzZ2MyTmhiR1ZEYjI1MGNtOXNJSDBnUFNCMWMyVlRZMkZzWlVOdmJuUnliMndvY0hKdmNITXBPMXh1SUNCMWMyVkpiWEJsY21GMGFYWmxTR0Z1Wkd4bEtISmxaaXdnS0NrZ1BUNGdLSHNnTGk0dWNISnZjSE1zSUhOallXeGxRMjl1ZEhKdmJDQjlLU3dnVzNOallXeGxRMjl1ZEhKdmJGMHBPMXh1SUNCeVpYUjFjbTRnYm5Wc2JEdGNibjBwTzF4dUlsMTkiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVZpc2lhYmxlIH0gZnJvbSAnLi4vY29tbW9uL2hvb2tzJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VUb29sQmFyQ29udHJvbCgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgdG9vbEJhckNvbnRyb2wgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0VG9vbEJhckNvbnRyb2wgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBtYXAgPSBwcm9wcy5tYXAsXG4gICAgICBwb3NpdGlvbiA9IHByb3BzLnBvc2l0aW9uLFxuICAgICAgdmlzaWFibGUgPSBwcm9wcy52aXNpYWJsZSxcbiAgICAgIG9mZnNldCA9IHByb3BzLm9mZnNldDtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobWFwICYmICF0b29sQmFyQ29udHJvbCkge1xuICAgICAgdmFyIGluc3RhbmNlO1xuICAgICAgbWFwLnBsdWdpbihbJ0FNYXAuVG9vbEJhciddLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IEFNYXAuVG9vbEJhcih7XG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgICAgIH0pO1xuICAgICAgICBtYXAuYWRkQ29udHJvbChpbnN0YW5jZSk7XG4gICAgICAgIHNldFRvb2xCYXJDb250cm9sKGluc3RhbmNlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgbWFwLnJlbW92ZUNvbnRyb2woaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW21hcF0pO1xuICB1c2VWaXNpYWJsZSh0b29sQmFyQ29udHJvbCwgdmlzaWFibGUpO1xuICByZXR1cm4ge1xuICAgIHRvb2xCYXJDb250cm9sOiB0b29sQmFyQ29udHJvbCxcbiAgICBzZXRUb29sQmFyQ29udHJvbDogc2V0VG9vbEJhckNvbnRyb2xcbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlVYjI5c1FtRnlRMjl1ZEhKdmJDOTFjMlZVYjI5c1FtRnlRMjl1ZEhKdmJDNTBjM2dpWFN3aWJtRnRaWE1pT2xzaWRYTmxSV1ptWldOMElpd2lkWE5sVTNSaGRHVWlMQ0oxYzJWV2FYTnBZV0pzWlNJc0luVnpaVlJ2YjJ4Q1lYSkRiMjUwY205c0lpd2ljSEp2Y0hNaUxDSjBiMjlzUW1GeVEyOXVkSEp2YkNJc0luTmxkRlJ2YjJ4Q1lYSkRiMjUwY205c0lpd2liV0Z3SWl3aWNHOXphWFJwYjI0aUxDSjJhWE5wWVdKc1pTSXNJbTltWm5ObGRDSXNJbWx1YzNSaGJtTmxJaXdpY0d4MVoybHVJaXdpUVUxaGNDSXNJbFJ2YjJ4Q1lYSWlMQ0poWkdSRGIyNTBjbTlzSWl3aWNtVnRiM1psUTI5dWRISnZiQ0pkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEZOQlFWTkJMRk5CUVZRc1JVRkJiMEpETEZGQlFYQkNMRkZCUVc5RExFOUJRWEJETzBGQlJVRXNVMEZCVTBNc1YwRkJWQ3hSUVVFMFFpeHBRa0ZCTlVJN1FVRkpRU3hQUVVGUExGTkJRVk5ETEdsQ1FVRlVMRWRCUVRSRU8wRkJRVUVzVFVGQmFrTkRMRXRCUVdsRExIVkZRVUY2UWl4RlFVRjVRanM3UVVGRGFrVXNhMEpCUVRSRFNDeFJRVUZSTEVWQlFYQkVPMEZCUVVFN1FVRkJRU3hOUVVGUFNTeGpRVUZRTzBGQlFVRXNUVUZCZFVKRExHbENRVUYyUWpzN1FVRkRRU3hOUVVGUlF5eEhRVUZTTEVkQlFUUkRTQ3hMUVVFMVF5eERRVUZSUnl4SFFVRlNPMEZCUVVFc1RVRkJZVU1zVVVGQllpeEhRVUUwUTBvc1MwRkJOVU1zUTBGQllVa3NVVUZCWWp0QlFVRkJMRTFCUVhWQ1F5eFJRVUYyUWl4SFFVRTBRMHdzUzBGQk5VTXNRMEZCZFVKTExGRkJRWFpDTzBGQlFVRXNUVUZCYVVORExFMUJRV3BETEVkQlFUUkRUaXhMUVVFMVF5eERRVUZwUTAwc1RVRkJha003UVVGRFFWWXNSVUZCUVVFc1UwRkJVeXhEUVVGRExGbEJRVTA3UVVGRFpDeFJRVUZKVHl4SFFVRkhMRWxCUVVrc1EwRkJRMFlzWTBGQldpeEZRVUUwUWp0QlFVTXhRaXhWUVVGSlRTeFJRVUZLTzBGQlEwRktMRTFCUVVGQkxFZEJRVWNzUTBGQlEwc3NUVUZCU2l4RFFVRlhMRU5CUVVNc1kwRkJSQ3hEUVVGWUxFVkJRVFpDTEZsQlFVMDdRVUZEYWtORUxGRkJRVUZCTEZGQlFWRXNSMEZCUnl4SlFVRkpSU3hKUVVGSkxFTkJRVU5ETEU5QlFWUXNRMEZCYVVJN1FVRkRNVUpLTEZWQlFVRkJMRTFCUVUwc1JVRkJUa0VzVFVGRU1FSTdRVUZGTVVKR0xGVkJRVUZCTEZGQlFWRXNSVUZCVWtFN1FVRkdNRUlzVTBGQmFrSXNRMEZCV0R0QlFVbEJSQ3hSUVVGQlFTeEhRVUZITEVOQlFVTlJMRlZCUVVvc1EwRkJaVW9zVVVGQlpqdEJRVU5CVEN4UlFVRkJRU3hwUWtGQmFVSXNRMEZCUTBzc1VVRkJSQ3hEUVVGcVFqdEJRVU5FTEU5QlVFUTdRVUZSUVN4aFFVRlBMRmxCUVUwN1FVRkRXQ3haUVVGSlFTeFJRVUZLTEVWQlFXTTdRVUZEV2tvc1ZVRkJRVUVzUjBGQlJ5eERRVUZEVXl4aFFVRktMRU5CUVd0Q1RDeFJRVUZzUWp0QlFVTkVPMEZCUTBZc1QwRktSRHRCUVV0RU8wRkJRMFlzUjBGcVFsRXNSVUZwUWs0c1EwRkJRMG9zUjBGQlJDeERRV3BDVFN4RFFVRlVPMEZCYlVKQlRDeEZRVUZCUVN4WFFVRlhMRU5CUVVOSExHTkJRVVFzUlVGQmEwSkpMRkZCUVd4Q0xFTkJRVmc3UVVGRFFTeFRRVUZQTzBGQlEweEtMRWxCUVVGQkxHTkJRV01zUlVGQlpFRXNZMEZFU3p0QlFVVk1ReXhKUVVGQlFTeHBRa0ZCYVVJc1JVRkJha0pCTzBGQlJrc3NSMEZCVUR0QlFVbEVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnZFhObFJXWm1aV04wTENCMWMyVlRkR0YwWlNCOUlHWnliMjBnSjNKbFlXTjBKenRjYm1sdGNHOXlkQ0I3SUZSdmIyeENZWEpEYjI1MGNtOXNVSEp2Y0hNZ2ZTQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUIxYzJWV2FYTnBZV0pzWlNCOUlHWnliMjBnSnk0dUwyTnZiVzF2Ymk5b2IyOXJjeWM3WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1ZYTmxWRzl2YkVKaGNrTnZiblJ5YjJ3Z1pYaDBaVzVrY3lCVWIyOXNRbUZ5UTI5dWRISnZiRkJ5YjNCeklIdDlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUIxYzJWVWIyOXNRbUZ5UTI5dWRISnZiQ2h3Y205d2N5QTlJSHQ5SUdGeklGVnpaVlJ2YjJ4Q1lYSkRiMjUwY205c0tTQjdYRzRnSUdOdmJuTjBJRnQwYjI5c1FtRnlRMjl1ZEhKdmJDd2djMlYwVkc5dmJFSmhja052Ym5SeWIyeGRJRDBnZFhObFUzUmhkR1U4UVUxaGNDNVViMjlzUW1GeVBpZ3BPMXh1SUNCamIyNXpkQ0I3SUcxaGNDd2djRzl6YVhScGIyNHNJSFpwYzJsaFlteGxMQ0J2Wm1aelpYUWdmU0E5SUhCeWIzQnpPMXh1SUNCMWMyVkZabVpsWTNRb0tDa2dQVDRnZTF4dUlDQWdJR2xtSUNodFlYQWdKaVlnSVhSdmIyeENZWEpEYjI1MGNtOXNLU0I3WEc0Z0lDQWdJQ0JzWlhRZ2FXNXpkR0Z1WTJVNklFRk5ZWEF1UTI5dWRISnZiRHRjYmlBZ0lDQWdJRzFoY0M1d2JIVm5hVzRvV3lkQlRXRndMbFJ2YjJ4Q1lYSW5YU3dnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JwYm5OMFlXNWpaU0E5SUc1bGR5QkJUV0Z3TGxSdmIyeENZWElvZTF4dUlDQWdJQ0FnSUNBZ0lHOW1abk5sZEN4Y2JpQWdJQ0FnSUNBZ0lDQndiM05wZEdsdmJpeGNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUcxaGNDNWhaR1JEYjI1MGNtOXNLR2x1YzNSaGJtTmxLVHRjYmlBZ0lDQWdJQ0FnYzJWMFZHOXZiRUpoY2tOdmJuUnliMndvYVc1emRHRnVZMlVwTzF4dUlDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNCeVpYUjFjbTRnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JwWmlBb2FXNXpkR0Z1WTJVcElIdGNiaUFnSUNBZ0lDQWdJQ0J0WVhBdWNtVnRiM1psUTI5dWRISnZiQ2hwYm5OMFlXNWpaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwN1hHNGdJQ0FnZlZ4dUlDQjlMQ0JiYldGd1hTazdYRzVjYmlBZ2RYTmxWbWx6YVdGaWJHVW9kRzl2YkVKaGNrTnZiblJ5YjJ3aExDQjJhWE5wWVdKc1pTazdYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdkRzl2YkVKaGNrTnZiblJ5YjJ3c1hHNGdJQ0FnYzJWMFZHOXZiRUpoY2tOdmJuUnliMndzWEc0Z0lIMDdYRzU5WEc0aVhYMD0iLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlSW1wZXJhdGl2ZUhhbmRsZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRvb2xCYXJDb250cm9sIH0gZnJvbSAnLi91c2VUb29sQmFyQ29udHJvbCc7XG5leHBvcnQgdmFyIFRvb2xCYXJDb250cm9sID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF91c2VUb29sQmFyQ29udHJvbCA9IHVzZVRvb2xCYXJDb250cm9sKHByb3BzKSxcbiAgICAgIHRvb2xCYXJDb250cm9sID0gX3VzZVRvb2xCYXJDb250cm9sLnRvb2xCYXJDb250cm9sO1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgdG9vbEJhckNvbnRyb2w6IHRvb2xCYXJDb250cm9sXG4gICAgfSk7XG4gIH0sIFt0b29sQmFyQ29udHJvbF0pO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OVViMjlzUW1GeVEyOXVkSEp2YkM5cGJtUmxlQzUwYzNnaVhTd2libUZ0WlhNaU9sc2lVbVZoWTNRaUxDSjFjMlZKYlhCbGNtRjBhWFpsU0dGdVpHeGxJaXdpZFhObFZHOXZiRUpoY2tOdmJuUnliMndpTENKVWIyOXNRbUZ5UTI5dWRISnZiQ0lzSW1admNuZGhjbVJTWldZaUxDSndjbTl3Y3lJc0luSmxaaUlzSW5SdmIyeENZWEpEYjI1MGNtOXNJbDBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzVDBGQlQwRXNTMEZCVUN4SlFVRm5Ra01zYlVKQlFXaENMRkZCUVRKRExFOUJRVE5ETzBGQlJVRXNVMEZCVTBNc2FVSkJRVlFzVVVGQmEwTXNjVUpCUVd4RE8wRkJTVUVzVDBGQlR5eEpRVUZOUXl4alFVRmpMR2RDUVVGSFNDeExRVUZMTEVOQlFVTkpMRlZCUVU0c1EwRkJNa1FzVlVGQlEwTXNTMEZCUkN4RlFVRlJReXhIUVVGU0xFVkJRV2RDTzBGQlEzWkhMREpDUVVFeVFrb3NhVUpCUVdsQ0xFTkJRVU5ITEV0QlFVUXNRMEZCTlVNN1FVRkJRU3hOUVVGUlJTeGpRVUZTTEhOQ1FVRlJRU3hqUVVGU096dEJRVU5CVGl4RlFVRkJRU3h0UWtGQmJVSXNRMEZCUTBzc1IwRkJSQ3hGUVVGTk8wRkJRVUVzTWtOQlFWbEVMRXRCUVZvN1FVRkJiVUpGTEUxQlFVRkJMR05CUVdNc1JVRkJaRUU3UVVGQmJrSTdRVUZCUVN4SFFVRk9MRVZCUVRSRExFTkJRVU5CTEdOQlFVUXNRMEZCTlVNc1EwRkJia0k3UVVGRFFTeFRRVUZQTEVsQlFWQTdRVUZEUkN4RFFVbzJRaXhEUVVGMlFpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaV0ZqZEN3Z2V5QjFjMlZKYlhCbGNtRjBhWFpsU0dGdVpHeGxJSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dUM1psY214aGVWQnliM0J6SUgwZ1puSnZiU0FuTGk0dlkyOXRiVzl1TDIxaGNDYzdYRzVwYlhCdmNuUWdleUIxYzJWVWIyOXNRbUZ5UTI5dWRISnZiQ0I5SUdaeWIyMGdKeTR2ZFhObFZHOXZiRUpoY2tOdmJuUnliMnduTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElGUnZiMnhDWVhKRGIyNTBjbTlzVUhKdmNITWdaWGgwWlc1a2N5QlBkbVZ5YkdGNVVISnZjSE1zSUVGTllYQXVWRzl2YkVKaGNrOXdkR2x2Ym5NZ2UzMWNibHh1Wlhod2IzSjBJR052Ym5OMElGUnZiMnhDWVhKRGIyNTBjbTlzSUQwZ1VtVmhZM1F1Wm05eWQyRnlaRkpsWmp4VWIyOXNRbUZ5UTI5dWRISnZiRkJ5YjNCekxDQlViMjlzUW1GeVEyOXVkSEp2YkZCeWIzQnpQaWdvY0hKdmNITXNJSEpsWmlrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUhSdmIyeENZWEpEYjI1MGNtOXNJSDBnUFNCMWMyVlViMjlzUW1GeVEyOXVkSEp2YkNod2NtOXdjeWs3WEc0Z0lIVnpaVWx0Y0dWeVlYUnBkbVZJWVc1a2JHVW9jbVZtTENBb0tTQTlQaUFvZXlBdUxpNXdjbTl3Y3l3Z2RHOXZiRUpoY2tOdmJuUnliMndnZlNrc0lGdDBiMjlzUW1GeVEyOXVkSEp2YkYwcE8xeHVJQ0J5WlhSMWNtNGdiblZzYkR0Y2JuMHBPMXh1SWwxOSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVmlzaWFibGUgfSBmcm9tICcuLi9jb21tb24vaG9va3MnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbnRyb2xCYXJDb250cm9sKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBjb250cm9sQmFyQ29udHJvbCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRDb250cm9sQmFyQ29udHJvbCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIG1hcCA9IHByb3BzLm1hcCxcbiAgICAgIHBvc2l0aW9uID0gcHJvcHMucG9zaXRpb24sXG4gICAgICB2aXNpYWJsZSA9IHByb3BzLnZpc2lhYmxlLFxuICAgICAgb2Zmc2V0ID0gcHJvcHMub2Zmc2V0O1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtYXAgJiYgIWNvbnRyb2xCYXJDb250cm9sKSB7XG4gICAgICB2YXIgaW5zdGFuY2U7XG4gICAgICBtYXAucGx1Z2luKFsnQU1hcC5Db250cm9sQmFyJywgJ0FNYXAuSGF3a0V5ZSddLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IEFNYXAuQ29udHJvbEJhcih7XG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uXG4gICAgICAgIH0pO1xuICAgICAgICBtYXAuYWRkQ29udHJvbChpbnN0YW5jZSk7XG4gICAgICAgIHNldENvbnRyb2xCYXJDb250cm9sKGluc3RhbmNlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgbWFwLnJlbW92ZUNvbnRyb2woaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW21hcF0pO1xuICB1c2VWaXNpYWJsZShjb250cm9sQmFyQ29udHJvbCwgdmlzaWFibGUpO1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2xCYXJDb250cm9sOiBjb250cm9sQmFyQ29udHJvbCxcbiAgICBzZXRDb250cm9sQmFyQ29udHJvbDogc2V0Q29udHJvbEJhckNvbnRyb2xcbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlEYjI1MGNtOXNRbUZ5UTI5dWRISnZiQzkxYzJWRGIyNTBjbTlzUW1GeVEyOXVkSEp2YkM1MGMzZ2lYU3dpYm1GdFpYTWlPbHNpZFhObFJXWm1aV04wSWl3aWRYTmxVM1JoZEdVaUxDSjFjMlZXYVhOcFlXSnNaU0lzSW5WelpVTnZiblJ5YjJ4Q1lYSkRiMjUwY205c0lpd2ljSEp2Y0hNaUxDSmpiMjUwY205c1FtRnlRMjl1ZEhKdmJDSXNJbk5sZEVOdmJuUnliMnhDWVhKRGIyNTBjbTlzSWl3aWJXRndJaXdpY0c5emFYUnBiMjRpTENKMmFYTnBZV0pzWlNJc0ltOW1abk5sZENJc0ltbHVjM1JoYm1ObElpd2ljR3gxWjJsdUlpd2lRVTFoY0NJc0lrTnZiblJ5YjJ4Q1lYSWlMQ0poWkdSRGIyNTBjbTlzSWl3aWNtVnRiM1psUTI5dWRISnZiQ0pkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEZOQlFWTkJMRk5CUVZRc1JVRkJiMEpETEZGQlFYQkNMRkZCUVc5RExFOUJRWEJETzBGQlJVRXNVMEZCVTBNc1YwRkJWQ3hSUVVFMFFpeHBRa0ZCTlVJN1FVRkpRU3hQUVVGUExGTkJRVk5ETEc5Q1FVRlVMRWRCUVd0Rk8wRkJRVUVzVFVGQmNFTkRMRXRCUVc5RExIVkZRVUUxUWl4RlFVRTBRanM3UVVGRGRrVXNhMEpCUVd0RVNDeFJRVUZSTEVWQlFURkVPMEZCUVVFN1FVRkJRU3hOUVVGUFNTeHBRa0ZCVUR0QlFVRkJMRTFCUVRCQ1F5eHZRa0ZCTVVJN08wRkJRMEVzVFVGQlVVTXNSMEZCVWl4SFFVRTBRMGdzUzBGQk5VTXNRMEZCVVVjc1IwRkJVanRCUVVGQkxFMUJRV0ZETEZGQlFXSXNSMEZCTkVOS0xFdEJRVFZETEVOQlFXRkpMRkZCUVdJN1FVRkJRU3hOUVVGMVFrTXNVVUZCZGtJc1IwRkJORU5NTEV0QlFUVkRMRU5CUVhWQ1N5eFJRVUYyUWp0QlFVRkJMRTFCUVdsRFF5eE5RVUZxUXl4SFFVRTBRMDRzUzBGQk5VTXNRMEZCYVVOTkxFMUJRV3BETzBGQlEwRldMRVZCUVVGQkxGTkJRVk1zUTBGQlF5eFpRVUZOTzBGQlEyUXNVVUZCU1U4c1IwRkJSeXhKUVVGSkxFTkJRVU5HTEdsQ1FVRmFMRVZCUVN0Q08wRkJRemRDTEZWQlFVbE5MRkZCUVVvN1FVRkRRVW9zVFVGQlFVRXNSMEZCUnl4RFFVRkRTeXhOUVVGS0xFTkJRVmNzUTBGQlF5eHBRa0ZCUkN4RlFVRnZRaXhqUVVGd1FpeERRVUZZTEVWQlFXZEVMRmxCUVUwN1FVRkRjRVJFTEZGQlFVRkJMRkZCUVZFc1IwRkJSeXhKUVVGSlJTeEpRVUZKTEVOQlFVTkRMRlZCUVZRc1EwRkJiMEk3UVVGRE4wSktMRlZCUVVGQkxFMUJRVTBzUlVGQlJVRXNUVUZFY1VJN1FVRkZOMEpHTEZWQlFVRkJMRkZCUVZFc1JVRkJVa0U3UVVGR05rSXNVMEZCY0VJc1EwRkJXRHRCUVVsQlJDeFJRVUZCUVN4SFFVRkhMRU5CUVVOUkxGVkJRVW9zUTBGQlpVb3NVVUZCWmp0QlFVTkJUQ3hSUVVGQlFTeHZRa0ZCYjBJc1EwRkJRMHNzVVVGQlJDeERRVUZ3UWp0QlFVTkVMRTlCVUVRN1FVRlJRU3hoUVVGUExGbEJRVTA3UVVGRFdDeFpRVUZKUVN4UlFVRktMRVZCUVdNN1FVRkRXa29zVlVGQlFVRXNSMEZCUnl4RFFVRkRVeXhoUVVGS0xFTkJRV3RDVEN4UlFVRnNRanRCUVVORU8wRkJRMFlzVDBGS1JEdEJRVXRFTzBGQlEwWXNSMEZxUWxFc1JVRnBRazRzUTBGQlEwb3NSMEZCUkN4RFFXcENUU3hEUVVGVU8wRkJiVUpCVEN4RlFVRkJRU3hYUVVGWExFTkJRVU5ITEdsQ1FVRkVMRVZCUVhGQ1NTeFJRVUZ5UWl4RFFVRllPMEZCUTBFc1UwRkJUenRCUVVOTVNpeEpRVUZCUVN4cFFrRkJhVUlzUlVGQmFrSkJMR2xDUVVSTE8wRkJSVXhETEVsQlFVRkJMRzlDUVVGdlFpeEZRVUZ3UWtFN1FVRkdTeXhIUVVGUU8wRkJTVVFpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCMWMyVkZabVpsWTNRc0lIVnpaVk4wWVhSbElIMGdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUhzZ1EyOXVkSEp2YkVKaGNrTnZiblJ5YjJ4UWNtOXdjeUI5SUdaeWIyMGdKeTRuTzF4dWFXMXdiM0owSUhzZ2RYTmxWbWx6YVdGaWJHVWdmU0JtY205dElDY3VMaTlqYjIxdGIyNHZhRzl2YTNNbk8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRlZ6WlVOdmJuUnliMnhDWVhKRGIyNTBjbTlzSUdWNGRHVnVaSE1nUTI5dWRISnZiRUpoY2tOdmJuUnliMnhRY205d2N5QjdmVnh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZFhObFEyOXVkSEp2YkVKaGNrTnZiblJ5YjJ3b2NISnZjSE1nUFNCN2ZTQmhjeUJWYzJWRGIyNTBjbTlzUW1GeVEyOXVkSEp2YkNrZ2UxeHVJQ0JqYjI1emRDQmJZMjl1ZEhKdmJFSmhja052Ym5SeWIyd3NJSE5sZEVOdmJuUnliMnhDWVhKRGIyNTBjbTlzWFNBOUlIVnpaVk4wWVhSbFBFRk5ZWEF1UTI5dWRISnZiRUpoY2o0b0tUdGNiaUFnWTI5dWMzUWdleUJ0WVhBc0lIQnZjMmwwYVc5dUxDQjJhWE5wWVdKc1pTd2diMlptYzJWMElIMGdQU0J3Y205d2N6dGNiaUFnZFhObFJXWm1aV04wS0NncElEMCtJSHRjYmlBZ0lDQnBaaUFvYldGd0lDWW1JQ0ZqYjI1MGNtOXNRbUZ5UTI5dWRISnZiQ2tnZTF4dUlDQWdJQ0FnYkdWMElHbHVjM1JoYm1ObE9pQkJUV0Z3TGtOdmJuUnliMnhDWVhJN1hHNGdJQ0FnSUNCdFlYQXVjR3gxWjJsdUtGc25RVTFoY0M1RGIyNTBjbTlzUW1GeUp5d2dKMEZOWVhBdVNHRjNhMFY1WlNkZExDQW9LU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHbHVjM1JoYm1ObElEMGdibVYzSUVGTllYQXVRMjl1ZEhKdmJFSmhjaWg3WEc0Z0lDQWdJQ0FnSUNBZ2IyWm1jMlYwT2lCdlptWnpaWFFzWEc0Z0lDQWdJQ0FnSUNBZ2NHOXphWFJwYjI0c1hHNGdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0J0WVhBdVlXUmtRMjl1ZEhKdmJDaHBibk4wWVc1alpTazdYRzRnSUNBZ0lDQWdJSE5sZEVOdmJuUnliMnhDWVhKRGIyNTBjbTlzS0dsdWMzUmhibU5sS1R0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ2NtVjBkWEp1SUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVjM1JoYm1ObEtTQjdYRzRnSUNBZ0lDQWdJQ0FnYldGd0xuSmxiVzkyWlVOdmJuUnliMndvYVc1emRHRnVZMlVwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JpQWdmU3dnVzIxaGNGMHBPMXh1WEc0Z0lIVnpaVlpwYzJsaFlteGxLR052Ym5SeWIyeENZWEpEYjI1MGNtOXNJU3dnZG1semFXRmliR1VwTzF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUdOdmJuUnliMnhDWVhKRGIyNTBjbTlzTEZ4dUlDQWdJSE5sZEVOdmJuUnliMnhDWVhKRGIyNTBjbTlzTEZ4dUlDQjlPMXh1ZlZ4dUlsMTkiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlSW1wZXJhdGl2ZUhhbmRsZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRyb2xCYXJDb250cm9sIH0gZnJvbSAnLi91c2VDb250cm9sQmFyQ29udHJvbCc7XG5leHBvcnQgdmFyIENvbnRyb2xCYXJDb250cm9sID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF91c2VDb250cm9sQmFyQ29udHJvbCA9IHVzZUNvbnRyb2xCYXJDb250cm9sKHByb3BzKSxcbiAgICAgIGNvbnRyb2xCYXJDb250cm9sID0gX3VzZUNvbnRyb2xCYXJDb250cm9sLmNvbnRyb2xCYXJDb250cm9sO1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgY29udHJvbEJhckNvbnRyb2w6IGNvbnRyb2xCYXJDb250cm9sXG4gICAgfSk7XG4gIH0sIFtjb250cm9sQmFyQ29udHJvbF0pO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OURiMjUwY205c1FtRnlRMjl1ZEhKdmJDOXBibVJsZUM1MGMzZ2lYU3dpYm1GdFpYTWlPbHNpVW1WaFkzUWlMQ0oxYzJWSmJYQmxjbUYwYVhabFNHRnVaR3hsSWl3aWRYTmxRMjl1ZEhKdmJFSmhja052Ym5SeWIyd2lMQ0pEYjI1MGNtOXNRbUZ5UTI5dWRISnZiQ0lzSW1admNuZGhjbVJTWldZaUxDSndjbTl3Y3lJc0luSmxaaUlzSW1OdmJuUnliMnhDWVhKRGIyNTBjbTlzSWwwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc1QwRkJUMEVzUzBGQlVDeEpRVUZuUWtNc2JVSkJRV2hDTEZGQlFUSkRMRTlCUVRORE8wRkJSVUVzVTBGQlUwTXNiMEpCUVZRc1VVRkJjVU1zZDBKQlFYSkRPMEZCU1VFc1QwRkJUeXhKUVVGTlF5eHBRa0ZCYVVJc1owSkJRVWRJTEV0QlFVc3NRMEZCUTBrc1ZVRkJUaXhEUVVGcFJTeFZRVUZEUXl4TFFVRkVMRVZCUVZGRExFZEJRVklzUlVGQlowSTdRVUZEYUVnc09FSkJRVGhDU2l4dlFrRkJiMElzUTBGQlEwY3NTMEZCUkN4RFFVRnNSRHRCUVVGQkxFMUJRVkZGTEdsQ1FVRlNMSGxDUVVGUlFTeHBRa0ZCVWpzN1FVRkRRVTRzUlVGQlFVRXNiVUpCUVcxQ0xFTkJRVU5MTEVkQlFVUXNSVUZCVFR0QlFVRkJMREpEUVVGWlJDeExRVUZhTzBGQlFXMUNSU3hOUVVGQlFTeHBRa0ZCYVVJc1JVRkJha0pCTzBGQlFXNUNPMEZCUVVFc1IwRkJUaXhGUVVFclF5eERRVUZEUVN4cFFrRkJSQ3hEUVVFdlF5eERRVUZ1UWp0QlFVTkJMRk5CUVU4c1NVRkJVRHRCUVVORUxFTkJTbWRETEVOQlFURkNJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRkpsWVdOMExDQjdJSFZ6WlVsdGNHVnlZWFJwZG1WSVlXNWtiR1VnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUJQZG1WeWJHRjVVSEp2Y0hNZ2ZTQm1jbTl0SUNjdUxpOWpiMjF0YjI0dmJXRndKenRjYm1sdGNHOXlkQ0I3SUhWelpVTnZiblJ5YjJ4Q1lYSkRiMjUwY205c0lIMGdabkp2YlNBbkxpOTFjMlZEYjI1MGNtOXNRbUZ5UTI5dWRISnZiQ2M3WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXVkSEp2YkVKaGNrTnZiblJ5YjJ4UWNtOXdjeUJsZUhSbGJtUnpJRTkyWlhKc1lYbFFjbTl3Y3l3Z1FVMWhjQzVEYjI1MGNtOXNRbUZ5VDNCMGFXOXVjeUI3ZlZ4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnUTI5dWRISnZiRUpoY2tOdmJuUnliMndnUFNCU1pXRmpkQzVtYjNKM1lYSmtVbVZtUEVOdmJuUnliMnhDWVhKRGIyNTBjbTlzVUhKdmNITXNJRU52Ym5SeWIyeENZWEpEYjI1MGNtOXNVSEp2Y0hNK0tDaHdjbTl3Y3l3Z2NtVm1LU0E5UGlCN1hHNGdJR052Ym5OMElIc2dZMjl1ZEhKdmJFSmhja052Ym5SeWIyd2dmU0E5SUhWelpVTnZiblJ5YjJ4Q1lYSkRiMjUwY205c0tIQnliM0J6S1R0Y2JpQWdkWE5sU1cxd1pYSmhkR2wyWlVoaGJtUnNaU2h5WldZc0lDZ3BJRDArSUNoN0lDNHVMbkJ5YjNCekxDQmpiMjUwY205c1FtRnlRMjl1ZEhKdmJDQjlLU3dnVzJOdmJuUnliMnhDWVhKRGIyNTBjbTlzWFNrN1hHNGdJSEpsZEhWeWJpQnVkV3hzTzF4dWZTazdYRzRpWFgwPSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIFJlZiwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYXAsIFNjYWxlQ29udHJvbCwgVG9vbEJhckNvbnRyb2wsIENvbnRyb2xCYXJDb250cm9sLCBHZW9sb2NhdGlvbiwgTWFwUHJvcHMgfSBmcm9tIFwiQHVpdy9yZWFjdC1hbWFwXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgdXNlU2l6ZSB9IGZyb20gXCJhaG9va3NcIjtcbmltcG9ydCB7IHVzZU1hcENlbnRlciB9IGZyb20gXCIuLi9ob29rcy91c2VNYXBDZW50ZXJcIjtcblxuLyoqXG4gKiBBTWFwIGNoaWxkIGNvbXBvbmV0XG4gKiBAcGFyYW0gcFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExvY2F0aW9uU2VsZWN0UG9pbnQocDogYW55KSB7XG4gICAgY29uc3QgbWFya2VyUmVmID0gdXNlUmVmPEFNYXAuTWFya2VyPigpO1xuICAgIGNvbnN0IHNpemUgPSB1c2VTaXplKHAuY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNlbnRlciA9IHVzZU1hcENlbnRlcihwLm1hcCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFtYXJrZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IEFNYXAuTWFya2VyKHtcbiAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICAnPGltZyBjbGFzcz1cImFtYXAtZ2VvbG9jYXRpb24tbWFya2VyXCIgc3JjPVwiaHR0cHM6Ly9hLmFtYXAuY29tL2pzYXBpL3N0YXRpYy9pbWFnZS9wbHVnaW4vcG9pbnQucG5nXCI+JyxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IG5ldyBBTWFwLlBpeGVsKC0xMCwgLTEwKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYXJrZXJSZWYuY3VycmVudCA9IG1hcmtlcjtcbiAgICAgICAgICAgIHAubWFwLmFkZChtYXJrZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpemUud2lkdGggJiYgc2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGE6IEFNYXAuTG5nTGF0ID0gcC5tYXAuY29udGFpbmVyVG9MbmdMYXQoW3NpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCAvIDJdKTtcbiAgICAgICAgICAgIG1hcmtlclJlZi5jdXJyZW50LnNldFBvc2l0aW9uKFthLmdldExuZyEoKSwgYS5nZXRMYXQhKCldKTtcbiAgICAgICAgfVxuICAgIH0sIFtzaXplLCBjZW50ZXJdKTtcblxuICAgIHJldHVybiBudWxsO1xufVxuXG5pbnRlcmZhY2UgTG9jYXRpb25Nb2RlUHJvcHMge1xuICAgIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgICBvbkNlbnRlckNoYW5nZT86IChsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgem9vbTogbnVtYmVyO1xuICAgIG9uWm9vbUNoYW5nZT86ICh6b29tOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgbGF0OiBudW1iZXI7XG4gICAgbG5nOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICog5Z2Q5qCH5ou+5Y+W5qih5byPXG4gICAgICovXG4gICAgZW5hYmxlTG9jYXRpb25Nb2RlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb25Nb2RlKHByb3BzOiBMb2NhdGlvbk1vZGVQcm9wcykge1xuICAgIGNvbnN0IFtpc01vdmluZywgc2V0SXNNb3ZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IG1hcFJlZjogUmVmPE1hcFByb3BzICYgeyBtYXA/OiBhbnkgfCB1bmRlZmluZWQgfT4gfCB1bmRlZmluZWQgPSB1c2VSZWYobnVsbCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJmbGV4aXRlbS05XCIpfVxuICAgICAgICAgICAgcmVmPXttYXBSZWZ9XG4gICAgICAgICAgICB6b29tPXtwcm9wcy56b29tfVxuICAgICAgICAgICAgb25Nb3ZlU3RhcnQ9eygpID0+IHNldElzTW92aW5nKHRydWUpfVxuICAgICAgICAgICAgb25Nb3ZlRW5kPXsoKSA9PiBzZXRJc01vdmluZyhmYWxzZSl9XG4gICAgICAgICAgICBvbk1hcE1vdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMub25DZW50ZXJDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DZW50ZXJDaGFuZ2UobWFwUmVmLmN1cnJlbnQ/Lm1hcC5nZXRDZW50ZXIoKS5sYXQsIG1hcFJlZi5jdXJyZW50Py5tYXAuZ2V0Q2VudGVyKCkubG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25ab29tQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm9uQ2VudGVyQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2VudGVyQ2hhbmdlKG1hcFJlZi5jdXJyZW50Py5tYXAuZ2V0Q2VudGVyKCkubGF0LCBtYXBSZWYuY3VycmVudD8ubWFwLmdldENlbnRlcigpLmxuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5vblpvb21DaGFuZ2UgJiYgcHJvcHMub25ab29tQ2hhbmdlKG1hcFJlZi5jdXJyZW50Py5tYXAuZ2V0Wm9vbSgpKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjZW50ZXI9e2lzTW92aW5nID8gdW5kZWZpbmVkIDogW3Byb3BzLmxuZywgcHJvcHMubGF0XX1cbiAgICAgICAgICAgIG9uRGJsQ2xpY2s9eyhldmVudDogQU1hcC5NYXBzRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMub25DZW50ZXJDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DZW50ZXJDaGFuZ2UoZXZlbnQubG5nbGF0LmdldExhdCEoKSwgZXZlbnQubG5nbGF0LmdldExuZyEoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge3Byb3BzLmVuYWJsZUxvY2F0aW9uTW9kZSA/IChcbiAgICAgICAgICAgICAgICA8TG9jYXRpb25TZWxlY3RQb2ludD48L0xvY2F0aW9uU2VsZWN0UG9pbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxHZW9sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyDmmK/lkKbkvb/nlKjpq5jnsr7luqblrprkvY3vvIzpu5jorqQ6dHJ1ZVxuICAgICAgICAgICAgICAgICAgICBlbmFibGVIaWdoQWNjdXJhY3lcbiAgICAgICAgICAgICAgICAgICAgLy8g6LaF6L+HMTDnp5LlkI7lgZzmraLlrprkvY3vvIzpu5jorqTvvJo1c1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0PXsxMDAwMH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5a6a5L2N5oyJ6ZKu55qE5YGc6Z2g5L2N572uXG4gICAgICAgICAgICAgICAgICAgIC8vIOWumOaWuSB2MiDkuI3lho3mlK/mjIFcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0dG9uUG9zaXRpb249XCJSQlwiXG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5a6a5L2N5oyJ6ZKu5LiO6K6+572u55qE5YGc6Z2g5L2N572u55qE5YGP56e76YeP77yM6buY6K6k77yaUGl4ZWwoMTAsIDIwKVxuICAgICAgICAgICAgICAgICAgICAvLyDlrpjmlrkgdjIg5LiN5YaN5pSv5oyBXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dHRvbk9mZnNldD17bmV3IEFNYXAuUGl4ZWwoMTAsIDIwKX1cblxuICAgICAgICAgICAgICAgICAgICAvLyDlrprkvY3miJDlip/lkI7mmK/lkKboh6rliqjosIPmlbTlnLDlm77op4bph47liLDlrprkvY3ngrlcbiAgICAgICAgICAgICAgICAgICAgem9vbVRvQWNjdXJhY3k9e3Byb3BzLmF1dG9Gb2N1c31cbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17ZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIui/lOWbnuaVsOaNru+8mlwiLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17ZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIumUmeivr+i/lOWbnuaVsOaNru+8mlwiLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxTY2FsZUNvbnRyb2wgb2Zmc2V0PXtbMTYsIDIwXX0gcG9zaXRpb249XCJMQlwiIC8+XG4gICAgICAgICAgICA8VG9vbEJhckNvbnRyb2wgb2Zmc2V0PXtbMTYsIDYwXX0gcG9zaXRpb249XCJSQlwiIC8+XG4gICAgICAgICAgICA8Q29udHJvbEJhckNvbnRyb2wgcG9zaXRpb249XCJSVFwiIC8+XG4gICAgICAgIDwvTWFwPlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBSZWYsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hcCwgU2NhbGVDb250cm9sLCBUb29sQmFyQ29udHJvbCwgQ29udHJvbEJhckNvbnRyb2wsIE1hcFByb3BzLCBNYXJrZXIgfSBmcm9tIFwiQHVpdy9yZWFjdC1hbWFwXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFNYXJrZXIge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGF0OiBudW1iZXI7XG4gICAgbG5nOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBSb2lNb2RlUHJvcHMge1xuICAgIGNoYW5nZT86IChsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgbWFya3M6IEFNYXJrZXJbXTtcbiAgICBvbkRibENsaWNrPzogKGV2ZW50OiBBTWFwLk1hcHNFdmVudCwgaWR4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgb25DZW50ZXJDaGFuZ2U/OiAobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHpvb206IG51bWJlcjtcbiAgICBvblpvb21DaGFuZ2U/OiAoem9vbTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGxhdDogbnVtYmVyO1xuICAgIGxuZzogbnVtYmVyO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9pTW9kZShwcm9wczogUm9pTW9kZVByb3BzKSB7XG4gICAgY29uc3QgW2lzTW92aW5nLCBzZXRJc01vdmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgbWFwUmVmOiBSZWY8TWFwUHJvcHMgJiB7IG1hcD86IGFueSB8IHVuZGVmaW5lZCB9PiB8IHVuZGVmaW5lZCA9IHVzZVJlZihudWxsKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TWFwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJmbGV4aXRlbS05XCIpfVxuICAgICAgICAgICAgcmVmPXttYXBSZWZ9XG4gICAgICAgICAgICB6b29tPXtwcm9wcy56b29tfVxuICAgICAgICAgICAgY2VudGVyPXtpc01vdmluZyA/IHVuZGVmaW5lZCA6IFtwcm9wcy5sbmcsIHByb3BzLmxhdF19XG4gICAgICAgICAgICBvbkRibENsaWNrPXsoZXZlbnQ6IEFNYXAuTWFwc0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLmNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2UoZXZlbnQubG5nbGF0LmdldExhdCEoKSwgZXZlbnQubG5nbGF0LmdldExuZyEoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXsoKSA9PiBzZXRJc01vdmluZyh0cnVlKX1cbiAgICAgICAgICAgIG9uTW92ZUVuZD17KCkgPT4gc2V0SXNNb3ZpbmcoZmFsc2UpfVxuICAgICAgICAgICAgb25NYXBNb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm9uQ2VudGVyQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2VudGVyQ2hhbmdlKG1hcFJlZi5jdXJyZW50Py5tYXAuZ2V0Q2VudGVyKCkubGF0LCBtYXBSZWYuY3VycmVudD8ubWFwLmdldENlbnRlcigpLmxuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uWm9vbUNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5vbkNlbnRlckNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNlbnRlckNoYW5nZShtYXBSZWYuY3VycmVudD8ubWFwLmdldENlbnRlcigpLmxhdCwgbWFwUmVmLmN1cnJlbnQ/Lm1hcC5nZXRDZW50ZXIoKS5sbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMub25ab29tQ2hhbmdlICYmIHByb3BzLm9uWm9vbUNoYW5nZShtYXBSZWYuY3VycmVudD8ubWFwLmdldFpvb20oKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8U2NhbGVDb250cm9sIG9mZnNldD17WzE2LCAyMF19IHBvc2l0aW9uPVwiTEJcIiAvPlxuICAgICAgICAgICAgPFRvb2xCYXJDb250cm9sIG9mZnNldD17WzE2LCA2MF19IHBvc2l0aW9uPVwiUkJcIiAvPlxuICAgICAgICAgICAgPENvbnRyb2xCYXJDb250cm9sIHBvc2l0aW9uPVwiUlRcIiAvPlxuICAgICAgICAgICAge3Byb3BzLm1hcmtzLm1hcCgobWFyaywgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPE1hcmtlclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgb25EYmxDbGljaz17KGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLm9uRGJsQ2xpY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkRibENsaWNrKGUsIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHZpc2lhYmxlXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXttYXJrLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17bmV3IEFNYXAuTG5nTGF0KG1hcmsubG5nLCBtYXJrLmxhdCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L01hcD5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRnJhZ21lbnQsIFJlZiwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1hcCwgU2NhbGVDb250cm9sLCBUb29sQmFyQ29udHJvbCwgQ29udHJvbEJhckNvbnRyb2wsIE1hcFByb3BzIH0gZnJvbSBcIkB1aXcvcmVhY3QtYW1hcFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxubGV0IGxhc3RQYW5lSWQgPSAxO1xuXG5mdW5jdGlvbiBEcml2aW5nKHA6IGFueSkge1xuICAgIGNvbnN0IGxhc3REcml2aW5nUmVmID0gdXNlUmVmPGFueT4oKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXAuc3RhcnRBbmRFbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdERyaXZpbmdSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgbGFzdERyaXZpbmdSZWYuY3VycmVudC5jbGVhcigpO1xuICAgICAgICAgICAgbGFzdERyaXZpbmdSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB3aW5kb3cuQU1hcC5wbHVnaW4oXCJBTWFwLkRyaXZpbmdcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocC5zdGFydEFuZEVuZCk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBkcml2aW5nID0gbmV3IHdpbmRvdy5BTWFwLkRyaXZpbmcoe1xuICAgICAgICAgICAgICAgIC8vIOmpvui9pui3r+e6v+inhOWIkuetlueVpe+8jEFNYXAuRHJpdmluZ1BvbGljeS5MRUFTVF9USU1F5piv5pyA5b+r5o235qih5byPXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHBvbGljeTogd2luZG93LkFNYXAuRHJpdmluZ1BvbGljeS5MRUFTVF9USU1FLFxuICAgICAgICAgICAgICAgIG1hcDogcC5tYXAsXG4gICAgICAgICAgICAgICAgcGFuZWw6IHAucGFuZUlkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGFzdERyaXZpbmdSZWYuY3VycmVudCA9IGRyaXZpbmc7XG5cbiAgICAgICAgICAgIC8qICAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleXdvcmQ6IFwi5YyX5Lqs5biC5Zyw6ZyH5bGA77yI5YWs5Lqk56uZ77yJXCIsIGNpdHk6IFwi5YyX5LqsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleXdvcmQ6IFwi5Lqm5bqE5paH5YyW5Zut77yI5Zyw6ZOB56uZ77yJXCIsIGNpdHk6IFwi5YyX5LqsXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXTsgKi9cblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgZHJpdmluZy5zZWFyY2goXG4gICAgICAgICAgICAgICAgbmV3IEFNYXAuTG5nTGF0KHAuc3RhcnRBbmRFbmRbMF0sIHAuc3RhcnRBbmRFbmRbMV0pLFxuICAgICAgICAgICAgICAgIG5ldyBBTWFwLkxuZ0xhdChwLnN0YXJ0QW5kRW5kWzJdLCBwLnN0YXJ0QW5kRW5kWzNdKSxcbiAgICAgICAgICAgICAgICAoc3RhdHVzOiBhbnksIHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOacquWHuumUmeaXtu+8jHJlc3VsdOWNs+aYr+WvueW6lOeahOi3r+e6v+inhOWIkuaWueahiFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW3Auc3RhcnRBbmRFbmRdKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cblxuaW50ZXJmYWNlIE5hdk1vZGVQcm9wcyB7XG4gICAgc3RhcnRBbmRFbmQ/OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TW9kZShwcm9wczogTmF2TW9kZVByb3BzKSB7XG4gICAgY29uc3QgcGFuZUlkID0gdXNlTWVtbygoKSA9PiArbmV3IERhdGUoKSArIFwiLXBhbmVcIiArIGxhc3RQYW5lSWQrKywgW10pO1xuICAgIGNvbnN0IG1hcFJlZjogUmVmPE1hcFByb3BzICYgeyBtYXA/OiBhbnkgfCB1bmRlZmluZWQgfT4gfCB1bmRlZmluZWQgPSB1c2VSZWYobnVsbCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8TWFwIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcImZsZXhpdGVtLTlcIil9IHJlZj17bWFwUmVmfT5cbiAgICAgICAgICAgICAgICA8RHJpdmluZyBwYW5lSWQ9e3BhbmVJZH0gc3RhcnRBbmRFbmQ9e3Byb3BzLnN0YXJ0QW5kRW5kfT48L0RyaXZpbmc+XG5cbiAgICAgICAgICAgICAgICA8U2NhbGVDb250cm9sIG9mZnNldD17WzE2LCAyMF19IHBvc2l0aW9uPVwiTEJcIiAvPlxuICAgICAgICAgICAgICAgIDxUb29sQmFyQ29udHJvbCBvZmZzZXQ9e1sxNiwgNjBdfSBwb3NpdGlvbj1cIlJCXCIgLz5cbiAgICAgICAgICAgICAgICA8Q29udHJvbEJhckNvbnRyb2wgcG9zaXRpb249XCJSVFwiIC8+XG4gICAgICAgICAgICA8L01hcD5cbiAgICAgICAgICAgIDxkaXYgaWQ9e3BhbmVJZH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiZmxleGl0ZW0tM1wiKX0gc3R5bGU9e3sgb3ZlcmZsb3c6IFwiYXV0b1wiIH19PjwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDU1NQcm9wZXJ0aWVzLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gQHRzLWlnbm9yZVxud2luZG93Ll9qc2xvYWRfID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiYW1hcCBhcGkgbG9hZGVkXCIpO1xufTtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgeyB1c2VTaXplLCB1c2VXaHlEaWRZb3VVcGRhdGUgfSBmcm9tIFwiYWhvb2tzXCI7XG5pbXBvcnQgeyB1c2VNYXBDZW50ZXIgfSBmcm9tIFwiLi4vaG9va3MvdXNlTWFwQ2VudGVyXCI7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbWVuZGl4LWNuL3Bpdy11dGlscy1pbnRlcm5hbFwiO1xuaW1wb3J0IHsgTW9kZUVudW0gfSBmcm9tIFwiLi4vLi4vdHlwaW5ncy9BTWFwUHJvcHNcIjtcbmltcG9ydCBMb2NhdGlvbk1vZGUgZnJvbSBcIi4vTG9jYXRpb25Nb2RlXCI7XG5pbXBvcnQgUm9pTW9kZSwgeyBBTWFya2VyIH0gZnJvbSBcIi4vUm9pTW9kZVwiO1xuaW1wb3J0IE5hdk1vZGUgZnJvbSBcIi4vTmF2TW9kZVwiO1xubGV0IGxhc3RWYWxpZEFNYXA6IGFueTtcbmV4cG9ydCBpbnRlcmZhY2UgQU1hcENvbXBvbmVudFByb3BzIHtcbiAgICAvLyBteFxuICAgIG5hbWU6IHN0cmluZztcbiAgICBjbGFzczogc3RyaW5nO1xuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbiAgICB0YWJJbmRleD86IG51bWJlcjtcblxuICAgIG1vZGU6IE1vZGVFbnVtO1xuICAgIHN0YXJ0QW5kRW5kPzogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG5cbiAgICBhbWFwS2V5Pzogc3RyaW5nO1xuICAgIG9uRGJsQ2xpY2s/OiAoZXZlbnQ6IEFNYXAuTWFwc0V2ZW50LCBpZHg6IG51bWJlcikgPT4gdm9pZDtcbiAgICBvbkNlbnRlckNoYW5nZT86IChsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgem9vbTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIOWdkOagh+aLvuWPluaooeW8j1xuICAgICAqL1xuICAgIGVuYWJsZUxvY2F0aW9uTW9kZT86IGJvb2xlYW47XG4gICAgbGF0OiBudW1iZXI7XG4gICAgbG5nOiBudW1iZXI7XG4gICAgYXV0b0ZvY3VzOiBib29sZWFuO1xuICAgIG1hcmtzOiBBTWFya2VyW107XG4gICAgb25ab29tQ2hhbmdlPzogKHpvb206IG51bWJlcikgPT4gdm9pZDtcbn1cblxuLyoqXG4gKiBBTWFwIGNoaWxkIGNvbXBvbmV0XG4gKiBAcGFyYW0gcFxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIExvY2F0aW9uU2VsZWN0UG9pbnQocDogYW55KSB7XG4gICAgY29uc3QgbWFya2VyUmVmID0gdXNlUmVmPEFNYXAuTWFya2VyPigpO1xuICAgIGNvbnN0IHNpemUgPSB1c2VTaXplKHAuY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNlbnRlciA9IHVzZU1hcENlbnRlcihwLm1hcCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFtYXJrZXJSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IEFNYXAuTWFya2VyKHtcbiAgICAgICAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgICAgICAgICAnPGltZyBjbGFzcz1cImFtYXAtZ2VvbG9jYXRpb24tbWFya2VyXCIgc3JjPVwiaHR0cHM6Ly9hLmFtYXAuY29tL2pzYXBpL3N0YXRpYy9pbWFnZS9wbHVnaW4vcG9pbnQucG5nXCI+JyxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IG5ldyBBTWFwLlBpeGVsKC0xMCwgLTEwKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYXJrZXJSZWYuY3VycmVudCA9IG1hcmtlcjtcbiAgICAgICAgICAgIHAubWFwLmFkZChtYXJrZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNpemUud2lkdGggJiYgc2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGE6IEFNYXAuTG5nTGF0ID0gcC5tYXAuY29udGFpbmVyVG9MbmdMYXQoW3NpemUud2lkdGggLyAyLCBzaXplLmhlaWdodCAvIDJdKTtcbiAgICAgICAgICAgIG1hcmtlclJlZi5jdXJyZW50LnNldFBvc2l0aW9uKFthLmdldExuZyEoKSwgYS5nZXRMYXQhKCldKTtcbiAgICAgICAgfVxuICAgIH0sIFtzaXplLCBjZW50ZXJdKTtcblxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgQU1hcENvbXBvbmVudCA9IChwcm9wczogQU1hcENvbXBvbmVudFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lzTG9hZGluZ0FwaSwgc2V0SXNMb2FkaW5nQXBpXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZjxhbnk+KCk7XG4gICAgY29uc3QgW2tleUlzSW52YWxpZCwgc2V0S2V5SXNJbnZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0xvYWRpbmdBcGkgJiYgcHJvcHMuYW1hcEtleSAmJiAhd2luZG93LkFNYXApIHtcbiAgICAgICAgICAgICh3aW5kb3cucmVxdWlyZSBhcyBhbnkpKFxuICAgICAgICAgICAgICAgIFtgaHR0cHM6Ly93ZWJhcGkuYW1hcC5jb20vbWFwcz92PTIuMCZrZXk9JHtwcm9wcy5hbWFwS2V5fSZwbHVnaW49QU1hcC5BZGFwdG9yYF0sXG4gICAgICAgICAgICAgICAgKF9BTWFwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuQU1hcCAmJiB0eXBlb2YgX0FNYXAgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RWYWxpZEFNYXAgPSBfQU1hcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5BTWFwID0gX0FNYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF9BTWFwID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXlJc0ludmFsaWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdFZhbGlkQU1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5BTWFwID0gbGFzdFZhbGlkQU1hcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmdBcGkoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5BTWFwKSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmdBcGkoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfSwgW2lzTG9hZGluZ0FwaSwgcHJvcHMuYW1hcEtleV0pO1xuXG4gICAgdXNlV2h5RGlkWW91VXBkYXRlKHByb3BzLm5hbWUsIHsgLi4ucHJvcHMgfSk7XG5cbiAgICBpZiAoa2V5SXNJbnZhbGlkKSB7XG4gICAgICAgIHJldHVybiA8QWxlcnQgYm9vdHN0cmFwU3R5bGU9XCJkYW5nZXJcIj7or7fmjIflrprkuIDkuKrmraPnoa7nmoTpq5jlvrflnLDlm753ZWJhcGkga2V5PC9BbGVydD47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMocHJvcHMuY2xhc3MsIFwibXgtYW1hcFwiLCBcImZsZXhjb250YWluZXJcIil9XG4gICAgICAgICAgICB0YWJJbmRleD17cHJvcHMudGFiSW5kZXh9XG4gICAgICAgICAgICBzdHlsZT17cHJvcHMuc3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtpc0xvYWRpbmdBcGkgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4+bG9hZGluZzwvc3Bhbj5cbiAgICAgICAgICAgICkgOiBwcm9wcy5tb2RlID09PSBcImxvY2F0aW9uXCIgPyAoXG4gICAgICAgICAgICAgICAgPExvY2F0aW9uTW9kZVxuICAgICAgICAgICAgICAgICAgICBlbmFibGVMb2NhdGlvbk1vZGU9e3Byb3BzLmVuYWJsZUxvY2F0aW9uTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXtwcm9wcy5hdXRvRm9jdXN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2VudGVyQ2hhbmdlPXtwcm9wcy5vbkNlbnRlckNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgem9vbT17cHJvcHMuem9vbX1cbiAgICAgICAgICAgICAgICAgICAgb25ab29tQ2hhbmdlPXtwcm9wcy5vblpvb21DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGxhdD17cHJvcHMubGF0fVxuICAgICAgICAgICAgICAgICAgICBsbmc9e3Byb3BzLmxuZ31cbiAgICAgICAgICAgICAgICA+PC9Mb2NhdGlvbk1vZGU+XG4gICAgICAgICAgICApIDogcHJvcHMubW9kZSA9PT0gXCJtYXJrZXJcIiA/IChcbiAgICAgICAgICAgICAgICA8Um9pTW9kZVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e3Byb3BzLm9uQ2VudGVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBtYXJrcz17cHJvcHMubWFya3N9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2VudGVyQ2hhbmdlPXtwcm9wcy5vbkNlbnRlckNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgem9vbT17cHJvcHMuem9vbX1cbiAgICAgICAgICAgICAgICAgICAgb25ab29tQ2hhbmdlPXtwcm9wcy5vblpvb21DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGxhdD17cHJvcHMubGF0fVxuICAgICAgICAgICAgICAgICAgICBsbmc9e3Byb3BzLmxuZ31cbiAgICAgICAgICAgICAgICAgICAgb25EYmxDbGljaz17cHJvcHMub25EYmxDbGlja31cbiAgICAgICAgICAgICAgICA+PC9Sb2lNb2RlPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TmF2TW9kZSBzdGFydEFuZEVuZD17cHJvcHMuc3RhcnRBbmRFbmR9PjwvTmF2TW9kZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFNYXBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0FNYXBDb21wb25lbnRcIjtcbmltcG9ydCB7IFZhbHVlU3RhdHVzIH0gZnJvbSBcIm1lbmRpeFwiO1xuaW1wb3J0IHsgZXhlY3V0ZUFjdGlvbiwgZGVib3VuY2UgfSBmcm9tIFwiQG1lbmRpeC1jbi9waXctdXRpbHMtaW50ZXJuYWxcIjtcblxuaW1wb3J0IHsgQU1hcENvbnRhaW5lclByb3BzIH0gZnJvbSBcIi4uL3R5cGluZ3MvQU1hcFByb3BzXCI7XG5cbmltcG9ydCBcIi4vdWkvQU1hcC5jc3NcIjtcbmltcG9ydCBCaWcgZnJvbSBcImJpZy5qc1wiO1xuaW1wb3J0IHsgQU1hcmtlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvUm9pTW9kZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQU1hcChwcm9wczogQU1hcENvbnRhaW5lclByb3BzKSB7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY2VudGVyTGF0LCBzZXRDZW50ZXJMYXRdID0gdXNlU3RhdGUoMjIuMjY4MjMzKTtcbiAgICBjb25zdCBbY2VudGVyTG5nLCBzZXRDZW50ZXJMbmddID0gdXNlU3RhdGUoMTEzLjUxNTk0Myk7XG4gICAgaWYgKHByb3BzLmNlbnRlclR5cGUgPT09IFwiZHluYW1pY1ZhbHVlXCIpIHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5sbmdDZW50ZXIgJiYgcHJvcHMubG5nQ2VudGVyLnN0YXR1cyA9PT0gVmFsdWVTdGF0dXMuQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgc2V0Q2VudGVyTG5nKHByb3BzLmxuZ0NlbnRlci52YWx1ZSEudG9OdW1iZXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMubGF0Q2VudGVyICYmIHByb3BzLmxhdENlbnRlci5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIHNldENlbnRlckxhdChwcm9wcy5sYXRDZW50ZXIudmFsdWUhLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbcHJvcHMubGF0Q2VudGVyLCBwcm9wcy5sbmdDZW50ZXJdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgc2V0Q2VudGVyTGF0KHByb3BzLmxhdENlbnRlclN0YXRpYy50b051bWJlcigpKTtcbiAgICAgICAgICAgIHNldENlbnRlckxuZyhwcm9wcy5sbmdDZW50ZXJTdGF0aWMudG9OdW1iZXIoKSk7XG4gICAgICAgIH0sIFtwcm9wcy5sYXRDZW50ZXJTdGF0aWMsIHByb3BzLmxuZ0NlbnRlclN0YXRpY10pO1xuICAgIH1cbiAgICBjb25zdCB6b29tID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy56b29tQXR0cmlidXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMuem9vbUNvbnN0LnRvTnVtYmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLnpvb21BdHRyaWJ1dGUgJiYgcHJvcHMuem9vbUF0dHJpYnV0ZS5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSkge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy56b29tQXR0cmlidXRlLnZhbHVlIS50b051bWJlcigpO1xuICAgICAgICB9XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgcmV0dXJuIDE1O1xuICAgIH0sIFtwcm9wcy56b29tQXR0cmlidXRlXSk7XG5cbiAgICBjb25zdCBvbkNlbnRlckNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBzZXRDZW50ZXJMYXQobGF0KTtcbiAgICAgICAgICAgIHNldENlbnRlckxuZyhsbmcpO1xuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgZXhlY3V0ZUFjdGlvbihwcm9wcy5vbkNoYW5nZUNlbnRlcik7XG4gICAgICAgICAgICAvLyB9LCA1MDApO1xuICAgICAgICAgICAgaWYgKHByb3BzLmxhdENlbnRlciAmJiBwcm9wcy5sYXRDZW50ZXIuc3RhdHVzID09PSBWYWx1ZVN0YXR1cy5BdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5sYXRDZW50ZXIuc2V0VmFsdWUobmV3IEJpZyhsYXQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5sbmdDZW50ZXIgJiYgcHJvcHMubG5nQ2VudGVyLnN0YXR1cyA9PT0gVmFsdWVTdGF0dXMuQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMubG5nQ2VudGVyLnNldFZhbHVlKG5ldyBCaWcobG5nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtwcm9wcy5sYXRDZW50ZXIsIHByb3BzLmxuZ0NlbnRlcl1cbiAgICApO1xuICAgIGNvbnN0IG9uWm9vbUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgICBkZWJvdW5jZSgoZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvcHMuem9vbUF0dHJpYnV0ZSAmJiAhcHJvcHMuem9vbUF0dHJpYnV0ZS5yZWFkT25seSkge1xuICAgICAgICAgICAgICAgIHByb3BzLnpvb21BdHRyaWJ1dGU/LnNldFZhbHVlKEJpZyhlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCksXG4gICAgICAgIFtwcm9wcy56b29tQXR0cmlidXRlXVxuICAgICk7XG5cbiAgICBjb25zdCBtYXJrcyA9IHVzZU1lbW88QU1hcmtlcltdPigoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5lbmFibGVNYXJrZXIgJiYgcHJvcHMuZGlzcGxheU1hcmtlciAmJiBwcm9wcy5tYXJrZXJzPy5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzLm1hcmtlcnMhLml0ZW1zIS5tYXA8QU1hcmtlcj4oaXRlbSA9PiAoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBwcm9wcy50aXRsZU1hcmtlciEuZ2V0KGl0ZW0pLnZhbHVlISxcbiAgICAgICAgICAgICAgICBsYXQ6IHByb3BzLmxhdE1hcmtlciEuZ2V0KGl0ZW0pLnZhbHVlIS50b051bWJlcigpLFxuICAgICAgICAgICAgICAgIGxuZzogcHJvcHMubG5nTWFya2VyIS5nZXQoaXRlbSkudmFsdWUhLnRvTnVtYmVyKClcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5tYXJrZXJzLCBwcm9wcy5sYXRNYXJrZXIsIHByb3BzLmxuZ01hcmtlciwgcHJvcHMudGl0bGVNYXJrZXJdKTtcblxuICAgIGNvbnN0IG9uRGJsQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKGV2ZW50OiBBTWFwLk1hcHNFdmVudCwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChwcm9wcy5tYXJrZXJTZWxlY3QgJiYgcHJvcHMubWFya2VycyAmJiBwcm9wcy5tYXJrZXJzLnN0YXR1cyA9PT0gVmFsdWVTdGF0dXMuQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXlBY3Rpb24gPSBwcm9wcy5tYXJrZXJTZWxlY3QuZ2V0KHByb3BzIS5tYXJrZXJzIS5pdGVtcyFbaWR4XSk7XG4gICAgICAgICAgICAgICAgZXhlY3V0ZUFjdGlvbihteUFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtwcm9wcy5tYXJrZXJTZWxlY3QsIHByb3BzLm1hcmtlcnNdXG4gICAgKTtcblxuICAgIGNvbnN0IGtleXN0cmluZyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuYW1hcEtleS5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzLmFtYXBLZXkudmFsdWU7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMuYW1hcEtleV0pO1xuXG4gICAgY29uc3QgW3N0YXJ0QW5kRW5kLCBzZXRTdGFydEFuZEVuZF0gPSB1c2VTdGF0ZTxbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSB8IHVuZGVmaW5lZD4oKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9wcy5zdGFydExuZyAmJlxuICAgICAgICAgICAgcHJvcHMuc3RhcnRMYXQgJiZcbiAgICAgICAgICAgIHByb3BzLmVuZExuZyAmJlxuICAgICAgICAgICAgcHJvcHMuZW5kTGF0ICYmXG4gICAgICAgICAgICBwcm9wcy5zdGFydExuZy5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSAmJlxuICAgICAgICAgICAgcHJvcHMuc3RhcnRMYXQuc3RhdHVzID09PSBWYWx1ZVN0YXR1cy5BdmFpbGFibGUgJiZcbiAgICAgICAgICAgIHByb3BzLmVuZExuZy5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSAmJlxuICAgICAgICAgICAgcHJvcHMuZW5kTGF0LnN0YXR1cyA9PT0gVmFsdWVTdGF0dXMuQXZhaWxhYmxlXG4gICAgICAgICkge1xuICAgICAgICAgICAgc2V0U3RhcnRBbmRFbmQoW1xuICAgICAgICAgICAgICAgIHByb3BzLnN0YXJ0TG5nLnZhbHVlIS50b051bWJlcigpLFxuICAgICAgICAgICAgICAgIHByb3BzLnN0YXJ0TGF0LnZhbHVlIS50b051bWJlcigpLFxuICAgICAgICAgICAgICAgIHByb3BzLmVuZExuZy52YWx1ZSEudG9OdW1iZXIoKSxcbiAgICAgICAgICAgICAgICBwcm9wcy5lbmRMYXQudmFsdWUhLnRvTnVtYmVyKClcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLnN0YXJ0TG5nLCBwcm9wcy5zdGFydExhdCwgcHJvcHMuZW5kTG5nLCBwcm9wcy5lbmRMYXRdKTtcblxuICAgIHJldHVybiBpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxzcGFuPmlzTG9hZGluZzwvc3Bhbj5cbiAgICApIDogKFxuICAgICAgICA8QU1hcENvbXBvbmVudFxuICAgICAgICAgICAgc3RhcnRBbmRFbmQ9e3N0YXJ0QW5kRW5kfVxuICAgICAgICAgICAgbW9kZT17cHJvcHMubW9kZX1cbiAgICAgICAgICAgIGFtYXBLZXk9e2tleXN0cmluZ31cbiAgICAgICAgICAgIG9uRGJsQ2xpY2s9e29uRGJsQ2xpY2t9XG4gICAgICAgICAgICBtYXJrcz17bWFya3N9XG4gICAgICAgICAgICBvblpvb21DaGFuZ2U9e29uWm9vbUNoYW5nZX1cbiAgICAgICAgICAgIHpvb209e3pvb219XG4gICAgICAgICAgICBsYXQ9e2NlbnRlckxhdH1cbiAgICAgICAgICAgIGxuZz17Y2VudGVyTG5nfVxuICAgICAgICAgICAgZW5hYmxlTG9jYXRpb25Nb2RlPXtwcm9wcy5lbmFibGVMb2NhdGlvbk1vZGV9XG4gICAgICAgICAgICBvbkNlbnRlckNoYW5nZT17b25DZW50ZXJDaGFuZ2V9XG4gICAgICAgICAgICBhdXRvRm9jdXM9e3Byb3BzLmVuYWJsZUF1dG9Gb2N1c31cbiAgICAgICAgICAgIC8vIG14XG4gICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzLnN0eWxlfVxuICAgICAgICAgICAgdGFiSW5kZXg9e3Byb3BzLnRhYkluZGV4fVxuICAgICAgICAgICAgY2xhc3M9e3Byb3BzLmNsYXNzfVxuICAgICAgICAvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc05hbWVzIiwiY2xhc3NlcyIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmciLCJhcmdUeXBlIiwicHVzaCIsIkFycmF5IiwiaXNBcnJheSIsImlubmVyIiwiYXBwbHkiLCJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsImtleSIsImNhbGwiLCJqb2luIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmF1bHQiLCJ3aW5kb3ciLCJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwiZnJlZVNlbGYiLCJzZWxmIiwiRnVuY3Rpb24iLCJpc0RvY3VtZW50VmlzaWJsZSIsImRvY3VtZW50IiwidmlzaWJpbGl0eVN0YXRlIiwiaXNPbmxpbmUiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJfX3JlYWQiLCJ0aGlzIiwibyIsIm4iLCJtIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJyIiwiYXIiLCJlIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVycm9yIiwiX19zcHJlYWQiLCJjb25jYXQiLCJsaXN0ZW5lcnMiLCJldmVudHNCaW5kZWQiLCJhZGRFdmVudExpc3RlbmVyIiwicmV2YWxpZGF0ZSIsImxpc3RlbmVyIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsInAiLCJfX3Jlc3QiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJDb25maWdDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJQcm92aWRlciIsIk1hcFNoaW0iLCJNYXAiLCJnZXRJbmRleCIsImFyciIsInJlc3VsdCIsInNvbWUiLCJlbnRyeSIsImluZGV4IiwiY2xhc3NfMSIsIl9fZW50cmllc19fIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwic2V0IiwiZGVsZXRlIiwiZW50cmllcyIsInNwbGljZSIsImhhcyIsImNsZWFyIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwiY3R4IiwiX2kiLCJfYSIsImlzQnJvd3NlciIsImdsb2JhbCQxIiwiTWF0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSQxIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsInNldFRpbWVvdXQiLCJEYXRlIiwibm93IiwidHJhaWxpbmdUaW1lb3V0IiwidGhyb3R0bGUiLCJkZWxheSIsImxlYWRpbmdDYWxsIiwidHJhaWxpbmdDYWxsIiwibGFzdENhbGxUaW1lIiwicmVzb2x2ZVBlbmRpbmciLCJwcm94eSIsInRpbWVvdXRDYWxsYmFjayIsInRpbWVTdGFtcCIsIlJFRlJFU0hfREVMQVkiLCJ0cmFuc2l0aW9uS2V5cyIsIm11dGF0aW9uT2JzZXJ2ZXJTdXBwb3J0ZWQiLCJNdXRhdGlvbk9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyIiwiY29ubmVjdGVkXyIsIm11dGF0aW9uRXZlbnRzQWRkZWRfIiwibXV0YXRpb25zT2JzZXJ2ZXJfIiwib2JzZXJ2ZXJzXyIsIm9uVHJhbnNpdGlvbkVuZF8iLCJyZWZyZXNoIiwiYWRkT2JzZXJ2ZXIiLCJvYnNlcnZlciIsImNvbm5lY3RfIiwicmVtb3ZlT2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJkaXNjb25uZWN0XyIsImNoYW5nZXNEZXRlY3RlZCIsInVwZGF0ZU9ic2VydmVyc18iLCJhY3RpdmVPYnNlcnZlcnMiLCJmaWx0ZXIiLCJnYXRoZXJBY3RpdmUiLCJoYXNBY3RpdmUiLCJicm9hZGNhc3RBY3RpdmUiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsImNoaWxkTGlzdCIsImNoYXJhY3RlckRhdGEiLCJzdWJ0cmVlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc2Nvbm5lY3QiLCJfYiIsInByb3BlcnR5TmFtZSIsImlzUmVmbG93UHJvcGVydHkiLCJnZXRJbnN0YW5jZSIsImluc3RhbmNlXyIsImRlZmluZUNvbmZpZ3VyYWJsZSIsInRhcmdldCIsInByb3BzIiwia2V5cyIsIndyaXRhYmxlIiwiZ2V0V2luZG93T2YiLCJvd25lckdsb2JhbCIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsImVtcHR5UmVjdCIsImNyZWF0ZVJlY3RJbml0IiwidG9GbG9hdCIsInBhcnNlRmxvYXQiLCJnZXRCb3JkZXJzU2l6ZSIsInN0eWxlcyIsInBvc2l0aW9ucyIsInJlZHVjZSIsInNpemUiLCJwb3NpdGlvbiIsImdldFBhZGRpbmdzIiwicGFkZGluZ3MiLCJwb3NpdGlvbnNfMSIsImdldFNWR0NvbnRlbnRSZWN0IiwiYmJveCIsImdldEJCb3giLCJ3aWR0aCIsImhlaWdodCIsImdldEhUTUxFbGVtZW50Q29udGVudFJlY3QiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENvbXB1dGVkU3R5bGUiLCJob3JpelBhZCIsImxlZnQiLCJyaWdodCIsInZlcnRQYWQiLCJ0b3AiLCJib3R0b20iLCJib3hTaXppbmciLCJyb3VuZCIsImlzRG9jdW1lbnRFbGVtZW50IiwidmVydFNjcm9sbGJhciIsImhvcml6U2Nyb2xsYmFyIiwiYWJzIiwiaXNTVkdHcmFwaGljc0VsZW1lbnQiLCJTVkdHcmFwaGljc0VsZW1lbnQiLCJTVkdFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0Q29udGVudFJlY3QiLCJjcmVhdGVSZWFkT25seVJlY3QiLCJ4IiwieSIsIkNvbnN0ciIsIkRPTVJlY3RSZWFkT25seSIsInJlY3QiLCJjcmVhdGUiLCJSZXNpemVPYnNlcnZhdGlvbiIsImJyb2FkY2FzdFdpZHRoIiwiYnJvYWRjYXN0SGVpZ2h0IiwiY29udGVudFJlY3RfIiwiaXNBY3RpdmUiLCJicm9hZGNhc3RSZWN0IiwiUmVzaXplT2JzZXJ2ZXJFbnRyeSIsInJlY3RJbml0IiwiY29udGVudFJlY3QiLCJSZXNpemVPYnNlcnZlclNQSSIsImNvbnRyb2xsZXIiLCJjYWxsYmFja0N0eCIsImFjdGl2ZU9ic2VydmF0aW9uc18iLCJvYnNlcnZhdGlvbnNfIiwiVHlwZUVycm9yIiwiY2FsbGJhY2tfIiwiY29udHJvbGxlcl8iLCJjYWxsYmFja0N0eF8iLCJFbGVtZW50Iiwib2JzZXJ2YXRpb25zIiwidW5vYnNlcnZlIiwiY2xlYXJBY3RpdmUiLCJfdGhpcyIsIm9ic2VydmF0aW9uIiwibWFwIiwiV2Vha01hcCIsIlJlc2l6ZU9ic2VydmVyIiwibWV0aG9kIiwiZ2V0VGFyZ2V0RWxlbWVudCIsImRlZmF1bHRFbGVtZW50IiwidGFyZ2V0RWxlbWVudCIsImN1cnJlbnQiLCJ1c2VQZXJzaXN0Rm4iLCJmbiIsImZuUmVmIiwidXNlUmVmIiwicGVyc2lzdEZuIiwiYXJncyIsImlzRnVuY3Rpb24iLCJvYmoiLCJ1c2VVbm1vdW50IiwiZm5QZXJzaXN0IiwidXNlRWZmZWN0IiwidXNlUmFmU3RhdGUiLCJpbml0aWFsU3RhdGUiLCJmcmFtZSIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInNldFJhZlN0YXRlIiwidXNlQ2FsbGJhY2siLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInVzZVNpemUiLCJlbCIsInVzZUxheW91dEVmZmVjdCIsInJlc2l6ZU9ic2VydmVyIiwidXNlV2h5RGlkWW91VXBkYXRlIiwiY29tcG9uZW50TmFtZSIsInByZXZQcm9wcyIsImFsbEtleXMiLCJjaGFuZ2VkUHJvcHNfMSIsImZyb20iLCJ0byIsImNvbnNvbGUiLCJsb2ciLCJBbGVydCIsImNsYXNzTmFtZSIsImJvb3RzdHJhcFN0eWxlIiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsImNvdW50IiwiY3JlYXRlRWxlbWVudCIsImV4ZWN1dGVBY3Rpb24iLCJhY3Rpb24iLCJjYW5FeGVjdXRlIiwiaXNFeGVjdXRpbmciLCJleGVjdXRlIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdEZvciIsInRpbWVvdXQiLCJkZWJvdW5jZWQiLCJjbGVhclRpbWVvdXQiLCJGb3JtYXR0ZXJUeXBlIiwiX2ltcG9ydGVkU2NyaXB0IiwiaWQiLCJoZWFkRWxlbWVudCIsInNyYyIsInJlc29sdmUiLCJzY3JpcHQiLCJyZWplY3QiLCJfdHlwZW9mIiwiY29uc3RydWN0b3IiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsImluZm8iLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZXJyIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiZGVzY3JpcHRvciIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9zZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiX2dldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJhc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsImlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9jcmVhdGVTdXBlckludGVybmFsIiwiU3VwZXIiLCJOZXdUYXJnZXQiLCJwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwicnVudGltZSIsIk9wIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJuYW1lIiwibWFyayIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlY29yZCIsInVud3JhcHBlZCIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiaXRlciIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXN1bHROYW1lIiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsImdsb2JhbFRoaXMiLCJyZXF1aXJlIiwiREVGQVVMVF9SRVRSWV9USU1FIiwiQVBJTG9hZGVyIiwibG9hZGVkIiwiQU1hcCIsImNhbGxiYWNrTmFtZSIsImNvbG9yIiwiY2ZnIiwicHJvdG9jb2wiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwicXVldWUiLCJ0YXNrIiwicmVxdWlyZVNjcmlwdCIsImRlZmF1bHRQcm9wcyIsImFrYXkiLCJob3N0QW5kUGF0aCIsInZlcnNpb24iLCJ3YWl0UXVldWUiLCJfZGVmaW5lUHJvcGVydHkiLCJvd25LZXlzIiwiZW51bWVyYWJsZU9ubHkiLCJzeW1ib2xzIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFNwcmVhZDIiLCJzb3VyY2UiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiZXhjbHVkZWQiLCJzb3VyY2VLZXlzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwib2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfYXJyIiwiX24iLCJfZCIsIl9zIiwiX2UiLCJfYXJyYXlMaWtlVG9BcnJheSIsImxlbiIsImFycjIiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJtaW5MZW4iLCJhcnJheUxpa2VUb0FycmF5IiwidGVzdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJfc2xpY2VkVG9BcnJheSIsImFycmF5V2l0aEhvbGVzIiwiaXRlcmFibGVUb0FycmF5TGltaXQiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlUmVzdCIsIl9leHRlbmRzIiwicHJvcHNOYW1lIiwiZU5hbWUiLCJzdGF0dXMiLCJ2aXNpYWJsZSIsImV2ZW50TmFtZSIsImV2ZW50SGFuZGxlIiwidk5hbWUiLCJ1c2VNYXAiLCJvdGhlciIsInNldE1hcCIsInpvb20iLCJzZXRab29tIiwiY29udGFpbmVyIiwic2V0Q29udGFpbmVyIiwiX29iamVjdFNwcmVhZCIsInVzZU1lbW8iLCJ1c2VTZXRTdGF0dXMiLCJ1c2VTZXR0aW5nUHJvcGVydGllcyIsInVzZUV2ZW50UHJvcGVydGllcyIsInN0eWxlIiwiX2V4Y2x1ZGVkIiwiZWxtUmVmIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsImNoaWxkcyIsIkZyYWdtZW50IiwiZm9udFNpemUiLCJjaGlsZCIsInVzZU1hcmtlciIsIm1hcmtlciIsInNldE1hcmtlciIsInVzZVZpc2lhYmxlIiwiTWFya2VyIiwidXNlQ29udGV4dE1lbnUiLCJjb250ZXh0TWVudSIsInNldENvbnRleHRNZW51IiwicmlnaHRjbGljayIsIm5vb3AiLCJ0ZXh0Iiwib25DbGljayIsIkNvbnRleHRNZW51IiwidXNlR2VvbG9jYXRpb24iLCJvbkNvbXBsZXRlIiwib25FcnJvciIsImdlb2xvY2F0aW9uIiwic2V0R2VvbG9jYXRpb24iLCJmdW5OYW1lIiwiR2VvbG9jYXRpb24iLCJzY2FsZUNvbnRyb2wiLCJzZXRTY2FsZUNvbnRyb2wiLCJvZmZzZXQiLCJTY2FsZUNvbnRyb2wiLCJ1c2VTY2FsZUNvbnRyb2wiLCJ0b29sQmFyQ29udHJvbCIsInNldFRvb2xCYXJDb250cm9sIiwiVG9vbEJhckNvbnRyb2wiLCJ1c2VUb29sQmFyQ29udHJvbCIsImNvbnRyb2xCYXJDb250cm9sIiwic2V0Q29udHJvbEJhckNvbnRyb2wiLCJDb250cm9sQmFyQ29udHJvbCIsInVzZUNvbnRyb2xCYXJDb250cm9sIiwiQmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUtBO0NBRUMsYUFBWTs7Q0FHWixNQUFJQSxNQUFNLEdBQUcsR0FBR0MsY0FBaEI7O0NBRUEsV0FBU0MsVUFBVCxHQUFzQjtDQUNyQixRQUFJQyxPQUFPLEdBQUcsRUFBZDs7Q0FFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBOUIsRUFBc0NGLENBQUMsRUFBdkMsRUFBMkM7Q0FDMUMsVUFBSUcsR0FBRyxHQUFHRixTQUFTLENBQUNELENBQUQsQ0FBbkI7Q0FDQSxVQUFJLENBQUNHLEdBQUwsRUFBVTtDQUVWLFVBQUlDLE9BQU8sR0FBRyxPQUFPRCxHQUFyQjs7Q0FFQSxVQUFJQyxPQUFPLEtBQUssUUFBWixJQUF3QkEsT0FBTyxLQUFLLFFBQXhDLEVBQWtEO0NBQ2pETCxRQUFBQSxPQUFPLENBQUNNLElBQVIsQ0FBYUYsR0FBYjtDQUNBLE9BRkQsTUFFTyxJQUFJRyxLQUFLLENBQUNDLE9BQU4sQ0FBY0osR0FBZCxDQUFKLEVBQXdCO0NBQzlCLFlBQUlBLEdBQUcsQ0FBQ0QsTUFBUixFQUFnQjtDQUNmLGNBQUlNLEtBQUssR0FBR1YsVUFBVSxDQUFDVyxLQUFYLENBQWlCLElBQWpCLEVBQXVCTixHQUF2QixDQUFaOztDQUNBLGNBQUlLLEtBQUosRUFBVztDQUNWVCxZQUFBQSxPQUFPLENBQUNNLElBQVIsQ0FBYUcsS0FBYjtDQUNBO0NBQ0Q7Q0FDRCxPQVBNLE1BT0EsSUFBSUosT0FBTyxLQUFLLFFBQWhCLEVBQTBCO0NBQ2hDLFlBQUlELEdBQUcsQ0FBQ08sUUFBSixLQUFpQkMsTUFBTSxDQUFDQyxTQUFQLENBQWlC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
