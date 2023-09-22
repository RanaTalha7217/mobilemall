function numberWithCommas(t) {
    return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}! function(t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : window.noUiSlider = t()
}(function() {
    "use strict";
    var t = "11.1.0";

    function e(t) {
        return null != t
    }

    function r(t) {
        t.preventDefault()
    }

    function n(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t)
    }

    function i(t, e, r) {
        r > 0 && (l(t, e), setTimeout(function() {
            u(t, e)
        }, r))
    }

    function o(t) {
        return Math.max(Math.min(t, 100), 0)
    }

    function a(t) {
        return Array.isArray(t) ? t : [t]
    }

    function s(t) {
        var e = (t = String(t)).split(".");
        return e.length > 1 ? e[1].length : 0
    }

    function l(t, e) {
        t.classList ? t.classList.add(e) : t.className += " " + e
    }

    function u(t, e) {
        t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }

    function c(t) {
        var e = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (t.compatMode || "");
        return {
            x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft,
            y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop
        }
    }

    function p(t, e) {
        return 100 / (e - t)
    }

    function f(t, e) {
        return 100 * e / (t[1] - t[0])
    }

    function d(t, e) {
        for (var r = 1; t >= e[r];) r += 1;
        return r
    }

    function h(t, e, r) {
        if (r >= t.slice(-1)[0]) return 100;
        var n = d(r, t),
            i = t[n - 1],
            o = t[n],
            a = e[n - 1],
            s = e[n];
        return a + function(t, e) {
            return f(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0])
        }([i, o], r) / p(a, s)
    }

    function m(t, e, r, n) {
        if (100 === n) return n;
        var i = d(n, t),
            o = t[i - 1],
            a = t[i];
        return r ? n - o > (a - o) / 2 ? a : o : e[i - 1] ? t[i - 1] + function(t, e) {
            return Math.round(t / e) * e
        }(n - t[i - 1], e[i - 1]) : n
    }

    function g(e, r, i) {
        var o;
        if ("number" == typeof r && (r = [r]), !Array.isArray(r)) throw new Error("noUiSlider (" + t + "): 'range' contains invalid value.");
        if (!n(o = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e)) || !n(r[0])) throw new Error("noUiSlider (" + t + "): 'range' value isn't numeric.");
        i.xPct.push(o), i.xVal.push(r[0]), o ? i.xSteps.push(!isNaN(r[1]) && r[1]) : isNaN(r[1]) || (i.xSteps[0] = r[1]), i.xHighestCompleteStep.push(0)
    }

    function v(t, e, r) {
        if (!e) return !0;
        r.xSteps[t] = f([r.xVal[t], r.xVal[t + 1]], e) / p(r.xPct[t], r.xPct[t + 1]);
        var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t],
            i = Math.ceil(Number(n.toFixed(3)) - 1),
            o = r.xVal[t] + r.xNumSteps[t] * i;
        r.xHighestCompleteStep[t] = o
    }

    function b(t, e, r) {
        var n;
        this.xPct = [], this.xVal = [], this.xSteps = [r || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = e;
        var i = [];
        for (n in t) t.hasOwnProperty(n) && i.push([t[n], n]);
        for (i.length && "object" == typeof i[0][0] ? i.sort(function(t, e) {
                return t[0][0] - e[0][0]
            }) : i.sort(function(t, e) {
                return t[0] - e[0]
            }), n = 0; n < i.length; n++) g(i[n][1], i[n][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) v(n, this.xNumSteps[n], this)
    }
    b.prototype.getMargin = function(e) {
        var r = this.xNumSteps[0];
        if (r && e / r % 1 != 0) throw new Error("noUiSlider (" + t + "): 'limit', 'margin' and 'padding' must be divisible by step.");
        return 2 === this.xPct.length && f(this.xVal, e)
    }, b.prototype.toStepping = function(t) {
        return t = h(this.xVal, this.xPct, t)
    }, b.prototype.fromStepping = function(t) {
        return function(t, e, r) {
            if (r >= 100) return t.slice(-1)[0];
            var n = d(r, e),
                i = t[n - 1],
                o = t[n],
                a = e[n - 1];
            return function(t, e) {
                return e * (t[1] - t[0]) / 100 + t[0]
            }([i, o], (r - a) * p(a, e[n]))
        }(this.xVal, this.xPct, t)
    }, b.prototype.getStep = function(t) {
        return t = m(this.xPct, this.xSteps, this.snap, t)
    }, b.prototype.getNearbySteps = function(t) {
        var e = d(t, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[e - 2],
                step: this.xNumSteps[e - 2],
                highestStep: this.xHighestCompleteStep[e - 2]
            },
            thisStep: {
                startValue: this.xVal[e - 1],
                step: this.xNumSteps[e - 1],
                highestStep: this.xHighestCompleteStep[e - 1]
            },
            stepAfter: {
                startValue: this.xVal[e - 0],
                step: this.xNumSteps[e - 0],
                highestStep: this.xHighestCompleteStep[e - 0]
            }
        }
    }, b.prototype.countStepDecimals = function() {
        var t = this.xNumSteps.map(s);
        return Math.max.apply(null, t)
    }, b.prototype.convert = function(t) {
        return this.getStep(this.toStepping(t))
    };
    var S = {
        to: function(t) {
            return void 0 !== t && t.toFixed(2)
        },
        from: Number
    };

    function x(e) {
        if (function(t) {
                return "object" == typeof t && "function" == typeof t.to && "function" == typeof t.from
            }(e)) return !0;
        throw new Error("noUiSlider (" + t + "): 'format' requires 'to' and 'from' methods.")
    }

    function w(e, r) {
        if (!n(r)) throw new Error("noUiSlider (" + t + "): 'step' is not numeric.");
        e.singleStep = r
    }

    function y(e, r) {
        if ("object" != typeof r || Array.isArray(r)) throw new Error("noUiSlider (" + t + "): 'range' is not an object.");
        if (void 0 === r.min || void 0 === r.max) throw new Error("noUiSlider (" + t + "): Missing 'min' or 'max' in 'range'.");
        if (r.min === r.max) throw new Error("noUiSlider (" + t + "): 'range' 'min' and 'max' cannot be equal.");
        e.spectrum = new b(r, e.snap, e.singleStep)
    }

    function E(e, r) {
        if (r = a(r), !Array.isArray(r) || !r.length) throw new Error("noUiSlider (" + t + "): 'start' option is incorrect.");
        e.handles = r.length, e.start = r
    }

    function C(e, r) {
        if (e.snap = r, "boolean" != typeof r) throw new Error("noUiSlider (" + t + "): 'snap' option must be a boolean.")
    }

    function N(e, r) {
        if (e.animate = r, "boolean" != typeof r) throw new Error("noUiSlider (" + t + "): 'animate' option must be a boolean.")
    }

    function U(e, r) {
        if (e.animationDuration = r, "number" != typeof r) throw new Error("noUiSlider (" + t + "): 'animationDuration' option must be a number.")
    }

    function M(e, r) {
        var n, i = [!1];
        if ("lower" === r ? r = [!0, !1] : "upper" === r && (r = [!1, !0]), !0 === r || !1 === r) {
            for (n = 1; n < e.handles; n++) i.push(r);
            i.push(!1)
        } else {
            if (!Array.isArray(r) || !r.length || r.length !== e.handles + 1) throw new Error("noUiSlider (" + t + "): 'connect' option doesn't match handle count.");
            i = r
        }
        e.connect = i
    }

    function P(e, r) {
        switch (r) {
            case "horizontal":
                e.ort = 0;
                break;
            case "vertical":
                e.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + t + "): 'orientation' option is invalid.")
        }
    }

    function A(e, r) {
        if (!n(r)) throw new Error("noUiSlider (" + t + "): 'margin' option must be numeric.");
        if (0 !== r && (e.margin = e.spectrum.getMargin(r), !e.margin)) throw new Error("noUiSlider (" + t + "): 'margin' option is only supported on linear sliders.")
    }

    function k(e, r) {
        if (!n(r)) throw new Error("noUiSlider (" + t + "): 'limit' option must be numeric.");
        if (e.limit = e.spectrum.getMargin(r), !e.limit || e.handles < 2) throw new Error("noUiSlider (" + t + "): 'limit' option is only supported on linear sliders with 2 or more handles.")
    }

    function V(e, r) {
        if (!n(r) && !Array.isArray(r)) throw new Error("noUiSlider (" + t + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(r) && 2 !== r.length && !n(r[0]) && !n(r[1])) throw new Error("noUiSlider (" + t + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== r) {
            if (Array.isArray(r) || (r = [r, r]), e.padding = [e.spectrum.getMargin(r[0]), e.spectrum.getMargin(r[1])], !1 === e.padding[0] || !1 === e.padding[1]) throw new Error("noUiSlider (" + t + "): 'padding' option is only supported on linear sliders.");
            if (e.padding[0] < 0 || e.padding[1] < 0) throw new Error("noUiSlider (" + t + "): 'padding' option must be a positive number(s).");
            if (e.padding[0] + e.padding[1] >= 100) throw new Error("noUiSlider (" + t + "): 'padding' option must not exceed 100% of the range.")
        }
    }

    function O(e, r) {
        switch (r) {
            case "ltr":
                e.dir = 0;
                break;
            case "rtl":
                e.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + t + "): 'direction' option was not recognized.")
        }
    }

    function L(e, r) {
        if ("string" != typeof r) throw new Error("noUiSlider (" + t + "): 'behaviour' must be a string containing options.");
        var n = r.indexOf("tap") >= 0,
            i = r.indexOf("drag") >= 0,
            o = r.indexOf("fixed") >= 0,
            a = r.indexOf("snap") >= 0,
            s = r.indexOf("hover") >= 0;
        if (o) {
            if (2 !== e.handles) throw new Error("noUiSlider (" + t + "): 'fixed' behaviour must be used with 2 handles");
            A(e, e.start[1] - e.start[0])
        }
        e.events = {
            tap: n || a,
            drag: i,
            fixed: o,
            snap: a,
            hover: s
        }
    }

    function z(e, r) {
        if (!1 !== r)
            if (!0 === r) {
                e.tooltips = [];
                for (var n = 0; n < e.handles; n++) e.tooltips.push(!0)
            } else {
                if (e.tooltips = a(r), e.tooltips.length !== e.handles) throw new Error("noUiSlider (" + t + "): must pass a formatter for all handles.");
                e.tooltips.forEach(function(e) {
                    if ("boolean" != typeof e && ("object" != typeof e || "function" != typeof e.to)) throw new Error("noUiSlider (" + t + "): 'tooltips' must be passed a formatter or 'false'.")
                })
            }
    }

    function j(t, e) {
        t.ariaFormat = e, x(e)
    }

    function F(t, e) {
        t.format = e, x(e)
    }

    function H(e, r) {
        if ("string" != typeof r && !1 !== r) throw new Error("noUiSlider (" + t + "): 'cssPrefix' must be a string or `false`.");
        e.cssPrefix = r
    }

    function T(e, r) {
        if ("object" != typeof r) throw new Error("noUiSlider (" + t + "): 'cssClasses' must be an object.");
        if ("string" == typeof e.cssPrefix)
            for (var n in e.cssClasses = {}, r) r.hasOwnProperty(n) && (e.cssClasses[n] = e.cssPrefix + r[n]);
        else e.cssClasses = r
    }

    function D(r) {
        var n = {
                margin: 0,
                limit: 0,
                padding: 0,
                animate: !0,
                animationDuration: 300,
                ariaFormat: S,
                format: S
            },
            i = {
                step: {
                    r: !1,
                    t: w
                },
                start: {
                    r: !0,
                    t: E
                },
                connect: {
                    r: !0,
                    t: M
                },
                direction: {
                    r: !0,
                    t: O
                },
                snap: {
                    r: !1,
                    t: C
                },
                animate: {
                    r: !1,
                    t: N
                },
                animationDuration: {
                    r: !1,
                    t: U
                },
                range: {
                    r: !0,
                    t: y
                },
                orientation: {
                    r: !1,
                    t: P
                },
                margin: {
                    r: !1,
                    t: A
                },
                limit: {
                    r: !1,
                    t: k
                },
                padding: {
                    r: !1,
                    t: V
                },
                behaviour: {
                    r: !0,
                    t: L
                },
                ariaFormat: {
                    r: !1,
                    t: j
                },
                format: {
                    r: !1,
                    t: F
                },
                tooltips: {
                    r: !1,
                    t: z
                },
                cssPrefix: {
                    r: !0,
                    t: H
                },
                cssClasses: {
                    r: !0,
                    t: T
                }
            },
            o = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                cssPrefix: "noUi-",
                cssClasses: {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    handleLower: "handle-lower",
                    handleUpper: "handle-upper",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    connects: "connects",
                    ltr: "ltr",
                    rtl: "rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                }
            };
        r.format && !r.ariaFormat && (r.ariaFormat = r.format), Object.keys(i).forEach(function(a) {
            if (!e(r[a]) && void 0 === o[a]) {
                if (i[a].r) throw new Error("noUiSlider (" + t + "): '" + a + "' is required.");
                return !0
            }
            i[a].t(n, e(r[a]) ? r[a] : o[a])
        }), n.pips = r.pips;
        var a = document.createElement("div"),
            s = void 0 !== a.style.msTransform,
            l = void 0 !== a.style.transform;
        n.transformRule = l ? "transform" : s ? "msTransform" : "webkitTransform";
        return n.style = [
            ["left", "top"],
            ["right", "bottom"]
        ][n.dir][n.ort], n
    }

    function B(e, n, s) {
        var p, f, d, h, m, g, v, b, S = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            },
            x = window.CSS && CSS.supports && CSS.supports("touch-action", "none") && function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (t) {}
                return t
            }(),
            w = e,
            y = [],
            E = [],
            C = 0,
            N = n.spectrum,
            U = [],
            M = {},
            P = e.ownerDocument,
            A = P.documentElement,
            k = P.body,
            V = "rtl" === P.dir || 1 === n.ort ? 0 : 100;

        function O(t, e) {
            var r = P.createElement("div");
            return e && l(r, e), t.appendChild(r), r
        }

        function L(t, e) {
            var r = O(t, n.cssClasses.origin),
                i = O(r, n.cssClasses.handle);
            return i.setAttribute("data-handle", e), i.setAttribute("tabindex", "0"), i.setAttribute("role", "slider"), i.setAttribute("aria-orientation", n.ort ? "vertical" : "horizontal"), 0 === e ? l(i, n.cssClasses.handleLower) : e === n.handles - 1 && l(i, n.cssClasses.handleUpper), r
        }

        function z(t, e) {
            return !!e && O(t, n.cssClasses.connect)
        }

        function j(t, e) {
            return !!n.tooltips[e] && O(t.firstChild, n.cssClasses.tooltip)
        }

        function F(t, e, r) {
            var i = P.createElement("div"),
                o = [n.cssClasses.valueNormal, n.cssClasses.valueLarge, n.cssClasses.valueSub],
                a = [n.cssClasses.markerNormal, n.cssClasses.markerLarge, n.cssClasses.markerSub],
                s = [n.cssClasses.valueHorizontal, n.cssClasses.valueVertical],
                u = [n.cssClasses.markerHorizontal, n.cssClasses.markerVertical];

            function c(t, e) {
                var r = e === n.cssClasses.value,
                    i = r ? o : a;
                return e + " " + (r ? s : u)[n.ort] + " " + i[t]
            }
            return l(i, n.cssClasses.pips), l(i, 0 === n.ort ? n.cssClasses.pipsHorizontal : n.cssClasses.pipsVertical), Object.keys(t).forEach(function(o) {
                ! function(t, o) {
                    o[1] = o[1] && e ? e(o[0], o[1]) : o[1];
                    var a = O(i, !1);
                    a.className = c(o[1], n.cssClasses.marker), a.style[n.style] = t + "%", o[1] && ((a = O(i, !1)).className = c(o[1], n.cssClasses.value), a.setAttribute("data-value", o[0]), a.style[n.style] = t + "%", a.innerText = r.to(o[0]))
                }(o, t[o])
            }), i
        }

        function H() {
            var t;
            m && ((t = m).parentElement.removeChild(t), m = null)
        }

        function T(e) {
            H();
            var r = e.mode,
                n = e.density || 1,
                i = e.filter || !1,
                o = function(e, r, n) {
                    if ("range" === e || "steps" === e) return N.xVal;
                    if ("count" === e) {
                        if (r < 2) throw new Error("noUiSlider (" + t + "): 'values' (>= 2) required for mode 'count'.");
                        var i = r - 1,
                            o = 100 / i;
                        for (r = []; i--;) r[i] = i * o;
                        r.push(100), e = "positions"
                    }
                    return "positions" === e ? r.map(function(t) {
                        return N.fromStepping(n ? N.getStep(t) : t)
                    }) : "values" === e ? n ? r.map(function(t) {
                        return N.fromStepping(N.getStep(N.toStepping(t)))
                    }) : r : void 0
                }(r, e.values || !1, e.stepped || !1),
                a = function(t, e, r) {
                    var n, i = {},
                        o = N.xVal[0],
                        a = N.xVal[N.xVal.length - 1],
                        s = !1,
                        l = !1,
                        u = 0;
                    return n = r.slice().sort(function(t, e) {
                        return t - e
                    }), (r = n.filter(function(t) {
                        return !this[t] && (this[t] = !0)
                    }, {}))[0] !== o && (r.unshift(o), s = !0), r[r.length - 1] !== a && (r.push(a), l = !0), r.forEach(function(n, o) {
                        var a, c, p, f, d, h, m, g, v, b = n,
                            S = r[o + 1];
                        if ("steps" === e && (a = N.xNumSteps[o]), a || (a = S - b), !1 !== b && void 0 !== S)
                            for (a = Math.max(a, 1e-7), c = b; c <= S; c = (c + a).toFixed(7) / 1) {
                                for (m = (d = (f = N.toStepping(c)) - u) / t, v = d / (g = Math.round(m)), p = 1; p <= g; p += 1) i[(u + p * v).toFixed(5)] = ["x", 0];
                                h = r.indexOf(c) > -1 ? 1 : "steps" === e ? 2 : 0, !o && s && (h = 0), c === S && l || (i[f.toFixed(5)] = [c, h]), u = f
                            }
                    }), i
                }(n, r, o),
                s = e.format || {
                    to: Math.round
                };
            return m = w.appendChild(F(a, i, s))
        }

        function B() {
            var t = p.getBoundingClientRect(),
                e = "offset" + ["Width", "Height"][n.ort];
            return 0 === n.ort ? t.width || p[e] : t.height || p[e]
        }

        function R(t, e, r, i) {
            var o = function(o) {
                    return !!(o = function(t, e, r) {
                        var n, i, o = 0 === t.type.indexOf("touch"),
                            a = 0 === t.type.indexOf("mouse"),
                            s = 0 === t.type.indexOf("pointer");
                        0 === t.type.indexOf("MSPointer") && (s = !0);
                        if (o) {
                            var l = function(t) {
                                return t.target === r || r.contains(t.target)
                            };
                            if ("touchstart" === t.type) {
                                var u = Array.prototype.filter.call(t.touches, l);
                                if (u.length > 1) return !1;
                                n = u[0].pageX, i = u[0].pageY
                            } else {
                                var p = Array.prototype.find.call(t.changedTouches, l);
                                if (!p) return !1;
                                n = p.pageX, i = p.pageY
                            }
                        }
                        e = e || c(P), (a || s) && (n = t.clientX + e.x, i = t.clientY + e.y);
                        return t.pageOffset = e, t.points = [n, i], t.cursor = a || s, t
                    }(o, i.pageOffset, i.target || e)) && (!(w.hasAttribute("disabled") && !i.doNotReject) && (a = w, s = n.cssClasses.tap, !((a.classList ? a.classList.contains(s) : new RegExp("\\b" + s + "\\b").test(a.className)) && !i.doNotReject) && (!(t === S.start && void 0 !== o.buttons && o.buttons > 1) && ((!i.hover || !o.buttons) && (x || o.preventDefault(), o.calcPoint = o.points[n.ort], void r(o, i))))));
                    var a, s
                },
                a = [];
            return t.split(" ").forEach(function(t) {
                e.addEventListener(t, o, !!x && {
                    passive: !0
                }), a.push([t, o])
            }), a
        }

        function I(t) {
            var e, r, i, a, s, l, u = 100 * (t - (e = p, r = n.ort, i = e.getBoundingClientRect(), a = e.ownerDocument, s = a.documentElement, l = c(a), /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (l.x = 0), r ? i.top + l.y - s.clientTop : i.left + l.x - s.clientLeft)) / B();
            return u = o(u), n.dir ? 100 - u : u
        }

        function $(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && q(t, e)
        }

        function _(t, e) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return q(t, e);
            var r = (n.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            tt(r > 0, 100 * r / e.baseSize, e.locations, e.handleNumbers)
        }

        function q(t, e) {
            e.handle && (u(e.handle, n.cssClasses.active), C -= 1), e.listeners.forEach(function(t) {
                A.removeEventListener(t[0], t[1])
            }), 0 === C && (u(w, n.cssClasses.drag), rt(), t.cursor && (k.style.cursor = "", k.removeEventListener("selectstart", r))), e.handleNumbers.forEach(function(t) {
                J("change", t), J("set", t), J("end", t)
            })
        }

        function X(t, e) {
            var i;
            if (1 === e.handleNumbers.length) {
                var o = f[e.handleNumbers[0]];
                if (o.hasAttribute("disabled")) return !1;
                i = o.children[0], C += 1, l(i, n.cssClasses.active)
            }
            t.stopPropagation();
            var a = [],
                s = R(S.move, A, _, {
                    target: t.target,
                    handle: i,
                    listeners: a,
                    startCalcPoint: t.calcPoint,
                    baseSize: B(),
                    pageOffset: t.pageOffset,
                    handleNumbers: e.handleNumbers,
                    buttonsProperty: t.buttons,
                    locations: y.slice()
                }),
                u = R(S.end, A, q, {
                    target: t.target,
                    handle: i,
                    listeners: a,
                    doNotReject: !0,
                    handleNumbers: e.handleNumbers
                }),
                c = R("mouseout", A, $, {
                    target: t.target,
                    handle: i,
                    listeners: a,
                    doNotReject: !0,
                    handleNumbers: e.handleNumbers
                });
            a.push.apply(a, s.concat(u, c)), t.cursor && (k.style.cursor = getComputedStyle(t.target).cursor, f.length > 1 && l(w, n.cssClasses.drag), k.addEventListener("selectstart", r, !1)), e.handleNumbers.forEach(function(t) {
                J("start", t)
            })
        }

        function W(t) {
            t.stopPropagation();
            var e = I(t.calcPoint),
                r = function(t) {
                    var e = 100,
                        r = !1;
                    return f.forEach(function(n, i) {
                        if (!n.hasAttribute("disabled")) {
                            var o = Math.abs(y[i] - t);
                            (o < e || 100 === o && 100 === e) && (r = i, e = o)
                        }
                    }), r
                }(e);
            if (!1 === r) return !1;
            n.events.snap || i(w, n.cssClasses.tap, n.animationDuration), nt(r, e, !0, !0), rt(), J("slide", r, !0), J("update", r, !0), J("change", r, !0), J("set", r, !0), n.events.snap && X(t, {
                handleNumbers: [r]
            })
        }

        function Y(t) {
            var e = I(t.calcPoint),
                r = N.getStep(e),
                n = N.fromStepping(r);
            Object.keys(M).forEach(function(t) {
                "hover" === t.split(".")[0] && M[t].forEach(function(t) {
                    t.call(h, n)
                })
            })
        }

        function G(t, e) {
            M[t] = M[t] || [], M[t].push(e), "update" === t.split(".")[0] && f.forEach(function(t, e) {
                J("update", e)
            })
        }

        function J(t, e, r) {
            Object.keys(M).forEach(function(i) {
                var o = i.split(".")[0];
                t === o && M[i].forEach(function(t) {
                    t.call(h, U.map(n.format.to), e, U.slice(), r || !1, y.slice())
                })
            })
        }

        function K(t) {
            return t + "%"
        }

        function Q(t, e, r, i, a, s) {
            return f.length > 1 && (i && e > 0 && (r = Math.max(r, t[e - 1] + n.margin)), a && e < f.length - 1 && (r = Math.min(r, t[e + 1] - n.margin))), f.length > 1 && n.limit && (i && e > 0 && (r = Math.min(r, t[e - 1] + n.limit)), a && e < f.length - 1 && (r = Math.max(r, t[e + 1] - n.limit))), n.padding && (0 === e && (r = Math.max(r, n.padding[0])), e === f.length - 1 && (r = Math.min(r, 100 - n.padding[1]))), !((r = o(r = N.getStep(r))) === t[e] && !s) && r
        }

        function Z(t, e) {
            var r = n.ort;
            return (r ? e : t) + ", " + (r ? t : e)
        }

        function tt(t, e, r, n) {
            var i = r.slice(),
                o = [!t, t],
                a = [t, !t];
            n = n.slice(), t && n.reverse(), n.length > 1 ? n.forEach(function(t, r) {
                var n = Q(i, t, i[t] + e, o[r], a[r], !1);
                !1 === n ? e = 0 : (e = n - i[t], i[t] = n)
            }) : o = a = [!0];
            var s = !1;
            n.forEach(function(t, n) {
                s = nt(t, r[t] + e, o[n], a[n]) || s
            }), s && n.forEach(function(t) {
                J("update", t), J("slide", t)
            })
        }

        function et(t, e) {
            return n.dir ? 100 - t - e : t
        }

        function rt() {
            E.forEach(function(t) {
                var e = y[t] > 50 ? -1 : 1,
                    r = 3 + (f.length + e * t);
                f[t].style.zIndex = r
            })
        }

        function nt(t, e, r, i) {
            return !1 !== (e = Q(y, t, e, r, i, !1)) && (function(t, e) {
                y[t] = e, U[t] = N.fromStepping(e);
                var r = "translate(" + Z(K(et(e, 0) - V), "0") + ")";
                f[t].style[n.transformRule] = r, it(t), it(t + 1)
            }(t, e), !0)
        }

        function it(t) {
            if (d[t]) {
                var e = 0,
                    r = 100;
                0 !== t && (e = y[t - 1]), t !== d.length - 1 && (r = y[t]);
                var i = r - e,
                    o = "translate(" + Z(K(et(e, i)), "0") + ")",
                    a = "scale(" + Z(i / 100, "1") + ")";
                d[t].style[n.transformRule] = o + " " + a
            }
        }

        function ot(t, e) {
            var r = a(t),
                o = void 0 === y[0];
            e = void 0 === e || !!e, n.animate && !o && i(w, n.cssClasses.tap, n.animationDuration), E.forEach(function(t) {
                nt(t, function(t, e) {
                    return null === t || !1 === t || void 0 === t ? y[e] : ("number" == typeof t && (t = String(t)), t = n.format.from(t), !1 === (t = N.toStepping(t)) || isNaN(t) ? y[e] : t)
                }(r[t], t), !0, !1)
            }), E.forEach(function(t) {
                nt(t, y[t], !0, !0)
            }), rt(), E.forEach(function(t) {
                J("update", t), null !== r[t] && e && J("set", t)
            })
        }

        function at() {
            var t = U.map(n.format.to);
            return 1 === t.length ? t[0] : t
        }
        return l(g = w, n.cssClasses.target), 0 === n.dir ? l(g, n.cssClasses.ltr) : l(g, n.cssClasses.rtl), 0 === n.ort ? l(g, n.cssClasses.horizontal) : l(g, n.cssClasses.vertical), p = O(g, n.cssClasses.base),
            function(t, e) {
                var r = O(e, n.cssClasses.connects);
                f = [], (d = []).push(z(r, t[0]));
                for (var i = 0; i < n.handles; i++) f.push(L(e, i)), E[i] = i, d.push(z(r, t[i + 1]))
            }(n.connect, p), (v = n.events).fixed || f.forEach(function(t, e) {
                R(S.start, t.children[0], X, {
                    handleNumbers: [e]
                })
            }), v.tap && R(S.start, p, W, {}), v.hover && R(S.move, p, Y, {
                hover: !0
            }), v.drag && d.forEach(function(t, e) {
                if (!1 !== t && 0 !== e && e !== d.length - 1) {
                    var r = f[e - 1],
                        i = f[e],
                        o = [t];
                    l(t, n.cssClasses.draggable), v.fixed && (o.push(r.children[0]), o.push(i.children[0])), o.forEach(function(t) {
                        R(S.start, t, X, {
                            handles: [r, i],
                            handleNumbers: [e - 1, e]
                        })
                    })
                }
            }), ot(n.start), h = {
                destroy: function() {
                    for (var t in n.cssClasses) n.cssClasses.hasOwnProperty(t) && u(w, n.cssClasses[t]);
                    for (; w.firstChild;) w.removeChild(w.firstChild);
                    delete w.noUiSlider
                },
                steps: function() {
                    return y.map(function(t, e) {
                        var r = N.getNearbySteps(t),
                            n = U[e],
                            i = r.thisStep.step,
                            o = null;
                        !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n), o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep, 100 === t ? i = null : 0 === t && (o = null);
                        var a = N.countStepDecimals();
                        return null !== i && !1 !== i && (i = Number(i.toFixed(a))), null !== o && !1 !== o && (o = Number(o.toFixed(a))), [o, i]
                    })
                },
                on: G,
                off: function(t) {
                    var e = t && t.split(".")[0],
                        r = e && t.substring(e.length);
                    Object.keys(M).forEach(function(t) {
                        var n = t.split(".")[0],
                            i = t.substring(n.length);
                        e && e !== n || r && r !== i || delete M[t]
                    })
                },
                get: at,
                set: ot,
                reset: function(t) {
                    ot(n.start, t)
                },
                __moveHandles: function(t, e, r) {
                    tt(t, e, y, r)
                },
                options: s,
                updateOptions: function(t, e) {
                    var r = at(),
                        i = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                    i.forEach(function(e) {
                        void 0 !== t[e] && (s[e] = t[e])
                    });
                    var o = D(s);
                    i.forEach(function(e) {
                        void 0 !== t[e] && (n[e] = o[e])
                    }), N = o.spectrum, n.margin = o.margin, n.limit = o.limit, n.padding = o.padding, n.pips && T(n.pips), y = [], ot(t.start || r, e)
                },
                target: w,
                removePips: H,
                pips: T
            }, n.pips && T(n.pips), n.tooltips && (b = f.map(j), G("update", function(t, e, r) {
                if (b[e]) {
                    var i = t[e];
                    !0 !== n.tooltips[e] && (i = n.tooltips[e].to(r[e])), b[e].innerHTML = i
                }
            })), G("update", function(t, e, r, i, o) {
                E.forEach(function(t) {
                    var e = f[t],
                        i = Q(y, t, 0, !0, !0, !0),
                        a = Q(y, t, 100, !0, !0, !0),
                        s = o[t],
                        l = n.ariaFormat.to(r[t]);
                    e.children[0].setAttribute("aria-valuemin", i.toFixed(1)), e.children[0].setAttribute("aria-valuemax", a.toFixed(1)), e.children[0].setAttribute("aria-valuenow", s.toFixed(1)), e.children[0].setAttribute("aria-valuetext", l)
                })
            }), h
    }
    return {
        version: t,
        create: function(e, r) {
            if (!e || !e.nodeName) throw new Error("noUiSlider (" + t + "): create requires a single element, got: " + e);
            if (e.noUiSlider) throw new Error("noUiSlider (" + t + "): Slider was already initialized.");
            var n = B(e, D(r), r);
            return e.noUiSlider = n, n
        }
    }
}), $(document).ready(function() {
    var t = document.getElementById("behaviour"),
        e = parseInt($("#min_range").val()),
        r = parseInt($("#max_range").val());
    noUiSlider.create(t, {
        start: [e, r],
        step: 1e4,
        behaviour: "drag-tap",
        connect: !0,
        range: {
            min: e,
            max: r
        }
    }), t.noUiSlider.on("update", function(t, e) {
        document.getElementById("slider-range-value1").innerHTML = numberWithCommas(Math.round(t[0])), document.getElementById("slider-range-value2").innerHTML = numberWithCommas(Math.round(t[1])), $("#min_range1").val(parseInt(t[0])), $("#max_range1").val(parseInt(t[1])), document.getElementsByName("min-value").value = t[0], document.getElementsByName("max-value").value = t[1]
    })
});