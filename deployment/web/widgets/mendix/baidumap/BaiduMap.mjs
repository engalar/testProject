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

import React, { useRef, useEffect, useState, useMemo, useImperativeHandle, Fragment, createElement, Component } from 'react';
import ReactDOM from 'react-dom';

var _importedScript = {};
/**
 * load dependency by script tag
 */

function requireScript(src) {
  var headElement = document && (document.head || document.getElementsByTagName('head')[0]);
  return new Promise(function (resolve, reject) {
    if (!document || src in _importedScript) {
      resolve();
      return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = '_react_baidu_map';
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

var _typeof_1$1 = createCommonjsModule(function (module) {
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

var _typeof = /*@__PURE__*/getDefaultExportFromCjs(_typeof_1$1);

var asyncToGenerator = createCommonjsModule(function (module) {
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

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _asyncToGenerator = /*@__PURE__*/getDefaultExportFromCjs(asyncToGenerator);

var classCallCheck = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _classCallCheck = /*@__PURE__*/getDefaultExportFromCjs(classCallCheck);

var createClass = createCommonjsModule(function (module) {
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

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _createClass = /*@__PURE__*/getDefaultExportFromCjs(createClass);

createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var inherits = createCommonjsModule(function (module) {
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
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _inherits = /*@__PURE__*/getDefaultExportFromCjs(inherits);

createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

createCommonjsModule(function (module) {
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

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

createCommonjsModule(function (module) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

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

var assertThisInitialized = createCommonjsModule(function (module) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];



function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var isNativeReflectConstruct = createCommonjsModule(function (module) {
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

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var possibleConstructorReturn = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];



function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var createSuper = createCommonjsModule(function (module) {
function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _createSuper = /*@__PURE__*/getDefaultExportFromCjs(createSuper);

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

function delay(time) {
  return new Promise(function (resolve, reject) {
    window && window.setTimeout(resolve, time);
  });
}
var DEFAULT_RETRY_TIME = 3;
/**
 * APILoader 用于加载百度地图依赖
 */

var APILoader = /*#__PURE__*/function (_React$Component) {
  _inherits(APILoader, _React$Component);

  var _super = _createSuper(APILoader);

  function APILoader(props) {
    var _this;

    _classCallCheck(this, APILoader);

    _this = _super.call(this, props);

    _this.handleError = function (error) {
      _this.setState({
        error: error
      });
    };

    _this.finish = function () {
      if (window && _this.props.type === 'webgl') {
        window.BMap = window.BMapGL;
      }

      _this.setState({
        loaded: true
      });
    };

    _this.state = {
      loaded: props.type === 'webgl' ? window && !!window.BMapGL : window && !!window.BMap
    };

    if (_this.props.akay == null) {
      throw new TypeError('BaiDuMap: akay is required');
    }

    return _this;
  }

  _createClass(APILoader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var callbackName = this.props.callbackName;

      if (!window) {
        return;
      }

      if (this.props.type === 'webgl' && window && !window.BMapGL || window && !window.BMap) {
        if (window && window[callbackName]) {
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

      var args = ["v=".concat(cfg.version), "ak=".concat(cfg.akay), "callback=".concat(cfg.callbackName)];

      if (cfg.type) {
        args.push("type=".concat(cfg.type));
      }

      return "".concat(protocol, "//").concat(cfg.hostAndPath, "?").concat(args.join('&'));
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

                if (window) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
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

              case 6:
                if (!(i < DEFAULT_RETRY_TIME)) {
                  _context.next = 24;
                  break;
                }

                _context.prev = 7;
                _context.next = 10;
                return requireScript(src);

              case 10:
                return _context.abrupt("break", 24);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](7);

                if (!(i === DEFAULT_RETRY_TIME - 1)) {
                  _context.next = 19;
                  break;
                }

                _ret = function () {
                  var err = new Error("Failed to load Baidu Map: ".concat(_context.t0.message)); // flush queue

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
                  _context.next = 19;
                  break;
                }

                return _context.abrupt("return", _ret.v);

              case 19:
                _context.next = 21;
                return delay(i * 1000);

              case 21:
                i++;
                _context.next = 6;
                break;

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 13]]);
      }));

      function loadMap() {
        return _loadMap.apply(this, arguments);
      }

      return loadMap;
    }()
  }], [{
    key: "ready",
    value:
    /**
     * 全局可能存在多个Loader同时渲染, 但是只能由一个负责加载
     */

    /**
     * 等待BMap就绪
     */
    function () {
      var _ready = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(window && window.BMap)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                if (!(window && window.BMapGL)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                return _context2.abrupt("return", new Promise(function (res, rej) {
                  APILoader.waitQueue.push([res, rej]);
                }));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function ready() {
        return _ready.apply(this, arguments);
      }

      return ready;
    }()
  }]);

  return APILoader;
}(React.Component);

APILoader.defaultProps = {
  akay: '',
  hostAndPath: 'api.map.baidu.com/api',
  version: '3.0',
  callbackName: 'load_bmap_sdk',
  type: ''
};
APILoader.waitQueue = [];

createCommonjsModule(function (module) {
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

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var defineProperty = createCommonjsModule(function (module) {
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

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var objectSpread2 = createCommonjsModule(function (module) {
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
        defineProperty(target, key, source[key]);
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

module.exports = _objectSpread2;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _objectSpread = /*@__PURE__*/getDefaultExportFromCjs(objectSpread2);

createCommonjsModule(function (module) {
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

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
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

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var objectWithoutProperties = createCommonjsModule(function (module) {
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
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

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _objectWithoutProperties = /*@__PURE__*/getDefaultExportFromCjs(objectWithoutProperties);

createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

createCommonjsModule(function (module) {
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

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var iterableToArrayLimit = createCommonjsModule(function (module) {
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

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _slicedToArray = /*@__PURE__*/getDefaultExportFromCjs(slicedToArray);

/**
 * 批量创建多个如下 State，监听并设置值，
 * 组件属性更改 <Componet enableDragging={true} >
 * 根据 enableDragging 的 Boolean 值，执行 `enable` 和 `disable` 开头的函数。
 * @example
 * ```js
 * const [enableDragging, setEnableDragging] = useState(props.enableDragging);
 * useEffect(() => {
 *   console.log('~~:enableDragging', enableDragging, props.enableDragging, polyline);
 *   setEnableDragging(props.enableDragging)
 * }, [polyline, enableDragging, props.enableDragging]);
 * ```
 * @param instance
 * @param props
 * @param propsName
 */

function useEnableProperties(instance) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var propsName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  propsName.forEach(function (name) {
    var eName = "enable".concat(name);

    var _useState = useState(props[eName]),
        _useState2 = _slicedToArray(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

    useEffect(function () {
      var funName = props[eName] ? "enable".concat(name) : "disable".concat(name);

      if (instance && props[eName] !== undefined) {
        instance[funName] && instance[funName]();

        if (props[eName] !== state) {
          setState(props[eName]);
        }
      }
    }, [instance, props[eName]]);
  });
}
/**
 * 针对 Overlay 类型的组件，有公共的是否显示 对象处理
 * 通过参数 `visiable` 来控制执行 `show()` or `hide()`
 */

function useVisiable(instance) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var visiable = props.visiable;

  var _useState3 = useState(visiable),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  useEffect(function () {
    if (instance && visiable !== undefined) {
      console.log('visiable', visiable);

      if (visiable) {
        console.log('visiable', instance);
        instance.show && instance.show();
      } else {
        instance.hide && instance.hide();
      }

      if (visiable !== state) {
        setState(visiable);
      }
    }
  }, [instance, visiable]);
}
/**
 * 批量创建多个如下 State，监听并设置值，
 * 执行 `set` 开头的函数。
 * @param instance
 * @param props
 * @param propsName
 */

function useProperties(instance, props) {
  var propsName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  propsName.forEach(function (name) {
    var eName = "".concat(name.charAt(0).toLowerCase()).concat(name.slice(1));

    var _useState5 = useState(props[eName]),
        _useState6 = _slicedToArray(_useState5, 2),
        state = _useState6[0],
        setState = _useState6[1];

    useEffect(function () {
      if (instance && instance["set".concat(name)] && props[eName] !== undefined) {
        /**
         * 坐标点的参数设置，比对, 坐标点的参数设置
         */
        var data = props[eName];

        if (data && data.lng && data.lat) {
          data = new BMap.Point(data.lng, data.lat);
          var preData = state;

          if (preData && preData.lng && preData.lat) {
            preData = new BMap.Point(preData.lng, preData.lat);

            if (data.equals(preData)) {
              return;
            }
          }
        }

        instance["set".concat(name)](data); // 属性发生变化缓存

        if (state !== props[eName]) {
          if (eName === 'bounds') {
            if (state && props[eName] && !state.equals(props[eName])) {
              setState(props[eName]);
            }
          } else {
            setState(props[eName]);
          }
        }
      }
    }, [instance, props[eName]]);
  });
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
 *   'Click', 'DblClick', 'MouseDown', 'MouseUp', 'MouseOut', 'MouseOver'
 * ]);
 * ```
 */

function useEventProperties(instance) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var eventName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var type = arguments.length > 3 ? arguments[3] : undefined;
  eventName.forEach(function (name) {
    var eventName = "on".concat(name);
    var eventHandle = props[eventName];
    useEffect(function () {
      if (!instance) return;

      if (eventHandle && name) {
        var eName = name;

        if (type === 'CamelCase') {
          eName = name.replace(name[0], name[0].toLowerCase());
        } else {
          eName = name.toLowerCase();
        }

        instance.addEventListener(eName, eventHandle);
        return function () {
          instance.removeEventListener(eName, eventHandle);
        };
      }
    }, [instance, props[eventName]]);
  });
}
/**
 * 获取上一轮的 props 或 state
 * How to get the previous props or state?
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 * @example
 * ```js
 * function Counter() {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePrevious(count);
 *   return <h1>Now: {count}, before: {prevCount}</h1>;
 * }
 * ```
 */

function usePrevious(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
}

function useMap() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var widget = props.widget,
      minZoom = props.minZoom,
      maxZoom = props.maxZoom,
      mapType = props.mapType,
      enableHighResolution = props.enableHighResolution,
      enableAutoResize = props.enableAutoResize,
      enableMapClick = props.enableMapClick;

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

  useMemo(function () {
    if (container && !map && BMap) {
      var instance = new BMap.Map(container, {
        minZoom: minZoom,
        maxZoom: maxZoom,
        mapType: mapType,
        enableHighResolution: enableHighResolution,
        enableAutoResize: enableAutoResize,
        enableMapClick: enableMapClick
      });
      /**
       * 加载控件
       */

      widget && widget.forEach(function (item) {
        if (typeof item === 'string') {
          instance.addControl(new BMap[item]());
        } else if (_typeof(item) === 'object' && item.control && typeof item.control === 'function') {
          instance.addControl(item.control(BMap, instance));
        } else if (_typeof(item) === 'object' && item.name) {
          var options = typeof item.options === 'function' ? item.options(BMap, instance) : item.options;
          instance.addControl(new BMap[item.name](options));
        }
      });
      setMap(instance);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [container, map]);

  var _useState7 = useState(props.center || '上海'),
      _useState8 = _slicedToArray(_useState7, 2),
      center = _useState8[0],
      setCenter = _useState8[1];
  /**
   * 根据参数设置中心点
   */


  useEffect(function () {
    if (map && center) {
      var cent = center;

      if (center && center.lng && center.lat) {
        cent = new BMap.Point(center.lng, center.lat);
        map.centerAndZoom(cent, zoom);
      }

      map.centerAndZoom(center, zoom);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [center, map]);

  var _useState9 = useState(props.autoLocalCity),
      _useState10 = _slicedToArray(_useState9, 2),
      autoLocalCity = _useState10[0],
      setAutoLocalCity = _useState10[1];
  /**
   * IP定位获取当前城市，进行自动定位
   */


  useEffect(function () {
    if (map && autoLocalCity) {
      var myCity = new BMap.LocalCity();
      myCity.get(function (result) {
        setCenter(result.name);
        setZoom(result.level);
        setAutoLocalCity(false);
      });
    }
  }, [autoLocalCity, map]);
  useEventProperties(map, props, ['Click', 'DblClick', 'RightClick', 'RightdblClick', 'MapTypeChange', 'MouseMove', 'MouseOver', 'MouseOut', 'MoveStart', 'Moving', 'MoveEnd', 'ZoomStart', 'ZoomEnd', 'AddOverlay', 'AddControl', 'RemoveControl', 'RemoveOverlay', 'ClearOverlays', 'DragStart', 'Dragging', 'DragEnd', 'AddTileLayer', 'RemoveTileLayer', 'Load', 'ReSize', 'HotspotClick', 'HotspotOver', 'HotspotOut', 'TilesLoaded', 'TouchStart', 'TouchMove', 'TouchEnd', 'LongPress']); // 'Center',

  useProperties(map, props, ['DefaultCursor', 'DraggingCursor', 'MinZoom', 'MaxZoom', 'MapStyle', 'MapStyleV2', 'Panorama', 'CurrentCity', 'MapType', 'Viewport', 'Zoom']);
  useEnableProperties(map, props, ['Dragging', 'ScrollWheelZoom', 'DoubleClickZoom', 'Keyboard', 'InertialDragging', 'ContinuousZoom', 'PinchToZoom', 'AutoResize']);
  return {
    map: map,
    setMap: setMap,
    container: container,
    setContainer: setContainer,
    center: center,
    setCenter: setCenter,
    autoLocalCity: autoLocalCity,
    setAutoLocalCity: setAutoLocalCity
  };
}

var _excluded = ["className", "style", "children"]; /// <reference types="../types" />
var Map = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  window.BMap = window.BMap || window.BMapGL;
  var elmRef = useRef(null);

  var _useMap = useMap(_objectSpread({
    container: elmRef.current
  }, props)),
      setContainer = _useMap.setContainer,
      container = _useMap.container,
      setCenter = _useMap.setCenter,
      setAutoLocalCity = _useMap.setAutoLocalCity,
      map = _useMap.map;

  useEffect(function () {
    return setContainer(elmRef.current);
  }, [elmRef.current]);
  useMemo(function () {
    return props.center && setCenter(props.center);
  }, [props.center]);
  useEffect(function () {
    return setAutoLocalCity(props.autoLocalCity);
  }, [props.autoLocalCity]);
  useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread({}, props), {}, {
      map: map,
      BMap: BMap,
      container: elmRef
    });
  }, [map]);
  var childs = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: elmRef,
    className: className,
    style: _objectSpread({
      fontSize: 1,
      height: '100%'
    }, style)
  }), BMap && map && typeof children === 'function' && children({
    BMap: BMap,
    map: map,
    container: container
  }), BMap && map && childs.map(function (child) {
    if (! /*#__PURE__*/React.isValidElement(child)) return;
    return /*#__PURE__*/React.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
      BMap: BMap,
      map: map,
      container: container
    }));
  }));
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

var useCreatePortal = (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useState = useState(document.createElement('div')),
      _useState2 = _slicedToArray(_useState, 2),
      div = _useState2[0],
      setDiv = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      portal = _useState4[0],
      setPortal = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      count = _useState6[0],
      setCount = _useState6[1];

  var _useState7 = useState(props.children),
      _useState8 = _slicedToArray(_useState7, 2),
      children = _useState8[0],
      setChildren = _useState8[1];

  useMemo(function () {
    if (!portal) {
      var portalInstance = /*#__PURE__*/ReactDOM.createPortal(children, div);
      setCount(count + 1);
      setPortal(portalInstance);
    }
  }, [portal]);
  var prevCount = usePrevious(count);
  useMemo(function () {
    if (div && children && count === prevCount && count > 0) {
      var portalInstance = /*#__PURE__*/ReactDOM.createPortal(children, div);
      setCount(count + 1);
      setPortal(portalInstance);
    }
  }, [children, div, portal]);
  return {
    div: div,
    setDiv: setDiv,
    portal: portal,
    setPortal: setPortal,
    children: children,
    setChildren: setChildren
  };
});

function useCopyrightControl() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _useCreatePortal = useCreatePortal({
    children: props.children
  }),
      portal = _useCreatePortal.portal,
      setPortal = _useCreatePortal.setPortal;

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      copyrightControl = _useState2[0],
      setCopyrightControl = _useState2[1];

  var map = props.map,
      anchor = props.anchor,
      offset = props.offset;
  useEffect(function () {
    if (map && !copyrightControl) {
      var instance = new BMap.CopyrightControl({
        anchor: anchor || BMAP_ANCHOR_TOP_RIGHT,
        offset: offset
      });
      map.addControl(instance);
      setCopyrightControl(instance);
    }

    return function () {
      if (map && copyrightControl) {
        map.removeControl(copyrightControl);
      }
    };
  }, [map, copyrightControl, anchor, offset]);
  useVisiable(copyrightControl, props);
  useProperties(copyrightControl, props, ['Anchor', 'Offset']);
  return {
    portal: portal,
    setPortal: setPortal,
    copyrightControl: copyrightControl,
    setCopyrightControl: setCopyrightControl
  };
}

var uid = 1;
var Item = (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var children = props.children,
      control = props.control,
      bounds = props.bounds;

  var _useCreatePortal = useCreatePortal(),
      portal = _useCreatePortal.portal,
      div = _useCreatePortal.div,
      setChildren = _useCreatePortal.setChildren;

  var _useState = useState(uid++),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  useEffect(function () {
    if (control) {
      setChildren(children);
    }
  }, [children, control]);
  var prevId = usePrevious(id);
  useEffect(function () {
    if (portal && control) {
      control.addCopyright({
        id: id,
        bounds: bounds,
        content: div.innerHTML
      });
    }

    return function () {
      if (prevId && control) {
        control.removeCopyright(prevId);
      }
    };
  }, [children, portal]);
  return portal || null;
});

var CopyrightControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useCopyrightControl = useCopyrightControl(props),
      copyrightControl = _useCopyrightControl.copyrightControl;

  useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread({}, props), {}, {
      copyrightControl: copyrightControl
    });
  }, [copyrightControl]);
  return /*#__PURE__*/React.createElement(Fragment, null, React.Children.toArray(props.children).map(function (child, index) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.cloneElement(child, {
        control: copyrightControl,
        id: index + 1
      });
    }

    return child;
  }));
});
CopyrightControl.Item = Item;

const BaiduMapComponent = () => (createElement("div", { style: { width: '100%', height: '300px' } },
    createElement(APILoader, { akay: "GTrnXa5hwXGwgQnTBG28SHBubErMKm3f" },
        createElement(Map, { center: "\u676D\u5DDE" }))));

___$insertStyle("/*\nPlace your custom CSS here\n*/");

class BaiduMap extends Component {
    render() {
        return createElement(BaiduMapComponent, null);
    }
}

export { BaiduMap as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFpZHVNYXAubWpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1iYWlkdS1tYXAvbGliL2VzbS91dGlscy9yZXF1aXJlU2NyaXB0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlci5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYmFpZHUtbWFwL2xpYi9lc20vQVBJTG9hZGVyL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDIuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYmFpZHUtbWFwL2xpYi9lc20vY29tbW9uL2hvb2tzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYmFpZHUtbWFwL2xpYi9lc20vTWFwL3VzZU1hcC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWJhaWR1LW1hcC9saWIvZXNtL01hcC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1iYWlkdS1tYXAvbGliL2VzbS9jb21tb24vdXNlQ3JlYXRlUG9ydGFsLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYmFpZHUtbWFwL2xpYi9lc20vQ29weXJpZ2h0Q29udHJvbC91c2VDb3B5cmlnaHRDb250cm9sLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYmFpZHUtbWFwL2xpYi9lc20vQ29weXJpZ2h0Q29udHJvbC9JdGVtLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYmFpZHUtbWFwL2xpYi9lc20vQ29weXJpZ2h0Q29udHJvbC9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JhaWR1TWFwQ29tcG9uZW50LnRzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9CYWlkdU1hcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9pbXBvcnRlZFNjcmlwdCA9IHt9O1xuLyoqXG4gKiBsb2FkIGRlcGVuZGVuY3kgYnkgY3NzIHRhZ1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlQ3NzKHNyYykge1xuICB2YXIgaGVhZEVsZW1lbnQgPSBkb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIWRvY3VtZW50IHx8IHNyYyBpbiBfaW1wb3J0ZWRTY3JpcHQpIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvY3NzJztcbiAgICBzY3JpcHQucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIHNjcmlwdC5ocmVmID0gc3JjO1xuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBoZWFkRWxlbWVudC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgcmVqZWN0KG5ldyBVUklFcnJvcihcIlRoZSBjc3MgXCIuY29uY2F0KHNyYywgXCIgaXMgbm8gYWNjZXNzaWJsZS5cIikpKTtcbiAgICB9O1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF9pbXBvcnRlZFNjcmlwdFtzcmNdID0gdHJ1ZTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuXG4gICAgaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfSk7XG59XG4vKipcbiAqIGxvYWQgZGVwZW5kZW5jeSBieSBzY3JpcHQgdGFnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVTY3JpcHQoc3JjKSB7XG4gIHZhciBoZWFkRWxlbWVudCA9IGRvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICghZG9jdW1lbnQgfHwgc3JjIGluIF9pbXBvcnRlZFNjcmlwdCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5pZCA9ICdfcmVhY3RfYmFpZHVfbWFwJztcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBoZWFkRWxlbWVudC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgcmVqZWN0KG5ldyBVUklFcnJvcihcIlRoZSBTY3JpcHQgXCIuY29uY2F0KHNyYywgXCIgaXMgbm8gYWNjZXNzaWJsZS5cIikpKTtcbiAgICB9O1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF9pbXBvcnRlZFNjcmlwdFtzcmNdID0gdHJ1ZTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuXG4gICAgaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5MWRHbHNjeTl5WlhGMWFYSmxVMk55YVhCMExuUnpJbDBzSW01aGJXVnpJanBiSWw5cGJYQnZjblJsWkZOamNtbHdkQ0lzSW5KbGNYVnBjbVZEYzNNaUxDSnpjbU1pTENKb1pXRmtSV3hsYldWdWRDSXNJbVJ2WTNWdFpXNTBJaXdpYUdWaFpDSXNJbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsSWl3aVVISnZiV2x6WlNJc0luSmxjMjlzZG1VaUxDSnlaV3BsWTNRaUxDSnpZM0pwY0hRaUxDSmpjbVZoZEdWRmJHVnRaVzUwSWl3aWRIbHdaU0lzSW5KbGJDSXNJbWh5WldZaUxDSnZibVZ5Y205eUlpd2laWEp5SWl3aWNtVnRiM1psUTJocGJHUWlMQ0pWVWtsRmNuSnZjaUlzSW05dWJHOWhaQ0lzSW1Gd2NHVnVaRU5vYVd4a0lpd2ljbVZ4ZFdseVpWTmpjbWx3ZENJc0ltbGtJbDBzSW0xaGNIQnBibWR6SWpvaVFVRkJRU3hKUVVGTlFTeGxRVUYzUXl4SFFVRkhMRVZCUVdwRU8wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVTkJMRTlCUVU4c1UwRkJVME1zVlVGQlZDeERRVUZ2UWtNc1IwRkJjRUlzUlVGQlowUTdRVUZEY2tRc1RVRkJUVU1zVjBGQlZ5eEhRVUZIUXl4UlFVRlJMRXRCUVV0QkxGRkJRVkVzUTBGQlEwTXNTVUZCVkN4SlFVRnBRa1FzVVVGQlVTeERRVUZEUlN4dlFrRkJWQ3hEUVVFNFFpeE5RVUU1UWl4RlFVRnpReXhEUVVGMFF5eERRVUYwUWl4RFFVRTFRanRCUVVWQkxGTkJRVThzU1VGQlNVTXNUMEZCU2l4RFFVRlpMRlZCUVVORExFOUJRVVFzUlVGQlZVTXNUVUZCVml4RlFVRnhRanRCUVVOMFF5eFJRVUZKTEVOQlFVTk1MRkZCUVVRc1NVRkJZVVlzUjBGQlJ5eEpRVUZKUml4bFFVRjRRaXhGUVVGNVF6dEJRVU4yUTFFc1RVRkJRVUVzVDBGQlR6dEJRVU5RTzBGQlEwUTdPMEZCUTBRc1VVRkJUVVVzVFVGQlRTeEhRVUZIVGl4UlFVRlJMRU5CUVVOUExHRkJRVlFzUTBGQmRVSXNUVUZCZGtJc1EwRkJaanRCUVVOQlJDeEpRVUZCUVN4TlFVRk5MRU5CUVVORkxFbEJRVkFzUjBGQll5eFZRVUZrTzBGQlEwRkdMRWxCUVVGQkxFMUJRVTBzUTBGQlEwY3NSMEZCVUN4SFFVRmhMRmxCUVdJN1FVRkRRVWdzU1VGQlFVRXNUVUZCVFN4RFFVRkRTU3hKUVVGUUxFZEJRV05hTEVkQlFXUTdPMEZCUTBGUkxFbEJRVUZCTEUxQlFVMHNRMEZCUTBzc1QwRkJVQ3hIUVVGcFFpeFZRVUZEUXl4SFFVRkVMRVZCUVZNN1FVRkRlRUppTEUxQlFVRkJMRmRCUVZjc1EwRkJSV01zVjBGQllpeERRVUY1UWxBc1RVRkJla0k3UVVGRFFVUXNUVUZCUVVFc1RVRkJUU3hEUVVGRExFbEJRVWxUTEZGQlFVb3NiVUpCUVhkQ2FFSXNSMEZCZUVJc2QwSkJRVVFzUTBGQlRqdEJRVU5FTEV0QlNFUTdPMEZCU1VGUkxFbEJRVUZCTEUxQlFVMHNRMEZCUTFNc1RVRkJVQ3hIUVVGblFpeFpRVUZOTzBGQlEzQkNia0lzVFVGQlFVRXNaVUZCWlN4RFFVRkRSU3hIUVVGRUxFTkJRV1lzUjBGQmRVSXNTVUZCZGtJN1FVRkRRVTBzVFVGQlFVRXNUMEZCVHp0QlFVTlNMRXRCU0VRN08wRkJTVUZNTEVsQlFVRkJMRmRCUVZjc1EwRkJSV2xDTEZkQlFXSXNRMEZCZVVKV0xFMUJRWHBDTzBGQlEwUXNSMEZzUWswc1EwRkJVRHRCUVcxQ1JEdEJRVVZFTzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hQUVVGUExGTkJRVk5YTEdGQlFWUXNRMEZCZFVKdVFpeEhRVUYyUWl4RlFVRnRSRHRCUVVONFJDeE5RVUZOUXl4WFFVRlhMRWRCUVVkRExGRkJRVkVzUzBGQlMwRXNVVUZCVVN4RFFVRkRReXhKUVVGVUxFbEJRV2xDUkN4UlFVRlJMRU5CUVVORkxHOUNRVUZVTEVOQlFUaENMRTFCUVRsQ0xFVkJRWE5ETEVOQlFYUkRMRU5CUVhSQ0xFTkJRVFZDTzBGQlJVRXNVMEZCVHl4SlFVRkpReXhQUVVGS0xFTkJRVmtzVlVGQlEwTXNUMEZCUkN4RlFVRlZReXhOUVVGV0xFVkJRWEZDTzBGQlEzUkRMRkZCUVVrc1EwRkJRMHdzVVVGQlJDeEpRVUZoUml4SFFVRkhMRWxCUVVsR0xHVkJRWGhDTEVWQlFYbERPMEZCUTNaRFVTeE5RVUZCUVN4UFFVRlBPMEZCUTFBN1FVRkRSRHM3UVVGRFJDeFJRVUZOUlN4TlFVRk5MRWRCUVVkT0xGRkJRVkVzUTBGQlEwOHNZVUZCVkN4RFFVRjFRaXhSUVVGMlFpeERRVUZtTzBGQlEwRkVMRWxCUVVGQkxFMUJRVTBzUTBGQlEwVXNTVUZCVUN4SFFVRmpMR2xDUVVGa08wRkJRMEZHTEVsQlFVRkJMRTFCUVUwc1EwRkJRMWtzUlVGQlVDeEhRVUZaTEd0Q1FVRmFPMEZCUTBGYUxFbEJRVUZCTEUxQlFVMHNRMEZCUTFJc1IwRkJVQ3hIUVVGaFFTeEhRVUZpT3p0QlFVTkJVU3hKUVVGQlFTeE5RVUZOTEVOQlFVTkxMRTlCUVZBc1IwRkJhVUlzVlVGQlEwTXNSMEZCUkN4RlFVRlRPMEZCUTNoQ1lpeE5RVUZCUVN4WFFVRlhMRU5CUVVWakxGZEJRV0lzUTBGQmVVSlFMRTFCUVhwQ08wRkJRMEZFTEUxQlFVRkJMRTFCUVUwc1EwRkJReXhKUVVGSlV5eFJRVUZLTEhOQ1FVRXlRbWhDTEVkQlFUTkNMSGRDUVVGRUxFTkJRVTQ3UVVGRFJDeExRVWhFT3p0QlFVbEJVU3hKUVVGQlFTeE5RVUZOTEVOQlFVTlRMRTFCUVZBc1IwRkJaMElzV1VGQlRUdEJRVU53UW01Q0xFMUJRVUZCTEdWQlFXVXNRMEZCUTBVc1IwRkJSQ3hEUVVGbUxFZEJRWFZDTEVsQlFYWkNPMEZCUTBGTkxFMUJRVUZCTEU5QlFVODdRVUZEVWl4TFFVaEVPenRCUVVsQlRDeEpRVUZCUVN4WFFVRlhMRU5CUVVWcFFpeFhRVUZpTEVOQlFYbENWaXhOUVVGNlFqdEJRVU5FTEVkQmJFSk5MRU5CUVZBN1FVRnRRa1FpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JmYVcxd2IzSjBaV1JUWTNKcGNIUTZJSHNnVzNOeVl6b2djM1J5YVc1blhUb2dkSEoxWlNCOUlEMGdlMzA3WEc1Y2JpOHFLbHh1SUNvZ2JHOWhaQ0JrWlhCbGJtUmxibU41SUdKNUlHTnpjeUIwWVdkY2JpQXFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSEpsY1hWcGNtVkRjM01vYzNKak9pQnpkSEpwYm1jcE9pQlFjbTl0YVhObFBIWnZhV1ErSUh0Y2JpQWdZMjl1YzNRZ2FHVmhaRVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQ0FtSmlBb1pHOWpkVzFsYm5RdWFHVmhaQ0I4ZkNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MGMwSjVWR0ZuVG1GdFpTZ25hR1ZoWkNjcFd6QmRLVHRjYmx4dUlDQnlaWFIxY200Z2JtVjNJRkJ5YjIxcGMyVW9LSEpsYzI5c2RtVXNJSEpsYW1WamRDa2dQVDRnZTF4dUlDQWdJR2xtSUNnaFpHOWpkVzFsYm5RZ2ZId2djM0pqSUdsdUlGOXBiWEJ2Y25SbFpGTmpjbWx3ZENrZ2UxeHVJQ0FnSUNBZ2NtVnpiMngyWlNncE8xeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQmpiMjV6ZENCelkzSnBjSFFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLQ2RzYVc1ckp5azdYRzRnSUNBZ2MyTnlhWEIwTG5SNWNHVWdQU0FuZEdWNGRDOWpjM01uTzF4dUlDQWdJSE5qY21sd2RDNXlaV3dnUFNBbmMzUjViR1Z6YUdWbGRDYzdYRzRnSUNBZ2MyTnlhWEIwTG1oeVpXWWdQU0J6Y21NN1hHNGdJQ0FnYzJOeWFYQjBMbTl1WlhKeWIzSWdQU0FvWlhKeUtTQTlQaUI3WEc0Z0lDQWdJQ0JvWldGa1JXeGxiV1Z1ZENFdWNtVnRiM1psUTJocGJHUW9jMk55YVhCMEtUdGNiaUFnSUNBZ0lISmxhbVZqZENodVpYY2dWVkpKUlhKeWIzSW9ZRlJvWlNCamMzTWdKSHR6Y21OOUlHbHpJRzV2SUdGalkyVnpjMmxpYkdVdVlDa3BPMXh1SUNBZ0lIMDdYRzRnSUNBZ2MyTnlhWEIwTG05dWJHOWhaQ0E5SUNncElEMCtJSHRjYmlBZ0lDQWdJRjlwYlhCdmNuUmxaRk5qY21sd2RGdHpjbU5kSUQwZ2RISjFaVHRjYmlBZ0lDQWdJSEpsYzI5c2RtVW9LVHRjYmlBZ0lDQjlPMXh1SUNBZ0lHaGxZV1JGYkdWdFpXNTBJUzVoY0hCbGJtUkRhR2xzWkNoelkzSnBjSFFwTzF4dUlDQjlLVHRjYm4xY2JseHVMeW9xWEc0Z0tpQnNiMkZrSUdSbGNHVnVaR1Z1WTNrZ1lua2djMk55YVhCMElIUmhaMXh1SUNvdlhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2NtVnhkV2x5WlZOamNtbHdkQ2h6Y21NNklITjBjbWx1WnlrNklGQnliMjFwYzJVOGRtOXBaRDRnZTF4dUlDQmpiMjV6ZENCb1pXRmtSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBJQ1ltSUNoa2IyTjFiV1Z1ZEM1b1pXRmtJSHg4SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SelFubFVZV2RPWVcxbEtDZG9aV0ZrSnlsYk1GMHBPMXh1WEc0Z0lISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTZ29jbVZ6YjJ4MlpTd2djbVZxWldOMEtTQTlQaUI3WEc0Z0lDQWdhV1lnS0NGa2IyTjFiV1Z1ZENCOGZDQnpjbU1nYVc0Z1gybHRjRzl5ZEdWa1UyTnlhWEIwS1NCN1hHNGdJQ0FnSUNCeVpYTnZiSFpsS0NrN1hHNGdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1SUNBZ0lHTnZibk4wSUhOamNtbHdkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KM05qY21sd2RDY3BPMXh1SUNBZ0lITmpjbWx3ZEM1MGVYQmxJRDBnSjNSbGVIUXZhbUYyWVhOamNtbHdkQ2M3WEc0Z0lDQWdjMk55YVhCMExtbGtJRDBnSjE5eVpXRmpkRjlpWVdsa2RWOXRZWEFuTzF4dUlDQWdJSE5qY21sd2RDNXpjbU1nUFNCemNtTTdYRzRnSUNBZ2MyTnlhWEIwTG05dVpYSnliM0lnUFNBb1pYSnlLU0E5UGlCN1hHNGdJQ0FnSUNCb1pXRmtSV3hsYldWdWRDRXVjbVZ0YjNabFEyaHBiR1FvYzJOeWFYQjBLVHRjYmlBZ0lDQWdJSEpsYW1WamRDaHVaWGNnVlZKSlJYSnliM0lvWUZSb1pTQlRZM0pwY0hRZ0pIdHpjbU45SUdseklHNXZJR0ZqWTJWemMybGliR1V1WUNrcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnYzJOeWFYQjBMbTl1Ykc5aFpDQTlJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lGOXBiWEJ2Y25SbFpGTmpjbWx3ZEZ0emNtTmRJRDBnZEhKMVpUdGNiaUFnSUNBZ0lISmxjMjlzZG1Vb0tUdGNiaUFnSUNCOU8xeHVJQ0FnSUdobFlXUkZiR1Z0Wlc1MElTNWhjSEJsYm1SRGFHbHNaQ2h6WTNKcGNIUXBPMXh1SUNCOUtUdGNibjFjYmlKZGZRPT0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2YuanNcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vZ2V0UHJvdG90eXBlT2YuanNcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIik7XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gcmVxdWlyZShcIi4vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1wiKTtcblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkge1xuICAgIHZhciBTdXBlciA9IGdldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVTdXBlcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZShHcCwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gIGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCBHZW5lcmF0b3JGdW5jdGlvbik7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG5pbXBvcnQgX2FzeW5jVG9HZW5lcmF0b3IgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiO1xuaW1wb3J0IF9yZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCI7XG5cbi8qKlxuICog5Yid5aeL5YyW5ZKM5Yqg6L29YmFpZHXlnLDlm75cbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlcXVpcmVTY3JpcHQgfSBmcm9tICcuLi91dGlscy9yZXF1aXJlU2NyaXB0JztcbmV4cG9ydCBmdW5jdGlvbiBkZWxheSh0aW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgd2luZG93ICYmIHdpbmRvdy5zZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuICB9KTtcbn1cbnZhciBERUZBVUxUX1JFVFJZX1RJTUUgPSAzO1xuLyoqXG4gKiBBUElMb2FkZXIg55So5LqO5Yqg6L2955m+5bqm5Zyw5Zu+5L6d6LWWXG4gKi9cblxudmFyIEFQSUxvYWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQVBJTG9hZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEFQSUxvYWRlcik7XG5cbiAgZnVuY3Rpb24gQVBJTG9hZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFQSUxvYWRlcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF90aGlzLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh3aW5kb3cgJiYgX3RoaXMucHJvcHMudHlwZSA9PT0gJ3dlYmdsJykge1xuICAgICAgICB3aW5kb3cuQk1hcCA9IHdpbmRvdy5CTWFwR0w7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGVkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkZWQ6IHByb3BzLnR5cGUgPT09ICd3ZWJnbCcgPyB3aW5kb3cgJiYgISF3aW5kb3cuQk1hcEdMIDogd2luZG93ICYmICEhd2luZG93LkJNYXBcbiAgICB9O1xuXG4gICAgaWYgKF90aGlzLnByb3BzLmFrYXkgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQmFpRHVNYXA6IGFrYXkgaXMgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQVBJTG9hZGVyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBjYWxsYmFja05hbWUgPSB0aGlzLnByb3BzLmNhbGxiYWNrTmFtZTtcblxuICAgICAgaWYgKCF3aW5kb3cpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnd2ViZ2wnICYmIHdpbmRvdyAmJiAhd2luZG93LkJNYXBHTCB8fCB3aW5kb3cgJiYgIXdpbmRvdy5CTWFwKSB7XG4gICAgICAgIGlmICh3aW5kb3cgJiYgd2luZG93W2NhbGxiYWNrTmFtZV0pIHtcbiAgICAgICAgICBBUElMb2FkZXIud2FpdFF1ZXVlLnB1c2goW3RoaXMuZmluaXNoLCB0aGlzLmhhbmRsZUVycm9yXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkTWFwKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5sb2FkZWQgPyB0aGlzLnByb3BzLmNoaWxkcmVuIDogdGhpcy5wcm9wcy5mYWxsYmFjayA/IHRoaXMucHJvcHMuZmFsbGJhY2sodGhpcy5zdGF0ZS5lcnJvcikgOiB0aGlzLnN0YXRlLmVycm9yID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2UpIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U2NyaXB0U3JjXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNjcmlwdFNyYygpIHtcbiAgICAgIHZhciBjZmcgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHByb3RvY29sID0gY2ZnLnByb3RvY29sIHx8IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbDtcblxuICAgICAgaWYgKHByb3RvY29sLmluZGV4T2YoJzonKSA9PT0gLTEpIHtcbiAgICAgICAgcHJvdG9jb2wgKz0gJzonO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJncyA9IFtcInY9XCIuY29uY2F0KGNmZy52ZXJzaW9uKSwgXCJhaz1cIi5jb25jYXQoY2ZnLmFrYXkpLCBcImNhbGxiYWNrPVwiLmNvbmNhdChjZmcuY2FsbGJhY2tOYW1lKV07XG5cbiAgICAgIGlmIChjZmcudHlwZSkge1xuICAgICAgICBhcmdzLnB1c2goXCJ0eXBlPVwiLmNvbmNhdChjZmcudHlwZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQocHJvdG9jb2wsIFwiLy9cIikuY29uY2F0KGNmZy5ob3N0QW5kUGF0aCwgXCI/XCIpLmNvbmNhdChhcmdzLmpvaW4oJyYnKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGxvYWQgQmFpZHVNYXAgaW4gc2NyaXB0IHRhZ1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibG9hZE1hcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2xvYWRNYXAgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgY2FsbGJhY2tOYW1lLCBzcmMsIGksIF9yZXQ7XG5cbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjYWxsYmFja05hbWUgPSB0aGlzLnByb3BzLmNhbGxiYWNrTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAzO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgc3JjID0gdGhpcy5nZXRTY3JpcHRTcmMoKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgLy8gZmx1c2ggcXVldWVcbiAgICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IEFQSUxvYWRlci53YWl0UXVldWU7XG4gICAgICAgICAgICAgICAgICBBUElMb2FkZXIud2FpdFF1ZXVlID0gW107XG4gICAgICAgICAgICAgICAgICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrWzBdKCk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgX3RoaXMyLmZpbmlzaCgpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgaWYgKCEoaSA8IERFRkFVTFRfUkVUUllfVElNRSkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAyNDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSA3O1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZVNjcmlwdChzcmMpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcImJyZWFrXCIsIDI0KTtcblxuICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxMztcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0W1wiY2F0Y2hcIl0oNyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIShpID09PSBERUZBVUxUX1JFVFJZX1RJTUUgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBCYWlkdSBNYXA6IFwiLmNvbmNhdChfY29udGV4dC50MC5tZXNzYWdlKSk7IC8vIGZsdXNoIHF1ZXVlXG5cbiAgICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IEFQSUxvYWRlci53YWl0UXVldWU7XG4gICAgICAgICAgICAgICAgICBBUElMb2FkZXIud2FpdFF1ZXVlID0gW107XG4gICAgICAgICAgICAgICAgICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrWzFdKGVycik7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgX3RoaXMyLmhhbmRsZUVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHY6IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIShfdHlwZW9mKF9yZXQpID09PSBcIm9iamVjdFwiKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDE5O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBfcmV0LnYpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDIxO1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWxheShpICogMTAwMCk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzLCBbWzcsIDEzXV0pO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBsb2FkTWFwKCkge1xuICAgICAgICByZXR1cm4gX2xvYWRNYXAuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvYWRNYXA7XG4gICAgfSgpXG4gIH1dLCBbe1xuICAgIGtleTogXCJyZWFkeVwiLFxuICAgIHZhbHVlOlxuICAgIC8qKlxuICAgICAqIOWFqOWxgOWPr+iDveWtmOWcqOWkmuS4qkxvYWRlcuWQjOaXtua4suafkywg5L2G5piv5Y+q6IO955Sx5LiA5Liq6LSf6LSj5Yqg6L29XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiDnrYnlvoVCTWFw5bCx57uqXG4gICAgICovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWFkeSA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUyKCkge1xuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoISh3aW5kb3cgJiYgd2luZG93LkJNYXApKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKCEod2luZG93ICYmIHdpbmRvdy5CTWFwR0wpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiKTtcblxuICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG4gICAgICAgICAgICAgICAgICBBUElMb2FkZXIud2FpdFF1ZXVlLnB1c2goW3JlcywgcmVqXSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTIpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFkeS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVhZHk7XG4gICAgfSgpXG4gIH1dKTtcblxuICByZXR1cm4gQVBJTG9hZGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5BUElMb2FkZXIuZGVmYXVsdFByb3BzID0ge1xuICBha2F5OiAnJyxcbiAgaG9zdEFuZFBhdGg6ICdhcGkubWFwLmJhaWR1LmNvbS9hcGknLFxuICB2ZXJzaW9uOiAnMy4wJyxcbiAgY2FsbGJhY2tOYW1lOiAnbG9hZF9ibWFwX3NkaycsXG4gIHR5cGU6ICcnXG59O1xuQVBJTG9hZGVyLndhaXRRdWV1ZSA9IFtdO1xuZXhwb3J0IHsgQVBJTG9hZGVyIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlCVUVsTWIyRmtaWEl2YVc1a1pYZ3VkSE40SWwwc0ltNWhiV1Z6SWpwYklsSmxZV04wSWl3aWNtVnhkV2x5WlZOamNtbHdkQ0lzSW1SbGJHRjVJaXdpZEdsdFpTSXNJbEJ5YjIxcGMyVWlMQ0p5WlhOdmJIWmxJaXdpY21WcVpXTjBJaXdpZDJsdVpHOTNJaXdpYzJWMFZHbHRaVzkxZENJc0lrUkZSa0ZWVEZSZlVrVlVVbGxmVkVsTlJTSXNJa0ZRU1V4dllXUmxjaUlzSW5CeWIzQnpJaXdpYUdGdVpHeGxSWEp5YjNJaUxDSmxjbkp2Y2lJc0luTmxkRk4wWVhSbElpd2labWx1YVhOb0lpd2lkSGx3WlNJc0lrSk5ZWEFpTENKQ1RXRndSMHdpTENKc2IyRmtaV1FpTENKemRHRjBaU0lzSW1GcllYa2lMQ0pVZVhCbFJYSnliM0lpTENKallXeHNZbUZqYTA1aGJXVWlMQ0ozWVdsMFVYVmxkV1VpTENKd2RYTm9JaXdpYkc5aFpFMWhjQ0lzSW1Ob2FXeGtjbVZ1SWl3aVptRnNiR0poWTJzaUxDSmpiMnh2Y2lJc0ltMWxjM05oWjJVaUxDSmpabWNpTENKd2NtOTBiMk52YkNJc0lteHZZMkYwYVc5dUlpd2lhVzVrWlhoUFppSXNJbUZ5WjNNaUxDSjJaWEp6YVc5dUlpd2lhRzl6ZEVGdVpGQmhkR2dpTENKcWIybHVJaXdpYzNKaklpd2laMlYwVTJOeWFYQjBVM0pqSWl3aWNYVmxkV1VpTENKbWIzSkZZV05vSWl3aWRHRnpheUlzSW1raUxDSmxjbklpTENKRmNuSnZjaUlzSW5KbGN5SXNJbkpsYWlJc0lrTnZiWEJ2Ym1WdWRDSXNJbVJsWm1GMWJIUlFjbTl3Y3lKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUFFTeExRVUZRTEUxQlFXdENMRTlCUVd4Q08wRkJSVUVzVTBGQlUwTXNZVUZCVkN4UlFVRTRRaXgzUWtGQk9VSTdRVUZGUVN4UFFVRlBMRk5CUVZORExFdEJRVlFzUTBGQlpVTXNTVUZCWml4RlFVRnBSRHRCUVVOMFJDeFRRVUZQTEVsQlFVbERMRTlCUVVvc1EwRkJXU3hWUVVGRFF5eFBRVUZFTEVWQlFWVkRMRTFCUVZZc1JVRkJjVUk3UVVGRGRFTkRMRWxCUVVGQkxFMUJRVTBzU1VGQlNVRXNUVUZCVFN4RFFVRkRReXhWUVVGUUxFTkJRV3RDU0N4UFFVRnNRaXhGUVVFeVFrWXNTVUZCTTBJc1EwRkJWanRCUVVORUxFZEJSazBzUTBGQlVEdEJRVWRFTzBGQlkwUXNTVUZCVFUwc2EwSkJRV3RDTEVkQlFVY3NRMEZCTTBJN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBsQlEzRkNReXhUT3pzN096dEJRVEpDYmtJc2NVSkJRVzFDUXl4TFFVRnVRaXhGUVVFd1F6dEJRVUZCT3p0QlFVRkJPenRCUVVONFF5dzRRa0ZCVFVFc1MwRkJUanM3UVVGRWQwTXNWVUZ0Um14RFF5eFhRVzVHYTBNc1IwRnRSbkJDTEZWQlFVTkRMRXRCUVVRc1JVRkJhMEk3UVVGRGRFTXNXVUZCUzBNc1VVRkJUQ3hEUVVGak8wRkJRVVZFTEZGQlFVRkJMRXRCUVVzc1JVRkJURUU3UVVGQlJpeFBRVUZrTzBGQlEwUXNTMEZ5Um5sRE96dEJRVUZCTEZWQmRVWnNRMFVzVFVGMlJtdERMRWRCZFVaNlFpeFpRVUZOTzBGQlEzSkNMRlZCUVVsU0xFMUJRVTBzU1VGQlNTeE5RVUZMU1N4TFFVRk1MRU5CUVZkTExFbEJRVmdzUzBGQmIwSXNUMEZCYkVNc1JVRkJNa003UVVGRGVrTlVMRkZCUVVGQkxFMUJRVTBzUTBGQlExVXNTVUZCVUN4SFFVRmpWaXhOUVVGTkxFTkJRVU5YTEUxQlFYSkNPMEZCUTBRN08wRkJRMFFzV1VGQlMwb3NVVUZCVEN4RFFVRmpPMEZCUTFwTExGRkJRVUZCTEUxQlFVMHNSVUZCUlR0QlFVUkpMRTlCUVdRN1FVRkhSQ3hMUVRsR2VVTTdPMEZCUlhoRExGVkJRVXRETEV0QlFVd3NSMEZCWVR0QlFVTllSQ3hOUVVGQlFTeE5RVUZOTEVWQlFVVlNMRXRCUVVzc1EwRkJRMHNzU1VGQlRpeExRVUZsTEU5QlFXWXNSMEZCZVVKVUxFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTkJMRTFCUVUwc1EwRkJRMWNzVFVGQk5VTXNSMEZCY1VSWUxFMUJRVTBzU1VGQlNTeERRVUZETEVOQlFVTkJMRTFCUVUwc1EwRkJRMVU3UVVGRWNrVXNTMEZCWWpzN1FVRkhRU3hSUVVGSkxFMUJRVXRPTEV0QlFVd3NRMEZCVjFVc1NVRkJXQ3hKUVVGdFFpeEpRVUYyUWl4RlFVRTJRanRCUVVNelFpeFpRVUZOTEVsQlFVbERMRk5CUVVvc1EwRkJZeXcwUWtGQlpDeERRVUZPTzBGQlEwUTdPMEZCVUhWRE8wRkJVWHBET3pzN08xZEJSVVFzTmtKQlFUSkNPMEZCUTNwQ0xGVkJRVkZETEZsQlFWSXNSMEZCZVVJc1MwRkJTMW9zUzBGQk9VSXNRMEZCVVZrc1dVRkJVanM3UVVGRFFTeFZRVUZKTEVOQlFVTm9RaXhOUVVGTUxFVkJRV0U3UVVGRFdEdEJRVU5FT3p0QlFVTkVMRlZCUVVzc1MwRkJTMGtzUzBGQlRDeERRVUZYU3l4SlFVRllMRXRCUVc5Q0xFOUJRWEJDTEVsQlFTdENWQ3hOUVVFdlFpeEpRVUY1UXl4RFFVRkRRU3hOUVVGTkxFTkJRVU5YTEUxQlFXeEVMRWxCUVRoRVdDeE5RVUZOTEVsQlFVa3NRMEZCUTBFc1RVRkJUU3hEUVVGRFZTeEpRVUZ3Uml4RlFVRXlSanRCUVVONlJpeFpRVUZKVml4TlFVRk5MRWxCUVVsQkxFMUJRVTBzUTBGQlEyZENMRmxCUVVRc1EwRkJjRUlzUlVGQk1rTTdRVUZEZWtOaUxGVkJRVUZCTEZOQlFWTXNRMEZCUTJNc1UwRkJWaXhEUVVGdlFrTXNTVUZCY0VJc1EwRkJlVUlzUTBGQlF5eExRVUZMVml4TlFVRk9MRVZCUVdNc1MwRkJTMGdzVjBGQmJrSXNRMEZCZWtJN1FVRkRRVHRCUVVORU96dEJRVVZFTEdGQlFVdGpMRTlCUVV3N1FVRkRSRHRCUVVOR096czdWMEZGUkN4clFrRkJaMEk3UVVGRFpDeGhRVUZQTEV0QlFVdE9MRXRCUVV3c1EwRkJWMFFzVFVGQldDeEhRVU5NTEV0QlFVdFNMRXRCUVV3c1EwRkJWMmRDTEZGQlJFNHNSMEZGU0N4TFFVRkxhRUlzUzBGQlRDeERRVUZYYVVJc1VVRkJXQ3hIUVVOR0xFdEJRVXRxUWl4TFFVRk1MRU5CUVZkcFFpeFJRVUZZTEVOQlFXOUNMRXRCUVV0U0xFdEJRVXdzUTBGQlYxQXNTMEZCTDBJc1EwRkVSU3hIUVVWQkxFdEJRVXRQTEV0QlFVd3NRMEZCVjFBc1MwRkJXQ3huUWtGRFJqdEJRVUZMTEZGQlFVRXNTMEZCU3l4RlFVRkZPMEZCUVVWblFpeFZRVUZCUVN4TFFVRkxMRVZCUVVVN1FVRkJWRHRCUVVGYUxGTkJRU3RDTEV0QlFVdFVMRXRCUVV3c1EwRkJWMUFzUzBGQldDeERRVUZwUW1sQ0xFOUJRV2hFTEVOQlJFVXNSMEZGUVN4SlFVNUtPMEZCVDBRN096dFhRVVZFTEhkQ1FVRjFRanRCUVVOeVFpeFZRVUZOUXl4SFFVRkhMRWRCUVVjc1MwRkJTM0JDTEV0QlFXcENPMEZCUTBFc1ZVRkJTWEZDTEZGQlFWRXNSMEZCU1VRc1IwRkJSeXhEUVVGRFF5eFJRVUZLTEVsQlFXZENla0lzVFVGQlRTeERRVUZETUVJc1VVRkJVQ3hEUVVGblFrUXNVVUZCYUVRN08wRkJRMEVzVlVGQlNVRXNVVUZCVVN4RFFVRkZSU3hQUVVGV0xFTkJRV3RDTEVkQlFXeENMRTFCUVRKQ0xFTkJRVU1zUTBGQmFFTXNSVUZCYlVNN1FVRkRha05HTEZGQlFVRkJMRkZCUVZFc1NVRkJTU3hIUVVGYU8wRkJRMFE3TzBGQlEwUXNWVUZCVFVjc1NVRkJTU3hIUVVGSExHRkJRVTFLTEVkQlFVY3NRMEZCUTBzc1QwRkJWaXhuUWtGQk1rSk1MRWRCUVVjc1EwRkJRMVlzU1VGQkwwSXNjMEpCUVcxRVZTeEhRVUZITEVOQlFVTlNMRmxCUVhaRUxFVkJRV0k3TzBGQlEwRXNWVUZCU1ZFc1IwRkJSeXhEUVVGRFppeEpRVUZTTEVWQlFXTTdRVUZEV20xQ0xGRkJRVUZCTEVsQlFVa3NRMEZCUTFZc1NVRkJUQ3huUWtGQmEwSk5MRWRCUVVjc1EwRkJRMllzU1VGQmRFSTdRVUZEUkRzN1FVRkRSQ3gxUWtGQlZXZENMRkZCUVZZc1pVRkJkVUpFTEVkQlFVY3NRMEZCUTAwc1YwRkJNMElzWTBGQk1FTkdMRWxCUVVrc1EwRkJRMGNzU1VGQlRDeERRVUZWTEVkQlFWWXNRMEZCTVVNN1FVRkRSRHRCUVVORU8wRkJRMFk3UVVGRFFUczdPenM3T0VWQlEwVTdRVUZCUVRzN1FVRkJRVHM3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVTlZaaXhuUWtGQlFVRXNXVUZFVml4SFFVTXlRaXhMUVVGTFdpeExRVVJvUXl4RFFVTlZXU3haUVVSV096dEJRVUZCTEc5Q1FVVlBhRUlzVFVGR1VEdEJRVUZCTzBGQlFVRTdRVUZCUVRzN1FVRkJRVHM3UVVGQlFUdEJRVXRSWjBNc1owSkJRVUZCTEVkQlRGSXNSMEZMWXl4TFFVRkxReXhaUVVGTUxFVkJUR1E3TzBGQlRVZHFReXhuUWtGQlFVRXNUVUZCUkN4RFFVRm5RbWRDTEZsQlFXaENMRWxCUVhWRExGbEJRVTA3UVVGRE0wTTdRVUZEUVN4elFrRkJUV3RDTEV0QlFVc3NSMEZCUnk5Q0xGTkJRVk1zUTBGQlEyTXNVMEZCZUVJN1FVRkRRV1FzYTBKQlFVRkJMRk5CUVZNc1EwRkJRMk1zVTBGQlZpeEhRVUZ6UWl4RlFVRjBRanRCUVVOQmFVSXNhMEpCUVVGQkxFdEJRVXNzUTBGQlEwTXNUMEZCVGl4RFFVRmpMRlZCUVVORExFbEJRVVE3UVVGQlFTd3lRa0ZCVlVFc1NVRkJTU3hEUVVGRExFTkJRVVFzUTBGQlNpeEZRVUZXTzBGQlFVRXNiVUpCUVdRN08wRkJRMEVzYTBKQlFVRXNUVUZCU1N4RFFVRkROVUlzVFVGQlREdEJRVU5FTEdsQ1FVNUVPenRCUVZGVE5rSXNaMEpCUVVGQkxFTkJaRmdzUjBGalpTeERRV1JtT3p0QlFVRkJPMEZCUVVFc2MwSkJZMnRDUVN4RFFVRkRMRWRCUVVkdVF5eHJRa0ZrZEVJN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlFVRTdRVUZCUVR0QlFVRkJMSFZDUVdkQ1dWSXNZVUZCWVN4RFFVRkRjME1zUjBGQlJDeERRV2hDZWtJN08wRkJRVUU3UVVGQlFUczdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJRVUVzYzBKQmJVSlZTeXhEUVVGRExFdEJRVXR1UXl4clFrRkJhMElzUjBGQlJ5eERRVzVDY2tNN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlFVRTdRVUZ2UWxFc2MwSkJRVTF2UXl4SFFVRkhMRWRCUVVjc1NVRkJTVU1zUzBGQlNpeHhRMEZCZFVNc1dVRkJUV2hDTEU5QlFUZERMRVZCUVZvc1EwRndRbElzUTBGeFFsRTdPMEZCUTBFc2MwSkJRVTFYTEV0QlFVc3NSMEZCUnk5Q0xGTkJRVk1zUTBGQlEyTXNVMEZCZUVJN1FVRkRRV1FzYTBKQlFVRkJMRk5CUVZNc1EwRkJRMk1zVTBGQlZpeEhRVUZ6UWl4RlFVRjBRanRCUVVOQmFVSXNhMEpCUVVGQkxFdEJRVXNzUTBGQlEwTXNUMEZCVGl4RFFVRmpMRlZCUVVORExFbEJRVVE3UVVGQlFTd3lRa0ZCVlVFc1NVRkJTU3hEUVVGRExFTkJRVVFzUTBGQlNpeERRVUZSUlN4SFFVRlNMRU5CUVZZN1FVRkJRU3h0UWtGQlpEczdRVUZEUVN4clFrRkJRU3hOUVVGSkxFTkJRVU5xUXl4WFFVRk1MRU5CUVdsQ2FVTXNSMEZCYWtJN08wRkJRMEU3UVVGQlFUdEJRVUZCTzBGQk1VSlNPenRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVRkJPenRCUVVGQk8wRkJRVUU3UVVGQlFTeDFRa0UwUWxrelF5eExRVUZMTEVOQlFVTXdReXhEUVVGRExFZEJRVWNzU1VGQlRDeERRVFZDYWtJN08wRkJRVUU3UVVGak1FTkJMR2RDUVVGQlFTeERRVUZETEVWQlpETkRPMEZCUVVFN1FVRkJRVHM3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRU3hQT3pzN096czdPenM3T3p0QlFYQkZRVHRCUVVOR08wRkJRMEU3TzBGQlJVVTdRVUZEUmp0QlFVTkJPenMwUlVGRFJUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFc2MwSkJRMDF5UXl4TlFVRk5MRWxCUVVsQkxFMUJRVTBzUTBGQlExVXNTVUZFZGtJN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlFVRTdPMEZCUVVFN1FVRkJRU3h6UWtGSlRWWXNUVUZCVFN4SlFVRkpRU3hOUVVGTkxFTkJRVU5YTEUxQlNuWkNPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVUZCT3p0QlFVRkJPMEZCUVVFc2EwUkJUMU1zU1VGQlNXUXNUMEZCU2l4RFFVRlpMRlZCUVVNeVF5eEhRVUZFTEVWQlFVMURMRWRCUVU0c1JVRkJZenRCUVVNdlFuUkRMR3RDUVVGQlFTeFRRVUZUTEVOQlFVTmpMRk5CUVZZc1EwRkJiMEpETEVsQlFYQkNMRU5CUVhsQ0xFTkJRVU56UWl4SFFVRkVMRVZCUVUxRExFZEJRVTRzUTBGQmVrSTdRVUZEUkN4cFFrRkdUU3hEUVZCVU96dEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQkxFODdPenM3T3pzN096czdPMFZCYUVKeFEyaEVMRXRCUVVzc1EwRkJRMmxFTEZNN08wRkJRWGhDZGtNc1V5eERRVU5NZDBNc1dTeEhRVUZsTzBGQlF6TkNOMElzUlVGQlFVRXNTVUZCU1N4RlFVRkZMRVZCUkhGQ08wRkJSVE5DWjBJc1JVRkJRVUVzVjBGQlZ5eEZRVUZGTEhWQ1FVWmpPMEZCUnpOQ1JDeEZRVUZCUVN4UFFVRlBMRVZCUVVVc1MwRklhMEk3UVVGSk0wSmlMRVZCUVVGQkxGbEJRVmtzUlVGQlJTeGxRVXBoTzBGQlN6TkNVQ3hGUVVGQlFTeEpRVUZKTEVWQlFVVTdRVUZNY1VJc1F6dEJRVVJXVGl4VExFTkJXVXBqTEZNc1IwRkJlVU1zUlR0VFFWcHlRMlFzVXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh1SUNvZzVZaWQ1YWVMNVl5VzVaS001WXFnNkwyOVltRnBaSFhsbkxEbG03NWNiaUFxTDF4dWFXMXdiM0owSUZKbFlXTjBJR1p5YjIwZ0ozSmxZV04wSnp0Y2JtbHRjRzl5ZENCN0lFTnZibVpwWnlCOUlHWnliMjBnSnk0dUwyTnZiVzF2Ymk5dFlYQW5PMXh1YVcxd2IzSjBJSHNnY21WeGRXbHlaVk5qY21sd2RDQjlJR1p5YjIwZ0p5NHVMM1YwYVd4ekwzSmxjWFZwY21WVFkzSnBjSFFuTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1pHVnNZWGtvZEdsdFpUb2diblZ0WW1WeUtUb2dVSEp2YldselpUeDFibVJsWm1sdVpXUStJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QlFjbTl0YVhObEtDaHlaWE52YkhabExDQnlaV3BsWTNRcElEMCtJSHRjYmlBZ0lDQjNhVzVrYjNjZ0ppWWdkMmx1Wkc5M0xuTmxkRlJwYldWdmRYUW9jbVZ6YjJ4MlpTd2dkR2x0WlNrN1hHNGdJSDBwTzF4dWZWeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRUZRU1V4dllXUmxjbEJ5YjNCeklHVjRkR1Z1WkhNZ1EyOXVabWxuSUh0Y2JpQWdMeW9xWEc0Z0lDQXFJT2VVcU9TNmp1V3hsZWVrdXVXS29PaTl2ZVM0cmVhSWx1bVVtZWl2citlS3R1YUFnVnh1SUNBZ0tpOWNiaUFnWm1Gc2JHSmhZMnMvT2lBb1pYSnliM0kvT2lCRmNuSnZjaWtnUFQ0Z1VtVmhZM1F1VW1WaFkzUk9iMlJsTzF4dWZWeHVYRzVwYm5SbGNtWmhZMlVnVTNSaGRHVWdlMXh1SUNCc2IyRmtaV1E2SUdKdmIyeGxZVzQ3WEc0Z0lHVnljbTl5UHpvZ1JYSnliM0k3WEc1OVhHNWNibU52Ym5OMElFUkZSa0ZWVEZSZlVrVlVVbGxmVkVsTlJTQTlJRE03WEc1Y2JpOHFLbHh1SUNvZ1FWQkpURzloWkdWeUlPZVVxT1M2anVXS29PaTl2ZWVadnVXNnB1V2NzT1didnVTK25laTFsbHh1SUNvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJCVUVsTWIyRmtaWElnWlhoMFpXNWtjeUJTWldGamRDNURiMjF3YjI1bGJuUThRVkJKVEc5aFpHVnlVSEp2Y0hNc0lGTjBZWFJsUGlCN1hHNGdJSEIxWW14cFl5QnpkR0YwYVdNZ1pHVm1ZWFZzZEZCeWIzQnpJRDBnZTF4dUlDQWdJR0ZyWVhrNklDY25MRnh1SUNBZ0lHaHZjM1JCYm1SUVlYUm9PaUFuWVhCcExtMWhjQzVpWVdsa2RTNWpiMjB2WVhCcEp5eGNiaUFnSUNCMlpYSnphVzl1T2lBbk15NHdKeXhjYmlBZ0lDQmpZV3hzWW1GamEwNWhiV1U2SUNkc2IyRmtYMkp0WVhCZmMyUnJKeXhjYmlBZ0lDQjBlWEJsT2lBbkp5eGNiaUFnZlR0Y2JseHVJQ0F2S2lwY2JpQWdJQ29nNVlXbzViR0E1WSt2NklPOTVhMlk1WnlvNWFTYTVMaXFURzloWkdWeTVaQ001cGUyNXJpeTVwK1RMQ0RrdllibW1LL2xqNnJvZzczbmxMSGt1SURrdUtyb3RKL290S1BsaXFEb3ZiMWNiaUFnSUNvdlhHNGdJSEJ5YVhaaGRHVWdjM1JoZEdsaklIZGhhWFJSZFdWMVpUb2dRWEp5WVhrOFcwWjFibU4wYVc5dUxDQkdkVzVqZEdsdmJsMCtJRDBnVzEwN1hHNGdJQzhxS2x4dUlDQWdLaURucllubHZvVkNUV0Z3NWJDeDU3dXFYRzRnSUNBcUwxeHVJQ0J3ZFdKc2FXTWdjM1JoZEdsaklHRnplVzVqSUhKbFlXUjVLQ2tnZTF4dUlDQWdJR2xtSUNoM2FXNWtiM2NnSmlZZ2QybHVaRzkzTGtKTllYQXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIZHBibVJ2ZHlBbUppQjNhVzVrYjNjdVFrMWhjRWRNS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTZ29jbVZ6TENCeVpXb3BJRDArSUh0Y2JpQWdJQ0FnSUVGUVNVeHZZV1JsY2k1M1lXbDBVWFZsZFdVdWNIVnphQ2hiY21WekxDQnlaV3BkS1R0Y2JpQWdJQ0I5S1R0Y2JpQWdmVnh1SUNCd2RXSnNhV01nWTI5dWMzUnlkV04wYjNJb2NISnZjSE02SUVGUVNVeHZZV1JsY2xCeWIzQnpLU0I3WEc0Z0lDQWdjM1Z3WlhJb2NISnZjSE1wTzF4dUlDQWdJSFJvYVhNdWMzUmhkR1VnUFNCN1hHNGdJQ0FnSUNCc2IyRmtaV1E2SUhCeWIzQnpMblI1Y0dVZ1BUMDlJQ2QzWldKbmJDY2dQeUIzYVc1a2IzY2dKaVlnSVNGM2FXNWtiM2N1UWsxaGNFZE1JRG9nZDJsdVpHOTNJQ1ltSUNFaGQybHVaRzkzTGtKTllYQXNYRzRnSUNBZ2ZUdGNiaUFnSUNCcFppQW9kR2hwY3k1d2NtOXdjeTVoYTJGNUlEMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMEpoYVVSMVRXRndPaUJoYTJGNUlHbHpJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY0hWaWJHbGpJR052YlhCdmJtVnVkRVJwWkUxdmRXNTBLQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dZMkZzYkdKaFkydE9ZVzFsSUgwZ1BTQjBhR2x6TG5CeWIzQnpPMXh1SUNBZ0lHbG1JQ2doZDJsdVpHOTNLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDZ29kR2hwY3k1d2NtOXdjeTUwZVhCbElEMDlQU0FuZDJWaVoyd25JQ1ltSUhkcGJtUnZkeUFtSmlBaGQybHVaRzkzTGtKTllYQkhUQ2tnZkh3Z0tIZHBibVJ2ZHlBbUppQWhkMmx1Wkc5M0xrSk5ZWEFwS1NCN1hHNGdJQ0FnSUNCcFppQW9kMmx1Wkc5M0lDWW1JSGRwYm1SdmQxdGpZV3hzWW1GamEwNWhiV1VnWVhNZ1lXNTVYU2tnZTF4dUlDQWdJQ0FnSUNCQlVFbE1iMkZrWlhJdWQyRnBkRkYxWlhWbExuQjFjMmdvVzNSb2FYTXVabWx1YVhOb0xDQjBhR2x6TG1oaGJtUnNaVVZ5Y205eVhTazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdkR2hwY3k1c2IyRmtUV0Z3S0NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NIVmliR2xqSUhKbGJtUmxjaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1emRHRjBaUzVzYjJGa1pXUWdQeUFvWEc0Z0lDQWdJQ0IwYUdsekxuQnliM0J6TG1Ob2FXeGtjbVZ1WEc0Z0lDQWdLU0E2SUhSb2FYTXVjSEp2Y0hNdVptRnNiR0poWTJzZ1B5QW9YRzRnSUNBZ0lDQjBhR2x6TG5CeWIzQnpMbVpoYkd4aVlXTnJLSFJvYVhNdWMzUmhkR1V1WlhKeWIzSXBYRzRnSUNBZ0tTQTZJSFJvYVhNdWMzUmhkR1V1WlhKeWIzSWdQeUFvWEc0Z0lDQWdJQ0E4WkdsMklITjBlV3hsUFh0N0lHTnZiRzl5T2lBbmNtVmtKeUI5ZlQ1N2RHaHBjeTV6ZEdGMFpTNWxjbkp2Y2k1dFpYTnpZV2RsZlR3dlpHbDJQbHh1SUNBZ0lDa2dPaUJ1ZFd4c08xeHVJQ0I5WEc1Y2JpQWdjSEpwZG1GMFpTQm5aWFJUWTNKcGNIUlRjbU1vS1NCN1hHNGdJQ0FnWTI5dWMzUWdZMlpuSUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCc1pYUWdjSEp2ZEc5amIyd2dQU0FvWTJabkxuQnliM1J2WTI5c0lIeDhJSGRwYm1SdmR5NXNiMk5oZEdsdmJpNXdjbTkwYjJOdmJDa2dZWE1nUTI5dVptbG5XeWR3Y205MGIyTnZiQ2RkTzF4dUlDQWdJR2xtSUNod2NtOTBiMk52YkNFdWFXNWtaWGhQWmlnbk9pY3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdjSEp2ZEc5amIyd2dLejBnSnpvbk8xeHVJQ0FnSUgxY2JpQWdJQ0JqYjI1emRDQmhjbWR6SUQwZ1cyQjJQU1I3WTJabkxuWmxjbk5wYjI1OVlDd2dZR0ZyUFNSN1kyWm5MbUZyWVhsOVlDd2dZR05oYkd4aVlXTnJQU1I3WTJabkxtTmhiR3hpWVdOclRtRnRaWDFnWFR0Y2JpQWdJQ0JwWmlBb1kyWm5MblI1Y0dVcElIdGNiaUFnSUNBZ0lHRnlaM011Y0hWemFDaGdkSGx3WlQwa2UyTm1aeTUwZVhCbGZXQXBPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnWUNSN2NISnZkRzlqYjJ4OUx5OGtlMk5tWnk1b2IzTjBRVzVrVUdGMGFIMC9KSHRoY21kekxtcHZhVzRvSnlZbktYMWdPMXh1SUNCOVhHNGdJQzhxS2x4dUlDQWdLaUJzYjJGa0lFSmhhV1IxVFdGd0lHbHVJSE5qY21sd2RDQjBZV2RjYmlBZ0lDb3ZYRzRnSUhCeWFYWmhkR1VnWVhONWJtTWdiRzloWkUxaGNDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCN0lHTmhiR3hpWVdOclRtRnRaU0I5SUQwZ2RHaHBjeTV3Y205d2N6dGNiaUFnSUNCcFppQW9JWGRwYm1SdmR5a2dlMXh1SUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUgxY2JpQWdJQ0JqYjI1emRDQnpjbU1nUFNCMGFHbHpMbWRsZEZOamNtbHdkRk55WXlncE8xeHVJQ0FnSUNoM2FXNWtiM2NnWVhNZ1lXNTVLVnRqWVd4c1ltRmphMDVoYldVZ1lYTWdZVzU1WFNBOUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUM4dklHWnNkWE5vSUhGMVpYVmxYRzRnSUNBZ0lDQmpiMjV6ZENCeGRXVjFaU0E5SUVGUVNVeHZZV1JsY2k1M1lXbDBVWFZsZFdVN1hHNGdJQ0FnSUNCQlVFbE1iMkZrWlhJdWQyRnBkRkYxWlhWbElEMGdXMTA3WEc0Z0lDQWdJQ0J4ZFdWMVpTNW1iM0pGWVdOb0tDaDBZWE5yS1NBOVBpQjBZWE5yV3pCZEtDa3BPMXh1SUNBZ0lDQWdkR2hwY3k1bWFXNXBjMmdvS1R0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCRVJVWkJWVXhVWDFKRlZGSlpYMVJKVFVVN0lHa3JLeWtnZTF4dUlDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdZWGRoYVhRZ2NtVnhkV2x5WlZOamNtbHdkQ2h6Y21NcE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUgwZ1kyRjBZMmdnS0dWeWNtOXlLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHBJRDA5UFNCRVJVWkJWVXhVWDFKRlZGSlpYMVJKVFVVZ0xTQXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWlhKeUlEMGdibVYzSUVWeWNtOXlLR0JHWVdsc1pXUWdkRzhnYkc5aFpDQkNZV2xrZFNCTllYQTZJQ1I3WlhKeWIzSXViV1Z6YzJGblpYMWdLVHRjYmlBZ0lDQWdJQ0FnSUNBdkx5Qm1iSFZ6YUNCeGRXVjFaVnh1SUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSEYxWlhWbElEMGdRVkJKVEc5aFpHVnlMbmRoYVhSUmRXVjFaVHRjYmlBZ0lDQWdJQ0FnSUNCQlVFbE1iMkZrWlhJdWQyRnBkRkYxWlhWbElEMGdXMTA3WEc0Z0lDQWdJQ0FnSUNBZ2NYVmxkV1V1Wm05eVJXRmphQ2dvZEdGemF5a2dQVDRnZEdGemExc3hYU2hsY25JcEtUdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtaGhibVJzWlVWeWNtOXlLR1Z5Y2lrN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR0YzWVdsMElHUmxiR0Y1S0drZ0tpQXhNREF3S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCd2NtbDJZWFJsSUdoaGJtUnNaVVZ5Y205eUlEMGdLR1Z5Y205eU9pQkZjbkp2Y2lrZ1BUNGdlMXh1SUNBZ0lIUm9hWE11YzJWMFUzUmhkR1VvZXlCbGNuSnZjaUI5S1R0Y2JpQWdmVHRjYmx4dUlDQndjbWwyWVhSbElHWnBibWx6YUNBOUlDZ3BJRDArSUh0Y2JpQWdJQ0JwWmlBb2QybHVaRzkzSUNZbUlIUm9hWE11Y0hKdmNITXVkSGx3WlNBOVBUMGdKM2RsWW1kc0p5a2dlMXh1SUNBZ0lDQWdkMmx1Wkc5M0xrSk5ZWEFnUFNCM2FXNWtiM2N1UWsxaGNFZE1JR0Z6SUdGdWVUdGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXpaWFJUZEdGMFpTaDdYRzRnSUNBZ0lDQnNiMkZrWldRNklIUnlkV1VzWEc0Z0lDQWdmU2s3WEc0Z0lIMDdYRzU5WEc0aVhYMD0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5LmpzXCIpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG5cbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDI7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgPSByZXF1aXJlKFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIOaJuemHj+WIm+W7uuWkmuS4quWmguS4iyBTdGF0Ze+8jOebkeWQrOW5tuiuvue9ruWAvO+8jFxuICog57uE5Lu25bGe5oCn5pu05pS5IDxDb21wb25ldCBlbmFibGVEcmFnZ2luZz17dHJ1ZX0gPlxuICog5qC55o2uIGVuYWJsZURyYWdnaW5nIOeahCBCb29sZWFuIOWAvO+8jOaJp+ihjCBgZW5hYmxlYCDlkowgYGRpc2FibGVgIOW8gOWktOeahOWHveaVsOOAglxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBjb25zdCBbZW5hYmxlRHJhZ2dpbmcsIHNldEVuYWJsZURyYWdnaW5nXSA9IHVzZVN0YXRlKHByb3BzLmVuYWJsZURyYWdnaW5nKTtcbiAqIHVzZUVmZmVjdCgoKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCd+fjplbmFibGVEcmFnZ2luZycsIGVuYWJsZURyYWdnaW5nLCBwcm9wcy5lbmFibGVEcmFnZ2luZywgcG9seWxpbmUpO1xuICogICBzZXRFbmFibGVEcmFnZ2luZyhwcm9wcy5lbmFibGVEcmFnZ2luZylcbiAqIH0sIFtwb2x5bGluZSwgZW5hYmxlRHJhZ2dpbmcsIHByb3BzLmVuYWJsZURyYWdnaW5nXSk7XG4gKiBgYGBcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHByb3BzXG4gKiBAcGFyYW0gcHJvcHNOYW1lXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVuYWJsZVByb3BlcnRpZXMoaW5zdGFuY2UpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIHByb3BzTmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG4gIHByb3BzTmFtZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGVOYW1lID0gXCJlbmFibGVcIi5jb25jYXQobmFtZSk7XG5cbiAgICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUocHJvcHNbZU5hbWVdKSxcbiAgICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICAgIHN0YXRlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGUyWzFdO1xuXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBmdW5OYW1lID0gcHJvcHNbZU5hbWVdID8gXCJlbmFibGVcIi5jb25jYXQobmFtZSkgOiBcImRpc2FibGVcIi5jb25jYXQobmFtZSk7XG5cbiAgICAgIGlmIChpbnN0YW5jZSAmJiBwcm9wc1tlTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbnN0YW5jZVtmdW5OYW1lXSAmJiBpbnN0YW5jZVtmdW5OYW1lXSgpO1xuXG4gICAgICAgIGlmIChwcm9wc1tlTmFtZV0gIT09IHN0YXRlKSB7XG4gICAgICAgICAgc2V0U3RhdGUocHJvcHNbZU5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtpbnN0YW5jZSwgcHJvcHNbZU5hbWVdXSk7XG4gIH0pO1xufVxuLyoqXG4gKiDpkojlr7kgT3ZlcmxheSDnsbvlnovnmoTnu4Tku7bvvIzmnInlhazlhbHnmoTmmK/lkKbmmL7npLog5a+56LGh5aSE55CGXG4gKiDpgJrov4flj4LmlbAgYHZpc2lhYmxlYCDmnaXmjqfliLbmiafooYwgYHNob3coKWAgb3IgYGhpZGUoKWBcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlVmlzaWFibGUoaW5zdGFuY2UpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIHZpc2lhYmxlID0gcHJvcHMudmlzaWFibGU7XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZSh2aXNpYWJsZSksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZTRbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5zdGFuY2UgJiYgdmlzaWFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coJ3Zpc2lhYmxlJywgdmlzaWFibGUpO1xuXG4gICAgICBpZiAodmlzaWFibGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Zpc2lhYmxlJywgaW5zdGFuY2UpO1xuICAgICAgICBpbnN0YW5jZS5zaG93ICYmIGluc3RhbmNlLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLmhpZGUgJiYgaW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmlzaWFibGUgIT09IHN0YXRlKSB7XG4gICAgICAgIHNldFN0YXRlKHZpc2lhYmxlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpbnN0YW5jZSwgdmlzaWFibGVdKTtcbn1cbi8qKlxuICog5om56YeP5Yib5bu65aSa5Liq5aaC5LiLIFN0YXRl77yM55uR5ZCs5bm26K6+572u5YC877yMXG4gKiDmiafooYwgYHNldGAg5byA5aS055qE5Ye95pWw44CCXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBwcm9wc1xuICogQHBhcmFtIHByb3BzTmFtZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9wZXJ0aWVzKGluc3RhbmNlLCBwcm9wcykge1xuICB2YXIgcHJvcHNOYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcbiAgcHJvcHNOYW1lLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZU5hbWUgPSBcIlwiLmNvbmNhdChuYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpKS5jb25jYXQobmFtZS5zbGljZSgxKSk7XG5cbiAgICB2YXIgX3VzZVN0YXRlNSA9IHVzZVN0YXRlKHByb3BzW2VOYW1lXSksXG4gICAgICAgIF91c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU1LCAyKSxcbiAgICAgICAgc3RhdGUgPSBfdXNlU3RhdGU2WzBdLFxuICAgICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZTZbMV07XG5cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlW1wic2V0XCIuY29uY2F0KG5hbWUpXSAmJiBwcm9wc1tlTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvKipcbiAgICAgICAgICog5Z2Q5qCH54K555qE5Y+C5pWw6K6+572u77yM5q+U5a+5LCDlnZDmoIfngrnnmoTlj4LmlbDorr7nva5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBkYXRhID0gcHJvcHNbZU5hbWVdO1xuXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubG5nICYmIGRhdGEubGF0KSB7XG4gICAgICAgICAgZGF0YSA9IG5ldyBCTWFwLlBvaW50KGRhdGEubG5nLCBkYXRhLmxhdCk7XG4gICAgICAgICAgdmFyIHByZURhdGEgPSBzdGF0ZTtcblxuICAgICAgICAgIGlmIChwcmVEYXRhICYmIHByZURhdGEubG5nICYmIHByZURhdGEubGF0KSB7XG4gICAgICAgICAgICBwcmVEYXRhID0gbmV3IEJNYXAuUG9pbnQocHJlRGF0YS5sbmcsIHByZURhdGEubGF0KTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuZXF1YWxzKHByZURhdGEpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbnN0YW5jZVtcInNldFwiLmNvbmNhdChuYW1lKV0oZGF0YSk7IC8vIOWxnuaAp+WPkeeUn+WPmOWMlue8k+WtmFxuXG4gICAgICAgIGlmIChzdGF0ZSAhPT0gcHJvcHNbZU5hbWVdKSB7XG4gICAgICAgICAgaWYgKGVOYW1lID09PSAnYm91bmRzJykge1xuICAgICAgICAgICAgaWYgKHN0YXRlICYmIHByb3BzW2VOYW1lXSAmJiAhc3RhdGUuZXF1YWxzKHByb3BzW2VOYW1lXSkpIHtcbiAgICAgICAgICAgICAgc2V0U3RhdGUocHJvcHNbZU5hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0U3RhdGUocHJvcHNbZU5hbWVdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbaW5zdGFuY2UsIHByb3BzW2VOYW1lXV0pO1xuICB9KTtcbn1cblxuLyoqXG4gKiDnu5Hlrprkuovku7ZcbiAqIEBwYXJhbSBpbnN0YW5jZSDlrp7kvovlr7nosaFcbiAqIEBwYXJhbSBwcm9wcyDkvKDpgJLov5vmnaXnmoQgcHJvcHNcbiAqIEBwYXJhbSBldmVudE5hbWUg5LqL5Lu255qE5ZCN5a2X77yM5aaC77yM5oiR5Lus5L2/55SoIGBvbkNsaWNrYCDkuovku7bvvIzmnIDnu4jooqvovazmjaLmiJDvvIxgY2xpY2tgIOe7keWumuWIsOWunuS+i+S4re+8jGBvbkRibENsaWNrYCA9PiBgZGJsY2xpY2tgXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiB1c2VFdmVudFByb3BlcnRpZXM8Qk1hcC5NYXJrZXIsIFVzZU1hcmtlcj4obWFya2VyISwgcHJvcHMsIFtcbiAqICAgJ0NsaWNrJywgJ0RibENsaWNrJywgJ01vdXNlRG93bicsICdNb3VzZVVwJywgJ01vdXNlT3V0JywgJ01vdXNlT3ZlcidcbiAqIF0pO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFdmVudFByb3BlcnRpZXMoaW5zdGFuY2UpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIGV2ZW50TmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogW107XG4gIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBhcmd1bWVudHNbM10gOiB1bmRlZmluZWQ7XG4gIGV2ZW50TmFtZS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGV2ZW50TmFtZSA9IFwib25cIi5jb25jYXQobmFtZSk7XG4gICAgdmFyIGV2ZW50SGFuZGxlID0gcHJvcHNbZXZlbnROYW1lXTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFpbnN0YW5jZSkgcmV0dXJuO1xuXG4gICAgICBpZiAoZXZlbnRIYW5kbGUgJiYgbmFtZSkge1xuICAgICAgICB2YXIgZU5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnQ2FtZWxDYXNlJykge1xuICAgICAgICAgIGVOYW1lID0gbmFtZS5yZXBsYWNlKG5hbWVbMF0sIG5hbWVbMF0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKGVOYW1lLCBldmVudEhhbmRsZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihlTmFtZSwgZXZlbnRIYW5kbGUpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIFtpbnN0YW5jZSwgcHJvcHNbZXZlbnROYW1lXV0pO1xuICB9KTtcbn1cbi8qKlxuICog6I635Y+W5LiK5LiA6L2u55qEIHByb3BzIOaIliBzdGF0ZVxuICogSG93IHRvIGdldCB0aGUgcHJldmlvdXMgcHJvcHMgb3Igc3RhdGU/XG4gKiBodHRwczovL3JlYWN0anMub3JnL2RvY3MvaG9va3MtZmFxLmh0bWwjaG93LXRvLWdldC10aGUtcHJldmlvdXMtcHJvcHMtb3Itc3RhdGVcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogZnVuY3Rpb24gQ291bnRlcigpIHtcbiAqICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAqICAgY29uc3QgcHJldkNvdW50ID0gdXNlUHJldmlvdXMoY291bnQpO1xuICogICByZXR1cm4gPGgxPk5vdzoge2NvdW50fSwgYmVmb3JlOiB7cHJldkNvdW50fTwvaDE+O1xuICogfVxuICogYGBgXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByZXZpb3VzKHZhbHVlKSB7XG4gIHZhciByZWYgPSB1c2VSZWYoKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWYuY3VycmVudCA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlZi5jdXJyZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OWpiMjF0YjI0dmFHOXZhM011ZEhONElsMHNJbTVoYldWeklqcGJJblZ6WlVWbVptVmpkQ0lzSW5WelpWTjBZWFJsSWl3aWRYTmxVbVZtSWl3aWRYTmxSVzVoWW14bFVISnZjR1Z5ZEdsbGN5SXNJbWx1YzNSaGJtTmxJaXdpY0hKdmNITWlMQ0p3Y205d2MwNWhiV1VpTENKbWIzSkZZV05vSWl3aWJtRnRaU0lzSW1WT1lXMWxJaXdpYzNSaGRHVWlMQ0p6WlhSVGRHRjBaU0lzSW1aMWJrNWhiV1VpTENKMWJtUmxabWx1WldRaUxDSjFjMlZXYVhOcFlXSnNaU0lzSW5acGMybGhZbXhsSWl3aVkyOXVjMjlzWlNJc0lteHZaeUlzSW5Ob2IzY2lMQ0pvYVdSbElpd2lkWE5sVUhKdmNHVnlkR2xsY3lJc0ltTm9ZWEpCZENJc0luUnZURzkzWlhKRFlYTmxJaXdpYzJ4cFkyVWlMQ0prWVhSaElpd2liRzVuSWl3aWJHRjBJaXdpUWsxaGNDSXNJbEJ2YVc1MElpd2ljSEpsUkdGMFlTSXNJbVZ4ZFdGc2N5SXNJblZ6WlVWMlpXNTBVSEp2Y0dWeWRHbGxjeUlzSW1WMlpXNTBUbUZ0WlNJc0luUjVjR1VpTENKbGRtVnVkRWhoYm1Sc1pTSXNJbkpsY0d4aFkyVWlMQ0poWkdSRmRtVnVkRXhwYzNSbGJtVnlJaXdpY21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lJc0luVnpaVkJ5WlhacGIzVnpJaXdpZG1Gc2RXVWlMQ0p5WldZaUxDSmpkWEp5Wlc1MElsMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNVMEZCWjBKQkxGTkJRV2hDTEVWQlFUSkNReXhSUVVFelFpeEZRVUZ4UTBNc1RVRkJja01zVVVGQmJVUXNUMEZCYmtRN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hQUVVGUExGTkJRVk5ETEcxQ1FVRlVMRU5CUVRaRFF5eFJRVUUzUXl4RlFVRnhSenRCUVVGQkxFMUJRVE5EUXl4TFFVRXlReXgxUlVGQmJrTXNSVUZCYlVNN1FVRkJRU3hOUVVFeFFrTXNVMEZCTUVJc2RVVkJRVW9zUlVGQlNUdEJRVU14UjBFc1JVRkJRVUVzVTBGQlV5eERRVUZEUXl4UFFVRldMRU5CUVd0Q0xGVkJRVU5ETEVsQlFVUXNSVUZCVlR0QlFVTXhRaXhSUVVGTlF5eExRVUZMTEcxQ1FVRlpSQ3hKUVVGYUxFTkJRVmc3TzBGQlEwRXNiMEpCUVRCQ1VDeFJRVUZSTEVOQlFVTkpMRXRCUVVzc1EwRkJRMGtzUzBGQlJDeERRVUZPTEVOQlFXeERPMEZCUVVFN1FVRkJRU3hSUVVGUFF5eExRVUZRTzBGQlFVRXNVVUZCWTBNc1VVRkJaRHM3UVVGRFFWZ3NTVUZCUVVFc1UwRkJVeXhEUVVGRExGbEJRVTA3UVVGRFpDeFZRVUZOV1N4UFFVRlBMRWRCUVVsUUxFdEJRVXNzUTBGQlEwa3NTMEZCUkN4RFFVRk1MRzFDUVVGM1FrUXNTVUZCZUVJc2NVSkJRVEpEUVN4SlFVRXpReXhEUVVGcVFqczdRVUZEUVN4VlFVRkpTaXhSUVVGUkxFbEJRVWxETEV0QlFVc3NRMEZCUTBrc1MwRkJSQ3hEUVVGTUxFdEJRV2xDU1N4VFFVRnFReXhGUVVFMFF6dEJRVU14UTFRc1VVRkJRVUVzVVVGQlVTeERRVUZEVVN4UFFVRkVMRU5CUVZJc1NVRkJjMEpTTEZGQlFWRXNRMEZCUTFFc1QwRkJSQ3hEUVVGVUxFVkJRWEpDT3p0QlFVTkJMRmxCUVVsUUxFdEJRVXNzUTBGQlEwa3NTMEZCUkN4RFFVRk1MRXRCUVdsQ1F5eExRVUZ5UWl4RlFVRTBRanRCUVVNeFFrTXNWVUZCUVVFc1VVRkJVU3hEUVVGRFRpeExRVUZMTEVOQlFVTkpMRXRCUVVRc1EwRkJUaXhEUVVGU08wRkJRMFE3UVVGRFJqdEJRVU5HTEV0QlVsRXNSVUZSVGl4RFFVRkRUQ3hSUVVGRUxFVkJRVmRETEV0QlFVc3NRMEZCUTBrc1MwRkJSQ3hEUVVGb1FpeERRVkpOTEVOQlFWUTdRVUZUUkN4SFFWcEVPMEZCWVVRN1FVRkZSRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZEUVN4UFFVRlBMRk5CUVZOTExGZEJRVlFzUTBGQkswVldMRkZCUVM5RkxFVkJRVFpITzBGQlFVRXNUVUZCYWtKRExFdEJRV2xDTEhWRlFVRlVMRVZCUVZNN1FVRkRiRWdzVFVGQlRWVXNVVUZCVVN4SFFVRkpWaXhMUVVGRUxFTkJRV1ZWTEZGQlFXaERPenRCUVVOQkxHMUNRVUV3UW1Rc1VVRkJVU3hEUVVGRFl5eFJRVUZFTEVOQlFXeERPMEZCUVVFN1FVRkJRU3hOUVVGUFRDeExRVUZRTzBGQlFVRXNUVUZCWTBNc1VVRkJaRHM3UVVGRFFWZ3NSVUZCUVVFc1UwRkJVeXhEUVVGRExGbEJRVTA3UVVGRFpDeFJRVUZKU1N4UlFVRlJMRWxCUVVsWExGRkJRVkVzUzBGQlMwWXNVMEZCTjBJc1JVRkJkME03UVVGRGRFTkhMRTFCUVVGQkxFOUJRVThzUTBGQlEwTXNSMEZCVWl4RFFVRlpMRlZCUVZvc1JVRkJkMEpHTEZGQlFYaENPenRCUVVOQkxGVkJRVWxCTEZGQlFVb3NSVUZCWXp0QlFVTmFReXhSUVVGQlFTeFBRVUZQTEVOQlFVTkRMRWRCUVZJc1EwRkJXU3hWUVVGYUxFVkJRWGRDWWl4UlFVRjRRanRCUVVOQlFTeFJRVUZCUVN4UlFVRlJMRU5CUVVOakxFbEJRVlFzU1VGQmFVSmtMRkZCUVZFc1EwRkJRMk1zU1VGQlZDeEZRVUZxUWp0QlFVTkVMRTlCU0VRc1RVRkhUenRCUVVOTVpDeFJRVUZCUVN4UlFVRlJMRU5CUVVObExFbEJRVlFzU1VGQmFVSm1MRkZCUVZFc1EwRkJRMlVzU1VGQlZDeEZRVUZxUWp0QlFVTkVPenRCUVVORUxGVkJRVWxLTEZGQlFWRXNTMEZCUzB3c1MwRkJha0lzUlVGQmQwSTdRVUZEZEVKRExGRkJRVUZCTEZGQlFWRXNRMEZCUTBrc1VVRkJSQ3hEUVVGU08wRkJRMFE3UVVGRFJqdEJRVU5HTEVkQllsRXNSVUZoVGl4RFFVRkRXQ3hSUVVGRUxFVkJRVmRYTEZGQlFWZ3NRMEZpVFN4RFFVRlVPMEZCWTBRN1FVRkZSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hQUVVGUExGTkJRVk5MTEdGQlFWUXNRMEZCTmtKb1FpeFJRVUUzUWl4RlFVRXdRME1zUzBGQk1VTXNSVUZCT0VVN1FVRkJRU3hOUVVFeFFrTXNVMEZCTUVJc2RVVkJRVW9zUlVGQlNUdEJRVU51UmtFc1JVRkJRVUVzVTBGQlV5eERRVUZEUXl4UFFVRldMRU5CUVd0Q0xGVkJRVU5ETEVsQlFVUXNSVUZCVlR0QlFVTXhRaXhSUVVGTlF5eExRVUZMTEdGQlFVMUVMRWxCUVVrc1EwRkJRMkVzVFVGQlRDeERRVUZaTEVOQlFWb3NSVUZCWlVNc1YwRkJaaXhGUVVGT0xGTkJRWEZEWkN4SlFVRkpMRU5CUVVObExFdEJRVXdzUTBGQlZ5eERRVUZZTEVOQlFYSkRMRU5CUVZnN08wRkJRMEVzY1VKQlFUQkNkRUlzVVVGQlVTeERRVUZEU1N4TFFVRkxMRU5CUVVOSkxFdEJRVVFzUTBGQlRpeERRVUZzUXp0QlFVRkJPMEZCUVVFc1VVRkJUME1zUzBGQlVEdEJRVUZCTEZGQlFXTkRMRkZCUVdRN08wRkJRMEZZTEVsQlFVRkJMRk5CUVZNc1EwRkJReXhaUVVGTk8wRkJRMlFzVlVGQlNVa3NVVUZCVVN4SlFVRkpRU3hSUVVGUkxHTkJRVTlKTEVsQlFWQXNSVUZCY0VJc1NVRkJhVVJJTEV0QlFVc3NRMEZCUTBrc1MwRkJSQ3hEUVVGTUxFdEJRV2xDU1N4VFFVRjBSU3hGUVVGcFJqdEJRVU12UlR0QlFVTlNPMEZCUTBFN1FVRkRVU3haUVVGSlZ5eEpRVUZUTEVkQlFVZHVRaXhMUVVGTExFTkJRVU5KTEV0QlFVUXNRMEZCY2tJN08wRkJRMEVzV1VGQlNXVXNTVUZCU1N4SlFVRkpRU3hKUVVGSkxFTkJRVU5ETEVkQlFXSXNTVUZCYjBKRUxFbEJRVWtzUTBGQlEwVXNSMEZCTjBJc1JVRkJhME03UVVGRGFFTkdMRlZCUVVGQkxFbEJRVWtzUjBGQlJ5eEpRVUZKUnl4SlFVRkpMRU5CUVVORExFdEJRVlFzUTBGQlpVb3NTVUZCU1N4RFFVRkRReXhIUVVGd1FpeEZRVUY1UWtRc1NVRkJTU3hEUVVGRFJTeEhRVUU1UWl4RFFVRlFPMEZCUTBFc1kwRkJTVWNzVDBGQldTeEhRVUZIYmtJc1MwRkJia0k3TzBGQlEwRXNZMEZCU1cxQ0xFOUJRVThzU1VGQlNVRXNUMEZCVHl4RFFVRkRTaXhIUVVGdVFpeEpRVUV3UWtrc1QwRkJUeXhEUVVGRFNDeEhRVUYwUXl4RlFVRXlRenRCUVVONlEwY3NXVUZCUVVFc1QwRkJUeXhIUVVGSExFbEJRVWxHTEVsQlFVa3NRMEZCUTBNc1MwRkJWQ3hEUVVGbFF5eFBRVUZQTEVOQlFVTktMRWRCUVhaQ0xFVkJRVFJDU1N4UFFVRlBMRU5CUVVOSUxFZEJRWEJETEVOQlFWWTdPMEZCUTBFc1owSkJRVWxHTEVsQlFVa3NRMEZCUTAwc1RVRkJUQ3hEUVVGWlJDeFBRVUZhTEVOQlFVb3NSVUZCTUVJN1FVRkRlRUk3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVGNlFpeFJRVUZCUVN4UlFVRlJMR05CUVU5SkxFbEJRVkFzUlVGQlZDeERRVUV5UTJkQ0xFbEJRVE5ETEVWQmFFSXJSU3hEUVdsQ0wwVTdPMEZCUTBFc1dVRkJTV1FzUzBGQlN5eExRVUZMVEN4TFFVRkxMRU5CUVVOSkxFdEJRVVFzUTBGQmJrSXNSVUZCTkVJN1FVRkRNVUlzWTBGQlNVRXNTMEZCU3l4TFFVRkxMRkZCUVdRc1JVRkJkMEk3UVVGRGRFSXNaMEpCUVVsRExFdEJRVXNzU1VGQlNVd3NTMEZCU3l4RFFVRkRTU3hMUVVGRUxFTkJRV1FzU1VGQmVVSXNRMEZCUlVNc1MwRkJSQ3hEUVVGbGIwSXNUVUZCWml4RFFVRnpRbnBDTEV0QlFVc3NRMEZCUTBrc1MwRkJSQ3hEUVVFelFpeERRVUU1UWl4RlFVRnRSVHRCUVVOcVJVVXNZMEZCUVVFc1VVRkJVU3hEUVVGRFRpeExRVUZMTEVOQlFVTkpMRXRCUVVRc1EwRkJUaXhEUVVGU08wRkJRMFE3UVVGRFJpeFhRVXBFTEUxQlNVODdRVUZEVEVVc1dVRkJRVUVzVVVGQlVTeERRVUZEVGl4TFFVRkxMRU5CUVVOSkxFdEJRVVFzUTBGQlRpeERRVUZTTzBGQlEwUTdRVUZEUmp0QlFVTkdPMEZCUTBZc1MwRTNRbEVzUlVFMlFrNHNRMEZCUTB3c1VVRkJSQ3hGUVVGWFF5eExRVUZMTEVOQlFVTkpMRXRCUVVRc1EwRkJhRUlzUTBFM1FrMHNRMEZCVkR0QlFUaENSQ3hIUVdwRFJEdEJRV3REUkRzN1FVRnRRa1E3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBMRk5CUVZOelFpeHJRa0ZCVkN4RFFVTk1NMElzVVVGRVN5eEZRVXRNTzBGQlFVRXNUVUZJUVVNc1MwRkhRU3gxUlVGSVVTeEZRVWRTTzBGQlFVRXNUVUZHUVRKQ0xGTkJSVUVzZFVWQlJuTkNMRVZCUlhSQ08wRkJRVUVzVFVGRVFVTXNTVUZEUVR0QlFVTkJSQ3hGUVVGQlFTeFRRVUZUTEVOQlFVTjZRaXhQUVVGV0xFTkJRV3RDTEZWQlFVTkRMRWxCUVVRc1JVRkJWVHRCUVVNeFFpeFJRVUZOZDBJc1UwRkJVeXhsUVVGUmVFSXNTVUZCVWl4RFFVRm1PMEZCUTBFc1VVRkJUVEJDTEZkQlFWY3NSMEZCUnpkQ0xFdEJRVXNzUTBGQlF6SkNMRk5CUVVRc1EwRkJla0k3UVVGRFFXaERMRWxCUVVGQkxGTkJRVk1zUTBGQlF5eFpRVUZOTzBGQlEyUXNWVUZCU1N4RFFVRkRTU3hSUVVGTUxFVkJRV1U3TzBGQlEyWXNWVUZCU1RoQ0xGZEJRVmNzU1VGQlNURkNMRWxCUVc1Q0xFVkJRWGxDTzBGQlEzWkNMRmxCUVVsRExFdEJRVXNzUjBGQlIwUXNTVUZCV2pzN1FVRkRRU3haUVVGSmVVSXNTVUZCU1N4TFFVRkxMRmRCUVdJc1JVRkJNRUk3UVVGRGVFSjRRaXhWUVVGQlFTeExRVUZMTEVkQlFVZEVMRWxCUVVrc1EwRkJRekpDTEU5QlFVd3NRMEZCWVROQ0xFbEJRVWtzUTBGQlF5eERRVUZFTEVOQlFXcENMRVZCUVhOQ1FTeEpRVUZKTEVOQlFVTXNRMEZCUkN4RFFVRktMRU5CUVZGakxGZEJRVklzUlVGQmRFSXNRMEZCVWp0QlFVTkVMRk5CUmtRc1RVRkZUenRCUVVOTVlpeFZRVUZCUVN4TFFVRkxMRWRCUVVkRUxFbEJRVWtzUTBGQlEyTXNWMEZCVEN4RlFVRlNPMEZCUTBRN08wRkJRMFJzUWl4UlFVRkJRU3hSUVVGUkxFTkJRVU5uUXl4blFrRkJWQ3hEUVVFd1FqTkNMRXRCUVRGQ0xFVkJRV2xEZVVJc1YwRkJha003UVVGRFFTeGxRVUZQTEZsQlFVMDdRVUZEV0RsQ0xGVkJRVUZCTEZGQlFWRXNRMEZCUTJsRExHMUNRVUZVTEVOQlFUWkNOVUlzUzBGQk4wSXNSVUZCYjBONVFpeFhRVUZ3UXp0QlFVTkVMRk5CUmtRN1FVRkhSRHRCUVVOR0xFdEJaRkVzUlVGalRpeERRVUZET1VJc1VVRkJSQ3hGUVVGWFF5eExRVUZMTEVOQlFVTXlRaXhUUVVGRUxFTkJRV2hDTEVOQlpFMHNRMEZCVkR0QlFXVkVMRWRCYkVKRU8wRkJiVUpFTzBGQlJVUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJRMEVzVDBGQlR5eFRRVUZUVFN4WFFVRlVMRU5CUVhkQ1F5eExRVUY0UWl4RlFVRnJRenRCUVVOMlF5eE5RVUZOUXl4SFFVRkhMRWRCUVVkMFF5eE5RVUZOTEVWQlFXeENPMEZCUTBGR0xFVkJRVUZCTEZOQlFWTXNRMEZCUXl4WlFVRk5PMEZCUTJSM1F5eEpRVUZCUVN4SFFVRkhMRU5CUVVORExFOUJRVW9zUjBGQlkwWXNTMEZCWkR0QlFVTkVMRWRCUmxFc1EwRkJWRHRCUVVkQkxGTkJRVTlETEVkQlFVY3NRMEZCUTBNc1QwRkJXRHRCUVVORUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxZV04wTENCN0lIVnpaVVZtWm1WamRDd2dkWE5sVTNSaGRHVXNJSFZ6WlZKbFppQjlJR1p5YjIwZ0ozSmxZV04wSnp0Y2JseHVMeW9xWEc0Z0tpRG1pYm5waDQvbGlKdmx1N3JscEpya3VLcmxwb0xrdUlzZ1UzUmhkR1h2dkl6bm01SGxrS3psdWJib3JyN252YTdsZ0x6dnZJeGNiaUFxSU9lN2hPUzd0dVd4bnVhQXArYWJ0T2FVdVNBOFEyOXRjRzl1WlhRZ1pXNWhZbXhsUkhKaFoyZHBibWM5ZTNSeWRXVjlJRDVjYmlBcUlPYWd1ZWFOcmlCbGJtRmliR1ZFY21GbloybHVaeURubW9RZ1FtOXZiR1ZoYmlEbGdMenZ2SXptaWFmb29Zd2dZR1Z1WVdKc1pXQWc1WktNSUdCa2FYTmhZbXhsWUNEbHZJRGxwTFRubW9UbGg3M21sYkRqZ0lKY2JpQXFJRUJsZUdGdGNHeGxYRzRnS2lCZ1lHQnFjMXh1SUNvZ1kyOXVjM1FnVzJWdVlXSnNaVVJ5WVdkbmFXNW5MQ0J6WlhSRmJtRmliR1ZFY21GbloybHVaMTBnUFNCMWMyVlRkR0YwWlNod2NtOXdjeTVsYm1GaWJHVkVjbUZuWjJsdVp5azdYRzRnS2lCMWMyVkZabVpsWTNRb0tDa2dQVDRnZTF4dUlDb2dJQ0JqYjI1emIyeGxMbXh2WnlnbmZuNDZaVzVoWW14bFJISmhaMmRwYm1jbkxDQmxibUZpYkdWRWNtRm5aMmx1Wnl3Z2NISnZjSE11Wlc1aFlteGxSSEpoWjJkcGJtY3NJSEJ2Ykhsc2FXNWxLVHRjYmlBcUlDQWdjMlYwUlc1aFlteGxSSEpoWjJkcGJtY29jSEp2Y0hNdVpXNWhZbXhsUkhKaFoyZHBibWNwWEc0Z0tpQjlMQ0JiY0c5c2VXeHBibVVzSUdWdVlXSnNaVVJ5WVdkbmFXNW5MQ0J3Y205d2N5NWxibUZpYkdWRWNtRm5aMmx1WjEwcE8xeHVJQ29nWUdCZ1hHNGdLaUJBY0dGeVlXMGdhVzV6ZEdGdVkyVmNiaUFxSUVCd1lYSmhiU0J3Y205d2MxeHVJQ29nUUhCaGNtRnRJSEJ5YjNCelRtRnRaVnh1SUNvdlhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z2RYTmxSVzVoWW14bFVISnZjR1Z5ZEdsbGN6eFVJRDBnZTMwc0lFWWdQU0I3ZlQ0b2FXNXpkR0Z1WTJVNklGUXNJSEJ5YjNCeklEMGdlMzBnWVhNZ1Jpd2djSEp2Y0hOT1lXMWxPaUJ6ZEhKcGJtZGJYU0E5SUZ0ZEtTQjdYRzRnSUhCeWIzQnpUbUZ0WlM1bWIzSkZZV05vS0NodVlXMWxLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdaVTVoYldVZ1BTQmdaVzVoWW14bEpIdHVZVzFsZldBZ1lYTWdhMlY1YjJZZ1JqdGNiaUFnSUNCamIyNXpkQ0JiYzNSaGRHVXNJSE5sZEZOMFlYUmxYU0E5SUhWelpWTjBZWFJsS0hCeWIzQnpXMlZPWVcxbFhTazdYRzRnSUNBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR1oxYms1aGJXVWdQU0FvY0hKdmNITmJaVTVoYldWZElEOGdZR1Z1WVdKc1pTUjdibUZ0WlgxZ0lEb2dZR1JwYzJGaWJHVWtlMjVoYldWOVlDa2dZWE1nYTJWNWIyWWdWRHRjYmlBZ0lDQWdJR2xtSUNocGJuTjBZVzVqWlNBbUppQndjbTl3YzF0bFRtRnRaVjBnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0JwYm5OMFlXNWpaVnRtZFc1T1lXMWxYU0FtSmlBb2FXNXpkR0Z1WTJWYlpuVnVUbUZ0WlYwZ1lYTWdZVzU1S1NncE8xeHVJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITmJaVTVoYldWZElDRTlQU0J6ZEdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhObGRGTjBZWFJsS0hCeWIzQnpXMlZPWVcxbFhTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMQ0JiYVc1emRHRnVZMlVzSUhCeWIzQnpXMlZPWVcxbFhWMHBPMXh1SUNCOUtUdGNibjFjYmx4dUx5b3FYRzRnS2lEcGtvamxyN2tnVDNabGNteGhlU0Ruc2J2bG5vdm5tb1RudTRUa3U3YnZ2SXptbklubGhhemxoYkhubW9UbW1LL2xrS2JtbUw3bnBMb2c1YSs1NkxHaDVhU0U1NUNHWEc0Z0tpRHBnSnJvdjRmbGo0TG1sYkFnWUhacGMybGhZbXhsWUNEbW5hWG1qcWZsaUxibWlhZm9vWXdnWUhOb2IzY29LV0FnYjNJZ1lHaHBaR1VvS1dCY2JpQXFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSFZ6WlZacGMybGhZbXhsUEZRZ1pYaDBaVzVrY3lCQ1RXRndMazkyWlhKc1lYa3NJRVlnWlhoMFpXNWtjeUI3SUhacGMybGhZbXhsUHpvZ1ltOXZiR1ZoYmlCOVBpaHBibk4wWVc1alpUb2dWQ3dnY0hKdmNITWdQU0I3ZlNCaGN5QkdLU0I3WEc0Z0lHTnZibk4wSUhacGMybGhZbXhsSUQwZ0tIQnliM0J6SUdGeklHRnVlU2t1ZG1semFXRmliR1U3WEc0Z0lHTnZibk4wSUZ0emRHRjBaU3dnYzJWMFUzUmhkR1ZkSUQwZ2RYTmxVM1JoZEdVb2RtbHphV0ZpYkdVcE8xeHVJQ0IxYzJWRlptWmxZM1FvS0NrZ1BUNGdlMXh1SUNBZ0lHbG1JQ2hwYm5OMFlXNWpaU0FtSmlCMmFYTnBZV0pzWlNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlnbmRtbHphV0ZpYkdVbkxDQjJhWE5wWVdKc1pTazdYRzRnSUNBZ0lDQnBaaUFvZG1semFXRmliR1VwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29KM1pwYzJsaFlteGxKeXdnYVc1emRHRnVZMlVwTzF4dUlDQWdJQ0FnSUNCcGJuTjBZVzVqWlM1emFHOTNJQ1ltSUdsdWMzUmhibU5sTG5Ob2IzY29LVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR2x1YzNSaGJtTmxMbWhwWkdVZ0ppWWdhVzV6ZEdGdVkyVXVhR2xrWlNncE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2FXWWdLSFpwYzJsaFlteGxJQ0U5UFNCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCelpYUlRkR0YwWlNoMmFYTnBZV0pzWlNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlMQ0JiYVc1emRHRnVZMlVzSUhacGMybGhZbXhsWFNrN1hHNTlYRzVjYmk4cUtseHVJQ29nNW9tNTZZZVA1WWliNWJ1NjVhU2E1TGlxNWFhQzVMaUxJRk4wWVhSbDc3eU01NXVSNVpDczVibTI2SzYrNTcydTVZQzg3N3lNWEc0Z0tpRG1pYWZvb1l3Z1lITmxkR0FnNWJ5QTVhUzA1NXFFNVllOTVwV3c0NENDWEc0Z0tpQkFjR0Z5WVcwZ2FXNXpkR0Z1WTJWY2JpQXFJRUJ3WVhKaGJTQndjbTl3YzF4dUlDb2dRSEJoY21GdElIQnliM0J6VG1GdFpWeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZFhObFVISnZjR1Z5ZEdsbGN6eFVMQ0JHUGlocGJuTjBZVzVqWlRvZ1ZDd2djSEp2Y0hNNklFWXNJSEJ5YjNCelRtRnRaVG9nYzNSeWFXNW5XMTBnUFNCYlhTa2dlMXh1SUNCd2NtOXdjMDVoYldVdVptOXlSV0ZqYUNnb2JtRnRaU2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR1ZPWVcxbElEMGdZQ1I3Ym1GdFpTNWphR0Z5UVhRb01Da3VkRzlNYjNkbGNrTmhjMlVvS1gwa2UyNWhiV1V1YzJ4cFkyVW9NU2w5WUNCaGN5QnJaWGx2WmlCR08xeHVJQ0FnSUdOdmJuTjBJRnR6ZEdGMFpTd2djMlYwVTNSaGRHVmRJRDBnZFhObFUzUmhkR1VvY0hKdmNITmJaVTVoYldWZEtUdGNiaUFnSUNCMWMyVkZabVpsWTNRb0tDa2dQVDRnZTF4dUlDQWdJQ0FnYVdZZ0tHbHVjM1JoYm1ObElDWW1JR2x1YzNSaGJtTmxXMkJ6WlhRa2UyNWhiV1Y5WUNCaGN5QnJaWGx2WmlCVVhTQW1KaUJ3Y205d2MxdGxUbUZ0WlYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBdktpcGNiaUFnSUNBZ0lDQWdJQ29nNVoyUTVxQ0g1NEs1NTVxRTVZK0M1cFd3Nks2KzU3MnU3N3lNNXErVTVhKzVMQ0RsblpEbW9JZm5ncm5ubW9UbGo0TG1sYkRvcnI3bnZhNWNiaUFnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUd4bGRDQmtZWFJoT2lCaGJua2dQU0J3Y205d2MxdGxUbUZ0WlYwN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hrWVhSaElDWW1JR1JoZEdFdWJHNW5JQ1ltSUdSaGRHRXViR0YwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdaR0YwWVNBOUlHNWxkeUJDVFdGd0xsQnZhVzUwS0dSaGRHRXViRzVuTENCa1lYUmhMbXhoZENrN1hHNGdJQ0FnSUNBZ0lDQWdiR1YwSUhCeVpVUmhkR0U2SUdGdWVTQTlJSE4wWVhSbE8xeHVJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtVkVZWFJoSUNZbUlIQnlaVVJoZEdFdWJHNW5JQ1ltSUhCeVpVUmhkR0V1YkdGMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtVkVZWFJoSUQwZ2JtVjNJRUpOWVhBdVVHOXBiblFvY0hKbFJHRjBZUzVzYm1jc0lIQnlaVVJoZEdFdWJHRjBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hrWVhSaExtVnhkV0ZzY3lod2NtVkVZWFJoS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdLR2x1YzNSaGJtTmxXMkJ6WlhRa2UyNWhiV1Y5WUNCaGN5QnJaWGx2WmlCVVhTQmhjeUJoYm5rcEtHUmhkR0VwTzF4dUlDQWdJQ0FnSUNBdkx5RGxzWjdtZ0tmbGo1SG5sSi9sajVqbGpKYm52SlBsclpoY2JpQWdJQ0FnSUNBZ2FXWWdLSE4wWVhSbElDRTlQU0J3Y205d2MxdGxUbUZ0WlYwcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb1pVNWhiV1VnUFQwOUlDZGliM1Z1WkhNbktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jM1JoZEdVZ0ppWWdjSEp2Y0hOYlpVNWhiV1ZkSUNZbUlDRW9jM1JoZEdVZ1lYTWdZVzU1S1M1bGNYVmhiSE1vY0hKdmNITmJaVTVoYldWZEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnpaWFJUZEdGMFpTaHdjbTl3YzF0bFRtRnRaVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpaWFJUZEdGMFpTaHdjbTl3YzF0bFRtRnRaVjBwTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNJRnRwYm5OMFlXNWpaU3dnY0hKdmNITmJaVTVoYldWZFhTazdYRzRnSUgwcE8xeHVmVnh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUVWMlpXNTBUR2x6ZEdWdVpYSWdlMXh1SUNBdktpcGNiaUFnSUNvZzVyZTc1WXFnNUxxTDVMdTI1NXVSNVpDczVZZTk1cFd3WEc0Z0lDQXFJRUJ3WVhKaGJTQmxkbVZ1ZEZ4dUlDQWdLaUJBY0dGeVlXMGdhR0Z1Wkd4bGNseHVJQ0FnS2k5Y2JpQWdZV1JrUlhabGJuUk1hWE4wWlc1bGNpaGxkbVZ1ZERvZ2MzUnlhVzVuTENCb1lXNWtiR1Z5T2lCaGJua3BPaUIyYjJsa08xeHVJQ0F2S2lwY2JpQWdJQ29nNTZlNzZabWs1THFMNUx1MjU1dVI1WkNzNVllOTVwV3dYRzRnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh1SUNBZ0tpQkFjR0Z5WVcwZ2FHRnVaR3hsY2x4dUlDQWdLaTljYmlBZ2NtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaGxkbVZ1ZERvZ2MzUnlhVzVuTENCb1lXNWtiR1Z5T2lCaGJua3BPaUIyYjJsa08xeHVmVnh1WEc1bGVIQnZjblFnZEhsd1pTQkZkbVZ1ZEU1aGJXVlVlWEJsSUQwZ0owTmhiV1ZzUTJGelpTY2dmQ0FuVUdGelkyRnNRMkZ6WlNjZ2ZDQW5URzkzWlhKRFlYTmxKenRjYmx4dUx5b3FYRzRnS2lEbnU1SGxycHJrdW92a3U3WmNiaUFxSUVCd1lYSmhiU0JwYm5OMFlXNWpaU0RscnA3a3ZvdmxyN25vc2FGY2JpQXFJRUJ3WVhKaGJTQndjbTl3Y3lEa3ZLRHBnSkxvdjV2bW5hWG5tb1FnY0hKdmNITmNiaUFxSUVCd1lYSmhiU0JsZG1WdWRFNWhiV1VnNUxxTDVMdTI1NXFFNVpDTjVhMlg3N3lNNWFhQzc3eU01b2lSNUx1czVMMi81NVNvSUdCdmJrTnNhV05yWUNEa3Vvdmt1N2J2dkl6bW5JRG51NGpvb3F2b3Zhem1qYUxtaUpEdnZJeGdZMnhwWTJ0Z0lPZTdrZVd1bXVXSXNPV3VudVMraStTNHJlKzhqR0J2YmtSaWJFTnNhV05yWUNBOVBpQmdaR0pzWTJ4cFkydGdYRzRnS2x4dUlDb2dRR1Y0WVcxd2JHVmNiaUFxSUdCZ1lHcHpYRzRnS2lCMWMyVkZkbVZ1ZEZCeWIzQmxjblJwWlhNOFFrMWhjQzVOWVhKclpYSXNJRlZ6WlUxaGNtdGxjajRvYldGeWEyVnlJU3dnY0hKdmNITXNJRnRjYmlBcUlDQWdKME5zYVdOckp5d2dKMFJpYkVOc2FXTnJKeXdnSjAxdmRYTmxSRzkzYmljc0lDZE5iM1Z6WlZWd0p5d2dKMDF2ZFhObFQzVjBKeXdnSjAxdmRYTmxUM1psY2lkY2JpQXFJRjBwTzF4dUlDb2dZR0JnWEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQjFjMlZGZG1WdWRGQnliM0JsY25ScFpYTThWQ0JsZUhSbGJtUnpJRVYyWlc1MFRHbHpkR1Z1WlhJc0lFWStLRnh1SUNCcGJuTjBZVzVqWlRvZ1ZDeGNiaUFnY0hKdmNITWdQU0I3ZlNCaGN5QkdMRnh1SUNCbGRtVnVkRTVoYldVNklITjBjbWx1WjF0ZElEMGdXMTBzWEc0Z0lIUjVjR1UvT2lCRmRtVnVkRTVoYldWVWVYQmxMRnh1S1NCN1hHNGdJR1YyWlc1MFRtRnRaUzVtYjNKRllXTm9LQ2h1WVcxbEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1pYWmxiblJPWVcxbElEMGdZRzl1Skh0dVlXMWxmV0FnWVhNZ2EyVjViMllnUmp0Y2JpQWdJQ0JqYjI1emRDQmxkbVZ1ZEVoaGJtUnNaU0E5SUhCeWIzQnpXMlYyWlc1MFRtRnRaVjA3WEc0Z0lDQWdkWE5sUldabVpXTjBLQ2dwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2doYVc1emRHRnVZMlVwSUhKbGRIVnlianRjYmlBZ0lDQWdJR2xtSUNobGRtVnVkRWhoYm1Sc1pTQW1KaUJ1WVcxbEtTQjdYRzRnSUNBZ0lDQWdJR3hsZENCbFRtRnRaU0E5SUc1aGJXVTdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxJRDA5UFNBblEyRnRaV3hEWVhObEp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUdWT1lXMWxJRDBnYm1GdFpTNXlaWEJzWVdObEtHNWhiV1ZiTUYwc0lHNWhiV1ZiTUYwdWRHOU1iM2RsY2tOaGMyVW9LU2s3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ1pVNWhiV1VnUFNCdVlXMWxMblJ2VEc5M1pYSkRZWE5sS0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhVzV6ZEdGdVkyVXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaGxUbUZ0WlN3Z1pYWmxiblJJWVc1a2JHVXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJR2x1YzNSaGJtTmxMbkpsYlc5MlpVVjJaVzUwVEdsemRHVnVaWElvWlU1aGJXVXNJR1YyWlc1MFNHRnVaR3hsS1R0Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxDQmJhVzV6ZEdGdVkyVXNJSEJ5YjNCelcyVjJaVzUwVG1GdFpWMWRLVHRjYmlBZ2ZTazdYRzU5WEc1Y2JpOHFLbHh1SUNvZzZJNjM1WStXNUxpSzVMaUE2TDJ1NTVxRUlIQnliM0J6SU9hSWxpQnpkR0YwWlZ4dUlDb2dTRzkzSUhSdklHZGxkQ0IwYUdVZ2NISmxkbWx2ZFhNZ2NISnZjSE1nYjNJZ2MzUmhkR1UvWEc0Z0tpQm9kSFJ3Y3pvdkwzSmxZV04wYW5NdWIzSm5MMlJ2WTNNdmFHOXZhM010Wm1GeExtaDBiV3dqYUc5M0xYUnZMV2RsZEMxMGFHVXRjSEpsZG1sdmRYTXRjSEp2Y0hNdGIzSXRjM1JoZEdWY2JpQXFJRUJsZUdGdGNHeGxYRzRnS2lCZ1lHQnFjMXh1SUNvZ1puVnVZM1JwYjI0Z1EyOTFiblJsY2lncElIdGNiaUFxSUNBZ1kyOXVjM1FnVzJOdmRXNTBMQ0J6WlhSRGIzVnVkRjBnUFNCMWMyVlRkR0YwWlNnd0tUdGNiaUFxSUNBZ1kyOXVjM1FnY0hKbGRrTnZkVzUwSUQwZ2RYTmxVSEpsZG1sdmRYTW9ZMjkxYm5RcE8xeHVJQ29nSUNCeVpYUjFjbTRnUEdneFBrNXZkem9nZTJOdmRXNTBmU3dnWW1WbWIzSmxPaUI3Y0hKbGRrTnZkVzUwZlR3dmFERStPMXh1SUNvZ2ZWeHVJQ29nWUdCZ1hHNGdLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUIxYzJWUWNtVjJhVzkxY3p4VVBpaDJZV3gxWlRvZ1ZDa2dlMXh1SUNCamIyNXpkQ0J5WldZZ1BTQjFjMlZTWldZOFZENG9LVHRjYmlBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0J5WldZdVkzVnljbVZ1ZENBOUlIWmhiSFZsTzF4dUlDQjlLVHRjYmlBZ2NtVjBkWEp1SUhKbFppNWpkWEp5Wlc1ME8xeHVmVnh1SWwxOSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFbmFibGVQcm9wZXJ0aWVzLCB1c2VQcm9wZXJ0aWVzLCB1c2VFdmVudFByb3BlcnRpZXMgfSBmcm9tICcuLi9jb21tb24vaG9va3MnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTWFwKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgd2lkZ2V0ID0gcHJvcHMud2lkZ2V0LFxuICAgICAgbWluWm9vbSA9IHByb3BzLm1pblpvb20sXG4gICAgICBtYXhab29tID0gcHJvcHMubWF4Wm9vbSxcbiAgICAgIG1hcFR5cGUgPSBwcm9wcy5tYXBUeXBlLFxuICAgICAgZW5hYmxlSGlnaFJlc29sdXRpb24gPSBwcm9wcy5lbmFibGVIaWdoUmVzb2x1dGlvbixcbiAgICAgIGVuYWJsZUF1dG9SZXNpemUgPSBwcm9wcy5lbmFibGVBdXRvUmVzaXplLFxuICAgICAgZW5hYmxlTWFwQ2xpY2sgPSBwcm9wcy5lbmFibGVNYXBDbGljaztcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgbWFwID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldE1hcCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShwcm9wcy56b29tIHx8IDE1KSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIHpvb20gPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0Wm9vbSA9IF91c2VTdGF0ZTRbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZShwcm9wcy5jb250YWluZXIpLFxuICAgICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgICAgY29udGFpbmVyID0gX3VzZVN0YXRlNlswXSxcbiAgICAgIHNldENvbnRhaW5lciA9IF91c2VTdGF0ZTZbMV07XG5cbiAgdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNvbnRhaW5lciAmJiAhbWFwICYmIEJNYXApIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBCTWFwLk1hcChjb250YWluZXIsIHtcbiAgICAgICAgbWluWm9vbTogbWluWm9vbSxcbiAgICAgICAgbWF4Wm9vbTogbWF4Wm9vbSxcbiAgICAgICAgbWFwVHlwZTogbWFwVHlwZSxcbiAgICAgICAgZW5hYmxlSGlnaFJlc29sdXRpb246IGVuYWJsZUhpZ2hSZXNvbHV0aW9uLFxuICAgICAgICBlbmFibGVBdXRvUmVzaXplOiBlbmFibGVBdXRvUmVzaXplLFxuICAgICAgICBlbmFibGVNYXBDbGljazogZW5hYmxlTWFwQ2xpY2tcbiAgICAgIH0pO1xuICAgICAgLyoqXG4gICAgICAgKiDliqDovb3mjqfku7ZcbiAgICAgICAqL1xuXG4gICAgICB3aWRnZXQgJiYgd2lkZ2V0LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGluc3RhbmNlLmFkZENvbnRyb2wobmV3IEJNYXBbaXRlbV0oKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihpdGVtKSA9PT0gJ29iamVjdCcgJiYgaXRlbS5jb250cm9sICYmIHR5cGVvZiBpdGVtLmNvbnRyb2wgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpbnN0YW5jZS5hZGRDb250cm9sKGl0ZW0uY29udHJvbChCTWFwLCBpbnN0YW5jZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKF90eXBlb2YoaXRlbSkgPT09ICdvYmplY3QnICYmIGl0ZW0ubmFtZSkge1xuICAgICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIGl0ZW0ub3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJyA/IGl0ZW0ub3B0aW9ucyhCTWFwLCBpbnN0YW5jZSkgOiBpdGVtLm9wdGlvbnM7XG4gICAgICAgICAgaW5zdGFuY2UuYWRkQ29udHJvbChuZXcgQk1hcFtpdGVtLm5hbWVdKG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRNYXAoaW5zdGFuY2UpO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIH0sIFtjb250YWluZXIsIG1hcF0pO1xuXG4gIHZhciBfdXNlU3RhdGU3ID0gdXNlU3RhdGUocHJvcHMuY2VudGVyIHx8ICfkuIrmtbcnKSxcbiAgICAgIF91c2VTdGF0ZTggPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU3LCAyKSxcbiAgICAgIGNlbnRlciA9IF91c2VTdGF0ZThbMF0sXG4gICAgICBzZXRDZW50ZXIgPSBfdXNlU3RhdGU4WzFdO1xuICAvKipcbiAgICog5qC55o2u5Y+C5pWw6K6+572u5Lit5b+D54K5XG4gICAqL1xuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobWFwICYmIGNlbnRlcikge1xuICAgICAgdmFyIGNlbnQgPSBjZW50ZXI7XG5cbiAgICAgIGlmIChjZW50ZXIgJiYgY2VudGVyLmxuZyAmJiBjZW50ZXIubGF0KSB7XG4gICAgICAgIGNlbnQgPSBuZXcgQk1hcC5Qb2ludChjZW50ZXIubG5nLCBjZW50ZXIubGF0KTtcbiAgICAgICAgbWFwLmNlbnRlckFuZFpvb20oY2VudCwgem9vbSk7XG4gICAgICB9XG5cbiAgICAgIG1hcC5jZW50ZXJBbmRab29tKGNlbnRlciwgem9vbSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW2NlbnRlciwgbWFwXSk7XG5cbiAgdmFyIF91c2VTdGF0ZTkgPSB1c2VTdGF0ZShwcm9wcy5hdXRvTG9jYWxDaXR5KSxcbiAgICAgIF91c2VTdGF0ZTEwID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlOSwgMiksXG4gICAgICBhdXRvTG9jYWxDaXR5ID0gX3VzZVN0YXRlMTBbMF0sXG4gICAgICBzZXRBdXRvTG9jYWxDaXR5ID0gX3VzZVN0YXRlMTBbMV07XG4gIC8qKlxuICAgKiBJUOWumuS9jeiOt+WPluW9k+WJjeWfjuW4gu+8jOi/m+ihjOiHquWKqOWumuS9jVxuICAgKi9cblxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG1hcCAmJiBhdXRvTG9jYWxDaXR5KSB7XG4gICAgICB2YXIgbXlDaXR5ID0gbmV3IEJNYXAuTG9jYWxDaXR5KCk7XG4gICAgICBteUNpdHkuZ2V0KGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgc2V0Q2VudGVyKHJlc3VsdC5uYW1lKTtcbiAgICAgICAgc2V0Wm9vbShyZXN1bHQubGV2ZWwpO1xuICAgICAgICBzZXRBdXRvTG9jYWxDaXR5KGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2F1dG9Mb2NhbENpdHksIG1hcF0pO1xuICB1c2VFdmVudFByb3BlcnRpZXMobWFwLCBwcm9wcywgWydDbGljaycsICdEYmxDbGljaycsICdSaWdodENsaWNrJywgJ1JpZ2h0ZGJsQ2xpY2snLCAnTWFwVHlwZUNoYW5nZScsICdNb3VzZU1vdmUnLCAnTW91c2VPdmVyJywgJ01vdXNlT3V0JywgJ01vdmVTdGFydCcsICdNb3ZpbmcnLCAnTW92ZUVuZCcsICdab29tU3RhcnQnLCAnWm9vbUVuZCcsICdBZGRPdmVybGF5JywgJ0FkZENvbnRyb2wnLCAnUmVtb3ZlQ29udHJvbCcsICdSZW1vdmVPdmVybGF5JywgJ0NsZWFyT3ZlcmxheXMnLCAnRHJhZ1N0YXJ0JywgJ0RyYWdnaW5nJywgJ0RyYWdFbmQnLCAnQWRkVGlsZUxheWVyJywgJ1JlbW92ZVRpbGVMYXllcicsICdMb2FkJywgJ1JlU2l6ZScsICdIb3RzcG90Q2xpY2snLCAnSG90c3BvdE92ZXInLCAnSG90c3BvdE91dCcsICdUaWxlc0xvYWRlZCcsICdUb3VjaFN0YXJ0JywgJ1RvdWNoTW92ZScsICdUb3VjaEVuZCcsICdMb25nUHJlc3MnXSk7IC8vICdDZW50ZXInLFxuXG4gIHVzZVByb3BlcnRpZXMobWFwLCBwcm9wcywgWydEZWZhdWx0Q3Vyc29yJywgJ0RyYWdnaW5nQ3Vyc29yJywgJ01pblpvb20nLCAnTWF4Wm9vbScsICdNYXBTdHlsZScsICdNYXBTdHlsZVYyJywgJ1Bhbm9yYW1hJywgJ0N1cnJlbnRDaXR5JywgJ01hcFR5cGUnLCAnVmlld3BvcnQnLCAnWm9vbSddKTtcbiAgdXNlRW5hYmxlUHJvcGVydGllcyhtYXAsIHByb3BzLCBbJ0RyYWdnaW5nJywgJ1Njcm9sbFdoZWVsWm9vbScsICdEb3VibGVDbGlja1pvb20nLCAnS2V5Ym9hcmQnLCAnSW5lcnRpYWxEcmFnZ2luZycsICdDb250aW51b3VzWm9vbScsICdQaW5jaFRvWm9vbScsICdBdXRvUmVzaXplJ10pO1xuICByZXR1cm4ge1xuICAgIG1hcDogbWFwLFxuICAgIHNldE1hcDogc2V0TWFwLFxuICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgIHNldENvbnRhaW5lcjogc2V0Q29udGFpbmVyLFxuICAgIGNlbnRlcjogY2VudGVyLFxuICAgIHNldENlbnRlcjogc2V0Q2VudGVyLFxuICAgIGF1dG9Mb2NhbENpdHk6IGF1dG9Mb2NhbENpdHksXG4gICAgc2V0QXV0b0xvY2FsQ2l0eTogc2V0QXV0b0xvY2FsQ2l0eVxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OU5ZWEF2ZFhObFRXRndMblJ6ZUNKZExDSnVZVzFsY3lJNld5SjFjMlZGWm1abFkzUWlMQ0oxYzJWVGRHRjBaU0lzSW5WelpVMWxiVzhpTENKMWMyVkZibUZpYkdWUWNtOXdaWEowYVdWeklpd2lkWE5sVUhKdmNHVnlkR2xsY3lJc0luVnpaVVYyWlc1MFVISnZjR1Z5ZEdsbGN5SXNJblZ6WlUxaGNDSXNJbkJ5YjNCeklpd2lkMmxrWjJWMElpd2liV2x1V205dmJTSXNJbTFoZUZwdmIyMGlMQ0p0WVhCVWVYQmxJaXdpWlc1aFlteGxTR2xuYUZKbGMyOXNkWFJwYjI0aUxDSmxibUZpYkdWQmRYUnZVbVZ6YVhwbElpd2laVzVoWW14bFRXRndRMnhwWTJzaUxDSnRZWEFpTENKelpYUk5ZWEFpTENKNmIyOXRJaXdpYzJWMFdtOXZiU0lzSW1OdmJuUmhhVzVsY2lJc0luTmxkRU52Ym5SaGFXNWxjaUlzSWtKTllYQWlMQ0pwYm5OMFlXNWpaU0lzSWsxaGNDSXNJbVp2Y2tWaFkyZ2lMQ0pwZEdWdElpd2lZV1JrUTI5dWRISnZiQ0lzSW1OdmJuUnliMndpTENKdVlXMWxJaXdpYjNCMGFXOXVjeUlzSW1ObGJuUmxjaUlzSW5ObGRFTmxiblJsY2lJc0ltTmxiblFpTENKc2JtY2lMQ0pzWVhRaUxDSlFiMmx1ZENJc0ltTmxiblJsY2tGdVpGcHZiMjBpTENKaGRYUnZURzlqWVd4RGFYUjVJaXdpYzJWMFFYVjBiMHh2WTJGc1EybDBlU0lzSW0xNVEybDBlU0lzSWt4dlkyRnNRMmwwZVNJc0ltZGxkQ0lzSW5KbGMzVnNkQ0lzSW14bGRtVnNJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCTEZOQlFWTkJMRk5CUVZRc1JVRkJiMEpETEZGQlFYQkNMRVZCUVRoQ1F5eFBRVUU1UWl4UlFVRTJReXhQUVVFM1F6dEJRVWRCTEZOQlFWTkRMRzFDUVVGVUxFVkJRVGhDUXl4aFFVRTVRaXhGUVVFMlEwTXNhMEpCUVRkRExGRkJRWFZGTEdsQ1FVRjJSVHRCUVZOQkxHVkJRV1VzVTBGQlUwTXNUVUZCVkN4SFFVRnZRenRCUVVGQkxFMUJRWEJDUXl4TFFVRnZRaXgxUlVGQlNpeEZRVUZKTzBGQlEycEVMRTFCUVZGRExFMUJRVklzUjBGQmMwZEVMRXRCUVhSSExFTkJRVkZETEUxQlFWSTdRVUZCUVN4TlFVRm5Ra01zVDBGQmFFSXNSMEZCYzBkR0xFdEJRWFJITEVOQlFXZENSU3hQUVVGb1FqdEJRVUZCTEUxQlFYbENReXhQUVVGNlFpeEhRVUZ6UjBnc1MwRkJkRWNzUTBGQmVVSkhMRTlCUVhwQ08wRkJRVUVzVFVGQmEwTkRMRTlCUVd4RExFZEJRWE5IU2l4TFFVRjBSeXhEUVVGclEwa3NUMEZCYkVNN1FVRkJRU3hOUVVFeVEwTXNiMEpCUVRORExFZEJRWE5IVEN4TFFVRjBSeXhEUVVFeVEwc3NiMEpCUVRORE8wRkJRVUVzVFVGQmFVVkRMR2RDUVVGcVJTeEhRVUZ6UjA0c1MwRkJkRWNzUTBGQmFVVk5MR2RDUVVGcVJUdEJRVUZCTEUxQlFXMUdReXhqUVVGdVJpeEhRVUZ6UjFBc1MwRkJkRWNzUTBGQmJVWlBMR05CUVc1R096dEJRVU5CTEd0Q1FVRnpRbUlzVVVGQlVTeEZRVUU1UWp0QlFVRkJPMEZCUVVFc1RVRkJUMk1zUjBGQlVEdEJRVUZCTEUxQlFWbERMRTFCUVZvN08wRkJRMEVzYlVKQlFYZENaaXhSUVVGUkxFTkJRVU5OTEV0QlFVc3NRMEZCUTFVc1NVRkJUaXhKUVVGakxFVkJRV1lzUTBGQmFFTTdRVUZCUVR0QlFVRkJMRTFCUVU5QkxFbEJRVkE3UVVGQlFTeE5RVUZoUXl4UFFVRmlPenRCUVVOQkxHMUNRVUZyUTJwQ0xGRkJRVkVzUTBGQlEwMHNTMEZCU3l4RFFVRkRXU3hUUVVGUUxFTkJRVEZETzBGQlFVRTdRVUZCUVN4TlFVRlBRU3hUUVVGUU8wRkJRVUVzVFVGQmEwSkRMRmxCUVd4Q096dEJRVU5CYkVJc1JVRkJRVUVzVDBGQlR5eERRVUZETEZsQlFVMDdRVUZEV2l4UlFVRkphVUlzVTBGQlV5eEpRVUZKTEVOQlFVTktMRWRCUVdRc1NVRkJjVUpOTEVsQlFYcENMRVZCUVN0Q08wRkJRemRDTEZWQlFVMURMRkZCUVZFc1IwRkJSeXhKUVVGSlJDeEpRVUZKTEVOQlFVTkZMRWRCUVZRc1EwRkJZVW9zVTBGQllpeEZRVUYzUWp0QlFVTjJRMVlzVVVGQlFVRXNUMEZCVHl4RlFVRlFRU3hQUVVSMVF6dEJRVVYyUTBNc1VVRkJRVUVzVDBGQlR5eEZRVUZRUVN4UFFVWjFRenRCUVVkMlEwTXNVVUZCUVVFc1QwRkJUeXhGUVVGUVFTeFBRVWgxUXp0QlFVbDJRME1zVVVGQlFVRXNiMEpCUVc5Q0xFVkJRWEJDUVN4dlFrRktkVU03UVVGTGRrTkRMRkZCUVVGQkxHZENRVUZuUWl4RlFVRm9Ra0VzWjBKQlRIVkRPMEZCVFhaRFF5eFJRVUZCUVN4alFVRmpMRVZCUVdSQk8wRkJUblZETEU5QlFYaENMRU5CUVdwQ08wRkJVVUU3UVVGRFRqdEJRVU5CT3p0QlFVTk5UaXhOUVVGQlFTeE5RVUZOTEVsQlEwcEJMRTFCUVUwc1EwRkJRMmRDTEU5QlFWQXNRMEZCWlN4VlFVRkRReXhKUVVGRUxFVkJRVlU3UVVGRGRrSXNXVUZCU1N4UFFVRlBRU3hKUVVGUUxFdEJRV2RDTEZGQlFYQkNMRVZCUVRoQ08wRkJRelZDU0N4VlFVRkJRU3hSUVVGUkxFTkJRVU5KTEZWQlFWUXNRMEZCYjBJc1NVRkJTMHdzU1VGQlNTeERRVUZEU1N4SlFVRkVMRU5CUVZRc1JVRkJjRUk3UVVGRFJDeFRRVVpFTEUxQlJVOHNTVUZCU1N4UlFVRlBRU3hKUVVGUUxFMUJRV2RDTEZGQlFXaENMRWxCUVRSQ1FTeEpRVUZKTEVOQlFVTkZMRTlCUVdwRExFbEJRVFJETEU5QlFVOUdMRWxCUVVrc1EwRkJRMFVzVDBGQldpeExRVUYzUWl4VlFVRjRSU3hGUVVGdlJqdEJRVU42Umt3c1ZVRkJRVUVzVVVGQlVTeERRVUZEU1N4VlFVRlVMRU5CUVc5Q1JDeEpRVUZKTEVOQlFVTkZMRTlCUVV3c1EwRkJZVTRzU1VGQllpeEZRVUZ0UWtNc1VVRkJia0lzUTBGQmNFSTdRVUZEUkN4VFFVWk5MRTFCUlVFc1NVRkJTU3hSUVVGUFJ5eEpRVUZRTEUxQlFXZENMRkZCUVdoQ0xFbEJRVFJDUVN4SlFVRkpMRU5CUVVOSExFbEJRWEpETEVWQlFUSkRPMEZCUTJoRUxHTkJRVTFETEU5QlFVOHNSMEZCUnl4UFFVRlBTaXhKUVVGSkxFTkJRVU5KTEU5QlFWb3NTMEZCZDBJc1ZVRkJlRUlzUjBGQmNVTktMRWxCUVVrc1EwRkJRMGtzVDBGQlRDeERRVUZoVWl4SlFVRmlMRVZCUVcxQ1F5eFJRVUZ1UWl4RFFVRnlReXhIUVVGdlJVY3NTVUZCU1N4RFFVRkRTU3hQUVVGNlJqdEJRVU5CVUN4VlFVRkJRU3hSUVVGUkxFTkJRVU5KTEZWQlFWUXNRMEZCYjBJc1NVRkJTMHdzU1VGQlNTeERRVUZEU1N4SlFVRkpMRU5CUVVOSExFbEJRVTRzUTBGQlZDeERRVUUyUWtNc1QwRkJOMElzUTBGQmNFSTdRVUZEUkR0QlFVTkdMRTlCVkVRc1EwRkVSanRCUVZkQllpeE5RVUZCUVN4TlFVRk5MRU5CUVVOTkxGRkJRVVFzUTBGQlRqdEJRVU5FTEV0QmVrSlhMRU5CTUVKYU96dEJRVU5FTEVkQk0wSk5MRVZCTWtKS0xFTkJRVU5JTEZOQlFVUXNSVUZCV1Vvc1IwRkJXaXhEUVROQ1NTeERRVUZRT3p0QlFUWkNRU3h0UWtGQk5FSmtMRkZCUVZFc1EwRkJRMDBzUzBGQlN5eERRVUZEZFVJc1RVRkJUaXhKUVVGblFpeEpRVUZxUWl4RFFVRndRenRCUVVGQk8wRkJRVUVzVFVGQlQwRXNUVUZCVUR0QlFVRkJMRTFCUVdWRExGTkJRV1k3UVVGRFFUdEJRVU5HTzBGQlEwRTdPenRCUVVORkwwSXNSVUZCUVVFc1UwRkJVeXhEUVVGRExGbEJRVTA3UVVGRFpDeFJRVUZKWlN4SFFVRkhMRWxCUVVsbExFMUJRVmdzUlVGQmJVSTdRVUZEYWtJc1ZVRkJTVVVzU1VGQlNTeEhRVUZIUml4TlFVRllPenRCUVVOQkxGVkJRVWxCTEUxQlFVMHNTVUZCUzBFc1RVRkJSQ3hEUVVGMVFrY3NSMEZCYWtNc1NVRkJlVU5JTEUxQlFVUXNRMEZCZFVKSkxFZEJRVzVGTEVWQlFYZEZPMEZCUTNSRlJpeFJRVUZCUVN4SlFVRkpMRWRCUVVjc1NVRkJTVmdzU1VGQlNTeERRVUZEWXl4TFFVRlVMRU5CUVdkQ1RDeE5RVUZFTEVOQlFYVkNSeXhIUVVGMFF5eEZRVUUwUTBnc1RVRkJSQ3hEUVVGMVFra3NSMEZCYkVVc1EwRkJVRHRCUVVOQmJrSXNVVUZCUVVFc1IwRkJSeXhEUVVGRGNVSXNZVUZCU2l4RFFVRnJRa29zU1VGQmJFSXNSVUZCZVVKbUxFbEJRWHBDTzBGQlEwUTdPMEZCUTBSR0xFMUJRVUZCTEVkQlFVY3NRMEZCUTNGQ0xHRkJRVW9zUTBGQmEwSk9MRTFCUVd4Q0xFVkJRVEJDWWl4SlFVRXhRanRCUVVORUxFdEJVbUVzUTBGVFpEczdRVUZEUkN4SFFWWlJMRVZCVlU0c1EwRkJRMkVzVFVGQlJDeEZRVUZUWml4SFFVRlVMRU5CVmswc1EwRkJWRHM3UVVGWlFTeHRRa0ZCTUVOa0xGRkJRVkVzUTBGQlEwMHNTMEZCU3l4RFFVRkRPRUlzWVVGQlVDeERRVUZzUkR0QlFVRkJPMEZCUVVFc1RVRkJUMEVzWVVGQlVEdEJRVUZCTEUxQlFYTkNReXhuUWtGQmRFSTdRVUZEUVR0QlFVTkdPMEZCUTBFN096dEJRVU5GZEVNc1JVRkJRVUVzVTBGQlV5eERRVUZETEZsQlFVMDdRVUZEWkN4UlFVRkpaU3hIUVVGSExFbEJRVWx6UWl4aFFVRllMRVZCUVRCQ08wRkJRM2hDTEZWQlFVMUZMRTFCUVUwc1IwRkJSeXhKUVVGSmJFSXNTVUZCU1N4RFFVRkRiVUlzVTBGQlZDeEZRVUZtTzBGQlEwRkVMRTFCUVVGQkxFMUJRVTBzUTBGQlEwVXNSMEZCVUN4RFFVRlhMRlZCUVVORExFMUJRVVFzUlVGQldUdEJRVU55UWxnc1VVRkJRVUVzVTBGQlV5eERRVUZEVnl4TlFVRk5MRU5CUVVOa0xFbEJRVklzUTBGQlZEdEJRVU5CVml4UlFVRkJRU3hQUVVGUExFTkJRVU4zUWl4TlFVRk5MRU5CUVVORExFdEJRVklzUTBGQlVEdEJRVU5CVEN4UlFVRkJRU3huUWtGQlowSXNRMEZCUXl4TFFVRkVMRU5CUVdoQ08wRkJRMFFzVDBGS1JEdEJRVXRFTzBGQlEwWXNSMEZVVVN4RlFWTk9MRU5CUVVORUxHRkJRVVFzUlVGQlowSjBRaXhIUVVGb1FpeERRVlJOTEVOQlFWUTdRVUZYUVZZc1JVRkJRVUVzYTBKQlFXdENMRU5CUVcxQ1ZTeEhRVUZ1UWl4RlFVRjVRbElzUzBGQmVrSXNSVUZCWjBNc1EwRkRhRVFzVDBGRVowUXNSVUZGYUVRc1ZVRkdaMFFzUlVGSGFFUXNXVUZJWjBRc1JVRkphRVFzWlVGS1owUXNSVUZMYUVRc1pVRk1aMFFzUlVGTmFFUXNWMEZPWjBRc1JVRlBhRVFzVjBGUVowUXNSVUZSYUVRc1ZVRlNaMFFzUlVGVGFFUXNWMEZVWjBRc1JVRlZhRVFzVVVGV1owUXNSVUZYYUVRc1UwRllaMFFzUlVGWmFFUXNWMEZhWjBRc1JVRmhhRVFzVTBGaVowUXNSVUZqYUVRc1dVRmtaMFFzUlVGbGFFUXNXVUZtWjBRc1JVRm5RbWhFTEdWQmFFSm5SQ3hGUVdsQ2FFUXNaVUZxUW1kRUxFVkJhMEpvUkN4bFFXeENaMFFzUlVGdFFtaEVMRmRCYmtKblJDeEZRVzlDYUVRc1ZVRndRbWRFTEVWQmNVSm9SQ3hUUVhKQ1owUXNSVUZ6UW1oRUxHTkJkRUpuUkN4RlFYVkNhRVFzYVVKQmRrSm5SQ3hGUVhkQ2FFUXNUVUY0UW1kRUxFVkJlVUpvUkN4UlFYcENaMFFzUlVFd1FtaEVMR05CTVVKblJDeEZRVEpDYUVRc1lVRXpRbWRFTEVWQk5FSm9SQ3haUVRWQ1owUXNSVUUyUW1oRUxHRkJOMEpuUkN4RlFUaENhRVFzV1VFNVFtZEVMRVZCSzBKb1JDeFhRUzlDWjBRc1JVRm5RMmhFTEZWQmFFTm5SQ3hGUVdsRGFFUXNWMEZxUTJkRUxFTkJRV2hETEVOQlFXeENMRU5CYWtWcFJDeERRVzlIYWtRN08wRkJRMEZJTEVWQlFVRkJMR0ZCUVdFc1EwRkJiVUpYTEVkQlFXNUNMRVZCUVhsQ1VpeExRVUY2UWl4RlFVRm5ReXhEUVVNelF5eGxRVVF5UXl4RlFVVXpReXhuUWtGR01rTXNSVUZITTBNc1UwRklNa01zUlVGSk0wTXNVMEZLTWtNc1JVRkxNME1zVlVGTU1rTXNSVUZOTTBNc1dVRk9Na01zUlVGUE0wTXNWVUZRTWtNc1JVRlJNME1zWVVGU01rTXNSVUZUTTBNc1UwRlVNa01zUlVGVk0wTXNWVUZXTWtNc1JVRlhNME1zVFVGWU1rTXNRMEZCYUVNc1EwRkJZanRCUVdGQlNpeEZRVUZCUVN4dFFrRkJiVUlzUTBGQmJVSlpMRWRCUVc1Q0xFVkJRWGxDVWl4TFFVRjZRaXhGUVVGblF5eERRVU5xUkN4VlFVUnBSQ3hGUVVWcVJDeHBRa0ZHYVVRc1JVRkhha1FzYVVKQlNHbEVMRVZCU1dwRUxGVkJTbWxFTEVWQlMycEVMR3RDUVV4cFJDeEZRVTFxUkN4blFrRk9hVVFzUlVGUGFrUXNZVUZRYVVRc1JVRlJha1FzV1VGU2FVUXNRMEZCYUVNc1EwRkJia0k3UVVGVlFTeFRRVUZQTzBGQlEweFJMRWxCUVVGQkxFZEJRVWNzUlVGQlNFRXNSMEZFU3p0QlFVVk1ReXhKUVVGQlFTeE5RVUZOTEVWQlFVNUJMRTFCUmtzN1FVRkhURWNzU1VGQlFVRXNVMEZCVXl4RlFVRlVRU3hUUVVoTE8wRkJTVXhETEVsQlFVRkJMRmxCUVZrc1JVRkJXa0VzV1VGS1N6dEJRVXRNVlN4SlFVRkJRU3hOUVVGTkxFVkJRVTVCTEUxQlRFczdRVUZOVEVNc1NVRkJRVUVzVTBGQlV5eEZRVUZVUVN4VFFVNUxPMEZCVDB4TkxFbEJRVUZCTEdGQlFXRXNSVUZCWWtFc1lVRlFTenRCUVZGTVF5eEpRVUZCUVN4blFrRkJaMElzUlVGQmFFSkJPMEZCVWtzc1IwRkJVRHRCUVZWRUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dkWE5sUldabVpXTjBMQ0IxYzJWVGRHRjBaU3dnZFhObFRXVnRieUI5SUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQjdJRTFoY0VOb2FXeGtVSEp2Y0hNZ2ZTQm1jbTl0SUNjdUxpOWpiMjF0YjI0dmJXRndKenRjYm1sdGNHOXlkQ0I3SUUxaGNGQnliM0J6SUgwZ1puSnZiU0FuTGk4bk8xeHVhVzF3YjNKMElIc2dkWE5sUlc1aFlteGxVSEp2Y0dWeWRHbGxjeXdnZFhObFVISnZjR1Z5ZEdsbGN5d2dkWE5sUlhabGJuUlFjbTl3WlhKMGFXVnpJSDBnWm5KdmJTQW5MaTR2WTI5dGJXOXVMMmh2YjJ0ekp6dGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JWYzJWTllYQWdaWGgwWlc1a2N5Qk5ZWEJRY205d2N5d2dUV0Z3UTJocGJHUlFjbTl3Y3lCN1hHNGdJQzhxS2x4dUlDQWdLaURtaklmbHJwcm5tb1RscnJubG1haGNiaUFnSUNvdlhHNGdJR052Ym5SaGFXNWxjajg2SUhOMGNtbHVaeUI4SUVoVVRVeEVhWFpGYkdWdFpXNTBPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCMWMyVk5ZWEFvY0hKdmNITTZJRlZ6WlUxaGNDQTlJSHQ5S1NCN1hHNGdJR052Ym5OMElIc2dkMmxrWjJWMExDQnRhVzVhYjI5dExDQnRZWGhhYjI5dExDQnRZWEJVZVhCbExDQmxibUZpYkdWSWFXZG9VbVZ6YjJ4MWRHbHZiaXdnWlc1aFlteGxRWFYwYjFKbGMybDZaU3dnWlc1aFlteGxUV0Z3UTJ4cFkyc2dmU0E5SUhCeWIzQnpPMXh1SUNCamIyNXpkQ0JiYldGd0xDQnpaWFJOWVhCZElEMGdkWE5sVTNSaGRHVThRazFoY0M1TllYQStLQ2s3WEc0Z0lHTnZibk4wSUZ0NmIyOXRMQ0J6WlhSYWIyOXRYU0E5SUhWelpWTjBZWFJsS0hCeWIzQnpMbnB2YjIwZ2ZId2dNVFVwTzF4dUlDQmpiMjV6ZENCYlkyOXVkR0ZwYm1WeUxDQnpaWFJEYjI1MFlXbHVaWEpkSUQwZ2RYTmxVM1JoZEdVb2NISnZjSE11WTI5dWRHRnBibVZ5S1R0Y2JpQWdkWE5sVFdWdGJ5Z29LU0E5UGlCN1hHNGdJQ0FnYVdZZ0tHTnZiblJoYVc1bGNpQW1KaUFoYldGd0lDWW1JRUpOWVhBcElIdGNiaUFnSUNBZ0lHTnZibk4wSUdsdWMzUmhibU5sSUQwZ2JtVjNJRUpOWVhBdVRXRndLR052Ym5SaGFXNWxjaXdnZTF4dUlDQWdJQ0FnSUNCdGFXNWFiMjl0TEZ4dUlDQWdJQ0FnSUNCdFlYaGFiMjl0TEZ4dUlDQWdJQ0FnSUNCdFlYQlVlWEJsTEZ4dUlDQWdJQ0FnSUNCbGJtRmliR1ZJYVdkb1VtVnpiMngxZEdsdmJpeGNiaUFnSUNBZ0lDQWdaVzVoWW14bFFYVjBiMUpsYzJsNlpTeGNiaUFnSUNBZ0lDQWdaVzVoWW14bFRXRndRMnhwWTJzc1hHNGdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDOHFLbHh1SUNBZ0lDQWdJQ29nNVlxZzZMMjk1bzZuNUx1MlhHNGdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lIZHBaR2RsZENBbUpseHVJQ0FnSUNBZ0lDQjNhV1JuWlhRdVptOXlSV0ZqYUNnb2FYUmxiU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnYVhSbGJTQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2x1YzNSaGJtTmxMbUZrWkVOdmJuUnliMndvYm1WM0lDaENUV0Z3VzJsMFpXMWRJR0Z6SUdGdWVTa29LU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2FYUmxiU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdhWFJsYlM1amIyNTBjbTlzSUNZbUlIUjVjR1Z2WmlCcGRHVnRMbU52Ym5SeWIyd2dQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsdWMzUmhibU5sTG1Ga1pFTnZiblJ5YjJ3b2FYUmxiUzVqYjI1MGNtOXNLRUpOWVhBc0lHbHVjM1JoYm1ObEtTazdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnYVhSbGJTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2FYUmxiUzV1WVcxbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J2Y0hScGIyNXpJRDBnZEhsd1pXOW1JR2wwWlcwdWIzQjBhVzl1Y3lBOVBUMGdKMloxYm1OMGFXOXVKeUEvSUdsMFpXMHViM0IwYVc5dWN5aENUV0Z3TENCcGJuTjBZVzVqWlNrZ09pQnBkR1Z0TG05d2RHbHZibk03WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBibk4wWVc1alpTNWhaR1JEYjI1MGNtOXNLRzVsZHlBb1FrMWhjRnRwZEdWdExtNWhiV1ZkSUdGeklHRnVlU2tvYjNCMGFXOXVjeWtwTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0J6WlhSTllYQW9hVzV6ZEdGdVkyVXBPMXh1SUNBZ0lIMWNiaUFnSUNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VZ2NtVmhZM1F0YUc5dmEzTXZaWGhvWVhWemRHbDJaUzFrWlhCelhHNGdJSDBzSUZ0amIyNTBZV2x1WlhJc0lHMWhjRjBwTzF4dVhHNGdJR052Ym5OMElGdGpaVzUwWlhJc0lITmxkRU5sYm5SbGNsMGdQU0IxYzJWVGRHRjBaU2h3Y205d2N5NWpaVzUwWlhJZ2ZId2dKK1M0aXVhMXR5Y3BPMXh1SUNBdktpcGNiaUFnSUNvZzVxQzU1bzJ1NVkrQzVwV3c2SzYrNTcydTVMaXQ1YitENTRLNVhHNGdJQ0FxTDF4dUlDQjFjMlZGWm1abFkzUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUdsbUlDaHRZWEFnSmlZZ1kyVnVkR1Z5S1NCN1hHNGdJQ0FnSUNCc1pYUWdZMlZ1ZENBOUlHTmxiblJsY2p0Y2JpQWdJQ0FnSUdsbUlDaGpaVzUwWlhJZ0ppWWdLR05sYm5SbGNpQmhjeUJDVFdGd0xsQnZhVzUwS1M1c2JtY2dKaVlnS0dObGJuUmxjaUJoY3lCQ1RXRndMbEJ2YVc1MEtTNXNZWFFwSUh0Y2JpQWdJQ0FnSUNBZ1kyVnVkQ0E5SUc1bGR5QkNUV0Z3TGxCdmFXNTBLQ2hqWlc1MFpYSWdZWE1nUWsxaGNDNVFiMmx1ZENrdWJHNW5MQ0FvWTJWdWRHVnlJR0Z6SUVKTllYQXVVRzlwYm5RcExteGhkQ2s3WEc0Z0lDQWdJQ0FnSUcxaGNDNWpaVzUwWlhKQmJtUmFiMjl0S0dObGJuUWhMQ0I2YjI5dElTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnRZWEF1WTJWdWRHVnlRVzVrV205dmJTaGpaVzUwWlhJc0lIcHZiMjBoS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJSEpsWVdOMExXaHZiMnR6TDJWNGFHRjFjM1JwZG1VdFpHVndjMXh1SUNCOUxDQmJZMlZ1ZEdWeUxDQnRZWEJkS1R0Y2JseHVJQ0JqYjI1emRDQmJZWFYwYjB4dlkyRnNRMmwwZVN3Z2MyVjBRWFYwYjB4dlkyRnNRMmwwZVYwZ1BTQjFjMlZUZEdGMFpTaHdjbTl3Y3k1aGRYUnZURzlqWVd4RGFYUjVLVHRjYmlBZ0x5b3FYRzRnSUNBcUlFbFE1YTZhNUwyTjZJNjM1WStXNWIyVDVZbU41WitPNWJpQzc3eU02TCtiNktHTTZJZXE1WXFvNWE2YTVMMk5YRzRnSUNBcUwxeHVJQ0IxYzJWRlptWmxZM1FvS0NrZ1BUNGdlMXh1SUNBZ0lHbG1JQ2h0WVhBZ0ppWWdZWFYwYjB4dlkyRnNRMmwwZVNrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnYlhsRGFYUjVJRDBnYm1WM0lFSk5ZWEF1VEc5allXeERhWFI1S0NrN1hHNGdJQ0FnSUNCdGVVTnBkSGt1WjJWMEtDaHlaWE4xYkhRcElEMCtJSHRjYmlBZ0lDQWdJQ0FnYzJWMFEyVnVkR1Z5S0hKbGMzVnNkQzV1WVcxbElHRnpJR0Z1ZVNrN1hHNGdJQ0FnSUNBZ0lITmxkRnB2YjIwb2NtVnpkV3gwTG14bGRtVnNJR0Z6SUdGdWVTazdYRzRnSUNBZ0lDQWdJSE5sZEVGMWRHOU1iMk5oYkVOcGRIa29abUZzYzJVcE8xeHVJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVJQ0I5TENCYllYVjBiMHh2WTJGc1EybDBlU3dnYldGd1hTazdYRzVjYmlBZ2RYTmxSWFpsYm5SUWNtOXdaWEowYVdWelBFSk5ZWEF1VFdGd0xDQlZjMlZOWVhBK0tHMWhjQ0VzSUhCeWIzQnpMQ0JiWEc0Z0lDQWdKME5zYVdOckp5eGNiaUFnSUNBblJHSnNRMnhwWTJzbkxGeHVJQ0FnSUNkU2FXZG9kRU5zYVdOckp5eGNiaUFnSUNBblVtbG5hSFJrWW14RGJHbGpheWNzWEc0Z0lDQWdKMDFoY0ZSNWNHVkRhR0Z1WjJVbkxGeHVJQ0FnSUNkTmIzVnpaVTF2ZG1VbkxGeHVJQ0FnSUNkTmIzVnpaVTkyWlhJbkxGeHVJQ0FnSUNkTmIzVnpaVTkxZENjc1hHNGdJQ0FnSjAxdmRtVlRkR0Z5ZENjc1hHNGdJQ0FnSjAxdmRtbHVaeWNzWEc0Z0lDQWdKMDF2ZG1WRmJtUW5MRnh1SUNBZ0lDZGFiMjl0VTNSaGNuUW5MRnh1SUNBZ0lDZGFiMjl0Ulc1a0p5eGNiaUFnSUNBblFXUmtUM1psY214aGVTY3NYRzRnSUNBZ0owRmtaRU52Ym5SeWIyd25MRnh1SUNBZ0lDZFNaVzF2ZG1WRGIyNTBjbTlzSnl4Y2JpQWdJQ0FuVW1WdGIzWmxUM1psY214aGVTY3NYRzRnSUNBZ0owTnNaV0Z5VDNabGNteGhlWE1uTEZ4dUlDQWdJQ2RFY21GblUzUmhjblFuTEZ4dUlDQWdJQ2RFY21GbloybHVaeWNzWEc0Z0lDQWdKMFJ5WVdkRmJtUW5MRnh1SUNBZ0lDZEJaR1JVYVd4bFRHRjVaWEluTEZ4dUlDQWdJQ2RTWlcxdmRtVlVhV3hsVEdGNVpYSW5MRnh1SUNBZ0lDZE1iMkZrSnl4Y2JpQWdJQ0FuVW1WVGFYcGxKeXhjYmlBZ0lDQW5TRzkwYzNCdmRFTnNhV05ySnl4Y2JpQWdJQ0FuU0c5MGMzQnZkRTkyWlhJbkxGeHVJQ0FnSUNkSWIzUnpjRzkwVDNWMEp5eGNiaUFnSUNBblZHbHNaWE5NYjJGa1pXUW5MRnh1SUNBZ0lDZFViM1ZqYUZOMFlYSjBKeXhjYmlBZ0lDQW5WRzkxWTJoTmIzWmxKeXhjYmlBZ0lDQW5WRzkxWTJoRmJtUW5MRnh1SUNBZ0lDZE1iMjVuVUhKbGMzTW5MRnh1SUNCZEtUdGNiaUFnTHk4Z0owTmxiblJsY2ljc1hHNGdJSFZ6WlZCeWIzQmxjblJwWlhNOFFrMWhjQzVOWVhBc0lGVnpaVTFoY0Q0b2JXRndJU3dnY0hKdmNITXNJRnRjYmlBZ0lDQW5SR1ZtWVhWc2RFTjFjbk52Y2ljc1hHNGdJQ0FnSjBSeVlXZG5hVzVuUTNWeWMyOXlKeXhjYmlBZ0lDQW5UV2x1V205dmJTY3NYRzRnSUNBZ0owMWhlRnB2YjIwbkxGeHVJQ0FnSUNkTllYQlRkSGxzWlNjc1hHNGdJQ0FnSjAxaGNGTjBlV3hsVmpJbkxGeHVJQ0FnSUNkUVlXNXZjbUZ0WVNjc1hHNGdJQ0FnSjBOMWNuSmxiblJEYVhSNUp5eGNiaUFnSUNBblRXRndWSGx3WlNjc1hHNGdJQ0FnSjFacFpYZHdiM0owSnl4Y2JpQWdJQ0FuV205dmJTY3NYRzRnSUYwcE8xeHVJQ0IxYzJWRmJtRmliR1ZRY205d1pYSjBhV1Z6UEVKTllYQXVUV0Z3TENCVmMyVk5ZWEErS0cxaGNDRXNJSEJ5YjNCekxDQmJYRzRnSUNBZ0owUnlZV2RuYVc1bkp5eGNiaUFnSUNBblUyTnliMnhzVjJobFpXeGFiMjl0Snl4Y2JpQWdJQ0FuUkc5MVlteGxRMnhwWTJ0YWIyOXRKeXhjYmlBZ0lDQW5TMlY1WW05aGNtUW5MRnh1SUNBZ0lDZEpibVZ5ZEdsaGJFUnlZV2RuYVc1bkp5eGNiaUFnSUNBblEyOXVkR2x1ZFc5MWMxcHZiMjBuTEZ4dUlDQWdJQ2RRYVc1amFGUnZXbTl2YlNjc1hHNGdJQ0FnSjBGMWRHOVNaWE5wZW1VbkxGeHVJQ0JkS1R0Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCdFlYQXNYRzRnSUNBZ2MyVjBUV0Z3TEZ4dUlDQWdJR052Ym5SaGFXNWxjaXhjYmlBZ0lDQnpaWFJEYjI1MFlXbHVaWElzWEc0Z0lDQWdZMlZ1ZEdWeUxGeHVJQ0FnSUhObGRFTmxiblJsY2l4Y2JpQWdJQ0JoZFhSdlRHOWpZV3hEYVhSNUxGeHVJQ0FnSUhObGRFRjFkRzlNYjJOaGJFTnBkSGtzWEc0Z0lIMDdYRzU5WEc0aVhYMD0iLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG52YXIgX2V4Y2x1ZGVkID0gW1wiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJjaGlsZHJlblwiXTtcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiLi4vdHlwZXNcIiAvPlxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VJbXBlcmF0aXZlSGFuZGxlLCBGcmFnbWVudCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VNYXAgZnJvbSAnLi91c2VNYXAnO1xuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuXG4gIHdpbmRvdy5CTWFwID0gd2luZG93LkJNYXAgfHwgd2luZG93LkJNYXBHTDtcbiAgdmFyIGVsbVJlZiA9IHVzZVJlZihudWxsKTtcblxuICB2YXIgX3VzZU1hcCA9IHVzZU1hcChfb2JqZWN0U3ByZWFkKHtcbiAgICBjb250YWluZXI6IGVsbVJlZi5jdXJyZW50XG4gIH0sIHByb3BzKSksXG4gICAgICBzZXRDb250YWluZXIgPSBfdXNlTWFwLnNldENvbnRhaW5lcixcbiAgICAgIGNvbnRhaW5lciA9IF91c2VNYXAuY29udGFpbmVyLFxuICAgICAgc2V0Q2VudGVyID0gX3VzZU1hcC5zZXRDZW50ZXIsXG4gICAgICBzZXRBdXRvTG9jYWxDaXR5ID0gX3VzZU1hcC5zZXRBdXRvTG9jYWxDaXR5LFxuICAgICAgbWFwID0gX3VzZU1hcC5tYXA7XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2V0Q29udGFpbmVyKGVsbVJlZi5jdXJyZW50KTtcbiAgfSwgW2VsbVJlZi5jdXJyZW50XSk7XG4gIHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwcm9wcy5jZW50ZXIgJiYgc2V0Q2VudGVyKHByb3BzLmNlbnRlcik7XG4gIH0sIFtwcm9wcy5jZW50ZXJdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc2V0QXV0b0xvY2FsQ2l0eShwcm9wcy5hdXRvTG9jYWxDaXR5KTtcbiAgfSwgW3Byb3BzLmF1dG9Mb2NhbENpdHldKTtcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcyksIHt9LCB7XG4gICAgICBtYXA6IG1hcCxcbiAgICAgIEJNYXA6IEJNYXAsXG4gICAgICBjb250YWluZXI6IGVsbVJlZlxuICAgIH0pO1xuICB9LCBbbWFwXSk7XG4gIHZhciBjaGlsZHMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcmVmOiBlbG1SZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgIH0sIHN0eWxlKVxuICB9KSwgQk1hcCAmJiBtYXAgJiYgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nICYmIGNoaWxkcmVuKHtcbiAgICBCTWFwOiBCTWFwLFxuICAgIG1hcDogbWFwLFxuICAgIGNvbnRhaW5lcjogY29udGFpbmVyXG4gIH0pLCBCTWFwICYmIG1hcCAmJiBjaGlsZHMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmICghIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHJldHVybjtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjaGlsZC5wcm9wcyksIHt9LCB7XG4gICAgICBCTWFwOiBCTWFwLFxuICAgICAgbWFwOiBtYXAsXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lclxuICAgIH0pKTtcbiAgfSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5TllYQXZhVzVrWlhndWRITjRJbDBzSW01aGJXVnpJanBiSWxKbFlXTjBJaXdpZFhObFVtVm1JaXdpZFhObFJXWm1aV04wSWl3aWRYTmxTVzF3WlhKaGRHbDJaVWhoYm1Sc1pTSXNJa1p5WVdkdFpXNTBJaXdpZFhObFRXVnRieUlzSW5WelpVMWhjQ0lzSW1admNuZGhjbVJTWldZaUxDSnlaV1lpTENKamJHRnpjMDVoYldVaUxDSnpkSGxzWlNJc0ltTm9hV3hrY21WdUlpd2ljSEp2Y0hNaUxDSjNhVzVrYjNjaUxDSkNUV0Z3SWl3aVFrMWhjRWRNSWl3aVpXeHRVbVZtSWl3aVkyOXVkR0ZwYm1WeUlpd2lZM1Z5Y21WdWRDSXNJbk5sZEVOdmJuUmhhVzVsY2lJc0luTmxkRU5sYm5SbGNpSXNJbk5sZEVGMWRHOU1iMk5oYkVOcGRIa2lMQ0p0WVhBaUxDSmpaVzUwWlhJaUxDSmhkWFJ2VEc5allXeERhWFI1SWl3aVkyaHBiR1J6SWl3aVEyaHBiR1J5Wlc0aUxDSjBiMEZ5Y21GNUlpd2labTl1ZEZOcGVtVWlMQ0pvWldsbmFIUWlMQ0pqYUdsc1pDSXNJbWx6Vm1Gc2FXUkZiR1Z0Wlc1MElpd2lZMnh2Ym1WRmJHVnRaVzUwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFUdEJRVVZCTEU5QlFVOUJMRXRCUVZBc1NVRkJaMEpETEUxQlFXaENMRVZCUVhkQ1F5eFRRVUY0UWl4RlFVRnRRME1zYlVKQlFXNURMRVZCUVhkRVF5eFJRVUY0UkN4RlFVRnJSVU1zVDBGQmJFVXNVVUZCYVVZc1QwRkJha1k3UVVGRFFTeFBRVUZQUXl4TlFVRlFMRTFCUVcxQ0xGVkJRVzVDTzBGQk5rZEJMRFJDUVVGbFRpeExRVUZMTEVOQlFVTlBMRlZCUVU0c1EwRkRZaXhuUWtGQk1rTkRMRWRCUVRORExFVkJRVzFFTzBGQlFVRXNUVUZCYUVSRExGTkJRV2RFTEZGQlFXaEVRU3hUUVVGblJEdEJRVUZCTEUxQlFYSkRReXhMUVVGeFF5eFJRVUZ5UTBFc1MwRkJjVU03UVVGQlFTeE5RVUU1UWtNc1VVRkJPRUlzVVVGQk9VSkJMRkZCUVRoQ08wRkJRVUVzVFVGQmFrSkRMRXRCUVdsQ096dEJRVU5xUkVNc1JVRkJRVUVzVFVGQlRTeERRVUZEUXl4SlFVRlFMRWRCUVdORUxFMUJRVTBzUTBGQlEwTXNTVUZCVUN4SlFVRmxSQ3hOUVVGTkxFTkJRVU5GTEUxQlFYQkRPMEZCUTBFc1RVRkJUVU1zVFVGQlRTeEhRVUZIWml4TlFVRk5MRU5CUVdsQ0xFbEJRV3BDTEVOQlFYSkNPenRCUVVOQkxHZENRVUZ6UlVzc1RVRkJUVHRCUVVNeFJWY3NTVUZCUVVFc1UwRkJVeXhGUVVGRlJDeE5RVUZOTEVOQlFVTkZPMEZCUkhkRUxFdEJSWFpGVGl4TFFVWjFSU3hGUVVFMVJUdEJRVUZCTEUxQlFWRlBMRmxCUVZJc1YwRkJVVUVzV1VGQlVqdEJRVUZCTEUxQlFYTkNSaXhUUVVGMFFpeFhRVUZ6UWtFc1UwRkJkRUk3UVVGQlFTeE5RVUZwUTBjc1UwRkJha01zVjBGQmFVTkJMRk5CUVdwRE8wRkJRVUVzVFVGQk5FTkRMR2RDUVVFMVF5eFhRVUUwUTBFc1owSkJRVFZETzBGQlFVRXNUVUZCT0VSRExFZEJRVGxFTEZkQlFUaEVRU3hIUVVFNVJEczdRVUZKUVhCQ0xFVkJRVUZCTEZOQlFWTXNRMEZCUXp0QlFVRkJMRmRCUVUxcFFpeFpRVUZaTEVOQlFVTklMRTFCUVUwc1EwRkJRMFVzVDBGQlVpeERRVUZzUWp0QlFVRkJMRWRCUVVRc1JVRkJORVVzUTBGQlEwWXNUVUZCVFN4RFFVRkRSU3hQUVVGU0xFTkJRVFZGTEVOQlFWUTdRVUZEUVdJc1JVRkJRVUVzVDBGQlR5eERRVUZETzBGQlFVRXNWMEZCVFU4c1MwRkJTeXhEUVVGRFZ5eE5RVUZPTEVsQlFXZENTQ3hUUVVGVExFTkJRVU5TTEV0QlFVc3NRMEZCUTFjc1RVRkJVQ3hEUVVFdlFqdEJRVUZCTEVkQlFVUXNSVUZCYVVRc1EwRkJRMWdzUzBGQlN5eERRVUZEVnl4TlFVRlFMRU5CUVdwRUxFTkJRVkE3UVVGRFFYSkNMRVZCUVVGQkxGTkJRVk1zUTBGQlF6dEJRVUZCTEZkQlFVMXRRaXhuUWtGQlowSXNRMEZCUTFRc1MwRkJTeXhEUVVGRFdTeGhRVUZRTEVOQlFYUkNPMEZCUVVFc1IwRkJSQ3hGUVVFclF5eERRVUZEV2l4TFFVRkxMRU5CUVVOWkxHRkJRVkFzUTBGQkwwTXNRMEZCVkR0QlFVTkJja0lzUlVGQlFVRXNiVUpCUVcxQ0xFTkJRVU5MTEVkQlFVUXNSVUZCVFR0QlFVRkJMREpEUVVGWlNTeExRVUZhTzBGQlFXMUNWU3hOUVVGQlFTeEhRVUZITEVWQlFVaEJMRWRCUVc1Q08wRkJRWGRDVWl4TlFVRkJRU3hKUVVGSkxFVkJRVXBCTEVsQlFYaENPMEZCUVRoQ1J5eE5RVUZCUVN4VFFVRlRMRVZCUVVWRU8wRkJRWHBETzBGQlFVRXNSMEZCVGl4RlFVRXdSQ3hEUVVGRFRTeEhRVUZFTEVOQlFURkVMRU5CUVc1Q08wRkJRMEVzVFVGQlRVY3NUVUZCVFN4SFFVRkhla0lzUzBGQlN5eERRVUZETUVJc1VVRkJUaXhEUVVGbFF5eFBRVUZtTEVOQlFYVkNhRUlzVVVGQmRrSXNRMEZCWmp0QlFVTkJMSE5DUVVORkxHOUNRVUZETEZGQlFVUXNjVUpCUTBVN1FVRkJTeXhKUVVGQkxFZEJRVWNzUlVGQlJVc3NUVUZCVmp0QlFVRnJRaXhKUVVGQkxGTkJRVk1zUlVGQlJWQXNVMEZCTjBJN1FVRkJkME1zU1VGQlFTeExRVUZMTzBGQlFVbHRRaXhOUVVGQlFTeFJRVUZSTEVWQlFVVXNRMEZCWkR0QlFVRnBRa01zVFVGQlFVRXNUVUZCVFN4RlFVRkZPMEZCUVhwQ0xFOUJRVzlEYmtJc1MwRkJjRU03UVVGQk4wTXNTVUZFUml4RlFVVkhTU3hKUVVGSkxFbEJRVWxSTEVkQlFWSXNTVUZCWlN4UFFVRlBXQ3hSUVVGUUxFdEJRVzlDTEZWQlFXNURMRWxCUVdsRVFTeFJRVUZSTEVOQlFVTTdRVUZCUlVjc1NVRkJRVUVzU1VGQlNTeEZRVUZLUVN4SlFVRkdPMEZCUVZGUkxFbEJRVUZCTEVkQlFVY3NSVUZCU0VFc1IwRkJVanRCUVVGaFRDeEpRVUZCUVN4VFFVRlRMRVZCUVZSQk8wRkJRV0lzUjBGQlJDeERRVVkxUkN4RlFVZEhTQ3hKUVVGSkxFbEJRMGhSTEVkQlJFUXNTVUZGUTBjc1RVRkJUU3hEUVVGRFNDeEhRVUZRTEVOQlFWY3NWVUZCUTFFc1MwRkJSQ3hGUVVGWE8wRkJRM0JDTEZGQlFVa3NaVUZCUXpsQ0xFdEJRVXNzUTBGQlF5dENMR05CUVU0c1EwRkJjVUpFTEV0QlFYSkNMRU5CUVV3c1JVRkJhME03UVVGRGJFTXNkMEpCUVU4NVFpeExRVUZMTEVOQlFVTm5ReXhaUVVGT0xFTkJRVzFDUml4TFFVRnVRaXhyUTBGRFJrRXNTMEZCU3l4RFFVRkRiRUlzUzBGRVNqdEJRVVZNUlN4TlFVRkJRU3hKUVVGSkxFVkJRVXBCTEVsQlJrczdRVUZIVEZFc1RVRkJRVUVzUjBGQlJ5eEZRVUZJUVN4SFFVaExPMEZCU1V4TUxFMUJRVUZCTEZOQlFWTXNSVUZCVkVFN1FVRktTeXhQUVVGUU8wRkJUVVFzUjBGU1JDeERRVXhLTEVOQlJFWTdRVUZwUWtRc1EwRTVRbGtzUTBGQlppSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2THlBOGNtVm1aWEpsYm1ObElIUjVjR1Z6UFZ3aUxpNHZkSGx3WlhOY0lpQXZQbHh1WEc1cGJYQnZjblFnVW1WaFkzUXNJSHNnZFhObFVtVm1MQ0IxYzJWRlptWmxZM1FzSUhWelpVbHRjR1Z5WVhScGRtVklZVzVrYkdVc0lFWnlZV2R0Wlc1MExDQjFjMlZOWlcxdklIMGdabkp2YlNBbmNtVmhZM1FuTzF4dWFXMXdiM0owSUhWelpVMWhjQ0JtY205dElDY3VMM1Z6WlUxaGNDYzdYRzVjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnUTI5dWRISnZiQ0I3WEc0Z0lFTnZiblJ5YjJ3NklFSk5ZWEF1UTI5dWRISnZiRHRjYmlBZ1RtRjJhV2RoZEdsdmJrTnZiblJ5YjJ3NklFSk5ZWEF1VG1GMmFXZGhkR2x2YmtOdmJuUnliMnhQY0hScGIyNXpPMXh1SUNCUGRtVnlkbWxsZDAxaGNFTnZiblJ5YjJ3NklFSk5ZWEF1VDNabGNuWnBaWGROWVhCRGIyNTBjbTlzVDNCMGFXOXVjenRjYmlBZ1UyTmhiR1ZEYjI1MGNtOXNPaUJDVFdGd0xsTmpZV3hsUTI5dWRISnZiRTl3ZEdsdmJuTTdYRzRnSUUxaGNGUjVjR1ZEYjI1MGNtOXNPaUJDVFdGd0xrMWhjRlI1Y0dWRGIyNTBjbTlzVDNCMGFXOXVjenRjYmlBZ1EyOXdlWEpwWjJoMFEyOXVkSEp2YkRvZ1FrMWhjQzVEYjNCNWNtbG5hSFJEYjI1MGNtOXNUM0IwYVc5dWN6dGNiaUFnUjJWdmJHOWpZWFJwYjI1RGIyNTBjbTlzT2lCQ1RXRndMa2RsYjJ4dlkyRjBhVzl1UTI5dWRISnZiRTl3ZEdsdmJuTTdYRzU5WEc1Y2JtVjRjRzl5ZENCMGVYQmxJRU52Ym5SeWIyeFBjSFJwYjI1eklEMWNiaUFnZkNCN1hHNGdJQ0FnSUNCdVlXMWxPaUJyWlhsdlppQkRiMjUwY205c08xeHVJQ0FnSUNBZ2IzQjBhVzl1Y3o4NklDaGliV0Z3T2lCMGVYQmxiMllnUWsxaGNDd2diV0Z3T2lCQ1RXRndMazFoY0NrZ1BUNGdkbTlwWkR0Y2JpQWdJQ0FnSUdOdmJuUnliMncvS0dKdFlYQTZJSFI1Y0dWdlppQkNUV0Z3TENCdFlYQTZJRUpOWVhBdVRXRndLVG9nUWsxaGNDNURiMjUwY205c08xeHVJQ0FnSUgxY2JpQWdmQ0I3WEc0Z0lDQWdJQ0J1WVcxbE9pQnJaWGx2WmlCRGIyNTBjbTlzTzF4dUlDQWdJQ0FnYjNCMGFXOXVjejg2SUVOdmJuUnliMnhiYTJWNWIyWWdRMjl1ZEhKdmJGMDdYRzRnSUNBZ0lDQmpiMjUwY205c1B5aGliV0Z3T2lCMGVYQmxiMllnUWsxaGNDd2diV0Z3T2lCQ1RXRndMazFoY0NrNklFSk5ZWEF1UTI5dWRISnZiRHRjYmlBZ0lDQjlPMXh1WEc1bGVIQnZjblFnZEhsd1pTQkRiMjUwY205c1QzQjBhVzl1YzBGc2JDQTlJR3RsZVc5bUlFTnZiblJ5YjJ3Z2ZDQkRiMjUwY205c1QzQjBhVzl1Y3p0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQk5ZWEJRY205d2N5QmxlSFJsYm1SeklFSk5ZWEF1VFdGd1QzQjBhVzl1Y3l3Z1FrMWhjQzVOWVhCRmRtVnVkSE1nZTF4dUlDQmpiR0Z6YzA1aGJXVS9PaUJTWldGamRDNUlWRTFNUVhSMGNtbGlkWFJsY3p4SVZFMU1SR2wyUld4bGJXVnVkRDViSjJOc1lYTnpUbUZ0WlNkZE8xeHVJQ0J6ZEhsc1pUODZJRkpsWVdOMExraFVUVXhCZEhSeWFXSjFkR1Z6UEVoVVRVeEVhWFpGYkdWdFpXNTBQbHNuYzNSNWJHVW5YVHRjYmlBZ0x5b3FYRzRnSUNBcUlPZVp2dVc2cHVXY3NPV2J2dVM0aXVpMG4raTBvK1M0anVXY3NPV2J2dVM2cE9TNmt1ZWFoRlZKNVlXRDU3U2c1NmV3NUxpNjVvNm41THUyNDRDQ1hHNGdJQ0FxTDF4dUlDQjNhV1JuWlhRL09pQW9RMjl1ZEhKdmJFOXdkR2x2Ym5OQmJHd2dmQ0JEYjI1MGNtOXNUM0IwYVc5dWN5bGJYVHRjYmlBZ0x5b3FYRzRnSUNBcUlPZThxZWFVdnVldGllZTZwMXh1SUNBZ0tpOWNiaUFnZW05dmJUODZJRzUxYldKbGNqdGNiaUFnTHlvcVhHNGdJQ0FxSU9XdW11UzlqU3dnNVkrdjVMMi81NVNvNWFhQ0lHRGt1SXJtdGJmbHVJSmdJT2VhaE9XY3NPV011dVd0bCtlc3B1UzRzdSs4akZ4dUlDQWdLaURrdVovbGo2L2t1NlhrdmIvbmxLamxyN25vc2FIbHBvSWdZSHRzYm1jNklERXlNUzQwTWpRek16TXNJR3hoZERvZ016RXVNakk0TmpBMGZXQWc2S0dvNTZTNjU3dVA1N3FzNWJxbVhHNGdJQ0FxTDF4dUlDQmpaVzUwWlhJL09pQnpkSEpwYm1jZ2ZDQkNUV0Z3TGxCdmFXNTBPMXh1SUNBdktpcGNiaUFnSUNvZ1NWRGxycHJrdlkzb2pyZmxqNWJsdlpQbGlZM2xuNDdsdUlMdnZJem92NXZvb1l6b2g2cmxpcWpscnBya3ZZMWNiaUFnSUNvdlhHNGdJR0YxZEc5TWIyTmhiRU5wZEhrL09pQmliMjlzWldGdU8xeHVJQ0JqYUdsc1pISmxiajg2SUZKbFlXTjBMbEpsWVdOMFRtOWtaVHRjYmlBZ0x5b3FYRzRnSUNBcUlPV1FyK2VVcU9XY3NPV2J2dWFMbHVhTHZlKzhqT203bU9pdXBPV1FyK2VVcUZ4dUlDQWdLaTljYmlBZ1pXNWhZbXhsUkhKaFoyZHBibWMvT2lCaWIyOXNaV0Z1TzF4dUlDQXZLaXBjYmlBZ0lDb2c1WkN2NTVTbzVydWE2TDJ1NXBTKzVhU241N3lwNWJDUDc3eU02YnVZNks2azU2YUI1NVNvWEc0Z0lDQXFMMXh1SUNCbGJtRmliR1ZUWTNKdmJHeFhhR1ZsYkZwdmIyMC9PaUJpYjI5c1pXRnVPMXh1SUNBdktpcGNiaUFnSUNvZzVaQ3Y1NVNvNVkrTTVZZTc1cFMrNWFTbjc3eU02YnVZNks2azVaQ3Y1NVNvWEc0Z0lDQXFMMXh1SUNCbGJtRmliR1ZFYjNWaWJHVkRiR2xqYTFwdmIyMC9PaUJpYjI5c1pXRnVPMXh1SUNBdktpcGNiaUFnSUNvZzVaQ3Y1NVNvNVp5dzVadSs1b092NW9DbjVvdVc1b3U5Nzd5TTZidVk2SzZrNTZhQjU1U29YRzRnSUNBcUwxeHVJQ0JsYm1GaWJHVkpibVZ5ZEdsaGJFUnlZV2RuYVc1blB6b2dZbTl2YkdWaGJqdGNiaUFnTHlvcVhHNGdJQ0FxSU9XUXIrZVVxT2kvbnVlN3JlZThxZWFVdnVhVmlPYWVuTys4ak9tN21PaXVwT2VtZ2VlVXFGeHVJQ0FnS2k5Y2JpQWdaVzVoWW14bFEyOXVkR2x1ZFc5MWMxcHZiMjAvT2lCaWIyOXNaV0Z1TzF4dUlDQXZLaXBjYmlBZ0lDb2c1WkN2NTVTbzVZK001b3lINXBPTjVMMmM1N3lwNXBTKzc3eU02YnVZNks2azVaQ3Y1NVNvWEc0Z0lDQXFMMXh1SUNCbGJtRmliR1ZRYVc1amFGUnZXbTl2YlQ4NklHSnZiMnhsWVc0N1hHNGdJQzhxS2x4dUlDQWdLaURsa0svbmxLanBsSzdubTVqbWs0M2t2Wnp2dkl6cHU1am9ycVRucG9IbmxLampnSUxwbEs3bm01am5tb1RrdUlyamdJSGt1SXZqZ0lIbHQ2YmpnSUhsajdQcGxLN2xqNi9vdjU3bnU2M25wN3ZsaXFqbG5MRGxtNzdqZ0lMbGtJem1sN2Jtaklua3VJdmxoYmJrdUsza3VLVGt1S3JwbEs3bGo2L2t2Yi9sbkxEbG03N292NXZvb1l6bHI3bm9wNUxucDd2bGlxampnSUpjYmlBZ0lDb2dVR2RWY09PQWdWQm5SRzdqZ0lGSWIyMWw1WktNUlc1azZaU3U1THlhNUwyLzVaeXc1WnUrNWJtejU2ZTc1WVcyTVM4eTU1cUU1YVNuNWJDUDQ0Q0NLK09BZ1MzcGxLN2t2SnJrdmIvbG5MRGxtNzdtbEw3bHBLZm1pSmJudktubHNJL2t1SURudXFkY2JpQWdJQ292WEc0Z0lHVnVZV0pzWlV0bGVXSnZZWEprUHpvZ1ltOXZiR1ZoYmp0Y2JpQWdMeW9xWEc0Z0lDQXFJT2l1dnVlOXJ1V2NzT1didnVTNHF1YUFwK1dNbHVhZ3QrVzhqMVl5NTRtSTVweXM3N3lNNUx1RjVwU3Y1b3lCNTQ2dzVMdWo1cldQNktlSTVabW83N3lJNXBTdjVveUJRMkZ1ZG1Gejc3eUpYRzRnSUNBcUwxeHVJQ0J0WVhCVGRIbHNaVll5UHpvZ1FrMWhjQzVOWVhCVGRIbHNaVll5TzF4dUlDQXZLaXBjYmlBZ0lDb2c2SzYrNTcydTVaeXc1WnUrNVorTzViaUM3N3lNNXJPbzVvU1A1YjJUNVp5dzVadSs1WWlkNWFlTDVZeVc1cGUyNTVxRTU3Rzc1WjZMNks2KzU3MnU1TGk2SUdCQ1RVRlFYMDVQVWsxQlRGOU5RVkJnSU9hWHR1KzhqRnh1SUNBZ0tpRHBuSURvcG9IbG5Lam9zSVBubEtnZ1lHTmxiblJsY2tGdVpGcHZiMjFnSU9TNWkrV0pqZWl3ZytlVXFPYXRwT2FXdWVhemxlaXV2dWU5cnVXY3NPV2J2dWFKZ09XY3FPV2ZqdVc0Z3VPQWdseHVJQ0FnS2lEa3Zvdmxwb0x2dkpwY2JpQWdJQ29nUUdWNFlXMXdiR1ZjYmlBZ0lDcGNiaUFnSUNvZ1lHQmdhbk5jYmlBZ0lDb2dkbUZ5SUcxaGNDQTlJRzVsZHlCQ1RXRndMazFoY0NqaWdKeGpiMjUwWVdsdVpYTGlnSjBzSUhzZ2JXRndWSGx3WlRvZ1FrMUJVRjlPVDFKTlFVeGZUVUZRSUgwcE8xeHVJQ0FnS2lCdFlYQXVjMlYwUTNWeWNtVnVkRU5wZEhrbzRvQ2M1WXlYNUxxczViaUM0b0NkS1R0Y2JpQWdJQ29nYldGd0xtTmxiblJsY2tGdVpGcHZiMjBvYm1WM0lFSk5ZWEF1VUc5cGJuUW9NVEUyTGpRd05Dd2dNemt1T1RFMUtTd2dNVGdwTzF4dUlDQWdLaUJnWUdCY2JpQWdJQ3BjYmlBZ0lDb2c1ck9vNW9TUDc3eWE1WWlkNWFlTDVZeVc1NXFFNVoyUTVxQ0g1YnFVNUxpTzVvS282SzYrNTcydTU1cUU1WitPNWJpQzVhKzU1YnFVNzd5TTVaQ201WWlaNVp5dzVadSs1YkNHNXBlZzVyT1Y1cTJqNWJpNDVwaSs1NlM2NDRDQ1hHNGdJQ0FxTDF4dUlDQmpkWEp5Wlc1MFEybDBlVDg2SUhOMGNtbHVaenRjYmlBZ0x5b3FYRzRnSUNBcUlPV3dodVdGcU9hWnIrV3VudVMraStTNGprMWhjT2V4dStpL20raWhqT2U3a2VXdW1seHVJQ0FnS2k5Y2JpQWdjR0Z1YjNKaGJXRS9PaUJDVFdGd0xsQmhibTl5WVcxaE8xeHVYRzRnSUhacFpYZHdiM0owUHpvZ0tIWnBaWGM2SUVGeWNtRjVQRUpOWVhBdVVHOXBiblErSUh3Z1FrMWhjQzVXYVdWM2NHOXlkQ3dnZG1sbGQzQnZjblJQY0hScGIyNXpPaUJDVFdGd0xsWnBaWGR3YjNKMFQzQjBhVzl1Y3lrZ1BUNGdkbTlwWkR0Y2JuMWNibHh1Wlhod2IzSjBJSFI1Y0dVZ1RXRndRMmhwYkdSU1pXNWtaWEpRY205d2N5QTlYRzRnSUh3Z2UxeHVJQ0FnSUNBZ1kyaHBiR1J5Wlc0L09pQW9aR0YwWVRvZ2V5QkNUV0Z3T2lCMGVYQmxiMllnUWsxaGNEc2diV0Z3T2lCQ1RXRndMazFoY0RzZ1kyOXVkR0ZwYm1WeVB6b2djM1J5YVc1bklId2dTRlJOVEVScGRrVnNaVzFsYm5RZ2ZDQnVkV3hzSUgwcElEMCtJSFp2YVdRN1hHNGdJQ0FnZlZ4dUlDQjhJSHNnWTJocGJHUnlaVzQvT2lCU1pXRmpkQzVTWldGamRFNXZaR1VnZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1VtVmhZM1F1Wm05eWQyRnlaRkpsWmp4TllYQlFjbTl3Y3lBbUlIc2diV0Z3UHpvZ1FrMWhjQzVOWVhBZ2ZTd2dUV0Z3VUhKdmNITWdKaUJOWVhCRGFHbHNaRkpsYm1SbGNsQnliM0J6UGloY2JpQWdLSHNnWTJ4aGMzTk9ZVzFsTENCemRIbHNaU3dnWTJocGJHUnlaVzRzSUM0dUxuQnliM0J6SUgwc0lISmxaaWtnUFQ0Z2UxeHVJQ0FnSUhkcGJtUnZkeTVDVFdGd0lEMGdkMmx1Wkc5M0xrSk5ZWEFnZkh3Z2QybHVaRzkzTGtKTllYQkhURHRjYmlBZ0lDQmpiMjV6ZENCbGJHMVNaV1lnUFNCMWMyVlNaV1k4U0ZSTlRFUnBka1ZzWlcxbGJuUStLRzUxYkd3cE8xeHVJQ0FnSUdOdmJuTjBJSHNnYzJWMFEyOXVkR0ZwYm1WeUxDQmpiMjUwWVdsdVpYSXNJSE5sZEVObGJuUmxjaXdnYzJWMFFYVjBiMHh2WTJGc1EybDBlU3dnYldGd0lIMGdQU0IxYzJWTllYQW9lMXh1SUNBZ0lDQWdZMjl1ZEdGcGJtVnlPaUJsYkcxU1pXWXVZM1Z5Y21WdWRDQmhjeUJ6ZEhKcGJtY2dmQ0JJVkUxTVJHbDJSV3hsYldWdWRDeGNiaUFnSUNBZ0lDNHVMbkJ5YjNCekxGeHVJQ0FnSUgwcE8xeHVJQ0FnSUhWelpVVm1abVZqZENnb0tTQTlQaUJ6WlhSRGIyNTBZV2x1WlhJb1pXeHRVbVZtTG1OMWNuSmxiblFnWVhNZ2MzUnlhVzVuSUh3Z1NGUk5URVJwZGtWc1pXMWxiblFnZkNCMWJtUmxabWx1WldRcExDQmJaV3h0VW1WbUxtTjFjbkpsYm5SZEtUdGNiaUFnSUNCMWMyVk5aVzF2S0NncElEMCtJSEJ5YjNCekxtTmxiblJsY2lBbUppQnpaWFJEWlc1MFpYSW9jSEp2Y0hNdVkyVnVkR1Z5SVNrc0lGdHdjbTl3Y3k1alpXNTBaWEpkS1R0Y2JpQWdJQ0IxYzJWRlptWmxZM1FvS0NrZ1BUNGdjMlYwUVhWMGIweHZZMkZzUTJsMGVTaHdjbTl3Y3k1aGRYUnZURzlqWVd4RGFYUjVJU2tzSUZ0d2NtOXdjeTVoZFhSdlRHOWpZV3hEYVhSNVhTazdYRzRnSUNBZ2RYTmxTVzF3WlhKaGRHbDJaVWhoYm1Sc1pTaHlaV1lzSUNncElEMCtJQ2g3SUM0dUxuQnliM0J6TENCdFlYQXNJRUpOWVhBc0lHTnZiblJoYVc1bGNqb2daV3h0VW1WbUlIMHBMQ0JiYldGd1hTazdYRzRnSUNBZ1kyOXVjM1FnWTJocGJHUnpJRDBnVW1WaFkzUXVRMmhwYkdSeVpXNHVkRzlCY25KaGVTaGphR2xzWkhKbGJpazdYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUR4R2NtRm5iV1Z1ZEQ1Y2JpQWdJQ0FnSUNBZ1BHUnBkaUJ5WldZOWUyVnNiVkpsWm4wZ1kyeGhjM05PWVcxbFBYdGpiR0Z6YzA1aGJXVjlJSE4wZVd4bFBYdDdJR1p2Ym5SVGFYcGxPaUF4TENCb1pXbG5hSFE2SUNjeE1EQWxKeXdnTGk0dWMzUjViR1VnZlgwZ0x6NWNiaUFnSUNBZ0lDQWdlMEpOWVhBZ0ppWWdiV0Z3SUNZbUlIUjVjR1Z2WmlCamFHbHNaSEpsYmlBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCamFHbHNaSEpsYmloN0lFSk5ZWEFzSUcxaGNDd2dZMjl1ZEdGcGJtVnlJSDBwZlZ4dUlDQWdJQ0FnSUNCN1FrMWhjQ0FtSmx4dUlDQWdJQ0FnSUNBZ0lHMWhjQ0FtSmx4dUlDQWdJQ0FnSUNBZ0lHTm9hV3hrY3k1dFlYQW9LR05vYVd4a0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVZKbFlXTjBMbWx6Vm1Gc2FXUkZiR1Z0Wlc1MEtHTm9hV3hrS1NrZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlGSmxZV04wTG1Oc2IyNWxSV3hsYldWdWRDaGphR2xzWkN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBdUxpNWphR2xzWkM1d2NtOXdjeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdRazFoY0N4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYldGd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNTBZV2x1WlhJc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ0lDQjlLWDFjYmlBZ0lDQWdJRHd2Um5KaFoyMWxiblErWEc0Z0lDQWdLVHRjYmlBZ2ZTeGNiaWs3WEc0aVhYMD0iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSAnLi9ob29rcyc7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGRpdiA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXREaXYgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIHBvcnRhbCA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRQb3J0YWwgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoMCksXG4gICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICBjb3VudCA9IF91c2VTdGF0ZTZbMF0sXG4gICAgICBzZXRDb3VudCA9IF91c2VTdGF0ZTZbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTcgPSB1c2VTdGF0ZShwcm9wcy5jaGlsZHJlbiksXG4gICAgICBfdXNlU3RhdGU4ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNywgMiksXG4gICAgICBjaGlsZHJlbiA9IF91c2VTdGF0ZThbMF0sXG4gICAgICBzZXRDaGlsZHJlbiA9IF91c2VTdGF0ZThbMV07XG5cbiAgdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwb3J0YWwpIHtcbiAgICAgIHZhciBwb3J0YWxJbnN0YW5jZSA9IC8qI19fUFVSRV9fKi9SZWFjdERPTS5jcmVhdGVQb3J0YWwoY2hpbGRyZW4sIGRpdik7XG4gICAgICBzZXRDb3VudChjb3VudCArIDEpO1xuICAgICAgc2V0UG9ydGFsKHBvcnRhbEluc3RhbmNlKTtcbiAgICB9XG4gIH0sIFtwb3J0YWxdKTtcbiAgdmFyIHByZXZDb3VudCA9IHVzZVByZXZpb3VzKGNvdW50KTtcbiAgdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGRpdiAmJiBjaGlsZHJlbiAmJiBjb3VudCA9PT0gcHJldkNvdW50ICYmIGNvdW50ID4gMCkge1xuICAgICAgdmFyIHBvcnRhbEluc3RhbmNlID0gLyojX19QVVJFX18qL1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgZGl2KTtcbiAgICAgIHNldENvdW50KGNvdW50ICsgMSk7XG4gICAgICBzZXRQb3J0YWwocG9ydGFsSW5zdGFuY2UpO1xuICAgIH1cbiAgfSwgW2NoaWxkcmVuLCBkaXYsIHBvcnRhbF0pO1xuICByZXR1cm4ge1xuICAgIGRpdjogZGl2LFxuICAgIHNldERpdjogc2V0RGl2LFxuICAgIHBvcnRhbDogcG9ydGFsLFxuICAgIHNldFBvcnRhbDogc2V0UG9ydGFsLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBzZXRDaGlsZHJlbjogc2V0Q2hpbGRyZW5cbiAgfTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OWpiMjF0YjI0dmRYTmxRM0psWVhSbFVHOXlkR0ZzTG5SemVDSmRMQ0p1WVcxbGN5STZXeUoxYzJWTlpXMXZJaXdpZFhObFUzUmhkR1VpTENKU1pXRmpkRVJQVFNJc0luVnpaVkJ5WlhacGIzVnpJaXdpY0hKdmNITWlMQ0prYjJOMWJXVnVkQ0lzSW1OeVpXRjBaVVZzWlcxbGJuUWlMQ0prYVhZaUxDSnpaWFJFYVhZaUxDSndiM0owWVd3aUxDSnpaWFJRYjNKMFlXd2lMQ0pqYjNWdWRDSXNJbk5sZEVOdmRXNTBJaXdpWTJocGJHUnlaVzRpTENKelpYUkRhR2xzWkhKbGJpSXNJbkJ2Y25SaGJFbHVjM1JoYm1ObElpd2lZM0psWVhSbFVHOXlkR0ZzSWl3aWNISmxka052ZFc1MElsMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNVMEZCVTBFc1QwRkJWQ3hGUVVGclFrTXNVVUZCYkVJc1VVRkJhME1zVDBGQmJFTTdRVUZEUVN4UFFVRlBReXhSUVVGUUxFMUJRWEZDTEZkQlFYSkNPMEZCUTBFc1UwRkJVME1zVjBGQlZDeFJRVUUwUWl4VFFVRTFRanRCUVZOQkxHZENRVUZsTEZsQlFXMURPMEZCUVVFc1RVRkJiRU5ETEV0QlFXdERMSFZGUVVFeFFpeEZRVUV3UWpzN1FVRkRhRVFzYTBKQlFYTkNTQ3hSUVVGUkxFTkJRV2xDU1N4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSXNTMEZCZGtJc1EwRkJha0lzUTBGQk9VSTdRVUZCUVR0QlFVRkJMRTFCUVU5RExFZEJRVkE3UVVGQlFTeE5RVUZaUXl4TlFVRmFPenRCUVVOQkxHMUNRVUUwUWxBc1VVRkJVU3hGUVVGd1F6dEJRVUZCTzBGQlFVRXNUVUZCVDFFc1RVRkJVRHRCUVVGQkxFMUJRV1ZETEZOQlFXWTdPMEZCUTBFc2JVSkJRVEJDVkN4UlFVRlJMRU5CUVVNc1EwRkJSQ3hEUVVGc1F6dEJRVUZCTzBGQlFVRXNUVUZCVDFVc1MwRkJVRHRCUVVGQkxFMUJRV05ETEZGQlFXUTdPMEZCUTBFc2JVSkJRV2REV0N4UlFVRlJMRU5CUVVOSExFdEJRVXNzUTBGQlExTXNVVUZCVUN4RFFVRjRRenRCUVVGQk8wRkJRVUVzVFVGQlQwRXNVVUZCVUR0QlFVRkJMRTFCUVdsQ1F5eFhRVUZxUWpzN1FVRkRRV1FzUlVGQlFVRXNUMEZCVHl4RFFVRkRMRmxCUVUwN1FVRkRXaXhSUVVGSkxFTkJRVU5UTEUxQlFVd3NSVUZCWVR0QlFVTllMRlZCUVUxTkxHTkJRV01zWjBKQlFVZGlMRkZCUVZFc1EwRkJRMk1zV1VGQlZDeERRVUZ6UWtnc1VVRkJkRUlzUlVGQlowTk9MRWRCUVdoRExFTkJRWFpDTzBGQlEwRkxMRTFCUVVGQkxGRkJRVkVzUTBGQlEwUXNTMEZCU3l4SFFVRkhMRU5CUVZRc1EwRkJVanRCUVVOQlJDeE5RVUZCUVN4VFFVRlRMRU5CUVVOTExHTkJRVVFzUTBGQlZEdEJRVU5FTzBGQlEwWXNSMEZPVFN4RlFVMUtMRU5CUVVOT0xFMUJRVVFzUTBGT1NTeERRVUZRTzBGQlVVRXNUVUZCVFZFc1UwRkJVeXhIUVVGSFpDeFhRVUZYTEVOQlFVTlJMRXRCUVVRc1EwRkJOMEk3UVVGRFFWZ3NSVUZCUVVFc1QwRkJUeXhEUVVGRExGbEJRVTA3UVVGRFdpeFJRVUZKVHl4SFFVRkhMRWxCUVVsTkxGRkJRVkFzU1VGQmJVSkdMRXRCUVVzc1MwRkJTMDBzVTBGQk4wSXNTVUZCTUVOT0xFdEJRVXNzUjBGQlJ5eERRVUYwUkN4RlFVRjVSRHRCUVVOMlJDeFZRVUZOU1N4alFVRmpMR2RDUVVGSFlpeFJRVUZSTEVOQlFVTmpMRmxCUVZRc1EwRkJjMEpJTEZGQlFYUkNMRVZCUVdkRFRpeEhRVUZvUXl4RFFVRjJRanRCUVVOQlN5eE5RVUZCUVN4UlFVRlJMRU5CUVVORUxFdEJRVXNzUjBGQlJ5eERRVUZVTEVOQlFWSTdRVUZEUVVRc1RVRkJRVUVzVTBGQlV5eERRVUZEU3l4alFVRkVMRU5CUVZRN1FVRkRSRHRCUVVOR0xFZEJUazBzUlVGTlNpeERRVUZEUml4UlFVRkVMRVZCUVZkT0xFZEJRVmdzUlVGQlowSkZMRTFCUVdoQ0xFTkJUa2tzUTBGQlVEdEJRVkZCTEZOQlFVODdRVUZEVEVZc1NVRkJRVUVzUjBGQlJ5eEZRVUZJUVN4SFFVUkxPMEZCUlV4RExFbEJRVUZCTEUxQlFVMHNSVUZCVGtFc1RVRkdTenRCUVVkTVF5eEpRVUZCUVN4TlFVRk5MRVZCUVU1QkxFMUJTRXM3UVVGSlRFTXNTVUZCUVVFc1UwRkJVeXhGUVVGVVFTeFRRVXBMTzBGQlMweEhMRWxCUVVGQkxGRkJRVkVzUlVGQlVrRXNVVUZNU3p0QlFVMU1ReXhKUVVGQlFTeFhRVUZYTEVWQlFWaEJPMEZCVGtzc1IwRkJVRHRCUVZGRUxFTkJPVUpFSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2RYTmxUV1Z0Ynl3Z2RYTmxVM1JoZEdVZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnVW1WaFkzUkVUMDBnWm5KdmJTQW5jbVZoWTNRdFpHOXRKenRjYm1sdGNHOXlkQ0I3SUhWelpWQnlaWFpwYjNWeklIMGdabkp2YlNBbkxpOW9iMjlyY3ljN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdWWE5sUTNKbFlYUmxVRzl5ZEdGc0lIdGNiaUFnTHlvcVhHNGdJQ0FxSU9pSHF1V3VtdVM1aVNCRVQwMGc1WVdENTdTZzQ0Q0NYRzRnSUNBcUwxeHVJQ0JqYUdsc1pISmxiajg2SUZKbFlXTjBMbEpsWVdOMFRtOWtaVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6SUQwZ2UzMGdZWE1nVlhObFEzSmxZWFJsVUc5eWRHRnNLU0E5UGlCN1hHNGdJR052Ym5OMElGdGthWFlzSUhObGRFUnBkbDBnUFNCMWMyVlRkR0YwWlR4SVZFMU1SR2wyUld4bGJXVnVkRDRvWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrcE8xeHVJQ0JqYjI1emRDQmJjRzl5ZEdGc0xDQnpaWFJRYjNKMFlXeGRJRDBnZFhObFUzUmhkR1U4VW1WaFkzUXVVbVZoWTNSUWIzSjBZV3crS0NrN1hHNGdJR052Ym5OMElGdGpiM1Z1ZEN3Z2MyVjBRMjkxYm5SZElEMGdkWE5sVTNSaGRHVW9NQ2s3WEc0Z0lHTnZibk4wSUZ0amFHbHNaSEpsYml3Z2MyVjBRMmhwYkdSeVpXNWRJRDBnZFhObFUzUmhkR1VvY0hKdmNITXVZMmhwYkdSeVpXNHBPMXh1SUNCMWMyVk5aVzF2S0NncElEMCtJSHRjYmlBZ0lDQnBaaUFvSVhCdmNuUmhiQ2tnZTF4dUlDQWdJQ0FnWTI5dWMzUWdjRzl5ZEdGc1NXNXpkR0Z1WTJVZ1BTQlNaV0ZqZEVSUFRTNWpjbVZoZEdWUWIzSjBZV3dvWTJocGJHUnlaVzRzSUdScGRpazdYRzRnSUNBZ0lDQnpaWFJEYjNWdWRDaGpiM1Z1ZENBcklERXBPMXh1SUNBZ0lDQWdjMlYwVUc5eWRHRnNLSEJ2Y25SaGJFbHVjM1JoYm1ObEtUdGNiaUFnSUNCOVhHNGdJSDBzSUZ0d2IzSjBZV3hkS1R0Y2JseHVJQ0JqYjI1emRDQndjbVYyUTI5MWJuUWdQU0IxYzJWUWNtVjJhVzkxY3loamIzVnVkQ2s3WEc0Z0lIVnpaVTFsYlc4b0tDa2dQVDRnZTF4dUlDQWdJR2xtSUNoa2FYWWdKaVlnWTJocGJHUnlaVzRnSmlZZ1kyOTFiblFnUFQwOUlIQnlaWFpEYjNWdWRDQW1KaUJqYjNWdWRDQStJREFwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSEJ2Y25SaGJFbHVjM1JoYm1ObElEMGdVbVZoWTNSRVQwMHVZM0psWVhSbFVHOXlkR0ZzS0dOb2FXeGtjbVZ1TENCa2FYWXBPMXh1SUNBZ0lDQWdjMlYwUTI5MWJuUW9ZMjkxYm5RZ0t5QXhLVHRjYmlBZ0lDQWdJSE5sZEZCdmNuUmhiQ2h3YjNKMFlXeEpibk4wWVc1alpTazdYRzRnSUNBZ2ZWeHVJQ0I5TENCYlkyaHBiR1J5Wlc0c0lHUnBkaXdnY0c5eWRHRnNYU2s3WEc1Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCa2FYWXNYRzRnSUNBZ2MyVjBSR2wyTEZ4dUlDQWdJSEJ2Y25SaGJDeGNiaUFnSUNCelpYUlFiM0owWVd3c1hHNGdJQ0FnWTJocGJHUnlaVzRzWEc0Z0lDQWdjMlYwUTJocGJHUnlaVzRzWEc0Z0lIMDdYRzU5TzF4dUlsMTkiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVByb3BlcnRpZXMsIHVzZVZpc2lhYmxlIH0gZnJvbSAnLi4vY29tbW9uL2hvb2tzJztcbmltcG9ydCB1c2VDcmVhdGVQb3J0YWwgZnJvbSAnLi4vY29tbW9uL3VzZUNyZWF0ZVBvcnRhbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDb3B5cmlnaHRDb250cm9sKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBfdXNlQ3JlYXRlUG9ydGFsID0gdXNlQ3JlYXRlUG9ydGFsKHtcbiAgICBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW5cbiAgfSksXG4gICAgICBwb3J0YWwgPSBfdXNlQ3JlYXRlUG9ydGFsLnBvcnRhbCxcbiAgICAgIHNldFBvcnRhbCA9IF91c2VDcmVhdGVQb3J0YWwuc2V0UG9ydGFsO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBjb3B5cmlnaHRDb250cm9sID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldENvcHlyaWdodENvbnRyb2wgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBtYXAgPSBwcm9wcy5tYXAsXG4gICAgICBhbmNob3IgPSBwcm9wcy5hbmNob3IsXG4gICAgICBvZmZzZXQgPSBwcm9wcy5vZmZzZXQ7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG1hcCAmJiAhY29weXJpZ2h0Q29udHJvbCkge1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IEJNYXAuQ29weXJpZ2h0Q29udHJvbCh7XG4gICAgICAgIGFuY2hvcjogYW5jaG9yIHx8IEJNQVBfQU5DSE9SX1RPUF9SSUdIVCxcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXRcbiAgICAgIH0pO1xuICAgICAgbWFwLmFkZENvbnRyb2woaW5zdGFuY2UpO1xuICAgICAgc2V0Q29weXJpZ2h0Q29udHJvbChpbnN0YW5jZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtYXAgJiYgY29weXJpZ2h0Q29udHJvbCkge1xuICAgICAgICBtYXAucmVtb3ZlQ29udHJvbChjb3B5cmlnaHRDb250cm9sKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbbWFwLCBjb3B5cmlnaHRDb250cm9sLCBhbmNob3IsIG9mZnNldF0pO1xuICB1c2VWaXNpYWJsZShjb3B5cmlnaHRDb250cm9sLCBwcm9wcyk7XG4gIHVzZVByb3BlcnRpZXMoY29weXJpZ2h0Q29udHJvbCwgcHJvcHMsIFsnQW5jaG9yJywgJ09mZnNldCddKTtcbiAgcmV0dXJuIHtcbiAgICBwb3J0YWw6IHBvcnRhbCxcbiAgICBzZXRQb3J0YWw6IHNldFBvcnRhbCxcbiAgICBjb3B5cmlnaHRDb250cm9sOiBjb3B5cmlnaHRDb250cm9sLFxuICAgIHNldENvcHlyaWdodENvbnRyb2w6IHNldENvcHlyaWdodENvbnRyb2xcbiAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlEYjNCNWNtbG5hSFJEYjI1MGNtOXNMM1Z6WlVOdmNIbHlhV2RvZEVOdmJuUnliMnd1ZEhONElsMHNJbTVoYldWeklqcGJJblZ6WlVWbVptVmpkQ0lzSW5WelpWTjBZWFJsSWl3aWRYTmxVSEp2Y0dWeWRHbGxjeUlzSW5WelpWWnBjMmxoWW14bElpd2lkWE5sUTNKbFlYUmxVRzl5ZEdGc0lpd2lkWE5sUTI5d2VYSnBaMmgwUTI5dWRISnZiQ0lzSW5CeWIzQnpJaXdpWTJocGJHUnlaVzRpTENKd2IzSjBZV3dpTENKelpYUlFiM0owWVd3aUxDSmpiM0I1Y21sbmFIUkRiMjUwY205c0lpd2ljMlYwUTI5d2VYSnBaMmgwUTI5dWRISnZiQ0lzSW0xaGNDSXNJbUZ1WTJodmNpSXNJbTltWm5ObGRDSXNJbWx1YzNSaGJtTmxJaXdpUWsxaGNDSXNJa052Y0hseWFXZG9kRU52Ym5SeWIyd2lMQ0pDVFVGUVgwRk9RMGhQVWw5VVQxQmZVa2xIU0ZRaUxDSmhaR1JEYjI1MGNtOXNJaXdpY21WdGIzWmxRMjl1ZEhKdmJDSmRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRk5CUVZOQkxGTkJRVlFzUlVGQmIwSkRMRkZCUVhCQ0xGRkJRVzlETEU5QlFYQkRPMEZCUlVFc1UwRkJVME1zWVVGQlZDeEZRVUYzUWtNc1YwRkJlRUlzVVVGQk1rTXNhVUpCUVRORE8wRkJRMEVzVDBGQlQwTXNaVUZCVUN4TlFVRTBRaXd5UWtGQk5VSTdRVUZKUVN4bFFVRmxMRk5CUVZORExHMUNRVUZVTEVkQlFXZEZPMEZCUVVFc1RVRkJia05ETEV0QlFXMURMSFZGUVVFelFpeEZRVUV5UWpzN1FVRkROMFVzZVVKQlFUaENSaXhsUVVGbExFTkJRVU03UVVGQlJVY3NTVUZCUVVFc1VVRkJVU3hGUVVGRlJDeExRVUZMTEVOQlFVTkRPMEZCUVd4Q0xFZEJRVVFzUTBGQk4wTTdRVUZCUVN4TlFVRlJReXhOUVVGU0xHOUNRVUZSUVN4TlFVRlNPMEZCUVVFc1RVRkJaMEpETEZOQlFXaENMRzlDUVVGblFrRXNVMEZCYUVJN08wRkJRMEVzYTBKQlFXZEVVaXhSUVVGUkxFVkJRWGhFTzBGQlFVRTdRVUZCUVN4TlFVRlBVeXhuUWtGQlVEdEJRVUZCTEUxQlFYbENReXh0UWtGQmVrSTdPMEZCUTBFc1RVRkJVVU1zUjBGQlVpeEhRVUZuUTA0c1MwRkJhRU1zUTBGQlVVMHNSMEZCVWp0QlFVRkJMRTFCUVdGRExFMUJRV0lzUjBGQlowTlFMRXRCUVdoRExFTkJRV0ZQTEUxQlFXSTdRVUZCUVN4TlFVRnhRa01zVFVGQmNrSXNSMEZCWjBOU0xFdEJRV2hETEVOQlFYRkNVU3hOUVVGeVFqdEJRVU5CWkN4RlFVRkJRU3hUUVVGVExFTkJRVU1zV1VGQlRUdEJRVU5rTEZGQlFVbFpMRWRCUVVjc1NVRkJTU3hEUVVGRFJpeG5Ra0ZCV2l4RlFVRTRRanRCUVVNMVFpeFZRVUZOU3l4UlFVRlJMRWRCUVVjc1NVRkJTVU1zU1VGQlNTeERRVUZEUXl4blFrRkJWQ3hEUVVFd1FqdEJRVU42UTBvc1VVRkJRVUVzVFVGQlRTeEZRVUZGUVN4TlFVRk5MRWxCUVVsTExIRkNRVVIxUWp0QlFVVjZRMG9zVVVGQlFVRXNUVUZCVFN4RlFVRk9RVHRCUVVaNVF5eFBRVUV4UWl4RFFVRnFRanRCUVVsQlJpeE5RVUZCUVN4SFFVRkhMRU5CUVVOUExGVkJRVW9zUTBGQlpVb3NVVUZCWmp0QlFVTkJTaXhOUVVGQlFTeHRRa0ZCYlVJc1EwRkJRMGtzVVVGQlJDeERRVUZ1UWp0QlFVTkVPenRCUVVORUxGZEJRVThzV1VGQlRUdEJRVU5ZTEZWQlFVbElMRWRCUVVjc1NVRkJTVVlzWjBKQlFWZ3NSVUZCTmtJN1FVRkRNMEpGTEZGQlFVRkJMRWRCUVVjc1EwRkJRMUVzWVVGQlNpeERRVUZyUWxZc1owSkJRV3hDTzBGQlEwUTdRVUZEUml4TFFVcEVPMEZCUzBRc1IwRmtVU3hGUVdOT0xFTkJRVU5GTEVkQlFVUXNSVUZCVFVZc1owSkJRVTRzUlVGQmQwSkhMRTFCUVhoQ0xFVkJRV2REUXl4TlFVRm9ReXhEUVdSTkxFTkJRVlE3UVVGblFrRllMRVZCUVVGQkxGZEJRVmNzUTBGQlEwOHNaMEpCUVVRc1JVRkJiMEpLTEV0QlFYQkNMRU5CUVZnN1FVRkRRVW9zUlVGQlFVRXNZVUZCWVN4RFFVRTJRMUVzWjBKQlFUZERMRVZCUVdkRlNpeExRVUZvUlN4RlFVRjFSU3hEUVVGRExGRkJRVVFzUlVGQlZ5eFJRVUZZTEVOQlFYWkZMRU5CUVdJN1FVRkZRU3hUUVVGUE8wRkJRMHhGTEVsQlFVRkJMRTFCUVUwc1JVRkJUa0VzVFVGRVN6dEJRVVZNUXl4SlFVRkJRU3hUUVVGVExFVkJRVlJCTEZOQlJrczdRVUZIVEVNc1NVRkJRVUVzWjBKQlFXZENMRVZCUVdoQ1FTeG5Ra0ZJU3p0QlFVbE1ReXhKUVVGQlFTeHRRa0ZCYlVJc1JVRkJia0pCTzBGQlNrc3NSMEZCVUR0QlFVMUVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnZFhObFJXWm1aV04wTENCMWMyVlRkR0YwWlNCOUlHWnliMjBnSjNKbFlXTjBKenRjYm1sdGNHOXlkQ0I3SUVOdmNIbHlhV2RvZEVOdmJuUnliMnhRY205d2N5QjlJR1p5YjIwZ0p5NHZKenRjYm1sdGNHOXlkQ0I3SUhWelpWQnliM0JsY25ScFpYTXNJSFZ6WlZacGMybGhZbXhsSUgwZ1puSnZiU0FuTGk0dlkyOXRiVzl1TDJodmIydHpKenRjYm1sdGNHOXlkQ0IxYzJWRGNtVmhkR1ZRYjNKMFlXd2dabkp2YlNBbkxpNHZZMjl0Ylc5dUwzVnpaVU55WldGMFpWQnZjblJoYkNjN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdWWE5sUTI5d2VYSnBaMmgwUTI5dWRISnZiQ0JsZUhSbGJtUnpJRU52Y0hseWFXZG9kRU52Ym5SeWIyeFFjbTl3Y3lCN2ZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQjFjMlZEYjNCNWNtbG5hSFJEYjI1MGNtOXNLSEJ5YjNCeklEMGdlMzBnWVhNZ1ZYTmxRMjl3ZVhKcFoyaDBRMjl1ZEhKdmJDa2dlMXh1SUNCamIyNXpkQ0I3SUhCdmNuUmhiQ3dnYzJWMFVHOXlkR0ZzSUgwZ1BTQjFjMlZEY21WaGRHVlFiM0owWVd3b2V5QmphR2xzWkhKbGJqb2djSEp2Y0hNdVkyaHBiR1J5Wlc0Z2ZTazdYRzRnSUdOdmJuTjBJRnRqYjNCNWNtbG5hSFJEYjI1MGNtOXNMQ0J6WlhSRGIzQjVjbWxuYUhSRGIyNTBjbTlzWFNBOUlIVnpaVk4wWVhSbFBFSk5ZWEF1UTI5d2VYSnBaMmgwUTI5dWRISnZiRDRvS1R0Y2JpQWdZMjl1YzNRZ2V5QnRZWEFzSUdGdVkyaHZjaXdnYjJabWMyVjBJSDBnUFNCd2NtOXdjenRjYmlBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0JwWmlBb2JXRndJQ1ltSUNGamIzQjVjbWxuYUhSRGIyNTBjbTlzS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0JwYm5OMFlXNWpaU0E5SUc1bGR5QkNUV0Z3TGtOdmNIbHlhV2RvZEVOdmJuUnliMndvZTF4dUlDQWdJQ0FnSUNCaGJtTm9iM0k2SUdGdVkyaHZjaUI4ZkNCQ1RVRlFYMEZPUTBoUFVsOVVUMUJmVWtsSFNGUXNYRzRnSUNBZ0lDQWdJRzltWm5ObGRDeGNiaUFnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdiV0Z3TG1Ga1pFTnZiblJ5YjJ3b2FXNXpkR0Z1WTJVcE8xeHVJQ0FnSUNBZ2MyVjBRMjl3ZVhKcFoyaDBRMjl1ZEhKdmJDaHBibk4wWVc1alpTazdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUFvS1NBOVBpQjdYRzRnSUNBZ0lDQnBaaUFvYldGd0lDWW1JR052Y0hseWFXZG9kRU52Ym5SeWIyd3BJSHRjYmlBZ0lDQWdJQ0FnYldGd0xuSmxiVzkyWlVOdmJuUnliMndvWTI5d2VYSnBaMmgwUTI5dWRISnZiQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmlBZ2ZTd2dXMjFoY0N3Z1kyOXdlWEpwWjJoMFEyOXVkSEp2YkN3Z1lXNWphRzl5TENCdlptWnpaWFJkS1R0Y2JseHVJQ0IxYzJWV2FYTnBZV0pzWlNoamIzQjVjbWxuYUhSRGIyNTBjbTlzSVN3Z2NISnZjSE1wTzF4dUlDQjFjMlZRY205d1pYSjBhV1Z6UEVKTllYQXVRMjl3ZVhKcFoyaDBRMjl1ZEhKdmJDd2dWWE5sUTI5d2VYSnBaMmgwUTI5dWRISnZiRDRvWTI5d2VYSnBaMmgwUTI5dWRISnZiQ0VzSUhCeWIzQnpMQ0JiSjBGdVkyaHZjaWNzSUNkUFptWnpaWFFuWFNrN1hHNWNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQndiM0owWVd3c1hHNGdJQ0FnYzJWMFVHOXlkR0ZzTEZ4dUlDQWdJR052Y0hseWFXZG9kRU52Ym5SeWIyd3NYRzRnSUNBZ2MyVjBRMjl3ZVhKcFoyaDBRMjl1ZEhKdmJDeGNiaUFnZlR0Y2JuMWNiaUpkZlE9PSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tICcuLi9jb21tb24vaG9va3MnO1xuaW1wb3J0IHVzZUNyZWF0ZVBvcnRhbCBmcm9tICcuLi9jb21tb24vdXNlQ3JlYXRlUG9ydGFsJztcbnZhciB1aWQgPSAxO1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjb250cm9sID0gcHJvcHMuY29udHJvbCxcbiAgICAgIGJvdW5kcyA9IHByb3BzLmJvdW5kcztcblxuICB2YXIgX3VzZUNyZWF0ZVBvcnRhbCA9IHVzZUNyZWF0ZVBvcnRhbCgpLFxuICAgICAgcG9ydGFsID0gX3VzZUNyZWF0ZVBvcnRhbC5wb3J0YWwsXG4gICAgICBkaXYgPSBfdXNlQ3JlYXRlUG9ydGFsLmRpdixcbiAgICAgIHNldENoaWxkcmVuID0gX3VzZUNyZWF0ZVBvcnRhbC5zZXRDaGlsZHJlbjtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUodWlkKyspLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMSksXG4gICAgICBpZCA9IF91c2VTdGF0ZTJbMF07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgc2V0Q2hpbGRyZW4oY2hpbGRyZW4pO1xuICAgIH1cbiAgfSwgW2NoaWxkcmVuLCBjb250cm9sXSk7XG4gIHZhciBwcmV2SWQgPSB1c2VQcmV2aW91cyhpZCk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHBvcnRhbCAmJiBjb250cm9sKSB7XG4gICAgICBjb250cm9sLmFkZENvcHlyaWdodCh7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgYm91bmRzOiBib3VuZHMsXG4gICAgICAgIGNvbnRlbnQ6IGRpdi5pbm5lckhUTUxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJldklkICYmIGNvbnRyb2wpIHtcbiAgICAgICAgY29udHJvbC5yZW1vdmVDb3B5cmlnaHQocHJldklkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbY2hpbGRyZW4sIHBvcnRhbF0pO1xuICByZXR1cm4gcG9ydGFsIHx8IG51bGw7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlEYjNCNWNtbG5hSFJEYjI1MGNtOXNMMGwwWlcwdWRITjRJbDBzSW01aGJXVnpJanBiSW5WelpVVm1abVZqZENJc0luVnpaVk4wWVhSbElpd2lkWE5sVUhKbGRtbHZkWE1pTENKMWMyVkRjbVZoZEdWUWIzSjBZV3dpTENKMWFXUWlMQ0p3Y205d2N5SXNJbU5vYVd4a2NtVnVJaXdpWTI5dWRISnZiQ0lzSW1KdmRXNWtjeUlzSW5CdmNuUmhiQ0lzSW1ScGRpSXNJbk5sZEVOb2FXeGtjbVZ1SWl3aWFXUWlMQ0p3Y21WMlNXUWlMQ0poWkdSRGIzQjVjbWxuYUhRaUxDSmpiMjUwWlc1MElpd2lhVzV1WlhKSVZFMU1JaXdpY21WdGIzWmxRMjl3ZVhKcFoyaDBJbDBzSW0xaGNIQnBibWR6SWpvaU8wRkJRMEVzVTBGQlUwRXNVMEZCVkN4RlFVRnZRa01zVVVGQmNFSXNVVUZCYjBNc1QwRkJjRU03UVVGRFFTeFRRVUZUUXl4WFFVRlVMRkZCUVRSQ0xHbENRVUUxUWp0QlFVTkJMRTlCUVU5RExHVkJRVkFzVFVGQk5FSXNNa0pCUVRWQ08wRkJSVUVzU1VGQlNVTXNSMEZCVnl4SFFVRkhMRU5CUVd4Q08wRkJhVUpCTEdkQ1FVRmxMRmxCUVhOQ08wRkJRVUVzVFVGQmNrSkRMRXRCUVhGQ0xIVkZRVUZRTEVWQlFVODdRVUZEYmtNc1RVRkJVVU1zVVVGQlVpeEhRVUZ6UTBRc1MwRkJkRU1zUTBGQlVVTXNVVUZCVWp0QlFVRkJMRTFCUVd0Q1F5eFBRVUZzUWl4SFFVRnpRMFlzUzBGQmRFTXNRMEZCYTBKRkxFOUJRV3hDTzBGQlFVRXNUVUZCTWtKRExFMUJRVE5DTEVkQlFYTkRTQ3hMUVVGMFF5eERRVUV5UWtjc1RVRkJNMEk3TzBGQlEwRXNlVUpCUVhGRFRDeGxRVUZsTEVWQlFYQkVPMEZCUVVFc1RVRkJVVTBzVFVGQlVpeHZRa0ZCVVVFc1RVRkJVanRCUVVGQkxFMUJRV2RDUXl4SFFVRm9RaXh2UWtGQlowSkJMRWRCUVdoQ08wRkJRVUVzVFVGQmNVSkRMRmRCUVhKQ0xHOUNRVUZ4UWtFc1YwRkJja0k3TzBGQlEwRXNhMEpCUVdGV0xGRkJRVkVzUTBGQlEwY3NSMEZCUnl4RlFVRktMRU5CUVhKQ08wRkJRVUU3UVVGQlFTeE5RVUZQVVN4RlFVRlFPenRCUVVOQldpeEZRVUZCUVN4VFFVRlRMRU5CUVVNc1dVRkJUVHRCUVVOa0xGRkJRVWxQTEU5QlFVb3NSVUZCWVR0QlFVTllTU3hOUVVGQlFTeFhRVUZYTEVOQlFVTk1MRkZCUVVRc1EwRkJXRHRCUVVORU8wRkJRMFlzUjBGS1VTeEZRVWxPTEVOQlFVTkJMRkZCUVVRc1JVRkJWME1zVDBGQldDeERRVXBOTEVOQlFWUTdRVUZOUVN4TlFVRk5UU3hOUVVGTkxFZEJRVWRZTEZkQlFWY3NRMEZCUTFVc1JVRkJSQ3hEUVVFeFFqdEJRVU5CV2l4RlFVRkJRU3hUUVVGVExFTkJRVU1zV1VGQlRUdEJRVU5rTEZGQlFVbFRMRTFCUVUwc1NVRkJTVVlzVDBGQlpDeEZRVUYxUWp0QlFVTnlRa0VzVFVGQlFVRXNUMEZCVHl4RFFVRkRUeXhaUVVGU0xFTkJRWEZDTzBGQlEyNUNSaXhSUVVGQlFTeEZRVUZGTEVWQlFVWkJMRVZCUkcxQ08wRkJSVzVDU2l4UlFVRkJRU3hOUVVGTkxFVkJRVTVCTEUxQlJtMUNPMEZCUjI1Q1R5eFJRVUZCUVN4UFFVRlBMRVZCUVVWTUxFZEJRVWNzUTBGQlJVMDdRVUZJU3l4UFFVRnlRanRCUVV0RU96dEJRVU5FTEZkQlFVOHNXVUZCV1R0QlFVTnFRaXhWUVVGSlNDeE5RVUZOTEVsQlFVbE9MRTlCUVdRc1JVRkJkVUk3UVVGRGNrSkJMRkZCUVVGQkxFOUJRVThzUTBGQlExVXNaVUZCVWl4RFFVRjNRa29zVFVGQmVFSTdRVUZEUkR0QlFVTkdMRXRCU2tRN1FVRkxSQ3hIUVdKUkxFVkJZVTRzUTBGQlExQXNVVUZCUkN4RlFVRlhSeXhOUVVGWUxFTkJZazBzUTBGQlZEdEJRV05CTEZOQlFVOUJMRTFCUVUwc1NVRkJTU3hKUVVGcVFqdEJRVU5FTEVOQk1VSkVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRkpsWVdOMExDQjdJSFZ6WlVsdGNHVnlZWFJwZG1WSVlXNWtiR1VnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdleUIxYzJWRlptWmxZM1FzSUhWelpWTjBZWFJsSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnZFhObFVISmxkbWx2ZFhNZ2ZTQm1jbTl0SUNjdUxpOWpiMjF0YjI0dmFHOXZhM01uTzF4dWFXMXdiM0owSUhWelpVTnlaV0YwWlZCdmNuUmhiQ0JtY205dElDY3VMaTlqYjIxdGIyNHZkWE5sUTNKbFlYUmxVRzl5ZEdGc0p6dGNibHh1YkdWMElIVnBaRG9nYm5WdFltVnlJRDBnTVR0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkpkR1Z0SUh0Y2JpQWdMeW9xWEc0Z0lDQXFJT2lIcXVXdW11UzVpU0JFVDAwZzVZV0Q1N1NnNDRDQ1hHNGdJQ0FxTDF4dUlDQmphR2xzWkhKbGJqODZJRkpsWVdOMExsSmxZV04wVG05a1pUdGNiaUFnTHlvcVhHNGdJQ0FxSU9pdnBlZUppT2FkZytTL29lYUJyK2FKZ09tQWd1ZVVxT2VhaE9XY3NPZVFodVdNdXVXZm4xeHVJQ0FnS2k5Y2JpQWdZbTkxYm1SelB6b2dRazFoY0M1Q2IzVnVaSE03WEc0Z0lDOHFLbHh1SUNBZ0tpRG9vYWpucExybmlZam1uWVBtanFma3U3YmxycDdrdm92dnZJeGdRMjl3ZVhKcFoyaDBRMjl1ZEhKdmJHQWc1N3VaNWEyUTU3dUU1THUyNXJPbzVZV2w1NXFFNUxpQTVMaXE1NG1JNXAyRDVvNm41THUyNWE2ZTVMNkw1YkdlNW9DbjQ0Q0NYRzRnSUNBcUwxeHVJQ0JqYjI1MGNtOXNQem9nUWsxaGNDNURiM0I1Y21sbmFIUkRiMjUwY205c08xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvY0hKdmNITTZJRWwwWlcwZ1BTQjdmU2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQjdJR05vYVd4a2NtVnVMQ0JqYjI1MGNtOXNMQ0JpYjNWdVpITWdmU0E5SUhCeWIzQnpPMXh1SUNCamIyNXpkQ0I3SUhCdmNuUmhiQ3dnWkdsMkxDQnpaWFJEYUdsc1pISmxiaUI5SUQwZ2RYTmxRM0psWVhSbFVHOXlkR0ZzS0NrN1hHNGdJR052Ym5OMElGdHBaRjBnUFNCMWMyVlRkR0YwWlNoMWFXUXJLeWs3WEc0Z0lIVnpaVVZtWm1WamRDZ29LU0E5UGlCN1hHNGdJQ0FnYVdZZ0tHTnZiblJ5YjJ3cElIdGNiaUFnSUNBZ0lITmxkRU5vYVd4a2NtVnVLR05vYVd4a2NtVnVLVHRjYmlBZ0lDQjlYRzRnSUgwc0lGdGphR2xzWkhKbGJpd2dZMjl1ZEhKdmJGMHBPMXh1WEc0Z0lHTnZibk4wSUhCeVpYWkpaQ0E5SUhWelpWQnlaWFpwYjNWektHbGtLVHRjYmlBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0JwWmlBb2NHOXlkR0ZzSUNZbUlHTnZiblJ5YjJ3cElIdGNiaUFnSUNBZ0lHTnZiblJ5YjJ3dVlXUmtRMjl3ZVhKcFoyaDBLSHRjYmlBZ0lDQWdJQ0FnYVdRc1hHNGdJQ0FnSUNBZ0lHSnZkVzVrY3l4Y2JpQWdJQ0FnSUNBZ1kyOXVkR1Z1ZERvZ1pHbDJJUzVwYm01bGNraFVUVXdzWEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJR2xtSUNod2NtVjJTV1FnSmlZZ1kyOXVkSEp2YkNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjUwY205c0xuSmxiVzkyWlVOdmNIbHlhV2RvZENod2NtVjJTV1FwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lIMHNJRnRqYUdsc1pISmxiaXdnY0c5eWRHRnNYU2s3WEc0Z0lISmxkSFZ5YmlCd2IzSjBZV3dnZkh3Z2JuVnNiRHRjYm4wN1hHNGlYWDA9IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUltcGVyYXRpdmVIYW5kbGUsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUNvcHlyaWdodENvbnRyb2wgZnJvbSAnLi91c2VDb3B5cmlnaHRDb250cm9sJztcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XG52YXIgQ29weXJpZ2h0Q29udHJvbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfdXNlQ29weXJpZ2h0Q29udHJvbCA9IHVzZUNvcHlyaWdodENvbnRyb2wocHJvcHMpLFxuICAgICAgY29weXJpZ2h0Q29udHJvbCA9IF91c2VDb3B5cmlnaHRDb250cm9sLmNvcHlyaWdodENvbnRyb2w7XG5cbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcyksIHt9LCB7XG4gICAgICBjb3B5cmlnaHRDb250cm9sOiBjb3B5cmlnaHRDb250cm9sXG4gICAgfSk7XG4gIH0sIFtjb3B5cmlnaHRDb250cm9sXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgUmVhY3QuQ2hpbGRyZW4udG9BcnJheShwcm9wcy5jaGlsZHJlbikubWFwKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICBpZiAoIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIGNvbnRyb2w6IGNvcHlyaWdodENvbnRyb2wsXG4gICAgICAgIGlkOiBpbmRleCArIDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSkpO1xufSk7XG5Db3B5cmlnaHRDb250cm9sLkl0ZW0gPSBJdGVtO1xuZXhwb3J0IGRlZmF1bHQgQ29weXJpZ2h0Q29udHJvbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlEYjNCNWNtbG5hSFJEYjI1MGNtOXNMMmx1WkdWNExuUnplQ0pkTENKdVlXMWxjeUk2V3lKU1pXRmpkQ0lzSW5WelpVbHRjR1Z5WVhScGRtVklZVzVrYkdVaUxDSkdjbUZuYldWdWRDSXNJblZ6WlVOdmNIbHlhV2RvZEVOdmJuUnliMndpTENKSmRHVnRJaXdpUTI5d2VYSnBaMmgwUTI5dWRISnZiQ0lzSW1admNuZGhjbVJTWldZaUxDSndjbTl3Y3lJc0luSmxaaUlzSW1OdmNIbHlhV2RvZEVOdmJuUnliMndpTENKRGFHbHNaSEpsYmlJc0luUnZRWEp5WVhraUxDSmphR2xzWkhKbGJpSXNJbTFoY0NJc0ltTm9hV3hrSWl3aWFXNWtaWGdpTENKcGMxWmhiR2xrUld4bGJXVnVkQ0lzSW1Oc2IyNWxSV3hsYldWdWRDSXNJbU52Ym5SeWIyd2lMQ0pwWkNKZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxFOUJRVTlCTEV0QlFWQXNTVUZCWjBKRExHMUNRVUZvUWl4RlFVRnhRME1zVVVGQmNrTXNVVUZCY1VRc1QwRkJja1E3UVVGRlFTeFBRVUZQUXl4dFFrRkJVQ3hOUVVGblF5eDFRa0ZCYUVNN1FVRkRRU3hQUVVGUFF5eEpRVUZRTEUxQlFXbENMRkZCUVdwQ08wRkJVMEVzU1VGQlRVTXNaMEpCUVhGQ0xHZENRVUZIVEN4TFFVRkxMRU5CUVVOTkxGVkJRVTRzUTBGQmQwTXNWVUZCUTBNc1MwRkJSQ3hGUVVGUlF5eEhRVUZTTEVWQlFXZENPMEZCUTNCR0xEWkNRVUUyUWt3c2JVSkJRVzFDTEVOQlFVTkpMRXRCUVVRc1EwRkJhRVE3UVVGQlFTeE5RVUZSUlN4blFrRkJVaXgzUWtGQlVVRXNaMEpCUVZJN08wRkJRMEZTTEVWQlFVRkJMRzFDUVVGdFFpeERRVUZEVHl4SFFVRkVMRVZCUVUwN1FVRkJRU3d5UTBGQldVUXNTMEZCV2p0QlFVRnRRa1VzVFVGQlFVRXNaMEpCUVdkQ0xFVkJRV2hDUVR0QlFVRnVRanRCUVVGQkxFZEJRVTRzUlVGQk9FTXNRMEZCUTBFc1owSkJRVVFzUTBGQk9VTXNRMEZCYmtJN1FVRkRRU3h6UWtGRFJTeHZRa0ZCUXl4UlFVRkVMRkZCUTBkVUxFdEJRVXNzUTBGQlExVXNVVUZCVGl4RFFVRmxReXhQUVVGbUxFTkJRWFZDU2l4TFFVRkxMRU5CUVVOTExGRkJRVGRDTEVWQlFYVkRReXhIUVVGMlF5eERRVUV5UXl4VlFVRkRReXhMUVVGRUxFVkJRVkZETEV0QlFWSXNSVUZCYTBJN1FVRkROVVFzYzBKQlFVbG1MRXRCUVVzc1EwRkJRMmRDTEdOQlFVNHNRMEZCY1VKR0xFdEJRWEpDTEVOQlFVb3NSVUZCYVVNN1FVRkRMMElzTUVKQlFVOWtMRXRCUVVzc1EwRkJRMmxDTEZsQlFVNHNRMEZCYlVKSUxFdEJRVzVDTEVWQlFUQkNPMEZCUXk5Q1NTeFJRVUZCUVN4UFFVRlBMRVZCUVVWVUxHZENRVVJ6UWp0QlFVVXZRbFVzVVVGQlFVRXNSVUZCUlN4RlFVRkZTaXhMUVVGTExFZEJRVWM3UVVGR2JVSXNUMEZCTVVJc1EwRkJVRHRCUVVsRU96dEJRVU5FTEZkQlFVOUVMRXRCUVZBN1FVRkRSQ3hIUVZKQkxFTkJSRWdzUTBGRVJqdEJRV0ZFTEVOQmFFSTJRaXhEUVVFNVFqdEJRV3RDUVZRc1owSkJRV2RDTEVOQlFVTkVMRWxCUVdwQ0xFZEJRWGRDUVN4SlFVRjRRanRCUVVWQkxHVkJRV1ZETEdkQ1FVRm1JaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRkpsWVdOMExDQjdJSFZ6WlVsdGNHVnlZWFJwZG1WSVlXNWtiR1VzSUVaeVlXZHRaVzUwSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnVDNabGNteGhlVkJ5YjNCeklIMGdabkp2YlNBbkxpNHZZMjl0Ylc5dUwyMWhjQ2M3WEc1cGJYQnZjblFnZFhObFEyOXdlWEpwWjJoMFEyOXVkSEp2YkNCbWNtOXRJQ2N1TDNWelpVTnZjSGx5YVdkb2RFTnZiblJ5YjJ3bk8xeHVhVzF3YjNKMElFbDBaVzBnWm5KdmJTQW5MaTlKZEdWdEp6dGNibHh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JEYjNCNWNtbG5hSFJEYjI1MGNtOXNVSEp2Y0hNZ1pYaDBaVzVrY3lCUGRtVnliR0Y1VUhKdmNITXNJRUpOWVhBdVEyOXdlWEpwWjJoMFEyOXVkSEp2YkU5d2RHbHZibk1nZTF4dUlDQXZLaXBjYmlBZ0lDb2c2SWVxNWE2YTVMbUpJRVJQVFNEbGhZUG50S0RqZ0lKY2JpQWdJQ292WEc0Z0lHTm9hV3hrY21WdVB6b2dVbVZoWTNRdVVtVmhZM1JPYjJSbE8xeHVmVnh1WEc1amIyNXpkQ0JEYjNCNWNtbG5hSFJEYjI1MGNtOXNPaUJoYm5rZ1BTQlNaV0ZqZEM1bWIzSjNZWEprVW1WbVBFTnZjSGx5YVdkb2RFTnZiblJ5YjJ4UWNtOXdjejRvS0hCeWIzQnpMQ0J5WldZcElEMCtJSHRjYmlBZ1kyOXVjM1FnZXlCamIzQjVjbWxuYUhSRGIyNTBjbTlzSUgwZ1BTQjFjMlZEYjNCNWNtbG5hSFJEYjI1MGNtOXNLSEJ5YjNCektUdGNiaUFnZFhObFNXMXdaWEpoZEdsMlpVaGhibVJzWlNoeVpXWXNJQ2dwSUQwK0lDaDdJQzR1TG5CeWIzQnpMQ0JqYjNCNWNtbG5hSFJEYjI1MGNtOXNJSDBwTENCYlkyOXdlWEpwWjJoMFEyOXVkSEp2YkYwcE8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeEdjbUZuYldWdWRENWNiaUFnSUNBZ0lIdFNaV0ZqZEM1RGFHbHNaSEpsYmk1MGIwRnljbUY1S0hCeWIzQnpMbU5vYVd4a2NtVnVLUzV0WVhBb0tHTm9hV3hrTENCcGJtUmxlQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnBaaUFvVW1WaFkzUXVhWE5XWVd4cFpFVnNaVzFsYm5Rb1kyaHBiR1FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlGSmxZV04wTG1Oc2IyNWxSV3hsYldWdWRDaGphR2xzWkN3Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRISnZiRG9nWTI5d2VYSnBaMmgwUTI5dWRISnZiQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHbGtPaUJwYm1SbGVDQXJJREVzWEc0Z0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05vYVd4a08xeHVJQ0FnSUNBZ2ZTbDlYRzRnSUNBZ1BDOUdjbUZuYldWdWRENWNiaUFnS1R0Y2JuMHBPMXh1WEc1RGIzQjVjbWxuYUhSRGIyNTBjbTlzTGtsMFpXMGdQU0JKZEdWdE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkRiM0I1Y21sbmFIUkRiMjUwY205c08xeHVJbDE5IiwiaW1wb3J0IHsgTWFwLCBBUElMb2FkZXIgfSBmcm9tICdAdWl3L3JlYWN0LWJhaWR1LW1hcCc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJhaWR1TWFwQ29tcG9uZW50ID0gKCkgPT4gKFxyXG4gIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMzAwcHgnIH19PlxyXG4gICAgPEFQSUxvYWRlciBha2F5PVwiR1RyblhhNWh3WEd3Z1FuVEJHMjhTSEJ1YkVyTUttM2ZcIj5cclxuICAgICAgPE1hcCBjZW50ZXI9XCLmna3lt55cIi8+XHJcbiAgICA8L0FQSUxvYWRlcj5cclxuICA8L2Rpdj5cclxuKTsiLCJpbXBvcnQgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSwgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBCYWlkdU1hcENvbnRhaW5lclByb3BzIH0gZnJvbSBcIi4uL3R5cGluZ3MvQmFpZHVNYXBQcm9wc1wiO1xuaW1wb3J0IHsgQmFpZHVNYXBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0JhaWR1TWFwQ29tcG9uZW50XCI7XG5cbmltcG9ydCBcIi4vdWkvQmFpZHVNYXAuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhaWR1TWFwIGV4dGVuZHMgQ29tcG9uZW50PEJhaWR1TWFwQ29udGFpbmVyUHJvcHM+IHtcbiAgICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICAgICAgcmV0dXJuIDxCYWlkdU1hcENvbXBvbmVudD48L0JhaWR1TWFwQ29tcG9uZW50PjtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiX2ltcG9ydGVkU2NyaXB0IiwiaGVhZEVsZW1lbnQiLCJkb2N1bWVudCIsInNyYyIsInJlc29sdmUiLCJzY3JpcHQiLCJyZWplY3QiLCJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfc2V0UHJvdG90eXBlT2YiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiX2dldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsInNoYW0iLCJQcm94eSIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiY2FsbCIsImUiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiUmVmZXJlbmNlRXJyb3IiLCJyZXF1aXJlIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJhc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfY3JlYXRlU3VwZXIiLCJEZXJpdmVkIiwiaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsImlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCIsIl9jcmVhdGVTdXBlckludGVybmFsIiwiU3VwZXIiLCJyZXN1bHQiLCJOZXdUYXJnZXQiLCJwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwicnVudGltZSIsIk9wIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY29udGV4dCIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVjb3JkIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJpdGVyIiwibmV4dCIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsIndpbmRvdyIsIkRFRkFVTFRfUkVUUllfVElNRSIsIkFQSUxvYWRlciIsImxvYWRlZCIsIkJNYXAiLCJjYWxsYmFja05hbWUiLCJjb2xvciIsImNmZyIsInByb3RvY29sIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsInF1ZXVlIiwidGFzayIsInJlcXVpcmVTY3JpcHQiLCJkZWxheSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiYWtheSIsImhvc3RBbmRQYXRoIiwidmVyc2lvbiIsIndhaXRRdWV1ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm93bktleXMiLCJlbnVtZXJhYmxlT25seSIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkMiIsInNvdXJjZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJleGNsdWRlZCIsInNvdXJjZUtleXMiLCJpbmRleE9mIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwib2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIl9hcnJheVdpdGhIb2xlcyIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9pIiwiX2FyciIsIl9uIiwiX2QiLCJfcyIsIl9lIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJsZW4iLCJhcnIyIiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwibWluTGVuIiwiYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJ0b1N0cmluZyIsImZyb20iLCJ0ZXN0IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9zbGljZWRUb0FycmF5IiwiYXJyYXlXaXRoSG9sZXMiLCJpdGVyYWJsZVRvQXJyYXlMaW1pdCIsInVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVSZXN0IiwicHJvcHNOYW1lIiwiZU5hbWUiLCJ1c2VTdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiZnVuTmFtZSIsInZpc2lhYmxlIiwiY29uc29sZSIsImRhdGEiLCJwcmVEYXRhIiwiZXZlbnROYW1lIiwiZXZlbnRIYW5kbGUiLCJyZWYiLCJ1c2VSZWYiLCJ3aWRnZXQiLCJtaW5ab29tIiwibWF4Wm9vbSIsIm1hcFR5cGUiLCJlbmFibGVIaWdoUmVzb2x1dGlvbiIsImVuYWJsZUF1dG9SZXNpemUiLCJlbmFibGVNYXBDbGljayIsIm1hcCIsInNldE1hcCIsInpvb20iLCJzZXRab29tIiwiY29udGFpbmVyIiwic2V0Q29udGFpbmVyIiwidXNlTWVtbyIsIml0ZW0iLCJvcHRpb25zIiwiY2VudGVyIiwic2V0Q2VudGVyIiwiY2VudCIsImF1dG9Mb2NhbENpdHkiLCJzZXRBdXRvTG9jYWxDaXR5IiwibXlDaXR5IiwidXNlRXZlbnRQcm9wZXJ0aWVzIiwidXNlUHJvcGVydGllcyIsInVzZUVuYWJsZVByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNoaWxkcmVuIiwiZWxtUmVmIiwidXNlTWFwIiwiY3VycmVudCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJjaGlsZHMiLCJmb250U2l6ZSIsImhlaWdodCIsImNoaWxkIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJkaXYiLCJzZXREaXYiLCJwb3J0YWwiLCJzZXRQb3J0YWwiLCJjb3VudCIsInNldENvdW50Iiwic2V0Q2hpbGRyZW4iLCJwb3J0YWxJbnN0YW5jZSIsIlJlYWN0RE9NIiwicHJldkNvdW50IiwidXNlUHJldmlvdXMiLCJ1c2VDcmVhdGVQb3J0YWwiLCJjb3B5cmlnaHRDb250cm9sIiwic2V0Q29weXJpZ2h0Q29udHJvbCIsImFuY2hvciIsIm9mZnNldCIsInVzZVZpc2lhYmxlIiwidWlkIiwiY29udHJvbCIsImJvdW5kcyIsImlkIiwicHJldklkIiwiY29udGVudCIsImlubmVySFRNTCIsIkNvcHlyaWdodENvbnRyb2wiLCJ1c2VDb3B5cmlnaHRDb250cm9sIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxlQUF3QyxHQUE5QyxFQUFBO0FBNkJBO0FBQ0E7QUFDQTs7QUFDTyxTQUFBLGFBQUEsQ0FBQSxHQUFBLEVBQW1EO0FBQ3hELE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxLQUFLQSxRQUFRLENBQVJBLElBQUFBLElBQWlCQSxRQUFRLENBQVJBLG9CQUFBQSxDQUFBQSxNQUFBQSxFQUFsRCxDQUFrREEsQ0FBdEIsQ0FBNUI7QUFFQSxTQUFPLElBQUEsT0FBQSxDQUFZLFVBQUEsT0FBQSxFQUFBLE1BQUEsRUFBcUI7QUFDdEMsUUFBSSxDQUFBLFFBQUEsSUFBYUMsR0FBRyxJQUFwQixlQUFBLEVBQXlDO0FBQ3ZDQyxNQUFBQSxPQUFPO0FBQ1A7QUFDRDs7QUFDRCxRQUFNQyxNQUFNLEdBQUdILFFBQVEsQ0FBUkEsYUFBQUEsQ0FBZixRQUFlQSxDQUFmO0FBQ0FHLElBQUFBLE1BQU0sQ0FBTkEsSUFBQUEsR0FBQUEsaUJBQUFBO0FBQ0FBLElBQUFBLE1BQU0sQ0FBTkEsRUFBQUEsR0FBQUEsa0JBQUFBO0FBQ0FBLElBQUFBLE1BQU0sQ0FBTkEsR0FBQUEsR0FBQUEsR0FBQUE7O0FBQ0FBLElBQUFBLE1BQU0sQ0FBTkEsT0FBQUEsR0FBaUIsVUFBQSxHQUFBLEVBQVM7QUFDeEJKLE1BQUFBLFdBQVcsQ0FBWEEsV0FBQUEsQ0FBQUEsTUFBQUE7QUFDQUssTUFBQUEsTUFBTSxDQUFDLElBQUEsUUFBQSxDQUFBLGNBQUEsTUFBQSxDQUFBLEdBQUEsRUFBUEEsb0JBQU8sQ0FBQSxDQUFELENBQU5BO0FBRkZELEtBQUFBOztBQUlBQSxJQUFBQSxNQUFNLENBQU5BLE1BQUFBLEdBQWdCLFlBQU07QUFDcEJMLE1BQUFBLGVBQWUs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
