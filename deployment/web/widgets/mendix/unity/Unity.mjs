
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
function ___$insertStyle(css) {
    if (!css || !window) {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

import React, { useState, useMemo, useRef, useEffect, createElement, useCallback } from 'react';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

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

var __read$9 = undefined && undefined.__read || function (o, n) {
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
    ar = ar.concat(__read$9(arguments[i]));
  }

  return ar;
};

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

ConfigContext.Provider; // UseAPIProvider 已经废弃，此处为了兼容 umijs 插件 plugin-request

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

function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }

  var _a = __read$3(useState(defaultValue), 2),
      state = _a[0],
      setState = _a[1];

  var actions = useMemo(function () {
    var reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue; // 切换返回值

    var toggle = function toggle(value) {
      // 强制返回状态值，适用于点击操作
      if (value !== undefined) {
        setState(value);
        return;
      }

      setState(function (s) {
        return s === defaultValue ? reverseValueOrigin : defaultValue;
      });
    }; // 设置默认值


    var setLeft = function setLeft() {
      return setState(defaultValue);
    }; // 设置取反值


    var setRight = function setRight() {
      return setState(reverseValueOrigin);
    };

    return {
      toggle: toggle,
      setLeft: setLeft,
      setRight: setRight
    };
  }, [defaultValue, reverseValue]);
  return [state, actions];
}

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
function useBoolean(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }

  var _a = __read$2(useToggle(defaultValue), 2),
      state = _a[0],
      toggle = _a[1].toggle;

  var actions = useMemo(function () {
    var setTrue = function setTrue() {
      return toggle(true);
    };

    var setFalse = function setFalse() {
      return toggle(false);
    };

    return {
      toggle: toggle,
      setTrue: setTrue,
      setFalse: setFalse
    };
  }, [toggle]);
  return [state, actions];
}

function useEventListener(eventName, handler, options) {
  if (options === void 0) {
    options = {};
  }

  var handlerRef = useRef();
  handlerRef.current = handler;
  useEffect(function () {
    var targetElement = getTargetElement(options.target, window);

    if (!targetElement.addEventListener) {
      return;
    }

    var eventListener = function eventListener(event) {
      return handlerRef.current && handlerRef.current(event);
    };

    targetElement.addEventListener(eventName, eventListener, {
      capture: options.capture,
      once: options.once,
      passive: options.passive
    });
    return function () {
      targetElement.removeEventListener(eventName, eventListener, {
        capture: options.capture
      });
    };
  }, [eventName, options.target, options.capture, options.once, options.passive]);
}

function useCreation(factory, deps) {
  var current = useRef({
    deps: deps,
    obj: undefined,
    initialized: false
  }).current;

  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialized = true;
  }

  return current.obj;
}

function depsAreSame(oldDeps, deps) {
  if (oldDeps === deps) return true;

  for (var i = 0; i < oldDeps.length; i++) {
    if (oldDeps[i] !== deps[i]) return false;
  }

  return true;
}

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
var useHover = (function (target, options) {
  var _a = options || {},
      onEnter = _a.onEnter,
      onLeave = _a.onLeave;

  var _b = __read$1(useBoolean(false), 2),
      state = _b[0],
      _c = _b[1],
      setTrue = _c.setTrue,
      setFalse = _c.setFalse;

  useEventListener('mouseenter', function () {
    onEnter && onEnter();
    setTrue();
  }, {
    target: target
  });
  useEventListener('mouseleave', function () {
    onLeave && onLeave();
    setFalse();
  }, {
    target: target
  });
  return state;
});

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

var exports = {};

var unity = {};

var unityLoaderService = {};

var __awaiter$2 = commonjsGlobal && commonjsGlobal.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator$2 = commonjsGlobal && commonjsGlobal.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(unityLoaderService, "__esModule", {
  value: true
});
unityLoaderService.UnityLoaderService = void 0; // TODO turn into hook

var UnityLoaderService = function () {
  function UnityLoaderService() {
    /**
     * A reference to the document head.
     * @private
     * @type {HTMLHeadElement}
     */
    this.documentHead = typeof document !== "undefined" ? document.querySelector("head") : undefined;
  }
  /**
   * Adds the Unity loader script to the window. When a version of the loader
   * is already appended, we'll skip to the validation right away. Before
   * resolving a type check on the createUnityInstance method is done.
   * @public
   * @param {string} url the path to the Unity loader file
   * @returns {Promise<void>} A promise when resolving when the file is loaded succesfulling.
   */


  UnityLoaderService.prototype.addFromUrl = function (url) {
    return __awaiter$2(this, void 0, void 0, function () {
      var _hasSimilarUnityLoaderUrlInstance, _i, _a, _unityLoaderInstance, _htmlScriptElement;

      return __generator$2(this, function (_b) {
        switch (_b.label) {
          case 0:
            _hasSimilarUnityLoaderUrlInstance = false;

            for (_i = 0, _a = UnityLoaderService.unityLoaderInstances; _i < _a.length; _i++) {
              _unityLoaderInstance = _a[_i];
              if (_unityLoaderInstance.url === url) _hasSimilarUnityLoaderUrlInstance = true;
            }

            if (!(_hasSimilarUnityLoaderUrlInstance === false)) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.appendAndLoadScript(url)];

          case 1:
            _htmlScriptElement = _b.sent();
            UnityLoaderService.unityLoaderInstances.push({
              url: url,
              htmlScriptElement: _htmlScriptElement
            });
            _b.label = 2;

          case 2:
            if (typeof createUnityInstance !== "function") throw new Error("Unable to invoke Unity Loader, loaded incorrectly.");
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Appends a new script tag to the window. The promise resolves when the script
   * is loaded and rejects when it failed to load.
   * @private
   * @param {string} url The url of the script
   * @returns A promise containing the HTML Script Ele,ent
   */


  UnityLoaderService.prototype.appendAndLoadScript = function (url) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (typeof _this.documentHead !== "undefined") {
        var _scriptTag = document.createElement("script");

        _scriptTag.type = "text/javascript";
        _scriptTag.async = true;
        _scriptTag.src = url;

        _scriptTag.onload = function () {
          return resolve(_scriptTag);
        };

        _scriptTag.onerror = function (error) {
          return reject("Unable to load " + url + " " + error);
        };

        _this.documentHead.appendChild(_scriptTag);
      }
    });
  };
  /**
   * A reference to all UnityLoader script tags and their respective urls.
   * @private
   * @type {Array<{ url: string; htmlScriptElement: HTMLScriptElement; }>}
   */


  UnityLoaderService.unityLoaderInstances = new Array();
  return UnityLoaderService;
}();

unityLoaderService.UnityLoaderService = UnityLoaderService;

var __extends = commonjsGlobal && commonjsGlobal.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = commonjsGlobal && commonjsGlobal.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter$1 = commonjsGlobal && commonjsGlobal.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator$1 = commonjsGlobal && commonjsGlobal.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(unity, "__esModule", {
  value: true
});
unity.Unity = void 0;

var react_1 = require("react");

var unity_loader_service_1 = unityLoaderService; // TODO turn into functional component


var Unity$2 = function (_super) {
  __extends(Unity, _super);

  function Unity() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    /**
     * The UnityContext passed by the props.
     * @private
     * @type {UnityContext}
     */


    _this.unityContext = _this.props.unityContext;
    /**
     * The UnityLoader service instance.
     * @private
     * @type {UnityLoaderService}
     */

    _this.unityLoaderService = new unity_loader_service_1.UnityLoaderService();
    /**
     * A flag representing the component's mount state.
     * @private
     * @type {boolean}
     */

    _this.isComponentMounted = false;
    return _this;
  }
  /**
   * Event invoked by the UnityInstance when the initialization is progressing.
   * Will be used to track the loading progression and invokes the event listeners
   * for both 'progress' and 'loaded' when the progression hits a value of '1'.
   * @private
   * @param {number} progression
   */


  Unity.prototype.onProgress = function (progression) {
    this.unityContext.dispatchEventListener("progress", progression);

    if (progression === 1) {
      this.unityContext.dispatchEventListener("loaded");
      if (typeof this.htmlCanvasElementReference !== "undefined") this.unityContext.dispatchEventListener("canvas", this.htmlCanvasElementReference);
    }
  };
  /**
   * Event invoked when the component is mounted. This sets the component
   * reference and starts the mounting of the UnityInstance.
   * @public
   */


  Unity.prototype.componentDidMount = function () {
    this.isComponentMounted = true;
    this.mountUnityInstance();
  };
  /**
   * Event invoked when the component will unmount. This force quits the
   * UnityInstance which will clear it from the memory.
   * @public
   */


  Unity.prototype.componentWillUnmount = function () {
    this.unityContext.quitUnityInstance();
    this.isComponentMounted = false;
  };
  /**
   * Initialized the Unity Loader and mounts the UnityInstance to the component.
   * @private
   * @async
   * @returns {Promise<void>} a promise resolving when Unity loaded correctly.
   */


  Unity.prototype.mountUnityInstance = function () {
    return __awaiter$1(this, void 0, void 0, function () {
      var _unityInstanceParameters, _unityInstance, message_1;

      var _this = this;

      return __generator$1(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]); // Unity requires the loader script to be appended and loaded before we
            // can safely instantiate Unity and mount the component.


            return [4
            /*yield*/
            , this.unityLoaderService.addFromUrl(this.unityContext.unityConfig.loaderUrl)];

          case 1:
            // Unity requires the loader script to be appended and loaded before we
            // can safely instantiate Unity and mount the component.
            _a.sent(); // When the loader service was fetching the required scripts, it is
            // possible for the component to be unmounted. This is why we check if it
            // is still mounted, if not, we do not proceed instantiating Unity.


            if (this.isComponentMounted === false) {
              return [2
              /*return*/
              ];
            }

            _unityInstanceParameters = __assign(__assign({}, this.unityContext.unityConfig), {
              printErr: function (message) {
                return _this.unityContext.dispatchEventListener("error", message);
              },
              print: function (message) {
                return _this.unityContext.dispatchEventListener("debug", message);
              }
            });
            if (this.props.devicePixelRatio !== undefined) _unityInstanceParameters.devicePixelRatio = this.props.devicePixelRatio;
            if (this.unityContext.unityConfig.webglContextAttributes !== undefined) _unityInstanceParameters.webglContextAttributes = this.unityContext.unityConfig.webglContextAttributes;
            if (this.props.matchWebGLToCanvasSize !== undefined) _unityInstanceParameters.matchWebGLToCanvasSize = this.props.matchWebGLToCanvasSize;
            return [4
            /*yield*/
            , createUnityInstance(this.htmlCanvasElementReference, _unityInstanceParameters, this.onProgress.bind(this))];

          case 2:
            _unityInstance = _a.sent(); // Finally pass the instance back to the context object.

            this.unityContext.setUnityInstance(_unityInstance); // Since the creation of the Unity Instance is async, we'll check the
            // component's mount state right aftater instantiating. If the component
            // is no longer mounted, we'll quit the Unity instance right away.
            // This needs to occur after the setUnityInstance call because
            // quitUnityInstance requires the instance to be set.
            // HACK requires type cast to boolean due to await between comparisons.

            if (this.isComponentMounted === false) return [2
            /*return*/
            , this.unityContext.quitUnityInstance()];
            return [3
            /*break*/
            , 4];

          case 3:
            message_1 = _a.sent();
            this.unityContext.dispatchEventListener("error", message_1);
            console.error("A problem occurred while mounting", message_1);
            return [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Renders the unity wrapper and player.
   * @public
   * @returns {React.ReactNode} element
   */


  Unity.prototype.render = function () {
    var _this = this;

    return react_1.createElement("canvas", {
      ref: function (ref) {
        return _this.htmlCanvasElementReference = ref;
      },
      className: this.props.className || "",
      tabIndex: this.props.tabIndex || undefined,
      style: this.props.style || {}
    });
  };

  return Unity;
}(react_1.PureComponent);

unity.Unity = Unity$2;

var unityContext = {};

var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = commonjsGlobal && commonjsGlobal.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(unityContext, "__esModule", {
  value: true
});
unityContext.UnityContext = void 0; // TODO remove from dir

/**
 * The Unity Context.
 */

var UnityContext = function () {
  /**
   * Creates a new instance of the Unity context model.
   * @param {IUnityConfig} unityConfig The Unity config used to build the player.
   */
  function UnityContext(unityConfig) {
    this.unityConfig = unityConfig;
    /**
     * A list of the UnityEvents binded to this unityContext.
     * @private
     * @type {IUnityEvent[]}
     */

    this.unityEvents = [];
    if (typeof window !== "undefined" && typeof window.ReactUnityWebGL === "undefined") window.ReactUnityWebGL = {};
  }
  /**
   * Sets the reference of the UnityInstance.
   * @public
   * @param {UnityInstance} unityInstance the target unityInstance.
   */


  UnityContext.prototype.setUnityInstance = function (unityInstance) {
    this.unityInstance = unityInstance;
  };
  /**
   * Quits the Unity Instance and clears it from memory.
   * @public
   */


  UnityContext.prototype.quitUnityInstance = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(typeof this.unityInstance !== "undefined")) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.unityInstance.Quit()];

          case 1:
            _a.sent();

            this.dispatchEventListener("quitted");
            this.unityInstance = undefined;
            _a.label = 2;

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * Sends a message to the UnityInstance to invoke a public method.
   * @public
   * @param {string} gameObjectName the name of the game object in your Unity scene.
   * @param {string} methodName the name of the public method on the game object.
   * @param {string | number | boolean} parameter an optional method parameter.
   */


  UnityContext.prototype.send = function (gameObjectName, methodName, parameter) {
    if (typeof this.unityInstance !== "undefined") if (typeof parameter === "undefined") this.unityInstance.SendMessage(gameObjectName, methodName);else this.unityInstance.SendMessage(gameObjectName, methodName, parameter);
  };
  /**
   * Registers an event listener for the Unity player. These can be
   * system events like when the player is initialized or loader and
   * your custom events from Unity.
   * @public
   * @param {string} eventName the event's name
   * @param {Function} eventListener the event's function
   */


  UnityContext.prototype.on = function (eventName, eventListener) {
    this.unityEvents.push({
      eventName: eventName,
      eventCallback: eventListener
    });
    if (typeof window !== "undefined") window.ReactUnityWebGL[eventName] = function () {
      var parameters = [];

      for (var _a = 0; _a < arguments.length; _a++) {
        parameters[_a] = arguments[_a];
      }

      return eventListener.apply(void 0, parameters);
    };
  };
  /**
   * Removes all the Event Listeners with a specific Event Name.
   * @public
   * @param {string} eventName the event's name
   * @example unityContext.removeEventListener("progress");
   */


  UnityContext.prototype.removeEventListener = function (eventName) {
    // TODO refactor to "off"?
    for (var _i = 0; _i < this.unityEvents.length; _i++) if (this.unityEvents[_i].eventName === eventName) this.unityEvents.splice(_i, 1);

    delete window.ReactUnityWebGL[eventName];
  };
  /**
   * Removes all the Event Listeners.
   * @public
   * @example unityContext.removeAllEventListeners();
   */


  UnityContext.prototype.removeAllEventListeners = function () {
    // TODO refactor to "off"?
    for (var _i = 0; _i < this.unityEvents.length; _i++) delete window.ReactUnityWebGL[this.unityEvents[_i].eventName];

    this.unityEvents = [];
  };
  /**
   * Dispatches an event listener that has been registered using the on method.
   * @public
   * @param {string} eventName the event's name
   * @param {any} eventValue the event's value
   * @example unityContext.dispatchEventListener("gameOver", 180);
   */


  UnityContext.prototype.dispatchEventListener = function (eventName, eventValue) {
    for (var _a = 0, _b = this.unityEvents; _a < _b.length; _a++) {
      var _unityEvent = _b[_a];
      if (_unityEvent.eventName === eventName) _unityEvent.eventCallback(eventValue);
    }
  };
  /**
   * Enables or disabled the Fullscreen mode of the Unity Instance.
   * @public
   * @param {boolean} enabled
   */


  UnityContext.prototype.setFullscreen = function (enabled) {
    if (typeof this.unityInstance !== "undefined") this.unityInstance.SetFullscreen(enabled === true ? 1 : 0);
  };

  return UnityContext;
}();

unityContext.UnityContext = UnityContext;

(function (exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnityContext = void 0;

var unity_1 = unity;

var unity_context_1 = unityContext;

Object.defineProperty(exports, "UnityContext", {
  enumerable: true,
  get: function () {
    return unity_context_1.UnityContext;
  }
});
exports.default = unity_1.Unity;
}(exports));

var Unity$1 = /*@__PURE__*/getDefaultExportFromCjs(exports);

function UnityFC(props) {
    const unityContext = useCreation(() => new exports.UnityContext({
        loaderUrl: `${props.modelPath}.loader.js`,
        dataUrl: `${props.modelPath}.data`,
        frameworkUrl: `${props.modelPath}.framework.js`,
        codeUrl: `${props.modelPath}.wasm`
    }), [props.modelPath]);
    const ref = useRef();
    const isHovering = useHover(ref);
    useEffect(() => {
        if (props.hoverGo) {
            unityContext.send(props.hoverGo, props.hoverMethod, isHovering ? 1 : 0);
        }
    }, [isHovering]);
    useEffect(() => {
        var _a;
        if (!unityContext) {
            return;
        }
        window.unityContext = window.unityContext ? window.unityContext : {};
        window.unityContext[props.name] = unityContext;
        if (props.onEvent) {
            (_a = props.eventNames) === null || _a === void 0 ? void 0 : _a.forEach(eventName => {
                unityContext.on(eventName, value => {
                    props.onEvent(eventName, value);
                    if (eventName == 'ClickObject') {
                        setPipeName(value);
                    }
                });
            });
        }
        return () => {
            unityContext.removeAllEventListeners();
        };
    }, [unityContext]);
    const [pipeName, setPipeName] = useState();
    return (createElement("div", null,
        createElement("span", null,
            "\u9009\u62E9\u7684\u7BA1\u9053\u540D\u79F0 ",
            pipeName),
        createElement("button", { onClick: () => {
                if (pipeName) {
                    unityContext.send(pipeName, 'StopShake');
                }
            } }, "\u505C\u6B62\u632F\u52A8"),
        createElement("button", { onClick: () => {
                if (pipeName) {
                    unityContext.send(pipeName, 'StartShake');
                }
            } }, "\u5F00\u59CB\u632F\u52A8"),
        createElement("div", { ref: ref },
            createElement(Unity$1, { className: props.class, tabIndex: props.tabIndex, style: props.style, unityContext: unityContext }))));
}

___$insertStyle("/*\nPlace your custom CSS here\n*/");

function Unity(props) {
    const onEvent = useCallback((eventName, value) => {
        var _a;
        switch (eventName) {
            case 'ClickObject':
                if (props.out1 && ((_a = props.out1) === null || _a === void 0 ? void 0 : _a.status) == "available" /* Available */) {
                    props.out1.setValue(value);
                }
                break;
        }
    }, [props.out1]);
    return (createElement(UnityFC, { onEvent: onEvent, eventNames: ['ClickObject'], name: props.name, hoverMethod: props.hoverMethod, hoverGo: props.hoverGameObject, style: { width: "100%", ...props.style }, class: props.class, modelPath: props.unityModelPath }));
}

export { Unity as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pdHkubWpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC50aHJvdHRsZS9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvdXRpbHMvdXRpbHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL3V0aWxzL2xpbWl0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy91dGlscy91c2VQZXJzaXN0Rm4uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL3V0aWxzL3dpbmRvd0ZvY3VzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy91dGlscy93aW5kb3dWaXNpYmxlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy91c2VBc3luYy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvdXNlTG9hZE1vcmUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL3VzZVBhZ2luYXRlZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvY29uZmlnQ29udGV4dC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3V0aWxzL2RvbS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXNlVG9nZ2xlL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91c2VCb29sZWFuL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91c2VFdmVudExpc3RlbmVyL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91c2VDcmVhdGlvbi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXNlSG92ZXIvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXVuaXR5LXdlYmdsL2Rpc3RyaWJ1dGlvbi9zZXJ2aWNlcy91bml0eS1sb2FkZXItc2VydmljZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC11bml0eS13ZWJnbC9kaXN0cmlidXRpb24vY29tcG9uZW50cy91bml0eS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC11bml0eS13ZWJnbC9kaXN0cmlidXRpb24vbW9kZWxzL3VuaXR5LWNvbnRleHQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdW5pdHktd2ViZ2wvZGlzdHJpYnV0aW9uL2V4cG9ydHMuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Vbml0eUZDLnRzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9Vbml0eS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRG9jdW1lbnRWaXNpYmxlKCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09ICdoaWRkZW4nO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNPbmxpbmUoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yLm9uTGluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLm9uTGluZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsInZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG52YXIgX19zcHJlYWQgPSB0aGlzICYmIHRoaXMuX19zcHJlYWQgfHwgZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpbWl0KGZuLCB0aW1lc3Bhbikge1xuICB2YXIgcGVuZGluZyA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cblxuICAgIGlmIChwZW5kaW5nKSByZXR1cm47XG4gICAgcGVuZGluZyA9IHRydWU7XG4gICAgZm4uYXBwbHkodm9pZCAwLCBfX3NwcmVhZChhcmdzKSk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBwZW5kaW5nID0gZmFsc2U7XG4gICAgfSwgdGltZXNwYW4pO1xuICB9O1xufSIsInZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG52YXIgX19zcHJlYWQgPSB0aGlzICYmIHRoaXMuX19zcHJlYWQgfHwgZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZVBlcnNpc3RGbihmbikge1xuICB2YXIgcmVmID0gdXNlUmVmKGZ1bmN0aW9uICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjYWxsIGFuIGV2ZW50IGhhbmRsZXIgd2hpbGUgcmVuZGVyaW5nLicpO1xuICB9KTtcbiAgcmVmLmN1cnJlbnQgPSBmbjtcbiAgdmFyIHBlcnNpc3QgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuXG4gICAgdmFyIHJlZkZuID0gcmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAocmVmRm4pIHtcbiAgICAgIHJldHVybiByZWZGbi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKGFyZ3MpKTtcbiAgICB9XG4gIH0sIFtyZWZdKTtcblxuICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHBlcnNpc3Q7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VQZXJzaXN0Rm47IiwiLy8gZnJvbSBzd3JcbmltcG9ydCB7IGlzRG9jdW1lbnRWaXNpYmxlLCBpc09ubGluZSB9IGZyb20gJy4vdXRpbHMnO1xudmFyIGxpc3RlbmVycyA9IFtdO1xuXG5mdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xufVxuXG52YXIgZXZlbnRzQmluZGVkID0gZmFsc2U7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAmJiAhZXZlbnRzQmluZGVkKSB7XG4gIHZhciByZXZhbGlkYXRlID0gZnVuY3Rpb24gcmV2YWxpZGF0ZSgpIHtcbiAgICBpZiAoIWlzRG9jdW1lbnRWaXNpYmxlKCkgfHwgIWlzT25saW5lKCkpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIHJldmFsaWRhdGUsIGZhbHNlKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgcmV2YWxpZGF0ZSwgZmFsc2UpOyAvLyBvbmx5IGJpbmQgdGhlIGV2ZW50cyBvbmNlXG5cbiAgZXZlbnRzQmluZGVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3Vic2NyaWJlOyIsIi8vIGZyb20gc3dyXG5pbXBvcnQgeyBpc0RvY3VtZW50VmlzaWJsZSB9IGZyb20gJy4vdXRpbHMnO1xudmFyIGxpc3RlbmVycyA9IFtdO1xuXG5mdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xufVxuXG52YXIgZXZlbnRzQmluZGVkID0gZmFsc2U7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAmJiAhZXZlbnRzQmluZGVkKSB7XG4gIHZhciByZXZhbGlkYXRlID0gZnVuY3Rpb24gcmV2YWxpZGF0ZSgpIHtcbiAgICBpZiAoIWlzRG9jdW1lbnRWaXNpYmxlKCkpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIHJldmFsaWRhdGUsIGZhbHNlKTsgLy8gb25seSBiaW5kIHRoZSBldmVudHMgb25jZVxuXG4gIGV2ZW50c0JpbmRlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1YnNjcmliZTsiLCJ2YXIgX19hc3NpZ24gPSB0aGlzICYmIHRoaXMuX19hc3NpZ24gfHwgZnVuY3Rpb24gKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdDtcbiAgfTtcblxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cbnZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG52YXIgX19zcHJlYWQgPSB0aGlzICYmIHRoaXMuX19zcHJlYWQgfHwgZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC50aHJvdHRsZSc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNEb2N1bWVudFZpc2libGUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IGdldENhY2hlLCBzZXRDYWNoZSB9IGZyb20gJy4vdXRpbHMvY2FjaGUnO1xuaW1wb3J0IGxpbWl0IGZyb20gJy4vdXRpbHMvbGltaXQnO1xuaW1wb3J0IHVzZVBlcnNpc3RGbiBmcm9tICcuL3V0aWxzL3VzZVBlcnNpc3RGbic7XG5pbXBvcnQgdXNlVXBkYXRlRWZmZWN0IGZyb20gJy4vdXRpbHMvdXNlVXBkYXRlRWZmZWN0JztcbmltcG9ydCBzdWJzY3JpYmVGb2N1cyBmcm9tICcuL3V0aWxzL3dpbmRvd0ZvY3VzJztcbmltcG9ydCBzdWJzY3JpYmVWaXNpYmxlIGZyb20gJy4vdXRpbHMvd2luZG93VmlzaWJsZSc7XG52YXIgREVGQVVMVF9LRVkgPSAnQUhPT0tTX1VTRV9SRVFVRVNUX0RFRkFVTFRfS0VZJztcblxudmFyIEZldGNoID1cbi8qKiBAY2xhc3MgKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRmV0Y2goc2VydmljZSwgY29uZmlnLCBzdWJzY3JpYmUsIGluaXRTdGF0ZSkge1xuICAgIC8vIOivt+axguaXtuW6j1xuICAgIHRoaXMuY291bnQgPSAwOyAvLyB2aXNpYmxlIOWQju+8jOaYr+WQpue7p+e7rei9ruivolxuXG4gICAgdGhpcy5wb2xsaW5nV2hlblZpc2libGVGbGFnID0gZmFsc2U7XG4gICAgdGhpcy5wb2xsaW5nVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sb2FkaW5nRGVsYXlUaW1lciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVuc3Vic2NyaWJlID0gW107XG4gICAgdGhpcy50aGF0ID0gdGhpcztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBwYXJhbXM6IFtdLFxuICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgIHJ1bjogdGhpcy5ydW4uYmluZCh0aGlzLnRoYXQpLFxuICAgICAgbXV0YXRlOiB0aGlzLm11dGF0ZS5iaW5kKHRoaXMudGhhdCksXG4gICAgICByZWZyZXNoOiB0aGlzLnJlZnJlc2guYmluZCh0aGlzLnRoYXQpLFxuICAgICAgY2FuY2VsOiB0aGlzLmNhbmNlbC5iaW5kKHRoaXMudGhhdCksXG4gICAgICB1bm1vdW50OiB0aGlzLnVubW91bnQuYmluZCh0aGlzLnRoYXQpXG4gICAgfTtcbiAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuc3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuXG4gICAgaWYgKGluaXRTdGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLnN0YXRlKSwgaW5pdFN0YXRlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlYm91bmNlUnVuID0gdGhpcy5jb25maWcuZGVib3VuY2VJbnRlcnZhbCA/IGRlYm91bmNlKHRoaXMuX3J1biwgdGhpcy5jb25maWcuZGVib3VuY2VJbnRlcnZhbCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy50aHJvdHRsZVJ1biA9IHRoaXMuY29uZmlnLnRocm90dGxlSW50ZXJ2YWwgPyB0aHJvdHRsZSh0aGlzLl9ydW4sIHRoaXMuY29uZmlnLnRocm90dGxlSW50ZXJ2YWwpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMubGltaXRSZWZyZXNoID0gbGltaXQodGhpcy5yZWZyZXNoLmJpbmQodGhpcyksIHRoaXMuY29uZmlnLmZvY3VzVGltZXNwYW4pO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLnBvbGxpbmdJbnRlcnZhbCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZS5wdXNoKHN1YnNjcmliZVZpc2libGUodGhpcy5yZVBvbGxpbmcuYmluZCh0aGlzKSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy5yZWZyZXNoT25XaW5kb3dGb2N1cykge1xuICAgICAgdGhpcy51bnN1YnNjcmliZS5wdXNoKHN1YnNjcmliZUZvY3VzKHRoaXMubGltaXRSZWZyZXNoLmJpbmQodGhpcykpKTtcbiAgICB9XG4gIH1cblxuICBGZXRjaC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocykge1xuICAgIGlmIChzID09PSB2b2lkIDApIHtcbiAgICAgIHMgPSB7fTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuc3RhdGUpLCBzKTtcbiAgICB0aGlzLnN1YnNjcmliZSh0aGlzLnN0YXRlKTtcbiAgfTtcblxuICBGZXRjaC5wcm90b3R5cGUuX3J1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfSAvLyDlj5bmtojlt7LmnInlrprml7blmahcblxuXG4gICAgaWYgKHRoaXMucG9sbGluZ1RpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5wb2xsaW5nVGltZXIpO1xuICAgIH0gLy8g5Y+W5raIIGxvYWRpbmdEZWxheVRpbWVyXG5cblxuICAgIGlmICh0aGlzLmxvYWRpbmdEZWxheVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5sb2FkaW5nRGVsYXlUaW1lcik7XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudCArPSAxOyAvLyDpl63ljIXlrZjlgqjlvZPmrKHor7fmsYLnmoQgY291bnRcblxuICAgIHZhciBjdXJyZW50Q291bnQgPSB0aGlzLmNvdW50O1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogIXRoaXMuY29uZmlnLmxvYWRpbmdEZWxheSxcbiAgICAgIHBhcmFtczogYXJnc1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmxvYWRpbmdEZWxheSkge1xuICAgICAgdGhpcy5sb2FkaW5nRGVsYXlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0sIHRoaXMuY29uZmlnLmxvYWRpbmdEZWxheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VydmljZS5hcHBseSh0aGlzLCBfX3NwcmVhZChhcmdzKSkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAoY3VycmVudENvdW50ICE9PSBfdGhpcy5jb3VudCkge1xuICAgICAgICAvLyBwcmV2ZW50IHJ1bi50aGVuIHdoZW4gcmVxdWVzdCBpcyBjYW5jZWxlZFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKCkge30pO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMubG9hZGluZ0RlbGF5VGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmxvYWRpbmdEZWxheVRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvcm1hdHRlZFJlc3VsdCA9IF90aGlzLmNvbmZpZy5mb3JtYXRSZXN1bHQgPyBfdGhpcy5jb25maWcuZm9ybWF0UmVzdWx0KHJlcykgOiByZXM7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogZm9ybWF0dGVkUmVzdWx0LFxuICAgICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5jb25maWcub25TdWNjZXNzKSB7XG4gICAgICAgIF90aGlzLmNvbmZpZy5vblN1Y2Nlc3MoZm9ybWF0dGVkUmVzdWx0LCBhcmdzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlZFJlc3VsdDtcbiAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKGN1cnJlbnRDb3VudCAhPT0gX3RoaXMuY291bnQpIHtcbiAgICAgICAgLy8gcHJldmVudCBydW4udGhlbiB3aGVuIHJlcXVlc3QgaXMgY2FuY2VsZWRcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLmxvYWRpbmdEZWxheVRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5sb2FkaW5nRGVsYXlUaW1lcik7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLmNvbmZpZy5vbkVycm9yKSB7XG4gICAgICAgIF90aGlzLmNvbmZpZy5vbkVycm9yKGVycm9yLCBhcmdzKTtcbiAgICAgIH0gLy8gSWYgdGhyb3dPbkVycm9yLCB1c2VyIHNob3VsZCBjYXRjaCB0aGUgZXJyb3Igc2VsZixcbiAgICAgIC8vIG9yIHRoZSBwYWdlIHdpbGwgY3Jhc2hcblxuXG4gICAgICBpZiAoX3RoaXMuY29uZmlnLnRocm93T25FcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcHJvbWlzZS1yZWplY3QtZXJyb3JzXG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgndXNlUmVxdWVzdCBoYXMgY2F1Z2h0IHRoZSBleGNlcHRpb24sIGlmIHlvdSBuZWVkIHRvIGhhbmRsZSB0aGUgZXhjZXB0aW9uIHlvdXJzZWxmLCB5b3UgY2FuIHNldCBvcHRpb25zLnRocm93T25FcnJvciB0byB0cnVlLicpO1xuICAgIH0pW1wiZmluYWxseVwiXShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY3VycmVudENvdW50ID09PSBfdGhpcy5jb3VudCkge1xuICAgICAgICBpZiAoX3RoaXMuY29uZmlnLnBvbGxpbmdJbnRlcnZhbCkge1xuICAgICAgICAgIC8vIOWmguaenOWxj+W5lemakOiXj++8jOW5tuS4lCAhcG9sbGluZ1doZW5IaWRkZW4sIOWImeWBnOatoui9ruivou+8jOW5tuiusOW9lSBmbGFn77yM562JIHZpc2libGUg5pe277yM57un57ut6L2u6K+iXG4gICAgICAgICAgaWYgKCFpc0RvY3VtZW50VmlzaWJsZSgpICYmICFfdGhpcy5jb25maWcucG9sbGluZ1doZW5IaWRkZW4pIHtcbiAgICAgICAgICAgIF90aGlzLnBvbGxpbmdXaGVuVmlzaWJsZUZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLnBvbGxpbmdUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX3J1bi5hcHBseShfdGhpcywgX19zcHJlYWQoYXJncykpO1xuICAgICAgICAgIH0sIF90aGlzLmNvbmZpZy5wb2xsaW5nSW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgRmV0Y2gucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kZWJvdW5jZVJ1bikge1xuICAgICAgdGhpcy5kZWJvdW5jZVJ1bi5hcHBseSh0aGlzLCBfX3NwcmVhZChhcmdzKSk7IC8vIFRPRE8g5aaC5p6cIG9wdGlvbnMg5a2Y5ZyoIGRlYm91bmNlSW50ZXJ2YWzvvIzmiJYgdGhyb3R0bGVJbnRlcnZhbO+8jOWImSBydW4g5ZKMIHJlZnJlc2gg5LiN5Lya6L+U5ZueIFByb21pc2XjgIIg5bim57G75Z6L6ZyA6KaB5L+u5aSN5ZCO77yM5q2k5aSE5Y+Y5oiQIHJldHVybjvjgIJcblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aHJvdHRsZVJ1bikge1xuICAgICAgdGhpcy50aHJvdHRsZVJ1bi5hcHBseSh0aGlzLCBfX3NwcmVhZChhcmdzKSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ydW4uYXBwbHkodGhpcywgX19zcHJlYWQoYXJncykpO1xuICB9O1xuXG4gIEZldGNoLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZGVib3VuY2VSdW4pIHtcbiAgICAgIHRoaXMuZGVib3VuY2VSdW4uY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGhyb3R0bGVSdW4pIHtcbiAgICAgIHRoaXMudGhyb3R0bGVSdW4uY2FuY2VsKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9hZGluZ0RlbGF5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxvYWRpbmdEZWxheVRpbWVyKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb2xsaW5nVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBvbGxpbmdUaW1lcik7XG4gICAgfVxuXG4gICAgdGhpcy5wb2xsaW5nV2hlblZpc2libGVGbGFnID0gZmFsc2U7XG4gICAgdGhpcy5jb3VudCArPSAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICBGZXRjaC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5ydW4uYXBwbHkodGhpcywgX19zcHJlYWQodGhpcy5zdGF0ZS5wYXJhbXMpKTtcbiAgfTtcblxuICBGZXRjaC5wcm90b3R5cGUucmVQb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnBvbGxpbmdXaGVuVmlzaWJsZUZsYWcpIHtcbiAgICAgIHRoaXMucG9sbGluZ1doZW5WaXNpYmxlRmxhZyA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9O1xuXG4gIEZldGNoLnByb3RvdHlwZS5tdXRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hY2Nlc3Mtc3RhdGUtaW4tc2V0c3RhdGVcbiAgICAgICAgZGF0YTogZGF0YSh0aGlzLnN0YXRlLmRhdGEpIHx8IHt9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBGZXRjaC5wcm90b3R5cGUudW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgcygpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBGZXRjaDtcbn0oKTtcblxuZnVuY3Rpb24gdXNlQXN5bmMoc2VydmljZSwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBfYSA9IF9vcHRpb25zLnJlZnJlc2hEZXBzLFxuICAgICAgcmVmcmVzaERlcHMgPSBfYSA9PT0gdm9pZCAwID8gW10gOiBfYSxcbiAgICAgIF9iID0gX29wdGlvbnMubWFudWFsLFxuICAgICAgbWFudWFsID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsXG4gICAgICBfYyA9IF9vcHRpb25zLm9uU3VjY2VzcyxcbiAgICAgIG9uU3VjY2VzcyA9IF9jID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9jLFxuICAgICAgX2QgPSBfb3B0aW9ucy5vbkVycm9yLFxuICAgICAgb25FcnJvciA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9kLFxuICAgICAgX2UgPSBfb3B0aW9ucy5kZWZhdWx0TG9hZGluZyxcbiAgICAgIGRlZmF1bHRMb2FkaW5nID0gX2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX2UsXG4gICAgICBsb2FkaW5nRGVsYXkgPSBfb3B0aW9ucy5sb2FkaW5nRGVsYXksXG4gICAgICBfZiA9IF9vcHRpb25zLnBvbGxpbmdJbnRlcnZhbCxcbiAgICAgIHBvbGxpbmdJbnRlcnZhbCA9IF9mID09PSB2b2lkIDAgPyAwIDogX2YsXG4gICAgICBfZyA9IF9vcHRpb25zLnBvbGxpbmdXaGVuSGlkZGVuLFxuICAgICAgcG9sbGluZ1doZW5IaWRkZW4gPSBfZyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9nLFxuICAgICAgX2ggPSBfb3B0aW9ucy5kZWZhdWx0UGFyYW1zLFxuICAgICAgZGVmYXVsdFBhcmFtcyA9IF9oID09PSB2b2lkIDAgPyBbXSA6IF9oLFxuICAgICAgX2ogPSBfb3B0aW9ucy5yZWZyZXNoT25XaW5kb3dGb2N1cyxcbiAgICAgIHJlZnJlc2hPbldpbmRvd0ZvY3VzID0gX2ogPT09IHZvaWQgMCA/IGZhbHNlIDogX2osXG4gICAgICBfayA9IF9vcHRpb25zLmZvY3VzVGltZXNwYW4sXG4gICAgICBmb2N1c1RpbWVzcGFuID0gX2sgPT09IHZvaWQgMCA/IDUwMDAgOiBfayxcbiAgICAgIGZldGNoS2V5ID0gX29wdGlvbnMuZmV0Y2hLZXksXG4gICAgICBjYWNoZUtleSA9IF9vcHRpb25zLmNhY2hlS2V5LFxuICAgICAgX2wgPSBfb3B0aW9ucy5jYWNoZVRpbWUsXG4gICAgICBjYWNoZVRpbWUgPSBfbCA9PT0gdm9pZCAwID8gNSAqIDYwICogMTAwMCA6IF9sLFxuICAgICAgX20gPSBfb3B0aW9ucy5zdGFsZVRpbWUsXG4gICAgICBzdGFsZVRpbWUgPSBfbSA9PT0gdm9pZCAwID8gMCA6IF9tLFxuICAgICAgZGVib3VuY2VJbnRlcnZhbCA9IF9vcHRpb25zLmRlYm91bmNlSW50ZXJ2YWwsXG4gICAgICB0aHJvdHRsZUludGVydmFsID0gX29wdGlvbnMudGhyb3R0bGVJbnRlcnZhbCxcbiAgICAgIGluaXRpYWxEYXRhID0gX29wdGlvbnMuaW5pdGlhbERhdGEsXG4gICAgICBfbyA9IF9vcHRpb25zLnJlYWR5LFxuICAgICAgcmVhZHkgPSBfbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vLFxuICAgICAgX3AgPSBfb3B0aW9ucy50aHJvd09uRXJyb3IsXG4gICAgICB0aHJvd09uRXJyb3IgPSBfcCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcDtcbiAgdmFyIG5ld3N0RmV0Y2hLZXkgPSB1c2VSZWYoREVGQVVMVF9LRVkpOyAvLyDmjIHkuYXljJbkuIDkupvlh73mlbBcblxuICB2YXIgc2VydmljZVBlcnNpc3QgPSB1c2VQZXJzaXN0Rm4oc2VydmljZSk7XG4gIHZhciBvblN1Y2Nlc3NQZXJzaXN0ID0gdXNlUGVyc2lzdEZuKG9uU3VjY2Vzcyk7XG4gIHZhciBvbkVycm9yUGVyc2lzdCA9IHVzZVBlcnNpc3RGbihvbkVycm9yKTtcbiAgdmFyIGZldGNoS2V5UGVyc2lzdCA9IHVzZVBlcnNpc3RGbihmZXRjaEtleSk7XG4gIHZhciBmb3JtYXRSZXN1bHQ7XG5cbiAgaWYgKCdmb3JtYXRSZXN1bHQnIGluIF9vcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgZm9ybWF0UmVzdWx0ID0gX29wdGlvbnMuZm9ybWF0UmVzdWx0O1xuICB9XG5cbiAgdmFyIGZvcm1hdFJlc3VsdFBlcnNpc3QgPSB1c2VQZXJzaXN0Rm4oZm9ybWF0UmVzdWx0KTtcbiAgdmFyIGNvbmZpZyA9IHtcbiAgICBmb3JtYXRSZXN1bHQ6IGZvcm1hdFJlc3VsdFBlcnNpc3QsXG4gICAgb25TdWNjZXNzOiBvblN1Y2Nlc3NQZXJzaXN0LFxuICAgIG9uRXJyb3I6IG9uRXJyb3JQZXJzaXN0LFxuICAgIGxvYWRpbmdEZWxheTogbG9hZGluZ0RlbGF5LFxuICAgIHBvbGxpbmdJbnRlcnZhbDogcG9sbGluZ0ludGVydmFsLFxuICAgIHBvbGxpbmdXaGVuSGlkZGVuOiBwb2xsaW5nV2hlbkhpZGRlbixcbiAgICAvLyByZWZyZXNoT25XaW5kb3dGb2N1cyBzaG91bGQgbm90IHdvcmsgb24gbWFudWFsIG1vZGVcbiAgICByZWZyZXNoT25XaW5kb3dGb2N1czogIW1hbnVhbCAmJiByZWZyZXNoT25XaW5kb3dGb2N1cyxcbiAgICBmb2N1c1RpbWVzcGFuOiBmb2N1c1RpbWVzcGFuLFxuICAgIGRlYm91bmNlSW50ZXJ2YWw6IGRlYm91bmNlSW50ZXJ2YWwsXG4gICAgdGhyb3R0bGVJbnRlcnZhbDogdGhyb3R0bGVJbnRlcnZhbCxcbiAgICB0aHJvd09uRXJyb3I6IHRocm93T25FcnJvclxuICB9O1xuICB2YXIgc3Vic2NyaWJlID0gdXNlUGVyc2lzdEZuKGZ1bmN0aW9uIChrZXksIGRhdGEpIHtcbiAgICBzZXRGZXRjaGVzKGZ1bmN0aW9uIChzKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHNba2V5XSA9IGRhdGE7XG4gICAgICByZXR1cm4gX19hc3NpZ24oe30sIHMpO1xuICAgIH0pO1xuICB9KTtcblxuICB2YXIgX3EgPSBfX3JlYWQodXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYTsgLy8g5aaC5p6c5pyJIOe8k+WtmO+8jOWImeS7jue8k+WtmOS4reivu+aVsOaNrlxuXG5cbiAgICBpZiAoY2FjaGVLZXkpIHtcbiAgICAgIHZhciBjYWNoZURhdGFfMSA9IChfYSA9IGdldENhY2hlKGNhY2hlS2V5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRhdGE7XG5cbiAgICAgIGlmIChjYWNoZURhdGFfMSkge1xuICAgICAgICBuZXdzdEZldGNoS2V5LmN1cnJlbnQgPSBjYWNoZURhdGFfMS5uZXdzdEZldGNoS2V5O1xuICAgICAgICAvKiDkvb/nlKggaW5pdFN0YXRlLCDph43mlrAgbmV3IEZldGNoICovXG5cbiAgICAgICAgdmFyIG5ld0ZldGNoZXNfMSA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhjYWNoZURhdGFfMS5mZXRjaGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICB2YXIgY2FjaGVGZXRjaCA9IGNhY2hlRGF0YV8xLmZldGNoZXNba2V5XTtcbiAgICAgICAgICB2YXIgbmV3RmV0Y2ggPSBuZXcgRmV0Y2goc2VydmljZVBlcnNpc3QsIGNvbmZpZywgc3Vic2NyaWJlLmJpbmQobnVsbCwga2V5KSwge1xuICAgICAgICAgICAgbG9hZGluZzogY2FjaGVGZXRjaC5sb2FkaW5nLFxuICAgICAgICAgICAgcGFyYW1zOiBjYWNoZUZldGNoLnBhcmFtcyxcbiAgICAgICAgICAgIGRhdGE6IGNhY2hlRmV0Y2guZGF0YSxcbiAgICAgICAgICAgIGVycm9yOiBjYWNoZUZldGNoLmVycm9yXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbmV3RmV0Y2hlc18xW2tleV0gPSBuZXdGZXRjaC5zdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdGZXRjaGVzXzE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9O1xuICB9KSwgMiksXG4gICAgICBmZXRjaGVzID0gX3FbMF0sXG4gICAgICBzZXRGZXRjaGVzID0gX3FbMV07XG5cbiAgdmFyIGZldGNoZXNSZWYgPSB1c2VSZWYoZmV0Y2hlcyk7XG4gIGZldGNoZXNSZWYuY3VycmVudCA9IGZldGNoZXM7XG4gIHZhciByZWFkeU1lbW9yeVBhcmFtcyA9IHVzZVJlZigpO1xuICB2YXIgcnVuID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cblxuICAgIGlmICghcmVhZHkpIHtcbiAgICAgIC8vIOayoeaciSByZWFkeSwg6K6w5b2V6K+35rGC5Y+C5pWw77yM562JIHJlYWR5IOWQju+8jOWPkei1t+ivt+axgueUqFxuICAgICAgcmVhZHlNZW1vcnlQYXJhbXMuY3VycmVudCA9IGFyZ3M7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZldGNoS2V5UGVyc2lzdCkge1xuICAgICAgdmFyIGtleSA9IGZldGNoS2V5UGVyc2lzdC5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgIG5ld3N0RmV0Y2hLZXkuY3VycmVudCA9IGtleSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9LRVkgOiBrZXk7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRGZXRjaEtleSA9IG5ld3N0RmV0Y2hLZXkuY3VycmVudDsgLy8g6L+Z6YeM5b+F6aG755SoIGZldGNoc1JlZu+8jOiAjOS4jeiDveeUqCBmZXRjaGVz44CCXG4gICAgLy8g5ZCm5YiZ5ZyoIHJlc2V0IOWujO+8jOeri+WNsyBydW4g55qE5pe25YCZ77yM6L+Z6YeM5ou/5Yiw55qEIGZldGNoZXMg5piv5pen55qE44CCXG5cbiAgICB2YXIgY3VycmVudEZldGNoID0gZmV0Y2hlc1JlZi5jdXJyZW50W2N1cnJlbnRGZXRjaEtleV07XG5cbiAgICBpZiAoIWN1cnJlbnRGZXRjaCkge1xuICAgICAgdmFyIG5ld0ZldGNoID0gbmV3IEZldGNoKHNlcnZpY2VQZXJzaXN0LCBjb25maWcsIHN1YnNjcmliZS5iaW5kKG51bGwsIGN1cnJlbnRGZXRjaEtleSksIHtcbiAgICAgICAgZGF0YTogaW5pdGlhbERhdGFcbiAgICAgIH0pO1xuICAgICAgY3VycmVudEZldGNoID0gbmV3RmV0Y2guc3RhdGU7XG4gICAgICBzZXRGZXRjaGVzKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBzW2N1cnJlbnRGZXRjaEtleV0gPSBjdXJyZW50RmV0Y2g7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudEZldGNoLnJ1bi5hcHBseShjdXJyZW50RmV0Y2gsIF9fc3ByZWFkKGFyZ3MpKTtcbiAgfSwgW2ZldGNoS2V5LCBzdWJzY3JpYmUsIHJlYWR5XSk7XG4gIHZhciBydW5SZWYgPSB1c2VSZWYocnVuKTtcbiAgcnVuUmVmLmN1cnJlbnQgPSBydW47IC8vIGNhY2hlXG5cbiAgdXNlVXBkYXRlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FjaGVLZXkpIHtcbiAgICAgIHNldENhY2hlKGNhY2hlS2V5LCBjYWNoZVRpbWUsIHtcbiAgICAgICAgZmV0Y2hlczogZmV0Y2hlcyxcbiAgICAgICAgbmV3c3RGZXRjaEtleTogbmV3c3RGZXRjaEtleS5jdXJyZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtjYWNoZUtleSwgZmV0Y2hlc10pOyAvLyBmb3IgcmVhZHlcblxuICB2YXIgaGFzVHJpZ2dlcmVkQnlSZWFkeSA9IHVzZVJlZihmYWxzZSk7XG4gIHVzZVVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlYWR5KSB7XG4gICAgICBpZiAoIWhhc1RyaWdnZXJlZEJ5UmVhZHkuY3VycmVudCAmJiByZWFkeU1lbW9yeVBhcmFtcy5jdXJyZW50KSB7XG4gICAgICAgIHJ1blJlZi5jdXJyZW50LmFwcGx5KHJ1blJlZiwgX19zcHJlYWQocmVhZHlNZW1vcnlQYXJhbXMuY3VycmVudCkpO1xuICAgICAgfVxuXG4gICAgICBoYXNUcmlnZ2VyZWRCeVJlYWR5LmN1cnJlbnQgPSB0cnVlO1xuICAgIH1cbiAgfSwgW3JlYWR5XSk7IC8vIOesrOS4gOasoem7mOiupOaJp+ihjFxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hO1xuXG4gICAgaWYgKCFtYW51YWwpIHtcbiAgICAgIC8vIOWmguaenOaciee8k+WtmO+8jOWImemHjeaWsOivt+axglxuICAgICAgaWYgKE9iamVjdC5rZXlzKGZldGNoZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8g5aaC5p6cIHN0YWxlVGltZSDmmK8gLTHvvIzliJkgY2FjaGUg5rC45LiN6L+H5pyfXG4gICAgICAgIC8vIOWmguaenCBzdGF0bGVUaW1lIOi2heacn+S6hu+8jOWImemHjeaWsOivt+axglxuICAgICAgICB2YXIgY2FjaGVTdGFydFRpbWUgPSBjYWNoZUtleSAmJiAoKF9hID0gZ2V0Q2FjaGUoY2FjaGVLZXkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3RhcnRUaW1lKSB8fCAwO1xuXG4gICAgICAgIGlmICghKHN0YWxlVGltZSA9PT0gLTEgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBjYWNoZVN0YXJ0VGltZSA8PSBzdGFsZVRpbWUpKSB7XG4gICAgICAgICAgLyog6YeN5paw5omn6KGM5omA5pyJ55qEIGNhY2hlICovXG4gICAgICAgICAgT2JqZWN0LnZhbHVlcyhmZXRjaGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICBmLnJlZnJlc2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g56ys5LiA5qyh6buY6K6k5omn6KGM77yM5Y+v5Lul6YCa6L+HIGRlZmF1bHRQYXJhbXMg6K6+572u5Y+C5pWwXG4gICAgICAgIHJ1blJlZi5jdXJyZW50LmFwcGx5KHJ1blJlZiwgX19zcHJlYWQoZGVmYXVsdFBhcmFtcykpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pOyAvLyDph43nva4gZmV0Y2hlc1xuXG4gIHZhciByZXNldCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBPYmplY3QudmFsdWVzKGZldGNoZXNSZWYuY3VycmVudCkuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgZi51bm1vdW50KCk7XG4gICAgfSk7XG4gICAgbmV3c3RGZXRjaEtleS5jdXJyZW50ID0gREVGQVVMVF9LRVk7XG4gICAgc2V0RmV0Y2hlcyh7fSk7IC8vIOS4jeWGmeS8muaciemXrumimOOAguWmguaenOS4jeWGme+8jOatpOaXtueri+WNsyBydW7vvIzkvJrmmK/ogIHnmoTmlbDmja5cblxuICAgIGZldGNoZXNSZWYuY3VycmVudCA9IHt9O1xuICB9LCBbc2V0RmV0Y2hlc10pOyAvLyAgcmVmcmVzaERlcHMg5Y+Y5YyW77yM6YeN5paw5omn6KGM5omA5pyJ6K+35rGCXG5cbiAgdXNlVXBkYXRlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW1hbnVhbCkge1xuICAgICAgLyog5YWo6YOo6YeN5paw5omn6KGMICovXG4gICAgICBPYmplY3QudmFsdWVzKGZldGNoZXNSZWYuY3VycmVudCkuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgICBmLnJlZnJlc2goKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgX19zcHJlYWQocmVmcmVzaERlcHMpKTsgLy8g5Y246L2957uE5Lu26Kem5Y+RXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgT2JqZWN0LnZhbHVlcyhmZXRjaGVzUmVmLmN1cnJlbnQpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgZi51bm1vdW50KCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHZhciBub3RFeGVjdXRlZFdhcm5pbmcgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJZb3Ugc2hvdWxkJ3QgY2FsbCBcIiArIG5hbWUgKyBcIiB3aGVuIHNlcnZpY2Ugbm90IGV4ZWN1dGVkIG9uY2UuXCIpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHtcbiAgICBsb2FkaW5nOiByZWFkeSAmJiAhbWFudWFsIHx8IGRlZmF1bHRMb2FkaW5nLFxuICAgIGRhdGE6IGluaXRpYWxEYXRhLFxuICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgcGFyYW1zOiBbXSxcbiAgICBjYW5jZWw6IG5vdEV4ZWN1dGVkV2FybmluZygnY2FuY2VsJyksXG4gICAgcmVmcmVzaDogbm90RXhlY3V0ZWRXYXJuaW5nKCdyZWZyZXNoJyksXG4gICAgbXV0YXRlOiBub3RFeGVjdXRlZFdhcm5pbmcoJ211dGF0ZScpXG4gIH0sIGZldGNoZXNbbmV3c3RGZXRjaEtleS5jdXJyZW50XSB8fCB7fSksIHtcbiAgICBydW46IHJ1bixcbiAgICBmZXRjaGVzOiBmZXRjaGVzLFxuICAgIHJlc2V0OiByZXNldFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQXN5bmM7IiwidmFyIF9fYXNzaWduID0gdGhpcyAmJiB0aGlzLl9fYXNzaWduIHx8IGZ1bmN0aW9uICgpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbnZhciBfX3NwcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZCB8fCBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuaW1wb3J0IHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VBc3luYyBmcm9tICcuL3VzZUFzeW5jJztcbmltcG9ydCB1c2VVcGRhdGVFZmZlY3QgZnJvbSAnLi91dGlscy91c2VVcGRhdGVFZmZlY3QnO1xuXG5mdW5jdGlvbiB1c2VMb2FkTW9yZShzZXJ2aWNlLCBvcHRpb25zKSB7XG4gIHZhciBfYSA9IG9wdGlvbnMucmVmcmVzaERlcHMsXG4gICAgICByZWZyZXNoRGVwcyA9IF9hID09PSB2b2lkIDAgPyBbXSA6IF9hLFxuICAgICAgcmVmID0gb3B0aW9ucy5yZWYsXG4gICAgICBpc05vTW9yZSA9IG9wdGlvbnMuaXNOb01vcmUsXG4gICAgICBfYiA9IG9wdGlvbnMudGhyZXNob2xkLFxuICAgICAgdGhyZXNob2xkID0gX2IgPT09IHZvaWQgMCA/IDEwMCA6IF9iLFxuICAgICAgZmV0Y2hLZXkgPSBvcHRpb25zLmZldGNoS2V5LFxuICAgICAgcmVzdE9wdGlvbnMgPSBfX3Jlc3Qob3B0aW9ucywgW1wicmVmcmVzaERlcHNcIiwgXCJyZWZcIiwgXCJpc05vTW9yZVwiLCBcInRocmVzaG9sZFwiLCBcImZldGNoS2V5XCJdKTtcblxuICB2YXIgX2MgPSBfX3JlYWQodXNlU3RhdGUoZmFsc2UpLCAyKSxcbiAgICAgIGxvYWRpbmdNb3JlID0gX2NbMF0sXG4gICAgICBzZXRMb2FkaW5nTW9yZSA9IF9jWzFdO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9wdGlvbnMuZmV0Y2hLZXkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcInVzZVJlcXVlc3QgbG9hZE1vcmUgbW9kZSBkb24ndCBuZWVkIGZldGNoS2V5IVwiKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgdmFyIHJlc3VsdCA9IHVzZUFzeW5jKHNlcnZpY2UsIF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXN0T3B0aW9ucyksIHtcbiAgICBmZXRjaEtleTogZnVuY3Rpb24gZmV0Y2hLZXkoZCkge1xuICAgICAgdmFyIF9hO1xuXG4gICAgICByZXR1cm4gKChfYSA9IGQgPT09IG51bGwgfHwgZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZC5saXN0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSB8fCAwO1xuICAgIH0sXG4gICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MoKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW107XG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHBhcmFtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgfVxuXG4gICAgICBzZXRMb2FkaW5nTW9yZShmYWxzZSk7XG5cbiAgICAgIGlmIChvcHRpb25zLm9uU3VjY2Vzcykge1xuICAgICAgICBvcHRpb25zLm9uU3VjY2Vzcy5hcHBseShvcHRpb25zLCBfX3NwcmVhZChwYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKTtcbiAgdmFyIGRhdGEgPSByZXN1bHQuZGF0YSxcbiAgICAgIHJ1biA9IHJlc3VsdC5ydW4sXG4gICAgICBwYXJhbXMgPSByZXN1bHQucGFyYW1zLFxuICAgICAgcmVzZXQgPSByZXN1bHQucmVzZXQsXG4gICAgICBsb2FkaW5nID0gcmVzdWx0LmxvYWRpbmcsXG4gICAgICBmZXRjaGVzID0gcmVzdWx0LmZldGNoZXM7XG4gIHZhciByZWxvYWQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmVzZXQoKTtcblxuICAgIHZhciBfYSA9IF9fcmVhZChwYXJhbXMpLFxuICAgICAgICByZXN0UGFyYW1zID0gX2Euc2xpY2UoMSk7XG5cbiAgICBydW4uYXBwbHkodm9pZCAwLCBfX3NwcmVhZChbdW5kZWZpbmVkXSwgcmVzdFBhcmFtcykpO1xuICB9LCBbcnVuLCByZXNldCwgcGFyYW1zXSk7XG4gIHZhciByZWxvYWRSZWYgPSB1c2VSZWYocmVsb2FkKTtcbiAgcmVsb2FkUmVmLmN1cnJlbnQgPSByZWxvYWQ7XG4gIC8qIGxvYWRNb3JlIOWcuuaZr+S4i++8jOWmguaenCByZWZyZXNoRGVwcyDlj5jljJbvvIzph43nva7liLDnrKzkuIDpobUgKi9cblxuICB1c2VVcGRhdGVFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8qIOWPquacieiHquWKqOaJp+ihjOeahOWcuuaZr++8jCByZWZyZXNoRGVwcyDmiY3mnInmlYggKi9cbiAgICBpZiAoIW9wdGlvbnMubWFudWFsKSB7XG4gICAgICByZWxvYWRSZWYuY3VycmVudCgpO1xuICAgIH1cbiAgfSwgX19zcHJlYWQocmVmcmVzaERlcHMpKTtcbiAgdmFyIGRhdGFHcm91cCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaXN0R3JvdXAgPSBbXTsgLy8g5ZyoIGxvYWRNb3JlIOaXtu+8jOS4jeW4jOacm+a4heepuuS4iuS4gOasoeeahCBkYXRh44CC6ZyA6KaB5oqK5pyA5ZCO5LiA5LiqIOmdniBsb2FkaW5nIOeahOivt+axgiBkYXRh77yM5pS+5Zue5Y6744CCXG5cbiAgICB2YXIgbGFzdE5vTG9hZGluZ0RhdGEgPSBkYXRhO1xuICAgIE9iamVjdC52YWx1ZXMoZmV0Y2hlcykuZm9yRWFjaChmdW5jdGlvbiAoaCkge1xuICAgICAgdmFyIF9hLCBfYjtcblxuICAgICAgaWYgKChfYSA9IGguZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxpc3QpIHtcbiAgICAgICAgbGlzdEdyb3VwID0gbGlzdEdyb3VwLmNvbmNhdCgoX2IgPSBoLmRhdGEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5saXN0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoLmxvYWRpbmcpIHtcbiAgICAgICAgbGFzdE5vTG9hZGluZ0RhdGEgPSBoLmRhdGE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBsYXN0Tm9Mb2FkaW5nRGF0YSksIHtcbiAgICAgIGxpc3Q6IGxpc3RHcm91cFxuICAgIH0pO1xuICB9LCBbZmV0Y2hlcywgZGF0YV0pO1xuICB2YXIgbm9Nb3JlID0gaXNOb01vcmUgPyAhbG9hZGluZyAmJiAhbG9hZGluZ01vcmUgJiYgaXNOb01vcmUoZGF0YUdyb3VwKSA6IGZhbHNlO1xuICB2YXIgbG9hZE1vcmUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5vTW9yZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldExvYWRpbmdNb3JlKHRydWUpO1xuXG4gICAgdmFyIF9hID0gX19yZWFkKHBhcmFtcyksXG4gICAgICAgIHJlc3RQYXJhbXMgPSBfYS5zbGljZSgxKTtcblxuICAgIHJ1bi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKFtkYXRhR3JvdXBdLCByZXN0UGFyYW1zKSk7XG4gIH0sIFtub01vcmUsIHJ1biwgZGF0YUdyb3VwLCBwYXJhbXNdKTtcbiAgLyog5LiK5ouJ5Yqg6L2955qE5pa55rOVICovXG5cbiAgdmFyIHNjcm9sbE1ldGhvZCA9IGZ1bmN0aW9uIHNjcm9sbE1ldGhvZCgpIHtcbiAgICBpZiAobG9hZGluZyB8fCBsb2FkaW5nTW9yZSB8fCAhcmVmIHx8ICFyZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZWYuY3VycmVudC5zY3JvbGxIZWlnaHQgLSByZWYuY3VycmVudC5zY3JvbGxUb3AgPD0gcmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICsgdGhyZXNob2xkKSB7XG4gICAgICBsb2FkTW9yZSgpO1xuICAgIH1cbiAgfTsgLy8g5aaC5p6c5LiN55SoIHJlZu+8jOiAjOeUqOS5i+WJjeeahCB1c2VDYWxsYmFr77yM5Zyo5p+Q5Lqb5oOF5Ya15LiL5Lya5Ye66Zeu6aKY77yM6YCg5oiQ5ou/5Yiw55qEIGxvYWRpbmcg5LiN5piv5pyA5paw55qE44CCXG4gIC8vIGZpeCBodHRwczovL2dpdGh1Yi5jb20vYWxpYmFiYS9ob29rcy9pc3N1ZXMvNjMwXG5cblxuICB2YXIgc2Nyb2xsTWV0aG9kUmVmID0gdXNlUmVmKHNjcm9sbE1ldGhvZCk7XG4gIHNjcm9sbE1ldGhvZFJlZi5jdXJyZW50ID0gc2Nyb2xsTWV0aG9kO1xuICAvKiDlpoLmnpzmnIkgcmVm77yM5YiZ5Lya5LiK5ouJ5Yqg6L295pu05aSaICovXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXJlZiB8fCAhcmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsVHJpZ2dlciA9IGZ1bmN0aW9uIHNjcm9sbFRyaWdnZXIoKSB7XG4gICAgICByZXR1cm4gc2Nyb2xsTWV0aG9kUmVmLmN1cnJlbnQoKTtcbiAgICB9O1xuXG4gICAgcmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChyZWYgJiYgcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVHJpZ2dlcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3Njcm9sbE1ldGhvZFJlZl0pO1xuICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3VsdCksIHtcbiAgICBkYXRhOiBkYXRhR3JvdXAsXG4gICAgcmVsb2FkOiByZWxvYWQsXG4gICAgbG9hZGluZzogbG9hZGluZyAmJiBkYXRhR3JvdXAubGlzdC5sZW5ndGggPT09IDAsXG4gICAgbG9hZE1vcmU6IGxvYWRNb3JlLFxuICAgIGxvYWRpbmdNb3JlOiBsb2FkaW5nTW9yZSxcbiAgICBub01vcmU6IG5vTW9yZVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9hZE1vcmU7IiwidmFyIF9fYXNzaWduID0gdGhpcyAmJiB0aGlzLl9fYXNzaWduIHx8IGZ1bmN0aW9uICgpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbnZhciBfX3NwcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZCB8fCBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUFzeW5jIGZyb20gJy4vdXNlQXN5bmMnO1xuaW1wb3J0IHVzZVVwZGF0ZUVmZmVjdCBmcm9tICcuL3V0aWxzL3VzZVVwZGF0ZUVmZmVjdCc7XG5cbmZ1bmN0aW9uIHVzZVBhZ2luYXRlZChzZXJ2aWNlLCBvcHRpb25zKSB7XG4gIHZhciBwYWdpbmF0ZWQgPSBvcHRpb25zLnBhZ2luYXRlZCxcbiAgICAgIF9hID0gb3B0aW9ucy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBkZWZhdWx0UGFnZVNpemUgPSBfYSA9PT0gdm9pZCAwID8gMTAgOiBfYSxcbiAgICAgIF9iID0gb3B0aW9ucy5yZWZyZXNoRGVwcyxcbiAgICAgIHJlZnJlc2hEZXBzID0gX2IgPT09IHZvaWQgMCA/IFtdIDogX2IsXG4gICAgICBmZXRjaEtleSA9IG9wdGlvbnMuZmV0Y2hLZXksXG4gICAgICByZXN0T3B0aW9ucyA9IF9fcmVzdChvcHRpb25zLCBbXCJwYWdpbmF0ZWRcIiwgXCJkZWZhdWx0UGFnZVNpemVcIiwgXCJyZWZyZXNoRGVwc1wiLCBcImZldGNoS2V5XCJdKTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChmZXRjaEtleSkge1xuICAgICAgY29uc29sZS5lcnJvcihcInVzZVJlcXVlc3QgcGFnaW5hdGlvbidzIGZldGNoS2V5IHdpbGwgbm90IHdvcmshXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHZhciBfYyA9IHVzZUFzeW5jKHNlcnZpY2UsIF9fYXNzaWduKHtcbiAgICBkZWZhdWx0UGFyYW1zOiBbe1xuICAgICAgY3VycmVudDogMSxcbiAgICAgIHBhZ2VTaXplOiBkZWZhdWx0UGFnZVNpemVcbiAgICB9XVxuICB9LCByZXN0T3B0aW9ucykpLFxuICAgICAgZGF0YSA9IF9jLmRhdGEsXG4gICAgICBwYXJhbXMgPSBfYy5wYXJhbXMsXG4gICAgICBydW4gPSBfYy5ydW4sXG4gICAgICBsb2FkaW5nID0gX2MubG9hZGluZyxcbiAgICAgIHJlc3QgPSBfX3Jlc3QoX2MsIFtcImRhdGFcIiwgXCJwYXJhbXNcIiwgXCJydW5cIiwgXCJsb2FkaW5nXCJdKTtcblxuICB2YXIgX2QgPSBwYXJhbXMgJiYgcGFyYW1zWzBdID8gcGFyYW1zWzBdIDoge30sXG4gICAgICBfZSA9IF9kLmN1cnJlbnQsXG4gICAgICBjdXJyZW50ID0gX2UgPT09IHZvaWQgMCA/IDEgOiBfZSxcbiAgICAgIF9mID0gX2QucGFnZVNpemUsXG4gICAgICBwYWdlU2l6ZSA9IF9mID09PSB2b2lkIDAgPyBkZWZhdWx0UGFnZVNpemUgOiBfZixcbiAgICAgIF9nID0gX2Quc29ydGVyLFxuICAgICAgc29ydGVyID0gX2cgPT09IHZvaWQgMCA/IHt9IDogX2csXG4gICAgICBfaCA9IF9kLmZpbHRlcnMsXG4gICAgICBmaWx0ZXJzID0gX2ggPT09IHZvaWQgMCA/IHt9IDogX2g7IC8vIOWPquaUueWPmCBwYWdpbmF0aW9u77yM5YW25LuW5Y+C5pWw5Y6f5qC35Lyg6YCSXG5cblxuICB2YXIgcnVuQ2hhbmdlUGFnaW5hdGlvbiA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwYWdpbmF0aW9uUGFyYW1zKSB7XG4gICAgdmFyIF9hID0gX19yZWFkKHBhcmFtcyksXG4gICAgICAgIG9sZFBhZ2luYXRpb25QYXJhbXMgPSBfYVswXSxcbiAgICAgICAgcmVzdFBhcmFtcyA9IF9hLnNsaWNlKDEpO1xuXG4gICAgcnVuLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoW19fYXNzaWduKF9fYXNzaWduKHt9LCBvbGRQYWdpbmF0aW9uUGFyYW1zKSwgcGFnaW5hdGlvblBhcmFtcyldLCByZXN0UGFyYW1zKSk7XG4gIH0sIFtydW4sIHBhcmFtc10pO1xuICB2YXIgdG90YWwgPSAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLnRvdGFsKSB8fCAwO1xuICB2YXIgdG90YWxQYWdlID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0b3RhbCAvIHBhZ2VTaXplKTtcbiAgfSwgW3BhZ2VTaXplLCB0b3RhbF0pO1xuICB2YXIgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoYywgcCkge1xuICAgIHZhciB0b0N1cnJlbnQgPSBjIDw9IDAgPyAxIDogYztcbiAgICB2YXIgdG9QYWdlU2l6ZSA9IHAgPD0gMCA/IDEgOiBwO1xuICAgIHZhciB0ZW1wVG90YWxQYWdlID0gTWF0aC5jZWlsKHRvdGFsIC8gdG9QYWdlU2l6ZSk7XG5cbiAgICBpZiAodG9DdXJyZW50ID4gdGVtcFRvdGFsUGFnZSkge1xuICAgICAgdG9DdXJyZW50ID0gdGVtcFRvdGFsUGFnZTtcbiAgICB9XG5cbiAgICBydW5DaGFuZ2VQYWdpbmF0aW9uKHtcbiAgICAgIGN1cnJlbnQ6IGMsXG4gICAgICBwYWdlU2l6ZTogcFxuICAgIH0pO1xuICB9LCBbdG90YWwsIHJ1bkNoYW5nZVBhZ2luYXRpb25dKTtcbiAgdmFyIGNoYW5nZUN1cnJlbnQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoYykge1xuICAgIG9uQ2hhbmdlKGMsIHBhZ2VTaXplKTtcbiAgfSwgW29uQ2hhbmdlLCBwYWdlU2l6ZV0pO1xuICB2YXIgY2hhbmdlUGFnZVNpemUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocCkge1xuICAgIG9uQ2hhbmdlKGN1cnJlbnQsIHApO1xuICB9LCBbb25DaGFuZ2UsIGN1cnJlbnRdKTtcbiAgdmFyIGNoYW5nZUN1cnJlbnRSZWYgPSB1c2VSZWYoY2hhbmdlQ3VycmVudCk7XG4gIGNoYW5nZUN1cnJlbnRSZWYuY3VycmVudCA9IGNoYW5nZUN1cnJlbnQ7XG4gIC8qIOWIhumhteWcuuaZr+S4i++8jOWmguaenCByZWZyZXNoRGVwcyDlj5jljJbvvIzph43nva7liIbpobUgKi9cblxuICB1c2VVcGRhdGVFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIC8qIOWPquacieiHquWKqOaJp+ihjOeahOWcuuaZr++8jCByZWZyZXNoRGVwcyDmiY3mnInmlYggKi9cbiAgICBpZiAoIW9wdGlvbnMubWFudWFsKSB7XG4gICAgICBjaGFuZ2VDdXJyZW50UmVmLmN1cnJlbnQoMSk7XG4gICAgfVxuICB9LCBfX3NwcmVhZChyZWZyZXNoRGVwcykpOyAvLyDooajmoLznv7vpobUg5o6S5bqPIOetm+mAieetiVxuXG4gIHZhciBjaGFuZ2VUYWJsZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwLCBmLCBzKSB7XG4gICAgcnVuQ2hhbmdlUGFnaW5hdGlvbih7XG4gICAgICBjdXJyZW50OiBwLmN1cnJlbnQsXG4gICAgICBwYWdlU2l6ZTogcC5wYWdlU2l6ZSB8fCBkZWZhdWx0UGFnZVNpemUsXG4gICAgICBmaWx0ZXJzOiBmLFxuICAgICAgc29ydGVyOiBzXG4gICAgfSk7XG4gIH0sIFtmaWx0ZXJzLCBzb3J0ZXIsIHJ1bkNoYW5nZVBhZ2luYXRpb25dKTtcbiAgcmV0dXJuIF9fYXNzaWduKHtcbiAgICBsb2FkaW5nOiBsb2FkaW5nLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgcnVuOiBydW4sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgY3VycmVudDogY3VycmVudCxcbiAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgIHRvdGFsOiB0b3RhbCxcbiAgICAgIHRvdGFsUGFnZTogdG90YWxQYWdlLFxuICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgICAgY2hhbmdlQ3VycmVudDogY2hhbmdlQ3VycmVudCxcbiAgICAgIGNoYW5nZVBhZ2VTaXplOiBjaGFuZ2VQYWdlU2l6ZVxuICAgIH0sXG4gICAgdGFibGVQcm9wczoge1xuICAgICAgZGF0YVNvdXJjZTogKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5saXN0KSB8fCBbXSxcbiAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICBvbkNoYW5nZTogY2hhbmdlVGFibGUsXG4gICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGN1cnJlbnQ6IGN1cnJlbnQsXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcbiAgICAgICAgdG90YWw6IHRvdGFsXG4gICAgICB9XG4gICAgfSxcbiAgICBzb3J0ZXI6IHNvcnRlcixcbiAgICBmaWx0ZXJzOiBmaWx0ZXJzXG4gIH0sIHJlc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VQYWdpbmF0ZWQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBDb25maWdDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xuQ29uZmlnQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdVc2VSZXF1ZXN0Q29uZmlnQ29udGV4dCc7XG5leHBvcnQgZGVmYXVsdCBDb25maWdDb250ZXh0OyIsInZhciBfX2Fzc2lnbiA9IHRoaXMgJiYgdGhpcy5fX2Fzc2lnbiB8fCBmdW5jdGlvbiAoKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0O1xuICB9O1xuXG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG52YXIgX19zcHJlYWQgPSB0aGlzICYmIHRoaXMuX19zcHJlYWQgfHwgZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xuXG5cbmltcG9ydCB7IHVzZVJlZiwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VBc3luYyBmcm9tICcuL3VzZUFzeW5jJztcbmltcG9ydCB1c2VMb2FkTW9yZSBmcm9tICcuL3VzZUxvYWRNb3JlJztcbmltcG9ydCB1c2VQYWdpbmF0ZWQgZnJvbSAnLi91c2VQYWdpbmF0ZWQnO1xuaW1wb3J0IENvbmZpZ0NvbnRleHQgZnJvbSAnLi9jb25maWdDb250ZXh0JztcblxuZnVuY3Rpb24gdXNlUmVxdWVzdChzZXJ2aWNlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgY29udGV4dENvbmZpZyA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG5cbiAgdmFyIGZpbmFsT3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb250ZXh0Q29uZmlnKSwgb3B0aW9ucyk7XG5cbiAgdmFyIHBhZ2luYXRlZCA9IGZpbmFsT3B0aW9ucy5wYWdpbmF0ZWQsXG4gICAgICBsb2FkTW9yZSA9IGZpbmFsT3B0aW9ucy5sb2FkTW9yZSxcbiAgICAgIHJlcXVlc3RNZXRob2QgPSBmaW5hbE9wdGlvbnMucmVxdWVzdE1ldGhvZDtcbiAgdmFyIHBhZ2luYXRlZFJlZiA9IHVzZVJlZihwYWdpbmF0ZWQpO1xuICB2YXIgbG9hZE1vcmVSZWYgPSB1c2VSZWYobG9hZE1vcmUpO1xuXG4gIGlmIChwYWdpbmF0ZWRSZWYuY3VycmVudCAhPT0gcGFnaW5hdGVkKSB7XG4gICAgdGhyb3cgRXJyb3IoJ1lvdSBzaG91bGQgbm90IG1vZGlmeSB0aGUgcGFnaW5hdGVkIG9mIG9wdGlvbnMnKTtcbiAgfVxuXG4gIGlmIChsb2FkTW9yZVJlZi5jdXJyZW50ICE9PSBsb2FkTW9yZSkge1xuICAgIHRocm93IEVycm9yKCdZb3Ugc2hvdWxkIG5vdCBtb2RpZnkgdGhlIGxvYWRNb3JlIG9mIG9wdGlvbnMnKTtcbiAgfVxuXG4gIHBhZ2luYXRlZFJlZi5jdXJyZW50ID0gcGFnaW5hdGVkO1xuICBsb2FkTW9yZVJlZi5jdXJyZW50ID0gbG9hZE1vcmU7IC8vIEB0cy1pZ25vcmVcblxuICB2YXIgZmV0Y2hQcm94eSA9IGZ1bmN0aW9uIGZldGNoUHJveHkoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfSAvLyBAdHMtaWdub3JlXG5cblxuICAgIHJldHVybiBmZXRjaC5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKGFyZ3MpKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGZpbmFsUmVxdWVzdE1ldGhvZCA9IHJlcXVlc3RNZXRob2QgfHwgZmV0Y2hQcm94eTtcbiAgdmFyIHByb21pc2VTZXJ2aWNlO1xuXG4gIHN3aXRjaCAodHlwZW9mIHNlcnZpY2UpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcHJvbWlzZVNlcnZpY2UgPSBmdW5jdGlvbiBwcm9taXNlU2VydmljZSgpIHtcbiAgICAgICAgcmV0dXJuIGZpbmFsUmVxdWVzdE1ldGhvZChzZXJ2aWNlKTtcbiAgICAgIH07XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHZhciB1cmxfMSA9IHNlcnZpY2UudXJsLFxuICAgICAgICAgIHJlc3RfMSA9IF9fcmVzdChzZXJ2aWNlLCBbXCJ1cmxcIl0pO1xuXG4gICAgICBwcm9taXNlU2VydmljZSA9IGZ1bmN0aW9uIHByb21pc2VTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdE1ldGhvZCA/IHJlcXVlc3RNZXRob2Qoc2VydmljZSkgOiBmZXRjaFByb3h5KHVybF8xLCByZXN0XzEpO1xuICAgICAgfTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcHJvbWlzZVNlcnZpY2UgPSBmdW5jdGlvbiBwcm9taXNlU2VydmljZSgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgdmFyIHMgPSBzZXJ2aWNlLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoYXJncykpO1xuICAgICAgICAgIHZhciBmbiA9IHM7XG5cbiAgICAgICAgICBpZiAoIXMudGhlbikge1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlb2Ygcykge1xuICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIGZuID0gZmluYWxSZXF1ZXN0TWV0aG9kKHMpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgdmFyIHVybF8yID0gcy51cmwsXG4gICAgICAgICAgICAgICAgICAgIHJlc3RfMiA9IF9fcmVzdChzLCBbXCJ1cmxcIl0pO1xuXG4gICAgICAgICAgICAgICAgZm4gPSByZXF1ZXN0TWV0aG9kID8gcmVxdWVzdE1ldGhvZChzKSA6IGZldGNoUHJveHkodXJsXzIsIHJlc3RfMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm4udGhlbihyZXNvbHZlKVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICB9XG5cbiAgaWYgKGxvYWRNb3JlKSB7XG4gICAgcmV0dXJuIHVzZUxvYWRNb3JlKHByb21pc2VTZXJ2aWNlLCBmaW5hbE9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKHBhZ2luYXRlZCkge1xuICAgIHJldHVybiB1c2VQYWdpbmF0ZWQocHJvbWlzZVNlcnZpY2UsIGZpbmFsT3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gdXNlQXN5bmMocHJvbWlzZVNlcnZpY2UsIGZpbmFsT3B0aW9ucyk7XG59XG5cbnZhciBVc2VSZXF1ZXN0UHJvdmlkZXIgPSBDb25maWdDb250ZXh0LlByb3ZpZGVyOyAvLyBVc2VBUElQcm92aWRlciDlt7Lnu4/lup/lvIPvvIzmraTlpITkuLrkuoblhbzlrrkgdW1panMg5o+S5Lu2IHBsdWdpbi1yZXF1ZXN0XG5cbnZhciBVc2VBUElQcm92aWRlciA9IFVzZVJlcXVlc3RQcm92aWRlcjtcbmV4cG9ydCB7IHVzZUFzeW5jLCB1c2VQYWdpbmF0ZWQsIHVzZUxvYWRNb3JlLCBVc2VSZXF1ZXN0UHJvdmlkZXIsIFVzZUFQSVByb3ZpZGVyIH07XG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0OyIsImV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXRFbGVtZW50KHRhcmdldCwgZGVmYXVsdEVsZW1lbnQpIHtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm4gZGVmYXVsdEVsZW1lbnQ7XG4gIH1cblxuICB2YXIgdGFyZ2V0RWxlbWVudDtcblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXQoKTtcbiAgfSBlbHNlIGlmICgnY3VycmVudCcgaW4gdGFyZ2V0KSB7XG4gICAgdGFyZ2V0RWxlbWVudCA9IHRhcmdldC5jdXJyZW50O1xuICB9IGVsc2Uge1xuICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXQ7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0RWxlbWVudDtcbn0iLCJ2YXIgX19yZWFkID0gdGhpcyAmJiB0aGlzLl9fcmVhZCB8fCBmdW5jdGlvbiAobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLFxuICAgICAgcixcbiAgICAgIGFyID0gW10sXG4gICAgICBlO1xuXG4gIHRyeSB7XG4gICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZVRvZ2dsZShkZWZhdWx0VmFsdWUsIHJldmVyc2VWYWx1ZSkge1xuICBpZiAoZGVmYXVsdFZhbHVlID09PSB2b2lkIDApIHtcbiAgICBkZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBfYSA9IF9fcmVhZCh1c2VTdGF0ZShkZWZhdWx0VmFsdWUpLCAyKSxcbiAgICAgIHN0YXRlID0gX2FbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF9hWzFdO1xuXG4gIHZhciBhY3Rpb25zID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJldmVyc2VWYWx1ZU9yaWdpbiA9IHJldmVyc2VWYWx1ZSA9PT0gdW5kZWZpbmVkID8gIWRlZmF1bHRWYWx1ZSA6IHJldmVyc2VWYWx1ZTsgLy8g5YiH5o2i6L+U5Zue5YC8XG5cbiAgICB2YXIgdG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKHZhbHVlKSB7XG4gICAgICAvLyDlvLrliLbov5Tlm57nirbmgIHlgLzvvIzpgILnlKjkuo7ngrnlh7vmk43kvZxcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNldFN0YXRlKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRTdGF0ZShmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gcyA9PT0gZGVmYXVsdFZhbHVlID8gcmV2ZXJzZVZhbHVlT3JpZ2luIDogZGVmYXVsdFZhbHVlO1xuICAgICAgfSk7XG4gICAgfTsgLy8g6K6+572u6buY6K6k5YC8XG5cblxuICAgIHZhciBzZXRMZWZ0ID0gZnVuY3Rpb24gc2V0TGVmdCgpIHtcbiAgICAgIHJldHVybiBzZXRTdGF0ZShkZWZhdWx0VmFsdWUpO1xuICAgIH07IC8vIOiuvue9ruWPluWPjeWAvFxuXG5cbiAgICB2YXIgc2V0UmlnaHQgPSBmdW5jdGlvbiBzZXRSaWdodCgpIHtcbiAgICAgIHJldHVybiBzZXRTdGF0ZShyZXZlcnNlVmFsdWVPcmlnaW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9nZ2xlOiB0b2dnbGUsXG4gICAgICBzZXRMZWZ0OiBzZXRMZWZ0LFxuICAgICAgc2V0UmlnaHQ6IHNldFJpZ2h0XG4gICAgfTtcbiAgfSwgW2RlZmF1bHRWYWx1ZSwgcmV2ZXJzZVZhbHVlXSk7XG4gIHJldHVybiBbc3RhdGUsIGFjdGlvbnNdO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUb2dnbGU7IiwidmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVG9nZ2xlIGZyb20gJy4uL3VzZVRvZ2dsZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VCb29sZWFuKGRlZmF1bHRWYWx1ZSkge1xuICBpZiAoZGVmYXVsdFZhbHVlID09PSB2b2lkIDApIHtcbiAgICBkZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBfYSA9IF9fcmVhZCh1c2VUb2dnbGUoZGVmYXVsdFZhbHVlKSwgMiksXG4gICAgICBzdGF0ZSA9IF9hWzBdLFxuICAgICAgdG9nZ2xlID0gX2FbMV0udG9nZ2xlO1xuXG4gIHZhciBhY3Rpb25zID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNldFRydWUgPSBmdW5jdGlvbiBzZXRUcnVlKCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZSh0cnVlKTtcbiAgICB9O1xuXG4gICAgdmFyIHNldEZhbHNlID0gZnVuY3Rpb24gc2V0RmFsc2UoKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvZ2dsZTogdG9nZ2xlLFxuICAgICAgc2V0VHJ1ZTogc2V0VHJ1ZSxcbiAgICAgIHNldEZhbHNlOiBzZXRGYWxzZVxuICAgIH07XG4gIH0sIFt0b2dnbGVdKTtcbiAgcmV0dXJuIFtzdGF0ZSwgYWN0aW9uc107XG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRUYXJnZXRFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvZG9tJztcblxuZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBoYW5kbGVyUmVmID0gdXNlUmVmKCk7XG4gIGhhbmRsZXJSZWYuY3VycmVudCA9IGhhbmRsZXI7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRhcmdldEVsZW1lbnQgPSBnZXRUYXJnZXRFbGVtZW50KG9wdGlvbnMudGFyZ2V0LCB3aW5kb3cpO1xuXG4gICAgaWYgKCF0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyUmVmLmN1cnJlbnQgJiYgaGFuZGxlclJlZi5jdXJyZW50KGV2ZW50KTtcbiAgICB9O1xuXG4gICAgdGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwge1xuICAgICAgY2FwdHVyZTogb3B0aW9ucy5jYXB0dXJlLFxuICAgICAgb25jZTogb3B0aW9ucy5vbmNlLFxuICAgICAgcGFzc2l2ZTogb3B0aW9ucy5wYXNzaXZlXG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRhcmdldEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIHtcbiAgICAgICAgY2FwdHVyZTogb3B0aW9ucy5jYXB0dXJlXG4gICAgICB9KTtcbiAgICB9O1xuICB9LCBbZXZlbnROYW1lLCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5jYXB0dXJlLCBvcHRpb25zLm9uY2UsIG9wdGlvbnMucGFzc2l2ZV0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VFdmVudExpc3RlbmVyOyIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNyZWF0aW9uKGZhY3RvcnksIGRlcHMpIHtcbiAgdmFyIGN1cnJlbnQgPSB1c2VSZWYoe1xuICAgIGRlcHM6IGRlcHMsXG4gICAgb2JqOiB1bmRlZmluZWQsXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlXG4gIH0pLmN1cnJlbnQ7XG5cbiAgaWYgKGN1cnJlbnQuaW5pdGlhbGl6ZWQgPT09IGZhbHNlIHx8ICFkZXBzQXJlU2FtZShjdXJyZW50LmRlcHMsIGRlcHMpKSB7XG4gICAgY3VycmVudC5kZXBzID0gZGVwcztcbiAgICBjdXJyZW50Lm9iaiA9IGZhY3RvcnkoKTtcbiAgICBjdXJyZW50LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50Lm9iajtcbn1cblxuZnVuY3Rpb24gZGVwc0FyZVNhbWUob2xkRGVwcywgZGVwcykge1xuICBpZiAob2xkRGVwcyA9PT0gZGVwcykgcmV0dXJuIHRydWU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbGREZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9sZERlcHNbaV0gIT09IGRlcHNbaV0pIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSIsInZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG5pbXBvcnQgdXNlQm9vbGVhbiBmcm9tICcuLi91c2VCb29sZWFuJztcbmltcG9ydCB1c2VFdmVudExpc3RlbmVyIGZyb20gJy4uL3VzZUV2ZW50TGlzdGVuZXInO1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgdmFyIF9hID0gb3B0aW9ucyB8fCB7fSxcbiAgICAgIG9uRW50ZXIgPSBfYS5vbkVudGVyLFxuICAgICAgb25MZWF2ZSA9IF9hLm9uTGVhdmU7XG5cbiAgdmFyIF9iID0gX19yZWFkKHVzZUJvb2xlYW4oZmFsc2UpLCAyKSxcbiAgICAgIHN0YXRlID0gX2JbMF0sXG4gICAgICBfYyA9IF9iWzFdLFxuICAgICAgc2V0VHJ1ZSA9IF9jLnNldFRydWUsXG4gICAgICBzZXRGYWxzZSA9IF9jLnNldEZhbHNlO1xuXG4gIHVzZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgb25FbnRlciAmJiBvbkVudGVyKCk7XG4gICAgc2V0VHJ1ZSgpO1xuICB9LCB7XG4gICAgdGFyZ2V0OiB0YXJnZXRcbiAgfSk7XG4gIHVzZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgb25MZWF2ZSAmJiBvbkxlYXZlKCk7XG4gICAgc2V0RmFsc2UoKTtcbiAgfSwge1xuICAgIHRhcmdldDogdGFyZ2V0XG4gIH0pO1xuICByZXR1cm4gc3RhdGU7XG59KTsiLCJ2YXIgX19yZWFkID0gdGhpcyAmJiB0aGlzLl9fcmVhZCB8fCBmdW5jdGlvbiAobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLFxuICAgICAgcixcbiAgICAgIGFyID0gW10sXG4gICAgICBlO1xuXG4gIHRyeSB7XG4gICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxudmFyIF9fc3ByZWFkID0gdGhpcyAmJiB0aGlzLl9fc3ByZWFkIHx8IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG5pbXBvcnQgdXNlUmVxdWVzdCwgeyBVc2VSZXF1ZXN0UHJvdmlkZXIgfSBmcm9tICdAYWhvb2tzanMvdXNlLXJlcXVlc3QnO1xuaW1wb3J0IHVzZUNvbnRyb2xsYWJsZVZhbHVlIGZyb20gJy4vdXNlQ29udHJvbGxhYmxlVmFsdWUnO1xuaW1wb3J0IHVzZUR5bmFtaWNMaXN0IGZyb20gJy4vdXNlRHluYW1pY0xpc3QnO1xuaW1wb3J0IHVzZUV2ZW50RW1pdHRlciBmcm9tICcuL3VzZUV2ZW50RW1pdHRlcic7XG5pbXBvcnQgdXNlVmlydHVhbExpc3QgZnJvbSAnLi91c2VWaXJ0dWFsTGlzdCc7XG5pbXBvcnQgeyBjb25maWdSZXNwb25zaXZlLCB1c2VSZXNwb25zaXZlIH0gZnJvbSAnLi91c2VSZXNwb25zaXZlJztcbmltcG9ydCB1c2VTaXplIGZyb20gJy4vdXNlU2l6ZSc7XG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlU3RhdGUgZnJvbSAnLi91c2VMb2NhbFN0b3JhZ2VTdGF0ZSc7XG5pbXBvcnQgdXNlU2Vzc2lvblN0b3JhZ2VTdGF0ZSBmcm9tICcuL3VzZVNlc3Npb25TdG9yYWdlU3RhdGUnO1xuaW1wb3J0IHVzZVVwZGF0ZUVmZmVjdCBmcm9tICcuL3VzZVVwZGF0ZUVmZmVjdCc7XG5pbXBvcnQgdXNlVXBkYXRlTGF5b3V0RWZmZWN0IGZyb20gJy4vdXNlVXBkYXRlTGF5b3V0RWZmZWN0JztcbmltcG9ydCB1c2VCb29sZWFuIGZyb20gJy4vdXNlQm9vbGVhbic7XG5pbXBvcnQgdXNlVG9nZ2xlIGZyb20gJy4vdXNlVG9nZ2xlJztcbmltcG9ydCB1c2VEb2N1bWVudFZpc2liaWxpdHkgZnJvbSAnLi91c2VEb2N1bWVudFZpc2liaWxpdHknO1xuaW1wb3J0IHVzZVNlbGVjdGlvbnMgZnJvbSAnLi91c2VTZWxlY3Rpb25zJztcbmltcG9ydCB1c2VUaHJvdHRsZSBmcm9tICcuL3VzZVRocm90dGxlJztcbmltcG9ydCB1c2VUaHJvdHRsZUZuIGZyb20gJy4vdXNlVGhyb3R0bGVGbic7XG5pbXBvcnQgdXNlVGhyb3R0bGVFZmZlY3QgZnJvbSAnLi91c2VUaHJvdHRsZUVmZmVjdCc7XG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSAnLi91c2VEZWJvdW5jZSc7XG5pbXBvcnQgdXNlRGVib3VuY2VGbiBmcm9tICcuL3VzZURlYm91bmNlRm4nO1xuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJy4vdXNlUHJldmlvdXMnO1xuaW1wb3J0IHVzZU1vdXNlIGZyb20gJy4vdXNlTW91c2UnO1xuaW1wb3J0IHVzZVNjcm9sbCBmcm9tICcuL3VzZVNjcm9sbCc7XG5pbXBvcnQgdXNlQ2xpY2tBd2F5IGZyb20gJy4vdXNlQ2xpY2tBd2F5JztcbmltcG9ydCB1c2VGdWxsc2NyZWVuIGZyb20gJy4vdXNlRnVsbHNjcmVlbic7XG5pbXBvcnQgdXNlSW5WaWV3cG9ydCBmcm9tICcuL3VzZUluVmlld3BvcnQnO1xuaW1wb3J0IHVzZUtleVByZXNzIGZyb20gJy4vdXNlS2V5UHJlc3MnO1xuaW1wb3J0IHVzZUV2ZW50TGlzdGVuZXIgZnJvbSAnLi91c2VFdmVudExpc3RlbmVyJztcbmltcG9ydCB1c2VIb3ZlciBmcm9tICcuL3VzZUhvdmVyJztcbmltcG9ydCB1c2VVbm1vdW50IGZyb20gJy4vdXNlVW5tb3VudCc7XG5pbXBvcnQgdXNlQW50ZFRhYmxlIGZyb20gJy4vdXNlQW50ZFRhYmxlJztcbmltcG9ydCB1c2VGdXNpb25UYWJsZSBmcm9tICcuL3VzZUZ1c2lvblRhYmxlJztcbmltcG9ydCB1c2VTZXQgZnJvbSAnLi91c2VTZXQnO1xuaW1wb3J0IHVzZVBlcnNpc3RGbiBmcm9tICcuL3VzZVBlcnNpc3RGbic7XG5pbXBvcnQgdXNlTWFwIGZyb20gJy4vdXNlTWFwJztcbmltcG9ydCB1c2VDcmVhdGlvbiBmcm9tICcuL3VzZUNyZWF0aW9uJztcbmltcG9ydCB1c2VEcm9wIGZyb20gJy4vdXNlRHJvcCc7XG5pbXBvcnQgdXNlRHJhZyBmcm9tICcuL3VzZURyYWcnO1xuaW1wb3J0IHVzZU1vdW50IGZyb20gJy4vdXNlTW91bnQnO1xuaW1wb3J0IHVzZVRleHRTZWxlY3Rpb24gZnJvbSAnLi91c2VUZXh0U2VsZWN0aW9uJztcbmltcG9ydCB1c2VDb3VudGVyIGZyb20gJy4vdXNlQ291bnRlcic7XG5pbXBvcnQgdXNlVXBkYXRlIGZyb20gJy4vdXNlVXBkYXRlJztcbmltcG9ydCB1c2VFdmVudFRhcmdldCBmcm9tICcuL3VzZUV2ZW50VGFyZ2V0JztcbmltcG9ydCB1c2VIaXN0b3J5VHJhdmVsIGZyb20gJy4vdXNlSGlzdG9yeVRyYXZlbCc7XG5pbXBvcnQgdXNlRGVib3VuY2VFZmZlY3QgZnJvbSAnLi91c2VEZWJvdW5jZUVmZmVjdCc7XG5pbXBvcnQgdXNlQ29va2llU3RhdGUgZnJvbSAnLi91c2VDb29raWVTdGF0ZSc7XG5pbXBvcnQgdXNlU2V0U3RhdGUgZnJvbSAnLi91c2VTZXRTdGF0ZSc7XG5pbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi91c2VJbnRlcnZhbCc7XG5pbXBvcnQgdXNlV2h5RGlkWW91VXBkYXRlIGZyb20gJy4vdXNlV2h5RGlkWW91VXBkYXRlJztcbmltcG9ydCB1c2VUaXRsZSBmcm9tICcuL3VzZVRpdGxlJztcbmltcG9ydCB1c2VOZXR3b3JrIGZyb20gJy4vdXNlTmV0d29yayc7XG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuL3VzZVRpbWVvdXQnO1xuaW1wb3J0IHVzZVJlYWN0aXZlIGZyb20gJy4vdXNlUmVhY3RpdmUnO1xuaW1wb3J0IHVzZUZhdmljb24gZnJvbSAnLi91c2VGYXZpY29uJztcbmltcG9ydCB1c2VDb3VudERvd24gZnJvbSAnLi91c2VDb3VudERvd24nO1xuaW1wb3J0IHVzZVdlYlNvY2tldCBmcm9tICcuL3VzZVdlYlNvY2tldCc7XG5pbXBvcnQgdXNlTG9ja0ZuIGZyb20gJy4vdXNlTG9ja0ZuJztcbmltcG9ydCB1c2VUcmFja2VkRWZmZWN0IGZyb20gJy4vdXNlVHJhY2tlZEVmZmVjdCc7XG5pbXBvcnQgdXNlVW5tb3VudGVkUmVmIGZyb20gJy4vdXNlVW5tb3VudGVkUmVmJztcbmltcG9ydCB1c2VFeHRlcm5hbCBmcm9tICcuL3VzZUV4dGVybmFsJztcbmltcG9ydCB1c2VTYWZlU3RhdGUgZnJvbSAnLi91c2VTYWZlU3RhdGUnO1xuXG52YXIgdXNlQ29udHJvbGxlZFZhbHVlID0gZnVuY3Rpb24gdXNlQ29udHJvbGxlZFZhbHVlKCkge1xuICB2YXIgYXJncyA9IFtdO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICB9XG5cbiAgY29uc29sZS53YXJuKCd1c2VDb250cm9sbGVkVmFsdWUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uIFBsZWFzZSB1c2UgdXNlQ29udHJvbGxhYmxlVmFsdWUgaW5zdGVhZC4nKTtcbiAgcmV0dXJuIHVzZUNvbnRyb2xsYWJsZVZhbHVlLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoYXJncykpO1xufTtcblxuZXhwb3J0IHsgdXNlQ29udHJvbGxlZFZhbHVlLCB1c2VDb250cm9sbGFibGVWYWx1ZSwgdXNlRHluYW1pY0xpc3QsIHVzZVZpcnR1YWxMaXN0LCB1c2VSZXNwb25zaXZlLCB1c2VFdmVudEVtaXR0ZXIsIHVzZUxvY2FsU3RvcmFnZVN0YXRlLCB1c2VTZXNzaW9uU3RvcmFnZVN0YXRlLCB1c2VTaXplLCBjb25maWdSZXNwb25zaXZlLCB1c2VVcGRhdGVFZmZlY3QsIHVzZVVwZGF0ZUxheW91dEVmZmVjdCwgdXNlQm9vbGVhbiwgdXNlVG9nZ2xlLCB1c2VEb2N1bWVudFZpc2liaWxpdHksIHVzZVNlbGVjdGlvbnMsIHVzZVRocm90dGxlLCB1c2VUaHJvdHRsZUZuLCB1c2VUaHJvdHRsZUVmZmVjdCwgdXNlRGVib3VuY2UsIHVzZURlYm91bmNlRm4sIHVzZURlYm91bmNlRWZmZWN0LCB1c2VQcmV2aW91cywgdXNlTW91c2UsIHVzZVNjcm9sbCwgdXNlQ2xpY2tBd2F5LCB1c2VGdWxsc2NyZWVuLCB1c2VJblZpZXdwb3J0LCB1c2VLZXlQcmVzcywgdXNlRXZlbnRMaXN0ZW5lciwgdXNlSG92ZXIsIHVzZVJlcXVlc3QsIFVzZVJlcXVlc3RQcm92aWRlciwgdXNlQW50ZFRhYmxlLCB1c2VVbm1vdW50LCB1c2VTZXQsIHVzZVBlcnNpc3RGbiwgdXNlTWFwLCB1c2VDcmVhdGlvbiwgdXNlRHJhZywgdXNlRHJvcCwgdXNlTW91bnQsIHVzZUNvdW50ZXIsIHVzZVVwZGF0ZSwgdXNlVGV4dFNlbGVjdGlvbiwgdXNlRXZlbnRUYXJnZXQsIHVzZUhpc3RvcnlUcmF2ZWwsIHVzZUZ1c2lvblRhYmxlLCB1c2VDb29raWVTdGF0ZSwgdXNlU2V0U3RhdGUsIHVzZUludGVydmFsLCB1c2VXaHlEaWRZb3VVcGRhdGUsIHVzZVRpdGxlLCB1c2VOZXR3b3JrLCB1c2VUaW1lb3V0LCB1c2VSZWFjdGl2ZSwgdXNlRmF2aWNvbiwgdXNlQ291bnREb3duLCB1c2VUcmFja2VkRWZmZWN0LCB1c2VXZWJTb2NrZXQsIHVzZUxvY2tGbiwgdXNlVW5tb3VudGVkUmVmLCB1c2VFeHRlcm5hbCwgdXNlU2FmZVN0YXRlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vbml0eUxvYWRlclNlcnZpY2UgPSB2b2lkIDA7XG4vLyBUT0RPIHR1cm4gaW50byBob29rXG52YXIgVW5pdHlMb2FkZXJTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFVuaXR5TG9hZGVyU2VydmljZSgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBkb2N1bWVudCBoZWFkLlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAdHlwZSB7SFRNTEhlYWRFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kb2N1bWVudEhlYWQgPSB0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIilcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSBVbml0eSBsb2FkZXIgc2NyaXB0IHRvIHRoZSB3aW5kb3cuIFdoZW4gYSB2ZXJzaW9uIG9mIHRoZSBsb2FkZXJcbiAgICAgKiBpcyBhbHJlYWR5IGFwcGVuZGVkLCB3ZSdsbCBza2lwIHRvIHRoZSB2YWxpZGF0aW9uIHJpZ2h0IGF3YXkuIEJlZm9yZVxuICAgICAqIHJlc29sdmluZyBhIHR5cGUgY2hlY2sgb24gdGhlIGNyZWF0ZVVuaXR5SW5zdGFuY2UgbWV0aG9kIGlzIGRvbmUuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgdGhlIHBhdGggdG8gdGhlIFVuaXR5IGxvYWRlciBmaWxlXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IEEgcHJvbWlzZSB3aGVuIHJlc29sdmluZyB3aGVuIHRoZSBmaWxlIGlzIGxvYWRlZCBzdWNjZXNmdWxsaW5nLlxuICAgICAqL1xuICAgIFVuaXR5TG9hZGVyU2VydmljZS5wcm90b3R5cGUuYWRkRnJvbVVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9oYXNTaW1pbGFyVW5pdHlMb2FkZXJVcmxJbnN0YW5jZSwgX2ksIF9hLCBfdW5pdHlMb2FkZXJJbnN0YW5jZSwgX2h0bWxTY3JpcHRFbGVtZW50O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2hhc1NpbWlsYXJVbml0eUxvYWRlclVybEluc3RhbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9pID0gMCwgX2EgPSBVbml0eUxvYWRlclNlcnZpY2UudW5pdHlMb2FkZXJJbnN0YW5jZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3VuaXR5TG9hZGVySW5zdGFuY2UgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF91bml0eUxvYWRlckluc3RhbmNlLnVybCA9PT0gdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaGFzU2ltaWxhclVuaXR5TG9hZGVyVXJsSW5zdGFuY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2hhc1NpbWlsYXJVbml0eUxvYWRlclVybEluc3RhbmNlID09PSBmYWxzZSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5hcHBlbmRBbmRMb2FkU2NyaXB0KHVybCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaHRtbFNjcmlwdEVsZW1lbnQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBVbml0eUxvYWRlclNlcnZpY2UudW5pdHlMb2FkZXJJbnN0YW5jZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFNjcmlwdEVsZW1lbnQ6IF9odG1sU2NyaXB0RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNyZWF0ZVVuaXR5SW5zdGFuY2UgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW52b2tlIFVuaXR5IExvYWRlciwgbG9hZGVkIGluY29ycmVjdGx5LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgbmV3IHNjcmlwdCB0YWcgdG8gdGhlIHdpbmRvdy4gVGhlIHByb21pc2UgcmVzb2x2ZXMgd2hlbiB0aGUgc2NyaXB0XG4gICAgICogaXMgbG9hZGVkIGFuZCByZWplY3RzIHdoZW4gaXQgZmFpbGVkIHRvIGxvYWQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgb2YgdGhlIHNjcmlwdFxuICAgICAqIEByZXR1cm5zIEEgcHJvbWlzZSBjb250YWluaW5nIHRoZSBIVE1MIFNjcmlwdCBFbGUsZW50XG4gICAgICovXG4gICAgVW5pdHlMb2FkZXJTZXJ2aWNlLnByb3RvdHlwZS5hcHBlbmRBbmRMb2FkU2NyaXB0ID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5kb2N1bWVudEhlYWQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3NjcmlwdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICAgICAgX3NjcmlwdFRhZy50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICAgICAgICAgICAgICBfc2NyaXB0VGFnLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfc2NyaXB0VGFnLnNyYyA9IHVybDtcbiAgICAgICAgICAgICAgICBfc2NyaXB0VGFnLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUoX3NjcmlwdFRhZyk7IH07XG4gICAgICAgICAgICAgICAgX3NjcmlwdFRhZy5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoXCJVbmFibGUgdG8gbG9hZCBcIiArIHVybCArIFwiIFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgX3RoaXMuZG9jdW1lbnRIZWFkLmFwcGVuZENoaWxkKF9zY3JpcHRUYWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIGFsbCBVbml0eUxvYWRlciBzY3JpcHQgdGFncyBhbmQgdGhlaXIgcmVzcGVjdGl2ZSB1cmxzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge0FycmF5PHsgdXJsOiBzdHJpbmc7IGh0bWxTY3JpcHRFbGVtZW50OiBIVE1MU2NyaXB0RWxlbWVudDsgfT59XG4gICAgICovXG4gICAgVW5pdHlMb2FkZXJTZXJ2aWNlLnVuaXR5TG9hZGVySW5zdGFuY2VzID0gbmV3IEFycmF5KCk7XG4gICAgcmV0dXJuIFVuaXR5TG9hZGVyU2VydmljZTtcbn0oKSk7XG5leHBvcnRzLlVuaXR5TG9hZGVyU2VydmljZSA9IFVuaXR5TG9hZGVyU2VydmljZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaXR5LWxvYWRlci1zZXJ2aWNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vbml0eSA9IHZvaWQgMDtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIHVuaXR5X2xvYWRlcl9zZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi4vc2VydmljZXMvdW5pdHktbG9hZGVyLXNlcnZpY2VcIik7XG4vLyBUT0RPIHR1cm4gaW50byBmdW5jdGlvbmFsIGNvbXBvbmVudFxudmFyIFVuaXR5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhVbml0eSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBVbml0eSgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgVW5pdHlDb250ZXh0IHBhc3NlZCBieSB0aGUgcHJvcHMuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEB0eXBlIHtVbml0eUNvbnRleHR9XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy51bml0eUNvbnRleHQgPSBfdGhpcy5wcm9wcy51bml0eUNvbnRleHQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgVW5pdHlMb2FkZXIgc2VydmljZSBpbnN0YW5jZS5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHR5cGUge1VuaXR5TG9hZGVyU2VydmljZX1cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnVuaXR5TG9hZGVyU2VydmljZSA9IG5ldyB1bml0eV9sb2FkZXJfc2VydmljZV8xLlVuaXR5TG9hZGVyU2VydmljZSgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBmbGFnIHJlcHJlc2VudGluZyB0aGUgY29tcG9uZW50J3MgbW91bnQgc3RhdGUuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuaXNDb21wb25lbnRNb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaW52b2tlZCBieSB0aGUgVW5pdHlJbnN0YW5jZSB3aGVuIHRoZSBpbml0aWFsaXphdGlvbiBpcyBwcm9ncmVzc2luZy5cbiAgICAgKiBXaWxsIGJlIHVzZWQgdG8gdHJhY2sgdGhlIGxvYWRpbmcgcHJvZ3Jlc3Npb24gYW5kIGludm9rZXMgdGhlIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqIGZvciBib3RoICdwcm9ncmVzcycgYW5kICdsb2FkZWQnIHdoZW4gdGhlIHByb2dyZXNzaW9uIGhpdHMgYSB2YWx1ZSBvZiAnMScuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZ3Jlc3Npb25cbiAgICAgKi9cbiAgICBVbml0eS5wcm90b3R5cGUub25Qcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzc2lvbikge1xuICAgICAgICB0aGlzLnVuaXR5Q29udGV4dC5kaXNwYXRjaEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCBwcm9ncmVzc2lvbik7XG4gICAgICAgIGlmIChwcm9ncmVzc2lvbiA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy51bml0eUNvbnRleHQuZGlzcGF0Y2hFdmVudExpc3RlbmVyKFwibG9hZGVkXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmh0bWxDYW52YXNFbGVtZW50UmVmZXJlbmNlICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgIHRoaXMudW5pdHlDb250ZXh0LmRpc3BhdGNoRXZlbnRMaXN0ZW5lcihcImNhbnZhc1wiLCB0aGlzLmh0bWxDYW52YXNFbGVtZW50UmVmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRXZlbnQgaW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZC4gVGhpcyBzZXRzIHRoZSBjb21wb25lbnRcbiAgICAgKiByZWZlcmVuY2UgYW5kIHN0YXJ0cyB0aGUgbW91bnRpbmcgb2YgdGhlIFVuaXR5SW5zdGFuY2UuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIFVuaXR5LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0NvbXBvbmVudE1vdW50ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1vdW50VW5pdHlJbnN0YW5jZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXZlbnQgaW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgd2lsbCB1bm1vdW50LiBUaGlzIGZvcmNlIHF1aXRzIHRoZVxuICAgICAqIFVuaXR5SW5zdGFuY2Ugd2hpY2ggd2lsbCBjbGVhciBpdCBmcm9tIHRoZSBtZW1vcnkuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIFVuaXR5LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51bml0eUNvbnRleHQucXVpdFVuaXR5SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5pc0NvbXBvbmVudE1vdW50ZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVkIHRoZSBVbml0eSBMb2FkZXIgYW5kIG1vdW50cyB0aGUgVW5pdHlJbnN0YW5jZSB0byB0aGUgY29tcG9uZW50LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQGFzeW5jXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IGEgcHJvbWlzZSByZXNvbHZpbmcgd2hlbiBVbml0eSBsb2FkZWQgY29ycmVjdGx5LlxuICAgICAqL1xuICAgIFVuaXR5LnByb3RvdHlwZS5tb3VudFVuaXR5SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdW5pdHlJbnN0YW5jZVBhcmFtZXRlcnMsIF91bml0eUluc3RhbmNlLCBtZXNzYWdlXzE7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuaXR5IHJlcXVpcmVzIHRoZSBsb2FkZXIgc2NyaXB0IHRvIGJlIGFwcGVuZGVkIGFuZCBsb2FkZWQgYmVmb3JlIHdlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYW4gc2FmZWx5IGluc3RhbnRpYXRlIFVuaXR5IGFuZCBtb3VudCB0aGUgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy51bml0eUxvYWRlclNlcnZpY2UuYWRkRnJvbVVybCh0aGlzLnVuaXR5Q29udGV4dC51bml0eUNvbmZpZy5sb2FkZXJVcmwpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5pdHkgcmVxdWlyZXMgdGhlIGxvYWRlciBzY3JpcHQgdG8gYmUgYXBwZW5kZWQgYW5kIGxvYWRlZCBiZWZvcmUgd2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbiBzYWZlbHkgaW5zdGFudGlhdGUgVW5pdHkgYW5kIG1vdW50IHRoZSBjb21wb25lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGVuIHRoZSBsb2FkZXIgc2VydmljZSB3YXMgZmV0Y2hpbmcgdGhlIHJlcXVpcmVkIHNjcmlwdHMsIGl0IGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3NzaWJsZSBmb3IgdGhlIGNvbXBvbmVudCB0byBiZSB1bm1vdW50ZWQuIFRoaXMgaXMgd2h5IHdlIGNoZWNrIGlmIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpcyBzdGlsbCBtb3VudGVkLCBpZiBub3QsIHdlIGRvIG5vdCBwcm9jZWVkIGluc3RhbnRpYXRpbmcgVW5pdHkuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbXBvbmVudE1vdW50ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3VuaXR5SW5zdGFuY2VQYXJhbWV0ZXJzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMudW5pdHlDb250ZXh0LnVuaXR5Q29uZmlnKSwgeyBwcmludEVycjogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnVuaXR5Q29udGV4dC5kaXNwYXRjaEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBwcmludDogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnVuaXR5Q29udGV4dC5kaXNwYXRjaEV2ZW50TGlzdGVuZXIoXCJkZWJ1Z1wiLCBtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGV2aWNlUGl4ZWxSYXRpbyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF91bml0eUluc3RhbmNlUGFyYW1ldGVycy5kZXZpY2VQaXhlbFJhdGlvID0gdGhpcy5wcm9wcy5kZXZpY2VQaXhlbFJhdGlvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudW5pdHlDb250ZXh0LnVuaXR5Q29uZmlnLndlYmdsQ29udGV4dEF0dHJpYnV0ZXMgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdW5pdHlJbnN0YW5jZVBhcmFtZXRlcnMud2ViZ2xDb250ZXh0QXR0cmlidXRlcyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdHlDb250ZXh0LnVuaXR5Q29uZmlnLndlYmdsQ29udGV4dEF0dHJpYnV0ZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5tYXRjaFdlYkdMVG9DYW52YXNTaXplICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3VuaXR5SW5zdGFuY2VQYXJhbWV0ZXJzLm1hdGNoV2ViR0xUb0NhbnZhc1NpemUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1hdGNoV2ViR0xUb0NhbnZhc1NpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjcmVhdGVVbml0eUluc3RhbmNlKHRoaXMuaHRtbENhbnZhc0VsZW1lbnRSZWZlcmVuY2UsIF91bml0eUluc3RhbmNlUGFyYW1ldGVycywgdGhpcy5vblByb2dyZXNzLmJpbmQodGhpcykpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3VuaXR5SW5zdGFuY2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5hbGx5IHBhc3MgdGhlIGluc3RhbmNlIGJhY2sgdG8gdGhlIGNvbnRleHQgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0eUNvbnRleHQuc2V0VW5pdHlJbnN0YW5jZShfdW5pdHlJbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgY3JlYXRpb24gb2YgdGhlIFVuaXR5IEluc3RhbmNlIGlzIGFzeW5jLCB3ZSdsbCBjaGVjayB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbXBvbmVudCdzIG1vdW50IHN0YXRlIHJpZ2h0IGFmdGF0ZXIgaW5zdGFudGlhdGluZy4gSWYgdGhlIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXMgbm8gbG9uZ2VyIG1vdW50ZWQsIHdlJ2xsIHF1aXQgdGhlIFVuaXR5IGluc3RhbmNlIHJpZ2h0IGF3YXkuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIG5lZWRzIHRvIG9jY3VyIGFmdGVyIHRoZSBzZXRVbml0eUluc3RhbmNlIGNhbGwgYmVjYXVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcXVpdFVuaXR5SW5zdGFuY2UgcmVxdWlyZXMgdGhlIGluc3RhbmNlIHRvIGJlIHNldC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhBQ0sgcmVxdWlyZXMgdHlwZSBjYXN0IHRvIGJvb2xlYW4gZHVlIHRvIGF3YWl0IGJldHdlZW4gY29tcGFyaXNvbnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NvbXBvbmVudE1vdW50ZWQgPT09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnVuaXR5Q29udGV4dC5xdWl0VW5pdHlJbnN0YW5jZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXR5Q29udGV4dC5kaXNwYXRjaEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBtZXNzYWdlXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkEgcHJvYmxlbSBvY2N1cnJlZCB3aGlsZSBtb3VudGluZ1wiLCBtZXNzYWdlXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIHVuaXR5IHdyYXBwZXIgYW5kIHBsYXllci5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybnMge1JlYWN0LlJlYWN0Tm9kZX0gZWxlbWVudFxuICAgICAqL1xuICAgIFVuaXR5LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiByZWFjdF8xLmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIiwge1xuICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiAocmVmKSB7IHJldHVybiAoX3RoaXMuaHRtbENhbnZhc0VsZW1lbnRSZWZlcmVuY2UgPSByZWYpOyB9LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCBcIlwiLFxuICAgICAgICAgICAgdGFiSW5kZXg6IHRoaXMucHJvcHMudGFiSW5kZXggfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuc3R5bGUgfHwge30sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFVuaXR5O1xufShyZWFjdF8xLlB1cmVDb21wb25lbnQpKTtcbmV4cG9ydHMuVW5pdHkgPSBVbml0eTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaXR5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVW5pdHlDb250ZXh0ID0gdm9pZCAwO1xuLy8gVE9ETyByZW1vdmUgZnJvbSBkaXJcbi8qKlxuICogVGhlIFVuaXR5IENvbnRleHQuXG4gKi9cbnZhciBVbml0eUNvbnRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgVW5pdHkgY29udGV4dCBtb2RlbC5cbiAgICAgKiBAcGFyYW0ge0lVbml0eUNvbmZpZ30gdW5pdHlDb25maWcgVGhlIFVuaXR5IGNvbmZpZyB1c2VkIHRvIGJ1aWxkIHRoZSBwbGF5ZXIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gVW5pdHlDb250ZXh0KHVuaXR5Q29uZmlnKSB7XG4gICAgICAgIHRoaXMudW5pdHlDb25maWcgPSB1bml0eUNvbmZpZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgbGlzdCBvZiB0aGUgVW5pdHlFdmVudHMgYmluZGVkIHRvIHRoaXMgdW5pdHlDb250ZXh0LlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAdHlwZSB7SVVuaXR5RXZlbnRbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5pdHlFdmVudHMgPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cuUmVhY3RVbml0eVdlYkdMID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgd2luZG93LlJlYWN0VW5pdHlXZWJHTCA9IHt9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSByZWZlcmVuY2Ugb2YgdGhlIFVuaXR5SW5zdGFuY2UuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7VW5pdHlJbnN0YW5jZX0gdW5pdHlJbnN0YW5jZSB0aGUgdGFyZ2V0IHVuaXR5SW5zdGFuY2UuXG4gICAgICovXG4gICAgVW5pdHlDb250ZXh0LnByb3RvdHlwZS5zZXRVbml0eUluc3RhbmNlID0gZnVuY3Rpb24gKHVuaXR5SW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy51bml0eUluc3RhbmNlID0gdW5pdHlJbnN0YW5jZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFF1aXRzIHRoZSBVbml0eSBJbnN0YW5jZSBhbmQgY2xlYXJzIGl0IGZyb20gbWVtb3J5LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBVbml0eUNvbnRleHQucHJvdG90eXBlLnF1aXRVbml0eUluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0eXBlb2YgdGhpcy51bml0eUluc3RhbmNlICE9PSBcInVuZGVmaW5lZFwiKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnVuaXR5SW5zdGFuY2UuUXVpdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50TGlzdGVuZXIoXCJxdWl0dGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0eUluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIFVuaXR5SW5zdGFuY2UgdG8gaW52b2tlIGEgcHVibGljIG1ldGhvZC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdhbWVPYmplY3ROYW1lIHRoZSBuYW1lIG9mIHRoZSBnYW1lIG9iamVjdCBpbiB5b3VyIFVuaXR5IHNjZW5lLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIHRoZSBuYW1lIG9mIHRoZSBwdWJsaWMgbWV0aG9kIG9uIHRoZSBnYW1lIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IGJvb2xlYW59IHBhcmFtZXRlciBhbiBvcHRpb25hbCBtZXRob2QgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIFVuaXR5Q29udGV4dC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChnYW1lT2JqZWN0TmFtZSwgbWV0aG9kTmFtZSwgcGFyYW1ldGVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy51bml0eUluc3RhbmNlICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbWV0ZXIgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgdGhpcy51bml0eUluc3RhbmNlLlNlbmRNZXNzYWdlKGdhbWVPYmplY3ROYW1lLCBtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXR5SW5zdGFuY2UuU2VuZE1lc3NhZ2UoZ2FtZU9iamVjdE5hbWUsIG1ldGhvZE5hbWUsIHBhcmFtZXRlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBVbml0eSBwbGF5ZXIuIFRoZXNlIGNhbiBiZVxuICAgICAqIHN5c3RlbSBldmVudHMgbGlrZSB3aGVuIHRoZSBwbGF5ZXIgaXMgaW5pdGlhbGl6ZWQgb3IgbG9hZGVyIGFuZFxuICAgICAqIHlvdXIgY3VzdG9tIGV2ZW50cyBmcm9tIFVuaXR5LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIHRoZSBldmVudCdzIG5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBldmVudExpc3RlbmVyIHRoZSBldmVudCdzIGZ1bmN0aW9uXG4gICAgICovXG4gICAgVW5pdHlDb250ZXh0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy51bml0eUV2ZW50cy5wdXNoKHsgZXZlbnROYW1lOiBldmVudE5hbWUsIGV2ZW50Q2FsbGJhY2s6IGV2ZW50TGlzdGVuZXIgfSk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgd2luZG93LlJlYWN0VW5pdHlXZWJHTFtldmVudE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJhbWV0ZXJzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwOyBfYSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyc1tfYV0gPSBhcmd1bWVudHNbX2FdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnRMaXN0ZW5lci5hcHBseSh2b2lkIDAsIHBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIHRoZSBFdmVudCBMaXN0ZW5lcnMgd2l0aCBhIHNwZWNpZmljIEV2ZW50IE5hbWUuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgdGhlIGV2ZW50J3MgbmFtZVxuICAgICAqIEBleGFtcGxlIHVuaXR5Q29udGV4dC5yZW1vdmVFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIik7XG4gICAgICovXG4gICAgVW5pdHlDb250ZXh0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAvLyBUT0RPIHJlZmFjdG9yIHRvIFwib2ZmXCI/XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLnVuaXR5RXZlbnRzLmxlbmd0aDsgX2krKylcbiAgICAgICAgICAgIGlmICh0aGlzLnVuaXR5RXZlbnRzW19pXS5ldmVudE5hbWUgPT09IGV2ZW50TmFtZSlcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXR5RXZlbnRzLnNwbGljZShfaSwgMSk7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuUmVhY3RVbml0eVdlYkdMW2V2ZW50TmFtZV07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCB0aGUgRXZlbnQgTGlzdGVuZXJzLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAZXhhbXBsZSB1bml0eUNvbnRleHQucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgKi9cbiAgICBVbml0eUNvbnRleHQucHJvdG90eXBlLnJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUT0RPIHJlZmFjdG9yIHRvIFwib2ZmXCI/XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLnVuaXR5RXZlbnRzLmxlbmd0aDsgX2krKylcbiAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuUmVhY3RVbml0eVdlYkdMW3RoaXMudW5pdHlFdmVudHNbX2ldLmV2ZW50TmFtZV07XG4gICAgICAgIHRoaXMudW5pdHlFdmVudHMgPSBbXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXMgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCBoYXMgYmVlbiByZWdpc3RlcmVkIHVzaW5nIHRoZSBvbiBtZXRob2QuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgdGhlIGV2ZW50J3MgbmFtZVxuICAgICAqIEBwYXJhbSB7YW55fSBldmVudFZhbHVlIHRoZSBldmVudCdzIHZhbHVlXG4gICAgICogQGV4YW1wbGUgdW5pdHlDb250ZXh0LmRpc3BhdGNoRXZlbnRMaXN0ZW5lcihcImdhbWVPdmVyXCIsIDE4MCk7XG4gICAgICovXG4gICAgVW5pdHlDb250ZXh0LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBldmVudFZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIF9hID0gMCwgX2IgPSB0aGlzLnVuaXR5RXZlbnRzOyBfYSA8IF9iLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgdmFyIF91bml0eUV2ZW50ID0gX2JbX2FdO1xuICAgICAgICAgICAgaWYgKF91bml0eUV2ZW50LmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKVxuICAgICAgICAgICAgICAgIF91bml0eUV2ZW50LmV2ZW50Q2FsbGJhY2soZXZlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuYWJsZXMgb3IgZGlzYWJsZWQgdGhlIEZ1bGxzY3JlZW4gbW9kZSBvZiB0aGUgVW5pdHkgSW5zdGFuY2UuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuICAgICAqL1xuICAgIFVuaXR5Q29udGV4dC5wcm90b3R5cGUuc2V0RnVsbHNjcmVlbiA9IGZ1bmN0aW9uIChlbmFibGVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy51bml0eUluc3RhbmNlICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgdGhpcy51bml0eUluc3RhbmNlLlNldEZ1bGxzY3JlZW4oZW5hYmxlZCA9PT0gdHJ1ZSA/IDEgOiAwKTtcbiAgICB9O1xuICAgIHJldHVybiBVbml0eUNvbnRleHQ7XG59KCkpO1xuZXhwb3J0cy5Vbml0eUNvbnRleHQgPSBVbml0eUNvbnRleHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bml0eS1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vbml0eUNvbnRleHQgPSB2b2lkIDA7XG52YXIgdW5pdHlfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvdW5pdHlcIik7XG52YXIgdW5pdHlfY29udGV4dF8xID0gcmVxdWlyZShcIi4vbW9kZWxzL3VuaXR5LWNvbnRleHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJVbml0eUNvbnRleHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuaXR5X2NvbnRleHRfMS5Vbml0eUNvbnRleHQ7IH0gfSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bml0eV8xLlVuaXR5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXhwb3J0cy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDcmVhdGlvbiwgdXNlSG92ZXIgfSBmcm9tIFwiYWhvb2tzXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDU1NQcm9wZXJ0aWVzLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVbml0eSwgeyBVbml0eUNvbnRleHQgfSBmcm9tIFwicmVhY3QtdW5pdHktd2ViZ2xcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVbml0eUZDUHJvcHMge1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbiAgICBjbGFzczogc3RyaW5nO1xuICAgIHRhYkluZGV4PzogbnVtYmVyO1xuICAgIG1vZGVsUGF0aDogc3RyaW5nO1xuICAgIGhvdmVyR28/OiBzdHJpbmc7XG4gICAgaG92ZXJNZXRob2Q6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb25FdmVudD86IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcbiAgICBldmVudE5hbWVzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVuaXR5RkMocHJvcHM6IFVuaXR5RkNQcm9wcykge1xuICAgIGNvbnN0IHVuaXR5Q29udGV4dCA9IHVzZUNyZWF0aW9uKFxuICAgICAgICAoKSA9PlxuICAgICAgICAgICAgbmV3IFVuaXR5Q29udGV4dCh7XG4gICAgICAgICAgICAgICAgbG9hZGVyVXJsOiBgJHtwcm9wcy5tb2RlbFBhdGh9LmxvYWRlci5qc2AsXG4gICAgICAgICAgICAgICAgZGF0YVVybDogYCR7cHJvcHMubW9kZWxQYXRofS5kYXRhYCxcbiAgICAgICAgICAgICAgICBmcmFtZXdvcmtVcmw6IGAke3Byb3BzLm1vZGVsUGF0aH0uZnJhbWV3b3JrLmpzYCxcbiAgICAgICAgICAgICAgICBjb2RlVXJsOiBgJHtwcm9wcy5tb2RlbFBhdGh9Lndhc21gXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgW3Byb3BzLm1vZGVsUGF0aF1cbiAgICApO1xuXG4gICAgY29uc3QgcmVmID0gdXNlUmVmPGFueT4oKTtcbiAgICBjb25zdCBpc0hvdmVyaW5nID0gdXNlSG92ZXIocmVmKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5ob3ZlckdvKSB7XG4gICAgICAgICAgICB1bml0eUNvbnRleHQuc2VuZChwcm9wcy5ob3ZlckdvLCBwcm9wcy5ob3Zlck1ldGhvZCwgaXNIb3ZlcmluZyA/IDEgOiAwKTtcbiAgICAgICAgfVxuICAgIH0sIFtpc0hvdmVyaW5nXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXVuaXR5Q29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICh3aW5kb3cgYXMgYW55KS51bml0eUNvbnRleHQgPSAod2luZG93IGFzIGFueSkudW5pdHlDb250ZXh0ID8gKHdpbmRvdyBhcyBhbnkpLnVuaXR5Q29udGV4dCA6IHt9O1xuICAgICAgICAod2luZG93IGFzIGFueSkudW5pdHlDb250ZXh0W3Byb3BzLm5hbWVdID0gdW5pdHlDb250ZXh0O1xuXG4gICAgICAgIGlmIChwcm9wcy5vbkV2ZW50KSB7XG4gICAgICAgICAgICBwcm9wcy5ldmVudE5hbWVzPy5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgdW5pdHlDb250ZXh0Lm9uKGV2ZW50TmFtZSwgdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vbkV2ZW50IShldmVudE5hbWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09ICdDbGlja09iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBpcGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHVuaXR5Q29udGV4dC5yZW1vdmVBbGxFdmVudExpc3RlbmVycygpO1xuICAgICAgICB9O1xuICAgIH0sIFt1bml0eUNvbnRleHRdKTtcblxuICAgIGNvbnN0IFtwaXBlTmFtZSwgc2V0UGlwZU5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuPumAieaLqeeahOeuoemBk+WQjeensCB7cGlwZU5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBpcGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXR5Q29udGV4dC5zZW5kKHBpcGVOYW1lLCAnU3RvcFNoYWtlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+5YGc5q2i5oyv5YqoPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGlwZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdHlDb250ZXh0LnNlbmQocGlwZU5hbWUsICdTdGFydFNoYWtlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX0+5byA5aeL5oyv5YqoPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAgICAgICAgICA8VW5pdHkgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc30gdGFiSW5kZXg9e3Byb3BzLnRhYkluZGV4fSBzdHlsZT17cHJvcHMuc3R5bGV9IHVuaXR5Q29udGV4dD17dW5pdHlDb250ZXh0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBWYWx1ZVN0YXR1cyB9IGZyb20gJ21lbmRpeCdcblxuaW1wb3J0IHsgVW5pdHlDb250YWluZXJQcm9wcyB9IGZyb20gXCIuLi90eXBpbmdzL1VuaXR5UHJvcHNcIjtcbmltcG9ydCBVbml0eUZDIGZyb20gXCIuL2NvbXBvbmVudHMvVW5pdHlGQ1wiO1xuXG5pbXBvcnQgXCIuL3VpL1VuaXR5LmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVbml0eShwcm9wczogVW5pdHlDb250YWluZXJQcm9wcykge1xuXG4gICAgY29uc3Qgb25FdmVudCA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAoZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcblxuICAgICAgICAgICAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdDbGlja09iamVjdCc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5vdXQxICYmIHByb3BzLm91dDE/LnN0YXR1cyA9PSBWYWx1ZVN0YXR1cy5BdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm91dDEuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbcHJvcHMub3V0MV0sXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxVbml0eUZDXG4gICAgICAgICAgICBvbkV2ZW50PXtvbkV2ZW50fVxuICAgICAgICAgICAgZXZlbnROYW1lcz17WydDbGlja09iamVjdCddfVxuICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cbiAgICAgICAgICAgIGhvdmVyTWV0aG9kPXtwcm9wcy5ob3Zlck1ldGhvZH1cbiAgICAgICAgICAgIGhvdmVyR289e3Byb3BzLmhvdmVyR2FtZU9iamVjdH1cbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgLi4ucHJvcHMuc3R5bGUgfX1cbiAgICAgICAgICAgIGNsYXNzPXtwcm9wcy5jbGFzc31cbiAgICAgICAgICAgIG1vZGVsUGF0aD17cHJvcHMudW5pdHlNb2RlbFBhdGh9XG4gICAgICAgID48L1VuaXR5RkM+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwiT2JqZWN0IiwiZnJlZVNlbGYiLCJzZWxmIiwiRnVuY3Rpb24iLCJpc0RvY3VtZW50VmlzaWJsZSIsImRvY3VtZW50IiwidmlzaWJpbGl0eVN0YXRlIiwiaXNPbmxpbmUiLCJuYXZpZ2F0b3IiLCJvbkxpbmUiLCJfX3JlYWQiLCJ0aGlzIiwibyIsIm4iLCJtIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJpIiwiY2FsbCIsInIiLCJhciIsImUiLCJuZXh0IiwiZG9uZSIsInB1c2giLCJ2YWx1ZSIsImVycm9yIiwiX19zcHJlYWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjb25jYXQiLCJsaXN0ZW5lcnMiLCJldmVudHNCaW5kZWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmV2YWxpZGF0ZSIsImxpc3RlbmVyIiwiX19hc3NpZ24iLCJhc3NpZ24iLCJ0IiwicyIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImFwcGx5IiwiX19yZXN0IiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiQ29uZmlnQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiUHJvdmlkZXIiLCJnZXRUYXJnZXRFbGVtZW50IiwidGFyZ2V0IiwiZGVmYXVsdEVsZW1lbnQiLCJ0YXJnZXRFbGVtZW50IiwiY3VycmVudCIsInVzZVRvZ2dsZSIsImRlZmF1bHRWYWx1ZSIsInJldmVyc2VWYWx1ZSIsIl9hIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiYWN0aW9ucyIsInVzZU1lbW8iLCJyZXZlcnNlVmFsdWVPcmlnaW4iLCJ1bmRlZmluZWQiLCJ0b2dnbGUiLCJzZXRMZWZ0Iiwic2V0UmlnaHQiLCJ1c2VCb29sZWFuIiwic2V0VHJ1ZSIsInNldEZhbHNlIiwidXNlRXZlbnRMaXN0ZW5lciIsImV2ZW50TmFtZSIsImhhbmRsZXIiLCJvcHRpb25zIiwiaGFuZGxlclJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNhcHR1cmUiLCJvbmNlIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VDcmVhdGlvbiIsImZhY3RvcnkiLCJkZXBzIiwib2JqIiwiaW5pdGlhbGl6ZWQiLCJkZXBzQXJlU2FtZSIsIm9sZERlcHMiLCJvbkVudGVyIiwib25MZWF2ZSIsIl9iIiwiX2MiLCJyZXF1aXJlJCQwIiwiVW5pdHkiLCJyZXF1aXJlJCQxIiwiVW5pdHlDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTs7QUFDQSxJQUFJQSxZQUFVLEdBQUcsT0FBT0MsY0FBUCxJQUFpQixRQUFqQixJQUE2QkEsY0FBN0IsSUFBdUNBLGNBQU0sQ0FBQ0MsTUFBUCxLQUFrQkEsTUFBekQsSUFBbUVELGNBQXBGO0FBRUE7O0FBQ0EsSUFBSUUsVUFBUSxHQUFHLE9BQU9DLElBQVAsSUFBZSxRQUFmLElBQTJCQSxJQUEzQixJQUFtQ0EsSUFBSSxDQUFDRixNQUFMLEtBQWdCQSxNQUFuRCxJQUE2REUsSUFBNUU7QUFFQTs7QUFDV0osWUFBVSxJQUFJRyxVQUFkLElBQTBCRSxRQUFRLENBQUMsYUFBRCxDQUFSOzs7Ozs7Ozs7O0FDUHJDOztBQUNBLElBQUlMLFVBQVUsR0FBRyxPQUFPQyxjQUFQLElBQWlCLFFBQWpCLElBQTZCQSxjQUE3QixJQUF1Q0EsY0FBTSxDQUFDQyxNQUFQLEtBQWtCQSxNQUF6RCxJQUFtRUQsY0FBcEY7QUFFQTs7QUFDQSxJQUFJRSxRQUFRLEdBQUcsT0FBT0MsSUFBUCxJQUFlLFFBQWYsSUFBMkJBLElBQTNCLElBQW1DQSxJQUFJLENBQUNGLE1BQUwsS0FBZ0JBLE1BQW5ELElBQTZERSxJQUE1RTtBQUVBOztBQUNXSixVQUFVLElBQUlHLFFBQWQsSUFBMEJFLFFBQVEsQ0FBQyxhQUFELENBQVI7O0FDeEM5QixTQUFTQyxpQkFBVCxHQUE2QjtBQUNsQyxNQUFJLE9BQU9DLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUMsT0FBT0EsUUFBUSxDQUFDQyxlQUFoQixLQUFvQyxXQUEzRSxFQUF3RjtBQUN0RixXQUFPRCxRQUFRLENBQUNDLGVBQVQsS0FBNkIsUUFBcEM7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRDtBQUNNLFNBQVNDLFFBQVQsR0FBb0I7QUFDekIsTUFBSSxPQUFPQyxTQUFTLENBQUNDLE1BQWpCLEtBQTRCLFdBQWhDLEVBQTZDO0FBQzNDLFdBQU9ELFNBQVMsQ0FBQ0MsTUFBakI7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRDs7QUNiRCxJQUFJQyxRQUFNLEdBQUdDLGFBQVFBLFVBQUtELE1BQWIsSUFBdUIsVUFBVUUsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ2xELE1BQUlDLENBQUMsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDSCxDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsUUFBUixDQUF6QztBQUNBLE1BQUksQ0FBQ0YsQ0FBTCxFQUFRLE9BQU9GLENBQVA7QUFDUixNQUFJSyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksSUFBRixDQUFPTixDQUFQLENBQVI7QUFBQSxNQUNJTyxDQURKO0FBQUEsTUFFSUMsRUFBRSxHQUFHLEVBRlQ7QUFBQSxNQUdJQyxDQUhKOztBQUtBLE1BQUk7QUFDRixXQUFPLENBQUNSLENBQUMsS0FBSyxLQUFLLENBQVgsSUFBZ0JBLENBQUMsS0FBSyxDQUF2QixLQUE2QixDQUFDLENBQUNNLENBQUMsR0FBR0YsQ0FBQyxDQUFDSyxJQUFGLEVBQUwsRUFBZUMsSUFBcEQsRUFBMEQ7QUFDeERILE1BQUFBLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRTCxDQUFDLENBQUNNLEtBQVY7QUFDRDtBQUNGLEdBSkQsQ0FJRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEwsSUFBQUEsQ0FBQyxHQUFHO0FBQ0ZLLE1BQUFBLEtBQUssRUFBRUE7QUFETCxLQUFKO0FBR0QsR0FSRCxTQVFVO0FBQ1IsUUFBSTtBQUNGLFVBQUlQLENBQUMsSUFBSSxDQUFDQSxDQUFDLENBQUNJLElBQVIsS0FBaUJULENBQUMsR0FBR0csQ0FBQyxDQUFDLFFBQUQsQ0FBdEIsQ0FBSixFQUF1Q0gsQ0FBQyxDQUFDSSxJQUFGLENBQU9ELENBQVA7QUFDeEMsS0FGRCxTQUVVO0FBQ1IsVUFBSUksQ0FBSixFQUFPLE1BQU1BLENBQUMsQ0FBQ0ssS0FBUjtBQUNSO0FBQ0Y7O0FBRUQsU0FBT04sRUFBUDtBQUNELENBekJEOztBQTJCZVQsYUFBUUEsVUFBS2dCLFFBQWIsSUFBeUIsWUFBWTtBQUNsRCxPQUFLLElBQUlQLEVBQUUsR0FBRyxFQUFULEVBQWFILENBQUMsR0FBRyxDQUF0QixFQUF5QkEsQ0FBQyxHQUFHVyxTQUFTLENBQUNDLE1BQXZDLEVBQStDWixDQUFDLEVBQWhELEVBQW9EO0FBQ2xERyxJQUFBQSxFQUFFLEdBQUdBLEVBQUUsQ0FBQ1UsTUFBSCxDQUFVcEIsUUFBTSxDQUFDa0IsU0FBUyxDQUFDWCxDQUFELENBQVYsQ0FBaEIsQ0FBTDtBQUNEOztBQUVELFNBQU9HLEVBQVA7QUFDRDs7QUNqQ0QsSUFBSVYsUUFBTSxHQUFHQyxhQUFRQSxVQUFLRCxNQUFiLElBQXVCLFVBQVVFLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNsRCxNQUFJQyxDQUFDLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQ0gsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLFFBQVIsQ0FBekM7QUFDQSxNQUFJLENBQUNGLENBQUwsRUFBUSxPQUFPRixDQUFQO0FBQ1IsTUFBSUssQ0FBQyxHQUFHSCxDQUFDLENBQUNJLElBQUYsQ0FBT04sQ0FBUCxDQUFSO0FBQUEsTUFDSU8sQ0FESjtBQUFBLE1BRUlDLEVBQUUsR0FBRyxFQUZUO0FBQUEsTUFHSUMsQ0FISjs7QUFLQSxNQUFJO0FBQ0YsV0FBTyxDQUFDUixDQUFDLEtBQUssS0FBSyxDQUFYLElBQWdCQSxDQUFDLEtBQUssQ0FBdkIsS0FBNkIsQ0FBQyxDQUFDTSxDQUFDLEdBQUdGLENBQUMsQ0FBQ0ssSUFBRixFQUFMLEVBQWVDLElBQXBELEVBQTBEO0FBQ3hESCxNQUFBQSxFQUFFLENBQUNJLElBQUgsQ0FBUUwsQ0FBQyxDQUFDTSxLQUFWO0FBQ0Q7QUFDRixHQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RMLElBQUFBLENBQUMsR0FBRztBQUNGSyxNQUFBQSxLQUFLLEVBQUVBO0FBREwsS0FBSjtBQUdELEdBUkQsU0FRVTtBQUNSLFFBQUk7QUFDRixVQUFJUCxDQUFDLElBQUksQ0FBQ0EsQ0FBQyxDQUFDSSxJQUFSLEtBQWlCVCxDQUFDLEdBQUdHLENBQUMsQ0FBQyxRQUFELENBQXRCLENBQUosRUFBdUNILENBQUMsQ0FBQ0ksSUFBRixDQUFPRCxDQUFQO0FBQ3hDLEtBRkQsU0FFVTtBQUNSLFVBQUlJLENBQUosRUFBTyxNQUFNQSxDQUFDLENBQUNLLEtBQVI7QUFDUjtBQUNGOztBQUVELFNBQU9OLEVBQVA7QUFDRCxDQXpCRDs7QUEyQmVULGFBQVFBLFVBQUtnQixRQUFiLElBQXlCLFlBQVk7QUFDbEQsT0FBSyxJQUFJUCxFQUFFLEdBQUcsRUFBVCxFQUFhSCxDQUFDLEdBQUcsQ0FBdEIsRUFBeUJBLENBQUMsR0FBR1csU0FBUyxDQUFDQyxNQUF2QyxFQUErQ1osQ0FBQyxFQUFoRCxFQUFvRDtBQUNsREcsSUFBQUEsRUFBRSxHQUFHQSxFQUFFLENBQUNVLE1BQUgsQ0FBVXBCLFFBQU0sQ0FBQ2tCLFNBQVMsQ0FBQ1gsQ0FBRCxDQUFWLENBQWhCLENBQUw7QUFDRDs7QUFFRCxTQUFPRyxFQUFQO0FBQ0Q7O0FDakNEO0FBRUEsSUFBSVcsV0FBUyxHQUFHLEVBQWhCOztBQVVBLElBQUlDLGNBQVksR0FBRyxLQUFuQjs7QUFFQSxJQUFJLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQU0sQ0FBQ0MsZ0JBQXhDLElBQTRELENBQUNGLGNBQWpFLEVBQStFO0FBQzdFLE1BQUlHLFlBQVUsR0FBRyxTQUFTQSxVQUFULEdBQXNCO0FBQ3JDLFFBQUksQ0FBQy9CLGlCQUFpQixFQUFsQixJQUF3QixDQUFDRyxRQUFRLEVBQXJDLEVBQXlDOztBQUV6QyxTQUFLLElBQUlVLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdjLFdBQVMsQ0FBQ0YsTUFBOUIsRUFBc0NaLENBQUMsRUFBdkMsRUFBMkM7QUFDekMsVUFBSW1CLFFBQVEsR0FBR0wsV0FBUyxDQUFDZCxDQUFELENBQXhCO0FBQ0FtQixNQUFBQSxRQUFRO0FBQ1Q7QUFDRixHQVBEOztBQVNBSCxFQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0Q0MsWUFBNUMsRUFBd0QsS0FBeEQ7QUFDQUYsRUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0MsWUFBakMsRUFBNkMsS0FBN0MsRUFYNkU7O0FBYTdFSCxFQUFBQSxjQUFZLEdBQUcsSUFBZjtBQUNEOztBQzVCRDtBQUVBLElBQUlELFNBQVMsR0FBRyxFQUFoQjs7QUFVQSxJQUFJQyxZQUFZLEdBQUcsS0FBbkI7O0FBRUEsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxNQUFNLENBQUNDLGdCQUF4QyxJQUE0RCxDQUFDRixZQUFqRSxFQUErRTtBQUM3RSxNQUFJRyxVQUFVLEdBQUcsU0FBU0EsVUFBVCxHQUFzQjtBQUNyQyxRQUFJLENBQUMvQixpQkFBaUIsRUFBdEIsRUFBMEI7O0FBRTFCLFNBQUssSUFBSWEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2MsU0FBUyxDQUFDRixNQUE5QixFQUFzQ1osQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxVQUFJbUIsUUFBUSxHQUFHTCxTQUFTLENBQUNkLENBQUQsQ0FBeEI7QUFDQW1CLE1BQUFBLFFBQVE7QUFDVDtBQUNGLEdBUEQ7O0FBU0FILEVBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDQyxVQUE1QyxFQUF3RCxLQUF4RCxFQVY2RTs7QUFZN0VILEVBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0Q7O0FDM0JELElBQUlLLFVBQVEsR0FBRzFCLGFBQVFBLFVBQUswQixRQUFiLElBQXlCLFlBQVk7QUFDbERBLEVBQUFBLFVBQVEsR0FBR3JDLE1BQU0sQ0FBQ3NDLE1BQVAsSUFBaUIsVUFBVUMsQ0FBVixFQUFhO0FBQ3ZDLFNBQUssSUFBSUMsQ0FBSixFQUFPdkIsQ0FBQyxHQUFHLENBQVgsRUFBY0osQ0FBQyxHQUFHZSxTQUFTLENBQUNDLE1BQWpDLEVBQXlDWixDQUFDLEdBQUdKLENBQTdDLEVBQWdESSxDQUFDLEVBQWpELEVBQXFEO0FBQ25EdUIsTUFBQUEsQ0FBQyxHQUFHWixTQUFTLENBQUNYLENBQUQsQ0FBYjs7QUFFQSxXQUFLLElBQUl3QixDQUFULElBQWNELENBQWQsRUFBaUI7QUFDZixZQUFJeEMsTUFBTSxDQUFDMEMsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0N6QixJQUFoQyxDQUFxQ3NCLENBQXJDLEVBQXdDQyxDQUF4QyxDQUFKLEVBQWdERixDQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFPRCxDQUFDLENBQUNDLENBQUQsQ0FBUjtBQUNqRDtBQUNGOztBQUVELFdBQU9GLENBQVA7QUFDRCxHQVZEOztBQVlBLFNBQU9GLFVBQVEsQ0FBQ08sS0FBVCxDQUFlLElBQWYsRUFBcUJoQixTQUFyQixDQUFQO0FBQ0QsQ0FkRDs7QUFnQkEsSUFBSWxCLFFBQU0sR0FBR0MsYUFBUUEsVUFBS0QsTUFBYixJQUF1QixVQUFVRSxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDbEQsTUFBSUMsQ0FBQyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NILENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxRQUFSLENBQXpDO0FBQ0EsTUFBSSxDQUFDRixDQUFMLEVBQVEsT0FBT0YsQ0FBUDtBQUNSLE1BQUlLLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxJQUFGLENBQU9OLENBQVAsQ0FBUjtBQUFBLE1BQ0lPLENBREo7QUFBQSxNQUVJQyxFQUFFLEdBQUcsRUFGVDtBQUFBLE1BR0lDLENBSEo7O0FBS0EsTUFBSTtBQUNGLFdBQU8sQ0FBQ1IsQ0FBQyxLQUFLLEtBQUssQ0FBWCxJQUFnQkEsQ0FBQyxLQUFLLENBQXZCLEtBQTZCLENBQUMsQ0FBQ00sQ0FBQyxHQUFHRixDQUFDLENBQUNLLElBQUYsRUFBTCxFQUFlQyxJQUFwRCxFQUEwRDtBQUN4REgsTUFBQUEsRUFBRSxDQUFDSSxJQUFILENBQVFMLENBQUMsQ0FBQ00sS0FBVjtBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNkTCxJQUFBQSxDQUFDLEdBQUc7QUFDRkssTUFBQUEsS0FBSyxFQUFFQTtBQURMLEtBQUo7QUFHRCxHQVJELFNBUVU7QUFDUixRQUFJO0FBQ0YsVUFBSVAsQ0FBQyxJQUFJLENBQUNBLENBQUMsQ0FBQ0ksSUFBUixLQUFpQlQsQ0FBQyxHQUFHRyxDQUFDLENBQUMsUUFBRCxDQUF0QixDQUFKLEVBQXVDSCxDQUFDLENBQUNJLElBQUYsQ0FBT0QsQ0FBUDtBQUN4QyxLQUZELFNBRVU7QUFDUixVQUFJSSxDQUFKLEVBQU8sTUFBTUEsQ0FBQyxDQUFDSyxLQUFSO0FBQ1I7QUFDRjs7QUFFRCxTQUFPTixFQUFQO0FBQ0QsQ0F6QkQ7O0FBMkJlVCxhQUFRQSxVQUFLZ0IsUUFBYixJQUF5QixZQUFZO0FBQ2xELE9BQUssSUFBSVAsRUFBRSxHQUFHLEVBQVQsRUFBYUgsQ0FBQyxHQUFHLENBQXRCLEVBQXlCQSxDQUFDLEdBQUdXLFNBQVMsQ0FBQ0MsTUFBdkMsRUFBK0NaLENBQUMsRUFBaEQsRUFBb0Q7QUFDbERHLElBQUFBLEVBQUUsR0FBR0EsRUFBRSxDQUFDVSxNQUFILENBQVVwQixRQUFNLENBQUNrQixTQUFTLENBQUNYLENBQUQsQ0FBVixDQUFoQixDQUFMO0FBQ0Q7O0FBRUQsU0FBT0csRUFBUDtBQUNEOztBQ2pERCxJQUFJaUIsVUFBUSxHQUFHMUIsYUFBUUEsVUFBSzBCLFFBQWIsSUFBeUIsWUFBWTtBQUNsREEsRUFBQUEsVUFBUSxHQUFHckMsTUFBTSxDQUFDc0MsTUFBUCxJQUFpQixVQUFVQyxDQUFWLEVBQWE7QUFDdkMsU0FBSyxJQUFJQyxDQUFKLEVBQU92QixDQUFDLEdBQUcsQ0FBWCxFQUFjSixDQUFDLEdBQUdlLFNBQVMsQ0FBQ0MsTUFBakMsRUFBeUNaLENBQUMsR0FBR0osQ0FBN0MsRUFBZ0RJLENBQUMsRUFBakQsRUFBcUQ7QUFDbkR1QixNQUFBQSxDQUFDLEdBQUdaLFNBQVMsQ0FBQ1gsQ0FBRCxDQUFiOztBQUVBLFdBQUssSUFBSXdCLENBQVQsSUFBY0QsQ0FBZCxFQUFpQjtBQUNmLFlBQUl4QyxNQUFNLENBQUMwQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ3pCLElBQWhDLENBQXFDc0IsQ0FBckMsRUFBd0NDLENBQXhDLENBQUosRUFBZ0RGLENBQUMsQ0FBQ0UsQ0FBRCxDQUFELEdBQU9ELENBQUMsQ0FBQ0MsQ0FBRCxDQUFSO0FBQ2pEO0FBQ0Y7O0FBRUQsV0FBT0YsQ0FBUDtBQUNELEdBVkQ7O0FBWUEsU0FBT0YsVUFBUSxDQUFDTyxLQUFULENBQWUsSUFBZixFQUFxQmhCLFNBQXJCLENBQVA7QUFDRCxDQWREOztBQWdCYWpCLGFBQVFBLFVBQUtrQyxNQUFiLElBQXVCLFVBQVVMLENBQVYsRUFBYW5CLENBQWIsRUFBZ0I7QUFDbEQsTUFBSWtCLENBQUMsR0FBRyxFQUFSOztBQUVBLE9BQUssSUFBSUUsQ0FBVCxJQUFjRCxDQUFkLEVBQWlCO0FBQ2YsUUFBSXhDLE1BQU0sQ0FBQzBDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDekIsSUFBaEMsQ0FBcUNzQixDQUFyQyxFQUF3Q0MsQ0FBeEMsS0FBOENwQixDQUFDLENBQUN5QixPQUFGLENBQVVMLENBQVYsSUFBZSxDQUFqRSxFQUFvRUYsQ0FBQyxDQUFDRSxDQUFELENBQUQsR0FBT0QsQ0FBQyxDQUFDQyxDQUFELENBQVI7QUFDckU7O0FBRUQsTUFBSUQsQ0FBQyxJQUFJLElBQUwsSUFBYSxPQUFPeEMsTUFBTSxDQUFDK0MscUJBQWQsS0FBd0MsVUFBekQsRUFBcUUsS0FBSyxJQUFJOUIsQ0FBQyxHQUFHLENBQVIsRUFBV3dCLENBQUMsR0FBR3pDLE1BQU0sQ0FBQytDLHFCQUFQLENBQTZCUCxDQUE3QixDQUFwQixFQUFxRHZCLENBQUMsR0FBR3dCLENBQUMsQ0FBQ1osTUFBM0QsRUFBbUVaLENBQUMsRUFBcEUsRUFBd0U7QUFDM0ksUUFBSUksQ0FBQyxDQUFDeUIsT0FBRixDQUFVTCxDQUFDLENBQUN4QixDQUFELENBQVgsSUFBa0IsQ0FBbEIsSUFBdUJqQixNQUFNLENBQUMwQyxTQUFQLENBQWlCTSxvQkFBakIsQ0FBc0M5QixJQUF0QyxDQUEyQ3NCLENBQTNDLEVBQThDQyxDQUFDLENBQUN4QixDQUFELENBQS9DLENBQTNCLEVBQWdGc0IsQ0FBQyxDQUFDRSxDQUFDLENBQUN4QixDQUFELENBQUYsQ0FBRCxHQUFVdUIsQ0FBQyxDQUFDQyxDQUFDLENBQUN4QixDQUFELENBQUYsQ0FBWDtBQUNqRjtBQUNELFNBQU9zQixDQUFQO0FBQ0Q7O0FBRUQsSUFBSTdCLFFBQU0sR0FBR0MsYUFBUUEsVUFBS0QsTUFBYixJQUF1QixVQUFVRSxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDbEQsTUFBSUMsQ0FBQyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NILENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxRQUFSLENBQXpDO0FBQ0EsTUFBSSxDQUFDRixDQUFMLEVBQVEsT0FBT0YsQ0FBUDtBQUNSLE1BQUlLLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxJQUFGLENBQU9OLENBQVAsQ0FBUjtBQUFBLE1BQ0lPLENBREo7QUFBQSxNQUVJQyxFQUFFLEdBQUcsRUFGVDtBQUFBLE1BR0lDLENBSEo7O0FBS0EsTUFBSTtBQUNGLFdBQU8sQ0FBQ1IsQ0FBQyxLQUFLLEtBQUssQ0FBWCxJQUFnQkEsQ0FBQyxLQUFLLENBQXZCLEtBQTZCLENBQUMsQ0FBQ00sQ0FBQyxHQUFHRixDQUFDLENBQUNLLElBQUYsRUFBTCxFQUFlQyxJQUFwRCxFQUEwRDtBQUN4REgsTUFBQUEsRUFBRSxDQUFDSSxJQUFILENBQVFMLENBQUMsQ0FBQ00sS0FBVjtBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNkTCxJQUFBQSxDQUFDLEdBQUc7QUFDRkssTUFBQUEsS0FBSyxFQUFFQTtBQURMLEtBQUo7QUFHRCxHQVJELFNBUVU7QUFDUixRQUFJO0FBQ0YsVUFBSVAsQ0FBQyxJQUFJLENBQUNBLENBQUMsQ0FBQ0ksSUFBUixLQUFpQlQsQ0FBQyxHQUFHRyxDQUFDLENBQUMsUUFBRCxDQUF0QixDQUFKLEVBQXVDSCxDQUFDLENBQUNJLElBQUYsQ0FBT0QsQ0FBUDtBQUN4QyxLQUZELFNBRVU7QUFDUixVQUFJSSxDQUFKLEVBQU8sTUFBTUEsQ0FBQyxDQUFDSyxLQUFSO0FBQ1I7QUFDRjs7QUFFRCxTQUFPTixFQUFQO0FBQ0QsQ0F6QkQ7O0FBMkJlVCxhQUFRQSxVQUFLZ0IsUUFBYixJQUF5QixZQUFZO0FBQ2xELE9BQUssSUFBSVAsRUFBRSxHQUFHLEVBQVQsRUFBYUgsQ0FBQyxHQUFHLENBQXRCLEVBQXlCQSxDQUFDLEdBQUdXLFNBQVMsQ0FBQ0MsTUFBdkMsRUFBK0NaLENBQUMsRUFBaEQsRUFBb0Q7QUFDbERHLElBQUFBLEVBQUUsR0FBR0EsRUFBRSxDQUFDVSxNQUFILENBQVVwQixRQUFNLENBQUNrQixTQUFTLENBQUNYLENBQUQsQ0FBVixDQUFoQixDQUFMO0FBQ0Q7O0FBRUQsU0FBT0csRUFBUDtBQUNEOztBQzlERCxJQUFJaUIsVUFBUSxHQUFHMUIsYUFBUUEsVUFBSzBCLFFBQWIsSUFBeUIsWUFBWTtBQUNsREEsRUFBQUEsVUFBUSxHQUFHckMsTUFBTSxDQUFDc0MsTUFBUCxJQUFpQixVQUFVQyxDQUFWLEVBQWE7QUFDdkMsU0FBSyxJQUFJQyxDQUFKLEVBQU92QixDQUFDLEdBQUcsQ0FBWCxFQUFjSixDQUFDLEdBQUdlLFNBQVMsQ0FBQ0MsTUFBakMsRUFBeUNaLENBQUMsR0FBR0osQ0FBN0MsRUFBZ0RJLENBQUMsRUFBakQsRUFBcUQ7QUFDbkR1QixNQUFBQSxDQUFDLEdBQUdaLFNBQVMsQ0FBQ1gsQ0FBRCxDQUFiOztBQUVBLFdBQUssSUFBSXdCLENBQVQsSUFBY0QsQ0FBZCxFQUFpQjtBQUNmLFlBQUl4QyxNQUFNLENBQUMwQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ3pCLElBQWhDLENBQXFDc0IsQ0FBckMsRUFBd0NDLENBQXhDLENBQUosRUFBZ0RGLENBQUMsQ0FBQ0UsQ0FBRCxDQUFELEdBQU9ELENBQUMsQ0FBQ0MsQ0FBRCxDQUFSO0FBQ2pEO0FBQ0Y7O0FBRUQsV0FBT0YsQ0FBUDtBQUNELEdBVkQ7O0FBWUEsU0FBT0YsVUFBUSxDQUFDTyxLQUFULENBQWUsSUFBZixFQUFxQmhCLFNBQXJCLENBQVA7QUFDRCxDQWREOztBQWdCYWpCLGFBQVFBLFVBQUtrQyxNQUFiLElBQXVCLFVBQVVMLENBQVYsRUFBYW5CLENBQWIsRUFBZ0I7QUFDbEQsTUFBSWtCLENBQUMsR0FBRyxFQUFSOztBQUVBLE9BQUssSUFBSUUsQ0FBVCxJQUFjRCxDQUFkLEVBQWlCO0FBQ2YsUUFBSXhDLE1BQU0sQ0FBQzBDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDekIsSUFBaEMsQ0FBcUNzQixDQUFyQyxFQUF3Q0MsQ0FBeEMsS0FBOENwQixDQUFDLENBQUN5QixPQUFGLENBQVVMLENBQVYsSUFBZSxDQUFqRSxFQUFvRUYsQ0FBQyxDQUFDRSxDQUFELENBQUQsR0FBT0QsQ0FBQyxDQUFDQyxDQUFELENBQVI7QUFDckU7O0FBRUQsTUFBSUQsQ0FBQyxJQUFJLElBQUwsSUFBYSxPQUFPeEMsTUFBTSxDQUFDK0MscUJBQWQsS0FBd0MsVUFBekQsRUFBcUUsS0FBSyxJQUFJOUIsQ0FBQyxHQUFHLENBQVIsRUFBV3dCLENBQUMsR0FBR3pDLE1BQU0sQ0FBQytDLHFCQUFQLENBQTZCUCxDQUE3QixDQUFwQixFQUFxRHZCLENBQUMsR0FBR3dCLENBQUMsQ0FBQ1osTUFBM0QsRUFBbUVaLENBQUMsRUFBcEUsRUFBd0U7QUFDM0ksUUFBSUksQ0FBQyxDQUFDeUIsT0FBRixDQUFVTCxDQUFDLENBQUN4QixDQUFELENBQVgsSUFBa0IsQ0FBbEIsSUFBdUJqQixNQUFNLENBQUMwQyxTQUFQLENBQWlCTSxvQkFBakIsQ0FBc0M5QixJQUF0QyxDQUEyQ3NCLENBQTNDLEVBQThDQyxDQUFDLENBQUN4QixDQUFELENBQS9DLENBQTNCLEVBQWdGc0IsQ0FBQyxDQUFDRSxDQUFDLENBQUN4QixDQUFELENBQUYsQ0FBRCxHQUFVdUIsQ0FBQyxDQUFDQyxDQUFDLENBQUN4QixDQUFELENBQUYsQ0FBWDtBQUNqRjtBQUNELFNBQU9zQixDQUFQO0FBQ0Q7O0FBRUQsSUFBSTdCLFFBQU0sR0FBR0MsYUFBUUEsVUFBS0QsTUFBYixJQUF1QixVQUFVRSxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDbEQsTUFBSUMsQ0FBQyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NILENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxRQUFSLENBQXpDO0FBQ0EsTUFBSSxDQUFDRixDQUFMLEVBQVEsT0FBT0YsQ0FBUDtBQUNSLE1BQUlLLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxJQUFGLENBQU9OLENBQVAsQ0FBUjtBQUFBLE1BQ0lPLENBREo7QUFBQSxNQUVJQyxFQUFFLEdBQUcsRUFGVDtBQUFBLE1BR0lDLENBSEo7O0FBS0EsTUFBSTtBQUNGLFdBQU8sQ0FBQ1IsQ0FBQyxLQUFLLEtBQUssQ0FBWCxJQUFnQkEsQ0FBQyxLQUFLLENBQXZCLEtBQTZCLENBQUMsQ0FBQ00sQ0FBQyxHQUFHRixDQUFDLENBQUNLLElBQUYsRUFBTCxFQUFlQyxJQUFwRCxFQUEwRDtBQUN4REgsTUFBQUEsRUFBRSxDQUFDSSxJQUFILENBQVFMLENBQUMsQ0FBQ00sS0FBVjtBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNkTCxJQUFBQSxDQUFDLEdBQUc7QUFDRkssTUFBQUEsS0FBSyxFQUFFQTtBQURMLEtBQUo7QUFHRCxHQVJELFNBUVU7QUFDUixRQUFJO0FBQ0YsVUFBSVAsQ0FBQyxJQUFJLENBQUNBLENBQUMsQ0FBQ0ksSUFBUixLQUFpQlQsQ0FBQyxHQUFHRyxDQUFDLENBQUMsUUFBRCxDQUF0QixDQUFKLEVBQXVDSCxDQUFDLENBQUNJLElBQUYsQ0FBT0QsQ0FBUDtBQUN4QyxLQUZELFNBRVU7QUFDUixVQUFJSSxDQUFKLEVBQU8sTUFBTUEsQ0FBQyxDQUFDSyxLQUFSO0FBQ1I7QUFDRjs7QUFFRCxTQUFPTixFQUFQO0FBQ0QsQ0F6QkQ7O0FBMkJlVCxhQUFRQSxVQUFLZ0IsUUFBYixJQUF5QixZQUFZO0FBQ2xELE9BQUssSUFBSVAsRUFBRSxHQUFHLEVBQVQsRUFBYUgsQ0FBQyxHQUFHLENBQXRCLEVBQXlCQSxDQUFDLEdBQUdXLFNBQVMsQ0FBQ0MsTUFBdkMsRUFBK0NaLENBQUMsRUFBaEQsRUFBb0Q7QUFDbERHLElBQUFBLEVBQUUsR0FBR0EsRUFBRSxDQUFDVSxNQUFILENBQVVwQixRQUFNLENBQUNrQixTQUFTLENBQUNYLENBQUQsQ0FBVixDQUFoQixDQUFMO0FBQ0Q7O0FBRUQsU0FBT0csRUFBUDtBQUNEOztBQzdERCxJQUFJNkIsYUFBYSxnQkFBZ0JDLEtBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUFqQztBQUNBRixhQUFhLENBQUNHLFdBQWQsR0FBNEIseUJBQTVCOztBQ0ZBLElBQUlmLFVBQVEsR0FBRzFCLGFBQVFBLFVBQUswQixRQUFiLElBQXlCLFlBQVk7QUFDbERBLEVBQUFBLFVBQVEsR0FBR3JDLE1BQU0sQ0FBQ3NDLE1BQVAsSUFBaUIsVUFBVUMsQ0FBVixFQUFhO0FBQ3ZDLFNBQUssSUFBSUMsQ0FBSixFQUFPdkIsQ0FBQyxHQUFHLENBQVgsRUFBY0osQ0FBQyxHQUFHZSxTQUFTLENBQUNDLE1BQWpDLEVBQXlDWixDQUFDLEdBQUdKLENBQTdDLEVBQWdESSxDQUFDLEVBQWpELEVBQXFEO0FBQ25EdUIsTUFBQUEsQ0FBQyxHQUFHWixTQUFTLENBQUNYLENBQUQsQ0FBYjs7QUFFQSxXQUFLLElBQUl3QixDQUFULElBQWNELENBQWQsRUFBaUI7QUFDZixZQUFJeEMsTUFBTSxDQUFDMEMsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0N6QixJQUFoQyxDQUFxQ3NCLENBQXJDLEVBQXdDQyxDQUF4QyxDQUFKLEVBQWdERixDQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFPRCxDQUFDLENBQUNDLENBQUQsQ0FBUjtBQUNqRDtBQUNGOztBQUVELFdBQU9GLENBQVA7QUFDRCxHQVZEOztBQVlBLFNBQU9GLFVBQVEsQ0FBQ08sS0FBVCxDQUFlLElBQWYsRUFBcUJoQixTQUFyQixDQUFQO0FBQ0QsQ0FkRDs7QUFnQmFqQixhQUFRQSxVQUFLa0MsTUFBYixJQUF1QixVQUFVTCxDQUFWLEVBQWFuQixDQUFiLEVBQWdCO0FBQ2xELE1BQUlrQixDQUFDLEdBQUcsRUFBUjs7QUFFQSxPQUFLLElBQUlFLENBQVQsSUFBY0QsQ0FBZCxFQUFpQjtBQUNmLFFBQUl4QyxNQUFNLENBQUMwQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ3pCLElBQWhDLENBQXFDc0IsQ0FBckMsRUFBd0NDLENBQXhDLEtBQThDcEIsQ0FBQyxDQUFDeUIsT0FBRixDQUFVTCxDQUFWLElBQWUsQ0FBakUsRUFBb0VGLENBQUMsQ0FBQ0UsQ0FBRCxDQUFELEdBQU9ELENBQUMsQ0FBQ0MsQ0FBRCxDQUFSO0FBQ3JFOztBQUVELE1BQUlELENBQUMsSUFBSSxJQUFMLElBQWEsT0FBT3hDLE1BQU0sQ0FBQytDLHFCQUFkLEtBQXdDLFVBQXpELEVBQXFFLEtBQUssSUFBSTlCLENBQUMsR0FBRyxDQUFSLEVBQVd3QixDQUFDLEdBQUd6QyxNQUFNLENBQUMrQyxxQkFBUCxDQUE2QlAsQ0FBN0IsQ0FBcEIsRUFBcUR2QixDQUFDLEdBQUd3QixDQUFDLENBQUNaLE1BQTNELEVBQW1FWixDQUFDLEVBQXBFLEVBQXdFO0FBQzNJLFFBQUlJLENBQUMsQ0FBQ3lCLE9BQUYsQ0FBVUwsQ0FBQyxDQUFDeEIsQ0FBRCxDQUFYLElBQWtCLENBQWxCLElBQXVCakIsTUFBTSxDQUFDMEMsU0FBUCxDQUFpQk0sb0JBQWpCLENBQXNDOUIsSUFBdEMsQ0FBMkNzQixDQUEzQyxFQUE4Q0MsQ0FBQyxDQUFDeEIsQ0FBRCxDQUEvQyxDQUEzQixFQUFnRnNCLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDeEIsQ0FBRCxDQUFGLENBQUQsR0FBVXVCLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDeEIsQ0FBRCxDQUFGLENBQVg7QUFDakY7QUFDRCxTQUFPc0IsQ0FBUDtBQUNEOztBQUVELElBQUk3QixRQUFNLEdBQUdDLGFBQVFBLFVBQUtELE1BQWIsSUFBdUIsVUFBVUUsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ2xELE1BQUlDLENBQUMsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDSCxDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsUUFBUixDQUF6QztBQUNBLE1BQUksQ0FBQ0YsQ0FBTCxFQUFRLE9BQU9GLENBQVA7QUFDUixNQUFJSyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksSUFBRixDQUFPTixDQUFQLENBQVI7QUFBQSxNQUNJTyxDQURKO0FBQUEsTUFFSUMsRUFBRSxHQUFHLEVBRlQ7QUFBQSxNQUdJQyxDQUhKOztBQUtBLE1BQUk7QUFDRixXQUFPLENBQUNSLENBQUMsS0FBSyxLQUFLLENBQVgsSUFBZ0JBLENBQUMsS0FBSyxDQUF2QixLQUE2QixDQUFDLENBQUNNLENBQUMsR0FBR0YsQ0FBQyxDQUFDSyxJQUFGLEVBQUwsRUFBZUMsSUFBcEQsRUFBMEQ7QUFDeERILE1BQUFBLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRTCxDQUFDLENBQUNNLEtBQVY7QUFDRDtBQUNGLEdBSkQsQ0FJRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEwsSUFBQUEsQ0FBQyxHQUFHO0FBQ0ZLLE1BQUFBLEtBQUssRUFBRUE7QUFETCxLQUFKO0FBR0QsR0FSRCxTQVFVO0FBQ1IsUUFBSTtBQUNGLFVBQUlQLENBQUMsSUFBSSxDQUFDQSxDQUFDLENBQUNJLElBQVIsS0FBaUJULENBQUMsR0FBR0csQ0FBQyxDQUFDLFFBQUQsQ0FBdEIsQ0FBSixFQUF1Q0gsQ0FBQyxDQUFDSSxJQUFGLENBQU9ELENBQVA7QUFDeEMsS0FGRCxTQUVVO0FBQ1IsVUFBSUksQ0FBSixFQUFPLE1BQU1BLENBQUMsQ0FBQ0ssS0FBUjtBQUNSO0FBQ0Y7O0FBRUQsU0FBT04sRUFBUDtBQUNELENBekJEOztBQTJCZVQsYUFBUUEsVUFBS2dCLFFBQWIsSUFBeUIsWUFBWTtBQUNsRCxPQUFLLElBQUlQLEVBQUUsR0FBRyxFQUFULEVBQWFILENBQUMsR0FBRyxDQUF0QixFQUF5QkEsQ0FBQyxHQUFHVyxTQUFTLENBQUNDLE1BQXZDLEVBQStDWixDQUFDLEVBQWhELEVBQW9EO0FBQ2xERyxJQUFBQSxFQUFFLEdBQUdBLEVBQUUsQ0FBQ1UsTUFBSCxDQUFVcEIsUUFBTSxDQUFDa0IsU0FBUyxDQUFDWCxDQUFELENBQVYsQ0FBaEIsQ0FBTDtBQUNEOztBQUVELFNBQU9HLEVBQVA7QUFDRDs7QUFzSHdCNkIsYUFBYSxDQUFDSTs7QUNwTGhDLFNBQVNDLGdCQUFULENBQTBCQyxNQUExQixFQUFrQ0MsY0FBbEMsRUFBa0Q7QUFDdkQsTUFBSSxDQUFDRCxNQUFMLEVBQWE7QUFDWCxXQUFPQyxjQUFQO0FBQ0Q7O0FBRUQsTUFBSUMsYUFBSjs7QUFFQSxNQUFJLE9BQU9GLE1BQVAsS0FBa0IsVUFBdEIsRUFBa0M7QUFDaENFLElBQUFBLGFBQWEsR0FBR0YsTUFBTSxFQUF0QjtBQUNELEdBRkQsTUFFTyxJQUFJLGFBQWFBLE1BQWpCLEVBQXlCO0FBQzlCRSxJQUFBQSxhQUFhLEdBQUdGLE1BQU0sQ0FBQ0csT0FBdkI7QUFDRCxHQUZNLE1BRUE7QUFDTEQsSUFBQUEsYUFBYSxHQUFHRixNQUFoQjtBQUNEOztBQUVELFNBQU9FLGFBQVA7QUFDRDs7QUNoQkQsSUFBSS9DLFFBQU0sR0FBR0MsYUFBUUEsVUFBS0QsTUFBYixJQUF1QixVQUFVRSxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDbEQsTUFBSUMsQ0FBQyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NILENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxRQUFSLENBQXpDO0FBQ0EsTUFBSSxDQUFDRixDQUFMLEVBQVEsT0FBT0YsQ0FBUDtBQUNSLE1BQUlLLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxJQUFGLENBQU9OLENBQVAsQ0FBUjtBQUFBLE1BQ0lPLENBREo7QUFBQSxNQUVJQyxFQUFFLEdBQUcsRUFGVDtBQUFBLE1BR0lDLENBSEo7O0FBS0EsTUFBSTtBQUNGLFdBQU8sQ0FBQ1IsQ0FBQyxLQUFLLEtBQUssQ0FBWCxJQUFnQkEsQ0FBQyxLQUFLLENBQXZCLEtBQTZCLENBQUMsQ0FBQ00sQ0FBQyxHQUFHRixDQUFDLENBQUNLLElBQUYsRUFBTCxFQUFlQyxJQUFwRCxFQUEwRDtBQUN4REgsTUFBQUEsRUFBRSxDQUFDSSxJQUFILENBQVFMLENBQUMsQ0FBQ00sS0FBVjtBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNkTCxJQUFBQSxDQUFDLEdBQUc7QUFDRkssTUFBQUEsS0FBSyxFQUFFQTtBQURMLEtBQUo7QUFHRCxHQVJELFNBUVU7QUFDUixRQUFJO0FBQ0YsVUFBSVAsQ0FBQyxJQUFJLENBQUNBLENBQUMsQ0FBQ0ksSUFBUixLQUFpQlQsQ0FBQyxHQUFHRyxDQUFDLENBQUMsUUFBRCxDQUF0QixDQUFKLEVBQXVDSCxDQUFDLENBQUNJLElBQUYsQ0FBT0QsQ0FBUDtBQUN4QyxLQUZELFNBRVU7QUFDUixVQUFJSSxDQUFKLEVBQU8sTUFBTUEsQ0FBQyxDQUFDSyxLQUFSO0FBQ1I7QUFDRjs7QUFFRCxTQUFPTixFQUFQO0FBQ0QsQ0F6QkQ7O0FBNkJBLFNBQVN1QyxTQUFULENBQW1CQyxZQUFuQixFQUFpQ0MsWUFBakMsRUFBK0M7QUFDN0MsTUFBSUQsWUFBWSxLQUFLLEtBQUssQ0FBMUIsRUFBNkI7QUFDM0JBLElBQUFBLFlBQVksR0FBRyxLQUFmO0FBQ0Q7O0FBRUQsTUFBSUUsRUFBRSxHQUFHcEQsUUFBTSxDQUFDcUQsUUFBUSxDQUFDSCxZQUFELENBQVQsRUFBeUIsQ0FBekIsQ0FBZjtBQUFBLE1BQ0lJLEtBQUssR0FBR0YsRUFBRSxDQUFDLENBQUQsQ0FEZDtBQUFBLE1BRUlHLFFBQVEsR0FBR0gsRUFBRSxDQUFDLENBQUQsQ0FGakI7O0FBSUEsTUFBSUksT0FBTyxHQUFHQyxPQUFPLENBQUMsWUFBWTtBQUNoQyxRQUFJQyxrQkFBa0IsR0FBR1AsWUFBWSxLQUFLUSxTQUFqQixHQUE2QixDQUFDVCxZQUE5QixHQUE2Q0MsWUFBdEUsQ0FEZ0M7O0FBR2hDLFFBQUlTLE1BQU0sR0FBRyxTQUFTQSxNQUFULENBQWdCN0MsS0FBaEIsRUFBdUI7QUFDbEM7QUFDQSxVQUFJQSxLQUFLLEtBQUs0QyxTQUFkLEVBQXlCO0FBQ3ZCSixRQUFBQSxRQUFRLENBQUN4QyxLQUFELENBQVI7QUFDQTtBQUNEOztBQUVEd0MsTUFBQUEsUUFBUSxDQUFDLFVBQVV6QixDQUFWLEVBQWE7QUFDcEIsZUFBT0EsQ0FBQyxLQUFLb0IsWUFBTixHQUFxQlEsa0JBQXJCLEdBQTBDUixZQUFqRDtBQUNELE9BRk8sQ0FBUjtBQUdELEtBVkQsQ0FIZ0M7OztBQWdCaEMsUUFBSVcsT0FBTyxHQUFHLFNBQVNBLE9BQVQsR0FBbUI7QUFDL0IsYUFBT04sUUFBUSxDQUFDTCxZQUFELENBQWY7QUFDRCxLQUZELENBaEJnQzs7O0FBcUJoQyxRQUFJWSxRQUFRLEdBQUcsU0FBU0EsUUFBVCxHQUFvQjtBQUNqQyxhQUFPUCxRQUFRLENBQUNHLGtCQUFELENBQWY7QUFDRCxLQUZEOztBQUlBLFdBQU87QUFDTEUsTUFBQUEsTUFBTSxFQUFFQSxNQURIO0FBRUxDLE1BQUFBLE9BQU8sRUFBRUEsT0FGSjtBQUdMQyxNQUFBQSxRQUFRLEVBQUVBO0FBSEwsS0FBUDtBQUtELEdBOUJvQixFQThCbEIsQ0FBQ1osWUFBRCxFQUFlQyxZQUFmLENBOUJrQixDQUFyQjtBQStCQSxTQUFPLENBQUNHLEtBQUQsRUFBUUUsT0FBUixDQUFQO0FBQ0Q7O0FDdEVELElBQUl4RCxRQUFNLEdBQUdDLGFBQVFBLFVBQUtELE1BQWIsSUFBdUIsVUFBVUUsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ2xELE1BQUlDLENBQUMsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDSCxDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsUUFBUixDQUF6QztBQUNBLE1BQUksQ0FBQ0YsQ0FBTCxFQUFRLE9BQU9GLENBQVA7QUFDUixNQUFJSyxDQUFDLEdBQUdILENBQUMsQ0FBQ0ksSUFBRixDQUFPTixDQUFQLENBQVI7QUFBQSxNQUNJTyxDQURKO0FBQUEsTUFFSUMsRUFBRSxHQUFHLEVBRlQ7QUFBQSxNQUdJQyxDQUhKOztBQUtBLE1BQUk7QUFDRixXQUFPLENBQUNSLENBQUMsS0FBSyxLQUFLLENBQVgsSUFBZ0JBLENBQUMsS0FBSyxDQUF2QixLQUE2QixDQUFDLENBQUNNLENBQUMsR0FBR0YsQ0FBQyxDQUFDSyxJQUFGLEVBQUwsRUFBZUMsSUFBcEQsRUFBMEQ7QUFDeERILE1BQUFBLEVBQUUsQ0FBQ0ksSUFBSCxDQUFRTCxDQUFDLENBQUNNLEtBQVY7QUFDRDtBQUNGLEdBSkQsQ0FJRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEwsSUFBQUEsQ0FBQyxHQUFHO0FBQ0ZLLE1BQUFBLEtBQUssRUFBRUE7QUFETCxLQUFKO0FBR0QsR0FSRCxTQVFVO0FBQ1IsUUFBSTtBQUNGLFVBQUlQLENBQUMsSUFBSSxDQUFDQSxDQUFDLENBQUNJLElBQVIsS0FBaUJULENBQUMsR0FBR0csQ0FBQyxDQUFDLFFBQUQsQ0FBdEIsQ0FBSixFQUF1Q0gsQ0FBQyxDQUFDSSxJQUFGLENBQU9ELENBQVA7QUFDeEMsS0FGRCxTQUVVO0FBQ1IsVUFBSUksQ0FBSixFQUFPLE1BQU1BLENBQUMsQ0FBQ0ssS0FBUjtBQUNSO0FBQ0Y7O0FBRUQsU0FBT04sRUFBUDtBQUNELENBekJEO0FBNkJlLFNBQVNxRCxVQUFULENBQW9CYixZQUFwQixFQUFrQztBQUMvQyxNQUFJQSxZQUFZLEtBQUssS0FBSyxDQUExQixFQUE2QjtBQUMzQkEsSUFBQUEsWUFBWSxHQUFHLEtBQWY7QUFDRDs7QUFFRCxNQUFJRSxFQUFFLEdBQUdwRCxRQUFNLENBQUNpRCxTQUFTLENBQUNDLFlBQUQsQ0FBVixFQUEwQixDQUExQixDQUFmO0FBQUEsTUFDSUksS0FBSyxHQUFHRixFQUFFLENBQUMsQ0FBRCxDQURkO0FBQUEsTUFFSVEsTUFBTSxHQUFHUixFQUFFLENBQUMsQ0FBRCxDQUFGLENBQU1RLE1BRm5COztBQUlBLE1BQUlKLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFlBQVk7QUFDaEMsUUFBSU8sT0FBTyxHQUFHLFNBQVNBLE9BQVQsR0FBbUI7QUFDL0IsYUFBT0osTUFBTSxDQUFDLElBQUQsQ0FBYjtBQUNELEtBRkQ7O0FBSUEsUUFBSUssUUFBUSxHQUFHLFNBQVNBLFFBQVQsR0FBb0I7QUFDakMsYUFBT0wsTUFBTSxDQUFDLEtBQUQsQ0FBYjtBQUNELEtBRkQ7O0FBSUEsV0FBTztBQUNMQSxNQUFBQSxNQUFNLEVBQUVBLE1BREg7QUFFTEksTUFBQUEsT0FBTyxFQUFFQSxPQUZKO0FBR0xDLE1BQUFBLFFBQVEsRUFBRUE7QUFITCxLQUFQO0FBS0QsR0Fkb0IsRUFjbEIsQ0FBQ0wsTUFBRCxDQWRrQixDQUFyQjtBQWVBLFNBQU8sQ0FBQ04sS0FBRCxFQUFRRSxPQUFSLENBQVA7QUFDRDs7QUNuREQsU0FBU1UsZ0JBQVQsQ0FBMEJDLFNBQTFCLEVBQXFDQyxPQUFyQyxFQUE4Q0MsT0FBOUMsRUFBdUQ7QUFDckQsTUFBSUEsT0FBTyxLQUFLLEtBQUssQ0FBckIsRUFBd0I7QUFDdEJBLElBQUFBLE9BQU8sR0FBRyxFQUFWO0FBQ0Q7O0FBRUQsTUFBSUMsVUFBVSxHQUFHQyxNQUFNLEVBQXZCO0FBQ0FELEVBQUFBLFVBQVUsQ0FBQ3RCLE9BQVgsR0FBcUJvQixPQUFyQjtBQUNBSSxFQUFBQSxTQUFTLENBQUMsWUFBWTtBQUNwQixRQUFJekIsYUFBYSxHQUFHSCxnQkFBZ0IsQ0FBQ3lCLE9BQU8sQ0FBQ3hCLE1BQVQsRUFBaUJ0QixNQUFqQixDQUFwQzs7QUFFQSxRQUFJLENBQUN3QixhQUFhLENBQUN2QixnQkFBbkIsRUFBcUM7QUFDbkM7QUFDRDs7QUFFRCxRQUFJaUQsYUFBYSxHQUFHLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQ2hELGFBQU9KLFVBQVUsQ0FBQ3RCLE9BQVgsSUFBc0JzQixVQUFVLENBQUN0QixPQUFYLENBQW1CMEIsS0FBbkIsQ0FBN0I7QUFDRCxLQUZEOztBQUlBM0IsSUFBQUEsYUFBYSxDQUFDdkIsZ0JBQWQsQ0FBK0IyQyxTQUEvQixFQUEwQ00sYUFBMUMsRUFBeUQ7QUFDdkRFLE1BQUFBLE9BQU8sRUFBRU4sT0FBTyxDQUFDTSxPQURzQztBQUV2REMsTUFBQUEsSUFBSSxFQUFFUCxPQUFPLENBQUNPLElBRnlDO0FBR3ZEQyxNQUFBQSxPQUFPLEVBQUVSLE9BQU8sQ0FBQ1E7QUFIc0MsS0FBekQ7QUFLQSxXQUFPLFlBQVk7QUFDakI5QixNQUFBQSxhQUFhLENBQUMrQixtQkFBZCxDQUFrQ1gsU0FBbEMsRUFBNkNNLGFBQTdDLEVBQTREO0FBQzFERSxRQUFBQSxPQUFPLEVBQUVOLE9BQU8sQ0FBQ007QUFEeUMsT0FBNUQ7QUFHRCxLQUpEO0FBS0QsR0FyQlEsRUFxQk4sQ0FBQ1IsU0FBRCxFQUFZRSxPQUFPLENBQUN4QixNQUFwQixFQUE0QndCLE9BQU8sQ0FBQ00sT0FBcEMsRUFBNkNOLE9BQU8sQ0FBQ08sSUFBckQsRUFBMkRQLE9BQU8sQ0FBQ1EsT0FBbkUsQ0FyQk0sQ0FBVDtBQXNCRDs7QUMvQmMsU0FBU0UsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEJDLElBQTlCLEVBQW9DO0FBQ2pELE1BQUlqQyxPQUFPLEdBQUd1QixNQUFNLENBQUM7QUFDbkJVLElBQUFBLElBQUksRUFBRUEsSUFEYTtBQUVuQkMsSUFBQUEsR0FBRyxFQUFFdkIsU0FGYztBQUduQndCLElBQUFBLFdBQVcsRUFBRTtBQUhNLEdBQUQsQ0FBTixDQUlYbkMsT0FKSDs7QUFNQSxNQUFJQSxPQUFPLENBQUNtQyxXQUFSLEtBQXdCLEtBQXhCLElBQWlDLENBQUNDLFdBQVcsQ0FBQ3BDLE9BQU8sQ0FBQ2lDLElBQVQsRUFBZUEsSUFBZixDQUFqRCxFQUF1RTtBQUNyRWpDLElBQUFBLE9BQU8sQ0FBQ2lDLElBQVIsR0FBZUEsSUFBZjtBQUNBakMsSUFBQUEsT0FBTyxDQUFDa0MsR0FBUixHQUFjRixPQUFPLEVBQXJCO0FBQ0FoQyxJQUFBQSxPQUFPLENBQUNtQyxXQUFSLEdBQXNCLElBQXRCO0FBQ0Q7O0FBRUQsU0FBT25DLE9BQU8sQ0FBQ2tDLEdBQWY7QUFDRDs7QUFFRCxTQUFTRSxXQUFULENBQXFCQyxPQUFyQixFQUE4QkosSUFBOUIsRUFBb0M7QUFDbEMsTUFBSUksT0FBTyxLQUFLSixJQUFoQixFQUFzQixPQUFPLElBQVA7O0FBRXRCLE9BQUssSUFBSTFFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4RSxPQUFPLENBQUNsRSxNQUE1QixFQUFvQ1osQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxRQUFJOEUsT0FBTyxDQUFDOUUsQ0FBRCxDQUFQLEtBQWUwRSxJQUFJLENBQUMxRSxDQUFELENBQXZCLEVBQTRCLE9BQU8sS0FBUDtBQUM3Qjs7QUFFRCxTQUFPLElBQVA7QUFDRDs7QUN6QkQsSUFBSVAsUUFBTSxHQUFHQyxhQUFRQSxVQUFLRCxNQUFiLElBQXVCLFVBQVVFLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNsRCxNQUFJQyxDQUFDLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixJQUFnQ0gsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLFFBQVIsQ0FBekM7QUFDQSxNQUFJLENBQUNGLENBQUwsRUFBUSxPQUFPRixDQUFQO0FBQ1IsTUFBSUssQ0FBQyxHQUFHSCxDQUFDLENBQUNJLElBQUYsQ0FBT04sQ0FBUCxDQUFSO0FBQUEsTUFDSU8sQ0FESjtBQUFBLE1BRUlDLEVBQUUsR0FBRyxFQUZUO0FBQUEsTUFHSUMsQ0FISjs7QUFLQSxNQUFJO0FBQ0YsV0FBTyxDQUFDUixDQUFDLEtBQUssS0FBSyxDQUFYLElBQWdCQSxDQUFDLEtBQUssQ0FBdkIsS0FBNkIsQ0FBQyxDQUFDTSxDQUFDLEdBQUdGLENBQUMsQ0FBQ0ssSUFBRixFQUFMLEVBQWVDLElBQXBELEVBQTBEO0FBQ3hESCxNQUFBQSxFQUFFLENBQUNJLElBQUgsQ0FBUUwsQ0FBQyxDQUFDTSxLQUFWO0FBQ0Q7QUFDRixHQUpELENBSUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RMLElBQUFBLENBQUMsR0FBRztBQUNGSyxNQUFBQSxLQUFLLEVBQUVBO0FBREwsS0FBSjtBQUdELEdBUkQsU0FRVTtBQUNSLFFBQUk7QUFDRixVQUFJUCxDQUFDLElBQUksQ0FBQ0EsQ0FBQyxDQUFDSSxJQUFSLEtBQWlCVCxDQUFDLEdBQUdHLENBQUMsQ0FBQyxRQUFELENBQXRCLENBQUosRUFBdUNILENBQUMsQ0FBQ0ksSUFBRixDQUFPRCxDQUFQO0FBQ3hDLEtBRkQsU0FFVTtBQUNSLFVBQUlJLENBQUosRUFBTyxNQUFNQSxDQUFDLENBQUNLLEtBQVI7QUFDUjtBQUNGOztBQUVELFNBQU9OLEVBQVA7QUFDRCxDQXpCRDtBQTZCQSxnQkFBZ0IsVUFBVW1DLE1BQVYsRUFBa0J3QixPQUFsQixFQUEyQjtBQUN6QyxNQUFJakIsRUFBRSxHQUFHaUIsT0FBTyxJQUFJLEVBQXBCO0FBQUEsTUFDSWlCLE9BQU8sR0FBR2xDLEVBQUUsQ0FBQ2tDLE9BRGpCO0FBQUEsTUFFSUMsT0FBTyxHQUFHbkMsRUFBRSxDQUFDbUMsT0FGakI7O0FBSUEsTUFBSUMsRUFBRSxHQUFHeEYsUUFBTSxDQUFDK0QsVUFBVSxDQUFDLEtBQUQsQ0FBWCxFQUFvQixDQUFwQixDQUFmO0FBQUEsTUFDSVQsS0FBSyxHQUFHa0MsRUFBRSxDQUFDLENBQUQsQ0FEZDtBQUFBLE1BRUlDLEVBQUUsR0FBR0QsRUFBRSxDQUFDLENBQUQsQ0FGWDtBQUFBLE1BR0l4QixPQUFPLEdBQUd5QixFQUFFLENBQUN6QixPQUhqQjtBQUFBLE1BSUlDLFFBQVEsR0FBR3dCLEVBQUUsQ0FBQ3hCLFFBSmxCOztBQU1BQyxFQUFBQSxnQkFBZ0IsQ0FBQyxZQUFELEVBQWUsWUFBWTtBQUN6Q29CLElBQUFBLE9BQU8sSUFBSUEsT0FBTyxFQUFsQjtBQUNBdEIsSUFBQUEsT0FBTztBQUNSLEdBSGUsRUFHYjtBQUNEbkIsSUFBQUEsTUFBTSxFQUFFQTtBQURQLEdBSGEsQ0FBaEI7QUFNQXFCLEVBQUFBLGdCQUFnQixDQUFDLFlBQUQsRUFBZSxZQUFZO0FBQ3pDcUIsSUFBQUEsT0FBTyxJQUFJQSxPQUFPLEVBQWxCO0FBQ0F0QixJQUFBQSxRQUFRO0FBQ1QsR0FIZSxFQUdiO0FBQ0RwQixJQUFBQSxNQUFNLEVBQUVBO0FBRFAsR0FIYSxDQUFoQjtBQU1BLFNBQU9TLEtBQVA7QUFDRCxDQXhCRDs7QUM3QkEsSUFBSXRELE1BQU0sR0FBR0MsYUFBUUEsVUFBS0QsTUFBYixJQUF1QixVQUFVRSxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDbEQsTUFBSUMsQ0FBQyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NILENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxRQUFSLENBQXpDO0FBQ0EsTUFBSSxDQUFDRixDQUFMLEVBQVEsT0FBT0YsQ0FBUDtBQUNSLE1BQUlLLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxJQUFGLENBQU9OLENBQVAsQ0FBUjtBQUFBLE1BQ0lPLENBREo7QUFBQSxNQUVJQyxFQUFFLEdBQUcsRUFGVDtBQUFBLE1BR0lDLENBSEo7O0FBS0EsTUFBSTtBQUNGLFdBQU8sQ0FBQ1IsQ0FBQyxLQUFLLEtBQUssQ0FBWCxJQUFnQkEsQ0FBQyxLQUFLLENBQXZCLEtBQTZCLENBQUMsQ0FBQ00sQ0FBQyxHQUFHRixDQUFDLENBQUNLLElBQUYsRUFBTCxFQUFlQyxJQUFwRCxFQUEwRDtBQUN4REgsTUFBQUEsRUFBRSxDQUFDSSxJQUFILENBQVFMLENBQUMsQ0FBQ00sS0FBVjtBQUNEO0FBQ0YsR0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNkTCxJQUFBQSxDQUFDLEdBQUc7QUFDRkssTUFBQUEsS0FBSyxFQUFFQTtBQURMLEtBQUo7QUFHRCxHQVJELFNBUVU7QUFDUixRQUFJO0FBQ0YsVUFBSVAsQ0FBQyxJQUFJLENBQUNBLENBQUMsQ0FBQ0ksSUFBUixLQUFpQlQsQ0FBQyxHQUFHRyxDQUFDLENBQUMsUUFBRCxDQUF0QixDQUFKLEVBQXVDSCxDQUFDLENBQUNJLElBQUYsQ0FBT0QsQ0FBUDtBQUN4QyxLQUZELFNBRVU7QUFDUixVQUFJSSxDQUFKLEVBQU8sTUFBTUEsQ0FBQyxDQUFDSyxLQUFSO0FBQ1I7QUFDRjs7QUFFRCxTQUFPTixFQUFQO0FBQ0QsQ0F6QkQ7O0FBMkJlVCxhQUFRQSxVQUFLZ0IsUUFBYixJQUF5QixZQUFZO0FBQ2xELE9BQUssSUFBSVAsRUFBRSxHQUFHLEVBQVQsRUFBYUgsQ0FBQyxHQUFHLENBQXRCLEVBQXlCQSxDQUFDLEdBQUdXLFNBQVMsQ0FBQ0MsTUFBdkMsRUFBK0NaLENBQUMsRUFBaEQsRUFBb0Q7QUFDbERHLElBQUFBLEVBQUUsR0FBR0EsRUFBRSxDQUFDVSxNQUFILENBQVVwQixNQUFNLENBQUNrQixTQUFTLENBQUNYLENBQUQsQ0FBVixDQUFoQixDQUFMO0FBQ0Q7O0FBRUQsU0FBT0csRUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENELElBQUEsa0JBQUEsR0FBQSxZQUFBO0FBQUEsV0FBQSxrQkFBQSxHQUFBO0FBV0U7Ozs7QUFJRztBQUNLLFNBQUEsWUFBQSxHQUNOLE9BQU8sUUFBUCxLQUFvQixXQUFwQixHQUNJLFFBQVEsQ0FBQyxhQUFULENBQXVCLE1BQXZCLENBREosR0FFSSxTQUhFO0FBa0RUO0FBN0NDOzs7Ozs7O0FBT0c7OztBQUNVLEVBQUEsa0JBQUEsQ0FBQSxTQUFBLENBQUEsVUFBQSxHQUFiLFVBQXdCLEdBQXhCLEVBQW1DOzs7Ozs7O0FBQzdCLFlBQUEsaUNBQWlDLEdBQUcsS0FBcEM7O0FBQ0osaUJBQUEsRUFBQSxHQUFBLENBQUEsRUFBaUMsRUFBQSxHQUFBLGtCQUFrQixDQUFDLG9CQUFwRCxFQUFpQyxFQUFBLEdBQUEsRUFBQSxDQUFBLE1BQWpDLEVBQWlDLEVBQUEsRUFBakMsRUFBd0U7QUFBL0QsY0FBQSxvQkFBb0IsR0FBQSxFQUFBLENBQUEsRUFBQSxDQUFwQjtBQUNQLGtCQUFJLG9CQUFvQixDQUFDLEdBQXJCLEtBQTZCLEdBQWpDLEVBQ0UsaUNBQWlDLEdBQUcsSUFBcEM7QUFBeUM7O2dCQUN6QyxFQUFBLGlDQUFpQyxLQUFLLEtBQXRDLEdBQUEsT0FBQSxDQUFBO0FBQUE7QUFBQSxjQUFBLENBQUEsQ0FBQTtBQUN5QixtQkFBQSxDQUFBO0FBQUE7QUFBQSxjQUFNLEtBQUssbUJBQUwsQ0FBeUIsR0FBekIsQ0FBTixDQUFBOzs7QUFBckIsWUFBQSxrQkFBa0IsR0FBRyxFQUFBLENBQUEsSUFBQSxFQUFyQjtBQUNOLFlBQUEsa0JBQWtCLENBQUMsb0JBQW5CLENBQXdDLElBQXhDLENBQTZDO0FBQzNDLGNBQUEsR0FBRyxFQUFBLEdBRHdDO0FBRTNDLGNBQUEsaUJBQWlCLEVBQUU7QUFGd0IsYUFBN0M7Ozs7QUFLRixnQkFBSSxPQUFPLG1CQUFQLEtBQStCLFVBQW5DLEVBQ0UsTUFBTSxJQUFJLEtBQUosQ0FBVSxvREFBVixDQUFOOzs7Ozs7O0FBQ0gsR0FkWTtBQWdCYjs7Ozs7O0FBTUc7OztBQUNLLEVBQUEsa0JBQUEsQ0FBQSxTQUFBLENBQUEsbUJBQUEsR0FBUixVQUE0QixHQUE1QixFQUF1QztBQUF2QyxRQUFBLEtBQUEsR0FBQSxJQUFBOztBQUNFLFdBQU8sSUFBSSxPQUFKLENBQStCLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBZ0I7QUFDcEQsVUFBSSxPQUFPLEtBQUksQ0FBQyxZQUFaLEtBQTZCLFdBQWpDLEVBQThDO0FBQzVDLFlBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQWpCOztBQUNBLFFBQUEsVUFBVSxDQUFDLElBQVgsR0FBa0IsaUJBQWxCO0FBQ0EsUUFBQSxVQUFVLENBQUMsS0FBWCxHQUFtQixJQUFuQjtBQUNBLFFBQUEsVUFBVSxDQUFDLEdBQVgsR0FBaUIsR0FBakI7O0FBQ0EsUUFBQSxVQUFVLENBQUMsTUFBWCxHQUFvQixZQUFBO0FBQU0saUJBQUEsT0FBTyxDQUFQLFVBQU8sQ0FBUDtBQUFvQixTQUE5Qzs7QUFDQSxRQUFBLFVBQVUsQ0FBQyxPQUFYLEdBQXFCLFVBQUMsS0FBRCxFQUFzQjtBQUN6QyxpQkFBQSxNQUFNLENBQUMsb0JBQWtCLEdBQWxCLEdBQXFCLEdBQXJCLEdBQXlCLEtBQTFCLENBQU47QUFBd0MsU0FEMUM7O0FBRUEsUUFBQSxLQUFJLENBQUMsWUFBTCxDQUFrQixXQUFsQixDQUE4QixVQUE5QjtBQUNEO0FBQ0YsS0FYTSxDQUFQO0FBWUQsR0FiTztBQW5EUjs7OztBQUlHOzs7QUFDWSxFQUFBLGtCQUFBLENBQUEsb0JBQUEsR0FHVixJQUFJLEtBQUosRUFIVTtBQTREakIsU0FBQSxrQkFBQTtBQUFDLENBbEVELEVBQUE7O3FDQUFhLEdBQUEsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEYixJQUFBLE9BQUEsR0FBQSxRQUFBLE9BQUEsQ0FBQTs7QUFHQSxJQUFBLHNCQUFBLEdBQUFnRixrQkFBQTs7O0FBSUEsSUFBQUMsT0FBQSxHQUFBLFVBQUEsTUFBQSxFQUFBO0FBQTJCLEVBQUEsU0FBQSxDQUFBLEtBQUEsRUFBQSxNQUFBLENBQUE7O0FBQTNCLFdBQUEsS0FBQSxHQUFBO0FBQUEsUUFBQSxLQUFBLEdBQUEsTUFBQSxLQUFBLElBQUEsSUFBQSxNQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsRUFBQSxTQUFBLENBQUEsSUFBQSxJQUFBO0FBQ0U7Ozs7QUFJRzs7O0FBQ0ssSUFBQSxLQUFBLENBQUEsWUFBQSxHQUE2QixLQUFJLENBQUMsS0FBTCxDQUFXLFlBQXhDO0FBRVI7Ozs7QUFJRzs7QUFDSyxJQUFBLEtBQUEsQ0FBQSxrQkFBQSxHQUF5QyxJQUFJLHNCQUFBLENBQUEsa0JBQUosRUFBekM7QUFTUjs7OztBQUlHOztBQUNLLElBQUEsS0FBQSxDQUFBLGtCQUFBLEdBQThCLEtBQTlCOztBQWdIVDtBQTlHQzs7Ozs7O0FBTUc7OztBQUNLLEVBQUEsS0FBQSxDQUFBLFNBQUEsQ0FBQSxVQUFBLEdBQVIsVUFBbUIsV0FBbkIsRUFBc0M7QUFDcEMsU0FBSyxZQUFMLENBQWtCLHFCQUFsQixDQUF3QyxVQUF4QyxFQUFvRCxXQUFwRDs7QUFDQSxRQUFJLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNyQixXQUFLLFlBQUwsQ0FBa0IscUJBQWxCLENBQXdDLFFBQXhDO0FBQ0EsVUFBSSxPQUFPLEtBQUssMEJBQVosS0FBMkMsV0FBL0MsRUFDRSxLQUFLLFlBQUwsQ0FBa0IscUJBQWxCLENBQ0UsUUFERixFQUVFLEtBQUssMEJBRlA7QUFJSDtBQUNGLEdBVk87QUFZUjs7OztBQUlHOzs7QUFDSSxFQUFBLEtBQUEsQ0FBQSxTQUFBLENBQUEsaUJBQUEsR0FBUCxZQUFBO0FBQ0UsU0FBSyxrQkFBTCxHQUEwQixJQUExQjtBQUNBLFNBQUssa0JBQUw7QUFDRCxHQUhNO0FBS1A7Ozs7QUFJRzs7O0FBQ0ksRUFBQSxLQUFBLENBQUEsU0FBQSxDQUFBLG9CQUFBLEdBQVAsWUFBQTtBQUNFLFNBQUssWUFBTCxDQUFrQixpQkFBbEI7QUFDQSxTQUFLLGtCQUFMLEdBQTBCLEtBQTFCO0FBQ0QsR0FITTtBQUtQOzs7OztBQUtHOzs7QUFDVyxFQUFBLEtBQUEsQ0FBQSxTQUFBLENBQUEsa0JBQUEsR0FBZCxZQUFBOzs7Ozs7Ozs7O0FBR0k7OztBQUNBLG1CQUFBLENBQUE7QUFBQTtBQUFBLGNBQU0sS0FBSyxrQkFBTCxDQUF3QixVQUF4QixDQUNKLEtBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixTQUQxQixDQUFOLENBQUE7OztBQUZBO0FBQ0E7QUFDQSxZQUFBLEVBQUEsQ0FBQSxJQUFBO0FBSUE7QUFDQTs7O0FBQ0EsZ0JBQUksS0FBSyxrQkFBTCxLQUE0QixLQUFoQyxFQUF1QztBQUNyQyxxQkFBQSxDQUFBO0FBQUE7QUFBQSxlQUFBO0FBQ0Q7O0FBR0ssWUFBQSx3QkFBd0IsR0FBQSxRQUFBLENBQUEsUUFBQSxDQUFBLEVBQUEsRUFDekIsS0FBSyxZQUFMLENBQWtCLFdBRE8sQ0FBQSxFQUNJO0FBQ2hDLGNBQUEsUUFBUSxFQUFFLFVBQUMsT0FBRCxFQUFnQjtBQUN4Qix1QkFBQSxLQUFJLENBQUMsWUFBTCxDQUFrQixxQkFBbEIsQ0FBd0MsT0FBeEMsRUFBaUQsT0FBakQsQ0FBQTtBQUF5RCxlQUYzQjtBQUdoQyxjQUFBLEtBQUssRUFBRSxVQUFDLE9BQUQsRUFBZ0I7QUFDckIsdUJBQUEsS0FBSSxDQUFDLFlBQUwsQ0FBa0IscUJBQWxCLENBQXdDLE9BQXhDLEVBQWlELE9BQWpELENBQUE7QUFBeUQ7QUFKM0IsYUFESixDQUF4QjtBQU9OLGdCQUFJLEtBQUssS0FBTCxDQUFXLGdCQUFYLEtBQWdDLFNBQXBDLEVBQ0Usd0JBQXdCLENBQUMsZ0JBQXpCLEdBQTRDLEtBQUssS0FBTCxDQUFXLGdCQUF2RDtBQUNGLGdCQUFJLEtBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixzQkFBOUIsS0FBeUQsU0FBN0QsRUFDRSx3QkFBd0IsQ0FBQyxzQkFBekIsR0FDRSxLQUFLLFlBQUwsQ0FBa0IsV0FBbEIsQ0FBOEIsc0JBRGhDO0FBRUYsZ0JBQUksS0FBSyxLQUFMLENBQVcsc0JBQVgsS0FBc0MsU0FBMUMsRUFDRSx3QkFBd0IsQ0FBQyxzQkFBekIsR0FDRSxLQUFLLEtBQUwsQ0FBVyxzQkFEYjtBQUdxQixtQkFBQSxDQUFBO0FBQUE7QUFBQSxjQUFNLG1CQUFtQixDQUM5QyxLQUFLLDBCQUR5QyxFQUU5Qyx3QkFGOEMsRUFHOUMsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCLENBSDhDLENBQXpCLENBQUE7OztBQUFqQixZQUFBLGNBQWMsR0FBRyxFQUFBLENBQUEsSUFBQSxFQUFqQjs7QUFNTixpQkFBSyxZQUFMLENBQWtCLGdCQUFsQixDQUFtQyxjQUFuQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsZ0JBQUssS0FBSyxrQkFBTCxLQUF3QyxLQUE3QyxFQUNFLE9BQUEsQ0FBQTtBQUFBO0FBQUEsY0FBTyxLQUFLLFlBQUwsQ0FBa0IsaUJBQWxCLEVBQVAsQ0FBQTs7Ozs7OztBQUVGLGlCQUFLLFlBQUwsQ0FBa0IscUJBQWxCLENBQXdDLE9BQXhDLEVBQWlELFNBQWpEO0FBQ0EsWUFBQSxPQUFPLENBQUMsS0FBUixDQUFjLG1DQUFkLEVBQW1ELFNBQW5EOzs7Ozs7Ozs7Ozs7QUFFSCxHQWxEYTtBQW9EZDs7OztBQUlHOzs7QUFDSSxFQUFBLEtBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxHQUFQLFlBQUE7QUFBQSxRQUFBLEtBQUEsR0FBQSxJQUFBOztBQUNFLFdBQU8sT0FBQSxDQUFBLGFBQUEsQ0FBYyxRQUFkLEVBQXdCO0FBQzdCLE1BQUEsR0FBRyxFQUFFLFVBQUMsR0FBRCxFQUF1QjtBQUFLLGVBQUMsS0FBSSxDQUFDLDBCQUFMLEdBQUQsR0FBQTtBQUF1QyxPQUQzQztBQUU3QixNQUFBLFNBQVMsRUFBRSxLQUFLLEtBQUwsQ0FBVyxTQUFYLElBQXdCLEVBRk47QUFHN0IsTUFBQSxRQUFRLEVBQUUsS0FBSyxLQUFMLENBQVcsUUFBWCxJQUF1QixTQUhKO0FBSTdCLE1BQUEsS0FBSyxFQUFFLEtBQUssS0FBTCxDQUFXLEtBQVgsSUFBb0I7QUFKRSxLQUF4QixDQUFQO0FBTUQsR0FQTTs7QUFRVCxTQUFBLEtBQUE7QUFBQyxDQTNJRCxDQUEyQixPQUFBLENBQUEsYUFBM0IsQ0FBQTs7V0FBYSxHQUFBQSxPQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGYjs7QUFFRzs7QUFDSCxJQUFBLFlBQUEsR0FBQSxZQUFBO0FBZUU7OztBQUdHO0FBQ0gsV0FBQSxZQUFBLENBQW1CLFdBQW5CLEVBQTRDO0FBQXpCLFNBQUEsV0FBQSxHQUFBLFdBQUE7QUFYbkI7Ozs7QUFJRzs7QUFDSyxTQUFBLFdBQUEsR0FBNkIsRUFBN0I7QUFPTixRQUNFLE9BQU8sTUFBUCxLQUFrQixXQUFsQixJQUNBLE9BQU8sTUFBTSxDQUFDLGVBQWQsS0FBa0MsV0FGcEMsRUFJRSxNQUFNLENBQUMsZUFBUCxHQUF5QixFQUF6QjtBQUNIO0FBRUQ7Ozs7QUFJRzs7O0FBQ0ksRUFBQSxZQUFBLENBQUEsU0FBQSxDQUFBLGdCQUFBLEdBQVAsVUFBd0IsYUFBeEIsRUFBb0Q7QUFDbEQsU0FBSyxhQUFMLEdBQXFCLGFBQXJCO0FBQ0QsR0FGTTtBQUlQOzs7QUFHRzs7O0FBQ1UsRUFBQSxZQUFBLENBQUEsU0FBQSxDQUFBLGlCQUFBLEdBQWIsWUFBQTs7Ozs7Z0JBQ00sRUFBQSxPQUFPLEtBQUssYUFBWixLQUE4QixXQUE5QixHQUFBLE9BQUEsQ0FBQTtBQUFBO0FBQUEsY0FBQSxDQUFBLENBQUE7QUFDRixtQkFBQSxDQUFBO0FBQUE7QUFBQSxjQUFNLEtBQUssYUFBTCxDQUFtQixJQUFuQixFQUFOLENBQUE7OztBQUFBLFlBQUEsRUFBQSxDQUFBLElBQUE7O0FBQ0EsaUJBQUsscUJBQUwsQ0FBMkIsU0FBM0I7QUFDQSxpQkFBSyxhQUFMLEdBQXFCLFNBQXJCOzs7Ozs7Ozs7O0FBRUgsR0FOWTtBQVFiOzs7Ozs7QUFNRzs7O0FBQ0ksRUFBQSxZQUFBLENBQUEsU0FBQSxDQUFBLElBQUEsR0FBUCxVQUNFLGNBREYsRUFFRSxVQUZGLEVBR0UsU0FIRixFQUd1QztBQUVyQyxRQUFJLE9BQU8sS0FBSyxhQUFaLEtBQThCLFdBQWxDLEVBQ0UsSUFBSSxPQUFPLFNBQVAsS0FBcUIsV0FBekIsRUFDRSxLQUFLLGFBQUwsQ0FBbUIsV0FBbkIsQ0FBK0IsY0FBL0IsRUFBK0MsVUFBL0MsRUFERixLQUdFLEtBQUssYUFBTCxDQUFtQixXQUFuQixDQUErQixjQUEvQixFQUErQyxVQUEvQyxFQUEyRCxTQUEzRDtBQUNMLEdBVk07QUFZUDs7Ozs7OztBQU9HOzs7QUFDSSxFQUFBLFlBQUEsQ0FBQSxTQUFBLENBQUEsRUFBQSxHQUFQLFVBQ0UsU0FERixFQUVFLGFBRkYsRUFNVztBQUVULFNBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQjtBQUFFLE1BQUEsU0FBUyxFQUFBLFNBQVg7QUFBYSxNQUFBLGFBQWEsRUFBRTtBQUE1QixLQUF0QjtBQUNBLFFBQUksT0FBTyxNQUFQLEtBQWtCLFdBQXRCLEVBQ0UsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsU0FBdkIsSUFBb0MsWUFBQTtBQUFDLFVBQUEsVUFBQSxHQUFBLEVBQUE7O1dBQUEsSUFBQSxFQUFBLEdBQUEsR0FBQSxFQUFBLEdBQUEsU0FBQSxDQUFBLFFBQUEsRUFBQSxJQUFrQjtBQUFsQixRQUFBLFVBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsRUFBQSxDQUFBOzs7QUFDbkMsYUFBQSxhQUFhLENBQUEsS0FBYixDQUFhLEtBQUEsQ0FBYixFQUFpQixVQUFqQixDQUFBO0FBQTRCLEtBRDlCO0FBRUgsR0FaTTtBQWNQOzs7OztBQUtHOzs7QUFDSSxFQUFBLFlBQUEsQ0FBQSxTQUFBLENBQUEsbUJBQUEsR0FBUCxVQUEyQixTQUEzQixFQUE0QztBQUMxQztBQUNBLFNBQUssSUFBSSxFQUFFLEdBQUcsQ0FBZCxFQUFpQixFQUFFLEdBQUcsS0FBSyxXQUFMLENBQWlCLE1BQXZDLEVBQStDLEVBQUUsRUFBakQsRUFDRSxJQUFJLEtBQUssV0FBTCxDQUFpQixFQUFqQixFQUFxQixTQUFyQixLQUFtQyxTQUF2QyxFQUNFLEtBQUssV0FBTCxDQUFpQixNQUFqQixDQUF3QixFQUF4QixFQUE0QixDQUE1Qjs7QUFDSixXQUFPLE1BQU0sQ0FBQyxlQUFQLENBQXVCLFNBQXZCLENBQVA7QUFDRCxHQU5NO0FBUVA7Ozs7QUFJRzs7O0FBQ0ksRUFBQSxZQUFBLENBQUEsU0FBQSxDQUFBLHVCQUFBLEdBQVAsWUFBQTtBQUNFO0FBQ0EsU0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFkLEVBQWlCLEVBQUUsR0FBRyxLQUFLLFdBQUwsQ0FBaUIsTUFBdkMsRUFBK0MsRUFBRSxFQUFqRCxFQUNFLE9BQU8sTUFBTSxDQUFDLGVBQVAsQ0FBdUIsS0FBSyxXQUFMLENBQWlCLEVBQWpCLEVBQXFCLFNBQTVDLENBQVA7O0FBQ0YsU0FBSyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0QsR0FMTTtBQU9QOzs7Ozs7QUFNRzs7O0FBQ0ksRUFBQSxZQUFBLENBQUEsU0FBQSxDQUFBLHFCQUFBLEdBQVAsVUFBNkIsU0FBN0IsRUFBZ0QsVUFBaEQsRUFBZ0U7QUFDOUQsU0FBd0IsSUFBQSxFQUFBLEdBQUEsQ0FBQSxFQUFBLEVBQUEsR0FBQSxLQUFLLFdBQTdCLEVBQXdCLEVBQUEsR0FBQSxFQUFBLENBQUEsTUFBeEIsRUFBd0IsRUFBQSxFQUF4QixFQUF3QztBQUFuQyxVQUFJLFdBQVcsR0FBQSxFQUFBLENBQUEsRUFBQSxDQUFmO0FBQ0gsVUFBSSxXQUFXLENBQUMsU0FBWixLQUEwQixTQUE5QixFQUNFLFdBQVcsQ0FBQyxhQUFaLENBQTBCLFVBQTFCO0FBQXNDO0FBQzNDLEdBSk07QUFNUDs7OztBQUlHOzs7QUFDSSxFQUFBLFlBQUEsQ0FBQSxTQUFBLENBQUEsYUFBQSxHQUFQLFVBQXFCLE9BQXJCLEVBQXFDO0FBQ25DLFFBQUksT0FBTyxLQUFLLGFBQVosS0FBOEIsV0FBbEMsRUFDRSxLQUFLLGFBQUwsQ0FBbUIsYUFBbkIsQ0FBaUMsT0FBTyxLQUFLLElBQVosR0FBbUIsQ0FBbkIsR0FBdUIsQ0FBeEQ7QUFDSCxHQUhNOztBQUlULFNBQUEsWUFBQTtBQUFDLENBeklELEVBQUE7O3lCQUFhLEdBQUEsWUFBQTs7Ozs7Ozs7O0FDUmIsSUFBQSxPQUFBLEdBQUFELEtBQUE7O0FBQ0EsSUFBQSxlQUFBLEdBQUFFLFlBQUE7O0FBSVMsTUFBQSxDQUFBLGNBQUEsQ0FBQSxPQUFBLEVBQUEsY0FBQSxFQUFBO0FBQUEsRUFBQSxVQUFBLEVBQUEsSUFBQTtBQUFBLEVBQUEsR0FBQSxFQUFBLFlBQUE7QUFBQSxXQUpBLGVBQUEsQ0FBQSxZQUlBO0FBSlk7QUFJWixDQUFBO0FBRFQsa0JBQWUsT0FBQSxDQUFBLEtBQWY7Ozs7O1NDYXdCLE9BQU8sQ0FBQyxLQUFtQjtJQUMvQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQzVCLE1BQ0ksSUFBSUMsb0JBQVksQ0FBQztRQUNiLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQyxTQUFTLFlBQVk7UUFDekMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLFNBQVMsT0FBTztRQUNsQyxZQUFZLEVBQUUsR0FBRyxLQUFLLENBQUMsU0FBUyxlQUFlO1FBQy9DLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxTQUFTLE9BQU87S0FDckMsQ0FBQyxFQUNOLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUNwQixDQUFDO0lBRUYsTUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFPLENBQUM7SUFDMUIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWpDLFNBQVMsQ0FBQztRQUNOLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNmLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0U7S0FDSixFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUVqQixTQUFTLENBQUM7O1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNmLE9BQU87U0FDVjtRQUNBLE1BQWMsQ0FBQyxZQUFZLEdBQUksTUFBYyxDQUFDLFlBQVksR0FBSSxNQUFjLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUMvRixNQUFjLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUM7UUFFeEQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2YsTUFBQSxLQUFLLENBQUMsVUFBVSwwQ0FBRSxPQUFPLENBQUMsU0FBUztnQkFDL0IsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSztvQkFDNUIsS0FBSyxDQUFDLE9BQVEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBRWpDLElBQUksU0FBUyxJQUFJLGFBQWEsRUFBRTt3QkFDNUIsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN0QjtpQkFDSixDQUFDLENBQUE7YUFDTCxDQUFDLENBQUE7U0FDTDtRQUVELE9BQU87WUFDSCxZQUFZLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztTQUMxQyxDQUFDO0tBQ0wsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFFbkIsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxRQUFRLEVBQVUsQ0FBQztJQUVuRCxRQUNJO1FBQ0k7O1lBQWUsUUFBUSxDQUFRO1FBQy9CLDBCQUFRLE9BQU8sRUFBRTtnQkFDYixJQUFJLFFBQVEsRUFBRTtvQkFDVixZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztpQkFDNUM7YUFDSiwrQkFBZTtRQUNoQiwwQkFBUSxPQUFPLEVBQUU7Z0JBQ2IsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7aUJBQzdDO2FBQ0osK0JBQWU7UUFDaEIsdUJBQUssR0FBRyxFQUFFLEdBQUc7WUFDVCxjQUFDRixPQUFLLElBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFlBQVksR0FBSSxDQUN6RyxDQUNKLEVBQ1I7QUFDTjs7OztTQ3pFd0IsS0FBSyxDQUFDLEtBQTBCO0lBRXBELE1BQU0sT0FBTyxHQUFHLFdBQVcsQ0FDdkIsQ0FBQyxTQUFpQixFQUFFLEtBQWE7O1FBRTdCLFFBQVEsU0FBUztZQUNiLEtBQUssYUFBYTtnQkFDZCxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQSxNQUFBLEtBQUssQ0FBQyxJQUFJLDBDQUFFLE1BQU0sa0NBQTJCO29CQUMzRCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDOUI7Z0JBQ0QsTUFBTTtTQUdiO0tBQ0osRUFDRCxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FDZixDQUFDO0lBRUYsUUFDSSxjQUFDLE9BQU8sSUFDSixPQUFPLEVBQUUsT0FBTyxFQUNoQixVQUFVLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFDM0IsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQ2hCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUM5QixPQUFPLEVBQUUsS0FBSyxDQUFDLGVBQWUsRUFDOUIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFDeEMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQ2xCLFNBQVMsRUFBRSxLQUFLLENBQUMsY0FBYyxHQUN4QixFQUNiO0FBQ047Ozs7In0=
