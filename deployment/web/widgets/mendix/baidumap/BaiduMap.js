define(['react', 'react-dom'], function (React, ReactDOM) { 'use strict';

  

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
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

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
  }(React__default['default'].Component);

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

      var _useState = React.useState(props[eName]),
          _useState2 = _slicedToArray(_useState, 2),
          state = _useState2[0],
          setState = _useState2[1];

      React.useEffect(function () {
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

    var _useState3 = React.useState(visiable),
        _useState4 = _slicedToArray(_useState3, 2),
        state = _useState4[0],
        setState = _useState4[1];

    React.useEffect(function () {
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

      var _useState5 = React.useState(props[eName]),
          _useState6 = _slicedToArray(_useState5, 2),
          state = _useState6[0],
          setState = _useState6[1];

      React.useEffect(function () {
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
      React.useEffect(function () {
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
    var ref = React.useRef();
    React.useEffect(function () {
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

    React.useMemo(function () {
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

    var _useState7 = React.useState(props.center || '上海'),
        _useState8 = _slicedToArray(_useState7, 2),
        center = _useState8[0],
        setCenter = _useState8[1];
    /**
     * 根据参数设置中心点
     */


    React.useEffect(function () {
      if (map && center) {
        var cent = center;

        if (center && center.lng && center.lat) {
          cent = new BMap.Point(center.lng, center.lat);
          map.centerAndZoom(cent, zoom);
        }

        map.centerAndZoom(center, zoom);
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [center, map]);

    var _useState9 = React.useState(props.autoLocalCity),
        _useState10 = _slicedToArray(_useState9, 2),
        autoLocalCity = _useState10[0],
        setAutoLocalCity = _useState10[1];
    /**
     * IP定位获取当前城市，进行自动定位
     */


    React.useEffect(function () {
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
  var Map = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
    var className = _ref.className,
        style = _ref.style,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, _excluded);

    window.BMap = window.BMap || window.BMapGL;
    var elmRef = React.useRef(null);

    var _useMap = useMap(_objectSpread({
      container: elmRef.current
    }, props)),
        setContainer = _useMap.setContainer,
        container = _useMap.container,
        setCenter = _useMap.setCenter,
        setAutoLocalCity = _useMap.setAutoLocalCity,
        map = _useMap.map;

    React.useEffect(function () {
      return setContainer(elmRef.current);
    }, [elmRef.current]);
    React.useMemo(function () {
      return props.center && setCenter(props.center);
    }, [props.center]);
    React.useEffect(function () {
      return setAutoLocalCity(props.autoLocalCity);
    }, [props.autoLocalCity]);
    React.useImperativeHandle(ref, function () {
      return _objectSpread(_objectSpread({}, props), {}, {
        map: map,
        BMap: BMap,
        container: elmRef
      });
    }, [map]);
    var childs = React__default['default'].Children.toArray(children);
    return /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
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
      if (! /*#__PURE__*/React__default['default'].isValidElement(child)) return;
      return /*#__PURE__*/React__default['default'].cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
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

    var _useState = React.useState(document.createElement('div')),
        _useState2 = _slicedToArray(_useState, 2),
        div = _useState2[0],
        setDiv = _useState2[1];

    var _useState3 = React.useState(),
        _useState4 = _slicedToArray(_useState3, 2),
        portal = _useState4[0],
        setPortal = _useState4[1];

    var _useState5 = React.useState(0),
        _useState6 = _slicedToArray(_useState5, 2),
        count = _useState6[0],
        setCount = _useState6[1];

    var _useState7 = React.useState(props.children),
        _useState8 = _slicedToArray(_useState7, 2),
        children = _useState8[0],
        setChildren = _useState8[1];

    React.useMemo(function () {
      if (!portal) {
        var portalInstance = /*#__PURE__*/ReactDOM__default['default'].createPortal(children, div);
        setCount(count + 1);
        setPortal(portalInstance);
      }
    }, [portal]);
    var prevCount = usePrevious(count);
    React.useMemo(function () {
      if (div && children && count === prevCount && count > 0) {
        var portalInstance = /*#__PURE__*/ReactDOM__default['default'].createPortal(children, div);
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

    var _useState = React.useState(),
        _useState2 = _slicedToArray(_useState, 2),
        copyrightControl = _useState2[0],
        setCopyrightControl = _useState2[1];

    var map = props.map,
        anchor = props.anchor,
        offset = props.offset;
    React.useEffect(function () {
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

    var _useState = React.useState(uid++),
        _useState2 = _slicedToArray(_useState, 1),
        id = _useState2[0];

    React.useEffect(function () {
      if (control) {
        setChildren(children);
      }
    }, [children, control]);
    var prevId = usePrevious(id);
    React.useEffect(function () {
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

  var CopyrightControl = /*#__PURE__*/React__default['default'].forwardRef(function (props, ref) {
    var _useCopyrightControl = useCopyrightControl(props),
        copyrightControl = _useCopyrightControl.copyrightControl;

    React.useImperativeHandle(ref, function () {
      return _objectSpread(_objectSpread({}, props), {}, {
        copyrightControl: copyrightControl
      });
    }, [copyrightControl]);
    return /*#__PURE__*/React__default['default'].createElement(React.Fragment, null, React__default['default'].Children.toArray(props.children).map(function (child, index) {
      if ( /*#__PURE__*/React__default['default'].isValidElement(child)) {
        return /*#__PURE__*/React__default['default'].cloneElement(child, {
          control: copyrightControl,
          id: index + 1
        });
      }

      return child;
    }));
  });
  CopyrightControl.Item = Item;

  const BaiduMapComponent = () => (React.createElement("div", { style: { width: '100%', height: '300px' } },
      React.createElement(APILoader, { akay: "GTrnXa5hwXGwgQnTBG28SHBubErMKm3f" },
          React.createElement(Map, { center: "\u676D\u5DDE" }))));

  ___$insertStyle("/*\nPlace your custom CSS here\n*/");

  class BaiduMap extends React.Component {
      render() {
          return React.createElement(BaiduMapComponent, null);
      }
  }

  return BaiduMap;

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFpZHVNYXAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWJhaWR1LW1hcC9saWIvZXNtL3V0aWxzL3JlcXVpcmVTY3JpcHQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1iYWlkdS1tYXAvbGliL2VzbS9BUElMb2FkZXIvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMi5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1iYWlkdS1tYXAvbGliL2VzbS9jb21tb24vaG9va3MuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1iYWlkdS1tYXAvbGliL2VzbS9NYXAvdXNlTWFwLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B1aXcvcmVhY3QtYmFpZHUtbWFwL2xpYi9lc20vTWFwL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdWl3L3JlYWN0LWJhaWR1LW1hcC9saWIvZXNtL2NvbW1vbi91c2VDcmVhdGVQb3J0YWwuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1iYWlkdS1tYXAvbGliL2VzbS9Db3B5cmlnaHRDb250cm9sL3VzZUNvcHlyaWdodENvbnRyb2wuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1iYWlkdS1tYXAvbGliL2VzbS9Db3B5cmlnaHRDb250cm9sL0l0ZW0uanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHVpdy9yZWFjdC1iYWlkdS1tYXAvbGliL2VzbS9Db3B5cmlnaHRDb250cm9sL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQmFpZHVNYXBDb21wb25lbnQudHN4IiwiLi4vLi4vLi4vLi4vLi4vc3JjL0JhaWR1TWFwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2ltcG9ydGVkU2NyaXB0ID0ge307XG4vKipcbiAqIGxvYWQgZGVwZW5kZW5jeSBieSBjc3MgdGFnXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVDc3Moc3JjKSB7XG4gIHZhciBoZWFkRWxlbWVudCA9IGRvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICghZG9jdW1lbnQgfHwgc3JjIGluIF9pbXBvcnRlZFNjcmlwdCkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHNjcmlwdC5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgc2NyaXB0LmhyZWYgPSBzcmM7XG5cbiAgICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGhlYWRFbGVtZW50LnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICByZWplY3QobmV3IFVSSUVycm9yKFwiVGhlIGNzcyBcIi5jb25jYXQoc3JjLCBcIiBpcyBubyBhY2Nlc3NpYmxlLlwiKSkpO1xuICAgIH07XG5cbiAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgX2ltcG9ydGVkU2NyaXB0W3NyY10gPSB0cnVlO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9KTtcbn1cbi8qKlxuICogbG9hZCBkZXBlbmRlbmN5IGJ5IHNjcmlwdCB0YWdcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWlyZVNjcmlwdChzcmMpIHtcbiAgdmFyIGhlYWRFbGVtZW50ID0gZG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFkb2N1bWVudCB8fCBzcmMgaW4gX2ltcG9ydGVkU2NyaXB0KSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LmlkID0gJ19yZWFjdF9iYWlkdV9tYXAnO1xuICAgIHNjcmlwdC5zcmMgPSBzcmM7XG5cbiAgICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGhlYWRFbGVtZW50LnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICByZWplY3QobmV3IFVSSUVycm9yKFwiVGhlIFNjcmlwdCBcIi5jb25jYXQoc3JjLCBcIiBpcyBubyBhY2Nlc3NpYmxlLlwiKSkpO1xuICAgIH07XG5cbiAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgX2ltcG9ydGVkU2NyaXB0W3NyY10gPSB0cnVlO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTkxZEdsc2N5OXlaWEYxYVhKbFUyTnlhWEIwTG5SeklsMHNJbTVoYldWeklqcGJJbDlwYlhCdmNuUmxaRk5qY21sd2RDSXNJbkpsY1hWcGNtVkRjM01pTENKemNtTWlMQ0pvWldGa1JXeGxiV1Z1ZENJc0ltUnZZM1Z0Wlc1MElpd2lhR1ZoWkNJc0ltZGxkRVZzWlcxbGJuUnpRbmxVWVdkT1lXMWxJaXdpVUhKdmJXbHpaU0lzSW5KbGMyOXNkbVVpTENKeVpXcGxZM1FpTENKelkzSnBjSFFpTENKamNtVmhkR1ZGYkdWdFpXNTBJaXdpZEhsd1pTSXNJbkpsYkNJc0ltaHlaV1lpTENKdmJtVnljbTl5SWl3aVpYSnlJaXdpY21WdGIzWmxRMmhwYkdRaUxDSlZVa2xGY25KdmNpSXNJbTl1Ykc5aFpDSXNJbUZ3Y0dWdVpFTm9hV3hrSWl3aWNtVnhkV2x5WlZOamNtbHdkQ0lzSW1sa0lsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeEpRVUZOUVN4bFFVRjNReXhIUVVGSExFVkJRV3BFTzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVOQkxFOUJRVThzVTBGQlUwTXNWVUZCVkN4RFFVRnZRa01zUjBGQmNFSXNSVUZCWjBRN1FVRkRja1FzVFVGQlRVTXNWMEZCVnl4SFFVRkhReXhSUVVGUkxFdEJRVXRCTEZGQlFWRXNRMEZCUTBNc1NVRkJWQ3hKUVVGcFFrUXNVVUZCVVN4RFFVRkRSU3h2UWtGQlZDeERRVUU0UWl4TlFVRTVRaXhGUVVGelF5eERRVUYwUXl4RFFVRjBRaXhEUVVFMVFqdEJRVVZCTEZOQlFVOHNTVUZCU1VNc1QwRkJTaXhEUVVGWkxGVkJRVU5ETEU5QlFVUXNSVUZCVlVNc1RVRkJWaXhGUVVGeFFqdEJRVU4wUXl4UlFVRkpMRU5CUVVOTUxGRkJRVVFzU1VGQllVWXNSMEZCUnl4SlFVRkpSaXhsUVVGNFFpeEZRVUY1UXp0QlFVTjJRMUVzVFVGQlFVRXNUMEZCVHp0QlFVTlFPMEZCUTBRN08wRkJRMFFzVVVGQlRVVXNUVUZCVFN4SFFVRkhUaXhSUVVGUkxFTkJRVU5QTEdGQlFWUXNRMEZCZFVJc1RVRkJka0lzUTBGQlpqdEJRVU5CUkN4SlFVRkJRU3hOUVVGTkxFTkJRVU5GTEVsQlFWQXNSMEZCWXl4VlFVRmtPMEZCUTBGR0xFbEJRVUZCTEUxQlFVMHNRMEZCUTBjc1IwRkJVQ3hIUVVGaExGbEJRV0k3UVVGRFFVZ3NTVUZCUVVFc1RVRkJUU3hEUVVGRFNTeEpRVUZRTEVkQlFXTmFMRWRCUVdRN08wRkJRMEZSTEVsQlFVRkJMRTFCUVUwc1EwRkJRMHNzVDBGQlVDeEhRVUZwUWl4VlFVRkRReXhIUVVGRUxFVkJRVk03UVVGRGVFSmlMRTFCUVVGQkxGZEJRVmNzUTBGQlJXTXNWMEZCWWl4RFFVRjVRbEFzVFVGQmVrSTdRVUZEUVVRc1RVRkJRVUVzVFVGQlRTeERRVUZETEVsQlFVbFRMRkZCUVVvc2JVSkJRWGRDYUVJc1IwRkJlRUlzZDBKQlFVUXNRMEZCVGp0QlFVTkVMRXRCU0VRN08wRkJTVUZSTEVsQlFVRkJMRTFCUVUwc1EwRkJRMU1zVFVGQlVDeEhRVUZuUWl4WlFVRk5PMEZCUTNCQ2JrSXNUVUZCUVVFc1pVRkJaU3hEUVVGRFJTeEhRVUZFTEVOQlFXWXNSMEZCZFVJc1NVRkJka0k3UVVGRFFVMHNUVUZCUVVFc1QwRkJUenRCUVVOU0xFdEJTRVE3TzBGQlNVRk1MRWxCUVVGQkxGZEJRVmNzUTBGQlJXbENMRmRCUVdJc1EwRkJlVUpXTEUxQlFYcENPMEZCUTBRc1IwRnNRazBzUTBGQlVEdEJRVzFDUkR0QlFVVkVPMEZCUTBFN1FVRkRRVHM3UVVGRFFTeFBRVUZQTEZOQlFWTlhMR0ZCUVZRc1EwRkJkVUp1UWl4SFFVRjJRaXhGUVVGdFJEdEJRVU40UkN4TlFVRk5ReXhYUVVGWExFZEJRVWRETEZGQlFWRXNTMEZCUzBFc1VVRkJVU3hEUVVGRFF5eEpRVUZVTEVsQlFXbENSQ3hSUVVGUkxFTkJRVU5GTEc5Q1FVRlVMRU5CUVRoQ0xFMUJRVGxDTEVWQlFYTkRMRU5CUVhSRExFTkJRWFJDTEVOQlFUVkNPMEZCUlVFc1UwRkJUeXhKUVVGSlF5eFBRVUZLTEVOQlFWa3NWVUZCUTBNc1QwRkJSQ3hGUVVGVlF5eE5RVUZXTEVWQlFYRkNPMEZCUTNSRExGRkJRVWtzUTBGQlEwd3NVVUZCUkN4SlFVRmhSaXhIUVVGSExFbEJRVWxHTEdWQlFYaENMRVZCUVhsRE8wRkJRM1pEVVN4TlFVRkJRU3hQUVVGUE8wRkJRMUE3UVVGRFJEczdRVUZEUkN4UlFVRk5SU3hOUVVGTkxFZEJRVWRPTEZGQlFWRXNRMEZCUTA4c1lVRkJWQ3hEUVVGMVFpeFJRVUYyUWl4RFFVRm1PMEZCUTBGRUxFbEJRVUZCTEUxQlFVMHNRMEZCUTBVc1NVRkJVQ3hIUVVGakxHbENRVUZrTzBGQlEwRkdMRWxCUVVGQkxFMUJRVTBzUTBGQlExa3NSVUZCVUN4SFFVRlpMR3RDUVVGYU8wRkJRMEZhTEVsQlFVRkJMRTFCUVUwc1EwRkJRMUlzUjBGQlVDeEhRVUZoUVN4SFFVRmlPenRCUVVOQlVTeEpRVUZCUVN4TlFVRk5MRU5CUVVOTExFOUJRVkFzUjBGQmFVSXNWVUZCUTBNc1IwRkJSQ3hGUVVGVE8wRkJRM2hDWWl4TlFVRkJRU3hYUVVGWExFTkJRVVZqTEZkQlFXSXNRMEZCZVVKUUxFMUJRWHBDTzBGQlEwRkVMRTFCUVVGQkxFMUJRVTBzUTBGQlF5eEpRVUZKVXl4UlFVRktMSE5DUVVFeVFtaENMRWRCUVROQ0xIZENRVUZFTEVOQlFVNDdRVUZEUkN4TFFVaEVPenRCUVVsQlVTeEpRVUZCUVN4TlFVRk5MRU5CUVVOVExFMUJRVkFzUjBGQlowSXNXVUZCVFR0QlFVTndRbTVDTEUxQlFVRkJMR1ZCUVdVc1EwRkJRMFVzUjBGQlJDeERRVUZtTEVkQlFYVkNMRWxCUVhaQ08wRkJRMEZOTEUxQlFVRkJMRTlCUVU4N1FVRkRVaXhMUVVoRU96dEJRVWxCVEN4SlFVRkJRU3hYUVVGWExFTkJRVVZwUWl4WFFVRmlMRU5CUVhsQ1ZpeE5RVUY2UWp0QlFVTkVMRWRCYkVKTkxFTkJRVkE3UVVGdFFrUWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmZhVzF3YjNKMFpXUlRZM0pwY0hRNklIc2dXM055WXpvZ2MzUnlhVzVuWFRvZ2RISjFaU0I5SUQwZ2UzMDdYRzVjYmk4cUtseHVJQ29nYkc5aFpDQmtaWEJsYm1SbGJtTjVJR0o1SUdOemN5QjBZV2RjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlISmxjWFZwY21WRGMzTW9jM0pqT2lCemRISnBibWNwT2lCUWNtOXRhWE5sUEhadmFXUStJSHRjYmlBZ1kyOXVjM1FnYUdWaFpFVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDQW1KaUFvWkc5amRXMWxiblF1YUdWaFpDQjhmQ0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwYzBKNVZHRm5UbUZ0WlNnbmFHVmhaQ2NwV3pCZEtUdGNibHh1SUNCeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb0tISmxjMjlzZG1Vc0lISmxhbVZqZENrZ1BUNGdlMXh1SUNBZ0lHbG1JQ2doWkc5amRXMWxiblFnZkh3Z2MzSmpJR2x1SUY5cGJYQnZjblJsWkZOamNtbHdkQ2tnZTF4dUlDQWdJQ0FnY21WemIyeDJaU2dwTzF4dUlDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNiaUFnSUNCamIyNXpkQ0J6WTNKcGNIUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZHNhVzVySnlrN1hHNGdJQ0FnYzJOeWFYQjBMblI1Y0dVZ1BTQW5kR1Y0ZEM5amMzTW5PMXh1SUNBZ0lITmpjbWx3ZEM1eVpXd2dQU0FuYzNSNWJHVnphR1ZsZENjN1hHNGdJQ0FnYzJOeWFYQjBMbWh5WldZZ1BTQnpjbU03WEc0Z0lDQWdjMk55YVhCMExtOXVaWEp5YjNJZ1BTQW9aWEp5S1NBOVBpQjdYRzRnSUNBZ0lDQm9aV0ZrUld4bGJXVnVkQ0V1Y21WdGIzWmxRMmhwYkdRb2MyTnlhWEIwS1R0Y2JpQWdJQ0FnSUhKbGFtVmpkQ2h1WlhjZ1ZWSkpSWEp5YjNJb1lGUm9aU0JqYzNNZ0pIdHpjbU45SUdseklHNXZJR0ZqWTJWemMybGliR1V1WUNrcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnYzJOeWFYQjBMbTl1Ykc5aFpDQTlJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lGOXBiWEJ2Y25SbFpGTmpjbWx3ZEZ0emNtTmRJRDBnZEhKMVpUdGNiaUFnSUNBZ0lISmxjMjlzZG1Vb0tUdGNiaUFnSUNCOU8xeHVJQ0FnSUdobFlXUkZiR1Z0Wlc1MElTNWhjSEJsYm1SRGFHbHNaQ2h6WTNKcGNIUXBPMXh1SUNCOUtUdGNibjFjYmx4dUx5b3FYRzRnS2lCc2IyRmtJR1JsY0dWdVpHVnVZM2tnWW5rZ2MyTnlhWEIwSUhSaFoxeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnY21WeGRXbHlaVk5qY21sd2RDaHpjbU02SUhOMGNtbHVaeWs2SUZCeWIyMXBjMlU4ZG05cFpENGdlMXh1SUNCamIyNXpkQ0JvWldGa1JXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MElDWW1JQ2hrYjJOMWJXVnVkQzVvWldGa0lIeDhJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsS0Nkb1pXRmtKeWxiTUYwcE8xeHVYRzRnSUhKbGRIVnliaUJ1WlhjZ1VISnZiV2x6WlNnb2NtVnpiMngyWlN3Z2NtVnFaV04wS1NBOVBpQjdYRzRnSUNBZ2FXWWdLQ0ZrYjJOMWJXVnVkQ0I4ZkNCemNtTWdhVzRnWDJsdGNHOXlkR1ZrVTJOeWFYQjBLU0I3WEc0Z0lDQWdJQ0J5WlhOdmJIWmxLQ2s3WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUdOdmJuTjBJSE5qY21sd2RDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0ozTmpjbWx3ZENjcE8xeHVJQ0FnSUhOamNtbHdkQzUwZVhCbElEMGdKM1JsZUhRdmFtRjJZWE5qY21sd2RDYzdYRzRnSUNBZ2MyTnlhWEIwTG1sa0lEMGdKMTl5WldGamRGOWlZV2xrZFY5dFlYQW5PMXh1SUNBZ0lITmpjbWx3ZEM1emNtTWdQU0J6Y21NN1hHNGdJQ0FnYzJOeWFYQjBMbTl1WlhKeWIzSWdQU0FvWlhKeUtTQTlQaUI3WEc0Z0lDQWdJQ0JvWldGa1JXeGxiV1Z1ZENFdWNtVnRiM1psUTJocGJHUW9jMk55YVhCMEtUdGNiaUFnSUNBZ0lISmxhbVZqZENodVpYY2dWVkpKUlhKeWIzSW9ZRlJvWlNCVFkzSnBjSFFnSkh0emNtTjlJR2x6SUc1dklHRmpZMlZ6YzJsaWJHVXVZQ2twTzF4dUlDQWdJSDA3WEc0Z0lDQWdjMk55YVhCMExtOXViRzloWkNBOUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUY5cGJYQnZjblJsWkZOamNtbHdkRnR6Y21OZElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUhKbGMyOXNkbVVvS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJR2hsWVdSRmJHVnRaVzUwSVM1aGNIQmxibVJEYUdsc1pDaHpZM0pwY0hRcE8xeHVJQ0I5S1R0Y2JuMWNiaUpkZlE9PSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0cztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiKTtcblxudmFyIGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IHJlcXVpcmUoXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiKTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSByZXF1aXJlKFwiLi9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXCIpO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpO1xuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3I7XG4gICAgICByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIHJlc3VsdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZVN1cGVyO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIjtcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIjtcblxuLyoqXG4gKiDliJ3lp4vljJblkozliqDovb1iYWlkdeWcsOWbvlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVxdWlyZVNjcmlwdCB9IGZyb20gJy4uL3V0aWxzL3JlcXVpcmVTY3JpcHQnO1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB3aW5kb3cgJiYgd2luZG93LnNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG4gIH0pO1xufVxudmFyIERFRkFVTFRfUkVUUllfVElNRSA9IDM7XG4vKipcbiAqIEFQSUxvYWRlciDnlKjkuo7liqDovb3nmb7luqblnLDlm77kvp3otZZcbiAqL1xuXG52YXIgQVBJTG9hZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBUElMb2FkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQVBJTG9hZGVyKTtcblxuICBmdW5jdGlvbiBBUElMb2FkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQVBJTG9hZGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX3RoaXMuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHdpbmRvdyAmJiBfdGhpcy5wcm9wcy50eXBlID09PSAnd2ViZ2wnKSB7XG4gICAgICAgIHdpbmRvdy5CTWFwID0gd2luZG93LkJNYXBHTDtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkZWQ6IHRydWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRlZDogcHJvcHMudHlwZSA9PT0gJ3dlYmdsJyA/IHdpbmRvdyAmJiAhIXdpbmRvdy5CTWFwR0wgOiB3aW5kb3cgJiYgISF3aW5kb3cuQk1hcFxuICAgIH07XG5cbiAgICBpZiAoX3RoaXMucHJvcHMuYWtheSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCYWlEdU1hcDogYWtheSBpcyByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBUElMb2FkZXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIGNhbGxiYWNrTmFtZSA9IHRoaXMucHJvcHMuY2FsbGJhY2tOYW1lO1xuXG4gICAgICBpZiAoIXdpbmRvdykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09ICd3ZWJnbCcgJiYgd2luZG93ICYmICF3aW5kb3cuQk1hcEdMIHx8IHdpbmRvdyAmJiAhd2luZG93LkJNYXApIHtcbiAgICAgICAgaWYgKHdpbmRvdyAmJiB3aW5kb3dbY2FsbGJhY2tOYW1lXSkge1xuICAgICAgICAgIEFQSUxvYWRlci53YWl0UXVldWUucHVzaChbdGhpcy5maW5pc2gsIHRoaXMuaGFuZGxlRXJyb3JdKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRNYXAoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmxvYWRlZCA/IHRoaXMucHJvcHMuY2hpbGRyZW4gOiB0aGlzLnByb3BzLmZhbGxiYWNrID8gdGhpcy5wcm9wcy5mYWxsYmFjayh0aGlzLnN0YXRlLmVycm9yKSA6IHRoaXMuc3RhdGUuZXJyb3IgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMuc3RhdGUuZXJyb3IubWVzc2FnZSkgOiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTY3JpcHRTcmNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2NyaXB0U3JjKCkge1xuICAgICAgdmFyIGNmZyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgcHJvdG9jb2wgPSBjZmcucHJvdG9jb2wgfHwgd2luZG93LmxvY2F0aW9uLnByb3RvY29sO1xuXG4gICAgICBpZiAocHJvdG9jb2wuaW5kZXhPZignOicpID09PSAtMSkge1xuICAgICAgICBwcm90b2NvbCArPSAnOic7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcmdzID0gW1widj1cIi5jb25jYXQoY2ZnLnZlcnNpb24pLCBcImFrPVwiLmNvbmNhdChjZmcuYWtheSksIFwiY2FsbGJhY2s9XCIuY29uY2F0KGNmZy5jYWxsYmFja05hbWUpXTtcblxuICAgICAgaWYgKGNmZy50eXBlKSB7XG4gICAgICAgIGFyZ3MucHVzaChcInR5cGU9XCIuY29uY2F0KGNmZy50eXBlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwcm90b2NvbCwgXCIvL1wiKS5jb25jYXQoY2ZnLmhvc3RBbmRQYXRoLCBcIj9cIikuY29uY2F0KGFyZ3Muam9pbignJicpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogbG9hZCBCYWlkdU1hcCBpbiBzY3JpcHQgdGFnXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsb2FkTWFwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfbG9hZE1hcCA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBjYWxsYmFja05hbWUsIHNyYywgaSwgX3JldDtcblxuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrTmFtZSA9IHRoaXMucHJvcHMuY2FsbGJhY2tOYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdykge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDM7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBzcmMgPSB0aGlzLmdldFNjcmlwdFNyYygpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBmbHVzaCBxdWV1ZVxuICAgICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gQVBJTG9hZGVyLndhaXRRdWV1ZTtcbiAgICAgICAgICAgICAgICAgIEFQSUxvYWRlci53YWl0UXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tbMF0oKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBfdGhpczIuZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpZiAoIShpIDwgREVGQVVMVF9SRVRSWV9USU1FKSkge1xuICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDI0O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDc7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEwO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlU2NyaXB0KHNyYyk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwiYnJlYWtcIiwgMjQpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDEzO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gX2NvbnRleHRbXCJjYXRjaFwiXSg3KTtcblxuICAgICAgICAgICAgICAgIGlmICghKGkgPT09IERFRkFVTFRfUkVUUllfVElNRSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcIkZhaWxlZCB0byBsb2FkIEJhaWR1IE1hcDogXCIuY29uY2F0KF9jb250ZXh0LnQwLm1lc3NhZ2UpKTsgLy8gZmx1c2ggcXVldWVcblxuICAgICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gQVBJTG9hZGVyLndhaXRRdWV1ZTtcbiAgICAgICAgICAgICAgICAgIEFQSUxvYWRlci53YWl0UXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tbMV0oZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBfdGhpczIuaGFuZGxlRXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdjogdm9pZCAwXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0oKTtcblxuICAgICAgICAgICAgICAgIGlmICghKF90eXBlb2YoX3JldCkgPT09IFwib2JqZWN0XCIpKSB7XG4gICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIF9yZXQudik7XG5cbiAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGF5KGkgKiAxMDAwKTtcblxuICAgICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gNjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUsIHRoaXMsIFtbNywgMTNdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIGxvYWRNYXAoKSB7XG4gICAgICAgIHJldHVybiBfbG9hZE1hcC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbG9hZE1hcDtcbiAgICB9KClcbiAgfV0sIFt7XG4gICAga2V5OiBcInJlYWR5XCIsXG4gICAgdmFsdWU6XG4gICAgLyoqXG4gICAgICog5YWo5bGA5Y+v6IO95a2Y5Zyo5aSa5LiqTG9hZGVy5ZCM5pe25riy5p+TLCDkvYbmmK/lj6rog73nlLHkuIDkuKrotJ/otKPliqDovb1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIOetieW+hUJNYXDlsLHnu6pcbiAgICAgKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlYWR5ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoKSB7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghKHdpbmRvdyAmJiB3aW5kb3cuQk1hcCkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAoISh3aW5kb3cgJiYgd2luZG93LkJNYXBHTCkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gNDtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzLCByZWopIHtcbiAgICAgICAgICAgICAgICAgIEFQSUxvYWRlci53YWl0UXVldWUucHVzaChbcmVzLCByZWpdKTtcbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlMik7XG4gICAgICB9KSk7XG5cbiAgICAgIGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgICByZXR1cm4gX3JlYWR5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWFkeTtcbiAgICB9KClcbiAgfV0pO1xuXG4gIHJldHVybiBBUElMb2FkZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkFQSUxvYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGFrYXk6ICcnLFxuICBob3N0QW5kUGF0aDogJ2FwaS5tYXAuYmFpZHUuY29tL2FwaScsXG4gIHZlcnNpb246ICczLjAnLFxuICBjYWxsYmFja05hbWU6ICdsb2FkX2JtYXBfc2RrJyxcbiAgdHlwZTogJydcbn07XG5BUElMb2FkZXIud2FpdFF1ZXVlID0gW107XG5leHBvcnQgeyBBUElMb2FkZXIgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OUJVRWxNYjJGa1pYSXZhVzVrWlhndWRITjRJbDBzSW01aGJXVnpJanBiSWxKbFlXTjBJaXdpY21WeGRXbHlaVk5qY21sd2RDSXNJbVJsYkdGNUlpd2lkR2x0WlNJc0lsQnliMjFwYzJVaUxDSnlaWE52YkhabElpd2ljbVZxWldOMElpd2lkMmx1Wkc5M0lpd2ljMlYwVkdsdFpXOTFkQ0lzSWtSRlJrRlZURlJmVWtWVVVsbGZWRWxOUlNJc0lrRlFTVXh2WVdSbGNpSXNJbkJ5YjNCeklpd2lhR0Z1Wkd4bFJYSnliM0lpTENKbGNuSnZjaUlzSW5ObGRGTjBZWFJsSWl3aVptbHVhWE5vSWl3aWRIbHdaU0lzSWtKTllYQWlMQ0pDVFdGd1Iwd2lMQ0pzYjJGa1pXUWlMQ0p6ZEdGMFpTSXNJbUZyWVhraUxDSlVlWEJsUlhKeWIzSWlMQ0pqWVd4c1ltRmphMDVoYldVaUxDSjNZV2wwVVhWbGRXVWlMQ0p3ZFhOb0lpd2liRzloWkUxaGNDSXNJbU5vYVd4a2NtVnVJaXdpWm1Gc2JHSmhZMnNpTENKamIyeHZjaUlzSW0xbGMzTmhaMlVpTENKalptY2lMQ0p3Y205MGIyTnZiQ0lzSW14dlkyRjBhVzl1SWl3aWFXNWtaWGhQWmlJc0ltRnlaM01pTENKMlpYSnphVzl1SWl3aWFHOXpkRUZ1WkZCaGRHZ2lMQ0pxYjJsdUlpd2ljM0pqSWl3aVoyVjBVMk55YVhCMFUzSmpJaXdpY1hWbGRXVWlMQ0ptYjNKRllXTm9JaXdpZEdGemF5SXNJbWtpTENKbGNuSWlMQ0pGY25KdmNpSXNJbkpsY3lJc0luSmxhaUlzSWtOdmJYQnZibVZ1ZENJc0ltUmxabUYxYkhSUWNtOXdjeUpkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQUVN4TFFVRlFMRTFCUVd0Q0xFOUJRV3hDTzBGQlJVRXNVMEZCVTBNc1lVRkJWQ3hSUVVFNFFpeDNRa0ZCT1VJN1FVRkZRU3hQUVVGUExGTkJRVk5ETEV0QlFWUXNRMEZCWlVNc1NVRkJaaXhGUVVGcFJEdEJRVU4wUkN4VFFVRlBMRWxCUVVsRExFOUJRVW9zUTBGQldTeFZRVUZEUXl4UFFVRkVMRVZCUVZWRExFMUJRVllzUlVGQmNVSTdRVUZEZEVORExFbEJRVUZCTEUxQlFVMHNTVUZCU1VFc1RVRkJUU3hEUVVGRFF5eFZRVUZRTEVOQlFXdENTQ3hQUVVGc1FpeEZRVUV5UWtZc1NVRkJNMElzUTBGQlZqdEJRVU5FTEVkQlJrMHNRMEZCVUR0QlFVZEVPMEZCWTBRc1NVRkJUVTBzYTBKQlFXdENMRWRCUVVjc1EwRkJNMEk3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMGxCUTNGQ1F5eFRPenM3T3p0QlFUSkNia0lzY1VKQlFXMUNReXhMUVVGdVFpeEZRVUV3UXp0QlFVRkJPenRCUVVGQk96dEJRVU40UXl3NFFrRkJUVUVzUzBGQlRqczdRVUZFZDBNc1ZVRnRSbXhEUXl4WFFXNUdhME1zUjBGdFJuQkNMRlZCUVVORExFdEJRVVFzUlVGQmEwSTdRVUZEZEVNc1dVRkJTME1zVVVGQlRDeERRVUZqTzBGQlFVVkVMRkZCUVVGQkxFdEJRVXNzUlVGQlRFRTdRVUZCUml4UFFVRmtPMEZCUTBRc1MwRnlSbmxET3p0QlFVRkJMRlZCZFVac1EwVXNUVUYyUm10RExFZEJkVVo2UWl4WlFVRk5PMEZCUTNKQ0xGVkJRVWxTTEUxQlFVMHNTVUZCU1N4TlFVRkxTU3hMUVVGTUxFTkJRVmRMTEVsQlFWZ3NTMEZCYjBJc1QwRkJiRU1zUlVGQk1rTTdRVUZEZWtOVUxGRkJRVUZCTEUxQlFVMHNRMEZCUTFVc1NVRkJVQ3hIUVVGalZpeE5RVUZOTEVOQlFVTlhMRTFCUVhKQ08wRkJRMFE3TzBGQlEwUXNXVUZCUzBvc1VVRkJUQ3hEUVVGak8wRkJRMXBMTEZGQlFVRkJMRTFCUVUwc1JVRkJSVHRCUVVSSkxFOUJRV1E3UVVGSFJDeExRVGxHZVVNN08wRkJSWGhETEZWQlFVdERMRXRCUVV3c1IwRkJZVHRCUVVOWVJDeE5RVUZCUVN4TlFVRk5MRVZCUVVWU0xFdEJRVXNzUTBGQlEwc3NTVUZCVGl4TFFVRmxMRTlCUVdZc1IwRkJlVUpVTEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVOQkxFMUJRVTBzUTBGQlExY3NUVUZCTlVNc1IwRkJjVVJZTEUxQlFVMHNTVUZCU1N4RFFVRkRMRU5CUVVOQkxFMUJRVTBzUTBGQlExVTdRVUZFY2tVc1MwRkJZanM3UVVGSFFTeFJRVUZKTEUxQlFVdE9MRXRCUVV3c1EwRkJWMVVzU1VGQldDeEpRVUZ0UWl4SlFVRjJRaXhGUVVFMlFqdEJRVU16UWl4WlFVRk5MRWxCUVVsRExGTkJRVW9zUTBGQll5dzBRa0ZCWkN4RFFVRk9PMEZCUTBRN08wRkJVSFZETzBGQlVYcERPenM3TzFkQlJVUXNOa0pCUVRKQ08wRkJRM3BDTEZWQlFWRkRMRmxCUVZJc1IwRkJlVUlzUzBGQlMxb3NTMEZCT1VJc1EwRkJVVmtzV1VGQlVqczdRVUZEUVN4VlFVRkpMRU5CUVVOb1FpeE5RVUZNTEVWQlFXRTdRVUZEV0R0QlFVTkVPenRCUVVORUxGVkJRVXNzUzBGQlMwa3NTMEZCVEN4RFFVRlhTeXhKUVVGWUxFdEJRVzlDTEU5QlFYQkNMRWxCUVN0Q1ZDeE5RVUV2UWl4SlFVRjVReXhEUVVGRFFTeE5RVUZOTEVOQlFVTlhMRTFCUVd4RUxFbEJRVGhFV0N4TlFVRk5MRWxCUVVrc1EwRkJRMEVzVFVGQlRTeERRVUZEVlN4SlFVRndSaXhGUVVFeVJqdEJRVU42Uml4WlFVRkpWaXhOUVVGTkxFbEJRVWxCTEUxQlFVMHNRMEZCUTJkQ0xGbEJRVVFzUTBGQmNFSXNSVUZCTWtNN1FVRkRla05pTEZWQlFVRkJMRk5CUVZNc1EwRkJRMk1zVTBGQlZpeERRVUZ2UWtNc1NVRkJjRUlzUTBGQmVVSXNRMEZCUXl4TFFVRkxWaXhOUVVGT0xFVkJRV01zUzBGQlMwZ3NWMEZCYmtJc1EwRkJla0k3UVVGRFFUdEJRVU5FT3p0QlFVVkVMR0ZCUVV0akxFOUJRVXc3UVVGRFJEdEJRVU5HT3pzN1YwRkZSQ3hyUWtGQlowSTdRVUZEWkN4aFFVRlBMRXRCUVV0T0xFdEJRVXdzUTBGQlYwUXNUVUZCV0N4SFFVTk1MRXRCUVV0U0xFdEJRVXdzUTBGQlYyZENMRkZCUkU0c1IwRkZTQ3hMUVVGTGFFSXNTMEZCVEN4RFFVRlhhVUlzVVVGQldDeEhRVU5HTEV0QlFVdHFRaXhMUVVGTUxFTkJRVmRwUWl4UlFVRllMRU5CUVc5Q0xFdEJRVXRTTEV0QlFVd3NRMEZCVjFBc1MwRkJMMElzUTBGRVJTeEhRVVZCTEV0QlFVdFBMRXRCUVV3c1EwRkJWMUFzUzBGQldDeG5Ra0ZEUmp0QlFVRkxMRkZCUVVFc1MwRkJTeXhGUVVGRk8wRkJRVVZuUWl4VlFVRkJRU3hMUVVGTExFVkJRVVU3UVVGQlZEdEJRVUZhTEZOQlFTdENMRXRCUVV0VUxFdEJRVXdzUTBGQlYxQXNTMEZCV0N4RFFVRnBRbWxDTEU5QlFXaEVMRU5CUkVVc1IwRkZRU3hKUVU1S08wRkJUMFE3T3p0WFFVVkVMSGRDUVVGMVFqdEJRVU55UWl4VlFVRk5ReXhIUVVGSExFZEJRVWNzUzBGQlMzQkNMRXRCUVdwQ08wRkJRMEVzVlVGQlNYRkNMRkZCUVZFc1IwRkJTVVFzUjBGQlJ5eERRVUZEUXl4UlFVRktMRWxCUVdkQ2VrSXNUVUZCVFN4RFFVRkRNRUlzVVVGQlVDeERRVUZuUWtRc1VVRkJhRVE3TzBGQlEwRXNWVUZCU1VFc1VVRkJVU3hEUVVGRlJTeFBRVUZXTEVOQlFXdENMRWRCUVd4Q0xFMUJRVEpDTEVOQlFVTXNRMEZCYUVNc1JVRkJiVU03UVVGRGFrTkdMRkZCUVVGQkxGRkJRVkVzU1VGQlNTeEhRVUZhTzBGQlEwUTdPMEZCUTBRc1ZVRkJUVWNzU1VGQlNTeEhRVUZITEdGQlFVMUtMRWRCUVVjc1EwRkJRMHNzVDBGQlZpeG5Ra0ZCTWtKTUxFZEJRVWNzUTBGQlExWXNTVUZCTDBJc2MwSkJRVzFFVlN4SFFVRkhMRU5CUVVOU0xGbEJRWFpFTEVWQlFXSTdPMEZCUTBFc1ZVRkJTVkVzUjBGQlJ5eERRVUZEWml4SlFVRlNMRVZCUVdNN1FVRkRXbTFDTEZGQlFVRkJMRWxCUVVrc1EwRkJRMVlzU1VGQlRDeG5Ra0ZCYTBKTkxFZEJRVWNzUTBGQlEyWXNTVUZCZEVJN1FVRkRSRHM3UVVGRFJDeDFRa0ZCVldkQ0xGRkJRVllzWlVGQmRVSkVMRWRCUVVjc1EwRkJRMDBzVjBGQk0wSXNZMEZCTUVOR0xFbEJRVWtzUTBGQlEwY3NTVUZCVEN4RFFVRlZMRWRCUVZZc1EwRkJNVU03UVVGRFJEdEJRVU5FTzBGQlEwWTdRVUZEUVRzN096czdPRVZCUTBVN1FVRkJRVHM3UVVGQlFUczdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVOVlppeG5Ra0ZCUVVFc1dVRkVWaXhIUVVNeVFpeExRVUZMV2l4TFFVUm9ReXhEUVVOVldTeFpRVVJXT3p0QlFVRkJMRzlDUVVWUGFFSXNUVUZHVUR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3UVVGQlFUczdRVUZCUVR0QlFVdFJaME1zWjBKQlFVRkJMRWRCVEZJc1IwRkxZeXhMUVVGTFF5eFpRVUZNTEVWQlRHUTdPMEZCVFVkcVF5eG5Ra0ZCUVVFc1RVRkJSQ3hEUVVGblFtZENMRmxCUVdoQ0xFbEJRWFZETEZsQlFVMDdRVUZETTBNN1FVRkRRU3h6UWtGQlRXdENMRXRCUVVzc1IwRkJSeTlDTEZOQlFWTXNRMEZCUTJNc1UwRkJlRUk3UVVGRFFXUXNhMEpCUVVGQkxGTkJRVk1zUTBGQlEyTXNVMEZCVml4SFFVRnpRaXhGUVVGMFFqdEJRVU5CYVVJc2EwSkJRVUZCTEV0QlFVc3NRMEZCUTBNc1QwRkJUaXhEUVVGakxGVkJRVU5ETEVsQlFVUTdRVUZCUVN3eVFrRkJWVUVzU1VGQlNTeERRVUZETEVOQlFVUXNRMEZCU2l4RlFVRldPMEZCUVVFc2JVSkJRV1E3TzBGQlEwRXNhMEpCUVVFc1RVRkJTU3hEUVVGRE5VSXNUVUZCVER0QlFVTkVMR2xDUVU1RU96dEJRVkZUTmtJc1owSkJRVUZCTEVOQlpGZ3NSMEZqWlN4RFFXUm1PenRCUVVGQk8wRkJRVUVzYzBKQlkydENRU3hEUVVGRExFZEJRVWR1UXl4clFrRmtkRUk3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUVVFN1FVRkJRVHRCUVVGQkxIVkNRV2RDV1ZJc1lVRkJZU3hEUVVGRGMwTXNSMEZCUkN4RFFXaENla0k3TzBGQlFVRTdRVUZCUVRzN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlFVRXNjMEpCYlVKVlN5eERRVUZETEV0QlFVdHVReXhyUWtGQmEwSXNSMEZCUnl4RFFXNUNja003UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUVVFN1FVRnZRbEVzYzBKQlFVMXZReXhIUVVGSExFZEJRVWNzU1VGQlNVTXNTMEZCU2l4eFEwRkJkVU1zV1VGQlRXaENMRTlCUVRkRExFVkJRVm9zUTBGd1FsSXNRMEZ4UWxFN08wRkJRMEVzYzBKQlFVMVhMRXRCUVVzc1IwRkJSeTlDTEZOQlFWTXNRMEZCUTJNc1UwRkJlRUk3UVVGRFFXUXNhMEpCUVVGQkxGTkJRVk1zUTBGQlEyTXNVMEZCVml4SFFVRnpRaXhGUVVGMFFqdEJRVU5CYVVJc2EwSkJRVUZCTEV0QlFVc3NRMEZCUTBNc1QwRkJUaXhEUVVGakxGVkJRVU5ETEVsQlFVUTdRVUZCUVN3eVFrRkJWVUVzU1VGQlNTeERRVUZETEVOQlFVUXNRMEZCU2l4RFFVRlJSU3hIUVVGU0xFTkJRVlk3UVVGQlFTeHRRa0ZCWkRzN1FVRkRRU3hyUWtGQlFTeE5RVUZKTEVOQlFVTnFReXhYUVVGTUxFTkJRV2xDYVVNc1IwRkJha0k3TzBGQlEwRTdRVUZCUVR0QlFVRkJPMEZCTVVKU096dEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVGQk96dEJRVUZCTzBGQlFVRTdRVUZCUVN4MVFrRTBRbGt6UXl4TFFVRkxMRU5CUVVNd1F5eERRVUZETEVkQlFVY3NTVUZCVEN4RFFUVkNha0k3TzBGQlFVRTdRVUZqTUVOQkxHZENRVUZCUVN4RFFVRkRMRVZCWkRORE8wRkJRVUU3UVVGQlFUczdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFTeFBPenM3T3pzN096czdPenRCUVhCRlFUdEJRVU5HTzBGQlEwRTdPMEZCUlVVN1FVRkRSanRCUVVOQk96czBSVUZEUlR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUVzYzBKQlEwMXlReXhOUVVGTkxFbEJRVWxCTEUxQlFVMHNRMEZCUTFVc1NVRkVka0k3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUVVFN08wRkJRVUU3UVVGQlFTeHpRa0ZKVFZZc1RVRkJUU3hKUVVGSlFTeE5RVUZOTEVOQlFVTlhMRTFCU25aQ08wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVRkJPenRCUVVGQk8wRkJRVUVzYTBSQlQxTXNTVUZCU1dRc1QwRkJTaXhEUVVGWkxGVkJRVU15UXl4SFFVRkVMRVZCUVUxRExFZEJRVTRzUlVGQll6dEJRVU12UW5SRExHdENRVUZCUVN4VFFVRlRMRU5CUVVOakxGTkJRVllzUTBGQmIwSkRMRWxCUVhCQ0xFTkJRWGxDTEVOQlFVTnpRaXhIUVVGRUxFVkJRVTFETEVkQlFVNHNRMEZCZWtJN1FVRkRSQ3hwUWtGR1RTeERRVkJVT3p0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTEU4N096czdPenM3T3pzN08wVkJhRUp4UTJoRUxFdEJRVXNzUTBGQlEybEVMRk03TzBGQlFYaENka01zVXl4RFFVTk1kME1zV1N4SFFVRmxPMEZCUXpOQ04wSXNSVUZCUVVFc1NVRkJTU3hGUVVGRkxFVkJSSEZDTzBGQlJUTkNaMElzUlVGQlFVRXNWMEZCVnl4RlFVRkZMSFZDUVVaak8wRkJSek5DUkN4RlFVRkJRU3hQUVVGUExFVkJRVVVzUzBGSWEwSTdRVUZKTTBKaUxFVkJRVUZCTEZsQlFWa3NSVUZCUlN4bFFVcGhPMEZCU3pOQ1VDeEZRVUZCUVN4SlFVRkpMRVZCUVVVN1FVRk1jVUlzUXp0QlFVUldUaXhUTEVOQldVcGpMRk1zUjBGQmVVTXNSVHRUUVZweVEyUXNVeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtseHVJQ29nNVlpZDVhZUw1WXlXNVpLTTVZcWc2TDI5WW1GcFpIWGxuTERsbTc1Y2JpQXFMMXh1YVcxd2IzSjBJRkpsWVdOMElHWnliMjBnSjNKbFlXTjBKenRjYm1sdGNHOXlkQ0I3SUVOdmJtWnBaeUI5SUdaeWIyMGdKeTR1TDJOdmJXMXZiaTl0WVhBbk8xeHVhVzF3YjNKMElIc2djbVZ4ZFdseVpWTmpjbWx3ZENCOUlHWnliMjBnSnk0dUwzVjBhV3h6TDNKbGNYVnBjbVZUWTNKcGNIUW5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWkdWc1lYa29kR2x0WlRvZ2JuVnRZbVZ5S1RvZ1VISnZiV2x6WlR4MWJtUmxabWx1WldRK0lIdGNiaUFnY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0NoeVpYTnZiSFpsTENCeVpXcGxZM1FwSUQwK0lIdGNiaUFnSUNCM2FXNWtiM2NnSmlZZ2QybHVaRzkzTG5ObGRGUnBiV1Z2ZFhRb2NtVnpiMngyWlN3Z2RHbHRaU2s3WEc0Z0lIMHBPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFRlFTVXh2WVdSbGNsQnliM0J6SUdWNGRHVnVaSE1nUTI5dVptbG5JSHRjYmlBZ0x5b3FYRzRnSUNBcUlPZVVxT1M2anVXeGxlZWt1dVdLb09pOXZlUzRyZWFJbHVtVW1laXZyK2VLdHVhQWdWeHVJQ0FnS2k5Y2JpQWdabUZzYkdKaFkycy9PaUFvWlhKeWIzSS9PaUJGY25KdmNpa2dQVDRnVW1WaFkzUXVVbVZoWTNST2IyUmxPMXh1ZlZ4dVhHNXBiblJsY21aaFkyVWdVM1JoZEdVZ2UxeHVJQ0JzYjJGa1pXUTZJR0p2YjJ4bFlXNDdYRzRnSUdWeWNtOXlQem9nUlhKeWIzSTdYRzU5WEc1Y2JtTnZibk4wSUVSRlJrRlZURlJmVWtWVVVsbGZWRWxOUlNBOUlETTdYRzVjYmk4cUtseHVJQ29nUVZCSlRHOWhaR1Z5SU9lVXFPUzZqdVdLb09pOXZlZVp2dVc2cHVXY3NPV2J2dVMrbmVpMWxseHVJQ292WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkJVRWxNYjJGa1pYSWdaWGgwWlc1a2N5QlNaV0ZqZEM1RGIyMXdiMjVsYm5ROFFWQkpURzloWkdWeVVISnZjSE1zSUZOMFlYUmxQaUI3WEc0Z0lIQjFZbXhwWXlCemRHRjBhV01nWkdWbVlYVnNkRkJ5YjNCeklEMGdlMXh1SUNBZ0lHRnJZWGs2SUNjbkxGeHVJQ0FnSUdodmMzUkJibVJRWVhSb09pQW5ZWEJwTG0xaGNDNWlZV2xrZFM1amIyMHZZWEJwSnl4Y2JpQWdJQ0IyWlhKemFXOXVPaUFuTXk0d0p5eGNiaUFnSUNCallXeHNZbUZqYTA1aGJXVTZJQ2RzYjJGa1gySnRZWEJmYzJSckp5eGNiaUFnSUNCMGVYQmxPaUFuSnl4Y2JpQWdmVHRjYmx4dUlDQXZLaXBjYmlBZ0lDb2c1WVdvNWJHQTVZK3Y2SU85NWEyWTVaeW81YVNhNUxpcVRHOWhaR1Z5NVpDTTVwZTI1cml5NXArVExDRGt2WWJtbUsvbGo2cm9nNzNubExIa3VJRGt1S3JvdEovb3RLUGxpcURvdmIxY2JpQWdJQ292WEc0Z0lIQnlhWFpoZEdVZ2MzUmhkR2xqSUhkaGFYUlJkV1YxWlRvZ1FYSnlZWGs4VzBaMWJtTjBhVzl1TENCR2RXNWpkR2x2YmwwK0lEMGdXMTA3WEc0Z0lDOHFLbHh1SUNBZ0tpRG5yWW5sdm9WQ1RXRnc1YkN4NTd1cVhHNGdJQ0FxTDF4dUlDQndkV0pzYVdNZ2MzUmhkR2xqSUdGemVXNWpJSEpsWVdSNUtDa2dlMXh1SUNBZ0lHbG1JQ2gzYVc1a2IzY2dKaVlnZDJsdVpHOTNMa0pOWVhBcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hkcGJtUnZkeUFtSmlCM2FXNWtiM2N1UWsxaGNFZE1LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1VISnZiV2x6WlNnb2NtVnpMQ0J5WldvcElEMCtJSHRjYmlBZ0lDQWdJRUZRU1V4dllXUmxjaTUzWVdsMFVYVmxkV1V1Y0hWemFDaGJjbVZ6TENCeVpXcGRLVHRjYmlBZ0lDQjlLVHRjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITTZJRUZRU1V4dllXUmxjbEJ5YjNCektTQjdYRzRnSUNBZ2MzVndaWElvY0hKdmNITXBPMXh1SUNBZ0lIUm9hWE11YzNSaGRHVWdQU0I3WEc0Z0lDQWdJQ0JzYjJGa1pXUTZJSEJ5YjNCekxuUjVjR1VnUFQwOUlDZDNaV0puYkNjZ1B5QjNhVzVrYjNjZ0ppWWdJU0YzYVc1a2IzY3VRazFoY0VkTUlEb2dkMmx1Wkc5M0lDWW1JQ0VoZDJsdVpHOTNMa0pOWVhBc1hHNGdJQ0FnZlR0Y2JpQWdJQ0JwWmlBb2RHaHBjeTV3Y205d2N5NWhhMkY1SUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owSmhhVVIxVFdGd09pQmhhMkY1SUdseklISmxjWFZwY21Wa0p5azdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjSFZpYkdsaklHTnZiWEJ2Ym1WdWRFUnBaRTF2ZFc1MEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ1kyRnNiR0poWTJ0T1lXMWxJSDBnUFNCMGFHbHpMbkJ5YjNCek8xeHVJQ0FnSUdsbUlDZ2hkMmx1Wkc5M0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNnb2RHaHBjeTV3Y205d2N5NTBlWEJsSUQwOVBTQW5kMlZpWjJ3bklDWW1JSGRwYm1SdmR5QW1KaUFoZDJsdVpHOTNMa0pOWVhCSFRDa2dmSHdnS0hkcGJtUnZkeUFtSmlBaGQybHVaRzkzTGtKTllYQXBLU0I3WEc0Z0lDQWdJQ0JwWmlBb2QybHVaRzkzSUNZbUlIZHBibVJ2ZDF0allXeHNZbUZqYTA1aGJXVWdZWE1nWVc1NVhTa2dlMXh1SUNBZ0lDQWdJQ0JCVUVsTWIyRmtaWEl1ZDJGcGRGRjFaWFZsTG5CMWMyZ29XM1JvYVhNdVptbHVhWE5vTENCMGFHbHpMbWhoYm1Sc1pVVnljbTl5WFNrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RHaHBjeTVzYjJGa1RXRndLQ2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY0hWaWJHbGpJSEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV6ZEdGMFpTNXNiMkZrWldRZ1B5QW9YRzRnSUNBZ0lDQjBhR2x6TG5CeWIzQnpMbU5vYVd4a2NtVnVYRzRnSUNBZ0tTQTZJSFJvYVhNdWNISnZjSE11Wm1Gc2JHSmhZMnNnUHlBb1hHNGdJQ0FnSUNCMGFHbHpMbkJ5YjNCekxtWmhiR3hpWVdOcktIUm9hWE11YzNSaGRHVXVaWEp5YjNJcFhHNGdJQ0FnS1NBNklIUm9hWE11YzNSaGRHVXVaWEp5YjNJZ1B5QW9YRzRnSUNBZ0lDQThaR2wySUhOMGVXeGxQWHQ3SUdOdmJHOXlPaUFuY21Wa0p5QjlmVDU3ZEdocGN5NXpkR0YwWlM1bGNuSnZjaTV0WlhOellXZGxmVHd2WkdsMlBseHVJQ0FnSUNrZ09pQnVkV3hzTzF4dUlDQjlYRzVjYmlBZ2NISnBkbUYwWlNCblpYUlRZM0pwY0hSVGNtTW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ1kyWm5JRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JzWlhRZ2NISnZkRzlqYjJ3Z1BTQW9ZMlpuTG5CeWIzUnZZMjlzSUh4OElIZHBibVJ2ZHk1c2IyTmhkR2x2Ymk1d2NtOTBiMk52YkNrZ1lYTWdRMjl1Wm1sbld5ZHdjbTkwYjJOdmJDZGRPMXh1SUNBZ0lHbG1JQ2h3Y205MGIyTnZiQ0V1YVc1a1pYaFBaaWduT2ljcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ2NISnZkRzlqYjJ3Z0t6MGdKem9uTzF4dUlDQWdJSDFjYmlBZ0lDQmpiMjV6ZENCaGNtZHpJRDBnVzJCMlBTUjdZMlpuTG5abGNuTnBiMjU5WUN3Z1lHRnJQU1I3WTJabkxtRnJZWGw5WUN3Z1lHTmhiR3hpWVdOclBTUjdZMlpuTG1OaGJHeGlZV05yVG1GdFpYMWdYVHRjYmlBZ0lDQnBaaUFvWTJabkxuUjVjR1VwSUh0Y2JpQWdJQ0FnSUdGeVozTXVjSFZ6YUNoZ2RIbHdaVDBrZTJObVp5NTBlWEJsZldBcE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdZQ1I3Y0hKdmRHOWpiMng5THk4a2UyTm1aeTVvYjNOMFFXNWtVR0YwYUgwL0pIdGhjbWR6TG1wdmFXNG9KeVluS1gxZ08xeHVJQ0I5WEc0Z0lDOHFLbHh1SUNBZ0tpQnNiMkZrSUVKaGFXUjFUV0Z3SUdsdUlITmpjbWx3ZENCMFlXZGNiaUFnSUNvdlhHNGdJSEJ5YVhaaGRHVWdZWE41Ym1NZ2JHOWhaRTFoY0NncElIdGNiaUFnSUNCamIyNXpkQ0I3SUdOaGJHeGlZV05yVG1GdFpTQjlJRDBnZEdocGN5NXdjbTl3Y3p0Y2JpQWdJQ0JwWmlBb0lYZHBibVJ2ZHlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQmpiMjV6ZENCemNtTWdQU0IwYUdsekxtZGxkRk5qY21sd2RGTnlZeWdwTzF4dUlDQWdJQ2gzYVc1a2IzY2dZWE1nWVc1NUtWdGpZV3hzWW1GamEwNWhiV1VnWVhNZ1lXNTVYU0E5SUNncElEMCtJSHRjYmlBZ0lDQWdJQzh2SUdac2RYTm9JSEYxWlhWbFhHNGdJQ0FnSUNCamIyNXpkQ0J4ZFdWMVpTQTlJRUZRU1V4dllXUmxjaTUzWVdsMFVYVmxkV1U3WEc0Z0lDQWdJQ0JCVUVsTWIyRmtaWEl1ZDJGcGRGRjFaWFZsSUQwZ1cxMDdYRzRnSUNBZ0lDQnhkV1YxWlM1bWIzSkZZV05vS0NoMFlYTnJLU0E5UGlCMFlYTnJXekJkS0NrcE8xeHVJQ0FnSUNBZ2RHaHBjeTVtYVc1cGMyZ29LVHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JFUlVaQlZVeFVYMUpGVkZKWlgxUkpUVVU3SUdrckt5a2dlMXh1SUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ1lYZGhhWFFnY21WeGRXbHlaVk5qY21sd2RDaHpjbU1wTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJSDBnWTJGMFkyZ2dLR1Z5Y205eUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNocElEMDlQU0JFUlVaQlZVeFVYMUpGVkZKWlgxUkpUVVVnTFNBeEtTQjdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaWEp5SUQwZ2JtVjNJRVZ5Y205eUtHQkdZV2xzWldRZ2RHOGdiRzloWkNCQ1lXbGtkU0JOWVhBNklDUjdaWEp5YjNJdWJXVnpjMkZuWlgxZ0tUdGNiaUFnSUNBZ0lDQWdJQ0F2THlCbWJIVnphQ0J4ZFdWMVpWeHVJQ0FnSUNBZ0lDQWdJR052Ym5OMElIRjFaWFZsSUQwZ1FWQkpURzloWkdWeUxuZGhhWFJSZFdWMVpUdGNiaUFnSUNBZ0lDQWdJQ0JCVUVsTWIyRmtaWEl1ZDJGcGRGRjFaWFZsSUQwZ1cxMDdYRzRnSUNBZ0lDQWdJQ0FnY1hWbGRXVXVabTl5UldGamFDZ29kR0Z6YXlrZ1BUNGdkR0Z6YTFzeFhTaGxjbklwS1R0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG1oaGJtUnNaVVZ5Y205eUtHVnljaWs3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHRjNZV2wwSUdSbGJHRjVLR2tnS2lBeE1EQXdLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J3Y21sMllYUmxJR2hoYm1Sc1pVVnljbTl5SUQwZ0tHVnljbTl5T2lCRmNuSnZjaWtnUFQ0Z2UxeHVJQ0FnSUhSb2FYTXVjMlYwVTNSaGRHVW9leUJsY25KdmNpQjlLVHRjYmlBZ2ZUdGNibHh1SUNCd2NtbDJZWFJsSUdacGJtbHphQ0E5SUNncElEMCtJSHRjYmlBZ0lDQnBaaUFvZDJsdVpHOTNJQ1ltSUhSb2FYTXVjSEp2Y0hNdWRIbHdaU0E5UFQwZ0ozZGxZbWRzSnlrZ2UxeHVJQ0FnSUNBZ2QybHVaRzkzTGtKTllYQWdQU0IzYVc1a2IzY3VRazFoY0VkTUlHRnpJR0Z1ZVR0Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1elpYUlRkR0YwWlNoN1hHNGdJQ0FnSUNCc2IyRmtaV1E2SUhSeWRXVXNYRzRnSUNBZ2ZTazdYRzRnSUgwN1hHNTlYRzRpWFgwPSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHkuanNcIik7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcblxuICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkMjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICog5om56YeP5Yib5bu65aSa5Liq5aaC5LiLIFN0YXRl77yM55uR5ZCs5bm26K6+572u5YC877yMXG4gKiDnu4Tku7blsZ7mgKfmm7TmlLkgPENvbXBvbmV0IGVuYWJsZURyYWdnaW5nPXt0cnVlfSA+XG4gKiDmoLnmja4gZW5hYmxlRHJhZ2dpbmcg55qEIEJvb2xlYW4g5YC877yM5omn6KGMIGBlbmFibGVgIOWSjCBgZGlzYWJsZWAg5byA5aS055qE5Ye95pWw44CCXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIGNvbnN0IFtlbmFibGVEcmFnZ2luZywgc2V0RW5hYmxlRHJhZ2dpbmddID0gdXNlU3RhdGUocHJvcHMuZW5hYmxlRHJhZ2dpbmcpO1xuICogdXNlRWZmZWN0KCgpID0+IHtcbiAqICAgY29uc29sZS5sb2coJ35+OmVuYWJsZURyYWdnaW5nJywgZW5hYmxlRHJhZ2dpbmcsIHByb3BzLmVuYWJsZURyYWdnaW5nLCBwb2x5bGluZSk7XG4gKiAgIHNldEVuYWJsZURyYWdnaW5nKHByb3BzLmVuYWJsZURyYWdnaW5nKVxuICogfSwgW3BvbHlsaW5lLCBlbmFibGVEcmFnZ2luZywgcHJvcHMuZW5hYmxlRHJhZ2dpbmddKTtcbiAqIGBgYFxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gcHJvcHNcbiAqIEBwYXJhbSBwcm9wc05hbWVcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRW5hYmxlUHJvcGVydGllcyhpbnN0YW5jZSkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgcHJvcHNOYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcbiAgcHJvcHNOYW1lLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZU5hbWUgPSBcImVuYWJsZVwiLmNvbmNhdChuYW1lKTtcblxuICAgIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShwcm9wc1tlTmFtZV0pLFxuICAgICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgICAgc3RhdGUgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGZ1bk5hbWUgPSBwcm9wc1tlTmFtZV0gPyBcImVuYWJsZVwiLmNvbmNhdChuYW1lKSA6IFwiZGlzYWJsZVwiLmNvbmNhdChuYW1lKTtcblxuICAgICAgaWYgKGluc3RhbmNlICYmIHByb3BzW2VOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGluc3RhbmNlW2Z1bk5hbWVdICYmIGluc3RhbmNlW2Z1bk5hbWVdKCk7XG5cbiAgICAgICAgaWYgKHByb3BzW2VOYW1lXSAhPT0gc3RhdGUpIHtcbiAgICAgICAgICBzZXRTdGF0ZShwcm9wc1tlTmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW2luc3RhbmNlLCBwcm9wc1tlTmFtZV1dKTtcbiAgfSk7XG59XG4vKipcbiAqIOmSiOWvuSBPdmVybGF5IOexu+Wei+eahOe7hOS7tu+8jOacieWFrOWFseeahOaYr+WQpuaYvuekuiDlr7nosaHlpITnkIZcbiAqIOmAmui/h+WPguaVsCBgdmlzaWFibGVgIOadpeaOp+WItuaJp+ihjCBgc2hvdygpYCBvciBgaGlkZSgpYFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWaXNpYWJsZShpbnN0YW5jZSkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgdmlzaWFibGUgPSBwcm9wcy52aXNpYWJsZTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKHZpc2lhYmxlKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlNFsxXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbnN0YW5jZSAmJiB2aXNpYWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZygndmlzaWFibGUnLCB2aXNpYWJsZSk7XG5cbiAgICAgIGlmICh2aXNpYWJsZSkge1xuICAgICAgICBjb25zb2xlLmxvZygndmlzaWFibGUnLCBpbnN0YW5jZSk7XG4gICAgICAgIGluc3RhbmNlLnNob3cgJiYgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UuaGlkZSAmJiBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2aXNpYWJsZSAhPT0gc3RhdGUpIHtcbiAgICAgICAgc2V0U3RhdGUodmlzaWFibGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2luc3RhbmNlLCB2aXNpYWJsZV0pO1xufVxuLyoqXG4gKiDmibnph4/liJvlu7rlpJrkuKrlpoLkuIsgU3RhdGXvvIznm5HlkKzlubborr7nva7lgLzvvIxcbiAqIOaJp+ihjCBgc2V0YCDlvIDlpLTnmoTlh73mlbDjgIJcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHByb3BzXG4gKiBAcGFyYW0gcHJvcHNOYW1lXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb3BlcnRpZXMoaW5zdGFuY2UsIHByb3BzKSB7XG4gIHZhciBwcm9wc05hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICBwcm9wc05hbWUuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBlTmFtZSA9IFwiXCIuY29uY2F0KG5hbWUuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkpLmNvbmNhdChuYW1lLnNsaWNlKDEpKTtcblxuICAgIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUocHJvcHNbZU5hbWVdKSxcbiAgICAgICAgX3VzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTUsIDIpLFxuICAgICAgICBzdGF0ZSA9IF91c2VTdGF0ZTZbMF0sXG4gICAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlNlsxXTtcblxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2VbXCJzZXRcIi5jb25jYXQobmFtZSldICYmIHByb3BzW2VOYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlnZDmoIfngrnnmoTlj4LmlbDorr7nva7vvIzmr5Tlr7ksIOWdkOagh+eCueeahOWPguaVsOiuvue9rlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGRhdGEgPSBwcm9wc1tlTmFtZV07XG5cbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sbmcgJiYgZGF0YS5sYXQpIHtcbiAgICAgICAgICBkYXRhID0gbmV3IEJNYXAuUG9pbnQoZGF0YS5sbmcsIGRhdGEubGF0KTtcbiAgICAgICAgICB2YXIgcHJlRGF0YSA9IHN0YXRlO1xuXG4gICAgICAgICAgaWYgKHByZURhdGEgJiYgcHJlRGF0YS5sbmcgJiYgcHJlRGF0YS5sYXQpIHtcbiAgICAgICAgICAgIHByZURhdGEgPSBuZXcgQk1hcC5Qb2ludChwcmVEYXRhLmxuZywgcHJlRGF0YS5sYXQpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5lcXVhbHMocHJlRGF0YSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGluc3RhbmNlW1wic2V0XCIuY29uY2F0KG5hbWUpXShkYXRhKTsgLy8g5bGe5oCn5Y+R55Sf5Y+Y5YyW57yT5a2YXG5cbiAgICAgICAgaWYgKHN0YXRlICE9PSBwcm9wc1tlTmFtZV0pIHtcbiAgICAgICAgICBpZiAoZU5hbWUgPT09ICdib3VuZHMnKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgJiYgcHJvcHNbZU5hbWVdICYmICFzdGF0ZS5lcXVhbHMocHJvcHNbZU5hbWVdKSkge1xuICAgICAgICAgICAgICBzZXRTdGF0ZShwcm9wc1tlTmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRTdGF0ZShwcm9wc1tlTmFtZV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtpbnN0YW5jZSwgcHJvcHNbZU5hbWVdXSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIOe7keWumuS6i+S7tlxuICogQHBhcmFtIGluc3RhbmNlIOWunuS+i+WvueixoVxuICogQHBhcmFtIHByb3BzIOS8oOmAkui/m+adpeeahCBwcm9wc1xuICogQHBhcmFtIGV2ZW50TmFtZSDkuovku7bnmoTlkI3lrZfvvIzlpoLvvIzmiJHku6zkvb/nlKggYG9uQ2xpY2tgIOS6i+S7tu+8jOacgOe7iOiiq+i9rOaNouaIkO+8jGBjbGlja2Ag57uR5a6a5Yiw5a6e5L6L5Lit77yMYG9uRGJsQ2xpY2tgID0+IGBkYmxjbGlja2BcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIHVzZUV2ZW50UHJvcGVydGllczxCTWFwLk1hcmtlciwgVXNlTWFya2VyPihtYXJrZXIhLCBwcm9wcywgW1xuICogICAnQ2xpY2snLCAnRGJsQ2xpY2snLCAnTW91c2VEb3duJywgJ01vdXNlVXAnLCAnTW91c2VPdXQnLCAnTW91c2VPdmVyJ1xuICogXSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUV2ZW50UHJvcGVydGllcyhpbnN0YW5jZSkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgZXZlbnROYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcbiAgdmFyIHR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMyA/IGFyZ3VtZW50c1szXSA6IHVuZGVmaW5lZDtcbiAgZXZlbnROYW1lLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZXZlbnROYW1lID0gXCJvblwiLmNvbmNhdChuYW1lKTtcbiAgICB2YXIgZXZlbnRIYW5kbGUgPSBwcm9wc1tldmVudE5hbWVdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWluc3RhbmNlKSByZXR1cm47XG5cbiAgICAgIGlmIChldmVudEhhbmRsZSAmJiBuYW1lKSB7XG4gICAgICAgIHZhciBlTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdDYW1lbENhc2UnKSB7XG4gICAgICAgICAgZU5hbWUgPSBuYW1lLnJlcGxhY2UobmFtZVswXSwgbmFtZVswXS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoZU5hbWUsIGV2ZW50SGFuZGxlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKGVOYW1lLCBldmVudEhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwgW2luc3RhbmNlLCBwcm9wc1tldmVudE5hbWVdXSk7XG4gIH0pO1xufVxuLyoqXG4gKiDojrflj5bkuIrkuIDova7nmoQgcHJvcHMg5oiWIHN0YXRlXG4gKiBIb3cgdG8gZ2V0IHRoZSBwcmV2aW91cyBwcm9wcyBvciBzdGF0ZT9cbiAqIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1mYXEuaHRtbCNob3ctdG8tZ2V0LXRoZS1wcmV2aW91cy1wcm9wcy1vci1zdGF0ZVxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBmdW5jdGlvbiBDb3VudGVyKCkge1xuICogICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICogICBjb25zdCBwcmV2Q291bnQgPSB1c2VQcmV2aW91cyhjb3VudCk7XG4gKiAgIHJldHVybiA8aDE+Tm93OiB7Y291bnR9LCBiZWZvcmU6IHtwcmV2Q291bnR9PC9oMT47XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJldmlvdXModmFsdWUpIHtcbiAgdmFyIHJlZiA9IHVzZVJlZigpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5amIyMXRiMjR2YUc5dmEzTXVkSE40SWwwc0ltNWhiV1Z6SWpwYkluVnpaVVZtWm1WamRDSXNJblZ6WlZOMFlYUmxJaXdpZFhObFVtVm1JaXdpZFhObFJXNWhZbXhsVUhKdmNHVnlkR2xsY3lJc0ltbHVjM1JoYm1ObElpd2ljSEp2Y0hNaUxDSndjbTl3YzA1aGJXVWlMQ0ptYjNKRllXTm9JaXdpYm1GdFpTSXNJbVZPWVcxbElpd2ljM1JoZEdVaUxDSnpaWFJUZEdGMFpTSXNJbVoxYms1aGJXVWlMQ0oxYm1SbFptbHVaV1FpTENKMWMyVldhWE5wWVdKc1pTSXNJblpwYzJsaFlteGxJaXdpWTI5dWMyOXNaU0lzSW14dlp5SXNJbk5vYjNjaUxDSm9hV1JsSWl3aWRYTmxVSEp2Y0dWeWRHbGxjeUlzSW1Ob1lYSkJkQ0lzSW5SdlRHOTNaWEpEWVhObElpd2ljMnhwWTJVaUxDSmtZWFJoSWl3aWJHNW5JaXdpYkdGMElpd2lRazFoY0NJc0lsQnZhVzUwSWl3aWNISmxSR0YwWVNJc0ltVnhkV0ZzY3lJc0luVnpaVVYyWlc1MFVISnZjR1Z5ZEdsbGN5SXNJbVYyWlc1MFRtRnRaU0lzSW5SNWNHVWlMQ0psZG1WdWRFaGhibVJzWlNJc0luSmxjR3hoWTJVaUxDSmhaR1JGZG1WdWRFeHBjM1JsYm1WeUlpd2ljbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaUlzSW5WelpWQnlaWFpwYjNWeklpd2lkbUZzZFdVaUxDSnlaV1lpTENKamRYSnlaVzUwSWwwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc1UwRkJaMEpCTEZOQlFXaENMRVZCUVRKQ1F5eFJRVUV6UWl4RlFVRnhRME1zVFVGQmNrTXNVVUZCYlVRc1QwRkJia1E3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRFFTeFBRVUZQTEZOQlFWTkRMRzFDUVVGVUxFTkJRVFpEUXl4UlFVRTNReXhGUVVGeFJ6dEJRVUZCTEUxQlFUTkRReXhMUVVFeVF5eDFSVUZCYmtNc1JVRkJiVU03UVVGQlFTeE5RVUV4UWtNc1UwRkJNRUlzZFVWQlFVb3NSVUZCU1R0QlFVTXhSMEVzUlVGQlFVRXNVMEZCVXl4RFFVRkRReXhQUVVGV0xFTkJRV3RDTEZWQlFVTkRMRWxCUVVRc1JVRkJWVHRCUVVNeFFpeFJRVUZOUXl4TFFVRkxMRzFDUVVGWlJDeEpRVUZhTEVOQlFWZzdPMEZCUTBFc2IwSkJRVEJDVUN4UlFVRlJMRU5CUVVOSkxFdEJRVXNzUTBGQlEwa3NTMEZCUkN4RFFVRk9MRU5CUVd4RE8wRkJRVUU3UVVGQlFTeFJRVUZQUXl4TFFVRlFPMEZCUVVFc1VVRkJZME1zVVVGQlpEczdRVUZEUVZnc1NVRkJRVUVzVTBGQlV5eERRVUZETEZsQlFVMDdRVUZEWkN4VlFVRk5XU3hQUVVGUExFZEJRVWxRTEV0QlFVc3NRMEZCUTBrc1MwRkJSQ3hEUVVGTUxHMUNRVUYzUWtRc1NVRkJlRUlzY1VKQlFUSkRRU3hKUVVFelF5eERRVUZxUWpzN1FVRkRRU3hWUVVGSlNpeFJRVUZSTEVsQlFVbERMRXRCUVVzc1EwRkJRMGtzUzBGQlJDeERRVUZNTEV0QlFXbENTU3hUUVVGcVF5eEZRVUUwUXp0QlFVTXhRMVFzVVVGQlFVRXNVVUZCVVN4RFFVRkRVU3hQUVVGRUxFTkJRVklzU1VGQmMwSlNMRkZCUVZFc1EwRkJRMUVzVDBGQlJDeERRVUZVTEVWQlFYSkNPenRCUVVOQkxGbEJRVWxRTEV0QlFVc3NRMEZCUTBrc1MwRkJSQ3hEUVVGTUxFdEJRV2xDUXl4TFFVRnlRaXhGUVVFMFFqdEJRVU14UWtNc1ZVRkJRVUVzVVVGQlVTeERRVUZEVGl4TFFVRkxMRU5CUVVOSkxFdEJRVVFzUTBGQlRpeERRVUZTTzBGQlEwUTdRVUZEUmp0QlFVTkdMRXRCVWxFc1JVRlJUaXhEUVVGRFRDeFJRVUZFTEVWQlFWZERMRXRCUVVzc1EwRkJRMGtzUzBGQlJDeERRVUZvUWl4RFFWSk5MRU5CUVZRN1FVRlRSQ3hIUVZwRU8wRkJZVVE3UVVGRlJEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hQUVVGUExGTkJRVk5MTEZkQlFWUXNRMEZCSzBWV0xGRkJRUzlGTEVWQlFUWkhPMEZCUVVFc1RVRkJha0pETEV0QlFXbENMSFZGUVVGVUxFVkJRVk03UVVGRGJFZ3NUVUZCVFZVc1VVRkJVU3hIUVVGSlZpeExRVUZFTEVOQlFXVlZMRkZCUVdoRE96dEJRVU5CTEcxQ1FVRXdRbVFzVVVGQlVTeERRVUZEWXl4UlFVRkVMRU5CUVd4RE8wRkJRVUU3UVVGQlFTeE5RVUZQVEN4TFFVRlFPMEZCUVVFc1RVRkJZME1zVVVGQlpEczdRVUZEUVZnc1JVRkJRVUVzVTBGQlV5eERRVUZETEZsQlFVMDdRVUZEWkN4UlFVRkpTU3hSUVVGUkxFbEJRVWxYTEZGQlFWRXNTMEZCUzBZc1UwRkJOMElzUlVGQmQwTTdRVUZEZEVOSExFMUJRVUZCTEU5QlFVOHNRMEZCUTBNc1IwRkJVaXhEUVVGWkxGVkJRVm9zUlVGQmQwSkdMRkZCUVhoQ096dEJRVU5CTEZWQlFVbEJMRkZCUVVvc1JVRkJZenRCUVVOYVF5eFJRVUZCUVN4UFFVRlBMRU5CUVVORExFZEJRVklzUTBGQldTeFZRVUZhTEVWQlFYZENZaXhSUVVGNFFqdEJRVU5CUVN4UlFVRkJRU3hSUVVGUkxFTkJRVU5qTEVsQlFWUXNTVUZCYVVKa0xGRkJRVkVzUTBGQlEyTXNTVUZCVkN4RlFVRnFRanRCUVVORUxFOUJTRVFzVFVGSFR6dEJRVU5NWkN4UlFVRkJRU3hSUVVGUkxFTkJRVU5sTEVsQlFWUXNTVUZCYVVKbUxGRkJRVkVzUTBGQlEyVXNTVUZCVkN4RlFVRnFRanRCUVVORU96dEJRVU5FTEZWQlFVbEtMRkZCUVZFc1MwRkJTMHdzUzBGQmFrSXNSVUZCZDBJN1FVRkRkRUpETEZGQlFVRkJMRkZCUVZFc1EwRkJRMGtzVVVGQlJDeERRVUZTTzBGQlEwUTdRVUZEUmp0QlFVTkdMRWRCWWxFc1JVRmhUaXhEUVVGRFdDeFJRVUZFTEVWQlFWZFhMRkZCUVZnc1EwRmlUU3hEUVVGVU8wRkJZMFE3UVVGRlJEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRFFTeFBRVUZQTEZOQlFWTkxMR0ZCUVZRc1EwRkJOa0pvUWl4UlFVRTNRaXhGUVVFd1EwTXNTMEZCTVVNc1JVRkJPRVU3UVVGQlFTeE5RVUV4UWtNc1UwRkJNRUlzZFVWQlFVb3NSVUZCU1R0QlFVTnVSa0VzUlVGQlFVRXNVMEZCVXl4RFFVRkRReXhQUVVGV0xFTkJRV3RDTEZWQlFVTkRMRWxCUVVRc1JVRkJWVHRCUVVNeFFpeFJRVUZOUXl4TFFVRkxMR0ZCUVUxRUxFbEJRVWtzUTBGQlEyRXNUVUZCVEN4RFFVRlpMRU5CUVZvc1JVRkJaVU1zVjBGQlppeEZRVUZPTEZOQlFYRkRaQ3hKUVVGSkxFTkJRVU5sTEV0QlFVd3NRMEZCVnl4RFFVRllMRU5CUVhKRExFTkJRVmc3TzBGQlEwRXNjVUpCUVRCQ2RFSXNVVUZCVVN4RFFVRkRTU3hMUVVGTExFTkJRVU5KTEV0QlFVUXNRMEZCVGl4RFFVRnNRenRCUVVGQk8wRkJRVUVzVVVGQlQwTXNTMEZCVUR0QlFVRkJMRkZCUVdORExGRkJRV1E3TzBGQlEwRllMRWxCUVVGQkxGTkJRVk1zUTBGQlF5eFpRVUZOTzBGQlEyUXNWVUZCU1Vrc1VVRkJVU3hKUVVGSlFTeFJRVUZSTEdOQlFVOUpMRWxCUVZBc1JVRkJjRUlzU1VGQmFVUklMRXRCUVVzc1EwRkJRMGtzUzBGQlJDeERRVUZNTEV0QlFXbENTU3hUUVVGMFJTeEZRVUZwUmp0QlFVTXZSVHRCUVVOU08wRkJRMEU3UVVGRFVTeFpRVUZKVnl4SlFVRlRMRWRCUVVkdVFpeExRVUZMTEVOQlFVTkpMRXRCUVVRc1EwRkJja0k3TzBGQlEwRXNXVUZCU1dVc1NVRkJTU3hKUVVGSlFTeEpRVUZKTEVOQlFVTkRMRWRCUVdJc1NVRkJiMEpFTEVsQlFVa3NRMEZCUTBVc1IwRkJOMElzUlVGQmEwTTdRVUZEYUVOR0xGVkJRVUZCTEVsQlFVa3NSMEZCUnl4SlFVRkpSeXhKUVVGSkxFTkJRVU5ETEV0QlFWUXNRMEZCWlVvc1NVRkJTU3hEUVVGRFF5eEhRVUZ3UWl4RlFVRjVRa1FzU1VGQlNTeERRVUZEUlN4SFFVRTVRaXhEUVVGUU8wRkJRMEVzWTBGQlNVY3NUMEZCV1N4SFFVRkhia0lzUzBGQmJrSTdPMEZCUTBFc1kwRkJTVzFDTEU5QlFVOHNTVUZCU1VFc1QwRkJUeXhEUVVGRFNpeEhRVUZ1UWl4SlFVRXdRa2tzVDBGQlR5eERRVUZEU0N4SFFVRjBReXhGUVVFeVF6dEJRVU42UTBjc1dVRkJRVUVzVDBGQlR5eEhRVUZITEVsQlFVbEdMRWxCUVVrc1EwRkJRME1zUzBGQlZDeERRVUZsUXl4UFFVRlBMRU5CUVVOS0xFZEJRWFpDTEVWQlFUUkNTU3hQUVVGUExFTkJRVU5JTEVkQlFYQkRMRU5CUVZZN08wRkJRMEVzWjBKQlFVbEdMRWxCUVVrc1EwRkJRMDBzVFVGQlRDeERRVUZaUkN4UFFVRmFMRU5CUVVvc1JVRkJNRUk3UVVGRGVFSTdRVUZEUkR0QlFVTkdPMEZCUTBZN08wRkJSVUY2UWl4UlFVRkJRU3hSUVVGUkxHTkJRVTlKTEVsQlFWQXNSVUZCVkN4RFFVRXlRMmRDTEVsQlFUTkRMRVZCYUVJclJTeERRV2xDTDBVN08wRkJRMEVzV1VGQlNXUXNTMEZCU3l4TFFVRkxUQ3hMUVVGTExFTkJRVU5KTEV0QlFVUXNRMEZCYmtJc1JVRkJORUk3UVVGRE1VSXNZMEZCU1VFc1MwRkJTeXhMUVVGTExGRkJRV1FzUlVGQmQwSTdRVUZEZEVJc1owSkJRVWxETEV0QlFVc3NTVUZCU1V3c1MwRkJTeXhEUVVGRFNTeExRVUZFTEVOQlFXUXNTVUZCZVVJc1EwRkJSVU1zUzBGQlJDeERRVUZsYjBJc1RVRkJaaXhEUVVGelFucENMRXRCUVVzc1EwRkJRMGtzUzBGQlJDeERRVUV6UWl4RFFVRTVRaXhGUVVGdFJUdEJRVU5xUlVVc1kwRkJRVUVzVVVGQlVTeERRVUZEVGl4TFFVRkxMRU5CUVVOSkxFdEJRVVFzUTBGQlRpeERRVUZTTzBGQlEwUTdRVUZEUml4WFFVcEVMRTFCU1U4N1FVRkRURVVzV1VGQlFVRXNVVUZCVVN4RFFVRkRUaXhMUVVGTExFTkJRVU5KTEV0QlFVUXNRMEZCVGl4RFFVRlNPMEZCUTBRN1FVRkRSanRCUVVOR08wRkJRMFlzUzBFM1FsRXNSVUUyUWs0c1EwRkJRMHdzVVVGQlJDeEZRVUZYUXl4TFFVRkxMRU5CUVVOSkxFdEJRVVFzUTBGQmFFSXNRMEUzUWswc1EwRkJWRHRCUVRoQ1JDeEhRV3BEUkR0QlFXdERSRHM3UVVGdFFrUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hQUVVGUExGTkJRVk56UWl4clFrRkJWQ3hEUVVOTU0wSXNVVUZFU3l4RlFVdE1PMEZCUVVFc1RVRklRVU1zUzBGSFFTeDFSVUZJVVN4RlFVZFNPMEZCUVVFc1RVRkdRVEpDTEZOQlJVRXNkVVZCUm5OQ0xFVkJSWFJDTzBGQlFVRXNUVUZFUVVNc1NVRkRRVHRCUVVOQlJDeEZRVUZCUVN4VFFVRlRMRU5CUVVONlFpeFBRVUZXTEVOQlFXdENMRlZCUVVORExFbEJRVVFzUlVGQlZUdEJRVU14UWl4UlFVRk5kMElzVTBGQlV5eGxRVUZSZUVJc1NVRkJVaXhEUVVGbU8wRkJRMEVzVVVGQlRUQkNMRmRCUVZjc1IwRkJSemRDTEV0QlFVc3NRMEZCUXpKQ0xGTkJRVVFzUTBGQmVrSTdRVUZEUVdoRExFbEJRVUZCTEZOQlFWTXNRMEZCUXl4WlFVRk5PMEZCUTJRc1ZVRkJTU3hEUVVGRFNTeFJRVUZNTEVWQlFXVTdPMEZCUTJZc1ZVRkJTVGhDTEZkQlFWY3NTVUZCU1RGQ0xFbEJRVzVDTEVWQlFYbENPMEZCUTNaQ0xGbEJRVWxETEV0QlFVc3NSMEZCUjBRc1NVRkJXanM3UVVGRFFTeFpRVUZKZVVJc1NVRkJTU3hMUVVGTExGZEJRV0lzUlVGQk1FSTdRVUZEZUVKNFFpeFZRVUZCUVN4TFFVRkxMRWRCUVVkRUxFbEJRVWtzUTBGQlF6SkNMRTlCUVV3c1EwRkJZVE5DTEVsQlFVa3NRMEZCUXl4RFFVRkVMRU5CUVdwQ0xFVkJRWE5DUVN4SlFVRkpMRU5CUVVNc1EwRkJSQ3hEUVVGS0xFTkJRVkZqTEZkQlFWSXNSVUZCZEVJc1EwRkJVanRCUVVORUxGTkJSa1FzVFVGRlR6dEJRVU5NWWl4VlFVRkJRU3hMUVVGTExFZEJRVWRFTEVsQlFVa3NRMEZCUTJNc1YwRkJUQ3hGUVVGU08wRkJRMFE3TzBGQlEwUnNRaXhSUVVGQlFTeFJRVUZSTEVOQlFVTm5ReXhuUWtGQlZDeERRVUV3UWpOQ0xFdEJRVEZDTEVWQlFXbERlVUlzVjBGQmFrTTdRVUZEUVN4bFFVRlBMRmxCUVUwN1FVRkRXRGxDTEZWQlFVRkJMRkZCUVZFc1EwRkJRMmxETEcxQ1FVRlVMRU5CUVRaQ05VSXNTMEZCTjBJc1JVRkJiME41UWl4WFFVRndRenRCUVVORUxGTkJSa1E3UVVGSFJEdEJRVU5HTEV0QlpGRXNSVUZqVGl4RFFVRkRPVUlzVVVGQlJDeEZRVUZYUXl4TFFVRkxMRU5CUVVNeVFpeFRRVUZFTEVOQlFXaENMRU5CWkUwc1EwRkJWRHRCUVdWRUxFZEJiRUpFTzBGQmJVSkVPMEZCUlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlEwRXNUMEZCVHl4VFFVRlRUU3hYUVVGVUxFTkJRWGRDUXl4TFFVRjRRaXhGUVVGclF6dEJRVU4yUXl4TlFVRk5ReXhIUVVGSExFZEJRVWQwUXl4TlFVRk5MRVZCUVd4Q08wRkJRMEZHTEVWQlFVRkJMRk5CUVZNc1EwRkJReXhaUVVGTk8wRkJRMlIzUXl4SlFVRkJRU3hIUVVGSExFTkJRVU5ETEU5QlFVb3NSMEZCWTBZc1MwRkJaRHRCUVVORUxFZEJSbEVzUTBGQlZEdEJRVWRCTEZOQlFVOURMRWRCUVVjc1EwRkJRME1zVDBGQldEdEJRVU5FSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZKbFlXTjBMQ0I3SUhWelpVVm1abVZqZEN3Z2RYTmxVM1JoZEdVc0lIVnpaVkpsWmlCOUlHWnliMjBnSjNKbFlXTjBKenRjYmx4dUx5b3FYRzRnS2lEbWlibnBoNC9saUp2bHU3cmxwSnJrdUtybHBvTGt1SXNnVTNSaGRHWHZ2SXpubTVIbGtLemx1YmJvcnI3bnZhN2xnTHp2dkl4Y2JpQXFJT2U3aE9TN3R1V3hudWFBcCthYnRPYVV1U0E4UTI5dGNHOXVaWFFnWlc1aFlteGxSSEpoWjJkcGJtYzllM1J5ZFdWOUlENWNiaUFxSU9hZ3VlYU5yaUJsYm1GaWJHVkVjbUZuWjJsdVp5RG5tb1FnUW05dmJHVmhiaURsZ0x6dnZJem1pYWZvb1l3Z1lHVnVZV0pzWldBZzVaS01JR0JrYVhOaFlteGxZQ0RsdklEbHBMVG5tb1RsaDczbWxiRGpnSUpjYmlBcUlFQmxlR0Z0Y0d4bFhHNGdLaUJnWUdCcWMxeHVJQ29nWTI5dWMzUWdXMlZ1WVdKc1pVUnlZV2RuYVc1bkxDQnpaWFJGYm1GaWJHVkVjbUZuWjJsdVoxMGdQU0IxYzJWVGRHRjBaU2h3Y205d2N5NWxibUZpYkdWRWNtRm5aMmx1WnlrN1hHNGdLaUIxYzJWRlptWmxZM1FvS0NrZ1BUNGdlMXh1SUNvZ0lDQmpiMjV6YjJ4bExteHZaeWduZm40NlpXNWhZbXhsUkhKaFoyZHBibWNuTENCbGJtRmliR1ZFY21GbloybHVaeXdnY0hKdmNITXVaVzVoWW14bFJISmhaMmRwYm1jc0lIQnZiSGxzYVc1bEtUdGNiaUFxSUNBZ2MyVjBSVzVoWW14bFJISmhaMmRwYm1jb2NISnZjSE11Wlc1aFlteGxSSEpoWjJkcGJtY3BYRzRnS2lCOUxDQmJjRzlzZVd4cGJtVXNJR1Z1WVdKc1pVUnlZV2RuYVc1bkxDQndjbTl3Y3k1bGJtRmliR1ZFY21GbloybHVaMTBwTzF4dUlDb2dZR0JnWEc0Z0tpQkFjR0Z5WVcwZ2FXNXpkR0Z1WTJWY2JpQXFJRUJ3WVhKaGJTQndjbTl3YzF4dUlDb2dRSEJoY21GdElIQnliM0J6VG1GdFpWeHVJQ292WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnZFhObFJXNWhZbXhsVUhKdmNHVnlkR2xsY3p4VUlEMGdlMzBzSUVZZ1BTQjdmVDRvYVc1emRHRnVZMlU2SUZRc0lIQnliM0J6SUQwZ2UzMGdZWE1nUml3Z2NISnZjSE5PWVcxbE9pQnpkSEpwYm1kYlhTQTlJRnRkS1NCN1hHNGdJSEJ5YjNCelRtRnRaUzVtYjNKRllXTm9LQ2h1WVcxbEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1pVNWhiV1VnUFNCZ1pXNWhZbXhsSkh0dVlXMWxmV0FnWVhNZ2EyVjViMllnUmp0Y2JpQWdJQ0JqYjI1emRDQmJjM1JoZEdVc0lITmxkRk4wWVhSbFhTQTlJSFZ6WlZOMFlYUmxLSEJ5YjNCelcyVk9ZVzFsWFNrN1hHNGdJQ0FnZFhObFJXWm1aV04wS0NncElEMCtJSHRjYmlBZ0lDQWdJR052Ym5OMElHWjFiazVoYldVZ1BTQW9jSEp2Y0hOYlpVNWhiV1ZkSUQ4Z1lHVnVZV0pzWlNSN2JtRnRaWDFnSURvZ1lHUnBjMkZpYkdVa2UyNWhiV1Y5WUNrZ1lYTWdhMlY1YjJZZ1ZEdGNiaUFnSUNBZ0lHbG1JQ2hwYm5OMFlXNWpaU0FtSmlCd2NtOXdjMXRsVG1GdFpWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQnBibk4wWVc1alpWdG1kVzVPWVcxbFhTQW1KaUFvYVc1emRHRnVZMlZiWm5WdVRtRnRaVjBnWVhNZ1lXNTVLU2dwTzF4dUlDQWdJQ0FnSUNCcFppQW9jSEp2Y0hOYlpVNWhiV1ZkSUNFOVBTQnpkR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSE5sZEZOMFlYUmxLSEJ5YjNCelcyVk9ZVzFsWFNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxDQmJhVzV6ZEdGdVkyVXNJSEJ5YjNCelcyVk9ZVzFsWFYwcE8xeHVJQ0I5S1R0Y2JuMWNibHh1THlvcVhHNGdLaURwa29qbHI3a2dUM1psY214aGVTRG5zYnZsbm92bm1vVG51NFRrdTdidnZJem1uSW5saGF6bGhiSG5tb1RtbUsvbGtLYm1tTDducExvZzVhKzU2TEdoNWFTRTU1Q0dYRzRnS2lEcGdKcm92NGZsajRMbWxiQWdZSFpwYzJsaFlteGxZQ0RtbmFYbWpxZmxpTGJtaWFmb29Zd2dZSE5vYjNjb0tXQWdiM0lnWUdocFpHVW9LV0JjYmlBcUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlIVnpaVlpwYzJsaFlteGxQRlFnWlhoMFpXNWtjeUJDVFdGd0xrOTJaWEpzWVhrc0lFWWdaWGgwWlc1a2N5QjdJSFpwYzJsaFlteGxQem9nWW05dmJHVmhiaUI5UGlocGJuTjBZVzVqWlRvZ1ZDd2djSEp2Y0hNZ1BTQjdmU0JoY3lCR0tTQjdYRzRnSUdOdmJuTjBJSFpwYzJsaFlteGxJRDBnS0hCeWIzQnpJR0Z6SUdGdWVTa3VkbWx6YVdGaWJHVTdYRzRnSUdOdmJuTjBJRnR6ZEdGMFpTd2djMlYwVTNSaGRHVmRJRDBnZFhObFUzUmhkR1VvZG1semFXRmliR1VwTzF4dUlDQjFjMlZGWm1abFkzUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUdsbUlDaHBibk4wWVc1alpTQW1KaUIyYVhOcFlXSnNaU0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWduZG1semFXRmliR1VuTENCMmFYTnBZV0pzWlNrN1hHNGdJQ0FnSUNCcFppQW9kbWx6YVdGaWJHVXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVzYjJjb0ozWnBjMmxoWW14bEp5d2dhVzV6ZEdGdVkyVXBPMXh1SUNBZ0lDQWdJQ0JwYm5OMFlXNWpaUzV6YUc5M0lDWW1JR2x1YzNSaGJtTmxMbk5vYjNjb0tUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExtaHBaR1VnSmlZZ2FXNXpkR0Z1WTJVdWFHbGtaU2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYVdZZ0tIWnBjMmxoWW14bElDRTlQU0J6ZEdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0J6WlhSVGRHRjBaU2gyYVhOcFlXSnNaU2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOUxDQmJhVzV6ZEdGdVkyVXNJSFpwYzJsaFlteGxYU2s3WEc1OVhHNWNiaThxS2x4dUlDb2c1b201NlllUDVZaWI1YnU2NWFTYTVMaXE1YWFDNUxpTElGTjBZWFJsNzd5TTU1dVI1WkNzNWJtMjZLNis1NzJ1NVlDODc3eU1YRzRnS2lEbWlhZm9vWXdnWUhObGRHQWc1YnlBNWFTMDU1cUU1WWU5NXBXdzQ0Q0NYRzRnS2lCQWNHRnlZVzBnYVc1emRHRnVZMlZjYmlBcUlFQndZWEpoYlNCd2NtOXdjMXh1SUNvZ1FIQmhjbUZ0SUhCeWIzQnpUbUZ0WlZ4dUlDb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdkWE5sVUhKdmNHVnlkR2xsY3p4VUxDQkdQaWhwYm5OMFlXNWpaVG9nVkN3Z2NISnZjSE02SUVZc0lIQnliM0J6VG1GdFpUb2djM1J5YVc1blcxMGdQU0JiWFNrZ2UxeHVJQ0J3Y205d2MwNWhiV1V1Wm05eVJXRmphQ2dvYm1GdFpTa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHVk9ZVzFsSUQwZ1lDUjdibUZ0WlM1amFHRnlRWFFvTUNrdWRHOU1iM2RsY2tOaGMyVW9LWDBrZTI1aGJXVXVjMnhwWTJVb01TbDlZQ0JoY3lCclpYbHZaaUJHTzF4dUlDQWdJR052Ym5OMElGdHpkR0YwWlN3Z2MyVjBVM1JoZEdWZElEMGdkWE5sVTNSaGRHVW9jSEp2Y0hOYlpVNWhiV1ZkS1R0Y2JpQWdJQ0IxYzJWRlptWmxZM1FvS0NrZ1BUNGdlMXh1SUNBZ0lDQWdhV1lnS0dsdWMzUmhibU5sSUNZbUlHbHVjM1JoYm1ObFcyQnpaWFFrZTI1aGJXVjlZQ0JoY3lCclpYbHZaaUJVWFNBbUppQndjbTl3YzF0bFRtRnRaVjBnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0F2S2lwY2JpQWdJQ0FnSUNBZ0lDb2c1WjJRNXFDSDU0SzU1NXFFNVkrQzVwV3c2SzYrNTcydTc3eU01cStVNWErNUxDRGxuWkRtb0lmbmdybm5tb1RsajRMbWxiRG9ycjdudmE1Y2JpQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJR3hsZENCa1lYUmhPaUJoYm5rZ1BTQndjbTl3YzF0bFRtRnRaVjA3WEc0Z0lDQWdJQ0FnSUdsbUlDaGtZWFJoSUNZbUlHUmhkR0V1Ykc1bklDWW1JR1JoZEdFdWJHRjBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1pHRjBZU0E5SUc1bGR5QkNUV0Z3TGxCdmFXNTBLR1JoZEdFdWJHNW5MQ0JrWVhSaExteGhkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2JHVjBJSEJ5WlVSaGRHRTZJR0Z1ZVNBOUlITjBZWFJsTzF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y21WRVlYUmhJQ1ltSUhCeVpVUmhkR0V1Ykc1bklDWW1JSEJ5WlVSaGRHRXViR0YwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y21WRVlYUmhJRDBnYm1WM0lFSk5ZWEF1VUc5cGJuUW9jSEpsUkdGMFlTNXNibWNzSUhCeVpVUmhkR0V1YkdGMEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGtZWFJoTG1WeGRXRnNjeWh3Y21WRVlYUmhLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0tHbHVjM1JoYm1ObFcyQnpaWFFrZTI1aGJXVjlZQ0JoY3lCclpYbHZaaUJVWFNCaGN5QmhibmtwS0dSaGRHRXBPMXh1SUNBZ0lDQWdJQ0F2THlEbHNaN21nS2ZsajVIbmxKL2xqNWpsakpibnZKUGxyWmhjYmlBZ0lDQWdJQ0FnYVdZZ0tITjBZWFJsSUNFOVBTQndjbTl3YzF0bFRtRnRaVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvWlU1aGJXVWdQVDA5SUNkaWIzVnVaSE1uS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2MzUmhkR1VnSmlZZ2NISnZjSE5iWlU1aGJXVmRJQ1ltSUNFb2MzUmhkR1VnWVhNZ1lXNTVLUzVsY1hWaGJITW9jSEp2Y0hOYlpVNWhiV1ZkS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCelpYUlRkR0YwWlNod2NtOXdjMXRsVG1GdFpWMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCelpYUlRkR0YwWlNod2NtOXdjMXRsVG1GdFpWMHBPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc0lGdHBibk4wWVc1alpTd2djSEp2Y0hOYlpVNWhiV1ZkWFNrN1hHNGdJSDBwTzF4dWZWeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRVYyWlc1MFRHbHpkR1Z1WlhJZ2UxeHVJQ0F2S2lwY2JpQWdJQ29nNXJlNzVZcWc1THFMNUx1MjU1dVI1WkNzNVllOTVwV3dYRzRnSUNBcUlFQndZWEpoYlNCbGRtVnVkRnh1SUNBZ0tpQkFjR0Z5WVcwZ2FHRnVaR3hsY2x4dUlDQWdLaTljYmlBZ1lXUmtSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkRG9nYzNSeWFXNW5MQ0JvWVc1a2JHVnlPaUJoYm5rcE9pQjJiMmxrTzF4dUlDQXZLaXBjYmlBZ0lDb2c1NmU3NlptazVMcUw1THUyNTV1UjVaQ3M1WWU5NXBXd1hHNGdJQ0FxSUVCd1lYSmhiU0JsZG1WdWRGeHVJQ0FnS2lCQWNHRnlZVzBnYUdGdVpHeGxjbHh1SUNBZ0tpOWNiaUFnY21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lobGRtVnVkRG9nYzNSeWFXNW5MQ0JvWVc1a2JHVnlPaUJoYm5rcE9pQjJiMmxrTzF4dWZWeHVYRzVsZUhCdmNuUWdkSGx3WlNCRmRtVnVkRTVoYldWVWVYQmxJRDBnSjBOaGJXVnNRMkZ6WlNjZ2ZDQW5VR0Z6WTJGc1EyRnpaU2NnZkNBblRHOTNaWEpEWVhObEp6dGNibHh1THlvcVhHNGdLaURudTVIbHJwcmt1b3ZrdTdaY2JpQXFJRUJ3WVhKaGJTQnBibk4wWVc1alpTRGxycDdrdm92bHI3bm9zYUZjYmlBcUlFQndZWEpoYlNCd2NtOXdjeURrdktEcGdKTG92NXZtbmFYbm1vUWdjSEp2Y0hOY2JpQXFJRUJ3WVhKaGJTQmxkbVZ1ZEU1aGJXVWc1THFMNUx1MjU1cUU1WkNONWEyWDc3eU01YWFDNzd5TTVvaVI1THVzNUwyLzU1U29JR0J2YmtOc2FXTnJZQ0RrdW92a3U3YnZ2SXptbklEbnU0am9vcXZvdmF6bWphTG1pSkR2dkl4Z1kyeHBZMnRnSU9lN2tlV3VtdVdJc09XdW51UytpK1M0cmUrOGpHQnZia1JpYkVOc2FXTnJZQ0E5UGlCZ1pHSnNZMnhwWTJ0Z1hHNGdLbHh1SUNvZ1FHVjRZVzF3YkdWY2JpQXFJR0JnWUdwelhHNGdLaUIxYzJWRmRtVnVkRkJ5YjNCbGNuUnBaWE04UWsxaGNDNU5ZWEpyWlhJc0lGVnpaVTFoY210bGNqNG9iV0Z5YTJWeUlTd2djSEp2Y0hNc0lGdGNiaUFxSUNBZ0owTnNhV05ySnl3Z0owUmliRU5zYVdOckp5d2dKMDF2ZFhObFJHOTNiaWNzSUNkTmIzVnpaVlZ3Snl3Z0owMXZkWE5sVDNWMEp5d2dKMDF2ZFhObFQzWmxjaWRjYmlBcUlGMHBPMXh1SUNvZ1lHQmdYRzRnS2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCMWMyVkZkbVZ1ZEZCeWIzQmxjblJwWlhNOFZDQmxlSFJsYm1SeklFVjJaVzUwVEdsemRHVnVaWElzSUVZK0tGeHVJQ0JwYm5OMFlXNWpaVG9nVkN4Y2JpQWdjSEp2Y0hNZ1BTQjdmU0JoY3lCR0xGeHVJQ0JsZG1WdWRFNWhiV1U2SUhOMGNtbHVaMXRkSUQwZ1cxMHNYRzRnSUhSNWNHVS9PaUJGZG1WdWRFNWhiV1ZVZVhCbExGeHVLU0I3WEc0Z0lHVjJaVzUwVG1GdFpTNW1iM0pGWVdOb0tDaHVZVzFsS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnWlhabGJuUk9ZVzFsSUQwZ1lHOXVKSHR1WVcxbGZXQWdZWE1nYTJWNWIyWWdSanRjYmlBZ0lDQmpiMjV6ZENCbGRtVnVkRWhoYm1Sc1pTQTlJSEJ5YjNCelcyVjJaVzUwVG1GdFpWMDdYRzRnSUNBZ2RYTmxSV1ptWldOMEtDZ3BJRDArSUh0Y2JpQWdJQ0FnSUdsbUlDZ2hhVzV6ZEdGdVkyVXBJSEpsZEhWeWJqdGNiaUFnSUNBZ0lHbG1JQ2hsZG1WdWRFaGhibVJzWlNBbUppQnVZVzFsS1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JsVG1GdFpTQTlJRzVoYldVN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbElEMDlQU0FuUTJGdFpXeERZWE5sSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJR1ZPWVcxbElEMGdibUZ0WlM1eVpYQnNZV05sS0c1aGJXVmJNRjBzSUc1aGJXVmJNRjB1ZEc5TWIzZGxja05oYzJVb0tTazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnWlU1aGJXVWdQU0J1WVcxbExuUnZURzkzWlhKRFlYTmxLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2FXNXpkR0Z1WTJVdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lobFRtRnRaU3dnWlhabGJuUklZVzVrYkdVcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExuSmxiVzkyWlVWMlpXNTBUR2x6ZEdWdVpYSW9aVTVoYldVc0lHVjJaVzUwU0dGdVpHeGxLVHRjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TENCYmFXNXpkR0Z1WTJVc0lIQnliM0J6VzJWMlpXNTBUbUZ0WlYxZEtUdGNiaUFnZlNrN1hHNTlYRzVjYmk4cUtseHVJQ29nNkk2MzVZK1c1TGlLNUxpQTZMMnU1NXFFSUhCeWIzQnpJT2FJbGlCemRHRjBaVnh1SUNvZ1NHOTNJSFJ2SUdkbGRDQjBhR1VnY0hKbGRtbHZkWE1nY0hKdmNITWdiM0lnYzNSaGRHVS9YRzRnS2lCb2RIUndjem92TDNKbFlXTjBhbk11YjNKbkwyUnZZM012YUc5dmEzTXRabUZ4TG1oMGJXd2phRzkzTFhSdkxXZGxkQzEwYUdVdGNISmxkbWx2ZFhNdGNISnZjSE10YjNJdGMzUmhkR1ZjYmlBcUlFQmxlR0Z0Y0d4bFhHNGdLaUJnWUdCcWMxeHVJQ29nWm5WdVkzUnBiMjRnUTI5MWJuUmxjaWdwSUh0Y2JpQXFJQ0FnWTI5dWMzUWdXMk52ZFc1MExDQnpaWFJEYjNWdWRGMGdQU0IxYzJWVGRHRjBaU2d3S1R0Y2JpQXFJQ0FnWTI5dWMzUWdjSEpsZGtOdmRXNTBJRDBnZFhObFVISmxkbWx2ZFhNb1kyOTFiblFwTzF4dUlDb2dJQ0J5WlhSMWNtNGdQR2d4UGs1dmR6b2dlMk52ZFc1MGZTd2dZbVZtYjNKbE9pQjdjSEpsZGtOdmRXNTBmVHd2YURFK08xeHVJQ29nZlZ4dUlDb2dZR0JnWEc0Z0tpOWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQjFjMlZRY21WMmFXOTFjenhVUGloMllXeDFaVG9nVkNrZ2UxeHVJQ0JqYjI1emRDQnlaV1lnUFNCMWMyVlNaV1k4VkQ0b0tUdGNiaUFnZFhObFJXWm1aV04wS0NncElEMCtJSHRjYmlBZ0lDQnlaV1l1WTNWeWNtVnVkQ0E5SUhaaGJIVmxPMXh1SUNCOUtUdGNiaUFnY21WMGRYSnVJSEpsWmk1amRYSnlaVzUwTzF4dWZWeHVJbDE5IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVuYWJsZVByb3BlcnRpZXMsIHVzZVByb3BlcnRpZXMsIHVzZUV2ZW50UHJvcGVydGllcyB9IGZyb20gJy4uL2NvbW1vbi9ob29rcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VNYXAoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciB3aWRnZXQgPSBwcm9wcy53aWRnZXQsXG4gICAgICBtaW5ab29tID0gcHJvcHMubWluWm9vbSxcbiAgICAgIG1heFpvb20gPSBwcm9wcy5tYXhab29tLFxuICAgICAgbWFwVHlwZSA9IHByb3BzLm1hcFR5cGUsXG4gICAgICBlbmFibGVIaWdoUmVzb2x1dGlvbiA9IHByb3BzLmVuYWJsZUhpZ2hSZXNvbHV0aW9uLFxuICAgICAgZW5hYmxlQXV0b1Jlc2l6ZSA9IHByb3BzLmVuYWJsZUF1dG9SZXNpemUsXG4gICAgICBlbmFibGVNYXBDbGljayA9IHByb3BzLmVuYWJsZU1hcENsaWNrO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBtYXAgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0TWFwID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKHByb3BzLnpvb20gfHwgMTUpLFxuICAgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgICAgem9vbSA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRab29tID0gX3VzZVN0YXRlNFsxXTtcblxuICB2YXIgX3VzZVN0YXRlNSA9IHVzZVN0YXRlKHByb3BzLmNvbnRhaW5lciksXG4gICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICBjb250YWluZXIgPSBfdXNlU3RhdGU2WzBdLFxuICAgICAgc2V0Q29udGFpbmVyID0gX3VzZVN0YXRlNlsxXTtcblxuICB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29udGFpbmVyICYmICFtYXAgJiYgQk1hcCkge1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IEJNYXAuTWFwKGNvbnRhaW5lciwge1xuICAgICAgICBtaW5ab29tOiBtaW5ab29tLFxuICAgICAgICBtYXhab29tOiBtYXhab29tLFxuICAgICAgICBtYXBUeXBlOiBtYXBUeXBlLFxuICAgICAgICBlbmFibGVIaWdoUmVzb2x1dGlvbjogZW5hYmxlSGlnaFJlc29sdXRpb24sXG4gICAgICAgIGVuYWJsZUF1dG9SZXNpemU6IGVuYWJsZUF1dG9SZXNpemUsXG4gICAgICAgIGVuYWJsZU1hcENsaWNrOiBlbmFibGVNYXBDbGlja1xuICAgICAgfSk7XG4gICAgICAvKipcbiAgICAgICAqIOWKoOi9veaOp+S7tlxuICAgICAgICovXG5cbiAgICAgIHdpZGdldCAmJiB3aWRnZXQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaW5zdGFuY2UuYWRkQ29udHJvbChuZXcgQk1hcFtpdGVtXSgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChfdHlwZW9mKGl0ZW0pID09PSAnb2JqZWN0JyAmJiBpdGVtLmNvbnRyb2wgJiYgdHlwZW9mIGl0ZW0uY29udHJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGluc3RhbmNlLmFkZENvbnRyb2woaXRlbS5jb250cm9sKEJNYXAsIGluc3RhbmNlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihpdGVtKSA9PT0gJ29iamVjdCcgJiYgaXRlbS5uYW1lKSB7XG4gICAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2YgaXRlbS5vcHRpb25zID09PSAnZnVuY3Rpb24nID8gaXRlbS5vcHRpb25zKEJNYXAsIGluc3RhbmNlKSA6IGl0ZW0ub3B0aW9ucztcbiAgICAgICAgICBpbnN0YW5jZS5hZGRDb250cm9sKG5ldyBCTWFwW2l0ZW0ubmFtZV0ob3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNldE1hcChpbnN0YW5jZSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW2NvbnRhaW5lciwgbWFwXSk7XG5cbiAgdmFyIF91c2VTdGF0ZTcgPSB1c2VTdGF0ZShwcm9wcy5jZW50ZXIgfHwgJ+S4iua1tycpLFxuICAgICAgX3VzZVN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTcsIDIpLFxuICAgICAgY2VudGVyID0gX3VzZVN0YXRlOFswXSxcbiAgICAgIHNldENlbnRlciA9IF91c2VTdGF0ZThbMV07XG4gIC8qKlxuICAgKiDmoLnmja7lj4LmlbDorr7nva7kuK3lv4PngrlcbiAgICovXG5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtYXAgJiYgY2VudGVyKSB7XG4gICAgICB2YXIgY2VudCA9IGNlbnRlcjtcblxuICAgICAgaWYgKGNlbnRlciAmJiBjZW50ZXIubG5nICYmIGNlbnRlci5sYXQpIHtcbiAgICAgICAgY2VudCA9IG5ldyBCTWFwLlBvaW50KGNlbnRlci5sbmcsIGNlbnRlci5sYXQpO1xuICAgICAgICBtYXAuY2VudGVyQW5kWm9vbShjZW50LCB6b29tKTtcbiAgICAgIH1cblxuICAgICAgbWFwLmNlbnRlckFuZFpvb20oY2VudGVyLCB6b29tKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICB9LCBbY2VudGVyLCBtYXBdKTtcblxuICB2YXIgX3VzZVN0YXRlOSA9IHVzZVN0YXRlKHByb3BzLmF1dG9Mb2NhbENpdHkpLFxuICAgICAgX3VzZVN0YXRlMTAgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU5LCAyKSxcbiAgICAgIGF1dG9Mb2NhbENpdHkgPSBfdXNlU3RhdGUxMFswXSxcbiAgICAgIHNldEF1dG9Mb2NhbENpdHkgPSBfdXNlU3RhdGUxMFsxXTtcbiAgLyoqXG4gICAqIElQ5a6a5L2N6I635Y+W5b2T5YmN5Z+O5biC77yM6L+b6KGM6Ieq5Yqo5a6a5L2NXG4gICAqL1xuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobWFwICYmIGF1dG9Mb2NhbENpdHkpIHtcbiAgICAgIHZhciBteUNpdHkgPSBuZXcgQk1hcC5Mb2NhbENpdHkoKTtcbiAgICAgIG15Q2l0eS5nZXQoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBzZXRDZW50ZXIocmVzdWx0Lm5hbWUpO1xuICAgICAgICBzZXRab29tKHJlc3VsdC5sZXZlbCk7XG4gICAgICAgIHNldEF1dG9Mb2NhbENpdHkoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbYXV0b0xvY2FsQ2l0eSwgbWFwXSk7XG4gIHVzZUV2ZW50UHJvcGVydGllcyhtYXAsIHByb3BzLCBbJ0NsaWNrJywgJ0RibENsaWNrJywgJ1JpZ2h0Q2xpY2snLCAnUmlnaHRkYmxDbGljaycsICdNYXBUeXBlQ2hhbmdlJywgJ01vdXNlTW92ZScsICdNb3VzZU92ZXInLCAnTW91c2VPdXQnLCAnTW92ZVN0YXJ0JywgJ01vdmluZycsICdNb3ZlRW5kJywgJ1pvb21TdGFydCcsICdab29tRW5kJywgJ0FkZE92ZXJsYXknLCAnQWRkQ29udHJvbCcsICdSZW1vdmVDb250cm9sJywgJ1JlbW92ZU92ZXJsYXknLCAnQ2xlYXJPdmVybGF5cycsICdEcmFnU3RhcnQnLCAnRHJhZ2dpbmcnLCAnRHJhZ0VuZCcsICdBZGRUaWxlTGF5ZXInLCAnUmVtb3ZlVGlsZUxheWVyJywgJ0xvYWQnLCAnUmVTaXplJywgJ0hvdHNwb3RDbGljaycsICdIb3RzcG90T3ZlcicsICdIb3RzcG90T3V0JywgJ1RpbGVzTG9hZGVkJywgJ1RvdWNoU3RhcnQnLCAnVG91Y2hNb3ZlJywgJ1RvdWNoRW5kJywgJ0xvbmdQcmVzcyddKTsgLy8gJ0NlbnRlcicsXG5cbiAgdXNlUHJvcGVydGllcyhtYXAsIHByb3BzLCBbJ0RlZmF1bHRDdXJzb3InLCAnRHJhZ2dpbmdDdXJzb3InLCAnTWluWm9vbScsICdNYXhab29tJywgJ01hcFN0eWxlJywgJ01hcFN0eWxlVjInLCAnUGFub3JhbWEnLCAnQ3VycmVudENpdHknLCAnTWFwVHlwZScsICdWaWV3cG9ydCcsICdab29tJ10pO1xuICB1c2VFbmFibGVQcm9wZXJ0aWVzKG1hcCwgcHJvcHMsIFsnRHJhZ2dpbmcnLCAnU2Nyb2xsV2hlZWxab29tJywgJ0RvdWJsZUNsaWNrWm9vbScsICdLZXlib2FyZCcsICdJbmVydGlhbERyYWdnaW5nJywgJ0NvbnRpbnVvdXNab29tJywgJ1BpbmNoVG9ab29tJywgJ0F1dG9SZXNpemUnXSk7XG4gIHJldHVybiB7XG4gICAgbWFwOiBtYXAsXG4gICAgc2V0TWFwOiBzZXRNYXAsXG4gICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgc2V0Q29udGFpbmVyOiBzZXRDb250YWluZXIsXG4gICAgY2VudGVyOiBjZW50ZXIsXG4gICAgc2V0Q2VudGVyOiBzZXRDZW50ZXIsXG4gICAgYXV0b0xvY2FsQ2l0eTogYXV0b0xvY2FsQ2l0eSxcbiAgICBzZXRBdXRvTG9jYWxDaXR5OiBzZXRBdXRvTG9jYWxDaXR5XG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5TllYQXZkWE5sVFdGd0xuUnplQ0pkTENKdVlXMWxjeUk2V3lKMWMyVkZabVpsWTNRaUxDSjFjMlZUZEdGMFpTSXNJblZ6WlUxbGJXOGlMQ0oxYzJWRmJtRmliR1ZRY205d1pYSjBhV1Z6SWl3aWRYTmxVSEp2Y0dWeWRHbGxjeUlzSW5WelpVVjJaVzUwVUhKdmNHVnlkR2xsY3lJc0luVnpaVTFoY0NJc0luQnliM0J6SWl3aWQybGtaMlYwSWl3aWJXbHVXbTl2YlNJc0ltMWhlRnB2YjIwaUxDSnRZWEJVZVhCbElpd2laVzVoWW14bFNHbG5hRkpsYzI5c2RYUnBiMjRpTENKbGJtRmliR1ZCZFhSdlVtVnphWHBsSWl3aVpXNWhZbXhsVFdGd1EyeHBZMnNpTENKdFlYQWlMQ0p6WlhSTllYQWlMQ0o2YjI5dElpd2ljMlYwV205dmJTSXNJbU52Ym5SaGFXNWxjaUlzSW5ObGRFTnZiblJoYVc1bGNpSXNJa0pOWVhBaUxDSnBibk4wWVc1alpTSXNJazFoY0NJc0ltWnZja1ZoWTJnaUxDSnBkR1Z0SWl3aVlXUmtRMjl1ZEhKdmJDSXNJbU52Ym5SeWIyd2lMQ0p1WVcxbElpd2liM0IwYVc5dWN5SXNJbU5sYm5SbGNpSXNJbk5sZEVObGJuUmxjaUlzSW1ObGJuUWlMQ0pzYm1jaUxDSnNZWFFpTENKUWIybHVkQ0lzSW1ObGJuUmxja0Z1WkZwdmIyMGlMQ0poZFhSdlRHOWpZV3hEYVhSNUlpd2ljMlYwUVhWMGIweHZZMkZzUTJsMGVTSXNJbTE1UTJsMGVTSXNJa3h2WTJGc1EybDBlU0lzSW1kbGRDSXNJbkpsYzNWc2RDSXNJbXhsZG1Wc0lsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJMRk5CUVZOQkxGTkJRVlFzUlVGQmIwSkRMRkZCUVhCQ0xFVkJRVGhDUXl4UFFVRTVRaXhSUVVFMlF5eFBRVUUzUXp0QlFVZEJMRk5CUVZORExHMUNRVUZVTEVWQlFUaENReXhoUVVFNVFpeEZRVUUyUTBNc2EwSkJRVGRETEZGQlFYVkZMR2xDUVVGMlJUdEJRVk5CTEdWQlFXVXNVMEZCVTBNc1RVRkJWQ3hIUVVGdlF6dEJRVUZCTEUxQlFYQkNReXhMUVVGdlFpeDFSVUZCU2l4RlFVRkpPMEZCUTJwRUxFMUJRVkZETEUxQlFWSXNSMEZCYzBkRUxFdEJRWFJITEVOQlFWRkRMRTFCUVZJN1FVRkJRU3hOUVVGblFrTXNUMEZCYUVJc1IwRkJjMGRHTEV0QlFYUkhMRU5CUVdkQ1JTeFBRVUZvUWp0QlFVRkJMRTFCUVhsQ1F5eFBRVUY2UWl4SFFVRnpSMGdzUzBGQmRFY3NRMEZCZVVKSExFOUJRWHBDTzBGQlFVRXNUVUZCYTBORExFOUJRV3hETEVkQlFYTkhTaXhMUVVGMFJ5eERRVUZyUTBrc1QwRkJiRU03UVVGQlFTeE5RVUV5UTBNc2IwSkJRVE5ETEVkQlFYTkhUQ3hMUVVGMFJ5eERRVUV5UTBzc2IwSkJRVE5ETzBGQlFVRXNUVUZCYVVWRExHZENRVUZxUlN4SFFVRnpSMDRzUzBGQmRFY3NRMEZCYVVWTkxHZENRVUZxUlR0QlFVRkJMRTFCUVcxR1F5eGpRVUZ1Uml4SFFVRnpSMUFzUzBGQmRFY3NRMEZCYlVaUExHTkJRVzVHT3p0QlFVTkJMR3RDUVVGelFtSXNVVUZCVVN4RlFVRTVRanRCUVVGQk8wRkJRVUVzVFVGQlQyTXNSMEZCVUR0QlFVRkJMRTFCUVZsRExFMUJRVm83TzBGQlEwRXNiVUpCUVhkQ1ppeFJRVUZSTEVOQlFVTk5MRXRCUVVzc1EwRkJRMVVzU1VGQlRpeEpRVUZqTEVWQlFXWXNRMEZCYUVNN1FVRkJRVHRCUVVGQkxFMUJRVTlCTEVsQlFWQTdRVUZCUVN4TlFVRmhReXhQUVVGaU96dEJRVU5CTEcxQ1FVRnJRMnBDTEZGQlFWRXNRMEZCUTAwc1MwRkJTeXhEUVVGRFdTeFRRVUZRTEVOQlFURkRPMEZCUVVFN1FVRkJRU3hOUVVGUFFTeFRRVUZRTzBGQlFVRXNUVUZCYTBKRExGbEJRV3hDT3p0QlFVTkJiRUlzUlVGQlFVRXNUMEZCVHl4RFFVRkRMRmxCUVUwN1FVRkRXaXhSUVVGSmFVSXNVMEZCVXl4SlFVRkpMRU5CUVVOS0xFZEJRV1FzU1VGQmNVSk5MRWxCUVhwQ0xFVkJRU3RDTzBGQlF6ZENMRlZCUVUxRExGRkJRVkVzUjBGQlJ5eEpRVUZKUkN4SlFVRkpMRU5CUVVORkxFZEJRVlFzUTBGQllVb3NVMEZCWWl4RlFVRjNRanRCUVVOMlExWXNVVUZCUVVFc1QwRkJUeXhGUVVGUVFTeFBRVVIxUXp0QlFVVjJRME1zVVVGQlFVRXNUMEZCVHl4RlFVRlFRU3hQUVVaMVF6dEJRVWQyUTBNc1VVRkJRVUVzVDBGQlR5eEZRVUZRUVN4UFFVaDFRenRCUVVsMlEwTXNVVUZCUVVFc2IwSkJRVzlDTEVWQlFYQkNRU3h2UWtGS2RVTTdRVUZMZGtORExGRkJRVUZCTEdkQ1FVRm5RaXhGUVVGb1FrRXNaMEpCVEhWRE8wRkJUWFpEUXl4UlFVRkJRU3hqUVVGakxFVkJRV1JCTzBGQlRuVkRMRTlCUVhoQ0xFTkJRV3BDTzBGQlVVRTdRVUZEVGp0QlFVTkJPenRCUVVOTlRpeE5RVUZCUVN4TlFVRk5MRWxCUTBwQkxFMUJRVTBzUTBGQlEyZENMRTlCUVZBc1EwRkJaU3hWUVVGRFF5eEpRVUZFTEVWQlFWVTdRVUZEZGtJc1dVRkJTU3hQUVVGUFFTeEpRVUZRTEV0QlFXZENMRkZCUVhCQ0xFVkJRVGhDTzBGQlF6VkNTQ3hWUVVGQlFTeFJRVUZSTEVOQlFVTkpMRlZCUVZRc1EwRkJiMElzU1VGQlMwd3NTVUZCU1N4RFFVRkRTU3hKUVVGRUxFTkJRVlFzUlVGQmNFSTdRVUZEUkN4VFFVWkVMRTFCUlU4c1NVRkJTU3hSUVVGUFFTeEpRVUZRTEUxQlFXZENMRkZCUVdoQ0xFbEJRVFJDUVN4SlFVRkpMRU5CUVVORkxFOUJRV3BETEVsQlFUUkRMRTlCUVU5R0xFbEJRVWtzUTBGQlEwVXNUMEZCV2l4TFFVRjNRaXhWUVVGNFJTeEZRVUZ2Ump0QlFVTjZSa3dzVlVGQlFVRXNVVUZCVVN4RFFVRkRTU3hWUVVGVUxFTkJRVzlDUkN4SlFVRkpMRU5CUVVORkxFOUJRVXdzUTBGQllVNHNTVUZCWWl4RlFVRnRRa01zVVVGQmJrSXNRMEZCY0VJN1FVRkRSQ3hUUVVaTkxFMUJSVUVzU1VGQlNTeFJRVUZQUnl4SlFVRlFMRTFCUVdkQ0xGRkJRV2hDTEVsQlFUUkNRU3hKUVVGSkxFTkJRVU5ITEVsQlFYSkRMRVZCUVRKRE8wRkJRMmhFTEdOQlFVMURMRTlCUVU4c1IwRkJSeXhQUVVGUFNpeEpRVUZKTEVOQlFVTkpMRTlCUVZvc1MwRkJkMElzVlVGQmVFSXNSMEZCY1VOS0xFbEJRVWtzUTBGQlEwa3NUMEZCVEN4RFFVRmhVaXhKUVVGaUxFVkJRVzFDUXl4UlFVRnVRaXhEUVVGeVF5eEhRVUZ2UlVjc1NVRkJTU3hEUVVGRFNTeFBRVUY2Ump0QlFVTkJVQ3hWUVVGQlFTeFJRVUZSTEVOQlFVTkpMRlZCUVZRc1EwRkJiMElzU1VGQlMwd3NTVUZCU1N4RFFVRkRTU3hKUVVGSkxFTkJRVU5ITEVsQlFVNHNRMEZCVkN4RFFVRTJRa01zVDBGQk4wSXNRMEZCY0VJN1FVRkRSRHRCUVVOR0xFOUJWRVFzUTBGRVJqdEJRVmRCWWl4TlFVRkJRU3hOUVVGTkxFTkJRVU5OTEZGQlFVUXNRMEZCVGp0QlFVTkVMRXRCZWtKWExFTkJNRUphT3p0QlFVTkVMRWRCTTBKTkxFVkJNa0pLTEVOQlFVTklMRk5CUVVRc1JVRkJXVW9zUjBGQldpeERRVE5DU1N4RFFVRlFPenRCUVRaQ1FTeHRRa0ZCTkVKa0xGRkJRVkVzUTBGQlEwMHNTMEZCU3l4RFFVRkRkVUlzVFVGQlRpeEpRVUZuUWl4SlFVRnFRaXhEUVVGd1F6dEJRVUZCTzBGQlFVRXNUVUZCVDBFc1RVRkJVRHRCUVVGQkxFMUJRV1ZETEZOQlFXWTdRVUZEUVR0QlFVTkdPMEZCUTBFN096dEJRVU5GTDBJc1JVRkJRVUVzVTBGQlV5eERRVUZETEZsQlFVMDdRVUZEWkN4UlFVRkpaU3hIUVVGSExFbEJRVWxsTEUxQlFWZ3NSVUZCYlVJN1FVRkRha0lzVlVGQlNVVXNTVUZCU1N4SFFVRkhSaXhOUVVGWU96dEJRVU5CTEZWQlFVbEJMRTFCUVUwc1NVRkJTMEVzVFVGQlJDeERRVUYxUWtjc1IwRkJha01zU1VGQmVVTklMRTFCUVVRc1EwRkJkVUpKTEVkQlFXNUZMRVZCUVhkRk8wRkJRM1JGUml4UlFVRkJRU3hKUVVGSkxFZEJRVWNzU1VGQlNWZ3NTVUZCU1N4RFFVRkRZeXhMUVVGVUxFTkJRV2RDVEN4TlFVRkVMRU5CUVhWQ1J5eEhRVUYwUXl4RlFVRTBRMGdzVFVGQlJDeERRVUYxUWtrc1IwRkJiRVVzUTBGQlVEdEJRVU5CYmtJc1VVRkJRVUVzUjBGQlJ5eERRVUZEY1VJc1lVRkJTaXhEUVVGclFrb3NTVUZCYkVJc1JVRkJlVUptTEVsQlFYcENPMEZCUTBRN08wRkJRMFJHTEUxQlFVRkJMRWRCUVVjc1EwRkJRM0ZDTEdGQlFVb3NRMEZCYTBKT0xFMUJRV3hDTEVWQlFUQkNZaXhKUVVFeFFqdEJRVU5FTEV0QlVtRXNRMEZUWkRzN1FVRkRSQ3hIUVZaUkxFVkJWVTRzUTBGQlEyRXNUVUZCUkN4RlFVRlRaaXhIUVVGVUxFTkJWazBzUTBGQlZEczdRVUZaUVN4dFFrRkJNRU5rTEZGQlFWRXNRMEZCUTAwc1MwRkJTeXhEUVVGRE9FSXNZVUZCVUN4RFFVRnNSRHRCUVVGQk8wRkJRVUVzVFVGQlQwRXNZVUZCVUR0QlFVRkJMRTFCUVhOQ1F5eG5Ra0ZCZEVJN1FVRkRRVHRCUVVOR08wRkJRMEU3T3p0QlFVTkZkRU1zUlVGQlFVRXNVMEZCVXl4RFFVRkRMRmxCUVUwN1FVRkRaQ3hSUVVGSlpTeEhRVUZITEVsQlFVbHpRaXhoUVVGWUxFVkJRVEJDTzBGQlEzaENMRlZCUVUxRkxFMUJRVTBzUjBGQlJ5eEpRVUZKYkVJc1NVRkJTU3hEUVVGRGJVSXNVMEZCVkN4RlFVRm1PMEZCUTBGRUxFMUJRVUZCTEUxQlFVMHNRMEZCUTBVc1IwRkJVQ3hEUVVGWExGVkJRVU5ETEUxQlFVUXNSVUZCV1R0QlFVTnlRbGdzVVVGQlFVRXNVMEZCVXl4RFFVRkRWeXhOUVVGTkxFTkJRVU5rTEVsQlFWSXNRMEZCVkR0QlFVTkJWaXhSUVVGQlFTeFBRVUZQTEVOQlFVTjNRaXhOUVVGTkxFTkJRVU5ETEV0QlFWSXNRMEZCVUR0QlFVTkJUQ3hSUVVGQlFTeG5Ra0ZCWjBJc1EwRkJReXhMUVVGRUxFTkJRV2hDTzBGQlEwUXNUMEZLUkR0QlFVdEVPMEZCUTBZc1IwRlVVU3hGUVZOT0xFTkJRVU5FTEdGQlFVUXNSVUZCWjBKMFFpeEhRVUZvUWl4RFFWUk5MRU5CUVZRN1FVRlhRVllzUlVGQlFVRXNhMEpCUVd0Q0xFTkJRVzFDVlN4SFFVRnVRaXhGUVVGNVFsSXNTMEZCZWtJc1JVRkJaME1zUTBGRGFFUXNUMEZFWjBRc1JVRkZhRVFzVlVGR1owUXNSVUZIYUVRc1dVRklaMFFzUlVGSmFFUXNaVUZLWjBRc1JVRkxhRVFzWlVGTVowUXNSVUZOYUVRc1YwRk9aMFFzUlVGUGFFUXNWMEZRWjBRc1JVRlJhRVFzVlVGU1owUXNSVUZUYUVRc1YwRlVaMFFzUlVGVmFFUXNVVUZXWjBRc1JVRlhhRVFzVTBGWVowUXNSVUZaYUVRc1YwRmFaMFFzUlVGaGFFUXNVMEZpWjBRc1JVRmphRVFzV1VGa1owUXNSVUZsYUVRc1dVRm1aMFFzUlVGblFtaEVMR1ZCYUVKblJDeEZRV2xDYUVRc1pVRnFRbWRFTEVWQmEwSm9SQ3hsUVd4Q1owUXNSVUZ0UW1oRUxGZEJia0puUkN4RlFXOUNhRVFzVlVGd1FtZEVMRVZCY1VKb1JDeFRRWEpDWjBRc1JVRnpRbWhFTEdOQmRFSm5SQ3hGUVhWQ2FFUXNhVUpCZGtKblJDeEZRWGRDYUVRc1RVRjRRbWRFTEVWQmVVSm9SQ3hSUVhwQ1owUXNSVUV3UW1oRUxHTkJNVUpuUkN4RlFUSkNhRVFzWVVFelFtZEVMRVZCTkVKb1JDeFpRVFZDWjBRc1JVRTJRbWhFTEdGQk4wSm5SQ3hGUVRoQ2FFUXNXVUU1UW1kRUxFVkJLMEpvUkN4WFFTOUNaMFFzUlVGblEyaEVMRlZCYUVOblJDeEZRV2xEYUVRc1YwRnFRMmRFTEVOQlFXaERMRU5CUVd4Q0xFTkJha1ZwUkN4RFFXOUhha1E3TzBGQlEwRklMRVZCUVVGQkxHRkJRV0VzUTBGQmJVSlhMRWRCUVc1Q0xFVkJRWGxDVWl4TFFVRjZRaXhGUVVGblF5eERRVU16UXl4bFFVUXlReXhGUVVVelF5eG5Ra0ZHTWtNc1JVRkhNME1zVTBGSU1rTXNSVUZKTTBNc1UwRktNa01zUlVGTE0wTXNWVUZNTWtNc1JVRk5NME1zV1VGT01rTXNSVUZQTTBNc1ZVRlFNa01zUlVGUk0wTXNZVUZTTWtNc1JVRlRNME1zVTBGVU1rTXNSVUZWTTBNc1ZVRldNa01zUlVGWE0wTXNUVUZZTWtNc1EwRkJhRU1zUTBGQllqdEJRV0ZCU2l4RlFVRkJRU3h0UWtGQmJVSXNRMEZCYlVKWkxFZEJRVzVDTEVWQlFYbENVaXhMUVVGNlFpeEZRVUZuUXl4RFFVTnFSQ3hWUVVScFJDeEZRVVZxUkN4cFFrRkdhVVFzUlVGSGFrUXNhVUpCU0dsRUxFVkJTV3BFTEZWQlNtbEVMRVZCUzJwRUxHdENRVXhwUkN4RlFVMXFSQ3huUWtGT2FVUXNSVUZQYWtRc1lVRlFhVVFzUlVGUmFrUXNXVUZTYVVRc1EwRkJhRU1zUTBGQmJrSTdRVUZWUVN4VFFVRlBPMEZCUTB4UkxFbEJRVUZCTEVkQlFVY3NSVUZCU0VFc1IwRkVTenRCUVVWTVF5eEpRVUZCUVN4TlFVRk5MRVZCUVU1QkxFMUJSa3M3UVVGSFRFY3NTVUZCUVVFc1UwRkJVeXhGUVVGVVFTeFRRVWhMTzBGQlNVeERMRWxCUVVGQkxGbEJRVmtzUlVGQldrRXNXVUZLU3p0QlFVdE1WU3hKUVVGQlFTeE5RVUZOTEVWQlFVNUJMRTFCVEVzN1FVRk5URU1zU1VGQlFVRXNVMEZCVXl4RlFVRlVRU3hUUVU1TE8wRkJUMHhOTEVsQlFVRkJMR0ZCUVdFc1JVRkJZa0VzWVVGUVN6dEJRVkZNUXl4SlFVRkJRU3huUWtGQlowSXNSVUZCYUVKQk8wRkJVa3NzUjBGQlVEdEJRVlZFSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2RYTmxSV1ptWldOMExDQjFjMlZUZEdGMFpTd2dkWE5sVFdWdGJ5QjlJR1p5YjIwZ0ozSmxZV04wSnp0Y2JtbHRjRzl5ZENCN0lFMWhjRU5vYVd4a1VISnZjSE1nZlNCbWNtOXRJQ2N1TGk5amIyMXRiMjR2YldGd0p6dGNibWx0Y0c5eWRDQjdJRTFoY0ZCeWIzQnpJSDBnWm5KdmJTQW5MaThuTzF4dWFXMXdiM0owSUhzZ2RYTmxSVzVoWW14bFVISnZjR1Z5ZEdsbGN5d2dkWE5sVUhKdmNHVnlkR2xsY3l3Z2RYTmxSWFpsYm5SUWNtOXdaWEowYVdWeklIMGdabkp2YlNBbkxpNHZZMjl0Ylc5dUwyaHZiMnR6Snp0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQlZjMlZOWVhBZ1pYaDBaVzVrY3lCTllYQlFjbTl3Y3l3Z1RXRndRMmhwYkdSUWNtOXdjeUI3WEc0Z0lDOHFLbHh1SUNBZ0tpRG1qSWZscnBybm1vVGxycm5sbWFoY2JpQWdJQ292WEc0Z0lHTnZiblJoYVc1bGNqODZJSE4wY21sdVp5QjhJRWhVVFV4RWFYWkZiR1Z0Wlc1ME8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUIxYzJWTllYQW9jSEp2Y0hNNklGVnpaVTFoY0NBOUlIdDlLU0I3WEc0Z0lHTnZibk4wSUhzZ2QybGtaMlYwTENCdGFXNWFiMjl0TENCdFlYaGFiMjl0TENCdFlYQlVlWEJsTENCbGJtRmliR1ZJYVdkb1VtVnpiMngxZEdsdmJpd2daVzVoWW14bFFYVjBiMUpsYzJsNlpTd2daVzVoWW14bFRXRndRMnhwWTJzZ2ZTQTlJSEJ5YjNCek8xeHVJQ0JqYjI1emRDQmJiV0Z3TENCelpYUk5ZWEJkSUQwZ2RYTmxVM1JoZEdVOFFrMWhjQzVOWVhBK0tDazdYRzRnSUdOdmJuTjBJRnQ2YjI5dExDQnpaWFJhYjI5dFhTQTlJSFZ6WlZOMFlYUmxLSEJ5YjNCekxucHZiMjBnZkh3Z01UVXBPMXh1SUNCamIyNXpkQ0JiWTI5dWRHRnBibVZ5TENCelpYUkRiMjUwWVdsdVpYSmRJRDBnZFhObFUzUmhkR1VvY0hKdmNITXVZMjl1ZEdGcGJtVnlLVHRjYmlBZ2RYTmxUV1Z0Ynlnb0tTQTlQaUI3WEc0Z0lDQWdhV1lnS0dOdmJuUmhhVzVsY2lBbUppQWhiV0Z3SUNZbUlFSk5ZWEFwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR2x1YzNSaGJtTmxJRDBnYm1WM0lFSk5ZWEF1VFdGd0tHTnZiblJoYVc1bGNpd2dlMXh1SUNBZ0lDQWdJQ0J0YVc1YWIyOXRMRnh1SUNBZ0lDQWdJQ0J0WVhoYWIyOXRMRnh1SUNBZ0lDQWdJQ0J0WVhCVWVYQmxMRnh1SUNBZ0lDQWdJQ0JsYm1GaWJHVklhV2RvVW1WemIyeDFkR2x2Yml4Y2JpQWdJQ0FnSUNBZ1pXNWhZbXhsUVhWMGIxSmxjMmw2WlN4Y2JpQWdJQ0FnSUNBZ1pXNWhZbXhsVFdGd1EyeHBZMnNzWEc0Z0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUM4cUtseHVJQ0FnSUNBZ0lDb2c1WXFnNkwyOTVvNm41THUyWEc0Z0lDQWdJQ0FnS2k5Y2JpQWdJQ0FnSUhkcFpHZGxkQ0FtSmx4dUlDQWdJQ0FnSUNCM2FXUm5aWFF1Wm05eVJXRmphQ2dvYVhSbGJTa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdhWFJsYlNBOVBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbHVjM1JoYm1ObExtRmtaRU52Ym5SeWIyd29ibVYzSUNoQ1RXRndXMmwwWlcxZElHRnpJR0Z1ZVNrb0tTazdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnYVhSbGJTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2FYUmxiUzVqYjI1MGNtOXNJQ1ltSUhSNWNHVnZaaUJwZEdWdExtTnZiblJ5YjJ3Z1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2x1YzNSaGJtTmxMbUZrWkVOdmJuUnliMndvYVhSbGJTNWpiMjUwY205c0tFSk5ZWEFzSUdsdWMzUmhibU5sS1NrN1hHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gwZVhCbGIyWWdhWFJsYlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnYVhSbGJTNXVZVzFsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnZjSFJwYjI1eklEMGdkSGx3Wlc5bUlHbDBaVzB1YjNCMGFXOXVjeUE5UFQwZ0oyWjFibU4wYVc5dUp5QS9JR2wwWlcwdWIzQjBhVzl1Y3loQ1RXRndMQ0JwYm5OMFlXNWpaU2tnT2lCcGRHVnRMbTl3ZEdsdmJuTTdYRzRnSUNBZ0lDQWdJQ0FnSUNCcGJuTjBZVzVqWlM1aFpHUkRiMjUwY205c0tHNWxkeUFvUWsxaGNGdHBkR1Z0TG01aGJXVmRJR0Z6SUdGdWVTa29iM0IwYVc5dWN5a3BPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQnpaWFJOWVhBb2FXNXpkR0Z1WTJVcE8xeHVJQ0FnSUgxY2JpQWdJQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzF1WlhoMExXeHBibVVnY21WaFkzUXRhRzl2YTNNdlpYaG9ZWFZ6ZEdsMlpTMWtaWEJ6WEc0Z0lIMHNJRnRqYjI1MFlXbHVaWElzSUcxaGNGMHBPMXh1WEc0Z0lHTnZibk4wSUZ0alpXNTBaWElzSUhObGRFTmxiblJsY2wwZ1BTQjFjMlZUZEdGMFpTaHdjbTl3Y3k1alpXNTBaWElnZkh3Z0orUzRpdWExdHljcE8xeHVJQ0F2S2lwY2JpQWdJQ29nNXFDNTVvMnU1WStDNXBXdzZLNis1NzJ1NUxpdDViK0Q1NEs1WEc0Z0lDQXFMMXh1SUNCMWMyVkZabVpsWTNRb0tDa2dQVDRnZTF4dUlDQWdJR2xtSUNodFlYQWdKaVlnWTJWdWRHVnlLU0I3WEc0Z0lDQWdJQ0JzWlhRZ1kyVnVkQ0E5SUdObGJuUmxjanRjYmlBZ0lDQWdJR2xtSUNoalpXNTBaWElnSmlZZ0tHTmxiblJsY2lCaGN5QkNUV0Z3TGxCdmFXNTBLUzVzYm1jZ0ppWWdLR05sYm5SbGNpQmhjeUJDVFdGd0xsQnZhVzUwS1M1c1lYUXBJSHRjYmlBZ0lDQWdJQ0FnWTJWdWRDQTlJRzVsZHlCQ1RXRndMbEJ2YVc1MEtDaGpaVzUwWlhJZ1lYTWdRazFoY0M1UWIybHVkQ2t1Ykc1bkxDQW9ZMlZ1ZEdWeUlHRnpJRUpOWVhBdVVHOXBiblFwTG14aGRDazdYRzRnSUNBZ0lDQWdJRzFoY0M1alpXNTBaWEpCYm1SYWIyOXRLR05sYm5RaExDQjZiMjl0SVNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCdFlYQXVZMlZ1ZEdWeVFXNWtXbTl2YlNoalpXNTBaWElzSUhwdmIyMGhLVHRjYmlBZ0lDQjlYRzRnSUNBZ0x5OGdaWE5zYVc1MExXUnBjMkZpYkdVdGJtVjRkQzFzYVc1bElISmxZV04wTFdodmIydHpMMlY0YUdGMWMzUnBkbVV0WkdWd2MxeHVJQ0I5TENCYlkyVnVkR1Z5TENCdFlYQmRLVHRjYmx4dUlDQmpiMjV6ZENCYllYVjBiMHh2WTJGc1EybDBlU3dnYzJWMFFYVjBiMHh2WTJGc1EybDBlVjBnUFNCMWMyVlRkR0YwWlNod2NtOXdjeTVoZFhSdlRHOWpZV3hEYVhSNUtUdGNiaUFnTHlvcVhHNGdJQ0FxSUVsUTVhNmE1TDJONkk2MzVZK1c1YjJUNVltTjVaK081YmlDNzd5TTZMK2I2S0dNNkllcTVZcW81YTZhNUwyTlhHNGdJQ0FxTDF4dUlDQjFjMlZGWm1abFkzUW9LQ2tnUFQ0Z2UxeHVJQ0FnSUdsbUlDaHRZWEFnSmlZZ1lYVjBiMHh2WTJGc1EybDBlU2tnZTF4dUlDQWdJQ0FnWTI5dWMzUWdiWGxEYVhSNUlEMGdibVYzSUVKTllYQXVURzlqWVd4RGFYUjVLQ2s3WEc0Z0lDQWdJQ0J0ZVVOcGRIa3VaMlYwS0NoeVpYTjFiSFFwSUQwK0lIdGNiaUFnSUNBZ0lDQWdjMlYwUTJWdWRHVnlLSEpsYzNWc2RDNXVZVzFsSUdGeklHRnVlU2s3WEc0Z0lDQWdJQ0FnSUhObGRGcHZiMjBvY21WemRXeDBMbXhsZG1Wc0lHRnpJR0Z1ZVNrN1hHNGdJQ0FnSUNBZ0lITmxkRUYxZEc5TWIyTmhiRU5wZEhrb1ptRnNjMlVwTzF4dUlDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dUlDQjlMQ0JiWVhWMGIweHZZMkZzUTJsMGVTd2diV0Z3WFNrN1hHNWNiaUFnZFhObFJYWmxiblJRY205d1pYSjBhV1Z6UEVKTllYQXVUV0Z3TENCVmMyVk5ZWEErS0cxaGNDRXNJSEJ5YjNCekxDQmJYRzRnSUNBZ0owTnNhV05ySnl4Y2JpQWdJQ0FuUkdKc1EyeHBZMnNuTEZ4dUlDQWdJQ2RTYVdkb2RFTnNhV05ySnl4Y2JpQWdJQ0FuVW1sbmFIUmtZbXhEYkdsamF5Y3NYRzRnSUNBZ0owMWhjRlI1Y0dWRGFHRnVaMlVuTEZ4dUlDQWdJQ2ROYjNWelpVMXZkbVVuTEZ4dUlDQWdJQ2ROYjNWelpVOTJaWEluTEZ4dUlDQWdJQ2ROYjNWelpVOTFkQ2NzWEc0Z0lDQWdKMDF2ZG1WVGRHRnlkQ2NzWEc0Z0lDQWdKMDF2ZG1sdVp5Y3NYRzRnSUNBZ0owMXZkbVZGYm1RbkxGeHVJQ0FnSUNkYWIyOXRVM1JoY25RbkxGeHVJQ0FnSUNkYWIyOXRSVzVrSnl4Y2JpQWdJQ0FuUVdSa1QzWmxjbXhoZVNjc1hHNGdJQ0FnSjBGa1pFTnZiblJ5YjJ3bkxGeHVJQ0FnSUNkU1pXMXZkbVZEYjI1MGNtOXNKeXhjYmlBZ0lDQW5VbVZ0YjNabFQzWmxjbXhoZVNjc1hHNGdJQ0FnSjBOc1pXRnlUM1psY214aGVYTW5MRnh1SUNBZ0lDZEVjbUZuVTNSaGNuUW5MRnh1SUNBZ0lDZEVjbUZuWjJsdVp5Y3NYRzRnSUNBZ0owUnlZV2RGYm1RbkxGeHVJQ0FnSUNkQlpHUlVhV3hsVEdGNVpYSW5MRnh1SUNBZ0lDZFNaVzF2ZG1WVWFXeGxUR0Y1WlhJbkxGeHVJQ0FnSUNkTWIyRmtKeXhjYmlBZ0lDQW5VbVZUYVhwbEp5eGNiaUFnSUNBblNHOTBjM0J2ZEVOc2FXTnJKeXhjYmlBZ0lDQW5TRzkwYzNCdmRFOTJaWEluTEZ4dUlDQWdJQ2RJYjNSemNHOTBUM1YwSnl4Y2JpQWdJQ0FuVkdsc1pYTk1iMkZrWldRbkxGeHVJQ0FnSUNkVWIzVmphRk4wWVhKMEp5eGNiaUFnSUNBblZHOTFZMmhOYjNabEp5eGNiaUFnSUNBblZHOTFZMmhGYm1RbkxGeHVJQ0FnSUNkTWIyNW5VSEpsYzNNbkxGeHVJQ0JkS1R0Y2JpQWdMeThnSjBObGJuUmxjaWNzWEc0Z0lIVnpaVkJ5YjNCbGNuUnBaWE04UWsxaGNDNU5ZWEFzSUZWelpVMWhjRDRvYldGd0lTd2djSEp2Y0hNc0lGdGNiaUFnSUNBblJHVm1ZWFZzZEVOMWNuTnZjaWNzWEc0Z0lDQWdKMFJ5WVdkbmFXNW5RM1Z5YzI5eUp5eGNiaUFnSUNBblRXbHVXbTl2YlNjc1hHNGdJQ0FnSjAxaGVGcHZiMjBuTEZ4dUlDQWdJQ2ROWVhCVGRIbHNaU2NzWEc0Z0lDQWdKMDFoY0ZOMGVXeGxWakluTEZ4dUlDQWdJQ2RRWVc1dmNtRnRZU2NzWEc0Z0lDQWdKME4xY25KbGJuUkRhWFI1Snl4Y2JpQWdJQ0FuVFdGd1ZIbHdaU2NzWEc0Z0lDQWdKMVpwWlhkd2IzSjBKeXhjYmlBZ0lDQW5XbTl2YlNjc1hHNGdJRjBwTzF4dUlDQjFjMlZGYm1GaWJHVlFjbTl3WlhKMGFXVnpQRUpOWVhBdVRXRndMQ0JWYzJWTllYQStLRzFoY0NFc0lIQnliM0J6TENCYlhHNGdJQ0FnSjBSeVlXZG5hVzVuSnl4Y2JpQWdJQ0FuVTJOeWIyeHNWMmhsWld4YWIyOXRKeXhjYmlBZ0lDQW5SRzkxWW14bFEyeHBZMnRhYjI5dEp5eGNiaUFnSUNBblMyVjVZbTloY21RbkxGeHVJQ0FnSUNkSmJtVnlkR2xoYkVSeVlXZG5hVzVuSnl4Y2JpQWdJQ0FuUTI5dWRHbHVkVzkxYzFwdmIyMG5MRnh1SUNBZ0lDZFFhVzVqYUZSdldtOXZiU2NzWEc0Z0lDQWdKMEYxZEc5U1pYTnBlbVVuTEZ4dUlDQmRLVHRjYmlBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0J0WVhBc1hHNGdJQ0FnYzJWMFRXRndMRnh1SUNBZ0lHTnZiblJoYVc1bGNpeGNiaUFnSUNCelpYUkRiMjUwWVdsdVpYSXNYRzRnSUNBZ1kyVnVkR1Z5TEZ4dUlDQWdJSE5sZEVObGJuUmxjaXhjYmlBZ0lDQmhkWFJ2VEc5allXeERhWFI1TEZ4dUlDQWdJSE5sZEVGMWRHOU1iMk5oYkVOcGRIa3NYRzRnSUgwN1hHNTlYRzRpWFgwPSIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbnZhciBfZXhjbHVkZWQgPSBbXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcImNoaWxkcmVuXCJdO1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCIuLi90eXBlc1wiIC8+XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUltcGVyYXRpdmVIYW5kbGUsIEZyYWdtZW50LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZU1hcCBmcm9tICcuL3VzZU1hcCc7XG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgd2luZG93LkJNYXAgPSB3aW5kb3cuQk1hcCB8fCB3aW5kb3cuQk1hcEdMO1xuICB2YXIgZWxtUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHZhciBfdXNlTWFwID0gdXNlTWFwKF9vYmplY3RTcHJlYWQoe1xuICAgIGNvbnRhaW5lcjogZWxtUmVmLmN1cnJlbnRcbiAgfSwgcHJvcHMpKSxcbiAgICAgIHNldENvbnRhaW5lciA9IF91c2VNYXAuc2V0Q29udGFpbmVyLFxuICAgICAgY29udGFpbmVyID0gX3VzZU1hcC5jb250YWluZXIsXG4gICAgICBzZXRDZW50ZXIgPSBfdXNlTWFwLnNldENlbnRlcixcbiAgICAgIHNldEF1dG9Mb2NhbENpdHkgPSBfdXNlTWFwLnNldEF1dG9Mb2NhbENpdHksXG4gICAgICBtYXAgPSBfdXNlTWFwLm1hcDtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzZXRDb250YWluZXIoZWxtUmVmLmN1cnJlbnQpO1xuICB9LCBbZWxtUmVmLmN1cnJlbnRdKTtcbiAgdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHByb3BzLmNlbnRlciAmJiBzZXRDZW50ZXIocHJvcHMuY2VudGVyKTtcbiAgfSwgW3Byb3BzLmNlbnRlcl0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzZXRBdXRvTG9jYWxDaXR5KHByb3BzLmF1dG9Mb2NhbENpdHkpO1xuICB9LCBbcHJvcHMuYXV0b0xvY2FsQ2l0eV0pO1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgIG1hcDogbWFwLFxuICAgICAgQk1hcDogQk1hcCxcbiAgICAgIGNvbnRhaW5lcjogZWxtUmVmXG4gICAgfSk7XG4gIH0sIFttYXBdKTtcbiAgdmFyIGNoaWxkcyA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICByZWY6IGVsbVJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfSwgc3R5bGUpXG4gIH0pLCBCTWFwICYmIG1hcCAmJiB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgJiYgY2hpbGRyZW4oe1xuICAgIEJNYXA6IEJNYXAsXG4gICAgbWFwOiBtYXAsXG4gICAgY29udGFpbmVyOiBjb250YWluZXJcbiAgfSksIEJNYXAgJiYgbWFwICYmIGNoaWxkcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkgcmV0dXJuO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGNoaWxkLnByb3BzKSwge30sIHtcbiAgICAgIEJNYXA6IEJNYXAsXG4gICAgICBtYXA6IG1hcCxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyXG4gICAgfSkpO1xuICB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1THk0dUwzTnlZeTlOWVhBdmFXNWtaWGd1ZEhONElsMHNJbTVoYldWeklqcGJJbEpsWVdOMElpd2lkWE5sVW1WbUlpd2lkWE5sUldabVpXTjBJaXdpZFhObFNXMXdaWEpoZEdsMlpVaGhibVJzWlNJc0lrWnlZV2R0Wlc1MElpd2lkWE5sVFdWdGJ5SXNJblZ6WlUxaGNDSXNJbVp2Y25kaGNtUlNaV1lpTENKeVpXWWlMQ0pqYkdGemMwNWhiV1VpTENKemRIbHNaU0lzSW1Ob2FXeGtjbVZ1SWl3aWNISnZjSE1pTENKM2FXNWtiM2NpTENKQ1RXRndJaXdpUWsxaGNFZE1JaXdpWld4dFVtVm1JaXdpWTI5dWRHRnBibVZ5SWl3aVkzVnljbVZ1ZENJc0luTmxkRU52Ym5SaGFXNWxjaUlzSW5ObGRFTmxiblJsY2lJc0luTmxkRUYxZEc5TWIyTmhiRU5wZEhraUxDSnRZWEFpTENKalpXNTBaWElpTENKaGRYUnZURzlqWVd4RGFYUjVJaXdpWTJocGJHUnpJaXdpUTJocGJHUnlaVzRpTENKMGIwRnljbUY1SWl3aVptOXVkRk5wZW1VaUxDSm9aV2xuYUhRaUxDSmphR2xzWkNJc0ltbHpWbUZzYVdSRmJHVnRaVzUwSWl3aVkyeHZibVZGYkdWdFpXNTBJbDBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVR0QlFVVkJMRTlCUVU5QkxFdEJRVkFzU1VGQlowSkRMRTFCUVdoQ0xFVkJRWGRDUXl4VFFVRjRRaXhGUVVGdFEwTXNiVUpCUVc1RExFVkJRWGRFUXl4UlFVRjRSQ3hGUVVGclJVTXNUMEZCYkVVc1VVRkJhVVlzVDBGQmFrWTdRVUZEUVN4UFFVRlBReXhOUVVGUUxFMUJRVzFDTEZWQlFXNUNPMEZCTmtkQkxEUkNRVUZsVGl4TFFVRkxMRU5CUVVOUExGVkJRVTRzUTBGRFlpeG5Ra0ZCTWtORExFZEJRVE5ETEVWQlFXMUVPMEZCUVVFc1RVRkJhRVJETEZOQlFXZEVMRkZCUVdoRVFTeFRRVUZuUkR0QlFVRkJMRTFCUVhKRFF5eExRVUZ4UXl4UlFVRnlRMEVzUzBGQmNVTTdRVUZCUVN4TlFVRTVRa01zVVVGQk9FSXNVVUZCT1VKQkxGRkJRVGhDTzBGQlFVRXNUVUZCYWtKRExFdEJRV2xDT3p0QlFVTnFSRU1zUlVGQlFVRXNUVUZCVFN4RFFVRkRReXhKUVVGUUxFZEJRV05FTEUxQlFVMHNRMEZCUTBNc1NVRkJVQ3hKUVVGbFJDeE5RVUZOTEVOQlFVTkZMRTFCUVhCRE8wRkJRMEVzVFVGQlRVTXNUVUZCVFN4SFFVRkhaaXhOUVVGTkxFTkJRV2xDTEVsQlFXcENMRU5CUVhKQ096dEJRVU5CTEdkQ1FVRnpSVXNzVFVGQlRUdEJRVU14UlZjc1NVRkJRVUVzVTBGQlV5eEZRVUZGUkN4TlFVRk5MRU5CUVVORk8wRkJSSGRFTEV0QlJYWkZUaXhMUVVaMVJTeEZRVUUxUlR0QlFVRkJMRTFCUVZGUExGbEJRVklzVjBGQlVVRXNXVUZCVWp0QlFVRkJMRTFCUVhOQ1JpeFRRVUYwUWl4WFFVRnpRa0VzVTBGQmRFSTdRVUZCUVN4TlFVRnBRMGNzVTBGQmFrTXNWMEZCYVVOQkxGTkJRV3BETzBGQlFVRXNUVUZCTkVORExHZENRVUUxUXl4WFFVRTBRMEVzWjBKQlFUVkRPMEZCUVVFc1RVRkJPRVJETEVkQlFUbEVMRmRCUVRoRVFTeEhRVUU1UkRzN1FVRkpRWEJDTEVWQlFVRkJMRk5CUVZNc1EwRkJRenRCUVVGQkxGZEJRVTFwUWl4WlFVRlpMRU5CUVVOSUxFMUJRVTBzUTBGQlEwVXNUMEZCVWl4RFFVRnNRanRCUVVGQkxFZEJRVVFzUlVGQk5FVXNRMEZCUTBZc1RVRkJUU3hEUVVGRFJTeFBRVUZTTEVOQlFUVkZMRU5CUVZRN1FVRkRRV0lzUlVGQlFVRXNUMEZCVHl4RFFVRkRPMEZCUVVFc1YwRkJUVThzUzBGQlN5eERRVUZEVnl4TlFVRk9MRWxCUVdkQ1NDeFRRVUZUTEVOQlFVTlNMRXRCUVVzc1EwRkJRMWNzVFVGQlVDeERRVUV2UWp0QlFVRkJMRWRCUVVRc1JVRkJhVVFzUTBGQlExZ3NTMEZCU3l4RFFVRkRWeXhOUVVGUUxFTkJRV3BFTEVOQlFWQTdRVUZEUVhKQ0xFVkJRVUZCTEZOQlFWTXNRMEZCUXp0QlFVRkJMRmRCUVUxdFFpeG5Ra0ZCWjBJc1EwRkJRMVFzUzBGQlN5eERRVUZEV1N4aFFVRlFMRU5CUVhSQ08wRkJRVUVzUjBGQlJDeEZRVUVyUXl4RFFVRkRXaXhMUVVGTExFTkJRVU5aTEdGQlFWQXNRMEZCTDBNc1EwRkJWRHRCUVVOQmNrSXNSVUZCUVVFc2JVSkJRVzFDTEVOQlFVTkxMRWRCUVVRc1JVRkJUVHRCUVVGQkxESkRRVUZaU1N4TFFVRmFPMEZCUVcxQ1ZTeE5RVUZCUVN4SFFVRkhMRVZCUVVoQkxFZEJRVzVDTzBGQlFYZENVaXhOUVVGQlFTeEpRVUZKTEVWQlFVcEJMRWxCUVhoQ08wRkJRVGhDUnl4TlFVRkJRU3hUUVVGVExFVkJRVVZFTzBGQlFYcERPMEZCUVVFc1IwRkJUaXhGUVVFd1JDeERRVUZEVFN4SFFVRkVMRU5CUVRGRUxFTkJRVzVDTzBGQlEwRXNUVUZCVFVjc1RVRkJUU3hIUVVGSGVrSXNTMEZCU3l4RFFVRkRNRUlzVVVGQlRpeERRVUZsUXl4UFFVRm1MRU5CUVhWQ2FFSXNVVUZCZGtJc1EwRkJaanRCUVVOQkxITkNRVU5GTEc5Q1FVRkRMRkZCUVVRc2NVSkJRMFU3UVVGQlN5eEpRVUZCTEVkQlFVY3NSVUZCUlVzc1RVRkJWanRCUVVGclFpeEpRVUZCTEZOQlFWTXNSVUZCUlZBc1UwRkJOMEk3UVVGQmQwTXNTVUZCUVN4TFFVRkxPMEZCUVVsdFFpeE5RVUZCUVN4UlFVRlJMRVZCUVVVc1EwRkJaRHRCUVVGcFFrTXNUVUZCUVVFc1RVRkJUU3hGUVVGRk8wRkJRWHBDTEU5QlFXOURia0lzUzBGQmNFTTdRVUZCTjBNc1NVRkVSaXhGUVVWSFNTeEpRVUZKTEVsQlFVbFJMRWRCUVZJc1NVRkJaU3hQUVVGUFdDeFJRVUZRTEV0QlFXOUNMRlZCUVc1RExFbEJRV2xFUVN4UlFVRlJMRU5CUVVNN1FVRkJSVWNzU1VGQlFVRXNTVUZCU1N4RlFVRktRU3hKUVVGR08wRkJRVkZSTEVsQlFVRkJMRWRCUVVjc1JVRkJTRUVzUjBGQlVqdEJRVUZoVEN4SlFVRkJRU3hUUVVGVExFVkJRVlJCTzBGQlFXSXNSMEZCUkN4RFFVWTFSQ3hGUVVkSFNDeEpRVUZKTEVsQlEwaFJMRWRCUkVRc1NVRkZRMGNzVFVGQlRTeERRVUZEU0N4SFFVRlFMRU5CUVZjc1ZVRkJRMUVzUzBGQlJDeEZRVUZYTzBGQlEzQkNMRkZCUVVrc1pVRkJRemxDTEV0QlFVc3NRMEZCUXl0Q0xHTkJRVTRzUTBGQmNVSkVMRXRCUVhKQ0xFTkJRVXdzUlVGQmEwTTdRVUZEYkVNc2QwSkJRVTg1UWl4TFFVRkxMRU5CUVVOblF5eFpRVUZPTEVOQlFXMUNSaXhMUVVGdVFpeHJRMEZEUmtFc1MwRkJTeXhEUVVGRGJFSXNTMEZFU2p0QlFVVk1SU3hOUVVGQlFTeEpRVUZKTEVWQlFVcEJMRWxCUmtzN1FVRkhURkVzVFVGQlFVRXNSMEZCUnl4RlFVRklRU3hIUVVoTE8wRkJTVXhNTEUxQlFVRkJMRk5CUVZNc1JVRkJWRUU3UVVGS1N5eFBRVUZRTzBGQlRVUXNSMEZTUkN4RFFVeEtMRU5CUkVZN1FVRnBRa1FzUTBFNVFsa3NRMEZCWmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZMeUE4Y21WbVpYSmxibU5sSUhSNWNHVnpQVndpTGk0dmRIbHdaWE5jSWlBdlBseHVYRzVwYlhCdmNuUWdVbVZoWTNRc0lIc2dkWE5sVW1WbUxDQjFjMlZGWm1abFkzUXNJSFZ6WlVsdGNHVnlZWFJwZG1WSVlXNWtiR1VzSUVaeVlXZHRaVzUwTENCMWMyVk5aVzF2SUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSFZ6WlUxaGNDQm1jbTl0SUNjdUwzVnpaVTFoY0NjN1hHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdRMjl1ZEhKdmJDQjdYRzRnSUVOdmJuUnliMnc2SUVKTllYQXVRMjl1ZEhKdmJEdGNiaUFnVG1GMmFXZGhkR2x2YmtOdmJuUnliMnc2SUVKTllYQXVUbUYyYVdkaGRHbHZia052Ym5SeWIyeFBjSFJwYjI1ek8xeHVJQ0JQZG1WeWRtbGxkMDFoY0VOdmJuUnliMnc2SUVKTllYQXVUM1psY25acFpYZE5ZWEJEYjI1MGNtOXNUM0IwYVc5dWN6dGNiaUFnVTJOaGJHVkRiMjUwY205c09pQkNUV0Z3TGxOallXeGxRMjl1ZEhKdmJFOXdkR2x2Ym5NN1hHNGdJRTFoY0ZSNWNHVkRiMjUwY205c09pQkNUV0Z3TGsxaGNGUjVjR1ZEYjI1MGNtOXNUM0IwYVc5dWN6dGNiaUFnUTI5d2VYSnBaMmgwUTI5dWRISnZiRG9nUWsxaGNDNURiM0I1Y21sbmFIUkRiMjUwY205c1QzQjBhVzl1Y3p0Y2JpQWdSMlZ2Ykc5allYUnBiMjVEYjI1MGNtOXNPaUJDVFdGd0xrZGxiMnh2WTJGMGFXOXVRMjl1ZEhKdmJFOXdkR2x2Ym5NN1hHNTlYRzVjYm1WNGNHOXlkQ0IwZVhCbElFTnZiblJ5YjJ4UGNIUnBiMjV6SUQxY2JpQWdmQ0I3WEc0Z0lDQWdJQ0J1WVcxbE9pQnJaWGx2WmlCRGIyNTBjbTlzTzF4dUlDQWdJQ0FnYjNCMGFXOXVjejg2SUNoaWJXRndPaUIwZVhCbGIyWWdRazFoY0N3Z2JXRndPaUJDVFdGd0xrMWhjQ2tnUFQ0Z2RtOXBaRHRjYmlBZ0lDQWdJR052Ym5SeWIydy9LR0p0WVhBNklIUjVjR1Z2WmlCQ1RXRndMQ0J0WVhBNklFSk5ZWEF1VFdGd0tUb2dRazFoY0M1RGIyNTBjbTlzTzF4dUlDQWdJSDFjYmlBZ2ZDQjdYRzRnSUNBZ0lDQnVZVzFsT2lCclpYbHZaaUJEYjI1MGNtOXNPMXh1SUNBZ0lDQWdiM0IwYVc5dWN6ODZJRU52Ym5SeWIyeGJhMlY1YjJZZ1EyOXVkSEp2YkYwN1hHNGdJQ0FnSUNCamIyNTBjbTlzUHloaWJXRndPaUIwZVhCbGIyWWdRazFoY0N3Z2JXRndPaUJDVFdGd0xrMWhjQ2s2SUVKTllYQXVRMjl1ZEhKdmJEdGNiaUFnSUNCOU8xeHVYRzVsZUhCdmNuUWdkSGx3WlNCRGIyNTBjbTlzVDNCMGFXOXVjMEZzYkNBOUlHdGxlVzltSUVOdmJuUnliMndnZkNCRGIyNTBjbTlzVDNCMGFXOXVjenRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCTllYQlFjbTl3Y3lCbGVIUmxibVJ6SUVKTllYQXVUV0Z3VDNCMGFXOXVjeXdnUWsxaGNDNU5ZWEJGZG1WdWRITWdlMXh1SUNCamJHRnpjMDVoYldVL09pQlNaV0ZqZEM1SVZFMU1RWFIwY21saWRYUmxjenhJVkUxTVJHbDJSV3hsYldWdWRENWJKMk5zWVhOelRtRnRaU2RkTzF4dUlDQnpkSGxzWlQ4NklGSmxZV04wTGtoVVRVeEJkSFJ5YVdKMWRHVnpQRWhVVFV4RWFYWkZiR1Z0Wlc1MFBsc25jM1I1YkdVblhUdGNiaUFnTHlvcVhHNGdJQ0FxSU9lWnZ1VzZwdVdjc09XYnZ1UzRpdWkwbitpMG8rUzRqdVdjc09XYnZ1UzZwT1M2a3VlYWhGVko1WVdENTdTZzU2ZXc1TGk2NW82bjVMdTI0NENDWEc0Z0lDQXFMMXh1SUNCM2FXUm5aWFEvT2lBb1EyOXVkSEp2YkU5d2RHbHZibk5CYkd3Z2ZDQkRiMjUwY205c1QzQjBhVzl1Y3lsYlhUdGNiaUFnTHlvcVhHNGdJQ0FxSU9lOHFlYVV2dWV0aWVlNnAxeHVJQ0FnS2k5Y2JpQWdlbTl2YlQ4NklHNTFiV0psY2p0Y2JpQWdMeW9xWEc0Z0lDQXFJT1d1bXVTOWpTd2c1WSt2NUwyLzU1U281YWFDSUdEa3VJcm10YmZsdUlKZ0lPZWFoT1djc09XTXV1V3RsK2VzcHVTNHN1KzhqRnh1SUNBZ0tpRGt1Wi9sajYva3U2WGt2Yi9ubEtqbHI3bm9zYUhscG9JZ1lIdHNibWM2SURFeU1TNDBNalF6TXpNc0lHeGhkRG9nTXpFdU1qSTROakEwZldBZzZLR281NlM2NTd1UDU3cXM1YnFtWEc0Z0lDQXFMMXh1SUNCalpXNTBaWEkvT2lCemRISnBibWNnZkNCQ1RXRndMbEJ2YVc1ME8xeHVJQ0F2S2lwY2JpQWdJQ29nU1ZEbHJwcmt2WTNvanJmbGo1Ymx2WlBsaVkzbG40N2x1SUx2dkl6b3Y1dm9vWXpvaDZybGlxamxycHJrdlkxY2JpQWdJQ292WEc0Z0lHRjFkRzlNYjJOaGJFTnBkSGsvT2lCaWIyOXNaV0Z1TzF4dUlDQmphR2xzWkhKbGJqODZJRkpsWVdOMExsSmxZV04wVG05a1pUdGNiaUFnTHlvcVhHNGdJQ0FxSU9XUXIrZVVxT1djc09XYnZ1YUxsdWFMdmUrOGpPbTdtT2l1cE9XUXIrZVVxRnh1SUNBZ0tpOWNiaUFnWlc1aFlteGxSSEpoWjJkcGJtYy9PaUJpYjI5c1pXRnVPMXh1SUNBdktpcGNiaUFnSUNvZzVaQ3Y1NVNvNXJ1YTZMMnU1cFMrNWFTbjU3eXA1YkNQNzd5TTZidVk2SzZrNTZhQjU1U29YRzRnSUNBcUwxeHVJQ0JsYm1GaWJHVlRZM0p2Ykd4WGFHVmxiRnB2YjIwL09pQmliMjlzWldGdU8xeHVJQ0F2S2lwY2JpQWdJQ29nNVpDdjU1U281WStNNVllNzVwUys1YVNuNzd5TTZidVk2SzZrNVpDdjU1U29YRzRnSUNBcUwxeHVJQ0JsYm1GaWJHVkViM1ZpYkdWRGJHbGphMXB2YjIwL09pQmliMjlzWldGdU8xeHVJQ0F2S2lwY2JpQWdJQ29nNVpDdjU1U281Wnl3NVp1KzVvT3Y1b0NuNW91VzVvdTk3N3lNNmJ1WTZLNms1NmFCNTVTb1hHNGdJQ0FxTDF4dUlDQmxibUZpYkdWSmJtVnlkR2xoYkVSeVlXZG5hVzVuUHpvZ1ltOXZiR1ZoYmp0Y2JpQWdMeW9xWEc0Z0lDQXFJT1dRcitlVXFPaS9udWU3cmVlOHFlYVV2dWFWaU9hZW5PKzhqT203bU9pdXBPZW1nZWVVcUZ4dUlDQWdLaTljYmlBZ1pXNWhZbXhsUTI5dWRHbHVkVzkxYzFwdmIyMC9PaUJpYjI5c1pXRnVPMXh1SUNBdktpcGNiaUFnSUNvZzVaQ3Y1NVNvNVkrTTVveUg1cE9ONUwyYzU3eXA1cFMrNzd5TTZidVk2SzZrNVpDdjU1U29YRzRnSUNBcUwxeHVJQ0JsYm1GaWJHVlFhVzVqYUZSdldtOXZiVDg2SUdKdmIyeGxZVzQ3WEc0Z0lDOHFLbHh1SUNBZ0tpRGxrSy9ubEtqcGxLN25tNWptazQza3ZaenZ2SXpwdTVqb3JxVG5wb0hubEtqamdJTHBsSzdubTVqbm1vVGt1SXJqZ0lIa3VJdmpnSUhsdDZiamdJSGxqN1BwbEs3bGo2L292NTdudTYzbnA3dmxpcWpsbkxEbG03N2pnSUxsa0l6bWw3Ym1qSW5rdUl2bGhiYmt1SzNrdUtUa3VLcnBsSzdsajYva3ZiL2xuTERsbTc3b3Y1dm9vWXpscjdub3A1TG5wN3ZsaXFqamdJSmNiaUFnSUNvZ1VHZFZjT09BZ1ZCblJHN2pnSUZJYjIxbDVaS01SVzVrNlpTdTVMeWE1TDIvNVp5dzVadSs1Ym16NTZlNzVZVzJNUzh5NTVxRTVhU241YkNQNDRDQ0srT0FnUzNwbEs3a3ZKcmt2Yi9sbkxEbG03N21sTDdscEtmbWlKYm52S25sc0kva3VJRG51cWRjYmlBZ0lDb3ZYRzRnSUdWdVlXSnNaVXRsZVdKdllYSmtQem9nWW05dmJHVmhianRjYmlBZ0x5b3FYRzRnSUNBcUlPaXV2dWU5cnVXY3NPV2J2dVM0cXVhQXArV01sdWFndCtXOGoxWXk1NG1JNXB5czc3eU01THVGNXBTdjVveUI1NDZ3NUx1ajVyV1A2S2VJNVptbzc3eUk1cFN2NW95QlEyRnVkbUZ6Nzd5SlhHNGdJQ0FxTDF4dUlDQnRZWEJUZEhsc1pWWXlQem9nUWsxaGNDNU5ZWEJUZEhsc1pWWXlPMXh1SUNBdktpcGNiaUFnSUNvZzZLNis1NzJ1NVp5dzVadSs1WitPNWJpQzc3eU01ck9vNW9TUDViMlQ1Wnl3NVp1KzVZaWQ1YWVMNVl5VzVwZTI1NXFFNTdHNzVaNkw2SzYrNTcydTVMaTZJR0JDVFVGUVgwNVBVazFCVEY5TlFWQmdJT2FYdHUrOGpGeHVJQ0FnS2lEcG5JRG9wb0hsbktqb3NJUG5sS2dnWUdObGJuUmxja0Z1WkZwdmIyMWdJT1M1aStXSmplaXdnK2VVcU9hdHBPYVd1ZWF6bGVpdXZ1ZTlydVdjc09XYnZ1YUpnT1djcU9XZmp1VzRndU9BZ2x4dUlDQWdLaURrdm92bHBvTHZ2SnBjYmlBZ0lDb2dRR1Y0WVcxd2JHVmNiaUFnSUNwY2JpQWdJQ29nWUdCZ2FuTmNiaUFnSUNvZ2RtRnlJRzFoY0NBOUlHNWxkeUJDVFdGd0xrMWhjQ2ppZ0p4amIyNTBZV2x1WlhMaWdKMHNJSHNnYldGd1ZIbHdaVG9nUWsxQlVGOU9UMUpOUVV4ZlRVRlFJSDBwTzF4dUlDQWdLaUJ0WVhBdWMyVjBRM1Z5Y21WdWRFTnBkSGtvNG9DYzVZeVg1THFzNWJpQzRvQ2RLVHRjYmlBZ0lDb2diV0Z3TG1ObGJuUmxja0Z1WkZwdmIyMG9ibVYzSUVKTllYQXVVRzlwYm5Rb01URTJMalF3TkN3Z016a3VPVEUxS1N3Z01UZ3BPMXh1SUNBZ0tpQmdZR0JjYmlBZ0lDcGNiaUFnSUNvZzVyT281b1NQNzd5YTVZaWQ1YWVMNVl5VzU1cUU1WjJRNXFDSDVicVU1TGlPNW9LbzZLNis1NzJ1NTVxRTVaK081YmlDNWErNTVicVU3N3lNNVpDbTVZaVo1Wnl3NVp1KzViQ0c1cGVnNXJPVjVxMmo1Ymk0NXBpKzU2UzY0NENDWEc0Z0lDQXFMMXh1SUNCamRYSnlaVzUwUTJsMGVUODZJSE4wY21sdVp6dGNiaUFnTHlvcVhHNGdJQ0FxSU9Xd2h1V0ZxT2FacitXdW51UytpK1M0amsxaGNPZXh1K2kvbStpaGpPZTdrZVd1bWx4dUlDQWdLaTljYmlBZ2NHRnViM0poYldFL09pQkNUV0Z3TGxCaGJtOXlZVzFoTzF4dVhHNGdJSFpwWlhkd2IzSjBQem9nS0hacFpYYzZJRUZ5Y21GNVBFSk5ZWEF1VUc5cGJuUStJSHdnUWsxaGNDNVdhV1YzY0c5eWRDd2dkbWxsZDNCdmNuUlBjSFJwYjI1ek9pQkNUV0Z3TGxacFpYZHdiM0owVDNCMGFXOXVjeWtnUFQ0Z2RtOXBaRHRjYm4xY2JseHVaWGh3YjNKMElIUjVjR1VnVFdGd1EyaHBiR1JTWlc1a1pYSlFjbTl3Y3lBOVhHNGdJSHdnZTF4dUlDQWdJQ0FnWTJocGJHUnlaVzQvT2lBb1pHRjBZVG9nZXlCQ1RXRndPaUIwZVhCbGIyWWdRazFoY0RzZ2JXRndPaUJDVFdGd0xrMWhjRHNnWTI5dWRHRnBibVZ5UHpvZ2MzUnlhVzVuSUh3Z1NGUk5URVJwZGtWc1pXMWxiblFnZkNCdWRXeHNJSDBwSUQwK0lIWnZhV1E3WEc0Z0lDQWdmVnh1SUNCOElIc2dZMmhwYkdSeVpXNC9PaUJTWldGamRDNVNaV0ZqZEU1dlpHVWdmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVW1WaFkzUXVabTl5ZDJGeVpGSmxaanhOWVhCUWNtOXdjeUFtSUhzZ2JXRndQem9nUWsxaGNDNU5ZWEFnZlN3Z1RXRndVSEp2Y0hNZ0ppQk5ZWEJEYUdsc1pGSmxibVJsY2xCeWIzQnpQaWhjYmlBZ0tIc2dZMnhoYzNOT1lXMWxMQ0J6ZEhsc1pTd2dZMmhwYkdSeVpXNHNJQzR1TG5CeWIzQnpJSDBzSUhKbFppa2dQVDRnZTF4dUlDQWdJSGRwYm1SdmR5NUNUV0Z3SUQwZ2QybHVaRzkzTGtKTllYQWdmSHdnZDJsdVpHOTNMa0pOWVhCSFREdGNiaUFnSUNCamIyNXpkQ0JsYkcxU1pXWWdQU0IxYzJWU1pXWThTRlJOVEVScGRrVnNaVzFsYm5RK0tHNTFiR3dwTzF4dUlDQWdJR052Ym5OMElIc2djMlYwUTI5dWRHRnBibVZ5TENCamIyNTBZV2x1WlhJc0lITmxkRU5sYm5SbGNpd2djMlYwUVhWMGIweHZZMkZzUTJsMGVTd2diV0Z3SUgwZ1BTQjFjMlZOWVhBb2UxeHVJQ0FnSUNBZ1kyOXVkR0ZwYm1WeU9pQmxiRzFTWldZdVkzVnljbVZ1ZENCaGN5QnpkSEpwYm1jZ2ZDQklWRTFNUkdsMlJXeGxiV1Z1ZEN4Y2JpQWdJQ0FnSUM0dUxuQnliM0J6TEZ4dUlDQWdJSDBwTzF4dUlDQWdJSFZ6WlVWbVptVmpkQ2dvS1NBOVBpQnpaWFJEYjI1MFlXbHVaWElvWld4dFVtVm1MbU4xY25KbGJuUWdZWE1nYzNSeWFXNW5JSHdnU0ZSTlRFUnBka1ZzWlcxbGJuUWdmQ0IxYm1SbFptbHVaV1FwTENCYlpXeHRVbVZtTG1OMWNuSmxiblJkS1R0Y2JpQWdJQ0IxYzJWTlpXMXZLQ2dwSUQwK0lIQnliM0J6TG1ObGJuUmxjaUFtSmlCelpYUkRaVzUwWlhJb2NISnZjSE11WTJWdWRHVnlJU2tzSUZ0d2NtOXdjeTVqWlc1MFpYSmRLVHRjYmlBZ0lDQjFjMlZGWm1abFkzUW9LQ2tnUFQ0Z2MyVjBRWFYwYjB4dlkyRnNRMmwwZVNod2NtOXdjeTVoZFhSdlRHOWpZV3hEYVhSNUlTa3NJRnR3Y205d2N5NWhkWFJ2VEc5allXeERhWFI1WFNrN1hHNGdJQ0FnZFhObFNXMXdaWEpoZEdsMlpVaGhibVJzWlNoeVpXWXNJQ2dwSUQwK0lDaDdJQzR1TG5CeWIzQnpMQ0J0WVhBc0lFSk5ZWEFzSUdOdmJuUmhhVzVsY2pvZ1pXeHRVbVZtSUgwcExDQmJiV0Z3WFNrN1hHNGdJQ0FnWTI5dWMzUWdZMmhwYkdSeklEMGdVbVZoWTNRdVEyaHBiR1J5Wlc0dWRHOUJjbkpoZVNoamFHbHNaSEpsYmlrN1hHNGdJQ0FnY21WMGRYSnVJQ2hjYmlBZ0lDQWdJRHhHY21GbmJXVnVkRDVjYmlBZ0lDQWdJQ0FnUEdScGRpQnlaV1k5ZTJWc2JWSmxabjBnWTJ4aGMzTk9ZVzFsUFh0amJHRnpjMDVoYldWOUlITjBlV3hsUFh0N0lHWnZiblJUYVhwbE9pQXhMQ0JvWldsbmFIUTZJQ2N4TURBbEp5d2dMaTR1YzNSNWJHVWdmWDBnTHo1Y2JpQWdJQ0FnSUNBZ2UwSk5ZWEFnSmlZZ2JXRndJQ1ltSUhSNWNHVnZaaUJqYUdsc1pISmxiaUE5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJqYUdsc1pISmxiaWg3SUVKTllYQXNJRzFoY0N3Z1kyOXVkR0ZwYm1WeUlIMHBmVnh1SUNBZ0lDQWdJQ0I3UWsxaGNDQW1KbHh1SUNBZ0lDQWdJQ0FnSUcxaGNDQW1KbHh1SUNBZ0lDQWdJQ0FnSUdOb2FXeGtjeTV0WVhBb0tHTm9hV3hrS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVkpsWVdOMExtbHpWbUZzYVdSRmJHVnRaVzUwS0dOb2FXeGtLU2tnY21WMGRYSnVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUZKbFlXTjBMbU5zYjI1bFJXeGxiV1Z1ZENoamFHbHNaQ3dnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0F1TGk1amFHbHNaQzV3Y205d2N5eGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1FrMWhjQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdiV0Z3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWElzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNCOUtYMWNiaUFnSUNBZ0lEd3ZSbkpoWjIxbGJuUStYRzRnSUNBZ0tUdGNiaUFnZlN4Y2JpazdYRzRpWFgwPSIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgdXNlUHJldmlvdXMgfSBmcm9tICcuL2hvb2tzJztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgZGl2ID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldERpdiA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgICAgcG9ydGFsID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldFBvcnRhbCA9IF91c2VTdGF0ZTRbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZSgwKSxcbiAgICAgIF91c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU1LCAyKSxcbiAgICAgIGNvdW50ID0gX3VzZVN0YXRlNlswXSxcbiAgICAgIHNldENvdW50ID0gX3VzZVN0YXRlNlsxXTtcblxuICB2YXIgX3VzZVN0YXRlNyA9IHVzZVN0YXRlKHByb3BzLmNoaWxkcmVuKSxcbiAgICAgIF91c2VTdGF0ZTggPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGU3LCAyKSxcbiAgICAgIGNoaWxkcmVuID0gX3VzZVN0YXRlOFswXSxcbiAgICAgIHNldENoaWxkcmVuID0gX3VzZVN0YXRlOFsxXTtcblxuICB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBvcnRhbCkge1xuICAgICAgdmFyIHBvcnRhbEluc3RhbmNlID0gLyojX19QVVJFX18qL1JlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgZGl2KTtcbiAgICAgIHNldENvdW50KGNvdW50ICsgMSk7XG4gICAgICBzZXRQb3J0YWwocG9ydGFsSW5zdGFuY2UpO1xuICAgIH1cbiAgfSwgW3BvcnRhbF0pO1xuICB2YXIgcHJldkNvdW50ID0gdXNlUHJldmlvdXMoY291bnQpO1xuICB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZGl2ICYmIGNoaWxkcmVuICYmIGNvdW50ID09PSBwcmV2Q291bnQgJiYgY291bnQgPiAwKSB7XG4gICAgICB2YXIgcG9ydGFsSW5zdGFuY2UgPSAvKiNfX1BVUkVfXyovUmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBkaXYpO1xuICAgICAgc2V0Q291bnQoY291bnQgKyAxKTtcbiAgICAgIHNldFBvcnRhbChwb3J0YWxJbnN0YW5jZSk7XG4gICAgfVxuICB9LCBbY2hpbGRyZW4sIGRpdiwgcG9ydGFsXSk7XG4gIHJldHVybiB7XG4gICAgZGl2OiBkaXYsXG4gICAgc2V0RGl2OiBzZXREaXYsXG4gICAgcG9ydGFsOiBwb3J0YWwsXG4gICAgc2V0UG9ydGFsOiBzZXRQb3J0YWwsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIHNldENoaWxkcmVuOiBzZXRDaGlsZHJlblxuICB9O1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUx5NHVMM055WXk5amIyMXRiMjR2ZFhObFEzSmxZWFJsVUc5eWRHRnNMblJ6ZUNKZExDSnVZVzFsY3lJNld5SjFjMlZOWlcxdklpd2lkWE5sVTNSaGRHVWlMQ0pTWldGamRFUlBUU0lzSW5WelpWQnlaWFpwYjNWeklpd2ljSEp2Y0hNaUxDSmtiMk4xYldWdWRDSXNJbU55WldGMFpVVnNaVzFsYm5RaUxDSmthWFlpTENKelpYUkVhWFlpTENKd2IzSjBZV3dpTENKelpYUlFiM0owWVd3aUxDSmpiM1Z1ZENJc0luTmxkRU52ZFc1MElpd2lZMmhwYkdSeVpXNGlMQ0p6WlhSRGFHbHNaSEpsYmlJc0luQnZjblJoYkVsdWMzUmhibU5sSWl3aVkzSmxZWFJsVUc5eWRHRnNJaXdpY0hKbGRrTnZkVzUwSWwwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFc1UwRkJVMEVzVDBGQlZDeEZRVUZyUWtNc1VVRkJiRUlzVVVGQmEwTXNUMEZCYkVNN1FVRkRRU3hQUVVGUFF5eFJRVUZRTEUxQlFYRkNMRmRCUVhKQ08wRkJRMEVzVTBGQlUwTXNWMEZCVkN4UlFVRTBRaXhUUVVFMVFqdEJRVk5CTEdkQ1FVRmxMRmxCUVcxRE8wRkJRVUVzVFVGQmJFTkRMRXRCUVd0RExIVkZRVUV4UWl4RlFVRXdRanM3UVVGRGFFUXNhMEpCUVhOQ1NDeFJRVUZSTEVOQlFXbENTU3hSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVJc1MwRkJka0lzUTBGQmFrSXNRMEZCT1VJN1FVRkJRVHRCUVVGQkxFMUJRVTlETEVkQlFWQTdRVUZCUVN4TlFVRlpReXhOUVVGYU96dEJRVU5CTEcxQ1FVRTBRbEFzVVVGQlVTeEZRVUZ3UXp0QlFVRkJPMEZCUVVFc1RVRkJUMUVzVFVGQlVEdEJRVUZCTEUxQlFXVkRMRk5CUVdZN08wRkJRMEVzYlVKQlFUQkNWQ3hSUVVGUkxFTkJRVU1zUTBGQlJDeERRVUZzUXp0QlFVRkJPMEZCUVVFc1RVRkJUMVVzUzBGQlVEdEJRVUZCTEUxQlFXTkRMRkZCUVdRN08wRkJRMEVzYlVKQlFXZERXQ3hSUVVGUkxFTkJRVU5ITEV0QlFVc3NRMEZCUTFNc1VVRkJVQ3hEUVVGNFF6dEJRVUZCTzBGQlFVRXNUVUZCVDBFc1VVRkJVRHRCUVVGQkxFMUJRV2xDUXl4WFFVRnFRanM3UVVGRFFXUXNSVUZCUVVFc1QwRkJUeXhEUVVGRExGbEJRVTA3UVVGRFdpeFJRVUZKTEVOQlFVTlRMRTFCUVV3c1JVRkJZVHRCUVVOWUxGVkJRVTFOTEdOQlFXTXNaMEpCUVVkaUxGRkJRVkVzUTBGQlEyTXNXVUZCVkN4RFFVRnpRa2dzVVVGQmRFSXNSVUZCWjBOT0xFZEJRV2hETEVOQlFYWkNPMEZCUTBGTExFMUJRVUZCTEZGQlFWRXNRMEZCUTBRc1MwRkJTeXhIUVVGSExFTkJRVlFzUTBGQlVqdEJRVU5CUkN4TlFVRkJRU3hUUVVGVExFTkJRVU5MTEdOQlFVUXNRMEZCVkR0QlFVTkVPMEZCUTBZc1IwRk9UU3hGUVUxS0xFTkJRVU5PTEUxQlFVUXNRMEZPU1N4RFFVRlFPMEZCVVVFc1RVRkJUVkVzVTBGQlV5eEhRVUZIWkN4WFFVRlhMRU5CUVVOUkxFdEJRVVFzUTBGQk4wSTdRVUZEUVZnc1JVRkJRVUVzVDBGQlR5eERRVUZETEZsQlFVMDdRVUZEV2l4UlFVRkpUeXhIUVVGSExFbEJRVWxOTEZGQlFWQXNTVUZCYlVKR0xFdEJRVXNzUzBGQlMwMHNVMEZCTjBJc1NVRkJNRU5PTEV0QlFVc3NSMEZCUnl4RFFVRjBSQ3hGUVVGNVJEdEJRVU4yUkN4VlFVRk5TU3hqUVVGakxHZENRVUZIWWl4UlFVRlJMRU5CUVVOakxGbEJRVlFzUTBGQmMwSklMRkZCUVhSQ0xFVkJRV2REVGl4SFFVRm9ReXhEUVVGMlFqdEJRVU5CU3l4TlFVRkJRU3hSUVVGUkxFTkJRVU5FTEV0QlFVc3NSMEZCUnl4RFFVRlVMRU5CUVZJN1FVRkRRVVFzVFVGQlFVRXNVMEZCVXl4RFFVRkRTeXhqUVVGRUxFTkJRVlE3UVVGRFJEdEJRVU5HTEVkQlRrMHNSVUZOU2l4RFFVRkRSaXhSUVVGRUxFVkJRVmRPTEVkQlFWZ3NSVUZCWjBKRkxFMUJRV2hDTEVOQlRra3NRMEZCVUR0QlFWRkJMRk5CUVU4N1FVRkRURVlzU1VGQlFVRXNSMEZCUnl4RlFVRklRU3hIUVVSTE8wRkJSVXhETEVsQlFVRkJMRTFCUVUwc1JVRkJUa0VzVFVGR1N6dEJRVWRNUXl4SlFVRkJRU3hOUVVGTkxFVkJRVTVCTEUxQlNFczdRVUZKVEVNc1NVRkJRVUVzVTBGQlV5eEZRVUZVUVN4VFFVcExPMEZCUzB4SExFbEJRVUZCTEZGQlFWRXNSVUZCVWtFc1VVRk1TenRCUVUxTVF5eEpRVUZCUVN4WFFVRlhMRVZCUVZoQk8wRkJUa3NzUjBGQlVEdEJRVkZFTEVOQk9VSkVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnZFhObFRXVnRieXdnZFhObFUzUmhkR1VnZlNCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdVbVZoWTNSRVQwMGdabkp2YlNBbmNtVmhZM1F0Wkc5dEp6dGNibWx0Y0c5eWRDQjdJSFZ6WlZCeVpYWnBiM1Z6SUgwZ1puSnZiU0FuTGk5b2IyOXJjeWM3WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1ZYTmxRM0psWVhSbFVHOXlkR0ZzSUh0Y2JpQWdMeW9xWEc0Z0lDQXFJT2lIcXVXdW11UzVpU0JFVDAwZzVZV0Q1N1NnNDRDQ1hHNGdJQ0FxTDF4dUlDQmphR2xzWkhKbGJqODZJRkpsWVdOMExsSmxZV04wVG05a1pUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hCeWIzQnpJRDBnZTMwZ1lYTWdWWE5sUTNKbFlYUmxVRzl5ZEdGc0tTQTlQaUI3WEc0Z0lHTnZibk4wSUZ0a2FYWXNJSE5sZEVScGRsMGdQU0IxYzJWVGRHRjBaVHhJVkUxTVJHbDJSV3hsYldWdWRENG9aRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWtwTzF4dUlDQmpiMjV6ZENCYmNHOXlkR0ZzTENCelpYUlFiM0owWVd4ZElEMGdkWE5sVTNSaGRHVThVbVZoWTNRdVVtVmhZM1JRYjNKMFlXdytLQ2s3WEc0Z0lHTnZibk4wSUZ0amIzVnVkQ3dnYzJWMFEyOTFiblJkSUQwZ2RYTmxVM1JoZEdVb01DazdYRzRnSUdOdmJuTjBJRnRqYUdsc1pISmxiaXdnYzJWMFEyaHBiR1J5Wlc1ZElEMGdkWE5sVTNSaGRHVW9jSEp2Y0hNdVkyaHBiR1J5Wlc0cE8xeHVJQ0IxYzJWTlpXMXZLQ2dwSUQwK0lIdGNiaUFnSUNCcFppQW9JWEJ2Y25SaGJDa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2NHOXlkR0ZzU1c1emRHRnVZMlVnUFNCU1pXRmpkRVJQVFM1amNtVmhkR1ZRYjNKMFlXd29ZMmhwYkdSeVpXNHNJR1JwZGlrN1hHNGdJQ0FnSUNCelpYUkRiM1Z1ZENoamIzVnVkQ0FySURFcE8xeHVJQ0FnSUNBZ2MyVjBVRzl5ZEdGc0tIQnZjblJoYkVsdWMzUmhibU5sS1R0Y2JpQWdJQ0I5WEc0Z0lIMHNJRnR3YjNKMFlXeGRLVHRjYmx4dUlDQmpiMjV6ZENCd2NtVjJRMjkxYm5RZ1BTQjFjMlZRY21WMmFXOTFjeWhqYjNWdWRDazdYRzRnSUhWelpVMWxiVzhvS0NrZ1BUNGdlMXh1SUNBZ0lHbG1JQ2hrYVhZZ0ppWWdZMmhwYkdSeVpXNGdKaVlnWTI5MWJuUWdQVDA5SUhCeVpYWkRiM1Z1ZENBbUppQmpiM1Z1ZENBK0lEQXBJSHRjYmlBZ0lDQWdJR052Ym5OMElIQnZjblJoYkVsdWMzUmhibU5sSUQwZ1VtVmhZM1JFVDAwdVkzSmxZWFJsVUc5eWRHRnNLR05vYVd4a2NtVnVMQ0JrYVhZcE8xeHVJQ0FnSUNBZ2MyVjBRMjkxYm5Rb1kyOTFiblFnS3lBeEtUdGNiaUFnSUNBZ0lITmxkRkJ2Y25SaGJDaHdiM0owWVd4SmJuTjBZVzVqWlNrN1hHNGdJQ0FnZlZ4dUlDQjlMQ0JiWTJocGJHUnlaVzRzSUdScGRpd2djRzl5ZEdGc1hTazdYRzVjYmlBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0JrYVhZc1hHNGdJQ0FnYzJWMFJHbDJMRnh1SUNBZ0lIQnZjblJoYkN4Y2JpQWdJQ0J6WlhSUWIzSjBZV3dzWEc0Z0lDQWdZMmhwYkdSeVpXNHNYRzRnSUNBZ2MyVjBRMmhwYkdSeVpXNHNYRzRnSUgwN1hHNTlPMXh1SWwxOSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUHJvcGVydGllcywgdXNlVmlzaWFibGUgfSBmcm9tICcuLi9jb21tb24vaG9va3MnO1xuaW1wb3J0IHVzZUNyZWF0ZVBvcnRhbCBmcm9tICcuLi9jb21tb24vdXNlQ3JlYXRlUG9ydGFsJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNvcHlyaWdodENvbnRyb2woKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIF91c2VDcmVhdGVQb3J0YWwgPSB1c2VDcmVhdGVQb3J0YWwoe1xuICAgIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlblxuICB9KSxcbiAgICAgIHBvcnRhbCA9IF91c2VDcmVhdGVQb3J0YWwucG9ydGFsLFxuICAgICAgc2V0UG9ydGFsID0gX3VzZUNyZWF0ZVBvcnRhbC5zZXRQb3J0YWw7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKCksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIGNvcHlyaWdodENvbnRyb2wgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0Q29weXJpZ2h0Q29udHJvbCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIG1hcCA9IHByb3BzLm1hcCxcbiAgICAgIGFuY2hvciA9IHByb3BzLmFuY2hvcixcbiAgICAgIG9mZnNldCA9IHByb3BzLm9mZnNldDtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobWFwICYmICFjb3B5cmlnaHRDb250cm9sKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQk1hcC5Db3B5cmlnaHRDb250cm9sKHtcbiAgICAgICAgYW5jaG9yOiBhbmNob3IgfHwgQk1BUF9BTkNIT1JfVE9QX1JJR0hULFxuICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgfSk7XG4gICAgICBtYXAuYWRkQ29udHJvbChpbnN0YW5jZSk7XG4gICAgICBzZXRDb3B5cmlnaHRDb250cm9sKGluc3RhbmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG1hcCAmJiBjb3B5cmlnaHRDb250cm9sKSB7XG4gICAgICAgIG1hcC5yZW1vdmVDb250cm9sKGNvcHlyaWdodENvbnRyb2wpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFttYXAsIGNvcHlyaWdodENvbnRyb2wsIGFuY2hvciwgb2Zmc2V0XSk7XG4gIHVzZVZpc2lhYmxlKGNvcHlyaWdodENvbnRyb2wsIHByb3BzKTtcbiAgdXNlUHJvcGVydGllcyhjb3B5cmlnaHRDb250cm9sLCBwcm9wcywgWydBbmNob3InLCAnT2Zmc2V0J10pO1xuICByZXR1cm4ge1xuICAgIHBvcnRhbDogcG9ydGFsLFxuICAgIHNldFBvcnRhbDogc2V0UG9ydGFsLFxuICAgIGNvcHlyaWdodENvbnRyb2w6IGNvcHlyaWdodENvbnRyb2wsXG4gICAgc2V0Q29weXJpZ2h0Q29udHJvbDogc2V0Q29weXJpZ2h0Q29udHJvbFxuICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OURiM0I1Y21sbmFIUkRiMjUwY205c0wzVnpaVU52Y0hseWFXZG9kRU52Ym5SeWIyd3VkSE40SWwwc0ltNWhiV1Z6SWpwYkluVnpaVVZtWm1WamRDSXNJblZ6WlZOMFlYUmxJaXdpZFhObFVISnZjR1Z5ZEdsbGN5SXNJblZ6WlZacGMybGhZbXhsSWl3aWRYTmxRM0psWVhSbFVHOXlkR0ZzSWl3aWRYTmxRMjl3ZVhKcFoyaDBRMjl1ZEhKdmJDSXNJbkJ5YjNCeklpd2lZMmhwYkdSeVpXNGlMQ0p3YjNKMFlXd2lMQ0p6WlhSUWIzSjBZV3dpTENKamIzQjVjbWxuYUhSRGIyNTBjbTlzSWl3aWMyVjBRMjl3ZVhKcFoyaDBRMjl1ZEhKdmJDSXNJbTFoY0NJc0ltRnVZMmh2Y2lJc0ltOW1abk5sZENJc0ltbHVjM1JoYm1ObElpd2lRazFoY0NJc0lrTnZjSGx5YVdkb2RFTnZiblJ5YjJ3aUxDSkNUVUZRWDBGT1EwaFBVbDlVVDFCZlVrbEhTRlFpTENKaFpHUkRiMjUwY205c0lpd2ljbVZ0YjNabFEyOXVkSEp2YkNKZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQkxGTkJRVk5CTEZOQlFWUXNSVUZCYjBKRExGRkJRWEJDTEZGQlFXOURMRTlCUVhCRE8wRkJSVUVzVTBGQlUwTXNZVUZCVkN4RlFVRjNRa01zVjBGQmVFSXNVVUZCTWtNc2FVSkJRVE5ETzBGQlEwRXNUMEZCVDBNc1pVRkJVQ3hOUVVFMFFpd3lRa0ZCTlVJN1FVRkpRU3hsUVVGbExGTkJRVk5ETEcxQ1FVRlVMRWRCUVdkRk8wRkJRVUVzVFVGQmJrTkRMRXRCUVcxRExIVkZRVUV6UWl4RlFVRXlRanM3UVVGRE4wVXNlVUpCUVRoQ1JpeGxRVUZsTEVOQlFVTTdRVUZCUlVjc1NVRkJRVUVzVVVGQlVTeEZRVUZGUkN4TFFVRkxMRU5CUVVORE8wRkJRV3hDTEVkQlFVUXNRMEZCTjBNN1FVRkJRU3hOUVVGUlF5eE5RVUZTTEc5Q1FVRlJRU3hOUVVGU08wRkJRVUVzVFVGQlowSkRMRk5CUVdoQ0xHOUNRVUZuUWtFc1UwRkJhRUk3TzBGQlEwRXNhMEpCUVdkRVVpeFJRVUZSTEVWQlFYaEVPMEZCUVVFN1FVRkJRU3hOUVVGUFV5eG5Ra0ZCVUR0QlFVRkJMRTFCUVhsQ1F5eHRRa0ZCZWtJN08wRkJRMEVzVFVGQlVVTXNSMEZCVWl4SFFVRm5RMDRzUzBGQmFFTXNRMEZCVVUwc1IwRkJVanRCUVVGQkxFMUJRV0ZETEUxQlFXSXNSMEZCWjBOUUxFdEJRV2hETEVOQlFXRlBMRTFCUVdJN1FVRkJRU3hOUVVGeFFrTXNUVUZCY2tJc1IwRkJaME5TTEV0QlFXaERMRU5CUVhGQ1VTeE5RVUZ5UWp0QlFVTkJaQ3hGUVVGQlFTeFRRVUZUTEVOQlFVTXNXVUZCVFR0QlFVTmtMRkZCUVVsWkxFZEJRVWNzU1VGQlNTeERRVUZEUml4blFrRkJXaXhGUVVFNFFqdEJRVU0xUWl4VlFVRk5TeXhSUVVGUkxFZEJRVWNzU1VGQlNVTXNTVUZCU1N4RFFVRkRReXhuUWtGQlZDeERRVUV3UWp0QlFVTjZRMG9zVVVGQlFVRXNUVUZCVFN4RlFVRkZRU3hOUVVGTkxFbEJRVWxMTEhGQ1FVUjFRanRCUVVWNlEwb3NVVUZCUVVFc1RVRkJUU3hGUVVGT1FUdEJRVVo1UXl4UFFVRXhRaXhEUVVGcVFqdEJRVWxCUml4TlFVRkJRU3hIUVVGSExFTkJRVU5QTEZWQlFVb3NRMEZCWlVvc1VVRkJaanRCUVVOQlNpeE5RVUZCUVN4dFFrRkJiVUlzUTBGQlEwa3NVVUZCUkN4RFFVRnVRanRCUVVORU96dEJRVU5FTEZkQlFVOHNXVUZCVFR0QlFVTllMRlZCUVVsSUxFZEJRVWNzU1VGQlNVWXNaMEpCUVZnc1JVRkJOa0k3UVVGRE0wSkZMRkZCUVVGQkxFZEJRVWNzUTBGQlExRXNZVUZCU2l4RFFVRnJRbFlzWjBKQlFXeENPMEZCUTBRN1FVRkRSaXhMUVVwRU8wRkJTMFFzUjBGa1VTeEZRV05PTEVOQlFVTkZMRWRCUVVRc1JVRkJUVVlzWjBKQlFVNHNSVUZCZDBKSExFMUJRWGhDTEVWQlFXZERReXhOUVVGb1F5eERRV1JOTEVOQlFWUTdRVUZuUWtGWUxFVkJRVUZCTEZkQlFWY3NRMEZCUTA4c1owSkJRVVFzUlVGQmIwSktMRXRCUVhCQ0xFTkJRVmc3UVVGRFFVb3NSVUZCUVVFc1lVRkJZU3hEUVVFMlExRXNaMEpCUVRkRExFVkJRV2RGU2l4TFFVRm9SU3hGUVVGMVJTeERRVUZETEZGQlFVUXNSVUZCVnl4UlFVRllMRU5CUVhaRkxFTkJRV0k3UVVGRlFTeFRRVUZQTzBGQlEweEZMRWxCUVVGQkxFMUJRVTBzUlVGQlRrRXNUVUZFU3p0QlFVVk1ReXhKUVVGQlFTeFRRVUZUTEVWQlFWUkJMRk5CUmtzN1FVRkhURU1zU1VGQlFVRXNaMEpCUVdkQ0xFVkJRV2hDUVN4blFrRklTenRCUVVsTVF5eEpRVUZCUVN4dFFrRkJiVUlzUlVGQmJrSkJPMEZCU2tzc1IwRkJVRHRCUVUxRUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dkWE5sUldabVpXTjBMQ0IxYzJWVGRHRjBaU0I5SUdaeWIyMGdKM0psWVdOMEp6dGNibWx0Y0c5eWRDQjdJRU52Y0hseWFXZG9kRU52Ym5SeWIyeFFjbTl3Y3lCOUlHWnliMjBnSnk0dkp6dGNibWx0Y0c5eWRDQjdJSFZ6WlZCeWIzQmxjblJwWlhNc0lIVnpaVlpwYzJsaFlteGxJSDBnWm5KdmJTQW5MaTR2WTI5dGJXOXVMMmh2YjJ0ekp6dGNibWx0Y0c5eWRDQjFjMlZEY21WaGRHVlFiM0owWVd3Z1puSnZiU0FuTGk0dlkyOXRiVzl1TDNWelpVTnlaV0YwWlZCdmNuUmhiQ2M3WEc1Y2JtVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1ZYTmxRMjl3ZVhKcFoyaDBRMjl1ZEhKdmJDQmxlSFJsYm1SeklFTnZjSGx5YVdkb2RFTnZiblJ5YjJ4UWNtOXdjeUI3ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCMWMyVkRiM0I1Y21sbmFIUkRiMjUwY205c0tIQnliM0J6SUQwZ2UzMGdZWE1nVlhObFEyOXdlWEpwWjJoMFEyOXVkSEp2YkNrZ2UxeHVJQ0JqYjI1emRDQjdJSEJ2Y25SaGJDd2djMlYwVUc5eWRHRnNJSDBnUFNCMWMyVkRjbVZoZEdWUWIzSjBZV3dvZXlCamFHbHNaSEpsYmpvZ2NISnZjSE11WTJocGJHUnlaVzRnZlNrN1hHNGdJR052Ym5OMElGdGpiM0I1Y21sbmFIUkRiMjUwY205c0xDQnpaWFJEYjNCNWNtbG5hSFJEYjI1MGNtOXNYU0E5SUhWelpWTjBZWFJsUEVKTllYQXVRMjl3ZVhKcFoyaDBRMjl1ZEhKdmJENG9LVHRjYmlBZ1kyOXVjM1FnZXlCdFlYQXNJR0Z1WTJodmNpd2diMlptYzJWMElIMGdQU0J3Y205d2N6dGNiaUFnZFhObFJXWm1aV04wS0NncElEMCtJSHRjYmlBZ0lDQnBaaUFvYldGd0lDWW1JQ0ZqYjNCNWNtbG5hSFJEYjI1MGNtOXNLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQnBibk4wWVc1alpTQTlJRzVsZHlCQ1RXRndMa052Y0hseWFXZG9kRU52Ym5SeWIyd29lMXh1SUNBZ0lDQWdJQ0JoYm1Ob2IzSTZJR0Z1WTJodmNpQjhmQ0JDVFVGUVgwRk9RMGhQVWw5VVQxQmZVa2xIU0ZRc1hHNGdJQ0FnSUNBZ0lHOW1abk5sZEN4Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ2JXRndMbUZrWkVOdmJuUnliMndvYVc1emRHRnVZMlVwTzF4dUlDQWdJQ0FnYzJWMFEyOXdlWEpwWjJoMFEyOXVkSEp2YkNocGJuTjBZVzVqWlNrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQW9LU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9iV0Z3SUNZbUlHTnZjSGx5YVdkb2RFTnZiblJ5YjJ3cElIdGNiaUFnSUNBZ0lDQWdiV0Z3TG5KbGJXOTJaVU52Ym5SeWIyd29ZMjl3ZVhKcFoyaDBRMjl1ZEhKdmJDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNiaUFnZlN3Z1cyMWhjQ3dnWTI5d2VYSnBaMmgwUTI5dWRISnZiQ3dnWVc1amFHOXlMQ0J2Wm1aelpYUmRLVHRjYmx4dUlDQjFjMlZXYVhOcFlXSnNaU2hqYjNCNWNtbG5hSFJEYjI1MGNtOXNJU3dnY0hKdmNITXBPMXh1SUNCMWMyVlFjbTl3WlhKMGFXVnpQRUpOWVhBdVEyOXdlWEpwWjJoMFEyOXVkSEp2YkN3Z1ZYTmxRMjl3ZVhKcFoyaDBRMjl1ZEhKdmJENG9ZMjl3ZVhKcFoyaDBRMjl1ZEhKdmJDRXNJSEJ5YjNCekxDQmJKMEZ1WTJodmNpY3NJQ2RQWm1aelpYUW5YU2s3WEc1Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCd2IzSjBZV3dzWEc0Z0lDQWdjMlYwVUc5eWRHRnNMRnh1SUNBZ0lHTnZjSGx5YVdkb2RFTnZiblJ5YjJ3c1hHNGdJQ0FnYzJWMFEyOXdlWEpwWjJoMFEyOXVkSEp2YkN4Y2JpQWdmVHRjYm4xY2JpSmRmUT09IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VQcmV2aW91cyB9IGZyb20gJy4uL2NvbW1vbi9ob29rcyc7XG5pbXBvcnQgdXNlQ3JlYXRlUG9ydGFsIGZyb20gJy4uL2NvbW1vbi91c2VDcmVhdGVQb3J0YWwnO1xudmFyIHVpZCA9IDE7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNvbnRyb2wgPSBwcm9wcy5jb250cm9sLFxuICAgICAgYm91bmRzID0gcHJvcHMuYm91bmRzO1xuXG4gIHZhciBfdXNlQ3JlYXRlUG9ydGFsID0gdXNlQ3JlYXRlUG9ydGFsKCksXG4gICAgICBwb3J0YWwgPSBfdXNlQ3JlYXRlUG9ydGFsLnBvcnRhbCxcbiAgICAgIGRpdiA9IF91c2VDcmVhdGVQb3J0YWwuZGl2LFxuICAgICAgc2V0Q2hpbGRyZW4gPSBfdXNlQ3JlYXRlUG9ydGFsLnNldENoaWxkcmVuO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSh1aWQrKyksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAxKSxcbiAgICAgIGlkID0gX3VzZVN0YXRlMlswXTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBzZXRDaGlsZHJlbihjaGlsZHJlbik7XG4gICAgfVxuICB9LCBbY2hpbGRyZW4sIGNvbnRyb2xdKTtcbiAgdmFyIHByZXZJZCA9IHVzZVByZXZpb3VzKGlkKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocG9ydGFsICYmIGNvbnRyb2wpIHtcbiAgICAgIGNvbnRyb2wuYWRkQ29weXJpZ2h0KHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBib3VuZHM6IGJvdW5kcyxcbiAgICAgICAgY29udGVudDogZGl2LmlubmVySFRNTFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcmV2SWQgJiYgY29udHJvbCkge1xuICAgICAgICBjb250cm9sLnJlbW92ZUNvcHlyaWdodChwcmV2SWQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtjaGlsZHJlbiwgcG9ydGFsXSk7XG4gIHJldHVybiBwb3J0YWwgfHwgbnVsbDtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OURiM0I1Y21sbmFIUkRiMjUwY205c0wwbDBaVzB1ZEhONElsMHNJbTVoYldWeklqcGJJblZ6WlVWbVptVmpkQ0lzSW5WelpWTjBZWFJsSWl3aWRYTmxVSEpsZG1sdmRYTWlMQ0oxYzJWRGNtVmhkR1ZRYjNKMFlXd2lMQ0oxYVdRaUxDSndjbTl3Y3lJc0ltTm9hV3hrY21WdUlpd2lZMjl1ZEhKdmJDSXNJbUp2ZFc1a2N5SXNJbkJ2Y25SaGJDSXNJbVJwZGlJc0luTmxkRU5vYVd4a2NtVnVJaXdpYVdRaUxDSndjbVYyU1dRaUxDSmhaR1JEYjNCNWNtbG5hSFFpTENKamIyNTBaVzUwSWl3aWFXNXVaWEpJVkUxTUlpd2ljbVZ0YjNabFEyOXdlWEpwWjJoMElsMHNJbTFoY0hCcGJtZHpJam9pTzBGQlEwRXNVMEZCVTBFc1UwRkJWQ3hGUVVGdlFrTXNVVUZCY0VJc1VVRkJiME1zVDBGQmNFTTdRVUZEUVN4VFFVRlRReXhYUVVGVUxGRkJRVFJDTEdsQ1FVRTFRanRCUVVOQkxFOUJRVTlETEdWQlFWQXNUVUZCTkVJc01rSkJRVFZDTzBGQlJVRXNTVUZCU1VNc1IwRkJWeXhIUVVGSExFTkJRV3hDTzBGQmFVSkJMR2RDUVVGbExGbEJRWE5DTzBGQlFVRXNUVUZCY2tKRExFdEJRWEZDTEhWRlFVRlFMRVZCUVU4N1FVRkRia01zVFVGQlVVTXNVVUZCVWl4SFFVRnpRMFFzUzBGQmRFTXNRMEZCVVVNc1VVRkJVanRCUVVGQkxFMUJRV3RDUXl4UFFVRnNRaXhIUVVGelEwWXNTMEZCZEVNc1EwRkJhMEpGTEU5QlFXeENPMEZCUVVFc1RVRkJNa0pETEUxQlFUTkNMRWRCUVhORFNDeExRVUYwUXl4RFFVRXlRa2NzVFVGQk0wSTdPMEZCUTBFc2VVSkJRWEZEVEN4bFFVRmxMRVZCUVhCRU8wRkJRVUVzVFVGQlVVMHNUVUZCVWl4dlFrRkJVVUVzVFVGQlVqdEJRVUZCTEUxQlFXZENReXhIUVVGb1FpeHZRa0ZCWjBKQkxFZEJRV2hDTzBGQlFVRXNUVUZCY1VKRExGZEJRWEpDTEc5Q1FVRnhRa0VzVjBGQmNrSTdPMEZCUTBFc2EwSkJRV0ZXTEZGQlFWRXNRMEZCUTBjc1IwRkJSeXhGUVVGS0xFTkJRWEpDTzBGQlFVRTdRVUZCUVN4TlFVRlBVU3hGUVVGUU96dEJRVU5CV2l4RlFVRkJRU3hUUVVGVExFTkJRVU1zV1VGQlRUdEJRVU5rTEZGQlFVbFBMRTlCUVVvc1JVRkJZVHRCUVVOWVNTeE5RVUZCUVN4WFFVRlhMRU5CUVVOTUxGRkJRVVFzUTBGQldEdEJRVU5FTzBGQlEwWXNSMEZLVVN4RlFVbE9MRU5CUVVOQkxGRkJRVVFzUlVGQlYwTXNUMEZCV0N4RFFVcE5MRU5CUVZRN1FVRk5RU3hOUVVGTlRTeE5RVUZOTEVkQlFVZFlMRmRCUVZjc1EwRkJRMVVzUlVGQlJDeERRVUV4UWp0QlFVTkJXaXhGUVVGQlFTeFRRVUZUTEVOQlFVTXNXVUZCVFR0QlFVTmtMRkZCUVVsVExFMUJRVTBzU1VGQlNVWXNUMEZCWkN4RlFVRjFRanRCUVVOeVFrRXNUVUZCUVVFc1QwRkJUeXhEUVVGRFR5eFpRVUZTTEVOQlFYRkNPMEZCUTI1Q1JpeFJRVUZCUVN4RlFVRkZMRVZCUVVaQkxFVkJSRzFDTzBGQlJXNUNTaXhSUVVGQlFTeE5RVUZOTEVWQlFVNUJMRTFCUm0xQ08wRkJSMjVDVHl4UlFVRkJRU3hQUVVGUExFVkJRVVZNTEVkQlFVY3NRMEZCUlUwN1FVRklTeXhQUVVGeVFqdEJRVXRFT3p0QlFVTkVMRmRCUVU4c1dVRkJXVHRCUVVOcVFpeFZRVUZKU0N4TlFVRk5MRWxCUVVsT0xFOUJRV1FzUlVGQmRVSTdRVUZEY2tKQkxGRkJRVUZCTEU5QlFVOHNRMEZCUTFVc1pVRkJVaXhEUVVGM1Frb3NUVUZCZUVJN1FVRkRSRHRCUVVOR0xFdEJTa1E3UVVGTFJDeEhRV0pSTEVWQllVNHNRMEZCUTFBc1VVRkJSQ3hGUVVGWFJ5eE5RVUZZTEVOQllrMHNRMEZCVkR0QlFXTkJMRk5CUVU5QkxFMUJRVTBzU1VGQlNTeEpRVUZxUWp0QlFVTkVMRU5CTVVKRUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxZV04wTENCN0lIVnpaVWx0Y0dWeVlYUnBkbVZJWVc1a2JHVWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5QjFjMlZGWm1abFkzUXNJSFZ6WlZOMFlYUmxJSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dkWE5sVUhKbGRtbHZkWE1nZlNCbWNtOXRJQ2N1TGk5amIyMXRiMjR2YUc5dmEzTW5PMXh1YVcxd2IzSjBJSFZ6WlVOeVpXRjBaVkJ2Y25SaGJDQm1jbTl0SUNjdUxpOWpiMjF0YjI0dmRYTmxRM0psWVhSbFVHOXlkR0ZzSnp0Y2JseHViR1YwSUhWcFpEb2diblZ0WW1WeUlEMGdNVHRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCSmRHVnRJSHRjYmlBZ0x5b3FYRzRnSUNBcUlPaUhxdVd1bXVTNWlTQkVUMDBnNVlXRDU3U2c0NENDWEc0Z0lDQXFMMXh1SUNCamFHbHNaSEpsYmo4NklGSmxZV04wTGxKbFlXTjBUbTlrWlR0Y2JpQWdMeW9xWEc0Z0lDQXFJT2l2cGVlSmlPYWRnK1Mvb2VhQnIrYUpnT21BZ3VlVXFPZWFoT1djc09lUWh1V011dVdmbjF4dUlDQWdLaTljYmlBZ1ltOTFibVJ6UHpvZ1FrMWhjQzVDYjNWdVpITTdYRzRnSUM4cUtseHVJQ0FnS2lEb29ham5wTHJuaVlqbW5ZUG1qcWZrdTdibHJwN2t2b3Z2dkl4Z1EyOXdlWEpwWjJoMFEyOXVkSEp2YkdBZzU3dVo1YTJRNTd1RTVMdTI1ck9vNVlXbDU1cUU1TGlBNUxpcTU0bUk1cDJENW82bjVMdTI1YTZlNUw2TDViR2U1b0NuNDRDQ1hHNGdJQ0FxTDF4dUlDQmpiMjUwY205c1B6b2dRazFoY0M1RGIzQjVjbWxuYUhSRGIyNTBjbTlzTzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jSEp2Y0hNNklFbDBaVzBnUFNCN2ZTa2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTm9hV3hrY21WdUxDQmpiMjUwY205c0xDQmliM1Z1WkhNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0JqYjI1emRDQjdJSEJ2Y25SaGJDd2daR2wyTENCelpYUkRhR2xzWkhKbGJpQjlJRDBnZFhObFEzSmxZWFJsVUc5eWRHRnNLQ2s3WEc0Z0lHTnZibk4wSUZ0cFpGMGdQU0IxYzJWVGRHRjBaU2gxYVdRckt5azdYRzRnSUhWelpVVm1abVZqZENnb0tTQTlQaUI3WEc0Z0lDQWdhV1lnS0dOdmJuUnliMndwSUh0Y2JpQWdJQ0FnSUhObGRFTm9hV3hrY21WdUtHTm9hV3hrY21WdUtUdGNiaUFnSUNCOVhHNGdJSDBzSUZ0amFHbHNaSEpsYml3Z1kyOXVkSEp2YkYwcE8xeHVYRzRnSUdOdmJuTjBJSEJ5WlhaSlpDQTlJSFZ6WlZCeVpYWnBiM1Z6S0dsa0tUdGNiaUFnZFhObFJXWm1aV04wS0NncElEMCtJSHRjYmlBZ0lDQnBaaUFvY0c5eWRHRnNJQ1ltSUdOdmJuUnliMndwSUh0Y2JpQWdJQ0FnSUdOdmJuUnliMnd1WVdSa1EyOXdlWEpwWjJoMEtIdGNiaUFnSUNBZ0lDQWdhV1FzWEc0Z0lDQWdJQ0FnSUdKdmRXNWtjeXhjYmlBZ0lDQWdJQ0FnWTI5dWRHVnVkRG9nWkdsMklTNXBibTVsY2toVVRVd3NYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNBZ0lHbG1JQ2h3Y21WMlNXUWdKaVlnWTI5dWRISnZiQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNTBjbTlzTG5KbGJXOTJaVU52Y0hseWFXZG9kQ2h3Y21WMlNXUXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzRnSUgwc0lGdGphR2xzWkhKbGJpd2djRzl5ZEdGc1hTazdYRzRnSUhKbGRIVnliaUJ3YjNKMFlXd2dmSHdnYm5Wc2JEdGNibjA3WEc0aVhYMD0iLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQ29weXJpZ2h0Q29udHJvbCBmcm9tICcuL3VzZUNvcHlyaWdodENvbnRyb2wnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi9JdGVtJztcbnZhciBDb3B5cmlnaHRDb250cm9sID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF91c2VDb3B5cmlnaHRDb250cm9sID0gdXNlQ29weXJpZ2h0Q29udHJvbChwcm9wcyksXG4gICAgICBjb3B5cmlnaHRDb250cm9sID0gX3VzZUNvcHlyaWdodENvbnRyb2wuY29weXJpZ2h0Q29udHJvbDtcblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByb3BzKSwge30sIHtcbiAgICAgIGNvcHlyaWdodENvbnRyb2w6IGNvcHlyaWdodENvbnRyb2xcbiAgICB9KTtcbiAgfSwgW2NvcHlyaWdodENvbnRyb2xdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCBSZWFjdC5DaGlsZHJlbi50b0FycmF5KHByb3BzLmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgIGlmICggLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgY29udHJvbDogY29weXJpZ2h0Q29udHJvbCxcbiAgICAgICAgaWQ6IGluZGV4ICsgMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KSk7XG59KTtcbkNvcHlyaWdodENvbnRyb2wuSXRlbSA9IEl0ZW07XG5leHBvcnQgZGVmYXVsdCBDb3B5cmlnaHRDb250cm9sO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMeTR1TDNOeVl5OURiM0I1Y21sbmFIUkRiMjUwY205c0wybHVaR1Y0TG5SemVDSmRMQ0p1WVcxbGN5STZXeUpTWldGamRDSXNJblZ6WlVsdGNHVnlZWFJwZG1WSVlXNWtiR1VpTENKR2NtRm5iV1Z1ZENJc0luVnpaVU52Y0hseWFXZG9kRU52Ym5SeWIyd2lMQ0pKZEdWdElpd2lRMjl3ZVhKcFoyaDBRMjl1ZEhKdmJDSXNJbVp2Y25kaGNtUlNaV1lpTENKd2NtOXdjeUlzSW5KbFppSXNJbU52Y0hseWFXZG9kRU52Ym5SeWIyd2lMQ0pEYUdsc1pISmxiaUlzSW5SdlFYSnlZWGtpTENKamFHbHNaSEpsYmlJc0ltMWhjQ0lzSW1Ob2FXeGtJaXdpYVc1a1pYZ2lMQ0pwYzFaaGJHbGtSV3hsYldWdWRDSXNJbU5zYjI1bFJXeGxiV1Z1ZENJc0ltTnZiblJ5YjJ3aUxDSnBaQ0pkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTEU5QlFVOUJMRXRCUVZBc1NVRkJaMEpETEcxQ1FVRm9RaXhGUVVGeFEwTXNVVUZCY2tNc1VVRkJjVVFzVDBGQmNrUTdRVUZGUVN4UFFVRlBReXh0UWtGQlVDeE5RVUZuUXl4MVFrRkJhRU03UVVGRFFTeFBRVUZQUXl4SlFVRlFMRTFCUVdsQ0xGRkJRV3BDTzBGQlUwRXNTVUZCVFVNc1owSkJRWEZDTEdkQ1FVRkhUQ3hMUVVGTExFTkJRVU5OTEZWQlFVNHNRMEZCZDBNc1ZVRkJRME1zUzBGQlJDeEZRVUZSUXl4SFFVRlNMRVZCUVdkQ08wRkJRM0JHTERaQ1FVRTJRa3dzYlVKQlFXMUNMRU5CUVVOSkxFdEJRVVFzUTBGQmFFUTdRVUZCUVN4TlFVRlJSU3huUWtGQlVpeDNRa0ZCVVVFc1owSkJRVkk3TzBGQlEwRlNMRVZCUVVGQkxHMUNRVUZ0UWl4RFFVRkRUeXhIUVVGRUxFVkJRVTA3UVVGQlFTd3lRMEZCV1VRc1MwRkJXanRCUVVGdFFrVXNUVUZCUVVFc1owSkJRV2RDTEVWQlFXaENRVHRCUVVGdVFqdEJRVUZCTEVkQlFVNHNSVUZCT0VNc1EwRkJRMEVzWjBKQlFVUXNRMEZCT1VNc1EwRkJia0k3UVVGRFFTeHpRa0ZEUlN4dlFrRkJReXhSUVVGRUxGRkJRMGRVTEV0QlFVc3NRMEZCUTFVc1VVRkJUaXhEUVVGbFF5eFBRVUZtTEVOQlFYVkNTaXhMUVVGTExFTkJRVU5MTEZGQlFUZENMRVZCUVhWRFF5eEhRVUYyUXl4RFFVRXlReXhWUVVGRFF5eExRVUZFTEVWQlFWRkRMRXRCUVZJc1JVRkJhMEk3UVVGRE5VUXNjMEpCUVVsbUxFdEJRVXNzUTBGQlEyZENMR05CUVU0c1EwRkJjVUpHTEV0QlFYSkNMRU5CUVVvc1JVRkJhVU03UVVGREwwSXNNRUpCUVU5a0xFdEJRVXNzUTBGQlEybENMRmxCUVU0c1EwRkJiVUpJTEV0QlFXNUNMRVZCUVRCQ08wRkJReTlDU1N4UlFVRkJRU3hQUVVGUExFVkJRVVZVTEdkQ1FVUnpRanRCUVVVdlFsVXNVVUZCUVVFc1JVRkJSU3hGUVVGRlNpeExRVUZMTEVkQlFVYzdRVUZHYlVJc1QwRkJNVUlzUTBGQlVEdEJRVWxFT3p0QlFVTkVMRmRCUVU5RUxFdEJRVkE3UVVGRFJDeEhRVkpCTEVOQlJFZ3NRMEZFUmp0QlFXRkVMRU5CYUVJMlFpeERRVUU1UWp0QlFXdENRVlFzWjBKQlFXZENMRU5CUVVORUxFbEJRV3BDTEVkQlFYZENRU3hKUVVGNFFqdEJRVVZCTEdWQlFXVkRMR2RDUVVGbUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGSmxZV04wTENCN0lIVnpaVWx0Y0dWeVlYUnBkbVZJWVc1a2JHVXNJRVp5WVdkdFpXNTBJSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIc2dUM1psY214aGVWQnliM0J6SUgwZ1puSnZiU0FuTGk0dlkyOXRiVzl1TDIxaGNDYzdYRzVwYlhCdmNuUWdkWE5sUTI5d2VYSnBaMmgwUTI5dWRISnZiQ0JtY205dElDY3VMM1Z6WlVOdmNIbHlhV2RvZEVOdmJuUnliMnduTzF4dWFXMXdiM0owSUVsMFpXMGdabkp2YlNBbkxpOUpkR1Z0Snp0Y2JseHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQkRiM0I1Y21sbmFIUkRiMjUwY205c1VISnZjSE1nWlhoMFpXNWtjeUJQZG1WeWJHRjVVSEp2Y0hNc0lFSk5ZWEF1UTI5d2VYSnBaMmgwUTI5dWRISnZiRTl3ZEdsdmJuTWdlMXh1SUNBdktpcGNiaUFnSUNvZzZJZXE1YTZhNUxtSklFUlBUU0RsaFlQbnRLRGpnSUpjYmlBZ0lDb3ZYRzRnSUdOb2FXeGtjbVZ1UHpvZ1VtVmhZM1F1VW1WaFkzUk9iMlJsTzF4dWZWeHVYRzVqYjI1emRDQkRiM0I1Y21sbmFIUkRiMjUwY205c09pQmhibmtnUFNCU1pXRmpkQzVtYjNKM1lYSmtVbVZtUEVOdmNIbHlhV2RvZEVOdmJuUnliMnhRY205d2N6NG9LSEJ5YjNCekxDQnlaV1lwSUQwK0lIdGNiaUFnWTI5dWMzUWdleUJqYjNCNWNtbG5hSFJEYjI1MGNtOXNJSDBnUFNCMWMyVkRiM0I1Y21sbmFIUkRiMjUwY205c0tIQnliM0J6S1R0Y2JpQWdkWE5sU1cxd1pYSmhkR2wyWlVoaGJtUnNaU2h5WldZc0lDZ3BJRDArSUNoN0lDNHVMbkJ5YjNCekxDQmpiM0I1Y21sbmFIUkRiMjUwY205c0lIMHBMQ0JiWTI5d2VYSnBaMmgwUTI5dWRISnZiRjBwTzF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4R2NtRm5iV1Z1ZEQ1Y2JpQWdJQ0FnSUh0U1pXRmpkQzVEYUdsc1pISmxiaTUwYjBGeWNtRjVLSEJ5YjNCekxtTm9hV3hrY21WdUtTNXRZWEFvS0dOb2FXeGtMQ0JwYm1SbGVDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCcFppQW9VbVZoWTNRdWFYTldZV3hwWkVWc1pXMWxiblFvWTJocGJHUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUZKbFlXTjBMbU5zYjI1bFJXeGxiV1Z1ZENoamFHbHNaQ3dnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEhKdmJEb2dZMjl3ZVhKcFoyaDBRMjl1ZEhKdmJDeGNiaUFnSUNBZ0lDQWdJQ0FnSUdsa09pQnBibVJsZUNBcklERXNYRzRnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTm9hV3hrTzF4dUlDQWdJQ0FnZlNsOVhHNGdJQ0FnUEM5R2NtRm5iV1Z1ZEQ1Y2JpQWdLVHRjYm4wcE8xeHVYRzVEYjNCNWNtbG5hSFJEYjI1MGNtOXNMa2wwWlcwZ1BTQkpkR1Z0TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCRGIzQjVjbWxuYUhSRGIyNTBjbTlzTzF4dUlsMTkiLCJpbXBvcnQgeyBNYXAsIEFQSUxvYWRlciB9IGZyb20gJ0B1aXcvcmVhY3QtYmFpZHUtbWFwJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQmFpZHVNYXBDb21wb25lbnQgPSAoKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICczMDBweCcgfX0+XHJcbiAgICA8QVBJTG9hZGVyIGFrYXk9XCJHVHJuWGE1aHdYR3dnUW5UQkcyOFNIQnViRXJNS20zZlwiPlxyXG4gICAgICA8TWFwIGNlbnRlcj1cIuadreW3nlwiLz5cclxuICAgIDwvQVBJTG9hZGVyPlxyXG4gIDwvZGl2PlxyXG4pOyIsImltcG9ydCB7IENvbXBvbmVudCwgUmVhY3ROb2RlLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEJhaWR1TWFwQ29udGFpbmVyUHJvcHMgfSBmcm9tIFwiLi4vdHlwaW5ncy9CYWlkdU1hcFByb3BzXCI7XG5pbXBvcnQgeyBCYWlkdU1hcENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvQmFpZHVNYXBDb21wb25lbnRcIjtcblxuaW1wb3J0IFwiLi91aS9CYWlkdU1hcC5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFpZHVNYXAgZXh0ZW5kcyBDb21wb25lbnQ8QmFpZHVNYXBDb250YWluZXJQcm9wcz4ge1xuICAgIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgICAgICByZXR1cm4gPEJhaWR1TWFwQ29tcG9uZW50PjwvQmFpZHVNYXBDb21wb25lbnQ+O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJfaW1wb3J0ZWRTY3JpcHQiLCJoZWFkRWxlbWVudCIsImRvY3VtZW50Iiwic3JjIiwicmVzb2x2ZSIsInNjcmlwdCIsInJlamVjdCIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiYXJnIiwiaW5mbyIsInZhbHVlIiwiZXJyb3IiLCJkb25lIiwiUHJvbWlzZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9zZXRQcm90b3R5cGVPZiIsIm8iLCJwIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJfZ2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0Iiwic2hhbSIsIlByb3h5IiwiQm9vbGVhbiIsInZhbHVlT2YiLCJjYWxsIiwiZSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsInJlcXVpcmUiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsImFzc2VydFRoaXNJbml0aWFsaXplZCIsIl9jcmVhdGVTdXBlciIsIkRlcml2ZWQiLCJoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiX2NyZWF0ZVN1cGVySW50ZXJuYWwiLCJTdXBlciIsInJlc3VsdCIsIk5ld1RhcmdldCIsInBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJydW50aW1lIiwiT3AiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsIiRTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRpc3BsYXlOYW1lIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwibmFtZSIsIm1hcmsiLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZWNvcmQiLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJuZXh0Iiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwid2luZG93IiwiREVGQVVMVF9SRVRSWV9USU1FIiwiQVBJTG9hZGVyIiwibG9hZGVkIiwiQk1hcCIsImNhbGxiYWNrTmFtZSIsIlJlYWN0IiwiY29sb3IiLCJjZmciLCJwcm90b2NvbCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJxdWV1ZSIsInRhc2siLCJyZXF1aXJlU2NyaXB0IiwiZGVsYXkiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJha2F5IiwiaG9zdEFuZFBhdGgiLCJ2ZXJzaW9uIiwid2FpdFF1ZXVlIiwiX2RlZmluZVByb3BlcnR5Iiwib3duS2V5cyIsImVudW1lcmFibGVPbmx5IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RTcHJlYWQyIiwic291cmNlIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsImluZGV4T2YiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiX2FycmF5V2l0aEhvbGVzIiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX2kiLCJfYXJyIiwiX24iLCJfZCIsIl9zIiwiX2UiLCJfYXJyYXlMaWtlVG9BcnJheSIsImxlbiIsImFycjIiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJtaW5MZW4iLCJhcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJfbm9uSXRlcmFibGVSZXN0IiwiX3NsaWNlZFRvQXJyYXkiLCJhcnJheVdpdGhIb2xlcyIsIml0ZXJhYmxlVG9BcnJheUxpbWl0IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVJlc3QiLCJwcm9wc05hbWUiLCJlTmFtZSIsInVzZVN0YXRlIiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJmdW5OYW1lIiwidmlzaWFibGUiLCJjb25zb2xlIiwiZGF0YSIsInByZURhdGEiLCJldmVudE5hbWUiLCJldmVudEhhbmRsZSIsInJlZiIsInVzZVJlZiIsIndpZGdldCIsIm1pblpvb20iLCJtYXhab29tIiwibWFwVHlwZSIsImVuYWJsZUhpZ2hSZXNvbHV0aW9uIiwiZW5hYmxlQXV0b1Jlc2l6ZSIsImVuYWJsZU1hcENsaWNrIiwibWFwIiwic2V0TWFwIiwiem9vbSIsInNldFpvb20iLCJjb250YWluZXIiLCJzZXRDb250YWluZXIiLCJ1c2VNZW1vIiwiaXRlbSIsIm9wdGlvbnMiLCJjZW50ZXIiLCJzZXRDZW50ZXIiLCJjZW50IiwiYXV0b0xvY2FsQ2l0eSIsInNldEF1dG9Mb2NhbENpdHkiLCJteUNpdHkiLCJ1c2VFdmVudFByb3BlcnRpZXMiLCJ1c2VQcm9wZXJ0aWVzIiwidXNlRW5hYmxlUHJvcGVydGllcyIsImNsYXNzTmFtZSIsInN0eWxlIiwiY2hpbGRyZW4iLCJlbG1SZWYiLCJ1c2VNYXAiLCJjdXJyZW50IiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsImNoaWxkcyIsIkZyYWdtZW50IiwiZm9udFNpemUiLCJoZWlnaHQiLCJjaGlsZCIsIl9leHRlbmRzIiwiYXNzaWduIiwiZGl2Iiwic2V0RGl2IiwicG9ydGFsIiwic2V0UG9ydGFsIiwiY291bnQiLCJzZXRDb3VudCIsInNldENoaWxkcmVuIiwicG9ydGFsSW5zdGFuY2UiLCJSZWFjdERPTSIsInByZXZDb3VudCIsInVzZVByZXZpb3VzIiwidXNlQ3JlYXRlUG9ydGFsIiwiY29weXJpZ2h0Q29udHJvbCIsInNldENvcHlyaWdodENvbnRyb2wiLCJhbmNob3IiLCJvZmZzZXQiLCJ1c2VWaXNpYWJsZSIsInVpZCIsImNvbnRyb2wiLCJib3VuZHMiLCJpZCIsInByZXZJZCIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJDb3B5cmlnaHRDb250cm9sIiwidXNlQ29weXJpZ2h0Q29udHJvbCIsImluZGV4IiwiY3JlYXRlRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBLElBQU1BLGVBQXdDLEdBQTlDLEVBQUE7RUE2QkE7RUFDQTtFQUNBOztFQUNPLFNBQUEsYUFBQSxDQUFBLEdBQUEsRUFBbUQ7RUFDeEQsTUFBTUMsV0FBVyxHQUFHQyxRQUFRLEtBQUtBLFFBQVEsQ0FBUkEsSUFBQUEsSUFBaUJBLFFBQVEsQ0FBUkEsb0JBQUFBLENBQUFBLE1BQUFBLEVBQWxELENBQWtEQSxDQUF0QixDQUE1QjtFQUVBLFNBQU8sSUFBQSxPQUFBLENBQVksVUFBQSxPQUFBLEVBQUEsTUFBQSxFQUFxQjtFQUN0QyxRQUFJLENBQUEsUUFBQSxJQUFhQyxHQUFHLElBQXBCLGVBQUEsRUFBeUM7RUFDdkNDLE1BQUFBLE9BQU87RUFDUDtFQUNEOztFQUNELFFBQU1DLE1BQU0sR0FBR0gsUUFBUSxDQUFSQSxhQUFBQSxDQUFmLFFBQWVBLENBQWY7RUFDQUcsSUFBQUEsTUFBTSxDQUFOQSxJQUFBQSxHQUFBQSxpQkFBQUE7RUFDQUEsSUFBQUEsTUFBTSxDQUFOQSxFQUFBQSxHQUFBQSxrQkFBQUE7RUFDQUEsSUFBQUEsTUFBTSxDQUFOQSxHQUFBQSxHQUFBQSxHQUFBQTs7RUFDQUEsSUFBQUEsTUFBTSxDQUFOQSxPQUFBQSxHQUFpQixVQUFBLEdBQUEsRUFBUztFQUN4QkosTUFBQUEsV0FBVyxDQUFYQSxXQUFBQSxDQUFBQSxNQUFBQTtFQUNBSyxNQUFBQSxNQUFNLENBQUMsSUFBQSxRQUFBLENBQUEsY0FBQSxNQUFBLENBQUEsR0FBQSxFQUFQQSxvQkFBTyxDQUFBLENBQUQsQ0FBTkE7RUFGRkQsS0FBQUE7O0VBSUFBLElBQUFBLE1BQU0sQ0FBTkEsTUFB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
