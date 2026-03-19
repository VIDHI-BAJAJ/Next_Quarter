/*! For license information please see team.06be3fd13c062b1e3898.js.LICENSE.txt */ ! function() {
    "use strict";

    function t(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function e(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    var r, i, n, s, a, o, u, h, l, f, c, p, d, _, m, g, v, y = {
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
        w = 1e8,
        x = 1e-8,
        b = 2 * Math.PI,
        M = b / 4,
        O = 0,
        k = Math.sqrt,
        A = Math.cos,
        C = Math.sin,
        D = function(t) {
            return "string" == typeof t
        },
        E = function(t) {
            return "function" == typeof t
        },
        P = function(t) {
            return "number" == typeof t
        },
        S = function(t) {
            return void 0 === t
        },
        z = function(t) {
            return "object" == typeof t
        },
        R = function(t) {
            return !1 !== t
        },
        F = function() {
            return "undefined" != typeof window
        },
        L = function(t) {
            return E(t) || D(t)
        },
        I = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        B = Array.isArray,
        Y = /random\([^)]+\)/g,
        q = /,\s*/g,
        X = /(?:-?\.?\d|\.)+/gi,
        N = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        U = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        V = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        j = /[+-]=-?[.\d]+/,
        W = /[^,'"\[\]\s]+/gi,
        G = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        Q = {},
        H = {},
        Z = function(t) {
            return (H = kt(t, Q)) && kr
        },
        $ = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        J = function(t, e) {
            return !e && console.warn(t)
        },
        K = function(t, e) {
            return t && (Q[t] = e) && H && (H[t] = e) || Q
        },
        tt = function() {
            return 0
        },
        et = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        rt = {
            suppressEvents: !0,
            kill: !1
        },
        it = {
            suppressEvents: !0
        },
        nt = {},
        st = [],
        at = {},
        ot = {},
        ut = {},
        ht = 30,
        lt = [],
        ft = "",
        ct = function(t) {
            var e, r, i = t[0];
            if (z(i) || E(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
                for (r = lt.length; r-- && !lt[r].targetTest(i););
                e = lt[r]
            }
            for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new qe(t[r], e))) || t.splice(r, 1);
            return t
        },
        pt = function(t) {
            return t._gsap || ct(ie(t))[0]._gsap
        },
        dt = function(t, e, r) {
            return (r = t[e]) && E(r) ? t[e]() : S(r) && t.getAttribute && t.getAttribute(e) || r
        },
        _t = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        mt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        gt = function(t) {
            return Math.round(1e7 * t) / 1e7 || 0
        },
        vt = function(t, e) {
            var r = e.charAt(0),
                i = parseFloat(e.substr(2));
            return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
        },
        yt = function(t, e) {
            for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
            return i < r
        },
        Tt = function() {
            var t, e, r = st.length,
                i = st.slice(0);
            for (at = {}, st.length = 0, t = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        wt = function(t) {
            return !!(t._initted || t._startAt || t.add)
        },
        xt = function(t, e, r, n) {
            st.length && !i && Tt(), t.render(e, r, n || !!(i && e < 0 && wt(t))), st.length && !i && Tt()
        },
        bt = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(W).length < 2 ? e : D(t) ? t.trim() : t
        },
        Mt = function(t) {
            return t
        },
        Ot = function(t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t
        },
        kt = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        At = function t(e, r) {
            for (var i in r) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = z(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
            return e
        },
        Ct = function(t, e) {
            var r, i = {};
            for (r in t) r in e || (i[r] = t[r]);
            return i
        },
        Dt = function(t) {
            var e, r = t.parent || s,
                i = t.keyframes ? (e = B(t.keyframes), function(t, r) {
                    for (var i in r) i in t || "duration" === i && e || "ease" === i || (t[i] = r[i])
                }) : Ot;
            if (R(t.inherit))
                for (; r;) i(t, r.vars.defaults), r = r.parent || r._dp;
            return t
        },
        Et = function(t, e, r, i, n) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var s, a = t[i];
            if (n)
                for (s = e[n]; a && a[n] > s;) a = a._prev;
            return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t, e
        },
        Pt = function(t, e, r, i) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var n = e._prev,
                s = e._next;
            n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
        },
        St = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        zt = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var r = t; r;) r._dirty = 1, r = r.parent;
            return t
        },
        Rt = function(t, e, r, n) {
            return t._startAt && (i ? t._startAt.revert(rt) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, n))
        },
        Ft = function t(e) {
            return !e || e._ts && t(e.parent)
        },
        Lt = function(t) {
            return t._repeat ? It(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        It = function(t, e) {
            var r = Math.floor(t = gt(t / e));
            return t && r === t ? r - 1 : r
        },
        Bt = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Yt = function(t) {
            return t._end = gt(t._start + (t._tDur / Math.abs(t._ts || t._rts || x) || 0))
        },
        qt = function(t, e) {
            var r = t._dp;
            return r && r.smoothChildTiming && t._ts && (t._start = gt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Yt(t), r._dirty || zt(r, t)), t
        },
        Xt = function(t, e) {
            var r;
            if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Bt(t.rawTime(), e), (!e._dur || Kt(0, e.totalDuration(), r) - e._tTime > x) && e.render(r, !0)), zt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
                t._zTime = -1e-8
            }
        },
        Nt = function(t, e, r, i) {
            return e.parent && St(e), e._start = gt((P(r) ? r : r || t !== s ? Zt(t, r, e) : t._time) + e._delay), e._end = gt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Et(t, e, "_first", "_last", t._sort ? "_start" : 0), Wt(e) || (t._recent = e), i || Xt(t, e), t._ts < 0 && qt(t, t._tTime), t
        },
        Ut = function(t, e) {
            return (Q.ScrollTrigger || $("scrollTrigger", e)) && Q.ScrollTrigger.create(e, t)
        },
        Vt = function(t, e, r, n, s) {
            return Qe(t, e, s), t._initted ? !r && t._pt && !i && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && l !== Ae.frame ? (st.push(t), t._lazy = [s, n], 1) : void 0 : 1
        },
        jt = function t(e) {
            var r = e.parent;
            return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        },
        Wt = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        Gt = function(t, e, r, i) {
            var n = t._repeat,
                s = gt(e) || 0,
                a = t._tTime / t._tDur;
            return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : gt(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i && qt(t, t._tTime = t._tDur * a), t.parent && Yt(t), r || zt(t.parent, t), t
        },
        Qt = function(t) {
            return t instanceof Ne ? zt(t) : Gt(t, t._dur)
        },
        Ht = {
            _start: 0,
            endTime: tt,
            totalDuration: tt
        },
        Zt = function t(e, r, i) {
            var n, s, a, o = e.labels,
                u = e._recent || Ht,
                h = e.duration() >= w ? u.endTime(!1) : e._dur;
            return D(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), n = r.indexOf("="), "<" === s || ">" === s ? (n >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = h), o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)), a && i && (s = s / 100 * (B(i) ? i[0] : i).totalDuration()), n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s)) : null == r ? h : +r
        },
        $t = function(t, e, r) {
            var i, n, s = P(e[1]),
                a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                o = e[a];
            if (s && (o.duration = e[1]), o.parent = r, t) {
                for (i = o, n = r; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = R(n.vars.inherit) && n.parent;
                o.immediateRender = R(i.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
            }
            return new Ke(e[0], o, e[a + 1])
        },
        Jt = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        Kt = function(t, e, r) {
            return r < t ? t : r > e ? e : r
        },
        te = function(t, e) {
            return D(t) && (e = G.exec(t)) ? e[1] : ""
        },
        ee = [].slice,
        re = function(t, e) {
            return t && z(t) && "length" in t && (!e && !t.length || t.length - 1 in t && z(t[0])) && !t.nodeType && t !== a
        },
        ie = function(t, e, r) {
            return n && !e && n.selector ? n.selector(t) : !D(t) || r || !o && Ce() ? B(t) ? function(t, e, r) {
                return void 0 === r && (r = []), t.forEach(function(t) {
                    var i;
                    return D(t) && !e || re(t, 1) ? (i = r).push.apply(i, ie(t)) : r.push(t)
                }) || r
            }(t, r) : re(t) ? ee.call(t, 0) : t ? [t] : [] : ee.call((e || u).querySelectorAll(t), 0)
        },
        ne = function(t) {
            return t = ie(t)[0] || J("Invalid scope") || {},
                function(e) {
                    var r = t.current || t.nativeElement || t;
                    return ie(e, r.querySelectorAll ? r : r === t ? J("Invalid scope") || u.createElement("div") : t)
                }
        },
        se = function(t) {
            return t.sort(function() {
                return .5 - Math.random()
            })
        },
        ae = function(t) {
            if (E(t)) return t;
            var e = z(t) ? t : {
                    each: t
                },
                r = Fe(e.ease),
                i = e.from || 0,
                n = parseFloat(e.base) || 0,
                s = {},
                a = i > 0 && i < 1,
                o = isNaN(i) || a,
                u = e.axis,
                h = i,
                l = i;
            return D(i) ? h = l = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[i] || 0 : !a && o && (h = i[0], l = i[1]),
                function(t, a, f) {
                    var c, p, d, _, m, g, v, y, T, x = (f || e).length,
                        b = s[x];
                    if (!b) {
                        if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, w])[1])) {
                            for (v = -w; v < (v = f[T++].getBoundingClientRect().left) && T < x;);
                            T < x && T--
                        }
                        for (b = s[x] = [], c = o ? Math.min(T, x) * h - .5 : i % T, p = T === w ? 0 : o ? x * l / T - .5 : i / T | 0, v = 0, y = w, g = 0; g < x; g++) d = g % T - c, _ = p - (g / T | 0), b[g] = m = u ? Math.abs("y" === u ? _ : d) : k(d * d + _ * _), m > v && (v = m), m < y && (y = m);
                        "random" === i && se(b), b.max = v - y, b.min = y, b.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (T > x ? x - 1 : u ? "y" === u ? x / T : T : Math.max(T, x / T)) || 0) * ("edges" === i ? -1 : 1), b.b = x < 0 ? n - x : n, b.u = te(e.amount || e.each) || 0, r = r && x < 0 ? ze(r) : r
                    }
                    return x = (b[t] - b.min) / b.max || 0, gt(b.b + (r ? r(x) : x) * b.v) + b.u
                }
        },
        oe = function(t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function(r) {
                var i = gt(Math.round(parseFloat(r) / t) * t * e);
                return (i - i % 1) / e + (P(r) ? 0 : te(r))
            }
        },
        ue = function(t, e) {
            var r, i, n = B(t);
            return !n && z(t) && (r = n = t.radius || w, t.values ? (t = ie(t.values), (i = !P(t[0])) && (r *= r)) : t = oe(t.increment)), Jt(e, n ? E(t) ? function(e) {
                return i = t(e), Math.abs(i - e) <= r ? i : e
            } : function(e) {
                for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), u = w, h = 0, l = t.length; l--;)(n = i ? (n = t[l].x - a) * n + (s = t[l].y - o) * s : Math.abs(t[l] - a)) < u && (u = n, h = l);
                return h = !r || u <= r ? t[h] : e, i || h === e || P(e) ? h : h + te(e)
            } : oe(t))
        },
        he = function(t, e, r, i) {
            return Jt(B(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
                return B(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
            })
        },
        le = function(t, e, r) {
            return Jt(r, function(r) {
                return t[~~e(r)]
            })
        },
        fe = function(t) {
            return t.replace(Y, function(t) {
                var e = t.indexOf("[") + 1,
                    r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split(q);
                return he(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5)
            })
        },
        ce = function(t, e, r, i, n) {
            var s = e - t,
                a = i - r;
            return Jt(n, function(e) {
                return r + ((e - t) / s * a || 0)
            })
        },
        pe = function(t, e, r) {
            var i, n, s, a = t.labels,
                o = w;
            for (i in a)(n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
            return s
        },
        de = function(t, e, r) {
            var i, s, a, o = t.vars,
                u = o[e],
                h = n,
                l = t._ctx;
            if (u) return i = o[e + "Params"], s = o.callbackScope || t, r && st.length && Tt(), l && (n = l), a = i ? u.apply(s, i) : u.call(s), n = h, a
        },
        _e = function(t) {
            return St(t), t.scrollTrigger && t.scrollTrigger.kill(!!i), t.progress() < 1 && de(t, "onInterrupt"), t
        },
        me = [],
        ge = function(t) {
            if (t)
                if (t = !t.name && t.default || t, F() || t.headless) {
                    var e = t.name,
                        r = E(t),
                        i = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        n = {
                            init: tt,
                            render: ur,
                            add: We,
                            kill: lr,
                            modifier: hr,
                            rawVars: 0
                        },
                        s = {
                            targetTest: 0,
                            get: 0,
                            getSetter: nr,
                            aliases: {},
                            register: 0
                        };
                    if (Ce(), t !== i) {
                        if (ot[e]) return;
                        Ot(i, Ot(Ct(t, n), s)), kt(i.prototype, kt(n, Ct(t, s))), ot[i.prop = e] = i, t.targetTest && (lt.push(i), nt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    K(e, i), t.register && t.register(kr, i, pr)
                } else me.push(t)
        },
        ve = 255,
        ye = {
            aqua: [0, ve, ve],
            lime: [0, ve, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, ve],
            navy: [0, 0, 128],
            white: [ve, ve, ve],
            olive: [128, 128, 0],
            yellow: [ve, ve, 0],
            orange: [ve, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [ve, 0, 0],
            pink: [ve, 192, 203],
            cyan: [0, ve, ve],
            transparent: [ve, ve, ve, 0]
        },
        Te = function(t, e, r) {
            return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * ve + .5 | 0
        },
        we = function(t, e, r) {
            var i, n, s, a, o, u, h, l, f, c, p = t ? P(t) ? [t >> 16, t >> 8 & ve, t & ve] : 0 : ye.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ye[t]) p = ye[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (i = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + i + i + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & ve, p & ve, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ve, t & ve]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = c = t.match(X), e) {
                        if (~t.indexOf("=")) return p = t.match(N), r && p.length < 4 && (p[3] = 1), p
                    } else a = +p[0] % 360 / 360, o = +p[1] / 100, i = 2 * (u = +p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), p.length > 3 && (p[3] *= 1), p[0] = Te(a + 1 / 3, i, n), p[1] = Te(a, i, n), p[2] = Te(a - 1 / 3, i, n);
                else p = t.match(X) || ye.transparent;
                p = p.map(Number)
            }
            return e && !c && (i = p[0] / ve, n = p[1] / ve, s = p[2] / ve, u = ((h = Math.max(i, n, s)) + (l = Math.min(i, n, s))) / 2, h === l ? a = o = 0 : (f = h - l, o = u > .5 ? f / (2 - h - l) : f / (h + l), a = h === i ? (n - s) / f + (n < s ? 6 : 0) : h === n ? (s - i) / f + 2 : (i - n) / f + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        xe = function(t) {
            var e = [],
                r = [],
                i = -1;
            return t.split(Me).forEach(function(t) {
                var n = t.match(U) || [];
                e.push.apply(e, n), r.push(i += n.length + 1)
            }), e.c = r, e
        },
        be = function(t, e, r) {
            var i, n, s, a, o = "",
                u = (t + o).match(Me),
                h = e ? "hsla(" : "rgba(",
                l = 0;
            if (!u) return t;
            if (u = u.map(function(t) {
                    return (t = we(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                }), r && (s = xe(t), (i = r.c).join(o) !== s.c.join(o)))
                for (a = (n = t.replace(Me, "1").split(U)).length - 1; l < a; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
            if (!n)
                for (a = (n = t.split(Me)).length - 1; l < a; l++) o += n[l] + u[l];
            return o + n[a]
        },
        Me = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in ye) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Oe = /hsl[a]?\(/,
        ke = function(t) {
            var e, r = t.join(" ");
            if (Me.lastIndex = 0, Me.test(r)) return e = Oe.test(r), t[1] = be(t[1], e), t[0] = be(t[0], e, xe(t[1])), !0
        },
        Ae = function() {
            var t, e, r, i, n, s, l = Date.now,
                f = 500,
                p = 33,
                d = l(),
                _ = d,
                m = 1e3 / 240,
                g = m,
                v = [],
                y = function r(a) {
                    var o, u, h, c, y = l() - _,
                        T = !0 === a;
                    if ((y > f || y < 0) && (d += y - p), ((o = (h = (_ += y) - d) - g) > 0 || T) && (c = ++i.frame, n = h - 1e3 * i.time, i.time = h /= 1e3, g += o + (o >= m ? 4 : m - o), u = 1), T || (t = e(r)), u)
                        for (s = 0; s < v.length; s++) v[s](h, n, c, a)
                };
            return i = {
                time: 0,
                frame: 0,
                tick: function() {
                    y(!0)
                },
                deltaRatio: function(t) {
                    return n / (1e3 / (t || 60))
                },
                wake: function() {
                    h && (!o && F() && (a = o = window, u = a.document || {}, Q.gsap = kr, (a.gsapVersions || (a.gsapVersions = [])).push(kr.version), Z(H || a.GreenSockGlobals || !a.gsap && a || {}), me.forEach(ge)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t && i.sleep(), e = r || function(t) {
                        return setTimeout(t, g - 1e3 * i.time + 1 | 0)
                    }, c = 1, y(2))
                },
                sleep: function() {
                    (r ? cancelAnimationFrame : clearTimeout)(t), c = 0, e = tt
                },
                lagSmoothing: function(t, e) {
                    f = t || 1 / 0, p = Math.min(e || 33, f)
                },
                fps: function(t) {
                    m = 1e3 / (t || 240), g = 1e3 * i.time + m
                },
                add: function(t, e, r) {
                    var n = e ? function(e, r, s, a) {
                        t(e, r, s, a), i.remove(n)
                    } : t;
                    return i.remove(t), v[r ? "unshift" : "push"](n), Ce(), n
                },
                remove: function(t, e) {
                    ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--
                },
                _listeners: v
            }
        }(),
        Ce = function() {
            return !c && Ae.wake()
        },
        De = {},
        Ee = /^[\d.\-M][\d.\-,\s]/,
        Pe = /["']/g,
        Se = function(t) {
            for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[a] = isNaN(i) ? i.replace(Pe, "").trim() : +i, a = r.substr(e + 1).trim();
            return n
        },
        ze = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        Re = function t(e, r) {
            for (var i, n = e._first; n;) n instanceof Ne ? t(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? t(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
        },
        Fe = function(t, e) {
            return t && (E(t) ? t : De[t] || function(t) {
                var e, r, i, n, s = (t + "").split("("),
                    a = De[s[0]];
                return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Se(s[1])] : (e = t, r = e.indexOf("(") + 1, i = e.indexOf(")"), n = e.indexOf("(", r), e.substring(r, ~n && n < i ? e.indexOf(")", i + 1) : i)).split(",").map(bt)) : De._CE && Ee.test(t) ? De._CE("", t) : a
            }(t)) || e
        },
        Le = function(t, e, r, i) {
            void 0 === r && (r = function(t) {
                return 1 - e(1 - t)
            }), void 0 === i && (i = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var n, s = {
                easeIn: e,
                easeOut: r,
                easeInOut: i
            };
            return _t(t, function(t) {
                for (var e in De[t] = Q[t] = s, De[n = t.toLowerCase()] = r, s) De[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = De[t + "." + e] = s[e]
            }), s
        },
        Ie = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        Be = function t(e, r, i) {
            var n = r >= 1 ? r : 1,
                s = (i || (e ? .3 : .45)) / (r < 1 ? r : 1),
                a = s / b * (Math.asin(1 / n) || 0),
                o = function(t) {
                    return 1 === t ? 1 : n * Math.pow(2, -10 * t) * C((t - a) * s) + 1
                },
                u = "out" === e ? o : "in" === e ? function(t) {
                    return 1 - o(1 - t)
                } : Ie(o);
            return s = b / s, u.config = function(r, i) {
                return t(e, r, i)
            }, u
        },
        Ye = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var i = function(t) {
                    return t ? --t * t * ((r + 1) * t + r) + 1 : 0
                },
                n = "out" === e ? i : "in" === e ? function(t) {
                    return 1 - i(1 - t)
                } : Ie(i);
            return n.config = function(r) {
                return t(e, r)
            }, n
        };
    _t("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Le(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), De.Linear.easeNone = De.none = De.Linear.easeIn, Le("Elastic", Be("in"), Be("out"), Be()), p = 7.5625, m = 2 * (_ = 1 / (d = 2.75)), g = 2.5 * _, Le("Bounce", function(t) {
        return 1 - v(1 - t)
    }, v = function(t) {
        return t < _ ? p * t * t : t < m ? p * Math.pow(t - 1.5 / d, 2) + .75 : t < g ? p * (t -= 2.25 / d) * t + .9375 : p * Math.pow(t - 2.625 / d, 2) + .984375
    }), Le("Expo", function(t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
    }), Le("Circ", function(t) {
        return -(k(1 - t * t) - 1)
    }), Le("Sine", function(t) {
        return 1 === t ? 1 : 1 - A(t * M)
    }), Le("Back", Ye("in"), Ye("out"), Ye()), De.SteppedEase = De.steps = Q.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * Kt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, T.ease = De["quad.out"], _t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return ft += t + "," + t + "Params,"
    });
    var qe = function(t, e) {
            this.id = O++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : dt, this.set = e ? e.getSetter : nr
        },
        Xe = function() {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Gt(this, +t.duration, 1, 1), this.data = t.data, n && (this._ctx = n, n.data.push(this)), c || Ae.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, Gt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (Ce(), !arguments.length) return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                    for (qt(this, t), !r._dp || r.parent || Xt(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Nt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === x || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), xt(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Lt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Lt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
            }, e.iteration = function(t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? It(this._tTime, r) + 1 : 1
            }, e.timeScale = function(t, e) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var r = this.parent && this._ts ? Bt(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Kt(-Math.abs(this._delay), this.totalDuration(), r), !1 !== e), Yt(this),
                    function(t) {
                        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                        return t
                    }(this)
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ce(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== x && (this._tTime -= x)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = gt(t);
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Nt(e, this, this._start - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (R(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Bt(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.revert = function(t) {
                void 0 === t && (t = it);
                var e = i;
                return i = t, wt(this) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), i = e, this
            }, e.globalTime = function(t) {
                for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
                return !this.parent && this._sat ? this._sat.globalTime(t) : r
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Qt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, Qt(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(Zt(this, t), R(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, R(e)), this._dur || (this._zTime = -1e-8), this
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
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - x))
            }, e.eventCallback = function(t, e, r) {
                var i = this.vars;
                return arguments.length > 1 ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
            }, e.then = function(t) {
                var e = this,
                    r = e._prom;
                return new Promise(function(i) {
                    var n = E(t) ? t : Mt,
                        s = function() {
                            var t = e.then;
                            e.then = null, r && r(), E(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
                })
            }, e.kill = function() {
                _e(this)
            }, t
        }();
    Ot(Xe.prototype, {
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
    var Ne = function(r) {
        function n(e, i) {
            var n;
            return void 0 === e && (e = {}), (n = r.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = R(e.sortChildren), s && Nt(e.parent || s, t(n), i), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Ut(t(n), e.scrollTrigger), n
        }
        e(n, r);
        var a = n.prototype;
        return a.to = function(t, e, r) {
            return $t(0, arguments, this), this
        }, a.from = function(t, e, r) {
            return $t(1, arguments, this), this
        }, a.fromTo = function(t, e, r, i) {
            return $t(2, arguments, this), this
        }, a.set = function(t, e, r) {
            return e.duration = 0, e.parent = this, Dt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ke(t, e, Zt(this, r), 1), this
        }, a.call = function(t, e, r) {
            return Nt(this, Ke.delayedCall(0, t, e), r)
        }, a.staggerTo = function(t, e, r, i, n, s, a) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new Ke(t, r, Zt(this, n)), this
        }, a.staggerFrom = function(t, e, r, i, n, s, a) {
            return r.runBackwards = 1, Dt(r).immediateRender = R(r.immediateRender), this.staggerTo(t, e, r, i, n, s, a)
        }, a.staggerFromTo = function(t, e, r, i, n, s, a, o) {
            return i.startAt = r, Dt(i).immediateRender = R(i.immediateRender), this.staggerTo(t, e, i, n, s, a, o)
        }, a.render = function(t, e, r) {
            var n, a, o, u, h, l, f, c, p, d, _, m, g = this._time,
                v = this._dirty ? this.totalDuration() : this._tDur,
                y = this._dur,
                T = t <= 0 ? 0 : gt(t),
                w = this._zTime < 0 != t < 0 && (this._initted || !y);
            if (this !== s && T > v && t >= 0 && (T = v), T !== this._tTime || r || w) {
                if (g !== this._time && y && (T += this._time - g, t += this._time - g), n = T, p = this._start, l = !(c = this._ts), w && (y || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (_ = this._yoyo, h = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * h + t, e, r);
                    if (n = gt(T % h), T === v ? (u = this._repeat, n = y) : ((u = ~~(d = gt(T / h))) && u === d && (n = y, u--), n > y && (n = y)), d = It(this._tTime, h), !g && this._tTime && d !== u && this._tTime - d * h - this._dur <= 0 && (d = u), _ && 1 & u && (n = y - n, m = 1), u !== d && !this._lock) {
                        var b = _ && 1 & d,
                            M = b === (_ && 1 & u);
                        if (u < d && (b = !b), g = b ? 0 : T % y ? y : T, this._lock = 1, this.render(g || (m ? 0 : gt(u * h)), e, !y)._lock = 0, this._tTime = T, !e && this.parent && de(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1, d = u), g && g !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (y = this._dur, v = this._tDur, M && (this._lock = 2, g = b ? y : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                        Re(this, m)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (f = function(t, e, r) {
                        var i;
                        if (r > e)
                            for (i = t._first; i && i._start <= r;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, gt(g), gt(n)), f && (T -= n - (n = f._start))), this._tTime = T, this._time = n, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && T && y && !e && !d && (de(this, "onStart"), this._tTime !== T)) return this;
                if (n >= g && t >= 0)
                    for (a = this._first; a;) {
                        if (o = a._next, (a._act || n >= a._start) && a._ts && f !== a) {
                            if (a.parent !== this) return this.render(t, e, r);
                            if (a.render(a._ts > 0 ? (n - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (n - a._start) * a._ts, e, r), n !== this._time || !this._ts && !l) {
                                f = 0, o && (T += this._zTime = -1e-8);
                                break
                            }
                        }
                        a = o
                    } else {
                        a = this._last;
                        for (var O = t < 0 ? t : n; a;) {
                            if (o = a._prev, (a._act || O <= a._end) && a._ts && f !== a) {
                                if (a.parent !== this) return this.render(t, e, r);
                                if (a.render(a._ts > 0 ? (O - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (O - a._start) * a._ts, e, r || i && wt(a)), n !== this._time || !this._ts && !l) {
                                    f = 0, o && (T += this._zTime = O ? -1e-8 : x);
                                    break
                                }
                            }
                            a = o
                        }
                    }
                if (f && !e && (this.pause(), f.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = p, Yt(this), this.render(t, e, r);
                this._onUpdate && !e && de(this, "onUpdate", !0), (T === v && this._tTime >= this.totalDuration() || !T && g) && (p !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !y) && (T === v && this._ts > 0 || !T && this._ts < 0) && St(this, 1), e || t < 0 && !g || !T && !g && v || (de(this, T === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(T < v && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, a.add = function(t, e) {
            var r = this;
            if (P(e) || (e = Zt(this, e, t)), !(t instanceof Xe)) {
                if (B(t)) return t.forEach(function(t) {
                    return r.add(t, e)
                }), this;
                if (D(t)) return this.addLabel(t, e);
                if (!E(t)) return this;
                t = Ke.delayedCall(0, t)
            }
            return this !== t ? Nt(this, t, e) : this
        }, a.getChildren = function(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -w);
            for (var n = [], s = this._first; s;) s._start >= i && (s instanceof Ke ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), s = s._next;
            return n
        }, a.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, a.remove = function(t) {
            return D(t) ? this.removeLabel(t) : E(t) ? this.killTweensOf(t) : (t.parent === this && Pt(this, t), t === this._recent && (this._recent = this._last), zt(this))
        }, a.totalTime = function(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = gt(Ae.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), r.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, a.addLabel = function(t, e) {
            return this.labels[t] = Zt(this, e), this
        }, a.removeLabel = function(t) {
            return delete this.labels[t], this
        }, a.addPause = function(t, e, r) {
            var i = Ke.delayedCall(0, e || tt, r);
            return i.data = "isPause", this._hasPause = 1, Nt(this, i, Zt(this, t))
        }, a.removePause = function(t) {
            var e = this._first;
            for (t = Zt(this, t); e;) e._start === t && "isPause" === e.data && St(e), e = e._next
        }, a.killTweensOf = function(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Ue !== i[n] && i[n].kill(t, e);
            return this
        }, a.getTweensOf = function(t, e) {
            for (var r, i = [], n = ie(t), s = this._first, a = P(e); s;) s instanceof Ke ? yt(s._targets, n) && (a ? (!Ue || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r), s = s._next;
            return i
        }, a.tweenTo = function(t, e) {
            e = e || {};
            var r, i = this,
                n = Zt(i, t),
                s = e,
                a = s.startAt,
                o = s.onStart,
                u = s.onStartParams,
                h = s.immediateRender,
                l = Ke.to(i, Ot({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || x,
                    onStart: function() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            l._dur !== t && Gt(l, t, 0, 1).render(l._time, !0, !0), r = 1
                        }
                        o && o.apply(l, u || [])
                    }
                }, e));
            return h ? l.render(0) : l
        }, a.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, Ot({
                startAt: {
                    time: Zt(this, t)
                }
            }, r))
        }, a.recent = function() {
            return this._recent
        }, a.nextLabel = function(t) {
            return void 0 === t && (t = this._time), pe(this, Zt(this, t))
        }, a.previousLabel = function(t) {
            return void 0 === t && (t = this._time), pe(this, Zt(this, t), 1)
        }, a.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + x)
        }, a.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            var i, n = this._first,
                s = this.labels;
            for (t = gt(t); n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in s) s[i] >= r && (s[i] += t);
            return zt(this)
        }, a.invalidate = function(t) {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(t), e = e._next;
            return r.prototype.invalidate.call(this, t)
        }, a.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), zt(this)
        }, a.totalDuration = function(t) {
            var e, r, i, n = 0,
                a = this,
                o = a._last,
                u = w;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (r = o._start) > u && a._sort && o._ts && !a._lock ? (a._lock = 1, Nt(a, o, r - o._delay, 1)._lock = 0) : u = r, r < 0 && o._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += gt(r / a._ts), a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), u = 0), o._end > n && o._ts && (n = o._end), o = e;
                Gt(a, a === s && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, n.updateRoot = function(t) {
            if (s._ts && (xt(s, Bt(t, s)), l = Ae.frame), Ae.frame >= ht) {
                ht += y.autoSleep || 120;
                var e = s._first;
                if ((!e || !e._ts) && y.autoSleep && Ae._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Ae.sleep()
                }
            }
        }, n
    }(Xe);
    Ot(Ne.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ue, Ve, je = function(t, e, r, i, n, s, a) {
            var o, u, h, l, f, c, p, d, _ = new pr(this._pt, t, e, 0, 1, or, null, n),
                m = 0,
                g = 0;
            for (_.b = r, _.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = fe(i)), s && (s(d = [r, i], t, e), r = d[0], i = d[1]), u = r.match(V) || []; o = V.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
                _next: _._pt,
                p: f || 1 === g ? f : ",",
                s: c,
                c: "=" === l.charAt(1) ? vt(c, l) - c : parseFloat(l) - c,
                m: h && h < 4 ? Math.round : 0
            }, m = V.lastIndex);
            return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = a, (j.test(i) || p) && (_.e = 0), this._pt = _, _
        },
        We = function(t, e, r, i, n, s, a, o, u, h) {
            E(i) && (i = i(n || 0, t, s));
            var l, f = t[e],
                c = "get" !== r ? r : E(f) ? u ? t[e.indexOf("set") || !E(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f,
                p = E(f) ? u ? rr : er : tr;
            if (D(i) && (~i.indexOf("random(") && (i = fe(i)), "=" === i.charAt(1) && ((l = vt(c, i) + (te(c) || 0)) || 0 === l) && (i = l)), !h || c !== i || Ve) return isNaN(c * i) || "" === i ? (!f && !(e in t) && $(e, i), je.call(this, t, e, c, i, p, o || y.stringFilter, u)) : (l = new pr(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof f ? ar : sr, 0, p), u && (l.fp = u), a && l.modifier(a, this, t), this._pt = l)
        },
        Ge = function(t, e, r, i, n, s) {
            var a, o, u, h;
            if (ot[t] && !1 !== (a = new ot[t]).init(n, a.rawVars ? e[t] : function(t, e, r, i, n) {
                    if (E(t) && (t = Ze(t, n, e, r, i)), !z(t) || t.style && t.nodeType || B(t) || I(t)) return D(t) ? Ze(t, n, e, r, i) : t;
                    var s, a = {};
                    for (s in t) a[s] = Ze(t[s], n, e, r, i);
                    return a
                }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new pr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== f))
                for (u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = o;
            return a
        },
        Qe = function t(e, n, a) {
            var o, u, h, l, f, c, p, d, _, m, g, v, y, b = e.vars,
                M = b.ease,
                O = b.startAt,
                k = b.immediateRender,
                A = b.lazy,
                C = b.onUpdate,
                D = b.runBackwards,
                E = b.yoyoEase,
                P = b.keyframes,
                S = b.autoRevert,
                z = e._dur,
                F = e._startAt,
                L = e._targets,
                I = e.parent,
                B = I && "nested" === I.data ? I.vars.targets : L,
                Y = "auto" === e._overwrite && !r,
                q = e.timeline;
            if (q && (!P || !M) && (M = "none"), e._ease = Fe(M, T.ease), e._yEase = E ? ze(Fe(!0 === E ? M : E, T.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), e._from = !q && !!b.runBackwards, !q || P && !b.stagger) {
                if (v = (d = L[0] ? pt(L[0]).harness : 0) && b[d.prop], o = Ct(b, nt), F && (F._zTime < 0 && F.progress(1), n < 0 && D && k && !S ? F.render(-1, !0) : F.revert(D && z ? rt : et), F._lazy = 0), O) {
                    if (St(e._startAt = Ke.set(L, Ot({
                            data: "isStart",
                            overwrite: !1,
                            parent: I,
                            immediateRender: !0,
                            lazy: !F && R(A),
                            startAt: null,
                            delay: 0,
                            onUpdate: C && function() {
                                return de(e, "onUpdate")
                            },
                            stagger: 0
                        }, O))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (i || !k && !S) && e._startAt.revert(rt), k && z && n <= 0 && a <= 0) return void(n && (e._zTime = n))
                } else if (D && z && !F)
                    if (n && (k = !1), h = Ot({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: k && !F && R(A),
                            immediateRender: k,
                            stagger: 0,
                            parent: I
                        }, o), v && (h[d.prop] = v), St(e._startAt = Ke.set(L, h)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (i ? e._startAt.revert(rt) : e._startAt.render(-1, !0)), e._zTime = n, k) {
                        if (!n) return
                    } else t(e._startAt, x, x);
                for (e._pt = e._ptCache = 0, A = z && R(A) || A && !z, u = 0; u < L.length; u++) {
                    if (p = (f = L[u])._gsap || ct(L)[u]._gsap, e._ptLookup[u] = m = {}, at[p.id] && st.length && Tt(), g = B === L ? u : B.indexOf(f), d && !1 !== (_ = new d).init(f, v || o, e, g, B) && (e._pt = l = new pr(e._pt, f, _.name, 0, 1, _.render, _, 0, _.priority), _._props.forEach(function(t) {
                            m[t] = l
                        }), _.priority && (c = 1)), !d || v)
                        for (h in o) ot[h] && (_ = Ge(h, o, e, g, f, B)) ? _.priority && (c = 1) : m[h] = l = We.call(e, f, h, "get", o[h], g, B, 0, b.stringFilter);
                    e._op && e._op[u] && e.kill(f, e._op[u]), Y && e._pt && (Ue = e, s.killTweensOf(f, m, e.globalTime(n)), y = !e.parent, Ue = 0), e._pt && A && (at[p.id] = 1)
                }
                c && cr(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = C, e._initted = (!e._op || e._pt) && !y, P && n <= 0 && q.render(w, !0, !0)
        },
        He = function(t, e, r, i) {
            var n, s, a = e.ease || i || "power1.inOut";
            if (B(e)) s = r[t] || (r[t] = []), e.forEach(function(t, r) {
                return s.push({
                    t: r / (e.length - 1) * 100,
                    v: t,
                    e: a
                })
            });
            else
                for (n in e) s = r[n] || (r[n] = []), "ease" === n || s.push({
                    t: parseFloat(t),
                    v: e[n],
                    e: a
                })
        },
        Ze = function(t, e, r, i, n) {
            return E(t) ? t.call(e, r, i, n) : D(t) && ~t.indexOf("random(") ? fe(t) : t
        },
        $e = ft + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Je = {};
    _t($e + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Je[t] = 1
    });
    var Ke = function(n) {
        function a(e, i, a, o) {
            var u;
            "number" == typeof i && (a.duration = i, i = a, a = null);
            var h, l, f, c, p, d, _, m, g = (u = n.call(this, o ? i : Dt(i)) || this).vars,
                v = g.duration,
                T = g.delay,
                w = g.immediateRender,
                x = g.stagger,
                b = g.overwrite,
                M = g.keyframes,
                O = g.defaults,
                k = g.scrollTrigger,
                A = g.yoyoEase,
                C = i.parent || s,
                D = (B(e) || I(e) ? P(e[0]) : "length" in i) ? [e] : ie(e);
            if (u._targets = D.length ? ct(D) : J("GSAP target " + e + " not found. https://gsap.com", !y.nullTargetWarn) || [], u._ptLookup = [], u._overwrite = b, M || x || L(v) || L(T)) {
                if (i = u.vars, (h = u.timeline = new Ne({
                        data: "nested",
                        defaults: O || {},
                        targets: C && "nested" === C.data ? C.vars.targets : D
                    })).kill(), h.parent = h._dp = t(u), h._start = 0, x || L(v) || L(T)) {
                    if (c = D.length, _ = x && ae(x), z(x))
                        for (p in x) ~$e.indexOf(p) && (m || (m = {}), m[p] = x[p]);
                    for (l = 0; l < c; l++)(f = Ct(i, Je)).stagger = 0, A && (f.yoyoEase = A), m && kt(f, m), d = D[l], f.duration = +Ze(v, t(u), l, d, D), f.delay = (+Ze(T, t(u), l, d, D) || 0) - u._delay, !x && 1 === c && f.delay && (u._delay = T = f.delay, u._start += T, f.delay = 0), h.to(d, f, _ ? _(l, d, D) : 0), h._ease = De.none;
                    h.duration() ? v = T = 0 : u.timeline = 0
                } else if (M) {
                    Dt(Ot(h.vars.defaults, {
                        ease: "none"
                    })), h._ease = Fe(M.ease || i.ease || "none");
                    var E, S, F, Y = 0;
                    if (B(M)) M.forEach(function(t) {
                        return h.to(D, t, ">")
                    }), h.duration();
                    else {
                        for (p in f = {}, M) "ease" === p || "easeEach" === p || He(p, M[p], f, M.easeEach);
                        for (p in f)
                            for (E = f[p].sort(function(t, e) {
                                    return t.t - e.t
                                }), Y = 0, l = 0; l < E.length; l++)(F = {
                                ease: (S = E[l]).e,
                                duration: (S.t - (l ? E[l - 1].t : 0)) / 100 * v
                            })[p] = S.v, h.to(D, F, Y), Y += F.duration;
                        h.duration() < v && h.to({}, {
                            duration: v - h.duration()
                        })
                    }
                }
                v || u.duration(v = h.duration())
            } else u.timeline = 0;
            return !0 !== b || r || (Ue = t(u), s.killTweensOf(D), Ue = 0), Nt(C, t(u), a), i.reversed && u.reverse(), i.paused && u.paused(!0), (w || !v && !M && u._start === gt(C._time) && R(w) && Ft(t(u)) && "nested" !== C.data) && (u._tTime = -1e-8, u.render(Math.max(0, -T) || 0)), k && Ut(t(u), k), u
        }
        e(a, n);
        var o = a.prototype;
        return o.render = function(t, e, r) {
            var n, s, a, o, u, h, l, f, c, p = this._time,
                d = this._tDur,
                _ = this._dur,
                m = t < 0,
                g = t > d - x && !m ? d : t < x ? 0 : t;
            if (_) {
                if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m || this._lazy) {
                    if (n = g, f = this.timeline, this._repeat) {
                        if (o = _ + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * o + t, e, r);
                        if (n = gt(g % o), g === d ? (a = this._repeat, n = _) : (a = ~~(u = gt(g / o))) && a === u ? (n = _, a--) : n > _ && (n = _), (h = this._yoyo && 1 & a) && (c = this._yEase, n = _ - n), u = It(this._tTime, o), n === p && !r && this._initted && a === u) return this._tTime = g, this;
                        a !== u && (f && this._yEase && Re(f, h), this.vars.repeatRefresh && !h && !this._lock && n !== o && this._initted && (this._lock = r = 1, this.render(gt(o * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Vt(this, m ? t : n, r, e, g)) return this._tTime = 0, this;
                        if (!(p === this._time || r && this.vars.repeatRefresh && a !== u)) return this;
                        if (_ !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = g, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (c || this._ease)(n / _), this._from && (this.ratio = l = 1 - l), !p && g && !e && !u && (de(this, "onStart"), this._tTime !== g)) return this;
                    for (s = this._pt; s;) s.r(l, s.d), s = s._next;
                    f && f.render(t < 0 ? t : f._dur * f._ease(n / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (m && Rt(this, t, 0, r), de(this, "onUpdate")), this._repeat && a !== u && this.vars.onRepeat && !e && this.parent && de(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (m && !this._onUpdate && Rt(this, t, 0, !0), (t || !_) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && St(this, 1), e || m && !p || !(g || p || h) || (de(this, g === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < d && this.timeScale() > 0) && this._prom()))
                }
            } else ! function(t, e, r, n) {
                var s, a, o, u = t.ratio,
                    h = e < 0 || !e && (!t._start && jt(t) && (t._initted || !Wt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Wt(t)) ? 0 : 1,
                    l = t._rDelay,
                    f = 0;
                if (l && t._repeat && (f = Kt(0, t._tDur, e), a = It(f, l), t._yoyo && 1 & a && (h = 1 - h), a !== It(t._tTime, l) && (u = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== u || i || n || t._zTime === x || !e && t._zTime) {
                    if (!t._initted && Vt(t, e, n, r, f)) return;
                    for (o = t._zTime, t._zTime = e || (r ? x : 0), r || (r = e && !o), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = f, s = t._pt; s;) s.r(h, s.d), s = s._next;
                    e < 0 && Rt(t, e, 0, !0), t._onUpdate && !r && de(t, "onUpdate"), f && t._repeat && !r && t.parent && de(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && St(t, 1), r || i || (de(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, o.targets = function() {
            return this._targets
        }, o.invalidate = function(t) {
            return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), n.prototype.invalidate.call(this, t)
        }, o.resetTo = function(t, e, r, i, n) {
            c || Ae.wake(), this._ts || this.play();
            var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Qe(this, s),
                function(t, e, r, i, n, s, a, o) {
                    var u, h, l, f, c = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!c)
                        for (c = t._ptCache[e] = [], l = t._ptLookup, f = t._targets.length; f--;) {
                            if ((u = l[f][e]) && u.d && u.d._pt)
                                for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                            if (!u) return Ve = 1, t.vars[e] = "+=0", Qe(t, a), Ve = 0, o ? J(e + " not eligible for reset") : 1;
                            c.push(u)
                        }
                    for (f = c.length; f--;)(u = (h = c[f])._pt || h).s = !i && 0 !== i || n ? u.s + (i || 0) + s * u.c : i, u.c = r - u.s, h.e && (h.e = mt(r) + te(h.e)), h.b && (h.b = u.s + te(h.b))
                }(this, t, e, r, i, this._ease(s / this._dur), s, n) ? this.resetTo(t, e, r, i, 1) : (qt(this, 0), this.parent || Et(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, o.kill = function(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? _e(this) : this.scrollTrigger && this.scrollTrigger.kill(!!i), this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Ue && !0 !== Ue.vars.overwrite)._first || _e(this), this.parent && r !== this.timeline.totalDuration() && Gt(this, this._dur * this.timeline._tDur / r, 0, 1), this
            }
            var n, s, a, o, u, h, l, f = this._targets,
                c = t ? ie(t) : f,
                p = this._ptLookup,
                d = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                    return r < 0
                }(f, c)) return "all" === e && (this._pt = 0), _e(this);
            for (n = this._op = this._op || [], "all" !== e && (D(e) && (u = {}, _t(e, function(t) {
                    return u[t] = 1
                }), e = u), e = function(t, e) {
                    var r, i, n, s, a = t[0] ? pt(t[0]).harness : 0,
                        o = a && a.aliases;
                    if (!o) return e;
                    for (i in r = kt({}, e), o)
                        if (i in r)
                            for (n = (s = o[i].split(",")).length; n--;) r[s[n]] = r[i];
                    return r
                }(f, e)), l = f.length; l--;)
                if (~c.indexOf(f[l]))
                    for (u in s = p[l], "all" === e ? (n[l] = e, o = s, a = {}) : (a = n[l] = n[l] || {}, o = e), o)(h = s && s[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || Pt(this, h, "_pt"), delete s[u]), "all" !== a && (a[u] = 1);
            return this._initted && !this._pt && d && _e(this), this
        }, a.to = function(t, e) {
            return new a(t, e, arguments[2])
        }, a.from = function(t, e) {
            return $t(1, arguments)
        }, a.delayedCall = function(t, e, r, i) {
            return new a(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, a.fromTo = function(t, e, r) {
            return $t(2, arguments)
        }, a.set = function(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new a(t, e)
        }, a.killTweensOf = function(t, e, r) {
            return s.killTweensOf(t, e, r)
        }, a
    }(Xe);
    Ot(Ke.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), _t("staggerTo,staggerFrom,staggerFromTo", function(t) {
        Ke[t] = function() {
            var e = new Ne,
                r = ee.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
    });
    var tr = function(t, e, r) {
            return t[e] = r
        },
        er = function(t, e, r) {
            return t[e](r)
        },
        rr = function(t, e, r, i) {
            return t[e](i.fp, r)
        },
        ir = function(t, e, r) {
            return t.setAttribute(e, r)
        },
        nr = function(t, e) {
            return E(t[e]) ? er : S(t[e]) && t.setAttribute ? ir : tr
        },
        sr = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        ar = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        or = function(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        ur = function(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        hr = function(t, e, r, i) {
            for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(t, e, r), s = n
        },
        lr = function(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? Pt(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        fr = function(t, e, r, i) {
            i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
        },
        cr = function(t) {
            for (var e, r, i, n, s = t._pt; s;) {
                for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
                (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = e
            }
            t._pt = i
        },
        pr = function() {
            function t(t, e, r, i, n, s, a, o, u) {
                this.t = e, this.s = i, this.c = n, this.p = r, this.r = s || sr, this.d = a || this, this.set = o || tr, this.pr = u || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, r) {
                this.mSet = this.mSet || this.set, this.set = fr, this.m = t, this.mt = r, this.tween = e
            }, t
        }();
    _t(ft + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return nt[t] = 1
    }), Q.TweenMax = Q.TweenLite = Ke, Q.TimelineLite = Q.TimelineMax = Ne, s = new Ne({
        sortChildren: !1,
        defaults: T,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), y.stringFilter = ke;
    var dr = [],
        _r = {},
        mr = [],
        gr = 0,
        vr = 0,
        yr = function(t) {
            return (_r[t] || mr).map(function(t) {
                return t()
            })
        },
        Tr = function() {
            var t = Date.now(),
                e = [];
            t - gr > 2 && (yr("matchMediaInit"), dr.forEach(function(t) {
                var r, i, n, s, o = t.queries,
                    u = t.conditions;
                for (i in o)(r = a.matchMedia(o[i]).matches) && (n = 1), r !== u[i] && (u[i] = r, s = 1);
                s && (t.revert(), n && e.push(t))
            }), yr("matchMediaRevert"), e.forEach(function(t) {
                return t.onMatch(t, function(e) {
                    return t.add(null, e)
                })
            }), gr = t, yr("matchMedia"))
        },
        wr = function() {
            function t(t, e) {
                this.selector = e && ne(e), this.data = [], this._r = [], this.isReverted = !1, this.id = vr++, t && this.add(t)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                E(t) && (r = e, e = t, t = E);
                var i = this,
                    s = function() {
                        var t, s = n,
                            a = i.selector;
                        return s && s !== i && s.data.push(i), r && (i.selector = ne(r)), n = i, t = e.apply(i, arguments), E(t) && i._r.push(t), n = s, i.selector = a, i.isReverted = !1, t
                    };
                return i.last = s, t === E ? s(i, function(t) {
                    return i.add(null, t)
                }) : t ? i[t] = s : s
            }, e.ignore = function(t) {
                var e = n;
                n = null, t(this), n = e
            }, e.getTweens = function() {
                var e = [];
                return this.data.forEach(function(r) {
                    return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof Ke && !(r.parent && "nested" === r.parent.data) && e.push(r)
                }), e
            }, e.clear = function() {
                this._r.length = this.data.length = 0
            }, e.kill = function(t, e) {
                var r = this;
                if (t ? function() {
                        for (var e, i = r.getTweens(), n = r.data.length; n--;) "isFlip" === (e = r.data[n]).data && (e.revert(), e.getChildren(!0, !0, !1).forEach(function(t) {
                            return i.splice(i.indexOf(t), 1)
                        }));
                        for (i.map(function(t) {
                                return {
                                    g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                                    t: t
                                }
                            }).sort(function(t, e) {
                                return e.g - t.g || -1 / 0
                            }).forEach(function(e) {
                                return e.t.revert(t)
                            }), n = r.data.length; n--;)(e = r.data[n]) instanceof Ne ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof Ke) && e.revert && e.revert(t);
                        r._r.forEach(function(e) {
                            return e(t, r)
                        }), r.isReverted = !0
                    }() : this.data.forEach(function(t) {
                        return t.kill && t.kill()
                    }), this.clear(), e)
                    for (var i = dr.length; i--;) dr[i].id === this.id && dr.splice(i, 1)
            }, e.revert = function(t) {
                this.kill(t || {})
            }, t
        }(),
        xr = function() {
            function t(t) {
                this.contexts = [], this.scope = t, n && n.data.push(this)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                z(t) || (t = {
                    matches: t
                });
                var i, s, o, u = new wr(0, r || this.scope),
                    h = u.conditions = {};
                for (s in n && !u.selector && (u.selector = n.selector), this.contexts.push(u), e = u.add("onMatch", e), u.queries = t, t) "all" === s ? o = 1 : (i = a.matchMedia(t[s])) && (dr.indexOf(u) < 0 && dr.push(u), (h[s] = i.matches) && (o = 1), i.addListener ? i.addListener(Tr) : i.addEventListener("change", Tr));
                return o && e(u, function(t) {
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
        br = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                e.forEach(function(t) {
                    return ge(t)
                })
            },
            timeline: function(t) {
                return new Ne(t)
            },
            getTweensOf: function(t, e) {
                return s.getTweensOf(t, e)
            },
            getProperty: function(t, e, r, i) {
                D(t) && (t = ie(t)[0]);
                var n = pt(t || {}).get,
                    s = r ? Mt : bt;
                return "native" === r && (r = ""), t ? e ? s((ot[e] && ot[e].get || n)(t, e, r, i)) : function(e, r, i) {
                    return s((ot[e] && ot[e].get || n)(t, e, r, i))
                } : t
            },
            quickSetter: function(t, e, r) {
                if ((t = ie(t)).length > 1) {
                    var i = t.map(function(t) {
                            return kr.quickSetter(t, e, r)
                        }),
                        n = i.length;
                    return function(t) {
                        for (var e = n; e--;) i[e](t)
                    }
                }
                t = t[0] || {};
                var s = ot[e],
                    a = pt(t),
                    o = a.harness && (a.harness.aliases || {})[e] || e,
                    u = s ? function(e) {
                        var i = new s;
                        f._pt = 0, i.init(t, r ? e + r : e, f, 0, [t]), i.render(1, i), f._pt && ur(1, f)
                    } : a.set(t, o);
                return s ? u : function(e) {
                    return u(t, o, r ? e + r : e, a, 1)
                }
            },
            quickTo: function(t, e, r) {
                var i, n = kr.to(t, Ot(((i = {})[e] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})),
                    s = function(t, r, i) {
                        return n.resetTo(e, t, r, i)
                    };
                return s.tween = n, s
            },
            isTweening: function(t) {
                return s.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Fe(t.ease, T.ease)), At(T, t || {})
            },
            config: function(t) {
                return At(y, t || {})
            },
            registerEffect: function(t) {
                var e = t.name,
                    r = t.effect,
                    i = t.plugins,
                    n = t.defaults,
                    s = t.extendTimeline;
                (i || "").split(",").forEach(function(t) {
                    return t && !ot[t] && !Q[t] && J(e + " effect requires " + t + " plugin.")
                }), ut[e] = function(t, e, i) {
                    return r(ie(t), Ot(e || {}, n), i)
                }, s && (Ne.prototype[e] = function(t, r, i) {
                    return this.add(ut[e](t, z(r) ? r : (i = r) && {}, this), i)
                })
            },
            registerEase: function(t, e) {
                De[t] = Fe(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Fe(t, e) : De
            },
            getById: function(t) {
                return s.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var r, i, n = new Ne(t);
                for (n.smoothChildTiming = R(t.smoothChildTiming), s.remove(n), n._dp = 0, n._time = n._tTime = s._time, r = s._first; r;) i = r._next, !e && !r._dur && r instanceof Ke && r.vars.onComplete === r._targets[0] || Nt(n, r, r._start - r._delay), r = i;
                return Nt(s, n, 0), n
            },
            context: function(t, e) {
                return t ? new wr(t, e) : n
            },
            matchMedia: function(t) {
                return new xr(t)
            },
            matchMediaRefresh: function() {
                return dr.forEach(function(t) {
                    var e, r, i = t.conditions;
                    for (r in i) i[r] && (i[r] = !1, e = 1);
                    e && t.revert()
                }) || Tr()
            },
            addEventListener: function(t, e) {
                var r = _r[t] || (_r[t] = []);
                ~r.indexOf(e) || r.push(e)
            },
            removeEventListener: function(t, e) {
                var r = _r[t],
                    i = r && r.indexOf(e);
                i >= 0 && r.splice(i, 1)
            },
            utils: {
                wrap: function t(e, r, i) {
                    var n = r - e;
                    return B(e) ? le(e, t(0, e.length), r) : Jt(i, function(t) {
                        return (n + (t - e) % n) % n + e
                    })
                },
                wrapYoyo: function t(e, r, i) {
                    var n = r - e,
                        s = 2 * n;
                    return B(e) ? le(e, t(0, e.length - 1), r) : Jt(i, function(t) {
                        return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
                    })
                },
                distribute: ae,
                random: he,
                snap: ue,
                normalize: function(t, e, r) {
                    return ce(t, e, 0, 1, r)
                },
                getUnit: te,
                clamp: function(t, e, r) {
                    return Jt(r, function(r) {
                        return Kt(t, e, r)
                    })
                },
                splitColor: we,
                toArray: ie,
                selector: ne,
                mapRange: ce,
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
                        return t(parseFloat(r)) + (e || te(r))
                    }
                },
                interpolate: function t(e, r, i, n) {
                    var s = isNaN(e + r) ? 0 : function(t) {
                        return (1 - t) * e + t * r
                    };
                    if (!s) {
                        var a, o, u, h, l, f = D(e),
                            c = {};
                        if (!0 === i && (n = 1) && (i = null), f) e = {
                            p: e
                        }, r = {
                            p: r
                        };
                        else if (B(e) && !B(r)) {
                            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
                            h--, s = function(t) {
                                t *= h;
                                var e = Math.min(l, ~~t);
                                return u[e](t - e)
                            }, i = r
                        } else n || (e = kt(B(e) ? [] : {}, e));
                        if (!u) {
                            for (a in r) We.call(c, e, a, "get", r[a]);
                            s = function(t) {
                                return ur(t, c) || (f ? e.p : e)
                            }
                        }
                    }
                    return Jt(i, s)
                },
                shuffle: se
            },
            install: Z,
            effects: ut,
            ticker: Ae,
            updateRoot: Ne.updateRoot,
            plugins: ot,
            globalTimeline: s,
            core: {
                PropTween: pr,
                globals: K,
                Tween: Ke,
                Timeline: Ne,
                Animation: Xe,
                getCache: pt,
                _removeLinkedListItem: Pt,
                reverting: function() {
                    return i
                },
                context: function(t) {
                    return t && n && (n.data.push(t), t._ctx = n), n
                },
                suppressOverwrites: function(t) {
                    return r = t
                }
            }
        };
    _t("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return br[t] = Ke[t]
    }), Ae.add(Ne.updateRoot), f = br.to({}, {
        duration: 0
    });
    var Mr = function(t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
            return r
        },
        Or = function(t, e) {
            return {
                name: t,
                headless: 1,
                rawVars: 1,
                init: function(t, r, i) {
                    i._onInit = function(t) {
                        var i, n;
                        if (D(r) && (i = {}, _t(r, function(t) {
                                return i[t] = 1
                            }), r = i), e) {
                            for (n in i = {}, r) i[n] = e(r[n]);
                            r = i
                        }! function(t, e) {
                            var r, i, n, s = t._targets;
                            for (r in e)
                                for (i = s.length; i--;)(n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = Mr(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r))
                        }(t, r)
                    }
                }
            }
        },
        kr = br.registerPlugin({
            name: "attr",
            init: function(t, e, r, i, n) {
                var s, a, o;
                for (s in this.tween = r, e) o = t.getAttribute(s) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[s], i, n, 0, 0, s)).op = s, a.b = o, this._props.push(s)
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
        }, Or("roundProps", oe), Or("modifiers"), Or("snap", ue)) || br;
    Ke.version = Ne.version = kr.version = "3.14.2", h = 1, F() && Ce(), De.Power0, De.Power1, De.Power2, De.Power3, De.Power4, De.Linear, De.Quad, De.Cubic, De.Quart, De.Quint, De.Strong, De.Elastic, De.Back, De.SteppedEase, De.Bounce, De.Sine, De.Expo, De.Circ;
    var Ar, Cr, Dr, Er, Pr, Sr, zr, Rr, Fr = {},
        Lr = 180 / Math.PI,
        Ir = Math.PI / 180,
        Br = Math.atan2,
        Yr = /([A-Z])/g,
        qr = /(left|right|width|margin|padding|x)/i,
        Xr = /[\s,\(]\S/,
        Nr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        Ur = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Vr = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        jr = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Wr = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Gr = function(t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        },
        Qr = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Hr = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Zr = function(t, e, r) {
            return t.style[e] = r
        },
        $r = function(t, e, r) {
            return t.style.setProperty(e, r)
        },
        Jr = function(t, e, r) {
            return t._gsap[e] = r
        },
        Kr = function(t, e, r) {
            return t._gsap.scaleX = t._gsap.scaleY = r
        },
        ti = function(t, e, r, i, n) {
            var s = t._gsap;
            s.scaleX = s.scaleY = r, s.renderTransform(n, s)
        },
        ei = function(t, e, r, i, n) {
            var s = t._gsap;
            s[e] = r, s.renderTransform(n, s)
        },
        ri = "transform",
        ii = ri + "Origin",
        ni = function t(e, r) {
            var i = this,
                n = this.target,
                s = n.style,
                a = n._gsap;
            if (e in Fr && s) {
                if (this.tfm = this.tfm || {}, "transform" === e) return Nr.transform.split(",").forEach(function(e) {
                    return t.call(i, e, r)
                });
                if (~(e = Nr[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                        return i.tfm[t] = xi(n, t)
                    }) : this.tfm[e] = a.x ? a[e] : xi(n, e), e === ii && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(ri) >= 0) return;
                a.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(ii, r, "")), e = ri
            }(s || r) && this.props.push(e, r, s[e])
        },
        si = function(t) {
            t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        ai = function() {
            var t, e, r = this.props,
                i = this.target,
                n = i.style,
                s = i._gsap;
            for (t = 0; t < r.length; t += 3) r[t + 1] ? 2 === r[t + 1] ? i[r[t]](r[t + 2]) : i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(Yr, "-$1").toLowerCase());
            if (this.tfm) {
                for (e in this.tfm) s[e] = this.tfm[e];
                s.svg && (s.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = zr()) && t.isStart || n[ri] || (si(n), s.zOrigin && n[ii] && (n[ii] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1)
            }
        },
        oi = function(t, e) {
            var r = {
                target: t,
                props: [],
                revert: ai,
                save: ni
            };
            return t._gsap || kr.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(t) {
                return r.save(t)
            }), r
        },
        ui = function(t, e) {
            var r = Cr.createElementNS ? Cr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Cr.createElement(t);
            return r && r.style ? r : Cr.createElement(t)
        },
        hi = function t(e, r, i) {
            var n = getComputedStyle(e);
            return n[r] || n.getPropertyValue(r.replace(Yr, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, fi(r) || r, 1) || ""
        },
        li = "O,Moz,ms,Ms,Webkit".split(","),
        fi = function(t, e, r) {
            var i = (e || Pr).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(li[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? li[n] : "") + t
        },
        ci = function() {
            "undefined" != typeof window && window.document && (Ar = window, Cr = Ar.document, Dr = Cr.documentElement, Pr = ui("div") || {
                style: {}
            }, ui("div"), ri = fi(ri), ii = ri + "Origin", Pr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Rr = !!fi("perspective"), zr = kr.core.reverting, Er = 1)
        },
        pi = function(t) {
            var e, r = t.ownerSVGElement,
                i = ui("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                n = t.cloneNode(!0);
            n.style.display = "block", i.appendChild(n), Dr.appendChild(i);
            try {
                e = n.getBBox()
            } catch (t) {}
            return i.removeChild(n), Dr.removeChild(i), e
        },
        di = function(t, e) {
            for (var r = e.length; r--;)
                if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        _i = function(t) {
            var e, r;
            try {
                e = t.getBBox()
            } catch (i) {
                e = pi(t), r = 1
            }
            return e && (e.width || e.height) || r || (e = pi(t)), !e || e.width || e.x || e.y ? e : {
                x: +di(t, ["x", "cx", "x1"]) || 0,
                y: +di(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        mi = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !_i(t))
        },
        gi = function(t, e) {
            if (e) {
                var r, i = t.style;
                e in Fr && e !== ii && (e = ri), i.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty("--" === r ? e : e.replace(Yr, "-$1").toLowerCase())) : i.removeAttribute(e)
            }
        },
        vi = function(t, e, r, i, n, s) {
            var a = new pr(t._pt, e, r, 0, 1, s ? Hr : Qr);
            return t._pt = a, a.b = i, a.e = n, t._props.push(r), a
        },
        yi = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Ti = {
            grid: 1,
            flex: 1
        },
        wi = function t(e, r, i, n) {
            var s, a, o, u, h = parseFloat(i) || 0,
                l = (i + "").trim().substr((h + "").length) || "px",
                f = Pr.style,
                c = qr.test(r),
                p = "svg" === e.tagName.toLowerCase(),
                d = (p ? "client" : "offset") + (c ? "Width" : "Height"),
                _ = 100,
                m = "px" === n,
                g = "%" === n;
            if (n === l || !h || yi[n] || yi[l]) return h;
            if ("px" !== l && !m && (h = t(e, r, i, "px")), u = e.getCTM && mi(e), (g || "%" === l) && (Fr[r] || ~r.indexOf("adius"))) return s = u ? e.getBBox()[c ? "width" : "height"] : e[d], mt(g ? h / s * _ : h / 100 * s);
            if (f[c ? "width" : "height"] = _ + (m ? l : n), a = "rem" !== n && ~r.indexOf("adius") || "em" === n && e.appendChild && !p ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Cr && a.appendChild || (a = Cr.body), (o = a._gsap) && g && o.width && c && o.time === Ae.time && !o.uncache) return mt(h / o.width * _);
            if (!g || "height" !== r && "width" !== r)(g || "%" === l) && !Ti[hi(a, "display")] && (f.position = hi(e, "position")), a === e && (f.position = "static"), a.appendChild(Pr), s = Pr[d], a.removeChild(Pr), f.position = "absolute";
            else {
                var v = e.style[r];
                e.style[r] = _ + n, s = e[d], v ? e.style[r] = v : gi(e, r)
            }
            return c && g && ((o = pt(a)).time = Ae.time, o.width = a[d]), mt(m ? s * h / _ : s && h ? _ / s * h : 0)
        },
        xi = function(t, e, r, i) {
            var n;
            return Er || ci(), e in Nr && "transform" !== e && ~(e = Nr[e]).indexOf(",") && (e = e.split(",")[0]), Fr[e] && "transform" !== e ? (n = Ri(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Fi(hi(t, ii)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = Ai[e] && Ai[e](t, e, r) || hi(t, e) || dt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? wi(t, e, n, r) + r : n
        },
        bi = function(t, e, r, i) {
            if (!r || "none" === r) {
                var n = fi(e, t, 1),
                    s = n && hi(t, n, 1);
                s && s !== r ? (e = n, r = s) : "borderColor" === e && (r = hi(t, "borderTopColor"))
            }
            var a, o, u, h, l, f, c, p, d, _, m, g = new pr(this._pt, t.style, e, 0, 1, or),
                v = 0,
                T = 0;
            if (g.b = r, g.e = i, r += "", "var(--" === (i += "").substring(0, 6) && (i = hi(t, i.substring(4, i.indexOf(")")))), "auto" === i && (f = t.style[e], t.style[e] = i, i = hi(t, e) || i, f ? t.style[e] = f : gi(t, e)), ke(a = [r, i]), i = a[1], u = (r = a[0]).match(U) || [], (i.match(U) || []).length) {
                for (; o = U.exec(i);) c = o[0], d = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (l = 1), c !== (f = u[T++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = vt(h, c) + m), p = parseFloat(c), _ = c.substr((p + "").length), v = U.lastIndex - _.length, _ || (_ = _ || y.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = wi(t, e, f, _) || 0), g._pt = {
                    _next: g._pt,
                    p: d || 1 === T ? d : ",",
                    s: h,
                    c: p - h,
                    m: l && l < 4 || "zIndex" === e ? Math.round : 0
                });
                g.c = v < i.length ? i.substring(v, i.length) : ""
            } else g.r = "display" === e && "none" === i ? Hr : Qr;
            return j.test(i) && (g.e = 0), this._pt = g, g
        },
        Mi = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Oi = function(t) {
            var e = t.split(" "),
                r = e[0],
                i = e[1] || "50%";
            return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Mi[r] || r, e[1] = Mi[i] || i, e.join(" ")
        },
        ki = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var r, i, n, s = e.t,
                    a = s.style,
                    o = e.u,
                    u = s._gsap;
                if ("all" === o || !0 === o) a.cssText = "", i = 1;
                else
                    for (n = (o = o.split(",")).length; --n > -1;) r = o[n], Fr[r] && (i = 1, r = "transformOrigin" === r ? ii : ri), gi(s, r);
                i && (gi(s, ri), u && (u.svg && s.removeAttribute("transform"), a.scale = a.rotate = a.translate = "none", Ri(s, 1), u.uncache = 1, si(a)))
            }
        },
        Ai = {
            clearProps: function(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var s = t._pt = new pr(t._pt, e, r, 0, 0, ki);
                    return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1
                }
            }
        },
        Ci = [1, 0, 0, 1, 0, 0],
        Di = {},
        Ei = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        Pi = function(t) {
            var e = hi(t, ri);
            return Ei(e) ? Ci : e.substr(7).match(N).map(mt)
        },
        Si = function(t, e) {
            var r, i, n, s, a = t._gsap || pt(t),
                o = t.style,
                u = Pi(t);
            return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ci : u : (u !== Ci || t.offsetParent || t === Dr || a.svg || (n = o.display, o.display = "block", (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (s = 1, i = t.nextElementSibling, Dr.appendChild(t)), u = Pi(t), n ? o.display = n : gi(t, "display"), s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Dr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        zi = function(t, e, r, i, n, s) {
            var a, o, u, h = t._gsap,
                l = n || Si(t, !0),
                f = h.xOrigin || 0,
                c = h.yOrigin || 0,
                p = h.xOffset || 0,
                d = h.yOffset || 0,
                _ = l[0],
                m = l[1],
                g = l[2],
                v = l[3],
                y = l[4],
                T = l[5],
                w = e.split(" "),
                x = parseFloat(w[0]) || 0,
                b = parseFloat(w[1]) || 0;
            r ? l !== Ci && (o = _ * v - m * g) && (u = x * (-m / o) + b * (_ / o) - (_ * T - m * y) / o, x = x * (v / o) + b * (-g / o) + (g * T - v * y) / o, b = u) : (x = (a = _i(t)).x + (~w[0].indexOf("%") ? x / 100 * a.width : x), b = a.y + (~(w[1] || w[0]).indexOf("%") ? b / 100 * a.height : b)), i || !1 !== i && h.smooth ? (y = x - f, T = b - c, h.xOffset = p + (y * _ + T * g) - y, h.yOffset = d + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = x, h.yOrigin = b, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[ii] = "0px 0px", s && (vi(s, h, "xOrigin", f, x), vi(s, h, "yOrigin", c, b), vi(s, h, "xOffset", p, h.xOffset), vi(s, h, "yOffset", d, h.yOffset)), t.setAttribute("data-svg-origin", x + " " + b)
        },
        Ri = function(t, e) {
            var r = t._gsap || new qe(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, s, a, o, u, h, l, f, c, p, d, _, m, g, v, T, w, x, b, M, O, k, A, C, D, E, P, S, z, R, F, L = t.style,
                I = r.scaleX < 0,
                B = "px",
                Y = "deg",
                q = getComputedStyle(t),
                X = hi(t, ii) || "0";
            return i = n = s = u = h = l = f = c = p = 0, a = o = 1, r.svg = !(!t.getCTM || !mi(t)), q.translate && ("none" === q.translate && "none" === q.scale && "none" === q.rotate || (L[ri] = ("none" !== q.translate ? "translate3d(" + (q.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== q.rotate ? "rotate(" + q.rotate + ") " : "") + ("none" !== q.scale ? "scale(" + q.scale.split(" ").join(",") + ") " : "") + ("none" !== q[ri] ? q[ri] : "")), L.scale = L.rotate = L.translate = "none"), m = Si(t, r.svg), r.svg && (r.uncache ? (C = t.getBBox(), X = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px", A = "") : A = !e && t.getAttribute("data-svg-origin"), zi(t, A || X, !!A || r.originIsAbsolute, !1 !== r.smooth, m)), d = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Ci && (w = m[0], x = m[1], b = m[2], M = m[3], i = O = m[4], n = k = m[5], 6 === m.length ? (a = Math.sqrt(w * w + x * x), o = Math.sqrt(M * M + b * b), u = w || x ? Br(x, w) * Lr : 0, (f = b || M ? Br(b, M) * Lr + u : 0) && (o *= Math.abs(Math.cos(f * Ir))), r.svg && (i -= d - (d * w + _ * b), n -= _ - (d * x + _ * M))) : (F = m[6], z = m[7], E = m[8], P = m[9], S = m[10], R = m[11], i = m[12], n = m[13], s = m[14], h = (g = Br(F, S)) * Lr, g && (A = O * (v = Math.cos(-g)) + E * (T = Math.sin(-g)), C = k * v + P * T, D = F * v + S * T, E = O * -T + E * v, P = k * -T + P * v, S = F * -T + S * v, R = z * -T + R * v, O = A, k = C, F = D), l = (g = Br(-b, S)) * Lr, g && (v = Math.cos(-g), R = M * (T = Math.sin(-g)) + R * v, w = A = w * v - E * T, x = C = x * v - P * T, b = D = b * v - S * T), u = (g = Br(x, w)) * Lr, g && (A = w * (v = Math.cos(g)) + x * (T = Math.sin(g)), C = O * v + k * T, x = x * v - w * T, k = k * v - O * T, w = A, O = C), h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0, l = 180 - l), a = mt(Math.sqrt(w * w + x * x + b * b)), o = mt(Math.sqrt(k * k + F * F)), g = Br(O, k), f = Math.abs(g) > 2e-4 ? g * Lr : 0, p = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (A = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Ei(hi(t, ri)), A && t.setAttribute("transform", A))), Math.abs(f) > 90 && Math.abs(f) < 270 && (I ? (a *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + B, r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + B, r.z = s + B, r.scaleX = mt(a), r.scaleY = mt(o), r.rotation = mt(u) + Y, r.rotationX = mt(h) + Y, r.rotationY = mt(l) + Y, r.skewX = f + Y, r.skewY = c + Y, r.transformPerspective = p + B, (r.zOrigin = parseFloat(X.split(" ")[2]) || !e && r.zOrigin || 0) && (L[ii] = Fi(X)), r.xOffset = r.yOffset = 0, r.force3D = y.force3D, r.renderTransform = r.svg ? Ni : Rr ? Xi : Ii, r.uncache = 0, r
        },
        Fi = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Li = function(t, e, r) {
            var i = te(e);
            return mt(parseFloat(e) + parseFloat(wi(t, "x", r + "px", i))) + i
        },
        Ii = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Xi(t, e)
        },
        Bi = "0deg",
        Yi = "0px",
        qi = ") ",
        Xi = function(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                s = r.x,
                a = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                c = r.skewY,
                p = r.scaleX,
                d = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== Bi || h !== Bi)) {
                var w, x = parseFloat(h) * Ir,
                    b = Math.sin(x),
                    M = Math.cos(x);
                x = parseFloat(l) * Ir, w = Math.cos(x), s = Li(g, s, b * w * -v), a = Li(g, a, -Math.sin(x) * -v), o = Li(g, o, M * w * -v + v)
            }
            _ !== Yi && (y += "perspective(" + _ + qi), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), (T || s !== Yi || a !== Yi || o !== Yi) && (y += o !== Yi || T ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + qi), u !== Bi && (y += "rotate(" + u + qi), h !== Bi && (y += "rotateY(" + h + qi), l !== Bi && (y += "rotateX(" + l + qi), f === Bi && c === Bi || (y += "skew(" + f + ", " + c + qi), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + qi), g.style[ri] = y || "translate(0, 0)"
        },
        Ni = function(t, e) {
            var r, i, n, s, a, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                c = o.rotation,
                p = o.skewX,
                d = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                w = o.yOffset,
                x = o.forceCSS,
                b = parseFloat(l),
                M = parseFloat(f);
            c = parseFloat(c), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), c += d), c || p ? (c *= Ir, p *= Ir, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - p) * -m, s = Math.cos(c - p) * m, p && (d *= Ir, a = Math.tan(p - d), n *= a = Math.sqrt(1 + a * a), s *= a, d && (a = Math.tan(d), r *= a = Math.sqrt(1 + a * a), i *= a)), r = mt(r), i = mt(i), n = mt(n), s = mt(s)) : (r = _, s = m, i = n = 0), (b && !~(l + "").indexOf("px") || M && !~(f + "").indexOf("px")) && (b = wi(g, "x", l, "px"), M = wi(g, "y", f, "px")), (v || y || T || w) && (b = mt(b + v - (v * r + y * n) + T), M = mt(M + y - (v * i + y * s) + w)), (u || h) && (a = g.getBBox(), b = mt(b + u / 100 * a.width), M = mt(M + h / 100 * a.height)), a = "matrix(" + r + "," + i + "," + n + "," + s + "," + b + "," + M + ")", g.setAttribute("transform", a), x && (g.style[ri] = a)
        },
        Ui = function(t, e, r, i, n) {
            var s, a, o = 360,
                u = D(n),
                h = parseFloat(n) * (u && ~n.indexOf("rad") ? Lr : 1) - i,
                l = i + h + "deg";
            return u && ("short" === (s = n.split("_")[1]) && (h %= o) !== h % 180 && (h += h < 0 ? o : -360), "cw" === s && h < 0 ? h = (h + 36e9) % o - ~~(h / o) * o : "ccw" === s && h > 0 && (h = (h - 36e9) % o - ~~(h / o) * o)), t._pt = a = new pr(t._pt, e, r, i, h, Vr), a.e = l, a.u = "deg", t._props.push(r), a
        },
        Vi = function(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        ji = function(t, e, r) {
            var i, n, s, a, o, u, h, l = Vi({}, r._gsap),
                f = r.style;
            for (n in l.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), f[ri] = e, i = Ri(r, 1), gi(r, ri), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[ri], f[ri] = e, i = Ri(r, 1), f[ri] = s), Fr)(s = l[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = te(s) !== (h = te(a)) ? wi(r, n, s, h) : parseFloat(s), u = parseFloat(a), t._pt = new pr(t._pt, i, n, o, u - o, Ur), t._pt.u = h || 0, t._props.push(n));
            Vi(i, l)
        };
    _t("padding,margin,Width,Radius", function(t, e) {
        var r = "Top",
            i = "Right",
            n = "Bottom",
            s = "Left",
            a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(function(r) {
                return e < 2 ? t + r : "border" + r + t
            });
        Ai[e > 1 ? "border" + t : t] = function(t, e, r, i, n) {
            var s, o;
            if (arguments.length < 4) return s = a.map(function(e) {
                return xi(t, e, r)
            }), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
            s = (i + "").split(" "), o = {}, a.forEach(function(t, e) {
                return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            }), t.init(e, o, n)
        }
    });
    var Wi, Gi, Qi = {
        name: "css",
        register: ci,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, i, n) {
            var s, a, o, u, h, l, f, c, p, d, _, m, g, v, T, w, x, b = this._props,
                M = t.style,
                O = r.vars.startAt;
            for (f in Er || ci(), this.styles = this.styles || oi(t), w = this.styles.props, this.tween = r, e)
                if ("autoRound" !== f && (a = e[f], !ot[f] || !Ge(f, e, r, i, t, n)))
                    if (h = typeof a, l = Ai[f], "function" === h && (h = typeof(a = a.call(r, i, t, n))), "string" === h && ~a.indexOf("random(") && (a = fe(a)), l) l(this, t, f, a, r) && (T = 1);
                    else if ("--" === f.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(f) + "").trim(), a += "", Me.lastIndex = 0, Me.test(s) || (c = te(s), (p = te(a)) ? c !== p && (s = wi(t, f, s, p) + p) : c && (a += c)), this.add(M, "setProperty", s, a, i, n, 0, 0, f), b.push(f), w.push(f, 0, M[f]);
            else if ("undefined" !== h) {
                if (O && f in O ? (s = "function" == typeof O[f] ? O[f].call(r, i, t, n) : O[f], D(s) && ~s.indexOf("random(") && (s = fe(s)), te(s + "") || "auto" === s || (s += y.units[f] || te(xi(t, f)) || ""), "=" === (s + "").charAt(1) && (s = xi(t, f))) : s = xi(t, f), u = parseFloat(s), (d = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), f in Nr && ("autoAlpha" === f && (1 === u && "hidden" === xi(t, "visibility") && o && (u = 0), w.push("visibility", 0, M.visibility), vi(this, M, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Nr[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in Fr) {
                    if (this.styles.save(f), x = a, "string" === h && "var(--" === a.substring(0, 6)) {
                        if ("calc(" === (a = hi(t, a.substring(4, a.indexOf(")")))).substring(0, 5)) {
                            var k = t.style.perspective;
                            t.style.perspective = a, a = hi(t, "perspective"), k ? t.style.perspective = k : gi(t, "perspective")
                        }
                        o = parseFloat(a)
                    }
                    if (m || ((g = t._gsap).renderTransform && !e.parseTransform || Ri(t, e.parseTransform), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new pr(this._pt, M, ri, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new pr(this._pt, g, "scaleY", g.scaleY, (d ? vt(g.scaleY, d + o) : o) - g.scaleY || 0, Ur), this._pt.u = 0, b.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            w.push(ii, 0, M[ii]), a = Oi(a), g.svg ? zi(t, a, 0, v, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin && vi(this, g, "zOrigin", g.zOrigin, p), vi(this, M, f, Fi(s), Fi(a)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            zi(t, a, 1, v, 0, this);
                            continue
                        }
                        if (f in Di) {
                            Ui(this, g, f, u, d ? vt(u, d + a) : a);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            vi(this, g, "smooth", g.smooth, a);
                            continue
                        }
                        if ("force3D" === f) {
                            g[f] = a;
                            continue
                        }
                        if ("transform" === f) {
                            ji(this, a, t);
                            continue
                        }
                    }
                } else f in M || (f = fi(f) || f);
                if (_ || (o || 0 === o) && (u || 0 === u) && !Xr.test(a) && f in M) o || (o = 0), (c = (s + "").substr((u + "").length)) !== (p = te(a) || (f in y.units ? y.units[f] : c)) && (u = wi(t, f, s, p)), this._pt = new pr(this._pt, _ ? g : M, f, u, (d ? vt(u, d + o) : o) - u, _ || "px" !== p && "zIndex" !== f || !1 === e.autoRound ? Ur : Gr), this._pt.u = p || 0, _ && x !== a ? (this._pt.b = s, this._pt.e = x, this._pt.r = Wr) : c !== p && "%" !== p && (this._pt.b = s, this._pt.r = jr);
                else if (f in M) bi.call(this, t, f, s, d ? d + a : a);
                else if (f in t) this.add(t, f, s || t[f], d ? d + a : a, i, n);
                else if ("parseTransform" !== f) {
                    $(f, a);
                    continue
                }
                _ || (f in M ? w.push(f, 0, M[f]) : "function" == typeof t[f] ? w.push(f, 2, t[f]()) : w.push(f, 1, s || t[f])), b.push(f)
            }
            T && cr(this)
        },
        render: function(t, e) {
            if (e.tween._time || !zr())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: xi,
        aliases: Nr,
        getSetter: function(t, e, r) {
            var i = Nr[e];
            return i && i.indexOf(",") < 0 && (e = i), e in Fr && e !== ii && (t._gsap.x || xi(t, "x")) ? r && Sr === r ? "scale" === e ? Kr : Jr : (Sr = r || {}) && ("scale" === e ? ti : ei) : t.style && !S(t.style[e]) ? Zr : ~e.indexOf("-") ? $r : nr(t, e)
        },
        core: {
            _removeProperty: gi,
            _getMatrix: Si
        }
    };
    kr.utils.checkPrefix = fi, kr.core.getStyleSaver = oi, Gi = _t("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Wi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Fr[t] = 1
    }), _t(Wi, function(t) {
        y.units[t] = "deg", Di[t] = 1
    }), Nr[Gi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Wi, _t("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Nr[e[1]] = Gi[e[0]]
    }), _t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        y.units[t] = "px"
    }), kr.registerPlugin(Qi);
    var Hi = kr.registerPlugin(Qi) || kr;
    Hi.core.Tween, window.addEventListener("DOMContentLoaded", () => {
        const t = document.querySelectorAll(".team-portrait-wrapper"),
            e = document.querySelectorAll(".team-name"),
            r = document.querySelectorAll(".team-bg");
        if (t.length && e.length && null !== r) {
            for (let r = 0; r < t.length; r++) {
                const i = t[r],
                    n = e[r],
                    s = i.querySelector(".team-portrait"),
                    a = i.getBoundingClientRect();
                window.addEventListener("mousemove", t => {
                    const e = Math.ceil(window.innerWidth / 2),
                        r = Math.ceil(window.innerHeight / 2),
                        n = t.pageX - a.left - e,
                        s = (t.pageX - a.left) / e * 5,
                        o = 0 / r,
                        u = n / e,
                        h = 2.5 * Math.sqrt(Math.pow(o, 2) + Math.pow(u, 2));
                    Hi.to(i, {
                        xPercent: s,
                        transform: "rotate3d(0, " + u + ", 0, " + h + "deg)",
                        duration: 1,
                        ease: "none"
                    })
                }), n.addEventListener("mouseenter", () => {
                    Hi.to(s, {
                        scale: 1.03,
                        duration: 1.5,
                        ease: "power4.out"
                    })
                }), n.addEventListener("mouseleave", () => {
                    Hi.to(s, {
                        scale: 1,
                        duration: 1.5,
                        ease: "power4.out"
                    })
                })
            }
            window.addEventListener("mousemove", t => {
                const e = (t.pageX - Math.ceil(window.innerWidth / 2)) / Math.ceil(window.innerWidth / 2);
                Hi.to(r, {
                    xPercent: e,
                    duration: 1,
                    ease: "none"
                })
            })
        }
    }, !1)
}();