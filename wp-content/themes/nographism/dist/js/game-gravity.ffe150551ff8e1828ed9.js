/*! For license information please see game-gravity.ffe150551ff8e1828ed9.js.LICENSE.txt */ ! function() {
    "use strict";
    var t = {
            2365: function(t, e, r) {
                var n = r(9200),
                    i = r(7938),
                    o = TypeError;
                t.exports = function(t) {
                    if (n(t)) return t;
                    throw new o(i(t) + " is not a function")
                }
            },
            602: function(t, e, r) {
                var n = r(2430),
                    i = TypeError;
                t.exports = function(t, e) {
                    if (n(e, t)) return t;
                    throw new i("Incorrect invocation")
                }
            },
            4398: function(t, e, r) {
                var n = r(9131),
                    i = String,
                    o = TypeError;
                t.exports = function(t) {
                    if (n(t)) return t;
                    throw new o(i(t) + " is not an object")
                }
            },
            6134: function(t, e, r) {
                var n = r(4360),
                    i = r(8479),
                    o = r(7457),
                    s = function(t) {
                        return function(e, r, s) {
                            var a = n(e),
                                u = o(a);
                            if (0 === u) return !t && -1;
                            var c, f = i(s, u);
                            if (t && r != r) {
                                for (; u > f;)
                                    if ((c = a[f++]) != c) return !0
                            } else
                                for (; u > f; f++)
                                    if ((t || f in a) && a[f] === r) return t || f || 0;
                            return !t && -1
                        }
                    };
                t.exports = {
                    includes: s(!0),
                    indexOf: s(!1)
                }
            },
            5589: function(t, e, r) {
                var n = r(7133),
                    i = n({}.toString),
                    o = n("".slice);
                t.exports = function(t) {
                    return o(i(t), 8, -1)
                }
            },
            3650: function(t, e, r) {
                var n = r(917),
                    i = r(9200),
                    o = r(5589),
                    s = r(4702)("toStringTag"),
                    a = Object,
                    u = "Arguments" === o(function() {
                        return arguments
                    }());
                t.exports = n ? o : function(t) {
                    var e, r, n;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
                        try {
                            return t[e]
                        } catch (t) {}
                    }(e = a(t), s)) ? r : u ? o(e) : "Object" === (n = o(e)) && i(e.callee) ? "Arguments" : n
                }
            },
            4085: function(t, e, r) {
                var n = r(9158),
                    i = r(4540),
                    o = r(2428),
                    s = r(4446);
                t.exports = function(t, e, r) {
                    for (var a = i(e), u = s.f, c = o.f, f = 0; f < a.length; f++) {
                        var h = a[f];
                        n(t, h) || r && n(r, h) || u(t, h, c(e, h))
                    }
                }
            },
            6308: function(t, e, r) {
                var n = r(942);
                t.exports = !n(function() {
                    function t() {}
                    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
                })
            },
            5044: function(t, e, r) {
                var n = r(6857),
                    i = r(4446),
                    o = r(2007);
                t.exports = n ? function(t, e, r) {
                    return i.f(t, e, o(1, r))
                } : function(t, e, r) {
                    return t[e] = r, t
                }
            },
            2007: function(t) {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            },
            5909: function(t, e, r) {
                var n = r(6857),
                    i = r(4446),
                    o = r(2007);
                t.exports = function(t, e, r) {
                    n ? i.f(t, e, o(0, r)) : t[e] = r
                }
            },
            3129: function(t, e, r) {
                var n = r(4174),
                    i = r(4446);
                t.exports = function(t, e, r) {
                    return r.get && n(r.get, e, {
                        getter: !0
                    }), r.set && n(r.set, e, {
                        setter: !0
                    }), i.f(t, e, r)
                }
            },
            8521: function(t, e, r) {
                var n = r(9200),
                    i = r(4446),
                    o = r(4174),
                    s = r(8466);
                t.exports = function(t, e, r, a) {
                    a || (a = {});
                    var u = a.enumerable,
                        c = void 0 !== a.name ? a.name : e;
                    if (n(r) && o(r, c, a), a.global) u ? t[e] = r : s(e, r);
                    else {
                        try {
                            a.unsafe ? t[e] && (u = !0) : delete t[e]
                        } catch (t) {}
                        u ? t[e] = r : i.f(t, e, {
                            value: r,
                            enumerable: !1,
                            configurable: !a.nonConfigurable,
                            writable: !a.nonWritable
                        })
                    }
                    return t
                }
            },
            8466: function(t, e, r) {
                var n = r(8793),
                    i = Object.defineProperty;
                t.exports = function(t, e) {
                    try {
                        i(n, t, {
                            value: e,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (r) {
                        n[t] = e
                    }
                    return e
                }
            },
            6857: function(t, e, r) {
                var n = r(942);
                t.exports = !n(function() {
                    return 7 !== Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                })
            },
            1466: function(t, e, r) {
                var n = r(8793),
                    i = r(9131),
                    o = n.document,
                    s = i(o) && i(o.createElement);
                t.exports = function(t) {
                    return s ? o.createElement(t) : {}
                }
            },
            2030: function(t) {
                t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            824: function(t, e, r) {
                var n = r(8793).navigator,
                    i = n && n.userAgent;
                t.exports = i ? String(i) : ""
            },
            9140: function(t, e, r) {
                var n, i, o = r(8793),
                    s = r(824),
                    a = o.process,
                    u = o.Deno,
                    c = a && a.versions || u && u.version,
                    f = c && c.v8;
                f && (i = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !i && s && (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = s.match(/Chrome\/(\d+)/)) && (i = +n[1]), t.exports = i
            },
            3353: function(t, e, r) {
                var n = r(8793),
                    i = r(2428).f,
                    o = r(5044),
                    s = r(8521),
                    a = r(8466),
                    u = r(4085),
                    c = r(7453);
                t.exports = function(t, e) {
                    var r, f, h, l, p, d = t.target,
                        _ = t.global,
                        m = t.stat;
                    if (r = _ ? n : m ? n[d] || a(d, {}) : n[d] && n[d].prototype)
                        for (f in e) {
                            if (l = e[f], h = t.dontCallGetSet ? (p = i(r, f)) && p.value : r[f], !c(_ ? f : d + (m ? "." : "#") + f, t.forced) && void 0 !== h) {
                                if (typeof l == typeof h) continue;
                                u(l, h)
                            }(t.sham || h && h.sham) && o(l, "sham", !0), s(r, f, l, t)
                        }
                }
            },
            942: function(t) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            },
            5457: function(t, e, r) {
                var n = r(527),
                    i = r(2365),
                    o = r(7315),
                    s = n(n.bind);
                t.exports = function(t, e) {
                    return i(t), void 0 === e ? t : o ? s(t, e) : function() {
                        return t.apply(e, arguments)
                    }
                }
            },
            7315: function(t, e, r) {
                var n = r(942);
                t.exports = !n(function() {
                    var t = function() {}.bind();
                    return "function" != typeof t || t.hasOwnProperty("prototype")
                })
            },
            492: function(t, e, r) {
                var n = r(7315),
                    i = Function.prototype.call;
                t.exports = n ? i.bind(i) : function() {
                    return i.apply(i, arguments)
                }
            },
            7403: function(t, e, r) {
                var n = r(6857),
                    i = r(9158),
                    o = Function.prototype,
                    s = n && Object.getOwnPropertyDescriptor,
                    a = i(o, "name"),
                    u = a && "something" === function() {}.name,
                    c = a && (!n || n && s(o, "name").configurable);
                t.exports = {
                    EXISTS: a,
                    PROPER: u,
                    CONFIGURABLE: c
                }
            },
            527: function(t, e, r) {
                var n = r(5589),
                    i = r(7133);
                t.exports = function(t) {
                    if ("Function" === n(t)) return i(t)
                }
            },
            7133: function(t, e, r) {
                var n = r(7315),
                    i = Function.prototype,
                    o = i.call,
                    s = n && i.bind.bind(o, o);
                t.exports = n ? s : function(t) {
                    return function() {
                        return o.apply(t, arguments)
                    }
                }
            },
            848: function(t, e, r) {
                var n = r(8793),
                    i = r(9200);
                t.exports = function(t, e) {
                    return arguments.length < 2 ? (r = n[t], i(r) ? r : void 0) : n[t] && n[t][e];
                    var r
                }
            },
            5134: function(t) {
                t.exports = function(t) {
                    return {
                        iterator: t,
                        next: t.next,
                        done: !1
                    }
                }
            },
            590: function(t, e, r) {
                var n = r(3650),
                    i = r(9325),
                    o = r(2178),
                    s = r(488),
                    a = r(4702)("iterator");
                t.exports = function(t) {
                    if (!o(t)) return i(t, a) || i(t, "@@iterator") || s[n(t)]
                }
            },
            1778: function(t, e, r) {
                var n = r(492),
                    i = r(2365),
                    o = r(4398),
                    s = r(7938),
                    a = r(590),
                    u = TypeError;
                t.exports = function(t, e) {
                    var r = arguments.length < 2 ? a(t) : e;
                    if (i(r)) return o(n(r, t));
                    throw new u(s(t) + " is not iterable")
                }
            },
            9325: function(t, e, r) {
                var n = r(2365),
                    i = r(2178);
                t.exports = function(t, e) {
                    var r = t[e];
                    return i(r) ? void 0 : n(r)
                }
            },
            8793: function(t, e, r) {
                var n = function(t) {
                    return t && t.Math === Math && t
                };
                t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || n("object" == typeof this && this) || function() {
                    return this
                }() || Function("return this")()
            },
            9158: function(t, e, r) {
                var n = r(7133),
                    i = r(9272),
                    o = n({}.hasOwnProperty);
                t.exports = Object.hasOwn || function(t, e) {
                    return o(i(t), e)
                }
            },
            640: function(t) {
                t.exports = {}
            },
            4510: function(t, e, r) {
                var n = r(848);
                t.exports = n("document", "documentElement")
            },
            5842: function(t, e, r) {
                var n = r(6857),
                    i = r(942),
                    o = r(1466);
                t.exports = !n && !i(function() {
                    return 7 !== Object.defineProperty(o("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            },
            8060: function(t, e, r) {
                var n = r(7133),
                    i = r(942),
                    o = r(5589),
                    s = Object,
                    a = n("".split);
                t.exports = i(function() {
                    return !s("z").propertyIsEnumerable(0)
                }) ? function(t) {
                    return "String" === o(t) ? a(t, "") : s(t)
                } : s
            },
            7217: function(t, e, r) {
                var n = r(7133),
                    i = r(9200),
                    o = r(5210),
                    s = n(Function.toString);
                i(o.inspectSource) || (o.inspectSource = function(t) {
                    return s(t)
                }), t.exports = o.inspectSource
            },
            1514: function(t, e, r) {
                var n, i, o, s = r(3125),
                    a = r(8793),
                    u = r(9131),
                    c = r(5044),
                    f = r(9158),
                    h = r(5210),
                    l = r(2316),
                    p = r(640),
                    d = "Object already initialized",
                    _ = a.TypeError,
                    m = a.WeakMap;
                if (s || h.state) {
                    var v = h.state || (h.state = new m);
                    v.get = v.get, v.has = v.has, v.set = v.set, n = function(t, e) {
                        if (v.has(t)) throw new _(d);
                        return e.facade = t, v.set(t, e), e
                    }, i = function(t) {
                        return v.get(t) || {}
                    }, o = function(t) {
                        return v.has(t)
                    }
                } else {
                    var g = l("state");
                    p[g] = !0, n = function(t, e) {
                        if (f(t, g)) throw new _(d);
                        return e.facade = t, c(t, g, e), e
                    }, i = function(t) {
                        return f(t, g) ? t[g] : {}
                    }, o = function(t) {
                        return f(t, g)
                    }
                }
                t.exports = {
                    set: n,
                    get: i,
                    has: o,
                    enforce: function(t) {
                        return o(t) ? i(t) : n(t, {})
                    },
                    getterFor: function(t) {
                        return function(e) {
                            var r;
                            if (!u(e) || (r = i(e)).type !== t) throw new _("Incompatible receiver, " + t + " required");
                            return r
                        }
                    }
                }
            },
            6: function(t, e, r) {
                var n = r(4702),
                    i = r(488),
                    o = n("iterator"),
                    s = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (i.Array === t || s[o] === t)
                }
            },
            9200: function(t) {
                var e = "object" == typeof document && document.all;
                t.exports = void 0 === e && void 0 !== e ? function(t) {
                    return "function" == typeof t || t === e
                } : function(t) {
                    return "function" == typeof t
                }
            },
            7453: function(t, e, r) {
                var n = r(942),
                    i = r(9200),
                    o = /#|\.prototype\./,
                    s = function(t, e) {
                        var r = u[a(t)];
                        return r === f || r !== c && (i(e) ? n(e) : !!e)
                    },
                    a = s.normalize = function(t) {
                        return String(t).replace(o, ".").toLowerCase()
                    },
                    u = s.data = {},
                    c = s.NATIVE = "N",
                    f = s.POLYFILL = "P";
                t.exports = s
            },
            2178: function(t) {
                t.exports = function(t) {
                    return null == t
                }
            },
            9131: function(t, e, r) {
                var n = r(9200);
                t.exports = function(t) {
                    return "object" == typeof t ? null !== t : n(t)
                }
            },
            1818: function(t) {
                t.exports = !1
            },
            460: function(t, e, r) {
                var n = r(848),
                    i = r(9200),
                    o = r(2430),
                    s = r(6253),
                    a = Object;
                t.exports = s ? function(t) {
                    return "symbol" == typeof t
                } : function(t) {
                    var e = n("Symbol");
                    return i(e) && o(e.prototype, a(t))
                }
            },
            3973: function(t, e, r) {
                var n = r(5457),
                    i = r(492),
                    o = r(4398),
                    s = r(7938),
                    a = r(6),
                    u = r(7457),
                    c = r(2430),
                    f = r(1778),
                    h = r(590),
                    l = r(9400),
                    p = TypeError,
                    d = function(t, e) {
                        this.stopped = t, this.result = e
                    },
                    _ = d.prototype;
                t.exports = function(t, e, r) {
                    var m, v, g, y, w, x, b, T = r && r.that,
                        O = !(!r || !r.AS_ENTRIES),
                        S = !(!r || !r.IS_RECORD),
                        M = !(!r || !r.IS_ITERATOR),
                        k = !(!r || !r.INTERRUPTED),
                        E = n(e, T),
                        C = function(t) {
                            return m && l(m, "normal"), new d(!0, t)
                        },
                        P = function(t) {
                            return O ? (o(t), k ? E(t[0], t[1], C) : E(t[0], t[1])) : k ? E(t, C) : E(t)
                        };
                    if (S) m = t.iterator;
                    else if (M) m = t;
                    else {
                        if (!(v = h(t))) throw new p(s(t) + " is not iterable");
                        if (a(v)) {
                            for (g = 0, y = u(t); y > g; g++)
                                if ((w = P(t[g])) && c(_, w)) return w;
                            return new d(!1)
                        }
                        m = f(t, v)
                    }
                    for (x = S ? t.next : m.next; !(b = i(x, m)).done;) {
                        try {
                            w = P(b.value)
                        } catch (t) {
                            l(m, "throw", t)
                        }
                        if ("object" == typeof w && w && c(_, w)) return w
                    }
                    return new d(!1)
                }
            },
            9400: function(t, e, r) {
                var n = r(492),
                    i = r(4398),
                    o = r(9325);
                t.exports = function(t, e, r) {
                    var s, a;
                    i(t);
                    try {
                        if (!(s = o(t, "return"))) {
                            if ("throw" === e) throw r;
                            return r
                        }
                        s = n(s, t)
                    } catch (t) {
                        a = !0, s = t
                    }
                    if ("throw" === e) throw r;
                    if (a) throw s;
                    return i(s), r
                }
            },
            3126: function(t, e, r) {
                var n = r(8793);
                t.exports = function(t, e) {
                    var r = n.Iterator,
                        i = r && r.prototype,
                        o = i && i[t],
                        s = !1;
                    if (o) try {
                        o.call({
                            next: function() {
                                return {
                                    done: !0
                                }
                            },
                            return: function() {
                                s = !0
                            }
                        }, -1)
                    } catch (t) {
                        t instanceof e || (s = !1)
                    }
                    if (!s) return o
                }
            },
            1982: function(t, e, r) {
                var n, i, o, s = r(942),
                    a = r(9200),
                    u = r(9131),
                    c = r(2909),
                    f = r(5270),
                    h = r(8521),
                    l = r(4702),
                    p = r(1818),
                    d = l("iterator"),
                    _ = !1;
                [].keys && ("next" in (o = [].keys()) ? (i = f(f(o))) !== Object.prototype && (n = i) : _ = !0), !u(n) || s(function() {
                    var t = {};
                    return n[d].call(t) !== t
                }) ? n = {} : p && (n = c(n)), a(n[d]) || h(n, d, function() {
                    return this
                }), t.exports = {
                    IteratorPrototype: n,
                    BUGGY_SAFARI_ITERATORS: _
                }
            },
            488: function(t) {
                t.exports = {}
            },
            7457: function(t, e, r) {
                var n = r(2695);
                t.exports = function(t) {
                    return n(t.length)
                }
            },
            4174: function(t, e, r) {
                var n = r(7133),
                    i = r(942),
                    o = r(9200),
                    s = r(9158),
                    a = r(6857),
                    u = r(7403).CONFIGURABLE,
                    c = r(7217),
                    f = r(1514),
                    h = f.enforce,
                    l = f.get,
                    p = String,
                    d = Object.defineProperty,
                    _ = n("".slice),
                    m = n("".replace),
                    v = n([].join),
                    g = a && !i(function() {
                        return 8 !== d(function() {}, "length", {
                            value: 8
                        }).length
                    }),
                    y = String(String).split("String"),
                    w = t.exports = function(t, e, r) {
                        "Symbol(" === _(p(e), 0, 7) && (e = "[" + m(p(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!s(t, "name") || u && t.name !== e) && (a ? d(t, "name", {
                            value: e,
                            configurable: !0
                        }) : t.name = e), g && r && s(r, "arity") && t.length !== r.arity && d(t, "length", {
                            value: r.arity
                        });
                        try {
                            r && s(r, "constructor") && r.constructor ? a && d(t, "prototype", {
                                writable: !1
                            }) : t.prototype && (t.prototype = void 0)
                        } catch (t) {}
                        var n = h(t);
                        return s(n, "source") || (n.source = v(y, "string" == typeof e ? e : "")), t
                    };
                Function.prototype.toString = w(function() {
                    return o(this) && l(this).source || c(this)
                }, "toString")
            },
            8226: function(t) {
                var e = Math.ceil,
                    r = Math.floor;
                t.exports = Math.trunc || function(t) {
                    var n = +t;
                    return (n > 0 ? r : e)(n)
                }
            },
            2909: function(t, e, r) {
                var n, i = r(4398),
                    o = r(2066),
                    s = r(2030),
                    a = r(640),
                    u = r(4510),
                    c = r(1466),
                    f = r(2316),
                    h = "prototype",
                    l = "script",
                    p = f("IE_PROTO"),
                    d = function() {},
                    _ = function(t) {
                        return "<" + l + ">" + t + "</" + l + ">"
                    },
                    m = function(t) {
                        t.write(_("")), t.close();
                        var e = t.parentWindow.Object;
                        return t = null, e
                    },
                    v = function() {
                        try {
                            n = new ActiveXObject("htmlfile")
                        } catch (t) {}
                        var t, e, r;
                        v = "undefined" != typeof document ? document.domain && n ? m(n) : (e = c("iframe"), r = "java" + l + ":", e.style.display = "none", u.appendChild(e), e.src = String(r), (t = e.contentWindow.document).open(), t.write(_("document.F=Object")), t.close(), t.F) : m(n);
                        for (var i = s.length; i--;) delete v[h][s[i]];
                        return v()
                    };
                a[p] = !0, t.exports = Object.create || function(t, e) {
                    var r;
                    return null !== t ? (d[h] = i(t), r = new d, d[h] = null, r[p] = t) : r = v(), void 0 === e ? r : o.f(r, e)
                }
            },
            2066: function(t, e, r) {
                var n = r(6857),
                    i = r(335),
                    o = r(4446),
                    s = r(4398),
                    a = r(4360),
                    u = r(3733);
                e.f = n && !i ? Object.defineProperties : function(t, e) {
                    s(t);
                    for (var r, n = a(e), i = u(e), c = i.length, f = 0; c > f;) o.f(t, r = i[f++], n[r]);
                    return t
                }
            },
            4446: function(t, e, r) {
                var n = r(6857),
                    i = r(5842),
                    o = r(335),
                    s = r(4398),
                    a = r(2548),
                    u = TypeError,
                    c = Object.defineProperty,
                    f = Object.getOwnPropertyDescriptor,
                    h = "enumerable",
                    l = "configurable",
                    p = "writable";
                e.f = n ? o ? function(t, e, r) {
                    if (s(t), e = a(e), s(r), "function" == typeof t && "prototype" === e && "value" in r && p in r && !r[p]) {
                        var n = f(t, e);
                        n && n[p] && (t[e] = r.value, r = {
                            configurable: l in r ? r[l] : n[l],
                            enumerable: h in r ? r[h] : n[h],
                            writable: !1
                        })
                    }
                    return c(t, e, r)
                } : c : function(t, e, r) {
                    if (s(t), e = a(e), s(r), i) try {
                        return c(t, e, r)
                    } catch (t) {}
                    if ("get" in r || "set" in r) throw new u("Accessors not supported");
                    return "value" in r && (t[e] = r.value), t
                }
            },
            2428: function(t, e, r) {
                var n = r(6857),
                    i = r(492),
                    o = r(6732),
                    s = r(2007),
                    a = r(4360),
                    u = r(2548),
                    c = r(9158),
                    f = r(5842),
                    h = Object.getOwnPropertyDescriptor;
                e.f = n ? h : function(t, e) {
                    if (t = a(t), e = u(e), f) try {
                        return h(t, e)
                    } catch (t) {}
                    if (c(t, e)) return s(!i(o.f, t, e), t[e])
                }
            },
            5809: function(t, e, r) {
                var n = r(8959),
                    i = r(2030).concat("length", "prototype");
                e.f = Object.getOwnPropertyNames || function(t) {
                    return n(t, i)
                }
            },
            1264: function(t, e) {
                e.f = Object.getOwnPropertySymbols
            },
            5270: function(t, e, r) {
                var n = r(9158),
                    i = r(9200),
                    o = r(9272),
                    s = r(2316),
                    a = r(6308),
                    u = s("IE_PROTO"),
                    c = Object,
                    f = c.prototype;
                t.exports = a ? c.getPrototypeOf : function(t) {
                    var e = o(t);
                    if (n(e, u)) return e[u];
                    var r = e.constructor;
                    return i(r) && e instanceof r ? r.prototype : e instanceof c ? f : null
                }
            },
            2430: function(t, e, r) {
                var n = r(7133);
                t.exports = n({}.isPrototypeOf)
            },
            8959: function(t, e, r) {
                var n = r(7133),
                    i = r(9158),
                    o = r(4360),
                    s = r(6134).indexOf,
                    a = r(640),
                    u = n([].push);
                t.exports = function(t, e) {
                    var r, n = o(t),
                        c = 0,
                        f = [];
                    for (r in n) !i(a, r) && i(n, r) && u(f, r);
                    for (; e.length > c;) i(n, r = e[c++]) && (~s(f, r) || u(f, r));
                    return f
                }
            },
            3733: function(t, e, r) {
                var n = r(8959),
                    i = r(2030);
                t.exports = Object.keys || function(t) {
                    return n(t, i)
                }
            },
            6732: function(t, e) {
                var r = {}.propertyIsEnumerable,
                    n = Object.getOwnPropertyDescriptor,
                    i = n && !r.call({
                        1: 2
                    }, 1);
                e.f = i ? function(t) {
                    var e = n(this, t);
                    return !!e && e.enumerable
                } : r
            },
            1427: function(t, e, r) {
                var n = r(492),
                    i = r(9200),
                    o = r(9131),
                    s = TypeError;
                t.exports = function(t, e) {
                    var r, a;
                    if ("string" === e && i(r = t.toString) && !o(a = n(r, t))) return a;
                    if (i(r = t.valueOf) && !o(a = n(r, t))) return a;
                    if ("string" !== e && i(r = t.toString) && !o(a = n(r, t))) return a;
                    throw new s("Can't convert object to primitive value")
                }
            },
            4540: function(t, e, r) {
                var n = r(848),
                    i = r(7133),
                    o = r(5809),
                    s = r(1264),
                    a = r(4398),
                    u = i([].concat);
                t.exports = n("Reflect", "ownKeys") || function(t) {
                    var e = o.f(a(t)),
                        r = s.f;
                    return r ? u(e, r(t)) : e
                }
            },
            3977: function(t, e, r) {
                var n = r(2178),
                    i = TypeError;
                t.exports = function(t) {
                    if (n(t)) throw new i("Can't call method on " + t);
                    return t
                }
            },
            2316: function(t, e, r) {
                var n = r(6014),
                    i = r(685),
                    o = n("keys");
                t.exports = function(t) {
                    return o[t] || (o[t] = i(t))
                }
            },
            5210: function(t, e, r) {
                var n = r(1818),
                    i = r(8793),
                    o = r(8466),
                    s = "__core-js_shared__",
                    a = t.exports = i[s] || o(s, {});
                (a.versions || (a.versions = [])).push({
                    version: "3.48.0",
                    mode: n ? "pure" : "global",
                    copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
                    license: "https://github.com/zloirock/core-js/blob/v3.48.0/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            },
            6014: function(t, e, r) {
                var n = r(5210);
                t.exports = function(t, e) {
                    return n[t] || (n[t] = e || {})
                }
            },
            260: function(t, e, r) {
                var n = r(9140),
                    i = r(942),
                    o = r(8793).String;
                t.exports = !!Object.getOwnPropertySymbols && !i(function() {
                    var t = Symbol("symbol detection");
                    return !o(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41
                })
            },
            8479: function(t, e, r) {
                var n = r(4932),
                    i = Math.max,
                    o = Math.min;
                t.exports = function(t, e) {
                    var r = n(t);
                    return r < 0 ? i(r + e, 0) : o(r, e)
                }
            },
            4360: function(t, e, r) {
                var n = r(8060),
                    i = r(3977);
                t.exports = function(t) {
                    return n(i(t))
                }
            },
            4932: function(t, e, r) {
                var n = r(8226);
                t.exports = function(t) {
                    var e = +t;
                    return e != e || 0 === e ? 0 : n(e)
                }
            },
            2695: function(t, e, r) {
                var n = r(4932),
                    i = Math.min;
                t.exports = function(t) {
                    var e = n(t);
                    return e > 0 ? i(e, 9007199254740991) : 0
                }
            },
            9272: function(t, e, r) {
                var n = r(3977),
                    i = Object;
                t.exports = function(t) {
                    return i(n(t))
                }
            },
            9422: function(t, e, r) {
                var n = r(492),
                    i = r(9131),
                    o = r(460),
                    s = r(9325),
                    a = r(1427),
                    u = r(4702),
                    c = TypeError,
                    f = u("toPrimitive");
                t.exports = function(t, e) {
                    if (!i(t) || o(t)) return t;
                    var r, u = s(t, f);
                    if (u) {
                        if (void 0 === e && (e = "default"), r = n(u, t, e), !i(r) || o(r)) return r;
                        throw new c("Can't convert object to primitive value")
                    }
                    return void 0 === e && (e = "number"), a(t, e)
                }
            },
            2548: function(t, e, r) {
                var n = r(9422),
                    i = r(460);
                t.exports = function(t) {
                    var e = n(t, "string");
                    return i(e) ? e : e + ""
                }
            },
            917: function(t, e, r) {
                var n = {};
                n[r(4702)("toStringTag")] = "z", t.exports = "[object z]" === String(n)
            },
            7938: function(t) {
                var e = String;
                t.exports = function(t) {
                    try {
                        return e(t)
                    } catch (t) {
                        return "Object"
                    }
                }
            },
            685: function(t, e, r) {
                var n = r(7133),
                    i = 0,
                    o = Math.random(),
                    s = n(1.1.toString);
                t.exports = function(t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + s(++i + o, 36)
                }
            },
            6253: function(t, e, r) {
                var n = r(260);
                t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            335: function(t, e, r) {
                var n = r(6857),
                    i = r(942);
                t.exports = n && i(function() {
                    return 42 !== Object.defineProperty(function() {}, "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                })
            },
            3125: function(t, e, r) {
                var n = r(8793),
                    i = r(9200),
                    o = n.WeakMap;
                t.exports = i(o) && /native code/.test(String(o))
            },
            4702: function(t, e, r) {
                var n = r(8793),
                    i = r(6014),
                    o = r(9158),
                    s = r(685),
                    a = r(260),
                    u = r(6253),
                    c = n.Symbol,
                    f = i("wks"),
                    h = u ? c.for || c : c && c.withoutSetter || s;
                t.exports = function(t) {
                    return o(f, t) || (f[t] = a && o(c, t) ? c[t] : h("Symbol." + t)), f[t]
                }
            },
            2306: function(t, e, r) {
                var n = r(3353),
                    i = r(8793),
                    o = r(602),
                    s = r(4398),
                    a = r(9200),
                    u = r(5270),
                    c = r(3129),
                    f = r(5909),
                    h = r(942),
                    l = r(9158),
                    p = r(4702),
                    d = r(1982).IteratorPrototype,
                    _ = r(6857),
                    m = r(1818),
                    v = "constructor",
                    g = "Iterator",
                    y = p("toStringTag"),
                    w = TypeError,
                    x = i[g],
                    b = m || !a(x) || x.prototype !== d || !h(function() {
                        x({})
                    }),
                    T = function() {
                        if (o(this, d), u(this) === d) throw new w("Abstract class Iterator not directly constructable")
                    },
                    O = function(t, e) {
                        _ ? c(d, t, {
                            configurable: !0,
                            get: function() {
                                return e
                            },
                            set: function(e) {
                                if (s(this), this === d) throw new w("You can't redefine this property");
                                l(this, t) ? this[t] = e : f(this, t, e)
                            }
                        }) : d[t] = e
                    };
                l(d, y) || O(y, g), !b && l(d, v) && d[v] !== Object || O(v, T), T.prototype = d, n({
                    global: !0,
                    constructor: !0,
                    forced: b
                }, {
                    Iterator: T
                })
            },
            2099: function(t, e, r) {
                var n = r(3353),
                    i = r(492),
                    o = r(3973),
                    s = r(2365),
                    a = r(4398),
                    u = r(5134),
                    c = r(9400),
                    f = r(3126)("forEach", TypeError);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0,
                    forced: f
                }, {
                    forEach: function(t) {
                        a(this);
                        try {
                            s(t)
                        } catch (t) {
                            c(this, "throw", t)
                        }
                        if (f) return i(f, this, t);
                        var e = u(this),
                            r = 0;
                        o(e, function(e) {
                            t(e, r++)
                        }, {
                            IS_RECORD: !0
                        })
                    }
                })
            },
            9849: function(t, e, r) {
                r(2306)
            },
            6658: function(t, e, r) {
                r(2099)
            }
        },
        e = {};

    function r(n) {
        var i = e[n];
        if (void 0 !== i) return i.exports;
        var o = e[n] = {
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.exports
    }

    function n(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function i(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), r(9849), r(6658);
    var o, s, a, u, c, f, h, l, p, d, _, m, v, g, y, w, x, b = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        T = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        O = 1e8,
        S = 1e-8,
        M = 2 * Math.PI,
        k = M / 4,
        E = 0,
        C = Math.sqrt,
        P = Math.cos,
        A = Math.sin,
        D = function(t) {
            return "string" == typeof t
        },
        R = function(t) {
            return "function" == typeof t
        },
        z = function(t) {
            return "number" == typeof t
        },
        F = function(t) {
            return void 0 === t
        },
        I = function(t) {
            return "object" == typeof t
        },
        j = function(t) {
            return !1 !== t
        },
        L = function() {
            return "undefined" != typeof window
        },
        B = function(t) {
            return R(t) || D(t)
        },
        N = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Y = Array.isArray,
        q = /random\([^)]+\)/g,
        U = /,\s*/g,
        X = /(?:-?\.?\d|\.)+/gi,
        W = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        V = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        G = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        H = /[+-]=-?[.\d]+/,
        $ = /[^,'"\[\]\s]+/gi,
        Q = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        K = {},
        Z = {},
        J = function(t) {
            return (Z = Ct(t, K)) && Cr
        },
        tt = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        et = function(t, e) {
            return !e && console.warn(t)
        },
        rt = function(t, e) {
            return t && (K[t] = e) && Z && (Z[t] = e) || K
        },
        nt = function() {
            return 0
        },
        it = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        ot = {
            suppressEvents: !0,
            kill: !1
        },
        st = {
            suppressEvents: !0
        },
        at = {},
        ut = [],
        ct = {},
        ft = {},
        ht = {},
        lt = 30,
        pt = [],
        dt = "",
        _t = function(t) {
            var e, r, n = t[0];
            if (I(n) || R(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                for (r = pt.length; r-- && !pt[r].targetTest(n););
                e = pt[r]
            }
            for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ue(t[r], e))) || t.splice(r, 1);
            return t
        },
        mt = function(t) {
            return t._gsap || _t(se(t))[0]._gsap
        },
        vt = function(t, e, r) {
            return (r = t[e]) && R(r) ? t[e]() : F(r) && t.getAttribute && t.getAttribute(e) || r
        },
        gt = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        yt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        wt = function(t) {
            return Math.round(1e7 * t) / 1e7 || 0
        },
        xt = function(t, e) {
            var r = e.charAt(0),
                n = parseFloat(e.substr(2));
            return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
        },
        bt = function(t, e) {
            for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
            return n < r
        },
        Tt = function() {
            var t, e, r = ut.length,
                n = ut.slice(0);
            for (ct = {}, ut.length = 0, t = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        Ot = function(t) {
            return !!(t._initted || t._startAt || t.add)
        },
        St = function(t, e, r, n) {
            ut.length && !s && Tt(), t.render(e, r, n || !!(s && e < 0 && Ot(t))), ut.length && !s && Tt()
        },
        Mt = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match($).length < 2 ? e : D(t) ? t.trim() : t
        },
        kt = function(t) {
            return t
        },
        Et = function(t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t
        },
        Ct = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        Pt = function t(e, r) {
            for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = I(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
            return e
        },
        At = function(t, e) {
            var r, n = {};
            for (r in t) r in e || (n[r] = t[r]);
            return n
        },
        Dt = function(t) {
            var e, r = t.parent || u,
                n = t.keyframes ? (e = Y(t.keyframes), function(t, r) {
                    for (var n in r) n in t || "duration" === n && e || "ease" === n || (t[n] = r[n])
                }) : Et;
            if (j(t.inherit))
                for (; r;) n(t, r.vars.defaults), r = r.parent || r._dp;
            return t
        },
        Rt = function(t, e, r, n, i) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var o, s = t[n];
            if (i)
                for (o = e[i]; s && s[i] > o;) s = s._prev;
            return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = s, e.parent = e._dp = t, e
        },
        zt = function(t, e, r, n) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var i = e._prev,
                o = e._next;
            i ? i._next = o : t[r] === e && (t[r] = o), o ? o._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
        },
        Ft = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        It = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var r = t; r;) r._dirty = 1, r = r.parent;
            return t
        },
        jt = function(t, e, r, n) {
            return t._startAt && (s ? t._startAt.revert(ot) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
        },
        Lt = function t(e) {
            return !e || e._ts && t(e.parent)
        },
        Bt = function(t) {
            return t._repeat ? Nt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Nt = function(t, e) {
            var r = Math.floor(t = wt(t / e));
            return t && r === t ? r - 1 : r
        },
        Yt = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        qt = function(t) {
            return t._end = wt(t._start + (t._tDur / Math.abs(t._ts || t._rts || S) || 0))
        },
        Ut = function(t, e) {
            var r = t._dp;
            return r && r.smoothChildTiming && t._ts && (t._start = wt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), qt(t), r._dirty || It(r, t)), t
        },
        Xt = function(t, e) {
            var r;
            if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Yt(t.rawTime(), e), (!e._dur || re(0, e.totalDuration(), r) - e._tTime > S) && e.render(r, !0)), It(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                t._zTime = -1e-8
            }
        },
        Wt = function(t, e, r, n) {
            return e.parent && Ft(e), e._start = wt((z(r) ? r : r || t !== u ? Jt(t, r, e) : t._time) + e._delay), e._end = wt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Rt(t, e, "_first", "_last", t._sort ? "_start" : 0), $t(e) || (t._recent = e), n || Xt(t, e), t._ts < 0 && Ut(t, t._tTime), t
        },
        Vt = function(t, e) {
            return (K.ScrollTrigger || tt("scrollTrigger", e)) && K.ScrollTrigger.create(e, t)
        },
        Gt = function(t, e, r, n, i) {
            return Ke(t, e, i), t._initted ? !r && t._pt && !s && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== Pe.frame ? (ut.push(t), t._lazy = [i, n], 1) : void 0 : 1
        },
        Ht = function t(e) {
            var r = e.parent;
            return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        },
        $t = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        Qt = function(t, e, r, n) {
            var i = t._repeat,
                o = wt(e) || 0,
                s = t._tTime / t._tDur;
            return s && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : wt(o * (i + 1) + t._rDelay * i) : o, s > 0 && !n && Ut(t, t._tTime = t._tDur * s), t.parent && qt(t), r || It(t.parent, t), t
        },
        Kt = function(t) {
            return t instanceof We ? It(t) : Qt(t, t._dur)
        },
        Zt = {
            _start: 0,
            endTime: nt,
            totalDuration: nt
        },
        Jt = function t(e, r, n) {
            var i, o, s, a = e.labels,
                u = e._recent || Zt,
                c = e.duration() >= O ? u.endTime(!1) : e._dur;
            return D(r) && (isNaN(r) || r in a) ? (o = r.charAt(0), s = "%" === r.substr(-1), i = r.indexOf("="), "<" === o || ">" === o ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in a || (a[r] = c), a[r]) : (o = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), s && n && (o = o / 100 * (Y(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + o : c + o)) : null == r ? c : +r
        },
        te = function(t, e, r) {
            var n, i, o = z(e[1]),
                s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
                a = e[s];
            if (o && (a.duration = e[1]), a.parent = r, t) {
                for (n = a, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = j(i.vars.inherit) && i.parent;
                a.immediateRender = j(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
            }
            return new rr(e[0], a, e[s + 1])
        },
        ee = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        re = function(t, e, r) {
            return r < t ? t : r > e ? e : r
        },
        ne = function(t, e) {
            return D(t) && (e = Q.exec(t)) ? e[1] : ""
        },
        ie = [].slice,
        oe = function(t, e) {
            return t && I(t) && "length" in t && (!e && !t.length || t.length - 1 in t && I(t[0])) && !t.nodeType && t !== c
        },
        se = function(t, e, r) {
            return a && !e && a.selector ? a.selector(t) : !D(t) || r || !f && Ae() ? Y(t) ? function(t, e, r) {
                return void 0 === r && (r = []), t.forEach(function(t) {
                    var n;
                    return D(t) && !e || oe(t, 1) ? (n = r).push.apply(n, se(t)) : r.push(t)
                }) || r
            }(t, r) : oe(t) ? ie.call(t, 0) : t ? [t] : [] : ie.call((e || h).querySelectorAll(t), 0)
        },
        ae = function(t) {
            return t = se(t)[0] || et("Invalid scope") || {},
                function(e) {
                    var r = t.current || t.nativeElement || t;
                    return se(e, r.querySelectorAll ? r : r === t ? et("Invalid scope") || h.createElement("div") : t)
                }
        },
        ue = function(t) {
            return t.sort(function() {
                return .5 - Math.random()
            })
        },
        ce = function(t) {
            if (R(t)) return t;
            var e = I(t) ? t : {
                    each: t
                },
                r = Le(e.ease),
                n = e.from || 0,
                i = parseFloat(e.base) || 0,
                o = {},
                s = n > 0 && n < 1,
                a = isNaN(n) || s,
                u = e.axis,
                c = n,
                f = n;
            return D(n) ? c = f = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[n] || 0 : !s && a && (c = n[0], f = n[1]),
                function(t, s, h) {
                    var l, p, d, _, m, v, g, y, w, x = (h || e).length,
                        b = o[x];
                    if (!b) {
                        if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, O])[1])) {
                            for (g = -O; g < (g = h[w++].getBoundingClientRect().left) && w < x;);
                            w < x && w--
                        }
                        for (b = o[x] = [], l = a ? Math.min(w, x) * c - .5 : n % w, p = w === O ? 0 : a ? x * f / w - .5 : n / w | 0, g = 0, y = O, v = 0; v < x; v++) d = v % w - l, _ = p - (v / w | 0), b[v] = m = u ? Math.abs("y" === u ? _ : d) : C(d * d + _ * _), m > g && (g = m), m < y && (y = m);
                        "random" === n && ue(b), b.max = g - y, b.min = y, b.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (w > x ? x - 1 : u ? "y" === u ? x / w : w : Math.max(w, x / w)) || 0) * ("edges" === n ? -1 : 1), b.b = x < 0 ? i - x : i, b.u = ne(e.amount || e.each) || 0, r = r && x < 0 ? Ie(r) : r
                    }
                    return x = (b[t] - b.min) / b.max || 0, wt(b.b + (r ? r(x) : x) * b.v) + b.u
                }
        },
        fe = function(t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function(r) {
                var n = wt(Math.round(parseFloat(r) / t) * t * e);
                return (n - n % 1) / e + (z(r) ? 0 : ne(r))
            }
        },
        he = function(t, e) {
            var r, n, i = Y(t);
            return !i && I(t) && (r = i = t.radius || O, t.values ? (t = se(t.values), (n = !z(t[0])) && (r *= r)) : t = fe(t.increment)), ee(e, i ? R(t) ? function(e) {
                return n = t(e), Math.abs(n - e) <= r ? n : e
            } : function(e) {
                for (var i, o, s = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = O, c = 0, f = t.length; f--;)(i = n ? (i = t[f].x - s) * i + (o = t[f].y - a) * o : Math.abs(t[f] - s)) < u && (u = i, c = f);
                return c = !r || u <= r ? t[c] : e, n || c === e || z(e) ? c : c + ne(e)
            } : fe(t))
        },
        le = function(t, e, r, n) {
            return ee(Y(t) ? !e : !0 === r ? !!(r = 0) : !n, function() {
                return Y(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
            })
        },
        pe = function(t, e, r) {
            return ee(r, function(r) {
                return t[~~e(r)]
            })
        },
        de = function(t) {
            return t.replace(q, function(t) {
                var e = t.indexOf("[") + 1,
                    r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split(U);
                return le(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5)
            })
        },
        _e = function(t, e, r, n, i) {
            var o = e - t,
                s = n - r;
            return ee(i, function(e) {
                return r + ((e - t) / o * s || 0)
            })
        },
        me = function(t, e, r) {
            var n, i, o, s = t.labels,
                a = O;
            for (n in s)(i = s[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (o = n, a = i);
            return o
        },
        ve = function(t, e, r) {
            var n, i, o, s = t.vars,
                u = s[e],
                c = a,
                f = t._ctx;
            if (u) return n = s[e + "Params"], i = s.callbackScope || t, r && ut.length && Tt(), f && (a = f), o = n ? u.apply(i, n) : u.call(i), a = c, o
        },
        ge = function(t) {
            return Ft(t), t.scrollTrigger && t.scrollTrigger.kill(!!s), t.progress() < 1 && ve(t, "onInterrupt"), t
        },
        ye = [],
        we = function(t) {
            if (t)
                if (t = !t.name && t.default || t, L() || t.headless) {
                    var e = t.name,
                        r = R(t),
                        n = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        i = {
                            init: nt,
                            render: hr,
                            add: $e,
                            kill: pr,
                            modifier: lr,
                            rawVars: 0
                        },
                        o = {
                            targetTest: 0,
                            get: 0,
                            getSetter: ar,
                            aliases: {},
                            register: 0
                        };
                    if (Ae(), t !== n) {
                        if (ft[e]) return;
                        Et(n, Et(At(t, i), o)), Ct(n.prototype, Ct(i, At(t, o))), ft[n.prop = e] = n, t.targetTest && (pt.push(n), at[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    rt(e, n), t.register && t.register(Cr, n, mr)
                } else ye.push(t)
        },
        xe = 255,
        be = {
            aqua: [0, xe, xe],
            lime: [0, xe, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, xe],
            navy: [0, 0, 128],
            white: [xe, xe, xe],
            olive: [128, 128, 0],
            yellow: [xe, xe, 0],
            orange: [xe, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [xe, 0, 0],
            pink: [xe, 192, 203],
            cyan: [0, xe, xe],
            transparent: [xe, xe, xe, 0]
        },
        Te = function(t, e, r) {
            return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * xe + .5 | 0
        },
        Oe = function(t, e, r) {
            var n, i, o, s, a, u, c, f, h, l, p = t ? z(t) ? [t >> 16, t >> 8 & xe, t & xe] : 0 : be.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), be[t]) p = be[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (n = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & xe, p & xe, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & xe, t & xe]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = l = t.match(X), e) {
                        if (~t.indexOf("=")) return p = t.match(W), r && p.length < 4 && (p[3] = 1), p
                    } else s = +p[0] % 360 / 360, a = +p[1] / 100, n = 2 * (u = +p[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a), p.length > 3 && (p[3] *= 1), p[0] = Te(s + 1 / 3, n, i), p[1] = Te(s, n, i), p[2] = Te(s - 1 / 3, n, i);
                else p = t.match(X) || be.transparent;
                p = p.map(Number)
            }
            return e && !l && (n = p[0] / xe, i = p[1] / xe, o = p[2] / xe, u = ((c = Math.max(n, i, o)) + (f = Math.min(n, i, o))) / 2, c === f ? s = a = 0 : (h = c - f, a = u > .5 ? h / (2 - c - f) : h / (c + f), s = c === n ? (i - o) / h + (i < o ? 6 : 0) : c === i ? (o - n) / h + 2 : (n - i) / h + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        Se = function(t) {
            var e = [],
                r = [],
                n = -1;
            return t.split(ke).forEach(function(t) {
                var i = t.match(V) || [];
                e.push.apply(e, i), r.push(n += i.length + 1)
            }), e.c = r, e
        },
        Me = function(t, e, r) {
            var n, i, o, s, a = "",
                u = (t + a).match(ke),
                c = e ? "hsla(" : "rgba(",
                f = 0;
            if (!u) return t;
            if (u = u.map(function(t) {
                    return (t = Oe(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                }), r && (o = Se(t), (n = r.c).join(a) !== o.c.join(a)))
                for (s = (i = t.replace(ke, "1").split(V)).length - 1; f < s; f++) a += i[f] + (~n.indexOf(f) ? u.shift() || c + "0,0,0,0)" : (o.length ? o : u.length ? u : r).shift());
            if (!i)
                for (s = (i = t.split(ke)).length - 1; f < s; f++) a += i[f] + u[f];
            return a + i[s]
        },
        ke = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in be) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Ee = /hsl[a]?\(/,
        Ce = function(t) {
            var e, r = t.join(" ");
            if (ke.lastIndex = 0, ke.test(r)) return e = Ee.test(r), t[1] = Me(t[1], e), t[0] = Me(t[0], e, Se(t[1])), !0
        },
        Pe = function() {
            var t, e, r, n, i, o, s = Date.now,
                a = 500,
                u = 33,
                p = s(),
                d = p,
                m = 1e3 / 240,
                v = m,
                g = [],
                y = function r(c) {
                    var f, h, l, _, y = s() - d,
                        w = !0 === c;
                    if ((y > a || y < 0) && (p += y - u), ((f = (l = (d += y) - p) - v) > 0 || w) && (_ = ++n.frame, i = l - 1e3 * n.time, n.time = l /= 1e3, v += f + (f >= m ? 4 : m - f), h = 1), w || (t = e(r)), h)
                        for (o = 0; o < g.length; o++) g[o](l, i, _, c)
                };
            return n = {
                time: 0,
                frame: 0,
                tick: function() {
                    y(!0)
                },
                deltaRatio: function(t) {
                    return i / (1e3 / (t || 60))
                },
                wake: function() {
                    l && (!f && L() && (c = f = window, h = c.document || {}, K.gsap = Cr, (c.gsapVersions || (c.gsapVersions = [])).push(Cr.version), J(Z || c.GreenSockGlobals || !c.gsap && c || {}), ye.forEach(we)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t && n.sleep(), e = r || function(t) {
                        return setTimeout(t, v - 1e3 * n.time + 1 | 0)
                    }, _ = 1, y(2))
                },
                sleep: function() {
                    (r ? cancelAnimationFrame : clearTimeout)(t), _ = 0, e = nt
                },
                lagSmoothing: function(t, e) {
                    a = t || 1 / 0, u = Math.min(e || 33, a)
                },
                fps: function(t) {
                    m = 1e3 / (t || 240), v = 1e3 * n.time + m
                },
                add: function(t, e, r) {
                    var i = e ? function(e, r, o, s) {
                        t(e, r, o, s), n.remove(i)
                    } : t;
                    return n.remove(t), g[r ? "unshift" : "push"](i), Ae(), i
                },
                remove: function(t, e) {
                    ~(e = g.indexOf(t)) && g.splice(e, 1) && o >= e && o--
                },
                _listeners: g
            }
        }(),
        Ae = function() {
            return !_ && Pe.wake()
        },
        De = {},
        Re = /^[\d.\-M][\d.\-,\s]/,
        ze = /["']/g,
        Fe = function(t) {
            for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++) r = o[a], e = a !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[s] = isNaN(n) ? n.replace(ze, "").trim() : +n, s = r.substr(e + 1).trim();
            return i
        },
        Ie = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        je = function t(e, r) {
            for (var n, i = e._first; i;) i instanceof We ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
        },
        Le = function(t, e) {
            return t && (R(t) ? t : De[t] || function(t) {
                var e, r, n, i, o = (t + "").split("("),
                    s = De[o[0]];
                return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Fe(o[1])] : (e = t, r = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", r), e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(Mt)) : De._CE && Re.test(t) ? De._CE("", t) : s
            }(t)) || e
        },
        Be = function(t, e, r, n) {
            void 0 === r && (r = function(t) {
                return 1 - e(1 - t)
            }), void 0 === n && (n = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var i, o = {
                easeIn: e,
                easeOut: r,
                easeInOut: n
            };
            return gt(t, function(t) {
                for (var e in De[t] = K[t] = o, De[i = t.toLowerCase()] = r, o) De[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = De[t + "." + e] = o[e]
            }), o
        },
        Ne = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        Ye = function t(e, r, n) {
            var i = r >= 1 ? r : 1,
                o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
                s = o / M * (Math.asin(1 / i) || 0),
                a = function(t) {
                    return 1 === t ? 1 : i * Math.pow(2, -10 * t) * A((t - s) * o) + 1
                },
                u = "out" === e ? a : "in" === e ? function(t) {
                    return 1 - a(1 - t)
                } : Ne(a);
            return o = M / o, u.config = function(r, n) {
                return t(e, r, n)
            }, u
        },
        qe = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var n = function(t) {
                    return t ? --t * t * ((r + 1) * t + r) + 1 : 0
                },
                i = "out" === e ? n : "in" === e ? function(t) {
                    return 1 - n(1 - t)
                } : Ne(n);
            return i.config = function(r) {
                return t(e, r)
            }, i
        };
    gt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Be(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), De.Linear.easeNone = De.none = De.Linear.easeIn, Be("Elastic", Ye("in"), Ye("out"), Ye()), m = 7.5625, y = 2 * (g = 1 / (v = 2.75)), w = 2.5 * g, Be("Bounce", function(t) {
        return 1 - x(1 - t)
    }, x = function(t) {
        return t < g ? m * t * t : t < y ? m * Math.pow(t - 1.5 / v, 2) + .75 : t < w ? m * (t -= 2.25 / v) * t + .9375 : m * Math.pow(t - 2.625 / v, 2) + .984375
    }), Be("Expo", function(t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
    }), Be("Circ", function(t) {
        return -(C(1 - t * t) - 1)
    }), Be("Sine", function(t) {
        return 1 === t ? 1 : 1 - P(t * k)
    }), Be("Back", qe("in"), qe("out"), qe()), De.SteppedEase = De.steps = K.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                n = t + (e ? 0 : 1),
                i = e ? 1 : 0;
            return function(t) {
                return ((n * re(0, .99999999, t) | 0) + i) * r
            }
        }
    }, T.ease = De["quad.out"], gt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return dt += t + "," + t + "Params,"
    });
    var Ue = function(t, e) {
            this.id = E++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : vt, this.set = e ? e.getSetter : ar
        },
        Xe = function() {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Qt(this, +t.duration, 1, 1), this.data = t.data, a && (this._ctx = a, a.data.push(this)), _ || Pe.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, Qt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (Ae(), !arguments.length) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                    for (Ut(this, t), !r._dp || r.parent || Xt(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Wt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === S || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), St(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Bt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Bt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
            }, e.iteration = function(t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Nt(this._tTime, r) + 1 : 1
            }, e.timeScale = function(t, e) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var r = this.parent && this._ts ? Yt(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(re(-Math.abs(this._delay), this.totalDuration(), r), !1 !== e), qt(this),
                    function(t) {
                        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                        return t
                    }(this)
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ae(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== S && (this._tTime -= S)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = wt(t);
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Wt(e, this, this._start - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (j(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Yt(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.revert = function(t) {
                void 0 === t && (t = st);
                var e = s;
                return s = t, Ot(this) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), s = e, this
            }, e.globalTime = function(t) {
                for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
                return !this.parent && this._sat ? this._sat.globalTime(t) : r
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Kt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, Kt(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(Jt(this, t), j(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, j(e)), this._dur || (this._zTime = -1e-8), this
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, e.isActive = function() {
                var t, e = this.parent || this._dp,
                    r = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - S))
            }, e.eventCallback = function(t, e, r) {
                var n = this.vars;
                return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
            }, e.then = function(t) {
                var e = this,
                    r = e._prom;
                return new Promise(function(n) {
                    var i = R(t) ? t : kt,
                        o = function() {
                            var t = e.then;
                            e.then = null, r && r(), R(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? o() : e._prom = o
                })
            }, e.kill = function() {
                ge(this)
            }, t
        }();
    Et(Xe.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var We = function(t) {
        function e(e, r) {
            var i;
            return void 0 === e && (e = {}), (i = t.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = j(e.sortChildren), u && Wt(e.parent || u, n(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Vt(n(i), e.scrollTrigger), i
        }
        i(e, t);
        var r = e.prototype;
        return r.to = function(t, e, r) {
            return te(0, arguments, this), this
        }, r.from = function(t, e, r) {
            return te(1, arguments, this), this
        }, r.fromTo = function(t, e, r, n) {
            return te(2, arguments, this), this
        }, r.set = function(t, e, r) {
            return e.duration = 0, e.parent = this, Dt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new rr(t, e, Jt(this, r), 1), this
        }, r.call = function(t, e, r) {
            return Wt(this, rr.delayedCall(0, t, e), r)
        }, r.staggerTo = function(t, e, r, n, i, o, s) {
            return r.duration = e, r.stagger = r.stagger || n, r.onComplete = o, r.onCompleteParams = s, r.parent = this, new rr(t, r, Jt(this, i)), this
        }, r.staggerFrom = function(t, e, r, n, i, o, s) {
            return r.runBackwards = 1, Dt(r).immediateRender = j(r.immediateRender), this.staggerTo(t, e, r, n, i, o, s)
        }, r.staggerFromTo = function(t, e, r, n, i, o, s, a) {
            return n.startAt = r, Dt(n).immediateRender = j(n.immediateRender), this.staggerTo(t, e, n, i, o, s, a)
        }, r.render = function(t, e, r) {
            var n, i, o, a, c, f, h, l, p, d, _, m, v = this._time,
                g = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur,
                w = t <= 0 ? 0 : wt(t),
                x = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (this !== u && w > g && t >= 0 && (w = g), w !== this._tTime || r || x) {
                if (v !== this._time && y && (w += this._time - v, t += this._time - v), n = w, p = this._start, f = !(l = this._ts), x && (y || (v = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (_ = this._yoyo, c = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * c + t, e, r);
                    if (n = wt(w % c), w === g ? (a = this._repeat, n = y) : ((a = ~~(d = wt(w / c))) && a === d && (n = y, a--), n > y && (n = y)), d = Nt(this._tTime, c), !v && this._tTime && d !== a && this._tTime - d * c - this._dur <= 0 && (d = a), _ && 1 & a && (n = y - n, m = 1), a !== d && !this._lock) {
                        var b = _ && 1 & d,
                            T = b === (_ && 1 & a);
                        if (a < d && (b = !b), v = b ? 0 : w % y ? y : w, this._lock = 1, this.render(v || (m ? 0 : wt(a * c)), e, !y)._lock = 0, this._tTime = w, !e && this.parent && ve(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1, d = a), v && v !== this._time || f !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (y = this._dur, g = this._tDur, T && (this._lock = 2, v = b ? y : -1e-4, this.render(v, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !f) return this;
                        je(this, m)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function(t, e, r) {
                        var n;
                        if (r > e)
                            for (n = t._first; n && n._start <= r;) {
                                if ("isPause" === n.data && n._start > e) return n;
                                n = n._next
                            } else
                                for (n = t._last; n && n._start >= r;) {
                                    if ("isPause" === n.data && n._start < e) return n;
                                    n = n._prev
                                }
                    }(this, wt(v), wt(n)), h && (w -= n - (n = h._start))), this._tTime = w, this._time = n, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, v = 0), !v && w && y && !e && !d && (ve(this, "onStart"), this._tTime !== w)) return this;
                if (n >= v && t >= 0)
                    for (i = this._first; i;) {
                        if (o = i._next, (i._act || n >= i._start) && i._ts && h !== i) {
                            if (i.parent !== this) return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !f) {
                                h = 0, o && (w += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = o
                    } else {
                        i = this._last;
                        for (var O = t < 0 ? t : n; i;) {
                            if (o = i._prev, (i._act || O <= i._end) && i._ts && h !== i) {
                                if (i.parent !== this) return this.render(t, e, r);
                                if (i.render(i._ts > 0 ? (O - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (O - i._start) * i._ts, e, r || s && Ot(i)), n !== this._time || !this._ts && !f) {
                                    h = 0, o && (w += this._zTime = O ? -1e-8 : S);
                                    break
                                }
                            }
                            i = o
                        }
                    }
                if (h && !e && (this.pause(), h.render(n >= v ? 0 : -1e-8)._zTime = n >= v ? 1 : -1, this._ts)) return this._start = p, qt(this), this.render(t, e, r);
                this._onUpdate && !e && ve(this, "onUpdate", !0), (w === g && this._tTime >= this.totalDuration() || !w && v) && (p !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || ((t || !y) && (w === g && this._ts > 0 || !w && this._ts < 0) && Ft(this, 1), e || t < 0 && !v || !w && !v && g || (ve(this, w === g && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(w < g && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, r.add = function(t, e) {
            var r = this;
            if (z(e) || (e = Jt(this, e, t)), !(t instanceof Xe)) {
                if (Y(t)) return t.forEach(function(t) {
                    return r.add(t, e)
                }), this;
                if (D(t)) return this.addLabel(t, e);
                if (!R(t)) return this;
                t = rr.delayedCall(0, t)
            }
            return this !== t ? Wt(this, t, e) : this
        }, r.getChildren = function(t, e, r, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -O);
            for (var i = [], o = this._first; o;) o._start >= n && (o instanceof rr ? e && i.push(o) : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))), o = o._next;
            return i
        }, r.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, r.remove = function(t) {
            return D(t) ? this.removeLabel(t) : R(t) ? this.killTweensOf(t) : (t.parent === this && zt(this, t), t === this._recent && (this._recent = this._last), It(this))
        }, r.totalTime = function(e, r) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = wt(Pe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(t, e) {
            return this.labels[t] = Jt(this, e), this
        }, r.removeLabel = function(t) {
            return delete this.labels[t], this
        }, r.addPause = function(t, e, r) {
            var n = rr.delayedCall(0, e || nt, r);
            return n.data = "isPause", this._hasPause = 1, Wt(this, n, Jt(this, t))
        }, r.removePause = function(t) {
            var e = this._first;
            for (t = Jt(this, t); e;) e._start === t && "isPause" === e.data && Ft(e), e = e._next
        }, r.killTweensOf = function(t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--;) Ve !== n[i] && n[i].kill(t, e);
            return this
        }, r.getTweensOf = function(t, e) {
            for (var r, n = [], i = se(t), o = this._first, s = z(e); o;) o instanceof rr ? bt(o._targets, i) && (s ? (!Ve || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r), o = o._next;
            return n
        }, r.tweenTo = function(t, e) {
            e = e || {};
            var r, n = this,
                i = Jt(n, t),
                o = e,
                s = o.startAt,
                a = o.onStart,
                u = o.onStartParams,
                c = o.immediateRender,
                f = rr.to(n, Et({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || S,
                    onStart: function() {
                        if (n.pause(), !r) {
                            var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale());
                            f._dur !== t && Qt(f, t, 0, 1).render(f._time, !0, !0), r = 1
                        }
                        a && a.apply(f, u || [])
                    }
                }, e));
            return c ? f.render(0) : f
        }, r.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, Et({
                startAt: {
                    time: Jt(this, t)
                }
            }, r))
        }, r.recent = function() {
            return this._recent
        }, r.nextLabel = function(t) {
            return void 0 === t && (t = this._time), me(this, Jt(this, t))
        }, r.previousLabel = function(t) {
            return void 0 === t && (t = this._time), me(this, Jt(this, t), 1)
        }, r.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + S)
        }, r.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            var n, i = this._first,
                o = this.labels;
            for (t = wt(t); i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
            if (e)
                for (n in o) o[n] >= r && (o[n] += t);
            return It(this)
        }, r.invalidate = function(e) {
            var r = this._first;
            for (this._lock = 0; r;) r.invalidate(e), r = r._next;
            return t.prototype.invalidate.call(this, e)
        }, r.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), It(this)
        }, r.totalDuration = function(t) {
            var e, r, n, i = 0,
                o = this,
                s = o._last,
                a = O;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
            if (o._dirty) {
                for (n = o.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (r = s._start) > a && o._sort && s._ts && !o._lock ? (o._lock = 1, Wt(o, s, r - s._delay, 1)._lock = 0) : a = r, r < 0 && s._ts && (i -= r, (!n && !o._dp || n && n.smoothChildTiming) && (o._start += wt(r / o._ts), o._time -= r, o._tTime -= r), o.shiftChildren(-r, !1, -Infinity), a = 0), s._end > i && s._ts && (i = s._end), s = e;
                Qt(o, o === u && o._time > i ? o._time : i, 1, 1), o._dirty = 0
            }
            return o._tDur
        }, e.updateRoot = function(t) {
            if (u._ts && (St(u, Yt(t, u)), p = Pe.frame), Pe.frame >= lt) {
                lt += b.autoSleep || 120;
                var e = u._first;
                if ((!e || !e._ts) && b.autoSleep && Pe._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Pe.sleep()
                }
            }
        }, e
    }(Xe);
    Et(We.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ve, Ge, He = function(t, e, r, n, i, o, s) {
            var a, u, c, f, h, l, p, d, _ = new mr(this._pt, t, e, 0, 1, fr, null, i),
                m = 0,
                v = 0;
            for (_.b = r, _.e = n, r += "", (p = ~(n += "").indexOf("random(")) && (n = de(n)), o && (o(d = [r, n], t, e), r = d[0], n = d[1]), u = r.match(G) || []; a = G.exec(n);) f = a[0], h = n.substring(m, a.index), c ? c = (c + 1) % 5 : "rgba(" === h.substr(-5) && (c = 1), f !== u[v++] && (l = parseFloat(u[v - 1]) || 0, _._pt = {
                _next: _._pt,
                p: h || 1 === v ? h : ",",
                s: l,
                c: "=" === f.charAt(1) ? xt(l, f) - l : parseFloat(f) - l,
                m: c && c < 4 ? Math.round : 0
            }, m = G.lastIndex);
            return _.c = m < n.length ? n.substring(m, n.length) : "", _.fp = s, (H.test(n) || p) && (_.e = 0), this._pt = _, _
        },
        $e = function(t, e, r, n, i, o, s, a, u, c) {
            R(n) && (n = n(i || 0, t, o));
            var f, h = t[e],
                l = "get" !== r ? r : R(h) ? u ? t[e.indexOf("set") || !R(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h,
                p = R(h) ? u ? or : ir : nr;
            if (D(n) && (~n.indexOf("random(") && (n = de(n)), "=" === n.charAt(1) && ((f = xt(l, n) + (ne(l) || 0)) || 0 === f) && (n = f)), !c || l !== n || Ge) return isNaN(l * n) || "" === n ? (!h && !(e in t) && tt(e, n), He.call(this, t, e, l, n, p, a || b.stringFilter, u)) : (f = new mr(this._pt, t, e, +l || 0, n - (l || 0), "boolean" == typeof h ? cr : ur, 0, p), u && (f.fp = u), s && f.modifier(s, this, t), this._pt = f)
        },
        Qe = function(t, e, r, n, i, o) {
            var s, a, u, c;
            if (ft[t] && !1 !== (s = new ft[t]).init(i, s.rawVars ? e[t] : function(t, e, r, n, i) {
                    if (R(t) && (t = Je(t, i, e, r, n)), !I(t) || t.style && t.nodeType || Y(t) || N(t)) return D(t) ? Je(t, i, e, r, n) : t;
                    var o, s = {};
                    for (o in t) s[o] = Je(t[o], i, e, r, n);
                    return s
                }(e[t], n, i, o, r), r, n, o) && (r._pt = a = new mr(r._pt, i, t, 0, 1, s.render, s, 0, s.priority), r !== d))
                for (u = r._ptLookup[r._targets.indexOf(i)], c = s._props.length; c--;) u[s._props[c]] = a;
            return s
        },
        Ke = function t(e, r, n) {
            var i, a, c, f, h, l, p, d, _, m, v, g, y, w = e.vars,
                x = w.ease,
                b = w.startAt,
                M = w.immediateRender,
                k = w.lazy,
                E = w.onUpdate,
                C = w.runBackwards,
                P = w.yoyoEase,
                A = w.keyframes,
                D = w.autoRevert,
                R = e._dur,
                z = e._startAt,
                F = e._targets,
                I = e.parent,
                L = I && "nested" === I.data ? I.vars.targets : F,
                B = "auto" === e._overwrite && !o,
                N = e.timeline;
            if (N && (!A || !x) && (x = "none"), e._ease = Le(x, T.ease), e._yEase = P ? Ie(Le(!0 === P ? x : P, T.ease)) : 0, P && e._yoyo && !e._repeat && (P = e._yEase, e._yEase = e._ease, e._ease = P), e._from = !N && !!w.runBackwards, !N || A && !w.stagger) {
                if (g = (d = F[0] ? mt(F[0]).harness : 0) && w[d.prop], i = At(w, at), z && (z._zTime < 0 && z.progress(1), r < 0 && C && M && !D ? z.render(-1, !0) : z.revert(C && R ? ot : it), z._lazy = 0), b) {
                    if (Ft(e._startAt = rr.set(F, Et({
                            data: "isStart",
                            overwrite: !1,
                            parent: I,
                            immediateRender: !0,
                            lazy: !z && j(k),
                            startAt: null,
                            delay: 0,
                            onUpdate: E && function() {
                                return ve(e, "onUpdate")
                            },
                            stagger: 0
                        }, b))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (s || !M && !D) && e._startAt.revert(ot), M && R && r <= 0 && n <= 0) return void(r && (e._zTime = r))
                } else if (C && R && !z)
                    if (r && (M = !1), c = Et({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: M && !z && j(k),
                            immediateRender: M,
                            stagger: 0,
                            parent: I
                        }, i), g && (c[d.prop] = g), Ft(e._startAt = rr.set(F, c)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (s ? e._startAt.revert(ot) : e._startAt.render(-1, !0)), e._zTime = r, M) {
                        if (!r) return
                    } else t(e._startAt, S, S);
                for (e._pt = e._ptCache = 0, k = R && j(k) || k && !R, a = 0; a < F.length; a++) {
                    if (p = (h = F[a])._gsap || _t(F)[a]._gsap, e._ptLookup[a] = m = {}, ct[p.id] && ut.length && Tt(), v = L === F ? a : L.indexOf(h), d && !1 !== (_ = new d).init(h, g || i, e, v, L) && (e._pt = f = new mr(e._pt, h, _.name, 0, 1, _.render, _, 0, _.priority), _._props.forEach(function(t) {
                            m[t] = f
                        }), _.priority && (l = 1)), !d || g)
                        for (c in i) ft[c] && (_ = Qe(c, i, e, v, h, L)) ? _.priority && (l = 1) : m[c] = f = $e.call(e, h, c, "get", i[c], v, L, 0, w.stringFilter);
                    e._op && e._op[a] && e.kill(h, e._op[a]), B && e._pt && (Ve = e, u.killTweensOf(h, m, e.globalTime(r)), y = !e.parent, Ve = 0), e._pt && k && (ct[p.id] = 1)
                }
                l && _r(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = E, e._initted = (!e._op || e._pt) && !y, A && r <= 0 && N.render(O, !0, !0)
        },
        Ze = function(t, e, r, n) {
            var i, o, s = e.ease || n || "power1.inOut";
            if (Y(e)) o = r[t] || (r[t] = []), e.forEach(function(t, r) {
                return o.push({
                    t: r / (e.length - 1) * 100,
                    v: t,
                    e: s
                })
            });
            else
                for (i in e) o = r[i] || (r[i] = []), "ease" === i || o.push({
                    t: parseFloat(t),
                    v: e[i],
                    e: s
                })
        },
        Je = function(t, e, r, n, i) {
            return R(t) ? t.call(e, r, n, i) : D(t) && ~t.indexOf("random(") ? de(t) : t
        },
        tr = dt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        er = {};
    gt(tr + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return er[t] = 1
    });
    var rr = function(t) {
        function e(e, r, i, s) {
            var a;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var c, f, h, l, p, d, _, m, v = (a = t.call(this, s ? r : Dt(r)) || this).vars,
                g = v.duration,
                y = v.delay,
                w = v.immediateRender,
                x = v.stagger,
                T = v.overwrite,
                O = v.keyframes,
                S = v.defaults,
                M = v.scrollTrigger,
                k = v.yoyoEase,
                E = r.parent || u,
                C = (Y(e) || N(e) ? z(e[0]) : "length" in r) ? [e] : se(e);
            if (a._targets = C.length ? _t(C) : et("GSAP target " + e + " not found. https://gsap.com", !b.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = T, O || x || B(g) || B(y)) {
                if (r = a.vars, (c = a.timeline = new We({
                        data: "nested",
                        defaults: S || {},
                        targets: E && "nested" === E.data ? E.vars.targets : C
                    })).kill(), c.parent = c._dp = n(a), c._start = 0, x || B(g) || B(y)) {
                    if (l = C.length, _ = x && ce(x), I(x))
                        for (p in x) ~tr.indexOf(p) && (m || (m = {}), m[p] = x[p]);
                    for (f = 0; f < l; f++)(h = At(r, er)).stagger = 0, k && (h.yoyoEase = k), m && Ct(h, m), d = C[f], h.duration = +Je(g, n(a), f, d, C), h.delay = (+Je(y, n(a), f, d, C) || 0) - a._delay, !x && 1 === l && h.delay && (a._delay = y = h.delay, a._start += y, h.delay = 0), c.to(d, h, _ ? _(f, d, C) : 0), c._ease = De.none;
                    c.duration() ? g = y = 0 : a.timeline = 0
                } else if (O) {
                    Dt(Et(c.vars.defaults, {
                        ease: "none"
                    })), c._ease = Le(O.ease || r.ease || "none");
                    var P, A, D, R = 0;
                    if (Y(O)) O.forEach(function(t) {
                        return c.to(C, t, ">")
                    }), c.duration();
                    else {
                        for (p in h = {}, O) "ease" === p || "easeEach" === p || Ze(p, O[p], h, O.easeEach);
                        for (p in h)
                            for (P = h[p].sort(function(t, e) {
                                    return t.t - e.t
                                }), R = 0, f = 0; f < P.length; f++)(D = {
                                ease: (A = P[f]).e,
                                duration: (A.t - (f ? P[f - 1].t : 0)) / 100 * g
                            })[p] = A.v, c.to(C, D, R), R += D.duration;
                        c.duration() < g && c.to({}, {
                            duration: g - c.duration()
                        })
                    }
                }
                g || a.duration(g = c.duration())
            } else a.timeline = 0;
            return !0 !== T || o || (Ve = n(a), u.killTweensOf(C), Ve = 0), Wt(E, n(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (w || !g && !O && a._start === wt(E._time) && j(w) && Lt(n(a)) && "nested" !== E.data) && (a._tTime = -1e-8, a.render(Math.max(0, -y) || 0)), M && Vt(n(a), M), a
        }
        i(e, t);
        var r = e.prototype;
        return r.render = function(t, e, r) {
            var n, i, o, a, u, c, f, h, l, p = this._time,
                d = this._tDur,
                _ = this._dur,
                m = t < 0,
                v = t > d - S && !m ? d : t < S ? 0 : t;
            if (_) {
                if (v !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m || this._lazy) {
                    if (n = v, h = this.timeline, this._repeat) {
                        if (a = _ + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * a + t, e, r);
                        if (n = wt(v % a), v === d ? (o = this._repeat, n = _) : (o = ~~(u = wt(v / a))) && o === u ? (n = _, o--) : n > _ && (n = _), (c = this._yoyo && 1 & o) && (l = this._yEase, n = _ - n), u = Nt(this._tTime, a), n === p && !r && this._initted && o === u) return this._tTime = v, this;
                        o !== u && (h && this._yEase && je(h, c), this.vars.repeatRefresh && !c && !this._lock && n !== a && this._initted && (this._lock = r = 1, this.render(wt(a * o), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Gt(this, m ? t : n, r, e, v)) return this._tTime = 0, this;
                        if (!(p === this._time || r && this.vars.repeatRefresh && o !== u)) return this;
                        if (_ !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = v, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = f = (l || this._ease)(n / _), this._from && (this.ratio = f = 1 - f), !p && v && !e && !u && (ve(this, "onStart"), this._tTime !== v)) return this;
                    for (i = this._pt; i;) i.r(f, i.d), i = i._next;
                    h && h.render(t < 0 ? t : h._dur * h._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (m && jt(this, t, 0, r), ve(this, "onUpdate")), this._repeat && o !== u && this.vars.onRepeat && !e && this.parent && ve(this, "onRepeat"), v !== this._tDur && v || this._tTime !== v || (m && !this._onUpdate && jt(this, t, 0, !0), (t || !_) && (v === this._tDur && this._ts > 0 || !v && this._ts < 0) && Ft(this, 1), e || m && !p || !(v || p || c) || (ve(this, v === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < d && this.timeScale() > 0) && this._prom()))
                }
            } else ! function(t, e, r, n) {
                var i, o, a, u = t.ratio,
                    c = e < 0 || !e && (!t._start && Ht(t) && (t._initted || !$t(t)) || (t._ts < 0 || t._dp._ts < 0) && !$t(t)) ? 0 : 1,
                    f = t._rDelay,
                    h = 0;
                if (f && t._repeat && (h = re(0, t._tDur, e), o = Nt(h, f), t._yoyo && 1 & o && (c = 1 - c), o !== Nt(t._tTime, f) && (u = 1 - c, t.vars.repeatRefresh && t._initted && t.invalidate())), c !== u || s || n || t._zTime === S || !e && t._zTime) {
                    if (!t._initted && Gt(t, e, n, r, h)) return;
                    for (a = t._zTime, t._zTime = e || (r ? S : 0), r || (r = e && !a), t.ratio = c, t._from && (c = 1 - c), t._time = 0, t._tTime = h, i = t._pt; i;) i.r(c, i.d), i = i._next;
                    e < 0 && jt(t, e, 0, !0), t._onUpdate && !r && ve(t, "onUpdate"), h && t._repeat && !r && t.parent && ve(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === c && (c && Ft(t, 1), r || s || (ve(t, c ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, r.targets = function() {
            return this._targets
        }, r.invalidate = function(e) {
            return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, r.resetTo = function(t, e, r, n, i) {
            _ || Pe.wake(), this._ts || this.play();
            var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Ke(this, o),
                function(t, e, r, n, i, o, s, a) {
                    var u, c, f, h, l = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!l)
                        for (l = t._ptCache[e] = [], f = t._ptLookup, h = t._targets.length; h--;) {
                            if ((u = f[h][e]) && u.d && u.d._pt)
                                for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                            if (!u) return Ge = 1, t.vars[e] = "+=0", Ke(t, s), Ge = 0, a ? et(e + " not eligible for reset") : 1;
                            l.push(u)
                        }
                    for (h = l.length; h--;)(u = (c = l[h])._pt || c).s = !n && 0 !== n || i ? u.s + (n || 0) + o * u.c : n, u.c = r - u.s, c.e && (c.e = yt(r) + ne(c.e)), c.b && (c.b = u.s + ne(c.b))
                }(this, t, e, r, n, this._ease(o / this._dur), o, i) ? this.resetTo(t, e, r, n, 1) : (Ut(this, 0), this.parent || Rt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ge(this) : this.scrollTrigger && this.scrollTrigger.kill(!!s), this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Ve && !0 !== Ve.vars.overwrite)._first || ge(this), this.parent && r !== this.timeline.totalDuration() && Qt(this, this._dur * this.timeline._tDur / r, 0, 1), this
            }
            var n, i, o, a, u, c, f, h = this._targets,
                l = t ? se(t) : h,
                p = this._ptLookup,
                d = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                    for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
                    return r < 0
                }(h, l)) return "all" === e && (this._pt = 0), ge(this);
            for (n = this._op = this._op || [], "all" !== e && (D(e) && (u = {}, gt(e, function(t) {
                    return u[t] = 1
                }), e = u), e = function(t, e) {
                    var r, n, i, o, s = t[0] ? mt(t[0]).harness : 0,
                        a = s && s.aliases;
                    if (!a) return e;
                    for (n in r = Ct({}, e), a)
                        if (n in r)
                            for (i = (o = a[n].split(",")).length; i--;) r[o[i]] = r[n];
                    return r
                }(h, e)), f = h.length; f--;)
                if (~l.indexOf(h[f]))
                    for (u in i = p[f], "all" === e ? (n[f] = e, a = i, o = {}) : (o = n[f] = n[f] || {}, a = e), a)(c = i && i[u]) && ("kill" in c.d && !0 !== c.d.kill(u) || zt(this, c, "_pt"), delete i[u]), "all" !== o && (o[u] = 1);
            return this._initted && !this._pt && d && ge(this), this
        }, e.to = function(t, r) {
            return new e(t, r, arguments[2])
        }, e.from = function(t, e) {
            return te(1, arguments)
        }, e.delayedCall = function(t, r, n, i) {
            return new e(r, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i
            })
        }, e.fromTo = function(t, e, r) {
            return te(2, arguments)
        }, e.set = function(t, r) {
            return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
        }, e.killTweensOf = function(t, e, r) {
            return u.killTweensOf(t, e, r)
        }, e
    }(Xe);
    Et(rr.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), gt("staggerTo,staggerFrom,staggerFromTo", function(t) {
        rr[t] = function() {
            var e = new We,
                r = ie.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
    });
    var nr = function(t, e, r) {
            return t[e] = r
        },
        ir = function(t, e, r) {
            return t[e](r)
        },
        or = function(t, e, r, n) {
            return t[e](n.fp, r)
        },
        sr = function(t, e, r) {
            return t.setAttribute(e, r)
        },
        ar = function(t, e) {
            return R(t[e]) ? ir : F(t[e]) && t.setAttribute ? sr : nr
        },
        ur = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        cr = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        fr = function(t, e) {
            var r = e._pt,
                n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
                for (; r;) n = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + n, r = r._next;
                n += e.c
            }
            e.set(e.t, e.p, n, e)
        },
        hr = function(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        lr = function(t, e, r, n) {
            for (var i, o = this._pt; o;) i = o._next, o.p === n && o.modifier(t, e, r), o = i
        },
        pr = function(t) {
            for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? zt(this, n, "_pt") : n.dep || (e = 1), n = r;
            return !e
        },
        dr = function(t, e, r, n) {
            n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
        },
        _r = function(t) {
            for (var e, r, n, i, o = t._pt; o;) {
                for (e = o._next, r = n; r && r.pr > o.pr;) r = r._next;
                (o._prev = r ? r._prev : i) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : i = o, o = e
            }
            t._pt = n
        },
        mr = function() {
            function t(t, e, r, n, i, o, s, a, u) {
                this.t = e, this.s = n, this.c = i, this.p = r, this.r = o || ur, this.d = s || this, this.set = a || nr, this.pr = u || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, r) {
                this.mSet = this.mSet || this.set, this.set = dr, this.m = t, this.mt = r, this.tween = e
            }, t
        }();
    gt(dt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return at[t] = 1
    }), K.TweenMax = K.TweenLite = rr, K.TimelineLite = K.TimelineMax = We, u = new We({
        sortChildren: !1,
        defaults: T,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), b.stringFilter = Ce;
    var vr = [],
        gr = {},
        yr = [],
        wr = 0,
        xr = 0,
        br = function(t) {
            return (gr[t] || yr).map(function(t) {
                return t()
            })
        },
        Tr = function() {
            var t = Date.now(),
                e = [];
            t - wr > 2 && (br("matchMediaInit"), vr.forEach(function(t) {
                var r, n, i, o, s = t.queries,
                    a = t.conditions;
                for (n in s)(r = c.matchMedia(s[n]).matches) && (i = 1), r !== a[n] && (a[n] = r, o = 1);
                o && (t.revert(), i && e.push(t))
            }), br("matchMediaRevert"), e.forEach(function(t) {
                return t.onMatch(t, function(e) {
                    return t.add(null, e)
                })
            }), wr = t, br("matchMedia"))
        },
        Or = function() {
            function t(t, e) {
                this.selector = e && ae(e), this.data = [], this._r = [], this.isReverted = !1, this.id = xr++, t && this.add(t)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                R(t) && (r = e, e = t, t = R);
                var n = this,
                    i = function() {
                        var t, i = a,
                            o = n.selector;
                        return i && i !== n && i.data.push(n), r && (n.selector = ae(r)), a = n, t = e.apply(n, arguments), R(t) && n._r.push(t), a = i, n.selector = o, n.isReverted = !1, t
                    };
                return n.last = i, t === R ? i(n, function(t) {
                    return n.add(null, t)
                }) : t ? n[t] = i : i
            }, e.ignore = function(t) {
                var e = a;
                a = null, t(this), a = e
            }, e.getTweens = function() {
                var e = [];
                return this.data.forEach(function(r) {
                    return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof rr && !(r.parent && "nested" === r.parent.data) && e.push(r)
                }), e
            }, e.clear = function() {
                this._r.length = this.data.length = 0
            }, e.kill = function(t, e) {
                var r = this;
                if (t ? function() {
                        for (var e, n = r.getTweens(), i = r.data.length; i--;) "isFlip" === (e = r.data[i]).data && (e.revert(), e.getChildren(!0, !0, !1).forEach(function(t) {
                            return n.splice(n.indexOf(t), 1)
                        }));
                        for (n.map(function(t) {
                                return {
                                    g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                                    t: t
                                }
                            }).sort(function(t, e) {
                                return e.g - t.g || -1 / 0
                            }).forEach(function(e) {
                                return e.t.revert(t)
                            }), i = r.data.length; i--;)(e = r.data[i]) instanceof We ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof rr) && e.revert && e.revert(t);
                        r._r.forEach(function(e) {
                            return e(t, r)
                        }), r.isReverted = !0
                    }() : this.data.forEach(function(t) {
                        return t.kill && t.kill()
                    }), this.clear(), e)
                    for (var n = vr.length; n--;) vr[n].id === this.id && vr.splice(n, 1)
            }, e.revert = function(t) {
                this.kill(t || {})
            }, t
        }(),
        Sr = function() {
            function t(t) {
                this.contexts = [], this.scope = t, a && a.data.push(this)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                I(t) || (t = {
                    matches: t
                });
                var n, i, o, s = new Or(0, r || this.scope),
                    u = s.conditions = {};
                for (i in a && !s.selector && (s.selector = a.selector), this.contexts.push(s), e = s.add("onMatch", e), s.queries = t, t) "all" === i ? o = 1 : (n = c.matchMedia(t[i])) && (vr.indexOf(s) < 0 && vr.push(s), (u[i] = n.matches) && (o = 1), n.addListener ? n.addListener(Tr) : n.addEventListener("change", Tr));
                return o && e(s, function(t) {
                    return s.add(null, t)
                }), this
            }, e.revert = function(t) {
                this.kill(t || {})
            }, e.kill = function(t) {
                this.contexts.forEach(function(e) {
                    return e.kill(t, !0)
                })
            }, t
        }(),
        Mr = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                e.forEach(function(t) {
                    return we(t)
                })
            },
            timeline: function(t) {
                return new We(t)
            },
            getTweensOf: function(t, e) {
                return u.getTweensOf(t, e)
            },
            getProperty: function(t, e, r, n) {
                D(t) && (t = se(t)[0]);
                var i = mt(t || {}).get,
                    o = r ? kt : Mt;
                return "native" === r && (r = ""), t ? e ? o((ft[e] && ft[e].get || i)(t, e, r, n)) : function(e, r, n) {
                    return o((ft[e] && ft[e].get || i)(t, e, r, n))
                } : t
            },
            quickSetter: function(t, e, r) {
                if ((t = se(t)).length > 1) {
                    var n = t.map(function(t) {
                            return Cr.quickSetter(t, e, r)
                        }),
                        i = n.length;
                    return function(t) {
                        for (var e = i; e--;) n[e](t)
                    }
                }
                t = t[0] || {};
                var o = ft[e],
                    s = mt(t),
                    a = s.harness && (s.harness.aliases || {})[e] || e,
                    u = o ? function(e) {
                        var n = new o;
                        d._pt = 0, n.init(t, r ? e + r : e, d, 0, [t]), n.render(1, n), d._pt && hr(1, d)
                    } : s.set(t, a);
                return o ? u : function(e) {
                    return u(t, a, r ? e + r : e, s, 1)
                }
            },
            quickTo: function(t, e, r) {
                var n, i = Cr.to(t, Et(((n = {})[e] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})),
                    o = function(t, r, n) {
                        return i.resetTo(e, t, r, n)
                    };
                return o.tween = i, o
            },
            isTweening: function(t) {
                return u.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Le(t.ease, T.ease)), Pt(T, t || {})
            },
            config: function(t) {
                return Pt(b, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    r = t.effect,
                    n = t.plugins,
                    i = t.defaults,
                    o = t.extendTimeline;
                (n || "").split(",").forEach(function(t) {
                    return t && !ft[t] && !K[t] && et(e + " effect requires " + t + " plugin.")
                }), ht[e] = function(t, e, n) {
                    return r(se(t), Et(e || {}, i), n)
                }, o && (We.prototype[e] = function(t, r, n) {
                    return this.add(ht[e](t, I(r) ? r : (n = r) && {}, this), n)
                })
            },
            registerEase: function(t, e) {
                De[t] = Le(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Le(t, e) : De
            },
            getById: function(t) {
                return u.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var r, n, i = new We(t);
                for (i.smoothChildTiming = j(t.smoothChildTiming), u.remove(i), i._dp = 0, i._time = i._tTime = u._time, r = u._first; r;) n = r._next, !e && !r._dur && r instanceof rr && r.vars.onComplete === r._targets[0] || Wt(i, r, r._start - r._delay), r = n;
                return Wt(u, i, 0), i
            },
            context: function(t, e) {
                return t ? new Or(t, e) : a
            },
            matchMedia: function(t) {
                return new Sr(t)
            },
            matchMediaRefresh: function() {
                return vr.forEach(function(t) {
                    var e, r, n = t.conditions;
                    for (r in n) n[r] && (n[r] = !1, e = 1);
                    e && t.revert()
                }) || Tr()
            },
            addEventListener: function(t, e) {
                var r = gr[t] || (gr[t] = []);
                ~r.indexOf(e) || r.push(e)
            },
            removeEventListener: function(t, e) {
                var r = gr[t],
                    n = r && r.indexOf(e);
                n >= 0 && r.splice(n, 1)
            },
            utils: {
                wrap: function t(e, r, n) {
                    var i = r - e;
                    return Y(e) ? pe(e, t(0, e.length), r) : ee(n, function(t) {
                        return (i + (t - e) % i) % i + e
                    })
                },
                wrapYoyo: function t(e, r, n) {
                    var i = r - e,
                        o = 2 * i;
                    return Y(e) ? pe(e, t(0, e.length - 1), r) : ee(n, function(t) {
                        return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
                    })
                },
                distribute: ce,
                random: le,
                snap: he,
                normalize: function(t, e, r) {
                    return _e(t, e, 0, 1, r)
                },
                getUnit: ne,
                clamp: function(t, e, r) {
                    return ee(r, function(r) {
                        return re(t, e, r)
                    })
                },
                splitColor: Oe,
                toArray: se,
                selector: ae,
                mapRange: _e,
                pipe: function() {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return function(t) {
                        return e.reduce(function(t, e) {
                            return e(t)
                        }, t)
                    }
                },
                unitize: function(t, e) {
                    return function(r) {
                        return t(parseFloat(r)) + (e || ne(r))
                    }
                },
                interpolate: function t(e, r, n, i) {
                    var o = isNaN(e + r) ? 0 : function(t) {
                        return (1 - t) * e + t * r
                    };
                    if (!o) {
                        var s, a, u, c, f, h = D(e),
                            l = {};
                        if (!0 === n && (i = 1) && (n = null), h) e = {
                            p: e
                        }, r = {
                            p: r
                        };
                        else if (Y(e) && !Y(r)) {
                            for (u = [], c = e.length, f = c - 2, a = 1; a < c; a++) u.push(t(e[a - 1], e[a]));
                            c--, o = function(t) {
                                t *= c;
                                var e = Math.min(f, ~~t);
                                return u[e](t - e)
                            }, n = r
                        } else i || (e = Ct(Y(e) ? [] : {}, e));
                        if (!u) {
                            for (s in r) $e.call(l, e, s, "get", r[s]);
                            o = function(t) {
                                return hr(t, l) || (h ? e.p : e)
                            }
                        }
                    }
                    return ee(n, o)
                },
                shuffle: ue
            },
            install: J,
            effects: ht,
            ticker: Pe,
            updateRoot: We.updateRoot,
            plugins: ft,
            globalTimeline: u,
            core: {
                PropTween: mr,
                globals: rt,
                Tween: rr,
                Timeline: We,
                Animation: Xe,
                getCache: mt,
                _removeLinkedListItem: zt,
                reverting: function() {
                    return s
                },
                context: function(t) {
                    return t && a && (a.data.push(t), t._ctx = a), a
                },
                suppressOverwrites: function(t) {
                    return o = t
                }
            }
        };
    gt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return Mr[t] = rr[t]
    }), Pe.add(We.updateRoot), d = Mr.to({}, {
        duration: 0
    });
    var kr = function(t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
            return r
        },
        Er = function(t, e) {
            return {
                name: t,
                headless: 1,
                rawVars: 1,
                init: function(t, r, n) {
                    n._onInit = function(t) {
                        var n, i;
                        if (D(r) && (n = {}, gt(r, function(t) {
                                return n[t] = 1
                            }), r = n), e) {
                            for (i in n = {}, r) n[i] = e(r[i]);
                            r = n
                        }! function(t, e) {
                            var r, n, i, o = t._targets;
                            for (r in e)
                                for (n = o.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = kr(i, r)), i && i.modifier && i.modifier(e[r], t, o[n], r))
                        }(t, r)
                    }
                }
            }
        },
        Cr = Mr.registerPlugin({
            name: "attr",
            init: function(t, e, r, n, i) {
                var o, s, a;
                for (o in this.tween = r, e) a = t.getAttribute(o) || "", (s = this.add(t, "setAttribute", (a || 0) + "", e[o], n, i, 0, 0, o)).op = o, s.b = a, this._props.push(o)
            },
            render: function(t, e) {
                for (var r = e._pt; r;) s ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
            }
        }, {
            name: "endArray",
            headless: 1,
            init: function(t, e) {
                for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
            }
        }, Er("roundProps", fe), Er("modifiers"), Er("snap", he)) || Mr;
    rr.version = We.version = Cr.version = "3.14.2", l = 1, L() && Ae(), De.Power0, De.Power1, De.Power2, De.Power3, De.Power4, De.Linear, De.Quad, De.Cubic, De.Quart, De.Quint, De.Strong, De.Elastic, De.Back, De.SteppedEase, De.Bounce, De.Sine, De.Expo, De.Circ;
    var Pr, Ar, Dr, Rr, zr, Fr, Ir, jr, Lr = {},
        Br = 180 / Math.PI,
        Nr = Math.PI / 180,
        Yr = Math.atan2,
        qr = /([A-Z])/g,
        Ur = /(left|right|width|margin|padding|x)/i,
        Xr = /[\s,\(]\S/,
        Wr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Vr = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Gr = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Hr = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        $r = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Qr = function(t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        },
        Kr = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Zr = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Jr = function(t, e, r) {
            return t.style[e] = r
        },
        tn = function(t, e, r) {
            return t.style.setProperty(e, r)
        },
        en = function(t, e, r) {
            return t._gsap[e] = r
        },
        rn = function(t, e, r) {
            return t._gsap.scaleX = t._gsap.scaleY = r
        },
        nn = function(t, e, r, n, i) {
            var o = t._gsap;
            o.scaleX = o.scaleY = r, o.renderTransform(i, o)
        },
        on = function(t, e, r, n, i) {
            var o = t._gsap;
            o[e] = r, o.renderTransform(i, o)
        },
        sn = "transform",
        an = sn + "Origin",
        un = function t(e, r) {
            var n = this,
                i = this.target,
                o = i.style,
                s = i._gsap;
            if (e in Lr && o) {
                if (this.tfm = this.tfm || {}, "transform" === e) return Wr.transform.split(",").forEach(function(e) {
                    return t.call(n, e, r)
                });
                if (~(e = Wr[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                        return n.tfm[t] = Mn(i, t)
                    }) : this.tfm[e] = s.x ? s[e] : Mn(i, e), e === an && (this.tfm.zOrigin = s.zOrigin), this.props.indexOf(sn) >= 0) return;
                s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(an, r, "")), e = sn
            }(o || r) && this.props.push(e, r, o[e])
        },
        cn = function(t) {
            t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        fn = function() {
            var t, e, r = this.props,
                n = this.target,
                i = n.style,
                o = n._gsap;
            for (t = 0; t < r.length; t += 3) r[t + 1] ? 2 === r[t + 1] ? n[r[t]](r[t + 2]) : n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(qr, "-$1").toLowerCase());
            if (this.tfm) {
                for (e in this.tfm) o[e] = this.tfm[e];
                o.svg && (o.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (t = Ir()) && t.isStart || i[sn] || (cn(i), o.zOrigin && i[an] && (i[an] += " " + o.zOrigin + "px", o.zOrigin = 0, o.renderTransform()), o.uncache = 1)
            }
        },
        hn = function(t, e) {
            var r = {
                target: t,
                props: [],
                revert: fn,
                save: un
            };
            return t._gsap || Cr.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(t) {
                return r.save(t)
            }), r
        },
        ln = function(t, e) {
            var r = Ar.createElementNS ? Ar.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ar.createElement(t);
            return r && r.style ? r : Ar.createElement(t)
        },
        pn = function t(e, r, n) {
            var i = getComputedStyle(e);
            return i[r] || i.getPropertyValue(r.replace(qr, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, _n(r) || r, 1) || ""
        },
        dn = "O,Moz,ms,Ms,Webkit".split(","),
        _n = function(t, e, r) {
            var n = (e || zr).style,
                i = 5;
            if (t in n && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(dn[i] + t in n););
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? dn[i] : "") + t
        },
        mn = function() {
            "undefined" != typeof window && window.document && (Pr = window, Ar = Pr.document, Dr = Ar.documentElement, zr = ln("div") || {
                style: {}
            }, ln("div"), sn = _n(sn), an = sn + "Origin", zr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", jr = !!_n("perspective"), Ir = Cr.core.reverting, Rr = 1)
        },
        vn = function(t) {
            var e, r = t.ownerSVGElement,
                n = ln("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = t.cloneNode(!0);
            i.style.display = "block", n.appendChild(i), Dr.appendChild(n);
            try {
                e = i.getBBox()
            } catch (t) {}
            return n.removeChild(i), Dr.removeChild(n), e
        },
        gn = function(t, e) {
            for (var r = e.length; r--;)
                if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        yn = function(t) {
            var e, r;
            try {
                e = t.getBBox()
            } catch (n) {
                e = vn(t), r = 1
            }
            return e && (e.width || e.height) || r || (e = vn(t)), !e || e.width || e.x || e.y ? e : {
                x: +gn(t, ["x", "cx", "x1"]) || 0,
                y: +gn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        wn = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !yn(t))
        },
        xn = function(t, e) {
            if (e) {
                var r, n = t.style;
                e in Lr && e !== an && (e = sn), n.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty("--" === r ? e : e.replace(qr, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        bn = function(t, e, r, n, i, o) {
            var s = new mr(t._pt, e, r, 0, 1, o ? Zr : Kr);
            return t._pt = s, s.b = n, s.e = i, t._props.push(r), s
        },
        Tn = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        On = {
            grid: 1,
            flex: 1
        },
        Sn = function t(e, r, n, i) {
            var o, s, a, u, c = parseFloat(n) || 0,
                f = (n + "").trim().substr((c + "").length) || "px",
                h = zr.style,
                l = Ur.test(r),
                p = "svg" === e.tagName.toLowerCase(),
                d = (p ? "client" : "offset") + (l ? "Width" : "Height"),
                _ = 100,
                m = "px" === i,
                v = "%" === i;
            if (i === f || !c || Tn[i] || Tn[f]) return c;
            if ("px" !== f && !m && (c = t(e, r, n, "px")), u = e.getCTM && wn(e), (v || "%" === f) && (Lr[r] || ~r.indexOf("adius"))) return o = u ? e.getBBox()[l ? "width" : "height"] : e[d], yt(v ? c / o * _ : c / 100 * o);
            if (h[l ? "width" : "height"] = _ + (m ? f : i), s = "rem" !== i && ~r.indexOf("adius") || "em" === i && e.appendChild && !p ? e : e.parentNode, u && (s = (e.ownerSVGElement || {}).parentNode), s && s !== Ar && s.appendChild || (s = Ar.body), (a = s._gsap) && v && a.width && l && a.time === Pe.time && !a.uncache) return yt(c / a.width * _);
            if (!v || "height" !== r && "width" !== r)(v || "%" === f) && !On[pn(s, "display")] && (h.position = pn(e, "position")), s === e && (h.position = "static"), s.appendChild(zr), o = zr[d], s.removeChild(zr), h.position = "absolute";
            else {
                var g = e.style[r];
                e.style[r] = _ + i, o = e[d], g ? e.style[r] = g : xn(e, r)
            }
            return l && v && ((a = mt(s)).time = Pe.time, a.width = s[d]), yt(m ? o * c / _ : o && c ? _ / o * c : 0)
        },
        Mn = function(t, e, r, n) {
            var i;
            return Rr || mn(), e in Wr && "transform" !== e && ~(e = Wr[e]).indexOf(",") && (e = e.split(",")[0]), Lr[e] && "transform" !== e ? (i = Ln(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Bn(pn(t, an)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = An[e] && An[e](t, e, r) || pn(t, e) || vt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? Sn(t, e, i, r) + r : i
        },
        kn = function(t, e, r, n) {
            if (!r || "none" === r) {
                var i = _n(e, t, 1),
                    o = i && pn(t, i, 1);
                o && o !== r ? (e = i, r = o) : "borderColor" === e && (r = pn(t, "borderTopColor"))
            }
            var s, a, u, c, f, h, l, p, d, _, m, v = new mr(this._pt, t.style, e, 0, 1, fr),
                g = 0,
                y = 0;
            if (v.b = r, v.e = n, r += "", "var(--" === (n += "").substring(0, 6) && (n = pn(t, n.substring(4, n.indexOf(")")))), "auto" === n && (h = t.style[e], t.style[e] = n, n = pn(t, e) || n, h ? t.style[e] = h : xn(t, e)), Ce(s = [r, n]), n = s[1], u = (r = s[0]).match(V) || [], (n.match(V) || []).length) {
                for (; a = V.exec(n);) l = a[0], d = n.substring(g, a.index), f ? f = (f + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (f = 1), l !== (h = u[y++] || "") && (c = parseFloat(h) || 0, m = h.substr((c + "").length), "=" === l.charAt(1) && (l = xt(c, l) + m), p = parseFloat(l), _ = l.substr((p + "").length), g = V.lastIndex - _.length, _ || (_ = _ || b.units[e] || m, g === n.length && (n += _, v.e += _)), m !== _ && (c = Sn(t, e, h, _) || 0), v._pt = {
                    _next: v._pt,
                    p: d || 1 === y ? d : ",",
                    s: c,
                    c: p - c,
                    m: f && f < 4 || "zIndex" === e ? Math.round : 0
                });
                v.c = g < n.length ? n.substring(g, n.length) : ""
            } else v.r = "display" === e && "none" === n ? Zr : Kr;
            return H.test(n) && (v.e = 0), this._pt = v, v
        },
        En = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Cn = function(t) {
            var e = t.split(" "),
                r = e[0],
                n = e[1] || "50%";
            return "top" !== r && "bottom" !== r && "left" !== n && "right" !== n || (t = r, r = n, n = t), e[0] = En[r] || r, e[1] = En[n] || n, e.join(" ")
        },
        Pn = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var r, n, i, o = e.t,
                    s = o.style,
                    a = e.u,
                    u = o._gsap;
                if ("all" === a || !0 === a) s.cssText = "", n = 1;
                else
                    for (i = (a = a.split(",")).length; --i > -1;) r = a[i], Lr[r] && (n = 1, r = "transformOrigin" === r ? an : sn), xn(o, r);
                n && (xn(o, sn), u && (u.svg && o.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", Ln(o, 1), u.uncache = 1, cn(s)))
            }
        },
        An = {
            clearProps: function(t, e, r, n, i) {
                if ("isFromStart" !== i.data) {
                    var o = t._pt = new mr(t._pt, e, r, 0, 0, Pn);
                    return o.u = n, o.pr = -10, o.tween = i, t._props.push(r), 1
                }
            }
        },
        Dn = [1, 0, 0, 1, 0, 0],
        Rn = {},
        zn = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        Fn = function(t) {
            var e = pn(t, sn);
            return zn(e) ? Dn : e.substr(7).match(W).map(yt)
        },
        In = function(t, e) {
            var r, n, i, o, s = t._gsap || mt(t),
                a = t.style,
                u = Fn(t);
            return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Dn : u : (u !== Dn || t.offsetParent || t === Dr || s.svg || (i = a.display, a.display = "block", (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (o = 1, n = t.nextElementSibling, Dr.appendChild(t)), u = Fn(t), i ? a.display = i : xn(t, "display"), o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : Dr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        jn = function(t, e, r, n, i, o) {
            var s, a, u, c = t._gsap,
                f = i || In(t, !0),
                h = c.xOrigin || 0,
                l = c.yOrigin || 0,
                p = c.xOffset || 0,
                d = c.yOffset || 0,
                _ = f[0],
                m = f[1],
                v = f[2],
                g = f[3],
                y = f[4],
                w = f[5],
                x = e.split(" "),
                b = parseFloat(x[0]) || 0,
                T = parseFloat(x[1]) || 0;
            r ? f !== Dn && (a = _ * g - m * v) && (u = b * (-m / a) + T * (_ / a) - (_ * w - m * y) / a, b = b * (g / a) + T * (-v / a) + (v * w - g * y) / a, T = u) : (b = (s = yn(t)).x + (~x[0].indexOf("%") ? b / 100 * s.width : b), T = s.y + (~(x[1] || x[0]).indexOf("%") ? T / 100 * s.height : T)), n || !1 !== n && c.smooth ? (y = b - h, w = T - l, c.xOffset = p + (y * _ + w * v) - y, c.yOffset = d + (y * m + w * g) - w) : c.xOffset = c.yOffset = 0, c.xOrigin = b, c.yOrigin = T, c.smooth = !!n, c.origin = e, c.originIsAbsolute = !!r, t.style[an] = "0px 0px", o && (bn(o, c, "xOrigin", h, b), bn(o, c, "yOrigin", l, T), bn(o, c, "xOffset", p, c.xOffset), bn(o, c, "yOffset", d, c.yOffset)), t.setAttribute("data-svg-origin", b + " " + T)
        },
        Ln = function(t, e) {
            var r = t._gsap || new Ue(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n, i, o, s, a, u, c, f, h, l, p, d, _, m, v, g, y, w, x, T, O, S, M, k, E, C, P, A, D, R, z, F, I = t.style,
                j = r.scaleX < 0,
                L = "px",
                B = "deg",
                N = getComputedStyle(t),
                Y = pn(t, an) || "0";
            return n = i = o = u = c = f = h = l = p = 0, s = a = 1, r.svg = !(!t.getCTM || !wn(t)), N.translate && ("none" === N.translate && "none" === N.scale && "none" === N.rotate || (I[sn] = ("none" !== N.translate ? "translate3d(" + (N.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== N.rotate ? "rotate(" + N.rotate + ") " : "") + ("none" !== N.scale ? "scale(" + N.scale.split(" ").join(",") + ") " : "") + ("none" !== N[sn] ? N[sn] : "")), I.scale = I.rotate = I.translate = "none"), m = In(t, r.svg), r.svg && (r.uncache ? (E = t.getBBox(), Y = r.xOrigin - E.x + "px " + (r.yOrigin - E.y) + "px", k = "") : k = !e && t.getAttribute("data-svg-origin"), jn(t, k || Y, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), d = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Dn && (w = m[0], x = m[1], T = m[2], O = m[3], n = S = m[4], i = M = m[5], 6 === m.length ? (s = Math.sqrt(w * w + x * x), a = Math.sqrt(O * O + T * T), u = w || x ? Yr(x, w) * Br : 0, (h = T || O ? Yr(T, O) * Br + u : 0) && (a *= Math.abs(Math.cos(h * Nr))), r.svg && (n -= d - (d * w + _ * T), i -= _ - (d * x + _ * O))) : (F = m[6], R = m[7], P = m[8], A = m[9], D = m[10], z = m[11], n = m[12], i = m[13], o = m[14], c = (v = Yr(F, D)) * Br, v && (k = S * (g = Math.cos(-v)) + P * (y = Math.sin(-v)), E = M * g + A * y, C = F * g + D * y, P = S * -y + P * g, A = M * -y + A * g, D = F * -y + D * g, z = R * -y + z * g, S = k, M = E, F = C), f = (v = Yr(-T, D)) * Br, v && (g = Math.cos(-v), z = O * (y = Math.sin(-v)) + z * g, w = k = w * g - P * y, x = E = x * g - A * y, T = C = T * g - D * y), u = (v = Yr(x, w)) * Br, v && (k = w * (g = Math.cos(v)) + x * (y = Math.sin(v)), E = S * g + M * y, x = x * g - w * y, M = M * g - S * y, w = k, S = E), c && Math.abs(c) + Math.abs(u) > 359.9 && (c = u = 0, f = 180 - f), s = yt(Math.sqrt(w * w + x * x + T * T)), a = yt(Math.sqrt(M * M + F * F)), v = Yr(S, M), h = Math.abs(v) > 2e-4 ? v * Br : 0, p = z ? 1 / (z < 0 ? -z : z) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !zn(pn(t, sn)), k && t.setAttribute("transform", k))), Math.abs(h) > 90 && Math.abs(h) < 270 && (j ? (s *= -1, h += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, h += h <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + L, r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + L, r.z = o + L, r.scaleX = yt(s), r.scaleY = yt(a), r.rotation = yt(u) + B, r.rotationX = yt(c) + B, r.rotationY = yt(f) + B, r.skewX = h + B, r.skewY = l + B, r.transformPerspective = p + L, (r.zOrigin = parseFloat(Y.split(" ")[2]) || !e && r.zOrigin || 0) && (I[an] = Bn(Y)), r.xOffset = r.yOffset = 0, r.force3D = b.force3D, r.renderTransform = r.svg ? Vn : jr ? Wn : Yn, r.uncache = 0, r
        },
        Bn = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Nn = function(t, e, r) {
            var n = ne(e);
            return yt(parseFloat(e) + parseFloat(Sn(t, "x", r + "px", n))) + n
        },
        Yn = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Wn(t, e)
        },
        qn = "0deg",
        Un = "0px",
        Xn = ") ",
        Wn = function(t, e) {
            var r = e || this,
                n = r.xPercent,
                i = r.yPercent,
                o = r.x,
                s = r.y,
                a = r.z,
                u = r.rotation,
                c = r.rotationY,
                f = r.rotationX,
                h = r.skewX,
                l = r.skewY,
                p = r.scaleX,
                d = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                v = r.target,
                g = r.zOrigin,
                y = "",
                w = "auto" === m && t && 1 !== t || !0 === m;
            if (g && (f !== qn || c !== qn)) {
                var x, b = parseFloat(c) * Nr,
                    T = Math.sin(b),
                    O = Math.cos(b);
                b = parseFloat(f) * Nr, x = Math.cos(b), o = Nn(v, o, T * x * -g), s = Nn(v, s, -Math.sin(b) * -g), a = Nn(v, a, O * x * -g + g)
            }
            _ !== Un && (y += "perspective(" + _ + Xn), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), (w || o !== Un || s !== Un || a !== Un) && (y += a !== Un || w ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + Xn), u !== qn && (y += "rotate(" + u + Xn), c !== qn && (y += "rotateY(" + c + Xn), f !== qn && (y += "rotateX(" + f + Xn), h === qn && l === qn || (y += "skew(" + h + ", " + l + Xn), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + Xn), v.style[sn] = y || "translate(0, 0)"
        },
        Vn = function(t, e) {
            var r, n, i, o, s, a = e || this,
                u = a.xPercent,
                c = a.yPercent,
                f = a.x,
                h = a.y,
                l = a.rotation,
                p = a.skewX,
                d = a.skewY,
                _ = a.scaleX,
                m = a.scaleY,
                v = a.target,
                g = a.xOrigin,
                y = a.yOrigin,
                w = a.xOffset,
                x = a.yOffset,
                b = a.forceCSS,
                T = parseFloat(f),
                O = parseFloat(h);
            l = parseFloat(l), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), l += d), l || p ? (l *= Nr, p *= Nr, r = Math.cos(l) * _, n = Math.sin(l) * _, i = Math.sin(l - p) * -m, o = Math.cos(l - p) * m, p && (d *= Nr, s = Math.tan(p - d), i *= s = Math.sqrt(1 + s * s), o *= s, d && (s = Math.tan(d), r *= s = Math.sqrt(1 + s * s), n *= s)), r = yt(r), n = yt(n), i = yt(i), o = yt(o)) : (r = _, o = m, n = i = 0), (T && !~(f + "").indexOf("px") || O && !~(h + "").indexOf("px")) && (T = Sn(v, "x", f, "px"), O = Sn(v, "y", h, "px")), (g || y || w || x) && (T = yt(T + g - (g * r + y * i) + w), O = yt(O + y - (g * n + y * o) + x)), (u || c) && (s = v.getBBox(), T = yt(T + u / 100 * s.width), O = yt(O + c / 100 * s.height)), s = "matrix(" + r + "," + n + "," + i + "," + o + "," + T + "," + O + ")", v.setAttribute("transform", s), b && (v.style[sn] = s)
        },
        Gn = function(t, e, r, n, i) {
            var o, s, a = 360,
                u = D(i),
                c = parseFloat(i) * (u && ~i.indexOf("rad") ? Br : 1) - n,
                f = n + c + "deg";
            return u && ("short" === (o = i.split("_")[1]) && (c %= a) !== c % 180 && (c += c < 0 ? a : -360), "cw" === o && c < 0 ? c = (c + 36e9) % a - ~~(c / a) * a : "ccw" === o && c > 0 && (c = (c - 36e9) % a - ~~(c / a) * a)), t._pt = s = new mr(t._pt, e, r, n, c, Gr), s.e = f, s.u = "deg", t._props.push(r), s
        },
        Hn = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        $n = function(t, e, r) {
            var n, i, o, s, a, u, c, f = Hn({}, r._gsap),
                h = r.style;
            for (i in f.svg ? (o = r.getAttribute("transform"), r.setAttribute("transform", ""), h[sn] = e, n = Ln(r, 1), xn(r, sn), r.setAttribute("transform", o)) : (o = getComputedStyle(r)[sn], h[sn] = e, n = Ln(r, 1), h[sn] = o), Lr)(o = f[i]) !== (s = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = ne(o) !== (c = ne(s)) ? Sn(r, i, o, c) : parseFloat(o), u = parseFloat(s), t._pt = new mr(t._pt, n, i, a, u - a, Vr), t._pt.u = c || 0, t._props.push(i));
            Hn(n, f)
        };
    gt("padding,margin,Width,Radius", function(t, e) {
        var r = "Top",
            n = "Right",
            i = "Bottom",
            o = "Left",
            s = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map(function(r) {
                return e < 2 ? t + r : "border" + r + t
            });
        An[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
            var o, a;
            if (arguments.length < 4) return o = s.map(function(e) {
                return Mn(t, e, r)
            }), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
            o = (n + "").split(" "), a = {}, s.forEach(function(t, e) {
                return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            }), t.init(e, a, i)
        }
    });
    var Qn, Kn, Zn = {
        name: "css",
        register: mn,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, n, i) {
            var o, s, a, u, c, f, h, l, p, d, _, m, v, g, y, w, x, T = this._props,
                O = t.style,
                S = r.vars.startAt;
            for (h in Rr || mn(), this.styles = this.styles || hn(t), w = this.styles.props, this.tween = r, e)
                if ("autoRound" !== h && (s = e[h], !ft[h] || !Qe(h, e, r, n, t, i)))
                    if (c = typeof s, f = An[h], "function" === c && (c = typeof(s = s.call(r, n, t, i))), "string" === c && ~s.indexOf("random(") && (s = de(s)), f) f(this, t, h, s, r) && (y = 1);
                    else if ("--" === h.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(h) + "").trim(), s += "", ke.lastIndex = 0, ke.test(o) || (l = ne(o), (p = ne(s)) ? l !== p && (o = Sn(t, h, o, p) + p) : l && (s += l)), this.add(O, "setProperty", o, s, n, i, 0, 0, h), T.push(h), w.push(h, 0, O[h]);
            else if ("undefined" !== c) {
                if (S && h in S ? (o = "function" == typeof S[h] ? S[h].call(r, n, t, i) : S[h], D(o) && ~o.indexOf("random(") && (o = de(o)), ne(o + "") || "auto" === o || (o += b.units[h] || ne(Mn(t, h)) || ""), "=" === (o + "").charAt(1) && (o = Mn(t, h))) : o = Mn(t, h), u = parseFloat(o), (d = "string" === c && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), h in Wr && ("autoAlpha" === h && (1 === u && "hidden" === Mn(t, "visibility") && a && (u = 0), w.push("visibility", 0, O.visibility), bn(this, O, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== h && "transform" !== h && ~(h = Wr[h]).indexOf(",") && (h = h.split(",")[0])), _ = h in Lr) {
                    if (this.styles.save(h), x = s, "string" === c && "var(--" === s.substring(0, 6)) {
                        if ("calc(" === (s = pn(t, s.substring(4, s.indexOf(")")))).substring(0, 5)) {
                            var M = t.style.perspective;
                            t.style.perspective = s, s = pn(t, "perspective"), M ? t.style.perspective = M : xn(t, "perspective")
                        }
                        a = parseFloat(s)
                    }
                    if (m || ((v = t._gsap).renderTransform && !e.parseTransform || Ln(t, e.parseTransform), g = !1 !== e.smoothOrigin && v.smooth, (m = this._pt = new mr(this._pt, O, sn, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === h) this._pt = new mr(this._pt, v, "scaleY", v.scaleY, (d ? xt(v.scaleY, d + a) : a) - v.scaleY || 0, Vr), this._pt.u = 0, T.push("scaleY", h), h += "X";
                    else {
                        if ("transformOrigin" === h) {
                            w.push(an, 0, O[an]), s = Cn(s), v.svg ? jn(t, s, 0, g, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && bn(this, v, "zOrigin", v.zOrigin, p), bn(this, O, h, Bn(o), Bn(s)));
                            continue
                        }
                        if ("svgOrigin" === h) {
                            jn(t, s, 1, g, 0, this);
                            continue
                        }
                        if (h in Rn) {
                            Gn(this, v, h, u, d ? xt(u, d + s) : s);
                            continue
                        }
                        if ("smoothOrigin" === h) {
                            bn(this, v, "smooth", v.smooth, s);
                            continue
                        }
                        if ("force3D" === h) {
                            v[h] = s;
                            continue
                        }
                        if ("transform" === h) {
                            $n(this, s, t);
                            continue
                        }
                    }
                } else h in O || (h = _n(h) || h);
                if (_ || (a || 0 === a) && (u || 0 === u) && !Xr.test(s) && h in O) a || (a = 0), (l = (o + "").substr((u + "").length)) !== (p = ne(s) || (h in b.units ? b.units[h] : l)) && (u = Sn(t, h, o, p)), this._pt = new mr(this._pt, _ ? v : O, h, u, (d ? xt(u, d + a) : a) - u, _ || "px" !== p && "zIndex" !== h || !1 === e.autoRound ? Vr : Qr), this._pt.u = p || 0, _ && x !== s ? (this._pt.b = o, this._pt.e = x, this._pt.r = $r) : l !== p && "%" !== p && (this._pt.b = o, this._pt.r = Hr);
                else if (h in O) kn.call(this, t, h, o, d ? d + s : s);
                else if (h in t) this.add(t, h, o || t[h], d ? d + s : s, n, i);
                else if ("parseTransform" !== h) {
                    tt(h, s);
                    continue
                }
                _ || (h in O ? w.push(h, 0, O[h]) : "function" == typeof t[h] ? w.push(h, 2, t[h]()) : w.push(h, 1, o || t[h])), T.push(h)
            }
            y && _r(this)
        },
        render: function(t, e) {
            if (e.tween._time || !Ir())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: Mn,
        aliases: Wr,
        getSetter: function(t, e, r) {
            var n = Wr[e];
            return n && n.indexOf(",") < 0 && (e = n), e in Lr && e !== an && (t._gsap.x || Mn(t, "x")) ? r && Fr === r ? "scale" === e ? rn : en : (Fr = r || {}) && ("scale" === e ? nn : on) : t.style && !F(t.style[e]) ? Jr : ~e.indexOf("-") ? tn : ar(t, e)
        },
        core: {
            _removeProperty: xn,
            _getMatrix: In
        }
    };
    Cr.utils.checkPrefix = _n, Cr.core.getStyleSaver = hn, Kn = gt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Qn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Lr[t] = 1
    }), gt(Qn, function(t) {
        b.units[t] = "deg", Rn[t] = 1
    }), Wr[Kn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Qn, gt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Wr[e[1]] = Kn[e[0]]
    }), gt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        b.units[t] = "px"
    }), Cr.registerPlugin(Zn);
    var Jn = Cr.registerPlugin(Zn) || Cr;
    Jn.core.Tween;
    let ti, ei, ri, ni, ii, oi = document.getElementById("game-gravity"),
        si = [],
        ai = Jn.timeline({
            paused: !0,
            reversed: !0
        }),
        ui = Jn.timeline({
            paused: !0,
            reversed: !0
        }),
        ci = Jn.timeline({
            paused: !0,
            reversed: !0
        }),
        fi = Jn.timeline({
            paused: !0,
            reversed: !0
        }),
        hi = Jn.timeline({
            paused: !0,
            reversed: !0
        });
    const li = /(rgb)\(([0-9]+),\s+([0-9]+),\s+([0-9]+)/;
    let pi = {
        init: function() {
            this.canvas = document.getElementById("game-gravity"), si = [], ti = new di(40, 35, ri, 40, 120, "bird", 0), ti.gravity = .05, this.canvas.width = 640, this.canvas.height = this.canvas.width / 3 * 2, this.context = this.canvas.getContext("2d"), this.frameNo = 0, _i()
        },
        start: function() {
            ei = setInterval(_i, 15), this.interval = ei, window.addEventListener("keydown", t => {
                " " === t.key ? mi(-.15) : "ArrowUp" === t.key ? mi(-.3) : "ArrowDown" === t.key && mi(.3)
            }), window.addEventListener("keyup", () => {
                mi(.15)
            }), this.canvas.addEventListener("contextmenu", t => t.preventDefault())
        },
        reset: function() {
            pi.clear(), pi.frameNo = 0, _i()
        },
        clear: function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
    };

    function di(t, e, r, n, i, o, s) {
        this.score = 0, this.width = t, this.height = e, this.speedX = 0, this.speedY = 0, this.x = n, this.y = i, this.gravity = 0, this.gravitySpeed = 0, this.update = function() {
            let t = pi.context;
            if (t.fillStyle = r, t.beginPath(), "bird" === o) {
                let e = new Path2D("m69.6 26.7c-1.1-11.2-10.5-19.9-22-19.9s-22.1 9.9-22.1 22.1.9 6.9 2.4 9.9h-26.2c4.9 4.4 11.1 7.2 18.1 7.8l-19.8 6c6.2 12.2 18.8 20.5 33.4 20.5 20.7 0 37.5-16.8 37.5-37.5l9.1-4.6zm-13.9-1.1c-.7 1.7-2.6 2.5-4.3 1.8s-2.5-2.6-1.8-4.3 2.6-2.5 4.3-1.8 2.5 2.6 1.8 4.3z"),
                    r = new Path2D;
                const n = new DOMMatrix;
                n.translateSelf(this.x, this.y), n.scaleSelf(.5, .5), n.rotateSelf(Math.PI * ((this.y - pi.canvas.height) / 20)), r.addPath(e, n), t.fill(r)
            } else t.roundRect(this.x, this.y, this.width, this.height, s), t.fill()
        }, this.newPos = function() {
            this.gravitySpeed += this.gravity, this.x += this.speedX, this.y += this.speedY + this.gravitySpeed, this.hitTop(), this.hitBottom()
        }, this.hitTop = function() {
            this.y < this.height && (this.y = this.height, this.gravitySpeed = 0)
        }, this.hitBottom = function() {
            let t = pi.canvas.height - this.height;
            this.y > t && (this.y = t, this.gravitySpeed = 0)
        }, this.crashWith = function(t) {
            let e = this.x,
                r = this.x + this.width,
                n = this.y,
                i = this.y + this.height,
                o = t.x,
                s = t.x + t.width,
                a = t.y,
                u = t.y + t.height,
                c = !1;
            return i > a && n < u && r > o && e < s && (c = !0), c
        }
    }

    function _i() {
        let t, e, r, n, i, o, s;
        for (let t = 0; t < si.length; t += 1)
            if (ti.crashWith(si[t])) return void(null !== ei && (clearInterval(ei), 0 !== pi.frameNo && hi.timeScale(1).play()));
        pi.clear(), pi.frameNo += 1, (1 === pi.frameNo || pi.frameNo / 150 % 1 == 0) && (t = pi.canvas.width, n = 20, i = 300, e = Math.floor(281 * Math.random() + 20), o = 120, s = 300, r = Math.floor(181 * Math.random() + 120), si.push(new di(10, e, ni, t, 0, null, 2)), si.push(new di(10, t - e - r, ni, t, e + r, null, 2)));
        for (let t = 0; t < si.length; t += 1) si[t].x += -1, si[t].update();
        null !== ii && (ii.innerHTML = Math.round(pi.frameNo / 4)), ti.newPos(), ti.update()
    }

    function mi(t) {
        ti.gravity = t
    }
    window.addEventListener("DOMContentLoaded", function() {
        if (null !== oi) {
            oi.addEventListener("mousedown", () => {
                mi(-.15)
            }), oi.addEventListener("mouseup", () => {
                mi(.15)
            }), oi.addEventListener("touchstart", () => {
                mi(-.15)
            }, {
                passive: !0
            }), oi.addEventListener("touchend", () => {
                mi(.15)
            });
            const t = document.getElementById("modal-game-gravity"),
                e = document.querySelectorAll(".toggle-game-gravity"),
                r = document.querySelector(".restart-game-gravity");
            if (null !== t && e.length && null !== r) {
                const n = t.querySelector(".modal-game-wrapper"),
                    i = t.querySelector(".modal-game-cover"),
                    o = t.querySelector(".modal-game-countdown"),
                    s = t.querySelector(".modal-game-container");
                ii = document.querySelector(".game-gravity-score");
                const a = t.querySelector(".modal-game-over"),
                    u = t.querySelector(".modal-game-overlay");
                if (null !== n && null !== i && null !== o && null !== s && null !== a && null !== u) {
                    ni = window.getComputedStyle(t).color, ni = ni.replace(li, "rgba($2,$3,$4,0.5"), ri = window.getComputedStyle(t).color, ai.to(t, {
                        duration: 0,
                        display: "flex",
                        onComplete: () => {
                            pi.init(), document.body.style.overflow = "hidden"
                        },
                        onReverseComplete: () => {
                            pi.reset(), fi.progress(0).pause(), document.body.style.overflow = "auto"
                        }
                    }).from(u, {
                        duration: .2,
                        opacity: 0
                    }).from(n, {
                        duration: .6,
                        delay: .2,
                        ease: "power4.out",
                        scale: .9,
                        opacity: 0
                    }), ui.from(i, {
                        duration: .8,
                        delay: .5,
                        ease: "none",
                        opacity: 0
                    }).to(i, {
                        duration: 1.8,
                        ease: "none",
                        scale: 1.05
                    }, "<").to(i, {
                        duration: .2,
                        ease: "none",
                        opacity: 0
                    }), ci.fromTo(o, {
                        opacity: 0,
                        scale: 1
                    }, {
                        duration: .3,
                        delay: 2.5,
                        opacity: 1,
                        scale: 1.15,
                        onReverseComplete: () => {
                            o.innerHTML = 3
                        }
                    }).to(o, {
                        duration: .3,
                        opacity: 0,
                        scale: 1.3,
                        onComplete: () => {
                            o.innerHTML = 2
                        }
                    }).fromTo(o, {
                        opacity: 0,
                        scale: 1
                    }, {
                        duration: .3,
                        opacity: 1,
                        scale: 1.15
                    }).to(o, {
                        duration: .3,
                        opacity: 0,
                        scale: 1.3,
                        onComplete: () => {
                            o.innerHTML = 1
                        }
                    }).fromTo(o, {
                        opacity: 0,
                        scale: 1
                    }, {
                        duration: .3,
                        opacity: 1,
                        scale: 1.15
                    }).to(o, {
                        duration: .3,
                        opacity: 0,
                        scale: 1.3
                    }), fi.from(s, {
                        duration: 1,
                        delay: 4.2,
                        ease: "power4.out",
                        opacity: 0,
                        y: -50,
                        onStart: () => {
                            pi.start()
                        }
                    }), hi.to(a, {
                        duration: .6,
                        ease: "power4.out",
                        display: "flex",
                        opacity: 1
                    });
                    const c = t => {
                            if (ai.timeScale(1).play(), ui.timeScale(1).play(), ci.timeScale(1).play(), fi.play(), t) {
                                const e = new URL(window.location);
                                e.hash = t, window.history.pushState(null, null, e)
                            }
                        },
                        f = t => {
                            ai.timeScale(2).reverse(), ui.progress(0).pause(), ci.progress(0).pause(), null !== ei && clearInterval(ei), hi.timeScale(1).reverse(), t && window.history.pushState(null, null, " ")
                        };
                    "#game-super-bird" === window.location.hash && c(), e.forEach(t => {
                        t.addEventListener("click", () => {
                            ai.reversed() ? c("#game-super-bird") : f(!0)
                        })
                    }), window.addEventListener("popstate", t => {
                        "#game-super-bird" === window.location.hash ? c() : f()
                    }), document.addEventListener("keydown", t => {
                        "Escape" === t.key && !(t.ctrlKey || t.altKey || t.shiftKey) && f(!0)
                    }), r.addEventListener("click", () => {
                        hi.timeScale(3).reverse(), pi.reset(), pi.init(), pi.start()
                    }), Modernizr.touchevents || window.addEventListener("mousemove", t => {
                        Jn.to(n, {
                            duration: 2,
                            ease: "power4.out",
                            xPercent: (t.clientX - window.innerWidth / 2) / (window.innerWidth / 20),
                            yPercent: (t.clientY - window.innerHeight / 2) / (window.innerHeight / 20)
                        })
                    })
                }
            }
        }
    }, !1)
}();