/*! For license information please see bundle.5e2b78d794360634ffaf.js.LICENSE.txt */ ! function() {
    var t = {
            2008: function() {
                let t, e = 0,
                    r = "scrolling-up";
                const n = document.getElementById("main-menu"),
                    i = () => {
                        const t = document.querySelector("#header-home");
                        document.body.classList.contains("home") && null !== t ? window.scrollY > t.clientHeight ? document.body.classList.add("scrolled") : document.body.classList.remove("scrolled") : window.scrollY > 10 ? document.body.classList.add("scrolled") : document.body.classList.remove("scrolled");
                        let i = window.scrollY > e ? "scrolling-down" : "scrolling-up";
                        i !== r && (document.body.classList.remove(r), r = i, document.body.classList.add(r)), e = window.scrollY, null !== n && document.body.classList.remove("main-menu-active")
                    },
                    o = () => {
                        Modernizr.touchevents ? (t && clearTimeout(t), t = setTimeout(() => {
                            i()
                        }, 100)) : i()
                    };
                window.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("scroll", o, !1), window.addEventListener("resize", o, !1)
            },
            1193: function() {
                window.addEventListener("DOMContentLoaded", () => {
                    window.addEventListener("click", t => {
                        const e = t.target.attributes.href;
                        void 0 !== e && e.value.startsWith("#") && "#" !== e.value && (document.querySelector(e.value).scrollIntoView({
                            behavior: "smooth"
                        }), t.preventDefault())
                    }, !1)
                }, !1)
            },
            9761: function() {
                window.addEventListener("DOMContentLoaded", () => {
                    window.addEventListener("click", t => {
                        const e = t.target;
                        if (!e.matches(".play-video")) return;
                        const r = e.parentElement.querySelector("video"),
                            n = e.parentElement.querySelector(".video-wrapper"),
                            i = e.closest(".excerpt-project");
                        if (void 0 !== r) {
                            const t = r.play();
                            void 0 !== t && (e.classList.toggle("playing"), null !== i && i.classList.toggle("hover"), e.classList.contains("playing") ? (null !== n && (n.style.zIndex = "30"), t.then(t => {
                                r.play()
                            })) : (null !== n && (n.style.zIndex = "0"), t.then(t => {
                                r.pause()
                            })))
                        }
                        t.preventDefault()
                    }, !1)
                }, !1)
            },
            5300: function() {
                ! function(t, e) {
                    function r(t, e) {
                        return typeof t === e
                    }

                    function n() {
                        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : c ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
                    }

                    function i() {
                        var t = e.body;
                        return t || ((t = n(c ? "svg" : "body")).fake = !0), t
                    }
                    var o = [],
                        s = [],
                        a = {
                            _version: "3.6.0",
                            _config: {
                                classPrefix: "",
                                enableClasses: !0,
                                enableJSClass: !0,
                                usePrefixes: !0
                            },
                            _q: [],
                            on: function(t, e) {
                                var r = this;
                                setTimeout(function() {
                                    e(r[t])
                                }, 0)
                            },
                            addTest: function(t, e, r) {
                                s.push({
                                    name: t,
                                    fn: e,
                                    options: r
                                })
                            },
                            addAsyncTest: function(t) {
                                s.push({
                                    name: null,
                                    fn: t
                                })
                            }
                        },
                        u = function() {};
                    u.prototype = a, u = new u;
                    var l = e.documentElement,
                        c = "svg" === l.nodeName.toLowerCase(),
                        f = a._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
                    a._prefixes = f;
                    var d = a.testStyles = function(t, r, o, s) {
                        var a, u, c, f, d = "modernizr",
                            p = n("div"),
                            h = i();
                        if (parseInt(o, 10))
                            for (; o--;)(c = n("div")).id = s ? s[o] : d + (o + 1), p.appendChild(c);
                        return (a = n("style")).type = "text/css", a.id = "s" + d, (h.fake ? h : p).appendChild(a), h.appendChild(p), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(e.createTextNode(t)), p.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", f = l.style.overflow, l.style.overflow = "hidden", l.appendChild(h)), u = r(p, t), h.fake ? (h.parentNode.removeChild(h), l.style.overflow = f, l.offsetHeight) : p.parentNode.removeChild(p), !!u
                    };
                    u.addTest("touchevents", function() {
                            var r;
                            if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) r = !0;
                            else {
                                var n = ["@media (", f.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                                d(n, function(t) {
                                    r = 9 === t.offsetTop
                                })
                            }
                            return r
                        }),
                        function() {
                            var t, e, n, i, a, l;
                            for (var c in s)
                                if (s.hasOwnProperty(c)) {
                                    if (t = [], (e = s[c]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                                        for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
                                    for (i = r(e.fn, "function") ? e.fn() : e.fn, a = 0; a < t.length; a++) 1 === (l = t[a].split(".")).length ? u[l[0]] = i : (!u[l[0]] || u[l[0]] instanceof Boolean || (u[l[0]] = new Boolean(u[l[0]])), u[l[0]][l[1]] = i), o.push((i ? "" : "no-") + l.join("-"))
                                }
                        }(),
                        function(t) {
                            var e = l.className,
                                r = u._config.classPrefix || "";
                            if (c && (e = e.baseVal), u._config.enableJSClass) {
                                var n = new RegExp("(^|\\s)" + r + "no-js(\\s|$)");
                                e = e.replace(n, "$1" + r + "js$2")
                            }
                            u._config.enableClasses && (e += " " + r + t.join(" " + r), c ? l.className.baseVal = e : l.className = e)
                        }(o), delete a.addTest, delete a.addAsyncTest;
                    for (var p = 0; p < u._q.length; p++) u._q[p]();
                    t.Modernizr = u
                }(window, document)
            },
            2365: function(t, e, r) {
                "use strict";
                var n = r(9200),
                    i = r(7938),
                    o = TypeError;
                t.exports = function(t) {
                    if (n(t)) return t;
                    throw new o(i(t) + " is not a function")
                }
            },
            602: function(t, e, r) {
                "use strict";
                var n = r(2430),
                    i = TypeError;
                t.exports = function(t, e) {
                    if (n(e, t)) return t;
                    throw new i("Incorrect invocation")
                }
            },
            4398: function(t, e, r) {
                "use strict";
                var n = r(9131),
                    i = String,
                    o = TypeError;
                t.exports = function(t) {
                    if (n(t)) return t;
                    throw new o(i(t) + " is not an object")
                }
            },
            6134: function(t, e, r) {
                "use strict";
                var n = r(4360),
                    i = r(8479),
                    o = r(7457),
                    s = function(t) {
                        return function(e, r, s) {
                            var a = n(e),
                                u = o(a);
                            if (0 === u) return !t && -1;
                            var l, c = i(s, u);
                            if (t && r != r) {
                                for (; u > c;)
                                    if ((l = a[c++]) != l) return !0
                            } else
                                for (; u > c; c++)
                                    if ((t || c in a) && a[c] === r) return t || c || 0;
                            return !t && -1
                        }
                    };
                t.exports = {
                    includes: s(!0),
                    indexOf: s(!1)
                }
            },
            5589: function(t, e, r) {
                "use strict";
                var n = r(7133),
                    i = n({}.toString),
                    o = n("".slice);
                t.exports = function(t) {
                    return o(i(t), 8, -1)
                }
            },
            3650: function(t, e, r) {
                "use strict";
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
                "use strict";
                var n = r(9158),
                    i = r(4540),
                    o = r(2428),
                    s = r(4446);
                t.exports = function(t, e, r) {
                    for (var a = i(e), u = s.f, l = o.f, c = 0; c < a.length; c++) {
                        var f = a[c];
                        n(t, f) || r && n(r, f) || u(t, f, l(e, f))
                    }
                }
            },
            6308: function(t, e, r) {
                "use strict";
                var n = r(942);
                t.exports = !n(function() {
                    function t() {}
                    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
                })
            },
            5044: function(t, e, r) {
                "use strict";
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
                "use strict";
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
                "use strict";
                var n = r(6857),
                    i = r(4446),
                    o = r(2007);
                t.exports = function(t, e, r) {
                    n ? i.f(t, e, o(0, r)) : t[e] = r
                }
            },
            3129: function(t, e, r) {
                "use strict";
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
                "use strict";
                var n = r(9200),
                    i = r(4446),
                    o = r(4174),
                    s = r(8466);
                t.exports = function(t, e, r, a) {
                    a || (a = {});
                    var u = a.enumerable,
                        l = void 0 !== a.name ? a.name : e;
                    if (n(r) && o(r, l, a), a.global) u ? t[e] = r : s(e, r);
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
                "use strict";
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
                "use strict";
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
                "use strict";
                var n = r(8793),
                    i = r(9131),
                    o = n.document,
                    s = i(o) && i(o.createElement);
                t.exports = function(t) {
                    return s ? o.createElement(t) : {}
                }
            },
            2030: function(t) {
                "use strict";
                t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            824: function(t, e, r) {
                "use strict";
                var n = r(8793).navigator,
                    i = n && n.userAgent;
                t.exports = i ? String(i) : ""
            },
            9140: function(t, e, r) {
                "use strict";
                var n, i, o = r(8793),
                    s = r(824),
                    a = o.process,
                    u = o.Deno,
                    l = a && a.versions || u && u.version,
                    c = l && l.v8;
                c && (i = (n = c.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !i && s && (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = s.match(/Chrome\/(\d+)/)) && (i = +n[1]), t.exports = i
            },
            3353: function(t, e, r) {
                "use strict";
                var n = r(8793),
                    i = r(2428).f,
                    o = r(5044),
                    s = r(8521),
                    a = r(8466),
                    u = r(4085),
                    l = r(7453);
                t.exports = function(t, e) {
                    var r, c, f, d, p, h = t.target,
                        g = t.global,
                        D = t.stat;
                    if (r = g ? n : D ? n[h] || a(h, {}) : n[h] && n[h].prototype)
                        for (c in e) {
                            if (d = e[c], f = t.dontCallGetSet ? (p = i(r, c)) && p.value : r[c], !l(g ? c : h + (D ? "." : "#") + c, t.forced) && void 0 !== f) {
                                if (typeof d == typeof f) continue;
                                u(d, f)
                            }(t.sham || f && f.sham) && o(d, "sham", !0), s(r, c, d, t)
                        }
                }
            },
            942: function(t) {
                "use strict";
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            },
            5457: function(t, e, r) {
                "use strict";
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
                "use strict";
                var n = r(942);
                t.exports = !n(function() {
                    var t = function() {}.bind();
                    return "function" != typeof t || t.hasOwnProperty("prototype")
                })
            },
            492: function(t, e, r) {
                "use strict";
                var n = r(7315),
                    i = Function.prototype.call;
                t.exports = n ? i.bind(i) : function() {
                    return i.apply(i, arguments)
                }
            },
            7403: function(t, e, r) {
                "use strict";
                var n = r(6857),
                    i = r(9158),
                    o = Function.prototype,
                    s = n && Object.getOwnPropertyDescriptor,
                    a = i(o, "name"),
                    u = a && "something" === function() {}.name,
                    l = a && (!n || n && s(o, "name").configurable);
                t.exports = {
                    EXISTS: a,
                    PROPER: u,
                    CONFIGURABLE: l
                }
            },
            527: function(t, e, r) {
                "use strict";
                var n = r(5589),
                    i = r(7133);
                t.exports = function(t) {
                    if ("Function" === n(t)) return i(t)
                }
            },
            7133: function(t, e, r) {
                "use strict";
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
                "use strict";
                var n = r(8793),
                    i = r(9200);
                t.exports = function(t, e) {
                    return arguments.length < 2 ? (r = n[t], i(r) ? r : void 0) : n[t] && n[t][e];
                    var r
                }
            },
            5134: function(t) {
                "use strict";
                t.exports = function(t) {
                    return {
                        iterator: t,
                        next: t.next,
                        done: !1
                    }
                }
            },
            590: function(t, e, r) {
                "use strict";
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
                "use strict";
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
                "use strict";
                var n = r(2365),
                    i = r(2178);
                t.exports = function(t, e) {
                    var r = t[e];
                    return i(r) ? void 0 : n(r)
                }
            },
            8793: function(t, e, r) {
                "use strict";
                var n = function(t) {
                    return t && t.Math === Math && t
                };
                t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || n("object" == typeof this && this) || function() {
                    return this
                }() || Function("return this")()
            },
            9158: function(t, e, r) {
                "use strict";
                var n = r(7133),
                    i = r(9272),
                    o = n({}.hasOwnProperty);
                t.exports = Object.hasOwn || function(t, e) {
                    return o(i(t), e)
                }
            },
            640: function(t) {
                "use strict";
                t.exports = {}
            },
            4510: function(t, e, r) {
                "use strict";
                var n = r(848);
                t.exports = n("document", "documentElement")
            },
            5842: function(t, e, r) {
                "use strict";
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
                "use strict";
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
                "use strict";
                var n = r(7133),
                    i = r(9200),
                    o = r(5210),
                    s = n(Function.toString);
                i(o.inspectSource) || (o.inspectSource = function(t) {
                    return s(t)
                }), t.exports = o.inspectSource
            },
            1514: function(t, e, r) {
                "use strict";
                var n, i, o, s = r(3125),
                    a = r(8793),
                    u = r(9131),
                    l = r(5044),
                    c = r(9158),
                    f = r(5210),
                    d = r(2316),
                    p = r(640),
                    h = "Object already initialized",
                    g = a.TypeError,
                    D = a.WeakMap;
                if (s || f.state) {
                    var m = f.state || (f.state = new D);
                    m.get = m.get, m.has = m.has, m.set = m.set, n = function(t, e) {
                        if (m.has(t)) throw new g(h);
                        return e.facade = t, m.set(t, e), e
                    }, i = function(t) {
                        return m.get(t) || {}
                    }, o = function(t) {
                        return m.has(t)
                    }
                } else {
                    var v = d("state");
                    p[v] = !0, n = function(t, e) {
                        if (c(t, v)) throw new g(h);
                        return e.facade = t, l(t, v, e), e
                    }, i = function(t) {
                        return c(t, v) ? t[v] : {}
                    }, o = function(t) {
                        return c(t, v)
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
                "use strict";
                var n = r(4702),
                    i = r(488),
                    o = n("iterator"),
                    s = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (i.Array === t || s[o] === t)
                }
            },
            9200: function(t) {
                "use strict";
                var e = "object" == typeof document && document.all;
                t.exports = void 0 === e && void 0 !== e ? function(t) {
                    return "function" == typeof t || t === e
                } : function(t) {
                    return "function" == typeof t
                }
            },
            7453: function(t, e, r) {
                "use strict";
                var n = r(942),
                    i = r(9200),
                    o = /#|\.prototype\./,
                    s = function(t, e) {
                        var r = u[a(t)];
                        return r === c || r !== l && (i(e) ? n(e) : !!e)
                    },
                    a = s.normalize = function(t) {
                        return String(t).replace(o, ".").toLowerCase()
                    },
                    u = s.data = {},
                    l = s.NATIVE = "N",
                    c = s.POLYFILL = "P";
                t.exports = s
            },
            2178: function(t) {
                "use strict";
                t.exports = function(t) {
                    return null == t
                }
            },
            9131: function(t, e, r) {
                "use strict";
                var n = r(9200);
                t.exports = function(t) {
                    return "object" == typeof t ? null !== t : n(t)
                }
            },
            1818: function(t) {
                "use strict";
                t.exports = !1
            },
            460: function(t, e, r) {
                "use strict";
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
                "use strict";
                var n = r(5457),
                    i = r(492),
                    o = r(4398),
                    s = r(7938),
                    a = r(6),
                    u = r(7457),
                    l = r(2430),
                    c = r(1778),
                    f = r(590),
                    d = r(9400),
                    p = TypeError,
                    h = function(t, e) {
                        this.stopped = t, this.result = e
                    },
                    g = h.prototype;
                t.exports = function(t, e, r) {
                    var D, m, v, y, _, x, b, w = r && r.that,
                        C = !(!r || !r.AS_ENTRIES),
                        E = !(!r || !r.IS_RECORD),
                        F = !(!r || !r.IS_ITERATOR),
                        T = !(!r || !r.INTERRUPTED),
                        S = n(e, w),
                        A = function(t) {
                            return D && d(D, "normal"), new h(!0, t)
                        },
                        M = function(t) {
                            return C ? (o(t), T ? S(t[0], t[1], A) : S(t[0], t[1])) : T ? S(t, A) : S(t)
                        };
                    if (E) D = t.iterator;
                    else if (F) D = t;
                    else {
                        if (!(m = f(t))) throw new p(s(t) + " is not iterable");
                        if (a(m)) {
                            for (v = 0, y = u(t); y > v; v++)
                                if ((_ = M(t[v])) && l(g, _)) return _;
                            return new h(!1)
                        }
                        D = c(t, m)
                    }
                    for (x = E ? t.next : D.next; !(b = i(x, D)).done;) {
                        try {
                            _ = M(b.value)
                        } catch (t) {
                            d(D, "throw", t)
                        }
                        if ("object" == typeof _ && _ && l(g, _)) return _
                    }
                    return new h(!1)
                }
            },
            9400: function(t, e, r) {
                "use strict";
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
                "use strict";
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
                "use strict";
                var n, i, o, s = r(942),
                    a = r(9200),
                    u = r(9131),
                    l = r(2909),
                    c = r(5270),
                    f = r(8521),
                    d = r(4702),
                    p = r(1818),
                    h = d("iterator"),
                    g = !1;
                [].keys && ("next" in (o = [].keys()) ? (i = c(c(o))) !== Object.prototype && (n = i) : g = !0), !u(n) || s(function() {
                    var t = {};
                    return n[h].call(t) !== t
                }) ? n = {} : p && (n = l(n)), a(n[h]) || f(n, h, function() {
                    return this
                }), t.exports = {
                    IteratorPrototype: n,
                    BUGGY_SAFARI_ITERATORS: g
                }
            },
            488: function(t) {
                "use strict";
                t.exports = {}
            },
            7457: function(t, e, r) {
                "use strict";
                var n = r(2695);
                t.exports = function(t) {
                    return n(t.length)
                }
            },
            4174: function(t, e, r) {
                "use strict";
                var n = r(7133),
                    i = r(942),
                    o = r(9200),
                    s = r(9158),
                    a = r(6857),
                    u = r(7403).CONFIGURABLE,
                    l = r(7217),
                    c = r(1514),
                    f = c.enforce,
                    d = c.get,
                    p = String,
                    h = Object.defineProperty,
                    g = n("".slice),
                    D = n("".replace),
                    m = n([].join),
                    v = a && !i(function() {
                        return 8 !== h(function() {}, "length", {
                            value: 8
                        }).length
                    }),
                    y = String(String).split("String"),
                    _ = t.exports = function(t, e, r) {
                        "Symbol(" === g(p(e), 0, 7) && (e = "[" + D(p(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!s(t, "name") || u && t.name !== e) && (a ? h(t, "name", {
                            value: e,
                            configurable: !0
                        }) : t.name = e), v && r && s(r, "arity") && t.length !== r.arity && h(t, "length", {
                            value: r.arity
                        });
                        try {
                            r && s(r, "constructor") && r.constructor ? a && h(t, "prototype", {
                                writable: !1
                            }) : t.prototype && (t.prototype = void 0)
                        } catch (t) {}
                        var n = f(t);
                        return s(n, "source") || (n.source = m(y, "string" == typeof e ? e : "")), t
                    };
                Function.prototype.toString = _(function() {
                    return o(this) && d(this).source || l(this)
                }, "toString")
            },
            8226: function(t) {
                "use strict";
                var e = Math.ceil,
                    r = Math.floor;
                t.exports = Math.trunc || function(t) {
                    var n = +t;
                    return (n > 0 ? r : e)(n)
                }
            },
            2909: function(t, e, r) {
                "use strict";
                var n, i = r(4398),
                    o = r(2066),
                    s = r(2030),
                    a = r(640),
                    u = r(4510),
                    l = r(1466),
                    c = r(2316),
                    f = "prototype",
                    d = "script",
                    p = c("IE_PROTO"),
                    h = function() {},
                    g = function(t) {
                        return "<" + d + ">" + t + "</" + d + ">"
                    },
                    D = function(t) {
                        t.write(g("")), t.close();
                        var e = t.parentWindow.Object;
                        return t = null, e
                    },
                    m = function() {
                        try {
                            n = new ActiveXObject("htmlfile")
                        } catch (t) {}
                        var t, e, r;
                        m = "undefined" != typeof document ? document.domain && n ? D(n) : (e = l("iframe"), r = "java" + d + ":", e.style.display = "none", u.appendChild(e), e.src = String(r), (t = e.contentWindow.document).open(), t.write(g("document.F=Object")), t.close(), t.F) : D(n);
                        for (var i = s.length; i--;) delete m[f][s[i]];
                        return m()
                    };
                a[p] = !0, t.exports = Object.create || function(t, e) {
                    var r;
                    return null !== t ? (h[f] = i(t), r = new h, h[f] = null, r[p] = t) : r = m(), void 0 === e ? r : o.f(r, e)
                }
            },
            2066: function(t, e, r) {
                "use strict";
                var n = r(6857),
                    i = r(335),
                    o = r(4446),
                    s = r(4398),
                    a = r(4360),
                    u = r(3733);
                e.f = n && !i ? Object.defineProperties : function(t, e) {
                    s(t);
                    for (var r, n = a(e), i = u(e), l = i.length, c = 0; l > c;) o.f(t, r = i[c++], n[r]);
                    return t
                }
            },
            4446: function(t, e, r) {
                "use strict";
                var n = r(6857),
                    i = r(5842),
                    o = r(335),
                    s = r(4398),
                    a = r(2548),
                    u = TypeError,
                    l = Object.defineProperty,
                    c = Object.getOwnPropertyDescriptor,
                    f = "enumerable",
                    d = "configurable",
                    p = "writable";
                e.f = n ? o ? function(t, e, r) {
                    if (s(t), e = a(e), s(r), "function" == typeof t && "prototype" === e && "value" in r && p in r && !r[p]) {
                        var n = c(t, e);
                        n && n[p] && (t[e] = r.value, r = {
                            configurable: d in r ? r[d] : n[d],
                            enumerable: f in r ? r[f] : n[f],
                            writable: !1
                        })
                    }
                    return l(t, e, r)
                } : l : function(t, e, r) {
                    if (s(t), e = a(e), s(r), i) try {
                        return l(t, e, r)
                    } catch (t) {}
                    if ("get" in r || "set" in r) throw new u("Accessors not supported");
                    return "value" in r && (t[e] = r.value), t
                }
            },
            2428: function(t, e, r) {
                "use strict";
                var n = r(6857),
                    i = r(492),
                    o = r(6732),
                    s = r(2007),
                    a = r(4360),
                    u = r(2548),
                    l = r(9158),
                    c = r(5842),
                    f = Object.getOwnPropertyDescriptor;
                e.f = n ? f : function(t, e) {
                    if (t = a(t), e = u(e), c) try {
                        return f(t, e)
                    } catch (t) {}
                    if (l(t, e)) return s(!i(o.f, t, e), t[e])
                }
            },
            5809: function(t, e, r) {
                "use strict";
                var n = r(8959),
                    i = r(2030).concat("length", "prototype");
                e.f = Object.getOwnPropertyNames || function(t) {
                    return n(t, i)
                }
            },
            1264: function(t, e) {
                "use strict";
                e.f = Object.getOwnPropertySymbols
            },
            5270: function(t, e, r) {
                "use strict";
                var n = r(9158),
                    i = r(9200),
                    o = r(9272),
                    s = r(2316),
                    a = r(6308),
                    u = s("IE_PROTO"),
                    l = Object,
                    c = l.prototype;
                t.exports = a ? l.getPrototypeOf : function(t) {
                    var e = o(t);
                    if (n(e, u)) return e[u];
                    var r = e.constructor;
                    return i(r) && e instanceof r ? r.prototype : e instanceof l ? c : null
                }
            },
            2430: function(t, e, r) {
                "use strict";
                var n = r(7133);
                t.exports = n({}.isPrototypeOf)
            },
            8959: function(t, e, r) {
                "use strict";
                var n = r(7133),
                    i = r(9158),
                    o = r(4360),
                    s = r(6134).indexOf,
                    a = r(640),
                    u = n([].push);
                t.exports = function(t, e) {
                    var r, n = o(t),
                        l = 0,
                        c = [];
                    for (r in n) !i(a, r) && i(n, r) && u(c, r);
                    for (; e.length > l;) i(n, r = e[l++]) && (~s(c, r) || u(c, r));
                    return c
                }
            },
            3733: function(t, e, r) {
                "use strict";
                var n = r(8959),
                    i = r(2030);
                t.exports = Object.keys || function(t) {
                    return n(t, i)
                }
            },
            6732: function(t, e) {
                "use strict";
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
                "use strict";
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
                "use strict";
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
                "use strict";
                var n = r(2178),
                    i = TypeError;
                t.exports = function(t) {
                    if (n(t)) throw new i("Can't call method on " + t);
                    return t
                }
            },
            2316: function(t, e, r) {
                "use strict";
                var n = r(6014),
                    i = r(685),
                    o = n("keys");
                t.exports = function(t) {
                    return o[t] || (o[t] = i(t))
                }
            },
            5210: function(t, e, r) {
                "use strict";
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
                "use strict";
                var n = r(5210);
                t.exports = function(t, e) {
                    return n[t] || (n[t] = e || {})
                }
            },
            260: function(t, e, r) {
                "use strict";
                var n = r(9140),
                    i = r(942),
                    o = r(8793).String;
                t.exports = !!Object.getOwnPropertySymbols && !i(function() {
                    var t = Symbol("symbol detection");
                    return !o(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41
                })
            },
            8479: function(t, e, r) {
                "use strict";
                var n = r(4932),
                    i = Math.max,
                    o = Math.min;
                t.exports = function(t, e) {
                    var r = n(t);
                    return r < 0 ? i(r + e, 0) : o(r, e)
                }
            },
            4360: function(t, e, r) {
                "use strict";
                var n = r(8060),
                    i = r(3977);
                t.exports = function(t) {
                    return n(i(t))
                }
            },
            4932: function(t, e, r) {
                "use strict";
                var n = r(8226);
                t.exports = function(t) {
                    var e = +t;
                    return e != e || 0 === e ? 0 : n(e)
                }
            },
            2695: function(t, e, r) {
                "use strict";
                var n = r(4932),
                    i = Math.min;
                t.exports = function(t) {
                    var e = n(t);
                    return e > 0 ? i(e, 9007199254740991) : 0
                }
            },
            9272: function(t, e, r) {
                "use strict";
                var n = r(3977),
                    i = Object;
                t.exports = function(t) {
                    return i(n(t))
                }
            },
            9422: function(t, e, r) {
                "use strict";
                var n = r(492),
                    i = r(9131),
                    o = r(460),
                    s = r(9325),
                    a = r(1427),
                    u = r(4702),
                    l = TypeError,
                    c = u("toPrimitive");
                t.exports = function(t, e) {
                    if (!i(t) || o(t)) return t;
                    var r, u = s(t, c);
                    if (u) {
                        if (void 0 === e && (e = "default"), r = n(u, t, e), !i(r) || o(r)) return r;
                        throw new l("Can't convert object to primitive value")
                    }
                    return void 0 === e && (e = "number"), a(t, e)
                }
            },
            2548: function(t, e, r) {
                "use strict";
                var n = r(9422),
                    i = r(460);
                t.exports = function(t) {
                    var e = n(t, "string");
                    return i(e) ? e : e + ""
                }
            },
            917: function(t, e, r) {
                "use strict";
                var n = {};
                n[r(4702)("toStringTag")] = "z", t.exports = "[object z]" === String(n)
            },
            7938: function(t) {
                "use strict";
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
                "use strict";
                var n = r(7133),
                    i = 0,
                    o = Math.random(),
                    s = n(1.1.toString);
                t.exports = function(t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + s(++i + o, 36)
                }
            },
            6253: function(t, e, r) {
                "use strict";
                var n = r(260);
                t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            335: function(t, e, r) {
                "use strict";
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
                "use strict";
                var n = r(8793),
                    i = r(9200),
                    o = n.WeakMap;
                t.exports = i(o) && /native code/.test(String(o))
            },
            4702: function(t, e, r) {
                "use strict";
                var n = r(8793),
                    i = r(6014),
                    o = r(9158),
                    s = r(685),
                    a = r(260),
                    u = r(6253),
                    l = n.Symbol,
                    c = i("wks"),
                    f = u ? l.for || l : l && l.withoutSetter || s;
                t.exports = function(t) {
                    return o(c, t) || (c[t] = a && o(l, t) ? l[t] : f("Symbol." + t)), c[t]
                }
            },
            2306: function(t, e, r) {
                "use strict";
                var n = r(3353),
                    i = r(8793),
                    o = r(602),
                    s = r(4398),
                    a = r(9200),
                    u = r(5270),
                    l = r(3129),
                    c = r(5909),
                    f = r(942),
                    d = r(9158),
                    p = r(4702),
                    h = r(1982).IteratorPrototype,
                    g = r(6857),
                    D = r(1818),
                    m = "constructor",
                    v = "Iterator",
                    y = p("toStringTag"),
                    _ = TypeError,
                    x = i[v],
                    b = D || !a(x) || x.prototype !== h || !f(function() {
                        x({})
                    }),
                    w = function() {
                        if (o(this, h), u(this) === h) throw new _("Abstract class Iterator not directly constructable")
                    },
                    C = function(t, e) {
                        g ? l(h, t, {
                            configurable: !0,
                            get: function() {
                                return e
                            },
                            set: function(e) {
                                if (s(this), this === h) throw new _("You can't redefine this property");
                                d(this, t) ? this[t] = e : c(this, t, e)
                            }
                        }) : h[t] = e
                    };
                d(h, y) || C(y, v), !b && d(h, m) && h[m] !== Object || C(m, w), w.prototype = h, n({
                    global: !0,
                    constructor: !0,
                    forced: b
                }, {
                    Iterator: w
                })
            },
            2099: function(t, e, r) {
                "use strict";
                var n = r(3353),
                    i = r(492),
                    o = r(3973),
                    s = r(2365),
                    a = r(4398),
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
                        a(this);
                        try {
                            s(t)
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
            9849: function(t, e, r) {
                "use strict";
                r(2306)
            },
            6658: function(t, e, r) {
                "use strict";
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
    r.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(),
        function() {
            "use strict";

            function t(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function e(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
            }
            r(5300), r(9849), r(6658), window.addEventListener("DOMContentLoaded", () => {
                document.querySelectorAll(".accordion").forEach(t => {
                    t.querySelectorAll(".accordion-item").forEach(t => {
                        const e = t.querySelector(".accordion-header"),
                            r = t.querySelector("main");
                        let n = t.classList.contains("active") || !1;
                        if (null !== e && null !== r) {
                            const i = r.querySelector(".accordion-content");
                            if (null !== i) {
                                let o = i.getBoundingClientRect().height;
                                n && (r.style.height = `${o}px`), document.addEventListener("click", s => {
                                    const a = s.composedPath().includes(e),
                                        u = s.composedPath().includes(r);
                                    let l;
                                    o = i.getBoundingClientRect().height, n && !u || !a && !u ? "false" !== e.dataset.close && (n = !1, t.classList.remove("active"), r.style.height = "0px", null !== l && clearTimeout(l), l = setTimeout(() => {
                                        t.classList.remove("active-content")
                                    }, 400)) : (n = !0, t.classList.add("active"), t.classList.add("active-content"), o = i.getBoundingClientRect().height, r.style.height = `${o}px`)
                                })
                            }
                        }
                    })
                })
            }, !1);
            var n, i, o, s, a, u, l, c, f, d, p, h, g, D, m, v, y, _ = {
                    autoSleep: 120,
                    force3D: "auto",
                    nullTargetWarn: 1,
                    units: {
                        lineHeight: ""
                    }
                },
                x = {
                    duration: .5,
                    overwrite: !1,
                    delay: 0
                },
                b = 1e8,
                w = 1e-8,
                C = 2 * Math.PI,
                E = C / 4,
                F = 0,
                T = Math.sqrt,
                S = Math.cos,
                A = Math.sin,
                M = function(t) {
                    return "string" == typeof t
                },
                O = function(t) {
                    return "function" == typeof t
                },
                k = function(t) {
                    return "number" == typeof t
                },
                P = function(t) {
                    return void 0 === t
                },
                L = function(t) {
                    return "object" == typeof t
                },
                B = function(t) {
                    return !1 !== t
                },
                R = function() {
                    return "undefined" != typeof window
                },
                I = function(t) {
                    return O(t) || M(t)
                },
                Y = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
                z = Array.isArray,
                X = /random\([^)]+\)/g,
                N = /,\s*/g,
                j = /(?:-?\.?\d|\.)+/gi,
                q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                H = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                W = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                U = /[+-]=-?[.\d]+/,
                V = /[^,'"\[\]\s]+/gi,
                G = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
                $ = {},
                K = {},
                Z = function(t) {
                    return (K = Tt(t, $)) && Tr
                },
                Q = function(t, e) {
                    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
                },
                J = function(t, e) {
                    return !e && console.warn(t)
                },
                tt = function(t, e) {
                    return t && ($[t] = e) && K && (K[t] = e) || $
                },
                et = function() {
                    return 0
                },
                rt = {
                    suppressEvents: !0,
                    isStart: !0,
                    kill: !1
                },
                nt = {
                    suppressEvents: !0,
                    kill: !1
                },
                it = {
                    suppressEvents: !0
                },
                ot = {},
                st = [],
                at = {},
                ut = {},
                lt = {},
                ct = 30,
                ft = [],
                dt = "",
                pt = function(t) {
                    var e, r, n = t[0];
                    if (L(n) || O(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                        for (r = ft.length; r-- && !ft[r].targetTest(n););
                        e = ft[r]
                    }
                    for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ne(t[r], e))) || t.splice(r, 1);
                    return t
                },
                ht = function(t) {
                    return t._gsap || pt(ie(t))[0]._gsap
                },
                gt = function(t, e, r) {
                    return (r = t[e]) && O(r) ? t[e]() : P(r) && t.getAttribute && t.getAttribute(e) || r
                },
                Dt = function(t, e) {
                    return (t = t.split(",")).forEach(e) || t
                },
                mt = function(t) {
                    return Math.round(1e5 * t) / 1e5 || 0
                },
                vt = function(t) {
                    return Math.round(1e7 * t) / 1e7 || 0
                },
                yt = function(t, e) {
                    var r = e.charAt(0),
                        n = parseFloat(e.substr(2));
                    return t = parseFloat(t), "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
                },
                _t = function(t, e) {
                    for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r;);
                    return n < r
                },
                xt = function() {
                    var t, e, r = st.length,
                        n = st.slice(0);
                    for (at = {}, st.length = 0, t = 0; t < r; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
                },
                bt = function(t) {
                    return !!(t._initted || t._startAt || t.add)
                },
                wt = function(t, e, r, n) {
                    st.length && !i && xt(), t.render(e, r, n || !!(i && e < 0 && bt(t))), st.length && !i && xt()
                },
                Ct = function(t) {
                    var e = parseFloat(t);
                    return (e || 0 === e) && (t + "").match(V).length < 2 ? e : M(t) ? t.trim() : t
                },
                Et = function(t) {
                    return t
                },
                Ft = function(t, e) {
                    for (var r in e) r in t || (t[r] = e[r]);
                    return t
                },
                Tt = function(t, e) {
                    for (var r in e) t[r] = e[r];
                    return t
                },
                St = function t(e, r) {
                    for (var n in r) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = L(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
                    return e
                },
                At = function(t, e) {
                    var r, n = {};
                    for (r in t) r in e || (n[r] = t[r]);
                    return n
                },
                Mt = function(t) {
                    var e, r = t.parent || s,
                        n = t.keyframes ? (e = z(t.keyframes), function(t, r) {
                            for (var n in r) n in t || "duration" === n && e || "ease" === n || (t[n] = r[n])
                        }) : Ft;
                    if (B(t.inherit))
                        for (; r;) n(t, r.vars.defaults), r = r.parent || r._dp;
                    return t
                },
                Ot = function(t, e, r, n, i) {
                    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
                    var o, s = t[n];
                    if (i)
                        for (o = e[i]; s && s[i] > o;) s = s._prev;
                    return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = s, e.parent = e._dp = t, e
                },
                kt = function(t, e, r, n) {
                    void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
                    var i = e._prev,
                        o = e._next;
                    i ? i._next = o : t[r] === e && (t[r] = o), o ? o._prev = i : t[n] === e && (t[n] = i), e._next = e._prev = e.parent = null
                },
                Pt = function(t, e) {
                    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
                },
                Lt = function(t, e) {
                    if (t && (!e || e._end > t._dur || e._start < 0))
                        for (var r = t; r;) r._dirty = 1, r = r.parent;
                    return t
                },
                Bt = function(t, e, r, n) {
                    return t._startAt && (i ? t._startAt.revert(nt) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
                },
                Rt = function t(e) {
                    return !e || e._ts && t(e.parent)
                },
                It = function(t) {
                    return t._repeat ? Yt(t._tTime, t = t.duration() + t._rDelay) * t : 0
                },
                Yt = function(t, e) {
                    var r = Math.floor(t = vt(t / e));
                    return t && r === t ? r - 1 : r
                },
                zt = function(t, e) {
                    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
                },
                Xt = function(t) {
                    return t._end = vt(t._start + (t._tDur / Math.abs(t._ts || t._rts || w) || 0))
                },
                Nt = function(t, e) {
                    var r = t._dp;
                    return r && r.smoothChildTiming && t._ts && (t._start = vt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Xt(t), r._dirty || Lt(r, t)), t
                },
                jt = function(t, e) {
                    var r;
                    if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = zt(t.rawTime(), e), (!e._dur || te(0, e.totalDuration(), r) - e._tTime > w) && e.render(r, !0)), Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                        if (t._dur < t.duration())
                            for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                        t._zTime = -1e-8
                    }
                },
                qt = function(t, e, r, n) {
                    return e.parent && Pt(e), e._start = vt((k(r) ? r : r || t !== s ? Zt(t, r, e) : t._time) + e._delay), e._end = vt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Ot(t, e, "_first", "_last", t._sort ? "_start" : 0), Vt(e) || (t._recent = e), n || jt(t, e), t._ts < 0 && Nt(t, t._tTime), t
                },
                Ht = function(t, e) {
                    return ($.ScrollTrigger || Q("scrollTrigger", e)) && $.ScrollTrigger.create(e, t)
                },
                Wt = function(t, e, r, n, o) {
                    return $e(t, e, o), t._initted ? !r && t._pt && !i && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Se.frame ? (st.push(t), t._lazy = [o, n], 1) : void 0 : 1
                },
                Ut = function t(e) {
                    var r = e.parent;
                    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
                },
                Vt = function(t) {
                    var e = t.data;
                    return "isFromStart" === e || "isStart" === e
                },
                Gt = function(t, e, r, n) {
                    var i = t._repeat,
                        o = vt(e) || 0,
                        s = t._tTime / t._tDur;
                    return s && !n && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : vt(o * (i + 1) + t._rDelay * i) : o, s > 0 && !n && Nt(t, t._tTime = t._tDur * s), t.parent && Xt(t), r || Lt(t.parent, t), t
                },
                $t = function(t) {
                    return t instanceof qe ? Lt(t) : Gt(t, t._dur)
                },
                Kt = {
                    _start: 0,
                    endTime: et,
                    totalDuration: et
                },
                Zt = function t(e, r, n) {
                    var i, o, s, a = e.labels,
                        u = e._recent || Kt,
                        l = e.duration() >= b ? u.endTime(!1) : e._dur;
                    return M(r) && (isNaN(r) || r in a) ? (o = r.charAt(0), s = "%" === r.substr(-1), i = r.indexOf("="), "<" === o || ">" === o ? (i >= 0 && (r = r.replace(/=/, "")), ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (s ? (i < 0 ? u : n).totalDuration() / 100 : 1)) : i < 0 ? (r in a || (a[r] = l), a[r]) : (o = parseFloat(r.charAt(i - 1) + r.substr(i + 1)), s && n && (o = o / 100 * (z(n) ? n[0] : n).totalDuration()), i > 1 ? t(e, r.substr(0, i - 1), n) + o : l + o)) : null == r ? l : +r
                },
                Qt = function(t, e, r) {
                    var n, i, o = k(e[1]),
                        s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
                        a = e[s];
                    if (o && (a.duration = e[1]), a.parent = r, t) {
                        for (n = a, i = r; i && !("immediateRender" in n);) n = i.vars.defaults || {}, i = B(i.vars.inherit) && i.parent;
                        a.immediateRender = B(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
                    }
                    return new tr(e[0], a, e[s + 1])
                },
                Jt = function(t, e) {
                    return t || 0 === t ? e(t) : e
                },
                te = function(t, e, r) {
                    return r < t ? t : r > e ? e : r
                },
                ee = function(t, e) {
                    return M(t) && (e = G.exec(t)) ? e[1] : ""
                },
                re = [].slice,
                ne = function(t, e) {
                    return t && L(t) && "length" in t && (!e && !t.length || t.length - 1 in t && L(t[0])) && !t.nodeType && t !== a
                },
                ie = function(t, e, r) {
                    return o && !e && o.selector ? o.selector(t) : !M(t) || r || !u && Ae() ? z(t) ? function(t, e, r) {
                        return void 0 === r && (r = []), t.forEach(function(t) {
                            var n;
                            return M(t) && !e || ne(t, 1) ? (n = r).push.apply(n, ie(t)) : r.push(t)
                        }) || r
                    }(t, r) : ne(t) ? re.call(t, 0) : t ? [t] : [] : re.call((e || l).querySelectorAll(t), 0)
                },
                oe = function(t) {
                    return t = ie(t)[0] || J("Invalid scope") || {},
                        function(e) {
                            var r = t.current || t.nativeElement || t;
                            return ie(e, r.querySelectorAll ? r : r === t ? J("Invalid scope") || l.createElement("div") : t)
                        }
                },
                se = function(t) {
                    return t.sort(function() {
                        return .5 - Math.random()
                    })
                },
                ae = function(t) {
                    if (O(t)) return t;
                    var e = L(t) ? t : {
                            each: t
                        },
                        r = Re(e.ease),
                        n = e.from || 0,
                        i = parseFloat(e.base) || 0,
                        o = {},
                        s = n > 0 && n < 1,
                        a = isNaN(n) || s,
                        u = e.axis,
                        l = n,
                        c = n;
                    return M(n) ? l = c = {
                            center: .5,
                            edges: .5,
                            end: 1
                        }[n] || 0 : !s && a && (l = n[0], c = n[1]),
                        function(t, s, f) {
                            var d, p, h, g, D, m, v, y, _, x = (f || e).length,
                                w = o[x];
                            if (!w) {
                                if (!(_ = "auto" === e.grid ? 0 : (e.grid || [1, b])[1])) {
                                    for (v = -b; v < (v = f[_++].getBoundingClientRect().left) && _ < x;);
                                    _ < x && _--
                                }
                                for (w = o[x] = [], d = a ? Math.min(_, x) * l - .5 : n % _, p = _ === b ? 0 : a ? x * c / _ - .5 : n / _ | 0, v = 0, y = b, m = 0; m < x; m++) h = m % _ - d, g = p - (m / _ | 0), w[m] = D = u ? Math.abs("y" === u ? g : h) : T(h * h + g * g), D > v && (v = D), D < y && (y = D);
                                "random" === n && se(w), w.max = v - y, w.min = y, w.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (_ > x ? x - 1 : u ? "y" === u ? x / _ : _ : Math.max(_, x / _)) || 0) * ("edges" === n ? -1 : 1), w.b = x < 0 ? i - x : i, w.u = ee(e.amount || e.each) || 0, r = r && x < 0 ? Le(r) : r
                            }
                            return x = (w[t] - w.min) / w.max || 0, vt(w.b + (r ? r(x) : x) * w.v) + w.u
                        }
                },
                ue = function(t) {
                    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                    return function(r) {
                        var n = vt(Math.round(parseFloat(r) / t) * t * e);
                        return (n - n % 1) / e + (k(r) ? 0 : ee(r))
                    }
                },
                le = function(t, e) {
                    var r, n, i = z(t);
                    return !i && L(t) && (r = i = t.radius || b, t.values ? (t = ie(t.values), (n = !k(t[0])) && (r *= r)) : t = ue(t.increment)), Jt(e, i ? O(t) ? function(e) {
                        return n = t(e), Math.abs(n - e) <= r ? n : e
                    } : function(e) {
                        for (var i, o, s = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), u = b, l = 0, c = t.length; c--;)(i = n ? (i = t[c].x - s) * i + (o = t[c].y - a) * o : Math.abs(t[c] - s)) < u && (u = i, l = c);
                        return l = !r || u <= r ? t[l] : e, n || l === e || k(e) ? l : l + ee(e)
                    } : ue(t))
                },
                ce = function(t, e, r, n) {
                    return Jt(z(t) ? !e : !0 === r ? !!(r = 0) : !n, function() {
                        return z(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * n) / n
                    })
                },
                fe = function(t, e, r) {
                    return Jt(r, function(r) {
                        return t[~~e(r)]
                    })
                },
                de = function(t) {
                    return t.replace(X, function(t) {
                        var e = t.indexOf("[") + 1,
                            r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split(N);
                        return ce(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5)
                    })
                },
                pe = function(t, e, r, n, i) {
                    var o = e - t,
                        s = n - r;
                    return Jt(i, function(e) {
                        return r + ((e - t) / o * s || 0)
                    })
                },
                he = function(t, e, r) {
                    var n, i, o, s = t.labels,
                        a = b;
                    for (n in s)(i = s[n] - e) < 0 == !!r && i && a > (i = Math.abs(i)) && (o = n, a = i);
                    return o
                },
                ge = function(t, e, r) {
                    var n, i, s, a = t.vars,
                        u = a[e],
                        l = o,
                        c = t._ctx;
                    if (u) return n = a[e + "Params"], i = a.callbackScope || t, r && st.length && xt(), c && (o = c), s = n ? u.apply(i, n) : u.call(i), o = l, s
                },
                De = function(t) {
                    return Pt(t), t.scrollTrigger && t.scrollTrigger.kill(!!i), t.progress() < 1 && ge(t, "onInterrupt"), t
                },
                me = [],
                ve = function(t) {
                    if (t)
                        if (t = !t.name && t.default || t, R() || t.headless) {
                            var e = t.name,
                                r = O(t),
                                n = e && !r && t.init ? function() {
                                    this._props = []
                                } : t,
                                i = {
                                    init: et,
                                    render: lr,
                                    add: Ve,
                                    kill: fr,
                                    modifier: cr,
                                    rawVars: 0
                                },
                                o = {
                                    targetTest: 0,
                                    get: 0,
                                    getSetter: or,
                                    aliases: {},
                                    register: 0
                                };
                            if (Ae(), t !== n) {
                                if (ut[e]) return;
                                Ft(n, Ft(At(t, i), o)), Tt(n.prototype, Tt(i, At(t, o))), ut[n.prop = e] = n, t.targetTest && (ft.push(n), ot[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                            }
                            tt(e, n), t.register && t.register(Tr, n, hr)
                        } else me.push(t)
                },
                ye = 255,
                _e = {
                    aqua: [0, ye, ye],
                    lime: [0, ye, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, ye],
                    navy: [0, 0, 128],
                    white: [ye, ye, ye],
                    olive: [128, 128, 0],
                    yellow: [ye, ye, 0],
                    orange: [ye, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [ye, 0, 0],
                    pink: [ye, 192, 203],
                    cyan: [0, ye, ye],
                    transparent: [ye, ye, ye, 0]
                },
                xe = function(t, e, r) {
                    return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * ye + .5 | 0
                },
                be = function(t, e, r) {
                    var n, i, o, s, a, u, l, c, f, d, p = t ? k(t) ? [t >> 16, t >> 8 & ye, t & ye] : 0 : _e.black;
                    if (!p) {
                        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), _e[t]) p = _e[t];
                        else if ("#" === t.charAt(0)) {
                            if (t.length < 6 && (n = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + n + n + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & ye, p & ye, parseInt(t.substr(7), 16) / 255];
                            p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ye, t & ye]
                        } else if ("hsl" === t.substr(0, 3))
                            if (p = d = t.match(j), e) {
                                if (~t.indexOf("=")) return p = t.match(q), r && p.length < 4 && (p[3] = 1), p
                            } else s = +p[0] % 360 / 360, a = +p[1] / 100, n = 2 * (u = +p[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a), p.length > 3 && (p[3] *= 1), p[0] = xe(s + 1 / 3, n, i), p[1] = xe(s, n, i), p[2] = xe(s - 1 / 3, n, i);
                        else p = t.match(j) || _e.transparent;
                        p = p.map(Number)
                    }
                    return e && !d && (n = p[0] / ye, i = p[1] / ye, o = p[2] / ye, u = ((l = Math.max(n, i, o)) + (c = Math.min(n, i, o))) / 2, l === c ? s = a = 0 : (f = l - c, a = u > .5 ? f / (2 - l - c) : f / (l + c), s = l === n ? (i - o) / f + (i < o ? 6 : 0) : l === i ? (o - n) / f + 2 : (n - i) / f + 4, s *= 60), p[0] = ~~(s + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
                },
                we = function(t) {
                    var e = [],
                        r = [],
                        n = -1;
                    return t.split(Ee).forEach(function(t) {
                        var i = t.match(H) || [];
                        e.push.apply(e, i), r.push(n += i.length + 1)
                    }), e.c = r, e
                },
                Ce = function(t, e, r) {
                    var n, i, o, s, a = "",
                        u = (t + a).match(Ee),
                        l = e ? "hsla(" : "rgba(",
                        c = 0;
                    if (!u) return t;
                    if (u = u.map(function(t) {
                            return (t = be(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                        }), r && (o = we(t), (n = r.c).join(a) !== o.c.join(a)))
                        for (s = (i = t.replace(Ee, "1").split(H)).length - 1; c < s; c++) a += i[c] + (~n.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (o.length ? o : u.length ? u : r).shift());
                    if (!i)
                        for (s = (i = t.split(Ee)).length - 1; c < s; c++) a += i[c] + u[c];
                    return a + i[s]
                },
                Ee = function() {
                    var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                    for (t in _e) e += "|" + t + "\\b";
                    return new RegExp(e + ")", "gi")
                }(),
                Fe = /hsl[a]?\(/,
                Te = function(t) {
                    var e, r = t.join(" ");
                    if (Ee.lastIndex = 0, Ee.test(r)) return e = Fe.test(r), t[1] = Ce(t[1], e), t[0] = Ce(t[0], e, we(t[1])), !0
                },
                Se = function() {
                    var t, e, r, n, i, o, s = Date.now,
                        f = 500,
                        d = 33,
                        h = s(),
                        g = h,
                        D = 1e3 / 240,
                        m = D,
                        v = [],
                        y = function r(a) {
                            var u, l, c, p, y = s() - g,
                                _ = !0 === a;
                            if ((y > f || y < 0) && (h += y - d), ((u = (c = (g += y) - h) - m) > 0 || _) && (p = ++n.frame, i = c - 1e3 * n.time, n.time = c /= 1e3, m += u + (u >= D ? 4 : D - u), l = 1), _ || (t = e(r)), l)
                                for (o = 0; o < v.length; o++) v[o](c, i, p, a)
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
                            c && (!u && R() && (a = u = window, l = a.document || {}, $.gsap = Tr, (a.gsapVersions || (a.gsapVersions = [])).push(Tr.version), Z(K || a.GreenSockGlobals || !a.gsap && a || {}), me.forEach(ve)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t && n.sleep(), e = r || function(t) {
                                return setTimeout(t, m - 1e3 * n.time + 1 | 0)
                            }, p = 1, y(2))
                        },
                        sleep: function() {
                            (r ? cancelAnimationFrame : clearTimeout)(t), p = 0, e = et
                        },
                        lagSmoothing: function(t, e) {
                            f = t || 1 / 0, d = Math.min(e || 33, f)
                        },
                        fps: function(t) {
                            D = 1e3 / (t || 240), m = 1e3 * n.time + D
                        },
                        add: function(t, e, r) {
                            var i = e ? function(e, r, o, s) {
                                t(e, r, o, s), n.remove(i)
                            } : t;
                            return n.remove(t), v[r ? "unshift" : "push"](i), Ae(), i
                        },
                        remove: function(t, e) {
                            ~(e = v.indexOf(t)) && v.splice(e, 1) && o >= e && o--
                        },
                        _listeners: v
                    }
                }(),
                Ae = function() {
                    return !p && Se.wake()
                },
                Me = {},
                Oe = /^[\d.\-M][\d.\-,\s]/,
                ke = /["']/g,
                Pe = function(t) {
                    for (var e, r, n, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++) r = o[a], e = a !== u - 1 ? r.lastIndexOf(",") : r.length, n = r.substr(0, e), i[s] = isNaN(n) ? n.replace(ke, "").trim() : +n, s = r.substr(e + 1).trim();
                    return i
                },
                Le = function(t) {
                    return function(e) {
                        return 1 - t(1 - e)
                    }
                },
                Be = function t(e, r) {
                    for (var n, i = e._first; i;) i instanceof qe ? t(i, r) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === r || (i.timeline ? t(i.timeline, r) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = r)), i = i._next
                },
                Re = function(t, e) {
                    return t && (O(t) ? t : Me[t] || function(t) {
                        var e, r, n, i, o = (t + "").split("("),
                            s = Me[o[0]];
                        return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Pe(o[1])] : (e = t, r = e.indexOf("(") + 1, n = e.indexOf(")"), i = e.indexOf("(", r), e.substring(r, ~i && i < n ? e.indexOf(")", n + 1) : n)).split(",").map(Ct)) : Me._CE && Oe.test(t) ? Me._CE("", t) : s
                    }(t)) || e
                },
                Ie = function(t, e, r, n) {
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
                    return Dt(t, function(t) {
                        for (var e in Me[t] = $[t] = o, Me[i = t.toLowerCase()] = r, o) Me[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Me[t + "." + e] = o[e]
                    }), o
                },
                Ye = function(t) {
                    return function(e) {
                        return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
                    }
                },
                ze = function t(e, r, n) {
                    var i = r >= 1 ? r : 1,
                        o = (n || (e ? .3 : .45)) / (r < 1 ? r : 1),
                        s = o / C * (Math.asin(1 / i) || 0),
                        a = function(t) {
                            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * A((t - s) * o) + 1
                        },
                        u = "out" === e ? a : "in" === e ? function(t) {
                            return 1 - a(1 - t)
                        } : Ye(a);
                    return o = C / o, u.config = function(r, n) {
                        return t(e, r, n)
                    }, u
                },
                Xe = function t(e, r) {
                    void 0 === r && (r = 1.70158);
                    var n = function(t) {
                            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
                        },
                        i = "out" === e ? n : "in" === e ? function(t) {
                            return 1 - n(1 - t)
                        } : Ye(n);
                    return i.config = function(r) {
                        return t(e, r)
                    }, i
                };
            Dt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
                var r = e < 5 ? e + 1 : e;
                Ie(t + ",Power" + (r - 1), e ? function(t) {
                    return Math.pow(t, r)
                } : function(t) {
                    return t
                }, function(t) {
                    return 1 - Math.pow(1 - t, r)
                }, function(t) {
                    return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
                })
            }), Me.Linear.easeNone = Me.none = Me.Linear.easeIn, Ie("Elastic", ze("in"), ze("out"), ze()), h = 7.5625, m = 2 * (D = 1 / (g = 2.75)), v = 2.5 * D, Ie("Bounce", function(t) {
                return 1 - y(1 - t)
            }, y = function(t) {
                return t < D ? h * t * t : t < m ? h * Math.pow(t - 1.5 / g, 2) + .75 : t < v ? h * (t -= 2.25 / g) * t + .9375 : h * Math.pow(t - 2.625 / g, 2) + .984375
            }), Ie("Expo", function(t) {
                return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
            }), Ie("Circ", function(t) {
                return -(T(1 - t * t) - 1)
            }), Ie("Sine", function(t) {
                return 1 === t ? 1 : 1 - S(t * E)
            }), Ie("Back", Xe("in"), Xe("out"), Xe()), Me.SteppedEase = Me.steps = $.SteppedEase = {
                config: function(t, e) {
                    void 0 === t && (t = 1);
                    var r = 1 / t,
                        n = t + (e ? 0 : 1),
                        i = e ? 1 : 0;
                    return function(t) {
                        return ((n * te(0, .99999999, t) | 0) + i) * r
                    }
                }
            }, x.ease = Me["quad.out"], Dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
                return dt += t + "," + t + "Params,"
            });
            var Ne = function(t, e) {
                    this.id = F++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : gt, this.set = e ? e.getSetter : or
                },
                je = function() {
                    function t(t) {
                        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Gt(this, +t.duration, 1, 1), this.data = t.data, o && (this._ctx = o, o.data.push(this)), p || Se.wake()
                    }
                    var e = t.prototype;
                    return e.delay = function(t) {
                        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
                    }, e.duration = function(t) {
                        return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                    }, e.totalDuration = function(t) {
                        return arguments.length ? (this._dirty = 0, Gt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                    }, e.totalTime = function(t, e) {
                        if (Ae(), !arguments.length) return this._tTime;
                        var r = this._dp;
                        if (r && r.smoothChildTiming && this._ts) {
                            for (Nt(this, t), !r._dp || r.parent || jt(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && qt(this._dp, this, this._start - this._delay)
                        }
                        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === w || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), wt(this, t, e)), this
                    }, e.time = function(t, e) {
                        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + It(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
                    }, e.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
                    }, e.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + It(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
                    }, e.iteration = function(t, e) {
                        var r = this.duration() + this._rDelay;
                        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Yt(this._tTime, r) + 1 : 1
                    }, e.timeScale = function(t, e) {
                        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                        if (this._rts === t) return this;
                        var r = this.parent && this._ts ? zt(this.parent._time, this) : this._tTime;
                        return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(te(-Math.abs(this._delay), this.totalDuration(), r), !1 !== e), Xt(this),
                            function(t) {
                                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                                return t
                            }(this)
                    }, e.paused = function(t) {
                        return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ae(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== w && (this._tTime -= w)))), this) : this._ps
                    }, e.startTime = function(t) {
                        if (arguments.length) {
                            this._start = vt(t);
                            var e = this.parent || this._dp;
                            return e && (e._sort || !this.parent) && qt(e, this, this._start - this._delay), this
                        }
                        return this._start
                    }, e.endTime = function(t) {
                        return this._start + (B(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
                    }, e.rawTime = function(t) {
                        var e = this.parent || this._dp;
                        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? zt(e.rawTime(t), this) : this._tTime : this._tTime
                    }, e.revert = function(t) {
                        void 0 === t && (t = it);
                        var e = i;
                        return i = t, bt(this) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), i = e, this
                    }, e.globalTime = function(t) {
                        for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
                        return !this.parent && this._sat ? this._sat.globalTime(t) : r
                    }, e.repeat = function(t) {
                        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, $t(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                    }, e.repeatDelay = function(t) {
                        if (arguments.length) {
                            var e = this._time;
                            return this._rDelay = t, $t(this), e ? this.time(e) : this
                        }
                        return this._rDelay
                    }, e.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t, this) : this._yoyo
                    }, e.seek = function(t, e) {
                        return this.totalTime(Zt(this, t), B(e))
                    }, e.restart = function(t, e) {
                        return this.play().totalTime(t ? -this._delay : 0, B(e)), this._dur || (this._zTime = -1e-8), this
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
                        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - w))
                    }, e.eventCallback = function(t, e, r) {
                        var n = this.vars;
                        return arguments.length > 1 ? (e ? (n[t] = e, r && (n[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
                    }, e.then = function(t) {
                        var e = this,
                            r = e._prom;
                        return new Promise(function(n) {
                            var i = O(t) ? t : Et,
                                o = function() {
                                    var t = e.then;
                                    e.then = null, r && r(), O(i) && (i = i(e)) && (i.then || i === e) && (e.then = t), n(i), e.then = t
                                };
                            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? o() : e._prom = o
                        })
                    }, e.kill = function() {
                        De(this)
                    }, t
                }();
            Ft(je.prototype, {
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
            var qe = function(r) {
                function n(e, n) {
                    var i;
                    return void 0 === e && (e = {}), (i = r.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = B(e.sortChildren), s && qt(e.parent || s, t(i), n), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Ht(t(i), e.scrollTrigger), i
                }
                e(n, r);
                var o = n.prototype;
                return o.to = function(t, e, r) {
                    return Qt(0, arguments, this), this
                }, o.from = function(t, e, r) {
                    return Qt(1, arguments, this), this
                }, o.fromTo = function(t, e, r, n) {
                    return Qt(2, arguments, this), this
                }, o.set = function(t, e, r) {
                    return e.duration = 0, e.parent = this, Mt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new tr(t, e, Zt(this, r), 1), this
                }, o.call = function(t, e, r) {
                    return qt(this, tr.delayedCall(0, t, e), r)
                }, o.staggerTo = function(t, e, r, n, i, o, s) {
                    return r.duration = e, r.stagger = r.stagger || n, r.onComplete = o, r.onCompleteParams = s, r.parent = this, new tr(t, r, Zt(this, i)), this
                }, o.staggerFrom = function(t, e, r, n, i, o, s) {
                    return r.runBackwards = 1, Mt(r).immediateRender = B(r.immediateRender), this.staggerTo(t, e, r, n, i, o, s)
                }, o.staggerFromTo = function(t, e, r, n, i, o, s, a) {
                    return n.startAt = r, Mt(n).immediateRender = B(n.immediateRender), this.staggerTo(t, e, n, i, o, s, a)
                }, o.render = function(t, e, r) {
                    var n, o, a, u, l, c, f, d, p, h, g, D, m = this._time,
                        v = this._dirty ? this.totalDuration() : this._tDur,
                        y = this._dur,
                        _ = t <= 0 ? 0 : vt(t),
                        x = this._zTime < 0 != t < 0 && (this._initted || !y);
                    if (this !== s && _ > v && t >= 0 && (_ = v), _ !== this._tTime || r || x) {
                        if (m !== this._time && y && (_ += this._time - m, t += this._time - m), n = _, p = this._start, c = !(d = this._ts), x && (y || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                            if (g = this._yoyo, l = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * l + t, e, r);
                            if (n = vt(_ % l), _ === v ? (u = this._repeat, n = y) : ((u = ~~(h = vt(_ / l))) && u === h && (n = y, u--), n > y && (n = y)), h = Yt(this._tTime, l), !m && this._tTime && h !== u && this._tTime - h * l - this._dur <= 0 && (h = u), g && 1 & u && (n = y - n, D = 1), u !== h && !this._lock) {
                                var b = g && 1 & h,
                                    C = b === (g && 1 & u);
                                if (u < h && (b = !b), m = b ? 0 : _ % y ? y : _, this._lock = 1, this.render(m || (D ? 0 : vt(u * l)), e, !y)._lock = 0, this._tTime = _, !e && this.parent && ge(this, "onRepeat"), this.vars.repeatRefresh && !D && (this.invalidate()._lock = 1, h = u), m && m !== this._time || c !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                                if (y = this._dur, v = this._tDur, C && (this._lock = 2, m = b ? y : -1e-4, this.render(m, !0), this.vars.repeatRefresh && !D && this.invalidate()), this._lock = 0, !this._ts && !c) return this;
                                Be(this, D)
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
                            }(this, vt(m), vt(n)), f && (_ -= n - (n = f._start))), this._tTime = _, this._time = n, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, m = 0), !m && _ && y && !e && !h && (ge(this, "onStart"), this._tTime !== _)) return this;
                        if (n >= m && t >= 0)
                            for (o = this._first; o;) {
                                if (a = o._next, (o._act || n >= o._start) && o._ts && f !== o) {
                                    if (o.parent !== this) return this.render(t, e, r);
                                    if (o.render(o._ts > 0 ? (n - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (n - o._start) * o._ts, e, r), n !== this._time || !this._ts && !c) {
                                        f = 0, a && (_ += this._zTime = -1e-8);
                                        break
                                    }
                                }
                                o = a
                            } else {
                                o = this._last;
                                for (var E = t < 0 ? t : n; o;) {
                                    if (a = o._prev, (o._act || E <= o._end) && o._ts && f !== o) {
                                        if (o.parent !== this) return this.render(t, e, r);
                                        if (o.render(o._ts > 0 ? (E - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (E - o._start) * o._ts, e, r || i && bt(o)), n !== this._time || !this._ts && !c) {
                                            f = 0, a && (_ += this._zTime = E ? -1e-8 : w);
                                            break
                                        }
                                    }
                                    o = a
                                }
                            }
                        if (f && !e && (this.pause(), f.render(n >= m ? 0 : -1e-8)._zTime = n >= m ? 1 : -1, this._ts)) return this._start = p, Xt(this), this.render(t, e, r);
                        this._onUpdate && !e && ge(this, "onUpdate", !0), (_ === v && this._tTime >= this.totalDuration() || !_ && m) && (p !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || ((t || !y) && (_ === v && this._ts > 0 || !_ && this._ts < 0) && Pt(this, 1), e || t < 0 && !m || !_ && !m && v || (ge(this, _ === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < v && this.timeScale() > 0) && this._prom())))
                    }
                    return this
                }, o.add = function(t, e) {
                    var r = this;
                    if (k(e) || (e = Zt(this, e, t)), !(t instanceof je)) {
                        if (z(t)) return t.forEach(function(t) {
                            return r.add(t, e)
                        }), this;
                        if (M(t)) return this.addLabel(t, e);
                        if (!O(t)) return this;
                        t = tr.delayedCall(0, t)
                    }
                    return this !== t ? qt(this, t, e) : this
                }, o.getChildren = function(t, e, r, n) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === n && (n = -b);
                    for (var i = [], o = this._first; o;) o._start >= n && (o instanceof tr ? e && i.push(o) : (r && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, r)))), o = o._next;
                    return i
                }, o.getById = function(t) {
                    for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                        if (e[r].vars.id === t) return e[r]
                }, o.remove = function(t) {
                    return M(t) ? this.removeLabel(t) : O(t) ? this.killTweensOf(t) : (t.parent === this && kt(this, t), t === this._recent && (this._recent = this._last), Lt(this))
                }, o.totalTime = function(t, e) {
                    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = vt(Se.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), r.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
                }, o.addLabel = function(t, e) {
                    return this.labels[t] = Zt(this, e), this
                }, o.removeLabel = function(t) {
                    return delete this.labels[t], this
                }, o.addPause = function(t, e, r) {
                    var n = tr.delayedCall(0, e || et, r);
                    return n.data = "isPause", this._hasPause = 1, qt(this, n, Zt(this, t))
                }, o.removePause = function(t) {
                    var e = this._first;
                    for (t = Zt(this, t); e;) e._start === t && "isPause" === e.data && Pt(e), e = e._next
                }, o.killTweensOf = function(t, e, r) {
                    for (var n = this.getTweensOf(t, r), i = n.length; i--;) He !== n[i] && n[i].kill(t, e);
                    return this
                }, o.getTweensOf = function(t, e) {
                    for (var r, n = [], i = ie(t), o = this._first, s = k(e); o;) o instanceof tr ? _t(o._targets, i) && (s ? (!He || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && n.push(o) : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r), o = o._next;
                    return n
                }, o.tweenTo = function(t, e) {
                    e = e || {};
                    var r, n = this,
                        i = Zt(n, t),
                        o = e,
                        s = o.startAt,
                        a = o.onStart,
                        u = o.onStartParams,
                        l = o.immediateRender,
                        c = tr.to(n, Ft({
                            ease: e.ease || "none",
                            lazy: !1,
                            immediateRender: !1,
                            time: i,
                            overwrite: "auto",
                            duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale()) || w,
                            onStart: function() {
                                if (n.pause(), !r) {
                                    var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : n._time)) / n.timeScale());
                                    c._dur !== t && Gt(c, t, 0, 1).render(c._time, !0, !0), r = 1
                                }
                                a && a.apply(c, u || [])
                            }
                        }, e));
                    return l ? c.render(0) : c
                }, o.tweenFromTo = function(t, e, r) {
                    return this.tweenTo(e, Ft({
                        startAt: {
                            time: Zt(this, t)
                        }
                    }, r))
                }, o.recent = function() {
                    return this._recent
                }, o.nextLabel = function(t) {
                    return void 0 === t && (t = this._time), he(this, Zt(this, t))
                }, o.previousLabel = function(t) {
                    return void 0 === t && (t = this._time), he(this, Zt(this, t), 1)
                }, o.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + w)
                }, o.shiftChildren = function(t, e, r) {
                    void 0 === r && (r = 0);
                    var n, i = this._first,
                        o = this.labels;
                    for (t = vt(t); i;) i._start >= r && (i._start += t, i._end += t), i = i._next;
                    if (e)
                        for (n in o) o[n] >= r && (o[n] += t);
                    return Lt(this)
                }, o.invalidate = function(t) {
                    var e = this._first;
                    for (this._lock = 0; e;) e.invalidate(t), e = e._next;
                    return r.prototype.invalidate.call(this, t)
                }, o.clear = function(t) {
                    void 0 === t && (t = !0);
                    for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
                    return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Lt(this)
                }, o.totalDuration = function(t) {
                    var e, r, n, i = 0,
                        o = this,
                        a = o._last,
                        u = b;
                    if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
                    if (o._dirty) {
                        for (n = o.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (r = a._start) > u && o._sort && a._ts && !o._lock ? (o._lock = 1, qt(o, a, r - a._delay, 1)._lock = 0) : u = r, r < 0 && a._ts && (i -= r, (!n && !o._dp || n && n.smoothChildTiming) && (o._start += vt(r / o._ts), o._time -= r, o._tTime -= r), o.shiftChildren(-r, !1, -Infinity), u = 0), a._end > i && a._ts && (i = a._end), a = e;
                        Gt(o, o === s && o._time > i ? o._time : i, 1, 1), o._dirty = 0
                    }
                    return o._tDur
                }, n.updateRoot = function(t) {
                    if (s._ts && (wt(s, zt(t, s)), f = Se.frame), Se.frame >= ct) {
                        ct += _.autoSleep || 120;
                        var e = s._first;
                        if ((!e || !e._ts) && _.autoSleep && Se._listeners.length < 2) {
                            for (; e && !e._ts;) e = e._next;
                            e || Se.sleep()
                        }
                    }
                }, n
            }(je);
            Ft(qe.prototype, {
                _lock: 0,
                _hasPause: 0,
                _forcing: 0
            });
            var He, We, Ue = function(t, e, r, n, i, o, s) {
                    var a, u, l, c, f, d, p, h, g = new hr(this._pt, t, e, 0, 1, ur, null, i),
                        D = 0,
                        m = 0;
                    for (g.b = r, g.e = n, r += "", (p = ~(n += "").indexOf("random(")) && (n = de(n)), o && (o(h = [r, n], t, e), r = h[0], n = h[1]), u = r.match(W) || []; a = W.exec(n);) c = a[0], f = n.substring(D, a.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), c !== u[m++] && (d = parseFloat(u[m - 1]) || 0, g._pt = {
                        _next: g._pt,
                        p: f || 1 === m ? f : ",",
                        s: d,
                        c: "=" === c.charAt(1) ? yt(d, c) - d : parseFloat(c) - d,
                        m: l && l < 4 ? Math.round : 0
                    }, D = W.lastIndex);
                    return g.c = D < n.length ? n.substring(D, n.length) : "", g.fp = s, (U.test(n) || p) && (g.e = 0), this._pt = g, g
                },
                Ve = function(t, e, r, n, i, o, s, a, u, l) {
                    O(n) && (n = n(i || 0, t, o));
                    var c, f = t[e],
                        d = "get" !== r ? r : O(f) ? u ? t[e.indexOf("set") || !O(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f,
                        p = O(f) ? u ? nr : rr : er;
                    if (M(n) && (~n.indexOf("random(") && (n = de(n)), "=" === n.charAt(1) && ((c = yt(d, n) + (ee(d) || 0)) || 0 === c) && (n = c)), !l || d !== n || We) return isNaN(d * n) || "" === n ? (!f && !(e in t) && Q(e, n), Ue.call(this, t, e, d, n, p, a || _.stringFilter, u)) : (c = new hr(this._pt, t, e, +d || 0, n - (d || 0), "boolean" == typeof f ? ar : sr, 0, p), u && (c.fp = u), s && c.modifier(s, this, t), this._pt = c)
                },
                Ge = function(t, e, r, n, i, o) {
                    var s, a, u, l;
                    if (ut[t] && !1 !== (s = new ut[t]).init(i, s.rawVars ? e[t] : function(t, e, r, n, i) {
                            if (O(t) && (t = Ze(t, i, e, r, n)), !L(t) || t.style && t.nodeType || z(t) || Y(t)) return M(t) ? Ze(t, i, e, r, n) : t;
                            var o, s = {};
                            for (o in t) s[o] = Ze(t[o], i, e, r, n);
                            return s
                        }(e[t], n, i, o, r), r, n, o) && (r._pt = a = new hr(r._pt, i, t, 0, 1, s.render, s, 0, s.priority), r !== d))
                        for (u = r._ptLookup[r._targets.indexOf(i)], l = s._props.length; l--;) u[s._props[l]] = a;
                    return s
                },
                $e = function t(e, r, o) {
                    var a, u, l, c, f, d, p, h, g, D, m, v, y, _ = e.vars,
                        C = _.ease,
                        E = _.startAt,
                        F = _.immediateRender,
                        T = _.lazy,
                        S = _.onUpdate,
                        A = _.runBackwards,
                        M = _.yoyoEase,
                        O = _.keyframes,
                        k = _.autoRevert,
                        P = e._dur,
                        L = e._startAt,
                        R = e._targets,
                        I = e.parent,
                        Y = I && "nested" === I.data ? I.vars.targets : R,
                        z = "auto" === e._overwrite && !n,
                        X = e.timeline;
                    if (X && (!O || !C) && (C = "none"), e._ease = Re(C, x.ease), e._yEase = M ? Le(Re(!0 === M ? C : M, x.ease)) : 0, M && e._yoyo && !e._repeat && (M = e._yEase, e._yEase = e._ease, e._ease = M), e._from = !X && !!_.runBackwards, !X || O && !_.stagger) {
                        if (v = (h = R[0] ? ht(R[0]).harness : 0) && _[h.prop], a = At(_, ot), L && (L._zTime < 0 && L.progress(1), r < 0 && A && F && !k ? L.render(-1, !0) : L.revert(A && P ? nt : rt), L._lazy = 0), E) {
                            if (Pt(e._startAt = tr.set(R, Ft({
                                    data: "isStart",
                                    overwrite: !1,
                                    parent: I,
                                    immediateRender: !0,
                                    lazy: !L && B(T),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate: S && function() {
                                        return ge(e, "onUpdate")
                                    },
                                    stagger: 0
                                }, E))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (i || !F && !k) && e._startAt.revert(nt), F && P && r <= 0 && o <= 0) return void(r && (e._zTime = r))
                        } else if (A && P && !L)
                            if (r && (F = !1), l = Ft({
                                    overwrite: !1,
                                    data: "isFromStart",
                                    lazy: F && !L && B(T),
                                    immediateRender: F,
                                    stagger: 0,
                                    parent: I
                                }, a), v && (l[h.prop] = v), Pt(e._startAt = tr.set(R, l)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (i ? e._startAt.revert(nt) : e._startAt.render(-1, !0)), e._zTime = r, F) {
                                if (!r) return
                            } else t(e._startAt, w, w);
                        for (e._pt = e._ptCache = 0, T = P && B(T) || T && !P, u = 0; u < R.length; u++) {
                            if (p = (f = R[u])._gsap || pt(R)[u]._gsap, e._ptLookup[u] = D = {}, at[p.id] && st.length && xt(), m = Y === R ? u : Y.indexOf(f), h && !1 !== (g = new h).init(f, v || a, e, m, Y) && (e._pt = c = new hr(e._pt, f, g.name, 0, 1, g.render, g, 0, g.priority), g._props.forEach(function(t) {
                                    D[t] = c
                                }), g.priority && (d = 1)), !h || v)
                                for (l in a) ut[l] && (g = Ge(l, a, e, m, f, Y)) ? g.priority && (d = 1) : D[l] = c = Ve.call(e, f, l, "get", a[l], m, Y, 0, _.stringFilter);
                            e._op && e._op[u] && e.kill(f, e._op[u]), z && e._pt && (He = e, s.killTweensOf(f, D, e.globalTime(r)), y = !e.parent, He = 0), e._pt && T && (at[p.id] = 1)
                        }
                        d && pr(e), e._onInit && e._onInit(e)
                    }
                    e._onUpdate = S, e._initted = (!e._op || e._pt) && !y, O && r <= 0 && X.render(b, !0, !0)
                },
                Ke = function(t, e, r, n) {
                    var i, o, s = e.ease || n || "power1.inOut";
                    if (z(e)) o = r[t] || (r[t] = []), e.forEach(function(t, r) {
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
                Ze = function(t, e, r, n, i) {
                    return O(t) ? t.call(e, r, n, i) : M(t) && ~t.indexOf("random(") ? de(t) : t
                },
                Qe = dt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
                Je = {};
            Dt(Qe + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
                return Je[t] = 1
            });
            var tr = function(r) {
                function o(e, i, o, a) {
                    var u;
                    "number" == typeof i && (o.duration = i, i = o, o = null);
                    var l, c, f, d, p, h, g, D, m = (u = r.call(this, a ? i : Mt(i)) || this).vars,
                        v = m.duration,
                        y = m.delay,
                        x = m.immediateRender,
                        b = m.stagger,
                        w = m.overwrite,
                        C = m.keyframes,
                        E = m.defaults,
                        F = m.scrollTrigger,
                        T = m.yoyoEase,
                        S = i.parent || s,
                        A = (z(e) || Y(e) ? k(e[0]) : "length" in i) ? [e] : ie(e);
                    if (u._targets = A.length ? pt(A) : J("GSAP target " + e + " not found. https://gsap.com", !_.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = w, C || b || I(v) || I(y)) {
                        if (i = u.vars, (l = u.timeline = new qe({
                                data: "nested",
                                defaults: E || {},
                                targets: S && "nested" === S.data ? S.vars.targets : A
                            })).kill(), l.parent = l._dp = t(u), l._start = 0, b || I(v) || I(y)) {
                            if (d = A.length, g = b && ae(b), L(b))
                                for (p in b) ~Qe.indexOf(p) && (D || (D = {}), D[p] = b[p]);
                            for (c = 0; c < d; c++)(f = At(i, Je)).stagger = 0, T && (f.yoyoEase = T), D && Tt(f, D), h = A[c], f.duration = +Ze(v, t(u), c, h, A), f.delay = (+Ze(y, t(u), c, h, A) || 0) - u._delay, !b && 1 === d && f.delay && (u._delay = y = f.delay, u._start += y, f.delay = 0), l.to(h, f, g ? g(c, h, A) : 0), l._ease = Me.none;
                            l.duration() ? v = y = 0 : u.timeline = 0
                        } else if (C) {
                            Mt(Ft(l.vars.defaults, {
                                ease: "none"
                            })), l._ease = Re(C.ease || i.ease || "none");
                            var M, O, P, R = 0;
                            if (z(C)) C.forEach(function(t) {
                                return l.to(A, t, ">")
                            }), l.duration();
                            else {
                                for (p in f = {}, C) "ease" === p || "easeEach" === p || Ke(p, C[p], f, C.easeEach);
                                for (p in f)
                                    for (M = f[p].sort(function(t, e) {
                                            return t.t - e.t
                                        }), R = 0, c = 0; c < M.length; c++)(P = {
                                        ease: (O = M[c]).e,
                                        duration: (O.t - (c ? M[c - 1].t : 0)) / 100 * v
                                    })[p] = O.v, l.to(A, P, R), R += P.duration;
                                l.duration() < v && l.to({}, {
                                    duration: v - l.duration()
                                })
                            }
                        }
                        v || u.duration(v = l.duration())
                    } else u.timeline = 0;
                    return !0 !== w || n || (He = t(u), s.killTweensOf(A), He = 0), qt(S, t(u), o), i.reversed && u.reverse(), i.paused && u.paused(!0), (x || !v && !C && u._start === vt(S._time) && B(x) && Rt(t(u)) && "nested" !== S.data) && (u._tTime = -1e-8, u.render(Math.max(0, -y) || 0)), F && Ht(t(u), F), u
                }
                e(o, r);
                var a = o.prototype;
                return a.render = function(t, e, r) {
                    var n, o, s, a, u, l, c, f, d, p = this._time,
                        h = this._tDur,
                        g = this._dur,
                        D = t < 0,
                        m = t > h - w && !D ? h : t < w ? 0 : t;
                    if (g) {
                        if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== D || this._lazy) {
                            if (n = m, f = this.timeline, this._repeat) {
                                if (a = g + this._rDelay, this._repeat < -1 && D) return this.totalTime(100 * a + t, e, r);
                                if (n = vt(m % a), m === h ? (s = this._repeat, n = g) : (s = ~~(u = vt(m / a))) && s === u ? (n = g, s--) : n > g && (n = g), (l = this._yoyo && 1 & s) && (d = this._yEase, n = g - n), u = Yt(this._tTime, a), n === p && !r && this._initted && s === u) return this._tTime = m, this;
                                s !== u && (f && this._yEase && Be(f, l), this.vars.repeatRefresh && !l && !this._lock && n !== a && this._initted && (this._lock = r = 1, this.render(vt(a * s), !0).invalidate()._lock = 0))
                            }
                            if (!this._initted) {
                                if (Wt(this, D ? t : n, r, e, m)) return this._tTime = 0, this;
                                if (!(p === this._time || r && this.vars.repeatRefresh && s !== u)) return this;
                                if (g !== this._dur) return this.render(t, e, r)
                            }
                            if (this._tTime = m, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = c = (d || this._ease)(n / g), this._from && (this.ratio = c = 1 - c), !p && m && !e && !u && (ge(this, "onStart"), this._tTime !== m)) return this;
                            for (o = this._pt; o;) o.r(c, o.d), o = o._next;
                            f && f.render(t < 0 ? t : f._dur * f._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (D && Bt(this, t, 0, r), ge(this, "onUpdate")), this._repeat && s !== u && this.vars.onRepeat && !e && this.parent && ge(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (D && !this._onUpdate && Bt(this, t, 0, !0), (t || !g) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && Pt(this, 1), e || D && !p || !(m || p || l) || (ge(this, m === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < h && this.timeScale() > 0) && this._prom()))
                        }
                    } else ! function(t, e, r, n) {
                        var o, s, a, u = t.ratio,
                            l = e < 0 || !e && (!t._start && Ut(t) && (t._initted || !Vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Vt(t)) ? 0 : 1,
                            c = t._rDelay,
                            f = 0;
                        if (c && t._repeat && (f = te(0, t._tDur, e), s = Yt(f, c), t._yoyo && 1 & s && (l = 1 - l), s !== Yt(t._tTime, c) && (u = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== u || i || n || t._zTime === w || !e && t._zTime) {
                            if (!t._initted && Wt(t, e, n, r, f)) return;
                            for (a = t._zTime, t._zTime = e || (r ? w : 0), r || (r = e && !a), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = f, o = t._pt; o;) o.r(l, o.d), o = o._next;
                            e < 0 && Bt(t, e, 0, !0), t._onUpdate && !r && ge(t, "onUpdate"), f && t._repeat && !r && t.parent && ge(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && Pt(t, 1), r || i || (ge(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                        } else t._zTime || (t._zTime = e)
                    }(this, t, e, r);
                    return this
                }, a.targets = function() {
                    return this._targets
                }, a.invalidate = function(t) {
                    return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), r.prototype.invalidate.call(this, t)
                }, a.resetTo = function(t, e, r, n, i) {
                    p || Se.wake(), this._ts || this.play();
                    var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                    return this._initted || $e(this, o),
                        function(t, e, r, n, i, o, s, a) {
                            var u, l, c, f, d = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                            if (!d)
                                for (d = t._ptCache[e] = [], c = t._ptLookup, f = t._targets.length; f--;) {
                                    if ((u = c[f][e]) && u.d && u.d._pt)
                                        for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                                    if (!u) return We = 1, t.vars[e] = "+=0", $e(t, s), We = 0, a ? J(e + " not eligible for reset") : 1;
                                    d.push(u)
                                }
                            for (f = d.length; f--;)(u = (l = d[f])._pt || l).s = !n && 0 !== n || i ? u.s + (n || 0) + o * u.c : n, u.c = r - u.s, l.e && (l.e = mt(r) + ee(l.e)), l.b && (l.b = u.s + ee(l.b))
                        }(this, t, e, r, n, this._ease(o / this._dur), o, i) ? this.resetTo(t, e, r, n, 1) : (Nt(this, 0), this.parent || Ot(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
                }, a.kill = function(t, e) {
                    if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? De(this) : this.scrollTrigger && this.scrollTrigger.kill(!!i), this;
                    if (this.timeline) {
                        var r = this.timeline.totalDuration();
                        return this.timeline.killTweensOf(t, e, He && !0 !== He.vars.overwrite)._first || De(this), this.parent && r !== this.timeline.totalDuration() && Gt(this, this._dur * this.timeline._tDur / r, 0, 1), this
                    }
                    var n, o, s, a, u, l, c, f = this._targets,
                        d = t ? ie(t) : f,
                        p = this._ptLookup,
                        h = this._pt;
                    if ((!e || "all" === e) && function(t, e) {
                            for (var r = t.length, n = r === e.length; n && r-- && t[r] === e[r];);
                            return r < 0
                        }(f, d)) return "all" === e && (this._pt = 0), De(this);
                    for (n = this._op = this._op || [], "all" !== e && (M(e) && (u = {}, Dt(e, function(t) {
                            return u[t] = 1
                        }), e = u), e = function(t, e) {
                            var r, n, i, o, s = t[0] ? ht(t[0]).harness : 0,
                                a = s && s.aliases;
                            if (!a) return e;
                            for (n in r = Tt({}, e), a)
                                if (n in r)
                                    for (i = (o = a[n].split(",")).length; i--;) r[o[i]] = r[n];
                            return r
                        }(f, e)), c = f.length; c--;)
                        if (~d.indexOf(f[c]))
                            for (u in o = p[c], "all" === e ? (n[c] = e, a = o, s = {}) : (s = n[c] = n[c] || {}, a = e), a)(l = o && o[u]) && ("kill" in l.d && !0 !== l.d.kill(u) || kt(this, l, "_pt"), delete o[u]), "all" !== s && (s[u] = 1);
                    return this._initted && !this._pt && h && De(this), this
                }, o.to = function(t, e) {
                    return new o(t, e, arguments[2])
                }, o.from = function(t, e) {
                    return Qt(1, arguments)
                }, o.delayedCall = function(t, e, r, n) {
                    return new o(e, 0, {
                        immediateRender: !1,
                        lazy: !1,
                        overwrite: !1,
                        delay: t,
                        onComplete: e,
                        onReverseComplete: e,
                        onCompleteParams: r,
                        onReverseCompleteParams: r,
                        callbackScope: n
                    })
                }, o.fromTo = function(t, e, r) {
                    return Qt(2, arguments)
                }, o.set = function(t, e) {
                    return e.duration = 0, e.repeatDelay || (e.repeat = 0), new o(t, e)
                }, o.killTweensOf = function(t, e, r) {
                    return s.killTweensOf(t, e, r)
                }, o
            }(je);
            Ft(tr.prototype, {
                _targets: [],
                _lazy: 0,
                _startAt: 0,
                _op: 0,
                _onInit: 0
            }), Dt("staggerTo,staggerFrom,staggerFromTo", function(t) {
                tr[t] = function() {
                    var e = new qe,
                        r = re.call(arguments, 0);
                    return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
                }
            });
            var er = function(t, e, r) {
                    return t[e] = r
                },
                rr = function(t, e, r) {
                    return t[e](r)
                },
                nr = function(t, e, r, n) {
                    return t[e](n.fp, r)
                },
                ir = function(t, e, r) {
                    return t.setAttribute(e, r)
                },
                or = function(t, e) {
                    return O(t[e]) ? rr : P(t[e]) && t.setAttribute ? ir : er
                },
                sr = function(t, e) {
                    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
                },
                ar = function(t, e) {
                    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
                },
                ur = function(t, e) {
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
                lr = function(t, e) {
                    for (var r = e._pt; r;) r.r(t, r.d), r = r._next
                },
                cr = function(t, e, r, n) {
                    for (var i, o = this._pt; o;) i = o._next, o.p === n && o.modifier(t, e, r), o = i
                },
                fr = function(t) {
                    for (var e, r, n = this._pt; n;) r = n._next, n.p === t && !n.op || n.op === t ? kt(this, n, "_pt") : n.dep || (e = 1), n = r;
                    return !e
                },
                dr = function(t, e, r, n) {
                    n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
                },
                pr = function(t) {
                    for (var e, r, n, i, o = t._pt; o;) {
                        for (e = o._next, r = n; r && r.pr > o.pr;) r = r._next;
                        (o._prev = r ? r._prev : i) ? o._prev._next = o: n = o, (o._next = r) ? r._prev = o : i = o, o = e
                    }
                    t._pt = n
                },
                hr = function() {
                    function t(t, e, r, n, i, o, s, a, u) {
                        this.t = e, this.s = n, this.c = i, this.p = r, this.r = o || sr, this.d = s || this, this.set = a || er, this.pr = u || 0, this._next = t, t && (t._prev = this)
                    }
                    return t.prototype.modifier = function(t, e, r) {
                        this.mSet = this.mSet || this.set, this.set = dr, this.m = t, this.mt = r, this.tween = e
                    }, t
                }();
            Dt(dt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
                return ot[t] = 1
            }), $.TweenMax = $.TweenLite = tr, $.TimelineLite = $.TimelineMax = qe, s = new qe({
                sortChildren: !1,
                defaults: x,
                autoRemoveChildren: !0,
                id: "root",
                smoothChildTiming: !0
            }), _.stringFilter = Te;
            var gr = [],
                Dr = {},
                mr = [],
                vr = 0,
                yr = 0,
                _r = function(t) {
                    return (Dr[t] || mr).map(function(t) {
                        return t()
                    })
                },
                xr = function() {
                    var t = Date.now(),
                        e = [];
                    t - vr > 2 && (_r("matchMediaInit"), gr.forEach(function(t) {
                        var r, n, i, o, s = t.queries,
                            u = t.conditions;
                        for (n in s)(r = a.matchMedia(s[n]).matches) && (i = 1), r !== u[n] && (u[n] = r, o = 1);
                        o && (t.revert(), i && e.push(t))
                    }), _r("matchMediaRevert"), e.forEach(function(t) {
                        return t.onMatch(t, function(e) {
                            return t.add(null, e)
                        })
                    }), vr = t, _r("matchMedia"))
                },
                br = function() {
                    function t(t, e) {
                        this.selector = e && oe(e), this.data = [], this._r = [], this.isReverted = !1, this.id = yr++, t && this.add(t)
                    }
                    var e = t.prototype;
                    return e.add = function(t, e, r) {
                        O(t) && (r = e, e = t, t = O);
                        var n = this,
                            i = function() {
                                var t, i = o,
                                    s = n.selector;
                                return i && i !== n && i.data.push(n), r && (n.selector = oe(r)), o = n, t = e.apply(n, arguments), O(t) && n._r.push(t), o = i, n.selector = s, n.isReverted = !1, t
                            };
                        return n.last = i, t === O ? i(n, function(t) {
                            return n.add(null, t)
                        }) : t ? n[t] = i : i
                    }, e.ignore = function(t) {
                        var e = o;
                        o = null, t(this), o = e
                    }, e.getTweens = function() {
                        var e = [];
                        return this.data.forEach(function(r) {
                            return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof tr && !(r.parent && "nested" === r.parent.data) && e.push(r)
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
                                    }), i = r.data.length; i--;)(e = r.data[i]) instanceof qe ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof tr) && e.revert && e.revert(t);
                                r._r.forEach(function(e) {
                                    return e(t, r)
                                }), r.isReverted = !0
                            }() : this.data.forEach(function(t) {
                                return t.kill && t.kill()
                            }), this.clear(), e)
                            for (var n = gr.length; n--;) gr[n].id === this.id && gr.splice(n, 1)
                    }, e.revert = function(t) {
                        this.kill(t || {})
                    }, t
                }(),
                wr = function() {
                    function t(t) {
                        this.contexts = [], this.scope = t, o && o.data.push(this)
                    }
                    var e = t.prototype;
                    return e.add = function(t, e, r) {
                        L(t) || (t = {
                            matches: t
                        });
                        var n, i, s, u = new br(0, r || this.scope),
                            l = u.conditions = {};
                        for (i in o && !u.selector && (u.selector = o.selector), this.contexts.push(u), e = u.add("onMatch", e), u.queries = t, t) "all" === i ? s = 1 : (n = a.matchMedia(t[i])) && (gr.indexOf(u) < 0 && gr.push(u), (l[i] = n.matches) && (s = 1), n.addListener ? n.addListener(xr) : n.addEventListener("change", xr));
                        return s && e(u, function(t) {
                            return u.add(null, t)
                        }), this
                    }, e.revert = function(t) {
                        this.kill(t || {})
                    }, e.kill = function(t) {
                        this.contexts.forEach(function(e) {
                            return e.kill(t, !0)
                        })
                    }, t
                }(),
                Cr = {
                    registerPlugin: function() {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        e.forEach(function(t) {
                            return ve(t)
                        })
                    },
                    timeline: function(t) {
                        return new qe(t)
                    },
                    getTweensOf: function(t, e) {
                        return s.getTweensOf(t, e)
                    },
                    getProperty: function(t, e, r, n) {
                        M(t) && (t = ie(t)[0]);
                        var i = ht(t || {}).get,
                            o = r ? Et : Ct;
                        return "native" === r && (r = ""), t ? e ? o((ut[e] && ut[e].get || i)(t, e, r, n)) : function(e, r, n) {
                            return o((ut[e] && ut[e].get || i)(t, e, r, n))
                        } : t
                    },
                    quickSetter: function(t, e, r) {
                        if ((t = ie(t)).length > 1) {
                            var n = t.map(function(t) {
                                    return Tr.quickSetter(t, e, r)
                                }),
                                i = n.length;
                            return function(t) {
                                for (var e = i; e--;) n[e](t)
                            }
                        }
                        t = t[0] || {};
                        var o = ut[e],
                            s = ht(t),
                            a = s.harness && (s.harness.aliases || {})[e] || e,
                            u = o ? function(e) {
                                var n = new o;
                                d._pt = 0, n.init(t, r ? e + r : e, d, 0, [t]), n.render(1, n), d._pt && lr(1, d)
                            } : s.set(t, a);
                        return o ? u : function(e) {
                            return u(t, a, r ? e + r : e, s, 1)
                        }
                    },
                    quickTo: function(t, e, r) {
                        var n, i = Tr.to(t, Ft(((n = {})[e] = "+=0.1", n.paused = !0, n.stagger = 0, n), r || {})),
                            o = function(t, r, n) {
                                return i.resetTo(e, t, r, n)
                            };
                        return o.tween = i, o
                    },
                    isTweening: function(t) {
                        return s.getTweensOf(t, !0).length > 0
                    },
                    defaults: function(t) {
                        return t && t.ease && (t.ease = Re(t.ease, x.ease)), St(x, t || {})
                    },
                    config: function(t) {
                        return St(_, t || {})
                    },
                    registerEffect: function(t) {
                        var e = t.name,
                            r = t.effect,
                            n = t.plugins,
                            i = t.defaults,
                            o = t.extendTimeline;
                        (n || "").split(",").forEach(function(t) {
                            return t && !ut[t] && !$[t] && J(e + " effect requires " + t + " plugin.")
                        }), lt[e] = function(t, e, n) {
                            return r(ie(t), Ft(e || {}, i), n)
                        }, o && (qe.prototype[e] = function(t, r, n) {
                            return this.add(lt[e](t, L(r) ? r : (n = r) && {}, this), n)
                        })
                    },
                    registerEase: function(t, e) {
                        Me[t] = Re(e)
                    },
                    parseEase: function(t, e) {
                        return arguments.length ? Re(t, e) : Me
                    },
                    getById: function(t) {
                        return s.getById(t)
                    },
                    exportRoot: function(t, e) {
                        void 0 === t && (t = {});
                        var r, n, i = new qe(t);
                        for (i.smoothChildTiming = B(t.smoothChildTiming), s.remove(i), i._dp = 0, i._time = i._tTime = s._time, r = s._first; r;) n = r._next, !e && !r._dur && r instanceof tr && r.vars.onComplete === r._targets[0] || qt(i, r, r._start - r._delay), r = n;
                        return qt(s, i, 0), i
                    },
                    context: function(t, e) {
                        return t ? new br(t, e) : o
                    },
                    matchMedia: function(t) {
                        return new wr(t)
                    },
                    matchMediaRefresh: function() {
                        return gr.forEach(function(t) {
                            var e, r, n = t.conditions;
                            for (r in n) n[r] && (n[r] = !1, e = 1);
                            e && t.revert()
                        }) || xr()
                    },
                    addEventListener: function(t, e) {
                        var r = Dr[t] || (Dr[t] = []);
                        ~r.indexOf(e) || r.push(e)
                    },
                    removeEventListener: function(t, e) {
                        var r = Dr[t],
                            n = r && r.indexOf(e);
                        n >= 0 && r.splice(n, 1)
                    },
                    utils: {
                        wrap: function t(e, r, n) {
                            var i = r - e;
                            return z(e) ? fe(e, t(0, e.length), r) : Jt(n, function(t) {
                                return (i + (t - e) % i) % i + e
                            })
                        },
                        wrapYoyo: function t(e, r, n) {
                            var i = r - e,
                                o = 2 * i;
                            return z(e) ? fe(e, t(0, e.length - 1), r) : Jt(n, function(t) {
                                return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
                            })
                        },
                        distribute: ae,
                        random: ce,
                        snap: le,
                        normalize: function(t, e, r) {
                            return pe(t, e, 0, 1, r)
                        },
                        getUnit: ee,
                        clamp: function(t, e, r) {
                            return Jt(r, function(r) {
                                return te(t, e, r)
                            })
                        },
                        splitColor: be,
                        toArray: ie,
                        selector: oe,
                        mapRange: pe,
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
                                return t(parseFloat(r)) + (e || ee(r))
                            }
                        },
                        interpolate: function t(e, r, n, i) {
                            var o = isNaN(e + r) ? 0 : function(t) {
                                return (1 - t) * e + t * r
                            };
                            if (!o) {
                                var s, a, u, l, c, f = M(e),
                                    d = {};
                                if (!0 === n && (i = 1) && (n = null), f) e = {
                                    p: e
                                }, r = {
                                    p: r
                                };
                                else if (z(e) && !z(r)) {
                                    for (u = [], l = e.length, c = l - 2, a = 1; a < l; a++) u.push(t(e[a - 1], e[a]));
                                    l--, o = function(t) {
                                        t *= l;
                                        var e = Math.min(c, ~~t);
                                        return u[e](t - e)
                                    }, n = r
                                } else i || (e = Tt(z(e) ? [] : {}, e));
                                if (!u) {
                                    for (s in r) Ve.call(d, e, s, "get", r[s]);
                                    o = function(t) {
                                        return lr(t, d) || (f ? e.p : e)
                                    }
                                }
                            }
                            return Jt(n, o)
                        },
                        shuffle: se
                    },
                    install: Z,
                    effects: lt,
                    ticker: Se,
                    updateRoot: qe.updateRoot,
                    plugins: ut,
                    globalTimeline: s,
                    core: {
                        PropTween: hr,
                        globals: tt,
                        Tween: tr,
                        Timeline: qe,
                        Animation: je,
                        getCache: ht,
                        _removeLinkedListItem: kt,
                        reverting: function() {
                            return i
                        },
                        context: function(t) {
                            return t && o && (o.data.push(t), t._ctx = o), o
                        },
                        suppressOverwrites: function(t) {
                            return n = t
                        }
                    }
                };
            Dt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
                return Cr[t] = tr[t]
            }), Se.add(qe.updateRoot), d = Cr.to({}, {
                duration: 0
            });
            var Er = function(t, e) {
                    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
                    return r
                },
                Fr = function(t, e) {
                    return {
                        name: t,
                        headless: 1,
                        rawVars: 1,
                        init: function(t, r, n) {
                            n._onInit = function(t) {
                                var n, i;
                                if (M(r) && (n = {}, Dt(r, function(t) {
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
                Tr = Cr.registerPlugin({
                    name: "attr",
                    init: function(t, e, r, n, i) {
                        var o, s, a;
                        for (o in this.tween = r, e) a = t.getAttribute(o) || "", (s = this.add(t, "setAttribute", (a || 0) + "", e[o], n, i, 0, 0, o)).op = o, s.b = a, this._props.push(o)
                    },
                    render: function(t, e) {
                        for (var r = e._pt; r;) i ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
                    }
                }, {
                    name: "endArray",
                    headless: 1,
                    init: function(t, e) {
                        for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
                    }
                }, Fr("roundProps", ue), Fr("modifiers"), Fr("snap", le)) || Cr;
            tr.version = qe.version = Tr.version = "3.14.2", c = 1, R() && Ae(), Me.Power0, Me.Power1, Me.Power2, Me.Power3, Me.Power4, Me.Linear, Me.Quad, Me.Cubic, Me.Quart, Me.Quint, Me.Strong, Me.Elastic, Me.Back, Me.SteppedEase, Me.Bounce, Me.Sine, Me.Expo, Me.Circ;
            var Sr, Ar, Mr, Or, kr, Pr, Lr, Br, Rr = {},
                Ir = 180 / Math.PI,
                Yr = Math.PI / 180,
                zr = Math.atan2,
                Xr = /([A-Z])/g,
                Nr = /(left|right|width|margin|padding|x)/i,
                jr = /[\s,\(]\S/,
                qr = {
                    autoAlpha: "opacity,visibility",
                    scale: "scaleX,scaleY",
                    alpha: "opacity"
                },
                Hr = function(t, e) {
                    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
                },
                Wr = function(t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
                },
                Ur = function(t, e) {
                    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
                },
                Vr = function(t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
                },
                Gr = function(t, e) {
                    var r = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
                },
                $r = function(t, e) {
                    return e.set(e.t, e.p, t ? e.e : e.b, e)
                },
                Kr = function(t, e) {
                    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
                },
                Zr = function(t, e, r) {
                    return t.style[e] = r
                },
                Qr = function(t, e, r) {
                    return t.style.setProperty(e, r)
                },
                Jr = function(t, e, r) {
                    return t._gsap[e] = r
                },
                tn = function(t, e, r) {
                    return t._gsap.scaleX = t._gsap.scaleY = r
                },
                en = function(t, e, r, n, i) {
                    var o = t._gsap;
                    o.scaleX = o.scaleY = r, o.renderTransform(i, o)
                },
                rn = function(t, e, r, n, i) {
                    var o = t._gsap;
                    o[e] = r, o.renderTransform(i, o)
                },
                nn = "transform",
                on = nn + "Origin",
                sn = function t(e, r) {
                    var n = this,
                        i = this.target,
                        o = i.style,
                        s = i._gsap;
                    if (e in Rr && o) {
                        if (this.tfm = this.tfm || {}, "transform" === e) return qr.transform.split(",").forEach(function(e) {
                            return t.call(n, e, r)
                        });
                        if (~(e = qr[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                                return n.tfm[t] = Cn(i, t)
                            }) : this.tfm[e] = s.x ? s[e] : Cn(i, e), e === on && (this.tfm.zOrigin = s.zOrigin), this.props.indexOf(nn) >= 0) return;
                        s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(on, r, "")), e = nn
                    }(o || r) && this.props.push(e, r, o[e])
                },
                an = function(t) {
                    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
                },
                un = function() {
                    var t, e, r = this.props,
                        n = this.target,
                        i = n.style,
                        o = n._gsap;
                    for (t = 0; t < r.length; t += 3) r[t + 1] ? 2 === r[t + 1] ? n[r[t]](r[t + 2]) : n[r[t]] = r[t + 2] : r[t + 2] ? i[r[t]] = r[t + 2] : i.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(Xr, "-$1").toLowerCase());
                    if (this.tfm) {
                        for (e in this.tfm) o[e] = this.tfm[e];
                        o.svg && (o.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), (t = Lr()) && t.isStart || i[nn] || (an(i), o.zOrigin && i[on] && (i[on] += " " + o.zOrigin + "px", o.zOrigin = 0, o.renderTransform()), o.uncache = 1)
                    }
                },
                ln = function(t, e) {
                    var r = {
                        target: t,
                        props: [],
                        revert: un,
                        save: sn
                    };
                    return t._gsap || Tr.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(t) {
                        return r.save(t)
                    }), r
                },
                cn = function(t, e) {
                    var r = Ar.createElementNS ? Ar.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ar.createElement(t);
                    return r && r.style ? r : Ar.createElement(t)
                },
                fn = function t(e, r, n) {
                    var i = getComputedStyle(e);
                    return i[r] || i.getPropertyValue(r.replace(Xr, "-$1").toLowerCase()) || i.getPropertyValue(r) || !n && t(e, pn(r) || r, 1) || ""
                },
                dn = "O,Moz,ms,Ms,Webkit".split(","),
                pn = function(t, e, r) {
                    var n = (e || kr).style,
                        i = 5;
                    if (t in n && !r) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(dn[i] + t in n););
                    return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? dn[i] : "") + t
                },
                hn = function() {
                    "undefined" != typeof window && window.document && (Sr = window, Ar = Sr.document, Mr = Ar.documentElement, kr = cn("div") || {
                        style: {}
                    }, cn("div"), nn = pn(nn), on = nn + "Origin", kr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Br = !!pn("perspective"), Lr = Tr.core.reverting, Or = 1)
                },
                gn = function(t) {
                    var e, r = t.ownerSVGElement,
                        n = cn("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                        i = t.cloneNode(!0);
                    i.style.display = "block", n.appendChild(i), Mr.appendChild(n);
                    try {
                        e = i.getBBox()
                    } catch (t) {}
                    return n.removeChild(i), Mr.removeChild(n), e
                },
                Dn = function(t, e) {
                    for (var r = e.length; r--;)
                        if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
                },
                mn = function(t) {
                    var e, r;
                    try {
                        e = t.getBBox()
                    } catch (n) {
                        e = gn(t), r = 1
                    }
                    return e && (e.width || e.height) || r || (e = gn(t)), !e || e.width || e.x || e.y ? e : {
                        x: +Dn(t, ["x", "cx", "x1"]) || 0,
                        y: +Dn(t, ["y", "cy", "y1"]) || 0,
                        width: 0,
                        height: 0
                    }
                },
                vn = function(t) {
                    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !mn(t))
                },
                yn = function(t, e) {
                    if (e) {
                        var r, n = t.style;
                        e in Rr && e !== on && (e = nn), n.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty("--" === r ? e : e.replace(Xr, "-$1").toLowerCase())) : n.removeAttribute(e)
                    }
                },
                _n = function(t, e, r, n, i, o) {
                    var s = new hr(t._pt, e, r, 0, 1, o ? Kr : $r);
                    return t._pt = s, s.b = n, s.e = i, t._props.push(r), s
                },
                xn = {
                    deg: 1,
                    rad: 1,
                    turn: 1
                },
                bn = {
                    grid: 1,
                    flex: 1
                },
                wn = function t(e, r, n, i) {
                    var o, s, a, u, l = parseFloat(n) || 0,
                        c = (n + "").trim().substr((l + "").length) || "px",
                        f = kr.style,
                        d = Nr.test(r),
                        p = "svg" === e.tagName.toLowerCase(),
                        h = (p ? "client" : "offset") + (d ? "Width" : "Height"),
                        g = 100,
                        D = "px" === i,
                        m = "%" === i;
                    if (i === c || !l || xn[i] || xn[c]) return l;
                    if ("px" !== c && !D && (l = t(e, r, n, "px")), u = e.getCTM && vn(e), (m || "%" === c) && (Rr[r] || ~r.indexOf("adius"))) return o = u ? e.getBBox()[d ? "width" : "height"] : e[h], mt(m ? l / o * g : l / 100 * o);
                    if (f[d ? "width" : "height"] = g + (D ? c : i), s = "rem" !== i && ~r.indexOf("adius") || "em" === i && e.appendChild && !p ? e : e.parentNode, u && (s = (e.ownerSVGElement || {}).parentNode), s && s !== Ar && s.appendChild || (s = Ar.body), (a = s._gsap) && m && a.width && d && a.time === Se.time && !a.uncache) return mt(l / a.width * g);
                    if (!m || "height" !== r && "width" !== r)(m || "%" === c) && !bn[fn(s, "display")] && (f.position = fn(e, "position")), s === e && (f.position = "static"), s.appendChild(kr), o = kr[h], s.removeChild(kr), f.position = "absolute";
                    else {
                        var v = e.style[r];
                        e.style[r] = g + i, o = e[h], v ? e.style[r] = v : yn(e, r)
                    }
                    return d && m && ((a = ht(s)).time = Se.time, a.width = s[h]), mt(D ? o * l / g : o && l ? g / o * l : 0)
                },
                Cn = function(t, e, r, n) {
                    var i;
                    return Or || hn(), e in qr && "transform" !== e && ~(e = qr[e]).indexOf(",") && (e = e.split(",")[0]), Rr[e] && "transform" !== e ? (i = Rn(t, n), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : In(fn(t, on)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || n || ~(i + "").indexOf("calc(")) && (i = An[e] && An[e](t, e, r) || fn(t, e) || gt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(i + "").trim().indexOf(" ") ? wn(t, e, i, r) + r : i
                },
                En = function(t, e, r, n) {
                    if (!r || "none" === r) {
                        var i = pn(e, t, 1),
                            o = i && fn(t, i, 1);
                        o && o !== r ? (e = i, r = o) : "borderColor" === e && (r = fn(t, "borderTopColor"))
                    }
                    var s, a, u, l, c, f, d, p, h, g, D, m = new hr(this._pt, t.style, e, 0, 1, ur),
                        v = 0,
                        y = 0;
                    if (m.b = r, m.e = n, r += "", "var(--" === (n += "").substring(0, 6) && (n = fn(t, n.substring(4, n.indexOf(")")))), "auto" === n && (f = t.style[e], t.style[e] = n, n = fn(t, e) || n, f ? t.style[e] = f : yn(t, e)), Te(s = [r, n]), n = s[1], u = (r = s[0]).match(H) || [], (n.match(H) || []).length) {
                        for (; a = H.exec(n);) d = a[0], h = n.substring(v, a.index), c ? c = (c + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (c = 1), d !== (f = u[y++] || "") && (l = parseFloat(f) || 0, D = f.substr((l + "").length), "=" === d.charAt(1) && (d = yt(l, d) + D), p = parseFloat(d), g = d.substr((p + "").length), v = H.lastIndex - g.length, g || (g = g || _.units[e] || D, v === n.length && (n += g, m.e += g)), D !== g && (l = wn(t, e, f, g) || 0), m._pt = {
                            _next: m._pt,
                            p: h || 1 === y ? h : ",",
                            s: l,
                            c: p - l,
                            m: c && c < 4 || "zIndex" === e ? Math.round : 0
                        });
                        m.c = v < n.length ? n.substring(v, n.length) : ""
                    } else m.r = "display" === e && "none" === n ? Kr : $r;
                    return U.test(n) && (m.e = 0), this._pt = m, m
                },
                Fn = {
                    top: "0%",
                    bottom: "100%",
                    left: "0%",
                    right: "100%",
                    center: "50%"
                },
                Tn = function(t) {
                    var e = t.split(" "),
                        r = e[0],
                        n = e[1] || "50%";
                    return "top" !== r && "bottom" !== r && "left" !== n && "right" !== n || (t = r, r = n, n = t), e[0] = Fn[r] || r, e[1] = Fn[n] || n, e.join(" ")
                },
                Sn = function(t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var r, n, i, o = e.t,
                            s = o.style,
                            a = e.u,
                            u = o._gsap;
                        if ("all" === a || !0 === a) s.cssText = "", n = 1;
                        else
                            for (i = (a = a.split(",")).length; --i > -1;) r = a[i], Rr[r] && (n = 1, r = "transformOrigin" === r ? on : nn), yn(o, r);
                        n && (yn(o, nn), u && (u.svg && o.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", Rn(o, 1), u.uncache = 1, an(s)))
                    }
                },
                An = {
                    clearProps: function(t, e, r, n, i) {
                        if ("isFromStart" !== i.data) {
                            var o = t._pt = new hr(t._pt, e, r, 0, 0, Sn);
                            return o.u = n, o.pr = -10, o.tween = i, t._props.push(r), 1
                        }
                    }
                },
                Mn = [1, 0, 0, 1, 0, 0],
                On = {},
                kn = function(t) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
                },
                Pn = function(t) {
                    var e = fn(t, nn);
                    return kn(e) ? Mn : e.substr(7).match(q).map(mt)
                },
                Ln = function(t, e) {
                    var r, n, i, o, s = t._gsap || ht(t),
                        a = t.style,
                        u = Pn(t);
                    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Mn : u : (u !== Mn || t.offsetParent || t === Mr || s.svg || (i = a.display, a.display = "block", (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (o = 1, n = t.nextElementSibling, Mr.appendChild(t)), u = Pn(t), i ? a.display = i : yn(t, "display"), o && (n ? r.insertBefore(t, n) : r ? r.appendChild(t) : Mr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
                },
                Bn = function(t, e, r, n, i, o) {
                    var s, a, u, l = t._gsap,
                        c = i || Ln(t, !0),
                        f = l.xOrigin || 0,
                        d = l.yOrigin || 0,
                        p = l.xOffset || 0,
                        h = l.yOffset || 0,
                        g = c[0],
                        D = c[1],
                        m = c[2],
                        v = c[3],
                        y = c[4],
                        _ = c[5],
                        x = e.split(" "),
                        b = parseFloat(x[0]) || 0,
                        w = parseFloat(x[1]) || 0;
                    r ? c !== Mn && (a = g * v - D * m) && (u = b * (-D / a) + w * (g / a) - (g * _ - D * y) / a, b = b * (v / a) + w * (-m / a) + (m * _ - v * y) / a, w = u) : (b = (s = mn(t)).x + (~x[0].indexOf("%") ? b / 100 * s.width : b), w = s.y + (~(x[1] || x[0]).indexOf("%") ? w / 100 * s.height : w)), n || !1 !== n && l.smooth ? (y = b - f, _ = w - d, l.xOffset = p + (y * g + _ * m) - y, l.yOffset = h + (y * D + _ * v) - _) : l.xOffset = l.yOffset = 0, l.xOrigin = b, l.yOrigin = w, l.smooth = !!n, l.origin = e, l.originIsAbsolute = !!r, t.style[on] = "0px 0px", o && (_n(o, l, "xOrigin", f, b), _n(o, l, "yOrigin", d, w), _n(o, l, "xOffset", p, l.xOffset), _n(o, l, "yOffset", h, l.yOffset)), t.setAttribute("data-svg-origin", b + " " + w)
                },
                Rn = function(t, e) {
                    var r = t._gsap || new Ne(t);
                    if ("x" in r && !e && !r.uncache) return r;
                    var n, i, o, s, a, u, l, c, f, d, p, h, g, D, m, v, y, x, b, w, C, E, F, T, S, A, M, O, k, P, L, B, R = t.style,
                        I = r.scaleX < 0,
                        Y = "px",
                        z = "deg",
                        X = getComputedStyle(t),
                        N = fn(t, on) || "0";
                    return n = i = o = u = l = c = f = d = p = 0, s = a = 1, r.svg = !(!t.getCTM || !vn(t)), X.translate && ("none" === X.translate && "none" === X.scale && "none" === X.rotate || (R[nn] = ("none" !== X.translate ? "translate3d(" + (X.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== X.rotate ? "rotate(" + X.rotate + ") " : "") + ("none" !== X.scale ? "scale(" + X.scale.split(" ").join(",") + ") " : "") + ("none" !== X[nn] ? X[nn] : "")), R.scale = R.rotate = R.translate = "none"), D = Ln(t, r.svg), r.svg && (r.uncache ? (S = t.getBBox(), N = r.xOrigin - S.x + "px " + (r.yOrigin - S.y) + "px", T = "") : T = !e && t.getAttribute("data-svg-origin"), Bn(t, T || N, !!T || r.originIsAbsolute, !1 !== r.smooth, D)), h = r.xOrigin || 0, g = r.yOrigin || 0, D !== Mn && (x = D[0], b = D[1], w = D[2], C = D[3], n = E = D[4], i = F = D[5], 6 === D.length ? (s = Math.sqrt(x * x + b * b), a = Math.sqrt(C * C + w * w), u = x || b ? zr(b, x) * Ir : 0, (f = w || C ? zr(w, C) * Ir + u : 0) && (a *= Math.abs(Math.cos(f * Yr))), r.svg && (n -= h - (h * x + g * w), i -= g - (h * b + g * C))) : (B = D[6], P = D[7], M = D[8], O = D[9], k = D[10], L = D[11], n = D[12], i = D[13], o = D[14], l = (m = zr(B, k)) * Ir, m && (T = E * (v = Math.cos(-m)) + M * (y = Math.sin(-m)), S = F * v + O * y, A = B * v + k * y, M = E * -y + M * v, O = F * -y + O * v, k = B * -y + k * v, L = P * -y + L * v, E = T, F = S, B = A), c = (m = zr(-w, k)) * Ir, m && (v = Math.cos(-m), L = C * (y = Math.sin(-m)) + L * v, x = T = x * v - M * y, b = S = b * v - O * y, w = A = w * v - k * y), u = (m = zr(b, x)) * Ir, m && (T = x * (v = Math.cos(m)) + b * (y = Math.sin(m)), S = E * v + F * y, b = b * v - x * y, F = F * v - E * y, x = T, E = S), l && Math.abs(l) + Math.abs(u) > 359.9 && (l = u = 0, c = 180 - c), s = mt(Math.sqrt(x * x + b * b + w * w)), a = mt(Math.sqrt(F * F + B * B)), m = zr(E, F), f = Math.abs(m) > 2e-4 ? m * Ir : 0, p = L ? 1 / (L < 0 ? -L : L) : 0), r.svg && (T = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !kn(fn(t, nn)), T && t.setAttribute("transform", T))), Math.abs(f) > 90 && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = n - ((r.xPercent = n && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + Y, r.y = i - ((r.yPercent = i && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + Y, r.z = o + Y, r.scaleX = mt(s), r.scaleY = mt(a), r.rotation = mt(u) + z, r.rotationX = mt(l) + z, r.rotationY = mt(c) + z, r.skewX = f + z, r.skewY = d + z, r.transformPerspective = p + Y, (r.zOrigin = parseFloat(N.split(" ")[2]) || !e && r.zOrigin || 0) && (R[on] = In(N)), r.xOffset = r.yOffset = 0, r.force3D = _.force3D, r.renderTransform = r.svg ? Hn : Br ? qn : zn, r.uncache = 0, r
                },
                In = function(t) {
                    return (t = t.split(" "))[0] + " " + t[1]
                },
                Yn = function(t, e, r) {
                    var n = ee(e);
                    return mt(parseFloat(e) + parseFloat(wn(t, "x", r + "px", n))) + n
                },
                zn = function(t, e) {
                    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, qn(t, e)
                },
                Xn = "0deg",
                Nn = "0px",
                jn = ") ",
                qn = function(t, e) {
                    var r = e || this,
                        n = r.xPercent,
                        i = r.yPercent,
                        o = r.x,
                        s = r.y,
                        a = r.z,
                        u = r.rotation,
                        l = r.rotationY,
                        c = r.rotationX,
                        f = r.skewX,
                        d = r.skewY,
                        p = r.scaleX,
                        h = r.scaleY,
                        g = r.transformPerspective,
                        D = r.force3D,
                        m = r.target,
                        v = r.zOrigin,
                        y = "",
                        _ = "auto" === D && t && 1 !== t || !0 === D;
                    if (v && (c !== Xn || l !== Xn)) {
                        var x, b = parseFloat(l) * Yr,
                            w = Math.sin(b),
                            C = Math.cos(b);
                        b = parseFloat(c) * Yr, x = Math.cos(b), o = Yn(m, o, w * x * -v), s = Yn(m, s, -Math.sin(b) * -v), a = Yn(m, a, C * x * -v + v)
                    }
                    g !== Nn && (y += "perspective(" + g + jn), (n || i) && (y += "translate(" + n + "%, " + i + "%) "), (_ || o !== Nn || s !== Nn || a !== Nn) && (y += a !== Nn || _ ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + jn), u !== Xn && (y += "rotate(" + u + jn), l !== Xn && (y += "rotateY(" + l + jn), c !== Xn && (y += "rotateX(" + c + jn), f === Xn && d === Xn || (y += "skew(" + f + ", " + d + jn), 1 === p && 1 === h || (y += "scale(" + p + ", " + h + jn), m.style[nn] = y || "translate(0, 0)"
                },
                Hn = function(t, e) {
                    var r, n, i, o, s, a = e || this,
                        u = a.xPercent,
                        l = a.yPercent,
                        c = a.x,
                        f = a.y,
                        d = a.rotation,
                        p = a.skewX,
                        h = a.skewY,
                        g = a.scaleX,
                        D = a.scaleY,
                        m = a.target,
                        v = a.xOrigin,
                        y = a.yOrigin,
                        _ = a.xOffset,
                        x = a.yOffset,
                        b = a.forceCSS,
                        w = parseFloat(c),
                        C = parseFloat(f);
                    d = parseFloat(d), p = parseFloat(p), (h = parseFloat(h)) && (p += h = parseFloat(h), d += h), d || p ? (d *= Yr, p *= Yr, r = Math.cos(d) * g, n = Math.sin(d) * g, i = Math.sin(d - p) * -D, o = Math.cos(d - p) * D, p && (h *= Yr, s = Math.tan(p - h), i *= s = Math.sqrt(1 + s * s), o *= s, h && (s = Math.tan(h), r *= s = Math.sqrt(1 + s * s), n *= s)), r = mt(r), n = mt(n), i = mt(i), o = mt(o)) : (r = g, o = D, n = i = 0), (w && !~(c + "").indexOf("px") || C && !~(f + "").indexOf("px")) && (w = wn(m, "x", c, "px"), C = wn(m, "y", f, "px")), (v || y || _ || x) && (w = mt(w + v - (v * r + y * i) + _), C = mt(C + y - (v * n + y * o) + x)), (u || l) && (s = m.getBBox(), w = mt(w + u / 100 * s.width), C = mt(C + l / 100 * s.height)), s = "matrix(" + r + "," + n + "," + i + "," + o + "," + w + "," + C + ")", m.setAttribute("transform", s), b && (m.style[nn] = s)
                },
                Wn = function(t, e, r, n, i) {
                    var o, s, a = 360,
                        u = M(i),
                        l = parseFloat(i) * (u && ~i.indexOf("rad") ? Ir : 1) - n,
                        c = n + l + "deg";
                    return u && ("short" === (o = i.split("_")[1]) && (l %= a) !== l % 180 && (l += l < 0 ? a : -360), "cw" === o && l < 0 ? l = (l + 36e9) % a - ~~(l / a) * a : "ccw" === o && l > 0 && (l = (l - 36e9) % a - ~~(l / a) * a)), t._pt = s = new hr(t._pt, e, r, n, l, Wr), s.e = c, s.u = "deg", t._props.push(r), s
                },
                Un = function(t, e) {
                    for (var r in e) t[r] = e[r];
                    return t
                },
                Vn = function(t, e, r) {
                    var n, i, o, s, a, u, l, c = Un({}, r._gsap),
                        f = r.style;
                    for (i in c.svg ? (o = r.getAttribute("transform"), r.setAttribute("transform", ""), f[nn] = e, n = Rn(r, 1), yn(r, nn), r.setAttribute("transform", o)) : (o = getComputedStyle(r)[nn], f[nn] = e, n = Rn(r, 1), f[nn] = o), Rr)(o = c[i]) !== (s = n[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = ee(o) !== (l = ee(s)) ? wn(r, i, o, l) : parseFloat(o), u = parseFloat(s), t._pt = new hr(t._pt, n, i, a, u - a, Hr), t._pt.u = l || 0, t._props.push(i));
                    Un(n, c)
                };
            Dt("padding,margin,Width,Radius", function(t, e) {
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
                        return Cn(t, e, r)
                    }), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
                    o = (n + "").split(" "), a = {}, s.forEach(function(t, e) {
                        return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
                    }), t.init(e, a, i)
                }
            });
            var Gn, $n, Kn = {
                name: "css",
                register: hn,
                targetTest: function(t) {
                    return t.style && t.nodeType
                },
                init: function(t, e, r, n, i) {
                    var o, s, a, u, l, c, f, d, p, h, g, D, m, v, y, x, b, w = this._props,
                        C = t.style,
                        E = r.vars.startAt;
                    for (f in Or || hn(), this.styles = this.styles || ln(t), x = this.styles.props, this.tween = r, e)
                        if ("autoRound" !== f && (s = e[f], !ut[f] || !Ge(f, e, r, n, t, i)))
                            if (l = typeof s, c = An[f], "function" === l && (l = typeof(s = s.call(r, n, t, i))), "string" === l && ~s.indexOf("random(") && (s = de(s)), c) c(this, t, f, s, r) && (y = 1);
                            else if ("--" === f.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(f) + "").trim(), s += "", Ee.lastIndex = 0, Ee.test(o) || (d = ee(o), (p = ee(s)) ? d !== p && (o = wn(t, f, o, p) + p) : d && (s += d)), this.add(C, "setProperty", o, s, n, i, 0, 0, f), w.push(f), x.push(f, 0, C[f]);
                    else if ("undefined" !== l) {
                        if (E && f in E ? (o = "function" == typeof E[f] ? E[f].call(r, n, t, i) : E[f], M(o) && ~o.indexOf("random(") && (o = de(o)), ee(o + "") || "auto" === o || (o += _.units[f] || ee(Cn(t, f)) || ""), "=" === (o + "").charAt(1) && (o = Cn(t, f))) : o = Cn(t, f), u = parseFloat(o), (h = "string" === l && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), f in qr && ("autoAlpha" === f && (1 === u && "hidden" === Cn(t, "visibility") && a && (u = 0), x.push("visibility", 0, C.visibility), _n(this, C, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== f && "transform" !== f && ~(f = qr[f]).indexOf(",") && (f = f.split(",")[0])), g = f in Rr) {
                            if (this.styles.save(f), b = s, "string" === l && "var(--" === s.substring(0, 6)) {
                                if ("calc(" === (s = fn(t, s.substring(4, s.indexOf(")")))).substring(0, 5)) {
                                    var F = t.style.perspective;
                                    t.style.perspective = s, s = fn(t, "perspective"), F ? t.style.perspective = F : yn(t, "perspective")
                                }
                                a = parseFloat(s)
                            }
                            if (D || ((m = t._gsap).renderTransform && !e.parseTransform || Rn(t, e.parseTransform), v = !1 !== e.smoothOrigin && m.smooth, (D = this._pt = new hr(this._pt, C, nn, 0, 1, m.renderTransform, m, 0, -1)).dep = 1), "scale" === f) this._pt = new hr(this._pt, m, "scaleY", m.scaleY, (h ? yt(m.scaleY, h + a) : a) - m.scaleY || 0, Hr), this._pt.u = 0, w.push("scaleY", f), f += "X";
                            else {
                                if ("transformOrigin" === f) {
                                    x.push(on, 0, C[on]), s = Tn(s), m.svg ? Bn(t, s, 0, v, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== m.zOrigin && _n(this, m, "zOrigin", m.zOrigin, p), _n(this, C, f, In(o), In(s)));
                                    continue
                                }
                                if ("svgOrigin" === f) {
                                    Bn(t, s, 1, v, 0, this);
                                    continue
                                }
                                if (f in On) {
                                    Wn(this, m, f, u, h ? yt(u, h + s) : s);
                                    continue
                                }
                                if ("smoothOrigin" === f) {
                                    _n(this, m, "smooth", m.smooth, s);
                                    continue
                                }
                                if ("force3D" === f) {
                                    m[f] = s;
                                    continue
                                }
                                if ("transform" === f) {
                                    Vn(this, s, t);
                                    continue
                                }
                            }
                        } else f in C || (f = pn(f) || f);
                        if (g || (a || 0 === a) && (u || 0 === u) && !jr.test(s) && f in C) a || (a = 0), (d = (o + "").substr((u + "").length)) !== (p = ee(s) || (f in _.units ? _.units[f] : d)) && (u = wn(t, f, o, p)), this._pt = new hr(this._pt, g ? m : C, f, u, (h ? yt(u, h + a) : a) - u, g || "px" !== p && "zIndex" !== f || !1 === e.autoRound ? Hr : Gr), this._pt.u = p || 0, g && b !== s ? (this._pt.b = o, this._pt.e = b, this._pt.r = Vr) : d !== p && "%" !== p && (this._pt.b = o, this._pt.r = Ur);
                        else if (f in C) En.call(this, t, f, o, h ? h + s : s);
                        else if (f in t) this.add(t, f, o || t[f], h ? h + s : s, n, i);
                        else if ("parseTransform" !== f) {
                            Q(f, s);
                            continue
                        }
                        g || (f in C ? x.push(f, 0, C[f]) : "function" == typeof t[f] ? x.push(f, 2, t[f]()) : x.push(f, 1, o || t[f])), w.push(f)
                    }
                    y && pr(this)
                },
                render: function(t, e) {
                    if (e.tween._time || !Lr())
                        for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
                    else e.styles.revert()
                },
                get: Cn,
                aliases: qr,
                getSetter: function(t, e, r) {
                    var n = qr[e];
                    return n && n.indexOf(",") < 0 && (e = n), e in Rr && e !== on && (t._gsap.x || Cn(t, "x")) ? r && Pr === r ? "scale" === e ? tn : Jr : (Pr = r || {}) && ("scale" === e ? en : rn) : t.style && !P(t.style[e]) ? Zr : ~e.indexOf("-") ? Qr : or(t, e)
                },
                core: {
                    _removeProperty: yn,
                    _getMatrix: Ln
                }
            };
            Tr.utils.checkPrefix = pn, Tr.core.getStyleSaver = ln, $n = Dt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Gn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
                Rr[t] = 1
            }), Dt(Gn, function(t) {
                _.units[t] = "deg", On[t] = 1
            }), qr[$n[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Gn, Dt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
                var e = t.split(":");
                qr[e[1]] = $n[e[0]]
            }), Dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
                _.units[t] = "px"
            }), Tr.registerPlugin(Kn);
            var Zn = Tr.registerPlugin(Kn) || Tr,
                Qn = (Zn.core.Tween, /(?:^\s+|\s+$)/g),
                Jn = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

            function ti(t, e, r, n, i) {
                for (var o, s = t.firstChild, a = []; s;) 3 === s.nodeType ? (o = (s.nodeValue + "").replace(/^\n+/g, ""), n || (o = o.replace(/\s+/g, " ")), a.push.apply(a, ei(o, e, r, n, i))) : "br" === (s.nodeName + "").toLowerCase() ? a[a.length - 1] += "<br>" : a.push(s.outerHTML), s = s.nextSibling;
                if (!i)
                    for (o = a.length; o--;) "&" === a[o] && a.splice(o, 1, "&amp;");
                return a
            }

            function ei(t, e, r, n, i) {
                if (t += "", r && (t = t.trim ? t.trim() : t.replace(Qn, "")), e && "" !== e) return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
                for (var o, s, a = [], u = t.length, l = 0; l < u; l++)((s = t.charAt(l)).charCodeAt(0) >= 55296 && s.charCodeAt(0) <= 56319 || t.charCodeAt(l + 1) >= 65024 && t.charCodeAt(l + 1) <= 65039) && (o = ((t.substr(l, 12).split(Jn) || [])[1] || "").length || 2, s = t.substr(l, o), a.emoji = 1, l += o - 1), a.push(i ? s : ">" === s ? "&gt;" : "<" === s ? "&lt;" : !n || " " !== s || " " !== t.charAt(l - 1) && " " !== t.charAt(l + 1) ? s : "&nbsp;");
                return a
            }
            var ri, ni, ii = {
                version: "3.14.2",
                name: "text",
                init: function(t, e, r) {
                    "object" != typeof e && (e = {
                        value: e
                    });
                    var n, i, o, s, a, u, l, c, f = t.nodeName.toUpperCase(),
                        d = this,
                        p = e,
                        h = p.newClass,
                        g = p.oldClass,
                        D = p.preserveSpaces,
                        m = p.rtl,
                        v = d.delimiter = e.delimiter || "",
                        y = d.fillChar = e.fillChar || (e.padSpace ? "&nbsp;" : "");
                    if (d.svg = t.getBBox && ("TEXT" === f || "TSPAN" === f), !("innerHTML" in t) && !d.svg) return !1;
                    if (d.target = t, "value" in e) {
                        for (o = ti(t, v, !1, D, d.svg), ni || (ni = document.createElement("div")), ni.innerHTML = e.value, i = ti(ni, v, !1, D, d.svg), d.from = r._from, !d.from && !m || m && d.from || (f = o, o = i, i = f), d.hasClass = !(!h && !g), d.newClass = m ? g : h, d.oldClass = m ? h : g, n = (f = o.length - i.length) < 0 ? o : i, f < 0 && (f = -f); --f > -1;) n.push(y);
                        if ("diff" === e.type) {
                            for (s = 0, a = [], u = [], l = "", f = 0; f < i.length; f++)(c = i[f]) === o[f] ? l += c : (a[s] = l + c, u[s++] = l + o[f], l = "");
                            i = a, o = u, l && (i.push(l), o.push(l))
                        }
                        e.speed && r.duration(Math.min(.05 / e.speed * n.length, e.maxDuration || 9999)), d.rtl = m, d.original = o, d.text = i, d._props.push("text")
                    } else d.text = d.original = [""]
                },
                render: function(t, e) {
                    t > 1 ? t = 1 : t < 0 && (t = 0), e.from && (t = 1 - t);
                    var r, n, i, o = e.text,
                        s = e.hasClass,
                        a = e.newClass,
                        u = e.oldClass,
                        l = e.delimiter,
                        c = e.target,
                        f = e.fillChar,
                        d = e.original,
                        p = e.rtl,
                        h = o.length,
                        g = (p ? 1 - t : t) * h + .5 | 0;
                    s && t ? (n = u && g !== h, i = ((r = a && g) ? "<span class='" + a + "'>" : "") + o.slice(0, g).join(l) + (r ? "</span>" : "") + (n ? "<span class='" + u + "'>" : "") + l + d.slice(g).join(l) + (n ? "</span>" : "")) : i = o.slice(0, g).join(l) + l + d.slice(g).join(l), e.svg ? c.textContent = i : c.innerHTML = "&nbsp;" === f && ~i.indexOf("  ") ? i.split("  ").join("&nbsp;&nbsp;") : i
                }
            };

            function oi(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            ii.splitInnerHTML = ti, ii.emojiSafeSplit = ei, ii.getText = function t(e) {
                var r = e.nodeType,
                    n = "";
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += t(e)
                } else if (3 === r || 4 === r) return e.nodeValue;
                return n
            }, (ri || "undefined" != typeof window && (ri = window.gsap) && ri.registerPlugin && ri) && ri.registerPlugin(ii), Zn.registerPlugin(ii), window.addEventListener("DOMContentLoaded", () => {
                if (!Modernizr.touchevents) {
                    const t = document.querySelectorAll("[data-cursor-text]"),
                        e = document.getElementById("cursor"),
                        r = document.getElementById("cursor-text"),
                        n = document.getElementById("cursor-description-wrapper"),
                        i = document.getElementById("cursor-description");
                    let o = !1;
                    if (null !== e && void 0 !== t && void 0 !== e && void 0 !== r && void 0 !== n && void 0 !== i) {
                        const s = e.querySelector(".btn-icon-arrow-right"),
                            a = e.querySelector(".btn-icon-arrow-bottom"),
                            u = e.querySelector(".btn-icon-arrow-left-right"),
                            l = () => {
                                o = !1, e.classList.remove("open"), n.style.height = "0px"
                            },
                            c = t => {
                                let r = Math.round(t.clientX) + 10;
                                t.clientX > window.innerWidth - e.offsetWidth - 20 && (r = Math.round(t.clientX) - e.offsetWidth - 10);
                                let n = Math.round(t.clientY) + 10;
                                t.clientY > window.innerHeight - e.offsetHeight - 20 && (n = Math.round(t.clientY) - e.offsetHeight - 10), Zn.to(e, {
                                    left: r,
                                    top: n,
                                    duration: 2,
                                    ease: "power4.out"
                                })
                            };
                        let f;
                        window.addEventListener("mousemove", t => {
                            f = t, c(t)
                        });
                        const d = Zn.fromTo(e, {
                            opacity: 0,
                            scale: .5,
                            display: "none"
                        }, {
                            opacity: 1,
                            scale: 1,
                            display: "block",
                            duration: .3,
                            ease: "power4.inOut",
                            onComplete: () => {
                                e.classList.add("active")
                            },
                            onReverseComplete: () => {
                                e.classList.remove("active", "btn-transparent", "btn-color"), Zn.to(r, {
                                    width: 0,
                                    duration: 0,
                                    onComplete: () => {
                                        r.innerHTML = ""
                                    }
                                })
                            }
                        });
                        d.pause(), t.forEach(t => {
                            let p = t.dataset.cursorText;
                            if (void 0 !== p) {
                                const h = t.dataset.cursorColor,
                                    g = t.dataset.cursorSize,
                                    D = t.dataset.icon;
                                t.addEventListener("mouseenter", n => {
                                    p = t.dataset.cursorText, "true" === t.ariaDisabled ? (d.reverse(), l()) : (d.play(), Zn.to(r, {
                                        width: 0,
                                        duration: .2,
                                        ease: "power4.out",
                                        onComplete: () => {
                                            r.innerHTML = p
                                        }
                                    }), Zn.to(r, {
                                        width: "auto",
                                        duration: .8,
                                        delay: .2,
                                        ease: "power4.out",
                                        onUpdate: () => {
                                            c(f)
                                        }
                                    }), "transparent" === h ? (e.classList.add("btn-transparent"), e.classList.remove("btn-color"), e.classList.remove("btn-color-secondary")) : "color" === h ? (e.classList.add("btn-color"), e.classList.remove("btn-color-secondary"), e.classList.remove("btn-transparent")) : "color-secondary" === h ? (e.classList.add("btn-color-secondary"), e.classList.remove("btn-color"), e.classList.remove("btn-transparent")) : (e.classList.remove("btn-color"), e.classList.remove("btn-color-secondary"), e.classList.remove("btn-transparent")), "small" === g ? e.classList.add("btn-small") : e.classList.remove("btn-small"), null !== s && null !== a && null !== u && (s.style.display = "none", a.style.display = "none", u.style.display = "none", "arrow-bottom" === D ? a.style.display = "flex" : "arrow-left-right" === D ? u.style.display = "flex" : "none" !== D && (s.style.display = "flex"))), n.currentTarget.dataset.cursorDescription || l()
                                }), t.addEventListener("click", t => {
                                    const s = t.currentTarget.dataset.cursorDescription,
                                        a = t.currentTarget.dataset.cursorTitle;
                                    if (i.innerHTML !== s && (i.innerHTML = s), o || !s) l(), a && Zn.to(r, {
                                        duration: .2,
                                        ease: "none",
                                        text: p
                                    });
                                    else {
                                        o = !0, e.classList.add("open"), a && Zn.to(r, {
                                            duration: .6,
                                            ease: "none",
                                            text: a
                                        });
                                        let t = i.getBoundingClientRect().height;
                                        n.style.height = `${t}px`
                                    }
                                }), t.addEventListener("mouseleave", () => {
                                    d.reverse(), l()
                                })
                            }
                        })
                    }
                }
            });
            var si, ai, ui, li, ci, fi, di, pi, hi, gi, Di, mi, vi, yi = function() {
                    return si || "undefined" != typeof window && (si = window.gsap) && si.registerPlugin && si
                },
                _i = 1,
                xi = [],
                bi = [],
                wi = [],
                Ci = Date.now,
                Ei = function(t, e) {
                    return e
                },
                Fi = function(t, e) {
                    return ~wi.indexOf(t) && wi[wi.indexOf(t) + 1][e]
                },
                Ti = function(t) {
                    return !!~gi.indexOf(t)
                },
                Si = function(t, e, r, n, i) {
                    return t.addEventListener(e, r, {
                        passive: !1 !== n,
                        capture: !!i
                    })
                },
                Ai = function(t, e, r, n) {
                    return t.removeEventListener(e, r, !!n)
                },
                Mi = "scrollLeft",
                Oi = "scrollTop",
                ki = function() {
                    return Di && Di.isPressed || bi.cache++
                },
                Pi = function(t, e) {
                    var r = function r(n) {
                        if (n || 0 === n) {
                            _i && (ui.history.scrollRestoration = "manual");
                            var i = Di && Di.isPressed;
                            n = r.v = Math.round(n) || (Di && Di.iOS ? 1 : 0), t(n), r.cacheID = bi.cache, i && Ei("ss", n)
                        } else(e || bi.cache !== r.cacheID || Ei("ref")) && (r.cacheID = bi.cache, r.v = t());
                        return r.v + r.offset
                    };
                    return r.offset = 0, t && r
                },
                Li = {
                    s: Mi,
                    p: "left",
                    p2: "Left",
                    os: "right",
                    os2: "Right",
                    d: "width",
                    d2: "Width",
                    a: "x",
                    sc: Pi(function(t) {
                        return arguments.length ? ui.scrollTo(t, Bi.sc()) : ui.pageXOffset || li[Mi] || ci[Mi] || fi[Mi] || 0
                    })
                },
                Bi = {
                    s: Oi,
                    p: "top",
                    p2: "Top",
                    os: "bottom",
                    os2: "Bottom",
                    d: "height",
                    d2: "Height",
                    a: "y",
                    op: Li,
                    sc: Pi(function(t) {
                        return arguments.length ? ui.scrollTo(Li.sc(), t) : ui.pageYOffset || li[Oi] || ci[Oi] || fi[Oi] || 0
                    })
                },
                Ri = function(t, e) {
                    return (e && e._ctx && e._ctx.selector || si.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== si.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
                },
                Ii = function(t, e) {
                    var r = e.s,
                        n = e.sc;
                    Ti(t) && (t = li.scrollingElement || ci);
                    var i = bi.indexOf(t),
                        o = n === Bi.sc ? 1 : 2;
                    !~i && (i = bi.push(t) - 1), bi[i + o] || Si(t, "scroll", ki);
                    var s = bi[i + o],
                        a = s || (bi[i + o] = Pi(Fi(t, r), !0) || (Ti(t) ? n : Pi(function(e) {
                            return arguments.length ? t[r] = e : t[r]
                        })));
                    return a.target = t, s || (a.smooth = "smooth" === si.getProperty(t, "scrollBehavior")), a
                },
                Yi = function(t, e, r) {
                    var n = t,
                        i = t,
                        o = Ci(),
                        s = o,
                        a = e || 50,
                        u = Math.max(500, 3 * a),
                        l = function(t, e) {
                            var u = Ci();
                            e || u - o > a ? (i = n, n = t, s = o, o = u) : r ? n += t : n = i + (t - i) / (u - s) * (o - s)
                        };
                    return {
                        update: l,
                        reset: function() {
                            i = n = r ? 0 : n, s = o = 0
                        },
                        getVelocity: function(t) {
                            var e = s,
                                a = i,
                                c = Ci();
                            return (t || 0 === t) && t !== n && l(t), o === s || c - s > u ? 0 : (n + (r ? a : -a)) / ((r ? c : o) - e) * 1e3
                        }
                    }
                },
                zi = function(t, e) {
                    return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
                },
                Xi = function(t) {
                    var e = Math.max.apply(Math, t),
                        r = Math.min.apply(Math, t);
                    return Math.abs(e) >= Math.abs(r) ? e : r
                },
                Ni = function() {
                    var t, e, r, n;
                    (hi = si.core.globals().ScrollTrigger) && hi.core && (t = hi.core, e = t.bridge || {}, r = t._scrollers, n = t._proxies, r.push.apply(r, bi), n.push.apply(n, wi), bi = r, wi = n, Ei = function(t, r) {
                        return e[t](r)
                    })
                },
                ji = function(t) {
                    return si = t || yi(), !ai && si && "undefined" != typeof document && document.body && (ui = window, li = document, ci = li.documentElement, fi = li.body, gi = [ui, li, ci, fi], si.utils.clamp, vi = si.core.context || function() {}, pi = "onpointerenter" in fi ? "pointer" : "mouse", di = qi.isTouch = ui.matchMedia && ui.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ui || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, mi = qi.eventTypes = ("ontouchstart" in ci ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ci ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
                        return _i = 0
                    }, 500), Ni(), ai = 1), ai
                };
            Li.op = Bi, bi.cache = 0;
            var qi = function() {
                function t(t) {
                    this.init(t)
                }
                var e, r;
                return t.prototype.init = function(t) {
                    ai || ji(si) || console.warn("Please gsap.registerPlugin(Observer)"), hi || Ni();
                    var e = t.tolerance,
                        r = t.dragMinimum,
                        n = t.type,
                        i = t.target,
                        o = t.lineHeight,
                        s = t.debounce,
                        a = t.preventDefault,
                        u = t.onStop,
                        l = t.onStopDelay,
                        c = t.ignore,
                        f = t.wheelSpeed,
                        d = t.event,
                        p = t.onDragStart,
                        h = t.onDragEnd,
                        g = t.onDrag,
                        D = t.onPress,
                        m = t.onRelease,
                        v = t.onRight,
                        y = t.onLeft,
                        _ = t.onUp,
                        x = t.onDown,
                        b = t.onChangeX,
                        w = t.onChangeY,
                        C = t.onChange,
                        E = t.onToggleX,
                        F = t.onToggleY,
                        T = t.onHover,
                        S = t.onHoverEnd,
                        A = t.onMove,
                        M = t.ignoreCheck,
                        O = t.isNormalizer,
                        k = t.onGestureStart,
                        P = t.onGestureEnd,
                        L = t.onWheel,
                        B = t.onEnable,
                        R = t.onDisable,
                        I = t.onClick,
                        Y = t.scrollSpeed,
                        z = t.capture,
                        X = t.allowClicks,
                        N = t.lockAxis,
                        j = t.onLockAxis;
                    this.target = i = Ri(i) || ci, this.vars = t, c && (c = si.utils.toArray(c)), e = e || 1e-9, r = r || 0, f = f || 1, Y = Y || 1, n = n || "wheel,touch,pointer", s = !1 !== s, o || (o = parseFloat(ui.getComputedStyle(fi).lineHeight) || 22);
                    var q, H, W, U, V, G, $, K = this,
                        Z = 0,
                        Q = 0,
                        J = t.passive || !a && !1 !== t.passive,
                        tt = Ii(i, Li),
                        et = Ii(i, Bi),
                        rt = tt(),
                        nt = et(),
                        it = ~n.indexOf("touch") && !~n.indexOf("pointer") && "pointerdown" === mi[0],
                        ot = Ti(i),
                        st = i.ownerDocument || li,
                        at = [0, 0, 0],
                        ut = [0, 0, 0],
                        lt = 0,
                        ct = function() {
                            return lt = Ci()
                        },
                        ft = function(t, e) {
                            return (K.event = t) && c && function(t, e) {
                                for (var r = e.length; r--;)
                                    if (e[r] === t || e[r].contains(t)) return !0;
                                return !1
                            }(t.target, c) || e && it && "touch" !== t.pointerType || M && M(t, e)
                        },
                        dt = function() {
                            var t = K.deltaX = Xi(at),
                                r = K.deltaY = Xi(ut),
                                n = Math.abs(t) >= e,
                                i = Math.abs(r) >= e;
                            C && (n || i) && C(K, t, r, at, ut), n && (v && K.deltaX > 0 && v(K), y && K.deltaX < 0 && y(K), b && b(K), E && K.deltaX < 0 != Z < 0 && E(K), Z = K.deltaX, at[0] = at[1] = at[2] = 0), i && (x && K.deltaY > 0 && x(K), _ && K.deltaY < 0 && _(K), w && w(K), F && K.deltaY < 0 != Q < 0 && F(K), Q = K.deltaY, ut[0] = ut[1] = ut[2] = 0), (U || W) && (A && A(K), W && (p && 1 === W && p(K), g && g(K), W = 0), U = !1), G && !(G = !1) && j && j(K), V && (L(K), V = !1), q = 0
                        },
                        pt = function(t, e, r) {
                            at[r] += t, ut[r] += e, K._vx.update(t), K._vy.update(e), s ? q || (q = requestAnimationFrame(dt)) : dt()
                        },
                        ht = function(t, e) {
                            N && !$ && (K.axis = $ = Math.abs(t) > Math.abs(e) ? "x" : "y", G = !0), "y" !== $ && (at[2] += t, K._vx.update(t, !0)), "x" !== $ && (ut[2] += e, K._vy.update(e, !0)), s ? q || (q = requestAnimationFrame(dt)) : dt()
                        },
                        gt = function(t) {
                            if (!ft(t, 1)) {
                                var e = (t = zi(t, a)).clientX,
                                    n = t.clientY,
                                    i = e - K.x,
                                    o = n - K.y,
                                    s = K.isDragging;
                                K.x = e, K.y = n, (s || (i || o) && (Math.abs(K.startX - e) >= r || Math.abs(K.startY - n) >= r)) && (W || (W = s ? 2 : 1), s || (K.isDragging = !0), ht(i, o))
                            }
                        },
                        Dt = K.onPress = function(t) {
                            ft(t, 1) || t && t.button || (K.axis = $ = null, H.pause(), K.isPressed = !0, t = zi(t), Z = Q = 0, K.startX = K.x = t.clientX, K.startY = K.y = t.clientY, K._vx.reset(), K._vy.reset(), Si(O ? i : st, mi[1], gt, J, !0), K.deltaX = K.deltaY = 0, D && D(K))
                        },
                        mt = K.onRelease = function(t) {
                            if (!ft(t, 1)) {
                                Ai(O ? i : st, mi[1], gt, !0);
                                var e = !isNaN(K.y - K.startY),
                                    r = K.isDragging,
                                    n = r && (Math.abs(K.x - K.startX) > 3 || Math.abs(K.y - K.startY) > 3),
                                    o = zi(t);
                                !n && e && (K._vx.reset(), K._vy.reset(), a && X && si.delayedCall(.08, function() {
                                    if (Ci() - lt > 300 && !t.defaultPrevented)
                                        if (t.target.click) t.target.click();
                                        else if (st.createEvent) {
                                        var e = st.createEvent("MouseEvents");
                                        e.initMouseEvent("click", !0, !0, ui, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                                    }
                                })), K.isDragging = K.isGesturing = K.isPressed = !1, u && r && !O && H.restart(!0), W && dt(), h && r && h(K), m && m(K, n)
                            }
                        },
                        vt = function(t) {
                            return t.touches && t.touches.length > 1 && (K.isGesturing = !0) && k(t, K.isDragging)
                        },
                        yt = function() {
                            return (K.isGesturing = !1) || P(K)
                        },
                        _t = function(t) {
                            if (!ft(t)) {
                                var e = tt(),
                                    r = et();
                                pt((e - rt) * Y, (r - nt) * Y, 1), rt = e, nt = r, u && H.restart(!0)
                            }
                        },
                        xt = function(t) {
                            if (!ft(t)) {
                                t = zi(t, a), L && (V = !0);
                                var e = (1 === t.deltaMode ? o : 2 === t.deltaMode ? ui.innerHeight : 1) * f;
                                pt(t.deltaX * e, t.deltaY * e, 0), u && !O && H.restart(!0)
                            }
                        },
                        bt = function(t) {
                            if (!ft(t)) {
                                var e = t.clientX,
                                    r = t.clientY,
                                    n = e - K.x,
                                    i = r - K.y;
                                K.x = e, K.y = r, U = !0, u && H.restart(!0), (n || i) && ht(n, i)
                            }
                        },
                        wt = function(t) {
                            K.event = t, T(K)
                        },
                        Ct = function(t) {
                            K.event = t, S(K)
                        },
                        Et = function(t) {
                            return ft(t) || zi(t, a) && I(K)
                        };
                    H = K._dc = si.delayedCall(l || .25, function() {
                        K._vx.reset(), K._vy.reset(), H.pause(), u && u(K)
                    }).pause(), K.deltaX = K.deltaY = 0, K._vx = Yi(0, 50, !0), K._vy = Yi(0, 50, !0), K.scrollX = tt, K.scrollY = et, K.isDragging = K.isGesturing = K.isPressed = !1, vi(this), K.enable = function(t) {
                        return K.isEnabled || (Si(ot ? st : i, "scroll", ki), n.indexOf("scroll") >= 0 && Si(ot ? st : i, "scroll", _t, J, z), n.indexOf("wheel") >= 0 && Si(i, "wheel", xt, J, z), (n.indexOf("touch") >= 0 && di || n.indexOf("pointer") >= 0) && (Si(i, mi[0], Dt, J, z), Si(st, mi[2], mt), Si(st, mi[3], mt), X && Si(i, "click", ct, !0, !0), I && Si(i, "click", Et), k && Si(st, "gesturestart", vt), P && Si(st, "gestureend", yt), T && Si(i, pi + "enter", wt), S && Si(i, pi + "leave", Ct), A && Si(i, pi + "move", bt)), K.isEnabled = !0, K.isDragging = K.isGesturing = K.isPressed = U = W = !1, K._vx.reset(), K._vy.reset(), rt = tt(), nt = et(), t && t.type && Dt(t), B && B(K)), K
                    }, K.disable = function() {
                        K.isEnabled && (xi.filter(function(t) {
                            return t !== K && Ti(t.target)
                        }).length || Ai(ot ? st : i, "scroll", ki), K.isPressed && (K._vx.reset(), K._vy.reset(), Ai(O ? i : st, mi[1], gt, !0)), Ai(ot ? st : i, "scroll", _t, z), Ai(i, "wheel", xt, z), Ai(i, mi[0], Dt, z), Ai(st, mi[2], mt), Ai(st, mi[3], mt), Ai(i, "click", ct, !0), Ai(i, "click", Et), Ai(st, "gesturestart", vt), Ai(st, "gestureend", yt), Ai(i, pi + "enter", wt), Ai(i, pi + "leave", Ct), Ai(i, pi + "move", bt), K.isEnabled = K.isPressed = K.isDragging = !1, R && R(K))
                    }, K.kill = K.revert = function() {
                        K.disable();
                        var t = xi.indexOf(K);
                        t >= 0 && xi.splice(t, 1), Di === K && (Di = 0)
                    }, xi.push(K), O && Ti(i) && (Di = K), K.enable(d)
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
                }]) && oi(e.prototype, r), t
            }();
            qi.version = "3.14.2", qi.create = function(t) {
                return new qi(t)
            }, qi.register = ji, qi.getAll = function() {
                return xi.slice()
            }, qi.getById = function(t) {
                return xi.filter(function(e) {
                    return e.vars.id === t
                })[0]
            }, yi() && si.registerPlugin(qi);
            var Hi, Wi, Ui, Vi, Gi, $i, Ki, Zi, Qi, Ji, to, eo, ro, no, io, oo, so, ao, uo, lo, co, fo, po, ho, go, Do, mo, vo, yo, _o, xo, bo, wo, Co, Eo, Fo, To, So, Ao = 1,
                Mo = Date.now,
                Oo = Mo(),
                ko = 0,
                Po = 0,
                Lo = function(t, e, r) {
                    var n = Go(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
                    return r["_" + e + "Clamp"] = n, n ? t.substr(6, t.length - 7) : t
                },
                Bo = function(t, e) {
                    return !e || Go(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")"
                },
                Ro = function t() {
                    return Po && requestAnimationFrame(t)
                },
                Io = function() {
                    return no = 1
                },
                Yo = function() {
                    return no = 0
                },
                zo = function(t) {
                    return t
                },
                Xo = function(t) {
                    return Math.round(1e5 * t) / 1e5 || 0
                },
                No = function() {
                    return "undefined" != typeof window
                },
                jo = function() {
                    return Hi || No() && (Hi = window.gsap) && Hi.registerPlugin && Hi
                },
                qo = function(t) {
                    return !!~Ki.indexOf(t)
                },
                Ho = function(t) {
                    return ("Height" === t ? xo : Ui["inner" + t]) || Gi["client" + t] || $i["client" + t]
                },
                Wo = function(t) {
                    return Fi(t, "getBoundingClientRect") || (qo(t) ? function() {
                        return oa.width = Ui.innerWidth, oa.height = xo, oa
                    } : function() {
                        return ms(t)
                    })
                },
                Uo = function(t, e) {
                    var r = e.s,
                        n = e.d2,
                        i = e.d,
                        o = e.a;
                    return Math.max(0, (r = "scroll" + n) && (o = Fi(t, r)) ? o() - Wo(t)()[i] : qo(t) ? (Gi[r] || $i[r]) - Ho(n) : t[r] - t["offset" + n])
                },
                Vo = function(t, e) {
                    for (var r = 0; r < uo.length; r += 3)(!e || ~e.indexOf(uo[r + 1])) && t(uo[r], uo[r + 1], uo[r + 2])
                },
                Go = function(t) {
                    return "string" == typeof t
                },
                $o = function(t) {
                    return "function" == typeof t
                },
                Ko = function(t) {
                    return "number" == typeof t
                },
                Zo = function(t) {
                    return "object" == typeof t
                },
                Qo = function(t, e, r) {
                    return t && t.progress(e ? 0 : 1) && r && t.pause()
                },
                Jo = function(t, e) {
                    if (t.enabled) {
                        var r = t._ctx ? t._ctx.add(function() {
                            return e(t)
                        }) : e(t);
                        r && r.totalTime && (t.callbackAnimation = r)
                    }
                },
                ts = Math.abs,
                es = "left",
                rs = "right",
                ns = "bottom",
                is = "width",
                os = "height",
                ss = "Right",
                as = "Left",
                us = "Top",
                ls = "Bottom",
                cs = "padding",
                fs = "margin",
                ds = "Width",
                ps = "Height",
                hs = "px",
                gs = function(t) {
                    return Ui.getComputedStyle(t)
                },
                Ds = function(t, e) {
                    for (var r in e) r in t || (t[r] = e[r]);
                    return t
                },
                ms = function(t, e) {
                    var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== gs(t)[io] && Hi.to(t, {
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
                vs = function(t, e) {
                    var r = e.d2;
                    return t["offset" + r] || t["client" + r] || 0
                },
                ys = function(t) {
                    var e, r = [],
                        n = t.labels,
                        i = t.duration();
                    for (e in n) r.push(n[e] / i);
                    return r
                },
                _s = function(t) {
                    var e = Hi.utils.snap(t),
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
                xs = function(t, e, r, n) {
                    return r.split(",").forEach(function(r) {
                        return t(e, r, n)
                    })
                },
                bs = function(t, e, r, n, i) {
                    return t.addEventListener(e, r, {
                        passive: !n,
                        capture: !!i
                    })
                },
                ws = function(t, e, r, n) {
                    return t.removeEventListener(e, r, !!n)
                },
                Cs = function(t, e, r) {
                    (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r))
                },
                Es = {
                    startColor: "green",
                    endColor: "red",
                    indent: 0,
                    fontSize: "16px",
                    fontWeight: "normal"
                },
                Fs = {
                    toggleActions: "play",
                    anticipatePin: 0
                },
                Ts = {
                    top: 0,
                    left: 0,
                    center: .5,
                    bottom: 1,
                    right: 1
                },
                Ss = function(t, e) {
                    if (Go(t)) {
                        var r = t.indexOf("="),
                            n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
                        ~r && (t.indexOf("%") > r && (n *= e / 100), t = t.substr(0, r - 1)), t = n + (t in Ts ? Ts[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
                    }
                    return t
                },
                As = function(t, e, r, n, i, o, s, a) {
                    var u = i.startColor,
                        l = i.endColor,
                        c = i.fontSize,
                        f = i.indent,
                        d = i.fontWeight,
                        p = Vi.createElement("div"),
                        h = qo(r) || "fixed" === Fi(r, "pinType"),
                        g = -1 !== t.indexOf("scroller"),
                        D = h ? $i : r,
                        m = -1 !== t.indexOf("start"),
                        v = m ? u : l,
                        y = "border-color:" + v + ";font-size:" + c + ";color:" + v + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                    return y += "position:" + ((g || a) && h ? "fixed;" : "absolute;"), (g || a || !h) && (y += (n === Bi ? rs : ns) + ":" + (o + parseFloat(f)) + "px;"), s && (y += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), p._isStart = m, p.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")), p.style.cssText = y, p.innerText = e || 0 === e ? t + "-" + e : t, D.children[0] ? D.insertBefore(p, D.children[0]) : D.appendChild(p), p._offset = p["offset" + n.op.d2], Ms(p, 0, n, m), p
                },
                Ms = function(t, e, r, n) {
                    var i = {
                            display: "block"
                        },
                        o = r[n ? "os2" : "p2"],
                        s = r[n ? "p2" : "os2"];
                    t._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + ds] = 1, i["border" + s + ds] = 0, i[r.p] = e + "px", Hi.set(t, i)
                },
                Os = [],
                ks = {},
                Ps = function() {
                    return Mo() - ko > 34 && (Eo || (Eo = requestAnimationFrame(Qs)))
                },
                Ls = function() {
                    (!po || !po.isPressed || po.startX > $i.clientWidth) && (bi.cache++, po ? Eo || (Eo = requestAnimationFrame(Qs)) : Qs(), ko || Xs("scrollStart"), ko = Mo())
                },
                Bs = function() {
                    Do = Ui.innerWidth, go = Ui.innerHeight
                },
                Rs = function(t) {
                    bi.cache++, (!0 === t || !ro && !fo && !Vi.fullscreenElement && !Vi.webkitFullscreenElement && (!ho || Do !== Ui.innerWidth || Math.abs(Ui.innerHeight - go) > .25 * Ui.innerHeight)) && Zi.restart(!0)
                },
                Is = {},
                Ys = [],
                zs = function t() {
                    return ws(da, "scrollEnd", t) || $s(!0)
                },
                Xs = function(t) {
                    return Is[t] && Is[t].map(function(t) {
                        return t()
                    }) || Ys
                },
                Ns = [],
                js = function(t) {
                    for (var e = 0; e < Ns.length; e += 5)(!t || Ns[e + 4] && Ns[e + 4].query === t) && (Ns[e].style.cssText = Ns[e + 1], Ns[e].getBBox && Ns[e].setAttribute("transform", Ns[e + 2] || ""), Ns[e + 3].uncache = 1)
                },
                qs = function() {
                    return bi.forEach(function(t) {
                        return $o(t) && ++t.cacheID && (t.rec = t())
                    })
                },
                Hs = function(t, e) {
                    var r;
                    for (oo = 0; oo < Os.length; oo++) !(r = Os[oo]) || e && r._ctx !== e || (t ? r.kill(1) : r.revert(!0, !0));
                    bo = !0, e && js(e), e || Xs("revert")
                },
                Ws = function(t, e) {
                    bi.cache++, (e || !Fo) && bi.forEach(function(t) {
                        return $o(t) && t.cacheID++ && (t.rec = 0)
                    }), Go(t) && (Ui.history.scrollRestoration = yo = t)
                },
                Us = 0,
                Vs = function() {
                    $i.appendChild(_o), xo = !po && _o.offsetHeight || Ui.innerHeight, $i.removeChild(_o)
                },
                Gs = function(t) {
                    return Qi(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
                        return e.style.display = t ? "none" : "block"
                    })
                },
                $s = function(t, e) {
                    if (Gi = Vi.documentElement, $i = Vi.body, Ki = [Ui, Vi, Gi, $i], !ko || t || bo) {
                        Vs(), Fo = da.isRefreshing = !0, bo || qs();
                        var r = Xs("refreshInit");
                        lo && da.sort(), e || Hs(), bi.forEach(function(t) {
                            $o(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0))
                        }), Os.slice(0).forEach(function(t) {
                            return t.refresh()
                        }), bo = !1, Os.forEach(function(t) {
                            if (t._subPinOffset && t.pin) {
                                var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                                    r = t.pin[e];
                                t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh()
                            }
                        }), wo = 1, Gs(!0), Os.forEach(function(t) {
                            var e = Uo(t.scroller, t._dir),
                                r = "max" === t.vars.end || t._endClamp && t.end > e,
                                n = t._startClamp && t.start >= e;
                            (r || n) && t.setPositions(n ? e - 1 : t.start, r ? Math.max(n ? e : t.start + 1, e) : t.end, !0)
                        }), Gs(!1), wo = 0, r.forEach(function(t) {
                            return t && t.render && t.render(-1)
                        }), bi.forEach(function(t) {
                            $o(t) && (t.smooth && requestAnimationFrame(function() {
                                return t.target.style.scrollBehavior = "smooth"
                            }), t.rec && t(t.rec))
                        }), Ws(yo, 1), Zi.pause(), Us++, Fo = 2, Qs(2), Os.forEach(function(t) {
                            return $o(t.vars.onRefresh) && t.vars.onRefresh(t)
                        }), Fo = da.isRefreshing = !1, Xs("refresh")
                    } else bs(da, "scrollEnd", zs)
                },
                Ks = 0,
                Zs = 1,
                Qs = function(t) {
                    if (2 === t || !Fo && !bo) {
                        da.isUpdating = !0, So && So.update(0);
                        var e = Os.length,
                            r = Mo(),
                            n = r - Oo >= 50,
                            i = e && Os[0].scroll();
                        if (Zs = Ks > i ? -1 : 1, Fo || (Ks = i), n && (ko && !no && r - ko > 200 && (ko = 0, Xs("scrollEnd")), to = Oo, Oo = r), Zs < 0) {
                            for (oo = e; oo-- > 0;) Os[oo] && Os[oo].update(0, n);
                            Zs = 1
                        } else
                            for (oo = 0; oo < e; oo++) Os[oo] && Os[oo].update(0, n);
                        da.isUpdating = !1
                    }
                    Eo = 0
                },
                Js = [es, "top", ns, rs, fs + ls, fs + ss, fs + us, fs + as, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
                ta = Js.concat([is, os, "boxSizing", "max" + ds, "max" + ps, "position", fs, cs, cs + us, cs + ss, cs + ls, cs + as]),
                ea = function(t, e, r, n) {
                    if (!t._gsap.swappedIn) {
                        for (var i, o = Js.length, s = e.style, a = t.style; o--;) s[i = Js[o]] = r[i];
                        s.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (s.display = "inline-block"), a[ns] = a[rs] = "auto", s.flexBasis = r.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[is] = vs(t, Li) + hs, s[os] = vs(t, Bi) + hs, s[cs] = a[fs] = a.top = a[es] = "0", na(n), a[is] = a["max" + ds] = r[is], a[os] = a["max" + ps] = r[os], a[cs] = r[cs], t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)), t._gsap.swappedIn = !0
                    }
                },
                ra = /([A-Z])/g,
                na = function(t) {
                    if (t) {
                        var e, r, n = t.t.style,
                            i = t.length,
                            o = 0;
                        for ((t.t._gsap || Hi.core.getCache(t.t)).uncache = 1; o < i; o += 2) r = t[o + 1], e = t[o], r ? n[e] = r : n[e] && n.removeProperty(e.replace(ra, "-$1").toLowerCase())
                    }
                },
                ia = function(t) {
                    for (var e = ta.length, r = t.style, n = [], i = 0; i < e; i++) n.push(ta[i], r[ta[i]]);
                    return n.t = t, n
                },
                oa = {
                    left: 0,
                    top: 0
                },
                sa = function(t, e, r, n, i, o, s, a, u, l, c, f, d, p) {
                    $o(t) && (t = t(a)), Go(t) && "max" === t.substr(0, 3) && (t = f + ("=" === t.charAt(4) ? Ss("0" + t.substr(3), r) : 0));
                    var h, g, D, m = d ? d.time() : 0;
                    if (d && d.seek(0), isNaN(t) || (t = +t), Ko(t)) d && (t = Hi.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, t)), s && Ms(s, r, n, !0);
                    else {
                        $o(e) && (e = e(a));
                        var v, y, _, x, b = (t || "0").split(" ");
                        D = Ri(e, a) || $i, (v = ms(D) || {}) && (v.left || v.top) || "none" !== gs(D).display || (x = D.style.display, D.style.display = "block", v = ms(D), x ? D.style.display = x : D.style.removeProperty("display")), y = Ss(b[0], v[n.d]), _ = Ss(b[1] || "0", r), t = v[n.p] - u[n.p] - l + y + i - _, s && Ms(s, _, n, r - _ < 20 || s._isStart && _ > 20), r -= r - _
                    }
                    if (p && (a[p] = t || -.001, t < 0 && (t = 0)), o) {
                        var w = t + r,
                            C = o._isStart;
                        h = "scroll" + n.d2, Ms(o, w, n, C && w > 20 || !C && (c ? Math.max($i[h], Gi[h]) : o.parentNode[h]) <= w + 1), c && (u = ms(s), c && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + hs))
                    }
                    return d && D && (h = ms(D), d.seek(f), g = ms(D), d._caScrollDist = h[n.p] - g[n.p], t = t / d._caScrollDist * f), d && d.seek(m), d ? t : Math.round(t)
                },
                aa = /(webkit|moz|length|cssText|inset)/i,
                ua = function(t, e, r, n) {
                    if (t.parentNode !== e) {
                        var i, o, s = t.style;
                        if (e === $i) {
                            for (i in t._stOrig = s.cssText, o = gs(t)) + i || aa.test(i) || !o[i] || "string" != typeof s[i] || "0" === i || (s[i] = o[i]);
                            s.top = r, s.left = n
                        } else s.cssText = t._stOrig;
                        Hi.core.getCache(t).uncache = 1, e.appendChild(t)
                    }
                },
                la = function(t, e, r) {
                    var n = e,
                        i = n;
                    return function(e) {
                        var o = Math.round(t());
                        return o !== n && o !== i && Math.abs(o - n) > 3 && Math.abs(o - i) > 3 && (e = o, r && r()), i = n, n = Math.round(e)
                    }
                },
                ca = function(t, e, r) {
                    var n = {};
                    n[e.p] = "+=" + r, Hi.set(t, n)
                },
                fa = function(t, e) {
                    var r = Ii(t, e),
                        n = "_scroll" + e.p2,
                        i = function e(i, o, s, a, u) {
                            var l = e.tween,
                                c = o.onComplete,
                                f = {};
                            s = s || r();
                            var d = la(r, s, function() {
                                l.kill(), e.tween = 0
                            });
                            return u = a && u || 0, a = a || i - s, l && l.kill(), o[n] = i, o.inherit = !1, o.modifiers = f, f[n] = function() {
                                return d(s + a * l.ratio + u * l.ratio * l.ratio)
                            }, o.onUpdate = function() {
                                bi.cache++, e.tween && Qs()
                            }, o.onComplete = function() {
                                e.tween = 0, c && c.call(l)
                            }, l = e.tween = Hi.to(t, o)
                        };
                    return t[n] = r, r.wheelHandler = function() {
                        return i.tween && i.tween.kill() && (i.tween = 0)
                    }, bs(t, "wheel", r.wheelHandler), da.isTouch && bs(t, "touchmove", r.wheelHandler), i
                },
                da = function() {
                    function t(e, r) {
                        Wi || t.register(Hi) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), vo(this), this.init(e, r)
                    }
                    return t.prototype.init = function(e, r) {
                        if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), Po) {
                            var n, i, o, s, a, u, l, c, f, d, p, h, g, D, m, v, y, _, x, b, w, C, E, F, T, S, A, M, O, k, P, L, B, R, I, Y, z, X, N, j, q, H, W = e = Ds(Go(e) || Ko(e) || e.nodeType ? {
                                    trigger: e
                                } : e, Fs),
                                U = W.onUpdate,
                                V = W.toggleClass,
                                G = W.id,
                                $ = W.onToggle,
                                K = W.onRefresh,
                                Z = W.scrub,
                                Q = W.trigger,
                                J = W.pin,
                                tt = W.pinSpacing,
                                et = W.invalidateOnRefresh,
                                rt = W.anticipatePin,
                                nt = W.onScrubComplete,
                                it = W.onSnapComplete,
                                ot = W.once,
                                st = W.snap,
                                at = W.pinReparent,
                                ut = W.pinSpacer,
                                lt = W.containerAnimation,
                                ct = W.fastScrollEnd,
                                ft = W.preventOverlaps,
                                dt = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Li : Bi,
                                pt = !Z && 0 !== Z,
                                ht = Ri(e.scroller || Ui),
                                gt = Hi.core.getCache(ht),
                                Dt = qo(ht),
                                mt = "fixed" === ("pinType" in e ? e.pinType : Fi(ht, "pinType") || Dt && "fixed"),
                                vt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                                yt = pt && e.toggleActions.split(" "),
                                _t = "markers" in e ? e.markers : Fs.markers,
                                xt = Dt ? 0 : parseFloat(gs(ht)["border" + dt.p2 + ds]) || 0,
                                bt = this,
                                wt = e.onRefreshInit && function() {
                                    return e.onRefreshInit(bt)
                                },
                                Ct = function(t, e, r) {
                                    var n = r.d,
                                        i = r.d2,
                                        o = r.a;
                                    return (o = Fi(t, "getBoundingClientRect")) ? function() {
                                        return o()[n]
                                    } : function() {
                                        return (e ? Ho(i) : t["client" + i]) || 0
                                    }
                                }(ht, Dt, dt),
                                Et = function(t, e) {
                                    return !e || ~wi.indexOf(t) ? Wo(t) : function() {
                                        return oa
                                    }
                                }(ht, Dt),
                                Ft = 0,
                                Tt = 0,
                                St = 0,
                                At = Ii(ht, dt);
                            if (bt._startClamp = bt._endClamp = !1, bt._dir = dt, rt *= 45, bt.scroller = ht, bt.scroll = lt ? lt.time.bind(lt) : At, s = At(), bt.vars = e, r = r || e.animation, "refreshPriority" in e && (lo = 1, -9999 === e.refreshPriority && (So = bt)), gt.tweenScroll = gt.tweenScroll || {
                                    top: fa(ht, Bi),
                                    left: fa(ht, Li)
                                }, bt.tweenTo = n = gt.tweenScroll[dt.p], bt.scrubDuration = function(t) {
                                    (B = Ko(t) && t) ? L ? L.duration(t) : L = Hi.to(r, {
                                        ease: "expo",
                                        totalProgress: "+=0",
                                        inherit: !1,
                                        duration: B,
                                        paused: !0,
                                        onComplete: function() {
                                            return nt && nt(bt)
                                        }
                                    }): (L && L.progress(1).kill(), L = 0)
                                }, r && (r.vars.lazy = !1, r._initted && !bt.isReverted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0), bt.animation = r.pause(), r.scrollTrigger = bt, bt.scrubDuration(Z), k = 0, G || (G = r.vars.id)), st && (Zo(st) && !st.push || (st = {
                                    snapTo: st
                                }), "scrollBehavior" in $i.style && Hi.set(Dt ? [$i, Gi] : ht, {
                                    scrollBehavior: "auto"
                                }), bi.forEach(function(t) {
                                    return $o(t) && t.target === (Dt ? Vi.scrollingElement || Gi : ht) && (t.smooth = !1)
                                }), o = $o(st.snapTo) ? st.snapTo : "labels" === st.snapTo ? function(t) {
                                    return function(e) {
                                        return Hi.utils.snap(ys(t), e)
                                    }
                                }(r) : "labelsDirectional" === st.snapTo ? (j = r, function(t, e) {
                                    return _s(ys(j))(t, e.direction)
                                }) : !1 !== st.directional ? function(t, e) {
                                    return _s(st.snapTo)(t, Mo() - Tt < 500 ? 0 : e.direction)
                                } : Hi.utils.snap(st.snapTo), R = st.duration || {
                                    min: .1,
                                    max: 2
                                }, R = Zo(R) ? Ji(R.min, R.max) : Ji(R, R), I = Hi.delayedCall(st.delay || B / 2 || .1, function() {
                                    var t = At(),
                                        e = Mo() - Tt < 500,
                                        i = n.tween;
                                    if (!(e || Math.abs(bt.getVelocity()) < 10) || i || no || Ft === t) bt.isActive && Ft !== t && I.restart(!0);
                                    else {
                                        var s, a, c = (t - u) / D,
                                            f = r && !pt ? r.totalProgress() : c,
                                            d = e ? 0 : (f - P) / (Mo() - to) * 1e3 || 0,
                                            p = Hi.utils.clamp(-c, 1 - c, ts(d / 2) * d / .185),
                                            h = c + (!1 === st.inertia ? 0 : p),
                                            g = st,
                                            m = g.onStart,
                                            v = g.onInterrupt,
                                            y = g.onComplete;
                                        if (s = o(h, bt), Ko(s) || (s = h), a = Math.max(0, Math.round(u + s * D)), t <= l && t >= u && a !== t) {
                                            if (i && !i._initted && i.data <= ts(a - t)) return;
                                            !1 === st.inertia && (p = s - c), n(a, {
                                                duration: R(ts(.185 * Math.max(ts(h - f), ts(s - f)) / d / .05 || 0)),
                                                ease: st.ease || "power3",
                                                data: ts(a - t),
                                                onInterrupt: function() {
                                                    return I.restart(!0) && v && v(bt)
                                                },
                                                onComplete: function() {
                                                    bt.update(), Ft = At(), r && !pt && (L ? L.resetTo("totalProgress", s, r._tTime / r._tDur) : r.progress(s)), k = P = r && !pt ? r.totalProgress() : bt.progress, it && it(bt), y && y(bt)
                                                }
                                            }, t, p * D, a - t - p * D), m && m(bt, n.tween)
                                        }
                                    }
                                }).pause()), G && (ks[G] = bt), (N = (Q = bt.trigger = Ri(Q || !0 !== J && J)) && Q._gsap && Q._gsap.stRevert) && (N = N(bt)), J = !0 === J ? Q : Ri(J), Go(V) && (V = {
                                    targets: Q,
                                    className: V
                                }), J && (!1 === tt || tt === fs || (tt = !(!tt && J.parentNode && J.parentNode.style && "flex" === gs(J.parentNode).display) && cs), bt.pin = J, (i = Hi.core.getCache(J)).spacer ? m = i.pinState : (ut && ((ut = Ri(ut)) && !ut.nodeType && (ut = ut.current || ut.nativeElement), i.spacerIsNative = !!ut, ut && (i.spacerState = ia(ut))), i.spacer = _ = ut || Vi.createElement("div"), _.classList.add("pin-spacer"), G && _.classList.add("pin-spacer-" + G), i.pinState = m = ia(J)), !1 !== e.force3D && Hi.set(J, {
                                    force3D: !0
                                }), bt.spacer = _ = i.spacer, O = gs(J), F = O[tt + dt.os2], b = Hi.getProperty(J), w = Hi.quickSetter(J, dt.a, hs), ea(J, _, O), y = ia(J)), _t) {
                                h = Zo(_t) ? Ds(_t, Es) : Es, d = As("scroller-start", G, ht, dt, h, 0), p = As("scroller-end", G, ht, dt, h, 0, d), x = d["offset" + dt.op.d2];
                                var Mt = Ri(Fi(ht, "content") || ht);
                                c = this.markerStart = As("start", G, Mt, dt, h, x, 0, lt), f = this.markerEnd = As("end", G, Mt, dt, h, x, 0, lt), lt && (X = Hi.quickSetter([c, f], dt.a, hs)), mt || wi.length && !0 === Fi(ht, "fixedMarkers") || (H = gs(q = Dt ? $i : ht).position, q.style.position = "absolute" === H || "fixed" === H ? H : "relative", Hi.set([d, p], {
                                    force3D: !0
                                }), S = Hi.quickSetter(d, dt.a, hs), M = Hi.quickSetter(p, dt.a, hs))
                            }
                            if (lt) {
                                var Ot = lt.vars.onUpdate,
                                    kt = lt.vars.onUpdateParams;
                                lt.eventCallback("onUpdate", function() {
                                    bt.update(0, 0, 1), Ot && Ot.apply(lt, kt || [])
                                })
                            }
                            if (bt.previous = function() {
                                    return Os[Os.indexOf(bt) - 1]
                                }, bt.next = function() {
                                    return Os[Os.indexOf(bt) + 1]
                                }, bt.revert = function(t, e) {
                                    if (!e) return bt.kill(!0);
                                    var n = !1 !== t || !bt.enabled,
                                        i = ro;
                                    n !== bt.isReverted && (n && (Y = Math.max(At(), bt.scroll.rec || 0), St = bt.progress, z = r && r.progress()), c && [c, f, d, p].forEach(function(t) {
                                        return t.style.display = n ? "none" : "block"
                                    }), n && (ro = bt, bt.update(n)), !J || at && bt.isActive || (n ? function(t, e, r) {
                                        na(r);
                                        var n = t._gsap;
                                        if (n.spacerIsNative) na(n.spacerState);
                                        else if (t._gsap.swappedIn) {
                                            var i = e.parentNode;
                                            i && (i.insertBefore(t, e), i.removeChild(e))
                                        }
                                        t._gsap.swappedIn = !1
                                    }(J, _, m) : ea(J, _, gs(J), T)), n || bt.update(n), ro = i, bt.isReverted = n)
                                }, bt.refresh = function(i, o, h, x) {
                                    if (!ro && bt.enabled || o)
                                        if (J && i && ko) bs(t, "scrollEnd", zs);
                                        else {
                                            !Fo && wt && wt(bt), ro = bt, n.tween && !h && (n.tween.kill(), n.tween = 0), L && L.pause(), et && r && (r.revert({
                                                kill: !1
                                            }).invalidate(), r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(t) {
                                                return t.vars.immediateRender && t.render(0, !0, !0)
                                            }) : r.vars.immediateRender && r.render(0, !0, !0)), bt.isReverted || bt.revert(!0, !0), bt._subPinOffset = !1;
                                            var w, F, S, M, O, k, P, B, R, X, N, j, q, H = Ct(),
                                                W = Et(),
                                                U = lt ? lt.duration() : Uo(ht, dt),
                                                V = D <= .01 || !D,
                                                G = 0,
                                                $ = x || 0,
                                                Z = Zo(h) ? h.end : e.end,
                                                rt = e.endTrigger || Q,
                                                nt = Zo(h) ? h.start : e.start || (0 !== e.start && Q ? J ? "0 0" : "0 100%" : 0),
                                                it = bt.pinnedContainer = e.pinnedContainer && Ri(e.pinnedContainer, bt),
                                                ot = Q && Math.max(0, Os.indexOf(bt)) || 0,
                                                st = ot;
                                            for (_t && Zo(h) && (j = Hi.getProperty(d, dt.p), q = Hi.getProperty(p, dt.p)); st-- > 0;)(k = Os[st]).end || k.refresh(0, 1) || (ro = bt), !(P = k.pin) || P !== Q && P !== J && P !== it || k.isReverted || (X || (X = []), X.unshift(k), k.revert(!0, !0)), k !== Os[st] && (ot--, st--);
                                            for ($o(nt) && (nt = nt(bt)), nt = Lo(nt, "start", bt), u = sa(nt, Q, H, dt, At(), c, d, bt, W, xt, mt, U, lt, bt._startClamp && "_startClamp") || (J ? -.001 : 0), $o(Z) && (Z = Z(bt)), Go(Z) && !Z.indexOf("+=") && (~Z.indexOf(" ") ? Z = (Go(nt) ? nt.split(" ")[0] : "") + Z : (G = Ss(Z.substr(2), H), Z = Go(nt) ? nt : (lt ? Hi.utils.mapRange(0, lt.duration(), lt.scrollTrigger.start, lt.scrollTrigger.end, u) : u) + G, rt = Q)), Z = Lo(Z, "end", bt), l = Math.max(u, sa(Z || (rt ? "100% 0" : U), rt, H, dt, At() + G, f, p, bt, W, xt, mt, U, lt, bt._endClamp && "_endClamp")) || -.001, G = 0, st = ot; st--;)(P = (k = Os[st] || {}).pin) && k.start - k._pinPush <= u && !lt && k.end > 0 && (w = k.end - (bt._startClamp ? Math.max(0, k.start) : k.start), (P === Q && k.start - k._pinPush < u || P === it) && isNaN(nt) && (G += w * (1 - k.progress)), P === J && ($ += w));
                                            if (u += G, l += G, bt._startClamp && (bt._startClamp += G), bt._endClamp && !Fo && (bt._endClamp = l || -.001, l = Math.min(l, Uo(ht, dt))), D = l - u || (u -= .01) && .001, V && (St = Hi.utils.clamp(0, 1, Hi.utils.normalize(u, l, Y))), bt._pinPush = $, c && G && ((w = {})[dt.a] = "+=" + G, it && (w[dt.p] = "-=" + At()), Hi.set([c, f], w)), !J || wo && bt.end >= Uo(ht, dt)) {
                                                if (Q && At() && !lt)
                                                    for (F = Q.parentNode; F && F !== $i;) F._pinOffset && (u -= F._pinOffset, l -= F._pinOffset), F = F.parentNode
                                            } else w = gs(J), M = dt === Bi, S = At(), C = parseFloat(b(dt.a)) + $, !U && l > 1 && (N = {
                                                style: N = (Dt ? Vi.scrollingElement || Gi : ht).style,
                                                value: N["overflow" + dt.a.toUpperCase()]
                                            }, Dt && "scroll" !== gs($i)["overflow" + dt.a.toUpperCase()] && (N.style["overflow" + dt.a.toUpperCase()] = "scroll")), ea(J, _, w), y = ia(J), F = ms(J, !0), B = mt && Ii(ht, M ? Li : Bi)(), tt ? ((T = [tt + dt.os2, D + $ + hs]).t = _, (st = tt === cs ? vs(J, dt) + D + $ : 0) && (T.push(dt.d, st + hs), "auto" !== _.style.flexBasis && (_.style.flexBasis = st + hs)), na(T), it && Os.forEach(function(t) {
                                                t.pin === it && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                                            }), mt && At(Y)) : (st = vs(J, dt)) && "auto" !== _.style.flexBasis && (_.style.flexBasis = st + hs), mt && ((O = {
                                                top: F.top + (M ? S - u : B) + hs,
                                                left: F.left + (M ? B : S - u) + hs,
                                                boxSizing: "border-box",
                                                position: "fixed"
                                            })[is] = O["max" + ds] = Math.ceil(F.width) + hs, O[os] = O["max" + ps] = Math.ceil(F.height) + hs, O[fs] = O[fs + us] = O[fs + ss] = O[fs + ls] = O[fs + as] = "0", O[cs] = w[cs], O[cs + us] = w[cs + us], O[cs + ss] = w[cs + ss], O[cs + ls] = w[cs + ls], O[cs + as] = w[cs + as], v = function(t, e, r) {
                                                for (var n, i = [], o = t.length, s = r ? 8 : 0; s < o; s += 2) n = t[s], i.push(n, n in e ? e[n] : t[s + 1]);
                                                return i.t = t.t, i
                                            }(m, O, at), Fo && At(0)), r ? (R = r._initted, co(1), r.render(r.duration(), !0, !0), E = b(dt.a) - C + D + $, A = Math.abs(D - E) > 1, mt && A && v.splice(v.length - 2, 2), r.render(0, !0, !0), R || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), co(0)) : E = D, N && (N.value ? N.style["overflow" + dt.a.toUpperCase()] = N.value : N.style.removeProperty("overflow-" + dt.a));
                                            X && X.forEach(function(t) {
                                                return t.revert(!1, !0)
                                            }), bt.start = u, bt.end = l, s = a = Fo ? Y : At(), lt || Fo || (s < Y && At(Y), bt.scroll.rec = 0), bt.revert(!1, !0), Tt = Mo(), I && (Ft = -1, I.restart(!0)), ro = 0, r && pt && (r._initted || z) && r.progress() !== z && r.progress(z || 0, !0).render(r.time(), !0, !0), (V || St !== bt.progress || lt || et || r && !r._initted) && (r && !pt && (r._initted || St || !1 !== r.vars.immediateRender) && r.totalProgress(lt && u < -.001 && !St ? Hi.utils.normalize(u, l, 0) : St, !0), bt.progress = V || (s - u) / D === St ? 0 : St), J && tt && (_._pinOffset = Math.round(bt.progress * E)), L && L.invalidate(), isNaN(j) || (j -= Hi.getProperty(d, dt.p), q -= Hi.getProperty(p, dt.p), ca(d, dt, j), ca(c, dt, j - (x || 0)), ca(p, dt, q), ca(f, dt, q - (x || 0))), V && !Fo && bt.update(), !K || Fo || g || (g = !0, K(bt), g = !1)
                                        }
                                }, bt.getVelocity = function() {
                                    return (At() - a) / (Mo() - to) * 1e3 || 0
                                }, bt.endAnimation = function() {
                                    Qo(bt.callbackAnimation), r && (L ? L.progress(1) : r.paused() ? pt || Qo(r, bt.direction < 0, 1) : Qo(r, r.reversed()))
                                }, bt.labelToScroll = function(t) {
                                    return r && r.labels && (u || bt.refresh() || u) + r.labels[t] / r.duration() * D || 0
                                }, bt.getTrailing = function(t) {
                                    var e = Os.indexOf(bt),
                                        r = bt.direction > 0 ? Os.slice(0, e).reverse() : Os.slice(e + 1);
                                    return (Go(t) ? r.filter(function(e) {
                                        return e.vars.preventOverlaps === t
                                    }) : r).filter(function(t) {
                                        return bt.direction > 0 ? t.end <= u : t.start >= l
                                    })
                                }, bt.update = function(t, e, i) {
                                    if (!lt || i || t) {
                                        var o, c, f, p, h, g, m, x = !0 === Fo ? Y : bt.scroll(),
                                            b = t ? 0 : (x - u) / D,
                                            T = b < 0 ? 0 : b > 1 ? 1 : b || 0,
                                            O = bt.progress;
                                        if (e && (a = s, s = lt ? At() : x, st && (P = k, k = r && !pt ? r.totalProgress() : T)), rt && J && !ro && !Ao && ko && (!T && u < x + (x - a) / (Mo() - to) * rt ? T = 1e-4 : 1 === T && l > x + (x - a) / (Mo() - to) * rt && (T = .9999)), T !== O && bt.enabled) {
                                            if (p = (h = (o = bt.isActive = !!T && T < 1) != (!!O && O < 1)) || !!T != !!O, bt.direction = T > O ? 1 : -1, bt.progress = T, p && !ro && (c = T && !O ? 0 : 1 === T ? 1 : 1 === O ? 2 : 3, pt && (f = !h && "none" !== yt[c + 1] && yt[c + 1] || yt[c], m = r && ("complete" === f || "reset" === f || f in r))), ft && (h || m) && (m || Z || !r) && ($o(ft) ? ft(bt) : bt.getTrailing(ft).forEach(function(t) {
                                                    return t.endAnimation()
                                                })), pt || (!L || ro || Ao ? r && r.totalProgress(T, !(!ro || !Tt && !t)) : (L._dp._time - L._start !== L._time && L.render(L._dp._time - L._start), L.resetTo ? L.resetTo("totalProgress", T, r._tTime / r._tDur) : (L.vars.totalProgress = T, L.invalidate().restart()))), J)
                                                if (t && tt && (_.style[tt + dt.os2] = F), mt) {
                                                    if (p) {
                                                        if (g = !t && T > O && l + 1 > x && x + 1 >= Uo(ht, dt), at)
                                                            if (t || !o && !g) ua(J, _);
                                                            else {
                                                                var B = ms(J, !0),
                                                                    R = x - u;
                                                                ua(J, $i, B.top + (dt === Bi ? R : 0) + hs, B.left + (dt === Bi ? 0 : R) + hs)
                                                            }
                                                        na(o || g ? v : y), A && T < 1 && o || w(C + (1 !== T || g ? 0 : E))
                                                    }
                                                } else w(Xo(C + E * T));
                                            st && !n.tween && !ro && !Ao && I.restart(!0), V && (h || ot && T && (T < 1 || !Co)) && Qi(V.targets).forEach(function(t) {
                                                return t.classList[o || ot ? "add" : "remove"](V.className)
                                            }), U && !pt && !t && U(bt), p && !ro ? (pt && (m && ("complete" === f ? r.pause().totalProgress(1) : "reset" === f ? r.restart(!0).pause() : "restart" === f ? r.restart(!0) : r[f]()), U && U(bt)), !h && Co || ($ && h && Jo(bt, $), vt[c] && Jo(bt, vt[c]), ot && (1 === T ? bt.kill(!1, 1) : vt[c] = 0), h || vt[c = 1 === T ? 1 : 3] && Jo(bt, vt[c])), ct && !o && Math.abs(bt.getVelocity()) > (Ko(ct) ? ct : 2500) && (Qo(bt.callbackAnimation), L ? L.progress(1) : Qo(r, "reverse" === f ? 1 : !T, 1))) : pt && U && !ro && U(bt)
                                        }
                                        if (M) {
                                            var z = lt ? x / lt.duration() * (lt._caScrollDist || 0) : x;
                                            S(z + (d._isFlipped ? 1 : 0)), M(z)
                                        }
                                        X && X(-x / lt.duration() * (lt._caScrollDist || 0))
                                    }
                                }, bt.enable = function(e, r) {
                                    bt.enabled || (bt.enabled = !0, bs(ht, "resize", Rs), Dt || bs(ht, "scroll", Ls), wt && bs(t, "refreshInit", wt), !1 !== e && (bt.progress = St = 0, s = a = Ft = At()), !1 !== r && bt.refresh())
                                }, bt.getTween = function(t) {
                                    return t && n ? n.tween : L
                                }, bt.setPositions = function(t, e, r, n) {
                                    if (lt) {
                                        var i = lt.scrollTrigger,
                                            o = lt.duration(),
                                            s = i.end - i.start;
                                        t = i.start + s * t / o, e = i.start + s * e / o
                                    }
                                    bt.refresh(!1, !1, {
                                        start: Bo(t, r && !!bt._startClamp),
                                        end: Bo(e, r && !!bt._endClamp)
                                    }, n), bt.update()
                                }, bt.adjustPinSpacing = function(t) {
                                    if (T && t) {
                                        var e = T.indexOf(dt.d) + 1;
                                        T[e] = parseFloat(T[e]) + t + hs, T[1] = parseFloat(T[1]) + t + hs, na(T)
                                    }
                                }, bt.disable = function(e, r) {
                                    if (!1 !== e && bt.revert(!0, !0), bt.enabled && (bt.enabled = bt.isActive = !1, r || L && L.pause(), Y = 0, i && (i.uncache = 1), wt && ws(t, "refreshInit", wt), I && (I.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !Dt)) {
                                        for (var o = Os.length; o--;)
                                            if (Os[o].scroller === ht && Os[o] !== bt) return;
                                        ws(ht, "resize", Rs), Dt || ws(ht, "scroll", Ls)
                                    }
                                }, bt.kill = function(t, n) {
                                    bt.disable(t, n), L && !n && L.kill(), G && delete ks[G];
                                    var o = Os.indexOf(bt);
                                    o >= 0 && Os.splice(o, 1), o === oo && Zs > 0 && oo--, o = 0, Os.forEach(function(t) {
                                        return t.scroller === bt.scroller && (o = 1)
                                    }), o || Fo || (bt.scroll.rec = 0), r && (r.scrollTrigger = null, t && r.revert({
                                        kill: !1
                                    }), n || r.kill()), c && [c, f, d, p].forEach(function(t) {
                                        return t.parentNode && t.parentNode.removeChild(t)
                                    }), So === bt && (So = 0), J && (i && (i.uncache = 1), o = 0, Os.forEach(function(t) {
                                        return t.pin === J && o++
                                    }), o || (i.spacer = 0)), e.onKill && e.onKill(bt)
                                }, Os.push(bt), bt.enable(!1, !1), N && N(bt), r && r.add && !D) {
                                var Pt = bt.update;
                                bt.update = function() {
                                    bt.update = Pt, bi.cache++, u || l || bt.refresh()
                                }, Hi.delayedCall(.01, bt.update), D = .01, u = l = 0
                            } else bt.refresh();
                            J && function() {
                                if (To !== Us) {
                                    var t = To = Us;
                                    requestAnimationFrame(function() {
                                        return t === Us && $s(!0)
                                    })
                                }
                            }()
                        } else this.update = this.refresh = this.kill = zo
                    }, t.register = function(e) {
                        return Wi || (Hi = e || jo(), No() && window.document && t.enable(), Wi = Po), Wi
                    }, t.defaults = function(t) {
                        if (t)
                            for (var e in t) Fs[e] = t[e];
                        return Fs
                    }, t.disable = function(t, e) {
                        Po = 0, Os.forEach(function(r) {
                            return r[e ? "kill" : "disable"](t)
                        }), ws(Ui, "wheel", Ls), ws(Vi, "scroll", Ls), clearInterval(eo), ws(Vi, "touchcancel", zo), ws($i, "touchstart", zo), xs(ws, Vi, "pointerdown,touchstart,mousedown", Io), xs(ws, Vi, "pointerup,touchend,mouseup", Yo), Zi.kill(), Vo(ws);
                        for (var r = 0; r < bi.length; r += 3) Cs(ws, bi[r], bi[r + 1]), Cs(ws, bi[r], bi[r + 2])
                    }, t.enable = function() {
                        if (Ui = window, Vi = document, Gi = Vi.documentElement, $i = Vi.body, Hi && (Qi = Hi.utils.toArray, Ji = Hi.utils.clamp, vo = Hi.core.context || zo, co = Hi.core.suppressOverwrites || zo, yo = Ui.history.scrollRestoration || "auto", Ks = Ui.pageYOffset || 0, Hi.core.globals("ScrollTrigger", t), $i)) {
                            Po = 1, (_o = document.createElement("div")).style.height = "100vh", _o.style.position = "absolute", Vs(), Ro(), qi.register(Hi), t.isTouch = qi.isTouch, mo = qi.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), ho = 1 === qi.isTouch, bs(Ui, "wheel", Ls), Ki = [Ui, Vi, Gi, $i], Hi.matchMedia ? (t.matchMedia = function(t) {
                                var e, r = Hi.matchMedia();
                                for (e in t) r.add(e, t[e]);
                                return r
                            }, Hi.addEventListener("matchMediaInit", function() {
                                qs(), Hs()
                            }), Hi.addEventListener("matchMediaRevert", function() {
                                return js()
                            }), Hi.addEventListener("matchMedia", function() {
                                $s(0, 1), Xs("matchMedia")
                            }), Hi.matchMedia().add("(orientation: portrait)", function() {
                                return Bs(), Bs
                            })) : console.warn("Requires GSAP 3.11.0 or later"), Bs(), bs(Vi, "scroll", Ls);
                            var e, r, n = $i.hasAttribute("style"),
                                i = $i.style,
                                o = i.borderTopStyle,
                                s = Hi.core.Animation.prototype;
                            for (s.revert || Object.defineProperty(s, "revert", {
                                    value: function() {
                                        return this.time(-.01, !0)
                                    }
                                }), i.borderTopStyle = "solid", e = ms($i), Bi.m = Math.round(e.top + Bi.sc()) || 0, Li.m = Math.round(e.left + Li.sc()) || 0, o ? i.borderTopStyle = o : i.removeProperty("border-top-style"), n || ($i.setAttribute("style", ""), $i.removeAttribute("style")), eo = setInterval(Ps, 250), Hi.delayedCall(.5, function() {
                                    return Ao = 0
                                }), bs(Vi, "touchcancel", zo), bs($i, "touchstart", zo), xs(bs, Vi, "pointerdown,touchstart,mousedown", Io), xs(bs, Vi, "pointerup,touchend,mouseup", Yo), io = Hi.utils.checkPrefix("transform"), ta.push(io), Wi = Mo(), Zi = Hi.delayedCall(.2, $s).pause(), uo = [Vi, "visibilitychange", function() {
                                    var t = Ui.innerWidth,
                                        e = Ui.innerHeight;
                                    Vi.hidden ? (so = t, ao = e) : so === t && ao === e || Rs()
                                }, Vi, "DOMContentLoaded", $s, Ui, "load", $s, Ui, "resize", Rs], Vo(bs), Os.forEach(function(t) {
                                    return t.enable(0, 1)
                                }), r = 0; r < bi.length; r += 3) Cs(ws, bi[r], bi[r + 1]), Cs(ws, bi[r], bi[r + 2])
                        }
                    }, t.config = function(e) {
                        "limitCallbacks" in e && (Co = !!e.limitCallbacks);
                        var r = e.syncInterval;
                        r && clearInterval(eo) || (eo = r) && setInterval(Ps, r), "ignoreMobileResize" in e && (ho = 1 === t.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Vo(ws) || Vo(bs, e.autoRefreshEvents || "none"), fo = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
                    }, t.scrollerProxy = function(t, e) {
                        var r = Ri(t),
                            n = bi.indexOf(r),
                            i = qo(r);
                        ~n && bi.splice(n, i ? 6 : 2), e && (i ? wi.unshift(Ui, e, $i, e, Gi, e) : wi.unshift(r, e))
                    }, t.clearMatchMedia = function(t) {
                        Os.forEach(function(e) {
                            return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
                        })
                    }, t.isInViewport = function(t, e, r) {
                        var n = (Go(t) ? Ri(t) : t).getBoundingClientRect(),
                            i = n[r ? is : os] * e || 0;
                        return r ? n.right - i > 0 && n.left + i < Ui.innerWidth : n.bottom - i > 0 && n.top + i < Ui.innerHeight
                    }, t.positionInViewport = function(t, e, r) {
                        Go(t) && (t = Ri(t));
                        var n = t.getBoundingClientRect(),
                            i = n[r ? is : os],
                            o = null == e ? i / 2 : e in Ts ? Ts[e] * i : ~e.indexOf("%") ? parseFloat(e) * i / 100 : parseFloat(e) || 0;
                        return r ? (n.left + o) / Ui.innerWidth : (n.top + o) / Ui.innerHeight
                    }, t.killAll = function(t) {
                        if (Os.slice(0).forEach(function(t) {
                                return "ScrollSmoother" !== t.vars.id && t.kill()
                            }), !0 !== t) {
                            var e = Is.killAll || [];
                            Is = {}, e.forEach(function(t) {
                                return t()
                            })
                        }
                    }, t
                }();
            da.version = "3.14.2", da.saveStyles = function(t) {
                return t ? Qi(t).forEach(function(t) {
                    if (t && t.style) {
                        var e = Ns.indexOf(t);
                        e >= 0 && Ns.splice(e, 5), Ns.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Hi.core.getCache(t), vo())
                    }
                }) : Ns
            }, da.revert = function(t, e) {
                return Hs(!t, e)
            }, da.create = function(t, e) {
                return new da(t, e)
            }, da.refresh = function(t) {
                return t ? Rs(!0) : (Wi || da.register()) && $s(!0)
            }, da.update = function(t) {
                return ++bi.cache && Qs(!0 === t ? 2 : 0)
            }, da.clearScrollMemory = Ws, da.maxScroll = function(t, e) {
                return Uo(t, e ? Li : Bi)
            }, da.getScrollFunc = function(t, e) {
                return Ii(Ri(t), e ? Li : Bi)
            }, da.getById = function(t) {
                return ks[t]
            }, da.getAll = function() {
                return Os.filter(function(t) {
                    return "ScrollSmoother" !== t.vars.id
                })
            }, da.isScrolling = function() {
                return !!ko
            }, da.snapDirectional = _s, da.addEventListener = function(t, e) {
                var r = Is[t] || (Is[t] = []);
                ~r.indexOf(e) || r.push(e)
            }, da.removeEventListener = function(t, e) {
                var r = Is[t],
                    n = r && r.indexOf(e);
                n >= 0 && r.splice(n, 1)
            }, da.batch = function(t, e) {
                var r, n = [],
                    i = {},
                    o = e.interval || .016,
                    s = e.batchMax || 1e9,
                    a = function(t, e) {
                        var r = [],
                            n = [],
                            i = Hi.delayedCall(o, function() {
                                e(r, n), r = [], n = []
                            }).pause();
                        return function(t) {
                            r.length || i.restart(!0), r.push(t.trigger), n.push(t), s <= r.length && i.progress(1)
                        }
                    };
                for (r in e) i[r] = "on" === r.substr(0, 2) && $o(e[r]) && "onRefreshInit" !== r ? a(0, e[r]) : e[r];
                return $o(s) && (s = s(), bs(da, "refresh", function() {
                    return s = e.batchMax()
                })), Qi(t).forEach(function(t) {
                    var e = {};
                    for (r in i) e[r] = i[r];
                    e.trigger = t, n.push(da.create(e))
                }), n
            };
            var pa, ha = function(t, e, r, n) {
                    return e > n ? t(n) : e < 0 && t(0), r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
                },
                ga = function t(e, r) {
                    !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (qi.isTouch ? " pinch-zoom" : "") : "none", e === Gi && t($i, r)
                },
                Da = {
                    auto: 1,
                    scroll: 1
                },
                ma = function(t) {
                    var e, r = t.event,
                        n = t.target,
                        i = t.axis,
                        o = (r.changedTouches ? r.changedTouches[0] : r).target,
                        s = o._gsap || Hi.core.getCache(o),
                        a = Mo();
                    if (!s._isScrollT || a - s._isScrollT > 2e3) {
                        for (; o && o !== $i && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !Da[(e = gs(o)).overflowY] && !Da[e.overflowX]);) o = o.parentNode;
                        s._isScroll = o && o !== n && !qo(o) && (Da[(e = gs(o)).overflowY] || Da[e.overflowX]), s._isScrollT = a
                    }(s._isScroll || "x" === i) && (r.stopPropagation(), r._gsapAllow = !0)
                },
                va = function(t, e, r, n) {
                    return qi.create({
                        target: t,
                        capture: !0,
                        debounce: !1,
                        lockAxis: !0,
                        type: e,
                        onWheel: n = n && ma,
                        onPress: n,
                        onDrag: n,
                        onScroll: n,
                        onEnable: function() {
                            return r && bs(Vi, qi.eventTypes[0], _a, !1, !0)
                        },
                        onDisable: function() {
                            return ws(Vi, qi.eventTypes[0], _a, !0)
                        }
                    })
                },
                ya = /(input|label|select|textarea)/i,
                _a = function(t) {
                    var e = ya.test(t.target.tagName);
                    (e || pa) && (t._gsapAllow = !0, pa = e)
                };
            da.sort = function(t) {
                if ($o(t)) return Os.sort(t);
                var e = Ui.pageYOffset || 0;
                return da.getAll().forEach(function(t) {
                    return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + Ui.innerHeight
                }), Os.sort(t || function(t, e) {
                    return -1e6 * (t.vars.refreshPriority || 0) + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + -1e6 * (e.vars.refreshPriority || 0))
                })
            }, da.observe = function(t) {
                return new qi(t)
            }, da.normalizeScroll = function(t) {
                if (void 0 === t) return po;
                if (!0 === t && po) return po.enable();
                if (!1 === t) return po && po.kill(), void(po = t);
                var e = t instanceof qi ? t : function(t) {
                    Zo(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
                    var e, r, n, i, o, s, a, u, l = t,
                        c = l.normalizeScrollX,
                        f = l.momentum,
                        d = l.allowNestedScroll,
                        p = l.onRelease,
                        h = Ri(t.target) || Gi,
                        g = Hi.core.globals().ScrollSmoother,
                        D = g && g.get(),
                        m = mo && (t.content && Ri(t.content) || D && !1 !== t.content && !D.smooth() && D.content()),
                        v = Ii(h, Bi),
                        y = Ii(h, Li),
                        _ = 1,
                        x = (qi.isTouch && Ui.visualViewport ? Ui.visualViewport.scale * Ui.visualViewport.width : Ui.outerWidth) / Ui.innerWidth,
                        b = 0,
                        w = $o(f) ? function() {
                            return f(e)
                        } : function() {
                            return f || 2.8
                        },
                        C = va(h, t.type, !0, d),
                        E = function() {
                            return i = !1
                        },
                        F = zo,
                        T = zo,
                        S = function() {
                            r = Uo(h, Bi), T = Ji(mo ? 1 : 0, r), c && (F = Ji(0, Uo(h, Li))), n = Us
                        },
                        A = function() {
                            m._gsap.y = Xo(parseFloat(m._gsap.y) + v.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", v.offset = v.cacheID = 0
                        },
                        M = function() {
                            S(), o.isActive() && o.vars.scrollY > r && (v() > r ? o.progress(1) && v(r) : o.resetTo("scrollY", r))
                        };
                    return m && Hi.set(m, {
                        y: "+=0"
                    }), t.ignoreCheck = function(t) {
                        return mo && "touchmove" === t.type && function() {
                            if (i) {
                                requestAnimationFrame(E);
                                var t = Xo(e.deltaY / 2),
                                    r = T(v.v - t);
                                if (m && r !== v.v + v.offset) {
                                    v.offset = r - v.v;
                                    var n = Xo((parseFloat(m && m._gsap.y) || 0) - v.offset);
                                    m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", m._gsap.y = n + "px", v.cacheID = bi.cache, Qs()
                                }
                                return !0
                            }
                            v.offset && A(), i = !0
                        }() || _ > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
                    }, t.onPress = function() {
                        i = !1;
                        var t = _;
                        _ = Xo((Ui.visualViewport && Ui.visualViewport.scale || 1) / x), o.pause(), t !== _ && ga(h, _ > 1.01 || !c && "x"), s = y(), a = v(), S(), n = Us
                    }, t.onRelease = t.onGestureStart = function(t, e) {
                        if (v.offset && A(), e) {
                            bi.cache++;
                            var n, i, s = w();
                            c && (i = (n = y()) + .05 * s * -t.velocityX / .227, s *= ha(y, n, i, Uo(h, Li)), o.vars.scrollX = F(i)), i = (n = v()) + .05 * s * -t.velocityY / .227, s *= ha(v, n, i, Uo(h, Bi)), o.vars.scrollY = T(i), o.invalidate().duration(s).play(.01), (mo && o.vars.scrollY >= r || n >= r - 1) && Hi.to({}, {
                                onUpdate: M,
                                duration: s
                            })
                        } else u.restart(!0);
                        p && p(t)
                    }, t.onWheel = function() {
                        o._ts && o.pause(), Mo() - b > 1e3 && (n = 0, b = Mo())
                    }, t.onChange = function(t, e, r, i, o) {
                        if (Us !== n && S(), e && c && y(F(i[2] === e ? s + (t.startX - t.x) : y() + e - i[1])), r) {
                            v.offset && A();
                            var u = o[2] === r,
                                l = u ? a + t.startY - t.y : v() + r - o[1],
                                f = T(l);
                            u && l !== f && (a += f - l), v(f)
                        }(r || e) && Qs()
                    }, t.onEnable = function() {
                        ga(h, !c && "x"), da.addEventListener("refresh", M), bs(Ui, "resize", M), v.smooth && (v.target.style.scrollBehavior = "auto", v.smooth = y.smooth = !1), C.enable()
                    }, t.onDisable = function() {
                        ga(h, !0), ws(Ui, "resize", M), da.removeEventListener("refresh", M), C.kill()
                    }, t.lockAxis = !1 !== t.lockAxis, (e = new qi(t)).iOS = mo, mo && !v() && v(1), mo && Hi.ticker.add(zo), u = e._dc, o = Hi.to(e, {
                        ease: "power4",
                        paused: !0,
                        inherit: !1,
                        scrollX: c ? "+=0.1" : "+=0",
                        scrollY: "+=0.1",
                        modifiers: {
                            scrollY: la(v, v(), function() {
                                return o.pause()
                            })
                        },
                        onUpdate: Qs,
                        onComplete: u.vars.onComplete
                    }), e
                }(t);
                return po && po.target === e.target && po.kill(), qo(e.target) && (po = e), e
            }, da.core = {
                _getVelocityProp: Yi,
                _inputObserver: va,
                _scrollers: bi,
                _proxies: wi,
                bridge: {
                    ss: function() {
                        ko || Xs("scrollStart"), ko = Mo()
                    },
                    ref: function() {
                        return ro
                    }
                }
            }, jo() && Hi.registerPlugin(da), window.addEventListener("DOMContentLoaded", () => {
                const t = document.querySelector(".industries"),
                    e = document.querySelector(".industries-text"),
                    r = document.querySelector(".industries-titles-wrapper"),
                    n = document.querySelector(".industries-titles"),
                    i = document.querySelectorAll(".industry-title");
                if (null !== t && null !== r && null !== n && i.length) {
                    const o = e => {
                        if (!e.classList.contains("active")) {
                            const r = t.querySelector(".industry-title.active");
                            null !== r && r.classList.remove("active");
                            const n = t.querySelectorAll(".industry-asset-wrapper");
                            n.length && (Zn.set(n, {
                                zIndex: 0
                            }), Zn.set(n, {
                                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                                delay: .7
                            })), e.classList.add("active");
                            const i = e.getAttribute("data-target");
                            if (null !== i) {
                                const e = t.querySelector('.industry-asset-wrapper[data-id="' + i + '"]');
                                null !== e && null !== e.querySelector(".industry-asset") && (e.classList.add("active"), Zn.fromTo(e, {
                                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                                    zIndex: 29
                                }, {
                                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                    zIndex: 29,
                                    duration: .7,
                                    ease: "power3.inOut"
                                }))
                            }
                        }
                    };
                    i.forEach((t, i) => {
                        let s;
                        Modernizr.touchevents ? s = t.clientHeight + t.clientHeight * i : (Zn.set(r, {
                            height: 4 * n.clientHeight
                        }), Zn.to(n, {
                            scrollTrigger: {
                                trigger: r,
                                start: "top top+=20%",
                                end: "bottom top+=40%",
                                scrub: !0
                            },
                            y: 3 * n.clientHeight,
                            ease: "none"
                        }), e && Zn.to(e, {
                            scrollTrigger: {
                                trigger: r,
                                start: "top top+=15%",
                                end: "bottom top+=40%",
                                scrub: !0
                            },
                            y: 2.8 * n.clientHeight,
                            ease: "none"
                        }), s = t.clientHeight + t.clientHeight * i * 2.5), da.create({
                            trigger: t,
                            start: "top+=" + s + " bottom-=40%",
                            end: "top+=" + s + " top+=40%",
                            onEnter: () => {
                                o(t)
                            },
                            onEnterBack: () => {
                                o(t)
                            },
                            scrub: !0
                        })
                    })
                }
            }, !1);
            const xa = Zn.timeline({
                    paused: !0
                }),
                ba = Zn.timeline({
                    paused: !0
                }),
                wa = Zn.timeline({
                    paused: !0
                });
            Zn.timeline(), window.addEventListener("DOMContentLoaded", () => {
                const t = document.getElementById("footer-contact-time");
                if (null !== t) {
                    const e = t.dataset.weekDays;
                    if (void 0 !== e) {
                        const r = e.split(","),
                            n = () => {
                                const e = new Date,
                                    n = e.toLocaleTimeString("fr-CH");
                                let i = r[e.getDay()];
                                (0 === e.getDay() || e.getDay() > 4) && (i = r[0]), t.innerHTML = i + " " + n
                            };
                        n(), setInterval(n, 1e3)
                    }
                }
                const e = document.querySelectorAll("[data-time]"),
                    r = document.getElementById("locale-time");
                let n = document.getElementById("locale-time-swiss"),
                    i = document.getElementById("locale-time-portugal");
                if (e.length && null !== r && null !== n && null !== i) {
                    const t = n.querySelectorAll(".infinite-x-item"),
                        o = i.querySelectorAll(".infinite-x-item");
                    if (t.length && o.length) {
                        const s = () => {
                            const e = new Date;
                            Array.from(t).forEach(t => {
                                t.innerHTML = e.toLocaleTimeString("fr-CH", {
                                    timeZone: "Europe/Zurich"
                                })
                            }), Array.from(o).forEach(t => {
                                t.innerHTML = e.toLocaleTimeString("fr-CH", {
                                    timeZone: "Europe/Lisbon"
                                })
                            })
                        };
                        s(), setInterval(s, 1e3), xa.fromTo(r, {
                            x: 0,
                            y: 0,
                            xPercent: 0,
                            yPercent: -60
                        }, {
                            duration: .5,
                            delay: .1,
                            xPercent: 0,
                            yPercent: -50,
                            ease: "power4.out"
                        }), ba.fromTo(n, {
                            opacity: 0
                        }, {
                            duration: .3,
                            delay: .1,
                            opacity: 1
                        }), wa.fromTo(i, {
                            opacity: 0
                        }, {
                            duration: .3,
                            delay: .1,
                            opacity: 1
                        }), e.forEach(t => {
                            t.addEventListener("click", t => {
                                t.preventDefault()
                            }), t.addEventListener("mouseenter", t => {
                                xa.play(), "swiss" === t.currentTarget.dataset.time ? ba.play() : wa.play()
                            }), t.addEventListener("mouseleave", t => {
                                xa.reverse(), "swiss" === t.currentTarget.dataset.time ? ba.reverse() : wa.reverse()
                            })
                        })
                    }
                }
            }, !1);
            const Ca = document.getElementById("main-menu"),
                Ea = document.getElementById("open-main-menu"),
                Fa = document.getElementById("mega-menu"),
                Ta = document.getElementById("mega-menu-bg"),
                Sa = document.getElementById("open-mega-menu");
            if (null !== Ca && null !== Ea) {
                const t = () => {
                    document.body.classList.add("main-menu-active")
                };
                Ea.addEventListener("click", t)
            }
            const Aa = Zn.timeline({
                paused: !0
            });
            if (null !== Fa && null !== Ta && null !== Sa) {
                const t = Fa.querySelectorAll(".menu-item"),
                    e = Fa.querySelectorAll(".line-anim"),
                    r = Fa.querySelectorAll(".table-row-anim"),
                    n = document.querySelector("#header-logo-menu");
                Aa.to(Fa, {
                    duration: .001,
                    display: "block",
                    onComplete: () => {
                        document.body.style.overflow = "hidden"
                    },
                    onReverseComplete: () => {
                        document.body.style.overflow = "auto"
                    }
                }).to(Ta, {
                    duration: 1.2,
                    scaleY: 1.1,
                    ease: "expo.inOut"
                }, "<").to(n, {
                    duration: .4,
                    display: "block",
                    opacity: 1,
                    ease: "power4.out"
                }, "-=.9").from(t, {
                    duration: .6,
                    opacity: 0,
                    y: 20,
                    stagger: .1,
                    ease: "power4.out"
                }, "-=.6").from(e, {
                    duration: .6,
                    transformOrigin: "left",
                    scaleX: 0,
                    stagger: .08,
                    ease: "power4.out"
                }, "-=.8").from(r, {
                    duration: .2,
                    opacity: 0,
                    stagger: .08,
                    ease: "power4.out"
                }, "-=1").reverse(), Sa.addEventListener("click", () => {
                    document.body.classList.toggle("mega-menu-opened"), document.body.classList.contains("mega-menu-opened") ? Aa.timeScale(1).play() : Aa.timeScale(2).reverse()
                })
            }
            var Ma, Oa, ka, Pa, La, Ba, Ra, Ia, Ya, za = Tr.registerPlugin(Kn) || Tr,
                Xa = (za.core.Tween, "transform"),
                Na = Xa + "Origin",
                ja = function(t) {
                    var e = t.ownerDocument || t;
                    !(Xa in t.style) && "msTransform" in t.style && (Na = (Xa = "msTransform") + "Origin");
                    for (; e.parentNode && (e = e.parentNode););
                    if (Oa = window, Ra = new $a, e) {
                        Ma = e, ka = e.documentElement, Pa = e.body, (Ia = Ma.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
                        var r = e.createElement("div"),
                            n = e.createElement("div"),
                            i = e && (e.body || e.firstElementChild);
                        i && i.appendChild && (i.appendChild(r), r.appendChild(n), r.style.position = "static", r.style.transform = "translate3d(0,0,1px)", Ya = n.offsetParent !== r, i.removeChild(r))
                    }
                    return e
                },
                qa = [],
                Ha = [],
                Wa = function(t) {
                    return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
                },
                Ua = function t(e) {
                    return "fixed" === Oa.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
                },
                Va = function t(e, r) {
                    if (e.parentNode && (Ma || ja(e))) {
                        var n = Wa(e),
                            i = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                            o = n ? r ? "rect" : "g" : "div",
                            s = 2 !== r ? 0 : 100,
                            a = 3 === r ? 100 : 0,
                            u = {
                                position: "absolute",
                                display: "block",
                                pointerEvents: "none",
                                margin: "0",
                                padding: "0"
                            },
                            l = Ma.createElementNS ? Ma.createElementNS(i.replace(/^https/, "http"), o) : Ma.createElement(o);
                        return r && (n ? (Ba || (Ba = t(e)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + s + "," + a + ")"), l.setAttribute("fill", "transparent"), Ba.appendChild(l)) : (La || (La = t(e), Object.assign(La.style, u)), Object.assign(l.style, u, {
                            width: "0.1px",
                            height: "0.1px",
                            top: a + "px",
                            left: s + "px"
                        }), La.appendChild(l))), l
                    }
                    throw "Need document and parent."
                },
                Ga = function(t, e, r, n, i, o, s) {
                    return t.a = e, t.b = r, t.c = n, t.d = i, t.e = o, t.f = s, t
                },
                $a = function() {
                    function t(t, e, r, n, i, o) {
                        void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === n && (n = 1), void 0 === i && (i = 0), void 0 === o && (o = 0), Ga(this, t, e, r, n, i, o)
                    }
                    var e = t.prototype;
                    return e.inverse = function() {
                        var t = this.a,
                            e = this.b,
                            r = this.c,
                            n = this.d,
                            i = this.e,
                            o = this.f,
                            s = t * n - e * r || 1e-10;
                        return Ga(this, n / s, -e / s, -r / s, t / s, (r * o - n * i) / s, -(t * o - e * i) / s)
                    }, e.multiply = function(t) {
                        var e = this.a,
                            r = this.b,
                            n = this.c,
                            i = this.d,
                            o = this.e,
                            s = this.f,
                            a = t.a,
                            u = t.c,
                            l = t.b,
                            c = t.d,
                            f = t.e,
                            d = t.f;
                        return Ga(this, a * e + l * n, a * r + l * i, u * e + c * n, u * r + c * i, o + f * e + d * n, s + f * r + d * i)
                    }, e.clone = function() {
                        return new t(this.a, this.b, this.c, this.d, this.e, this.f)
                    }, e.equals = function(t) {
                        var e = this.a,
                            r = this.b,
                            n = this.c,
                            i = this.d,
                            o = this.e,
                            s = this.f;
                        return e === t.a && r === t.b && n === t.c && i === t.d && o === t.e && s === t.f
                    }, e.apply = function(t, e) {
                        void 0 === e && (e = {});
                        var r = t.x,
                            n = t.y,
                            i = this.a,
                            o = this.b,
                            s = this.c,
                            a = this.d,
                            u = this.e,
                            l = this.f;
                        return e.x = r * i + n * s + u || 0, e.y = r * o + n * a + l || 0, e
                    }, t
                }();

            function Ka(t, e, r, n) {
                if (!t || !t.parentNode || (Ma || ja(t)).documentElement === t) return new $a;
                var i = function(t) {
                        for (var e, r; t && t !== Pa;)(r = t._gsap) && r.uncache && r.get(t, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), e ? e.push(r) : e = [r]), t = t.parentNode;
                        return e
                    }(t),
                    o = Wa(t) ? qa : Ha,
                    s = function(t, e) {
                        var r, n, i, o, s, a, u = Wa(t),
                            l = t === u,
                            c = u ? qa : Ha,
                            f = t.parentNode,
                            d = f && !u && f.shadowRoot && f.shadowRoot.appendChild ? f.shadowRoot : f;
                        if (t === Oa) return t;
                        if (c.length || c.push(Va(t, 1), Va(t, 2), Va(t, 3)), r = u ? Ba : La, u) l ? (i = function(t) {
                            var e, r = t.getCTM();
                            return r || (e = t.style[Xa], t.style[Xa] = "none", t.appendChild(Ia), r = Ia.getCTM(), t.removeChild(Ia), e ? t.style[Xa] = e : t.style.removeProperty(Xa.replace(/([A-Z])/g, "-$1").toLowerCase())), r || Ra.clone()
                        }(t), o = -i.e / i.a, s = -i.f / i.d, n = Ra) : t.getBBox ? (i = t.getBBox(), n = (n = t.transform ? t.transform.baseVal : {}).numberOfItems ? n.numberOfItems > 1 ? function(t) {
                            for (var e = new $a, r = 0; r < t.numberOfItems; r++) e.multiply(t.getItem(r).matrix);
                            return e
                        }(n) : n.getItem(0).matrix : Ra, o = n.a * i.x + n.c * i.y, s = n.b * i.x + n.d * i.y) : (n = new $a, o = s = 0), e && "g" === t.tagName.toLowerCase() && (o = s = 0), (l || !t.getBoundingClientRect().width ? u : f).appendChild(r), r.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + o) + "," + (n.f + s) + ")");
                        else {
                            if (o = s = 0, Ya)
                                for (n = t.offsetParent, i = t; i && (i = i.parentNode) && i !== n && i.parentNode;)(Oa.getComputedStyle(i)[Xa] + "").length > 4 && (o = i.offsetLeft, s = i.offsetTop, i = 0);
                            if ("absolute" !== (a = Oa.getComputedStyle(t)).position && "fixed" !== a.position)
                                for (n = t.offsetParent; f && f !== n;) o += f.scrollLeft || 0, s += f.scrollTop || 0, f = f.parentNode;
                            (i = r.style).top = t.offsetTop - s + "px", i.left = t.offsetLeft - o + "px", i[Xa] = a[Xa], i[Na] = a[Na], i.position = "fixed" === a.position ? "fixed" : "absolute", d.appendChild(r)
                        }
                        return r
                    }(t, r),
                    a = o[0].getBoundingClientRect(),
                    u = o[1].getBoundingClientRect(),
                    l = o[2].getBoundingClientRect(),
                    c = s.parentNode,
                    f = !n && Ua(t),
                    d = new $a((u.left - a.left) / 100, (u.top - a.top) / 100, (l.left - a.left) / 100, (l.top - a.top) / 100, a.left + (f ? 0 : Oa.pageXOffset || Ma.scrollLeft || ka.scrollLeft || Pa.scrollLeft || 0), a.top + (f ? 0 : Oa.pageYOffset || Ma.scrollTop || ka.scrollTop || Pa.scrollTop || 0));
                if (c.removeChild(s), i)
                    for (a = i.length; a--;)(u = i[a]).scaleX = u.scaleY = 0, u.renderTransform(1, u);
                return e ? d.inverse() : d
            }

            function Za(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
            var Qa, Ja, tu, eu, ru, nu, iu, ou, su, au, uu, lu, cu, fu, du, pu, hu, gu, Du, mu, vu, yu, _u = 0,
                xu = function() {
                    return "undefined" != typeof window
                },
                bu = function() {
                    return Qa || xu() && (Qa = window.gsap) && Qa.registerPlugin && Qa
                },
                wu = function(t) {
                    return "function" == typeof t
                },
                Cu = function(t) {
                    return "object" == typeof t
                },
                Eu = function(t) {
                    return void 0 === t
                },
                Fu = function() {
                    return !1
                },
                Tu = "transform",
                Su = "transformOrigin",
                Au = function(t) {
                    return Math.round(1e4 * t) / 1e4
                },
                Mu = Array.isArray,
                Ou = function(t, e) {
                    var r = tu.createElementNS ? tu.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : tu.createElement(t);
                    return r.style ? r : tu.createElement(t)
                },
                ku = 180 / Math.PI,
                Pu = 1e20,
                Lu = new $a,
                Bu = Date.now || function() {
                    return (new Date).getTime()
                },
                Ru = [],
                Iu = {},
                Yu = 0,
                zu = /^(?:a|input|textarea|button|select)$/i,
                Xu = 0,
                Nu = {},
                ju = {},
                qu = function(t, e) {
                    var r, n = {};
                    for (r in t) n[r] = e ? t[r] * e : t[r];
                    return n
                },
                Hu = function t(e, r) {
                    for (var n, i = e.length; i--;) r ? e[i].style.touchAction = r : e[i].style.removeProperty("touch-action"), (n = e[i].children) && n.length && t(n, r)
                },
                Wu = function() {
                    return Ru.forEach(function(t) {
                        return t()
                    })
                },
                Uu = function() {
                    return !Ru.length && Qa.ticker.remove(Wu)
                },
                Vu = function(t) {
                    for (var e = Ru.length; e--;) Ru[e] === t && Ru.splice(e, 1);
                    Qa.to(Uu, {
                        overwrite: !0,
                        delay: 15,
                        duration: 0,
                        onComplete: Uu,
                        data: "_draggable"
                    })
                },
                Gu = function(t, e, r, n) {
                    if (t.addEventListener) {
                        var i = cu[e];
                        n = n || (uu ? {
                            passive: !1
                        } : null), t.addEventListener(i || e, r, n), i && e !== i && t.addEventListener(e, r, n)
                    }
                },
                $u = function(t, e, r, n) {
                    if (t.removeEventListener) {
                        var i = cu[e];
                        t.removeEventListener(i || e, r, n), i && e !== i && t.removeEventListener(e, r, n)
                    }
                },
                Ku = function(t) {
                    t.preventDefault && t.preventDefault(), t.preventManipulation && t.preventManipulation()
                },
                Zu = function t(e) {
                    fu = e.touches && _u < e.touches.length, $u(e.target, "touchend", t)
                },
                Qu = function(t) {
                    fu = t.touches && _u < t.touches.length, Gu(t.target, "touchend", Zu)
                },
                Ju = function(t) {
                    return Ja.pageYOffset || t.scrollTop || t.documentElement.scrollTop || t.body.scrollTop || 0
                },
                tl = function(t) {
                    return Ja.pageXOffset || t.scrollLeft || t.documentElement.scrollLeft || t.body.scrollLeft || 0
                },
                el = function t(e, r) {
                    Gu(e, "scroll", r), nl(e.parentNode) || t(e.parentNode, r)
                },
                rl = function t(e, r) {
                    $u(e, "scroll", r), nl(e.parentNode) || t(e.parentNode, r)
                },
                nl = function(t) {
                    return !(t && t !== eu && 9 !== t.nodeType && t !== tu.body && t !== Ja && t.nodeType && t.parentNode)
                },
                il = function(t, e) {
                    var r = "x" === e ? "Width" : "Height",
                        n = "scroll" + r,
                        i = "client" + r;
                    return Math.max(0, nl(t) ? Math.max(eu[n], ru[n]) - (Ja["inner" + r] || eu[i] || ru[i]) : t[n] - t[i])
                },
                ol = function t(e, r) {
                    var n = il(e, "x"),
                        i = il(e, "y");
                    nl(e) ? e = ju : t(e.parentNode, r), e._gsMaxScrollX = n, e._gsMaxScrollY = i, r || (e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0)
                },
                sl = function(t, e, r) {
                    var n = t.style;
                    n && (Eu(n[e]) && (e = su(e, t) || e), null == r ? n.removeProperty && n.removeProperty(e.replace(/([A-Z])/g, "-$1").toLowerCase()) : n[e] = r)
                },
                al = function(t) {
                    return Ja.getComputedStyle(t instanceof Element ? t : t.host || (t.parentNode || {}).host || t)
                },
                ul = {},
                ll = function(t) {
                    if (t === Ja) return ul.left = ul.top = 0, ul.width = ul.right = eu.clientWidth || t.innerWidth || ru.clientWidth || 0, ul.height = ul.bottom = (t.innerHeight || 0) - 20 < eu.clientHeight ? eu.clientHeight : t.innerHeight || ru.clientHeight || 0, ul;
                    var e = t.ownerDocument || tu,
                        r = Eu(t.pageX) ? t.nodeType || Eu(t.left) || Eu(t.top) ? au(t)[0].getBoundingClientRect() : t : {
                            left: t.pageX - tl(e),
                            top: t.pageY - Ju(e),
                            right: t.pageX - tl(e) + 1,
                            bottom: t.pageY - Ju(e) + 1
                        };
                    return Eu(r.right) && !Eu(r.width) ? (r.right = r.left + r.width, r.bottom = r.top + r.height) : Eu(r.width) && (r = {
                        width: r.right - r.left,
                        height: r.bottom - r.top,
                        right: r.right,
                        left: r.left,
                        bottom: r.bottom,
                        top: r.top
                    }), r
                },
                cl = function(t, e, r) {
                    var n, i = t.vars,
                        o = i[r],
                        s = t._listeners[e];
                    return wu(o) && (n = o.apply(i.callbackScope || t, i[r + "Params"] || [t.pointerEvent])), s && !1 === t.dispatchEvent(e) && (n = !1), n
                },
                fl = function(t, e) {
                    var r, n, i, o = au(t)[0];
                    return o.nodeType || o === Ja ? pl(o, e) : Eu(t.left) ? {
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
                dl = {},
                pl = function(t, e) {
                    e = au(e)[0];
                    var r, n, i, o, s, a, u, l, c, f, d, p, h, g = t.getBBox && t.ownerSVGElement,
                        D = t.ownerDocument || tu;
                    if (t === Ja) i = Ju(D), n = (r = tl(D)) + (D.documentElement.clientWidth || t.innerWidth || D.body.clientWidth || 0), o = i + ((t.innerHeight || 0) - 20 < D.documentElement.clientHeight ? D.documentElement.clientHeight : t.innerHeight || D.body.clientHeight || 0);
                    else {
                        if (e === Ja || Eu(e)) return t.getBoundingClientRect();
                        r = i = 0, g ? (d = (f = t.getBBox()).width, p = f.height) : (t.viewBox && (f = t.viewBox.baseVal) && (r = f.x || 0, i = f.y || 0, d = f.width, p = f.height), d || (f = "border-box" === (h = al(t)).boxSizing, d = (parseFloat(h.width) || t.clientWidth || 0) + (f ? 0 : parseFloat(h.borderLeftWidth) + parseFloat(h.borderRightWidth)), p = (parseFloat(h.height) || t.clientHeight || 0) + (f ? 0 : parseFloat(h.borderTopWidth) + parseFloat(h.borderBottomWidth)))), n = d, o = p
                    }
                    return t === e ? {
                        left: r,
                        top: i,
                        width: n - r,
                        height: o - i
                    } : (a = (s = Ka(e, !0).multiply(Ka(t))).apply({
                        x: r,
                        y: i
                    }), u = s.apply({
                        x: n,
                        y: i
                    }), l = s.apply({
                        x: n,
                        y: o
                    }), c = s.apply({
                        x: r,
                        y: o
                    }), {
                        left: r = Math.min(a.x, u.x, l.x, c.x),
                        top: i = Math.min(a.y, u.y, l.y, c.y),
                        width: Math.max(a.x, u.x, l.x, c.x) - r,
                        height: Math.max(a.y, u.y, l.y, c.y) - i
                    })
                },
                hl = function(t, e, r, n, i, o) {
                    var s, a, u, l = {};
                    if (e)
                        if (1 !== i && e instanceof Array) {
                            if (l.end = s = [], u = e.length, Cu(e[0]))
                                for (a = 0; a < u; a++) s[a] = qu(e[a], i);
                            else
                                for (a = 0; a < u; a++) s[a] = e[a] * i;
                            r += 1.1, n -= 1.1
                        } else wu(e) ? l.end = function(r) {
                            var n, o, s = e.call(t, r);
                            if (1 !== i)
                                if (Cu(s)) {
                                    for (o in n = {}, s) n[o] = s[o] * i;
                                    s = n
                                } else s *= i;
                            return s
                        } : l.end = e;
                    return (r || 0 === r) && (l.max = r), (n || 0 === n) && (l.min = n), o && (l.velocity = 0), l
                },
                gl = function t(e) {
                    var r;
                    return !(!e || !e.getAttribute || e === ru) && (!("true" !== (r = e.getAttribute("data-clickable")) && ("false" === r || !zu.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || t(e.parentNode))
                },
                Dl = function(t, e) {
                    for (var r, n = t.length; n--;)(r = t[n]).ondragstart = r.onselectstart = e ? null : Fu, Qa.set(r, {
                        lazy: !0,
                        userSelect: e ? "text" : "none"
                    })
                },
                ml = function t(e) {
                    return "fixed" === al(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
                },
                vl = function(t, e) {
                    t = Qa.utils.toArray(t)[0], e = e || {};
                    var r, n, i, o, s, a, u = document.createElement("div"),
                        l = u.style,
                        c = t.firstChild,
                        f = 0,
                        d = 0,
                        p = t.scrollTop,
                        h = t.scrollLeft,
                        g = t.scrollWidth,
                        D = t.scrollHeight,
                        m = 0,
                        v = 0,
                        y = 0;
                    vu && !1 !== e.force3D ? (s = "translate3d(", a = "px,0px)") : Tu && (s = "translate(", a = "px)"), this.scrollTop = function(t, e) {
                        if (!arguments.length) return -this.top();
                        this.top(-t, e)
                    }, this.scrollLeft = function(t, e) {
                        if (!arguments.length) return -this.left();
                        this.left(-t, e)
                    }, this.left = function(r, n) {
                        if (!arguments.length) return -(t.scrollLeft + d);
                        var i = t.scrollLeft - h,
                            o = d;
                        if ((i > 2 || i < -2) && !n) return h = t.scrollLeft, Qa.killTweensOf(this, {
                            left: 1,
                            scrollLeft: 1
                        }), this.left(-h), void(e.onKill && e.onKill());
                        (r = -r) < 0 ? (d = r - .5 | 0, r = 0) : r > v ? (d = r - v | 0, r = v) : d = 0, (d || o) && (this._skip || (l[Tu] = s + -d + "px," + -f + a), d + m >= 0 && (l.paddingRight = d + m + "px")), t.scrollLeft = 0 | r, h = t.scrollLeft
                    }, this.top = function(r, n) {
                        if (!arguments.length) return -(t.scrollTop + f);
                        var i = t.scrollTop - p,
                            o = f;
                        if ((i > 2 || i < -2) && !n) return p = t.scrollTop, Qa.killTweensOf(this, {
                            top: 1,
                            scrollTop: 1
                        }), this.top(-p), void(e.onKill && e.onKill());
                        (r = -r) < 0 ? (f = r - .5 | 0, r = 0) : r > y ? (f = r - y | 0, r = y) : f = 0, (f || o) && (this._skip || (l[Tu] = s + -d + "px," + -f + a)), t.scrollTop = 0 | r, p = t.scrollTop
                    }, this.maxScrollTop = function() {
                        return y
                    }, this.maxScrollLeft = function() {
                        return v
                    }, this.disable = function() {
                        for (c = u.firstChild; c;) o = c.nextSibling, t.appendChild(c), c = o;
                        t === u.parentNode && t.removeChild(u)
                    }, this.enable = function() {
                        if ((c = t.firstChild) !== u) {
                            for (; c;) o = c.nextSibling, u.appendChild(c), c = o;
                            t.appendChild(u), this.calibrate()
                        }
                    }, this.calibrate = function(e) {
                        var o, s, a, c = t.clientWidth === r;
                        p = t.scrollTop, h = t.scrollLeft, c && t.clientHeight === n && u.offsetHeight === i && g === t.scrollWidth && D === t.scrollHeight && !e || ((f || d) && (s = this.left(), a = this.top(), this.left(-t.scrollLeft), this.top(-t.scrollTop)), o = al(t), c && !e || (l.display = "block", l.width = "auto", l.paddingRight = "0px", (m = Math.max(0, t.scrollWidth - t.clientWidth)) && (m += parseFloat(o.paddingLeft) + (yu ? parseFloat(o.paddingRight) : 0))), l.display = "inline-block", l.position = "relative", l.overflow = "visible", l.verticalAlign = "top", l.boxSizing = "content-box", l.width = "100%", l.paddingRight = m + "px", yu && (l.paddingBottom = o.paddingBottom), r = t.clientWidth, n = t.clientHeight, g = t.scrollWidth, D = t.scrollHeight, v = t.scrollWidth - r, y = t.scrollHeight - n, i = u.offsetHeight, l.display = "block", (s || a) && (this.left(s), this.top(a)))
                    }, this.content = u, this.element = t, this._skip = !1, this.enable()
                },
                yl = function(t) {
                    if (xu() && document.body) {
                        var e = window && window.navigator;
                        Ja = window, tu = document, eu = tu.documentElement, ru = tu.body, nu = Ou("div"), gu = !!window.PointerEvent, (iu = Ou("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", hu = "grab" === iu.style.cursor ? "grab" : "move", du = e && -1 !== e.userAgent.toLowerCase().indexOf("android"), lu = "ontouchstart" in eu && "orientation" in Ja || e && (e.MaxTouchPoints > 0 || e.msMaxTouchPoints > 0), n = Ou("div"), o = (i = Ou("div")).style, s = ru, o.display = "inline-block", o.position = "relative", n.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", n.appendChild(i), s.appendChild(n), r = i.offsetHeight + 18 > n.scrollHeight, s.removeChild(n), yu = r, cu = function(t) {
                            for (var e = t.split(","), r = (("onpointerdown" in nu ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in nu ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(",")), n = {}, i = 4; --i > -1;) n[e[i]] = r[i], n[r[i]] = e[i];
                            try {
                                eu.addEventListener("test", null, Object.defineProperty({}, "passive", {
                                    get: function() {
                                        uu = 1
                                    }
                                }))
                            } catch (t) {}
                            return n
                        }("touchstart,touchmove,touchend,touchcancel"), Gu(tu, "touchcancel", Fu), Gu(Ja, "touchmove", Fu), ru && ru.addEventListener("touchstart", Fu), Gu(tu, "contextmenu", function() {
                            for (var t in Iu) Iu[t].isPressed && Iu[t].endDrag()
                        }), Qa = ou = bu()
                    }
                    var r, n, i, o, s;
                    Qa ? (pu = Qa.plugins.inertia, Du = Qa.core.context || function() {}, su = Qa.utils.checkPrefix, Tu = su(Tu), Su = su(Su), au = Qa.utils.toArray, mu = Qa.core.getStyleSaver, vu = !!su("perspective")) : t && console.warn("Please gsap.registerPlugin(Draggable)")
                },
                _l = function(t) {
                    var e, r;

                    function n(e, r) {
                        var i;
                        i = t.call(this) || this, ou || yl(1), e = au(e)[0], i.styles = mu && mu(e, "transform,left,top"), pu || (pu = Qa.plugins.inertia), i.vars = r = qu(r || {}), i.target = e, i.x = i.y = i.rotation = 0, i.dragResistance = parseFloat(r.dragResistance) || 0, i.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0, i.lockAxis = r.lockAxis, i.autoScroll = r.autoScroll || 0, i.lockedAxis = null, i.allowEventDefault = !!r.allowEventDefault, Qa.getProperty(e, "x");
                        var o, s, a, u, l, c, f, d, p, h, g, D, m, v, y, _, x, b, w, C, E, F, T, S, A, M, O, k, P, L, B, R, I, Y = (r.type || "x,y").toLowerCase(),
                            z = ~Y.indexOf("x") || ~Y.indexOf("y"),
                            X = -1 !== Y.indexOf("rotation"),
                            N = X ? "rotation" : z ? "x" : "left",
                            j = z ? "y" : "top",
                            q = !(!~Y.indexOf("x") && !~Y.indexOf("left") && "scroll" !== Y),
                            H = !(!~Y.indexOf("y") && !~Y.indexOf("top") && "scroll" !== Y),
                            W = r.minimumMovement || 2,
                            U = Za(i),
                            V = au(r.trigger || r.handle || e),
                            G = {},
                            $ = 0,
                            K = !1,
                            Z = r.autoScrollMarginTop || 40,
                            Q = r.autoScrollMarginRight || 40,
                            J = r.autoScrollMarginBottom || 40,
                            tt = r.autoScrollMarginLeft || 40,
                            et = r.clickableTest || gl,
                            rt = 0,
                            nt = e._gsap || Qa.core.getCache(e),
                            it = ml(e),
                            ot = function(t, r) {
                                return parseFloat(nt.get(e, t, r))
                            },
                            st = e.ownerDocument || tu,
                            at = function(t) {
                                return Ku(t), t.stopImmediatePropagation && t.stopImmediatePropagation(), !1
                            },
                            ut = function t(r) {
                                if (U.autoScroll && U.isDragging && (K || x)) {
                                    var n, i, o, a, u, l, c, f, p = e,
                                        h = 15 * U.autoScroll;
                                    for (K = !1, ju.scrollTop = null != Ja.pageYOffset ? Ja.pageYOffset : null != st.documentElement.scrollTop ? st.documentElement.scrollTop : st.body.scrollTop, ju.scrollLeft = null != Ja.pageXOffset ? Ja.pageXOffset : null != st.documentElement.scrollLeft ? st.documentElement.scrollLeft : st.body.scrollLeft, a = U.pointerX - ju.scrollLeft, u = U.pointerY - ju.scrollTop; p && !i;) n = (i = nl(p.parentNode)) ? ju : p.parentNode, o = i ? {
                                        bottom: Math.max(eu.clientHeight, Ja.innerHeight || 0),
                                        right: Math.max(eu.clientWidth, Ja.innerWidth || 0),
                                        left: 0,
                                        top: 0
                                    } : n.getBoundingClientRect(), l = c = 0, H && ((f = n._gsMaxScrollY - n.scrollTop) < 0 ? c = f : u > o.bottom - J && f ? (K = !0, c = Math.min(f, h * (1 - Math.max(0, o.bottom - u) / J) | 0)) : u < o.top + Z && n.scrollTop && (K = !0, c = -Math.min(n.scrollTop, h * (1 - Math.max(0, u - o.top) / Z) | 0)), c && (n.scrollTop += c)), q && ((f = n._gsMaxScrollX - n.scrollLeft) < 0 ? l = f : a > o.right - Q && f ? (K = !0, l = Math.min(f, h * (1 - Math.max(0, o.right - a) / Q) | 0)) : a < o.left + tt && n.scrollLeft && (K = !0, l = -Math.min(n.scrollLeft, h * (1 - Math.max(0, a - o.left) / tt) | 0)), l && (n.scrollLeft += l)), i && (l || c) && (Ja.scrollTo(n.scrollLeft, n.scrollTop), xt(U.pointerX + l, U.pointerY + c)), p = n
                                }
                                if (x) {
                                    var g = U.x,
                                        D = U.y;
                                    X ? (U.deltaX = g - parseFloat(nt.rotation), U.rotation = g, nt.rotation = g + "deg", nt.renderTransform(1, nt)) : s ? (H && (U.deltaY = D - s.top(), s.top(D)), q && (U.deltaX = g - s.left(), s.left(g))) : z ? (H && (U.deltaY = D - parseFloat(nt.y), nt.y = D + "px"), q && (U.deltaX = g - parseFloat(nt.x), nt.x = g + "px"), nt.renderTransform(1, nt)) : (H && (U.deltaY = D - parseFloat(e.style.top || 0), e.style.top = D + "px"), q && (U.deltaX = g - parseFloat(e.style.left || 0), e.style.left = g + "px")), !d || r || k || (k = !0, !1 === cl(U, "drag", "onDrag") && (q && (U.x -= U.deltaX), H && (U.y -= U.deltaY), t(!0)), k = !1)
                                }
                                x = !1
                            },
                            lt = function(t, r) {
                                var n, i, o = U.x,
                                    a = U.y;
                                e._gsap || (nt = Qa.core.getCache(e)), nt.uncache && Qa.getProperty(e, "x"), z ? (U.x = parseFloat(nt.x), U.y = parseFloat(nt.y)) : X ? U.x = U.rotation = Au(parseFloat(nt.rotation)) : s ? (U.y = s.top(), U.x = s.left()) : (U.y = parseFloat(e.style.top || (i = al(e)) && i.top) || 0, U.x = parseFloat(e.style.left || (i || {}).left) || 0), (w || C || E) && !r && (U.isDragging || U.isThrowing) && (E && (Nu.x = U.x, Nu.y = U.y, (n = E(Nu)).x !== U.x && (U.x = n.x, x = !0), n.y !== U.y && (U.y = n.y, x = !0)), w && (n = w(U.x)) !== U.x && (U.x = n, X && (U.rotation = n), x = !0), C && ((n = C(U.y)) !== U.y && (U.y = n), x = !0)), x && ut(!0), t || (U.deltaX = U.x - o, U.deltaY = U.y - a, cl(U, "throwupdate", "onThrowUpdate"))
                            },
                            ct = function(t, e, r, n) {
                                return null == e && (e = -Pu), null == r && (r = Pu), wu(t) ? function(i) {
                                    var o = U.isPressed ? 1 - U.edgeResistance : 1;
                                    return t.call(U, (i > r ? r + (i - r) * o : i < e ? e + (i - e) * o : i) * n) * n
                                } : Mu(t) ? function(n) {
                                    for (var i, o, s = t.length, a = 0, u = Pu; --s > -1;)(o = (i = t[s]) - n) < 0 && (o = -o), o < u && i >= e && i <= r && (a = s, u = o);
                                    return t[a]
                                } : isNaN(t) ? function(t) {
                                    return t
                                } : function() {
                                    return t * n
                                }
                            },
                            ft = function() {
                                var t, n, i, o;
                                f = !1, s ? (s.calibrate(), U.minX = g = -s.maxScrollLeft(), U.minY = m = -s.maxScrollTop(), U.maxX = h = U.maxY = D = 0, f = !0) : r.bounds && (t = fl(r.bounds, e.parentNode), X ? (U.minX = g = t.left, U.maxX = h = t.left + t.width, U.minY = m = U.maxY = D = 0) : Eu(r.bounds.maxX) && Eu(r.bounds.maxY) ? (n = fl(e, e.parentNode), U.minX = g = Math.round(ot(N, "px") + t.left - n.left), U.minY = m = Math.round(ot(j, "px") + t.top - n.top), U.maxX = h = Math.round(g + (t.width - n.width)), U.maxY = D = Math.round(m + (t.height - n.height))) : (t = r.bounds, U.minX = g = t.minX, U.minY = m = t.minY, U.maxX = h = t.maxX, U.maxY = D = t.maxY), g > h && (U.minX = h, U.maxX = h = g, g = U.minX), m > D && (U.minY = D, U.maxY = D = m, m = U.minY), X && (U.minRotation = g, U.maxRotation = h), f = !0), r.liveSnap && (i = !0 === r.liveSnap ? r.snap || {} : r.liveSnap, o = Mu(i) || wu(i), X ? (w = ct(o ? i : i.rotation, g, h, 1), C = null) : i.points ? E = function(t, e, r, n, i, o, s) {
                                    return o = o && o < Pu ? o * o : Pu, wu(t) ? function(a) {
                                        var u, l, c, f = U.isPressed ? 1 - U.edgeResistance : 1,
                                            d = a.x,
                                            p = a.y;
                                        return a.x = d = d > r ? r + (d - r) * f : d < e ? e + (d - e) * f : d, a.y = p = p > i ? i + (p - i) * f : p < n ? n + (p - n) * f : p, (u = t.call(U, a)) !== a && (a.x = u.x, a.y = u.y), 1 !== s && (a.x *= s, a.y *= s), o < Pu && (l = a.x - d) * l + (c = a.y - p) * c > o && (a.x = d, a.y = p), a
                                    } : Mu(t) ? function(e) {
                                        for (var r, n, i, s, a = t.length, u = 0, l = Pu; --a > -1;)(s = (r = (i = t[a]).x - e.x) * r + (n = i.y - e.y) * n) < l && (u = a, l = s);
                                        return l <= o ? t[u] : e
                                    } : function(t) {
                                        return t
                                    }
                                }(o ? i : i.points, g, h, m, D, i.radius, s ? -1 : 1) : (q && (w = ct(o ? i : i.x || i.left || i.scrollLeft, g, h, s ? -1 : 1)), H && (C = ct(o ? i : i.y || i.top || i.scrollTop, m, D, s ? -1 : 1))))
                            },
                            dt = function() {
                                U.isThrowing = !1, cl(U, "throwcomplete", "onThrowComplete")
                            },
                            pt = function() {
                                U.isThrowing = !1
                            },
                            ht = function(t, n) {
                                var i, o, a, u;
                                t && pu ? (!0 === t && (i = r.snap || r.liveSnap || {}, o = Mu(i) || wu(i), t = {
                                    resistance: (r.throwResistance || r.resistance || 1e3) / (X ? 10 : 1)
                                }, X ? t.rotation = hl(U, o ? i : i.rotation, h, g, 1, n) : (q && (t[N] = hl(U, o ? i : i.points || i.x || i.left, h, g, s ? -1 : 1, n || "x" === U.lockedAxis)), H && (t[j] = hl(U, o ? i : i.points || i.y || i.top, D, m, s ? -1 : 1, n || "y" === U.lockedAxis)), (i.points || Mu(i) && Cu(i[0])) && (t.linkedProps = N + "," + j, t.radius = i.radius))), U.isThrowing = !0, u = isNaN(r.overshootTolerance) ? 1 === r.edgeResistance ? 0 : 1 - U.edgeResistance + .2 : r.overshootTolerance, t.duration || (t.duration = {
                                    max: Math.max(r.minDuration || 0, "maxDuration" in r ? r.maxDuration : 2),
                                    min: isNaN(r.minDuration) ? 0 === u || Cu(t) && t.resistance > 1e3 ? 0 : .5 : r.minDuration,
                                    overshoot: u
                                }), U.tween = a = Qa.to(s || e, {
                                    inertia: t,
                                    data: "_draggable",
                                    inherit: !1,
                                    onComplete: dt,
                                    onInterrupt: pt,
                                    onUpdate: r.fastMode ? cl : lt,
                                    onUpdateParams: r.fastMode ? [U, "onthrowupdate", "onThrowUpdate"] : i && i.radius ? [!1, !0] : []
                                }), r.fastMode || (s && (s._skip = !0), a.render(1e9, !0, !0), lt(!0, !0), U.endX = U.x, U.endY = U.y, X && (U.endRotation = U.x), a.play(0), lt(!0, !0), s && (s._skip = !1))) : f && U.applyBounds()
                            },
                            gt = function(t) {
                                var r, n = S;
                                S = Ka(e.parentNode, !0), t && U.isPressed && !S.equals(n || new $a) && (r = n.inverse().apply({
                                    x: a,
                                    y: u
                                }), S.apply(r, r), a = r.x, u = r.y), S.equals(Lu) && (S = null)
                            },
                            Dt = function() {
                                var t, r, n, i = 1 - U.edgeResistance,
                                    o = it ? tl(st) : 0,
                                    d = it ? Ju(st) : 0;
                                z && (nt.x = ot(N, "px") + "px", nt.y = ot(j, "px") + "px", nt.renderTransform()), gt(!1), dl.x = U.pointerX - o, dl.y = U.pointerY - d, S && S.apply(dl, dl), a = dl.x, u = dl.y, x && (xt(U.pointerX, U.pointerY), ut(!0)), R = Ka(e), s ? (ft(), c = s.top(), l = s.left()) : (mt() ? (lt(!0, !0), ft()) : U.applyBounds(), X ? (t = e.ownerSVGElement ? [nt.xOrigin - e.getBBox().x, nt.yOrigin - e.getBBox().y] : (al(e)[Su] || "0 0").split(" "), _ = U.rotationOrigin = Ka(e).apply({
                                    x: parseFloat(t[0]) || 0,
                                    y: parseFloat(t[1]) || 0
                                }), lt(!0, !0), r = U.pointerX - _.x - o, n = _.y - U.pointerY + d, l = U.x, c = U.y = Math.atan2(n, r) * ku) : (c = ot(j, "px"), l = ot(N, "px"))), f && i && (l > h ? l = h + (l - h) / i : l < g && (l = g - (g - l) / i), X || (c > D ? c = D + (c - D) / i : c < m && (c = m - (m - c) / i))), U.startX = l = Au(l), U.startY = c = Au(c)
                            },
                            mt = function() {
                                return U.tween && U.tween.isActive()
                            },
                            vt = function() {
                                !iu.parentNode || mt() || U.isDragging || iu.parentNode.removeChild(iu)
                            },
                            yt = function(t, i) {
                                var l;
                                if (!o || U.isPressed || !t || !("mousedown" !== t.type && "pointerdown" !== t.type || i) && Bu() - rt < 30 && cu[U.pointerEvent.type]) B && t && o && Ku(t);
                                else {
                                    if (A = mt(), I = !1, U.pointerEvent = t, cu[t.type] ? (T = ~t.type.indexOf("touch") ? t.currentTarget || t.target : st, Gu(T, "touchend", bt), Gu(T, "touchmove", _t), Gu(T, "touchcancel", bt), Gu(st, "touchstart", Qu)) : (T = null, Gu(st, "mousemove", _t)), O = null, gu && T || (Gu(st, "mouseup", bt), t && t.target && Gu(t.target, "mouseup", bt)), F = et.call(U, t.target) && !1 === r.dragClickables && !i) return Gu(t.target, "change", bt), cl(U, "pressInit", "onPressInit"), cl(U, "press", "onPress"), Dl(V, !0), void(B = !1);
                                    var c;
                                    if (M = !(!T || q === H || !1 === U.vars.allowNativeTouchScrolling || U.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2)) && (q ? "y" : "x"), (B = !M && !U.allowEventDefault) && (Ku(t), Gu(Ja, "touchforcechange", Ku)), t.changedTouches ? (t = v = t.changedTouches[0], y = t.identifier) : t.pointerId ? y = t.pointerId : v = y = null, _u++, c = ut, Ru.push(c), 1 === Ru.length && Qa.ticker.add(Wu), u = U.pointerY = t.pageY, a = U.pointerX = t.pageX, cl(U, "pressInit", "onPressInit"), (M || U.autoScroll) && ol(e.parentNode), !e.parentNode || !U.autoScroll || s || X || !e.parentNode._gsMaxScrollX || iu.parentNode || e.getBBox || (iu.style.width = e.parentNode.scrollWidth + "px", e.parentNode.appendChild(iu)), Dt(), U.tween && U.tween.kill(), U.isThrowing = !1, Qa.killTweensOf(s || e, G, !0), s && Qa.killTweensOf(e, {
                                            scrollTo: 1
                                        }, !0), U.tween = U.lockedAxis = null, (r.zIndexBoost || !X && !s && !1 !== r.zIndexBoost) && (e.style.zIndex = n.zIndex++), U.isPressed = !0, d = !(!r.onDrag && !U._listeners.drag), p = !(!r.onMove && !U._listeners.move), !1 !== r.cursor || r.activeCursor)
                                        for (l = V.length; --l > -1;) Qa.set(V[l], {
                                            cursor: r.activeCursor || r.cursor || ("grab" === hu ? "grabbing" : hu)
                                        });
                                    cl(U, "press", "onPress"), pu && pu.track(s || e, z ? "x,y" : X ? "rotation" : "top,left")
                                }
                            },
                            _t = function(t) {
                                var r, n, i, s, l, c, f = t;
                                if (o && !fu && U.isPressed && t) {
                                    if (U.pointerEvent = t, r = t.changedTouches) {
                                        if ((t = r[0]) !== v && t.identifier !== y) {
                                            for (s = r.length; --s > -1 && (t = r[s]).identifier !== y && t.target !== e;);
                                            if (s < 0) return
                                        }
                                    } else if (t.pointerId && y && t.pointerId !== y) return;
                                    T && M && !O && (dl.x = t.pageX - (it ? tl(st) : 0), dl.y = t.pageY - (it ? Ju(st) : 0), S && S.apply(dl, dl), n = dl.x, i = dl.y, ((l = Math.abs(n - a)) !== (c = Math.abs(i - u)) && (l > W || c > W) || du && M === O) && (O = l > c && q ? "x" : "y", M && O !== M && Gu(Ja, "touchforcechange", Ku), !1 !== U.vars.lockAxisOnTouchScroll && q && H && (U.lockedAxis = "x" === O ? "y" : "x", wu(U.vars.onLockAxis) && U.vars.onLockAxis.call(U, f)), du && M === O)) ? bt(f) : (U.allowEventDefault || M && (!O || M === O) || !1 === f.cancelable ? B && (B = !1) : (Ku(f), B = !0), U.autoScroll && (K = !0), xt(t.pageX, t.pageY, p))
                                } else B && t && o && Ku(t)
                            },
                            xt = function(t, e, r) {
                                var n, i, o, s, d, p, v = 1 - U.dragResistance,
                                    y = 1 - U.edgeResistance,
                                    b = U.pointerX,
                                    F = U.pointerY,
                                    T = c,
                                    A = U.x,
                                    M = U.y,
                                    O = U.endX,
                                    k = U.endY,
                                    P = U.endRotation,
                                    L = x;
                                U.pointerX = t, U.pointerY = e, it && (t -= tl(st), e -= Ju(st)), X ? (s = Au(Math.atan2(_.y - e, t - _.x) * ku), (d = U.y - s) > 180 ? (c -= 360, U.y = s) : d < -180 && (c += 360, U.y = s), S && (p = t * S.a + e * S.c + S.e, e = t * S.b + e * S.d + S.f, t = p), U.x !== l || Math.max(Math.abs(a - t), Math.abs(u - e)) > W ? (U.y = s, o = Au(l + (c - s) * v)) : o = l) : (S && (p = t * S.a + e * S.c + S.e, e = t * S.b + e * S.d + S.f, t = p), (i = e - u) < W && i > -W && (i = 0), (n = t - a) < W && n > -W && (n = 0), (U.lockAxis || U.lockedAxis) && (n || i) && ((p = U.lockedAxis) || (U.lockedAxis = p = q && Math.abs(n) > Math.abs(i) ? "y" : H ? "x" : null, p && wu(U.vars.onLockAxis) && U.vars.onLockAxis.call(U, U.pointerEvent)), "y" === p ? i = 0 : "x" === p && (n = 0)), o = Au(l + n * v), s = Au(c + i * v)), (w || C || E) && (U.x !== o || U.y !== s && !X) && (E && (Nu.x = o, Nu.y = s, p = E(Nu), o = Au(p.x), s = Au(p.y)), w && (o = Au(w(o))), C && (s = Au(C(s)))), f && (o > h ? o = h + Math.round((o - h) * y) : o < g && (o = g + Math.round((o - g) * y)), X || (s > D ? s = Math.round(D + (s - D) * y) : s < m && (s = Math.round(m + (s - m) * y)))), (U.x !== o || U.y !== s && !X) && (X ? (U.endRotation = U.x = U.endX = Au(o), x = !0) : (H && (U.y = U.endY = s, x = !0), q && (U.x = U.endX = o, x = !0)), r && !1 === cl(U, "move", "onMove") ? (U.pointerX = b, U.pointerY = F, c = T, U.x = A, U.y = M, U.endX = O, U.endY = k, U.endRotation = P, x = L) : !U.isDragging && U.isPressed && (U.isDragging = I = !0, cl(U, "dragstart", "onDragStart")))
                            },
                            bt = function t(n, i) {
                                if (o && U.isPressed && (!n || null == y || i || !(n.pointerId && n.pointerId !== y && n.target !== e || n.changedTouches && ! function(t, e) {
                                        for (var r = t.length; r--;)
                                            if (t[r].identifier === e) return !0
                                    }(n.changedTouches, y)))) {
                                    U.isPressed = !1;
                                    var s, a, u, l, c, f = n,
                                        d = U.isDragging,
                                        p = U.vars.allowContextMenu && n && (n.ctrlKey || n.which > 2),
                                        h = Qa.delayedCall(.001, vt);
                                    if (T ? ($u(T, "touchend", t), $u(T, "touchmove", _t), $u(T, "touchcancel", t), $u(st, "touchstart", Qu)) : $u(st, "mousemove", _t), $u(Ja, "touchforcechange", Ku), gu && T || ($u(st, "mouseup", t), n && n.target && $u(n.target, "mouseup", t)), x = !1, d && ($ = Xu = Bu(), U.isDragging = !1), Vu(ut), F && !p) return n && ($u(n.target, "change", t), U.pointerEvent = f), Dl(V, !1), cl(U, "release", "onRelease"), cl(U, "click", "onClick"), void(F = !1);
                                    for (a = V.length; --a > -1;) sl(V[a], "cursor", r.cursor || (!1 !== r.cursor ? hu : null));
                                    if (_u--, n) {
                                        if ((s = n.changedTouches) && (n = s[0]) !== v && n.identifier !== y) {
                                            for (a = s.length; --a > -1 && (n = s[a]).identifier !== y && n.target !== e;);
                                            if (a < 0 && !i) return
                                        }
                                        U.pointerEvent = f, U.pointerX = n.pageX, U.pointerY = n.pageY
                                    }
                                    return p && f ? (Ku(f), B = !0, cl(U, "release", "onRelease")) : f && !d ? (B = !1, A && (r.snap || r.bounds) && ht(r.inertia || r.throwProps), cl(U, "release", "onRelease"), du && "touchmove" === f.type || -1 !== f.type.indexOf("cancel") || (cl(U, "click", "onClick"), Bu() - rt < 300 && cl(U, "doubleclick", "onDoubleClick"), l = f.target || e, rt = Bu(), c = function() {
                                        rt === P || !U.enabled() || U.isPressed || f.defaultPrevented || (l.click ? l.click() : st.createEvent && ((u = st.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, Ja, 1, U.pointerEvent.screenX, U.pointerEvent.screenY, U.pointerX, U.pointerY, !1, !1, !1, !1, 0, null), l.dispatchEvent(u)))
                                    }, du || f.defaultPrevented || Qa.delayedCall(.05, c))) : (ht(r.inertia || r.throwProps), U.allowEventDefault || !f || !1 === r.dragClickables && et.call(U, f.target) || !d || M && (!O || M !== O) || !1 === f.cancelable ? B = !1 : (B = !0, Ku(f)), cl(U, "release", "onRelease")), mt() && h.duration(U.tween.duration()), d && cl(U, "dragend", "onDragEnd"), !0
                                }
                                B && n && o && Ku(n)
                            },
                            wt = function(t) {
                                if (t && U.isDragging && !s) {
                                    var r = t.target || e.parentNode,
                                        n = r.scrollLeft - r._gsScrollX,
                                        i = r.scrollTop - r._gsScrollY;
                                    (n || i) && (S ? (a -= n * S.a + i * S.c, u -= i * S.d + n * S.b) : (a -= n, u -= i), r._gsScrollX += n, r._gsScrollY += i, xt(U.pointerX, U.pointerY))
                                }
                            },
                            Ct = function(t) {
                                var e = Bu(),
                                    r = e - rt < 100,
                                    n = e - $ < 50,
                                    i = r && P === rt,
                                    o = U.pointerEvent && U.pointerEvent.defaultPrevented,
                                    s = r && L === rt,
                                    a = t.isTrusted || null == t.isTrusted && r && i;
                                if ((i || n && !1 !== U.vars.suppressClickOnDrag) && t.stopImmediatePropagation && t.stopImmediatePropagation(), r && (!U.pointerEvent || !U.pointerEvent.defaultPrevented) && (!i || a && !s)) return a && i && (L = rt), void(P = rt);
                                (U.isPressed || n || r) && (a && t.detail && r && !o || Ku(t)), r || n || I || (t && t.target && (U.pointerEvent = t), cl(U, "click", "onClick"))
                            },
                            Et = function(t) {
                                return S ? {
                                    x: t.x * S.a + t.y * S.c + S.e,
                                    y: t.x * S.b + t.y * S.d + S.f
                                } : {
                                    x: t.x,
                                    y: t.y
                                }
                            };
                        return (b = n.get(e)) && b.kill(), i.startDrag = function(t, r) {
                            var n, i, o, s;
                            yt(t || U.pointerEvent, !0), r && !U.hitTest(t || U.pointerEvent) && (n = ll(t || U.pointerEvent), i = ll(e), o = Et({
                                x: n.left + n.width / 2,
                                y: n.top + n.height / 2
                            }), s = Et({
                                x: i.left + i.width / 2,
                                y: i.top + i.height / 2
                            }), a -= o.x - s.x, u -= o.y - s.y), U.isDragging || (U.isDragging = I = !0, cl(U, "dragstart", "onDragStart"))
                        }, i.drag = _t, i.endDrag = function(t) {
                            return bt(t || U.pointerEvent, !0)
                        }, i.timeSinceDrag = function() {
                            return U.isDragging ? 0 : (Bu() - $) / 1e3
                        }, i.timeSinceClick = function() {
                            return (Bu() - rt) / 1e3
                        }, i.hitTest = function(t, e) {
                            return n.hitTest(U.target, t, e)
                        }, i.getDirection = function(t, r) {
                            var n, i, o, s, a, u, f = "velocity" === t && pu ? t : Cu(t) && !X ? "element" : "start";
                            return "element" === f && (a = ll(U.target), u = ll(t)), n = "start" === f ? U.x - l : "velocity" === f ? pu.getVelocity(e, N) : a.left + a.width / 2 - (u.left + u.width / 2), X ? n < 0 ? "counter-clockwise" : "clockwise" : (r = r || 2, i = "start" === f ? U.y - c : "velocity" === f ? pu.getVelocity(e, j) : a.top + a.height / 2 - (u.top + u.height / 2), s = (o = Math.abs(n / i)) < 1 / r ? "" : n < 0 ? "left" : "right", o < r && ("" !== s && (s += "-"), s += i < 0 ? "up" : "down"), s)
                        }, i.applyBounds = function(t, n) {
                            var i, o, s, a, u, l;
                            if (t && r.bounds !== t) return r.bounds = t, U.update(!0, n);
                            if (lt(!0), ft(), f && !mt()) {
                                if (i = U.x, o = U.y, i > h ? i = h : i < g && (i = g), o > D ? o = D : o < m && (o = m), (U.x !== i || U.y !== o) && (s = !0, U.x = U.endX = i, X ? U.endRotation = i : U.y = U.endY = o, x = !0, ut(!0), U.autoScroll && !U.isDragging))
                                    for (ol(e.parentNode), a = e, ju.scrollTop = null != Ja.pageYOffset ? Ja.pageYOffset : null != st.documentElement.scrollTop ? st.documentElement.scrollTop : st.body.scrollTop, ju.scrollLeft = null != Ja.pageXOffset ? Ja.pageXOffset : null != st.documentElement.scrollLeft ? st.documentElement.scrollLeft : st.body.scrollLeft; a && !l;) u = (l = nl(a.parentNode)) ? ju : a.parentNode, H && u.scrollTop > u._gsMaxScrollY && (u.scrollTop = u._gsMaxScrollY), q && u.scrollLeft > u._gsMaxScrollX && (u.scrollLeft = u._gsMaxScrollX), a = u;
                                U.isThrowing && (s || U.endX > h || U.endX < g || U.endY > D || U.endY < m) && ht(r.inertia || r.throwProps, s)
                            }
                            return U
                        }, i.update = function(t, r, n) {
                            if (r && U.isPressed) {
                                if (X) U.x = U.y = Au(parseFloat(nt.rotation));
                                else {
                                    var i = Ka(e),
                                        o = R.apply({
                                            x: U.x - l,
                                            y: U.y - c
                                        }),
                                        s = Ka(e.parentNode, !0);
                                    s.apply({
                                        x: i.e - o.x,
                                        y: i.f - o.y
                                    }, o), U.x = Au(U.x - (o.x - s.e)), U.y = Au(U.y - (o.y - s.f))
                                }
                                ut(!0), Dt()
                            }
                            var a = U.x,
                                u = U.y;
                            return gt(!r), t ? U.applyBounds() : (x && n && ut(!0), lt(!0)), r && (xt(U.pointerX, U.pointerY), x && ut(!0)), U.isPressed && !r && (q && Math.abs(a - U.x) > .01 || H && Math.abs(u - U.y) > .01 && !X) && Dt(), U.autoScroll && (ol(e.parentNode, U.isDragging), K = U.isDragging, ut(!0), rl(e, wt), el(e, wt)), U
                        }, i.enable = function(t) {
                            var n, i, a, u = {
                                lazy: !0
                            };
                            if (!1 !== r.cursor && (u.cursor = r.cursor || hu), Qa.utils.checkPrefix("touchCallout") && (u.touchCallout = "none"), "soft" !== t) {
                                for (Hu(V, q === H ? "none" : r.allowNativeTouchScrolling && e.scrollHeight === e.clientHeight == (e.scrollWidth === e.clientHeight) || r.allowEventDefault ? "manipulation" : q ? "pan-y" : "pan-x"), i = V.length; --i > -1;) a = V[i], gu || Gu(a, "mousedown", yt), Gu(a, "touchstart", yt), Gu(a, "click", Ct, !0), Qa.set(a, u), a.getBBox && a.ownerSVGElement && q !== H && Qa.set(a.ownerSVGElement, {
                                    touchAction: r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : q ? "pan-y" : "pan-x"
                                }), r.allowContextMenu || Gu(a, "contextmenu", at);
                                Dl(V, !1)
                            }
                            return el(e, wt), o = !0, pu && "soft" !== t && pu.track(s || e, z ? "x,y" : X ? "rotation" : "top,left"), e._gsDragID = n = e._gsDragID || "d" + Yu++, Iu[n] = U, s && (s.enable(), s.element._gsDragID = n), (r.bounds || X) && Dt(), r.bounds && U.applyBounds(), U
                        }, i.disable = function(t) {
                            for (var r, n = U.isDragging, i = V.length; --i > -1;) sl(V[i], "cursor", null);
                            if ("soft" !== t) {
                                for (Hu(V, null), i = V.length; --i > -1;) r = V[i], sl(r, "touchCallout", null), $u(r, "mousedown", yt), $u(r, "touchstart", yt), $u(r, "click", Ct, !0), $u(r, "contextmenu", at);
                                Dl(V, !0), T && ($u(T, "touchcancel", bt), $u(T, "touchend", bt), $u(T, "touchmove", _t)), $u(st, "mouseup", bt), $u(st, "mousemove", _t)
                            }
                            return rl(e, wt), o = !1, pu && "soft" !== t && (pu.untrack(s || e, z ? "x,y" : X ? "rotation" : "top,left"), U.tween && U.tween.kill()), s && s.disable(), Vu(ut), U.isDragging = U.isPressed = F = !1, n && cl(U, "dragend", "onDragEnd"), U
                        }, i.enabled = function(t, e) {
                            return arguments.length ? t ? U.enable(e) : U.disable(e) : o
                        }, i.kill = function() {
                            return U.isThrowing = !1, U.tween && U.tween.kill(), U.disable(), Qa.set(V, {
                                clearProps: "userSelect"
                            }), delete Iu[e._gsDragID], U
                        }, i.revert = function() {
                            this.kill(), this.styles && this.styles.revert()
                        }, ~Y.indexOf("scroll") && (s = i.scrollProxy = new vl(e, function(t, e) {
                            for (var r in e) r in t || (t[r] = e[r]);
                            return t
                        }({
                            onKill: function() {
                                U.isPressed && bt(null)
                            }
                        }, r)), e.style.overflowY = H && !lu ? "auto" : "hidden", e.style.overflowX = q && !lu ? "auto" : "hidden", e = s.content), X ? G.rotation = 1 : (q && (G[N] = 1), H && (G[j] = 1)), nt.force3D = !("force3D" in r) || r.force3D, Du(Za(i)), i.enable(), i
                    }
                    return r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, n.register = function(t) {
                        Qa = t, yl()
                    }, n.create = function(t, e) {
                        return ou || yl(!0), au(t).map(function(t) {
                            return new n(t, e)
                        })
                    }, n.get = function(t) {
                        return Iu[(au(t)[0] || {})._gsDragID]
                    }, n.timeSinceDrag = function() {
                        return (Bu() - Xu) / 1e3
                    }, n.hitTest = function(t, e, r) {
                        if (t === e) return !1;
                        var n, i, o, s = ll(t),
                            a = ll(e),
                            u = s.top,
                            l = s.left,
                            c = s.right,
                            f = s.bottom,
                            d = s.width,
                            p = s.height,
                            h = a.left > c || a.right < l || a.top > f || a.bottom < u;
                        return h || !r ? !h : (o = -1 !== (r + "").indexOf("%"), r = parseFloat(r) || 0, (n = {
                            left: Math.max(l, a.left),
                            top: Math.max(u, a.top)
                        }).width = Math.min(c, a.right) - n.left, n.height = Math.min(f, a.bottom) - n.top, !(n.width < 0 || n.height < 0) && (o ? (r *= .01, (i = n.width * n.height) >= d * p * r || i >= a.width * a.height * r) : n.width > r && n.height > r))
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
            ! function(t, e) {
                for (var r in e) r in t || (t[r] = e[r])
            }(_l.prototype, {
                pointerX: 0,
                pointerY: 0,
                startX: 0,
                startY: 0,
                deltaX: 0,
                deltaY: 0,
                isDragging: !1,
                isPressed: !1
            }), _l.zIndex = 1e3, _l.version = "3.14.2", bu() && Qa.registerPlugin(_l), za.registerPlugin(_l), za.registerPlugin(da), Modernizr.touchevents || da.normalizeScroll({
                type: "wheel"
            }), window.addEventListener("DOMContentLoaded", () => {
                (t => {
                    const e = document.querySelector("#header-home"),
                        r = document.querySelector("#header-logo-home-wrapper > .container"),
                        n = document.querySelector("#header-logo-home"),
                        i = document.querySelector("#header-logo-home .logo-reg");
                    if (document.body.classList.contains("home") && null !== e && null !== r && null !== n && null !== i && (za.to(r, {
                            paddingTop: 0,
                            scrollTrigger: {
                                scroller: t,
                                trigger: e,
                                start: "top top",
                                end: "bottom top",
                                scrub: !0,
                                invalidateOnRefresh: !0
                            }
                        }), za.to(n, {
                            width: "5.9em",
                            scrollTrigger: {
                                scroller: t,
                                trigger: e,
                                start: "top top",
                                end: "bottom top",
                                scrub: !0,
                                invalidateOnRefresh: !0
                            }
                        }), za.to(i, {
                            width: "clamp(8px,5%,20px)",
                            scrollTrigger: {
                                scroller: t,
                                trigger: e,
                                start: "top top",
                                end: "bottom top",
                                scrub: !0,
                                invalidateOnRefresh: !0
                            }
                        })), document.body.classList.contains("home")) {
                        const r = document.querySelector("#header-menu"),
                            n = document.querySelector("#main-menu"),
                            i = document.querySelector("#header-home-inner");
                        let o;
                        null !== r && null !== n && null !== e && null !== i && za.to(r, {
                            scrollTrigger: {
                                scroller: t,
                                trigger: e,
                                start: "top top",
                                end: "bottom top",
                                scrub: !0,
                                onLeave: () => {
                                    o = setTimeout(() => {
                                        r.appendChild(n)
                                    }, 500)
                                },
                                onEnterBack: () => {
                                    null !== o && clearTimeout(o), i.appendChild(n)
                                }
                            }
                        })
                    }
                    const o = document.querySelectorAll(".parallax-active-group");
                    void 0 !== o && o.forEach(e => {
                        const r = e.querySelectorAll(".parallax-active");
                        if (void 0 !== r) {
                            const n = parseInt(e.dataset.stagger) || 50,
                                i = parseInt(e.dataset.delay) || 200;
                            let o;
                            za.timeline({
                                scrollTrigger: {
                                    scroller: t,
                                    trigger: e.closest(e.dataset.trigger) || e,
                                    start: e.dataset.start || "top bottom",
                                    end: e.dataset.end || "bottom-=30% bottom",
                                    scrub: !0,
                                    onEnter: () => {
                                        r.forEach((t, e) => {
                                            let r = e * n;
                                            i && (r = i + r), o = setTimeout(() => {
                                                t.classList.add("triggered")
                                            }, r)
                                        })
                                    },
                                    onLeaveBack: () => {
                                        e.dataset.hideBack && r.forEach(t => {
                                            null !== o && clearTimeout(o), t.classList.remove("triggered")
                                        })
                                    }
                                }
                            })
                        }
                    });
                    const s = document.querySelectorAll(".parallax-opacity, .parallax-move, .parallax-font-weight");
                    void 0 !== s && s.forEach(e => {
                        let r = e.closest(e.dataset.trigger) || e,
                            n = e.dataset.start || "top bottom",
                            i = e.dataset.end || "bottom top";
                        e.classList.contains("parallax-font-weight") && (r = e.closest(e.dataset.trigger) || e.closest(".text-wrapper") || e, n = e.dataset.start || "top bottom+=60%", i = e.dataset.end || "bottom top+=50%");
                        const o = za.timeline({
                            scrollTrigger: {
                                scroller: t,
                                trigger: r,
                                start: n,
                                end: i,
                                scrub: !0
                            }
                        });
                        if (void 0 !== e.dataset.opacityFrom && void 0 !== e.dataset.opacityTo && o.fromTo(e, {
                                opacity: parseFloat(e.dataset.opacityFrom)
                            }, {
                                opacity: parseFloat(e.dataset.opacityTo)
                            }), void 0 !== e.dataset.yPercentFrom && void 0 !== e.dataset.yPercentTo && o.from(e, {
                                yPercent: parseFloat(e.dataset.yPercentFrom)
                            }).to(e, {
                                yPercent: parseFloat(e.dataset.yPercentTo)
                            }), e.classList.contains("parallax-font-weight")) {
                            const t = parseFloat(e.dataset.fontWeightFrom) || 450,
                                r = parseFloat(e.dataset.fontWeightTo) || 700;
                            o.from(e, {
                                "font-variation-settings": '"wght" ' + t
                            }).to(e, {
                                "font-variation-settings": '"wght" ' + r
                            })
                        }
                    })
                })("body")
            }), r(2008), r(1193);
            const xl = () => {
                const t = document.querySelectorAll('video[data-play="auto"]');
                void 0 !== t && t.forEach(t => {
                    const e = t.play(),
                        r = t.getBoundingClientRect().top;
                    void 0 !== e && (t.paused || t.ended) && r < window.innerHeight && r > -1 * window.innerHeight && e.then(e => {
                        t.play()
                    })
                })
            };
            window.addEventListener("DOMContentLoaded", () => {
                Modernizr.touchevents ? window.addEventListener("touchstart", xl, !1) : (xl(), window.addEventListener("scroll", xl, !1)), (() => {
                    const t = document.querySelectorAll('a[data-fancybox][data-type="ajax"]');
                    null !== t && t.forEach(t => {
                        t.addEventListener("click", () => {
                            setTimeout(() => {
                                let t = document.querySelector(".fancybox__slide:not(.is-done)");
                                const e = setInterval(() => {
                                    null !== t && t.classList.contains("is-done") && (t = null, xl(), clearInterval(e))
                                }, 100)
                            }, 200)
                        })
                    })
                })()
            }, !1), window.addEventListener("DOMContentLoaded", () => {
                const t = document.querySelectorAll('video[data-play="hover"]');
                void 0 !== t && t.forEach(t => {
                    let e, r = t.closest(".group");
                    if (null === r)
                        if (t.hasAttribute("data-id")) {
                            let e = t.getAttribute("data-id");
                            null !== e && (r = t.closest("section").querySelector('[data-target="' + e + '"]'))
                        } else r = t;
                    const n = () => {
                        (t.paused || t.ended) && (e && clearTimeout(e), t.play(), t.hasAttribute("data-pause-hidden") && (t.classList.remove("opacity-0"), t.classList.add("opacity-100")))
                    };
                    r.addEventListener("mouseenter", n), r.addEventListener("touchstart", n);
                    const i = () => {
                        if (!t.paused && !t.ended) {
                            const r = t.dataset.delay;
                            void 0 !== r ? e = setTimeout(() => {
                                t.pause()
                            }, parseInt(r)) : (t.pause(), t.hasAttribute("data-pause-hidden") && (t.classList.remove("opacity-100"), t.classList.add("opacity-0")))
                        }
                    };
                    r.addEventListener("mouseleave", i), r.addEventListener("touchend", i)
                })
            }, !1), r(9761)
        }()
}();