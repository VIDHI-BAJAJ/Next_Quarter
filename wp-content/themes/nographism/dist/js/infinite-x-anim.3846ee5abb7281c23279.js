/*! For license information please see infinite-x-anim.3846ee5abb7281c23279.js.LICENSE.txt */ ! function() {
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
                    a = function(t) {
                        return function(e, r, a) {
                            var s = n(e),
                                u = o(s);
                            if (0 === u) return !t && -1;
                            var l, c = i(a, u);
                            if (t && r != r) {
                                for (; u > c;)
                                    if ((l = s[c++]) != l) return !0
                            } else
                                for (; u > c; c++)
                                    if ((t || c in s) && s[c] === r) return t || c || 0;
                            return !t && -1
                        }
                    };
                t.exports = {
                    includes: a(!0),
                    indexOf: a(!1)
                }
            },
            1512: function(t, e, r) {
                var n = r(4398),
                    i = r(9400);
                t.exports = function(t, e, r, o) {
                    try {
                        return o ? e(n(r)[0], r[1]) : e(r)
                    } catch (e) {
                        i(t, "throw", e)
                    }
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
                    a = r(4702)("toStringTag"),
                    s = Object,
                    u = "Arguments" === o(function() {
                        return arguments
                    }());
                t.exports = n ? o : function(t) {
                    var e, r, n;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
                        try {
                            return t[e]
                        } catch (t) {}
                    }(e = s(t), a)) ? r : u ? o(e) : "Object" === (n = o(e)) && i(e.callee) ? "Arguments" : n
                }
            },
            4085: function(t, e, r) {
                var n = r(9158),
                    i = r(4540),
                    o = r(2428),
                    a = r(4446);
                t.exports = function(t, e, r) {
                    for (var s = i(e), u = a.f, l = o.f, c = 0; c < s.length; c++) {
                        var f = s[c];
                        n(t, f) || r && n(r, f) || u(t, f, l(e, f))
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
            7236: function(t) {
                t.exports = function(t, e) {
                    return {
                        value: t,
                        done: e
                    }
                }
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
                    a = r(8466);
                t.exports = function(t, e, r, s) {
                    s || (s = {});
                    var u = s.enumerable,
                        l = void 0 !== s.name ? s.name : e;
                    if (n(r) && o(r, l, s), s.global) u ? t[e] = r : a(e, r);
                    else {
                        try {
                            s.unsafe ? t[e] && (u = !0) : delete t[e]
                        } catch (t) {}
                        u ? t[e] = r : i.f(t, e, {
                            value: r,
                            enumerable: !1,
                            configurable: !s.nonConfigurable,
                            writable: !s.nonWritable
                        })
                    }
                    return t
                }
            },
            3948: function(t, e, r) {
                var n = r(8521);
                t.exports = function(t, e, r) {
                    for (var i in e) n(t, i, e[i], r);
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
                    a = i(o) && i(o.createElement);
                t.exports = function(t) {
                    return a ? o.createElement(t) : {}
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
                    a = r(824),
                    s = o.process,
                    u = o.Deno,
                    l = s && s.versions || u && u.version,
                    c = l && l.v8;
                c && (i = (n = c.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !i && a && (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = a.match(/Chrome\/(\d+)/)) && (i = +n[1]), t.exports = i
            },
            3353: function(t, e, r) {
                var n = r(8793),
                    i = r(2428).f,
                    o = r(5044),
                    a = r(8521),
                    s = r(8466),
                    u = r(4085),
                    l = r(7453);
                t.exports = function(t, e) {
                    var r, c, f, p, h, d = t.target,
                        g = t.global,
                        v = t.stat;
                    if (r = g ? n : v ? n[d] || s(d, {}) : n[d] && n[d].prototype)
                        for (c in e) {
                            if (p = e[c], f = t.dontCallGetSet ? (h = i(r, c)) && h.value : r[c], !l(g ? c : d + (v ? "." : "#") + c, t.forced) && void 0 !== f) {
                                if (typeof p == typeof f) continue;
                                u(p, f)
                            }(t.sham || f && f.sham) && o(p, "sham", !0), a(r, c, p, t)
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
                    a = n(n.bind);
                t.exports = function(t, e) {
                    return i(t), void 0 === e ? t : o ? a(t, e) : function() {
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
                    a = n && Object.getOwnPropertyDescriptor,
                    s = i(o, "name"),
                    u = s && "something" === function() {}.name,
                    l = s && (!n || n && a(o, "name").configurable);
                t.exports = {
                    EXISTS: s,
                    PROPER: u,
                    CONFIGURABLE: l
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
                    a = n && i.bind.bind(o, o);
                t.exports = n ? a : function(t) {
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
                    a = r(488),
                    s = r(4702)("iterator");
                t.exports = function(t) {
                    if (!o(t)) return i(t, s) || i(t, "@@iterator") || a[n(t)]
                }
            },
            1778: function(t, e, r) {
                var n = r(492),
                    i = r(2365),
                    o = r(4398),
                    a = r(7938),
                    s = r(590),
                    u = TypeError;
                t.exports = function(t, e) {
                    var r = arguments.length < 2 ? s(t) : e;
                    if (i(r)) return o(n(r, t));
                    throw new u(a(t) + " is not iterable")
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
                    a = Object,
                    s = n("".split);
                t.exports = i(function() {
                    return !a("z").propertyIsEnumerable(0)
                }) ? function(t) {
                    return "String" === o(t) ? s(t, "") : a(t)
                } : a
            },
            7217: function(t, e, r) {
                var n = r(7133),
                    i = r(9200),
                    o = r(5210),
                    a = n(Function.toString);
                i(o.inspectSource) || (o.inspectSource = function(t) {
                    return a(t)
                }), t.exports = o.inspectSource
            },
            1514: function(t, e, r) {
                var n, i, o, a = r(3125),
                    s = r(8793),
                    u = r(9131),
                    l = r(5044),
                    c = r(9158),
                    f = r(5210),
                    p = r(2316),
                    h = r(640),
                    d = "Object already initialized",
                    g = s.TypeError,
                    v = s.WeakMap;
                if (a || f.state) {
                    var m = f.state || (f.state = new v);
                    m.get = m.get, m.has = m.has, m.set = m.set, n = function(t, e) {
                        if (m.has(t)) throw new g(d);
                        return e.facade = t, m.set(t, e), e
                    }, i = function(t) {
                        return m.get(t) || {}
                    }, o = function(t) {
                        return m.has(t)
                    }
                } else {
                    var _ = p("state");
                    h[_] = !0, n = function(t, e) {
                        if (c(t, _)) throw new g(d);
                        return e.facade = t, l(t, _, e), e
                    }, i = function(t) {
                        return c(t, _) ? t[_] : {}
                    }, o = function(t) {
                        return c(t, _)
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
                            if (!u(e) || (r = i(e)).type !== t) throw new g("Incompatible receiver, " + t + " required");
                            return r
                        }
                    }
                }
            },
            6: function(t, e, r) {
                var n = r(4702),
                    i = r(488),
                    o = n("iterator"),
                    a = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (i.Array === t || a[o] === t)
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
                    a = function(t, e) {
                        var r = u[s(t)];
                        return r === c || r !== l && (i(e) ? n(e) : !!e)
                    },
                    s = a.normalize = function(t) {
                        return String(t).replace(o, ".").toLowerCase()
                    },
                    u = a.data = {},
                    l = a.NATIVE = "N",
                    c = a.POLYFILL = "P";
                t.exports = a
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
                    a = r(6253),
                    s = Object;
                t.exports = a ? function(t) {
                    return "symbol" == typeof t
                } : function(t) {
                    var e = n("Symbol");
                    return i(e) && o(e.prototype, s(t))
                }
            },
            3973: function(t, e, r) {
                var n = r(5457),
                    i = r(492),
                    o = r(4398),
                    a = r(7938),
                    s = r(6),
                    u = r(7457),
                    l = r(2430),
                    c = r(1778),
                    f = r(590),
                    p = r(9400),
                    h = TypeError,
                    d = function(t, e) {
                        this.stopped = t, this.result = e
                    },
                    g = d.prototype;
                t.exports = function(t, e, r) {
                    var v, m, _, y, x, b, w, T = r && r.that,
                        M = !(!r || !r.AS_ENTRIES),
                        O = !(!r || !r.IS_RECORD),
                        S = !(!r || !r.IS_ITERATOR),
                        E = !(!r || !r.INTERRUPTED),
                        k = n(e, T),
                        C = function(t) {
                            return v && p(v, "normal"), new d(!0, t)
                        },
                        P = function(t) {
                            return M ? (o(t), E ? k(t[0], t[1], C) : k(t[0], t[1])) : E ? k(t, C) : k(t)
                        };
                    if (O) v = t.iterator;
                    else if (S) v = t;
                    else {
                        if (!(m = f(t))) throw new h(a(t) + " is not iterable");
                        if (s(m)) {
                            for (_ = 0, y = u(t); y > _; _++)
                                if ((x = P(t[_])) && l(g, x)) return x;
                            return new d(!1)
                        }
                        v = c(t, m)
                    }
                    for (b = O ? t.next : v.next; !(w = i(b, v)).done;) {
                        try {
                            x = P(w.value)
                        } catch (t) {
                            p(v, "throw", t)
                        }
                        if ("object" == typeof x && x && l(g, x)) return x
                    }
                    return new d(!1)
                }
            },
            4338: function(t, e, r) {
                var n = r(9400);
                t.exports = function(t, e, r) {
                    for (var i = t.length - 1; i >= 0; i--)
                        if (void 0 !== t[i]) try {
                            r = n(t[i].iterator, e, r)
                        } catch (t) {
                            e = "throw", r = t
                        }
                    if ("throw" === e) throw r;
                    return r
                }
            },
            9400: function(t, e, r) {
                var n = r(492),
                    i = r(4398),
                    o = r(9325);
                t.exports = function(t, e, r) {
                    var a, s;
                    i(t);
                    try {
                        if (!(a = o(t, "return"))) {
                            if ("throw" === e) throw r;
                            return r
                        }
                        a = n(a, t)
                    } catch (t) {
                        s = !0, a = t
                    }
                    if ("throw" === e) throw r;
                    if (s) throw a;
                    return i(a), r
                }
            },
            7399: function(t, e, r) {
                var n = r(492),
                    i = r(2909),
                    o = r(5044),
                    a = r(3948),
                    s = r(4702),
                    u = r(1514),
                    l = r(9325),
                    c = r(1982).IteratorPrototype,
                    f = r(7236),
                    p = r(9400),
                    h = r(4338),
                    d = s("toStringTag"),
                    g = "IteratorHelper",
                    v = "WrapForValidIterator",
                    m = "normal",
                    _ = "throw",
                    y = u.set,
                    x = function(t) {
                        var e = u.getterFor(t ? v : g);
                        return a(i(c), {
                            next: function() {
                                var r = e(this);
                                if (t) return r.nextHandler();
                                if (r.done) return f(void 0, !0);
                                try {
                                    var n = r.nextHandler();
                                    return r.returnHandlerResult ? n : f(n, r.done)
                                } catch (t) {
                                    throw r.done = !0, t
                                }
                            },
                            return: function() {
                                var r = e(this),
                                    i = r.iterator;
                                if (r.done = !0, t) {
                                    var o = l(i, "return");
                                    return o ? n(o, i) : f(void 0, !0)
                                }
                                if (r.inner) try {
                                    p(r.inner.iterator, m)
                                } catch (t) {
                                    return p(i, _, t)
                                }
                                if (r.openIters) try {
                                    h(r.openIters, m)
                                } catch (t) {
                                    return p(i, _, t)
                                }
                                return i && p(i, m), f(void 0, !0)
                            }
                        })
                    },
                    b = x(!0),
                    w = x(!1);
                o(w, d, "Iterator Helper"), t.exports = function(t, e, r) {
                    var n = function(n, i) {
                        i ? (i.iterator = n.iterator, i.next = n.next) : i = n, i.type = e ? v : g, i.returnHandlerResult = !!r, i.nextHandler = t, i.counter = 0, i.done = !1, y(this, i)
                    };
                    return n.prototype = e ? b : w, n
                }
            },
            1983: function(t) {
                t.exports = function(t, e) {
                    var r = "function" == typeof Iterator && Iterator.prototype[t];
                    if (r) try {
                        r.call({
                            next: null
                        }, e).next()
                    } catch (t) {
                        return !0
                    }
                }
            },
            3126: function(t, e, r) {
                var n = r(8793);
                t.exports = function(t, e) {
                    var r = n.Iterator,
                        i = r && r.prototype,
                        o = i && i[t],
                        a = !1;
                    if (o) try {
                        o.call({
                            next: function() {
                                return {
                                    done: !0
                                }
                            },
                            return: function() {
                                a = !0
                            }
                        }, -1)
                    } catch (t) {
                        t instanceof e || (a = !1)
                    }
                    if (!a) return o
                }
            },
            1982: function(t, e, r) {
                var n, i, o, a = r(942),
                    s = r(9200),
                    u = r(9131),
                    l = r(2909),
                    c = r(5270),
                    f = r(8521),
                    p = r(4702),
                    h = r(1818),
                    d = p("iterator"),
                    g = !1;
                [].keys && ("next" in (o = [].keys()) ? (i = c(c(o))) !== Object.prototype && (n = i) : g = !0), !u(n) || a(function() {
                    var t = {};
                    return n[d].call(t) !== t
                }) ? n = {} : h && (n = l(n)), s(n[d]) || f(n, d, function() {
                    return this
                }), t.exports = {
                    IteratorPrototype: n,
                    BUGGY_SAFARI_ITERATORS: g
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
                    a = r(9158),
                    s = r(6857),
                    u = r(7403).CONFIGURABLE,
                    l = r(7217),
                    c = r(1514),
                    f = c.enforce,
                    p = c.get,
                    h = String,
                    d = Object.defineProperty,
                    g = n("".slice),
                    v = n("".replace),
                    m = n([].join),
                    _ = s && !i(function() {
                        return 8 !== d(function() {}, "length", {
                            value: 8
                        }).length
                    }),
                    y = String(String).split("String"),
                    x = t.exports = function(t, e, r) {
                        "Symbol(" === g(h(e), 0, 7) && (e = "[" + v(h(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!a(t, "name") || u && t.name !== e) && (s ? d(t, "name", {
                            value: e,
                            configurable: !0
                        }) : t.name = e), _ && r && a(r, "arity") && t.length !== r.arity && d(t, "length", {
                            value: r.arity
                        });
                        try {
                            r && a(r, "constructor") && r.constructor ? s && d(t, "prototype", {
                                writable: !1
                            }) : t.prototype && (t.prototype = void 0)
                        } catch (t) {}
                        var n = f(t);
                        return a(n, "source") || (n.source = m(y, "string" == typeof e ? e : "")), t
                    };
                Function.prototype.toString = x(function() {
                    return o(this) && p(this).source || l(this)
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
                    a = r(2030),
                    s = r(640),
                    u = r(4510),
                    l = r(1466),
                    c = r(2316),
                    f = "prototype",
                    p = "script",
                    h = c("IE_PROTO"),
                    d = function() {},
                    g = function(t) {
                        return "<" + p + ">" + t + "</" + p + ">"
                    },
                    v = function(t) {
                        t.write(g("")), t.close();
                        var e = t.parentWindow.Object;
                        return t = null, e
                    },
                    m = function() {
                        try {
                            n = new ActiveXObject("htmlfile")
                        } catch (t) {}
                        var t, e, r;
                        m = "undefined" != typeof document ? document.domain && n ? v(n) : (e = l("iframe"), r = "java" + p + ":", e.style.display = "none", u.appendChild(e), e.src = String(r), (t = e.contentWindow.document).open(), t.write(g("document.F=Object")), t.close(), t.F) : v(n);
                        for (var i = a.length; i--;) delete m[f][a[i]];
                        return m()
                    };
                s[h] = !0, t.exports = Object.create || function(t, e) {
                    var r;
                    return null !== t ? (d[f] = i(t), r = new d, d[f] = null, r[h] = t) : r = m(), void 0 === e ? r : o.f(r, e)
                }
            },
            2066: function(t, e, r) {
                var n = r(6857),
                    i = r(335),
                    o = r(4446),
                    a = r(4398),
                    s = r(4360),
                    u = r(3733);
                e.f = n && !i ? Object.defineProperties : function(t, e) {
                    a(t);
                    for (var r, n = s(e), i = u(e), l = i.length, c = 0; l > c;) o.f(t, r = i[c++], n[r]);
                    return t
                }
            },
            4446: function(t, e, r) {
                var n = r(6857),
                    i = r(5842),
                    o = r(335),
                    a = r(4398),
                    s = r(2548),
                    u = TypeError,
                    l = Object.defineProperty,
                    c = Object.getOwnPropertyDescriptor,
                    f = "enumerable",
                    p = "configurable",
                    h = "writable";
                e.f = n ? o ? function(t, e, r) {
                    if (a(t), e = s(e), a(r), "function" == typeof t && "prototype" === e && "value" in r && h in r && !r[h]) {
                        var n = c(t, e);
                        n && n[h] && (t[e] = r.value, r = {
                            configurable: p in r ? r[p] : n[p],
                            enumerable: f in r ? r[f] : n[f],
                            writable: !1
                        })
                    }
                    return l(t, e, r)
                } : l : function(t, e, r) {
                    if (a(t), e = s(e), a(r), i) try {
                        return l(t, e, r)
                    } catch (t) {}
                    if ("get" in r || "set" in r) throw new u("Accessors not supported");
                    return "value" in r && (t[e] = r.value), t
                }
            },
            2428: function(t, e, r) {
                var n = r(6857),
                    i = r(492),
                    o = r(6732),
                    a = r(2007),
                    s = r(4360),
                    u = r(2548),
                    l = r(9158),
                    c = r(5842),
                    f = Object.getOwnPropertyDescriptor;
                e.f = n ? f : function(t, e) {
                    if (t = s(t), e = u(e), c) try {
                        return f(t, e)
                    } catch (t) {}
                    if (l(t, e)) return a(!i(o.f, t, e), t[e])
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
                    a = r(2316),
                    s = r(6308),
                    u = a("IE_PROTO"),
                    l = Object,
                    c = l.prototype;
                t.exports = s ? l.getPrototypeOf : function(t) {
                    var e = o(t);
                    if (n(e, u)) return e[u];
                    var r = e.constructor;
                    return i(r) && e instanceof r ? r.prototype : e instanceof l ? c : null
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
                    a = r(6134).indexOf,
                    s = r(640),
                    u = n([].push);
                t.exports = function(t, e) {
                    var r, n = o(t),
                        l = 0,
                        c = [];
                    for (r in n) !i(s, r) && i(n, r) && u(c, r);
                    for (; e.length > l;) i(n, r = e[l++]) && (~a(c, r) || u(c, r));
                    return c
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
                    a = TypeError;
                t.exports = function(t, e) {
                    var r, s;
                    if ("string" === e && i(r = t.toString) && !o(s = n(r, t))) return s;
                    if (i(r = t.valueOf) && !o(s = n(r, t))) return s;
                    if ("string" !== e && i(r = t.toString) && !o(s = n(r, t))) return s;
                    throw new a("Can't convert object to primitive value")
                }
            },
            4540: function(t, e, r) {
                var n = r(848),
                    i = r(7133),
                    o = r(5809),
                    a = r(1264),
                    s = r(4398),
                    u = i([].concat);
                t.exports = n("Reflect", "ownKeys") || function(t) {
                    var e = o.f(s(t)),
                        r = a.f;
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
                    a = "__core-js_shared__",
                    s = t.exports = i[a] || o(a, {});
                (s.versions || (s.versions = [])).push({
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
                    a = r(9325),
                    s = r(1427),
                    u = r(4702),
                    l = TypeError,
                    c = u("toPrimitive");
                t.exports = function(t, e) {
                    if (!i(t) || o(t)) return t;
                    var r, u = a(t, c);
                    if (u) {
                        if (void 0 === e && (e = "default"), r = n(u, t, e), !i(r) || o(r)) return r;
                        throw new l("Can't convert object to primitive value")
                    }
                    return void 0 === e && (e = "number"), s(t, e)
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
                    a = n(1.1.toString);
                t.exports = function(t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++i + o, 36)
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
                    a = r(685),
                    s = r(260),
                    u = r(6253),
                    l = n.Symbol,
                    c = i("wks"),
                    f = u ? l.for || l : l && l.withoutSetter || a;
                t.exports = function(t) {
                    return o(c, t) || (c[t] = s && o(l, t) ? l[t] : f("Symbol." + t)), c[t]
                }
            },
            2306: function(t, e, r) {
                var n = r(3353),
                    i = r(8793),
                    o = r(602),
                    a = r(4398),
                    s = r(9200),
                    u = r(5270),
                    l = r(3129),
                    c = r(5909),
                    f = r(942),
                    p = r(9158),
                    h = r(4702),
                    d = r(1982).IteratorPrototype,
                    g = r(6857),
                    v = r(1818),
                    m = "constructor",
                    _ = "Iterator",
                    y = h("toStringTag"),
                    x = TypeError,
                    b = i[_],
                    w = v || !s(b) || b.prototype !== d || !f(function() {
                        b({})
                    }),
                    T = function() {
                        if (o(this, d), u(this) === d) throw new x("Abstract class Iterator not directly constructable")
                    },
                    M = function(t, e) {
                        g ? l(d, t, {
                            configurable: !0,
                            get: function() {
                                return e
                            },
                            set: function(e) {
                                if (a(this), this === d) throw new x("You can't redefine this property");
                                p(this, t) ? this[t] = e : c(this, t, e)
                            }
                        }) : d[t] = e
                    };
                p(d, y) || M(y, _), !w && p(d, m) && d[m] !== Object || M(m, T), T.prototype = d, n({
                    global: !0,
                    constructor: !0,
                    forced: w
                }, {
                    Iterator: T
                })
            },
            2099: function(t, e, r) {
                var n = r(3353),
                    i = r(492),
                    o = r(3973),
                    a = r(2365),
                    s = r(4398),
                    u = r(5134),
                    l = r(9400),
                    c = r(3126)("forEach", TypeError);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0,
                    forced: c
                }, {
                    forEach: function(t) {
                        s(this);
                        try {
                            a(t)
                        } catch (t) {
                            l(this, "throw", t)
                        }
                        if (c) return i(c, this, t);
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
            3640: function(t, e, r) {
                var n = r(3353),
                    i = r(492),
                    o = r(2365),
                    a = r(4398),
                    s = r(5134),
                    u = r(7399),
                    l = r(1512),
                    c = r(9400),
                    f = r(1983),
                    p = r(3126),
                    h = r(1818),
                    d = !h && !f("map", function() {}),
                    g = !h && !d && p("map", TypeError),
                    v = h || d || g,
                    m = u(function() {
                        var t = this.iterator,
                            e = a(i(this.next, t));
                        if (!(this.done = !!e.done)) return l(t, this.mapper, [e.value, this.counter++], !0)
                    });
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0,
                    forced: v
                }, {
                    map: function(t) {
                        a(this);
                        try {
                            o(t)
                        } catch (t) {
                            c(this, "throw", t)
                        }
                        return g ? i(g, this, t) : new m(s(this), {
                            mapper: t
                        })
                    }
                })
            },
            2637: function(t, e, r) {
                var n = r(3353),
                    i = r(4398),
                    o = r(5909),
                    a = r(3973),
                    s = r(5134);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    toArray: function() {
                        var t = [],
                            e = 0;
                        return a(s(i(this)), function(r) {
                            o(t, e++, r)
                        }, {
                            IS_RECORD: !0
                        }), t
                    }
                })
            },
            9849: function(t, e, r) {
                r(2306)
            },
            6658: function(t, e, r) {
                r(2099)
            },
            6831: function(t, e, r) {
                r(3640)
            },
            6640: function(t, e, r) {
                r(2637)
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
    }(), r(9849), r(6658), r(6831), r(6640);
    var o, a, s, u, l, c, f, p, h, d, g, v, m, _, y, x, b, w = {
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
        M = 1e8,
        O = 1e-8,
        S = 2 * Math.PI,
        E = S / 4,
        k = 0,
        C = Math.sqrt,
        P = Math.cos,
        A = Math.sin,
        D = function(t) {
            return "string" == typeof t
        },
        R = function(t) {
            return "function" == typeof t
        },
        I = function(t) {
            return "number" == typeof t
        },
        Y = function(t) {
            return void 0 === t
        },
        L = function(t) {
            return "object" == typeof t
        },
        X = function(t) {
            return !1 !== t
        },
        F = function() {
            return "undefined" != typeof window
        },
        N = function(t) {
            return R(t) || D(t)
        },
        z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        B = Array.isArray,
        j = /random\([^)]+\)/g,
        H = /,\s*/g,
        W = /(?:-?\.?\d|\.)+/gi,
        U = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        q = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        V = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        G = /[+-]=-?[.\d]+/,
        K = /[^,'"\[\]\s]+/gi,
        $ = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        Z = {},
        Q = {},
        J = function(t) {
            return (Q = Ct(t, Z)) && Cr
        },
        tt = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        et = function(t, e) {
            return !e && console.warn(t)
        },
        rt = function(t, e) {
            return t && (Z[t] = e) && Q && (Q[t] = e) || Z
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
        at = {
            suppressEvents: !0
        },
        st = {},
        ut = [],
        lt = {},
        ct = {},
        ft = {},
        pt = 30,
        ht = [],
        dt = "",
        gt = function(t) {
            var e, r, n = t[0];
            if (L(n) || R(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                for (r = ht.length; r-- && !ht[r].targetTest(n););
                e = ht[r]
            }
            for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new He(t[r], e))) || t.splice(r, 1);
            return t
        },
        vt = function(t) {
            return t._gsap || gt(ae(t))[0]._gsap
        },
        mt = function(t, e, r) {
            return (r = t[e]) && R(r) ? t[e]() : Y(r) && t.getAttribute && t.getAttribute(e) || r
        },
        _t = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        yt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        xt = function(t) {
            return Math.round(1e7 * t) / 1e7 || 0
        },
        bt = function(t, e) {
            var r = e.charAt(0),
                n = parseFloat(e.substr(2));
            return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
        },
        wt = function(t, e) {
            for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
            return n < r
        },
        Tt = function() {
            var t, e, r = ut.length,
                n = ut.slice(0);
            for (lt = {}, ut.length = 0, t = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        Mt = function(t) {
            return !!(t._initted || t._startAt || t.add)
        },
        Ot = function(t, e, r, n) {
            ut.length && !a && Tt(), t.render(e, r, n || !!(a && e < 0 && Mt(t))), ut.length && !a && Tt()
        },
        St = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(K).length < 2 ? e : D(t) ? t.trim() : t
        },
        Et = function(t) {
            return t
        },
        kt = function(t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t
        },
        Ct = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        Pt = function t(e, r) {
            for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = L(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
            return e
        },
        At = function(t, e) {
            var r, n = {};
            for (r in t) r in e || (n[r] = t[r]);
            return n
        },
        Dt = function(t) {
            var e, r = t.parent || u,
                n = t.keyframes ? (e = B(t.keyframes), function(t, r) {
                    for (var n in r) n in t || "duration" === n && e || "ease" === n || (t[n] = r[n])
                }) : kt;
            if (X(t.inherit))
                for (; r;) n(t, r.vars.defaults), r = r.parent || r._dp;
            return t
        },
        Rt = function(t, e, r, n, i) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var o, a = t[n];
            if (i)
                for (o = e[i]; a && a[i] > o;) a = a._prev;
            return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = a, e.parent = e._dp = t, e
        },
        It = function(t, e, r, n) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var i = e._prev,
                o = e._next;
            i ? i._next = o : t[r] === e && (t[r] = o), o ? o._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
        },
        Yt = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        Lt = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var r = t; r;) r._dirty = 1, r = r.parent;
            return t
        },
        Xt = function(t, e, r, n) {
            return t._startAt && (a ? t._startAt.revert(ot) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
        },
        Ft = function t(e) {
            return !e || e._ts && t(e.parent)
        },
        Nt = function(t) {
            return t._repeat ? zt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        zt = function(t, e) {
            var r = Math.floor(t = xt(t / e));
            return t && r === t ? r - 1 : r
        },
        Bt = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        jt = function(t) {
            return t._end = xt(t._start + (t._tDur / Math.abs(t._ts || t._rts || O) || 0))
        },
        Ht = function(t, e) {
            var r = t._dp;
            return r && r.smoothChildTiming && t._ts && (t._start = xt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), jt(t), r._dirty || Lt(r, t)), t
        },
        Wt = function(t, e) {
            var r;
            if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Bt(t.rawTime(), e), (!e._dur || re(0, e.totalDuration(), r) - e._tTime > O) && e.render(r, !0)), Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                t._zTime = -1e-8
            }
        },
        Ut = function(t, e, r, n) {
            return e.parent && Yt(e), e._start = xt((I(r) ? r : r || t !== u ? Jt(t, r, e) : t._time) + e._delay), e._end = xt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Rt(t, e, "_first", "_last", t._sort ? "_start" : 0), Kt(e) || (t._recent = e), n || Wt(t, e), t._ts < 0 && Ht(t, t._tTime), t
        },
        qt = function(t, e) {
            return (Z.ScrollTrigger || tt("scrollTrigger", e)) && Z.ScrollTrigger.create(e, t)
        },
        Vt = function(t, e, r, n, i) {
            return Ze(t, e, i), t._initted ? !r && t._pt && !a && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== Pe.frame ? (ut.push(t), t._lazy = [i, n], 1) : void 0 : 1
        },
        Gt = function t(e) {
            var r = e.parent;
            return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        },
        Kt = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        $t = function(t, e, r, n) {
            var i = t._repeat,
                o = xt(e) || 0,
                a = t._tTime / t._tDur;
            return a && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : xt(o * (i + 1) + t._rDelay * i) : o, a > 0 && !n && Ht(t, t._tTime = t._tDur * a), t.parent && jt(t), r || Lt(t.parent, t), t
        },
        Zt = function(t) {
            return t instanceof Ue ? Lt(t) : $t(t, t._dur)
        },
        Qt = {
            _start: 0,
            endTime: nt,
            totalDuration: nt
        },
        Jt = function t(e, r, n) {
            var i, o, a, s = e.labels,
                u = e._recent || Qt,
                l = e.duration() >= M ? u.endTime(!1) : e._dur;
            return D(r) && (isNaN(r) || r in s) ? (o = r.charAt(0), a = "%" === r.substr(-1), i = r.indexOf("="), "<" === o || ">" === o ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in s || (s[r] = l), s[r]) : (o = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), a && n && (o = o / 100 * (B(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + o : l + o)) : null == r ? l : +r
        },
        te = function(t, e, r) {
            var n, i, o = I(e[1]),
                a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
                s = e[a];
            if (o && (s.duration = e[1]), s.parent = r, t) {
                for (n = s, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = X(i.vars.inherit) && i.parent;
                s.immediateRender = X(n.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[a - 1]
            }
            return new rr(e[0], s, e[a + 1])
        },
        ee = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        re = function(t, e, r) {
            return r < t ? t : r > e ? e : r
        },
        ne = function(t, e) {
            return D(t) && (e = $.exec(t)) ? e[1] : ""
        },
        ie = [].slice,
        oe = function(t, e) {
            return t && L(t) && "length" in t && (!e && !t.length || t.length - 1 in t && L(t[0])) && !t.nodeType && t !== l
        },
        ae = function(t, e, r) {
            return s && !e && s.selector ? s.selector(t) : !D(t) || r || !c && Ae() ? B(t) ? function(t, e, r) {
                return void 0 === r && (r = []), t.forEach(function(t) {
                    var n;
                    return D(t) && !e || oe(t, 1) ? (n = r).push.apply(n, ae(t)) : r.push(t)
                }) || r
            }(t, r) : oe(t) ? ie.call(t, 0) : t ? [t] : [] : ie.call((e || f).querySelectorAll(t), 0)
        },
        se = function(t) {
            return t = ae(t)[0] || et("Invalid scope") || {},
                function(e) {
                    var r = t.current || t.nativeElement || t;
                    return ae(e, r.querySelectorAll ? r : r === t ? et("Invalid scope") || f.createElement("div") : t)
                }
        },
        ue = function(t) {
            return t.sort(function() {
                return .5 - Math.random()
            })
        },
        le = function(t) {
            if (R(t)) return t;
            var e = L(t) ? t : {
                    each: t
                },
                r = Fe(e.ease),
                n = e.from || 0,
                i = parseFloat(e.base) || 0,
                o = {},
                a = n > 0 && n < 1,
                s = isNaN(n) || a,
                u = e.axis,
                l = n,
                c = n;
            return D(n) ? l = c = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[n] || 0 : !a && s && (l = n[0], c = n[1]),
                function(t, a, f) {
                    var p, h, d, g, v, m, _, y, x, b = (f || e).length,
                        w = o[b];
                    if (!w) {
                        if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, M])[1])) {
                            for (_ = -M; _ < (_ = f[x++].getBoundingClientRect().left) && x < b;);
                            x < b && x--
                        }
                        for (w = o[b] = [], p = s ? Math.min(x, b) * l - .5 : n % x, h = x === M ? 0 : s ? b * c / x - .5 : n / x | 0, _ = 0, y = M, m = 0; m < b; m++) d = m % x - p, g = h - (m / x | 0), w[m] = v = u ? Math.abs("y" === u ? g : d) : C(d * d + g * g), v > _ && (_ = v), v < y && (y = v);
                        "random" === n && ue(w), w.max = _ - y, w.min = y, w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (x > b ? b - 1 : u ? "y" === u ? b / x : x : Math.max(x, b / x)) || 0) * ("edges" === n ? -1 : 1), w.b = b < 0 ? i - b : i, w.u = ne(e.amount || e.each) || 0, r = r && b < 0 ? Le(r) : r
                    }
                    return b = (w[t] - w.min) / w.max || 0, xt(w.b + (r ? r(b) : b) * w.v) + w.u
                }
        },
        ce = function(t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function(r) {
                var n = xt(Math.round(parseFloat(r) / t) * t * e);
                return (n - n % 1) / e + (I(r) ? 0 : ne(r))
            }
        },
        fe = function(t, e) {
            var r, n, i = B(t);
            return !i && L(t) && (r = i = t.radius || M, t.values ? (t = ae(t.values), (n = !I(t[0])) && (r *= r)) : t = ce(t.increment)), ee(e, i ? R(t) ? function(e) {
                return n = t(e), Math.abs(n - e) <= r ? n : e
            } : function(e) {
                for (var i, o, a = parseFloat(n ? e.x : e), s = parseFloat(n ? e.y : 0), u = M, l = 0, c = t.length; c--;)(i = n ? (i = t[c].x - a) * i + (o = t[c].y - s) * o : Math.abs(t[c] - a)) < u && (u = i, l = c);
                return l = !r || u <= r ? t[l] : e, n || l === e || I(e) ? l : l + ne(e)
            } : ce(t))
        },
        pe = function(t, e, r, n) {
            return ee(B(t) ? !e : !0 === r ? !!(r = 0) : !n, function() {
                return B(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
            })
        },
        he = function(t, e, r) {
            return ee(r, function(r) {
                return t[~~e(r)]
            })
        },
        de = function(t) {
            return t.replace(j, function(t) {
                var e = t.indexOf("[") + 1,
                    r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split(H);
                return pe(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5)
            })
        },
        ge = function(t, e, r, n, i) {
            var o = e - t,
                a = n - r;
            return ee(i, function(e) {
                return r + ((e - t) / o * a || 0)
            })
        },
        ve = function(t, e, r) {
            var n, i, o, a = t.labels,
                s = M;
            for (n in a)(i = a[n] - e) < 0 == !!r && i && s > (i = Math.abs(i)) && (o = n, s = i);
            return o
        },
        me = function(t, e, r) {
            var n, i, o, a = t.vars,
                u = a[e],
                l = s,
                c = t._ctx;
            if (u) return n = a[e + "Params"], i = a.callbackScope || t, r && ut.length && Tt(), c && (s = c), o = n ? u.apply(i, n) : u.call(i), s = l, o
        },
        _e = function(t) {
            return Yt(t), t.scrollTrigger && t.scrollTrigger.kill(!!a), t.progress() < 1 && me(t, "onInterrupt"), t
        },
        ye = [],
        xe = function(t) {
            if (t)
                if (t = !t.name && t.default || t, F() || t.headless) {
                    var e = t.name,
                        r = R(t),
                        n = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        i = {
                            init: nt,
                            render: fr,
                            add: Ke,
                            kill: hr,
                            modifier: pr,
                            rawVars: 0
                        },
                        o = {
                            targetTest: 0,
                            get: 0,
                            getSetter: sr,
                            aliases: {},
                            register: 0
                        };
                    if (Ae(), t !== n) {
                        if (ct[e]) return;
                        kt(n, kt(At(t, i), o)), Ct(n.prototype, Ct(i, At(t, o))), ct[n.prop = e] = n, t.targetTest && (ht.push(n), st[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    rt(e, n), t.register && t.register(Cr, n, vr)
                } else ye.push(t)
        },
        be = 255,
        we = {
            aqua: [0, be, be],
            lime: [0, be, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, be],
            navy: [0, 0, 128],
            white: [be, be, be],
            olive: [128, 128, 0],
            yellow: [be, be, 0],
            orange: [be, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [be, 0, 0],
            pink: [be, 192, 203],
            cyan: [0, be, be],
            transparent: [be, be, be, 0]
        },
        Te = function(t, e, r) {
            return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * be + .5 | 0
        },
        Me = function(t, e, r) {
            var n, i, o, a, s, u, l, c, f, p, h = t ? I(t) ? [t >> 16, t >> 8 & be, t & be] : 0 : we.black;
            if (!h) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), we[t]) h = we[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (n = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(h = parseInt(t.substr(1, 6), 16)) >> 16, h >> 8 & be, h & be, parseInt(t.substr(7), 16) / 255];
                    h = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & be, t & be]
                } else if ("hsl" === t.substr(0, 3))
                    if (h = p = t.match(W), e) {
                        if (~t.indexOf("=")) return h = t.match(U), r && h.length < 4 && (h[3] = 1), h
                    } else a = +h[0] % 360 / 360, s = +h[1] / 100, n = 2 * (u = +h[2] / 100) - (i = u <= .5 ? u * (s + 1) : u + s - u * s), h.length > 3 && (h[3] *= 1), h[0] = Te(a + 1 / 3, n, i), h[1] = Te(a, n, i), h[2] = Te(a - 1 / 3, n, i);
                else h = t.match(W) || we.transparent;
                h = h.map(Number)
            }
            return e && !p && (n = h[0] / be, i = h[1] / be, o = h[2] / be, u = ((l = Math.max(n, i, o)) + (c = Math.min(n, i, o))) / 2, l === c ? a = s = 0 : (f = l - c, s = u > .5 ? f / (2 - l - c) : f / (l + c), a = l === n ? (i - o) / f + (i < o ? 6 : 0) : l === i ? (o - n) / f + 2 : (n - i) / f + 4, a *= 60), h[0] = ~~(a + .5), h[1] = ~~(100 * s + .5), h[2] = ~~(100 * u + .5)), r && h.length < 4 && (h[3] = 1), h
        },
        Oe = function(t) {
            var e = [],
                r = [],
                n = -1;
            return t.split(Ee).forEach(function(t) {
                var i = t.match(q) || [];
                e.push.apply(e, i), r.push(n += i.length + 1)
            }), e.c = r, e
        },
        Se = function(t, e, r) {
            var n, i, o, a, s = "",
                u = (t + s).match(Ee),
                l = e ? "hsla(" : "rgba(",
                c = 0;
            if (!u) return t;
            if (u = u.map(function(t) {
                    return (t = Me(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                }), r && (o = Oe(t), (n = r.c).join(s) !== o.c.join(s)))
                for (a = (i = t.replace(Ee, "1").split(q)).length - 1; c < a; c++) s += i[c] + (~n.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (o.length ? o : u.length ? u : r).shift());
            if (!i)
                for (a = (i = t.split(Ee)).length - 1; c < a; c++) s += i[c] + u[c];
            return s + i[a]
        },
        Ee = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in we) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        ke = /hsl[a]?\(/,
        Ce = function(t) {
            var e, r = t.join(" ");
            if (Ee.lastIndex = 0, Ee.test(r)) return e = ke.test(r), t[1] = Se(t[1], e), t[0] = Se(t[0], e, Oe(t[1])), !0
        },
        Pe = function() {
            var t, e, r, n, i, o, a = Date.now,
                s = 500,
                u = 33,
                h = a(),
                d = h,
                v = 1e3 / 240,
                m = v,
                _ = [],
                y = function r(l) {
                    var c, f, p, g, y = a() - d,
                        x = !0 === l;
                    if ((y > s || y < 0) && (h += y - u), ((c = (p = (d += y) - h) - m) > 0 || x) && (g = ++n.frame, i = p - 1e3 * n.time, n.time = p /= 1e3, m += c + (c >= v ? 4 : v - c), f = 1), x || (t = e(r)), f)
                        for (o = 0; o < _.length; o++) _[o](p, i, g, l)
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
                    p && (!c && F() && (l = c = window, f = l.document || {}, Z.gsap = Cr, (l.gsapVersions || (l.gsapVersions = [])).push(Cr.version), J(Q || l.GreenSockGlobals || !l.gsap && l || {}), ye.forEach(xe)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t && n.sleep(), e = r || function(t) {
                        return setTimeout(t, m - 1e3 * n.time + 1 | 0)
                    }, g = 1, y(2))
                },
                sleep: function() {
                    (r ? cancelAnimationFrame : clearTimeout)(t), g = 0, e = nt
                },
                lagSmoothing: function(t, e) {
                    s = t || 1 / 0, u = Math.min(e || 33, s)
                },
                fps: function(t) {
                    v = 1e3 / (t || 240), m = 1e3 * n.time + v
                },
                add: function(t, e, r) {
                    var i = e ? function(e, r, o, a) {
                        t(e, r, o, a), n.remove(i)
                    } : t;
                    return n.remove(t), _[r ? "unshift" : "push"](i), Ae(), i
                },
                remove: function(t, e) {
                    ~(e = _.indexOf(t)) && _.splice(e, 1) && o >= e && o--
                },
                _listeners: _
            }
        }(),
        Ae = function() {
            return !g && Pe.wake()
        },
        De = {},
        Re = /^[\d.\-M][\d.\-,\s]/,
        Ie = /["']/g,
        Ye = function(t) {
            for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), a = o[0], s = 1, u = o.length; s < u; s++) r = o[s], e = s !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[a] = isNaN(n) ? n.replace(Ie, "").trim() : +n, a = r.substr(e + 1).trim();
            return i
        },
        Le = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        Xe = function t(e, r) {
            for (var n, i = e._first; i;) i instanceof Ue ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
        },
        Fe = function(t, e) {
            return t && (R(t) ? t : De[t] || function(t) {
                var e, r, n, i, o = (t + "").split("("),
                    a = De[o[0]];
                return a && o.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Ye(o[1])] : (e = t, r = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", r), e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(St)) : De._CE && Re.test(t) ? De._CE("", t) : a
            }(t)) || e
        },
        Ne = function(t, e, r, n) {
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
            return _t(t, function(t) {
                for (var e in De[t] = Z[t] = o, De[i = t.toLowerCase()] = r, o) De[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = De[t + "." + e] = o[e]
            }), o
        },
        ze = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        Be = function t(e, r, n) {
            var i = r >= 1 ? r : 1,
                o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
                a = o / S * (Math.asin(1 / i) || 0),
                s = function(t) {
                    return 1 === t ? 1 : i * Math.pow(2, -10 * t) * A((t - a) * o) + 1
                },
                u = "out" === e ? s : "in" === e ? function(t) {
                    return 1 - s(1 - t)
                } : ze(s);
            return o = S / o, u.config = function(r, n) {
                return t(e, r, n)
            }, u
        },
        je = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var n = function(t) {
                    return t ? --t * t * ((r + 1) * t + r) + 1 : 0
                },
                i = "out" === e ? n : "in" === e ? function(t) {
                    return 1 - n(1 - t)
                } : ze(n);
            return i.config = function(r) {
                return t(e, r)
            }, i
        };
    _t("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Ne(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), De.Linear.easeNone = De.none = De.Linear.easeIn, Ne("Elastic", Be("in"), Be("out"), Be()), v = 7.5625, y = 2 * (_ = 1 / (m = 2.75)), x = 2.5 * _, Ne("Bounce", function(t) {
        return 1 - b(1 - t)
    }, b = function(t) {
        return t < _ ? v * t * t : t < y ? v * Math.pow(t - 1.5 / m, 2) + .75 : t < x ? v * (t -= 2.25 / m) * t + .9375 : v * Math.pow(t - 2.625 / m, 2) + .984375
    }), Ne("Expo", function(t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
    }), Ne("Circ", function(t) {
        return -(C(1 - t * t) - 1)
    }), Ne("Sine", function(t) {
        return 1 === t ? 1 : 1 - P(t * E)
    }), Ne("Back", je("in"), je("out"), je()), De.SteppedEase = De.steps = Z.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                n = t + (e ? 0 : 1),
                i = e ? 1 : 0;
            return function(t) {
                return ((n * re(0, .99999999, t) | 0) + i) * r
            }
        }
    }, T.ease = De["quad.out"], _t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return dt += t + "," + t + "Params,"
    });
    var He = function(t, e) {
            this.id = k++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : mt, this.set = e ? e.getSetter : sr
        },
        We = function() {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, $t(this, +t.duration, 1, 1), this.data = t.data, s && (this._ctx = s, s.data.push(this)), g || Pe.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, $t(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (Ae(), !arguments.length) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                    for (Ht(this, t), !r._dp || r.parent || Wt(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Ut(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === O || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), Ot(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Nt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Nt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
            }, e.iteration = function(t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? zt(this._tTime, r) + 1 : 1
            }, e.timeScale = function(t, e) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var r = this.parent && this._ts ? Bt(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(re(-Math.abs(this._delay), this.totalDuration(), r), !1 !== e), jt(this),
                    function(t) {
                        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                        return t
                    }(this)
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ae(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== O && (this._tTime -= O)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = xt(t);
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Ut(e, this, this._start - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (X(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bt(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.revert = function(t) {
                void 0 === t && (t = at);
                var e = a;
                return a = t, Mt(this) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), a = e, this
            }, e.globalTime = function(t) {
                for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
                return !this.parent && this._sat ? this._sat.globalTime(t) : r
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Zt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, Zt(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(Jt(this, t), X(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, X(e)), this._dur || (this._zTime = -1e-8), this
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
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - O))
            }, e.eventCallback = function(t, e, r) {
                var n = this.vars;
                return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
            }, e.then = function(t) {
                var e = this,
                    r = e._prom;
                return new Promise(function(n) {
                    var i = R(t) ? t : Et,
                        o = function() {
                            var t = e.then;
                            e.then = null, r && r(), R(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? o() : e._prom = o
                })
            }, e.kill = function() {
                _e(this)
            }, t
        }();
    kt(We.prototype, {
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
    var Ue = function(t) {
        function e(e, r) {
            var i;
            return void 0 === e && (e = {}), (i = t.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = X(e.sortChildren), u && Ut(e.parent || u, n(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && qt(n(i), e.scrollTrigger), i
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
            return Ut(this, rr.delayedCall(0, t, e), r)
        }, r.staggerTo = function(t, e, r, n, i, o, a) {
            return r.duration = e, r.stagger = r.stagger || n, r.onComplete = o, r.onCompleteParams = a, r.parent = this, new rr(t, r, Jt(this, i)), this
        }, r.staggerFrom = function(t, e, r, n, i, o, a) {
            return r.runBackwards = 1, Dt(r).immediateRender = X(r.immediateRender), this.staggerTo(t, e, r, n, i, o, a)
        }, r.staggerFromTo = function(t, e, r, n, i, o, a, s) {
            return n.startAt = r, Dt(n).immediateRender = X(n.immediateRender), this.staggerTo(t, e, n, i, o, a, s)
        }, r.render = function(t, e, r) {
            var n, i, o, s, l, c, f, p, h, d, g, v, m = this._time,
                _ = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur,
                x = t <= 0 ? 0 : xt(t),
                b = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (this !== u && x > _ && t >= 0 && (x = _), x !== this._tTime || r || b) {
                if (m !== this._time && y && (x += this._time - m, t += this._time - m), n = x, h = this._start, c = !(p = this._ts), b && (y || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (g = this._yoyo, l = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * l + t, e, r);
                    if (n = xt(x % l), x === _ ? (s = this._repeat, n = y) : ((s = ~~(d = xt(x / l))) && s === d && (n = y, s--), n > y && (n = y)), d = zt(this._tTime, l), !m && this._tTime && d !== s && this._tTime - d * l - this._dur <= 0 && (d = s), g && 1 & s && (n = y - n, v = 1), s !== d && !this._lock) {
                        var w = g && 1 & d,
                            T = w === (g && 1 & s);
                        if (s < d && (w = !w), m = w ? 0 : x % y ? y : x, this._lock = 1, this.render(m || (v ? 0 : xt(s * l)), e, !y)._lock = 0, this._tTime = x, !e && this.parent && me(this, "onRepeat"), this.vars.repeatRefresh && !v && (this.invalidate()._lock = 1, d = s), m && m !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (y = this._dur, _ = this._tDur, T && (this._lock = 2, m = w ? y : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !v && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
                        Xe(this, v)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (f = function(t, e, r) {
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
                    }(this, xt(m), xt(n)), f && (x -= n - (n = f._start))), this._tTime = x, this._time = n, this._act = !p, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && x && y && !e && !d && (me(this, "onStart"), this._tTime !== x)) return this;
                if (n >= m && t >= 0)
                    for (i = this._first; i;) {
                        if (o = i._next, (i._act || n >= i._start) && i._ts && f !== i) {
                            if (i.parent !== this) return this.render(t, e, r);
                            if (i.render(i._ts > 0 ? (n - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (n - i._start) * i._ts, e, r), n !== this._time || !this._ts && !c) {
                                f = 0, o && (x += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = o
                    } else {
                        i = this._last;
                        for (var M = t < 0 ? t : n; i;) {
                            if (o = i._prev, (i._act || M <= i._end) && i._ts && f !== i) {
                                if (i.parent !== this) return this.render(t, e, r);
                                if (i.render(i._ts > 0 ? (M - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (M - i._start) * i._ts, e, r || a && Mt(i)), n !== this._time || !this._ts && !c) {
                                    f = 0, o && (x += this._zTime = M ? -1e-8 : O);
                                    break
                                }
                            }
                            i = o
                        }
                    }
                if (f && !e && (this.pause(), f.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1, this._ts)) return this._start = h, jt(this), this.render(t, e, r);
                this._onUpdate && !e && me(this, "onUpdate", !0), (x === _ && this._tTime >= this.totalDuration() || !x && m) && (h !== this._start && Math.abs(p) === Math.abs(this._ts) || this._lock || ((t || !y) && (x === _ && this._ts > 0 || !x && this._ts < 0) && Yt(this, 1), e || t < 0 && !m || !x && !m && _ || (me(this, x === _ && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(x < _ && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, r.add = function(t, e) {
            var r = this;
            if (I(e) || (e = Jt(this, e, t)), !(t instanceof We)) {
                if (B(t)) return t.forEach(function(t) {
                    return r.add(t, e)
                }), this;
                if (D(t)) return this.addLabel(t, e);
                if (!R(t)) return this;
                t = rr.delayedCall(0, t)
            }
            return this !== t ? Ut(this, t, e) : this
        }, r.getChildren = function(t, e, r, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -M);
            for (var i = [], o = this._first; o;) o._start >= n && (o instanceof rr ? e && i.push(o) : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))), o = o._next;
            return i
        }, r.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, r.remove = function(t) {
            return D(t) ? this.removeLabel(t) : R(t) ? this.killTweensOf(t) : (t.parent === this && It(this, t), t === this._recent && (this._recent = this._last), Lt(this))
        }, r.totalTime = function(e, r) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = xt(Pe.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(t, e) {
            return this.labels[t] = Jt(this, e), this
        }, r.removeLabel = function(t) {
            return delete this.labels[t], this
        }, r.addPause = function(t, e, r) {
            var n = rr.delayedCall(0, e || nt, r);
            return n.data = "isPause", this._hasPause = 1, Ut(this, n, Jt(this, t))
        }, r.removePause = function(t) {
            var e = this._first;
            for (t = Jt(this, t); e;) e._start === t && "isPause" === e.data && Yt(e), e = e._next
        }, r.killTweensOf = function(t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--;) qe !== n[i] && n[i].kill(t, e);
            return this
        }, r.getTweensOf = function(t, e) {
            for (var r, n = [], i = ae(t), o = this._first, a = I(e); o;) o instanceof rr ? wt(o._targets, i) && (a ? (!qe || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r), o = o._next;
            return n
        }, r.tweenTo = function(t, e) {
            e = e || {};
            var r, n = this,
                i = Jt(n, t),
                o = e,
                a = o.startAt,
                s = o.onStart,
                u = o.onStartParams,
                l = o.immediateRender,
                c = rr.to(n, kt({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || O,
                    onStart: function() {
                        if (n.pause(), !r) {
                            var t = e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale());
                            c._dur !== t && $t(c, t, 0, 1).render(c._time, !0, !0), r = 1
                        }
                        s && s.apply(c, u || [])
                    }
                }, e));
            return l ? c.render(0) : c
        }, r.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, kt({
                startAt: {
                    time: Jt(this, t)
                }
            }, r))
        }, r.recent = function() {
            return this._recent
        }, r.nextLabel = function(t) {
            return void 0 === t && (t = this._time), ve(this, Jt(this, t))
        }, r.previousLabel = function(t) {
            return void 0 === t && (t = this._time), ve(this, Jt(this, t), 1)
        }, r.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + O)
        }, r.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            var n, i = this._first,
                o = this.labels;
            for (t = xt(t); i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
            if (e)
                for (n in o) o[n] >= r && (o[n] += t);
            return Lt(this)
        }, r.invalidate = function(e) {
            var r = this._first;
            for (this._lock = 0; r;) r.invalidate(e), r = r._next;
            return t.prototype.invalidate.call(this, e)
        }, r.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Lt(this)
        }, r.totalDuration = function(t) {
            var e, r, n, i = 0,
                o = this,
                a = o._last,
                s = M;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
            if (o._dirty) {
                for (n = o.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (r = a._start) > s && o._sort && a._ts && !o._lock ? (o._lock = 1, Ut(o, a, r - a._delay, 1)._lock = 0) : s = r, r < 0 && a._ts && (i -= r, (!n && !o._dp || n && n.smoothChildTiming) && (o._start += xt(r / o._ts), o._time -= r, o._tTime -= r), o.shiftChildren(-r, !1, -Infinity), s = 0), a._end > i && a._ts && (i = a._end), a = e;
                $t(o, o === u && o._time > i ? o._time : i, 1, 1), o._dirty = 0
            }
            return o._tDur
        }, e.updateRoot = function(t) {
            if (u._ts && (Ot(u, Bt(t, u)), h = Pe.frame), Pe.frame >= pt) {
                pt += w.autoSleep || 120;
                var e = u._first;
                if ((!e || !e._ts) && w.autoSleep && Pe._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Pe.sleep()
                }
            }
        }, e
    }(We);
    kt(Ue.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var qe, Ve, Ge = function(t, e, r, n, i, o, a) {
            var s, u, l, c, f, p, h, d, g = new vr(this._pt, t, e, 0, 1, cr, null, i),
                v = 0,
                m = 0;
            for (g.b = r, g.e = n, r += "", (h = ~(n += "").indexOf("random(")) && (n = de(n)), o && (o(d = [r, n], t, e), r = d[0], n = d[1]), u = r.match(V) || []; s = V.exec(n);) c = s[0], f = n.substring(v, s.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), c !== u[m++] && (p = parseFloat(u[m - 1]) || 0, g._pt = {
                _next: g._pt,
                p: f || 1 === m ? f : ",",
                s: p,
                c: "=" === c.charAt(1) ? bt(p, c) - p : parseFloat(c) - p,
                m: l && l < 4 ? Math.round : 0
            }, v = V.lastIndex);
            return g.c = v < n.length ? n.substring(v, n.length) : "", g.fp = a, (G.test(n) || h) && (g.e = 0), this._pt = g, g
        },
        Ke = function(t, e, r, n, i, o, a, s, u, l) {
            R(n) && (n = n(i || 0, t, o));
            var c, f = t[e],
                p = "get" !== r ? r : R(f) ? u ? t[e.indexOf("set") || !R(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f,
                h = R(f) ? u ? or : ir : nr;
            if (D(n) && (~n.indexOf("random(") && (n = de(n)), "=" === n.charAt(1) && ((c = bt(p, n) + (ne(p) || 0)) || 0 === c) && (n = c)), !l || p !== n || Ve) return isNaN(p * n) || "" === n ? (!f && !(e in t) && tt(e, n), Ge.call(this, t, e, p, n, h, s || w.stringFilter, u)) : (c = new vr(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof f ? lr : ur, 0, h), u && (c.fp = u), a && c.modifier(a, this, t), this._pt = c)
        },
        $e = function(t, e, r, n, i, o) {
            var a, s, u, l;
            if (ct[t] && !1 !== (a = new ct[t]).init(i, a.rawVars ? e[t] : function(t, e, r, n, i) {
                    if (R(t) && (t = Je(t, i, e, r, n)), !L(t) || t.style && t.nodeType || B(t) || z(t)) return D(t) ? Je(t, i, e, r, n) : t;
                    var o, a = {};
                    for (o in t) a[o] = Je(t[o], i, e, r, n);
                    return a
                }(e[t], n, i, o, r), r, n, o) && (r._pt = s = new vr(r._pt, i, t, 0, 1, a.render, a, 0, a.priority), r !== d))
                for (u = r._ptLookup[r._targets.indexOf(i)], l = a._props.length; l--;) u[a._props[l]] = s;
            return a
        },
        Ze = function t(e, r, n) {
            var i, s, l, c, f, p, h, d, g, v, m, _, y, x = e.vars,
                b = x.ease,
                w = x.startAt,
                S = x.immediateRender,
                E = x.lazy,
                k = x.onUpdate,
                C = x.runBackwards,
                P = x.yoyoEase,
                A = x.keyframes,
                D = x.autoRevert,
                R = e._dur,
                I = e._startAt,
                Y = e._targets,
                L = e.parent,
                F = L && "nested" === L.data ? L.vars.targets : Y,
                N = "auto" === e._overwrite && !o,
                z = e.timeline;
            if (z && (!A || !b) && (b = "none"), e._ease = Fe(b, T.ease), e._yEase = P ? Le(Fe(!0 === P ? b : P, T.ease)) : 0, P && e._yoyo && !e._repeat && (P = e._yEase, e._yEase = e._ease, e._ease = P), e._from = !z && !!x.runBackwards, !z || A && !x.stagger) {
                if (_ = (d = Y[0] ? vt(Y[0]).harness : 0) && x[d.prop], i = At(x, st), I && (I._zTime < 0 && I.progress(1), r < 0 && C && S && !D ? I.render(-1, !0) : I.revert(C && R ? ot : it), I._lazy = 0), w) {
                    if (Yt(e._startAt = rr.set(Y, kt({
                            data: "isStart",
                            overwrite: !1,
                            parent: L,
                            immediateRender: !0,
                            lazy: !I && X(E),
                            startAt: null,
                            delay: 0,
                            onUpdate: k && function() {
                                return me(e, "onUpdate")
                            },
                            stagger: 0
                        }, w))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (a || !S && !D) && e._startAt.revert(ot), S && R && r <= 0 && n <= 0) return void(r && (e._zTime = r))
                } else if (C && R && !I)
                    if (r && (S = !1), l = kt({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: S && !I && X(E),
                            immediateRender: S,
                            stagger: 0,
                            parent: L
                        }, i), _ && (l[d.prop] = _), Yt(e._startAt = rr.set(Y, l)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (a ? e._startAt.revert(ot) : e._startAt.render(-1, !0)), e._zTime = r, S) {
                        if (!r) return
                    } else t(e._startAt, O, O);
                for (e._pt = e._ptCache = 0, E = R && X(E) || E && !R, s = 0; s < Y.length; s++) {
                    if (h = (f = Y[s])._gsap || gt(Y)[s]._gsap, e._ptLookup[s] = v = {}, lt[h.id] && ut.length && Tt(), m = F === Y ? s : F.indexOf(f), d && !1 !== (g = new d).init(f, _ || i, e, m, F) && (e._pt = c = new vr(e._pt, f, g.name, 0, 1, g.render, g, 0, g.priority), g._props.forEach(function(t) {
                            v[t] = c
                        }), g.priority && (p = 1)), !d || _)
                        for (l in i) ct[l] && (g = $e(l, i, e, m, f, F)) ? g.priority && (p = 1) : v[l] = c = Ke.call(e, f, l, "get", i[l], m, F, 0, x.stringFilter);
                    e._op && e._op[s] && e.kill(f, e._op[s]), N && e._pt && (qe = e, u.killTweensOf(f, v, e.globalTime(r)), y = !e.parent, qe = 0), e._pt && E && (lt[h.id] = 1)
                }
                p && gr(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = k, e._initted = (!e._op || e._pt) && !y, A && r <= 0 && z.render(M, !0, !0)
        },
        Qe = function(t, e, r, n) {
            var i, o, a = e.ease || n || "power1.inOut";
            if (B(e)) o = r[t] || (r[t] = []), e.forEach(function(t, r) {
                return o.push({
                    t: r / (e.length - 1) * 100,
                    v: t,
                    e: a
                })
            });
            else
                for (i in e) o = r[i] || (r[i] = []), "ease" === i || o.push({
                    t: parseFloat(t),
                    v: e[i],
                    e: a
                })
        },
        Je = function(t, e, r, n, i) {
            return R(t) ? t.call(e, r, n, i) : D(t) && ~t.indexOf("random(") ? de(t) : t
        },
        tr = dt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        er = {};
    _t(tr + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return er[t] = 1
    });
    var rr = function(t) {
        function e(e, r, i, a) {
            var s;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var l, c, f, p, h, d, g, v, m = (s = t.call(this, a ? r : Dt(r)) || this).vars,
                _ = m.duration,
                y = m.delay,
                x = m.immediateRender,
                b = m.stagger,
                T = m.overwrite,
                M = m.keyframes,
                O = m.defaults,
                S = m.scrollTrigger,
                E = m.yoyoEase,
                k = r.parent || u,
                C = (B(e) || z(e) ? I(e[0]) : "length" in r) ? [e] : ae(e);
            if (s._targets = C.length ? gt(C) : et("GSAP target " + e + " not found. https://gsap.com", !w.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = T, M || b || N(_) || N(y)) {
                if (r = s.vars, (l = s.timeline = new Ue({
                        data: "nested",
                        defaults: O || {},
                        targets: k && "nested" === k.data ? k.vars.targets : C
                    })).kill(), l.parent = l._dp = n(s), l._start = 0, b || N(_) || N(y)) {
                    if (p = C.length, g = b && le(b), L(b))
                        for (h in b) ~tr.indexOf(h) && (v || (v = {}), v[h] = b[h]);
                    for (c = 0; c < p; c++)(f = At(r, er)).stagger = 0, E && (f.yoyoEase = E), v && Ct(f, v), d = C[c], f.duration = +Je(_, n(s), c, d, C), f.delay = (+Je(y, n(s), c, d, C) || 0) - s._delay, !b && 1 === p && f.delay && (s._delay = y = f.delay, s._start += y, f.delay = 0), l.to(d, f, g ? g(c, d, C) : 0), l._ease = De.none;
                    l.duration() ? _ = y = 0 : s.timeline = 0
                } else if (M) {
                    Dt(kt(l.vars.defaults, {
                        ease: "none"
                    })), l._ease = Fe(M.ease || r.ease || "none");
                    var P, A, D, R = 0;
                    if (B(M)) M.forEach(function(t) {
                        return l.to(C, t, ">")
                    }), l.duration();
                    else {
                        for (h in f = {}, M) "ease" === h || "easeEach" === h || Qe(h, M[h], f, M.easeEach);
                        for (h in f)
                            for (P = f[h].sort(function(t, e) {
                                    return t.t - e.t
                                }), R = 0, c = 0; c < P.length; c++)(D = {
                                ease: (A = P[c]).e,
                                duration: (A.t - (c ? P[c - 1].t : 0)) / 100 * _
                            })[h] = A.v, l.to(C, D, R), R += D.duration;
                        l.duration() < _ && l.to({}, {
                            duration: _ - l.duration()
                        })
                    }
                }
                _ || s.duration(_ = l.duration())
            } else s.timeline = 0;
            return !0 !== T || o || (qe = n(s), u.killTweensOf(C), qe = 0), Ut(k, n(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), (x || !_ && !M && s._start === xt(k._time) && X(x) && Ft(n(s)) && "nested" !== k.data) && (s._tTime = -1e-8, s.render(Math.max(0, -y) || 0)), S && qt(n(s), S), s
        }
        i(e, t);
        var r = e.prototype;
        return r.render = function(t, e, r) {
            var n, i, o, s, u, l, c, f, p, h = this._time,
                d = this._tDur,
                g = this._dur,
                v = t < 0,
                m = t > d - O && !v ? d : t < O ? 0 : t;
            if (g) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== v || this._lazy) {
                    if (n = m, f = this.timeline, this._repeat) {
                        if (s = g + this._rDelay, this._repeat < -1 && v) return this.totalTime(100 * s + t, e, r);
                        if (n = xt(m % s), m === d ? (o = this._repeat, n = g) : (o = ~~(u = xt(m / s))) && o === u ? (n = g, o--) : n > g && (n = g), (l = this._yoyo && 1 & o) && (p = this._yEase, n = g - n), u = zt(this._tTime, s), n === h && !r && this._initted && o === u) return this._tTime = m, this;
                        o !== u && (f && this._yEase && Xe(f, l), this.vars.repeatRefresh && !l && !this._lock && n !== s && this._initted && (this._lock = r = 1, this.render(xt(s * o), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Vt(this, v ? t : n, r, e, m)) return this._tTime = 0, this;
                        if (!(h === this._time || r && this.vars.repeatRefresh && o !== u)) return this;
                        if (g !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (p || this._ease)(n / g), this._from && (this.ratio = c = 1 - c), !h && m && !e && !u && (me(this, "onStart"), this._tTime !== m)) return this;
                    for (i = this._pt; i;) i.r(c, i.d), i = i._next;
                    f && f.render(t < 0 ? t : f._dur * f._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (v && Xt(this, t, 0, r), me(this, "onUpdate")), this._repeat && o !== u && this.vars.onRepeat && !e && this.parent && me(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (v && !this._onUpdate && Xt(this, t, 0, !0), (t || !g) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && Yt(this, 1), e || v && !h || !(m || h || l) || (me(this, m === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < d && this.timeScale() > 0) && this._prom()))
                }
            } else ! function(t, e, r, n) {
                var i, o, s, u = t.ratio,
                    l = e < 0 || !e && (!t._start && Gt(t) && (t._initted || !Kt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Kt(t)) ? 0 : 1,
                    c = t._rDelay,
                    f = 0;
                if (c && t._repeat && (f = re(0, t._tDur, e), o = zt(f, c), t._yoyo && 1 & o && (l = 1 - l), o !== zt(t._tTime, c) && (u = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== u || a || n || t._zTime === O || !e && t._zTime) {
                    if (!t._initted && Vt(t, e, n, r, f)) return;
                    for (s = t._zTime, t._zTime = e || (r ? O : 0), r || (r = e && !s), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = f, i = t._pt; i;) i.r(l, i.d), i = i._next;
                    e < 0 && Xt(t, e, 0, !0), t._onUpdate && !r && me(t, "onUpdate"), f && t._repeat && !r && t.parent && me(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && Yt(t, 1), r || a || (me(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, r.targets = function() {
            return this._targets
        }, r.invalidate = function(e) {
            return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, r.resetTo = function(t, e, r, n, i) {
            g || Pe.wake(), this._ts || this.play();
            var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Ze(this, o),
                function(t, e, r, n, i, o, a, s) {
                    var u, l, c, f, p = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!p)
                        for (p = t._ptCache[e] = [], c = t._ptLookup, f = t._targets.length; f--;) {
                            if ((u = c[f][e]) && u.d && u.d._pt)
                                for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                            if (!u) return Ve = 1, t.vars[e] = "+=0", Ze(t, a), Ve = 0, s ? et(e + " not eligible for reset") : 1;
                            p.push(u)
                        }
                    for (f = p.length; f--;)(u = (l = p[f])._pt || l).s = !n && 0 !== n || i ? u.s + (n || 0) + o * u.c : n, u.c = r - u.s, l.e && (l.e = yt(r) + ne(l.e)), l.b && (l.b = u.s + ne(l.b))
                }(this, t, e, r, n, this._ease(o / this._dur), o, i) ? this.resetTo(t, e, r, n, 1) : (Ht(this, 0), this.parent || Rt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? _e(this) : this.scrollTrigger && this.scrollTrigger.kill(!!a), this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, qe && !0 !== qe.vars.overwrite)._first || _e(this), this.parent && r !== this.timeline.totalDuration() && $t(this, this._dur * this.timeline._tDur / r, 0, 1), this
            }
            var n, i, o, s, u, l, c, f = this._targets,
                p = t ? ae(t) : f,
                h = this._ptLookup,
                d = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                    for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
                    return r < 0
                }(f, p)) return "all" === e && (this._pt = 0), _e(this);
            for (n = this._op = this._op || [], "all" !== e && (D(e) && (u = {}, _t(e, function(t) {
                    return u[t] = 1
                }), e = u), e = function(t, e) {
                    var r, n, i, o, a = t[0] ? vt(t[0]).harness : 0,
                        s = a && a.aliases;
                    if (!s) return e;
                    for (n in r = Ct({}, e), s)
                        if (n in r)
                            for (i = (o = s[n].split(",")).length; i--;) r[o[i]] = r[n];
                    return r
                }(f, e)), c = f.length; c--;)
                if (~p.indexOf(f[c]))
                    for (u in i = h[c], "all" === e ? (n[c] = e, s = i, o = {}) : (o = n[c] = n[c] || {}, s = e), s)(l = i && i[u]) && ("kill" in l.d && !0 !== l.d.kill(u) || It(this, l, "_pt"), delete i[u]), "all" !== o && (o[u] = 1);
            return this._initted && !this._pt && d && _e(this), this
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
    }(We);
    kt(rr.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), _t("staggerTo,staggerFrom,staggerFromTo", function(t) {
        rr[t] = function() {
            var e = new Ue,
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
        ar = function(t, e, r) {
            return t.setAttribute(e, r)
        },
        sr = function(t, e) {
            return R(t[e]) ? ir : Y(t[e]) && t.setAttribute ? ar : nr
        },
        ur = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        lr = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        cr = function(t, e) {
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
        fr = function(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        pr = function(t, e, r, n) {
            for (var i, o = this._pt; o;) i = o._next, o.p === n && o.modifier(t, e, r), o = i
        },
        hr = function(t) {
            for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? It(this, n, "_pt") : n.dep || (e = 1), n = r;
            return !e
        },
        dr = function(t, e, r, n) {
            n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
        },
        gr = function(t) {
            for (var e, r, n, i, o = t._pt; o;) {
                for (e = o._next, r = n; r && r.pr > o.pr;) r = r._next;
                (o._prev = r ? r._prev : i) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : i = o, o = e
            }
            t._pt = n
        },
        vr = function() {
            function t(t, e, r, n, i, o, a, s, u) {
                this.t = e, this.s = n, this.c = i, this.p = r, this.r = o || ur, this.d = a || this, this.set = s || nr, this.pr = u || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, r) {
                this.mSet = this.mSet || this.set, this.set = dr, this.m = t, this.mt = r, this.tween = e
            }, t
        }();
    _t(dt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return st[t] = 1
    }), Z.TweenMax = Z.TweenLite = rr, Z.TimelineLite = Z.TimelineMax = Ue, u = new Ue({
        sortChildren: !1,
        defaults: T,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), w.stringFilter = Ce;
    var mr = [],
        _r = {},
        yr = [],
        xr = 0,
        br = 0,
        wr = function(t) {
            return (_r[t] || yr).map(function(t) {
                return t()
            })
        },
        Tr = function() {
            var t = Date.now(),
                e = [];
            t - xr > 2 && (wr("matchMediaInit"), mr.forEach(function(t) {
                var r, n, i, o, a = t.queries,
                    s = t.conditions;
                for (n in a)(r = l.matchMedia(a[n]).matches) && (i = 1), r !== s[n] && (s[n] = r, o = 1);
                o && (t.revert(), i && e.push(t))
            }), wr("matchMediaRevert"), e.forEach(function(t) {
                return t.onMatch(t, function(e) {
                    return t.add(null, e)
                })
            }), xr = t, wr("matchMedia"))
        },
        Mr = function() {
            function t(t, e) {
                this.selector = e && se(e), this.data = [], this._r = [], this.isReverted = !1, this.id = br++, t && this.add(t)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                R(t) && (r = e, e = t, t = R);
                var n = this,
                    i = function() {
                        var t, i = s,
                            o = n.selector;
                        return i && i !== n && i.data.push(n), r && (n.selector = se(r)), s = n, t = e.apply(n, arguments), R(t) && n._r.push(t), s = i, n.selector = o, n.isReverted = !1, t
                    };
                return n.last = i, t === R ? i(n, function(t) {
                    return n.add(null, t)
                }) : t ? n[t] = i : i
            }, e.ignore = function(t) {
                var e = s;
                s = null, t(this), s = e
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
                            }), i = r.data.length; i--;)(e = r.data[i]) instanceof Ue ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof rr) && e.revert && e.revert(t);
                        r._r.forEach(function(e) {
                            return e(t, r)
                        }), r.isReverted = !0
                    }() : this.data.forEach(function(t) {
                        return t.kill && t.kill()
                    }), this.clear(), e)
                    for (var n = mr.length; n--;) mr[n].id === this.id && mr.splice(n, 1)
            }, e.revert = function(t) {
                this.kill(t || {})
            }, t
        }(),
        Or = function() {
            function t(t) {
                this.contexts = [], this.scope = t, s && s.data.push(this)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                L(t) || (t = {
                    matches: t
                });
                var n, i, o, a = new Mr(0, r || this.scope),
                    u = a.conditions = {};
                for (i in s && !a.selector && (a.selector = s.selector), this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t) "all" === i ? o = 1 : (n = l.matchMedia(t[i])) && (mr.indexOf(a) < 0 && mr.push(a), (u[i] = n.matches) && (o = 1), n.addListener ? n.addListener(Tr) : n.addEventListener("change", Tr));
                return o && e(a, function(t) {
                    return a.add(null, t)
                }), this
            }, e.revert = function(t) {
                this.kill(t || {})
            }, e.kill = function(t) {
                this.contexts.forEach(function(e) {
                    return e.kill(t, !0)
                })
            }, t
        }(),
        Sr = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                e.forEach(function(t) {
                    return xe(t)
                })
            },
            timeline: function(t) {
                return new Ue(t)
            },
            getTweensOf: function(t, e) {
                return u.getTweensOf(t, e)
            },
            getProperty: function(t, e, r, n) {
                D(t) && (t = ae(t)[0]);
                var i = vt(t || {}).get,
                    o = r ? Et : St;
                return "native" === r && (r = ""), t ? e ? o((ct[e] && ct[e].get || i)(t, e, r, n)) : function(e, r, n) {
                    return o((ct[e] && ct[e].get || i)(t, e, r, n))
                } : t
            },
            quickSetter: function(t, e, r) {
                if ((t = ae(t)).length > 1) {
                    var n = t.map(function(t) {
                            return Cr.quickSetter(t, e, r)
                        }),
                        i = n.length;
                    return function(t) {
                        for (var e = i; e--;) n[e](t)
                    }
                }
                t = t[0] || {};
                var o = ct[e],
                    a = vt(t),
                    s = a.harness && (a.harness.aliases || {})[e] || e,
                    u = o ? function(e) {
                        var n = new o;
                        d._pt = 0, n.init(t, r ? e + r : e, d, 0, [t]), n.render(1, n), d._pt && fr(1, d)
                    } : a.set(t, s);
                return o ? u : function(e) {
                    return u(t, s, r ? e + r : e, a, 1)
                }
            },
            quickTo: function(t, e, r) {
                var n, i = Cr.to(t, kt(((n = {})[e] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})),
                    o = function(t, r, n) {
                        return i.resetTo(e, t, r, n)
                    };
                return o.tween = i, o
            },
            isTweening: function(t) {
                return u.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Fe(t.ease, T.ease)), Pt(T, t || {})
            },
            config: function(t) {
                return Pt(w, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    r = t.effect,
                    n = t.plugins,
                    i = t.defaults,
                    o = t.extendTimeline;
                (n || "").split(",").forEach(function(t) {
                    return t && !ct[t] && !Z[t] && et(e + " effect requires " + t + " plugin.")
                }), ft[e] = function(t, e, n) {
                    return r(ae(t), kt(e || {}, i), n)
                }, o && (Ue.prototype[e] = function(t, r, n) {
                    return this.add(ft[e](t, L(r) ? r : (n = r) && {}, this), n)
                })
            },
            registerEase: function(t, e) {
                De[t] = Fe(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Fe(t, e) : De
            },
            getById: function(t) {
                return u.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var r, n, i = new Ue(t);
                for (i.smoothChildTiming = X(t.smoothChildTiming), u.remove(i), i._dp = 0, i._time = i._tTime = u._time, r = u._first; r;) n = r._next, !e && !r._dur && r instanceof rr && r.vars.onComplete === r._targets[0] || Ut(i, r, r._start - r._delay), r = n;
                return Ut(u, i, 0), i
            },
            context: function(t, e) {
                return t ? new Mr(t, e) : s
            },
            matchMedia: function(t) {
                return new Or(t)
            },
            matchMediaRefresh: function() {
                return mr.forEach(function(t) {
                    var e, r, n = t.conditions;
                    for (r in n) n[r] && (n[r] = !1, e = 1);
                    e && t.revert()
                }) || Tr()
            },
            addEventListener: function(t, e) {
                var r = _r[t] || (_r[t] = []);
                ~r.indexOf(e) || r.push(e)
            },
            removeEventListener: function(t, e) {
                var r = _r[t],
                    n = r && r.indexOf(e);
                n >= 0 && r.splice(n, 1)
            },
            utils: {
                wrap: function t(e, r, n) {
                    var i = r - e;
                    return B(e) ? he(e, t(0, e.length), r) : ee(n, function(t) {
                        return (i + (t - e) % i) % i + e
                    })
                },
                wrapYoyo: function t(e, r, n) {
                    var i = r - e,
                        o = 2 * i;
                    return B(e) ? he(e, t(0, e.length - 1), r) : ee(n, function(t) {
                        return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
                    })
                },
                distribute: le,
                random: pe,
                snap: fe,
                normalize: function(t, e, r) {
                    return ge(t, e, 0, 1, r)
                },
                getUnit: ne,
                clamp: function(t, e, r) {
                    return ee(r, function(r) {
                        return re(t, e, r)
                    })
                },
                splitColor: Me,
                toArray: ae,
                selector: se,
                mapRange: ge,
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
                        var a, s, u, l, c, f = D(e),
                            p = {};
                        if (!0 === n && (i = 1) && (n = null), f) e = {
                            p: e
                        }, r = {
                            p: r
                        };
                        else if (B(e) && !B(r)) {
                            for (u = [], l = e.length, c = l - 2, s = 1; s < l; s++) u.push(t(e[s - 1], e[s]));
                            l--, o = function(t) {
                                t *= l;
                                var e = Math.min(c, ~~t);
                                return u[e](t - e)
                            }, n = r
                        } else i || (e = Ct(B(e) ? [] : {}, e));
                        if (!u) {
                            for (a in r) Ke.call(p, e, a, "get", r[a]);
                            o = function(t) {
                                return fr(t, p) || (f ? e.p : e)
                            }
                        }
                    }
                    return ee(n, o)
                },
                shuffle: ue
            },
            install: J,
            effects: ft,
            ticker: Pe,
            updateRoot: Ue.updateRoot,
            plugins: ct,
            globalTimeline: u,
            core: {
                PropTween: vr,
                globals: rt,
                Tween: rr,
                Timeline: Ue,
                Animation: We,
                getCache: vt,
                _removeLinkedListItem: It,
                reverting: function() {
                    return a
                },
                context: function(t) {
                    return t && s && (s.data.push(t), t._ctx = s), s
                },
                suppressOverwrites: function(t) {
                    return o = t
                }
            }
        };
    _t("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return Sr[t] = rr[t]
    }), Pe.add(Ue.updateRoot), d = Sr.to({}, {
        duration: 0
    });
    var Er = function(t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
            return r
        },
        kr = function(t, e) {
            return {
                name: t,
                headless: 1,
                rawVars: 1,
                init: function(t, r, n) {
                    n._onInit = function(t) {
                        var n, i;
                        if (D(r) && (n = {}, _t(r, function(t) {
                                return n[t] = 1
                            }), r = n), e) {
                            for (i in n = {}, r) n[i] = e(r[i]);
                            r = n
                        }! function(t, e) {
                            var r, n, i, o = t._targets;
                            for (r in e)
                                for (n = o.length; n--;)(i = t._ptLookup[n][r]) && (i = i.d) && (i._pt && (i = Er(i, r)), i && i.modifier && i.modifier(e[r], t, o[n], r))
                        }(t, r)
                    }
                }
            }
        },
        Cr = Sr.registerPlugin({
            name: "attr",
            init: function(t, e, r, n, i) {
                var o, a, s;
                for (o in this.tween = r, e) s = t.getAttribute(o) || "", (a = this.add(t, "setAttribute", (s || 0) + "", e[o], n, i, 0, 0, o)).op = o, a.b = s, this._props.push(o)
            },
            render: function(t, e) {
                for (var r = e._pt; r;) a ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
            }
        }, {
            name: "endArray",
            headless: 1,
            init: function(t, e) {
                for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
            }
        }, kr("roundProps", ce), kr("modifiers"), kr("snap", fe)) || Sr;
    rr.version = Ue.version = Cr.version = "3.14.2", p = 1, F() && Ae(), De.Power0, De.Power1, De.Power2, De.Power3, De.Power4, De.Linear, De.Quad, De.Cubic, De.Quart, De.Quint, De.Strong, De.Elastic, De.Back, De.SteppedEase, De.Bounce, De.Sine, De.Expo, De.Circ;
    var Pr, Ar, Dr, Rr, Ir, Yr, Lr, Xr, Fr = {},
        Nr = 180 / Math.PI,
        zr = Math.PI / 180,
        Br = Math.atan2,
        jr = /([A-Z])/g,
        Hr = /(left|right|width|margin|padding|x)/i,
        Wr = /[\s,\(]\S/,
        Ur = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        qr = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Vr = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Gr = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Kr = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        $r = function(t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        },
        Zr = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Qr = function(t, e) {
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
        an = "transform",
        sn = an + "Origin",
        un = function t(e, r) {
            var n = this,
                i = this.target,
                o = i.style,
                a = i._gsap;
            if (e in Fr && o) {
                if (this.tfm = this.tfm || {}, "transform" === e) return Ur.transform.split(",").forEach(function(e) {
                    return t.call(n, e, r)
                });
                if (~(e = Ur[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                        return n.tfm[t] = Sn(i, t)
                    }) : this.tfm[e] = a.x ? a[e] : Sn(i, e), e === sn && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(an) >= 0) return;
                a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(sn, r, "")), e = an
            }(o || r) && this.props.push(e, r, o[e])
        },
        ln = function(t) {
            t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        cn = function() {
            var t, e, r = this.props,
                n = this.target,
                i = n.style,
                o = n._gsap;
            for (t = 0; t < r.length; t += 3) r[t + 1] ? 2 === r[t + 1] ? n[r[t]](r[t + 2]) : n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(jr, "-$1").toLowerCase());
            if (this.tfm) {
                for (e in this.tfm) o[e] = this.tfm[e];
                o.svg && (o.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (t = Lr()) && t.isStart || i[an] || (ln(i), o.zOrigin && i[sn] && (i[sn] += " " + o.zOrigin + "px", o.zOrigin = 0, o.renderTransform()), o.uncache = 1)
            }
        },
        fn = function(t, e) {
            var r = {
                target: t,
                props: [],
                revert: cn,
                save: un
            };
            return t._gsap || Cr.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(t) {
                return r.save(t)
            }), r
        },
        pn = function(t, e) {
            var r = Ar.createElementNS ? Ar.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ar.createElement(t);
            return r && r.style ? r : Ar.createElement(t)
        },
        hn = function t(e, r, n) {
            var i = getComputedStyle(e);
            return i[r] || i.getPropertyValue(r.replace(jr, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, gn(r) || r, 1) || ""
        },
        dn = "O,Moz,ms,Ms,Webkit".split(","),
        gn = function(t, e, r) {
            var n = (e || Ir).style,
                i = 5;
            if (t in n && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(dn[i] + t in n););
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? dn[i] : "") + t
        },
        vn = function() {
            "undefined" != typeof window && window.document && (Pr = window, Ar = Pr.document, Dr = Ar.documentElement, Ir = pn("div") || {
                style: {}
            }, pn("div"), an = gn(an), sn = an + "Origin", Ir.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Xr = !!gn("perspective"), Lr = Cr.core.reverting, Rr = 1)
        },
        mn = function(t) {
            var e, r = t.ownerSVGElement,
                n = pn("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = t.cloneNode(!0);
            i.style.display = "block", n.appendChild(i), Dr.appendChild(n);
            try {
                e = i.getBBox()
            } catch (t) {}
            return n.removeChild(i), Dr.removeChild(n), e
        },
        _n = function(t, e) {
            for (var r = e.length; r--;)
                if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        yn = function(t) {
            var e, r;
            try {
                e = t.getBBox()
            } catch (n) {
                e = mn(t), r = 1
            }
            return e && (e.width || e.height) || r || (e = mn(t)), !e || e.width || e.x || e.y ? e : {
                x: +_n(t, ["x", "cx", "x1"]) || 0,
                y: +_n(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        xn = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !yn(t))
        },
        bn = function(t, e) {
            if (e) {
                var r, n = t.style;
                e in Fr && e !== sn && (e = an), n.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty("--" === r ? e : e.replace(jr, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        wn = function(t, e, r, n, i, o) {
            var a = new vr(t._pt, e, r, 0, 1, o ? Qr : Zr);
            return t._pt = a, a.b = n, a.e = i, t._props.push(r), a
        },
        Tn = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Mn = {
            grid: 1,
            flex: 1
        },
        On = function t(e, r, n, i) {
            var o, a, s, u, l = parseFloat(n) || 0,
                c = (n + "").trim().substr((l + "").length) || "px",
                f = Ir.style,
                p = Hr.test(r),
                h = "svg" === e.tagName.toLowerCase(),
                d = (h ? "client" : "offset") + (p ? "Width" : "Height"),
                g = 100,
                v = "px" === i,
                m = "%" === i;
            if (i === c || !l || Tn[i] || Tn[c]) return l;
            if ("px" !== c && !v && (l = t(e, r, n, "px")), u = e.getCTM && xn(e), (m || "%" === c) && (Fr[r] || ~r.indexOf("adius"))) return o = u ? e.getBBox()[p ? "width" : "height"] : e[d], yt(m ? l / o * g : l / 100 * o);
            if (f[p ? "width" : "height"] = g + (v ? c : i), a = "rem" !== i && ~r.indexOf("adius") || "em" === i && e.appendChild && !h ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Ar && a.appendChild || (a = Ar.body), (s = a._gsap) && m && s.width && p && s.time === Pe.time && !s.uncache) return yt(l / s.width * g);
            if (!m || "height" !== r && "width" !== r)(m || "%" === c) && !Mn[hn(a, "display")] && (f.position = hn(e, "position")), a === e && (f.position = "static"), a.appendChild(Ir), o = Ir[d], a.removeChild(Ir), f.position = "absolute";
            else {
                var _ = e.style[r];
                e.style[r] = g + i, o = e[d], _ ? e.style[r] = _ : bn(e, r)
            }
            return p && m && ((s = vt(a)).time = Pe.time, s.width = a[d]), yt(v ? o * l / g : o && l ? g / o * l : 0)
        },
        Sn = function(t, e, r, n) {
            var i;
            return Rr || vn(), e in Ur && "transform" !== e && ~(e = Ur[e]).indexOf(",") && (e = e.split(",")[0]), Fr[e] && "transform" !== e ? (i = Fn(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Nn(hn(t, sn)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = An[e] && An[e](t, e, r) || hn(t, e) || mt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? On(t, e, i, r) + r : i
        },
        En = function(t, e, r, n) {
            if (!r || "none" === r) {
                var i = gn(e, t, 1),
                    o = i && hn(t, i, 1);
                o && o !== r ? (e = i, r = o) : "borderColor" === e && (r = hn(t, "borderTopColor"))
            }
            var a, s, u, l, c, f, p, h, d, g, v, m = new vr(this._pt, t.style, e, 0, 1, cr),
                _ = 0,
                y = 0;
            if (m.b = r, m.e = n, r += "", "var(--" === (n += "").substring(0, 6) && (n = hn(t, n.substring(4, n.indexOf(")")))), "auto" === n && (f = t.style[e], t.style[e] = n, n = hn(t, e) || n, f ? t.style[e] = f : bn(t, e)), Ce(a = [r, n]), n = a[1], u = (r = a[0]).match(q) || [], (n.match(q) || []).length) {
                for (; s = q.exec(n);) p = s[0], d = n.substring(_, s.index), c ? c = (c + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (c = 1), p !== (f = u[y++] || "") && (l = parseFloat(f) || 0, v = f.substr((l + "").length), "=" === p.charAt(1) && (p = bt(l, p) + v), h = parseFloat(p), g = p.substr((h + "").length), _ = q.lastIndex - g.length, g || (g = g || w.units[e] || v, _ === n.length && (n += g, m.e += g)), v !== g && (l = On(t, e, f, g) || 0), m._pt = {
                    _next: m._pt,
                    p: d || 1 === y ? d : ",",
                    s: l,
                    c: h - l,
                    m: c && c < 4 || "zIndex" === e ? Math.round : 0
                });
                m.c = _ < n.length ? n.substring(_, n.length) : ""
            } else m.r = "display" === e && "none" === n ? Qr : Zr;
            return G.test(n) && (m.e = 0), this._pt = m, m
        },
        kn = {
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
            return "top" !== r && "bottom" !== r && "left" !== n && "right" !== n || (t = r, r = n, n = t), e[0] = kn[r] || r, e[1] = kn[n] || n, e.join(" ")
        },
        Pn = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var r, n, i, o = e.t,
                    a = o.style,
                    s = e.u,
                    u = o._gsap;
                if ("all" === s || !0 === s) a.cssText = "", n = 1;
                else
                    for (i = (s = s.split(",")).length; --i > -1;) r = s[i], Fr[r] && (n = 1, r = "transformOrigin" === r ? sn : an), bn(o, r);
                n && (bn(o, an), u && (u.svg && o.removeAttribute("transform"), a.scale = a.rotate = a.translate = "none", Fn(o, 1), u.uncache = 1, ln(a)))
            }
        },
        An = {
            clearProps: function(t, e, r, n, i) {
                if ("isFromStart" !== i.data) {
                    var o = t._pt = new vr(t._pt, e, r, 0, 0, Pn);
                    return o.u = n, o.pr = -10, o.tween = i, t._props.push(r), 1
                }
            }
        },
        Dn = [1, 0, 0, 1, 0, 0],
        Rn = {},
        In = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        Yn = function(t) {
            var e = hn(t, an);
            return In(e) ? Dn : e.substr(7).match(U).map(yt)
        },
        Ln = function(t, e) {
            var r, n, i, o, a = t._gsap || vt(t),
                s = t.style,
                u = Yn(t);
            return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Dn : u : (u !== Dn || t.offsetParent || t === Dr || a.svg || (i = s.display, s.display = "block", (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (o = 1, n = t.nextElementSibling, Dr.appendChild(t)), u = Yn(t), i ? s.display = i : bn(t, "display"), o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : Dr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        Xn = function(t, e, r, n, i, o) {
            var a, s, u, l = t._gsap,
                c = i || Ln(t, !0),
                f = l.xOrigin || 0,
                p = l.yOrigin || 0,
                h = l.xOffset || 0,
                d = l.yOffset || 0,
                g = c[0],
                v = c[1],
                m = c[2],
                _ = c[3],
                y = c[4],
                x = c[5],
                b = e.split(" "),
                w = parseFloat(b[0]) || 0,
                T = parseFloat(b[1]) || 0;
            r ? c !== Dn && (s = g * _ - v * m) && (u = w * (-v / s) + T * (g / s) - (g * x - v * y) / s, w = w * (_ / s) + T * (-m / s) + (m * x - _ * y) / s, T = u) : (w = (a = yn(t)).x + (~b[0].indexOf("%") ? w / 100 * a.width : w), T = a.y + (~(b[1] || b[0]).indexOf("%") ? T / 100 * a.height : T)), n || !1 !== n && l.smooth ? (y = w - f, x = T - p, l.xOffset = h + (y * g + x * m) - y, l.yOffset = d + (y * v + x * _) - x) : l.xOffset = l.yOffset = 0, l.xOrigin = w, l.yOrigin = T, l.smooth = !!n, l.origin = e, l.originIsAbsolute = !!r, t.style[sn] = "0px 0px", o && (wn(o, l, "xOrigin", f, w), wn(o, l, "yOrigin", p, T), wn(o, l, "xOffset", h, l.xOffset), wn(o, l, "yOffset", d, l.yOffset)), t.setAttribute("data-svg-origin", w + " " + T)
        },
        Fn = function(t, e) {
            var r = t._gsap || new He(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n, i, o, a, s, u, l, c, f, p, h, d, g, v, m, _, y, x, b, T, M, O, S, E, k, C, P, A, D, R, I, Y, L = t.style,
                X = r.scaleX < 0,
                F = "px",
                N = "deg",
                z = getComputedStyle(t),
                B = hn(t, sn) || "0";
            return n = i = o = u = l = c = f = p = h = 0, a = s = 1, r.svg = !(!t.getCTM || !xn(t)), z.translate && ("none" === z.translate && "none" === z.scale && "none" === z.rotate || (L[an] = ("none" !== z.translate ? "translate3d(" + (z.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== z.rotate ? "rotate(" + z.rotate + ") " : "") + ("none" !== z.scale ? "scale(" + z.scale.split(" ").join(",") + ") " : "") + ("none" !== z[an] ? z[an] : "")), L.scale = L.rotate = L.translate = "none"), v = Ln(t, r.svg), r.svg && (r.uncache ? (k = t.getBBox(), B = r.xOrigin - k.x + "px " + (r.yOrigin - k.y) + "px", E = "") : E = !e && t.getAttribute("data-svg-origin"), Xn(t, E || B, !!E || r.originIsAbsolute, !1 !== r.smooth, v)), d = r.xOrigin || 0, g = r.yOrigin || 0, v !== Dn && (x = v[0], b = v[1], T = v[2], M = v[3], n = O = v[4], i = S = v[5], 6 === v.length ? (a = Math.sqrt(x * x + b * b), s = Math.sqrt(M * M + T * T), u = x || b ? Br(b, x) * Nr : 0, (f = T || M ? Br(T, M) * Nr + u : 0) && (s *= Math.abs(Math.cos(f * zr))), r.svg && (n -= d - (d * x + g * T), i -= g - (d * b + g * M))) : (Y = v[6], R = v[7], P = v[8], A = v[9], D = v[10], I = v[11], n = v[12], i = v[13], o = v[14], l = (m = Br(Y, D)) * Nr, m && (E = O * (_ = Math.cos(-m)) + P * (y = Math.sin(-m)), k = S * _ + A * y, C = Y * _ + D * y, P = O * -y + P * _, A = S * -y + A * _, D = Y * -y + D * _, I = R * -y + I * _, O = E, S = k, Y = C), c = (m = Br(-T, D)) * Nr, m && (_ = Math.cos(-m), I = M * (y = Math.sin(-m)) + I * _, x = E = x * _ - P * y, b = k = b * _ - A * y, T = C = T * _ - D * y), u = (m = Br(b, x)) * Nr, m && (E = x * (_ = Math.cos(m)) + b * (y = Math.sin(m)), k = O * _ + S * y, b = b * _ - x * y, S = S * _ - O * y, x = E, O = k), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, c = 180 - c), a = yt(Math.sqrt(x * x + b * b + T * T)), s = yt(Math.sqrt(S * S + Y * Y)), m = Br(O, S), f = Math.abs(m) > 2e-4 ? m * Nr : 0, h = I ? 1 / (I < 0 ? -I : I) : 0), r.svg && (E = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !In(hn(t, an)), E && t.setAttribute("transform", E))), Math.abs(f) > 90 && Math.abs(f) < 270 && (X ? (a *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (s *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + F, r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + F, r.z = o + F, r.scaleX = yt(a), r.scaleY = yt(s), r.rotation = yt(u) + N, r.rotationX = yt(l) + N, r.rotationY = yt(c) + N, r.skewX = f + N, r.skewY = p + N, r.transformPerspective = h + F, (r.zOrigin = parseFloat(B.split(" ")[2]) || !e && r.zOrigin || 0) && (L[sn] = Nn(B)), r.xOffset = r.yOffset = 0, r.force3D = w.force3D, r.renderTransform = r.svg ? qn : Xr ? Un : Bn, r.uncache = 0, r
        },
        Nn = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        zn = function(t, e, r) {
            var n = ne(e);
            return yt(parseFloat(e) + parseFloat(On(t, "x", r + "px", n))) + n
        },
        Bn = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Un(t, e)
        },
        jn = "0deg",
        Hn = "0px",
        Wn = ") ",
        Un = function(t, e) {
            var r = e || this,
                n = r.xPercent,
                i = r.yPercent,
                o = r.x,
                a = r.y,
                s = r.z,
                u = r.rotation,
                l = r.rotationY,
                c = r.rotationX,
                f = r.skewX,
                p = r.skewY,
                h = r.scaleX,
                d = r.scaleY,
                g = r.transformPerspective,
                v = r.force3D,
                m = r.target,
                _ = r.zOrigin,
                y = "",
                x = "auto" === v && t && 1 !== t || !0 === v;
            if (_ && (c !== jn || l !== jn)) {
                var b, w = parseFloat(l) * zr,
                    T = Math.sin(w),
                    M = Math.cos(w);
                w = parseFloat(c) * zr, b = Math.cos(w), o = zn(m, o, T * b * -_), a = zn(m, a, -Math.sin(w) * -_), s = zn(m, s, M * b * -_ + _)
            }
            g !== Hn && (y += "perspective(" + g + Wn), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), (x || o !== Hn || a !== Hn || s !== Hn) && (y += s !== Hn || x ? "translate3d(" + o + ", " + a + ", " + s + ") " : "translate(" + o + ", " + a + Wn), u !== jn && (y += "rotate(" + u + Wn), l !== jn && (y += "rotateY(" + l + Wn), c !== jn && (y += "rotateX(" + c + Wn), f === jn && p === jn || (y += "skew(" + f + ", " + p + Wn), 1 === h && 1 === d || (y += "scale(" + h + ", " + d + Wn), m.style[an] = y || "translate(0, 0)"
        },
        qn = function(t, e) {
            var r, n, i, o, a, s = e || this,
                u = s.xPercent,
                l = s.yPercent,
                c = s.x,
                f = s.y,
                p = s.rotation,
                h = s.skewX,
                d = s.skewY,
                g = s.scaleX,
                v = s.scaleY,
                m = s.target,
                _ = s.xOrigin,
                y = s.yOrigin,
                x = s.xOffset,
                b = s.yOffset,
                w = s.forceCSS,
                T = parseFloat(c),
                M = parseFloat(f);
            p = parseFloat(p), h = parseFloat(h), (d = parseFloat(d)) && (h += d = parseFloat(d), p += d), p || h ? (p *= zr, h *= zr, r = Math.cos(p) * g, n = Math.sin(p) * g, i = Math.sin(p - h) * -v, o = Math.cos(p - h) * v, h && (d *= zr, a = Math.tan(h - d), i *= a = Math.sqrt(1 + a * a), o *= a, d && (a = Math.tan(d), r *= a = Math.sqrt(1 + a * a), n *= a)), r = yt(r), n = yt(n), i = yt(i), o = yt(o)) : (r = g, o = v, n = i = 0), (T && !~(c + "").indexOf("px") || M && !~(f + "").indexOf("px")) && (T = On(m, "x", c, "px"), M = On(m, "y", f, "px")), (_ || y || x || b) && (T = yt(T + _ - (_ * r + y * i) + x), M = yt(M + y - (_ * n + y * o) + b)), (u || l) && (a = m.getBBox(), T = yt(T + u / 100 * a.width), M = yt(M + l / 100 * a.height)), a = "matrix(" + r + "," + n + "," + i + "," + o + "," + T + "," + M + ")", m.setAttribute("transform", a), w && (m.style[an] = a)
        },
        Vn = function(t, e, r, n, i) {
            var o, a, s = 360,
                u = D(i),
                l = parseFloat(i) * (u && ~i.indexOf("rad") ? Nr : 1) - n,
                c = n + l + "deg";
            return u && ("short" === (o = i.split("_")[1]) && (l %= s) !== l % 180 && (l += l < 0 ? s : -360), "cw" === o && l < 0 ? l = (l + 36e9) % s - ~~(l / s) * s : "ccw" === o && l > 0 && (l = (l - 36e9) % s - ~~(l / s) * s)), t._pt = a = new vr(t._pt, e, r, n, l, Vr), a.e = c, a.u = "deg", t._props.push(r), a
        },
        Gn = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        Kn = function(t, e, r) {
            var n, i, o, a, s, u, l, c = Gn({}, r._gsap),
                f = r.style;
            for (i in c.svg ? (o = r.getAttribute("transform"), r.setAttribute("transform", ""), f[an] = e, n = Fn(r, 1), bn(r, an), r.setAttribute("transform", o)) : (o = getComputedStyle(r)[an], f[an] = e, n = Fn(r, 1), f[an] = o), Fr)(o = c[i]) !== (a = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (s = ne(o) !== (l = ne(a)) ? On(r, i, o, l) : parseFloat(o), u = parseFloat(a), t._pt = new vr(t._pt, n, i, s, u - s, qr), t._pt.u = l || 0, t._props.push(i));
            Gn(n, c)
        };
    _t("padding,margin,Width,Radius", function(t, e) {
        var r = "Top",
            n = "Right",
            i = "Bottom",
            o = "Left",
            a = (e < 3 ? [r, n, i, o] : [r + o, r + n, i + n, i + o]).map(function(r) {
                return e < 2 ? t + r : "border" + r + t
            });
        An[e > 1 ? "border" + t : t] = function(t, e, r, n, i) {
            var o, s;
            if (arguments.length < 4) return o = a.map(function(e) {
                return Sn(t, e, r)
            }), 5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s;
            o = (n + "").split(" "), s = {}, a.forEach(function(t, e) {
                return s[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
            }), t.init(e, s, i)
        }
    });
    var $n, Zn, Qn = {
        name: "css",
        register: vn,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, n, i) {
            var o, a, s, u, l, c, f, p, h, d, g, v, m, _, y, x, b, T = this._props,
                M = t.style,
                O = r.vars.startAt;
            for (f in Rr || vn(), this.styles = this.styles || fn(t), x = this.styles.props, this.tween = r, e)
                if ("autoRound" !== f && (a = e[f], !ct[f] || !$e(f, e, r, n, t, i)))
                    if (l = typeof a, c = An[f], "function" === l && (l = typeof(a = a.call(r, n, t, i))), "string" === l && ~a.indexOf("random(") && (a = de(a)), c) c(this, t, f, a, r) && (y = 1);
                    else if ("--" === f.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(f) + "").trim(), a += "", Ee.lastIndex = 0, Ee.test(o) || (p = ne(o), (h = ne(a)) ? p !== h && (o = On(t, f, o, h) + h) : p && (a += p)), this.add(M, "setProperty", o, a, n, i, 0, 0, f), T.push(f), x.push(f, 0, M[f]);
            else if ("undefined" !== l) {
                if (O && f in O ? (o = "function" == typeof O[f] ? O[f].call(r, n, t, i) : O[f], D(o) && ~o.indexOf("random(") && (o = de(o)), ne(o + "") || "auto" === o || (o += w.units[f] || ne(Sn(t, f)) || ""), "=" === (o + "").charAt(1) && (o = Sn(t, f))) : o = Sn(t, f), u = parseFloat(o), (d = "string" === l && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), s = parseFloat(a), f in Ur && ("autoAlpha" === f && (1 === u && "hidden" === Sn(t, "visibility") && s && (u = 0), x.push("visibility", 0, M.visibility), wn(this, M, "visibility", u ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)), "scale" !== f && "transform" !== f && ~(f = Ur[f]).indexOf(",") && (f = f.split(",")[0])), g = f in Fr) {
                    if (this.styles.save(f), b = a, "string" === l && "var(--" === a.substring(0, 6)) {
                        if ("calc(" === (a = hn(t, a.substring(4, a.indexOf(")")))).substring(0, 5)) {
                            var S = t.style.perspective;
                            t.style.perspective = a, a = hn(t, "perspective"), S ? t.style.perspective = S : bn(t, "perspective")
                        }
                        s = parseFloat(a)
                    }
                    if (v || ((m = t._gsap).renderTransform && !e.parseTransform || Fn(t, e.parseTransform), _ = !1 !== e.smoothOrigin && m.smooth, (v = this._pt = new vr(this._pt, M, an, 0, 1, m.renderTransform, m, 0, -1)).dep = 1), "scale" === f) this._pt = new vr(this._pt, m, "scaleY", m.scaleY, (d ? bt(m.scaleY, d + s) : s) - m.scaleY || 0, qr), this._pt.u = 0, T.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            x.push(sn, 0, M[sn]), a = Cn(a), m.svg ? Xn(t, a, 0, _, 0, this) : ((h = parseFloat(a.split(" ")[2]) || 0) !== m.zOrigin && wn(this, m, "zOrigin", m.zOrigin, h), wn(this, M, f, Nn(o), Nn(a)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            Xn(t, a, 1, _, 0, this);
                            continue
                        }
                        if (f in Rn) {
                            Vn(this, m, f, u, d ? bt(u, d + a) : a);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            wn(this, m, "smooth", m.smooth, a);
                            continue
                        }
                        if ("force3D" === f) {
                            m[f] = a;
                            continue
                        }
                        if ("transform" === f) {
                            Kn(this, a, t);
                            continue
                        }
                    }
                } else f in M || (f = gn(f) || f);
                if (g || (s || 0 === s) && (u || 0 === u) && !Wr.test(a) && f in M) s || (s = 0), (p = (o + "").substr((u + "").length)) !== (h = ne(a) || (f in w.units ? w.units[f] : p)) && (u = On(t, f, o, h)), this._pt = new vr(this._pt, g ? m : M, f, u, (d ? bt(u, d + s) : s) - u, g || "px" !== h && "zIndex" !== f || !1 === e.autoRound ? qr : $r), this._pt.u = h || 0, g && b !== a ? (this._pt.b = o, this._pt.e = b, this._pt.r = Kr) : p !== h && "%" !== h && (this._pt.b = o, this._pt.r = Gr);
                else if (f in M) En.call(this, t, f, o, d ? d + a : a);
                else if (f in t) this.add(t, f, o || t[f], d ? d + a : a, n, i);
                else if ("parseTransform" !== f) {
                    tt(f, a);
                    continue
                }
                g || (f in M ? x.push(f, 0, M[f]) : "function" == typeof t[f] ? x.push(f, 2, t[f]()) : x.push(f, 1, o || t[f])), T.push(f)
            }
            y && gr(this)
        },
        render: function(t, e) {
            if (e.tween._time || !Lr())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: Sn,
        aliases: Ur,
        getSetter: function(t, e, r) {
            var n = Ur[e];
            return n && n.indexOf(",") < 0 && (e = n), e in Fr && e !== sn && (t._gsap.x || Sn(t, "x")) ? r && Yr === r ? "scale" === e ? rn : en : (Yr = r || {}) && ("scale" === e ? nn : on) : t.style && !Y(t.style[e]) ? Jr : ~e.indexOf("-") ? tn : sr(t, e)
        },
        core: {
            _removeProperty: bn,
            _getMatrix: Ln
        }
    };
    Cr.utils.checkPrefix = gn, Cr.core.getStyleSaver = fn, Zn = _t("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + ($n = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Fr[t] = 1
    }), _t($n, function(t) {
        w.units[t] = "deg", Rn[t] = 1
    }), Ur[Zn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + $n, _t("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Ur[e[1]] = Zn[e[0]]
    }), _t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        w.units[t] = "px"
    }), Cr.registerPlugin(Qn);
    var Jn, ti, ei, ri, ni, ii, oi, ai, si, ui = Cr.registerPlugin(Qn) || Cr,
        li = (ui.core.Tween, "transform"),
        ci = li + "Origin",
        fi = function(t) {
            var e = t.ownerDocument || t;
            !(li in t.style) && "msTransform" in t.style && (ci = (li = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode););
            if (ti = window, oi = new _i, e) {
                Jn = e, ei = e.documentElement, ri = e.body, (ai = Jn.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
                var r = e.createElement("div"),
                    n = e.createElement("div"),
                    i = e && (e.body || e.firstElementChild);
                i && i.appendChild && (i.appendChild(r), r.appendChild(n), r.style.position = "static", r.style.transform = "translate3d(0,0,1px)", si = n.offsetParent !== r, i.removeChild(r))
            }
            return e
        },
        pi = [],
        hi = [],
        di = function(t) {
            return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        },
        gi = function t(e) {
            return "fixed" === ti.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
        },
        vi = function t(e, r) {
            if (e.parentNode && (Jn || fi(e))) {
                var n = di(e),
                    i = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                    o = n ? r ? "rect" : "g" : "div",
                    a = 2 !== r ? 0 : 100,
                    s = 3 === r ? 100 : 0,
                    u = {
                        position: "absolute",
                        display: "block",
                        pointerEvents: "none",
                        margin: "0",
                        padding: "0"
                    },
                    l = Jn.createElementNS ? Jn.createElementNS(i.replace(/^https/, "http"), o) : Jn.createElement(o);
                return r && (n ? (ii || (ii = t(e)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + a + "," + s + ")"), l.setAttribute("fill", "transparent"), ii.appendChild(l)) : (ni || (ni = t(e), Object.assign(ni.style, u)), Object.assign(l.style, u, {
                    width: "0.1px",
                    height: "0.1px",
                    top: s + "px",
                    left: a + "px"
                }), ni.appendChild(l))), l
            }
            throw "Need document and parent."
        },
        mi = function(t, e, r, n, i, o, a) {
            return t.a = e, t.b = r, t.c = n, t.d = i, t.e = o, t.f = a, t
        },
        _i = function() {
            function t(t, e, r, n, i, o) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), mi(this, t, e, r, n, i, o)
            }
            var e = t.prototype;
            return e.inverse = function() {
                var t = this.a,
                    e = this.b,
                    r = this.c,
                    n = this.d,
                    i = this.e,
                    o = this.f,
                    a = t * n - e * r || 1e-10;
                return mi(this, n / a, -e / a, -r / a, t / a, (r * o - n * i) / a, -(t * o - e * i) / a)
            }, e.multiply = function(t) {
                var e = this.a,
                    r = this.b,
                    n = this.c,
                    i = this.d,
                    o = this.e,
                    a = this.f,
                    s = t.a,
                    u = t.c,
                    l = t.b,
                    c = t.d,
                    f = t.e,
                    p = t.f;
                return mi(this, s * e + l * n, s * r + l * i, u * e + c * n, u * r + c * i, o + f * e + p * n, a + f * r + p * i)
            }, e.clone = function() {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f)
            }, e.equals = function(t) {
                var e = this.a,
                    r = this.b,
                    n = this.c,
                    i = this.d,
                    o = this.e,
                    a = this.f;
                return e === t.a && r === t.b && n === t.c && i === t.d && o === t.e && a === t.f
            }, e.apply = function(t, e) {
                void 0 === e && (e = {});
                var r = t.x,
                    n = t.y,
                    i = this.a,
                    o = this.b,
                    a = this.c,
                    s = this.d,
                    u = this.e,
                    l = this.f;
                return e.x = r * i + n * a + u || 0, e.y = r * o + n * s + l || 0, e
            }, t
        }();

    function yi(t, e, r, n) {
        if (!t || !t.parentNode || (Jn || fi(t)).documentElement === t) return new _i;
        var i = function(t) {
                for (var e, r; t && t !== ri;)(r = t._gsap) && r.uncache && r.get(t, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), e ? e.push(r) : e = [r]), t = t.parentNode;
                return e
            }(t),
            o = di(t) ? pi : hi,
            a = function(t, e) {
                var r, n, i, o, a, s, u = di(t),
                    l = t === u,
                    c = u ? pi : hi,
                    f = t.parentNode,
                    p = f && !u && f.shadowRoot && f.shadowRoot.appendChild ? f.shadowRoot : f;
                if (t === ti) return t;
                if (c.length || c.push(vi(t, 1), vi(t, 2), vi(t, 3)), r = u ? ii : ni, u) l ? (i = function(t) {
                    var e, r = t.getCTM();
                    return r || (e = t.style[li], t.style[li] = "none", t.appendChild(ai), r = ai.getCTM(), t.removeChild(ai), e ? t.style[li] = e : t.style.removeProperty(li.replace(/([A-Z])/g, "-$1").toLowerCase())), r || oi.clone()
                }(t), o = -i.e / i.a, a = -i.f / i.d, n = oi) : t.getBBox ? (i = t.getBBox(), n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems ? n.numberOfItems > 1 ? function(t) {
                    for (var e = new _i, r = 0; r < t.numberOfItems; r++) e.multiply(t.getItem(r).matrix);
                    return e
                }(n) : n.getItem(0).matrix : oi, o = n.a * i.x + n.c * i.y, a = n.b * i.x + n.d * i.y) : (n = new _i, o = a = 0), e && "g" === t.tagName.toLowerCase() && (o = a = 0), (l || !t.getBoundingClientRect().width ? u : f).appendChild(r), r.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + o) + "," + (n.f + a) + ")");
                else {
                    if (o = a = 0, si)
                        for (n = t.offsetParent, i = t; i && (i = i.parentNode) && i !== n && i.parentNode;)(ti.getComputedStyle(i)[li] + "").length > 4 && (o = i.offsetLeft, a = i.offsetTop, i = 0);
                    if ("absolute" !== (s = ti.getComputedStyle(t)).position && "fixed" !== s.position)
                        for (n = t.offsetParent; f && f !== n;) o += f.scrollLeft || 0, a += f.scrollTop || 0, f = f.parentNode;
                    (i = r.style).top = t.offsetTop - a + "px", i.left = t.offsetLeft - o + "px", i[li] = s[li], i[ci] = s[ci], i.position = "fixed" === s.position ? "fixed" : "absolute", p.appendChild(r)
                }
                return r
            }(t, r),
            s = o[0].getBoundingClientRect(),
            u = o[1].getBoundingClientRect(),
            l = o[2].getBoundingClientRect(),
            c = a.parentNode,
            f = !n && gi(t),
            p = new _i((u.left - s.left) / 100, (u.top - s.top) / 100, (l.left - s.left) / 100, (l.top - s.top) / 100, s.left + (f ? 0 : ti.pageXOffset || Jn.scrollLeft || ei.scrollLeft || ri.scrollLeft || 0), s.top + (f ? 0 : ti.pageYOffset || Jn.scrollTop || ei.scrollTop || ri.scrollTop || 0));
        if (c.removeChild(a), i)
            for (s = i.length; s--;)(u = i[s]).scaleX = u.scaleY = 0, u.renderTransform(1, u);
        return e ? p.inverse() : p
    }

    function xi(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    var bi, wi, Ti, Mi, Oi, Si, Ei, ki, Ci, Pi, Ai, Di, Ri, Ii, Yi, Li, Xi, Fi, Ni, zi, Bi, ji, Hi = 0,
        Wi = function() {
            return "undefined" != typeof window
        },
        Ui = function() {
            return bi || Wi() && (bi = window.gsap) && bi.registerPlugin && bi
        },
        qi = function(t) {
            return "function" == typeof t
        },
        Vi = function(t) {
            return "object" == typeof t
        },
        Gi = function(t) {
            return void 0 === t
        },
        Ki = function() {
            return !1
        },
        $i = "transform",
        Zi = "transformOrigin",
        Qi = function(t) {
            return Math.round(1e4 * t) / 1e4
        },
        Ji = Array.isArray,
        to = function(t, e) {
            var r = Ti.createElementNS ? Ti.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ti.createElement(t);
            return r.style ? r : Ti.createElement(t)
        },
        eo = 180 / Math.PI,
        ro = 1e20,
        no = new _i,
        io = Date.now || function() {
            return (new Date).getTime()
        },
        oo = [],
        ao = {},
        so = 0,
        uo = /^(?:a|input|textarea|button|select)$/i,
        lo = 0,
        co = {},
        fo = {},
        po = function(t, e) {
            var r, n = {};
            for (r in t) n[r] = e ? t[r] * e : t[r];
            return n
        },
        ho = function t(e, r) {
            for (var n, i = e.length; i--;) r ? e[i].style.touchAction = r : e[i].style.removeProperty("touch-action"), (n = e[i].children) && n.length && t(n, r)
        },
        go = function() {
            return oo.forEach(function(t) {
                return t()
            })
        },
        vo = function() {
            return !oo.length && bi.ticker.remove(go)
        },
        mo = function(t) {
            for (var e = oo.length; e--;) oo[e] === t && oo.splice(e, 1);
            bi.to(vo, {
                overwrite: !0,
                delay: 15,
                duration: 0,
                onComplete: vo,
                data: "_draggable"
            })
        },
        _o = function(t, e, r, n) {
            if (t.addEventListener) {
                var i = Ri[e];
                n = n || (Ai ? {
                    passive: !1
                } : null), t.addEventListener(i || e, r, n), i && e !== i && t.addEventListener(e, r, n)
            }
        },
        yo = function(t, e, r, n) {
            if (t.removeEventListener) {
                var i = Ri[e];
                t.removeEventListener(i || e, r, n), i && e !== i && t.removeEventListener(e, r, n)
            }
        },
        xo = function(t) {
            t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation()
        },
        bo = function t(e) {
            Ii = e.touches && Hi < e.touches.length, yo(e.target, "touchend", t)
        },
        wo = function(t) {
            Ii = t.touches && Hi < t.touches.length, _o(t.target, "touchend", bo)
        },
        To = function(t) {
            return wi.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0
        },
        Mo = function(t) {
            return wi.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0
        },
        Oo = function t(e, r) {
            _o(e, "scroll", r), Eo(e.parentNode) || t(e.parentNode, r)
        },
        So = function t(e, r) {
            yo(e, "scroll", r), Eo(e.parentNode) || t(e.parentNode, r)
        },
        Eo = function(t) {
            return !(t && t !== Mi && 9 !== t.nodeType && t !== Ti.body && t !== wi && t.nodeType && t.parentNode)
        },
        ko = function(t, e) {
            var r = "x" === e ? "Width" : "Height",
                n = "scroll" + r,
                i = "client" + r;
            return Math.max(0, Eo(t) ? Math.max(Mi[n], Oi[n]) - (wi["inner" + r] || Mi[i] || Oi[i]) : t[n] - t[i])
        },
        Co = function t(e, r) {
            var n = ko(e, "x"),
                i = ko(e, "y");
            Eo(e) ? e = fo : t(e.parentNode, r), e._gsMaxScrollX = n, e._gsMaxScrollY = i, r || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
        },
        Po = function(t, e, r) {
            var n = t.style;
            n && (Gi(n[e]) && (e = Ci(e, t) || e), null == r ? n.removeProperty && n.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : n[e] = r)
        },
        Ao = function(t) {
            return wi.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t)
        },
        Do = {},
        Ro = function(t) {
            if (t === wi) return Do.left = Do.top = 0, Do.width = Do.right = Mi.clientWidth || t.innerWidth || Oi.clientWidth || 0, Do.height = Do.bottom = (t.innerHeight || 0) - 20 < Mi.clientHeight ? Mi.clientHeight : t.innerHeight || Oi.clientHeight || 0, Do;
            var e = t.ownerDocument || Ti,
                r = Gi(t.pageX) ? t.nodeType || Gi(t.left) || Gi(t.top) ? Pi(t)[0].getBoundingClientRect() : t : {
                    left: t.pageX - Mo(e),
                    top: t.pageY - To(e),
                    right: t.pageX - Mo(e) + 1,
                    bottom: t.pageY - To(e) + 1
                };
            return Gi(r.right) && !Gi(r.width) ? (r.right = r.left + r.width, r.bottom = r.top + r.height) : Gi(r.width) && (r = {
                width: r.right - r.left,
                height: r.bottom - r.top,
                right: r.right,
                left: r.left,
                bottom: r.bottom,
                top: r.top
            }), r
        },
        Io = function(t, e, r) {
            var n, i = t.vars,
                o = i[r],
                a = t._listeners[e];
            return qi(o) && (n = o.apply(i.callbackScope || t, i[r + "Params"] || [t.pointerEvent])), a && !1 === t.dispatchEvent(e) && (n = !1), n
        },
        Yo = function(t, e) {
            var r, n, i, o = Pi(t)[0];
            return o.nodeType || o === wi ? Xo(o, e) : Gi(t.left) ? {
                left: n = t.min || t.minX || t.minRotation || 0,
                top: r = t.min || t.minY || 0,
                width: (t.max || t.maxX || t.maxRotation || 0) - n,
                height: (t.max || t.maxY || 0) - r
            } : (i = {
                x: 0,
                y: 0
            }, {
                left: t.left - i.x,
                top: t.top - i.y,
                width: t.width,
                height: t.height
            })
        },
        Lo = {},
        Xo = function(t, e) {
            e = Pi(e)[0];
            var r, n, i, o, a, s, u, l, c, f, p, h, d, g = t.getBBox && t.ownerSVGElement,
                v = t.ownerDocument || Ti;
            if (t === wi) i = To(v), n = (r = Mo(v)) + (v.documentElement.clientWidth || t.innerWidth || v.body.clientWidth || 0), o = i + ((t.innerHeight || 0) - 20 < v.documentElement.clientHeight ? v.documentElement.clientHeight : t.innerHeight || v.body.clientHeight || 0);
            else {
                if (e === wi || Gi(e)) return t.getBoundingClientRect();
                r = i = 0, g ? (p = (f = t.getBBox()).width, h = f.height) : (t.viewBox && (f = t.viewBox.baseVal) && (r = f.x || 0, i = f.y || 0, p = f.width, h = f.height), p || (f = "border-box" === (d = Ao(t)).boxSizing, p = (parseFloat(d.width) || t.clientWidth || 0) + (f ? 0 : parseFloat(d.borderLeftWidth) + parseFloat(d.borderRightWidth)), h = (parseFloat(d.height) || t.clientHeight || 0) + (f ? 0 : parseFloat(d.borderTopWidth) + parseFloat(d.borderBottomWidth)))), n = p, o = h
            }
            return t === e ? {
                left: r,
                top: i,
                width: n - r,
                height: o - i
            } : (s = (a = yi(e, !0).multiply(yi(t))).apply({
                x: r,
                y: i
            }), u = a.apply({
                x: n,
                y: i
            }), l = a.apply({
                x: n,
                y: o
            }), c = a.apply({
                x: r,
                y: o
            }), {
                left: r = Math.min(s.x, u.x, l.x, c.x),
                top: i = Math.min(s.y, u.y, l.y, c.y),
                width: Math.max(s.x, u.x, l.x, c.x) - r,
                height: Math.max(s.y, u.y, l.y, c.y) - i
            })
        },
        Fo = function(t, e, r, n, i, o) {
            var a, s, u, l = {};
            if (e)
                if (1 !== i && e instanceof Array) {
                    if (l.end = a = [], u = e.length, Vi(e[0]))
                        for (s = 0; s < u; s++) a[s] = po(e[s], i);
                    else
                        for (s = 0; s < u; s++) a[s] = e[s] * i;
                    r += 1.1, n -= 1.1
                } else qi(e) ? l.end = function(r) {
                    var n, o, a = e.call(t, r);
                    if (1 !== i)
                        if (Vi(a)) {
                            for (o in n = {}, a) n[o] = a[o] * i;
                            a = n
                        } else a *= i;
                    return a
                } : l.end = e;
            return (r || 0 === r) && (l.max = r), (n || 0 === n) && (l.min = n), o && (l.velocity = 0), l
        },
        No = function t(e) {
            var r;
            return !(!e || !e.getAttribute || e === Oi) && (!("true" !== (r = e.getAttribute("data-clickable")) && ("false" === r || !uo.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || t(e.parentNode))
        },
        zo = function(t, e) {
            for (var r, n = t.length; n--;)(r = t[n]).ondragstart = r.onselectstart = e ? null : Ki, bi.set(r, {
                lazy: !0,
                userSelect: e ? "text" : "none"
            })
        },
        Bo = function t(e) {
            return "fixed" === Ao(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
        },
        jo = function(t, e) {
            t = bi.utils.toArray(t)[0], e = e || {};
            var r, n, i, o, a, s, u = document.createElement("div"),
                l = u.style,
                c = t.firstChild,
                f = 0,
                p = 0,
                h = t.scrollTop,
                d = t.scrollLeft,
                g = t.scrollWidth,
                v = t.scrollHeight,
                m = 0,
                _ = 0,
                y = 0;
            Bi && !1 !== e.force3D ? (a = "translate3d(", s = "px,0px)") : $i && (a = "translate(", s = "px)"), this.scrollTop = function(t, e) {
                if (!arguments.length) return -this.top();
                this.top(-t, e)
            }, this.scrollLeft = function(t, e) {
                if (!arguments.length) return -this.left();
                this.left(-t, e)
            }, this.left = function(r, n) {
                if (!arguments.length) return -(t.scrollLeft + p);
                var i = t.scrollLeft - d,
                    o = p;
                if ((i > 2 || i < -2) && !n) return d = t.scrollLeft, bi.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                }), this.left(-d), void(e.onKill && e.onKill());
                (r = -r) < 0 ? (p = r - .5 | 0, r = 0) : r > _ ? (p = r - _ | 0, r = _) : p = 0, (p || o) && (this._skip || (l[$i] = a + -p + "px," + -f + s), p + m >= 0 && (l.paddingRight = p + m + "px")), t.scrollLeft = 0 | r, d = t.scrollLeft
            }, this.top = function(r, n) {
                if (!arguments.length) return -(t.scrollTop + f);
                var i = t.scrollTop - h,
                    o = f;
                if ((i > 2 || i < -2) && !n) return h = t.scrollTop, bi.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                }), this.top(-h), void(e.onKill && e.onKill());
                (r = -r) < 0 ? (f = r - .5 | 0, r = 0) : r > y ? (f = r - y | 0, r = y) : f = 0, (f || o) && (this._skip || (l[$i] = a + -p + "px," + -f + s)), t.scrollTop = 0 | r, h = t.scrollTop
            }, this.maxScrollTop = function() {
                return y
            }, this.maxScrollLeft = function() {
                return _
            }, this.disable = function() {
                for (c = u.firstChild; c;) o = c.nextSibling, t.appendChild(c), c = o;
                t === u.parentNode && t.removeChild(u)
            }, this.enable = function() {
                if ((c = t.firstChild) !== u) {
                    for (; c;) o = c.nextSibling, u.appendChild(c), c = o;
                    t.appendChild(u), this.calibrate()
                }
            }, this.calibrate = function(e) {
                var o, a, s, c = t.clientWidth === r;
                h = t.scrollTop, d = t.scrollLeft, c && t.clientHeight === n && u.offsetHeight === i && g === t.scrollWidth && v === t.scrollHeight && !e || ((f || p) && (a = this.left(), s = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), o = Ao(t), c && !e || (l.display = "block", l.width = "auto", l.paddingRight = "0px", (m = Math.max(0, t.scrollWidth - t.clientWidth)) && (m += parseFloat(o.paddingLeft) + (ji ? parseFloat(o.paddingRight) : 0))), l.display = "inline-block", l.position = "relative", l.overflow = "visible", l.verticalAlign = "top", l.boxSizing = "content-box", l.width = "100%", l.paddingRight = m + "px", ji && (l.paddingBottom = o.paddingBottom), r = t.clientWidth, n = t.clientHeight, g = t.scrollWidth, v = t.scrollHeight, _ = t.scrollWidth - r, y = t.scrollHeight - n, i = u.offsetHeight, l.display = "block", (a || s) && (this.left(a), this.top(s)))
            }, this.content = u, this.element = t, this._skip = !1, this.enable()
        },
        Ho = function(t) {
            if (Wi() && document.body) {
                var e = window && window.navigator;
                wi = window, Ti = document, Mi = Ti.documentElement, Oi = Ti.body, Si = to("div"), Fi = !!window.PointerEvent, (Ei = to("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", Xi = "grab" === Ei.style.cursor ? "grab" : "move", Yi = e && -1 !== e.userAgent.toLowerCase().indexOf("android"), Di = "ontouchstart" in Mi && "orientation" in wi || e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0), n = to("div"), o = (i = to("div")).style, a = Oi, o.display = "inline-block", o.position = "relative", n.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", n.appendChild(i), a.appendChild(n), r = i.offsetHeight + 18 > n.scrollHeight, a.removeChild(n), ji = r, Ri = function(t) {
                    for (var e = t.split(","), r = (("onpointerdown" in Si ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in Si ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(",")), n = {}, i = 4; --i > -1;) n[e[i]] = r[i], n[r[i]] = e[i];
                    try {
                        Mi.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function() {
                                Ai = 1
                            }
                        }))
                    } catch (t) {}
                    return n
                }("touchstart,touchmove,touchend,touchcancel"), _o(Ti, "touchcancel", Ki), _o(wi, "touchmove", Ki), Oi && Oi.addEventListener("touchstart", Ki), _o(Ti, "contextmenu", function() {
                    for (var t in ao) ao[t].isPressed && ao[t].endDrag()
                }), bi = ki = Ui()
            }
            var r, n, i, o, a;
            bi ? (Li = bi.plugins.inertia, Ni = bi.core.context || function() {}, Ci = bi.utils.checkPrefix, $i = Ci($i), Zi = Ci(Zi), Pi = bi.utils.toArray, zi = bi.core.getStyleSaver, Bi = !!Ci("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)")
        },
        Wo = function(t) {
            var e, r;

            function n(e, r) {
                var i;
                i = t.call(this) || this, ki || Ho(1), e = Pi(e)[0], i.styles = zi && zi(e, "transform,left,top"), Li || (Li = bi.plugins.inertia), i.vars = r = po(r || {}), i.target = e, i.x = i.y = i.rotation = 0, i.dragResistance = parseFloat(r.dragResistance) || 0, i.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0, i.lockAxis = r.lockAxis, i.autoScroll = r.autoScroll || 0, i.lockedAxis = null, i.allowEventDefault = !!r.allowEventDefault, bi.getProperty(e, "x");
                var o, a, s, u, l, c, f, p, h, d, g, v, m, _, y, x, b, w, T, M, O, S, E, k, C, P, A, D, R, I, Y, L, X, F = (r.type || "x,y").toLowerCase(),
                    N = ~F.indexOf("x") || ~F.indexOf("y"),
                    z = -1 !== F.indexOf("rotation"),
                    B = z ? "rotation" : N ? "x" : "left",
                    j = N ? "y" : "top",
                    H = !(!~F.indexOf("x") && !~F.indexOf("left") && "scroll" !== F),
                    W = !(!~F.indexOf("y") && !~F.indexOf("top") && "scroll" !== F),
                    U = r.minimumMovement || 2,
                    q = xi(i),
                    V = Pi(r.trigger || r.handle || e),
                    G = {},
                    K = 0,
                    $ = !1,
                    Z = r.autoScrollMarginTop || 40,
                    Q = r.autoScrollMarginRight || 40,
                    J = r.autoScrollMarginBottom || 40,
                    tt = r.autoScrollMarginLeft || 40,
                    et = r.clickableTest || No,
                    rt = 0,
                    nt = e._gsap || bi.core.getCache(e),
                    it = Bo(e),
                    ot = function(t, r) {
                        return parseFloat(nt.get(e, t, r))
                    },
                    at = e.ownerDocument || Ti,
                    st = function(t) {
                        return xo(t), t.stopImmediatePropagation && t.stopImmediatePropagation(), !1
                    },
                    ut = function t(r) {
                        if (q.autoScroll && q.isDragging && ($ || b)) {
                            var n, i, o, s, u, l, c, f, h = e,
                                d = 15 * q.autoScroll;
                            for ($ = !1, fo.scrollTop = null != wi.pageYOffset ? wi.pageYOffset : null != at.documentElement.scrollTop ? at.documentElement.scrollTop : at.body.scrollTop, fo.scrollLeft = null != wi.pageXOffset ? wi.pageXOffset : null != at.documentElement.scrollLeft ? at.documentElement.scrollLeft : at.body.scrollLeft, s = q.pointerX - fo.scrollLeft, u = q.pointerY - fo.scrollTop; h && !i;) n = (i = Eo(h.parentNode)) ? fo : h.parentNode, o = i ? {
                                bottom: Math.max(Mi.clientHeight, wi.innerHeight || 0),
                                right: Math.max(Mi.clientWidth, wi.innerWidth || 0),
                                left: 0,
                                top: 0
                            } : n.getBoundingClientRect(), l = c = 0, W && ((f = n._gsMaxScrollY - n.scrollTop) < 0 ? c = f : u > o.bottom - J && f ? ($ = !0, c = Math.min(f, d * (1 - Math.max(0, o.bottom - u) / J) | 0)) : u < o.top + Z && n.scrollTop && ($ = !0, c = -Math.min(n.scrollTop, d * (1 - Math.max(0, u - o.top) / Z) | 0)), c && (n.scrollTop += c)), H && ((f = n._gsMaxScrollX - n.scrollLeft) < 0 ? l = f : s > o.right - Q && f ? ($ = !0, l = Math.min(f, d * (1 - Math.max(0, o.right - s) / Q) | 0)) : s < o.left + tt && n.scrollLeft && ($ = !0, l = -Math.min(n.scrollLeft, d * (1 - Math.max(0, s - o.left) / tt) | 0)), l && (n.scrollLeft += l)), i && (l || c) && (wi.scrollTo(n.scrollLeft, n.scrollTop), bt(q.pointerX + l, q.pointerY + c)), h = n
                        }
                        if (b) {
                            var g = q.x,
                                v = q.y;
                            z ? (q.deltaX = g - parseFloat(nt.rotation), q.rotation = g, nt.rotation = g + "deg", nt.renderTransform(1, nt)) : a ? (W && (q.deltaY = v - a.top(), a.top(v)), H && (q.deltaX = g - a.left(), a.left(g))) : N ? (W && (q.deltaY = v - parseFloat(nt.y), nt.y = v + "px"), H && (q.deltaX = g - parseFloat(nt.x), nt.x = g + "px"), nt.renderTransform(1, nt)) : (W && (q.deltaY = v - parseFloat(e.style.top || 0), e.style.top = v + "px"), H && (q.deltaX = g - parseFloat(e.style.left || 0), e.style.left = g + "px")), !p || r || D || (D = !0, !1 === Io(q, "drag", "onDrag") && (H && (q.x -= q.deltaX), W && (q.y -= q.deltaY), t(!0)), D = !1)
                        }
                        b = !1
                    },
                    lt = function(t, r) {
                        var n, i, o = q.x,
                            s = q.y;
                        e._gsap || (nt = bi.core.getCache(e)), nt.uncache && bi.getProperty(e, "x"), N ? (q.x = parseFloat(nt.x), q.y = parseFloat(nt.y)) : z ? q.x = q.rotation = Qi(parseFloat(nt.rotation)) : a ? (q.y = a.top(), q.x = a.left()) : (q.y = parseFloat(e.style.top || (i = Ao(e)) && i.top) || 0, q.x = parseFloat(e.style.left || (i || {}).left) || 0), (T || M || O) && !r && (q.isDragging || q.isThrowing) && (O && (co.x = q.x, co.y = q.y, (n = O(co)).x !== q.x && (q.x = n.x, b = !0), n.y !== q.y && (q.y = n.y, b = !0)), T && (n = T(q.x)) !== q.x && (q.x = n, z && (q.rotation = n), b = !0), M && ((n = M(q.y)) !== q.y && (q.y = n), b = !0)), b && ut(!0), t || (q.deltaX = q.x - o, q.deltaY = q.y - s, Io(q, "throwupdate", "onThrowUpdate"))
                    },
                    ct = function(t, e, r, n) {
                        return null == e && (e = -ro), null == r && (r = ro), qi(t) ? function(i) {
                            var o = q.isPressed ? 1 - q.edgeResistance : 1;
                            return t.call(q, (i > r ? r + (i - r) * o : i < e ? e + (i - e) * o : i) * n) * n
                        } : Ji(t) ? function(n) {
                            for (var i, o, a = t.length, s = 0, u = ro; --a > -1;)(o = (i = t[a]) - n) < 0 && (o = -o), o < u && i >= e && i <= r && (s = a, u = o);
                            return t[s]
                        } : isNaN(t) ? function(t) {
                            return t
                        } : function() {
                            return t * n
                        }
                    },
                    ft = function() {
                        var t, n, i, o;
                        f = !1, a ? (a.calibrate(), q.minX = g = -a.maxScrollLeft(), q.minY = m = -a.maxScrollTop(), q.maxX = d = q.maxY = v = 0, f = !0) : r.bounds && (t = Yo(r.bounds, e.parentNode), z ? (q.minX = g = t.left, q.maxX = d = t.left + t.width, q.minY = m = q.maxY = v = 0) : Gi(r.bounds.maxX) && Gi(r.bounds.maxY) ? (n = Yo(e, e.parentNode), q.minX = g = Math.round(ot(B, "px") + t.left - n.left), q.minY = m = Math.round(ot(j, "px") + t.top - n.top), q.maxX = d = Math.round(g + (t.width - n.width)), q.maxY = v = Math.round(m + (t.height - n.height))) : (t = r.bounds, q.minX = g = t.minX, q.minY = m = t.minY, q.maxX = d = t.maxX, q.maxY = v = t.maxY), g > d && (q.minX = d, q.maxX = d = g, g = q.minX), m > v && (q.minY = v, q.maxY = v = m, m = q.minY), z && (q.minRotation = g, q.maxRotation = d), f = !0), r.liveSnap && (i = !0 === r.liveSnap ? r.snap || {} : r.liveSnap, o = Ji(i) || qi(i), z ? (T = ct(o ? i : i.rotation, g, d, 1), M = null) : i.points ? O = function(t, e, r, n, i, o, a) {
                            return o = o && o < ro ? o * o : ro, qi(t) ? function(s) {
                                var u, l, c, f = q.isPressed ? 1 - q.edgeResistance : 1,
                                    p = s.x,
                                    h = s.y;
                                return s.x = p = p > r ? r + (p - r) * f : p < e ? e + (p - e) * f : p, s.y = h = h > i ? i + (h - i) * f : h < n ? n + (h - n) * f : h, (u = t.call(q, s)) !== s && (s.x = u.x, s.y = u.y), 1 !== a && (s.x *= a, s.y *= a), o < ro && (l = s.x - p) * l + (c = s.y - h) * c > o && (s.x = p, s.y = h), s
                            } : Ji(t) ? function(e) {
                                for (var r, n, i, a, s = t.length, u = 0, l = ro; --s > -1;)(a = (r = (i = t[s]).x - e.x) * r + (n = i.y - e.y) * n) < l && (u = s, l = a);
                                return l <= o ? t[u] : e
                            } : function(t) {
                                return t
                            }
                        }(o ? i : i.points, g, d, m, v, i.radius, a ? -1 : 1) : (H && (T = ct(o ? i : i.x || i.left || i.scrollLeft, g, d, a ? -1 : 1)), W && (M = ct(o ? i : i.y || i.top || i.scrollTop, m, v, a ? -1 : 1))))
                    },
                    pt = function() {
                        q.isThrowing = !1, Io(q, "throwcomplete", "onThrowComplete")
                    },
                    ht = function() {
                        q.isThrowing = !1
                    },
                    dt = function(t, n) {
                        var i, o, s, u;
                        t && Li ? (!0 === t && (i = r.snap || r.liveSnap || {}, o = Ji(i) || qi(i), t = {
                            resistance: (r.throwResistance || r.resistance || 1e3) / (z ? 10 : 1)
                        }, z ? t.rotation = Fo(q, o ? i : i.rotation, d, g, 1, n) : (H && (t[B] = Fo(q, o ? i : i.points || i.x || i.left, d, g, a ? -1 : 1, n || "x" === q.lockedAxis)), W && (t[j] = Fo(q, o ? i : i.points || i.y || i.top, v, m, a ? -1 : 1, n || "y" === q.lockedAxis)), (i.points || Ji(i) && Vi(i[0])) && (t.linkedProps = B + "," + j, t.radius = i.radius))), q.isThrowing = !0, u = isNaN(r.overshootTolerance) ? 1 === r.edgeResistance ? 0 : 1 - q.edgeResistance + .2 : r.overshootTolerance, t.duration || (t.duration = {
                            max: Math.max(r.minDuration || 0, "maxDuration" in r ? r.maxDuration : 2),
                            min: isNaN(r.minDuration) ? 0 === u || Vi(t) && t.resistance > 1e3 ? 0 : .5 : r.minDuration,
                            overshoot: u
                        }), q.tween = s = bi.to(a || e, {
                            inertia: t,
                            data: "_draggable",
                            inherit: !1,
                            onComplete: pt,
                            onInterrupt: ht,
                            onUpdate: r.fastMode ? Io : lt,
                            onUpdateParams: r.fastMode ? [q, "onthrowupdate", "onThrowUpdate"] : i && i.radius ? [!1, !0] : []
                        }), r.fastMode || (a && (a._skip = !0), s.render(1e9, !0, !0), lt(!0, !0), q.endX = q.x, q.endY = q.y, z && (q.endRotation = q.x), s.play(0), lt(!0, !0), a && (a._skip = !1))) : f && q.applyBounds()
                    },
                    gt = function(t) {
                        var r, n = k;
                        k = yi(e.parentNode, !0), t && q.isPressed && !k.equals(n || new _i) && (r = n.inverse().apply({
                            x: s,
                            y: u
                        }), k.apply(r, r), s = r.x, u = r.y), k.equals(no) && (k = null)
                    },
                    vt = function() {
                        var t, r, n, i = 1 - q.edgeResistance,
                            o = it ? Mo(at) : 0,
                            p = it ? To(at) : 0;
                        N && (nt.x = ot(B, "px") + "px", nt.y = ot(j, "px") + "px", nt.renderTransform()), gt(!1), Lo.x = q.pointerX - o, Lo.y = q.pointerY - p, k && k.apply(Lo, Lo), s = Lo.x, u = Lo.y, b && (bt(q.pointerX, q.pointerY), ut(!0)), L = yi(e), a ? (ft(), c = a.top(), l = a.left()) : (mt() ? (lt(!0, !0), ft()) : q.applyBounds(), z ? (t = e.ownerSVGElement ? [nt.xOrigin - e.getBBox().x, nt.yOrigin - e.getBBox().y] : (Ao(e)[Zi] || "0 0").split(" "), x = q.rotationOrigin = yi(e).apply({
                            x: parseFloat(t[0]) || 0,
                            y: parseFloat(t[1]) || 0
                        }), lt(!0, !0), r = q.pointerX - x.x - o, n = x.y - q.pointerY + p, l = q.x, c = q.y = Math.atan2(n, r) * eo) : (c = ot(j, "px"), l = ot(B, "px"))), f && i && (l > d ? l = d + (l - d) / i : l < g && (l = g - (g - l) / i), z || (c > v ? c = v + (c - v) / i : c < m && (c = m - (m - c) / i))), q.startX = l = Qi(l), q.startY = c = Qi(c)
                    },
                    mt = function() {
                        return q.tween && q.tween.isActive()
                    },
                    _t = function() {
                        !Ei.parentNode || mt() || q.isDragging || Ei.parentNode.removeChild(Ei)
                    },
                    yt = function(t, i) {
                        var l;
                        if (!o || q.isPressed || !t || !("mousedown" !== t.type && "pointerdown" !== t.type || i) && io() - rt < 30 && Ri[q.pointerEvent.type]) Y && t && o && xo(t);
                        else {
                            if (C = mt(), X = !1, q.pointerEvent = t, Ri[t.type] ? (E = ~t.type.indexOf("touch") ? t.currentTarget || t.target : at, _o(E, "touchend", wt), _o(E, "touchmove", xt), _o(E, "touchcancel", wt), _o(at, "touchstart", wo)) : (E = null, _o(at, "mousemove", xt)), A = null, Fi && E || (_o(at, "mouseup", wt), t && t.target && _o(t.target, "mouseup", wt)), S = et.call(q, t.target) && !1 === r.dragClickables && !i) return _o(t.target, "change", wt), Io(q, "pressInit", "onPressInit"), Io(q, "press", "onPress"), zo(V, !0), void(Y = !1);
                            var c;
                            if (P = !(!E || H === W || !1 === q.vars.allowNativeTouchScrolling || q.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2)) && (H ? "y" : "x"), (Y = !P && !q.allowEventDefault) && (xo(t), _o(wi, "touchforcechange", xo)), t.changedTouches ? (t = _ = t.changedTouches[0], y = t.identifier) : t.pointerId ? y = t.pointerId : _ = y = null, Hi++, c = ut, oo.push(c), 1 === oo.length && bi.ticker.add(go), u = q.pointerY = t.pageY, s = q.pointerX = t.pageX, Io(q, "pressInit", "onPressInit"), (P || q.autoScroll) && Co(e.parentNode), !e.parentNode || !q.autoScroll || a || z || !e.parentNode._gsMaxScrollX || Ei.parentNode || e.getBBox || (Ei.style.width = e.parentNode.scrollWidth + "px", e.parentNode.appendChild(Ei)), vt(), q.tween && q.tween.kill(), q.isThrowing = !1, bi.killTweensOf(a || e, G, !0), a && bi.killTweensOf(e, {
                                    scrollTo: 1
                                }, !0), q.tween = q.lockedAxis = null, (r.zIndexBoost || !z && !a && !1 !== r.zIndexBoost) && (e.style.zIndex = n.zIndex++), q.isPressed = !0, p = !(!r.onDrag && !q._listeners.drag), h = !(!r.onMove && !q._listeners.move), !1 !== r.cursor || r.activeCursor)
                                for (l = V.length; --l > -1;) bi.set(V[l], {
                                    cursor: r.activeCursor || r.cursor || ("grab" === Xi ? "grabbing" : Xi)
                                });
                            Io(q, "press", "onPress"), Li && Li.track(a || e, N ? "x,y" : z ? "rotation" : "top,left")
                        }
                    },
                    xt = function(t) {
                        var r, n, i, a, l, c, f = t;
                        if (o && !Ii && q.isPressed && t) {
                            if (q.pointerEvent = t, r = t.changedTouches) {
                                if ((t = r[0]) !== _ && t.identifier !== y) {
                                    for (a = r.length; --a > -1 && (t = r[a]).identifier !== y && t.target !== e;);
                                    if (a < 0) return
                                }
                            } else if (t.pointerId && y && t.pointerId !== y) return;
                            E && P && !A && (Lo.x = t.pageX - (it ? Mo(at) : 0), Lo.y = t.pageY - (it ? To(at) : 0), k && k.apply(Lo, Lo), n = Lo.x, i = Lo.y, ((l = Math.abs(n - s)) !== (c = Math.abs(i - u)) && (l > U || c > U) || Yi && P === A) && (A = l > c && H ? "x" : "y", P && A !== P && _o(wi, "touchforcechange", xo), !1 !== q.vars.lockAxisOnTouchScroll && H && W && (q.lockedAxis = "x" === A ? "y" : "x", qi(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, f)), Yi && P === A)) ? wt(f) : (q.allowEventDefault || P && (!A || P === A) || !1 === f.cancelable ? Y && (Y = !1) : (xo(f), Y = !0), q.autoScroll && ($ = !0), bt(t.pageX, t.pageY, h))
                        } else Y && t && o && xo(t)
                    },
                    bt = function(t, e, r) {
                        var n, i, o, a, p, h, _ = 1 - q.dragResistance,
                            y = 1 - q.edgeResistance,
                            w = q.pointerX,
                            S = q.pointerY,
                            E = c,
                            C = q.x,
                            P = q.y,
                            A = q.endX,
                            D = q.endY,
                            R = q.endRotation,
                            I = b;
                        q.pointerX = t, q.pointerY = e, it && (t -= Mo(at), e -= To(at)), z ? (a = Qi(Math.atan2(x.y - e, t - x.x) * eo), (p = q.y - a) > 180 ? (c -= 360, q.y = a) : p < -180 && (c += 360, q.y = a), k && (h = t * k.a + e * k.c + k.e, e = t * k.b + e * k.d + k.f, t = h), q.x !== l || Math.max(Math.abs(s - t), Math.abs(u - e)) > U ? (q.y = a, o = Qi(l + (c - a) * _)) : o = l) : (k && (h = t * k.a + e * k.c + k.e, e = t * k.b + e * k.d + k.f, t = h), (i = e - u) < U && i > -U && (i = 0), (n = t - s) < U && n > -U && (n = 0), (q.lockAxis || q.lockedAxis) && (n || i) && ((h = q.lockedAxis) || (q.lockedAxis = h = H && Math.abs(n) > Math.abs(i) ? "y" : W ? "x" : null, h && qi(q.vars.onLockAxis) && q.vars.onLockAxis.call(q, q.pointerEvent)), "y" === h ? i = 0 : "x" === h && (n = 0)), o = Qi(l + n * _), a = Qi(c + i * _)), (T || M || O) && (q.x !== o || q.y !== a && !z) && (O && (co.x = o, co.y = a, h = O(co), o = Qi(h.x), a = Qi(h.y)), T && (o = Qi(T(o))), M && (a = Qi(M(a)))), f && (o > d ? o = d + Math.round((o - d) * y) : o < g && (o = g + Math.round((o - g) * y)), z || (a > v ? a = Math.round(v + (a - v) * y) : a < m && (a = Math.round(m + (a - m) * y)))), (q.x !== o || q.y !== a && !z) && (z ? (q.endRotation = q.x = q.endX = Qi(o), b = !0) : (W && (q.y = q.endY = a, b = !0), H && (q.x = q.endX = o, b = !0)), r && !1 === Io(q, "move", "onMove") ? (q.pointerX = w, q.pointerY = S, c = E, q.x = C, q.y = P, q.endX = A, q.endY = D, q.endRotation = R, b = I) : !q.isDragging && q.isPressed && (q.isDragging = X = !0, Io(q, "dragstart", "onDragStart")))
                    },
                    wt = function t(n, i) {
                        if (o && q.isPressed && (!n || null == y || i || !(n.pointerId && n.pointerId !== y && n.target !== e || n.changedTouches && ! function(t, e) {
                                for (var r = t.length; r--;)
                                    if (t[r].identifier === e) return !0
                            }(n.changedTouches, y)))) {
                            q.isPressed = !1;
                            var a, s, u, l, c, f = n,
                                p = q.isDragging,
                                h = q.vars.allowContextMenu && n && (n.ctrlKey || n.which > 2),
                                d = bi.delayedCall(.001, _t);
                            if (E ? (yo(E, "touchend", t), yo(E, "touchmove", xt), yo(E, "touchcancel", t), yo(at, "touchstart", wo)) : yo(at, "mousemove", xt), yo(wi, "touchforcechange", xo), Fi && E || (yo(at, "mouseup", t), n && n.target && yo(n.target, "mouseup", t)), b = !1, p && (K = lo = io(), q.isDragging = !1), mo(ut), S && !h) return n && (yo(n.target, "change", t), q.pointerEvent = f), zo(V, !1), Io(q, "release", "onRelease"), Io(q, "click", "onClick"), void(S = !1);
                            for (s = V.length; --s > -1;) Po(V[s], "cursor", r.cursor || (!1 !== r.cursor ? Xi : null));
                            if (Hi--, n) {
                                if ((a = n.changedTouches) && (n = a[0]) !== _ && n.identifier !== y) {
                                    for (s = a.length; --s > -1 && (n = a[s]).identifier !== y && n.target !== e;);
                                    if (s < 0 && !i) return
                                }
                                q.pointerEvent = f, q.pointerX = n.pageX, q.pointerY = n.pageY
                            }
                            return h && f ? (xo(f), Y = !0, Io(q, "release", "onRelease")) : f && !p ? (Y = !1, C && (r.snap || r.bounds) && dt(r.inertia || r.throwProps), Io(q, "release", "onRelease"), Yi && "touchmove" === f.type || -1 !== f.type.indexOf("cancel") || (Io(q, "click", "onClick"), io() - rt < 300 && Io(q, "doubleclick", "onDoubleClick"), l = f.target || e, rt = io(), c = function() {
                                rt === R || !q.enabled() || q.isPressed || f.defaultPrevented || (l.click ? l.click() : at.createEvent && ((u = at.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, wi, 1, q.pointerEvent.screenX, q.pointerEvent.screenY, q.pointerX, q.pointerY, !1, !1, !1, !1, 0, null), l.dispatchEvent(u)))
                            }, Yi || f.defaultPrevented || bi.delayedCall(.05, c))) : (dt(r.inertia || r.throwProps), q.allowEventDefault || !f || !1 === r.dragClickables && et.call(q, f.target) || !p || P && (!A || P !== A) || !1 === f.cancelable ? Y = !1 : (Y = !0, xo(f)), Io(q, "release", "onRelease")), mt() && d.duration(q.tween.duration()), p && Io(q, "dragend", "onDragEnd"), !0
                        }
                        Y && n && o && xo(n)
                    },
                    Tt = function(t) {
                        if (t && q.isDragging && !a) {
                            var r = t.target || e.parentNode,
                                n = r.scrollLeft - r._gsScrollX,
                                i = r.scrollTop - r._gsScrollY;
                            (n || i) && (k ? (s -= n * k.a + i * k.c, u -= i * k.d + n * k.b) : (s -= n, u -= i), r._gsScrollX += n, r._gsScrollY += i, bt(q.pointerX, q.pointerY))
                        }
                    },
                    Mt = function(t) {
                        var e = io(),
                            r = e - rt < 100,
                            n = e - K < 50,
                            i = r && R === rt,
                            o = q.pointerEvent && q.pointerEvent.defaultPrevented,
                            a = r && I === rt,
                            s = t.isTrusted || null == t.isTrusted && r && i;
                        if ((i || n && !1 !== q.vars.suppressClickOnDrag) && t.stopImmediatePropagation && t.stopImmediatePropagation(), r && (!q.pointerEvent || !q.pointerEvent.defaultPrevented) && (!i || s && !a)) return s && i && (I = rt), void(R = rt);
                        (q.isPressed || n || r) && (s && t.detail && r && !o || xo(t)), r || n || X || (t && t.target && (q.pointerEvent = t), Io(q, "click", "onClick"))
                    },
                    Ot = function(t) {
                        return k ? {
                            x: t.x * k.a + t.y * k.c + k.e,
                            y: t.x * k.b + t.y * k.d + k.f
                        } : {
                            x: t.x,
                            y: t.y
                        }
                    };
                return (w = n.get(e)) && w.kill(), i.startDrag = function(t, r) {
                    var n, i, o, a;
                    yt(t || q.pointerEvent, !0), r && !q.hitTest(t || q.pointerEvent) && (n = Ro(t || q.pointerEvent), i = Ro(e), o = Ot({
                        x: n.left + n.width / 2,
                        y: n.top + n.height / 2
                    }), a = Ot({
                        x: i.left + i.width / 2,
                        y: i.top + i.height / 2
                    }), s -= o.x - a.x, u -= o.y - a.y), q.isDragging || (q.isDragging = X = !0, Io(q, "dragstart", "onDragStart"))
                }, i.drag = xt, i.endDrag = function(t) {
                    return wt(t || q.pointerEvent, !0)
                }, i.timeSinceDrag = function() {
                    return q.isDragging ? 0 : (io() - K) / 1e3
                }, i.timeSinceClick = function() {
                    return (io() - rt) / 1e3
                }, i.hitTest = function(t, e) {
                    return n.hitTest(q.target, t, e)
                }, i.getDirection = function(t, r) {
                    var n, i, o, a, s, u, f = "velocity" === t && Li ? t : Vi(t) && !z ? "element" : "start";
                    return "element" === f && (s = Ro(q.target), u = Ro(t)), n = "start" === f ? q.x - l : "velocity" === f ? Li.getVelocity(e, B) : s.left + s.width / 2 - (u.left + u.width / 2), z ? n < 0 ? "counter-clockwise" : "clockwise" : (r = r || 2, i = "start" === f ? q.y - c : "velocity" === f ? Li.getVelocity(e, j) : s.top + s.height / 2 - (u.top + u.height / 2), a = (o = Math.abs(n / i)) < 1 / r ? "" : n < 0 ? "left" : "right", o < r && ("" !== a && (a += "-"), a += i < 0 ? "up" : "down"), a)
                }, i.applyBounds = function(t, n) {
                    var i, o, a, s, u, l;
                    if (t && r.bounds !== t) return r.bounds = t, q.update(!0, n);
                    if (lt(!0), ft(), f && !mt()) {
                        if (i = q.x, o = q.y, i > d ? i = d : i < g && (i = g), o > v ? o = v : o < m && (o = m), (q.x !== i || q.y !== o) && (a = !0, q.x = q.endX = i, z ? q.endRotation = i : q.y = q.endY = o, b = !0, ut(!0), q.autoScroll && !q.isDragging))
                            for (Co(e.parentNode), s = e, fo.scrollTop = null != wi.pageYOffset ? wi.pageYOffset : null != at.documentElement.scrollTop ? at.documentElement.scrollTop : at.body.scrollTop, fo.scrollLeft = null != wi.pageXOffset ? wi.pageXOffset : null != at.documentElement.scrollLeft ? at.documentElement.scrollLeft : at.body.scrollLeft; s && !l;) u = (l = Eo(s.parentNode)) ? fo : s.parentNode, W && u.scrollTop > u._gsMaxScrollY && (u.scrollTop = u._gsMaxScrollY), H && u.scrollLeft > u._gsMaxScrollX && (u.scrollLeft = u._gsMaxScrollX), s = u;
                        q.isThrowing && (a || q.endX > d || q.endX < g || q.endY > v || q.endY < m) && dt(r.inertia || r.throwProps, a)
                    }
                    return q
                }, i.update = function(t, r, n) {
                    if (r && q.isPressed) {
                        if (z) q.x = q.y = Qi(parseFloat(nt.rotation));
                        else {
                            var i = yi(e),
                                o = L.apply({
                                    x: q.x - l,
                                    y: q.y - c
                                }),
                                a = yi(e.parentNode, !0);
                            a.apply({
                                x: i.e - o.x,
                                y: i.f - o.y
                            }, o), q.x = Qi(q.x - (o.x - a.e)), q.y = Qi(q.y - (o.y - a.f))
                        }
                        ut(!0), vt()
                    }
                    var s = q.x,
                        u = q.y;
                    return gt(!r), t ? q.applyBounds() : (b && n && ut(!0), lt(!0)), r && (bt(q.pointerX, q.pointerY), b && ut(!0)), q.isPressed && !r && (H && Math.abs(s - q.x) > .01 || W && Math.abs(u - q.y) > .01 && !z) && vt(), q.autoScroll && (Co(e.parentNode, q.isDragging), $ = q.isDragging, ut(!0), So(e, Tt), Oo(e, Tt)), q
                }, i.enable = function(t) {
                    var n, i, s, u = {
                        lazy: !0
                    };
                    if (!1 !== r.cursor && (u.cursor = r.cursor || Xi), bi.utils.checkPrefix("touchCallout") && (u.touchCallout = "none"), "soft" !== t) {
                        for (ho(V, H === W ? "none" : r.allowNativeTouchScrolling && e.scrollHeight === e.clientHeight == (e.scrollWidth === e.clientHeight) || r.allowEventDefault ? "manipulation" : H ? "pan-y" : "pan-x"), i = V.length; --i > -1;) s = V[i], Fi || _o(s, "mousedown", yt), _o(s, "touchstart", yt), _o(s, "click", Mt, !0), bi.set(s, u), s.getBBox && s.ownerSVGElement && H !== W && bi.set(s.ownerSVGElement, {
                            touchAction: r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : H ? "pan-y" : "pan-x"
                        }), r.allowContextMenu || _o(s, "contextmenu", st);
                        zo(V, !1)
                    }
                    return Oo(e, Tt), o = !0, Li && "soft" !== t && Li.track(a || e, N ? "x,y" : z ? "rotation" : "top,left"), e._gsDragID = n = e._gsDragID || "d" + so++, ao[n] = q, a && (a.enable(), a.element._gsDragID = n), (r.bounds || z) && vt(), r.bounds && q.applyBounds(), q
                }, i.disable = function(t) {
                    for (var r, n = q.isDragging, i = V.length; --i > -1;) Po(V[i], "cursor", null);
                    if ("soft" !== t) {
                        for (ho(V, null), i = V.length; --i > -1;) r = V[i], Po(r, "touchCallout", null), yo(r, "mousedown", yt), yo(r, "touchstart", yt), yo(r, "click", Mt, !0), yo(r, "contextmenu", st);
                        zo(V, !0), E && (yo(E, "touchcancel", wt), yo(E, "touchend", wt), yo(E, "touchmove", xt)), yo(at, "mouseup", wt), yo(at, "mousemove", xt)
                    }
                    return So(e, Tt), o = !1, Li && "soft" !== t && (Li.untrack(a || e, N ? "x,y" : z ? "rotation" : "top,left"), q.tween && q.tween.kill()), a && a.disable(), mo(ut), q.isDragging = q.isPressed = S = !1, n && Io(q, "dragend", "onDragEnd"), q
                }, i.enabled = function(t, e) {
                    return arguments.length ? t ? q.enable(e) : q.disable(e) : o
                }, i.kill = function() {
                    return q.isThrowing = !1, q.tween && q.tween.kill(), q.disable(), bi.set(V, {
                        clearProps: "userSelect"
                    }), delete ao[e._gsDragID], q
                }, i.revert = function() {
                    this.kill(), this.styles && this.styles.revert()
                }, ~F.indexOf("scroll") && (a = i.scrollProxy = new jo(e, function(t, e) {
                    for (var r in e) r in t || (t[r] = e[r]);
                    return t
                }({
                    onKill: function() {
                        q.isPressed && wt(null)
                    }
                }, r)), e.style.overflowY = W && !Di ? "auto" : "hidden", e.style.overflowX = H && !Di ? "auto" : "hidden", e = a.content), z ? G.rotation = 1 : (H && (G[B] = 1), W && (G[j] = 1)), nt.force3D = !("force3D" in r) || r.force3D, Ni(xi(i)), i.enable(), i
            }
            return r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, n.register = function(t) {
                bi = t, Ho()
            }, n.create = function(t, e) {
                return ki || Ho(!0), Pi(t).map(function(t) {
                    return new n(t, e)
                })
            }, n.get = function(t) {
                return ao[(Pi(t)[0] || {})._gsDragID]
            }, n.timeSinceDrag = function() {
                return (io() - lo) / 1e3
            }, n.hitTest = function(t, e, r) {
                if (t === e) return !1;
                var n, i, o, a = Ro(t),
                    s = Ro(e),
                    u = a.top,
                    l = a.left,
                    c = a.right,
                    f = a.bottom,
                    p = a.width,
                    h = a.height,
                    d = s.left > c || s.right < l || s.top > f || s.bottom < u;
                return d || !r ? !d : (o = -1 !== (r + "").indexOf("%"), r = parseFloat(r) || 0, (n = {
                    left: Math.max(l, s.left),
                    top: Math.max(u, s.top)
                }).width = Math.min(c, s.right) - n.left, n.height = Math.min(f, s.bottom) - n.top, !(n.width < 0 || n.height < 0) && (o ? (r *= .01, (i = n.width * n.height) >= p * h * r || i >= s.width * s.height * r) : n.width > r && n.height > r))
            }, n
        }(function() {
            function t(t) {
                this._listeners = {}, this.target = t || this
            }
            var e = t.prototype;
            return e.addEventListener = function(t, e) {
                var r = this._listeners[t] || (this._listeners[t] = []);
                ~r.indexOf(e) || r.push(e)
            }, e.removeEventListener = function(t, e) {
                var r = this._listeners[t],
                    n = r && r.indexOf(e);
                n >= 0 && r.splice(n, 1)
            }, e.dispatchEvent = function(t) {
                var e, r = this;
                return (this._listeners[t] || []).forEach(function(n) {
                    return !1 === n.call(r, {
                        type: t,
                        target: r.target
                    }) && (e = !1)
                }), e
            }, t
        }());

    function Uo(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }! function(t, e) {
        for (var r in e) r in t || (t[r] = e[r])
    }(Wo.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1
    }), Wo.zIndex = 1e3, Wo.version = "3.14.2", Ui() && bi.registerPlugin(Wo);
    var qo, Vo, Go, Ko, $o, Zo, Qo, Jo, ta, ea, ra, na, ia, oa = function() {
            return qo || "undefined" != typeof window && (qo = window.gsap) && qo.registerPlugin && qo
        },
        aa = 1,
        sa = [],
        ua = [],
        la = [],
        ca = Date.now,
        fa = function(t, e) {
            return e
        },
        pa = function(t, e) {
            return ~la.indexOf(t) && la[la.indexOf(t) + 1][e]
        },
        ha = function(t) {
            return !!~ea.indexOf(t)
        },
        da = function(t, e, r, n, i) {
            return t.addEventListener(e, r, {
                passive: !1 !== n,
                capture: !!i
            })
        },
        ga = function(t, e, r, n) {
            return t.removeEventListener(e, r, !!n)
        },
        va = "scrollLeft",
        ma = "scrollTop",
        _a = function() {
            return ra && ra.isPressed || ua.cache++
        },
        ya = function(t, e) {
            var r = function r(n) {
                if (n || 0 === n) {
                    aa && (Go.history.scrollRestoration = "manual");
                    var i = ra && ra.isPressed;
                    n = r.v = Math.round(n) || (ra && ra.iOS ? 1 : 0), t(n), r.cacheID = ua.cache, i && fa("ss", n)
                } else(e || ua.cache !== r.cacheID || fa("ref")) && (r.cacheID = ua.cache, r.v = t());
                return r.v + r.offset
            };
            return r.offset = 0, t && r
        },
        xa = {
            s: va,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: ya(function(t) {
                return arguments.length ? Go.scrollTo(t, ba.sc()) : Go.pageXOffset || Ko[va] || $o[va] || Zo[va] || 0
            })
        },
        ba = {
            s: ma,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: xa,
            sc: ya(function(t) {
                return arguments.length ? Go.scrollTo(xa.sc(), t) : Go.pageYOffset || Ko[ma] || $o[ma] || Zo[ma] || 0
            })
        },
        wa = function(t, e) {
            return (e && e._ctx && e._ctx.selector || qo.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== qo.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
        },
        Ta = function(t, e) {
            var r = e.s,
                n = e.sc;
            ha(t) && (t = Ko.scrollingElement || $o);
            var i = ua.indexOf(t),
                o = n === ba.sc ? 1 : 2;
            !~i && (i = ua.push(t) - 1), ua[i + o] || da(t, "scroll", _a);
            var a = ua[i + o],
                s = a || (ua[i + o] = ya(pa(t, r), !0) || (ha(t) ? n : ya(function(e) {
                    return arguments.length ? t[r] = e : t[r]
                })));
            return s.target = t, a || (s.smooth = "smooth" === qo.getProperty(t, "scrollBehavior")), s
        },
        Ma = function(t, e, r) {
            var n = t,
                i = t,
                o = ca(),
                a = o,
                s = e || 50,
                u = Math.max(500, 3 * s),
                l = function(t, e) {
                    var u = ca();
                    e || u - o > s ? (i = n, n = t, a = o, o = u) : r ? n += t : n = i + (t - i) / (u - a) * (o - a)
                };
            return {
                update: l,
                reset: function() {
                    i = n = r ? 0 : n, a = o = 0
                },
                getVelocity: function(t) {
                    var e = a,
                        s = i,
                        c = ca();
                    return (t || 0 === t) && t !== n && l(t), o === a || c - a > u ? 0 : (n + (r ? s : -s)) / ((r ? c : o) - e) * 1e3
                }
            }
        },
        Oa = function(t, e) {
            return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
        },
        Sa = function(t) {
            var e = Math.max.apply(Math, t),
                r = Math.min.apply(Math, t);
            return Math.abs(e) >= Math.abs(r) ? e : r
        },
        Ea = function() {
            var t, e, r, n;
            (ta = qo.core.globals().ScrollTrigger) && ta.core && (t = ta.core, e = t.bridge || {}, r = t._scrollers, n = t._proxies, r.push.apply(r, ua), n.push.apply(n, la), ua = r, la = n, fa = function(t, r) {
                return e[t](r)
            })
        },
        ka = function(t) {
            return qo = t || oa(), !Vo && qo && "undefined" != typeof document && document.body && (Go = window, Ko = document, $o = Ko.documentElement, Zo = Ko.body, ea = [Go, Ko, $o, Zo], qo.utils.clamp, ia = qo.core.context || function() {}, Jo = "onpointerenter" in Zo ? "pointer" : "mouse", Qo = Ca.isTouch = Go.matchMedia && Go.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Go || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, na = Ca.eventTypes = ("ontouchstart" in $o ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in $o ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
                return aa = 0
            }, 500), Ea(), Vo = 1), Vo
        };
    xa.op = ba, ua.cache = 0;
    var Ca = function() {
        function t(t) {
            this.init(t)
        }
        var e, r;
        return t.prototype.init = function(t) {
            Vo || ka(qo) || console.warn("Please gsap.registerPlugin(Observer)"), ta || Ea();
            var e = t.tolerance,
                r = t.dragMinimum,
                n = t.type,
                i = t.target,
                o = t.lineHeight,
                a = t.debounce,
                s = t.preventDefault,
                u = t.onStop,
                l = t.onStopDelay,
                c = t.ignore,
                f = t.wheelSpeed,
                p = t.event,
                h = t.onDragStart,
                d = t.onDragEnd,
                g = t.onDrag,
                v = t.onPress,
                m = t.onRelease,
                _ = t.onRight,
                y = t.onLeft,
                x = t.onUp,
                b = t.onDown,
                w = t.onChangeX,
                T = t.onChangeY,
                M = t.onChange,
                O = t.onToggleX,
                S = t.onToggleY,
                E = t.onHover,
                k = t.onHoverEnd,
                C = t.onMove,
                P = t.ignoreCheck,
                A = t.isNormalizer,
                D = t.onGestureStart,
                R = t.onGestureEnd,
                I = t.onWheel,
                Y = t.onEnable,
                L = t.onDisable,
                X = t.onClick,
                F = t.scrollSpeed,
                N = t.capture,
                z = t.allowClicks,
                B = t.lockAxis,
                j = t.onLockAxis;
            this.target = i = wa(i) || $o, this.vars = t, c && (c = qo.utils.toArray(c)), e = e || 1e-9, r = r || 0, f = f || 1, F = F || 1, n = n || "wheel,touch,pointer", a = !1 !== a, o || (o = parseFloat(Go.getComputedStyle(Zo).lineHeight) || 22);
            var H, W, U, q, V, G, K, $ = this,
                Z = 0,
                Q = 0,
                J = t.passive || !s && !1 !== t.passive,
                tt = Ta(i, xa),
                et = Ta(i, ba),
                rt = tt(),
                nt = et(),
                it = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === na[0],
                ot = ha(i),
                at = i.ownerDocument || Ko,
                st = [0, 0, 0],
                ut = [0, 0, 0],
                lt = 0,
                ct = function() {
                    return lt = ca()
                },
                ft = function(t, e) {
                    return ($.event = t) && c && function(t, e) {
                        for (var r = e.length; r--;)
                            if (e[r] === t || e[r].contains(t)) return !0;
                        return !1
                    }(t.target, c) || e && it && "touch" !== t.pointerType || P && P(t, e)
                },
                pt = function() {
                    var t = $.deltaX = Sa(st),
                        r = $.deltaY = Sa(ut),
                        n = Math.abs(t) >= e,
                        i = Math.abs(r) >= e;
                    M && (n || i) && M($, t, r, st, ut), n && (_ && $.deltaX > 0 && _($), y && $.deltaX < 0 && y($), w && w($), O && $.deltaX < 0 != Z < 0 && O($), Z = $.deltaX, st[0] = st[1] = st[2] = 0), i && (b && $.deltaY > 0 && b($), x && $.deltaY < 0 && x($), T && T($), S && $.deltaY < 0 != Q < 0 && S($), Q = $.deltaY, ut[0] = ut[1] = ut[2] = 0), (q || U) && (C && C($), U && (h && 1 === U && h($), g && g($), U = 0), q = !1), G && !(G = !1) && j && j($), V && (I($), V = !1), H = 0
                },
                ht = function(t, e, r) {
                    st[r] += t, ut[r] += e, $._vx.update(t), $._vy.update(e), a ? H || (H = requestAnimationFrame(pt)) : pt()
                },
                dt = function(t, e) {
                    B && !K && ($.axis = K = Math.abs(t) > Math.abs(e) ? "x" : "y", G = !0), "y" !== K && (st[2] += t, $._vx.update(t, !0)), "x" !== K && (ut[2] += e, $._vy.update(e, !0)), a ? H || (H = requestAnimationFrame(pt)) : pt()
                },
                gt = function(t) {
                    if (!ft(t, 1)) {
                        var e = (t = Oa(t, s)).clientX,
                            n = t.clientY,
                            i = e - $.x,
                            o = n - $.y,
                            a = $.isDragging;
                        $.x = e, $.y = n, (a || (i || o) && (Math.abs($.startX - e) >= r || Math.abs($.startY - n) >= r)) && (U || (U = a ? 2 : 1), a || ($.isDragging = !0), dt(i, o))
                    }
                },
                vt = $.onPress = function(t) {
                    ft(t, 1) || t && t.button || ($.axis = K = null, W.pause(), $.isPressed = !0, t = Oa(t), Z = Q = 0, $.startX = $.x = t.clientX, $.startY = $.y = t.clientY, $._vx.reset(), $._vy.reset(), da(A ? i : at, na[1], gt, J, !0), $.deltaX = $.deltaY = 0, v && v($))
                },
                mt = $.onRelease = function(t) {
                    if (!ft(t, 1)) {
                        ga(A ? i : at, na[1], gt, !0);
                        var e = !isNaN($.y - $.startY),
                            r = $.isDragging,
                            n = r && (Math.abs($.x - $.startX) > 3 || Math.abs($.y - $.startY) > 3),
                            o = Oa(t);
                        !n && e && ($._vx.reset(), $._vy.reset(), s && z && qo.delayedCall(.08, function() {
                            if (ca() - lt > 300 && !t.defaultPrevented)
                                if (t.target.click) t.target.click();
                                else if (at.createEvent) {
                                var e = at.createEvent("MouseEvents");
                                e.initMouseEvent("click", !0, !0, Go, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                            }
                        })), $.isDragging = $.isGesturing = $.isPressed = !1, u && r && !A && W.restart(!0), U && pt(), d && r && d($), m && m($, n)
                    }
                },
                _t = function(t) {
                    return t.touches && t.touches.length > 1 && ($.isGesturing = !0) && D(t, $.isDragging)
                },
                yt = function() {
                    return ($.isGesturing = !1) || R($)
                },
                xt = function(t) {
                    if (!ft(t)) {
                        var e = tt(),
                            r = et();
                        ht((e - rt) * F, (r - nt) * F, 1), rt = e, nt = r, u && W.restart(!0)
                    }
                },
                bt = function(t) {
                    if (!ft(t)) {
                        t = Oa(t, s), I && (V = !0);
                        var e = (1 === t.deltaMode ? o : 2 === t.deltaMode ? Go.innerHeight : 1) * f;
                        ht(t.deltaX * e, t.deltaY * e, 0), u && !A && W.restart(!0)
                    }
                },
                wt = function(t) {
                    if (!ft(t)) {
                        var e = t.clientX,
                            r = t.clientY,
                            n = e - $.x,
                            i = r - $.y;
                        $.x = e, $.y = r, q = !0, u && W.restart(!0), (n || i) && dt(n, i)
                    }
                },
                Tt = function(t) {
                    $.event = t, E($)
                },
                Mt = function(t) {
                    $.event = t, k($)
                },
                Ot = function(t) {
                    return ft(t) || Oa(t, s) && X($)
                };
            W = $._dc = qo.delayedCall(l || .25, function() {
                $._vx.reset(), $._vy.reset(), W.pause(), u && u($)
            }).pause(), $.deltaX = $.deltaY = 0, $._vx = Ma(0, 50, !0), $._vy = Ma(0, 50, !0), $.scrollX = tt, $.scrollY = et, $.isDragging = $.isGesturing = $.isPressed = !1, ia(this), $.enable = function(t) {
                return $.isEnabled || (da(ot ? at : i, "scroll", _a), n.indexOf("scroll") >= 0 && da(ot ? at : i, "scroll", xt, J, N), n.indexOf("wheel") >= 0 && da(i, "wheel", bt, J, N), (n.indexOf("touch") >= 0 && Qo || n.indexOf("pointer") >= 0) && (da(i, na[0], vt, J, N), da(at, na[2], mt), da(at, na[3], mt), z && da(i, "click", ct, !0, !0), X && da(i, "click", Ot), D && da(at, "gesturestart", _t), R && da(at, "gestureend", yt), E && da(i, Jo + "enter", Tt), k && da(i, Jo + "leave", Mt), C && da(i, Jo + "move", wt)), $.isEnabled = !0, $.isDragging = $.isGesturing = $.isPressed = q = U = !1, $._vx.reset(), $._vy.reset(), rt = tt(), nt = et(), t && t.type && vt(t), Y && Y($)), $
            }, $.disable = function() {
                $.isEnabled && (sa.filter(function(t) {
                    return t !== $ && ha(t.target)
                }).length || ga(ot ? at : i, "scroll", _a), $.isPressed && ($._vx.reset(), $._vy.reset(), ga(A ? i : at, na[1], gt, !0)), ga(ot ? at : i, "scroll", xt, N), ga(i, "wheel", bt, N), ga(i, na[0], vt, N), ga(at, na[2], mt), ga(at, na[3], mt), ga(i, "click", ct, !0), ga(i, "click", Ot), ga(at, "gesturestart", _t), ga(at, "gestureend", yt), ga(i, Jo + "enter", Tt), ga(i, Jo + "leave", Mt), ga(i, Jo + "move", wt), $.isEnabled = $.isPressed = $.isDragging = !1, L && L($))
            }, $.kill = $.revert = function() {
                $.disable();
                var t = sa.indexOf($);
                t >= 0 && sa.splice(t, 1), ra === $ && (ra = 0)
            }, sa.push($), A && ha(i) && (ra = $), $.enable(p)
        }, e = t, (r = [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }]) && Uo(e.prototype, r), t
    }();
    Ca.version = "3.14.2", Ca.create = function(t) {
        return new Ca(t)
    }, Ca.register = ka, Ca.getAll = function() {
        return sa.slice()
    }, Ca.getById = function(t) {
        return sa.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, oa() && qo.registerPlugin(Ca);
    var Pa, Aa, Da, Ra, Ia, Ya, La, Xa, Fa, Na, za, Ba, ja, Ha, Wa, Ua, qa, Va, Ga, Ka, $a, Za, Qa, Ja, ts, es, rs, ns, is, os, as, ss, us, ls, cs, fs, ps, hs, ds = 1,
        gs = Date.now,
        vs = gs(),
        ms = 0,
        _s = 0,
        ys = function(t, e, r) {
            var n = Rs(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
            return r["_" + e + "Clamp"] = n, n ? t.substr(6, t.length - 7) : t
        },
        xs = function(t, e) {
            return !e || Rs(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")"
        },
        bs = function t() {
            return _s && requestAnimationFrame(t)
        },
        ws = function() {
            return Ha = 1
        },
        Ts = function() {
            return Ha = 0
        },
        Ms = function(t) {
            return t
        },
        Os = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        Ss = function() {
            return "undefined" != typeof window
        },
        Es = function() {
            return Pa || Ss() && (Pa = window.gsap) && Pa.registerPlugin && Pa
        },
        ks = function(t) {
            return !!~La.indexOf(t)
        },
        Cs = function(t) {
            return ("Height" === t ? as : Da["inner" + t]) || Ia["client" + t] || Ya["client" + t]
        },
        Ps = function(t) {
            return pa(t, "getBoundingClientRect") || (ks(t) ? function() {
                return Wu.width = Da.innerWidth, Wu.height = as, Wu
            } : function() {
                return ru(t)
            })
        },
        As = function(t, e) {
            var r = e.s,
                n = e.d2,
                i = e.d,
                o = e.a;
            return Math.max(0, (r = "scroll" + n) && (o = pa(t, r)) ? o() - Ps(t)()[i] : ks(t) ? (Ia[r] || Ya[r]) - Cs(n) : t[r] - t["offset" + n])
        },
        Ds = function(t, e) {
            for (var r = 0; r < Ga.length; r += 3)(!e || ~e.indexOf(Ga[r + 1])) && t(Ga[r], Ga[r + 1], Ga[r + 2])
        },
        Rs = function(t) {
            return "string" == typeof t
        },
        Is = function(t) {
            return "function" == typeof t
        },
        Ys = function(t) {
            return "number" == typeof t
        },
        Ls = function(t) {
            return "object" == typeof t
        },
        Xs = function(t, e, r) {
            return t && t.progress(e ? 0 : 1) && r && t.pause()
        },
        Fs = function(t, e) {
            if (t.enabled) {
                var r = t._ctx ? t._ctx.add(function() {
                    return e(t)
                }) : e(t);
                r && r.totalTime && (t.callbackAnimation = r)
            }
        },
        Ns = Math.abs,
        zs = "left",
        Bs = "right",
        js = "bottom",
        Hs = "width",
        Ws = "height",
        Us = "Right",
        qs = "Left",
        Vs = "Top",
        Gs = "Bottom",
        Ks = "padding",
        $s = "margin",
        Zs = "Width",
        Qs = "Height",
        Js = "px",
        tu = function(t) {
            return Da.getComputedStyle(t)
        },
        eu = function(t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t
        },
        ru = function(t, e) {
            var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== tu(t)[Wa] && Pa.to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = t.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        nu = function(t, e) {
            var r = e.d2;
            return t["offset" + r] || t["client" + r] || 0
        },
        iu = function(t) {
            var e, r = [],
                n = t.labels,
                i = t.duration();
            for (e in n) r.push(n[e] / i);
            return r
        },
        ou = function(t) {
            var e = Pa.utils.snap(t),
                r = Array.isArray(t) && t.slice(0).sort(function(t, e) {
                    return t - e
                });
            return r ? function(t, n, i) {
                var o;
                if (void 0 === i && (i = .001), !n) return e(t);
                if (n > 0) {
                    for (t -= i, o = 0; o < r.length; o++)
                        if (r[o] >= t) return r[o];
                    return r[o - 1]
                }
                for (o = r.length, t += i; o--;)
                    if (r[o] <= t) return r[o];
                return r[0]
            } : function(r, n, i) {
                void 0 === i && (i = .001);
                var o = e(r);
                return !n || Math.abs(o - r) < i || o - r < 0 == n < 0 ? o : e(n < 0 ? r - t : r + t)
            }
        },
        au = function(t, e, r, n) {
            return r.split(",").forEach(function(r) {
                return t(e, r, n)
            })
        },
        su = function(t, e, r, n, i) {
            return t.addEventListener(e, r, {
                passive: !n,
                capture: !!i
            })
        },
        uu = function(t, e, r, n) {
            return t.removeEventListener(e, r, !!n)
        },
        lu = function(t, e, r) {
            (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r))
        },
        cu = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        fu = {
            toggleActions: "play",
            anticipatePin: 0
        },
        pu = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        hu = function(t, e) {
            if (Rs(t)) {
                var r = t.indexOf("="),
                    n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
                ~r && (t.indexOf("%") > r && (n *= e / 100), t = t.substr(0, r - 1)), t = n + (t in pu ? pu[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
            }
            return t
        },
        du = function(t, e, r, n, i, o, a, s) {
            var u = i.startColor,
                l = i.endColor,
                c = i.fontSize,
                f = i.indent,
                p = i.fontWeight,
                h = Ra.createElement("div"),
                d = ks(r) || "fixed" === pa(r, "pinType"),
                g = -1 !== t.indexOf("scroller"),
                v = d ? Ya : r,
                m = -1 !== t.indexOf("start"),
                _ = m ? u : l,
                y = "border-color:" + _ + ";font-size:" + c + ";color:" + _ + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return y += "position:" + ((g || s) && d ? "fixed;" : "absolute;"), (g || s || !d) && (y += (n === ba ? Bs : js) + ":" + (o + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), h._isStart = m, h.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), h.style.cssText = y, h.innerText = e || 0 === e ? t + "-" + e : t, v.children[0] ? v.insertBefore(h, v.children[0]) : v.appendChild(h), h._offset = h["offset" + n.op.d2], gu(h, 0, n, m), h
        },
        gu = function(t, e, r, n) {
            var i = {
                    display: "block"
                },
                o = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            t._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + Zs] = 1, i["border" + a + Zs] = 0, i[r.p] = e + "px", Pa.set(t, i)
        },
        vu = [],
        mu = {},
        _u = function() {
            return gs() - ms > 34 && (cs || (cs = requestAnimationFrame(Xu)))
        },
        yu = function() {
            (!Qa || !Qa.isPressed || Qa.startX > Ya.clientWidth) && (ua.cache++, Qa ? cs || (cs = requestAnimationFrame(Xu)) : Xu(), ms || Ou("scrollStart"), ms = gs())
        },
        xu = function() {
            es = Da.innerWidth, ts = Da.innerHeight
        },
        bu = function(t) {
            ua.cache++, (!0 === t || !ja && !Za && !Ra.fullscreenElement && !Ra.webkitFullscreenElement && (!Ja || es !== Da.innerWidth || Math.abs(Da.innerHeight - ts) > .25 * Da.innerHeight)) && Xa.restart(!0)
        },
        wu = {},
        Tu = [],
        Mu = function t() {
            return uu(Zu, "scrollEnd", t) || Iu(!0)
        },
        Ou = function(t) {
            return wu[t] && wu[t].map(function(t) {
                return t()
            }) || Tu
        },
        Su = [],
        Eu = function(t) {
            for (var e = 0; e < Su.length; e += 5)(!t || Su[e + 4] && Su[e + 4].query === t) && (Su[e].style.cssText = Su[e + 1], Su[e].getBBox && Su[e].setAttribute("transform", Su[e + 2] || ""), Su[e + 3].uncache = 1)
        },
        ku = function() {
            return ua.forEach(function(t) {
                return Is(t) && ++t.cacheID && (t.rec = t())
            })
        },
        Cu = function(t, e) {
            var r;
            for (Ua = 0; Ua < vu.length; Ua++) !(r = vu[Ua]) || e && r._ctx !== e || (t ? r.kill(1) : r.revert(!0, !0));
            ss = !0, e && Eu(e), e || Ou("revert")
        },
        Pu = function(t, e) {
            ua.cache++, (e || !fs) && ua.forEach(function(t) {
                return Is(t) && t.cacheID++ && (t.rec = 0)
            }), Rs(t) && (Da.history.scrollRestoration = is = t)
        },
        Au = 0,
        Du = function() {
            Ya.appendChild(os), as = !Qa && os.offsetHeight || Da.innerHeight, Ya.removeChild(os)
        },
        Ru = function(t) {
            return Fa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
                return e.style.display = t ? "none" : "block"
            })
        },
        Iu = function(t, e) {
            if (Ia = Ra.documentElement, Ya = Ra.body, La = [Da, Ra, Ia, Ya], !ms || t || ss) {
                Du(), fs = Zu.isRefreshing = !0, ss || ku();
                var r = Ou("refreshInit");
                Ka && Zu.sort(), e || Cu(), ua.forEach(function(t) {
                    Is(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
                }), vu.slice(0).forEach(function(t) {
                    return t.refresh()
                }), ss = !1, vu.forEach(function(t) {
                    if (t._subPinOffset && t.pin) {
                        var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            r = t.pin[e];
                        t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh()
                    }
                }), us = 1, Ru(!0), vu.forEach(function(t) {
                    var e = As(t.scroller, t._dir),
                        r = "max" === t.vars.end || t._endClamp && t.end > e,
                        n = t._startClamp && t.start >= e;
                    (r || n) && t.setPositions(n ? e - 1 : t.start, r ? Math.max(n ? e : t.start + 1, e) : t.end, !0)
                }), Ru(!1), us = 0, r.forEach(function(t) {
                    return t && t.render && t.render(-1)
                }), ua.forEach(function(t) {
                    Is(t) && (t.smooth && requestAnimationFrame(function() {
                        return t.target.style.scrollBehavior = "smooth"
                    }), t.rec && t(t.rec))
                }), Pu(is, 1), Xa.pause(), Au++, fs = 2, Xu(2), vu.forEach(function(t) {
                    return Is(t.vars.onRefresh) && t.vars.onRefresh(t)
                }), fs = Zu.isRefreshing = !1, Ou("refresh")
            } else su(Zu, "scrollEnd", Mu)
        },
        Yu = 0,
        Lu = 1,
        Xu = function(t) {
            if (2 === t || !fs && !ss) {
                Zu.isUpdating = !0, hs && hs.update(0);
                var e = vu.length,
                    r = gs(),
                    n = r - vs >= 50,
                    i = e && vu[0].scroll();
                if (Lu = Yu > i ? -1 : 1, fs || (Yu = i), n && (ms && !Ha && r - ms > 200 && (ms = 0, Ou("scrollEnd")), za = vs, vs = r), Lu < 0) {
                    for (Ua = e; Ua-- > 0;) vu[Ua] && vu[Ua].update(0, n);
                    Lu = 1
                } else
                    for (Ua = 0; Ua < e; Ua++) vu[Ua] && vu[Ua].update(0, n);
                Zu.isUpdating = !1
            }
            cs = 0
        },
        Fu = [zs, "top", js, Bs, $s + Gs, $s + Us, $s + Vs, $s + qs, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Nu = Fu.concat([Hs, Ws, "boxSizing", "max" + Zs, "max" + Qs, "position", $s, Ks, Ks + Vs, Ks + Us, Ks + Gs, Ks + qs]),
        zu = function(t, e, r, n) {
            if (!t._gsap.swappedIn) {
                for (var i, o = Fu.length, a = e.style, s = t.style; o--;) a[i = Fu[o]] = r[i];
                a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[js] = s[Bs] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[Hs] = nu(t, xa) + Js, a[Ws] = nu(t, ba) + Js, a[Ks] = s[$s] = s.top = s[zs] = "0", ju(n), s[Hs] = s["max" + Zs] = r[Hs], s[Ws] = s["max" + Qs] = r[Ws], s[Ks] = r[Ks], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
            }
        },
        Bu = /([A-Z])/g,
        ju = function(t) {
            if (t) {
                var e, r, n = t.t.style,
                    i = t.length,
                    o = 0;
                for ((t.t._gsap || Pa.core.getCache(t.t)).uncache = 1; o < i; o += 2) r = t[o + 1], e = t[o], r ? n[e] = r : n[e] && n.removeProperty(e.replace(Bu, "-$1").toLowerCase())
            }
        },
        Hu = function(t) {
            for (var e = Nu.length, r = t.style, n = [], i = 0; i < e; i++) n.push(Nu[i], r[Nu[i]]);
            return n.t = t, n
        },
        Wu = {
            left: 0,
            top: 0
        },
        Uu = function(t, e, r, n, i, o, a, s, u, l, c, f, p, h) {
            Is(t) && (t = t(s)), Rs(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? hu("0" + t.substr(3), r) : 0));
            var d, g, v, m = p ? p.time() : 0;
            if (p && p.seek(0), isNaN(t) || (t = +t), Ys(t)) p && (t = Pa.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, f, t)), a && gu(a, r, n, !0);
            else {
                Is(e) && (e = e(s));
                var _, y, x, b, w = (t || "0").split(" ");
                v = wa(e, s) || Ya, (_ = ru(v) || {}) && (_.left || _.top) || "none" !== tu(v).display || (b = v.style.display, v.style.display = "block", _ = ru(v), b ? v.style.display = b : v.style.removeProperty("display")), y = hu(w[0], _[n.d]), x = hu(w[1] || "0", r), t = _[n.p] - u[n.p] - l + y + i - x, a && gu(a, x, n, r - x < 20 || a._isStart && x > 20), r -= r - x
            }
            if (h && (s[h] = t || -.001, t < 0 && (t = 0)), o) {
                var T = t + r,
                    M = o._isStart;
                d = "scroll" + n.d2, gu(o, T, n, M && T > 20 || !M && (c ? Math.max(Ya[d], Ia[d]) : o.parentNode[d]) <= T + 1), c && (u = ru(a), c && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + Js))
            }
            return p && v && (d = ru(v), p.seek(f), g = ru(v), p._caScrollDist = d[n.p] - g[n.p], t = t / p._caScrollDist * f), p && p.seek(m), p ? t : Math.round(t)
        },
        qu = /(webkit|moz|length|cssText|inset)/i,
        Vu = function(t, e, r, n) {
            if (t.parentNode !== e) {
                var i, o, a = t.style;
                if (e === Ya) {
                    for (i in t._stOrig = a.cssText, o = tu(t)) + i || qu.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                    a.top = r, a.left = n
                } else a.cssText = t._stOrig;
                Pa.core.getCache(t).uncache = 1, e.appendChild(t)
            }
        },
        Gu = function(t, e, r) {
            var n = e,
                i = n;
            return function(e) {
                var o = Math.round(t());
                return o !== n && o !== i && Math.abs(o - n) > 3 && Math.abs(o - i) > 3 && (e = o, r && r()), i = n, n = Math.round(e)
            }
        },
        Ku = function(t, e, r) {
            var n = {};
            n[e.p] = "+=" + r, Pa.set(t, n)
        },
        $u = function(t, e) {
            var r = Ta(t, e),
                n = "_scroll" + e.p2,
                i = function e(i, o, a, s, u) {
                    var l = e.tween,
                        c = o.onComplete,
                        f = {};
                    a = a || r();
                    var p = Gu(r, a, function() {
                        l.kill(), e.tween = 0
                    });
                    return u = s && u || 0, s = s || i - a, l && l.kill(), o[n] = i, o.inherit = !1, o.modifiers = f, f[n] = function() {
                        return p(a + s * l.ratio + u * l.ratio * l.ratio)
                    }, o.onUpdate = function() {
                        ua.cache++, e.tween && Xu()
                    }, o.onComplete = function() {
                        e.tween = 0, c && c.call(l)
                    }, l = e.tween = Pa.to(t, o)
                };
            return t[n] = r, r.wheelHandler = function() {
                return i.tween && i.tween.kill() && (i.tween = 0)
            }, su(t, "wheel", r.wheelHandler), Zu.isTouch && su(t, "touchmove", r.wheelHandler), i
        },
        Zu = function() {
            function t(e, r) {
                Aa || t.register(Pa) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), ns(this), this.init(e, r)
            }
            return t.prototype.init = function(e, r) {
                if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), _s) {
                    var n, i, o, a, s, u, l, c, f, p, h, d, g, v, m, _, y, x, b, w, T, M, O, S, E, k, C, P, A, D, R, I, Y, L, X, F, N, z, B, j, H, W, U = e = eu(Rs(e) || Ys(e) || e.nodeType ? {
                            trigger: e
                        } : e, fu),
                        q = U.onUpdate,
                        V = U.toggleClass,
                        G = U.id,
                        K = U.onToggle,
                        $ = U.onRefresh,
                        Z = U.scrub,
                        Q = U.trigger,
                        J = U.pin,
                        tt = U.pinSpacing,
                        et = U.invalidateOnRefresh,
                        rt = U.anticipatePin,
                        nt = U.onScrubComplete,
                        it = U.onSnapComplete,
                        ot = U.once,
                        at = U.snap,
                        st = U.pinReparent,
                        ut = U.pinSpacer,
                        lt = U.containerAnimation,
                        ct = U.fastScrollEnd,
                        ft = U.preventOverlaps,
                        pt = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? xa : ba,
                        ht = !Z && 0 !== Z,
                        dt = wa(e.scroller || Da),
                        gt = Pa.core.getCache(dt),
                        vt = ks(dt),
                        mt = "fixed" === ("pinType" in e ? e.pinType : pa(dt, "pinType") || vt && "fixed"),
                        _t = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                        yt = ht && e.toggleActions.split(" "),
                        xt = "markers" in e ? e.markers : fu.markers,
                        bt = vt ? 0 : parseFloat(tu(dt)["border" + pt.p2 + Zs]) || 0,
                        wt = this,
                        Tt = e.onRefreshInit && function() {
                            return e.onRefreshInit(wt)
                        },
                        Mt = function(t, e, r) {
                            var n = r.d,
                                i = r.d2,
                                o = r.a;
                            return (o = pa(t, "getBoundingClientRect")) ? function() {
                                return o()[n]
                            } : function() {
                                return (e ? Cs(i) : t["client" + i]) || 0
                            }
                        }(dt, vt, pt),
                        Ot = function(t, e) {
                            return !e || ~la.indexOf(t) ? Ps(t) : function() {
                                return Wu
                            }
                        }(dt, vt),
                        St = 0,
                        Et = 0,
                        kt = 0,
                        Ct = Ta(dt, pt);
                    if (wt._startClamp = wt._endClamp = !1, wt._dir = pt, rt *= 45, wt.scroller = dt, wt.scroll = lt ? lt.time.bind(lt) : Ct, a = Ct(), wt.vars = e, r = r || e.animation, "refreshPriority" in e && (Ka = 1, -9999 === e.refreshPriority && (hs = wt)), gt.tweenScroll = gt.tweenScroll || {
                            top: $u(dt, ba),
                            left: $u(dt, xa)
                        }, wt.tweenTo = n = gt.tweenScroll[pt.p], wt.scrubDuration = function(t) {
                            (Y = Ys(t) && t) ? I ? I.duration(t) : I = Pa.to(r, {
                                ease: "expo",
                                totalProgress: "+=0",
                                inherit: !1,
                                duration: Y,
                                paused: !0,
                                onComplete: function() {
                                    return nt && nt(wt)
                                }
                            }): (I && I.progress(1).kill(), I = 0)
                        }, r && (r.vars.lazy = !1, r._initted && !wt.isReverted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0), wt.animation = r.pause(), r.scrollTrigger = wt, wt.scrubDuration(Z), D = 0, G || (G = r.vars.id)), at && (Ls(at) && !at.push || (at = {
                            snapTo: at
                        }), "scrollBehavior" in Ya.style && Pa.set(vt ? [Ya, Ia] : dt, {
                            scrollBehavior: "auto"
                        }), ua.forEach(function(t) {
                            return Is(t) && t.target === (vt ? Ra.scrollingElement || Ia : dt) && (t.smooth = !1)
                        }), o = Is(at.snapTo) ? at.snapTo : "labels" === at.snapTo ? function(t) {
                            return function(e) {
                                return Pa.utils.snap(iu(t), e)
                            }
                        }(r) : "labelsDirectional" === at.snapTo ? (j = r, function(t, e) {
                            return ou(iu(j))(t, e.direction)
                        }) : !1 !== at.directional ? function(t, e) {
                            return ou(at.snapTo)(t, gs() - Et < 500 ? 0 : e.direction)
                        } : Pa.utils.snap(at.snapTo), L = at.duration || {
                            min: .1,
                            max: 2
                        }, L = Ls(L) ? Na(L.min, L.max) : Na(L, L), X = Pa.delayedCall(at.delay || Y / 2 || .1, function() {
                            var t = Ct(),
                                e = gs() - Et < 500,
                                i = n.tween;
                            if (!(e || Math.abs(wt.getVelocity()) < 10) || i || Ha || St === t) wt.isActive && St !== t && X.restart(!0);
                            else {
                                var a, s, c = (t - u) / v,
                                    f = r && !ht ? r.totalProgress() : c,
                                    p = e ? 0 : (f - R) / (gs() - za) * 1e3 || 0,
                                    h = Pa.utils.clamp(-c, 1 - c, Ns(p / 2) * p / .185),
                                    d = c + (!1 === at.inertia ? 0 : h),
                                    g = at,
                                    m = g.onStart,
                                    _ = g.onInterrupt,
                                    y = g.onComplete;
                                if (a = o(d, wt), Ys(a) || (a = d), s = Math.max(0, Math.round(u + a * v)), t <= l && t >= u && s !== t) {
                                    if (i && !i._initted && i.data <= Ns(s - t)) return;
                                    !1 === at.inertia && (h = a - c), n(s, {
                                        duration: L(Ns(.185 * Math.max(Ns(d - f), Ns(a - f)) / p / .05 || 0)),
                                        ease: at.ease || "power3",
                                        data: Ns(s - t),
                                        onInterrupt: function() {
                                            return X.restart(!0) && _ && _(wt)
                                        },
                                        onComplete: function() {
                                            wt.update(), St = Ct(), r && !ht && (I ? I.resetTo("totalProgress", a, r._tTime / r._tDur) : r.progress(a)), D = R = r && !ht ? r.totalProgress() : wt.progress, it && it(wt), y && y(wt)
                                        }
                                    }, t, h * v, s - t - h * v), m && m(wt, n.tween)
                                }
                            }
                        }).pause()), G && (mu[G] = wt), (B = (Q = wt.trigger = wa(Q || !0 !== J && J)) && Q._gsap && Q._gsap.stRevert) && (B = B(wt)), J = !0 === J ? Q : wa(J), Rs(V) && (V = {
                            targets: Q,
                            className: V
                        }), J && (!1 === tt || tt === $s || (tt = !(!tt && J.parentNode && J.parentNode.style && "flex" === tu(J.parentNode).display) && Ks), wt.pin = J, (i = Pa.core.getCache(J)).spacer ? m = i.pinState : (ut && ((ut = wa(ut)) && !ut.nodeType && (ut = ut.current || ut.nativeElement), i.spacerIsNative = !!ut, ut && (i.spacerState = Hu(ut))), i.spacer = x = ut || Ra.createElement("div"), x.classList.add("pin-spacer"), G && x.classList.add("pin-spacer-" + G), i.pinState = m = Hu(J)), !1 !== e.force3D && Pa.set(J, {
                            force3D: !0
                        }), wt.spacer = x = i.spacer, A = tu(J), S = A[tt + pt.os2], w = Pa.getProperty(J), T = Pa.quickSetter(J, pt.a, Js), zu(J, x, A), y = Hu(J)), xt) {
                        d = Ls(xt) ? eu(xt, cu) : cu, p = du("scroller-start", G, dt, pt, d, 0), h = du("scroller-end", G, dt, pt, d, 0, p), b = p["offset" + pt.op.d2];
                        var Pt = wa(pa(dt, "content") || dt);
                        c = this.markerStart = du("start", G, Pt, pt, d, b, 0, lt), f = this.markerEnd = du("end", G, Pt, pt, d, b, 0, lt), lt && (z = Pa.quickSetter([c, f], pt.a, Js)), mt || la.length && !0 === pa(dt, "fixedMarkers") || (W = tu(H = vt ? Ya : dt).position, H.style.position = "absolute" === W || "fixed" === W ? W : "relative", Pa.set([p, h], {
                            force3D: !0
                        }), k = Pa.quickSetter(p, pt.a, Js), P = Pa.quickSetter(h, pt.a, Js))
                    }
                    if (lt) {
                        var At = lt.vars.onUpdate,
                            Dt = lt.vars.onUpdateParams;
                        lt.eventCallback("onUpdate", function() {
                            wt.update(0, 0, 1), At && At.apply(lt, Dt || [])
                        })
                    }
                    if (wt.previous = function() {
                            return vu[vu.indexOf(wt) - 1]
                        }, wt.next = function() {
                            return vu[vu.indexOf(wt) + 1]
                        }, wt.revert = function(t, e) {
                            if (!e) return wt.kill(!0);
                            var n = !1 !== t || !wt.enabled,
                                i = ja;
                            n !== wt.isReverted && (n && (F = Math.max(Ct(), wt.scroll.rec || 0), kt = wt.progress, N = r && r.progress()), c && [c, f, p, h].forEach(function(t) {
                                return t.style.display = n ? "none" : "block"
                            }), n && (ja = wt, wt.update(n)), !J || st && wt.isActive || (n ? function(t, e, r) {
                                ju(r);
                                var n = t._gsap;
                                if (n.spacerIsNative) ju(n.spacerState);
                                else if (t._gsap.swappedIn) {
                                    var i = e.parentNode;
                                    i && (i.insertBefore(t, e), i.removeChild(e))
                                }
                                t._gsap.swappedIn = !1
                            }(J, x, m) : zu(J, x, tu(J), E)), n || wt.update(n), ja = i, wt.isReverted = n)
                        }, wt.refresh = function(i, o, d, b) {
                            if (!ja && wt.enabled || o)
                                if (J && i && ms) su(t, "scrollEnd", Mu);
                                else {
                                    !fs && Tt && Tt(wt), ja = wt, n.tween && !d && (n.tween.kill(), n.tween = 0), I && I.pause(), et && r && (r.revert({
                                        kill: !1
                                    }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(t) {
                                        return t.vars.immediateRender && t.render(0, !0, !0)
                                    }) : r.vars.immediateRender && r.render(0, !0, !0)), wt.isReverted || wt.revert(!0, !0), wt._subPinOffset = !1;
                                    var T, S, k, P, A, D, R, Y, L, z, B, j, H, W = Mt(),
                                        U = Ot(),
                                        q = lt ? lt.duration() : As(dt, pt),
                                        V = v <= .01 || !v,
                                        G = 0,
                                        K = b || 0,
                                        Z = Ls(d) ? d.end : e.end,
                                        rt = e.endTrigger || Q,
                                        nt = Ls(d) ? d.start : e.start || (0 !== e.start && Q ? J ? "0 0" : "0 100%" : 0),
                                        it = wt.pinnedContainer = e.pinnedContainer && wa(e.pinnedContainer, wt),
                                        ot = Q && Math.max(0, vu.indexOf(wt)) || 0,
                                        at = ot;
                                    for (xt && Ls(d) && (j = Pa.getProperty(p, pt.p), H = Pa.getProperty(h, pt.p)); at-- > 0;)(D = vu[at]).end || D.refresh(0, 1) || (ja = wt), !(R = D.pin) || R !== Q && R !== J && R !== it || D.isReverted || (z || (z = []), z.unshift(D), D.revert(!0, !0)), D !== vu[at] && (ot--, at--);
                                    for (Is(nt) && (nt = nt(wt)), nt = ys(nt, "start", wt), u = Uu(nt, Q, W, pt, Ct(), c, p, wt, U, bt, mt, q, lt, wt._startClamp && "_startClamp") || (J ? -.001 : 0), Is(Z) && (Z = Z(wt)), Rs(Z) && !Z.indexOf("+=") && (~Z.indexOf(" ") ? Z = (Rs(nt) ? nt.split(" ")[0] : "") + Z : (G = hu(Z.substr(2), W), Z = Rs(nt) ? nt : (lt ? Pa.utils.mapRange(0, lt.duration(), lt.scrollTrigger.start, lt.scrollTrigger.end, u) : u) + G, rt = Q)), Z = ys(Z, "end", wt), l = Math.max(u, Uu(Z || (rt ? "100% 0" : q), rt, W, pt, Ct() + G, f, h, wt, U, bt, mt, q, lt, wt._endClamp && "_endClamp")) || -.001, G = 0, at = ot; at--;)(R = (D = vu[at] || {}).pin) && D.start - D._pinPush <= u && !lt && D.end > 0 && (T = D.end - (wt._startClamp ? Math.max(0, D.start) : D.start), (R === Q && D.start - D._pinPush < u || R === it) && isNaN(nt) && (G += T * (1 - D.progress)), R === J && (K += T));
                                    if (u += G, l += G, wt._startClamp && (wt._startClamp += G), wt._endClamp && !fs && (wt._endClamp = l || -.001, l = Math.min(l, As(dt, pt))), v = l - u || (u -= .01) && .001, V && (kt = Pa.utils.clamp(0, 1, Pa.utils.normalize(u, l, F))), wt._pinPush = K, c && G && ((T = {})[pt.a] = "+=" + G, it && (T[pt.p] = "-=" + Ct()), Pa.set([c, f], T)), !J || us && wt.end >= As(dt, pt)) {
                                        if (Q && Ct() && !lt)
                                            for (S = Q.parentNode; S && S !== Ya;) S._pinOffset && (u -= S._pinOffset, l -= S._pinOffset), S = S.parentNode
                                    } else T = tu(J), P = pt === ba, k = Ct(), M = parseFloat(w(pt.a)) + K, !q && l > 1 && (B = {
                                        style: B = (vt ? Ra.scrollingElement || Ia : dt).style,
                                        value: B["overflow" + pt.a.toUpperCase()]
                                    }, vt && "scroll" !== tu(Ya)["overflow" + pt.a.toUpperCase()] && (B.style["overflow" + pt.a.toUpperCase()] = "scroll")), zu(J, x, T), y = Hu(J), S = ru(J, !0), Y = mt && Ta(dt, P ? xa : ba)(), tt ? ((E = [tt + pt.os2, v + K + Js]).t = x, (at = tt === Ks ? nu(J, pt) + v + K : 0) && (E.push(pt.d, at + Js), "auto" !== x.style.flexBasis && (x.style.flexBasis = at + Js)), ju(E), it && vu.forEach(function(t) {
                                        t.pin === it && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                                    }), mt && Ct(F)) : (at = nu(J, pt)) && "auto" !== x.style.flexBasis && (x.style.flexBasis = at + Js), mt && ((A = {
                                        top: S.top + (P ? k - u : Y) + Js,
                                        left: S.left + (P ? Y : k - u) + Js,
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    })[Hs] = A["max" + Zs] = Math.ceil(S.width) + Js, A[Ws] = A["max" + Qs] = Math.ceil(S.height) + Js, A[$s] = A[$s + Vs] = A[$s + Us] = A[$s + Gs] = A[$s + qs] = "0", A[Ks] = T[Ks], A[Ks + Vs] = T[Ks + Vs], A[Ks + Us] = T[Ks + Us], A[Ks + Gs] = T[Ks + Gs], A[Ks + qs] = T[Ks + qs], _ = function(t, e, r) {
                                        for (var n, i = [], o = t.length, a = r ? 8 : 0; a < o; a += 2) n = t[a], i.push(n, n in e ? e[n] : t[a + 1]);
                                        return i.t = t.t, i
                                    }(m, A, st), fs && Ct(0)), r ? (L = r._initted, $a(1), r.render(r.duration(), !0, !0), O = w(pt.a) - M + v + K, C = Math.abs(v - O) > 1, mt && C && _.splice(_.length - 2, 2), r.render(0, !0, !0), L || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), $a(0)) : O = v, B && (B.value ? B.style["overflow" + pt.a.toUpperCase()] = B.value : B.style.removeProperty("overflow-" + pt.a));
                                    z && z.forEach(function(t) {
                                        return t.revert(!1, !0)
                                    }), wt.start = u, wt.end = l, a = s = fs ? F : Ct(), lt || fs || (a < F && Ct(F), wt.scroll.rec = 0), wt.revert(!1, !0), Et = gs(), X && (St = -1, X.restart(!0)), ja = 0, r && ht && (r._initted || N) && r.progress() !== N && r.progress(N || 0, !0).render(r.time(), !0, !0), (V || kt !== wt.progress || lt || et || r && !r._initted) && (r && !ht && (r._initted || kt || !1 !== r.vars.immediateRender) && r.totalProgress(lt && u < -.001 && !kt ? Pa.utils.normalize(u, l, 0) : kt, !0), wt.progress = V || (a - u) / v === kt ? 0 : kt), J && tt && (x._pinOffset = Math.round(wt.progress * O)), I && I.invalidate(), isNaN(j) || (j -= Pa.getProperty(p, pt.p), H -= Pa.getProperty(h, pt.p), Ku(p, pt, j), Ku(c, pt, j - (b || 0)), Ku(h, pt, H), Ku(f, pt, H - (b || 0))), V && !fs && wt.update(), !$ || fs || g || (g = !0, $(wt), g = !1)
                                }
                        }, wt.getVelocity = function() {
                            return (Ct() - s) / (gs() - za) * 1e3 || 0
                        }, wt.endAnimation = function() {
                            Xs(wt.callbackAnimation), r && (I ? I.progress(1) : r.paused() ? ht || Xs(r, wt.direction < 0, 1) : Xs(r, r.reversed()))
                        }, wt.labelToScroll = function(t) {
                            return r && r.labels && (u || wt.refresh() || u) + r.labels[t] / r.duration() * v || 0
                        }, wt.getTrailing = function(t) {
                            var e = vu.indexOf(wt),
                                r = wt.direction > 0 ? vu.slice(0, e).reverse() : vu.slice(e + 1);
                            return (Rs(t) ? r.filter(function(e) {
                                return e.vars.preventOverlaps === t
                            }) : r).filter(function(t) {
                                return wt.direction > 0 ? t.end <= u : t.start >= l
                            })
                        }, wt.update = function(t, e, i) {
                            if (!lt || i || t) {
                                var o, c, f, h, d, g, m, b = !0 === fs ? F : wt.scroll(),
                                    w = t ? 0 : (b - u) / v,
                                    E = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                                    A = wt.progress;
                                if (e && (s = a, a = lt ? Ct() : b, at && (R = D, D = r && !ht ? r.totalProgress() : E)), rt && J && !ja && !ds && ms && (!E && u < b + (b - s) / (gs() - za) * rt ? E = 1e-4 : 1 === E && l > b + (b - s) / (gs() - za) * rt && (E = .9999)), E !== A && wt.enabled) {
                                    if (h = (d = (o = wt.isActive = !!E && E < 1) != (!!A && A < 1)) || !!E != !!A, wt.direction = E > A ? 1 : -1, wt.progress = E, h && !ja && (c = E && !A ? 0 : 1 === E ? 1 : 1 === A ? 2 : 3, ht && (f = !d && "none" !== yt[c + 1] && yt[c + 1] || yt[c], m = r && ("complete" === f || "reset" === f || f in r))), ft && (d || m) && (m || Z || !r) && (Is(ft) ? ft(wt) : wt.getTrailing(ft).forEach(function(t) {
                                            return t.endAnimation()
                                        })), ht || (!I || ja || ds ? r && r.totalProgress(E, !(!ja || !Et && !t)) : (I._dp._time - I._start !== I._time && I.render(I._dp._time - I._start), I.resetTo ? I.resetTo("totalProgress", E, r._tTime / r._tDur) : (I.vars.totalProgress = E, I.invalidate().restart()))), J)
                                        if (t && tt && (x.style[tt + pt.os2] = S), mt) {
                                            if (h) {
                                                if (g = !t && E > A && l + 1 > b && b + 1 >= As(dt, pt), st)
                                                    if (t || !o && !g) Vu(J, x);
                                                    else {
                                                        var Y = ru(J, !0),
                                                            L = b - u;
                                                        Vu(J, Ya, Y.top + (pt === ba ? L : 0) + Js, Y.left + (pt === ba ? 0 : L) + Js)
                                                    }
                                                ju(o || g ? _ : y), C && E < 1 && o || T(M + (1 !== E || g ? 0 : O))
                                            }
                                        } else T(Os(M + O * E));
                                    at && !n.tween && !ja && !ds && X.restart(!0), V && (d || ot && E && (E < 1 || !ls)) && Fa(V.targets).forEach(function(t) {
                                        return t.classList[o || ot ? "add" : "remove"](V.className)
                                    }), q && !ht && !t && q(wt), h && !ja ? (ht && (m && ("complete" === f ? r.pause().totalProgress(1) : "reset" === f ? r.restart(!0).pause() : "restart" === f ? r.restart(!0) : r[f]()), q && q(wt)), !d && ls || (K && d && Fs(wt, K), _t[c] && Fs(wt, _t[c]), ot && (1 === E ? wt.kill(!1, 1) : _t[c] = 0), d || _t[c = 1 === E ? 1 : 3] && Fs(wt, _t[c])), ct && !o && Math.abs(wt.getVelocity()) > (Ys(ct) ? ct : 2500) && (Xs(wt.callbackAnimation), I ? I.progress(1) : Xs(r, "reverse" === f ? 1 : !E, 1))) : ht && q && !ja && q(wt)
                                }
                                if (P) {
                                    var N = lt ? b / lt.duration() * (lt._caScrollDist || 0) : b;
                                    k(N + (p._isFlipped ? 1 : 0)), P(N)
                                }
                                z && z(-b / lt.duration() * (lt._caScrollDist || 0))
                            }
                        }, wt.enable = function(e, r) {
                            wt.enabled || (wt.enabled = !0, su(dt, "resize", bu), vt || su(dt, "scroll", yu), Tt && su(t, "refreshInit", Tt), !1 !== e && (wt.progress = kt = 0, a = s = St = Ct()), !1 !== r && wt.refresh())
                        }, wt.getTween = function(t) {
                            return t && n ? n.tween : I
                        }, wt.setPositions = function(t, e, r, n) {
                            if (lt) {
                                var i = lt.scrollTrigger,
                                    o = lt.duration(),
                                    a = i.end - i.start;
                                t = i.start + a * t / o, e = i.start + a * e / o
                            }
                            wt.refresh(!1, !1, {
                                start: xs(t, r && !!wt._startClamp),
                                end: xs(e, r && !!wt._endClamp)
                            }, n), wt.update()
                        }, wt.adjustPinSpacing = function(t) {
                            if (E && t) {
                                var e = E.indexOf(pt.d) + 1;
                                E[e] = parseFloat(E[e]) + t + Js, E[1] = parseFloat(E[1]) + t + Js, ju(E)
                            }
                        }, wt.disable = function(e, r) {
                            if (!1 !== e && wt.revert(!0, !0), wt.enabled && (wt.enabled = wt.isActive = !1, r || I && I.pause(), F = 0, i && (i.uncache = 1), Tt && uu(t, "refreshInit", Tt), X && (X.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !vt)) {
                                for (var o = vu.length; o--;)
                                    if (vu[o].scroller === dt && vu[o] !== wt) return;
                                uu(dt, "resize", bu), vt || uu(dt, "scroll", yu)
                            }
                        }, wt.kill = function(t, n) {
                            wt.disable(t, n), I && !n && I.kill(), G && delete mu[G];
                            var o = vu.indexOf(wt);
                            o >= 0 && vu.splice(o, 1), o === Ua && Lu > 0 && Ua--, o = 0, vu.forEach(function(t) {
                                return t.scroller === wt.scroller && (o = 1)
                            }), o || fs || (wt.scroll.rec = 0), r && (r.scrollTrigger = null, t && r.revert({
                                kill: !1
                            }), n || r.kill()), c && [c, f, p, h].forEach(function(t) {
                                return t.parentNode && t.parentNode.removeChild(t)
                            }), hs === wt && (hs = 0), J && (i && (i.uncache = 1), o = 0, vu.forEach(function(t) {
                                return t.pin === J && o++
                            }), o || (i.spacer = 0)), e.onKill && e.onKill(wt)
                        }, vu.push(wt), wt.enable(!1, !1), B && B(wt), r && r.add && !v) {
                        var Rt = wt.update;
                        wt.update = function() {
                            wt.update = Rt, ua.cache++, u || l || wt.refresh()
                        }, Pa.delayedCall(.01, wt.update), v = .01, u = l = 0
                    } else wt.refresh();
                    J && function() {
                        if (ps !== Au) {
                            var t = ps = Au;
                            requestAnimationFrame(function() {
                                return t === Au && Iu(!0)
                            })
                        }
                    }()
                } else this.update = this.refresh = this.kill = Ms
            }, t.register = function(e) {
                return Aa || (Pa = e || Es(), Ss() && window.document && t.enable(), Aa = _s), Aa
            }, t.defaults = function(t) {
                if (t)
                    for (var e in t) fu[e] = t[e];
                return fu
            }, t.disable = function(t, e) {
                _s = 0, vu.forEach(function(r) {
                    return r[e ? "kill" : "disable"](t)
                }), uu(Da, "wheel", yu), uu(Ra, "scroll", yu), clearInterval(Ba), uu(Ra, "touchcancel", Ms), uu(Ya, "touchstart", Ms), au(uu, Ra, "pointerdown,touchstart,mousedown", ws), au(uu, Ra, "pointerup,touchend,mouseup", Ts), Xa.kill(), Ds(uu);
                for (var r = 0; r < ua.length; r += 3) lu(uu, ua[r], ua[r + 1]), lu(uu, ua[r], ua[r + 2])
            }, t.enable = function() {
                if (Da = window, Ra = document, Ia = Ra.documentElement, Ya = Ra.body, Pa && (Fa = Pa.utils.toArray, Na = Pa.utils.clamp, ns = Pa.core.context || Ms, $a = Pa.core.suppressOverwrites || Ms, is = Da.history.scrollRestoration || "auto", Yu = Da.pageYOffset || 0, Pa.core.globals("ScrollTrigger", t), Ya)) {
                    _s = 1, (os = document.createElement("div")).style.height = "100vh", os.style.position = "absolute", Du(), bs(), Ca.register(Pa), t.isTouch = Ca.isTouch, rs = Ca.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ja = 1 === Ca.isTouch, su(Da, "wheel", yu), La = [Da, Ra, Ia, Ya], Pa.matchMedia ? (t.matchMedia = function(t) {
                        var e, r = Pa.matchMedia();
                        for (e in t) r.add(e, t[e]);
                        return r
                    }, Pa.addEventListener("matchMediaInit", function() {
                        ku(), Cu()
                    }), Pa.addEventListener("matchMediaRevert", function() {
                        return Eu()
                    }), Pa.addEventListener("matchMedia", function() {
                        Iu(0, 1), Ou("matchMedia")
                    }), Pa.matchMedia().add("(orientation: portrait)", function() {
                        return xu(), xu
                    })) : console.warn("Requires GSAP 3.11.0 or later"), xu(), su(Ra, "scroll", yu);
                    var e, r, n = Ya.hasAttribute("style"),
                        i = Ya.style,
                        o = i.borderTopStyle,
                        a = Pa.core.Animation.prototype;
                    for (a.revert || Object.defineProperty(a, "revert", {
                            value: function() {
                                return this.time(-.01, !0)
                            }
                        }), i.borderTopStyle = "solid", e = ru(Ya), ba.m = Math.round(e.top + ba.sc()) || 0, xa.m = Math.round(e.left + xa.sc()) || 0, o ? i.borderTopStyle = o : i.removeProperty("border-top-style"), n || (Ya.setAttribute("style", ""), Ya.removeAttribute("style")), Ba = setInterval(_u, 250), Pa.delayedCall(.5, function() {
                            return ds = 0
                        }), su(Ra, "touchcancel", Ms), su(Ya, "touchstart", Ms), au(su, Ra, "pointerdown,touchstart,mousedown", ws), au(su, Ra, "pointerup,touchend,mouseup", Ts), Wa = Pa.utils.checkPrefix("transform"), Nu.push(Wa), Aa = gs(), Xa = Pa.delayedCall(.2, Iu).pause(), Ga = [Ra, "visibilitychange", function() {
                            var t = Da.innerWidth,
                                e = Da.innerHeight;
                            Ra.hidden ? (qa = t, Va = e) : qa === t && Va === e || bu()
                        }, Ra, "DOMContentLoaded", Iu, Da, "load", Iu, Da, "resize", bu], Ds(su), vu.forEach(function(t) {
                            return t.enable(0, 1)
                        }), r = 0; r < ua.length; r += 3) lu(uu, ua[r], ua[r + 1]), lu(uu, ua[r], ua[r + 2])
                }
            }, t.config = function(e) {
                "limitCallbacks" in e && (ls = !!e.limitCallbacks);
                var r = e.syncInterval;
                r && clearInterval(Ba) || (Ba = r) && setInterval(_u, r), "ignoreMobileResize" in e && (Ja = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ds(uu) || Ds(su, e.autoRefreshEvents || "none"), Za = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
            }, t.scrollerProxy = function(t, e) {
                var r = wa(t),
                    n = ua.indexOf(r),
                    i = ks(r);
                ~n && ua.splice(n, i ? 6 : 2), e && (i ? la.unshift(Da, e, Ya, e, Ia, e) : la.unshift(r, e))
            }, t.clearMatchMedia = function(t) {
                vu.forEach(function(e) {
                    return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                })
            }, t.isInViewport = function(t, e, r) {
                var n = (Rs(t) ? wa(t) : t).getBoundingClientRect(),
                    i = n[r ? Hs : Ws] * e || 0;
                return r ? n.right - i > 0 && n.left + i < Da.innerWidth : n.bottom - i > 0 && n.top + i < Da.innerHeight
            }, t.positionInViewport = function(t, e, r) {
                Rs(t) && (t = wa(t));
                var n = t.getBoundingClientRect(),
                    i = n[r ? Hs : Ws],
                    o = null == e ? i / 2 : e in pu ? pu[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
                return r ? (n.left + o) / Da.innerWidth : (n.top + o) / Da.innerHeight
            }, t.killAll = function(t) {
                if (vu.slice(0).forEach(function(t) {
                        return "ScrollSmoother" !== t.vars.id && t.kill()
                    }), !0 !== t) {
                    var e = wu.killAll || [];
                    wu = {}, e.forEach(function(t) {
                        return t()
                    })
                }
            }, t
        }();
    Zu.version = "3.14.2", Zu.saveStyles = function(t) {
        return t ? Fa(t).forEach(function(t) {
            if (t && t.style) {
                var e = Su.indexOf(t);
                e >= 0 && Su.splice(e, 5), Su.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Pa.core.getCache(t), ns())
            }
        }) : Su
    }, Zu.revert = function(t, e) {
        return Cu(!t, e)
    }, Zu.create = function(t, e) {
        return new Zu(t, e)
    }, Zu.refresh = function(t) {
        return t ? bu(!0) : (Aa || Zu.register()) && Iu(!0)
    }, Zu.update = function(t) {
        return ++ua.cache && Xu(!0 === t ? 2 : 0)
    }, Zu.clearScrollMemory = Pu, Zu.maxScroll = function(t, e) {
        return As(t, e ? xa : ba)
    }, Zu.getScrollFunc = function(t, e) {
        return Ta(wa(t), e ? xa : ba)
    }, Zu.getById = function(t) {
        return mu[t]
    }, Zu.getAll = function() {
        return vu.filter(function(t) {
            return "ScrollSmoother" !== t.vars.id
        })
    }, Zu.isScrolling = function() {
        return !!ms
    }, Zu.snapDirectional = ou, Zu.addEventListener = function(t, e) {
        var r = wu[t] || (wu[t] = []);
        ~r.indexOf(e) || r.push(e)
    }, Zu.removeEventListener = function(t, e) {
        var r = wu[t],
            n = r && r.indexOf(e);
        n >= 0 && r.splice(n, 1)
    }, Zu.batch = function(t, e) {
        var r, n = [],
            i = {},
            o = e.interval || .016,
            a = e.batchMax || 1e9,
            s = function(t, e) {
                var r = [],
                    n = [],
                    i = Pa.delayedCall(o, function() {
                        e(r, n), r = [], n = []
                    }).pause();
                return function(t) {
                    r.length || i.restart(!0), r.push(t.trigger), n.push(t), a <= r.length && i.progress(1)
                }
            };
        for (r in e) i[r] = "on" === r.substr(0, 2) && Is(e[r]) && "onRefreshInit" !== r ? s(0, e[r]) : e[r];
        return Is(a) && (a = a(), su(Zu, "refresh", function() {
            return a = e.batchMax()
        })), Fa(t).forEach(function(t) {
            var e = {};
            for (r in i) e[r] = i[r];
            e.trigger = t, n.push(Zu.create(e))
        }), n
    };
    var Qu, Ju = function(t, e, r, n) {
            return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
        },
        tl = function t(e, r) {
            !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (Ca.isTouch ? " pinch-zoom" : "") : "none", e === Ia && t(Ya, r)
        },
        el = {
            auto: 1,
            scroll: 1
        },
        rl = function(t) {
            var e, r = t.event,
                n = t.target,
                i = t.axis,
                o = (r.changedTouches ? r.changedTouches[0] : r).target,
                a = o._gsap || Pa.core.getCache(o),
                s = gs();
            if (!a._isScrollT || s - a._isScrollT > 2e3) {
                for (; o && o !== Ya && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !el[(e = tu(o)).overflowY] && !el[e.overflowX]);) o = o.parentNode;
                a._isScroll = o && o !== n && !ks(o) && (el[(e = tu(o)).overflowY] || el[e.overflowX]), a._isScrollT = s
            }(a._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
        },
        nl = function(t, e, r, n) {
            return Ca.create({
                target: t,
                capture: !0,
                debounce: !1,
                lockAxis: !0,
                type: e,
                onWheel: n = n && rl,
                onPress: n,
                onDrag: n,
                onScroll: n,
                onEnable: function() {
                    return r && su(Ra, Ca.eventTypes[0], ol, !1, !0)
                },
                onDisable: function() {
                    return uu(Ra, Ca.eventTypes[0], ol, !0)
                }
            })
        },
        il = /(input|label|select|textarea)/i,
        ol = function(t) {
            var e = il.test(t.target.tagName);
            (e || Qu) && (t._gsapAllow = !0, Qu = e)
        };
    Zu.sort = function(t) {
        if (Is(t)) return vu.sort(t);
        var e = Da.pageYOffset || 0;
        return Zu.getAll().forEach(function(t) {
            return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + Da.innerHeight
        }), vu.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + -1e6 * (e.vars.refreshPriority || 0))
        })
    }, Zu.observe = function(t) {
        return new Ca(t)
    }, Zu.normalizeScroll = function(t) {
        if (void 0 === t) return Qa;
        if (!0 === t && Qa) return Qa.enable();
        if (!1 === t) return Qa && Qa.kill(), void(Qa = t);
        var e = t instanceof Ca ? t : function(t) {
            Ls(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
            var e, r, n, i, o, a, s, u, l = t,
                c = l.normalizeScrollX,
                f = l.momentum,
                p = l.allowNestedScroll,
                h = l.onRelease,
                d = wa(t.target) || Ia,
                g = Pa.core.globals().ScrollSmoother,
                v = g && g.get(),
                m = rs && (t.content && wa(t.content) || v && !1 !== t.content && !v.smooth() && v.content()),
                _ = Ta(d, ba),
                y = Ta(d, xa),
                x = 1,
                b = (Ca.isTouch && Da.visualViewport ? Da.visualViewport.scale * Da.visualViewport.width : Da.outerWidth) / Da.innerWidth,
                w = 0,
                T = Is(f) ? function() {
                    return f(e)
                } : function() {
                    return f || 2.8
                },
                M = nl(d, t.type, !0, p),
                O = function() {
                    return i = !1
                },
                S = Ms,
                E = Ms,
                k = function() {
                    r = As(d, ba), E = Na(rs ? 1 : 0, r), c && (S = Na(0, As(d, xa))), n = Au
                },
                C = function() {
                    m._gsap.y = Os(parseFloat(m._gsap.y) + _.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", _.offset = _.cacheID = 0
                },
                P = function() {
                    k(), o.isActive() && o.vars.scrollY > r && (_() > r ? o.progress(1) && _(r) : o.resetTo("scrollY", r))
                };
            return m && Pa.set(m, {
                y: "+=0"
            }), t.ignoreCheck = function(t) {
                return rs && "touchmove" === t.type && function() {
                    if (i) {
                        requestAnimationFrame(O);
                        var t = Os(e.deltaY / 2),
                            r = E(_.v - t);
                        if (m && r !== _.v + _.offset) {
                            _.offset = r - _.v;
                            var n = Os((parseFloat(m && m._gsap.y) || 0) - _.offset);
                            m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", _.cacheID = ua.cache, Xu()
                        }
                        return !0
                    }
                    _.offset && C(), i = !0
                }() || x > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
            }, t.onPress = function() {
                i = !1;
                var t = x;
                x = Os((Da.visualViewport && Da.visualViewport.scale || 1) / b), o.pause(), t !== x && tl(d, x > 1.01 || !c && "x"), a = y(), s = _(), k(), n = Au
            }, t.onRelease = t.onGestureStart = function(t, e) {
                if (_.offset && C(), e) {
                    ua.cache++;
                    var n, i, a = T();
                    c && (i = (n = y()) + .05 * a * -t.velocityX / .227, a *= Ju(y, n, i, As(d, xa)), o.vars.scrollX = S(i)), i = (n = _()) + .05 * a * -t.velocityY / .227, a *= Ju(_, n, i, As(d, ba)), o.vars.scrollY = E(i), o.invalidate().duration(a).play(.01), (rs && o.vars.scrollY >= r || n >= r - 1) && Pa.to({}, {
                        onUpdate: P,
                        duration: a
                    })
                } else u.restart(!0);
                h && h(t)
            }, t.onWheel = function() {
                o._ts && o.pause(), gs() - w > 1e3 && (n = 0, w = gs())
            }, t.onChange = function(t, e, r, i, o) {
                if (Au !== n && k(), e && c && y(S(i[2] === e ? a + (t.startX - t.x) : y() + e - i[1])), r) {
                    _.offset && C();
                    var u = o[2] === r,
                        l = u ? s + t.startY - t.y : _() + r - o[1],
                        f = E(l);
                    u && l !== f && (s += f - l), _(f)
                }(r || e) && Xu()
            }, t.onEnable = function() {
                tl(d, !c && "x"), Zu.addEventListener("refresh", P), su(Da, "resize", P), _.smooth && (_.target.style.scrollBehavior = "auto", _.smooth = y.smooth = !1), M.enable()
            }, t.onDisable = function() {
                tl(d, !0), uu(Da, "resize", P), Zu.removeEventListener("refresh", P), M.kill()
            }, t.lockAxis = !1 !== t.lockAxis, (e = new Ca(t)).iOS = rs, rs && !_() && _(1), rs && Pa.ticker.add(Ms), u = e._dc, o = Pa.to(e, {
                ease: "power4",
                paused: !0,
                inherit: !1,
                scrollX: c ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                    scrollY: Gu(_, _(), function() {
                        return o.pause()
                    })
                },
                onUpdate: Xu,
                onComplete: u.vars.onComplete
            }), e
        }(t);
        return Qa && Qa.target === e.target && Qa.kill(), ks(e.target) && (Qa = e), e
    }, Zu.core = {
        _getVelocityProp: Ma,
        _inputObserver: nl,
        _scrollers: ua,
        _proxies: la,
        bridge: {
            ss: function() {
                ms || Ou("scrollStart"), ms = gs()
            },
            ref: function() {
                return ja
            }
        }
    }, Es() && Pa.registerPlugin(Zu), ui.registerPlugin(Wo), ui.registerPlugin(Zu), window.addEventListener("DOMContentLoaded", (() => {
        let t;
        ui.utils.toArray(".infinite-x-anim").map((e, r) => {
            if (void 0 !== e) {
                const r = e.querySelectorAll(".infinite-x-item");
                if (r.length) {
                    const n = function(t, e) {
                        t = ui.utils.toArray(t), e = e || {};
                        let r, n, i, o, a, s, u = ui.timeline({
                                repeat: e.repeat,
                                paused: e.paused,
                                defaults: {
                                    ease: "none"
                                },
                                smoothChildTiming: !0,
                                onReverseComplete: () => u.totalTime(u.rawTime() + 100 * u.duration())
                            }),
                            l = t.length,
                            c = t[0].offsetLeft,
                            f = [],
                            p = [],
                            h = [],
                            d = 0,
                            g = 100 * (e.speed || 1),
                            v = !1 === e.snap ? t => t : ui.utils.snap(e.snap || 1),
                            m = () => t.forEach((t, e) => {
                                p[e] = parseFloat(ui.getProperty(t, "width", "px")), h[e] = v(parseFloat(ui.getProperty(t, "x", "px")) / p[e] * 100 + ui.getProperty(t, "xPercent"))
                            }),
                            _ = () => t[l - 1].offsetLeft + h[l - 1] / 100 * p[l - 1] - c + t[l - 1].offsetWidth * ui.getProperty(t[l - 1], "scaleX") + (parseFloat(e.paddingRight) || 0);
                        for (m(), ui.set(t, {
                                xPercent: t => h[t]
                            }), ui.set(t, {
                                x: 0
                            }), r = _(), s = 0; s < l; s++) a = t[s], n = h[s] / 100 * p[s], i = a.offsetLeft + n - c, o = i + p[s] * ui.getProperty(a, "scaleX"), u.to(a, {
                            xPercent: v((n - o) / p[s] * 100),
                            duration: o / g
                        }, 0).fromTo(a, {
                            xPercent: v((n - o + r) / p[s] * 100)
                        }, {
                            xPercent: h[s],
                            duration: (n - o + r - n) / g,
                            immediateRender: !1
                        }, o / g).add("label" + s, i / g), f[s] = i / g;

                        function y(t, e) {
                            e = e || {}, Math.abs(t - d) > l / 2 && (t += t > d ? -l : l);
                            let r = ui.utils.wrap(0, l, t),
                                n = f[r];
                            return n > u.time() != t > d && (e.modifiers = {
                                time: ui.utils.wrap(0, u.duration())
                            }, n += u.duration() * (t > d ? 1 : -1)), d = r, e.overwrite = !0, u.tweenTo(n, e)
                        }
                        if (u.next = t => y(d + 1, t), u.previous = t => y(d - 1, t), u.current = () => d, u.toIndex = (t, e) => y(t, e), u.updateIndex = () => d = Math.round(u.progress() * (t.length - 1)), u.times = f, u.progress(1, !0).progress(0, !0), e.reversed && (u.vars.onReverseComplete(), u.reverse()), e.draggable && "function" == typeof Wo) {
                            let e, n, i, o, a, s = document.createElement("div"),
                                l = ui.utils.wrap(0, 1),
                                c = () => u.progress(l(n + (i.startX - i.x) * e)),
                                f = () => u.updateIndex();
                            i = Wo.create(s, {
                                trigger: t[0].parentNode,
                                type: "x",
                                onPress() {
                                    n = u.progress(), u.progress(0), m(), r = _(), e = 1 / r, o = r / t.length, a = Math.pow(10, ((o + "").split(".")[1] || "").length), u.progress(n)
                                },
                                onDrag: c,
                                onThrowUpdate: c,
                                snap: t => {
                                    let e = Math.round(parseFloat(t) / o) * o * a;
                                    return (e - e % 1) / a
                                },
                                onRelease: f,
                                onThrowComplete: () => ui.set(s, {
                                    x: 0
                                }) && f()
                            })[0]
                        }
                        return u
                    }(r, {
                        repeat: -1,
                        speed: parseFloat(e.dataset.speed) || 1,
                        draggable: !0,
                        reversed: !1
                    });
                    void 0 === e.dataset.locked && (r.forEach(e => {
                        e.addEventListener("wheel", e => {
                            const r = Math.min(18, Math.max(1, 2 * e.deltaX));
                            ui.to(n, {
                                timeScale: r,
                                overwrite: !0
                            }), null !== t && clearTimeout(t), t = setTimeout(() => {
                                ui.to(n, {
                                    timeScale: 1,
                                    overwrite: !0
                                })
                            }, 300)
                        }, {
                            passive: !0
                        })
                    }), Modernizr.touchevents || Zu.create({
                        trigger: r,
                        start: "top bottom-=10%",
                        end: "bottom top+=10%",
                        scrub: !0,
                        onUpdate: e => {
                            const r = Math.min(12, Math.max(1, Math.abs(e.getVelocity()) / 100));
                            ui.to(n, {
                                timeScale: r,
                                overwrite: !0
                            }), null !== t && clearTimeout(t), t = setTimeout(() => {
                                ui.to(n, {
                                    timeScale: 1,
                                    overwrite: !0
                                })
                            }, 300)
                        },
                        onToggle: () => {
                            ui.to(n, {
                                timeScale: 1,
                                overwrite: !0
                            })
                        }
                    }))
                }
            }
        })
    })())
}();