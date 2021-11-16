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

import { forwardRef, useRef, useState, useEffect, createElement } from 'react';

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

var PDFViewer = forwardRef((props, ref) => {
    const innerRef = useRef();
    const [instance, setInstance] = useState(null);
    useEffect(() => {
        viewer({
            path: "/widgets/resources/lib"
        }, innerRef.current).then(instance => {
            setInstance(instance);
        });
    }, []);
    // load document coming from the URL attribute
    useEffect(() => {
        if (instance && props.fileName && props.filePath) {
            const fileName = props.fileName.substring(props.fileName.lastIndexOf(".") + 1);
            // alert('extension: '+ fileName);
            instance.loadDocument(props.filePath, { extension: fileName });
        }
    }, [instance, props.fileName, props.filePath]);
    return (createElement("div", { className: "webviewer", ref: e => {
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
    const fnRef = useRef();
    fnRef.current = fn;
    useEffect(() => {
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
    const [objs, setObjs] = useState();
    const [interval, setInterval] = useState(1000);
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
    const ref = useRef();
    const [path, setPath] = useState();
    const [fileName, setFileName] = useState();
    const objs = useMxContext(ref);
    console.log(objs, 3333);
    useEffect(() => {
        if (objs) {
            console.log(objs[0].dependOn());
        }
    }, [objs]);
    useEffect(() => {
        var _a, _b;
        if (props.urlAttribute.status === "available" /* Available */) {
            setPath((_a = props.urlAttribute.value) === null || _a === void 0 ? void 0 : _a.toString());
        }
        if (props.fileName.status === "available" /* Available */) {
            setFileName((_b = props.fileName.value) === null || _b === void 0 ? void 0 : _b.toString());
        }
    }, [props.fileName, props.urlAttribute]);
    return createElement(PDFViewer, { ref: ref, fileName: fileName, filePath: path, style: props.style });
}

export { FileViewer as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVZpZXdlci5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcGRmdHJvbi93ZWJ2aWV3ZXIvd2Vidmlld2VyLm1pbi5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BERlZpZXdlci50c3giLCIuLi8uLi8uLi8uLi8uLi9zcmMvaG9va3MvdXNlSW50ZXJ2YWwudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvaG9va3MvdXRpbC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9ob29rcy91c2VNeENvbnRleHQudHMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvRmlsZVZpZXdlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dCgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSx0KTtlbHNle3ZhciBuPXQoKTtmb3IodmFyIG8gaW4gbikoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czplKVtvXT1uW29dfX0od2luZG93LChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKG8pe2lmKHRbb10pcmV0dXJuIHRbb10uZXhwb3J0czt2YXIgaT10W29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtvXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyxuKSxpLmw9ITAsaS5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LG8pe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpvfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG89T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIobyksT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBpIGluIGUpbi5kKG8saSxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLGkpKTtyZXR1cm4gb30sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIi9cIixuKG4ucz0xKX0oW2Z1bmN0aW9uKGUsdCl7dmFyIG47bj1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtuPW58fG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2goZSl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX1lLmV4cG9ydHM9bn0sZnVuY3Rpb24oZSx0LG4pe24oMiksZS5leHBvcnRzPW4oNil9LGZ1bmN0aW9uKGUsdCxuKXsoZnVuY3Rpb24obyxpKXt2YXIgcixhO2Z1bmN0aW9uIHMoZSl7cmV0dXJuKHM9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfSFmdW5jdGlvbihvLGkpe1wib2JqZWN0XCI9PXModCkmJnZvaWQgMCE9PWU/aSgpOnZvaWQgMD09PShhPVwiZnVuY3Rpb25cIj09dHlwZW9mKHI9aSk/ci5jYWxsKHQsbix0LGUpOnIpfHwoZS5leHBvcnRzPWEpfSgwLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5jb25zdHJ1Y3RvcjtyZXR1cm4gdGhpcy50aGVuKChmdW5jdGlvbihuKXtyZXR1cm4gdC5yZXNvbHZlKGUoKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gbn0pKX0pLChmdW5jdGlvbihuKXtyZXR1cm4gdC5yZXNvbHZlKGUoKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gdC5yZWplY3Qobil9KSl9KSl9ZnVuY3Rpb24gdCgpe31mdW5jdGlvbiBuKGUpe2lmKCEodGhpcyBpbnN0YW5jZW9mIG4pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXdcIik7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwibm90IGEgZnVuY3Rpb25cIik7dGhpcy5fc3RhdGU9MCx0aGlzLl9oYW5kbGVkPSExLHRoaXMuX3ZhbHVlPXZvaWQgMCx0aGlzLl9kZWZlcnJlZHM9W10sbChlLHRoaXMpfWZ1bmN0aW9uIHIoZSx0KXtmb3IoOzM9PT1lLl9zdGF0ZTspZT1lLl92YWx1ZTswIT09ZS5fc3RhdGU/KGUuX2hhbmRsZWQ9ITAsbi5faW1tZWRpYXRlRm4oKGZ1bmN0aW9uKCl7dmFyIG49MT09PWUuX3N0YXRlP3Qub25GdWxmaWxsZWQ6dC5vblJlamVjdGVkO2lmKG51bGwhPT1uKXt2YXIgbzt0cnl7bz1uKGUuX3ZhbHVlKX1jYXRjaChlKXtyZXR1cm4gdm9pZCBjKHQucHJvbWlzZSxlKX1hKHQucHJvbWlzZSxvKX1lbHNlKDE9PT1lLl9zdGF0ZT9hOmMpKHQucHJvbWlzZSxlLl92YWx1ZSl9KSkpOmUuX2RlZmVycmVkcy5wdXNoKHQpfWZ1bmN0aW9uIGEoZSx0KXt0cnl7aWYodD09PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuXCIpO2lmKHQmJihcIm9iamVjdFwiPT1zKHQpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KSl7dmFyIG89dC50aGVuO2lmKHQgaW5zdGFuY2VvZiBuKXJldHVybiBlLl9zdGF0ZT0zLGUuX3ZhbHVlPXQsdm9pZCBkKGUpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG8pcmV0dXJuIHZvaWQgbChmdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbigpe2UuYXBwbHkodCxhcmd1bWVudHMpfX0obyx0KSxlKX1lLl9zdGF0ZT0xLGUuX3ZhbHVlPXQsZChlKX1jYXRjaCh0KXtjKGUsdCl9fWZ1bmN0aW9uIGMoZSx0KXtlLl9zdGF0ZT0yLGUuX3ZhbHVlPXQsZChlKX1mdW5jdGlvbiBkKGUpezI9PT1lLl9zdGF0ZSYmMD09PWUuX2RlZmVycmVkcy5sZW5ndGgmJm4uX2ltbWVkaWF0ZUZuKChmdW5jdGlvbigpe2UuX2hhbmRsZWR8fG4uX3VuaGFuZGxlZFJlamVjdGlvbkZuKGUuX3ZhbHVlKX0pKTtmb3IodmFyIHQ9MCxvPWUuX2RlZmVycmVkcy5sZW5ndGg7bz50O3QrKylyKGUsZS5fZGVmZXJyZWRzW3RdKTtlLl9kZWZlcnJlZHM9bnVsbH1mdW5jdGlvbiBsKGUsdCl7dmFyIG49ITE7dHJ5e2UoKGZ1bmN0aW9uKGUpe258fChuPSEwLGEodCxlKSl9KSwoZnVuY3Rpb24oZSl7bnx8KG49ITAsYyh0LGUpKX0pKX1jYXRjaChlKXtpZihuKXJldHVybjtuPSEwLGModCxlKX19dmFyIHU9c2V0VGltZW91dDtuLnByb3RvdHlwZS5jYXRjaD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy50aGVuKG51bGwsZSl9LG4ucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oZSxuKXt2YXIgbz1uZXcgdGhpcy5jb25zdHJ1Y3Rvcih0KTtyZXR1cm4gcih0aGlzLG5ldyBmdW5jdGlvbihlLHQsbil7dGhpcy5vbkZ1bGZpbGxlZD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6bnVsbCx0aGlzLm9uUmVqZWN0ZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Om51bGwsdGhpcy5wcm9taXNlPW59KGUsbixvKSksb30sbi5wcm90b3R5cGUuZmluYWxseT1lLG4uYWxsPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgbigoZnVuY3Rpb24odCxuKXtmdW5jdGlvbiBvKGUsYSl7dHJ5e2lmKGEmJihcIm9iamVjdFwiPT1zKGEpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhKSl7dmFyIGM9YS50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGMpcmV0dXJuIHZvaWQgYy5jYWxsKGEsKGZ1bmN0aW9uKHQpe28oZSx0KX0pLG4pfWlbZV09YSwwPT0tLXImJnQoaSl9Y2F0Y2goZSl7bihlKX19aWYoIWV8fHZvaWQgMD09PWUubGVuZ3RoKXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlLmFsbCBhY2NlcHRzIGFuIGFycmF5XCIpO3ZhciBpPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUpO2lmKDA9PT1pLmxlbmd0aClyZXR1cm4gdChbXSk7Zm9yKHZhciByPWkubGVuZ3RoLGE9MDtpLmxlbmd0aD5hO2ErKylvKGEsaVthXSl9KSl9LG4ucmVzb2x2ZT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJvYmplY3RcIj09cyhlKSYmZS5jb25zdHJ1Y3Rvcj09PW4/ZTpuZXcgbigoZnVuY3Rpb24odCl7dChlKX0pKX0sbi5yZWplY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBuKChmdW5jdGlvbih0LG4pe24oZSl9KSl9LG4ucmFjZT1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IG4oKGZ1bmN0aW9uKHQsbil7Zm9yKHZhciBvPTAsaT1lLmxlbmd0aDtpPm87bysrKWVbb10udGhlbih0LG4pfSkpfSxuLl9pbW1lZGlhdGVGbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvJiZmdW5jdGlvbihlKXtvKGUpfXx8ZnVuY3Rpb24oZSl7dShlLDApfSxuLl91bmhhbmRsZWRSZWplY3Rpb25Gbj1mdW5jdGlvbihlKXt2b2lkIDAhPT1jb25zb2xlJiZjb25zb2xlJiZjb25zb2xlLndhcm4oXCJQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246XCIsZSl9O3ZhciBmPWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYpcmV0dXJuIHNlbGY7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdylyZXR1cm4gd2luZG93O2lmKHZvaWQgMCE9PWkpcmV0dXJuIGk7dGhyb3cgRXJyb3IoXCJ1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3RcIil9KCk7XCJQcm9taXNlXCJpbiBmP2YuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseXx8KGYuUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseT1lKTpmLlByb21pc2U9bn0pKX0pLmNhbGwodGhpcyxuKDMpLnNldEltbWVkaWF0ZSxuKDApKX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihlKXt2YXIgbz12b2lkIDAhPT1lJiZlfHxcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZnx8d2luZG93LGk9RnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O2Z1bmN0aW9uIHIoZSx0KXt0aGlzLl9pZD1lLHRoaXMuX2NsZWFyRm49dH10LnNldFRpbWVvdXQ9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIoaS5jYWxsKHNldFRpbWVvdXQsbyxhcmd1bWVudHMpLGNsZWFyVGltZW91dCl9LHQuc2V0SW50ZXJ2YWw9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIoaS5jYWxsKHNldEludGVydmFsLG8sYXJndW1lbnRzKSxjbGVhckludGVydmFsKX0sdC5jbGVhclRpbWVvdXQ9dC5jbGVhckludGVydmFsPWZ1bmN0aW9uKGUpe2UmJmUuY2xvc2UoKX0sci5wcm90b3R5cGUudW5yZWY9ci5wcm90b3R5cGUucmVmPWZ1bmN0aW9uKCl7fSxyLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuX2NsZWFyRm4uY2FsbChvLHRoaXMuX2lkKX0sdC5lbnJvbGw9ZnVuY3Rpb24oZSx0KXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9dH0sdC51bmVucm9sbD1mdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZS5faWRsZVRpbWVvdXRJZCksZS5faWRsZVRpbWVvdXQ9LTF9LHQuX3VucmVmQWN0aXZlPXQuYWN0aXZlPWZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChlLl9pZGxlVGltZW91dElkKTt2YXIgdD1lLl9pZGxlVGltZW91dDt0Pj0wJiYoZS5faWRsZVRpbWVvdXRJZD1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2UuX29uVGltZW91dCYmZS5fb25UaW1lb3V0KCl9KSx0KSl9LG4oNCksdC5zZXRJbW1lZGlhdGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuc2V0SW1tZWRpYXRlfHx2b2lkIDAhPT1lJiZlLnNldEltbWVkaWF0ZXx8dGhpcyYmdGhpcy5zZXRJbW1lZGlhdGUsdC5jbGVhckltbWVkaWF0ZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5jbGVhckltbWVkaWF0ZXx8dm9pZCAwIT09ZSYmZS5jbGVhckltbWVkaWF0ZXx8dGhpcyYmdGhpcy5jbGVhckltbWVkaWF0ZX0pLmNhbGwodGhpcyxuKDApKX0sZnVuY3Rpb24oZSx0LG4peyhmdW5jdGlvbihlLHQpeyFmdW5jdGlvbihlLG4pe1widXNlIHN0cmljdFwiO2lmKCFlLnNldEltbWVkaWF0ZSl7dmFyIG8saSxyLGEscyxjPTEsZD17fSxsPSExLHU9ZS5kb2N1bWVudCxmPU9iamVjdC5nZXRQcm90b3R5cGVPZiYmT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpO2Y9ZiYmZi5zZXRUaW1lb3V0P2Y6ZSxcIltvYmplY3QgcHJvY2Vzc11cIj09PXt9LnRvU3RyaW5nLmNhbGwoZS5wcm9jZXNzKT9vPWZ1bmN0aW9uKGUpe3QubmV4dFRpY2soKGZ1bmN0aW9uKCl7cChlKX0pKX06IWZ1bmN0aW9uKCl7aWYoZS5wb3N0TWVzc2FnZSYmIWUuaW1wb3J0U2NyaXB0cyl7dmFyIHQ9ITAsbj1lLm9ubWVzc2FnZTtyZXR1cm4gZS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXt0PSExfSxlLnBvc3RNZXNzYWdlKFwiXCIsXCIqXCIpLGUub25tZXNzYWdlPW4sdH19KCk/ZS5NZXNzYWdlQ2hhbm5lbD8oKHI9bmV3IE1lc3NhZ2VDaGFubmVsKS5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cChlLmRhdGEpfSxvPWZ1bmN0aW9uKGUpe3IucG9ydDIucG9zdE1lc3NhZ2UoZSl9KTp1JiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gdS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpPyhpPXUuZG9jdW1lbnRFbGVtZW50LG89ZnVuY3Rpb24oZSl7dmFyIHQ9dS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3Qub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7cChlKSx0Lm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLGkucmVtb3ZlQ2hpbGQodCksdD1udWxsfSxpLmFwcGVuZENoaWxkKHQpfSk6bz1mdW5jdGlvbihlKXtzZXRUaW1lb3V0KHAsMCxlKX06KGE9XCJzZXRJbW1lZGlhdGUkXCIrTWF0aC5yYW5kb20oKStcIiRcIixzPWZ1bmN0aW9uKHQpe3Quc291cmNlPT09ZSYmXCJzdHJpbmdcIj09dHlwZW9mIHQuZGF0YSYmMD09PXQuZGF0YS5pbmRleE9mKGEpJiZwKCt0LmRhdGEuc2xpY2UoYS5sZW5ndGgpKX0sZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixzLCExKTplLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIscyksbz1mdW5jdGlvbih0KXtlLnBvc3RNZXNzYWdlKGErdCxcIipcIil9KSxmLnNldEltbWVkaWF0ZT1mdW5jdGlvbihlKXtcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiYoZT1uZXcgRnVuY3Rpb24oXCJcIitlKSk7Zm9yKHZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpLG49MDtuPHQubGVuZ3RoO24rKyl0W25dPWFyZ3VtZW50c1tuKzFdO3ZhciBpPXtjYWxsYmFjazplLGFyZ3M6dH07cmV0dXJuIGRbY109aSxvKGMpLGMrK30sZi5jbGVhckltbWVkaWF0ZT1ofWZ1bmN0aW9uIGgoZSl7ZGVsZXRlIGRbZV19ZnVuY3Rpb24gcChlKXtpZihsKXNldFRpbWVvdXQocCwwLGUpO2Vsc2V7dmFyIHQ9ZFtlXTtpZih0KXtsPSEwO3RyeXshZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jYWxsYmFjayxuPWUuYXJncztzd2l0Y2gobi5sZW5ndGgpe2Nhc2UgMDp0KCk7YnJlYWs7Y2FzZSAxOnQoblswXSk7YnJlYWs7Y2FzZSAyOnQoblswXSxuWzFdKTticmVhaztjYXNlIDM6dChuWzBdLG5bMV0sblsyXSk7YnJlYWs7ZGVmYXVsdDp0LmFwcGx5KHZvaWQgMCxuKX19KHQpfWZpbmFsbHl7aChlKSxsPSExfX19fX0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/dm9pZCAwPT09ZT90aGlzOmU6c2VsZil9KS5jYWxsKHRoaXMsbigwKSxuKDUpKX0sZnVuY3Rpb24oZSx0KXt2YXIgbixvLGk9ZS5leHBvcnRzPXt9O2Z1bmN0aW9uIHIoKXt0aHJvdyBuZXcgRXJyb3IoXCJzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkXCIpfWZ1bmN0aW9uIGEoKXt0aHJvdyBuZXcgRXJyb3IoXCJjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWRcIil9ZnVuY3Rpb24gcyhlKXtpZihuPT09c2V0VGltZW91dClyZXR1cm4gc2V0VGltZW91dChlLDApO2lmKChuPT09cnx8IW4pJiZzZXRUaW1lb3V0KXJldHVybiBuPXNldFRpbWVvdXQsc2V0VGltZW91dChlLDApO3RyeXtyZXR1cm4gbihlLDApfWNhdGNoKHQpe3RyeXtyZXR1cm4gbi5jYWxsKG51bGwsZSwwKX1jYXRjaCh0KXtyZXR1cm4gbi5jYWxsKHRoaXMsZSwwKX19fSFmdW5jdGlvbigpe3RyeXtuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDpyfWNhdGNoKGUpe249cn10cnl7bz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OmF9Y2F0Y2goZSl7bz1hfX0oKTt2YXIgYyxkPVtdLGw9ITEsdT0tMTtmdW5jdGlvbiBmKCl7bCYmYyYmKGw9ITEsYy5sZW5ndGg/ZD1jLmNvbmNhdChkKTp1PS0xLGQubGVuZ3RoJiZoKCkpfWZ1bmN0aW9uIGgoKXtpZighbCl7dmFyIGU9cyhmKTtsPSEwO2Zvcih2YXIgdD1kLmxlbmd0aDt0Oyl7Zm9yKGM9ZCxkPVtdOysrdTx0OyljJiZjW3VdLnJ1bigpO3U9LTEsdD1kLmxlbmd0aH1jPW51bGwsbD0hMSxmdW5jdGlvbihlKXtpZihvPT09Y2xlYXJUaW1lb3V0KXJldHVybiBjbGVhclRpbWVvdXQoZSk7aWYoKG89PT1hfHwhbykmJmNsZWFyVGltZW91dClyZXR1cm4gbz1jbGVhclRpbWVvdXQsY2xlYXJUaW1lb3V0KGUpO3RyeXtvKGUpfWNhdGNoKHQpe3RyeXtyZXR1cm4gby5jYWxsKG51bGwsZSl9Y2F0Y2godCl7cmV0dXJuIG8uY2FsbCh0aGlzLGUpfX19KGUpfX1mdW5jdGlvbiBwKGUsdCl7dGhpcy5mdW49ZSx0aGlzLmFycmF5PXR9ZnVuY3Rpb24gbSgpe31pLm5leHRUaWNrPWZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoLTEpO2lmKGFyZ3VtZW50cy5sZW5ndGg+MSlmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXRbbi0xXT1hcmd1bWVudHNbbl07ZC5wdXNoKG5ldyBwKGUsdCkpLDEhPT1kLmxlbmd0aHx8bHx8cyhoKX0scC5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dGhpcy5mdW4uYXBwbHkobnVsbCx0aGlzLmFycmF5KX0saS50aXRsZT1cImJyb3dzZXJcIixpLmJyb3dzZXI9ITAsaS5lbnY9e30saS5hcmd2PVtdLGkudmVyc2lvbj1cIlwiLGkudmVyc2lvbnM9e30saS5vbj1tLGkuYWRkTGlzdGVuZXI9bSxpLm9uY2U9bSxpLm9mZj1tLGkucmVtb3ZlTGlzdGVuZXI9bSxpLnJlbW92ZUFsbExpc3RlbmVycz1tLGkuZW1pdD1tLGkucHJlcGVuZExpc3RlbmVyPW0saS5wcmVwZW5kT25jZUxpc3RlbmVyPW0saS5saXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuW119LGkuYmluZGluZz1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZFwiKX0saS5jd2Q9ZnVuY3Rpb24oKXtyZXR1cm5cIi9cIn0saS5jaGRpcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWRcIil9LGkudW1hc2s9ZnVuY3Rpb24oKXtyZXR1cm4gMH19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCksbi5kKHQsXCJnZXRJbnN0YW5jZVwiLChmdW5jdGlvbigpe3JldHVybiBofSkpO3ZhciBvPXt9LGk9MDtcInVuZGVmaW5lZFwiPT10eXBlb2YgY29uc29sZSYmKHdpbmRvdy5jb25zb2xlPXtsb2c6ZnVuY3Rpb24oKXt9LHdhcm46ZnVuY3Rpb24oKXt9LGVycm9yOmZ1bmN0aW9uKCl7fX0pO3ZhciByPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPTE7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKylmb3IodmFyIHQ9T2JqZWN0LmtleXMoYXJndW1lbnRzW2VdKSxuPTA7bjx0Lmxlbmd0aDtuKyspYXJndW1lbnRzWzBdW3Rbbl1dPWFyZ3VtZW50c1tlXVt0W25dXTtyZXR1cm4gYXJndW1lbnRzWzBdfSxhPWZ1bmN0aW9uKGUpe3ZhciB0PVtdO3JldHVybiBlLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QucHVzaChlKX0pKSx0fSxzPWZ1bmN0aW9uKGUsdCl7dmFyIG47dHJ5e249bmV3IEN1c3RvbUV2ZW50KGUse2RldGFpbDp0LGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pfWNhdGNoKG8peyhuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIikpLmluaXRFdmVudChlLCEwLCEwKSxuLmRldGFpbD10fXJldHVybiBufTt3aW5kb3cuUERGTmV0JiYhby5za2lwUERGTmV0V2ViVmlld2VyV2FybmluZyYmY29uc29sZS53YXJuKFwiUERGTmV0LmpzIGFuZCBXZWJWaWV3ZXIuanMgaGF2ZSBiZWVuIGluY2x1ZGVkIGluIHRoZSBzYW1lIGNvbnRleHQuIFNlZSBodHRwczovL3d3dy5wZGZ0cm9uLmNvbS9rYl9zYW1lX2NvbnRleHQgZm9yIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIGNvdWxkIGJlIGFuIGVycm9yIGluIHlvdXIgYXBwbGljYXRpb24uXCIpO3ZhciBjPW5ldyBNYXAsZD1uZXcgTWFwO28uV2ViVmlld2VyPWZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcztpZihkLmdldCh0KSl0aHJvdyBuZXcgRXJyb3IoXCJUd28gaW5zdGFuY2VzIG9mIFdlYlZpZXdlciB3ZXJlIGNyZWF0ZWQgb24gdGhlIHNhbWUgSFRNTCBlbGVtZW50LiBQbGVhc2UgY3JlYXRlIGEgbmV3IGVsZW1lbnQgZm9yIGVhY2ggaW5zdGFuY2Ugb2YgV2ViVmlld2VyXCIpO2Quc2V0KHQsITApO3QuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsKGZ1bmN0aW9uIGUoKXtjLmdldCh0KS5pbnN0YW5jZT1uLmdldENvbXBsZXRlSW5zdGFuY2UoKSx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLGUpfSkpLHRoaXMuX3ZhbGlkYXRlT3B0aW9ucyhlKSxcImxlZ2FjeVwiPT09ZS51aSYmKGUuaHRtbDVQYXRoPVwiLi91aS1sZWdhY3kvaW5kZXguaHRtbFwiKSxlLmZ1bGxBUEkmJmUucGRmdHJvblNlcnZlciYmKGUuZm9yY2VDbGllbnRTaWRlSW5pdHx8Y29uc29sZS53YXJuKFwiVGhlIGZ1bGxBUEkgYW5kIHBkZnRyb25TZXJ2ZXIgb3B0aW9ucyBoYXZlIGJvdGggYmVlbiBzZXQgc28gdGhlIGZvcmNlQ2xpZW50U2lkZUluaXQgb3B0aW9uIGlzIG5vdyBlbmFibGVkLiBUaGlzIG1lYW5zIHRoYXQgV2ViVmlld2VyIHdpbGwgc3dpdGNoIHRvIGNsaWVudCBzaWRlIHJlbmRlcmluZyBhbmQgcHJvY2Vzc2luZyB0byBhbGxvdyB1c2Ugb2YgdGhlIGZ1bGwgQVBJLlwiKSxlLmZvcmNlQ2xpZW50U2lkZUluaXQ9ITApLHRoaXMub3B0aW9ucz1yKHt9LG8uV2ViVmlld2VyLk9wdGlvbnMsZSk7dmFyIGk9dGhpcy5vcHRpb25zLnBhdGgubGVuZ3RoLTE7aT4wJiZcIi9cIiE9PXRoaXMub3B0aW9ucy5wYXRoW2ldJiYodGhpcy5vcHRpb25zLnBhdGgrPVwiL1wiKSx0aGlzLm9wdGlvbnMuaHRtbDVQYXRoPXRoaXMub3B0aW9ucy5wYXRoK3RoaXMub3B0aW9ucy5odG1sNVBhdGgsdHx8Y29uc29sZS5lcnJvcihcIlZpZXdlckVsZW1lbnQgaXMgbm90IGRlZmluZWQuIFRoaXMgbWF5IGJlIGNhdXNlZCBieSBjYWxsaW5nIHRoZSBXZWJWaWV3ZXIgY29uc3RydWN0b3IgYmVmb3JlIHRoZSBET00gaXMgbG9hZGVkLCBvciBhbiBpbnZhbGlkIHNlbGVjdG9yLiBQbGVhc2Ugc2VlIGh0dHA6Ly9yLnBkZnRyb24uY29tL2d1aWRlcy9xdWljay1zdGFydCBmb3IgYW4gZXhhbXBsZS5cIiksdGhpcy5lbGVtZW50PXQsdGhpcy5lbGVtZW50LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCI7dmFyIGE9dGhpczt0aGlzLm1lc3NhZ2VIYW5kbGVyPWZ1bmN0aW9uKHQpe2lmKFwicmVxdWVzdGxcIj09PXQuZGF0YSYmdC5zb3VyY2UmJnQuc291cmNlLnBvc3RNZXNzYWdlKHt0eXBlOlwicmVzcG9uc2VsXCIsdmFsdWU6ZS5sfHxlLmxpY2Vuc2VLZXl9LFwiKlwiKSxcInJlcXVlc3RDb25maWdcIj09PXQuZGF0YS50eXBlJiZ0LmRhdGEuaWQ9PT1hLmlkJiZ0LnNvdXJjZSl7dmFyIG49ZS5jb25maWc/YS5fY29ycmVjdFJlbGF0aXZlUGF0aChlLmNvbmZpZyk6XCJcIjt0LnNvdXJjZS5wb3N0TWVzc2FnZSh7dHlwZTpcInJlc3BvbnNlQ29uZmlnXCIsdmFsdWU6bn0sXCIqXCIpfX0sd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsdGhpcy5tZXNzYWdlSGFuZGxlciwhMSksdGhpcy5vcHRpb25zLmF1dG9DcmVhdGUmJnRoaXMuY3JlYXRlKCl9O3ZhciBsPXtsaWNlbnNlS2V5OnZvaWQgMCxlbmFibGVBenVyZVdvcmthcm91bmQ6ITEsaXNBZG1pblVzZXI6ITEsaXNSZWFkT25seTohMX07by5XZWJWaWV3ZXIucHJvdG90eXBlPXt2ZXJzaW9uOlwiNy4xLjBcIixjcmVhdGU6ZnVuY3Rpb24oKXtpZih0aGlzLm9wdGlvbnMuaW5pdGlhbERvYyl7dmFyIGU9dGhpcy5fY29ycmVjdFJlbGF0aXZlUGF0aCh0aGlzLm9wdGlvbnMuaW5pdGlhbERvYyk7ZT1lbmNvZGVVUklDb21wb25lbnQoZSksdGhpcy5vcHRpb25zLmluaXRpYWxEb2M9ZSx0aGlzLl9jcmVhdGUoKX1lbHNlIHRoaXMuX2NyZWF0ZSgpfSxfY3JlYXRlOmZ1bmN0aW9uKCl7dGhpcy5pZD0rK2ksdm9pZCAwPT09dGhpcy5fdHJpZ2dlciYmKHRoaXMuX3RyaWdnZXI9ZnVuY3Rpb24oZSx0KXt2YXIgbj1zKGUsdCk7dGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobil9KTt2YXIgZT10aGlzLm9wdGlvbnMudHlwZS5yZXBsYWNlKFwiIFwiLFwiXCIpLnNwbGl0KFwiLFwiKTtlLmxlbmd0aDwxJiYoZVswXT1cImh0bWw1XCIpLHRoaXMuX2NyZWF0ZVZpZXdlcihlKX0sX3ZhbGlkYXRlT3B0aW9uczpmdW5jdGlvbihlKXtmb3IodmFyIHQ9T2JqZWN0LmtleXMoZSksbj0wO248dC5sZW5ndGg7bisrKXt2YXIgaT10W25dO2kgaW4gcih7fSxsLG8uV2ViVmlld2VyLk9wdGlvbnMpfHxjb25zb2xlLndhcm4oXCJcIi5jb25jYXQoaSxcIiBpcyBub3QgYSB2YWxpZCBvcHRpb24gbmFtZS4gU2VlIGh0dHA6Ly9yLnBkZnRyb24uY29tL2FwaS9vcHRpb25zX2FuY2hvciBmb3IgYWxsIGF2YWlsYWJsZSBvcHRpb25zLlwiKSl9IWUuZW5hYmxlUmVkYWN0aW9ufHxlLmZ1bGxBUEl8fGUucGRmdHJvblNlcnZlcnx8Y29uc29sZS53YXJuKFwiRnVsbEFQSSBvciBXZWJWaWV3ZXIgU2VydmVyIGlzIG5lZWRlZCB0byBhcHBseSByZWRhY3Rpb25zXCIpfSxfbm90U3VwcG9ydGVkTW9iaWxlOmZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPVwid2Vidmlld2VyLWJyb3dzZXItdW5zdXBwb3J0ZWRcIixlLnRleHRDb250ZW50PVwiUERGIGRvY3VtZW50IHZpZXdpbmcgaXMgbm90IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIuXCIsdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGUpfSxfY3JlYXRlVmlld2VyOmZ1bmN0aW9uKGUpe3ZhciB0LG49dGhpcztpZihuLnNlbGVjdGVkVHlwZT1udWxsLHRoaXMuaXNNb2JpbGVEZXZpY2UoKSl7aWYodGhpcy5vcHRpb25zLmRvY3VtZW50VHlwZSYmXCJ4b2RcIiE9PXRoaXMub3B0aW9ucy5kb2N1bWVudFR5cGUmJiF0aGlzLl90ZXN0V2ViQXNzZW1ibHkoKSlyZXR1cm4gdm9pZCB0aGlzLl9ub3RTdXBwb3J0ZWRNb2JpbGUoKTtpZihlPUFycmF5KFwiaHRtbDVNb2JpbGVcIiksbi5zZWxlY3RlZFR5cGU9XCJodG1sNU1vYmlsZVwiLHRoaXMub3B0aW9ucy5tb2JpbGVSZWRpcmVjdClyZXR1cm4gdD10aGlzLm9wdGlvbnMuaHRtbDVQYXRoK3RoaXMuX2dldEhUTUw1T3B0aW9uc1VSTCgpLHZvaWQod2luZG93LmxvY2F0aW9uPXQpfWZvcih2YXIgbz0hMSxpPSExLHI9MDtyPGUubGVuZ3RoO3IrKyl7aWYoXCJodG1sNW1vYmlsZVwiPT09ZVtyXS50b0xvd2VyQ2FzZSgpKXtpZih0aGlzLm9wdGlvbnMuZG9jdW1lbnRUeXBlJiZcInhvZFwiIT09dGhpcy5vcHRpb25zLmRvY3VtZW50VHlwZSYmIXRoaXMuX3Rlc3RXZWJBc3NlbWJseSgpKWNvbnRpbnVlO2lmKG89ITAsbi5fdGVzdEhUTUw1KCkpe2lmKHRoaXMub3B0aW9ucy5tb2JpbGVSZWRpcmVjdClyZXR1cm4gbi5zZWxlY3RlZFR5cGU9XCJodG1sNU1vYmlsZVwiLHQ9dGhpcy5vcHRpb25zLmh0bWw1UGF0aCt0aGlzLl9nZXRIVE1MNU9wdGlvbnNVUkwoKSx2b2lkKHdpbmRvdy5sb2NhdGlvbj10KTtpZih0aGlzLm9wdGlvbnMueGRvbWFpblByb3h5VXJsfHxuLmlzU2FtZU9yaWdpbihkZWNvZGVVUklDb21wb25lbnQobi5vcHRpb25zLmluaXRpYWxEb2MpKXx8bi5fdGVzdENPUlMoKSl7bi5zZWxlY3RlZFR5cGU9XCJodG1sNU1vYmlsZVwiO2JyZWFrfWk9ITB9fWlmKFwiaHRtbDVcIj09PWVbcl0udG9Mb3dlckNhc2UoKSYmKG89ITAsbi5fdGVzdEhUTUw1KCkpKXt2YXIgYT1uLmlzU2FtZU9yaWdpbihkZWNvZGVVUklDb21wb25lbnQobi5vcHRpb25zLmluaXRpYWxEb2MpKTtpZih0aGlzLm9wdGlvbnMueGRvbWFpblByb3h5VXJsfHxhfHxuLl90ZXN0Q09SUygpKXtuLnNlbGVjdGVkVHlwZT1cImh0bWw1XCI7YnJlYWt9aT0hMH19aWYoXCJodG1sNVwiPT09bi5zZWxlY3RlZFR5cGUpbi5fY3JlYXRlSFRNTDUoKTtlbHNlIGlmKFwiaHRtbDVNb2JpbGVcIj09PW4uc2VsZWN0ZWRUeXBlKW4uX2NyZWF0ZUhUTUw1TW9iaWxlKCk7ZWxzZXt2YXIgcztpZihpP3M9XCJUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBjcm9zcyBvcmlnaW4gcmVxdWVzdHMuIFBsZWFzZSBjb25maWd1cmUgeGRvbWFpbiB0byBzdXBwb3J0IENPUlMuXCI6byYmKHM9XCJQbGVhc2UgdXNlIGFuIEhUTUw1IGNvbXBhdGlibGUgYnJvd3Nlci5cIikscyl7dmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtjLmlkPVwid2Vidmlld2VyLWJyb3dzZXItdW5zdXBwb3J0ZWRcIixjLnRleHRDb250ZW50PXMsbi5lbGVtZW50LmFwcGVuZENoaWxkKGMpfX19LF92aWV3ZXJMb2FkZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0aGlzLl90cmlnZ2VyKFwicmVhZHlcIik7dHJ5e3ZhciBuPWUuY29udGVudFdpbmRvdztpZih2b2lkIDAhPT10aGlzLm9wdGlvbnMuZW5jcnlwdGlvbil7dmFyIG89ZGVjb2RlVVJJQ29tcG9uZW50KHRoaXMub3B0aW9ucy5pbml0aWFsRG9jKSxpPXtkZWNyeXB0Om4uQ29yZUNvbnRyb2xzLkVuY3J5cHRpb24uZGVjcnlwdCxkZWNyeXB0T3B0aW9uczp0aGlzLm9wdGlvbnMuZW5jcnlwdGlvbixkb2N1bWVudElkOnRoaXMub3B0aW9ucy5kb2N1bWVudElkLGV4dGVuc2lvbjpcInhvZFwifTt0aGlzLmxvYWREb2N1bWVudChvLGkpfW51bGw9PT10aGlzLmluc3RhbmNlLmRvY1ZpZXdlci5nZXREb2N1bWVudCgpP24uYWRkRXZlbnRMaXN0ZW5lcihcImRvY3VtZW50TG9hZGVkXCIsKGZ1bmN0aW9uKCl7dC5fdHJpZ2dlcihcImRvY3VtZW50TG9hZGVkXCIpfSkpOnRoaXMuX3RyaWdnZXIoXCJkb2N1bWVudExvYWRlZFwiKSxbXCJkaXNwbGF5TW9kZUNoYW5nZWRcIixcImxheW91dE1vZGVDaGFuZ2VkXCIsXCJ6b29tQ2hhbmdlZFwiLFwicGFnZUNoYW5nZWRcIixcImZpdE1vZGVDaGFuZ2VkXCIsXCJ0b29sTW9kZUNoYW5nZWRcIixcInJvdGF0aW9uQ2hhbmdlZFwiLFwiZmluaXNoZWRTYXZpbmdQREZcIixcImRvY3VtZW50TWVyZ2VkXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe24uYWRkRXZlbnRMaXN0ZW5lcihlLChmdW5jdGlvbihlKXt0Ll90cmlnZ2VyKGUudHlwZSxlLmRldGFpbCl9KSl9KSl9Y2F0Y2goZSl7Y29uc29sZS53YXJuKFwiVmlld2VyIGlzIG9uIGEgZGlmZmVyZW50IGRvbWFpbiwgdGhlIHByb21pc2UgZnJvbSBXZWJWaWV3ZXIgZnVuY3Rpb24gaXMgcmVqZWN0ZWQgYW5kIEFQSSBmdW5jdGlvbnMgd2lsbCBub3Qgd29yayBiZWNhdXNlIG9mIGNyb3NzIGRvbWFpbiBwZXJtaXNzaW9ucy4gU2VlIGh0dHA6Ly9yLnBkZnRyb24uY29tL2tiX2Nyb3NzX29yaWdpbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIil9fSxfaXNQREZFeHRlbnNpb246ZnVuY3Rpb24oZSl7dmFyIHQ9ITE7aWYoZSl7W1wiLnBkZlwiLFwiLnBuZ1wiLFwiLmpwZ1wiLFwianBlZ1wiXS5mb3JFYWNoKChmdW5jdGlvbihuKXtlPT09biYmKHQ9ITApfSkpfXJldHVybiB0fSxfaXNPZmZpY2VFeHRlbnNpb246ZnVuY3Rpb24oZSl7dmFyIHQ9ITE7aWYoZSl7W1wiLmRvY3hcIixcIi5kb2NcIixcIi5wcHR4XCJdLmZvckVhY2goKGZ1bmN0aW9uKG4pe2U9PT1uJiYodD0hMCl9KSl9cmV0dXJuIHR9LF9nZXRIVE1MNU9wdGlvbnNVUkw6ZnVuY3Rpb24oKXt2YXIgZSx0LG4sbz10aGlzLm9wdGlvbnMsaT1cIlwiO2lmKG8uaW5pdGlhbERvYyYmKGkrPVwiI2Q9XCIuY29uY2F0KG8uaW5pdGlhbERvYykpLHZvaWQgMD09PW8uYmFja2VuZFR5cGUmJihvLmJhY2tlbmRUeXBlPW8ucGRmQmFja2VuZCksby5kb2N1bWVudFR5cGUmJlwieG9kXCI9PT1vLmRvY3VtZW50VHlwZSYmKGU9by5kb2N1bWVudFR5cGUpLG8ucHJlbG9hZFdvcmtlciYmXCJ4b2RcIj09PW8ucHJlbG9hZFdvcmtlciYmKGU9by5wcmVsb2FkV29ya2VyKSxvLmV4dGVuc2lvbiYmKGU9by5leHRlbnNpb24pLGUmJihpKz1cIiZleHRlbnNpb249XCIuY29uY2F0KGUpKSxvLmRvY3VtZW50VHlwZSYmXCJ4b2RcIiE9PW8uZG9jdW1lbnRUeXBlJiYodD1vLmRvY3VtZW50VHlwZSksby5wcmVsb2FkV29ya2VyJiZcInhvZFwiIT09by5wcmVsb2FkV29ya2VyJiYodD1vLnByZWxvYWRXb3JrZXIpLHQmJihpKz1cIiZwcmVsb2FkV29ya2VyPVwiLmNvbmNhdCh0KSksby5iYWNrZW5kVHlwZSYmKGkrPVwiJnBkZj1cIi5jb25jYXQoby5iYWNrZW5kVHlwZSxcIiZvZmZpY2U9XCIpLmNvbmNhdChvLmJhY2tlbmRUeXBlKSksby5maWxlbmFtZSYmKGkrPVwiJmZpbGVuYW1lPVwiLmNvbmNhdChvLmZpbGVuYW1lKSksdm9pZCAwIT09by5zdHJlYW1pbmcmJihpKz1cIiZzdHJlYW1pbmc9XCIuY29uY2F0KG8uc3RyZWFtaW5nKSksby5leHRlcm5hbFBhdGgpe3ZhciByPXRoaXMuX2NvcnJlY3RSZWxhdGl2ZVBhdGgoby5leHRlcm5hbFBhdGgpO3I9ZW5jb2RlVVJJQ29tcG9uZW50KHIpLGkrPVwiJnA9XCIuY29uY2F0KHIpfWlmKG8uZW5jcnlwdGlvbiYmKGkrPVwiJmF1dG9fbG9hZD1mYWxzZVwiKSxvLmVuYWJsZUFubm90YXRpb25zJiYoaSs9XCImYT0xXCIpLG8uZGlzYWJsZWRFbGVtZW50cyl7dmFyIGE9ZW5jb2RlVVJJQ29tcG9uZW50KG8uZGlzYWJsZWRFbGVtZW50cy5qb2luKFwiLFwiKSk7aSs9XCImZGlzYWJsZWRFbGVtZW50cz1cIi5jb25jYXQoYSl9aWYoby5zZXJ2ZXJVcmwpe3ZhciBzPXRoaXMuX2NvcnJlY3RSZWxhdGl2ZVBhdGgoby5zZXJ2ZXJVcmwpO3M9ZW5jb2RlVVJJQ29tcG9uZW50KHMpLGkrPVwiJnNlcnZlcl91cmw9XCIuY29uY2F0KHMpfWlmKG8uc2VydmVyVXJsSGVhZGVycyYmKGkrPVwiJnNlcnZlclVybEhlYWRlcnM9XCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KG8uc2VydmVyVXJsSGVhZGVycykpKSxvLmRvY3VtZW50SWQmJihpKz1cIiZkaWQ9XCIuY29uY2F0KG8uZG9jdW1lbnRJZCkpLG8uY3NzKXt2YXIgYz10aGlzLl9jb3JyZWN0UmVsYXRpdmVQYXRoKG8uY3NzKTtjPWVuY29kZVVSSUNvbXBvbmVudChjKSxpKz1cIiZjc3M9XCIuY29uY2F0KGMpfShvLmRpc2FibGVJMThuJiYoaSs9XCImZGlzYWJsZUkxOG49MVwiKSxvLmVuYWJsZU9mZmxpbmVNb2RlJiYoaSs9XCImb2ZmbGluZT0xXCIpLG8uc3RhcnRPZmZsaW5lJiYoaSs9XCImc3RhcnRPZmZsaW5lPTFcIiksKG8uZW5hYmxlUmVhZE9ubHlNb2RlfHxvLmlzUmVhZE9ubHkpJiYoaSs9XCImcmVhZG9ubHk9MVwiKSxvLmhpZGVBbm5vdGF0aW9uUGFuZWwmJihpKz1cIiZoaWRlQW5ub3RhdGlvblBhbmVsPTFcIiksdm9pZCAwIT09by5hbm5vdGF0aW9uVXNlciYmKGkrPVwiJnVzZXI9XCIuY29uY2F0KG8uYW5ub3RhdGlvblVzZXIpKSx2b2lkIDA9PT1vLmFubm90YXRpb25BZG1pbiYmdm9pZCAwPT09by5pc0FkbWluVXNlcnx8KGkrPVwiJmFkbWluPVwiLmNvbmNhdChvLmFubm90YXRpb25BZG1pbnx8by5pc0FkbWluVXNlcj8xOjApKSx2b2lkIDAhPT1vLmN1c3RvbSYmKGkrPVwiJmN1c3RvbT1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KG8uY3VzdG9tKSkpLHZvaWQgMD09PW8uc2hvd0xvY2FsRmlsZVBpY2tlciYmdm9pZCAwPT09by5lbmFibGVGaWxlUGlja2VyfHwoaSs9XCImZmlsZXBpY2tlcj1cIi5jb25jYXQoby5zaG93TG9jYWxGaWxlUGlja2VyfHxvLmVuYWJsZUZpbGVQaWNrZXI/MTowKSksdm9pZCAwIT09by5mdWxsQVBJJiYoaSs9XCImcGRmbmV0PVwiLmNvbmNhdChvLmZ1bGxBUEk/MTowKSksdm9pZCAwIT09by5lbmFibGVSZWRhY3Rpb24mJihpKz1cIiZlbmFibGVSZWRhY3Rpb249XCIuY29uY2F0KG8uZW5hYmxlUmVkYWN0aW9uPzE6MCkpLHZvaWQgMCE9PW8uZW5hYmxlTWVhc3VyZW1lbnQmJihpKz1cIiZlbmFibGVNZWFzdXJlbWVudD1cIi5jb25jYXQoby5lbmFibGVNZWFzdXJlbWVudD8xOjApKSx2b2lkIDAhPT1vLnNob3dUb29sYmFyQ29udHJvbCYmKGkrPVwiJnRvb2xiYXI9XCIuY29uY2F0KG8uc2hvd1Rvb2xiYXJDb250cm9sP1widHJ1ZVwiOlwiZmFsc2VcIikpLHZvaWQgMCE9PW8uc2hvd1BhZ2VIaXN0b3J5QnV0dG9ucyYmKGkrPVwiJnBhZ2VIaXN0b3J5PVwiLmNvbmNhdChvLnNob3dQYWdlSGlzdG9yeUJ1dHRvbnM/MTowKSksdm9pZCAwIT09by5ub3Rlc0luTGVmdFBhbmVsJiYoaSs9XCImbm90ZXNJbkxlZnRQYW5lbD1cIi5jb25jYXQoby5ub3Rlc0luTGVmdFBhbmVsPzE6MCkpLHZvaWQgMCE9PW8ueGRvbWFpblByb3h5VXJsKSYmKG49XCJzdHJpbmdcIj09dHlwZW9mIG8ueGRvbWFpblByb3h5VXJsP3t1cmw6by54ZG9tYWluUHJveHlVcmx9Om8ueGRvbWFpblByb3h5VXJsLGkrPVwiJnhkb21haW5fdXJscz1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3JldHVybihvLmF6dXJlV29ya2Fyb3VuZHx8by5lbmFibGVBenVyZVdvcmthcm91bmQpJiYoaSs9XCImYXp1cmVXb3JrYXJvdW5kPTFcIiksby51c2VEb3dubG9hZGVyfHwoaSs9XCImdXNlRG93bmxvYWRlcj0wXCIpLG8uZGlzYWJsZVdlYnNvY2tldHMmJihpKz1cIiZkaXNhYmxlV2Vic29ja2V0cz0xXCIpLG8uZm9yY2VDbGllbnRTaWRlSW5pdCYmKGkrPVwiJmZvcmNlQ2xpZW50U2lkZUluaXQ9MVwiKSxvLmxvYWRBc1BERiYmKGkrPVwiJmxvYWRBc1BERj0xXCIpLHZvaWQgMCE9PW8ud29ya2VyVHJhbnNwb3J0UHJvbWlzZSYmKGkrPVwiJnVzZVNoYXJlZFdvcmtlcj1cIi5jb25jYXQoby53b3JrZXJUcmFuc3BvcnRQcm9taXNlP1widHJ1ZVwiOlwiZmFsc2VcIikpLHZvaWQgMCE9PW8ucGRmdHJvblNlcnZlciYmby5wZGZ0cm9uU2VydmVyJiYoaSs9XCImcGRmdHJvblNlcnZlcj1cIi5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KG8ucGRmdHJvblNlcnZlcikpKSx2b2lkIDAhPT1vLmFjY2Vzc2libGVNb2RlJiYoaSs9XCImYWNjZXNzaWJsZU1vZGU9XCIuY29uY2F0KG8uYWNjZXNzaWJsZU1vZGU/MTowKSksby5kaXNhYmxlTG9ncyYmKGkrPVwiJmRpc2FibGVMb2dzPTFcIiksby5lbmFibGVWaWV3U3RhdGVBbm5vdGF0aW9ucyYmKGkrPVwiJmVuYWJsZVZpZXdTdGF0ZUFubm90YXRpb25zPTFcIiksby5kaXNhYmxlRmxhdHRlbmVkQW5ub3RhdGlvbnMmJihpKz1cIiZkaXNhYmxlRmxhdHRlbmVkQW5ub3RhdGlvbnM9MVwiKSx2b2lkIDAhPT1vLnNlbGVjdEFubm90YXRpb25PbkNyZWF0aW9uJiYoaSs9XCImc2VsZWN0QW5ub3RhdGlvbk9uQ3JlYXRpb249XCIuY29uY2F0KG8uc2VsZWN0QW5ub3RhdGlvbk9uQ3JlYXRpb24/MTowKSksKGkrPVwiJmlkPVwiLmNvbmNhdCh0aGlzLmlkKSkubGVuZ3RoPjAmJlwiJlwiPT09aVswXSYmKGk9XCIjXCIuY29uY2F0KGkuc2xpY2UoMSkpKSxpfSxzZXRJbnN0YW5jZURhdGE6ZnVuY3Rpb24oZSl7Yy5zZXQodGhpcy5lbGVtZW50LHtpZnJhbWU6ZSxsOnRoaXMub3B0aW9ucy5sfHx0aGlzLm9wdGlvbnMubGljZW5zZUtleSx3b3JrZXJUcmFuc3BvcnRQcm9taXNlOnRoaXMub3B0aW9ucy53b3JrZXJUcmFuc3BvcnRQcm9taXNlfSl9LF9jcmVhdGVIVE1MNTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLm9wdGlvbnMuaHRtbDVQYXRoK3RoaXMuX2dldEhUTUw1T3B0aW9uc1VSTCgpLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTt0aGlzLnNldEluc3RhbmNlRGF0YShuKSxuLmlkPVwid2Vidmlld2VyLVwiLmNvbmNhdCh0aGlzLmlkKSxuLnNyYz10LG4udGl0bGU9XCJ3ZWJ2aWV3ZXJcIixuLmZyYW1lQm9yZGVyPTAsbi53aWR0aD1cIjEwMCVcIixuLmhlaWdodD1cIjEwMCVcIixuLnNldEF0dHJpYnV0ZShcImFsbG93ZnVsbHNjcmVlblwiLCEwKSxuLnNldEF0dHJpYnV0ZShcIndlYmtpdGFsbG93ZnVsbHNjcmVlblwiLCEwKSxuLnNldEF0dHJpYnV0ZShcIm1vemFsbG93ZnVsbHNjcmVlblwiLCEwKSx0aGlzLmlmcmFtZT1uLHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3ImJm4uc2V0QXR0cmlidXRlKFwiZGF0YS1iZ2NvbG9yXCIsdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvciksdGhpcy5vcHRpb25zLmFzc2V0UGF0aCYmbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFzc2V0cGF0aFwiLGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLm9wdGlvbnMuYXNzZXRQYXRoKSksdGhpcy5sb2FkTGlzdGVuZXI9ZnVuY3Rpb24oKXt2YXIgdD1lLmlmcmFtZTt0cnl7ZS5pbnN0YW5jZT10LmNvbnRlbnRXaW5kb3cucmVhZGVyQ29udHJvbCx2b2lkIDA9PT1lLmluc3RhbmNlP3QuY29udGVudFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidmlld2VyTG9hZGVkXCIsKGZ1bmN0aW9uKCl7ZS5pbnN0YW5jZT10LmNvbnRlbnRXaW5kb3cucmVhZGVyQ29udHJvbCxlLl92aWV3ZXJMb2FkZWQodCl9KSk6ZS5fdmlld2VyTG9hZGVkKHQpfWNhdGNoKG4pe2UuX3ZpZXdlckxvYWRlZCh0KX19LG4uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIix0aGlzLmxvYWRMaXN0ZW5lciksdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKG4pfSxfY3JlYXRlSFRNTDVNb2JpbGU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5vcHRpb25zLmh0bWw1UGF0aCt0aGlzLl9nZXRIVE1MNU9wdGlvbnNVUkwoKSxuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7dGhpcy5zZXRJbnN0YW5jZURhdGEobiksbi5pZD1cIndlYnZpZXdlci1cIi5jb25jYXQodGhpcy5pZCksbi5zcmM9dCxuLmZyYW1lYm9yZGVyPTAsdGhpcy5vcHRpb25zLmFzc2V0UGF0aCYmbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFzc2V0cGF0aFwiLGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLm9wdGlvbnMuYXNzZXRQYXRoKSksbi5zdHlsZS53aWR0aD1cIjEwMCVcIixuLnN0eWxlLmhlaWdodD1cIjEwMCVcIix0aGlzLmlmcmFtZT1uLHRoaXMubG9hZExpc3RlbmVyPWZ1bmN0aW9uKCl7dmFyIHQ9ZS5pZnJhbWU7dHJ5e2UuaW5zdGFuY2U9dC5jb250ZW50V2luZG93LnJlYWRlckNvbnRyb2wsdm9pZCAwPT09ZS5pbnN0YW5jZT90LmNvbnRlbnRXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInZpZXdlckxvYWRlZFwiLChmdW5jdGlvbigpe2UuaW5zdGFuY2U9dC5jb250ZW50V2luZG93LnJlYWRlckNvbnRyb2wsZS5fdmlld2VyTG9hZGVkKHQpfSkpOmUuX3ZpZXdlckxvYWRlZCh0KX1jYXRjaChuKXtlLl92aWV3ZXJMb2FkZWQodCl9fSxuLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsdGhpcy5sb2FkTGlzdGVuZXIpLHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChuKX0sZGlzcG9zZTpmdW5jdGlvbigpe2MuZGVsZXRlKHRoaXMuZWxlbWVudCksZC5kZWxldGUodGhpcy5lbGVtZW50KSx0aGlzLmluc3RhbmNlLmNsb3NlRG9jdW1lbnQoKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0aGlzLm1lc3NhZ2VIYW5kbGVyKSx0aGlzLmlmcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLHRoaXMubG9hZExpc3RlbmVyKSx0aGlzLmlmcmFtZT1udWxsfSxnZXRJbnN0YW5jZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmluc3RhbmNlfSxzZXRDb21wbGV0ZUluc3RhbmNlOmZ1bmN0aW9uKGUpe3RoaXMuY29tcGxldGVJbnN0YW5jZT1lfSxnZXRDb21wbGV0ZUluc3RhbmNlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmNvbXBsZXRlSW5zdGFuY2V9LGdldFNpZGVXaW5kb3dWaXNpYmlsaXR5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoKS5nZXRTaG93U2lkZVdpbmRvdygpfSxzZXRTaWRlV2luZG93VmlzaWJpbGl0eTpmdW5jdGlvbihlKXt0aGlzLmdldEluc3RhbmNlKCkuc2V0U2hvd1NpZGVXaW5kb3coZSl9LGdldFNob3dTaWRlV2luZG93OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0U2lkZVdpbmRvd1Zpc2liaWxpdHkoKX0sc2V0U2hvd1NpZGVXaW5kb3c6ZnVuY3Rpb24oZSl7dGhpcy5zZXRTaWRlV2luZG93VmlzaWJpbGl0eShlKX0sZ2V0VG9vbGJhclZpc2liaWxpdHk6ZnVuY3Rpb24oKXtjb25zb2xlLndhcm4oXCJVbnN1cHBvcnRlZCBtZXRob2QgZ2V0VG9vbGJhclZpc2liaWxpdHlcIil9LHNldFRvb2xiYXJWaXNpYmlsaXR5OmZ1bmN0aW9uKGUpe3RoaXMuZ2V0SW5zdGFuY2UoKS5zZXRUb29sYmFyVmlzaWJpbGl0eShlKX0sZ2V0Q3VycmVudFBhZ2VOdW1iZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRQYWdlTnVtYmVyKCl9LHNldEN1cnJlbnRQYWdlTnVtYmVyOmZ1bmN0aW9uKGUpe3RoaXMuZ2V0SW5zdGFuY2UoKS5zZXRDdXJyZW50UGFnZU51bWJlcihlKX0sZ2V0UGFnZUNvdW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoKS5nZXRQYWdlQ291bnQoKX0sZ2V0Wm9vbUxldmVsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoKS5nZXRab29tTGV2ZWwoKX0sc2V0Wm9vbUxldmVsOmZ1bmN0aW9uKGUpe3RoaXMuZ2V0SW5zdGFuY2UoKS5zZXRab29tTGV2ZWwoZSl9LHJvdGF0ZUNsb2Nrd2lzZTpmdW5jdGlvbigpe3RoaXMuZ2V0SW5zdGFuY2UoKS5yb3RhdGVDbG9ja3dpc2UoKX0scm90YXRlQ291bnRlckNsb2Nrd2lzZTpmdW5jdGlvbigpe3RoaXMuZ2V0SW5zdGFuY2UoKS5yb3RhdGVDb3VudGVyQ2xvY2t3aXNlKCl9LGdldExheW91dE1vZGU6ZnVuY3Rpb24oKXt2YXIgZSx0PXRoaXMuZ2V0SW5zdGFuY2UoKS5nZXRMYXlvdXRNb2RlKCksbj10aGlzLmlmcmFtZS5jb250ZW50V2luZG93LkNvcmVDb250cm9scy5EaXNwbGF5TW9kZXM7cmV0dXJuIHQ9PT1uLlNpbmdsZT9lPW8uV2ViVmlld2VyLkxheW91dE1vZGUuU2luZ2xlOnQ9PT1uLkNvbnRpbnVvdXM/ZT1vLldlYlZpZXdlci5MYXlvdXRNb2RlLkNvbnRpbnVvdXM6dD09PW4uRmFjaW5nP2U9by5XZWJWaWV3ZXIuTGF5b3V0TW9kZS5GYWNpbmc6dD09PW4uRmFjaW5nQ29udGludW91cz9lPW8uV2ViVmlld2VyLkxheW91dE1vZGUuRmFjaW5nQ29udGludW91czp0PT09bi5Db3Zlcj9lPW8uV2ViVmlld2VyLkxheW91dE1vZGUuRmFjaW5nQ292ZXJDb250aW51b3VzOnQ9PT1uLkNvdmVyRmFjaW5nJiYoZT1vLldlYlZpZXdlci5MYXlvdXRNb2RlLkZhY2luZ0NvdmVyKSxlfSxzZXRMYXlvdXRNb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuaWZyYW1lLmNvbnRlbnRXaW5kb3cuQ29yZUNvbnRyb2xzLkRpc3BsYXlNb2RlcyxuPXQuQ29udGludW91cztlPT09by5XZWJWaWV3ZXIuTGF5b3V0TW9kZS5TaW5nbGU/bj10LlNpbmdsZTplPT09by5XZWJWaWV3ZXIuTGF5b3V0TW9kZS5Db250aW51b3VzP249dC5Db250aW51b3VzOmU9PT1vLldlYlZpZXdlci5MYXlvdXRNb2RlLkZhY2luZz9uPXQuRmFjaW5nOmU9PT1vLldlYlZpZXdlci5MYXlvdXRNb2RlLkZhY2luZ0NvbnRpbnVvdXM/bj10LkZhY2luZ0NvbnRpbnVvdXM6ZT09PW8uV2ViVmlld2VyLkxheW91dE1vZGUuRmFjaW5nQ292ZXI/bj10LkNvdmVyRmFjaW5nOmU9PT1vLldlYlZpZXdlci5MYXlvdXRNb2RlLkZhY2luZ0NvdmVyQ29udGludW91cyYmKG49dC5Db3ZlciksdGhpcy5nZXRJbnN0YW5jZSgpLnNldExheW91dE1vZGUobil9LGdldFRvb2xNb2RlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2UoKS5nZXRUb29sTW9kZSgpfSxzZXRUb29sTW9kZTpmdW5jdGlvbihlKXt0aGlzLmdldEluc3RhbmNlKCkuc2V0VG9vbE1vZGUoZSl9LGZpdFdpZHRoOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5nZXRJbnN0YW5jZSgpLmRvY1ZpZXdlcjtlLnNldEZpdE1vZGUoZS5GaXRNb2RlLkZpdFdpZHRoKX0sZml0SGVpZ2h0OmZ1bmN0aW9uKCl7fSxmaXRQYWdlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5nZXRJbnN0YW5jZSgpLmRvY1ZpZXdlcjtlLnNldEZpdE1vZGUoZS5GaXRNb2RlLkZpdFBhZ2UpfSxnZXRGaXRNb2RlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5nZXRJbnN0YW5jZSgpLmdldEZpdE1vZGUoKSx0PXRoaXMuZ2V0SW5zdGFuY2UoKS5kb2NWaWV3ZXIuRml0TW9kZTtzd2l0Y2goZSl7Y2FzZSB0LkZpdFdpZHRoOnJldHVybiBvLldlYlZpZXdlci5GaXRNb2RlLkZpdFdpZHRoO2Nhc2UgdC5GaXRIZWlnaHQ6cmV0dXJuIG8uV2ViVmlld2VyLkZpdE1vZGUuRml0SGVpZ2h0O2Nhc2UgdC5GaXRQYWdlOnJldHVybiBvLldlYlZpZXdlci5GaXRNb2RlLkZpdFBhZ2U7Y2FzZSB0Llpvb206cmV0dXJuIG8uV2ViVmlld2VyLkZpdE1vZGUuWm9vbTtkZWZhdWx0OmNvbnNvbGUud2FybihcIlVuc3VwcG9ydGVkIGZpdCBtb2RlXCIpfX0sc2V0Rml0TW9kZTpmdW5jdGlvbihlKXtlPT09by5XZWJWaWV3ZXIuRml0TW9kZS5GaXRXaWR0aD90aGlzLmZpdFdpZHRoKCk6ZT09PW8uV2ViVmlld2VyLkZpdE1vZGUuRml0SGVpZ2h0P3RoaXMuZml0SGVpZ2h0KCk6ZT09PW8uV2ViVmlld2VyLkZpdE1vZGUuRml0UGFnZT90aGlzLmZpdFBhZ2UoKTplPT09by5XZWJWaWV3ZXIuRml0TW9kZS5ab29tP3RoaXMuem9vbSgpOmNvbnNvbGUud2FybihcIlVuc3VwcG9ydGVkIGZpdCBtb2RlOiBcIi5jb25jYXQoZSkpfSx6b29tOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5nZXRJbnN0YW5jZSgpLmRvY1ZpZXdlcjtlLnNldEZpdE1vZGUoZS5GaXRNb2RlLlpvb20pfSxnb1RvRmlyc3RQYWdlOmZ1bmN0aW9uKCl7dGhpcy5nZXRJbnN0YW5jZSgpLmdvVG9GaXJzdFBhZ2UoKX0sZ29Ub0xhc3RQYWdlOmZ1bmN0aW9uKCl7dGhpcy5nZXRJbnN0YW5jZSgpLmdvVG9MYXN0UGFnZSgpfSxnb1RvTmV4dFBhZ2U6ZnVuY3Rpb24oKXt0aGlzLmdldEluc3RhbmNlKCkuZ29Ub05leHRQYWdlKCl9LGdvVG9QcmV2UGFnZTpmdW5jdGlvbigpe3RoaXMuZ2V0SW5zdGFuY2UoKS5nb1RvUHJldlBhZ2UoKX0sbG9hZERvY3VtZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxuPXtzdHJlYW1pbmc6dGhpcy5vcHRpb25zLnN0cmVhbWluZ30sbz1yKHt9LG4sdCk7dm9pZCAwIT09by5kb2N1bWVudElkJiYodGhpcy5nZXRJbnN0YW5jZSgpLmRvY0lkPW8uZG9jdW1lbnRJZCksdGhpcy5nZXRJbnN0YW5jZSgpLmxvYWREb2N1bWVudCh0aGlzLl9jb3JyZWN0UmVsYXRpdmVQYXRoKGUpLG8pfSxzZWFyY2hUZXh0OmZ1bmN0aW9uKGUsdCl7dmFyIG49MCxvPXQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG8mJihvPXQuc3BsaXQoXCIsXCIpKSx2b2lkIDAhPT1vKWZvcih2YXIgaT0wO2k8by5sZW5ndGg7aSsrKVwiQ2FzZVNlbnNpdGl2ZVwiPT09b1tpXT9uKz0xOlwiV2hvbGVXb3JkXCI9PT1vW2ldP24rPTI6XCJTZWFyY2hVcFwiPT09b1tpXT9uKz00OlwiUGFnZVN0b3BcIj09PW9baV0/bis9ODpcIlByb3ZpZGVRdWFkc1wiPT09b1tpXT9uKz0xNjpcIkFtYmllbnRTdHJpbmdcIj09PW9baV0mJihuKz0zMik7dm9pZCAwPT09dD90aGlzLmdldEluc3RhbmNlKCkuc2VhcmNoVGV4dChlKTp0aGlzLmdldEluc3RhbmNlKCkuc2VhcmNoVGV4dChlLG4pfSxzZXRBbm5vdGF0aW9uVXNlcjpmdW5jdGlvbihlKXt0aGlzLmdldEluc3RhbmNlKCkuc2V0QW5ub3RhdGlvblVzZXIoZSl9LHNldEFkbWluVXNlcjpmdW5jdGlvbihlKXt0aGlzLmdldEluc3RhbmNlKCkuc2V0QWRtaW5Vc2VyKGUpfSxzZXRSZWFkT25seTpmdW5jdGlvbihlKXt0aGlzLmdldEluc3RhbmNlKCkuc2V0UmVhZE9ubHkoZSl9LGRvd25sb2FkWG9kRG9jdW1lbnQ6ZnVuY3Rpb24oKXtpZihcInhvZFwiPT09dGhpcy5kb2N1bWVudFR5cGUpe3ZhciBlPWRlY29kZVVSSUNvbXBvbmVudCh0aGlzLm9wdGlvbnMuaW5pdGlhbERvYyk7d2luZG93Lm9wZW4oZSl9ZWxzZSBjb25zb2xlLndhcm4oXCJVbnN1cHBvcnRlZCBtZXRob2QgZm9yIHRoaXMgZG9jdW1lbnQgdHlwZVwiKX0sc3RhcnRQcmludEpvYjpmdW5jdGlvbihlKXtcImh0bWw1XCI9PT10aGlzLnNlbGVjdGVkVHlwZT90aGlzLmdldEluc3RhbmNlKCkuc3RhcnRQcmludEpvYihlKTpjb25zb2xlLndhcm4oXCJVbnN1cHBvcnRlZCBtZXRob2Qgc3RhcnRQcmludEpvYlwiKX0sZW5kUHJpbnRKb2I6ZnVuY3Rpb24oKXtcImh0bWw1XCI9PT10aGlzLnNlbGVjdGVkVHlwZT90aGlzLmdldEluc3RhbmNlKCkuZW5kUHJpbnRKb2IoKTpjb25zb2xlLndhcm4oXCJVbnN1cHBvcnRlZCBtZXRob2QgZW5kUHJpbnRKb2JcIil9LF9jb3JyZWN0UmVsYXRpdmVQYXRoOmZ1bmN0aW9uKGUpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBlO3ZhciB0PXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdWJzdHIoMCx3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUubGFzdEluZGV4T2YoXCIvXCIpKTtyZXR1cm4vXihcXC98JTJGfFthLXowLTktXSs6KS9pLnRlc3QoZSk/ZTpcIlwiLmNvbmNhdCh0LFwiL1wiKS5jb25jYXQoZSl9LF90ZXN0SFRNTDU6ZnVuY3Rpb24oKXt0cnl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtyZXR1cm4gZSYmZS5nZXRDb250ZXh0KFwiMmRcIil9Y2F0Y2goZSl7cmV0dXJuITF9fSxfdGVzdFdlYkFzc2VtYmx5OmZ1bmN0aW9uKCl7cmV0dXJuISghd2luZG93LldlYkFzc2VtYmx5fHwhd2luZG93LldlYkFzc2VtYmx5LnZhbGlkYXRlKX0sX3N1cHBvcnRzOmZ1bmN0aW9uKGUpe2lmKGU9PT10aGlzLnNlbGVjdGVkVHlwZSlyZXR1cm4hMDtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKWlmKGFyZ3VtZW50c1t0XT09PXRoaXMuc2VsZWN0ZWRUeXBlKXJldHVybiEwO3JldHVybiExfSxfdGVzdENPUlM6ZnVuY3Rpb24oKXtyZXR1cm5cIlhNTEh0dHBSZXF1ZXN0XCJpbiB3aW5kb3cmJlwid2l0aENyZWRlbnRpYWxzXCJpbiBuZXcgWE1MSHR0cFJlcXVlc3R9LGlzSUU6ZnVuY3Rpb24oKXt2YXIgZT1uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksdD0vKG1zaWUpIChbXFx3Ll0rKS8uZXhlYyhlKXx8Lyh0cmlkZW50KSg/Oi4qPyBydjooW1xcdy5dKyl8KS8uZXhlYyhlKTtyZXR1cm4gdD9wYXJzZUludCh0WzJdLDEwKTp0fSxpc01vYmlsZURldmljZTpmdW5jdGlvbigpe3JldHVybiF0aGlzLmlzSUUoKSYmKDA9PT10aGlzLnNjcm9sbGJhcldpZHRoKCkmJm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2UvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmUvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSl8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RvdWNoL2kpfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvU2lsay9pKSl9LHNjcm9sbGJhcldpZHRoOmZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLnN0eWxlLmNzc1RleHQ9XCJ3aWR0aDoxMDBweDtoZWlnaHQ6MTAwcHg7b3ZlcmZsb3c6c2Nyb2xsICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTk5cHhcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpO3ZhciB0PWUub2Zmc2V0V2lkdGgtZS5jbGllbnRXaWR0aDtyZXR1cm4gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlKSx0fSxpc1NhbWVPcmlnaW46ZnVuY3Rpb24oZSl7dmFyIHQ9d2luZG93LmxvY2F0aW9uLG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7bi5ocmVmPWUsXCJcIj09PW4uaG9zdCYmKG4uaHJlZj1uLmhyZWYpO3ZhciBvPXdpbmRvdy5sb2NhdGlvbi5wb3J0LGk9bi5wb3J0O3JldHVyblwiaHR0cDpcIj09PW4ucHJvdG9jb2w/KGk9aXx8XCI4MFwiLG89b3x8XCI4MFwiKTpcImh0dHBzOlwiPT09bi5wcm90b2NvbCYmKGk9aXx8XCI0NDNcIixvPW98fFwiNDQzXCIpLG4uaG9zdG5hbWU9PT10Lmhvc3RuYW1lJiZuLnByb3RvY29sPT09dC5wcm90b2NvbCYmaT09PW99LHJ1bkluSWZyYW1lOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpLmNvbnRlbnRXaW5kb3csbj10aGlzLG89ZnVuY3Rpb24gbygpe24uZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlcIixvKSxlKHQsbi5nZXRJbnN0YW5jZSgpLHQuJCl9O3RoaXMuZ2V0SW5zdGFuY2UoKT9zZXRUaW1lb3V0KG8sMCk6dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLG8pfX0sby5XZWJWaWV3ZXIuT3B0aW9ucz17aW5pdGlhbERvYzp2b2lkIDAsYW5ub3RhdGlvbkFkbWluOnZvaWQgMCxpc0FkbWluVXNlcjp2b2lkIDAsYW5ub3RhdGlvblVzZXI6dm9pZCAwLGFzc2V0UGF0aDp2b2lkIDAsYXV0b0NyZWF0ZTohMCxhenVyZVdvcmthcm91bmQ6ITEsZW5hYmxlQXp1cmVXb3JrYXJvdW5kOiExLGJhY2tncm91bmRDb2xvcjp2b2lkIDAsYmFja2VuZFR5cGU6dm9pZCAwLGNzczp2b2lkIDAsY29uZmlnOnZvaWQgMCxjdXN0b206dm9pZCAwLGRvY3VtZW50SWQ6dm9pZCAwLGRvY3VtZW50VHlwZTp2b2lkIDAscHJlbG9hZFdvcmtlcjp2b2lkIDAsZXh0ZW5zaW9uOnZvaWQgMCxlbmFibGVBbm5vdGF0aW9uczohMCxmaWxlbmFtZTp2b2lkIDAsZGlzYWJsZUkxOG46ITEsZGlzYWJsZWRFbGVtZW50czp2b2lkIDAsZGlzYWJsZVdlYnNvY2tldHM6ITEsZW5hYmxlT2ZmbGluZU1vZGU6ITEsZW5hYmxlUmVhZE9ubHlNb2RlOiExLGlzUmVhZE9ubHk6ITEsZW5hYmxlUmVkYWN0aW9uOiExLGVuYWJsZU1lYXN1cmVtZW50OiExLGVuY3J5cHRpb246dm9pZCAwLGV4dGVybmFsUGF0aDp2b2lkIDAsaGlkZUFubm90YXRpb25QYW5lbDohMSxodG1sNVBhdGg6XCIuL3VpL2luZGV4Lmh0bWxcIixsOnZvaWQgMCxsaWNlbnNlS2V5OnZvaWQgMCxtb2JpbGVSZWRpcmVjdDohMSxwYXRoOlwiXCIscGRmQmFja2VuZDp2b2lkIDAscGRmdHJvblNlcnZlcjp2b2lkIDAsZnVsbEFQSTohMSxwcmVsb2FkUERGV29ya2VyOiEwLHNlcnZlclVybDp2b2lkIDAsc2VydmVyVXJsSGVhZGVyczp2b2lkIDAsc2hvd0xvY2FsRmlsZVBpY2tlcjohMSxlbmFibGVGaWxlUGlja2VyOiExLHNob3dQYWdlSGlzdG9yeUJ1dHRvbnM6ITAsc2hvd1Rvb2xiYXJDb250cm9sOnZvaWQgMCxzdGFydE9mZmxpbmU6ITEsc3RyZWFtaW5nOnZvaWQgMCx0eXBlOlwiaHRtbDVcIix1c2VEb3dubG9hZGVyOiEwLHdvcmtlclRyYW5zcG9ydFByb21pc2U6dm9pZCAwLHhkb21haW5Qcm94eVVybDp2b2lkIDAsdWk6dm9pZCAwLGZvcmNlQ2xpZW50U2lkZUluaXQ6ITEsbG9hZEFzUERGOiExLGFjY2Vzc2libGVNb2RlOnZvaWQgMCxkaXNhYmxlTG9nczohMSxlbmFibGVWaWV3U3RhdGVBbm5vdGF0aW9uczohMSxzZWxlY3RBbm5vdGF0aW9uT25DcmVhdGlvbjohMSxub3Rlc0luTGVmdFBhbmVsOiExLGRpc2FibGVGbGF0dGVuZWRBbm5vdGF0aW9uczohMX0sby5XZWJWaWV3ZXIuTGF5b3V0TW9kZT17Q29udGludW91czpcIkNvbnRpbnVvdXNcIixGYWNpbmdDb3ZlckNvbnRpbnVvdXM6XCJDb3ZlckNvbnRpbnVvdXNcIixGYWNpbmc6XCJGYWNpbmdcIixGYWNpbmdDb250aW51b3VzOlwiRmFjaW5nQ29udGludW91c1wiLEZhY2luZ0NvdmVyOlwiRmFjaW5nQ292ZXJcIixTaW5nbGU6XCJTaW5nbGVQYWdlXCJ9LG8uV2ViVmlld2VyLlRvb2xNb2RlPXtBbm5vdGF0aW9uQ3JlYXRlQXJyb3c6XCJBbm5vdGF0aW9uQ3JlYXRlQXJyb3dcIixBbm5vdGF0aW9uQ3JlYXRlQ2FsbG91dDpcIkFubm90YXRpb25DcmVhdGVDYWxsb3V0XCIsQW5ub3RhdGlvbkNyZWF0ZUVsbGlwc2U6XCJBbm5vdGF0aW9uQ3JlYXRlRWxsaXBzZVwiLEFubm90YXRpb25DcmVhdGVGcmVlSGFuZDpcIkFubm90YXRpb25DcmVhdGVGcmVlSGFuZFwiLEFubm90YXRpb25DcmVhdGVGcmVlVGV4dDpcIkFubm90YXRpb25DcmVhdGVGcmVlVGV4dFwiLEFubm90YXRpb25DcmVhdGVMaW5lOlwiQW5ub3RhdGlvbkNyZWF0ZUxpbmVcIixBbm5vdGF0aW9uQ3JlYXRlUG9seWdvbjpcIkFubm90YXRpb25DcmVhdGVQb2x5Z29uXCIsQW5ub3RhdGlvbkNyZWF0ZVBvbHlnb25DbG91ZDpcIkFubm90YXRpb25DcmVhdGVQb2x5Z29uQ2xvdWRcIixBbm5vdGF0aW9uQ3JlYXRlUG9seWxpbmU6XCJBbm5vdGF0aW9uQ3JlYXRlUG9seWxpbmVcIixBbm5vdGF0aW9uQ3JlYXRlUmVjdGFuZ2xlOlwiQW5ub3RhdGlvbkNyZWF0ZVJlY3RhbmdsZVwiLEFubm90YXRpb25DcmVhdGVTaWduYXR1cmU6XCJBbm5vdGF0aW9uQ3JlYXRlU2lnbmF0dXJlXCIsQW5ub3RhdGlvbkNyZWF0ZVN0YW1wOlwiQW5ub3RhdGlvbkNyZWF0ZVN0YW1wXCIsQW5ub3RhdGlvbkNyZWF0ZVN0aWNreTpcIkFubm90YXRpb25DcmVhdGVTdGlja3lcIixBbm5vdGF0aW9uQ3JlYXRlVGV4dEhpZ2hsaWdodDpcIkFubm90YXRpb25DcmVhdGVUZXh0SGlnaGxpZ2h0XCIsQW5ub3RhdGlvbkNyZWF0ZVRleHRTcXVpZ2dseTpcIkFubm90YXRpb25DcmVhdGVUZXh0U3F1aWdnbHlcIixBbm5vdGF0aW9uQ3JlYXRlVGV4dFN0cmlrZW91dDpcIkFubm90YXRpb25DcmVhdGVUZXh0U3RyaWtlb3V0XCIsQW5ub3RhdGlvbkNyZWF0ZVRleHRVbmRlcmxpbmU6XCJBbm5vdGF0aW9uQ3JlYXRlVGV4dFVuZGVybGluZVwiLEFubm90YXRpb25FZGl0OlwiQW5ub3RhdGlvbkVkaXRcIn0sby5XZWJWaWV3ZXIuRml0TW9kZT17Rml0SGVpZ2h0OlwiRml0SGVpZ2h0XCIsRml0UGFnZTpcIkZpdFBhZ2VcIixGaXRXaWR0aDpcIkZpdFdpZHRoXCIsWm9vbTpcIlpvb21cIn0sby5XZWJWaWV3ZXIuU2VhcmNoTW9kZT17Q2FzZVNlbnNpdGl2ZToxLFdob2xlV29yZDoyLFNlYXJjaFVwOjQsUGFnZVN0b3A6OCxQcm92aWRlUXVhZHM6MTYsQW1iaWVudFN0cmluZzozMn0sby5XZWJWaWV3ZXIuVXNlcj1mdW5jdGlvbihlLHQsbil7dGhpcy51c2VybmFtZT1lLHRoaXMuaXNBZG1pbj12b2lkIDAhPT10JiZ0LHRoaXMuaXNSZWFkT25seT12b2lkIDAhPT1uJiZufTt2YXIgdT1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24obixpKXtlLmw9ZS5sfHxlLmxpY2Vuc2VLZXksZS5henVyZVdvcmthcm91bmQ9ZS5henVyZVdvcmthcm91bmR8fGUuZW5hYmxlQXp1cmVXb3JrYXJvdW5kLGUuYW5ub3RhdGlvbkFkbWluPWUuYW5ub3RhdGlvbkFkbWlufHxlLmlzQWRtaW5Vc2VyLGUuZW5hYmxlUmVhZE9ubHlNb2RlPWUuZW5hYmxlUmVhZE9ubHlNb2RlfHxlLmlzUmVhZE9ubHksZS5zaG93TG9jYWxGaWxlUGlja2VyPWUuc2hvd0xvY2FsRmlsZVBpY2tlcnx8ZS5lbmFibGVGaWxlUGlja2VyO3QuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsKGZ1bmN0aW9uIGUoKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeVwiLGUpO3RyeXt2YXIgbz10LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIikuY29udGVudFdpbmRvdyxzPW8uVG9vbHM7aWYodm9pZCAwPT09cylyZXR1cm4gaShcIlZpZXdlciBpc24ndCBpbnN0YW50aWF0ZWQgY29ycmVjdGx5LiBJdCBjb3VsZCBiZSBjYXVzZWQgYnkgdGhlICdwYXRoJyBvcHRpb24gaW4gdGhlIFdlYlZpZXdlciBjb25zdHJ1Y3RvciBub3QgYmVpbmcgZGVmaW5lZCBjb3JyZWN0bHkuIFRoZSAncGF0aCcgb3B0aW9uIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgSFRNTCBmaWxlIHlvdSdyZSBsb2FkaW5nIHRoZSBzY3JpcHQgb24gYW5kIHRoZSBsaWIgZm9sZGVyIG5lZWRzIHRvIGJlIHB1YmxpY2x5IGFjY2Vzc2libGUuXCIpO3ZhciBjPWEuZ2V0SW5zdGFuY2UoKSxkPXIoe30sYyx7ZGlzcG9zZTphLmRpc3Bvc2UuYmluZChhKSxUb29sczpzLEFubm90YXRpb25zOm8uQW5ub3RhdGlvbnMsQ29yZUNvbnRyb2xzOm8uQ29yZUNvbnRyb2xzLFBhcnRSZXRyaWV2ZXJzOm8uQ29yZUNvbnRyb2xzLlBhcnRSZXRyaWV2ZXJzLEFjdGlvbnM6by5BY3Rpb25zLFBERk5ldDpvLlBERk5ldCxhbm5vdE1hbmFnZXI6Yy5kb2NWaWV3ZXIuZ2V0QW5ub3RhdGlvbk1hbmFnZXIoKSxkb2NWaWV3ZXI6Yy5kb2NWaWV3ZXIsaWZyYW1lV2luZG93Om99KTthLnNldENvbXBsZXRlSW5zdGFuY2UoZCksbihkKX1jYXRjaChlKXtpKFwiVmlld2VyIGlzIG9uIGEgZGlmZmVyZW50IGRvbWFpbiwgdGhlIHByb21pc2UgZnJvbSBXZWJWaWV3ZXIgZnVuY3Rpb24gaXMgcmVqZWN0ZWQgYW5kIEFQSSBmdW5jdGlvbnMgd2lsbCBub3Qgd29yayBiZWNhdXNlIG9mIGNyb3NzIGRvbWFpbiBwZXJtaXNzaW9ucy4gU2VlIGh0dHBzOi8vd3d3LnBkZnRyb24uY29tL2tiX2Nyb3NzX29yaWdpbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIil9fSkpO3ZhciBhPW5ldyBvLldlYlZpZXdlcihlLHQpfSkpfSxmPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1hKGMpLG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtpZihvLmlmcmFtZT09PWUpcmV0dXJuIG99cmV0dXJuIG51bGx9O3UubD1mdW5jdGlvbihlKXt2YXIgdD1mKGUpO3JldHVybiB0JiZ0Lmx9LHUud29ya2VyVHJhbnNwb3J0UHJvbWlzZT1mdW5jdGlvbihlKXt2YXIgdD1mKGUpO3JldHVybiB0JiZ0LndvcmtlclRyYW5zcG9ydFByb21pc2V9O3ZhciBoPWZ1bmN0aW9uKGUpe3ZhciB0PWEoYyk7aWYoIXQubGVuZ3RofHwhdC5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmluc3RhbmNlfSkpLmxlbmd0aClyZXR1cm4gY29uc29sZS53YXJuKFwiV2ViVmlld2VyLmdldEluc3RhbmNlKCkgd2FzIGNhbGxlZCBiZWZvcmUgYW55IGluc3RhbmNlcyB3ZXJlIGF2YWlsYWJsZVwiKSxudWxsO2lmKHQubGVuZ3RoPjEmJiFlKXRocm93IG5ldyBFcnJvcihcIk1vcmUgdGhhbiBvbmUgaW5zdGFuY2Ugb2YgV2ViVmlld2VyIHdhcyBmb3VuZCwgYW5kIG5vIGVsZW1lbnQgd2FzIHBhc3NlZCBpbnRvIGdldEluc3RhbmNlKCkuIFBsZWFzZSBzcGVjaWZ5IHdoaWNoIGluc3RhbmNlIHlvdSB3YW50IHRvIGdldC5cIik7cmV0dXJuIGU/KGMuZ2V0KGUpfHx7fSkuaW5zdGFuY2U6KHRbMF18fHt9KS5pbnN0YW5jZX07dS5nZXRJbnN0YW5jZT1oLHdpbmRvdy5nZXRJbnN0YW5jZT1oLHdpbmRvdy5QREZUcm9uPW8sd2luZG93LldlYlZpZXdlcj11LHQuZGVmYXVsdD11fV0pfSkpOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgQ1NTUHJvcGVydGllcywgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHZpZXdlciwgeyBXZWJWaWV3ZXJJbnN0YW5jZSB9IGZyb20gXCJAcGRmdHJvbi93ZWJ2aWV3ZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJbnB1dFByb3BzIHtcbiAgICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG4gICAgZmlsZU5hbWU/OiBzdHJpbmc7XG4gICAgZmlsZVBhdGg/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWY8SFRNTERpdkVsZW1lbnQsIElucHV0UHJvcHM+KChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgaW5uZXJSZWYgPSB1c2VSZWY8YW55PigpO1xuICAgIGNvbnN0IFtpbnN0YW5jZSwgc2V0SW5zdGFuY2VdID0gdXNlU3RhdGU8bnVsbCB8IFdlYlZpZXdlckluc3RhbmNlPihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZpZXdlcihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiBcIi93aWRnZXRzL3Jlc291cmNlcy9saWJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlubmVyUmVmLmN1cnJlbnRcbiAgICAgICAgKS50aGVuKGluc3RhbmNlID0+IHtcbiAgICAgICAgICAgIHNldEluc3RhbmNlKGluc3RhbmNlKTtcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gbG9hZCBkb2N1bWVudCBjb21pbmcgZnJvbSB0aGUgVVJMIGF0dHJpYnV0ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpbnN0YW5jZSAmJiBwcm9wcy5maWxlTmFtZSAmJiBwcm9wcy5maWxlUGF0aCkge1xuICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBwcm9wcy5maWxlTmFtZS5zdWJzdHJpbmcocHJvcHMuZmlsZU5hbWUubGFzdEluZGV4T2YoXCIuXCIpICsgMSk7XG4gICAgICAgICAgICAvLyBhbGVydCgnZXh0ZW5zaW9uOiAnKyBmaWxlTmFtZSk7XG4gICAgICAgICAgICBpbnN0YW5jZS5sb2FkRG9jdW1lbnQocHJvcHMuZmlsZVBhdGgsIHsgZXh0ZW5zaW9uOiBmaWxlTmFtZSB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtpbnN0YW5jZSwgcHJvcHMuZmlsZU5hbWUsIHByb3BzLmZpbGVQYXRoXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3ZWJ2aWV3ZXJcIlxuICAgICAgICAgICAgcmVmPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVmID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmKGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlubmVyUmVmLmN1cnJlbnQgPSBlO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlPXtwcm9wcy5zdHlsZX1cbiAgICAgICAgPjwvZGl2PlxuICAgICk7XG59KTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIHVzZUludGVydmFsKFxuICAgIGZuOiAoKSA9PiB2b2lkLFxuICAgIGRlbGF5OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAgIGltbWVkaWF0ZT86IGJvb2xlYW47XG4gICAgfVxuKTogdm9pZCB7XG4gICAgY29uc3QgaW1tZWRpYXRlID0gb3B0aW9ucz8uaW1tZWRpYXRlO1xuXG4gICAgY29uc3QgZm5SZWYgPSB1c2VSZWY8KCkgPT4gdm9pZD4oKTtcbiAgICBmblJlZi5jdXJyZW50ID0gZm47XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHVuZGVmaW5lZCB8fCBkZWxheSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAoaW1tZWRpYXRlKSB7XG4gICAgICAgICAgICBmblJlZi5jdXJyZW50Py4oKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGZuUmVmLmN1cnJlbnQ/LigpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbZGVsYXldKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlSW50ZXJ2YWw7XG4iLCJmdW5jdGlvbiBnZXRFbmNsb3NpbmdXaWRnZXQocmVnaXN0cnk6IGFueSwgZWxlOiBhbnkpIHtcbiAgICBjb25zdCBvYmpzOiBhbnkgPSBbXTtcbiAgICBjb25zdCBwZW5kaW5nRGF0YVZpZXcgPSBbXTtcbiAgICBsZXQgc3RvcCA9IGZhbHNlO1xuICAgIHdoaWxlICghc3RvcCkge1xuICAgICAgICBpZiAoZWxlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibXgtZGF0YXZpZXdcIikpIHtcbiAgICAgICAgICAgIHBlbmRpbmdEYXRhVmlldy5wdXNoKGVsZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdFsxXS5zbGljZSg4KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBlbGUucGFyZW50RWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCA+IDEgJiZcbiAgICAgICAgICAgIGVsZS5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQgIT0gbnVsbCAmJlxuICAgICAgICAgICAgZWxlLnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ3aWRnZXRpZFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZS5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQuZ2V0QXR0cmlidXRlKFwid2lkZ2V0aWRcIikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlLnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1lbmRpeC1pZFwiKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHcxID0gcmVnaXN0cnkuYnlJZChlbGUucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZShcIndpZGdldGlkXCIpKTtcbiAgICAgICAgICAgIGxldCBwcmUgPSBlbGUucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkXG4gICAgICAgICAgICAgICAgLmdldEF0dHJpYnV0ZShcImRhdGEtbWVuZGl4LWlkXCIpXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiLlwiKVxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCAtMSlcbiAgICAgICAgICAgICAgICAuam9pbihcIi5cIik7XG5cbiAgICAgICAgICAgIHBlbmRpbmdEYXRhVmlldy5mb3JFYWNoKGR2ID0+IHtcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBpZiAobXgudmVyc2lvbi5zcGxpdChcIi5cIilbMF0gPT09IFwiOVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ianMucHVzaCh3MS5fc3RvcmVCYWNrZW5kLmdldCQoYCR7cHJlfS4ke2R2fWAsIGBvYmplY3RgLCBcIio7XCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobXgudmVyc2lvbi5zcGxpdChcIi5cIilbMF0gPT09IFwiOFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9pID0gdzEuX3N0b3JlLmVudHJpZXNbYHtcIndpZGdldElkXCI6XCIke3ByZX0uJHtkdn1cIixcInNsb3RcIjpcIm9iamVjdFwifWBdLmdldCQoKTtcbiAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKG9pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGUucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ3aWRnZXRpZFwiKSkge1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGUucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ3aWRnZXRpZFwiKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGUucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1lbmRpeC1pZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlID0gZWxlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKGVsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW14LXBsYWNlaG9sZGVyXCIpKSB7XG4gICAgICAgICAgICBzdG9wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2Jqcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZTogYW55LCBjYjogKG9ianM6IGFueVtdKSA9PiB2b2lkKSA9PiB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgd2luZG93LnJlcXVpcmUoW1wiZGlqaXQvcmVnaXN0cnlcIl0sIChyZWdpc3RyeTogYW55KSA9PiB7XG4gICAgICAgIGNiKGdldEVuY2xvc2luZ1dpZGdldChyZWdpc3RyeSwgZWxlKSk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsgUmVmT2JqZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUludGVydmFsIGZyb20gXCIuL3VzZUludGVydmFsXCI7XG5pbXBvcnQgdXRpbCBmcm9tIFwiLi91dGlsXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VNeENvbnRleHQgPSAocmVmOiBSZWZPYmplY3Q8YW55PikgPT4ge1xuICAgIGNvbnN0IFtvYmpzLCBzZXRPYmpzXSA9IHVzZVN0YXRlPGFueVtdPigpO1xuXG4gICAgY29uc3QgW2ludGVydmFsLCBzZXRJbnRlcnZhbF0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPigxMDAwKTtcblxuICAgIHVzZUludGVydmFsKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbChudWxsKTtcbiAgICAgICAgICAgICAgICB1dGlsKHJlZi5jdXJyZW50LCBkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0T2JqcyhkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJ2YWwsXG4gICAgICAgIHsgaW1tZWRpYXRlOiB0cnVlIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIG9ianM7XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWYWx1ZVN0YXR1cyB9IGZyb20gXCJtZW5kaXhcIjtcbmltcG9ydCBQREZWaWV3ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9QREZWaWV3ZXJcIjtcbmltcG9ydCB7IEZpbGVWaWV3ZXJDb250YWluZXJQcm9wcyB9IGZyb20gXCIuLi90eXBpbmdzL0ZpbGVWaWV3ZXJQcm9wc1wiO1xuaW1wb3J0IFwiLi91aS9pbmRleC5zY3NzXCI7XG5pbXBvcnQgeyB1c2VNeENvbnRleHQgfSBmcm9tIFwiLi9ob29rcy91c2VNeENvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsZVZpZXdlcihwcm9wczogRmlsZVZpZXdlckNvbnRhaW5lclByb3BzKSB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmPGFueT4oKTtcbiAgICBjb25zdCBbcGF0aCwgc2V0UGF0aF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KCk7XG4gICAgY29uc3QgW2ZpbGVOYW1lLCBzZXRGaWxlTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KCk7XG5cbiAgICBjb25zdCBvYmpzID0gdXNlTXhDb250ZXh0KHJlZik7XG4gICAgY29uc29sZS5sb2cob2JqcywgMzMzMyk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG9ianMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9ianNbMF0uZGVwZW5kT24oKSk7XG4gICAgICAgIH1cbiAgICB9LCBbb2Jqc10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLnVybEF0dHJpYnV0ZS5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSkge1xuICAgICAgICAgICAgc2V0UGF0aChwcm9wcy51cmxBdHRyaWJ1dGUudmFsdWU/LnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcy5maWxlTmFtZS5zdGF0dXMgPT09IFZhbHVlU3RhdHVzLkF2YWlsYWJsZSkge1xuICAgICAgICAgICAgc2V0RmlsZU5hbWUocHJvcHMuZmlsZU5hbWUudmFsdWU/LnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfSwgW3Byb3BzLmZpbGVOYW1lLCBwcm9wcy51cmxBdHRyaWJ1dGVdKTtcbiAgICByZXR1cm4gPFBERlZpZXdlciByZWY9e3JlZn0gZmlsZU5hbWU9e2ZpbGVOYW1lfSBmaWxlUGF0aD17cGF0aH0gc3R5bGU9e3Byb3BzLnN0eWxlfSAvPjtcbn1cbiJdLCJuYW1lcyI6WyJlIiwidCIsIm1vZHVsZSIsIndpbmRvdyIsIm4iLCJvIiwiZXhwb3J0cyIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwiX19lc01vZHVsZSIsImNyZWF0ZSIsImJpbmQiLCJkZWZhdWx0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkZ1bmN0aW9uIiwiYSIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJ0aGVuIiwicmVzb2x2ZSIsInJlamVjdCIsIlR5cGVFcnJvciIsIl9zdGF0ZSIsIl9oYW5kbGVkIiwiX3ZhbHVlIiwiX2RlZmVycmVkcyIsIl9pbW1lZGlhdGVGbiIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsInByb21pc2UiLCJwdXNoIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJfdW5oYW5kbGVkUmVqZWN0aW9uRm4iLCJ1Iiwic2V0VGltZW91dCIsImNhdGNoIiwiZmluYWxseSIsImFsbCIsIkFycmF5Iiwic2xpY2UiLCJyYWNlIiwiY29uc29sZSIsIndhcm4iLCJmIiwic2VsZiIsIkVycm9yIiwiUHJvbWlzZSIsInNldEltbWVkaWF0ZSIsIl9pZCIsIl9jbGVhckZuIiwiY2xlYXJUaW1lb3V0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJ1bnJlZiIsInJlZiIsImVucm9sbCIsIl9pZGxlVGltZW91dElkIiwiX2lkbGVUaW1lb3V0IiwidW5lbnJvbGwiLCJfdW5yZWZBY3RpdmUiLCJhY3RpdmUiLCJfb25UaW1lb3V0IiwiY2xlYXJJbW1lZGlhdGUiLCJkb2N1bWVudCIsImdldFByb3RvdHlwZU9mIiwidG9TdHJpbmciLCJwcm9jZXNzIiwibmV4dFRpY2siLCJwb3N0TWVzc2FnZSIsImltcG9ydFNjcmlwdHMiLCJvbm1lc3NhZ2UiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwiZGF0YSIsInBvcnQyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50RWxlbWVudCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJNYXRoIiwicmFuZG9tIiwic291cmNlIiwiaW5kZXhPZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImNhbGxiYWNrIiwiYXJncyIsImgiLCJjb25jYXQiLCJydW4iLCJmdW4iLCJhcnJheSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJ1bWFzayIsImxvZyIsImVycm9yIiwia2V5cyIsImZvckVhY2giLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJQREZOZXQiLCJza2lwUERGTmV0V2ViVmlld2VyV2FybmluZyIsIk1hcCIsIldlYlZpZXdlciIsInNldCIsImluc3RhbmNlIiwiZ2V0Q29tcGxldGVJbnN0YW5jZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfdmFsaWRhdGVPcHRpb25zIiwidWkiLCJodG1sNVBhdGgiLCJmdWxsQVBJIiwicGRmdHJvblNlcnZlciIsImZvcmNlQ2xpZW50U2lkZUluaXQiLCJvcHRpb25zIiwiT3B0aW9ucyIsInBhdGgiLCJlbGVtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsIm1lc3NhZ2VIYW5kbGVyIiwidHlwZSIsImxpY2Vuc2VLZXkiLCJpZCIsImNvbmZpZyIsIl9jb3JyZWN0UmVsYXRpdmVQYXRoIiwiYXV0b0NyZWF0ZSIsImVuYWJsZUF6dXJlV29ya2Fyb3VuZCIsImlzQWRtaW5Vc2VyIiwiaXNSZWFkT25seSIsImluaXRpYWxEb2MiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfY3JlYXRlIiwiX3RyaWdnZXIiLCJkaXNwYXRjaEV2ZW50IiwicmVwbGFjZSIsInNwbGl0IiwiX2NyZWF0ZVZpZXdlciIsImVuYWJsZVJlZGFjdGlvbiIsIl9ub3RTdXBwb3J0ZWRNb2JpbGUiLCJ0ZXh0Q29udGVudCIsInNlbGVjdGVkVHlwZSIsImlzTW9iaWxlRGV2aWNlIiwiZG9jdW1lbnRUeXBlIiwiX3Rlc3RXZWJBc3NlbWJseSIsIm1vYmlsZVJlZGlyZWN0IiwiX2dldEhUTUw1T3B0aW9uc1VSTCIsImxvY2F0aW9uIiwidG9Mb3dlckNhc2UiLCJfdGVzdEhUTUw1IiwieGRvbWFpblByb3h5VXJsIiwiaXNTYW1lT3JpZ2luIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiX3Rlc3RDT1JTIiwiX2NyZWF0ZUhUTUw1IiwiX2NyZWF0ZUhUTUw1TW9iaWxlIiwiX3ZpZXdlckxvYWRlZCIsImNvbnRlbnRXaW5kb3ciLCJlbmNyeXB0aW9uIiwiZGVjcnlwdCIsIkNvcmVDb250cm9scyIsIkVuY3J5cHRpb24iLCJkZWNyeXB0T3B0aW9ucyIsImRvY3VtZW50SWQiLCJleHRlbnNpb24iLCJsb2FkRG9jdW1lbnQiLCJkb2NWaWV3ZXIiLCJnZXREb2N1bWVudCIsIl9pc1BERkV4dGVuc2lvbiIsIl9pc09mZmljZUV4dGVuc2lvbiIsImJhY2tlbmRUeXBlIiwicGRmQmFja2VuZCIsInByZWxvYWRXb3JrZXIiLCJmaWxlbmFtZSIsInN0cmVhbWluZyIsImV4dGVybmFsUGF0aCIsImVuYWJsZUFubm90YXRpb25zIiwiZGlzYWJsZWRFbGVtZW50cyIsImpvaW4iLCJzZXJ2ZXJVcmwiLCJzZXJ2ZXJVcmxIZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImNzcyIsImRpc2FibGVJMThuIiwiZW5hYmxlT2ZmbGluZU1vZGUiLCJzdGFydE9mZmxpbmUiLCJlbmFibGVSZWFkT25seU1vZGUiLCJoaWRlQW5ub3RhdGlvblBhbmVsIiwiYW5ub3RhdGlvblVzZXIiLCJhbm5vdGF0aW9uQWRtaW4iLCJjdXN0b20iLCJzaG93TG9jYWxGaWxlUGlja2VyIiwiZW5hYmxlRmlsZVBpY2tlciIsImVuYWJsZU1lYXN1cmVtZW50Iiwic2hvd1Rvb2xiYXJDb250cm9sIiwic2hvd1BhZ2VIaXN0b3J5QnV0dG9ucyIsIm5vdGVzSW5MZWZ0UGFuZWwiLCJ1cmwiLCJhenVyZVdvcmthcm91bmQiLCJ1c2VEb3dubG9hZGVyIiwiZGlzYWJsZVdlYnNvY2tldHMiLCJsb2FkQXNQREYiLCJ3b3JrZXJUcmFuc3BvcnRQcm9taXNlIiwiYWNjZXNzaWJsZU1vZGUiLCJkaXNhYmxlTG9ncyIsImVuYWJsZVZpZXdTdGF0ZUFubm90YXRpb25zIiwiZGlzYWJsZUZsYXR0ZW5lZEFubm90YXRpb25zIiwic2VsZWN0QW5ub3RhdGlvbk9uQ3JlYXRpb24iLCJzZXRJbnN0YW5jZURhdGEiLCJpZnJhbWUiLCJzcmMiLCJmcmFtZUJvcmRlciIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiYmFja2dyb3VuZENvbG9yIiwiYXNzZXRQYXRoIiwibG9hZExpc3RlbmVyIiwicmVhZGVyQ29udHJvbCIsImZyYW1lYm9yZGVyIiwiZGlzcG9zZSIsImRlbGV0ZSIsImNsb3NlRG9jdW1lbnQiLCJnZXRJbnN0YW5jZSIsInNldENvbXBsZXRlSW5zdGFuY2UiLCJjb21wbGV0ZUluc3RhbmNlIiwiZ2V0U2lkZVdpbmRvd1Zpc2liaWxpdHkiLCJnZXRTaG93U2lkZVdpbmRvdyIsInNldFNpZGVXaW5kb3dWaXNpYmlsaXR5Iiwic2V0U2hvd1NpZGVXaW5kb3ciLCJnZXRUb29sYmFyVmlzaWJpbGl0eSIsInNldFRvb2xiYXJWaXNpYmlsaXR5IiwiZ2V0Q3VycmVudFBhZ2VOdW1iZXIiLCJzZXRDdXJyZW50UGFnZU51bWJlciIsImdldFBhZ2VDb3VudCIsImdldFpvb21MZXZlbCIsInNldFpvb21MZXZlbCIsInJvdGF0ZUNsb2Nrd2lzZSIsInJvdGF0ZUNvdW50ZXJDbG9ja3dpc2UiLCJnZXRMYXlvdXRNb2RlIiwiRGlzcGxheU1vZGVzIiwiU2luZ2xlIiwiTGF5b3V0TW9kZSIsIkNvbnRpbnVvdXMiLCJGYWNpbmciLCJGYWNpbmdDb250aW51b3VzIiwiQ292ZXIiLCJGYWNpbmdDb3ZlckNvbnRpbnVvdXMiLCJDb3ZlckZhY2luZyIsIkZhY2luZ0NvdmVyIiwic2V0TGF5b3V0TW9kZSIsImdldFRvb2xNb2RlIiwic2V0VG9vbE1vZGUiLCJmaXRXaWR0aCIsInNldEZpdE1vZGUiLCJGaXRNb2RlIiwiRml0V2lkdGgiLCJmaXRIZWlnaHQiLCJmaXRQYWdlIiwiRml0UGFnZSIsImdldEZpdE1vZGUiLCJGaXRIZWlnaHQiLCJab29tIiwiem9vbSIsImdvVG9GaXJzdFBhZ2UiLCJnb1RvTGFzdFBhZ2UiLCJnb1RvTmV4dFBhZ2UiLCJnb1RvUHJldlBhZ2UiLCJkb2NJZCIsInNlYXJjaFRleHQiLCJzZXRBbm5vdGF0aW9uVXNlciIsInNldEFkbWluVXNlciIsInNldFJlYWRPbmx5IiwiZG93bmxvYWRYb2REb2N1bWVudCIsIm9wZW4iLCJzdGFydFByaW50Sm9iIiwiZW5kUHJpbnRKb2IiLCJwYXRobmFtZSIsInN1YnN0ciIsImxhc3RJbmRleE9mIiwidGVzdCIsImdldENvbnRleHQiLCJXZWJBc3NlbWJseSIsInZhbGlkYXRlIiwiX3N1cHBvcnRzIiwiWE1MSHR0cFJlcXVlc3QiLCJpc0lFIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZXhlYyIsInBhcnNlSW50Iiwic2Nyb2xsYmFyV2lkdGgiLCJtYXRjaCIsImNzc1RleHQiLCJib2R5Iiwib2Zmc2V0V2lkdGgiLCJjbGllbnRXaWR0aCIsImhyZWYiLCJob3N0IiwicG9ydCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJydW5JbklmcmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCIkIiwicHJlbG9hZFBERldvcmtlciIsIlRvb2xNb2RlIiwiQW5ub3RhdGlvbkNyZWF0ZUFycm93IiwiQW5ub3RhdGlvbkNyZWF0ZUNhbGxvdXQiLCJBbm5vdGF0aW9uQ3JlYXRlRWxsaXBzZSIsIkFubm90YXRpb25DcmVhdGVGcmVlSGFuZCIsIkFubm90YXRpb25DcmVhdGVGcmVlVGV4dCIsIkFubm90YXRpb25DcmVhdGVMaW5lIiwiQW5ub3RhdGlvbkNyZWF0ZVBvbHlnb24iLCJBbm5vdGF0aW9uQ3JlYXRlUG9seWdvbkNsb3VkIiwiQW5ub3RhdGlvbkNyZWF0ZVBvbHlsaW5lIiwiQW5ub3RhdGlvbkNyZWF0ZVJlY3RhbmdsZSIsIkFubm90YXRpb25DcmVhdGVTaWduYXR1cmUiLCJBbm5vdGF0aW9uQ3JlYXRlU3RhbXAiLCJBbm5vdGF0aW9uQ3JlYXRlU3RpY2t5IiwiQW5ub3RhdGlvbkNyZWF0ZVRleHRIaWdobGlnaHQiLCJBbm5vdGF0aW9uQ3JlYXRlVGV4dFNxdWlnZ2x5IiwiQW5ub3RhdGlvbkNyZWF0ZVRleHRTdHJpa2VvdXQiLCJBbm5vdGF0aW9uQ3JlYXRlVGV4dFVuZGVybGluZSIsIkFubm90YXRpb25FZGl0IiwiU2VhcmNoTW9kZSIsIkNhc2VTZW5zaXRpdmUiLCJXaG9sZVdvcmQiLCJTZWFyY2hVcCIsIlBhZ2VTdG9wIiwiUHJvdmlkZVF1YWRzIiwiQW1iaWVudFN0cmluZyIsIlVzZXIiLCJ1c2VybmFtZSIsImlzQWRtaW4iLCJUb29scyIsIkFubm90YXRpb25zIiwiUGFydFJldHJpZXZlcnMiLCJBY3Rpb25zIiwiYW5ub3RNYW5hZ2VyIiwiZ2V0QW5ub3RhdGlvbk1hbmFnZXIiLCJpZnJhbWVXaW5kb3ciLCJmaWx0ZXIiLCJQREZUcm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsVUFBU0EsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxFQUFxREMsaUJBQWVELENBQUMsRUFBaEI7QUFBMEosQ0FBN04sQ0FBOE5FLE1BQTlOLEVBQXNPLFlBQVU7QUFBQyxTQUFPLFVBQVNILENBQVQsRUFBVztBQUFDLFFBQUlDLENBQUMsR0FBQyxFQUFOOztBQUFTLGFBQVNHLENBQVQsQ0FBV0MsQ0FBWCxFQUFhO0FBQUMsVUFBR0osQ0FBQyxDQUFDSSxDQUFELENBQUosRUFBUSxPQUFPSixDQUFDLENBQUNJLENBQUQsQ0FBRCxDQUFLQyxPQUFaO0FBQW9CLFVBQUlDLENBQUMsR0FBQ04sQ0FBQyxDQUFDSSxDQUFE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
