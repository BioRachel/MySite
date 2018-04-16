"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

!function (e) {
  var t = {};function n(r) {
    if (t[r]) return t[r].exports;var i = t[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
  }, n.r = function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 2);
}([function (e, t, n) {
  var r, i, o;
  /*!
   * jQuery JavaScript Library v2.2.4
   * http://jquery.com/
   *
   * Includes Sizzle.js
   * http://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2016-05-20T17:23Z
   */
  /*!
   * jQuery JavaScript Library v2.2.4
   * http://jquery.com/
   *
   * Includes Sizzle.js
   * http://sizzlejs.com/
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2016-05-20T17:23Z
   */
  i = "undefined" != typeof window ? window : this, o = function o(n, i) {
    var o = [],
        s = n.document,
        a = o.slice,
        l = o.concat,
        u = o.push,
        c = o.indexOf,
        f = {},
        p = f.toString,
        d = f.hasOwnProperty,
        h = {},
        g = function g(e, t) {
      return new g.fn.init(e, t);
    },
        m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        v = /^-ms-/,
        y = /-([\da-z])/gi,
        x = function x(e, t) {
      return t.toUpperCase();
    };function w(e) {
      var t = !!e && "length" in e && e.length,
          n = g.type(e);return "function" !== n && !g.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }g.fn = g.prototype = { jquery: "2.2.4", constructor: g, selector: "", length: 0, toArray: function toArray() {
        return a.call(this);
      }, get: function get(e) {
        return null != e ? e < 0 ? this[e + this.length] : this[e] : a.call(this);
      }, pushStack: function pushStack(e) {
        var t = g.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
      }, each: function each(e) {
        return g.each(this, e);
      }, map: function map(e) {
        return this.pushStack(g.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      }, slice: function slice() {
        return this.pushStack(a.apply(this, arguments));
      }, first: function first() {
        return this.eq(0);
      }, last: function last() {
        return this.eq(-1);
      }, eq: function eq(e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      }, end: function end() {
        return this.prevObject || this.constructor();
      }, push: u, sort: o.sort, splice: o.splice }, g.extend = g.fn.extend = function () {
      var e,
          t,
          n,
          r,
          i,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1;for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || g.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
        if (null != (e = arguments[a])) for (t in e) {
          n = s[t], s !== (r = e[t]) && (u && r && (g.isPlainObject(r) || (i = g.isArray(r))) ? (i ? (i = !1, o = n && g.isArray(n) ? n : []) : o = n && g.isPlainObject(n) ? n : {}, s[t] = g.extend(u, o, r)) : void 0 !== r && (s[t] = r));
        }
      }return s;
    }, g.extend({ expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
        throw new Error(e);
      }, noop: function noop() {}, isFunction: function isFunction(e) {
        return "function" === g.type(e);
      }, isArray: Array.isArray, isWindow: function isWindow(e) {
        return null != e && e === e.window;
      }, isNumeric: function isNumeric(e) {
        var t = e && e.toString();return !g.isArray(e) && t - parseFloat(t) + 1 >= 0;
      }, isPlainObject: function isPlainObject(e) {
        var t;if ("object" !== g.type(e) || e.nodeType || g.isWindow(e)) return !1;if (e.constructor && !d.call(e, "constructor") && !d.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;for (t in e) {}return void 0 === t || d.call(e, t);
      }, isEmptyObject: function isEmptyObject(e) {
        var t;for (t in e) {
          return !1;
        }return !0;
      }, type: function type(e) {
        return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? f[p.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
      }, globalEval: function globalEval(e) {
        var t,
            n = eval;(e = g.trim(e)) && (1 === e.indexOf("use strict") ? ((t = s.createElement("script")).text = e, s.head.appendChild(t).parentNode.removeChild(t)) : n(e));
      }, camelCase: function camelCase(e) {
        return e.replace(v, "ms-").replace(y, x);
      }, nodeName: function nodeName(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }, each: function each(e, t) {
        var n,
            r = 0;if (w(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {} else for (r in e) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }return e;
      }, trim: function trim(e) {
        return null == e ? "" : (e + "").replace(m, "");
      }, makeArray: function makeArray(e, t) {
        var n = t || [];return null != e && (w(Object(e)) ? g.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
      }, inArray: function inArray(e, t, n) {
        return null == t ? -1 : c.call(t, e, n);
      }, merge: function merge(e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
          e[i++] = t[r];
        }return e.length = i, e;
      }, grep: function grep(e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) {
          !t(e[i], i) !== s && r.push(e[i]);
        }return r;
      }, map: function map(e, t, n) {
        var r,
            i,
            o = 0,
            s = [];if (w(e)) for (r = e.length; o < r; o++) {
          null != (i = t(e[o], o, n)) && s.push(i);
        } else for (o in e) {
          null != (i = t(e[o], o, n)) && s.push(i);
        }return l.apply([], s);
      }, guid: 1, proxy: function proxy(e, t) {
        var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g.isFunction(e)) return r = a.call(arguments, 2), (i = function i() {
          return e.apply(t || this, r.concat(a.call(arguments)));
        }).guid = e.guid = e.guid || g.guid++, i;
      }, now: Date.now, support: h }), "function" == typeof Symbol && (g.fn[Symbol.iterator] = o[Symbol.iterator]), g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      f["[object " + t + "]"] = t.toLowerCase();
    });var b =
    /*!
     * Sizzle CSS Selector Engine v2.2.1
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-10-17
     */
    function (e) {
      var t,
          n,
          r,
          i,
          o,
          s,
          a,
          l,
          u,
          c,
          f,
          p,
          d,
          h,
          g,
          m,
          v,
          y,
          x,
          w = "sizzle" + 1 * new Date(),
          b = e.document,
          T = 0,
          C = 0,
          S = oe(),
          k = oe(),
          E = oe(),
          A = function A(e, t) {
        return e === t && (f = !0), 0;
      },
          N = 1 << 31,
          D = {}.hasOwnProperty,
          j = [],
          L = j.pop,
          q = j.push,
          H = j.push,
          O = j.slice,
          P = function P(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) return n;
        }return -1;
      },
          W = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          F = "[\\x20\\t\\r\\n\\f]",
          R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          M = "\\[" + F + "*(" + R + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + F + "*\\]",
          I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
          B = new RegExp(F + "+", "g"),
          _ = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
          $ = new RegExp("^" + F + "*," + F + "*"),
          z = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
          X = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
          U = new RegExp(I),
          Y = new RegExp("^" + R + "$"),
          V = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + I), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"), bool: new RegExp("^(?:" + W + ")$", "i"), needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i") },
          Q = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          K = /^[^{]+\{\s*\[native \w/,
          J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          Z = /[+~]/,
          ee = /'|\\/g,
          te = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
          ne = function ne(e, t, n) {
        var r = "0x" + t - 65536;return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
          re = function re() {
        p();
      };try {
        H.apply(j = O.call(b.childNodes), b.childNodes), j[b.childNodes.length].nodeType;
      } catch (e) {
        H = { apply: j.length ? function (e, t) {
            q.apply(e, O.call(t));
          } : function (e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];) {}e.length = n - 1;
          } };
      }function ie(e, t, r, i) {
        var o,
            a,
            u,
            c,
            f,
            h,
            v,
            y,
            T = t && t.ownerDocument,
            C = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return r;if (!i && ((t ? t.ownerDocument || t : b) !== d && p(t), t = t || d, g)) {
          if (11 !== C && (h = J.exec(e))) if (o = h[1]) {
            if (9 === C) {
              if (!(u = t.getElementById(o))) return r;if (u.id === o) return r.push(u), r;
            } else if (T && (u = T.getElementById(o)) && x(t, u) && u.id === o) return r.push(u), r;
          } else {
            if (h[2]) return H.apply(r, t.getElementsByTagName(e)), r;if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r;
          }if (n.qsa && !E[e + " "] && (!m || !m.test(e))) {
            if (1 !== C) T = t, y = e;else if ("object" !== t.nodeName.toLowerCase()) {
              for ((c = t.getAttribute("id")) ? c = c.replace(ee, "\\$&") : t.setAttribute("id", c = w), a = (v = s(e)).length, f = Y.test(c) ? "#" + c : "[id='" + c + "']"; a--;) {
                v[a] = f + " " + ge(v[a]);
              }y = v.join(","), T = Z.test(e) && de(t.parentNode) || t;
            }if (y) try {
              return H.apply(r, T.querySelectorAll(y)), r;
            } catch (e) {} finally {
              c === w && t.removeAttribute("id");
            }
          }
        }return l(e.replace(_, "$1"), t, r, i);
      }function oe() {
        var e = [];return function t(n, i) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
        };
      }function se(e) {
        return e[w] = !0, e;
      }function ae(e) {
        var t = d.createElement("div");try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }function le(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) {
          r.attrHandle[n[i]] = t;
        }
      }function ue(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || N) - (~e.sourceIndex || N);if (r) return r;if (n) for (; n = n.nextSibling;) {
          if (n === t) return -1;
        }return e ? 1 : -1;
      }function ce(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }function fe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
        };
      }function pe(e) {
        return se(function (t) {
          return t = +t, se(function (n, r) {
            for (var i, o = e([], n.length, t), s = o.length; s--;) {
              n[i = o[s]] && (n[i] = !(r[i] = n[i]));
            }
          });
        });
      }function de(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }for (t in n = ie.support = {}, o = ie.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
      }, p = ie.setDocument = function (e) {
        var t,
            i,
            s = e ? e.ownerDocument || e : b;return s !== d && 9 === s.nodeType && s.documentElement ? (h = (d = s).documentElement, g = !o(d), (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ae(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), n.getElementsByTagName = ae(function (e) {
          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
        }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ae(function (e) {
          return h.appendChild(e).id = w, !d.getElementsByName || !d.getElementsByName(w).length;
        }), n.getById ? (r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && g) {
            var n = t.getElementById(e);return n ? [n] : [];
          }
        }, r.filter.ID = function (e) {
          var t = e.replace(te, ne);return function (e) {
            return e.getAttribute("id") === t;
          };
        }) : (delete r.find.ID, r.filter.ID = function (e) {
          var t = e.replace(te, ne);return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
          };
        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              r = [],
              i = 0,
              o = t.getElementsByTagName(e);if ("*" === e) {
            for (; n = o[i++];) {
              1 === n.nodeType && r.push(n);
            }return r;
          }return o;
        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
        }, v = [], m = [], (n.qsa = K.test(d.querySelectorAll)) && (ae(function (e) {
          h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + W + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]");
        }), ae(function (e) {
          var t = d.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
        })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ae(function (e) {
          n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", I);
        }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }return !1;
        }, A = t ? function (e, t) {
          if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === b && x(b, e) ? -1 : t === d || t.ownerDocument === b && x(b, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1);
        } : function (e, t) {
          if (e === t) return f = !0, 0;var n,
              r = 0,
              i = e.parentNode,
              o = t.parentNode,
              s = [e],
              a = [t];if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;if (i === o) return ue(e, t);for (n = e; n = n.parentNode;) {
            s.unshift(n);
          }for (n = t; n = n.parentNode;) {
            a.unshift(n);
          }for (; s[r] === a[r];) {
            r++;
          }return r ? ue(s[r], a[r]) : s[r] === b ? -1 : a[r] === b ? 1 : 0;
        }, d) : d;
      }, ie.matches = function (e, t) {
        return ie(e, null, null, t);
      }, ie.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== d && p(e), t = t.replace(X, "='$1']"), n.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
          var r = y.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
        } catch (e) {}return ie(t, d, null, [e]).length > 0;
      }, ie.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }, ie.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);var i = r.attrHandle[t.toLowerCase()],
            o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
      }, ie.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, ie.uniqueSort = function (e) {
        var t,
            r = [],
            i = 0,
            o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
          for (; t = e[o++];) {
            t === e[o] && (i = r.push(o));
          }for (; i--;) {
            e.splice(r[i], 1);
          }
        }return c = null, e;
      }, i = ie.getText = function (e) {
        var t,
            n = "",
            r = 0,
            o = e.nodeType;if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
              n += i(e);
            }
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; t = e[r++];) {
          n += i(t);
        }return n;
      }, (r = ie.selectors = { cacheLength: 50, createPseudo: se, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          }, CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e;
          }, PSEUDO: function PSEUDO(e) {
            var t,
                n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          } }, filter: { TAG: function TAG(e) {
            var t = e.replace(te, ne).toLowerCase();return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          }, CLASS: function CLASS(e) {
            var t = S[e + " "];return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && S(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          }, ATTR: function ATTR(e, t, n) {
            return function (r) {
              var i = ie.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
            };
          }, CHILD: function CHILD(e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;return 1 === r && 0 === i ? function (e) {
              return !!e.parentNode;
            } : function (t, n, l) {
              var u,
                  c,
                  f,
                  p,
                  d,
                  h,
                  g = o !== s ? "nextSibling" : "previousSibling",
                  m = t.parentNode,
                  v = a && t.nodeName.toLowerCase(),
                  y = !l && !a,
                  x = !1;if (m) {
                if (o) {
                  for (; g;) {
                    for (p = t; p = p[g];) {
                      if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                    }h = g = "only" === e && !h && "nextSibling";
                  }return !0;
                }if (h = [s ? m.firstChild : m.lastChild], s && y) {
                  for (x = (d = (u = (c = (f = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && u[1]) && u[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) {
                    if (1 === p.nodeType && ++x && p === t) {
                      c[e] = [T, d, x];break;
                    }
                  }
                } else if (y && (x = d = (u = (c = (f = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && u[1]), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[w] || (p[w] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t));) {}return (x -= i) === r || x % r == 0 && x / r >= 0;
              }
            };
          }, PSEUDO: function PSEUDO(e, t) {
            var n,
                i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
              for (var r, o = i(e, t), s = o.length; s--;) {
                e[r = P(e, o[s])] = !(n[r] = o[s]);
              }
            }) : function (e) {
              return i(e, 0, n);
            }) : i;
          } }, pseudos: { not: se(function (e) {
            var t = [],
                n = [],
                r = a(e.replace(_, "$1"));return r[w] ? se(function (e, t, n, i) {
              for (var o, s = r(e, null, i, []), a = e.length; a--;) {
                (o = s[a]) && (e[a] = !(t[a] = o));
              }
            }) : function (e, i, o) {
              return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
            };
          }), has: se(function (e) {
            return function (t) {
              return ie(e, t).length > 0;
            };
          }), contains: se(function (e) {
            return e = e.replace(te, ne), function (t) {
              return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
            };
          }), lang: se(function (e) {
            return Y.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
              var n;do {
                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
            };
          }), target: function target(t) {
            var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
          }, root: function root(e) {
            return e === h;
          }, focus: function focus(e) {
            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          }, enabled: function enabled(e) {
            return !1 === e.disabled;
          }, disabled: function disabled(e) {
            return !0 === e.disabled;
          }, checked: function checked(e) {
            var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
          }, selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          }, empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }return !0;
          }, parent: function parent(e) {
            return !r.pseudos.empty(e);
          }, header: function header(e) {
            return G.test(e.nodeName);
          }, input: function input(e) {
            return Q.test(e.nodeName);
          }, button: function button(e) {
            var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
          }, text: function text(e) {
            var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          }, first: pe(function () {
            return [0];
          }), last: pe(function (e, t) {
            return [t - 1];
          }), eq: pe(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }), even: pe(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }return e;
          }), odd: pe(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }return e;
          }), lt: pe(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; --r >= 0;) {
              e.push(r);
            }return e;
          }), gt: pe(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) {
              e.push(r);
            }return e;
          }) } }).pseudos.nth = r.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
        r.pseudos[t] = ce(t);
      }for (t in { submit: !0, reset: !0 }) {
        r.pseudos[t] = fe(t);
      }function he() {}function ge(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) {
          r += e[t].value;
        }return r;
      }function me(e, t, n) {
        var r = t.dir,
            i = n && "parentNode" === r,
            o = C++;return t.first ? function (t, n, o) {
          for (; t = t[r];) {
            if (1 === t.nodeType || i) return e(t, n, o);
          }
        } : function (t, n, s) {
          var a,
              l,
              u,
              c = [T, o];if (s) {
            for (; t = t[r];) {
              if ((1 === t.nodeType || i) && e(t, n, s)) return !0;
            }
          } else for (; t = t[r];) {
            if (1 === t.nodeType || i) {
              if ((a = (l = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}))[r]) && a[0] === T && a[1] === o) return c[2] = a[2];if (l[r] = c, c[2] = e(t, n, s)) return !0;
            }
          }
        };
      }function ve(e) {
        return e.length > 1 ? function (t, n, r) {
          for (var i = e.length; i--;) {
            if (!e[i](t, n, r)) return !1;
          }return !0;
        } : e[0];
      }function ye(e, t, n, r, i) {
        for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) {
          (o = e[a]) && (n && !n(o, r, i) || (s.push(o), u && t.push(a)));
        }return s;
      }function xe(e, t, n, r, i, o) {
        return r && !r[w] && (r = xe(r)), i && !i[w] && (i = xe(i, o)), se(function (o, s, a, l) {
          var u,
              c,
              f,
              p = [],
              d = [],
              h = s.length,
              g = o || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) {
              ie(e, t[r], n);
            }return n;
          }(t || "*", a.nodeType ? [a] : a, []),
              m = !e || !o && t ? g : ye(g, p, e, a, l),
              v = n ? i || (o ? e : h || r) ? [] : s : m;if (n && n(m, v, a, l), r) for (u = ye(v, d), r(u, [], a, l), c = u.length; c--;) {
            (f = u[c]) && (v[d[c]] = !(m[d[c]] = f));
          }if (o) {
            if (i || e) {
              if (i) {
                for (u = [], c = v.length; c--;) {
                  (f = v[c]) && u.push(m[c] = f);
                }i(null, v = [], u, l);
              }for (c = v.length; c--;) {
                (f = v[c]) && (u = i ? P(o, f) : p[c]) > -1 && (o[u] = !(s[u] = f));
              }
            }
          } else v = ye(v === s ? v.splice(h, v.length) : v), i ? i(null, s, v, l) : H.apply(s, v);
        });
      }function we(e) {
        for (var t, n, i, o = e.length, s = r.relative[e[0].type], a = s || r.relative[" "], l = s ? 1 : 0, c = me(function (e) {
          return e === t;
        }, a, !0), f = me(function (e) {
          return P(t, e) > -1;
        }, a, !0), p = [function (e, n, r) {
          var i = !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
        }]; l < o; l++) {
          if (n = r.relative[e[l].type]) p = [me(ve(p), n)];else {
            if ((n = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
              for (i = ++l; i < o && !r.relative[e[i].type]; i++) {}return xe(l > 1 && ve(p), l > 1 && ge(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(_, "$1"), n, l < i && we(e.slice(l, i)), i < o && we(e = e.slice(i)), i < o && ge(e));
            }p.push(n);
          }
        }return ve(p);
      }return he.prototype = r.filters = r.pseudos, r.setFilters = new he(), s = ie.tokenize = function (e, t) {
        var n,
            i,
            o,
            s,
            a,
            l,
            u,
            c = k[e + " "];if (c) return t ? 0 : c.slice(0);for (a = e, l = [], u = r.preFilter; a;) {
          for (s in n && !(i = $.exec(a)) || (i && (a = a.slice(i[0].length) || a), l.push(o = [])), n = !1, (i = z.exec(a)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(_, " ") }), a = a.slice(n.length)), r.filter) {
            !(i = V[s].exec(a)) || u[s] && !(i = u[s](i)) || (n = i.shift(), o.push({ value: n, type: s, matches: i }), a = a.slice(n.length));
          }if (!n) break;
        }return t ? a.length : a ? ie.error(e) : k(e, l).slice(0);
      }, a = ie.compile = function (e, t) {
        var n,
            i = [],
            o = [],
            a = E[e + " "];if (!a) {
          for (t || (t = s(e)), n = t.length; n--;) {
            (a = we(t[n]))[w] ? i.push(a) : o.push(a);
          }(a = E(e, function (e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function o(_o, s, a, l, c) {
              var f,
                  h,
                  m,
                  v = 0,
                  y = "0",
                  x = _o && [],
                  w = [],
                  b = u,
                  C = _o || i && r.find.TAG("*", c),
                  S = T += null == b ? 1 : Math.random() || .1,
                  k = C.length;for (c && (u = s === d || s || c); y !== k && null != (f = C[y]); y++) {
                if (i && f) {
                  for (h = 0, s || f.ownerDocument === d || (p(f), a = !g); m = e[h++];) {
                    if (m(f, s || d, a)) {
                      l.push(f);break;
                    }
                  }c && (T = S);
                }n && ((f = !m && f) && v--, _o && x.push(f));
              }if (v += y, n && y !== v) {
                for (h = 0; m = t[h++];) {
                  m(x, w, s, a);
                }if (_o) {
                  if (v > 0) for (; y--;) {
                    x[y] || w[y] || (w[y] = L.call(l));
                  }w = ye(w);
                }H.apply(l, w), c && !_o && w.length > 0 && v + t.length > 1 && ie.uniqueSort(l);
              }return c && (T = S, u = b), x;
            };return n ? se(o) : o;
          }(o, i))).selector = e;
        }return a;
      }, l = ie.select = function (e, t, i, o) {
        var l,
            u,
            c,
            f,
            p,
            d = "function" == typeof e && e,
            h = !o && s(e = d.selector || e);if (i = i || [], 1 === h.length) {
          if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && n.getById && 9 === t.nodeType && g && r.relative[u[1].type]) {
            if (!(t = (r.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return i;d && (t = t.parentNode), e = e.slice(u.shift().value.length);
          }for (l = V.needsContext.test(e) ? 0 : u.length; l-- && (c = u[l], !r.relative[f = c.type]);) {
            if ((p = r.find[f]) && (o = p(c.matches[0].replace(te, ne), Z.test(u[0].type) && de(t.parentNode) || t))) {
              if (u.splice(l, 1), !(e = o.length && ge(u))) return H.apply(i, o), i;break;
            }
          }
        }return (d || a(e, h))(o, t, !g, i, !t || Z.test(e) && de(t.parentNode) || t), i;
      }, n.sortStable = w.split("").sort(A).join("") === w, n.detectDuplicates = !!f, p(), n.sortDetached = ae(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("div"));
      }), ae(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || le("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), n.attributes && ae(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || le("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), ae(function (e) {
        return null == e.getAttribute("disabled");
      }) || le(W, function (e, t, n) {
        var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), ie;
    }(n);g.find = b, g.expr = b.selectors, g.expr[":"] = g.expr.pseudos, g.uniqueSort = g.unique = b.uniqueSort, g.text = b.getText, g.isXMLDoc = b.isXML, g.contains = b.contains;var T = function T(e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (i && g(e).is(n)) break;r.push(e);
        }
      }return r;
    },
        C = function C(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }return n;
    },
        S = g.expr.match.needsContext,
        k = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        E = /^.[^:#\[\.,]*$/;function A(e, t, n) {
      if (g.isFunction(t)) return g.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });if (t.nodeType) return g.grep(e, function (e) {
        return e === t !== n;
      });if ("string" == typeof t) {
        if (E.test(t)) return g.filter(t, e, n);t = g.filter(t, e);
      }return g.grep(e, function (e) {
        return c.call(t, e) > -1 !== n;
      });
    }g.filter = function (e, t, n) {
      var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? g.find.matchesSelector(r, e) ? [r] : [] : g.find.matches(e, g.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, g.fn.extend({ find: function find(e) {
        var t,
            n = this.length,
            r = [],
            i = this;if ("string" != typeof e) return this.pushStack(g(e).filter(function () {
          for (t = 0; t < n; t++) {
            if (g.contains(i[t], this)) return !0;
          }
        }));for (t = 0; t < n; t++) {
          g.find(e, i[t], r);
        }return (r = this.pushStack(n > 1 ? g.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r;
      }, filter: function filter(e) {
        return this.pushStack(A(this, e || [], !1));
      }, not: function not(e) {
        return this.pushStack(A(this, e || [], !0));
      }, is: function is(e) {
        return !!A(this, "string" == typeof e && S.test(e) ? g(e) : e || [], !1).length;
      } });var N,
        D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(g.fn.init = function (e, t, n) {
      var r, i;if (!e) return this;if (n = n || N, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
          if (t = t instanceof g ? t[0] : t, g.merge(this, g.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), k.test(r[1]) && g.isPlainObject(t)) for (r in t) {
            g.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          }return this;
        }return (i = s.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = s, this.selector = e, this;
      }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : g.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(g) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), g.makeArray(e, this));
    }).prototype = g.fn, N = g(s);var j = /^(?:parents|prev(?:Until|All))/,
        L = { children: !0, contents: !0, next: !0, prev: !0 };function q(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
    }g.fn.extend({ has: function has(e) {
        var t = g(e, this),
            n = t.length;return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (g.contains(this, t[e])) return !0;
          }
        });
      }, closest: function closest(e, t) {
        for (var n, r = 0, i = this.length, o = [], s = S.test(e) || "string" != typeof e ? g(e, t || this.context) : 0; r < i; r++) {
          for (n = this[r]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && g.find.matchesSelector(n, e))) {
              o.push(n);break;
            }
          }
        }return this.pushStack(o.length > 1 ? g.uniqueSort(o) : o);
      }, index: function index(e) {
        return e ? "string" == typeof e ? c.call(g(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, add: function add(e, t) {
        return this.pushStack(g.uniqueSort(g.merge(this.get(), g(e, t))));
      }, addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      } }), g.each({ parent: function parent(e) {
        var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
      }, parents: function parents(e) {
        return T(e, "parentNode");
      }, parentsUntil: function parentsUntil(e, t, n) {
        return T(e, "parentNode", n);
      }, next: function next(e) {
        return q(e, "nextSibling");
      }, prev: function prev(e) {
        return q(e, "previousSibling");
      }, nextAll: function nextAll(e) {
        return T(e, "nextSibling");
      }, prevAll: function prevAll(e) {
        return T(e, "previousSibling");
      }, nextUntil: function nextUntil(e, t, n) {
        return T(e, "nextSibling", n);
      }, prevUntil: function prevUntil(e, t, n) {
        return T(e, "previousSibling", n);
      }, siblings: function siblings(e) {
        return C((e.parentNode || {}).firstChild, e);
      }, children: function children(e) {
        return C(e.firstChild);
      }, contents: function contents(e) {
        return e.contentDocument || g.merge([], e.childNodes);
      } }, function (e, t) {
      g.fn[e] = function (n, r) {
        var i = g.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = g.filter(r, i)), this.length > 1 && (L[e] || g.uniqueSort(i), j.test(e) && i.reverse()), this.pushStack(i);
      };
    });var H,
        O = /\S+/g;function P() {
      s.removeEventListener("DOMContentLoaded", P), n.removeEventListener("load", P), g.ready();
    }g.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};return g.each(e.match(O) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }(e) : g.extend({}, e);var t,
          n,
          r,
          i,
          o = [],
          s = [],
          a = -1,
          l = function l() {
        for (i = e.once, r = t = !0; s.length; a = -1) {
          for (n = s.shift(); ++a < o.length;) {
            !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
          }
        }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
      },
          u = { add: function add() {
          return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
            g.each(n, function (n, r) {
              g.isFunction(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== g.type(r) && t(r);
            });
          }(arguments), n && !t && l()), this;
        }, remove: function remove() {
          return g.each(arguments, function (e, t) {
            for (var n; (n = g.inArray(t, o, n)) > -1;) {
              o.splice(n, 1), n <= a && a--;
            }
          }), this;
        }, has: function has(e) {
          return e ? g.inArray(e, o) > -1 : o.length > 0;
        }, empty: function empty() {
          return o && (o = []), this;
        }, disable: function disable() {
          return i = s = [], o = n = "", this;
        }, disabled: function disabled() {
          return !o;
        }, lock: function lock() {
          return i = s = [], n || (o = n = ""), this;
        }, locked: function locked() {
          return !!i;
        }, fireWith: function fireWith(e, n) {
          return i || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
        }, fire: function fire() {
          return u.fireWith(this, arguments), this;
        }, fired: function fired() {
          return !!r;
        } };return u;
    }, g.extend({ Deferred: function Deferred(e) {
        var t = [["resolve", "done", g.Callbacks("once memory"), "resolved"], ["reject", "fail", g.Callbacks("once memory"), "rejected"], ["notify", "progress", g.Callbacks("memory")]],
            n = "pending",
            r = { state: function state() {
            return n;
          }, always: function always() {
            return i.done(arguments).fail(arguments), this;
          }, then: function then() {
            var e = arguments;return g.Deferred(function (n) {
              g.each(t, function (t, o) {
                var s = g.isFunction(e[t]) && e[t];i[o[1]](function () {
                  var e = s && s.apply(this, arguments);e && g.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          }, promise: function promise(e) {
            return null != e ? g.extend(e, r) : r;
          } },
            i = {};return r.pipe = r.then, g.each(t, function (e, o) {
          var s = o[2],
              a = o[3];r[o[1]] = s.add, a && s.add(function () {
            n = a;
          }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
            return i[o[0] + "With"](this === i ? r : this, arguments), this;
          }, i[o[0] + "With"] = s.fireWith;
        }), r.promise(i), e && e.call(i, i), i;
      }, when: function when(e) {
        var t,
            n,
            r,
            i = 0,
            o = a.call(arguments),
            s = o.length,
            l = 1 !== s || e && g.isFunction(e.promise) ? s : 0,
            u = 1 === l ? e : g.Deferred(),
            c = function c(e, n, r) {
          return function (i) {
            n[e] = this, r[e] = arguments.length > 1 ? a.call(arguments) : i, r === t ? u.notifyWith(n, r) : --l || u.resolveWith(n, r);
          };
        };if (s > 1) for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) {
          o[i] && g.isFunction(o[i].promise) ? o[i].promise().progress(c(i, n, t)).done(c(i, r, o)).fail(u.reject) : --l;
        }return l || u.resolveWith(r, o), u.promise();
      } }), g.fn.ready = function (e) {
      return g.ready.promise().done(e), this;
    }, g.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
        e ? g.readyWait++ : g.ready(!0);
      }, ready: function ready(e) {
        (!0 === e ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== e && --g.readyWait > 0 || (H.resolveWith(s, [g]), g.fn.triggerHandler && (g(s).triggerHandler("ready"), g(s).off("ready"))));
      } }), g.ready.promise = function (e) {
      return H || (H = g.Deferred(), "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(g.ready) : (s.addEventListener("DOMContentLoaded", P), n.addEventListener("load", P))), H.promise(e);
    }, g.ready.promise();var W = function W(e, t, n, r, i, o, s) {
      var a = 0,
          l = e.length,
          u = null == n;if ("object" === g.type(n)) for (a in i = !0, n) {
        W(e, t, a, n[a], !0, o, s);
      } else if (void 0 !== r && (i = !0, g.isFunction(r) || (s = !0), u && (s ? (t.call(e, r), t = null) : (u = t, t = function t(e, _t, n) {
        return u.call(g(e), n);
      })), t)) for (; a < l; a++) {
        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      }return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    },
        F = function F(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };function R() {
      this.expando = g.expando + R.uid++;
    }R.uid = 1, R.prototype = { register: function register(e, t) {
        var n = t || {};return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, { value: n, writable: !0, configurable: !0 }), e[this.expando];
      }, cache: function cache(e) {
        if (!F(e)) return {};var t = e[this.expando];return t || (t = {}, F(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
      }, set: function set(e, t, n) {
        var r,
            i = this.cache(e);if ("string" == typeof t) i[t] = n;else for (r in t) {
          i[r] = t[r];
        }return i;
      }, get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];
      }, access: function access(e, t, n) {
        var r;return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, g.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t);
      }, remove: function remove(e, t) {
        var n,
            r,
            i,
            o = e[this.expando];if (void 0 !== o) {
          if (void 0 === t) this.register(e);else {
            g.isArray(t) ? r = t.concat(t.map(g.camelCase)) : (i = g.camelCase(t), r = t in o ? [t, i] : (r = i) in o ? [r] : r.match(O) || []), n = r.length;for (; n--;) {
              delete o[r[n]];
            }
          }(void 0 === t || g.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      }, hasData: function hasData(e) {
        var t = e[this.expando];return void 0 !== t && !g.isEmptyObject(t);
      } };var M = new R(),
        I = new R(),
        B = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _ = /[A-Z]/g;function $(e, t, n) {
      var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(_, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : B.test(n) ? g.parseJSON(n) : n);
        } catch (e) {}I.set(e, t, n);
      } else n = void 0;return n;
    }g.extend({ hasData: function hasData(e) {
        return I.hasData(e) || M.hasData(e);
      }, data: function data(e, t, n) {
        return I.access(e, t, n);
      }, removeData: function removeData(e, t) {
        I.remove(e, t);
      }, _data: function _data(e, t, n) {
        return M.access(e, t, n);
      }, _removeData: function _removeData(e, t) {
        M.remove(e, t);
      } }), g.fn.extend({ data: function data(e, t) {
        var n,
            r,
            i,
            o = this[0],
            s = o && o.attributes;if (void 0 === e) {
          if (this.length && (i = I.get(o), 1 === o.nodeType && !M.get(o, "hasDataAttrs"))) {
            for (n = s.length; n--;) {
              s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = g.camelCase(r.slice(5)), $(o, r, i[r]));
            }M.set(o, "hasDataAttrs", !0);
          }return i;
        }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
          I.set(this, e);
        }) : W(this, function (t) {
          var n, r;if (o && void 0 === t) return void 0 !== (n = I.get(o, e) || I.get(o, e.replace(_, "-$&").toLowerCase())) ? n : (r = g.camelCase(e), void 0 !== (n = I.get(o, r)) ? n : void 0 !== (n = $(o, r, void 0)) ? n : void 0);r = g.camelCase(e), this.each(function () {
            var n = I.get(this, r);I.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && I.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      }, removeData: function removeData(e) {
        return this.each(function () {
          I.remove(this, e);
        });
      } }), g.extend({ queue: function queue(e, t, n) {
        var r;if (e) return t = (t || "fx") + "queue", r = M.get(e, t), n && (!r || g.isArray(n) ? r = M.access(e, t, g.makeArray(n)) : r.push(n)), r || [];
      }, dequeue: function dequeue(e, t) {
        t = t || "fx";var n = g.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = g._queueHooks(e, t);"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
          g.dequeue(e, t);
        }, o)), !r && o && o.empty.fire();
      }, _queueHooks: function _queueHooks(e, t) {
        var n = t + "queueHooks";return M.get(e, n) || M.access(e, n, { empty: g.Callbacks("once memory").add(function () {
            M.remove(e, [t + "queue", n]);
          }) });
      } }), g.fn.extend({ queue: function queue(e, t) {
        var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? g.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = g.queue(this, e, t);g._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && g.dequeue(this, e);
        });
      }, dequeue: function dequeue(e) {
        return this.each(function () {
          g.dequeue(this, e);
        });
      }, clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      }, promise: function promise(e, t) {
        var n,
            r = 1,
            i = g.Deferred(),
            o = this,
            s = this.length,
            a = function a() {
          --r || i.resolveWith(o, [o]);
        };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
          (n = M.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
        }return a(), i.promise(t);
      } });var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        X = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        Y = function Y(e, t) {
      return e = t || e, "none" === g.css(e, "display") || !g.contains(e.ownerDocument, e);
    };function V(e, t, n, r) {
      var i,
          o = 1,
          s = 20,
          a = r ? function () {
        return r.cur();
      } : function () {
        return g.css(e, t, "");
      },
          l = a(),
          u = n && n[3] || (g.cssNumber[t] ? "" : "px"),
          c = (g.cssNumber[t] || "px" !== u && +l) && X.exec(g.css(e, t));if (c && c[3] !== u) {
        u = u || c[3], n = n || [], c = +l || 1;do {
          c /= o = o || ".5", g.style(e, t, c + u);
        } while (o !== (o = a() / l) && 1 !== o && --s);
      }return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i;
    }var Q = /^(?:checkbox|radio)$/i,
        G = /<([\w:-]+)/,
        K = /^$|\/(?:java|ecma)script/i,
        J = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function Z(e, t) {
      var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];return void 0 === t || t && g.nodeName(e, t) ? g.merge([e], n) : n;
    }function ee(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        M.set(e[n], "globalEval", !t || M.get(t[n], "globalEval"));
      }
    }J.optgroup = J.option, J.tbody = J.tfoot = J.colgroup = J.caption = J.thead, J.th = J.td;var te,
        ne,
        re = /<|&#?\w+;/;function ie(e, t, n, r, i) {
      for (var o, s, a, l, u, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
        if ((o = e[d]) || 0 === o) if ("object" === g.type(o)) g.merge(p, o.nodeType ? [o] : o);else if (re.test(o)) {
          for (s = s || f.appendChild(t.createElement("div")), a = (G.exec(o) || ["", ""])[1].toLowerCase(), l = J[a] || J._default, s.innerHTML = l[1] + g.htmlPrefilter(o) + l[2], c = l[0]; c--;) {
            s = s.lastChild;
          }g.merge(p, s.childNodes), (s = f.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));
      }for (f.textContent = "", d = 0; o = p[d++];) {
        if (r && g.inArray(o, r) > -1) i && i.push(o);else if (u = g.contains(o.ownerDocument, o), s = Z(f.appendChild(o), "script"), u && ee(s), n) for (c = 0; o = s[c++];) {
          K.test(o.type || "") && n.push(o);
        }
      }return f;
    }te = s.createDocumentFragment().appendChild(s.createElement("div")), (ne = s.createElement("input")).setAttribute("type", "radio"), ne.setAttribute("checked", "checked"), ne.setAttribute("name", "t"), te.appendChild(ne), h.checkClone = te.cloneNode(!0).cloneNode(!0).lastChild.checked, te.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!te.cloneNode(!0).lastChild.defaultValue;var oe = /^key/,
        se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ae = /^([^.]*)(?:\.(.+)|)/;function le() {
      return !0;
    }function ue() {
      return !1;
    }function ce() {
      try {
        return s.activeElement;
      } catch (e) {}
    }function fe(e, t, n, r, i, o) {
      var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        for (a in "string" != typeof n && (r = r || n, n = void 0), t) {
          fe(e, a, n, r, t[a], o);
        }return e;
      }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ue;else if (!i) return e;return 1 === o && (s = i, (i = function i(e) {
        return g().off(e), s.apply(this, arguments);
      }).guid = s.guid || (s.guid = g.guid++)), e.each(function () {
        g.event.add(this, t, i, r, n);
      });
    }g.event = { global: {}, add: function add(e, t, n, r, i) {
        var o,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            m,
            v = M.get(e);if (v) for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = g.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
          return void 0 !== g && g.event.triggered !== t.type ? g.event.dispatch.apply(e, arguments) : void 0;
        }), u = (t = (t || "").match(O) || [""]).length; u--;) {
          d = m = (a = ae.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = g.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = g.event.special[d] || {}, c = g.extend({ type: d, origType: m, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && g.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = l[d]) || ((p = l[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), g.event.global[d] = !0);
        }
      }, remove: function remove(e, t, n, r, i) {
        var o,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            m,
            v = M.hasData(e) && M.get(e);if (v && (l = v.events)) {
          for (u = (t = (t || "").match(O) || [""]).length; u--;) {
            if (d = m = (a = ae.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
              for (f = g.event.special[d] || {}, p = l[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) {
                c = p[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
              }s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || g.removeEvent(e, d, v.handle), delete l[d]);
            } else for (d in l) {
              g.event.remove(e, d + t[u], n, r, !0);
            }
          }g.isEmptyObject(l) && M.remove(e, "handle events");
        }
      }, dispatch: function dispatch(e) {
        e = g.event.fix(e);var t,
            n,
            r,
            i,
            o,
            s,
            l = a.call(arguments),
            u = (M.get(this, "events") || {})[e.type] || [],
            c = g.event.special[e.type] || {};if (l[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
          for (s = g.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();) {
            for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) {
              e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((g.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
            }
          }return c.postDispatch && c.postDispatch.call(this, e), e.result;
        }
      }, handlers: function handlers(e, t) {
        var n,
            r,
            i,
            o,
            s = [],
            a = t.delegateCount,
            l = e.target;if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l !== this; l = l.parentNode || this) {
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
            for (r = [], n = 0; n < a; n++) {
              void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? g(i, this).index(l) > -1 : g.find(i, this, null, [l]).length), r[i] && r.push(o);
            }r.length && s.push({ elem: l, handlers: r });
          }
        }return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
      }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
        } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, t) {
          var n,
              r,
              i,
              o = t.button;return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || s).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
        } }, fix: function fix(e) {
        if (e[g.expando]) return e;var t,
            n,
            r,
            i = e.type,
            o = e,
            a = this.fixHooks[i];for (a || (this.fixHooks[i] = a = se.test(i) ? this.mouseHooks : oe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new g.Event(o), t = r.length; t--;) {
          e[n = r[t]] = o[n];
        }return e.target || (e.target = s), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e;
      }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
            if (this !== ce() && this.focus) return this.focus(), !1;
          }, delegateType: "focusin" }, blur: { trigger: function trigger() {
            if (this === ce() && this.blur) return this.blur(), !1;
          }, delegateType: "focusout" }, click: { trigger: function trigger() {
            if ("checkbox" === this.type && this.click && g.nodeName(this, "input")) return this.click(), !1;
          }, _default: function _default(e) {
            return g.nodeName(e.target, "a");
          } }, beforeunload: { postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          } } } }, g.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, g.Event = function (e, t) {
      if (!(this instanceof g.Event)) return new g.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? le : ue) : this.type = e, t && g.extend(this, t), this.timeStamp = e && e.timeStamp || g.now(), this[g.expando] = !0;
    }, g.Event.prototype = { constructor: g.Event, isDefaultPrevented: ue, isPropagationStopped: ue, isImmediatePropagationStopped: ue, isSimulated: !1, preventDefault: function preventDefault() {
        var e = this.originalEvent;this.isDefaultPrevented = le, e && !this.isSimulated && e.preventDefault();
      }, stopPropagation: function stopPropagation() {
        var e = this.originalEvent;this.isPropagationStopped = le, e && !this.isSimulated && e.stopPropagation();
      }, stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;this.isImmediatePropagationStopped = le, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      } }, g.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
      g.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
          var n,
              r = e.relatedTarget,
              i = e.handleObj;return r && (r === this || g.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
        } };
    }), g.fn.extend({ on: function on(e, t, n, r) {
        return fe(this, e, t, n, r);
      }, one: function one(e, t, n, r) {
        return fe(this, e, t, n, r, 1);
      }, off: function off(e, t, n) {
        var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, g(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
          for (i in e) {
            this.off(i, t, e[i]);
          }return this;
        }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ue), this.each(function () {
          g.event.remove(this, e, n, t);
        });
      } });var pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        de = /<script|<style|<link/i,
        he = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ge = /^true\/(.*)/,
        me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function ve(e, t) {
      return g.nodeName(e, "table") && g.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }function ye(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }function xe(e) {
      var t = ge.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }function we(e, t) {
      var n, r, i, o, s, a, l, u;if (1 === t.nodeType) {
        if (M.hasData(e) && (o = M.access(e), s = M.set(t, o), u = o.events)) for (i in delete s.handle, s.events = {}, u) {
          for (n = 0, r = u[i].length; n < r; n++) {
            g.event.add(t, i, u[i][n]);
          }
        }I.hasData(e) && (a = I.access(e), l = g.extend({}, a), I.set(t, l));
      }
    }function be(e, t, n, r) {
      t = l.apply([], t);var i,
          o,
          s,
          a,
          u,
          c,
          f = 0,
          p = e.length,
          d = p - 1,
          m = t[0],
          v = g.isFunction(m);if (v || p > 1 && "string" == typeof m && !h.checkClone && he.test(m)) return e.each(function (i) {
        var o = e.eq(i);v && (t[0] = m.call(this, i, o.html())), be(o, t, n, r);
      });if (p && (o = (i = ie(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
        for (a = (s = g.map(Z(i, "script"), ye)).length; f < p; f++) {
          u = i, f !== d && (u = g.clone(u, !0, !0), a && g.merge(s, Z(u, "script"))), n.call(e[f], u, f);
        }if (a) for (c = s[s.length - 1].ownerDocument, g.map(s, xe), f = 0; f < a; f++) {
          u = s[f], K.test(u.type || "") && !M.access(u, "globalEval") && g.contains(c, u) && (u.src ? g._evalUrl && g._evalUrl(u.src) : g.globalEval(u.textContent.replace(me, "")));
        }
      }return e;
    }function Te(e, t, n) {
      for (var r, i = t ? g.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
        n || 1 !== r.nodeType || g.cleanData(Z(r)), r.parentNode && (n && g.contains(r.ownerDocument, r) && ee(Z(r, "script")), r.parentNode.removeChild(r));
      }return e;
    }g.extend({ htmlPrefilter: function htmlPrefilter(e) {
        return e.replace(pe, "<$1></$2>");
      }, clone: function clone(e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            l,
            u,
            c = e.cloneNode(!0),
            f = g.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || g.isXMLDoc(e))) for (s = Z(c), r = 0, i = (o = Z(e)).length; r < i; r++) {
          a = o[r], l = s[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && Q.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
        }if (t) if (n) for (o = o || Z(e), s = s || Z(c), r = 0, i = o.length; r < i; r++) {
          we(o[r], s[r]);
        } else we(e, c);return (s = Z(c, "script")).length > 0 && ee(s, !f && Z(e, "script")), c;
      }, cleanData: function cleanData(e) {
        for (var t, n, r, i = g.event.special, o = 0; void 0 !== (n = e[o]); o++) {
          if (F(n)) {
            if (t = n[M.expando]) {
              if (t.events) for (r in t.events) {
                i[r] ? g.event.remove(n, r) : g.removeEvent(n, r, t.handle);
              }n[M.expando] = void 0;
            }n[I.expando] && (n[I.expando] = void 0);
          }
        }
      } }), g.fn.extend({ domManip: be, detach: function detach(e) {
        return Te(this, e, !0);
      }, remove: function remove(e) {
        return Te(this, e);
      }, text: function text(e) {
        return W(this, function (e) {
          return void 0 === e ? g.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      }, append: function append() {
        return be(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ve(this, e).appendChild(e);
        });
      }, prepend: function prepend() {
        return be(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = ve(this, e);t.insertBefore(e, t.firstChild);
          }
        });
      }, before: function before() {
        return be(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      }, after: function after() {
        return be(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      }, empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (g.cleanData(Z(e, !1)), e.textContent = "");
        }return this;
      }, clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return g.clone(this, e, t);
        });
      }, html: function html(e) {
        return W(this, function (e) {
          var t = this[0] || {},
              n = 0,
              r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !de.test(e) && !J[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = g.htmlPrefilter(e);try {
              for (; n < r; n++) {
                1 === (t = this[n] || {}).nodeType && (g.cleanData(Z(t, !1)), t.innerHTML = e);
              }t = 0;
            } catch (e) {}
          }t && this.empty().append(e);
        }, null, e, arguments.length);
      }, replaceWith: function replaceWith() {
        var e = [];return be(this, arguments, function (t) {
          var n = this.parentNode;g.inArray(this, e) < 0 && (g.cleanData(Z(this)), n && n.replaceChild(t, this));
        }, e);
      } }), g.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
      g.fn[e] = function (e) {
        for (var n, r = [], i = g(e), o = i.length - 1, s = 0; s <= o; s++) {
          n = s === o ? this : this.clone(!0), g(i[s])[t](n), u.apply(r, n.get());
        }return this.pushStack(r);
      };
    });var Ce,
        Se = { HTML: "block", BODY: "block" };function ke(e, t) {
      var n = g(t.createElement(e)).appendTo(t.body),
          r = g.css(n[0], "display");return n.detach(), r;
    }function Ee(e) {
      var t = s,
          n = Se[e];return n || ("none" !== (n = ke(e, t)) && n || ((t = (Ce = (Ce || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = ke(e, t), Ce.detach()), Se[e] = n), n;
    }var Ae = /^margin/,
        Ne = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"),
        De = function De(e) {
      var t = e.ownerDocument.defaultView;return t && t.opener || (t = n), t.getComputedStyle(e);
    },
        je = function je(e, t, n, r) {
      var i,
          o,
          s = {};for (o in t) {
        s[o] = e.style[o], e.style[o] = t[o];
      }for (o in i = n.apply(e, r || []), t) {
        e.style[o] = s[o];
      }return i;
    },
        Le = s.documentElement;function qe(e, t, n) {
      var r,
          i,
          o,
          s,
          a = e.style;return "" !== (s = (n = n || De(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || g.contains(e.ownerDocument, e) || (s = g.style(e, t)), n && !h.pixelMarginRight() && Ne.test(s) && Ae.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s;
    }function He(e, t) {
      return { get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
        } };
    }!function () {
      var e,
          t,
          r,
          i,
          o = s.createElement("div"),
          a = s.createElement("div");function l() {
        a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Le.appendChild(o);var s = n.getComputedStyle(a);e = "1%" !== s.top, i = "2px" === s.marginLeft, t = "4px" === s.width, a.style.marginRight = "50%", r = "4px" === s.marginRight, Le.removeChild(o);
      }a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), g.extend(h, { pixelPosition: function pixelPosition() {
          return l(), e;
        }, boxSizingReliable: function boxSizingReliable() {
          return null == t && l(), t;
        }, pixelMarginRight: function pixelMarginRight() {
          return null == t && l(), r;
        }, reliableMarginLeft: function reliableMarginLeft() {
          return null == t && l(), i;
        }, reliableMarginRight: function reliableMarginRight() {
          var e,
              t = a.appendChild(s.createElement("div"));return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", Le.appendChild(o), e = !parseFloat(n.getComputedStyle(t).marginRight), Le.removeChild(o), a.removeChild(t), e;
        } }));
    }();var Oe = /^(none|table(?!-c[ea]).+)/,
        Pe = { position: "absolute", visibility: "hidden", display: "block" },
        We = { letterSpacing: "0", fontWeight: "400" },
        Fe = ["Webkit", "O", "Moz", "ms"],
        Re = s.createElement("div").style;function Me(e) {
      if (e in Re) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = Fe.length; n--;) {
        if ((e = Fe[n] + t) in Re) return e;
      }
    }function Ie(e, t, n) {
      var r = X.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }function Be(e, t, n, r, i) {
      for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) {
        "margin" === n && (s += g.css(e, n + U[o], !0, i)), r ? ("content" === n && (s -= g.css(e, "padding" + U[o], !0, i)), "margin" !== n && (s -= g.css(e, "border" + U[o] + "Width", !0, i))) : (s += g.css(e, "padding" + U[o], !0, i), "padding" !== n && (s += g.css(e, "border" + U[o] + "Width", !0, i)));
      }return s;
    }function _e(e, t, n) {
      var r = !0,
          i = "width" === t ? e.offsetWidth : e.offsetHeight,
          o = De(e),
          s = "border-box" === g.css(e, "boxSizing", !1, o);if (i <= 0 || null == i) {
        if (((i = qe(e, t, o)) < 0 || null == i) && (i = e.style[t]), Ne.test(i)) return i;r = s && (h.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
      }return i + Be(e, t, n || (s ? "border" : "content"), r, o) + "px";
    }function $e(e, t) {
      for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++) {
        (r = e[s]).style && (o[s] = M.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Y(r) && (o[s] = M.access(r, "olddisplay", Ee(r.nodeName)))) : (i = Y(r), "none" === n && i || M.set(r, "olddisplay", i ? n : g.css(r, "display"))));
      }for (s = 0; s < a; s++) {
        (r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
      }return e;
    }function ze(e, t, n, r, i) {
      return new ze.prototype.init(e, t, n, r, i);
    }g.extend({ cssHooks: { opacity: { get: function get(e, t) {
            if (t) {
              var n = qe(e, "opacity");return "" === n ? "1" : n;
            }
          } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function style(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i,
              o,
              s,
              a = g.camelCase(t),
              l = e.style;if (t = g.cssProps[a] || (g.cssProps[a] = Me(a) || a), s = g.cssHooks[t] || g.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];"string" === (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = X.exec(n)) && i[1] && (n = V(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (g.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (l[t] = n));
        }
      }, css: function css(e, t, n, r) {
        var i,
            o,
            s,
            a = g.camelCase(t);return t = g.cssProps[a] || (g.cssProps[a] = Me(a) || a), (s = g.cssHooks[t] || g.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = qe(e, t, r)), "normal" === i && t in We && (i = We[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
      } }), g.each(["height", "width"], function (e, t) {
      g.cssHooks[t] = { get: function get(e, n, r) {
          if (n) return Oe.test(g.css(e, "display")) && 0 === e.offsetWidth ? je(e, Pe, function () {
            return _e(e, t, r);
          }) : _e(e, t, r);
        }, set: function set(e, n, r) {
          var i,
              o = r && De(e),
              s = r && Be(e, t, r, "border-box" === g.css(e, "boxSizing", !1, o), o);return s && (i = X.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = g.css(e, t)), Ie(0, n, s);
        } };
    }), g.cssHooks.marginLeft = He(h.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - je(e, { marginLeft: 0 }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), g.cssHooks.marginRight = He(h.reliableMarginRight, function (e, t) {
      if (t) return je(e, { display: "inline-block" }, qe, [e, "marginRight"]);
    }), g.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      g.cssHooks[e + t] = { expand: function expand(n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
            i[e + U[r] + t] = o[r] || o[r - 2] || o[0];
          }return i;
        } }, Ae.test(e) || (g.cssHooks[e + t].set = Ie);
    }), g.fn.extend({ css: function css(e, t) {
        return W(this, function (e, t, n) {
          var r,
              i,
              o = {},
              s = 0;if (g.isArray(t)) {
            for (r = De(e), i = t.length; s < i; s++) {
              o[t[s]] = g.css(e, t[s], !1, r);
            }return o;
          }return void 0 !== n ? g.style(e, t, n) : g.css(e, t);
        }, e, t, arguments.length > 1);
      }, show: function show() {
        return $e(this, !0);
      }, hide: function hide() {
        return $e(this);
      }, toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          Y(this) ? g(this).show() : g(this).hide();
        });
      } }), g.Tween = ze, ze.prototype = { constructor: ze, init: function init(e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || g.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (g.cssNumber[n] ? "" : "px");
      }, cur: function cur() {
        var e = ze.propHooks[this.prop];return e && e.get ? e.get(this) : ze.propHooks._default.get(this);
      }, run: function run(e) {
        var t,
            n = ze.propHooks[this.prop];return this.options.duration ? this.pos = t = g.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ze.propHooks._default.set(this), this;
      } }, ze.prototype.init.prototype = ze.prototype, ze.propHooks = { _default: { get: function get(e) {
          var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = g.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        }, set: function set(e) {
          g.fx.step[e.prop] ? g.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[g.cssProps[e.prop]] && !g.cssHooks[e.prop] ? e.elem[e.prop] = e.now : g.style(e.elem, e.prop, e.now + e.unit);
        } } }, ze.propHooks.scrollTop = ze.propHooks.scrollLeft = { set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      } }, g.easing = { linear: function linear(e) {
        return e;
      }, swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      }, _default: "swing" }, g.fx = ze.prototype.init, g.fx.step = {};var Xe,
        Ue,
        Ye = /^(?:toggle|show|hide)$/,
        Ve = /queueHooks$/;function Qe() {
      return n.setTimeout(function () {
        Xe = void 0;
      }), Xe = g.now();
    }function Ge(e, t) {
      var n,
          r = 0,
          i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
        i["margin" + (n = U[r])] = i["padding" + n] = e;
      }return t && (i.opacity = i.width = e), i;
    }function Ke(e, t, n) {
      for (var r, i = (Je.tweeners[t] || []).concat(Je.tweeners["*"]), o = 0, s = i.length; o < s; o++) {
        if (r = i[o].call(n, t, e)) return r;
      }
    }function Je(e, t, n) {
      var r,
          i,
          o = 0,
          s = Je.prefilters.length,
          a = g.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (i) return !1;for (var t = Xe || Qe(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) {
          u.tweens[o].run(r);
        }return a.notifyWith(e, [u, r, n]), r < 1 && s ? n : (a.resolveWith(e, [u]), !1);
      },
          u = a.promise({ elem: e, props: g.extend({}, t), opts: g.extend(!0, { specialEasing: {}, easing: g.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Xe || Qe(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
          var r = g.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(r), r;
        }, stop: function stop(t) {
          var n = 0,
              r = t ? u.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
            u.tweens[n].run(1);
          }return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this;
        } }),
          c = u.props;for (!function (e, t) {
        var n, r, i, o, s;for (n in e) {
          if (i = t[r = g.camelCase(n)], o = e[n], g.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = g.cssHooks[r]) && ("expand" in s)) for (n in o = s.expand(o), delete e[r], o) {
            (n in e) || (e[n] = o[n], t[n] = i);
          } else t[r] = i;
        }
      }(c, u.opts.specialEasing); o < s; o++) {
        if (r = Je.prefilters[o].call(u, e, c, u.opts)) return g.isFunction(r.stop) && (g._queueHooks(u.elem, u.opts.queue).stop = g.proxy(r.stop, r)), r;
      }return g.map(c, Ke, u), g.isFunction(u.opts.start) && u.opts.start.call(e, u), g.fx.timer(g.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }g.Animation = g.extend(Je, { tweeners: { "*": [function (e, t) {
          var n = this.createTween(e, t);return V(n.elem, e, X.exec(t), n), n;
        }] }, tweener: function tweener(e, t) {
        g.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(O);for (var n, r = 0, i = e.length; r < i; r++) {
          n = e[r], Je.tweeners[n] = Je.tweeners[n] || [], Je.tweeners[n].unshift(t);
        }
      }, prefilters: [function (e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            l,
            u,
            c = this,
            f = {},
            p = e.style,
            d = e.nodeType && Y(e),
            h = M.get(e, "fxshow");for (r in n.queue || (null == (a = g._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
          a.unqueued || l();
        }), a.unqueued++, c.always(function () {
          c.always(function () {
            a.unqueued--, g.queue(e, "fx").length || a.empty.fire();
          });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (u = g.css(e, "display")) ? M.get(e, "olddisplay") || Ee(e.nodeName) : u) && "none" === g.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function () {
          p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        })), t) {
          if (i = t[r], Ye.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
              if ("show" !== i || !h || void 0 === h[r]) continue;d = !0;
            }f[r] = h && h[r] || g.style(e, r);
          } else u = void 0;
        }if (g.isEmptyObject(f)) "inline" === ("none" === u ? Ee(e.nodeName) : u) && (p.display = u);else for (r in h ? "hidden" in h && (d = h.hidden) : h = M.access(e, "fxshow", {}), o && (h.hidden = !d), d ? g(e).show() : c.done(function () {
          g(e).hide();
        }), c.done(function () {
          var t;for (t in M.remove(e, "fxshow"), f) {
            g.style(e, t, f[t]);
          }
        }), f) {
          s = Ke(d ? h[r] : 0, r, c), r in h || (h[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0));
        }
      }], prefilter: function prefilter(e, t) {
        t ? Je.prefilters.unshift(e) : Je.prefilters.push(e);
      } }), g.speed = function (e, t, n) {
      var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? g.extend({}, e) : { complete: n || !n && t || g.isFunction(e) && e, duration: e, easing: n && t || t && !g.isFunction(t) && t };return r.duration = g.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in g.fx.speeds ? g.fx.speeds[r.duration] : g.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        g.isFunction(r.old) && r.old.call(this), r.queue && g.dequeue(this, r.queue);
      }, r;
    }, g.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
        return this.filter(Y).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
      }, animate: function animate(e, t, n, r) {
        var i = g.isEmptyObject(e),
            o = g.speed(t, n, r),
            s = function s() {
          var t = Je(this, g.extend({}, e), o);(i || M.get(this, "finish")) && t.stop(!0);
        };return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
      }, stop: function stop(e, t, n) {
        var r = function r(e) {
          var t = e.stop;delete e.stop, t(n);
        };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              i = null != e && e + "queueHooks",
              o = g.timers,
              s = M.get(this);if (i) s[i] && s[i].stop && r(s[i]);else for (i in s) {
            s[i] && s[i].stop && Ve.test(i) && r(s[i]);
          }for (i = o.length; i--;) {
            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          }!t && n || g.dequeue(this, e);
        });
      }, finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              n = M.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = g.timers,
              s = r ? r.length : 0;for (n.finish = !0, g.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          }for (t = 0; t < s; t++) {
            r[t] && r[t].finish && r[t].finish.call(this);
          }delete n.finish;
        });
      } }), g.each(["toggle", "show", "hide"], function (e, t) {
      var n = g.fn[t];g.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Ge(t, !0), e, r, i);
      };
    }), g.each({ slideDown: Ge("show"), slideUp: Ge("hide"), slideToggle: Ge("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
      g.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    }), g.timers = [], g.fx.tick = function () {
      var e,
          t = 0,
          n = g.timers;for (Xe = g.now(); t < n.length; t++) {
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      }n.length || g.fx.stop(), Xe = void 0;
    }, g.fx.timer = function (e) {
      g.timers.push(e), e() ? g.fx.start() : g.timers.pop();
    }, g.fx.interval = 13, g.fx.start = function () {
      Ue || (Ue = n.setInterval(g.fx.tick, g.fx.interval));
    }, g.fx.stop = function () {
      n.clearInterval(Ue), Ue = null;
    }, g.fx.speeds = { slow: 600, fast: 200, _default: 400 }, g.fn.delay = function (e, t) {
      return e = g.fx && g.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
        var i = n.setTimeout(t, e);r.stop = function () {
          n.clearTimeout(i);
        };
      });
    }, function () {
      var e = s.createElement("input"),
          t = s.createElement("select"),
          n = t.appendChild(s.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = n.selected, t.disabled = !0, h.optDisabled = !n.disabled, (e = s.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
    }();var Ze,
        et = g.expr.attrHandle;g.fn.extend({ attr: function attr(e, t) {
        return W(this, g.attr, e, t, arguments.length > 1);
      }, removeAttr: function removeAttr(e) {
        return this.each(function () {
          g.removeAttr(this, e);
        });
      } }), g.extend({ attr: function attr(e, t, n) {
        var r,
            i,
            o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? g.prop(e, t, n) : (1 === o && g.isXMLDoc(e) || (t = t.toLowerCase(), i = g.attrHooks[t] || (g.expr.match.bool.test(t) ? Ze : void 0)), void 0 !== n ? null === n ? void g.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = g.find.attr(e, t)) ? void 0 : r);
      }, attrHooks: { type: { set: function set(e, t) {
            if (!h.radioValue && "radio" === t && g.nodeName(e, "input")) {
              var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
            }
          } } }, removeAttr: function removeAttr(e, t) {
        var n,
            r,
            i = 0,
            o = t && t.match(O);if (o && 1 === e.nodeType) for (; n = o[i++];) {
          r = g.propFix[n] || n, g.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
        }
      } }), Ze = { set: function set(e, t, n) {
        return !1 === t ? g.removeAttr(e, n) : e.setAttribute(n, n), n;
      } }, g.each(g.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = et[t] || g.find.attr;et[t] = function (e, t, r) {
        var i, o;return r || (o = et[t], et[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, et[t] = o), i;
      };
    });var tt = /^(?:input|select|textarea|button)$/i,
        nt = /^(?:a|area)$/i;g.fn.extend({ prop: function prop(e, t) {
        return W(this, g.prop, e, t, arguments.length > 1);
      }, removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[g.propFix[e] || e];
        });
      } }), g.extend({ prop: function prop(e, t, n) {
        var r,
            i,
            o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && g.isXMLDoc(e) || (t = g.propFix[t] || t, i = g.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
      }, propHooks: { tabIndex: { get: function get(e) {
            var t = g.find.attr(e, "tabindex");return t ? parseInt(t, 10) : tt.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1;
          } } }, propFix: { for: "htmlFor", class: "className" } }), h.optSelected || (g.propHooks.selected = { get: function get(e) {
        var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
      }, set: function set(e) {
        var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      } }), g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      g.propFix[this.toLowerCase()] = this;
    });var rt = /[\t\r\n\f]/g;function it(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }g.fn.extend({ addClass: function addClass(e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l = 0;if (g.isFunction(e)) return this.each(function (t) {
          g(this).addClass(e.call(this, t, it(this)));
        });if ("string" == typeof e && e) for (t = e.match(O) || []; n = this[l++];) {
          if (i = it(n), r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
            for (s = 0; o = t[s++];) {
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            }i !== (a = g.trim(r)) && n.setAttribute("class", a);
          }
        }return this;
      }, removeClass: function removeClass(e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l = 0;if (g.isFunction(e)) return this.each(function (t) {
          g(this).removeClass(e.call(this, t, it(this)));
        });if (!arguments.length) return this.attr("class", "");if ("string" == typeof e && e) for (t = e.match(O) || []; n = this[l++];) {
          if (i = it(n), r = 1 === n.nodeType && (" " + i + " ").replace(rt, " ")) {
            for (s = 0; o = t[s++];) {
              for (; r.indexOf(" " + o + " ") > -1;) {
                r = r.replace(" " + o + " ", " ");
              }
            }i !== (a = g.trim(r)) && n.setAttribute("class", a);
          }
        }return this;
      }, toggleClass: function toggleClass(e, t) {
        var n = typeof e === "undefined" ? "undefined" : _typeof(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : g.isFunction(e) ? this.each(function (n) {
          g(this).toggleClass(e.call(this, n, it(this), t), t);
        }) : this.each(function () {
          var t, r, i, o;if ("string" === n) for (r = 0, i = g(this), o = e.match(O) || []; t = o[r++];) {
            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
          } else void 0 !== e && "boolean" !== n || ((t = it(this)) && M.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : M.get(this, "__className__") || ""));
        });
      }, hasClass: function hasClass(e) {
        var t,
            n,
            r = 0;for (t = " " + e + " "; n = this[r++];) {
          if (1 === n.nodeType && (" " + it(n) + " ").replace(rt, " ").indexOf(t) > -1) return !0;
        }return !1;
      } });var ot = /\r/g,
        st = /[\x20\t\r\n\f]+/g;g.fn.extend({ val: function val(e) {
        var t,
            n,
            r,
            i = this[0];return arguments.length ? (r = g.isFunction(e), this.each(function (n) {
          var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, g(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : g.isArray(i) && (i = g.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        })) : i ? (t = g.valHooks[i.type] || g.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(ot, "") : null == n ? "" : n : void 0;
      } }), g.extend({ valHooks: { option: { get: function get(e) {
            var t = g.find.attr(e, "value");return null != t ? t : g.trim(g.text(e)).replace(st, " ");
          } }, select: { get: function get(e) {
            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, l = i < 0 ? a : o ? i : 0; l < a; l++) {
              if (((n = r[l]).selected || l === i) && (h.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !g.nodeName(n.parentNode, "optgroup"))) {
                if (t = g(n).val(), o) return t;s.push(t);
              }
            }return s;
          }, set: function set(e, t) {
            for (var n, r, i = e.options, o = g.makeArray(t), s = i.length; s--;) {
              ((r = i[s]).selected = g.inArray(g.valHooks.option.get(r), o) > -1) && (n = !0);
            }return n || (e.selectedIndex = -1), o;
          } } } }), g.each(["radio", "checkbox"], function () {
      g.valHooks[this] = { set: function set(e, t) {
          if (g.isArray(t)) return e.checked = g.inArray(g(e).val(), t) > -1;
        } }, h.checkOn || (g.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    });var at = /^(?:focusinfocus|focusoutblur)$/;g.extend(g.event, { trigger: function trigger(e, t, r, i) {
        var o,
            a,
            l,
            u,
            c,
            f,
            p,
            h = [r || s],
            m = d.call(e, "type") ? e.type : e,
            v = d.call(e, "namespace") ? e.namespace.split(".") : [];if (a = l = r = r || s, 3 !== r.nodeType && 8 !== r.nodeType && !at.test(m + g.event.triggered) && (m.indexOf(".") > -1 && (m = (v = m.split(".")).shift(), v.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[g.expando] ? e : new g.Event(m, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : g.makeArray(t, [e]), p = g.event.special[m] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, t))) {
          if (!i && !p.noBubble && !g.isWindow(r)) {
            for (u = p.delegateType || m, at.test(u + m) || (a = a.parentNode); a; a = a.parentNode) {
              h.push(a), l = a;
            }l === (r.ownerDocument || s) && h.push(l.defaultView || l.parentWindow || n);
          }for (o = 0; (a = h[o++]) && !e.isPropagationStopped();) {
            e.type = o > 1 ? u : p.bindType || m, (f = (M.get(a, "events") || {})[e.type] && M.get(a, "handle")) && f.apply(a, t), (f = c && a[c]) && f.apply && F(a) && (e.result = f.apply(a, t), !1 === e.result && e.preventDefault());
          }return e.type = m, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), t) || !F(r) || c && g.isFunction(r[m]) && !g.isWindow(r) && ((l = r[c]) && (r[c] = null), g.event.triggered = m, r[m](), g.event.triggered = void 0, l && (r[c] = l)), e.result;
        }
      }, simulate: function simulate(e, t, n) {
        var r = g.extend(new g.Event(), n, { type: e, isSimulated: !0 });g.event.trigger(r, null, t);
      } }), g.fn.extend({ trigger: function trigger(e, t) {
        return this.each(function () {
          g.event.trigger(e, t, this);
        });
      }, triggerHandler: function triggerHandler(e, t) {
        var n = this[0];if (n) return g.event.trigger(e, t, n, !0);
      } }), g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
      g.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }), g.fn.extend({ hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      } }), h.focusin = "onfocusin" in n, h.focusin || g.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      var n = function n(e) {
        g.event.simulate(t, e.target, g.event.fix(e));
      };g.event.special[t] = { setup: function setup() {
          var r = this.ownerDocument || this,
              i = M.access(r, t);i || r.addEventListener(e, n, !0), M.access(r, t, (i || 0) + 1);
        }, teardown: function teardown() {
          var r = this.ownerDocument || this,
              i = M.access(r, t) - 1;i ? M.access(r, t, i) : (r.removeEventListener(e, n, !0), M.remove(r, t));
        } };
    });var lt = n.location,
        ut = g.now(),
        ct = /\?/;g.parseJSON = function (e) {
      return JSON.parse(e + "");
    }, g.parseXML = function (e) {
      var t;if (!e || "string" != typeof e) return null;try {
        t = new n.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }return t && !t.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + e), t;
    };var ft = /#.*$/,
        pt = /([?&])_=[^&]*/,
        dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:GET|HEAD)$/,
        gt = /^\/\//,
        mt = {},
        vt = {},
        yt = "*/".concat("*"),
        xt = s.createElement("a");function wt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");var r,
            i = 0,
            o = t.toLowerCase().match(O) || [];if (g.isFunction(n)) for (; r = o[i++];) {
          "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        }
      };
    }function bt(e, t, n, r) {
      var i = {},
          o = e === vt;function s(a) {
        var l;return i[a] = !0, g.each(e[a] || [], function (e, a) {
          var u = a(t, n, r);return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1);
        }), l;
      }return s(t.dataTypes[0]) || !i["*"] && s("*");
    }function Tt(e, t) {
      var n,
          r,
          i = g.ajaxSettings.flatOptions || {};for (n in t) {
        void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      }return r && g.extend(!0, e, r), e;
    }xt.href = lt.href, g.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: lt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(lt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": yt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": g.parseJSON, "text xml": g.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
        return t ? Tt(Tt(e, g.ajaxSettings), t) : Tt(g.ajaxSettings, e);
      }, ajaxPrefilter: wt(mt), ajaxTransport: wt(vt), ajax: function ajax(e, t) {
        "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (t = e, e = void 0), t = t || {};var r,
            i,
            o,
            a,
            l,
            u,
            c,
            f,
            p = g.ajaxSetup({}, t),
            d = p.context || p,
            h = p.context && (d.nodeType || d.jquery) ? g(d) : g.event,
            m = g.Deferred(),
            v = g.Callbacks("once memory"),
            y = p.statusCode || {},
            x = {},
            w = {},
            b = 0,
            T = "canceled",
            C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
            var t;if (2 === b) {
              if (!a) for (a = {}; t = dt.exec(o);) {
                a[t[1].toLowerCase()] = t[2];
              }t = a[e.toLowerCase()];
            }return null == t ? null : t;
          }, getAllResponseHeaders: function getAllResponseHeaders() {
            return 2 === b ? o : null;
          }, setRequestHeader: function setRequestHeader(e, t) {
            var n = e.toLowerCase();return b || (e = w[n] = w[n] || e, x[e] = t), this;
          }, overrideMimeType: function overrideMimeType(e) {
            return b || (p.mimeType = e), this;
          }, statusCode: function statusCode(e) {
            var t;if (e) if (b < 2) for (t in e) {
              y[t] = [y[t], e[t]];
            } else C.always(e[C.status]);return this;
          }, abort: function abort(e) {
            var t = e || T;return r && r.abort(t), S(0, t), this;
          } };if (m.promise(C).complete = v.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || lt.href) + "").replace(ft, "").replace(gt, lt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = g.trim(p.dataType || "*").toLowerCase().match(O) || [""], null == p.crossDomain) {
          u = s.createElement("a");try {
            u.href = p.url, u.href = u.href, p.crossDomain = xt.protocol + "//" + xt.host != u.protocol + "//" + u.host;
          } catch (e) {
            p.crossDomain = !0;
          }
        }if (p.data && p.processData && "string" != typeof p.data && (p.data = g.param(p.data, p.traditional)), bt(mt, p, t, C), 2 === b) return C;for (f in (c = g.event && p.global) && 0 == g.active++ && g.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !ht.test(p.type), i = p.url, p.hasContent || (p.data && (i = p.url += (ct.test(i) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = pt.test(i) ? i.replace(pt, "$1_=" + ut++) : i + (ct.test(i) ? "&" : "?") + "_=" + ut++)), p.ifModified && (g.lastModified[i] && C.setRequestHeader("If-Modified-Since", g.lastModified[i]), g.etag[i] && C.setRequestHeader("If-None-Match", g.etag[i])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
          C.setRequestHeader(f, p.headers[f]);
        }if (p.beforeSend && (!1 === p.beforeSend.call(d, C, p) || 2 === b)) return C.abort();for (f in T = "abort", { success: 1, error: 1, complete: 1 }) {
          C[f](p[f]);
        }if (r = bt(vt, p, t, C)) {
          if (C.readyState = 1, c && h.trigger("ajaxSend", [C, p]), 2 === b) return C;p.async && p.timeout > 0 && (l = n.setTimeout(function () {
            C.abort("timeout");
          }, p.timeout));try {
            b = 1, r.send(x, S);
          } catch (e) {
            if (!(b < 2)) throw e;S(-1, e);
          }
        } else S(-1, "No Transport");function S(e, t, s, a) {
          var u,
              f,
              x,
              w,
              T,
              S = t;2 !== b && (b = 2, l && n.clearTimeout(l), r = void 0, o = a || "", C.readyState = e > 0 ? 4 : 0, u = e >= 200 && e < 300 || 304 === e, s && (w = function (e, t, n) {
            for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            }if (r) for (i in a) {
              if (a[i] && a[i].test(r)) {
                l.unshift(i);break;
              }
            }if (l[0] in n) o = l[0];else {
              for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                  o = i;break;
                }s || (s = i);
              }o = o || s;
            }if (o) return o !== l[0] && l.unshift(o), n[o];
          }(p, C, s)), w = function (e, t, n, r) {
            var i,
                o,
                s,
                a,
                l,
                u = {},
                c = e.dataTypes.slice();if (c[1]) for (s in e.converters) {
              u[s.toLowerCase()] = e.converters[s];
            }for (o = c.shift(); o;) {
              if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
                if (!(s = u[l + " " + o] || u["* " + o])) for (i in u) {
                  if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                    !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], c.unshift(a[1]));break;
                  }
                }if (!0 !== s) if (s && e.throws) t = s(t);else try {
                  t = s(t);
                } catch (e) {
                  return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + o };
                }
              }
            }return { state: "success", data: t };
          }(p, w, C, u), u ? (p.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (g.lastModified[i] = T), (T = C.getResponseHeader("etag")) && (g.etag[i] = T)), 204 === e || "HEAD" === p.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = w.state, f = w.data, u = !(x = w.error))) : (x = S, !e && S || (S = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || S) + "", u ? m.resolveWith(d, [f, S, C]) : m.rejectWith(d, [C, S, x]), C.statusCode(y), y = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? f : x]), v.fireWith(d, [C, S]), c && (h.trigger("ajaxComplete", [C, p]), --g.active || g.event.trigger("ajaxStop")));
        }return C;
      }, getJSON: function getJSON(e, t, n) {
        return g.get(e, t, n, "json");
      }, getScript: function getScript(e, t) {
        return g.get(e, void 0, t, "script");
      } }), g.each(["get", "post"], function (e, t) {
      g[t] = function (e, n, r, i) {
        return g.isFunction(n) && (i = i || r, r = n, n = void 0), g.ajax(g.extend({ url: e, type: t, dataType: i, data: n, success: r }, g.isPlainObject(e) && e));
      };
    }), g._evalUrl = function (e) {
      return g.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
    }, g.fn.extend({ wrapAll: function wrapAll(e) {
        var t;return g.isFunction(e) ? this.each(function (t) {
          g(this).wrapAll(e.call(this, t));
        }) : (this[0] && (t = g(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }return e;
        }).append(this)), this);
      }, wrapInner: function wrapInner(e) {
        return g.isFunction(e) ? this.each(function (t) {
          g(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = g(this),
              n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
        });
      }, wrap: function wrap(e) {
        var t = g.isFunction(e);return this.each(function (n) {
          g(this).wrapAll(t ? e.call(this, n) : e);
        });
      }, unwrap: function unwrap() {
        return this.parent().each(function () {
          g.nodeName(this, "body") || g(this).replaceWith(this.childNodes);
        }).end();
      } }), g.expr.filters.hidden = function (e) {
      return !g.expr.filters.visible(e);
    }, g.expr.filters.visible = function (e) {
      return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
    };var Ct = /%20/g,
        St = /\[\]$/,
        kt = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;function Nt(e, t, n, r) {
      var i;if (g.isArray(t)) g.each(t, function (t, i) {
        n || St.test(e) ? r(e, i) : Nt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
      });else if (n || "object" !== g.type(t)) r(e, t);else for (i in t) {
        Nt(e + "[" + i + "]", t[i], n, r);
      }
    }g.param = function (e, t) {
      var n,
          r = [],
          i = function i(e, t) {
        t = g.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
      };if (void 0 === t && (t = g.ajaxSettings && g.ajaxSettings.traditional), g.isArray(e) || e.jquery && !g.isPlainObject(e)) g.each(e, function () {
        i(this.name, this.value);
      });else for (n in e) {
        Nt(n, e[n], t, i);
      }return r.join("&").replace(Ct, "+");
    }, g.fn.extend({ serialize: function serialize() {
        return g.param(this.serializeArray());
      }, serializeArray: function serializeArray() {
        return this.map(function () {
          var e = g.prop(this, "elements");return e ? g.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;return this.name && !g(this).is(":disabled") && At.test(this.nodeName) && !Et.test(e) && (this.checked || !Q.test(e));
        }).map(function (e, t) {
          var n = g(this).val();return null == n ? null : g.isArray(n) ? g.map(n, function (e) {
            return { name: t.name, value: e.replace(kt, "\r\n") };
          }) : { name: t.name, value: n.replace(kt, "\r\n") };
        }).get();
      } }), g.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (e) {}
    };var Dt = { 0: 200, 1223: 204 },
        jt = g.ajaxSettings.xhr();h.cors = !!jt && "withCredentials" in jt, h.ajax = jt = !!jt, g.ajaxTransport(function (e) {
      var _t2, r;if (h.cors || jt && !e.crossDomain) return { send: function send(i, o) {
          var s,
              a = e.xhr();if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) {
            a[s] = e.xhrFields[s];
          }for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) {
            a.setRequestHeader(s, i[s]);
          }_t2 = function t(e) {
            return function () {
              _t2 && (_t2 = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Dt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
            };
          }, a.onload = _t2(), r = a.onerror = _t2("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
            4 === a.readyState && n.setTimeout(function () {
              _t2 && r();
            });
          }, _t2 = _t2("abort");try {
            a.send(e.hasContent && e.data || null);
          } catch (e) {
            if (_t2) throw e;
          }
        }, abort: function abort() {
          _t2 && _t2();
        } };
    }), g.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
          return g.globalEval(e), e;
        } } }), g.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), g.ajaxTransport("script", function (e) {
      var t, _n;if (e.crossDomain) return { send: function send(r, i) {
          t = g("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n = function n(e) {
            t.remove(), _n = null, e && i("error" === e.type ? 404 : 200, e.type);
          }), s.head.appendChild(t[0]);
        }, abort: function abort() {
          _n && _n();
        } };
    });var Lt = [],
        qt = /(=)\?(?=&|$)|\?\?/;g.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
        var e = Lt.pop() || g.expando + "_" + ut++;return this[e] = !0, e;
      } }), g.ajaxPrefilter("json jsonp", function (e, t, r) {
      var i,
          o,
          s,
          a = !1 !== e.jsonp && (qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && qt.test(e.data) && "data");if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = g.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(qt, "$1" + i) : !1 !== e.jsonp && (e.url += (ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
        return s || g.error(i + " was not called"), s[0];
      }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
        s = arguments;
      }, r.always(function () {
        void 0 === o ? g(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Lt.push(i)), s && g.isFunction(o) && o(s[0]), s = o = void 0;
      }), "script";
    }), g.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || s;var r = k.exec(e),
          i = !n && [];return r ? [t.createElement(r[1])] : (r = ie([e], t, i), i && i.length && g(i).remove(), g.merge([], r.childNodes));
    };var Ht = g.fn.load;function Ot(e) {
      return g.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }g.fn.load = function (e, t, n) {
      if ("string" != typeof e && Ht) return Ht.apply(this, arguments);var r,
          i,
          o,
          s = this,
          a = e.indexOf(" ");return a > -1 && (r = g.trim(e.slice(a)), e = e.slice(0, a)), g.isFunction(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), s.length > 0 && g.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
        o = arguments, s.html(r ? g("<div>").append(g.parseHTML(e)).find(r) : e);
      }).always(n && function (e, t) {
        s.each(function () {
          n.apply(this, o || [e.responseText, t, e]);
        });
      }), this;
    }, g.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      g.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), g.expr.filters.animated = function (e) {
      return g.grep(g.timers, function (t) {
        return e === t.elem;
      }).length;
    }, g.offset = { setOffset: function setOffset(e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            l,
            u = g.css(e, "position"),
            c = g(e),
            f = {};"static" === u && (e.style.position = "relative"), a = c.offset(), o = g.css(e, "top"), l = g.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(l) || 0), g.isFunction(t) && (t = t.call(e, n, g.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
      } }, g.fn.extend({ offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          g.offset.setOffset(this, e, t);
        });var t,
            n,
            r = this[0],
            i = { top: 0, left: 0 },
            o = r && r.ownerDocument;return o ? (t = o.documentElement, g.contains(t, r) ? (i = r.getBoundingClientRect(), n = Ot(o), { top: i.top + n.pageYOffset - t.clientTop, left: i.left + n.pageXOffset - t.clientLeft }) : i) : void 0;
      }, position: function position() {
        if (this[0]) {
          var e,
              t,
              n = this[0],
              r = { top: 0, left: 0 };return "fixed" === g.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), g.nodeName(e[0], "html") || (r = e.offset()), r.top += g.css(e[0], "borderTopWidth", !0), r.left += g.css(e[0], "borderLeftWidth", !0)), { top: t.top - r.top - g.css(n, "marginTop", !0), left: t.left - r.left - g.css(n, "marginLeft", !0) };
        }
      }, offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === g.css(e, "position");) {
            e = e.offsetParent;
          }return e || Le;
        });
      } }), g.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
      var n = "pageYOffset" === t;g.fn[e] = function (r) {
        return W(this, function (e, r, i) {
          var o = Ot(e);if (void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
        }, e, r, arguments.length);
      };
    }), g.each(["top", "left"], function (e, t) {
      g.cssHooks[t] = He(h.pixelPosition, function (e, n) {
        if (n) return n = qe(e, t), Ne.test(n) ? g(e).position()[t] + "px" : n;
      });
    }), g.each({ Height: "height", Width: "width" }, function (e, t) {
      g.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
        g.fn[r] = function (r, i) {
          var o = arguments.length && (n || "boolean" != typeof r),
              s = n || (!0 === r || !0 === i ? "margin" : "border");return W(this, function (t, n, r) {
            var i;return g.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? g.css(t, n, s) : g.style(t, n, r, s);
          }, t, o ? r : void 0, o, null);
        };
      });
    }), g.fn.extend({ bind: function bind(e, t, n) {
        return this.on(e, null, t, n);
      }, unbind: function unbind(e, t) {
        return this.off(e, null, t);
      }, delegate: function delegate(e, t, n, r) {
        return this.on(t, e, n, r);
      }, undelegate: function undelegate(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      }, size: function size() {
        return this.length;
      } }), g.fn.andSelf = g.fn.addBack, void 0 === (r = function () {
      return g;
    }.apply(t, [])) || (e.exports = r);var Pt = n.jQuery,
        Wt = n.$;return g.noConflict = function (e) {
      return n.$ === g && (n.$ = Wt), e && n.jQuery === g && (n.jQuery = Pt), g;
    }, i || (n.jQuery = n.$ = g), g;
  }, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.exports) ? e.exports = i.document ? o(i, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return o(e);
  } : o(i);
}, function (e, t) {
  /*!
  Waypoints - 4.0.1
  Copyright © 2011-2016 Caleb Troughton
  Licensed under the MIT license.
  https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
  */
  !function () {
    "use strict";
    var e = 0,
        t = {};function n(r) {
      if (!r) throw new Error("No options passed to Waypoint constructor");if (!r.element) throw new Error("No element option passed to Waypoint constructor");if (!r.handler) throw new Error("No handler option passed to Waypoint constructor");this.key = "waypoint-" + e, this.options = n.Adapter.extend({}, n.defaults, r), this.element = this.options.element, this.adapter = new n.Adapter(this.element), this.callback = r.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = n.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = n.Context.findOrCreateByElement(this.options.context), n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), t[this.key] = this, e += 1;
    }n.prototype.queueTrigger = function (e) {
      this.group.queueTrigger(this, e);
    }, n.prototype.trigger = function (e) {
      this.enabled && this.callback && this.callback.apply(this, e);
    }, n.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete t[this.key];
    }, n.prototype.disable = function () {
      return this.enabled = !1, this;
    }, n.prototype.enable = function () {
      return this.context.refresh(), this.enabled = !0, this;
    }, n.prototype.next = function () {
      return this.group.next(this);
    }, n.prototype.previous = function () {
      return this.group.previous(this);
    }, n.invokeAll = function (e) {
      var n = [];for (var r in t) {
        n.push(t[r]);
      }for (var i = 0, o = n.length; i < o; i++) {
        n[i][e]();
      }
    }, n.destroyAll = function () {
      n.invokeAll("destroy");
    }, n.disableAll = function () {
      n.invokeAll("disable");
    }, n.enableAll = function () {
      for (var e in n.Context.refreshAll(), t) {
        t[e].enabled = !0;
      }return this;
    }, n.refreshAll = function () {
      n.Context.refreshAll();
    }, n.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }, n.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }, n.adapters = [], n.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, n.offsetAliases = { "bottom-in-view": function bottomInView() {
        return this.context.innerHeight() - this.adapter.outerHeight();
      }, "right-in-view": function rightInView() {
        return this.context.innerWidth() - this.adapter.outerWidth();
      } }, window.Waypoint = n;
  }(), function () {
    "use strict";
    function e(e) {
      window.setTimeout(e, 1e3 / 60);
    }var t = 0,
        n = {},
        r = window.Waypoint,
        i = window.onload;function o(e) {
      this.element = e, this.Adapter = r.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + t, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, e.waypointContextKey = this.key, n[e.waypointContextKey] = this, t += 1, r.windowContext || (r.windowContext = !0, r.windowContext = new o(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
    }o.prototype.add = function (e) {
      var t = e.options.horizontal ? "horizontal" : "vertical";this.waypoints[t][e.key] = e, this.refresh();
    }, o.prototype.checkEmpty = function () {
      var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          t = this.Adapter.isEmptyObject(this.waypoints.vertical),
          r = this.element == this.element.window;e && t && !r && (this.adapter.off(".waypoints"), delete n[this.key]);
    }, o.prototype.createThrottledResizeHandler = function () {
      var e = this;function t() {
        e.handleResize(), e.didResize = !1;
      }this.adapter.on("resize.waypoints", function () {
        e.didResize || (e.didResize = !0, r.requestAnimationFrame(t));
      });
    }, o.prototype.createThrottledScrollHandler = function () {
      var e = this;function t() {
        e.handleScroll(), e.didScroll = !1;
      }this.adapter.on("scroll.waypoints", function () {
        e.didScroll && !r.isTouch || (e.didScroll = !0, r.requestAnimationFrame(t));
      });
    }, o.prototype.handleResize = function () {
      r.Context.refreshAll();
    }, o.prototype.handleScroll = function () {
      var e = {},
          t = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };for (var n in t) {
        var r = t[n],
            i = r.newScroll > r.oldScroll ? r.forward : r.backward;for (var o in this.waypoints[n]) {
          var s = this.waypoints[n][o];if (null !== s.triggerPoint) {
            var a = r.oldScroll < s.triggerPoint,
                l = r.newScroll >= s.triggerPoint;(a && l || !a && !l) && (s.queueTrigger(i), e[s.group.id] = s.group);
          }
        }
      }for (var u in e) {
        e[u].flushTriggers();
      }this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll };
    }, o.prototype.innerHeight = function () {
      return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight();
    }, o.prototype.remove = function (e) {
      delete this.waypoints[e.axis][e.key], this.checkEmpty();
    }, o.prototype.innerWidth = function () {
      return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth();
    }, o.prototype.destroy = function () {
      var e = [];for (var t in this.waypoints) {
        for (var n in this.waypoints[t]) {
          e.push(this.waypoints[t][n]);
        }
      }for (var r = 0, i = e.length; r < i; r++) {
        e[r].destroy();
      }
    }, o.prototype.refresh = function () {
      var e,
          t = this.element == this.element.window,
          n = t ? void 0 : this.adapter.offset(),
          i = {};for (var o in this.handleScroll(), e = { horizontal: { contextOffset: t ? 0 : n.left, contextScroll: t ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: t ? 0 : n.top, contextScroll: t ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }) {
        var s = e[o];for (var a in this.waypoints[o]) {
          var l,
              u,
              c,
              f,
              p = this.waypoints[o][a],
              d = p.options.offset,
              h = p.triggerPoint,
              g = 0,
              m = null == h;p.element !== p.element.window && (g = p.adapter.offset()[s.offsetProp]), "function" == typeof d ? d = d.apply(p) : "string" == typeof d && (d = parseFloat(d), p.options.offset.indexOf("%") > -1 && (d = Math.ceil(s.contextDimension * d / 100))), l = s.contextScroll - s.contextOffset, p.triggerPoint = Math.floor(g + l - d), u = h < s.oldScroll, c = p.triggerPoint >= s.oldScroll, f = !u && !c, !m && u && c ? (p.queueTrigger(s.backward), i[p.group.id] = p.group) : !m && f ? (p.queueTrigger(s.forward), i[p.group.id] = p.group) : m && s.oldScroll >= p.triggerPoint && (p.queueTrigger(s.forward), i[p.group.id] = p.group);
        }
      }return r.requestAnimationFrame(function () {
        for (var e in i) {
          i[e].flushTriggers();
        }
      }), this;
    }, o.findOrCreateByElement = function (e) {
      return o.findByElement(e) || new o(e);
    }, o.refreshAll = function () {
      for (var e in n) {
        n[e].refresh();
      }
    }, o.findByElement = function (e) {
      return n[e.waypointContextKey];
    }, window.onload = function () {
      i && i(), o.refreshAll();
    }, r.requestAnimationFrame = function (t) {
      (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t);
    }, r.Context = o;
  }(), function () {
    "use strict";
    function e(e, t) {
      return e.triggerPoint - t.triggerPoint;
    }function t(e, t) {
      return t.triggerPoint - e.triggerPoint;
    }var n = { vertical: {}, horizontal: {} },
        r = window.Waypoint;function i(e) {
      this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this;
    }i.prototype.add = function (e) {
      this.waypoints.push(e);
    }, i.prototype.clearTriggerQueues = function () {
      this.triggerQueues = { up: [], down: [], left: [], right: [] };
    }, i.prototype.flushTriggers = function () {
      for (var n in this.triggerQueues) {
        var r = this.triggerQueues[n],
            i = "up" === n || "left" === n;r.sort(i ? t : e);for (var o = 0, s = r.length; o < s; o += 1) {
          var a = r[o];(a.options.continuous || o === r.length - 1) && a.trigger([n]);
        }
      }this.clearTriggerQueues();
    }, i.prototype.next = function (t) {
      this.waypoints.sort(e);var n = r.Adapter.inArray(t, this.waypoints);return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1];
    }, i.prototype.previous = function (t) {
      this.waypoints.sort(e);var n = r.Adapter.inArray(t, this.waypoints);return n ? this.waypoints[n - 1] : null;
    }, i.prototype.queueTrigger = function (e, t) {
      this.triggerQueues[t].push(e);
    }, i.prototype.remove = function (e) {
      var t = r.Adapter.inArray(e, this.waypoints);t > -1 && this.waypoints.splice(t, 1);
    }, i.prototype.first = function () {
      return this.waypoints[0];
    }, i.prototype.last = function () {
      return this.waypoints[this.waypoints.length - 1];
    }, i.findOrCreate = function (e) {
      return n[e.axis][e.name] || new i(e);
    }, r.Group = i;
  }(), function () {
    "use strict";
    var e = window.Waypoint;function t(e) {
      return e === e.window;
    }function n(e) {
      return t(e) ? e : e.defaultView;
    }function r(e) {
      this.element = e, this.handlers = {};
    }r.prototype.innerHeight = function () {
      return t(this.element) ? this.element.innerHeight : this.element.clientHeight;
    }, r.prototype.innerWidth = function () {
      return t(this.element) ? this.element.innerWidth : this.element.clientWidth;
    }, r.prototype.off = function (e, t) {
      function n(e, t, n) {
        for (var r = 0, i = t.length - 1; r < i; r++) {
          var o = t[r];n && n !== o || e.removeEventListener(o);
        }
      }var r = e.split("."),
          i = r[0],
          o = r[1],
          s = this.element;if (o && this.handlers[o] && i) n(s, this.handlers[o][i], t), this.handlers[o][i] = [];else if (i) for (var a in this.handlers) {
        n(s, this.handlers[a][i] || [], t), this.handlers[a][i] = [];
      } else if (o && this.handlers[o]) {
        for (var l in this.handlers[o]) {
          n(s, this.handlers[o][l], t);
        }this.handlers[o] = {};
      }
    }, r.prototype.offset = function () {
      if (!this.element.ownerDocument) return null;var e = this.element.ownerDocument.documentElement,
          t = n(this.element.ownerDocument),
          r = { top: 0, left: 0 };return this.element.getBoundingClientRect && (r = this.element.getBoundingClientRect()), { top: r.top + t.pageYOffset - e.clientTop, left: r.left + t.pageXOffset - e.clientLeft };
    }, r.prototype.on = function (e, t) {
      var n = e.split("."),
          r = n[0],
          i = n[1] || "__default",
          o = this.handlers[i] = this.handlers[i] || {};(o[r] = o[r] || []).push(t), this.element.addEventListener(r, t);
    }, r.prototype.outerHeight = function (e) {
      var n,
          r = this.innerHeight();return e && !t(this.element) && (n = window.getComputedStyle(this.element), r += parseInt(n.marginTop, 10), r += parseInt(n.marginBottom, 10)), r;
    }, r.prototype.outerWidth = function (e) {
      var n,
          r = this.innerWidth();return e && !t(this.element) && (n = window.getComputedStyle(this.element), r += parseInt(n.marginLeft, 10), r += parseInt(n.marginRight, 10)), r;
    }, r.prototype.scrollLeft = function () {
      var e = n(this.element);return e ? e.pageXOffset : this.element.scrollLeft;
    }, r.prototype.scrollTop = function () {
      var e = n(this.element);return e ? e.pageYOffset : this.element.scrollTop;
    }, r.extend = function () {
      var e = Array.prototype.slice.call(arguments);function t(e, t) {
        if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) for (var n in t) {
          t.hasOwnProperty(n) && (e[n] = t[n]);
        }return e;
      }for (var n = 1, r = e.length; n < r; n++) {
        t(e[0], e[n]);
      }return e[0];
    }, r.inArray = function (e, t, n) {
      return null == t ? -1 : t.indexOf(e, n);
    }, r.isEmptyObject = function (e) {
      for (var t in e) {
        return !1;
      }return !0;
    }, e.adapters.push({ name: "noframework", Adapter: r }), e.Adapter = r;
  }();
}, function (e, t, n) {
  "use strict";
  n.r(t);var r = n(0),
      i = n.n(r);var o = function () {
    function o() {
      _classCallCheck(this, o);

      this.siteHeader = i()(".site-header"), this.menuIcon = i()(".site-header__menu-icon"), this.menuContent = i()(".site-header__menu-content"), this.events();
    }

    _createClass(o, [{
      key: "events",
      value: function events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
      }
    }, {
      key: "toggleTheMenu",
      value: function toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible"), this.siteHeader.toggleClass("site-header--is-expanded"), this.menuIcon.toggleClass("site-header__menu-icon--close-x");
      }
    }]);

    return o;
  }();n(1);var s = function () {
    function s(e, t) {
      _classCallCheck(this, s);

      this.itemsToReveal = e, this.offsetPercentage = t, this.hideInitially(), this.createWaypoints();
    }

    _createClass(s, [{
      key: "hideInitially",
      value: function hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
      }
    }, {
      key: "createWaypoints",
      value: function createWaypoints() {
        var e = this;this.itemsToReveal.each(function () {
          var t = this;new Waypoint({ element: t, handler: function handler() {
              i()(t).addClass("reveal-item--is-visible");
            }, offset: e.offsetPercentage });
        });
      }
    }]);

    return s;
  }();n(7);var a = function () {
    function a() {
      _classCallCheck(this, a);

      this.lazyImages = i()(".lazyload"), this.siteHeader = i()(".site-header"), this.siteLogo = i()(".site-header__logo"), this.headerTriggerElement = i()(".large-hero__title"), this.createHeaderWaypoint(), this.pageSections = i()(".page-section"), this.headerLinks = i()(".primary-nav a"), this.createPageSectionWaypoints(), this.addSmoothScrolling(), this.refreshWaypoints();
    }

    _createClass(a, [{
      key: "refreshWaypoints",
      value: function refreshWaypoints() {
        this.lazyImages.on("load", function () {
          Waypoint.refreshAll();
        });
      }
    }, {
      key: "addSmoothScrolling",
      value: function addSmoothScrolling() {
        this.headerLinks.smoothScroll();
      }
    }, {
      key: "createHeaderWaypoint",
      value: function createHeaderWaypoint() {
        var e = this;new Waypoint({ element: this.headerTriggerElement[0], handler: function handler(t) {
            "down" == t ? (e.siteHeader.addClass("site-header--dark"), e.siteLogo.addClass("site-header__logo--smaller")) : (e.siteHeader.removeClass("site-header--dark"), e.siteLogo.removeClass("site-header__logo--smaller"));
          } });
      }
    }, {
      key: "createPageSectionWaypoints",
      value: function createPageSectionWaypoints() {
        var e = this;this.pageSections.each(function () {
          var t = this;new Waypoint({ element: t, handler: function handler(n) {
              if ("down" == n) {
                var r = t.getAttribute("data-matching-link");e.headerLinks.removeClass("is-current-link"), i()(r).addClass("is-current-link");
              }
            }, offset: "30%" }), new Waypoint({ element: t, handler: function handler(n) {
              if ("up" == n) {
                var r = t.getAttribute("data-matching-link");e.headerLinks.removeClass("is-current-link"), i()(r).addClass("is-current-link");
              }
            }, offset: "-30%" });
        });
      }
    }]);

    return a;
  }();var l = function () {
    function l() {
      _classCallCheck(this, l);

      this.openModalButton = i()(".open-modal"), this.modal = i()(".modal"), this.closeModalButton = i()(".modal__close"), this.events();
    }

    _createClass(l, [{
      key: "events",
      value: function events() {
        this.openModalButton.click(this.openModal.bind(this)), this.closeModalButton.click(this.closeModal.bind(this)), i()(document).keyup(this.keyPressHandler.bind(this));
      }
    }, {
      key: "keyPressHandler",
      value: function keyPressHandler(e) {
        27 == e.which && this.closeModal();
      }
    }, {
      key: "openModal",
      value: function openModal() {
        return this.modal.addClass("modal--is-visible"), !1;
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        this.modal.removeClass("modal--is-visible");
      }
    }]);

    return l;
  }();new o();new s(i()(".feature-item"), "85%"), new s(i()(".testimonial"), "60%");new a(), new l();
},,,,, function (e, t, n) {
  var r, i, o;
  /*!
   * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
   * https://github.com/kswedberg/jquery-smooth-scroll
   * Copyright (c) 2017 Karl Swedberg
   * Licensed MIT
   */i = [n(0)], void 0 === (o = "function" == typeof (r = function r(e) {
    var t = {},
        n = function n(t) {
      var n = [],
          r = t.dir && "left" === t.dir ? "scrollLeft" : "scrollTop";return this.each(function () {
        var t = e(this);if (this !== document && this !== window) return !document.scrollingElement || this !== document.documentElement && this !== document.body ? void (t[r]() > 0 ? n.push(this) : (t[r](1), t[r]() > 0 && n.push(this), t[r](0))) : (n.push(document.scrollingElement), !1);
      }), n.length || this.each(function () {
        this === document.documentElement && "smooth" === e(this).css("scrollBehavior") && (n = [this]), n.length || "BODY" !== this.nodeName || (n = [this]);
      }), "first" === t.el && n.length > 1 && (n = [n[0]]), n;
    },
        r = /^([\-\+]=)(\d+)/;e.fn.extend({ scrollable: function scrollable(e) {
        var t = n.call(this, { dir: e });return this.pushStack(t);
      }, firstScrollable: function firstScrollable(e) {
        var t = n.call(this, { el: "first", dir: e });return this.pushStack(t);
      }, smoothScroll: function smoothScroll(t, n) {
        if ("options" === (t = t || {})) return n ? this.each(function () {
          var t = e(this),
              r = e.extend(t.data("ssOpts") || {}, n);e(this).data("ssOpts", r);
        }) : this.first().data("ssOpts");var r = e.extend({}, e.fn.smoothScroll.defaults, t),
            i = function i(t) {
          var n = function n(e) {
            return e.replace(/(:|\.|\/)/g, "\\$1");
          },
              i = e(this),
              o = e.extend({}, r, i.data("ssOpts") || {}),
              s = r.exclude,
              a = o.excludeWithin,
              l = 0,
              u = 0,
              c = !0,
              f = {},
              p = e.smoothScroll.filterPath(location.pathname),
              d = e.smoothScroll.filterPath(this.pathname),
              h = location.hostname === this.hostname || !this.hostname,
              g = o.scrollTarget || d === p,
              m = n(this.hash);if (m && !e(m).length && (c = !1), o.scrollTarget || h && g && m) {
            for (; c && l < s.length;) {
              i.is(n(s[l++])) && (c = !1);
            }for (; c && u < a.length;) {
              i.closest(a[u++]).length && (c = !1);
            }
          } else c = !1;c && (o.preventDefault && t.preventDefault(), e.extend(f, o, { scrollTarget: o.scrollTarget || m, link: this }), e.smoothScroll(f));
        };return null !== t.delegateSelector ? this.off("click.smoothscroll", t.delegateSelector).on("click.smoothscroll", t.delegateSelector, i) : this.off("click.smoothscroll").on("click.smoothscroll", i), this;
      } });var i = function i(e) {
      var t = { relative: "" },
          n = "string" == typeof e && r.exec(e);return "number" == typeof e ? t.px = e : n && (t.relative = n[1], t.px = parseFloat(n[2]) || 0), t;
    },
        o = function o(t) {
      var n = e(t.scrollTarget);t.autoFocus && n.length && (n[0].focus(), n.is(document.activeElement) || (n.prop({ tabIndex: -1 }), n[0].focus())), t.afterScroll.call(t.link, t);
    };e.smoothScroll = function (n, r) {
      if ("options" === n && "object" == (typeof r === "undefined" ? "undefined" : _typeof(r))) return e.extend(t, r);var s,
          a,
          l,
          u,
          c = i(n),
          f = {},
          p = 0,
          d = "offset",
          h = "scrollTop",
          g = {},
          m = {};c.px ? s = e.extend({ link: null }, e.fn.smoothScroll.defaults, t) : ((s = e.extend({ link: null }, e.fn.smoothScroll.defaults, n || {}, t)).scrollElement && (d = "position", "static" === s.scrollElement.css("position") && s.scrollElement.css("position", "relative")), r && (c = i(r))), h = "left" === s.direction ? "scrollLeft" : h, s.scrollElement ? (a = s.scrollElement, c.px || /^(?:HTML|BODY)$/.test(a[0].nodeName) || (p = a[h]())) : a = e("html, body").firstScrollable(s.direction), s.beforeScroll.call(a, s), f = c.px ? c : { relative: "", px: e(s.scrollTarget)[d]() && e(s.scrollTarget)[d]()[s.direction] || 0 }, g[h] = f.relative + (f.px + p + s.offset), "auto" === (l = s.speed) && (u = Math.abs(g[h] - a[h]()), l = u / s.autoCoefficient), m = { duration: l, easing: s.easing, complete: function complete() {
          o(s);
        } }, s.step && (m.step = s.step), a.length ? a.stop().animate(g, m) : o(s);
    }, e.smoothScroll.version = "2.2.0", e.smoothScroll.filterPath = function (e) {
      return (e = e || "").replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "");
    }, e.fn.smoothScroll.defaults = { exclude: [], excludeWithin: [], offset: 0, direction: "top", delegateSelector: null, scrollElement: null, scrollTarget: null, autoFocus: !1, beforeScroll: function beforeScroll() {}, afterScroll: function afterScroll() {}, easing: "swing", speed: 400, autoCoefficient: 2, preventDefault: !0 };
  }) ? r.apply(t, i) : r) || (e.exports = o);
}]);