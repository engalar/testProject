define(['react'], (function (react) { 'use strict';

	

	function ___$insertStyle(css) {
	    if (!css || typeof window === 'undefined') {
	        return;
	    }
	    const style = document.createElement('style');
	    style.setAttribute('type', 'text/css');
	    style.innerHTML = css;
	    document.head.appendChild(style);
	    return css;
	}

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var webviewer_min = {exports: {}};

	(function (module, exports) {
	!function (e, t) {
	  module.exports = t();
	}(window, function () {
	  return function (e) {
	    var t = {};

	    function n(o) {
	      if (t[o]) return t[o].exports;
	      var i = t[o] = {
	        i: o,
	        l: !1,
	        exports: {}
	      };
	      return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
	    }

	    return n.m = e, n.c = t, n.d = function (e, t, o) {
	      n.o(e, t) || Object.defineProperty(e, t, {
	        enumerable: !0,
	        get: o
	      });
	    }, n.r = function (e) {
	      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
	        value: "Module"
	      }), Object.defineProperty(e, "__esModule", {
	        value: !0
	      });
	    }, n.t = function (e, t) {
	      if (1 & t && (e = n(e)), 8 & t) return e;
	      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
	      var o = Object.create(null);
	      if (n.r(o), Object.defineProperty(o, "default", {
	        enumerable: !0,
	        value: e
	      }), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i, function (t) {
	        return e[t];
	      }.bind(null, i));
	      return o;
	    }, n.n = function (e) {
	      var t = e && e.__esModule ? function () {
	        return e.default;
	      } : function () {
	        return e;
	      };
	      return n.d(t, "a", t), t;
	    }, n.o = function (e, t) {
	      return Object.prototype.hasOwnProperty.call(e, t);
	    }, n.p = "/", n(n.s = 1);
	  }([function (e, t) {
	    var n;

	    n = function () {
	      return this;
	    }();

	    try {
	      n = n || new Function("return this")();
	    } catch (e) {
	      "object" == typeof window && (n = window);
	    }

	    e.exports = n;
	  }, function (e, t, n) {
	    n(2), e.exports = n(6);
	  }, function (e, t, n) {
	    (function (o, i) {
	      var r, a;

	      function s(e) {
	        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
	          return typeof e;
	        } : function (e) {
	          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	        })(e);
	      }

	      !function (o, i) {
	        "object" == s(t) && void 0 !== e ? i() : void 0 === (a = "function" == typeof (r = i) ? r.call(t, n, t, e) : r) || (e.exports = a);
	      }(0, function () {

	        function e(e) {
	          var t = this.constructor;
	          return this.then(function (n) {
	            return t.resolve(e()).then(function () {
	              return n;
	            });
	          }, function (n) {
	            return t.resolve(e()).then(function () {
	              return t.reject(n);
	            });
	          });
	        }

	        function t() {}

	        function n(e) {
	          if (!(this instanceof n)) throw new TypeError("Promises must be constructed via new");
	          if ("function" != typeof e) throw new TypeError("not a function");
	          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(e, this);
	        }

	        function r(e, t) {
	          for (; 3 === e._state;) e = e._value;

	          0 !== e._state ? (e._handled = !0, n._immediateFn(function () {
	            var n = 1 === e._state ? t.onFulfilled : t.onRejected;

	            if (null !== n) {
	              var o;

	              try {
	                o = n(e._value);
	              } catch (e) {
	                return void c(t.promise, e);
	              }

	              a(t.promise, o);
	            } else (1 === e._state ? a : c)(t.promise, e._value);
	          })) : e._deferreds.push(t);
	        }

	        function a(e, t) {
	          try {
	            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");

	            if (t && ("object" == s(t) || "function" == typeof t)) {
	              var o = t.then;
	              if (t instanceof n) return e._state = 3, e._value = t, void d(e);
	              if ("function" == typeof o) return void l(function (e, t) {
	                return function () {
	                  e.apply(t, arguments);
	                };
	              }(o, t), e);
	            }

	            e._state = 1, e._value = t, d(e);
	          } catch (t) {
	            c(e, t);
	          }
	        }

	        function c(e, t) {
	          e._state = 2, e._value = t, d(e);
	        }

	        function d(e) {
	          2 === e._state && 0 === e._deferreds.length && n._immediateFn(function () {
	            e._handled || n._unhandledRejectionFn(e._value);
	          });

	          for (var t = 0, o = e._deferreds.length; o > t; t++) r(e, e._deferreds[t]);

	          e._deferreds = null;
	        }

	        function l(e, t) {
	          var n = !1;

	          try {
	            e(function (e) {
	              n || (n = !0, a(t, e));
	            }, function (e) {
	              n || (n = !0, c(t, e));
	            });
	          } catch (e) {
	            if (n) return;
	            n = !0, c(t, e);
	          }
	        }

	        var u = setTimeout;
	        n.prototype.catch = function (e) {
	          return this.then(null, e);
	        }, n.prototype.then = function (e, n) {
	          var o = new this.constructor(t);
	          return r(this, new function (e, t, n) {
	            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n;
	          }(e, n, o)), o;
	        }, n.prototype.finally = e, n.all = function (e) {
	          return new n(function (t, n) {
	            function o(e, a) {
	              try {
	                if (a && ("object" == s(a) || "function" == typeof a)) {
	                  var c = a.then;
	                  if ("function" == typeof c) return void c.call(a, function (t) {
	                    o(e, t);
	                  }, n);
	                }

	                i[e] = a, 0 == --r && t(i);
	              } catch (e) {
	                n(e);
	              }
	            }

	            if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
	            var i = Array.prototype.slice.call(e);
	            if (0 === i.length) return t([]);

	            for (var r = i.length, a = 0; i.length > a; a++) o(a, i[a]);
	          });
	        }, n.resolve = function (e) {
	          return e && "object" == s(e) && e.constructor === n ? e : new n(function (t) {
	            t(e);
	          });
	        }, n.reject = function (e) {
	          return new n(function (t, n) {
	            n(e);
	          });
	        }, n.race = function (e) {
	          return new n(function (t, n) {
	            for (var o = 0, i = e.length; i > o; o++) e[o].then(t, n);
	          });
	        }, n._immediateFn = "function" == typeof o && function (e) {
	          o(e);
	        } || function (e) {
	          u(e, 0);
	        }, n._unhandledRejectionFn = function (e) {
	          void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e);
	        };

	        var f = function () {
	          if ("undefined" != typeof self) return self;
	          if ("undefined" != typeof window) return window;
	          if (void 0 !== i) return i;
	          throw Error("unable to locate global object");
	        }();

	        "Promise" in f ? f.Promise.prototype.finally || (f.Promise.prototype.finally = e) : f.Promise = n;
	      });
	    }).call(this, n(3).setImmediate, n(0));
	  }, function (e, t, n) {
	    (function (e) {
	      var o = void 0 !== e && e || "undefined" != typeof self && self || window,
	          i = Function.prototype.apply;

	      function r(e, t) {
	        this._id = e, this._clearFn = t;
	      }

	      t.setTimeout = function () {
	        return new r(i.call(setTimeout, o, arguments), clearTimeout);
	      }, t.setInterval = function () {
	        return new r(i.call(setInterval, o, arguments), clearInterval);
	      }, t.clearTimeout = t.clearInterval = function (e) {
	        e && e.close();
	      }, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
	        this._clearFn.call(o, this._id);
	      }, t.enroll = function (e, t) {
	        clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
	      }, t.unenroll = function (e) {
	        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
	      }, t._unrefActive = t.active = function (e) {
	        clearTimeout(e._idleTimeoutId);
	        var t = e._idleTimeout;
	        t >= 0 && (e._idleTimeoutId = setTimeout(function () {
	          e._onTimeout && e._onTimeout();
	        }, t));
	      }, n(4), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
	    }).call(this, n(0));
	  }, function (e, t, n) {
	    (function (e, t) {
	      !function (e, n) {

	        if (!e.setImmediate) {
	          var o,
	              i,
	              r,
	              a,
	              s,
	              c = 1,
	              d = {},
	              l = !1,
	              u = e.document,
	              f = Object.getPrototypeOf && Object.getPrototypeOf(e);
	          f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? o = function (e) {
	            t.nextTick(function () {
	              p(e);
	            });
	          } : !function () {
	            if (e.postMessage && !e.importScripts) {
	              var t = !0,
	                  n = e.onmessage;
	              return e.onmessage = function () {
	                t = !1;
	              }, e.postMessage("", "*"), e.onmessage = n, t;
	            }
	          }() ? e.MessageChannel ? ((r = new MessageChannel()).port1.onmessage = function (e) {
	            p(e.data);
	          }, o = function (e) {
	            r.port2.postMessage(e);
	          }) : u && "onreadystatechange" in u.createElement("script") ? (i = u.documentElement, o = function (e) {
	            var t = u.createElement("script");
	            t.onreadystatechange = function () {
	              p(e), t.onreadystatechange = null, i.removeChild(t), t = null;
	            }, i.appendChild(t);
	          }) : o = function (e) {
	            setTimeout(p, 0, e);
	          } : (a = "setImmediate$" + Math.random() + "$", s = function (t) {
	            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && p(+t.data.slice(a.length));
	          }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), o = function (t) {
	            e.postMessage(a + t, "*");
	          }), f.setImmediate = function (e) {
	            "function" != typeof e && (e = new Function("" + e));

	            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];

	            var i = {
	              callback: e,
	              args: t
	            };
	            return d[c] = i, o(c), c++;
	          }, f.clearImmediate = h;
	        }

	        function h(e) {
	          delete d[e];
	        }

	        function p(e) {
	          if (l) setTimeout(p, 0, e);else {
	            var t = d[e];

	            if (t) {
	              l = !0;

	              try {
	                !function (e) {
	                  var t = e.callback,
	                      n = e.args;

	                  switch (n.length) {
	                    case 0:
	                      t();
	                      break;

	                    case 1:
	                      t(n[0]);
	                      break;

	                    case 2:
	                      t(n[0], n[1]);
	                      break;

	                    case 3:
	                      t(n[0], n[1], n[2]);
	                      break;

	                    default:
	                      t.apply(void 0, n);
	                  }
	                }(t);
	              } finally {
	                h(e), l = !1;
	              }
	            }
	          }
	        }
	      }("undefined" == typeof self ? void 0 === e ? this : e : self);
	    }).call(this, n(0), n(5));
	  }, function (e, t) {
	    var n,
	        o,
	        i = e.exports = {};

	    function r() {
	      throw new Error("setTimeout has not been defined");
	    }

	    function a() {
	      throw new Error("clearTimeout has not been defined");
	    }

	    function s(e) {
	      if (n === setTimeout) return setTimeout(e, 0);
	      if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

	      try {
	        return n(e, 0);
	      } catch (t) {
	        try {
	          return n.call(null, e, 0);
	        } catch (t) {
	          return n.call(this, e, 0);
	        }
	      }
	    }

	    !function () {
	      try {
	        n = "function" == typeof setTimeout ? setTimeout : r;
	      } catch (e) {
	        n = r;
	      }

	      try {
	        o = "function" == typeof clearTimeout ? clearTimeout : a;
	      } catch (e) {
	        o = a;
	      }
	    }();
	    var c,
	        d = [],
	        l = !1,
	        u = -1;

	    function f() {
	      l && c && (l = !1, c.length ? d = c.concat(d) : u = -1, d.length && h());
	    }

	    function h() {
	      if (!l) {
	        var e = s(f);
	        l = !0;

	        for (var t = d.length; t;) {
	          for (c = d, d = []; ++u < t;) c && c[u].run();

	          u = -1, t = d.length;
	        }

	        c = null, l = !1, function (e) {
	          if (o === clearTimeout) return clearTimeout(e);
	          if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);

	          try {
	            o(e);
	          } catch (t) {
	            try {
	              return o.call(null, e);
	            } catch (t) {
	              return o.call(this, e);
	            }
	          }
	        }(e);
	      }
	    }

	    function p(e, t) {
	      this.fun = e, this.array = t;
	    }

	    function m() {}

	    i.nextTick = function (e) {
	      var t = new Array(arguments.length - 1);
	      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
	      d.push(new p(e, t)), 1 !== d.length || l || s(h);
	    }, p.prototype.run = function () {
	      this.fun.apply(null, this.array);
	    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function (e) {
	      return [];
	    }, i.binding = function (e) {
	      throw new Error("process.binding is not supported");
	    }, i.cwd = function () {
	      return "/";
	    }, i.chdir = function (e) {
	      throw new Error("process.chdir is not supported");
	    }, i.umask = function () {
	      return 0;
	    };
	  }, function (e, t, n) {

	    n.r(t), n.d(t, "getInstance", function () {
	      return h;
	    });
	    var o = {},
	        i = 0;
	    "undefined" == typeof console && (window.console = {
	      log: function () {},
	      warn: function () {},
	      error: function () {}
	    });

	    var r = function () {
	      for (var e = 1; e < arguments.length; e++) for (var t = Object.keys(arguments[e]), n = 0; n < t.length; n++) arguments[0][t[n]] = arguments[e][t[n]];

	      return arguments[0];
	    },
	        a = function (e) {
	      var t = [];
	      return e.forEach(function (e) {
	        t.push(e);
	      }), t;
	    },
	        s = function (e, t) {
	      var n;

	      try {
	        n = new CustomEvent(e, {
	          detail: t,
	          bubbles: !0,
	          cancelable: !0
	        });
	      } catch (o) {
	        (n = document.createEvent("Event")).initEvent(e, !0, !0), n.detail = t;
	      }

	      return n;
	    };

	    window.PDFNet && !o.skipPDFNetWebViewerWarning && console.warn("PDFNet.js and WebViewer.js have been included in the same context. See https://www.pdftron.com/kb_same_context for an explanation of why this could be an error in your application.");
	    var c = new Map(),
	        d = new Map();

	    o.WebViewer = function (e, t) {
	      var n = this;
	      if (d.get(t)) throw new Error("Two instances of WebViewer were created on the same HTML element. Please create a new element for each instance of WebViewer");
	      d.set(t, !0);
	      t.addEventListener("ready", function e() {
	        c.get(t).instance = n.getCompleteInstance(), t.removeEventListener("ready", e);
	      }), this._validateOptions(e), "legacy" === e.ui && (e.html5Path = "./ui-legacy/index.html"), e.fullAPI && e.pdftronServer && (e.forceClientSideInit || console.warn("The fullAPI and pdftronServer options have both been set so the forceClientSideInit option is now enabled. This means that WebViewer will switch to client side rendering and processing to allow use of the full API."), e.forceClientSideInit = !0), this.options = r({}, o.WebViewer.Options, e);
	      var i = this.options.path.length - 1;
	      i > 0 && "/" !== this.options.path[i] && (this.options.path += "/"), this.options.html5Path = this.options.path + this.options.html5Path, t || console.error("ViewerElement is not defined. This may be caused by calling the WebViewer constructor before the DOM is loaded, or an invalid selector. Please see http://r.pdftron.com/guides/quick-start for an example."), this.element = t, this.element.style.overflow = "hidden";
	      var a = this;
	      this.messageHandler = function (t) {
	        if ("requestl" === t.data && t.source && t.source.postMessage({
	          type: "responsel",
	          value: e.l || e.licenseKey
	        }, "*"), "requestConfig" === t.data.type && t.data.id === a.id && t.source) {
	          var n = e.config ? a._correctRelativePath(e.config) : "";
	          t.source.postMessage({
	            type: "responseConfig",
	            value: n
	          }, "*");
	        }
	      }, window.addEventListener("message", this.messageHandler, !1), this.options.autoCreate && this.create();
	    };

	    var l = {
	      licenseKey: void 0,
	      enableAzureWorkaround: !1,
	      isAdminUser: !1,
	      isReadOnly: !1
	    };
	    o.WebViewer.prototype = {
	      version: "7.1.0",
	      create: function () {
	        if (this.options.initialDoc) {
	          var e = this._correctRelativePath(this.options.initialDoc);

	          e = encodeURIComponent(e), this.options.initialDoc = e, this._create();
	        } else this._create();
	      },
	      _create: function () {
	        this.id = ++i, void 0 === this._trigger && (this._trigger = function (e, t) {
	          var n = s(e, t);
	          this.element.dispatchEvent(n);
	        });
	        var e = this.options.type.replace(" ", "").split(",");
	        e.length < 1 && (e[0] = "html5"), this._createViewer(e);
	      },
	      _validateOptions: function (e) {
	        for (var t = Object.keys(e), n = 0; n < t.length; n++) {
	          var i = t[n];
	          i in r({}, l, o.WebViewer.Options) || console.warn("".concat(i, " is not a valid option name. See http://r.pdftron.com/api/options_anchor for all available options."));
	        }

	        !e.enableRedaction || e.fullAPI || e.pdftronServer || console.warn("FullAPI or WebViewer Server is needed to apply redactions");
	      },
	      _notSupportedMobile: function () {
	        var e = document.createElement("div");
	        e.id = "webviewer-browser-unsupported", e.textContent = "PDF document viewing is not supported by this browser.", this.element.appendChild(e);
	      },
	      _createViewer: function (e) {
	        var t,
	            n = this;

	        if (n.selectedType = null, this.isMobileDevice()) {
	          if (this.options.documentType && "xod" !== this.options.documentType && !this._testWebAssembly()) return void this._notSupportedMobile();
	          if (e = Array("html5Mobile"), n.selectedType = "html5Mobile", this.options.mobileRedirect) return t = this.options.html5Path + this._getHTML5OptionsURL(), void (window.location = t);
	        }

	        for (var o = !1, i = !1, r = 0; r < e.length; r++) {
	          if ("html5mobile" === e[r].toLowerCase()) {
	            if (this.options.documentType && "xod" !== this.options.documentType && !this._testWebAssembly()) continue;

	            if (o = !0, n._testHTML5()) {
	              if (this.options.mobileRedirect) return n.selectedType = "html5Mobile", t = this.options.html5Path + this._getHTML5OptionsURL(), void (window.location = t);

	              if (this.options.xdomainProxyUrl || n.isSameOrigin(decodeURIComponent(n.options.initialDoc)) || n._testCORS()) {
	                n.selectedType = "html5Mobile";
	                break;
	              }

	              i = !0;
	            }
	          }

	          if ("html5" === e[r].toLowerCase() && (o = !0, n._testHTML5())) {
	            var a = n.isSameOrigin(decodeURIComponent(n.options.initialDoc));

	            if (this.options.xdomainProxyUrl || a || n._testCORS()) {
	              n.selectedType = "html5";
	              break;
	            }

	            i = !0;
	          }
	        }

	        if ("html5" === n.selectedType) n._createHTML5();else if ("html5Mobile" === n.selectedType) n._createHTML5Mobile();else {
	          var s;

	          if (i ? s = "This browser does not support cross origin requests. Please configure xdomain to support CORS." : o && (s = "Please use an HTML5 compatible browser."), s) {
	            var c = document.createElement("div");
	            c.id = "webviewer-browser-unsupported", c.textContent = s, n.element.appendChild(c);
	          }
	        }
	      },
	      _viewerLoaded: function (e) {
	        var t = this;

	        this._trigger("ready");

	        try {
	          var n = e.contentWindow;

	          if (void 0 !== this.options.encryption) {
	            var o = decodeURIComponent(this.options.initialDoc),
	                i = {
	              decrypt: n.CoreControls.Encryption.decrypt,
	              decryptOptions: this.options.encryption,
	              documentId: this.options.documentId,
	              extension: "xod"
	            };
	            this.loadDocument(o, i);
	          }

	          null === this.instance.docViewer.getDocument() ? n.addEventListener("documentLoaded", function () {
	            t._trigger("documentLoaded");
	          }) : this._trigger("documentLoaded"), ["displayModeChanged", "layoutModeChanged", "zoomChanged", "pageChanged", "fitModeChanged", "toolModeChanged", "rotationChanged", "finishedSavingPDF", "documentMerged"].forEach(function (e) {
	            n.addEventListener(e, function (e) {
	              t._trigger(e.type, e.detail);
	            });
	          });
	        } catch (e) {
	          console.warn("Viewer is on a different domain, the promise from WebViewer function is rejected and API functions will not work because of cross domain permissions. See http://r.pdftron.com/kb_cross_origin for more information.");
	        }
	      },
	      _isPDFExtension: function (e) {
	        var t = !1;

	        if (e) {
	          [".pdf", ".png", ".jpg", "jpeg"].forEach(function (n) {
	            e === n && (t = !0);
	          });
	        }

	        return t;
	      },
	      _isOfficeExtension: function (e) {
	        var t = !1;

	        if (e) {
	          [".docx", ".doc", ".pptx"].forEach(function (n) {
	            e === n && (t = !0);
	          });
	        }

	        return t;
	      },
	      _getHTML5OptionsURL: function () {
	        var e,
	            t,
	            n,
	            o = this.options,
	            i = "";

	        if (o.initialDoc && (i += "#d=".concat(o.initialDoc)), void 0 === o.backendType && (o.backendType = o.pdfBackend), o.documentType && "xod" === o.documentType && (e = o.documentType), o.preloadWorker && "xod" === o.preloadWorker && (e = o.preloadWorker), o.extension && (e = o.extension), e && (i += "&extension=".concat(e)), o.documentType && "xod" !== o.documentType && (t = o.documentType), o.preloadWorker && "xod" !== o.preloadWorker && (t = o.preloadWorker), t && (i += "&preloadWorker=".concat(t)), o.backendType && (i += "&pdf=".concat(o.backendType, "&office=").concat(o.backendType)), o.filename && (i += "&filename=".concat(o.filename)), void 0 !== o.streaming && (i += "&streaming=".concat(o.streaming)), o.externalPath) {
	          var r = this._correctRelativePath(o.externalPath);

	          r = encodeURIComponent(r), i += "&p=".concat(r);
	        }

	        if (o.encryption && (i += "&auto_load=false"), o.enableAnnotations && (i += "&a=1"), o.disabledElements) {
	          var a = encodeURIComponent(o.disabledElements.join(","));
	          i += "&disabledElements=".concat(a);
	        }

	        if (o.serverUrl) {
	          var s = this._correctRelativePath(o.serverUrl);

	          s = encodeURIComponent(s), i += "&server_url=".concat(s);
	        }

	        if (o.serverUrlHeaders && (i += "&serverUrlHeaders=".concat(JSON.stringify(o.serverUrlHeaders))), o.documentId && (i += "&did=".concat(o.documentId)), o.css) {
	          var c = this._correctRelativePath(o.css);

	          c = encodeURIComponent(c), i += "&css=".concat(c);
	        }

	        (o.disableI18n && (i += "&disableI18n=1"), o.enableOfflineMode && (i += "&offline=1"), o.startOffline && (i += "&startOffline=1"), (o.enableReadOnlyMode || o.isReadOnly) && (i += "&readonly=1"), o.hideAnnotationPanel && (i += "&hideAnnotationPanel=1"), void 0 !== o.annotationUser && (i += "&user=".concat(o.annotationUser)), void 0 === o.annotationAdmin && void 0 === o.isAdminUser || (i += "&admin=".concat(o.annotationAdmin || o.isAdminUser ? 1 : 0)), void 0 !== o.custom && (i += "&custom=".concat(encodeURIComponent(o.custom))), void 0 === o.showLocalFilePicker && void 0 === o.enableFilePicker || (i += "&filepicker=".concat(o.showLocalFilePicker || o.enableFilePicker ? 1 : 0)), void 0 !== o.fullAPI && (i += "&pdfnet=".concat(o.fullAPI ? 1 : 0)), void 0 !== o.enableRedaction && (i += "&enableRedaction=".concat(o.enableRedaction ? 1 : 0)), void 0 !== o.enableMeasurement && (i += "&enableMeasurement=".concat(o.enableMeasurement ? 1 : 0)), void 0 !== o.showToolbarControl && (i += "&toolbar=".concat(o.showToolbarControl ? "true" : "false")), void 0 !== o.showPageHistoryButtons && (i += "&pageHistory=".concat(o.showPageHistoryButtons ? 1 : 0)), void 0 !== o.notesInLeftPanel && (i += "&notesInLeftPanel=".concat(o.notesInLeftPanel ? 1 : 0)), void 0 !== o.xdomainProxyUrl) && (n = "string" == typeof o.xdomainProxyUrl ? {
	          url: o.xdomainProxyUrl
	        } : o.xdomainProxyUrl, i += "&xdomain_urls=".concat(encodeURIComponent(JSON.stringify(n))));
	        return (o.azureWorkaround || o.enableAzureWorkaround) && (i += "&azureWorkaround=1"), o.useDownloader || (i += "&useDownloader=0"), o.disableWebsockets && (i += "&disableWebsockets=1"), o.forceClientSideInit && (i += "&forceClientSideInit=1"), o.loadAsPDF && (i += "&loadAsPDF=1"), void 0 !== o.workerTransportPromise && (i += "&useSharedWorker=".concat(o.workerTransportPromise ? "true" : "false")), void 0 !== o.pdftronServer && o.pdftronServer && (i += "&pdftronServer=".concat(encodeURIComponent(o.pdftronServer))), void 0 !== o.accessibleMode && (i += "&accessibleMode=".concat(o.accessibleMode ? 1 : 0)), o.disableLogs && (i += "&disableLogs=1"), o.enableViewStateAnnotations && (i += "&enableViewStateAnnotations=1"), o.disableFlattenedAnnotations && (i += "&disableFlattenedAnnotations=1"), void 0 !== o.selectAnnotationOnCreation && (i += "&selectAnnotationOnCreation=".concat(o.selectAnnotationOnCreation ? 1 : 0)), (i += "&id=".concat(this.id)).length > 0 && "&" === i[0] && (i = "#".concat(i.slice(1))), i;
	      },
	      setInstanceData: function (e) {
	        c.set(this.element, {
	          iframe: e,
	          l: this.options.l || this.options.licenseKey,
	          workerTransportPromise: this.options.workerTransportPromise
	        });
	      },
	      _createHTML5: function () {
	        var e = this,
	            t = this.options.html5Path + this._getHTML5OptionsURL(),
	            n = document.createElement("iframe");

	        this.setInstanceData(n), n.id = "webviewer-".concat(this.id), n.src = t, n.title = "webviewer", n.frameBorder = 0, n.width = "100%", n.height = "100%", n.setAttribute("allowfullscreen", !0), n.setAttribute("webkitallowfullscreen", !0), n.setAttribute("mozallowfullscreen", !0), this.iframe = n, this.options.backgroundColor && n.setAttribute("data-bgcolor", this.options.backgroundColor), this.options.assetPath && n.setAttribute("data-assetpath", encodeURIComponent(this.options.assetPath)), this.loadListener = function () {
	          var t = e.iframe;

	          try {
	            e.instance = t.contentWindow.readerControl, void 0 === e.instance ? t.contentWindow.addEventListener("viewerLoaded", function () {
	              e.instance = t.contentWindow.readerControl, e._viewerLoaded(t);
	            }) : e._viewerLoaded(t);
	          } catch (n) {
	            e._viewerLoaded(t);
	          }
	        }, n.addEventListener("load", this.loadListener), this.element.appendChild(n);
	      },
	      _createHTML5Mobile: function () {
	        var e = this,
	            t = this.options.html5Path + this._getHTML5OptionsURL(),
	            n = document.createElement("iframe");

	        this.setInstanceData(n), n.id = "webviewer-".concat(this.id), n.src = t, n.frameborder = 0, this.options.assetPath && n.setAttribute("data-assetpath", encodeURIComponent(this.options.assetPath)), n.style.width = "100%", n.style.height = "100%", this.iframe = n, this.loadListener = function () {
	          var t = e.iframe;

	          try {
	            e.instance = t.contentWindow.readerControl, void 0 === e.instance ? t.contentWindow.addEventListener("viewerLoaded", function () {
	              e.instance = t.contentWindow.readerControl, e._viewerLoaded(t);
	            }) : e._viewerLoaded(t);
	          } catch (n) {
	            e._viewerLoaded(t);
	          }
	        }, n.addEventListener("load", this.loadListener), this.element.appendChild(n);
	      },
	      dispose: function () {
	        c.delete(this.element), d.delete(this.element), this.instance.closeDocument(), window.removeEventListener("message", this.messageHandler), this.iframe.removeEventListener("load", this.loadListener), this.iframe = null;
	      },
	      getInstance: function () {
	        return this.instance;
	      },
	      setCompleteInstance: function (e) {
	        this.completeInstance = e;
	      },
	      getCompleteInstance: function (e) {
	        return this.completeInstance;
	      },
	      getSideWindowVisibility: function () {
	        return this.getInstance().getShowSideWindow();
	      },
	      setSideWindowVisibility: function (e) {
	        this.getInstance().setShowSideWindow(e);
	      },
	      getShowSideWindow: function () {
	        return this.getSideWindowVisibility();
	      },
	      setShowSideWindow: function (e) {
	        this.setSideWindowVisibility(e);
	      },
	      getToolbarVisibility: function () {
	        console.warn("Unsupported method getToolbarVisibility");
	      },
	      setToolbarVisibility: function (e) {
	        this.getInstance().setToolbarVisibility(e);
	      },
	      getCurrentPageNumber: function () {
	        return this.getInstance().getCurrentPageNumber();
	      },
	      setCurrentPageNumber: function (e) {
	        this.getInstance().setCurrentPageNumber(e);
	      },
	      getPageCount: function () {
	        return this.getInstance().getPageCount();
	      },
	      getZoomLevel: function () {
	        return this.getInstance().getZoomLevel();
	      },
	      setZoomLevel: function (e) {
	        this.getInstance().setZoomLevel(e);
	      },
	      rotateClockwise: function () {
	        this.getInstance().rotateClockwise();
	      },
	      rotateCounterClockwise: function () {
	        this.getInstance().rotateCounterClockwise();
	      },
	      getLayoutMode: function () {
	        var e,
	            t = this.getInstance().getLayoutMode(),
	            n = this.iframe.contentWindow.CoreControls.DisplayModes;
	        return t === n.Single ? e = o.WebViewer.LayoutMode.Single : t === n.Continuous ? e = o.WebViewer.LayoutMode.Continuous : t === n.Facing ? e = o.WebViewer.LayoutMode.Facing : t === n.FacingContinuous ? e = o.WebViewer.LayoutMode.FacingContinuous : t === n.Cover ? e = o.WebViewer.LayoutMode.FacingCoverContinuous : t === n.CoverFacing && (e = o.WebViewer.LayoutMode.FacingCover), e;
	      },
	      setLayoutMode: function (e) {
	        var t = this.iframe.contentWindow.CoreControls.DisplayModes,
	            n = t.Continuous;
	        e === o.WebViewer.LayoutMode.Single ? n = t.Single : e === o.WebViewer.LayoutMode.Continuous ? n = t.Continuous : e === o.WebViewer.LayoutMode.Facing ? n = t.Facing : e === o.WebViewer.LayoutMode.FacingContinuous ? n = t.FacingContinuous : e === o.WebViewer.LayoutMode.FacingCover ? n = t.CoverFacing : e === o.WebViewer.LayoutMode.FacingCoverContinuous && (n = t.Cover), this.getInstance().setLayoutMode(n);
	      },
	      getToolMode: function () {
	        return this.getInstance().getToolMode();
	      },
	      setToolMode: function (e) {
	        this.getInstance().setToolMode(e);
	      },
	      fitWidth: function () {
	        var e = this.getInstance().docViewer;
	        e.setFitMode(e.FitMode.FitWidth);
	      },
	      fitHeight: function () {},
	      fitPage: function () {
	        var e = this.getInstance().docViewer;
	        e.setFitMode(e.FitMode.FitPage);
	      },
	      getFitMode: function () {
	        var e = this.getInstance().getFitMode(),
	            t = this.getInstance().docViewer.FitMode;

	        switch (e) {
	          case t.FitWidth:
	            return o.WebViewer.FitMode.FitWidth;

	          case t.FitHeight:
	            return o.WebViewer.FitMode.FitHeight;

	          case t.FitPage:
	            return o.WebViewer.FitMode.FitPage;

	          case t.Zoom:
	            return o.WebViewer.FitMode.Zoom;

	          default:
	            console.warn("Unsupported fit mode");
	        }
	      },
	      setFitMode: function (e) {
	        e === o.WebViewer.FitMode.FitWidth ? this.fitWidth() : e === o.WebViewer.FitMode.FitHeight ? this.fitHeight() : e === o.WebViewer.FitMode.FitPage ? this.fitPage() : e === o.WebViewer.FitMode.Zoom ? this.zoom() : console.warn("Unsupported fit mode: ".concat(e));
	      },
	      zoom: function () {
	        var e = this.getInstance().docViewer;
	        e.setFitMode(e.FitMode.Zoom);
	      },
	      goToFirstPage: function () {
	        this.getInstance().goToFirstPage();
	      },
	      goToLastPage: function () {
	        this.getInstance().goToLastPage();
	      },
	      goToNextPage: function () {
	        this.getInstance().goToNextPage();
	      },
	      goToPrevPage: function () {
	        this.getInstance().goToPrevPage();
	      },
	      loadDocument: function (e) {
	        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
	            n = {
	          streaming: this.options.streaming
	        },
	            o = r({}, n, t);
	        void 0 !== o.documentId && (this.getInstance().docId = o.documentId), this.getInstance().loadDocument(this._correctRelativePath(e), o);
	      },
	      searchText: function (e, t) {
	        var n = 0,
	            o = t;
	        if ("string" == typeof o && (o = t.split(",")), void 0 !== o) for (var i = 0; i < o.length; i++) "CaseSensitive" === o[i] ? n += 1 : "WholeWord" === o[i] ? n += 2 : "SearchUp" === o[i] ? n += 4 : "PageStop" === o[i] ? n += 8 : "ProvideQuads" === o[i] ? n += 16 : "AmbientString" === o[i] && (n += 32);
	        void 0 === t ? this.getInstance().searchText(e) : this.getInstance().searchText(e, n);
	      },
	      setAnnotationUser: function (e) {
	        this.getInstance().setAnnotationUser(e);
	      },
	      setAdminUser: function (e) {
	        this.getInstance().setAdminUser(e);
	      },
	      setReadOnly: function (e) {
	        this.getInstance().setReadOnly(e);
	      },
	      downloadXodDocument: function () {
	        if ("xod" === this.documentType) {
	          var e = decodeURIComponent(this.options.initialDoc);
	          window.open(e);
	        } else console.warn("Unsupported method for this document type");
	      },
	      startPrintJob: function (e) {
	        "html5" === this.selectedType ? this.getInstance().startPrintJob(e) : console.warn("Unsupported method startPrintJob");
	      },
	      endPrintJob: function () {
	        "html5" === this.selectedType ? this.getInstance().endPrintJob() : console.warn("Unsupported method endPrintJob");
	      },
	      _correctRelativePath: function (e) {
	        if ("string" != typeof e) return e;
	        var t = window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/"));
	        return /^(\/|%2F|[a-z0-9-]+:)/i.test(e) ? e : "".concat(t, "/").concat(e);
	      },
	      _testHTML5: function () {
	        try {
	          var e = document.createElement("canvas");
	          return e && e.getContext("2d");
	        } catch (e) {
	          return !1;
	        }
	      },
	      _testWebAssembly: function () {
	        return !(!window.WebAssembly || !window.WebAssembly.validate);
	      },
	      _supports: function (e) {
	        if (e === this.selectedType) return !0;

	        for (var t = 1; t < arguments.length; t++) if (arguments[t] === this.selectedType) return !0;

	        return !1;
	      },
	      _testCORS: function () {
	        return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest();
	      },
	      isIE: function () {
	        var e = navigator.userAgent.toLowerCase(),
	            t = /(msie) ([\w.]+)/.exec(e) || /(trident)(?:.*? rv:([\w.]+)|)/.exec(e);
	        return t ? parseInt(t[2], 10) : t;
	      },
	      isMobileDevice: function () {
	        return !this.isIE() && (0 === this.scrollbarWidth() && navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Touch/i) || navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/Silk/i));
	      },
	      scrollbarWidth: function () {
	        var e = document.createElement("div");
	        e.style.cssText = "width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px", document.body.appendChild(e);
	        var t = e.offsetWidth - e.clientWidth;
	        return document.body.removeChild(e), t;
	      },
	      isSameOrigin: function (e) {
	        var t = window.location,
	            n = document.createElement("a");
	        n.href = e, "" === n.host && (n.href = n.href);
	        var o = window.location.port,
	            i = n.port;
	        return "http:" === n.protocol ? (i = i || "80", o = o || "80") : "https:" === n.protocol && (i = i || "443", o = o || "443"), n.hostname === t.hostname && n.protocol === t.protocol && i === o;
	      },
	      runInIframe: function (e) {
	        var t = this.element.querySelector("iframe").contentWindow,
	            n = this,
	            o = function o() {
	          n.element.removeEventListener("ready", o), e(t, n.getInstance(), t.$);
	        };

	        this.getInstance() ? setTimeout(o, 0) : this.element.addEventListener("ready", o);
	      }
	    }, o.WebViewer.Options = {
	      initialDoc: void 0,
	      annotationAdmin: void 0,
	      isAdminUser: void 0,
	      annotationUser: void 0,
	      assetPath: void 0,
	      autoCreate: !0,
	      azureWorkaround: !1,
	      enableAzureWorkaround: !1,
	      backgroundColor: void 0,
	      backendType: void 0,
	      css: void 0,
	      config: void 0,
	      custom: void 0,
	      documentId: void 0,
	      documentType: void 0,
	      preloadWorker: void 0,
	      extension: void 0,
	      enableAnnotations: !0,
	      filename: void 0,
	      disableI18n: !1,
	      disabledElements: void 0,
	      disableWebsockets: !1,
	      enableOfflineMode: !1,
	      enableReadOnlyMode: !1,
	      isReadOnly: !1,
	      enableRedaction: !1,
	      enableMeasurement: !1,
	      encryption: void 0,
	      externalPath: void 0,
	      hideAnnotationPanel: !1,
	      html5Path: "./ui/index.html",
	      l: void 0,
	      licenseKey: void 0,
	      mobileRedirect: !1,
	      path: "",
	      pdfBackend: void 0,
	      pdftronServer: void 0,
	      fullAPI: !1,
	      preloadPDFWorker: !0,
	      serverUrl: void 0,
	      serverUrlHeaders: void 0,
	      showLocalFilePicker: !1,
	      enableFilePicker: !1,
	      showPageHistoryButtons: !0,
	      showToolbarControl: void 0,
	      startOffline: !1,
	      streaming: void 0,
	      type: "html5",
	      useDownloader: !0,
	      workerTransportPromise: void 0,
	      xdomainProxyUrl: void 0,
	      ui: void 0,
	      forceClientSideInit: !1,
	      loadAsPDF: !1,
	      accessibleMode: void 0,
	      disableLogs: !1,
	      enableViewStateAnnotations: !1,
	      selectAnnotationOnCreation: !1,
	      notesInLeftPanel: !1,
	      disableFlattenedAnnotations: !1
	    }, o.WebViewer.LayoutMode = {
	      Continuous: "Continuous",
	      FacingCoverContinuous: "CoverContinuous",
	      Facing: "Facing",
	      FacingContinuous: "FacingContinuous",
	      FacingCover: "FacingCover",
	      Single: "SinglePage"
	    }, o.WebViewer.ToolMode = {
	      AnnotationCreateArrow: "AnnotationCreateArrow",
	      AnnotationCreateCallout: "AnnotationCreateCallout",
	      AnnotationCreateEllipse: "AnnotationCreateEllipse",
	      AnnotationCreateFreeHand: "AnnotationCreateFreeHand",
	      AnnotationCreateFreeText: "AnnotationCreateFreeText",
	      AnnotationCreateLine: "AnnotationCreateLine",
	      AnnotationCreatePolygon: "AnnotationCreatePolygon",
	      AnnotationCreatePolygonCloud: "AnnotationCreatePolygonCloud",
	      AnnotationCreatePolyline: "AnnotationCreatePolyline",
	      AnnotationCreateRectangle: "AnnotationCreateRectangle",
	      AnnotationCreateSignature: "AnnotationCreateSignature",
	      AnnotationCreateStamp: "AnnotationCreateStamp",
	      AnnotationCreateSticky: "AnnotationCreateSticky",
	      AnnotationCreateTextHighlight: "AnnotationCreateTextHighlight",
	      AnnotationCreateTextSquiggly: "AnnotationCreateTextSquiggly",
	      AnnotationCreateTextStrikeout: "AnnotationCreateTextStrikeout",
	      AnnotationCreateTextUnderline: "AnnotationCreateTextUnderline",
	      AnnotationEdit: "AnnotationEdit"
	    }, o.WebViewer.FitMode = {
	      FitHeight: "FitHeight",
	      FitPage: "FitPage",
	      FitWidth: "FitWidth",
	      Zoom: "Zoom"
	    }, o.WebViewer.SearchMode = {
	      CaseSensitive: 1,
	      WholeWord: 2,
	      SearchUp: 4,
	      PageStop: 8,
	      ProvideQuads: 16,
	      AmbientString: 32
	    }, o.WebViewer.User = function (e, t, n) {
	      this.username = e, this.isAdmin = void 0 !== t && t, this.isReadOnly = void 0 !== n && n;
	    };

	    var u = function (e, t) {
	      return new Promise(function (n, i) {
	        e.l = e.l || e.licenseKey, e.azureWorkaround = e.azureWorkaround || e.enableAzureWorkaround, e.annotationAdmin = e.annotationAdmin || e.isAdminUser, e.enableReadOnlyMode = e.enableReadOnlyMode || e.isReadOnly, e.showLocalFilePicker = e.showLocalFilePicker || e.enableFilePicker;
	        t.addEventListener("ready", function e() {
	          t.removeEventListener("ready", e);

	          try {
	            var o = t.querySelector("iframe").contentWindow,
	                s = o.Tools;
	            if (void 0 === s) return i("Viewer isn't instantiated correctly. It could be caused by the 'path' option in the WebViewer constructor not being defined correctly. The 'path' option should be relative to the HTML file you're loading the script on and the lib folder needs to be publicly accessible.");
	            var c = a.getInstance(),
	                d = r({}, c, {
	              dispose: a.dispose.bind(a),
	              Tools: s,
	              Annotations: o.Annotations,
	              CoreControls: o.CoreControls,
	              PartRetrievers: o.CoreControls.PartRetrievers,
	              Actions: o.Actions,
	              PDFNet: o.PDFNet,
	              annotManager: c.docViewer.getAnnotationManager(),
	              docViewer: c.docViewer,
	              iframeWindow: o
	            });
	            a.setCompleteInstance(d), n(d);
	          } catch (e) {
	            i("Viewer is on a different domain, the promise from WebViewer function is rejected and API functions will not work because of cross domain permissions. See https://www.pdftron.com/kb_cross_origin for more information.");
	          }
	        });
	        var a = new o.WebViewer(e, t);
	      });
	    },
	        f = function (e) {
	      for (var t = a(c), n = 0; n < t.length; n++) {
	        var o = t[n];
	        if (o.iframe === e) return o;
	      }

	      return null;
	    };

	    u.l = function (e) {
	      var t = f(e);
	      return t && t.l;
	    }, u.workerTransportPromise = function (e) {
	      var t = f(e);
	      return t && t.workerTransportPromise;
	    };

	    var h = function (e) {
	      var t = a(c);
	      if (!t.length || !t.filter(function (e) {
	        return e.instance;
	      }).length) return console.warn("WebViewer.getInstance() was called before any instances were available"), null;
	      if (t.length > 1 && !e) throw new Error("More than one instance of WebViewer was found, and no element was passed into getInstance(). Please specify which instance you want to get.");
	      return e ? (c.get(e) || {}).instance : (t[0] || {}).instance;
	    };

	    u.getInstance = h, window.getInstance = h, window.PDFTron = o, window.WebViewer = u, t.default = u;
	  }]);
	});
	}(webviewer_min));

	var viewer = /*@__PURE__*/getDefaultExportFromCjs(webviewer_min.exports);

	var PDFViewer = react.forwardRef((props, ref) => {
	    const innerRef = react.useRef();
	    const [instance, setInstance] = react.useState(null);
	    react.useEffect(() => {
	        viewer({
	            path: "/widgets/resources/lib"
	        }, innerRef.current).then(instance => {
	            setInstance(instance);
	        });
	    }, []);
	    // load document coming from the URL attribute
	    react.useEffect(() => {
	        if (instance && props.fileName && props.filePath) {
	            const fileName = props.fileName.substring(props.fileName.lastIndexOf(".") + 1);
	            // alert('extension: '+ fileName);
	            instance.loadDocument(props.filePath, { extension: fileName });
	        }
	    }, [instance, props.fileName, props.filePath]);
	    return (react.createElement("div", { className: "webviewer", ref: e => {
	            if (ref) {
	                if (typeof ref == "function") {
	                    ref(e);
	                }
	                else {
	                    ref.current = e;
	                }
	            }
	            innerRef.current = e;
	        }, style: props.style }));
	});

	___$insertStyle(".FileView {\n  display: inline;\n}");

	function useInterval(fn, delay, options) {
	    const immediate = options === null || options === void 0 ? void 0 : options.immediate;
	    const fnRef = react.useRef();
	    fnRef.current = fn;
	    react.useEffect(() => {
	        var _a;
	        if (delay === undefined || delay === null)
	            return;
	        if (immediate) {
	            (_a = fnRef.current) === null || _a === void 0 ? void 0 : _a.call(fnRef);
	        }
	        const timer = setInterval(() => {
	            var _a;
	            (_a = fnRef.current) === null || _a === void 0 ? void 0 : _a.call(fnRef);
	        }, delay);
	        return () => {
	            clearInterval(timer);
	        };
	    }, [delay]);
	}

	function getEnclosingWidget(registry, ele) {
	    const objs = [];
	    const pendingDataView = [];
	    let stop = false;
	    while (!stop) {
	        if (ele.parentElement.classList.contains("mx-dataview")) {
	            pendingDataView.push(ele.parentElement.classList[1].slice(8));
	        }
	        if (ele.parentElement.childElementCount > 1 &&
	            ele.parentElement.lastElementChild != null &&
	            ele.parentElement.lastElementChild.getAttribute("widgetid")) {
	            console.log(ele.parentElement.lastElementChild.getAttribute("widgetid"));
	            console.log(ele.parentElement.lastElementChild.getAttribute("data-mendix-id"));
	            const w1 = registry.byId(ele.parentElement.lastElementChild.getAttribute("widgetid"));
	            let pre = ele.parentElement.lastElementChild
	                .getAttribute("data-mendix-id")
	                .split(".")
	                .slice(0, -1)
	                .join(".");
	            pendingDataView.forEach(dv => {
	                //@ts-ignore
	                if (mx.version.split(".")[0] === "9") {
	                    objs.push(w1._storeBackend.get$(`${pre}.${dv}`, `object`, "*;"));
	                }
	                //@ts-ignore
	                else if (mx.version.split(".")[0] === "8") {
	                    const oi = w1._store.entries[`{"widgetId":"${pre}.${dv}","slot":"object"}`].get$();
	                    objs.push(oi);
	                }
	                else ;
	            });
	        }
	        if (ele.parentElement.getAttribute("widgetid")) {
	            debugger;
	            console.log(ele.parentElement.getAttribute("widgetid"));
	            console.log(ele.parentElement.getAttribute("data-mendix-id"));
	        }
	        ele = ele.parentElement;
	        if (ele.getAttribute("data-mx-placeholder")) {
	            stop = true;
	        }
	    }
	    return objs;
	}
	var util = (ele, cb) => {
	    //@ts-ignore
	    window.require(["dijit/registry"], (registry) => {
	        cb(getEnclosingWidget(registry, ele));
	    });
	};

	const useMxContext = (ref) => {
	    const [objs, setObjs] = react.useState();
	    const [interval, setInterval] = react.useState(1000);
	    useInterval(() => {
	        if (ref.current) {
	            setInterval(null);
	            util(ref.current, d => {
	                setObjs(d);
	            });
	        }
	    }, interval, { immediate: true });
	    return objs;
	};

	function FileViewer(props) {
	    const ref = react.useRef();
	    const [path, setPath] = react.useState();
	    const [fileName, setFileName] = react.useState();
	    const objs = useMxContext(ref);
	    console.log(objs, 3333);
	    react.useEffect(() => {
	        if (objs) {
	            console.log(objs[0].dependOn());
	        }
	    }, [objs]);
	    react.useEffect(() => {
	        var _a, _b;
	        if (props.urlAttribute.status === "available" /* Available */) {
	            setPath((_a = props.urlAttribute.value) === null || _a === void 0 ? void 0 : _a.toString());
	        }
	        if (props.fileName.status === "available" /* Available */) {
	            setFileName((_b = props.fileName.value) === null || _b === void 0 ? void 0 : _b.toString());
	        }
	    }, [props.fileName, props.urlAttribute]);
	    return react.createElement(PDFViewer, { ref: ref, fileName: fileName, filePath: path, style: props.style });
	}

	return FileViewer;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVZpZXdlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BwZGZ0cm9uL3dlYnZpZXdlci93ZWJ2aWV3ZXIubWluLmpzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUERGVmlld2VyLnRzeCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9ob29rcy91c2VJbnRlcnZhbC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9ob29rcy91dGlsLnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2hvb2tzL3VzZU14Q29udGV4dC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9GaWxlVmlld2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLHQpO2Vsc2V7dmFyIG49dCgpO2Zvcih2YXIgbyBpbiBuKShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzOmUpW29dPW5bb119fSh3aW5kb3csKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4obyl7aWYodFtvXSlyZXR1cm4gdFtvXS5leHBvcnRzO3ZhciBpPXRbb109e2k6byxsOiExLGV4cG9ydHM6e319O3JldHVybiBlW29dLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLG4pLGkubD0hMCxpLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQsbyl7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om99KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbz1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihvKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIGkgaW4gZSluLmQobyxpLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsaSkpO3JldHVybiBvfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiL1wiLG4obi5zPTEpfShbZnVuY3Rpb24oZSx0KXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfWUuZXhwb3J0cz1ufSxmdW5jdGlvbihlLHQsbil7bigyKSxlLmV4cG9ydHM9big2KX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihvLGkpe3ZhciByLGE7ZnVuY3Rpb24gcyhlKXtyZXR1cm4ocz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9IWZ1bmN0aW9uKG8saSl7XCJvYmplY3RcIj09cyh0KSYmdm9pZCAwIT09ZT9pKCk6dm9pZCAwPT09KGE9XCJmdW5jdGlvblwiPT10eXBlb2Yocj1pKT9yLmNhbGwodCxuLHQsZSk6cil8fChlLmV4cG9ydHM9YSl9KDAsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0aGlzLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBufSkpfSksKGZ1bmN0aW9uKG4pe3JldHVybiB0LnJlc29sdmUoZSgpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiB0LnJlamVjdChuKX0pKX0pKX1mdW5jdGlvbiB0KCl7fWZ1bmN0aW9uIG4oZSl7aWYoISh0aGlzIGluc3RhbmNlb2YgbikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2VzIG11c3QgYmUgY29uc3RydWN0ZWQgdmlhIG5ld1wiKTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJub3QgYSBmdW5jdGlvblwiKTt0aGlzLl9zdGF0ZT0wLHRoaXMuX2hhbmRsZWQ9ITEsdGhpcy5fdmFsdWU9dm9pZCAwLHRoaXMuX2RlZmVycmVkcz1bXSxsKGUsdGhpcyl9ZnVuY3Rpb24gcihlLHQpe2Zvcig7Mz09PWUuX3N0YXRlOyllPWUuX3ZhbHVlOzAhPT1lLl9zdGF0ZT8oZS5faGFuZGxlZD0hMCxuLl9pbW1lZGlhdGVGbigoZnVuY3Rpb24oKXt2YXIgbj0xPT09ZS5fc3RhdGU/dC5vbkZ1bGZpbGxlZDp0Lm9uUmVqZWN0ZWQ7aWYobnVsbCE9PW4pe3ZhciBvO3RyeXtvPW4oZS5fdmFsdWUpfWNhdGNoKGUpe3JldHVybiB2b2lkIGModC5wcm9taXNlLGUpfWEodC5wcm9taXNlLG8pfWVsc2UoMT09PWUuX3N0YXRlP2E6YykodC5wcm9taXNlLGUuX3ZhbHVlKX0pKSk6ZS5fZGVmZXJyZWRzLnB1c2godCl9ZnVuY3Rpb24gYShlLHQpe3RyeXtpZih0PT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlIGNhbm5vdCBiZSByZXNvbHZlZCB3aXRoIGl0c2VsZi5cIik7aWYodCYmKFwib2JqZWN0XCI9PXModCl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpKXt2YXIgbz10LnRoZW47aWYodCBpbnN0YW5jZW9mIG4pcmV0dXJuIGUuX3N0YXRlPTMsZS5fdmFsdWU9dCx2b2lkIGQoZSk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbylyZXR1cm4gdm9pZCBsKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKCl7ZS5hcHBseSh0LGFyZ3VtZW50cyl9fShvLHQpLGUpfWUuX3N0YXRlPTEsZS5fdmFsdWU9dCxkKGUpfWNhdGNoKHQpe2MoZSx0KX19ZnVuY3Rpb24gYyhlLHQpe2UuX3N0YXRlPTIsZS5fdmFsdWU9dCxkKGUpfWZ1bmN0aW9uIGQoZSl7Mj09PWUuX3N0YXRlJiYwPT09ZS5fZGVmZXJyZWRzLmxlbmd0aCYmbi5faW1tZWRpYXRlRm4oKGZ1bmN0aW9uKCl7ZS5faGFuZGxlZHx8bi5fdW5oYW5kbGVkUmVqZWN0aW9uRm4oZS5fdmFsdWUpfSkpO2Zvcih2YXIgdD0wLG89ZS5fZGVmZXJyZWRzLmxlbmd0aDtvPnQ7dCsrKXIoZSxlLl9kZWZlcnJlZHNbdF0pO2UuX2RlZmVycmVkcz1udWxsfWZ1bmN0aW9uIGwoZSx0KXt2YXIgbj0hMTt0cnl7ZSgoZnVuY3Rpb24oZSl7bnx8KG49ITAsYSh0LGUpKX0pLChmdW5jdGlvbihlKXtufHwobj0hMCxjKHQsZSkpfSkpfWNhdGNoKGUpe2lmKG4pcmV0dXJuO249ITAsYyh0LGUpfX12YXIgdT1zZXRUaW1lb3V0O24ucHJvdG90eXBlLmNhdGNoPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4obnVsbCxlKX0sbi5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihlLG4pe3ZhciBvPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHQpO3JldHVybiByKHRoaXMsbmV3IGZ1bmN0aW9uKGUsdCxuKXt0aGlzLm9uRnVsZmlsbGVkPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpudWxsLHRoaXMub25SZWplY3RlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6bnVsbCx0aGlzLnByb21pc2U9bn0oZSxuLG8pKSxvfSxuLnByb3RvdHlwZS5maW5hbGx5PWUsbi5hbGw9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBuKChmdW5jdGlvbih0LG4pe2Z1bmN0aW9uIG8oZSxhKXt0cnl7aWYoYSYmKFwib2JqZWN0XCI9PXMoYSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGEpKXt2YXIgYz1hLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgYylyZXR1cm4gdm9pZCBjLmNhbGwoYSwoZnVuY3Rpb24odCl7byhlLHQpfSksbil9aVtlXT1hLDA9PS0tciYmdChpKX1jYXRjaChlKXtuKGUpfX1pZighZXx8dm9pZCAwPT09ZS5sZW5ndGgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UuYWxsIGFjY2VwdHMgYW4gYXJyYXlcIik7dmFyIGk9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSk7aWYoMD09PWkubGVuZ3RoKXJldHVybiB0KFtdKTtmb3IodmFyIHI9aS5sZW5ndGgsYT0wO2kubGVuZ3RoPmE7YSsrKW8oYSxpW2FdKX0pKX0sbi5yZXNvbHZlPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZcIm9iamVjdFwiPT1zKGUpJiZlLmNvbnN0cnVjdG9yPT09bj9lOm5ldyBuKChmdW5jdGlvbih0KXt0KGUpfSkpfSxuLnJlamVjdD1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IG4oKGZ1bmN0aW9uKHQsbil7bihlKX0pKX0sbi5yYWNlPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgbigoZnVuY3Rpb24odCxuKXtmb3IodmFyIG89MCxpPWUubGVuZ3RoO2k+bztvKyspZVtvXS50aGVuKHQsbil9KSl9LG4uX2ltbWVkaWF0ZUZuPVwiZnVuY3Rpb25cIj09dHlwZW9mIG8mJmZ1bmN0aW9uKGUpe28oZSl9fHxmdW5jdGlvbihlKXt1KGUsMCl9LG4uX3VuaGFuZGxlZFJlamVjdGlvbkZuPWZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWNvbnNvbGUmJmNvbnNvbGUmJmNvbnNvbGUud2FybihcIlBvc3NpYmxlIFVuaGFuZGxlZCBQcm9taXNlIFJlamVjdGlvbjpcIixlKX07dmFyIGY9ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZilyZXR1cm4gc2VsZjtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXJldHVybiB3aW5kb3c7aWYodm9pZCAwIT09aSlyZXR1cm4gaTt0aHJvdyBFcnJvcihcInVuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdFwiKX0oKTtcIlByb21pc2VcImluIGY/Zi5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5fHwoZi5Qcm9taXNlLnByb3RvdHlwZS5maW5hbGx5PWUpOmYuUHJvbWlzZT1ufSkpfSkuY2FsbCh0aGlzLG4oMykuc2V0SW1tZWRpYXRlLG4oMCkpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKGUpe3ZhciBvPXZvaWQgMCE9PWUmJmV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmfHx3aW5kb3csaT1GdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7ZnVuY3Rpb24gcihlLHQpe3RoaXMuX2lkPWUsdGhpcy5fY2xlYXJGbj10fXQuc2V0VGltZW91dD1mdW5jdGlvbigpe3JldHVybiBuZXcgcihpLmNhbGwoc2V0VGltZW91dCxvLGFyZ3VtZW50cyksY2xlYXJUaW1lb3V0KX0sdC5zZXRJbnRlcnZhbD1mdW5jdGlvbigpe3JldHVybiBuZXcgcihpLmNhbGwoc2V0SW50ZXJ2YWwsbyxhcmd1bWVudHMpLGNsZWFySW50ZXJ2YWwpfSx0LmNsZWFyVGltZW91dD10LmNsZWFySW50ZXJ2YWw9ZnVuY3Rpb24oZSl7ZSYmZS5jbG9zZSgpfSxyLnByb3RvdHlwZS51bnJlZj1yLnByb3RvdHlwZS5yZWY9ZnVuY3Rpb24oKXt9LHIucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKCl7dGhpcy5fY2xlYXJGbi5jYWxsKG8sdGhpcy5faWQpfSx0LmVucm9sbD1mdW5jdGlvbihlLHQpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKSxlLl9pZGxlVGltZW91dD10fSx0LnVuZW5yb2xsPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKSxlLl9pZGxlVGltZW91dD0tMX0sdC5fdW5yZWZBY3RpdmU9dC5hY3RpdmU9ZnVuY3Rpb24oZSl7Y2xlYXJUaW1lb3V0KGUuX2lkbGVUaW1lb3V0SWQpO3ZhciB0PWUuX2lkbGVUaW1lb3V0O3Q+PTAmJihlLl9pZGxlVGltZW91dElkPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZS5fb25UaW1lb3V0JiZlLl9vblRpbWVvdXQoKX0pLHQpKX0sbig0KSx0LnNldEltbWVkaWF0ZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5zZXRJbW1lZGlhdGV8fHZvaWQgMCE9PWUmJmUuc2V0SW1tZWRpYXRlfHx0aGlzJiZ0aGlzLnNldEltbWVkaWF0ZSx0LmNsZWFySW1tZWRpYXRlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLmNsZWFySW1tZWRpYXRlfHx2b2lkIDAhPT1lJiZlLmNsZWFySW1tZWRpYXRlfHx0aGlzJiZ0aGlzLmNsZWFySW1tZWRpYXRlfSkuY2FsbCh0aGlzLG4oMCkpfSxmdW5jdGlvbihlLHQsbil7KGZ1bmN0aW9uKGUsdCl7IWZ1bmN0aW9uKGUsbil7XCJ1c2Ugc3RyaWN0XCI7aWYoIWUuc2V0SW1tZWRpYXRlKXt2YXIgbyxpLHIsYSxzLGM9MSxkPXt9LGw9ITEsdT1lLmRvY3VtZW50LGY9T2JqZWN0LmdldFByb3RvdHlwZU9mJiZPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSk7Zj1mJiZmLnNldFRpbWVvdXQ/ZjplLFwiW29iamVjdCBwcm9jZXNzXVwiPT09e30udG9TdHJpbmcuY2FsbChlLnByb2Nlc3MpP289ZnVuY3Rpb24oZSl7dC5uZXh0VGljaygoZnVuY3Rpb24oKXtwKGUpfSkpfTohZnVuY3Rpb24oKXtpZihlLnBvc3RNZXNzYWdlJiYhZS5pbXBvcnRTY3JpcHRzKXt2YXIgdD0hMCxuPWUub25tZXNzYWdlO3JldHVybiBlLm9ubWVzc2FnZT1mdW5jdGlvbigpe3Q9ITF9LGUucG9zdE1lc3NhZ2UoXCJcIixcIipcIiksZS5vbm1lc3NhZ2U9bix0fX0oKT9lLk1lc3NhZ2VDaGFubmVsPygocj1uZXcgTWVzc2FnZUNoYW5uZWwpLnBvcnQxLm9ubWVzc2FnZT1mdW5jdGlvbihlKXtwKGUuZGF0YSl9LG89ZnVuY3Rpb24oZSl7ci5wb3J0Mi5wb3N0TWVzc2FnZShlKX0pOnUmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiB1LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik/KGk9dS5kb2N1bWVudEVsZW1lbnQsbz1mdW5jdGlvbihlKXt2YXIgdD11LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7dC5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtwKGUpLHQub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsaS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9LGkuYXBwZW5kQ2hpbGQodCl9KTpvPWZ1bmN0aW9uKGUpe3NldFRpbWVvdXQocCwwLGUpfTooYT1cInNldEltbWVkaWF0ZSRcIitNYXRoLnJhbmRvbSgpK1wiJFwiLHM9ZnVuY3Rpb24odCl7dC5zb3VyY2U9PT1lJiZcInN0cmluZ1wiPT10eXBlb2YgdC5kYXRhJiYwPT09dC5kYXRhLmluZGV4T2YoYSkmJnAoK3QuZGF0YS5zbGljZShhLmxlbmd0aCkpfSxlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHMsITEpOmUuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIixzKSxvPWZ1bmN0aW9uKHQpe2UucG9zdE1lc3NhZ2UoYSt0LFwiKlwiKX0pLGYuc2V0SW1tZWRpYXRlPWZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIGUmJihlPW5ldyBGdW5jdGlvbihcIlwiK2UpKTtmb3IodmFyIHQ9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSksbj0wO248dC5sZW5ndGg7bisrKXRbbl09YXJndW1lbnRzW24rMV07dmFyIGk9e2NhbGxiYWNrOmUsYXJnczp0fTtyZXR1cm4gZFtjXT1pLG8oYyksYysrfSxmLmNsZWFySW1tZWRpYXRlPWh9ZnVuY3Rpb24gaChlKXtkZWxldGUgZFtlXX1mdW5jdGlvbiBwKGUpe2lmKGwpc2V0VGltZW91dChwLDAsZSk7ZWxzZXt2YXIgdD1kW2VdO2lmKHQpe2w9ITA7dHJ5eyFmdW5jdGlvbihlKXt2YXIgdD1lLmNhbGxiYWNrLG49ZS5hcmdzO3N3aXRjaChuLmxlbmd0aCl7Y2FzZSAwOnQoKTticmVhaztjYXNlIDE6dChuWzBdKTticmVhaztjYXNlIDI6dChuWzBdLG5bMV0pO2JyZWFrO2Nhc2UgMzp0KG5bMF0sblsxXSxuWzJdKTticmVhaztkZWZhdWx0OnQuYXBwbHkodm9pZCAwLG4pfX0odCl9ZmluYWxseXtoKGUpLGw9ITF9fX19fShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj92b2lkIDA9PT1lP3RoaXM6ZTpzZWxmKX0pLmNhbGwodGhpcyxuKDApLG4oNSkpfSxmdW5jdGlvbihlLHQpe3ZhciBuLG8saT1lLmV4cG9ydHM9e307ZnVuY3Rpb24gcigpe3Rocm93IG5ldyBFcnJvcihcInNldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gYSgpe3Rocm93IG5ldyBFcnJvcihcImNsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZFwiKX1mdW5jdGlvbiBzKGUpe2lmKG49PT1zZXRUaW1lb3V0KXJldHVybiBzZXRUaW1lb3V0KGUsMCk7aWYoKG49PT1yfHwhbikmJnNldFRpbWVvdXQpcmV0dXJuIG49c2V0VGltZW91dCxzZXRUaW1lb3V0KGUsMCk7dHJ5e3JldHVybiBuKGUsMCl9Y2F0Y2godCl7dHJ5e3JldHVybiBuLmNhbGwobnVsbCxlLDApfWNhdGNoKHQpe3JldHVybiBuLmNhbGwodGhpcyxlLDApfX19IWZ1bmN0aW9uKCl7dHJ5e249XCJmdW5jdGlvblwiPT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnJ9Y2F0Y2goZSl7bj1yfXRyeXtvPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6YX1jYXRjaChlKXtvPWF9fSgpO3ZhciBjLGQ9W10sbD0hMSx1PS0xO2Z1bmN0aW9uIGYoKXtsJiZjJiYobD0hMSxjLmxlbmd0aD9kPWMuY29uY2F0KGQpOnU9LTEsZC5sZW5ndGgmJmgoKSl9ZnVuY3Rpb24gaCgpe2lmKCFsKXt2YXIgZT1zKGYpO2w9ITA7Zm9yKHZhciB0PWQubGVuZ3RoO3Q7KXtmb3IoYz1kLGQ9W107Kyt1PHQ7KWMmJmNbdV0ucnVuKCk7dT0tMSx0PWQubGVuZ3RofWM9bnVsbCxsPSExLGZ1bmN0aW9uKGUpe2lmKG89PT1jbGVhclRpbWVvdXQpcmV0dXJuIGNsZWFyVGltZW91dChlKTtpZigobz09PWF8fCFvKSYmY2xlYXJUaW1lb3V0KXJldHVybiBvPWNsZWFyVGltZW91dCxjbGVhclRpbWVvdXQoZSk7dHJ5e28oZSl9Y2F0Y2godCl7dHJ5e3JldHVybiBvLmNhbGwobnVsbCxlKX1jYXRjaCh0KXtyZXR1cm4gby5jYWxsKHRoaXMsZSl9fX0oZSl9fWZ1bmN0aW9uIHAoZSx0KXt0aGlzLmZ1bj1lLHRoaXMuYXJyYXk9dH1mdW5jdGlvbiBtKCl7fWkubmV4dFRpY2s9ZnVuY3Rpb24oZSl7dmFyIHQ9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgtMSk7aWYoYXJndW1lbnRzLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspdFtuLTFdPWFyZ3VtZW50c1tuXTtkLnB1c2gobmV3IHAoZSx0KSksMSE9PWQubGVuZ3RofHxsfHxzKGgpfSxwLnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt0aGlzLmZ1bi5hcHBseShudWxsLHRoaXMuYXJyYXkpfSxpLnRpdGxlPVwiYnJvd3NlclwiLGkuYnJvd3Nlcj0hMCxpLmVudj17fSxpLmFyZ3Y9W10saS52ZXJzaW9uPVwiXCIsaS52ZXJzaW9ucz17fSxpLm9uPW0saS5hZGRMaXN0ZW5lcj1tLGkub25jZT1tLGkub2ZmPW0saS5yZW1vdmVMaXN0ZW5lcj1tLGkucmVtb3ZlQWxsTGlzdGVuZXJzPW0saS5lbWl0PW0saS5wcmVwZW5kTGlzdGVuZXI9bSxpLnByZXBlbmRPbmNlTGlzdGVuZXI9bSxpLmxpc3RlbmVycz1mdW5jdGlvbihlKXtyZXR1cm5bXX0saS5iaW5kaW5nPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkXCIpfSxpLmN3ZD1mdW5jdGlvbigpe3JldHVyblwiL1wifSxpLmNoZGlyPWZ1bmN0aW9uKGUpe3Rocm93IG5ldyBFcnJvcihcInByb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZFwiKX0saS51bWFzaz1mdW5jdGlvbigpe3JldHVybiAwfX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24ucih0KSxuLmQodCxcImdldEluc3RhbmNlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGh9KSk7dmFyIG89e30saT0wO1widW5kZWZpbmVkXCI9PXR5cGVvZiBjb25zb2xlJiYod2luZG93LmNvbnNvbGU9e2xvZzpmdW5jdGlvbigpe30sd2FybjpmdW5jdGlvbigpe30sZXJyb3I6ZnVuY3Rpb24oKXt9fSk7dmFyIHI9ZnVuY3Rpb24oKXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKWZvcih2YXIgdD1PYmplY3Qua2V5cyhhcmd1bWVudHNbZV0pLG49MDtuPHQubGVuZ3RoO24rKylhcmd1bWVudHNbMF1bdFtuXV09YXJndW1lbnRzW2VdW3Rbbl1dO3JldHVybiBhcmd1bWVudHNbMF19LGE9ZnVuY3Rpb24oZSl7dmFyIHQ9W107cmV0dXJuIGUuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dC5wdXNoKGUpfSkpLHR9LHM9ZnVuY3Rpb24oZSx0KXt2YXIgbjt0cnl7bj1uZXcgQ3VzdG9tRXZlbnQoZSx7ZGV0YWlsOnQsYnViYmxlczohMCxjYW5jZWxhYmxlOiEwfSl9Y2F0Y2gobyl7KG49ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKSkuaW5pdEV2ZW50KGUsITAsITApLG4uZGV0YWlsPXR9cmV0dXJuIG59O3dpbmRvdy5QREZOZXQmJiFvLnNraXBQREZOZXRXZWJWaWV3ZXJXYXJuaW5nJiZjb25zb2xlLndhcm4oXCJQREZOZXQuanMgYW5kIFdlYlZpZXdlci5qcyBoYXZlIGJlZW4gaW5jbHVkZWQgaW4gdGhlIHNhbWUgY29udGV4dC4gU2VlIGh0dHBzOi8vd3d3LnBkZnRyb24uY29tL2tiX3NhbWVfY29udGV4dCBmb3IgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgY291bGQgYmUgYW4gZXJyb3IgaW4geW91ciBhcHBsaWNhdGlvbi5cIik7dmFyIGM9bmV3IE1hcCxkPW5ldyBNYXA7by5XZWJWaWV3ZXI9ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzO2lmKGQuZ2V0KHQpKXRocm93IG5ldyBFcnJvcihcIlR3byBpbnN0YW5jZXMgb2YgV2ViVmlld2VyIHdlcmUgY3JlYXRlZCBvbiB0aGUgc2FtZSBIVE1MIGVsZW1lbnQuIFBsZWFzZSBjcmVhdGUgYSBuZXcgZWxlbWVudCBmb3IgZWFjaCBpbnN0YW5jZSBvZiBXZWJWaWV3ZXJcIik7ZC5zZXQodCwhMCk7dC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwoZnVuY3Rpb24gZSgpe2MuZ2V0KHQpLmluc3RhbmNlPW4uZ2V0Q29tcGxldGVJbnN0YW5jZSgpLHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsZSl9KSksdGhpcy5fdmFsaWRhdGVPcHRpb25zKGUpLFwibGVnYWN5XCI9PT1lLnVpJiYoZS5odG1sNVBhdGg9XCIuL3VpLWxlZ2FjeS9pbmRleC5odG1sXCIpLGUuZnVsbEFQSSYmZS5wZGZ0cm9uU2VydmVyJiYoZS5mb3JjZUNsaWVudFNpZGVJbml0fHxjb25zb2xlLndhcm4oXCJUaGUgZnVsbEFQSSBhbmQgcGRmdHJvblNlcnZlciBvcHRpb25zIGhhdmUgYm90aCBiZWVuIHNldCBzbyB0aGUgZm9yY2VDbGllbnRTaWRlSW5pdCBvcHRpb24gaXMgbm93IGVuYWJsZWQuIFRoaXMgbWVhbnMgdGhhdCBXZWJWaWV3ZXIgd2lsbCBzd2l0Y2ggdG8gY2xpZW50IHNpZGUgcmVuZGVyaW5nIGFuZCBwcm9jZXNzaW5nIHRvIGFsbG93IHVzZSBvZiB0aGUgZnVsbCBBUEkuXCIpLGUuZm9yY2VDbGllbnRTaWRlSW5pdD0hMCksdGhpcy5vcHRpb25zPXIoe30sby5XZWJWaWV3ZXIuT3B0aW9ucyxlKTt2YXIgaT10aGlzLm9wdGlvbnMucGF0aC5sZW5ndGgtMTtpPjAmJlwiL1wiIT09dGhpcy5vcHRpb25zLnBhdGhbaV0mJih0aGlzLm9wdGlvbnMucGF0aCs9XCIvXCIpLHRoaXMub3B0aW9ucy5odG1sNVBhdGg9dGhpcy5vcHRpb25zLnBhdGgrdGhpcy5vcHRpb25zLmh0bWw1UGF0aCx0fHxjb25zb2xlLmVycm9yKFwiVmlld2VyRWxlbWVudCBpcyBub3QgZGVmaW5lZC4gVGhpcyBtYXkgYmUgY2F1c2VkIGJ5IGNhbGxpbmcgdGhlIFdlYlZpZXdlciBjb25zdHJ1Y3RvciBiZWZvcmUgdGhlIERPTSBpcyBsb2FkZWQsIG9yIGFuIGludmFsaWQgc2VsZWN0b3IuIFBsZWFzZSBzZWUgaHR0cDovL3IucGRmdHJvbi5jb20vZ3VpZGVzL3F1aWNrLXN0YXJ0IGZvciBhbiBleGFtcGxlLlwiKSx0aGlzLmVsZW1lbnQ9dCx0aGlzLmVsZW1lbnQuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIjt2YXIgYT10aGlzO3RoaXMubWVzc2FnZUhhbmRsZXI9ZnVuY3Rpb24odCl7aWYoXCJyZXF1ZXN0bFwiPT09dC5kYXRhJiZ0LnNvdXJjZSYmdC5zb3VyY2UucG9zdE1lc3NhZ2Uoe3R5cGU6XCJyZXNwb25zZWxcIix2YWx1ZTplLmx8fGUubGljZW5zZUtleX0sXCIqXCIpLFwicmVxdWVzdENvbmZpZ1wiPT09dC5kYXRhLnR5cGUmJnQuZGF0YS5pZD09PWEuaWQmJnQuc291cmNlKXt2YXIgbj1lLmNvbmZpZz9hLl9jb3JyZWN0UmVsYXRpdmVQYXRoKGUuY29uZmlnKTpcIlwiO3Quc291cmNlLnBvc3RNZXNzYWdlKHt0eXBlOlwicmVzcG9uc2VDb25maWdcIix2YWx1ZTpufSxcIipcIil9fSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0aGlzLm1lc3NhZ2VIYW5kbGVyLCExKSx0aGlzLm9wdGlvbnMuYXV0b0NyZWF0ZSYmdGhpcy5jcmVhdGUoKX07dmFyIGw9e2xpY2Vuc2VLZXk6dm9pZCAwLGVuYWJsZUF6dXJlV29ya2Fyb3VuZDohMSxpc0FkbWluVXNlcjohMSxpc1JlYWRPbmx5OiExfTtvLldlYlZpZXdlci5wcm90b3R5cGU9e3ZlcnNpb246XCI3LjEuMFwiLGNyZWF0ZTpmdW5jdGlvbigpe2lmKHRoaXMub3B0aW9ucy5pbml0aWFsRG9jKXt2YXIgZT10aGlzLl9jb3JyZWN0UmVsYXRpdmVQYXRoKHRoaXMub3B0aW9ucy5pbml0aWFsRG9jKTtlPWVuY29kZVVSSUNvbXBvbmVudChlKSx0aGlzLm9wdGlvbnMuaW5pdGlhbERvYz1lLHRoaXMuX2NyZWF0ZSgpfWVsc2UgdGhpcy5fY3JlYXRlKCl9LF9jcmVhdGU6ZnVuY3Rpb24oKXt0aGlzLmlkPSsraSx2b2lkIDA9PT10aGlzLl90cmlnZ2VyJiYodGhpcy5fdHJpZ2dlcj1mdW5jdGlvbihlLHQpe3ZhciBuPXMoZSx0KTt0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuKX0pO3ZhciBlPXRoaXMub3B0aW9ucy50eXBlLnJlcGxhY2UoXCIgXCIsXCJcIikuc3BsaXQoXCIsXCIpO2UubGVuZ3RoPDEmJihlWzBdPVwiaHRtbDVcIiksdGhpcy5fY3JlYXRlVmlld2VyKGUpfSxfdmFsaWRhdGVPcHRpb25zOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1PYmplY3Qua2V5cyhlKSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBpPXRbbl07aSBpbiByKHt9LGwsby5XZWJWaWV3ZXIuT3B0aW9ucyl8fGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChpLFwiIGlzIG5vdCBhIHZhbGlkIG9wdGlvbiBuYW1lLiBTZWUgaHR0cDovL3IucGRmdHJvbi5jb20vYXBpL29wdGlvbnNfYW5jaG9yIGZvciBhbGwgYXZhaWxhYmxlIG9wdGlvbnMuXCIpKX0hZS5lbmFibGVSZWRhY3Rpb258fGUuZnVsbEFQSXx8ZS5wZGZ0cm9uU2VydmVyfHxjb25zb2xlLndhcm4oXCJGdWxsQVBJIG9yIFdlYlZpZXdlciBTZXJ2ZXIgaXMgbmVlZGVkIHRvIGFwcGx5IHJlZGFjdGlvbnNcIil9LF9ub3RTdXBwb3J0ZWRNb2JpbGU6ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuaWQ9XCJ3ZWJ2aWV3ZXItYnJvd3Nlci11bnN1cHBvcnRlZFwiLGUudGV4dENvbnRlbnQ9XCJQREYgZG9jdW1lbnQgdmlld2luZyBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci5cIix0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoZSl9LF9jcmVhdGVWaWV3ZXI6ZnVuY3Rpb24oZSl7dmFyIHQsbj10aGlzO2lmKG4uc2VsZWN0ZWRUeXBlPW51bGwsdGhpcy5pc01vYmlsZURldmljZSgpKXtpZih0aGlzLm9wdGlvbnMuZG9jdW1lbnRUeXBlJiZcInhvZFwiIT09dGhpcy5vcHRpb25zLmRvY3VtZW50VHlwZSYmIXRoaXMuX3Rlc3RXZWJBc3NlbWJseSgpKXJldHVybiB2b2lkIHRoaXMuX25vdFN1cHBvcnRlZE1vYmlsZSgpO2lmKGU9QXJyYXkoXCJodG1sNU1vYmlsZVwiKSxuLnNlbGVjdGVkVHlwZT1cImh0bWw1TW9iaWxlXCIsdGhpcy5vcHRpb25zLm1vYmlsZVJlZGlyZWN0KXJldHVybiB0PXRoaXMub3B0aW9ucy5odG1sNVBhdGgrdGhpcy5fZ2V0SFRNTDVPcHRpb25zVVJMKCksdm9pZCh3aW5kb3cubG9jYXRpb249dCl9Zm9yKHZhciBvPSExLGk9ITEscj0wO3I8ZS5sZW5ndGg7cisrKXtpZihcImh0bWw1bW9iaWxlXCI9PT1lW3JdLnRvTG93ZXJDYXNlKCkpe2lmKHRoaXMub3B0aW9ucy5kb2N1bWVudFR5cGUmJlwieG9kXCIhPT10aGlzLm9wdGlvbnMuZG9jdW1lbnRUeXBlJiYhdGhpcy5fdGVzdFdlYkFzc2VtYmx5KCkpY29udGludWU7aWYobz0hMCxuLl90ZXN0SFRNTDUoKSl7aWYodGhpcy5vcHRpb25zLm1vYmlsZVJlZGlyZWN0KXJldHVybiBuLnNlbGVjdGVkVHlwZT1cImh0bWw1TW9iaWxlXCIsdD10aGlzLm9wdGlvbnMuaHRtbDVQYXRoK3RoaXMuX2dldEhUTUw1T3B0aW9uc1VSTCgpLHZvaWQod2luZG93LmxvY2F0aW9uPXQpO2lmKHRoaXMub3B0aW9ucy54ZG9tYWluUHJveHlVcmx8fG4uaXNTYW1lT3JpZ2luKGRlY29kZVVSSUNvbXBvbmVudChuLm9wdGlvbnMuaW5pdGlhbERvYykpfHxuLl90ZXN0Q09SUygpKXtuLnNlbGVjdGVkVHlwZT1cImh0bWw1TW9iaWxlXCI7YnJlYWt9aT0hMH19aWYoXCJodG1sNVwiPT09ZVtyXS50b0xvd2VyQ2FzZSgpJiYobz0hMCxuLl90ZXN0SFRNTDUoKSkpe3ZhciBhPW4uaXNTYW1lT3JpZ2luKGRlY29kZVVSSUNvbXBvbmVudChuLm9wdGlvbnMuaW5pdGlhbERvYykpO2lmKHRoaXMub3B0aW9ucy54ZG9tYWluUHJveHlVcmx8fGF8fG4uX3Rlc3RDT1JTKCkpe24uc2VsZWN0ZWRUeXBlPVwiaHRtbDVcIjticmVha31pPSEwfX1pZihcImh0bWw1XCI9PT1uLnNlbGVjdGVkVHlwZSluLl9jcmVhdGVIVE1MNSgpO2Vsc2UgaWYoXCJodG1sNU1vYmlsZVwiPT09bi5zZWxlY3RlZFR5cGUpbi5fY3JlYXRlSFRNTDVNb2JpbGUoKTtlbHNle3ZhciBzO2lmKGk/cz1cIlRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGNyb3NzIG9yaWdpbiByZXF1ZXN0cy4gUGxlYXNlIGNvbmZpZ3VyZSB4ZG9tYWluIHRvIHN1cHBvcnQgQ09SUy5cIjpvJiYocz1cIlBsZWFzZSB1c2UgYW4gSFRNTDUgY29tcGF0aWJsZSBicm93c2VyLlwiKSxzKXt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2MuaWQ9XCJ3ZWJ2aWV3ZXItYnJvd3Nlci11bnN1cHBvcnRlZFwiLGMudGV4dENvbnRlbnQ9cyxuLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYyl9fX0sX3ZpZXdlckxvYWRlZDpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3RoaXMuX3RyaWdnZXIoXCJyZWFkeVwiKTt0cnl7dmFyIG49ZS5jb250ZW50V2luZG93O2lmKHZvaWQgMCE9PXRoaXMub3B0aW9ucy5lbmNyeXB0aW9uKXt2YXIgbz1kZWNvZGVVUklDb21wb25lbnQodGhpcy5vcHRpb25zLmluaXRpYWxEb2MpLGk9e2RlY3J5cHQ6bi5Db3JlQ29udHJvbHMuRW5jcnlwdGlvbi5kZWNyeXB0LGRlY3J5cHRPcHRpb25zOnRoaXMub3B0aW9ucy5lbmNyeXB0aW9uLGRvY3VtZW50SWQ6dGhpcy5vcHRpb25zLmRvY3VtZW50SWQsZXh0ZW5zaW9uOlwieG9kXCJ9O3RoaXMubG9hZERvY3VtZW50KG8saSl9bnVsbD09PXRoaXMuaW5zdGFuY2UuZG9jVmlld2VyLmdldERvY3VtZW50KCk/bi5hZGRFdmVudExpc3RlbmVyKFwiZG9jdW1lbnRMb2FkZWRcIiwoZnVuY3Rpb24oKXt0Ll90cmlnZ2VyKFwiZG9jdW1lbnRMb2FkZWRcIil9KSk6dGhpcy5fdHJpZ2dlcihcImRvY3VtZW50TG9hZGVkXCIpLFtcImRpc3BsYXlNb2RlQ2hhbmdlZFwiLFwibGF5b3V0TW9kZUNoYW5nZWRcIixcInpvb21DaGFuZ2VkXCIsXCJwYWdlQ2hhbmdlZFwiLFwiZml0TW9kZUNoYW5nZWRcIixcInRvb2xNb2RlQ2hhbmdlZFwiLFwicm90YXRpb25DaGFuZ2VkXCIsXCJmaW5pc2hlZFNhdmluZ1BERlwiLFwiZG9jdW1lbnRNZXJnZWRcIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7bi5hZGRFdmVudExpc3RlbmVyKGUsKGZ1bmN0aW9uKGUpe3QuX3RyaWdnZXIoZS50eXBlLGUuZGV0YWlsKX0pKX0pKX1jYXRjaChlKXtjb25zb2xlLndhcm4oXCJWaWV3ZXIgaXMgb24gYSBkaWZmZXJlbnQgZG9tYWluLCB0aGUgcHJvbWlzZSBmcm9tIFdlYlZpZXdlciBmdW5jdGlvbiBpcyByZWplY3RlZCBhbmQgQVBJIGZ1bmN0aW9ucyB3aWxsIG5vdCB3b3JrIGJlY2F1c2Ugb2YgY3Jvc3MgZG9tYWluIHBlcm1pc3Npb25zLiBTZWUgaHR0cDovL3IucGRmdHJvbi5jb20va2JfY3Jvc3Nfb3JpZ2luIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKX19LF9pc1BERkV4dGVuc2lvbjpmdW5jdGlvbihlKXt2YXIgdD0hMTtpZihlKXtbXCIucGRmXCIsXCIucG5nXCIsXCIuanBnXCIsXCJqcGVnXCJdLmZvckVhY2goKGZ1bmN0aW9uKG4pe2U9PT1uJiYodD0hMCl9KSl9cmV0dXJuIHR9LF9pc09mZmljZUV4dGVuc2lvbjpmdW5jdGlvbihlKXt2YXIgdD0hMTtpZihlKXtbXCIuZG9jeFwiLFwiLmRvY1wiLFwiLnBwdHhcIl0uZm9yRWFjaCgoZnVuY3Rpb24obil7ZT09PW4mJih0PSEwKX0pKX1yZXR1cm4gdH0sX2dldEhUTUw1T3B0aW9uc1VSTDpmdW5jdGlvbigpe3ZhciBlLHQsbixvPXRoaXMub3B0aW9ucyxpPVwiXCI7aWYoby5pbml0aWFsRG9jJiYoaSs9XCIjZD1cIi5jb25jYXQoby5pbml0aWFsRG9jKSksdm9pZCAwPT09by5iYWNrZW5kVHlwZSYmKG8uYmFja2VuZFR5cGU9by5wZGZCYWNrZW5kKSxvLmRvY3VtZW50VHlwZSYmXCJ4b2RcIj09PW8uZG9jdW1lbnRUeXBlJiYoZT1vLmRvY3VtZW50VHlwZSksby5wcmVsb2FkV29ya2VyJiZcInhvZFwiPT09by5wcmVsb2FkV29ya2VyJiYoZT1vLnByZWxvYWRXb3JrZXIpLG8uZXh0ZW5zaW9uJiYoZT1vLmV4dGVuc2lvbiksZSYmKGkrPVwiJmV4dGVuc2lvbj1cIi5jb25jYXQoZSkpLG8uZG9jdW1lbnRUeXBlJiZcInhvZFwiIT09by5kb2N1bWVudFR5cGUmJih0PW8uZG9jdW1lbnRUeXBlKSxvLnByZWxvYWRXb3JrZXImJlwieG9kXCIhPT1vLnByZWxvYWRXb3JrZXImJih0PW8ucHJlbG9hZFdvcmtlciksdCYmKGkrPVwiJnByZWxvYWRXb3JrZXI9XCIuY29uY2F0KHQpKSxvLmJhY2tlbmRUeXBlJiYoaSs9XCImcGRmPVwiLmNvbmNhdChvLmJhY2tlbmRUeXBlLFwiJm9mZmljZT1cIikuY29uY2F0KG8uYmFja2VuZFR5cGUpKSxvLmZpbGVuYW1lJiYoaSs9XCImZmlsZW5hbWU9XCIuY29uY2F0KG8uZmlsZW5hbWUpKSx2b2lkIDAhPT1vLnN0cmVhbWluZyYmKGkrPVwiJnN0cmVhbWluZz1cIi5jb25jYXQoby5zdHJlYW1pbmcpKSxvLmV4dGVybmFsUGF0aCl7dmFyIHI9dGhpcy5fY29ycmVjdFJlbGF0aXZlUGF0aChvLmV4dGVybmFsUGF0aCk7cj1lbmNvZGVVUklDb21wb25lbnQociksaSs9XCImcD1cIi5jb25jYXQocil9aWYoby5lbmNyeXB0aW9uJiYoaSs9XCImYXV0b19sb2FkPWZhbHNlXCIpLG8uZW5hYmxlQW5ub3RhdGlvbnMmJihpKz1cIiZhPTFcIiksby5kaXNhYmxlZEVsZW1lbnRzKXt2YXIgYT1lbmNvZGVVUklDb21wb25lbnQoby5kaXNhYmxlZEVsZW1lbnRzLmpvaW4oXCIsXCIpKTtpKz1cIiZkaXNhYmxlZEVsZW1lbnRzPVwiLmNvbmNhdChhKX1pZihvLnNlcnZlclVybCl7dmFyIHM9dGhpcy5fY29ycmVjdFJlbGF0aXZlUGF0aChvLnNlcnZlclVybCk7cz1lbmNvZGVVUklDb21wb25lbnQocyksaSs9XCImc2VydmVyX3VybD1cIi5jb25jYXQocyl9aWYoby5zZXJ2ZXJVcmxIZWFkZXJzJiYoaSs9XCImc2VydmVyVXJsSGVhZGVycz1cIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoby5zZXJ2ZXJVcmxIZWFkZXJzKSkpLG8uZG9jdW1lbnRJZCYmKGkrPVwiJmRpZD1cIi5jb25jYXQoby5kb2N1bWVudElkKSksby5jc3Mpe3ZhciBjPXRoaXMuX2NvcnJlY3RSZWxhdGl2ZVBhdGgoby5jc3MpO2M9ZW5jb2RlVVJJQ29tcG9uZW50KGMpLGkrPVwiJmNzcz1cIi5jb25jYXQoYyl9KG8uZGlzYWJsZUkxOG4mJihpKz1cIiZkaXNhYmxlSTE4bj0xXCIpLG8uZW5hYmxlT2ZmbGluZU1vZGUmJihpKz1cIiZvZmZsaW5lPTFcIiksby5zdGFydE9mZmxpbmUmJihpKz1cIiZzdGFydE9mZmxpbmU9MVwiKSwoby5lbmFibGVSZWFkT25seU1vZGV8fG8uaXNSZWFkT25seSkmJihpKz1cIiZyZWFkb25seT0xXCIpLG8uaGlkZUFubm90YXRpb25QYW5lbCYmKGkrPVwiJmhpZGVBbm5vdGF0aW9uUGFuZWw9MVwiKSx2b2lkIDAhPT1vLmFubm90YXRpb25Vc2VyJiYoaSs9XCImdXNlcj1cIi5jb25jYXQoby5hbm5vdGF0aW9uVXNlcikpLHZvaWQgMD09PW8uYW5ub3RhdGlvbkFkbWluJiZ2b2lkIDA9PT1vLmlzQWRtaW5Vc2VyfHwoaSs9XCImYWRtaW49XCIuY29uY2F0KG8uYW5ub3RhdGlvbkFkbWlufHxvLmlzQWRtaW5Vc2VyPzE6MCkpLHZvaWQgMCE9PW8uY3VzdG9tJiYoaSs9XCImY3VzdG9tPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoby5jdXN0b20pKSksdm9pZCAwPT09by5zaG93TG9jYWxGaWxlUGlja2VyJiZ2b2lkIDA9PT1vLmVuYWJsZUZpbGVQaWNrZXJ8fChpKz1cIiZmaWxlcGlja2VyPVwiLmNvbmNhdChvLnNob3dMb2NhbEZpbGVQaWNrZXJ8fG8uZW5hYmxlRmlsZVBpY2tlcj8xOjApKSx2b2lkIDAhPT1vLmZ1bGxBUEkmJihpKz1cIiZwZGZuZXQ9XCIuY29uY2F0KG8uZnVsbEFQST8xOjApKSx2b2lkIDAhPT1vLmVuYWJsZVJlZGFjdGlvbiYmKGkrPVwiJmVuYWJsZVJlZGFjdGlvbj1cIi5jb25jYXQoby5lbmFibGVSZWRhY3Rpb24/MTowKSksdm9pZCAwIT09by5lbmFibGVNZWFzdXJlbWVudCYmKGkrPVwiJmVuYWJsZU1lYXN1cmVtZW50PVwiLmNvbmNhdChvLmVuYWJsZU1lYXN1cmVtZW50PzE6MCkpLHZvaWQgMCE9PW8uc2hvd1Rvb2xiYXJDb250cm9sJiYoaSs9XCImdG9vbGJhcj1cIi5jb25jYXQoby5zaG93VG9vbGJhckNvbnRyb2w/XCJ0cnVlXCI6XCJmYWxzZVwiKSksdm9pZCAwIT09by5zaG93UGFnZUhpc3RvcnlCdXR0b25zJiYoaSs9XCImcGFnZUhpc3Rvcnk9XCIuY29uY2F0KG8uc2hvd1BhZ2VIaXN0b3J5QnV0dG9ucz8xOjApKSx2b2lkIDAhPT1vLm5vdGVzSW5MZWZ0UGFuZWwmJihpKz1cIiZub3Rlc0luTGVmdFBhbmVsPVwiLmNvbmNhdChvLm5vdGVzSW5MZWZ0UGFuZWw/MTowKSksdm9pZCAwIT09by54ZG9tYWluUHJveHlVcmwpJiYobj1cInN0cmluZ1wiPT10eXBlb2Ygby54ZG9tYWluUHJveHlVcmw/e3VybDpvLnhkb21haW5Qcm94eVVybH06by54ZG9tYWluUHJveHlVcmwsaSs9XCImeGRvbWFpbl91cmxzPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7cmV0dXJuKG8uYXp1cmVXb3JrYXJvdW5kfHxvLmVuYWJsZUF6dXJlV29ya2Fyb3VuZCkmJihpKz1cIiZhenVyZVdvcmthcm91bmQ9MVwiKSxvLnVzZURvd25sb2FkZXJ8fChpKz1cIiZ1c2VEb3dubG9hZGVyPTBcIiksby5kaXNhYmxlV2Vic29ja2V0cyYmKGkrPVwiJmRpc2FibGVXZWJzb2NrZXRzPTFcIiksby5mb3JjZUNsaWVudFNpZGVJbml0JiYoaSs9XCImZm9yY2VDbGllbnRTaWRlSW5pdD0xXCIpLG8ubG9hZEFzUERGJiYoaSs9XCImbG9hZEFzUERGPTFcIiksdm9pZCAwIT09by53b3JrZXJUcmFuc3BvcnRQcm9taXNlJiYoaSs9XCImdXNlU2hhcmVkV29ya2VyPVwiLmNvbmNhdChvLndvcmtlclRyYW5zcG9ydFByb21pc2U/XCJ0cnVlXCI6XCJmYWxzZVwiKSksdm9pZCAwIT09by5wZGZ0cm9uU2VydmVyJiZvLnBkZnRyb25TZXJ2ZXImJihpKz1cIiZwZGZ0cm9uU2VydmVyPVwiLmNvbmNhdChlbmNvZGVVUklDb21wb25lbnQoby5wZGZ0cm9uU2VydmVyKSkpLHZvaWQgMCE9PW8uYWNjZXNzaWJsZU1vZGUmJihpKz1cIiZhY2Nlc3NpYmxlTW9kZT1cIi5jb25jYXQoby5hY2Nlc3NpYmxlTW9kZT8xOjApKSxvLmRpc2FibGVMb2dzJiYoaSs9XCImZGlzYWJsZUxvZ3M9MVwiKSxvLmVuYWJsZVZpZXdTdGF0ZUFubm90YXRpb25zJiYoaSs9XCImZW5hYmxlVmlld1N0YXRlQW5ub3RhdGlvbnM9MVwiKSxvLmRpc2FibGVGbGF0dGVuZWRBbm5vdGF0aW9ucyYmKGkrPVwiJmRpc2FibGVGbGF0dGVuZWRBbm5vdGF0aW9ucz0xXCIpLHZvaWQgMCE9PW8uc2VsZWN0QW5ub3RhdGlvbk9uQ3JlYXRpb24mJihpKz1cIiZzZWxlY3RBbm5vdGF0aW9uT25DcmVhdGlvbj1cIi5jb25jYXQoby5zZWxlY3RBbm5vdGF0aW9uT25DcmVhdGlvbj8xOjApKSwoaSs9XCImaWQ9XCIuY29uY2F0KHRoaXMuaWQpKS5sZW5ndGg+MCYmXCImXCI9PT1pWzBdJiYoaT1cIiNcIi5jb25jYXQoaS5zbGljZSgxKSkpLGl9LHNldEluc3RhbmNlRGF0YTpmdW5jdGlvbihlKXtjLnNldCh0aGlzLmVsZW1lbnQse2lmcmFtZTplLGw6dGhpcy5vcHRpb25zLmx8fHRoaXMub3B0aW9ucy5saWNlbnNlS2V5LHdvcmtlclRyYW5zcG9ydFByb21pc2U6dGhpcy5vcHRpb25zLndvcmtlclRyYW5zcG9ydFByb21pc2V9KX0sX2NyZWF0ZUhUTUw1OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMub3B0aW9ucy5odG1sNVBhdGgrdGhpcy5fZ2V0SFRNTDVPcHRpb25zVVJMKCksbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO3RoaXMuc2V0SW5zdGFuY2VEYXRhKG4pLG4uaWQ9XCJ3ZWJ2aWV3ZXItXCIuY29uY2F0KHRoaXMuaWQpLG4uc3JjPXQsbi50aXRsZT1cIndlYnZpZXdlclwiLG4uZnJhbWVCb3JkZXI9MCxuLndpZHRoPVwiMTAwJVwiLG4uaGVpZ2h0PVwiMTAwJVwiLG4uc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsITApLG4uc2V0QXR0cmlidXRlKFwid2Via2l0YWxsb3dmdWxsc2NyZWVuXCIsITApLG4uc2V0QXR0cmlidXRlKFwibW96YWxsb3dmdWxsc2NyZWVuXCIsITApLHRoaXMuaWZyYW1lPW4sdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvciYmbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWJnY29sb3JcIix0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSx0aGlzLm9wdGlvbnMuYXNzZXRQYXRoJiZuLnNldEF0dHJpYnV0ZShcImRhdGEtYXNzZXRwYXRoXCIsZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMub3B0aW9ucy5hc3NldFBhdGgpKSx0aGlzLmxvYWRMaXN0ZW5lcj1mdW5jdGlvbigpe3ZhciB0PWUuaWZyYW1lO3RyeXtlLmluc3RhbmNlPXQuY29udGVudFdpbmRvdy5yZWFkZXJDb250cm9sLHZvaWQgMD09PWUuaW5zdGFuY2U/dC5jb250ZW50V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aWV3ZXJMb2FkZWRcIiwoZnVuY3Rpb24oKXtlLmluc3RhbmNlPXQuY29udGVudFdpbmRvdy5yZWFkZXJDb250cm9sLGUuX3ZpZXdlckxvYWRlZCh0KX0pKTplLl92aWV3ZXJMb2FkZWQodCl9Y2F0Y2gobil7ZS5fdmlld2VyTG9hZGVkKHQpfX0sbi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLHRoaXMubG9hZExpc3RlbmVyKSx0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobil9LF9jcmVhdGVIVE1MNU1vYmlsZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLm9wdGlvbnMuaHRtbDVQYXRoK3RoaXMuX2dldEhUTUw1T3B0aW9uc1VSTCgpLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTt0aGlzLnNldEluc3RhbmNlRGF0YShuKSxuLmlkPVwid2Vidmlld2VyLVwiLmNvbmNhdCh0aGlzLmlkKSxuLnNyYz10LG4uZnJhbWVib3JkZXI9MCx0aGlzLm9wdGlvbnMuYXNzZXRQYXRoJiZuLnNldEF0dHJpYnV0ZShcImRhdGEtYXNzZXRwYXRoXCIsZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMub3B0aW9ucy5hc3NldFBhdGgpKSxuLnN0eWxlLndpZHRoPVwiMTAwJVwiLG4uc3R5bGUuaGVpZ2h0PVwiMTAwJVwiLHRoaXMuaWZyYW1lPW4sdGhpcy5sb2FkTGlzdGVuZXI9ZnVuY3Rpb24oKXt2YXIgdD1lLmlmcmFtZTt0cnl7ZS5pbnN0YW5jZT10LmNvbnRlbnRXaW5kb3cucmVhZGVyQ29udHJvbCx2b2lkIDA9PT1lLmluc3RhbmNlP3QuY29udGVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidmlld2VyTG9hZGVkXCIsKGZ1bmN0aW9uKCl7ZS5pbnN0YW5jZT10LmNvbnRlbnRXaW5kb3cucmVhZGVyQ29udHJvbCxlLl92aWV3ZXJMb2FkZWQodCl9KSk6ZS5fdmlld2VyTG9hZGVkKHQpfWNhdGNoKG4pe2UuX3ZpZXdlckxvYWRlZCh0KX19LG4uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIix0aGlzLmxvYWRMaXN0ZW5lciksdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG4pfSxkaXNwb3NlOmZ1bmN0aW9uKCl7Yy5kZWxldGUodGhpcy5lbGVtZW50KSxkLmRlbGV0ZSh0aGlzLmVsZW1lbnQpLHRoaXMuaW5zdGFuY2UuY2xvc2VEb2N1bWVudCgpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHRoaXMubWVzc2FnZUhhbmRsZXIpLHRoaXMuaWZyYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsdGhpcy5sb2FkTGlzdGVuZXIpLHRoaXMuaWZyYW1lPW51bGx9LGdldEluc3RhbmNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5zdGFuY2V9LHNldENvbXBsZXRlSW5zdGFuY2U6ZnVuY3Rpb24oZSl7dGhpcy5jb21wbGV0ZUluc3RhbmNlPWV9LGdldENvbXBsZXRlSW5zdGFuY2U6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuY29tcGxldGVJbnN0YW5jZX0sZ2V0U2lkZVdpbmRvd1Zpc2liaWxpdHk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLmdldFNob3dTaWRlV2luZG93KCl9LHNldFNpZGVXaW5kb3dWaXNpYmlsaXR5OmZ1bmN0aW9uKGUpe3RoaXMuZ2V0SW5zdGFuY2UoKS5zZXRTaG93U2lkZVdpbmRvdyhlKX0sZ2V0U2hvd1NpZGVXaW5kb3c6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRTaWRlV2luZG93VmlzaWJpbGl0eSgpfSxzZXRTaG93U2lkZVdpbmRvdzpmdW5jdGlvbihlKXt0aGlzLnNldFNpZGVXaW5kb3dWaXNpYmlsaXR5KGUpfSxnZXRUb29sYmFyVmlzaWJpbGl0eTpmdW5jdGlvbigpe2NvbnNvbGUud2FybihcIlVuc3VwcG9ydGVkIG1ldGhvZCBnZXRUb29sYmFyVmlzaWJpbGl0eVwiKX0sc2V0VG9vbGJhclZpc2liaWxpdHk6ZnVuY3Rpb24oZSl7dGhpcy5nZXRJbnN0YW5jZSgpLnNldFRvb2xiYXJWaXNpYmlsaXR5KGUpfSxnZXRDdXJyZW50UGFnZU51bWJlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudFBhZ2VOdW1iZXIoKX0sc2V0Q3VycmVudFBhZ2VOdW1iZXI6ZnVuY3Rpb24oZSl7dGhpcy5nZXRJbnN0YW5jZSgpLnNldEN1cnJlbnRQYWdlTnVtYmVyKGUpfSxnZXRQYWdlQ291bnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLmdldFBhZ2VDb3VudCgpfSxnZXRab29tTGV2ZWw6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLmdldFpvb21MZXZlbCgpfSxzZXRab29tTGV2ZWw6ZnVuY3Rpb24oZSl7dGhpcy5nZXRJbnN0YW5jZSgpLnNldFpvb21MZXZlbChlKX0scm90YXRlQ2xvY2t3aXNlOmZ1bmN0aW9uKCl7dGhpcy5nZXRJbnN0YW5jZSgpLnJvdGF0ZUNsb2Nrd2lzZSgpfSxyb3RhdGVDb3VudGVyQ2xvY2t3aXNlOmZ1bmN0aW9uKCl7dGhpcy5nZXRJbnN0YW5jZSgpLnJvdGF0ZUNvdW50ZXJDbG9ja3dpc2UoKX0sZ2V0TGF5b3V0TW9kZTpmdW5jdGlvbigpe3ZhciBlLHQ9dGhpcy5nZXRJbnN0YW5jZSgpLmdldExheW91dE1vZGUoKSxuPXRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3cuQ29yZUNvbnRyb2xzLkRpc3BsYXlNb2RlcztyZXR1cm4gdD09PW4uU2luZ2xlP2U9by5XZWJWaWV3ZXIuTGF5b3V0TW9kZS5TaW5nbGU6dD09PW4uQ29udGludW91cz9lPW8uV2ViVmlld2VyLkxheW91dE1vZGUuQ29udGludW91czp0PT09bi5GYWNpbmc/ZT1vLldlYlZpZXdlci5MYXlvdXRNb2RlLkZhY2luZzp0PT09bi5GYWNpbmdDb250aW51b3VzP2U9by5XZWJWaWV3ZXIuTGF5b3V0TW9kZS5GYWNpbmdDb250aW51b3VzOnQ9PT1uLkNvdmVyP2U9by5XZWJWaWV3ZXIuTGF5b3V0TW9kZS5GYWNpbmdDb3ZlckNvbnRpbnVvdXM6dD09PW4uQ292ZXJGYWNpbmcmJihlPW8uV2ViVmlld2VyLkxheW91dE1vZGUuRmFjaW5nQ292ZXIpLGV9LHNldExheW91dE1vZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5pZnJhbWUuY29udGVudFdpbmRvdy5Db3JlQ29udHJvbHMuRGlzcGxheU1vZGVzLG49dC5Db250aW51b3VzO2U9PT1vLldlYlZpZXdlci5MYXlvdXRNb2RlLlNpbmdsZT9uPXQuU2luZ2xlOmU9PT1vLldlYlZpZXdlci5MYXlvdXRNb2RlLkNvbnRpbnVvdXM/bj10LkNvbnRpbnVvdXM6ZT09PW8uV2ViVmlld2VyLkxheW91dE1vZGUuRmFjaW5nP249dC5GYWNpbmc6ZT09PW8uV2ViVmlld2VyLkxheW91dE1vZGUuRmFjaW5nQ29udGludW91cz9uPXQuRmFjaW5nQ29udGludW91czplPT09by5XZWJWaWV3ZXIuTGF5b3V0TW9kZS5GYWNpbmdDb3Zlcj9uPXQuQ292ZXJGYWNpbmc6ZT09PW8uV2ViVmlld2VyLkxheW91dE1vZGUuRmFjaW5nQ292ZXJDb250aW51b3VzJiYobj10LkNvdmVyKSx0aGlzLmdldEluc3RhbmNlKCkuc2V0TGF5b3V0TW9kZShuKX0sZ2V0VG9vbE1vZGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLmdldFRvb2xNb2RlKCl9LHNldFRvb2xNb2RlOmZ1bmN0aW9uKGUpe3RoaXMuZ2V0SW5zdGFuY2UoKS5zZXRUb29sTW9kZShlKX0sZml0V2lkdGg6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmdldEluc3RhbmNlKCkuZG9jVmlld2VyO2Uuc2V0Rml0TW9kZShlLkZpdE1vZGUuRml0V2lkdGgpfSxmaXRIZWlnaHQ6ZnVuY3Rpb24oKXt9LGZpdFBhZ2U6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmdldEluc3RhbmNlKCkuZG9jVmlld2VyO2Uuc2V0Rml0TW9kZShlLkZpdE1vZGUuRml0UGFnZSl9LGdldEZpdE1vZGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmdldEluc3RhbmNlKCkuZ2V0Rml0TW9kZSgpLHQ9dGhpcy5nZXRJbnN0YW5jZSgpLmRvY1ZpZXdlci5GaXRNb2RlO3N3aXRjaChlKXtjYXNlIHQuRml0V2lkdGg6cmV0dXJuIG8uV2ViVmlld2VyLkZpdE1vZGUuRml0V2lkdGg7Y2FzZSB0LkZpdEhlaWdodDpyZXR1cm4gby5XZWJWaWV3ZXIuRml0TW9kZS5GaXRIZWlnaHQ7Y2FzZSB0LkZpdFBhZ2U6cmV0dXJuIG8uV2ViVmlld2VyLkZpdE1vZGUuRml0UGFnZTtjYXNlIHQuWm9vbTpyZXR1cm4gby5XZWJWaWV3ZXIuRml0TW9kZS5ab29tO2RlZmF1bHQ6Y29uc29sZS53YXJuKFwiVW5zdXBwb3J0ZWQgZml0IG1vZGVcIil9fSxzZXRGaXRNb2RlOmZ1bmN0aW9uKGUpe2U9PT1vLldlYlZpZXdlci5GaXRNb2RlLkZpdFdpZHRoP3RoaXMuZml0V2lkdGgoKTplPT09by5XZWJWaWV3ZXIuRml0TW9kZS5GaXRIZWlnaHQ/dGhpcy5maXRIZWlnaHQoKTplPT09by5XZWJWaWV3ZXIuRml0TW9kZS5GaXRQYWdlP3RoaXMuZml0UGFnZSgpOmU9PT1vLldlYlZpZXdlci5GaXRNb2RlLlpvb20/dGhpcy56b29tKCk6Y29uc29sZS53YXJuKFwiVW5zdXBwb3J0ZWQgZml0IG1vZGU6IFwiLmNvbmNhdChlKSl9LHpvb206ZnVuY3Rpb24oKXt2YXIgZT10aGlzLmdldEluc3RhbmNlKCkuZG9jVmlld2VyO2Uuc2V0Rml0TW9kZShlLkZpdE1vZGUuWm9vbSl9LGdvVG9GaXJzdFBhZ2U6ZnVuY3Rpb24oKXt0aGlzLmdldEluc3RhbmNlKCkuZ29Ub0ZpcnN0UGFnZSgpfSxnb1RvTGFzdFBhZ2U6ZnVuY3Rpb24oKXt0aGlzLmdldEluc3RhbmNlKCkuZ29Ub0xhc3RQYWdlKCl9LGdvVG9OZXh0UGFnZTpmdW5jdGlvbigpe3RoaXMuZ2V0SW5zdGFuY2UoKS5nb1RvTmV4dFBhZ2UoKX0sZ29Ub1ByZXZQYWdlOmZ1bmN0aW9uKCl7dGhpcy5nZXRJbnN0YW5jZSgpLmdvVG9QcmV2UGFnZSgpfSxsb2FkRG9jdW1lbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LG49e3N0cmVhbWluZzp0aGlzLm9wdGlvbnMuc3RyZWFtaW5nfSxvPXIoe30sbix0KTt2b2lkIDAhPT1vLmRvY3VtZW50SWQmJih0aGlzLmdldEluc3RhbmNlKCkuZG9jSWQ9by5kb2N1bWVudElkKSx0aGlzLmdldEluc3RhbmNlKCkubG9hZERvY3VtZW50KHRoaXMuX2NvcnJlY3RSZWxhdGl2ZVBhdGgoZSksbyl9LHNlYXJjaFRleHQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj0wLG89dDtpZihcInN0cmluZ1wiPT10eXBlb2YgbyYmKG89dC5zcGxpdChcIixcIikpLHZvaWQgMCE9PW8pZm9yKHZhciBpPTA7aTxvLmxlbmd0aDtpKyspXCJDYXNlU2Vuc2l0aXZlXCI9PT1vW2ldP24rPTE6XCJXaG9sZVdvcmRcIj09PW9baV0/bis9MjpcIlNlYXJjaFVwXCI9PT1vW2ldP24rPTQ6XCJQYWdlU3RvcFwiPT09b1tpXT9uKz04OlwiUHJvdmlkZVF1YWRzXCI9PT1vW2ldP24rPTE2OlwiQW1iaWVudFN0cmluZ1wiPT09b1tpXSYmKG4rPTMyKTt2b2lkIDA9PT10P3RoaXMuZ2V0SW5zdGFuY2UoKS5zZWFyY2hUZXh0KGUpOnRoaXMuZ2V0SW5zdGFuY2UoKS5zZWFyY2hUZXh0KGUsbil9LHNldEFubm90YXRpb25Vc2VyOmZ1bmN0aW9uKGUpe3RoaXMuZ2V0SW5zdGFuY2UoKS5zZXRBbm5vdGF0aW9uVXNlcihlKX0sc2V0QWRtaW5Vc2VyOmZ1bmN0aW9uKGUpe3RoaXMuZ2V0SW5zdGFuY2UoKS5zZXRBZG1pblVzZXIoZSl9LHNldFJlYWRPbmx5OmZ1bmN0aW9uKGUpe3RoaXMuZ2V0SW5zdGFuY2UoKS5zZXRSZWFkT25seShlKX0sZG93bmxvYWRYb2REb2N1bWVudDpmdW5jdGlvbigpe2lmKFwieG9kXCI9PT10aGlzLmRvY3VtZW50VHlwZSl7dmFyIGU9ZGVjb2RlVVJJQ29tcG9uZW50KHRoaXMub3B0aW9ucy5pbml0aWFsRG9jKTt3aW5kb3cub3BlbihlKX1lbHNlIGNvbnNvbGUud2FybihcIlVuc3VwcG9ydGVkIG1ldGhvZCBmb3IgdGhpcyBkb2N1bWVudCB0eXBlXCIpfSxzdGFydFByaW50Sm9iOmZ1bmN0aW9uKGUpe1wiaHRtbDVcIj09PXRoaXMuc2VsZWN0ZWRUeXBlP3RoaXMuZ2V0SW5zdGFuY2UoKS5zdGFydFByaW50Sm9iKGUpOmNvbnNvbGUud2FybihcIlVuc3VwcG9ydGVkIG1ldGhvZCBzdGFydFByaW50Sm9iXCIpfSxlbmRQcmludEpvYjpmdW5jdGlvbigpe1wiaHRtbDVcIj09PXRoaXMuc2VsZWN0ZWRUeXBlP3RoaXMuZ2V0SW5zdGFuY2UoKS5lbmRQcmludEpvYigpOmNvbnNvbGUud2FybihcIlVuc3VwcG9ydGVkIG1ldGhvZCBlbmRQcmludEpvYlwiKX0sX2NvcnJlY3RSZWxhdGl2ZVBhdGg6ZnVuY3Rpb24oZSl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIGU7dmFyIHQ9d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cigwLHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5sYXN0SW5kZXhPZihcIi9cIikpO3JldHVybi9eKFxcL3wlMkZ8W2EtejAtOS1dKzopL2kudGVzdChlKT9lOlwiXCIuY29uY2F0KHQsXCIvXCIpLmNvbmNhdChlKX0sX3Rlc3RIVE1MNTpmdW5jdGlvbigpe3RyeXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3JldHVybiBlJiZlLmdldENvbnRleHQoXCIyZFwiKX1jYXRjaChlKXtyZXR1cm4hMX19LF90ZXN0V2ViQXNzZW1ibHk6ZnVuY3Rpb24oKXtyZXR1cm4hKCF3aW5kb3cuV2ViQXNzZW1ibHl8fCF3aW5kb3cuV2ViQXNzZW1ibHkudmFsaWRhdGUpfSxfc3VwcG9ydHM6ZnVuY3Rpb24oZSl7aWYoZT09PXRoaXMuc2VsZWN0ZWRUeXBlKXJldHVybiEwO2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0KyspaWYoYXJndW1lbnRzW3RdPT09dGhpcy5zZWxlY3RlZFR5cGUpcmV0dXJuITA7cmV0dXJuITF9LF90ZXN0Q09SUzpmdW5jdGlvbigpe3JldHVyblwiWE1MSHR0cFJlcXVlc3RcImluIHdpbmRvdyYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIG5ldyBYTUxIdHRwUmVxdWVzdH0saXNJRTpmdW5jdGlvbigpe3ZhciBlPW5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSx0PS8obXNpZSkgKFtcXHcuXSspLy5leGVjKGUpfHwvKHRyaWRlbnQpKD86Lio/IHJ2OihbXFx3Ll0rKXwpLy5leGVjKGUpO3JldHVybiB0P3BhcnNlSW50KHRbMl0sMTApOnR9LGlzTW9iaWxlRGV2aWNlOmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNJRSgpJiYoMD09PXRoaXMuc2Nyb2xsYmFyV2lkdGgoKSYmbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvd2ViT1MvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBvZC9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBhZC9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVG91Y2gvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9TaWxrL2kpKX0sc2Nyb2xsYmFyV2lkdGg6ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Uuc3R5bGUuY3NzVGV4dD1cIndpZHRoOjEwMHB4O2hlaWdodDoxMDBweDtvdmVyZmxvdzpzY3JvbGwgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTk5OTlweFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSk7dmFyIHQ9ZS5vZmZzZXRXaWR0aC1lLmNsaWVudFdpZHRoO3JldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGUpLHR9LGlzU2FtZU9yaWdpbjpmdW5jdGlvbihlKXt2YXIgdD13aW5kb3cubG9jYXRpb24sbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtuLmhyZWY9ZSxcIlwiPT09bi5ob3N0JiYobi5ocmVmPW4uaHJlZik7dmFyIG89d2luZG93LmxvY2F0aW9uLnBvcnQsaT1uLnBvcnQ7cmV0dXJuXCJodHRwOlwiPT09bi5wcm90b2NvbD8oaT1pfHxcIjgwXCIsbz1vfHxcIjgwXCIpOlwiaHR0cHM6XCI9PT1uLnByb3RvY29sJiYoaT1pfHxcIjQ0M1wiLG89b3x8XCI0NDNcIiksbi5ob3N0bmFtZT09PXQuaG9zdG5hbWUmJm4ucHJvdG9jb2w9PT10LnByb3RvY29sJiZpPT09b30scnVuSW5JZnJhbWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIikuY29udGVudFdpbmRvdyxuPXRoaXMsbz1mdW5jdGlvbiBvKCl7bi5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLG8pLGUodCxuLmdldEluc3RhbmNlKCksdC4kKX07dGhpcy5nZXRJbnN0YW5jZSgpP3NldFRpbWVvdXQobywwKTp0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsbyl9fSxvLldlYlZpZXdlci5PcHRpb25zPXtpbml0aWFsRG9jOnZvaWQgMCxhbm5vdGF0aW9uQWRtaW46dm9pZCAwLGlzQWRtaW5Vc2VyOnZvaWQgMCxhbm5vdGF0aW9uVXNlcjp2b2lkIDAsYXNzZXRQYXRoOnZvaWQgMCxhdXRvQ3JlYXRlOiEwLGF6dXJlV29ya2Fyb3VuZDohMSxlbmFibGVBenVyZVdvcmthcm91bmQ6ITEsYmFja2dyb3VuZENvbG9yOnZvaWQgMCxiYWNrZW5kVHlwZTp2b2lkIDAsY3NzOnZvaWQgMCxjb25maWc6dm9pZCAwLGN1c3RvbTp2b2lkIDAsZG9jdW1lbnRJZDp2b2lkIDAsZG9jdW1lbnRUeXBlOnZvaWQgMCxwcmVsb2FkV29ya2VyOnZvaWQgMCxleHRlbnNpb246dm9pZCAwLGVuYWJsZUFubm90YXRpb25zOiEwLGZpbGVuYW1lOnZvaWQgMCxkaXNhYmxlSTE4bjohMSxkaXNhYmxlZEVsZW1lbnRzOnZvaWQgMCxkaXNhYmxlV2Vic29ja2V0czohMSxlbmFibGVPZmZsaW5lTW9kZTohMSxlbmFibGVSZWFkT25seU1vZGU6ITEsaXNSZWFkT25seTohMSxlbmFibGVSZWRhY3Rpb246ITEsZW5hYmxlTWVhc3VyZW1lbnQ6ITEsZW5jcnlwdGlvbjp2b2lkIDAsZXh0ZXJuYWxQYXRoOnZvaWQgMCxoaWRlQW5ub3RhdGlvblBhbmVsOiExLGh0bWw1UGF0aDpcIi4vdWkvaW5kZXguaHRtbFwiLGw6dm9pZCAwLGxpY2Vuc2VLZXk6dm9pZCAwLG1vYmlsZVJlZGlyZWN0OiExLHBhdGg6XCJcIixwZGZCYWNrZW5kOnZvaWQgMCxwZGZ0cm9uU2VydmVyOnZvaWQgMCxmdWxsQVBJOiExLHByZWxvYWRQREZXb3JrZXI6ITAsc2VydmVyVXJsOnZvaWQgMCxzZXJ2ZXJVcmxIZWFkZXJzOnZvaWQgMCxzaG93TG9jYWxGaWxlUGlja2VyOiExLGVuYWJsZUZpbGVQaWNrZXI6ITEsc2hvd1BhZ2VIaXN0b3J5QnV0dG9uczohMCxzaG93VG9vbGJhckNvbnRyb2w6dm9pZCAwLHN0YXJ0T2ZmbGluZTohMSxzdHJlYW1pbmc6dm9pZCAwLHR5cGU6XCJodG1sNVwiLHVzZURvd25sb2FkZXI6ITAsd29ya2VyVHJhbnNwb3J0UHJvbWlzZTp2b2lkIDAseGRvbWFpblByb3h5VXJsOnZvaWQgMCx1aTp2b2lkIDAsZm9yY2VDbGllbnRTaWRlSW5pdDohMSxsb2FkQXNQREY6ITEsYWNjZXNzaWJsZU1vZGU6dm9pZCAwLGRpc2FibGVMb2dzOiExLGVuYWJsZVZpZXdTdGF0ZUFubm90YXRpb25zOiExLHNlbGVjdEFubm90YXRpb25PbkNyZWF0aW9uOiExLG5vdGVzSW5MZWZ0UGFuZWw6ITEsZGlzYWJsZUZsYXR0ZW5lZEFubm90YXRpb25zOiExfSxvLldlYlZpZXdlci5MYXlvdXRNb2RlPXtDb250aW51b3VzOlwiQ29udGludW91c1wiLEZhY2luZ0NvdmVyQ29udGludW91czpcIkNvdmVyQ29udGludW91c1wiLEZhY2luZzpcIkZhY2luZ1wiLEZhY2luZ0NvbnRpbnVvdXM6XCJGYWNpbmdDb250aW51b3VzXCIsRmFjaW5nQ292ZXI6XCJGYWNpbmdDb3ZlclwiLFNpbmdsZTpcIlNpbmdsZVBhZ2VcIn0sby5XZWJWaWV3ZXIuVG9vbE1vZGU9e0Fubm90YXRpb25DcmVhdGVBcnJvdzpcIkFubm90YXRpb25DcmVhdGVBcnJvd1wiLEFubm90YXRpb25DcmVhdGVDYWxsb3V0OlwiQW5ub3RhdGlvbkNyZWF0ZUNhbGxvdXRcIixBbm5vdGF0aW9uQ3JlYXRlRWxsaXBzZTpcIkFubm90YXRpb25DcmVhdGVFbGxpcHNlXCIsQW5ub3RhdGlvbkNyZWF0ZUZyZWVIYW5kOlwiQW5ub3RhdGlvbkNyZWF0ZUZyZWVIYW5kXCIsQW5ub3RhdGlvbkNyZWF0ZUZyZWVUZXh0OlwiQW5ub3RhdGlvbkNyZWF0ZUZyZWVUZXh0XCIsQW5ub3RhdGlvbkNyZWF0ZUxpbmU6XCJBbm5vdGF0aW9uQ3JlYXRlTGluZVwiLEFubm90YXRpb25DcmVhdGVQb2x5Z29uOlwiQW5ub3RhdGlvbkNyZWF0ZVBvbHlnb25cIixBbm5vdGF0aW9uQ3JlYXRlUG9seWdvbkNsb3VkOlwiQW5ub3RhdGlvbkNyZWF0ZVBvbHlnb25DbG91ZFwiLEFubm90YXRpb25DcmVhdGVQb2x5bGluZTpcIkFubm90YXRpb25DcmVhdGVQb2x5bGluZVwiLEFubm90YXRpb25DcmVhdGVSZWN0YW5nbGU6XCJBbm5vdGF0aW9uQ3JlYXRlUmVjdGFuZ2xlXCIsQW5ub3RhdGlvbkNyZWF0ZVNpZ25hdHVyZTpcIkFubm90YXRpb25DcmVhdGVTaWduYXR1cmVcIixBbm5vdGF0aW9uQ3JlYXRlU3RhbXA6XCJBbm5vdGF0aW9uQ3JlYXRlU3RhbXBcIixBbm5vdGF0aW9uQ3JlYXRlU3RpY2t5OlwiQW5ub3RhdGlvbkNyZWF0ZVN0aWNreVwiLEFubm90YXRpb25DcmVhdGVUZXh0SGlnaGxpZ2h0OlwiQW5ub3RhdGlvbkNyZWF0ZVRleHRIaWdobGlnaHRcIixBbm5vdGF0aW9uQ3JlYXRlVGV4dFNxdWlnZ2x5OlwiQW5ub3RhdGlvbkNyZWF0ZVRleHRTcXVpZ2dseVwiLEFubm90YXRpb25DcmVhdGVUZXh0U3RyaWtlb3V0OlwiQW5ub3RhdGlvbkNyZWF0ZVRleHRTdHJpa2VvdXRcIixBbm5vdGF0aW9uQ3JlYXRlVGV4dFVuZGVybGluZTpcIkFubm90YXRpb25DcmVhdGVUZXh0VW5kZXJsaW5lXCIsQW5ub3RhdGlvbkVkaXQ6XCJBbm5vdGF0aW9uRWRpdFwifSxvLldlYlZpZXdlci5GaXRNb2RlPXtGaXRIZWlnaHQ6XCJGaXRIZWlnaHRcIixGaXRQYWdlOlwiRml0UGFnZVwiLEZpdFdpZHRoOlwiRml0V2lkdGhcIixab29tOlwiWm9vbVwifSxvLldlYlZpZXdlci5TZWFyY2hNb2RlPXtDYXNlU2Vuc2l0aXZlOjEsV2hvbGVXb3JkOjIsU2VhcmNoVXA6NCxQYWdlU3RvcDo4LFByb3ZpZGVRdWFkczoxNixBbWJpZW50U3RyaW5nOjMyfSxvLldlYlZpZXdlci5Vc2VyPWZ1bmN0aW9uKGUsdCxuKXt0aGlzLnVzZXJuYW1lPWUsdGhpcy5pc0FkbWluPXZvaWQgMCE9PXQmJnQsdGhpcy5pc1JlYWRPbmx5PXZvaWQgMCE9PW4mJm59O3ZhciB1PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihuLGkpe2UubD1lLmx8fGUubGljZW5zZUtleSxlLmF6dXJlV29ya2Fyb3VuZD1lLmF6dXJlV29ya2Fyb3VuZHx8ZS5lbmFibGVBenVyZVdvcmthcm91bmQsZS5hbm5vdGF0aW9uQWRtaW49ZS5hbm5vdGF0aW9uQWRtaW58fGUuaXNBZG1pblVzZXIsZS5lbmFibGVSZWFkT25seU1vZGU9ZS5lbmFibGVSZWFkT25seU1vZGV8fGUuaXNSZWFkT25seSxlLnNob3dMb2NhbEZpbGVQaWNrZXI9ZS5zaG93TG9jYWxGaWxlUGlja2VyfHxlLmVuYWJsZUZpbGVQaWNrZXI7dC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlcIiwoZnVuY3Rpb24gZSgpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsZSk7dHJ5e3ZhciBvPXQucXVlcnlTZWxlY3RvcihcImlmcmFtZVwiKS5jb250ZW50V2luZG93LHM9by5Ub29scztpZih2b2lkIDA9PT1zKXJldHVybiBpKFwiVmlld2VyIGlzbid0IGluc3RhbnRpYXRlZCBjb3JyZWN0bHkuIEl0IGNvdWxkIGJlIGNhdXNlZCBieSB0aGUgJ3BhdGgnIG9wdGlvbiBpbiB0aGUgV2ViVmlld2VyIGNvbnN0cnVjdG9yIG5vdCBiZWluZyBkZWZpbmVkIGNvcnJlY3RseS4gVGhlICdwYXRoJyBvcHRpb24gc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBIVE1MIGZpbGUgeW91J3JlIGxvYWRpbmcgdGhlIHNjcmlwdCBvbiBhbmQgdGhlIGxpYiBmb2xkZXIgbmVlZHMgdG8gYmUgcHVibGljbHkgYWNjZXNzaWJsZS5cIik7dmFyIGM9YS5nZXRJbnN0YW5jZSgpLGQ9cih7fSxjLHtkaXNwb3NlOmEuZGlzcG9zZS5iaW5kKGEpLFRvb2xzOnMsQW5ub3RhdGlvbnM6by5Bbm5vdGF0aW9ucyxDb3JlQ29udHJvbHM6by5Db3JlQ29udHJvbHMsUGFydFJldHJpZXZlcnM6by5Db3JlQ29udHJvbHMuUGFydFJldHJpZXZlcnMsQWN0aW9uczpvLkFjdGlvbnMsUERGTmV0Om8uUERGTmV0LGFubm90TWFuYWdlcjpjLmRvY1ZpZXdlci5nZXRBbm5vdGF0aW9uTWFuYWdlcigpLGRvY1ZpZXdlcjpjLmRvY1ZpZXdlcixpZnJhbWVXaW5kb3c6b30pO2Euc2V0Q29tcGxldGVJbnN0YW5jZShkKSxuKGQpfWNhdGNoKGUpe2koXCJWaWV3ZXIgaXMgb24gYSBkaWZmZXJlbnQgZG9tYWluLCB0aGUgcHJvbWlzZSBmcm9tIFdlYlZpZXdlciBmdW5jdGlvbiBpcyByZWplY3RlZCBhbmQgQVBJIGZ1bmN0aW9ucyB3aWxsIG5vdCB3b3JrIGJlY2F1c2Ugb2YgY3Jvc3MgZG9tYWluIHBlcm1pc3Npb25zLiBTZWUgaHR0cHM6Ly93d3cucGRmdHJvbi5jb20va2JfY3Jvc3Nfb3JpZ2luIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKX19KSk7dmFyIGE9bmV3IG8uV2ViVmlld2VyKGUsdCl9KSl9LGY9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWEoYyksbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO2lmKG8uaWZyYW1lPT09ZSlyZXR1cm4gb31yZXR1cm4gbnVsbH07dS5sPWZ1bmN0aW9uKGUpe3ZhciB0PWYoZSk7cmV0dXJuIHQmJnQubH0sdS53b3JrZXJUcmFuc3BvcnRQcm9taXNlPWZ1bmN0aW9uKGUpe3ZhciB0PWYoZSk7cmV0dXJuIHQmJnQud29ya2VyVHJhbnNwb3J0UHJvbWlzZX07dmFyIGg9ZnVuY3Rpb24oZSl7dmFyIHQ9YShjKTtpZighdC5sZW5ndGh8fCF0LmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5zdGFuY2V9KSkubGVuZ3RoKXJldHVybiBjb25zb2xlLndhcm4oXCJXZWJWaWV3ZXIuZ2V0SW5zdGFuY2UoKSB3YXMgY2FsbGVkIGJlZm9yZSBhbnkgaW5zdGFuY2VzIHdlcmUgYXZhaWxhYmxlXCIpLG51bGw7aWYodC5sZW5ndGg+MSYmIWUpdGhyb3cgbmV3IEVycm9yKFwiTW9yZSB0aGFuIG9uZSBpbnN0YW5jZSBvZiBXZWJWaWV3ZXIgd2FzIGZvdW5kLCBhbmQgbm8gZWxlbWVudCB3YXMgcGFzc2VkIGludG8gZ2V0SW5zdGFuY2UoKS4gUGxlYXNlIHNwZWNpZnkgd2hpY2ggaW5zdGFuY2UgeW91IHdhbnQgdG8gZ2V0LlwiKTtyZXR1cm4gZT8oYy5nZXQoZSl8fHt9KS5pbnN0YW5jZToodFswXXx8e30pLmluc3RhbmNlfTt1LmdldEluc3RhbmNlPWgsd2luZG93LmdldEluc3RhbmNlPWgsd2luZG93LlBERlRyb249byx3aW5kb3cuV2ViVmlld2VyPXUsdC5kZWZhdWx0PXV9XSl9KSk7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCBDU1NQcm9wZXJ0aWVzLCBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdmlld2VyLCB7IFdlYlZpZXdlckluc3RhbmNlIH0gZnJvbSBcIkBwZGZ0cm9uL3dlYnZpZXdlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHMge1xuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbiAgICBmaWxlTmFtZT86IHN0cmluZztcbiAgICBmaWxlUGF0aD86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZjxIVE1MRGl2RWxlbWVudCwgSW5wdXRQcm9wcz4oKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCBpbm5lclJlZiA9IHVzZVJlZjxhbnk+KCk7XG4gICAgY29uc3QgW2luc3RhbmNlLCBzZXRJbnN0YW5jZV0gPSB1c2VTdGF0ZTxudWxsIHwgV2ViVmlld2VySW5zdGFuY2U+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgdmlld2VyKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6IFwiL3dpZGdldHMvcmVzb3VyY2VzL2xpYlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5uZXJSZWYuY3VycmVudFxuICAgICAgICApLnRoZW4oaW5zdGFuY2UgPT4ge1xuICAgICAgICAgICAgc2V0SW5zdGFuY2UoaW5zdGFuY2UpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyBsb2FkIGRvY3VtZW50IGNvbWluZyBmcm9tIHRoZSBVUkwgYXR0cmlidXRlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGluc3RhbmNlICYmIHByb3BzLmZpbGVOYW1lICYmIHByb3BzLmZpbGVQYXRoKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHByb3BzLmZpbGVOYW1lLnN1YnN0cmluZyhwcm9wcy5maWxlTmFtZS5sYXN0SW5kZXhPZihcIi5cIikgKyAxKTtcbiAgICAgICAgICAgIC8vIGFsZXJ0KCdleHRlbnNpb246ICcrIGZpbGVOYW1lKTtcbiAgICAgICAgICAgIGluc3RhbmNlLmxvYWREb2N1bWVudChwcm9wcy5maWxlUGF0aCwgeyBleHRlbnNpb246IGZpbGVOYW1lIH0pO1xuICAgICAgICB9XG4gICAgfSwgW2luc3RhbmNlLCBwcm9wcy5maWxlTmFtZSwgcHJvcHMuZmlsZVBhdGhdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndlYnZpZXdlclwiXG4gICAgICAgICAgICByZWY9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZWYgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYoZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9IGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5uZXJSZWYuY3VycmVudCA9IGU7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3R5bGU9e3Byb3BzLnN0eWxlfVxuICAgICAgICA+PC9kaXY+XG4gICAgKTtcbn0pO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gdXNlSW50ZXJ2YWwoXG4gICAgZm46ICgpID0+IHZvaWQsXG4gICAgZGVsYXk6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgICAgaW1tZWRpYXRlPzogYm9vbGVhbjtcbiAgICB9XG4pOiB2b2lkIHtcbiAgICBjb25zdCBpbW1lZGlhdGUgPSBvcHRpb25zPy5pbW1lZGlhdGU7XG5cbiAgICBjb25zdCBmblJlZiA9IHVzZVJlZjwoKSA9PiB2b2lkPigpO1xuICAgIGZuUmVmLmN1cnJlbnQgPSBmbjtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdW5kZWZpbmVkIHx8IGRlbGF5ID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgICAgICAgIGZuUmVmLmN1cnJlbnQ/LigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgZm5SZWYuY3VycmVudD8uKCk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICB9O1xuICAgIH0sIFtkZWxheV0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VJbnRlcnZhbDtcbiIsImZ1bmN0aW9uIGdldEVuY2xvc2luZ1dpZGdldChyZWdpc3RyeTogYW55LCBlbGU6IGFueSkge1xuICAgIGNvbnN0IG9ianM6IGFueSA9IFtdO1xuICAgIGNvbnN0IHBlbmRpbmdEYXRhVmlldyA9IFtdO1xuICAgIGxldCBzdG9wID0gZmFsc2U7XG4gICAgd2hpbGUgKCFzdG9wKSB7XG4gICAgICAgIGlmIChlbGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJteC1kYXRhdmlld1wiKSkge1xuICAgICAgICAgICAgcGVuZGluZ0RhdGFWaWV3LnB1c2goZWxlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0WzFdLnNsaWNlKDgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGVsZS5wYXJlbnRFbGVtZW50LmNoaWxkRWxlbWVudENvdW50ID4gMSAmJlxuICAgICAgICAgICAgZWxlLnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZCAhPSBudWxsICYmXG4gICAgICAgICAgICBlbGUucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZShcIndpZGdldGlkXCIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlLnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ3aWRnZXRpZFwiKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGUucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZShcImRhdGEtbWVuZGl4LWlkXCIpKTtcblxuICAgICAgICAgICAgY29uc3QgdzEgPSByZWdpc3RyeS5ieUlkKGVsZS5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZ2V0QXR0cmlidXRlKFwid2lkZ2V0aWRcIikpO1xuICAgICAgICAgICAgbGV0IHByZSA9IGVsZS5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1tZW5kaXgtaWRcIilcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCIuXCIpXG4gICAgICAgICAgICAgICAgLnNsaWNlKDAsIC0xKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiLlwiKTtcblxuICAgICAgICAgICAgcGVuZGluZ0RhdGFWaWV3LmZvckVhY2goZHYgPT4ge1xuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGlmIChteC52ZXJzaW9uLnNwbGl0KFwiLlwiKVswXSA9PT0gXCI5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKHcxLl9zdG9yZUJhY2tlbmQuZ2V0JChgJHtwcmV9LiR7ZHZ9YCwgYG9iamVjdGAsIFwiKjtcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChteC52ZXJzaW9uLnNwbGl0KFwiLlwiKVswXSA9PT0gXCI4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2kgPSB3MS5fc3RvcmUuZW50cmllc1tge1wid2lkZ2V0SWRcIjpcIiR7cHJlfS4ke2R2fVwiLFwic2xvdFwiOlwib2JqZWN0XCJ9YF0uZ2V0JCgpO1xuICAgICAgICAgICAgICAgICAgICBvYmpzLnB1c2gob2kpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcIndpZGdldGlkXCIpKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcIndpZGdldGlkXCIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZS5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWVuZGl4LWlkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbGUgPSBlbGUucGFyZW50RWxlbWVudDtcblxuICAgICAgICBpZiAoZWxlLmdldEF0dHJpYnV0ZShcImRhdGEtbXgtcGxhY2Vob2xkZXJcIikpIHtcbiAgICAgICAgICAgIHN0b3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmpzO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlOiBhbnksIGNiOiAob2JqczogYW55W10pID0+IHZvaWQpID0+IHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICB3aW5kb3cucmVxdWlyZShbXCJkaWppdC9yZWdpc3RyeVwiXSwgKHJlZ2lzdHJ5OiBhbnkpID0+IHtcbiAgICAgICAgY2IoZ2V0RW5jbG9zaW5nV2lkZ2V0KHJlZ2lzdHJ5LCBlbGUpKTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBSZWZPYmplY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSBcIi4vdXNlSW50ZXJ2YWxcIjtcbmltcG9ydCB1dGlsIGZyb20gXCIuL3V0aWxcIjtcblxuZXhwb3J0IGNvbnN0IHVzZU14Q29udGV4dCA9IChyZWY6IFJlZk9iamVjdDxhbnk+KSA9PiB7XG4gICAgY29uc3QgW29ianMsIHNldE9ianNdID0gdXNlU3RhdGU8YW55W10+KCk7XG5cbiAgICBjb25zdCBbaW50ZXJ2YWwsIHNldEludGVydmFsXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KDEwMDApO1xuXG4gICAgdXNlSW50ZXJ2YWwoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGlmIChyZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHNldEludGVydmFsKG51bGwpO1xuICAgICAgICAgICAgICAgIHV0aWwocmVmLmN1cnJlbnQsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRPYmpzKGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpbnRlcnZhbCxcbiAgICAgICAgeyBpbW1lZGlhdGU6IHRydWUgfVxuICAgICk7XG5cbiAgICByZXR1cm4gb2Jqcztcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZhbHVlU3RhdHVzIH0gZnJvbSBcIm1lbmRpeFwiO1xuaW1wb3J0IFBERlZpZXdlciBmcm9tIFwiLi9jb21wb25lbnRzL1BERlZpZXdlclwiO1xuaW1wb3J0IHsgRmlsZVZpZXdlckNvbnRhaW5lclByb3BzIH0gZnJvbSBcIi4uL3R5cGluZ3MvRmlsZVZpZXdlclByb3BzXCI7XG5pbXBvcnQgXCIuL3VpL2luZGV4LnNjc3NcIjtcbmltcG9ydCB7IHVzZU14Q29udGV4dCB9IGZyb20gXCIuL2hvb2tzL3VzZU14Q29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxlVmlld2VyKHByb3BzOiBGaWxlVmlld2VyQ29udGFpbmVyUHJvcHMpIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWY8YW55PigpO1xuICAgIGNvbnN0IFtwYXRoLCBzZXRQYXRoXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKTtcbiAgICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKTtcblxuICAgIGNvbnN0IG9ianMgPSB1c2VNeENvbnRleHQocmVmKTtcbiAgICBjb25zb2xlLmxvZyhvYmpzLCAzMzMzKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAob2Jqcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cob2Jqc1swXS5kZXBlbmRPbigpKTtcbiAgICAgICAgfVxuICAgIH0sIFtvYmpzXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMudXJsQXR0cmlidXRlLnN0YXR1cyA9PT0gVmFsdWVTdGF0dXMuQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBzZXRQYXRoKHByb3BzLnVybEF0dHJpYnV0ZS52YWx1ZT8udG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BzLmZpbGVOYW1lLnN0YXR1cyA9PT0gVmFsdWVTdGF0dXMuQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBzZXRGaWxlTmFtZShwcm9wcy5maWxlTmFtZS52YWx1ZT8udG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9LCBbcHJvcHMuZmlsZU5hbWUsIHByb3BzLnVybEF0dHJpYnV0ZV0pO1xuICAgIHJldHVybiA8UERGVmlld2VyIHJlZj17cmVmfSBmaWxlTmFtZT17ZmlsZU5hbWV9IGZpbGVQYXRoPXtwYXRofSBzdHlsZT17cHJvcHMuc3R5bGV9IC8+O1xufVxuIl0sIm5hbWVzIjpbImUiLCJ0IiwibW9kdWxlIiwid2luZG93IiwibiIsIm8iLCJleHBvcnRzIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJfX2VzTW9kdWxlIiwiY3JlYXRlIiwiYmluZCIsImRlZmF1bHQiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiRnVuY3Rpb24iLCJhIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInRoZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiVHlwZUVycm9yIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJfZGVmZXJyZWRzIiwiX2ltbWVkaWF0ZUZuIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwicHJvbWlzZSIsInB1c2giLCJhcHBseSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIl91bmhhbmRsZWRSZWplY3Rpb25GbiIsInUiLCJzZXRUaW1lb3V0IiwiY2F0Y2giLCJmaW5hbGx5IiwiYWxsIiwiQXJyYXkiLCJzbGljZSIsInJhY2UiLCJjb25zb2xlIiwid2FybiIsImYiLCJzZWxmIiwiRXJyb3IiLCJQcm9taXNlIiwic2V0SW1tZWRpYXRlIiwiX2lkIiwiX2NsZWFyRm4iLCJjbGVhclRpbWVvdXQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsInVucmVmIiwicmVmIiwiZW5yb2xsIiwiX2lkbGVUaW1lb3V0SWQiLCJfaWRsZVRpbWVvdXQiLCJ1bmVucm9sbCIsIl91bnJlZkFjdGl2ZSIsImFjdGl2ZSIsIl9vblRpbWVvdXQiLCJjbGVhckltbWVkaWF0ZSIsImRvY3VtZW50IiwiZ2V0UHJvdG90eXBlT2YiLCJ0b1N0cmluZyIsInByb2Nlc3MiLCJuZXh0VGljayIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsIm9ubWVzc2FnZSIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJkYXRhIiwicG9ydDIiLCJjcmVhdGVFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsIk1hdGgiLCJyYW5kb20iLCJzb3VyY2UiLCJpbmRleE9mIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiY2FsbGJhY2siLCJhcmdzIiwiaCIsImNvbmNhdCIsInJ1biIsImZ1biIsImFycmF5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsInVtYXNrIiwibG9nIiwiZXJyb3IiLCJrZXlzIiwiZm9yRWFjaCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIlBERk5ldCIsInNraXBQREZOZXRXZWJWaWV3ZXJXYXJuaW5nIiwiTWFwIiwiV2ViVmlld2VyIiwic2V0IiwiaW5zdGFuY2UiLCJnZXRDb21wbGV0ZUluc3RhbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl92YWxpZGF0ZU9wdGlvbnMiLCJ1aSIsImh0bWw1UGF0aCIsImZ1bGxBUEkiLCJwZGZ0cm9uU2VydmVyIiwiZm9yY2VDbGllbnRTaWRlSW5pdCIsIm9wdGlvbnMiLCJPcHRpb25zIiwicGF0aCIsImVsZW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwibWVzc2FnZUhhbmRsZXIiLCJ0eXBlIiwibGljZW5zZUtleSIsImlkIiwiY29uZmlnIiwiX2NvcnJlY3RSZWxhdGl2ZVBhdGgiLCJhdXRvQ3JlYXRlIiwiZW5hYmxlQXp1cmVXb3JrYXJvdW5kIiwiaXNBZG1pblVzZXIiLCJpc1JlYWRPbmx5IiwiaW5pdGlhbERvYyIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9jcmVhdGUiLCJfdHJpZ2dlciIsImRpc3BhdGNoRXZlbnQiLCJyZXBsYWNlIiwic3BsaXQiLCJfY3JlYXRlVmlld2VyIiwiZW5hYmxlUmVkYWN0aW9uIiwiX25vdFN1cHBvcnRlZE1vYmlsZSIsInRleHRDb250ZW50Iiwic2VsZWN0ZWRUeXBlIiwiaXNNb2JpbGVEZXZpY2UiLCJkb2N1bWVudFR5cGUiLCJfdGVzdFdlYkFzc2VtYmx5IiwibW9iaWxlUmVkaXJlY3QiLCJfZ2V0SFRNTDVPcHRpb25zVVJMIiwibG9jYXRpb24iLCJ0b0xvd2VyQ2FzZSIsIl90ZXN0SFRNTDUiLCJ4ZG9tYWluUHJveHlVcmwiLCJpc1NhbWVPcmlnaW4iLCJkZWNvZGVVUklDb21wb25lbnQiLCJfdGVzdENPUlMiLCJfY3JlYXRlSFRNTDUiLCJfY3JlYXRlSFRNTDVNb2JpbGUiLCJfdmlld2VyTG9hZGVkIiwiY29udGVudFdpbmRvdyIsImVuY3J5cHRpb24iLCJkZWNyeXB0IiwiQ29yZUNvbnRyb2xzIiwiRW5jcnlwdGlvbiIsImRlY3J5cHRPcHRpb25zIiwiZG9jdW1lbnRJZCIsImV4dGVuc2lvbiIsImxvYWREb2N1bWVudCIsImRvY1ZpZXdlciIsImdldERvY3VtZW50IiwiX2lzUERGRXh0ZW5zaW9uIiwiX2lzT2ZmaWNlRXh0ZW5zaW9uIiwiYmFja2VuZFR5cGUiLCJwZGZCYWNrZW5kIiwicHJlbG9hZFdvcmtlciIsImZpbGVuYW1lIiwic3RyZWFtaW5nIiwiZXh0ZXJuYWxQYXRoIiwiZW5hYmxlQW5ub3RhdGlvbnMiLCJkaXNhYmxlZEVsZW1lbnRzIiwiam9pbiIsInNlcnZlclVybCIsInNlcnZlclVybEhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiY3NzIiwiZGlzYWJsZUkxOG4iLCJlbmFibGVPZmZsaW5lTW9kZSIsInN0YXJ0T2ZmbGluZSIsImVuYWJsZVJlYWRPbmx5TW9kZSIsImhpZGVBbm5vdGF0aW9uUGFuZWwiLCJhbm5vdGF0aW9uVXNlciIsImFubm90YXRpb25BZG1pbiIsImN1c3RvbSIsInNob3dMb2NhbEZpbGVQaWNrZXIiLCJlbmFibGVGaWxlUGlja2VyIiwiZW5hYmxlTWVhc3VyZW1lbnQiLCJzaG93VG9vbGJhckNvbnRyb2wiLCJzaG93UGFnZUhpc3RvcnlCdXR0b25zIiwibm90ZXNJbkxlZnRQYW5lbCIsInVybCIsImF6dXJlV29ya2Fyb3VuZCIsInVzZURvd25sb2FkZXIiLCJkaXNhYmxlV2Vic29ja2V0cyIsImxvYWRBc1BERiIsIndvcmtlclRyYW5zcG9ydFByb21pc2UiLCJhY2Nlc3NpYmxlTW9kZSIsImRpc2FibGVMb2dzIiwiZW5hYmxlVmlld1N0YXRlQW5ub3RhdGlvbnMiLCJkaXNhYmxlRmxhdHRlbmVkQW5ub3RhdGlvbnMiLCJzZWxlY3RBbm5vdGF0aW9uT25DcmVhdGlvbiIsInNldEluc3RhbmNlRGF0YSIsImlmcmFtZSIsInNyYyIsImZyYW1lQm9yZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhc3NldFBhdGgiLCJsb2FkTGlzdGVuZXIiLCJyZWFkZXJDb250cm9sIiwiZnJhbWVib3JkZXIiLCJkaXNwb3NlIiwiZGVsZXRlIiwiY2xvc2VEb2N1bWVudCIsImdldEluc3RhbmNlIiwic2V0Q29tcGxldGVJbnN0YW5jZSIsImNvbXBsZXRlSW5zdGFuY2UiLCJnZXRTaWRlV2luZG93VmlzaWJpbGl0eSIsImdldFNob3dTaWRlV2luZG93Iiwic2V0U2lkZVdpbmRvd1Zpc2liaWxpdHkiLCJzZXRTaG93U2lkZVdpbmRvdyIsImdldFRvb2xiYXJWaXNpYmlsaXR5Iiwic2V0VG9vbGJhclZpc2liaWxpdHkiLCJnZXRDdXJyZW50UGFnZU51bWJlciIsInNldEN1cnJlbnRQYWdlTnVtYmVyIiwiZ2V0UGFnZUNvdW50IiwiZ2V0Wm9vbUxldmVsIiwic2V0Wm9vbUxldmVsIiwicm90YXRlQ2xvY2t3aXNlIiwicm90YXRlQ291bnRlckNsb2Nrd2lzZSIsImdldExheW91dE1vZGUiLCJEaXNwbGF5TW9kZXMiLCJTaW5nbGUiLCJMYXlvdXRNb2RlIiwiQ29udGludW91cyIsIkZhY2luZyIsIkZhY2luZ0NvbnRpbnVvdXMiLCJDb3ZlciIsIkZhY2luZ0NvdmVyQ29udGludW91cyIsIkNvdmVyRmFjaW5nIiwiRmFjaW5nQ292ZXIiLCJzZXRMYXlvdXRNb2RlIiwiZ2V0VG9vbE1vZGUiLCJzZXRUb29sTW9kZSIsImZpdFdpZHRoIiwic2V0Rml0TW9kZSIsIkZpdE1vZGUiLCJGaXRXaWR0aCIsImZpdEhlaWdodCIsImZpdFBhZ2UiLCJGaXRQYWdlIiwiZ2V0Rml0TW9kZSIsIkZpdEhlaWdodCIsIlpvb20iLCJ6b29tIiwiZ29Ub0ZpcnN0UGFnZSIsImdvVG9MYXN0UGFnZSIsImdvVG9OZXh0UGFnZSIsImdvVG9QcmV2UGFnZSIsImRvY0lkIiwic2VhcmNoVGV4dCIsInNldEFubm90YXRpb25Vc2VyIiwic2V0QWRtaW5Vc2VyIiwic2V0UmVhZE9ubHkiLCJkb3dubG9hZFhvZERvY3VtZW50Iiwib3BlbiIsInN0YXJ0UHJpbnRKb2IiLCJlbmRQcmludEpvYiIsInBhdGhuYW1lIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJ0ZXN0IiwiZ2V0Q29udGV4dCIsIldlYkFzc2VtYmx5IiwidmFsaWRhdGUiLCJfc3VwcG9ydHMiLCJYTUxIdHRwUmVxdWVzdCIsImlzSUUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJleGVjIiwicGFyc2VJbnQiLCJzY3JvbGxiYXJXaWR0aCIsIm1hdGNoIiwiY3NzVGV4dCIsImJvZHkiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwiaHJlZiIsImhvc3QiLCJwb3J0IiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInJ1bkluSWZyYW1lIiwicXVlcnlTZWxlY3RvciIsIiQiLCJwcmVsb2FkUERGV29ya2VyIiwiVG9vbE1vZGUiLCJBbm5vdGF0aW9uQ3JlYXRlQXJyb3ciLCJBbm5vdGF0aW9uQ3JlYXRlQ2FsbG91dCIsIkFubm90YXRpb25DcmVhdGVFbGxpcHNlIiwiQW5ub3RhdGlvbkNyZWF0ZUZyZWVIYW5kIiwiQW5ub3RhdGlvbkNyZWF0ZUZyZWVUZXh0IiwiQW5ub3RhdGlvbkNyZWF0ZUxpbmUiLCJBbm5vdGF0aW9uQ3JlYXRlUG9seWdvbiIsIkFubm90YXRpb25DcmVhdGVQb2x5Z29uQ2xvdWQiLCJBbm5vdGF0aW9uQ3JlYXRlUG9seWxpbmUiLCJBbm5vdGF0aW9uQ3JlYXRlUmVjdGFuZ2xlIiwiQW5ub3RhdGlvbkNyZWF0ZVNpZ25hdHVyZSIsIkFubm90YXRpb25DcmVhdGVTdGFtcCIsIkFubm90YXRpb25DcmVhdGVTdGlja3kiLCJBbm5vdGF0aW9uQ3JlYXRlVGV4dEhpZ2hsaWdodCIsIkFubm90YXRpb25DcmVhdGVUZXh0U3F1aWdnbHkiLCJBbm5vdGF0aW9uQ3JlYXRlVGV4dFN0cmlrZW91dCIsIkFubm90YXRpb25DcmVhdGVUZXh0VW5kZXJsaW5lIiwiQW5ub3RhdGlvbkVkaXQiLCJTZWFyY2hNb2RlIiwiQ2FzZVNlbnNpdGl2ZSIsIldob2xlV29yZCIsIlNlYXJjaFVwIiwiUGFnZVN0b3AiLCJQcm92aWRlUXVhZHMiLCJBbWJpZW50U3RyaW5nIiwiVXNlciIsInVzZXJuYW1lIiwiaXNBZG1pbiIsIlRvb2xzIiwiQW5ub3RhdGlvbnMiLCJQYXJ0UmV0cmlldmVycyIsIkFjdGlvbnMiLCJhbm5vdE1hbmFnZXIiLCJnZXRBbm5vdGF0aW9uTWFuYWdlciIsImlmcmFtZVdpbmRvdyIsImZpbHRlciIsIlBERlRyb24iLCJmb3J3YXJkUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSxDQUFDLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0NBQUMsRUFBcURDLGlCQUFlRCxDQUFDLEVBQWhCO0NBQTBKLENBQTdOLENBQThORSxNQUE5TixFQUFzTyxZQUFVO0NBQUMsU0FBTyxVQUFTSCxDQUFULEVBQVc7Q0FBQyxRQUFJQyxDQUFDLEdBQUMsRUFBTjs7Q0FBUyxhQUFTRyxDQUFULENBQVdDLENBQVgsRUFBYTtDQUFDLFVBQUdKLENBQUMsQ0FBQ0ksQ0FBRCxDQUFKLEVBQVEsT0FBT0osQ0FBQyxDQUFDSSxDQUFELENBQUQsQ0FB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
