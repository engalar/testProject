
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
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

import React, { useRef, useEffect, useState, useCallback, useLayoutEffect, Children, createElement, useMemo, useImperativeHandle, Fragment } from 'react';
import Big from 'big.js';

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

var ConfigContext = /*#__PURE__*/React.createContext({});
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
  var fnRef = useRef(fn);
  fnRef.current = fn;
  var persistFn = useRef();

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
  useEffect(function () {
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
  var frame = useRef(0);

  var _a = __read$2(useState(initialState), 2),
      state = _a[0],
      setState = _a[1];

  var setRafState = useCallback(function (value) {
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

  useLayoutEffect(function () {
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
  var prevProps = useRef({});
  useEffect(function () {
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
    const [lngLat, setLngLat] = useState();
    useEffect(() => {
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
}) => Children.count(children) > 0 ? createElement("div", {
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
      return this.state.loaded ? this.props.children : this.props.fallback ? this.props.fallback(this.state.error) : this.state.error ? /*#__PURE__*/React.createElement("div", {
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
}(React.Component);
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

    var _useState = useState(props[eName]),
        _useState2 = _slicedToArray(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1]; // eslint-disable-next-line react-hooks/rules-of-hooks


    useEffect(function () {
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
  var _useState3 = useState(visiable),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  useEffect(function () {
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

    useEffect(function () {
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

    var _useState5 = useState(props[vName]),
        _useState6 = _slicedToArray(_useState5, 2),
        state = _useState6[0],
        setState = _useState6[1]; // eslint-disable-next-line react-hooks/rules-of-hooks


    useEffect(function () {
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

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      map = _useState2[0],
      setMap = _useState2[1];

  var _useState3 = useState(props.zoom || 15),
      _useState4 = _slicedToArray(_useState3, 2),
      zoom = _useState4[0],
      setZoom = _useState4[1];

  var _useState5 = useState(props.container),
      _useState6 = _slicedToArray(_useState5, 2),
      container = _useState6[0],
      setContainer = _useState6[1];

  useEffect(function () {
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
  useMemo(function () {
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
var Map$1 = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded$3);

  var elmRef = useRef(null);

  var _useMap = useMap(_objectSpread2({
    container: elmRef.current
  }, props)),
      setContainer = _useMap.setContainer,
      container = _useMap.container,
      map = _useMap.map;

  useEffect(function () {
    return setContainer(elmRef.current);
  }, [elmRef.current]);
  useImperativeHandle(ref, function () {
    return _objectSpread2(_objectSpread2({}, props), {}, {
      map: map,
      AMap: AMap,
      container: elmRef.current
    });
  }, [map]);
  var childs = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
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
      return /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.createElement(Fragment, null, child), {
        key: key
      });
    }

    if (! /*#__PURE__*/React.isValidElement(child)) return null;

    if (child.type && typeof child.type === 'string') {
      return /*#__PURE__*/React.cloneElement(child, {
        key: key
      });
    }

    return /*#__PURE__*/React.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
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

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      marker = _useState2[0],
      setMarker = _useState2[1];

  useEffect(function () {
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

var Marker = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useMarker = useMarker(props),
      marker = _useMarker.marker;

  useImperativeHandle(ref, function () {
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

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      contextMenu = _useState2[0],
      setContextMenu = _useState2[1];

  useEffect(function () {
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
  useEffect(function () {
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

var ContextMenu = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useContextMenu = useContextMenu(props),
      contextMenu = _useContextMenu.contextMenu;

  useImperativeHandle(ref, function () {
    return _objectSpread2(_objectSpread2({}, props), {}, {
      contextMenu: contextMenu
    });
  });
  var childs = React.Children.toArray(props.children);
  return /*#__PURE__*/React.createElement(Fragment, null, AMap && contextMenu && childs.map(function (child, key) {
    if (! /*#__PURE__*/React.isValidElement(child)) return null;
    return /*#__PURE__*/React.cloneElement(child, _objectSpread2(_objectSpread2({}, child.props), {}, {
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

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      geolocation = _useState2[0],
      setGeolocation = _useState2[1];

  useEffect(function () {
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

  useMemo(function () {
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

var Geolocation = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useGeolocation = useGeolocation(props),
      geolocation = _useGeolocation.geolocation;

  useImperativeHandle(ref, function () {
    return _objectSpread2(_objectSpread2({}, props), {}, {
      geolocation: geolocation
    });
  });
  return null;
});

function useScaleControl() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      scaleControl = _useState2[0],
      setScaleControl = _useState2[1];

  var map = props.map,
      position = props.position,
      visiable = props.visiable,
      offset = props.offset;
  useEffect(function () {
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

var ScaleControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useScaleControl = useScaleControl(props),
      scaleControl = _useScaleControl.scaleControl;

  useImperativeHandle(ref, function () {
    return _objectSpread2(_objectSpread2({}, props), {}, {
      scaleControl: scaleControl
    });
  }, [scaleControl]);
  return null;
});

function useToolBarControl() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      toolBarControl = _useState2[0],
      setToolBarControl = _useState2[1];

  var map = props.map,
      position = props.position,
      visiable = props.visiable,
      offset = props.offset;
  useEffect(function () {
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

var ToolBarControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useToolBarControl = useToolBarControl(props),
      toolBarControl = _useToolBarControl.toolBarControl;

  useImperativeHandle(ref, function () {
    return _objectSpread2(_objectSpread2({}, props), {}, {
      toolBarControl: toolBarControl
    });
  }, [toolBarControl]);
  return null;
});

function useControlBarControl() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      controlBarControl = _useState2[0],
      setControlBarControl = _useState2[1];

  var map = props.map,
      position = props.position,
      visiable = props.visiable,
      offset = props.offset;
  useEffect(function () {
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

var ControlBarControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useControlBarControl = useControlBarControl(props),
      controlBarControl = _useControlBarControl.controlBarControl;

  useImperativeHandle(ref, function () {
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
    const markerRef = useRef();
    const size = useSize(p.container);
    const center = useMapCenter(p.map);
    useEffect(() => {
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
    const [isMoving, setIsMoving] = useState(false);
    const mapRef = useRef(null);
    return (createElement(Map$1, { className: classNames$1("flexitem-9"), ref: mapRef, zoom: props.zoom, onMoveStart: () => setIsMoving(true), onMoveEnd: () => setIsMoving(false), onMapMove: () => {
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
        props.enableLocationMode ? (createElement(LocationSelectPoint, null)) : (createElement(Geolocation
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
        createElement(ScaleControl, { offset: [16, 20], position: "LB" }),
        createElement(ToolBarControl, { offset: [16, 60], position: "RB" }),
        createElement(ControlBarControl, { position: "RT" })));
}

function RoiMode(props) {
    const [isMoving, setIsMoving] = useState(false);
    const mapRef = useRef(null);
    return (createElement(Map$1, { className: classNames$1("flexitem-9"), ref: mapRef, zoom: props.zoom, center: isMoving ? undefined : [props.lng, props.lat], onDblClick: (event) => {
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
        createElement(ScaleControl, { offset: [16, 20], position: "LB" }),
        createElement(ToolBarControl, { offset: [16, 60], position: "RB" }),
        createElement(ControlBarControl, { position: "RT" }),
        props.marks.map((mark, idx) => (createElement(Marker, { key: idx, onDblClick: (e) => {
                if (props.onDblClick) {
                    props.onDblClick(e, idx);
                }
            }, visiable: true, title: mark.title, position: new AMap.LngLat(mark.lng, mark.lat) })))));
}

let lastPaneId = 1;
function Driving(p) {
    const lastDrivingRef = useRef();
    useEffect(() => {
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
    const paneId = useMemo(() => +new Date() + "-pane" + lastPaneId++, []);
    const mapRef = useRef(null);
    return (createElement(Fragment, null,
        createElement(Map$1, { className: classNames$1("flexitem-9"), ref: mapRef },
            createElement(Driving, { paneId: paneId, startAndEnd: props.startAndEnd }),
            createElement(ScaleControl, { offset: [16, 20], position: "LB" }),
            createElement(ToolBarControl, { offset: [16, 60], position: "RB" }),
            createElement(ControlBarControl, { position: "RT" })),
        createElement("div", { id: paneId, className: classNames$1("flexitem-3"), style: { overflow: "auto" } })));
}

// @ts-ignore
window._jsload_ = () => {
    console.log("amap api loaded");
};
let lastValidAMap;
const AMapComponent = (props) => {
    const [isLoadingApi, setIsLoadingApi] = useState(true);
    const ref = useRef();
    const [keyIsInvalid, setKeyIsInvalid] = useState(false);
    useEffect(() => {
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
        return createElement(Alert, { bootstrapStyle: "danger" }, "\u8BF7\u6307\u5B9A\u4E00\u4E2A\u6B63\u786E\u7684\u9AD8\u5FB7\u5730\u56FEwebapi key");
    }
    return (createElement("div", { ref: ref, className: classNames$1(props.class, "mx-amap", "flexcontainer"), tabIndex: props.tabIndex, style: props.style }, isLoadingApi ? (createElement("span", null, "loading")) : props.mode === "location" ? (createElement(LocationMode, { enableLocationMode: props.enableLocationMode, autoFocus: props.autoFocus, onCenterChange: props.onCenterChange, zoom: props.zoom, onZoomChange: props.onZoomChange, lat: props.lat, lng: props.lng })) : props.mode === "marker" ? (createElement(RoiMode, { change: props.onCenterChange, marks: props.marks, onCenterChange: props.onCenterChange, zoom: props.zoom, onZoomChange: props.onZoomChange, lat: props.lat, lng: props.lng, onDblClick: props.onDblClick })) : (createElement(NavMode, { startAndEnd: props.startAndEnd }))));
};

___$insertStyle("/*\nPlace your custom CSS here\n*/\n.mx-amap .amap-container {\n  min-width: 300px;\n  min-height: 350px;\n}");

function AMap$1(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [centerLat, setCenterLat] = useState(22.268233);
    const [centerLng, setCenterLng] = useState(113.515943);
    if (props.centerType === "dynamicValue") {
        useEffect(() => {
            if (props.lngCenter && props.lngCenter.status === "available" /* Available */) {
                setCenterLng(props.lngCenter.value.toNumber());
            }
            if (props.latCenter && props.latCenter.status === "available" /* Available */) {
                setCenterLat(props.latCenter.value.toNumber());
            }
        }, [props.latCenter, props.lngCenter]);
    }
    else {
        useEffect(() => {
            setCenterLat(props.latCenterStatic.toNumber());
            setCenterLng(props.lngCenterStatic.toNumber());
        }, [props.latCenterStatic, props.lngCenterStatic]);
    }
    const zoom = useMemo(() => {
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
    const onCenterChange = useCallback((lat, lng) => {
        setCenterLat(lat);
        setCenterLng(lng);
        // setTimeout(() => {
        //     executeAction(props.onChangeCenter);
        // }, 500);
        if (props.latCenter && props.latCenter.status === "available" /* Available */) {
            props.latCenter.setValue(new Big(lat));
        }
        if (props.lngCenter && props.lngCenter.status === "available" /* Available */) {
            props.lngCenter.setValue(new Big(lng));
        }
    }, [props.latCenter, props.lngCenter]);
    const onZoomChange = useCallback(debounce((e) => {
        var _a;
        if (props.zoomAttribute && !props.zoomAttribute.readOnly) {
            (_a = props.zoomAttribute) === null || _a === void 0 ? void 0 : _a.setValue(Big(e));
        }
    }, 300), [props.zoomAttribute]);
    const marks = useMemo(() => {
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
    const onDblClick = useCallback((event, idx) => {
        console.log(event);
        if (props.markerSelect && props.markers && props.markers.status === "available" /* Available */) {
            const myAction = props.markerSelect.get(props.markers.items[idx]);
            executeAction(myAction);
        }
    }, [props.markerSelect, props.markers]);
    const keystring = useMemo(() => {
        if (props.amapKey.status === "available" /* Available */) {
            return props.amapKey.value;
        }
    }, [props.amapKey]);
    const [startAndEnd, setStartAndEnd] = useState();
    useEffect(() => {
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
    return isLoading ? (createElement("span", null, "isLoading")) : (createElement(AMapComponent, { startAndEnd: startAndEnd, mode: props.mode, amapKey: keystring, onDblClick: onDblClick, marks: marks, onZoomChange: onZoomChange, zoom: zoom, lat: centerLat, lng: centerLng, enableLocationMode: props.enableLocationMode, onCenterChange: onCenterChange, autoFocus: props.enableAutoFocus, 
        // mx
        name: props.name, style: props.style, tabIndex: props.tabIndex, class: props.class }));
}

export { AMap$1 as AMap };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQU1hcC5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC5kZWJvdW5jZS9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL3V0aWxzL3V0aWxzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy91dGlscy9saW1pdC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvdXRpbHMvdXNlUGVyc2lzdEZuLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy91dGlscy93aW5kb3dGb2N1cy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvdXRpbHMvd2luZG93VmlzaWJsZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvdXNlQXN5bmMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL3VzZUxvYWRNb3JlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy91c2VQYWdpbmF0ZWQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL2NvbmZpZ0NvbnRleHQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc2l6ZS1vYnNlcnZlci1wb2x5ZmlsbC9kaXN0L1Jlc2l6ZU9ic2VydmVyLmVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91dGlscy9kb20uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3VzZVBlcnNpc3RGbi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXRpbHMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3VzZVVubW91bnQvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3VzZVNpemUvdXNlUmFmU3RhdGUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3VzZVNpemUvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3VzZVdoeURpZFlvdVVwZGF0ZS9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvaG9va3MvdXNlTWFwQ2VudGVyLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbHMvcGl3LXV0aWxzLWludGVybmFsL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vdG9vbHMvcGl3LXV0aWxzLWludGVybmFsL2Rpc3QvY29tcG9uZW50cy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2xzL3Bpdy11dGlscy1pbnRlcm5hbC9kaXN0L2Z1bmN0aW9ucy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Rvb2xzL3Bpdy11dGlscy1pbnRlcm5hbC9kaXN0L2J1aWxkZXJzL0VkaXRhYmxlVmFsdWVCdWlsZGVyLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL3V0aWxzL3JlcXVpcmVTY3JpcHQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZ2V0UHJvdG90eXBlT2YuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9BUElMb2FkZXIvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9jb21tb24vaG9va3MuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1hbWFwL2xpYi9lc20vTWFwL3VzZU1hcC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9NYXAvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1hbWFwL2xpYi9lc20vTWFya2VyL3VzZU1hcmtlci5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9NYXJrZXIvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1hbWFwL2xpYi9lc20vQ29udGV4dE1lbnUvdXNlQ29udGV4dE1lbnUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1hbWFwL2xpYi9lc20vQ29udGV4dE1lbnUvSXRlbS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9Db250ZXh0TWVudS9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9HZW9sb2NhdGlvbi91c2VHZW9sb2NhdGlvbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9HZW9sb2NhdGlvbi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9TY2FsZUNvbnRyb2wvdXNlU2NhbGVDb250cm9sLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYW1hcC9saWIvZXNtL1NjYWxlQ29udHJvbC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9Ub29sQmFyQ29udHJvbC91c2VUb29sQmFyQ29udHJvbC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9Ub29sQmFyQ29udHJvbC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9Db250cm9sQmFyQ29udHJvbC91c2VDb250cm9sQmFyQ29udHJvbC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWFtYXAvbGliL2VzbS9Db250cm9sQmFyQ29udHJvbC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvY2F0aW9uTW9kZS50c3giLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Sb2lNb2RlLnRzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL05hdk1vZGUudHN4IiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQU1hcENvbXBvbmVudC50c3giLCIuLi8uLi8uLi8uLi8uLi9zcmMvQU1hcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNEb2N1bWVudFZpc2libGUoKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSAhPT0gJ2hpZGRlbic7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc09ubGluZSgpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3Iub25MaW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuYXZpZ2F0b3Iub25MaW5lO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwidmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbnZhciBfX3NwcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZCB8fCBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGltaXQoZm4sIHRpbWVzcGFuKSB7XG4gIHZhciBwZW5kaW5nID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuXG4gICAgaWYgKHBlbmRpbmcpIHJldHVybjtcbiAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICBmbi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKGFyZ3MpKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHBlbmRpbmcgPSBmYWxzZTtcbiAgICB9LCB0aW1lc3Bhbik7XG4gIH07XG59IiwidmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbnZhciBfX3NwcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZCB8fCBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdXNlUGVyc2lzdEZuKGZuKSB7XG4gIHZhciByZWYgPSB1c2VSZWYoZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNhbGwgYW4gZXZlbnQgaGFuZGxlciB3aGlsZSByZW5kZXJpbmcuJyk7XG4gIH0pO1xuICByZWYuY3VycmVudCA9IGZuO1xuICB2YXIgcGVyc2lzdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG5cbiAgICB2YXIgcmVmRm4gPSByZWYuY3VycmVudDtcblxuICAgIGlmIChyZWZGbikge1xuICAgICAgcmV0dXJuIHJlZkZuLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoYXJncykpO1xuICAgIH1cbiAgfSwgW3JlZl0pO1xuXG4gIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcGVyc2lzdDtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVBlcnNpc3RGbjsiLCIvLyBmcm9tIHN3clxuaW1wb3J0IHsgaXNEb2N1bWVudFZpc2libGUsIGlzT25saW5lIH0gZnJvbSAnLi91dGlscyc7XG52YXIgbGlzdGVuZXJzID0gW107XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG59XG5cbnZhciBldmVudHNCaW5kZWQgPSBmYWxzZTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmICFldmVudHNCaW5kZWQpIHtcbiAgdmFyIHJldmFsaWRhdGUgPSBmdW5jdGlvbiByZXZhbGlkYXRlKCkge1xuICAgIGlmICghaXNEb2N1bWVudFZpc2libGUoKSB8fCAhaXNPbmxpbmUoKSkgcmV0dXJuO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgcmV2YWxpZGF0ZSwgZmFsc2UpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCByZXZhbGlkYXRlLCBmYWxzZSk7IC8vIG9ubHkgYmluZCB0aGUgZXZlbnRzIG9uY2VcblxuICBldmVudHNCaW5kZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdWJzY3JpYmU7IiwiLy8gZnJvbSBzd3JcbmltcG9ydCB7IGlzRG9jdW1lbnRWaXNpYmxlIH0gZnJvbSAnLi91dGlscyc7XG52YXIgbGlzdGVuZXJzID0gW107XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG59XG5cbnZhciBldmVudHNCaW5kZWQgPSBmYWxzZTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmICFldmVudHNCaW5kZWQpIHtcbiAgdmFyIHJldmFsaWRhdGUgPSBmdW5jdGlvbiByZXZhbGlkYXRlKCkge1xuICAgIGlmICghaXNEb2N1bWVudFZpc2libGUoKSkgcmV0dXJuO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgcmV2YWxpZGF0ZSwgZmFsc2UpOyAvLyBvbmx5IGJpbmQgdGhlIGV2ZW50cyBvbmNlXG5cbiAgZXZlbnRzQmluZGVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3Vic2NyaWJlOyIsInZhciBfX2Fzc2lnbiA9IHRoaXMgJiYgdGhpcy5fX2Fzc2lnbiB8fCBmdW5jdGlvbiAoKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0O1xuICB9O1xuXG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxudmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbnZhciBfX3NwcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZCB8fCBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0RvY3VtZW50VmlzaWJsZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0Q2FjaGUsIHNldENhY2hlIH0gZnJvbSAnLi91dGlscy9jYWNoZSc7XG5pbXBvcnQgbGltaXQgZnJvbSAnLi91dGlscy9saW1pdCc7XG5pbXBvcnQgdXNlUGVyc2lzdEZuIGZyb20gJy4vdXRpbHMvdXNlUGVyc2lzdEZuJztcbmltcG9ydCB1c2VVcGRhdGVFZmZlY3QgZnJvbSAnLi91dGlscy91c2VVcGRhdGVFZmZlY3QnO1xuaW1wb3J0IHN1YnNjcmliZUZvY3VzIGZyb20gJy4vdXRpbHMvd2luZG93Rm9jdXMnO1xuaW1wb3J0IHN1YnNjcmliZVZpc2libGUgZnJvbSAnLi91dGlscy93aW5kb3dWaXNpYmxlJztcbnZhciBERUZBVUxUX0tFWSA9ICdBSE9PS1NfVVNFX1JFUVVFU1RfREVGQVVMVF9LRVknO1xuXG52YXIgRmV0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEZldGNoKHNlcnZpY2UsIGNvbmZpZywgc3Vic2NyaWJlLCBpbml0U3RhdGUpIHtcbiAgICAvLyDor7fmsYLml7bluo9cbiAgICB0aGlzLmNvdW50ID0gMDsgLy8gdmlzaWJsZSDlkI7vvIzmmK/lkKbnu6fnu63ova7or6JcblxuICAgIHRoaXMucG9sbGluZ1doZW5WaXNpYmxlRmxhZyA9IGZhbHNlO1xuICAgIHRoaXMucG9sbGluZ1RpbWVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubG9hZGluZ0RlbGF5VGltZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IFtdO1xuICAgIHRoaXMudGhhdCA9IHRoaXM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgcGFyYW1zOiBbXSxcbiAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgICBydW46IHRoaXMucnVuLmJpbmQodGhpcy50aGF0KSxcbiAgICAgIG11dGF0ZTogdGhpcy5tdXRhdGUuYmluZCh0aGlzLnRoYXQpLFxuICAgICAgcmVmcmVzaDogdGhpcy5yZWZyZXNoLmJpbmQodGhpcy50aGF0KSxcbiAgICAgIGNhbmNlbDogdGhpcy5jYW5jZWwuYmluZCh0aGlzLnRoYXQpLFxuICAgICAgdW5tb3VudDogdGhpcy51bm1vdW50LmJpbmQodGhpcy50aGF0KVxuICAgIH07XG4gICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLnN1YnNjcmliZSA9IHN1YnNjcmliZTtcblxuICAgIGlmIChpbml0U3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5zdGF0ZSksIGluaXRTdGF0ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5kZWJvdW5jZVJ1biA9IHRoaXMuY29uZmlnLmRlYm91bmNlSW50ZXJ2YWwgPyBkZWJvdW5jZSh0aGlzLl9ydW4sIHRoaXMuY29uZmlnLmRlYm91bmNlSW50ZXJ2YWwpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMudGhyb3R0bGVSdW4gPSB0aGlzLmNvbmZpZy50aHJvdHRsZUludGVydmFsID8gdGhyb3R0bGUodGhpcy5fcnVuLCB0aGlzLmNvbmZpZy50aHJvdHRsZUludGVydmFsKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxpbWl0UmVmcmVzaCA9IGxpbWl0KHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCB0aGlzLmNvbmZpZy5mb2N1c1RpbWVzcGFuKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5wb2xsaW5nSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUucHVzaChzdWJzY3JpYmVWaXNpYmxlKHRoaXMucmVQb2xsaW5nLmJpbmQodGhpcykpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25maWcucmVmcmVzaE9uV2luZG93Rm9jdXMpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUucHVzaChzdWJzY3JpYmVGb2N1cyh0aGlzLmxpbWl0UmVmcmVzaC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICB9XG5cbiAgRmV0Y2gucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHMpIHtcbiAgICBpZiAocyA9PT0gdm9pZCAwKSB7XG4gICAgICBzID0ge307XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnN0YXRlKSwgcyk7XG4gICAgdGhpcy5zdWJzY3JpYmUodGhpcy5zdGF0ZSk7XG4gIH07XG5cbiAgRmV0Y2gucHJvdG90eXBlLl9ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBhcmdzID0gW107XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH0gLy8g5Y+W5raI5bey5pyJ5a6a5pe25ZmoXG5cblxuICAgIGlmICh0aGlzLnBvbGxpbmdUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucG9sbGluZ1RpbWVyKTtcbiAgICB9IC8vIOWPlua2iCBsb2FkaW5nRGVsYXlUaW1lclxuXG5cbiAgICBpZiAodGhpcy5sb2FkaW5nRGVsYXlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubG9hZGluZ0RlbGF5VGltZXIpO1xuICAgIH1cblxuICAgIHRoaXMuY291bnQgKz0gMTsgLy8g6Zet5YyF5a2Y5YKo5b2T5qyh6K+35rGC55qEIGNvdW50XG5cbiAgICB2YXIgY3VycmVudENvdW50ID0gdGhpcy5jb3VudDtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRpbmc6ICF0aGlzLmNvbmZpZy5sb2FkaW5nRGVsYXksXG4gICAgICBwYXJhbXM6IGFyZ3NcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5sb2FkaW5nRGVsYXkpIHtcbiAgICAgIHRoaXMubG9hZGluZ0RlbGF5VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9LCB0aGlzLmNvbmZpZy5sb2FkaW5nRGVsYXkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNlcnZpY2UuYXBwbHkodGhpcywgX19zcHJlYWQoYXJncykpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgaWYgKGN1cnJlbnRDb3VudCAhPT0gX3RoaXMuY291bnQpIHtcbiAgICAgICAgLy8gcHJldmVudCBydW4udGhlbiB3aGVuIHJlcXVlc3QgaXMgY2FuY2VsZWRcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLmxvYWRpbmdEZWxheVRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5sb2FkaW5nRGVsYXlUaW1lcik7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb3JtYXR0ZWRSZXN1bHQgPSBfdGhpcy5jb25maWcuZm9ybWF0UmVzdWx0ID8gX3RoaXMuY29uZmlnLmZvcm1hdFJlc3VsdChyZXMpIDogcmVzO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IGZvcm1hdHRlZFJlc3VsdCxcbiAgICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMuY29uZmlnLm9uU3VjY2Vzcykge1xuICAgICAgICBfdGhpcy5jb25maWcub25TdWNjZXNzKGZvcm1hdHRlZFJlc3VsdCwgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZWRSZXN1bHQ7XG4gICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChjdXJyZW50Q291bnQgIT09IF90aGlzLmNvdW50KSB7XG4gICAgICAgIC8vIHByZXZlbnQgcnVuLnRoZW4gd2hlbiByZXF1ZXN0IGlzIGNhbmNlbGVkXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5sb2FkaW5nRGVsYXlUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMubG9hZGluZ0RlbGF5VGltZXIpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5jb25maWcub25FcnJvcikge1xuICAgICAgICBfdGhpcy5jb25maWcub25FcnJvcihlcnJvciwgYXJncyk7XG4gICAgICB9IC8vIElmIHRocm93T25FcnJvciwgdXNlciBzaG91bGQgY2F0Y2ggdGhlIGVycm9yIHNlbGYsXG4gICAgICAvLyBvciB0aGUgcGFnZSB3aWxsIGNyYXNoXG5cblxuICAgICAgaWYgKF90aGlzLmNvbmZpZy50aHJvd09uRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXByb21pc2UtcmVqZWN0LWVycm9yc1xuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ3VzZVJlcXVlc3QgaGFzIGNhdWdodCB0aGUgZXhjZXB0aW9uLCBpZiB5b3UgbmVlZCB0byBoYW5kbGUgdGhlIGV4Y2VwdGlvbiB5b3Vyc2VsZiwgeW91IGNhbiBzZXQgb3B0aW9ucy50aHJvd09uRXJyb3IgdG8gdHJ1ZS4nKTtcbiAgICB9KVtcImZpbmFsbHlcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGN1cnJlbnRDb3VudCA9PT0gX3RoaXMuY291bnQpIHtcbiAgICAgICAgaWYgKF90aGlzLmNvbmZpZy5wb2xsaW5nSW50ZXJ2YWwpIHtcbiAgICAgICAgICAvLyDlpoLmnpzlsY/luZXpmpDol4/vvIzlubbkuJQgIXBvbGxpbmdXaGVuSGlkZGVuLCDliJnlgZzmraLova7or6LvvIzlubborrDlvZUgZmxhZ++8jOetiSB2aXNpYmxlIOaXtu+8jOe7p+e7rei9ruivolxuICAgICAgICAgIGlmICghaXNEb2N1bWVudFZpc2libGUoKSAmJiAhX3RoaXMuY29uZmlnLnBvbGxpbmdXaGVuSGlkZGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5wb2xsaW5nV2hlblZpc2libGVGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5wb2xsaW5nVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl9ydW4uYXBwbHkoX3RoaXMsIF9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgICAgICB9LCBfdGhpcy5jb25maWcucG9sbGluZ0ludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIEZldGNoLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGVib3VuY2VSdW4pIHtcbiAgICAgIHRoaXMuZGVib3VuY2VSdW4uYXBwbHkodGhpcywgX19zcHJlYWQoYXJncykpOyAvLyBUT0RPIOWmguaenCBvcHRpb25zIOWtmOWcqCBkZWJvdW5jZUludGVydmFs77yM5oiWIHRocm90dGxlSW50ZXJ2YWzvvIzliJkgcnVuIOWSjCByZWZyZXNoIOS4jeS8mui/lOWbniBQcm9taXNl44CCIOW4puexu+Wei+mcgOimgeS/ruWkjeWQju+8jOatpOWkhOWPmOaIkCByZXR1cm4744CCXG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGhyb3R0bGVSdW4pIHtcbiAgICAgIHRoaXMudGhyb3R0bGVSdW4uYXBwbHkodGhpcywgX19zcHJlYWQoYXJncykpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcnVuLmFwcGx5KHRoaXMsIF9fc3ByZWFkKGFyZ3MpKTtcbiAgfTtcblxuICBGZXRjaC5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmRlYm91bmNlUnVuKSB7XG4gICAgICB0aGlzLmRlYm91bmNlUnVuLmNhbmNlbCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRocm90dGxlUnVuKSB7XG4gICAgICB0aGlzLnRocm90dGxlUnVuLmNhbmNlbCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxvYWRpbmdEZWxheVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5sb2FkaW5nRGVsYXlUaW1lcik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9sbGluZ1RpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5wb2xsaW5nVGltZXIpO1xuICAgIH1cblxuICAgIHRoaXMucG9sbGluZ1doZW5WaXNpYmxlRmxhZyA9IGZhbHNlO1xuICAgIHRoaXMuY291bnQgKz0gMTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSk7XG4gIH07XG5cbiAgRmV0Y2gucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVuLmFwcGx5KHRoaXMsIF9fc3ByZWFkKHRoaXMuc3RhdGUucGFyYW1zKSk7XG4gIH07XG5cbiAgRmV0Y2gucHJvdG90eXBlLnJlUG9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wb2xsaW5nV2hlblZpc2libGVGbGFnKSB7XG4gICAgICB0aGlzLnBvbGxpbmdXaGVuVmlzaWJsZUZsYWcgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfTtcblxuICBGZXRjaC5wcm90b3R5cGUubXV0YXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYWNjZXNzLXN0YXRlLWluLXNldHN0YXRlXG4gICAgICAgIGRhdGE6IGRhdGEodGhpcy5zdGF0ZS5kYXRhKSB8fCB7fVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgRmV0Y2gucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgIHMoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gRmV0Y2g7XG59KCk7XG5cbmZ1bmN0aW9uIHVzZUFzeW5jKHNlcnZpY2UsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgX2EgPSBfb3B0aW9ucy5yZWZyZXNoRGVwcyxcbiAgICAgIHJlZnJlc2hEZXBzID0gX2EgPT09IHZvaWQgMCA/IFtdIDogX2EsXG4gICAgICBfYiA9IF9vcHRpb25zLm1hbnVhbCxcbiAgICAgIG1hbnVhbCA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iLFxuICAgICAgX2MgPSBfb3B0aW9ucy5vblN1Y2Nlc3MsXG4gICAgICBvblN1Y2Nlc3MgPSBfYyA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfYyxcbiAgICAgIF9kID0gX29wdGlvbnMub25FcnJvcixcbiAgICAgIG9uRXJyb3IgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge30gOiBfZCxcbiAgICAgIF9lID0gX29wdGlvbnMuZGVmYXVsdExvYWRpbmcsXG4gICAgICBkZWZhdWx0TG9hZGluZyA9IF9lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9lLFxuICAgICAgbG9hZGluZ0RlbGF5ID0gX29wdGlvbnMubG9hZGluZ0RlbGF5LFxuICAgICAgX2YgPSBfb3B0aW9ucy5wb2xsaW5nSW50ZXJ2YWwsXG4gICAgICBwb2xsaW5nSW50ZXJ2YWwgPSBfZiA9PT0gdm9pZCAwID8gMCA6IF9mLFxuICAgICAgX2cgPSBfb3B0aW9ucy5wb2xsaW5nV2hlbkhpZGRlbixcbiAgICAgIHBvbGxpbmdXaGVuSGlkZGVuID0gX2cgPT09IHZvaWQgMCA/IHRydWUgOiBfZyxcbiAgICAgIF9oID0gX29wdGlvbnMuZGVmYXVsdFBhcmFtcyxcbiAgICAgIGRlZmF1bHRQYXJhbXMgPSBfaCA9PT0gdm9pZCAwID8gW10gOiBfaCxcbiAgICAgIF9qID0gX29wdGlvbnMucmVmcmVzaE9uV2luZG93Rm9jdXMsXG4gICAgICByZWZyZXNoT25XaW5kb3dGb2N1cyA9IF9qID09PSB2b2lkIDAgPyBmYWxzZSA6IF9qLFxuICAgICAgX2sgPSBfb3B0aW9ucy5mb2N1c1RpbWVzcGFuLFxuICAgICAgZm9jdXNUaW1lc3BhbiA9IF9rID09PSB2b2lkIDAgPyA1MDAwIDogX2ssXG4gICAgICBmZXRjaEtleSA9IF9vcHRpb25zLmZldGNoS2V5LFxuICAgICAgY2FjaGVLZXkgPSBfb3B0aW9ucy5jYWNoZUtleSxcbiAgICAgIF9sID0gX29wdGlvbnMuY2FjaGVUaW1lLFxuICAgICAgY2FjaGVUaW1lID0gX2wgPT09IHZvaWQgMCA/IDUgKiA2MCAqIDEwMDAgOiBfbCxcbiAgICAgIF9tID0gX29wdGlvbnMuc3RhbGVUaW1lLFxuICAgICAgc3RhbGVUaW1lID0gX20gPT09IHZvaWQgMCA/IDAgOiBfbSxcbiAgICAgIGRlYm91bmNlSW50ZXJ2YWwgPSBfb3B0aW9ucy5kZWJvdW5jZUludGVydmFsLFxuICAgICAgdGhyb3R0bGVJbnRlcnZhbCA9IF9vcHRpb25zLnRocm90dGxlSW50ZXJ2YWwsXG4gICAgICBpbml0aWFsRGF0YSA9IF9vcHRpb25zLmluaXRpYWxEYXRhLFxuICAgICAgX28gPSBfb3B0aW9ucy5yZWFkeSxcbiAgICAgIHJlYWR5ID0gX28gPT09IHZvaWQgMCA/IHRydWUgOiBfbyxcbiAgICAgIF9wID0gX29wdGlvbnMudGhyb3dPbkVycm9yLFxuICAgICAgdGhyb3dPbkVycm9yID0gX3AgPT09IHZvaWQgMCA/IGZhbHNlIDogX3A7XG4gIHZhciBuZXdzdEZldGNoS2V5ID0gdXNlUmVmKERFRkFVTFRfS0VZKTsgLy8g5oyB5LmF5YyW5LiA5Lqb5Ye95pWwXG5cbiAgdmFyIHNlcnZpY2VQZXJzaXN0ID0gdXNlUGVyc2lzdEZuKHNlcnZpY2UpO1xuICB2YXIgb25TdWNjZXNzUGVyc2lzdCA9IHVzZVBlcnNpc3RGbihvblN1Y2Nlc3MpO1xuICB2YXIgb25FcnJvclBlcnNpc3QgPSB1c2VQZXJzaXN0Rm4ob25FcnJvcik7XG4gIHZhciBmZXRjaEtleVBlcnNpc3QgPSB1c2VQZXJzaXN0Rm4oZmV0Y2hLZXkpO1xuICB2YXIgZm9ybWF0UmVzdWx0O1xuXG4gIGlmICgnZm9ybWF0UmVzdWx0JyBpbiBfb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgIGZvcm1hdFJlc3VsdCA9IF9vcHRpb25zLmZvcm1hdFJlc3VsdDtcbiAgfVxuXG4gIHZhciBmb3JtYXRSZXN1bHRQZXJzaXN0ID0gdXNlUGVyc2lzdEZuKGZvcm1hdFJlc3VsdCk7XG4gIHZhciBjb25maWcgPSB7XG4gICAgZm9ybWF0UmVzdWx0OiBmb3JtYXRSZXN1bHRQZXJzaXN0LFxuICAgIG9uU3VjY2Vzczogb25TdWNjZXNzUGVyc2lzdCxcbiAgICBvbkVycm9yOiBvbkVycm9yUGVyc2lzdCxcbiAgICBsb2FkaW5nRGVsYXk6IGxvYWRpbmdEZWxheSxcbiAgICBwb2xsaW5nSW50ZXJ2YWw6IHBvbGxpbmdJbnRlcnZhbCxcbiAgICBwb2xsaW5nV2hlbkhpZGRlbjogcG9sbGluZ1doZW5IaWRkZW4sXG4gICAgLy8gcmVmcmVzaE9uV2luZG93Rm9jdXMgc2hvdWxkIG5vdCB3b3JrIG9uIG1hbnVhbCBtb2RlXG4gICAgcmVmcmVzaE9uV2luZG93Rm9jdXM6ICFtYW51YWwgJiYgcmVmcmVzaE9uV2luZG93Rm9jdXMsXG4gICAgZm9jdXNUaW1lc3BhbjogZm9jdXNUaW1lc3BhbixcbiAgICBkZWJvdW5jZUludGVydmFsOiBkZWJvdW5jZUludGVydmFsLFxuICAgIHRocm90dGxlSW50ZXJ2YWw6IHRocm90dGxlSW50ZXJ2YWwsXG4gICAgdGhyb3dPbkVycm9yOiB0aHJvd09uRXJyb3JcbiAgfTtcbiAgdmFyIHN1YnNjcmliZSA9IHVzZVBlcnNpc3RGbihmdW5jdGlvbiAoa2V5LCBkYXRhKSB7XG4gICAgc2V0RmV0Y2hlcyhmdW5jdGlvbiAocykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBzW2tleV0gPSBkYXRhO1xuICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdmFyIF9xID0gX19yZWFkKHVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7IC8vIOWmguaenOaciSDnvJPlrZjvvIzliJnku47nvJPlrZjkuK3or7vmlbDmja5cblxuXG4gICAgaWYgKGNhY2hlS2V5KSB7XG4gICAgICB2YXIgY2FjaGVEYXRhXzEgPSAoX2EgPSBnZXRDYWNoZShjYWNoZUtleSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kYXRhO1xuXG4gICAgICBpZiAoY2FjaGVEYXRhXzEpIHtcbiAgICAgICAgbmV3c3RGZXRjaEtleS5jdXJyZW50ID0gY2FjaGVEYXRhXzEubmV3c3RGZXRjaEtleTtcbiAgICAgICAgLyog5L2/55SoIGluaXRTdGF0ZSwg6YeN5pawIG5ldyBGZXRjaCAqL1xuXG4gICAgICAgIHZhciBuZXdGZXRjaGVzXzEgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoY2FjaGVEYXRhXzEuZmV0Y2hlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgdmFyIGNhY2hlRmV0Y2ggPSBjYWNoZURhdGFfMS5mZXRjaGVzW2tleV07XG4gICAgICAgICAgdmFyIG5ld0ZldGNoID0gbmV3IEZldGNoKHNlcnZpY2VQZXJzaXN0LCBjb25maWcsIHN1YnNjcmliZS5iaW5kKG51bGwsIGtleSksIHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGNhY2hlRmV0Y2gubG9hZGluZyxcbiAgICAgICAgICAgIHBhcmFtczogY2FjaGVGZXRjaC5wYXJhbXMsXG4gICAgICAgICAgICBkYXRhOiBjYWNoZUZldGNoLmRhdGEsXG4gICAgICAgICAgICBlcnJvcjogY2FjaGVGZXRjaC5lcnJvclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG5ld0ZldGNoZXNfMVtrZXldID0gbmV3RmV0Y2guc3RhdGU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3RmV0Y2hlc18xO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7fTtcbiAgfSksIDIpLFxuICAgICAgZmV0Y2hlcyA9IF9xWzBdLFxuICAgICAgc2V0RmV0Y2hlcyA9IF9xWzFdO1xuXG4gIHZhciBmZXRjaGVzUmVmID0gdXNlUmVmKGZldGNoZXMpO1xuICBmZXRjaGVzUmVmLmN1cnJlbnQgPSBmZXRjaGVzO1xuICB2YXIgcmVhZHlNZW1vcnlQYXJhbXMgPSB1c2VSZWYoKTtcbiAgdmFyIHJ1biA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG5cbiAgICBpZiAoIXJlYWR5KSB7XG4gICAgICAvLyDmsqHmnIkgcmVhZHksIOiusOW9leivt+axguWPguaVsO+8jOetiSByZWFkeSDlkI7vvIzlj5Hotbfor7fmsYLnlKhcbiAgICAgIHJlYWR5TWVtb3J5UGFyYW1zLmN1cnJlbnQgPSBhcmdzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmZXRjaEtleVBlcnNpc3QpIHtcbiAgICAgIHZhciBrZXkgPSBmZXRjaEtleVBlcnNpc3QuYXBwbHkodm9pZCAwLCBfX3NwcmVhZChhcmdzKSk7XG4gICAgICBuZXdzdEZldGNoS2V5LmN1cnJlbnQgPSBrZXkgPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfS0VZIDoga2V5O1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50RmV0Y2hLZXkgPSBuZXdzdEZldGNoS2V5LmN1cnJlbnQ7IC8vIOi/memHjOW/hemhu+eUqCBmZXRjaHNSZWbvvIzogIzkuI3og73nlKggZmV0Y2hlc+OAglxuICAgIC8vIOWQpuWImeWcqCByZXNldCDlrozvvIznq4vljbMgcnVuIOeahOaXtuWAme+8jOi/memHjOaLv+WIsOeahCBmZXRjaGVzIOaYr+aXp+eahOOAglxuXG4gICAgdmFyIGN1cnJlbnRGZXRjaCA9IGZldGNoZXNSZWYuY3VycmVudFtjdXJyZW50RmV0Y2hLZXldO1xuXG4gICAgaWYgKCFjdXJyZW50RmV0Y2gpIHtcbiAgICAgIHZhciBuZXdGZXRjaCA9IG5ldyBGZXRjaChzZXJ2aWNlUGVyc2lzdCwgY29uZmlnLCBzdWJzY3JpYmUuYmluZChudWxsLCBjdXJyZW50RmV0Y2hLZXkpLCB7XG4gICAgICAgIGRhdGE6IGluaXRpYWxEYXRhXG4gICAgICB9KTtcbiAgICAgIGN1cnJlbnRGZXRjaCA9IG5ld0ZldGNoLnN0YXRlO1xuICAgICAgc2V0RmV0Y2hlcyhmdW5jdGlvbiAocykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgc1tjdXJyZW50RmV0Y2hLZXldID0gY3VycmVudEZldGNoO1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRGZXRjaC5ydW4uYXBwbHkoY3VycmVudEZldGNoLCBfX3NwcmVhZChhcmdzKSk7XG4gIH0sIFtmZXRjaEtleSwgc3Vic2NyaWJlLCByZWFkeV0pO1xuICB2YXIgcnVuUmVmID0gdXNlUmVmKHJ1bik7XG4gIHJ1blJlZi5jdXJyZW50ID0gcnVuOyAvLyBjYWNoZVxuXG4gIHVzZVVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhY2hlS2V5KSB7XG4gICAgICBzZXRDYWNoZShjYWNoZUtleSwgY2FjaGVUaW1lLCB7XG4gICAgICAgIGZldGNoZXM6IGZldGNoZXMsXG4gICAgICAgIG5ld3N0RmV0Y2hLZXk6IG5ld3N0RmV0Y2hLZXkuY3VycmVudFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbY2FjaGVLZXksIGZldGNoZXNdKTsgLy8gZm9yIHJlYWR5XG5cbiAgdmFyIGhhc1RyaWdnZXJlZEJ5UmVhZHkgPSB1c2VSZWYoZmFsc2UpO1xuICB1c2VVcGRhdGVFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChyZWFkeSkge1xuICAgICAgaWYgKCFoYXNUcmlnZ2VyZWRCeVJlYWR5LmN1cnJlbnQgJiYgcmVhZHlNZW1vcnlQYXJhbXMuY3VycmVudCkge1xuICAgICAgICBydW5SZWYuY3VycmVudC5hcHBseShydW5SZWYsIF9fc3ByZWFkKHJlYWR5TWVtb3J5UGFyYW1zLmN1cnJlbnQpKTtcbiAgICAgIH1cblxuICAgICAgaGFzVHJpZ2dlcmVkQnlSZWFkeS5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9XG4gIH0sIFtyZWFkeV0pOyAvLyDnrKzkuIDmrKHpu5jorqTmiafooYxcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYTtcblxuICAgIGlmICghbWFudWFsKSB7XG4gICAgICAvLyDlpoLmnpzmnInnvJPlrZjvvIzliJnph43mlrDor7fmsYJcbiAgICAgIGlmIChPYmplY3Qua2V5cyhmZXRjaGVzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIOWmguaenCBzdGFsZVRpbWUg5pivIC0x77yM5YiZIGNhY2hlIOawuOS4jei/h+acn1xuICAgICAgICAvLyDlpoLmnpwgc3RhdGxlVGltZSDotoXmnJ/kuobvvIzliJnph43mlrDor7fmsYJcbiAgICAgICAgdmFyIGNhY2hlU3RhcnRUaW1lID0gY2FjaGVLZXkgJiYgKChfYSA9IGdldENhY2hlKGNhY2hlS2V5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0YXJ0VGltZSkgfHwgMDtcblxuICAgICAgICBpZiAoIShzdGFsZVRpbWUgPT09IC0xIHx8IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gY2FjaGVTdGFydFRpbWUgPD0gc3RhbGVUaW1lKSkge1xuICAgICAgICAgIC8qIOmHjeaWsOaJp+ihjOaJgOacieeahCBjYWNoZSAqL1xuICAgICAgICAgIE9iamVjdC52YWx1ZXMoZmV0Y2hlcykuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgICAgICAgZi5yZWZyZXNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOesrOS4gOasoem7mOiupOaJp+ihjO+8jOWPr+S7pemAmui/hyBkZWZhdWx0UGFyYW1zIOiuvue9ruWPguaVsFxuICAgICAgICBydW5SZWYuY3VycmVudC5hcHBseShydW5SZWYsIF9fc3ByZWFkKGRlZmF1bHRQYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTsgLy8g6YeN572uIGZldGNoZXNcblxuICB2YXIgcmVzZXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgT2JqZWN0LnZhbHVlcyhmZXRjaGVzUmVmLmN1cnJlbnQpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgIGYudW5tb3VudCgpO1xuICAgIH0pO1xuICAgIG5ld3N0RmV0Y2hLZXkuY3VycmVudCA9IERFRkFVTFRfS0VZO1xuICAgIHNldEZldGNoZXMoe30pOyAvLyDkuI3lhpnkvJrmnInpl67popjjgILlpoLmnpzkuI3lhpnvvIzmraTml7bnq4vljbMgcnVu77yM5Lya5piv6ICB55qE5pWw5o2uXG5cbiAgICBmZXRjaGVzUmVmLmN1cnJlbnQgPSB7fTtcbiAgfSwgW3NldEZldGNoZXNdKTsgLy8gIHJlZnJlc2hEZXBzIOWPmOWMlu+8jOmHjeaWsOaJp+ihjOaJgOacieivt+axglxuXG4gIHVzZVVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFtYW51YWwpIHtcbiAgICAgIC8qIOWFqOmDqOmHjeaWsOaJp+ihjCAqL1xuICAgICAgT2JqZWN0LnZhbHVlcyhmZXRjaGVzUmVmLmN1cnJlbnQpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgZi5yZWZyZXNoKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIF9fc3ByZWFkKHJlZnJlc2hEZXBzKSk7IC8vIOWNuOi9vee7hOS7tuinpuWPkVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIE9iamVjdC52YWx1ZXMoZmV0Y2hlc1JlZi5jdXJyZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIGYudW5tb3VudCgpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfSwgW10pO1xuICB2YXIgbm90RXhlY3V0ZWRXYXJuaW5nID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS53YXJuKFwiWW91IHNob3VsZCd0IGNhbGwgXCIgKyBuYW1lICsgXCIgd2hlbiBzZXJ2aWNlIG5vdCBleGVjdXRlZCBvbmNlLlwiKTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7XG4gICAgbG9hZGluZzogcmVhZHkgJiYgIW1hbnVhbCB8fCBkZWZhdWx0TG9hZGluZyxcbiAgICBkYXRhOiBpbml0aWFsRGF0YSxcbiAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgIHBhcmFtczogW10sXG4gICAgY2FuY2VsOiBub3RFeGVjdXRlZFdhcm5pbmcoJ2NhbmNlbCcpLFxuICAgIHJlZnJlc2g6IG5vdEV4ZWN1dGVkV2FybmluZygncmVmcmVzaCcpLFxuICAgIG11dGF0ZTogbm90RXhlY3V0ZWRXYXJuaW5nKCdtdXRhdGUnKVxuICB9LCBmZXRjaGVzW25ld3N0RmV0Y2hLZXkuY3VycmVudF0gfHwge30pLCB7XG4gICAgcnVuOiBydW4sXG4gICAgZmV0Y2hlczogZmV0Y2hlcyxcbiAgICByZXNldDogcmVzZXRcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFzeW5jOyIsInZhciBfX2Fzc2lnbiA9IHRoaXMgJiYgdGhpcy5fX2Fzc2lnbiB8fCBmdW5jdGlvbiAoKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0O1xuICB9O1xuXG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG52YXIgX19zcHJlYWQgPSB0aGlzICYmIHRoaXMuX19zcHJlYWQgfHwgZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbmltcG9ydCB7IHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQXN5bmMgZnJvbSAnLi91c2VBc3luYyc7XG5pbXBvcnQgdXNlVXBkYXRlRWZmZWN0IGZyb20gJy4vdXRpbHMvdXNlVXBkYXRlRWZmZWN0JztcblxuZnVuY3Rpb24gdXNlTG9hZE1vcmUoc2VydmljZSwgb3B0aW9ucykge1xuICB2YXIgX2EgPSBvcHRpb25zLnJlZnJlc2hEZXBzLFxuICAgICAgcmVmcmVzaERlcHMgPSBfYSA9PT0gdm9pZCAwID8gW10gOiBfYSxcbiAgICAgIHJlZiA9IG9wdGlvbnMucmVmLFxuICAgICAgaXNOb01vcmUgPSBvcHRpb25zLmlzTm9Nb3JlLFxuICAgICAgX2IgPSBvcHRpb25zLnRocmVzaG9sZCxcbiAgICAgIHRocmVzaG9sZCA9IF9iID09PSB2b2lkIDAgPyAxMDAgOiBfYixcbiAgICAgIGZldGNoS2V5ID0gb3B0aW9ucy5mZXRjaEtleSxcbiAgICAgIHJlc3RPcHRpb25zID0gX19yZXN0KG9wdGlvbnMsIFtcInJlZnJlc2hEZXBzXCIsIFwicmVmXCIsIFwiaXNOb01vcmVcIiwgXCJ0aHJlc2hvbGRcIiwgXCJmZXRjaEtleVwiXSk7XG5cbiAgdmFyIF9jID0gX19yZWFkKHVzZVN0YXRlKGZhbHNlKSwgMiksXG4gICAgICBsb2FkaW5nTW9yZSA9IF9jWzBdLFxuICAgICAgc2V0TG9hZGluZ01vcmUgPSBfY1sxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcHRpb25zLmZldGNoS2V5KSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJ1c2VSZXF1ZXN0IGxvYWRNb3JlIG1vZGUgZG9uJ3QgbmVlZCBmZXRjaEtleSFcIik7XG4gICAgfVxuICB9LCBbXSk7XG4gIHZhciByZXN1bHQgPSB1c2VBc3luYyhzZXJ2aWNlLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzdE9wdGlvbnMpLCB7XG4gICAgZmV0Y2hLZXk6IGZ1bmN0aW9uIGZldGNoS2V5KGQpIHtcbiAgICAgIHZhciBfYTtcblxuICAgICAgcmV0dXJuICgoX2EgPSBkID09PSBudWxsIHx8IGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGQubGlzdCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgfHwgMDtcbiAgICB9LFxuICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBwYXJhbXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgIH1cblxuICAgICAgc2V0TG9hZGluZ01vcmUoZmFsc2UpO1xuXG4gICAgICBpZiAob3B0aW9ucy5vblN1Y2Nlc3MpIHtcbiAgICAgICAgb3B0aW9ucy5vblN1Y2Nlc3MuYXBwbHkob3B0aW9ucywgX19zcHJlYWQocGFyYW1zKSk7XG4gICAgICB9XG4gICAgfVxuICB9KSk7XG4gIHZhciBkYXRhID0gcmVzdWx0LmRhdGEsXG4gICAgICBydW4gPSByZXN1bHQucnVuLFxuICAgICAgcGFyYW1zID0gcmVzdWx0LnBhcmFtcyxcbiAgICAgIHJlc2V0ID0gcmVzdWx0LnJlc2V0LFxuICAgICAgbG9hZGluZyA9IHJlc3VsdC5sb2FkaW5nLFxuICAgICAgZmV0Y2hlcyA9IHJlc3VsdC5mZXRjaGVzO1xuICB2YXIgcmVsb2FkID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJlc2V0KCk7XG5cbiAgICB2YXIgX2EgPSBfX3JlYWQocGFyYW1zKSxcbiAgICAgICAgcmVzdFBhcmFtcyA9IF9hLnNsaWNlKDEpO1xuXG4gICAgcnVuLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoW3VuZGVmaW5lZF0sIHJlc3RQYXJhbXMpKTtcbiAgfSwgW3J1biwgcmVzZXQsIHBhcmFtc10pO1xuICB2YXIgcmVsb2FkUmVmID0gdXNlUmVmKHJlbG9hZCk7XG4gIHJlbG9hZFJlZi5jdXJyZW50ID0gcmVsb2FkO1xuICAvKiBsb2FkTW9yZSDlnLrmma/kuIvvvIzlpoLmnpwgcmVmcmVzaERlcHMg5Y+Y5YyW77yM6YeN572u5Yiw56ys5LiA6aG1ICovXG5cbiAgdXNlVXBkYXRlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvKiDlj6rmnInoh6rliqjmiafooYznmoTlnLrmma/vvIwgcmVmcmVzaERlcHMg5omN5pyJ5pWIICovXG4gICAgaWYgKCFvcHRpb25zLm1hbnVhbCkge1xuICAgICAgcmVsb2FkUmVmLmN1cnJlbnQoKTtcbiAgICB9XG4gIH0sIF9fc3ByZWFkKHJlZnJlc2hEZXBzKSk7XG4gIHZhciBkYXRhR3JvdXAgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlzdEdyb3VwID0gW107IC8vIOWcqCBsb2FkTW9yZSDml7bvvIzkuI3luIzmnJvmuIXnqbrkuIrkuIDmrKHnmoQgZGF0YeOAgumcgOimgeaKiuacgOWQjuS4gOS4qiDpnZ4gbG9hZGluZyDnmoTor7fmsYIgZGF0Ye+8jOaUvuWbnuWOu+OAglxuXG4gICAgdmFyIGxhc3ROb0xvYWRpbmdEYXRhID0gZGF0YTtcbiAgICBPYmplY3QudmFsdWVzKGZldGNoZXMpLmZvckVhY2goZnVuY3Rpb24gKGgpIHtcbiAgICAgIHZhciBfYSwgX2I7XG5cbiAgICAgIGlmICgoX2EgPSBoLmRhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5saXN0KSB7XG4gICAgICAgIGxpc3RHcm91cCA9IGxpc3RHcm91cC5jb25jYXQoKF9iID0gaC5kYXRhKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubGlzdCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaC5sb2FkaW5nKSB7XG4gICAgICAgIGxhc3ROb0xvYWRpbmdEYXRhID0gaC5kYXRhO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbGFzdE5vTG9hZGluZ0RhdGEpLCB7XG4gICAgICBsaXN0OiBsaXN0R3JvdXBcbiAgICB9KTtcbiAgfSwgW2ZldGNoZXMsIGRhdGFdKTtcbiAgdmFyIG5vTW9yZSA9IGlzTm9Nb3JlID8gIWxvYWRpbmcgJiYgIWxvYWRpbmdNb3JlICYmIGlzTm9Nb3JlKGRhdGFHcm91cCkgOiBmYWxzZTtcbiAgdmFyIGxvYWRNb3JlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChub01vcmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nTW9yZSh0cnVlKTtcblxuICAgIHZhciBfYSA9IF9fcmVhZChwYXJhbXMpLFxuICAgICAgICByZXN0UGFyYW1zID0gX2Euc2xpY2UoMSk7XG5cbiAgICBydW4uYXBwbHkodm9pZCAwLCBfX3NwcmVhZChbZGF0YUdyb3VwXSwgcmVzdFBhcmFtcykpO1xuICB9LCBbbm9Nb3JlLCBydW4sIGRhdGFHcm91cCwgcGFyYW1zXSk7XG4gIC8qIOS4iuaLieWKoOi9veeahOaWueazlSAqL1xuXG4gIHZhciBzY3JvbGxNZXRob2QgPSBmdW5jdGlvbiBzY3JvbGxNZXRob2QoKSB7XG4gICAgaWYgKGxvYWRpbmcgfHwgbG9hZGluZ01vcmUgfHwgIXJlZiB8fCAhcmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0IC0gcmVmLmN1cnJlbnQuc2Nyb2xsVG9wIDw9IHJlZi5jdXJyZW50LmNsaWVudEhlaWdodCArIHRocmVzaG9sZCkge1xuICAgICAgbG9hZE1vcmUoKTtcbiAgICB9XG4gIH07IC8vIOWmguaenOS4jeeUqCByZWbvvIzogIznlKjkuYvliY3nmoQgdXNlQ2FsbGJha++8jOWcqOafkOS6m+aDheWGteS4i+S8muWHuumXrumimO+8jOmAoOaIkOaLv+WIsOeahCBsb2FkaW5nIOS4jeaYr+acgOaWsOeahOOAglxuICAvLyBmaXggaHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvaG9va3MvaXNzdWVzLzYzMFxuXG5cbiAgdmFyIHNjcm9sbE1ldGhvZFJlZiA9IHVzZVJlZihzY3JvbGxNZXRob2QpO1xuICBzY3JvbGxNZXRob2RSZWYuY3VycmVudCA9IHNjcm9sbE1ldGhvZDtcbiAgLyog5aaC5p6c5pyJIHJlZu+8jOWImeS8muS4iuaLieWKoOi9veabtOWkmiAqL1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFyZWYgfHwgIXJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge307XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbFRyaWdnZXIgPSBmdW5jdGlvbiBzY3JvbGxUcmlnZ2VyKCkge1xuICAgICAgcmV0dXJuIHNjcm9sbE1ldGhvZFJlZi5jdXJyZW50KCk7XG4gICAgfTtcblxuICAgIHJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRyaWdnZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocmVmICYmIHJlZi5jdXJyZW50KSB7XG4gICAgICAgIHJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRyaWdnZXIpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtzY3JvbGxNZXRob2RSZWZdKTtcbiAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXN1bHQpLCB7XG4gICAgZGF0YTogZGF0YUdyb3VwLFxuICAgIHJlbG9hZDogcmVsb2FkLFxuICAgIGxvYWRpbmc6IGxvYWRpbmcgJiYgZGF0YUdyb3VwLmxpc3QubGVuZ3RoID09PSAwLFxuICAgIGxvYWRNb3JlOiBsb2FkTW9yZSxcbiAgICBsb2FkaW5nTW9yZTogbG9hZGluZ01vcmUsXG4gICAgbm9Nb3JlOiBub01vcmVcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUxvYWRNb3JlOyIsInZhciBfX2Fzc2lnbiA9IHRoaXMgJiYgdGhpcy5fX2Fzc2lnbiB8fCBmdW5jdGlvbiAoKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0O1xuICB9O1xuXG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG52YXIgX19zcHJlYWQgPSB0aGlzICYmIHRoaXMuX19zcHJlYWQgfHwgZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VBc3luYyBmcm9tICcuL3VzZUFzeW5jJztcbmltcG9ydCB1c2VVcGRhdGVFZmZlY3QgZnJvbSAnLi91dGlscy91c2VVcGRhdGVFZmZlY3QnO1xuXG5mdW5jdGlvbiB1c2VQYWdpbmF0ZWQoc2VydmljZSwgb3B0aW9ucykge1xuICB2YXIgcGFnaW5hdGVkID0gb3B0aW9ucy5wYWdpbmF0ZWQsXG4gICAgICBfYSA9IG9wdGlvbnMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgZGVmYXVsdFBhZ2VTaXplID0gX2EgPT09IHZvaWQgMCA/IDEwIDogX2EsXG4gICAgICBfYiA9IG9wdGlvbnMucmVmcmVzaERlcHMsXG4gICAgICByZWZyZXNoRGVwcyA9IF9iID09PSB2b2lkIDAgPyBbXSA6IF9iLFxuICAgICAgZmV0Y2hLZXkgPSBvcHRpb25zLmZldGNoS2V5LFxuICAgICAgcmVzdE9wdGlvbnMgPSBfX3Jlc3Qob3B0aW9ucywgW1wicGFnaW5hdGVkXCIsIFwiZGVmYXVsdFBhZ2VTaXplXCIsIFwicmVmcmVzaERlcHNcIiwgXCJmZXRjaEtleVwiXSk7XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZmV0Y2hLZXkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJ1c2VSZXF1ZXN0IHBhZ2luYXRpb24ncyBmZXRjaEtleSB3aWxsIG5vdCB3b3JrIVwiKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICB2YXIgX2MgPSB1c2VBc3luYyhzZXJ2aWNlLCBfX2Fzc2lnbih7XG4gICAgZGVmYXVsdFBhcmFtczogW3tcbiAgICAgIGN1cnJlbnQ6IDEsXG4gICAgICBwYWdlU2l6ZTogZGVmYXVsdFBhZ2VTaXplXG4gICAgfV1cbiAgfSwgcmVzdE9wdGlvbnMpKSxcbiAgICAgIGRhdGEgPSBfYy5kYXRhLFxuICAgICAgcGFyYW1zID0gX2MucGFyYW1zLFxuICAgICAgcnVuID0gX2MucnVuLFxuICAgICAgbG9hZGluZyA9IF9jLmxvYWRpbmcsXG4gICAgICByZXN0ID0gX19yZXN0KF9jLCBbXCJkYXRhXCIsIFwicGFyYW1zXCIsIFwicnVuXCIsIFwibG9hZGluZ1wiXSk7XG5cbiAgdmFyIF9kID0gcGFyYW1zICYmIHBhcmFtc1swXSA/IHBhcmFtc1swXSA6IHt9LFxuICAgICAgX2UgPSBfZC5jdXJyZW50LFxuICAgICAgY3VycmVudCA9IF9lID09PSB2b2lkIDAgPyAxIDogX2UsXG4gICAgICBfZiA9IF9kLnBhZ2VTaXplLFxuICAgICAgcGFnZVNpemUgPSBfZiA9PT0gdm9pZCAwID8gZGVmYXVsdFBhZ2VTaXplIDogX2YsXG4gICAgICBfZyA9IF9kLnNvcnRlcixcbiAgICAgIHNvcnRlciA9IF9nID09PSB2b2lkIDAgPyB7fSA6IF9nLFxuICAgICAgX2ggPSBfZC5maWx0ZXJzLFxuICAgICAgZmlsdGVycyA9IF9oID09PSB2b2lkIDAgPyB7fSA6IF9oOyAvLyDlj6rmlLnlj5ggcGFnaW5hdGlvbu+8jOWFtuS7luWPguaVsOWOn+agt+S8oOmAklxuXG5cbiAgdmFyIHJ1bkNoYW5nZVBhZ2luYXRpb24gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocGFnaW5hdGlvblBhcmFtcykge1xuICAgIHZhciBfYSA9IF9fcmVhZChwYXJhbXMpLFxuICAgICAgICBvbGRQYWdpbmF0aW9uUGFyYW1zID0gX2FbMF0sXG4gICAgICAgIHJlc3RQYXJhbXMgPSBfYS5zbGljZSgxKTtcblxuICAgIHJ1bi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKFtfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb2xkUGFnaW5hdGlvblBhcmFtcyksIHBhZ2luYXRpb25QYXJhbXMpXSwgcmVzdFBhcmFtcykpO1xuICB9LCBbcnVuLCBwYXJhbXNdKTtcbiAgdmFyIHRvdGFsID0gKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS50b3RhbCkgfHwgMDtcbiAgdmFyIHRvdGFsUGFnZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodG90YWwgLyBwYWdlU2l6ZSk7XG4gIH0sIFtwYWdlU2l6ZSwgdG90YWxdKTtcbiAgdmFyIG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGMsIHApIHtcbiAgICB2YXIgdG9DdXJyZW50ID0gYyA8PSAwID8gMSA6IGM7XG4gICAgdmFyIHRvUGFnZVNpemUgPSBwIDw9IDAgPyAxIDogcDtcbiAgICB2YXIgdGVtcFRvdGFsUGFnZSA9IE1hdGguY2VpbCh0b3RhbCAvIHRvUGFnZVNpemUpO1xuXG4gICAgaWYgKHRvQ3VycmVudCA+IHRlbXBUb3RhbFBhZ2UpIHtcbiAgICAgIHRvQ3VycmVudCA9IHRlbXBUb3RhbFBhZ2U7XG4gICAgfVxuXG4gICAgcnVuQ2hhbmdlUGFnaW5hdGlvbih7XG4gICAgICBjdXJyZW50OiBjLFxuICAgICAgcGFnZVNpemU6IHBcbiAgICB9KTtcbiAgfSwgW3RvdGFsLCBydW5DaGFuZ2VQYWdpbmF0aW9uXSk7XG4gIHZhciBjaGFuZ2VDdXJyZW50ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGMpIHtcbiAgICBvbkNoYW5nZShjLCBwYWdlU2l6ZSk7XG4gIH0sIFtvbkNoYW5nZSwgcGFnZVNpemVdKTtcbiAgdmFyIGNoYW5nZVBhZ2VTaXplID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHApIHtcbiAgICBvbkNoYW5nZShjdXJyZW50LCBwKTtcbiAgfSwgW29uQ2hhbmdlLCBjdXJyZW50XSk7XG4gIHZhciBjaGFuZ2VDdXJyZW50UmVmID0gdXNlUmVmKGNoYW5nZUN1cnJlbnQpO1xuICBjaGFuZ2VDdXJyZW50UmVmLmN1cnJlbnQgPSBjaGFuZ2VDdXJyZW50O1xuICAvKiDliIbpobXlnLrmma/kuIvvvIzlpoLmnpwgcmVmcmVzaERlcHMg5Y+Y5YyW77yM6YeN572u5YiG6aG1ICovXG5cbiAgdXNlVXBkYXRlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvKiDlj6rmnInoh6rliqjmiafooYznmoTlnLrmma/vvIwgcmVmcmVzaERlcHMg5omN5pyJ5pWIICovXG4gICAgaWYgKCFvcHRpb25zLm1hbnVhbCkge1xuICAgICAgY2hhbmdlQ3VycmVudFJlZi5jdXJyZW50KDEpO1xuICAgIH1cbiAgfSwgX19zcHJlYWQocmVmcmVzaERlcHMpKTsgLy8g6KGo5qC857+76aG1IOaOkuW6jyDnrZvpgInnrYlcblxuICB2YXIgY2hhbmdlVGFibGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocCwgZiwgcykge1xuICAgIHJ1bkNoYW5nZVBhZ2luYXRpb24oe1xuICAgICAgY3VycmVudDogcC5jdXJyZW50LFxuICAgICAgcGFnZVNpemU6IHAucGFnZVNpemUgfHwgZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgZmlsdGVyczogZixcbiAgICAgIHNvcnRlcjogc1xuICAgIH0pO1xuICB9LCBbZmlsdGVycywgc29ydGVyLCBydW5DaGFuZ2VQYWdpbmF0aW9uXSk7XG4gIHJldHVybiBfX2Fzc2lnbih7XG4gICAgbG9hZGluZzogbG9hZGluZyxcbiAgICBkYXRhOiBkYXRhLFxuICAgIHBhcmFtczogcGFyYW1zLFxuICAgIHJ1bjogcnVuLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGN1cnJlbnQ6IGN1cnJlbnQsXG4gICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICB0b3RhbDogdG90YWwsXG4gICAgICB0b3RhbFBhZ2U6IHRvdGFsUGFnZSxcbiAgICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICAgIGNoYW5nZUN1cnJlbnQ6IGNoYW5nZUN1cnJlbnQsXG4gICAgICBjaGFuZ2VQYWdlU2l6ZTogY2hhbmdlUGFnZVNpemVcbiAgICB9LFxuICAgIHRhYmxlUHJvcHM6IHtcbiAgICAgIGRhdGFTb3VyY2U6IChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEubGlzdCkgfHwgW10sXG4gICAgICBsb2FkaW5nOiBsb2FkaW5nLFxuICAgICAgb25DaGFuZ2U6IGNoYW5nZVRhYmxlLFxuICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgIHRvdGFsOiB0b3RhbFxuICAgICAgfVxuICAgIH0sXG4gICAgc29ydGVyOiBzb3J0ZXIsXG4gICAgZmlsdGVyczogZmlsdGVyc1xuICB9LCByZXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUGFnaW5hdGVkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgQ29uZmlnQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbkNvbmZpZ0NvbnRleHQuZGlzcGxheU5hbWUgPSAnVXNlUmVxdWVzdENvbmZpZ0NvbnRleHQnO1xuZXhwb3J0IGRlZmF1bHQgQ29uZmlnQ29udGV4dDsiLCJ2YXIgX19hc3NpZ24gPSB0aGlzICYmIHRoaXMuX19hc3NpZ24gfHwgZnVuY3Rpb24gKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdDtcbiAgfTtcblxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgX19yZWFkID0gdGhpcyAmJiB0aGlzLl9fcmVhZCB8fCBmdW5jdGlvbiAobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLFxuICAgICAgcixcbiAgICAgIGFyID0gW10sXG4gICAgICBlO1xuXG4gIHRyeSB7XG4gICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxudmFyIF9fc3ByZWFkID0gdGhpcyAmJiB0aGlzLl9fc3ByZWFkIHx8IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MgKi9cblxuXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQXN5bmMgZnJvbSAnLi91c2VBc3luYyc7XG5pbXBvcnQgdXNlTG9hZE1vcmUgZnJvbSAnLi91c2VMb2FkTW9yZSc7XG5pbXBvcnQgdXNlUGFnaW5hdGVkIGZyb20gJy4vdXNlUGFnaW5hdGVkJztcbmltcG9ydCBDb25maWdDb250ZXh0IGZyb20gJy4vY29uZmlnQ29udGV4dCc7XG5cbmZ1bmN0aW9uIHVzZVJlcXVlc3Qoc2VydmljZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIGNvbnRleHRDb25maWcgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuXG4gIHZhciBmaW5hbE9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dENvbmZpZyksIG9wdGlvbnMpO1xuXG4gIHZhciBwYWdpbmF0ZWQgPSBmaW5hbE9wdGlvbnMucGFnaW5hdGVkLFxuICAgICAgbG9hZE1vcmUgPSBmaW5hbE9wdGlvbnMubG9hZE1vcmUsXG4gICAgICByZXF1ZXN0TWV0aG9kID0gZmluYWxPcHRpb25zLnJlcXVlc3RNZXRob2Q7XG4gIHZhciBwYWdpbmF0ZWRSZWYgPSB1c2VSZWYocGFnaW5hdGVkKTtcbiAgdmFyIGxvYWRNb3JlUmVmID0gdXNlUmVmKGxvYWRNb3JlKTtcblxuICBpZiAocGFnaW5hdGVkUmVmLmN1cnJlbnQgIT09IHBhZ2luYXRlZCkge1xuICAgIHRocm93IEVycm9yKCdZb3Ugc2hvdWxkIG5vdCBtb2RpZnkgdGhlIHBhZ2luYXRlZCBvZiBvcHRpb25zJyk7XG4gIH1cblxuICBpZiAobG9hZE1vcmVSZWYuY3VycmVudCAhPT0gbG9hZE1vcmUpIHtcbiAgICB0aHJvdyBFcnJvcignWW91IHNob3VsZCBub3QgbW9kaWZ5IHRoZSBsb2FkTW9yZSBvZiBvcHRpb25zJyk7XG4gIH1cblxuICBwYWdpbmF0ZWRSZWYuY3VycmVudCA9IHBhZ2luYXRlZDtcbiAgbG9hZE1vcmVSZWYuY3VycmVudCA9IGxvYWRNb3JlOyAvLyBAdHMtaWdub3JlXG5cbiAgdmFyIGZldGNoUHJveHkgPSBmdW5jdGlvbiBmZXRjaFByb3h5KCkge1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH0gLy8gQHRzLWlnbm9yZVxuXG5cbiAgICByZXR1cm4gZmV0Y2guYXBwbHkodm9pZCAwLCBfX3NwcmVhZChhcmdzKSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzLnN0YXR1c1RleHQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBmaW5hbFJlcXVlc3RNZXRob2QgPSByZXF1ZXN0TWV0aG9kIHx8IGZldGNoUHJveHk7XG4gIHZhciBwcm9taXNlU2VydmljZTtcblxuICBzd2l0Y2ggKHR5cGVvZiBzZXJ2aWNlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHByb21pc2VTZXJ2aWNlID0gZnVuY3Rpb24gcHJvbWlzZVNlcnZpY2UoKSB7XG4gICAgICAgIHJldHVybiBmaW5hbFJlcXVlc3RNZXRob2Qoc2VydmljZSk7XG4gICAgICB9O1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICB2YXIgdXJsXzEgPSBzZXJ2aWNlLnVybCxcbiAgICAgICAgICByZXN0XzEgPSBfX3Jlc3Qoc2VydmljZSwgW1widXJsXCJdKTtcblxuICAgICAgcHJvbWlzZVNlcnZpY2UgPSBmdW5jdGlvbiBwcm9taXNlU2VydmljZSgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RNZXRob2QgPyByZXF1ZXN0TWV0aG9kKHNlcnZpY2UpIDogZmV0Y2hQcm94eSh1cmxfMSwgcmVzdF8xKTtcbiAgICAgIH07XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHByb21pc2VTZXJ2aWNlID0gZnVuY3Rpb24gcHJvbWlzZVNlcnZpY2UoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHZhciBzID0gc2VydmljZS5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgICAgICB2YXIgZm4gPSBzO1xuXG4gICAgICAgICAgaWYgKCFzLnRoZW4pIHtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHMpIHtcbiAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBmbiA9IGZpbmFsUmVxdWVzdE1ldGhvZChzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIHZhciB1cmxfMiA9IHMudXJsLFxuICAgICAgICAgICAgICAgICAgICByZXN0XzIgPSBfX3Jlc3QocywgW1widXJsXCJdKTtcblxuICAgICAgICAgICAgICAgIGZuID0gcmVxdWVzdE1ldGhvZCA/IHJlcXVlc3RNZXRob2QocykgOiBmZXRjaFByb3h5KHVybF8yLCByZXN0XzIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZuLnRoZW4ocmVzb2x2ZSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgfVxuXG4gIGlmIChsb2FkTW9yZSkge1xuICAgIHJldHVybiB1c2VMb2FkTW9yZShwcm9taXNlU2VydmljZSwgZmluYWxPcHRpb25zKTtcbiAgfVxuXG4gIGlmIChwYWdpbmF0ZWQpIHtcbiAgICByZXR1cm4gdXNlUGFnaW5hdGVkKHByb21pc2VTZXJ2aWNlLCBmaW5hbE9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIHVzZUFzeW5jKHByb21pc2VTZXJ2aWNlLCBmaW5hbE9wdGlvbnMpO1xufVxuXG52YXIgVXNlUmVxdWVzdFByb3ZpZGVyID0gQ29uZmlnQ29udGV4dC5Qcm92aWRlcjsgLy8gVXNlQVBJUHJvdmlkZXIg5bey57uP5bqf5byD77yM5q2k5aSE5Li65LqG5YW85a65IHVtaWpzIOaPkuS7tiBwbHVnaW4tcmVxdWVzdFxuXG52YXIgVXNlQVBJUHJvdmlkZXIgPSBVc2VSZXF1ZXN0UHJvdmlkZXI7XG5leHBvcnQgeyB1c2VBc3luYywgdXNlUGFnaW5hdGVkLCB1c2VMb2FkTW9yZSwgVXNlUmVxdWVzdFByb3ZpZGVyLCBVc2VBUElQcm92aWRlciB9O1xuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdDsiLCIvKipcclxuICogQSBjb2xsZWN0aW9uIG9mIHNoaW1zIHRoYXQgcHJvdmlkZSBtaW5pbWFsIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIEVTNiBjb2xsZWN0aW9ucy5cclxuICpcclxuICogVGhlc2UgaW1wbGVtZW50YXRpb25zIGFyZSBub3QgbWVhbnQgdG8gYmUgdXNlZCBvdXRzaWRlIG9mIHRoZSBSZXNpemVPYnNlcnZlclxyXG4gKiBtb2R1bGVzIGFzIHRoZXkgY292ZXIgb25seSBhIGxpbWl0ZWQgcmFuZ2Ugb2YgdXNlIGNhc2VzLlxyXG4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1qc2RvYywgdmFsaWQtanNkb2MgKi9cclxudmFyIE1hcFNoaW0gPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBNYXAgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hcDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBpbmRleCBpbiBwcm92aWRlZCBhcnJheSB0aGF0IG1hdGNoZXMgdGhlIHNwZWNpZmllZCBrZXkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFyclxyXG4gICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldEluZGV4KGFyciwga2V5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gICAgICAgIGFyci5zb21lKGZ1bmN0aW9uIChlbnRyeSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5WzBdID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsYXNzXzEucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fZW50cmllc19fLmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KHRoaXMuX19lbnRyaWVzX18sIGtleSk7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX19lbnRyaWVzX19baW5kZXhdO1xyXG4gICAgICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnlbMV07XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGtleVxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBnZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9fZW50cmllc19fW2luZGV4XVsxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fX2VudHJpZXNfXy5wdXNoKFtrZXksIHZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7Kn0ga2V5XHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgZW50cmllcyA9IHRoaXMuX19lbnRyaWVzX187XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGdldEluZGV4KGVudHJpZXMsIGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHsqfSBrZXlcclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5nZXRJbmRleCh0aGlzLl9fZW50cmllc19fLCBrZXkpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX19lbnRyaWVzX18uc3BsaWNlKDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAgICAgKiBAcGFyYW0geyp9IFtjdHg9bnVsbF1cclxuICAgICAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAgICAgKi9cclxuICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBjdHgpIHtcclxuICAgICAgICAgICAgaWYgKGN0eCA9PT0gdm9pZCAwKSB7IGN0eCA9IG51bGw7IH1cclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMuX19lbnRyaWVzX187IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGN0eCwgZW50cnlbMV0sIGVudHJ5WzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzXzE7XHJcbiAgICB9KCkpO1xyXG59KSgpO1xuXG4vKipcclxuICogRGV0ZWN0cyB3aGV0aGVyIHdpbmRvdyBhbmQgZG9jdW1lbnQgb2JqZWN0cyBhcmUgYXZhaWxhYmxlIGluIGN1cnJlbnQgZW52aXJvbm1lbnQuXHJcbiAqL1xyXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgPT09IGRvY3VtZW50O1xuXG4vLyBSZXR1cm5zIGdsb2JhbCBvYmplY3Qgb2YgYSBjdXJyZW50IGVudmlyb25tZW50LlxyXG52YXIgZ2xvYmFsJDEgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09PSBNYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT09IE1hdGgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93O1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXHJcbiAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcclxufSkoKTtcblxuLyoqXHJcbiAqIEEgc2hpbSBmb3IgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZSB3aGljaCBmYWxscyBiYWNrIHRvIHRoZSBzZXRUaW1lb3V0IGlmXHJcbiAqIGZpcnN0IG9uZSBpcyBub3Qgc3VwcG9ydGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXF1ZXN0cycgaWRlbnRpZmllci5cclxuICovXHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8vIEl0J3MgcmVxdWlyZWQgdG8gdXNlIGEgYm91bmRlZCBmdW5jdGlvbiBiZWNhdXNlIElFIHNvbWV0aW1lcyB0aHJvd3NcclxuICAgICAgICAvLyBhbiBcIkludmFsaWQgY2FsbGluZyBvYmplY3RcIiBlcnJvciBpZiByQUYgaXMgaW52b2tlZCB3aXRob3V0IHRoZSBnbG9iYWxcclxuICAgICAgICAvLyBvYmplY3Qgb24gdGhlIGxlZnQgaGFuZCBzaWRlLlxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZChnbG9iYWwkMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrKERhdGUubm93KCkpOyB9LCAxMDAwIC8gNjApOyB9O1xyXG59KSgpO1xuXG4vLyBEZWZpbmVzIG1pbmltdW0gdGltZW91dCBiZWZvcmUgYWRkaW5nIGEgdHJhaWxpbmcgY2FsbC5cclxudmFyIHRyYWlsaW5nVGltZW91dCA9IDI7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBlbnN1cmVzIHRoYXQgcHJvdmlkZWQgY2FsbGJhY2sgd2lsbCBiZVxyXG4gKiBpbnZva2VkIG9ubHkgb25jZSBkdXJpbmcgdGhlIHNwZWNpZmllZCBkZWxheSBwZXJpb2QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgZGVsYXkgcGVyaW9kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgLSBEZWxheSBhZnRlciB3aGljaCB0byBpbnZva2UgY2FsbGJhY2suXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbmZ1bmN0aW9uIHRocm90dGxlIChjYWxsYmFjaywgZGVsYXkpIHtcclxuICAgIHZhciBsZWFkaW5nQ2FsbCA9IGZhbHNlLCB0cmFpbGluZ0NhbGwgPSBmYWxzZSwgbGFzdENhbGxUaW1lID0gMDtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gYW5kIHNjaGVkdWxlcyBuZXcgaW52b2NhdGlvbiBpZlxyXG4gICAgICogdGhlIFwicHJveHlcIiB3YXMgY2FsbGVkIGR1cmluZyBjdXJyZW50IHJlcXVlc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlc29sdmVQZW5kaW5nKCkge1xyXG4gICAgICAgIGlmIChsZWFkaW5nQ2FsbCkge1xyXG4gICAgICAgICAgICBsZWFkaW5nQ2FsbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJhaWxpbmdDYWxsKSB7XHJcbiAgICAgICAgICAgIHByb3h5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXkuIEl0IHdpbGwgZnVydGhlciBwb3N0cG9uZVxyXG4gICAgICogaW52b2NhdGlvbiBvZiB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gZGVsZWdhdGluZyBpdCB0byB0aGVcclxuICAgICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSQxKHJlc29sdmVQZW5kaW5nKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU2NoZWR1bGVzIGludm9jYXRpb24gb2YgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwcm94eSgpIHtcclxuICAgICAgICB2YXIgdGltZVN0YW1wID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBpZiAobGVhZGluZ0NhbGwpIHtcclxuICAgICAgICAgICAgLy8gUmVqZWN0IGltbWVkaWF0ZWx5IGZvbGxvd2luZyBjYWxscy5cclxuICAgICAgICAgICAgaWYgKHRpbWVTdGFtcCAtIGxhc3RDYWxsVGltZSA8IHRyYWlsaW5nVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIFNjaGVkdWxlIG5ldyBjYWxsIHRvIGJlIGluIGludm9rZWQgd2hlbiB0aGUgcGVuZGluZyBvbmUgaXMgcmVzb2x2ZWQuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IGZvciBcInRyYW5zaXRpb25zXCIgd2hpY2ggbmV2ZXIgYWN0dWFsbHkgc3RhcnRcclxuICAgICAgICAgICAgLy8gaW1tZWRpYXRlbHkgc28gdGhlcmUgaXMgYSBjaGFuY2UgdGhhdCB3ZSBtaWdodCBtaXNzIG9uZSBpZiBjaGFuZ2VcclxuICAgICAgICAgICAgLy8gaGFwcGVucyBhbWlkcyB0aGUgcGVuZGluZyBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGVhZGluZ0NhbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0cmFpbGluZ0NhbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCh0aW1lb3V0Q2FsbGJhY2ssIGRlbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdENhbGxUaW1lID0gdGltZVN0YW1wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3h5O1xyXG59XG5cbi8vIE1pbmltdW0gZGVsYXkgYmVmb3JlIGludm9raW5nIHRoZSB1cGRhdGUgb2Ygb2JzZXJ2ZXJzLlxyXG52YXIgUkVGUkVTSF9ERUxBWSA9IDIwO1xyXG4vLyBBIGxpc3Qgb2Ygc3Vic3RyaW5ncyBvZiBDU1MgcHJvcGVydGllcyB1c2VkIHRvIGZpbmQgdHJhbnNpdGlvbiBldmVudHMgdGhhdFxyXG4vLyBtaWdodCBhZmZlY3QgZGltZW5zaW9ucyBvZiBvYnNlcnZlZCBlbGVtZW50cy5cclxudmFyIHRyYW5zaXRpb25LZXlzID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ3NpemUnLCAnd2VpZ2h0J107XHJcbi8vIENoZWNrIGlmIE11dGF0aW9uT2JzZXJ2ZXIgaXMgYXZhaWxhYmxlLlxyXG52YXIgbXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCA9IHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcclxuLyoqXHJcbiAqIFNpbmdsZXRvbiBjb250cm9sbGVyIGNsYXNzIHdoaWNoIGhhbmRsZXMgdXBkYXRlcyBvZiBSZXNpemVPYnNlcnZlciBpbnN0YW5jZXMuXHJcbiAqL1xyXG52YXIgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSW5kaWNhdGVzIHdoZXRoZXIgRE9NIGxpc3RlbmVycyBoYXZlIGJlZW4gYWRkZWQuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7Ym9vbGVhbn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUZWxscyB0aGF0IGNvbnRyb2xsZXIgaGFzIHN1YnNjcmliZWQgZm9yIE11dGF0aW9uIEV2ZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBLZWVwcyByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIE11dGF0aW9uT2JzZXJ2ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7TXV0YXRpb25PYnNlcnZlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQSBsaXN0IG9mIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcHJpdmF0ZSB7QXJyYXk8UmVzaXplT2JzZXJ2ZXJTUEk+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzXyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25UcmFuc2l0aW9uRW5kXyA9IHRoaXMub25UcmFuc2l0aW9uRW5kXy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCA9IHRocm90dGxlKHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCBSRUZSRVNIX0RFTEFZKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBvYnNlcnZlciB0byBvYnNlcnZlcnMgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyU1BJfSBvYnNlcnZlciAtIE9ic2VydmVyIHRvIGJlIGFkZGVkLlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuYWRkT2JzZXJ2ZXIgPSBmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAoIX50aGlzLm9ic2VydmVyc18uaW5kZXhPZihvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnNfLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgbGlzdGVuZXJzIGlmIHRoZXkgaGF2ZW4ndCBiZWVuIGFkZGVkIHlldC5cclxuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBvYnNlcnZlciBmcm9tIG9ic2VydmVycyBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJTUEl9IG9ic2VydmVyIC0gT2JzZXJ2ZXIgdG8gYmUgcmVtb3ZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXztcclxuICAgICAgICB2YXIgaW5kZXggPSBvYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgLy8gUmVtb3ZlIG9ic2VydmVyIGlmIGl0J3MgcHJlc2VudCBpbiByZWdpc3RyeS5cclxuICAgICAgICBpZiAofmluZGV4KSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBSZW1vdmUgbGlzdGVuZXJzIGlmIGNvbnRyb2xsZXIgaGFzIG5vIGNvbm5lY3RlZCBvYnNlcnZlcnMuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZlcnMubGVuZ3RoICYmIHRoaXMuY29ubmVjdGVkXykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2Nvbm5lY3RfKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlcyB0aGUgdXBkYXRlIG9mIG9ic2VydmVycy4gSXQgd2lsbCBjb250aW51ZSBydW5uaW5nIHVwZGF0ZXMgaW5zb2ZhclxyXG4gICAgICogaXQgZGV0ZWN0cyBjaGFuZ2VzLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNoYW5nZXNEZXRlY3RlZCA9IHRoaXMudXBkYXRlT2JzZXJ2ZXJzXygpO1xyXG4gICAgICAgIC8vIENvbnRpbnVlIHJ1bm5pbmcgdXBkYXRlcyBpZiBjaGFuZ2VzIGhhdmUgYmVlbiBkZXRlY3RlZCBhcyB0aGVyZSBtaWdodFxyXG4gICAgICAgIC8vIGJlIGZ1dHVyZSBvbmVzIGNhdXNlZCBieSBDU1MgdHJhbnNpdGlvbnMuXHJcbiAgICAgICAgaWYgKGNoYW5nZXNEZXRlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGV2ZXJ5IG9ic2VydmVyIGZyb20gb2JzZXJ2ZXJzIGxpc3QgYW5kIG5vdGlmaWVzIHRoZW0gb2YgcXVldWVkXHJcbiAgICAgKiBlbnRyaWVzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBcInRydWVcIiBpZiBhbnkgb2JzZXJ2ZXIgaGFzIGRldGVjdGVkIGNoYW5nZXMgaW5cclxuICAgICAqICAgICAgZGltZW5zaW9ucyBvZiBpdCdzIGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIucHJvdG90eXBlLnVwZGF0ZU9ic2VydmVyc18gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQ29sbGVjdCBvYnNlcnZlcnMgdGhhdCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdmFyIGFjdGl2ZU9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzXy5maWx0ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5nYXRoZXJBY3RpdmUoKSwgb2JzZXJ2ZXIuaGFzQWN0aXZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gRGVsaXZlciBub3RpZmljYXRpb25zIGluIGEgc2VwYXJhdGUgY3ljbGUgaW4gb3JkZXIgdG8gYXZvaWQgYW55XHJcbiAgICAgICAgLy8gY29sbGlzaW9ucyBiZXR3ZWVuIG9ic2VydmVycywgZS5nLiB3aGVuIG11bHRpcGxlIGluc3RhbmNlcyBvZlxyXG4gICAgICAgIC8vIFJlc2l6ZU9ic2VydmVyIGFyZSB0cmFja2luZyB0aGUgc2FtZSBlbGVtZW50IGFuZCB0aGUgY2FsbGJhY2sgb2Ygb25lXHJcbiAgICAgICAgLy8gb2YgdGhlbSBjaGFuZ2VzIGNvbnRlbnQgZGltZW5zaW9ucyBvZiB0aGUgb2JzZXJ2ZWQgdGFyZ2V0LiBTb21ldGltZXNcclxuICAgICAgICAvLyB0aGlzIG1heSByZXN1bHQgaW4gbm90aWZpY2F0aW9ucyBiZWluZyBibG9ja2VkIGZvciB0aGUgcmVzdCBvZiBvYnNlcnZlcnMuXHJcbiAgICAgICAgYWN0aXZlT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmVyKSB7IHJldHVybiBvYnNlcnZlci5icm9hZGNhc3RBY3RpdmUoKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFjdGl2ZU9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgRE9NIGxpc3RlbmVycy5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5wcm90b3R5cGUuY29ubmVjdF8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiBydW5uaW5nIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQgb3IgaWYgbGlzdGVuZXJzXHJcbiAgICAgICAgLy8gaGF2ZSBiZWVuIGFscmVhZHkgYWRkZWQuXHJcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXIgfHwgdGhpcy5jb25uZWN0ZWRfKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU3Vic2NyaXB0aW9uIHRvIHRoZSBcIlRyYW5zaXRpb25lbmRcIiBldmVudCBpcyB1c2VkIGFzIGEgd29ya2Fyb3VuZCBmb3JcclxuICAgICAgICAvLyBkZWxheWVkIHRyYW5zaXRpb25zLiBUaGlzIHdheSBpdCdzIHBvc3NpYmxlIHRvIGNhcHR1cmUgYXQgbGVhc3QgdGhlXHJcbiAgICAgICAgLy8gZmluYWwgc3RhdGUgb2YgYW4gZWxlbWVudC5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAobXV0YXRpb25PYnNlcnZlclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25zT2JzZXJ2ZXJfLm9ic2VydmUoZG9jdW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIHRoaXMucmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25FdmVudHNBZGRlZF8gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbm5lY3RlZF8gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyBET00gbGlzdGVuZXJzLlxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5kaXNjb25uZWN0XyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHJ1bm5pbmcgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudCBvciBpZiBsaXN0ZW5lcnNcclxuICAgICAgICAvLyBoYXZlIGJlZW4gYWxyZWFkeSByZW1vdmVkLlxyXG4gICAgICAgIGlmICghaXNCcm93c2VyIHx8ICF0aGlzLmNvbm5lY3RlZF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5vblRyYW5zaXRpb25FbmRfKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZWZyZXNoKTtcclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8pIHtcclxuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbnNPYnNlcnZlcl8uZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCB0aGlzLnJlZnJlc2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm11dGF0aW9uc09ic2VydmVyXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tdXRhdGlvbkV2ZW50c0FkZGVkXyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGVkXyA9IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogXCJUcmFuc2l0aW9uZW5kXCIgZXZlbnQgaGFuZGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtUcmFuc2l0aW9uRXZlbnR9IGV2ZW50XHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmRfID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EucHJvcGVydHlOYW1lLCBwcm9wZXJ0eU5hbWUgPSBfYiA9PT0gdm9pZCAwID8gJycgOiBfYjtcclxuICAgICAgICAvLyBEZXRlY3Qgd2hldGhlciB0cmFuc2l0aW9uIG1heSBhZmZlY3QgZGltZW5zaW9ucyBvZiBhbiBlbGVtZW50LlxyXG4gICAgICAgIHZhciBpc1JlZmxvd1Byb3BlcnR5ID0gdHJhbnNpdGlvbktleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIX5wcm9wZXJ0eU5hbWUuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc1JlZmxvd1Byb3BlcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgaW5zdGFuY2Ugb2YgdGhlIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7UmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlXykge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlXyA9IG5ldyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VfO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSG9sZHMgcmVmZXJlbmNlIHRvIHRoZSBjb250cm9sbGVyJ3MgaW5zdGFuY2UuXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGUge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmluc3RhbmNlXyA9IG51bGw7XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyO1xyXG59KCkpO1xuXG4vKipcclxuICogRGVmaW5lcyBub24td3JpdGFibGUvZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIHRoZSBwcm92aWRlZCB0YXJnZXQgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0IC0gT2JqZWN0IGZvciB3aGljaCB0byBkZWZpbmUgcHJvcGVydGllcy5cclxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gUHJvcGVydGllcyB0byBiZSBkZWZpbmVkLlxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUYXJnZXQgb2JqZWN0LlxyXG4gKi9cclxudmFyIGRlZmluZUNvbmZpZ3VyYWJsZSA9IChmdW5jdGlvbiAodGFyZ2V0LCBwcm9wcykge1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKHByb3BzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIga2V5ID0gX2FbX2ldO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHNba2V5XSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59KTtcblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGdsb2JhbCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHByb3ZpZGVkIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRcclxuICogQHJldHVybnMge09iamVjdH1cclxuICovXHJcbnZhciBnZXRXaW5kb3dPZiA9IChmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAvLyBBc3N1bWUgdGhhdCB0aGUgZWxlbWVudCBpcyBhbiBpbnN0YW5jZSBvZiBOb2RlLCB3aGljaCBtZWFucyB0aGF0IGl0XHJcbiAgICAvLyBoYXMgdGhlIFwib3duZXJEb2N1bWVudFwiIHByb3BlcnR5IGZyb20gd2hpY2ggd2UgY2FuIHJldHJpZXZlIGFcclxuICAgIC8vIGNvcnJlc3BvbmRpbmcgZ2xvYmFsIG9iamVjdC5cclxuICAgIHZhciBvd25lckdsb2JhbCA9IHRhcmdldCAmJiB0YXJnZXQub3duZXJEb2N1bWVudCAmJiB0YXJnZXQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICAgIC8vIFJldHVybiB0aGUgbG9jYWwgZ2xvYmFsIG9iamVjdCBpZiBpdCdzIG5vdCBwb3NzaWJsZSBleHRyYWN0IG9uZSBmcm9tXHJcbiAgICAvLyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgcmV0dXJuIG93bmVyR2xvYmFsIHx8IGdsb2JhbCQxO1xyXG59KTtcblxuLy8gUGxhY2Vob2xkZXIgb2YgYW4gZW1wdHkgY29udGVudCByZWN0YW5nbGUuXHJcbnZhciBlbXB0eVJlY3QgPSBjcmVhdGVSZWN0SW5pdCgwLCAwLCAwLCAwKTtcclxuLyoqXHJcbiAqIENvbnZlcnRzIHByb3ZpZGVkIHN0cmluZyB0byBhIG51bWJlci5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZnVuY3Rpb24gdG9GbG9hdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3RzIGJvcmRlcnMgc2l6ZSBmcm9tIHByb3ZpZGVkIHN0eWxlcy5cclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcclxuICogQHBhcmFtIHsuLi5zdHJpbmd9IHBvc2l0aW9ucyAtIEJvcmRlcnMgcG9zaXRpb25zICh0b3AsIHJpZ2h0LCAuLi4pXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMpIHtcclxuICAgIHZhciBwb3NpdGlvbnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb25zW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHNpemUsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVzWydib3JkZXItJyArIHBvc2l0aW9uICsgJy13aWR0aCddO1xyXG4gICAgICAgIHJldHVybiBzaXplICsgdG9GbG9hdCh2YWx1ZSk7XHJcbiAgICB9LCAwKTtcclxufVxyXG4vKipcclxuICogRXh0cmFjdHMgcGFkZGluZ3Mgc2l6ZXMgZnJvbSBwcm92aWRlZCBzdHlsZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBhZGRpbmdzIGJveC5cclxuICovXHJcbmZ1bmN0aW9uIGdldFBhZGRpbmdzKHN0eWxlcykge1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XHJcbiAgICB2YXIgcGFkZGluZ3MgPSB7fTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgcG9zaXRpb25zXzEgPSBwb3NpdGlvbnM7IF9pIDwgcG9zaXRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gcG9zaXRpb25zXzFbX2ldO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1sncGFkZGluZy0nICsgcG9zaXRpb25dO1xyXG4gICAgICAgIHBhZGRpbmdzW3Bvc2l0aW9uXSA9IHRvRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhZGRpbmdzO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHByb3ZpZGVkIFNWRyBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NWR0dyYXBoaWNzRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBjb250ZW50IHJlY3RhbmdsZSBvZiB3aGljaCBuZWVkc1xyXG4gKiAgICAgIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldFNWR0NvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgdmFyIGJib3ggPSB0YXJnZXQuZ2V0QkJveCgpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KDAsIDAsIGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBjb250ZW50IHJlY3RhbmdsZSBvZiBwcm92aWRlZCBIVE1MRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCBmb3Igd2hpY2ggdG8gY2FsY3VsYXRlIHRoZSBjb250ZW50IHJlY3RhbmdsZS5cclxuICogQHJldHVybnMge0RPTVJlY3RJbml0fVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRDb250ZW50UmVjdCh0YXJnZXQpIHtcclxuICAgIC8vIENsaWVudCB3aWR0aCAmIGhlaWdodCBwcm9wZXJ0aWVzIGNhbid0IGJlXHJcbiAgICAvLyB1c2VkIGV4Y2x1c2l2ZWx5IGFzIHRoZXkgcHJvdmlkZSByb3VuZGVkIHZhbHVlcy5cclxuICAgIHZhciBjbGllbnRXaWR0aCA9IHRhcmdldC5jbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcclxuICAgIC8vIEJ5IHRoaXMgY29uZGl0aW9uIHdlIGNhbiBjYXRjaCBhbGwgbm9uLXJlcGxhY2VkIGlubGluZSwgaGlkZGVuIGFuZFxyXG4gICAgLy8gZGV0YWNoZWQgZWxlbWVudHMuIFRob3VnaCBlbGVtZW50cyB3aXRoIHdpZHRoICYgaGVpZ2h0IHByb3BlcnRpZXMgbGVzc1xyXG4gICAgLy8gdGhhbiAwLjUgd2lsbCBiZSBkaXNjYXJkZWQgYXMgd2VsbC5cclxuICAgIC8vXHJcbiAgICAvLyBXaXRob3V0IGl0IHdlIHdvdWxkIG5lZWQgdG8gaW1wbGVtZW50IHNlcGFyYXRlIG1ldGhvZHMgZm9yIGVhY2ggb2ZcclxuICAgIC8vIHRob3NlIGNhc2VzIGFuZCBpdCdzIG5vdCBwb3NzaWJsZSB0byBwZXJmb3JtIGEgcHJlY2lzZSBhbmQgcGVyZm9ybWFuY2VcclxuICAgIC8vIGVmZmVjdGl2ZSB0ZXN0IGZvciBoaWRkZW4gZWxlbWVudHMuIEUuZy4gZXZlbiBqUXVlcnkncyAnOnZpc2libGUnIGZpbHRlclxyXG4gICAgLy8gZ2l2ZXMgd3JvbmcgcmVzdWx0cyBmb3IgZWxlbWVudHMgd2l0aCB3aWR0aCAmIGhlaWdodCBsZXNzIHRoYW4gMC41LlxyXG4gICAgaWYgKCFjbGllbnRXaWR0aCAmJiAhY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgcmV0dXJuIGVtcHR5UmVjdDtcclxuICAgIH1cclxuICAgIHZhciBzdHlsZXMgPSBnZXRXaW5kb3dPZih0YXJnZXQpLmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcclxuICAgIHZhciBwYWRkaW5ncyA9IGdldFBhZGRpbmdzKHN0eWxlcyk7XHJcbiAgICB2YXIgaG9yaXpQYWQgPSBwYWRkaW5ncy5sZWZ0ICsgcGFkZGluZ3MucmlnaHQ7XHJcbiAgICB2YXIgdmVydFBhZCA9IHBhZGRpbmdzLnRvcCArIHBhZGRpbmdzLmJvdHRvbTtcclxuICAgIC8vIENvbXB1dGVkIHN0eWxlcyBvZiB3aWR0aCAmIGhlaWdodCBhcmUgYmVpbmcgdXNlZCBiZWNhdXNlIHRoZXkgYXJlIHRoZVxyXG4gICAgLy8gb25seSBkaW1lbnNpb25zIGF2YWlsYWJsZSB0byBKUyB0aGF0IGNvbnRhaW4gbm9uLXJvdW5kZWQgdmFsdWVzLiBJdCBjb3VsZFxyXG4gICAgLy8gYmUgcG9zc2libGUgdG8gdXRpbGl6ZSB0aGUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlmIG9ubHkgaXQncyBkYXRhIHdhc24ndFxyXG4gICAgLy8gYWZmZWN0ZWQgYnkgQ1NTIHRyYW5zZm9ybWF0aW9ucyBsZXQgYWxvbmUgcGFkZGluZ3MsIGJvcmRlcnMgYW5kIHNjcm9sbCBiYXJzLlxyXG4gICAgdmFyIHdpZHRoID0gdG9GbG9hdChzdHlsZXMud2lkdGgpLCBoZWlnaHQgPSB0b0Zsb2F0KHN0eWxlcy5oZWlnaHQpO1xyXG4gICAgLy8gV2lkdGggJiBoZWlnaHQgaW5jbHVkZSBwYWRkaW5ncyBhbmQgYm9yZGVycyB3aGVuIHRoZSAnYm9yZGVyLWJveCcgYm94XHJcbiAgICAvLyBtb2RlbCBpcyBhcHBsaWVkIChleGNlcHQgZm9yIElFKS5cclxuICAgIGlmIChzdHlsZXMuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcclxuICAgICAgICAvLyBGb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgcmVxdWlyZWQgdG8gaGFuZGxlIEludGVybmV0IEV4cGxvcmVyIHdoaWNoXHJcbiAgICAgICAgLy8gZG9lc24ndCBpbmNsdWRlIHBhZGRpbmdzIGFuZCBib3JkZXJzIHRvIGNvbXB1dGVkIENTUyBkaW1lbnNpb25zLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgY2FuIHNheSB0aGF0IGlmIENTUyBkaW1lbnNpb25zICsgcGFkZGluZ3MgYXJlIGVxdWFsIHRvIHRoZSBcImNsaWVudFwiXHJcbiAgICAgICAgLy8gcHJvcGVydGllcyB0aGVuIGl0J3MgZWl0aGVyIElFLCBhbmQgdGh1cyB3ZSBkb24ndCBuZWVkIHRvIHN1YnRyYWN0XHJcbiAgICAgICAgLy8gYW55dGhpbmcsIG9yIGFuIGVsZW1lbnQgbWVyZWx5IGRvZXNuJ3QgaGF2ZSBwYWRkaW5ncy9ib3JkZXJzIHN0eWxlcy5cclxuICAgICAgICBpZiAoTWF0aC5yb3VuZCh3aWR0aCArIGhvcml6UGFkKSAhPT0gY2xpZW50V2lkdGgpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAnbGVmdCcsICdyaWdodCcpICsgaG9yaXpQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpICE9PSBjbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3RvcCcsICdib3R0b20nKSArIHZlcnRQYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRm9sbG93aW5nIHN0ZXBzIGNhbid0IGJlIGFwcGxpZWQgdG8gdGhlIGRvY3VtZW50J3Mgcm9vdCBlbGVtZW50IGFzIGl0c1xyXG4gICAgLy8gY2xpZW50W1dpZHRoL0hlaWdodF0gcHJvcGVydGllcyByZXByZXNlbnQgdmlld3BvcnQgYXJlYSBvZiB0aGUgd2luZG93LlxyXG4gICAgLy8gQmVzaWRlcywgaXQncyBhcyB3ZWxsIG5vdCBuZWNlc3NhcnkgYXMgdGhlIDxodG1sPiBpdHNlbGYgbmVpdGhlciBoYXNcclxuICAgIC8vIHJlbmRlcmVkIHNjcm9sbCBiYXJzIG5vciBpdCBjYW4gYmUgY2xpcHBlZC5cclxuICAgIGlmICghaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSkge1xyXG4gICAgICAgIC8vIEluIHNvbWUgYnJvd3NlcnMgKG9ubHkgaW4gRmlyZWZveCwgYWN0dWFsbHkpIENTUyB3aWR0aCAmIGhlaWdodFxyXG4gICAgICAgIC8vIGluY2x1ZGUgc2Nyb2xsIGJhcnMgc2l6ZSB3aGljaCBjYW4gYmUgcmVtb3ZlZCBhdCB0aGlzIHN0ZXAgYXMgc2Nyb2xsXHJcbiAgICAgICAgLy8gYmFycyBhcmUgdGhlIG9ubHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHJvdW5kZWQgZGltZW5zaW9ucyArIHBhZGRpbmdzXHJcbiAgICAgICAgLy8gYW5kIFwiY2xpZW50XCIgcHJvcGVydGllcywgdGhvdWdoIHRoYXQgaXMgbm90IGFsd2F5cyB0cnVlIGluIENocm9tZS5cclxuICAgICAgICB2YXIgdmVydFNjcm9sbGJhciA9IE1hdGgucm91bmQod2lkdGggKyBob3JpelBhZCkgLSBjbGllbnRXaWR0aDtcclxuICAgICAgICB2YXIgaG9yaXpTY3JvbGxiYXIgPSBNYXRoLnJvdW5kKGhlaWdodCArIHZlcnRQYWQpIC0gY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vIENocm9tZSBoYXMgYSByYXRoZXIgd2VpcmQgcm91bmRpbmcgb2YgXCJjbGllbnRcIiBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIC8vIEUuZy4gZm9yIGFuIGVsZW1lbnQgd2l0aCBjb250ZW50IHdpZHRoIG9mIDMxNC4ycHggaXQgc29tZXRpbWVzIGdpdmVzXHJcbiAgICAgICAgLy8gdGhlIGNsaWVudCB3aWR0aCBvZiAzMTVweCBhbmQgZm9yIHRoZSB3aWR0aCBvZiAzMTQuN3B4IGl0IG1heSBnaXZlXHJcbiAgICAgICAgLy8gMzE0cHguIEFuZCBpdCBkb2Vzbid0IGhhcHBlbiBhbGwgdGhlIHRpbWUuIFNvIGp1c3QgaWdub3JlIHRoaXMgZGVsdGFcclxuICAgICAgICAvLyBhcyBhIG5vbi1yZWxldmFudC5cclxuICAgICAgICBpZiAoTWF0aC5hYnModmVydFNjcm9sbGJhcikgIT09IDEpIHtcclxuICAgICAgICAgICAgd2lkdGggLT0gdmVydFNjcm9sbGJhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGhvcml6U2Nyb2xsYmFyKSAhPT0gMSkge1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gaG9yaXpTY3JvbGxiYXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNyZWF0ZVJlY3RJbml0KHBhZGRpbmdzLmxlZnQsIHBhZGRpbmdzLnRvcCwgd2lkdGgsIGhlaWdodCk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIHByb3ZpZGVkIGVsZW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgdGhlIFNWR0dyYXBoaWNzRWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxudmFyIGlzU1ZHR3JhcGhpY3NFbGVtZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNvbWUgYnJvd3NlcnMsIG5hbWVseSBJRSBhbmQgRWRnZSwgZG9uJ3QgaGF2ZSB0aGUgU1ZHR3JhcGhpY3NFbGVtZW50XHJcbiAgICAvLyBpbnRlcmZhY2UuXHJcbiAgICBpZiAodHlwZW9mIFNWR0dyYXBoaWNzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgZ2V0V2luZG93T2YodGFyZ2V0KS5TVkdHcmFwaGljc0VsZW1lbnQ7IH07XHJcbiAgICB9XHJcbiAgICAvLyBJZiBpdCdzIHNvLCB0aGVuIGNoZWNrIHRoYXQgZWxlbWVudCBpcyBhdCBsZWFzdCBhbiBpbnN0YW5jZSBvZiB0aGVcclxuICAgIC8vIFNWR0VsZW1lbnQgYW5kIHRoYXQgaXQgaGFzIHRoZSBcImdldEJCb3hcIiBtZXRob2QuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtcGFyZW5zXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gKHRhcmdldCBpbnN0YW5jZW9mIGdldFdpbmRvd09mKHRhcmdldCkuU1ZHRWxlbWVudCAmJlxyXG4gICAgICAgIHR5cGVvZiB0YXJnZXQuZ2V0QkJveCA9PT0gJ2Z1bmN0aW9uJyk7IH07XHJcbn0pKCk7XHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBwcm92aWRlZCBlbGVtZW50IGlzIGEgZG9jdW1lbnQgZWxlbWVudCAoPGh0bWw+KS5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRvIGJlIGNoZWNrZWQuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNEb2N1bWVudEVsZW1lbnQodGFyZ2V0KSB7XHJcbiAgICByZXR1cm4gdGFyZ2V0ID09PSBnZXRXaW5kb3dPZih0YXJnZXQpLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG4vKipcclxuICogQ2FsY3VsYXRlcyBhbiBhcHByb3ByaWF0ZSBjb250ZW50IHJlY3RhbmdsZSBmb3IgcHJvdmlkZWQgaHRtbCBvciBzdmcgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IGNvbnRlbnQgcmVjdGFuZ2xlIG9mIHdoaWNoIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGdldENvbnRlbnRSZWN0KHRhcmdldCkge1xyXG4gICAgaWYgKCFpc0Jyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4gZW1wdHlSZWN0O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzU1ZHR3JhcGhpY3NFbGVtZW50KHRhcmdldCkpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U1ZHQ29udGVudFJlY3QodGFyZ2V0KTtcclxuICAgIH1cclxuICAgIHJldHVybiBnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0KHRhcmdldCk7XHJcbn1cclxuLyoqXHJcbiAqIENyZWF0ZXMgcmVjdGFuZ2xlIHdpdGggYW4gaW50ZXJmYWNlIG9mIHRoZSBET01SZWN0UmVhZE9ubHkuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkb21yZWN0cmVhZG9ubHlcclxuICpcclxuICogQHBhcmFtIHtET01SZWN0SW5pdH0gcmVjdEluaXQgLSBPYmplY3Qgd2l0aCByZWN0YW5nbGUncyB4L3kgY29vcmRpbmF0ZXMgYW5kIGRpbWVuc2lvbnMuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0UmVhZE9ubHl9XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSZWFkT25seVJlY3QoX2EpIHtcclxuICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcclxuICAgIC8vIElmIERPTVJlY3RSZWFkT25seSBpcyBhdmFpbGFibGUgdXNlIGl0IGFzIGEgcHJvdG90eXBlIGZvciB0aGUgcmVjdGFuZ2xlLlxyXG4gICAgdmFyIENvbnN0ciA9IHR5cGVvZiBET01SZWN0UmVhZE9ubHkgIT09ICd1bmRlZmluZWQnID8gRE9NUmVjdFJlYWRPbmx5IDogT2JqZWN0O1xyXG4gICAgdmFyIHJlY3QgPSBPYmplY3QuY3JlYXRlKENvbnN0ci5wcm90b3R5cGUpO1xyXG4gICAgLy8gUmVjdGFuZ2xlJ3MgcHJvcGVydGllcyBhcmUgbm90IHdyaXRhYmxlIGFuZCBub24tZW51bWVyYWJsZS5cclxuICAgIGRlZmluZUNvbmZpZ3VyYWJsZShyZWN0LCB7XHJcbiAgICAgICAgeDogeCwgeTogeSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICB0b3A6IHksXHJcbiAgICAgICAgcmlnaHQ6IHggKyB3aWR0aCxcclxuICAgICAgICBib3R0b206IGhlaWdodCArIHksXHJcbiAgICAgICAgbGVmdDogeFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVjdDtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBET01SZWN0SW5pdCBvYmplY3QgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGRpbWVuc2lvbnMgYW5kIHRoZSB4L3kgY29vcmRpbmF0ZXMuXHJcbiAqIFNwZWM6IGh0dHBzOi8vZHJhZnRzLmZ4dGYub3JnL2dlb21ldHJ5LyNkaWN0ZGVmLWRvbXJlY3Rpbml0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gWCBjb29yZGluYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0geSAtIFkgY29vcmRpbmF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIC0gUmVjdGFuZ2xlJ3Mgd2lkdGguXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBSZWN0YW5nbGUncyBoZWlnaHQuXHJcbiAqIEByZXR1cm5zIHtET01SZWN0SW5pdH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlY3RJbml0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcclxufVxuXG4vKipcclxuICogQ2xhc3MgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgY29tcHV0YXRpb25zIG9mIHRoZSBjb250ZW50IHJlY3RhbmdsZSBvZlxyXG4gKiBwcm92aWRlZCBET00gZWxlbWVudCBhbmQgZm9yIGtlZXBpbmcgdHJhY2sgb2YgaXQncyBjaGFuZ2VzLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmF0aW9uLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQnJvYWRjYXN0ZWQgd2lkdGggb2YgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYnJvYWRjYXN0V2lkdGggPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEJyb2FkY2FzdGVkIGhlaWdodCBvZiBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSAwO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtET01SZWN0SW5pdH1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IGNyZWF0ZVJlY3RJbml0KDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGNvbnRlbnQgcmVjdGFuZ2xlIGFuZCB0ZWxscyB3aGV0aGVyIGl0J3Mgd2lkdGggb3IgaGVpZ2h0IHByb3BlcnRpZXNcclxuICAgICAqIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBicm9hZGNhc3QuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5pc0FjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IGdldENvbnRlbnRSZWN0KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0XyA9IHJlY3Q7XHJcbiAgICAgICAgcmV0dXJuIChyZWN0LndpZHRoICE9PSB0aGlzLmJyb2FkY2FzdFdpZHRoIHx8XHJcbiAgICAgICAgICAgIHJlY3QuaGVpZ2h0ICE9PSB0aGlzLmJyb2FkY2FzdEhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzICdicm9hZGNhc3RXaWR0aCcgYW5kICdicm9hZGNhc3RIZWlnaHQnIHByb3BlcnRpZXMgd2l0aCBhIGRhdGFcclxuICAgICAqIGZyb20gdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydGllcyBvZiB0aGUgbGFzdCBvYnNlcnZlZCBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7RE9NUmVjdEluaXR9IExhc3Qgb2JzZXJ2ZWQgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmF0aW9uLnByb3RvdHlwZS5icm9hZGNhc3RSZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5jb250ZW50UmVjdF87XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RXaWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICAgICAgdGhpcy5icm9hZGNhc3RIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICByZXR1cm4gcmVjdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2YXRpb247XHJcbn0oKSk7XG5cbnZhciBSZXNpemVPYnNlcnZlckVudHJ5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyRW50cnkuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgLSBFbGVtZW50IHRoYXQgaXMgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgKiBAcGFyYW0ge0RPTVJlY3RJbml0fSByZWN0SW5pdCAtIERhdGEgb2YgdGhlIGVsZW1lbnQncyBjb250ZW50IHJlY3RhbmdsZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJFbnRyeSh0YXJnZXQsIHJlY3RJbml0KSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRSZWN0ID0gY3JlYXRlUmVhZE9ubHlSZWN0KHJlY3RJbml0KTtcclxuICAgICAgICAvLyBBY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmljYXRpb24gZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB3cml0YWJsZVxyXG4gICAgICAgIC8vIGFuZCBhcmUgYWxzbyBub3QgZW51bWVyYWJsZSBpbiB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gUHJvcGVydHkgYWNjZXNzb3JzIGFyZSBub3QgYmVpbmcgdXNlZCBhcyB0aGV5J2QgcmVxdWlyZSB0byBkZWZpbmUgYVxyXG4gICAgICAgIC8vIHByaXZhdGUgV2Vha01hcCBzdG9yYWdlIHdoaWNoIG1heSBjYXVzZSBtZW1vcnkgbGVha3MgaW4gYnJvd3NlcnMgdGhhdFxyXG4gICAgICAgIC8vIGRvbid0IHN1cHBvcnQgdGhpcyB0eXBlIG9mIGNvbGxlY3Rpb25zLlxyXG4gICAgICAgIGRlZmluZUNvbmZpZ3VyYWJsZSh0aGlzLCB7IHRhcmdldDogdGFyZ2V0LCBjb250ZW50UmVjdDogY29udGVudFJlY3QgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJFbnRyeTtcclxufSgpKTtcblxudmFyIFJlc2l6ZU9ic2VydmVyU1BJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWRcclxuICAgICAqICAgICAgd2hlbiBvbmUgb2YgdGhlIG9ic2VydmVkIGVsZW1lbnRzIGNoYW5nZXMgaXQncyBjb250ZW50IGRpbWVuc2lvbnMuXHJcbiAgICAgKiBAcGFyYW0ge1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlcn0gY29udHJvbGxlciAtIENvbnRyb2xsZXIgaW5zdGFuY2Ugd2hpY2hcclxuICAgICAqICAgICAgaXMgcmVzcG9uc2libGUgZm9yIHRoZSB1cGRhdGVzIG9mIG9ic2VydmVyLlxyXG4gICAgICogQHBhcmFtIHtSZXNpemVPYnNlcnZlcn0gY2FsbGJhY2tDdHggLSBSZWZlcmVuY2UgdG8gdGhlIHB1YmxpY1xyXG4gICAgICogICAgICBSZXNpemVPYnNlcnZlciBpbnN0YW5jZSB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTUEkoY2FsbGJhY2ssIGNvbnRyb2xsZXIsIGNhbGxiYWNrQ3R4KSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ29sbGVjdGlvbiBvZiByZXNpemUgb2JzZXJ2YXRpb25zIHRoYXQgaGF2ZSBkZXRlY3RlZCBjaGFuZ2VzIGluIGRpbWVuc2lvbnNcclxuICAgICAgICAgKiBvZiBlbGVtZW50cy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtBcnJheTxSZXNpemVPYnNlcnZhdGlvbj59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVnaXN0cnkgb2YgdGhlIFJlc2l6ZU9ic2VydmF0aW9uIGluc3RhbmNlcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBwcml2YXRlIHtNYXA8RWxlbWVudCwgUmVzaXplT2JzZXJ2YXRpb24+fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMub2JzZXJ2YXRpb25zXyA9IG5ldyBNYXBTaGltKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2FsbGJhY2sgcHJvdmlkZWQgYXMgcGFyYW1ldGVyIDEgaXMgbm90IGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXyA9IGNvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja0N0eF8gPSBjYWxsYmFja0N0eDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIG9ic2VydmluZyBwcm92aWRlZCBlbGVtZW50LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IC0gRWxlbWVudCB0byBiZSBvYnNlcnZlZC5cclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBhbHJlYWR5IGJlaW5nIG9ic2VydmVkLlxyXG4gICAgICAgIGlmIChvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuc2V0KHRhcmdldCwgbmV3IFJlc2l6ZU9ic2VydmF0aW9uKHRhcmdldCkpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlcl8uYWRkT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICAgICAgLy8gRm9yY2UgdGhlIHVwZGF0ZSBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyXy5yZWZyZXNoKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wcyBvYnNlcnZpbmcgcHJvdmlkZWQgZWxlbWVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCAtIEVsZW1lbnQgdG8gc3RvcCBvYnNlcnZpbmcuXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgUmVzaXplT2JzZXJ2ZXJTUEkucHJvdG90eXBlLnVub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGN1cnJlbnQgZW52aXJvbm1lbnQgZG9lc24ndCBoYXZlIHRoZSBFbGVtZW50IGludGVyZmFjZS5cclxuICAgICAgICBpZiAodHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICEoRWxlbWVudCBpbnN0YW5jZW9mIE9iamVjdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBnZXRXaW5kb3dPZih0YXJnZXQpLkVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3BhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlIFwiRWxlbWVudFwiLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb2JzZXJ2YXRpb25zID0gdGhpcy5vYnNlcnZhdGlvbnNfO1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgZWxlbWVudCBpcyBub3QgYmVpbmcgb2JzZXJ2ZWQuXHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZhdGlvbnMuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKCFvYnNlcnZhdGlvbnMuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN0b3BzIG9ic2VydmluZyBhbGwgZWxlbWVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9ic2VydmF0aW9uc18uY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJfLnJlbW92ZU9ic2VydmVyKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQ29sbGVjdHMgb2JzZXJ2YXRpb24gaW5zdGFuY2VzIHRoZSBhc3NvY2lhdGVkIGVsZW1lbnQgb2Ygd2hpY2ggaGFzIGNoYW5nZWRcclxuICAgICAqIGl0J3MgY29udGVudCByZWN0YW5nbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5nYXRoZXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvbnNfLmZvckVhY2goZnVuY3Rpb24gKG9ic2VydmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChvYnNlcnZhdGlvbi5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnB1c2gob2JzZXJ2YXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VzIGluaXRpYWwgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhIGxpc3Qgb2YgUmVzaXplT2JzZXJ2ZXJFbnRyeVxyXG4gICAgICogaW5zdGFuY2VzIGNvbGxlY3RlZCBmcm9tIGFjdGl2ZSByZXNpemUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuYnJvYWRjYXN0QWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgb2JzZXJ2ZXIgZG9lc24ndCBoYXZlIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY2FsbGJhY2tDdHhfO1xyXG4gICAgICAgIC8vIENyZWF0ZSBSZXNpemVPYnNlcnZlckVudHJ5IGluc3RhbmNlIGZvciBldmVyeSBhY3RpdmUgb2JzZXJ2YXRpb24uXHJcbiAgICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLmFjdGl2ZU9ic2VydmF0aW9uc18ubWFwKGZ1bmN0aW9uIChvYnNlcnZhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc2l6ZU9ic2VydmVyRW50cnkob2JzZXJ2YXRpb24udGFyZ2V0LCBvYnNlcnZhdGlvbi5icm9hZGNhc3RSZWN0KCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tfLmNhbGwoY3R4LCBlbnRyaWVzLCBjdHgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBY3RpdmUoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyB0aGUgY29sbGVjdGlvbiBvZiBhY3RpdmUgb2JzZXJ2YXRpb25zLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICBSZXNpemVPYnNlcnZlclNQSS5wcm90b3R5cGUuY2xlYXJBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVPYnNlcnZhdGlvbnNfLnNwbGljZSgwKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFRlbGxzIHdoZXRoZXIgb2JzZXJ2ZXIgaGFzIGFjdGl2ZSBvYnNlcnZhdGlvbnMuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIFJlc2l6ZU9ic2VydmVyU1BJLnByb3RvdHlwZS5oYXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT2JzZXJ2YXRpb25zXy5sZW5ndGggPiAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlclNQSTtcclxufSgpKTtcblxuLy8gUmVnaXN0cnkgb2YgaW50ZXJuYWwgb2JzZXJ2ZXJzLiBJZiBXZWFrTWFwIGlzIG5vdCBhdmFpbGFibGUgdXNlIGN1cnJlbnQgc2hpbVxyXG4vLyBmb3IgdGhlIE1hcCBjb2xsZWN0aW9uIGFzIGl0IGhhcyBhbGwgcmVxdWlyZWQgbWV0aG9kcyBhbmQgYmVjYXVzZSBXZWFrTWFwXHJcbi8vIGNhbid0IGJlIGZ1bGx5IHBvbHlmaWxsZWQgYW55d2F5LlxyXG52YXIgb2JzZXJ2ZXJzID0gdHlwZW9mIFdlYWtNYXAgIT09ICd1bmRlZmluZWQnID8gbmV3IFdlYWtNYXAoKSA6IG5ldyBNYXBTaGltKCk7XHJcbi8qKlxyXG4gKiBSZXNpemVPYnNlcnZlciBBUEkuIEVuY2Fwc3VsYXRlcyB0aGUgUmVzaXplT2JzZXJ2ZXIgU1BJIGltcGxlbWVudGF0aW9uXHJcbiAqIGV4cG9zaW5nIG9ubHkgdGhvc2UgbWV0aG9kcyBhbmQgcHJvcGVydGllcyB0aGF0IGFyZSBkZWZpbmVkIGluIHRoZSBzcGVjLlxyXG4gKi9cclxudmFyIFJlc2l6ZU9ic2VydmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7UmVzaXplT2JzZXJ2ZXJDYWxsYmFja30gY2FsbGJhY2sgLSBDYWxsYmFjayB0aGF0IGlzIGludm9rZWQgd2hlblxyXG4gICAgICogICAgICBkaW1lbnNpb25zIG9mIHRoZSBvYnNlcnZlZCBlbGVtZW50cyBjaGFuZ2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlc2l6ZU9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCcxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyU1BJKGNhbGxiYWNrLCBjb250cm9sbGVyLCB0aGlzKTtcclxuICAgICAgICBvYnNlcnZlcnMuc2V0KHRoaXMsIG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlcjtcclxufSgpKTtcclxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzIG9mIFJlc2l6ZU9ic2VydmVyLlxyXG5bXHJcbiAgICAnb2JzZXJ2ZScsXHJcbiAgICAndW5vYnNlcnZlJyxcclxuICAgICdkaXNjb25uZWN0J1xyXG5dLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xyXG4gICAgUmVzaXplT2JzZXJ2ZXIucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHJldHVybiAoX2EgPSBvYnNlcnZlcnMuZ2V0KHRoaXMpKVttZXRob2RdLmFwcGx5KF9hLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufSk7XG5cbnZhciBpbmRleCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBFeHBvcnQgZXhpc3RpbmcgaW1wbGVtZW50YXRpb24gaWYgYXZhaWxhYmxlLlxyXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwkMS5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gZ2xvYmFsJDEuUmVzaXplT2JzZXJ2ZXI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXI7XHJcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldEVsZW1lbnQodGFyZ2V0LCBkZWZhdWx0RWxlbWVudCkge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybiBkZWZhdWx0RWxlbWVudDtcbiAgfVxuXG4gIHZhciB0YXJnZXRFbGVtZW50O1xuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGFyZ2V0RWxlbWVudCA9IHRhcmdldCgpO1xuICB9IGVsc2UgaWYgKCdjdXJyZW50JyBpbiB0YXJnZXQpIHtcbiAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0LmN1cnJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0RWxlbWVudCA9IHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRFbGVtZW50O1xufSIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdXNlUGVyc2lzdEZuKGZuKSB7XG4gIHZhciBmblJlZiA9IHVzZVJlZihmbik7XG4gIGZuUmVmLmN1cnJlbnQgPSBmbjtcbiAgdmFyIHBlcnNpc3RGbiA9IHVzZVJlZigpO1xuXG4gIGlmICghcGVyc2lzdEZuLmN1cnJlbnQpIHtcbiAgICBwZXJzaXN0Rm4uY3VycmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gW107XG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuUmVmLmN1cnJlbnQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBwZXJzaXN0Rm4uY3VycmVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUGVyc2lzdEZuOyIsImV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlUGVyc2lzdEZuIGZyb20gJy4uL3VzZVBlcnNpc3RGbic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG52YXIgdXNlVW5tb3VudCA9IGZ1bmN0aW9uIHVzZVVubW91bnQoZm4pIHtcbiAgdmFyIGZuUGVyc2lzdCA9IHVzZVBlcnNpc3RGbihmbik7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKGZuUGVyc2lzdCkpIHtcbiAgICAgICAgZm5QZXJzaXN0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVW5tb3VudDsiLCJ2YXIgX19yZWFkID0gdGhpcyAmJiB0aGlzLl9fcmVhZCB8fCBmdW5jdGlvbiAobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLFxuICAgICAgcixcbiAgICAgIGFyID0gW10sXG4gICAgICBlO1xuXG4gIHRyeSB7XG4gICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVW5tb3VudCBmcm9tICcuLi91c2VVbm1vdW50JztcblxudmFyIHVzZVJhZlN0YXRlID0gZnVuY3Rpb24gdXNlUmFmU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBmcmFtZSA9IHVzZVJlZigwKTtcblxuICB2YXIgX2EgPSBfX3JlYWQodXNlU3RhdGUoaW5pdGlhbFN0YXRlKSwgMiksXG4gICAgICBzdGF0ZSA9IF9hWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfYVsxXTtcblxuICB2YXIgc2V0UmFmU3RhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZS5jdXJyZW50KTtcbiAgICBmcmFtZS5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFN0YXRlKHZhbHVlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuICB1c2VVbm1vdW50KGZ1bmN0aW9uICgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZS5jdXJyZW50KTtcbiAgfSk7XG4gIHJldHVybiBbc3RhdGUsIHNldFJhZlN0YXRlXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJhZlN0YXRlOyIsInZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzaXplT2JzZXJ2ZXIgZnJvbSAncmVzaXplLW9ic2VydmVyLXBvbHlmaWxsJztcbmltcG9ydCB7IGdldFRhcmdldEVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9kb20nO1xuaW1wb3J0IHVzZVJhZlN0YXRlIGZyb20gJy4vdXNlUmFmU3RhdGUnO1xuXG5mdW5jdGlvbiB1c2VTaXplKHRhcmdldCkge1xuICB2YXIgX2EgPSBfX3JlYWQodXNlUmFmU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IGdldFRhcmdldEVsZW1lbnQodGFyZ2V0KTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IChlbCB8fCB7fSkuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IChlbCB8fCB7fSkuY2xpZW50SGVpZ2h0XG4gICAgfTtcbiAgfSksIDIpLFxuICAgICAgc3RhdGUgPSBfYVswXSxcbiAgICAgIHNldFN0YXRlID0gX2FbMV07XG5cbiAgdXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSBnZXRUYXJnZXRFbGVtZW50KHRhcmdldCk7XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge307XG4gICAgfVxuXG4gICAgdmFyIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICB3aWR0aDogZW50cnkudGFyZ2V0LmNsaWVudFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogZW50cnkudGFyZ2V0LmNsaWVudEhlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfTtcbiAgfSwgW3RhcmdldF0pO1xuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNpemU7IiwidmFyIF9fYXNzaWduID0gdGhpcyAmJiB0aGlzLl9fYXNzaWduIHx8IGZ1bmN0aW9uICgpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdoeURpZFlvdVVwZGF0ZShjb21wb25lbnROYW1lLCBwcm9wcykge1xuICB2YXIgcHJldlByb3BzID0gdXNlUmVmKHt9KTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJldlByb3BzLmN1cnJlbnQpIHtcbiAgICAgIHZhciBhbGxLZXlzID0gT2JqZWN0LmtleXMoX19hc3NpZ24oX19hc3NpZ24oe30sIHByZXZQcm9wcy5jdXJyZW50KSwgcHJvcHMpKTtcbiAgICAgIHZhciBjaGFuZ2VkUHJvcHNfMSA9IHt9O1xuICAgICAgYWxsS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5jdXJyZW50W2tleV0gIT09IHByb3BzW2tleV0pIHtcbiAgICAgICAgICBjaGFuZ2VkUHJvcHNfMVtrZXldID0ge1xuICAgICAgICAgICAgZnJvbTogcHJldlByb3BzLmN1cnJlbnRba2V5XSxcbiAgICAgICAgICAgIHRvOiBwcm9wc1trZXldXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhjaGFuZ2VkUHJvcHNfMSkubGVuZ3RoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbd2h5LWRpZC15b3UtdXBkYXRlXScsIGNvbXBvbmVudE5hbWUsIGNoYW5nZWRQcm9wc18xKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2UHJvcHMuY3VycmVudCA9IHByb3BzO1xuICB9KTtcbn0iLCJ2YXIgX19yZWFkID0gdGhpcyAmJiB0aGlzLl9fcmVhZCB8fCBmdW5jdGlvbiAobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLFxuICAgICAgcixcbiAgICAgIGFyID0gW10sXG4gICAgICBlO1xuXG4gIHRyeSB7XG4gICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxudmFyIF9fc3ByZWFkID0gdGhpcyAmJiB0aGlzLl9fc3ByZWFkIHx8IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG5pbXBvcnQgdXNlUmVxdWVzdCwgeyBVc2VSZXF1ZXN0UHJvdmlkZXIgfSBmcm9tICdAYWhvb2tzanMvdXNlLXJlcXVlc3QnO1xuaW1wb3J0IHVzZUNvbnRyb2xsYWJsZVZhbHVlIGZyb20gJy4vdXNlQ29udHJvbGxhYmxlVmFsdWUnO1xuaW1wb3J0IHVzZUR5bmFtaWNMaXN0IGZyb20gJy4vdXNlRHluYW1pY0xpc3QnO1xuaW1wb3J0IHVzZUV2ZW50RW1pdHRlciBmcm9tICcuL3VzZUV2ZW50RW1pdHRlcic7XG5pbXBvcnQgdXNlVmlydHVhbExpc3QgZnJvbSAnLi91c2VWaXJ0dWFsTGlzdCc7XG5pbXBvcnQgeyBjb25maWdSZXNwb25zaXZlLCB1c2VSZXNwb25zaXZlIH0gZnJvbSAnLi91c2VSZXNwb25zaXZlJztcbmltcG9ydCB1c2VTaXplIGZyb20gJy4vdXNlU2l6ZSc7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSAnLi91c2VMb2NhbFN0b3JhZ2VTdGF0ZSc7XG5pbXBvcnQgdXNlU2Vzc2lvblN0b3JhZ2VTdGF0ZSBmcm9tICcuL3VzZVNlc3Npb25TdG9yYWdlU3RhdGUnO1xuaW1wb3J0IHVzZVVwZGF0ZUVmZmVjdCBmcm9tICcuL3VzZVVwZGF0ZUVmZmVjdCc7XG5pbXBvcnQgdXNlVXBkYXRlTGF5b3V0RWZmZWN0IGZyb20gJy4vdXNlVXBkYXRlTGF5b3V0RWZmZWN0JztcbmltcG9ydCB1c2VCb29sZWFuIGZyb20gJy4vdXNlQm9vbGVhbic7XG5pbXBvcnQgdXNlVG9nZ2xlIGZyb20gJy4vdXNlVG9nZ2xlJztcbmltcG9ydCB1c2VEb2N1bWVudFZpc2liaWxpdHkgZnJvbSAnLi91c2VEb2N1bWVudFZpc2liaWxpdHknO1xuaW1wb3J0IHVzZVNlbGVjdGlvbnMgZnJvbSAnLi91c2VTZWxlY3Rpb25zJztcbmltcG9ydCB1c2VUaHJvdHRsZSBmcm9tICcuL3VzZVRocm90dGxlJztcbmltcG9ydCB1c2VUaHJvdHRsZUZuIGZyb20gJy4vdXNlVGhyb3R0bGVGbic7XG5pbXBvcnQgdXNlVGhyb3R0bGVFZmZlY3QgZnJvbSAnLi91c2VUaHJvdHRsZUVmZmVjdCc7XG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSAnLi91c2VEZWJvdW5jZSc7XG5pbXBvcnQgdXNlRGVib3VuY2VGbiBmcm9tICcuL3VzZURlYm91bmNlRm4nO1xuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJy4vdXNlUHJldmlvdXMnO1xuaW1wb3J0IHVzZU1vdXNlIGZyb20gJy4vdXNlTW91c2UnO1xuaW1wb3J0IHVzZVNjcm9sbCBmcm9tICcuL3VzZVNjcm9sbCc7XG5pbXBvcnQgdXNlQ2xpY2tBd2F5IGZyb20gJy4vdXNlQ2xpY2tBd2F5JztcbmltcG9ydCB1c2VGdWxsc2NyZWVuIGZyb20gJy4vdXNlRnVsbHNjcmVlbic7XG5pbXBvcnQgdXNlSW5WaWV3cG9ydCBmcm9tICcuL3VzZUluVmlld3BvcnQnO1xuaW1wb3J0IHVzZUtleVByZXNzIGZyb20gJy4vdXNlS2V5UHJlc3MnO1xuaW1wb3J0IHVzZUV2ZW50TGlzdGVuZXIgZnJvbSAnLi91c2VFdmVudExpc3RlbmVyJztcbmltcG9ydCB1c2VIb3ZlciBmcm9tICcuL3VzZUhvdmVyJztcbmltcG9ydCB1c2VVbm1vdW50IGZyb20gJy4vdXNlVW5tb3VudCc7XG5pbXBvcnQgdXNlQW50ZFRhYmxlIGZyb20gJy4vdXNlQW50ZFRhYmxlJztcbmltcG9ydCB1c2VGdXNpb25UYWJsZSBmcm9tICcuL3VzZUZ1c2lvblRhYmxlJztcbmltcG9ydCB1c2VTZXQgZnJvbSAnLi91c2VTZXQnO1xuaW1wb3J0IHVzZVBlcnNpc3RGbiBmcm9tICcuL3VzZVBlcnNpc3RGbic7XG5pbXBvcnQgdXNlTWFwIGZyb20gJy4vdXNlTWFwJztcbmltcG9ydCB1c2VDcmVhdGlvbiBmcm9tICcuL3VzZUNyZWF0aW9uJztcbmltcG9ydCB1c2VEcm9wIGZyb20gJy4vdXNlRHJvcCc7XG5pbXBvcnQgdXNlRHJhZyBmcm9tICcuL3VzZURyYWcnO1xuaW1wb3J0IHVzZU1vdW50IGZyb20gJy4vdXNlTW91bnQnO1xuaW1wb3J0IHVzZVRleHRTZWxlY3Rpb24gZnJvbSAnLi91c2VUZXh0U2VsZWN0aW9uJztcbmltcG9ydCB1c2VDb3VudGVyIGZyb20gJy4vdXNlQ291bnRlcic7XG5pbXBvcnQgdXNlVXBkYXRlIGZyb20gJy4vdXNlVXBkYXRlJztcbmltcG9ydCB1c2VFdmVudFRhcmdldCBmcm9tICcuL3VzZUV2ZW50VGFyZ2V0JztcbmltcG9ydCB1c2VIaXN0b3J5VHJhdmVsIGZyb20gJy4vdXNlSGlzdG9yeVRyYXZlbCc7XG5pbXBvcnQgdXNlRGVib3VuY2VFZmZlY3QgZnJvbSAnLi91c2VEZWJvdW5jZUVmZmVjdCc7XG5pbXBvcnQgdXNlQ29va2llU3RhdGUgZnJvbSAnLi91c2VDb29raWVTdGF0ZSc7XG5pbXBvcnQgdXNlU2V0U3RhdGUgZnJvbSAnLi91c2VTZXRTdGF0ZSc7XG5pbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi91c2VJbnRlcnZhbCc7XG5pbXBvcnQgdXNlV2h5RGlkWW91VXBkYXRlIGZyb20gJy4vdXNlV2h5RGlkWW91VXBkYXRlJztcbmltcG9ydCB1c2VUaXRsZSBmcm9tICcuL3VzZVRpdGxlJztcbmltcG9ydCB1c2VOZXR3b3JrIGZyb20gJy4vdXNlTmV0d29yayc7XG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuL3VzZVRpbWVvdXQnO1xuaW1wb3J0IHVzZVJlYWN0aXZlIGZyb20gJy4vdXNlUmVhY3RpdmUnO1xuaW1wb3J0IHVzZUZhdmljb24gZnJvbSAnLi91c2VGYXZpY29uJztcbmltcG9ydCB1c2VDb3VudERvd24gZnJvbSAnLi91c2VDb3VudERvd24nO1xuaW1wb3J0IHVzZVdlYlNvY2tldCBmcm9tICcuL3VzZVdlYlNvY2tldCc7XG5pbXBvcnQgdXNlTG9ja0ZuIGZyb20gJy4vdXNlTG9ja0ZuJztcbmltcG9ydCB1c2VUcmFja2VkRWZmZWN0IGZyb20gJy4vdXNlVHJhY2tlZEVmZmVjdCc7XG5pbXBvcnQgdXNlVW5tb3VudGVkUmVmIGZyb20gJy4vdXNlVW5tb3VudGVkUmVmJztcbmltcG9ydCB1c2VFeHRlcm5hbCBmcm9tICcuL3VzZUV4dGVybmFsJztcbmltcG9ydCB1c2VTYWZlU3RhdGUgZnJvbSAnLi91c2VTYWZlU3RhdGUnO1xuXG52YXIgdXNlQ29udHJvbGxlZFZhbHVlID0gZnVuY3Rpb24gdXNlQ29udHJvbGxlZFZhbHVlKCkge1xuICB2YXIgYXJncyA9IFtdO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICB9XG5cbiAgY29uc29sZS53YXJuKCd1c2VDb250cm9sbGVkVmFsdWUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uIFBsZWFzZSB1c2UgdXNlQ29udHJvbGxhYmxlVmFsdWUgaW5zdGVhZC4nKTtcbiAgcmV0dXJuIHVzZUNvbnRyb2xsYWJsZVZhbHVlLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoYXJncykpO1xufTtcblxuZXhwb3J0IHsgdXNlQ29udHJvbGxlZFZhbHVlLCB1c2VDb250cm9sbGFibGVWYWx1ZSwgdXNlRHluYW1pY0xpc3QsIHVzZVZpcnR1YWxMaXN0LCB1c2VSZXNwb25zaXZlLCB1c2VFdmVudEVtaXR0ZXIsIHVzZUxvY2FsU3RvcmFnZVN0YXRlLCB1c2VTZXNzaW9uU3RvcmFnZVN0YXRlLCB1c2VTaXplLCBjb25maWdSZXNwb25zaXZlLCB1c2VVcGRhdGVFZmZlY3QsIHVzZVVwZGF0ZUxheW91dEVmZmVjdCwgdXNlQm9vbGVhbiwgdXNlVG9nZ2xlLCB1c2VEb2N1bWVudFZpc2liaWxpdHksIHVzZVNlbGVjdGlvbnMsIHVzZVRocm90dGxlLCB1c2VUaHJvdHRsZUZuLCB1c2VUaHJvdHRsZUVmZmVjdCwgdXNlRGVib3VuY2UsIHVzZURlYm91bmNlRm4sIHVzZURlYm91bmNlRWZmZWN0LCB1c2VQcmV2aW91cywgdXNlTW91c2UsIHVzZVNjcm9sbCwgdXNlQ2xpY2tBd2F5LCB1c2VGdWxsc2NyZWVuLCB1c2VJblZpZXdwb3J0LCB1c2VLZXlQcmVzcywgdXNlRXZlbnRMaXN0ZW5lciwgdXNlSG92ZXIsIHVzZVJlcXVlc3QsIFVzZVJlcXVlc3RQcm92aWRlciwgdXNlQW50ZFRhYmxlLCB1c2VVbm1vdW50LCB1c2VTZXQsIHVzZVBlcnNpc3RGbiwgdXNlTWFwLCB1c2VDcmVhdGlvbiwgdXNlRHJhZywgdXNlRHJvcCwgdXNlTW91bnQsIHVzZUNvdW50ZXIsIHVzZVVwZGF0ZSwgdXNlVGV4dFNlbGVjdGlvbiwgdXNlRXZlbnRUYXJnZXQsIHVzZUhpc3RvcnlUcmF2ZWwsIHVzZUZ1c2lvblRhYmxlLCB1c2VDb29raWVTdGF0ZSwgdXNlU2V0U3RhdGUsIHVzZUludGVydmFsLCB1c2VXaHlEaWRZb3VVcGRhdGUsIHVzZVRpdGxlLCB1c2VOZXR3b3JrLCB1c2VUaW1lb3V0LCB1c2VSZWFjdGl2ZSwgdXNlRmF2aWNvbiwgdXNlQ291bnREb3duLCB1c2VUcmFja2VkRWZmZWN0LCB1c2VXZWJTb2NrZXQsIHVzZUxvY2tGbiwgdXNlVW5tb3VudGVkUmVmLCB1c2VFeHRlcm5hbCwgdXNlU2FmZVN0YXRlIH07IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgdXNlTWFwQ2VudGVyID0gKG1hcDogQU1hcC5NYXApID0+IHtcbiAgICBjb25zdCBbbG5nTGF0LCBzZXRMbmdMYXRdID0gdXNlU3RhdGU8QU1hcC5MbmdMYXQ+KCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0TG5nTGF0KG1hcC5nZXRDZW50ZXIoKSk7XG4gICAgICAgIH07XG4gICAgICAgIG1hcC5vbihcIm1hcG1vdmVcIiwgaGFuZGxlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIG1hcC5vZmYoXCJtYXBtb3ZlXCIsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfSwgW21hcF0pO1xuICAgIHJldHVybiBsbmdMYXQ7XG59O1xuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJpbXBvcnQgeyBDaGlsZHJlbiwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5leHBvcnQgY29uc3QgQWxlcnQgPSAoeyBjbGFzc05hbWUsIGJvb3RzdHJhcFN0eWxlLCBjaGlsZHJlbiB9KSA9PiBDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAwID8gKGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoYGFsZXJ0IGFsZXJ0LSR7Ym9vdHN0cmFwU3R5bGV9YCwgY2xhc3NOYW1lKSB9LCBjaGlsZHJlbikpIDogbnVsbDtcclxuQWxlcnQuZGlzcGxheU5hbWUgPSBcIkFsZXJ0XCI7XHJcbmV4cG9ydCBjb25zdCBJY29uID0gKHsgaWNvbiwgY2xhc3NOYW1lID0gXCJcIiwgZmFsbGJhY2sgfSkgPT4ge1xyXG4gICAgaWYgKChpY29uID09PSBudWxsIHx8IGljb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGljb24udHlwZSkgPT09IFwiZ2x5cGhcIikge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcImdseXBoaWNvblwiLCBjbGFzc05hbWUsIGljb24uaWNvbkNsYXNzKSwgXCJhcmlhLWhpZGRlblwiOiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKChpY29uID09PSBudWxsIHx8IGljb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGljb24udHlwZSkgPT09IFwiaW1hZ2VcIikge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHNyYzogaWNvbi5pY29uVXJsLCBcImFyaWEtaGlkZGVuXCI6IHRydWUsIGFsdDogXCJcIiB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxsYmFjayB8fCBudWxsO1xyXG59O1xyXG5JY29uLmRpc3BsYXlOYW1lID0gXCJJY29uXCI7XHJcbiIsImV4cG9ydCBjb25zdCBleGVjdXRlQWN0aW9uID0gKGFjdGlvbikgPT4ge1xyXG4gICAgaWYgKGFjdGlvbiAmJiBhY3Rpb24uY2FuRXhlY3V0ZSAmJiAhYWN0aW9uLmlzRXhlY3V0aW5nKSB7XHJcbiAgICAgICAgYWN0aW9uLmV4ZWN1dGUoKTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGlzQXZhaWxhYmxlID0gKHByb3BlcnR5KSA9PiB7XHJcbiAgICByZXR1cm4gcHJvcGVydHkgJiYgcHJvcGVydHkuc3RhdHVzID09PSBcImF2YWlsYWJsZVwiIC8qIEF2YWlsYWJsZSAqLyAmJiBwcm9wZXJ0eS52YWx1ZTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHBhcnNlU3R5bGUgPSAoc3R5bGUgPSBcIlwiKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBzdHlsZS5zcGxpdChcIjtcIikucmVkdWNlKChzdHlsZU9iamVjdCwgbGluZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWlyID0gbGluZS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgIGlmIChwYWlyLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhaXJbMF0udHJpbSgpLnJlcGxhY2UoLygtLikvZywgbWF0Y2ggPT4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZU9iamVjdFtuYW1lXSA9IHBhaXJbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdHlsZU9iamVjdDtcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoXykge1xyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXRGb3IpID0+IHtcclxuICAgIGxldCB0aW1lb3V0ID0gbnVsbDtcclxuICAgIGNvbnN0IGRlYm91bmNlZCA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgaWYgKHRpbWVvdXQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYyguLi5hcmdzKSwgd2FpdEZvcik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGRlYm91bmNlZDtcclxufTtcclxuIiwiZXhwb3J0IHZhciBGb3JtYXR0ZXJUeXBlO1xyXG4oZnVuY3Rpb24gKEZvcm1hdHRlclR5cGUpIHtcclxuICAgIEZvcm1hdHRlclR5cGVbXCJOdW1iZXJcIl0gPSBcIm51bWJlclwiO1xyXG4gICAgRm9ybWF0dGVyVHlwZVtcIkRhdGVUaW1lXCJdID0gXCJkYXRldGltZVwiO1xyXG59KShGb3JtYXR0ZXJUeXBlIHx8IChGb3JtYXR0ZXJUeXBlID0ge30pKTtcclxuZXhwb3J0IGNsYXNzIEVkaXRhYmxlVmFsdWVCdWlsZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdGFibGVWYWx1ZSA9IHtcclxuICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZGlzcGxheVZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICBzdGF0dXM6IFwiYXZhaWxhYmxlXCIgLyogQXZhaWxhYmxlICovLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcclxuICAgICAgICAgICAgZm9ybWF0dGVyOiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGplc3QuZm4obmFtZSA9PiBgRm9ybWF0dGVkICR7bmFtZX1gKSxcclxuICAgICAgICAgICAgICAgIHBhcnNlOiBqZXN0LmZuKCksXHJcbiAgICAgICAgICAgICAgICB3aXRoQ29uZmlnOiBqZXN0LmZuKCgpID0+IG5ldyBFZGl0YWJsZVZhbHVlQnVpbGRlcigpLmJ1aWxkKCkuZm9ybWF0dGVyKSxcclxuICAgICAgICAgICAgICAgIGdldEZvcm1hdFBsYWNlaG9sZGVyOiBqZXN0LmZuKCksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBGb3JtYXR0ZXJUeXBlLkRhdGVUaW1lLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnOiB7fVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXRWYWxpZGF0b3I6IGplc3QuZm4oKSxcclxuICAgICAgICAgICAgc2V0VmFsdWU6IGplc3QuZm4oKHZhbHVlKSA9PiB0aGlzLndpdGhWYWx1ZSh2YWx1ZSkpLFxyXG4gICAgICAgICAgICBzZXRUZXh0VmFsdWU6IGplc3QuZm4oKSxcclxuICAgICAgICAgICAgc2V0Rm9ybWF0dGVyOiBqZXN0LmZuKClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgd2l0aFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0YWJsZVZhbHVlLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5lZGl0YWJsZVZhbHVlLmRpc3BsYXlWYWx1ZSA9IHRoaXMuZWRpdGFibGVWYWx1ZS5mb3JtYXR0ZXIuZm9ybWF0KHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHdpdGhGb3JtYXR0ZXIoZm9ybWF0dGVyKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0YWJsZVZhbHVlLmZvcm1hdHRlciA9IGZvcm1hdHRlcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGlzUmVhZE9ubHkoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0YWJsZVZhbHVlLnJlYWRPbmx5ID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGlzTG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLmVkaXRhYmxlVmFsdWUuc3RhdHVzID0gXCJsb2FkaW5nXCIgLyogTG9hZGluZyAqLztcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1JlYWRPbmx5KCk7XHJcbiAgICB9XHJcbiAgICBpc1VuYXZhaWxhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdGFibGVWYWx1ZS5zdGF0dXMgPSBcInVuYXZhaWxhYmxlXCIgLyogVW5hdmFpbGFibGUgKi87XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNSZWFkT25seSgpO1xyXG4gICAgfVxyXG4gICAgd2l0aFZhbGlkYXRpb24odmFsaWRhdGlvbikge1xyXG4gICAgICAgIHRoaXMuZWRpdGFibGVWYWx1ZS52YWxpZGF0aW9uID0gdmFsaWRhdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHdpdGhVbml2ZXJzZSguLi52YWx1ZXMpIHtcclxuICAgICAgICB0aGlzLmVkaXRhYmxlVmFsdWUudW5pdmVyc2UgPSB2YWx1ZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBidWlsZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lZGl0YWJsZVZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiIsInZhciBfaW1wb3J0ZWRTY3JpcHQgPSB7fTtcbi8qKlxuICogbG9hZCBkZXBlbmRlbmN5IGJ5IGNzcyB0YWdcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZUNzcyhzcmMpIHtcbiAgdmFyIGhlYWRFbGVtZW50ID0gZG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFkb2N1bWVudCB8fCBzcmMgaW4gX2ltcG9ydGVkU2NyaXB0KSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgc2NyaXB0LnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICBzY3JpcHQuaHJlZiA9IHNyYztcblxuICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgaGVhZEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgIHJlamVjdChuZXcgVVJJRXJyb3IoXCJUaGUgY3NzIFwiLmNvbmNhdChzcmMsIFwiIGlzIG5vIGFjY2Vzc2libGUuXCIpKSk7XG4gICAgfTtcblxuICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfaW1wb3J0ZWRTY3JpcHRbc3JjXSA9IHRydWU7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIGhlYWRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH0pO1xufVxuLyoqXG4gKiBsb2FkIGRlcGVuZGVuY3kgYnkgc2NyaXB0IHRhZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlU2NyaXB0KHNyYykge1xuICB2YXIgaWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdfcmVhY3RfYW1hcCc7XG4gIHZhciBoZWFkRWxlbWVudCA9IGRvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICghZG9jdW1lbnQgfHwgc3JjIGluIF9pbXBvcnRlZFNjcmlwdCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBoZWFkRWxlbWVudC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgcmVqZWN0KG5ldyBVUklFcnJvcihcIlRoZSBTY3JpcHQgXCIuY29uY2F0KHNyYywgXCIgaXMgbm8gYWNjZXNzaWJsZS5cIikpKTtcbiAgICB9O1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF9pbXBvcnRlZFNjcmlwdFtzcmNdID0gdHJ1ZTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuXG4gICAgaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5MWRHbHNjeTl5WlhGMWFYSmxVMk55YVhCMExuUnpJbDBzSW01aGJXVnpJanBiSWw5cGJYQnZjblJsWkZOamNtbHdkQ0lzSW5KbGNYVnBjbVZEYzNNaUxDSnpjbU1pTENKb1pXRmtSV3hsYldWdWRDSXNJbVJ2WTNWdFpXNTBJaXdpYUdWaFpDSXNJbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsSWl3aVVISnZiV2x6WlNJc0luSmxjMjlzZG1VaUxDSnlaV3BsWTNRaUxDSnpZM0pwY0hRaUxDSmpjbVZoZEdWRmJHVnRaVzUwSWl3aWRIbHdaU0lzSW5KbGJDSXNJbWh5WldZaUxDSnZibVZ5Y205eUlpd2laWEp5SWl3aWNtVnRiM1psUTJocGJHUWlMQ0pWVWtsRmNuSnZjaUlzSW05dWJHOWhaQ0lzSW1Gd2NHVnVaRU5vYVd4a0lpd2ljbVZ4ZFdseVpWTmpjbWx3ZENJc0ltbGtJaXdpWVhONWJtTWlMQ0prWldabGNpSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNTVUZCVFVFc1pVRkJkME1zUjBGQlJ5eEZRVUZxUkR0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRFFTeFBRVUZQTEZOQlFWTkRMRlZCUVZRc1EwRkJiMEpETEVkQlFYQkNMRVZCUVdkRU8wRkJRM0pFTEUxQlFVMURMRmRCUVZjc1IwRkJSME1zVVVGQlVTeExRVUZMUVN4UlFVRlJMRU5CUVVORExFbEJRVlFzU1VGQmFVSkVMRkZCUVZFc1EwRkJRMFVzYjBKQlFWUXNRMEZCT0VJc1RVRkJPVUlzUlVGQmMwTXNRMEZCZEVNc1EwRkJkRUlzUTBGQk5VSTdRVUZEUVN4VFFVRlBMRWxCUVVsRExFOUJRVW9zUTBGQldTeFZRVUZEUXl4UFFVRkVMRVZCUVZWRExFMUJRVllzUlVGQmNVSTdRVUZEZEVNc1VVRkJTU3hEUVVGRFRDeFJRVUZFTEVsQlFXRkdMRWRCUVVjc1NVRkJTVVlzWlVGQmVFSXNSVUZCZVVNN1FVRkRka05STEUxQlFVRkJMRTlCUVU4N1FVRkRVRHRCUVVORU96dEJRVU5FTEZGQlFVMUZMRTFCUVUwc1IwRkJSMDRzVVVGQlVTeERRVUZEVHl4aFFVRlVMRU5CUVhWQ0xFMUJRWFpDTEVOQlFXWTdRVUZEUVVRc1NVRkJRVUVzVFVGQlRTeERRVUZEUlN4SlFVRlFMRWRCUVdNc1ZVRkJaRHRCUVVOQlJpeEpRVUZCUVN4TlFVRk5MRU5CUVVOSExFZEJRVkFzUjBGQllTeFpRVUZpTzBGQlEwRklMRWxCUVVGQkxFMUJRVTBzUTBGQlEwa3NTVUZCVUN4SFFVRmpXaXhIUVVGa096dEJRVU5CVVN4SlFVRkJRU3hOUVVGTkxFTkJRVU5MTEU5QlFWQXNSMEZCYVVJc1ZVRkJRME1zUjBGQlJDeEZRVUZUTzBGQlEzaENZaXhOUVVGQlFTeFhRVUZYTEVOQlFVTmpMRmRCUVZvc1EwRkJkMEpRTEUxQlFYaENPMEZCUTBGRUxFMUJRVUZCTEUxQlFVMHNRMEZCUXl4SlFVRkpVeXhSUVVGS0xHMUNRVUYzUW1oQ0xFZEJRWGhDTEhkQ1FVRkVMRU5CUVU0N1FVRkRSQ3hMUVVoRU96dEJRVWxCVVN4SlFVRkJRU3hOUVVGTkxFTkJRVU5UTEUxQlFWQXNSMEZCWjBJc1dVRkJUVHRCUVVOd1FtNUNMRTFCUVVGQkxHVkJRV1VzUTBGQlEwVXNSMEZCUkN4RFFVRm1MRWRCUVhWQ0xFbEJRWFpDTzBGQlEwRk5MRTFCUVVGQkxFOUJRVTg3UVVGRFVpeExRVWhFT3p0QlFVbEJUQ3hKUVVGQlFTeFhRVUZYTEVOQlFVTnBRaXhYUVVGYUxFTkJRWGRDVml4TlFVRjRRanRCUVVORUxFZEJiRUpOTEVOQlFWQTdRVUZ0UWtRN1FVRkZSRHRCUVVOQk8wRkJRMEU3TzBGQlEwRXNUMEZCVHl4VFFVRlRWeXhoUVVGVUxFTkJRWFZDYmtJc1IwRkJka0lzUlVGQkswVTdRVUZCUVN4TlFVRXpRMjlDTEVWQlFUSkRMSFZGUVVFNVFpeGhRVUU0UWp0QlFVTndSaXhOUVVGTmJrSXNWMEZCVnl4SFFVRkhReXhSUVVGUkxFdEJRVXRCTEZGQlFWRXNRMEZCUTBNc1NVRkJWQ3hKUVVGcFFrUXNVVUZCVVN4RFFVRkRSU3h2UWtGQlZDeERRVUU0UWl4TlFVRTVRaXhGUVVGelF5eERRVUYwUXl4RFFVRjBRaXhEUVVFMVFqdEJRVU5CTEZOQlFVOHNTVUZCU1VNc1QwRkJTaXhEUVVGWkxGVkJRVU5ETEU5QlFVUXNSVUZCVlVNc1RVRkJWaXhGUVVGeFFqdEJRVU4wUXl4UlFVRkpMRU5CUVVOTUxGRkJRVVFzU1VGQllVWXNSMEZCUnl4SlFVRkpSaXhsUVVGNFFpeEZRVUY1UXp0QlFVTjJRMUVzVFVGQlFVRXNUMEZCVHp0QlFVTlFPMEZCUTBRN08wRkJRMFFzVVVGQlRVVXNUVUZCVFN4SFFVRkhUaXhSUVVGUkxFTkJRVU5QTEdGQlFWUXNRMEZCZFVJc1VVRkJka0lzUTBGQlpqdEJRVU5CUkN4SlFVRkJRU3hOUVVGTkxFTkJRVU5GTEVsQlFWQXNSMEZCWXl4cFFrRkJaRHRCUVVOQlJpeEpRVUZCUVN4TlFVRk5MRU5CUVVOWkxFVkJRVkFzUjBGQldVRXNSVUZCV2p0QlFVTkJXaXhKUVVGQlFTeE5RVUZOTEVOQlFVTmhMRXRCUVZBc1IwRkJaU3hKUVVGbU8wRkJRMEZpTEVsQlFVRkJMRTFCUVUwc1EwRkJRMk1zUzBGQlVDeEhRVUZsTEVsQlFXWTdRVUZEUVdRc1NVRkJRVUVzVFVGQlRTeERRVUZEVWl4SFFVRlFMRWRCUVdGQkxFZEJRV0k3TzBGQlEwRlJMRWxCUVVGQkxFMUJRVTBzUTBGQlEwc3NUMEZCVUN4SFFVRnBRaXhWUVVGRFF5eEhRVUZFTEVWQlFWTTdRVUZEZUVKaUxFMUJRVUZCTEZkQlFWY3NRMEZCUTJNc1YwRkJXaXhEUVVGM1FsQXNUVUZCZUVJN1FVRkRRVVFzVFVGQlFVRXNUVUZCVFN4RFFVRkRMRWxCUVVsVExGRkJRVW9zYzBKQlFUSkNhRUlzUjBGQk0wSXNkMEpCUVVRc1EwRkJUanRCUVVORUxFdEJTRVE3TzBGQlNVRlJMRWxCUVVGQkxFMUJRVTBzUTBGQlExTXNUVUZCVUN4SFFVRm5RaXhaUVVGTk8wRkJRM0JDYmtJc1RVRkJRVUVzWlVGQlpTeERRVUZEUlN4SFFVRkVMRU5CUVdZc1IwRkJkVUlzU1VGQmRrSTdRVUZEUVUwc1RVRkJRVUVzVDBGQlR6dEJRVU5TTEV0QlNFUTdPMEZCU1VGTUxFbEJRVUZCTEZkQlFWY3NRMEZCUTJsQ0xGZEJRVm9zUTBGQmQwSldMRTFCUVhoQ08wRkJRMFFzUjBGd1FrMHNRMEZCVUR0QlFYRkNSQ0lzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJRjlwYlhCdmNuUmxaRk5qY21sd2REb2dleUJiYzNKak9pQnpkSEpwYm1kZE9pQjBjblZsSUgwZ1BTQjdmVHRjYmx4dUx5b3FYRzRnS2lCc2IyRmtJR1JsY0dWdVpHVnVZM2tnWW5rZ1kzTnpJSFJoWjF4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdjbVZ4ZFdseVpVTnpjeWh6Y21NNklITjBjbWx1WnlrNklGQnliMjFwYzJVOGRtOXBaRDRnZTF4dUlDQmpiMjV6ZENCb1pXRmtSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBJQ1ltSUNoa2IyTjFiV1Z1ZEM1b1pXRmtJSHg4SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SelFubFVZV2RPWVcxbEtDZG9aV0ZrSnlsYk1GMHBPMXh1SUNCeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb0tISmxjMjlzZG1Vc0lISmxhbVZqZENrZ1BUNGdlMXh1SUNBZ0lHbG1JQ2doWkc5amRXMWxiblFnZkh3Z2MzSmpJR2x1SUY5cGJYQnZjblJsWkZOamNtbHdkQ2tnZTF4dUlDQWdJQ0FnY21WemIyeDJaU2dwTzF4dUlDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNiaUFnSUNCamIyNXpkQ0J6WTNKcGNIUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZHNhVzVySnlrN1hHNGdJQ0FnYzJOeWFYQjBMblI1Y0dVZ1BTQW5kR1Y0ZEM5amMzTW5PMXh1SUNBZ0lITmpjbWx3ZEM1eVpXd2dQU0FuYzNSNWJHVnphR1ZsZENjN1hHNGdJQ0FnYzJOeWFYQjBMbWh5WldZZ1BTQnpjbU03WEc0Z0lDQWdjMk55YVhCMExtOXVaWEp5YjNJZ1BTQW9aWEp5S1NBOVBpQjdYRzRnSUNBZ0lDQm9aV0ZrUld4bGJXVnVkQzV5WlcxdmRtVkRhR2xzWkNoelkzSnBjSFFwTzF4dUlDQWdJQ0FnY21WcVpXTjBLRzVsZHlCVlVrbEZjbkp2Y2loZ1ZHaGxJR056Y3lBa2UzTnlZMzBnYVhNZ2JtOGdZV05qWlhOemFXSnNaUzVnS1NrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0J6WTNKcGNIUXViMjVzYjJGa0lEMGdLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ1gybHRjRzl5ZEdWa1UyTnlhWEIwVzNOeVkxMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ2NtVnpiMngyWlNncE8xeHVJQ0FnSUgwN1hHNGdJQ0FnYUdWaFpFVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9jMk55YVhCMEtUdGNiaUFnZlNrN1hHNTlYRzVjYmk4cUtseHVJQ29nYkc5aFpDQmtaWEJsYm1SbGJtTjVJR0o1SUhOamNtbHdkQ0IwWVdkY2JpQXFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSEpsY1hWcGNtVlRZM0pwY0hRb2MzSmpPaUJ6ZEhKcGJtY3NJR2xrT2lCemRISnBibWNnUFNBblgzSmxZV04wWDJGdFlYQW5LVG9nVUhKdmJXbHpaVHgyYjJsa1BpQjdYRzRnSUdOdmJuTjBJR2hsWVdSRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RZ0ppWWdLR1J2WTNWdFpXNTBMbWhsWVdRZ2ZId2daRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkSE5DZVZSaFowNWhiV1VvSjJobFlXUW5LVnN3WFNrN1hHNGdJSEpsZEhWeWJpQnVaWGNnVUhKdmJXbHpaU2dvY21WemIyeDJaU3dnY21WcVpXTjBLU0E5UGlCN1hHNGdJQ0FnYVdZZ0tDRmtiMk4xYldWdWRDQjhmQ0J6Y21NZ2FXNGdYMmx0Y0c5eWRHVmtVMk55YVhCMEtTQjdYRzRnSUNBZ0lDQnlaWE52YkhabEtDazdYRzRnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnZlZ4dUlDQWdJR052Ym5OMElITmpjbWx3ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvSjNOamNtbHdkQ2NwTzF4dUlDQWdJSE5qY21sd2RDNTBlWEJsSUQwZ0ozUmxlSFF2YW1GMllYTmpjbWx3ZENjN1hHNGdJQ0FnYzJOeWFYQjBMbWxrSUQwZ2FXUTdYRzRnSUNBZ2MyTnlhWEIwTG1GemVXNWpJRDBnZEhKMVpUdGNiaUFnSUNCelkzSnBjSFF1WkdWbVpYSWdQU0IwY25WbE8xeHVJQ0FnSUhOamNtbHdkQzV6Y21NZ1BTQnpjbU03WEc0Z0lDQWdjMk55YVhCMExtOXVaWEp5YjNJZ1BTQW9aWEp5S1NBOVBpQjdYRzRnSUNBZ0lDQm9aV0ZrUld4bGJXVnVkQzV5WlcxdmRtVkRhR2xzWkNoelkzSnBjSFFwTzF4dUlDQWdJQ0FnY21WcVpXTjBLRzVsZHlCVlVrbEZjbkp2Y2loZ1ZHaGxJRk5qY21sd2RDQWtlM055WTMwZ2FYTWdibThnWVdOalpYTnphV0pzWlM1Z0tTazdYRzRnSUNBZ2ZUdGNiaUFnSUNCelkzSnBjSFF1YjI1c2IyRmtJRDBnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdYMmx0Y0c5eWRHVmtVMk55YVhCMFczTnlZMTBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdjbVZ6YjJ4MlpTZ3BPMXh1SUNBZ0lIMDdYRzRnSUNBZ2FHVmhaRVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvYzJOeWFYQjBLVHRjYmlBZ2ZTazdYRzU5WEc0aVhYMD0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJpbXBvcnQgZ2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vZ2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgZnJvbSBcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzXCI7XG5pbXBvcnQgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiLi9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIjtcbmltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiO1xuXG4vKipcbiAqIOWIneWni+WMluWSjOWKoOi9vWJhaWR15Zyw5Zu+XG4gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZXF1aXJlU2NyaXB0IH0gZnJvbSAnLi4vdXRpbHMvcmVxdWlyZVNjcmlwdCc7XG5leHBvcnQgZnVuY3Rpb24gZGVsYXkodGltZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuICB9KTtcbn1cbnZhciBERUZBVUxUX1JFVFJZX1RJTUUgPSAzO1xuLyoqXG4gKiBBUElMb2FkZXIg55So5LqO5Yqg6L2955m+5bqm5Zyw5Zu+5L6d6LWWXG4gKi9cblxuZXhwb3J0IHZhciBBUElMb2FkZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFQSUxvYWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBUElMb2FkZXIpO1xuXG4gIC8qKlxuICAgKiDlhajlsYDlj6/og73lrZjlnKjlpJrkuKogTG9hZGVyIOWQjOaXtua4suafkywg5L2G5piv5Y+q6IO955Sx5LiA5Liq6LSf6LSj5Yqg6L29XG4gICAqL1xuICBmdW5jdGlvbiBBUElMb2FkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQVBJTG9hZGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGVkOiAhIXdpbmRvdy5BTWFwXG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGVkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKHByb3BzLmFrYXkgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FNYXA6IGFrYXkgaXMgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQVBJTG9hZGVyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBjYWxsYmFja05hbWUgPSB0aGlzLnByb3BzLmNhbGxiYWNrTmFtZTtcblxuICAgICAgaWYgKHdpbmRvdy5BTWFwID09IG51bGwpIHtcbiAgICAgICAgaWYgKHdpbmRvd1tjYWxsYmFja05hbWVdKSB7XG4gICAgICAgICAgQVBJTG9hZGVyLndhaXRRdWV1ZS5wdXNoKFt0aGlzLmZpbmlzaCwgdGhpcy5oYW5kbGVFcnJvcl0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZE1hcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubG9hZGVkID8gdGhpcy5wcm9wcy5jaGlsZHJlbiA6IHRoaXMucHJvcHMuZmFsbGJhY2sgPyB0aGlzLnByb3BzLmZhbGxiYWNrKHRoaXMuc3RhdGUuZXJyb3IpIDogdGhpcy5zdGF0ZS5lcnJvciA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBjb2xvcjogJ3JlZCdcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5zdGF0ZS5lcnJvci5tZXNzYWdlKSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFNjcmlwdFNyY1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY3JpcHRTcmMoKSB7XG4gICAgICB2YXIgY2ZnID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBwcm90b2NvbCA9IGNmZy5wcm90b2NvbCB8fCB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgICAgIGlmIChwcm90b2NvbC5pbmRleE9mKCc6JykgPT09IC0xKSB7XG4gICAgICAgIHByb3RvY29sICs9ICc6JztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHByb3RvY29sLCBcIi8vXCIpLmNvbmNhdChjZmcuaG9zdEFuZFBhdGgsIFwiP3Y9XCIpLmNvbmNhdChjZmcudmVyc2lvbiwgXCIma2V5PVwiKS5jb25jYXQoY2ZnLmFrYXksIFwiJmNhbGxiYWNrPVwiKS5jb25jYXQoY2ZnLmNhbGxiYWNrTmFtZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGxvYWQgQmFpZHVNYXAgaW4gc2NyaXB0IHRhZ1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZE1hcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2xvYWRNYXAgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgY2FsbGJhY2tOYW1lLCBzcmMsIGksIF9yZXQ7XG5cbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjYWxsYmFja05hbWUgPSB0aGlzLnByb3BzLmNhbGxiYWNrTmFtZTtcbiAgICAgICAgICAgICAgICBzcmMgPSB0aGlzLmdldFNjcmlwdFNyYygpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBmbHVzaCBxdWV1ZVxuICAgICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gQVBJTG9hZGVyLndhaXRRdWV1ZTtcbiAgICAgICAgICAgICAgICAgIEFQSUxvYWRlci53YWl0UXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tbMF0oKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBfdGhpczIuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpZiAoIShpIDwgREVGQVVMVF9SRVRSWV9USU1FKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIyO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDU7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVTY3JpcHQoc3JjKTtcblxuICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcImJyZWFrXCIsIDIyKTtcblxuICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxMTtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oNSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIShpID09PSBERUZBVUxUX1JFVFJZX1RJTUUgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE3O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBBTWFwOiBcIi5jb25jYXQoX2NvbnRleHQudDAubWVzc2FnZSkpOyAvLyBmbHVzaCBxdWV1ZVxuXG4gICAgICAgICAgICAgICAgICB2YXIgcXVldWUgPSBBUElMb2FkZXIud2FpdFF1ZXVlO1xuICAgICAgICAgICAgICAgICAgQVBJTG9hZGVyLndhaXRRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgcXVldWUuZm9yRWFjaChmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFza1sxXShlcnIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIF90aGlzMi5oYW5kbGVFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2OiB2b2lkIDBcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoX3R5cGVvZihfcmV0KSA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgX3JldC52KTtcblxuICAgICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxOTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsYXkoaSAqIDEwMDApO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgdGhpcywgW1s1LCAxMV1dKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gbG9hZE1hcCgpIHtcbiAgICAgICAgcmV0dXJuIF9sb2FkTWFwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2FkTWFwO1xuICAgIH0oKVxuICB9XSk7XG5cbiAgcmV0dXJuIEFQSUxvYWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcbkFQSUxvYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFrYXk6ICcnLFxuICBob3N0QW5kUGF0aDogJ3dlYmFwaS5hbWFwLmNvbS9tYXBzJyxcbiAgdmVyc2lvbjogJzIuMCcsXG4gIGNhbGxiYWNrTmFtZTogJ2xvYWRfYW1hcF9zZGsnXG59O1xuQVBJTG9hZGVyLndhaXRRdWV1ZSA9IFtdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OUJVRWxNYjJGa1pYSXZhVzVrWlhndWRITjRJbDBzSW01aGJXVnpJanBiSWxKbFlXTjBJaXdpY21WeGRXbHlaVk5qY21sd2RDSXNJbVJsYkdGNUlpd2lkR2x0WlNJc0lsQnliMjFwYzJVaUxDSnlaWE52YkhabElpd2ljbVZxWldOMElpd2lkMmx1Wkc5M0lpd2ljMlYwVkdsdFpXOTFkQ0lzSWtSRlJrRlZURlJmVWtWVVVsbGZWRWxOUlNJc0lrRlFTVXh2WVdSbGNpSXNJbkJ5YjNCeklpd2ljM1JoZEdVaUxDSnNiMkZrWldRaUxDSkJUV0Z3SWl3aWFHRnVaR3hsUlhKeWIzSWlMQ0psY25KdmNpSXNJbk5sZEZOMFlYUmxJaXdpWm1sdWFYTm9JaXdpWVd0aGVTSXNJbFI1Y0dWRmNuSnZjaUlzSW1OaGJHeGlZV05yVG1GdFpTSXNJbmRoYVhSUmRXVjFaU0lzSW5CMWMyZ2lMQ0pzYjJGa1RXRndJaXdpWTJocGJHUnlaVzRpTENKbVlXeHNZbUZqYXlJc0ltTnZiRzl5SWl3aWJXVnpjMkZuWlNJc0ltTm1aeUlzSW5CeWIzUnZZMjlzSWl3aWJHOWpZWFJwYjI0aUxDSnBibVJsZUU5bUlpd2lhRzl6ZEVGdVpGQmhkR2dpTENKMlpYSnphVzl1SWl3aWMzSmpJaXdpWjJWMFUyTnlhWEIwVTNKaklpd2ljWFZsZFdVaUxDSm1iM0pGWVdOb0lpd2lkR0Z6YXlJc0lta2lMQ0psY25JaUxDSkZjbkp2Y2lJc0lrTnZiWEJ2Ym1WdWRDSXNJbVJsWm1GMWJIUlFjbTl3Y3lKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUFFTeExRVUZRTEUxQlFXdENMRTlCUVd4Q08wRkJSVUVzVTBGQlUwTXNZVUZCVkN4UlFVRTRRaXgzUWtGQk9VSTdRVUZGUVN4UFFVRlBMRk5CUVZORExFdEJRVlFzUTBGQlpVTXNTVUZCWml4RlFVRnBSRHRCUVVOMFJDeFRRVUZQTEVsQlFVbERMRTlCUVVvc1EwRkJXU3hWUVVGRFF5eFBRVUZFTEVWQlFWVkRMRTFCUVZZc1JVRkJjVUk3UVVGRGRFTkRMRWxCUVVGQkxFMUJRVTBzUTBGQlEwTXNWVUZCVUN4RFFVRnJRa2dzVDBGQmJFSXNSVUZCTWtKR0xFbEJRVE5DTzBGQlEwUXNSMEZHVFN4RFFVRlFPMEZCUjBRN1FVRmpSQ3hKUVVGTlRTeHJRa0ZCYTBJc1IwRkJSeXhEUVVFelFqdEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hYUVVGaFF5eFRRVUZpTzBGQlFVRTdPMEZCUVVFN08wRkJVVVU3UVVGRFJqdEJRVU5CTzBGQlRVVXNjVUpCUVcxQ1F5eExRVUZ1UWl4RlFVRXdRenRCUVVGQk96dEJRVUZCT3p0QlFVTjRReXc0UWtGQlRVRXNTMEZCVGp0QlFVUjNReXhWUVVwdVEwTXNTMEZKYlVNc1IwRktjRUk3UVVGRGNFSkRMRTFCUVVGQkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTk9MRTFCUVUwc1EwRkJRMDg3UVVGRVJ5eExRVWx2UWpzN1FVRkJRU3hWUVhGRmJFTkRMRmRCY2tWclF5eEhRWEZGY0VJc1ZVRkJRME1zUzBGQlJDeEZRVUZyUWp0QlFVTjBReXhaUVVGTFF5eFJRVUZNTEVOQlFXTTdRVUZCUlVRc1VVRkJRVUVzUzBGQlN5eEZRVUZNUVR0QlFVRkdMRTlCUVdRN1FVRkRSQ3hMUVhaRmVVTTdPMEZCUVVFc1ZVRjVSV3hEUlN4TlFYcEZhME1zUjBGNVJYcENMRmxCUVUwN1FVRkRja0lzV1VGQlMwUXNVVUZCVEN4RFFVRmpPMEZCUTFwS0xGRkJRVUZCTEUxQlFVMHNSVUZCUlR0QlFVUkpMRTlCUVdRN1FVRkhSQ3hMUVRkRmVVTTdPMEZCUlhoRExGRkJRVWxHTEV0QlFVc3NRMEZCUTFFc1NVRkJUaXhMUVVGbExFbEJRVzVDTEVWQlFYbENPMEZCUTNaQ0xGbEJRVTBzU1VGQlNVTXNVMEZCU2l4RFFVRmpMSGRDUVVGa0xFTkJRVTQ3UVVGRFJEczdRVUZLZFVNN1FVRkxla003TzBGQmNrSklPMEZCUVVFN1FVRkJRU3hYUVhWQ1JTdzJRa0ZCTWtJN1FVRkRla0lzVlVGQlVVTXNXVUZCVWl4SFFVRjVRaXhMUVVGTFZpeExRVUU1UWl4RFFVRlJWU3haUVVGU096dEJRVU5CTEZWQlFVbGtMRTFCUVUwc1EwRkJRMDhzU1VGQlVDeEpRVUZsTEVsQlFXNUNMRVZCUVhsQ08wRkJRM1pDTEZsQlFVbFFMRTFCUVUwc1EwRkJRMk1zV1VGQlJDeERRVUZXTEVWQlFXbERPMEZCUXk5Q1dDeFZRVUZCUVN4VFFVRlRMRU5CUVVOWkxGTkJRVllzUTBGQmIwSkRMRWxCUVhCQ0xFTkJRWGxDTEVOQlFVTXNTMEZCUzB3c1RVRkJUaXhGUVVGakxFdEJRVXRJTEZkQlFXNUNMRU5CUVhwQ08wRkJRMEU3UVVGRFJEczdRVUZEUkN4aFFVRkxVeXhQUVVGTU8wRkJRMFE3UVVGRFJqdEJRV2hEU0R0QlFVRkJPMEZCUVVFc1YwRnJRMFVzYTBKQlFXZENPMEZCUTJRc1lVRkJUeXhMUVVGTFdpeExRVUZNTEVOQlFWZERMRTFCUVZnc1IwRkRUQ3hMUVVGTFJpeExRVUZNTEVOQlFWZGpMRkZCUkU0c1IwRkZTQ3hMUVVGTFpDeExRVUZNTEVOQlFWZGxMRkZCUVZnc1IwRkRSaXhMUVVGTFppeExRVUZNTEVOQlFWZGxMRkZCUVZnc1EwRkJiMElzUzBGQlMyUXNTMEZCVEN4RFFVRlhTU3hMUVVFdlFpeERRVVJGTEVkQlJVRXNTMEZCUzBvc1MwRkJUQ3hEUVVGWFNTeExRVUZZTEdkQ1FVTkdPMEZCUVVzc1VVRkJRU3hMUVVGTExFVkJRVVU3UVVGQlJWY3NWVUZCUVVFc1MwRkJTeXhGUVVGRk8wRkJRVlE3UVVGQldpeFRRVUVyUWl4TFFVRkxaaXhMUVVGTUxFTkJRVmRKTEV0QlFWZ3NRMEZCYVVKWkxFOUJRV2hFTEVOQlJFVXNSMEZGUVN4SlFVNUtPMEZCVDBRN1FVRXhRMGc3UVVGQlFUdEJRVUZCTEZkQk5FTkZMSGRDUVVGMVFqdEJRVU55UWl4VlFVRk5ReXhIUVVGSExFZEJRVWNzUzBGQlMyeENMRXRCUVdwQ08wRkJRMEVzVlVGQlNXMUNMRkZCUVZFc1IwRkJTVVFzUjBGQlJ5eERRVUZEUXl4UlFVRktMRWxCUVdkQ2RrSXNUVUZCVFN4RFFVRkRkMElzVVVGQlVDeERRVUZuUWtRc1VVRkJhRVE3TzBGQlEwRXNWVUZCU1VFc1VVRkJVU3hEUVVGRlJTeFBRVUZXTEVOQlFXdENMRWRCUVd4Q0xFMUJRVEpDTEVOQlFVTXNRMEZCYUVNc1JVRkJiVU03UVVGRGFrTkdMRkZCUVVGQkxGRkJRVkVzU1VGQlNTeEhRVUZhTzBGQlEwUTdPMEZCUTBRc2RVSkJRVlZCTEZGQlFWWXNaVUZCZFVKRUxFZEJRVWNzUTBGQlEwa3NWMEZCTTBJc1owSkJRVFJEU2l4SFFVRkhMRU5CUVVOTExFOUJRV2hFTEd0Q1FVRXJSRXdzUjBGQlJ5eERRVUZEVml4SlFVRnVSU3gxUWtGQmIwWlZMRWRCUVVjc1EwRkJRMUlzV1VGQmVFWTdRVUZEUkR0QlFVTkVPMEZCUTBZN1FVRkRRVHM3UVVGMFJFRTdRVUZCUVR0QlFVRkJPMEZCUVVFc09FVkJkVVJGTzBGQlFVRTdPMEZCUVVFN08wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZEVlVFc1owSkJRVUZCTEZsQlJGWXNSMEZETWtJc1MwRkJTMVlzUzBGRWFFTXNRMEZEVlZVc1dVRkVWanRCUVVWUll5eG5Ra0ZCUVVFc1IwRkdVaXhIUVVWakxFdEJRVXRETEZsQlFVd3NSVUZHWkRzN1FVRkhSemRDTEdkQ1FVRkJRU3hOUVVGRUxFTkJRV2RDWXl4WlFVRm9RaXhKUVVGMVF5eFpRVUZOTzBGQlF6TkRPMEZCUTBFc2MwSkJRVTFuUWl4TFFVRkxMRWRCUVVjelFpeFRRVUZUTEVOQlFVTlpMRk5CUVhoQ08wRkJRMEZhTEd0Q1FVRkJRU3hUUVVGVExFTkJRVU5aTEZOQlFWWXNSMEZCYzBJc1JVRkJkRUk3UVVGRFFXVXNhMEpCUVVGQkxFdEJRVXNzUTBGQlEwTXNUMEZCVGl4RFFVRmpMRlZCUVVORExFbEJRVVE3UVVGQlFTd3lRa0ZCVlVFc1NVRkJTU3hEUVVGRExFTkJRVVFzUTBGQlNpeEZRVUZXTzBGQlFVRXNiVUpCUVdRN08wRkJRMEVzYTBKQlFVRXNUVUZCU1N4RFFVRkRja0lzVFVGQlREdEJRVU5FTEdsQ1FVNUVPenRCUVZGVGMwSXNaMEpCUVVGQkxFTkJXRmdzUjBGWFpTeERRVmhtT3p0QlFVRkJPMEZCUVVFc2MwSkJWMnRDUVN4RFFVRkRMRWRCUVVjdlFpeHJRa0ZZZEVJN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlFVRTdRVUZCUVR0QlFVRkJMSFZDUVdGWlVpeGhRVUZoTEVOQlFVTnJReXhIUVVGRUxFTkJZbnBDT3p0QlFVRkJPMEZCUVVFN08wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVRkJMSE5DUVdkQ1ZVc3NRMEZCUXl4TFFVRkxMMElzYTBKQlFXdENMRWRCUVVjc1EwRm9RbkpETzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVGQk8wRkJhVUpSTEhOQ1FVRk5aME1zUjBGQlJ5eEhRVUZITEVsQlFVbERMRXRCUVVvc1owTkJRV3RETEZsQlFVMWtMRTlCUVhoRExFVkJRVm9zUTBGcVFsSXNRMEZyUWxFN08wRkJRMEVzYzBKQlFVMVRMRXRCUVVzc1IwRkJSek5DTEZOQlFWTXNRMEZCUTFrc1UwRkJlRUk3UVVGRFFWb3NhMEpCUVVGQkxGTkJRVk1zUTBGQlExa3NVMEZCVml4SFFVRnpRaXhGUVVGMFFqdEJRVU5CWlN4clFrRkJRVUVzUzBGQlN5eERRVUZEUXl4UFFVRk9MRU5CUVdNc1ZVRkJRME1zU1VGQlJEdEJRVUZCTERKQ1FVRlZRU3hKUVVGSkxFTkJRVU1zUTBGQlJDeERRVUZLTEVOQlFWRkZMRWRCUVZJc1EwRkJWanRCUVVGQkxHMUNRVUZrT3p0QlFVTkJMR3RDUVVGQkxFMUJRVWtzUTBGQlF6RkNMRmRCUVV3c1EwRkJhVUl3UWl4SFFVRnFRanM3UVVGRFFUdEJRVUZCTzBGQlFVRTdRVUYyUWxJN08wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUVVFN08wRkJRVUU3UVVGQlFUdEJRVUZCTEhWQ1FYbENXWFpETEV0QlFVc3NRMEZCUTNORExFTkJRVU1zUjBGQlJ5eEpRVUZNTEVOQmVrSnFRanM3UVVGQlFUdEJRVmN3UTBFc1owSkJRVUZCTEVOQlFVTXNSVUZZTTBNN1FVRkJRVHRCUVVGQk96dEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQkxFOUJka1JHT3p0QlFVRkJPMEZCUVVFN1FVRkJRVHM3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUVVFN1FVRkJRU3hGUVVFclFuaERMRXRCUVVzc1EwRkJRekpETEZOQlFYSkRPMEZCUVdGcVF5eFRMRU5CUTBkclF5eFpMRWRCUVdVN1FVRkRNMEo2UWl4RlFVRkJRU3hKUVVGSkxFVkJRVVVzUlVGRWNVSTdRVUZGTTBKakxFVkJRVUZCTEZkQlFWY3NSVUZCUlN4elFrRkdZenRCUVVjelFrTXNSVUZCUVVFc1QwRkJUeXhGUVVGRkxFdEJTR3RDTzBGQlNUTkNZaXhGUVVGQlFTeFpRVUZaTEVWQlFVVTdRVUZLWVN4RE8wRkJSR3hDV0N4VExFTkJWMGxaTEZNc1IwRkJlVU1zUlNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh1SUNvZzVZaWQ1YWVMNVl5VzVaS001WXFnNkwyOVltRnBaSFhsbkxEbG03NWNiaUFxTDF4dWFXMXdiM0owSUZKbFlXTjBJR1p5YjIwZ0ozSmxZV04wSnp0Y2JtbHRjRzl5ZENCN0lFTnZibVpwWnlCOUlHWnliMjBnSnk0dUwyTnZiVzF2Ymk5dFlYQW5PMXh1YVcxd2IzSjBJSHNnY21WeGRXbHlaVk5qY21sd2RDQjlJR1p5YjIwZ0p5NHVMM1YwYVd4ekwzSmxjWFZwY21WVFkzSnBjSFFuTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1pHVnNZWGtvZEdsdFpUb2diblZ0WW1WeUtUb2dVSEp2YldselpUeDFibVJsWm1sdVpXUStJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QlFjbTl0YVhObEtDaHlaWE52YkhabExDQnlaV3BsWTNRcElEMCtJSHRjYmlBZ0lDQjNhVzVrYjNjdWMyVjBWR2x0Wlc5MWRDaHlaWE52YkhabExDQjBhVzFsS1R0Y2JpQWdmU2s3WEc1OVhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRVkJKVEc5aFpHVnlVSEp2Y0hNZ1pYaDBaVzVrY3lCRGIyNW1hV2NnZTF4dUlDQXZLaXBjYmlBZ0lDb2c1NVNvNUxxTzViR1Y1NlM2NVlxZzZMMjk1TGl0NW9pVzZaU1o2Syt2NTRxMjVvQ0JYRzRnSUNBcUwxeHVJQ0JtWVd4c1ltRmphejg2SUNobGNuSnZjajg2SUVWeWNtOXlLU0E5UGlCU1pXRmpkQzVTWldGamRFNXZaR1U3WEc1OVhHNWNibWx1ZEdWeVptRmpaU0JUZEdGMFpTQjdYRzRnSUd4dllXUmxaRG9nWW05dmJHVmhianRjYmlBZ1pYSnliM0kvT2lCRmNuSnZjanRjYm4xY2JseHVZMjl1YzNRZ1JFVkdRVlZNVkY5U1JWUlNXVjlVU1UxRklEMGdNenRjYmx4dUx5b3FYRzRnS2lCQlVFbE1iMkZrWlhJZzU1U281THFPNVlxZzZMMjk1NW0rNWJxbTVaeXc1WnUrNUw2ZDZMV1dYRzRnS2k5Y2JtVjRjRzl5ZENCamJHRnpjeUJCVUVsTWIyRmtaWElnWlhoMFpXNWtjeUJTWldGamRDNURiMjF3YjI1bGJuUThRVkJKVEc5aFpHVnlVSEp2Y0hNK0lIdGNiaUFnY0hWaWJHbGpJSE4wWVhScFl5QmtaV1poZFd4MFVISnZjSE1nUFNCN1hHNGdJQ0FnWVd0aGVUb2dKeWNzWEc0Z0lDQWdhRzl6ZEVGdVpGQmhkR2c2SUNkM1pXSmhjR2t1WVcxaGNDNWpiMjB2YldGd2N5Y3NYRzRnSUNBZ2RtVnljMmx2YmpvZ0p6SXVNQ2NzWEc0Z0lDQWdZMkZzYkdKaFkydE9ZVzFsT2lBbmJHOWhaRjloYldGd1gzTmtheWNzWEc0Z0lIMDdYRzVjYmlBZ0x5b3FYRzRnSUNBcUlPV0ZxT1d4Z09XUHIraUR2ZVd0bU9XY3FPV2ttdVM0cWlCTWIyRmtaWElnNVpDTTVwZTI1cml5NXArVExDRGt2WWJtbUsvbGo2cm9nNzNubExIa3VJRGt1S3JvdEovb3RLUGxpcURvdmIxY2JpQWdJQ292WEc0Z0lIQnlhWFpoZEdVZ2MzUmhkR2xqSUhkaGFYUlJkV1YxWlRvZ1FYSnlZWGs4VzBaMWJtTjBhVzl1TENCR2RXNWpkR2x2YmwwK0lEMGdXMTA3WEc0Z0lIQjFZbXhwWXlCemRHRjBaVG9nVTNSaGRHVWdQU0I3WEc0Z0lDQWdiRzloWkdWa09pQWhJWGRwYm1SdmR5NUJUV0Z3TEZ4dUlDQjlPMXh1WEc0Z0lIQjFZbXhwWXlCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3pvZ1FWQkpURzloWkdWeVVISnZjSE1wSUh0Y2JpQWdJQ0J6ZFhCbGNpaHdjbTl3Y3lrN1hHNGdJQ0FnYVdZZ0tIQnliM0J6TG1GcllYa2dQVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjBGTllYQTZJR0ZyWVhrZ2FYTWdjbVZ4ZFdseVpXUW5LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J3ZFdKc2FXTWdZMjl0Y0c5dVpXNTBSR2xrVFc5MWJuUW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmpZV3hzWW1GamEwNWhiV1VnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ2FXWWdLSGRwYm1SdmR5NUJUV0Z3SUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUdsbUlDaDNhVzVrYjNkYlkyRnNiR0poWTJ0T1lXMWxJR0Z6SUdGdWVWMHBJSHRjYmlBZ0lDQWdJQ0FnUVZCSlRHOWhaR1Z5TG5kaGFYUlJkV1YxWlM1d2RYTm9LRnQwYUdsekxtWnBibWx6YUN3Z2RHaHBjeTVvWVc1a2JHVkZjbkp2Y2wwcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCMGFHbHpMbXh2WVdSTllYQW9LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J3ZFdKc2FXTWdjbVZ1WkdWeUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbk4wWVhSbExteHZZV1JsWkNBL0lDaGNiaUFnSUNBZ0lIUm9hWE11Y0hKdmNITXVZMmhwYkdSeVpXNWNiaUFnSUNBcElEb2dkR2hwY3k1d2NtOXdjeTVtWVd4c1ltRmpheUEvSUNoY2JpQWdJQ0FnSUhSb2FYTXVjSEp2Y0hNdVptRnNiR0poWTJzb2RHaHBjeTV6ZEdGMFpTNWxjbkp2Y2lsY2JpQWdJQ0FwSURvZ2RHaHBjeTV6ZEdGMFpTNWxjbkp2Y2lBL0lDaGNiaUFnSUNBZ0lEeGthWFlnYzNSNWJHVTllM3NnWTI5c2IzSTZJQ2R5WldRbklIMTlQbnQwYUdsekxuTjBZWFJsTG1WeWNtOXlMbTFsYzNOaFoyVjlQQzlrYVhZK1hHNGdJQ0FnS1NBNklHNTFiR3c3WEc0Z0lIMWNibHh1SUNCd2NtbDJZWFJsSUdkbGRGTmpjbWx3ZEZOeVl5Z3BJSHRjYmlBZ0lDQmpiMjV6ZENCalptY2dQU0IwYUdsekxuQnliM0J6TzF4dUlDQWdJR3hsZENCd2NtOTBiMk52YkNBOUlDaGpabWN1Y0hKdmRHOWpiMndnZkh3Z2QybHVaRzkzTG14dlkyRjBhVzl1TG5CeWIzUnZZMjlzS1NCaGN5QkRiMjVtYVdkYkozQnliM1J2WTI5c0oxMDdYRzRnSUNBZ2FXWWdLSEJ5YjNSdlkyOXNJUzVwYm1SbGVFOW1LQ2M2SnlrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNCd2NtOTBiMk52YkNBclBTQW5PaWM3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCZ0pIdHdjbTkwYjJOdmJIMHZMeVI3WTJabkxtaHZjM1JCYm1SUVlYUm9mVDkyUFNSN1kyWm5MblpsY25OcGIyNTlKbXRsZVQwa2UyTm1aeTVoYTJGNWZTWmpZV3hzWW1GamF6MGtlMk5tWnk1allXeHNZbUZqYTA1aGJXVjlZRHRjYmlBZ2ZWeHVJQ0F2S2lwY2JpQWdJQ29nYkc5aFpDQkNZV2xrZFUxaGNDQnBiaUJ6WTNKcGNIUWdkR0ZuWEc0Z0lDQXFMMXh1SUNCd2NtbDJZWFJsSUdGemVXNWpJR3h2WVdSTllYQW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QmpZV3hzWW1GamEwNWhiV1VnZlNBOUlIUm9hWE11Y0hKdmNITTdYRzRnSUNBZ1kyOXVjM1FnYzNKaklEMGdkR2hwY3k1blpYUlRZM0pwY0hSVGNtTW9LVHRjYmlBZ0lDQW9kMmx1Wkc5M0lHRnpJR0Z1ZVNsYlkyRnNiR0poWTJ0T1lXMWxJR0Z6SUdGdWVWMGdQU0FvS1NBOVBpQjdYRzRnSUNBZ0lDQXZMeUJtYkhWemFDQnhkV1YxWlZ4dUlDQWdJQ0FnWTI5dWMzUWdjWFZsZFdVZ1BTQkJVRWxNYjJGa1pYSXVkMkZwZEZGMVpYVmxPMXh1SUNBZ0lDQWdRVkJKVEc5aFpHVnlMbmRoYVhSUmRXVjFaU0E5SUZ0ZE8xeHVJQ0FnSUNBZ2NYVmxkV1V1Wm05eVJXRmphQ2dvZEdGemF5a2dQVDRnZEdGemExc3dYU2dwS1R0Y2JpQWdJQ0FnSUhSb2FYTXVabWx1YVhOb0tDazdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dSRVZHUVZWTVZGOVNSVlJTV1Y5VVNVMUZPeUJwS3lzcElIdGNiaUFnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUdGM1lXbDBJSEpsY1hWcGNtVlRZM0pwY0hRb2MzSmpLVHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQjlJR05oZEdOb0lDaGxjbkp2Y2lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYVNBOVBUMGdSRVZHUVZWTVZGOVNSVlJTV1Y5VVNVMUZJQzBnTVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR052Ym5OMElHVnljaUE5SUc1bGR5QkZjbkp2Y2loZ1JtRnBiR1ZrSUhSdklHeHZZV1FnUVUxaGNEb2dKSHRsY25KdmNpNXRaWE56WVdkbGZXQXBPMXh1SUNBZ0lDQWdJQ0FnSUM4dklHWnNkWE5vSUhGMVpYVmxYRzRnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjWFZsZFdVZ1BTQkJVRWxNYjJGa1pYSXVkMkZwZEZGMVpYVmxPMXh1SUNBZ0lDQWdJQ0FnSUVGUVNVeHZZV1JsY2k1M1lXbDBVWFZsZFdVZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnSUNCeGRXVjFaUzVtYjNKRllXTm9LQ2gwWVhOcktTQTlQaUIwWVhOcld6RmRLR1Z5Y2lrcE8xeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFHRnVaR3hsUlhKeWIzSW9aWEp5S1R0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZWGRoYVhRZ1pHVnNZWGtvYVNBcUlERXdNREFwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhCeWFYWmhkR1VnYUdGdVpHeGxSWEp5YjNJZ1BTQW9aWEp5YjNJNklFVnljbTl5S1NBOVBpQjdYRzRnSUNBZ2RHaHBjeTV6WlhSVGRHRjBaU2g3SUdWeWNtOXlJSDBwTzF4dUlDQjlPMXh1WEc0Z0lIQnlhWFpoZEdVZ1ptbHVhWE5vSUQwZ0tDa2dQVDRnZTF4dUlDQWdJSFJvYVhNdWMyVjBVM1JoZEdVb2UxeHVJQ0FnSUNBZ2JHOWhaR1ZrT2lCMGNuVmxMRnh1SUNBZ0lIMHBPMXh1SUNCOU8xeHVmVnh1SWwxOSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBkZWZpbmVQcm9wZXJ0eSBmcm9tIFwiLi9kZWZpbmVQcm9wZXJ0eS5qc1wiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG5cbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIOWvueWunuS+i+aciSBzZXRTdGF0dXMg5pu05pS554q25oCB55qE5aSE55CGXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBwcm9wc1xuICogQHBhcmFtIHByb3BzTmFtZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTZXRTdGF0dXMoaW5zdGFuY2UpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIHByb3BzTmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG4gIHByb3BzTmFtZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGVOYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cbiAgICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUocHJvcHNbZU5hbWVdKSxcbiAgICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICAgIHN0YXRlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGUyWzFdOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcblxuXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpbnN0YW5jZSAmJiBwcm9wc1tlTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocHJvcHNbZU5hbWVdICE9PSBzdGF0ZSkge1xuICAgICAgICAgIC8vIG1hcC5zZXRTdGF0dXMoe1xuICAgICAgICAgIC8vICAgZHJhZ0VuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAvLyAgIGtleWJvYXJkRW5hYmxlOiB0cnVlLFxuICAgICAgICAgIC8vICAgZG91YmxlQ2xpY2tab29tOiB0cnVlLFxuICAgICAgICAgIC8vICAgem9vbUVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAvLyAgIHJvdGF0ZUVuYWJsZTogdHJ1ZVxuICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgIHZhciBzdGF0dXMgPSBpbnN0YW5jZS5nZXRTdGF0dXMoKTtcbiAgICAgICAgICBpbnN0YW5jZS5zZXRTdGF0dXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdGF0dXMpLCB7fSwgX2RlZmluZVByb3BlcnR5KHt9LCBlTmFtZSwgcHJvcHNbZU5hbWVdKSkpO1xuICAgICAgICAgIHNldFN0YXRlKHByb3BzW2VOYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gICAgfSwgW2luc3RhbmNlLCBwcm9wc1tlTmFtZV1dKTtcbiAgfSk7XG59XG4vKipcbiAqIOmSiOWvuSBPdmVybGF5IOexu+Wei+eahOe7hOS7tu+8jOacieWFrOWFseeahOaYr+WQpuaYvuekuiDlr7nosaHlpITnkIZcbiAqIOmAmui/h+WPguaVsCBgdmlzaWFibGVgIOadpeaOp+WItuaJp+ihjCBgc2hvdygpYCBvciBgaGlkZSgpYFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWaXNpYWJsZShpbnN0YW5jZSwgdmlzaWFibGUpIHtcbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZSh2aXNpYWJsZSksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZTRbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5zdGFuY2UgJiYgdmlzaWFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZpc2lhYmxlKSB7XG4gICAgICAgIGluc3RhbmNlLnNob3cgJiYgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UuaGlkZSAmJiBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2aXNpYWJsZSAhPT0gc3RhdGUpIHtcbiAgICAgICAgc2V0U3RhdGUodmlzaWFibGUpO1xuICAgICAgfVxuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIH0sIFtpbnN0YW5jZSwgdmlzaWFibGVdKTtcbn1cbi8qKlxuICog6I635Y+W5LiK5LiA6L2u55qEIHByb3BzIOaIliBzdGF0ZVxuICogSG93IHRvIGdldCB0aGUgcHJldmlvdXMgcHJvcHMgb3Igc3RhdGU/XG4gKiBodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtZmFxLmh0bWwjaG93LXRvLWdldC10aGUtcHJldmlvdXMtcHJvcHMtb3Itc3RhdGVcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogZnVuY3Rpb24gQ291bnRlcigpIHtcbiAqICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAqICAgY29uc3QgcHJldkNvdW50ID0gdXNlUHJldmlvdXMoY291bnQpO1xuICogICByZXR1cm4gPGgxPk5vdzoge2NvdW50fSwgYmVmb3JlOiB7cHJldkNvdW50fTwvaDE+O1xuICogfVxuICogYGBgXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XG4gIHZhciByZWYgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufVxuXG4vKipcbiAqIOe7keWumuS6i+S7tlxuICogQHBhcmFtIGluc3RhbmNlIOWunuS+i+WvueixoVxuICogQHBhcmFtIHByb3BzIOS8oOmAkui/m+adpeeahCBwcm9wc1xuICogQHBhcmFtIGV2ZW50TmFtZSDkuovku7bnmoTlkI3lrZfvvIzlpoLvvIzmiJHku6zkvb/nlKggYG9uQ2xpY2tgIOS6i+S7tu+8jOacgOe7iOiiq+i9rOaNouaIkO+8jGBjbGlja2Ag57uR5a6a5Yiw5a6e5L6L5Lit77yMYG9uRGJsQ2xpY2tgID0+IGBkYmxjbGlja2BcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIHVzZUV2ZW50UHJvcGVydGllczxCTWFwLk1hcmtlciwgVXNlTWFya2VyPihtYXJrZXIhLCBwcm9wcywgW1xuICogICAnb25Nb3VzZU1vdmUnLCAnb25ab29tQ2hhbmdlJywgJ29uTWFwTW92ZScsICdvbk1vdXNlV2hlZWwnLCAnb25ab29tU3RhcnQnXG4gKiBdKTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRXZlbnRQcm9wZXJ0aWVzKGluc3RhbmNlKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBldmVudE5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICB2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogdW5kZWZpbmVkO1xuICBldmVudE5hbWUuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBldmVudE5hbWUgPSBuYW1lO1xuICAgIHZhciBldmVudEhhbmRsZSA9IHByb3BzW2V2ZW50TmFtZV07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghaW5zdGFuY2UpIHJldHVybjtcbiAgICAgIHZhciBlTmFtZSA9IG5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9eb24vLCAnJyk7XG5cbiAgICAgIGlmIChldmVudEhhbmRsZSAmJiBlTmFtZSkge1xuICAgICAgICBpbnN0YW5jZS5vbihlTmFtZSwgZXZlbnRIYW5kbGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZU5hbWUgJiYgZXZlbnRIYW5kbGUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5vZmYoZU5hbWUsIGV2ZW50SGFuZGxlKTtcbiAgICAgICAgfVxuICAgICAgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtpbnN0YW5jZSwgcHJvcHNbZXZlbnROYW1lXV0pO1xuICB9KTtcbn1cbi8qKlxuICog5bGe5oCn5Y+X5o6nXG4gKiBAcGFyYW0gaW5zdGFuY2Ug5a6e5L6L5a+56LGhXG4gKiBAcGFyYW0gcHJvcHMg5bGe5oCn5YC8XG4gKiBAcGFyYW0gcHJvcHNOYW1lIOWkmuS4quWxnuaAp+iuvue9rueahOWQjeensFxuICogQGV4YW1wbGVcbiAqIGBgYHRzXG4gKiB1c2VTZXR0aW5nUHJvcGVydGllczxBTWFwLlBvbHlsaW5lLCBVc2VQb2x5bGluZT4ocG9seWxpbmUhLCBwcm9wcywgW1xuICogICAgJ1BhdGgnXG4gKiBdKTtcbiAqIGBgYFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTZXR0aW5nUHJvcGVydGllcygpIHtcbiAgdmFyIGluc3RhbmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIHByb3BzTmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG4gIHByb3BzTmFtZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGVOYW1lID0gXCJzZXRcIi5jb25jYXQobmFtZSk7XG4gICAgdmFyIHZOYW1lID0gXCJcIi5jb25jYXQobmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSkuY29uY2F0KG5hbWUuc2xpY2UoMSkpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcblxuICAgIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUocHJvcHNbdk5hbWVdKSxcbiAgICAgICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgICAgICBzdGF0ZSA9IF91c2VTdGF0ZTZbMF0sXG4gICAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlNlsxXTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cblxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaW5zdGFuY2UgJiYgcHJvcHNbdk5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHByb3BzW3ZOYW1lXSAhPT0gc3RhdGUgJiYgaW5zdGFuY2VbZU5hbWVdICYmIHR5cGVvZiBpbnN0YW5jZVtlTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpbnN0YW5jZVtlTmFtZV0ocHJvcHNbdk5hbWVdKTtcbiAgICAgICAgICBzZXRTdGF0ZShwcm9wc1t2TmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICAgIH0sIFtpbnN0YW5jZSwgcHJvcHNbdk5hbWVdXSk7XG4gIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OWpiMjF0YjI0dmFHOXZhM011ZEhNaVhTd2libUZ0WlhNaU9sc2lkWE5sUldabVpXTjBJaXdpZFhObFUzUmhkR1VpTENKMWMyVlNaV1lpTENKMWMyVlRaWFJUZEdGMGRYTWlMQ0pwYm5OMFlXNWpaU0lzSW5CeWIzQnpJaXdpY0hKdmNITk9ZVzFsSWl3aVptOXlSV0ZqYUNJc0ltNWhiV1VpTENKbFRtRnRaU0lzSW5OMFlYUmxJaXdpYzJWMFUzUmhkR1VpTENKMWJtUmxabWx1WldRaUxDSnpkR0YwZFhNaUxDSm5aWFJUZEdGMGRYTWlMQ0p6WlhSVGRHRjBkWE1pTENKMWMyVldhWE5wWVdKc1pTSXNJblpwYzJsaFlteGxJaXdpYzJodmR5SXNJbWhwWkdVaUxDSjFjMlZRY21WMmFXOTFjeUlzSW5aaGJIVmxJaXdpY21WbUlpd2lZM1Z5Y21WdWRDSXNJblZ6WlVWMlpXNTBVSEp2Y0dWeWRHbGxjeUlzSW1WMlpXNTBUbUZ0WlNJc0luUjVjR1VpTENKbGRtVnVkRWhoYm1Sc1pTSXNJblJ2VEc5allXeGxURzkzWlhKRFlYTmxJaXdpY21Wd2JHRmpaU0lzSW05dUlpd2liMlptSWl3aWRYTmxVMlYwZEdsdVoxQnliM0JsY25ScFpYTWlMQ0oyVG1GdFpTSXNJbU5vWVhKQmRDSXNJblJ2VEc5M1pYSkRZWE5sSWl3aWMyeHBZMlVpWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxGTkJRVk5CTEZOQlFWUXNSVUZCYjBKRExGRkJRWEJDTEVWQlFUaENReXhOUVVFNVFpeFJRVUUwUXl4UFFVRTFRenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hQUVVGUExGTkJRVk5ETEZsQlFWUXNRMEZEVEVNc1VVRkVTeXhGUVVsTU8wRkJRVUVzVFVGR1FVTXNTMEZGUVN4MVJVRkdVU3hGUVVWU08wRkJRVUVzVFVGRVFVTXNVMEZEUVN4MVJVRkVjMElzUlVGRGRFSTdRVUZEUVVFc1JVRkJRVUVzVTBGQlV5eERRVUZEUXl4UFFVRldMRU5CUVd0Q0xGVkJRVU5ETEVsQlFVUXNSVUZCVlR0QlFVTXhRaXhSUVVGTlF5eExRVUZMTEVkQlFVZEVMRWxCUVdRc1EwRkVNRUlzUTBGRk1VSTdPMEZCUTBFc2IwSkJRVEJDVUN4UlFVRlJMRU5CUVVOSkxFdEJRVXNzUTBGQlEwa3NTMEZCUkN4RFFVRk9MRU5CUVd4RE8wRkJRVUU3UVVGQlFTeFJRVUZQUXl4TFFVRlFPMEZCUVVFc1VVRkJZME1zVVVGQlpDeHBRa0ZJTUVJc1EwRkpNVUk3T3p0QlFVTkJXQ3hKUVVGQlFTeFRRVUZUTEVOQlFVTXNXVUZCVFR0QlFVTmtMRlZCUVVsSkxGRkJRVkVzU1VGQlNVTXNTMEZCU3l4RFFVRkRTU3hMUVVGRUxFTkJRVXdzUzBGQmFVSkhMRk5CUVdwRExFVkJRVFJETzBGQlF6RkRMRmxCUVVsUUxFdEJRVXNzUTBGQlEwa3NTMEZCUkN4RFFVRk1MRXRCUVdsQ1F5eExRVUZ5UWl4RlFVRTBRanRCUVVNeFFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRVTFITEUxQlFVMHNSMEZCUjFRc1VVRkJVU3hEUVVGRFZTeFRRVUZVTEVWQlFXWTdRVUZEUVZZc1ZVRkJRVUVzVVVGQlVTeERRVUZEVnl4VFFVRlVMR2xEUVVGM1FrWXNUVUZCZUVJc01rSkJRV2xEU2l4TFFVRnFReXhGUVVGNVEwb3NTMEZCU3l4RFFVRkRTU3hMUVVGRUxFTkJRVGxETzBGQlEwRkZMRlZCUVVGQkxGRkJRVkVzUTBGQlEwNHNTMEZCU3l4RFFVRkRTU3hMUVVGRUxFTkJRVTRzUTBGQlVqdEJRVU5FTzBGQlEwWXNUMEZrWVN4RFFXVmtPenRCUVVORUxFdEJhRUpSTEVWQlowSk9MRU5CUVVOTUxGRkJRVVFzUlVGQlYwTXNTMEZCU3l4RFFVRkRTU3hMUVVGRUxFTkJRV2hDTEVOQmFFSk5MRU5CUVZRN1FVRnBRa1FzUjBGMFFrUTdRVUYxUWtRN1FVRkZSRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZEUVN4UFFVRlBMRk5CUVZOUExGZEJRVlFzUTBGQmRVVmFMRkZCUVhaRkxFVkJRVzlHWVN4UlFVRndSaXhGUVVGM1J6dEJRVU0zUnl4dFFrRkJNRUpvUWl4UlFVRlJMRU5CUVVOblFpeFJRVUZFTEVOQlFXeERPMEZCUVVFN1FVRkJRU3hOUVVGUFVDeExRVUZRTzBGQlFVRXNUVUZCWTBNc1VVRkJaRHM3UVVGRFFWZ3NSVUZCUVVFc1UwRkJVeXhEUVVGRExGbEJRVTA3UVVGRFpDeFJRVUZKU1N4UlFVRlJMRWxCUVVsaExGRkJRVkVzUzBGQlMwd3NVMEZCTjBJc1JVRkJkME03UVVGRGRFTXNWVUZCU1Vzc1VVRkJTaXhGUVVGak8wRkJRMXBpTEZGQlFVRkJMRkZCUVZFc1EwRkJRMk1zU1VGQlZDeEpRVUZwUW1Rc1VVRkJVU3hEUVVGRFl5eEpRVUZVTEVWQlFXcENPMEZCUTBRc1QwRkdSQ3hOUVVWUE8wRkJRMHhrTEZGQlFVRkJMRkZCUVZFc1EwRkJRMlVzU1VGQlZDeEpRVUZwUW1Zc1VVRkJVU3hEUVVGRFpTeEpRVUZVTEVWQlFXcENPMEZCUTBRN08wRkJRMFFzVlVGQlNVWXNVVUZCVVN4TFFVRkxVQ3hMUVVGcVFpeEZRVUYzUWp0QlFVTjBRa01zVVVGQlFVRXNVVUZCVVN4RFFVRkRUU3hSUVVGRUxFTkJRVkk3UVVGRFJEdEJRVU5HTEV0QlZtRXNRMEZYWkRzN1FVRkRSQ3hIUVZwUkxFVkJXVTRzUTBGQlEySXNVVUZCUkN4RlFVRlhZU3hSUVVGWUxFTkJXazBzUTBGQlZEdEJRV0ZFTzBGQlJVUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJRMEVzVDBGQlR5eFRRVUZUUnl4WFFVRlVMRU5CUVhkQ1F5eExRVUY0UWl4RlFVRnJRenRCUVVOMlF5eE5RVUZOUXl4SFFVRkhMRWRCUVVkd1FpeE5RVUZOTEVWQlFXeENPMEZCUTBGR0xFVkJRVUZCTEZOQlFWTXNRMEZCUXl4WlFVRk5PMEZCUTJSelFpeEpRVUZCUVN4SFFVRkhMRU5CUVVORExFOUJRVW9zUjBGQlkwWXNTMEZCWkR0QlFVTkVMRWRCUmxFc1EwRkJWRHRCUVVkQkxGTkJRVTlETEVkQlFVY3NRMEZCUTBNc1QwRkJXRHRCUVVORU96dEJRVWxFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1QwRkJUeXhUUVVGVFF5eHJRa0ZCVkN4RFFVTk1jRUlzVVVGRVN5eEZRVXRNTzBGQlFVRXNUVUZJUVVNc1MwRkhRU3gxUlVGSVVTeEZRVWRTTzBGQlFVRXNUVUZHUVc5Q0xGTkJSVUVzZFVWQlJuTkNMRVZCUlhSQ08wRkJRVUVzVFVGRVFVTXNTVUZEUVR0QlFVTkJSQ3hGUVVGQlFTeFRRVUZUTEVOQlFVTnNRaXhQUVVGV0xFTkJRV3RDTEZWQlFVTkRMRWxCUVVRc1JVRkJWVHRCUVVNeFFpeFJRVUZOYVVJc1UwRkJVeXhIUVVGSGFrSXNTVUZCYkVJN1FVRkRRU3hSUVVGTmJVSXNWMEZCVnl4SFFVRkhkRUlzUzBGQlN5eERRVUZEYjBJc1UwRkJSQ3hEUVVGNlFpeERRVVl3UWl4RFFVY3hRanM3UVVGRFFYcENMRWxCUVVGQkxGTkJRVk1zUTBGQlF5eFpRVUZOTzBGQlEyUXNWVUZCU1N4RFFVRkRTU3hSUVVGTUxFVkJRV1U3UVVGRFppeFZRVUZKU3l4TFFVRkxMRWRCUVVkRUxFbEJRVWtzUTBGQlEyOUNMR2xDUVVGTUxFZEJRWGxDUXl4UFFVRjZRaXhEUVVGcFF5eExRVUZxUXl4RlFVRjNReXhGUVVGNFF5eERRVUZhT3p0QlFVTkJMRlZCUVVsR0xGZEJRVmNzU1VGQlNXeENMRXRCUVc1Q0xFVkJRVEJDTzBGQlEzaENUQ3hSUVVGQlFTeFJRVUZSTEVOQlFVTXdRaXhGUVVGVUxFTkJRVmx5UWl4TFFVRmFMRVZCUVcxQ2EwSXNWMEZCYmtJN1FVRkRSRHM3UVVGRFJDeGhRVUZQTEZsQlFVMDdRVUZEV0N4WlFVRkpiRUlzUzBGQlN5eEpRVUZKYTBJc1YwRkJZaXhGUVVFd1FqdEJRVU40UW5aQ0xGVkJRVUZCTEZGQlFWRXNRMEZCUXpKQ0xFZEJRVlFzUTBGQllYUkNMRXRCUVdJc1JVRkJiMEpyUWl4WFFVRndRanRCUVVORU8wRkJRMFlzVDBGS1JDeERRVTVqTEVOQlYyUTdRVUZEUkN4TFFWcFJMRVZCV1U0c1EwRkJRM1pDTEZGQlFVUXNSVUZCVjBNc1MwRkJTeXhEUVVGRGIwSXNVMEZCUkN4RFFVRm9RaXhEUVZwTkxFTkJRVlE3UVVGaFJDeEhRV3BDUkR0QlFXdENSRHRCUVVWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZEUVN4UFFVRlBMRk5CUVZOUExHOUNRVUZVTEVkQlFYZEhPMEZCUVVFc1RVRkJMMFExUWl4UlFVRXJSQ3gxUlVGQmNFUXNSVUZCYjBRN1FVRkJRU3hOUVVFelEwTXNTMEZCTWtNc2RVVkJRVzVETEVWQlFXMURPMEZCUVVFc1RVRkJNVUpETEZOQlFUQkNMSFZGUVVGS0xFVkJRVWs3UVVGRE4wZEJMRVZCUVVGQkxGTkJRVk1zUTBGQlEwTXNUMEZCVml4RFFVRnJRaXhWUVVGRFF5eEpRVUZFTEVWQlFWVTdRVUZETVVJc1VVRkJUVU1zUzBGQlN5eG5Ra0ZCVTBRc1NVRkJWQ3hEUVVGWU8wRkJRMEVzVVVGQlRYbENMRXRCUVVzc1lVRkJUWHBDTEVsQlFVa3NRMEZCUXpCQ0xFMUJRVXdzUTBGQldTeERRVUZhTEVWQlFXVkRMRmRCUVdZc1JVRkJUaXhUUVVGeFF6TkNMRWxCUVVrc1EwRkJRelJDTEV0QlFVd3NRMEZCVnl4RFFVRllMRU5CUVhKRExFTkJRVmdzUTBGR01FSXNRMEZITVVJN08wRkJRMEVzY1VKQlFUQkNia01zVVVGQlVTeERRVUZEU1N4TFFVRkxMRU5CUVVNMFFpeExRVUZFTEVOQlFVNHNRMEZCYkVNN1FVRkJRVHRCUVVGQkxGRkJRVTkyUWl4TFFVRlFPMEZCUVVFc1VVRkJZME1zVVVGQlpDeHBRa0ZLTUVJc1EwRkxNVUk3T3p0QlFVTkJXQ3hKUVVGQlFTeFRRVUZUTEVOQlFVTXNXVUZCVFR0QlFVTmtMRlZCUVVsSkxGRkJRVkVzU1VGQlNVTXNTMEZCU3l4RFFVRkRORUlzUzBGQlJDeERRVUZNTEV0QlFXbENja0lzVTBGQmFrTXNSVUZCTkVNN1FVRkRNVU1zV1VGQlNWQXNTMEZCU3l4RFFVRkRORUlzUzBGQlJDeERRVUZNTEV0QlFXbENka0lzUzBGQmFrSXNTVUZCTUVKT0xGRkJRVkVzUTBGQlEwc3NTMEZCUkN4RFFVRnNReXhKUVVFMlF5eFBRVUZQVEN4UlFVRlJMRU5CUVVOTExFdEJRVVFzUTBGQlppeExRVUV5UWl4VlFVRTFSU3hGUVVGM1JqdEJRVU55Umt3c1ZVRkJRVUVzVVVGQlVTeERRVUZEU3l4TFFVRkVMRU5CUVZRc1EwRkJlVUpLTEV0QlFVc3NRMEZCUXpSQ0xFdEJRVVFzUTBGQk9VSTdRVUZEUVhSQ0xGVkJRVUZCTEZGQlFWRXNRMEZCUTA0c1MwRkJTeXhEUVVGRE5FSXNTMEZCUkN4RFFVRk9MRU5CUVZJN1FVRkRSRHRCUVVOR0xFOUJUbUVzUTBGUFpEczdRVUZEUkN4TFFWSlJMRVZCVVU0c1EwRkJRemRDTEZGQlFVUXNSVUZCVjBNc1MwRkJTeXhEUVVGRE5FSXNTMEZCUkN4RFFVRm9RaXhEUVZKTkxFTkJRVlE3UVVGVFJDeEhRV1pFTzBGQlowSkVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnZFhObFJXWm1aV04wTENCMWMyVlRkR0YwWlN3Z2RYTmxVbVZtSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1WEc0dktpcGNiaUFxSU9XdnVlV3VudVMraSthY2lTQnpaWFJUZEdGMGRYTWc1cHUwNXBTNTU0cTI1b0NCNTVxRTVhU0U1NUNHWEc0Z0tpQkFjR0Z5WVcwZ2FXNXpkR0Z1WTJWY2JpQXFJRUJ3WVhKaGJTQndjbTl3YzF4dUlDb2dRSEJoY21GdElIQnliM0J6VG1GdFpWeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZFhObFUyVjBVM1JoZEhWelBGUWdaWGgwWlc1a2N5QjdJR2RsZEZOMFlYUjFjem9nS0NrZ1BUNGdZVzU1T3lCelpYUlRkR0YwZFhNNklDaHZjSFE2SUdGdWVTa2dQVDRnZG05cFpDQjlMQ0JHSUQwZ2UzMCtLRnh1SUNCcGJuTjBZVzVqWlRvZ1ZDeGNiaUFnY0hKdmNITWdQU0I3ZlNCaGN5QkdMRnh1SUNCd2NtOXdjMDVoYldVNklITjBjbWx1WjF0ZElEMGdXMTBzWEc0cElIdGNiaUFnY0hKdmNITk9ZVzFsTG1admNrVmhZMmdvS0c1aGJXVXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmxUbUZ0WlNBOUlHNWhiV1VnWVhNZ2EyVjViMllnUmp0Y2JpQWdJQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzF1WlhoMExXeHBibVVnY21WaFkzUXRhRzl2YTNNdmNuVnNaWE10YjJZdGFHOXZhM05jYmlBZ0lDQmpiMjV6ZENCYmMzUmhkR1VzSUhObGRGTjBZWFJsWFNBOUlIVnpaVk4wWVhSbEtIQnliM0J6VzJWT1lXMWxYU2s3WEc0Z0lDQWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJSEpsWVdOMExXaHZiMnR6TDNKMWJHVnpMVzltTFdodmIydHpYRzRnSUNBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0FnSUdsbUlDaHBibk4wWVc1alpTQW1KaUJ3Y205d2MxdGxUbUZ0WlYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9jSEp2Y0hOYlpVNWhiV1ZkSUNFOVBTQnpkR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SUcxaGNDNXpaWFJUZEdGMGRYTW9lMXh1SUNBZ0lDQWdJQ0FnSUM4dklDQWdaSEpoWjBWdVlXSnNaVG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0F2THlBZ0lHdGxlV0p2WVhKa1JXNWhZbXhsT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0FnSUM4dklDQWdaRzkxWW14bFEyeHBZMnRhYjI5dE9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNBZ0lDOHZJQ0FnZW05dmJVVnVZV0pzWlRvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSUNBdkx5QWdJSEp2ZEdGMFpVVnVZV0pzWlRvZ2RISjFaVnh1SUNBZ0lDQWdJQ0FnSUM4dklIMHBPMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSE4wWVhSMWN5QTlJR2x1YzNSaGJtTmxMbWRsZEZOMFlYUjFjeWdwTzF4dUlDQWdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExuTmxkRk4wWVhSMWN5aDdJQzR1TG5OMFlYUjFjeXdnVzJWT1lXMWxYVG9nY0hKdmNITmJaVTVoYldWZElIMHBPMXh1SUNBZ0lDQWdJQ0FnSUhObGRGTjBZWFJsS0hCeWIzQnpXMlZPWVcxbFhTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMVzVsZUhRdGJHbHVaU0J5WldGamRDMW9iMjlyY3k5bGVHaGhkWE4wYVhabExXUmxjSE5jYmlBZ0lDQjlMQ0JiYVc1emRHRnVZMlVzSUhCeWIzQnpXMlZPWVcxbFhWMHBPMXh1SUNCOUtUdGNibjFjYmx4dUx5b3FYRzRnS2lEcGtvamxyN2tnVDNabGNteGhlU0Ruc2J2bG5vdm5tb1RudTRUa3U3YnZ2SXptbklubGhhemxoYkhubW9UbW1LL2xrS2JtbUw3bnBMb2c1YSs1NkxHaDVhU0U1NUNHWEc0Z0tpRHBnSnJvdjRmbGo0TG1sYkFnWUhacGMybGhZbXhsWUNEbW5hWG1qcWZsaUxibWlhZm9vWXdnWUhOb2IzY29LV0FnYjNJZ1lHaHBaR1VvS1dCY2JpQXFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSFZ6WlZacGMybGhZbXhsUEZRZ1pYaDBaVzVrY3lCN0lITm9iM2M2SUNncElEMCtJSFp2YVdRN0lHaHBaR1U2SUNncElEMCtJSFp2YVdRZ2ZUNG9hVzV6ZEdGdVkyVTZJRlFzSUhacGMybGhZbXhsUHpvZ1ltOXZiR1ZoYmlrZ2UxeHVJQ0JqYjI1emRDQmJjM1JoZEdVc0lITmxkRk4wWVhSbFhTQTlJSFZ6WlZOMFlYUmxLSFpwYzJsaFlteGxLVHRjYmlBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0JwWmlBb2FXNXpkR0Z1WTJVZ0ppWWdkbWx6YVdGaWJHVWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ2FXWWdLSFpwYzJsaFlteGxLU0I3WEc0Z0lDQWdJQ0FnSUdsdWMzUmhibU5sTG5Ob2IzY2dKaVlnYVc1emRHRnVZMlV1YzJodmR5Z3BPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdhVzV6ZEdGdVkyVXVhR2xrWlNBbUppQnBibk4wWVc1alpTNW9hV1JsS0NrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCcFppQW9kbWx6YVdGaWJHVWdJVDA5SUhOMFlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUhObGRGTjBZWFJsS0hacGMybGhZbXhsS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJSEpsWVdOMExXaHZiMnR6TDJWNGFHRjFjM1JwZG1VdFpHVndjMXh1SUNCOUxDQmJhVzV6ZEdGdVkyVXNJSFpwYzJsaFlteGxYU2s3WEc1OVhHNWNiaThxS2x4dUlDb2c2STYzNVkrVzVMaUs1TGlBNkwydTU1cUVJSEJ5YjNCeklPYUlsaUJ6ZEdGMFpWeHVJQ29nU0c5M0lIUnZJR2RsZENCMGFHVWdjSEpsZG1sdmRYTWdjSEp2Y0hNZ2IzSWdjM1JoZEdVL1hHNGdLaUJvZEhSd2N6b3ZMM0psWVdOMGFuTXViM0puTDJSdlkzTXZhRzl2YTNNdFptRnhMbWgwYld3amFHOTNMWFJ2TFdkbGRDMTBhR1V0Y0hKbGRtbHZkWE10Y0hKdmNITXRiM0l0YzNSaGRHVmNiaUFxSUVCbGVHRnRjR3hsWEc0Z0tpQmdZR0JxYzF4dUlDb2dablZ1WTNScGIyNGdRMjkxYm5SbGNpZ3BJSHRjYmlBcUlDQWdZMjl1YzNRZ1cyTnZkVzUwTENCelpYUkRiM1Z1ZEYwZ1BTQjFjMlZUZEdGMFpTZ3dLVHRjYmlBcUlDQWdZMjl1YzNRZ2NISmxka052ZFc1MElEMGdkWE5sVUhKbGRtbHZkWE1vWTI5MWJuUXBPMXh1SUNvZ0lDQnlaWFIxY200Z1BHZ3hQazV2ZHpvZ2UyTnZkVzUwZlN3Z1ltVm1iM0psT2lCN2NISmxka052ZFc1MGZUd3ZhREUrTzF4dUlDb2dmVnh1SUNvZ1lHQmdYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCMWMyVlFjbVYyYVc5MWN6eFVQaWgyWVd4MVpUb2dWQ2tnZTF4dUlDQmpiMjV6ZENCeVpXWWdQU0IxYzJWU1pXWThWRDRvS1R0Y2JpQWdkWE5sUldabVpXTjBLQ2dwSUQwK0lIdGNiaUFnSUNCeVpXWXVZM1Z5Y21WdWRDQTlJSFpoYkhWbE8xeHVJQ0I5S1R0Y2JpQWdjbVYwZFhKdUlISmxaaTVqZFhKeVpXNTBPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ2RIbHdaU0JGZG1WdWRFNWhiV1ZVZVhCbElEMGdKMHh2ZDJWeVEyRnpaU2M3WEc1Y2JpOHFLbHh1SUNvZzU3dVI1YTZhNUxxTDVMdTJYRzRnS2lCQWNHRnlZVzBnYVc1emRHRnVZMlVnNWE2ZTVMNkw1YSs1NkxHaFhHNGdLaUJBY0dGeVlXMGdjSEp2Y0hNZzVMeWc2WUNTNkwrYjVwMmw1NXFFSUhCeWIzQnpYRzRnS2lCQWNHRnlZVzBnWlhabGJuUk9ZVzFsSU9TNmkrUzd0dWVhaE9XUWplV3RsKys4ak9XbWd1KzhqT2FJa2VTN3JPUzl2K2VVcUNCZ2IyNURiR2xqYTJBZzVMcUw1THUyNzd5TTVweUE1N3VJNktLcjZMMnM1bzJpNW9pUTc3eU1ZR05zYVdOcllDRG51NUhscnBybGlMRGxycDdrdm92a3VLM3Z2SXhnYjI1RVlteERiR2xqYTJBZ1BUNGdZR1JpYkdOc2FXTnJZRnh1SUNwY2JpQXFJRUJsZUdGdGNHeGxYRzRnS2lCZ1lHQnFjMXh1SUNvZ2RYTmxSWFpsYm5SUWNtOXdaWEowYVdWelBFSk5ZWEF1VFdGeWEyVnlMQ0JWYzJWTllYSnJaWEkrS0cxaGNtdGxjaUVzSUhCeWIzQnpMQ0JiWEc0Z0tpQWdJQ2R2YmsxdmRYTmxUVzkyWlNjc0lDZHZibHB2YjIxRGFHRnVaMlVuTENBbmIyNU5ZWEJOYjNabEp5d2dKMjl1VFc5MWMyVlhhR1ZsYkNjc0lDZHZibHB2YjIxVGRHRnlkQ2RjYmlBcUlGMHBPMXh1SUNvZ1lHQmdYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCMWMyVkZkbVZ1ZEZCeWIzQmxjblJwWlhNOFZDQmxlSFJsYm1SeklFRk5ZWEF1VFdGd1JYWmxiblJNYVhOMFpXNWxjanhoYm5rK0xDQkdQaWhjYmlBZ2FXNXpkR0Z1WTJVNklGUXNYRzRnSUhCeWIzQnpJRDBnZTMwZ1lYTWdSaXhjYmlBZ1pYWmxiblJPWVcxbE9pQnpkSEpwYm1kYlhTQTlJRnRkTEZ4dUlDQjBlWEJsUHpvZ1JYWmxiblJPWVcxbFZIbHdaU3hjYmlrZ2UxeHVJQ0JsZG1WdWRFNWhiV1V1Wm05eVJXRmphQ2dvYm1GdFpTa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHVjJaVzUwVG1GdFpTQTlJRzVoYldVZ1lYTWdhMlY1YjJZZ1JqdGNiaUFnSUNCamIyNXpkQ0JsZG1WdWRFaGhibVJzWlNBOUlIQnliM0J6VzJWMlpXNTBUbUZ0WlYwN1hHNGdJQ0FnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0Ym1WNGRDMXNhVzVsSUhKbFlXTjBMV2h2YjJ0ekwzSjFiR1Z6TFc5bUxXaHZiMnR6WEc0Z0lDQWdkWE5sUldabVpXTjBLQ2dwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2doYVc1emRHRnVZMlVwSUhKbGRIVnlianRjYmlBZ0lDQWdJR3hsZENCbFRtRnRaU0E5SUc1aGJXVXVkRzlNYjJOaGJHVk1iM2RsY2tOaGMyVW9LUzV5WlhCc1lXTmxLQzllYjI0dkxDQW5KeWs3WEc0Z0lDQWdJQ0JwWmlBb1pYWmxiblJJWVc1a2JHVWdKaVlnWlU1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnYVc1emRHRnVZMlV1YjI0b1pVNWhiV1VzSUdWMlpXNTBTR0Z1Wkd4bEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lISmxkSFZ5YmlBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdsbUlDaGxUbUZ0WlNBbUppQmxkbVZ1ZEVoaGJtUnNaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExtOW1aaWhsVG1GdFpTd2daWFpsYm5SSVlXNWtiR1VwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElISmxZV04wTFdodmIydHpMMlY0YUdGMWMzUnBkbVV0WkdWd2MxeHVJQ0FnSUgwc0lGdHBibk4wWVc1alpTd2djSEp2Y0hOYlpYWmxiblJPWVcxbFhWMHBPMXh1SUNCOUtUdGNibjFjYmx4dUx5b3FYRzRnS2lEbHNaN21nS2ZsajVmbWpxZGNiaUFxSUVCd1lYSmhiU0JwYm5OMFlXNWpaU0RscnA3a3ZvdmxyN25vc2FGY2JpQXFJRUJ3WVhKaGJTQndjbTl3Y3lEbHNaN21nS2ZsZ0x4Y2JpQXFJRUJ3WVhKaGJTQndjbTl3YzA1aGJXVWc1YVNhNUxpcTViR2U1b0NuNks2KzU3MnU1NXFFNVpDTjU2ZXdYRzRnS2lCQVpYaGhiWEJzWlZ4dUlDb2dZR0JnZEhOY2JpQXFJSFZ6WlZObGRIUnBibWRRY205d1pYSjBhV1Z6UEVGTllYQXVVRzlzZVd4cGJtVXNJRlZ6WlZCdmJIbHNhVzVsUGlod2IyeDViR2x1WlNFc0lIQnliM0J6TENCYlhHNGdLaUFnSUNBblVHRjBhQ2RjYmlBcUlGMHBPMXh1SUNvZ1lHQmdYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCMWMyVlRaWFIwYVc1blVISnZjR1Z5ZEdsbGN6eFVMQ0JHSUQwZ2UzMCtLR2x1YzNSaGJtTmxJRDBnZTMwZ1lYTWdWQ3dnY0hKdmNITWdQU0I3ZlNCaGN5QkdMQ0J3Y205d2MwNWhiV1U2SUhOMGNtbHVaMXRkSUQwZ1cxMHBJSHRjYmlBZ2NISnZjSE5PWVcxbExtWnZja1ZoWTJnb0tHNWhiV1VwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0JsVG1GdFpTQTlJR0J6WlhRa2UyNWhiV1Y5WUNCaGN5QnJaWGx2WmlCVU8xeHVJQ0FnSUdOdmJuTjBJSFpPWVcxbElEMGdZQ1I3Ym1GdFpTNWphR0Z5UVhRb01Da3VkRzlNYjNkbGNrTmhjMlVvS1gwa2UyNWhiV1V1YzJ4cFkyVW9NU2w5WUNCaGN5QnJaWGx2WmlCR08xeHVJQ0FnSUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFc1bGVIUXRiR2x1WlNCeVpXRmpkQzFvYjI5cmN5OXlkV3hsY3kxdlppMW9iMjlyYzF4dUlDQWdJR052Ym5OMElGdHpkR0YwWlN3Z2MyVjBVM1JoZEdWZElEMGdkWE5sVTNSaGRHVW9jSEp2Y0hOYmRrNWhiV1ZkS1R0Y2JpQWdJQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzF1WlhoMExXeHBibVVnY21WaFkzUXRhRzl2YTNNdmNuVnNaWE10YjJZdGFHOXZhM05jYmlBZ0lDQjFjMlZGWm1abFkzUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ2FXWWdLR2x1YzNSaGJtTmxJQ1ltSUhCeWIzQnpXM1pPWVcxbFhTQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2MxdDJUbUZ0WlYwZ0lUMDlJSE4wWVhSbElDWW1JR2x1YzNSaGJtTmxXMlZPWVcxbFhTQW1KaUIwZVhCbGIyWWdhVzV6ZEdGdVkyVmJaVTVoYldWZElEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdLR2x1YzNSaGJtTmxXMlZPWVcxbFhTQmhjeUJoYm5rcEtIQnliM0J6VzNaT1lXMWxYU2s3WEc0Z0lDQWdJQ0FnSUNBZ2MyVjBVM1JoZEdVb2NISnZjSE5iZGs1aGJXVmRLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0Ym1WNGRDMXNhVzVsSUhKbFlXTjBMV2h2YjJ0ekwyVjRhR0YxYzNScGRtVXRaR1Z3YzF4dUlDQWdJSDBzSUZ0cGJuTjBZVzVqWlN3Z2NISnZjSE5iZGs1aGJXVmRYU2s3WEc0Z0lIMHBPMXh1ZlZ4dUlsMTkiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZXRTdGF0dXMsIHVzZUV2ZW50UHJvcGVydGllcywgdXNlU2V0dGluZ1Byb3BlcnRpZXMgfSBmcm9tICcuLi9jb21tb24vaG9va3MnO1xuZXhwb3J0IHZhciB1c2VNYXAgPSBmdW5jdGlvbiB1c2VNYXAoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIG90aGVyID0gX2V4dGVuZHMoe30sIHByb3BzKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgbWFwID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldE1hcCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShwcm9wcy56b29tIHx8IDE1KSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIHpvb20gPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0Wm9vbSA9IF91c2VTdGF0ZTRbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZShwcm9wcy5jb250YWluZXIpLFxuICAgICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgICAgY29udGFpbmVyID0gX3VzZVN0YXRlNlswXSxcbiAgICAgIHNldENvbnRhaW5lciA9IF91c2VTdGF0ZTZbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5zdGFuY2U7XG5cbiAgICBpZiAoY29udGFpbmVyICYmICFtYXAgJiYgQU1hcCkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgQU1hcC5NYXAoY29udGFpbmVyLCBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgem9vbTogem9vbVxuICAgICAgfSwgb3RoZXIpKTtcbiAgICAgIHNldE1hcChpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBzZXRNYXAodW5kZWZpbmVkKTsgLy8gaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtjb250YWluZXJdKTtcbiAgdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG1hcCAmJiB0eXBlb2YgcHJvcHMuem9vbSA9PT0gJ251bWJlcicgJiYgem9vbSAhPT0gcHJvcHMuem9vbSAmJiBwcm9wcy56b29tID49IDIgJiYgcHJvcHMuem9vbSA8PSAyMCkge1xuICAgICAgc2V0Wm9vbShwcm9wcy56b29tKTtcbiAgICAgIG1hcC5zZXRab29tKHByb3BzLnpvb20pO1xuICAgIH1cbiAgfSwgW3pvb20sIHByb3BzLnpvb21dKTtcbiAgdXNlU2V0U3RhdHVzKG1hcCwgcHJvcHMsIFsnZHJhZ0VuYWJsZScsICd6b29tRW5hYmxlJywgJ2pvZ0VuYWJsZScsICdwaXRjaEVuYWJsZScsICdyb3RhdGVFbmFibGUnLCAnYW5pbWF0ZUVuYWJsZScsICdrZXlib2FyZEVuYWJsZSddKTsgLy8gc2V0U3RhdHVzLCBzZXRab29tQW5kQ2VudGVyLCBzZXRGaXRWaWV3XG5cbiAgdXNlU2V0dGluZ1Byb3BlcnRpZXMobWFwLCBwcm9wcywgWydab29tJywgJ0xhYmVsekluZGV4JywgJ0xheWVycycsICdDZW50ZXInLCAnQ2l0eScsICdCb3VuZHMnLCAnTGltaXRCb3VuZHMnLCAnTGFuZycsICdSb3RhdGlvbicsICdEZWZhdWx0Q3Vyc29yJywgJ01hcFN0eWxlJywgJ0ZlYXR1cmVzJywgJ0RlZmF1bHRMYXllcicsICdQaXRjaCddKTtcbiAgdXNlRXZlbnRQcm9wZXJ0aWVzKG1hcCwgcHJvcHMsIFsnb25Nb3VzZU1vdmUnLCAnb25ab29tQ2hhbmdlJywgJ29uTWFwTW92ZScsICdvbk1vdXNlV2hlZWwnLCAnb25ab29tU3RhcnQnLCAnb25Nb3VzZU92ZXInLCAnb25Nb3VzZU91dCcsICdvbkRibENsaWNrJywgJ29uQ2xpY2snLCAnb25ab29tRW5kJywgJ29uTW92ZUVuZCcsICdvbk1vdXNlVXAnLCAnb25Nb3VzZURvd24nLCAnb25SaWdodENsaWNrJywgJ29uTW92ZVN0YXJ0JywgJ29uRHJhZ1N0YXJ0JywgJ29uRHJhZ2dpbmcnLCAnb25EcmFnRW5kJywgJ29uSG90c3BvdE91dCcsICdvbkhvdHNwb3RPdmVyJywgJ29uVG91Y2hTdGFydCcsICdvbkNvbXBsZXRlJywgJ29uSG90c3BvdENsaWNrJywgJ29uVG91Y2hNb3ZlJywgJ29uVG91Y2hFbmQnLCAnb25SZXNpemUnXSk7XG4gIHJldHVybiB7XG4gICAgbWFwOiBtYXAsXG4gICAgc2V0TWFwOiBzZXRNYXAsXG4gICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgc2V0Q29udGFpbmVyOiBzZXRDb250YWluZXJcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5TllYQXZkWE5sVFdGd0xuUnplQ0pkTENKdVlXMWxjeUk2V3lKMWMyVlRkR0YwWlNJc0luVnpaVTFsYlc4aUxDSjFjMlZGWm1abFkzUWlMQ0oxYzJWVFpYUlRkR0YwZFhNaUxDSjFjMlZGZG1WdWRGQnliM0JsY25ScFpYTWlMQ0oxYzJWVFpYUjBhVzVuVUhKdmNHVnlkR2xsY3lJc0luVnpaVTFoY0NJc0luQnliM0J6SWl3aWIzUm9aWElpTENKdFlYQWlMQ0p6WlhSTllYQWlMQ0o2YjI5dElpd2ljMlYwV205dmJTSXNJbU52Ym5SaGFXNWxjaUlzSW5ObGRFTnZiblJoYVc1bGNpSXNJbWx1YzNSaGJtTmxJaXdpUVUxaGNDSXNJazFoY0NJc0luVnVaR1ZtYVc1bFpDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzVTBGQlUwRXNVVUZCVkN4RlFVRnRRa01zVDBGQmJrSXNSVUZCTkVKRExGTkJRVFZDTEZGQlFUWkRMRTlCUVRkRE8wRkJSMEVzVTBGQlUwTXNXVUZCVkN4RlFVRjFRa01zYTBKQlFYWkNMRVZCUVRKRFF5eHZRa0ZCTTBNc1VVRkJkVVVzYVVKQlFYWkZPMEZCVTBFc1QwRkJUeXhKUVVGTlF5eE5RVUZOTEVkQlFVY3NVMEZCVkVFc1RVRkJVeXhIUVVGM1FqdEJRVUZCTEUxQlFYWkNReXhMUVVGMVFpeDFSVUZCVUN4RlFVRlBPenRCUVVNMVF5eE5RVUZYUXl4TFFVRllMR2RDUVVGeFFrUXNTMEZCY2tJN08wRkJRMEVzYTBKQlFYTkNVQ3hSUVVGUkxFVkJRVGxDTzBGQlFVRTdRVUZCUVN4TlFVRlBVeXhIUVVGUU8wRkJRVUVzVFVGQldVTXNUVUZCV2pzN1FVRkRRU3h0UWtGQmQwSldMRkZCUVZFc1EwRkJRMDhzUzBGQlN5eERRVUZEU1N4SlFVRk9MRWxCUVdNc1JVRkJaaXhEUVVGb1F6dEJRVUZCTzBGQlFVRXNUVUZCVDBFc1NVRkJVRHRCUVVGQkxFMUJRV0ZETEU5QlFXSTdPMEZCUTBFc2JVSkJRV3REV2l4UlFVRlJMRU5CUVVOUExFdEJRVXNzUTBGQlEwMHNVMEZCVUN4RFFVRXhRenRCUVVGQk8wRkJRVUVzVFVGQlQwRXNVMEZCVUR0QlFVRkJMRTFCUVd0Q1F5eFpRVUZzUWpzN1FVRkRRVm9zUlVGQlFVRXNVMEZCVXl4RFFVRkRMRmxCUVUwN1FVRkRaQ3hSUVVGSllTeFJRVUZLT3p0QlFVTkJMRkZCUVVsR0xGTkJRVk1zU1VGQlNTeERRVUZEU2l4SFFVRmtMRWxCUVhGQ1R5eEpRVUY2UWl4RlFVRXJRanRCUVVNM1FrUXNUVUZCUVVFc1VVRkJVU3hIUVVGSExFbEJRVWxETEVsQlFVa3NRMEZCUTBNc1IwRkJWQ3hEUVVGaFNpeFRRVUZpTzBGQlFUQkNSaXhSUVVGQlFTeEpRVUZKTEVWQlFVcEJPMEZCUVRGQ0xGTkJRVzFEU0N4TFFVRnVReXhGUVVGWU8wRkJRMEZGTEUxQlFVRkJMRTFCUVUwc1EwRkJRMHNzVVVGQlJDeERRVUZPTzBGQlEwUTdPMEZCUTBRc1YwRkJUeXhaUVVGTk8wRkJRMWdzVlVGQlNVRXNVVUZCU2l4RlFVRmpPMEZCUTFwTUxGRkJRVUZCTEUxQlFVMHNRMEZCUTFFc1UwRkJSQ3hEUVVGT0xFTkJSRmtzUTBGRldqdEJRVU5FTzBGQlEwWXNTMEZNUkR0QlFVMUVMRWRCV2xFc1JVRlpUaXhEUVVGRFRDeFRRVUZFTEVOQldrMHNRMEZCVkR0QlFXTkJXaXhGUVVGQlFTeFBRVUZQTEVOQlFVTXNXVUZCVFR0QlFVTmFMRkZCUVVsUkxFZEJRVWNzU1VGQlNTeFBRVUZQUml4TFFVRkxMRU5CUVVOSkxFbEJRV0lzUzBGQmMwSXNVVUZCTjBJc1NVRkJlVU5CTEVsQlFVa3NTMEZCUzBvc1MwRkJTeXhEUVVGRFNTeEpRVUY0UkN4SlFVRm5SVW9zUzBGQlN5eERRVUZEU1N4SlFVRk9MRWxCUVdNc1EwRkJPVVVzU1VGQmJVWktMRXRCUVVzc1EwRkJRMGtzU1VGQlRpeEpRVUZqTEVWQlFYSkhMRVZCUVhsSE8wRkJRM1pIUXl4TlFVRkJRU3hQUVVGUExFTkJRVU5NTEV0QlFVc3NRMEZCUTBrc1NVRkJVQ3hEUVVGUU8wRkJRMEZHTEUxQlFVRkJMRWRCUVVjc1EwRkJRMGNzVDBGQlNpeERRVUZaVEN4TFFVRkxMRU5CUVVOSkxFbEJRV3hDTzBGQlEwUTdRVUZEUml4SFFVeE5MRVZCUzBvc1EwRkJRMEVzU1VGQlJDeEZRVUZQU2l4TFFVRkxMRU5CUVVOSkxFbEJRV0lzUTBGTVNTeERRVUZRTzBGQlQwRlNMRVZCUVVGQkxGbEJRVmtzUTBGQmJVSk5MRWRCUVc1Q0xFVkJRWGxDUml4TFFVRjZRaXhGUVVGblF5eERRVU14UXl4WlFVUXdReXhGUVVVeFF5eFpRVVl3UXl4RlFVY3hReXhYUVVnd1F5eEZRVWt4UXl4aFFVb3dReXhGUVVzeFF5eGpRVXd3UXl4RlFVMHhReXhsUVU0d1F5eEZRVTh4UXl4blFrRlFNRU1zUTBGQmFFTXNRMEZCV2l4RFFURkNORU1zUTBGdFF6VkRPenRCUVVOQlJpeEZRVUZCUVN4dlFrRkJiMElzUTBGQmJVSkpMRWRCUVc1Q0xFVkJRWGxDUml4TFFVRjZRaXhGUVVGblF5eERRVU5zUkN4TlFVUnJSQ3hGUVVWc1JDeGhRVVpyUkN4RlFVZHNSQ3hSUVVoclJDeEZRVWxzUkN4UlFVcHJSQ3hGUVV0c1JDeE5RVXhyUkN4RlFVMXNSQ3hSUVU1clJDeEZRVTlzUkN4aFFWQnJSQ3hGUVZGc1JDeE5RVkpyUkN4RlFWTnNSQ3hWUVZSclJDeEZRVlZzUkN4bFFWWnJSQ3hGUVZkc1JDeFZRVmhyUkN4RlFWbHNSQ3hWUVZwclJDeEZRV0ZzUkN4alFXSnJSQ3hGUVdOc1JDeFBRV1JyUkN4RFFVRm9ReXhEUVVGd1FqdEJRV2RDUVVnc1JVRkJRVUVzYTBKQlFXdENMRU5CUVcxQ1N5eEhRVUZ1UWl4RlFVRjVRa1lzUzBGQmVrSXNSVUZCWjBNc1EwRkRhRVFzWVVGRVowUXNSVUZGYUVRc1kwRkdaMFFzUlVGSGFFUXNWMEZJWjBRc1JVRkphRVFzWTBGS1owUXNSVUZMYUVRc1lVRk1aMFFzUlVGTmFFUXNZVUZPWjBRc1JVRlBhRVFzV1VGUVowUXNSVUZSYUVRc1dVRlNaMFFzUlVGVGFFUXNVMEZVWjBRc1JVRlZhRVFzVjBGV1owUXNSVUZYYUVRc1YwRllaMFFzUlVGWmFFUXNWMEZhWjBRc1JVRmhhRVFzWVVGaVowUXNSVUZqYUVRc1kwRmtaMFFzUlVGbGFFUXNZVUZtWjBRc1JVRm5RbWhFTEdGQmFFSm5SQ3hGUVdsQ2FFUXNXVUZxUW1kRUxFVkJhMEpvUkN4WFFXeENaMFFzUlVGdFFtaEVMR05CYmtKblJDeEZRVzlDYUVRc1pVRndRbWRFTEVWQmNVSm9SQ3hqUVhKQ1owUXNSVUZ6UW1oRUxGbEJkRUpuUkN4RlFYVkNhRVFzWjBKQmRrSm5SQ3hGUVhkQ2FFUXNZVUY0UW1kRUxFVkJlVUpvUkN4WlFYcENaMFFzUlVFd1FtaEVMRlZCTVVKblJDeERRVUZvUXl4RFFVRnNRanRCUVRSQ1FTeFRRVUZQTzBGQlEweEZMRWxCUVVGQkxFZEJRVWNzUlVGQlNFRXNSMEZFU3p0QlFVVk1ReXhKUVVGQlFTeE5RVUZOTEVWQlFVNUJMRTFCUmtzN1FVRkhURWNzU1VGQlFVRXNVMEZCVXl4RlFVRlVRU3hUUVVoTE8wRkJTVXhETEVsQlFVRkJMRmxCUVZrc1JVRkJXa0U3UVVGS1N5eEhRVUZRTzBGQlRVUXNRMEYwUmswaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QjFjMlZUZEdGMFpTd2dkWE5sVFdWdGJ5d2dkWE5sUldabVpXTjBJSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dUV0Z3VUhKdmNITWdmU0JtY205dElDY3VMeWM3WEc1cGJYQnZjblFnZXlCTllYQkRhR2xzWkZCeWIzQnpJSDBnWm5KdmJTQW5MaTR2WTI5dGJXOXVMMjFoY0NjN1hHNXBiWEJ2Y25RZ2V5QjFjMlZUWlhSVGRHRjBkWE1zSUhWelpVVjJaVzUwVUhKdmNHVnlkR2xsY3l3Z2RYTmxVMlYwZEdsdVoxQnliM0JsY25ScFpYTWdmU0JtY205dElDY3VMaTlqYjIxdGIyNHZhRzl2YTNNbk8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRlZ6WlUxaGNDQmxlSFJsYm1SeklFMWhjRkJ5YjNCekxDQk5ZWEJEYUdsc1pGQnliM0J6SUh0Y2JpQWdMeW9xWEc0Z0lDQXFJT2FNaCtXdW11ZWFoT1d1dWVXWnFGeHVJQ0FnS2k5Y2JpQWdZMjl1ZEdGcGJtVnlQem9nU0ZSTlRFUnBka1ZzWlcxbGJuUWdmQ0J1ZFd4c08xeHVmVnh1WEc1bGVIQnZjblFnWTI5dWMzUWdkWE5sVFdGd0lEMGdLSEJ5YjNCek9pQlZjMlZOWVhBZ1BTQjdmU2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJQzR1TG05MGFHVnlJSDBnUFNCd2NtOXdjenRjYmlBZ1kyOXVjM1FnVzIxaGNDd2djMlYwVFdGd1hTQTlJSFZ6WlZOMFlYUmxQRUZOWVhBdVRXRndQaWdwTzF4dUlDQmpiMjV6ZENCYmVtOXZiU3dnYzJWMFdtOXZiVjBnUFNCMWMyVlRkR0YwWlNod2NtOXdjeTU2YjI5dElIeDhJREUxS1R0Y2JpQWdZMjl1YzNRZ1cyTnZiblJoYVc1bGNpd2djMlYwUTI5dWRHRnBibVZ5WFNBOUlIVnpaVk4wWVhSbEtIQnliM0J6TG1OdmJuUmhhVzVsY2lrN1hHNGdJSFZ6WlVWbVptVmpkQ2dvS1NBOVBpQjdYRzRnSUNBZ2JHVjBJR2x1YzNSaGJtTmxPaUJCVFdGd0xrMWhjRHRjYmlBZ0lDQnBaaUFvWTI5dWRHRnBibVZ5SUNZbUlDRnRZWEFnSmlZZ1FVMWhjQ2tnZTF4dUlDQWdJQ0FnYVc1emRHRnVZMlVnUFNCdVpYY2dRVTFoY0M1TllYQW9ZMjl1ZEdGcGJtVnlMQ0I3SUhwdmIyMHNJQzR1TG05MGFHVnlJSDBwTzF4dUlDQWdJQ0FnYzJWMFRXRndLR2x1YzNSaGJtTmxLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUNncElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNocGJuTjBZVzVqWlNrZ2UxeHVJQ0FnSUNBZ0lDQnpaWFJOWVhBb2RXNWtaV1pwYm1Wa0tUdGNiaUFnSUNBZ0lDQWdMeThnYVc1emRHRnVZMlV1WkdWemRISnZlU2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lIMHNJRnRqYjI1MFlXbHVaWEpkS1R0Y2JseHVJQ0IxYzJWTlpXMXZLQ2dwSUQwK0lIdGNiaUFnSUNCcFppQW9iV0Z3SUNZbUlIUjVjR1Z2WmlCd2NtOXdjeTU2YjI5dElEMDlQU0FuYm5WdFltVnlKeUFtSmlCNmIyOXRJQ0U5UFNCd2NtOXdjeTU2YjI5dElDWW1JSEJ5YjNCekxucHZiMjBnUGowZ01pQW1KaUJ3Y205d2N5NTZiMjl0SUR3OUlESXdLU0I3WEc0Z0lDQWdJQ0J6WlhSYWIyOXRLSEJ5YjNCekxucHZiMjBwTzF4dUlDQWdJQ0FnYldGd0xuTmxkRnB2YjIwb2NISnZjSE11ZW05dmJTazdYRzRnSUNBZ2ZWeHVJQ0I5TENCYmVtOXZiU3dnY0hKdmNITXVlbTl2YlYwcE8xeHVYRzRnSUhWelpWTmxkRk4wWVhSMWN6eEJUV0Z3TGsxaGNDd2dWWE5sVFdGd1BpaHRZWEFoTENCd2NtOXdjeXdnVzF4dUlDQWdJQ2RrY21GblJXNWhZbXhsSnl4Y2JpQWdJQ0FuZW05dmJVVnVZV0pzWlNjc1hHNGdJQ0FnSjJwdlowVnVZV0pzWlNjc1hHNGdJQ0FnSjNCcGRHTm9SVzVoWW14bEp5eGNiaUFnSUNBbmNtOTBZWFJsUlc1aFlteGxKeXhjYmlBZ0lDQW5ZVzVwYldGMFpVVnVZV0pzWlNjc1hHNGdJQ0FnSjJ0bGVXSnZZWEprUlc1aFlteGxKeXhjYmlBZ1hTazdYRzRnSUM4dklITmxkRk4wWVhSMWN5d2djMlYwV205dmJVRnVaRU5sYm5SbGNpd2djMlYwUm1sMFZtbGxkMXh1SUNCMWMyVlRaWFIwYVc1blVISnZjR1Z5ZEdsbGN6eEJUV0Z3TGsxaGNDd2dWWE5sVFdGd1BpaHRZWEFoTENCd2NtOXdjeXdnVzF4dUlDQWdJQ2RhYjI5dEp5eGNiaUFnSUNBblRHRmlaV3g2U1c1a1pYZ25MRnh1SUNBZ0lDZE1ZWGxsY25NbkxGeHVJQ0FnSUNkRFpXNTBaWEluTEZ4dUlDQWdJQ2REYVhSNUp5eGNiaUFnSUNBblFtOTFibVJ6Snl4Y2JpQWdJQ0FuVEdsdGFYUkNiM1Z1WkhNbkxGeHVJQ0FnSUNkTVlXNW5KeXhjYmlBZ0lDQW5VbTkwWVhScGIyNG5MRnh1SUNBZ0lDZEVaV1poZFd4MFEzVnljMjl5Snl4Y2JpQWdJQ0FuVFdGd1UzUjViR1VuTEZ4dUlDQWdJQ2RHWldGMGRYSmxjeWNzWEc0Z0lDQWdKMFJsWm1GMWJIUk1ZWGxsY2ljc1hHNGdJQ0FnSjFCcGRHTm9KeXhjYmlBZ1hTazdYRzRnSUhWelpVVjJaVzUwVUhKdmNHVnlkR2xsY3p4QlRXRndMazFoY0N3Z1ZYTmxUV0Z3UGlodFlYQWhMQ0J3Y205d2N5d2dXMXh1SUNBZ0lDZHZiazF2ZFhObFRXOTJaU2NzWEc0Z0lDQWdKMjl1V205dmJVTm9ZVzVuWlNjc1hHNGdJQ0FnSjI5dVRXRndUVzkyWlNjc1hHNGdJQ0FnSjI5dVRXOTFjMlZYYUdWbGJDY3NYRzRnSUNBZ0oyOXVXbTl2YlZOMFlYSjBKeXhjYmlBZ0lDQW5iMjVOYjNWelpVOTJaWEluTEZ4dUlDQWdJQ2R2YmsxdmRYTmxUM1YwSnl4Y2JpQWdJQ0FuYjI1RVlteERiR2xqYXljc1hHNGdJQ0FnSjI5dVEyeHBZMnNuTEZ4dUlDQWdJQ2R2YmxwdmIyMUZibVFuTEZ4dUlDQWdJQ2R2YmsxdmRtVkZibVFuTEZ4dUlDQWdJQ2R2YmsxdmRYTmxWWEFuTEZ4dUlDQWdJQ2R2YmsxdmRYTmxSRzkzYmljc1hHNGdJQ0FnSjI5dVVtbG5hSFJEYkdsamF5Y3NYRzRnSUNBZ0oyOXVUVzkyWlZOMFlYSjBKeXhjYmlBZ0lDQW5iMjVFY21GblUzUmhjblFuTEZ4dUlDQWdJQ2R2YmtSeVlXZG5hVzVuSnl4Y2JpQWdJQ0FuYjI1RWNtRm5SVzVrSnl4Y2JpQWdJQ0FuYjI1SWIzUnpjRzkwVDNWMEp5eGNiaUFnSUNBbmIyNUliM1J6Y0c5MFQzWmxjaWNzWEc0Z0lDQWdKMjl1Vkc5MVkyaFRkR0Z5ZENjc1hHNGdJQ0FnSjI5dVEyOXRjR3hsZEdVbkxGeHVJQ0FnSUNkdmJraHZkSE53YjNSRGJHbGpheWNzWEc0Z0lDQWdKMjl1Vkc5MVkyaE5iM1psSnl4Y2JpQWdJQ0FuYjI1VWIzVmphRVZ1WkNjc1hHNGdJQ0FnSjI5dVVtVnphWHBsSnl4Y2JpQWdYU2s3WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnYldGd0xGeHVJQ0FnSUhObGRFMWhjQ3hjYmlBZ0lDQmpiMjUwWVdsdVpYSXNYRzRnSUNBZ2MyVjBRMjl1ZEdGcGJtVnlMRnh1SUNCOU8xeHVmVHRjYmlKZGZRPT0iLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJjaGlsZHJlblwiXTtcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiLi4vdHlwZXNcIiAvPlxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VJbXBlcmF0aXZlSGFuZGxlLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1hcCB9IGZyb20gJy4vdXNlTWFwJztcbmV4cG9ydCB2YXIgTWFwID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuXG4gIHZhciBlbG1SZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdmFyIF91c2VNYXAgPSB1c2VNYXAoX29iamVjdFNwcmVhZCh7XG4gICAgY29udGFpbmVyOiBlbG1SZWYuY3VycmVudFxuICB9LCBwcm9wcykpLFxuICAgICAgc2V0Q29udGFpbmVyID0gX3VzZU1hcC5zZXRDb250YWluZXIsXG4gICAgICBjb250YWluZXIgPSBfdXNlTWFwLmNvbnRhaW5lcixcbiAgICAgIG1hcCA9IF91c2VNYXAubWFwO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNldENvbnRhaW5lcihlbG1SZWYuY3VycmVudCk7XG4gIH0sIFtlbG1SZWYuY3VycmVudF0pO1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgIG1hcDogbWFwLFxuICAgICAgQU1hcDogQU1hcCxcbiAgICAgIGNvbnRhaW5lcjogZWxtUmVmLmN1cnJlbnRcbiAgICB9KTtcbiAgfSwgW21hcF0pO1xuICB2YXIgY2hpbGRzID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHJlZjogZWxtUmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9LCBzdHlsZSlcbiAgfSksIEFNYXAgJiYgbWFwICYmIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBjaGlsZHJlbih7XG4gICAgQU1hcDogQU1hcCxcbiAgICBtYXA6IG1hcCxcbiAgICBjb250YWluZXI6IGNvbnRhaW5lclxuICB9KSwgQU1hcCAmJiBtYXAgJiYgY2hpbGRzLm1hcChmdW5jdGlvbiAoY2hpbGQsIGtleSkge1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGNoaWxkKSwge1xuICAgICAgICBrZXk6IGtleVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAoY2hpbGQudHlwZSAmJiB0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIGtleToga2V5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjaGlsZC5wcm9wcyksIHt9LCB7XG4gICAgICBBTWFwOiBBTWFwLFxuICAgICAgbWFwOiBtYXAsXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgIGtleToga2V5XG4gICAgfSkpO1xuICB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlOWVhBdmFXNWtaWGd1ZEhONElsMHNJbTVoYldWeklqcGJJbEpsWVdOMElpd2lkWE5sVW1WbUlpd2lkWE5sUldabVpXTjBJaXdpZFhObFNXMXdaWEpoZEdsMlpVaGhibVJzWlNJc0lrWnlZV2R0Wlc1MElpd2lkWE5sVFdGd0lpd2lUV0Z3SWl3aVptOXlkMkZ5WkZKbFppSXNJbkpsWmlJc0ltTnNZWE56VG1GdFpTSXNJbk4wZVd4bElpd2lZMmhwYkdSeVpXNGlMQ0p3Y205d2N5SXNJbVZzYlZKbFppSXNJbU52Ym5SaGFXNWxjaUlzSW1OMWNuSmxiblFpTENKelpYUkRiMjUwWVdsdVpYSWlMQ0p0WVhBaUxDSkJUV0Z3SWl3aVkyaHBiR1J6SWl3aVEyaHBiR1J5Wlc0aUxDSjBiMEZ5Y21GNUlpd2labTl1ZEZOcGVtVWlMQ0pvWldsbmFIUWlMQ0pqYUdsc1pDSXNJbXRsZVNJc0ltTnNiMjVsUld4bGJXVnVkQ0lzSW1selZtRnNhV1JGYkdWdFpXNTBJaXdpZEhsd1pTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUU3UVVGRlFTeFBRVUZQUVN4TFFVRlFMRWxCUVdkQ1F5eE5RVUZvUWl4RlFVRjNRa01zVTBGQmVFSXNSVUZCYlVORExHMUNRVUZ1UXl4RlFVRjNSRU1zVVVGQmVFUXNVVUZCZDBVc1QwRkJlRVU3UVVGRFFTeFRRVUZUUXl4TlFVRlVMRkZCUVhWQ0xGVkJRWFpDTzBGQlYwRXNUMEZCVHl4SlFVRk5ReXhIUVVGSExHZENRVUZIVGl4TFFVRkxMRU5CUVVOUExGVkJRVTRzUTBGRGFrSXNaMEpCUVRKRFF5eEhRVUV6UXl4RlFVRnRSRHRCUVVGQkxFMUJRV2hFUXl4VFFVRm5SQ3hSUVVGb1JFRXNVMEZCWjBRN1FVRkJRU3hOUVVGeVEwTXNTMEZCY1VNc1VVRkJja05CTEV0QlFYRkRPMEZCUVVFc1RVRkJPVUpETEZGQlFUaENMRkZCUVRsQ1FTeFJRVUU0UWp0QlFVRkJMRTFCUVdwQ1F5eExRVUZwUWpzN1FVRkRha1FzVFVGQlRVTXNUVUZCVFN4SFFVRkhXaXhOUVVGTkxFTkJRV2xDTEVsQlFXcENMRU5CUVhKQ096dEJRVU5CTEdkQ1FVRjVRMGtzVFVGQlRUdEJRVUZIVXl4SlFVRkJRU3hUUVVGVExFVkJRVVZFTEUxQlFVMHNRMEZCUTBVN1FVRkJja0lzUzBGQmFVTklMRXRCUVdwRExFVkJRUzlETzBGQlFVRXNUVUZCVVVrc1dVRkJVaXhYUVVGUlFTeFpRVUZTTzBGQlFVRXNUVUZCYzBKR0xGTkJRWFJDTEZkQlFYTkNRU3hUUVVGMFFqdEJRVUZCTEUxQlFXbERSeXhIUVVGcVF5eFhRVUZwUTBFc1IwRkJha003TzBGQlEwRm1MRVZCUVVGQkxGTkJRVk1zUTBGQlF6dEJRVUZCTEZkQlFVMWpMRmxCUVZrc1EwRkJRMGdzVFVGQlRTeERRVUZEUlN4UFFVRlNMRU5CUVd4Q08wRkJRVUVzUjBGQlJDeEZRVUZ4UXl4RFFVRkRSaXhOUVVGTkxFTkJRVU5GTEU5QlFWSXNRMEZCY2tNc1EwRkJWRHRCUVVOQldpeEZRVUZCUVN4dFFrRkJiVUlzUTBGQlEwc3NSMEZCUkN4RlFVRk5PMEZCUVVFc01rTkJRVmxKTEV0QlFWbzdRVUZCYlVKTExFMUJRVUZCTEVkQlFVY3NSVUZCU0VFc1IwRkJia0k3UVVGQmQwSkRMRTFCUVVGQkxFbEJRVWtzUlVGQlNrRXNTVUZCZUVJN1FVRkJPRUpLTEUxQlFVRkJMRk5CUVZNc1JVRkJSVVFzVFVGQlRTeERRVUZEUlR0QlFVRm9SRHRCUVVGQkxFZEJRVTRzUlVGQmEwVXNRMEZCUTBVc1IwRkJSQ3hEUVVGc1JTeERRVUZ1UWp0QlFVTkJMRTFCUVUxRkxFMUJRVTBzUjBGQlIyNUNMRXRCUVVzc1EwRkJRMjlDTEZGQlFVNHNRMEZCWlVNc1QwRkJaaXhEUVVGMVFsWXNVVUZCZGtJc1EwRkJaanRCUVVOQkxITkNRVU5GTEc5Q1FVRkRMRkZCUVVRc2NVSkJRMFU3UVVGQlN5eEpRVUZCTEVkQlFVY3NSVUZCUlVVc1RVRkJWanRCUVVGclFpeEpRVUZCTEZOQlFWTXNSVUZCUlVvc1UwRkJOMEk3UVVGQmQwTXNTVUZCUVN4TFFVRkxPMEZCUVVsaExFMUJRVUZCTEZGQlFWRXNSVUZCUlN4RFFVRmtPMEZCUVdsQ1F5eE5RVUZCUVN4TlFVRk5MRVZCUVVVN1FVRkJla0lzVDBGQmIwTmlMRXRCUVhCRE8wRkJRVGRETEVsQlJFWXNSVUZGUjFFc1NVRkJTU3hKUVVGSlJDeEhRVUZTTEVsQlFXVXNUMEZCVDA0c1VVRkJVQ3hMUVVGdlFpeFZRVUZ1UXl4SlFVRnBSRUVzVVVGQlVTeERRVUZETzBGQlFVVlBMRWxCUVVGQkxFbEJRVWtzUlVGQlNrRXNTVUZCUmp0QlFVRlJSQ3hKUVVGQlFTeEhRVUZITEVWQlFVaEJMRWRCUVZJN1FVRkJZVWdzU1VGQlFVRXNVMEZCVXl4RlFVRlVRVHRCUVVGaUxFZEJRVVFzUTBGR05VUXNSVUZIUjBrc1NVRkJTU3hKUVVOSVJDeEhRVVJFTEVsQlJVTkZMRTFCUVUwc1EwRkJRMFlzUjBGQlVDeERRVUZYTEZWQlFVTlBMRXRCUVVRc1JVRkJVVU1zUjBGQlVpeEZRVUZuUWp0QlFVTjZRaXhSUVVGSkxFOUJRVTlFTEV0QlFWQXNTMEZCYVVJc1VVRkJja0lzUlVGQkswSTdRVUZETjBJc01FSkJRVTk0UWl4TFFVRkxMRU5CUVVNd1FpeFpRVUZPTEdWQlFXMUNMRzlDUVVGRExGRkJRVVFzVVVGQlYwWXNTMEZCV0N4RFFVRnVRaXhGUVVGcFJEdEJRVUZGUXl4UlFVRkJRU3hIUVVGSExFVkJRVWhCTzBGQlFVWXNUMEZCYWtRc1EwRkJVRHRCUVVORU96dEJRVU5FTEZGQlFVa3NaVUZCUTNwQ0xFdEJRVXNzUTBGQlF6SkNMR05CUVU0c1EwRkJjVUpJTEV0QlFYSkNMRU5CUVV3c1JVRkJhME1zVDBGQlR5eEpRVUZRT3p0QlFVTnNReXhSUVVGSlFTeExRVUZMTEVOQlFVTkpMRWxCUVU0c1NVRkJZeXhQUVVGUFNpeExRVUZMTEVOQlFVTkpMRWxCUVdJc1MwRkJjMElzVVVGQmVFTXNSVUZCYTBRN1FVRkRhRVFzTUVKQlFVODFRaXhMUVVGTExFTkJRVU13UWl4WlFVRk9MRU5CUVcxQ1JpeExRVUZ1UWl4RlFVRXdRanRCUVVGRlF5eFJRVUZCUVN4SFFVRkhMRVZCUVVoQk8wRkJRVVlzVDBGQk1VSXNRMEZCVUR0QlFVTkVPenRCUVVORUxIZENRVUZQZWtJc1MwRkJTeXhEUVVGRE1FSXNXVUZCVGl4RFFVRnRRa1lzUzBGQmJrSXNhME5CUTBaQkxFdEJRVXNzUTBGQlExb3NTMEZFU2p0QlFVVk1UU3hOUVVGQlFTeEpRVUZKTEVWQlFVcEJMRWxCUmtzN1FVRkhURVFzVFVGQlFVRXNSMEZCUnl4RlFVRklRU3hIUVVoTE8wRkJTVXhJTEUxQlFVRkJMRk5CUVZNc1JVRkJWRUVzVTBGS1N6dEJRVXRNVnl4TlFVRkJRU3hIUVVGSExFVkJRVWhCTzBGQlRFc3NUMEZCVUR0QlFVOUVMRWRCWmtRc1EwRk1TaXhEUVVSR08wRkJkMEpFTEVOQkwwSm5RaXhEUVVGYUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeTh2SUR4eVpXWmxjbVZ1WTJVZ2RIbHdaWE05WENJdUxpOTBlWEJsYzF3aUlDOCtYRzVjYm1sdGNHOXlkQ0JTWldGamRDd2dleUIxYzJWU1pXWXNJSFZ6WlVWbVptVmpkQ3dnZFhObFNXMXdaWEpoZEdsMlpVaGhibVJzWlN3Z1JuSmhaMjFsYm5RZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZXlCMWMyVk5ZWEFnZlNCbWNtOXRJQ2N1TDNWelpVMWhjQ2M3WEc1Y2JuUjVjR1VnVW1WdVpHVnlVSEp2Y0hNZ1BWeHVJQ0I4SUhzZ1kyaHBiR1J5Wlc0NklDaGtZWFJoT2lCN0lFRk5ZWEE2SUhSNWNHVnZaaUJCVFdGd095QnRZWEE2SUVGTllYQXVUV0Z3T3lCamIyNTBZV2x1WlhJL09pQklWRTFNUkdsMlJXeGxiV1Z1ZENCOElHNTFiR3dnZlNrZ1BUNGdkbTlwWkNCOVhHNGdJSHdnZXlCamFHbHNaSEpsYmpvZ1VtVmhZM1F1VW1WaFkzUk9iMlJsSUgwN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdUV0Z3VUhKdmNITWdaWGgwWlc1a2N5QkJUV0Z3TGsxaGNFVjJaVzUwY3l3Z1FVMWhjQzVOWVhCUGNIUnBiMjV6SUh0Y2JpQWdZMnhoYzNOT1lXMWxQem9nVW1WaFkzUXVTRlJOVEVGMGRISnBZblYwWlhNOFNGUk5URVJwZGtWc1pXMWxiblErV3lkamJHRnpjMDVoYldVblhUdGNiaUFnYzNSNWJHVS9PaUJTWldGamRDNUlWRTFNUVhSMGNtbGlkWFJsY3p4SVZFMU1SR2wyUld4bGJXVnVkRDViSjNOMGVXeGxKMTA3WEc1OVhHNWNibVY0Y0c5eWRDQmpiMjV6ZENCTllYQWdQU0JTWldGamRDNW1iM0ozWVhKa1VtVm1QRTFoY0ZCeWIzQnpJQ1lnZXlCdFlYQS9PaUJCVFdGd0xrMWhjQ0I5TENCTllYQlFjbTl3Y3lBbUlGSmxibVJsY2xCeWIzQnpQaWhjYmlBZ0tIc2dZMnhoYzNOT1lXMWxMQ0J6ZEhsc1pTd2dZMmhwYkdSeVpXNHNJQzR1TG5CeWIzQnpJSDBzSUhKbFppa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHVnNiVkpsWmlBOUlIVnpaVkpsWmp4SVZFMU1SR2wyUld4bGJXVnVkRDRvYm5Wc2JDazdYRzRnSUNBZ1kyOXVjM1FnZXlCelpYUkRiMjUwWVdsdVpYSXNJR052Ym5SaGFXNWxjaXdnYldGd0lIMGdQU0IxYzJWTllYQW9leUJqYjI1MFlXbHVaWEk2SUdWc2JWSmxaaTVqZFhKeVpXNTBMQ0F1TGk1d2NtOXdjeUI5S1R0Y2JpQWdJQ0IxYzJWRlptWmxZM1FvS0NrZ1BUNGdjMlYwUTI5dWRHRnBibVZ5S0dWc2JWSmxaaTVqZFhKeVpXNTBLU3dnVzJWc2JWSmxaaTVqZFhKeVpXNTBYU2s3WEc0Z0lDQWdkWE5sU1cxd1pYSmhkR2wyWlVoaGJtUnNaU2h5WldZc0lDZ3BJRDArSUNoN0lDNHVMbkJ5YjNCekxDQnRZWEFzSUVGTllYQXNJR052Ym5SaGFXNWxjam9nWld4dFVtVm1MbU4xY25KbGJuUWdmU2tzSUZ0dFlYQmRLVHRjYmlBZ0lDQmpiMjV6ZENCamFHbHNaSE1nUFNCU1pXRmpkQzVEYUdsc1pISmxiaTUwYjBGeWNtRjVLR05vYVd4a2NtVnVLVHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ1BFWnlZV2R0Wlc1MFBseHVJQ0FnSUNBZ0lDQThaR2wySUhKbFpqMTdaV3h0VW1WbWZTQmpiR0Z6YzA1aGJXVTllMk5zWVhOelRtRnRaWDBnYzNSNWJHVTllM3NnWm05dWRGTnBlbVU2SURFc0lHaGxhV2RvZERvZ0p6RXdNQ1VuTENBdUxpNXpkSGxzWlNCOWZTQXZQbHh1SUNBZ0lDQWdJQ0I3UVUxaGNDQW1KaUJ0WVhBZ0ppWWdkSGx3Wlc5bUlHTm9hV3hrY21WdUlEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHTm9hV3hrY21WdUtIc2dRVTFoY0N3Z2JXRndMQ0JqYjI1MFlXbHVaWElnZlNsOVhHNGdJQ0FnSUNBZ0lIdEJUV0Z3SUNZbVhHNGdJQ0FnSUNBZ0lDQWdiV0Z3SUNZbVhHNGdJQ0FnSUNBZ0lDQWdZMmhwYkdSekxtMWhjQ2dvWTJocGJHUXNJR3RsZVNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQmphR2xzWkNBOVBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlGSmxZV04wTG1Oc2IyNWxSV3hsYldWdWRDZzhSbkpoWjIxbGJuUStlMk5vYVd4a2ZUd3ZSbkpoWjIxbGJuUStMQ0I3SUd0bGVTQjlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hVbVZoWTNRdWFYTldZV3hwWkVWc1pXMWxiblFvWTJocGJHUXBLU0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamFHbHNaQzUwZVhCbElDWW1JSFI1Y0dWdlppQmphR2xzWkM1MGVYQmxJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnVW1WaFkzUXVZMnh2Ym1WRmJHVnRaVzUwS0dOb2FXeGtMQ0I3SUd0bGVTQjlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJTWldGamRDNWpiRzl1WlVWc1pXMWxiblFvWTJocGJHUXNJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdMaTR1WTJocGJHUXVjSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUVGTllYQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHMWhjQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnJaWGtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNCOUtYMWNiaUFnSUNBZ0lEd3ZSbkpoWjIxbGJuUStYRzRnSUNBZ0tUdGNiaUFnZlN4Y2JpazdYRzRpWFgwPSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wibWFwXCIsIFwidmlzaWFibGVcIl07XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVmlzaWFibGUsIHVzZUV2ZW50UHJvcGVydGllcywgdXNlU2V0dGluZ1Byb3BlcnRpZXMgfSBmcm9tICcuLi9jb21tb24vaG9va3MnO1xuZXhwb3J0IHZhciB1c2VNYXJrZXIgPSBmdW5jdGlvbiB1c2VNYXJrZXIoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIG1hcCA9IHByb3BzLm1hcCxcbiAgICAgIHZpc2lhYmxlID0gcHJvcHMudmlzaWFibGUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgbWFya2VyID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldE1hcmtlciA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUFNYXAgfHwgIW1hcCkgcmV0dXJuO1xuXG4gICAgaWYgKCFtYXJrZXIpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBBTWFwLk1hcmtlcihfb2JqZWN0U3ByZWFkKHt9LCBvdGhlcikpO1xuICAgICAgbWFwLmFkZChpbnN0YW5jZSk7XG4gICAgICBzZXRNYXJrZXIoaW5zdGFuY2UpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgICAgICAgc2V0TWFya2VyKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW21hcF0pO1xuICB1c2VWaXNpYWJsZShtYXJrZXIsIHZpc2lhYmxlKTtcbiAgdXNlU2V0dGluZ1Byb3BlcnRpZXMobWFya2VyLCBwcm9wcywgWydQYXRoJywgJ0FuY2hvcicsICdPZmZzZXQnLCAnQW5pbWF0aW9uJywgJ0NsaWNrYWJsZScsICdQb3NpdGlvbicsICdBbmdsZScsICdMYWJlbCcsICd6SW5kZXgnLCAnSWNvbicsICdEcmFnZ2FibGUnLCAnQ3Vyc29yJywgJ0NvbnRlbnQnLCAnTWFwJywgJ1RpdGxlJywgJ1RvcCcsICdTaGFkb3cnLCAnU2hhcGUnLCAnRXh0RGF0YSddKTtcbiAgdXNlRXZlbnRQcm9wZXJ0aWVzKG1hcmtlciwgcHJvcHMsIFsnb25DbGljaycsICdvbkRibENsaWNrJywgJ29uUmlnaHRDbGljaycsICdvbk1vdXNlTW92ZScsICdvbk1vdXNlT3ZlcicsICdvbk1vdXNlT3V0JywgJ29uTW91c2VEb3duJywgJ29uTW91c2VVcCcsICdvbkRyYWdTdGFydCcsICdvbkRyYWdnaW5nJywgJ29uRHJhZ0VuZCcsICdvbk1vdmluZycsICdvbk1vdmVFbmQnLCAnb25Nb3ZlQWxvbmcnLCAnb25Ub3VjaFN0YXJ0JywgJ29uVG91Y2hNb3ZlJywgJ29uVG91Y2hFbmQnXSk7XG4gIHJldHVybiB7XG4gICAgbWFya2VyOiBtYXJrZXIsXG4gICAgc2V0TWFya2VyOiBzZXRNYXJrZXJcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5TllYSnJaWEl2ZFhObFRXRnlhMlZ5TG5SemVDSmRMQ0p1WVcxbGN5STZXeUoxYzJWVGRHRjBaU0lzSW5WelpVVm1abVZqZENJc0luVnpaVlpwYzJsaFlteGxJaXdpZFhObFJYWmxiblJRY205d1pYSjBhV1Z6SWl3aWRYTmxVMlYwZEdsdVoxQnliM0JsY25ScFpYTWlMQ0oxYzJWTllYSnJaWElpTENKd2NtOXdjeUlzSW0xaGNDSXNJblpwYzJsaFlteGxJaXdpYjNSb1pYSWlMQ0p0WVhKclpYSWlMQ0p6WlhSTllYSnJaWElpTENKQlRXRndJaXdpYVc1emRHRnVZMlVpTENKTllYSnJaWElpTENKaFpHUWlMQ0p5WlcxdmRtVWlMQ0oxYm1SbFptbHVaV1FpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFTeFRRVUZUUVN4UlFVRlVMRVZCUVcxQ1F5eFRRVUZ1UWl4UlFVRnZReXhQUVVGd1F6dEJRVVZCTEZOQlFWTkRMRmRCUVZRc1JVRkJjMEpETEd0Q1FVRjBRaXhGUVVFd1EwTXNiMEpCUVRGRExGRkJRWE5GTEdsQ1FVRjBSVHRCUVVkQkxFOUJRVThzU1VGQlRVTXNVMEZCVXl4SFFVRkhMRk5CUVZwQkxGTkJRVmtzUjBGQk5rSTdRVUZCUVN4TlFVRTFRa01zUzBGQk5FSXNkVVZCUVhCQ0xFVkJRVzlDT3p0QlFVTndSQ3hOUVVGUlF5eEhRVUZTTEVkQlFXOURSQ3hMUVVGd1F5eERRVUZSUXl4SFFVRlNPMEZCUVVFc1RVRkJZVU1zVVVGQllpeEhRVUZ2UTBZc1MwRkJjRU1zUTBGQllVVXNVVUZCWWp0QlFVRkJMRTFCUVRCQ1F5eExRVUV4UWl3MFFrRkJiME5JTEV0QlFYQkRPenRCUVVOQkxHdENRVUUwUWs0c1VVRkJVU3hGUVVGd1F6dEJRVUZCTzBGQlFVRXNUVUZCVDFVc1RVRkJVRHRCUVVGQkxFMUJRV1ZETEZOQlFXWTdPMEZCUTBGV0xFVkJRVUZCTEZOQlFWTXNRMEZCUXl4WlFVRk5PMEZCUTJRc1VVRkJTU3hEUVVGRFZ5eEpRVUZFTEVsQlFWTXNRMEZCUTB3c1IwRkJaQ3hGUVVGdFFqczdRVUZEYmtJc1VVRkJTU3hEUVVGRFJ5eE5RVUZNTEVWQlFXRTdRVUZEV0N4VlFVRkpSeXhSUVVGeFFpeEhRVUZITEVsQlFVbEVMRWxCUVVrc1EwRkJRMFVzVFVGQlZDeHRRa0ZCY1VKTUxFdEJRWEpDTEVWQlFUVkNPMEZCUTBGR0xFMUJRVUZCTEVkQlFVY3NRMEZCUTFFc1IwRkJTaXhEUVVGUlJpeFJRVUZTTzBGQlEwRkdMRTFCUVVGQkxGTkJRVk1zUTBGQlEwVXNVVUZCUkN4RFFVRlVPMEZCUTBFc1lVRkJUeXhaUVVGTk8wRkJRMWdzV1VGQlNVRXNVVUZCU2l4RlFVRmpPMEZCUTFwQkxGVkJRVUZCTEZGQlFWRXNRMEZCUTBjc1RVRkJWRHRCUVVOQlRDeFZRVUZCUVN4VFFVRlRMRU5CUVVOTkxGTkJRVVFzUTBGQlZEdEJRVU5FTzBGQlEwWXNUMEZNUkR0QlFVMUVMRXRCV21Fc1EwRmhaRHM3UVVGRFJDeEhRV1JSTEVWQlkwNHNRMEZCUTFZc1IwRkJSQ3hEUVdSTkxFTkJRVlE3UVVGblFrRk1MRVZCUVVGQkxGZEJRVmNzUTBGQlExRXNUVUZCUkN4RlFVRlZSaXhSUVVGV0xFTkJRVmc3UVVGRFFVb3NSVUZCUVVFc2IwSkJRVzlDTEVOQlFYbENUU3hOUVVGNlFpeEZRVUZyUTBvc1MwRkJiRU1zUlVGQmVVTXNRMEZETTBRc1RVRkVNa1FzUlVGRk0wUXNVVUZHTWtRc1JVRkhNMFFzVVVGSU1rUXNSVUZKTTBRc1YwRktNa1FzUlVGTE0wUXNWMEZNTWtRc1JVRk5NMFFzVlVGT01rUXNSVUZQTTBRc1QwRlFNa1FzUlVGUk0wUXNUMEZTTWtRc1JVRlRNMFFzVVVGVU1rUXNSVUZWTTBRc1RVRldNa1FzUlVGWE0wUXNWMEZZTWtRc1JVRlpNMFFzVVVGYU1rUXNSVUZoTTBRc1UwRmlNa1FzUlVGak0wUXNTMEZrTWtRc1JVRmxNMFFzVDBGbU1rUXNSVUZuUWpORUxFdEJhRUl5UkN4RlFXbENNMFFzVVVGcVFqSkVMRVZCYTBJelJDeFBRV3hDTWtRc1JVRnRRak5FTEZOQmJrSXlSQ3hEUVVGNlF5eERRVUZ3UWp0QlFYRkNRVWdzUlVGQlFVRXNhMEpCUVd0Q0xFTkJRWGxDVHl4TlFVRjZRaXhGUVVGclEwb3NTMEZCYkVNc1JVRkJlVU1zUTBGRGVrUXNVMEZFZVVRc1JVRkZla1FzV1VGR2VVUXNSVUZIZWtRc1kwRkllVVFzUlVGSmVrUXNZVUZLZVVRc1JVRkxla1FzWVVGTWVVUXNSVUZOZWtRc1dVRk9lVVFzUlVGUGVrUXNZVUZRZVVRc1JVRlJla1FzVjBGU2VVUXNSVUZUZWtRc1lVRlVlVVFzUlVGVmVrUXNXVUZXZVVRc1JVRlhla1FzVjBGWWVVUXNSVUZaZWtRc1ZVRmFlVVFzUlVGaGVrUXNWMEZpZVVRc1JVRmpla1FzWVVGa2VVUXNSVUZsZWtRc1kwRm1lVVFzUlVGblFucEVMR0ZCYUVKNVJDeEZRV2xDZWtRc1dVRnFRbmxFTEVOQlFYcERMRU5CUVd4Q08wRkJiVUpCTEZOQlFVODdRVUZEVEVrc1NVRkJRVUVzVFVGQlRTeEZRVUZPUVN4TlFVUkxPMEZCUlV4RExFbEJRVUZCTEZOQlFWTXNSVUZCVkVFN1FVRkdTeXhIUVVGUU8wRkJTVVFzUTBGb1JVMGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUIxYzJWVGRHRjBaU3dnZFhObFJXWm1aV04wSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnVFdGeWEyVnlVSEp2Y0hNZ2ZTQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUIxYzJWV2FYTnBZV0pzWlN3Z2RYTmxSWFpsYm5SUWNtOXdaWEowYVdWekxDQjFjMlZUWlhSMGFXNW5VSEp2Y0dWeWRHbGxjeUI5SUdaeWIyMGdKeTR1TDJOdmJXMXZiaTlvYjI5cmN5YzdYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVlhObFRXRnlhMlZ5SUdWNGRHVnVaSE1nVFdGeWEyVnlVSEp2Y0hNZ2UzMWNibVY0Y0c5eWRDQmpiMjV6ZENCMWMyVk5ZWEpyWlhJZ1BTQW9jSEp2Y0hNZ1BTQjdmU0JoY3lCVmMyVk5ZWEpyWlhJcElEMCtJSHRjYmlBZ1kyOXVjM1FnZXlCdFlYQXNJSFpwYzJsaFlteGxMQ0F1TGk1dmRHaGxjaUI5SUQwZ2NISnZjSE03WEc0Z0lHTnZibk4wSUZ0dFlYSnJaWElzSUhObGRFMWhjbXRsY2wwZ1BTQjFjMlZUZEdGMFpUeEJUV0Z3TGsxaGNtdGxjajRvS1R0Y2JpQWdkWE5sUldabVpXTjBLQ2dwSUQwK0lIdGNiaUFnSUNCcFppQW9JVUZOWVhBZ2ZId2dJVzFoY0NrZ2NtVjBkWEp1TzF4dUlDQWdJR2xtSUNnaGJXRnlhMlZ5S1NCN1hHNGdJQ0FnSUNCc1pYUWdhVzV6ZEdGdVkyVTZJRUZOWVhBdVRXRnlhMlZ5SUQwZ2JtVjNJRUZOWVhBdVRXRnlhMlZ5S0hzZ0xpNHViM1JvWlhJZ2ZTazdYRzRnSUNBZ0lDQnRZWEF1WVdSa0tHbHVjM1JoYm1ObEtUdGNiaUFnSUNBZ0lITmxkRTFoY210bGNpaHBibk4wWVc1alpTazdYRzRnSUNBZ0lDQnlaWFIxY200Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCcFppQW9hVzV6ZEdGdVkyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCcGJuTjBZVzVqWlM1eVpXMXZkbVVvS1R0Y2JpQWdJQ0FnSUNBZ0lDQnpaWFJOWVhKclpYSW9kVzVrWldacGJtVmtLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc0Z0lDQWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJSEpsWVdOMExXaHZiMnR6TDJWNGFHRjFjM1JwZG1VdFpHVndjMXh1SUNCOUxDQmJiV0Z3WFNrN1hHNWNiaUFnZFhObFZtbHphV0ZpYkdVb2JXRnlhMlZ5SVN3Z2RtbHphV0ZpYkdVcE8xeHVJQ0IxYzJWVFpYUjBhVzVuVUhKdmNHVnlkR2xsY3p4QlRXRndMazFoY210bGNpd2dWWE5sVFdGeWEyVnlQaWh0WVhKclpYSWhMQ0J3Y205d2N5d2dXMXh1SUNBZ0lDZFFZWFJvSnl4Y2JpQWdJQ0FuUVc1amFHOXlKeXhjYmlBZ0lDQW5UMlptYzJWMEp5eGNiaUFnSUNBblFXNXBiV0YwYVc5dUp5eGNiaUFnSUNBblEyeHBZMnRoWW14bEp5eGNiaUFnSUNBblVHOXphWFJwYjI0bkxGeHVJQ0FnSUNkQmJtZHNaU2NzWEc0Z0lDQWdKMHhoWW1Wc0p5eGNiaUFnSUNBbmVrbHVaR1Y0Snl4Y2JpQWdJQ0FuU1dOdmJpY3NYRzRnSUNBZ0owUnlZV2RuWVdKc1pTY3NYRzRnSUNBZ0owTjFjbk52Y2ljc1hHNGdJQ0FnSjBOdmJuUmxiblFuTEZ4dUlDQWdJQ2ROWVhBbkxGeHVJQ0FnSUNkVWFYUnNaU2NzWEc0Z0lDQWdKMVJ2Y0Njc1hHNGdJQ0FnSjFOb1lXUnZkeWNzWEc0Z0lDQWdKMU5vWVhCbEp5eGNiaUFnSUNBblJYaDBSR0YwWVNjc1hHNGdJRjBwTzF4dUlDQjFjMlZGZG1WdWRGQnliM0JsY25ScFpYTThRVTFoY0M1TllYSnJaWElzSUZWelpVMWhjbXRsY2o0b2JXRnlhMlZ5SVN3Z2NISnZjSE1zSUZ0Y2JpQWdJQ0FuYjI1RGJHbGpheWNzWEc0Z0lDQWdKMjl1UkdKc1EyeHBZMnNuTEZ4dUlDQWdJQ2R2YmxKcFoyaDBRMnhwWTJzbkxGeHVJQ0FnSUNkdmJrMXZkWE5sVFc5MlpTY3NYRzRnSUNBZ0oyOXVUVzkxYzJWUGRtVnlKeXhjYmlBZ0lDQW5iMjVOYjNWelpVOTFkQ2NzWEc0Z0lDQWdKMjl1VFc5MWMyVkViM2R1Snl4Y2JpQWdJQ0FuYjI1TmIzVnpaVlZ3Snl4Y2JpQWdJQ0FuYjI1RWNtRm5VM1JoY25RbkxGeHVJQ0FnSUNkdmJrUnlZV2RuYVc1bkp5eGNiaUFnSUNBbmIyNUVjbUZuUlc1a0p5eGNiaUFnSUNBbmIyNU5iM1pwYm1jbkxGeHVJQ0FnSUNkdmJrMXZkbVZGYm1RbkxGeHVJQ0FnSUNkdmJrMXZkbVZCYkc5dVp5Y3NYRzRnSUNBZ0oyOXVWRzkxWTJoVGRHRnlkQ2NzWEc0Z0lDQWdKMjl1Vkc5MVkyaE5iM1psSnl4Y2JpQWdJQ0FuYjI1VWIzVmphRVZ1WkNjc1hHNGdJRjBwTzF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUcxaGNtdGxjaXhjYmlBZ0lDQnpaWFJOWVhKclpYSXNYRzRnSUgwN1hHNTlPMXh1SWwxOSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VJbXBlcmF0aXZlSGFuZGxlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTWFya2VyIH0gZnJvbSAnLi91c2VNYXJrZXInO1xuZXhwb3J0IHZhciBNYXJrZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX3VzZU1hcmtlciA9IHVzZU1hcmtlcihwcm9wcyksXG4gICAgICBtYXJrZXIgPSBfdXNlTWFya2VyLm1hcmtlcjtcblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgIG1hcmtlcjogbWFya2VyXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OU5ZWEpyWlhJdmFXNWtaWGd1ZEhONElsMHNJbTVoYldWeklqcGJJbEpsWVdOMElpd2lkWE5sU1cxd1pYSmhkR2wyWlVoaGJtUnNaU0lzSW5WelpVMWhjbXRsY2lJc0lrMWhjbXRsY2lJc0ltWnZjbmRoY21SU1pXWWlMQ0p3Y205d2N5SXNJbkpsWmlJc0ltMWhjbXRsY2lKZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxFOUJRVTlCTEV0QlFWQXNTVUZCWjBKRExHMUNRVUZvUWl4UlFVRXlReXhQUVVFelF6dEJRVVZCTEZOQlFWTkRMRk5CUVZRc1VVRkJNRUlzWVVGQk1VSTdRVUZKUVN4UFFVRlBMRWxCUVUxRExFMUJRVTBzWjBKQlFVZElMRXRCUVVzc1EwRkJRMGtzVlVGQlRpeERRVUZ6UlN4VlFVRkRReXhMUVVGRUxFVkJRVkZETEVkQlFWSXNSVUZCWjBJN1FVRkRNVWNzYlVKQlFXMUNTaXhUUVVGVExFTkJRVU5ITEV0QlFVUXNRMEZCTlVJN1FVRkJRU3hOUVVGUlJTeE5RVUZTTEdOQlFWRkJMRTFCUVZJN08wRkJRMEZPTEVWQlFVRkJMRzFDUVVGdFFpeERRVUZEU3l4SFFVRkVMRVZCUVUwN1FVRkJRU3d5UTBGQldVUXNTMEZCV2p0QlFVRnRRa1VzVFVGQlFVRXNUVUZCVFN4RlFVRk9RVHRCUVVGdVFqdEJRVUZCTEVkQlFVNHNRMEZCYmtJN1FVRkRRU3hUUVVGUExFbEJRVkE3UVVGRFJDeERRVXB4UWl4RFFVRm1JaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRkpsWVdOMExDQjdJSFZ6WlVsdGNHVnlZWFJwZG1WSVlXNWtiR1VnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUJQZG1WeWJHRjVVSEp2Y0hNZ2ZTQm1jbTl0SUNjdUxpOWpiMjF0YjI0dmJXRndKenRjYm1sdGNHOXlkQ0I3SUhWelpVMWhjbXRsY2lCOUlHWnliMjBnSnk0dmRYTmxUV0Z5YTJWeUp6dGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JOWVhKclpYSlFjbTl3Y3lCbGVIUmxibVJ6SUU5MlpYSnNZWGxRY205d2N5d2dRVTFoY0M1TllYSnJaWEpGZG1WdWRITXNJRUZOWVhBdVRXRnlhMlZ5VDNCMGFXOXVjeUI3ZlZ4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnVFdGeWEyVnlJRDBnVW1WaFkzUXVabTl5ZDJGeVpGSmxaanhOWVhKclpYSlFjbTl3Y3lBbUlIc2diV0Z5YTJWeVB6b2dRVTFoY0M1TllYSnJaWElnZlN3Z1RXRnlhMlZ5VUhKdmNITStLQ2h3Y205d2N5d2djbVZtS1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnYldGeWEyVnlJSDBnUFNCMWMyVk5ZWEpyWlhJb2NISnZjSE1wTzF4dUlDQjFjMlZKYlhCbGNtRjBhWFpsU0dGdVpHeGxLSEpsWml3Z0tDa2dQVDRnS0hzZ0xpNHVjSEp2Y0hNc0lHMWhjbXRsY2lCOUtTazdYRzRnSUhKbGRIVnliaUJ1ZFd4c08xeHVmU2s3WEc0aVhYMD0iLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xudmFyIF9leGNsdWRlZCA9IFtcIm1hcFwiLCBcInBvc2l0aW9uXCJdO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUV2ZW50UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbW1vbi9ob29rcyc7XG5leHBvcnQgdmFyIHVzZUNvbnRleHRNZW51ID0gZnVuY3Rpb24gdXNlQ29udGV4dE1lbnUoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIG1hcCA9IHByb3BzLm1hcCxcbiAgICAgIHBvc2l0aW9uID0gcHJvcHMucG9zaXRpb24sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgY29udGV4dE1lbnUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0Q29udGV4dE1lbnUgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFBTWFwIHx8ICFtYXApIHJldHVybjtcblxuICAgIGlmICghY29udGV4dE1lbnUpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBBTWFwLkNvbnRleHRNZW51KF9vYmplY3RTcHJlYWQoe30sIG90aGVyKSk7XG4gICAgICBzZXRDb250ZXh0TWVudShpbnN0YW5jZSk7XG5cbiAgICAgIHZhciByaWdodGNsaWNrID0gZnVuY3Rpb24gcmlnaHRjbGljayhlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5vcGVuKG1hcCwgcG9zaXRpb24gfHwgZS5sbmdsYXQpO1xuICAgICAgfTtcblxuICAgICAgbWFwLm9uKCdyaWdodGNsaWNrJywgcmlnaHRjbGljayk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICBtYXAub2ZmKCdyaWdodGNsaWNrJywgcmlnaHRjbGljayk7XG4gICAgICAgICAgbWFwICYmIG1hcC5yZW1vdmVMYXllcihpbnN0YW5jZSk7XG4gICAgICAgICAgc2V0Q29udGV4dE1lbnUodW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIFttYXBdKTtcbiAgdXNlRXZlbnRQcm9wZXJ0aWVzKGNvbnRleHRNZW51LCBwcm9wcywgWydvbk9wZW4nLCAnb25DbG9zZSddKTtcbiAgcmV0dXJuIHtcbiAgICBjb250ZXh0TWVudTogY29udGV4dE1lbnUsXG4gICAgc2V0Q29udGV4dE1lbnU6IHNldENvbnRleHRNZW51XG4gIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OURiMjUwWlhoMFRXVnVkUzkxYzJWRGIyNTBaWGgwVFdWdWRTNTBjM2dpWFN3aWJtRnRaWE1pT2xzaWRYTmxVM1JoZEdVaUxDSjFjMlZGWm1abFkzUWlMQ0oxYzJWRmRtVnVkRkJ5YjNCbGNuUnBaWE1pTENKMWMyVkRiMjUwWlhoMFRXVnVkU0lzSW5CeWIzQnpJaXdpYldGd0lpd2ljRzl6YVhScGIyNGlMQ0p2ZEdobGNpSXNJbU52Ym5SbGVIUk5aVzUxSWl3aWMyVjBRMjl1ZEdWNGRFMWxiblVpTENKQlRXRndJaXdpYVc1emRHRnVZMlVpTENKRGIyNTBaWGgwVFdWdWRTSXNJbkpwWjJoMFkyeHBZMnNpTENKbElpd2liM0JsYmlJc0lteHVaMnhoZENJc0ltOXVJaXdpYjJabUlpd2ljbVZ0YjNabFRHRjVaWElpTENKMWJtUmxabWx1WldRaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRU3hUUVVGVFFTeFJRVUZVTEVWQlFXMUNReXhUUVVGdVFpeFJRVUZ2UXl4UFFVRndRenRCUVVWQkxGTkJRVk5ETEd0Q1FVRlVMRkZCUVcxRExHbENRVUZ1UXp0QlFVZEJMRTlCUVU4c1NVRkJUVU1zWTBGQll5eEhRVUZITEZOQlFXcENRU3hqUVVGcFFpeEhRVUZyUXp0QlFVRkJMRTFCUVdwRFF5eExRVUZwUXl4MVJVRkJla0lzUlVGQmVVSTdPMEZCUXpsRUxFMUJRVkZETEVkQlFWSXNSMEZCYjBORUxFdEJRWEJETEVOQlFWRkRMRWRCUVZJN1FVRkJRU3hOUVVGaFF5eFJRVUZpTEVkQlFXOURSaXhMUVVGd1F5eERRVUZoUlN4UlFVRmlPMEZCUVVFc1RVRkJNRUpETEV0QlFURkNMRFJDUVVGdlEwZ3NTMEZCY0VNN08wRkJRMEVzYTBKQlFYTkRTaXhSUVVGUkxFVkJRVGxETzBGQlFVRTdRVUZCUVN4TlFVRlBVU3hYUVVGUU8wRkJRVUVzVFVGQmIwSkRMR05CUVhCQ096dEJRVU5CVWl4RlFVRkJRU3hUUVVGVExFTkJRVU1zV1VGQlRUdEJRVU5rTEZGQlFVa3NRMEZCUTFNc1NVRkJSQ3hKUVVGVExFTkJRVU5NTEVkQlFXUXNSVUZCYlVJN08wRkJRMjVDTEZGQlFVa3NRMEZCUTBjc1YwRkJUQ3hGUVVGclFqdEJRVU5vUWl4VlFVRkpSeXhSUVVFd1FpeEhRVUZITEVsQlFVbEVMRWxCUVVrc1EwRkJRMFVzVjBGQlZDeHRRa0ZCTUVKTUxFdEJRVEZDTEVWQlFXcERPMEZCUTBGRkxFMUJRVUZCTEdOQlFXTXNRMEZCUTBVc1VVRkJSQ3hEUVVGa096dEJRVU5CTEZWQlFVMUZMRlZCUVZVc1IwRkJSeXhUUVVGaVFTeFZRVUZoTEVOQlFVTkRMRU5CUVVRN1FVRkJRU3hsUVVGMVFrZ3NVVUZCVVN4RFFVRkRTU3hKUVVGVUxFTkJRV05XTEVkQlFXUXNSVUZCYlVKRExGRkJRVkVzU1VGQlNWRXNRMEZCUXl4RFFVRkRSU3hOUVVGcVF5eERRVUYyUWp0QlFVRkJMRTlCUVc1Q096dEJRVU5CV0N4TlFVRkJRU3hIUVVGSExFTkJRVU5aTEVWQlFVb3NRMEZCVHl4WlFVRlFMRVZCUVhGQ1NpeFZRVUZ5UWp0QlFVTkJMR0ZCUVU4c1dVRkJUVHRCUVVOWUxGbEJRVWxHTEZGQlFVb3NSVUZCWXp0QlFVTmFUaXhWUVVGQlFTeEhRVUZITEVOQlFVTmhMRWRCUVVvc1EwRkJVU3haUVVGU0xFVkJRWE5DVEN4VlFVRjBRanRCUVVOQlVpeFZRVUZCUVN4SFFVRkhMRWxCUVVsQkxFZEJRVWNzUTBGQlEyTXNWMEZCU2l4RFFVRm5RbElzVVVGQmFFSXNRMEZCVUR0QlFVTkJSaXhWUVVGQlFTeGpRVUZqTEVOQlFVTlhMRk5CUVVRc1EwRkJaRHRCUVVORU8wRkJRMFlzVDBGT1JEdEJRVTlFTzBGQlEwWXNSMEZtVVN4RlFXVk9MRU5CUVVObUxFZEJRVVFzUTBGbVRTeERRVUZVTzBGQlowSkJTQ3hGUVVGQlFTeHJRa0ZCYTBJc1EwRkJiVU5OTEZkQlFXNURMRVZCUVdsRVNpeExRVUZxUkN4RlFVRjNSQ3hEUVVGRExGRkJRVVFzUlVGQlZ5eFRRVUZZTEVOQlFYaEVMRU5CUVd4Q08wRkJRMEVzVTBGQlR6dEJRVU5NU1N4SlFVRkJRU3hYUVVGWExFVkJRVmhCTEZkQlJFczdRVUZGVEVNc1NVRkJRVUVzWTBGQll5eEZRVUZrUVR0QlFVWkxMRWRCUVZBN1FVRkpSQ3hEUVhoQ1RTSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJSFZ6WlZOMFlYUmxMQ0IxYzJWRlptWmxZM1FnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUJEYjI1MFpYaDBUV1Z1ZFZCeWIzQnpJSDBnWm5KdmJTQW5MaWM3WEc1cGJYQnZjblFnZXlCMWMyVkZkbVZ1ZEZCeWIzQmxjblJwWlhNZ2ZTQm1jbTl0SUNjdUxpOWpiMjF0YjI0dmFHOXZhM01uTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElGVnpaVU52Ym5SbGVIUk5aVzUxSUdWNGRHVnVaSE1nUTI5dWRHVjRkRTFsYm5WUWNtOXdjeUI3ZlZ4dVpYaHdiM0owSUdOdmJuTjBJSFZ6WlVOdmJuUmxlSFJOWlc1MUlEMGdLSEJ5YjNCeklEMGdlMzBnWVhNZ1ZYTmxRMjl1ZEdWNGRFMWxiblVwSUQwK0lIdGNiaUFnWTI5dWMzUWdleUJ0WVhBc0lIQnZjMmwwYVc5dUxDQXVMaTV2ZEdobGNpQjlJRDBnY0hKdmNITTdYRzRnSUdOdmJuTjBJRnRqYjI1MFpYaDBUV1Z1ZFN3Z2MyVjBRMjl1ZEdWNGRFMWxiblZkSUQwZ2RYTmxVM1JoZEdVOFFVMWhjQzVEYjI1MFpYaDBUV1Z1ZFQ0b0tUdGNiaUFnZFhObFJXWm1aV04wS0NncElEMCtJSHRjYmlBZ0lDQnBaaUFvSVVGTllYQWdmSHdnSVcxaGNDa2djbVYwZFhKdU8xeHVJQ0FnSUdsbUlDZ2hZMjl1ZEdWNGRFMWxiblVwSUh0Y2JpQWdJQ0FnSUd4bGRDQnBibk4wWVc1alpUb2dRVTFoY0M1RGIyNTBaWGgwVFdWdWRTQTlJRzVsZHlCQlRXRndMa052Ym5SbGVIUk5aVzUxS0hzZ0xpNHViM1JvWlhJZ2ZTazdYRzRnSUNBZ0lDQnpaWFJEYjI1MFpYaDBUV1Z1ZFNocGJuTjBZVzVqWlNrN1hHNGdJQ0FnSUNCamIyNXpkQ0J5YVdkb2RHTnNhV05ySUQwZ0tHVTZJRUZOWVhBdVRXRndjMFYyWlc1MEtTQTlQaUJwYm5OMFlXNWpaUzV2Y0dWdUtHMWhjQ3dnY0c5emFYUnBiMjRnZkh3Z1pTNXNibWRzWVhRcE8xeHVJQ0FnSUNBZ2JXRndMbTl1S0NkeWFXZG9kR05zYVdOckp5d2djbWxuYUhSamJHbGpheWs3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYVc1emRHRnVZMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnRZWEF1YjJabUtDZHlhV2RvZEdOc2FXTnJKeXdnY21sbmFIUmpiR2xqYXlrN1hHNGdJQ0FnSUNBZ0lDQWdiV0Z3SUNZbUlHMWhjQzV5WlcxdmRtVk1ZWGxsY2locGJuTjBZVzVqWlNrN1hHNGdJQ0FnSUNBZ0lDQWdjMlYwUTI5dWRHVjRkRTFsYm5Vb2RXNWtaV1pwYm1Wa0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzRnSUgwc0lGdHRZWEJkS1R0Y2JpQWdkWE5sUlhabGJuUlFjbTl3WlhKMGFXVnpQRUZOWVhBdVEyOXVkR1Y0ZEUxbGJuVXNJRlZ6WlVOdmJuUmxlSFJOWlc1MVBpaGpiMjUwWlhoMFRXVnVkU0VzSUhCeWIzQnpMQ0JiSjI5dVQzQmxiaWNzSUNkdmJrTnNiM05sSjEwcE8xeHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lHTnZiblJsZUhSTlpXNTFMRnh1SUNBZ0lITmxkRU52Ym5SbGVIUk5aVzUxTEZ4dUlDQjlPMXh1ZlR0Y2JpSmRmUT09IiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIF9wcm9wcyR0ZXh0ID0gcHJvcHMudGV4dCxcbiAgICAgIHRleHQgPSBfcHJvcHMkdGV4dCA9PT0gdm9pZCAwID8gJycgOiBfcHJvcHMkdGV4dCxcbiAgICAgIF9wcm9wcyRvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgIG9uQ2xpY2sgPSBfcHJvcHMkb25DbGljayA9PT0gdm9pZCAwID8gbm9vcCA6IF9wcm9wcyRvbkNsaWNrO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9wcy5jb250ZXh0TWVudSkge1xuICAgICAgcHJvcHMuY29udGV4dE1lbnUuYWRkSXRlbSh0ZXh0LCBvbkNsaWNrLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByb3BzLmNvbnRleHRNZW51KSB7XG4gICAgICAgIHByb3BzLmNvbnRleHRNZW51LnJlbW92ZUl0ZW0odGV4dCwgb25DbGljayk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3Byb3BzLmNvbnRleHRNZW51LCBwcm9wcy50ZXh0LCBwcm9wcy5vbkNsaWNrXSk7XG4gIHJldHVybiBudWxsO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5RGIyNTBaWGgwVFdWdWRTOUpkR1Z0TG5SemVDSmRMQ0p1WVcxbGN5STZXeUoxYzJWRlptWmxZM1FpTENKdWIyOXdJaXdpY0hKdmNITWlMQ0owWlhoMElpd2liMjVEYkdsamF5SXNJbU52Ym5SbGVIUk5aVzUxSWl3aVlXUmtTWFJsYlNJc0luSmxiVzkyWlVsMFpXMGlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJMRk5CUVZOQkxGTkJRVlFzVVVGQk1FSXNUMEZCTVVJN08wRkJVMEVzU1VGQlRVTXNTVUZCU1N4SFFVRkhMRk5CUVZCQkxFbEJRVThzUjBGQldTeERRVUZGTEVOQlFUTkNPenRCUVVWQkxHZENRVUZsTEZsQlFXbERPMEZCUVVFc1RVRkJhRU5ETEV0QlFXZERMSFZGUVVGUUxFVkJRVTg3UVVGRE9VTXNiMEpCUVhORFFTeExRVUYwUXl4RFFVRlJReXhKUVVGU08wRkJRVUVzVFVGQlVVRXNTVUZCVWl3MFFrRkJaU3hGUVVGbU8wRkJRVUVzZFVKQlFYTkRSQ3hMUVVGMFF5eERRVUZ0UWtVc1QwRkJia0k3UVVGQlFTeE5RVUZ0UWtFc1QwRkJia0lzSzBKQlFUWkNTQ3hKUVVFM1FqdEJRVU5CUkN4RlFVRkJRU3hUUVVGVExFTkJRVU1zV1VGQlRUdEJRVU5rTEZGQlFVbEZMRXRCUVVzc1EwRkJRMGNzVjBGQlZpeEZRVUYxUWp0QlFVTnlRa2dzVFVGQlFVRXNTMEZCU3l4RFFVRkRSeXhYUVVGT0xFTkJRV3RDUXl4UFFVRnNRaXhEUVVFd1FrZ3NTVUZCTVVJc1JVRkJaME5ETEU5QlFXaERMRVZCUVhsRExFTkJRWHBETzBGQlEwUTdPMEZCUTBRc1YwRkJUeXhaUVVGTk8wRkJRMWdzVlVGQlNVWXNTMEZCU3l4RFFVRkRSeXhYUVVGV0xFVkJRWFZDTzBGQlEzSkNTQ3hSUVVGQlFTeExRVUZMTEVOQlFVTkhMRmRCUVU0c1EwRkJhMEpGTEZWQlFXeENMRU5CUVRaQ1NpeEpRVUUzUWl4RlFVRnRRME1zVDBGQmJrTTdRVUZEUkR0QlFVTkdMRXRCU2tRN1FVRkxSQ3hIUVZSUkxFVkJVMDRzUTBGQlEwWXNTMEZCU3l4RFFVRkRSeXhYUVVGUUxFVkJRVzlDU0N4TFFVRkxMRU5CUVVORExFbEJRVEZDTEVWQlFXZERSQ3hMUVVGTExFTkJRVU5GTEU5QlFYUkRMRU5CVkUwc1EwRkJWRHRCUVZWQkxGTkJRVThzU1VGQlVEdEJRVU5FTEVOQllrUWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUIxYzJWRlptWmxZM1FnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUJOWVhCRGFHbHNaRkJ5YjNCeklIMGdabkp2YlNBbkxpNHZZMjl0Ylc5dUwyMWhjQ2M3WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1EyOXVkR1Y0ZEUxbGJuVkpkR1Z0SUdWNGRHVnVaSE1nVFdGd1EyaHBiR1JRY205d2N5QjdYRzRnSUdOdmJuUmxlSFJOWlc1MVB6b2dRVTFoY0M1RGIyNTBaWGgwVFdWdWRUdGNiaUFnZEdWNGREODZJSE4wY21sdVp6dGNiaUFnYjI1RGJHbGphejg2SUNobGRtVnVkRG9nVFc5MWMyVkZkbVZ1ZENrZ1BUNGdkbTlwWkR0Y2JuMWNibHh1WTI5dWMzUWdibTl2Y0NBOUlHWjFibU4wYVc5dUlDZ3BJSHQ5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2NISnZjSE02SUVOdmJuUmxlSFJOWlc1MVNYUmxiU0E5SUh0OUtTQTlQaUI3WEc0Z0lHTnZibk4wSUhzZ2RHVjRkQ0E5SUNjbkxDQnZia05zYVdOcklEMGdibTl2Y0NCOUlEMGdjSEp2Y0hNN1hHNGdJSFZ6WlVWbVptVmpkQ2dvS1NBOVBpQjdYRzRnSUNBZ2FXWWdLSEJ5YjNCekxtTnZiblJsZUhSTlpXNTFLU0I3WEc0Z0lDQWdJQ0J3Y205d2N5NWpiMjUwWlhoMFRXVnVkUzVoWkdSSmRHVnRLSFJsZUhRc0lHOXVRMnhwWTJzc0lERXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdhV1lnS0hCeWIzQnpMbU52Ym5SbGVIUk5aVzUxS1NCN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG1OdmJuUmxlSFJOWlc1MUxuSmxiVzkyWlVsMFpXMG9kR1Y0ZEN3Z2IyNURiR2xqYXlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JpQWdmU3dnVzNCeWIzQnpMbU52Ym5SbGVIUk5aVzUxTENCd2NtOXdjeTUwWlhoMExDQndjbTl3Y3k1dmJrTnNhV05yWFNrN1hHNGdJSEpsZEhWeWJpQnVkV3hzTzF4dWZUdGNiaUpkZlE9PSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VJbXBlcmF0aXZlSGFuZGxlLCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHRNZW51IH0gZnJvbSAnLi91c2VDb250ZXh0TWVudSc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xudmFyIENvbnRleHRNZW51ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF91c2VDb250ZXh0TWVudSA9IHVzZUNvbnRleHRNZW51KHByb3BzKSxcbiAgICAgIGNvbnRleHRNZW51ID0gX3VzZUNvbnRleHRNZW51LmNvbnRleHRNZW51O1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJvcHMpLCB7fSwge1xuICAgICAgY29udGV4dE1lbnU6IGNvbnRleHRNZW51XG4gICAgfSk7XG4gIH0pO1xuICB2YXIgY2hpbGRzID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShwcm9wcy5jaGlsZHJlbik7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgQU1hcCAmJiBjb250ZXh0TWVudSAmJiBjaGlsZHMubWFwKGZ1bmN0aW9uIChjaGlsZCwga2V5KSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgY2hpbGQucHJvcHMpLCB7fSwge1xuICAgICAgQU1hcDogQU1hcCxcbiAgICAgIG1hcDogcHJvcHMubWFwLFxuICAgICAgY29udGV4dE1lbnU6IGNvbnRleHRNZW51LFxuICAgICAga2V5OiBrZXlcbiAgICB9KSk7XG4gIH0pKTtcbn0pO1xuQ29udGV4dE1lbnUuSXRlbSA9IEl0ZW07XG5leHBvcnQgZGVmYXVsdCBDb250ZXh0TWVudTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlEYjI1MFpYaDBUV1Z1ZFM5cGJtUmxlQzUwYzNnaVhTd2libUZ0WlhNaU9sc2lVbVZoWTNRaUxDSjFjMlZKYlhCbGNtRjBhWFpsU0dGdVpHeGxJaXdpUm5KaFoyMWxiblFpTENKMWMyVkRiMjUwWlhoMFRXVnVkU0lzSWtsMFpXMGlMQ0pEYjI1MFpYaDBUV1Z1ZFNJc0ltWnZjbmRoY21SU1pXWWlMQ0p3Y205d2N5SXNJbkpsWmlJc0ltTnZiblJsZUhSTlpXNTFJaXdpWTJocGJHUnpJaXdpUTJocGJHUnlaVzRpTENKMGIwRnljbUY1SWl3aVkyaHBiR1J5Wlc0aUxDSkJUV0Z3SWl3aWJXRndJaXdpWTJocGJHUWlMQ0pyWlhraUxDSnBjMVpoYkdsa1JXeGxiV1Z1ZENJc0ltTnNiMjVsUld4bGJXVnVkQ0pkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEU5QlFVOUJMRXRCUVZBc1NVRkJaMEpETEcxQ1FVRm9RaXhGUVVGeFEwTXNVVUZCY2tNc1VVRkJjVVFzVDBGQmNrUTdRVUZGUVN4VFFVRlRReXhqUVVGVUxGRkJRU3RDTEd0Q1FVRXZRanRCUVVOQkxFOUJRVTlETEVsQlFWQXNUVUZCYVVJc1VVRkJha0k3UVVGSlFTeEpRVUZOUXl4WFFVRlhMR2RDUVVGSFRDeExRVUZMTEVOQlFVTk5MRlZCUVU0c1EwRkJjVVFzVlVGQlEwTXNTMEZCUkN4RlFVRlJReXhIUVVGU0xFVkJRV2RDTzBGQlEzWkdMSGRDUVVGM1Frd3NZMEZCWXl4RFFVRkRTU3hMUVVGRUxFTkJRWFJETzBGQlFVRXNUVUZCVVVVc1YwRkJVaXh0UWtGQlVVRXNWMEZCVWpzN1FVRkRRVklzUlVGQlFVRXNiVUpCUVcxQ0xFTkJRVU5QTEVkQlFVUXNSVUZCVFR0QlFVRkJMREpEUVVGWlJDeExRVUZhTzBGQlFXMUNSU3hOUVVGQlFTeFhRVUZYTEVWQlFWaEJPMEZCUVc1Q08wRkJRVUVzUjBGQlRpeERRVUZ1UWp0QlFVTkJMRTFCUVUxRExFMUJRVTBzUjBGQlIxWXNTMEZCU3l4RFFVRkRWeXhSUVVGT0xFTkJRV1ZETEU5QlFXWXNRMEZCZFVKTUxFdEJRVXNzUTBGQlEwMHNVVUZCTjBJc1EwRkJaanRCUVVOQkxITkNRVU5GTEc5Q1FVRkRMRkZCUVVRc1VVRkRSME1zU1VGQlNTeEpRVU5JVEN4WFFVUkVMRWxCUlVORExFMUJRVTBzUTBGQlEwc3NSMEZCVUN4RFFVRlhMRlZCUVVORExFdEJRVVFzUlVGQlVVTXNSMEZCVWl4RlFVRm5RanRCUVVONlFpeFJRVUZKTEdWQlFVTnFRaXhMUVVGTExFTkJRVU5yUWl4alFVRk9MRU5CUVhGQ1JpeExRVUZ5UWl4RFFVRk1MRVZCUVd0RExFOUJRVThzU1VGQlVEdEJRVU5zUXl4M1FrRkJUMmhDTEV0QlFVc3NRMEZCUTIxQ0xGbEJRVTRzUTBGQmJVSklMRXRCUVc1Q0xHdERRVUVyUWtFc1MwRkJTeXhEUVVGRFZDeExRVUZ5UXp0QlFVRTBRMDhzVFVGQlFVRXNTVUZCU1N4RlFVRktRU3hKUVVFMVF6dEJRVUZyUkVNc1RVRkJRVUVzUjBGQlJ5eEZRVUZGVWl4TFFVRkxMRU5CUVVOUkxFZEJRVGRFTzBGQlFXdEZUaXhOUVVGQlFTeFhRVUZYTEVWQlFWaEJMRmRCUVd4Rk8wRkJRU3RGVVN4TlFVRkJRU3hIUVVGSExFVkJRVWhCTzBGQlFTOUZMRTlCUVZBN1FVRkRSQ3hIUVVoRUxFTkJTRW9zUTBGRVJqdEJRVlZFTEVOQlpHMUNMRU5CUVhCQ08wRkJiVUpEV2l4WFFVRkVMRU5CUVRaQ1JDeEpRVUUzUWl4SFFVRnZRMEVzU1VGQmNFTTdRVUZGUVN4bFFVRmxReXhYUVVGbUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxZV04wTENCN0lIVnpaVWx0Y0dWeVlYUnBkbVZJWVc1a2JHVXNJRVp5WVdkdFpXNTBJSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dUV0Z3UTJocGJHUlFjbTl3Y3lCOUlHWnliMjBnSnk0dUwyTnZiVzF2Ymk5dFlYQW5PMXh1YVcxd2IzSjBJSHNnZFhObFEyOXVkR1Y0ZEUxbGJuVWdmU0JtY205dElDY3VMM1Z6WlVOdmJuUmxlSFJOWlc1MUp6dGNibWx0Y0c5eWRDQkpkR1Z0SUdaeWIyMGdKeTR2U1hSbGJTYzdYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5dWRHVjRkRTFsYm5WUWNtOXdjeUJsZUhSbGJtUnpJRTFoY0VOb2FXeGtVSEp2Y0hNc0lFRk5ZWEF1UTI5dWRHVjRkRTFsYm5WUGNIUnBiMjV6TENCQlRXRndMa052Ym5SbGVIUk5aVzUxUlhabGJuUnpJSHQ5WEc1Y2JtTnZibk4wSUVOdmJuUmxlSFJOWlc1MUlEMGdVbVZoWTNRdVptOXlkMkZ5WkZKbFpqeERiMjUwWlhoMFRXVnVkVkJ5YjNCekxDQkRiMjUwWlhoMFRXVnVkVkJ5YjNCelBpZ29jSEp2Y0hNc0lISmxaaWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR052Ym5SbGVIUk5aVzUxSUgwZ1BTQjFjMlZEYjI1MFpYaDBUV1Z1ZFNod2NtOXdjeWs3WEc0Z0lIVnpaVWx0Y0dWeVlYUnBkbVZJWVc1a2JHVW9jbVZtTENBb0tTQTlQaUFvZXlBdUxpNXdjbTl3Y3l3Z1kyOXVkR1Y0ZEUxbGJuVWdmU2twTzF4dUlDQmpiMjV6ZENCamFHbHNaSE1nUFNCU1pXRmpkQzVEYUdsc1pISmxiaTUwYjBGeWNtRjVLSEJ5YjNCekxtTm9hV3hrY21WdUtUdGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThSbkpoWjIxbGJuUStYRzRnSUNBZ0lDQjdRVTFoY0NBbUpseHVJQ0FnSUNBZ0lDQmpiMjUwWlhoMFRXVnVkU0FtSmx4dUlDQWdJQ0FnSUNCamFHbHNaSE11YldGd0tDaGphR2xzWkN3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0NGU1pXRmpkQzVwYzFaaGJHbGtSV3hsYldWdWRDaGphR2xzWkNrcElISmxkSFZ5YmlCdWRXeHNPMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJTWldGamRDNWpiRzl1WlVWc1pXMWxiblFvWTJocGJHUXNJSHNnTGk0dVkyaHBiR1F1Y0hKdmNITXNJRUZOWVhBc0lHMWhjRG9nY0hKdmNITXViV0Z3TENCamIyNTBaWGgwVFdWdWRTd2dhMlY1SUgwcE8xeHVJQ0FnSUNBZ0lDQjlLWDFjYmlBZ0lDQThMMFp5WVdkdFpXNTBQbHh1SUNBcE8xeHVmU2s3WEc1Y2JuUjVjR1VnUTI5dWRHVjRkRTFsYm5VZ1BTQjBlWEJsYjJZZ1EyOXVkR1Y0ZEUxbGJuVWdKaUI3WEc0Z0lFbDBaVzA2SUhSNWNHVnZaaUJKZEdWdE8xeHVmVHRjYmloRGIyNTBaWGgwVFdWdWRTQmhjeUJEYjI1MFpYaDBUV1Z1ZFNrdVNYUmxiU0E5SUVsMFpXMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRU52Ym5SbGVIUk5aVzUxSUdGeklFTnZiblJsZUhSTlpXNTFPMXh1SWwxOSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wibWFwXCIsIFwidHlwZVwiLCBcIm9uQ29tcGxldGVcIiwgXCJvbkVycm9yXCJdO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCB2YXIgdXNlR2VvbG9jYXRpb24gPSBmdW5jdGlvbiB1c2VHZW9sb2NhdGlvbigpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgbWFwID0gcHJvcHMubWFwLFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAncG9zaXRpb24nIDogX3Byb3BzJHR5cGUsXG4gICAgICBvbkNvbXBsZXRlID0gcHJvcHMub25Db21wbGV0ZSxcbiAgICAgIG9uRXJyb3IgPSBwcm9wcy5vbkVycm9yLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIF9leGNsdWRlZCk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKCksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGdlb2xvY2F0aW9uID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldEdlb2xvY2F0aW9uID0gX3VzZVN0YXRlMlsxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChBTWFwICYmICFnZW9sb2NhdGlvbikge1xuICAgICAgdmFyIGluc3RhbmNlO1xuICAgICAgQU1hcC5wbHVnaW4oWydBTWFwLkdlb2xvY2F0aW9uJ10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgQU1hcC5HZW9sb2NhdGlvbihfb2JqZWN0U3ByZWFkKHt9LCBvdGhlcikpO1xuICAgICAgICBzZXRHZW9sb2NhdGlvbihpbnN0YW5jZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgIHNldEdlb2xvY2F0aW9uKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCBbQU1hcF0pO1xuXG4gIGZ1bmN0aW9uIGNhbGxiYWNrKHN0YXR1cywgcmVzdWx0KSB7XG4gICAgaWYgKHN0YXR1cyA9PT0gJ2NvbXBsZXRlJyAmJiBvbkNvbXBsZXRlKSB7XG4gICAgICBvbkNvbXBsZXRlKHJlc3VsdCk7XG4gICAgfSBlbHNlIGlmIChvbkVycm9yKSB7XG4gICAgICBvbkVycm9yKHJlc3VsdCk7XG4gICAgfVxuICB9XG5cbiAgdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCEvXihwb3NpdGlvbnxjaXR5SW5mbykkLy50ZXN0KHR5cGUpKSByZXR1cm47XG4gICAgdmFyIGZ1bk5hbWUgPSB0eXBlID09PSAncG9zaXRpb24nID8gJ2dldEN1cnJlbnRQb3NpdGlvbicgOiAnZ2V0Q2l0eUluZm8nO1xuXG4gICAgaWYgKGdlb2xvY2F0aW9uICYmIG1hcCkge1xuICAgICAgZ2VvbG9jYXRpb25bZnVuTmFtZV0oY2FsbGJhY2spO1xuICAgICAgbWFwLmFkZENvbnRyb2woZ2VvbG9jYXRpb24pO1xuICAgIH0gZWxzZSBpZiAoZ2VvbG9jYXRpb24pIHtcbiAgICAgIGdlb2xvY2F0aW9uW2Z1bk5hbWVdKGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sIFtnZW9sb2NhdGlvbl0pO1xuICByZXR1cm4ge1xuICAgIGdlb2xvY2F0aW9uOiBnZW9sb2NhdGlvbixcbiAgICBzZXRHZW9sb2NhdGlvbjogc2V0R2VvbG9jYXRpb25cbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5SFpXOXNiMk5oZEdsdmJpOTFjMlZIWlc5c2IyTmhkR2x2Ymk1MGMzZ2lYU3dpYm1GdFpYTWlPbHNpZFhObFUzUmhkR1VpTENKMWMyVk5aVzF2SWl3aWRYTmxSV1ptWldOMElpd2lkWE5sUjJWdmJHOWpZWFJwYjI0aUxDSndjbTl3Y3lJc0ltMWhjQ0lzSW5SNWNHVWlMQ0p2YmtOdmJYQnNaWFJsSWl3aWIyNUZjbkp2Y2lJc0ltOTBhR1Z5SWl3aVoyVnZiRzlqWVhScGIyNGlMQ0p6WlhSSFpXOXNiMk5oZEdsdmJpSXNJa0ZOWVhBaUxDSnBibk4wWVc1alpTSXNJbkJzZFdkcGJpSXNJa2RsYjJ4dlkyRjBhVzl1SWl3aWRXNWtaV1pwYm1Wa0lpd2lZMkZzYkdKaFkyc2lMQ0p6ZEdGMGRYTWlMQ0p5WlhOMWJIUWlMQ0owWlhOMElpd2lablZ1VG1GdFpTSXNJbUZrWkVOdmJuUnliMndpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFTeFRRVUZUUVN4UlFVRlVMRVZCUVcxQ1F5eFBRVUZ1UWl4RlFVRTBRa01zVTBGQk5VSXNVVUZCTmtNc1QwRkJOME03UVVGSlFTeFBRVUZQTEVsQlFVMURMR05CUVdNc1IwRkJSeXhUUVVGcVFrRXNZMEZCYVVJc1IwRkJhME03UVVGQlFTeE5RVUZxUTBNc1MwRkJhVU1zZFVWQlFYcENMRVZCUVhsQ096dEJRVU01UkN4TlFVRlJReXhIUVVGU0xFZEJRV3RGUkN4TFFVRnNSU3hEUVVGUlF5eEhRVUZTTzBGQlFVRXNiMEpCUVd0RlJDeExRVUZzUlN4RFFVRmhSU3hKUVVGaU8wRkJRVUVzVFVGQllVRXNTVUZCWWl3MFFrRkJiMElzVlVGQmNFSTdRVUZCUVN4TlFVRm5RME1zVlVGQmFFTXNSMEZCYTBWSUxFdEJRV3hGTEVOQlFXZERSeXhWUVVGb1F6dEJRVUZCTEUxQlFUUkRReXhQUVVFMVF5eEhRVUZyUlVvc1MwRkJiRVVzUTBGQk5FTkpMRTlCUVRWRE8wRkJRVUVzVFVGQmQwUkRMRXRCUVhoRUxEUkNRVUZyUlV3c1MwRkJiRVU3TzBGQlEwRXNhMEpCUVhORFNpeFJRVUZSTEVWQlFUbERPMEZCUVVFN1FVRkJRU3hOUVVGUFZTeFhRVUZRTzBGQlFVRXNUVUZCYjBKRExHTkJRWEJDT3p0QlFVTkJWQ3hGUVVGQlFTeFRRVUZUTEVOQlFVTXNXVUZCVFR0QlFVTmtMRkZCUVVsVkxFbEJRVWtzU1VGQlNTeERRVUZEUml4WFFVRmlMRVZCUVRCQ08wRkJRM2hDTEZWQlFVbEhMRkZCUVVvN1FVRkRRVVFzVFVGQlFVRXNTVUZCU1N4RFFVRkRSU3hOUVVGTUxFTkJRVmtzUTBGQlF5eHJRa0ZCUkN4RFFVRmFMRVZCUVd0RExGbEJRVTA3UVVGRGRFTkVMRkZCUVVGQkxGRkJRVkVzUjBGQlJ5eEpRVUZKUkN4SlFVRkpMRU5CUVVOSExGZEJRVlFzYlVKQlFUQkNUaXhMUVVFeFFpeEZRVUZZTzBGQlEwRkZMRkZCUVVGQkxHTkJRV01zUTBGQlEwVXNVVUZCUkN4RFFVRmtPMEZCUTBRc1QwRklSRHRCUVVsQkxHRkJRVThzV1VGQlRUdEJRVU5ZTEZsQlFVbEJMRkZCUVVvc1JVRkJZenRCUVVOYVJpeFZRVUZCUVN4alFVRmpMRU5CUVVOTExGTkJRVVFzUTBGQlpEdEJRVU5FTzBGQlEwWXNUMEZLUkR0QlFVdEVPMEZCUTBZc1IwRmlVU3hGUVdGT0xFTkJRVU5LTEVsQlFVUXNRMEZpVFN4RFFVRlVPenRCUVdWQkxGZEJRVk5MTEZGQlFWUXNRMEZCYTBKRExFMUJRV3hDTEVWQlFXZEVReXhOUVVGb1JDeEZRVUZuUmp0QlFVTTVSU3hSUVVGSlJDeE5RVUZOTEV0QlFVc3NWVUZCV0N4SlFVRjVRbGdzVlVGQk4wSXNSVUZCZVVNN1FVRkRka05CTEUxQlFVRkJMRlZCUVZVc1EwRkJRMWtzVFVGQlJDeERRVUZXTzBGQlEwUXNTMEZHUkN4TlFVVlBMRWxCUVVsWUxFOUJRVW9zUlVGQllUdEJRVU5zUWtFc1RVRkJRVUVzVDBGQlR5eERRVUZEVnl4TlFVRkVMRU5CUVZBN1FVRkRSRHRCUVVOR096dEJRVVZFYkVJc1JVRkJRVUVzVDBGQlR5eERRVUZETEZsQlFVMDdRVUZEV2l4UlFVRkpMRU5CUVVNc2QwSkJRWGRDYlVJc1NVRkJlRUlzUTBGQk5rSmtMRWxCUVRkQ0xFTkJRVXdzUlVGQmVVTTdRVUZEZWtNc1VVRkJUV1VzVDBGQlR5eEhRVUZIWml4SlFVRkpMRXRCUVVzc1ZVRkJWQ3hIUVVGelFpeHZRa0ZCZEVJc1IwRkJOa01zWVVGQk4wUTdPMEZCUTBFc1VVRkJTVWtzVjBGQlZ5eEpRVUZKVEN4SFFVRnVRaXhGUVVGM1FqdEJRVU4wUWtzc1RVRkJRVUVzVjBGQlZ5eERRVUZEVnl4UFFVRkVMRU5CUVZnc1EwRkJjVUpLTEZGQlFYSkNPMEZCUTBGYUxFMUJRVUZCTEVkQlFVY3NRMEZCUTJsQ0xGVkJRVW9zUTBGQlpWb3NWMEZCWmp0QlFVTkVMRXRCU0VRc1RVRkhUeXhKUVVGSlFTeFhRVUZLTEVWQlFXbENPMEZCUTNSQ1FTeE5RVUZCUVN4WFFVRlhMRU5CUVVOWExFOUJRVVFzUTBGQldDeERRVUZ4UWtvc1VVRkJja0k3UVVGRFJEdEJRVU5HTEVkQlZFMHNSVUZUU2l4RFFVRkRVQ3hYUVVGRUxFTkJWRWtzUTBGQlVEdEJRVmRCTEZOQlFVODdRVUZEVEVFc1NVRkJRVUVzVjBGQlZ5eEZRVUZZUVN4WFFVUkxPMEZCUlV4RExFbEJRVUZCTEdOQlFXTXNSVUZCWkVFN1FVRkdTeXhIUVVGUU8wRkJTVVFzUTBGNlEwMGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUIxYzJWVGRHRjBaU3dnZFhObFRXVnRieXdnZFhObFJXWm1aV04wSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnUjJWdmJHOWpZWFJwYjI1UWNtOXdjeUI5SUdaeWIyMGdKeTRuTzF4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElGVnpaVWRsYjJ4dlkyRjBhVzl1SUdWNGRHVnVaSE1nUjJWdmJHOWpZWFJwYjI1UWNtOXdjeUI3ZlZ4dVpYaHdiM0owSUdOdmJuTjBJSFZ6WlVkbGIyeHZZMkYwYVc5dUlEMGdLSEJ5YjNCeklEMGdlMzBnWVhNZ1ZYTmxSMlZ2Ykc5allYUnBiMjRwSUQwK0lIdGNiaUFnWTI5dWMzUWdleUJ0WVhBc0lIUjVjR1VnUFNBbmNHOXphWFJwYjI0bkxDQnZia052YlhCc1pYUmxMQ0J2YmtWeWNtOXlMQ0F1TGk1dmRHaGxjaUI5SUQwZ2NISnZjSE03WEc0Z0lHTnZibk4wSUZ0blpXOXNiMk5oZEdsdmJpd2djMlYwUjJWdmJHOWpZWFJwYjI1ZElEMGdkWE5sVTNSaGRHVThRVTFoY0M1SFpXOXNiMk5oZEdsdmJqNG9LVHRjYmlBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0JwWmlBb1FVMWhjQ0FtSmlBaFoyVnZiRzlqWVhScGIyNHBJSHRjYmlBZ0lDQWdJR3hsZENCcGJuTjBZVzVqWlRvZ1FVMWhjQzVIWlc5c2IyTmhkR2x2Ymp0Y2JpQWdJQ0FnSUVGTllYQXVjR3gxWjJsdUtGc25RVTFoY0M1SFpXOXNiMk5oZEdsdmJpZGRMQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR2x1YzNSaGJtTmxJRDBnYm1WM0lFRk5ZWEF1UjJWdmJHOWpZWFJwYjI0b2V5QXVMaTV2ZEdobGNpQjlLVHRjYmlBZ0lDQWdJQ0FnYzJWMFIyVnZiRzlqWVhScGIyNG9hVzV6ZEdGdVkyVXBPMXh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYVc1emRHRnVZMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnpaWFJIWlc5c2IyTmhkR2x2YmloMWJtUmxabWx1WldRcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNiaUFnZlN3Z1cwRk5ZWEJkS1R0Y2JseHVJQ0JtZFc1amRHbHZiaUJqWVd4c1ltRmpheWh6ZEdGMGRYTTZJQ2RsY25KdmNpY2dmQ0FuWTI5dGNHeGxkR1VuTENCeVpYTjFiSFE2SUVGTllYQXVSMlZ2Ykc5allYUnBiMjVTWlhOMWJIUXBJSHRjYmlBZ0lDQnBaaUFvYzNSaGRIVnpJRDA5UFNBblkyOXRjR3hsZEdVbklDWW1JRzl1UTI5dGNHeGxkR1VwSUh0Y2JpQWdJQ0FnSUc5dVEyOXRjR3hsZEdVb2NtVnpkV3gwS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0c5dVJYSnliM0lwSUh0Y2JpQWdJQ0FnSUc5dVJYSnliM0lvY21WemRXeDBLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0IxYzJWTlpXMXZLQ2dwSUQwK0lIdGNiaUFnSUNCcFppQW9JUzllS0hCdmMybDBhVzl1ZkdOcGRIbEpibVp2S1NRdkxuUmxjM1FvZEhsd1pTa3BJSEpsZEhWeWJqdGNiaUFnSUNCamIyNXpkQ0JtZFc1T1lXMWxJRDBnZEhsd1pTQTlQVDBnSjNCdmMybDBhVzl1SnlBL0lDZG5aWFJEZFhKeVpXNTBVRzl6YVhScGIyNG5JRG9nSjJkbGRFTnBkSGxKYm1adkp6dGNiaUFnSUNCcFppQW9aMlZ2Ykc5allYUnBiMjRnSmlZZ2JXRndLU0I3WEc0Z0lDQWdJQ0JuWlc5c2IyTmhkR2x2Ymx0bWRXNU9ZVzFsWFNoallXeHNZbUZqYXlrN1hHNGdJQ0FnSUNCdFlYQXVZV1JrUTI5dWRISnZiQ2huWlc5c2IyTmhkR2x2YmlrN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNoblpXOXNiMk5oZEdsdmJpa2dlMXh1SUNBZ0lDQWdaMlZ2Ykc5allYUnBiMjViWm5WdVRtRnRaVjBvWTJGc2JHSmhZMnNwTzF4dUlDQWdJSDFjYmlBZ2ZTd2dXMmRsYjJ4dlkyRjBhVzl1WFNrN1hHNWNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQm5aVzlzYjJOaGRHbHZiaXhjYmlBZ0lDQnpaWFJIWlc5c2IyTmhkR2x2Yml4Y2JpQWdmVHRjYm4wN1hHNGlYWDA9IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VHZW9sb2NhdGlvbiB9IGZyb20gJy4vdXNlR2VvbG9jYXRpb24nO1xuZXhwb3J0IHZhciBHZW9sb2NhdGlvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfdXNlR2VvbG9jYXRpb24gPSB1c2VHZW9sb2NhdGlvbihwcm9wcyksXG4gICAgICBnZW9sb2NhdGlvbiA9IF91c2VHZW9sb2NhdGlvbi5nZW9sb2NhdGlvbjtcblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgIGdlb2xvY2F0aW9uOiBnZW9sb2NhdGlvblxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG51bGw7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlIWlc5c2IyTmhkR2x2Ymk5cGJtUmxlQzUwYzNnaVhTd2libUZ0WlhNaU9sc2lVbVZoWTNRaUxDSjFjMlZKYlhCbGNtRjBhWFpsU0dGdVpHeGxJaXdpZFhObFIyVnZiRzlqWVhScGIyNGlMQ0pIWlc5c2IyTmhkR2x2YmlJc0ltWnZjbmRoY21SU1pXWWlMQ0p3Y205d2N5SXNJbkpsWmlJc0ltZGxiMnh2WTJGMGFXOXVJbDBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzVDBGQlQwRXNTMEZCVUN4SlFVRm5Ra01zYlVKQlFXaENMRkZCUVRKRExFOUJRVE5ETzBGQlJVRXNVMEZCVTBNc1kwRkJWQ3hSUVVFclFpeHJRa0ZCTDBJN1FVRlhRU3hQUVVGUExFbEJRVTFETEZkQlFWY3NaMEpCUVVkSUxFdEJRVXNzUTBGQlEwa3NWVUZCVGl4RFFVRnhSQ3hWUVVGRFF5eExRVUZFTEVWQlFWRkRMRWRCUVZJc1JVRkJaMEk3UVVGRE9VWXNkMEpCUVhkQ1NpeGpRVUZqTEVOQlFVTkhMRXRCUVVRc1EwRkJkRU03UVVGQlFTeE5RVUZSUlN4WFFVRlNMRzFDUVVGUlFTeFhRVUZTT3p0QlFVTkJUaXhGUVVGQlFTeHRRa0ZCYlVJc1EwRkJRMHNzUjBGQlJDeEZRVUZOTzBGQlFVRXNNa05CUVZsRUxFdEJRVm83UVVGQmJVSkZMRTFCUVVGQkxGZEJRVmNzUlVGQldFRTdRVUZCYmtJN1FVRkJRU3hIUVVGT0xFTkJRVzVDTzBGQlEwRXNVMEZCVHl4SlFVRlFPMEZCUTBRc1EwRktNRUlzUTBGQmNFSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdVbVZoWTNRc0lIc2dkWE5sU1cxd1pYSmhkR2wyWlVoaGJtUnNaU0I5SUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQjdJRTkyWlhKc1lYbFFjbTl3Y3lCOUlHWnliMjBnSnk0dUwyTnZiVzF2Ymk5dFlYQW5PMXh1YVcxd2IzSjBJSHNnZFhObFIyVnZiRzlqWVhScGIyNGdmU0JtY205dElDY3VMM1Z6WlVkbGIyeHZZMkYwYVc5dUp6dGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JIWlc5c2IyTmhkR2x2YmxCeWIzQnpJR1Y0ZEdWdVpITWdUM1psY214aGVWQnliM0J6TENCQlRXRndMa2RsYjJ4dlkyRjBhVzl1UlhabGJuUnpMQ0JCVFdGd0xrZGxiMnh2WTJGMGFXOXVUM0IwYVc5dWN5QjdYRzRnSUM4cUtseHVJQ0FnS2lEbHJwcmt2WTNuc2J2bG5vdGNiaUFnSUNvZ0xTQndiM05wZEdsdmJpRG9qcmZsajVZZzU1U281b2kzNTVxRTU3Sys1Nkd1NUwyTjU3MnU3N3lNNXB5SjVhU3g2TFNsNVllZzU0NkhYRzRnSUNBcUlDMGdZMmwwZVVsdVptOGc1cUM1NW8ydTU1U281b2kzSUVsUUlPaU90K1dQbGlEbmxLam1pTGZtaVlEbG5LamxuNDdsdUlMa3Y2SG1nYTljYmlBZ0lDb2dRR1JsWm1GMWJIUWdjRzl6YVhScGIyNWNiaUFnSUNvdlhHNGdJSFI1Y0dVL09pQW5jRzl6YVhScGIyNG5JSHdnSjJOcGRIbEpibVp2Snp0Y2JuMWNibVY0Y0c5eWRDQmpiMjV6ZENCSFpXOXNiMk5oZEdsdmJpQTlJRkpsWVdOMExtWnZjbmRoY21SU1pXWThSMlZ2Ykc5allYUnBiMjVRY205d2N5d2dSMlZ2Ykc5allYUnBiMjVRY205d2N6NG9LSEJ5YjNCekxDQnlaV1lwSUQwK0lIdGNiaUFnWTI5dWMzUWdleUJuWlc5c2IyTmhkR2x2YmlCOUlEMGdkWE5sUjJWdmJHOWpZWFJwYjI0b2NISnZjSE1wTzF4dUlDQjFjMlZKYlhCbGNtRjBhWFpsU0dGdVpHeGxLSEpsWml3Z0tDa2dQVDRnS0hzZ0xpNHVjSEp2Y0hNc0lHZGxiMnh2WTJGMGFXOXVJSDBwS1R0Y2JpQWdjbVYwZFhKdUlHNTFiR3c3WEc1OUtUdGNiaUpkZlE9PSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVmlzaWFibGUgfSBmcm9tICcuLi9jb21tb24vaG9va3MnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVNjYWxlQ29udHJvbCgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgc2NhbGVDb250cm9sID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFNjYWxlQ29udHJvbCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIG1hcCA9IHByb3BzLm1hcCxcbiAgICAgIHBvc2l0aW9uID0gcHJvcHMucG9zaXRpb24sXG4gICAgICB2aXNpYWJsZSA9IHByb3BzLnZpc2lhYmxlLFxuICAgICAgb2Zmc2V0ID0gcHJvcHMub2Zmc2V0O1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtYXAgJiYgIXNjYWxlQ29udHJvbCkge1xuICAgICAgdmFyIGluc3RhbmNlO1xuICAgICAgbWFwLnBsdWdpbihbJ0FNYXAuU2NhbGUnXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBBTWFwLlNjYWxlKHtcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgICAgICAgfSk7XG4gICAgICAgIG1hcC5hZGRDb250cm9sKGluc3RhbmNlKTtcbiAgICAgICAgc2V0U2NhbGVDb250cm9sKGluc3RhbmNlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgbWFwLnJlbW92ZUNvbnRyb2woaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW21hcF0pO1xuICB1c2VWaXNpYWJsZShzY2FsZUNvbnRyb2wsIHZpc2lhYmxlKTtcbiAgcmV0dXJuIHtcbiAgICBzY2FsZUNvbnRyb2w6IHNjYWxlQ29udHJvbCxcbiAgICBzZXRTY2FsZUNvbnRyb2w6IHNldFNjYWxlQ29udHJvbFxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OVRZMkZzWlVOdmJuUnliMnd2ZFhObFUyTmhiR1ZEYjI1MGNtOXNMblJ6ZUNKZExDSnVZVzFsY3lJNld5SjFjMlZGWm1abFkzUWlMQ0oxYzJWVGRHRjBaU0lzSW5WelpWWnBjMmxoWW14bElpd2lkWE5sVTJOaGJHVkRiMjUwY205c0lpd2ljSEp2Y0hNaUxDSnpZMkZzWlVOdmJuUnliMndpTENKelpYUlRZMkZzWlVOdmJuUnliMndpTENKdFlYQWlMQ0p3YjNOcGRHbHZiaUlzSW5acGMybGhZbXhsSWl3aWIyWm1jMlYwSWl3aWFXNXpkR0Z1WTJVaUxDSndiSFZuYVc0aUxDSkJUV0Z3SWl3aVUyTmhiR1VpTENKaFpHUkRiMjUwY205c0lpd2ljbVZ0YjNabFEyOXVkSEp2YkNKZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxGTkJRVk5CTEZOQlFWUXNSVUZCYjBKRExGRkJRWEJDTEZGQlFXOURMRTlCUVhCRE8wRkJSVUVzVTBGQlUwTXNWMEZCVkN4UlFVRTBRaXhwUWtGQk5VSTdRVUZKUVN4UFFVRlBMRk5CUVZORExHVkJRVlFzUjBGQmQwUTdRVUZCUVN4TlFVRXZRa01zUzBGQkswSXNkVVZCUVhaQ0xFVkJRWFZDT3p0QlFVTTNSQ3hyUWtGQmQwTklMRkZCUVZFc1JVRkJhRVE3UVVGQlFUdEJRVUZCTEUxQlFVOUpMRmxCUVZBN1FVRkJRU3hOUVVGeFFrTXNaVUZCY2tJN08wRkJRMEVzVFVGQlVVTXNSMEZCVWl4SFFVRTBRMGdzUzBGQk5VTXNRMEZCVVVjc1IwRkJVanRCUVVGQkxFMUJRV0ZETEZGQlFXSXNSMEZCTkVOS0xFdEJRVFZETEVOQlFXRkpMRkZCUVdJN1FVRkJRU3hOUVVGMVFrTXNVVUZCZGtJc1IwRkJORU5NTEV0QlFUVkRMRU5CUVhWQ1N5eFJRVUYyUWp0QlFVRkJMRTFCUVdsRFF5eE5RVUZxUXl4SFFVRTBRMDRzUzBGQk5VTXNRMEZCYVVOTkxFMUJRV3BETzBGQlEwRldMRVZCUVVGQkxGTkJRVk1zUTBGQlF5eFpRVUZOTzBGQlEyUXNVVUZCU1U4c1IwRkJSeXhKUVVGSkxFTkJRVU5HTEZsQlFWb3NSVUZCTUVJN1FVRkRlRUlzVlVGQlNVMHNVVUZCU2p0QlFVTkJTaXhOUVVGQlFTeEhRVUZITEVOQlFVTkxMRTFCUVVvc1EwRkJWeXhEUVVGRExGbEJRVVFzUTBGQldDeEZRVUV5UWl4WlFVRk5PMEZCUXk5Q1JDeFJRVUZCUVN4UlFVRlJMRWRCUVVjc1NVRkJTVVVzU1VGQlNTeERRVUZEUXl4TFFVRlVMRU5CUVdVN1FVRkRlRUpLTEZWQlFVRkJMRTFCUVUwc1JVRkJSVUVzVFVGRVowSTdRVUZGZUVKR0xGVkJRVUZCTEZGQlFWRXNSVUZCVWtFN1FVRkdkMElzVTBGQlppeERRVUZZTzBGQlNVRkVMRkZCUVVGQkxFZEJRVWNzUTBGQlExRXNWVUZCU2l4RFFVRmxTaXhSUVVGbU8wRkJRMEZNTEZGQlFVRkJMR1ZCUVdVc1EwRkJRMHNzVVVGQlJDeERRVUZtTzBGQlEwUXNUMEZRUkR0QlFWRkJMR0ZCUVU4c1dVRkJUVHRCUVVOWUxGbEJRVWxCTEZGQlFVb3NSVUZCWXp0QlFVTmFTaXhWUVVGQlFTeEhRVUZITEVOQlFVTlRMR0ZCUVVvc1EwRkJhMEpNTEZGQlFXeENPMEZCUTBRN1FVRkRSaXhQUVVwRU8wRkJTMFE3UVVGRFJpeEhRV3BDVVN4RlFXbENUaXhEUVVGRFNpeEhRVUZFTEVOQmFrSk5MRU5CUVZRN1FVRnRRa0ZNTEVWQlFVRkJMRmRCUVZjc1EwRkJRMGNzV1VGQlJDeEZRVUZuUWtrc1VVRkJhRUlzUTBGQldEdEJRVU5CTEZOQlFVODdRVUZEVEVvc1NVRkJRVUVzV1VGQldTeEZRVUZhUVN4WlFVUkxPMEZCUlV4RExFbEJRVUZCTEdWQlFXVXNSVUZCWmtFN1FVRkdTeXhIUVVGUU8wRkJTVVFpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCMWMyVkZabVpsWTNRc0lIVnpaVk4wWVhSbElIMGdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUhzZ1UyTmhiR1ZEYjI1MGNtOXNVSEp2Y0hNZ2ZTQm1jbTl0SUNjdUx5YzdYRzVwYlhCdmNuUWdleUIxYzJWV2FYTnBZV0pzWlNCOUlHWnliMjBnSnk0dUwyTnZiVzF2Ymk5b2IyOXJjeWM3WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1ZYTmxVMk5oYkdWRGIyNTBjbTlzSUdWNGRHVnVaSE1nVTJOaGJHVkRiMjUwY205c1VISnZjSE1nZTMxY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlIVnpaVk5qWVd4bFEyOXVkSEp2YkNod2NtOXdjeUE5SUh0OUlHRnpJRlZ6WlZOallXeGxRMjl1ZEhKdmJDa2dlMXh1SUNCamIyNXpkQ0JiYzJOaGJHVkRiMjUwY205c0xDQnpaWFJUWTJGc1pVTnZiblJ5YjJ4ZElEMGdkWE5sVTNSaGRHVThRVTFoY0M1VFkyRnNaVDRvS1R0Y2JpQWdZMjl1YzNRZ2V5QnRZWEFzSUhCdmMybDBhVzl1TENCMmFYTnBZV0pzWlN3Z2IyWm1jMlYwSUgwZ1BTQndjbTl3Y3p0Y2JpQWdkWE5sUldabVpXTjBLQ2dwSUQwK0lIdGNiaUFnSUNCcFppQW9iV0Z3SUNZbUlDRnpZMkZzWlVOdmJuUnliMndwSUh0Y2JpQWdJQ0FnSUd4bGRDQnBibk4wWVc1alpUb2dRVTFoY0M1RGIyNTBjbTlzTzF4dUlDQWdJQ0FnYldGd0xuQnNkV2RwYmloYkowRk5ZWEF1VTJOaGJHVW5YU3dnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JwYm5OMFlXNWpaU0E5SUc1bGR5QkJUV0Z3TGxOallXeGxLSHRjYmlBZ0lDQWdJQ0FnSUNCdlptWnpaWFE2SUc5bVpuTmxkQ3hjYmlBZ0lDQWdJQ0FnSUNCd2IzTnBkR2x2Yml4Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJRzFoY0M1aFpHUkRiMjUwY205c0tHbHVjM1JoYm1ObEtUdGNiaUFnSUNBZ0lDQWdjMlYwVTJOaGJHVkRiMjUwY205c0tHbHVjM1JoYm1ObEtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdjbVYwZFhKdUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1YzNSaGJtTmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2JXRndMbkpsYlc5MlpVTnZiblJ5YjJ3b2FXNXpkR0Z1WTJVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNiaUFnZlN3Z1cyMWhjRjBwTzF4dVhHNGdJSFZ6WlZacGMybGhZbXhsS0hOallXeGxRMjl1ZEhKdmJDRXNJSFpwYzJsaFlteGxLVHRjYmlBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0J6WTJGc1pVTnZiblJ5YjJ3c1hHNGdJQ0FnYzJWMFUyTmhiR1ZEYjI1MGNtOXNMRnh1SUNCOU8xeHVmVnh1SWwxOSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VJbXBlcmF0aXZlSGFuZGxlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2NhbGVDb250cm9sIH0gZnJvbSAnLi91c2VTY2FsZUNvbnRyb2wnO1xuZXhwb3J0IHZhciBTY2FsZUNvbnRyb2wgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX3VzZVNjYWxlQ29udHJvbCA9IHVzZVNjYWxlQ29udHJvbChwcm9wcyksXG4gICAgICBzY2FsZUNvbnRyb2wgPSBfdXNlU2NhbGVDb250cm9sLnNjYWxlQ29udHJvbDtcblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgIHNjYWxlQ29udHJvbDogc2NhbGVDb250cm9sXG4gICAgfSk7XG4gIH0sIFtzY2FsZUNvbnRyb2xdKTtcbiAgcmV0dXJuIG51bGw7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlUWTJGc1pVTnZiblJ5YjJ3dmFXNWtaWGd1ZEhONElsMHNJbTVoYldWeklqcGJJbEpsWVdOMElpd2lkWE5sU1cxd1pYSmhkR2wyWlVoaGJtUnNaU0lzSW5WelpWTmpZV3hsUTI5dWRISnZiQ0lzSWxOallXeGxRMjl1ZEhKdmJDSXNJbVp2Y25kaGNtUlNaV1lpTENKd2NtOXdjeUlzSW5KbFppSXNJbk5qWVd4bFEyOXVkSEp2YkNKZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxFOUJRVTlCTEV0QlFWQXNTVUZCWjBKRExHMUNRVUZvUWl4UlFVRXlReXhQUVVFelF6dEJRVVZCTEZOQlFWTkRMR1ZCUVZRc1VVRkJaME1zYlVKQlFXaERPMEZCU1VFc1QwRkJUeXhKUVVGTlF5eFpRVUZaTEdkQ1FVRkhTQ3hMUVVGTExFTkJRVU5KTEZWQlFVNHNRMEZCZFVRc1ZVRkJRME1zUzBGQlJDeEZRVUZSUXl4SFFVRlNMRVZCUVdkQ08wRkJRMnBITEhsQ1FVRjVRa29zWlVGQlpTeERRVUZEUnl4TFFVRkVMRU5CUVhoRE8wRkJRVUVzVFVGQlVVVXNXVUZCVWl4dlFrRkJVVUVzV1VGQlVqczdRVUZEUVU0c1JVRkJRVUVzYlVKQlFXMUNMRU5CUVVOTExFZEJRVVFzUlVGQlRUdEJRVUZCTERKRFFVRlpSQ3hMUVVGYU8wRkJRVzFDUlN4TlFVRkJRU3haUVVGWkxFVkJRVnBCTzBGQlFXNUNPMEZCUVVFc1IwRkJUaXhGUVVFd1F5eERRVUZEUVN4WlFVRkVMRU5CUVRGRExFTkJRVzVDTzBGQlEwRXNVMEZCVHl4SlFVRlFPMEZCUTBRc1EwRktNa0lzUTBGQmNrSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdVbVZoWTNRc0lIc2dkWE5sU1cxd1pYSmhkR2wyWlVoaGJtUnNaU0I5SUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQjdJRTkyWlhKc1lYbFFjbTl3Y3lCOUlHWnliMjBnSnk0dUwyTnZiVzF2Ymk5dFlYQW5PMXh1YVcxd2IzSjBJSHNnZFhObFUyTmhiR1ZEYjI1MGNtOXNJSDBnWm5KdmJTQW5MaTkxYzJWVFkyRnNaVU52Ym5SeWIyd25PMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUZOallXeGxRMjl1ZEhKdmJGQnliM0J6SUdWNGRHVnVaSE1nVDNabGNteGhlVkJ5YjNCekxDQkJUV0Z3TGxOallXeGxUM0IwYVc5dWN5QjdmVnh1WEc1bGVIQnZjblFnWTI5dWMzUWdVMk5oYkdWRGIyNTBjbTlzSUQwZ1VtVmhZM1F1Wm05eWQyRnlaRkpsWmp4VFkyRnNaVU52Ym5SeWIyeFFjbTl3Y3l3Z1UyTmhiR1ZEYjI1MGNtOXNVSEp2Y0hNK0tDaHdjbTl3Y3l3Z2NtVm1LU0E5UGlCN1hHNGdJR052Ym5OMElIc2djMk5oYkdWRGIyNTBjbTlzSUgwZ1BTQjFjMlZUWTJGc1pVTnZiblJ5YjJ3b2NISnZjSE1wTzF4dUlDQjFjMlZKYlhCbGNtRjBhWFpsU0dGdVpHeGxLSEpsWml3Z0tDa2dQVDRnS0hzZ0xpNHVjSEp2Y0hNc0lITmpZV3hsUTI5dWRISnZiQ0I5S1N3Z1czTmpZV3hsUTI5dWRISnZiRjBwTzF4dUlDQnlaWFIxY200Z2JuVnNiRHRjYm4wcE8xeHVJbDE5IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VWaXNpYWJsZSB9IGZyb20gJy4uL2NvbW1vbi9ob29rcyc7XG5leHBvcnQgZnVuY3Rpb24gdXNlVG9vbEJhckNvbnRyb2woKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKCksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHRvb2xCYXJDb250cm9sID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFRvb2xCYXJDb250cm9sID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgbWFwID0gcHJvcHMubWFwLFxuICAgICAgcG9zaXRpb24gPSBwcm9wcy5wb3NpdGlvbixcbiAgICAgIHZpc2lhYmxlID0gcHJvcHMudmlzaWFibGUsXG4gICAgICBvZmZzZXQgPSBwcm9wcy5vZmZzZXQ7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG1hcCAmJiAhdG9vbEJhckNvbnRyb2wpIHtcbiAgICAgIHZhciBpbnN0YW5jZTtcbiAgICAgIG1hcC5wbHVnaW4oWydBTWFwLlRvb2xCYXInXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBBTWFwLlRvb2xCYXIoe1xuICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgbWFwLmFkZENvbnRyb2woaW5zdGFuY2UpO1xuICAgICAgICBzZXRUb29sQmFyQ29udHJvbChpbnN0YW5jZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgIG1hcC5yZW1vdmVDb250cm9sKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIFttYXBdKTtcbiAgdXNlVmlzaWFibGUodG9vbEJhckNvbnRyb2wsIHZpc2lhYmxlKTtcbiAgcmV0dXJuIHtcbiAgICB0b29sQmFyQ29udHJvbDogdG9vbEJhckNvbnRyb2wsXG4gICAgc2V0VG9vbEJhckNvbnRyb2w6IHNldFRvb2xCYXJDb250cm9sXG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5VWIyOXNRbUZ5UTI5dWRISnZiQzkxYzJWVWIyOXNRbUZ5UTI5dWRISnZiQzUwYzNnaVhTd2libUZ0WlhNaU9sc2lkWE5sUldabVpXTjBJaXdpZFhObFUzUmhkR1VpTENKMWMyVldhWE5wWVdKc1pTSXNJblZ6WlZSdmIyeENZWEpEYjI1MGNtOXNJaXdpY0hKdmNITWlMQ0owYjI5c1FtRnlRMjl1ZEhKdmJDSXNJbk5sZEZSdmIyeENZWEpEYjI1MGNtOXNJaXdpYldGd0lpd2ljRzl6YVhScGIyNGlMQ0oyYVhOcFlXSnNaU0lzSW05bVpuTmxkQ0lzSW1sdWMzUmhibU5sSWl3aWNHeDFaMmx1SWl3aVFVMWhjQ0lzSWxSdmIyeENZWElpTENKaFpHUkRiMjUwY205c0lpd2ljbVZ0YjNabFEyOXVkSEp2YkNKZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxGTkJRVk5CTEZOQlFWUXNSVUZCYjBKRExGRkJRWEJDTEZGQlFXOURMRTlCUVhCRE8wRkJSVUVzVTBGQlUwTXNWMEZCVkN4UlFVRTBRaXhwUWtGQk5VSTdRVUZKUVN4UFFVRlBMRk5CUVZORExHbENRVUZVTEVkQlFUUkVPMEZCUVVFc1RVRkJha05ETEV0QlFXbERMSFZGUVVGNlFpeEZRVUY1UWpzN1FVRkRha1VzYTBKQlFUUkRTQ3hSUVVGUkxFVkJRWEJFTzBGQlFVRTdRVUZCUVN4TlFVRlBTU3hqUVVGUU8wRkJRVUVzVFVGQmRVSkRMR2xDUVVGMlFqczdRVUZEUVN4TlFVRlJReXhIUVVGU0xFZEJRVFJEU0N4TFFVRTFReXhEUVVGUlJ5eEhRVUZTTzBGQlFVRXNUVUZCWVVNc1VVRkJZaXhIUVVFMFEwb3NTMEZCTlVNc1EwRkJZVWtzVVVGQllqdEJRVUZCTEUxQlFYVkNReXhSUVVGMlFpeEhRVUUwUTB3c1MwRkJOVU1zUTBGQmRVSkxMRkZCUVhaQ08wRkJRVUVzVFVGQmFVTkRMRTFCUVdwRExFZEJRVFJEVGl4TFFVRTFReXhEUVVGcFEwMHNUVUZCYWtNN1FVRkRRVllzUlVGQlFVRXNVMEZCVXl4RFFVRkRMRmxCUVUwN1FVRkRaQ3hSUVVGSlR5eEhRVUZITEVsQlFVa3NRMEZCUTBZc1kwRkJXaXhGUVVFMFFqdEJRVU14UWl4VlFVRkpUU3hSUVVGS08wRkJRMEZLTEUxQlFVRkJMRWRCUVVjc1EwRkJRMHNzVFVGQlNpeERRVUZYTEVOQlFVTXNZMEZCUkN4RFFVRllMRVZCUVRaQ0xGbEJRVTA3UVVGRGFrTkVMRkZCUVVGQkxGRkJRVkVzUjBGQlJ5eEpRVUZKUlN4SlFVRkpMRU5CUVVORExFOUJRVlFzUTBGQmFVSTdRVUZETVVKS0xGVkJRVUZCTEUxQlFVMHNSVUZCVGtFc1RVRkVNRUk3UVVGRk1VSkdMRlZCUVVGQkxGRkJRVkVzUlVGQlVrRTdRVUZHTUVJc1UwRkJha0lzUTBGQldEdEJRVWxCUkN4UlFVRkJRU3hIUVVGSExFTkJRVU5STEZWQlFVb3NRMEZCWlVvc1VVRkJaanRCUVVOQlRDeFJRVUZCUVN4cFFrRkJhVUlzUTBGQlEwc3NVVUZCUkN4RFFVRnFRanRCUVVORUxFOUJVRVE3UVVGUlFTeGhRVUZQTEZsQlFVMDdRVUZEV0N4WlFVRkpRU3hSUVVGS0xFVkJRV003UVVGRFdrb3NWVUZCUVVFc1IwRkJSeXhEUVVGRFV5eGhRVUZLTEVOQlFXdENUQ3hSUVVGc1FqdEJRVU5FTzBGQlEwWXNUMEZLUkR0QlFVdEVPMEZCUTBZc1IwRnFRbEVzUlVGcFFrNHNRMEZCUTBvc1IwRkJSQ3hEUVdwQ1RTeERRVUZVTzBGQmJVSkJUQ3hGUVVGQlFTeFhRVUZYTEVOQlFVTkhMR05CUVVRc1JVRkJhMEpKTEZGQlFXeENMRU5CUVZnN1FVRkRRU3hUUVVGUE8wRkJRMHhLTEVsQlFVRkJMR05CUVdNc1JVRkJaRUVzWTBGRVN6dEJRVVZNUXl4SlFVRkJRU3hwUWtGQmFVSXNSVUZCYWtKQk8wRkJSa3NzUjBGQlVEdEJRVWxFSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2RYTmxSV1ptWldOMExDQjFjMlZUZEdGMFpTQjlJR1p5YjIwZ0ozSmxZV04wSnp0Y2JtbHRjRzl5ZENCN0lGUnZiMnhDWVhKRGIyNTBjbTlzVUhKdmNITWdmU0JtY205dElDY3VMeWM3WEc1cGJYQnZjblFnZXlCMWMyVldhWE5wWVdKc1pTQjlJR1p5YjIwZ0p5NHVMMk52YlcxdmJpOW9iMjlyY3ljN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdWWE5sVkc5dmJFSmhja052Ym5SeWIyd2daWGgwWlc1a2N5QlViMjlzUW1GeVEyOXVkSEp2YkZCeWIzQnpJSHQ5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCMWMyVlViMjlzUW1GeVEyOXVkSEp2YkNod2NtOXdjeUE5SUh0OUlHRnpJRlZ6WlZSdmIyeENZWEpEYjI1MGNtOXNLU0I3WEc0Z0lHTnZibk4wSUZ0MGIyOXNRbUZ5UTI5dWRISnZiQ3dnYzJWMFZHOXZiRUpoY2tOdmJuUnliMnhkSUQwZ2RYTmxVM1JoZEdVOFFVMWhjQzVVYjI5c1FtRnlQaWdwTzF4dUlDQmpiMjV6ZENCN0lHMWhjQ3dnY0c5emFYUnBiMjRzSUhacGMybGhZbXhsTENCdlptWnpaWFFnZlNBOUlIQnliM0J6TzF4dUlDQjFjMlZGWm1abFkzUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUdsbUlDaHRZWEFnSmlZZ0lYUnZiMnhDWVhKRGIyNTBjbTlzS1NCN1hHNGdJQ0FnSUNCc1pYUWdhVzV6ZEdGdVkyVTZJRUZOWVhBdVEyOXVkSEp2YkR0Y2JpQWdJQ0FnSUcxaGNDNXdiSFZuYVc0b1d5ZEJUV0Z3TGxSdmIyeENZWEluWFN3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCcGJuTjBZVzVqWlNBOUlHNWxkeUJCVFdGd0xsUnZiMnhDWVhJb2UxeHVJQ0FnSUNBZ0lDQWdJRzltWm5ObGRDeGNiaUFnSUNBZ0lDQWdJQ0J3YjNOcGRHbHZiaXhjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lHMWhjQzVoWkdSRGIyNTBjbTlzS0dsdWMzUmhibU5sS1R0Y2JpQWdJQ0FnSUNBZ2MyVjBWRzl2YkVKaGNrTnZiblJ5YjJ3b2FXNXpkR0Z1WTJVcE8xeHVJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQnlaWFIxY200Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCcFppQW9hVzV6ZEdGdVkyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCdFlYQXVjbVZ0YjNabFEyOXVkSEp2YkNocGJuTjBZVzVqWlNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVJQ0I5TENCYmJXRndYU2s3WEc1Y2JpQWdkWE5sVm1semFXRmliR1VvZEc5dmJFSmhja052Ym5SeWIyd2hMQ0IyYVhOcFlXSnNaU2s3WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZEc5dmJFSmhja052Ym5SeWIyd3NYRzRnSUNBZ2MyVjBWRzl2YkVKaGNrTnZiblJ5YjJ3c1hHNGdJSDA3WEc1OVhHNGlYWDA9IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUb29sQmFyQ29udHJvbCB9IGZyb20gJy4vdXNlVG9vbEJhckNvbnRyb2wnO1xuZXhwb3J0IHZhciBUb29sQmFyQ29udHJvbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfdXNlVG9vbEJhckNvbnRyb2wgPSB1c2VUb29sQmFyQ29udHJvbChwcm9wcyksXG4gICAgICB0b29sQmFyQ29udHJvbCA9IF91c2VUb29sQmFyQ29udHJvbC50b29sQmFyQ29udHJvbDtcblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgIHRvb2xCYXJDb250cm9sOiB0b29sQmFyQ29udHJvbFxuICAgIH0pO1xuICB9LCBbdG9vbEJhckNvbnRyb2xdKTtcbiAgcmV0dXJuIG51bGw7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlVYjI5c1FtRnlRMjl1ZEhKdmJDOXBibVJsZUM1MGMzZ2lYU3dpYm1GdFpYTWlPbHNpVW1WaFkzUWlMQ0oxYzJWSmJYQmxjbUYwYVhabFNHRnVaR3hsSWl3aWRYTmxWRzl2YkVKaGNrTnZiblJ5YjJ3aUxDSlViMjlzUW1GeVEyOXVkSEp2YkNJc0ltWnZjbmRoY21SU1pXWWlMQ0p3Y205d2N5SXNJbkpsWmlJc0luUnZiMnhDWVhKRGIyNTBjbTlzSWwwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc1QwRkJUMEVzUzBGQlVDeEpRVUZuUWtNc2JVSkJRV2hDTEZGQlFUSkRMRTlCUVRORE8wRkJSVUVzVTBGQlUwTXNhVUpCUVZRc1VVRkJhME1zY1VKQlFXeERPMEZCU1VFc1QwRkJUeXhKUVVGTlF5eGpRVUZqTEdkQ1FVRkhTQ3hMUVVGTExFTkJRVU5KTEZWQlFVNHNRMEZCTWtRc1ZVRkJRME1zUzBGQlJDeEZRVUZSUXl4SFFVRlNMRVZCUVdkQ08wRkJRM1pITERKQ1FVRXlRa29zYVVKQlFXbENMRU5CUVVOSExFdEJRVVFzUTBGQk5VTTdRVUZCUVN4TlFVRlJSU3hqUVVGU0xITkNRVUZSUVN4alFVRlNPenRCUVVOQlRpeEZRVUZCUVN4dFFrRkJiVUlzUTBGQlEwc3NSMEZCUkN4RlFVRk5PMEZCUVVFc01rTkJRVmxFTEV0QlFWbzdRVUZCYlVKRkxFMUJRVUZCTEdOQlFXTXNSVUZCWkVFN1FVRkJia0k3UVVGQlFTeEhRVUZPTEVWQlFUUkRMRU5CUVVOQkxHTkJRVVFzUTBGQk5VTXNRMEZCYmtJN1FVRkRRU3hUUVVGUExFbEJRVkE3UVVGRFJDeERRVW8yUWl4RFFVRjJRaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JTWldGamRDd2dleUIxYzJWSmJYQmxjbUYwYVhabFNHRnVaR3hsSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnVDNabGNteGhlVkJ5YjNCeklIMGdabkp2YlNBbkxpNHZZMjl0Ylc5dUwyMWhjQ2M3WEc1cGJYQnZjblFnZXlCMWMyVlViMjlzUW1GeVEyOXVkSEp2YkNCOUlHWnliMjBnSnk0dmRYTmxWRzl2YkVKaGNrTnZiblJ5YjJ3bk8xeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRlJ2YjJ4Q1lYSkRiMjUwY205c1VISnZjSE1nWlhoMFpXNWtjeUJQZG1WeWJHRjVVSEp2Y0hNc0lFRk5ZWEF1Vkc5dmJFSmhjazl3ZEdsdmJuTWdlMzFjYmx4dVpYaHdiM0owSUdOdmJuTjBJRlJ2YjJ4Q1lYSkRiMjUwY205c0lEMGdVbVZoWTNRdVptOXlkMkZ5WkZKbFpqeFViMjlzUW1GeVEyOXVkSEp2YkZCeWIzQnpMQ0JVYjI5c1FtRnlRMjl1ZEhKdmJGQnliM0J6UGlnb2NISnZjSE1zSUhKbFppa2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lIUnZiMnhDWVhKRGIyNTBjbTlzSUgwZ1BTQjFjMlZVYjI5c1FtRnlRMjl1ZEhKdmJDaHdjbTl3Y3lrN1hHNGdJSFZ6WlVsdGNHVnlZWFJwZG1WSVlXNWtiR1VvY21WbUxDQW9LU0E5UGlBb2V5QXVMaTV3Y205d2N5d2dkRzl2YkVKaGNrTnZiblJ5YjJ3Z2ZTa3NJRnQwYjI5c1FtRnlRMjl1ZEhKdmJGMHBPMXh1SUNCeVpYUjFjbTRnYm5Wc2JEdGNibjBwTzF4dUlsMTkiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVZpc2lhYmxlIH0gZnJvbSAnLi4vY29tbW9uL2hvb2tzJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VDb250cm9sQmFyQ29udHJvbCgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgY29udHJvbEJhckNvbnRyb2wgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0Q29udHJvbEJhckNvbnRyb2wgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBtYXAgPSBwcm9wcy5tYXAsXG4gICAgICBwb3NpdGlvbiA9IHByb3BzLnBvc2l0aW9uLFxuICAgICAgdmlzaWFibGUgPSBwcm9wcy52aXNpYWJsZSxcbiAgICAgIG9mZnNldCA9IHByb3BzLm9mZnNldDtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobWFwICYmICFjb250cm9sQmFyQ29udHJvbCkge1xuICAgICAgdmFyIGluc3RhbmNlO1xuICAgICAgbWFwLnBsdWdpbihbJ0FNYXAuQ29udHJvbEJhcicsICdBTWFwLkhhd2tFeWUnXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnN0YW5jZSA9IG5ldyBBTWFwLkNvbnRyb2xCYXIoe1xuICAgICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgbWFwLmFkZENvbnRyb2woaW5zdGFuY2UpO1xuICAgICAgICBzZXRDb250cm9sQmFyQ29udHJvbChpbnN0YW5jZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgIG1hcC5yZW1vdmVDb250cm9sKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIFttYXBdKTtcbiAgdXNlVmlzaWFibGUoY29udHJvbEJhckNvbnRyb2wsIHZpc2lhYmxlKTtcbiAgcmV0dXJuIHtcbiAgICBjb250cm9sQmFyQ29udHJvbDogY29udHJvbEJhckNvbnRyb2wsXG4gICAgc2V0Q29udHJvbEJhckNvbnRyb2w6IHNldENvbnRyb2xCYXJDb250cm9sXG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5RGIyNTBjbTlzUW1GeVEyOXVkSEp2YkM5MWMyVkRiMjUwY205c1FtRnlRMjl1ZEhKdmJDNTBjM2dpWFN3aWJtRnRaWE1pT2xzaWRYTmxSV1ptWldOMElpd2lkWE5sVTNSaGRHVWlMQ0oxYzJWV2FYTnBZV0pzWlNJc0luVnpaVU52Ym5SeWIyeENZWEpEYjI1MGNtOXNJaXdpY0hKdmNITWlMQ0pqYjI1MGNtOXNRbUZ5UTI5dWRISnZiQ0lzSW5ObGRFTnZiblJ5YjJ4Q1lYSkRiMjUwY205c0lpd2liV0Z3SWl3aWNHOXphWFJwYjI0aUxDSjJhWE5wWVdKc1pTSXNJbTltWm5ObGRDSXNJbWx1YzNSaGJtTmxJaXdpY0d4MVoybHVJaXdpUVUxaGNDSXNJa052Ym5SeWIyeENZWElpTENKaFpHUkRiMjUwY205c0lpd2ljbVZ0YjNabFEyOXVkSEp2YkNKZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxGTkJRVk5CTEZOQlFWUXNSVUZCYjBKRExGRkJRWEJDTEZGQlFXOURMRTlCUVhCRE8wRkJSVUVzVTBGQlUwTXNWMEZCVkN4UlFVRTBRaXhwUWtGQk5VSTdRVUZKUVN4UFFVRlBMRk5CUVZORExHOUNRVUZVTEVkQlFXdEZPMEZCUVVFc1RVRkJjRU5ETEV0QlFXOURMSFZGUVVFMVFpeEZRVUUwUWpzN1FVRkRka1VzYTBKQlFXdEVTQ3hSUVVGUkxFVkJRVEZFTzBGQlFVRTdRVUZCUVN4TlFVRlBTU3hwUWtGQlVEdEJRVUZCTEUxQlFUQkNReXh2UWtGQk1VSTdPMEZCUTBFc1RVRkJVVU1zUjBGQlVpeEhRVUUwUTBnc1MwRkJOVU1zUTBGQlVVY3NSMEZCVWp0QlFVRkJMRTFCUVdGRExGRkJRV0lzUjBGQk5FTktMRXRCUVRWRExFTkJRV0ZKTEZGQlFXSTdRVUZCUVN4TlFVRjFRa01zVVVGQmRrSXNSMEZCTkVOTUxFdEJRVFZETEVOQlFYVkNTeXhSUVVGMlFqdEJRVUZCTEUxQlFXbERReXhOUVVGcVF5eEhRVUUwUTA0c1MwRkJOVU1zUTBGQmFVTk5MRTFCUVdwRE8wRkJRMEZXTEVWQlFVRkJMRk5CUVZNc1EwRkJReXhaUVVGTk8wRkJRMlFzVVVGQlNVOHNSMEZCUnl4SlFVRkpMRU5CUVVOR0xHbENRVUZhTEVWQlFTdENPMEZCUXpkQ0xGVkJRVWxOTEZGQlFVbzdRVUZEUVVvc1RVRkJRVUVzUjBGQlJ5eERRVUZEU3l4TlFVRktMRU5CUVZjc1EwRkJReXhwUWtGQlJDeEZRVUZ2UWl4alFVRndRaXhEUVVGWUxFVkJRV2RFTEZsQlFVMDdRVUZEY0VSRUxGRkJRVUZCTEZGQlFWRXNSMEZCUnl4SlFVRkpSU3hKUVVGSkxFTkJRVU5ETEZWQlFWUXNRMEZCYjBJN1FVRkROMEpLTEZWQlFVRkJMRTFCUVUwc1JVRkJSVUVzVFVGRWNVSTdRVUZGTjBKR0xGVkJRVUZCTEZGQlFWRXNSVUZCVWtFN1FVRkdOa0lzVTBGQmNFSXNRMEZCV0R0QlFVbEJSQ3hSUVVGQlFTeEhRVUZITEVOQlFVTlJMRlZCUVVvc1EwRkJaVW9zVVVGQlpqdEJRVU5CVEN4UlFVRkJRU3h2UWtGQmIwSXNRMEZCUTBzc1VVRkJSQ3hEUVVGd1FqdEJRVU5FTEU5QlVFUTdRVUZSUVN4aFFVRlBMRmxCUVUwN1FVRkRXQ3haUVVGSlFTeFJRVUZLTEVWQlFXTTdRVUZEV2tvc1ZVRkJRVUVzUjBGQlJ5eERRVUZEVXl4aFFVRktMRU5CUVd0Q1RDeFJRVUZzUWp0QlFVTkVPMEZCUTBZc1QwRktSRHRCUVV0RU8wRkJRMFlzUjBGcVFsRXNSVUZwUWs0c1EwRkJRMG9zUjBGQlJDeERRV3BDVFN4RFFVRlVPMEZCYlVKQlRDeEZRVUZCUVN4WFFVRlhMRU5CUVVOSExHbENRVUZFTEVWQlFYRkNTU3hSUVVGeVFpeERRVUZZTzBGQlEwRXNVMEZCVHp0QlFVTk1TaXhKUVVGQlFTeHBRa0ZCYVVJc1JVRkJha0pCTEdsQ1FVUkxPMEZCUlV4RExFbEJRVUZCTEc5Q1FVRnZRaXhGUVVGd1FrRTdRVUZHU3l4SFFVRlFPMEZCU1VRaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QjFjMlZGWm1abFkzUXNJSFZ6WlZOMFlYUmxJSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dRMjl1ZEhKdmJFSmhja052Ym5SeWIyeFFjbTl3Y3lCOUlHWnliMjBnSnk0bk8xeHVhVzF3YjNKMElIc2dkWE5sVm1semFXRmliR1VnZlNCbWNtOXRJQ2N1TGk5amIyMXRiMjR2YUc5dmEzTW5PMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUZWelpVTnZiblJ5YjJ4Q1lYSkRiMjUwY205c0lHVjRkR1Z1WkhNZ1EyOXVkSEp2YkVKaGNrTnZiblJ5YjJ4UWNtOXdjeUI3ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2RYTmxRMjl1ZEhKdmJFSmhja052Ym5SeWIyd29jSEp2Y0hNZ1BTQjdmU0JoY3lCVmMyVkRiMjUwY205c1FtRnlRMjl1ZEhKdmJDa2dlMXh1SUNCamIyNXpkQ0JiWTI5dWRISnZiRUpoY2tOdmJuUnliMndzSUhObGRFTnZiblJ5YjJ4Q1lYSkRiMjUwY205c1hTQTlJSFZ6WlZOMFlYUmxQRUZOWVhBdVEyOXVkSEp2YkVKaGNqNG9LVHRjYmlBZ1kyOXVjM1FnZXlCdFlYQXNJSEJ2YzJsMGFXOXVMQ0IyYVhOcFlXSnNaU3dnYjJabWMyVjBJSDBnUFNCd2NtOXdjenRjYmlBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0JwWmlBb2JXRndJQ1ltSUNGamIyNTBjbTlzUW1GeVEyOXVkSEp2YkNrZ2UxeHVJQ0FnSUNBZ2JHVjBJR2x1YzNSaGJtTmxPaUJCVFdGd0xrTnZiblJ5YjJ4Q1lYSTdYRzRnSUNBZ0lDQnRZWEF1Y0d4MVoybHVLRnNuUVUxaGNDNURiMjUwY205c1FtRnlKeXdnSjBGTllYQXVTR0YzYTBWNVpTZGRMQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR2x1YzNSaGJtTmxJRDBnYm1WM0lFRk5ZWEF1UTI5dWRISnZiRUpoY2loN1hHNGdJQ0FnSUNBZ0lDQWdiMlptYzJWME9pQnZabVp6WlhRc1hHNGdJQ0FnSUNBZ0lDQWdjRzl6YVhScGIyNHNYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCdFlYQXVZV1JrUTI5dWRISnZiQ2hwYm5OMFlXNWpaU2s3WEc0Z0lDQWdJQ0FnSUhObGRFTnZiblJ5YjJ4Q1lYSkRiMjUwY205c0tHbHVjM1JoYm1ObEtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdjbVYwZFhKdUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1YzNSaGJtTmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2JXRndMbkpsYlc5MlpVTnZiblJ5YjJ3b2FXNXpkR0Z1WTJVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNiaUFnZlN3Z1cyMWhjRjBwTzF4dVhHNGdJSFZ6WlZacGMybGhZbXhsS0dOdmJuUnliMnhDWVhKRGIyNTBjbTlzSVN3Z2RtbHphV0ZpYkdVcE8xeHVJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lHTnZiblJ5YjJ4Q1lYSkRiMjUwY205c0xGeHVJQ0FnSUhObGRFTnZiblJ5YjJ4Q1lYSkRiMjUwY205c0xGeHVJQ0I5TzF4dWZWeHVJbDE5IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250cm9sQmFyQ29udHJvbCB9IGZyb20gJy4vdXNlQ29udHJvbEJhckNvbnRyb2wnO1xuZXhwb3J0IHZhciBDb250cm9sQmFyQ29udHJvbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfdXNlQ29udHJvbEJhckNvbnRyb2wgPSB1c2VDb250cm9sQmFyQ29udHJvbChwcm9wcyksXG4gICAgICBjb250cm9sQmFyQ29udHJvbCA9IF91c2VDb250cm9sQmFyQ29udHJvbC5jb250cm9sQmFyQ29udHJvbDtcblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgIGNvbnRyb2xCYXJDb250cm9sOiBjb250cm9sQmFyQ29udHJvbFxuICAgIH0pO1xuICB9LCBbY29udHJvbEJhckNvbnRyb2xdKTtcbiAgcmV0dXJuIG51bGw7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlEYjI1MGNtOXNRbUZ5UTI5dWRISnZiQzlwYm1SbGVDNTBjM2dpWFN3aWJtRnRaWE1pT2xzaVVtVmhZM1FpTENKMWMyVkpiWEJsY21GMGFYWmxTR0Z1Wkd4bElpd2lkWE5sUTI5dWRISnZiRUpoY2tOdmJuUnliMndpTENKRGIyNTBjbTlzUW1GeVEyOXVkSEp2YkNJc0ltWnZjbmRoY21SU1pXWWlMQ0p3Y205d2N5SXNJbkpsWmlJc0ltTnZiblJ5YjJ4Q1lYSkRiMjUwY205c0lsMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNUMEZCVDBFc1MwRkJVQ3hKUVVGblFrTXNiVUpCUVdoQ0xGRkJRVEpETEU5QlFUTkRPMEZCUlVFc1UwRkJVME1zYjBKQlFWUXNVVUZCY1VNc2QwSkJRWEpETzBGQlNVRXNUMEZCVHl4SlFVRk5ReXhwUWtGQmFVSXNaMEpCUVVkSUxFdEJRVXNzUTBGQlEwa3NWVUZCVGl4RFFVRnBSU3hWUVVGRFF5eExRVUZFTEVWQlFWRkRMRWRCUVZJc1JVRkJaMEk3UVVGRGFFZ3NPRUpCUVRoQ1NpeHZRa0ZCYjBJc1EwRkJRMGNzUzBGQlJDeERRVUZzUkR0QlFVRkJMRTFCUVZGRkxHbENRVUZTTEhsQ1FVRlJRU3hwUWtGQlVqczdRVUZEUVU0c1JVRkJRVUVzYlVKQlFXMUNMRU5CUVVOTExFZEJRVVFzUlVGQlRUdEJRVUZCTERKRFFVRlpSQ3hMUVVGYU8wRkJRVzFDUlN4TlFVRkJRU3hwUWtGQmFVSXNSVUZCYWtKQk8wRkJRVzVDTzBGQlFVRXNSMEZCVGl4RlFVRXJReXhEUVVGRFFTeHBRa0ZCUkN4RFFVRXZReXhEUVVGdVFqdEJRVU5CTEZOQlFVOHNTVUZCVUR0QlFVTkVMRU5CU21kRExFTkJRVEZDSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZKbFlXTjBMQ0I3SUhWelpVbHRjR1Z5WVhScGRtVklZVzVrYkdVZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZXlCUGRtVnliR0Y1VUhKdmNITWdmU0JtY205dElDY3VMaTlqYjIxdGIyNHZiV0Z3Snp0Y2JtbHRjRzl5ZENCN0lIVnpaVU52Ym5SeWIyeENZWEpEYjI1MGNtOXNJSDBnWm5KdmJTQW5MaTkxYzJWRGIyNTBjbTlzUW1GeVEyOXVkSEp2YkNjN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl1ZEhKdmJFSmhja052Ym5SeWIyeFFjbTl3Y3lCbGVIUmxibVJ6SUU5MlpYSnNZWGxRY205d2N5d2dRVTFoY0M1RGIyNTBjbTlzUW1GeVQzQjBhVzl1Y3lCN2ZWeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1EyOXVkSEp2YkVKaGNrTnZiblJ5YjJ3Z1BTQlNaV0ZqZEM1bWIzSjNZWEprVW1WbVBFTnZiblJ5YjJ4Q1lYSkRiMjUwY205c1VISnZjSE1zSUVOdmJuUnliMnhDWVhKRGIyNTBjbTlzVUhKdmNITStLQ2h3Y205d2N5d2djbVZtS1NBOVBpQjdYRzRnSUdOdmJuTjBJSHNnWTI5dWRISnZiRUpoY2tOdmJuUnliMndnZlNBOUlIVnpaVU52Ym5SeWIyeENZWEpEYjI1MGNtOXNLSEJ5YjNCektUdGNiaUFnZFhObFNXMXdaWEpoZEdsMlpVaGhibVJzWlNoeVpXWXNJQ2dwSUQwK0lDaDdJQzR1TG5CeWIzQnpMQ0JqYjI1MGNtOXNRbUZ5UTI5dWRISnZiQ0I5S1N3Z1cyTnZiblJ5YjJ4Q1lYSkRiMjUwY205c1hTazdYRzRnSUhKbGRIVnliaUJ1ZFd4c08xeHVmU2s3WEc0aVhYMD0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBSZWYsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWFwLCBTY2FsZUNvbnRyb2wsIFRvb2xCYXJDb250cm9sLCBDb250cm9sQmFyQ29udHJvbCwgR2VvbG9jYXRpb24sIE1hcFByb3BzIH0gZnJvbSBcIkB1aXcvcmVhY3QtYW1hcFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IHVzZVNpemUgfSBmcm9tIFwiYWhvb2tzXCI7XG5pbXBvcnQgeyB1c2VNYXBDZW50ZXIgfSBmcm9tIFwiLi4vaG9va3MvdXNlTWFwQ2VudGVyXCI7XG5cbi8qKlxuICogQU1hcCBjaGlsZCBjb21wb25ldFxuICogQHBhcmFtIHBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhdGlvblNlbGVjdFBvaW50KHA6IGFueSkge1xuICAgIGNvbnN0IG1hcmtlclJlZiA9IHVzZVJlZjxBTWFwLk1hcmtlcj4oKTtcbiAgICBjb25zdCBzaXplID0gdXNlU2l6ZShwLmNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjZW50ZXIgPSB1c2VNYXBDZW50ZXIocC5tYXApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghbWFya2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBBTWFwLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICAgICAgICAgJzxpbWcgY2xhc3M9XCJhbWFwLWdlb2xvY2F0aW9uLW1hcmtlclwiIHNyYz1cImh0dHBzOi8vYS5hbWFwLmNvbS9qc2FwaS9zdGF0aWMvaW1hZ2UvcGx1Z2luL3BvaW50LnBuZ1wiPicsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBuZXcgQU1hcC5QaXhlbCgtMTAsIC0xMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWFya2VyUmVmLmN1cnJlbnQgPSBtYXJrZXI7XG4gICAgICAgICAgICBwLm1hcC5hZGQobWFya2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaXplLndpZHRoICYmIHNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb25zdCBhOiBBTWFwLkxuZ0xhdCA9IHAubWFwLmNvbnRhaW5lclRvTG5nTGF0KFtzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgLyAyXSk7XG4gICAgICAgICAgICBtYXJrZXJSZWYuY3VycmVudC5zZXRQb3NpdGlvbihbYS5nZXRMbmchKCksIGEuZ2V0TGF0ISgpXSk7XG4gICAgICAgIH1cbiAgICB9LCBbc2l6ZSwgY2VudGVyXSk7XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuaW50ZXJmYWNlIExvY2F0aW9uTW9kZVByb3BzIHtcbiAgICBhdXRvRm9jdXM6IGJvb2xlYW47XG4gICAgb25DZW50ZXJDaGFuZ2U/OiAobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHpvb206IG51bWJlcjtcbiAgICBvblpvb21DaGFuZ2U/OiAoem9vbTogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGxhdDogbnVtYmVyO1xuICAgIGxuZzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIOWdkOagh+aLvuWPluaooeW8j1xuICAgICAqL1xuICAgIGVuYWJsZUxvY2F0aW9uTW9kZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2F0aW9uTW9kZShwcm9wczogTG9jYXRpb25Nb2RlUHJvcHMpIHtcbiAgICBjb25zdCBbaXNNb3ZpbmcsIHNldElzTW92aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBtYXBSZWY6IFJlZjxNYXBQcm9wcyAmIHsgbWFwPzogYW55IHwgdW5kZWZpbmVkIH0+IHwgdW5kZWZpbmVkID0gdXNlUmVmKG51bGwpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1hcFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiZmxleGl0ZW0tOVwiKX1cbiAgICAgICAgICAgIHJlZj17bWFwUmVmfVxuICAgICAgICAgICAgem9vbT17cHJvcHMuem9vbX1cbiAgICAgICAgICAgIG9uTW92ZVN0YXJ0PXsoKSA9PiBzZXRJc01vdmluZyh0cnVlKX1cbiAgICAgICAgICAgIG9uTW92ZUVuZD17KCkgPT4gc2V0SXNNb3ZpbmcoZmFsc2UpfVxuICAgICAgICAgICAgb25NYXBNb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm9uQ2VudGVyQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2VudGVyQ2hhbmdlKG1hcFJlZi5jdXJyZW50Py5tYXAuZ2V0Q2VudGVyKCkubGF0LCBtYXBSZWYuY3VycmVudD8ubWFwLmdldENlbnRlcigpLmxuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uWm9vbUNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5vbkNlbnRlckNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNlbnRlckNoYW5nZShtYXBSZWYuY3VycmVudD8ubWFwLmdldENlbnRlcigpLmxhdCwgbWFwUmVmLmN1cnJlbnQ/Lm1hcC5nZXRDZW50ZXIoKS5sbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMub25ab29tQ2hhbmdlICYmIHByb3BzLm9uWm9vbUNoYW5nZShtYXBSZWYuY3VycmVudD8ubWFwLmdldFpvb20oKSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2VudGVyPXtpc01vdmluZyA/IHVuZGVmaW5lZCA6IFtwcm9wcy5sbmcsIHByb3BzLmxhdF19XG4gICAgICAgICAgICBvbkRibENsaWNrPXsoZXZlbnQ6IEFNYXAuTWFwc0V2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm9uQ2VudGVyQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2VudGVyQ2hhbmdlKGV2ZW50LmxuZ2xhdC5nZXRMYXQhKCksIGV2ZW50LmxuZ2xhdC5nZXRMbmchKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5lbmFibGVMb2NhdGlvbk1vZGUgPyAoXG4gICAgICAgICAgICAgICAgPExvY2F0aW9uU2VsZWN0UG9pbnQ+PC9Mb2NhdGlvblNlbGVjdFBvaW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8R2VvbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLy8g5piv5ZCm5L2/55So6auY57K+5bqm5a6a5L2N77yM6buY6K6kOnRydWVcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5XG4gICAgICAgICAgICAgICAgICAgIC8vIOi2hei/hzEw56eS5ZCO5YGc5q2i5a6a5L2N77yM6buY6K6k77yaNXNcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dD17MTAwMDB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOWumuS9jeaMiemSrueahOWBnOmdoOS9jee9rlxuICAgICAgICAgICAgICAgICAgICAvLyDlrpjmlrkgdjIg5LiN5YaN5pSv5oyBXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dHRvblBvc2l0aW9uPVwiUkJcIlxuXG4gICAgICAgICAgICAgICAgICAgIC8vIOWumuS9jeaMiemSruS4juiuvue9rueahOWBnOmdoOS9jee9rueahOWBj+enu+mHj++8jOm7mOiupO+8mlBpeGVsKDEwLCAyMClcbiAgICAgICAgICAgICAgICAgICAgLy8g5a6Y5pa5IHYyIOS4jeWGjeaUr+aMgVxuICAgICAgICAgICAgICAgICAgICAvLyBidXR0b25PZmZzZXQ9e25ldyBBTWFwLlBpeGVsKDEwLCAyMCl9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g5a6a5L2N5oiQ5Yqf5ZCO5piv5ZCm6Ieq5Yqo6LCD5pW05Zyw5Zu+6KeG6YeO5Yiw5a6a5L2N54K5XG4gICAgICAgICAgICAgICAgICAgIHpvb21Ub0FjY3VyYWN5PXtwcm9wcy5hdXRvRm9jdXN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU9e2RhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLov5Tlm57mlbDmja7vvJpcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e2RhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLplJnor6/ov5Tlm57mlbDmja7vvJpcIiwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8U2NhbGVDb250cm9sIG9mZnNldD17WzE2LCAyMF19IHBvc2l0aW9uPVwiTEJcIiAvPlxuICAgICAgICAgICAgPFRvb2xCYXJDb250cm9sIG9mZnNldD17WzE2LCA2MF19IHBvc2l0aW9uPVwiUkJcIiAvPlxuICAgICAgICAgICAgPENvbnRyb2xCYXJDb250cm9sIHBvc2l0aW9uPVwiUlRcIiAvPlxuICAgICAgICA8L01hcD5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgUmVmLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYXAsIFNjYWxlQ29udHJvbCwgVG9vbEJhckNvbnRyb2wsIENvbnRyb2xCYXJDb250cm9sLCBNYXBQcm9wcywgTWFya2VyIH0gZnJvbSBcIkB1aXcvcmVhY3QtYW1hcFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBTWFya2VyIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGxhdDogbnVtYmVyO1xuICAgIGxuZzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUm9pTW9kZVByb3BzIHtcbiAgICBjaGFuZ2U/OiAobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSA9PiB2b2lkO1xuICAgIG1hcmtzOiBBTWFya2VyW107XG4gICAgb25EYmxDbGljaz86IChldmVudDogQU1hcC5NYXBzRXZlbnQsIGlkeDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIG9uQ2VudGVyQ2hhbmdlPzogKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcikgPT4gdm9pZDtcbiAgICB6b29tOiBudW1iZXI7XG4gICAgb25ab29tQ2hhbmdlPzogKHpvb206IG51bWJlcikgPT4gdm9pZDtcbiAgICBsYXQ6IG51bWJlcjtcbiAgICBsbmc6IG51bWJlcjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvaU1vZGUocHJvcHM6IFJvaU1vZGVQcm9wcykge1xuICAgIGNvbnN0IFtpc01vdmluZywgc2V0SXNNb3ZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IG1hcFJlZjogUmVmPE1hcFByb3BzICYgeyBtYXA/OiBhbnkgfCB1bmRlZmluZWQgfT4gfCB1bmRlZmluZWQgPSB1c2VSZWYobnVsbCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1hcFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiZmxleGl0ZW0tOVwiKX1cbiAgICAgICAgICAgIHJlZj17bWFwUmVmfVxuICAgICAgICAgICAgem9vbT17cHJvcHMuem9vbX1cbiAgICAgICAgICAgIGNlbnRlcj17aXNNb3ZpbmcgPyB1bmRlZmluZWQgOiBbcHJvcHMubG5nLCBwcm9wcy5sYXRdfVxuICAgICAgICAgICAgb25EYmxDbGljaz17KGV2ZW50OiBBTWFwLk1hcHNFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5jaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlKGV2ZW50LmxuZ2xhdC5nZXRMYXQhKCksIGV2ZW50LmxuZ2xhdC5nZXRMbmchKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdmVTdGFydD17KCkgPT4gc2V0SXNNb3ZpbmcodHJ1ZSl9XG4gICAgICAgICAgICBvbk1vdmVFbmQ9eygpID0+IHNldElzTW92aW5nKGZhbHNlKX1cbiAgICAgICAgICAgIG9uTWFwTW92ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5vbkNlbnRlckNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkNlbnRlckNoYW5nZShtYXBSZWYuY3VycmVudD8ubWFwLmdldENlbnRlcigpLmxhdCwgbWFwUmVmLmN1cnJlbnQ/Lm1hcC5nZXRDZW50ZXIoKS5sbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvblpvb21DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMub25DZW50ZXJDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25DZW50ZXJDaGFuZ2UobWFwUmVmLmN1cnJlbnQ/Lm1hcC5nZXRDZW50ZXIoKS5sYXQsIG1hcFJlZi5jdXJyZW50Py5tYXAuZ2V0Q2VudGVyKCkubG5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BzLm9uWm9vbUNoYW5nZSAmJiBwcm9wcy5vblpvb21DaGFuZ2UobWFwUmVmLmN1cnJlbnQ/Lm1hcC5nZXRab29tKCkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFNjYWxlQ29udHJvbCBvZmZzZXQ9e1sxNiwgMjBdfSBwb3NpdGlvbj1cIkxCXCIgLz5cbiAgICAgICAgICAgIDxUb29sQmFyQ29udHJvbCBvZmZzZXQ9e1sxNiwgNjBdfSBwb3NpdGlvbj1cIlJCXCIgLz5cbiAgICAgICAgICAgIDxDb250cm9sQmFyQ29udHJvbCBwb3NpdGlvbj1cIlJUXCIgLz5cbiAgICAgICAgICAgIHtwcm9wcy5tYXJrcy5tYXAoKG1hcmssIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxNYXJrZXJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgIG9uRGJsQ2xpY2s9eyhlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5vbkRibENsaWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub25EYmxDbGljayhlLCBpZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB2aXNpYWJsZVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17bWFyay50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249e25ldyBBTWFwLkxuZ0xhdChtYXJrLmxuZywgbWFyay5sYXQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9NYXA+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50LCBSZWYsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYXAsIFNjYWxlQ29udHJvbCwgVG9vbEJhckNvbnRyb2wsIENvbnRyb2xCYXJDb250cm9sLCBNYXBQcm9wcyB9IGZyb20gXCJAdWl3L3JlYWN0LWFtYXBcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmxldCBsYXN0UGFuZUlkID0gMTtcblxuZnVuY3Rpb24gRHJpdmluZyhwOiBhbnkpIHtcbiAgICBjb25zdCBsYXN0RHJpdmluZ1JlZiA9IHVzZVJlZjxhbnk+KCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFwLnN0YXJ0QW5kRW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3REcml2aW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGxhc3REcml2aW5nUmVmLmN1cnJlbnQuY2xlYXIoKTtcbiAgICAgICAgICAgIGxhc3REcml2aW5nUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgd2luZG93LkFNYXAucGx1Z2luKFwiQU1hcC5Ecml2aW5nXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHAuc3RhcnRBbmRFbmQpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgZHJpdmluZyA9IG5ldyB3aW5kb3cuQU1hcC5Ecml2aW5nKHtcbiAgICAgICAgICAgICAgICAvLyDpqb7ovabot6/nur/op4TliJLnrZbnlaXvvIxBTWFwLkRyaXZpbmdQb2xpY3kuTEVBU1RfVElNReaYr+acgOW/q+aNt+aooeW8j1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBwb2xpY3k6IHdpbmRvdy5BTWFwLkRyaXZpbmdQb2xpY3kuTEVBU1RfVElNRSxcbiAgICAgICAgICAgICAgICBtYXA6IHAubWFwLFxuICAgICAgICAgICAgICAgIHBhbmVsOiBwLnBhbmVJZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxhc3REcml2aW5nUmVmLmN1cnJlbnQgPSBkcml2aW5nO1xuXG4gICAgICAgICAgICAvKiAgICAgICAgICAgICBjb25zdCBwb2ludHMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXl3b3JkOiBcIuWMl+S6rOW4guWcsOmch+WxgO+8iOWFrOS6pOerme+8iVwiLCBjaXR5OiBcIuWMl+S6rFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXl3b3JkOiBcIuS6puW6hOaWh+WMluWbre+8iOWcsOmTgeerme+8iVwiLCBjaXR5OiBcIuWMl+S6rFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF07ICovXG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGRyaXZpbmcuc2VhcmNoKFxuICAgICAgICAgICAgICAgIG5ldyBBTWFwLkxuZ0xhdChwLnN0YXJ0QW5kRW5kWzBdLCBwLnN0YXJ0QW5kRW5kWzFdKSxcbiAgICAgICAgICAgICAgICBuZXcgQU1hcC5MbmdMYXQocC5zdGFydEFuZEVuZFsyXSwgcC5zdGFydEFuZEVuZFszXSksXG4gICAgICAgICAgICAgICAgKHN0YXR1czogYW55LCByZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyDmnKrlh7rplJnml7bvvIxyZXN1bHTljbPmmK/lr7nlupTnmoTot6/nur/op4TliJLmlrnmoYhcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtwLnN0YXJ0QW5kRW5kXSk7XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmludGVyZmFjZSBOYXZNb2RlUHJvcHMge1xuICAgIHN0YXJ0QW5kRW5kPzogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdk1vZGUocHJvcHM6IE5hdk1vZGVQcm9wcykge1xuICAgIGNvbnN0IHBhbmVJZCA9IHVzZU1lbW8oKCkgPT4gK25ldyBEYXRlKCkgKyBcIi1wYW5lXCIgKyBsYXN0UGFuZUlkKyssIFtdKTtcbiAgICBjb25zdCBtYXBSZWY6IFJlZjxNYXBQcm9wcyAmIHsgbWFwPzogYW55IHwgdW5kZWZpbmVkIH0+IHwgdW5kZWZpbmVkID0gdXNlUmVmKG51bGwpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPE1hcCBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJmbGV4aXRlbS05XCIpfSByZWY9e21hcFJlZn0+XG4gICAgICAgICAgICAgICAgPERyaXZpbmcgcGFuZUlkPXtwYW5lSWR9IHN0YXJ0QW5kRW5kPXtwcm9wcy5zdGFydEFuZEVuZH0+PC9Ecml2aW5nPlxuXG4gICAgICAgICAgICAgICAgPFNjYWxlQ29udHJvbCBvZmZzZXQ9e1sxNiwgMjBdfSBwb3NpdGlvbj1cIkxCXCIgLz5cbiAgICAgICAgICAgICAgICA8VG9vbEJhckNvbnRyb2wgb2Zmc2V0PXtbMTYsIDYwXX0gcG9zaXRpb249XCJSQlwiIC8+XG4gICAgICAgICAgICAgICAgPENvbnRyb2xCYXJDb250cm9sIHBvc2l0aW9uPVwiUlRcIiAvPlxuICAgICAgICAgICAgPC9NYXA+XG4gICAgICAgICAgICA8ZGl2IGlkPXtwYW5lSWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcImZsZXhpdGVtLTNcIil9IHN0eWxlPXt7IG92ZXJmbG93OiBcImF1dG9cIiB9fT48L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ1NTUHJvcGVydGllcywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIEB0cy1pZ25vcmVcbndpbmRvdy5fanNsb2FkXyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImFtYXAgYXBpIGxvYWRlZFwiKTtcbn07XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgdXNlU2l6ZSwgdXNlV2h5RGlkWW91VXBkYXRlIH0gZnJvbSBcImFob29rc1wiO1xuaW1wb3J0IHsgdXNlTWFwQ2VudGVyIH0gZnJvbSBcIi4uL2hvb2tzL3VzZU1hcENlbnRlclwiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQG1lbmRpeC1jbi9waXctdXRpbHMtaW50ZXJuYWxcIjtcbmltcG9ydCB7IE1vZGVFbnVtIH0gZnJvbSBcIi4uLy4uL3R5cGluZ3MvQU1hcFByb3BzXCI7XG5pbXBvcnQgTG9jYXRpb25Nb2RlIGZyb20gXCIuL0xvY2F0aW9uTW9kZVwiO1xuaW1wb3J0IFJvaU1vZGUsIHsgQU1hcmtlciB9IGZyb20gXCIuL1JvaU1vZGVcIjtcbmltcG9ydCBOYXZNb2RlIGZyb20gXCIuL05hdk1vZGVcIjtcbmxldCBsYXN0VmFsaWRBTWFwOiBhbnk7XG5leHBvcnQgaW50ZXJmYWNlIEFNYXBDb21wb25lbnRQcm9wcyB7XG4gICAgLy8gbXhcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY2xhc3M6IHN0cmluZztcbiAgICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG4gICAgdGFiSW5kZXg/OiBudW1iZXI7XG5cbiAgICBtb2RlOiBNb2RlRW51bTtcbiAgICBzdGFydEFuZEVuZD86IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuXG4gICAgYW1hcEtleT86IHN0cmluZztcbiAgICBvbkRibENsaWNrPzogKGV2ZW50OiBBTWFwLk1hcHNFdmVudCwgaWR4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgb25DZW50ZXJDaGFuZ2U/OiAobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSA9PiB2b2lkO1xuICAgIHpvb206IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiDlnZDmoIfmi77lj5bmqKHlvI9cbiAgICAgKi9cbiAgICBlbmFibGVMb2NhdGlvbk1vZGU/OiBib29sZWFuO1xuICAgIGxhdDogbnVtYmVyO1xuICAgIGxuZzogbnVtYmVyO1xuICAgIGF1dG9Gb2N1czogYm9vbGVhbjtcbiAgICBtYXJrczogQU1hcmtlcltdO1xuICAgIG9uWm9vbUNoYW5nZT86ICh6b29tOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbi8qKlxuICogQU1hcCBjaGlsZCBjb21wb25ldFxuICogQHBhcmFtIHBcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMb2NhdGlvblNlbGVjdFBvaW50KHA6IGFueSkge1xuICAgIGNvbnN0IG1hcmtlclJlZiA9IHVzZVJlZjxBTWFwLk1hcmtlcj4oKTtcbiAgICBjb25zdCBzaXplID0gdXNlU2l6ZShwLmNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBjZW50ZXIgPSB1c2VNYXBDZW50ZXIocC5tYXApO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghbWFya2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBBTWFwLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICAgICAgICAgJzxpbWcgY2xhc3M9XCJhbWFwLWdlb2xvY2F0aW9uLW1hcmtlclwiIHNyYz1cImh0dHBzOi8vYS5hbWFwLmNvbS9qc2FwaS9zdGF0aWMvaW1hZ2UvcGx1Z2luL3BvaW50LnBuZ1wiPicsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBuZXcgQU1hcC5QaXhlbCgtMTAsIC0xMClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWFya2VyUmVmLmN1cnJlbnQgPSBtYXJrZXI7XG4gICAgICAgICAgICBwLm1hcC5hZGQobWFya2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaXplLndpZHRoICYmIHNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBjb25zdCBhOiBBTWFwLkxuZ0xhdCA9IHAubWFwLmNvbnRhaW5lclRvTG5nTGF0KFtzaXplLndpZHRoIC8gMiwgc2l6ZS5oZWlnaHQgLyAyXSk7XG4gICAgICAgICAgICBtYXJrZXJSZWYuY3VycmVudC5zZXRQb3NpdGlvbihbYS5nZXRMbmchKCksIGEuZ2V0TGF0ISgpXSk7XG4gICAgICAgIH1cbiAgICB9LCBbc2l6ZSwgY2VudGVyXSk7XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IEFNYXBDb21wb25lbnQgPSAocHJvcHM6IEFNYXBDb21wb25lbnRQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtpc0xvYWRpbmdBcGksIHNldElzTG9hZGluZ0FwaV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWY8YW55PigpO1xuICAgIGNvbnN0IFtrZXlJc0ludmFsaWQsIHNldEtleUlzSW52YWxpZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNMb2FkaW5nQXBpICYmIHByb3BzLmFtYXBLZXkgJiYgIXdpbmRvdy5BTWFwKSB7XG4gICAgICAgICAgICAod2luZG93LnJlcXVpcmUgYXMgYW55KShcbiAgICAgICAgICAgICAgICBbYGh0dHBzOi8vd2ViYXBpLmFtYXAuY29tL21hcHM/dj0yLjAma2V5PSR7cHJvcHMuYW1hcEtleX0mcGx1Z2luPUFNYXAuQWRhcHRvcmBdLFxuICAgICAgICAgICAgICAgIChfQU1hcDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghd2luZG93LkFNYXAgJiYgdHlwZW9mIF9BTWFwID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VmFsaWRBTWFwID0gX0FNYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuQU1hcCA9IF9BTWFwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChfQU1hcCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5SXNJbnZhbGlkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RWYWxpZEFNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuQU1hcCA9IGxhc3RWYWxpZEFNYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nQXBpKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuQU1hcCkge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nQXBpKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH0sIFtpc0xvYWRpbmdBcGksIHByb3BzLmFtYXBLZXldKTtcblxuICAgIHVzZVdoeURpZFlvdVVwZGF0ZShwcm9wcy5uYW1lLCB7IC4uLnByb3BzIH0pO1xuXG4gICAgaWYgKGtleUlzSW52YWxpZCkge1xuICAgICAgICByZXR1cm4gPEFsZXJ0IGJvb3RzdHJhcFN0eWxlPVwiZGFuZ2VyXCI+6K+35oyH5a6a5LiA5Liq5q2j56Gu55qE6auY5b635Zyw5Zu+d2ViYXBpIGtleTwvQWxlcnQ+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHByb3BzLmNsYXNzLCBcIm14LWFtYXBcIiwgXCJmbGV4Y29udGFpbmVyXCIpfVxuICAgICAgICAgICAgdGFiSW5kZXg9e3Byb3BzLnRhYkluZGV4fVxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzLnN0eWxlfVxuICAgICAgICA+XG4gICAgICAgICAgICB7aXNMb2FkaW5nQXBpID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuPmxvYWRpbmc8L3NwYW4+XG4gICAgICAgICAgICApIDogcHJvcHMubW9kZSA9PT0gXCJsb2NhdGlvblwiID8gKFxuICAgICAgICAgICAgICAgIDxMb2NhdGlvbk1vZGVcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlTG9jYXRpb25Nb2RlPXtwcm9wcy5lbmFibGVMb2NhdGlvbk1vZGV9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17cHJvcHMuYXV0b0ZvY3VzfVxuICAgICAgICAgICAgICAgICAgICBvbkNlbnRlckNoYW5nZT17cHJvcHMub25DZW50ZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHpvb209e3Byb3BzLnpvb219XG4gICAgICAgICAgICAgICAgICAgIG9uWm9vbUNoYW5nZT17cHJvcHMub25ab29tQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBsYXQ9e3Byb3BzLmxhdH1cbiAgICAgICAgICAgICAgICAgICAgbG5nPXtwcm9wcy5sbmd9XG4gICAgICAgICAgICAgICAgPjwvTG9jYXRpb25Nb2RlPlxuICAgICAgICAgICAgKSA6IHByb3BzLm1vZGUgPT09IFwibWFya2VyXCIgPyAoXG4gICAgICAgICAgICAgICAgPFJvaU1vZGVcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXtwcm9wcy5vbkNlbnRlckNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgbWFya3M9e3Byb3BzLm1hcmtzfVxuICAgICAgICAgICAgICAgICAgICBvbkNlbnRlckNoYW5nZT17cHJvcHMub25DZW50ZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHpvb209e3Byb3BzLnpvb219XG4gICAgICAgICAgICAgICAgICAgIG9uWm9vbUNoYW5nZT17cHJvcHMub25ab29tQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBsYXQ9e3Byb3BzLmxhdH1cbiAgICAgICAgICAgICAgICAgICAgbG5nPXtwcm9wcy5sbmd9XG4gICAgICAgICAgICAgICAgICAgIG9uRGJsQ2xpY2s9e3Byb3BzLm9uRGJsQ2xpY2t9XG4gICAgICAgICAgICAgICAgPjwvUm9pTW9kZT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPE5hdk1vZGUgc3RhcnRBbmRFbmQ9e3Byb3BzLnN0YXJ0QW5kRW5kfT48L05hdk1vZGU+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBTWFwQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9BTWFwQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBWYWx1ZVN0YXR1cyB9IGZyb20gXCJtZW5kaXhcIjtcbmltcG9ydCB7IGV4ZWN1dGVBY3Rpb24sIGRlYm91bmNlIH0gZnJvbSBcIkBtZW5kaXgtY24vcGl3LXV0aWxzLWludGVybmFsXCI7XG5cbmltcG9ydCB7IEFNYXBDb250YWluZXJQcm9wcyB9IGZyb20gXCIuLi90eXBpbmdzL0FNYXBQcm9wc1wiO1xuXG5pbXBvcnQgXCIuL3VpL0FNYXAuY3NzXCI7XG5pbXBvcnQgQmlnIGZyb20gXCJiaWcuanNcIjtcbmltcG9ydCB7IEFNYXJrZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL1JvaU1vZGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFNYXAocHJvcHM6IEFNYXBDb250YWluZXJQcm9wcykge1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2NlbnRlckxhdCwgc2V0Q2VudGVyTGF0XSA9IHVzZVN0YXRlKDIyLjI2ODIzMyk7XG4gICAgY29uc3QgW2NlbnRlckxuZywgc2V0Q2VudGVyTG5nXSA9IHVzZVN0YXRlKDExMy41MTU5NDMpO1xuICAgIGlmIChwcm9wcy5jZW50ZXJUeXBlID09PSBcImR5bmFtaWNWYWx1ZVwiKSB7XG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvcHMubG5nQ2VudGVyICYmIHByb3BzLmxuZ0NlbnRlci5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIHNldENlbnRlckxuZyhwcm9wcy5sbmdDZW50ZXIudmFsdWUhLnRvTnVtYmVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLmxhdENlbnRlciAmJiBwcm9wcy5sYXRDZW50ZXIuc3RhdHVzID09PSBWYWx1ZVN0YXR1cy5BdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICBzZXRDZW50ZXJMYXQocHJvcHMubGF0Q2VudGVyLnZhbHVlIS50b051bWJlcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW3Byb3BzLmxhdENlbnRlciwgcHJvcHMubG5nQ2VudGVyXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIHNldENlbnRlckxhdChwcm9wcy5sYXRDZW50ZXJTdGF0aWMudG9OdW1iZXIoKSk7XG4gICAgICAgICAgICBzZXRDZW50ZXJMbmcocHJvcHMubG5nQ2VudGVyU3RhdGljLnRvTnVtYmVyKCkpO1xuICAgICAgICB9LCBbcHJvcHMubGF0Q2VudGVyU3RhdGljLCBwcm9wcy5sbmdDZW50ZXJTdGF0aWNdKTtcbiAgICB9XG4gICAgY29uc3Qgem9vbSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuem9vbUF0dHJpYnV0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHByb3BzLnpvb21Db25zdC50b051bWJlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy56b29tQXR0cmlidXRlICYmIHByb3BzLnpvb21BdHRyaWJ1dGUuc3RhdHVzID09PSBWYWx1ZVN0YXR1cy5BdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMuem9vbUF0dHJpYnV0ZS52YWx1ZSEudG9OdW1iZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIHJldHVybiAxNTtcbiAgICB9LCBbcHJvcHMuem9vbUF0dHJpYnV0ZV0pO1xuXG4gICAgY29uc3Qgb25DZW50ZXJDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgc2V0Q2VudGVyTGF0KGxhdCk7XG4gICAgICAgICAgICBzZXRDZW50ZXJMbmcobG5nKTtcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGV4ZWN1dGVBY3Rpb24ocHJvcHMub25DaGFuZ2VDZW50ZXIpO1xuICAgICAgICAgICAgLy8gfSwgNTAwKTtcbiAgICAgICAgICAgIGlmIChwcm9wcy5sYXRDZW50ZXIgJiYgcHJvcHMubGF0Q2VudGVyLnN0YXR1cyA9PT0gVmFsdWVTdGF0dXMuQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMubGF0Q2VudGVyLnNldFZhbHVlKG5ldyBCaWcobGF0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMubG5nQ2VudGVyICYmIHByb3BzLmxuZ0NlbnRlci5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIHByb3BzLmxuZ0NlbnRlci5zZXRWYWx1ZShuZXcgQmlnKGxuZykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbcHJvcHMubGF0Q2VudGVyLCBwcm9wcy5sbmdDZW50ZXJdXG4gICAgKTtcbiAgICBjb25zdCBvblpvb21DaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgZGVib3VuY2UoKGU6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLnpvb21BdHRyaWJ1dGUgJiYgIXByb3BzLnpvb21BdHRyaWJ1dGUucmVhZE9ubHkpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy56b29tQXR0cmlidXRlPy5zZXRWYWx1ZShCaWcoZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAzMDApLFxuICAgICAgICBbcHJvcHMuem9vbUF0dHJpYnV0ZV1cbiAgICApO1xuXG4gICAgY29uc3QgbWFya3MgPSB1c2VNZW1vPEFNYXJrZXJbXT4oKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMuZW5hYmxlTWFya2VyICYmIHByb3BzLmRpc3BsYXlNYXJrZXIgJiYgcHJvcHMubWFya2Vycz8uc3RhdHVzID09PSBWYWx1ZVN0YXR1cy5BdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5tYXJrZXJzIS5pdGVtcyEubWFwPEFNYXJrZXI+KGl0ZW0gPT4gKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogcHJvcHMudGl0bGVNYXJrZXIhLmdldChpdGVtKS52YWx1ZSEsXG4gICAgICAgICAgICAgICAgbGF0OiBwcm9wcy5sYXRNYXJrZXIhLmdldChpdGVtKS52YWx1ZSEudG9OdW1iZXIoKSxcbiAgICAgICAgICAgICAgICBsbmc6IHByb3BzLmxuZ01hcmtlciEuZ2V0KGl0ZW0pLnZhbHVlIS50b051bWJlcigpXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMubWFya2VycywgcHJvcHMubGF0TWFya2VyLCBwcm9wcy5sbmdNYXJrZXIsIHByb3BzLnRpdGxlTWFya2VyXSk7XG5cbiAgICBjb25zdCBvbkRibENsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgICAgIChldmVudDogQU1hcC5NYXBzRXZlbnQsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICBpZiAocHJvcHMubWFya2VyU2VsZWN0ICYmIHByb3BzLm1hcmtlcnMgJiYgcHJvcHMubWFya2Vycy5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG15QWN0aW9uID0gcHJvcHMubWFya2VyU2VsZWN0LmdldChwcm9wcyEubWFya2VycyEuaXRlbXMhW2lkeF0pO1xuICAgICAgICAgICAgICAgIGV4ZWN1dGVBY3Rpb24obXlBY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbcHJvcHMubWFya2VyU2VsZWN0LCBwcm9wcy5tYXJrZXJzXVxuICAgICk7XG5cbiAgICBjb25zdCBrZXlzdHJpbmcgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmFtYXBLZXkuc3RhdHVzID09PSBWYWx1ZVN0YXR1cy5BdmFpbGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5hbWFwS2V5LnZhbHVlO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLmFtYXBLZXldKTtcblxuICAgIGNvbnN0IFtzdGFydEFuZEVuZCwgc2V0U3RhcnRBbmRFbmRdID0gdXNlU3RhdGU8W251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gfCB1bmRlZmluZWQ+KCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJvcHMuc3RhcnRMbmcgJiZcbiAgICAgICAgICAgIHByb3BzLnN0YXJ0TGF0ICYmXG4gICAgICAgICAgICBwcm9wcy5lbmRMbmcgJiZcbiAgICAgICAgICAgIHByb3BzLmVuZExhdCAmJlxuICAgICAgICAgICAgcHJvcHMuc3RhcnRMbmcuc3RhdHVzID09PSBWYWx1ZVN0YXR1cy5BdmFpbGFibGUgJiZcbiAgICAgICAgICAgIHByb3BzLnN0YXJ0TGF0LnN0YXR1cyA9PT0gVmFsdWVTdGF0dXMuQXZhaWxhYmxlICYmXG4gICAgICAgICAgICBwcm9wcy5lbmRMbmcuc3RhdHVzID09PSBWYWx1ZVN0YXR1cy5BdmFpbGFibGUgJiZcbiAgICAgICAgICAgIHByb3BzLmVuZExhdC5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHNldFN0YXJ0QW5kRW5kKFtcbiAgICAgICAgICAgICAgICBwcm9wcy5zdGFydExuZy52YWx1ZSEudG9OdW1iZXIoKSxcbiAgICAgICAgICAgICAgICBwcm9wcy5zdGFydExhdC52YWx1ZSEudG9OdW1iZXIoKSxcbiAgICAgICAgICAgICAgICBwcm9wcy5lbmRMbmcudmFsdWUhLnRvTnVtYmVyKCksXG4gICAgICAgICAgICAgICAgcHJvcHMuZW5kTGF0LnZhbHVlIS50b051bWJlcigpXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5zdGFydExuZywgcHJvcHMuc3RhcnRMYXQsIHByb3BzLmVuZExuZywgcHJvcHMuZW5kTGF0XSk7XG5cbiAgICByZXR1cm4gaXNMb2FkaW5nID8gKFxuICAgICAgICA8c3Bhbj5pc0xvYWRpbmc8L3NwYW4+XG4gICAgKSA6IChcbiAgICAgICAgPEFNYXBDb21wb25lbnRcbiAgICAgICAgICAgIHN0YXJ0QW5kRW5kPXtzdGFydEFuZEVuZH1cbiAgICAgICAgICAgIG1vZGU9e3Byb3BzLm1vZGV9XG4gICAgICAgICAgICBhbWFwS2V5PXtrZXlzdHJpbmd9XG4gICAgICAgICAgICBvbkRibENsaWNrPXtvbkRibENsaWNrfVxuICAgICAgICAgICAgbWFya3M9e21hcmtzfVxuICAgICAgICAgICAgb25ab29tQ2hhbmdlPXtvblpvb21DaGFuZ2V9XG4gICAgICAgICAgICB6b29tPXt6b29tfVxuICAgICAgICAgICAgbGF0PXtjZW50ZXJMYXR9XG4gICAgICAgICAgICBsbmc9e2NlbnRlckxuZ31cbiAgICAgICAgICAgIGVuYWJsZUxvY2F0aW9uTW9kZT17cHJvcHMuZW5hYmxlTG9jYXRpb25Nb2RlfVxuICAgICAgICAgICAgb25DZW50ZXJDaGFuZ2U9e29uQ2VudGVyQ2hhbmdlfVxuICAgICAgICAgICAgYXV0b0ZvY3VzPXtwcm9wcy5lbmFibGVBdXRvRm9jdXN9XG4gICAgICAgICAgICAvLyBteFxuICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXtwcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHRhYkluZGV4PXtwcm9wcy50YWJJbmRleH1cbiAgICAgICAgICAgIGNsYXNzPXtwcm9wcy5jbGFzc31cbiAgICAgICAgLz5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbImhhc093biIsImhhc093blByb3BlcnR5IiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5IiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJrZXkiLCJjYWxsIiwiam9pbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0Iiwid2luZG93IiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsImZyZWVTZWxmIiwic2VsZiIsIkZ1bmN0aW9uIiwiaXNEb2N1bWVudFZpc2libGUiLCJkb2N1bWVudCIsInZpc2liaWxpdHlTdGF0ZSIsImlzT25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwiX19yZWFkIiwidGhpcyIsIm8iLCJuIiwibSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiciIsImFyIiwiZSIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJlcnJvciIsIl9fc3ByZWFkIiwiY29uY2F0IiwibGlzdGVuZXJzIiwiZXZlbnRzQmluZGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJldmFsaWRhdGUiLCJsaXN0ZW5lciIsIl9fYXNzaWduIiwiYXNzaWduIiwidCIsInMiLCJwIiwiX19yZXN0IiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQ29uZmlnQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiUHJvdmlkZXIiLCJNYXBTaGltIiwiTWFwIiwiZ2V0SW5kZXgiLCJhcnIiLCJyZXN1bHQiLCJzb21lIiwiZW50cnkiLCJpbmRleCIsImNsYXNzXzEiLCJfX2VudHJpZXNfXyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInNldCIsImRlbGV0ZSIsImVudHJpZXMiLCJzcGxpY2UiLCJoYXMiLCJjbGVhciIsImZvckVhY2giLCJjYWxsYmFjayIsImN0eCIsIl9pIiwiX2EiLCJpc0Jyb3dzZXIiLCJnbG9iYWwkMSIsIk1hdGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJzZXRUaW1lb3V0IiwiRGF0ZSIsIm5vdyIsInRyYWlsaW5nVGltZW91dCIsInRocm90dGxlIiwiZGVsYXkiLCJsZWFkaW5nQ2FsbCIsInRyYWlsaW5nQ2FsbCIsImxhc3RDYWxsVGltZSIsInJlc29sdmVQZW5kaW5nIiwicHJveHkiLCJ0aW1lb3V0Q2FsbGJhY2siLCJ0aW1lU3RhbXAiLCJSRUZSRVNIX0RFTEFZIiwidHJhbnNpdGlvbktleXMiLCJtdXRhdGlvbk9ic2VydmVyU3VwcG9ydGVkIiwiTXV0YXRpb25PYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciIsImNvbm5lY3RlZF8iLCJtdXRhdGlvbkV2ZW50c0FkZGVkXyIsIm11dGF0aW9uc09ic2VydmVyXyIsIm9ic2VydmVyc18iLCJvblRyYW5zaXRpb25FbmRfIiwicmVmcmVzaCIsImFkZE9ic2VydmVyIiwib2JzZXJ2ZXIiLCJjb25uZWN0XyIsInJlbW92ZU9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZGlzY29ubmVjdF8iLCJjaGFuZ2VzRGV0ZWN0ZWQiLCJ1cGRhdGVPYnNlcnZlcnNfIiwiYWN0aXZlT2JzZXJ2ZXJzIiwiZmlsdGVyIiwiZ2F0aGVyQWN0aXZlIiwiaGFzQWN0aXZlIiwiYnJvYWRjYXN0QWN0aXZlIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJjaGFyYWN0ZXJEYXRhIiwic3VidHJlZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNjb25uZWN0IiwiX2IiLCJwcm9wZXJ0eU5hbWUiLCJpc1JlZmxvd1Byb3BlcnR5IiwiZ2V0SW5zdGFuY2UiLCJpbnN0YW5jZV8iLCJkZWZpbmVDb25maWd1cmFibGUiLCJ0YXJnZXQiLCJwcm9wcyIsImtleXMiLCJ3cml0YWJsZSIsImdldFdpbmRvd09mIiwib3duZXJHbG9iYWwiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJlbXB0eVJlY3QiLCJjcmVhdGVSZWN0SW5pdCIsInRvRmxvYXQiLCJwYXJzZUZsb2F0IiwiZ2V0Qm9yZGVyc1NpemUiLCJzdHlsZXMiLCJwb3NpdGlvbnMiLCJyZWR1Y2UiLCJzaXplIiwicG9zaXRpb24iLCJnZXRQYWRkaW5ncyIsInBhZGRpbmdzIiwicG9zaXRpb25zXzEiLCJnZXRTVkdDb250ZW50UmVjdCIsImJib3giLCJnZXRCQm94Iiwid2lkdGgiLCJoZWlnaHQiLCJnZXRIVE1MRWxlbWVudENvbnRlbnRSZWN0IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRDb21wdXRlZFN0eWxlIiwiaG9yaXpQYWQiLCJsZWZ0IiwicmlnaHQiLCJ2ZXJ0UGFkIiwidG9wIiwiYm90dG9tIiwiYm94U2l6aW5nIiwicm91bmQiLCJpc0RvY3VtZW50RWxlbWVudCIsInZlcnRTY3JvbGxiYXIiLCJob3JpelNjcm9sbGJhciIsImFicyIsImlzU1ZHR3JhcGhpY3NFbGVtZW50IiwiU1ZHR3JhcGhpY3NFbGVtZW50IiwiU1ZHRWxlbWVudCIsImRvY3VtZW50RWxlbWVudCIsImdldENvbnRlbnRSZWN0IiwiY3JlYXRlUmVhZE9ubHlSZWN0IiwieCIsInkiLCJDb25zdHIiLCJET01SZWN0UmVhZE9ubHkiLCJyZWN0IiwiY3JlYXRlIiwiUmVzaXplT2JzZXJ2YXRpb24iLCJicm9hZGNhc3RXaWR0aCIsImJyb2FkY2FzdEhlaWdodCIsImNvbnRlbnRSZWN0XyIsImlzQWN0aXZlIiwiYnJvYWRjYXN0UmVjdCIsIlJlc2l6ZU9ic2VydmVyRW50cnkiLCJyZWN0SW5pdCIsImNvbnRlbnRSZWN0IiwiUmVzaXplT2JzZXJ2ZXJTUEkiLCJjb250cm9sbGVyIiwiY2FsbGJhY2tDdHgiLCJhY3RpdmVPYnNlcnZhdGlvbnNfIiwib2JzZXJ2YXRpb25zXyIsIlR5cGVFcnJvciIsImNhbGxiYWNrXyIsImNvbnRyb2xsZXJfIiwiY2FsbGJhY2tDdHhfIiwiRWxlbWVudCIsIm9ic2VydmF0aW9ucyIsInVub2JzZXJ2ZSIsImNsZWFyQWN0aXZlIiwiX3RoaXMiLCJvYnNlcnZhdGlvbiIsIm1hcCIsIldlYWtNYXAiLCJSZXNpemVPYnNlcnZlciIsIm1ldGhvZCIsImdldFRhcmdldEVsZW1lbnQiLCJkZWZhdWx0RWxlbWVudCIsInRhcmdldEVsZW1lbnQiLCJjdXJyZW50IiwidXNlUGVyc2lzdEZuIiwiZm4iLCJmblJlZiIsInVzZVJlZiIsInBlcnNpc3RGbiIsImFyZ3MiLCJpc0Z1bmN0aW9uIiwib2JqIiwidXNlVW5tb3VudCIsImZuUGVyc2lzdCIsInVzZUVmZmVjdCIsInVzZVJhZlN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiZnJhbWUiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJzZXRSYWZTdGF0ZSIsInVzZUNhbGxiYWNrIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ1c2VTaXplIiwiZWwiLCJ1c2VMYXlvdXRFZmZlY3QiLCJyZXNpemVPYnNlcnZlciIsInVzZVdoeURpZFlvdVVwZGF0ZSIsImNvbXBvbmVudE5hbWUiLCJwcmV2UHJvcHMiLCJhbGxLZXlzIiwiY2hhbmdlZFByb3BzXzEiLCJmcm9tIiwidG8iLCJjb25zb2xlIiwibG9nIiwiQWxlcnQiLCJjbGFzc05hbWUiLCJib290c3RyYXBTdHlsZSIsImNoaWxkcmVuIiwiQ2hpbGRyZW4iLCJjb3VudCIsImNyZWF0ZUVsZW1lbnQiLCJleGVjdXRlQWN0aW9uIiwiYWN0aW9uIiwiY2FuRXhlY3V0ZSIsImlzRXhlY3V0aW5nIiwiZXhlY3V0ZSIsImRlYm91bmNlIiwiZnVuYyIsIndhaXRGb3IiLCJ0aW1lb3V0IiwiZGVib3VuY2VkIiwiY2xlYXJUaW1lb3V0IiwiRm9ybWF0dGVyVHlwZSIsIl9pbXBvcnRlZFNjcmlwdCIsImlkIiwiaGVhZEVsZW1lbnQiLCJzcmMiLCJyZXNvbHZlIiwic2NyaXB0IiwicmVqZWN0IiwiX3R5cGVvZiIsImNvbnN0cnVjdG9yIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJpbmZvIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImVyciIsInVuZGVmaW5lZCIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsImRlc2NyaXB0b3IiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfc2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsIl9nZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIlJlZmxlY3QiLCJjb25zdHJ1Y3QiLCJzaGFtIiwiUHJveHkiLCJCb29sZWFuIiwidmFsdWVPZiIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX2NyZWF0ZVN1cGVyIiwiRGVyaXZlZCIsImhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJfY3JlYXRlU3VwZXJJbnRlcm5hbCIsIlN1cGVyIiwiTmV3VGFyZ2V0IiwicG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsInJ1bnRpbWUiLCJPcCIsIiRTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibmFtZSIsIm1hcmsiLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZWNvcmQiLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJnbG9iYWxUaGlzIiwicmVxdWlyZSIsIkRFRkFVTFRfUkVUUllfVElNRSIsIkFQSUxvYWRlciIsImxvYWRlZCIsIkFNYXAiLCJjYWxsYmFja05hbWUiLCJjb2xvciIsImNmZyIsInByb3RvY29sIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInF1ZXVlIiwidGFzayIsInJlcXVpcmVTY3JpcHQiLCJkZWZhdWx0UHJvcHMiLCJha2F5IiwiaG9zdEFuZFBhdGgiLCJ2ZXJzaW9uIiwid2FpdFF1ZXVlIiwiX2RlZmluZVByb3BlcnR5Iiwib3duS2V5cyIsImVudW1lcmFibGVPbmx5Iiwic3ltYm9scyIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQyIiwic291cmNlIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIm9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX2FyciIsIl9uIiwiX2QiLCJfcyIsIl9lIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJsZW4iLCJhcnIyIiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwibWluTGVuIiwiYXJyYXlMaWtlVG9BcnJheSIsInRlc3QiLCJfbm9uSXRlcmFibGVSZXN0IiwiX3NsaWNlZFRvQXJyYXkiLCJhcnJheVdpdGhIb2xlcyIsIml0ZXJhYmxlVG9BcnJheUxpbWl0IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVJlc3QiLCJfZXh0ZW5kcyIsInByb3BzTmFtZSIsImVOYW1lIiwic3RhdHVzIiwidmlzaWFibGUiLCJldmVudE5hbWUiLCJldmVudEhhbmRsZSIsInZOYW1lIiwidXNlTWFwIiwib3RoZXIiLCJzZXRNYXAiLCJ6b29tIiwic2V0Wm9vbSIsImNvbnRhaW5lciIsInNldENvbnRhaW5lciIsIl9vYmplY3RTcHJlYWQiLCJ1c2VNZW1vIiwidXNlU2V0U3RhdHVzIiwidXNlU2V0dGluZ1Byb3BlcnRpZXMiLCJ1c2VFdmVudFByb3BlcnRpZXMiLCJzdHlsZSIsIl9leGNsdWRlZCIsImVsbVJlZiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJjaGlsZHMiLCJmb250U2l6ZSIsImNoaWxkIiwidXNlTWFya2VyIiwibWFya2VyIiwic2V0TWFya2VyIiwidXNlVmlzaWFibGUiLCJNYXJrZXIiLCJ1c2VDb250ZXh0TWVudSIsImNvbnRleHRNZW51Iiwic2V0Q29udGV4dE1lbnUiLCJyaWdodGNsaWNrIiwibm9vcCIsInRleHQiLCJvbkNsaWNrIiwiQ29udGV4dE1lbnUiLCJ1c2VHZW9sb2NhdGlvbiIsIm9uQ29tcGxldGUiLCJvbkVycm9yIiwiZ2VvbG9jYXRpb24iLCJzZXRHZW9sb2NhdGlvbiIsImZ1bk5hbWUiLCJHZW9sb2NhdGlvbiIsInNjYWxlQ29udHJvbCIsInNldFNjYWxlQ29udHJvbCIsIm9mZnNldCIsIlNjYWxlQ29udHJvbCIsInVzZVNjYWxlQ29udHJvbCIsInRvb2xCYXJDb250cm9sIiwic2V0VG9vbEJhckNvbnRyb2wiLCJUb29sQmFyQ29udHJvbCIsInVzZVRvb2xCYXJDb250cm9sIiwiY29udHJvbEJhckNvbnRyb2wiLCJzZXRDb250cm9sQmFyQ29udHJvbCIsIkNvbnRyb2xCYXJDb250cm9sIiwidXNlQ29udHJvbEJhckNvbnRyb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFFQyxhQUFZOztBQUdaLE1BQUlBLE1BQU0sR0FBRyxHQUFHQyxjQUFoQjs7QUFFQSxXQUFTQyxVQUFULEdBQXNCO0FBQ3JCLFFBQUlDLE9BQU8sR0FBRyxFQUFkOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0MsU0FBUyxDQUFDQyxNQUE5QixFQUFzQ0YsQ0FBQyxFQUF2QyxFQUEyQztBQUMxQyxVQUFJRyxHQUFHLEdBQUdGLFNBQVMsQ0FBQ0QsQ0FBRCxDQUFuQjtBQUNBLFVBQUksQ0FBQ0csR0FBTCxFQUFVO0FBRVYsVUFBSUMsT0FBTyxHQUFHLE9BQU9ELEdBQXJCOztBQUVBLFVBQUlDLE9BQU8sS0FBSyxRQUFaLElBQXdCQSxPQUFPLEtBQUssUUFBeEMsRUFBa0Q7QUFDakRMLFFBQUFBLE9BQU8sQ0FBQ00sSUFBUixDQUFhRixHQUFiO0FBQ0EsT0FGRCxNQUVPLElBQUlHLEtBQUssQ0FBQ0MsT0FBTixDQUFjSixHQUFkLENBQUosRUFBd0I7QUFDOUIsWUFBSUEsR0FBRyxDQUFDRCxNQUFSLEVBQWdCO0FBQ2YsY0FBSU0sS0FBSyxHQUFHVixVQUFVLENBQUNXLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUJOLEdBQXZCLENBQVo7O0FBQ0EsY0FBSUssS0FBSixFQUFXO0FBQ1ZULFlBQUFBLE9BQU8sQ0FBQ00sSUFBUixDQUFhRyxLQUFiO0FBQ0E7QUFDRDtBQUNELE9BUE0sTUFPQSxJQUFJSixPQUFPLEtBQUssUUFBaEIsRUFBMEI7QUFDaEMsWUFBSUQsR0FBRyxDQUFDTyxRQUFKLEtBQWlCQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJGLFFBQXRDLEVBQWdEO0FBQy9DLGVB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
