! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    e.ui = e.ui || {}, e.ui.version = "1.12.1";
    var t, i = 0,
        n = Array.prototype.slice;
    e.cleanData = (t = e.cleanData, function(i) {
            var n, s, o;
            for (o = 0; null != (s = i[o]); o++) try {
                (n = e._data(s, "events")) && n.remove && e(s).triggerHandler("remove")
            } catch (e) {}
            t(i)
        }), e.widget = function(t, i, n) {
            var s, o, a, r = {},
                l = t.split(".")[0],
                h = l + "-" + (t = t.split(".")[1]);
            return n || (n = i, i = e.Widget), e.isArray(n) && (n = e.extend.apply(null, [{}].concat(n))), e.expr[":"][h.toLowerCase()] = function(t) {
                return !!e.data(t, h)
            }, e[l] = e[l] || {}, s = e[l][t], o = e[l][t] = function(e, t) {
                if (!this._createWidget) return new o(e, t);
                arguments.length && this._createWidget(e, t)
            }, e.extend(o, s, {
                version: n.version,
                _proto: e.extend({}, n),
                _childConstructors: []
            }), (a = new i).options = e.widget.extend({}, a.options), e.each(n, function(t, n) {
                e.isFunction(n) ? r[t] = function() {
                    function e() {
                        return i.prototype[t].apply(this, arguments)
                    }

                    function s(e) {
                        return i.prototype[t].apply(this, e)
                    }
                    return function() {
                        var t, i = this._super,
                            o = this._superApply;
                        return this._super = e, this._superApply = s, t = n.apply(this, arguments), this._super = i, this._superApply = o, t
                    }
                }() : r[t] = n
            }), o.prototype = e.widget.extend(a, {
                widgetEventPrefix: s && a.widgetEventPrefix || t
            }, r, {
                constructor: o,
                namespace: l,
                widgetName: t,
                widgetFullName: h
            }), s ? (e.each(s._childConstructors, function(t, i) {
                var n = i.prototype;
                e.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
        }, e.widget.extend = function(t) {
            for (var i, s, o = n.call(arguments, 1), a = 0, r = o.length; a < r; a++)
                for (i in o[a]) s = o[a][i], o[a].hasOwnProperty(i) && void 0 !== s && (e.isPlainObject(s) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : t[i] = s);
            return t
        }, e.widget.bridge = function(t, i) {
            var s = i.prototype.widgetFullName || t;
            e.fn[t] = function(o) {
                var a = "string" == typeof o,
                    r = n.call(arguments, 1),
                    l = this;
                return a ? this.length || "instance" !== o ? this.each(function() {
                    var i, n = e.data(this, s);
                    return "instance" === o ? (l = n, !1) : n ? e.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, r)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
                }) : l = void 0 : (r.length && (o = e.widget.extend.apply(null, [o].concat(r))), this.each(function() {
                    var t = e.data(this, s);
                    t ? (t.option(o || {}), t._init && t._init()) : e.data(this, s, new i(o, this))
                })), l
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(t, n) {
                n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === n && this.destroy()
                    }
                }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                var t = this;
                this._destroy(), e.each(this.classesElementLookup, function(e, i) {
                    t._removeClass(i, e)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(t, i) {
                var n, s, o, a = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (a = {}, n = t.split("."), t = n.shift(), n.length) {
                        for (s = a[t] = e.widget.extend({}, this.options[t]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (t = n.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                        s[t] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        a[t] = i
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
            },
            _setOptionClasses: function(t) {
                var i, n, s;
                for (i in t) s = this.classesElementLookup[i], t[i] !== this.options.classes[i] && s && s.length && (n = e(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                    element: n,
                    keys: i,
                    classes: t,
                    add: !0
                })))
            },
            _setOptionDisabled: function(e) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(t) {
                var i = [],
                    n = this;

                function s(s, o) {
                    var a, r;
                    for (r = 0; r < s.length; r++) a = n.classesElementLookup[s[r]] || e(), a = t.add ? e(e.unique(a.get().concat(t.element.get()))) : e(a.not(t.element).get()), n.classesElementLookup[s[r]] = a, i.push(s[r]), o && t.classes[s[r]] && i.push(t.classes[s[r]])
                }
                return t = e.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, t), this._on(t.element, {
                    remove: "_untrackClassesElement"
                }), t.keys && s(t.keys.match(/\S+/g) || [], !0), t.extra && s(t.extra.match(/\S+/g) || []), i.join(" ")
            },
            _untrackClassesElement: function(t) {
                var i = this;
                e.each(i.classesElementLookup, function(n, s) {
                    -1 !== e.inArray(t.target, s) && (i.classesElementLookup[n] = e(s.not(t.target).get()))
                })
            },
            _removeClass: function(e, t, i) {
                return this._toggleClass(e, t, i, !1)
            },
            _addClass: function(e, t, i) {
                return this._toggleClass(e, t, i, !0)
            },
            _toggleClass: function(e, t, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof e || null === e,
                    o = {
                        extra: s ? t : i,
                        keys: s ? e : t,
                        element: s ? this.element : e,
                        add: n
                    };
                return o.element.toggleClass(this._classes(o), n), this
            },
            _on: function(t, i, n) {
                var s, o = this;
                "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), e.each(n, function(n, a) {
                    function r() {
                        if (t || !0 !== o.options.disabled && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? o[a] : a).apply(o, arguments)
                    }
                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || e.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + o.eventNamespace,
                        c = l[2];
                    c ? s.on(h, c, r) : i.on(h, r)
                })
            },
            _off: function(t, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(i).off(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function(e, t) {
                var i = this;
                return setTimeout(function() {
                    return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                }, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(t, i, n) {
                var s, o, a = this.options[t];
                if (n = n || {}, (i = e.Event(i)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(e.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, i) {
            e.Widget.prototype["_" + t] = function(n, s, o) {
                var a;
                "string" == typeof s && (s = {
                    effect: s
                });
                var r = s ? !0 === s || "number" == typeof s ? i : s.effect || i : t;
                "number" == typeof(s = s || {}) && (s = {
                    duration: s
                }), a = !e.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && e.effects && e.effects.effect[r] ? n[t](s) : r !== t && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function(i) {
                    e(this)[t](), o && o.call(n[0]), i()
                })
            }
        }), e.widget,
        function() {
            var t, i = Math.max,
                n = Math.abs,
                s = /left|center|right/,
                o = /top|center|bottom/,
                a = /[\+\-]\d+(\.[\d]+)?%?/,
                r = /^\w+/,
                l = /%$/,
                h = e.fn.position;

            function c(e, t, i) {
                return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? i / 100 : 1)]
            }

            function u(t, i) {
                return parseInt(e.css(t, i), 10) || 0
            }
            e.position = {
                scrollbarWidth: function() {
                    if (void 0 !== t) return t;
                    var i, n, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = s.children()[0];
                    return e("body").append(s), i = o.offsetWidth, s.css("overflow", "scroll"), i === (n = o.offsetWidth) && (n = s[0].clientWidth), s.remove(), t = i - n
                },
                getScrollInfo: function(t) {
                    var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth;
                    return {
                        width: "scroll" === n || "auto" === n && t.height < t.element[0].scrollHeight ? e.position.scrollbarWidth() : 0,
                        height: s ? e.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var i = e(t || window),
                        n = e.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType;
                    return {
                        element: i,
                        isWindow: n,
                        isDocument: s,
                        offset: n || s ? {
                            left: 0,
                            top: 0
                        } : e(t).offset(),
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: i.outerWidth(),
                        height: i.outerHeight()
                    }
                }
            }, e.fn.position = function(t) {
                if (!t || !t.of) return h.apply(this, arguments);
                t = e.extend({}, t);
                var l, d, f, p, m, g, v, b, _ = e(t.of),
                    y = e.position.getWithinInfo(t.within),
                    x = e.position.getScrollInfo(y),
                    w = (t.collision || "flip").split(" "),
                    C = {};
                return g = 9 === (b = (v = _)[0]).nodeType ? {
                    width: v.width(),
                    height: v.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(b) ? {
                    width: v.width(),
                    height: v.height(),
                    offset: {
                        top: v.scrollTop(),
                        left: v.scrollLeft()
                    }
                } : b.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: b.pageY,
                        left: b.pageX
                    }
                } : {
                    width: v.outerWidth(),
                    height: v.outerHeight(),
                    offset: v.offset()
                }, _[0].preventDefault && (t.at = "left top"), d = g.width, f = g.height, p = g.offset, m = e.extend({}, p), e.each(["my", "at"], function() {
                    var e, i, n = (t[this] || "").split(" ");
                    1 === n.length && (n = s.test(n[0]) ? n.concat(["center"]) : o.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = s.test(n[0]) ? n[0] : "center", n[1] = o.test(n[1]) ? n[1] : "center", e = a.exec(n[0]), i = a.exec(n[1]), C[this] = [e ? e[0] : 0, i ? i[0] : 0], t[this] = [r.exec(n[0])[0], r.exec(n[1])[0]]
                }), 1 === w.length && (w[1] = w[0]), "right" === t.at[0] ? m.left += d : "center" === t.at[0] && (m.left += d / 2), "bottom" === t.at[1] ? m.top += f : "center" === t.at[1] && (m.top += f / 2), l = c(C.at, d, f), m.left += l[0], m.top += l[1], this.each(function() {
                    var s, o, a = e(this),
                        r = a.outerWidth(),
                        h = a.outerHeight(),
                        g = u(this, "marginLeft"),
                        v = u(this, "marginTop"),
                        b = r + g + u(this, "marginRight") + x.width,
                        k = h + v + u(this, "marginBottom") + x.height,
                        T = e.extend({}, m),
                        W = c(C.my, a.outerWidth(), a.outerHeight());
                    "right" === t.my[0] ? T.left -= r : "center" === t.my[0] && (T.left -= r / 2), "bottom" === t.my[1] ? T.top -= h : "center" === t.my[1] && (T.top -= h / 2), T.left += W[0], T.top += W[1], s = {
                        marginLeft: g,
                        marginTop: v
                    }, e.each(["left", "top"], function(i, n) {
                        e.ui.position[w[i]] && e.ui.position[w[i]][n](T, {
                            targetWidth: d,
                            targetHeight: f,
                            elemWidth: r,
                            elemHeight: h,
                            collisionPosition: s,
                            collisionWidth: b,
                            collisionHeight: k,
                            offset: [l[0] + W[0], l[1] + W[1]],
                            my: t.my,
                            at: t.at,
                            within: y,
                            elem: a
                        })
                    }), t.using && (o = function(e) {
                        var s = p.left - T.left,
                            o = s + d - r,
                            l = p.top - T.top,
                            c = l + f - h,
                            u = {
                                target: {
                                    element: _,
                                    left: p.left,
                                    top: p.top,
                                    width: d,
                                    height: f
                                },
                                element: {
                                    element: a,
                                    left: T.left,
                                    top: T.top,
                                    width: r,
                                    height: h
                                },
                                horizontal: o < 0 ? "left" : s > 0 ? "right" : "center",
                                vertical: c < 0 ? "top" : l > 0 ? "bottom" : "middle"
                            };
                        d < r && n(s + o) < d && (u.horizontal = "center"), f < h && n(l + c) < f && (u.vertical = "middle"), i(n(s), n(o)) > i(n(l), n(c)) ? u.important = "horizontal" : u.important = "vertical", t.using.call(this, e, u)
                    }), a.offset(e.extend(T, {
                        using: o
                    }))
                })
            }, e.ui.position = {
                fit: {
                    left: function(e, t) {
                        var n, s = t.within,
                            o = s.isWindow ? s.scrollLeft : s.offset.left,
                            a = s.width,
                            r = e.left - t.collisionPosition.marginLeft,
                            l = o - r,
                            h = r + t.collisionWidth - a - o;
                        t.collisionWidth > a ? l > 0 && h <= 0 ? (n = e.left + l + t.collisionWidth - a - o, e.left += l - n) : e.left = h > 0 && l <= 0 ? o : l > h ? o + a - t.collisionWidth : o : l > 0 ? e.left += l : h > 0 ? e.left -= h : e.left = i(e.left - r, e.left)
                    },
                    top: function(e, t) {
                        var n, s = t.within,
                            o = s.isWindow ? s.scrollTop : s.offset.top,
                            a = t.within.height,
                            r = e.top - t.collisionPosition.marginTop,
                            l = o - r,
                            h = r + t.collisionHeight - a - o;
                        t.collisionHeight > a ? l > 0 && h <= 0 ? (n = e.top + l + t.collisionHeight - a - o, e.top += l - n) : e.top = h > 0 && l <= 0 ? o : l > h ? o + a - t.collisionHeight : o : l > 0 ? e.top += l : h > 0 ? e.top -= h : e.top = i(e.top - r, e.top)
                    }
                },
                flip: {
                    left: function(e, t) {
                        var i, s, o = t.within,
                            a = o.offset.left + o.scrollLeft,
                            r = o.width,
                            l = o.isWindow ? o.scrollLeft : o.offset.left,
                            h = e.left - t.collisionPosition.marginLeft,
                            c = h - l,
                            u = h + t.collisionWidth - r - l,
                            d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                            f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                            p = -2 * t.offset[0];
                        c < 0 ? ((i = e.left + d + f + p + t.collisionWidth - r - a) < 0 || i < n(c)) && (e.left += d + f + p) : u > 0 && ((s = e.left - t.collisionPosition.marginLeft + d + f + p - l) > 0 || n(s) < u) && (e.left += d + f + p)
                    },
                    top: function(e, t) {
                        var i, s, o = t.within,
                            a = o.offset.top + o.scrollTop,
                            r = o.height,
                            l = o.isWindow ? o.scrollTop : o.offset.top,
                            h = e.top - t.collisionPosition.marginTop,
                            c = h - l,
                            u = h + t.collisionHeight - r - l,
                            d = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                            f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                            p = -2 * t.offset[1];
                        c < 0 ? ((s = e.top + d + f + p + t.collisionHeight - r - a) < 0 || s < n(c)) && (e.top += d + f + p) : u > 0 && ((i = e.top - t.collisionPosition.marginTop + d + f + p - l) > 0 || n(i) < u) && (e.top += d + f + p)
                    }
                },
                flipfit: {
                    left: function() {
                        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }(), e.ui.position, e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(i) {
                    return !!e.data(i, t)
                }
            }) : function(t, i, n) {
                return !!e.data(t, n[3])
            }
        }), e.fn.extend({
            disableSelection: (s = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                return this.on(s + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }),
            enableSelection: function() {
                return this.off(".ui-disableSelection")
            }
        });
    var s, o, a, r, l = "ui-effects-animated",
        h = e;
    e.effects = {
            effect: {}
        },
        function(e, t) {
            var i, n = /^([\-+])=\s*(\d+\.?\d*)/,
                s = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                o = e.Color = function(t, i, n, s) {
                    return new e.Color.fn.parse(t, i, n, s)
                },
                a = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                r = {
                    byte: {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                l = o.support = {},
                h = e("<p>")[0],
                c = e.each;

            function u(e, t, i) {
                var n = r[t.type] || {};
                return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : n.max < e ? n.max : e)
            }

            function d(t) {
                var n = o(),
                    r = n._rgba = [];
                return t = t.toLowerCase(), c(s, function(e, i) {
                    var s, o = i.re.exec(t),
                        l = o && i.parse(o),
                        h = i.space || "rgba";
                    if (l) return s = n[h](l), n[a[h].cache] = s[a[h].cache], r = n._rgba = s._rgba, !1
                }), r.length ? ("0,0,0,0" === r.join() && e.extend(r, i.transparent), n) : i[t]
            }

            function f(e, t, i) {
                return 6 * (i = (i + 1) % 1) < 1 ? e + (t - e) * i * 6 : 2 * i < 1 ? t : 3 * i < 2 ? e + (t - e) * (2 / 3 - i) * 6 : e
            }
            h.style.cssText = "background-color:rgba(1,1,1,.5)", l.rgba = h.style.backgroundColor.indexOf("rgba") > -1, c(a, function(e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), o.fn = e.extend(o.prototype, {
                parse: function(t, n, s, r) {
                    if (void 0 === t) return this._rgba = [null, null, null, null], this;
                    (t.jquery || t.nodeType) && (t = e(t).css(n), n = void 0);
                    var l = this,
                        h = e.type(t),
                        f = this._rgba = [];
                    return void 0 !== n && (t = [t, n, s, r], h = "array"), "string" === h ? this.parse(d(t) || i._default) : "array" === h ? (c(a.rgba.props, function(e, i) {
                        f[i.idx] = u(t[i.idx], i)
                    }), this) : "object" === h ? (c(a, t instanceof o ? function(e, i) {
                        t[i.cache] && (l[i.cache] = t[i.cache].slice())
                    } : function(i, n) {
                        var s = n.cache;
                        c(n.props, function(e, i) {
                            if (!l[s] && n.to) {
                                if ("alpha" === e || null == t[e]) return;
                                l[s] = n.to(l._rgba)
                            }
                            l[s][i.idx] = u(t[e], i, !0)
                        }), l[s] && e.inArray(null, l[s].slice(0, 3)) < 0 && (l[s][3] = 1, n.from && (l._rgba = n.from(l[s])))
                    }), this) : void 0
                },
                is: function(e) {
                    var t = o(e),
                        i = !0,
                        n = this;
                    return c(a, function(e, s) {
                        var o, a = t[s.cache];
                        return a && (o = n[s.cache] || s.to && s.to(n._rgba) || [], c(s.props, function(e, t) {
                            if (null != a[t.idx]) return i = a[t.idx] === o[t.idx]
                        })), i
                    }), i
                },
                _space: function() {
                    var e = [],
                        t = this;
                    return c(a, function(i, n) {
                        t[n.cache] && e.push(i)
                    }), e.pop()
                },
                transition: function(e, t) {
                    var i = o(e),
                        n = i._space(),
                        s = a[n],
                        l = 0 === this.alpha() ? o("transparent") : this,
                        h = l[s.cache] || s.to(l._rgba),
                        d = h.slice();
                    return i = i[s.cache], c(s.props, function(e, n) {
                        var s = n.idx,
                            o = h[s],
                            a = i[s],
                            l = r[n.type] || {};
                        null !== a && (null === o ? d[s] = a : (l.mod && (a - o > l.mod / 2 ? o += l.mod : o - a > l.mod / 2 && (o -= l.mod)), d[s] = u((a - o) * t + o, n)))
                    }), this[n](d)
                },
                blend: function(t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        s = o(t)._rgba;
                    return o(e.map(i, function(e, t) {
                        return (1 - n) * s[t] + n * e
                    }))
                },
                toRgbaString: function() {
                    var t = "rgba(",
                        i = e.map(this._rgba, function(e, t) {
                            return null == e ? t > 2 ? 1 : 0 : e
                        });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function() {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function(e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(100 * e) + "%"), e
                        });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function(t) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return t && i.push(~~(255 * n)), "#" + e.map(i, function(e) {
                        return 1 === (e = (e || 0).toString(16)).length ? "0" + e : e
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), o.fn.parse.prototype = o.fn, a.hsla.to = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, i, n = e[0] / 255,
                    s = e[1] / 255,
                    o = e[2] / 255,
                    a = e[3],
                    r = Math.max(n, s, o),
                    l = Math.min(n, s, o),
                    h = r - l,
                    c = r + l,
                    u = .5 * c;
                return t = l === r ? 0 : n === r ? 60 * (s - o) / h + 360 : s === r ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : u <= .5 ? h / c : h / (2 - c), [Math.round(t) % 360, i, u, null == a ? 1 : a]
            }, a.hsla.from = function(e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    i = e[1],
                    n = e[2],
                    s = e[3],
                    o = n <= .5 ? n * (1 + i) : n + i - n * i,
                    a = 2 * n - o;
                return [Math.round(255 * f(a, o, t + 1 / 3)), Math.round(255 * f(a, o, t)), Math.round(255 * f(a, o, t - 1 / 3)), s]
            }, c(a, function(t, i) {
                var s = i.props,
                    a = i.cache,
                    r = i.to,
                    l = i.from;
                o.fn[t] = function(t) {
                    if (r && !this[a] && (this[a] = r(this._rgba)), void 0 === t) return this[a].slice();
                    var i, n = e.type(t),
                        h = "array" === n || "object" === n ? t : arguments,
                        d = this[a].slice();
                    return c(s, function(e, t) {
                        var i = h["object" === n ? e : t.idx];
                        null == i && (i = d[t.idx]), d[t.idx] = u(i, t)
                    }), l ? ((i = o(l(d)))[a] = d, i) : o(d)
                }, c(s, function(i, s) {
                    o.fn[i] || (o.fn[i] = function(o) {
                        var a, r = e.type(o),
                            l = "alpha" === i ? this._hsla ? "hsla" : "rgba" : t,
                            h = this[l](),
                            c = h[s.idx];
                        return "undefined" === r ? c : ("function" === r && (o = o.call(this, c), r = e.type(o)), null == o && s.empty ? this : ("string" === r && (a = n.exec(o)) && (o = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1)), h[s.idx] = o, this[l](h)))
                    })
                })
            }), o.hook = function(t) {
                var i = t.split(" ");
                c(i, function(t, i) {
                    e.cssHooks[i] = {
                        set: function(t, n) {
                            var s, a, r = "";
                            if ("transparent" !== n && ("string" !== e.type(n) || (s = d(n)))) {
                                if (n = o(s || n), !l.rgba && 1 !== n._rgba[3]) {
                                    for (a = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === r || "transparent" === r) && a && a.style;) try {
                                        r = e.css(a, "backgroundColor"), a = a.parentNode
                                    } catch (e) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                t.style[i] = n
                            } catch (e) {}
                        }
                    }, e.fx.step[i] = function(t) {
                        t.colorInit || (t.start = o(t.elem, i), t.end = o(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, o.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), e.cssHooks.borderColor = {
                expand: function(e) {
                    var t = {};
                    return c(["Top", "Right", "Bottom", "Left"], function(i, n) {
                        t["border" + n + "Color"] = e
                    }), t
                }
            }, i = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(h),
        function() {
            var t, i = ["add", "remove", "toggle"],
                n = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };

            function s(t) {
                var i, n, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    o = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (n = s.length; n--;) "string" == typeof s[i = s[n]] && (o[e.camelCase(i)] = s[i]);
                else
                    for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                return o
            }
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                e.fx.step[i] = function(e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (h.style(e.elem, i, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e.effects.animateClass = function(t, o, a, r) {
                var l = e.speed(o, a, r);
                return this.queue(function() {
                    var o, a = e(this),
                        r = a.attr("class") || "",
                        h = l.children ? a.find("*").addBack() : a;
                    h = h.map(function() {
                        return {
                            el: e(this),
                            start: s(this)
                        }
                    }), (o = function() {
                        e.each(i, function(e, i) {
                            t[i] && a[i + "Class"](t[i])
                        })
                    })(), h = h.map(function() {
                        return this.end = s(this.el[0]), this.diff = function(t, i) {
                            var s, o, a = {};
                            for (s in i) o = i[s], t[s] !== o && (n[s] || !e.fx.step[s] && isNaN(parseFloat(o)) || (a[s] = o));
                            return a
                        }(this.start, this.end), this
                    }), a.attr("class", r), h = h.map(function() {
                        var t = this,
                            i = e.Deferred(),
                            n = e.extend({}, l, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, n), i.promise()
                    }), e.when.apply(e, h.get()).done(function() {
                        o(), e.each(arguments, function() {
                            var t = this.el;
                            e.each(this.diff, function(e) {
                                t.css(e, "")
                            })
                        }), l.complete.call(a[0])
                    })
                })
            }, e.fn.extend({
                addClass: (t = e.fn.addClass, function(i, n, s, o) {
                    return n ? e.effects.animateClass.call(this, {
                        add: i
                    }, n, s, o) : t.apply(this, arguments)
                }),
                removeClass: function(t) {
                    return function(i, n, s, o) {
                        return arguments.length > 1 ? e.effects.animateClass.call(this, {
                            remove: i
                        }, n, s, o) : t.apply(this, arguments)
                    }
                }(e.fn.removeClass),
                toggleClass: function(t) {
                    return function(i, n, s, o, a) {
                        return "boolean" == typeof n || void 0 === n ? s ? e.effects.animateClass.call(this, n ? {
                            add: i
                        } : {
                            remove: i
                        }, s, o, a) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                            toggle: i
                        }, n, s, o)
                    }
                }(e.fn.toggleClass),
                switchClass: function(t, i, n, s, o) {
                    return e.effects.animateClass.call(this, {
                        add: i,
                        remove: t
                    }, n, s, o)
                }
            })
        }(),
        function() {
            var t;

            function i(t, i, n, s) {
                return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                    effect: t
                }, null == i && (i = {}), e.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (s = n, n = i, i = {}), e.isFunction(n) && (s = n, n = null), i && e.extend(t, i), n = n || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof n ? n : n in e.fx.speeds ? e.fx.speeds[n] : e.fx.speeds._default, t.complete = s || i.complete, t
            }

            function n(t) {
                return !(t && "number" != typeof t && !e.fx.speeds[t]) || "string" == typeof t && !e.effects.effect[t] || !!e.isFunction(t) || "object" == typeof t && !t.effect
            }

            function s(e, t) {
                var i = t.outerWidth(),
                    n = t.outerHeight(),
                    s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(e) || ["", 0, i, n, 0];
                return {
                    top: parseFloat(s[1]) || 0,
                    right: "auto" === s[2] ? i : parseFloat(s[2]),
                    bottom: "auto" === s[3] ? n : parseFloat(s[3]),
                    left: parseFloat(s[4]) || 0
                }
            }
            e.expr && e.expr.filters && e.expr.filters.animated && (e.expr.filters.animated = (t = e.expr.filters.animated, function(i) {
                return !!e(i).data(l) || t(i)
            })), !1 !== e.uiBackCompat && e.extend(e.effects, {
                save: function(e, t) {
                    for (var i = 0, n = t.length; i < n; i++) null !== t[i] && e.data("ui-effects-" + t[i], e[0].style[t[i]])
                },
                restore: function(e, t) {
                    for (var i, n = 0, s = t.length; n < s; n++) null !== t[n] && (i = e.data("ui-effects-" + t[n]), e.css(t[n], i))
                },
                setMode: function(e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            float: t.css("float")
                        },
                        n = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        s = {
                            width: t.width(),
                            height: t.height()
                        },
                        o = document.activeElement;
                    try {
                        o.id
                    } catch (e) {
                        o = document.body
                    }
                    return t.wrap(n), (t[0] === o || e.contains(t[0], o)) && e(o).trigger("focus"), n = t.parent(), "static" === t.css("position") ? (n.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function(e, n) {
                        i[n] = t.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(s), n.css(i).show()
                },
                removeWrapper: function(t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).trigger("focus")), t
                }
            }), e.extend(e.effects, {
                version: "1.12.1",
                define: function(t, i, n) {
                    return n || (n = i, i = "effect"), e.effects.effect[t] = n, e.effects.effect[t].mode = i, n
                },
                scaledDimensions: function(e, t, i) {
                    if (0 === t) return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                    var n = "horizontal" !== i ? (t || 100) / 100 : 1,
                        s = "vertical" !== i ? (t || 100) / 100 : 1;
                    return {
                        height: e.height() * s,
                        width: e.width() * n,
                        outerHeight: e.outerHeight() * s,
                        outerWidth: e.outerWidth() * n
                    }
                },
                clipToBox: function(e) {
                    return {
                        width: e.clip.right - e.clip.left,
                        height: e.clip.bottom - e.clip.top,
                        left: e.clip.left,
                        top: e.clip.top,
                        position: "absolute"
                    }
                },
                unshift: function(e, t, i) {
                    var n = e.queue();
                    t > 1 && n.splice.apply(n, [1, 0].concat(n.splice(t, i))), e.dequeue()
                },
                saveStyle: function(e) {
                    e.data("ui-effects-style", e[0].style.cssText)
                },
                restoreStyle: function(e) {
                    e[0].style.cssText = e.data("ui-effects-style") || "", e.removeData("ui-effects-style")
                },
                mode: function(e, t) {
                    var i = e.is(":hidden");
                    return "toggle" === t && (t = i ? "show" : "hide"), (i ? "hide" === t : "show" === t) && (t = "none"), t
                },
                getBaseline: function(e, t) {
                    var i, n;
                    switch (e[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            n = 0;
                            break;
                        case "center":
                            n = .5;
                            break;
                        case "right":
                            n = 1;
                            break;
                        default:
                            n = e[1] / t.width
                    }
                    return {
                        x: n,
                        y: i
                    }
                },
                createPlaceholder: function(t) {
                    var i, n = t.css("position"),
                        s = t.position();
                    return t.css({
                        marginTop: t.css("marginTop"),
                        marginBottom: t.css("marginBottom"),
                        marginLeft: t.css("marginLeft"),
                        marginRight: t.css("marginRight")
                    }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = e("<" + t[0].nodeName + ">").insertAfter(t).css({
                        display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                        visibility: "hidden",
                        marginTop: t.css("marginTop"),
                        marginBottom: t.css("marginBottom"),
                        marginLeft: t.css("marginLeft"),
                        marginRight: t.css("marginRight"),
                        float: t.css("float")
                    }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data("ui-effects-placeholder", i)), t.css({
                        left: s.left,
                        top: s.top,
                        position: "absolute"
                    }), i
                },
                removePlaceholder: function(e) {
                    var t = "ui-effects-placeholder",
                        i = e.data(t);
                    i && (i.remove(), e.removeData(t))
                },
                cleanUp: function(t) {
                    e.effects.restoreStyle(t), e.effects.removePlaceholder(t)
                },
                setTransition: function(t, i, n, s) {
                    return s = s || {}, e.each(i, function(e, i) {
                        var o = t.cssUnit(i);
                        o[0] > 0 && (s[i] = o[0] * n + o[1])
                    }), s
                }
            }), e.fn.extend({
                effect: function() {
                    var t = i.apply(this, arguments),
                        n = e.effects.effect[t.effect],
                        s = n.mode,
                        o = t.queue,
                        a = o || "fx",
                        r = t.complete,
                        h = t.mode,
                        c = [],
                        u = function(t) {
                            var i = e(this),
                                n = e.effects.mode(i, h) || s;
                            i.data(l, !0), c.push(n), s && ("show" === n || n === s && "hide" === n) && i.show(), s && "none" === n || e.effects.saveStyle(i), e.isFunction(t) && t()
                        };
                    if (e.fx.off || !n) return h ? this[h](t.duration, r) : this.each(function() {
                        r && r.call(this)
                    });

                    function d(i) {
                        var o = e(this);

                        function a() {
                            e.isFunction(r) && r.call(o[0]), e.isFunction(i) && i()
                        }
                        t.mode = c.shift(), !1 === e.uiBackCompat || s ? "none" === t.mode ? (o[h](), a()) : n.call(o[0], t, function() {
                            o.removeData(l), e.effects.cleanUp(o), "hide" === t.mode && o.hide(), a()
                        }) : (o.is(":hidden") ? "hide" === h : "show" === h) ? (o[h](), a()) : n.call(o[0], t, a)
                    }
                    return !1 === o ? this.each(u).each(d) : this.queue(a, u).queue(a, d)
                },
                show: function(e) {
                    return function(t) {
                        if (n(t)) return e.apply(this, arguments);
                        var s = i.apply(this, arguments);
                        return s.mode = "show", this.effect.call(this, s)
                    }
                }(e.fn.show),
                hide: function(e) {
                    return function(t) {
                        if (n(t)) return e.apply(this, arguments);
                        var s = i.apply(this, arguments);
                        return s.mode = "hide", this.effect.call(this, s)
                    }
                }(e.fn.hide),
                toggle: function(e) {
                    return function(t) {
                        if (n(t) || "boolean" == typeof t) return e.apply(this, arguments);
                        var s = i.apply(this, arguments);
                        return s.mode = "toggle", this.effect.call(this, s)
                    }
                }(e.fn.toggle),
                cssUnit: function(t) {
                    var i = this.css(t),
                        n = [];
                    return e.each(["em", "px", "%", "pt"], function(e, t) {
                        i.indexOf(t) > 0 && (n = [parseFloat(i), t])
                    }), n
                },
                cssClip: function(e) {
                    return e ? this.css("clip", "rect(" + e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px)") : s(this.css("clip"), this)
                },
                transfer: function(t, i) {
                    var n = e(this),
                        s = e(t.to),
                        o = "fixed" === s.css("position"),
                        a = e("body"),
                        r = o ? a.scrollTop() : 0,
                        l = o ? a.scrollLeft() : 0,
                        h = s.offset(),
                        c = {
                            top: h.top - r,
                            left: h.left - l,
                            height: s.innerHeight(),
                            width: s.innerWidth()
                        },
                        u = n.offset(),
                        d = e("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                            top: u.top - r,
                            left: u.left - l,
                            height: n.innerHeight(),
                            width: n.innerWidth(),
                            position: o ? "fixed" : "absolute"
                        }).animate(c, t.duration, t.easing, function() {
                            d.remove(), e.isFunction(i) && i()
                        })
                }
            }), e.fx.step.clip = function(t) {
                t.clipInit || (t.start = e(t.elem).cssClip(), "string" == typeof t.end && (t.end = s(t.end, t.elem)), t.clipInit = !0), e(t.elem).cssClip({
                    top: t.pos * (t.end.top - t.start.top) + t.start.top,
                    right: t.pos * (t.end.right - t.start.right) + t.start.right,
                    bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                    left: t.pos * (t.end.left - t.start.left) + t.start.left
                })
            }
        }(), o = {}, e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, t) {
            o[t] = function(t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(o, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function(e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function(e) {
                for (var t, i = 4; e < ((t = Math.pow(2, --i)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }), e.each(o, function(t, i) {
            e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function(e) {
                return 1 - i(1 - e)
            }, e.easing["easeInOut" + t] = function(e) {
                return e < .5 ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
            }
        }), e.effects, e.effects.define("blind", "hide", function(t, i) {
            var n = {
                    up: ["bottom", "top"],
                    vertical: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    horizontal: ["right", "left"],
                    right: ["left", "right"]
                },
                s = e(this),
                o = t.direction || "up",
                a = s.cssClip(),
                r = {
                    clip: e.extend({}, a)
                },
                l = e.effects.createPlaceholder(s);
            r.clip[n[o][0]] = r.clip[n[o][1]], "show" === t.mode && (s.cssClip(r.clip), l && l.css(e.effects.clipToBox(r)), r.clip = a), l && l.animate(e.effects.clipToBox(r), t.duration, t.easing), s.animate(r, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }), e.effects.define("bounce", function(t, i) {
            var n, s, o, a = e(this),
                r = t.mode,
                l = "hide" === r,
                h = "show" === r,
                c = t.direction || "up",
                u = t.distance,
                d = t.times || 5,
                f = 2 * d + (h || l ? 1 : 0),
                p = t.duration / f,
                m = t.easing,
                g = "up" === c || "down" === c ? "top" : "left",
                v = "up" === c || "left" === c,
                b = 0,
                _ = a.queue().length;
            for (e.effects.createPlaceholder(a), o = a.css(g), u || (u = a["top" === g ? "outerHeight" : "outerWidth"]() / 3), h && ((s = {
                    opacity: 1
                })[g] = o, a.css("opacity", 0).css(g, v ? 2 * -u : 2 * u).animate(s, p, m)), l && (u /= Math.pow(2, d - 1)), (s = {})[g] = o; b < d; b++)(n = {})[g] = (v ? "-=" : "+=") + u, a.animate(n, p, m).animate(s, p, m), u = l ? 2 * u : u / 2;
            l && ((n = {
                opacity: 0
            })[g] = (v ? "-=" : "+=") + u, a.animate(n, p, m)), a.queue(i), e.effects.unshift(a, _, f + 1)
        }), e.effects.define("clip", "hide", function(t, i) {
            var n, s = {},
                o = e(this),
                a = t.direction || "vertical",
                r = "both" === a,
                l = r || "horizontal" === a,
                h = r || "vertical" === a;
            n = o.cssClip(), s.clip = {
                top: h ? (n.bottom - n.top) / 2 : n.top,
                right: l ? (n.right - n.left) / 2 : n.right,
                bottom: h ? (n.bottom - n.top) / 2 : n.bottom,
                left: l ? (n.right - n.left) / 2 : n.left
            }, e.effects.createPlaceholder(o), "show" === t.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }), e.effects.define("drop", "hide", function(t, i) {
            var n, s = e(this),
                o = "show" === t.mode,
                a = t.direction || "left",
                r = "up" === a || "down" === a ? "top" : "left",
                l = "up" === a || "left" === a ? "-=" : "+=",
                h = "+=" === l ? "-=" : "+=",
                c = {
                    opacity: 0
                };
            e.effects.createPlaceholder(s), n = t.distance || s["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, c[r] = l + n, o && (s.css(c), c[r] = h + n, c.opacity = 1), s.animate(c, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }), e.effects.define("explode", "hide", function(t, i) {
            var n, s, o, a, r, l, h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                c = h,
                u = e(this),
                d = "show" === t.mode,
                f = u.show().css("visibility", "hidden").offset(),
                p = Math.ceil(u.outerWidth() / c),
                m = Math.ceil(u.outerHeight() / h),
                g = [];

            function v() {
                g.push(this), g.length === h * c && (u.css({
                    visibility: "visible"
                }), e(g).remove(), i())
            }
            for (n = 0; n < h; n++)
                for (a = f.top + n * m, l = n - (h - 1) / 2, s = 0; s < c; s++) o = f.left + s * p, r = s - (c - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -s * p,
                    top: -n * m
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: p,
                    height: m,
                    left: o + (d ? r * p : 0),
                    top: a + (d ? l * m : 0),
                    opacity: d ? 0 : 1
                }).animate({
                    left: o + (d ? 0 : r * p),
                    top: a + (d ? 0 : l * m),
                    opacity: d ? 1 : 0
                }, t.duration || 500, t.easing, v)
        }), e.effects.define("fade", "toggle", function(t, i) {
            var n = "show" === t.mode;
            e(this).css("opacity", n ? 0 : 1).animate({
                opacity: n ? 1 : 0
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }), e.effects.define("fold", "hide", function(t, i) {
            var n = e(this),
                s = t.mode,
                o = "show" === s,
                a = "hide" === s,
                r = t.size || 15,
                l = /([0-9]+)%/.exec(r),
                h = t.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
                c = t.duration / 2,
                u = e.effects.createPlaceholder(n),
                d = n.cssClip(),
                f = {
                    clip: e.extend({}, d)
                },
                p = {
                    clip: e.extend({}, d)
                },
                m = [d[h[0]], d[h[1]]],
                g = n.queue().length;
            l && (r = parseInt(l[1], 10) / 100 * m[a ? 0 : 1]), f.clip[h[0]] = r, p.clip[h[0]] = r, p.clip[h[1]] = 0, o && (n.cssClip(p.clip), u && u.css(e.effects.clipToBox(p)), p.clip = d), n.queue(function(i) {
                u && u.animate(e.effects.clipToBox(f), c, t.easing).animate(e.effects.clipToBox(p), c, t.easing), i()
            }).animate(f, c, t.easing).animate(p, c, t.easing).queue(i), e.effects.unshift(n, g, 4)
        }), e.effects.define("highlight", "show", function(t, i) {
            var n = e(this),
                s = {
                    backgroundColor: n.css("backgroundColor")
                };
            "hide" === t.mode && (s.opacity = 0), e.effects.saveStyle(n), n.css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }), e.effects.define("size", function(t, i) {
            var n, s, o, a = e(this),
                r = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                c = t.mode,
                u = "effect" !== c,
                d = t.scale || "both",
                f = t.origin || ["middle", "center"],
                p = a.css("position"),
                m = a.position(),
                g = e.effects.scaledDimensions(a),
                v = t.from || g,
                b = t.to || e.effects.scaledDimensions(a, 0);
            e.effects.createPlaceholder(a), "show" === c && (o = v, v = b, b = o), s = {
                from: {
                    y: v.height / g.height,
                    x: v.width / g.width
                },
                to: {
                    y: b.height / g.height,
                    x: b.width / g.width
                }
            }, "box" !== d && "both" !== d || (s.from.y !== s.to.y && (v = e.effects.setTransition(a, l, s.from.y, v), b = e.effects.setTransition(a, l, s.to.y, b)), s.from.x !== s.to.x && (v = e.effects.setTransition(a, h, s.from.x, v), b = e.effects.setTransition(a, h, s.to.x, b))), "content" !== d && "both" !== d || s.from.y !== s.to.y && (v = e.effects.setTransition(a, r, s.from.y, v), b = e.effects.setTransition(a, r, s.to.y, b)), f && (n = e.effects.getBaseline(f, g), v.top = (g.outerHeight - v.outerHeight) * n.y + m.top, v.left = (g.outerWidth - v.outerWidth) * n.x + m.left, b.top = (g.outerHeight - b.outerHeight) * n.y + m.top, b.left = (g.outerWidth - b.outerWidth) * n.x + m.left), a.css(v), "content" !== d && "both" !== d || (l = l.concat(["marginTop", "marginBottom"]).concat(r), h = h.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
                var i = e(this),
                    n = e.effects.scaledDimensions(i),
                    o = {
                        height: n.height * s.from.y,
                        width: n.width * s.from.x,
                        outerHeight: n.outerHeight * s.from.y,
                        outerWidth: n.outerWidth * s.from.x
                    },
                    a = {
                        height: n.height * s.to.y,
                        width: n.width * s.to.x,
                        outerHeight: n.height * s.to.y,
                        outerWidth: n.width * s.to.x
                    };
                s.from.y !== s.to.y && (o = e.effects.setTransition(i, l, s.from.y, o), a = e.effects.setTransition(i, l, s.to.y, a)), s.from.x !== s.to.x && (o = e.effects.setTransition(i, h, s.from.x, o), a = e.effects.setTransition(i, h, s.to.x, a)), u && e.effects.saveStyle(i), i.css(o), i.animate(a, t.duration, t.easing, function() {
                    u && e.effects.restoreStyle(i)
                })
            })), a.animate(b, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    var t = a.offset();
                    0 === b.opacity && a.css("opacity", v.opacity), u || (a.css("position", "static" === p ? "relative" : p).offset(t), e.effects.saveStyle(a)), i()
                }
            })
        }), e.effects.define("scale", function(t, i) {
            var n = e(this),
                s = t.mode,
                o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
                a = e.extend(!0, {
                    from: e.effects.scaledDimensions(n),
                    to: e.effects.scaledDimensions(n, o, t.direction || "both"),
                    origin: t.origin || ["middle", "center"]
                }, t);
            t.fade && (a.from.opacity = 1, a.to.opacity = 0), e.effects.effect.size.call(this, a, i)
        }), e.effects.define("puff", "hide", function(t, i) {
            var n = e.extend(!0, {}, t, {
                fade: !0,
                percent: parseInt(t.percent, 10) || 150
            });
            e.effects.effect.scale.call(this, n, i)
        }), e.effects.define("pulsate", "show", function(t, i) {
            var n = e(this),
                s = t.mode,
                o = "show" === s,
                a = o || "hide" === s,
                r = 2 * (t.times || 5) + (a ? 1 : 0),
                l = t.duration / r,
                h = 0,
                c = 1,
                u = n.queue().length;
            for (!o && n.is(":visible") || (n.css("opacity", 0).show(), h = 1); c < r; c++) n.animate({
                opacity: h
            }, l, t.easing), h = 1 - h;
            n.animate({
                opacity: h
            }, l, t.easing), n.queue(i), e.effects.unshift(n, u, r + 1)
        }), e.effects.define("shake", function(t, i) {
            var n = 1,
                s = e(this),
                o = t.direction || "left",
                a = t.distance || 20,
                r = t.times || 3,
                l = 2 * r + 1,
                h = Math.round(t.duration / l),
                c = "up" === o || "down" === o ? "top" : "left",
                u = "up" === o || "left" === o,
                d = {},
                f = {},
                p = {},
                m = s.queue().length;
            for (e.effects.createPlaceholder(s), d[c] = (u ? "-=" : "+=") + a, f[c] = (u ? "+=" : "-=") + 2 * a, p[c] = (u ? "-=" : "+=") + 2 * a, s.animate(d, h, t.easing); n < r; n++) s.animate(f, h, t.easing).animate(p, h, t.easing);
            s.animate(f, h, t.easing).animate(d, h / 2, t.easing).queue(i), e.effects.unshift(s, m, l + 1)
        }), e.effects.define("slide", "show", function(t, i) {
            var n, s, o = e(this),
                a = {
                    up: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    right: ["left", "right"]
                },
                r = t.mode,
                l = t.direction || "left",
                h = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l,
                u = t.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
                d = {};
            e.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[h], d[h] = (c ? -1 : 1) * u + s, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = n, d[h] = s), o.animate(d, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        }), !1 !== e.uiBackCompat && e.effects.define("transfer", function(t, i) {
            e(this).transfer(t, i)
        }), e.ui.focusable = function(t, i) {
            var n, s, o, a, r, l = t.nodeName.toLowerCase();
            return "area" === l ? (s = (n = t.parentNode).name, !(!t.href || !s || "map" !== n.nodeName.toLowerCase()) && (o = e("img[usemap='#" + s + "']")).length > 0 && o.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(l) ? (a = !t.disabled) && (r = e(t).closest("fieldset")[0]) && (a = !r.disabled) : a = "a" === l && t.href || i, a && e(t).is(":visible") && function(e) {
                for (var t = e.css("visibility");
                    "inherit" === t;) t = (e = e.parent()).css("visibility");
                return "hidden" !== t
            }(e(t)))
        }, e.extend(e.expr[":"], {
            focusable: function(t) {
                return e.ui.focusable(t, null != e.attr(t, "tabindex"))
            }
        }), e.ui.focusable, e.fn.form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : e(this[0].form)
        }, e.ui.formResetMixin = {
            _formResetHandler: function() {
                var t = e(this);
                setTimeout(function() {
                    var i = t.data("ui-form-reset-instances");
                    e.each(i, function() {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function() {
                if (this.form = this.element.form(), this.form.length) {
                    var e = this.form.data("ui-form-reset-instances") || [];
                    e.length || this.form.on("reset.ui-form-reset", this._formResetHandler), e.push(this), this.form.data("ui-form-reset-instances", e)
                }
            },
            _unbindFormResetHandler: function() {
                if (this.form.length) {
                    var t = this.form.data("ui-form-reset-instances");
                    t.splice(e.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }, "1.7" === e.fn.jquery.substring(0, 3) && (e.each(["Width", "Height"], function(t, i) {
            var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                s = i.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };

            function a(t, i, s, o) {
                return e.each(n, function() {
                    i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), o && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), i
            }
            e.fn["inner" + i] = function(t) {
                return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
                    e(this).css(s, a(this, t) + "px")
                })
            }, e.fn["outer" + i] = function(t, n) {
                return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                    e(this).css(s, a(this, t, !0, n) + "px")
                })
            }
        }), e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, e.ui.escapeSelector = (a = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g, function(e) {
            return e.replace(a, "\\$1")
        }), e.fn.labels = function() {
            var t, i, n, s, o;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), (n = this.attr("id")) && (o = (t = this.eq(0).parents().last()).add(t.length ? t.siblings() : this.siblings()), i = "label[for='" + e.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s))
        }, e.fn.scrollParent = function(t) {
            var i = this.css("position"),
                n = "absolute" === i,
                s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function() {
                    var t = e(this);
                    return (!n || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && o.length ? o : e(this[0].ownerDocument || document)
        }, e.extend(e.expr[":"], {
            tabbable: function(t) {
                var i = e.attr(t, "tabindex"),
                    n = null != i;
                return (!n || i >= 0) && e.ui.focusable(t, n)
            }
        }), e.fn.extend({
            uniqueId: (r = 0, function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++r)
                })
            }),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.widget("ui.accordion", {
            version: "1.12.1",
            options: {
                active: 0,
                animate: {},
                classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                },
                collapsible: !1,
                event: "click",
                header: "> li > :first-child, > :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var t = this.options;
                this.prevShow = this.prevHide = e(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t.collapsible || !1 !== t.active && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : e()
                }
            },
            _createIcons: function() {
                var t, i, n = this.options.icons;
                n && (t = e("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + n.header), t.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var e;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
            },
            _setOption: function(e, t) {
                "active" !== e ? ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || !1 !== this.options.active || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons())) : this._activate(t)
            },
            _setOptionDisabled: function(e) {
                this._super(e), this.element.attr("aria-disabled", e), this._toggleClass(null, "ui-state-disabled", !!e), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!e)
            },
            _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                    var i = e.ui.keyCode,
                        n = this.headers.length,
                        s = this.headers.index(t.target),
                        o = !1;
                    switch (t.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(s + 1) % n];
                            break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(s - 1 + n) % n];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(t);
                            break;
                        case i.HOME:
                            o = this.headers[0];
                            break;
                        case i.END:
                            o = this.headers[n - 1]
                    }
                    o && (e(t.target).attr("tabIndex", -1), e(o).attr("tabIndex", 0), e(o).trigger("focus"), t.preventDefault())
                }
            },
            _panelKeyDown: function(t) {
                t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().trigger("focus")
            },
            refresh: function() {
                var t = this.options;
                this._processPanels(), !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1, this.active = e()) : !1 === t.active ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                var e = this.headers,
                    t = this.panels;
                this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
            },
            _refresh: function() {
                var t, i = this.options,
                    n = i.heightStyle,
                    s = this.element.parent();
                this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                    var t = e(this),
                        i = t.uniqueId().attr("id"),
                        n = t.next(),
                        s = n.uniqueId().attr("id");
                    t.attr("aria-controls", s), n.attr("aria-labelledby", i)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (t = s.height(), this.element.siblings(":visible").each(function() {
                    var i = e(this),
                        n = i.css("position");
                    "absolute" !== n && "fixed" !== n && (t -= i.outerHeight(!0))
                }), this.headers.each(function() {
                    t -= e(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")) : "auto" === n && (t = 0, this.headers.next().each(function() {
                    var i = e(this).is(":visible");
                    i || e(this).show(), t = Math.max(t, e(this).css("height", "").height()), i || e(this).hide()
                }).height(t))
            },
            _activate: function(t) {
                var i = this._findActive(t)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: e.noop
                }))
            },
            _findActive: function(t) {
                return "number" == typeof t ? this.headers.eq(t) : e()
            },
            _setupEvents: function(t) {
                var i = {
                    keydown: "_keydown"
                };
                t && e.each(t.split(" "), function(e, t) {
                    i[t] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(t) {
                var i, n, s = this.options,
                    o = this.active,
                    a = e(t.currentTarget),
                    r = a[0] === o[0],
                    l = r && s.collapsible,
                    h = l ? e() : a.next(),
                    c = o.next(),
                    u = {
                        oldHeader: o,
                        oldPanel: c,
                        newHeader: l ? e() : a,
                        newPanel: h
                    };
                t.preventDefault(), r && !s.collapsible || !1 === this._trigger("beforeActivate", t, u) || (s.active = !l && this.headers.index(a), this.active = r ? e() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = a.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
            },
            _toggle: function(t) {
                var i = t.newPanel,
                    n = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, t) : (n.hide(), i.show(), this._toggleComplete(t)), n.attr({
                    "aria-hidden": "true"
                }), n.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), i.length && n.length ? n.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : i.length && this.headers.filter(function() {
                    return 0 === parseInt(e(this).attr("tabIndex"), 10)
                }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function(e, t, i) {
                var n, s, o, a = this,
                    r = 0,
                    l = e.css("box-sizing"),
                    h = e.length && (!t.length || e.index() < t.index()),
                    c = this.options.animate || {},
                    u = h && c.down || c,
                    d = function() {
                        a._toggleComplete(i)
                    };
                return "number" == typeof u && (o = u), "string" == typeof u && (s = u), s = s || u.easing || c.easing, o = o || u.duration || c.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function(e, t) {
                        t.now = Math.round(e)
                    }
                }), void e.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: d,
                    step: function(e, i) {
                        i.now = Math.round(e), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - r), r = 0)
                    }
                })) : t.animate(this.hideProps, o, s, d) : e.animate(this.showProps, o, s, d)
            },
            _toggleComplete: function(e) {
                var t = e.oldPanel,
                    i = t.prev();
                this._removeClass(t, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
            }
        }), e.ui.safeActiveElement = function(e) {
            var t;
            try {
                t = e.activeElement
            } catch (i) {
                t = e.body
            }
            return t || (t = e.body), t.nodeName || (t = e.body), t
        }, e.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function(e) {
                        e.preventDefault()
                    },
                    "click .ui-menu-item": function(t) {
                        var i = e(t.target),
                            n = e(e.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        if (!this.previousFilter) {
                            var i = e(t.target).closest(".ui-menu-item"),
                                n = e(t.currentTarget);
                            i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, n))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(e, t) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(e, i)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            !e.contains(this.element[0], e.ui.safeActiveElement(this.document[0])) && this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(e) {
                        this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), t.children().each(function() {
                    var t = e(this);
                    t.data("ui-menu-submenu-caret") && t.remove()
                })
            },
            _keydown: function(t) {
                var i, n, s, o, a = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case e.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        a = !1, n = this.previousFilter || "", o = !1, s = t.keyCode >= 96 && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (s = String.fromCharCode(t.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(t, i), this.previousFilter = s, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                a && t.preventDefault()
            },
            _activate: function(e) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
            },
            refresh: function() {
                var t, i, n, s, o = this,
                    a = this.options.icons.submenu,
                    r = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = r.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = e(this),
                        i = t.prev(),
                        n = e("<span>").data("ui-menu-submenu-caret", !0);
                    o._addClass(n, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(n), t.attr("aria-labelledby", i.attr("id"))
                }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (t = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                    var t = e(this);
                    o._isDivider(t) && o._addClass(t, "ui-menu-divider", "ui-widget-content")
                }), s = (n = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(n, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"), t.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(e, t) {
                if ("icons" === e) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)
                }
                this._super(e, t)
            },
            _setOptionDisabled: function(e) {
                this._super(e), this.element.attr("aria-disabled", String(e)), this._toggleClass(null, "ui-state-disabled", !!e)
            },
            focus: function(e, t) {
                var i, n, s;
                this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), (i = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
                    item: t
                })
            },
            _scrollIntoView: function(t) {
                var i, n, s, o, a, r;
                this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = t.outerHeight(), s < 0 ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
            },
            blur: function(e, t) {
                t || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", e, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function(e) {
                clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(e)
                }, this.delay))
            },
            _open: function(t) {
                var i = e.extend({ of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(t, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var n = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element), this._close(n), this.blur(t), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
                }, this.delay)
            },
            _close: function(e) {
                e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function(t) {
                return !e(t.target).closest(".ui-menu").length
            },
            _isDivider: function(e) {
                return !/[^\-\u2014\u2013\s]/.test(e.text())
            },
            collapse: function(e) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function(e) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function() {
                    this.focus(e, t)
                }))
            },
            next: function(e) {
                this._move("next", "first", e)
            },
            previous: function(e) {
                this._move("prev", "last", e)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(e, t, i) {
                var n;
                this.active && (n = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[t]()), this.focus(i, n)
            },
            nextPage: function(t) {
                var i, n, s;
                this.active ? this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return (i = e(this)).offset().top - n - s < 0
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(t)
            },
            previousPage: function(t) {
                var i, n, s;
                this.active ? this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return (i = e(this)).offset().top - n + s > 0
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())) : this.next(t)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || e(t.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
            },
            _filterMenuItems: function(t) {
                var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    n = new RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return n.test(e.trim(e(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        }), e.widget("ui.autocomplete", {
            version: "1.12.1",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, i, n, s = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === s,
                    a = "input" === s;
                this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(s) {
                        if (this.element.prop("readOnly")) return t = !0, n = !0, void(i = !0);
                        t = !1, n = !1, i = !1;
                        var o = e.ui.keyCode;
                        switch (s.keyCode) {
                            case o.PAGE_UP:
                                t = !0, this._move("previousPage", s);
                                break;
                            case o.PAGE_DOWN:
                                t = !0, this._move("nextPage", s);
                                break;
                            case o.UP:
                                t = !0, this._keyEvent("previous", s);
                                break;
                            case o.DOWN:
                                t = !0, this._keyEvent("next", s);
                                break;
                            case o.ENTER:
                                this.menu.active && (t = !0, s.preventDefault(), this.menu.select(s));
                                break;
                            case o.TAB:
                                this.menu.active && this.menu.select(s);
                                break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(s)
                        }
                    },
                    keypress: function(n) {
                        if (t) return t = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault());
                        if (!i) {
                            var s = e.ui.keyCode;
                            switch (n.keyCode) {
                                case s.PAGE_UP:
                                    this._move("previousPage", n);
                                    break;
                                case s.PAGE_DOWN:
                                    this._move("nextPage", n);
                                    break;
                                case s.UP:
                                    this._keyEvent("previous", n);
                                    break;
                                case s.DOWN:
                                    this._keyEvent("next", n)
                            }
                        }
                    },
                    input: function(e) {
                        if (n) return n = !1, void e.preventDefault();
                        this._searchTimeout(e)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(e) {
                        this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), this._change(e))
                    }
                }), this._initSource(), this.menu = e("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, this.element[0] !== e.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function(t, i) {
                        var n, s;
                        if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                            e(t.target).trigger(t.originalEvent)
                        });
                        s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                            item: s
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value), (n = i.item.attr("aria-label") || s.value) && e.trim(n).length && (this.liveRegion.children().hide(), e("<div>").text(n).appendTo(this.liveRegion))
                    },
                    menuselect: function(t, i) {
                        var n = i.item.data("ui-autocomplete-item"),
                            s = this.previous;
                        this.element[0] !== e.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function() {
                            this.previous = s, this.selectedItem = n
                        })), !1 !== this._trigger("select", t, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(t), this.selectedItem = n
                    }
                }), this.liveRegion = e("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(e, t) {
                this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function(t) {
                var i = this.menu.element[0];
                return t.target === this.element[0] || t.target === i || e.contains(i, t.target)
            },
            _closeOnClickOutside: function(e) {
                this._isEventTargetInWidget(e) || this.close()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var t, i, n = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, n) {
                    n(e.ui.autocomplete.filter(t, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, s) {
                    n.xhr && n.xhr.abort(), n.xhr = e.ajax({
                        url: i,
                        data: t,
                        dataType: "json",
                        success: function(e) {
                            s(e)
                        },
                        error: function() {
                            s([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(e) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var t = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        n = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                    t && (!t || i || n) || (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
            },
            search: function(e, t) {
                return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
            },
            _search: function(e) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: e
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return e.proxy(function(e) {
                    t === this.requestIndex && this.__response(e), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(e) {
                e && (e = this._normalize(e)), this._trigger("response", null, {
                    content: e
                }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
            },
            close: function(e) {
                this.cancelSearch = !0, this._close(e)
            },
            _close: function(e) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
            },
            _change: function(e) {
                this.previous !== this._value() && this._trigger("change", e, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : e.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function(t) {
                var i = this.menu.element.empty();
                this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, i) {
                var n = this;
                e.each(i, function(e, i) {
                    n._renderItemData(t, i)
                })
            },
            _renderItemData: function(e, t) {
                return this._renderItem(e, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(t, i) {
                return e("<li>").append(e("<div>").text(i.label)).appendTo(t)
            },
            _move: function(e, t) {
                if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[e](t);
                this.search(null, t)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(e, t) {
                this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault())
            },
            _isContentEditable: function(e) {
                if (!e.length) return !1;
                var t = e.prop("contentEditable");
                return "inherit" === t ? this._isContentEditable(e.parent()) : "true" === t
            }
        }), e.extend(e.ui.autocomplete, {
            escapeRegex: function(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, i) {
                var n = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
                return e.grep(t, function(e) {
                    return n.test(e.label || e.value || e)
                })
            }
        }), e.widget("ui.autocomplete", e.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(e) {
                        return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))
            }
        }), e.ui.autocomplete
});