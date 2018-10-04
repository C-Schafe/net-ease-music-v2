/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * mOxie - multi-runtime File API & XMLHttpRequest L2 Polyfill
 * v1.5.6
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2017-10-02
 */
!function (e, t) {
  var i = function i() {
    var e = {};return t.apply(e, arguments), e.moxie;
  }; true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = i() : e.moxie = i();
}(undefined || window, function () {
  !function (e, t) {
    "use strict";
    function i(e, t) {
      for (var i, n = [], r = 0; r < e.length; ++r) {
        if (i = s[e[r]] || o(e[r]), !i) throw "module definition dependecy not found: " + e[r];n.push(i);
      }t.apply(null, n);
    }function n(e, n, r) {
      if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";if (n === t) throw "invalid module definition, dependencies must be specified";if (r === t) throw "invalid module definition, definition function must be specified";i(n, function () {
        s[e] = r.apply(null, arguments);
      });
    }function r(e) {
      return !!s[e];
    }function o(t) {
      for (var i = e, n = t.split(/[.\/]/), r = 0; r < n.length; ++r) {
        if (!i[n[r]]) return;i = i[n[r]];
      }return i;
    }function a(i) {
      for (var n = 0; n < i.length; n++) {
        for (var r = e, o = i[n], a = o.split(/[.\/]/), u = 0; u < a.length - 1; ++u) {
          r[a[u]] === t && (r[a[u]] = {}), r = r[a[u]];
        }r[a[a.length - 1]] = s[o];
      }
    }var s = {};n("moxie/core/utils/Basic", [], function () {
      function e(e) {
        var t;return e === t ? "undefined" : null === e ? "null" : e.nodeType ? "node" : {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
      }function t() {
        return s(!1, !1, arguments);
      }function i() {
        return s(!0, !1, arguments);
      }function n() {
        return s(!1, !0, arguments);
      }function r() {
        return s(!0, !0, arguments);
      }function o(t) {
        switch (e(t)) {case "array":
            return s(!1, !0, [[], t]);case "object":
            return s(!1, !0, [{}, t]);default:
            return t;}
      }function a(i) {
        switch (e(i)) {case "array":
            return Array.prototype.slice.call(i);case "object":
            return t({}, i);}return i;
      }function s(t, i, n) {
        var r,
            o = n[0];return c(n, function (n, u) {
          u > 0 && c(n, function (n, u) {
            var c = -1 !== h(e(n), ["array", "object"]);return n === r || t && o[u] === r ? !0 : (c && i && (n = a(n)), e(o[u]) === e(n) && c ? s(t, i, [o[u], n]) : o[u] = n, void 0);
          });
        }), o;
      }function u(e, t) {
        function i() {
          this.constructor = e;
        }for (var n in t) {
          ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }return i.prototype = t.prototype, e.prototype = new i(), e.super = t.prototype, e;
      }function c(e, t) {
        var i, n, r, o;if (e) {
          try {
            i = e.length;
          } catch (a) {
            i = o;
          }if (i === o || "number" != typeof i) {
            for (n in e) {
              if (e.hasOwnProperty(n) && t(e[n], n) === !1) return;
            }
          } else for (r = 0; i > r; r++) {
            if (t(e[r], r) === !1) return;
          }
        }
      }function l(t) {
        var i;if (!t || "object" !== e(t)) return !0;for (i in t) {
          return !1;
        }return !0;
      }function d(t, i) {
        function n(r) {
          "function" === e(t[r]) && t[r](function (e) {
            ++r < o && !e ? n(r) : i(e);
          });
        }var r = 0,
            o = t.length;"function" !== e(i) && (i = function i() {}), t && t.length || i(), n(r);
      }function m(e, t) {
        var i = 0,
            n = e.length,
            r = new Array(n);c(e, function (e, o) {
          e(function (e) {
            if (e) return t(e);var a = [].slice.call(arguments);a.shift(), r[o] = a, i++, i === n && (r.unshift(null), t.apply(this, r));
          });
        });
      }function h(e, t) {
        if (t) {
          if (Array.prototype.indexOf) return Array.prototype.indexOf.call(t, e);for (var i = 0, n = t.length; n > i; i++) {
            if (t[i] === e) return i;
          }
        }return -1;
      }function f(t, i) {
        var n = [];"array" !== e(t) && (t = [t]), "array" !== e(i) && (i = [i]);for (var r in t) {
          -1 === h(t[r], i) && n.push(t[r]);
        }return n.length ? n : !1;
      }function p(e, t) {
        var i = [];return c(e, function (e) {
          -1 !== h(e, t) && i.push(e);
        }), i.length ? i : null;
      }function g(e) {
        var t,
            i = [];for (t = 0; t < e.length; t++) {
          i[t] = e[t];
        }return i;
      }function x(e) {
        return e ? String.prototype.trim ? String.prototype.trim.call(e) : e.toString().replace(/^\s*/, "").replace(/\s*$/, "") : e;
      }function v(e) {
        if ("string" != typeof e) return e;var t,
            i = { t: 1099511627776, g: 1073741824, m: 1048576, k: 1024 };return e = /^([0-9\.]+)([tmgk]?)$/.exec(e.toLowerCase().replace(/[^0-9\.tmkg]/g, "")), t = e[2], e = +e[1], i.hasOwnProperty(t) && (e *= i[t]), Math.floor(e);
      }function w(e) {
        var t = [].slice.call(arguments, 1);return e.replace(/%([a-z])/g, function (e, i) {
          var n = t.shift();switch (i) {case "s":
              return n + "";case "d":
              return parseInt(n, 10);case "f":
              return parseFloat(n);case "c":
              return "";default:
              return n;}
        });
      }function y(e, t) {
        var i = this;setTimeout(function () {
          e.call(i);
        }, t || 1);
      }var E = function () {
        var e = 0;return function (t) {
          var i,
              n = new Date().getTime().toString(32);for (i = 0; 5 > i; i++) {
            n += Math.floor(65535 * Math.random()).toString(32);
          }return (t || "o_") + n + (e++).toString(32);
        };
      }();return { guid: E, typeOf: e, extend: t, extendIf: i, extendImmutable: n, extendImmutableIf: r, clone: o, inherit: u, each: c, isEmptyObj: l, inSeries: d, inParallel: m, inArray: h, arrayDiff: f, arrayIntersect: p, toArray: g, trim: x, sprintf: w, parseSizeStr: v, delay: y };
    }), n("moxie/core/utils/Encode", [], function () {
      var e = function e(_e) {
        return unescape(encodeURIComponent(_e));
      },
          t = function t(e) {
        return decodeURIComponent(escape(e));
      },
          i = function i(e, _i) {
        if ("function" == typeof window.atob) return _i ? t(window.atob(e)) : window.atob(e);var n,
            r,
            o,
            a,
            s,
            u,
            c,
            l,
            d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            m = 0,
            h = 0,
            f = "",
            p = [];if (!e) return e;e += "";do {
          a = d.indexOf(e.charAt(m++)), s = d.indexOf(e.charAt(m++)), u = d.indexOf(e.charAt(m++)), c = d.indexOf(e.charAt(m++)), l = a << 18 | s << 12 | u << 6 | c, n = 255 & l >> 16, r = 255 & l >> 8, o = 255 & l, p[h++] = 64 == u ? String.fromCharCode(n) : 64 == c ? String.fromCharCode(n, r) : String.fromCharCode(n, r, o);
        } while (m < e.length);return f = p.join(""), _i ? t(f) : f;
      },
          n = function n(t, i) {
        if (i && (t = e(t)), "function" == typeof window.btoa) return window.btoa(t);var n,
            r,
            o,
            a,
            s,
            u,
            c,
            l,
            d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            m = 0,
            h = 0,
            f = "",
            p = [];if (!t) return t;do {
          n = t.charCodeAt(m++), r = t.charCodeAt(m++), o = t.charCodeAt(m++), l = n << 16 | r << 8 | o, a = 63 & l >> 18, s = 63 & l >> 12, u = 63 & l >> 6, c = 63 & l, p[h++] = d.charAt(a) + d.charAt(s) + d.charAt(u) + d.charAt(c);
        } while (m < t.length);f = p.join("");var g = t.length % 3;return (g ? f.slice(0, g - 3) : f) + "===".slice(g || 3);
      };return { utf8_encode: e, utf8_decode: t, atob: i, btoa: n };
    }), n("moxie/core/utils/Env", ["moxie/core/utils/Basic"], function (e) {
      function i(e, t, i) {
        var n = 0,
            r = 0,
            o = 0,
            a = { dev: -6, alpha: -5, a: -5, beta: -4, b: -4, RC: -3, rc: -3, "#": -2, p: 1, pl: 1 },
            s = function s(e) {
          return e = ("" + e).replace(/[_\-+]/g, "."), e = e.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), e.length ? e.split(".") : [-8];
        },
            u = function u(e) {
          return e ? isNaN(e) ? a[e] || -7 : parseInt(e, 10) : 0;
        };for (e = s(e), t = s(t), r = Math.max(e.length, t.length), n = 0; r > n; n++) {
          if (e[n] != t[n]) {
            if (e[n] = u(e[n]), t[n] = u(t[n]), e[n] < t[n]) {
              o = -1;break;
            }if (e[n] > t[n]) {
              o = 1;break;
            }
          }
        }if (!i) return o;switch (i) {case ">":case "gt":
            return o > 0;case ">=":case "ge":
            return o >= 0;case "<=":case "le":
            return 0 >= o;case "==":case "=":case "eq":
            return 0 === o;case "<>":case "!=":case "ne":
            return 0 !== o;case "":case "<":case "lt":
            return 0 > o;default:
            return null;}
      }var n = function (e) {
        var t = "",
            i = "?",
            n = "function",
            r = "undefined",
            o = "object",
            a = "name",
            s = "version",
            u = { has: function has(e, t) {
            return -1 !== t.toLowerCase().indexOf(e.toLowerCase());
          }, lowerize: function lowerize(e) {
            return e.toLowerCase();
          } },
            c = { rgx: function rgx() {
            for (var t, i, a, s, u, c, l, d = 0, m = arguments; d < m.length; d += 2) {
              var h = m[d],
                  f = m[d + 1];if ((typeof t === "undefined" ? "undefined" : _typeof(t)) === r) {
                t = {};for (s in f) {
                  u = f[s], (typeof u === "undefined" ? "undefined" : _typeof(u)) === o ? t[u[0]] = e : t[u] = e;
                }
              }for (i = a = 0; i < h.length; i++) {
                if (c = h[i].exec(this.getUA())) {
                  for (s = 0; s < f.length; s++) {
                    l = c[++a], u = f[s], (typeof u === "undefined" ? "undefined" : _typeof(u)) === o && u.length > 0 ? 2 == u.length ? t[u[0]] = _typeof(u[1]) == n ? u[1].call(this, l) : u[1] : 3 == u.length ? t[u[0]] = _typeof(u[1]) !== n || u[1].exec && u[1].test ? l ? l.replace(u[1], u[2]) : e : l ? u[1].call(this, l, u[2]) : e : 4 == u.length && (t[u[0]] = l ? u[3].call(this, l.replace(u[1], u[2])) : e) : t[u] = l ? l : e;
                  }break;
                }
              }if (c) break;
            }return t;
          }, str: function str(t, n) {
            for (var r in n) {
              if (_typeof(n[r]) === o && n[r].length > 0) {
                for (var a = 0; a < n[r].length; a++) {
                  if (u.has(n[r][a], t)) return r === i ? e : r;
                }
              } else if (u.has(n[r], t)) return r === i ? e : r;
            }return t;
          } },
            l = { browser: { oldsafari: { major: { 1: ["/8", "/1", "/3"], 2: "/4", "?": "/" }, version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } }, device: { sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2000: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", RT: "ARM" } } } },
            d = { browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [a, s], [/\s(opr)\/([\w\.]+)/i], [[a, "Opera"], s], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i], [a, s], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[a, "IE"], s], [/(edge)\/((\d+)?[\w\.]+)/i], [a, s], [/(yabrowser)\/([\w\.]+)/i], [[a, "Yandex"], s], [/(comodo_dragon)\/([\w\.]+)/i], [[a, /_/g, " "], s], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i], [a, s], [/(dolfin)\/([\w\.]+)/i], [[a, "Dolphin"], s], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[a, "Chrome"], s], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [s, [a, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [s, [a, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [s, [a, "Facebook"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [s, [a, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [s, a], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [a, [s, c.str, l.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [a, s], [/(navigator|netscape)\/([\w\.-]+)/i], [[a, "Netscape"], s], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [a, s]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [s, [a, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [a, s], [/rv\:([\w\.]+).*(gecko)/i], [s, a]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [a, s], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [a, [s, c.str, l.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[a, "Windows"], [s, c.str, l.os.windows.version]], [/\((bb)(10);/i], [[a, "BlackBerry"], s], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [a, s], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[a, "Symbian"], s], [/\((series40);/i], [a], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[a, "Firefox OS"], s], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [a, s], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[a, "Chromium OS"], s], [/(sunos)\s?([\w\.]+\d)*/i], [[a, "Solaris"], s], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [a, s], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[a, "iOS"], [s, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[a, "Mac OS"], [s, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [a, s]] },
            m = function m(e) {
          var i = e || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : t);this.getBrowser = function () {
            return c.rgx.apply(this, d.browser);
          }, this.getEngine = function () {
            return c.rgx.apply(this, d.engine);
          }, this.getOS = function () {
            return c.rgx.apply(this, d.os);
          }, this.getResult = function () {
            return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS() };
          }, this.getUA = function () {
            return i;
          }, this.setUA = function (e) {
            return i = e, this;
          }, this.setUA(i);
        };return m;
      }(),
          r = function () {
        var i = { access_global_ns: function access_global_ns() {
            return !!window.moxie;
          }, define_property: function () {
            return !1;
          }(), create_canvas: function create_canvas() {
            var e = document.createElement("canvas"),
                t = !(!e.getContext || !e.getContext("2d"));return i.create_canvas = t, t;
          }, return_response_type: function return_response_type(t) {
            try {
              if (-1 !== e.inArray(t, ["", "text", "document"])) return !0;if (window.XMLHttpRequest) {
                var i = new XMLHttpRequest();if (i.open("get", "/"), "responseType" in i) return i.responseType = t, i.responseType !== t ? !1 : !0;
              }
            } catch (n) {}return !1;
          }, use_blob_uri: function use_blob_uri() {
            var e = window.URL;return i.use_blob_uri = e && "createObjectURL" in e && "revokeObjectURL" in e && ("IE" !== a.browser || a.verComp(a.version, "11.0.46", ">=")), i.use_blob_uri;
          }, use_data_uri: function () {
            var e = new Image();return e.onload = function () {
              i.use_data_uri = 1 === e.width && 1 === e.height;
            }, setTimeout(function () {
              e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
            }, 1), !1;
          }(), use_data_uri_over32kb: function use_data_uri_over32kb() {
            return i.use_data_uri && ("IE" !== a.browser || a.version >= 9);
          }, use_data_uri_of: function use_data_uri_of(e) {
            return i.use_data_uri && 33e3 > e || i.use_data_uri_over32kb();
          }, use_fileinput: function use_fileinput() {
            if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;var e = document.createElement("input");return e.setAttribute("type", "file"), i.use_fileinput = !e.disabled;
          }, use_webgl: function use_webgl() {
            var e,
                n = document.createElement("canvas"),
                r = null;try {
              r = n.getContext("webgl") || n.getContext("experimental-webgl");
            } catch (o) {}return r || (r = null), e = !!r, i.use_webgl = e, n = t, e;
          } };return function (t) {
          var n = [].slice.call(arguments);return n.shift(), "function" === e.typeOf(i[t]) ? i[t].apply(this, n) : !!i[t];
        };
      }(),
          o = new n().getResult(),
          a = { can: r, uaParser: n, browser: o.browser.name, version: o.browser.version, os: o.os.name, osVersion: o.os.version, verComp: i, swf_url: "../flash/Moxie.swf", xap_url: "../silverlight/Moxie.xap", global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent" };return a.OS = a.os, a;
    }), n("moxie/core/Exceptions", ["moxie/core/utils/Basic"], function (e) {
      function t(e, t) {
        var i;for (i in e) {
          if (e[i] === t) return i;
        }return null;
      }return { RuntimeError: function () {
          function i(e, i) {
            this.code = e, this.name = t(n, e), this.message = this.name + (i || ": RuntimeError " + this.code);
          }var n = { NOT_INIT_ERR: 1, EXCEPTION_ERR: 3, NOT_SUPPORTED_ERR: 9, JS_ERR: 4 };return e.extend(i, n), i.prototype = Error.prototype, i;
        }(), OperationNotAllowedException: function () {
          function t(e) {
            this.code = e, this.name = "OperationNotAllowedException";
          }return e.extend(t, { NOT_ALLOWED_ERR: 1 }), t.prototype = Error.prototype, t;
        }(), ImageError: function () {
          function i(e) {
            this.code = e, this.name = t(n, e), this.message = this.name + ": ImageError " + this.code;
          }var n = { WRONG_FORMAT: 1, MAX_RESOLUTION_ERR: 2, INVALID_META_ERR: 3 };return e.extend(i, n), i.prototype = Error.prototype, i;
        }(), FileException: function () {
          function i(e) {
            this.code = e, this.name = t(n, e), this.message = this.name + ": FileException " + this.code;
          }var n = { NOT_FOUND_ERR: 1, SECURITY_ERR: 2, ABORT_ERR: 3, NOT_READABLE_ERR: 4, ENCODING_ERR: 5, NO_MODIFICATION_ALLOWED_ERR: 6, INVALID_STATE_ERR: 7, SYNTAX_ERR: 8 };return e.extend(i, n), i.prototype = Error.prototype, i;
        }(), DOMException: function () {
          function i(e) {
            this.code = e, this.name = t(n, e), this.message = this.name + ": DOMException " + this.code;
          }var n = { INDEX_SIZE_ERR: 1, DOMSTRING_SIZE_ERR: 2, HIERARCHY_REQUEST_ERR: 3, WRONG_DOCUMENT_ERR: 4, INVALID_CHARACTER_ERR: 5, NO_DATA_ALLOWED_ERR: 6, NO_MODIFICATION_ALLOWED_ERR: 7, NOT_FOUND_ERR: 8, NOT_SUPPORTED_ERR: 9, INUSE_ATTRIBUTE_ERR: 10, INVALID_STATE_ERR: 11, SYNTAX_ERR: 12, INVALID_MODIFICATION_ERR: 13, NAMESPACE_ERR: 14, INVALID_ACCESS_ERR: 15, VALIDATION_ERR: 16, TYPE_MISMATCH_ERR: 17, SECURITY_ERR: 18, NETWORK_ERR: 19, ABORT_ERR: 20, URL_MISMATCH_ERR: 21, QUOTA_EXCEEDED_ERR: 22, TIMEOUT_ERR: 23, INVALID_NODE_TYPE_ERR: 24, DATA_CLONE_ERR: 25 };return e.extend(i, n), i.prototype = Error.prototype, i;
        }(), EventException: function () {
          function t(e) {
            this.code = e, this.name = "EventException";
          }return e.extend(t, { UNSPECIFIED_EVENT_TYPE_ERR: 0 }), t.prototype = Error.prototype, t;
        }() };
    }), n("moxie/core/utils/Dom", ["moxie/core/utils/Env"], function (e) {
      var t = function t(e) {
        return "string" != typeof e ? e : document.getElementById(e);
      },
          i = function i(e, t) {
        if (!e.className) return !1;var i = new RegExp("(^|\\s+)" + t + "(\\s+|$)");return i.test(e.className);
      },
          n = function n(e, t) {
        i(e, t) || (e.className = e.className ? e.className.replace(/\s+$/, "") + " " + t : t);
      },
          r = function r(e, t) {
        if (e.className) {
          var i = new RegExp("(^|\\s+)" + t + "(\\s+|$)");e.className = e.className.replace(i, function (e, t, i) {
            return " " === t && " " === i ? " " : "";
          });
        }
      },
          o = function o(e, t) {
        return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null)[t] : void 0;
      },
          a = function a(t, i) {
        function n(e) {
          var t,
              i,
              n = 0,
              r = 0;return e && (i = e.getBoundingClientRect(), t = "CSS1Compat" === c.compatMode ? c.documentElement : c.body, n = i.left + t.scrollLeft, r = i.top + t.scrollTop), { x: n, y: r };
        }var r,
            o,
            a,
            s = 0,
            u = 0,
            c = document;if (t = t, i = i || c.body, t && t.getBoundingClientRect && "IE" === e.browser && (!c.documentMode || c.documentMode < 8)) return o = n(t), a = n(i), { x: o.x - a.x, y: o.y - a.y };for (r = t; r && r != i && r.nodeType;) {
          s += r.offsetLeft || 0, u += r.offsetTop || 0, r = r.offsetParent;
        }for (r = t.parentNode; r && r != i && r.nodeType;) {
          s -= r.scrollLeft || 0, u -= r.scrollTop || 0, r = r.parentNode;
        }return { x: s, y: u };
      },
          s = function s(e) {
        return { w: e.offsetWidth || e.clientWidth, h: e.offsetHeight || e.clientHeight };
      };return { get: t, hasClass: i, addClass: n, removeClass: r, getStyle: o, getPos: a, getSize: s };
    }), n("moxie/core/EventTarget", ["moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Basic"], function (e, t, i) {
      function n() {
        this.uid = i.guid();
      }var r = {};return i.extend(n.prototype, { init: function init() {
          this.uid || (this.uid = i.guid("uid_"));
        }, addEventListener: function addEventListener(e, t, n, o) {
          var a,
              s = this;return this.hasOwnProperty("uid") || (this.uid = i.guid("uid_")), e = i.trim(e), /\s/.test(e) ? (i.each(e.split(/\s+/), function (e) {
            s.addEventListener(e, t, n, o);
          }), void 0) : (e = e.toLowerCase(), n = parseInt(n, 10) || 0, a = r[this.uid] && r[this.uid][e] || [], a.push({ fn: t, priority: n, scope: o || this }), r[this.uid] || (r[this.uid] = {}), r[this.uid][e] = a, void 0);
        }, hasEventListener: function hasEventListener(e) {
          var t;return e ? (e = e.toLowerCase(), t = r[this.uid] && r[this.uid][e]) : t = r[this.uid], t ? t : !1;
        }, removeEventListener: function removeEventListener(e, t) {
          var n,
              o,
              a = this;if (e = e.toLowerCase(), /\s/.test(e)) return i.each(e.split(/\s+/), function (e) {
            a.removeEventListener(e, t);
          }), void 0;if (n = r[this.uid] && r[this.uid][e]) {
            if (t) {
              for (o = n.length - 1; o >= 0; o--) {
                if (n[o].fn === t) {
                  n.splice(o, 1);break;
                }
              }
            } else n = [];n.length || (delete r[this.uid][e], i.isEmptyObj(r[this.uid]) && delete r[this.uid]);
          }
        }, removeAllEventListeners: function removeAllEventListeners() {
          r[this.uid] && delete r[this.uid];
        }, dispatchEvent: function dispatchEvent(e) {
          var n,
              o,
              a,
              s,
              u,
              c = {},
              l = !0;if ("string" !== i.typeOf(e)) {
            if (s = e, "string" !== i.typeOf(s.type)) throw new t.EventException(t.EventException.UNSPECIFIED_EVENT_TYPE_ERR);e = s.type, s.total !== u && s.loaded !== u && (c.total = s.total, c.loaded = s.loaded), c.async = s.async || !1;
          }if (-1 !== e.indexOf("::") ? function (t) {
            n = t[0], e = t[1];
          }(e.split("::")) : n = this.uid, e = e.toLowerCase(), o = r[n] && r[n][e]) {
            o.sort(function (e, t) {
              return t.priority - e.priority;
            }), a = [].slice.call(arguments), a.shift(), c.type = e, a.unshift(c);var d = [];i.each(o, function (e) {
              a[0].target = e.scope, c.async ? d.push(function (t) {
                setTimeout(function () {
                  t(e.fn.apply(e.scope, a) === !1);
                }, 1);
              }) : d.push(function (t) {
                t(e.fn.apply(e.scope, a) === !1);
              });
            }), d.length && i.inSeries(d, function (e) {
              l = !e;
            });
          }return l;
        }, bindOnce: function bindOnce(e, t, i, n) {
          var r = this;r.bind.call(this, e, function o() {
            return r.unbind(e, o), t.apply(this, arguments);
          }, i, n);
        }, bind: function bind() {
          this.addEventListener.apply(this, arguments);
        }, unbind: function unbind() {
          this.removeEventListener.apply(this, arguments);
        }, unbindAll: function unbindAll() {
          this.removeAllEventListeners.apply(this, arguments);
        }, trigger: function trigger() {
          return this.dispatchEvent.apply(this, arguments);
        }, handleEventProps: function handleEventProps(e) {
          var t = this;this.bind(e.join(" "), function (e) {
            var t = "on" + e.type.toLowerCase();"function" === i.typeOf(this[t]) && this[t].apply(this, arguments);
          }), i.each(e, function (e) {
            e = "on" + e.toLowerCase(e), "undefined" === i.typeOf(t[e]) && (t[e] = null);
          });
        } }), n.instance = new n(), n;
    }), n("moxie/runtime/Runtime", ["moxie/core/utils/Env", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/EventTarget"], function (e, t, i, n) {
      function r(e, n, o, s, u) {
        var c,
            l = this,
            d = t.guid(n + "_"),
            m = u || "browser";e = e || {}, a[d] = this, o = t.extend({ access_binary: !1, access_image_binary: !1, display_media: !1, do_cors: !1, drag_and_drop: !1, filter_by_extension: !0, resize_image: !1, report_upload_progress: !1, return_response_headers: !1, return_response_type: !1, return_status_code: !0, send_custom_headers: !1, select_file: !1, select_folder: !1, select_multiple: !0, send_binary_string: !1, send_browser_cookies: !0, send_multipart: !0, slice_blob: !1, stream_upload: !1, summon_file_dialog: !1, upload_filesize: !0, use_http_method: !0 }, o), e.preferred_caps && (m = r.getMode(s, e.preferred_caps, m)), c = function () {
          var e = {};return { exec: function exec(t, i, n, r) {
              return c[i] && (e[t] || (e[t] = { context: this, instance: new c[i]() }), e[t].instance[n]) ? e[t].instance[n].apply(this, r) : void 0;
            }, removeInstance: function removeInstance(t) {
              delete e[t];
            }, removeAllInstances: function removeAllInstances() {
              var i = this;t.each(e, function (e, n) {
                "function" === t.typeOf(e.instance.destroy) && e.instance.destroy.call(e.context), i.removeInstance(n);
              });
            } };
        }(), t.extend(this, { initialized: !1, uid: d, type: n, mode: r.getMode(s, e.required_caps, m), shimid: d + "_container", clients: 0, options: e, can: function can(e, i) {
            var n = arguments[2] || o;if ("string" === t.typeOf(e) && "undefined" === t.typeOf(i) && (e = r.parseCaps(e)), "object" === t.typeOf(e)) {
              for (var a in e) {
                if (!this.can(a, e[a], n)) return !1;
              }return !0;
            }return "function" === t.typeOf(n[e]) ? n[e].call(this, i) : i === n[e];
          }, getShimContainer: function getShimContainer() {
            var e,
                n = i.get(this.shimid);return n || (e = i.get(this.options.container) || document.body, n = document.createElement("div"), n.id = this.shimid, n.className = "moxie-shim moxie-shim-" + this.type, t.extend(n.style, { position: "absolute", top: "0px", left: "0px", width: "1px", height: "1px", overflow: "hidden" }), e.appendChild(n), e = null), n;
          }, getShim: function getShim() {
            return c;
          }, shimExec: function shimExec(e, t) {
            var i = [].slice.call(arguments, 2);return l.getShim().exec.call(this, this.uid, e, t, i);
          }, exec: function exec(e, t) {
            var i = [].slice.call(arguments, 2);return l[e] && l[e][t] ? l[e][t].apply(this, i) : l.shimExec.apply(this, arguments);
          }, destroy: function destroy() {
            if (l) {
              var e = i.get(this.shimid);e && e.parentNode.removeChild(e), c && c.removeAllInstances(), this.unbindAll(), delete a[this.uid], this.uid = null, d = l = c = e = null;
            }
          } }), this.mode && e.required_caps && !this.can(e.required_caps) && (this.mode = !1);
      }var o = {},
          a = {};return r.order = "html5,flash,silverlight,html4", r.getRuntime = function (e) {
        return a[e] ? a[e] : !1;
      }, r.addConstructor = function (e, t) {
        t.prototype = n.instance, o[e] = t;
      }, r.getConstructor = function (e) {
        return o[e] || null;
      }, r.getInfo = function (e) {
        var t = r.getRuntime(e);return t ? { uid: t.uid, type: t.type, mode: t.mode, can: function can() {
            return t.can.apply(t, arguments);
          } } : null;
      }, r.parseCaps = function (e) {
        var i = {};return "string" !== t.typeOf(e) ? e || {} : (t.each(e.split(","), function (e) {
          i[e] = !0;
        }), i);
      }, r.can = function (e, t) {
        var i,
            n,
            o = r.getConstructor(e);return o ? (i = new o({ required_caps: t }), n = i.mode, i.destroy(), !!n) : !1;
      }, r.thatCan = function (e, t) {
        var i = (t || r.order).split(/\s*,\s*/);for (var n in i) {
          if (r.can(i[n], e)) return i[n];
        }return null;
      }, r.getMode = function (e, i, n) {
        var r = null;if ("undefined" === t.typeOf(n) && (n = "browser"), i && !t.isEmptyObj(e)) {
          if (t.each(i, function (i, n) {
            if (e.hasOwnProperty(n)) {
              var o = e[n](i);if ("string" == typeof o && (o = [o]), r) {
                if (!(r = t.arrayIntersect(r, o))) return r = !1;
              } else r = o;
            }
          }), r) return -1 !== t.inArray(n, r) ? n : r[0];if (r === !1) return !1;
        }return n;
      }, r.getGlobalEventTarget = function () {
        if (/^moxie\./.test(e.global_event_dispatcher) && !e.can("access_global_ns")) {
          var i = t.guid("moxie_event_target_");window[i] = function (e, t) {
            n.instance.dispatchEvent(e, t);
          }, e.global_event_dispatcher = i;
        }return e.global_event_dispatcher;
      }, r.capTrue = function () {
        return !0;
      }, r.capFalse = function () {
        return !1;
      }, r.capTest = function (e) {
        return function () {
          return !!e;
        };
      }, r;
    }), n("moxie/runtime/RuntimeClient", ["moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/Runtime"], function (e, t, i, n) {
      return function () {
        var e;i.extend(this, { connectRuntime: function connectRuntime(r) {
            function o(i) {
              var a, u;return i.length ? (a = i.shift().toLowerCase(), (u = n.getConstructor(a)) ? (e = new u(r), e.bind("Init", function () {
                e.initialized = !0, setTimeout(function () {
                  e.clients++, s.ruid = e.uid, s.trigger("RuntimeInit", e);
                }, 1);
              }), e.bind("Error", function () {
                e.destroy(), o(i);
              }), e.bind("Exception", function (e, i) {
                var n = i.name + "(#" + i.code + ")" + (i.message ? ", from: " + i.message : "");s.trigger("RuntimeError", new t.RuntimeError(t.RuntimeError.EXCEPTION_ERR, n));
              }), e.mode ? (e.init(), void 0) : (e.trigger("Error"), void 0)) : (o(i), void 0)) : (s.trigger("RuntimeError", new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)), e = null, void 0);
            }var a,
                s = this;if ("string" === i.typeOf(r) ? a = r : "string" === i.typeOf(r.ruid) && (a = r.ruid), a) {
              if (e = n.getRuntime(a)) return s.ruid = a, e.clients++, e;throw new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR);
            }o((r.runtime_order || n.order).split(/\s*,\s*/));
          }, disconnectRuntime: function disconnectRuntime() {
            e && --e.clients <= 0 && e.destroy(), e = null;
          }, getRuntime: function getRuntime() {
            return e && e.uid ? e : e = null;
          }, exec: function exec() {
            return e ? e.exec.apply(this, arguments) : null;
          }, can: function can(t) {
            return e ? e.can(t) : !1;
          } });
      };
    }), n("moxie/file/Blob", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient"], function (e, t, i) {
      function n(o, a) {
        function s(t, i, o) {
          var a,
              s = r[this.uid];return "string" === e.typeOf(s) && s.length ? (a = new n(null, { type: o, size: i - t }), a.detach(s.substr(t, a.size)), a) : null;
        }i.call(this), o && this.connectRuntime(o), a ? "string" === e.typeOf(a) && (a = { data: a }) : a = {}, e.extend(this, { uid: a.uid || e.guid("uid_"), ruid: o, size: a.size || 0, type: a.type || "", slice: function slice(e, t, i) {
            return this.isDetached() ? s.apply(this, arguments) : this.getRuntime().exec.call(this, "Blob", "slice", this.getSource(), e, t, i);
          }, getSource: function getSource() {
            return r[this.uid] ? r[this.uid] : null;
          }, detach: function detach(e) {
            if (this.ruid && (this.getRuntime().exec.call(this, "Blob", "destroy"), this.disconnectRuntime(), this.ruid = null), e = e || "", "data:" == e.substr(0, 5)) {
              var i = e.indexOf(";base64,");this.type = e.substring(5, i), e = t.atob(e.substring(i + 8));
            }this.size = e.length, r[this.uid] = e;
          }, isDetached: function isDetached() {
            return !this.ruid && "string" === e.typeOf(r[this.uid]);
          }, destroy: function destroy() {
            this.detach(), delete r[this.uid];
          } }), a.data ? this.detach(a.data) : r[this.uid] = a;
      }var r = {};return n;
    }), n("moxie/core/I18n", ["moxie/core/utils/Basic"], function (e) {
      var t = {};return { addI18n: function addI18n(i) {
          return e.extend(t, i);
        }, translate: function translate(e) {
          return t[e] || e;
        }, _: function _(e) {
          return this.translate(e);
        }, sprintf: function sprintf(t) {
          var i = [].slice.call(arguments, 1);return t.replace(/%[a-z]/g, function () {
            var t = i.shift();return "undefined" !== e.typeOf(t) ? t : "";
          });
        } };
    }), n("moxie/core/utils/Mime", ["moxie/core/utils/Basic", "moxie/core/I18n"], function (e, t) {
      var i = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb xlt xla,application/vnd.ms-powerpoint,ppt pps pot ppa,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe",
          n = { mimes: {}, extensions: {}, addMimeType: function addMimeType(e) {
          var t,
              i,
              n,
              r = e.split(/,/);for (t = 0; t < r.length; t += 2) {
            for (n = r[t + 1].split(/ /), i = 0; i < n.length; i++) {
              this.mimes[n[i]] = r[t];
            }this.extensions[r[t]] = n;
          }
        }, extList2mimes: function extList2mimes(t, i) {
          var n,
              r,
              o,
              a,
              s = this,
              u = [];for (r = 0; r < t.length; r++) {
            for (n = t[r].extensions.toLowerCase().split(/\s*,\s*/), o = 0; o < n.length; o++) {
              if ("*" === n[o]) return [];if (a = s.mimes[n[o]], i && /^\w+$/.test(n[o])) u.push("." + n[o]);else if (a && -1 === e.inArray(a, u)) u.push(a);else if (!a) return [];
            }
          }return u;
        }, mimes2exts: function mimes2exts(t) {
          var i = this,
              n = [];return e.each(t, function (t) {
            if (t = t.toLowerCase(), "*" === t) return n = [], !1;var r = t.match(/^(\w+)\/(\*|\w+)$/);r && ("*" === r[2] ? e.each(i.extensions, function (e, t) {
              new RegExp("^" + r[1] + "/").test(t) && [].push.apply(n, i.extensions[t]);
            }) : i.extensions[t] && [].push.apply(n, i.extensions[t]));
          }), n;
        }, mimes2extList: function mimes2extList(i) {
          var n = [],
              r = [];return "string" === e.typeOf(i) && (i = e.trim(i).split(/\s*,\s*/)), r = this.mimes2exts(i), n.push({ title: t.translate("Files"), extensions: r.length ? r.join(",") : "*" }), n;
        }, getFileExtension: function getFileExtension(e) {
          var t = e && e.match(/\.([^.]+)$/);return t ? t[1].toLowerCase() : "";
        }, getFileMime: function getFileMime(e) {
          return this.mimes[this.getFileExtension(e)] || "";
        } };return n.addMimeType(i), n;
    }), n("moxie/file/FileInput", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Mime", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/I18n", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient"], function (e, t, i, n, r, o, a, s, u) {
      function c(t) {
        var o, c, d;if (-1 !== e.inArray(e.typeOf(t), ["string", "node"]) && (t = { browse_button: t }), c = n.get(t.browse_button), !c) throw new r.DOMException(r.DOMException.NOT_FOUND_ERR);d = { accept: [{ title: a.translate("All Files"), extensions: "*" }], multiple: !1, required_caps: !1, container: c.parentNode || document.body }, t = e.extend({}, d, t), "string" == typeof t.required_caps && (t.required_caps = s.parseCaps(t.required_caps)), "string" == typeof t.accept && (t.accept = i.mimes2extList(t.accept)), o = n.get(t.container), o || (o = document.body), "static" === n.getStyle(o, "position") && (o.style.position = "relative"), o = c = null, u.call(this), e.extend(this, { uid: e.guid("uid_"), ruid: null, shimid: null, files: null, init: function init() {
            var i = this;i.bind("RuntimeInit", function (r, o) {
              i.ruid = o.uid, i.shimid = o.shimid, i.bind("Ready", function () {
                i.trigger("Refresh");
              }, 999), i.bind("Refresh", function () {
                var i, r, a, s, u;a = n.get(t.browse_button), s = n.get(o.shimid), a && (i = n.getPos(a, n.get(t.container)), r = n.getSize(a), u = parseInt(n.getStyle(a, "z-index"), 10) || 0, s && e.extend(s.style, { top: i.y + "px", left: i.x + "px", width: r.w + "px", height: r.h + "px", zIndex: u + 1 })), s = a = null;
              }), o.exec.call(i, "FileInput", "init", t);
            }), i.connectRuntime(e.extend({}, t, { required_caps: { select_file: !0 } }));
          }, getOption: function getOption(e) {
            return t[e];
          }, setOption: function setOption(e, n) {
            if (t.hasOwnProperty(e)) {
              var o = t[e];switch (e) {case "accept":
                  "string" == typeof n && (n = i.mimes2extList(n));break;case "container":case "required_caps":
                  throw new r.FileException(r.FileException.NO_MODIFICATION_ALLOWED_ERR);}t[e] = n, this.exec("FileInput", "setOption", e, n), this.trigger("OptionChanged", e, n, o);
            }
          }, disable: function disable(t) {
            var i = this.getRuntime();i && this.exec("FileInput", "disable", "undefined" === e.typeOf(t) ? !0 : t);
          }, refresh: function refresh() {
            this.trigger("Refresh");
          }, destroy: function destroy() {
            var t = this.getRuntime();t && (t.exec.call(this, "FileInput", "destroy"), this.disconnectRuntime()), "array" === e.typeOf(this.files) && e.each(this.files, function (e) {
              e.destroy();
            }), this.files = null, this.unbindAll();
          } }), this.handleEventProps(l);
      }var l = ["ready", "change", "cancel", "mouseenter", "mouseleave", "mousedown", "mouseup"];return c.prototype = o.instance, c;
    }), n("moxie/file/File", ["moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/file/Blob"], function (e, t, i) {
      function n(n, r) {
        r || (r = {}), i.apply(this, arguments), this.type || (this.type = t.getFileMime(r.name));var o;if (r.name) o = r.name.replace(/\\/g, "/"), o = o.substr(o.lastIndexOf("/") + 1);else if (this.type) {
          var a = this.type.split("/")[0];o = e.guid(("" !== a ? a : "file") + "_"), t.extensions[this.type] && (o += "." + t.extensions[this.type][0]);
        }e.extend(this, { name: o || e.guid("file_"), relativePath: "", lastModifiedDate: r.lastModifiedDate || new Date().toLocaleString() });
      }return n.prototype = i.prototype, n;
    }), n("moxie/file/FileDrop", ["moxie/core/I18n", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/file/File", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget", "moxie/core/utils/Mime"], function (e, t, i, n, r, o, a, s, u) {
      function c(i) {
        var r,
            o = this;"string" == typeof i && (i = { drop_zone: i }), r = { accept: [{ title: e.translate("All Files"), extensions: "*" }], required_caps: { drag_and_drop: !0 } }, i = "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) ? n.extend({}, r, i) : r, i.container = t.get(i.drop_zone) || document.body, "static" === t.getStyle(i.container, "position") && (i.container.style.position = "relative"), "string" == typeof i.accept && (i.accept = u.mimes2extList(i.accept)), a.call(o), n.extend(o, { uid: n.guid("uid_"), ruid: null, files: null, init: function init() {
            o.bind("RuntimeInit", function (e, t) {
              o.ruid = t.uid, t.exec.call(o, "FileDrop", "init", i), o.dispatchEvent("ready");
            }), o.connectRuntime(i);
          }, destroy: function destroy() {
            var e = this.getRuntime();e && (e.exec.call(this, "FileDrop", "destroy"), this.disconnectRuntime()), this.files = null, this.unbindAll();
          } }), this.handleEventProps(l);
      }var l = ["ready", "dragenter", "dragleave", "drop", "error"];return c.prototype = s.instance, c;
    }), n("moxie/file/FileReader", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/runtime/RuntimeClient"], function (e, t, i, n, r, o) {
      function a() {
        function n(e, n) {
          if (this.trigger("loadstart"), this.readyState === a.LOADING) return this.trigger("error", new i.DOMException(i.DOMException.INVALID_STATE_ERR)), this.trigger("loadend"), void 0;if (!(n instanceof r)) return this.trigger("error", new i.DOMException(i.DOMException.NOT_FOUND_ERR)), this.trigger("loadend"), void 0;if (this.result = null, this.readyState = a.LOADING, n.isDetached()) {
            var o = n.getSource();switch (e) {case "readAsText":case "readAsBinaryString":
                this.result = o;break;case "readAsDataURL":
                this.result = "data:" + n.type + ";base64," + t.btoa(o);}this.readyState = a.DONE, this.trigger("load"), this.trigger("loadend");
          } else this.connectRuntime(n.ruid), this.exec("FileReader", "read", e, n);
        }o.call(this), e.extend(this, { uid: e.guid("uid_"), readyState: a.EMPTY, result: null, error: null, readAsBinaryString: function readAsBinaryString(e) {
            n.call(this, "readAsBinaryString", e);
          }, readAsDataURL: function readAsDataURL(e) {
            n.call(this, "readAsDataURL", e);
          }, readAsText: function readAsText(e) {
            n.call(this, "readAsText", e);
          }, abort: function abort() {
            this.result = null, -1 === e.inArray(this.readyState, [a.EMPTY, a.DONE]) && (this.readyState === a.LOADING && (this.readyState = a.DONE), this.exec("FileReader", "abort"), this.trigger("abort"), this.trigger("loadend"));
          }, destroy: function destroy() {
            this.abort(), this.exec("FileReader", "destroy"), this.disconnectRuntime(), this.unbindAll();
          } }), this.handleEventProps(s), this.bind("Error", function (e, t) {
          this.readyState = a.DONE, this.error = t;
        }, 999), this.bind("Load", function () {
          this.readyState = a.DONE;
        }, 999);
      }var s = ["loadstart", "progress", "load", "abort", "error", "loadend"];return a.EMPTY = 0, a.LOADING = 1, a.DONE = 2, a.prototype = n.instance, a;
    }), n("moxie/core/utils/Url", ["moxie/core/utils/Basic"], function (e) {
      var t = function t(i, n) {
        var r,
            o = ["source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
            a = o.length,
            s = { http: 80, https: 443 },
            u = {},
            c = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?(\[[\da-fA-F:]+\]|[^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,
            l = c.exec(i || ""),
            d = /^\/\/\w/.test(i);switch (e.typeOf(n)) {case "undefined":
            n = t(document.location.href, !1);break;case "string":
            n = t(n, !1);}for (; a--;) {
          l[a] && (u[o[a]] = l[a]);
        }if (r = !d && !u.scheme, (d || r) && (u.scheme = n.scheme), r) {
          u.host = n.host, u.port = n.port;var m = "";/^[^\/]/.test(u.path) && (m = n.path, m = /\/[^\/]*\.[^\/]*$/.test(m) ? m.replace(/\/[^\/]+$/, "/") : m.replace(/\/?$/, "/")), u.path = m + (u.path || "");
        }return u.port || (u.port = s[u.scheme] || 80), u.port = parseInt(u.port, 10), u.path || (u.path = "/"), delete u.source, u;
      },
          i = function i(e) {
        var i = { http: 80, https: 443 },
            n = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : t(e);return n.scheme + "://" + n.host + (n.port !== i[n.scheme] ? ":" + n.port : "") + n.path + (n.query ? n.query : "");
      },
          n = function n(e) {
        function i(e) {
          return [e.scheme, e.host, e.port].join("/");
        }return "string" == typeof e && (e = t(e)), i(t()) === i(e);
      };return { parseUrl: t, resolveUrl: i, hasSameOrigin: n };
    }), n("moxie/runtime/RuntimeTarget", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function (e, t, i) {
      function n() {
        this.uid = e.guid("uid_"), t.call(this), this.destroy = function () {
          this.disconnectRuntime(), this.unbindAll();
        };
      }return n.prototype = i.instance, n;
    }), n("moxie/file/FileReaderSync", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/utils/Encode"], function (e, t, i) {
      return function () {
        function n(e, t) {
          if (!t.isDetached()) {
            var n = this.connectRuntime(t.ruid).exec.call(this, "FileReaderSync", "read", e, t);return this.disconnectRuntime(), n;
          }var r = t.getSource();switch (e) {case "readAsBinaryString":
              return r;case "readAsDataURL":
              return "data:" + t.type + ";base64," + i.btoa(r);case "readAsText":
              for (var o = "", a = 0, s = r.length; s > a; a++) {
                o += String.fromCharCode(r[a]);
              }return o;}
        }t.call(this), e.extend(this, { uid: e.guid("uid_"), readAsBinaryString: function readAsBinaryString(e) {
            return n.call(this, "readAsBinaryString", e);
          }, readAsDataURL: function readAsDataURL(e) {
            return n.call(this, "readAsDataURL", e);
          }, readAsText: function readAsText(e) {
            return n.call(this, "readAsText", e);
          } });
      };
    }), n("moxie/xhr/FormData", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/file/Blob"], function (e, t, i) {
      function n() {
        var e,
            n = [];t.extend(this, { append: function append(r, o) {
            var a = this,
                s = t.typeOf(o);o instanceof i ? e = { name: r, value: o } : "array" === s ? (r += "[]", t.each(o, function (e) {
              a.append(r, e);
            })) : "object" === s ? t.each(o, function (e, t) {
              a.append(r + "[" + t + "]", e);
            }) : "null" === s || "undefined" === s || "number" === s && isNaN(o) ? a.append(r, "false") : n.push({ name: r, value: o.toString() });
          }, hasBlob: function hasBlob() {
            return !!this.getBlob();
          }, getBlob: function getBlob() {
            return e && e.value || null;
          }, getBlobName: function getBlobName() {
            return e && e.name || null;
          }, each: function each(i) {
            t.each(n, function (e) {
              i(e.value, e.name);
            }), e && i(e.value, e.name);
          }, destroy: function destroy() {
            e = null, n = [];
          } });
      }return n;
    }), n("moxie/xhr/XMLHttpRequest", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/utils/Encode", "moxie/core/utils/Url", "moxie/runtime/Runtime", "moxie/runtime/RuntimeTarget", "moxie/file/Blob", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/core/utils/Env", "moxie/core/utils/Mime"], function (e, t, i, n, r, o, a, s, u, c, l, d) {
      function m() {
        this.uid = e.guid("uid_");
      }function h() {
        function i(e, t) {
          return I.hasOwnProperty(e) ? 1 === arguments.length ? l.can("define_property") ? I[e] : A[e] : (l.can("define_property") ? I[e] = t : A[e] = t, void 0) : void 0;
        }function u(t) {
          function n() {
            _ && (_.destroy(), _ = null), s.dispatchEvent("loadend"), s = null;
          }function r(r) {
            _.bind("LoadStart", function (e) {
              i("readyState", h.LOADING), s.dispatchEvent("readystatechange"), s.dispatchEvent(e), L && s.upload.dispatchEvent(e);
            }), _.bind("Progress", function (e) {
              i("readyState") !== h.LOADING && (i("readyState", h.LOADING), s.dispatchEvent("readystatechange")), s.dispatchEvent(e);
            }), _.bind("UploadProgress", function (e) {
              L && s.upload.dispatchEvent({ type: "progress", lengthComputable: !1, total: e.total, loaded: e.loaded });
            }), _.bind("Load", function (t) {
              i("readyState", h.DONE), i("status", Number(r.exec.call(_, "XMLHttpRequest", "getStatus") || 0)), i("statusText", f[i("status")] || ""), i("response", r.exec.call(_, "XMLHttpRequest", "getResponse", i("responseType"))), ~e.inArray(i("responseType"), ["text", ""]) ? i("responseText", i("response")) : "document" === i("responseType") && i("responseXML", i("response")), U = r.exec.call(_, "XMLHttpRequest", "getAllResponseHeaders"), s.dispatchEvent("readystatechange"), i("status") > 0 ? (L && s.upload.dispatchEvent(t), s.dispatchEvent(t)) : (F = !0, s.dispatchEvent("error")), n();
            }), _.bind("Abort", function (e) {
              s.dispatchEvent(e), n();
            }), _.bind("Error", function (e) {
              F = !0, i("readyState", h.DONE), s.dispatchEvent("readystatechange"), M = !0, s.dispatchEvent(e), n();
            }), r.exec.call(_, "XMLHttpRequest", "send", { url: x, method: v, async: T, user: w, password: y, headers: S, mimeType: D, encoding: O, responseType: s.responseType, withCredentials: s.withCredentials, options: k }, t);
          }var s = this;E = new Date().getTime(), _ = new a(), "string" == typeof k.required_caps && (k.required_caps = o.parseCaps(k.required_caps)), k.required_caps = e.extend({}, k.required_caps, { return_response_type: s.responseType }), t instanceof c && (k.required_caps.send_multipart = !0), e.isEmptyObj(S) || (k.required_caps.send_custom_headers = !0), B || (k.required_caps.do_cors = !0), k.ruid ? r(_.connectRuntime(k)) : (_.bind("RuntimeInit", function (e, t) {
            r(t);
          }), _.bind("RuntimeError", function (e, t) {
            s.dispatchEvent("RuntimeError", t);
          }), _.connectRuntime(k));
        }function g() {
          i("responseText", ""), i("responseXML", null), i("response", null), i("status", 0), i("statusText", ""), E = b = null;
        }var x,
            v,
            w,
            y,
            E,
            b,
            _,
            R,
            A = this,
            I = { timeout: 0, readyState: h.UNSENT, withCredentials: !1, status: 0, statusText: "", responseType: "", responseXML: null, responseText: null, response: null },
            T = !0,
            S = {},
            O = null,
            D = null,
            N = !1,
            C = !1,
            L = !1,
            M = !1,
            F = !1,
            B = !1,
            P = null,
            H = null,
            k = {},
            U = "";e.extend(this, I, { uid: e.guid("uid_"), upload: new m(), open: function open(o, a, s, u, c) {
            var l;if (!o || !a) throw new t.DOMException(t.DOMException.SYNTAX_ERR);if (/[\u0100-\uffff]/.test(o) || n.utf8_encode(o) !== o) throw new t.DOMException(t.DOMException.SYNTAX_ERR);if (~e.inArray(o.toUpperCase(), ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK"]) && (v = o.toUpperCase()), ~e.inArray(v, ["CONNECT", "TRACE", "TRACK"])) throw new t.DOMException(t.DOMException.SECURITY_ERR);if (a = n.utf8_encode(a), l = r.parseUrl(a), B = r.hasSameOrigin(l), x = r.resolveUrl(a), (u || c) && !B) throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);if (w = u || l.user, y = c || l.pass, T = s || !0, T === !1 && (i("timeout") || i("withCredentials") || "" !== i("responseType"))) throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);N = !T, C = !1, S = {}, g.call(this), i("readyState", h.OPENED), this.dispatchEvent("readystatechange");
          }, setRequestHeader: function setRequestHeader(r, o) {
            var a = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];if (i("readyState") !== h.OPENED || C) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if (/[\u0100-\uffff]/.test(r) || n.utf8_encode(r) !== r) throw new t.DOMException(t.DOMException.SYNTAX_ERR);return r = e.trim(r).toLowerCase(), ~e.inArray(r, a) || /^(proxy\-|sec\-)/.test(r) ? !1 : (S[r] ? S[r] += ", " + o : S[r] = o, !0);
          }, hasRequestHeader: function hasRequestHeader(e) {
            return e && S[e.toLowerCase()] || !1;
          }, getAllResponseHeaders: function getAllResponseHeaders() {
            return U || "";
          }, getResponseHeader: function getResponseHeader(t) {
            return t = t.toLowerCase(), F || ~e.inArray(t, ["set-cookie", "set-cookie2"]) ? null : U && "" !== U && (R || (R = {}, e.each(U.split(/\r\n/), function (t) {
              var i = t.split(/:\s+/);2 === i.length && (i[0] = e.trim(i[0]), R[i[0].toLowerCase()] = { header: i[0], value: e.trim(i[1]) });
            })), R.hasOwnProperty(t)) ? R[t].header + ": " + R[t].value : null;
          }, overrideMimeType: function overrideMimeType(n) {
            var r, o;if (~e.inArray(i("readyState"), [h.LOADING, h.DONE])) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if (n = e.trim(n.toLowerCase()), /;/.test(n) && (r = n.match(/^([^;]+)(?:;\scharset\=)?(.*)$/)) && (n = r[1], r[2] && (o = r[2])), !d.mimes[n]) throw new t.DOMException(t.DOMException.SYNTAX_ERR);P = n, H = o;
          }, send: function send(i, r) {
            if (k = "string" === e.typeOf(r) ? { ruid: r } : r ? r : {}, this.readyState !== h.OPENED || C) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if (i instanceof s) k.ruid = i.ruid, D = i.type || "application/octet-stream";else if (i instanceof c) {
              if (i.hasBlob()) {
                var o = i.getBlob();k.ruid = o.ruid, D = o.type || "application/octet-stream";
              }
            } else "string" == typeof i && (O = "UTF-8", D = "text/plain;charset=UTF-8", i = n.utf8_encode(i));this.withCredentials || (this.withCredentials = k.required_caps && k.required_caps.send_browser_cookies && !B), L = !N && this.upload.hasEventListener(), F = !1, M = !i, N || (C = !0), u.call(this, i);
          }, abort: function abort() {
            if (F = !0, N = !1, ~e.inArray(i("readyState"), [h.UNSENT, h.OPENED, h.DONE])) i("readyState", h.UNSENT);else {
              if (i("readyState", h.DONE), C = !1, !_) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);_.getRuntime().exec.call(_, "XMLHttpRequest", "abort", M), M = !0;
            }
          }, destroy: function destroy() {
            _ && ("function" === e.typeOf(_.destroy) && _.destroy(), _ = null), this.unbindAll(), this.upload && (this.upload.unbindAll(), this.upload = null);
          } }), this.handleEventProps(p.concat(["readystatechange"])), this.upload.handleEventProps(p);
      }var f = { 100: "Continue", 101: "Switching Protocols", 102: "Processing", 200: "OK", 201: "Created", 202: "Accepted", 203: "Non-Authoritative Information", 204: "No Content", 205: "Reset Content", 206: "Partial Content", 207: "Multi-Status", 226: "IM Used", 300: "Multiple Choices", 301: "Moved Permanently", 302: "Found", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 306: "Reserved", 307: "Temporary Redirect", 400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Request Entity Too Large", 414: "Request-URI Too Long", 415: "Unsupported Media Type", 416: "Requested Range Not Satisfiable", 417: "Expectation Failed", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 426: "Upgrade Required", 500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 510: "Not Extended" };m.prototype = i.instance;var p = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"];return h.UNSENT = 0, h.OPENED = 1, h.HEADERS_RECEIVED = 2, h.LOADING = 3, h.DONE = 4, h.prototype = i.instance, h;
    }), n("moxie/runtime/Transporter", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function (e, t, i, n) {
      function r() {
        function n() {
          l = d = 0, c = this.result = null;
        }function o(t, i) {
          var n = this;u = i, n.bind("TransportingProgress", function (t) {
            d = t.loaded, l > d && -1 === e.inArray(n.state, [r.IDLE, r.DONE]) && a.call(n);
          }, 999), n.bind("TransportingComplete", function () {
            d = l, n.state = r.DONE, c = null, n.result = u.exec.call(n, "Transporter", "getAsBlob", t || "");
          }, 999), n.state = r.BUSY, n.trigger("TransportingStarted"), a.call(n);
        }function a() {
          var e,
              i = this,
              n = l - d;m > n && (m = n), e = t.btoa(c.substr(d, m)), u.exec.call(i, "Transporter", "receive", e, l);
        }var s, u, c, l, d, m;i.call(this), e.extend(this, { uid: e.guid("uid_"), state: r.IDLE, result: null, transport: function transport(t, i, r) {
            var a = this;if (r = e.extend({ chunk_size: 204798 }, r), (s = r.chunk_size % 3) && (r.chunk_size += 3 - s), m = r.chunk_size, n.call(this), c = t, l = t.length, "string" === e.typeOf(r) || r.ruid) o.call(a, i, this.connectRuntime(r));else {
              var u = function u(e, t) {
                a.unbind("RuntimeInit", u), o.call(a, i, t);
              };this.bind("RuntimeInit", u), this.connectRuntime(r);
            }
          }, abort: function abort() {
            var e = this;e.state = r.IDLE, u && (u.exec.call(e, "Transporter", "clear"), e.trigger("TransportingAborted")), n.call(e);
          }, destroy: function destroy() {
            this.unbindAll(), u = null, this.disconnectRuntime(), n.call(this);
          } });
      }return r.IDLE = 0, r.BUSY = 1, r.DONE = 2, r.prototype = n.instance, r;
    }), n("moxie/image/Image", ["moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/file/FileReaderSync", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/runtime/Transporter", "moxie/core/utils/Env", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/file/File", "moxie/core/utils/Encode"], function (e, t, i, n, r, o, a, s, u, c, l, d, m) {
      function h() {
        function n(e) {
          try {
            return e || (e = this.exec("Image", "getInfo")), this.size = e.size, this.width = e.width, this.height = e.height, this.type = e.type, this.meta = e.meta, "" === this.name && (this.name = e.name), !0;
          } catch (t) {
            return this.trigger("error", t.code), !1;
          }
        }function c(t) {
          var n = e.typeOf(t);try {
            if (t instanceof h) {
              if (!t.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);p.apply(this, arguments);
            } else if (t instanceof l) {
              if (!~e.inArray(t.type, ["image/jpeg", "image/png"])) throw new i.ImageError(i.ImageError.WRONG_FORMAT);g.apply(this, arguments);
            } else if (-1 !== e.inArray(n, ["blob", "file"])) c.call(this, new d(null, t), arguments[1]);else if ("string" === n) "data:" === t.substr(0, 5) ? c.call(this, new l(null, { data: t }), arguments[1]) : x.apply(this, arguments);else {
              if ("node" !== n || "img" !== t.nodeName.toLowerCase()) throw new i.DOMException(i.DOMException.TYPE_MISMATCH_ERR);c.call(this, t.src, arguments[1]);
            }
          } catch (r) {
            this.trigger("error", r.code);
          }
        }function p(t, i) {
          var n = this.connectRuntime(t.ruid);this.ruid = n.uid, n.exec.call(this, "Image", "loadFromImage", t, "undefined" === e.typeOf(i) ? !0 : i);
        }function g(t, i) {
          function n(e) {
            r.ruid = e.uid, e.exec.call(r, "Image", "loadFromBlob", t);
          }var r = this;r.name = t.name || "", t.isDetached() ? (this.bind("RuntimeInit", function (e, t) {
            n(t);
          }), i && "string" == typeof i.required_caps && (i.required_caps = o.parseCaps(i.required_caps)), this.connectRuntime(e.extend({ required_caps: { access_image_binary: !0, resize_image: !0 } }, i))) : n(this.connectRuntime(t.ruid));
        }function x(e, t) {
          var i,
              n = this;i = new r(), i.open("get", e), i.responseType = "blob", i.onprogress = function (e) {
            n.trigger(e);
          }, i.onload = function () {
            g.call(n, i.response, !0);
          }, i.onerror = function (e) {
            n.trigger(e);
          }, i.onloadend = function () {
            i.destroy();
          }, i.bind("RuntimeError", function (e, t) {
            n.trigger("RuntimeError", t);
          }), i.send(null, t);
        }a.call(this), e.extend(this, { uid: e.guid("uid_"), ruid: null, name: "", size: 0, width: 0, height: 0, type: "", meta: {}, clone: function clone() {
            this.load.apply(this, arguments);
          }, load: function load() {
            c.apply(this, arguments);
          }, resize: function resize(t) {
            var n,
                r,
                o = this,
                a = { x: 0, y: 0, width: o.width, height: o.height },
                s = e.extendIf({ width: o.width, height: o.height, type: o.type || "image/jpeg", quality: 90, crop: !1, fit: !0, preserveHeaders: !0, resample: "default", multipass: !0 }, t);try {
              if (!o.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);if (o.width > h.MAX_RESIZE_WIDTH || o.height > h.MAX_RESIZE_HEIGHT) throw new i.ImageError(i.ImageError.MAX_RESOLUTION_ERR);if (n = o.meta && o.meta.tiff && o.meta.tiff.Orientation || 1, -1 !== e.inArray(n, [5, 6, 7, 8])) {
                var u = s.width;s.width = s.height, s.height = u;
              }if (s.crop) {
                switch (r = Math.max(s.width / o.width, s.height / o.height), t.fit ? (a.width = Math.min(Math.ceil(s.width / r), o.width), a.height = Math.min(Math.ceil(s.height / r), o.height), r = s.width / a.width) : (a.width = Math.min(s.width, o.width), a.height = Math.min(s.height, o.height), r = 1), "boolean" == typeof s.crop && (s.crop = "cc"), s.crop.toLowerCase().replace(/_/, "-")) {case "rb":case "right-bottom":
                    a.x = o.width - a.width, a.y = o.height - a.height;break;case "cb":case "center-bottom":
                    a.x = Math.floor((o.width - a.width) / 2), a.y = o.height - a.height;break;case "lb":case "left-bottom":
                    a.x = 0, a.y = o.height - a.height;break;case "lt":case "left-top":
                    a.x = 0, a.y = 0;break;case "ct":case "center-top":
                    a.x = Math.floor((o.width - a.width) / 2), a.y = 0;break;case "rt":case "right-top":
                    a.x = o.width - a.width, a.y = 0;break;case "rc":case "right-center":case "right-middle":
                    a.x = o.width - a.width, a.y = Math.floor((o.height - a.height) / 2);break;case "lc":case "left-center":case "left-middle":
                    a.x = 0, a.y = Math.floor((o.height - a.height) / 2);break;case "cc":case "center-center":case "center-middle":default:
                    a.x = Math.floor((o.width - a.width) / 2), a.y = Math.floor((o.height - a.height) / 2);}a.x = Math.max(a.x, 0), a.y = Math.max(a.y, 0);
              } else r = Math.min(s.width / o.width, s.height / o.height), r > 1 && !s.fit && (r = 1);this.exec("Image", "resize", a, r, s);
            } catch (c) {
              o.trigger("error", c.code);
            }
          }, downsize: function downsize(t) {
            var i,
                n = { width: this.width, height: this.height, type: this.type || "image/jpeg", quality: 90, crop: !1, fit: !1, preserveHeaders: !0, resample: "default" };i = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e.extend(n, t) : e.extend(n, { width: arguments[0], height: arguments[1], crop: arguments[2], preserveHeaders: arguments[3] }), this.resize(i);
          }, crop: function crop(e, t, i) {
            this.downsize(e, t, !0, i);
          }, getAsCanvas: function getAsCanvas() {
            if (!u.can("create_canvas")) throw new i.RuntimeError(i.RuntimeError.NOT_SUPPORTED_ERR);return this.exec("Image", "getAsCanvas");
          }, getAsBlob: function getAsBlob(e, t) {
            if (!this.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);return this.exec("Image", "getAsBlob", e || "image/jpeg", t || 90);
          }, getAsDataURL: function getAsDataURL(e, t) {
            if (!this.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);return this.exec("Image", "getAsDataURL", e || "image/jpeg", t || 90);
          }, getAsBinaryString: function getAsBinaryString(e, t) {
            var i = this.getAsDataURL(e, t);return m.atob(i.substring(i.indexOf("base64,") + 7));
          }, embed: function embed(n, r) {
            function o(t, r) {
              var o = this;if (u.can("create_canvas")) {
                var l = o.getAsCanvas();if (l) return n.appendChild(l), l = null, o.destroy(), c.trigger("embedded"), void 0;
              }var d = o.getAsDataURL(t, r);if (!d) throw new i.ImageError(i.ImageError.WRONG_FORMAT);if (u.can("use_data_uri_of", d.length)) n.innerHTML = '<img src="' + d + '" width="' + o.width + '" height="' + o.height + '" alt="" />', o.destroy(), c.trigger("embedded");else {
                var h = new s();h.bind("TransportingComplete", function () {
                  a = c.connectRuntime(this.result.ruid), c.bind("Embedded", function () {
                    e.extend(a.getShimContainer().style, { top: "0px", left: "0px", width: o.width + "px", height: o.height + "px" }), a = null;
                  }, 999), a.exec.call(c, "ImageView", "display", this.result.uid, width, height), o.destroy();
                }), h.transport(m.atob(d.substring(d.indexOf("base64,") + 7)), t, { required_caps: { display_media: !0 }, runtime_order: "flash,silverlight", container: n });
              }
            }var a,
                c = this,
                l = e.extend({ width: this.width, height: this.height, type: this.type || "image/jpeg", quality: 90, fit: !0, resample: "nearest" }, r);try {
              if (!(n = t.get(n))) throw new i.DOMException(i.DOMException.INVALID_NODE_TYPE_ERR);if (!this.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);this.width > h.MAX_RESIZE_WIDTH || this.height > h.MAX_RESIZE_HEIGHT;var d = new h();return d.bind("Resize", function () {
                o.call(this, l.type, l.quality);
              }), d.bind("Load", function () {
                this.downsize(l);
              }), this.meta.thumb && this.meta.thumb.width >= l.width && this.meta.thumb.height >= l.height ? d.load(this.meta.thumb.data) : d.clone(this, !1), d;
            } catch (f) {
              this.trigger("error", f.code);
            }
          }, destroy: function destroy() {
            this.ruid && (this.getRuntime().exec.call(this, "Image", "destroy"), this.disconnectRuntime()), this.meta && this.meta.thumb && this.meta.thumb.data.destroy(), this.unbindAll();
          } }), this.handleEventProps(f), this.bind("Load Resize", function () {
          return n.call(this);
        }, 999);
      }var f = ["progress", "load", "error", "resize", "embedded"];return h.MAX_RESIZE_WIDTH = 8192, h.MAX_RESIZE_HEIGHT = 8192, h.prototype = c.instance, h;
    }), n("moxie/runtime/html5/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function (e, t, i, n) {
      function o(t) {
        var o = this,
            u = i.capTest,
            c = i.capTrue,
            l = e.extend({ access_binary: u(window.FileReader || window.File && window.File.getAsDataURL), access_image_binary: function access_image_binary() {
            return o.can("access_binary") && !!s.Image;
          }, display_media: u((n.can("create_canvas") || n.can("use_data_uri_over32kb")) && r("moxie/image/Image")), do_cors: u(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest()), drag_and_drop: u(function () {
            var e = document.createElement("div");return ("draggable" in e || "ondragstart" in e && "ondrop" in e) && ("IE" !== n.browser || n.verComp(n.version, 9, ">"));
          }()), filter_by_extension: u(function () {
            return !("Chrome" === n.browser && n.verComp(n.version, 28, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<") || "Safari" === n.browser && n.verComp(n.version, 7, "<") || "Firefox" === n.browser && n.verComp(n.version, 37, "<"));
          }()), return_response_headers: c, return_response_type: function return_response_type(e) {
            return "json" === e && window.JSON ? !0 : n.can("return_response_type", e);
          }, return_status_code: c, report_upload_progress: u(window.XMLHttpRequest && new XMLHttpRequest().upload), resize_image: function resize_image() {
            return o.can("access_binary") && n.can("create_canvas");
          }, select_file: function select_file() {
            return n.can("use_fileinput") && window.File;
          }, select_folder: function select_folder() {
            return o.can("select_file") && ("Chrome" === n.browser && n.verComp(n.version, 21, ">=") || "Firefox" === n.browser && n.verComp(n.version, 42, ">="));
          }, select_multiple: function select_multiple() {
            return !(!o.can("select_file") || "Safari" === n.browser && "Windows" === n.os || "iOS" === n.os && n.verComp(n.osVersion, "7.0.0", ">") && n.verComp(n.osVersion, "8.0.0", "<"));
          }, send_binary_string: u(window.XMLHttpRequest && (new XMLHttpRequest().sendAsBinary || window.Uint8Array && window.ArrayBuffer)), send_custom_headers: u(window.XMLHttpRequest), send_multipart: function send_multipart() {
            return !!(window.XMLHttpRequest && new XMLHttpRequest().upload && window.FormData) || o.can("send_binary_string");
          }, slice_blob: u(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)), stream_upload: function stream_upload() {
            return o.can("slice_blob") && o.can("send_multipart");
          }, summon_file_dialog: function summon_file_dialog() {
            return o.can("select_file") && !("Firefox" === n.browser && n.verComp(n.version, 4, "<") || "Opera" === n.browser && n.verComp(n.version, 12, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<"));
          }, upload_filesize: c, use_http_method: c }, arguments[2]);i.call(this, t, arguments[1] || a, l), e.extend(this, { init: function init() {
            this.trigger("Init");
          }, destroy: function (e) {
            return function () {
              e.call(o), e = o = null;
            };
          }(this.destroy) }), e.extend(this.getShim(), s);
      }var a = "html5",
          s = {};return i.addConstructor(a, o), s;
    }), n("moxie/runtime/html5/file/Blob", ["moxie/runtime/html5/Runtime", "moxie/file/Blob"], function (e, t) {
      function i() {
        function e(e, t, i) {
          var n;if (!window.File.prototype.slice) return (n = window.File.prototype.webkitSlice || window.File.prototype.mozSlice) ? n.call(e, t, i) : null;try {
            return e.slice(), e.slice(t, i);
          } catch (r) {
            return e.slice(t, i - t);
          }
        }this.slice = function () {
          return new t(this.getRuntime().uid, e.apply(this, arguments));
        }, this.destroy = function () {
          this.getRuntime().getShim().removeInstance(this.uid);
        };
      }return e.Blob = i;
    }), n("moxie/core/utils/Events", ["moxie/core/utils/Basic"], function (e) {
      function t() {
        this.returnValue = !1;
      }function i() {
        this.cancelBubble = !0;
      }var n = {},
          r = "moxie_" + e.guid(),
          o = function o(_o, a, s, u) {
        var c, l;a = a.toLowerCase(), _o.addEventListener ? (c = s, _o.addEventListener(a, c, !1)) : _o.attachEvent && (c = function c() {
          var e = window.event;e.target || (e.target = e.srcElement), e.preventDefault = t, e.stopPropagation = i, s(e);
        }, _o.attachEvent("on" + a, c)), _o[r] || (_o[r] = e.guid()), n.hasOwnProperty(_o[r]) || (n[_o[r]] = {}), l = n[_o[r]], l.hasOwnProperty(a) || (l[a] = []), l[a].push({ func: c, orig: s, key: u });
      },
          a = function a(t, i, o) {
        var a, s;if (i = i.toLowerCase(), t[r] && n[t[r]] && n[t[r]][i]) {
          a = n[t[r]][i];for (var u = a.length - 1; u >= 0 && (a[u].orig !== o && a[u].key !== o || (t.removeEventListener ? t.removeEventListener(i, a[u].func, !1) : t.detachEvent && t.detachEvent("on" + i, a[u].func), a[u].orig = null, a[u].func = null, a.splice(u, 1), o === s)); u--) {}if (a.length || delete n[t[r]][i], e.isEmptyObj(n[t[r]])) {
            delete n[t[r]];try {
              delete t[r];
            } catch (c) {
              t[r] = s;
            }
          }
        }
      },
          s = function s(t, i) {
        t && t[r] && e.each(n[t[r]], function (e, n) {
          a(t, n, i);
        });
      };return { addEvent: o, removeEvent: a, removeAllEvents: s };
    }), n("moxie/runtime/html5/file/FileInput", ["moxie/runtime/html5/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (e, t, i, n, r, o, a) {
      function s() {
        var e, s;i.extend(this, { init: function init(u) {
            var c,
                l,
                d,
                m,
                h,
                f,
                p = this,
                g = p.getRuntime();e = u, d = o.extList2mimes(e.accept, g.can("filter_by_extension")), l = g.getShimContainer(), l.innerHTML = '<input id="' + g.uid + '" type="file" style="font-size:999px;opacity:0;"' + (e.multiple && g.can("select_multiple") ? "multiple" : "") + (e.directory && g.can("select_folder") ? "webkitdirectory directory" : "") + (d ? ' accept="' + d.join(",") + '"' : "") + " />", c = n.get(g.uid), i.extend(c.style, { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }), m = n.get(e.browse_button), s = n.getStyle(m, "z-index") || "auto", g.can("summon_file_dialog") && ("static" === n.getStyle(m, "position") && (m.style.position = "relative"), r.addEvent(m, "click", function (e) {
              var t = n.get(g.uid);t && !t.disabled && t.click(), e.preventDefault();
            }, p.uid), p.bind("Refresh", function () {
              h = parseInt(s, 10) || 1, n.get(e.browse_button).style.zIndex = h, this.getRuntime().getShimContainer().style.zIndex = h - 1;
            })), f = g.can("summon_file_dialog") ? m : l, r.addEvent(f, "mouseover", function () {
              p.trigger("mouseenter");
            }, p.uid), r.addEvent(f, "mouseout", function () {
              p.trigger("mouseleave");
            }, p.uid), r.addEvent(f, "mousedown", function () {
              p.trigger("mousedown");
            }, p.uid), r.addEvent(n.get(e.container), "mouseup", function () {
              p.trigger("mouseup");
            }, p.uid), (g.can("summon_file_dialog") ? c : m).setAttribute("tabindex", -1), c.onchange = function x() {
              if (p.files = [], i.each(this.files, function (i) {
                var n = "";return e.directory && "." == i.name ? !0 : (i.webkitRelativePath && (n = "/" + i.webkitRelativePath.replace(/^\//, "")), i = new t(g.uid, i), i.relativePath = n, p.files.push(i), void 0);
              }), "IE" !== a.browser && "IEMobile" !== a.browser) this.value = "";else {
                var n = this.cloneNode(!0);this.parentNode.replaceChild(n, this), n.onchange = x;
              }p.files.length && p.trigger("change");
            }, p.trigger({ type: "ready", async: !0 }), l = null;
          }, setOption: function setOption(e, t) {
            var i = this.getRuntime(),
                r = n.get(i.uid);switch (e) {case "accept":
                if (t) {
                  var a = t.mimes || o.extList2mimes(t, i.can("filter_by_extension"));r.setAttribute("accept", a.join(","));
                } else r.removeAttribute("accept");break;case "directory":
                t && i.can("select_folder") ? (r.setAttribute("directory", ""), r.setAttribute("webkitdirectory", "")) : (r.removeAttribute("directory"), r.removeAttribute("webkitdirectory"));break;case "multiple":
                t && i.can("select_multiple") ? r.setAttribute("multiple", "") : r.removeAttribute("multiple");}
          }, disable: function disable(e) {
            var t,
                i = this.getRuntime();(t = n.get(i.uid)) && (t.disabled = !!e);
          }, destroy: function destroy() {
            var t = this.getRuntime(),
                i = t.getShim(),
                o = t.getShimContainer(),
                a = e && n.get(e.container),
                u = e && n.get(e.browse_button);a && r.removeAllEvents(a, this.uid), u && (r.removeAllEvents(u, this.uid), u.style.zIndex = s), o && (r.removeAllEvents(o, this.uid), o.innerHTML = ""), i.removeInstance(this.uid), e = o = a = u = i = null;
          } });
      }return e.FileInput = s;
    }), n("moxie/runtime/html5/file/FileDrop", ["moxie/runtime/html5/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime"], function (e, t, i, n, r, o) {
      function a() {
        function e(e) {
          if (!e.dataTransfer || !e.dataTransfer.types) return !1;var t = i.toArray(e.dataTransfer.types || []);return -1 !== i.inArray("Files", t) || -1 !== i.inArray("public.file-url", t) || -1 !== i.inArray("application/x-moz-file", t);
        }function a(e, i) {
          if (u(e)) {
            var n = new t(f, e);n.relativePath = i || "", p.push(n);
          }
        }function s(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            [].push.apply(t, e[n].extensions.split(/\s*,\s*/));
          }return -1 === i.inArray("*", t) ? t : [];
        }function u(e) {
          if (!g.length) return !0;var t = o.getFileExtension(e.name);return !t || -1 !== i.inArray(t, g);
        }function c(e, t) {
          var n = [];i.each(e, function (e) {
            var t = e.webkitGetAsEntry();t && (t.isFile ? a(e.getAsFile(), t.fullPath) : n.push(t));
          }), n.length ? l(n, t) : t();
        }function l(e, t) {
          var n = [];i.each(e, function (e) {
            n.push(function (t) {
              d(e, t);
            });
          }), i.inSeries(n, function () {
            t();
          });
        }function d(e, t) {
          e.isFile ? e.file(function (i) {
            a(i, e.fullPath), t();
          }, function () {
            t();
          }) : e.isDirectory ? m(e, t) : t();
        }function m(e, t) {
          function i(e) {
            r.readEntries(function (t) {
              t.length ? ([].push.apply(n, t), i(e)) : e();
            }, e);
          }var n = [],
              r = e.createReader();i(function () {
            l(n, t);
          });
        }var h,
            f,
            p = [],
            g = [];i.extend(this, { init: function init(t) {
            var n,
                o = this;h = t, f = o.ruid, g = s(h.accept), n = h.container, r.addEvent(n, "dragover", function (t) {
              e(t) && (t.preventDefault(), t.dataTransfer.dropEffect = "copy");
            }, o.uid), r.addEvent(n, "drop", function (t) {
              e(t) && (t.preventDefault(), p = [], t.dataTransfer.items && t.dataTransfer.items[0].webkitGetAsEntry ? c(t.dataTransfer.items, function () {
                o.files = p, o.trigger("drop");
              }) : (i.each(t.dataTransfer.files, function (e) {
                a(e);
              }), o.files = p, o.trigger("drop")));
            }, o.uid), r.addEvent(n, "dragenter", function () {
              o.trigger("dragenter");
            }, o.uid), r.addEvent(n, "dragleave", function () {
              o.trigger("dragleave");
            }, o.uid);
          }, destroy: function destroy() {
            r.removeAllEvents(h && n.get(h.container), this.uid), f = p = g = h = null, this.getRuntime().getShim().removeInstance(this.uid);
          } });
      }return e.FileDrop = a;
    }), n("moxie/runtime/html5/file/FileReader", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Encode", "moxie/core/utils/Basic"], function (e, t, i) {
      function n() {
        function e(e) {
          return t.atob(e.substring(e.indexOf("base64,") + 7));
        }var n,
            r = !1;i.extend(this, { read: function read(t, o) {
            var a = this;a.result = "", n = new window.FileReader(), n.addEventListener("progress", function (e) {
              a.trigger(e);
            }), n.addEventListener("load", function (t) {
              a.result = r ? e(n.result) : n.result, a.trigger(t);
            }), n.addEventListener("error", function (e) {
              a.trigger(e, n.error);
            }), n.addEventListener("loadend", function (e) {
              n = null, a.trigger(e);
            }), "function" === i.typeOf(n[t]) ? (r = !1, n[t](o.getSource())) : "readAsBinaryString" === t && (r = !0, n.readAsDataURL(o.getSource()));
          }, abort: function abort() {
            n && n.abort();
          }, destroy: function destroy() {
            n = null, this.getRuntime().getShim().removeInstance(this.uid);
          } });
      }return e.FileReader = n;
    }), n("moxie/runtime/html5/xhr/XMLHttpRequest", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/core/utils/Url", "moxie/file/File", "moxie/file/Blob", "moxie/xhr/FormData", "moxie/core/Exceptions", "moxie/core/utils/Env"], function (e, t, i, n, r, o, a, s, u) {
      function c() {
        function e(e, t) {
          var i,
              n,
              r = this;i = t.getBlob().getSource(), n = new window.FileReader(), n.onload = function () {
            t.append(t.getBlobName(), new o(null, { type: i.type, data: n.result })), f.send.call(r, e, t);
          }, n.readAsBinaryString(i);
        }function c() {
          return !window.XMLHttpRequest || "IE" === u.browser && u.verComp(u.version, 8, "<") ? function () {
            for (var e = ["Msxml2.XMLHTTP.6.0", "Microsoft.XMLHTTP"], t = 0; t < e.length; t++) {
              try {
                return new ActiveXObject(e[t]);
              } catch (i) {}
            }
          }() : new window.XMLHttpRequest();
        }function l(e) {
          var t = e.responseXML,
              i = e.responseText;return "IE" === u.browser && i && t && !t.documentElement && /[^\/]+\/[^\+]+\+xml/.test(e.getResponseHeader("Content-Type")) && (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = !1, t.validateOnParse = !1, t.loadXML(i)), t && ("IE" === u.browser && 0 !== t.parseError || !t.documentElement || "parsererror" === t.documentElement.tagName) ? null : t;
        }function d(e) {
          var t = "----moxieboundary" + new Date().getTime(),
              i = "--",
              n = "\r\n",
              r = "",
              a = this.getRuntime();if (!a.can("send_binary_string")) throw new s.RuntimeError(s.RuntimeError.NOT_SUPPORTED_ERR);return m.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + t), e.each(function (e, a) {
            r += e instanceof o ? i + t + n + 'Content-Disposition: form-data; name="' + a + '"; filename="' + unescape(encodeURIComponent(e.name || "blob")) + '"' + n + "Content-Type: " + (e.type || "application/octet-stream") + n + n + e.getSource() + n : i + t + n + 'Content-Disposition: form-data; name="' + a + '"' + n + n + unescape(encodeURIComponent(e)) + n;
          }), r += i + t + i + n;
        }var m,
            h,
            f = this;t.extend(this, { send: function send(i, r) {
            var s = this,
                l = "Mozilla" === u.browser && u.verComp(u.version, 4, ">=") && u.verComp(u.version, 7, "<"),
                f = "Android Browser" === u.browser,
                p = !1;if (h = i.url.replace(/^.+?\/([\w\-\.]+)$/, "$1").toLowerCase(), m = c(), m.open(i.method, i.url, i.async, i.user, i.password), r instanceof o) r.isDetached() && (p = !0), r = r.getSource();else if (r instanceof a) {
              if (r.hasBlob()) if (r.getBlob().isDetached()) r = d.call(s, r), p = !0;else if ((l || f) && "blob" === t.typeOf(r.getBlob().getSource()) && window.FileReader) return e.call(s, i, r), void 0;if (r instanceof a) {
                var g = new window.FormData();r.each(function (e, t) {
                  e instanceof o ? g.append(t, e.getSource()) : g.append(t, e);
                }), r = g;
              }
            }m.upload ? (i.withCredentials && (m.withCredentials = !0), m.addEventListener("load", function (e) {
              s.trigger(e);
            }), m.addEventListener("error", function (e) {
              s.trigger(e);
            }), m.addEventListener("progress", function (e) {
              s.trigger(e);
            }), m.upload.addEventListener("progress", function (e) {
              s.trigger({ type: "UploadProgress", loaded: e.loaded, total: e.total });
            })) : m.onreadystatechange = function () {
              switch (m.readyState) {case 1:
                  break;case 2:
                  break;case 3:
                  var e, t;try {
                    n.hasSameOrigin(i.url) && (e = m.getResponseHeader("Content-Length") || 0), m.responseText && (t = m.responseText.length);
                  } catch (r) {
                    e = t = 0;
                  }s.trigger({ type: "progress", lengthComputable: !!e, total: parseInt(e, 10), loaded: t });break;case 4:
                  m.onreadystatechange = function () {};try {
                    if (m.status >= 200 && m.status < 400) {
                      s.trigger("load");break;
                    }
                  } catch (r) {}s.trigger("error");}
            }, t.isEmptyObj(i.headers) || t.each(i.headers, function (e, t) {
              m.setRequestHeader(t, e);
            }), "" !== i.responseType && "responseType" in m && (m.responseType = "json" !== i.responseType || u.can("return_response_type", "json") ? i.responseType : "text"), p ? m.sendAsBinary ? m.sendAsBinary(r) : function () {
              for (var e = new Uint8Array(r.length), t = 0; t < r.length; t++) {
                e[t] = 255 & r.charCodeAt(t);
              }m.send(e.buffer);
            }() : m.send(r), s.trigger("loadstart");
          }, getStatus: function getStatus() {
            try {
              if (m) return m.status;
            } catch (e) {}return 0;
          }, getResponse: function getResponse(e) {
            var t = this.getRuntime();try {
              switch (e) {case "blob":
                  var n = new r(t.uid, m.response),
                      o = m.getResponseHeader("Content-Disposition");if (o) {
                    var a = o.match(/filename=([\'\"'])([^\1]+)\1/);a && (h = a[2]);
                  }return n.name = h, n.type || (n.type = i.getFileMime(h)), n;case "json":
                  return u.can("return_response_type", "json") ? m.response : 200 === m.status && window.JSON ? JSON.parse(m.responseText) : null;case "document":
                  return l(m);default:
                  return "" !== m.responseText ? m.responseText : null;}
            } catch (s) {
              return null;
            }
          }, getAllResponseHeaders: function getAllResponseHeaders() {
            try {
              return m.getAllResponseHeaders();
            } catch (e) {}return "";
          }, abort: function abort() {
            m && m.abort();
          }, destroy: function destroy() {
            f = h = null, this.getRuntime().getShim().removeInstance(this.uid);
          } });
      }return e.XMLHttpRequest = c;
    }), n("moxie/runtime/html5/utils/BinaryReader", ["moxie/core/utils/Basic"], function (e) {
      function t(e) {
        e instanceof ArrayBuffer ? i.apply(this, arguments) : n.apply(this, arguments);
      }function i(t) {
        var i = new DataView(t);e.extend(this, { readByteAt: function readByteAt(e) {
            return i.getUint8(e);
          }, writeByteAt: function writeByteAt(e, t) {
            i.setUint8(e, t);
          }, SEGMENT: function SEGMENT(e, n, r) {
            switch (arguments.length) {case 2:
                return t.slice(e, e + n);case 1:
                return t.slice(e);case 3:
                if (null === r && (r = new ArrayBuffer()), r instanceof ArrayBuffer) {
                  var o = new Uint8Array(this.length() - n + r.byteLength);e > 0 && o.set(new Uint8Array(t.slice(0, e)), 0), o.set(new Uint8Array(r), e), o.set(new Uint8Array(t.slice(e + n)), e + r.byteLength), this.clear(), t = o.buffer, i = new DataView(t);break;
                }default:
                return t;}
          }, length: function length() {
            return t ? t.byteLength : 0;
          }, clear: function clear() {
            i = t = null;
          } });
      }function n(t) {
        function i(e, i, n) {
          n = 3 === arguments.length ? n : t.length - i - 1, t = t.substr(0, i) + e + t.substr(n + i);
        }e.extend(this, { readByteAt: function readByteAt(e) {
            return t.charCodeAt(e);
          }, writeByteAt: function writeByteAt(e, t) {
            i(String.fromCharCode(t), e, 1);
          }, SEGMENT: function SEGMENT(e, n, r) {
            switch (arguments.length) {case 1:
                return t.substr(e);case 2:
                return t.substr(e, n);case 3:
                i(null !== r ? r : "", e, n);break;default:
                return t;}
          }, length: function length() {
            return t ? t.length : 0;
          }, clear: function clear() {
            t = null;
          } });
      }return e.extend(t.prototype, { littleEndian: !1, read: function read(e, t) {
          var i, n, r;if (e + t > this.length()) throw new Error("You are trying to read outside the source boundaries.");for (n = this.littleEndian ? 0 : -8 * (t - 1), r = 0, i = 0; t > r; r++) {
            i |= this.readByteAt(e + r) << Math.abs(n + 8 * r);
          }return i;
        }, write: function write(e, t, i) {
          var n, r;if (e > this.length()) throw new Error("You are trying to write outside the source boundaries.");for (n = this.littleEndian ? 0 : -8 * (i - 1), r = 0; i > r; r++) {
            this.writeByteAt(e + r, 255 & t >> Math.abs(n + 8 * r));
          }
        }, BYTE: function BYTE(e) {
          return this.read(e, 1);
        }, SHORT: function SHORT(e) {
          return this.read(e, 2);
        }, LONG: function LONG(e) {
          return this.read(e, 4);
        }, SLONG: function SLONG(e) {
          var t = this.read(e, 4);return t > 2147483647 ? t - 4294967296 : t;
        }, CHAR: function CHAR(e) {
          return String.fromCharCode(this.read(e, 1));
        }, STRING: function STRING(e, t) {
          return this.asArray("CHAR", e, t).join("");
        }, asArray: function asArray(e, t, i) {
          for (var n = [], r = 0; i > r; r++) {
            n[r] = this[e](t + r);
          }return n;
        } }), t;
    }), n("moxie/runtime/html5/image/JPEGHeaders", ["moxie/runtime/html5/utils/BinaryReader", "moxie/core/Exceptions"], function (e, t) {
      return function i(n) {
        var r,
            o,
            a,
            s = [],
            u = 0;if (r = new e(n), 65496 !== r.SHORT(0)) throw r.clear(), new t.ImageError(t.ImageError.WRONG_FORMAT);for (o = 2; o <= r.length();) {
          if (a = r.SHORT(o), a >= 65488 && 65495 >= a) o += 2;else {
            if (65498 === a || 65497 === a) break;u = r.SHORT(o + 2) + 2, a >= 65505 && 65519 >= a && s.push({ hex: a, name: "APP" + (15 & a), start: o, length: u, segment: r.SEGMENT(o, u) }), o += u;
          }
        }return r.clear(), { headers: s, restore: function restore(t) {
            var i, n, r;for (r = new e(t), o = 65504 == r.SHORT(2) ? 4 + r.SHORT(4) : 2, n = 0, i = s.length; i > n; n++) {
              r.SEGMENT(o, 0, s[n].segment), o += s[n].length;
            }return t = r.SEGMENT(), r.clear(), t;
          }, strip: function strip(t) {
            var n, r, o, a;for (o = new i(t), r = o.headers, o.purge(), n = new e(t), a = r.length; a--;) {
              n.SEGMENT(r[a].start, r[a].length, "");
            }return t = n.SEGMENT(), n.clear(), t;
          }, get: function get(e) {
            for (var t = [], i = 0, n = s.length; n > i; i++) {
              s[i].name === e.toUpperCase() && t.push(s[i].segment);
            }return t;
          }, set: function set(e, t) {
            var i,
                n,
                r,
                o = [];for ("string" == typeof t ? o.push(t) : o = t, i = n = 0, r = s.length; r > i && (s[i].name === e.toUpperCase() && (s[i].segment = o[n], s[i].length = o[n].length, n++), !(n >= o.length)); i++) {}
          }, purge: function purge() {
            this.headers = s = [];
          } };
      };
    }), n("moxie/runtime/html5/image/ExifParser", ["moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader", "moxie/core/Exceptions"], function (e, i, n) {
      function r(o) {
        function a(i, r) {
          var o,
              a,
              s,
              u,
              c,
              m,
              h,
              f,
              p = this,
              g = [],
              x = {},
              v = { 1: "BYTE", 7: "UNDEFINED", 2: "ASCII", 3: "SHORT", 4: "LONG", 5: "RATIONAL", 9: "SLONG", 10: "SRATIONAL" },
              w = { BYTE: 1, UNDEFINED: 1, ASCII: 1, SHORT: 2, LONG: 4, RATIONAL: 8, SLONG: 4, SRATIONAL: 8 };for (o = p.SHORT(i), a = 0; o > a; a++) {
            if (g = [], h = i + 2 + 12 * a, s = r[p.SHORT(h)], s !== t) {
              if (u = v[p.SHORT(h += 2)], c = p.LONG(h += 2), m = w[u], !m) throw new n.ImageError(n.ImageError.INVALID_META_ERR);if (h += 4, m * c > 4 && (h = p.LONG(h) + d.tiffHeader), h + m * c >= this.length()) throw new n.ImageError(n.ImageError.INVALID_META_ERR);"ASCII" !== u ? (g = p.asArray(u, h, c), f = 1 == c ? g[0] : g, x[s] = l.hasOwnProperty(s) && "object" != (typeof f === "undefined" ? "undefined" : _typeof(f)) ? l[s][f] : f) : x[s] = e.trim(p.STRING(h, c).replace(/\0$/, ""));
            }
          }return x;
        }function s(e, t, i) {
          var n,
              r,
              o,
              a = 0;if ("string" == typeof t) {
            var s = c[e.toLowerCase()];for (var u in s) {
              if (s[u] === t) {
                t = u;break;
              }
            }
          }n = d[e.toLowerCase() + "IFD"], r = this.SHORT(n);for (var l = 0; r > l; l++) {
            if (o = n + 12 * l + 2, this.SHORT(o) == t) {
              a = o + 8;break;
            }
          }if (!a) return !1;try {
            this.write(a, i, 4);
          } catch (m) {
            return !1;
          }return !0;
        }var u, c, l, d, m, h;if (i.call(this, o), c = { tiff: { 274: "Orientation", 270: "ImageDescription", 271: "Make", 272: "Model", 305: "Software", 34665: "ExifIFDPointer", 34853: "GPSInfoIFDPointer" }, exif: { 36864: "ExifVersion", 40961: "ColorSpace", 40962: "PixelXDimension", 40963: "PixelYDimension", 36867: "DateTimeOriginal", 33434: "ExposureTime", 33437: "FNumber", 34855: "ISOSpeedRatings", 37377: "ShutterSpeedValue", 37378: "ApertureValue", 37383: "MeteringMode", 37384: "LightSource", 37385: "Flash", 37386: "FocalLength", 41986: "ExposureMode", 41987: "WhiteBalance", 41990: "SceneCaptureType", 41988: "DigitalZoomRatio", 41992: "Contrast", 41993: "Saturation", 41994: "Sharpness" }, gps: { 0: "GPSVersionID", 1: "GPSLatitudeRef", 2: "GPSLatitude", 3: "GPSLongitudeRef", 4: "GPSLongitude" }, thumb: { 513: "JPEGInterchangeFormat", 514: "JPEGInterchangeFormatLength" } }, l = { ColorSpace: { 1: "sRGB", 0: "Uncalibrated" }, MeteringMode: { 0: "Unknown", 1: "Average", 2: "CenterWeightedAverage", 3: "Spot", 4: "MultiSpot", 5: "Pattern", 6: "Partial", 255: "Other" }, LightSource: { 1: "Daylight", 2: "Fliorescent", 3: "Tungsten", 4: "Flash", 9: "Fine weather", 10: "Cloudy weather", 11: "Shade", 12: "Daylight fluorescent (D 5700 - 7100K)", 13: "Day white fluorescent (N 4600 -5400K)", 14: "Cool white fluorescent (W 3900 - 4500K)", 15: "White fluorescent (WW 3200 - 3700K)", 17: "Standard light A", 18: "Standard light B", 19: "Standard light C", 20: "D55", 21: "D65", 22: "D75", 23: "D50", 24: "ISO studio tungsten", 255: "Other" }, Flash: { 0: "Flash did not fire", 1: "Flash fired", 5: "Strobe return light not detected", 7: "Strobe return light detected", 9: "Flash fired, compulsory flash mode", 13: "Flash fired, compulsory flash mode, return light not detected", 15: "Flash fired, compulsory flash mode, return light detected", 16: "Flash did not fire, compulsory flash mode", 24: "Flash did not fire, auto mode", 25: "Flash fired, auto mode", 29: "Flash fired, auto mode, return light not detected", 31: "Flash fired, auto mode, return light detected", 32: "No flash function", 65: "Flash fired, red-eye reduction mode", 69: "Flash fired, red-eye reduction mode, return light not detected", 71: "Flash fired, red-eye reduction mode, return light detected", 73: "Flash fired, compulsory flash mode, red-eye reduction mode", 77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected", 79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected", 89: "Flash fired, auto mode, red-eye reduction mode", 93: "Flash fired, auto mode, return light not detected, red-eye reduction mode", 95: "Flash fired, auto mode, return light detected, red-eye reduction mode" }, ExposureMode: { 0: "Auto exposure", 1: "Manual exposure", 2: "Auto bracket" }, WhiteBalance: { 0: "Auto white balance", 1: "Manual white balance" }, SceneCaptureType: { 0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night scene" }, Contrast: { 0: "Normal", 1: "Soft", 2: "Hard" }, Saturation: { 0: "Normal", 1: "Low saturation", 2: "High saturation" }, Sharpness: { 0: "Normal", 1: "Soft", 2: "Hard" }, GPSLatitudeRef: { N: "North latitude", S: "South latitude" }, GPSLongitudeRef: { E: "East longitude", W: "West longitude" } }, d = { tiffHeader: 10 }, m = d.tiffHeader, u = { clear: this.clear }, e.extend(this, { read: function read() {
            try {
              return r.prototype.read.apply(this, arguments);
            } catch (e) {
              throw new n.ImageError(n.ImageError.INVALID_META_ERR);
            }
          }, write: function write() {
            try {
              return r.prototype.write.apply(this, arguments);
            } catch (e) {
              throw new n.ImageError(n.ImageError.INVALID_META_ERR);
            }
          }, UNDEFINED: function UNDEFINED() {
            return this.BYTE.apply(this, arguments);
          }, RATIONAL: function RATIONAL(e) {
            return this.LONG(e) / this.LONG(e + 4);
          }, SRATIONAL: function SRATIONAL(e) {
            return this.SLONG(e) / this.SLONG(e + 4);
          }, ASCII: function ASCII(e) {
            return this.CHAR(e);
          }, TIFF: function TIFF() {
            return h || null;
          }, EXIF: function EXIF() {
            var t = null;if (d.exifIFD) {
              try {
                t = a.call(this, d.exifIFD, c.exif);
              } catch (i) {
                return null;
              }if (t.ExifVersion && "array" === e.typeOf(t.ExifVersion)) {
                for (var n = 0, r = ""; n < t.ExifVersion.length; n++) {
                  r += String.fromCharCode(t.ExifVersion[n]);
                }t.ExifVersion = r;
              }
            }return t;
          }, GPS: function GPS() {
            var t = null;if (d.gpsIFD) {
              try {
                t = a.call(this, d.gpsIFD, c.gps);
              } catch (i) {
                return null;
              }t.GPSVersionID && "array" === e.typeOf(t.GPSVersionID) && (t.GPSVersionID = t.GPSVersionID.join("."));
            }return t;
          }, thumb: function thumb() {
            if (d.IFD1) try {
              var e = a.call(this, d.IFD1, c.thumb);if ("JPEGInterchangeFormat" in e) return this.SEGMENT(d.tiffHeader + e.JPEGInterchangeFormat, e.JPEGInterchangeFormatLength);
            } catch (t) {}return null;
          }, setExif: function setExif(e, t) {
            return "PixelXDimension" !== e && "PixelYDimension" !== e ? !1 : s.call(this, "exif", e, t);
          }, clear: function clear() {
            u.clear(), o = c = l = h = d = u = null;
          } }), 65505 !== this.SHORT(0) || "EXIF\0" !== this.STRING(4, 5).toUpperCase()) throw new n.ImageError(n.ImageError.INVALID_META_ERR);if (this.littleEndian = 18761 == this.SHORT(m), 42 !== this.SHORT(m += 2)) throw new n.ImageError(n.ImageError.INVALID_META_ERR);d.IFD0 = d.tiffHeader + this.LONG(m += 2), h = a.call(this, d.IFD0, c.tiff), "ExifIFDPointer" in h && (d.exifIFD = d.tiffHeader + h.ExifIFDPointer, delete h.ExifIFDPointer), "GPSInfoIFDPointer" in h && (d.gpsIFD = d.tiffHeader + h.GPSInfoIFDPointer, delete h.GPSInfoIFDPointer), e.isEmptyObj(h) && (h = null);var f = this.LONG(d.IFD0 + 12 * this.SHORT(d.IFD0) + 2);f && (d.IFD1 = d.tiffHeader + f);
      }return r.prototype = i.prototype, r;
    }), n("moxie/runtime/html5/image/JPEG", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEGHeaders", "moxie/runtime/html5/utils/BinaryReader", "moxie/runtime/html5/image/ExifParser"], function (e, t, i, n, r) {
      function o(o) {
        function a(e) {
          var t,
              i,
              n = 0;for (e || (e = c); n <= e.length();) {
            if (t = e.SHORT(n += 2), t >= 65472 && 65475 >= t) return n += 5, { height: e.SHORT(n), width: e.SHORT(n += 2) };i = e.SHORT(n += 2), n += i - 2;
          }return null;
        }function s() {
          var e,
              t,
              i = d.thumb();return i && (e = new n(i), t = a(e), e.clear(), t) ? (t.data = i, t) : null;
        }function u() {
          d && l && c && (d.clear(), l.purge(), c.clear(), m = l = d = c = null);
        }var c, l, d, m;if (c = new n(o), 65496 !== c.SHORT(0)) throw new t.ImageError(t.ImageError.WRONG_FORMAT);l = new i(o);try {
          d = new r(l.get("app1")[0]);
        } catch (h) {}m = a.call(this), e.extend(this, { type: "image/jpeg", size: c.length(), width: m && m.width || 0, height: m && m.height || 0, setExif: function setExif(t, i) {
            return d ? ("object" === e.typeOf(t) ? e.each(t, function (e, t) {
              d.setExif(t, e);
            }) : d.setExif(t, i), l.set("app1", d.SEGMENT()), void 0) : !1;
          }, writeHeaders: function writeHeaders() {
            return arguments.length ? l.restore(arguments[0]) : l.restore(o);
          }, stripHeaders: function stripHeaders(e) {
            return l.strip(e);
          }, purge: function purge() {
            u.call(this);
          } }), d && (this.meta = { tiff: d.TIFF(), exif: d.EXIF(), gps: d.GPS(), thumb: s() });
      }return o;
    }), n("moxie/runtime/html5/image/PNG", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader"], function (e, t, i) {
      function n(n) {
        function r() {
          var e, t;return e = a.call(this, 8), "IHDR" == e.type ? (t = e.start, { width: s.LONG(t), height: s.LONG(t += 4) }) : null;
        }function o() {
          s && (s.clear(), n = l = u = c = s = null);
        }function a(e) {
          var t, i, n, r;return t = s.LONG(e), i = s.STRING(e += 4, 4), n = e += 4, r = s.LONG(e + t), { length: t, type: i, start: n, CRC: r };
        }var s, u, c, l;s = new i(n), function () {
          var t = 0,
              i = 0,
              n = [35152, 20039, 3338, 6666];for (i = 0; i < n.length; i++, t += 2) {
            if (n[i] != s.SHORT(t)) throw new e.ImageError(e.ImageError.WRONG_FORMAT);
          }
        }(), l = r.call(this), t.extend(this, { type: "image/png", size: s.length(), width: l.width, height: l.height, purge: function purge() {
            o.call(this);
          } }), o.call(this);
      }return n;
    }), n("moxie/runtime/html5/image/ImageInfo", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEG", "moxie/runtime/html5/image/PNG"], function (e, t, i, n) {
      return function (r) {
        var o,
            a = [i, n];o = function () {
          for (var e = 0; e < a.length; e++) {
            try {
              return new a[e](r);
            } catch (i) {}
          }throw new t.ImageError(t.ImageError.WRONG_FORMAT);
        }(), e.extend(this, { type: "", size: 0, width: 0, height: 0, setExif: function setExif() {}, writeHeaders: function writeHeaders(e) {
            return e;
          }, stripHeaders: function stripHeaders(e) {
            return e;
          }, purge: function purge() {
            r = null;
          } }), e.extend(this, o), this.purge = function () {
          o.purge(), o = null;
        };
      };
    }), n("moxie/runtime/html5/image/ResizerCanvas", [], function () {
      function e(i, n, r) {
        var o = i.width > i.height ? "width" : "height",
            a = Math.round(i[o] * n),
            s = !1;"nearest" !== r && (.5 > n || n > 2) && (n = .5 > n ? .5 : 2, s = !0);var u = t(i, n);return s ? e(u, a / u[o], r) : u;
      }function t(e, t) {
        var i = e.width,
            n = e.height,
            r = Math.round(i * t),
            o = Math.round(n * t),
            a = document.createElement("canvas");return a.width = r, a.height = o, a.getContext("2d").drawImage(e, 0, 0, i, n, 0, 0, r, o), e = null, a;
      }return { scale: e };
    }), n("moxie/runtime/html5/image/Image", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/utils/Encode", "moxie/file/Blob", "moxie/file/File", "moxie/runtime/html5/image/ImageInfo", "moxie/runtime/html5/image/ResizerCanvas", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (e, t, i, n, r, o, a, s, u) {
      function c() {
        function e() {
          if (!v && !g) throw new i.ImageError(i.DOMException.INVALID_STATE_ERR);return v || g;
        }function c() {
          var t = e();return "canvas" == t.nodeName.toLowerCase() ? t : (v = document.createElement("canvas"), v.width = t.width, v.height = t.height, v.getContext("2d").drawImage(t, 0, 0), v);
        }function l(e) {
          return n.atob(e.substring(e.indexOf("base64,") + 7));
        }function d(e, t) {
          return "data:" + (t || "") + ";base64," + n.btoa(e);
        }function m(e) {
          var t = this;g = new Image(), g.onerror = function () {
            p.call(this), t.trigger("error", i.ImageError.WRONG_FORMAT);
          }, g.onload = function () {
            t.trigger("load");
          }, g.src = "data:" == e.substr(0, 5) ? e : d(e, y.type);
        }function h(e, t) {
          var n,
              r = this;return window.FileReader ? (n = new FileReader(), n.onload = function () {
            t.call(r, this.result);
          }, n.onerror = function () {
            r.trigger("error", i.ImageError.WRONG_FORMAT);
          }, n.readAsDataURL(e), void 0) : t.call(this, e.getAsDataURL());
        }function f(e, i) {
          var n = Math.PI / 180,
              r = document.createElement("canvas"),
              o = r.getContext("2d"),
              a = e.width,
              s = e.height;switch (t.inArray(i, [5, 6, 7, 8]) > -1 ? (r.width = s, r.height = a) : (r.width = a, r.height = s), i) {case 2:
              o.translate(a, 0), o.scale(-1, 1);break;case 3:
              o.translate(a, s), o.rotate(180 * n);break;case 4:
              o.translate(0, s), o.scale(1, -1);break;case 5:
              o.rotate(90 * n), o.scale(1, -1);break;case 6:
              o.rotate(90 * n), o.translate(0, -s);break;case 7:
              o.rotate(90 * n), o.translate(a, -s), o.scale(-1, 1);break;case 8:
              o.rotate(-90 * n), o.translate(-a, 0);}return o.drawImage(e, 0, 0, a, s), r;
        }function p() {
          x && (x.purge(), x = null), w = g = v = y = null, b = !1;
        }var g,
            x,
            v,
            w,
            y,
            E = this,
            b = !1,
            _ = !0;t.extend(this, { loadFromBlob: function loadFromBlob(e) {
            var t = this.getRuntime(),
                n = arguments.length > 1 ? arguments[1] : !0;if (!t.can("access_binary")) throw new i.RuntimeError(i.RuntimeError.NOT_SUPPORTED_ERR);return y = e, e.isDetached() ? (w = e.getSource(), m.call(this, w), void 0) : (h.call(this, e.getSource(), function (e) {
              n && (w = l(e)), m.call(this, e);
            }), void 0);
          }, loadFromImage: function loadFromImage(e, t) {
            this.meta = e.meta, y = new o(null, { name: e.name, size: e.size, type: e.type }), m.call(this, t ? w = e.getAsBinaryString() : e.getAsDataURL());
          }, getInfo: function getInfo() {
            var t,
                i = this.getRuntime();return !x && w && i.can("access_image_binary") && (x = new a(w)), t = { width: e().width || 0, height: e().height || 0, type: y.type || u.getFileMime(y.name), size: w && w.length || y.size || 0, name: y.name || "", meta: null }, _ && (t.meta = x && x.meta || this.meta || {}, !t.meta || !t.meta.thumb || t.meta.thumb.data instanceof r || (t.meta.thumb.data = new r(null, { type: "image/jpeg", data: t.meta.thumb.data }))), t;
          }, resize: function resize(t, i, n) {
            var r = document.createElement("canvas");if (r.width = t.width, r.height = t.height, r.getContext("2d").drawImage(e(), t.x, t.y, t.width, t.height, 0, 0, r.width, r.height), v = s.scale(r, i), _ = n.preserveHeaders, !_) {
              var o = this.meta && this.meta.tiff && this.meta.tiff.Orientation || 1;v = f(v, o);
            }this.width = v.width, this.height = v.height, b = !0, this.trigger("Resize");
          }, getAsCanvas: function getAsCanvas() {
            return v || (v = c()), v.id = this.uid + "_canvas", v;
          }, getAsBlob: function getAsBlob(e, t) {
            return e !== this.type ? (b = !0, new o(null, { name: y.name || "", type: e, data: E.getAsDataURL(e, t) })) : new o(null, { name: y.name || "", type: e, data: E.getAsBinaryString(e, t) });
          }, getAsDataURL: function getAsDataURL(e) {
            var t = arguments[1] || 90;if (!b) return g.src;if (c(), "image/jpeg" !== e) return v.toDataURL("image/png");try {
              return v.toDataURL("image/jpeg", t / 100);
            } catch (i) {
              return v.toDataURL("image/jpeg");
            }
          }, getAsBinaryString: function getAsBinaryString(e, t) {
            if (!b) return w || (w = l(E.getAsDataURL(e, t))), w;if ("image/jpeg" !== e) w = l(E.getAsDataURL(e, t));else {
              var i;t || (t = 90), c();try {
                i = v.toDataURL("image/jpeg", t / 100);
              } catch (n) {
                i = v.toDataURL("image/jpeg");
              }w = l(i), x && (w = x.stripHeaders(w), _ && (x.meta && x.meta.exif && x.setExif({ PixelXDimension: this.width, PixelYDimension: this.height }), w = x.writeHeaders(w)), x.purge(), x = null);
            }return b = !1, w;
          }, destroy: function destroy() {
            E = null, p.call(this), this.getRuntime().getShim().removeInstance(this.uid);
          } });
      }return e.Image = c;
    }), n("moxie/runtime/flash/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function (e, t, i, n, o) {
      function a() {
        var e;try {
          e = navigator.plugins["Shockwave Flash"], e = e.description;
        } catch (t) {
          try {
            e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
          } catch (i) {
            e = "0.0";
          }
        }return e = e.match(/\d+/g), parseFloat(e[0] + "." + e[1]);
      }function s(e) {
        var n = i.get(e);n && "OBJECT" == n.nodeName && ("IE" === t.browser ? (n.style.display = "none", function r() {
          4 == n.readyState ? u(e) : setTimeout(r, 10);
        }()) : n.parentNode.removeChild(n));
      }function u(e) {
        var t = i.get(e);if (t) {
          for (var n in t) {
            "function" == typeof t[n] && (t[n] = null);
          }t.parentNode.removeChild(t);
        }
      }function c(u) {
        var c,
            m = this;u = e.extend({ swf_url: t.swf_url }, u), o.call(this, u, l, { access_binary: function access_binary(e) {
            return e && "browser" === m.mode;
          }, access_image_binary: function access_image_binary(e) {
            return e && "browser" === m.mode;
          }, display_media: o.capTest(r("moxie/image/Image")), do_cors: o.capTrue, drag_and_drop: !1, report_upload_progress: function report_upload_progress() {
            return "client" === m.mode;
          }, resize_image: o.capTrue, return_response_headers: !1, return_response_type: function return_response_type(t) {
            return "json" === t && window.JSON ? !0 : !e.arrayDiff(t, ["", "text", "document"]) || "browser" === m.mode;
          }, return_status_code: function return_status_code(t) {
            return "browser" === m.mode || !e.arrayDiff(t, [200, 404]);
          }, select_file: o.capTrue, select_multiple: o.capTrue, send_binary_string: function send_binary_string(e) {
            return e && "browser" === m.mode;
          }, send_browser_cookies: function send_browser_cookies(e) {
            return e && "browser" === m.mode;
          }, send_custom_headers: function send_custom_headers(e) {
            return e && "browser" === m.mode;
          }, send_multipart: o.capTrue, slice_blob: function slice_blob(e) {
            return e && "browser" === m.mode;
          }, stream_upload: function stream_upload(e) {
            return e && "browser" === m.mode;
          }, summon_file_dialog: !1, upload_filesize: function upload_filesize(t) {
            return e.parseSizeStr(t) <= 2097152 || "client" === m.mode;
          }, use_http_method: function use_http_method(t) {
            return !e.arrayDiff(t, ["GET", "POST"]);
          } }, { access_binary: function access_binary(e) {
            return e ? "browser" : "client";
          }, access_image_binary: function access_image_binary(e) {
            return e ? "browser" : "client";
          }, report_upload_progress: function report_upload_progress(e) {
            return e ? "browser" : "client";
          }, return_response_type: function return_response_type(t) {
            return e.arrayDiff(t, ["", "text", "json", "document"]) ? "browser" : ["client", "browser"];
          }, return_status_code: function return_status_code(t) {
            return e.arrayDiff(t, [200, 404]) ? "browser" : ["client", "browser"];
          }, send_binary_string: function send_binary_string(e) {
            return e ? "browser" : "client";
          }, send_browser_cookies: function send_browser_cookies(e) {
            return e ? "browser" : "client";
          }, send_custom_headers: function send_custom_headers(e) {
            return e ? "browser" : "client";
          }, slice_blob: function slice_blob(e) {
            return e ? "browser" : "client";
          }, stream_upload: function stream_upload(e) {
            return e ? "client" : "browser";
          }, upload_filesize: function upload_filesize(t) {
            return e.parseSizeStr(t) >= 2097152 ? "client" : "browser";
          } }, "client"), a() < 11.3 && (this.mode = !1), e.extend(this, { getShim: function getShim() {
            return i.get(this.uid);
          }, shimExec: function shimExec(e, t) {
            var i = [].slice.call(arguments, 2);return m.getShim().exec(this.uid, e, t, i);
          }, init: function init() {
            var i, r, a;a = this.getShimContainer(), e.extend(a.style, { position: "absolute", top: "-8px", left: "-8px", width: "9px", height: "9px", overflow: "hidden" }), i = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + u.swf_url + '" ', "IE" === t.browser && (i += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), i += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + u.swf_url + '" />' + '<param name="flashvars" value="uid=' + escape(this.uid) + "&target=" + o.getGlobalEventTarget() + '" />' + '<param name="wmode" value="transparent" />' + '<param name="allowscriptaccess" value="always" />' + "</object>", "IE" === t.browser ? (r = document.createElement("div"), a.appendChild(r), r.outerHTML = i, r = a = null) : a.innerHTML = i, c = setTimeout(function () {
              m && !m.initialized && m.trigger("Error", new n.RuntimeError(n.RuntimeError.NOT_INIT_ERR));
            }, 5e3);
          }, destroy: function (e) {
            return function () {
              s(m.uid), e.call(m), clearTimeout(c), u = c = e = m = null;
            };
          }(this.destroy) }, d);
      }var l = "flash",
          d = {};return o.addConstructor(l, c), d;
    }), n("moxie/runtime/flash/file/Blob", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function (e, t) {
      var i = { slice: function slice(e, i, n, r) {
          var o = this.getRuntime();return 0 > i ? i = Math.max(e.size + i, 0) : i > 0 && (i = Math.min(i, e.size)), 0 > n ? n = Math.max(e.size + n, 0) : n > 0 && (n = Math.min(n, e.size)), e = o.shimExec.call(this, "Blob", "slice", i, n, r || ""), e && (e = new t(o.uid, e)), e;
        } };return e.Blob = i;
    }), n("moxie/runtime/flash/file/FileInput", ["moxie/runtime/flash/Runtime", "moxie/file/File", "moxie/core/utils/Dom", "moxie/core/utils/Basic"], function (e, t, i, n) {
      var r = { init: function init(e) {
          var r = this,
              o = this.getRuntime(),
              a = i.get(e.browse_button);a && (a.setAttribute("tabindex", -1), a = null), this.bind("Change", function () {
            var e = o.shimExec.call(r, "FileInput", "getFiles");r.files = [], n.each(e, function (e) {
              r.files.push(new t(o.uid, e));
            });
          }, 999), this.getRuntime().shimExec.call(this, "FileInput", "init", { accept: e.accept, multiple: e.multiple }), this.trigger("ready");
        } };return e.FileInput = r;
    }), n("moxie/runtime/flash/file/FileReader", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function (e, t) {
      function i(e, i) {
        switch (i) {case "readAsText":
            return t.atob(e, "utf8");case "readAsBinaryString":
            return t.atob(e);case "readAsDataURL":
            return e;}return null;
      }var n = { read: function read(e, t) {
          var n = this;return n.result = "", "readAsDataURL" === e && (n.result = "data:" + (t.type || "") + ";base64,"), n.bind("Progress", function (t, r) {
            r && (n.result += i(r, e));
          }, 999), n.getRuntime().shimExec.call(this, "FileReader", "readAsBase64", t.uid);
        } };return e.FileReader = n;
    }), n("moxie/runtime/flash/file/FileReaderSync", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function (e, t) {
      function i(e, i) {
        switch (i) {case "readAsText":
            return t.atob(e, "utf8");case "readAsBinaryString":
            return t.atob(e);case "readAsDataURL":
            return e;}return null;
      }var n = { read: function read(e, t) {
          var n,
              r = this.getRuntime();return (n = r.shimExec.call(this, "FileReaderSync", "readAsBase64", t.uid)) ? ("readAsDataURL" === e && (n = "data:" + (t.type || "") + ";base64," + n), i(n, e, t.type)) : null;
        } };return e.FileReaderSync = n;
    }), n("moxie/runtime/flash/runtime/Transporter", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function (e, t) {
      var i = { getAsBlob: function getAsBlob(e) {
          var i = this.getRuntime(),
              n = i.shimExec.call(this, "Transporter", "getAsBlob", e);return n ? new t(i.uid, n) : null;
        } };return e.Transporter = i;
    }), n("moxie/runtime/flash/xhr/XMLHttpRequest", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/file/File", "moxie/file/FileReaderSync", "moxie/runtime/flash/file/FileReaderSync", "moxie/xhr/FormData", "moxie/runtime/Transporter", "moxie/runtime/flash/runtime/Transporter"], function (e, t, i, n, r, o, a, s) {
      var u = { send: function send(e, n) {
          function r() {
            e.transport = l.mode, l.shimExec.call(c, "XMLHttpRequest", "send", e, n);
          }function o(e, t) {
            l.shimExec.call(c, "XMLHttpRequest", "appendBlob", e, t.uid), n = null, r();
          }function u(e, t) {
            var i = new s();i.bind("TransportingComplete", function () {
              t(this.result);
            }), i.transport(e.getSource(), e.type, { ruid: l.uid });
          }var c = this,
              l = c.getRuntime();if (t.isEmptyObj(e.headers) || t.each(e.headers, function (e, t) {
            l.shimExec.call(c, "XMLHttpRequest", "setRequestHeader", t, e.toString());
          }), n instanceof a) {
            var d;if (n.each(function (e, t) {
              e instanceof i ? d = t : l.shimExec.call(c, "XMLHttpRequest", "append", t, e);
            }), n.hasBlob()) {
              var m = n.getBlob();m.isDetached() ? u(m, function (e) {
                m.destroy(), o(d, e);
              }) : o(d, m);
            } else n = null, r();
          } else n instanceof i ? n.isDetached() ? u(n, function (e) {
            n.destroy(), n = e.uid, r();
          }) : (n = n.uid, r()) : r();
        }, getResponse: function getResponse(e) {
          var i,
              o,
              a = this.getRuntime();if (o = a.shimExec.call(this, "XMLHttpRequest", "getResponseAsBlob")) {
            if (o = new n(a.uid, o), "blob" === e) return o;try {
              if (i = new r(), ~t.inArray(e, ["", "text"])) return i.readAsText(o);if ("json" === e && window.JSON) return JSON.parse(i.readAsText(o));
            } finally {
              o.destroy();
            }
          }return null;
        }, abort: function abort() {
          var e = this.getRuntime();e.shimExec.call(this, "XMLHttpRequest", "abort"), this.dispatchEvent("readystatechange"), this.dispatchEvent("abort");
        } };return e.XMLHttpRequest = u;
    }), n("moxie/runtime/flash/image/Image", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/runtime/Transporter", "moxie/file/Blob", "moxie/file/FileReaderSync"], function (e, t, i, n, r) {
      var o = { loadFromBlob: function loadFromBlob(e) {
          function t(e) {
            r.shimExec.call(n, "Image", "loadFromBlob", e.uid), n = r = null;
          }var n = this,
              r = n.getRuntime();if (e.isDetached()) {
            var o = new i();o.bind("TransportingComplete", function () {
              t(o.result.getSource());
            }), o.transport(e.getSource(), e.type, { ruid: r.uid });
          } else t(e.getSource());
        }, loadFromImage: function loadFromImage(e) {
          var t = this.getRuntime();return t.shimExec.call(this, "Image", "loadFromImage", e.uid);
        }, getInfo: function getInfo() {
          var e = this.getRuntime(),
              t = e.shimExec.call(this, "Image", "getInfo");return t.meta && t.meta.thumb && t.meta.thumb.data && !(e.meta.thumb.data instanceof n) && (t.meta.thumb.data = new n(e.uid, t.meta.thumb.data)), t;
        }, getAsBlob: function getAsBlob(e, t) {
          var i = this.getRuntime(),
              r = i.shimExec.call(this, "Image", "getAsBlob", e, t);return r ? new n(i.uid, r) : null;
        }, getAsDataURL: function getAsDataURL() {
          var e,
              t = this.getRuntime(),
              i = t.Image.getAsBlob.apply(this, arguments);return i ? (e = new r(), e.readAsDataURL(i)) : null;
        } };return e.Image = o;
    }), n("moxie/runtime/silverlight/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function (e, t, i, n, o) {
      function a(e) {
        var t,
            i,
            n,
            r,
            o,
            a = !1,
            s = null,
            u = 0;try {
          try {
            s = new ActiveXObject("AgControl.AgControl"), s.IsVersionSupported(e) && (a = !0), s = null;
          } catch (c) {
            var l = navigator.plugins["Silverlight Plug-In"];if (l) {
              for (t = l.description, "1.0.30226.2" === t && (t = "2.0.30226.2"), i = t.split("."); i.length > 3;) {
                i.pop();
              }for (; i.length < 4;) {
                i.push(0);
              }for (n = e.split("."); n.length > 4;) {
                n.pop();
              }do {
                r = parseInt(n[u], 10), o = parseInt(i[u], 10), u++;
              } while (u < n.length && r === o);o >= r && !isNaN(r) && (a = !0);
            }
          }
        } catch (d) {
          a = !1;
        }return a;
      }function s(s) {
        var l,
            d = this;s = e.extend({ xap_url: t.xap_url }, s), o.call(this, s, u, { access_binary: o.capTrue, access_image_binary: o.capTrue, display_media: o.capTest(r("moxie/image/Image")), do_cors: o.capTrue, drag_and_drop: !1, report_upload_progress: o.capTrue, resize_image: o.capTrue, return_response_headers: function return_response_headers(e) {
            return e && "client" === d.mode;
          }, return_response_type: function return_response_type(e) {
            return "json" !== e ? !0 : !!window.JSON;
          }, return_status_code: function return_status_code(t) {
            return "client" === d.mode || !e.arrayDiff(t, [200, 404]);
          }, select_file: o.capTrue, select_multiple: o.capTrue, send_binary_string: o.capTrue, send_browser_cookies: function send_browser_cookies(e) {
            return e && "browser" === d.mode;
          }, send_custom_headers: function send_custom_headers(e) {
            return e && "client" === d.mode;
          }, send_multipart: o.capTrue, slice_blob: o.capTrue, stream_upload: !0, summon_file_dialog: !1, upload_filesize: o.capTrue, use_http_method: function use_http_method(t) {
            return "client" === d.mode || !e.arrayDiff(t, ["GET", "POST"]);
          } }, { return_response_headers: function return_response_headers(e) {
            return e ? "client" : "browser";
          }, return_status_code: function return_status_code(t) {
            return e.arrayDiff(t, [200, 404]) ? "client" : ["client", "browser"];
          }, send_browser_cookies: function send_browser_cookies(e) {
            return e ? "browser" : "client";
          }, send_custom_headers: function send_custom_headers(e) {
            return e ? "client" : "browser";
          }, use_http_method: function use_http_method(t) {
            return e.arrayDiff(t, ["GET", "POST"]) ? "client" : ["client", "browser"];
          } }), a("2.0.31005.0") && "Opera" !== t.browser || (this.mode = !1), e.extend(this, { getShim: function getShim() {
            return i.get(this.uid).content.Moxie;
          }, shimExec: function shimExec(e, t) {
            var i = [].slice.call(arguments, 2);return d.getShim().exec(this.uid, e, t, i);
          }, init: function init() {
            var e;e = this.getShimContainer(), e.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;">' + '<param name="source" value="' + s.xap_url + '"/>' + '<param name="background" value="Transparent"/>' + '<param name="windowless" value="true"/>' + '<param name="enablehtmlaccess" value="true"/>' + '<param name="initParams" value="uid=' + this.uid + ",target=" + o.getGlobalEventTarget() + '"/>' + "</object>", l = setTimeout(function () {
              d && !d.initialized && d.trigger("Error", new n.RuntimeError(n.RuntimeError.NOT_INIT_ERR));
            }, "Windows" !== t.OS ? 1e4 : 5e3);
          }, destroy: function (e) {
            return function () {
              e.call(d), clearTimeout(l), s = l = e = d = null;
            };
          }(this.destroy) }, c);
      }var u = "silverlight",
          c = {};return o.addConstructor(u, s), c;
    }), n("moxie/runtime/silverlight/file/Blob", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/Blob"], function (e, t, i) {
      return e.Blob = t.extend({}, i);
    }), n("moxie/runtime/silverlight/file/FileInput", ["moxie/runtime/silverlight/Runtime", "moxie/file/File", "moxie/core/utils/Dom", "moxie/core/utils/Basic"], function (e, t, i, n) {
      function r(e) {
        for (var t = "", i = 0; i < e.length; i++) {
          t += ("" !== t ? "|" : "") + e[i].title + " | *." + e[i].extensions.replace(/,/g, ";*.");
        }return t;
      }var o = { init: function init(e) {
          var o = this,
              a = this.getRuntime(),
              s = i.get(e.browse_button);s && (s.setAttribute("tabindex", -1), s = null), this.bind("Change", function () {
            var e = a.shimExec.call(o, "FileInput", "getFiles");
            o.files = [], n.each(e, function (e) {
              o.files.push(new t(a.uid, e));
            });
          }, 999), a.shimExec.call(this, "FileInput", "init", r(e.accept), e.multiple), this.trigger("ready");
        }, setOption: function setOption(e, t) {
          "accept" == e && (t = r(t)), this.getRuntime().shimExec.call(this, "FileInput", "setOption", e, t);
        } };return e.FileInput = o;
    }), n("moxie/runtime/silverlight/file/FileDrop", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Dom", "moxie/core/utils/Events"], function (e, t, i) {
      var n = { init: function init() {
          var e,
              n = this,
              r = n.getRuntime();return e = r.getShimContainer(), i.addEvent(e, "dragover", function (e) {
            e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "copy";
          }, n.uid), i.addEvent(e, "dragenter", function (e) {
            e.preventDefault();var i = t.get(r.uid).dragEnter(e);i && e.stopPropagation();
          }, n.uid), i.addEvent(e, "drop", function (e) {
            e.preventDefault();var i = t.get(r.uid).dragDrop(e);i && e.stopPropagation();
          }, n.uid), r.shimExec.call(this, "FileDrop", "init");
        } };return e.FileDrop = n;
    }), n("moxie/runtime/silverlight/file/FileReader", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReader"], function (e, t, i) {
      return e.FileReader = t.extend({}, i);
    }), n("moxie/runtime/silverlight/file/FileReaderSync", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReaderSync"], function (e, t, i) {
      return e.FileReaderSync = t.extend({}, i);
    }), n("moxie/runtime/silverlight/runtime/Transporter", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/runtime/Transporter"], function (e, t, i) {
      return e.Transporter = t.extend({}, i);
    }), n("moxie/runtime/silverlight/xhr/XMLHttpRequest", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/xhr/XMLHttpRequest", "moxie/runtime/silverlight/file/FileReaderSync", "moxie/runtime/silverlight/runtime/Transporter"], function (e, t, i) {
      return e.XMLHttpRequest = t.extend({}, i);
    }), n("moxie/runtime/silverlight/image/Image", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/runtime/flash/image/Image"], function (e, t, i, n) {
      return e.Image = t.extend({}, n, { getInfo: function getInfo() {
          var e = this.getRuntime(),
              n = ["tiff", "exif", "gps", "thumb"],
              r = { meta: {} },
              o = e.shimExec.call(this, "Image", "getInfo");return o.meta && (t.each(n, function (e) {
            var t,
                i,
                n,
                a,
                s = o.meta[e];if (s && s.keys) for (r.meta[e] = {}, i = 0, n = s.keys.length; n > i; i++) {
              t = s.keys[i], a = s[t], a && (/^(\d|[1-9]\d+)$/.test(a) ? a = parseInt(a, 10) : /^\d*\.\d+$/.test(a) && (a = parseFloat(a)), r.meta[e][t] = a);
            }
          }), r.meta && r.meta.thumb && r.meta.thumb.data && !(e.meta.thumb.data instanceof i) && (r.meta.thumb.data = new i(e.uid, r.meta.thumb.data))), r.width = parseInt(o.width, 10), r.height = parseInt(o.height, 10), r.size = parseInt(o.size, 10), r.type = o.type, r.name = o.name, r;
        }, resize: function resize(e, t, i) {
          this.getRuntime().shimExec.call(this, "Image", "resize", e.x, e.y, e.width, e.height, t, i.preserveHeaders, i.resample);
        } });
    }), n("moxie/runtime/html4/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function (e, t, i, n) {
      function o(t) {
        var o = this,
            u = i.capTest,
            c = i.capTrue;i.call(this, t, a, { access_binary: u(window.FileReader || window.File && File.getAsDataURL), access_image_binary: !1, display_media: u((n.can("create_canvas") || n.can("use_data_uri_over32kb")) && r("moxie/image/Image")), do_cors: !1, drag_and_drop: !1, filter_by_extension: u(function () {
            return !("Chrome" === n.browser && n.verComp(n.version, 28, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<") || "Safari" === n.browser && n.verComp(n.version, 7, "<") || "Firefox" === n.browser && n.verComp(n.version, 37, "<"));
          }()), resize_image: function resize_image() {
            return s.Image && o.can("access_binary") && n.can("create_canvas");
          }, report_upload_progress: !1, return_response_headers: !1, return_response_type: function return_response_type(t) {
            return "json" === t && window.JSON ? !0 : !!~e.inArray(t, ["text", "document", ""]);
          }, return_status_code: function return_status_code(t) {
            return !e.arrayDiff(t, [200, 404]);
          }, select_file: function select_file() {
            return n.can("use_fileinput");
          }, select_multiple: !1, send_binary_string: !1, send_custom_headers: !1, send_multipart: !0, slice_blob: !1, stream_upload: function stream_upload() {
            return o.can("select_file");
          }, summon_file_dialog: function summon_file_dialog() {
            return o.can("select_file") && !("Firefox" === n.browser && n.verComp(n.version, 4, "<") || "Opera" === n.browser && n.verComp(n.version, 12, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<"));
          }, upload_filesize: c, use_http_method: function use_http_method(t) {
            return !e.arrayDiff(t, ["GET", "POST"]);
          } }), e.extend(this, { init: function init() {
            this.trigger("Init");
          }, destroy: function (e) {
            return function () {
              e.call(o), e = o = null;
            };
          }(this.destroy) }), e.extend(this.getShim(), s);
      }var a = "html4",
          s = {};return i.addConstructor(a, o), s;
    }), n("moxie/runtime/html4/file/FileInput", ["moxie/runtime/html4/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function (e, t, i, n, r, o, a) {
      function s() {
        function e() {
          var o,
              c,
              d,
              m,
              h,
              f,
              p = this,
              g = p.getRuntime();f = i.guid("uid_"), o = g.getShimContainer(), s && (d = n.get(s + "_form"), d && (i.extend(d.style, { top: "100%" }), d.firstChild.setAttribute("tabindex", -1))), m = document.createElement("form"), m.setAttribute("id", f + "_form"), m.setAttribute("method", "post"), m.setAttribute("enctype", "multipart/form-data"), m.setAttribute("encoding", "multipart/form-data"), i.extend(m.style, { overflow: "hidden", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }), h = document.createElement("input"), h.setAttribute("id", f), h.setAttribute("type", "file"), h.setAttribute("accept", l.join(",")), g.can("summon_file_dialog") && h.setAttribute("tabindex", -1), i.extend(h.style, { fontSize: "999px", opacity: 0 }), m.appendChild(h), o.appendChild(m), i.extend(h.style, { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }), "IE" === a.browser && a.verComp(a.version, 10, "<") && i.extend(h.style, { filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)" }), h.onchange = function () {
            var i;this.value && (i = this.files ? this.files[0] : { name: this.value }, i = new t(g.uid, i), this.onchange = function () {}, e.call(p), p.files = [i], h.setAttribute("id", i.uid), m.setAttribute("id", i.uid + "_form"), p.trigger("change"), h = m = null);
          }, g.can("summon_file_dialog") && (c = n.get(u.browse_button), r.removeEvent(c, "click", p.uid), r.addEvent(c, "click", function (e) {
            h && !h.disabled && h.click(), e.preventDefault();
          }, p.uid)), s = f, o = d = c = null;
        }var s,
            u,
            c,
            l = [];i.extend(this, { init: function init(t) {
            var i,
                a = this,
                s = a.getRuntime();u = t, l = o.extList2mimes(t.accept, s.can("filter_by_extension")), i = s.getShimContainer(), function () {
              var e, o, l;e = n.get(t.browse_button), c = n.getStyle(e, "z-index") || "auto", s.can("summon_file_dialog") ? ("static" === n.getStyle(e, "position") && (e.style.position = "relative"), a.bind("Refresh", function () {
                o = parseInt(c, 10) || 1, n.get(u.browse_button).style.zIndex = o, this.getRuntime().getShimContainer().style.zIndex = o - 1;
              })) : e.setAttribute("tabindex", -1), l = s.can("summon_file_dialog") ? e : i, r.addEvent(l, "mouseover", function () {
                a.trigger("mouseenter");
              }, a.uid), r.addEvent(l, "mouseout", function () {
                a.trigger("mouseleave");
              }, a.uid), r.addEvent(l, "mousedown", function () {
                a.trigger("mousedown");
              }, a.uid), r.addEvent(n.get(t.container), "mouseup", function () {
                a.trigger("mouseup");
              }, a.uid), e = null;
            }(), e.call(this), i = null, a.trigger({ type: "ready", async: !0 });
          }, setOption: function setOption(e, t) {
            var i,
                r = this.getRuntime();"accept" == e && (l = t.mimes || o.extList2mimes(t, r.can("filter_by_extension"))), i = n.get(s), i && i.setAttribute("accept", l.join(","));
          }, disable: function disable(e) {
            var t;(t = n.get(s)) && (t.disabled = !!e);
          }, destroy: function destroy() {
            var e = this.getRuntime(),
                t = e.getShim(),
                i = e.getShimContainer(),
                o = u && n.get(u.container),
                a = u && n.get(u.browse_button);o && r.removeAllEvents(o, this.uid), a && (r.removeAllEvents(a, this.uid), a.style.zIndex = c), i && (r.removeAllEvents(i, this.uid), i.innerHTML = ""), t.removeInstance(this.uid), s = l = u = i = o = a = t = null;
          } });
      }return e.FileInput = s;
    }), n("moxie/runtime/html4/file/FileReader", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/file/FileReader"], function (e, t) {
      return e.FileReader = t;
    }), n("moxie/runtime/html4/xhr/XMLHttpRequest", ["moxie/runtime/html4/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Url", "moxie/core/Exceptions", "moxie/core/utils/Events", "moxie/file/Blob", "moxie/xhr/FormData"], function (e, t, i, n, r, o, a, s) {
      function u() {
        function e(e) {
          var t,
              n,
              r,
              a,
              s = this,
              u = !1;if (l) {
            if (t = l.id.replace(/_iframe$/, ""), n = i.get(t + "_form")) {
              for (r = n.getElementsByTagName("input"), a = r.length; a--;) {
                switch (r[a].getAttribute("type")) {case "hidden":
                    r[a].parentNode.removeChild(r[a]);break;case "file":
                    u = !0;}
              }r = [], u || n.parentNode.removeChild(n), n = null;
            }setTimeout(function () {
              o.removeEvent(l, "load", s.uid), l.parentNode && l.parentNode.removeChild(l);var t = s.getRuntime().getShimContainer();t.children.length || t.parentNode.removeChild(t), t = l = null, e();
            }, 1);
          }
        }var u, c, l;t.extend(this, { send: function send(d, m) {
            function h() {
              var i = w.getShimContainer() || document.body,
                  r = document.createElement("div");r.innerHTML = '<iframe id="' + f + '_iframe" name="' + f + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>', l = r.firstChild, i.appendChild(l), o.addEvent(l, "load", function () {
                var i;try {
                  i = l.contentWindow.document || l.contentDocument || window.frames[l.id].document, /^4(0[0-9]|1[0-7]|2[2346])\s/.test(i.title) ? u = i.title.replace(/^(\d+).*$/, "$1") : (u = 200, c = t.trim(i.body.innerHTML), v.trigger({ type: "progress", loaded: c.length, total: c.length }), x && v.trigger({ type: "uploadprogress", loaded: x.size || 1025, total: x.size || 1025 }));
                } catch (r) {
                  if (!n.hasSameOrigin(d.url)) return e.call(v, function () {
                    v.trigger("error");
                  }), void 0;u = 404;
                }e.call(v, function () {
                  v.trigger("load");
                });
              }, v.uid);
            }var f,
                p,
                g,
                x,
                v = this,
                w = v.getRuntime();if (u = c = null, m instanceof s && m.hasBlob()) {
              if (x = m.getBlob(), f = x.uid, g = i.get(f), p = i.get(f + "_form"), !p) throw new r.DOMException(r.DOMException.NOT_FOUND_ERR);
            } else f = t.guid("uid_"), p = document.createElement("form"), p.setAttribute("id", f + "_form"), p.setAttribute("method", d.method), p.setAttribute("enctype", "multipart/form-data"), p.setAttribute("encoding", "multipart/form-data"), w.getShimContainer().appendChild(p);p.setAttribute("target", f + "_iframe"), m instanceof s && m.each(function (e, i) {
              if (e instanceof a) g && g.setAttribute("name", i);else {
                var n = document.createElement("input");t.extend(n, { type: "hidden", name: i, value: e }), g ? p.insertBefore(n, g) : p.appendChild(n);
              }
            }), p.setAttribute("action", d.url), h(), p.submit(), v.trigger("loadstart");
          }, getStatus: function getStatus() {
            return u;
          }, getResponse: function getResponse(e) {
            if ("json" === e && "string" === t.typeOf(c) && window.JSON) try {
              return JSON.parse(c.replace(/^\s*<pre[^>]*>/, "").replace(/<\/pre>\s*$/, ""));
            } catch (i) {
              return null;
            }return c;
          }, abort: function abort() {
            var t = this;l && l.contentWindow && (l.contentWindow.stop ? l.contentWindow.stop() : l.contentWindow.document.execCommand ? l.contentWindow.document.execCommand("Stop") : l.src = "about:blank"), e.call(this, function () {
              t.dispatchEvent("abort");
            });
          }, destroy: function destroy() {
            this.getRuntime().getShim().removeInstance(this.uid);
          } });
      }return e.XMLHttpRequest = u;
    }), n("moxie/runtime/html4/image/Image", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/image/Image"], function (e, t) {
      return e.Image = t;
    }), a(["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Dom", "moxie/core/EventTarget", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/file/Blob", "moxie/core/I18n", "moxie/core/utils/Mime", "moxie/file/FileInput", "moxie/file/File", "moxie/file/FileDrop", "moxie/file/FileReader", "moxie/core/utils/Url", "moxie/runtime/RuntimeTarget", "moxie/xhr/FormData", "moxie/xhr/XMLHttpRequest", "moxie/image/Image", "moxie/core/utils/Events", "moxie/runtime/html5/image/ResizerCanvas"]);
  }(this);
});

/***/ })

/******/ });
//# sourceMappingURL=moxie.js.map