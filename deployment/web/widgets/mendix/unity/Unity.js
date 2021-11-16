
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
define(['react'], (function (React) { 'use strict';

	

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

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

	var ConfigContext = /*#__PURE__*/React__default["default"].createContext({});
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

	  var _a = __read$3(React.useState(defaultValue), 2),
	      state = _a[0],
	      setState = _a[1];

	  var actions = React.useMemo(function () {
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

	  var actions = React.useMemo(function () {
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

	  var handlerRef = React.useRef();
	  handlerRef.current = handler;
	  React.useEffect(function () {
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
	  var current = React.useRef({
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

	var exports$1 = {};

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
	}(exports$1));

	var Unity$1 = /*@__PURE__*/getDefaultExportFromCjs(exports$1);

	function UnityFC(props) {
	    const unityContext = useCreation(() => new exports$1.UnityContext({
	        loaderUrl: `${props.modelPath}.loader.js`,
	        dataUrl: `${props.modelPath}.data`,
	        frameworkUrl: `${props.modelPath}.framework.js`,
	        codeUrl: `${props.modelPath}.wasm`
	    }), [props.modelPath]);
	    const ref = React.useRef();
	    const isHovering = useHover(ref);
	    React.useEffect(() => {
	        if (props.hoverGo) {
	            unityContext.send(props.hoverGo, props.hoverMethod, isHovering ? 1 : 0);
	        }
	    }, [isHovering]);
	    React.useEffect(() => {
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
	    const [pipeName, setPipeName] = React.useState();
	    return (React.createElement("div", null,
	        React.createElement("span", null,
	            "\u9009\u62E9\u7684\u7BA1\u9053\u540D\u79F0 ",
	            pipeName),
	        React.createElement("button", { onClick: () => {
	                if (pipeName) {
	                    unityContext.send(pipeName, 'StopShake');
	                }
	            } }, "\u505C\u6B62\u632F\u52A8"),
	        React.createElement("button", { onClick: () => {
	                if (pipeName) {
	                    unityContext.send(pipeName, 'StartShake');
	                }
	            } }, "\u5F00\u59CB\u632F\u52A8"),
	        React.createElement("div", { ref: ref },
	            React.createElement(Unity$1, { className: props.class, tabIndex: props.tabIndex, style: props.style, unityContext: unityContext }))));
	}

	___$insertStyle("/*\nPlace your custom CSS here\n*/");

	function Unity(props) {
	    const onEvent = React.useCallback((eventName, value) => {
	        var _a;
	        switch (eventName) {
	            case 'ClickObject':
	                if (props.out1 && ((_a = props.out1) === null || _a === void 0 ? void 0 : _a.status) == "available" /* Available */) {
	                    props.out1.setValue(value);
	                }
	                break;
	        }
	    }, [props.out1]);
	    return (React.createElement(UnityFC, { onEvent: onEvent, eventNames: ['ClickObject'], name: props.name, hoverMethod: props.hoverMethod, hoverGo: props.hoverGameObject, style: { width: "100%", ...props.style }, class: props.class, modelPath: props.unityModelPath }));
	}

	return Unity;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pdHkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVib3VuY2UvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLnRocm90dGxlL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy91dGlscy91dGlscy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvdXRpbHMvbGltaXQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL3V0aWxzL3VzZVBlcnNpc3RGbi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvdXRpbHMvd2luZG93Rm9jdXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL3V0aWxzL3dpbmRvd1Zpc2libGUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGFob29rc2pzL3VzZS1yZXF1ZXN0L2VzL3VzZUFzeW5jLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy91c2VMb2FkTW9yZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYWhvb2tzanMvdXNlLXJlcXVlc3QvZXMvdXNlUGFnaW5hdGVkLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy9jb25maWdDb250ZXh0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BhaG9va3Nqcy91c2UtcmVxdWVzdC9lcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXRpbHMvZG9tLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91c2VUb2dnbGUvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3VzZUJvb2xlYW4vaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3VzZUV2ZW50TGlzdGVuZXIvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3VzZUNyZWF0aW9uL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91c2VIb3Zlci9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9haG9va3MvZXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtdW5pdHktd2ViZ2wvZGlzdHJpYnV0aW9uL3NlcnZpY2VzL3VuaXR5LWxvYWRlci1zZXJ2aWNlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXVuaXR5LXdlYmdsL2Rpc3RyaWJ1dGlvbi9jb21wb25lbnRzL3VuaXR5LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXVuaXR5LXdlYmdsL2Rpc3RyaWJ1dGlvbi9tb2RlbHMvdW5pdHktY29udGV4dC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC11bml0eS13ZWJnbC9kaXN0cmlidXRpb24vZXhwb3J0cy5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1VuaXR5RkMudHN4IiwiLi4vLi4vLi4vLi4vLi4vc3JjL1VuaXR5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNEb2N1bWVudFZpc2libGUoKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSAhPT0gJ2hpZGRlbic7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc09ubGluZSgpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3Iub25MaW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuYXZpZ2F0b3Iub25MaW5lO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwidmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbnZhciBfX3NwcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZCB8fCBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGltaXQoZm4sIHRpbWVzcGFuKSB7XG4gIHZhciBwZW5kaW5nID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuXG4gICAgaWYgKHBlbmRpbmcpIHJldHVybjtcbiAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICBmbi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKGFyZ3MpKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHBlbmRpbmcgPSBmYWxzZTtcbiAgICB9LCB0aW1lc3Bhbik7XG4gIH07XG59IiwidmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbnZhciBfX3NwcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZCB8fCBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdXNlUGVyc2lzdEZuKGZuKSB7XG4gIHZhciByZWYgPSB1c2VSZWYoZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNhbGwgYW4gZXZlbnQgaGFuZGxlciB3aGlsZSByZW5kZXJpbmcuJyk7XG4gIH0pO1xuICByZWYuY3VycmVudCA9IGZuO1xuICB2YXIgcGVyc2lzdCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG5cbiAgICB2YXIgcmVmRm4gPSByZWYuY3VycmVudDtcblxuICAgIGlmIChyZWZGbikge1xuICAgICAgcmV0dXJuIHJlZkZuLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoYXJncykpO1xuICAgIH1cbiAgfSwgW3JlZl0pO1xuXG4gIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcGVyc2lzdDtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVBlcnNpc3RGbjsiLCIvLyBmcm9tIHN3clxuaW1wb3J0IHsgaXNEb2N1bWVudFZpc2libGUsIGlzT25saW5lIH0gZnJvbSAnLi91dGlscyc7XG52YXIgbGlzdGVuZXJzID0gW107XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG59XG5cbnZhciBldmVudHNCaW5kZWQgPSBmYWxzZTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmICFldmVudHNCaW5kZWQpIHtcbiAgdmFyIHJldmFsaWRhdGUgPSBmdW5jdGlvbiByZXZhbGlkYXRlKCkge1xuICAgIGlmICghaXNEb2N1bWVudFZpc2libGUoKSB8fCAhaXNPbmxpbmUoKSkgcmV0dXJuO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgcmV2YWxpZGF0ZSwgZmFsc2UpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCByZXZhbGlkYXRlLCBmYWxzZSk7IC8vIG9ubHkgYmluZCB0aGUgZXZlbnRzIG9uY2VcblxuICBldmVudHNCaW5kZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdWJzY3JpYmU7IiwiLy8gZnJvbSBzd3JcbmltcG9ydCB7IGlzRG9jdW1lbnRWaXNpYmxlIH0gZnJvbSAnLi91dGlscyc7XG52YXIgbGlzdGVuZXJzID0gW107XG5cbmZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gIH07XG59XG5cbnZhciBldmVudHNCaW5kZWQgPSBmYWxzZTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmICFldmVudHNCaW5kZWQpIHtcbiAgdmFyIHJldmFsaWRhdGUgPSBmdW5jdGlvbiByZXZhbGlkYXRlKCkge1xuICAgIGlmICghaXNEb2N1bWVudFZpc2libGUoKSkgcmV0dXJuO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgcmV2YWxpZGF0ZSwgZmFsc2UpOyAvLyBvbmx5IGJpbmQgdGhlIGV2ZW50cyBvbmNlXG5cbiAgZXZlbnRzQmluZGVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3Vic2NyaWJlOyIsInZhciBfX2Fzc2lnbiA9IHRoaXMgJiYgdGhpcy5fX2Fzc2lnbiB8fCBmdW5jdGlvbiAoKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0O1xuICB9O1xuXG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxudmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbnZhciBfX3NwcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZCB8fCBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0RvY3VtZW50VmlzaWJsZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZ2V0Q2FjaGUsIHNldENhY2hlIH0gZnJvbSAnLi91dGlscy9jYWNoZSc7XG5pbXBvcnQgbGltaXQgZnJvbSAnLi91dGlscy9saW1pdCc7XG5pbXBvcnQgdXNlUGVyc2lzdEZuIGZyb20gJy4vdXRpbHMvdXNlUGVyc2lzdEZuJztcbmltcG9ydCB1c2VVcGRhdGVFZmZlY3QgZnJvbSAnLi91dGlscy91c2VVcGRhdGVFZmZlY3QnO1xuaW1wb3J0IHN1YnNjcmliZUZvY3VzIGZyb20gJy4vdXRpbHMvd2luZG93Rm9jdXMnO1xuaW1wb3J0IHN1YnNjcmliZVZpc2libGUgZnJvbSAnLi91dGlscy93aW5kb3dWaXNpYmxlJztcbnZhciBERUZBVUxUX0tFWSA9ICdBSE9PS1NfVVNFX1JFUVVFU1RfREVGQVVMVF9LRVknO1xuXG52YXIgRmV0Y2ggPVxuLyoqIEBjbGFzcyAqL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGZXRjaChzZXJ2aWNlLCBjb25maWcsIHN1YnNjcmliZSwgaW5pdFN0YXRlKSB7XG4gICAgLy8g6K+35rGC5pe25bqPXG4gICAgdGhpcy5jb3VudCA9IDA7IC8vIHZpc2libGUg5ZCO77yM5piv5ZCm57un57ut6L2u6K+iXG5cbiAgICB0aGlzLnBvbGxpbmdXaGVuVmlzaWJsZUZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLnBvbGxpbmdUaW1lciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmdEZWxheVRpbWVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBbXTtcbiAgICB0aGlzLnRoYXQgPSB0aGlzO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHBhcmFtczogW10sXG4gICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICBlcnJvcjogdW5kZWZpbmVkLFxuICAgICAgcnVuOiB0aGlzLnJ1bi5iaW5kKHRoaXMudGhhdCksXG4gICAgICBtdXRhdGU6IHRoaXMubXV0YXRlLmJpbmQodGhpcy50aGF0KSxcbiAgICAgIHJlZnJlc2g6IHRoaXMucmVmcmVzaC5iaW5kKHRoaXMudGhhdCksXG4gICAgICBjYW5jZWw6IHRoaXMuY2FuY2VsLmJpbmQodGhpcy50aGF0KSxcbiAgICAgIHVubW91bnQ6IHRoaXMudW5tb3VudC5iaW5kKHRoaXMudGhhdClcbiAgICB9O1xuICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG5cbiAgICBpZiAoaW5pdFN0YXRlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuc3RhdGUpLCBpbml0U3RhdGUpO1xuICAgIH1cblxuICAgIHRoaXMuZGVib3VuY2VSdW4gPSB0aGlzLmNvbmZpZy5kZWJvdW5jZUludGVydmFsID8gZGVib3VuY2UodGhpcy5fcnVuLCB0aGlzLmNvbmZpZy5kZWJvdW5jZUludGVydmFsKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRocm90dGxlUnVuID0gdGhpcy5jb25maWcudGhyb3R0bGVJbnRlcnZhbCA/IHRocm90dGxlKHRoaXMuX3J1biwgdGhpcy5jb25maWcudGhyb3R0bGVJbnRlcnZhbCkgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5saW1pdFJlZnJlc2ggPSBsaW1pdCh0aGlzLnJlZnJlc2guYmluZCh0aGlzKSwgdGhpcy5jb25maWcuZm9jdXNUaW1lc3Bhbik7XG5cbiAgICBpZiAodGhpcy5jb25maWcucG9sbGluZ0ludGVydmFsKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlLnB1c2goc3Vic2NyaWJlVmlzaWJsZSh0aGlzLnJlUG9sbGluZy5iaW5kKHRoaXMpKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnJlZnJlc2hPbldpbmRvd0ZvY3VzKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlLnB1c2goc3Vic2NyaWJlRm9jdXModGhpcy5saW1pdFJlZnJlc2guYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgfVxuXG4gIEZldGNoLnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgaWYgKHMgPT09IHZvaWQgMCkge1xuICAgICAgcyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5zdGF0ZSksIHMpO1xuICAgIHRoaXMuc3Vic2NyaWJlKHRoaXMuc3RhdGUpO1xuICB9O1xuXG4gIEZldGNoLnByb3RvdHlwZS5fcnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9IC8vIOWPlua2iOW3suacieWumuaXtuWZqFxuXG5cbiAgICBpZiAodGhpcy5wb2xsaW5nVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBvbGxpbmdUaW1lcik7XG4gICAgfSAvLyDlj5bmtoggbG9hZGluZ0RlbGF5VGltZXJcblxuXG4gICAgaWYgKHRoaXMubG9hZGluZ0RlbGF5VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxvYWRpbmdEZWxheVRpbWVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvdW50ICs9IDE7IC8vIOmXreWMheWtmOWCqOW9k+asoeivt+axgueahCBjb3VudFxuXG4gICAgdmFyIGN1cnJlbnRDb3VudCA9IHRoaXMuY291bnQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nOiAhdGhpcy5jb25maWcubG9hZGluZ0RlbGF5LFxuICAgICAgcGFyYW1zOiBhcmdzXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jb25maWcubG9hZGluZ0RlbGF5KSB7XG4gICAgICB0aGlzLmxvYWRpbmdEZWxheVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSwgdGhpcy5jb25maWcubG9hZGluZ0RlbGF5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmFwcGx5KHRoaXMsIF9fc3ByZWFkKGFyZ3MpKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIGlmIChjdXJyZW50Q291bnQgIT09IF90aGlzLmNvdW50KSB7XG4gICAgICAgIC8vIHByZXZlbnQgcnVuLnRoZW4gd2hlbiByZXF1ZXN0IGlzIGNhbmNlbGVkXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5sb2FkaW5nRGVsYXlUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMubG9hZGluZ0RlbGF5VGltZXIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9ybWF0dGVkUmVzdWx0ID0gX3RoaXMuY29uZmlnLmZvcm1hdFJlc3VsdCA/IF90aGlzLmNvbmZpZy5mb3JtYXRSZXN1bHQocmVzKSA6IHJlcztcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiBmb3JtYXR0ZWRSZXN1bHQsXG4gICAgICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLmNvbmZpZy5vblN1Y2Nlc3MpIHtcbiAgICAgICAgX3RoaXMuY29uZmlnLm9uU3VjY2Vzcyhmb3JtYXR0ZWRSZXN1bHQsIGFyZ3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVkUmVzdWx0O1xuICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoY3VycmVudENvdW50ICE9PSBfdGhpcy5jb3VudCkge1xuICAgICAgICAvLyBwcmV2ZW50IHJ1bi50aGVuIHdoZW4gcmVxdWVzdCBpcyBjYW5jZWxlZFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKCkge30pO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMubG9hZGluZ0RlbGF5VGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmxvYWRpbmdEZWxheVRpbWVyKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMuY29uZmlnLm9uRXJyb3IpIHtcbiAgICAgICAgX3RoaXMuY29uZmlnLm9uRXJyb3IoZXJyb3IsIGFyZ3MpO1xuICAgICAgfSAvLyBJZiB0aHJvd09uRXJyb3IsIHVzZXIgc2hvdWxkIGNhdGNoIHRoZSBlcnJvciBzZWxmLFxuICAgICAgLy8gb3IgdGhlIHBhZ2Ugd2lsbCBjcmFzaFxuXG5cbiAgICAgIGlmIChfdGhpcy5jb25maWcudGhyb3dPbkVycm9yKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1wcm9taXNlLXJlamVjdC1lcnJvcnNcblxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCd1c2VSZXF1ZXN0IGhhcyBjYXVnaHQgdGhlIGV4Y2VwdGlvbiwgaWYgeW91IG5lZWQgdG8gaGFuZGxlIHRoZSBleGNlcHRpb24geW91cnNlbGYsIHlvdSBjYW4gc2V0IG9wdGlvbnMudGhyb3dPbkVycm9yIHRvIHRydWUuJyk7XG4gICAgfSlbXCJmaW5hbGx5XCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IF90aGlzLmNvdW50KSB7XG4gICAgICAgIGlmIChfdGhpcy5jb25maWcucG9sbGluZ0ludGVydmFsKSB7XG4gICAgICAgICAgLy8g5aaC5p6c5bGP5bmV6ZqQ6JeP77yM5bm25LiUICFwb2xsaW5nV2hlbkhpZGRlbiwg5YiZ5YGc5q2i6L2u6K+i77yM5bm26K6w5b2VIGZsYWfvvIznrYkgdmlzaWJsZSDml7bvvIznu6fnu63ova7or6JcbiAgICAgICAgICBpZiAoIWlzRG9jdW1lbnRWaXNpYmxlKCkgJiYgIV90aGlzLmNvbmZpZy5wb2xsaW5nV2hlbkhpZGRlbikge1xuICAgICAgICAgICAgX3RoaXMucG9sbGluZ1doZW5WaXNpYmxlRmxhZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMucG9sbGluZ1RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fcnVuLmFwcGx5KF90aGlzLCBfX3NwcmVhZChhcmdzKSk7XG4gICAgICAgICAgfSwgX3RoaXMuY29uZmlnLnBvbGxpbmdJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBGZXRjaC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRlYm91bmNlUnVuKSB7XG4gICAgICB0aGlzLmRlYm91bmNlUnVuLmFwcGx5KHRoaXMsIF9fc3ByZWFkKGFyZ3MpKTsgLy8gVE9ETyDlpoLmnpwgb3B0aW9ucyDlrZjlnKggZGVib3VuY2VJbnRlcnZhbO+8jOaIliB0aHJvdHRsZUludGVydmFs77yM5YiZIHJ1biDlkowgcmVmcmVzaCDkuI3kvJrov5Tlm54gUHJvbWlzZeOAgiDluKbnsbvlnovpnIDopoHkv67lpI3lkI7vvIzmraTlpITlj5jmiJAgcmV0dXJuO+OAglxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRocm90dGxlUnVuKSB7XG4gICAgICB0aGlzLnRocm90dGxlUnVuLmFwcGx5KHRoaXMsIF9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3J1bi5hcHBseSh0aGlzLCBfX3NwcmVhZChhcmdzKSk7XG4gIH07XG5cbiAgRmV0Y2gucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5kZWJvdW5jZVJ1bikge1xuICAgICAgdGhpcy5kZWJvdW5jZVJ1bi5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aHJvdHRsZVJ1bikge1xuICAgICAgdGhpcy50aHJvdHRsZVJ1bi5jYW5jZWwoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb2FkaW5nRGVsYXlUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubG9hZGluZ0RlbGF5VGltZXIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBvbGxpbmdUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucG9sbGluZ1RpbWVyKTtcbiAgICB9XG5cbiAgICB0aGlzLnBvbGxpbmdXaGVuVmlzaWJsZUZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLmNvdW50ICs9IDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pO1xuICB9O1xuXG4gIEZldGNoLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bi5hcHBseSh0aGlzLCBfX3NwcmVhZCh0aGlzLnN0YXRlLnBhcmFtcykpO1xuICB9O1xuXG4gIEZldGNoLnByb3RvdHlwZS5yZVBvbGxpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucG9sbGluZ1doZW5WaXNpYmxlRmxhZykge1xuICAgICAgdGhpcy5wb2xsaW5nV2hlblZpc2libGVGbGFnID0gZmFsc2U7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH07XG5cbiAgRmV0Y2gucHJvdG90eXBlLm11dGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFjY2Vzcy1zdGF0ZS1pbi1zZXRzdGF0ZVxuICAgICAgICBkYXRhOiBkYXRhKHRoaXMuc3RhdGUuZGF0YSkgfHwge31cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIEZldGNoLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgdGhpcy51bnN1YnNjcmliZS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICBzKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEZldGNoO1xufSgpO1xuXG5mdW5jdGlvbiB1c2VBc3luYyhzZXJ2aWNlLCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIF9hID0gX29wdGlvbnMucmVmcmVzaERlcHMsXG4gICAgICByZWZyZXNoRGVwcyA9IF9hID09PSB2b2lkIDAgPyBbXSA6IF9hLFxuICAgICAgX2IgPSBfb3B0aW9ucy5tYW51YWwsXG4gICAgICBtYW51YWwgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYixcbiAgICAgIF9jID0gX29wdGlvbnMub25TdWNjZXNzLFxuICAgICAgb25TdWNjZXNzID0gX2MgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX2MsXG4gICAgICBfZCA9IF9vcHRpb25zLm9uRXJyb3IsXG4gICAgICBvbkVycm9yID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX2QsXG4gICAgICBfZSA9IF9vcHRpb25zLmRlZmF1bHRMb2FkaW5nLFxuICAgICAgZGVmYXVsdExvYWRpbmcgPSBfZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZSxcbiAgICAgIGxvYWRpbmdEZWxheSA9IF9vcHRpb25zLmxvYWRpbmdEZWxheSxcbiAgICAgIF9mID0gX29wdGlvbnMucG9sbGluZ0ludGVydmFsLFxuICAgICAgcG9sbGluZ0ludGVydmFsID0gX2YgPT09IHZvaWQgMCA/IDAgOiBfZixcbiAgICAgIF9nID0gX29wdGlvbnMucG9sbGluZ1doZW5IaWRkZW4sXG4gICAgICBwb2xsaW5nV2hlbkhpZGRlbiA9IF9nID09PSB2b2lkIDAgPyB0cnVlIDogX2csXG4gICAgICBfaCA9IF9vcHRpb25zLmRlZmF1bHRQYXJhbXMsXG4gICAgICBkZWZhdWx0UGFyYW1zID0gX2ggPT09IHZvaWQgMCA/IFtdIDogX2gsXG4gICAgICBfaiA9IF9vcHRpb25zLnJlZnJlc2hPbldpbmRvd0ZvY3VzLFxuICAgICAgcmVmcmVzaE9uV2luZG93Rm9jdXMgPSBfaiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaixcbiAgICAgIF9rID0gX29wdGlvbnMuZm9jdXNUaW1lc3BhbixcbiAgICAgIGZvY3VzVGltZXNwYW4gPSBfayA9PT0gdm9pZCAwID8gNTAwMCA6IF9rLFxuICAgICAgZmV0Y2hLZXkgPSBfb3B0aW9ucy5mZXRjaEtleSxcbiAgICAgIGNhY2hlS2V5ID0gX29wdGlvbnMuY2FjaGVLZXksXG4gICAgICBfbCA9IF9vcHRpb25zLmNhY2hlVGltZSxcbiAgICAgIGNhY2hlVGltZSA9IF9sID09PSB2b2lkIDAgPyA1ICogNjAgKiAxMDAwIDogX2wsXG4gICAgICBfbSA9IF9vcHRpb25zLnN0YWxlVGltZSxcbiAgICAgIHN0YWxlVGltZSA9IF9tID09PSB2b2lkIDAgPyAwIDogX20sXG4gICAgICBkZWJvdW5jZUludGVydmFsID0gX29wdGlvbnMuZGVib3VuY2VJbnRlcnZhbCxcbiAgICAgIHRocm90dGxlSW50ZXJ2YWwgPSBfb3B0aW9ucy50aHJvdHRsZUludGVydmFsLFxuICAgICAgaW5pdGlhbERhdGEgPSBfb3B0aW9ucy5pbml0aWFsRGF0YSxcbiAgICAgIF9vID0gX29wdGlvbnMucmVhZHksXG4gICAgICByZWFkeSA9IF9vID09PSB2b2lkIDAgPyB0cnVlIDogX28sXG4gICAgICBfcCA9IF9vcHRpb25zLnRocm93T25FcnJvcixcbiAgICAgIHRocm93T25FcnJvciA9IF9wID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wO1xuICB2YXIgbmV3c3RGZXRjaEtleSA9IHVzZVJlZihERUZBVUxUX0tFWSk7IC8vIOaMgeS5heWMluS4gOS6m+WHveaVsFxuXG4gIHZhciBzZXJ2aWNlUGVyc2lzdCA9IHVzZVBlcnNpc3RGbihzZXJ2aWNlKTtcbiAgdmFyIG9uU3VjY2Vzc1BlcnNpc3QgPSB1c2VQZXJzaXN0Rm4ob25TdWNjZXNzKTtcbiAgdmFyIG9uRXJyb3JQZXJzaXN0ID0gdXNlUGVyc2lzdEZuKG9uRXJyb3IpO1xuICB2YXIgZmV0Y2hLZXlQZXJzaXN0ID0gdXNlUGVyc2lzdEZuKGZldGNoS2V5KTtcbiAgdmFyIGZvcm1hdFJlc3VsdDtcblxuICBpZiAoJ2Zvcm1hdFJlc3VsdCcgaW4gX29wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICBmb3JtYXRSZXN1bHQgPSBfb3B0aW9ucy5mb3JtYXRSZXN1bHQ7XG4gIH1cblxuICB2YXIgZm9ybWF0UmVzdWx0UGVyc2lzdCA9IHVzZVBlcnNpc3RGbihmb3JtYXRSZXN1bHQpO1xuICB2YXIgY29uZmlnID0ge1xuICAgIGZvcm1hdFJlc3VsdDogZm9ybWF0UmVzdWx0UGVyc2lzdCxcbiAgICBvblN1Y2Nlc3M6IG9uU3VjY2Vzc1BlcnNpc3QsXG4gICAgb25FcnJvcjogb25FcnJvclBlcnNpc3QsXG4gICAgbG9hZGluZ0RlbGF5OiBsb2FkaW5nRGVsYXksXG4gICAgcG9sbGluZ0ludGVydmFsOiBwb2xsaW5nSW50ZXJ2YWwsXG4gICAgcG9sbGluZ1doZW5IaWRkZW46IHBvbGxpbmdXaGVuSGlkZGVuLFxuICAgIC8vIHJlZnJlc2hPbldpbmRvd0ZvY3VzIHNob3VsZCBub3Qgd29yayBvbiBtYW51YWwgbW9kZVxuICAgIHJlZnJlc2hPbldpbmRvd0ZvY3VzOiAhbWFudWFsICYmIHJlZnJlc2hPbldpbmRvd0ZvY3VzLFxuICAgIGZvY3VzVGltZXNwYW46IGZvY3VzVGltZXNwYW4sXG4gICAgZGVib3VuY2VJbnRlcnZhbDogZGVib3VuY2VJbnRlcnZhbCxcbiAgICB0aHJvdHRsZUludGVydmFsOiB0aHJvdHRsZUludGVydmFsLFxuICAgIHRocm93T25FcnJvcjogdGhyb3dPbkVycm9yXG4gIH07XG4gIHZhciBzdWJzY3JpYmUgPSB1c2VQZXJzaXN0Rm4oZnVuY3Rpb24gKGtleSwgZGF0YSkge1xuICAgIHNldEZldGNoZXMoZnVuY3Rpb24gKHMpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgc1trZXldID0gZGF0YTtcbiAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgcyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciBfcSA9IF9fcmVhZCh1c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hOyAvLyDlpoLmnpzmnIkg57yT5a2Y77yM5YiZ5LuO57yT5a2Y5Lit6K+75pWw5o2uXG5cblxuICAgIGlmIChjYWNoZUtleSkge1xuICAgICAgdmFyIGNhY2hlRGF0YV8xID0gKF9hID0gZ2V0Q2FjaGUoY2FjaGVLZXkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGF0YTtcblxuICAgICAgaWYgKGNhY2hlRGF0YV8xKSB7XG4gICAgICAgIG5ld3N0RmV0Y2hLZXkuY3VycmVudCA9IGNhY2hlRGF0YV8xLm5ld3N0RmV0Y2hLZXk7XG4gICAgICAgIC8qIOS9v+eUqCBpbml0U3RhdGUsIOmHjeaWsCBuZXcgRmV0Y2ggKi9cblxuICAgICAgICB2YXIgbmV3RmV0Y2hlc18xID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGNhY2hlRGF0YV8xLmZldGNoZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIHZhciBjYWNoZUZldGNoID0gY2FjaGVEYXRhXzEuZmV0Y2hlc1trZXldO1xuICAgICAgICAgIHZhciBuZXdGZXRjaCA9IG5ldyBGZXRjaChzZXJ2aWNlUGVyc2lzdCwgY29uZmlnLCBzdWJzY3JpYmUuYmluZChudWxsLCBrZXkpLCB7XG4gICAgICAgICAgICBsb2FkaW5nOiBjYWNoZUZldGNoLmxvYWRpbmcsXG4gICAgICAgICAgICBwYXJhbXM6IGNhY2hlRmV0Y2gucGFyYW1zLFxuICAgICAgICAgICAgZGF0YTogY2FjaGVGZXRjaC5kYXRhLFxuICAgICAgICAgICAgZXJyb3I6IGNhY2hlRmV0Y2guZXJyb3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBuZXdGZXRjaGVzXzFba2V5XSA9IG5ld0ZldGNoLnN0YXRlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld0ZldGNoZXNfMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge307XG4gIH0pLCAyKSxcbiAgICAgIGZldGNoZXMgPSBfcVswXSxcbiAgICAgIHNldEZldGNoZXMgPSBfcVsxXTtcblxuICB2YXIgZmV0Y2hlc1JlZiA9IHVzZVJlZihmZXRjaGVzKTtcbiAgZmV0Y2hlc1JlZi5jdXJyZW50ID0gZmV0Y2hlcztcbiAgdmFyIHJlYWR5TWVtb3J5UGFyYW1zID0gdXNlUmVmKCk7XG4gIHZhciBydW4gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuXG4gICAgaWYgKCFyZWFkeSkge1xuICAgICAgLy8g5rKh5pyJIHJlYWR5LCDorrDlvZXor7fmsYLlj4LmlbDvvIznrYkgcmVhZHkg5ZCO77yM5Y+R6LW36K+35rGC55SoXG4gICAgICByZWFkeU1lbW9yeVBhcmFtcy5jdXJyZW50ID0gYXJncztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZmV0Y2hLZXlQZXJzaXN0KSB7XG4gICAgICB2YXIga2V5ID0gZmV0Y2hLZXlQZXJzaXN0LmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoYXJncykpO1xuICAgICAgbmV3c3RGZXRjaEtleS5jdXJyZW50ID0ga2V5ID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0tFWSA6IGtleTtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudEZldGNoS2V5ID0gbmV3c3RGZXRjaEtleS5jdXJyZW50OyAvLyDov5nph4zlv4XpobvnlKggZmV0Y2hzUmVm77yM6ICM5LiN6IO955SoIGZldGNoZXPjgIJcbiAgICAvLyDlkKbliJnlnKggcmVzZXQg5a6M77yM56uL5Y2zIHJ1biDnmoTml7blgJnvvIzov5nph4zmi7/liLDnmoQgZmV0Y2hlcyDmmK/ml6fnmoTjgIJcblxuICAgIHZhciBjdXJyZW50RmV0Y2ggPSBmZXRjaGVzUmVmLmN1cnJlbnRbY3VycmVudEZldGNoS2V5XTtcblxuICAgIGlmICghY3VycmVudEZldGNoKSB7XG4gICAgICB2YXIgbmV3RmV0Y2ggPSBuZXcgRmV0Y2goc2VydmljZVBlcnNpc3QsIGNvbmZpZywgc3Vic2NyaWJlLmJpbmQobnVsbCwgY3VycmVudEZldGNoS2V5KSwge1xuICAgICAgICBkYXRhOiBpbml0aWFsRGF0YVxuICAgICAgfSk7XG4gICAgICBjdXJyZW50RmV0Y2ggPSBuZXdGZXRjaC5zdGF0ZTtcbiAgICAgIHNldEZldGNoZXMoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHNbY3VycmVudEZldGNoS2V5XSA9IGN1cnJlbnRGZXRjaDtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50RmV0Y2gucnVuLmFwcGx5KGN1cnJlbnRGZXRjaCwgX19zcHJlYWQoYXJncykpO1xuICB9LCBbZmV0Y2hLZXksIHN1YnNjcmliZSwgcmVhZHldKTtcbiAgdmFyIHJ1blJlZiA9IHVzZVJlZihydW4pO1xuICBydW5SZWYuY3VycmVudCA9IHJ1bjsgLy8gY2FjaGVcblxuICB1c2VVcGRhdGVFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWNoZUtleSkge1xuICAgICAgc2V0Q2FjaGUoY2FjaGVLZXksIGNhY2hlVGltZSwge1xuICAgICAgICBmZXRjaGVzOiBmZXRjaGVzLFxuICAgICAgICBuZXdzdEZldGNoS2V5OiBuZXdzdEZldGNoS2V5LmN1cnJlbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2NhY2hlS2V5LCBmZXRjaGVzXSk7IC8vIGZvciByZWFkeVxuXG4gIHZhciBoYXNUcmlnZ2VyZWRCeVJlYWR5ID0gdXNlUmVmKGZhbHNlKTtcbiAgdXNlVXBkYXRlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmVhZHkpIHtcbiAgICAgIGlmICghaGFzVHJpZ2dlcmVkQnlSZWFkeS5jdXJyZW50ICYmIHJlYWR5TWVtb3J5UGFyYW1zLmN1cnJlbnQpIHtcbiAgICAgICAgcnVuUmVmLmN1cnJlbnQuYXBwbHkocnVuUmVmLCBfX3NwcmVhZChyZWFkeU1lbW9yeVBhcmFtcy5jdXJyZW50KSk7XG4gICAgICB9XG5cbiAgICAgIGhhc1RyaWdnZXJlZEJ5UmVhZHkuY3VycmVudCA9IHRydWU7XG4gICAgfVxuICB9LCBbcmVhZHldKTsgLy8g56ys5LiA5qyh6buY6K6k5omn6KGMXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7XG5cbiAgICBpZiAoIW1hbnVhbCkge1xuICAgICAgLy8g5aaC5p6c5pyJ57yT5a2Y77yM5YiZ6YeN5paw6K+35rGCXG4gICAgICBpZiAoT2JqZWN0LmtleXMoZmV0Y2hlcykubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyDlpoLmnpwgc3RhbGVUaW1lIOaYryAtMe+8jOWImSBjYWNoZSDmsLjkuI3ov4fmnJ9cbiAgICAgICAgLy8g5aaC5p6cIHN0YXRsZVRpbWUg6LaF5pyf5LqG77yM5YiZ6YeN5paw6K+35rGCXG4gICAgICAgIHZhciBjYWNoZVN0YXJ0VGltZSA9IGNhY2hlS2V5ICYmICgoX2EgPSBnZXRDYWNoZShjYWNoZUtleSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdGFydFRpbWUpIHx8IDA7XG5cbiAgICAgICAgaWYgKCEoc3RhbGVUaW1lID09PSAtMSB8fCBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGNhY2hlU3RhcnRUaW1lIDw9IHN0YWxlVGltZSkpIHtcbiAgICAgICAgICAvKiDph43mlrDmiafooYzmiYDmnInnmoQgY2FjaGUgKi9cbiAgICAgICAgICBPYmplY3QudmFsdWVzKGZldGNoZXMpLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgICAgIGYucmVmcmVzaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDnrKzkuIDmrKHpu5jorqTmiafooYzvvIzlj6/ku6XpgJrov4cgZGVmYXVsdFBhcmFtcyDorr7nva7lj4LmlbBcbiAgICAgICAgcnVuUmVmLmN1cnJlbnQuYXBwbHkocnVuUmVmLCBfX3NwcmVhZChkZWZhdWx0UGFyYW1zKSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7IC8vIOmHjee9riBmZXRjaGVzXG5cbiAgdmFyIHJlc2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC52YWx1ZXMoZmV0Y2hlc1JlZi5jdXJyZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICBmLnVubW91bnQoKTtcbiAgICB9KTtcbiAgICBuZXdzdEZldGNoS2V5LmN1cnJlbnQgPSBERUZBVUxUX0tFWTtcbiAgICBzZXRGZXRjaGVzKHt9KTsgLy8g5LiN5YaZ5Lya5pyJ6Zeu6aKY44CC5aaC5p6c5LiN5YaZ77yM5q2k5pe256uL5Y2zIHJ1bu+8jOS8muaYr+iAgeeahOaVsOaNrlxuXG4gICAgZmV0Y2hlc1JlZi5jdXJyZW50ID0ge307XG4gIH0sIFtzZXRGZXRjaGVzXSk7IC8vICByZWZyZXNoRGVwcyDlj5jljJbvvIzph43mlrDmiafooYzmiYDmnInor7fmsYJcblxuICB1c2VVcGRhdGVFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghbWFudWFsKSB7XG4gICAgICAvKiDlhajpg6jph43mlrDmiafooYwgKi9cbiAgICAgIE9iamVjdC52YWx1ZXMoZmV0Y2hlc1JlZi5jdXJyZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIGYucmVmcmVzaCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBfX3NwcmVhZChyZWZyZXNoRGVwcykpOyAvLyDljbjovb3nu4Tku7bop6blj5FcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBPYmplY3QudmFsdWVzKGZldGNoZXNSZWYuY3VycmVudCkuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgICBmLnVubW91bnQoKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgdmFyIG5vdEV4ZWN1dGVkV2FybmluZyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIllvdSBzaG91bGQndCBjYWxsIFwiICsgbmFtZSArIFwiIHdoZW4gc2VydmljZSBub3QgZXhlY3V0ZWQgb25jZS5cIik7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe1xuICAgIGxvYWRpbmc6IHJlYWR5ICYmICFtYW51YWwgfHwgZGVmYXVsdExvYWRpbmcsXG4gICAgZGF0YTogaW5pdGlhbERhdGEsXG4gICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICBwYXJhbXM6IFtdLFxuICAgIGNhbmNlbDogbm90RXhlY3V0ZWRXYXJuaW5nKCdjYW5jZWwnKSxcbiAgICByZWZyZXNoOiBub3RFeGVjdXRlZFdhcm5pbmcoJ3JlZnJlc2gnKSxcbiAgICBtdXRhdGU6IG5vdEV4ZWN1dGVkV2FybmluZygnbXV0YXRlJylcbiAgfSwgZmV0Y2hlc1tuZXdzdEZldGNoS2V5LmN1cnJlbnRdIHx8IHt9KSwge1xuICAgIHJ1bjogcnVuLFxuICAgIGZldGNoZXM6IGZldGNoZXMsXG4gICAgcmVzZXQ6IHJlc2V0XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VBc3luYzsiLCJ2YXIgX19hc3NpZ24gPSB0aGlzICYmIHRoaXMuX19hc3NpZ24gfHwgZnVuY3Rpb24gKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdDtcbiAgfTtcblxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgX19yZWFkID0gdGhpcyAmJiB0aGlzLl9fcmVhZCB8fCBmdW5jdGlvbiAobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLFxuICAgICAgcixcbiAgICAgIGFyID0gW10sXG4gICAgICBlO1xuXG4gIHRyeSB7XG4gICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxudmFyIF9fc3ByZWFkID0gdGhpcyAmJiB0aGlzLl9fc3ByZWFkIHx8IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUFzeW5jIGZyb20gJy4vdXNlQXN5bmMnO1xuaW1wb3J0IHVzZVVwZGF0ZUVmZmVjdCBmcm9tICcuL3V0aWxzL3VzZVVwZGF0ZUVmZmVjdCc7XG5cbmZ1bmN0aW9uIHVzZUxvYWRNb3JlKHNlcnZpY2UsIG9wdGlvbnMpIHtcbiAgdmFyIF9hID0gb3B0aW9ucy5yZWZyZXNoRGVwcyxcbiAgICAgIHJlZnJlc2hEZXBzID0gX2EgPT09IHZvaWQgMCA/IFtdIDogX2EsXG4gICAgICByZWYgPSBvcHRpb25zLnJlZixcbiAgICAgIGlzTm9Nb3JlID0gb3B0aW9ucy5pc05vTW9yZSxcbiAgICAgIF9iID0gb3B0aW9ucy50aHJlc2hvbGQsXG4gICAgICB0aHJlc2hvbGQgPSBfYiA9PT0gdm9pZCAwID8gMTAwIDogX2IsXG4gICAgICBmZXRjaEtleSA9IG9wdGlvbnMuZmV0Y2hLZXksXG4gICAgICByZXN0T3B0aW9ucyA9IF9fcmVzdChvcHRpb25zLCBbXCJyZWZyZXNoRGVwc1wiLCBcInJlZlwiLCBcImlzTm9Nb3JlXCIsIFwidGhyZXNob2xkXCIsIFwiZmV0Y2hLZXlcIl0pO1xuXG4gIHZhciBfYyA9IF9fcmVhZCh1c2VTdGF0ZShmYWxzZSksIDIpLFxuICAgICAgbG9hZGluZ01vcmUgPSBfY1swXSxcbiAgICAgIHNldExvYWRpbmdNb3JlID0gX2NbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob3B0aW9ucy5mZXRjaEtleSkge1xuICAgICAgY29uc29sZS53YXJuKFwidXNlUmVxdWVzdCBsb2FkTW9yZSBtb2RlIGRvbid0IG5lZWQgZmV0Y2hLZXkhXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuICB2YXIgcmVzdWx0ID0gdXNlQXN5bmMoc2VydmljZSwgX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3RPcHRpb25zKSwge1xuICAgIGZldGNoS2V5OiBmdW5jdGlvbiBmZXRjaEtleShkKSB7XG4gICAgICB2YXIgX2E7XG5cbiAgICAgIHJldHVybiAoKF9hID0gZCA9PT0gbnVsbCB8fCBkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkLmxpc3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpIHx8IDA7XG4gICAgfSxcbiAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcygpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgcGFyYW1zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICB9XG5cbiAgICAgIHNldExvYWRpbmdNb3JlKGZhbHNlKTtcblxuICAgICAgaWYgKG9wdGlvbnMub25TdWNjZXNzKSB7XG4gICAgICAgIG9wdGlvbnMub25TdWNjZXNzLmFwcGx5KG9wdGlvbnMsIF9fc3ByZWFkKHBhcmFtcykpO1xuICAgICAgfVxuICAgIH1cbiAgfSkpO1xuICB2YXIgZGF0YSA9IHJlc3VsdC5kYXRhLFxuICAgICAgcnVuID0gcmVzdWx0LnJ1bixcbiAgICAgIHBhcmFtcyA9IHJlc3VsdC5wYXJhbXMsXG4gICAgICByZXNldCA9IHJlc3VsdC5yZXNldCxcbiAgICAgIGxvYWRpbmcgPSByZXN1bHQubG9hZGluZyxcbiAgICAgIGZldGNoZXMgPSByZXN1bHQuZmV0Y2hlcztcbiAgdmFyIHJlbG9hZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXNldCgpO1xuXG4gICAgdmFyIF9hID0gX19yZWFkKHBhcmFtcyksXG4gICAgICAgIHJlc3RQYXJhbXMgPSBfYS5zbGljZSgxKTtcblxuICAgIHJ1bi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKFt1bmRlZmluZWRdLCByZXN0UGFyYW1zKSk7XG4gIH0sIFtydW4sIHJlc2V0LCBwYXJhbXNdKTtcbiAgdmFyIHJlbG9hZFJlZiA9IHVzZVJlZihyZWxvYWQpO1xuICByZWxvYWRSZWYuY3VycmVudCA9IHJlbG9hZDtcbiAgLyogbG9hZE1vcmUg5Zy65pmv5LiL77yM5aaC5p6cIHJlZnJlc2hEZXBzIOWPmOWMlu+8jOmHjee9ruWIsOesrOS4gOmhtSAqL1xuXG4gIHVzZVVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLyog5Y+q5pyJ6Ieq5Yqo5omn6KGM55qE5Zy65pmv77yMIHJlZnJlc2hEZXBzIOaJjeacieaViCAqL1xuICAgIGlmICghb3B0aW9ucy5tYW51YWwpIHtcbiAgICAgIHJlbG9hZFJlZi5jdXJyZW50KCk7XG4gICAgfVxuICB9LCBfX3NwcmVhZChyZWZyZXNoRGVwcykpO1xuICB2YXIgZGF0YUdyb3VwID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpc3RHcm91cCA9IFtdOyAvLyDlnKggbG9hZE1vcmUg5pe277yM5LiN5biM5pyb5riF56m65LiK5LiA5qyh55qEIGRhdGHjgILpnIDopoHmiormnIDlkI7kuIDkuKog6Z2eIGxvYWRpbmcg55qE6K+35rGCIGRhdGHvvIzmlL7lm57ljrvjgIJcblxuICAgIHZhciBsYXN0Tm9Mb2FkaW5nRGF0YSA9IGRhdGE7XG4gICAgT2JqZWN0LnZhbHVlcyhmZXRjaGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChoKSB7XG4gICAgICB2YXIgX2EsIF9iO1xuXG4gICAgICBpZiAoKF9hID0gaC5kYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGlzdCkge1xuICAgICAgICBsaXN0R3JvdXAgPSBsaXN0R3JvdXAuY29uY2F0KChfYiA9IGguZGF0YSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmxpc3QpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWgubG9hZGluZykge1xuICAgICAgICBsYXN0Tm9Mb2FkaW5nRGF0YSA9IGguZGF0YTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGxhc3ROb0xvYWRpbmdEYXRhKSwge1xuICAgICAgbGlzdDogbGlzdEdyb3VwXG4gICAgfSk7XG4gIH0sIFtmZXRjaGVzLCBkYXRhXSk7XG4gIHZhciBub01vcmUgPSBpc05vTW9yZSA/ICFsb2FkaW5nICYmICFsb2FkaW5nTW9yZSAmJiBpc05vTW9yZShkYXRhR3JvdXApIDogZmFsc2U7XG4gIHZhciBsb2FkTW9yZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobm9Nb3JlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZ01vcmUodHJ1ZSk7XG5cbiAgICB2YXIgX2EgPSBfX3JlYWQocGFyYW1zKSxcbiAgICAgICAgcmVzdFBhcmFtcyA9IF9hLnNsaWNlKDEpO1xuXG4gICAgcnVuLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoW2RhdGFHcm91cF0sIHJlc3RQYXJhbXMpKTtcbiAgfSwgW25vTW9yZSwgcnVuLCBkYXRhR3JvdXAsIHBhcmFtc10pO1xuICAvKiDkuIrmi4nliqDovb3nmoTmlrnms5UgKi9cblxuICB2YXIgc2Nyb2xsTWV0aG9kID0gZnVuY3Rpb24gc2Nyb2xsTWV0aG9kKCkge1xuICAgIGlmIChsb2FkaW5nIHx8IGxvYWRpbmdNb3JlIHx8ICFyZWYgfHwgIXJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlZi5jdXJyZW50LnNjcm9sbEhlaWdodCAtIHJlZi5jdXJyZW50LnNjcm9sbFRvcCA8PSByZWYuY3VycmVudC5jbGllbnRIZWlnaHQgKyB0aHJlc2hvbGQpIHtcbiAgICAgIGxvYWRNb3JlKCk7XG4gICAgfVxuICB9OyAvLyDlpoLmnpzkuI3nlKggcmVm77yM6ICM55So5LmL5YmN55qEIHVzZUNhbGxiYWvvvIzlnKjmn5Dkupvmg4XlhrXkuIvkvJrlh7rpl67popjvvIzpgKDmiJDmi7/liLDnmoQgbG9hZGluZyDkuI3mmK/mnIDmlrDnmoTjgIJcbiAgLy8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS9hbGliYWJhL2hvb2tzL2lzc3Vlcy82MzBcblxuXG4gIHZhciBzY3JvbGxNZXRob2RSZWYgPSB1c2VSZWYoc2Nyb2xsTWV0aG9kKTtcbiAgc2Nyb2xsTWV0aG9kUmVmLmN1cnJlbnQgPSBzY3JvbGxNZXRob2Q7XG4gIC8qIOWmguaenOaciSByZWbvvIzliJnkvJrkuIrmi4nliqDovb3mm7TlpJogKi9cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghcmVmIHx8ICFyZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHt9O1xuICAgIH1cblxuICAgIHZhciBzY3JvbGxUcmlnZ2VyID0gZnVuY3Rpb24gc2Nyb2xsVHJpZ2dlcigpIHtcbiAgICAgIHJldHVybiBzY3JvbGxNZXRob2RSZWYuY3VycmVudCgpO1xuICAgIH07XG5cbiAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUcmlnZ2VyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJlZiAmJiByZWYuY3VycmVudCkge1xuICAgICAgICByZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUcmlnZ2VyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbc2Nyb2xsTWV0aG9kUmVmXSk7XG4gIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzdWx0KSwge1xuICAgIGRhdGE6IGRhdGFHcm91cCxcbiAgICByZWxvYWQ6IHJlbG9hZCxcbiAgICBsb2FkaW5nOiBsb2FkaW5nICYmIGRhdGFHcm91cC5saXN0Lmxlbmd0aCA9PT0gMCxcbiAgICBsb2FkTW9yZTogbG9hZE1vcmUsXG4gICAgbG9hZGluZ01vcmU6IGxvYWRpbmdNb3JlLFxuICAgIG5vTW9yZTogbm9Nb3JlXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VMb2FkTW9yZTsiLCJ2YXIgX19hc3NpZ24gPSB0aGlzICYmIHRoaXMuX19hc3NpZ24gfHwgZnVuY3Rpb24gKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHQpIHtcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHMgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdDtcbiAgfTtcblxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5cbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgX19yZWFkID0gdGhpcyAmJiB0aGlzLl9fcmVhZCB8fCBmdW5jdGlvbiAobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLFxuICAgICAgcixcbiAgICAgIGFyID0gW10sXG4gICAgICBlO1xuXG4gIHRyeSB7XG4gICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxudmFyIF9fc3ByZWFkID0gdGhpcyAmJiB0aGlzLl9fc3ByZWFkIHx8IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQXN5bmMgZnJvbSAnLi91c2VBc3luYyc7XG5pbXBvcnQgdXNlVXBkYXRlRWZmZWN0IGZyb20gJy4vdXRpbHMvdXNlVXBkYXRlRWZmZWN0JztcblxuZnVuY3Rpb24gdXNlUGFnaW5hdGVkKHNlcnZpY2UsIG9wdGlvbnMpIHtcbiAgdmFyIHBhZ2luYXRlZCA9IG9wdGlvbnMucGFnaW5hdGVkLFxuICAgICAgX2EgPSBvcHRpb25zLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIGRlZmF1bHRQYWdlU2l6ZSA9IF9hID09PSB2b2lkIDAgPyAxMCA6IF9hLFxuICAgICAgX2IgPSBvcHRpb25zLnJlZnJlc2hEZXBzLFxuICAgICAgcmVmcmVzaERlcHMgPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYixcbiAgICAgIGZldGNoS2V5ID0gb3B0aW9ucy5mZXRjaEtleSxcbiAgICAgIHJlc3RPcHRpb25zID0gX19yZXN0KG9wdGlvbnMsIFtcInBhZ2luYXRlZFwiLCBcImRlZmF1bHRQYWdlU2l6ZVwiLCBcInJlZnJlc2hEZXBzXCIsIFwiZmV0Y2hLZXlcIl0pO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZldGNoS2V5KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwidXNlUmVxdWVzdCBwYWdpbmF0aW9uJ3MgZmV0Y2hLZXkgd2lsbCBub3Qgd29yayFcIik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdmFyIF9jID0gdXNlQXN5bmMoc2VydmljZSwgX19hc3NpZ24oe1xuICAgIGRlZmF1bHRQYXJhbXM6IFt7XG4gICAgICBjdXJyZW50OiAxLFxuICAgICAgcGFnZVNpemU6IGRlZmF1bHRQYWdlU2l6ZVxuICAgIH1dXG4gIH0sIHJlc3RPcHRpb25zKSksXG4gICAgICBkYXRhID0gX2MuZGF0YSxcbiAgICAgIHBhcmFtcyA9IF9jLnBhcmFtcyxcbiAgICAgIHJ1biA9IF9jLnJ1bixcbiAgICAgIGxvYWRpbmcgPSBfYy5sb2FkaW5nLFxuICAgICAgcmVzdCA9IF9fcmVzdChfYywgW1wiZGF0YVwiLCBcInBhcmFtc1wiLCBcInJ1blwiLCBcImxvYWRpbmdcIl0pO1xuXG4gIHZhciBfZCA9IHBhcmFtcyAmJiBwYXJhbXNbMF0gPyBwYXJhbXNbMF0gOiB7fSxcbiAgICAgIF9lID0gX2QuY3VycmVudCxcbiAgICAgIGN1cnJlbnQgPSBfZSA9PT0gdm9pZCAwID8gMSA6IF9lLFxuICAgICAgX2YgPSBfZC5wYWdlU2l6ZSxcbiAgICAgIHBhZ2VTaXplID0gX2YgPT09IHZvaWQgMCA/IGRlZmF1bHRQYWdlU2l6ZSA6IF9mLFxuICAgICAgX2cgPSBfZC5zb3J0ZXIsXG4gICAgICBzb3J0ZXIgPSBfZyA9PT0gdm9pZCAwID8ge30gOiBfZyxcbiAgICAgIF9oID0gX2QuZmlsdGVycyxcbiAgICAgIGZpbHRlcnMgPSBfaCA9PT0gdm9pZCAwID8ge30gOiBfaDsgLy8g5Y+q5pS55Y+YIHBhZ2luYXRpb27vvIzlhbbku5blj4LmlbDljp/moLfkvKDpgJJcblxuXG4gIHZhciBydW5DaGFuZ2VQYWdpbmF0aW9uID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHBhZ2luYXRpb25QYXJhbXMpIHtcbiAgICB2YXIgX2EgPSBfX3JlYWQocGFyYW1zKSxcbiAgICAgICAgb2xkUGFnaW5hdGlvblBhcmFtcyA9IF9hWzBdLFxuICAgICAgICByZXN0UGFyYW1zID0gX2Euc2xpY2UoMSk7XG5cbiAgICBydW4uYXBwbHkodm9pZCAwLCBfX3NwcmVhZChbX19hc3NpZ24oX19hc3NpZ24oe30sIG9sZFBhZ2luYXRpb25QYXJhbXMpLCBwYWdpbmF0aW9uUGFyYW1zKV0sIHJlc3RQYXJhbXMpKTtcbiAgfSwgW3J1biwgcGFyYW1zXSk7XG4gIHZhciB0b3RhbCA9IChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEudG90YWwpIHx8IDA7XG4gIHZhciB0b3RhbFBhZ2UgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRvdGFsIC8gcGFnZVNpemUpO1xuICB9LCBbcGFnZVNpemUsIHRvdGFsXSk7XG4gIHZhciBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjLCBwKSB7XG4gICAgdmFyIHRvQ3VycmVudCA9IGMgPD0gMCA/IDEgOiBjO1xuICAgIHZhciB0b1BhZ2VTaXplID0gcCA8PSAwID8gMSA6IHA7XG4gICAgdmFyIHRlbXBUb3RhbFBhZ2UgPSBNYXRoLmNlaWwodG90YWwgLyB0b1BhZ2VTaXplKTtcblxuICAgIGlmICh0b0N1cnJlbnQgPiB0ZW1wVG90YWxQYWdlKSB7XG4gICAgICB0b0N1cnJlbnQgPSB0ZW1wVG90YWxQYWdlO1xuICAgIH1cblxuICAgIHJ1bkNoYW5nZVBhZ2luYXRpb24oe1xuICAgICAgY3VycmVudDogYyxcbiAgICAgIHBhZ2VTaXplOiBwXG4gICAgfSk7XG4gIH0sIFt0b3RhbCwgcnVuQ2hhbmdlUGFnaW5hdGlvbl0pO1xuICB2YXIgY2hhbmdlQ3VycmVudCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChjKSB7XG4gICAgb25DaGFuZ2UoYywgcGFnZVNpemUpO1xuICB9LCBbb25DaGFuZ2UsIHBhZ2VTaXplXSk7XG4gIHZhciBjaGFuZ2VQYWdlU2l6ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwKSB7XG4gICAgb25DaGFuZ2UoY3VycmVudCwgcCk7XG4gIH0sIFtvbkNoYW5nZSwgY3VycmVudF0pO1xuICB2YXIgY2hhbmdlQ3VycmVudFJlZiA9IHVzZVJlZihjaGFuZ2VDdXJyZW50KTtcbiAgY2hhbmdlQ3VycmVudFJlZi5jdXJyZW50ID0gY2hhbmdlQ3VycmVudDtcbiAgLyog5YiG6aG15Zy65pmv5LiL77yM5aaC5p6cIHJlZnJlc2hEZXBzIOWPmOWMlu+8jOmHjee9ruWIhumhtSAqL1xuXG4gIHVzZVVwZGF0ZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLyog5Y+q5pyJ6Ieq5Yqo5omn6KGM55qE5Zy65pmv77yMIHJlZnJlc2hEZXBzIOaJjeacieaViCAqL1xuICAgIGlmICghb3B0aW9ucy5tYW51YWwpIHtcbiAgICAgIGNoYW5nZUN1cnJlbnRSZWYuY3VycmVudCgxKTtcbiAgICB9XG4gIH0sIF9fc3ByZWFkKHJlZnJlc2hEZXBzKSk7IC8vIOihqOagvOe/u+mhtSDmjpLluo8g562b6YCJ562JXG5cbiAgdmFyIGNoYW5nZVRhYmxlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHAsIGYsIHMpIHtcbiAgICBydW5DaGFuZ2VQYWdpbmF0aW9uKHtcbiAgICAgIGN1cnJlbnQ6IHAuY3VycmVudCxcbiAgICAgIHBhZ2VTaXplOiBwLnBhZ2VTaXplIHx8IGRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIGZpbHRlcnM6IGYsXG4gICAgICBzb3J0ZXI6IHNcbiAgICB9KTtcbiAgfSwgW2ZpbHRlcnMsIHNvcnRlciwgcnVuQ2hhbmdlUGFnaW5hdGlvbl0pO1xuICByZXR1cm4gX19hc3NpZ24oe1xuICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgZGF0YTogZGF0YSxcbiAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICBydW46IHJ1bixcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgdG90YWw6IHRvdGFsLFxuICAgICAgdG90YWxQYWdlOiB0b3RhbFBhZ2UsXG4gICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICBjaGFuZ2VDdXJyZW50OiBjaGFuZ2VDdXJyZW50LFxuICAgICAgY2hhbmdlUGFnZVNpemU6IGNoYW5nZVBhZ2VTaXplXG4gICAgfSxcbiAgICB0YWJsZVByb3BzOiB7XG4gICAgICBkYXRhU291cmNlOiAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmxpc3QpIHx8IFtdLFxuICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgIG9uQ2hhbmdlOiBjaGFuZ2VUYWJsZSxcbiAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgY3VycmVudDogY3VycmVudCxcbiAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgICB0b3RhbDogdG90YWxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNvcnRlcjogc29ydGVyLFxuICAgIGZpbHRlcnM6IGZpbHRlcnNcbiAgfSwgcmVzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVBhZ2luYXRlZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xudmFyIENvbmZpZ0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5Db25maWdDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1VzZVJlcXVlc3RDb25maWdDb250ZXh0JztcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ0NvbnRleHQ7IiwidmFyIF9fYXNzaWduID0gdGhpcyAmJiB0aGlzLl9fYXNzaWduIHx8IGZ1bmN0aW9uICgpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbnZhciBfX3NwcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3NwcmVhZCB8fCBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzICovXG5cblxuaW1wb3J0IHsgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUFzeW5jIGZyb20gJy4vdXNlQXN5bmMnO1xuaW1wb3J0IHVzZUxvYWRNb3JlIGZyb20gJy4vdXNlTG9hZE1vcmUnO1xuaW1wb3J0IHVzZVBhZ2luYXRlZCBmcm9tICcuL3VzZVBhZ2luYXRlZCc7XG5pbXBvcnQgQ29uZmlnQ29udGV4dCBmcm9tICcuL2NvbmZpZ0NvbnRleHQnO1xuXG5mdW5jdGlvbiB1c2VSZXF1ZXN0KHNlcnZpY2UsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBjb250ZXh0Q29uZmlnID0gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcblxuICB2YXIgZmluYWxPcHRpb25zID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGNvbnRleHRDb25maWcpLCBvcHRpb25zKTtcblxuICB2YXIgcGFnaW5hdGVkID0gZmluYWxPcHRpb25zLnBhZ2luYXRlZCxcbiAgICAgIGxvYWRNb3JlID0gZmluYWxPcHRpb25zLmxvYWRNb3JlLFxuICAgICAgcmVxdWVzdE1ldGhvZCA9IGZpbmFsT3B0aW9ucy5yZXF1ZXN0TWV0aG9kO1xuICB2YXIgcGFnaW5hdGVkUmVmID0gdXNlUmVmKHBhZ2luYXRlZCk7XG4gIHZhciBsb2FkTW9yZVJlZiA9IHVzZVJlZihsb2FkTW9yZSk7XG5cbiAgaWYgKHBhZ2luYXRlZFJlZi5jdXJyZW50ICE9PSBwYWdpbmF0ZWQpIHtcbiAgICB0aHJvdyBFcnJvcignWW91IHNob3VsZCBub3QgbW9kaWZ5IHRoZSBwYWdpbmF0ZWQgb2Ygb3B0aW9ucycpO1xuICB9XG5cbiAgaWYgKGxvYWRNb3JlUmVmLmN1cnJlbnQgIT09IGxvYWRNb3JlKSB7XG4gICAgdGhyb3cgRXJyb3IoJ1lvdSBzaG91bGQgbm90IG1vZGlmeSB0aGUgbG9hZE1vcmUgb2Ygb3B0aW9ucycpO1xuICB9XG5cbiAgcGFnaW5hdGVkUmVmLmN1cnJlbnQgPSBwYWdpbmF0ZWQ7XG4gIGxvYWRNb3JlUmVmLmN1cnJlbnQgPSBsb2FkTW9yZTsgLy8gQHRzLWlnbm9yZVxuXG4gIHZhciBmZXRjaFByb3h5ID0gZnVuY3Rpb24gZmV0Y2hQcm94eSgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9IC8vIEB0cy1pZ25vcmVcblxuXG4gICAgcmV0dXJuIGZldGNoLmFwcGx5KHZvaWQgMCwgX19zcHJlYWQoYXJncykpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZmluYWxSZXF1ZXN0TWV0aG9kID0gcmVxdWVzdE1ldGhvZCB8fCBmZXRjaFByb3h5O1xuICB2YXIgcHJvbWlzZVNlcnZpY2U7XG5cbiAgc3dpdGNoICh0eXBlb2Ygc2VydmljZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBwcm9taXNlU2VydmljZSA9IGZ1bmN0aW9uIHByb21pc2VTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gZmluYWxSZXF1ZXN0TWV0aG9kKHNlcnZpY2UpO1xuICAgICAgfTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgdmFyIHVybF8xID0gc2VydmljZS51cmwsXG4gICAgICAgICAgcmVzdF8xID0gX19yZXN0KHNlcnZpY2UsIFtcInVybFwiXSk7XG5cbiAgICAgIHByb21pc2VTZXJ2aWNlID0gZnVuY3Rpb24gcHJvbWlzZVNlcnZpY2UoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0TWV0aG9kID8gcmVxdWVzdE1ldGhvZChzZXJ2aWNlKSA6IGZldGNoUHJveHkodXJsXzEsIHJlc3RfMSk7XG4gICAgICB9O1xuXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBwcm9taXNlU2VydmljZSA9IGZ1bmN0aW9uIHByb21pc2VTZXJ2aWNlKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB2YXIgcyA9IHNlcnZpY2UuYXBwbHkodm9pZCAwLCBfX3NwcmVhZChhcmdzKSk7XG4gICAgICAgICAgdmFyIGZuID0gcztcblxuICAgICAgICAgIGlmICghcy50aGVuKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBzKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgZm4gPSBmaW5hbFJlcXVlc3RNZXRob2Qocyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICB2YXIgdXJsXzIgPSBzLnVybCxcbiAgICAgICAgICAgICAgICAgICAgcmVzdF8yID0gX19yZXN0KHMsIFtcInVybFwiXSk7XG5cbiAgICAgICAgICAgICAgICBmbiA9IHJlcXVlc3RNZXRob2QgPyByZXF1ZXN0TWV0aG9kKHMpIDogZmV0Y2hQcm94eSh1cmxfMiwgcmVzdF8yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmbi50aGVuKHJlc29sdmUpW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gIH1cblxuICBpZiAobG9hZE1vcmUpIHtcbiAgICByZXR1cm4gdXNlTG9hZE1vcmUocHJvbWlzZVNlcnZpY2UsIGZpbmFsT3B0aW9ucyk7XG4gIH1cblxuICBpZiAocGFnaW5hdGVkKSB7XG4gICAgcmV0dXJuIHVzZVBhZ2luYXRlZChwcm9taXNlU2VydmljZSwgZmluYWxPcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiB1c2VBc3luYyhwcm9taXNlU2VydmljZSwgZmluYWxPcHRpb25zKTtcbn1cblxudmFyIFVzZVJlcXVlc3RQcm92aWRlciA9IENvbmZpZ0NvbnRleHQuUHJvdmlkZXI7IC8vIFVzZUFQSVByb3ZpZGVyIOW3sue7j+W6n+W8g++8jOatpOWkhOS4uuS6huWFvOWuuSB1bWlqcyDmj5Lku7YgcGx1Z2luLXJlcXVlc3RcblxudmFyIFVzZUFQSVByb3ZpZGVyID0gVXNlUmVxdWVzdFByb3ZpZGVyO1xuZXhwb3J0IHsgdXNlQXN5bmMsIHVzZVBhZ2luYXRlZCwgdXNlTG9hZE1vcmUsIFVzZVJlcXVlc3RQcm92aWRlciwgVXNlQVBJUHJvdmlkZXIgfTtcbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3Q7IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldEVsZW1lbnQodGFyZ2V0LCBkZWZhdWx0RWxlbWVudCkge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybiBkZWZhdWx0RWxlbWVudDtcbiAgfVxuXG4gIHZhciB0YXJnZXRFbGVtZW50O1xuXG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGFyZ2V0RWxlbWVudCA9IHRhcmdldCgpO1xuICB9IGVsc2UgaWYgKCdjdXJyZW50JyBpbiB0YXJnZXQpIHtcbiAgICB0YXJnZXRFbGVtZW50ID0gdGFyZ2V0LmN1cnJlbnQ7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0RWxlbWVudCA9IHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRFbGVtZW50O1xufSIsInZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdXNlVG9nZ2xlKGRlZmF1bHRWYWx1ZSwgcmV2ZXJzZVZhbHVlKSB7XG4gIGlmIChkZWZhdWx0VmFsdWUgPT09IHZvaWQgMCkge1xuICAgIGRlZmF1bHRWYWx1ZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIF9hID0gX19yZWFkKHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSksIDIpLFxuICAgICAgc3RhdGUgPSBfYVswXSxcbiAgICAgIHNldFN0YXRlID0gX2FbMV07XG5cbiAgdmFyIGFjdGlvbnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmV2ZXJzZVZhbHVlT3JpZ2luID0gcmV2ZXJzZVZhbHVlID09PSB1bmRlZmluZWQgPyAhZGVmYXVsdFZhbHVlIDogcmV2ZXJzZVZhbHVlOyAvLyDliIfmjaLov5Tlm57lgLxcblxuICAgIHZhciB0b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUodmFsdWUpIHtcbiAgICAgIC8vIOW8uuWItui/lOWbnueKtuaAgeWAvO+8jOmAgueUqOS6jueCueWHu+aTjeS9nFxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2V0U3RhdGUodmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldFN0YXRlKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBzID09PSBkZWZhdWx0VmFsdWUgPyByZXZlcnNlVmFsdWVPcmlnaW4gOiBkZWZhdWx0VmFsdWU7XG4gICAgICB9KTtcbiAgICB9OyAvLyDorr7nva7pu5jorqTlgLxcblxuXG4gICAgdmFyIHNldExlZnQgPSBmdW5jdGlvbiBzZXRMZWZ0KCkge1xuICAgICAgcmV0dXJuIHNldFN0YXRlKGRlZmF1bHRWYWx1ZSk7XG4gICAgfTsgLy8g6K6+572u5Y+W5Y+N5YC8XG5cblxuICAgIHZhciBzZXRSaWdodCA9IGZ1bmN0aW9uIHNldFJpZ2h0KCkge1xuICAgICAgcmV0dXJuIHNldFN0YXRlKHJldmVyc2VWYWx1ZU9yaWdpbik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB0b2dnbGU6IHRvZ2dsZSxcbiAgICAgIHNldExlZnQ6IHNldExlZnQsXG4gICAgICBzZXRSaWdodDogc2V0UmlnaHRcbiAgICB9O1xuICB9LCBbZGVmYXVsdFZhbHVlLCByZXZlcnNlVmFsdWVdKTtcbiAgcmV0dXJuIFtzdGF0ZSwgYWN0aW9uc107XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRvZ2dsZTsiLCJ2YXIgX19yZWFkID0gdGhpcyAmJiB0aGlzLl9fcmVhZCB8fCBmdW5jdGlvbiAobywgbikge1xuICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gIGlmICghbSkgcmV0dXJuIG87XG4gIHZhciBpID0gbS5jYWxsKG8pLFxuICAgICAgcixcbiAgICAgIGFyID0gW10sXG4gICAgICBlO1xuXG4gIHRyeSB7XG4gICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyO1xufTtcblxuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSAnLi4vdXNlVG9nZ2xlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUJvb2xlYW4oZGVmYXVsdFZhbHVlKSB7XG4gIGlmIChkZWZhdWx0VmFsdWUgPT09IHZvaWQgMCkge1xuICAgIGRlZmF1bHRWYWx1ZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIF9hID0gX19yZWFkKHVzZVRvZ2dsZShkZWZhdWx0VmFsdWUpLCAyKSxcbiAgICAgIHN0YXRlID0gX2FbMF0sXG4gICAgICB0b2dnbGUgPSBfYVsxXS50b2dnbGU7XG5cbiAgdmFyIGFjdGlvbnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2V0VHJ1ZSA9IGZ1bmN0aW9uIHNldFRydWUoKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlKHRydWUpO1xuICAgIH07XG5cbiAgICB2YXIgc2V0RmFsc2UgPSBmdW5jdGlvbiBzZXRGYWxzZSgpIHtcbiAgICAgIHJldHVybiB0b2dnbGUoZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9nZ2xlOiB0b2dnbGUsXG4gICAgICBzZXRUcnVlOiBzZXRUcnVlLFxuICAgICAgc2V0RmFsc2U6IHNldEZhbHNlXG4gICAgfTtcbiAgfSwgW3RvZ2dsZV0pO1xuICByZXR1cm4gW3N0YXRlLCBhY3Rpb25zXTtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFRhcmdldEVsZW1lbnQgfSBmcm9tICcuLi91dGlscy9kb20nO1xuXG5mdW5jdGlvbiB1c2VFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIGhhbmRsZXJSZWYgPSB1c2VSZWYoKTtcbiAgaGFuZGxlclJlZi5jdXJyZW50ID0gaGFuZGxlcjtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IGdldFRhcmdldEVsZW1lbnQob3B0aW9ucy50YXJnZXQsIHdpbmRvdyk7XG5cbiAgICBpZiAoIXRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBldmVudExpc3RlbmVyID0gZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgICAgcmV0dXJuIGhhbmRsZXJSZWYuY3VycmVudCAmJiBoYW5kbGVyUmVmLmN1cnJlbnQoZXZlbnQpO1xuICAgIH07XG5cbiAgICB0YXJnZXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCB7XG4gICAgICBjYXB0dXJlOiBvcHRpb25zLmNhcHR1cmUsXG4gICAgICBvbmNlOiBvcHRpb25zLm9uY2UsXG4gICAgICBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmVcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdGFyZ2V0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwge1xuICAgICAgICBjYXB0dXJlOiBvcHRpb25zLmNhcHR1cmVcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtldmVudE5hbWUsIG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLmNhcHR1cmUsIG9wdGlvbnMub25jZSwgb3B0aW9ucy5wYXNzaXZlXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUV2ZW50TGlzdGVuZXI7IiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ3JlYXRpb24oZmFjdG9yeSwgZGVwcykge1xuICB2YXIgY3VycmVudCA9IHVzZVJlZih7XG4gICAgZGVwczogZGVwcyxcbiAgICBvYmo6IHVuZGVmaW5lZCxcbiAgICBpbml0aWFsaXplZDogZmFsc2VcbiAgfSkuY3VycmVudDtcblxuICBpZiAoY3VycmVudC5pbml0aWFsaXplZCA9PT0gZmFsc2UgfHwgIWRlcHNBcmVTYW1lKGN1cnJlbnQuZGVwcywgZGVwcykpIHtcbiAgICBjdXJyZW50LmRlcHMgPSBkZXBzO1xuICAgIGN1cnJlbnQub2JqID0gZmFjdG9yeSgpO1xuICAgIGN1cnJlbnQuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnQub2JqO1xufVxuXG5mdW5jdGlvbiBkZXBzQXJlU2FtZShvbGREZXBzLCBkZXBzKSB7XG4gIGlmIChvbGREZXBzID09PSBkZXBzKSByZXR1cm4gdHJ1ZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9sZERlcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAob2xkRGVwc1tpXSAhPT0gZGVwc1tpXSkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwidmFyIF9fcmVhZCA9IHRoaXMgJiYgdGhpcy5fX3JlYWQgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSxcbiAgICAgIHIsXG4gICAgICBhciA9IFtdLFxuICAgICAgZTtcblxuICB0cnkge1xuICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSB7XG4gICAgICBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbmltcG9ydCB1c2VCb29sZWFuIGZyb20gJy4uL3VzZUJvb2xlYW4nO1xuaW1wb3J0IHVzZUV2ZW50TGlzdGVuZXIgZnJvbSAnLi4vdXNlRXZlbnRMaXN0ZW5lcic7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICB2YXIgX2EgPSBvcHRpb25zIHx8IHt9LFxuICAgICAgb25FbnRlciA9IF9hLm9uRW50ZXIsXG4gICAgICBvbkxlYXZlID0gX2Eub25MZWF2ZTtcblxuICB2YXIgX2IgPSBfX3JlYWQodXNlQm9vbGVhbihmYWxzZSksIDIpLFxuICAgICAgc3RhdGUgPSBfYlswXSxcbiAgICAgIF9jID0gX2JbMV0sXG4gICAgICBzZXRUcnVlID0gX2Muc2V0VHJ1ZSxcbiAgICAgIHNldEZhbHNlID0gX2Muc2V0RmFsc2U7XG5cbiAgdXNlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBvbkVudGVyICYmIG9uRW50ZXIoKTtcbiAgICBzZXRUcnVlKCk7XG4gIH0sIHtcbiAgICB0YXJnZXQ6IHRhcmdldFxuICB9KTtcbiAgdXNlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBvbkxlYXZlICYmIG9uTGVhdmUoKTtcbiAgICBzZXRGYWxzZSgpO1xuICB9LCB7XG4gICAgdGFyZ2V0OiB0YXJnZXRcbiAgfSk7XG4gIHJldHVybiBzdGF0ZTtcbn0pOyIsInZhciBfX3JlYWQgPSB0aGlzICYmIHRoaXMuX19yZWFkIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksXG4gICAgICByLFxuICAgICAgYXIgPSBbXSxcbiAgICAgIGU7XG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkge1xuICAgICAgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZSA9IHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXI7XG59O1xuXG52YXIgX19zcHJlYWQgPSB0aGlzICYmIHRoaXMuX19zcHJlYWQgfHwgZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgfVxuXG4gIHJldHVybiBhcjtcbn07XG5cbmltcG9ydCB1c2VSZXF1ZXN0LCB7IFVzZVJlcXVlc3RQcm92aWRlciB9IGZyb20gJ0BhaG9va3Nqcy91c2UtcmVxdWVzdCc7XG5pbXBvcnQgdXNlQ29udHJvbGxhYmxlVmFsdWUgZnJvbSAnLi91c2VDb250cm9sbGFibGVWYWx1ZSc7XG5pbXBvcnQgdXNlRHluYW1pY0xpc3QgZnJvbSAnLi91c2VEeW5hbWljTGlzdCc7XG5pbXBvcnQgdXNlRXZlbnRFbWl0dGVyIGZyb20gJy4vdXNlRXZlbnRFbWl0dGVyJztcbmltcG9ydCB1c2VWaXJ0dWFsTGlzdCBmcm9tICcuL3VzZVZpcnR1YWxMaXN0JztcbmltcG9ydCB7IGNvbmZpZ1Jlc3BvbnNpdmUsIHVzZVJlc3BvbnNpdmUgfSBmcm9tICcuL3VzZVJlc3BvbnNpdmUnO1xuaW1wb3J0IHVzZVNpemUgZnJvbSAnLi91c2VTaXplJztcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSBmcm9tICcuL3VzZUxvY2FsU3RvcmFnZVN0YXRlJztcbmltcG9ydCB1c2VTZXNzaW9uU3RvcmFnZVN0YXRlIGZyb20gJy4vdXNlU2Vzc2lvblN0b3JhZ2VTdGF0ZSc7XG5pbXBvcnQgdXNlVXBkYXRlRWZmZWN0IGZyb20gJy4vdXNlVXBkYXRlRWZmZWN0JztcbmltcG9ydCB1c2VVcGRhdGVMYXlvdXRFZmZlY3QgZnJvbSAnLi91c2VVcGRhdGVMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHVzZUJvb2xlYW4gZnJvbSAnLi91c2VCb29sZWFuJztcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSAnLi91c2VUb2dnbGUnO1xuaW1wb3J0IHVzZURvY3VtZW50VmlzaWJpbGl0eSBmcm9tICcuL3VzZURvY3VtZW50VmlzaWJpbGl0eSc7XG5pbXBvcnQgdXNlU2VsZWN0aW9ucyBmcm9tICcuL3VzZVNlbGVjdGlvbnMnO1xuaW1wb3J0IHVzZVRocm90dGxlIGZyb20gJy4vdXNlVGhyb3R0bGUnO1xuaW1wb3J0IHVzZVRocm90dGxlRm4gZnJvbSAnLi91c2VUaHJvdHRsZUZuJztcbmltcG9ydCB1c2VUaHJvdHRsZUVmZmVjdCBmcm9tICcuL3VzZVRocm90dGxlRWZmZWN0JztcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tICcuL3VzZURlYm91bmNlJztcbmltcG9ydCB1c2VEZWJvdW5jZUZuIGZyb20gJy4vdXNlRGVib3VuY2VGbic7XG5pbXBvcnQgdXNlUHJldmlvdXMgZnJvbSAnLi91c2VQcmV2aW91cyc7XG5pbXBvcnQgdXNlTW91c2UgZnJvbSAnLi91c2VNb3VzZSc7XG5pbXBvcnQgdXNlU2Nyb2xsIGZyb20gJy4vdXNlU2Nyb2xsJztcbmltcG9ydCB1c2VDbGlja0F3YXkgZnJvbSAnLi91c2VDbGlja0F3YXknO1xuaW1wb3J0IHVzZUZ1bGxzY3JlZW4gZnJvbSAnLi91c2VGdWxsc2NyZWVuJztcbmltcG9ydCB1c2VJblZpZXdwb3J0IGZyb20gJy4vdXNlSW5WaWV3cG9ydCc7XG5pbXBvcnQgdXNlS2V5UHJlc3MgZnJvbSAnLi91c2VLZXlQcmVzcyc7XG5pbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tICcuL3VzZUV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHVzZUhvdmVyIGZyb20gJy4vdXNlSG92ZXInO1xuaW1wb3J0IHVzZVVubW91bnQgZnJvbSAnLi91c2VVbm1vdW50JztcbmltcG9ydCB1c2VBbnRkVGFibGUgZnJvbSAnLi91c2VBbnRkVGFibGUnO1xuaW1wb3J0IHVzZUZ1c2lvblRhYmxlIGZyb20gJy4vdXNlRnVzaW9uVGFibGUnO1xuaW1wb3J0IHVzZVNldCBmcm9tICcuL3VzZVNldCc7XG5pbXBvcnQgdXNlUGVyc2lzdEZuIGZyb20gJy4vdXNlUGVyc2lzdEZuJztcbmltcG9ydCB1c2VNYXAgZnJvbSAnLi91c2VNYXAnO1xuaW1wb3J0IHVzZUNyZWF0aW9uIGZyb20gJy4vdXNlQ3JlYXRpb24nO1xuaW1wb3J0IHVzZURyb3AgZnJvbSAnLi91c2VEcm9wJztcbmltcG9ydCB1c2VEcmFnIGZyb20gJy4vdXNlRHJhZyc7XG5pbXBvcnQgdXNlTW91bnQgZnJvbSAnLi91c2VNb3VudCc7XG5pbXBvcnQgdXNlVGV4dFNlbGVjdGlvbiBmcm9tICcuL3VzZVRleHRTZWxlY3Rpb24nO1xuaW1wb3J0IHVzZUNvdW50ZXIgZnJvbSAnLi91c2VDb3VudGVyJztcbmltcG9ydCB1c2VVcGRhdGUgZnJvbSAnLi91c2VVcGRhdGUnO1xuaW1wb3J0IHVzZUV2ZW50VGFyZ2V0IGZyb20gJy4vdXNlRXZlbnRUYXJnZXQnO1xuaW1wb3J0IHVzZUhpc3RvcnlUcmF2ZWwgZnJvbSAnLi91c2VIaXN0b3J5VHJhdmVsJztcbmltcG9ydCB1c2VEZWJvdW5jZUVmZmVjdCBmcm9tICcuL3VzZURlYm91bmNlRWZmZWN0JztcbmltcG9ydCB1c2VDb29raWVTdGF0ZSBmcm9tICcuL3VzZUNvb2tpZVN0YXRlJztcbmltcG9ydCB1c2VTZXRTdGF0ZSBmcm9tICcuL3VzZVNldFN0YXRlJztcbmltcG9ydCB1c2VJbnRlcnZhbCBmcm9tICcuL3VzZUludGVydmFsJztcbmltcG9ydCB1c2VXaHlEaWRZb3VVcGRhdGUgZnJvbSAnLi91c2VXaHlEaWRZb3VVcGRhdGUnO1xuaW1wb3J0IHVzZVRpdGxlIGZyb20gJy4vdXNlVGl0bGUnO1xuaW1wb3J0IHVzZU5ldHdvcmsgZnJvbSAnLi91c2VOZXR3b3JrJztcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJy4vdXNlVGltZW91dCc7XG5pbXBvcnQgdXNlUmVhY3RpdmUgZnJvbSAnLi91c2VSZWFjdGl2ZSc7XG5pbXBvcnQgdXNlRmF2aWNvbiBmcm9tICcuL3VzZUZhdmljb24nO1xuaW1wb3J0IHVzZUNvdW50RG93biBmcm9tICcuL3VzZUNvdW50RG93bic7XG5pbXBvcnQgdXNlV2ViU29ja2V0IGZyb20gJy4vdXNlV2ViU29ja2V0JztcbmltcG9ydCB1c2VMb2NrRm4gZnJvbSAnLi91c2VMb2NrRm4nO1xuaW1wb3J0IHVzZVRyYWNrZWRFZmZlY3QgZnJvbSAnLi91c2VUcmFja2VkRWZmZWN0JztcbmltcG9ydCB1c2VVbm1vdW50ZWRSZWYgZnJvbSAnLi91c2VVbm1vdW50ZWRSZWYnO1xuaW1wb3J0IHVzZUV4dGVybmFsIGZyb20gJy4vdXNlRXh0ZXJuYWwnO1xuaW1wb3J0IHVzZVNhZmVTdGF0ZSBmcm9tICcuL3VzZVNhZmVTdGF0ZSc7XG5cbnZhciB1c2VDb250cm9sbGVkVmFsdWUgPSBmdW5jdGlvbiB1c2VDb250cm9sbGVkVmFsdWUoKSB7XG4gIHZhciBhcmdzID0gW107XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gIH1cblxuICBjb25zb2xlLndhcm4oJ3VzZUNvbnRyb2xsZWRWYWx1ZSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbi4gUGxlYXNlIHVzZSB1c2VDb250cm9sbGFibGVWYWx1ZSBpbnN0ZWFkLicpO1xuICByZXR1cm4gdXNlQ29udHJvbGxhYmxlVmFsdWUuYXBwbHkodm9pZCAwLCBfX3NwcmVhZChhcmdzKSk7XG59O1xuXG5leHBvcnQgeyB1c2VDb250cm9sbGVkVmFsdWUsIHVzZUNvbnRyb2xsYWJsZVZhbHVlLCB1c2VEeW5hbWljTGlzdCwgdXNlVmlydHVhbExpc3QsIHVzZVJlc3BvbnNpdmUsIHVzZUV2ZW50RW1pdHRlciwgdXNlTG9jYWxTdG9yYWdlU3RhdGUsIHVzZVNlc3Npb25TdG9yYWdlU3RhdGUsIHVzZVNpemUsIGNvbmZpZ1Jlc3BvbnNpdmUsIHVzZVVwZGF0ZUVmZmVjdCwgdXNlVXBkYXRlTGF5b3V0RWZmZWN0LCB1c2VCb29sZWFuLCB1c2VUb2dnbGUsIHVzZURvY3VtZW50VmlzaWJpbGl0eSwgdXNlU2VsZWN0aW9ucywgdXNlVGhyb3R0bGUsIHVzZVRocm90dGxlRm4sIHVzZVRocm90dGxlRWZmZWN0LCB1c2VEZWJvdW5jZSwgdXNlRGVib3VuY2VGbiwgdXNlRGVib3VuY2VFZmZlY3QsIHVzZVByZXZpb3VzLCB1c2VNb3VzZSwgdXNlU2Nyb2xsLCB1c2VDbGlja0F3YXksIHVzZUZ1bGxzY3JlZW4sIHVzZUluVmlld3BvcnQsIHVzZUtleVByZXNzLCB1c2VFdmVudExpc3RlbmVyLCB1c2VIb3ZlciwgdXNlUmVxdWVzdCwgVXNlUmVxdWVzdFByb3ZpZGVyLCB1c2VBbnRkVGFibGUsIHVzZVVubW91bnQsIHVzZVNldCwgdXNlUGVyc2lzdEZuLCB1c2VNYXAsIHVzZUNyZWF0aW9uLCB1c2VEcmFnLCB1c2VEcm9wLCB1c2VNb3VudCwgdXNlQ291bnRlciwgdXNlVXBkYXRlLCB1c2VUZXh0U2VsZWN0aW9uLCB1c2VFdmVudFRhcmdldCwgdXNlSGlzdG9yeVRyYXZlbCwgdXNlRnVzaW9uVGFibGUsIHVzZUNvb2tpZVN0YXRlLCB1c2VTZXRTdGF0ZSwgdXNlSW50ZXJ2YWwsIHVzZVdoeURpZFlvdVVwZGF0ZSwgdXNlVGl0bGUsIHVzZU5ldHdvcmssIHVzZVRpbWVvdXQsIHVzZVJlYWN0aXZlLCB1c2VGYXZpY29uLCB1c2VDb3VudERvd24sIHVzZVRyYWNrZWRFZmZlY3QsIHVzZVdlYlNvY2tldCwgdXNlTG9ja0ZuLCB1c2VVbm1vdW50ZWRSZWYsIHVzZUV4dGVybmFsLCB1c2VTYWZlU3RhdGUgfTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVuaXR5TG9hZGVyU2VydmljZSA9IHZvaWQgMDtcbi8vIFRPRE8gdHVybiBpbnRvIGhvb2tcbnZhciBVbml0eUxvYWRlclNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVW5pdHlMb2FkZXJTZXJ2aWNlKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWZlcmVuY2UgdG8gdGhlIGRvY3VtZW50IGhlYWQuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEB0eXBlIHtIVE1MSGVhZEVsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRvY3VtZW50SGVhZCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgdGhlIFVuaXR5IGxvYWRlciBzY3JpcHQgdG8gdGhlIHdpbmRvdy4gV2hlbiBhIHZlcnNpb24gb2YgdGhlIGxvYWRlclxuICAgICAqIGlzIGFscmVhZHkgYXBwZW5kZWQsIHdlJ2xsIHNraXAgdG8gdGhlIHZhbGlkYXRpb24gcmlnaHQgYXdheS4gQmVmb3JlXG4gICAgICogcmVzb2x2aW5nIGEgdHlwZSBjaGVjayBvbiB0aGUgY3JlYXRlVW5pdHlJbnN0YW5jZSBtZXRob2QgaXMgZG9uZS5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCB0aGUgcGF0aCB0byB0aGUgVW5pdHkgbG9hZGVyIGZpbGVcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gQSBwcm9taXNlIHdoZW4gcmVzb2x2aW5nIHdoZW4gdGhlIGZpbGUgaXMgbG9hZGVkIHN1Y2Nlc2Z1bGxpbmcuXG4gICAgICovXG4gICAgVW5pdHlMb2FkZXJTZXJ2aWNlLnByb3RvdHlwZS5hZGRGcm9tVXJsID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2hhc1NpbWlsYXJVbml0eUxvYWRlclVybEluc3RhbmNlLCBfaSwgX2EsIF91bml0eUxvYWRlckluc3RhbmNlLCBfaHRtbFNjcmlwdEVsZW1lbnQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaGFzU2ltaWxhclVuaXR5TG9hZGVyVXJsSW5zdGFuY2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBfYSA9IFVuaXR5TG9hZGVyU2VydmljZS51bml0eUxvYWRlckluc3RhbmNlczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdW5pdHlMb2FkZXJJbnN0YW5jZSA9IF9hW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3VuaXR5TG9hZGVySW5zdGFuY2UudXJsID09PSB1cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9oYXNTaW1pbGFyVW5pdHlMb2FkZXJVcmxJbnN0YW5jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShfaGFzU2ltaWxhclVuaXR5TG9hZGVyVXJsSW5zdGFuY2UgPT09IGZhbHNlKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmFwcGVuZEFuZExvYWRTY3JpcHQodXJsKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9odG1sU2NyaXB0RWxlbWVudCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVuaXR5TG9hZGVyU2VydmljZS51bml0eUxvYWRlckluc3RhbmNlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sU2NyaXB0RWxlbWVudDogX2h0bWxTY3JpcHRFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3JlYXRlVW5pdHlJbnN0YW5jZSAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbnZva2UgVW5pdHkgTG9hZGVyLCBsb2FkZWQgaW5jb3JyZWN0bHkuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBuZXcgc2NyaXB0IHRhZyB0byB0aGUgd2luZG93LiBUaGUgcHJvbWlzZSByZXNvbHZlcyB3aGVuIHRoZSBzY3JpcHRcbiAgICAgKiBpcyBsb2FkZWQgYW5kIHJlamVjdHMgd2hlbiBpdCBmYWlsZWQgdG8gbG9hZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCBvZiB0aGUgc2NyaXB0XG4gICAgICogQHJldHVybnMgQSBwcm9taXNlIGNvbnRhaW5pbmcgdGhlIEhUTUwgU2NyaXB0IEVsZSxlbnRcbiAgICAgKi9cbiAgICBVbml0eUxvYWRlclNlcnZpY2UucHJvdG90eXBlLmFwcGVuZEFuZExvYWRTY3JpcHQgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLmRvY3VtZW50SGVhZCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHZhciBfc2NyaXB0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgICAgICBfc2NyaXB0VGFnLnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuICAgICAgICAgICAgICAgIF9zY3JpcHRUYWcuYXN5bmMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9zY3JpcHRUYWcuc3JjID0gdXJsO1xuICAgICAgICAgICAgICAgIF9zY3JpcHRUYWcub25sb2FkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZShfc2NyaXB0VGFnKTsgfTtcbiAgICAgICAgICAgICAgICBfc2NyaXB0VGFnLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcIlVuYWJsZSB0byBsb2FkIFwiICsgdXJsICsgXCIgXCIgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy5kb2N1bWVudEhlYWQuYXBwZW5kQ2hpbGQoX3NjcmlwdFRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gYWxsIFVuaXR5TG9hZGVyIHNjcmlwdCB0YWdzIGFuZCB0aGVpciByZXNwZWN0aXZlIHVybHMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7QXJyYXk8eyB1cmw6IHN0cmluZzsgaHRtbFNjcmlwdEVsZW1lbnQ6IEhUTUxTY3JpcHRFbGVtZW50OyB9Pn1cbiAgICAgKi9cbiAgICBVbml0eUxvYWRlclNlcnZpY2UudW5pdHlMb2FkZXJJbnN0YW5jZXMgPSBuZXcgQXJyYXkoKTtcbiAgICByZXR1cm4gVW5pdHlMb2FkZXJTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydHMuVW5pdHlMb2FkZXJTZXJ2aWNlID0gVW5pdHlMb2FkZXJTZXJ2aWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5pdHktbG9hZGVyLXNlcnZpY2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVuaXR5ID0gdm9pZCAwO1xudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgdW5pdHlfbG9hZGVyX3NlcnZpY2VfMSA9IHJlcXVpcmUoXCIuLi9zZXJ2aWNlcy91bml0eS1sb2FkZXItc2VydmljZVwiKTtcbi8vIFRPRE8gdHVybiBpbnRvIGZ1bmN0aW9uYWwgY29tcG9uZW50XG52YXIgVW5pdHkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFVuaXR5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFVuaXR5KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBVbml0eUNvbnRleHQgcGFzc2VkIGJ5IHRoZSBwcm9wcy5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHR5cGUge1VuaXR5Q29udGV4dH1cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnVuaXR5Q29udGV4dCA9IF90aGlzLnByb3BzLnVuaXR5Q29udGV4dDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBVbml0eUxvYWRlciBzZXJ2aWNlIGluc3RhbmNlLlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAdHlwZSB7VW5pdHlMb2FkZXJTZXJ2aWNlfVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMudW5pdHlMb2FkZXJTZXJ2aWNlID0gbmV3IHVuaXR5X2xvYWRlcl9zZXJ2aWNlXzEuVW5pdHlMb2FkZXJTZXJ2aWNlKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGZsYWcgcmVwcmVzZW50aW5nIHRoZSBjb21wb25lbnQncyBtb3VudCBzdGF0ZS5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5pc0NvbXBvbmVudE1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBpbnZva2VkIGJ5IHRoZSBVbml0eUluc3RhbmNlIHdoZW4gdGhlIGluaXRpYWxpemF0aW9uIGlzIHByb2dyZXNzaW5nLlxuICAgICAqIFdpbGwgYmUgdXNlZCB0byB0cmFjayB0aGUgbG9hZGluZyBwcm9ncmVzc2lvbiBhbmQgaW52b2tlcyB0aGUgZXZlbnQgbGlzdGVuZXJzXG4gICAgICogZm9yIGJvdGggJ3Byb2dyZXNzJyBhbmQgJ2xvYWRlZCcgd2hlbiB0aGUgcHJvZ3Jlc3Npb24gaGl0cyBhIHZhbHVlIG9mICcxJy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9ncmVzc2lvblxuICAgICAqL1xuICAgIFVuaXR5LnByb3RvdHlwZS5vblByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzaW9uKSB7XG4gICAgICAgIHRoaXMudW5pdHlDb250ZXh0LmRpc3BhdGNoRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIHByb2dyZXNzaW9uKTtcbiAgICAgICAgaWYgKHByb2dyZXNzaW9uID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXR5Q29udGV4dC5kaXNwYXRjaEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRcIik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuaHRtbENhbnZhc0VsZW1lbnRSZWZlcmVuY2UgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgdGhpcy51bml0eUNvbnRleHQuZGlzcGF0Y2hFdmVudExpc3RlbmVyKFwiY2FudmFzXCIsIHRoaXMuaHRtbENhbnZhc0VsZW1lbnRSZWZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFdmVudCBpbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLiBUaGlzIHNldHMgdGhlIGNvbXBvbmVudFxuICAgICAqIHJlZmVyZW5jZSBhbmQgc3RhcnRzIHRoZSBtb3VudGluZyBvZiB0aGUgVW5pdHlJbnN0YW5jZS5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgVW5pdHkucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQ29tcG9uZW50TW91bnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubW91bnRVbml0eUluc3RhbmNlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFdmVudCBpbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCB3aWxsIHVubW91bnQuIFRoaXMgZm9yY2UgcXVpdHMgdGhlXG4gICAgICogVW5pdHlJbnN0YW5jZSB3aGljaCB3aWxsIGNsZWFyIGl0IGZyb20gdGhlIG1lbW9yeS5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgVW5pdHkucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuaXR5Q29udGV4dC5xdWl0VW5pdHlJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmlzQ29tcG9uZW50TW91bnRlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZWQgdGhlIFVuaXR5IExvYWRlciBhbmQgbW91bnRzIHRoZSBVbml0eUluc3RhbmNlIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAYXN5bmNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gYSBwcm9taXNlIHJlc29sdmluZyB3aGVuIFVuaXR5IGxvYWRlZCBjb3JyZWN0bHkuXG4gICAgICovXG4gICAgVW5pdHkucHJvdG90eXBlLm1vdW50VW5pdHlJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF91bml0eUluc3RhbmNlUGFyYW1ldGVycywgX3VuaXR5SW5zdGFuY2UsIG1lc3NhZ2VfMTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW5pdHkgcmVxdWlyZXMgdGhlIGxvYWRlciBzY3JpcHQgdG8gYmUgYXBwZW5kZWQgYW5kIGxvYWRlZCBiZWZvcmUgd2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbiBzYWZlbHkgaW5zdGFudGlhdGUgVW5pdHkgYW5kIG1vdW50IHRoZSBjb21wb25lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnVuaXR5TG9hZGVyU2VydmljZS5hZGRGcm9tVXJsKHRoaXMudW5pdHlDb250ZXh0LnVuaXR5Q29uZmlnLmxvYWRlclVybCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVbml0eSByZXF1aXJlcyB0aGUgbG9hZGVyIHNjcmlwdCB0byBiZSBhcHBlbmRlZCBhbmQgbG9hZGVkIGJlZm9yZSB3ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FuIHNhZmVseSBpbnN0YW50aWF0ZSBVbml0eSBhbmQgbW91bnQgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gdGhlIGxvYWRlciBzZXJ2aWNlIHdhcyBmZXRjaGluZyB0aGUgcmVxdWlyZWQgc2NyaXB0cywgaXQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvc3NpYmxlIGZvciB0aGUgY29tcG9uZW50IHRvIGJlIHVubW91bnRlZC4gVGhpcyBpcyB3aHkgd2UgY2hlY2sgaWYgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzIHN0aWxsIG1vdW50ZWQsIGlmIG5vdCwgd2UgZG8gbm90IHByb2NlZWQgaW5zdGFudGlhdGluZyBVbml0eS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50TW91bnRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdW5pdHlJbnN0YW5jZVBhcmFtZXRlcnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy51bml0eUNvbnRleHQudW5pdHlDb25maWcpLCB7IHByaW50RXJyOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMudW5pdHlDb250ZXh0LmRpc3BhdGNoRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHByaW50OiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMudW5pdHlDb250ZXh0LmRpc3BhdGNoRXZlbnRMaXN0ZW5lcihcImRlYnVnXCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5kZXZpY2VQaXhlbFJhdGlvICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3VuaXR5SW5zdGFuY2VQYXJhbWV0ZXJzLmRldmljZVBpeGVsUmF0aW8gPSB0aGlzLnByb3BzLmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bml0eUNvbnRleHQudW5pdHlDb25maWcud2ViZ2xDb250ZXh0QXR0cmlidXRlcyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF91bml0eUluc3RhbmNlUGFyYW1ldGVycy53ZWJnbENvbnRleHRBdHRyaWJ1dGVzID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bml0eUNvbnRleHQudW5pdHlDb25maWcud2ViZ2xDb250ZXh0QXR0cmlidXRlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm1hdGNoV2ViR0xUb0NhbnZhc1NpemUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdW5pdHlJbnN0YW5jZVBhcmFtZXRlcnMubWF0Y2hXZWJHTFRvQ2FudmFzU2l6ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWF0Y2hXZWJHTFRvQ2FudmFzU2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNyZWF0ZVVuaXR5SW5zdGFuY2UodGhpcy5odG1sQ2FudmFzRWxlbWVudFJlZmVyZW5jZSwgX3VuaXR5SW5zdGFuY2VQYXJhbWV0ZXJzLCB0aGlzLm9uUHJvZ3Jlc3MuYmluZCh0aGlzKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfdW5pdHlJbnN0YW5jZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbmFsbHkgcGFzcyB0aGUgaW5zdGFuY2UgYmFjayB0byB0aGUgY29udGV4dCBvYmplY3QuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXR5Q29udGV4dC5zZXRVbml0eUluc3RhbmNlKF91bml0eUluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBjcmVhdGlvbiBvZiB0aGUgVW5pdHkgSW5zdGFuY2UgaXMgYXN5bmMsIHdlJ2xsIGNoZWNrIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29tcG9uZW50J3MgbW91bnQgc3RhdGUgcmlnaHQgYWZ0YXRlciBpbnN0YW50aWF0aW5nLiBJZiB0aGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpcyBubyBsb25nZXIgbW91bnRlZCwgd2UnbGwgcXVpdCB0aGUgVW5pdHkgaW5zdGFuY2UgcmlnaHQgYXdheS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgbmVlZHMgdG8gb2NjdXIgYWZ0ZXIgdGhlIHNldFVuaXR5SW5zdGFuY2UgY2FsbCBiZWNhdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBxdWl0VW5pdHlJbnN0YW5jZSByZXF1aXJlcyB0aGUgaW5zdGFuY2UgdG8gYmUgc2V0LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSEFDSyByZXF1aXJlcyB0eXBlIGNhc3QgdG8gYm9vbGVhbiBkdWUgdG8gYXdhaXQgYmV0d2VlbiBjb21wYXJpc29ucy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ29tcG9uZW50TW91bnRlZCA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMudW5pdHlDb250ZXh0LnF1aXRVbml0eUluc3RhbmNlKCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdHlDb250ZXh0LmRpc3BhdGNoRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG1lc3NhZ2VfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQSBwcm9ibGVtIG9jY3VycmVkIHdoaWxlIG1vdW50aW5nXCIsIG1lc3NhZ2VfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgdW5pdHkgd3JhcHBlciBhbmQgcGxheWVyLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmV0dXJucyB7UmVhY3QuUmVhY3ROb2RlfSBlbGVtZW50XG4gICAgICovXG4gICAgVW5pdHkucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHJlYWN0XzEuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB7XG4gICAgICAgICAgICByZWY6IGZ1bmN0aW9uIChyZWYpIHsgcmV0dXJuIChfdGhpcy5odG1sQ2FudmFzRWxlbWVudFJlZmVyZW5jZSA9IHJlZik7IH0sXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8IFwiXCIsXG4gICAgICAgICAgICB0YWJJbmRleDogdGhpcy5wcm9wcy50YWJJbmRleCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICBzdHlsZTogdGhpcy5wcm9wcy5zdHlsZSB8fCB7fSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVW5pdHk7XG59KHJlYWN0XzEuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5Vbml0eSA9IFVuaXR5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5pdHkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Vbml0eUNvbnRleHQgPSB2b2lkIDA7XG4vLyBUT0RPIHJlbW92ZSBmcm9tIGRpclxuLyoqXG4gKiBUaGUgVW5pdHkgQ29udGV4dC5cbiAqL1xudmFyIFVuaXR5Q29udGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBVbml0eSBjb250ZXh0IG1vZGVsLlxuICAgICAqIEBwYXJhbSB7SVVuaXR5Q29uZmlnfSB1bml0eUNvbmZpZyBUaGUgVW5pdHkgY29uZmlnIHVzZWQgdG8gYnVpbGQgdGhlIHBsYXllci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBVbml0eUNvbnRleHQodW5pdHlDb25maWcpIHtcbiAgICAgICAgdGhpcy51bml0eUNvbmZpZyA9IHVuaXR5Q29uZmlnO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBsaXN0IG9mIHRoZSBVbml0eUV2ZW50cyBiaW5kZWQgdG8gdGhpcyB1bml0eUNvbnRleHQuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEB0eXBlIHtJVW5pdHlFdmVudFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bml0eUV2ZW50cyA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHdpbmRvdy5SZWFjdFVuaXR5V2ViR0wgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICB3aW5kb3cuUmVhY3RVbml0eVdlYkdMID0ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHJlZmVyZW5jZSBvZiB0aGUgVW5pdHlJbnN0YW5jZS5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtVbml0eUluc3RhbmNlfSB1bml0eUluc3RhbmNlIHRoZSB0YXJnZXQgdW5pdHlJbnN0YW5jZS5cbiAgICAgKi9cbiAgICBVbml0eUNvbnRleHQucHJvdG90eXBlLnNldFVuaXR5SW5zdGFuY2UgPSBmdW5jdGlvbiAodW5pdHlJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLnVuaXR5SW5zdGFuY2UgPSB1bml0eUluc3RhbmNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUXVpdHMgdGhlIFVuaXR5IEluc3RhbmNlIGFuZCBjbGVhcnMgaXQgZnJvbSBtZW1vcnkuXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIFVuaXR5Q29udGV4dC5wcm90b3R5cGUucXVpdFVuaXR5SW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiB0aGlzLnVuaXR5SW5zdGFuY2UgIT09IFwidW5kZWZpbmVkXCIpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMudW5pdHlJbnN0YW5jZS5RdWl0KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnRMaXN0ZW5lcihcInF1aXR0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuaXR5SW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgbWVzc2FnZSB0byB0aGUgVW5pdHlJbnN0YW5jZSB0byBpbnZva2UgYSBwdWJsaWMgbWV0aG9kLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ2FtZU9iamVjdE5hbWUgdGhlIG5hbWUgb2YgdGhlIGdhbWUgb2JqZWN0IGluIHlvdXIgVW5pdHkgc2NlbmUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgdGhlIG5hbWUgb2YgdGhlIHB1YmxpYyBtZXRob2Qgb24gdGhlIGdhbWUgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbn0gcGFyYW1ldGVyIGFuIG9wdGlvbmFsIG1ldGhvZCBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgVW5pdHlDb250ZXh0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGdhbWVPYmplY3ROYW1lLCBtZXRob2ROYW1lLCBwYXJhbWV0ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVuaXR5SW5zdGFuY2UgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtZXRlciA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXR5SW5zdGFuY2UuU2VuZE1lc3NhZ2UoZ2FtZU9iamVjdE5hbWUsIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMudW5pdHlJbnN0YW5jZS5TZW5kTWVzc2FnZShnYW1lT2JqZWN0TmFtZSwgbWV0aG9kTmFtZSwgcGFyYW1ldGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGhlIFVuaXR5IHBsYXllci4gVGhlc2UgY2FuIGJlXG4gICAgICogc3lzdGVtIGV2ZW50cyBsaWtlIHdoZW4gdGhlIHBsYXllciBpcyBpbml0aWFsaXplZCBvciBsb2FkZXIgYW5kXG4gICAgICogeW91ciBjdXN0b20gZXZlbnRzIGZyb20gVW5pdHkuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgdGhlIGV2ZW50J3MgbmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGV2ZW50TGlzdGVuZXIgdGhlIGV2ZW50J3MgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBVbml0eUNvbnRleHQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnVuaXR5RXZlbnRzLnB1c2goeyBldmVudE5hbWU6IGV2ZW50TmFtZSwgZXZlbnRDYWxsYmFjazogZXZlbnRMaXN0ZW5lciB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICB3aW5kb3cuUmVhY3RVbml0eVdlYkdMW2V2ZW50TmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtZXRlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYSA9IDA7IF9hIDwgYXJndW1lbnRzLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzW19hXSA9IGFyZ3VtZW50c1tfYV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudExpc3RlbmVyLmFwcGx5KHZvaWQgMCwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgdGhlIEV2ZW50IExpc3RlbmVycyB3aXRoIGEgc3BlY2lmaWMgRXZlbnQgTmFtZS5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSB0aGUgZXZlbnQncyBuYW1lXG4gICAgICogQGV4YW1wbGUgdW5pdHlDb250ZXh0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiKTtcbiAgICAgKi9cbiAgICBVbml0eUNvbnRleHQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgIC8vIFRPRE8gcmVmYWN0b3IgdG8gXCJvZmZcIj9cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMudW5pdHlFdmVudHMubGVuZ3RoOyBfaSsrKVxuICAgICAgICAgICAgaWYgKHRoaXMudW5pdHlFdmVudHNbX2ldLmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKVxuICAgICAgICAgICAgICAgIHRoaXMudW5pdHlFdmVudHMuc3BsaWNlKF9pLCAxKTtcbiAgICAgICAgZGVsZXRlIHdpbmRvdy5SZWFjdFVuaXR5V2ViR0xbZXZlbnROYW1lXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIHRoZSBFdmVudCBMaXN0ZW5lcnMuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBleGFtcGxlIHVuaXR5Q29udGV4dC5yZW1vdmVBbGxFdmVudExpc3RlbmVycygpO1xuICAgICAqL1xuICAgIFVuaXR5Q29udGV4dC5wcm90b3R5cGUucmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE8gcmVmYWN0b3IgdG8gXCJvZmZcIj9cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMudW5pdHlFdmVudHMubGVuZ3RoOyBfaSsrKVxuICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5SZWFjdFVuaXR5V2ViR0xbdGhpcy51bml0eUV2ZW50c1tfaV0uZXZlbnROYW1lXTtcbiAgICAgICAgdGhpcy51bml0eUV2ZW50cyA9IFtdO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlcyBhbiBldmVudCBsaXN0ZW5lciB0aGF0IGhhcyBiZWVuIHJlZ2lzdGVyZWQgdXNpbmcgdGhlIG9uIG1ldGhvZC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSB0aGUgZXZlbnQncyBuYW1lXG4gICAgICogQHBhcmFtIHthbnl9IGV2ZW50VmFsdWUgdGhlIGV2ZW50J3MgdmFsdWVcbiAgICAgKiBAZXhhbXBsZSB1bml0eUNvbnRleHQuZGlzcGF0Y2hFdmVudExpc3RlbmVyKFwiZ2FtZU92ZXJcIiwgMTgwKTtcbiAgICAgKi9cbiAgICBVbml0eUNvbnRleHQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGV2ZW50VmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBfYiA9IHRoaXMudW5pdHlFdmVudHM7IF9hIDwgX2IubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICB2YXIgX3VuaXR5RXZlbnQgPSBfYltfYV07XG4gICAgICAgICAgICBpZiAoX3VuaXR5RXZlbnQuZXZlbnROYW1lID09PSBldmVudE5hbWUpXG4gICAgICAgICAgICAgICAgX3VuaXR5RXZlbnQuZXZlbnRDYWxsYmFjayhldmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRW5hYmxlcyBvciBkaXNhYmxlZCB0aGUgRnVsbHNjcmVlbiBtb2RlIG9mIHRoZSBVbml0eSBJbnN0YW5jZS5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkXG4gICAgICovXG4gICAgVW5pdHlDb250ZXh0LnByb3RvdHlwZS5zZXRGdWxsc2NyZWVuID0gZnVuY3Rpb24gKGVuYWJsZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVuaXR5SW5zdGFuY2UgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICB0aGlzLnVuaXR5SW5zdGFuY2UuU2V0RnVsbHNjcmVlbihlbmFibGVkID09PSB0cnVlID8gMSA6IDApO1xuICAgIH07XG4gICAgcmV0dXJuIFVuaXR5Q29udGV4dDtcbn0oKSk7XG5leHBvcnRzLlVuaXR5Q29udGV4dCA9IFVuaXR5Q29udGV4dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaXR5LWNvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVuaXR5Q29udGV4dCA9IHZvaWQgMDtcbnZhciB1bml0eV8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy91bml0eVwiKTtcbnZhciB1bml0eV9jb250ZXh0XzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvdW5pdHktY29udGV4dFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlVuaXR5Q29udGV4dFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5pdHlfY29udGV4dF8xLlVuaXR5Q29udGV4dDsgfSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuaXR5XzEuVW5pdHk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leHBvcnRzLmpzLm1hcCIsImltcG9ydCB7IHVzZUNyZWF0aW9uLCB1c2VIb3ZlciB9IGZyb20gXCJhaG9va3NcIjtcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIENTU1Byb3BlcnRpZXMsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVuaXR5LCB7IFVuaXR5Q29udGV4dCB9IGZyb20gXCJyZWFjdC11bml0eS13ZWJnbFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVuaXR5RkNQcm9wcyB7XG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xuICAgIGNsYXNzOiBzdHJpbmc7XG4gICAgdGFiSW5kZXg/OiBudW1iZXI7XG4gICAgbW9kZWxQYXRoOiBzdHJpbmc7XG4gICAgaG92ZXJHbz86IHN0cmluZztcbiAgICBob3Zlck1ldGhvZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBvbkV2ZW50PzogKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZFxuICAgIGV2ZW50TmFtZXM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVW5pdHlGQyhwcm9wczogVW5pdHlGQ1Byb3BzKSB7XG4gICAgY29uc3QgdW5pdHlDb250ZXh0ID0gdXNlQ3JlYXRpb24oXG4gICAgICAgICgpID0+XG4gICAgICAgICAgICBuZXcgVW5pdHlDb250ZXh0KHtcbiAgICAgICAgICAgICAgICBsb2FkZXJVcmw6IGAke3Byb3BzLm1vZGVsUGF0aH0ubG9hZGVyLmpzYCxcbiAgICAgICAgICAgICAgICBkYXRhVXJsOiBgJHtwcm9wcy5tb2RlbFBhdGh9LmRhdGFgLFxuICAgICAgICAgICAgICAgIGZyYW1ld29ya1VybDogYCR7cHJvcHMubW9kZWxQYXRofS5mcmFtZXdvcmsuanNgLFxuICAgICAgICAgICAgICAgIGNvZGVVcmw6IGAke3Byb3BzLm1vZGVsUGF0aH0ud2FzbWBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBbcHJvcHMubW9kZWxQYXRoXVxuICAgICk7XG5cbiAgICBjb25zdCByZWYgPSB1c2VSZWY8YW55PigpO1xuICAgIGNvbnN0IGlzSG92ZXJpbmcgPSB1c2VIb3ZlcihyZWYpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmhvdmVyR28pIHtcbiAgICAgICAgICAgIHVuaXR5Q29udGV4dC5zZW5kKHByb3BzLmhvdmVyR28sIHByb3BzLmhvdmVyTWV0aG9kLCBpc0hvdmVyaW5nID8gMSA6IDApO1xuICAgICAgICB9XG4gICAgfSwgW2lzSG92ZXJpbmddKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdW5pdHlDb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgKHdpbmRvdyBhcyBhbnkpLnVuaXR5Q29udGV4dCA9ICh3aW5kb3cgYXMgYW55KS51bml0eUNvbnRleHQgPyAod2luZG93IGFzIGFueSkudW5pdHlDb250ZXh0IDoge307XG4gICAgICAgICh3aW5kb3cgYXMgYW55KS51bml0eUNvbnRleHRbcHJvcHMubmFtZV0gPSB1bml0eUNvbnRleHQ7XG5cbiAgICAgICAgaWYgKHByb3BzLm9uRXZlbnQpIHtcbiAgICAgICAgICAgIHByb3BzLmV2ZW50TmFtZXM/LmZvckVhY2goZXZlbnROYW1lID0+IHtcbiAgICAgICAgICAgICAgICB1bml0eUNvbnRleHQub24oZXZlbnROYW1lLCB2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uRXZlbnQhKGV2ZW50TmFtZSwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT0gJ0NsaWNrT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGlwZU5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdW5pdHlDb250ZXh0LnJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH07XG4gICAgfSwgW3VuaXR5Q29udGV4dF0pO1xuXG4gICAgY29uc3QgW3BpcGVOYW1lLCBzZXRQaXBlTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4+6YCJ5oup55qE566h6YGT5ZCN56ewIHtwaXBlTmFtZX08L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGlwZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdHlDb250ZXh0LnNlbmQocGlwZU5hbWUsICdTdG9wU2hha2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fT7lgZzmraLmjK/liqg8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwaXBlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB1bml0eUNvbnRleHQuc2VuZChwaXBlTmFtZSwgJ1N0YXJ0U2hha2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fT7lvIDlp4vmjK/liqg8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxuICAgICAgICAgICAgICAgIDxVbml0eSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzfSB0YWJJbmRleD17cHJvcHMudGFiSW5kZXh9IHN0eWxlPXtwcm9wcy5zdHlsZX0gdW5pdHlDb250ZXh0PXt1bml0eUNvbnRleHR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFZhbHVlU3RhdHVzIH0gZnJvbSAnbWVuZGl4J1xuXG5pbXBvcnQgeyBVbml0eUNvbnRhaW5lclByb3BzIH0gZnJvbSBcIi4uL3R5cGluZ3MvVW5pdHlQcm9wc1wiO1xuaW1wb3J0IFVuaXR5RkMgZnJvbSBcIi4vY29tcG9uZW50cy9Vbml0eUZDXCI7XG5cbmltcG9ydCBcIi4vdWkvVW5pdHkuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVuaXR5KHByb3BzOiBVbml0eUNvbnRhaW5lclByb3BzKSB7XG5cbiAgICBjb25zdCBvbkV2ZW50ID0gdXNlQ2FsbGJhY2soXG4gICAgICAgIChldmVudE5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0NsaWNrT2JqZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BzLm91dDEgJiYgcHJvcHMub3V0MT8uc3RhdHVzID09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub3V0MS5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtwcm9wcy5vdXQxXSxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFVuaXR5RkNcbiAgICAgICAgICAgIG9uRXZlbnQ9e29uRXZlbnR9XG4gICAgICAgICAgICBldmVudE5hbWVzPXtbJ0NsaWNrT2JqZWN0J119XG4gICAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgICAgICAgaG92ZXJNZXRob2Q9e3Byb3BzLmhvdmVyTWV0aG9kfVxuICAgICAgICAgICAgaG92ZXJHbz17cHJvcHMuaG92ZXJHYW1lT2JqZWN0fVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCAuLi5wcm9wcy5zdHlsZSB9fVxuICAgICAgICAgICAgY2xhc3M9e3Byb3BzLmNsYXNzfVxuICAgICAgICAgICAgbW9kZWxQYXRoPXtwcm9wcy51bml0eU1vZGVsUGF0aH1cbiAgICAgICAgPjwvVW5pdHlGQz5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJPYmplY3QiLCJmcmVlU2VsZiIsInNlbGYiLCJGdW5jdGlvbiIsImlzRG9jdW1lbnRWaXNpYmxlIiwiZG9jdW1lbnQiLCJ2aXNpYmlsaXR5U3RhdGUiLCJpc09ubGluZSIsIm5hdmlnYXRvciIsIm9uTGluZSIsIl9fcmVhZCIsInRoaXMiLCJvIiwibiIsIm0iLCJTeW1ib2wiLCJpdGVyYXRvciIsImkiLCJjYWxsIiwiciIsImFyIiwiZSIsIm5leHQiLCJkb25lIiwicHVzaCIsInZhbHVlIiwiZXJyb3IiLCJfX3NwcmVhZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNvbmNhdCIsImxpc3RlbmVycyIsImV2ZW50c0JpbmRlZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXZhbGlkYXRlIiwibGlzdGVuZXIiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiYXBwbHkiLCJfX3Jlc3QiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJDb25maWdDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJQcm92aWRlciIsImdldFRhcmdldEVsZW1lbnQiLCJ0YXJnZXQiLCJkZWZhdWx0RWxlbWVudCIsInRhcmdldEVsZW1lbnQiLCJjdXJyZW50IiwidXNlVG9nZ2xlIiwiZGVmYXVsdFZhbHVlIiwicmV2ZXJzZVZhbHVlIiwiX2EiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJhY3Rpb25zIiwidXNlTWVtbyIsInJldmVyc2VWYWx1ZU9yaWdpbiIsInVuZGVmaW5lZCIsInRvZ2dsZSIsInNldExlZnQiLCJzZXRSaWdodCIsInVzZUJvb2xlYW4iLCJzZXRUcnVlIiwic2V0RmFsc2UiLCJ1c2VFdmVudExpc3RlbmVyIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsIm9wdGlvbnMiLCJoYW5kbGVyUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiZXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2FwdHVyZSIsIm9uY2UiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZUNyZWF0aW9uIiwiZmFjdG9yeSIsImRlcHMiLCJvYmoiLCJpbml0aWFsaXplZCIsImRlcHNBcmVTYW1lIiwib2xkRGVwcyIsIm9uRW50ZXIiLCJvbkxlYXZlIiwiX2IiLCJfYyIsInJlcXVpcmUkJDAiLCJVbml0eSIsInJlcXVpcmUkJDEiLCJVbml0eUNvbnRleHQiLCJjcmVhdGVFbGVtZW50IiwidXNlQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NB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
