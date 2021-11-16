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

import * as React from 'react';
import React__default, { createContext, useRef, useState, useEffect, useLayoutEffect as useLayoutEffect$1, Component, useContext, useMemo as useMemo$1, useCallback, forwardRef, useImperativeHandle, isValidElement as isValidElement$1, cloneElement as cloneElement$1, createElement } from 'react';
import ReactDOM from 'react-dom';

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
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

  return _extends$2.apply(this, arguments);
}

function _defineProperty$4(obj, key, value) {
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

function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$2(o, p);
}

function _inherits$1(subClass, superClass) {
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
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}

function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$2(o);
}

function _isNativeReflectConstruct$2() {
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

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _typeof$5 = /*@__PURE__*/getDefaultExportFromCjs(_typeof_1);

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$5(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}

function _typeof$4(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$4 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$4 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$4(obj);
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

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
});

function ownKeys$3(object, enumerableOnly) {
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

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$3(Object(source), true).forEach(function (key) {
        _defineProperty$4(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$3(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function omit(obj, fields) {
  var clone = _objectSpread2$1({}, obj);

  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }

  return clone;
}

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */

function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return ReactDOM.findDOMNode(node);
}

createCommonjsModule(function (module, exports) {

{
  (function () {
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}
});

var reactIs_development = createCommonjsModule(function (module, exports) {

{
  (function () {
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_development;
}
});

function toArray$2(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  React__default.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray$2(child));
    } else if (reactIs.isFragment(child) && child.props) {
      ret = ret.concat(toArray$2(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

/* eslint-disable no-console */
var warned = {};
function warning$2(valid, message) {
  // Support uglify
  if (!valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function note(valid, message) {
  // Support uglify
  if (!valid && console !== undefined) {
    console.warn("Note: ".concat(message));
  }
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$2, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* eslint-enable */

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (_typeof$4(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */

function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;

  var type = reactIs.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node

  if (typeof type === 'function' && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) {
    return false;
  } // Class component


  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) {
    return false;
  }

  return true;
}
/* eslint-enable */

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

var INTERNAL_PREFIX_KEY = 'rc-observer-key'; // Still need to be compatible with React 15, we use class component here

var ReactResizeObserver = /*#__PURE__*/function (_React$Component) {
  _inherits$1(ReactResizeObserver, _React$Component);

  var _super = _createSuper$1(ReactResizeObserver);

  function ReactResizeObserver() {
    var _this;

    _classCallCheck$2(this, ReactResizeObserver);

    _this = _super.apply(this, arguments);
    _this.resizeObserver = null;
    _this.childNode = null;
    _this.currentElement = null;
    _this.state = {
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    };

    _this.onResize = function (entries) {
      var onResize = _this.props.onResize;
      var target = entries[0].target;

      var _target$getBoundingCl = target.getBoundingClientRect(),
          width = _target$getBoundingCl.width,
          height = _target$getBoundingCl.height;

      var offsetWidth = target.offsetWidth,
          offsetHeight = target.offsetHeight;
      /**
       * Resize observer trigger when content size changed.
       * In most case we just care about element size,
       * let's use `boundary` instead of `contentRect` here to avoid shaking.
       */

      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);

      if (_this.state.width !== fixedWidth || _this.state.height !== fixedHeight || _this.state.offsetWidth !== offsetWidth || _this.state.offsetHeight !== offsetHeight) {
        var size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth: offsetWidth,
          offsetHeight: offsetHeight
        };

        _this.setState(size);

        if (onResize) {
          // defer the callback but not defer to next frame
          Promise.resolve().then(function () {
            onResize(_objectSpread2$1(_objectSpread2$1({}, size), {}, {
              offsetWidth: offsetWidth,
              offsetHeight: offsetHeight
            }), target);
          });
        }
      }
    };

    _this.setChildNode = function (node) {
      _this.childNode = node;
    };

    return _this;
  }

  _createClass$2(ReactResizeObserver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyObserver();
    }
  }, {
    key: "onComponentUpdated",
    value: function onComponentUpdated() {
      var disabled = this.props.disabled; // Unregister if disabled

      if (disabled) {
        this.destroyObserver();
        return;
      } // Unregister if element changed


      var element = findDOMNode(this.childNode || this);
      var elementChanged = element !== this.currentElement;

      if (elementChanged) {
        this.destroyObserver();
        this.currentElement = element;
      }

      if (!this.resizeObserver && element) {
        this.resizeObserver = new index(this.onResize);
        this.resizeObserver.observe(element);
      }
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var childNodes = toArray$2(children);

      if (childNodes.length > 1) {
        warningOnce(false, 'Find more than one child node with `children` in ResizeObserver. Will only observe first one.');
      } else if (childNodes.length === 0) {
        warningOnce(false, '`children` of ResizeObserver is empty. Nothing is in observe.');
        return null;
      }

      var childNode = childNodes[0];

      if ( /*#__PURE__*/React.isValidElement(childNode) && supportRef(childNode)) {
        var ref = childNode.ref;
        childNodes[0] = /*#__PURE__*/React.cloneElement(childNode, {
          ref: composeRef(ref, this.setChildNode)
        });
      }

      return childNodes.length === 1 ? childNodes[0] : childNodes.map(function (node, index) {
        if (! /*#__PURE__*/React.isValidElement(node) || 'key' in node && node.key !== null) {
          return node;
        }

        return /*#__PURE__*/React.cloneElement(node, {
          key: "".concat(INTERNAL_PREFIX_KEY, "-").concat(index)
        });
      });
    }
  }]);

  return ReactResizeObserver;
}(React.Component);

ReactResizeObserver.displayName = 'ResizeObserver';

var IconContext = /*#__PURE__*/createContext({});
var IconContext$1 = IconContext;

function _objectWithoutPropertiesLoose$1(source, excluded) {
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

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
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

function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$3(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray$3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableSpread();
}

var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

var warningFunc = function warningFunc() {
  warningOnce(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};

var Context = /*#__PURE__*/React.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      setCallbacks: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc
    };
  }
});

function toArray$1(value) {
  if (value === undefined || value === null) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
});

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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
});

var regenerator = runtime_1;

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

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _isNativeReflectConstruct$1() {
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

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct$1()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf$1(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf$1(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf$1(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}
/* eslint no-console:0 */


var formatRegExp = /%[sdj%]/g;

var warning$1 = function warning() {}; // don't print warning message when in production env or node runtime


if (typeof process !== 'undefined' && process.env && 'development' !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning$1 = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve();
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }

  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve();
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends$1({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}
/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}
/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}
/* eslint max-len:0 */


var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}
/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}
/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1
};
/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}
/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}
/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */


function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}

var messages = newMessages();
/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z;
    var item;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return Promise.resolve();
    }

    function complete(results) {
      var i;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends$1({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends$1({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _extends$1({}, schema, {
          fullField: rule.fullField + "." + key
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errors = e;

        if (!Array.isArray(errors)) {
          errors = [errors];
        }

        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }

        if (errors.length && rule.message !== undefined) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }

        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(errors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }

          fieldsSchema = _extends$1({}, fieldsSchema, data.rule.fields);

          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }

          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning$1;
Schema.messages = messages;
Schema.validators = validators;

function get(entity, path) {
  var current = entity;

  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }

    current = current[path[i]];
  }

  return current;
}

function _arrayWithHoles$3(arr) {
  if (Array.isArray(arr)) return arr;
}

function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toArray(arr) {
  return _arrayWithHoles$3(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$3(arr) || _nonIterableRest$3();
}

function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }

  var _paths = _toArray(paths),
      path = _paths[0],
      restPath = _paths.slice(1);

  var clone;

  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread2$1({}, entity);
  } // Delete prop if `removeIfUndefined` and value is undefined


  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }

  return clone;
}

function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false; // Do nothing if `removeIfUndefined` and parent object not exist

  if (paths.length && removeIfUndefined && value === undefined && !get(entity, paths.slice(0, -1))) {
    return entity;
  }

  return internalSet(entity, paths, value, removeIfUndefined);
}

/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */

function getNamePath(path) {
  return toArray$1(path);
}
function getValue$1(store, namePath) {
  var value = get(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var newStore = set(store, namePath, value, removeIfUndefined);
  return newStore;
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = getValue$1(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return namePathList && namePathList.some(function (path) {
    return matchNamePath(path, namePath);
  });
}

function isObject(obj) {
  return _typeof$4(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
/**
 * Copy values into store and return a new values object
 * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
 */


function internalSetValues(store, values) {
  var newStore = Array.isArray(store) ? _toConsumableArray(store) : _objectSpread2$1({}, store);

  if (!values) {
    return newStore;
  }

  Object.keys(values).forEach(function (key) {
    var prevValue = newStore[key];
    var value = values[key]; // If both are object (but target is not array), we use recursion to set deep value

    var recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : value;
  });
  return newStore;
}

function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }

  return restValues.reduce(function (current, newStore) {
    return internalSetValues(current, newStore);
  }, store);
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }

  return namePath.every(function (nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }

  if (!source && target || source && !target) {
    return false;
  }

  if (!source || !target || _typeof$4(source) !== 'object' || _typeof$4(target) !== 'object') {
    return false;
  }

  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat(_toConsumableArray(sourceKeys), _toConsumableArray(targetKeys)));
  return _toConsumableArray(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];

    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }

    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];

  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }

  return event;
}
/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */

function move(array, moveIndex, toIndex) {
  var length = array.length;

  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }

  var item = array[moveIndex];
  var diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return [].concat(_toConsumableArray(array.slice(0, toIndex)), [item], _toConsumableArray(array.slice(toIndex, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, length)));
  }

  if (diff < 0) {
    // move right
    return [].concat(_toConsumableArray(array.slice(0, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, toIndex + 1)), [item], _toConsumableArray(array.slice(toIndex + 1, length)));
  }

  return array;
}

var typeTemplate$1 = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate$1,
    method: typeTemplate$1,
    array: typeTemplate$1,
    object: typeTemplate$1,
    number: typeTemplate$1,
    date: typeTemplate$1,
    boolean: typeTemplate$1,
    integer: typeTemplate$1,
    float: typeTemplate$1,
    regexp: typeTemplate$1,
    email: typeTemplate$1,
    url: typeTemplate$1,
    hex: typeTemplate$1
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};

var AsyncValidator = Schema;
/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */

function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}
/**
 * We use `async-validator` to validate rules. So have to hot replace the message with validator.
 * { required: '${name} is required' } => { required: () => 'field is required' }
 */


function convertMessages(messages, name, rule, messageVariables) {
  var kv = _objectSpread2$1(_objectSpread2$1({}, rule), {}, {
    name: name,
    enum: (rule.enum || []).join(', ')
  });

  var replaceFunc = function replaceFunc(template, additionalKV) {
    return function () {
      return replaceMessage(template, _objectSpread2$1(_objectSpread2$1({}, kv), additionalKV));
    };
  };
  /* eslint-disable no-param-reassign */


  function fillTemplate(source) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Object.keys(source).forEach(function (ruleName) {
      var value = source[ruleName];

      if (typeof value === 'string') {
        target[ruleName] = replaceFunc(value, messageVariables);
      } else if (value && _typeof$4(value) === 'object') {
        target[ruleName] = {};
        fillTemplate(value, target[ruleName]);
      } else {
        target[ruleName] = value;
      }
    });
    return target;
  }
  /* eslint-enable */


  return fillTemplate(setValues({}, defaultValidateMessages, messages));
}

function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */


function _validateRule() {
  _validateRule = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(name, value, rule, options, messageVariables) {
    var cloneRule, subRuleField, validator, messages, result, subResults;
    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            cloneRule = _objectSpread2$1({}, rule); // We should special handle array validate

            subRuleField = null;

            if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
              subRuleField = cloneRule.defaultField;
              delete cloneRule.defaultField;
            }

            validator = new AsyncValidator(_defineProperty$4({}, name, [cloneRule]));
            messages = convertMessages(options.validateMessages, name, cloneRule, messageVariables);
            validator.messages(messages);
            result = [];
            _context2.prev = 7;
            _context2.next = 10;
            return Promise.resolve(validator.validate(_defineProperty$4({}, name, value), _objectSpread2$1({}, options)));

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](7);

            if (_context2.t0.errors) {
              result = _context2.t0.errors.map(function (_ref2, index) {
                var message = _ref2.message;
                return (// Wrap ReactNode with `key`

                  /*#__PURE__*/
                  React.isValidElement(message) ? /*#__PURE__*/React.cloneElement(message, {
                    key: "error_".concat(index)
                  }) : message
                );
              });
            } else {
              console.error(_context2.t0);
              result = [messages.default()];
            }

          case 15:
            if (!(!result.length && subRuleField)) {
              _context2.next = 20;
              break;
            }

            _context2.next = 18;
            return Promise.all(value.map(function (subValue, i) {
              return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
            }));

          case 18:
            subResults = _context2.sent;
            return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
              return [].concat(_toConsumableArray(prev), _toConsumableArray(errors));
            }, []));

          case 20:
            return _context2.abrupt("return", result);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 12]]);
  }));
  return _validateRule.apply(this, arguments);
}

function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join('.'); // Fill rule with context

  var filledRules = rules.map(function (currentRule) {
    var originValidatorFunc = currentRule.validator;

    if (!originValidatorFunc) {
      return currentRule;
    }

    return _objectSpread2$1(_objectSpread2$1({}, currentRule), {}, {
      validator: function validator(rule, val, callback) {
        var hasPromise = false; // Wrap callback only accept when promise not provided

        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          } // Wait a tick to make sure return type is a promise


          Promise.resolve().then(function () {
            warningOnce(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');

            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        }; // Get promise


        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */

        warningOnce(hasPromise, '`callback` is deprecated. Please return a promise instead.');

        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err || ' ');
          });
        }
      }
    });
  });
  var summaryPromise;

  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(resolve, reject) {
        var i, errors;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;

              case 1:
                if (!(i < filledRules.length)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 4;
                return validateRule(name, value, filledRules[i], options, messageVariables);

              case 4:
                errors = _context.sent;

                if (!errors.length) {
                  _context.next = 8;
                  break;
                }

                reject(errors);
                return _context.abrupt("return");

              case 8:
                i += 1;
                _context.next = 1;
                break;

              case 11:
                /* eslint-enable */
                resolve([]);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x6, _x7) {
        return _ref.apply(this, arguments);
      };
    }());
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables);
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
      if (!errors.length) {
        return [];
      }

      return Promise.reject(errors);
    });
  } // Internal catch error to avoid console error log.


  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}

function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}

function _finishOnAllFailed() {
  _finishOnAllFailed = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(rulePromises) {
    return regenerator.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
              var _ref3;

              var errors = (_ref3 = []).concat.apply(_ref3, _toConsumableArray(errorsList));

              return errors;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}

function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}

function _finishOnFirstFailed() {
  _finishOnFirstFailed = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(rulePromises) {
    var count;
    return regenerator.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            count = 0;
            return _context4.abrupt("return", new Promise(function (resolve) {
              rulePromises.forEach(function (promise) {
                promise.then(function (errors) {
                  if (errors.length) {
                    resolve(errors);
                  }

                  count += 1;

                  if (count === rulePromises.length) {
                    resolve([]);
                  }
                });
              });
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}

function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }

  return prevValue !== nextValue;
} // We use Class instead of Hooks here since it will cost much code by using Hooks.


var Field = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Field, _React$Component);

  var _super = _createSuper$1(Field); // ============================== Subscriptions ==============================


  function Field(props) {
    var _this;

    _classCallCheck$2(this, Field);

    _this = _super.call(this, props);
    _this.state = {
      resetCount: 0
    };
    _this.cancelRegisterFunc = null;
    _this.mounted = false;
    /**
     * Follow state should not management in State since it will async update by React.
     * This makes first render of form can not get correct state value.
     */

    _this.touched = false;
    /** Mark when touched & validated. Currently only used for `dependencies` */

    _this.dirty = false;
    _this.validatePromise = null;
    _this.errors = [];

    _this.cancelRegister = function () {
      var _this$props = _this.props,
          preserve = _this$props.preserve,
          isListField = _this$props.isListField,
          name = _this$props.name;

      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
      }

      _this.cancelRegisterFunc = null;
    }; // ================================== Utils ==================================


    _this.getNamePath = function () {
      var _this$props2 = _this.props,
          name = _this$props2.name,
          fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
          prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== undefined ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name)) : [];
    };

    _this.getRules = function () {
      var _this$props3 = _this.props,
          _this$props3$rules = _this$props3.rules,
          rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
          fieldContext = _this$props3.fieldContext;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }

        return rule;
      });
    };

    _this.refresh = function () {
      if (!_this.mounted) return;
      /**
       * Clean up current node.
       */

      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    }; // ========================= Field Entity Interfaces =========================
    // Trigger by store update. Check if need update the component


    _this.onStoreChange = function (prevStore, namePathList, info) {
      var _this$props4 = _this.props,
          shouldUpdate = _this$props4.shouldUpdate,
          _this$props4$dependen = _this$props4.dependencies,
          dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
          onReset = _this$props4.onReset;
      var store = info.store;

      var namePath = _this.getNamePath();

      var prevValue = _this.getValue(prevStore);

      var curValue = _this.getValue(store);

      var namePathMatch = namePathList && containsNamePath(namePathList, namePath); // `setFieldsValue` is a quick access to update related status

      if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = [];
      }

      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = null;
            _this.errors = [];

            if (onReset) {
              onReset();
            }

            _this.refresh();

            return;
          }

          break;

        case 'setField':
          {
            if (namePathMatch) {
              var data = info.data;

              if ('touched' in data) {
                _this.touched = data.touched;
              }

              if ('validating' in data && !('originRCField' in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }

              if ('errors' in data) {
                _this.errors = data.errors || [];
              }

              _this.dirty = true;

              _this.reRender();

              return;
            } // Handle update by `setField` with `shouldUpdate`


            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();

              return;
            }

            break;
          }

        case 'dependenciesUpdate':
          {
            /**
             * Trigger when marked `dependencies` updated. Related fields will all update
             */
            var dependencyList = dependencies.map(getNamePath); // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
            // emitted earlier and they will work there
            // If set it may cause unnecessary twice rerendering

            if (dependencyList.some(function (dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })) {
              _this.reRender();

              return;
            }

            break;
          }

        default:
          // 1. If `namePath` exists in `namePathList`, means it's related value and should update
          //      For example <List name="list"><Field name={['list', 0]}></List>
          //      If `namePathList` is [['list']] (List value update), Field should be updated
          //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
          // 2.
          //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
          //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
          //       is not provided
          //   2.2 If `shouldUpdate` provided, use customize logic to update the field
          //       else to check if value changed
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();

            return;
          }

          break;
      }

      if (shouldUpdate === true) {
        _this.reRender();
      }
    };

    _this.validateRules = function (options) {
      // We should fixed namePath & value to avoid developer change then by form function
      var namePath = _this.getNamePath();

      var currentValue = _this.getValue(); // Force change to async to avoid rule OOD under renderProps field


      var rootPromise = Promise.resolve().then(function () {
        if (!_this.mounted) {
          return [];
        }

        var _this$props5 = _this.props,
            _this$props5$validate = _this$props5.validateFirst,
            validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate,
            messageVariables = _this$props5.messageVariables;

        var _ref2 = options || {},
            triggerName = _ref2.triggerName;

        var filteredRules = _this.getRules();

        if (triggerName) {
          filteredRules = filteredRules.filter(function (rule) {
            var validateTrigger = rule.validateTrigger;

            if (!validateTrigger) {
              return true;
            }

            var triggerList = toArray$1(validateTrigger);
            return triggerList.includes(triggerName);
          });
        }

        var promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
        promise.catch(function (e) {
          return e;
        }).then(function () {
          var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          if (_this.validatePromise === rootPromise) {
            _this.validatePromise = null;
            _this.errors = errors;

            _this.reRender();
          }
        });
        return promise;
      });
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = []; // Force trigger re-render since we need sync renderProps with new meta

      _this.reRender();

      return rootPromise;
    };

    _this.isFieldValidating = function () {
      return !!_this.validatePromise;
    };

    _this.isFieldTouched = function () {
      return _this.touched;
    };

    _this.isFieldDirty = function () {
      return _this.dirty;
    };

    _this.getErrors = function () {
      return _this.errors;
    };

    _this.isListField = function () {
      return _this.props.isListField;
    };

    _this.isList = function () {
      return _this.props.isList;
    };

    _this.isPreserve = function () {
      return _this.props.preserve;
    }; // ============================= Child Component =============================


    _this.getMeta = function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        name: _this.getNamePath()
      };
      return meta;
    }; // Only return validate child node. If invalidate, will do nothing about field.


    _this.getOnlyChild = function (children) {
      // Support render props
      if (typeof children === 'function') {
        var meta = _this.getMeta();

        return _objectSpread2$1(_objectSpread2$1({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      } // Filed element only


      var childList = toArray$2(children);

      if (childList.length !== 1 || ! /*#__PURE__*/React.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }

      return {
        child: childList[0],
        isFunction: false
      };
    }; // ============================== Field Control ==============================


    _this.getValue = function (store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;

      var namePath = _this.getNamePath();

      return getValue$1(store || getFieldsValue(true), namePath);
    };

    _this.getControlled = function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props6 = _this.props,
          trigger = _this$props6.trigger,
          validateTrigger = _this$props6.validateTrigger,
          getValueFromEvent = _this$props6.getValueFromEvent,
          normalize = _this$props6.normalize,
          valuePropName = _this$props6.valuePropName,
          getValueProps = _this$props6.getValueProps,
          fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;

      var namePath = _this.getNamePath();

      var getInternalHooks = fieldContext.getInternalHooks,
          getFieldsValue = fieldContext.getFieldsValue;

      var _getInternalHooks = getInternalHooks(HOOK_MARK),
          dispatch = _getInternalHooks.dispatch;

      var value = _this.getValue();

      var mergedGetValueProps = getValueProps || function (val) {
        return _defineProperty$4({}, valuePropName, val);
      }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


      var originTriggerFunc = childProps[trigger];

      var control = _objectSpread2$1(_objectSpread2$1({}, childProps), mergedGetValueProps(value)); // Add trigger


      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        _this.dirty = true;
        var newValue;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }

        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }

        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue
        });

        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      }; // Add validateTrigger


      var validateTriggerList = toArray$1(mergedValidateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];

        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          } // Always use latest rules


          var rules = _this.props.rules;

          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName
            });
          }
        };
      });
      return control;
    }; // Register on init


    if (props.fieldContext) {
      var getInternalHooks = props.fieldContext.getInternalHooks;

      var _getInternalHooks2 = getInternalHooks(HOOK_MARK),
          initEntityValue = _getInternalHooks2.initEntityValue;

      initEntityValue(_assertThisInitialized$1(_this));
    }

    return _this;
  }

  _createClass$2(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
          shouldUpdate = _this$props7.shouldUpdate,
          fieldContext = _this$props7.fieldContext;
      this.mounted = true; // Register on init

      if (fieldContext) {
        var getInternalHooks = fieldContext.getInternalHooks;

        var _getInternalHooks3 = getInternalHooks(HOOK_MARK),
            registerField = _getInternalHooks3.registerField;

        this.cancelRegisterFunc = registerField(this);
      } // One more render for component in case fields not ready


      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;

      var _this$getOnlyChild = this.getOnlyChild(children),
          child = _this$getOnlyChild.child,
          isFunction = _this$getOnlyChild.isFunction; // Not need to `cloneElement` since user can handle this in render function self


      var returnChildNode;

      if (isFunction) {
        returnChildNode = child;
      } else if ( /*#__PURE__*/React.isValidElement(child)) {
        returnChildNode = /*#__PURE__*/React.cloneElement(child, this.getControlled(child.props));
      } else {
        warningOnce(!child, '`children` of Field is not validate ReactElement.');
        returnChildNode = child;
      }

      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);

  return Field;
}(React.Component);

Field.contextType = Context;
Field.defaultProps = {
  trigger: 'onChange',
  valuePropName: 'value'
};

function WrapperField(_ref4) {
  var name = _ref4.name,
      restProps = _objectWithoutProperties$1(_ref4, ["name"]);

  var fieldContext = React.useContext(Context);
  var namePath = name !== undefined ? getNamePath(name) : undefined;
  var key = 'keep';

  if (!restProps.isListField) {
    key = "_".concat((namePath || []).join('_'));
  } // Warning if it's a directly list field.
  // We can still support multiple level field preserve.


  if (restProps.preserve === false && restProps.isListField && namePath.length <= 1) {
    warningOnce(false, '`preserve` should not apply on Form.List fields.');
  }

  return /*#__PURE__*/React.createElement(Field, _extends$2({
    key: key,
    name: namePath
  }, restProps, {
    fieldContext: fieldContext
  }));
}

var List$1 = function List(_ref) {
  var name = _ref.name,
      initialValue = _ref.initialValue,
      children = _ref.children,
      rules = _ref.rules,
      validateTrigger = _ref.validateTrigger;
  var context = React.useContext(Context);
  var keyRef = React.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current; // User should not pass `children` as other type.

  if (typeof children !== 'function') {
    warningOnce(false, 'Form.List only accepts function as children.');
    return null;
  }

  var parentPrefixName = getNamePath(context.prefixName) || [];
  var prefixName = [].concat(_toConsumableArray(parentPrefixName), _toConsumableArray(getNamePath(name)));

  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;

    if (source === 'internal') {
      return false;
    }

    return prevValue !== nextValue;
  };

  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: _objectSpread2$1(_objectSpread2$1({}, context), {}, {
      prefixName: prefixName
    })
  }, /*#__PURE__*/React.createElement(WrapperField, {
    name: [],
    shouldUpdate: shouldUpdate,
    rules: rules,
    validateTrigger: validateTrigger,
    initialValue: initialValue,
    isList: true
  }, function (_ref3, meta) {
    var _ref3$value = _ref3.value,
        value = _ref3$value === void 0 ? [] : _ref3$value,
        onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;

    var getNewValue = function getNewValue() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by `form` api.
     */


    var operations = {
      add: function add(defaultValue, index) {
        // Mapping keys
        var newValue = getNewValue();

        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys.slice(0, index)), [keyManager.id], _toConsumableArray(keyManager.keys.slice(index)));
          onChange([].concat(_toConsumableArray(newValue.slice(0, index)), [defaultValue], _toConsumableArray(newValue.slice(index))));
        } else {
          if ((index < 0 || index > newValue.length)) {
            warningOnce(false, 'The second parameter of the add function should be a valid positive number.');
          }

          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [keyManager.id]);
          onChange([].concat(_toConsumableArray(newValue), [defaultValue]));
        }

        keyManager.id += 1;
      },
      remove: function remove(index) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index) ? index : [index]);

        if (indexSet.size <= 0) {
          return;
        }

        keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
          return !indexSet.has(keysIndex);
        }); // Trigger store change

        onChange(newValue.filter(function (_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move$1(from, to) {
        if (from === to) {
          return;
        }

        var newValue = getNewValue(); // Do not handle out of range

        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }

        keyManager.keys = move(keyManager.keys, from, to); // Trigger store change

        onChange(move(newValue, from, to));
      }
    };
    var listValue = value || [];

    if (!Array.isArray(listValue)) {
      listValue = [];

      {
        warningOnce(false, "Current value of '".concat(prefixName.join(' > '), "' is not an array type."));
      }
    }

    return children(listValue.map(function (__, index) {
      var key = keyManager.keys[index];

      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }

      return {
        name: index,
        key: key,
        isListField: true
      };
    }), operations, meta);
  }));
};

function _iterableToArrayLimit$3(arr, i) {
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

function _slicedToArray$3(arr, i) {
  return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$3();
}

function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];

  if (!promiseList.length) {
    return Promise.resolve([]);
  }

  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.catch(function (e) {
        hasError = true;
        return e;
      }).then(function (result) {
        count -= 1;
        results[index] = result;

        if (count > 0) {
          return;
        }

        if (hasError) {
          reject(results);
        }

        resolve(results);
      });
    });
  });
}

var SPLIT = '__@field_split__';
/**
 * Convert name path into string to fast the fetch speed of Map.
 */

function normalize(namePath) {
  return namePath.map(function (cell) {
    return "".concat(_typeof$4(cell), ":").concat(cell);
  }) // Magic split
  .join(SPLIT);
}
/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */


var NameMap = /*#__PURE__*/function () {
  function NameMap() {
    _classCallCheck$2(this, NameMap);

    this.kvs = new Map();
  }

  _createClass$2(NameMap, [{
    key: "set",
    value: function set(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next = updater(origin);

      if (!next) {
        this.delete(key);
      } else {
        this.set(key, next);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    } // Since we only use this in test, let simply realize this

  }, {
    key: "map",
    value: function map(callback) {
      return _toConsumableArray(this.kvs.entries()).map(function (_ref) {
        var _ref2 = _slicedToArray$3(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        var cells = key.split(SPLIT);
        return callback({
          key: cells.map(function (cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/),
                _cell$match2 = _slicedToArray$3(_cell$match, 3),
                type = _cell$match2[1],
                unit = _cell$match2[2];

            return type === 'number' ? Number(unit) : unit;
          }),
          value: value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function (_ref3) {
        var key = _ref3.key,
            value = _ref3.value;
        json[key.join('.')] = value;
        return null;
      });
      return json;
    }
  }]);

  return NameMap;
}();

var FormStore = function FormStore(forceRootUpdate) {
  var _this = this;

  _classCallCheck$2(this, FormStore);

  this.formHooked = false;
  this.subscribable = true;
  this.store = {};
  this.fieldEntities = [];
  this.initialValues = {};
  this.callbacks = {};
  this.validateMessages = null;
  this.preserve = null;
  this.lastValidatePromise = null;

  this.getForm = function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      getInternalHooks: _this.getInternalHooks
    };
  }; // ======================== Internal Hooks ========================


  this.getInternalHooks = function (key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve
      };
    }

    warningOnce(false, '`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  };

  this.useSubscribe = function (subscribable) {
    _this.subscribable = subscribable;
  };
  /**
   * First time `setInitialValues` should update store with initial value
   */


  this.setInitialValues = function (initialValues, init) {
    _this.initialValues = initialValues || {};

    if (init) {
      _this.store = setValues({}, initialValues, _this.store);
    }
  };

  this.getInitialValue = function (namePath) {
    return getValue$1(_this.initialValues, namePath);
  };

  this.setCallbacks = function (callbacks) {
    _this.callbacks = callbacks;
  };

  this.setValidateMessages = function (validateMessages) {
    _this.validateMessages = validateMessages;
  };

  this.setPreserve = function (preserve) {
    _this.preserve = preserve;
  }; // ========================== Dev Warning =========================


  this.timeoutId = null;

  this.warningUnhooked = function () {
    if (!_this.timeoutId && typeof window !== 'undefined') {
      _this.timeoutId = setTimeout(function () {
        _this.timeoutId = null;

        if (!_this.formHooked) {
          warningOnce(false, 'Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?');
        }
      });
    }
  }; // ============================ Fields ============================

  /**
   * Get registered field entities.
   * @param pure Only return field which has a `name`. Default: false
   */


  this.getFieldEntities = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!pure) {
      return _this.fieldEntities;
    }

    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  };

  this.getFieldsMap = function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new NameMap();

    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });

    return cache;
  };

  this.getFieldEntitiesForNamePathList = function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }

    var cache = _this.getFieldsMap(true);

    return nameList.map(function (name) {
      var namePath = getNamePath(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: getNamePath(name)
      };
    });
  };

  this.getFieldsValue = function (nameList, filterFunc) {
    _this.warningUnhooked();

    if (nameList === true && !filterFunc) {
      return _this.store;
    }

    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);

    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var _entity$isListField;

      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath(); // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count

      if (!nameList && ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0 ? void 0 : _entity$isListField.call(entity))) {
        return;
      }

      if (!filterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;

        if (filterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  };

  this.getFieldValue = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);
    return getValue$1(_this.store, namePath);
  };

  this.getFieldsError = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);

    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors()
        };
      }

      return {
        name: getNamePath(nameList[index]),
        errors: []
      };
    });
  };

  this.getFieldError = function (name) {
    _this.warningUnhooked();

    var namePath = getNamePath(name);

    var fieldError = _this.getFieldsError([namePath])[0];

    return fieldError.errors;
  };

  this.isFieldsTouched = function () {
    _this.warningUnhooked();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var arg0 = args[0],
        arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;

    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }

    var fieldEntities = _this.getFieldEntities(true);

    var isFieldTouched = function isFieldTouched(field) {
      return field.isFieldTouched();
    }; // ===== Will get fully compare when not config namePathList =====


    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
    } // Generate a nest tree for validate


    var map = new NameMap();
    namePathList.forEach(function (shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function (field) {
      var fieldNamePath = field.getNamePath(); // Find matched entity and put into list

      namePathList.forEach(function (shortNamePath) {
        if (shortNamePath.every(function (nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function (list) {
            return [].concat(_toConsumableArray(list), [field]);
          });
        }
      });
    }); // Check if NameMap value is touched

    var isNamePathListTouched = function isNamePathListTouched(entities) {
      return entities.some(isFieldTouched);
    };

    var namePathListEntities = map.map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  };

  this.isFieldTouched = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsTouched([name]);
  };

  this.isFieldsValidating = function (nameList) {
    _this.warningUnhooked();

    var fieldEntities = _this.getFieldEntities();

    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }

    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  };

  this.isFieldValidating = function (name) {
    _this.warningUnhooked();

    return _this.isFieldsValidating([name]);
  };
  /**
   * Reset Field with field `initialValue` prop.
   * Can pass `entities` or `namePathList` or just nothing.
   */


  this.resetWithFieldInitialValue = function () {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}; // Create cache

    var cache = new NameMap();

    var fieldEntities = _this.getFieldEntities(true);

    fieldEntities.forEach(function (field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath(); // Record only if has `initialValue`

      if (initialValue !== undefined) {
        var records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    }); // Reset

    var resetWithFields = function resetWithFields(entities) {
      entities.forEach(function (field) {
        var initialValue = field.props.initialValue;

        if (initialValue !== undefined) {
          var namePath = field.getNamePath();

          var formInitialValue = _this.getInitialValue(namePath);

          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            warningOnce(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);

            if (records && records.size > 1) {
              // Warning if multiple field set `initialValue`and do not modify value
              warningOnce(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath); // Set `initialValue`


              if (!info.skipExist || originValue === undefined) {
                _this.store = setValue(_this.store, namePath, _toConsumableArray(records)[0].value);
              }
            }
          }
        }
      });
    };

    var requiredFieldEntities;

    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function (namePath) {
        var records = cache.get(namePath);

        if (records) {
          var _requiredFieldEntitie;

          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, _toConsumableArray(_toConsumableArray(records).map(function (r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }

    resetWithFields(requiredFieldEntities);
  };

  this.resetFields = function (nameList) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (!nameList) {
      _this.store = setValues({}, _this.initialValues);

      _this.resetWithFieldInitialValue();

      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });

      return;
    } // Reset by `nameList`


    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);

      _this.store = setValue(_this.store, namePath, initialValue);
    });

    _this.resetWithFieldInitialValue({
      namePathList: namePathList
    });

    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });
  };

  this.setFields = function (fields) {
    _this.warningUnhooked();

    var prevStore = _this.store;
    fields.forEach(function (fieldData) {
      var name = fieldData.name;
          fieldData.errors;
          var data = _objectWithoutProperties$1(fieldData, ["name", "errors"]);

      var namePath = getNamePath(name); // Value

      if ('value' in data) {
        _this.store = setValue(_this.store, namePath, data.value);
      }

      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });
  };

  this.getFields = function () {
    var entities = _this.getFieldEntities(true);

    var fields = entities.map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();

      var fieldData = _objectSpread2$1(_objectSpread2$1({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });

      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  }; // =========================== Observer ===========================

  /**
   * This only trigger when a field is on constructor to avoid we get initialValue too late
   */


  this.initEntityValue = function (entity) {
    var initialValue = entity.props.initialValue;

    if (initialValue !== undefined) {
      var namePath = entity.getNamePath();
      var prevValue = getValue$1(_this.store, namePath);

      if (prevValue === undefined) {
        _this.store = setValue(_this.store, namePath, initialValue);
      }
    }
  };

  this.registerField = function (entity) {
    _this.fieldEntities.push(entity); // Set initial values


    if (entity.props.initialValue !== undefined) {
      var prevStore = _this.store;

      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });

      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    } // un-register field callback


    return function (isListField, preserve) {
      var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      }); // Clean up store value if not preserve

      var mergedPreserve = preserve !== undefined ? preserve : _this.preserve;

      if (mergedPreserve === false && (!isListField || subNamePath.length > 1)) {
        var namePath = entity.getNamePath();
        var defaultValue = isListField ? undefined : getValue$1(_this.initialValues, namePath);

        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
          return (// Only reset when no namePath exist
            !matchNamePath(field.getNamePath(), namePath)
          );
        })) {
          _this.store = setValue(_this.store, namePath, defaultValue, true);
        }
      }
    };
  };

  this.dispatch = function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
              value = action.value;

          _this.updateValue(namePath, value);

          break;
        }

      case 'validateField':
        {
          var _namePath = action.namePath,
              triggerName = action.triggerName;

          _this.validateFields([_namePath], {
            triggerName: triggerName
          });

          break;
        }

    }
  };

  this.notifyObservers = function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = _objectSpread2$1(_objectSpread2$1({}, info), {}, {
        store: _this.getFieldsValue(true)
      });

      _this.getFieldEntities().forEach(function (_ref2) {
        var onStoreChange = _ref2.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  };

  this.updateValue = function (name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;
    _this.store = setValue(_this.store, namePath, value);

    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    }); // Notify dependencies children with parent update
    // We need delay to trigger validate in case Field is under render props


    var childrenFields = _this.getDependencyChildrenFields(namePath);

    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }

    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat(_toConsumableArray(childrenFields))
    }); // trigger callback function


    var onValuesChange = _this.callbacks.onValuesChange;

    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }

    _this.triggerOnFieldsChange([namePath].concat(_toConsumableArray(childrenFields)));
  }; // Let all child Field get update.


  this.setFieldsValue = function (store) {
    _this.warningUnhooked();

    var prevStore = _this.store;

    if (store) {
      _this.store = setValues(_this.store, store);
    }

    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });
  };

  this.getDependencyChildrenFields = function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new NameMap();
    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */

    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
          fields.add(field);
          return fields;
        });
      });
    });

    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();

          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };

    fillChildren(rootNamePath);
    return childrenFields;
  };

  this.triggerOnFieldsChange = function (namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;

    if (onFieldsChange) {
      var fields = _this.getFields();
      /**
       * Fill errors since `fields` may be replaced by controlled fields
       */


      if (filedErrors) {
        var cache = new NameMap();
        filedErrors.forEach(function (_ref3) {
          var name = _ref3.name,
              errors = _ref3.errors;
          cache.set(name, errors);
        });
        fields.forEach(function (field) {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }

      var changedFields = fields.filter(function (_ref4) {
        var fieldName = _ref4.name;
        return containsNamePath(namePathList, fieldName);
      });
      onFieldsChange(changedFields, fields);
    }
  }; // =========================== Validate ===========================


  this.validateFields = function (nameList, options) {
    _this.warningUnhooked();

    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : []; // Collect result in promise list

    var promiseList = [];

    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide `nameList`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }
      /**
       * Recursive validate if configured.
       * TODO: perf improvement @zombieJ
       */


      if ((options === null || options === void 0 ? void 0 : options.recursive) && provideNameList) {
        var namePath = field.getNamePath();

        if ( // nameList[i] === undefined 说明是以 nameList 开头的
        // ['name'] -> ['name','list']
        namePath.every(function (nameUnit, i) {
          return nameList[i] === nameUnit || nameList[i] === undefined;
        })) {
          namePathList.push(namePath);
        }
      } // Skip if without rule


      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      var fieldNamePath = field.getNamePath(); // Add field validate rule in to promise list

      if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
        var promise = field.validateRules(_objectSpread2$1({
          validateMessages: _objectSpread2$1(_objectSpread2$1({}, defaultValidateMessages), _this.validateMessages)
        }, options)); // Wrap promise with field

        promiseList.push(promise.then(function () {
          return {
            name: fieldNamePath,
            errors: []
          };
        }).catch(function (errors) {
          return Promise.reject({
            name: fieldNamePath,
            errors: errors
          });
        }));
      }
    });

    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise; // Notify fields with rule that validate has finished and need update

    summaryPromise.catch(function (results) {
      return results;
    }).then(function (results) {
      var resultNamePathList = results.map(function (_ref5) {
        var name = _ref5.name;
        return name;
      });

      _this.notifyObservers(_this.store, resultNamePathList, {
        type: 'validateFinish'
      });

      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function () {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }

      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    }); // Do not throw in console

    returnPromise.catch(function (e) {
      return e;
    });
    return returnPromise;
  }; // ============================ Submit ============================


  this.submit = function () {
    _this.warningUnhooked();

    _this.validateFields().then(function (values) {
      var onFinish = _this.callbacks.onFinish;

      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user `onFinish` callback failed
          console.error(err);
        }
      }
    }).catch(function (e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;

      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  };

  this.forceRootUpdate = forceRootUpdate;
};

function useForm(form) {
  var formRef = React.useRef();

  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };

      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}

var FormContext = /*#__PURE__*/React.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});

var FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
      onFormChange = _ref.onFormChange,
      onFormFinish = _ref.onFormFinish,
      children = _ref.children;
  var formContext = React.useContext(FormContext);
  var formsRef = React.useRef({});
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: _objectSpread2$1(_objectSpread2$1({}, formContext), {}, {
      validateMessages: _objectSpread2$1(_objectSpread2$1({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields: changedFields,
            forms: formsRef.current
          });
        }

        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values: values,
            forms: formsRef.current
          });
        }

        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm(name, form) {
        if (name) {
          formsRef.current = _objectSpread2$1(_objectSpread2$1({}, formsRef.current), {}, _defineProperty$4({}, name, form));
        }

        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm(name) {
        var newForms = _objectSpread2$1({}, formsRef.current);

        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};

var Form = function Form(_ref, ref) {
  var name = _ref.name,
      initialValues = _ref.initialValues,
      fields = _ref.fields,
      form = _ref.form,
      preserve = _ref.preserve,
      children = _ref.children,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'form' : _ref$component,
      validateMessages = _ref.validateMessages,
      _ref$validateTrigger = _ref.validateTrigger,
      validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
      onValuesChange = _ref.onValuesChange,
      _onFieldsChange = _ref.onFieldsChange,
      _onFinish = _ref.onFinish,
      onFinishFailed = _ref.onFinishFailed,
      restProps = _objectWithoutProperties$1(_ref, ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"]);

  var formContext = React.useContext(FormContext); // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider

  var _useForm = useForm(form),
      _useForm2 = _slicedToArray$3(_useForm, 1),
      formInstance = _useForm2[0];

  var _formInstance$getInte = formInstance.getInternalHooks(HOOK_MARK),
      useSubscribe = _formInstance$getInte.useSubscribe,
      setInitialValues = _formInstance$getInte.setInitialValues,
      setCallbacks = _formInstance$getInte.setCallbacks,
      setValidateMessages = _formInstance$getInte.setValidateMessages,
      setPreserve = _formInstance$getInte.setPreserve; // Pass ref with form instance


  React.useImperativeHandle(ref, function () {
    return formInstance;
  }); // Register form into Context

  React.useEffect(function () {
    formContext.registerForm(name, formInstance);
    return function () {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]); // Pass props to store

  setValidateMessages(_objectSpread2$1(_objectSpread2$1({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);

      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }

        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);

      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed
  });
  setPreserve(preserve); // Set initial value, init store value when first mount

  var mountRef = React.useRef(null);
  setInitialValues(initialValues, !mountRef.current);

  if (!mountRef.current) {
    mountRef.current = true;
  } // Prepare children by `children` type


  var childrenNode = children;
  var childrenRenderProps = typeof children === 'function';

  if (childrenRenderProps) {
    var values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } // Not use subscribe when using render props


  useSubscribe(!childrenRenderProps); // Listen if fields provided. We use ref to save prev data here to avoid additional render

  var prevFieldsRef = React.useRef();
  React.useEffect(function () {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }

    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = React.useMemo(function () {
    return _objectSpread2$1(_objectSpread2$1({}, formInstance), {}, {
      validateTrigger: validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = /*#__PURE__*/React.createElement(Context.Provider, {
    value: formContextValue
  }, childrenNode);

  if (Component === false) {
    return wrapperNode;
  }

  return /*#__PURE__*/React.createElement(Component, _extends$2({}, restProps, {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;

      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 ? void 0 : _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};

var InternalForm = /*#__PURE__*/React.forwardRef(Form);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = WrapperField;
RefForm.List = List$1;
RefForm.useForm = useForm;

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = React.useRef({});

  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }

  return cacheRef.current.value;
}

var devWarning = (function (valid, component, message) {
  warningOnce(valid, "[antd: ".concat(component, "] ").concat(message));
});

var enUS$1 = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};

var locale$2 = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};

var locale$1 = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
var TimePicker = locale$1;

var locale = {
  lang: _extends$2({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, locale$2),
  timePickerLocale: _extends$2({}, TimePicker)
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var enUS = locale;

/* eslint-disable no-template-curly-in-string */
var typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: enUS$1,
  DatePicker: enUS,
  TimePicker: TimePicker,
  Calendar: enUS,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      "default": 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  }
};
var defaultLocale = localeValues;

var runtimeLocale = _extends$2({}, defaultLocale.Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = _extends$2(_extends$2({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = _extends$2({}, defaultLocale.Modal);
  }
}

var LocaleContext = /*#__PURE__*/createContext(undefined);
var LocaleContext$1 = LocaleContext;

var ANT_MARK = 'internalMark';

var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  _inherits$1(LocaleProvider, _React$Component);

  var _super = _createSuper$1(LocaleProvider);

  function LocaleProvider(props) {
    var _this;

    _classCallCheck$2(this, LocaleProvider);

    _this = _super.call(this, props);
    changeConfirmLocale(props.locale && props.locale.Modal);
    devWarning(props._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    return _this;
  }

  _createClass$2(LocaleProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      changeConfirmLocale(this.props.locale && this.props.locale.Modal);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;

      if (prevProps.locale !== locale) {
        changeConfirmLocale(locale && locale.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      changeConfirmLocale();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          children = _this$props.children;
      return /*#__PURE__*/React.createElement(LocaleContext$1.Provider, {
        value: _extends$2(_extends$2({}, locale), {
          exist: true
        })
      }, children);
    }
  }]);

  return LocaleProvider;
}(React.Component);
LocaleProvider.defaultProps = {
  locale: {}
};

var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  _inherits$1(LocaleReceiver, _React$Component);

  var _super = _createSuper$1(LocaleReceiver);

  function LocaleReceiver() {
    _classCallCheck$2(this, LocaleReceiver);

    return _super.apply(this, arguments);
  }

  _createClass$2(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale$1 = _this$props.defaultLocale;
      var locale = defaultLocale$1 || defaultLocale[componentName !== null && componentName !== void 0 ? componentName : 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends$2(_extends$2({}, locale instanceof Function ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return defaultLocale.locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);

  return LocaleReceiver;
}(React.Component);
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = LocaleContext$1;

var Empty$2 = function Empty() {
  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

var DefaultEmptyImg = Empty$2;

var Simple = function Simple() {
  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};

var SimpleEmptyImg = Simple;

var __rest$g = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var defaultEmptyImg = /*#__PURE__*/React.createElement(DefaultEmptyImg, null);
var simpleEmptyImg = /*#__PURE__*/React.createElement(SimpleEmptyImg, null);

var Empty = function Empty(_a) {
  var className = _a.className,
      customizePrefixCls = _a.prefixCls,
      _a$image = _a.image,
      image = _a$image === void 0 ? defaultEmptyImg : _a$image,
      description = _a.description,
      children = _a.children,
      imageStyle = _a.imageStyle,
      restProps = __rest$g(_a, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  return /*#__PURE__*/React.createElement(LocaleReceiver, {
    componentName: "Empty"
  }, function (locale) {
    var _classNames;

    var prefixCls = getPrefixCls('empty', customizePrefixCls);
    var des = typeof description !== 'undefined' ? description : locale.description;
    var alt = typeof des === 'string' ? des : 'empty';
    var imageNode = null;

    if (typeof image === 'string') {
      imageNode = /*#__PURE__*/React.createElement("img", {
        alt: alt,
        src: image
      });
    } else {
      imageNode = image;
    }

    return /*#__PURE__*/React.createElement("div", _extends$2({
      className: classnames(prefixCls, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), _defineProperty$4(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
    }, restProps), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-image"),
      style: imageStyle
    }, imageNode), des && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, des), children && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, children));
  });
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var Empty$1 = Empty;

var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/React.createElement(Empty$1, {
          image: Empty$1.PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/React.createElement(Empty$1, {
          image: Empty$1.PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return /*#__PURE__*/React.createElement(Empty$1, null);
    }
  });
};

var defaultRenderEmpty = renderEmpty;

var defaultGetPrefixCls = function defaultGetPrefixCls(suffixCls, customizePrefixCls) {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? "ant-".concat(suffixCls) : 'ant';
};

var ConfigContext = /*#__PURE__*/React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  renderEmpty: defaultRenderEmpty
});
var ConfigConsumer = ConfigContext.Consumer;

var SizeContext = /*#__PURE__*/React.createContext(undefined);
var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/React.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};
var SizeContext$1 = SizeContext;

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

// Event wrapper. Copy from react source code

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== 'undefined' ? window : {});
var style = {};

if (canUseDom()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName$2(transitionName, transitionType) {
  if (!transitionName) return null;

  if (_typeof$4(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return "".concat(transitionName, "-").concat(transitionType);
}

var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';

function useMountStatus(defaultValue) {
  var destroyRef = useRef(false);

  var _useState = useState(defaultValue),
      _useState2 = _slicedToArray$3(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  function setValue(next) {
    if (!destroyRef.current) {
      setVal(next);
    }
  }

  useEffect(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return [val, setValue];
}

var useIsomorphicLayoutEffect = canUseDom() ? useLayoutEffect$1 : useEffect;

var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };

  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

var rafUUID = 0;
var rafIds = new Map();

function cleanup(id) {
  rafIds.delete(id);
}

function wrapperRaf$1(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;

  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id); // Trigger

      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      }); // Bind real raf id

      rafIds.set(id, realId);
    }
  }

  callRef(times);
  return id;
}

wrapperRaf$1.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};

var useNextFrame = (function () {
  var nextFrameRef = React.useRef(null);

  function cancelNextFrame() {
    wrapperRaf$1.cancel(nextFrameRef.current);
  }

  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = wrapperRaf$1(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }

  React.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});

var STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
/** Skip current step */

var SkipStep = false;
/** Current step should be update in */

var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
var useStepQueue = (function (status, callback) {
  var _React$useState = React.useState(STEP_NONE),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1];

  var _useNextFrame = useNextFrame(),
      _useNextFrame2 = _slicedToArray$3(_useNextFrame, 2),
      nextFrame = _useNextFrame2[0],
      cancelNextFrame = _useNextFrame2[1];

  function startQueue() {
    setStep(STEP_PREPARE);
  }

  useIsomorphicLayoutEffect(function () {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);

      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep);
      } else {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep);
          }

          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  React.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});

var useDomMotionEvents = (function (callback) {
  var cacheElementRef = useRef(); // Cache callback

  var callbackRef = useRef(callback);
  callbackRef.current = callback; // Internal motion event handler

  var onInternalMotionEnd = React.useCallback(function (event) {
    callbackRef.current(event);
  }, []); // Remove events

  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  } // Patch events


  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }

    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

      cacheElementRef.current = element;
    }
  } // Clean up when removed


  React.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});

function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
      motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
      _ref$motionAppear = _ref.motionAppear,
      motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
      _ref$motionLeave = _ref.motionLeave,
      motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
      motionDeadline = _ref.motionDeadline,
      motionLeaveImmediately = _ref.motionLeaveImmediately,
      onAppearPrepare = _ref.onAppearPrepare,
      onEnterPrepare = _ref.onEnterPrepare,
      onLeavePrepare = _ref.onLeavePrepare,
      onAppearStart = _ref.onAppearStart,
      onEnterStart = _ref.onEnterStart,
      onLeaveStart = _ref.onLeaveStart,
      onAppearActive = _ref.onAppearActive,
      onEnterActive = _ref.onEnterActive,
      onLeaveActive = _ref.onLeaveActive,
      onAppearEnd = _ref.onAppearEnd,
      onEnterEnd = _ref.onEnterEnd,
      onLeaveEnd = _ref.onLeaveEnd,
      onVisibleChanged = _ref.onVisibleChanged; // Used for outer render usage to avoid `visible: false & status: none` to render nothing

  var _useState = useMountStatus(),
      _useState2 = _slicedToArray$3(_useState, 2),
      asyncVisible = _useState2[0],
      setAsyncVisible = _useState2[1];

  var _useState3 = useMountStatus(STATUS_NONE),
      _useState4 = _slicedToArray$3(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = useMountStatus(null),
      _useState6 = _slicedToArray$3(_useState5, 2),
      style = _useState6[0],
      setStyle = _useState6[1];

  var mountedRef = useRef(false);
  var deadlineRef = useRef(null);
  var destroyedRef = useRef(false); // =========================== Dom Node ===========================

  var cacheElementRef = useRef(null);

  function getDomElement() {
    var element = getElement();
    return element || cacheElementRef.current;
  } // ========================== Motion End ==========================


  var activeRef = useRef(false);

  function onInternalMotionEnd(event) {
    var element = getDomElement();

    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }

    var canEnd;

    if (status === STATUS_APPEAR && activeRef.current) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && activeRef.current) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && activeRef.current) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    } // Only update status when `canEnd` and not destroyed


    if (canEnd !== false && !destroyedRef.current) {
      setStatus(STATUS_NONE);
      setStyle(null);
    }
  }

  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd),
      _useDomMotionEvents2 = _slicedToArray$3(_useDomMotionEvents, 1),
      patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================


  var eventHandlers = React.useMemo(function () {
    var _ref2, _ref3, _ref4;

    switch (status) {
      case 'appear':
        return _ref2 = {}, _defineProperty$4(_ref2, STEP_PREPARE, onAppearPrepare), _defineProperty$4(_ref2, STEP_START, onAppearStart), _defineProperty$4(_ref2, STEP_ACTIVE, onAppearActive), _ref2;

      case 'enter':
        return _ref3 = {}, _defineProperty$4(_ref3, STEP_PREPARE, onEnterPrepare), _defineProperty$4(_ref3, STEP_START, onEnterStart), _defineProperty$4(_ref3, STEP_ACTIVE, onEnterActive), _ref3;

      case 'leave':
        return _ref4 = {}, _defineProperty$4(_ref4, STEP_PREPARE, onLeavePrepare), _defineProperty$4(_ref4, STEP_START, onLeaveStart), _defineProperty$4(_ref4, STEP_ACTIVE, onLeaveActive), _ref4;

      default:
        return {};
    }
  }, [status]);

  var _useStepQueue = useStepQueue(status, function (newStep) {
    // Only prepare step can be skip
    if (newStep === STEP_PREPARE) {
      var onPrepare = eventHandlers[STEP_PREPARE];

      if (!onPrepare) {
        return SkipStep;
      }

      return onPrepare(getDomElement());
    } // Rest step is sync update
    // Rest step is sync update


    if (step in eventHandlers) {
      var _eventHandlers$step;

      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }

    if (step === STEP_ACTIVE) {
      // Patch events when motion needed
      patchMotionEvents(getDomElement());

      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function () {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }

    return DoStep;
  }),
      _useStepQueue2 = _slicedToArray$3(_useStepQueue, 2),
      startStep = _useStepQueue2[0],
      step = _useStepQueue2[1];

  var active = isActive(step);
  activeRef.current = active; // ============================ Status ============================
  // Update with new status

  useIsomorphicLayoutEffect(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    if (!supportMotion) {
      return;
    }

    var nextStatus; // Appear

    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    } // Enter


    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    } // Leave


    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    } // Update to next status


    if (nextStatus) {
      setStatus(nextStatus);
      startStep();
    }
  }, [visible]); // ============================ Effect ============================
  // Reset when motion changed

  useEffect(function () {
    if ( // Cancel appear
    status === STATUS_APPEAR && !motionAppear || // Cancel enter
    status === STATUS_ENTER && !motionEnter || // Cancel leave
    status === STATUS_LEAVE && !motionLeave) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  useEffect(function () {
    return function () {
      clearTimeout(deadlineRef.current);
      destroyedRef.current = true;
    };
  }, []); // Trigger `onVisibleChanged`

  useEffect(function () {
    if (asyncVisible !== undefined && status === STATUS_NONE) {
      onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
    }
  }, [asyncVisible, status]); // ============================ Styles ============================

  var mergedStyle = style;

  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread2$1({
      transition: 'none'
    }, mergedStyle);
  }

  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}

var DomWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits$1(DomWrapper, _React$Component);

  var _super = _createSuper$1(DomWrapper);

  function DomWrapper() {
    _classCallCheck$2(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  _createClass$2(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return DomWrapper;
}(React.Component);

/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */

function genCSSMotion(config) {
  var transitionSupport = config;

  if (_typeof$4(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
        visible = _props$visible === void 0 ? true : _props$visible,
        _props$removeOnLeave = props.removeOnLeave,
        removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
        forceRender = props.forceRender,
        children = props.children,
        motionName = props.motionName,
        leavedClassName = props.leavedClassName,
        eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

    var nodeRef = useRef(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

    var wrapperNodeRef = useRef();

    function getDomElement() {
      try {
        return findDOMNode(nodeRef.current || wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }

    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
        _useStatus2 = _slicedToArray$3(_useStatus, 4),
        status = _useStatus2[0],
        statusStep = _useStatus2[1],
        statusStyle = _useStatus2[2],
        mergedVisible = _useStatus2[3]; // Record whether content has rended
    // Will return null for un-rendered even when `removeOnLeave={false}`


    var renderedRef = React.useRef(mergedVisible);

    if (mergedVisible) {
      renderedRef.current = true;
    } // ====================== Refs ======================


    var originRef = useRef(ref);
    originRef.current = ref;
    var setNodeRef = React.useCallback(function (node) {
      nodeRef.current = node;
      fillRef(originRef.current, node);
    }, []); // ===================== Render =====================

    var motionChildren;

    var mergedProps = _objectSpread2$1(_objectSpread2$1({}, eventProps), {}, {
      visible: visible
    });

    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === STATUS_NONE || !isSupportTransition(props)) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children(_objectSpread2$1({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current) {
        motionChildren = children(_objectSpread2$1(_objectSpread2$1({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender) {
        motionChildren = children(_objectSpread2$1(_objectSpread2$1({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames; // In motion


      var statusSuffix;

      if (statusStep === STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if (isActive(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === STEP_START) {
        statusSuffix = 'start';
      }

      motionChildren = children(_objectSpread2$1(_objectSpread2$1({}, mergedProps), {}, {
        className: classnames(getTransitionName$2(motionName, status), (_classNames = {}, _defineProperty$4(_classNames, getTransitionName$2(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), _defineProperty$4(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    }

    return /*#__PURE__*/React.createElement(DomWrapper, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
var CSSMotion = genCSSMotion(supportTransition);

var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;

  if (key && _typeof$4(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }

  return _objectSpread2$1(_objectSpread2$1({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;

    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];

      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return _objectSpread2$1(_objectSpread2$1({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }

        list.push(_objectSpread2$1(_objectSpread2$1({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    } // If not hit, it means key is removed


    if (!hit) {
      list.push(_objectSpread2$1(_objectSpread2$1({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  }); // Add rest to the list

  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return _objectSpread2$1(_objectSpread2$1({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */


  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
          status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    }); // Update `STATUS_ADD` to `STATUS_KEEP`

    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */

function genCSSMotionList(transitionSupport) {
  var CSSMotion$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CSSMotion;

  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    _inherits$1(CSSMotionList, _React$Component);

    var _super = _createSuper$1(CSSMotionList);

    function CSSMotionList() {
      var _this;

      _classCallCheck$2(this, CSSMotionList);

      _this = _super.apply(this, arguments);
      _this.state = {
        keyEntities: []
      };

      _this.removeKey = function (removeKey) {
        _this.setState(function (_ref) {
          var keyEntities = _ref.keyEntities;
          return {
            keyEntities: keyEntities.map(function (entity) {
              if (entity.key !== removeKey) return entity;
              return _objectSpread2$1(_objectSpread2$1({}, entity), {}, {
                status: STATUS_REMOVED
              });
            })
          };
        });
      };

      return _this;
    }

    _createClass$2(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var keyEntities = this.state.keyEntities;

        var _this$props = this.props,
            component = _this$props.component,
            children = _this$props.children,
            _onVisibleChanged = _this$props.onVisibleChanged,
            restProps = _objectWithoutProperties$1(_this$props, ["component", "children", "onVisibleChanged"]);

        var Component = component || React.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/React.createElement(Component, restProps, keyEntities.map(function (_ref2) {
          var status = _ref2.status,
              eventProps = _objectWithoutProperties$1(_ref2, ["status"]);

          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return /*#__PURE__*/React.createElement(CSSMotion$1, _extends$2({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });

              if (!changedVisible) {
                _this2.removeKey(eventProps.key);
              }
            }
          }), children);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            }); // Remove if already mark as removed

            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }

            return true;
          })
        };
      }
    }]);

    return CSSMotionList;
  }(React.Component);

  CSSMotionList.defaultProps = {
    component: 'div'
  };
  return CSSMotionList;
}
var CSSMotionList = genCSSMotionList(supportTransition);

var Notice = /*#__PURE__*/function (_Component) {
  _inherits$1(Notice, _Component);

  var _super = _createSuper$1(Notice);

  function Notice() {
    var _this;

    _classCallCheck$2(this, Notice);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.closeTimer = null;

    _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }

      _this.clearCloseTimer();

      var _this$props = _this.props,
          onClose = _this$props.onClose,
          noticeKey = _this$props.noticeKey;

      if (onClose) {
        onClose(noticeKey);
      }
    };

    _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    };

    _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };

    return _this;
  }

  _createClass$2(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.updateMark !== prevProps.updateMark || // Visible again need reset timer
      this.props.visible !== prevProps.visible && this.props.visible) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          closable = _this$props2.closable,
          closeIcon = _this$props2.closeIcon,
          style = _this$props2.style,
          onClick = _this$props2.onClick,
          children = _this$props2.children,
          holder = _this$props2.holder;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (acc, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          acc[key] = _this2.props[key];
        }

        return acc;
      }, {});
      var node = /*#__PURE__*/React.createElement("div", _extends$2({
        className: classnames(componentClass, className, _defineProperty$4({}, "".concat(componentClass, "-closable"), closable)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: onClick
      }, dataOrAriaAttributeProps), /*#__PURE__*/React.createElement("div", {
        className: "".concat(componentClass, "-content")
      }, children), closable ? /*#__PURE__*/React.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, closeIcon || /*#__PURE__*/React.createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);

      if (holder) {
        return /*#__PURE__*/ReactDOM.createPortal(node, holder);
      }

      return node;
    }
  }]);

  return Notice;
}(Component);

Notice.defaultProps = {
  onClose: function onClose() {},
  duration: 1.5
};

function useNotification(notificationInstance) {
  var createdRef = React.useRef({});

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  function notify(noticeProps) {
    var firstMount = true;
    notificationInstance.add(noticeProps, function (div, props) {
      var key = props.key;

      if (div && (!createdRef.current[key] || firstMount)) {
        var noticeEle = /*#__PURE__*/React.createElement(Notice, _extends$2({}, props, {
          holder: div
        }));
        createdRef.current[key] = noticeEle;
        setElements(function (originElements) {
          var index = originElements.findIndex(function (ele) {
            return ele.key === props.key;
          });

          if (index === -1) {
            return [].concat(_toConsumableArray(originElements), [noticeEle]);
          }

          var cloneList = _toConsumableArray(originElements);

          cloneList[index] = noticeEle;
          return cloneList;
        });
      }

      firstMount = false;
    });
  }

  return [notify, /*#__PURE__*/React.createElement(React.Fragment, null, elements)];
}

var seed = 0;
var now = Date.now();

function getUuid() {
  var id = seed;
  seed += 1;
  return "rcNotification_".concat(now, "_").concat(id);
}

var Notification = /*#__PURE__*/function (_Component) {
  _inherits$1(Notification, _Component);

  var _super = _createSuper$1(Notification);

  function Notification() {
    var _this;

    _classCallCheck$2(this, Notification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      notices: []
    };
    _this.hookRefs = new Map();

    _this.add = function (originNotice, holderCallback) {
      var key = originNotice.key || getUuid();

      var notice = _objectSpread2$1(_objectSpread2$1({}, originNotice), {}, {
        key: key
      });

      var maxCount = _this.props.maxCount;

      _this.setState(function (previousState) {
        var notices = previousState.notices;
        var noticeIndex = notices.map(function (v) {
          return v.notice.key;
        }).indexOf(key);
        var updatedNotices = notices.concat();

        if (noticeIndex !== -1) {
          updatedNotices.splice(noticeIndex, 1, {
            notice: notice,
            holderCallback: holderCallback
          });
        } else {
          if (maxCount && notices.length >= maxCount) {
            // XXX, use key of first item to update new added (let React to move exsiting
            // instead of remove and mount). Same key was used before for both a) external
            // manual control and b) internal react 'key' prop , which is not that good.
            // eslint-disable-next-line no-param-reassign
            // zombieJ: Not know why use `updateKey`. This makes Notice infinite loop in jest.
            // Change to `updateMark` for compare instead.
            // https://github.com/react-component/notification/commit/32299e6be396f94040bfa82517eea940db947ece
            notice.key = updatedNotices[0].notice.key;
            notice.updateMark = getUuid(); // zombieJ: That's why. User may close by key directly.
            // We need record this but not re-render to avoid upper issue
            // https://github.com/react-component/notification/issues/129

            notice.userPassKey = key;
            updatedNotices.shift();
          }

          updatedNotices.push({
            notice: notice,
            holderCallback: holderCallback
          });
        }

        return {
          notices: updatedNotices
        };
      });
    };

    _this.remove = function (removeKey) {
      _this.setState(function (_ref) {
        var notices = _ref.notices;
        return {
          notices: notices.filter(function (_ref2) {
            var _ref2$notice = _ref2.notice,
                key = _ref2$notice.key,
                userPassKey = _ref2$notice.userPassKey;
            var mergedKey = userPassKey || key;
            return mergedKey !== removeKey;
          })
        };
      });
    };

    _this.noticePropsMap = {};
    return _this;
  }

  _createClass$2(Notification, [{
    key: "getTransitionName",
    value: function getTransitionName() {
      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          animation = _this$props.animation;
      var transitionName = this.props.transitionName;

      if (!transitionName && animation) {
        transitionName = "".concat(prefixCls, "-").concat(animation);
      }

      return transitionName;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var notices = this.state.notices;
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          closeIcon = _this$props2.closeIcon,
          style = _this$props2.style;
      var noticeKeys = [];
      notices.forEach(function (_ref3, index) {
        var notice = _ref3.notice,
            holderCallback = _ref3.holderCallback;
        var updateMark = index === notices.length - 1 ? notice.updateMark : undefined;
        var key = notice.key,
            userPassKey = notice.userPassKey;

        var noticeProps = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
          prefixCls: prefixCls,
          closeIcon: closeIcon
        }, notice), notice.props), {}, {
          key: key,
          noticeKey: userPassKey || key,
          updateMark: updateMark,
          onClose: function onClose(noticeKey) {
            var _notice$onClose;

            _this2.remove(noticeKey);

            (_notice$onClose = notice.onClose) === null || _notice$onClose === void 0 ? void 0 : _notice$onClose.call(notice);
          },
          onClick: notice.onClick,
          children: notice.content
        }); // Give to motion


        noticeKeys.push(key);
        _this2.noticePropsMap[key] = {
          props: noticeProps,
          holderCallback: holderCallback
        };
      });
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(prefixCls, className),
        style: style
      }, /*#__PURE__*/React.createElement(CSSMotionList, {
        keys: noticeKeys,
        motionName: this.getTransitionName(),
        onVisibleChanged: function onVisibleChanged(changedVisible, _ref4) {
          var key = _ref4.key;

          if (!changedVisible) {
            delete _this2.noticePropsMap[key];
          }
        }
      }, function (_ref5) {
        var key = _ref5.key,
            motionClassName = _ref5.className,
            motionStyle = _ref5.style,
            visible = _ref5.visible;
        var _this2$noticePropsMap = _this2.noticePropsMap[key],
            noticeProps = _this2$noticePropsMap.props,
            holderCallback = _this2$noticePropsMap.holderCallback;

        if (holderCallback) {
          return /*#__PURE__*/React.createElement("div", {
            key: key,
            className: classnames(motionClassName, "".concat(prefixCls, "-hook-holder")),
            style: _objectSpread2$1({}, motionStyle),
            ref: function ref(div) {
              if (typeof key === 'undefined') {
                return;
              }

              if (div) {
                _this2.hookRefs.set(key, div);

                holderCallback(div, noticeProps);
              } else {
                _this2.hookRefs.delete(key);
              }
            }
          });
        }

        return /*#__PURE__*/React.createElement(Notice, _extends$2({}, noticeProps, {
          className: classnames(motionClassName, noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.className),
          style: _objectSpread2$1(_objectSpread2$1({}, motionStyle), noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.style),
          visible: visible
        }));
      }));
    }
  }]);

  return Notification;
}(Component);

Notification.newInstance = void 0;
Notification.defaultProps = {
  prefixCls: 'rc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};

Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref6 = properties || {},
      getContainer = _ref6.getContainer,
      props = _objectWithoutProperties$1(_ref6, ["getContainer"]);

  var div = document.createElement('div');

  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }

  var called = false;

  function ref(notification) {
    if (called) {
      return;
    }

    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },
      component: notification,
      destroy: function destroy() {
        ReactDOM.unmountComponentAtNode(div);

        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      },
      // Hooks
      useNotification: function useNotification$1() {
        return useNotification(notification);
      }
    });
  } // Only used for test case usage

  ReactDOM.render( /*#__PURE__*/React.createElement(Notification, _extends$2({}, props, {
    ref: ref
  })), div);
};

// This icon file is generated automatically.
var LoadingOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "0 0 1024 1024",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
      }
    }]
  },
  "name": "loading",
  "theme": "outlined"
};
var LoadingOutlinedSvg = LoadingOutlined$2;

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = '100%';
  }

  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n))); // Automatically convert percentage into number

  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  } // Handle floating point rounding errors


  if (Math.abs(n - max) < 0.000001) {
    return 1;
  } // Convert into [0, 1] range if it isn't already


  if (max === 360) {
    // If n is a hue given in degrees,
    // wrap around out-of-range values into [0, 360] range
    // then convert into [0, 1].
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    // If n not a hue given in degrees
    // Convert into [0, 1] range if it isn't already.
    n = n % max / parseFloat(String(max));
  }

  return n;
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */

function isOnePointZero(n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */

function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */

function boundAlpha(a) {
  a = parseFloat(a);

  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }

  return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */

function convertToPercentage(n) {
  if (n <= 1) {
    return Number(n) * 100 + "%";
  }

  return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */

function pad2(c) {
  return c.length === 1 ? '0' + c : String(c);
}

// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */

function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }

  if (t > 1) {
    t -= 1;
  }

  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }

  if (t < 1 / 2) {
    return q;
  }

  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }

  return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */


function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);

  if (s === 0) {
    // achromatic
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */

function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: h,
    s: s,
    v: v
  };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */

function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */

function rgbToHex(r, g, b, allow3Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))]; // Return a 3 character hex if possible

  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }

  return hex.join('');
}
/** Converts a hex value to a decimal */

function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */

function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json

/**
 * @hidden
 */
var names = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */

function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;

  if (typeof color === 'string') {
    color = stringInputToObject(color);
  }

  if (typeof color === 'object') {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format = 'hsv';
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format = 'hsl';
    }

    if (Object.prototype.hasOwnProperty.call(color, 'a')) {
      a = color.a;
    }
  }

  a = boundAlpha(a);
  return {
    ok: ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a
  };
} // <http://www.w3.org/TR/css3-values/#integers>

var CSS_INTEGER = '[-\\+]?\\d+%?'; // <http://www.w3.org/TR/css3-values/#number-value>

var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?'; // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.

var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")"; // Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren

var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
  rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
  hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
  hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
  hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
  hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */

function stringInputToObject(color) {
  color = color.trim().toLowerCase();

  if (color.length === 0) {
    return false;
  }

  var named = false;

  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === 'transparent') {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: 'name'
    };
  } // Try to match string input using regular expressions.
  // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
  // Just return an object and let the conversion functions handle that.
  // This way the result will be the same whether the tinycolor is initialized with string or object.


  var match = matchers.rgb.exec(color);

  if (match) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }

  match = matchers.rgba.exec(color);

  if (match) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }

  match = matchers.hsl.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }

  match = matchers.hsla.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }

  match = matchers.hsv.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }

  match = matchers.hsva.exec(color);

  if (match) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }

  match = matchers.hex8.exec(color);

  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? 'name' : 'hex8'
    };
  }

  match = matchers.hex6.exec(color);

  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? 'name' : 'hex'
    };
  }

  match = matchers.hex4.exec(color);

  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? 'name' : 'hex8'
    };
  }

  match = matchers.hex3.exec(color);

  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? 'name' : 'hex'
    };
  }

  return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */

function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`


function toHex(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.


function mix$1(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
          opacity = _ref3.opacity;
      var darkColorString = toHex(mix$1(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate$1(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
presetPalettes.red;
presetPalettes.volcano;
presetPalettes.gold;
presetPalettes.orange;
presetPalettes.yellow;
presetPalettes.lime;
presetPalettes.green;
presetPalettes.cyan;
presetPalettes.blue;
presetPalettes.geekblue;
presetPalettes.purple;
presetPalettes.magenta;
presetPalettes.grey;

var MARK_KEY = "rc-util-key";

function getContainer$1(option) {
  if (option.attachTo) {
    return option.attachTo;
  }

  var head = document.querySelector('head');
  return head || document.body;
}

function injectCSS(css) {
  var _option$csp;

  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!canUseDom()) {
    return null;
  }

  var styleNode = document.createElement('style');

  if ((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) {
    var _option$csp2;

    styleNode.nonce = (_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce;
  }

  styleNode.innerHTML = css;
  var container = getContainer$1(option);
  var firstChild = container.firstChild;

  if (option.prepend && container.prepend) {
    // Use `prepend` first
    container.prepend(styleNode);
  } else if (option.prepend && firstChild) {
    // Fallback to `insertBefore` like IE not support `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }

  return styleNode;
}
var containerCache = new Map();
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer$1(option); // Get real parent

  if (!containerCache.has(container)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }

  var existNode = Array.from(containerCache.get(container).children).find(function (node) {
    return node.tagName === 'STYLE' && node[MARK_KEY] === key;
  });

  if (existNode) {
    var _option$csp3, _option$csp4;

    if (((_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce) && existNode.nonce !== ((_option$csp4 = option.csp) === null || _option$csp4 === void 0 ? void 0 : _option$csp4.nonce)) {
      var _option$csp5;

      existNode.nonce = (_option$csp5 = option.csp) === null || _option$csp5 === void 0 ? void 0 : _option$csp5.nonce;
    }

    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }

    return existNode;
  }

  var newNode = injectCSS(css, option);
  newNode[MARK_KEY] = key;
  return newNode;
}

function warning(valid, message) {
  warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof$4(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof$4(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2$1({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2$1(_objectSpread2$1({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;

  var _useContext = useContext(IconContext$1),
      csp = _useContext.csp;

  useEffect(function () {
    updateCSS(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp
    });
  }, []);
};

var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread2$1({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
      className = props.className,
      onClick = props.onClick,
      style = props.style,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      restProps = _objectWithoutProperties$1(props, ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"]);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  useInsertStyles();
  warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread2$1(_objectSpread2$1({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate(target.icon, "svg-".concat(target.name), _objectSpread2$1({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var ReactIcon = IconBase;

function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray$3(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return ReactIcon.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = ReactIcon.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon$1 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
      icon = props.icon,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      twoToneColor = props.twoToneColor,
      restProps = _objectWithoutProperties$1(props, ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"]);

  var _React$useContext = React.useContext(IconContext$1),
      _React$useContext$pre = _React$useContext.prefixCls,
      prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classnames(prefixCls, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty$4(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray$3(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/React.createElement("span", Object.assign({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/React.createElement(ReactIcon, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon$1.displayName = 'AntdIcon';
Icon$1.getTwoToneColor = getTwoToneColor;
Icon$1.setTwoToneColor = setTwoToneColor;
var AntdIcon = Icon$1;

// GENERATE BY ./scripts/generate.ts

var LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: LoadingOutlinedSvg
  }));
};

LoadingOutlined.displayName = 'LoadingOutlined';
var LoadingOutlined$1 = /*#__PURE__*/React.forwardRef(LoadingOutlined);

// This icon file is generated automatically.
var ExclamationCircleFilled$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      }
    }]
  },
  "name": "exclamation-circle",
  "theme": "filled"
};
var ExclamationCircleFilledSvg = ExclamationCircleFilled$2;

// GENERATE BY ./scripts/generate.ts

var ExclamationCircleFilled = function ExclamationCircleFilled(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: ExclamationCircleFilledSvg
  }));
};

ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';
var ExclamationCircleFilled$1 = /*#__PURE__*/React.forwardRef(ExclamationCircleFilled);

// This icon file is generated automatically.
var CloseCircleFilled$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
      }
    }]
  },
  "name": "close-circle",
  "theme": "filled"
};
var CloseCircleFilledSvg = CloseCircleFilled$2;

// GENERATE BY ./scripts/generate.ts

var CloseCircleFilled = function CloseCircleFilled(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: CloseCircleFilledSvg
  }));
};

CloseCircleFilled.displayName = 'CloseCircleFilled';
var CloseCircleFilled$1 = /*#__PURE__*/React.forwardRef(CloseCircleFilled);

// This icon file is generated automatically.
var CheckCircleFilled$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
      }
    }]
  },
  "name": "check-circle",
  "theme": "filled"
};
var CheckCircleFilledSvg = CheckCircleFilled$2;

// GENERATE BY ./scripts/generate.ts

var CheckCircleFilled = function CheckCircleFilled(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: CheckCircleFilledSvg
  }));
};

CheckCircleFilled.displayName = 'CheckCircleFilled';
var CheckCircleFilled$1 = /*#__PURE__*/React.forwardRef(CheckCircleFilled);

// This icon file is generated automatically.
var InfoCircleFilled$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      }
    }]
  },
  "name": "info-circle",
  "theme": "filled"
};
var InfoCircleFilledSvg = InfoCircleFilled$2;

// GENERATE BY ./scripts/generate.ts

var InfoCircleFilled = function InfoCircleFilled(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: InfoCircleFilledSvg
  }));
};

InfoCircleFilled.displayName = 'InfoCircleFilled';
var InfoCircleFilled$1 = /*#__PURE__*/React.forwardRef(InfoCircleFilled);

function createUseMessage(getRcNotificationInstance, getRCNoticeProps) {
  var useMessage = function useMessage() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = useNotification(proxy),
        _useRCNotification2 = _slicedToArray$3(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('message', customizePrefixCls);
      var rootPrefixCls = getPrefixCls();
      var target = args.key || getKeyThenIncreaseKey();
      var closePromise = new Promise(function (resolve) {
        var callback = function callback() {
          if (typeof args.onClose === 'function') {
            args.onClose();
          }

          return resolve(true);
        };

        getRcNotificationInstance(_extends$2(_extends$2({}, args), {
          prefixCls: mergedPrefixCls,
          rootPrefixCls: rootPrefixCls
        }), function (_ref) {
          var prefixCls = _ref.prefixCls,
              instance = _ref.instance;
          innerInstance = instance;
          hookNotify(getRCNoticeProps(_extends$2(_extends$2({}, args), {
            key: target,
            onClose: callback
          }), prefixCls));
        });
      });

      var result = function result() {
        if (innerInstance) {
          innerInstance.removeNotice(target);
        }
      };

      result.then = function (filled, rejected) {
        return closePromise.then(filled, rejected);
      };

      result.promise = closePromise;
      return result;
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
      return attachTypeApi(hookApiRef.current, type);
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useMessage;
}

var messageInstance;
var defaultDuration$1 = 3;
var defaultTop$1;
var key = 1;
var localPrefixCls = '';
var transitionName = 'move-up';
var hasTransitionName = false;
var getContainer;
var maxCount;
var rtl$1 = false;
function getKeyThenIncreaseKey() {
  return key++;
}

function setMessageConfig(options) {
  if (options.top !== undefined) {
    defaultTop$1 = options.top;
    messageInstance = null; // delete messageInstance for new defaultTop
  }

  if (options.duration !== undefined) {
    defaultDuration$1 = options.duration;
  }

  if (options.prefixCls !== undefined) {
    localPrefixCls = options.prefixCls;
  }

  if (options.getContainer !== undefined) {
    getContainer = options.getContainer;
  }

  if (options.transitionName !== undefined) {
    transitionName = options.transitionName;
    messageInstance = null; // delete messageInstance for new transitionName

    hasTransitionName = true;
  }

  if (options.maxCount !== undefined) {
    maxCount = options.maxCount;
    messageInstance = null;
  }

  if (options.rtl !== undefined) {
    rtl$1 = options.rtl;
  }
}

function getRCNotificationInstance(args, callback) {
  var customizePrefixCls = args.prefixCls;

  var _globalConfig = globalConfig(),
      getPrefixCls = _globalConfig.getPrefixCls,
      getRootPrefixCls = _globalConfig.getRootPrefixCls;

  var prefixCls = getPrefixCls('message', customizePrefixCls || localPrefixCls);
  var rootPrefixCls = getRootPrefixCls(args.rootPrefixCls, prefixCls);

  if (messageInstance) {
    callback({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls,
      instance: messageInstance
    });
    return;
  }

  var instanceConfig = {
    prefixCls: prefixCls,
    transitionName: hasTransitionName ? transitionName : "".concat(rootPrefixCls, "-").concat(transitionName),
    style: {
      top: defaultTop$1
    },
    getContainer: getContainer,
    maxCount: maxCount
  };
  Notification.newInstance(instanceConfig, function (instance) {
    if (messageInstance) {
      callback({
        prefixCls: prefixCls,
        rootPrefixCls: rootPrefixCls,
        instance: messageInstance
      });
      return;
    }

    messageInstance = instance;

    callback({
      prefixCls: prefixCls,
      rootPrefixCls: rootPrefixCls,
      instance: instance
    });
  });
}

var typeToIcon$1 = {
  info: InfoCircleFilled$1,
  success: CheckCircleFilled$1,
  error: CloseCircleFilled$1,
  warning: ExclamationCircleFilled$1,
  loading: LoadingOutlined$1
};

function getRCNoticeProps$1(args, prefixCls) {
  var _classNames;

  var duration = args.duration !== undefined ? args.duration : defaultDuration$1;
  var IconComponent = typeToIcon$1[args.type];
  var messageClass = classnames("".concat(prefixCls, "-custom-content"), (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), _defineProperty$4(_classNames, "".concat(prefixCls, "-rtl"), rtl$1 === true), _classNames));
  return {
    key: args.key,
    duration: duration,
    style: args.style || {},
    className: args.className,
    content: /*#__PURE__*/React.createElement("div", {
      className: messageClass
    }, args.icon || IconComponent && /*#__PURE__*/React.createElement(IconComponent, null), /*#__PURE__*/React.createElement("span", null, args.content)),
    onClose: args.onClose,
    onClick: args.onClick
  };
}

function notice$1(args) {
  var target = args.key || key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getRCNotificationInstance(args, function (_ref) {
      var prefixCls = _ref.prefixCls,
          instance = _ref.instance;
      instance.notice(getRCNoticeProps$1(_extends$2(_extends$2({}, args), {
        key: target,
        onClose: callback
      }), prefixCls));
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api$1 = {
  open: notice$1,
  config: setMessageConfig,
  destroy: function destroy(messageKey) {
    if (messageInstance) {
      if (messageKey) {
        var _messageInstance = messageInstance,
            removeNotice = _messageInstance.removeNotice;
        removeNotice(messageKey);
      } else {
        var _messageInstance2 = messageInstance,
            destroy = _messageInstance2.destroy;
        destroy();
        messageInstance = null;
      }
    }
  }
};
function attachTypeApi(originalApi, type) {
  originalApi[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return originalApi.open(_extends$2(_extends$2({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return originalApi.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
}
['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  return attachTypeApi(api$1, type);
});
api$1.warn = api$1.warning;
api$1.useMessage = createUseMessage(getRCNotificationInstance, getRCNoticeProps$1);
var message = api$1;

// This icon file is generated automatically.
var CloseOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
      }
    }]
  },
  "name": "close",
  "theme": "outlined"
};
var CloseOutlinedSvg = CloseOutlined$2;

// GENERATE BY ./scripts/generate.ts

var CloseOutlined = function CloseOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: CloseOutlinedSvg
  }));
};

CloseOutlined.displayName = 'CloseOutlined';
var CloseOutlined$1 = /*#__PURE__*/React.forwardRef(CloseOutlined);

// This icon file is generated automatically.
var CheckCircleOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }]
  },
  "name": "check-circle",
  "theme": "outlined"
};
var CheckCircleOutlinedSvg = CheckCircleOutlined$2;

// GENERATE BY ./scripts/generate.ts

var CheckCircleOutlined = function CheckCircleOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: CheckCircleOutlinedSvg
  }));
};

CheckCircleOutlined.displayName = 'CheckCircleOutlined';
var CheckCircleOutlined$1 = /*#__PURE__*/React.forwardRef(CheckCircleOutlined);

// This icon file is generated automatically.
var CloseCircleOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }]
  },
  "name": "close-circle",
  "theme": "outlined"
};
var CloseCircleOutlinedSvg = CloseCircleOutlined$2;

// GENERATE BY ./scripts/generate.ts

var CloseCircleOutlined = function CloseCircleOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: CloseCircleOutlinedSvg
  }));
};

CloseCircleOutlined.displayName = 'CloseCircleOutlined';
var CloseCircleOutlined$1 = /*#__PURE__*/React.forwardRef(CloseCircleOutlined);

// This icon file is generated automatically.
var ExclamationCircleOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"
      }
    }]
  },
  "name": "exclamation-circle",
  "theme": "outlined"
};
var ExclamationCircleOutlinedSvg = ExclamationCircleOutlined$2;

// GENERATE BY ./scripts/generate.ts

var ExclamationCircleOutlined = function ExclamationCircleOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: ExclamationCircleOutlinedSvg
  }));
};

ExclamationCircleOutlined.displayName = 'ExclamationCircleOutlined';
var ExclamationCircleOutlined$1 = /*#__PURE__*/React.forwardRef(ExclamationCircleOutlined);

// This icon file is generated automatically.
var InfoCircleOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"
      }
    }]
  },
  "name": "info-circle",
  "theme": "outlined"
};
var InfoCircleOutlinedSvg = InfoCircleOutlined$2;

// GENERATE BY ./scripts/generate.ts

var InfoCircleOutlined = function InfoCircleOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: InfoCircleOutlinedSvg
  }));
};

InfoCircleOutlined.displayName = 'InfoCircleOutlined';
var InfoCircleOutlined$1 = /*#__PURE__*/React.forwardRef(InfoCircleOutlined);

function createUseNotification(getNotificationInstance, getRCNoticeProps) {
  var useNotification$1 = function useNotification$1() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = useNotification(proxy),
        _useRCNotification2 = _slicedToArray$3(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('notification', customizePrefixCls);
      getNotificationInstance(_extends$2(_extends$2({}, args), {
        prefixCls: mergedPrefixCls
      }), function (_ref) {
        var prefixCls = _ref.prefixCls,
            instance = _ref.instance;
        innerInstance = instance;
        hookNotify(getRCNoticeProps(args, prefixCls));
      });
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error'].forEach(function (type) {
      hookApiRef.current[type] = function (args) {
        return hookApiRef.current.open(_extends$2(_extends$2({}, args), {
          type: type
        }));
      };
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useNotification$1;
}

undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPrefixCls$1 = '';
var defaultPlacement = 'topRight';
var defaultGetContainer;
var defaultCloseIcon;
var rtl = false;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer,
      closeIcon = options.closeIcon,
      prefixCls = options.prefixCls;

  if (prefixCls !== undefined) {
    defaultPrefixCls$1 = prefixCls;
  }

  if (duration !== undefined) {
    defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  } else if (options.rtl) {
    defaultPlacement = 'topLeft';
  }

  if (bottom !== undefined) {
    defaultBottom = bottom;
  }

  if (top !== undefined) {
    defaultTop = top;
  }

  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }

  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(args, callback) {
  var _args$placement = args.placement,
      placement = _args$placement === void 0 ? defaultPlacement : _args$placement,
      top = args.top,
      bottom = args.bottom,
      _args$getContainer = args.getContainer,
      getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer,
      _args$closeIcon = args.closeIcon,
      closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon,
      customizePrefixCls = args.prefixCls;

  var _globalConfig = globalConfig(),
      getPrefixCls = _globalConfig.getPrefixCls;

  var prefixCls = getPrefixCls('notification', customizePrefixCls || defaultPrefixCls$1);
  var cacheKey = "".concat(prefixCls, "-").concat(placement);
  var cacheInstance = notificationInstance[cacheKey];

  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function (instance) {
      callback({
        prefixCls: "".concat(prefixCls, "-notice"),
        instance: instance
      });
    });
    return;
  }

  var closeIconToRender = /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/React.createElement(CloseOutlined$1, {
    className: "".concat(prefixCls, "-close-icon")
  }));
  var notificationClass = classnames("".concat(prefixCls, "-").concat(placement), _defineProperty$4({}, "".concat(prefixCls, "-rtl"), rtl === true));
  notificationInstance[cacheKey] = new Promise(function (resolve) {
    Notification.newInstance({
      prefixCls: prefixCls,
      className: notificationClass,
      style: getPlacementStyle(placement, top, bottom),
      getContainer: getContainer,
      closeIcon: closeIconToRender
    }, function (notification) {
      resolve(notification);
      callback({
        prefixCls: "".concat(prefixCls, "-notice"),
        instance: notification
      });
    });
  });
}

var typeToIcon = {
  success: CheckCircleOutlined$1,
  info: InfoCircleOutlined$1,
  error: CloseCircleOutlined$1,
  warning: ExclamationCircleOutlined$1
};

function getRCNoticeProps(args, prefixCls) {
  var durationArg = args.duration,
      icon = args.icon,
      type = args.type,
      description = args.description,
      message = args.message,
      btn = args.btn,
      onClose = args.onClose,
      onClick = args.onClick,
      key = args.key,
      style = args.style,
      className = args.className;
  var duration = durationArg === undefined ? defaultDuration : durationArg;
  var iconNode = null;

  if (icon) {
    iconNode = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, args.icon);
  } else if (type) {
    iconNode = /*#__PURE__*/React.createElement(typeToIcon[type] || null, {
      className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(type)
    });
  }

  var autoMarginTag = !description && iconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: /*#__PURE__*/React.createElement("div", {
      className: iconNode ? "".concat(prefixCls, "-with-icon") : '',
      role: "alert"
    }, iconNode, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, autoMarginTag, message), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, description), btn ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-btn")
    }, btn) : null),
    duration: duration,
    closable: true,
    onClose: onClose,
    onClick: onClick,
    key: key,
    style: style || {},
    className: classnames(className, _defineProperty$4({}, "".concat(prefixCls, "-").concat(type), !!type))
  };
}

function notice(args) {
  getNotificationInstance(args, function (_ref) {
    var prefixCls = _ref.prefixCls,
        instance = _ref.instance;
    instance.notice(getRCNoticeProps(args, prefixCls));
  });
}

var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.removeNotice(key);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (args) {
    return api.open(_extends$2(_extends$2({}, args), {
      type: type
    }));
  };
});
api.warn = api.warning;
api.useNotification = createUseNotification(getNotificationInstance, getRCNoticeProps);
var notification = api;

var PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'form'];
var defaultPrefixCls = 'ant';
var globalPrefixCls;

var setGlobalConfig = function setGlobalConfig(params) {
  if (params.prefixCls !== undefined) {
    globalPrefixCls = params.prefixCls;
  }
};

function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}

var globalConfig = function globalConfig() {
  return {
    getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
      if (customizePrefixCls) return customizePrefixCls;
      return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
    },
    getRootPrefixCls: function getRootPrefixCls(rootPrefixCls, customizePrefixCls) {
      // Customize rootPrefixCls is first priority
      if (rootPrefixCls) {
        return rootPrefixCls;
      } // If Global prefixCls provided, use this


      if (globalPrefixCls) {
        return globalPrefixCls;
      } // [Legacy] If customize prefixCls provided, we cut it to get the prefixCls


      if (customizePrefixCls && customizePrefixCls.includes('-')) {
        return customizePrefixCls.replace(/^(.*)-[^-]*$/, '$1');
      } // Fallback to default prefixCls


      return getGlobalPrefixCls();
    }
  };
};

var ProviderChildren = function ProviderChildren(props) {
  var _a, _b;

  var children = props.children,
      csp = props.csp,
      autoInsertSpaceInButton = props.autoInsertSpaceInButton,
      form = props.form,
      locale = props.locale,
      componentSize = props.componentSize,
      direction = props.direction,
      space = props.space,
      virtual = props.virtual,
      dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
      legacyLocale = props.legacyLocale,
      parentContext = props.parentContext,
      iconPrefixCls = props.iconPrefixCls;
  var getPrefixCls = React.useCallback(function (suffixCls, customizePrefixCls) {
    var prefixCls = props.prefixCls;
    if (customizePrefixCls) return customizePrefixCls;
    var mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);

  var config = _extends$2(_extends$2({}, parentContext), {
    csp: csp,
    autoInsertSpaceInButton: autoInsertSpaceInButton,
    locale: locale || legacyLocale,
    direction: direction,
    space: space,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth,
    getPrefixCls: getPrefixCls
  }); // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.


  PASSED_PROPS.forEach(function (propName) {
    var propValue = props[propName];

    if (propValue) {
      config[propName] = propValue;
    }
  }); // https://github.com/ant-design/ant-design/issues/27617

  var memoedConfig = useMemo(function () {
    return config;
  }, config, function (prevConfig, currentConfig) {
    var prevKeys = Object.keys(prevConfig);
    var currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(function (key) {
      return prevConfig[key] !== currentConfig[key];
    });
  });
  var memoIconContextValue = React.useMemo(function () {
    return {
      prefixCls: iconPrefixCls,
      csp: csp
    };
  }, [iconPrefixCls]);
  var childNode = children; // Additional Form provider

  var validateMessages = {};

  if (locale) {
    validateMessages = ((_a = locale.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = defaultLocale.Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
  }

  if (form && form.validateMessages) {
    validateMessages = _extends$2(_extends$2({}, validateMessages), form.validateMessages);
  }

  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/React.createElement(FormProvider, {
      validateMessages: validateMessages
    }, children);
  }

  if (locale) {
    childNode = /*#__PURE__*/React.createElement(LocaleProvider, {
      locale: locale,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }

  if (iconPrefixCls) {
    childNode = /*#__PURE__*/React.createElement(IconContext$1.Provider, {
      value: memoIconContextValue
    }, childNode);
  }

  if (componentSize) {
    childNode = /*#__PURE__*/React.createElement(SizeContextProvider, {
      size: componentSize
    }, childNode);
  }

  return /*#__PURE__*/React.createElement(ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};

var ConfigProvider = function ConfigProvider(props) {
  React.useEffect(function () {
    if (props.direction) {
      message.config({
        rtl: props.direction === 'rtl'
      });
      notification.config({
        rtl: props.direction === 'rtl'
      });
    }
  }, [props.direction]);
  return /*#__PURE__*/React.createElement(LocaleReceiver, null, function (_, __, legacyLocale) {
    return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (context) {
      return /*#__PURE__*/React.createElement(ProviderChildren, _extends$2({
        parentContext: context,
        legacyLocale: legacyLocale
      }, props));
    });
  });
};
/** @private internal Usage. do not use in your production */


ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext$1;
ConfigProvider.config = setGlobalConfig;
var ConfigProvider$1 = ConfigProvider;

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = ReactDOM.unstable_batchedUpdates ? function run(e) {
    ReactDOM.unstable_batchedUpdates(cb, e);
  } : cb;

  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    }
  };
}

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
/* eslint-enable max-len */

var ariaPrefix = 'aria-';
var dataPrefix = 'data-';

function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */


function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;

  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread2$1({}, ariaOnly);
  }

  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if ( // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) || // Data
    mergedConfig.data && match(key, dataPrefix) || // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

function ownKeys$2(object, enumerableOnly) {
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

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$2(Object(source), true).forEach(function (key) {
        _defineProperty$3(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty$3(obj, key, value) {
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
/**
 * Fill component to provided the scroll content real height.
 */

var Filler = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var height = _ref.height,
      offset = _ref.offset,
      children = _ref.children,
      prefixCls = _ref.prefixCls,
      onInnerResize = _ref.onInnerResize;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  if (offset !== undefined) {
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = _objectSpread$1(_objectSpread$1({}, innerStyle), {}, {
      transform: "translateY(".concat(offset, "px)"),
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/React.createElement(ReactResizeObserver, {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;

      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: innerStyle,
    className: classnames(_defineProperty$3({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, children)));
});
Filler.displayName = 'Filler';

function _typeof$3(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$3 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$3(obj);
}

function _defineProperty$2(obj, key, value) {
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

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
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

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
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

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$3(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
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

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
var MIN_SIZE = 20;

function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}

var ScrollBar = /*#__PURE__*/function (_React$Component) {
  _inherits(ScrollBar, _React$Component);

  var _super = _createSuper(ScrollBar);

  function ScrollBar() {
    var _this;

    _classCallCheck$1(this, ScrollBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.moveRaf = null;
    _this.scrollbarRef = /*#__PURE__*/React.createRef();
    _this.thumbRef = /*#__PURE__*/React.createRef();
    _this.visibleTimeout = null;
    _this.state = {
      dragging: false,
      pageY: null,
      startTop: null,
      visible: false
    };

    _this.delayHidden = function () {
      clearTimeout(_this.visibleTimeout);

      _this.setState({
        visible: true
      });

      _this.visibleTimeout = setTimeout(function () {
        _this.setState({
          visible: false
        });
      }, 2000);
    };

    _this.onScrollbarTouchStart = function (e) {
      e.preventDefault();
    };

    _this.onContainerMouseDown = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };

    _this.patchEvents = function () {
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseup', _this.onMouseUp);

      _this.thumbRef.current.addEventListener('touchmove', _this.onMouseMove);

      _this.thumbRef.current.addEventListener('touchend', _this.onMouseUp);
    };

    _this.removeEvents = function () {
      window.removeEventListener('mousemove', _this.onMouseMove);
      window.removeEventListener('mouseup', _this.onMouseUp);

      _this.scrollbarRef.current.removeEventListener('touchstart', _this.onScrollbarTouchStart);

      _this.thumbRef.current.removeEventListener('touchstart', _this.onMouseDown);

      _this.thumbRef.current.removeEventListener('touchmove', _this.onMouseMove);

      _this.thumbRef.current.removeEventListener('touchend', _this.onMouseUp);

      wrapperRaf$1.cancel(_this.moveRaf);
    };

    _this.onMouseDown = function (e) {
      var onStartMove = _this.props.onStartMove;

      _this.setState({
        dragging: true,
        pageY: getPageY(e),
        startTop: _this.getTop()
      });

      onStartMove();

      _this.patchEvents();

      e.stopPropagation();
      e.preventDefault();
    };

    _this.onMouseMove = function (e) {
      var _this$state = _this.state,
          dragging = _this$state.dragging,
          pageY = _this$state.pageY,
          startTop = _this$state.startTop;
      var onScroll = _this.props.onScroll;
      wrapperRaf$1.cancel(_this.moveRaf);

      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;

        var enableScrollRange = _this.getEnableScrollRange();

        var enableHeightRange = _this.getEnableHeightRange();

        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        _this.moveRaf = wrapperRaf$1(function () {
          onScroll(newScrollTop);
        });
      }
    };

    _this.onMouseUp = function () {
      var onStopMove = _this.props.onStopMove;

      _this.setState({
        dragging: false
      });

      onStopMove();

      _this.removeEvents();
    };

    _this.getSpinHeight = function () {
      var _this$props = _this.props,
          height = _this$props.height,
          count = _this$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    };

    _this.getEnableScrollRange = function () {
      var _this$props2 = _this.props,
          scrollHeight = _this$props2.scrollHeight,
          height = _this$props2.height;
      return scrollHeight - height || 0;
    };

    _this.getEnableHeightRange = function () {
      var height = _this.props.height;

      var spinHeight = _this.getSpinHeight();

      return height - spinHeight || 0;
    };

    _this.getTop = function () {
      var scrollTop = _this.props.scrollTop;

      var enableScrollRange = _this.getEnableScrollRange();

      var enableHeightRange = _this.getEnableHeightRange();

      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }

      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    };

    _this.showScroll = function () {
      var _this$props3 = _this.props,
          height = _this$props3.height,
          scrollHeight = _this$props3.scrollHeight;
      return scrollHeight > height;
    };

    return _this;
  }

  _createClass$1(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart);
      this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollTop !== this.props.scrollTop) {
        this.delayHidden();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
      clearTimeout(this.visibleTimeout);
    }
  }, {
    key: "render",
    value: // ====================== Render =======================
    function render() {
      var _this$state2 = this.state,
          dragging = _this$state2.dragging,
          visible = _this$state2.visible;
      var prefixCls = this.props.prefixCls;
      var spinHeight = this.getSpinHeight();
      var top = this.getTop();
      var canScroll = this.showScroll();
      var mergedVisible = canScroll && visible;
      return /*#__PURE__*/React.createElement("div", {
        ref: this.scrollbarRef,
        className: classnames("".concat(prefixCls, "-scrollbar"), _defineProperty$2({}, "".concat(prefixCls, "-scrollbar-show"), canScroll)),
        style: {
          width: 8,
          top: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: mergedVisible ? null : 'none'
        },
        onMouseDown: this.onContainerMouseDown,
        onMouseMove: this.delayHidden
      }, /*#__PURE__*/React.createElement("div", {
        ref: this.thumbRef,
        className: classnames("".concat(prefixCls, "-scrollbar-thumb"), _defineProperty$2({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
        style: {
          width: '100%',
          height: spinHeight,
          top: top,
          left: 0,
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 99,
          cursor: 'pointer',
          userSelect: 'none'
        },
        onMouseDown: this.onMouseDown
      }));
    }
  }]);

  return ScrollBar;
}(React.Component);

function Item$1(_ref) {
  var children = _ref.children,
      setRef = _ref.setRef;
  var refFunc = React.useCallback(function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/React.cloneElement(children, {
    ref: refFunc
  });
}

function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {// style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    var key = getKey(item);
    return /*#__PURE__*/React.createElement(Item$1, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
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
} // Firefox has low performance of map.


var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    _classCallCheck(this, CacheMap);

    this.maps = void 0;
    this.maps = {};
    this.maps.prototype = null;
  }

  _createClass(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);

  return CacheMap;
}();

function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}

function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit$2(arr, i) {
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

function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) return arr;
}
function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray$2(_React$useState, 2),
      updatedMark = _React$useState2[0],
      setUpdatedMark = _React$useState2[1];

  var instanceRef = useRef(new Map());
  var heightsRef = useRef(new CacheMap());
  var heightUpdateIdRef = useRef(0);

  function collectHeight() {
    heightUpdateIdRef.current += 1;
    var currentId = heightUpdateIdRef.current;
    Promise.resolve().then(function () {
      // Only collect when it's latest call
      if (currentId !== heightUpdateIdRef.current) return;
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var htmlElement = findDOMNode(element);
          var offsetHeight = htmlElement.offsetHeight;

          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      }); // Always trigger update mark to tell parent that should re-calculate heights when resized

      setUpdatedMark(function (c) {
        return c + 1;
      });
    });
  }

  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);

    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    } // Instance changed


    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }

  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}

function _typeof$2(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$2 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$2(obj);
}
function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = React.useRef();
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    } // Normal scroll logic


    wrapperRaf$1.cancel(scrollRef.current);

    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && _typeof$2(arg) === 'object') {
      var index;
      var align = arg.align;

      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }

      var _arg$offset = arg.offset,
          offset = _arg$offset === void 0 ? 0 : _arg$offset; // We will retry 3 times in case dynamic height shaking

      var syncScroll = function syncScroll(times, targetAlign) {
        if (times < 0 || !containerRef.current) return;
        var height = containerRef.current.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign; // Go to next frame if height not exist

        if (height) {
          var mergedAlign = targetAlign || align; // Get top & bottom

          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data.length, index);

          for (var i = 0; i <= maxLen; i += 1) {
            var key = getKey(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            stackTop = itemBottom;

            if (i === index && cacheHeight === undefined) {
              needCollectHeight = true;
            }
          } // Scroll to


          var targetTop = null;

          switch (mergedAlign) {
            case 'top':
              targetTop = itemTop - offset;
              break;

            case 'bottom':
              targetTop = itemBottom - height + offset;
              break;

            default:
              {
                var scrollTop = containerRef.current.scrollTop;
                var scrollBottom = scrollTop + height;

                if (itemTop < scrollTop) {
                  newTargetAlign = 'top';
                } else if (itemBottom > scrollBottom) {
                  newTargetAlign = 'bottom';
                }
              }
          }

          if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
            syncScrollTop(targetTop);
          }
        } // We will retry since element may not sync height as it described


        scrollRef.current = wrapperRaf$1(function () {
          if (needCollectHeight) {
            collectHeight();
          }

          syncScroll(times - 1, newTargetAlign);
        });
      };

      syncScroll(3);
    }
  };
}

/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */

function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;

  if (originLen === 0 && targetLen === 0) {
    return null;
  }

  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }

  var notExistKey = {
    __EMPTY_ITEM__: true
  };

  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }

    return notExistKey;
  } // Loop to find diff one


  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;

  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);

    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }

  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit$1(arr, i) {
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

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}
function useDiffItem(data, getKey, onDiff) {
  var _React$useState = React.useState(data),
      _React$useState2 = _slicedToArray$1(_React$useState, 2),
      prevData = _React$useState2[0],
      setPrevData = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray$1(_React$useState3, 2),
      diffItem = _React$useState4[0],
      setDiffItem = _React$useState4[1];

  React.useEffect(function () {
    var diff = findListDiffIndex(prevData || [], data || [], getKey);

    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }

    setPrevData(data);
  }, [data]);
  return [diffItem];
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

var isFF = (typeof navigator === "undefined" ? "undefined" : _typeof$1(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);

var useOriginScroll = (function (isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lockRef = useRef(false);
  var lockTimeoutRef = useRef(null);

  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  } // Pass to ref since global add is in closure


  var scrollPingRef = useRef({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll = // Pass origin wheel when on the top
    deltaY < 0 && scrollPingRef.current.top || // Pass origin wheel when on the bottom
    deltaY > 0 && scrollPingRef.current.bottom;

    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }

    return !lockRef.current && originScroll;
  };
});

function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = useRef(0);
  var nextFrameRef = useRef(null); // Firefox patch

  var wheelValueRef = useRef(null);
  var isMouseScrollRef = useRef(false); // Scroll status sync

  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);

  function onWheel(event) {
    if (!inVirtual) return;
    wrapperRaf$1.cancel(nextFrameRef.current);
    var deltaY = event.deltaY;
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY; // Do nothing when scroll at the edge, Skip check when is in scroll

    if (originScroll(deltaY)) return; // Proxy of scroll events

    if (!isFF) {
      event.preventDefault();
    }

    nextFrameRef.current = wrapperRaf$1(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  } // A patch for firefox


  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }

  return [onWheel, onFireFoxScroll];
}

var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = useRef(false);
  var touchYRef = useRef(0);
  var elementRef = useRef(null); // Smooth scroll

  var intervalRef = useRef(null);
  var cleanUpEvents;

  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;

      if (callback(offsetY)) {
        e.preventDefault();
      } // Smooth interval


      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function () {
        offsetY *= SMOOTH_PTG;

        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };

  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };

  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();

    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };

  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };

  React.useLayoutEffect(function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart);
    }

    return function () {
      listRef.current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}

var _excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll"];

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

function ownKeys$1(object, enumerableOnly) {
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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty$1(obj, key, value) {
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
      className = props.className,
      height = props.height,
      itemHeight = props.itemHeight,
      _props$fullHeight = props.fullHeight,
      fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
      style = props.style,
      data = props.data,
      children = props.children,
      itemKey = props.itemKey,
      virtual = props.virtual,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      onScroll = props.onScroll,
      restProps = _objectWithoutProperties(props, _excluded); // ================================= MISC =================================


  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && itemHeight * data.length > height;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      scrollTop = _useState2[0],
      setScrollTop = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      scrollMoving = _useState4[0],
      setScrollMoving = _useState4[1];

  var mergedClassName = classnames(prefixCls, className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = useRef();
  var fillerInnerRef = useRef();
  var scrollBarRef = useRef(); // Hack on scrollbar to enable flash call
  // =============================== Item Key ===============================

  var getKey = React.useCallback(function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }

    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);
  var sharedConfig = {
    getKey: getKey
  }; // ================================ Scroll ================================

  function syncScrollTop(newTop) {
    setScrollTop(function (origin) {
      var value;

      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }

      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  } // ================================ Legacy ================================
  // Put ref here since the range is generate by follow


  var rangeRef = useRef({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = useRef();

  var _useDiffItem = useDiffItem(mergedData, getKey),
      _useDiffItem2 = _slicedToArray(_useDiffItem, 1),
      diffItem = _useDiffItem2[0];

  diffItemRef.current = diffItem; // ================================ Height ================================

  var _useHeights = useHeights(getKey, null, null),
      _useHeights2 = _slicedToArray(_useHeights, 4),
      setInstanceRef = _useHeights2[0],
      collectHeight = _useHeights2[1],
      heights = _useHeights2[2],
      heightUpdatedMark = _useHeights2[3]; // ========================== Visible Calculation =========================


  var _React$useMemo = React.useMemo(function () {
    if (!useVirtual) {
      return {
        scrollHeight: undefined,
        start: 0,
        end: mergedData.length - 1,
        offset: undefined
      };
    } // Always use virtual scroll bar in avoid shaking
    // Always use virtual scroll bar in avoid shaking


    if (!inVirtual) {
      var _fillerInnerRef$curre;

      return {
        scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
        start: 0,
        end: mergedData.length - 1,
        offset: undefined
      };
    }

    var itemTop = 0;
    var startIndex;
    var startOffset;
    var endIndex;
    var dataLen = mergedData.length;

    for (var i = 0; i < dataLen; i += 1) {
      var item = mergedData[i];
      var key = getKey(item);
      var cacheHeight = heights.get(key);
      var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight); // Check item top in the range
      // Check item top in the range

      if (currentItemBottom >= scrollTop && startIndex === undefined) {
        startIndex = i;
        startOffset = itemTop;
      } // Check item bottom in the range. We will render additional one item for motion usage
      // Check item bottom in the range. We will render additional one item for motion usage


      if (currentItemBottom > scrollTop + height && endIndex === undefined) {
        endIndex = i;
      }

      itemTop = currentItemBottom;
    } // Fallback to normal if not match. This code should never reach

    /* istanbul ignore next */
    // Fallback to normal if not match. This code should never reach

    /* istanbul ignore next */


    if (startIndex === undefined) {
      startIndex = 0;
      startOffset = 0;
    }

    if (endIndex === undefined) {
      endIndex = mergedData.length - 1;
    } // Give cache to improve scroll experience
    // Give cache to improve scroll experience


    endIndex = Math.min(endIndex + 1, mergedData.length);
    return {
      scrollHeight: itemTop,
      start: startIndex,
      end: endIndex,
      offset: startOffset
    };
  }, [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]),
      scrollHeight = _React$useMemo.scrollHeight,
      start = _React$useMemo.start,
      end = _React$useMemo.end,
      offset = _React$useMemo.offset;

  rangeRef.current.start = start;
  rangeRef.current.end = end; // =============================== In Range ===============================

  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = useRef(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;

  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;

    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }

    newTop = Math.max(newTop, 0);
    return newTop;
  }

  var isScrollAtTop = scrollTop <= 0;
  var isScrollAtBottom = scrollTop >= maxScrollHeight;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom); // ================================ Scroll ================================

  function onScrollBar(newScrollTop) {
    var newTop = newScrollTop;
    syncScrollTop(newTop);
  } // When data size reduce. It may trigger native scroll event back to fit scroll position


  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;

    if (newScrollTop !== scrollTop) {
      syncScrollTop(newScrollTop);
    } // Trigger origin onScroll


    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
  } // Since this added in global,should use ref to keep update


  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
    syncScrollTop(function (top) {
      var newTop = top + offsetY;
      return newTop;
    });
  }),
      _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2),
      onRawWheel = _useFrameWheel2[0],
      onFireFoxScroll = _useFrameWheel2[1]; // Mobile touch move


  useMobileTouchMove(useVirtual, componentRef, function (deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }

    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY: deltaY
    });
    return true;
  });
  React.useLayoutEffect(function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }

    componentRef.current.addEventListener('wheel', onRawWheel);
    componentRef.current.addEventListener('DOMMouseScroll', onFireFoxScroll);
    componentRef.current.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    return function () {
      componentRef.current.removeEventListener('wheel', onRawWheel);
      componentRef.current.removeEventListener('DOMMouseScroll', onFireFoxScroll);
      componentRef.current.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    };
  }, [useVirtual]); // ================================= Ref ==================================

  var scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey, collectHeight, syncScrollTop, function () {
    var _scrollBarRef$current;

    (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0 ? void 0 : _scrollBarRef$current.delayHidden();
  });
  React.useImperativeHandle(ref, function () {
    return {
      scrollTo: scrollTo
    };
  }); // ================================ Render ================================

  var listChildren = useChildren(mergedData, start, end, setInstanceRef, children, sharedConfig);
  var componentStyle = null;

  if (height) {
    componentStyle = _objectSpread(_defineProperty$1({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);

    if (useVirtual) {
      componentStyle.overflowY = 'hidden';

      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    style: _objectSpread(_objectSpread({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, restProps), /*#__PURE__*/React.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll
  }, /*#__PURE__*/React.createElement(Filler, {
    prefixCls: prefixCls,
    height: scrollHeight,
    offset: offset,
    onInnerResize: collectHeight,
    ref: fillerInnerRef
  }, listChildren)), useVirtual && /*#__PURE__*/React.createElement(ScrollBar, {
    ref: scrollBarRef,
    prefixCls: prefixCls,
    scrollTop: scrollTop,
    height: height,
    scrollHeight: scrollHeight,
    count: mergedData.length,
    onScroll: onScrollBar,
    onStartMove: function onStartMove() {
      setScrollMoving(true);
    },
    onStopMove: function onStopMove() {
      setScrollMoving(false);
    }
  }));
}
var List = /*#__PURE__*/React.forwardRef(RawList);
List.displayName = 'List';

var TransBtn = function TransBtn(_ref) {
  var className = _ref.className,
      customizeIcon = _ref.customizeIcon,
      customizeIconProps = _ref.customizeIconProps,
      _onMouseDown = _ref.onMouseDown,
      onClick = _ref.onClick,
      children = _ref.children;
  var icon;

  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }

  return /*#__PURE__*/React.createElement("span", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();

      if (_onMouseDown) {
        _onMouseDown(event);
      }
    },
    style: {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    unselectable: "on",
    onClick: onClick,
    "aria-hidden": true
  }, icon !== undefined ? icon : /*#__PURE__*/React.createElement("span", {
    className: classnames(className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};

/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */

var OptionList = function OptionList(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      flattenOptions = _ref.flattenOptions,
      childrenAsData = _ref.childrenAsData,
      values = _ref.values,
      searchValue = _ref.searchValue,
      multiple = _ref.multiple,
      defaultActiveFirstOption = _ref.defaultActiveFirstOption,
      height = _ref.height,
      itemHeight = _ref.itemHeight,
      notFoundContent = _ref.notFoundContent,
      open = _ref.open,
      menuItemSelectedIcon = _ref.menuItemSelectedIcon,
      virtual = _ref.virtual,
      onSelect = _ref.onSelect,
      onToggleOpen = _ref.onToggleOpen,
      onActiveValue = _ref.onActiveValue,
      onScroll = _ref.onScroll,
      onMouseEnter = _ref.onMouseEnter;
  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = useMemo(function () {
    return flattenOptions;
  }, [open, flattenOptions], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  }); // =========================== List ===========================

  var listRef = React.useRef(null);

  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };

  var scrollIntoView = function scrollIntoView(index) {
    if (listRef.current) {
      listRef.current.scrollTo({
        index: index
      });
    }
  }; // ========================== Active ==========================


  var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = memoFlattenOptions.length;

    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current],
          group = _memoFlattenOptions$c.group,
          data = _memoFlattenOptions$c.data;

      if (!group && !data.disabled) {
        return current;
      }
    }

    return -1;
  };

  var _React$useState = React.useState(function () {
    return getEnabledActiveIndex(0);
  }),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveIndex = _React$useState2[1];

  var setActive = function setActive(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? 'keyboard' : 'mouse'
    }; // Trigger active event

    var flattenItem = memoFlattenOptions[index];

    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }

    onActiveValue(flattenItem.data.value, index, info);
  }; // Auto active first item when list length or searchValue changed


  React.useEffect(function () {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]); // Auto scroll to item position in single mode

  React.useEffect(function () {
    /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */
    var timeoutId = setTimeout(function () {
      if (!multiple && open && values.size === 1) {
        var value = Array.from(values)[0];
        var index = memoFlattenOptions.findIndex(function (_ref2) {
          var data = _ref2.data;
          return data.value === value;
        });
        setActive(index);
        scrollIntoView(index);
      }
    }); // Force trigger scrollbar visible when open

    if (open) {
      var _listRef$current;

      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
    }

    return function () {
      return clearTimeout(timeoutId);
    };
  }, [open]); // ========================== Values ==========================

  var onSelectValue = function onSelectValue(value) {
    if (value !== undefined) {
      onSelect(value, {
        selected: !values.has(value)
      });
    } // Single mode should always close by select


    if (!multiple) {
      onToggleOpen(false);
    }
  }; // ========================= Keyboard =========================


  React.useImperativeHandle(ref, function () {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which;

        switch (which) {
          // >>> Arrow keys
          case KeyCode.UP:
          case KeyCode.DOWN:
            {
              var offset = 0;

              if (which === KeyCode.UP) {
                offset = -1;
              } else if (which === KeyCode.DOWN) {
                offset = 1;
              }

              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }

              break;
            }
          // >>> Select

          case KeyCode.ENTER:
            {
              // value
              var item = memoFlattenOptions[activeIndex];

              if (item && !item.data.disabled) {
                onSelectValue(item.data.value);
              } else {
                onSelectValue(undefined);
              }

              if (open) {
                event.preventDefault();
              }

              break;
            }
          // >>> Close

          case KeyCode.ESC:
            {
              onToggleOpen(false);

              if (open) {
                event.stopPropagation();
              }
            }
        }
      },
      onKeyUp: function onKeyUp() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  }); // ========================== Render ==========================

  if (memoFlattenOptions.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }

  function renderItem(index) {
    var item = memoFlattenOptions[index];
    if (!item) return null;
    var itemData = item.data || {};
    var value = itemData.value,
        label = itemData.label,
        children = itemData.children;
    var attrs = pickAttrs(itemData, true);
    var mergedLabel = childrenAsData ? children : label;
    return item ? /*#__PURE__*/React.createElement("div", _extends$2({
      "aria-label": typeof mergedLabel === 'string' ? mergedLabel : null
    }, attrs, {
      key: index,
      role: "option",
      id: "".concat(id, "_list_").concat(index),
      "aria-selected": values.has(value)
    }), value) : null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    id: "".concat(id, "_list"),
    style: {
      height: 0,
      width: 0,
      overflow: 'hidden'
    }
  }, renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /*#__PURE__*/React.createElement(List, {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: height,
    itemHeight: itemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onScroll,
    virtual: virtual,
    onMouseEnter: onMouseEnter
  }, function (_ref3, itemIndex) {
    var _classNames;

    var group = _ref3.group,
        groupOption = _ref3.groupOption,
        data = _ref3.data;
    var label = data.label,
        key = data.key; // Group

    if (group) {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(itemPrefixCls, "".concat(itemPrefixCls, "-group"))
      }, label !== undefined ? label : key);
    }

    var disabled = data.disabled,
        value = data.value,
        title = data.title,
        children = data.children,
        style = data.style,
        className = data.className,
        otherProps = _objectWithoutProperties$1(data, ["disabled", "value", "title", "children", "style", "className"]); // Option


    var selected = values.has(value);
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = classnames(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, _defineProperty$4(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), _defineProperty$4(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), _defineProperty$4(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), _defineProperty$4(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
    var mergedLabel = childrenAsData ? children : label;
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;
    var content = mergedLabel || value; // https://github.com/ant-design/ant-design/issues/26717

    var optionTitle = typeof content === 'string' || typeof content === 'number' ? content.toString() : undefined;

    if (title !== undefined) {
      optionTitle = title;
    }

    return /*#__PURE__*/React.createElement("div", _extends$2({}, otherProps, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || disabled) {
          return;
        }

        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!disabled) {
          onSelectValue(value);
        }
      },
      style: style
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, content), /*#__PURE__*/React.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /*#__PURE__*/React.createElement(TransBtn, {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        isSelected: selected
      }
    }, selected ? '✓' : null));
  }));
};

var RefOptionList = /*#__PURE__*/React.forwardRef(OptionList);
RefOptionList.displayName = 'OptionList';

/** This is a placeholder, not real render in dom */
var Option = function Option() {
  return null;
};

Option.isSelectOption = true;

/** This is a placeholder, not real render in dom */
var OptGroup = function OptGroup() {
  return null;
};

OptGroup.isSelectOptGroup = true;

function convertNodeToOption(node) {
  var key = node.key,
      _node$props = node.props,
      children = _node$props.children,
      value = _node$props.value,
      restProps = _objectWithoutProperties$1(_node$props, ["children", "value"]);

  return _objectSpread2$1({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}

function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return toArray$2(nodes).map(function (node, index) {
    if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
      return null;
    }

    var isSelectOptGroup = node.type.isSelectOptGroup,
        key = node.key,
        _node$props2 = node.props,
        children = _node$props2.children,
        restProps = _objectWithoutProperties$1(_node$props2, ["children"]);

    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }

    return _objectSpread2$1(_objectSpread2$1({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data;
  });
}

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return value !== undefined ? [value] : [];
}
/**
 * Convert outer props value into internal value
 */

function toInnerValue(value, _ref) {
  var labelInValue = _ref.labelInValue,
      combobox = _ref.combobox;
  var valueMap = new Map();

  if (value === undefined || value === '' && combobox) {
    return [[], valueMap];
  }

  var values = Array.isArray(value) ? value : [value];
  var rawValues = values;

  if (labelInValue) {
    rawValues = values.filter(function (item) {
      return item !== null;
    }).map(function (itemValue) {
      var key = itemValue.key,
          val = itemValue.value;
      var finalVal = val !== undefined ? val : key;
      valueMap.set(finalVal, itemValue);
      return finalVal;
    });
  }

  return [rawValues, valueMap];
}
/**
 * Convert internal value into out event value
 */

function toOuterValues(valueList, _ref2) {
  var optionLabelProp = _ref2.optionLabelProp,
      labelInValue = _ref2.labelInValue,
      prevValueMap = _ref2.prevValueMap,
      options = _ref2.options,
      getLabeledValue = _ref2.getLabeledValue;
  var values = valueList;

  if (labelInValue) {
    values = values.map(function (val) {
      return getLabeledValue(val, {
        options: options,
        prevValueMap: prevValueMap,
        labelInValue: labelInValue,
        optionLabelProp: optionLabelProp
      });
    });
  }

  return values;
}
function removeLastEnabledValue(measureValues, values) {
  var newValues = _toConsumableArray(values);

  var removeIndex;

  for (removeIndex = measureValues.length - 1; removeIndex >= 0; removeIndex -= 1) {
    if (!measureValues[removeIndex].disabled) {
      break;
    }
  }

  var removedValue = null;

  if (removeIndex !== -1) {
    removedValue = newValues[removeIndex];
    newValues.splice(removeIndex, 1);
  }

  return {
    values: newValues,
    removedValue: removedValue
  };
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;
/** Is client side and not jsdom */

var isBrowserClient = isClient;
var uuid = 0;
/** Get unique id for accessibility usage */

function getUUID() {
  var retId; // Test never reach

  /* istanbul ignore if */

  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }

  return retId;
}

function getKey(data, index) {
  var key = data.key;
  var value;

  if ('value' in data) {
    value = data.value;
  }

  if (key !== null && key !== undefined) {
    return key;
  }

  if (value !== undefined) {
    return value;
  }

  return "rc-index-key-".concat(index);
}
/**
 * Flat options into flatten list.
 * We use `optionOnly` here is aim to avoid user use nested option group.
 * Here is simply set `key` to the index if not provided.
 */


function flattenOptions(options) {
  var flattenList = [];

  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      if (isGroupOption || !('options' in data)) {
        // Option
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data
        });
      } else {
        // Option Group
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data
        });
        dig(data.options, true);
      }
    });
  }

  dig(options, false);
  return flattenList;
}
/**
 * Inject `props` into `option` for legacy usage
 */

function injectPropsWithOption(option) {
  var newOption = _objectSpread2$1({}, option);

  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        warningOnce(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
        return newOption;
      }
    });
  }

  return newOption;
}

function findValueOption(values, options) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$prevValueOptions = _ref.prevValueOptions,
      prevValueOptions = _ref$prevValueOptions === void 0 ? [] : _ref$prevValueOptions;

  var optionMap = new Map();
  options.forEach(function (flattenItem) {
    if (!flattenItem.group) {
      var data = flattenItem.data; // Check if match

      optionMap.set(data.value, data);
    }
  });
  return values.map(function (val) {
    var option = optionMap.get(val); // Fallback to try to find prev options

    if (!option) {
      option = _objectSpread2$1({}, prevValueOptions.find(function (opt) {
        return opt._INTERNAL_OPTION_VALUE_ === val;
      }));
    }

    return injectPropsWithOption(option);
  });
}
var getLabeledValue = function getLabeledValue(value, _ref2) {
  var options = _ref2.options,
      prevValueMap = _ref2.prevValueMap,
      labelInValue = _ref2.labelInValue,
      optionLabelProp = _ref2.optionLabelProp;
  var item = findValueOption([value], options)[0];
  var result = {
    value: value
  };
  var prevValItem = labelInValue ? prevValueMap.get(value) : undefined;

  if (prevValItem && _typeof$4(prevValItem) === 'object' && 'label' in prevValItem) {
    result.label = prevValItem.label;

    if (item && typeof prevValItem.label === 'string' && typeof item[optionLabelProp] === 'string' && prevValItem.label.trim() !== item[optionLabelProp].trim()) {
      warningOnce(false, '`label` of `value` is not same as `label` in Select options.');
    }
  } else if (item && optionLabelProp in item) {
    result.label = item[optionLabelProp];
  } else {
    result.label = value;
    result.isCacheable = true;
  } // Used for motion control


  result.key = result.value;
  return result;
};

function toRawString(content) {
  return toArray(content).join('');
}
/** Filter single option if match the search text */


function getFilterFunction(optionFilterProp) {
  return function (searchValue, option) {
    var lowerSearchText = searchValue.toLowerCase(); // Group label search

    if ('options' in option) {
      return toRawString(option.label).toLowerCase().includes(lowerSearchText);
    } // Option value search


    var rawValue = option[optionFilterProp];
    var value = toRawString(rawValue).toLowerCase();
    return value.includes(lowerSearchText);
  };
}
/** Filter options and return a new options by the search text */


function filterOptions(searchValue, options, _ref3) {
  var optionFilterProp = _ref3.optionFilterProp,
      filterOption = _ref3.filterOption;
  var filteredOptions = [];
  var filterFunc;

  if (filterOption === false) {
    return _toConsumableArray(options);
  }

  if (typeof filterOption === 'function') {
    filterFunc = filterOption;
  } else {
    filterFunc = getFilterFunction(optionFilterProp);
  }

  options.forEach(function (item) {
    // Group should check child options
    if ('options' in item) {
      // Check group first
      var matchGroup = filterFunc(searchValue, item);

      if (matchGroup) {
        filteredOptions.push(item);
      } else {
        // Check option
        var subOptions = item.options.filter(function (subItem) {
          return filterFunc(searchValue, subItem);
        });

        if (subOptions.length) {
          filteredOptions.push(_objectSpread2$1(_objectSpread2$1({}, item), {}, {
            options: subOptions
          }));
        }
      }

      return;
    }

    if (filterFunc(searchValue, injectPropsWithOption(item))) {
      filteredOptions.push(item);
    }
  });
  return filteredOptions;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }

  var match = false;

  function separate(str, _ref4) {
    var _ref5 = _toArray(_ref4),
        token = _ref5[0],
        restTokens = _ref5.slice(1);

    if (!token) {
      return [str];
    }

    var list = str.split(token);
    match = match || list.length > 1;
    return list.reduce(function (prevList, unitStr) {
      return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate(unitStr, restTokens)));
    }, []).filter(function (unit) {
      return unit;
    });
  }

  var list = separate(text, tokens);
  return match ? list : null;
}
function isValueDisabled(value, options) {
  var option = findValueOption([value], options)[0];
  return option.disabled;
}
/**
 * `tags` mode should fill un-list item into the option list
 */

function fillOptionsWithMissingValue(options, value, optionLabelProp, labelInValue) {
  var values = toArray(value).slice().sort();

  var cloneOptions = _toConsumableArray(options); // Convert options value to set


  var optionValues = new Set();
  options.forEach(function (opt) {
    if (opt.options) {
      opt.options.forEach(function (subOpt) {
        optionValues.add(subOpt.value);
      });
    } else {
      optionValues.add(opt.value);
    }
  }); // Fill missing value

  values.forEach(function (item) {
    var val = labelInValue ? item.value : item;

    if (!optionValues.has(val)) {
      var _ref6;

      cloneOptions.push(labelInValue ? (_ref6 = {}, _defineProperty$4(_ref6, optionLabelProp, item.label), _defineProperty$4(_ref6, "value", val), _ref6) : {
        value: val
      });
    }
  });
  return cloneOptions;
}

var isMobile = (function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }

  var agent = navigator.userAgent || navigator.vendor || window.opera;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4))) {
    return true;
  }

  return false;
});

function useControlledState(defaultStateValue, option) {
  var _ref = option || {},
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      postState = _ref.postState;

  var _React$useState = React.useState(function () {
    if (value !== undefined) {
      return value;
    }

    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }

    return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  }),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      innerValue = _React$useState2[0],
      setInnerValue = _React$useState2[1];

  var mergedValue = value !== undefined ? value : innerValue;

  if (postState) {
    mergedValue = postState(mergedValue);
  }

  function triggerChange(newValue) {
    setInnerValue(newValue);

    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  } // Effect of reset value to `undefined`


  var firstRenderRef = React.useRef(true);
  React.useEffect(function () {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value);
    }
  }, [value]);
  return [mergedValue, triggerChange];
}

var UNDEFINED = undefined;

function InternalItem(props, ref) {
  var prefixCls = props.prefixCls,
      invalidate = props.invalidate,
      item = props.item,
      renderItem = props.renderItem,
      responsive = props.responsive,
      registerSize = props.registerSize,
      itemKey = props.itemKey,
      className = props.className,
      style = props.style,
      children = props.children,
      display = props.display,
      order = props.order,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      restProps = _objectWithoutProperties$1(props, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"]);

  var mergedHidden = responsive && !display; // ================================ Effect ================================

  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }

  React.useEffect(function () {
    return function () {
      internalRegisterSize(null);
    };
  }, []); // ================================ Render ================================

  var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
  var overflowStyle;

  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? 'hidden' : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? 'none' : UNDEFINED,
      position: mergedHidden ? 'absolute' : UNDEFINED
    };
  }

  var overflowProps = {};

  if (mergedHidden) {
    overflowProps['aria-hidden'] = true;
  }

  var itemNode = /*#__PURE__*/React.createElement(Component, _extends$2({
    className: classnames(!invalidate && prefixCls, className),
    style: _objectSpread2$1(_objectSpread2$1({}, overflowStyle), style)
  }, overflowProps, restProps, {
    ref: ref
  }), childNode);

  if (responsive) {
    itemNode = /*#__PURE__*/React.createElement(ReactResizeObserver, {
      onResize: function onResize(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      }
    }, itemNode);
  }

  return itemNode;
}

var Item = /*#__PURE__*/React.forwardRef(InternalItem);
Item.displayName = 'Item';

/**
 * State generate. Return a `setState` but it will flush all state with one render to save perf.
 * This is not a realization of `unstable_batchedUpdates`.
 */

function useBatchFrameState() {
  var _useState = useState({}),
      _useState2 = _slicedToArray$3(_useState, 2),
      forceUpdate = _useState2[1];

  var statesRef = useRef([]);
  var destroyRef = useRef(false);
  var walkingIndex = 0;
  var beforeFrameId = 0;
  useEffect(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);

  function createState(defaultValue) {
    var myIndex = walkingIndex;
    walkingIndex += 1; // Fill value if not exist yet

    if (statesRef.current.length < myIndex + 1) {
      statesRef.current[myIndex] = defaultValue;
    } // Return filled as `setState`


    var value = statesRef.current[myIndex];

    function setValue(val) {
      statesRef.current[myIndex] = typeof val === 'function' ? val(statesRef.current[myIndex]) : val;
      wrapperRaf$1.cancel(beforeFrameId); // Flush with batch

      beforeFrameId = wrapperRaf$1(function () {
        if (!destroyRef.current) {
          forceUpdate({});
        }
      });
    }

    return [value, setValue];
  }

  return createState;
}

var InternalRawItem = function InternalRawItem(props, ref) {
  var context = React.useContext(OverflowContext); // Render directly when context not provided

  if (!context) {
    var _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        _restProps = _objectWithoutProperties$1(props, ["component"]);

    return /*#__PURE__*/React.createElement(Component, _extends$2({}, _restProps, {
      ref: ref
    }));
  }

  var contextClassName = context.className,
      restContext = _objectWithoutProperties$1(context, ["className"]);

  var className = props.className,
      restProps = _objectWithoutProperties$1(props, ["className"]); // Do not pass context to sub item to avoid multiple measure


  return /*#__PURE__*/React.createElement(OverflowContext.Provider, {
    value: null
  }, /*#__PURE__*/React.createElement(Item, _extends$2({
    ref: ref,
    className: classnames(contextClassName, className)
  }, restContext, restProps)));
};

var RawItem = /*#__PURE__*/React.forwardRef(InternalRawItem);
RawItem.displayName = 'RawItem';

var OverflowContext = /*#__PURE__*/React.createContext(null);
var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';

function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}

function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      renderItem = props.renderItem,
      renderRawItem = props.renderRawItem,
      itemKey = props.itemKey,
      _props$itemWidth = props.itemWidth,
      itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
      ssr = props.ssr,
      style = props.style,
      className = props.className,
      maxCount = props.maxCount,
      renderRest = props.renderRest,
      renderRawRest = props.renderRawRest,
      suffix = props.suffix,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      itemComponent = props.itemComponent,
      onVisibleChange = props.onVisibleChange,
      restProps = _objectWithoutProperties$1(props, ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"]);

  var createUseState = useBatchFrameState();
  var fullySSR = ssr === 'full';

  var _createUseState = createUseState(null),
      _createUseState2 = _slicedToArray$3(_createUseState, 2),
      containerWidth = _createUseState2[0],
      setContainerWidth = _createUseState2[1];

  var mergedContainerWidth = containerWidth || 0;

  var _createUseState3 = createUseState(new Map()),
      _createUseState4 = _slicedToArray$3(_createUseState3, 2),
      itemWidths = _createUseState4[0],
      setItemWidths = _createUseState4[1];

  var _createUseState5 = createUseState(0),
      _createUseState6 = _slicedToArray$3(_createUseState5, 2),
      prevRestWidth = _createUseState6[0],
      setPrevRestWidth = _createUseState6[1];

  var _createUseState7 = createUseState(0),
      _createUseState8 = _slicedToArray$3(_createUseState7, 2),
      restWidth = _createUseState8[0],
      setRestWidth = _createUseState8[1];

  var _createUseState9 = createUseState(0),
      _createUseState10 = _slicedToArray$3(_createUseState9, 2),
      suffixWidth = _createUseState10[0],
      setSuffixWidth = _createUseState10[1];

  var _useState = useState(null),
      _useState2 = _slicedToArray$3(_useState, 2),
      suffixFixedStart = _useState2[0],
      setSuffixFixedStart = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray$3(_useState3, 2),
      displayCount = _useState4[0],
      setDisplayCount = _useState4[1];

  var mergedDisplayCount = React.useMemo(function () {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }

    return displayCount || 0;
  }, [displayCount, containerWidth]);

  var _useState5 = useState(false),
      _useState6 = _slicedToArray$3(_useState5, 2),
      restReady = _useState6[0],
      setRestReady = _useState6[1];

  var itemPrefixCls = "".concat(prefixCls, "-item"); // Always use the max width to avoid blink

  var mergedRestWidth = Math.max(prevRestWidth, restWidth); // ================================= Data =================================

  var isResponsive = data.length && maxCount === RESPONSIVE;
  var invalidate = maxCount === INVALIDATE;
  /**
   * When is `responsive`, we will always render rest node to get the real width of it for calculation
   */

  var showRest = isResponsive || typeof maxCount === 'number' && data.length > maxCount;
  var mergedData = useMemo$1(function () {
    var items = data;

    if (isResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === 'number') {
      items = data.slice(0, maxCount);
    }

    return items;
  }, [data, itemWidth, containerWidth, maxCount, isResponsive]);
  var omittedItems = useMemo$1(function () {
    if (isResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }

    return data.slice(mergedData.length);
  }, [data, mergedData, isResponsive, mergedDisplayCount]); // ================================= Item =================================

  var getKey = useCallback(function (item, index) {
    var _ref;

    if (typeof itemKey === 'function') {
      return itemKey(item);
    }

    return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
  }, [itemKey]);
  var mergedRenderItem = useCallback(renderItem || function (item) {
    return item;
  }, [renderItem]);

  function updateDisplayCount(count, notReady) {
    setDisplayCount(count);

    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
    }
  } // ================================= Size =================================


  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }

  function registerSize(key, width) {
    setItemWidths(function (origin) {
      var clone = new Map(origin);

      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }

      return clone;
    });
  }

  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }

  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  } // ================================ Effect ================================


  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }

  React.useLayoutEffect(function () {
    if (mergedContainerWidth && mergedRestWidth && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1; // When data count change to 0, reset this since not loop will reach

      if (!len) {
        updateDisplayCount(0);
        setSuffixFixedStart(null);
        return;
      }

      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i); // Break since data not ready

        if (currentItemWidth === undefined) {
          updateDisplayCount(i - 1, true);
          break;
        } // Find best match


        totalWidth += currentItemWidth;

        if ( // Only one means `totalWidth` is the final width
        lastIndex === 0 && totalWidth <= mergedContainerWidth || // Last two width will be the final width
        i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
          // Additional check if match the end
          updateDisplayCount(lastIndex);
          setSuffixFixedStart(null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          // Can not hold all the content to show rest
          updateDisplayCount(i - 1);
          setSuffixFixedStart(totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }

      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]); // ================================ Render ================================

  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};

  if (suffixFixedStart !== null && isResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }

  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: isResponsive,
    component: itemComponent,
    invalidate: invalidate
  }; // >>>>> Choice render fun by `renderRawItem`

  var internalRenderItemNode = renderRawItem ? function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/React.createElement(OverflowContext.Provider, {
      key: key,
      value: _objectSpread2$1(_objectSpread2$1({}, itemSharedProps), {}, {
        order: index,
        item: item,
        itemKey: key,
        registerSize: registerSize,
        display: index <= mergedDisplayCount
      })
    }, renderRawItem(item, index));
  } : function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/React.createElement(Item, _extends$2({}, itemSharedProps, {
      order: index,
      key: key,
      item: item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize: registerSize,
      display: index <= mergedDisplayCount
    }));
  }; // >>>>> Rest node

  var restNode;
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  };

  if (!renderRawRest) {
    var mergedRenderRest = renderRest || defaultRenderRest;
    restNode = /*#__PURE__*/React.createElement(Item, _extends$2({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
  } else if (renderRawRest) {
    restNode = /*#__PURE__*/React.createElement(OverflowContext.Provider, {
      value: _objectSpread2$1(_objectSpread2$1({}, itemSharedProps), restContextProps)
    }, renderRawRest(omittedItems));
  }

  var overflowNode = /*#__PURE__*/React.createElement(Component, _extends$2({
    className: classnames(!invalidate && prefixCls, className),
    style: style,
    ref: ref
  }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/React.createElement(Item, _extends$2({}, itemSharedProps, {
    order: mergedDisplayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));

  if (isResponsive) {
    overflowNode = /*#__PURE__*/React.createElement(ReactResizeObserver, {
      onResize: onOverflowResize
    }, overflowNode);
  }

  return overflowNode;
}

var ForwardOverflow = /*#__PURE__*/React.forwardRef(Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = RawItem;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE; // Convert to generic type

var Input$2 = function Input(_ref, ref) {
  var _inputNode2, _inputNode2$props;

  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      inputElement = _ref.inputElement,
      disabled = _ref.disabled,
      tabIndex = _ref.tabIndex,
      autoFocus = _ref.autoFocus,
      autoComplete = _ref.autoComplete,
      editable = _ref.editable,
      accessibilityIndex = _ref.accessibilityIndex,
      value = _ref.value,
      maxLength = _ref.maxLength,
      _onKeyDown = _ref.onKeyDown,
      _onMouseDown = _ref.onMouseDown,
      _onChange = _ref.onChange,
      onPaste = _ref.onPaste,
      _onCompositionStart = _ref.onCompositionStart,
      _onCompositionEnd = _ref.onCompositionEnd,
      open = _ref.open,
      attrs = _ref.attrs;
  var inputNode = inputElement || /*#__PURE__*/React.createElement("input", null);
  var _inputNode = inputNode,
      originRef = _inputNode.ref,
      _inputNode$props = _inputNode.props,
      onOriginKeyDown = _inputNode$props.onKeyDown,
      onOriginChange = _inputNode$props.onChange,
      onOriginMouseDown = _inputNode$props.onMouseDown,
      onOriginCompositionStart = _inputNode$props.onCompositionStart,
      onOriginCompositionEnd = _inputNode$props.onCompositionEnd,
      style = _inputNode$props.style;
  inputNode = /*#__PURE__*/React.cloneElement(inputNode, _objectSpread2$1(_objectSpread2$1({
    id: id,
    ref: composeRef(ref, originRef),
    disabled: disabled,
    tabIndex: tabIndex,
    autoComplete: autoComplete || 'off',
    type: 'search',
    autoFocus: autoFocus,
    className: classnames("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 ? void 0 : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0 ? void 0 : _inputNode2$props.className),
    style: _objectSpread2$1(_objectSpread2$1({}, style), {}, {
      opacity: editable ? null : 0
    }),
    role: 'combobox',
    'aria-expanded': open,
    'aria-haspopup': 'listbox',
    'aria-owns': "".concat(id, "_list"),
    'aria-autocomplete': 'list',
    'aria-controls': "".concat(id, "_list"),
    'aria-activedescendant': "".concat(id, "_list_").concat(accessibilityIndex)
  }, attrs), {}, {
    value: editable ? value : '',
    maxLength: maxLength,
    readOnly: !editable,
    unselectable: !editable ? 'on' : null,
    onKeyDown: function onKeyDown(event) {
      _onKeyDown(event);

      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);

      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);

      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);

      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);

      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste: onPaste
  }));
  return inputNode;
};

var RefInput = /*#__PURE__*/React.forwardRef(Input$2);
RefInput.displayName = 'Input';

/* eslint-disable react-hooks/rules-of-hooks */
/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */

function useLayoutEffect(effect, deps) {
  // Never happen in test env
  if (isBrowserClient) {
    /* istanbul ignore next */
    React.useLayoutEffect(effect, deps);
  } else {
    React.useEffect(effect, deps);
  }
}
/* eslint-enable */

var onPreventMouseDown = function onPreventMouseDown(event) {
  event.preventDefault();
  event.stopPropagation();
};

var SelectSelector = function SelectSelector(props) {
  var id = props.id,
      prefixCls = props.prefixCls,
      values = props.values,
      open = props.open,
      searchValue = props.searchValue,
      inputRef = props.inputRef,
      placeholder = props.placeholder,
      disabled = props.disabled,
      mode = props.mode,
      showSearch = props.showSearch,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      accessibilityIndex = props.accessibilityIndex,
      tabIndex = props.tabIndex,
      removeIcon = props.removeIcon,
      maxTagCount = props.maxTagCount,
      maxTagTextLength = props.maxTagTextLength,
      _props$maxTagPlacehol = props.maxTagPlaceholder,
      maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
    return "+ ".concat(omittedValues.length, " ...");
  } : _props$maxTagPlacehol,
      tagRender = props.tagRender,
      onToggleOpen = props.onToggleOpen,
      onSelect = props.onSelect,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = React.useRef(null);

  var _useState = useState(0),
      _useState2 = _slicedToArray$3(_useState, 2),
      inputWidth = _useState2[0],
      setInputWidth = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray$3(_useState3, 2),
      focused = _useState4[0],
      setFocused = _useState4[1];

  var selectionPrefixCls = "".concat(prefixCls, "-selection"); // ===================== Search ======================

  var inputValue = open || mode === 'tags' ? searchValue : '';
  var inputEditable = mode === 'tags' || showSearch && (open || focused); // We measure width and set to the input immediately

  useLayoutEffect(function () {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]); // ===================== Render ======================
  // >>> Render Selector Node. Includes Item & Rest

  function defaultRenderSelector(content, itemDisabled, closable, onClose) {
    return /*#__PURE__*/React.createElement("span", {
      className: classnames("".concat(selectionPrefixCls, "-item"), _defineProperty$4({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled))
    }, /*#__PURE__*/React.createElement("span", {
      className: "".concat(selectionPrefixCls, "-item-content")
    }, content), closable && /*#__PURE__*/React.createElement(TransBtn, {
      className: "".concat(selectionPrefixCls, "-item-remove"),
      onMouseDown: onPreventMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "\xD7"));
  }

  function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
    var onMouseDown = function onMouseDown(e) {
      onPreventMouseDown(e);
      onToggleOpen(!open);
    };

    return /*#__PURE__*/React.createElement("span", {
      onMouseDown: onMouseDown
    }, tagRender({
      label: content,
      value: value,
      disabled: itemDisabled,
      closable: closable,
      onClose: onClose
    }));
  }

  function renderItem(_ref) {
    var itemDisabled = _ref.disabled,
        label = _ref.label,
        value = _ref.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;

    if (typeof maxTagTextLength === 'number') {
      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);

        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }
    }

    var onClose = function onClose(event) {
      if (event) event.stopPropagation();
      onSelect(value, {
        selected: false
      });
    };

    return typeof tagRender === 'function' ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(displayLabel, itemDisabled, closable, onClose);
  }

  function renderRest(omittedValues) {
    var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return defaultRenderSelector(content, false);
  } // >>> Input Node


  var inputNode = /*#__PURE__*/React.createElement("div", {
    className: "".concat(selectionPrefixCls, "-search"),
    style: {
      width: inputWidth
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    }
  }, /*#__PURE__*/React.createElement(RefInput, {
    ref: inputRef,
    open: open,
    prefixCls: prefixCls,
    id: id,
    inputElement: null,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    accessibilityIndex: accessibilityIndex,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: pickAttrs(props, true)
  }), /*#__PURE__*/React.createElement("span", {
    ref: measureRef,
    className: "".concat(selectionPrefixCls, "-search-mirror"),
    "aria-hidden": true
  }, inputValue, "\xA0")); // >>> Selections

  var selectionNode = /*#__PURE__*/React.createElement(ForwardOverflow, {
    prefixCls: "".concat(selectionPrefixCls, "-overflow"),
    data: values,
    renderItem: renderItem,
    renderRest: renderRest,
    suffix: inputNode,
    itemKey: "key",
    maxCount: maxTagCount
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, selectionNode, !values.length && !inputValue && /*#__PURE__*/React.createElement("span", {
    className: "".concat(selectionPrefixCls, "-placeholder")
  }, placeholder));
};

var SingleSelector = function SingleSelector(props) {
  var inputElement = props.inputElement,
      prefixCls = props.prefixCls,
      id = props.id,
      inputRef = props.inputRef,
      disabled = props.disabled,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      accessibilityIndex = props.accessibilityIndex,
      mode = props.mode,
      open = props.open,
      values = props.values,
      placeholder = props.placeholder,
      tabIndex = props.tabIndex,
      showSearch = props.showSearch,
      searchValue = props.searchValue,
      activeValue = props.activeValue,
      maxLength = props.maxLength,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      inputChanged = _React$useState2[0],
      setInputChanged = _React$useState2[1];

  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || '';

  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }

  React.useEffect(function () {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]); // Not show text when closed expect combobox mode

  var hasTextInput = mode !== 'combobox' && !open ? false : !!inputValue;
  var title = item && (typeof item.label === 'string' || typeof item.label === 'number') ? item.label.toString() : undefined;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, /*#__PURE__*/React.createElement(RefInput, {
    ref: inputRef,
    prefixCls: prefixCls,
    id: id,
    open: open,
    inputElement: inputElement,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    accessibilityIndex: accessibilityIndex,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e) {
      setInputChanged(true);
      onInputChange(e);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: pickAttrs(props, true),
    maxLength: combobox ? maxLength : undefined
  })), !combobox && item && !hasTextInput && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: title
  }, item.label), !item && !hasTextInput && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-selection-placeholder")
  }, placeholder));
};

/**
 * Locker return cached mark.
 * If set to `true`, will return `true` in a short time even if set `false`.
 * If set to `false` and then set to `true`, will change to `true`.
 * And after time duration, it will back to `null` automatically.
 */

function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  var lockRef = React.useRef(null);
  var timeoutRef = React.useRef(null); // Clean up

  React.useEffect(function () {
    return function () {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function () {
      lockRef.current = null;
    }, duration);
  }

  return [function () {
    return lockRef.current;
  }, doLock];
}

var Selector = function Selector(props, ref) {
  var inputRef = useRef(null);
  var compositionStatusRef = useRef(false);
  var prefixCls = props.prefixCls,
      multiple = props.multiple,
      open = props.open,
      mode = props.mode,
      showSearch = props.showSearch,
      tokenWithEnter = props.tokenWithEnter,
      onSearch = props.onSearch,
      onSearchSubmit = props.onSearchSubmit,
      onToggleOpen = props.onToggleOpen,
      onInputKeyDown = props.onInputKeyDown,
      domRef = props.domRef; // ======================= Ref =======================

  React.useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  }); // ====================== Input ======================

  var _useLock = useLock(0),
      _useLock2 = _slicedToArray$3(_useLock, 2),
      getInputMouseDown = _useLock2[0],
      setInputMouseDown = _useLock2[1];

  var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
    var which = event.which;

    if (which === KeyCode.UP || which === KeyCode.DOWN) {
      event.preventDefault();
    }

    if (onInputKeyDown) {
      onInputKeyDown(event);
    }

    if (which === KeyCode.ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
      // When menu isn't open, OptionList won't trigger a value change
      // So when enter is pressed, the tag's input value should be emitted here to let selector know
      onSearchSubmit(event.target.value);
    }

    if (![KeyCode.SHIFT, KeyCode.TAB, KeyCode.BACKSPACE, KeyCode.ESC].includes(which)) {
      onToggleOpen(true);
    }
  };
  /**
   * We can not use `findDOMNode` sine it will get warning,
   * have to use timer to check if is input element.
   */


  var onInternalInputMouseDown = function onInternalInputMouseDown() {
    setInputMouseDown(true);
  }; // When paste come, ignore next onChange


  var pastedTextRef = useRef(null);

  var triggerOnSearch = function triggerOnSearch(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };

  var onInputCompositionStart = function onInputCompositionStart() {
    compositionStatusRef.current = true;
  };

  var onInputCompositionEnd = function onInputCompositionEnd(e) {
    compositionStatusRef.current = false; // Trigger search again to support `tokenSeparators` with typewriting

    if (mode !== 'combobox') {
      triggerOnSearch(e.target.value);
    }
  };

  var onInputChange = function onInputChange(event) {
    var value = event.target.value; // Pasted text should replace back to origin content

    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      // CRLF will be treated as a single space for input element
      var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, '').replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
      value = value.replace(replacedText, pastedTextRef.current);
    }

    pastedTextRef.current = null;
    triggerOnSearch(value);
  };

  var onInputPaste = function onInputPaste(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData.getData('text');
    pastedTextRef.current = value;
  };

  var onClick = function onClick(_ref) {
    var target = _ref.target;

    if (target !== inputRef.current) {
      // Should focus input if click the selector
      var isIE = document.body.style.msTouchAction !== undefined;

      if (isIE) {
        setTimeout(function () {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };

  var onMouseDown = function onMouseDown(event) {
    var inputMouseDown = getInputMouseDown();

    if (event.target !== inputRef.current && !inputMouseDown) {
      event.preventDefault();
    }

    if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
      if (open) {
        onSearch('', true, false);
      }

      onToggleOpen();
    }
  }; // ================= Inner Selector ==================


  var sharedProps = {
    inputRef: inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange: onInputChange,
    onInputPaste: onInputPaste,
    onInputCompositionStart: onInputCompositionStart,
    onInputCompositionEnd: onInputCompositionEnd
  };
  var selectNode = multiple ? /*#__PURE__*/React.createElement(SelectSelector, _extends$2({}, props, sharedProps)) : /*#__PURE__*/React.createElement(SingleSelector, _extends$2({}, props, sharedProps));
  return /*#__PURE__*/React.createElement("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick: onClick,
    onMouseDown: onMouseDown
  }, selectNode);
};

var ForwardSelector = /*#__PURE__*/React.forwardRef(Selector);
ForwardSelector.displayName = 'Selector';

function contains(root, n) {
  if (!root) {
    return false;
  }

  return root.contains(n);
}

var Portal = /*#__PURE__*/forwardRef(function (props, ref) {
  var didUpdate = props.didUpdate,
      getContainer = props.getContainer,
      children = props.children;
  var containerRef = useRef(); // Ref return nothing, only for wrapper check exist

  useImperativeHandle(ref, function () {
    return {};
  }); // Create container in client side with sync to avoid useEffect not get ref

  var initRef = useRef(false);

  if (!initRef.current && canUseDom()) {
    containerRef.current = getContainer();
    initRef.current = true;
  } // [Legacy] Used by `rc-trigger`


  useEffect(function () {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  useEffect(function () {
    return function () {
      var _containerRef$current, _containerRef$current2; // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use `Portal` directly, we have to keep the logic here.


      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? /*#__PURE__*/ReactDOM.createPortal(children, containerRef.current) : null;
});

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _objectSpread2$1(_objectSpread2$1({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);

  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];

    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }

  return '';
}

function getMotion$1(_ref) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      animation = _ref.animation,
      transitionName = _ref.transitionName;

  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName
    };
  }

  return null;
}

function Mask(props) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      mask = props.mask,
      maskMotion = props.maskMotion,
      maskAnimation = props.maskAnimation,
      maskTransitionName = props.maskTransitionName;

  if (!mask) {
    return null;
  }

  var motion = {};

  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = _objectSpread2$1({
      motionAppear: true
    }, getMotion$1({
      motion: maskMotion,
      prefixCls: prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    }));
  }

  return /*#__PURE__*/React.createElement(CSSMotion, _extends$2({}, motion, {
    visible: visible,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        zIndex: zIndex
      },
      className: classnames("".concat(prefixCls, "-mask"), className)
    });
  });
}

var isVisible = (function (element) {
  if (!element) {
    return false;
  }

  if (element.offsetParent) {
    return true;
  }

  if (element.getBBox) {
    var box = element.getBBox();

    if (box.width || box.height) {
      return true;
    }
  }

  if (element.getBoundingClientRect) {
    var _box = element.getBoundingClientRect();

    if (_box.width || _box.height) {
      return true;
    }
  }

  return false;
});

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

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName$1() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}

function setTransitionProperty(node, value) {
  var name = getTransitionName$1();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName$1()];
}

function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }

  return {
    x: 0,
    y: 0
  };
}

var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;

function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset$1(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT$1 = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT$1];
    var rsLeft = elem[RUNTIME_STYLE][LEFT$1]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT$1] = elem[CURRENT_STYLE][LEFT$1]; // Put in the new values to get a computed value out

    style[LEFT$1] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT$1] = left;
    elem[RUNTIME_STYLE][LEFT$1] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标


function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = getOffset$1(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  } // force relayout


  forceRelayout(elem);
  var old = getOffset$1(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset$1(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset$1(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };

  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset$1(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);
/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法


  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }

  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;

function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (parent = getParent$1(element); // 修复元素位于 document.documentElement 下导致崩溃问题
  parent && parent !== body && parent !== doc; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}
/**
 * 获得元素的显示部分的区域
 */


function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601


  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area


  if (element.style) {
    element.style.position = originalPosition;
  }

  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.


  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.


  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.


  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */


function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}
/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */


function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */


function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        }); // 偏移量也反下


        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置


    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points; // 重置对应部分的翻转逻辑

      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
      }

      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
      }

      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整


    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  } // need judge to in case set fixed with in css on height auto element


  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>


  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/


function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;
/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
    points: points
  }), pointInView);
}

function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && contains(container, activeElement) && typeof activeElement.focus === 'function') {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;

  function onResize(_ref) {
    var _ref2 = _slicedToArray$3(_ref, 1),
        target = _ref2[0].target;

    if (!document.documentElement.contains(target)) return;

    var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width,
        height = _target$getBoundingCl.height;

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      // https://webkit.org/blog/9997/resizeobserver-in-webkit/
      Promise.resolve().then(function () {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }

    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }

  var resizeObserver = new index(onResize);

  if (element) {
    resizeObserver.observe(element);
  }

  return function () {
    resizeObserver.disconnect();
  };
}

var useBuffer = (function (callback, buffer) {
  var calledRef = React__default.useRef(false);
  var timeoutRef = React__default.useRef(null);

  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }

  function trigger(force) {
    if (!calledRef.current || force === true) {
      if (callback() === false) {
        // Not delay since callback cancelled self
        return;
      }

      calledRef.current = true;
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }

  return [trigger, function () {
    calledRef.current = false;
    cancelTrigger();
  }];
});

function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if (_typeof$4(point) !== 'object' || !point) return null;
  return point;
}

var Align = function Align(_ref, ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      target = _ref.target,
      align = _ref.align,
      onAlign = _ref.onAlign,
      monitorWindowResize = _ref.monitorWindowResize,
      _ref$monitorBufferTim = _ref.monitorBufferTime,
      monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = React__default.useRef({});
  var nodeRef = React__default.useRef();
  var childNode = React__default.Children.only(children); // ===================== Align ======================
  // We save the props here to avoid closure makes props ood

  var forceAlignPropsRef = React__default.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.onAlign = onAlign;

  var _useBuffer = useBuffer(function () {
    var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target,
        latestOnAlign = _forceAlignPropsRef$c.onAlign;

    if (!latestDisabled && latestTarget) {
      var source = nodeRef.current;
      var result;
      var element = getElement(latestTarget);
      var point = getPoint(latestTarget);
      cacheRef.current.element = element;
      cacheRef.current.point = point; // IE lose focus after element realign
      // We should record activeElement and restore later

      var _document = document,
          activeElement = _document.activeElement; // We only align when element is visible

      if (element && isVisible(element)) {
        result = alignElement(source, element, align);
      } else if (point) {
        result = alignPoint(source, point, align);
      }

      restoreFocus(activeElement, source);

      if (latestOnAlign && result) {
        latestOnAlign(source, result);
      }

      return true;
    }

    return false;
  }, monitorBufferTime),
      _useBuffer2 = _slicedToArray$3(_useBuffer, 2),
      _forceAlign = _useBuffer2[0],
      cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
  // Listen for target updated


  var resizeMonitor = React__default.useRef({
    cancel: function cancel() {}
  }); // Listen for source updated

  var sourceResizeMonitor = React__default.useRef({
    cancel: function cancel() {}
  });
  React__default.useEffect(function () {
    var element = getElement(target);
    var point = getPoint(target);

    if (nodeRef.current !== sourceResizeMonitor.current.element) {
      sourceResizeMonitor.current.cancel();
      sourceResizeMonitor.current.element = nodeRef.current;
      sourceResizeMonitor.current.cancel = monitorResize(nodeRef.current, _forceAlign);
    }

    if (cacheRef.current.element !== element || !isSamePoint(cacheRef.current.point, point)) {
      _forceAlign(); // Add resize observer


      if (resizeMonitor.current.element !== element) {
        resizeMonitor.current.cancel();
        resizeMonitor.current.element = element;
        resizeMonitor.current.cancel = monitorResize(element, _forceAlign);
      }
    }
  }); // Listen for disabled change

  React__default.useEffect(function () {
    if (!disabled) {
      _forceAlign();
    } else {
      cancelForceAlign();
    }
  }, [disabled]); // Listen for window resize

  var winResizeRef = React__default.useRef(null);
  React__default.useEffect(function () {
    if (monitorWindowResize) {
      if (!winResizeRef.current) {
        winResizeRef.current = addEventListenerWrap(window, 'resize', _forceAlign);
      }
    } else if (winResizeRef.current) {
      winResizeRef.current.remove();
      winResizeRef.current = null;
    }
  }, [monitorWindowResize]); // Clear all if unmount

  React__default.useEffect(function () {
    return function () {
      resizeMonitor.current.cancel();
      sourceResizeMonitor.current.cancel();
      if (winResizeRef.current) winResizeRef.current.remove();
      cancelForceAlign();
    };
  }, []); // ====================== Ref =======================

  React__default.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  }); // ===================== Render =====================

  if (React__default.isValidElement(childNode)) {
    childNode = React__default.cloneElement(childNode, {
      ref: composeRef(childNode.ref, nodeRef)
    });
  }

  return childNode;
};

var RefAlign = React__default.forwardRef(Align);
RefAlign.displayName = 'Align';

var StatusQueue = ['measure', 'align', null, 'motion'];
var useVisibleStatus = (function (visible, doMeasure) {
  var _useState = useState(null),
      _useState2 = _slicedToArray$3(_useState, 2),
      status = _useState2[0],
      setInternalStatus = _useState2[1];

  var rafRef = useRef();
  var destroyRef = useRef(false);

  function setStatus(nextStatus) {
    if (!destroyRef.current) {
      setInternalStatus(nextStatus);
    }
  }

  function cancelRaf() {
    wrapperRaf$1.cancel(rafRef.current);
  }

  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = wrapperRaf$1(function () {
      // Only align should be manually trigger
      setStatus(function (prev) {
        switch (status) {
          case 'align':
            return 'motion';

          case 'motion':
            return 'stable';
        }

        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  } // Init status


  useEffect(function () {
    setStatus('measure');
  }, [visible]); // Go next status

  useEffect(function () {
    switch (status) {
      case 'measure':
        doMeasure();
        break;
    }

    if (status) {
      rafRef.current = wrapperRaf$1( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
        var index, nextStatus;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = StatusQueue.indexOf(status);
                nextStatus = StatusQueue[index + 1];

                if (nextStatus && index !== -1) {
                  setStatus(nextStatus);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, [status]);
  useEffect(function () {
    return function () {
      destroyRef.current = true;
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
});

var useStretchStyle = (function (stretch) {
  var _React$useState = React.useState({
    width: 0,
    height: 0
  }),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      targetSize = _React$useState2[0],
      setTargetSize = _React$useState2[1];

  function measureStretch(element) {
    setTargetSize({
      width: element.offsetWidth,
      height: element.offsetHeight
    });
  } // Merge stretch style


  var style = React.useMemo(function () {
    var sizeStyle = {};

    if (stretch) {
      var width = targetSize.width,
          height = targetSize.height; // Stretch with target

      if (stretch.indexOf('height') !== -1 && height) {
        sizeStyle.height = height;
      } else if (stretch.indexOf('minHeight') !== -1 && height) {
        sizeStyle.minHeight = height;
      }

      if (stretch.indexOf('width') !== -1 && width) {
        sizeStyle.width = width;
      } else if (stretch.indexOf('minWidth') !== -1 && width) {
        sizeStyle.minWidth = width;
      }
    }

    return sizeStyle;
  }, [stretch, targetSize]);
  return [style, measureStretch];
});

var PopupInner = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var visible = props.visible,
      prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      children = props.children,
      zIndex = props.zIndex,
      stretch = props.stretch,
      destroyPopupOnHide = props.destroyPopupOnHide,
      forceRender = props.forceRender,
      align = props.align,
      point = props.point,
      getRootDomNode = props.getRootDomNode,
      getClassNameFromAlign = props.getClassNameFromAlign,
      onAlign = props.onAlign,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onMouseDown = props.onMouseDown,
      onTouchStart = props.onTouchStart;
  var alignRef = useRef();
  var elementRef = useRef();

  var _useState = useState(),
      _useState2 = _slicedToArray$3(_useState, 2),
      alignedClassName = _useState2[0],
      setAlignedClassName = _useState2[1]; // ======================= Measure ========================


  var _useStretchStyle = useStretchStyle(stretch),
      _useStretchStyle2 = _slicedToArray$3(_useStretchStyle, 2),
      stretchStyle = _useStretchStyle2[0],
      measureStretchStyle = _useStretchStyle2[1];

  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  } // ======================== Status ========================


  var _useVisibleStatus = useVisibleStatus(visible, doMeasure),
      _useVisibleStatus2 = _slicedToArray$3(_useVisibleStatus, 2),
      status = _useVisibleStatus2[0],
      goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================


  var prepareResolveRef = useRef(); // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align

  function getAlignTarget() {
    if (point) {
      return point;
    }

    return getRootDomNode;
  }

  function forceAlign() {
    var _alignRef$current;

    (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
  }

  function onInternalAlign(popupDomNode, matchAlign) {
    if (status === 'align') {
      var nextAlignedClassName = getClassNameFromAlign(matchAlign);
      setAlignedClassName(nextAlignedClassName); // Repeat until not more align needed

      if (alignedClassName !== nextAlignedClassName) {
        Promise.resolve().then(function () {
          forceAlign();
        });
      } else {
        goNextStatus(function () {
          var _prepareResolveRef$cu;

          (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }

      onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
    }
  } // ======================== Motion ========================


  var motion = _objectSpread2$1({}, getMotion$1(props));

  ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (eventName) {
    var originHandler = motion[eventName];

    motion[eventName] = function (element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
    };
  });

  function onShowPrepare() {
    return new Promise(function (resolve) {
      prepareResolveRef.current = resolve;
    });
  } // Go to stable directly when motion not provided


  React.useEffect(function () {
    if (!motion.motionName && status === 'motion') {
      goNextStatus();
    }
  }, [motion.motionName, status]); // ========================= Refs =========================

  React.useImperativeHandle(ref, function () {
    return {
      forceAlign: forceAlign,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = _objectSpread2$1(_objectSpread2$1({}, stretchStyle), {}, {
    zIndex: zIndex,
    opacity: status === 'motion' || status === 'stable' || !visible ? undefined : 0,
    pointerEvents: status === 'stable' ? undefined : 'none'
  }, style); // Align status


  var alignDisabled = true;

  if ((align === null || align === void 0 ? void 0 : align.points) && (status === 'align' || status === 'stable')) {
    alignDisabled = false;
  }

  var childNode = children; // Wrapper when multiple children

  if (React.Children.count(children) > 1) {
    childNode = /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }

  return /*#__PURE__*/React.createElement(CSSMotion, _extends$2({
    visible: visible,
    ref: elementRef,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }, motion, {
    onAppearPrepare: onShowPrepare,
    onEnterPrepare: onShowPrepare,
    removeOnLeave: destroyPopupOnHide,
    forceRender: forceRender
  }), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames(prefixCls, className, alignedClassName, motionClassName);
    return /*#__PURE__*/React.createElement(RefAlign, {
      target: getAlignTarget(),
      key: "popup",
      ref: alignRef,
      monitorWindowResize: true,
      disabled: alignDisabled,
      align: align,
      onAlign: onInternalAlign
    }, /*#__PURE__*/React.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDownCapture: onMouseDown,
      onTouchStartCapture: onTouchStart,
      style: _objectSpread2$1(_objectSpread2$1({}, motionStyle), mergedStyle)
    }, childNode));
  });
});
PopupInner.displayName = 'PopupInner';

var MobilePopupInner = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      children = props.children,
      _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName,
      popupStyle = _props$mobile.popupStyle,
      _props$mobile$popupMo = _props$mobile.popupMotion,
      popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
      popupRender = _props$mobile.popupRender;
  var elementRef = React.useRef(); // ========================= Refs =========================

  React.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = _objectSpread2$1({
    zIndex: zIndex
  }, popupStyle);

  var childNode = children; // Wrapper when multiple children

  if (React.Children.count(children) > 1) {
    childNode = /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  } // Mobile support additional render


  if (popupRender) {
    childNode = popupRender(childNode);
  }

  return /*#__PURE__*/React.createElement(CSSMotion, _extends$2({
    visible: visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames(prefixCls, popupClassName, motionClassName);
    return /*#__PURE__*/React.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      style: _objectSpread2$1(_objectSpread2$1({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = 'MobilePopupInner';

var Popup = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var visible = _ref.visible,
      mobile = _ref.mobile,
      props = _objectWithoutProperties$1(_ref, ["visible", "mobile"]);

  var _useState = useState(visible),
      _useState2 = _slicedToArray$3(_useState, 2),
      innerVisible = _useState2[0],
      serInnerVisible = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray$3(_useState3, 2),
      inMobile = _useState4[0],
      setInMobile = _useState4[1];

  var cloneProps = _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    visible: innerVisible
  }); // We check mobile in visible changed here.
  // And this also delay set `innerVisible` to avoid popup component render flash


  useEffect(function () {
    serInnerVisible(visible);

    if (visible && mobile) {
      setInMobile(isMobile());
    }
  }, [visible, mobile]);
  var popupNode = inMobile ? /*#__PURE__*/React.createElement(MobilePopupInner, _extends$2({}, cloneProps, {
    mobile: mobile,
    ref: ref
  })) : /*#__PURE__*/React.createElement(PopupInner, _extends$2({}, cloneProps, {
    ref: ref
  })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mask, cloneProps), popupNode);
});
Popup.displayName = 'Popup';

var TriggerContext = /*#__PURE__*/React.createContext(null);

function noop$1() {}

function returnEmptyString() {
  return '';
}

function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }

  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];
/**
 * Internal usage. Do not use in your code since this will be removed.
 */

function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/function (_React$Component) {
    _inherits$1(Trigger, _React$Component);

    var _super = _createSuper$1(Trigger);

    function Trigger(props) {
      var _this;

      _classCallCheck$2(this, Trigger);

      _this = _super.call(this, props);
      _this.popupRef = /*#__PURE__*/React.createRef();
      _this.triggerRef = /*#__PURE__*/React.createRef();

      _this.onMouseEnter = function (e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;

        _this.fireEvents('onMouseEnter', e);

        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      };

      _this.onMouseMove = function (e) {
        _this.fireEvents('onMouseMove', e);

        _this.setPoint(e);
      };

      _this.onMouseLeave = function (e) {
        _this.fireEvents('onMouseLeave', e);

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onPopupMouseEnter = function () {
        _this.clearDelayTimer();
      };

      _this.onPopupMouseLeave = function (e) {
        var _this$popupRef$curren; // https://github.com/react-component/trigger/pull/13
        // react bug?


        if (e.relatedTarget && !e.relatedTarget.setTimeout && contains((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) {
          return;
        }

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onFocus = function (e) {
        _this.fireEvents('onFocus', e); // incase focusin and focusout


        _this.clearDelayTimer();

        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();

          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      };

      _this.onMouseDown = function (e) {
        _this.fireEvents('onMouseDown', e);

        _this.preClickTime = Date.now();
      };

      _this.onTouchStart = function (e) {
        _this.fireEvents('onTouchStart', e);

        _this.preTouchTime = Date.now();
      };

      _this.onBlur = function (e) {
        _this.fireEvents('onBlur', e);

        _this.clearDelayTimer();

        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      };

      _this.onContextMenu = function (e) {
        e.preventDefault();

        _this.fireEvents('onContextMenu', e);

        _this.setPopupVisible(true, e);
      };

      _this.onContextMenuClose = function () {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      };

      _this.onClick = function (event) {
        _this.fireEvents('onClick', event); // focus will trigger click


        if (_this.focusTime) {
          var preTime;

          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }

          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }

          _this.focusTime = 0;
        }

        _this.preClickTime = 0;
        _this.preTouchTime = 0; // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291

        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }

        var nextVisible = !_this.state.popupVisible;

        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      };

      _this.onPopupMouseDown = function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);

        if (_this.context) {
          var _this$context;

          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      };

      _this.onDocumentClick = function (event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }

        var target = event.target;

        var root = _this.getRootDomNode();

        var popupNode = _this.getPopupDomNode();

        if ( // mousedown on the target should also close popup when action is contextMenu.
        // https://github.com/ant-design/ant-design/issues/29853
        (!contains(root, target) || _this.isContextMenuOnly()) && !contains(popupNode, target) && !_this.hasPopupMouseDown) {
          _this.close();
        }
      };

      _this.getRootDomNode = function () {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;

        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }

        try {
          var domNode = findDOMNode(_this.triggerRef.current);

          if (domNode) {
            return domNode;
          }
        } catch (err) {// Do nothing
        }

        return ReactDOM.findDOMNode(_assertThisInitialized$1(_this));
      };

      _this.getPopupClassNameFromAlign = function (align) {
        var className = [];
        var _this$props = _this.props,
            popupPlacement = _this$props.popupPlacement,
            builtinPlacements = _this$props.builtinPlacements,
            prefixCls = _this$props.prefixCls,
            alignPoint = _this$props.alignPoint,
            getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
        }

        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }

        return className.join(' ');
      };

      _this.getComponent = function () {
        var _this$props2 = _this.props,
            prefixCls = _this$props2.prefixCls,
            destroyPopupOnHide = _this$props2.destroyPopupOnHide,
            popupClassName = _this$props2.popupClassName,
            onPopupAlign = _this$props2.onPopupAlign,
            popupMotion = _this$props2.popupMotion,
            popupAnimation = _this$props2.popupAnimation,
            popupTransitionName = _this$props2.popupTransitionName,
            popupStyle = _this$props2.popupStyle,
            mask = _this$props2.mask,
            maskAnimation = _this$props2.maskAnimation,
            maskTransitionName = _this$props2.maskTransitionName,
            maskMotion = _this$props2.maskMotion,
            zIndex = _this$props2.zIndex,
            popup = _this$props2.popup,
            stretch = _this$props2.stretch,
            alignPoint = _this$props2.alignPoint,
            mobile = _this$props2.mobile,
            forceRender = _this$props2.forceRender;
        var _this$state = _this.state,
            popupVisible = _this$state.popupVisible,
            point = _this$state.point;

        var align = _this.getPopupAlign();

        var mouseProps = {};

        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }

        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /*#__PURE__*/React.createElement(Popup, _extends$2({
          prefixCls: prefixCls,
          destroyPopupOnHide: destroyPopupOnHide,
          visible: popupVisible,
          point: alignPoint && point,
          className: popupClassName,
          align: align,
          onAlign: onPopupAlign,
          animation: popupAnimation,
          getClassNameFromAlign: _this.getPopupClassNameFromAlign
        }, mouseProps, {
          stretch: stretch,
          getRootDomNode: _this.getRootDomNode,
          style: popupStyle,
          mask: mask,
          zIndex: zIndex,
          transitionName: popupTransitionName,
          maskAnimation: maskAnimation,
          maskTransitionName: maskTransitionName,
          maskMotion: maskMotion,
          ref: _this.popupRef,
          motion: popupMotion,
          mobile: mobile,
          forceRender: forceRender
        }), typeof popup === 'function' ? popup() : popup);
      };

      _this.attachParent = function (popupContainer) {
        wrapperRaf$1.cancel(_this.attachId);
        var _this$props3 = _this.props,
            getPopupContainer = _this$props3.getPopupContainer,
            getDocument = _this$props3.getDocument;

        var domNode = _this.getRootDomNode();

        var mountNode;

        if (!getPopupContainer) {
          mountNode = getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          // Compatible for legacy getPopupContainer with domNode argument.
          // If no need `domNode` argument, will call directly.
          // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
          mountNode = getPopupContainer(domNode);
        }

        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          // Retry after frame render in case parent not ready
          _this.attachId = wrapperRaf$1(function () {
            _this.attachParent(popupContainer);
          });
        }
      };

      _this.getContainer = function () {
        var getDocument = _this.props.getDocument;
        var popupContainer = getDocument(_this.getRootDomNode()).createElement('div'); // Make sure default popup container will never cause scrollbar appearing
        // https://github.com/react-component/trigger/issues/41

        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';

        _this.attachParent(popupContainer);

        return popupContainer;
      };

      _this.setPoint = function (point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;

        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      };

      _this.handlePortalUpdate = function () {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      };

      _this.triggerContextValue = {
        onPopupMouseDown: _this.onPopupMouseDown
      };
      var popupVisible;

      if ('popupVisible' in props) {
        popupVisible = !!props.popupVisible;
      } else {
        popupVisible = !!props.defaultPopupVisible;
      }

      _this.state = {
        prevPopupVisible: popupVisible,
        popupVisible: popupVisible
      };
      ALL_HANDLERS.forEach(function (h) {
        _this["fire".concat(h)] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }

    _createClass$2(Trigger, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
        // https://github.com/ant-design/ant-design/issues/5804
        // https://github.com/react-component/calendar/issues/250
        // https://github.com/react-component/trigger/issues/50

        if (state.popupVisible) {
          var currentDocument;

          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
          } // always hide on mobile


          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
          } // close popup when trigger type contains 'onContextMenu' and document is scrolling.


          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextMenuClose);
          } // close popup when trigger type contains 'onContextMenu' and window is blur.


          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextMenuClose);
          }

          return;
        }

        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        wrapperRaf$1.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function getPopupDomNode() {
        var _this$popupRef$curren2; // for test


        return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement,
            popupAlign = props.popupAlign,
            builtinPlacements = props.builtinPlacements;

        if (popupPlacement && builtinPlacements) {
          return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
        }

        return popupAlign;
      }
      /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */

    }, {
      key: "setPopupVisible",
      value: function setPopupVisible(popupVisible, event) {
        var alignPoint = this.props.alignPoint;
        var prevPopupVisible = this.state.popupVisible;
        this.clearDelayTimer();

        if (prevPopupVisible !== popupVisible) {
          if (!('popupVisible' in this.props)) {
            this.setState({
              popupVisible: popupVisible,
              prevPopupVisible: prevPopupVisible
            });
          }

          this.props.onPopupVisibleChange(popupVisible);
        } // Always record the point position since mouseEnterDelay will delay the show


        if (alignPoint && event && popupVisible) {
          this.setPoint(event);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;

        var delay = delayS * 1000;
        this.clearDelayTimer();

        if (delay) {
          var point = event ? {
            pageX: event.pageX,
            pageY: event.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            _this2.setPopupVisible(visible, point);

            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }

        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }

        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }

        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;

        if (childPros[event] && props[event]) {
          return this["fire".concat(event)];
        }

        return childPros[event] || props[event];
      }
    }, {
      key: "isClickToShow",
      value: function isClickToShow() {
        var _this$props4 = this.props,
            action = _this$props4.action,
            showAction = _this$props4.showAction;
        return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
      }
    }, {
      key: "isContextMenuOnly",
      value: function isContextMenuOnly() {
        var action = this.props.action;
        return action === 'contextMenu' || action.length === 1 && action[0] === 'contextMenu';
      }
    }, {
      key: "isContextMenuToShow",
      value: function isContextMenuToShow() {
        var _this$props5 = this.props,
            action = _this$props5.action,
            showAction = _this$props5.showAction;
        return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function isClickToHide() {
        var _this$props6 = this.props,
            action = _this$props6.action,
            hideAction = _this$props6.hideAction;
        return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function isMouseEnterToShow() {
        var _this$props7 = this.props,
            action = _this$props7.action,
            showAction = _this$props7.showAction;
        return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function isMouseLeaveToHide() {
        var _this$props8 = this.props,
            action = _this$props8.action,
            hideAction = _this$props8.hideAction;
        return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function isFocusToShow() {
        var _this$props9 = this.props,
            action = _this$props9.action,
            showAction = _this$props9.showAction;
        return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function isBlurToHide() {
        var _this$props10 = this.props,
            action = _this$props10.action,
            hideAction = _this$props10.hideAction;
        return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function forcePopupAlign() {
        if (this.state.popupVisible) {
          var _this$popupRef$curren3;

          (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 ? void 0 : _this$popupRef$curren3.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];

        if (childCallback) {
          childCallback(e);
        }

        var callback = this.props[type];

        if (callback) {
          callback(e);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function render() {
        var popupVisible = this.state.popupVisible;
        var _this$props11 = this.props,
            children = _this$props11.children,
            forceRender = _this$props11.forceRender,
            alignPoint = _this$props11.alignPoint,
            className = _this$props11.className,
            autoDestroy = _this$props11.autoDestroy;
        var child = React.Children.only(children);
        var newChildProps = {
          key: 'trigger'
        }; // ============================== Visible Handlers ==============================
        // >>> ContextMenu

        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
        } // >>> Click


        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains('onClick');
          newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
          newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
        } // >>> Hover(enter)


        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter; // Point align

          if (alignPoint) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
        } // >>> Hover(leave)


        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
        } // >>> Focus


        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains('onFocus');
          newChildProps.onBlur = this.createTwoChains('onBlur');
        } // =================================== Render ===================================


        var childrenClassName = classnames(child && child.props && child.props.className, className);

        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }

        var cloneProps = _objectSpread2$1({}, newChildProps);

        if (supportRef(child)) {
          cloneProps.ref = composeRef(this.triggerRef, child.ref);
        }

        var trigger = /*#__PURE__*/React.cloneElement(child, cloneProps);
        var portal; // prevent unmounting after it's rendered

        if (popupVisible || this.popupRef.current || forceRender) {
          portal = /*#__PURE__*/React.createElement(PortalComponent, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }

        if (!popupVisible && autoDestroy) {
          portal = null;
        }

        return /*#__PURE__*/React.createElement(TriggerContext.Provider, {
          value: this.triggerContextValue
        }, trigger, portal);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;
        var newState = {};

        if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }

        return newState;
      }
    }]);

    return Trigger;
  }(React.Component);

  Trigger.contextType = TriggerContext;
  Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop$1,
    afterPopupVisibleChange: noop$1,
    onPopupAlign: noop$1,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  };
  return Trigger;
}
var Trigger = generateTrigger(Portal);

var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = typeof dropdownMatchSelectWidth !== 'number' ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    }
  };
};

var SelectTrigger = function SelectTrigger(props, ref) {
  var prefixCls = props.prefixCls;
      props.disabled;
      var visible = props.visible,
      children = props.children,
      popupElement = props.popupElement,
      containerWidth = props.containerWidth,
      animation = props.animation,
      transitionName = props.transitionName,
      dropdownStyle = props.dropdownStyle,
      dropdownClassName = props.dropdownClassName,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'ltr' : _props$direction,
      _props$dropdownMatchS = props.dropdownMatchSelectWidth,
      dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
      dropdownRender = props.dropdownRender,
      dropdownAlign = props.dropdownAlign,
      getPopupContainer = props.getPopupContainer,
      empty = props.empty,
      getTriggerDOMNode = props.getTriggerDOMNode,
      onPopupVisibleChange = props.onPopupVisibleChange,
      restProps = _objectWithoutProperties$1(props, ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange"]);

  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;

  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }

  var builtInPlacements = React.useMemo(function () {
    return getBuiltInPlacements(dropdownMatchSelectWidth);
  }, [dropdownMatchSelectWidth]); // ===================== Motion ======================

  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName; // ======================= Ref =======================

  var popupRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });

  var popupStyle = _objectSpread2$1({
    minWidth: containerWidth
  }, dropdownStyle);

  if (typeof dropdownMatchSelectWidth === 'number') {
    popupStyle.width = dropdownMatchSelectWidth;
  } else if (dropdownMatchSelectWidth) {
    popupStyle.width = containerWidth;
  }

  return /*#__PURE__*/React.createElement(Trigger, _extends$2({}, restProps, {
    showAction: onPopupVisibleChange ? ['click'] : [],
    hideAction: onPopupVisibleChange ? ['click'] : [],
    popupPlacement: direction === 'rtl' ? 'bottomRight' : 'bottomLeft',
    builtinPlacements: builtInPlacements,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: /*#__PURE__*/React.createElement("div", {
      ref: popupRef
    }, popupNode),
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer: getPopupContainer,
    popupClassName: classnames(dropdownClassName, _defineProperty$4({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle: popupStyle,
    getTriggerDOMNode: getTriggerDOMNode,
    onPopupVisibleChange: onPopupVisibleChange
  }), children);
};

var RefSelectTrigger = /*#__PURE__*/React.forwardRef(SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';

var INTERNAL_PROPS_MARK = 'RC_SELECT_INTERNAL_PROPS_MARK';

/**
 * Similar with `useLock`, but this hook will always execute last value.
 * When set to `true`, it will keep `true` for a short time even if `false` is set.
 */

function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      bool = _React$useState2[0],
      setBool = _React$useState2[1];

  var delayRef = React.useRef(null);

  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delayRef.current);
  };

  React.useEffect(function () {
    return cancelLatest;
  }, []);

  var delaySetBool = function delaySetBool(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function () {
      setBool(value);

      if (callback) {
        callback();
      }
    }, timeout);
  };

  return [bool, delaySetBool, cancelLatest];
}

function useSelectTriggerControl(elements, open, triggerOpen) {
  var propsRef = React.useRef(null);
  propsRef.current = {
    open: open,
    triggerOpen: triggerOpen
  };
  React.useEffect(function () {
    function onGlobalMouseDown(event) {
      var target = event.target;

      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }

      if (propsRef.current.open && elements().filter(function (element) {
        return element;
      }).every(function (element) {
        return !element.contains(target) && element !== target;
      })) {
        // Should trigger close
        propsRef.current.triggerOpen(false);
      }
    }

    window.addEventListener('mousedown', onGlobalMouseDown);
    return function () {
      return window.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);
}

function useCacheDisplayValue(values) {
  var prevValuesRef = React.useRef(values);
  var mergedValues = React.useMemo(function () {
    // Create value - label map
    var valueLabels = new Map();
    prevValuesRef.current.forEach(function (_ref) {
      var value = _ref.value,
          label = _ref.label;

      if (value !== label) {
        valueLabels.set(value, label);
      }
    });
    var resultValues = values.map(function (item) {
      var cacheLabel = valueLabels.get(item.value);

      if (item.isCacheable && cacheLabel) {
        return _objectSpread2$1(_objectSpread2$1({}, item), {}, {
          label: cacheLabel
        });
      }

      return item;
    });
    prevValuesRef.current = resultValues;
    return resultValues;
  }, [values]);
  return mergedValues;
}

function useCacheOptions(options) {
  var prevOptionMapRef = React.useRef(null);
  var optionMap = React.useMemo(function () {
    var map = new Map();
    options.forEach(function (item) {
      var value = item.data.value;
      map.set(value, item);
    });
    return map;
  }, [options]);
  prevOptionMapRef.current = optionMap;

  var getValueOption = function getValueOption(vals) {
    return vals.map(function (value) {
      return prevOptionMapRef.current.get(value);
    }).filter(Boolean);
  };

  return getValueOption;
}

var DEFAULT_OMIT_PROPS = ['removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown', 'tabIndex'];
/**
 * This function is in internal usage.
 * Do not use it in your prod env since we may refactor this.
 */

function generateSelector(config) {
  var defaultPrefixCls = config.prefixCls,
      OptionList = config.components.optionList,
      convertChildrenToData = config.convertChildrenToData,
      flattenOptions = config.flattenOptions,
      getLabeledValue = config.getLabeledValue,
      filterOptions = config.filterOptions,
      isValueDisabled = config.isValueDisabled,
      findValueOption = config.findValueOption,
      warningProps = config.warningProps,
      fillOptionsWithMissingValue = config.fillOptionsWithMissingValue,
      omitDOMProps = config.omitDOMProps; // Use raw define since `React.FC` not support generic

  function Select(props, ref) {
    var _classNames2;

    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === void 0 ? defaultPrefixCls : _props$prefixCls,
        className = props.className,
        id = props.id,
        open = props.open,
        defaultOpen = props.defaultOpen,
        options = props.options,
        children = props.children,
        mode = props.mode,
        value = props.value,
        defaultValue = props.defaultValue,
        labelInValue = props.labelInValue,
        showSearch = props.showSearch,
        inputValue = props.inputValue,
        searchValue = props.searchValue,
        filterOption = props.filterOption,
        filterSort = props.filterSort,
        _props$optionFilterPr = props.optionFilterProp,
        optionFilterProp = _props$optionFilterPr === void 0 ? 'value' : _props$optionFilterPr,
        _props$autoClearSearc = props.autoClearSearchValue,
        autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
        onSearch = props.onSearch,
        allowClear = props.allowClear,
        clearIcon = props.clearIcon,
        showArrow = props.showArrow,
        inputIcon = props.inputIcon,
        menuItemSelectedIcon = props.menuItemSelectedIcon,
        disabled = props.disabled,
        loading = props.loading,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        _props$notFoundConten = props.notFoundContent,
        notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
        optionLabelProp = props.optionLabelProp,
        backfill = props.backfill;
        props.tabIndex;
        var getInputElement = props.getInputElement,
        getRawInputElement = props.getRawInputElement,
        getPopupContainer = props.getPopupContainer,
        _props$listHeight = props.listHeight,
        listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
        _props$listItemHeight = props.listItemHeight,
        listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
        animation = props.animation,
        transitionName = props.transitionName,
        virtual = props.virtual,
        dropdownStyle = props.dropdownStyle,
        dropdownClassName = props.dropdownClassName,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
        dropdownRender = props.dropdownRender,
        dropdownAlign = props.dropdownAlign,
        _props$showAction = props.showAction,
        showAction = _props$showAction === void 0 ? [] : _props$showAction,
        direction = props.direction,
        tokenSeparators = props.tokenSeparators,
        tagRender = props.tagRender,
        onPopupScroll = props.onPopupScroll,
        onDropdownVisibleChange = props.onDropdownVisibleChange,
        onFocus = props.onFocus,
        onBlur = props.onBlur,
        onKeyUp = props.onKeyUp,
        onKeyDown = props.onKeyDown,
        onMouseDown = props.onMouseDown,
        onChange = props.onChange,
        onSelect = props.onSelect,
        onDeselect = props.onDeselect,
        onClear = props.onClear,
        _props$internalProps = props.internalProps,
        internalProps = _props$internalProps === void 0 ? {} : _props$internalProps,
        restProps = _objectWithoutProperties$1(props, ["prefixCls", "className", "id", "open", "defaultOpen", "options", "children", "mode", "value", "defaultValue", "labelInValue", "showSearch", "inputValue", "searchValue", "filterOption", "filterSort", "optionFilterProp", "autoClearSearchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "menuItemSelectedIcon", "disabled", "loading", "defaultActiveFirstOption", "notFoundContent", "optionLabelProp", "backfill", "tabIndex", "getInputElement", "getRawInputElement", "getPopupContainer", "listHeight", "listItemHeight", "animation", "transitionName", "virtual", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown", "onChange", "onSelect", "onDeselect", "onClear", "internalProps"]);

    var useInternalProps = internalProps.mark === INTERNAL_PROPS_MARK;
    var domProps = omitDOMProps ? omitDOMProps(restProps) : restProps;
    DEFAULT_OMIT_PROPS.forEach(function (prop) {
      delete domProps[prop];
    });
    var containerRef = useRef(null);
    var triggerRef = useRef(null);
    var selectorRef = useRef(null);
    var listRef = useRef(null);
    var tokenWithEnter = useMemo$1(function () {
      return (tokenSeparators || []).some(function (tokenSeparator) {
        return ['\n', '\r\n'].includes(tokenSeparator);
      });
    }, [tokenSeparators]);
    /** Used for component focused management */

    var _useDelayReset = useDelayReset(),
        _useDelayReset2 = _slicedToArray$3(_useDelayReset, 3),
        mockFocused = _useDelayReset2[0],
        setMockFocused = _useDelayReset2[1],
        cancelSetMockFocused = _useDelayReset2[2]; // Inner id for accessibility usage. Only work in client side


    var _useState = useState(),
        _useState2 = _slicedToArray$3(_useState, 2),
        innerId = _useState2[0],
        setInnerId = _useState2[1];

    useEffect(function () {
      setInnerId("rc_select_".concat(getUUID()));
    }, []);
    var mergedId = id || innerId; // optionLabelProp

    var mergedOptionLabelProp = optionLabelProp;

    if (mergedOptionLabelProp === undefined) {
      mergedOptionLabelProp = options ? 'label' : 'children';
    } // labelInValue


    var mergedLabelInValue = mode === 'combobox' ? false : labelInValue;
    var isMultiple = mode === 'tags' || mode === 'multiple';
    var mergedShowSearch = showSearch !== undefined ? showSearch : isMultiple || mode === 'combobox'; // ======================== Mobile ========================

    var _useState3 = useState(false),
        _useState4 = _slicedToArray$3(_useState3, 2),
        mobile = _useState4[0],
        setMobile = _useState4[1];

    useEffect(function () {
      // Only update on the client side
      setMobile(isMobile());
    }, []); // ============================== Ref ===============================

    var selectorDomRef = useRef(null);
    React.useImperativeHandle(ref, function () {
      var _selectorRef$current, _selectorRef$current2, _listRef$current;

      return {
        focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
        blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
        scrollTo: (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo
      };
    }); // ============================= Value ==============================

    var _useMergedState = useControlledState(defaultValue, {
      value: value
    }),
        _useMergedState2 = _slicedToArray$3(_useMergedState, 2),
        mergedValue = _useMergedState2[0],
        setMergedValue = _useMergedState2[1];
    /** Unique raw values */


    var _useMemo = useMemo$1(function () {
      return toInnerValue(mergedValue, {
        labelInValue: mergedLabelInValue,
        combobox: mode === 'combobox'
      });
    }, [mergedValue, mergedLabelInValue]),
        _useMemo2 = _slicedToArray$3(_useMemo, 2),
        mergedRawValue = _useMemo2[0],
        mergedValueMap = _useMemo2[1];
    /** We cache a set of raw values to speed up check */


    var rawValues = useMemo$1(function () {
      return new Set(mergedRawValue);
    }, [mergedRawValue]); // ============================= Option =============================
    // Set by option list active, it will merge into search input when mode is `combobox`

    var _useState5 = useState(null),
        _useState6 = _slicedToArray$3(_useState5, 2),
        activeValue = _useState6[0],
        setActiveValue = _useState6[1];

    var _useState7 = useState(''),
        _useState8 = _slicedToArray$3(_useState7, 2),
        innerSearchValue = _useState8[0],
        setInnerSearchValue = _useState8[1];

    var mergedSearchValue = innerSearchValue;

    if (mode === 'combobox' && mergedValue !== undefined) {
      mergedSearchValue = mergedValue;
    } else if (searchValue !== undefined) {
      mergedSearchValue = searchValue;
    } else if (inputValue) {
      mergedSearchValue = inputValue;
    }

    var mergedOptions = useMemo$1(function () {
      var newOptions = options;

      if (newOptions === undefined) {
        newOptions = convertChildrenToData(children);
      }
      /**
       * `tags` should fill un-list item.
       * This is not cool here since TreeSelect do not need this
       */


      if (mode === 'tags' && fillOptionsWithMissingValue) {
        newOptions = fillOptionsWithMissingValue(newOptions, mergedValue, mergedOptionLabelProp, labelInValue);
      }

      return newOptions || [];
    }, [options, children, mode, mergedValue]);
    var mergedFlattenOptions = useMemo$1(function () {
      return flattenOptions(mergedOptions, props);
    }, [mergedOptions]);
    var getValueOption = useCacheOptions(mergedFlattenOptions); // Display options for OptionList

    var displayOptions = useMemo$1(function () {
      if (!mergedSearchValue || !mergedShowSearch) {
        return _toConsumableArray(mergedOptions);
      }

      var filteredOptions = filterOptions(mergedSearchValue, mergedOptions, {
        optionFilterProp: optionFilterProp,
        filterOption: mode === 'combobox' && filterOption === undefined ? function () {
          return true;
        } : filterOption
      });

      if (mode === 'tags' && filteredOptions.every(function (opt) {
        return opt[optionFilterProp] !== mergedSearchValue;
      })) {
        filteredOptions.unshift({
          value: mergedSearchValue,
          label: mergedSearchValue,
          key: '__RC_SELECT_TAG_PLACEHOLDER__'
        });
      }

      if (filterSort && Array.isArray(filteredOptions)) {
        return _toConsumableArray(filteredOptions).sort(filterSort);
      }

      return filteredOptions;
    }, [mergedOptions, mergedSearchValue, mode, mergedShowSearch, filterSort]);
    var displayFlattenOptions = useMemo$1(function () {
      return flattenOptions(displayOptions, props);
    }, [displayOptions]);
    useEffect(function () {
      if (listRef.current && listRef.current.scrollTo) {
        listRef.current.scrollTo(0);
      }
    }, [mergedSearchValue]); // ============================ Selector ============================

    var displayValues = useMemo$1(function () {
      var tmpValues = mergedRawValue.map(function (val) {
        var valueOptions = getValueOption([val]);
        var displayValue = getLabeledValue(val, {
          options: valueOptions,
          prevValueMap: mergedValueMap,
          labelInValue: mergedLabelInValue,
          optionLabelProp: mergedOptionLabelProp
        });
        return _objectSpread2$1(_objectSpread2$1({}, displayValue), {}, {
          disabled: isValueDisabled(val, valueOptions)
        });
      });

      if (!mode && tmpValues.length === 1 && tmpValues[0].value === null && tmpValues[0].label === null) {
        return [];
      }

      return tmpValues;
    }, [mergedValue, mergedOptions, mode]); // Polyfill with cache label

    displayValues = useCacheDisplayValue(displayValues);

    var triggerSelect = function triggerSelect(newValue, isSelect, source) {
      var newValueOption = getValueOption([newValue]);
      var outOption = findValueOption([newValue], newValueOption)[0];

      if (!internalProps.skipTriggerSelect) {
        // Skip trigger `onSelect` or `onDeselect` if configured
        var selectValue = mergedLabelInValue ? getLabeledValue(newValue, {
          options: newValueOption,
          prevValueMap: mergedValueMap,
          labelInValue: mergedLabelInValue,
          optionLabelProp: mergedOptionLabelProp
        }) : newValue;

        if (isSelect && onSelect) {
          onSelect(selectValue, outOption);
        } else if (!isSelect && onDeselect) {
          onDeselect(selectValue, outOption);
        }
      } // Trigger internal event


      if (useInternalProps) {
        if (isSelect && internalProps.onRawSelect) {
          internalProps.onRawSelect(newValue, outOption, source);
        } else if (!isSelect && internalProps.onRawDeselect) {
          internalProps.onRawDeselect(newValue, outOption, source);
        }
      }
    }; // We need cache options here in case user update the option list


    var _useState9 = useState([]),
        _useState10 = _slicedToArray$3(_useState9, 2),
        prevValueOptions = _useState10[0],
        setPrevValueOptions = _useState10[1];

    var triggerChange = function triggerChange(newRawValues) {
      if (useInternalProps && internalProps.skipTriggerChange) {
        return;
      }

      var newRawValuesOptions = getValueOption(newRawValues);
      var outValues = toOuterValues(Array.from(newRawValues), {
        labelInValue: mergedLabelInValue,
        options: newRawValuesOptions,
        getLabeledValue: getLabeledValue,
        prevValueMap: mergedValueMap,
        optionLabelProp: mergedOptionLabelProp
      });
      var outValue = isMultiple ? outValues : outValues[0]; // Skip trigger if prev & current value is both empty

      if (onChange && (mergedRawValue.length !== 0 || outValues.length !== 0)) {
        var outOptions = findValueOption(newRawValues, newRawValuesOptions, {
          prevValueOptions: prevValueOptions
        }); // We will cache option in case it removed by ajax

        setPrevValueOptions(outOptions.map(function (option, index) {
          var clone = _objectSpread2$1({}, option);

          Object.defineProperty(clone, '_INTERNAL_OPTION_VALUE_', {
            get: function get() {
              return newRawValues[index];
            }
          });
          return clone;
        }));
        onChange(outValue, isMultiple ? outOptions : outOptions[0]);
      }

      setMergedValue(outValue);
    };

    var onInternalSelect = function onInternalSelect(newValue, _ref) {
      var selected = _ref.selected,
          source = _ref.source;

      if (disabled) {
        return;
      }

      var newRawValue;

      if (isMultiple) {
        newRawValue = new Set(mergedRawValue);

        if (selected) {
          newRawValue.add(newValue);
        } else {
          newRawValue.delete(newValue);
        }
      } else {
        newRawValue = new Set();
        newRawValue.add(newValue);
      } // Multiple always trigger change and single should change if value changed


      if (isMultiple || !isMultiple && Array.from(mergedRawValue)[0] !== newValue) {
        triggerChange(Array.from(newRawValue));
      } // Trigger `onSelect`. Single mode always trigger select


      triggerSelect(newValue, !isMultiple || selected, source); // Clean search value if single or configured

      if (mode === 'combobox') {
        setInnerSearchValue(String(newValue));
        setActiveValue('');
      } else if (!isMultiple || autoClearSearchValue) {
        setInnerSearchValue('');
        setActiveValue('');
      }
    };

    var onInternalOptionSelect = function onInternalOptionSelect(newValue, info) {
      onInternalSelect(newValue, _objectSpread2$1(_objectSpread2$1({}, info), {}, {
        source: 'option'
      }));
    };

    var onInternalSelectionSelect = function onInternalSelectionSelect(newValue, info) {
      onInternalSelect(newValue, _objectSpread2$1(_objectSpread2$1({}, info), {}, {
        source: 'selection'
      }));
    }; // ============================= Input ==============================
    // Only works in `combobox`


    var customizeInputElement = mode === 'combobox' && typeof getInputElement === 'function' && getInputElement() || null; // Used for customize replacement for `rc-cascader`

    var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement(); // ============================== Open ==============================

    var _useMergedState3 = useControlledState(undefined, {
      defaultValue: defaultOpen,
      value: open
    }),
        _useMergedState4 = _slicedToArray$3(_useMergedState3, 2),
        innerOpen = _useMergedState4[0],
        setInnerOpen = _useMergedState4[1];

    var mergedOpen = innerOpen; // Not trigger `open` in `combobox` when `notFoundContent` is empty

    var emptyListContent = !notFoundContent && !displayOptions.length;

    if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
      mergedOpen = false;
    }

    var triggerOpen = emptyListContent ? false : mergedOpen;

    var onToggleOpen = function onToggleOpen(newOpen) {
      var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;

      if (innerOpen !== nextOpen && !disabled) {
        setInnerOpen(nextOpen);

        if (onDropdownVisibleChange) {
          onDropdownVisibleChange(nextOpen);
        }
      }
    }; // Used for raw custom input trigger


    var onTriggerVisibleChange;

    if (customizeRawInputElement) {
      onTriggerVisibleChange = function onTriggerVisibleChange(newOpen) {
        onToggleOpen(newOpen);
      };
    }

    useSelectTriggerControl(function () {
      var _triggerRef$current;

      return [containerRef.current, (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement()];
    }, triggerOpen, onToggleOpen); // ============================= Search =============================

    var triggerSearch = function triggerSearch(searchText, fromTyping, isCompositing) {
      var ret = true;
      var newSearchText = searchText;
      setActiveValue(null); // Check if match the `tokenSeparators`

      var patchLabels = isCompositing ? null : getSeparatedContent(searchText, tokenSeparators);
      var patchRawValues = patchLabels;

      if (mode === 'combobox') {
        // Only typing will trigger onChange
        if (fromTyping) {
          triggerChange([newSearchText]);
        }
      } else if (patchLabels) {
        newSearchText = '';

        if (mode !== 'tags') {
          patchRawValues = patchLabels.map(function (label) {
            var item = mergedFlattenOptions.find(function (_ref2) {
              var data = _ref2.data;
              return data[mergedOptionLabelProp] === label;
            });
            return item ? item.data.value : null;
          }).filter(function (val) {
            return val !== null;
          });
        }

        var newRawValues = Array.from(new Set([].concat(_toConsumableArray(mergedRawValue), _toConsumableArray(patchRawValues))));
        triggerChange(newRawValues);
        newRawValues.forEach(function (newRawValue) {
          triggerSelect(newRawValue, true, 'input');
        }); // Should close when paste finish

        onToggleOpen(false); // Tell Selector that break next actions

        ret = false;
      }

      setInnerSearchValue(newSearchText);

      if (onSearch && mergedSearchValue !== newSearchText) {
        onSearch(newSearchText);
      }

      return ret;
    }; // Only triggered when menu is closed & mode is tags
    // If menu is open, OptionList will take charge
    // If mode isn't tags, press enter is not meaningful when you can't see any option


    var onSearchSubmit = function onSearchSubmit(searchText) {
      // prevent empty tags from appearing when you click the Enter button
      if (!searchText || !searchText.trim()) {
        return;
      }

      var newRawValues = Array.from(new Set([].concat(_toConsumableArray(mergedRawValue), [searchText])));
      triggerChange(newRawValues);
      newRawValues.forEach(function (newRawValue) {
        triggerSelect(newRawValue, true, 'input');
      });
      setInnerSearchValue('');
    }; // Close dropdown when disabled change


    useEffect(function () {
      if (innerOpen && !!disabled) {
        setInnerOpen(false);
      }
    }, [disabled]); // Close will clean up single mode search text

    useEffect(function () {
      if (!mergedOpen && !isMultiple && mode !== 'combobox') {
        triggerSearch('', false, false);
      }
    }, [mergedOpen]); // ============================ Keyboard ============================

    /**
     * We record input value here to check if can press to clean up by backspace
     * - null: Key is not down, this is reset by key up
     * - true: Search text is empty when first time backspace down
     * - false: Search text is not empty when first time backspace down
     */

    var _useLock = useLock(),
        _useLock2 = _slicedToArray$3(_useLock, 2),
        getClearLock = _useLock2[0],
        setClearLock = _useLock2[1]; // KeyDown


    var onInternalKeyDown = function onInternalKeyDown(event) {
      var clearLock = getClearLock();
      var which = event.which;

      if (which === KeyCode.ENTER) {
        // Do not submit form when type in the input
        if (mode !== 'combobox') {
          event.preventDefault();
        } // We only manage open state here, close logic should handle by list component


        if (!mergedOpen) {
          onToggleOpen(true);
        }
      }

      setClearLock(!!mergedSearchValue); // Remove value by `backspace`

      if (which === KeyCode.BACKSPACE && !clearLock && isMultiple && !mergedSearchValue && mergedRawValue.length) {
        var removeInfo = removeLastEnabledValue(displayValues, mergedRawValue);

        if (removeInfo.removedValue !== null) {
          triggerChange(removeInfo.values);
          triggerSelect(removeInfo.removedValue, false, 'input');
        }
      }

      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      if (mergedOpen && listRef.current) {
        var _listRef$current2;

        (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
      }

      if (onKeyDown) {
        onKeyDown.apply(void 0, [event].concat(rest));
      }
    }; // KeyUp


    var onInternalKeyUp = function onInternalKeyUp(event) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      if (mergedOpen && listRef.current) {
        var _listRef$current3;

        (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
      }

      if (onKeyUp) {
        onKeyUp.apply(void 0, [event].concat(rest));
      }
    }; // ========================== Focus / Blur ==========================

    /** Record real focus status */


    var focusRef = useRef(false);

    var onContainerFocus = function onContainerFocus() {
      setMockFocused(true);

      if (!disabled) {
        if (onFocus && !focusRef.current) {
          onFocus.apply(void 0, arguments);
        } // `showAction` should handle `focus` if set


        if (showAction.includes('focus')) {
          onToggleOpen(true);
        }
      }

      focusRef.current = true;
    };

    var onContainerBlur = function onContainerBlur() {
      setMockFocused(false, function () {
        focusRef.current = false;
        onToggleOpen(false);
      });

      if (disabled) {
        return;
      }

      if (mergedSearchValue) {
        // `tags` mode should move `searchValue` into values
        if (mode === 'tags') {
          triggerSearch('', false, false);
          triggerChange(Array.from(new Set([].concat(_toConsumableArray(mergedRawValue), [mergedSearchValue]))));
        } else if (mode === 'multiple') {
          // `multiple` mode only clean the search value but not trigger event
          setInnerSearchValue('');
        }
      }

      if (onBlur) {
        onBlur.apply(void 0, arguments);
      }
    };

    var activeTimeoutIds = [];
    useEffect(function () {
      return function () {
        activeTimeoutIds.forEach(function (timeoutId) {
          return clearTimeout(timeoutId);
        });
        activeTimeoutIds.splice(0, activeTimeoutIds.length);
      };
    }, []);

    var onInternalMouseDown = function onInternalMouseDown(event) {
      var _triggerRef$current2;

      var target = event.target;
      var popupElement = (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement(); // We should give focus back to selector if clicked item is not focusable

      if (popupElement && popupElement.contains(target)) {
        var timeoutId = setTimeout(function () {
          var index = activeTimeoutIds.indexOf(timeoutId);

          if (index !== -1) {
            activeTimeoutIds.splice(index, 1);
          }

          cancelSetMockFocused();

          if (!mobile && !popupElement.contains(document.activeElement)) {
            var _selectorRef$current3;

            (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 ? void 0 : _selectorRef$current3.focus();
          }
        });
        activeTimeoutIds.push(timeoutId);
      }

      if (onMouseDown) {
        for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          restArgs[_key3 - 1] = arguments[_key3];
        }

        onMouseDown.apply(void 0, [event].concat(restArgs));
      }
    }; // ========================= Accessibility ==========================


    var _useState11 = useState(0),
        _useState12 = _slicedToArray$3(_useState11, 2),
        accessibilityIndex = _useState12[0],
        setAccessibilityIndex = _useState12[1];

    var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';

    var onActiveValue = function onActiveValue(active, index) {
      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref3$source = _ref3.source,
          source = _ref3$source === void 0 ? 'keyboard' : _ref3$source;

      setAccessibilityIndex(index);

      if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
        setActiveValue(String(active));
      }
    }; // ============================= Popup ==============================


    var _useState13 = useState(null),
        _useState14 = _slicedToArray$3(_useState13, 2),
        containerWidth = _useState14[0],
        setContainerWidth = _useState14[1];

    var _useState15 = useState({}),
        _useState16 = _slicedToArray$3(_useState15, 2),
        forceUpdate = _useState16[1]; // We need force update here since popup dom is render async


    function onPopupMouseEnter() {
      forceUpdate({});
    }

    useLayoutEffect(function () {
      if (triggerOpen) {
        var _containerRef$current;

        var newWidth = Math.ceil((_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.offsetWidth);

        if (containerWidth !== newWidth && !Number.isNaN(newWidth)) {
          setContainerWidth(newWidth);
        }
      }
    }, [triggerOpen]);
    var popupNode = /*#__PURE__*/React.createElement(OptionList, {
      ref: listRef,
      prefixCls: prefixCls,
      id: mergedId,
      open: mergedOpen,
      childrenAsData: !options,
      options: displayOptions,
      flattenOptions: displayFlattenOptions,
      multiple: isMultiple,
      values: rawValues,
      height: listHeight,
      itemHeight: listItemHeight,
      onSelect: onInternalOptionSelect,
      onToggleOpen: onToggleOpen,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      notFoundContent: notFoundContent,
      onScroll: onPopupScroll,
      searchValue: mergedSearchValue,
      menuItemSelectedIcon: menuItemSelectedIcon,
      virtual: virtual !== false && dropdownMatchSelectWidth !== false,
      onMouseEnter: onPopupMouseEnter
    }); // ============================= Clear ==============================

    var clearNode;

    var onClearMouseDown = function onClearMouseDown() {
      // Trigger internal `onClear` event
      if (useInternalProps && internalProps.onClear) {
        internalProps.onClear();
      }

      if (onClear) {
        onClear();
      }

      triggerChange([]);
      triggerSearch('', false, false);
    };

    if (!disabled && allowClear && (mergedRawValue.length || mergedSearchValue)) {
      clearNode = /*#__PURE__*/React.createElement(TransBtn, {
        className: "".concat(prefixCls, "-clear"),
        onMouseDown: onClearMouseDown,
        customizeIcon: clearIcon
      }, "\xD7");
    } // ============================= Arrow ==============================


    var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !isMultiple && mode !== 'combobox';
    var arrowNode;

    if (mergedShowArrow) {
      arrowNode = /*#__PURE__*/React.createElement(TransBtn, {
        className: classnames("".concat(prefixCls, "-arrow"), _defineProperty$4({}, "".concat(prefixCls, "-arrow-loading"), loading)),
        customizeIcon: inputIcon,
        customizeIconProps: {
          loading: loading,
          searchValue: mergedSearchValue,
          open: mergedOpen,
          focused: mockFocused,
          showSearch: mergedShowSearch
        }
      });
    } // ============================ Warning =============================


    if (warningProps) {
      warningProps(props);
    } // ============================= Render =============================


    var mergedClassName = classnames(prefixCls, className, (_classNames2 = {}, _defineProperty$4(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), _defineProperty$4(_classNames2, "".concat(prefixCls, "-multiple"), isMultiple), _defineProperty$4(_classNames2, "".concat(prefixCls, "-single"), !isMultiple), _defineProperty$4(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), _defineProperty$4(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), _defineProperty$4(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$4(_classNames2, "".concat(prefixCls, "-loading"), loading), _defineProperty$4(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), _defineProperty$4(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), _defineProperty$4(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));
    var selectorNode = /*#__PURE__*/React.createElement(RefSelectTrigger, {
      ref: triggerRef,
      disabled: disabled,
      prefixCls: prefixCls,
      visible: triggerOpen,
      popupElement: popupNode,
      containerWidth: containerWidth,
      animation: animation,
      transitionName: transitionName,
      dropdownStyle: dropdownStyle,
      dropdownClassName: dropdownClassName,
      direction: direction,
      dropdownMatchSelectWidth: dropdownMatchSelectWidth,
      dropdownRender: dropdownRender,
      dropdownAlign: dropdownAlign,
      getPopupContainer: getPopupContainer,
      empty: !mergedOptions.length,
      getTriggerDOMNode: function getTriggerDOMNode() {
        return selectorDomRef.current;
      },
      onPopupVisibleChange: onTriggerVisibleChange
    }, customizeRawInputElement ? /*#__PURE__*/React.cloneElement(customizeRawInputElement, {
      ref: composeRef(selectorDomRef, customizeRawInputElement.props.ref)
    }) : /*#__PURE__*/React.createElement(ForwardSelector, _extends$2({}, props, {
      domRef: selectorDomRef,
      prefixCls: prefixCls,
      inputElement: customizeInputElement,
      ref: selectorRef,
      id: mergedId,
      showSearch: mergedShowSearch,
      mode: mode,
      accessibilityIndex: accessibilityIndex,
      multiple: isMultiple,
      tagRender: tagRender,
      values: displayValues,
      open: mergedOpen,
      onToggleOpen: onToggleOpen,
      searchValue: mergedSearchValue,
      activeValue: activeValue,
      onSearch: triggerSearch,
      onSearchSubmit: onSearchSubmit,
      onSelect: onInternalSelectionSelect,
      tokenWithEnter: tokenWithEnter
    }))); // Render raw

    if (customizeRawInputElement) {
      return selectorNode;
    }

    return /*#__PURE__*/React.createElement("div", _extends$2({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 0,
        height: 0,
        display: 'flex',
        overflow: 'hidden',
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(mergedRawValue.join(', '))), selectorNode, arrowNode, clearNode);
  }

  var RefSelect = /*#__PURE__*/React.forwardRef(Select);
  return RefSelect;
}

function warningProps(props) {
  var mode = props.mode,
      options = props.options,
      children = props.children,
      backfill = props.backfill,
      allowClear = props.allowClear,
      placeholder = props.placeholder,
      getInputElement = props.getInputElement,
      showSearch = props.showSearch,
      onSearch = props.onSearch,
      defaultOpen = props.defaultOpen,
      autoFocus = props.autoFocus,
      labelInValue = props.labelInValue,
      value = props.value,
      inputValue = props.inputValue,
      optionLabelProp = props.optionLabelProp;
  var multiple = mode === 'multiple' || mode === 'tags';
  var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || convertChildrenToData(children); // `tags` should not set option as disabled

  warningOnce(mode !== 'tags' || mergedOptions.every(function (opt) {
    return !opt.disabled;
  }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.'); // `combobox` & `tags` should option be `string` type

  if (mode === 'tags' || mode === 'combobox') {
    var hasNumberValue = mergedOptions.some(function (item) {
      if (item.options) {
        return item.options.some(function (opt) {
          return typeof ('value' in opt ? opt.value : opt.key) === 'number';
        });
      }

      return typeof ('value' in item ? item.value : item.key) === 'number';
    });
    warningOnce(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
  } // `combobox` should not use `optionLabelProp`


  warningOnce(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.'); // Only `combobox` support `backfill`

  warningOnce(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.'); // Only `combobox` support `getInputElement`

  warningOnce(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.'); // Customize `getInputElement` should not use `allowClear` & `placeholder`

  noteOnce(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.'); // `onSearch` should use in `combobox` or `showSearch`

  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    warningOnce(false, '`onSearch` should work with `showSearch` instead of use alone.');
  }

  noteOnce(!defaultOpen || autoFocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.');

  if (value !== undefined && value !== null) {
    var values = toArray(value);
    warningOnce(!labelInValue || values.every(function (val) {
      return _typeof$4(val) === 'object' && ('key' in val || 'value' in val);
    }), '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`');
    warningOnce(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
  } // Syntactic sugar should use correct children type


  if (children) {
    var invalidateChildType = null;
    toArray$2(children).some(function (node) {
      if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
        return false;
      }

      var type = node.type;

      if (type.isSelectOption) {
        return false;
      }

      if (type.isSelectOptGroup) {
        var allChildrenValid = toArray$2(node.props.children).every(function (subNode) {
          if (! /*#__PURE__*/React.isValidElement(subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }

          invalidateChildType = subNode.type;
          return false;
        });

        if (allChildrenValid) {
          return false;
        }

        return true;
      }

      invalidateChildType = type;
      return true;
    });

    if (invalidateChildType) {
      warningOnce(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }

    warningOnce(inputValue === undefined, '`inputValue` is deprecated, please use `searchValue` instead.');
  }
}

var RefSelect = generateSelector({
  prefixCls: 'rc-select',
  components: {
    optionList: RefOptionList
  },
  convertChildrenToData: convertChildrenToData,
  flattenOptions: flattenOptions,
  getLabeledValue: getLabeledValue,
  filterOptions: filterOptions,
  isValueDisabled: isValueDisabled,
  findValueOption: findValueOption,
  warningProps: warningProps,
  fillOptionsWithMissingValue: fillOptionsWithMissingValue
});
/**
 * Typescript not support generic with function component,
 * we have to wrap an class component to handle this.
 */

var Select$2 = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Select, _React$Component);

  var _super = _createSuper$1(Select);

  function Select() {
    var _this;

    _classCallCheck$2(this, Select);

    _this = _super.apply(this, arguments);
    _this.selectRef = /*#__PURE__*/React.createRef();

    _this.focus = function () {
      _this.selectRef.current.focus();
    };

    _this.blur = function () {
      _this.selectRef.current.blur();
    };

    return _this;
  }

  _createClass$2(Select, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(RefSelect, _extends$2({
        ref: this.selectRef
      }, this.props));
    }
  }]);

  return Select;
}(React.Component);

Select$2.Option = Option;
Select$2.OptGroup = OptGroup;

// This icon file is generated automatically.
var DownOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
      }
    }]
  },
  "name": "down",
  "theme": "outlined"
};
var DownOutlinedSvg = DownOutlined$2;

// GENERATE BY ./scripts/generate.ts

var DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: DownOutlinedSvg
  }));
};

DownOutlined.displayName = 'DownOutlined';
var DownOutlined$1 = /*#__PURE__*/React.forwardRef(DownOutlined);

// This icon file is generated automatically.
var CheckOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
      }
    }]
  },
  "name": "check",
  "theme": "outlined"
};
var CheckOutlinedSvg = CheckOutlined$2;

// GENERATE BY ./scripts/generate.ts

var CheckOutlined = function CheckOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: CheckOutlinedSvg
  }));
};

CheckOutlined.displayName = 'CheckOutlined';
var CheckOutlined$1 = /*#__PURE__*/React.forwardRef(CheckOutlined);

// This icon file is generated automatically.
var SearchOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
      }
    }]
  },
  "name": "search",
  "theme": "outlined"
};
var SearchOutlinedSvg = SearchOutlined$2;

// GENERATE BY ./scripts/generate.ts

var SearchOutlined = function SearchOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: SearchOutlinedSvg
  }));
};

SearchOutlined.displayName = 'SearchOutlined';
var SearchOutlined$1 = /*#__PURE__*/React.forwardRef(SearchOutlined);

function getIcons(_ref) {
  var suffixIcon = _ref.suffixIcon,
      clearIcon = _ref.clearIcon,
      menuItemSelectedIcon = _ref.menuItemSelectedIcon,
      removeIcon = _ref.removeIcon,
      loading = _ref.loading,
      multiple = _ref.multiple,
      prefixCls = _ref.prefixCls; // Clear Icon

  var mergedClearIcon = clearIcon;

  if (!clearIcon) {
    mergedClearIcon = /*#__PURE__*/React.createElement(CloseCircleFilled$1, null);
  } // Arrow item icon


  var mergedSuffixIcon = null;

  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = /*#__PURE__*/React.createElement(LoadingOutlined$1, {
      spin: true
    });
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");

    mergedSuffixIcon = function mergedSuffixIcon(_ref2) {
      var open = _ref2.open,
          showSearch = _ref2.showSearch;

      if (open && showSearch) {
        return /*#__PURE__*/React.createElement(SearchOutlined$1, {
          className: iconCls
        });
      }

      return /*#__PURE__*/React.createElement(DownOutlined$1, {
        className: iconCls
      });
    };
  } // Checked item icon


  var mergedItemIcon = null;

  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/React.createElement(CheckOutlined$1, null);
  } else {
    mergedItemIcon = null;
  }

  var mergedRemoveIcon = null;

  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/React.createElement(CloseOutlined$1, null);
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}

// ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};

var getRealHeight = function getRealHeight(node) {
  return {
    height: node.scrollHeight,
    opacity: 1
  };
};

var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node.offsetHeight
  };
};

var skipOpacityTransition = function skipOpacityTransition(_, event) {
  return (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
};

var collapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
};

var getTransitionName = function getTransitionName(rootPrefixCls, motion, transitionName) {
  if (transitionName !== undefined) {
    return transitionName;
  }

  return "".concat(rootPrefixCls, "-").concat(motion);
};
var collapseMotion$1 = collapseMotion;

var __rest$f = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';

var InternalSelect = function InternalSelect(_a, ref) {
  var _classNames2;

  var customizePrefixCls = _a.prefixCls,
      _a$bordered = _a.bordered,
      bordered = _a$bordered === void 0 ? true : _a$bordered,
      className = _a.className,
      getPopupContainer = _a.getPopupContainer,
      dropdownClassName = _a.dropdownClassName,
      _a$listHeight = _a.listHeight,
      listHeight = _a$listHeight === void 0 ? 256 : _a$listHeight,
      _a$listItemHeight = _a.listItemHeight,
      listItemHeight = _a$listItemHeight === void 0 ? 24 : _a$listItemHeight,
      customizeSize = _a.size,
      notFoundContent = _a.notFoundContent,
      props = __rest$f(_a, ["prefixCls", "bordered", "className", "getPopupContainer", "dropdownClassName", "listHeight", "listItemHeight", "size", "notFoundContent"]);

  var _React$useContext = React.useContext(ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      direction = _React$useContext.direction,
      virtual = _React$useContext.virtual,
      dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth;

  var size = React.useContext(SizeContext$1);
  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var mode = React.useMemo(function () {
    var m = props.mode;

    if (m === 'combobox') {
      return undefined;
    }

    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }

    return m;
  }, [props.mode]);
  var isMultiple = mode === 'multiple' || mode === 'tags'; // ===================== Empty =====================

  var mergedNotFound;

  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === 'combobox') {
    mergedNotFound = null;
  } else {
    mergedNotFound = renderEmpty('Select');
  } // ===================== Icons =====================


  var _getIcons = getIcons(_extends$2(_extends$2({}, props), {
    multiple: isMultiple,
    prefixCls: prefixCls
  })),
      suffixIcon = _getIcons.suffixIcon,
      itemIcon = _getIcons.itemIcon,
      removeIcon = _getIcons.removeIcon,
      clearIcon = _getIcons.clearIcon;

  var selectProps = omit(props, ['suffixIcon', 'itemIcon']);
  var rcSelectRtlDropDownClassName = classnames(dropdownClassName, _defineProperty$4({}, "".concat(prefixCls, "-dropdown-").concat(direction), direction === 'rtl'));
  var mergedSize = customizeSize || size;
  var mergedClassName = classnames((_classNames2 = {}, _defineProperty$4(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), _defineProperty$4(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), _defineProperty$4(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty$4(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), _classNames2), className);
  return /*#__PURE__*/React.createElement(Select$2, _extends$2({
    ref: ref,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }, selectProps, {
    transitionName: getTransitionName(rootPrefixCls, 'slide-up', props.transitionName),
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    mode: mode,
    prefixCls: prefixCls,
    direction: direction,
    inputIcon: suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: rcSelectRtlDropDownClassName
  }));
};

var SelectRef = /*#__PURE__*/React.forwardRef(InternalSelect);
var Select = SelectRef;
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;
var Select$1 = Select;

var isValidElement = React.isValidElement;
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) return replacement;
  return /*#__PURE__*/React.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};
var subscribers = new Map();
var subUid = -1;
var screens = {};
var responsiveObserve = {
  matchHandlers: {},
  dispatch: function dispatch(pointMap) {
    screens = pointMap;
    subscribers.forEach(function (func) {
      return func(screens);
    });
    return subscribers.size >= 1;
  },
  subscribe: function subscribe(func) {
    if (!subscribers.size) this.register();
    subUid += 1;
    subscribers.set(subUid, func);
    func(screens);
    return subUid;
  },
  unsubscribe: function unsubscribe(token) {
    subscribers["delete"](token);
    if (!subscribers.size) this.unregister();
  },
  unregister: function unregister() {
    var _this = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];
      var handler = _this.matchHandlers[matchMediaQuery];
      handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
    });
    subscribers.clear();
  },
  register: function register() {
    var _this2 = this;

    Object.keys(responsiveMap).forEach(function (screen) {
      var matchMediaQuery = responsiveMap[screen];

      var listener = function listener(_ref) {
        var matches = _ref.matches;

        _this2.dispatch(_extends$2(_extends$2({}, screens), _defineProperty$4({}, screen, matches)));
      };

      var mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      _this2.matchHandlers[matchMediaQuery] = {
        mql: mql,
        listener: listener
      };
      listener(mql);
    });
  }
};
var ResponsiveObserve = responsiveObserve;

function useBreakpoint() {
  var _useState = useState({}),
      _useState2 = _slicedToArray$3(_useState, 2),
      screens = _useState2[0],
      setScreens = _useState2[1];

  useEffect(function () {
    var token = ResponsiveObserve.subscribe(function (supportScreens) {
      setScreens(supportScreens);
    });
    return function () {
      return ResponsiveObserve.unsubscribe(token);
    };
  }, []);
  return screens;
}

var autoAdjustOverflow$2 = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset$2 = [0, 0];
var placements$2 = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow$2,
    offset: [-4, 0],
    targetOffset: targetOffset$2
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow$2,
    offset: [4, 0],
    targetOffset: targetOffset$2
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow$2,
    offset: [0, -4],
    targetOffset: targetOffset$2
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow$2,
    offset: [0, 4],
    targetOffset: targetOffset$2
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow$2,
    offset: [0, -4],
    targetOffset: targetOffset$2
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow$2,
    offset: [-4, 0],
    targetOffset: targetOffset$2
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow$2,
    offset: [0, -4],
    targetOffset: targetOffset$2
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow$2,
    offset: [4, 0],
    targetOffset: targetOffset$2
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow$2,
    offset: [0, 4],
    targetOffset: targetOffset$2
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow$2,
    offset: [4, 0],
    targetOffset: targetOffset$2
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow$2,
    offset: [0, 4],
    targetOffset: targetOffset$2
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow$2,
    offset: [-4, 0],
    targetOffset: targetOffset$2
  }
};

var Content = function Content(props) {
  var overlay = props.overlay,
      prefixCls = props.prefixCls,
      id = props.id,
      overlayInnerStyle = props.overlayInnerStyle;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    id: id,
    role: "tooltip",
    style: overlayInnerStyle
  }, typeof overlay === 'function' ? overlay() : overlay);
};

var Tooltip$2 = function Tooltip(props, ref) {
  var overlayClassName = props.overlayClassName,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      _props$mouseEnterDela = props.mouseEnterDelay,
      mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      overlayStyle = props.overlayStyle,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
      children = props.children,
      onVisibleChange = props.onVisibleChange,
      afterVisibleChange = props.afterVisibleChange,
      transitionName = props.transitionName,
      animation = props.animation,
      motion = props.motion,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'right' : _props$placement,
      _props$align = props.align,
      align = _props$align === void 0 ? {} : _props$align,
      _props$destroyTooltip = props.destroyTooltipOnHide,
      destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
      defaultVisible = props.defaultVisible,
      getTooltipContainer = props.getTooltipContainer,
      overlayInnerStyle = props.overlayInnerStyle,
      restProps = _objectWithoutProperties$1(props, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"]);

  var domRef = useRef(null);
  useImperativeHandle(ref, function () {
    return domRef.current;
  });

  var extraProps = _objectSpread2$1({}, restProps);

  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  var getPopupElement = function getPopupElement() {
    var _props$arrowContent = props.arrowContent,
        arrowContent = _props$arrowContent === void 0 ? null : _props$arrowContent,
        overlay = props.overlay,
        id = props.id;
    return [/*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-arrow"),
      key: "arrow"
    }, arrowContent), /*#__PURE__*/React.createElement(Content, {
      key: "content",
      prefixCls: prefixCls,
      id: id,
      overlay: overlay,
      overlayInnerStyle: overlayInnerStyle
    })];
  };

  var destroyTooltip = false;
  var autoDestroy = false;

  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && _typeof$4(destroyTooltipOnHide) === 'object') {
    var keepParent = destroyTooltipOnHide.keepParent;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }

  return /*#__PURE__*/React.createElement(Trigger, _extends$2({
    popupClassName: overlayClassName,
    prefixCls: prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: placements$2,
    popupPlacement: placement,
    ref: domRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    destroyPopupOnHide: destroyTooltip,
    autoDestroy: autoDestroy,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: overlayStyle,
    mouseEnterDelay: mouseEnterDelay
  }, extraProps), children);
};

var Tooltip$3 = /*#__PURE__*/forwardRef(Tooltip$2);

var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var targetOffset$1 = [0, 0];
function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }

  return _extends$2(_extends$2({}, autoAdjustOverflowDisabled), autoAdjustOverflow);
}
function getPlacements(config) {
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === void 0 ? 4 : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === void 0 ? 8 : _config$verticalArrow,
      autoAdjustOverflow = config.autoAdjustOverflow;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? _extends$2(_extends$2({}, placementMap[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: targetOffset$1
    }) : _extends$2(_extends$2({}, placements$2[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

tuple('success', 'processing', 'error', 'default', 'warning'); // eslint-disable-next-line import/prefer-default-export

var PresetColorTypes = tuple('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');

var __rest$e = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var splitObject = function splitObject(obj, keys) {
  var picked = {};

  var omitted = _extends$2({}, obj);

  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};

var PresetColorRegex = new RegExp("^(".concat(PresetColorTypes.join('|'), ")(-inverse)?$")); // Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18

function getDisabledCompatibleChildren(element, prefixCls) {
  var elementType = element.type;

  if ((elementType.__ANT_BUTTON === true || elementType.__ANT_SWITCH === true || elementType.__ANT_CHECKBOX === true || element.type === 'button') && element.props.disabled) {
    // Pick some layout related style properties up to span
    // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
    var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
        picked = _splitObject.picked,
        omitted = _splitObject.omitted;

    var spanStyle = _extends$2(_extends$2({
      display: 'inline-block'
    }, picked), {
      cursor: 'not-allowed',
      width: element.props.block ? '100%' : null
    });

    var buttonStyle = _extends$2(_extends$2({}, omitted), {
      pointerEvents: 'none'
    });

    var child = cloneElement(element, {
      style: buttonStyle,
      className: null
    });
    return /*#__PURE__*/React.createElement("span", {
      style: spanStyle,
      className: classnames(element.props.className, "".concat(prefixCls, "-disabled-compatible-wrapper"))
    }, child);
  }

  return element;
}

var Tooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames2;

  var _React$useContext = React.useContext(ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _useMergedState = useControlledState(false, {
    value: props.visible,
    defaultValue: props.defaultVisible
  }),
      _useMergedState2 = _slicedToArray$3(_useMergedState, 2),
      visible = _useMergedState2[0],
      setVisible = _useMergedState2[1];

  var isNoTitle = function isNoTitle() {
    var title = props.title,
        overlay = props.overlay;
    return !title && !overlay && title !== 0; // overlay for old version compatibility
  };

  var onVisibleChange = function onVisibleChange(vis) {
    var _a;

    setVisible(isNoTitle() ? false : vis);

    if (!isNoTitle()) {
      (_a = props.onVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props, vis);
    }
  };

  var getTooltipPlacements = function getTooltipPlacements() {
    var builtinPlacements = props.builtinPlacements,
        arrowPointAtCenter = props.arrowPointAtCenter,
        autoAdjustOverflow = props.autoAdjustOverflow;
    return builtinPlacements || getPlacements({
      arrowPointAtCenter: arrowPointAtCenter,
      autoAdjustOverflow: autoAdjustOverflow
    });
  }; // 动态设置动画点


  var onPopupAlign = function onPopupAlign(domNode, align) {
    var placements = getTooltipPlacements(); // 当前返回的位置

    var placement = Object.keys(placements).filter(function (key) {
      return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
    })[0];

    if (!placement) {
      return;
    } // 根据当前坐标设置动画点


    var rect = domNode.getBoundingClientRect();
    var transformOrigin = {
      top: '50%',
      left: '50%'
    };

    if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
      transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
    } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
      transformOrigin.top = "".concat(-align.offset[1], "px");
    }

    if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
      transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
    } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
      transformOrigin.left = "".concat(-align.offset[0], "px");
    }

    domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
  };

  var getOverlay = function getOverlay() {
    var title = props.title,
        overlay = props.overlay;

    if (title === 0) {
      return title;
    }

    return overlay || title || '';
  };

  var getPopupContainer = props.getPopupContainer,
      otherProps = __rest$e(props, ["getPopupContainer"]);

  var customizePrefixCls = props.prefixCls,
      openClassName = props.openClassName,
      getTooltipContainer = props.getTooltipContainer,
      overlayClassName = props.overlayClassName,
      color = props.color,
      overlayInnerStyle = props.overlayInnerStyle,
      children = props.children;
  var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var tempVisible = visible; // Hide tooltip when there is no title

  if (!('visible' in props) && isNoTitle()) {
    tempVisible = false;
  }

  var child = getDisabledCompatibleChildren(isValidElement(children) ? children : /*#__PURE__*/React.createElement("span", null, children), prefixCls);
  var childProps = child.props;
  var childCls = classnames(childProps.className, _defineProperty$4({}, openClassName || "".concat(prefixCls, "-open"), true));
  var customOverlayClassName = classnames(overlayClassName, (_classNames2 = {}, _defineProperty$4(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty$4(_classNames2, "".concat(prefixCls, "-").concat(color), color && PresetColorRegex.test(color)), _classNames2));
  var formattedOverlayInnerStyle = overlayInnerStyle;
  var arrowContentStyle;

  if (color && !PresetColorRegex.test(color)) {
    formattedOverlayInnerStyle = _extends$2(_extends$2({}, overlayInnerStyle), {
      background: color
    });
    arrowContentStyle = {
      background: color
    };
  }

  return /*#__PURE__*/React.createElement(Tooltip$3, _extends$2({}, otherProps, {
    prefixCls: prefixCls,
    overlayClassName: customOverlayClassName,
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: ref,
    builtinPlacements: getTooltipPlacements(),
    overlay: getOverlay(),
    visible: tempVisible,
    onVisibleChange: onVisibleChange,
    onPopupAlign: onPopupAlign,
    overlayInnerStyle: formattedOverlayInnerStyle,
    arrowContent: /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-arrow-content"),
      style: arrowContentStyle
    }),
    motion: {
      motionName: getTransitionName(rootPrefixCls, 'zoom-big-fast', props.transitionName),
      motionDeadline: 1000
    }
  }), tempVisible ? cloneElement(child, {
    className: childCls
  }) : child);
});
Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  placement: 'top',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
var Tooltip$1 = Tooltip;

var autoAdjustOverflow$1 = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements$1 = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};

function Dropdown$2(props, ref) {
  var _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? false : _props$arrow,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,
      transitionName = props.transitionName,
      animation = props.animation,
      align = props.align,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
      _props$placements = props.placements,
      placements = _props$placements === void 0 ? placements$1 : _props$placements,
      getPopupContainer = props.getPopupContainer,
      showAction = props.showAction,
      hideAction = props.hideAction,
      overlayClassName = props.overlayClassName,
      overlayStyle = props.overlayStyle,
      visible = props.visible,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      otherProps = _objectWithoutProperties$1(props, ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger"]);

  var _React$useState = React.useState(),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      triggerVisible = _React$useState2[0],
      setTriggerVisible = _React$useState2[1];

  var mergedVisible = 'visible' in props ? visible : triggerVisible;
  var triggerRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return triggerRef.current;
  });

  var getOverlayElement = function getOverlayElement() {
    var overlay = props.overlay;
    var overlayElement;

    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }

    return overlayElement;
  };

  var onClick = function onClick(e) {
    var onOverlayClick = props.onOverlayClick;
    var overlayProps = getOverlayElement().props;
    setTriggerVisible(false);

    if (onOverlayClick) {
      onOverlayClick(e);
    }

    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  };

  var onVisibleChange = function onVisibleChange(visible) {
    var onVisibleChange = props.onVisibleChange;
    setTriggerVisible(visible);

    if (typeof onVisibleChange === 'function') {
      onVisibleChange(visible);
    }
  };

  var getMenuElement = function getMenuElement() {
    var overlayElement = getOverlayElement();
    var extraOverlayProps = {
      prefixCls: "".concat(prefixCls, "-menu"),
      onClick: onClick
    };

    if (typeof overlayElement.type === 'string') {
      delete extraOverlayProps.prefixCls;
    }

    return React.createElement(React.Fragment, null, arrow && React.createElement("div", {
      className: "".concat(prefixCls, "-arrow")
    }), React.cloneElement(overlayElement, extraOverlayProps));
  };

  var getMenuElementOrLambda = function getMenuElementOrLambda() {
    var overlay = props.overlay;

    if (typeof overlay === 'function') {
      return getMenuElement;
    }

    return getMenuElement();
  };

  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {
    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
        alignPoint = props.alignPoint;

    if ('minOverlayWidthMatchTrigger' in props) {
      return minOverlayWidthMatchTrigger;
    }

    return !alignPoint;
  };

  var getOpenClassName = function getOpenClassName() {
    var openClassName = props.openClassName;

    if (openClassName !== undefined) {
      return openClassName;
    }

    return "".concat(prefixCls, "-open");
  };

  var renderChildren = function renderChildren() {
    var children = props.children;
    var childrenProps = children.props ? children.props : {};
    var childClassName = classnames(childrenProps.className, getOpenClassName());
    return triggerVisible && children ? React.cloneElement(children, {
      className: childClassName
    }) : children;
  };

  var triggerHideAction = hideAction;

  if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
    triggerHideAction = ['click'];
  }

  return React.createElement(Trigger, Object.assign({}, otherProps, {
    prefixCls: prefixCls,
    ref: triggerRef,
    popupClassName: classnames(overlayClassName, _defineProperty$4({}, "".concat(prefixCls, "-show-arrow"), arrow)),
    popupStyle: overlayStyle,
    builtinPlacements: placements,
    action: trigger,
    showAction: showAction,
    hideAction: triggerHideAction || [],
    popupPlacement: placement,
    popupAlign: align,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupVisible: mergedVisible,
    stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
    popup: getMenuElementOrLambda(),
    onPopupVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer
  }), renderChildren());
}

var Dropdown$3 = React.forwardRef(Dropdown$2);

// This icon file is generated automatically.
var RightOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
      }
    }]
  },
  "name": "right",
  "theme": "outlined"
};
var RightOutlinedSvg = RightOutlined$2;

// GENERATE BY ./scripts/generate.ts

var RightOutlined = function RightOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: RightOutlinedSvg
  }));
};

RightOutlined.displayName = 'RightOutlined';
var RightOutlined$1 = /*#__PURE__*/React.forwardRef(RightOutlined);

// This icon file is generated automatically.
var EllipsisOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"
      }
    }]
  },
  "name": "ellipsis",
  "theme": "outlined"
};
var EllipsisOutlinedSvg = EllipsisOutlined$2;

// GENERATE BY ./scripts/generate.ts

var EllipsisOutlined = function EllipsisOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: EllipsisOutlinedSvg
  }));
};

EllipsisOutlined.displayName = 'EllipsisOutlined';
var EllipsisOutlined$1 = /*#__PURE__*/React.forwardRef(EllipsisOutlined);

var UnreachableException = function UnreachableException(value) {
  _classCallCheck$2(this, UnreachableException);

  return new Error("unreachable case: ".concat(JSON.stringify(value)));
};

var __rest$d = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonGroup$1 = function ButtonGroup(props) {
  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest$d(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';
        break;

      case 'middle':
      case undefined:
        break;

      default:
        // eslint-disable-next-line no-console
        console.warn(new UnreachableException(size));
    }

    var classes = classnames(prefixCls, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty$4(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/React.createElement("div", _extends$2({}, others, {
      className: classes
    }));
  });
};

var Group$3 = ButtonGroup$1;

var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = wrapperRaf$1(internalCallback);
    }
  }

  ids[myId] = wrapperRaf$1(internalCallback);
  return myId;
}

wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;
  wrapperRaf$1.cancel(ids[pid]);
  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage

var styleForPseudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {

  return !element || element.offsetParent === null || element.hidden;
}

function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);

  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }

  return true;
}

var Wave = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Wave, _React$Component);

  var _super = _createSuper$1(Wave);

  function Wave() {
    var _this;

    _classCallCheck$2(this, Wave);

    _this = _super.apply(this, arguments);
    _this.containerRef = /*#__PURE__*/React.createRef();
    _this.animationStart = false;
    _this.destroyed = false;

    _this.onClick = function (node, waveColor) {
      var _a, _b;

      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');

      var _assertThisInitialize = _assertThisInitialized$1(_this),
          extraNode = _assertThisInitialize.extraNode;

      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = "".concat(getPrefixCls(''), "-click-animating-node");

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparent or grey

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        extraNode.style.borderColor = waveColor;
        var nodeRoot = ((_a = node.getRootNode) === null || _a === void 0 ? void 0 : _a.call(node)) || node.ownerDocument;
        var nodeBody = nodeRoot instanceof Document ? nodeRoot.body : (_b = nodeRoot.firstChild) !== null && _b !== void 0 ? _b : nodeRoot;
        styleForPseudo = updateCSS("\n      [".concat(getPrefixCls(''), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(''), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }"), 'antd-wave', {
          csp: _this.csp,
          attachTo: nodeBody
        });
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      ['transition', 'animation'].forEach(function (name) {
        node.addEventListener("".concat(name, "start"), _this.onTransitionStart);
        node.addEventListener("".concat(name, "end"), _this.onTransitionEnd);
      });
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroyed) {
        return;
      }

      var node = _this.containerRef.current;

      if (!e || e.target !== node || _this.animationStart) {
        return;
      }

      _this.resetEffect(node);
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);
        wrapperRaf.cancel(_this.animationStartId);
        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = wrapperRaf(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      if (! /*#__PURE__*/React.isValidElement(children)) return children;
      var ref = _this.containerRef;

      if (supportRef(children)) {
        ref = composeRef(children.ref, _this.containerRef);
      }

      return cloneElement(children, {
        ref: ref
      });
    };

    return _this;
  }

  _createClass$2(Wave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = this.containerRef.current;

      if (!node || node.nodeType !== 1) {
        return;
      }

      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }

      this.destroyed = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var getPrefixCls = this.context.getPrefixCls;
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? "".concat(getPrefixCls(''), "-click-animating") : "".concat(getPrefixCls(''), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      var _this2 = this;

      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

      if (styleForPseudo) {
        styleForPseudo.innerHTML = '';
      }

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      ['transition', 'animation'].forEach(function (name) {
        node.removeEventListener("".concat(name, "start"), _this2.onTransitionStart);
        node.removeEventListener("".concat(name, "end"), _this2.onTransitionEnd);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderWave);
    }
  }]);

  return Wave;
}(React.Component);
Wave.contextType = ConfigContext;

var getCollapsedWidth = function getCollapsedWidth() {
  return {
    width: 0,
    opacity: 0,
    transform: 'scale(0)'
  };
};

var getRealWidth = function getRealWidth(node) {
  return {
    width: node.scrollWidth,
    opacity: 1,
    transform: 'scale(1)'
  };
};

var LoadingIcon = function LoadingIcon(_ref) {
  var prefixCls = _ref.prefixCls,
      loading = _ref.loading,
      existIcon = _ref.existIcon;
  var visible = !!loading;

  if (existIcon) {
    return /*#__PURE__*/React__default.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon")
    }, /*#__PURE__*/React__default.createElement(LoadingOutlined$1, null));
  }

  return /*#__PURE__*/React__default.createElement(CSSMotion, {
    visible: visible // We do not really use this motionName
    ,
    motionName: "".concat(prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, function (_ref2, ref) {
    var className = _ref2.className,
        style = _ref2.style;
    return /*#__PURE__*/React__default.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon"),
      style: style,
      ref: ref
    }, /*#__PURE__*/React__default.createElement(LoadingOutlined$1, {
      className: className
    }));
  });
};

var LoadingIcon$1 = LoadingIcon;

var __rest$c = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
}

function isUnborderedButtonType(type) {
  return type === 'text' || type === 'link';
}

function isReactFragment(node) {
  return /*#__PURE__*/React.isValidElement(node) && node.type === React.Fragment;
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return cloneElement(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }

  if (typeof child === 'string') {
    return isTwoCNChar(child) ? /*#__PURE__*/React.createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/React.createElement("span", null, child);
  }

  if (isReactFragment(child)) {
    return /*#__PURE__*/React.createElement("span", null, child);
  }

  return child;
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  React.Children.forEach(children, function (child) {
    var type = _typeof$4(child);

    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return React.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}

tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
tuple('circle', 'round');
tuple('submit', 'button', 'reset');

var InternalButton = function InternalButton(props, ref) {
  var _classNames;

  var _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      customizePrefixCls = props.prefixCls,
      type = props.type,
      danger = props.danger,
      shape = props.shape,
      customizeSize = props.size,
      className = props.className,
      children = props.children,
      icon = props.icon,
      _props$ghost = props.ghost,
      ghost = _props$ghost === void 0 ? false : _props$ghost,
      _props$block = props.block,
      block = _props$block === void 0 ? false : _props$block,
      _props$htmlType = props.htmlType,
      htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
      rest = __rest$c(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block", "htmlType"]);

  var size = React.useContext(SizeContext$1);

  var _React$useState = React.useState(!!loading),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      innerLoading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = _slicedToArray$3(_React$useState3, 2),
      hasTwoCNChar = _React$useState4[0],
      setHasTwoCNChar = _React$useState4[1];

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton,
      direction = _React$useContext.direction;

  var buttonRef = ref || /*#__PURE__*/React.createRef();
  var delayTimeoutRef = React.useRef();

  var isNeedInserted = function isNeedInserted() {
    return React.Children.count(children) === 1 && !icon && !isUnborderedButtonType(type);
  };

  var fixTwoCNChar = function fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }

    var buttonText = buttonRef.current.textContent;

    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }; // =============== Update Loading ===============


  var loadingOrDelay;

  if (_typeof$4(loading) === 'object' && loading.delay) {
    loadingOrDelay = loading.delay || true;
  } else {
    loadingOrDelay = !!loading;
  }

  React.useEffect(function () {
    clearTimeout(delayTimeoutRef.current);

    if (typeof loadingOrDelay === 'number') {
      delayTimeoutRef.current = window.setTimeout(function () {
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
  }, [loadingOrDelay]);
  React.useEffect(fixTwoCNChar, [buttonRef]);

  var handleClick = function handleClick(e) {
    var _a;

    var onClick = props.onClick,
        disabled = props.disabled; // https://github.com/ant-design/ant-design/issues/30207

    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }

    (_a = onClick) === null || _a === void 0 ? void 0 : _a(e);
  };

  devWarning(!(typeof icon === 'string' && icon.length > 2), 'Button', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));
  devWarning(!(ghost && isUnborderedButtonType(type)), 'Button', "`link` or `text` button can't be a `ghost` button.");
  var prefixCls = getPrefixCls('btn', customizePrefixCls);
  var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
  // small => sm

  var sizeCls = '';

  switch (customizeSize || size) {
    case 'large':
      sizeCls = 'lg';
      break;

    case 'small':
      sizeCls = 'sm';
      break;
  }

  var iconType = innerLoading ? 'loading' : icon;
  var classes = classnames(prefixCls, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty$4(_classNames, "".concat(prefixCls, "-").concat(shape), shape), _defineProperty$4(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty$4(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && !!iconType), _defineProperty$4(_classNames, "".concat(prefixCls, "-background-ghost"), ghost && !isUnborderedButtonType(type)), _defineProperty$4(_classNames, "".concat(prefixCls, "-loading"), innerLoading), _defineProperty$4(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), _defineProperty$4(_classNames, "".concat(prefixCls, "-block"), block), _defineProperty$4(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), _defineProperty$4(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  var iconNode = icon && !innerLoading ? icon : /*#__PURE__*/React.createElement(LoadingIcon$1, {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  });
  var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;
  var linkButtonRestProps = omit(rest, ['navigate']);

  if (linkButtonRestProps.href !== undefined) {
    return /*#__PURE__*/React.createElement("a", _extends$2({}, linkButtonRestProps, {
      className: classes,
      onClick: handleClick,
      ref: buttonRef
    }), iconNode, kids);
  }

  var buttonNode = /*#__PURE__*/React.createElement("button", _extends$2({}, rest, {
    type: htmlType,
    className: classes,
    onClick: handleClick,
    ref: buttonRef
  }), iconNode, kids);

  if (isUnborderedButtonType(type)) {
    return buttonNode;
  }

  return /*#__PURE__*/React.createElement(Wave, null, buttonNode);
};

var Button = /*#__PURE__*/React.forwardRef(InternalButton);
Button.displayName = 'Button';
Button.Group = Group$3;
Button.__ANT_BUTTON = true;
var Button$1 = Button;

var __rest$b = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var ButtonGroup = Button$1.Group;

var DropdownButton = function DropdownButton(props) {
  var _React$useContext = React.useContext(ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      type = props.type,
      disabled = props.disabled,
      onClick = props.onClick,
      htmlType = props.htmlType,
      children = props.children,
      className = props.className,
      overlay = props.overlay,
      trigger = props.trigger,
      align = props.align,
      visible = props.visible,
      onVisibleChange = props.onVisibleChange,
      placement = props.placement,
      getPopupContainer = props.getPopupContainer,
      href = props.href,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(EllipsisOutlined$1, null) : _props$icon,
      title = props.title,
      buttonsRender = props.buttonsRender,
      mouseEnterDelay = props.mouseEnterDelay,
      mouseLeaveDelay = props.mouseLeaveDelay,
      overlayClassName = props.overlayClassName,
      overlayStyle = props.overlayStyle,
      restProps = __rest$b(props, ["prefixCls", "type", "disabled", "onClick", "htmlType", "children", "className", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle"]);

  var prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
  var dropdownProps = {
    align: align,
    overlay: overlay,
    disabled: disabled,
    trigger: disabled ? [] : trigger,
    onVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    overlayClassName: overlayClassName,
    overlayStyle: overlayStyle
  };

  if ('visible' in props) {
    dropdownProps.visible = visible;
  }

  if ('placement' in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }

  var leftButton = /*#__PURE__*/React.createElement(Button$1, {
    type: type,
    disabled: disabled,
    onClick: onClick,
    htmlType: htmlType,
    href: href,
    title: title
  }, children);
  var rightButton = /*#__PURE__*/React.createElement(Button$1, {
    type: type,
    icon: icon
  });

  var _buttonsRender = buttonsRender([leftButton, rightButton]),
      _buttonsRender2 = _slicedToArray$3(_buttonsRender, 2),
      leftButtonToRender = _buttonsRender2[0],
      rightButtonToRender = _buttonsRender2[1];

  return /*#__PURE__*/React.createElement(ButtonGroup, _extends$2({}, restProps, {
    className: classnames(prefixCls, className)
  }), leftButtonToRender, /*#__PURE__*/React.createElement(Dropdown$1, dropdownProps, rightButtonToRender));
};

DropdownButton.__ANT_BUTTON = true;
DropdownButton.defaultProps = {
  type: 'default',
  buttonsRender: function buttonsRender(buttons) {
    return buttons;
  }
};
var DropdownButton$1 = DropdownButton;

tuple('topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight');

var Dropdown = function Dropdown(props) {
  var _React$useContext = React.useContext(ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var getTransitionName = function getTransitionName() {
    var rootPrefixCls = getPrefixCls();
    var _props$placement = props.placement,
        placement = _props$placement === void 0 ? '' : _props$placement,
        transitionName = props.transitionName;

    if (transitionName !== undefined) {
      return transitionName;
    }

    if (placement.indexOf('top') >= 0) {
      return "".concat(rootPrefixCls, "-slide-down");
    }

    return "".concat(rootPrefixCls, "-slide-up");
  };

  var renderOverlay = function renderOverlay(prefixCls) {
    // rc-dropdown already can process the function of overlay, but we have check logic here.
    // So we need render the element to check and pass back to rc-dropdown.
    var overlay = props.overlay;
    var overlayNode;

    if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }

    overlayNode = React.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/React.createElement("span", null, overlayNode) : overlayNode);
    var overlayProps = overlayNode.props; // Warning if use other mode

    devWarning(!overlayProps.mode || overlayProps.mode === 'vertical', 'Dropdown', "mode=\"".concat(overlayProps.mode, "\" is not supported for Dropdown's Menu.")); // menu cannot be selectable in dropdown defaultly

    var _overlayProps$selecta = overlayProps.selectable,
        selectable = _overlayProps$selecta === void 0 ? false : _overlayProps$selecta,
        expandIcon = overlayProps.expandIcon;
    var overlayNodeExpandIcon = typeof expandIcon !== 'undefined' && /*#__PURE__*/React.isValidElement(expandIcon) ? expandIcon : /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-menu-submenu-arrow")
    }, /*#__PURE__*/React.createElement(RightOutlined$1, {
      className: "".concat(prefixCls, "-menu-submenu-arrow-icon")
    }));
    var fixedModeOverlay = typeof overlayNode.type === 'string' ? overlayNode : cloneElement(overlayNode, {
      mode: 'vertical',
      selectable: selectable,
      expandIcon: overlayNodeExpandIcon
    });
    return fixedModeOverlay;
  };

  var getPlacement = function getPlacement() {
    var placement = props.placement;

    if (placement !== undefined) {
      return placement;
    }

    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };

  var arrow = props.arrow,
      customizePrefixCls = props.prefixCls,
      children = props.children,
      trigger = props.trigger,
      disabled = props.disabled,
      getPopupContainer = props.getPopupContainer,
      overlayClassName = props.overlayClassName;
  var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  var child = React.Children.only(children);
  var dropdownTrigger = cloneElement(child, {
    className: classnames("".concat(prefixCls, "-trigger"), _defineProperty$4({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), child.props.className),
    disabled: disabled
  });
  var overlayClassNameCustomized = classnames(overlayClassName, _defineProperty$4({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
  var triggerActions = disabled ? [] : trigger;
  var alignPoint;

  if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
    alignPoint = true;
  }

  return /*#__PURE__*/React.createElement(Dropdown$3, _extends$2({
    arrow: arrow,
    alignPoint: alignPoint
  }, props, {
    overlayClassName: overlayClassNameCustomized,
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: getTransitionName(),
    trigger: triggerActions,
    overlay: function overlay() {
      return renderOverlay(prefixCls);
    },
    placement: getPlacement()
  }), dropdownTrigger);
};

Dropdown.Button = DropdownButton$1;
Dropdown.defaultProps = {
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1
};
var Dropdown$1 = Dropdown;

//
var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
};

var MenuContext$2 = /*#__PURE__*/React.createContext(null);

function mergeProps(origin, target) {
  var clone = _objectSpread2$1({}, origin);

  Object.keys(target).forEach(function (key) {
    var value = target[key];

    if (value !== undefined) {
      clone[key] = value;
    }
  });
  return clone;
}

function InheritableContextProvider(_ref) {
  var children = _ref.children,
      locked = _ref.locked,
      restProps = _objectWithoutProperties$1(_ref, ["children", "locked"]);

  var context = React.useContext(MenuContext$2);
  var inheritableContext = useMemo(function () {
    return mergeProps(context, restProps);
  }, [context, restProps], function (prev, next) {
    return !locked && (prev[0] !== next[0] || !shallowequal(prev[1], next[1]));
  });
  return /*#__PURE__*/React.createElement(MenuContext$2.Provider, {
    value: inheritableContext
  }, children);
}

function useActive(eventKey, disabled, onMouseEnter, onMouseLeave) {
  var _React$useContext = React.useContext(MenuContext$2),
      activeKey = _React$useContext.activeKey,
      onActive = _React$useContext.onActive,
      onInactive = _React$useContext.onInactive;

  var ret = {
    active: activeKey === eventKey
  }; // Skip when disabled

  if (!disabled) {
    ret.onMouseEnter = function (domEvent) {
      onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
        key: eventKey,
        domEvent: domEvent
      });
      onActive(eventKey);
    };

    ret.onMouseLeave = function (domEvent) {
      onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
        key: eventKey,
        domEvent: domEvent
      });
      onInactive(eventKey);
    };
  }

  return ret;
}

/**
 * `onClick` event return `info.item` which point to react node directly.
 * We should warning this since it will not work on FC.
 */

function warnItemProp(_ref) {
  var item = _ref.item,
      restInfo = _objectWithoutProperties$1(_ref, ["item"]);

  Object.defineProperty(restInfo, 'item', {
    get: function get() {
      warningOnce(false, '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.');
      return item;
    }
  });
  return restInfo;
}

function Icon(_ref) {
  var icon = _ref.icon,
      props = _ref.props,
      children = _ref.children;
  var iconNode;

  if (typeof icon === 'function') {
    iconNode = /*#__PURE__*/React.createElement(icon, _objectSpread2$1({}, props));
  } else {
    // Compatible for origin definition
    iconNode = icon;
  }

  return iconNode || children || null;
}

function useDirectionStyle(level) {
  var _React$useContext = React.useContext(MenuContext$2),
      mode = _React$useContext.mode,
      rtl = _React$useContext.rtl,
      inlineIndent = _React$useContext.inlineIndent;

  if (mode !== 'inline') {
    return null;
  }

  var len = level;
  return rtl ? {
    paddingRight: len * inlineIndent
  } : {
    paddingLeft: len * inlineIndent
  };
}

var EmptyList = [];
var PathRegisterContext = /*#__PURE__*/React.createContext(null);
function useMeasure() {
  return React.useContext(PathRegisterContext);
} // ========================= Path Tracker ==========================

var PathTrackerContext = /*#__PURE__*/React.createContext(EmptyList);
function useFullPath$1(eventKey) {
  var parentKeyPath = React.useContext(PathTrackerContext);
  return React.useMemo(function () {
    return eventKey !== undefined ? [].concat(_toConsumableArray(parentKeyPath), [eventKey]) : parentKeyPath;
  }, [parentKeyPath, eventKey]);
}
var PathUserContext = /*#__PURE__*/React.createContext(null);

var IdContext = /*#__PURE__*/React.createContext(null);
function getMenuId(uuid, eventKey) {
  if (uuid === undefined) {
    return null;
  }

  return "".concat(uuid, "-").concat(eventKey);
}
/**
 * Get `data-menu-id`
 */

function useMenuId(eventKey) {
  var id = React.useContext(IdContext);
  return getMenuId(id, eventKey);
}

// We have to use class component here.
// This should be removed from doc & api in future.

var LegacyMenuItem = /*#__PURE__*/function (_React$Component) {
  _inherits$1(LegacyMenuItem, _React$Component);

  var _super = _createSuper$1(LegacyMenuItem);

  function LegacyMenuItem() {
    _classCallCheck$2(this, LegacyMenuItem);

    return _super.apply(this, arguments);
  }

  _createClass$2(LegacyMenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          attribute = _this$props.attribute,
          elementRef = _this$props.elementRef,
          restProps = _objectWithoutProperties$1(_this$props, ["title", "attribute", "elementRef"]);

      var passedProps = omit(restProps, ['eventKey']);
      warningOnce(!attribute, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.');
      return /*#__PURE__*/React.createElement(ForwardOverflow.Item, _extends$2({}, attribute, {
        title: typeof title === 'string' ? title : undefined
      }, passedProps, {
        ref: elementRef
      }));
    }
  }]);

  return LegacyMenuItem;
}(React.Component);
/**
 * Real Menu Item component
 */


var InternalMenuItem = function InternalMenuItem(props) {
  var _classNames;

  var style = props.style,
      className = props.className,
      eventKey = props.eventKey,
      warnKey = props.warnKey,
      disabled = props.disabled,
      itemIcon = props.itemIcon,
      children = props.children,
      role = props.role,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      onFocus = props.onFocus,
      restProps = _objectWithoutProperties$1(props, ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"]);

  var domDataId = useMenuId(eventKey);

  var _React$useContext = React.useContext(MenuContext$2),
      prefixCls = _React$useContext.prefixCls,
      onItemClick = _React$useContext.onItemClick,
      contextDisabled = _React$useContext.disabled,
      overflowDisabled = _React$useContext.overflowDisabled,
      contextItemIcon = _React$useContext.itemIcon,
      selectedKeys = _React$useContext.selectedKeys,
      onActive = _React$useContext.onActive;

  var itemCls = "".concat(prefixCls, "-item");
  var legacyMenuItemRef = React.useRef();
  var elementRef = React.useRef();
  var mergedDisabled = contextDisabled || disabled;
  var connectedKeys = useFullPath$1(eventKey); // ================================ Warn ================================

  if (warnKey) {
    warningOnce(false, 'MenuItem should not leave undefined `key`.');
  } // ============================= Info =============================


  var getEventInfo = function getEventInfo(e) {
    return {
      key: eventKey,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: _toConsumableArray(connectedKeys).reverse(),
      item: legacyMenuItemRef.current,
      domEvent: e
    };
  }; // ============================= Icon =============================


  var mergedItemIcon = itemIcon || contextItemIcon; // ============================ Active ============================

  var _useActive = useActive(eventKey, mergedDisabled, onMouseEnter, onMouseLeave),
      active = _useActive.active,
      activeProps = _objectWithoutProperties$1(_useActive, ["active"]); // ============================ Select ============================


  var selected = selectedKeys.includes(eventKey); // ======================== DirectionStyle ========================

  var directionStyle = useDirectionStyle(connectedKeys.length); // ============================ Events ============================

  var onInternalClick = function onInternalClick(e) {
    if (mergedDisabled) {
      return;
    }

    var info = getEventInfo(e);
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  };

  var onInternalKeyDown = function onInternalKeyDown(e) {
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);

    if (e.which === KeyCode.ENTER) {
      var info = getEventInfo(e); // Legacy. Key will also trigger click event

      onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
      onItemClick(info);
    }
  };
  /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */


  var onInternalFocus = function onInternalFocus(e) {
    onActive(eventKey);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  }; // ============================ Render ============================


  var optionRoleProps = {};

  if (props.role === 'option') {
    optionRoleProps['aria-selected'] = selected;
  }

  return /*#__PURE__*/React.createElement(LegacyMenuItem, _extends$2({
    ref: legacyMenuItemRef,
    elementRef: elementRef,
    role: role === null ? 'none' : role || 'menuitem',
    tabIndex: disabled ? null : -1,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId
  }, restProps, activeProps, optionRoleProps, {
    component: "li",
    "aria-disabled": disabled,
    style: _objectSpread2$1(_objectSpread2$1({}, directionStyle), style),
    className: classnames(itemCls, (_classNames = {}, _defineProperty$4(_classNames, "".concat(itemCls, "-active"), active), _defineProperty$4(_classNames, "".concat(itemCls, "-selected"), selected), _defineProperty$4(_classNames, "".concat(itemCls, "-disabled"), mergedDisabled), _classNames), className),
    onClick: onInternalClick,
    onKeyDown: onInternalKeyDown,
    onFocus: onInternalFocus
  }), children, /*#__PURE__*/React.createElement(Icon, {
    props: _objectSpread2$1(_objectSpread2$1({}, props), {}, {
      isSelected: selected
    }),
    icon: mergedItemIcon
  }));
};

function MenuItem$1(props) {
  var eventKey = props.eventKey; // ==================== Record KeyPath ====================

  var measure = useMeasure();
  var connectedKeyPath = useFullPath$1(eventKey); // eslint-disable-next-line consistent-return

  React.useEffect(function () {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function () {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);

  if (measure) {
    return null;
  } // ======================== Render ========================


  return /*#__PURE__*/React.createElement(InternalMenuItem, props);
}

function parseChildren(children, keyPath) {
  return toArray$2(children).map(function (child, index) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      var _child$props$eventKey, _child$props;

      var key = child.key;
      var eventKey = (_child$props$eventKey = (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.eventKey) !== null && _child$props$eventKey !== void 0 ? _child$props$eventKey : key;
      var emptyKey = eventKey === null || eventKey === undefined;

      if (emptyKey) {
        eventKey = "tmp_key-".concat([].concat(_toConsumableArray(keyPath), [index]).join('-'));
      }

      var cloneProps = {
        key: eventKey,
        eventKey: eventKey
      };

      if (emptyKey) {
        cloneProps.warnKey = true;
      }

      return /*#__PURE__*/React.cloneElement(child, cloneProps);
    }

    return child;
  });
}

/**
 * Cache callback function that always return same ref instead.
 * This is used for context optimization.
 */

function useMemoCallback(func) {
  var funRef = React.useRef(func);
  funRef.current = func;
  var callback = React.useCallback(function () {
    var _funRef$current;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_funRef$current = funRef.current) === null || _funRef$current === void 0 ? void 0 : _funRef$current.call.apply(_funRef$current, [funRef].concat(args));
  }, []);
  return func ? callback : undefined;
}

var InternalSubMenuList = function InternalSubMenuList(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties$1(_ref, ["className", "children"]);

  var _React$useContext = React.useContext(MenuContext$2),
      prefixCls = _React$useContext.prefixCls,
      mode = _React$useContext.mode;

  return /*#__PURE__*/React.createElement("ul", _extends$2({
    className: classnames(prefixCls, "".concat(prefixCls, "-sub"), "".concat(prefixCls, "-").concat(mode === 'inline' ? 'inline' : 'vertical'), className)
  }, restProps, {
    "data-menu-list": true,
    ref: ref
  }), children);
};

var SubMenuList = /*#__PURE__*/React.forwardRef(InternalSubMenuList);
SubMenuList.displayName = 'SubMenuList';

var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
var placementsRtl = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  rightTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  leftTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};

function getMotion(mode, motion, defaultMotions) {
  if (motion) {
    return motion;
  }

  if (defaultMotions) {
    return defaultMotions[mode] || defaultMotions.other;
  }

  return undefined;
}

var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};
function PopupTrigger(_ref) {
  var prefixCls = _ref.prefixCls,
      visible = _ref.visible,
      children = _ref.children,
      popup = _ref.popup,
      popupClassName = _ref.popupClassName,
      popupOffset = _ref.popupOffset,
      disabled = _ref.disabled,
      mode = _ref.mode,
      onVisibleChange = _ref.onVisibleChange;

  var _React$useContext = React.useContext(MenuContext$2),
      getPopupContainer = _React$useContext.getPopupContainer,
      rtl = _React$useContext.rtl,
      subMenuOpenDelay = _React$useContext.subMenuOpenDelay,
      subMenuCloseDelay = _React$useContext.subMenuCloseDelay,
      builtinPlacements = _React$useContext.builtinPlacements,
      triggerSubMenuAction = _React$useContext.triggerSubMenuAction,
      forceSubMenuRender = _React$useContext.forceSubMenuRender,
      motion = _React$useContext.motion,
      defaultMotions = _React$useContext.defaultMotions;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      innerVisible = _React$useState2[0],
      setInnerVisible = _React$useState2[1];

  var placement = rtl ? _objectSpread2$1(_objectSpread2$1({}, placementsRtl), builtinPlacements) : _objectSpread2$1(_objectSpread2$1({}, placements), builtinPlacements);
  var popupPlacement = popupPlacementMap[mode];
  var targetMotion = getMotion(mode, motion, defaultMotions);

  var mergedMotion = _objectSpread2$1(_objectSpread2$1({}, targetMotion), {}, {
    leavedClassName: "".concat(prefixCls, "-hidden"),
    removeOnLeave: false,
    motionAppear: true
  }); // Delay to change visible


  var visibleRef = React.useRef();
  React.useEffect(function () {
    visibleRef.current = wrapperRaf$1(function () {
      setInnerVisible(visible);
    });
    return function () {
      wrapperRaf$1.cancel(visibleRef.current);
    };
  }, [visible]);
  return /*#__PURE__*/React.createElement(Trigger, {
    prefixCls: prefixCls,
    popupClassName: classnames("".concat(prefixCls, "-popup"), _defineProperty$4({}, "".concat(prefixCls, "-rtl"), rtl), popupClassName),
    stretch: mode === 'horizontal' ? 'minWidth' : null,
    getPopupContainer: getPopupContainer,
    builtinPlacements: placement,
    popupPlacement: popupPlacement,
    popupVisible: innerVisible,
    popup: popup,
    popupAlign: popupOffset && {
      offset: popupOffset
    },
    action: disabled ? [] : [triggerSubMenuAction],
    mouseEnterDelay: subMenuOpenDelay,
    mouseLeaveDelay: subMenuCloseDelay,
    onPopupVisibleChange: onVisibleChange,
    forceRender: forceSubMenuRender,
    popupMotion: mergedMotion
  }, children);
}

function InlineSubMenuList(_ref) {
  var id = _ref.id,
      open = _ref.open,
      keyPath = _ref.keyPath,
      children = _ref.children;
  var fixedMode = 'inline';

  var _React$useContext = React.useContext(MenuContext$2),
      prefixCls = _React$useContext.prefixCls,
      forceSubMenuRender = _React$useContext.forceSubMenuRender,
      motion = _React$useContext.motion,
      defaultMotions = _React$useContext.defaultMotions,
      mode = _React$useContext.mode; // Always use latest mode check


  var sameModeRef = React.useRef(false);
  sameModeRef.current = mode === fixedMode; // We record `destroy` mark here since when mode change from `inline` to others.
  // The inline list should remove when motion end.

  var _React$useState = React.useState(!sameModeRef.current),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      destroy = _React$useState2[0],
      setDestroy = _React$useState2[1];

  var mergedOpen = sameModeRef.current ? open : false; // ================================= Effect =================================
  // Reset destroy state when mode change back

  React.useEffect(function () {
    if (sameModeRef.current) {
      setDestroy(false);
    }
  }, [mode]); // ================================= Render =================================

  var mergedMotion = _objectSpread2$1({}, getMotion(fixedMode, motion, defaultMotions)); // No need appear since nest inlineCollapse changed


  if (keyPath.length > 1) {
    mergedMotion.motionAppear = false;
  } // Hide inline list when mode changed and motion end


  var originOnVisibleChanged = mergedMotion.onVisibleChanged;

  mergedMotion.onVisibleChanged = function (newVisible) {
    if (!sameModeRef.current && !newVisible) {
      setDestroy(true);
    }

    return originOnVisibleChanged === null || originOnVisibleChanged === void 0 ? void 0 : originOnVisibleChanged(newVisible);
  };

  if (destroy) {
    return null;
  }

  return /*#__PURE__*/React.createElement(InheritableContextProvider, {
    mode: fixedMode,
    locked: !sameModeRef.current
  }, /*#__PURE__*/React.createElement(CSSMotion, _extends$2({
    visible: mergedOpen
  }, mergedMotion, {
    forceRender: forceSubMenuRender,
    removeOnLeave: false,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }), function (_ref2) {
    var motionClassName = _ref2.className,
        motionStyle = _ref2.style;
    return /*#__PURE__*/React.createElement(SubMenuList, {
      id: id,
      className: motionClassName,
      style: motionStyle
    }, children);
  }));
}

var InternalSubMenu = function InternalSubMenu(props) {
  var _classNames;

  var style = props.style,
      className = props.className,
      title = props.title,
      eventKey = props.eventKey,
      warnKey = props.warnKey,
      disabled = props.disabled,
      internalPopupClose = props.internalPopupClose,
      children = props.children,
      itemIcon = props.itemIcon,
      expandIcon = props.expandIcon,
      popupClassName = props.popupClassName,
      popupOffset = props.popupOffset,
      onClick = props.onClick,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onTitleClick = props.onTitleClick,
      onTitleMouseEnter = props.onTitleMouseEnter,
      onTitleMouseLeave = props.onTitleMouseLeave,
      restProps = _objectWithoutProperties$1(props, ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"]);

  var domDataId = useMenuId(eventKey);

  var _React$useContext = React.useContext(MenuContext$2),
      prefixCls = _React$useContext.prefixCls,
      mode = _React$useContext.mode,
      openKeys = _React$useContext.openKeys,
      contextDisabled = _React$useContext.disabled,
      overflowDisabled = _React$useContext.overflowDisabled,
      activeKey = _React$useContext.activeKey,
      selectedKeys = _React$useContext.selectedKeys,
      contextItemIcon = _React$useContext.itemIcon,
      contextExpandIcon = _React$useContext.expandIcon,
      onItemClick = _React$useContext.onItemClick,
      onOpenChange = _React$useContext.onOpenChange,
      onActive = _React$useContext.onActive;

  var _React$useContext2 = React.useContext(PathUserContext),
      isSubPathKey = _React$useContext2.isSubPathKey;

  var connectedPath = useFullPath$1();
  var subMenuPrefixCls = "".concat(prefixCls, "-submenu");
  var mergedDisabled = contextDisabled || disabled;
  var elementRef = React.useRef();
  var popupRef = React.useRef(); // ================================ Warn ================================

  if (warnKey) {
    warningOnce(false, 'SubMenu should not leave undefined `key`.');
  } // ================================ Icon ================================


  var mergedItemIcon = itemIcon || contextItemIcon;
  var mergedExpandIcon = expandIcon || contextExpandIcon; // ================================ Open ================================

  var originOpen = openKeys.includes(eventKey);
  var open = !overflowDisabled && originOpen; // =============================== Select ===============================

  var childrenSelected = isSubPathKey(selectedKeys, eventKey); // =============================== Active ===============================

  var _useActive = useActive(eventKey, mergedDisabled, onTitleMouseEnter, onTitleMouseLeave),
      active = _useActive.active,
      activeProps = _objectWithoutProperties$1(_useActive, ["active"]); // Fallback of active check to avoid hover on menu title or disabled item


  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      childrenActive = _React$useState2[0],
      setChildrenActive = _React$useState2[1];

  var triggerChildrenActive = function triggerChildrenActive(newActive) {
    if (!mergedDisabled) {
      setChildrenActive(newActive);
    }
  };

  var onInternalMouseEnter = function onInternalMouseEnter(domEvent) {
    triggerChildrenActive(true);
    onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
      key: eventKey,
      domEvent: domEvent
    });
  };

  var onInternalMouseLeave = function onInternalMouseLeave(domEvent) {
    triggerChildrenActive(false);
    onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
      key: eventKey,
      domEvent: domEvent
    });
  };

  var mergedActive = React.useMemo(function () {
    if (active) {
      return active;
    }

    if (mode !== 'inline') {
      return childrenActive || isSubPathKey([activeKey], eventKey);
    }

    return false;
  }, [mode, active, activeKey, childrenActive, eventKey, isSubPathKey]); // ========================== DirectionStyle ==========================

  var directionStyle = useDirectionStyle(connectedPath.length); // =============================== Events ===============================
  // >>>> Title click

  var onInternalTitleClick = function onInternalTitleClick(e) {
    // Skip if disabled
    if (mergedDisabled) {
      return;
    }

    onTitleClick === null || onTitleClick === void 0 ? void 0 : onTitleClick({
      key: eventKey,
      domEvent: e
    }); // Trigger open by click when mode is `inline`

    if (mode === 'inline') {
      onOpenChange(eventKey, !originOpen);
    }
  }; // >>>> Context for children click


  var onMergedItemClick = useMemoCallback(function (info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  }); // >>>>> Visible change

  var onPopupVisibleChange = function onPopupVisibleChange(newVisible) {
    if (mode !== 'inline') {
      onOpenChange(eventKey, newVisible);
    }
  };
  /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */


  var onInternalFocus = function onInternalFocus() {
    onActive(eventKey);
  }; // =============================== Render ===============================


  var popupId = domDataId && "".concat(domDataId, "-popup"); // >>>>> Title

  var titleNode = /*#__PURE__*/React.createElement("div", _extends$2({
    role: "menuitem",
    style: directionStyle,
    className: "".concat(subMenuPrefixCls, "-title"),
    tabIndex: mergedDisabled ? null : -1,
    ref: elementRef,
    title: typeof title === 'string' ? title : null,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId,
    "aria-expanded": open,
    "aria-haspopup": true,
    "aria-controls": popupId,
    "aria-disabled": mergedDisabled,
    onClick: onInternalTitleClick,
    onFocus: onInternalFocus
  }, activeProps), title, /*#__PURE__*/React.createElement(Icon, {
    icon: mode !== 'horizontal' ? mergedExpandIcon : null,
    props: _objectSpread2$1(_objectSpread2$1({}, props), {}, {
      isOpen: open,
      // [Legacy] Not sure why need this mark
      isSubMenu: true
    })
  }, /*#__PURE__*/React.createElement("i", {
    className: "".concat(subMenuPrefixCls, "-arrow")
  }))); // Cache mode if it change to `inline` which do not have popup motion

  var triggerModeRef = React.useRef(mode);

  if (mode !== 'inline') {
    triggerModeRef.current = connectedPath.length > 1 ? 'vertical' : mode;
  }

  if (!overflowDisabled) {
    var triggerMode = triggerModeRef.current; // Still wrap with Trigger here since we need avoid react re-mount dom node
    // Which makes motion failed

    titleNode = /*#__PURE__*/React.createElement(PopupTrigger, {
      mode: triggerMode,
      prefixCls: subMenuPrefixCls,
      visible: !internalPopupClose && open && mode !== 'inline',
      popupClassName: popupClassName,
      popupOffset: popupOffset,
      popup: /*#__PURE__*/React.createElement(InheritableContextProvider // Special handle of horizontal mode
      , {
        mode: triggerMode === 'horizontal' ? 'vertical' : triggerMode
      }, /*#__PURE__*/React.createElement(SubMenuList, {
        id: popupId,
        ref: popupRef
      }, children)),
      disabled: mergedDisabled,
      onVisibleChange: onPopupVisibleChange
    }, titleNode);
  } // >>>>> Render


  return /*#__PURE__*/React.createElement(InheritableContextProvider, {
    onItemClick: onMergedItemClick,
    mode: mode === 'horizontal' ? 'vertical' : mode,
    itemIcon: mergedItemIcon,
    expandIcon: mergedExpandIcon
  }, /*#__PURE__*/React.createElement(ForwardOverflow.Item, _extends$2({
    role: "none"
  }, restProps, {
    component: "li",
    style: style,
    className: classnames(subMenuPrefixCls, "".concat(subMenuPrefixCls, "-").concat(mode), className, (_classNames = {}, _defineProperty$4(_classNames, "".concat(subMenuPrefixCls, "-open"), open), _defineProperty$4(_classNames, "".concat(subMenuPrefixCls, "-active"), mergedActive), _defineProperty$4(_classNames, "".concat(subMenuPrefixCls, "-selected"), childrenSelected), _defineProperty$4(_classNames, "".concat(subMenuPrefixCls, "-disabled"), mergedDisabled), _classNames)),
    onMouseEnter: onInternalMouseEnter,
    onMouseLeave: onInternalMouseLeave
  }), titleNode, !overflowDisabled && /*#__PURE__*/React.createElement(InlineSubMenuList, {
    id: popupId,
    open: open,
    keyPath: connectedPath
  }, children)));
};

function SubMenu$1(props) {
  var eventKey = props.eventKey,
      children = props.children;
  var connectedKeyPath = useFullPath$1(eventKey);
  var childList = parseChildren(children, connectedKeyPath); // ==================== Record KeyPath ====================

  var measure = useMeasure(); // eslint-disable-next-line consistent-return

  React.useEffect(function () {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function () {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);
  var renderNode; // ======================== Render ========================

  if (measure) {
    renderNode = childList;
  } else {
    renderNode = /*#__PURE__*/React.createElement(InternalSubMenu, props, childList);
  }

  return /*#__PURE__*/React.createElement(PathTrackerContext.Provider, {
    value: connectedKeyPath
  }, renderNode);
}

function focusable(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isVisible(node)) {
    var nodeName = node.nodeName.toLowerCase();
    var isFocusableElement = // Focusable element
    ['input', 'select', 'textarea', 'button'].includes(nodeName) || // Editable element
    node.isContentEditable || // Anchor with href element
    nodeName === 'a' && !!node.getAttribute('href'); // Get tabIndex

    var tabIndexAttr = node.getAttribute('tabindex');
    var tabIndexNum = Number(tabIndexAttr); // Parse as number if validate

    var tabIndex = null;

    if (tabIndexAttr && !Number.isNaN(tabIndexNum)) {
      tabIndex = tabIndexNum;
    } else if (isFocusableElement && tabIndex === null) {
      tabIndex = 0;
    } // Block focusable if disabled


    if (isFocusableElement && node.disabled) {
      tabIndex = null;
    }

    return tabIndex !== null && (tabIndex >= 0 || includePositive && tabIndex < 0);
  }

  return false;
}

function getFocusNodeList(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var res = _toConsumableArray(node.querySelectorAll('*')).filter(function (child) {
    return focusable(child, includePositive);
  });

  if (focusable(node, includePositive)) {
    res.unshift(node);
  }

  return res;
}

var LEFT = KeyCode.LEFT,
    RIGHT = KeyCode.RIGHT,
    UP = KeyCode.UP,
    DOWN = KeyCode.DOWN,
    ENTER = KeyCode.ENTER,
    ESC = KeyCode.ESC;
var ArrowKeys = [UP, DOWN, LEFT, RIGHT];

function getOffset(mode, isRootLevel, isRtl, which) {
  var _inline, _horizontal, _vertical, _offsets$;

  var prev = 'prev';
  var next = 'next';
  var children = 'children';
  var parent = 'parent'; // Inline enter is special that we use unique operation

  if (mode === 'inline' && which === ENTER) {
    return {
      inlineTrigger: true
    };
  }

  var inline = (_inline = {}, _defineProperty$4(_inline, UP, prev), _defineProperty$4(_inline, DOWN, next), _inline);
  var horizontal = (_horizontal = {}, _defineProperty$4(_horizontal, LEFT, isRtl ? next : prev), _defineProperty$4(_horizontal, RIGHT, isRtl ? prev : next), _defineProperty$4(_horizontal, DOWN, children), _defineProperty$4(_horizontal, ENTER, children), _horizontal);
  var vertical = (_vertical = {}, _defineProperty$4(_vertical, UP, prev), _defineProperty$4(_vertical, DOWN, next), _defineProperty$4(_vertical, ENTER, children), _defineProperty$4(_vertical, ESC, parent), _defineProperty$4(_vertical, LEFT, isRtl ? children : parent), _defineProperty$4(_vertical, RIGHT, isRtl ? parent : children), _vertical);
  var offsets = {
    inline: inline,
    horizontal: horizontal,
    vertical: vertical,
    inlineSub: inline,
    horizontalSub: vertical,
    verticalSub: vertical
  };
  var type = (_offsets$ = offsets["".concat(mode).concat(isRootLevel ? '' : 'Sub')]) === null || _offsets$ === void 0 ? void 0 : _offsets$[which];

  switch (type) {
    case prev:
      return {
        offset: -1,
        sibling: true
      };

    case next:
      return {
        offset: 1,
        sibling: true
      };

    case parent:
      return {
        offset: -1,
        sibling: false
      };

    case children:
      return {
        offset: 1,
        sibling: false
      };

    default:
      return null;
  }
}

function findContainerUL(element) {
  var current = element;

  while (current) {
    if (current.getAttribute('data-menu-list')) {
      return current;
    }

    current = current.parentElement;
  } // Normally should not reach this line

  /* istanbul ignore next */


  return null;
}
/**
 * Find focused element within element set provided
 */


function getFocusElement(activeElement, elements) {
  var current = activeElement || document.activeElement;

  while (current) {
    if (elements.has(current)) {
      return current;
    }

    current = current.parentElement;
  }

  return null;
}
/**
 * Get focusable elements from the element set under provided container
 */


function getFocusableElements(container, elements) {
  var list = getFocusNodeList(container, true);
  return list.filter(function (ele) {
    return elements.has(ele);
  });
}

function getNextFocusElement(parentQueryContainer, elements, focusMenuElement) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1; // Key on the menu item will not get validate parent container

  if (!parentQueryContainer) {
    return null;
  } // List current level menu item elements


  var sameLevelFocusableMenuElementList = getFocusableElements(parentQueryContainer, elements); // Find next focus index

  var count = sameLevelFocusableMenuElementList.length;
  var focusIndex = sameLevelFocusableMenuElementList.findIndex(function (ele) {
    return focusMenuElement === ele;
  });

  if (offset < 0) {
    if (focusIndex === -1) {
      focusIndex = count - 1;
    } else {
      focusIndex -= 1;
    }
  } else if (offset > 0) {
    focusIndex += 1;
  }

  focusIndex = (focusIndex + count) % count; // Focus menu item

  return sameLevelFocusableMenuElementList[focusIndex];
}

function useAccessibility(mode, activeKey, isRtl, id, containerRef, getKeys, getKeyPath, triggerActiveKey, triggerAccessibilityOpen, originOnKeyDown) {
  var rafRef = React.useRef();
  var activeRef = React.useRef();
  activeRef.current = activeKey;

  var cleanRaf = function cleanRaf() {
    wrapperRaf$1.cancel(rafRef.current);
  };

  React.useEffect(function () {
    return function () {
      cleanRaf();
    };
  }, []);
  return function (e) {
    var which = e.which;

    if ([].concat(ArrowKeys, [ENTER, ESC]).includes(which)) {
      // Convert key to elements
      var elements;
      var key2element;
      var element2key; // >>> Wrap as function since we use raf for some case

      var refreshElements = function refreshElements() {
        elements = new Set();
        key2element = new Map();
        element2key = new Map();
        var keys = getKeys();
        keys.forEach(function (key) {
          var element = document.querySelector("[data-menu-id='".concat(getMenuId(id, key), "']"));

          if (element) {
            elements.add(element);
            element2key.set(element, key);
            key2element.set(key, element);
          }
        });
        return elements;
      };

      refreshElements(); // First we should find current focused MenuItem/SubMenu element

      var activeElement = key2element.get(activeKey);
      var focusMenuElement = getFocusElement(activeElement, elements);
      var focusMenuKey = element2key.get(focusMenuElement);
      var offsetObj = getOffset(mode, getKeyPath(focusMenuKey, true).length === 1, isRtl, which); // Some mode do not have fully arrow operation like inline

      if (!offsetObj) {
        return;
      } // Arrow prevent default to avoid page scroll


      if (ArrowKeys.includes(which)) {
        e.preventDefault();
      }

      var tryFocus = function tryFocus(menuElement) {
        if (menuElement) {
          var focusTargetElement = menuElement; // Focus to link instead of menu item if possible

          var link = menuElement.querySelector('a');

          if (link === null || link === void 0 ? void 0 : link.getAttribute('href')) {
            focusTargetElement = link;
          }

          var targetKey = element2key.get(menuElement);
          triggerActiveKey(targetKey);
          /**
           * Do not `useEffect` here since `tryFocus` may trigger async
           * which makes React sync update the `activeKey`
           * that force render before `useRef` set the next activeKey
           */

          cleanRaf();
          rafRef.current = wrapperRaf$1(function () {
            if (activeRef.current === targetKey) {
              focusTargetElement.focus();
            }
          });
        }
      };

      if (offsetObj.sibling || !focusMenuElement) {
        // ========================== Sibling ==========================
        // Find walkable focus menu element container
        var parentQueryContainer;

        if (!focusMenuElement || mode === 'inline') {
          parentQueryContainer = containerRef.current;
        } else {
          parentQueryContainer = findContainerUL(focusMenuElement);
        } // Get next focus element


        var targetElement = getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offsetObj.offset); // Focus menu item

        tryFocus(targetElement); // ======================= InlineTrigger =======================
      } else if (offsetObj.inlineTrigger) {
        // Inline trigger no need switch to sub menu item
        triggerAccessibilityOpen(focusMenuKey); // =========================== Level ===========================
      } else if (offsetObj.offset > 0) {
        triggerAccessibilityOpen(focusMenuKey, true);
        cleanRaf();
        rafRef.current = wrapperRaf$1(function () {
          // Async should resync elements
          refreshElements();
          var controlId = focusMenuElement.getAttribute('aria-controls');
          var subQueryContainer = document.getElementById(controlId); // Get sub focusable menu item

          var targetElement = getNextFocusElement(subQueryContainer, elements); // Focus menu item

          tryFocus(targetElement);
        }, 5);
      } else if (offsetObj.offset < 0) {
        var keyPath = getKeyPath(focusMenuKey, true);
        var parentKey = keyPath[keyPath.length - 2];
        var parentMenuElement = key2element.get(parentKey); // Focus menu item

        triggerAccessibilityOpen(parentKey, false);
        tryFocus(parentMenuElement);
      }
    } // Pass origin key down event


    originOnKeyDown === null || originOnKeyDown === void 0 ? void 0 : originOnKeyDown(e);
  };
}

var uniquePrefix = Math.random().toFixed(5).toString().slice(2);
var internalId = 0;
function useUUID(id) {
  var _useMergedState = useControlledState(id, {
    value: id
  }),
      _useMergedState2 = _slicedToArray$3(_useMergedState, 2),
      uuid = _useMergedState2[0],
      setUUID = _useMergedState2[1];

  React.useEffect(function () {
    internalId += 1;
    var newId = "".concat(uniquePrefix, "-").concat(internalId);
    setUUID("rc-menu-uuid-".concat(newId));
  }, []);
  return uuid;
}

function nextSlice(callback) {
  /* istanbul ignore next */
  Promise.resolve().then(callback);
}

var PATH_SPLIT = '__RC_UTIL_PATH_SPLIT__';

var getPathStr = function getPathStr(keyPath) {
  return keyPath.join(PATH_SPLIT);
};

var getPathKeys = function getPathKeys(keyPathStr) {
  return keyPathStr.split(PATH_SPLIT);
};

var OVERFLOW_KEY = 'rc-menu-more';
function useKeyRecords() {
  var _React$useState = React.useState({}),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      internalForceUpdate = _React$useState2[1];

  var key2pathRef = useRef(new Map());
  var path2keyRef = useRef(new Map());

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray$3(_React$useState3, 2),
      overflowKeys = _React$useState4[0],
      setOverflowKeys = _React$useState4[1];

  var updateRef = useRef(0);
  var destroyRef = useRef(false);

  var forceUpdate = function forceUpdate() {
    if (!destroyRef.current) {
      internalForceUpdate({});
    }
  };

  var registerPath = useCallback(function (key, keyPath) {
    // Warning for invalidate or duplicated `key`
    {
      warningOnce(!key2pathRef.current.has(key), "Duplicated key '".concat(key, "' used in Menu by path [").concat(keyPath.join(' > '), "]"));
    } // Fill map


    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.set(connectedPath, key);
    key2pathRef.current.set(key, connectedPath);
    updateRef.current += 1;
    var id = updateRef.current;
    nextSlice(function () {
      if (id === updateRef.current) {
        forceUpdate();
      }
    });
  }, []);
  var unregisterPath = useCallback(function (key, keyPath) {
    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.delete(connectedPath);
    key2pathRef.current.delete(key);
  }, []);
  var refreshOverflowKeys = useCallback(function (keys) {
    setOverflowKeys(keys);
  }, []);
  var getKeyPath = useCallback(function (eventKey, includeOverflow) {
    var fullPath = key2pathRef.current.get(eventKey) || '';
    var keys = getPathKeys(fullPath);

    if (includeOverflow && overflowKeys.includes(keys[0])) {
      keys.unshift(OVERFLOW_KEY);
    }

    return keys;
  }, [overflowKeys]);
  var isSubPathKey = useCallback(function (pathKeys, eventKey) {
    return pathKeys.some(function (pathKey) {
      var pathKeyList = getKeyPath(pathKey, true);
      return pathKeyList.includes(eventKey);
    });
  }, [getKeyPath]);

  var getKeys = function getKeys() {
    var keys = _toConsumableArray(key2pathRef.current.keys());

    if (overflowKeys.length) {
      keys.push(OVERFLOW_KEY);
    }

    return keys;
  };
  /**
   * Find current key related child path keys
   */


  var getSubPathKeys = useCallback(function (key) {
    var connectedPath = "".concat(key2pathRef.current.get(key)).concat(PATH_SPLIT);
    var pathKeys = new Set();

    _toConsumableArray(path2keyRef.current.keys()).forEach(function (pathKey) {
      if (pathKey.startsWith(connectedPath)) {
        pathKeys.add(path2keyRef.current.get(pathKey));
      }
    });

    return pathKeys;
  }, []);
  React.useEffect(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return {
    // Register
    registerPath: registerPath,
    unregisterPath: unregisterPath,
    refreshOverflowKeys: refreshOverflowKeys,
    // Util
    isSubPathKey: isSubPathKey,
    getKeyPath: getKeyPath,
    getKeys: getKeys,
    getSubPathKeys: getSubPathKeys
  };
}

/**
 * Menu modify after refactor:
 * ## Add
 * - disabled
 *
 * ## Remove
 * - openTransitionName
 * - openAnimation
 * - onDestroy
 * - siderCollapsed: Seems antd do not use this prop (Need test in antd)
 * - collapsedWidth: Seems this logic should be handle by antd Layout.Sider
 */
// optimize for render

var EMPTY_LIST = [];

var Menu$2 = function Menu(props) {
  var _childList$, _classNames;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-menu' : _props$prefixCls,
      style = props.style,
      className = props.className,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      children = props.children,
      direction = props.direction,
      id = props.id,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'vertical' : _props$mode,
      inlineCollapsed = props.inlineCollapsed,
      disabled = props.disabled,
      disabledOverflow = props.disabledOverflow,
      _props$subMenuOpenDel = props.subMenuOpenDelay,
      subMenuOpenDelay = _props$subMenuOpenDel === void 0 ? 0.1 : _props$subMenuOpenDel,
      _props$subMenuCloseDe = props.subMenuCloseDelay,
      subMenuCloseDelay = _props$subMenuCloseDe === void 0 ? 0.1 : _props$subMenuCloseDe,
      forceSubMenuRender = props.forceSubMenuRender,
      defaultOpenKeys = props.defaultOpenKeys,
      openKeys = props.openKeys,
      activeKey = props.activeKey,
      defaultActiveFirst = props.defaultActiveFirst,
      _props$selectable = props.selectable,
      selectable = _props$selectable === void 0 ? true : _props$selectable,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      defaultSelectedKeys = props.defaultSelectedKeys,
      selectedKeys = props.selectedKeys,
      onSelect = props.onSelect,
      onDeselect = props.onDeselect,
      _props$inlineIndent = props.inlineIndent,
      inlineIndent = _props$inlineIndent === void 0 ? 24 : _props$inlineIndent,
      motion = props.motion,
      defaultMotions = props.defaultMotions,
      _props$triggerSubMenu = props.triggerSubMenuAction,
      triggerSubMenuAction = _props$triggerSubMenu === void 0 ? 'hover' : _props$triggerSubMenu,
      builtinPlacements = props.builtinPlacements,
      itemIcon = props.itemIcon,
      expandIcon = props.expandIcon,
      _props$overflowedIndi = props.overflowedIndicator,
      overflowedIndicator = _props$overflowedIndi === void 0 ? '...' : _props$overflowedIndi,
      overflowedIndicatorPopupClassName = props.overflowedIndicatorPopupClassName,
      getPopupContainer = props.getPopupContainer,
      onClick = props.onClick,
      onOpenChange = props.onOpenChange,
      onKeyDown = props.onKeyDown,
      openAnimation = props.openAnimation,
      openTransitionName = props.openTransitionName,
      restProps = _objectWithoutProperties$1(props, ["prefixCls", "style", "className", "tabIndex", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName"]);

  var childList = parseChildren(children, EMPTY_LIST);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      mounted = _React$useState2[0],
      setMounted = _React$useState2[1];

  var containerRef = React.useRef();
  var uuid = useUUID(id);
  var isRtl = direction === 'rtl'; // ========================= Warn =========================

  {
    warningOnce(!openAnimation && !openTransitionName, '`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.');
  } // ========================= Mode =========================


  var _React$useMemo = React.useMemo(function () {
    if ((mode === 'inline' || mode === 'vertical') && inlineCollapsed) {
      return ['vertical', inlineCollapsed];
    }

    return [mode, false];
  }, [mode, inlineCollapsed]),
      _React$useMemo2 = _slicedToArray$3(_React$useMemo, 2),
      mergedMode = _React$useMemo2[0],
      mergedInlineCollapsed = _React$useMemo2[1]; // ====================== Responsive ======================


  var _React$useState3 = React.useState(0),
      _React$useState4 = _slicedToArray$3(_React$useState3, 2),
      lastVisibleIndex = _React$useState4[0],
      setLastVisibleIndex = _React$useState4[1];

  var allVisible = lastVisibleIndex >= childList.length - 1 || mergedMode !== 'horizontal' || disabledOverflow; // ========================= Open =========================

  var _useMergedState = useControlledState(defaultOpenKeys, {
    value: openKeys,
    postState: function postState(keys) {
      return keys || EMPTY_LIST;
    }
  }),
      _useMergedState2 = _slicedToArray$3(_useMergedState, 2),
      mergedOpenKeys = _useMergedState2[0],
      setMergedOpenKeys = _useMergedState2[1];

  var triggerOpenKeys = function triggerOpenKeys(keys) {
    setMergedOpenKeys(keys);
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(keys);
  }; // >>>>> Cache & Reset open keys when inlineCollapsed changed


  var _React$useState5 = React.useState(mergedOpenKeys),
      _React$useState6 = _slicedToArray$3(_React$useState5, 2),
      inlineCacheOpenKeys = _React$useState6[0],
      setInlineCacheOpenKeys = _React$useState6[1];

  var isInlineMode = mergedMode === 'inline';
  var mountRef = React.useRef(false); // Cache

  React.useEffect(function () {
    if (isInlineMode) {
      setInlineCacheOpenKeys(mergedOpenKeys);
    }
  }, [mergedOpenKeys]); // Restore

  React.useEffect(function () {
    if (!mountRef.current) {
      mountRef.current = true;
      return;
    }

    if (isInlineMode) {
      setMergedOpenKeys(inlineCacheOpenKeys);
    } else {
      // Trigger open event in case its in control
      triggerOpenKeys(EMPTY_LIST);
    }
  }, [isInlineMode]); // ========================= Path =========================

  var _useKeyRecords = useKeyRecords(),
      registerPath = _useKeyRecords.registerPath,
      unregisterPath = _useKeyRecords.unregisterPath,
      refreshOverflowKeys = _useKeyRecords.refreshOverflowKeys,
      isSubPathKey = _useKeyRecords.isSubPathKey,
      getKeyPath = _useKeyRecords.getKeyPath,
      getKeys = _useKeyRecords.getKeys,
      getSubPathKeys = _useKeyRecords.getSubPathKeys;

  var registerPathContext = React.useMemo(function () {
    return {
      registerPath: registerPath,
      unregisterPath: unregisterPath
    };
  }, [registerPath, unregisterPath]);
  var pathUserContext = React.useMemo(function () {
    return {
      isSubPathKey: isSubPathKey
    };
  }, [isSubPathKey]);
  React.useEffect(function () {
    refreshOverflowKeys(allVisible ? EMPTY_LIST : childList.slice(lastVisibleIndex + 1).map(function (child) {
      return child.key;
    }));
  }, [lastVisibleIndex, allVisible]); // ======================== Active ========================

  var _useMergedState3 = useControlledState(activeKey || defaultActiveFirst && ((_childList$ = childList[0]) === null || _childList$ === void 0 ? void 0 : _childList$.key), {
    value: activeKey
  }),
      _useMergedState4 = _slicedToArray$3(_useMergedState3, 2),
      mergedActiveKey = _useMergedState4[0],
      setMergedActiveKey = _useMergedState4[1];

  var onActive = useMemoCallback(function (key) {
    setMergedActiveKey(key);
  });
  var onInactive = useMemoCallback(function () {
    setMergedActiveKey(undefined);
  }); // ======================== Select ========================
  // >>>>> Select keys

  var _useMergedState5 = useControlledState(defaultSelectedKeys || [], {
    value: selectedKeys,
    // Legacy convert key to array
    postState: function postState(keys) {
      if (Array.isArray(keys)) {
        return keys;
      }

      if (keys === null || keys === undefined) {
        return EMPTY_LIST;
      }

      return [keys];
    }
  }),
      _useMergedState6 = _slicedToArray$3(_useMergedState5, 2),
      mergedSelectKeys = _useMergedState6[0],
      setMergedSelectKeys = _useMergedState6[1]; // >>>>> Trigger select


  var triggerSelection = function triggerSelection(info) {
    if (selectable) {
      // Insert or Remove
      var targetKey = info.key;
      var exist = mergedSelectKeys.includes(targetKey);
      var newSelectKeys;

      if (multiple) {
        if (exist) {
          newSelectKeys = mergedSelectKeys.filter(function (key) {
            return key !== targetKey;
          });
        } else {
          newSelectKeys = [].concat(_toConsumableArray(mergedSelectKeys), [targetKey]);
        }
      } else {
        newSelectKeys = [targetKey];
      }

      setMergedSelectKeys(newSelectKeys); // Trigger event

      var selectInfo = _objectSpread2$1(_objectSpread2$1({}, info), {}, {
        selectedKeys: newSelectKeys
      });

      if (exist) {
        onDeselect === null || onDeselect === void 0 ? void 0 : onDeselect(selectInfo);
      } else {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectInfo);
      }
    } // Whatever selectable, always close it


    if (!multiple && mergedOpenKeys.length && mergedMode !== 'inline') {
      triggerOpenKeys(EMPTY_LIST);
    }
  }; // ========================= Open =========================

  /**
   * Click for item. SubMenu do not have selection status
   */


  var onInternalClick = useMemoCallback(function (info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    triggerSelection(info);
  });
  var onInternalOpenChange = useMemoCallback(function (key, open) {
    var newOpenKeys = mergedOpenKeys.filter(function (k) {
      return k !== key;
    });

    if (open) {
      newOpenKeys.push(key);
    } else if (mergedMode !== 'inline') {
      // We need find all related popup to close
      var subPathKeys = getSubPathKeys(key);
      newOpenKeys = newOpenKeys.filter(function (k) {
        return !subPathKeys.has(k);
      });
    }

    if (!shallowequal(mergedOpenKeys, newOpenKeys)) {
      triggerOpenKeys(newOpenKeys);
    }
  });
  var getInternalPopupContainer = useMemoCallback(getPopupContainer); // ==================== Accessibility =====================

  var triggerAccessibilityOpen = function triggerAccessibilityOpen(key, open) {
    var nextOpen = open !== null && open !== void 0 ? open : !mergedOpenKeys.includes(key);
    onInternalOpenChange(key, nextOpen);
  };

  var onInternalKeyDown = useAccessibility(mergedMode, mergedActiveKey, isRtl, uuid, containerRef, getKeys, getKeyPath, setMergedActiveKey, triggerAccessibilityOpen, onKeyDown); // ======================== Effect ========================

  React.useEffect(function () {
    setMounted(true);
  }, []); // ======================== Render ========================
  // >>>>> Children

  var wrappedChildList = mergedMode !== 'horizontal' || disabledOverflow ? childList : // Need wrap for overflow dropdown that do not response for open
  childList.map(function (child, index) {
    return (
      /*#__PURE__*/
      // Always wrap provider to avoid sub node re-mount
      React.createElement(InheritableContextProvider, {
        key: child.key,
        overflowDisabled: index > lastVisibleIndex
      }, child)
    );
  }); // >>>>> Container

  var container = /*#__PURE__*/React.createElement(ForwardOverflow, _extends$2({
    id: id,
    ref: containerRef,
    prefixCls: "".concat(prefixCls, "-overflow"),
    component: "ul",
    itemComponent: MenuItem$1,
    className: classnames(prefixCls, "".concat(prefixCls, "-root"), "".concat(prefixCls, "-").concat(mergedMode), className, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-inline-collapsed"), mergedInlineCollapsed), _defineProperty$4(_classNames, "".concat(prefixCls, "-rtl"), isRtl), _classNames)),
    dir: direction,
    style: style,
    role: "menu",
    tabIndex: tabIndex,
    data: wrappedChildList,
    renderRawItem: function renderRawItem(node) {
      return node;
    },
    renderRawRest: function renderRawRest(omitItems) {
      // We use origin list since wrapped list use context to prevent open
      var len = omitItems.length;
      var originOmitItems = len ? childList.slice(-len) : null;
      return /*#__PURE__*/React.createElement(SubMenu$1, {
        eventKey: OVERFLOW_KEY,
        title: overflowedIndicator,
        disabled: allVisible,
        internalPopupClose: len === 0,
        popupClassName: overflowedIndicatorPopupClassName
      }, originOmitItems);
    },
    maxCount: mergedMode !== 'horizontal' || disabledOverflow ? ForwardOverflow.INVALIDATE : ForwardOverflow.RESPONSIVE,
    ssr: "full",
    "data-menu-list": true,
    onVisibleChange: function onVisibleChange(newLastIndex) {
      setLastVisibleIndex(newLastIndex);
    },
    onKeyDown: onInternalKeyDown
  }, restProps)); // >>>>> Render

  return /*#__PURE__*/React.createElement(IdContext.Provider, {
    value: uuid
  }, /*#__PURE__*/React.createElement(InheritableContextProvider, {
    prefixCls: prefixCls,
    mode: mergedMode,
    openKeys: mergedOpenKeys,
    rtl: isRtl // Disabled
    ,
    disabled: disabled // Motion
    ,
    motion: mounted ? motion : null,
    defaultMotions: mounted ? defaultMotions : null // Active
    ,
    activeKey: mergedActiveKey,
    onActive: onActive,
    onInactive: onInactive // Selection
    ,
    selectedKeys: mergedSelectKeys // Level
    ,
    inlineIndent: inlineIndent // Popup
    ,
    subMenuOpenDelay: subMenuOpenDelay,
    subMenuCloseDelay: subMenuCloseDelay,
    forceSubMenuRender: forceSubMenuRender,
    builtinPlacements: builtinPlacements,
    triggerSubMenuAction: triggerSubMenuAction,
    getPopupContainer: getInternalPopupContainer // Icon
    ,
    itemIcon: itemIcon,
    expandIcon: expandIcon // Events
    ,
    onItemClick: onInternalClick,
    onOpenChange: onInternalOpenChange
  }, /*#__PURE__*/React.createElement(PathUserContext.Provider, {
    value: pathUserContext
  }, container), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'none'
    },
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement(PathRegisterContext.Provider, {
    value: registerPathContext
  }, childList))));
};

var InternalMenuItemGroup = function InternalMenuItemGroup(_ref) {
  var className = _ref.className,
      title = _ref.title;
      _ref.eventKey;
      var children = _ref.children,
      restProps = _objectWithoutProperties$1(_ref, ["className", "title", "eventKey", "children"]);

  var _React$useContext = React.useContext(MenuContext$2),
      prefixCls = _React$useContext.prefixCls;

  var groupPrefixCls = "".concat(prefixCls, "-item-group");
  return /*#__PURE__*/React.createElement("li", _extends$2({}, restProps, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: classnames(groupPrefixCls, className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(groupPrefixCls, "-title"),
    title: typeof title === 'string' ? title : undefined
  }, title), /*#__PURE__*/React.createElement("ul", {
    className: "".concat(groupPrefixCls, "-list")
  }, children));
};

function MenuItemGroup(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties$1(_ref2, ["children"]);

  var connectedKeyPath = useFullPath$1(props.eventKey);
  var childList = parseChildren(children, connectedKeyPath);
  var measure = useMeasure();

  if (measure) {
    return childList;
  }

  return /*#__PURE__*/React.createElement(InternalMenuItemGroup, omit(props, ['warnKey']), childList);
}

function Divider(_ref) {
  var className = _ref.className,
      style = _ref.style;

  var _React$useContext = React.useContext(MenuContext$2),
      prefixCls = _React$useContext.prefixCls;

  var measure = useMeasure();

  if (measure) {
    return null;
  }

  return /*#__PURE__*/React.createElement("li", {
    className: classnames("".concat(prefixCls, "-item-divider"), className),
    style: style
  });
}

/** @private Only used for antd internal. Do not use in your production. */

var useFullPath = useFullPath$1;
var ExportMenu = Menu$2;
ExportMenu.Item = MenuItem$1;
ExportMenu.SubMenu = SubMenu$1;
ExportMenu.ItemGroup = MenuItemGroup;
ExportMenu.Divider = Divider;

var MenuContext = /*#__PURE__*/createContext({
  prefixCls: '',
  firstLevel: true,
  inlineCollapsed: false
});
var MenuContext$1 = MenuContext;

function SubMenu(props) {
  var _a;

  var popupClassName = props.popupClassName,
      icon = props.icon,
      title = props.title;
  var context = React.useContext(MenuContext$1);
  var prefixCls = context.prefixCls,
      inlineCollapsed = context.inlineCollapsed,
      antdMenuTheme = context.antdMenuTheme;
  var parentPath = useFullPath();
  var titleNode;

  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-inline-collapsed-noicon")
    }, title.charAt(0)) : /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title);
  } else {
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    var titleIsSpan = isValidElement(title) && title.type === 'span';
    titleNode = /*#__PURE__*/React.createElement(React.Fragment, null, cloneElement(icon, {
      className: classnames(isValidElement(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
    }), titleIsSpan ? title : /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title));
  }

  return /*#__PURE__*/React.createElement(MenuContext$1.Provider, {
    value: _extends$2(_extends$2({}, context), {
      firstLevel: false
    })
  }, /*#__PURE__*/React.createElement(SubMenu$1, _extends$2({}, omit(props, ['icon']), {
    title: titleNode,
    popupClassName: classnames(prefixCls, "".concat(prefixCls, "-").concat(antdMenuTheme), popupClassName)
  })));
}

// This icon file is generated automatically.
var BarsOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "0 0 1024 1024",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"
      }
    }]
  },
  "name": "bars",
  "theme": "outlined"
};
var BarsOutlinedSvg = BarsOutlined$2;

// GENERATE BY ./scripts/generate.ts

var BarsOutlined = function BarsOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: BarsOutlinedSvg
  }));
};

BarsOutlined.displayName = 'BarsOutlined';
var BarsOutlined$1 = /*#__PURE__*/React.forwardRef(BarsOutlined);

// This icon file is generated automatically.
var LeftOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
      }
    }]
  },
  "name": "left",
  "theme": "outlined"
};
var LeftOutlinedSvg = LeftOutlined$2;

// GENERATE BY ./scripts/generate.ts

var LeftOutlined = function LeftOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: LeftOutlinedSvg
  }));
};

LeftOutlined.displayName = 'LeftOutlined';
var LeftOutlined$1 = /*#__PURE__*/React.forwardRef(LeftOutlined);

var __rest$a = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var LayoutContext = /*#__PURE__*/React.createContext({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName,
      displayName = _ref.displayName;
  return function (BasicComponent) {
    var Adapter = function Adapter(props) {
      var _React$useContext = React.useContext(ConfigContext),
          getPrefixCls = _React$useContext.getPrefixCls;

      var customizePrefixCls = props.prefixCls;
      var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
      return /*#__PURE__*/React.createElement(BasicComponent, _extends$2({
        prefixCls: prefixCls,
        tagName: tagName
      }, props));
    };

    Adapter.displayName = displayName;
    return Adapter;
  };
}

var Basic = function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      tagName = props.tagName,
      others = __rest$a(props, ["prefixCls", "className", "children", "tagName"]);

  var classString = classnames(prefixCls, className);
  return /*#__PURE__*/React.createElement(tagName, _extends$2({
    className: classString
  }, others), children);
};

var BasicLayout = function BasicLayout(props) {
  var _classNames;

  var _React$useContext2 = React.useContext(ConfigContext),
      direction = _React$useContext2.direction;

  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      siders = _React$useState2[0],
      setSiders = _React$useState2[1];

  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      hasSider = props.hasSider,
      Tag = props.tagName,
      others = __rest$a(props, ["prefixCls", "className", "children", "hasSider", "tagName"]);

  var classString = classnames(prefixCls, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : siders.length > 0), _defineProperty$4(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/React.createElement(LayoutContext.Provider, {
    value: {
      siderHook: {
        addSider: function addSider(id) {
          setSiders(function (prev) {
            return [].concat(_toConsumableArray(prev), [id]);
          });
        },
        removeSider: function removeSider(id) {
          setSiders(function (prev) {
            return prev.filter(function (currentId) {
              return currentId !== id;
            });
          });
        }
      }
    }
  }, /*#__PURE__*/React.createElement(Tag, _extends$2({
    className: classString
  }, others), children));
};

generator({
  suffixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout);
generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);

var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

var isNumeric$1 = isNumeric;

var __rest$9 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
var SiderContext = /*#__PURE__*/React.createContext({});

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var Sider = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      trigger = _a.trigger,
      children = _a.children,
      _a$defaultCollapsed = _a.defaultCollapsed,
      defaultCollapsed = _a$defaultCollapsed === void 0 ? false : _a$defaultCollapsed,
      _a$theme = _a.theme,
      theme = _a$theme === void 0 ? 'dark' : _a$theme,
      _a$style = _a.style,
      style = _a$style === void 0 ? {} : _a$style,
      _a$collapsible = _a.collapsible,
      collapsible = _a$collapsible === void 0 ? false : _a$collapsible,
      _a$reverseArrow = _a.reverseArrow,
      reverseArrow = _a$reverseArrow === void 0 ? false : _a$reverseArrow,
      _a$width = _a.width,
      width = _a$width === void 0 ? 200 : _a$width,
      _a$collapsedWidth = _a.collapsedWidth,
      collapsedWidth = _a$collapsedWidth === void 0 ? 80 : _a$collapsedWidth,
      zeroWidthTriggerStyle = _a.zeroWidthTriggerStyle,
      breakpoint = _a.breakpoint,
      onCollapse = _a.onCollapse,
      onBreakpoint = _a.onBreakpoint,
      props = __rest$9(_a, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);

  var _useContext = useContext(LayoutContext),
      siderHook = _useContext.siderHook;

  var _useState = useState('collapsed' in props ? props.collapsed : defaultCollapsed),
      _useState2 = _slicedToArray$3(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray$3(_useState3, 2),
      below = _useState4[0],
      setBelow = _useState4[1];

  useEffect(function () {
    if ('collapsed' in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);

  var handleSetCollapsed = function handleSetCollapsed(value, type) {
    if (!('collapsed' in props)) {
      setCollapsed(value);
    }

    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  }; // ========================= Responsive =========================


  var responsiveHandlerRef = useRef();

  responsiveHandlerRef.current = function (mql) {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);

    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, 'responsive');
    }
  };

  useEffect(function () {
    function responsiveHandler(mql) {
      return responsiveHandlerRef.current(mql);
    }

    var mql;

    if (typeof window !== 'undefined') {
      var _window = window,
          matchMedia = _window.matchMedia;

      if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
        mql = matchMedia("(max-width: ".concat(dimensionMaxMap[breakpoint], ")"));

        try {
          mql.addEventListener('change', responsiveHandler);
        } catch (error) {
          mql.addListener(responsiveHandler);
        }

        responsiveHandler(mql);
      }
    }

    return function () {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
      } catch (error) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }
    };
  }, []);
  useEffect(function () {
    var uniqueId = generateId('ant-sider-');
    siderHook.addSider(uniqueId);
    return function () {
      return siderHook.removeSider(uniqueId);
    };
  }, []);

  var toggle = function toggle() {
    handleSetCollapsed(!collapsed, 'clickTrigger');
  };

  var _useContext2 = useContext(ConfigContext),
      getPrefixCls = _useContext2.getPrefixCls;

  var renderSider = function renderSider() {
    var _classNames;

    var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    var divProps = omit(props, ['collapsed']);
    var rawWidth = collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

    var siderWidth = isNumeric$1(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

    var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/React.createElement("span", {
      onClick: toggle,
      className: classnames("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
      style: zeroWidthTriggerStyle
    }, trigger || /*#__PURE__*/React.createElement(BarsOutlined$1, null)) : null;
    var iconObj = {
      expanded: reverseArrow ? /*#__PURE__*/React.createElement(RightOutlined$1, null) : /*#__PURE__*/React.createElement(LeftOutlined$1, null),
      collapsed: reverseArrow ? /*#__PURE__*/React.createElement(LeftOutlined$1, null) : /*#__PURE__*/React.createElement(RightOutlined$1, null)
    };
    var status = collapsed ? 'collapsed' : 'expanded';
    var defaultTrigger = iconObj[status];
    var triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-trigger"),
      onClick: toggle,
      style: {
        width: siderWidth
      }
    }, trigger || defaultTrigger) : null;

    var divStyle = _extends$2(_extends$2({}, style), {
      flex: "0 0 ".concat(siderWidth),
      maxWidth: siderWidth,
      minWidth: siderWidth,
      width: siderWidth
    });

    var siderCls = classnames(prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-collapsed"), !!collapsed), _defineProperty$4(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), _defineProperty$4(_classNames, "".concat(prefixCls, "-below"), !!below), _defineProperty$4(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames), className);
    return /*#__PURE__*/React.createElement("aside", _extends$2({
      className: siderCls
    }, divProps, {
      style: divStyle,
      ref: ref
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-children")
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
  };

  return /*#__PURE__*/React.createElement(SiderContext.Provider, {
    value: {
      siderCollapsed: collapsed
    }
  }, renderSider());
});
Sider.displayName = 'Sider';

var __rest$8 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var MenuItem = /*#__PURE__*/function (_React$Component) {
  _inherits$1(MenuItem, _React$Component);

  var _super = _createSuper$1(MenuItem);

  function MenuItem() {
    var _this;

    _classCallCheck$2(this, MenuItem);

    _this = _super.apply(this, arguments);

    _this.renderItem = function (_ref) {
      var _classNames;

      var siderCollapsed = _ref.siderCollapsed;

      var _a;

      var _this$context = _this.context,
          prefixCls = _this$context.prefixCls,
          firstLevel = _this$context.firstLevel,
          inlineCollapsed = _this$context.inlineCollapsed,
          direction = _this$context.direction;
      var _this$props = _this.props,
          className = _this$props.className,
          children = _this$props.children;

      var _b = _this.props,
          title = _b.title,
          icon = _b.icon,
          danger = _b.danger,
          rest = __rest$8(_b, ["title", "icon", "danger"]);

      var tooltipTitle = title;

      if (typeof title === 'undefined') {
        tooltipTitle = firstLevel ? children : '';
      } else if (title === false) {
        tooltipTitle = '';
      }

      var tooltipProps = {
        title: tooltipTitle
      };

      if (!siderCollapsed && !inlineCollapsed) {
        tooltipProps.title = null; // Reset `visible` to fix control mode tooltip display not correct
        // ref: https://github.com/ant-design/ant-design/issues/16742

        tooltipProps.visible = false;
      }

      var childrenLength = toArray$2(children).length;
      return /*#__PURE__*/React.createElement(Tooltip$1, _extends$2({}, tooltipProps, {
        placement: direction === 'rtl' ? 'left' : 'right',
        overlayClassName: "".concat(prefixCls, "-inline-collapsed-tooltip")
      }), /*#__PURE__*/React.createElement(MenuItem$1, _extends$2({}, rest, {
        className: classnames((_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-item-danger"), danger), _defineProperty$4(_classNames, "".concat(prefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _classNames), className),
        title: typeof title === 'string' ? title : undefined
      }), cloneElement(icon, {
        className: classnames(isValidElement(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
      }), _this.renderItemChildren(inlineCollapsed)));
    };

    return _this;
  }

  _createClass$2(MenuItem, [{
    key: "renderItemChildren",
    value: function renderItemChildren(inlineCollapsed) {
      var _this$context2 = this.context,
          prefixCls = _this$context2.prefixCls,
          firstLevel = _this$context2.firstLevel;
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          children = _this$props2.children;
      var wrapNode = /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-title-content")
      }, children); // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456

      if (!icon || isValidElement(children) && children.type === 'span') {
        if (children && inlineCollapsed && firstLevel && typeof children === 'string') {
          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-inline-collapsed-noicon")
          }, children.charAt(0));
        }
      }

      return wrapNode;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(SiderContext.Consumer, null, this.renderItem);
    }
  }]);

  return MenuItem;
}(React.Component);
MenuItem.contextType = MenuContext$1;

var __rest$7 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var InternalMenu = /*#__PURE__*/function (_React$Component) {
  _inherits$1(InternalMenu, _React$Component);

  var _super = _createSuper$1(InternalMenu);

  function InternalMenu(props) {
    var _this;

    _classCallCheck$2(this, InternalMenu);

    _this = _super.call(this, props);

    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;
      var rootPrefixCls = getPrefixCls();

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          expandIcon = _a.expandIcon,
          restProps = __rest$7(_a, ["prefixCls", "className", "theme", "expandIcon"]);

      var passedProps = omit(restProps, ['siderCollapsed', 'collapsedWidth']);

      var inlineCollapsed = _this.getInlineCollapsed();

      var defaultMotions = {
        horizontal: {
          motionName: "".concat(rootPrefixCls, "-slide-up")
        },
        inline: collapseMotion$1,
        other: {
          motionName: "".concat(rootPrefixCls, "-zoom-big")
        }
      };
      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = classnames("".concat(prefixCls, "-").concat(theme), className);
      return /*#__PURE__*/React.createElement(MenuContext$1.Provider, {
        value: {
          prefixCls: prefixCls,
          inlineCollapsed: inlineCollapsed || false,
          antdMenuTheme: theme,
          direction: direction,
          firstLevel: true
        }
      }, /*#__PURE__*/React.createElement(ExportMenu, _extends$2({
        getPopupContainer: getPopupContainer,
        overflowedIndicator: /*#__PURE__*/React.createElement(EllipsisOutlined$1, null),
        overflowedIndicatorPopupClassName: "".concat(prefixCls, "-").concat(theme)
      }, passedProps, {
        inlineCollapsed: inlineCollapsed,
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions,
        expandIcon: cloneElement(expandIcon, {
          className: "".concat(prefixCls, "-submenu-expand-icon")
        })
      })));
    };

    devWarning(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    devWarning(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    return _this;
  }

  _createClass$2(InternalMenu, [{
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var _this$props = this.props,
          inlineCollapsed = _this$props.inlineCollapsed,
          siderCollapsed = _this$props.siderCollapsed;

      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderMenu);
    }
  }]);

  return InternalMenu;
}(React.Component);

InternalMenu.defaultProps = {
  theme: 'light' // or dark

}; // We should keep this as ref-able

var Menu = /*#__PURE__*/function (_React$Component2) {
  _inherits$1(Menu, _React$Component2);

  var _super2 = _createSuper$1(Menu);

  function Menu() {
    _classCallCheck$2(this, Menu);

    return _super2.apply(this, arguments);
  }

  _createClass$2(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(SiderContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(InternalMenu, _extends$2({}, _this2.props, context));
      });
    }
  }]);

  return Menu;
}(React.Component);

Menu.Divider = Divider;
Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = MenuItemGroup;
var Menu$1 = Menu;

var Checkbox$3 = /*#__PURE__*/function (_Component) {
  _inherits$1(Checkbox, _Component);

  var _super = _createSuper$1(Checkbox);

  function Checkbox(props) {
    var _this;

    _classCallCheck$2(this, Checkbox);

    _this = _super.call(this, props);

    _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;

      if (disabled) {
        return;
      }

      if (!('checked' in _this.props)) {
        _this.setState({
          checked: e.target.checked
        });
      }

      if (onChange) {
        onChange({
          target: _objectSpread2$1(_objectSpread2$1({}, _this.props), {}, {
            checked: e.target.checked
          }),
          stopPropagation: function stopPropagation() {
            e.stopPropagation();
          },
          preventDefault: function preventDefault() {
            e.preventDefault();
          },
          nativeEvent: e.nativeEvent
        });
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    var checked = 'checked' in props ? props.checked : props.defaultChecked;
    _this.state = {
      checked: checked
    };
    return _this;
  }

  _createClass$2(Checkbox, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          style = _this$props2.style,
          name = _this$props2.name,
          id = _this$props2.id,
          type = _this$props2.type,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          tabIndex = _this$props2.tabIndex,
          onClick = _this$props2.onClick,
          onFocus = _this$props2.onFocus,
          onBlur = _this$props2.onBlur,
          onKeyDown = _this$props2.onKeyDown,
          onKeyPress = _this$props2.onKeyPress,
          onKeyUp = _this$props2.onKeyUp,
          autoFocus = _this$props2.autoFocus,
          value = _this$props2.value,
          required = _this$props2.required,
          others = _objectWithoutProperties$1(_this$props2, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]);

      var globalProps = Object.keys(others).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          // eslint-disable-next-line no-param-reassign
          prev[key] = others[key];
        }

        return prev;
      }, {});
      var checked = this.state.checked;
      var classString = classnames(prefixCls, className, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-checked"), checked), _defineProperty$4(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return /*#__PURE__*/React__default.createElement("span", {
        className: classString,
        style: style
      }, /*#__PURE__*/React__default.createElement("input", _extends$2({
        name: name,
        id: id,
        type: type,
        required: required,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex,
        className: "".concat(prefixCls, "-input"),
        checked: !!checked,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyUp: onKeyUp,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        onChange: this.handleChange,
        autoFocus: autoFocus,
        ref: this.saveInput,
        value: value
      }, globalProps)), /*#__PURE__*/React__default.createElement("span", {
        className: "".concat(prefixCls, "-inner")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if ('checked' in props) {
        return _objectSpread2$1(_objectSpread2$1({}, state), {}, {
          checked: props.checked
        });
      }

      return null;
    }
  }]);

  return Checkbox;
}(Component);

Checkbox$3.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {}
};

var ClearableInputType = tuple('text', 'input');
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}

function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}

var ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
  _inherits$1(ClearableLabeledInput, _React$Component);

  var _super = _createSuper$1(ClearableLabeledInput);

  function ClearableLabeledInput() {
    var _this;

    _classCallCheck$2(this, ClearableLabeledInput);

    _this = _super.apply(this, arguments);
    /** @private Do Not use out of this class. We do not promise this is always keep. */

    _this.containerRef = /*#__PURE__*/React.createRef();

    _this.onInputMouseUp = function (e) {
      var _a;

      if ((_a = _this.containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        var triggerFocus = _this.props.triggerFocus;
        triggerFocus === null || triggerFocus === void 0 ? void 0 : triggerFocus();
      }
    };

    return _this;
  }

  _createClass$2(ClearableLabeledInput, [{
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var _this$props = this.props,
          allowClear = _this$props.allowClear,
          value = _this$props.value,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly,
          handleReset = _this$props.handleReset;

      if (!allowClear) {
        return null;
      }

      var needClear = !disabled && !readOnly && value;
      var className = "".concat(prefixCls, "-clear-icon");
      return /*#__PURE__*/React.createElement(CloseCircleFilled$1, {
        onClick: handleReset // Do not trigger onBlur when clear input
        // https://github.com/ant-design/ant-design/issues/31200
        ,
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        },
        className: classnames(_defineProperty$4({}, "".concat(className, "-hidden"), !needClear), className),
        role: "button"
      });
    }
  }, {
    key: "renderSuffix",
    value: function renderSuffix(prefixCls) {
      var _this$props2 = this.props,
          suffix = _this$props2.suffix,
          allowClear = _this$props2.allowClear;

      if (suffix || allowClear) {
        return /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-suffix")
        }, this.renderClearIcon(prefixCls), suffix);
      }

      return null;
    }
  }, {
    key: "renderLabeledIcon",
    value: function renderLabeledIcon(prefixCls, element) {
      var _classNames2;

      var _this$props3 = this.props,
          focused = _this$props3.focused,
          value = _this$props3.value,
          prefix = _this$props3.prefix,
          className = _this$props3.className,
          size = _this$props3.size,
          suffix = _this$props3.suffix,
          disabled = _this$props3.disabled,
          allowClear = _this$props3.allowClear,
          direction = _this$props3.direction,
          style = _this$props3.style,
          readOnly = _this$props3.readOnly,
          bordered = _this$props3.bordered;
      var suffixNode = this.renderSuffix(prefixCls);

      if (!hasPrefixSuffix(this.props)) {
        return cloneElement(element, {
          value: value
        });
      }

      var prefixNode = prefix ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-prefix")
      }, prefix) : null;
      var affixWrapperCls = classnames("".concat(prefixCls, "-affix-wrapper"), (_classNames2 = {}, _defineProperty$4(_classNames2, "".concat(prefixCls, "-affix-wrapper-focused"), focused), _defineProperty$4(_classNames2, "".concat(prefixCls, "-affix-wrapper-disabled"), disabled), _defineProperty$4(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), size === 'small'), _defineProperty$4(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), size === 'large'), _defineProperty$4(_classNames2, "".concat(prefixCls, "-affix-wrapper-input-with-clear-btn"), suffix && allowClear && value), _defineProperty$4(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), _defineProperty$4(_classNames2, "".concat(prefixCls, "-affix-wrapper-readonly"), readOnly), _defineProperty$4(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), _defineProperty$4(_classNames2, "".concat(className), !hasAddon(this.props) && className), _classNames2));
      return /*#__PURE__*/React.createElement("span", {
        ref: this.containerRef,
        className: affixWrapperCls,
        style: style,
        onMouseUp: this.onInputMouseUp
      }, prefixNode, cloneElement(element, {
        style: null,
        value: value,
        className: getInputClassName(prefixCls, bordered, size, disabled)
      }), suffixNode);
    }
  }, {
    key: "renderInputWithLabel",
    value: function renderInputWithLabel(prefixCls, labeledElement) {
      var _classNames4;

      var _this$props4 = this.props,
          addonBefore = _this$props4.addonBefore,
          addonAfter = _this$props4.addonAfter,
          style = _this$props4.style,
          size = _this$props4.size,
          className = _this$props4.className,
          direction = _this$props4.direction; // Not wrap when there is not addons

      if (!hasAddon(this.props)) {
        return labeledElement;
      }

      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? /*#__PURE__*/React.createElement("span", {
        className: addonClassName
      }, addonBefore) : null;
      var addonAfterNode = addonAfter ? /*#__PURE__*/React.createElement("span", {
        className: addonClassName
      }, addonAfter) : null;
      var mergedWrapperClassName = classnames("".concat(prefixCls, "-wrapper"), wrapperClassName, _defineProperty$4({}, "".concat(wrapperClassName, "-rtl"), direction === 'rtl'));
      var mergedGroupClassName = classnames("".concat(prefixCls, "-group-wrapper"), (_classNames4 = {}, _defineProperty$4(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), _defineProperty$4(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), _defineProperty$4(_classNames4, "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), _classNames4), className); // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper

      return /*#__PURE__*/React.createElement("span", {
        className: mergedGroupClassName,
        style: style
      }, /*#__PURE__*/React.createElement("span", {
        className: mergedWrapperClassName
      }, addonBeforeNode, cloneElement(labeledElement, {
        style: null
      }), addonAfterNode));
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function renderTextAreaWithClearIcon(prefixCls, element) {
      var _classNames5;

      var _this$props5 = this.props,
          value = _this$props5.value,
          allowClear = _this$props5.allowClear,
          className = _this$props5.className,
          style = _this$props5.style,
          direction = _this$props5.direction,
          bordered = _this$props5.bordered;

      if (!allowClear) {
        return cloneElement(element, {
          value: value
        });
      }

      var affixWrapperCls = classnames("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), (_classNames5 = {}, _defineProperty$4(_classNames5, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), _defineProperty$4(_classNames5, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), _defineProperty$4(_classNames5, "".concat(className), !hasAddon(this.props) && className), _classNames5));
      return /*#__PURE__*/React.createElement("span", {
        className: affixWrapperCls,
        style: style
      }, cloneElement(element, {
        style: null,
        value: value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          prefixCls = _this$props6.prefixCls,
          inputType = _this$props6.inputType,
          element = _this$props6.element;

      if (inputType === ClearableInputType[0]) {
        return this.renderTextAreaWithClearIcon(prefixCls, element);
      }

      return this.renderInputWithLabel(prefixCls, this.renderLabeledIcon(prefixCls, element));
    }
  }]);

  return ClearableLabeledInput;
}(React.Component);

var ClearableLabeledInput$1 = ClearableLabeledInput;

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }

  var event = e;
  var originalInputValue = target.value;

  if (e.type === 'click') {
    // click clear icon
    event = Object.create(e);
    event.target = target;
    event.currentTarget = target; // change target ref value cause e.target.value should be '' when clear input

    target.value = '';
    onChange(event); // reset target ref value

    target.value = originalInputValue;
    return;
  } // Trigger by composition event, this means we need force change the input value


  if (targetValue !== undefined) {
    event = Object.create(e);
    event.target = target;
    event.currentTarget = target;
    target.value = targetValue;
    onChange(event);
    return;
  }

  onChange(event);
}
function getInputClassName(prefixCls, bordered, size, disabled, direction) {
  var _classNames;

  return classnames(prefixCls, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty$4(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty$4(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$4(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty$4(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames));
}
function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option); // Selection content

  var _ref = option || {},
      cursor = _ref.cursor;

  if (cursor) {
    var len = element.value.length;

    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;

      case 'end':
        element.setSelectionRange(len, len);
        break;

      default:
        element.setSelectionRange(0, len);
    }
  }
}

var Input = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Input, _React$Component);

  var _super = _createSuper$1(Input);

  function Input(props) {
    var _this;

    _classCallCheck$2(this, Input);

    _this = _super.call(this, props);
    _this.direction = 'ltr';

    _this.focus = function (option) {
      triggerFocus(_this.input, option);
    };

    _this.saveClearableInput = function (input) {
      _this.clearableInput = input;
    };

    _this.saveInput = function (input) {
      _this.input = input;
    };

    _this.onFocus = function (e) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        focused: true
      }, _this.clearPasswordValueAttribute);

      onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };

    _this.onBlur = function (e) {
      var onBlur = _this.props.onBlur;

      _this.setState({
        focused: false
      }, _this.clearPasswordValueAttribute);

      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };

    _this.handleReset = function (e) {
      _this.setValue('', function () {
        _this.focus();
      });

      resolveOnChange(_this.input, e, _this.props.onChange);
    };

    _this.renderInput = function (prefixCls, size, bordered) {
      var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var _this$props = _this.props,
          className = _this$props.className,
          addonBefore = _this$props.addonBefore,
          addonAfter = _this$props.addonAfter,
          customizeSize = _this$props.size,
          disabled = _this$props.disabled; // Fix https://fb.me/react-unknown-prop

      var otherProps = omit(_this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      'defaultValue', 'size', 'inputType', 'bordered']);
      return /*#__PURE__*/React.createElement("input", _extends$2({
        autoComplete: input.autoComplete
      }, otherProps, {
        onChange: _this.handleChange,
        onFocus: _this.onFocus,
        onBlur: _this.onBlur,
        onKeyDown: _this.handleKeyDown,
        className: classnames(getInputClassName(prefixCls, bordered, customizeSize || size, disabled, _this.direction), _defineProperty$4({}, className, className && !addonBefore && !addonAfter)),
        ref: _this.saveInput
      }));
    };

    _this.clearPasswordValueAttribute = function () {
      // https://github.com/ant-design/ant-design/issues/20541
      _this.removePasswordTimeout = setTimeout(function () {
        if (_this.input && _this.input.getAttribute('type') === 'password' && _this.input.hasAttribute('value')) {
          _this.input.removeAttribute('value');
        }
      });
    };

    _this.handleChange = function (e) {
      _this.setValue(e.target.value, _this.clearPasswordValueAttribute);

      resolveOnChange(_this.input, e, _this.props.onChange);
    };

    _this.handleKeyDown = function (e) {
      var _this$props2 = _this.props,
          onPressEnter = _this$props2.onPressEnter,
          onKeyDown = _this$props2.onKeyDown;

      if (onPressEnter && e.keyCode === 13) {
        onPressEnter(e);
      }

      onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
    };

    _this.renderComponent = function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls,
          direction = _ref2.direction,
          input = _ref2.input;
      var _this$state = _this.state,
          value = _this$state.value,
          focused = _this$state.focused;
      var _this$props3 = _this.props,
          customizePrefixCls = _this$props3.prefixCls,
          _this$props3$bordered = _this$props3.bordered,
          bordered = _this$props3$bordered === void 0 ? true : _this$props3$bordered;
      var prefixCls = getPrefixCls('input', customizePrefixCls);
      _this.direction = direction;
      return /*#__PURE__*/React.createElement(SizeContext$1.Consumer, null, function (size) {
        return /*#__PURE__*/React.createElement(ClearableLabeledInput$1, _extends$2({
          size: size
        }, _this.props, {
          prefixCls: prefixCls,
          inputType: "input",
          value: fixControlledValue(value),
          element: _this.renderInput(prefixCls, size, bordered, input),
          handleReset: _this.handleReset,
          ref: _this.saveClearableInput,
          direction: direction,
          focused: focused,
          triggerFocus: _this.focus,
          bordered: bordered
        }));
      });
    };

    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    _this.state = {
      value: value,
      focused: false,
      // eslint-disable-next-line react/no-unused-state
      prevValue: props.value
    };
    return _this;
  }

  _createClass$2(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.clearPasswordValueAttribute();
    } // Since polyfill `getSnapshotBeforeUpdate` need work with `componentDidUpdate`.
    // We keep an empty function here.

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      if (hasPrefixSuffix(prevProps) !== hasPrefixSuffix(this.props)) {
        devWarning(this.input !== document.activeElement, 'Input', "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ");
      }

      return null;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.removePasswordTimeout) {
        clearTimeout(this.removePasswordTimeout);
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "setSelectionRange",
    value: function setSelectionRange(start, end, direction) {
      this.input.setSelectionRange(start, end, direction);
    }
  }, {
    key: "select",
    value: function select() {
      this.input.select();
    }
  }, {
    key: "setValue",
    value: function setValue(value, callback) {
      if (this.props.value === undefined) {
        this.setState({
          value: value
        }, callback);
      } else {
        callback === null || callback === void 0 ? void 0 : callback();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderComponent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, _ref3) {
      var prevValue = _ref3.prevValue;
      var newState = {
        prevValue: nextProps.value
      };

      if (nextProps.value !== undefined || prevValue !== nextProps.value) {
        newState.value = nextProps.value;
      }

      return newState;
    }
  }]);

  return Input;
}(React.Component);

Input.defaultProps = {
  type: 'text'
};
var Input$1 = Input;

var Group$1 = function Group(props) {
  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
    var customizePrefixCls = props.prefixCls,
        _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className;
    var prefixCls = getPrefixCls('input-group', customizePrefixCls);
    var cls = classnames(prefixCls, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-lg"), props.size === 'large'), _defineProperty$4(_classNames, "".concat(prefixCls, "-sm"), props.size === 'small'), _defineProperty$4(_classNames, "".concat(prefixCls, "-compact"), props.compact), _defineProperty$4(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/React.createElement("span", {
      className: cls,
      style: props.style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    }, props.children);
  });
};

var Group$2 = Group$1;

var __rest$6 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var Search$1 = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var customizePrefixCls = props.prefixCls,
      customizeInputPrefixCls = props.inputPrefixCls,
      className = props.className,
      customizeSize = props.size,
      suffix = props.suffix,
      _props$enterButton = props.enterButton,
      enterButton = _props$enterButton === void 0 ? false : _props$enterButton,
      addonAfter = props.addonAfter,
      loading = props.loading,
      disabled = props.disabled,
      customOnSearch = props.onSearch,
      customOnChange = props.onChange,
      restProps = __rest$6(props, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange"]);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var contextSize = React.useContext(SizeContext$1);
  var size = customizeSize || contextSize;
  var inputRef = React.useRef(null);

  var onChange = function onChange(e) {
    if (e && e.target && e.type === 'click' && customOnSearch) {
      customOnSearch(e.target.value, e);
    }

    if (customOnChange) {
      customOnChange(e);
    }
  };

  var onMouseDown = function onMouseDown(e) {
    var _a;

    if (document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input)) {
      e.preventDefault();
    }
  };

  var onSearch = function onSearch(e) {
    var _a;

    if (customOnSearch) {
      customOnSearch((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input.value, e);
    }
  };

  var prefixCls = getPrefixCls('input-search', customizePrefixCls);
  var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
  var searchIcon = typeof enterButton === 'boolean' ? /*#__PURE__*/React.createElement(SearchOutlined$1, null) : null;
  var btnClassName = "".concat(prefixCls, "-button");
  var button;
  var enterButtonAsElement = enterButton || {};
  var isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;

  if (isAntdButton || enterButtonAsElement.type === 'button') {
    button = cloneElement(enterButtonAsElement, _extends$2({
      onMouseDown: onMouseDown,
      onClick: onSearch,
      key: 'enterButton'
    }, isAntdButton ? {
      className: btnClassName,
      size: size
    } : {}));
  } else {
    button = /*#__PURE__*/React.createElement(Button$1, {
      className: btnClassName,
      type: enterButton ? 'primary' : undefined,
      size: size,
      disabled: disabled,
      key: "enterButton",
      onMouseDown: onMouseDown,
      onClick: onSearch,
      loading: loading,
      icon: searchIcon
    }, enterButton);
  }

  if (addonAfter) {
    button = [button, cloneElement(addonAfter, {
      key: 'addonAfter'
    })];
  }

  var cls = classnames(prefixCls, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty$4(_classNames, "".concat(prefixCls, "-").concat(size), !!size), _defineProperty$4(_classNames, "".concat(prefixCls, "-with-button"), !!enterButton), _classNames), className);
  return /*#__PURE__*/React.createElement(Input$1, _extends$2({
    ref: composeRef(inputRef, ref),
    onPressEnter: onSearch
  }, restProps, {
    size: size,
    prefixCls: inputPrefixCls,
    addonAfter: button,
    suffix: suffix,
    onChange: onChange,
    className: cls,
    disabled: disabled
  }));
});
Search$1.displayName = 'Search';
var Search$2 = Search$1;

// Thanks to https://github.com/andreypopp/react-textarea-autosize/

/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'font-variant', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');

  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }

  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  var sizingStyle = SIZING_STYLE.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(';');
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };

  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }

  return nodeInfo;
}
function calculateNodeHeight(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tab-index', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    document.body.appendChild(hiddenTextarea);
  } // Fix wrap="off" issue
  // https://github.com/ant-design/ant-design/issues/6577


  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
  } else {
    hiddenTextarea.removeAttribute('wrap');
  } // Copy all CSS properties that have an impact on the height of the content in
  // the textbox


  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      sizingStyle = _calculateNodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content


  hiddenTextarea.setAttribute('style', "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
  var minHeight = Number.MIN_SAFE_INTEGER;
  var maxHeight = Number.MAX_SAFE_INTEGER;
  var height = hiddenTextarea.scrollHeight;
  var overflowY;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height -= paddingSize;
  }

  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = ' ';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;

      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }

      height = Math.max(minHeight, height);
    }

    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;

      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }

      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  }

  return {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    overflowY: overflowY,
    resize: 'none'
  };
}

var RESIZE_STATUS;

(function (RESIZE_STATUS) {
  RESIZE_STATUS[RESIZE_STATUS["NONE"] = 0] = "NONE";
  RESIZE_STATUS[RESIZE_STATUS["RESIZING"] = 1] = "RESIZING";
  RESIZE_STATUS[RESIZE_STATUS["RESIZED"] = 2] = "RESIZED";
})(RESIZE_STATUS || (RESIZE_STATUS = {}));

var ResizableTextArea = /*#__PURE__*/function (_React$Component) {
  _inherits$1(ResizableTextArea, _React$Component);

  var _super = _createSuper$1(ResizableTextArea);

  function ResizableTextArea(props) {
    var _this;

    _classCallCheck$2(this, ResizableTextArea);

    _this = _super.call(this, props);

    _this.saveTextArea = function (textArea) {
      _this.textArea = textArea;
    };

    _this.handleResize = function (size) {
      var resizeStatus = _this.state.resizeStatus;
      var _this$props = _this.props,
          autoSize = _this$props.autoSize,
          onResize = _this$props.onResize;

      if (resizeStatus !== RESIZE_STATUS.NONE) {
        return;
      }

      if (typeof onResize === 'function') {
        onResize(size);
      }

      if (autoSize) {
        _this.resizeOnNextFrame();
      }
    };

    _this.resizeOnNextFrame = function () {
      cancelAnimationFrame(_this.nextFrameActionId);
      _this.nextFrameActionId = requestAnimationFrame(_this.resizeTextarea);
    };

    _this.resizeTextarea = function () {
      var autoSize = _this.props.autoSize;

      if (!autoSize || !_this.textArea) {
        return;
      }

      var minRows = autoSize.minRows,
          maxRows = autoSize.maxRows;
      var textareaStyles = calculateNodeHeight(_this.textArea, false, minRows, maxRows);

      _this.setState({
        textareaStyles: textareaStyles,
        resizeStatus: RESIZE_STATUS.RESIZING
      }, function () {
        cancelAnimationFrame(_this.resizeFrameId);
        _this.resizeFrameId = requestAnimationFrame(function () {
          _this.setState({
            resizeStatus: RESIZE_STATUS.RESIZED
          }, function () {
            _this.resizeFrameId = requestAnimationFrame(function () {
              _this.setState({
                resizeStatus: RESIZE_STATUS.NONE
              });

              _this.fixFirefoxAutoScroll();
            });
          });
        });
      });
    };

    _this.renderTextArea = function () {
      var _this$props2 = _this.props,
          _this$props2$prefixCl = _this$props2.prefixCls,
          prefixCls = _this$props2$prefixCl === void 0 ? 'rc-textarea' : _this$props2$prefixCl,
          autoSize = _this$props2.autoSize,
          onResize = _this$props2.onResize,
          className = _this$props2.className,
          disabled = _this$props2.disabled;
      var _this$state = _this.state,
          textareaStyles = _this$state.textareaStyles,
          resizeStatus = _this$state.resizeStatus;
      var otherProps = omit(_this.props, ['prefixCls', 'onPressEnter', 'autoSize', 'defaultValue', 'onResize']);
      var cls = classnames(prefixCls, className, _defineProperty$4({}, "".concat(prefixCls, "-disabled"), disabled)); // Fix https://github.com/ant-design/ant-design/issues/6776
      // Make sure it could be reset when using form.getFieldDecorator

      if ('value' in otherProps) {
        otherProps.value = otherProps.value || '';
      }

      var style = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, _this.props.style), textareaStyles), resizeStatus === RESIZE_STATUS.RESIZING ? // React will warning when mix `overflow` & `overflowY`.
      // We need to define this separately.
      {
        overflowX: 'hidden',
        overflowY: 'hidden'
      } : null);

      return /*#__PURE__*/React.createElement(ReactResizeObserver, {
        onResize: _this.handleResize,
        disabled: !(autoSize || onResize)
      }, /*#__PURE__*/React.createElement("textarea", _extends$2({}, otherProps, {
        className: cls,
        style: style,
        ref: _this.saveTextArea
      })));
    };

    _this.state = {
      textareaStyles: {},
      resizeStatus: RESIZE_STATUS.NONE
    };
    return _this;
  }

  _createClass$2(ResizableTextArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeTextarea();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Re-render with the new content then recalculate the height as required.
      if (prevProps.value !== this.props.value) {
        this.resizeTextarea();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.nextFrameActionId);
      cancelAnimationFrame(this.resizeFrameId);
    } // https://github.com/ant-design/ant-design/issues/21870

  }, {
    key: "fixFirefoxAutoScroll",
    value: function fixFirefoxAutoScroll() {
      try {
        if (document.activeElement === this.textArea) {
          var currentStart = this.textArea.selectionStart;
          var currentEnd = this.textArea.selectionEnd;
          this.textArea.setSelectionRange(currentStart, currentEnd);
        }
      } catch (e) {// Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderTextArea();
    }
  }]);

  return ResizableTextArea;
}(React.Component);

var TextArea$2 = /*#__PURE__*/function (_React$Component) {
  _inherits$1(TextArea, _React$Component);

  var _super = _createSuper$1(TextArea);

  function TextArea(props) {
    var _this;

    _classCallCheck$2(this, TextArea);

    _this = _super.call(this, props);

    _this.focus = function () {
      _this.resizableTextArea.textArea.focus();
    };

    _this.saveTextArea = function (resizableTextArea) {
      _this.resizableTextArea = resizableTextArea;
    };

    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;

      _this.setValue(e.target.value, function () {
        _this.resizableTextArea.resizeTextarea();
      });

      if (onChange) {
        onChange(e);
      }
    };

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    var value = typeof props.value === 'undefined' || props.value === null ? props.defaultValue : props.value;
    _this.state = {
      value: value
    };
    return _this;
  }

  _createClass$2(TextArea, [{
    key: "setValue",
    value: function setValue(value, callback) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        }, callback);
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.resizableTextArea.textArea.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ResizableTextArea, _extends$2({}, this.props, {
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        ref: this.saveTextArea
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return TextArea;
}(React.Component);

var __rest$5 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function fixEmojiLength(value, maxLength) {
  return _toConsumableArray(value || '').slice(0, maxLength).join('');
}

var TextArea = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      _a$bordered = _a.bordered,
      bordered = _a$bordered === void 0 ? true : _a$bordered,
      _a$showCount = _a.showCount,
      showCount = _a$showCount === void 0 ? false : _a$showCount,
      maxLength = _a.maxLength,
      className = _a.className,
      style = _a.style,
      customizeSize = _a.size,
      onCompositionStart = _a.onCompositionStart,
      onCompositionEnd = _a.onCompositionEnd,
      onChange = _a.onChange,
      props = __rest$5(_a, ["prefixCls", "bordered", "showCount", "maxLength", "className", "style", "size", "onCompositionStart", "onCompositionEnd", "onChange"]);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = React.useContext(SizeContext$1);
  var innerRef = React.useRef(null);
  var clearableInputRef = React.useRef(null);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      compositing = _React$useState2[0],
      setCompositing = _React$useState2[1];

  var _useMergedState = useControlledState(props.defaultValue, {
    value: props.value
  }),
      _useMergedState2 = _slicedToArray$3(_useMergedState, 2),
      value = _useMergedState2[0],
      setValue = _useMergedState2[1];

  var handleSetValue = function handleSetValue(val, callback) {
    if (props.value === undefined) {
      setValue(val);
      callback === null || callback === void 0 ? void 0 : callback();
    }
  }; // =========================== Value Update ===========================
  // Max length value


  var hasMaxLength = Number(maxLength) > 0;

  var onInternalCompositionStart = function onInternalCompositionStart(e) {
    setCompositing(true);
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };

  var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
    setCompositing(false);
    var triggerValue = e.currentTarget.value;

    if (hasMaxLength) {
      triggerValue = fixEmojiLength(triggerValue, maxLength);
    } // Patch composition onChange when value changed


    if (triggerValue !== value) {
      handleSetValue(triggerValue);
      resolveOnChange(e.currentTarget, e, onChange, triggerValue);
    }

    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };

  var handleChange = function handleChange(e) {
    var triggerValue = e.target.value;

    if (!compositing && hasMaxLength) {
      triggerValue = fixEmojiLength(triggerValue, maxLength);
    }

    handleSetValue(triggerValue);
    resolveOnChange(e.currentTarget, e, onChange, triggerValue);
  }; // ============================== Reset ===============================


  var handleReset = function handleReset(e) {
    var _a, _b;

    handleSetValue('', function () {
      var _a;

      (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    });
    resolveOnChange((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, e, onChange);
  };

  var prefixCls = getPrefixCls('input', customizePrefixCls);
  React.useImperativeHandle(ref, function () {
    var _a;

    return {
      resizableTextArea: (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea,
      focus: function focus(option) {
        var _a, _b;

        triggerFocus((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
      },
      blur: function blur() {
        var _a;

        return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
  });
  var textArea = /*#__PURE__*/React.createElement(TextArea$2, _extends$2({}, omit(props, ['allowClear']), {
    className: classnames((_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _defineProperty$4(_classNames, className, className && !showCount), _defineProperty$4(_classNames, "".concat(prefixCls, "-sm"), size === 'small' || customizeSize === 'small'), _defineProperty$4(_classNames, "".concat(prefixCls, "-lg"), size === 'large' || customizeSize === 'large'), _classNames)),
    style: showCount ? undefined : style,
    prefixCls: prefixCls,
    onCompositionStart: onInternalCompositionStart,
    onChange: handleChange,
    onCompositionEnd: onInternalCompositionEnd,
    ref: innerRef
  }));
  var val = fixControlledValue(value);

  if (!compositing && hasMaxLength && (props.value === null || props.value === undefined)) {
    // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
    val = fixEmojiLength(val, maxLength);
  } // TextArea


  var textareaNode = /*#__PURE__*/React.createElement(ClearableLabeledInput$1, _extends$2({}, props, {
    prefixCls: prefixCls,
    direction: direction,
    inputType: "text",
    value: val,
    element: textArea,
    handleReset: handleReset,
    ref: clearableInputRef,
    bordered: bordered,
    style: showCount ? undefined : style
  })); // Only show text area wrapper when needed

  if (showCount) {
    var valueLength = _toConsumableArray(val).length;

    var dataCount = '';

    if (_typeof$4(showCount) === 'object') {
      dataCount = showCount.formatter({
        count: valueLength,
        maxLength: maxLength
      });
    } else {
      dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
    }

    return /*#__PURE__*/React.createElement("div", {
      className: classnames("".concat(prefixCls, "-textarea"), _defineProperty$4({}, "".concat(prefixCls, "-textarea-rtl"), direction === 'rtl'), "".concat(prefixCls, "-textarea-show-count"), className),
      style: style,
      "data-count": dataCount
    }, textareaNode);
  }

  return textareaNode;
});
var TextArea$1 = TextArea;

// This icon file is generated automatically.
var EyeOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
      }
    }]
  },
  "name": "eye",
  "theme": "outlined"
};
var EyeOutlinedSvg = EyeOutlined$2;

// GENERATE BY ./scripts/generate.ts

var EyeOutlined = function EyeOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: EyeOutlinedSvg
  }));
};

EyeOutlined.displayName = 'EyeOutlined';
var EyeOutlined$1 = /*#__PURE__*/React.forwardRef(EyeOutlined);

// This icon file is generated automatically.
var EyeInvisibleOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"
      }
    }]
  },
  "name": "eye-invisible",
  "theme": "outlined"
};
var EyeInvisibleOutlinedSvg = EyeInvisibleOutlined$2;

// GENERATE BY ./scripts/generate.ts

var EyeInvisibleOutlined = function EyeInvisibleOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: EyeInvisibleOutlinedSvg
  }));
};

EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';
var EyeInvisibleOutlined$1 = /*#__PURE__*/React.forwardRef(EyeInvisibleOutlined);

var __rest$4 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var ActionMap = {
  click: 'onClick',
  hover: 'onMouseOver'
};
var Password = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useState = useState(false),
      _useState2 = _slicedToArray$3(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var onVisibleChange = function onVisibleChange() {
    var disabled = props.disabled;

    if (disabled) {
      return;
    }

    setVisible(!visible);
  };

  var getIcon = function getIcon(prefixCls) {
    var _iconProps;

    var action = props.action,
        _props$iconRender = props.iconRender,
        iconRender = _props$iconRender === void 0 ? function () {
      return null;
    } : _props$iconRender;
    var iconTrigger = ActionMap[action] || '';
    var icon = iconRender(visible);
    var iconProps = (_iconProps = {}, _defineProperty$4(_iconProps, iconTrigger, onVisibleChange), _defineProperty$4(_iconProps, "className", "".concat(prefixCls, "-icon")), _defineProperty$4(_iconProps, "key", 'passwordIcon'), _defineProperty$4(_iconProps, "onMouseDown", function onMouseDown(e) {
      // Prevent focused state lost
      // https://github.com/ant-design/ant-design/issues/15173
      e.preventDefault();
    }), _defineProperty$4(_iconProps, "onMouseUp", function onMouseUp(e) {
      // Prevent caret position change
      // https://github.com/ant-design/ant-design/issues/23524
      e.preventDefault();
    }), _iconProps);
    return /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.isValidElement(icon) ? icon : /*#__PURE__*/React.createElement("span", null, icon), iconProps);
  };

  var renderPassword = function renderPassword(_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var className = props.className,
        customizePrefixCls = props.prefixCls,
        customizeInputPrefixCls = props.inputPrefixCls,
        size = props.size,
        visibilityToggle = props.visibilityToggle,
        restProps = __rest$4(props, ["className", "prefixCls", "inputPrefixCls", "size", "visibilityToggle"]);

    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    var prefixCls = getPrefixCls('input-password', customizePrefixCls);
    var suffixIcon = visibilityToggle && getIcon(prefixCls);
    var inputClassName = classnames(prefixCls, className, _defineProperty$4({}, "".concat(prefixCls, "-").concat(size), !!size));

    var omittedProps = _extends$2(_extends$2({}, omit(restProps, ['suffix', 'iconRender'])), {
      type: visible ? 'text' : 'password',
      className: inputClassName,
      prefixCls: inputPrefixCls,
      suffix: suffixIcon
    });

    if (size) {
      omittedProps.size = size;
    }

    return /*#__PURE__*/React.createElement(Input$1, _extends$2({
      ref: ref
    }, omittedProps));
  };

  return /*#__PURE__*/React.createElement(ConfigConsumer, null, renderPassword);
});
Password.defaultProps = {
  action: 'click',
  visibilityToggle: true,
  iconRender: function iconRender(visible) {
    return visible ? /*#__PURE__*/React.createElement(EyeOutlined$1, null) : /*#__PURE__*/React.createElement(EyeInvisibleOutlined$1, null);
  }
};
Password.displayName = 'Password';
var Password$1 = Password;

Input$1.Group = Group$2;
Input$1.Search = Search$2;
Input$1.TextArea = TextArea$1;
Input$1.Password = Password$1;

var __rest$3 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var GroupContext = /*#__PURE__*/React.createContext(null);

var InternalCheckboxGroup = function InternalCheckboxGroup(_a, ref) {
  var defaultValue = _a.defaultValue,
      children = _a.children,
      _a$options = _a.options,
      options = _a$options === void 0 ? [] : _a$options,
      customizePrefixCls = _a.prefixCls,
      className = _a.className,
      style = _a.style,
      onChange = _a.onChange,
      restProps = __rest$3(_a, ["defaultValue", "children", "options", "prefixCls", "className", "style", "onChange"]);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = React.useState(restProps.value || defaultValue || []),
      _React$useState2 = _slicedToArray$3(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray$3(_React$useState3, 2),
      registeredValues = _React$useState4[0],
      setRegisteredValues = _React$useState4[1];

  React.useEffect(function () {
    if ('value' in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);

  var getOptions = function getOptions() {
    return options.map(function (option) {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option
        };
      }

      return option;
    });
  };

  var cancelValue = function cancelValue(val) {
    setRegisteredValues(function (prevValues) {
      return prevValues.filter(function (v) {
        return v !== val;
      });
    });
  };

  var registerValue = function registerValue(val) {
    setRegisteredValues(function (prevValues) {
      return [].concat(_toConsumableArray(prevValues), [val]);
    });
  };

  var toggleOption = function toggleOption(option) {
    var optionIndex = value.indexOf(option.value);

    var newValue = _toConsumableArray(value);

    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }

    if (!('value' in restProps)) {
      setValue(newValue);
    }

    var opts = getOptions();
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue.filter(function (val) {
      return registeredValues.indexOf(val) !== -1;
    }).sort(function (a, b) {
      var indexA = opts.findIndex(function (opt) {
        return opt.value === a;
      });
      var indexB = opts.findIndex(function (opt) {
        return opt.value === b;
      });
      return indexA - indexB;
    }));
  };

  var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
  var groupPrefixCls = "".concat(prefixCls, "-group");
  var domProps = omit(restProps, ['value', 'disabled']);

  if (options && options.length > 0) {
    children = getOptions().map(function (option) {
      return /*#__PURE__*/React.createElement(InternalCheckbox$1, {
        prefixCls: prefixCls,
        key: option.value.toString(),
        disabled: 'disabled' in option ? option.disabled : restProps.disabled,
        value: option.value,
        checked: value.indexOf(option.value) !== -1,
        onChange: option.onChange,
        className: "".concat(groupPrefixCls, "-item"),
        style: option.style
      }, option.label);
    });
  }

  var context = {
    toggleOption: toggleOption,
    value: value,
    disabled: restProps.disabled,
    name: restProps.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue: registerValue,
    cancelValue: cancelValue
  };
  var classString = classnames(groupPrefixCls, _defineProperty$4({}, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/React.createElement("div", _extends$2({
    className: classString,
    style: style
  }, domProps, {
    ref: ref
  }), /*#__PURE__*/React.createElement(GroupContext.Provider, {
    value: context
  }, children));
};

var CheckboxGroup = /*#__PURE__*/React.forwardRef(InternalCheckboxGroup);
var Group = /*#__PURE__*/React.memo(CheckboxGroup);

var __rest$2 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var InternalCheckbox = function InternalCheckbox(_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      children = _a.children,
      _a$indeterminate = _a.indeterminate,
      indeterminate = _a$indeterminate === void 0 ? false : _a$indeterminate,
      style = _a.style,
      onMouseEnter = _a.onMouseEnter,
      onMouseLeave = _a.onMouseLeave,
      _a$skipGroup = _a.skipGroup,
      skipGroup = _a$skipGroup === void 0 ? false : _a$skipGroup,
      restProps = __rest$2(_a, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup"]);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var checkboxGroup = React.useContext(GroupContext);
  var prevValue = React.useRef(restProps.value);
  React.useEffect(function () {
    checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
    devWarning('checked' in restProps || !!checkboxGroup || !('value' in restProps), 'Checkbox', '`value` is not a valid prop, do you mean `checked`?');
  }, []);
  React.useEffect(function () {
    if (skipGroup) {
      return;
    }

    if (restProps.value !== prevValue.current) {
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(prevValue.current);
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
    }

    return function () {
      return checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(restProps.value);
    };
  }, [restProps.value]);
  var prefixCls = getPrefixCls('checkbox', customizePrefixCls);

  var checkboxProps = _extends$2({}, restProps);

  if (checkboxGroup && !skipGroup) {
    checkboxProps.onChange = function () {
      if (restProps.onChange) {
        restProps.onChange.apply(restProps, arguments);
      }

      if (checkboxGroup.toggleOption) {
        checkboxGroup.toggleOption({
          label: children,
          value: restProps.value
        });
      }
    };

    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value.indexOf(restProps.value) !== -1;
    checkboxProps.disabled = restProps.disabled || checkboxGroup.disabled;
  }

  var classString = classnames((_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-wrapper"), true), _defineProperty$4(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty$4(_classNames, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), _defineProperty$4(_classNames, "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), _classNames), className);
  var checkboxClass = classnames(_defineProperty$4({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    React.createElement("label", {
      className: classString,
      style: style,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }, /*#__PURE__*/React.createElement(Checkbox$3, _extends$2({}, checkboxProps, {
      prefixCls: prefixCls,
      className: checkboxClass,
      ref: ref
    })), children !== undefined && /*#__PURE__*/React.createElement("span", null, children))
  );
};

var Checkbox$2 = /*#__PURE__*/React.forwardRef(InternalCheckbox);
Checkbox$2.displayName = 'Checkbox';
var InternalCheckbox$1 = Checkbox$2;

var Checkbox = InternalCheckbox$1;
Checkbox.Group = Group;
Checkbox.__ANT_CHECKBOX = true;
var Checkbox$1 = Checkbox;

var Pager = function Pager(props) {
  var _classNames;

  var prefixCls = "".concat(props.rootPrefixCls, "-item");
  var cls = classnames(prefixCls, "".concat(prefixCls, "-").concat(props.page), (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-active"), props.active), _defineProperty$4(_classNames, "".concat(prefixCls, "-disabled"), !props.page), _defineProperty$4(_classNames, props.className, !!props.className), _classNames));

  var handleClick = function handleClick() {
    props.onClick(props.page);
  };

  var handleKeyPress = function handleKeyPress(e) {
    props.onKeyPress(e, props.onClick, props.page);
  };

  return /*#__PURE__*/React__default.createElement("li", {
    title: props.showTitle ? props.page : null,
    className: cls,
    onClick: handleClick,
    onKeyPress: handleKeyPress,
    tabIndex: "0"
  }, props.itemRender(props.page, 'page', /*#__PURE__*/React__default.createElement("a", {
    rel: "nofollow"
  }, props.page)));
};

var KEYCODE = {
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};

var Options = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Options, _React$Component);

  var _super = _createSuper$1(Options);

  function Options() {
    var _this;

    _classCallCheck$2(this, Options);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      goInputText: ''
    };

    _this.buildOptionText = function (value) {
      return "".concat(value, " ").concat(_this.props.locale.items_per_page);
    };

    _this.changeSize = function (value) {
      _this.props.changeSize(Number(value));
    };

    _this.handleChange = function (e) {
      _this.setState({
        goInputText: e.target.value
      });
    };

    _this.handleBlur = function (e) {
      var _this$props = _this.props,
          goButton = _this$props.goButton,
          quickGo = _this$props.quickGo,
          rootPrefixCls = _this$props.rootPrefixCls;
      var goInputText = _this.state.goInputText;

      if (goButton || goInputText === '') {
        return;
      }

      _this.setState({
        goInputText: ''
      });

      if (e.relatedTarget && (e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item-link")) >= 0 || e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item")) >= 0)) {
        return;
      }

      quickGo(_this.getValidValue());
    };

    _this.go = function (e) {
      var goInputText = _this.state.goInputText;

      if (goInputText === '') {
        return;
      }

      if (e.keyCode === KEYCODE.ENTER || e.type === 'click') {
        _this.setState({
          goInputText: ''
        });

        _this.props.quickGo(_this.getValidValue());
      }
    };

    return _this;
  }

  _createClass$2(Options, [{
    key: "getValidValue",
    value: function getValidValue() {
      var goInputText = this.state.goInputText; // eslint-disable-next-line no-restricted-globals

      return !goInputText || isNaN(goInputText) ? undefined : Number(goInputText);
    }
  }, {
    key: "getPageSizeOptions",
    value: function getPageSizeOptions() {
      var _this$props2 = this.props,
          pageSize = _this$props2.pageSize,
          pageSizeOptions = _this$props2.pageSizeOptions;

      if (pageSizeOptions.some(function (option) {
        return option.toString() === pageSize.toString();
      })) {
        return pageSizeOptions;
      }

      return pageSizeOptions.concat([pageSize.toString()]).sort(function (a, b) {
        // eslint-disable-next-line no-restricted-globals
        var numberA = isNaN(Number(a)) ? 0 : Number(a); // eslint-disable-next-line no-restricted-globals

        var numberB = isNaN(Number(b)) ? 0 : Number(b);
        return numberA - numberB;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          pageSize = _this$props3.pageSize,
          locale = _this$props3.locale,
          rootPrefixCls = _this$props3.rootPrefixCls,
          changeSize = _this$props3.changeSize,
          quickGo = _this$props3.quickGo,
          goButton = _this$props3.goButton,
          selectComponentClass = _this$props3.selectComponentClass,
          buildOptionText = _this$props3.buildOptionText,
          selectPrefixCls = _this$props3.selectPrefixCls,
          disabled = _this$props3.disabled;
      var goInputText = this.state.goInputText;
      var prefixCls = "".concat(rootPrefixCls, "-options");
      var Select = selectComponentClass;
      var changeSelect = null;
      var goInput = null;
      var gotoButton = null;

      if (!changeSize && !quickGo) {
        return null;
      }

      var pageSizeOptions = this.getPageSizeOptions();

      if (changeSize && Select) {
        var options = pageSizeOptions.map(function (opt, i) {
          return /*#__PURE__*/React__default.createElement(Select.Option, {
            key: i,
            value: opt.toString()
          }, (buildOptionText || _this2.buildOptionText)(opt));
        });
        changeSelect = /*#__PURE__*/React__default.createElement(Select, {
          disabled: disabled,
          prefixCls: selectPrefixCls,
          showSearch: false,
          className: "".concat(prefixCls, "-size-changer"),
          optionLabelProp: "children",
          dropdownMatchSelectWidth: false,
          value: (pageSize || pageSizeOptions[0]).toString(),
          onChange: this.changeSize,
          getPopupContainer: function getPopupContainer(triggerNode) {
            return triggerNode.parentNode;
          }
        }, options);
      }

      if (quickGo) {
        if (goButton) {
          gotoButton = typeof goButton === 'boolean' ? /*#__PURE__*/React__default.createElement("button", {
            type: "button",
            onClick: this.go,
            onKeyUp: this.go,
            disabled: disabled,
            className: "".concat(prefixCls, "-quick-jumper-button")
          }, locale.jump_to_confirm) : /*#__PURE__*/React__default.createElement("span", {
            onClick: this.go,
            onKeyUp: this.go
          }, goButton);
        }

        goInput = /*#__PURE__*/React__default.createElement("div", {
          className: "".concat(prefixCls, "-quick-jumper")
        }, locale.jump_to, /*#__PURE__*/React__default.createElement("input", {
          disabled: disabled,
          type: "text",
          value: goInputText,
          onChange: this.handleChange,
          onKeyUp: this.go,
          onBlur: this.handleBlur
        }), locale.page, gotoButton);
      }

      return /*#__PURE__*/React__default.createElement("li", {
        className: "".concat(prefixCls)
      }, changeSelect, goInput);
    }
  }]);

  return Options;
}(React__default.Component);

Options.defaultProps = {
  pageSizeOptions: ['10', '20', '50', '100']
};

var LOCALE = {
  // Options.jsx
  items_per_page: '条/页',
  jump_to: '跳至',
  jump_to_confirm: '确定',
  page: '页',
  // Pagination.jsx
  prev_page: '上一页',
  next_page: '下一页',
  prev_5: '向前 5 页',
  next_5: '向后 5 页',
  prev_3: '向前 3 页',
  next_3: '向后 3 页'
};

function noop() {}

function isInteger(value) {
  return (// eslint-disable-next-line no-restricted-globals
    typeof value === 'number' && isFinite(value) && Math.floor(value) === value
  );
}

function defaultItemRender(page, type, element) {
  return element;
}

function calculatePage(p, state, props) {
  var pageSize = typeof p === 'undefined' ? state.pageSize : p;
  return Math.floor((props.total - 1) / pageSize) + 1;
}

var Pagination$2 = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Pagination, _React$Component);

  var _super = _createSuper$1(Pagination);

  function Pagination(props) {
    var _this;

    _classCallCheck$2(this, Pagination);

    _this = _super.call(this, props);

    _this.getJumpPrevPage = function () {
      return Math.max(1, _this.state.current - (_this.props.showLessItems ? 3 : 5));
    };

    _this.getJumpNextPage = function () {
      return Math.min(calculatePage(undefined, _this.state, _this.props), _this.state.current + (_this.props.showLessItems ? 3 : 5));
    };

    _this.getItemIcon = function (icon, label) {
      var prefixCls = _this.props.prefixCls;
      var iconNode = icon || /*#__PURE__*/React__default.createElement("button", {
        type: "button",
        "aria-label": label,
        className: "".concat(prefixCls, "-item-link")
      });

      if (typeof icon === 'function') {
        iconNode = /*#__PURE__*/React__default.createElement(icon, _objectSpread2$1({}, _this.props));
      }

      return iconNode;
    };

    _this.savePaginationNode = function (node) {
      _this.paginationNode = node;
    };

    _this.isValid = function (page) {
      return isInteger(page) && page !== _this.state.current;
    };

    _this.shouldDisplayQuickJumper = function () {
      var _this$props = _this.props,
          showQuickJumper = _this$props.showQuickJumper,
          pageSize = _this$props.pageSize,
          total = _this$props.total;

      if (total <= pageSize) {
        return false;
      }

      return showQuickJumper;
    };

    _this.handleKeyDown = function (e) {
      if (e.keyCode === KEYCODE.ARROW_UP || e.keyCode === KEYCODE.ARROW_DOWN) {
        e.preventDefault();
      }
    };

    _this.handleKeyUp = function (e) {
      var value = _this.getValidValue(e);

      var currentInputValue = _this.state.currentInputValue;

      if (value !== currentInputValue) {
        _this.setState({
          currentInputValue: value
        });
      }

      if (e.keyCode === KEYCODE.ENTER) {
        _this.handleChange(value);
      } else if (e.keyCode === KEYCODE.ARROW_UP) {
        _this.handleChange(value - 1);
      } else if (e.keyCode === KEYCODE.ARROW_DOWN) {
        _this.handleChange(value + 1);
      }
    };

    _this.changePageSize = function (size) {
      var current = _this.state.current;
      var newCurrent = calculatePage(size, _this.state, _this.props);
      current = current > newCurrent ? newCurrent : current; // fix the issue:
      // Once 'total' is 0, 'current' in 'onShowSizeChange' is 0, which is not correct.

      if (newCurrent === 0) {
        // eslint-disable-next-line prefer-destructuring
        current = _this.state.current;
      }

      if (typeof size === 'number') {
        if (!('pageSize' in _this.props)) {
          _this.setState({
            pageSize: size
          });
        }

        if (!('current' in _this.props)) {
          _this.setState({
            current: current,
            currentInputValue: current
          });
        }
      }

      _this.props.onShowSizeChange(current, size);

      if ('onChange' in _this.props && _this.props.onChange) {
        _this.props.onChange(current, size);
      }
    };

    _this.handleChange = function (p) {
      var disabled = _this.props.disabled;
      var page = p;

      if (_this.isValid(page) && !disabled) {
        var currentPage = calculatePage(undefined, _this.state, _this.props);

        if (page > currentPage) {
          page = currentPage;
        } else if (page < 1) {
          page = 1;
        }

        if (!('current' in _this.props)) {
          _this.setState({
            current: page,
            currentInputValue: page
          });
        }

        var pageSize = _this.state.pageSize;

        _this.props.onChange(page, pageSize);

        return page;
      }

      return _this.state.current;
    };

    _this.prev = function () {
      if (_this.hasPrev()) {
        _this.handleChange(_this.state.current - 1);
      }
    };

    _this.next = function () {
      if (_this.hasNext()) {
        _this.handleChange(_this.state.current + 1);
      }
    };

    _this.jumpPrev = function () {
      _this.handleChange(_this.getJumpPrevPage());
    };

    _this.jumpNext = function () {
      _this.handleChange(_this.getJumpNextPage());
    };

    _this.hasPrev = function () {
      return _this.state.current > 1;
    };

    _this.hasNext = function () {
      return _this.state.current < calculatePage(undefined, _this.state, _this.props);
    };

    _this.runIfEnter = function (event, callback) {
      if (event.key === 'Enter' || event.charCode === 13) {
        for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          restParams[_key - 2] = arguments[_key];
        }

        callback.apply(void 0, restParams);
      }
    };

    _this.runIfEnterPrev = function (e) {
      _this.runIfEnter(e, _this.prev);
    };

    _this.runIfEnterNext = function (e) {
      _this.runIfEnter(e, _this.next);
    };

    _this.runIfEnterJumpPrev = function (e) {
      _this.runIfEnter(e, _this.jumpPrev);
    };

    _this.runIfEnterJumpNext = function (e) {
      _this.runIfEnter(e, _this.jumpNext);
    };

    _this.handleGoTO = function (e) {
      if (e.keyCode === KEYCODE.ENTER || e.type === 'click') {
        _this.handleChange(_this.state.currentInputValue);
      }
    };

    var hasOnChange = props.onChange !== noop;
    var hasCurrent = ('current' in props);

    if (hasCurrent && !hasOnChange) {
      // eslint-disable-next-line no-console
      console.warn('Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.');
    }

    var _current = props.defaultCurrent;

    if ('current' in props) {
      // eslint-disable-next-line prefer-destructuring
      _current = props.current;
    }

    var _pageSize = props.defaultPageSize;

    if ('pageSize' in props) {
      // eslint-disable-next-line prefer-destructuring
      _pageSize = props.pageSize;
    }

    _current = Math.min(_current, calculatePage(_pageSize, undefined, props));
    _this.state = {
      current: _current,
      currentInputValue: _current,
      pageSize: _pageSize
    };
    return _this;
  }

  _createClass$2(Pagination, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // When current page change, fix focused style of prev item
      // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
      var prefixCls = this.props.prefixCls;

      if (prevState.current !== this.state.current && this.paginationNode) {
        var lastCurrentNode = this.paginationNode.querySelector(".".concat(prefixCls, "-item-").concat(prevState.current));

        if (lastCurrentNode && document.activeElement === lastCurrentNode) {
          lastCurrentNode.blur();
        }
      }
    }
  }, {
    key: "getValidValue",
    value: function getValidValue(e) {
      var inputValue = e.target.value;
      var allPages = calculatePage(undefined, this.state, this.props);
      var currentInputValue = this.state.currentInputValue;
      var value;

      if (inputValue === '') {
        value = inputValue; // eslint-disable-next-line no-restricted-globals
      } else if (isNaN(Number(inputValue))) {
        value = currentInputValue;
      } else if (inputValue >= allPages) {
        value = allPages;
      } else {
        value = Number(inputValue);
      }

      return value;
    }
  }, {
    key: "getShowSizeChanger",
    value: function getShowSizeChanger() {
      var _this$props2 = this.props,
          showSizeChanger = _this$props2.showSizeChanger,
          total = _this$props2.total,
          totalBoundaryShowSizeChanger = _this$props2.totalBoundaryShowSizeChanger;

      if (typeof showSizeChanger !== 'undefined') {
        return showSizeChanger;
      }

      return total > totalBoundaryShowSizeChanger;
    }
  }, {
    key: "renderPrev",
    value: function renderPrev(prevPage) {
      var _this$props3 = this.props,
          prevIcon = _this$props3.prevIcon,
          itemRender = _this$props3.itemRender;
      var prevButton = itemRender(prevPage, 'prev', this.getItemIcon(prevIcon, 'prev page'));
      var disabled = !this.hasPrev();
      return /*#__PURE__*/isValidElement$1(prevButton) ? /*#__PURE__*/cloneElement$1(prevButton, {
        disabled: disabled
      }) : prevButton;
    }
  }, {
    key: "renderNext",
    value: function renderNext(nextPage) {
      var _this$props4 = this.props,
          nextIcon = _this$props4.nextIcon,
          itemRender = _this$props4.itemRender;
      var nextButton = itemRender(nextPage, 'next', this.getItemIcon(nextIcon, 'next page'));
      var disabled = !this.hasNext();
      return /*#__PURE__*/isValidElement$1(nextButton) ? /*#__PURE__*/cloneElement$1(nextButton, {
        disabled: disabled
      }) : nextButton;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          prefixCls = _this$props5.prefixCls,
          className = _this$props5.className,
          style = _this$props5.style,
          disabled = _this$props5.disabled,
          hideOnSinglePage = _this$props5.hideOnSinglePage,
          total = _this$props5.total,
          locale = _this$props5.locale,
          showQuickJumper = _this$props5.showQuickJumper,
          showLessItems = _this$props5.showLessItems,
          showTitle = _this$props5.showTitle,
          showTotal = _this$props5.showTotal,
          simple = _this$props5.simple,
          itemRender = _this$props5.itemRender,
          showPrevNextJumpers = _this$props5.showPrevNextJumpers,
          jumpPrevIcon = _this$props5.jumpPrevIcon,
          jumpNextIcon = _this$props5.jumpNextIcon,
          selectComponentClass = _this$props5.selectComponentClass,
          selectPrefixCls = _this$props5.selectPrefixCls,
          pageSizeOptions = _this$props5.pageSizeOptions;
      var _this$state = this.state,
          current = _this$state.current,
          pageSize = _this$state.pageSize,
          currentInputValue = _this$state.currentInputValue; // When hideOnSinglePage is true and there is only 1 page, hide the pager

      if (hideOnSinglePage === true && total <= pageSize) {
        return null;
      }

      var allPages = calculatePage(undefined, this.state, this.props);
      var pagerList = [];
      var jumpPrev = null;
      var jumpNext = null;
      var firstPager = null;
      var lastPager = null;
      var gotoButton = null;
      var goButton = showQuickJumper && showQuickJumper.goButton;
      var pageBufferSize = showLessItems ? 1 : 2;
      var prevPage = current - 1 > 0 ? current - 1 : 0;
      var nextPage = current + 1 < allPages ? current + 1 : allPages;
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          // eslint-disable-next-line no-param-reassign
          prev[key] = _this2.props[key];
        }

        return prev;
      }, {});

      if (simple) {
        if (goButton) {
          if (typeof goButton === 'boolean') {
            gotoButton = /*#__PURE__*/React__default.createElement("button", {
              type: "button",
              onClick: this.handleGoTO,
              onKeyUp: this.handleGoTO
            }, locale.jump_to_confirm);
          } else {
            gotoButton = /*#__PURE__*/React__default.createElement("span", {
              onClick: this.handleGoTO,
              onKeyUp: this.handleGoTO
            }, goButton);
          }

          gotoButton = /*#__PURE__*/React__default.createElement("li", {
            title: showTitle ? "".concat(locale.jump_to).concat(current, "/").concat(allPages) : null,
            className: "".concat(prefixCls, "-simple-pager")
          }, gotoButton);
        }

        return /*#__PURE__*/React__default.createElement("ul", _extends$2({
          className: classnames(prefixCls, "".concat(prefixCls, "-simple"), _defineProperty$4({}, "".concat(prefixCls, "-disabled"), disabled), className),
          style: style,
          ref: this.savePaginationNode
        }, dataOrAriaAttributeProps), /*#__PURE__*/React__default.createElement("li", {
          title: showTitle ? locale.prev_page : null,
          onClick: this.prev,
          tabIndex: this.hasPrev() ? 0 : null,
          onKeyPress: this.runIfEnterPrev,
          className: classnames("".concat(prefixCls, "-prev"), _defineProperty$4({}, "".concat(prefixCls, "-disabled"), !this.hasPrev())),
          "aria-disabled": !this.hasPrev()
        }, this.renderPrev(prevPage)), /*#__PURE__*/React__default.createElement("li", {
          title: showTitle ? "".concat(current, "/").concat(allPages) : null,
          className: "".concat(prefixCls, "-simple-pager")
        }, /*#__PURE__*/React__default.createElement("input", {
          type: "text",
          value: currentInputValue,
          disabled: disabled,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onChange: this.handleKeyUp,
          size: "3"
        }), /*#__PURE__*/React__default.createElement("span", {
          className: "".concat(prefixCls, "-slash")
        }, "/"), allPages), /*#__PURE__*/React__default.createElement("li", {
          title: showTitle ? locale.next_page : null,
          onClick: this.next,
          tabIndex: this.hasPrev() ? 0 : null,
          onKeyPress: this.runIfEnterNext,
          className: classnames("".concat(prefixCls, "-next"), _defineProperty$4({}, "".concat(prefixCls, "-disabled"), !this.hasNext())),
          "aria-disabled": !this.hasNext()
        }, this.renderNext(nextPage)), gotoButton);
      }

      if (allPages <= 3 + pageBufferSize * 2) {
        var pagerProps = {
          locale: locale,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          showTitle: showTitle,
          itemRender: itemRender
        };

        if (!allPages) {
          pagerList.push( /*#__PURE__*/React__default.createElement(Pager, _extends$2({}, pagerProps, {
            key: "noPager",
            page: 1,
            className: "".concat(prefixCls, "-item-disabled")
          })));
        }

        for (var i = 1; i <= allPages; i += 1) {
          var active = current === i;
          pagerList.push( /*#__PURE__*/React__default.createElement(Pager, _extends$2({}, pagerProps, {
            key: i,
            page: i,
            active: active
          })));
        }
      } else {
        var prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
        var nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;

        if (showPrevNextJumpers) {
          jumpPrev = /*#__PURE__*/React__default.createElement("li", {
            title: showTitle ? prevItemTitle : null,
            key: "prev",
            onClick: this.jumpPrev,
            tabIndex: "0",
            onKeyPress: this.runIfEnterJumpPrev,
            className: classnames("".concat(prefixCls, "-jump-prev"), _defineProperty$4({}, "".concat(prefixCls, "-jump-prev-custom-icon"), !!jumpPrevIcon))
          }, itemRender(this.getJumpPrevPage(), 'jump-prev', this.getItemIcon(jumpPrevIcon, 'prev page')));
          jumpNext = /*#__PURE__*/React__default.createElement("li", {
            title: showTitle ? nextItemTitle : null,
            key: "next",
            tabIndex: "0",
            onClick: this.jumpNext,
            onKeyPress: this.runIfEnterJumpNext,
            className: classnames("".concat(prefixCls, "-jump-next"), _defineProperty$4({}, "".concat(prefixCls, "-jump-next-custom-icon"), !!jumpNextIcon))
          }, itemRender(this.getJumpNextPage(), 'jump-next', this.getItemIcon(jumpNextIcon, 'next page')));
        }

        lastPager = /*#__PURE__*/React__default.createElement(Pager, {
          locale: locale,
          last: true,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: allPages,
          page: allPages,
          active: false,
          showTitle: showTitle,
          itemRender: itemRender
        });
        firstPager = /*#__PURE__*/React__default.createElement(Pager, {
          locale: locale,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: 1,
          page: 1,
          active: false,
          showTitle: showTitle,
          itemRender: itemRender
        });
        var left = Math.max(1, current - pageBufferSize);
        var right = Math.min(current + pageBufferSize, allPages);

        if (current - 1 <= pageBufferSize) {
          right = 1 + pageBufferSize * 2;
        }

        if (allPages - current <= pageBufferSize) {
          left = allPages - pageBufferSize * 2;
        }

        for (var _i = left; _i <= right; _i += 1) {
          var _active = current === _i;

          pagerList.push( /*#__PURE__*/React__default.createElement(Pager, {
            locale: locale,
            rootPrefixCls: prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: _i,
            page: _i,
            active: _active,
            showTitle: showTitle,
            itemRender: itemRender
          }));
        }

        if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
          pagerList[0] = /*#__PURE__*/cloneElement$1(pagerList[0], {
            className: "".concat(prefixCls, "-item-after-jump-prev")
          });
          pagerList.unshift(jumpPrev);
        }

        if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
          pagerList[pagerList.length - 1] = /*#__PURE__*/cloneElement$1(pagerList[pagerList.length - 1], {
            className: "".concat(prefixCls, "-item-before-jump-next")
          });
          pagerList.push(jumpNext);
        }

        if (left !== 1) {
          pagerList.unshift(firstPager);
        }

        if (right !== allPages) {
          pagerList.push(lastPager);
        }
      }

      var totalText = null;

      if (showTotal) {
        totalText = /*#__PURE__*/React__default.createElement("li", {
          className: "".concat(prefixCls, "-total-text")
        }, showTotal(total, [total === 0 ? 0 : (current - 1) * pageSize + 1, current * pageSize > total ? total : current * pageSize]));
      }

      var prevDisabled = !this.hasPrev() || !allPages;
      var nextDisabled = !this.hasNext() || !allPages;
      return /*#__PURE__*/React__default.createElement("ul", _extends$2({
        className: classnames(prefixCls, className, _defineProperty$4({}, "".concat(prefixCls, "-disabled"), disabled)),
        style: style,
        unselectable: "unselectable",
        ref: this.savePaginationNode
      }, dataOrAriaAttributeProps), totalText, /*#__PURE__*/React__default.createElement("li", {
        title: showTitle ? locale.prev_page : null,
        onClick: this.prev,
        tabIndex: prevDisabled ? null : 0,
        onKeyPress: this.runIfEnterPrev,
        className: classnames("".concat(prefixCls, "-prev"), _defineProperty$4({}, "".concat(prefixCls, "-disabled"), prevDisabled)),
        "aria-disabled": prevDisabled
      }, this.renderPrev(prevPage)), pagerList, /*#__PURE__*/React__default.createElement("li", {
        title: showTitle ? locale.next_page : null,
        onClick: this.next,
        tabIndex: nextDisabled ? null : 0,
        onKeyPress: this.runIfEnterNext,
        className: classnames("".concat(prefixCls, "-next"), _defineProperty$4({}, "".concat(prefixCls, "-disabled"), nextDisabled)),
        "aria-disabled": nextDisabled
      }, this.renderNext(nextPage)), /*#__PURE__*/React__default.createElement(Options, {
        disabled: disabled,
        locale: locale,
        rootPrefixCls: prefixCls,
        selectComponentClass: selectComponentClass,
        selectPrefixCls: selectPrefixCls,
        changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
        current: current,
        pageSize: pageSize,
        pageSizeOptions: pageSizeOptions,
        quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
        goButton: goButton
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var newState = {};

      if ('current' in props) {
        newState.current = props.current;

        if (props.current !== prevState.current) {
          newState.currentInputValue = newState.current;
        }
      }

      if ('pageSize' in props && props.pageSize !== prevState.pageSize) {
        var current = prevState.current;
        var newCurrent = calculatePage(props.pageSize, prevState, props);
        current = current > newCurrent ? newCurrent : current;

        if (!('current' in props)) {
          newState.current = current;
          newState.currentInputValue = current;
        }

        newState.pageSize = props.pageSize;
      }

      return newState;
    }
  }]);

  return Pagination;
}(React__default.Component);

Pagination$2.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  defaultPageSize: 10,
  onChange: noop,
  className: '',
  selectPrefixCls: 'rc-select',
  prefixCls: 'rc-pagination',
  selectComponentClass: null,
  hideOnSinglePage: false,
  showPrevNextJumpers: true,
  showQuickJumper: false,
  showLessItems: false,
  showTitle: true,
  onShowSizeChange: noop,
  locale: LOCALE,
  style: {},
  itemRender: defaultItemRender,
  totalBoundaryShowSizeChanger: 50
};

// This icon file is generated automatically.
var DoubleLeftOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"
      }
    }]
  },
  "name": "double-left",
  "theme": "outlined"
};
var DoubleLeftOutlinedSvg = DoubleLeftOutlined$2;

// GENERATE BY ./scripts/generate.ts

var DoubleLeftOutlined = function DoubleLeftOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: DoubleLeftOutlinedSvg
  }));
};

DoubleLeftOutlined.displayName = 'DoubleLeftOutlined';
var DoubleLeftOutlined$1 = /*#__PURE__*/React.forwardRef(DoubleLeftOutlined);

// This icon file is generated automatically.
var DoubleRightOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
      }
    }]
  },
  "name": "double-right",
  "theme": "outlined"
};
var DoubleRightOutlinedSvg = DoubleRightOutlined$2;

// GENERATE BY ./scripts/generate.ts

var DoubleRightOutlined = function DoubleRightOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: DoubleRightOutlinedSvg
  }));
};

DoubleRightOutlined.displayName = 'DoubleRightOutlined';
var DoubleRightOutlined$1 = /*#__PURE__*/React.forwardRef(DoubleRightOutlined);

var MiniSelect = function MiniSelect(props) {
  return /*#__PURE__*/React.createElement(Select$1, _extends$2({
    size: "small"
  }, props));
};

MiniSelect.Option = Select$1.Option;
var MiniSelect$1 = MiniSelect;

var __rest$1 = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Pagination = function Pagination(_a) {
  var customizePrefixCls = _a.prefixCls,
      customizeSelectPrefixCls = _a.selectPrefixCls,
      className = _a.className,
      size = _a.size,
      customLocale = _a.locale,
      restProps = __rest$1(_a, ["prefixCls", "selectPrefixCls", "className", "size", "locale"]);

  var _useBreakpoint = useBreakpoint(),
      xs = _useBreakpoint.xs;

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('pagination', customizePrefixCls);

  var getIconsProps = function getIconsProps() {
    var ellipsis = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-item-ellipsis")
    }, "\u2022\u2022\u2022");
    var prevIcon = /*#__PURE__*/React.createElement("button", {
      className: "".concat(prefixCls, "-item-link"),
      type: "button",
      tabIndex: -1
    }, /*#__PURE__*/React.createElement(LeftOutlined$1, null));
    var nextIcon = /*#__PURE__*/React.createElement("button", {
      className: "".concat(prefixCls, "-item-link"),
      type: "button",
      tabIndex: -1
    }, /*#__PURE__*/React.createElement(RightOutlined$1, null));
    var jumpPrevIcon = /*#__PURE__*/React.createElement("a", {
      className: "".concat(prefixCls, "-item-link")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-item-container")
    }, /*#__PURE__*/React.createElement(DoubleLeftOutlined$1, {
      className: "".concat(prefixCls, "-item-link-icon")
    }), ellipsis));
    var jumpNextIcon = /*#__PURE__*/React.createElement("a", {
      className: "".concat(prefixCls, "-item-link")
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-item-container")
    }, /*#__PURE__*/React.createElement(DoubleRightOutlined$1, {
      className: "".concat(prefixCls, "-item-link-icon")
    }), ellipsis)); // change arrows direction in right-to-left direction

    if (direction === 'rtl') {
      var _ref = [nextIcon, prevIcon];
      prevIcon = _ref[0];
      nextIcon = _ref[1];
      var _ref2 = [jumpNextIcon, jumpPrevIcon];
      jumpPrevIcon = _ref2[0];
      jumpNextIcon = _ref2[1];
    }

    return {
      prevIcon: prevIcon,
      nextIcon: nextIcon,
      jumpPrevIcon: jumpPrevIcon,
      jumpNextIcon: jumpNextIcon
    };
  };

  var renderPagination = function renderPagination(contextLocale) {
    var locale = _extends$2(_extends$2({}, contextLocale), customLocale);

    var isSmall = size === 'small' || !!(xs && !size && restProps.responsive);
    var selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);
    var extendedClassName = classnames(_defineProperty$4({
      mini: isSmall
    }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
    return /*#__PURE__*/React.createElement(Pagination$2, _extends$2({}, restProps, {
      prefixCls: prefixCls,
      selectPrefixCls: selectPrefixCls
    }, getIconsProps(), {
      className: extendedClassName,
      selectComponentClass: isSmall ? MiniSelect$1 : Select$1,
      locale: locale
    }));
  };

  return /*#__PURE__*/React.createElement(LocaleReceiver, {
    componentName: "Pagination",
    defaultLocale: enUS$1
  }, renderPagination);
};

var Pagination$1 = Pagination;

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var inlineStyle = {
  border: 0,
  background: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  display: 'inline-block'
};
var TransButton = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var onKeyDown = function onKeyDown(event) {
    var keyCode = event.keyCode;

    if (keyCode === KeyCode.ENTER) {
      event.preventDefault();
    }
  };

  var onKeyUp = function onKeyUp(event) {
    var keyCode = event.keyCode;
    var onClick = props.onClick;

    if (keyCode === KeyCode.ENTER && onClick) {
      onClick();
    }
  };

  var style = props.style,
      noStyle = props.noStyle,
      disabled = props.disabled,
      restProps = __rest(props, ["style", "noStyle", "disabled"]);

  var mergedStyle = {};

  if (!noStyle) {
    mergedStyle = _extends$2({}, inlineStyle);
  }

  if (disabled) {
    mergedStyle.pointerEvents = 'none';
  }

  mergedStyle = _extends$2(_extends$2({}, mergedStyle), style);
  return /*#__PURE__*/React.createElement("div", _extends$2({
    role: "button",
    tabIndex: 0,
    ref: ref
  }, restProps, {
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    style: mergedStyle
  }));
});
var TransButton$1 = TransButton;

function Search(props) {
  var _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      value = props.value,
      prefixCls = props.prefixCls,
      disabled = props.disabled,
      onChange = props.onChange,
      handleClear = props.handleClear;
  var handleChange = React.useCallback(function (e) {
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  }, [onChange]);

  var handleClearFn = function handleClearFn(e) {
    e.preventDefault();

    if (!disabled && handleClear) {
      handleClear(e);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input$1, {
    placeholder: placeholder,
    className: prefixCls,
    value: value,
    onChange: handleChange,
    disabled: disabled
  }), value && value.length > 0 ? /*#__PURE__*/React.createElement("a", {
    className: "".concat(prefixCls, "-action"),
    onClick: handleClearFn
  }, /*#__PURE__*/React.createElement(CloseCircleFilled$1, null)) : /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-action")
  }, /*#__PURE__*/React.createElement(SearchOutlined$1, null)));
}

// This icon file is generated automatically.
var DeleteOutlined$2 = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
      }
    }]
  },
  "name": "delete",
  "theme": "outlined"
};
var DeleteOutlinedSvg = DeleteOutlined$2;

// GENERATE BY ./scripts/generate.ts

var DeleteOutlined = function DeleteOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(AntdIcon, Object.assign({}, props, {
    ref: ref,
    icon: DeleteOutlinedSvg
  }));
};

DeleteOutlined.displayName = 'DeleteOutlined';
var DeleteOutlined$1 = /*#__PURE__*/React.forwardRef(DeleteOutlined);

var ListItem = function ListItem(props) {
  var _classNames;

  var renderedText = props.renderedText,
      renderedEl = props.renderedEl,
      item = props.item,
      checked = props.checked,
      disabled = props.disabled,
      prefixCls = props.prefixCls,
      onClick = props.onClick,
      onRemove = props.onRemove,
      showRemove = props.showRemove;
  var className = classnames((_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-content-item"), true), _defineProperty$4(_classNames, "".concat(prefixCls, "-content-item-disabled"), disabled || item.disabled), _defineProperty$4(_classNames, "".concat(prefixCls, "-content-item-checked"), checked), _classNames));
  var title;

  if (typeof renderedText === 'string' || typeof renderedText === 'number') {
    title = String(renderedText);
  }

  return /*#__PURE__*/React.createElement(LocaleReceiver, {
    componentName: "Transfer",
    defaultLocale: defaultLocale.Transfer
  }, function (transferLocale) {
    var liProps = {
      className: className,
      title: title
    };
    var labelNode = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-content-item-text")
    }, renderedEl); // Show remove

    if (showRemove) {
      return /*#__PURE__*/React.createElement("li", liProps, labelNode, /*#__PURE__*/React.createElement(TransButton$1, {
        disabled: disabled || item.disabled,
        className: "".concat(prefixCls, "-content-item-remove"),
        "aria-label": transferLocale.remove,
        onClick: function onClick() {
          onRemove === null || onRemove === void 0 ? void 0 : onRemove(item);
        }
      }, /*#__PURE__*/React.createElement(DeleteOutlined$1, null)));
    } // Default click to select


    liProps.onClick = disabled || item.disabled ? undefined : function () {
      return onClick(item);
    };
    return /*#__PURE__*/React.createElement("li", liProps, /*#__PURE__*/React.createElement(Checkbox$1, {
      className: "".concat(prefixCls, "-checkbox"),
      checked: checked,
      disabled: disabled || item.disabled
    }), labelNode);
  });
};

var ListItem$1 = /*#__PURE__*/React.memo(ListItem);

var OmitProps = tuple('handleFilter', 'handleClear', 'checkedKeys');

function parsePagination(pagination) {
  if (!pagination) {
    return null;
  }

  var defaultPagination = {
    pageSize: 10
  };

  if (_typeof$4(pagination) === 'object') {
    return _extends$2(_extends$2({}, defaultPagination), pagination);
  }

  return defaultPagination;
}

var ListBody = /*#__PURE__*/function (_React$Component) {
  _inherits$1(ListBody, _React$Component);

  var _super = _createSuper$1(ListBody);

  function ListBody() {
    var _this;

    _classCallCheck$2(this, ListBody);

    _this = _super.apply(this, arguments);
    _this.state = {
      current: 1
    };

    _this.onItemSelect = function (item) {
      var _this$props = _this.props,
          onItemSelect = _this$props.onItemSelect,
          selectedKeys = _this$props.selectedKeys;
      var checked = selectedKeys.indexOf(item.key) >= 0;
      onItemSelect(item.key, !checked);
    };

    _this.onItemRemove = function (item) {
      var onItemRemove = _this.props.onItemRemove;
      onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove([item.key]);
    };

    _this.onPageChange = function (current) {
      _this.setState({
        current: current
      });
    };

    _this.getItems = function () {
      var current = _this.state.current;
      var _this$props2 = _this.props,
          pagination = _this$props2.pagination,
          filteredRenderItems = _this$props2.filteredRenderItems;
      var mergedPagination = parsePagination(pagination);
      var displayItems = filteredRenderItems;

      if (mergedPagination) {
        displayItems = filteredRenderItems.slice((current - 1) * mergedPagination.pageSize, current * mergedPagination.pageSize);
      }

      return displayItems;
    };

    return _this;
  }

  _createClass$2(ListBody, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var current = this.state.current;
      var _this$props3 = this.props,
          prefixCls = _this$props3.prefixCls,
          onScroll = _this$props3.onScroll,
          filteredRenderItems = _this$props3.filteredRenderItems,
          selectedKeys = _this$props3.selectedKeys,
          globalDisabled = _this$props3.disabled,
          showRemove = _this$props3.showRemove,
          pagination = _this$props3.pagination;
      var mergedPagination = parsePagination(pagination);
      var paginationNode = null;

      if (mergedPagination) {
        paginationNode = /*#__PURE__*/React.createElement(Pagination$1, {
          simple: true,
          size: "small",
          disabled: globalDisabled,
          className: "".concat(prefixCls, "-pagination"),
          total: filteredRenderItems.length,
          pageSize: mergedPagination.pageSize,
          current: current,
          onChange: this.onPageChange
        });
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
        className: classnames("".concat(prefixCls, "-content"), _defineProperty$4({}, "".concat(prefixCls, "-content-show-remove"), showRemove)),
        onScroll: onScroll
      }, this.getItems().map(function (_ref) {
        var renderedEl = _ref.renderedEl,
            renderedText = _ref.renderedText,
            item = _ref.item;
        var disabled = item.disabled;
        var checked = selectedKeys.indexOf(item.key) >= 0;
        return /*#__PURE__*/React.createElement(ListItem$1, {
          disabled: globalDisabled || disabled,
          key: item.key,
          item: item,
          renderedText: renderedText,
          renderedEl: renderedEl,
          checked: checked,
          prefixCls: prefixCls,
          onClick: _this2.onItemSelect,
          onRemove: _this2.onItemRemove,
          showRemove: showRemove
        });
      })), paginationNode);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, _ref3) {
      var filteredRenderItems = _ref2.filteredRenderItems,
          pagination = _ref2.pagination;
      var current = _ref3.current;
      var mergedPagination = parsePagination(pagination);

      if (mergedPagination) {
        // Calculate the page number
        var maxPageCount = Math.ceil(filteredRenderItems.length / mergedPagination.pageSize);

        if (current > maxPageCount) {
          return {
            current: maxPageCount
          };
        }
      }

      return null;
    }
  }]);

  return ListBody;
}(React.Component);

var DefaultListBody = ListBody;

var defaultRender = function defaultRender() {
  return null;
};

function isRenderResultPlainObject(result) {
  return result && !isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
}

function getEnabledItemKeys(items) {
  return items.filter(function (data) {
    return !data.disabled;
  }).map(function (data) {
    return data.key;
  });
}

var TransferList = /*#__PURE__*/function (_React$PureComponent) {
  _inherits$1(TransferList, _React$PureComponent);

  var _super = _createSuper$1(TransferList);

  function TransferList(props) {
    var _this;

    _classCallCheck$2(this, TransferList);

    _this = _super.call(this, props);
    _this.defaultListBodyRef = /*#__PURE__*/React.createRef(); // =============================== Filter ===============================

    _this.handleFilter = function (e) {
      var handleFilter = _this.props.handleFilter;
      var filterValue = e.target.value;

      _this.setState({
        filterValue: filterValue
      });

      handleFilter(e);
    };

    _this.handleClear = function () {
      var handleClear = _this.props.handleClear;

      _this.setState({
        filterValue: ''
      });

      handleClear();
    };

    _this.matchFilter = function (text, item) {
      var filterValue = _this.state.filterValue;
      var filterOption = _this.props.filterOption;

      if (filterOption) {
        return filterOption(filterValue, item);
      }

      return text.indexOf(filterValue) >= 0;
    };

    _this.getCurrentPageItems = function () {}; // =============================== Render ===============================


    _this.renderListBody = function (renderList, props) {
      var bodyContent = renderList ? renderList(props) : null;
      var customize = !!bodyContent;

      if (!customize) {
        bodyContent = /*#__PURE__*/React.createElement(DefaultListBody, _extends$2({
          ref: _this.defaultListBodyRef
        }, props));
      }

      return {
        customize: customize,
        bodyContent: bodyContent
      };
    };

    _this.renderItem = function (item) {
      var _this$props$render = _this.props.render,
          render = _this$props$render === void 0 ? defaultRender : _this$props$render;
      var renderResult = render(item);
      var isRenderResultPlain = isRenderResultPlainObject(renderResult);
      return {
        renderedText: isRenderResultPlain ? renderResult.value : renderResult,
        renderedEl: isRenderResultPlain ? renderResult.label : renderResult,
        item: item
      };
    };

    _this.getSelectAllLabel = function (selectedCount, totalCount) {
      var _this$props = _this.props,
          itemsUnit = _this$props.itemsUnit,
          itemUnit = _this$props.itemUnit,
          selectAllLabel = _this$props.selectAllLabel;

      if (selectAllLabel) {
        return typeof selectAllLabel === 'function' ? selectAllLabel({
          selectedCount: selectedCount,
          totalCount: totalCount
        }) : selectAllLabel;
      }

      var unit = totalCount > 1 ? itemsUnit : itemUnit;
      return /*#__PURE__*/React.createElement(React.Fragment, null, (selectedCount > 0 ? "".concat(selectedCount, "/") : '') + totalCount, " ", unit);
    };

    _this.state = {
      filterValue: ''
    };
    return _this;
  }

  _createClass$2(TransferList, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.triggerScrollTimer);
    }
  }, {
    key: "getCheckStatus",
    value: function getCheckStatus(filteredItems) {
      var checkedKeys = this.props.checkedKeys;

      if (checkedKeys.length === 0) {
        return 'none';
      }

      if (filteredItems.every(function (item) {
        return checkedKeys.indexOf(item.key) >= 0 || !!item.disabled;
      })) {
        return 'all';
      }

      return 'part';
    } // ================================ Item ================================

  }, {
    key: "getFilteredItems",
    value: function getFilteredItems(dataSource, filterValue) {
      var _this2 = this;

      var filteredItems = [];
      var filteredRenderItems = [];
      dataSource.forEach(function (item) {
        var renderedItem = _this2.renderItem(item);

        var renderedText = renderedItem.renderedText; // Filter skip

        if (filterValue && !_this2.matchFilter(renderedText, item)) {
          return null;
        }

        filteredItems.push(item);
        filteredRenderItems.push(renderedItem);
      });
      return {
        filteredItems: filteredItems,
        filteredRenderItems: filteredRenderItems
      };
    }
  }, {
    key: "getListBody",
    value: function getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, filteredRenderItems, checkedKeys, renderList, showSearch, disabled) {
      var search = showSearch ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-body-search-wrapper")
      }, /*#__PURE__*/React.createElement(Search, {
        prefixCls: "".concat(prefixCls, "-search"),
        onChange: this.handleFilter,
        handleClear: this.handleClear,
        placeholder: searchPlaceholder,
        value: filterValue,
        disabled: disabled
      })) : null;

      var _this$renderListBody = this.renderListBody(renderList, _extends$2(_extends$2({}, omit(this.props, OmitProps)), {
        filteredItems: filteredItems,
        filteredRenderItems: filteredRenderItems,
        selectedKeys: checkedKeys
      })),
          bodyContent = _this$renderListBody.bodyContent,
          customize = _this$renderListBody.customize;

      var bodyNode; // We should wrap customize list body in a classNamed div to use flex layout.

      if (customize) {
        bodyNode = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-body-customize-wrapper")
        }, bodyContent);
      } else {
        bodyNode = filteredItems.length ? bodyContent : /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-body-not-found")
        }, notFoundContent);
      }

      return /*#__PURE__*/React.createElement("div", {
        className: classnames(showSearch ? "".concat(prefixCls, "-body ").concat(prefixCls, "-body-with-search") : "".concat(prefixCls, "-body"))
      }, search, bodyNode);
    }
  }, {
    key: "getCheckBox",
    value: function getCheckBox(filteredItems, onItemSelectAll, showSelectAll, disabled, prefixCls) {
      var checkStatus = this.getCheckStatus(filteredItems);
      var checkedAll = checkStatus === 'all';
      var checkAllCheckbox = showSelectAll !== false && /*#__PURE__*/React.createElement(Checkbox$1, {
        disabled: disabled,
        checked: checkedAll,
        indeterminate: checkStatus === 'part',
        className: "".concat(prefixCls, "-checkbox"),
        onChange: function onChange() {
          // Only select enabled items
          onItemSelectAll(filteredItems.filter(function (item) {
            return !item.disabled;
          }).map(function (_ref) {
            var key = _ref.key;
            return key;
          }), !checkedAll);
        }
      });
      return checkAllCheckbox;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this3 = this;

      var filterValue = this.state.filterValue;
      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          dataSource = _this$props2.dataSource,
          titleText = _this$props2.titleText,
          checkedKeys = _this$props2.checkedKeys,
          disabled = _this$props2.disabled,
          footer = _this$props2.footer,
          showSearch = _this$props2.showSearch,
          style = _this$props2.style,
          searchPlaceholder = _this$props2.searchPlaceholder,
          notFoundContent = _this$props2.notFoundContent,
          selectAll = _this$props2.selectAll,
          selectCurrent = _this$props2.selectCurrent,
          selectInvert = _this$props2.selectInvert,
          removeAll = _this$props2.removeAll,
          removeCurrent = _this$props2.removeCurrent,
          renderList = _this$props2.renderList,
          onItemSelectAll = _this$props2.onItemSelectAll,
          onItemRemove = _this$props2.onItemRemove,
          showSelectAll = _this$props2.showSelectAll,
          showRemove = _this$props2.showRemove,
          pagination = _this$props2.pagination; // Custom Layout

      var footerDom = footer && footer(this.props);
      var listCls = classnames(prefixCls, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-with-pagination"), !!pagination), _defineProperty$4(_classNames, "".concat(prefixCls, "-with-footer"), !!footerDom), _classNames)); // ====================== Get filtered, checked item list ======================

      var _this$getFilteredItem = this.getFilteredItems(dataSource, filterValue),
          filteredItems = _this$getFilteredItem.filteredItems,
          filteredRenderItems = _this$getFilteredItem.filteredRenderItems; // ================================= List Body =================================


      var listBody = this.getListBody(prefixCls, searchPlaceholder, filterValue, filteredItems, notFoundContent, filteredRenderItems, checkedKeys, renderList, showSearch, disabled); // ================================ List Footer ================================

      var listFooter = footerDom ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, footerDom) : null;
      var checkAllCheckbox = !showRemove && !pagination && this.getCheckBox(filteredItems, onItemSelectAll, showSelectAll, disabled, prefixCls);
      var menu = null;

      if (showRemove) {
        menu = /*#__PURE__*/React.createElement(Menu$1, null, pagination && /*#__PURE__*/React.createElement(Menu$1.Item, {
          onClick: function onClick() {
            var _a;

            var pageKeys = getEnabledItemKeys((((_a = _this3.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || []).map(function (entity) {
              return entity.item;
            }));
            onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(pageKeys);
          }
        }, removeCurrent), /*#__PURE__*/React.createElement(Menu$1.Item, {
          onClick: function onClick() {
            onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(getEnabledItemKeys(filteredItems));
          }
        }, removeAll));
      } else {
        menu = /*#__PURE__*/React.createElement(Menu$1, null, /*#__PURE__*/React.createElement(Menu$1.Item, {
          onClick: function onClick() {
            var keys = getEnabledItemKeys(filteredItems);
            onItemSelectAll(keys, keys.length !== checkedKeys.length);
          }
        }, selectAll), pagination && /*#__PURE__*/React.createElement(Menu$1.Item, {
          onClick: function onClick() {
            var _a;

            var pageItems = ((_a = _this3.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || [];
            onItemSelectAll(getEnabledItemKeys(pageItems.map(function (entity) {
              return entity.item;
            })), true);
          }
        }, selectCurrent), /*#__PURE__*/React.createElement(Menu$1.Item, {
          onClick: function onClick() {
            var _a;

            var availableKeys;

            if (pagination) {
              availableKeys = getEnabledItemKeys((((_a = _this3.defaultListBodyRef.current) === null || _a === void 0 ? void 0 : _a.getItems()) || []).map(function (entity) {
                return entity.item;
              }));
            } else {
              availableKeys = getEnabledItemKeys(filteredItems);
            }

            var checkedKeySet = new Set(checkedKeys);
            var newCheckedKeys = [];
            var newUnCheckedKeys = [];
            availableKeys.forEach(function (key) {
              if (checkedKeySet.has(key)) {
                newUnCheckedKeys.push(key);
              } else {
                newCheckedKeys.push(key);
              }
            });
            onItemSelectAll(newCheckedKeys, true);
            onItemSelectAll(newUnCheckedKeys, false);
          }
        }, selectInvert));
      }

      var dropdown = /*#__PURE__*/React.createElement(Dropdown$1, {
        className: "".concat(prefixCls, "-header-dropdown"),
        overlay: menu,
        disabled: disabled
      }, /*#__PURE__*/React.createElement(DownOutlined$1, null)); // ================================== Render ===================================

      return /*#__PURE__*/React.createElement("div", {
        className: listCls,
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, checkAllCheckbox, dropdown, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-header-selected")
      }, this.getSelectAllLabel(checkedKeys.length, filteredItems.length)), /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-header-title")
      }, titleText)), listBody, listFooter);
    }
  }]);

  return TransferList;
}(React.PureComponent);
TransferList.defaultProps = {
  dataSource: [],
  titleText: '',
  showSearch: false
};

var Operation = function Operation(_ref) {
  var disabled = _ref.disabled,
      moveToLeft = _ref.moveToLeft,
      moveToRight = _ref.moveToRight,
      _ref$leftArrowText = _ref.leftArrowText,
      leftArrowText = _ref$leftArrowText === void 0 ? '' : _ref$leftArrowText,
      _ref$rightArrowText = _ref.rightArrowText,
      rightArrowText = _ref$rightArrowText === void 0 ? '' : _ref$rightArrowText,
      leftActive = _ref.leftActive,
      rightActive = _ref.rightActive,
      className = _ref.className,
      style = _ref.style,
      direction = _ref.direction,
      oneWay = _ref.oneWay;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(Button$1, {
    type: "primary",
    size: "small",
    disabled: disabled || !rightActive,
    onClick: moveToRight,
    icon: direction !== 'rtl' ? /*#__PURE__*/React.createElement(RightOutlined$1, null) : /*#__PURE__*/React.createElement(LeftOutlined$1, null)
  }, rightArrowText), !oneWay && /*#__PURE__*/React.createElement(Button$1, {
    type: "primary",
    size: "small",
    disabled: disabled || !leftActive,
    onClick: moveToLeft,
    icon: direction !== 'rtl' ? /*#__PURE__*/React.createElement(LeftOutlined$1, null) : /*#__PURE__*/React.createElement(RightOutlined$1, null)
  }, leftArrowText));
};

var Operation$1 = Operation;

var Transfer$1 = /*#__PURE__*/function (_React$Component) {
  _inherits$1(Transfer, _React$Component);

  var _super = _createSuper$1(Transfer);

  function Transfer(props) {
    var _this;

    _classCallCheck$2(this, Transfer);

    _this = _super.call(this, props);
    _this.separatedDataSource = null;

    _this.setStateKeys = function (direction, keys) {
      if (direction === 'left') {
        _this.setState(function (_ref) {
          var sourceSelectedKeys = _ref.sourceSelectedKeys;
          return {
            sourceSelectedKeys: typeof keys === 'function' ? keys(sourceSelectedKeys || []) : keys
          };
        });
      } else {
        _this.setState(function (_ref2) {
          var targetSelectedKeys = _ref2.targetSelectedKeys;
          return {
            targetSelectedKeys: typeof keys === 'function' ? keys(targetSelectedKeys || []) : keys
          };
        });
      }
    };

    _this.getLocale = function (transferLocale, renderEmpty) {
      return _extends$2(_extends$2(_extends$2({}, transferLocale), {
        notFoundContent: renderEmpty('Transfer')
      }), _this.props.locale);
    };

    _this.moveTo = function (direction) {
      var _this$props = _this.props,
          _this$props$targetKey = _this$props.targetKeys,
          targetKeys = _this$props$targetKey === void 0 ? [] : _this$props$targetKey,
          _this$props$dataSourc = _this$props.dataSource,
          dataSource = _this$props$dataSourc === void 0 ? [] : _this$props$dataSourc,
          onChange = _this$props.onChange;
      var _this$state = _this.state,
          sourceSelectedKeys = _this$state.sourceSelectedKeys,
          targetSelectedKeys = _this$state.targetSelectedKeys;
      var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys; // filter the disabled options

      var newMoveKeys = moveKeys.filter(function (key) {
        return !dataSource.some(function (data) {
          return !!(key === data.key && data.disabled);
        });
      }); // move items to target box

      var newTargetKeys = direction === 'right' ? newMoveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
        return newMoveKeys.indexOf(targetKey) === -1;
      }); // empty checked keys

      var oppositeDirection = direction === 'right' ? 'left' : 'right';

      _this.setStateKeys(oppositeDirection, []);

      _this.handleSelectChange(oppositeDirection, []);

      onChange === null || onChange === void 0 ? void 0 : onChange(newTargetKeys, direction, newMoveKeys);
    };

    _this.moveToLeft = function () {
      return _this.moveTo('left');
    };

    _this.moveToRight = function () {
      return _this.moveTo('right');
    };

    _this.onItemSelectAll = function (direction, selectedKeys, checkAll) {
      _this.setStateKeys(direction, function (prevKeys) {
        var mergedCheckedKeys = [];

        if (checkAll) {
          // Merge current keys with origin key
          mergedCheckedKeys = Array.from(new Set([].concat(_toConsumableArray(prevKeys), _toConsumableArray(selectedKeys))));
        } else {
          // Remove current keys from origin keys
          mergedCheckedKeys = prevKeys.filter(function (key) {
            return selectedKeys.indexOf(key) === -1;
          });
        }

        _this.handleSelectChange(direction, mergedCheckedKeys);

        return mergedCheckedKeys;
      });
    };

    _this.onLeftItemSelectAll = function (selectedKeys, checkAll) {
      return _this.onItemSelectAll('left', selectedKeys, checkAll);
    };

    _this.onRightItemSelectAll = function (selectedKeys, checkAll) {
      return _this.onItemSelectAll('right', selectedKeys, checkAll);
    };

    _this.handleFilter = function (direction, e) {
      var onSearch = _this.props.onSearch;
      var value = e.target.value;
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(direction, value);
    };

    _this.handleLeftFilter = function (e) {
      return _this.handleFilter('left', e);
    };

    _this.handleRightFilter = function (e) {
      return _this.handleFilter('right', e);
    };

    _this.handleClear = function (direction) {
      var onSearch = _this.props.onSearch;
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(direction, '');
    };

    _this.handleLeftClear = function () {
      return _this.handleClear('left');
    };

    _this.handleRightClear = function () {
      return _this.handleClear('right');
    };

    _this.onItemSelect = function (direction, selectedKey, checked) {
      var _this$state2 = _this.state,
          sourceSelectedKeys = _this$state2.sourceSelectedKeys,
          targetSelectedKeys = _this$state2.targetSelectedKeys;
      var holder = direction === 'left' ? _toConsumableArray(sourceSelectedKeys) : _toConsumableArray(targetSelectedKeys);
      var index = holder.indexOf(selectedKey);

      if (index > -1) {
        holder.splice(index, 1);
      }

      if (checked) {
        holder.push(selectedKey);
      }

      _this.handleSelectChange(direction, holder);

      if (!_this.props.selectedKeys) {
        _this.setStateKeys(direction, holder);
      }
    };

    _this.onLeftItemSelect = function (selectedKey, checked) {
      return _this.onItemSelect('left', selectedKey, checked);
    };

    _this.onRightItemSelect = function (selectedKey, checked) {
      return _this.onItemSelect('right', selectedKey, checked);
    };

    _this.onRightItemRemove = function (selectedKeys) {
      var _this$props2 = _this.props,
          _this$props2$targetKe = _this$props2.targetKeys,
          targetKeys = _this$props2$targetKe === void 0 ? [] : _this$props2$targetKe,
          onChange = _this$props2.onChange;

      _this.setStateKeys('right', []);

      onChange === null || onChange === void 0 ? void 0 : onChange(targetKeys.filter(function (key) {
        return !selectedKeys.includes(key);
      }), 'left', _toConsumableArray(selectedKeys));
    };

    _this.handleScroll = function (direction, e) {
      var onScroll = _this.props.onScroll;
      onScroll === null || onScroll === void 0 ? void 0 : onScroll(direction, e);
    };

    _this.handleLeftScroll = function (e) {
      return _this.handleScroll('left', e);
    };

    _this.handleRightScroll = function (e) {
      return _this.handleScroll('right', e);
    };

    _this.handleListStyle = function (listStyle, direction) {
      if (typeof listStyle === 'function') {
        return listStyle({
          direction: direction
        });
      }

      return listStyle;
    };

    _this.renderTransfer = function (transferLocale) {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (_ref3) {
        var _classNames;

        var getPrefixCls = _ref3.getPrefixCls,
            renderEmpty = _ref3.renderEmpty,
            direction = _ref3.direction;
        var _this$props3 = _this.props,
            customizePrefixCls = _this$props3.prefixCls,
            className = _this$props3.className,
            disabled = _this$props3.disabled,
            _this$props3$operatio = _this$props3.operations,
            operations = _this$props3$operatio === void 0 ? [] : _this$props3$operatio,
            showSearch = _this$props3.showSearch,
            footer = _this$props3.footer,
            style = _this$props3.style,
            listStyle = _this$props3.listStyle,
            operationStyle = _this$props3.operationStyle,
            filterOption = _this$props3.filterOption,
            render = _this$props3.render,
            children = _this$props3.children,
            showSelectAll = _this$props3.showSelectAll,
            oneWay = _this$props3.oneWay,
            pagination = _this$props3.pagination;
        var prefixCls = getPrefixCls('transfer', customizePrefixCls);

        var locale = _this.getLocale(transferLocale, renderEmpty);

        var _this$state3 = _this.state,
            sourceSelectedKeys = _this$state3.sourceSelectedKeys,
            targetSelectedKeys = _this$state3.targetSelectedKeys;
        var mergedPagination = !children && pagination;

        var _this$separateDataSou = _this.separateDataSource(),
            leftDataSource = _this$separateDataSou.leftDataSource,
            rightDataSource = _this$separateDataSou.rightDataSource;

        var leftActive = targetSelectedKeys.length > 0;
        var rightActive = sourceSelectedKeys.length > 0;
        var cls = classnames(prefixCls, (_classNames = {}, _defineProperty$4(_classNames, "".concat(prefixCls, "-disabled"), disabled), _defineProperty$4(_classNames, "".concat(prefixCls, "-customize-list"), !!children), _defineProperty$4(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);

        var titles = _this.getTitles(locale);

        var selectAllLabels = _this.props.selectAllLabels || [];
        return /*#__PURE__*/React.createElement("div", {
          className: cls,
          style: style
        }, /*#__PURE__*/React.createElement(TransferList, _extends$2({
          prefixCls: "".concat(prefixCls, "-list"),
          titleText: titles[0],
          dataSource: leftDataSource,
          filterOption: filterOption,
          style: _this.handleListStyle(listStyle, 'left'),
          checkedKeys: sourceSelectedKeys,
          handleFilter: _this.handleLeftFilter,
          handleClear: _this.handleLeftClear,
          onItemSelect: _this.onLeftItemSelect,
          onItemSelectAll: _this.onLeftItemSelectAll,
          render: render,
          showSearch: showSearch,
          renderList: children,
          footer: footer,
          onScroll: _this.handleLeftScroll,
          disabled: disabled,
          direction: "left",
          showSelectAll: showSelectAll,
          selectAllLabel: selectAllLabels[0],
          pagination: mergedPagination
        }, locale)), /*#__PURE__*/React.createElement(Operation$1, {
          className: "".concat(prefixCls, "-operation"),
          rightActive: rightActive,
          rightArrowText: operations[0],
          moveToRight: _this.moveToRight,
          leftActive: leftActive,
          leftArrowText: operations[1],
          moveToLeft: _this.moveToLeft,
          style: operationStyle,
          disabled: disabled,
          direction: direction,
          oneWay: oneWay
        }), /*#__PURE__*/React.createElement(TransferList, _extends$2({
          prefixCls: "".concat(prefixCls, "-list"),
          titleText: titles[1],
          dataSource: rightDataSource,
          filterOption: filterOption,
          style: _this.handleListStyle(listStyle, 'right'),
          checkedKeys: targetSelectedKeys,
          handleFilter: _this.handleRightFilter,
          handleClear: _this.handleRightClear,
          onItemSelect: _this.onRightItemSelect,
          onItemSelectAll: _this.onRightItemSelectAll,
          onItemRemove: _this.onRightItemRemove,
          render: render,
          showSearch: showSearch,
          renderList: children,
          footer: footer,
          onScroll: _this.handleRightScroll,
          disabled: disabled,
          direction: "right",
          showSelectAll: showSelectAll,
          selectAllLabel: selectAllLabels[1],
          showRemove: oneWay,
          pagination: mergedPagination
        }, locale)));
      });
    };

    var _props$selectedKeys = props.selectedKeys,
        selectedKeys = _props$selectedKeys === void 0 ? [] : _props$selectedKeys,
        _props$targetKeys = props.targetKeys,
        targetKeys = _props$targetKeys === void 0 ? [] : _props$targetKeys;
    _this.state = {
      sourceSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) === -1;
      }),
      targetSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) > -1;
      })
    };
    return _this;
  }

  _createClass$2(Transfer, [{
    key: "getTitles",
    value: function getTitles(transferLocale) {
      var _a;

      return (_a = this.props.titles) !== null && _a !== void 0 ? _a : transferLocale.titles;
    }
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(direction, holder) {
      var _this$state4 = this.state,
          sourceSelectedKeys = _this$state4.sourceSelectedKeys,
          targetSelectedKeys = _this$state4.targetSelectedKeys;
      var onSelectChange = this.props.onSelectChange;

      if (!onSelectChange) {
        return;
      }

      if (direction === 'left') {
        onSelectChange(holder, targetSelectedKeys);
      } else {
        onSelectChange(sourceSelectedKeys, holder);
      }
    }
  }, {
    key: "separateDataSource",
    value: function separateDataSource() {
      var _this$props4 = this.props,
          dataSource = _this$props4.dataSource,
          rowKey = _this$props4.rowKey,
          _this$props4$targetKe = _this$props4.targetKeys,
          targetKeys = _this$props4$targetKe === void 0 ? [] : _this$props4$targetKe;
      var leftDataSource = [];
      var rightDataSource = new Array(targetKeys.length);
      dataSource.forEach(function (record) {
        if (rowKey) {
          record = _extends$2(_extends$2({}, record), {
            key: rowKey(record)
          });
        } // rightDataSource should be ordered by targetKeys
        // leftDataSource should be ordered by dataSource


        var indexOfKey = targetKeys.indexOf(record.key);

        if (indexOfKey !== -1) {
          rightDataSource[indexOfKey] = record;
        } else {
          leftDataSource.push(record);
        }
      });
      return {
        leftDataSource: leftDataSource,
        rightDataSource: rightDataSource
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(LocaleReceiver, {
        componentName: "Transfer",
        defaultLocale: defaultLocale.Transfer
      }, this.renderTransfer);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref4) {
      var selectedKeys = _ref4.selectedKeys,
          targetKeys = _ref4.targetKeys,
          pagination = _ref4.pagination,
          children = _ref4.children;

      if (selectedKeys) {
        var mergedTargetKeys = targetKeys || [];
        return {
          sourceSelectedKeys: selectedKeys.filter(function (key) {
            return !mergedTargetKeys.includes(key);
          }),
          targetSelectedKeys: selectedKeys.filter(function (key) {
            return mergedTargetKeys.includes(key);
          })
        };
      }

      devWarning(!pagination || !children, 'Transfer', '`pagination` not support customize render list.');
      return null;
    }
  }]);

  return Transfer;
}(React.Component); // For high-level customized Transfer @dqaria


Transfer$1.List = TransferList;
Transfer$1.Operation = Operation$1;
Transfer$1.Search = Search;
Transfer$1.defaultProps = {
  dataSource: [],
  locale: {},
  showSearch: false,
  listStyle: function listStyle() {}
};
var Transfer$2 = Transfer$1;


___$insertStyle("/*\nPlace your custom CSS here\n*/\n.widget-hello-world .ant-checkbox {\n  position: relative;\n}\n\n.widget-hello-world .ant-checkbox-inner {\n  position: absolute;\n}");

createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // Options.jsx
  items_per_page: '条/页',
  jump_to: '跳至',
  jump_to_confirm: '确定',
  page: '页',
  // Pagination.jsx
  prev_page: '上一页',
  next_page: '下一页',
  prev_5: '向前 5 页',
  next_5: '向后 5 页',
  prev_3: '向前 3 页',
  next_3: '向后 3 页'
};
exports.default = _default;
});

createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var zh_CN$5 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var locale = {
  locale: 'zh_CN',
  today: '今天',
  now: '此刻',
  backToToday: '返回今天',
  ok: '确定',
  timeSelect: '选择时间',
  dateSelect: '选择日期',
  weekSelect: '选择周',
  clear: '清除',
  month: '月',
  year: '年',
  previousMonth: '上个月 (翻页上键)',
  nextMonth: '下个月 (翻页下键)',
  monthSelect: '选择月份',
  yearSelect: '选择年份',
  decadeSelect: '选择年代',
  yearFormat: 'YYYY年',
  dayFormat: 'D日',
  dateFormat: 'YYYY年M月D日',
  dateTimeFormat: 'YYYY年M月D日 HH时mm分ss秒',
  previousYear: '上一年 (Control键加左方向键)',
  nextYear: '下一年 (Control键加右方向键)',
  previousDecade: '上一年代',
  nextDecade: '下一年代',
  previousCentury: '上一世纪',
  nextCentury: '下一世纪'
};
var _default = locale;
exports.default = _default;
});

var zh_CN$4 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  placeholder: '请选择时间',
  rangePlaceholder: ['开始时间', '结束时间']
};
var _default = locale;
exports["default"] = _default;
});

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var zh_CN$3 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _zh_CN = interopRequireDefault(zh_CN$5);

var _zh_CN2 = interopRequireDefault(zh_CN$4); // 统一合并为完整的 Locale


var locale = {
  lang: (0, _extends2["default"])({
    placeholder: '请选择日期',
    yearPlaceholder: '请选择年份',
    quarterPlaceholder: '请选择季度',
    monthPlaceholder: '请选择月份',
    weekPlaceholder: '请选择周',
    rangePlaceholder: ['开始日期', '结束日期'],
    rangeYearPlaceholder: ['开始年份', '结束年份'],
    rangeMonthPlaceholder: ['开始月份', '结束月份'],
    rangeWeekPlaceholder: ['开始周', '结束周']
  }, _zh_CN["default"]),
  timePickerLocale: (0, _extends2["default"])({}, _zh_CN2["default"])
}; // should add whitespace between char in Button

locale.lang.ok = '确 定'; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports["default"] = _default;
});

var require$$1 = zh_CN$3;

var zh_CN$2 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _zh_CN = interopRequireDefault(require$$1);

var _default = _zh_CN["default"];
exports["default"] = _default;
});

var zh_CN$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // Options.jsx
  items_per_page: '条/页',
  jump_to: '跳至',
  jump_to_confirm: '确定',
  page: '页',
  // Pagination.jsx
  prev_page: '上一页',
  next_page: '下一页',
  prev_5: '向前 5 页',
  next_5: '向后 5 页',
  prev_3: '向前 3 页',
  next_3: '向后 3 页'
};
exports.default = _default;
});

var require$$3 = zh_CN$2;

var zh_CN = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _zh_CN = interopRequireDefault(zh_CN$1);

var _zh_CN2 = interopRequireDefault(require$$1);

var _zh_CN3 = interopRequireDefault(zh_CN$4);

var _zh_CN4 = interopRequireDefault(require$$3);
/* eslint-disable no-template-curly-in-string */


var typeTemplate = '${label}不是一个有效的${type}';
var localeValues = {
  locale: 'zh-cn',
  Pagination: _zh_CN["default"],
  DatePicker: _zh_CN2["default"],
  TimePicker: _zh_CN3["default"],
  Calendar: _zh_CN4["default"],
  // locales for all components
  global: {
    placeholder: '请选择'
  },
  Table: {
    filterTitle: '筛选',
    filterConfirm: '确定',
    filterReset: '重置',
    filterEmptyText: '无筛选项',
    selectAll: '全选当页',
    selectInvert: '反选当页',
    selectNone: '清空所有',
    selectionAll: '全选所有',
    sortTitle: '排序',
    expand: '展开行',
    collapse: '关闭行',
    triggerDesc: '点击降序',
    triggerAsc: '点击升序',
    cancelSort: '取消排序'
  },
  Modal: {
    okText: '确定',
    cancelText: '取消',
    justOkText: '知道了'
  },
  Popconfirm: {
    cancelText: '取消',
    okText: '确定'
  },
  Transfer: {
    searchPlaceholder: '请输入搜索内容',
    itemUnit: '项',
    itemsUnit: '项',
    remove: '删除',
    selectCurrent: '全选当页',
    removeCurrent: '删除当页',
    selectAll: '全选所有',
    removeAll: '删除全部',
    selectInvert: '反选当页'
  },
  Upload: {
    uploading: '文件上传中',
    removeFile: '删除文件',
    uploadError: '上传错误',
    previewFile: '预览文件',
    downloadFile: '下载文件'
  },
  Empty: {
    description: '暂无数据'
  },
  Icon: {
    icon: '图标'
  },
  Text: {
    edit: '编辑',
    copy: '复制',
    copied: '复制成功',
    expand: '展开'
  },
  PageHeader: {
    back: '返回'
  },
  Form: {
    optional: '（可选）',
    defaultValidateMessages: {
      "default": '字段验证错误${label}',
      required: '请输入${label}',
      "enum": '${label}必须是其中一个[${enum}]',
      whitespace: '${label}不能为空字符',
      date: {
        format: '${label}日期格式无效',
        parse: '${label}不能转换为日期',
        invalid: '${label}是一个无效日期'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label}须为${len}个字符',
        min: '${label}最少${min}个字符',
        max: '${label}最多${max}个字符',
        range: '${label}须在${min}-${max}字符之间'
      },
      number: {
        len: '${label}必须等于${len}',
        min: '${label}最小值为${min}',
        max: '${label}最大值为${max}',
        range: '${label}须在${min}-${max}之间'
      },
      array: {
        len: '须为${len}个${label}',
        min: '最少${min}个${label}',
        max: '最多${max}个${label}',
        range: '${label}数量须在${min}-${max}之间'
      },
      pattern: {
        mismatch: '${label}与模式不匹配${pattern}'
      }
    }
  },
  Image: {
    preview: '预览'
  }
};
var _default = localeValues;
exports["default"] = _default;
});

var zhCN = /*@__PURE__*/getDefaultExportFromCjs(zh_CN);

const TransferContainer = (props) => {
    const [targetKeys, setTargetKeys] = useState(undefined);
    useEffect(() => {
        setTargetKeys(props.targetKeys !== null && props.targetKeys !== undefined && props.targetKeys.length > 0 ? props.targetKeys.split(',') : undefined);
        return () => {
        };
    }, [props.targetKeys]);
    console.log(props.data, 'target');
    props.data = [{ "key": "1", "title": "1" }, { "key": "2", "title": "2" }, { "key": "3", "title": "3" }, { "key": "4", "title": "label-4" }];
    return (createElement(ConfigProvider$1, { locale: zhCN },
        createElement(Transfer$2, { className: "widget-hello-world", showSearch: props.isShowSearch, dataSource: props.data, disabled: props.isDisabled, titles: [props.leftTitle, props.rightTitle], targetKeys: targetKeys, onChange: (targetKeys, direction, moveKeys) => {
                setTargetKeys(targetKeys);
                props.onChange(targetKeys, direction, moveKeys);
            }, render: item => item.title })));
};

function Transfer(props) {
    var _a, _b;
    const onChange = useCallback((targetKeys, direction, moveKeys) => {
        var _a;
        if (props.options.status != "available" /* Available */) {
            return undefined;
        }
        console.log(targetKeys, moveKeys, direction, props.onChange);
        props.targetKeys.setValue(targetKeys.join(','));
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.execute();
    }, [props.onChange, props.options]);
    const data = useMemo$1(() => {
        var _a;
        const d = (_a = props.options.items) === null || _a === void 0 ? void 0 : _a.map(option => {
            var _a;
            return ({
                key: (_a = props.keyAttribute.get(option).value) === null || _a === void 0 ? void 0 : _a.toString(), title: props.titleAttribute.get(option).value
            });
        });
        return d ? d : [];
    }, [props.options]);
    return (createElement(TransferContainer, { targetKeys: props.targetKeys.value, onChange: onChange, isShowSearch: props.isShowSearch, leftTitle: (_a = props.leftTitle) === null || _a === void 0 ? void 0 : _a.value, rightTitle: (_b = props.rightTitle) === null || _b === void 0 ? void 0 : _b.value, data: data, isDisabled: props.isDisable }));
}

export { Transfer as default };