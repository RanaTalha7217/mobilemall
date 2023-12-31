! function(t) {
    var r = {};

    function e(a) {
        if (r[a]) return r[a].exports;
        var s = r[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(s.exports, s, s.exports, e), s.l = !0, s.exports
    }
    e.m = t, e.c = r, e.d = function(t, r, a) {
        e.o(t, r) || Object.defineProperty(t, r, {
            enumerable: !0,
            get: a
        })
    }, e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.t = function(t, r) {
        if (1 & r && (t = e(t)), 8 & r) return t;
        if (4 & r && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (e.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & r && "string" != typeof t)
            for (var s in t) e.d(a, s, function(r) {
                return t[r]
            }.bind(null, s));
        return a
    }, e.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(r, "a", r), r
    }, e.o = function(t, r) {
        return Object.prototype.hasOwnProperty.call(t, r)
    }, e.p = "", e(e.s = 0)
}([function(t, r) {
    const e = {
        value: 0,
        stars: 5,
        half: !1,
        emptyStar: "far fa-star",
        halfStar: "fas fa-star-half-alt",
        filledStar: "fas fa-star",
        color: "#fcd703",
        readonly: !1,
        click: function(t) {
            console.error("No click callback provided!")
        }
    };
    jQuery.fn.extend({
        rating: function(t = {}) {
            return this.each((function() {
                $(this).attr("rating") && $(this).empty(), this.stars = t.value ? t.value : e.value, this.readonly = t.readonly ? t.readonly : e.readonly, this.getStars = function() {
                    return $(this).find($("i"))
                }, $(this).css({
                    color: t.color ? t.color : e.color
                }).attr("rating", !0), this.readonly || ($(this).on("mousemove", (function(r) {
                    let a = t.half ? t.half : e.half;
                    if (this.getStars().index(r.target) >= 0)
                        if (a) {
                            $(this).find("i").attr("class", t.emptyStar ? t.emptyStar : e.emptyStar);
                            let a = .5;
                            $(this).find("i").css({
                                width: $(this).find("i").outerWidth()
                            }), r.offsetX > $(r.target).outerWidth() / 2 && (a = 1);
                            let s = this.getStars().index(r.target) + a;
                            for (let r = 0; r < this.getStars().length; r++) r + .5 < s ? $(this.getStars()[r]).attr("class", t.filledStar ? t.filledStar : e.filledStar) : r < s && $(this.getStars()[r]).attr("class", t.halfStar ? t.halfStar : e.halfStar)
                        } else {
                            $(this).find("i").attr("class", t.emptyStar ? t.emptyStar : e.emptyStar);
                            let a = this.getStars().index(r.target) + 1;
                            for (let r = 0; r < this.getStars().length; r++) r < a && $(this.getStars()[r]).attr("class", t.filledStar ? t.filledStar : e.filledStar)
                        }
                })), $(this).on("mouseout", (function(t) {
                    this.printStars()
                })), $(this).on("click", (function(r) {
                    if (t.half ? t.half : e.half) {
                        let t = .5;
                        r.offsetX > $(r.target).outerWidth() / 2 && (t = 1), this.stars = this.getStars().index(r.target) + t
                    } else this.stars = this.getStars().index(r.target) + 1;
                    (t.click ? t.click : e.click)({
                        stars: this.stars,
                        event: r
                    })
                })));
                const r = t.stars ? t.stars : e.stars;
                for (let a = 0; a < r; a++) {
                    let r = $("<i></i>").addClass(t.emptyStar ? t.emptyStar : e.emptyStar).appendTo($(this));
                    if (this.readonly || r.css({
                            cursor: "pointer"
                        }), a > 1e3) return
                }
                if (this.printStars = function() {
                        if (t.half ? t.half : e.half) {
                            $(this).find("i").attr("class", t.emptyStar ? t.emptyStar : e.emptyStar);
                            for (let r = 0; r < this.stars; r++) r < this.stars - .5 ? $(this.getStars()[r]).attr("class", t.filledStar ? t.filledStar : e.filledStar) : $(this.getStars()[r]).attr("class", t.halfStar ? t.halfStar : e.halfStar)
                        } else {
                            $(this).find("i").attr("class", t.emptyStar ? t.emptyStar : e.emptyStar);
                            for (let r = 0; r < this.stars; r++) $(this.getStars()[r]).attr("class", t.filledStar ? t.filledStar : e.filledStar)
                        }
                    }, this.stars > 0) {
                    this.printStars(), (t.click ? t.click : e.click)({
                        stars: this.stars
                    })
                }
            }))
        }
    }), $((function() {
        $("[data-rating-stars]").each((function() {
            let t = {},
                r = /^data-rating\-(.+)$/;
            $.each($(this).get(0).attributes, (function(e, a) {
                if (r.test(a.nodeName)) {
                    let e = a.nodeName.match(r)[1];
                    t[e] = a.nodeValue
                }
            })), null != t.input && (t.click = function(r) {
                $(t.input).val(r.stars)
            }), $(this).rating(t)
        }))
    }))
}]);