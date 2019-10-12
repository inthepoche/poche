! function(t) {
    function __webpack_require__(n) {
        if (e[n]) return e[n].exports;
        var i = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(i.exports, i, i.exports, __webpack_require__), i.l = !0, i.exports
    }
    var e = {};
    __webpack_require__.m = t, __webpack_require__.c = e, __webpack_require__.i = function(t) {
        return t
    }, __webpack_require__.d = function(t, e, n) {
        __webpack_require__.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, __webpack_require__.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return __webpack_require__.d(e, "a", e), e
    }, __webpack_require__.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 54)
}([function(t, e, n) {
    var i, r;
    ! function(e, n) {
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function(n, o) {
        function isArrayLike(t) {
            var e = !!t && "length" in t && t.length,
                n = v.type(t);
            return "function" !== n && !v.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function winnow(t, e, n) {
            if (v.isFunction(e)) return v.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return v.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (S.test(e)) return v.filter(e, t, n);
                e = v.filter(e, t)
            }
            return v.grep(t, function(t) {
                return d.call(e, t) > -1 !== n
            })
        }

        function sibling(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function createOptions(t) {
            var e = {};
            return v.each(t.match(O) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function completed() {
            s.removeEventListener("DOMContentLoaded", completed), n.removeEventListener("load", completed), v.ready()
        }

        function Data() {
            this.expando = v.expando + Data.uid++
        }

        function dataAttr(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(F, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : z.test(n) ? v.parseJSON(n) : n)
                    } catch (t) {}
                    L.set(t, e, n)
                } else n = void 0;
            return n
        }

        function adjustCSS(t, e, n, i) {
            var r, o = 1,
                a = 20,
                s = i ? function() {
                    return i.cur()
                } : function() {
                    return v.css(t, e, "")
                },
                l = s(),
                u = n && n[3] || (v.cssNumber[e] ? "" : "px"),
                c = (v.cssNumber[e] || "px" !== u && +l) && H.exec(v.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do {
                    o = o || ".5", c /= o, v.style(t, e, c + u)
                } while (o !== (o = s() / l) && 1 !== o && --a)
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }

        function getAll(t, e) {
            var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && v.nodeName(t, e) ? v.merge([t], n) : n
        }

        function setGlobalEval(t, e) {
            for (var n = 0, i = t.length; n < i; n++) R.set(t[n], "globalEval", !e || R.get(e[n], "globalEval"))
        }

        function buildFragment(t, e, n, i, r) {
            for (var o, a, s, l, u, c, d = e.createDocumentFragment(), f = [], h = 0, p = t.length; h < p; h++)
                if ((o = t[h]) || 0 === o)
                    if ("object" === v.type(o)) v.merge(f, o.nodeType ? [o] : o);
                    else if (Y.test(o)) {
                for (a = a || d.appendChild(e.createElement("div")), s = (V.exec(o) || ["", ""])[1].toLowerCase(), l = $[s] || $._default, a.innerHTML = l[1] + v.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
                v.merge(f, a.childNodes), a = d.firstChild, a.textContent = ""
            } else f.push(e.createTextNode(o));
            for (d.textContent = "", h = 0; o = f[h++];)
                if (i && v.inArray(o, i) > -1) r && r.push(o);
                else if (u = v.contains(o.ownerDocument, o), a = getAll(d.appendChild(o), "script"), u && setGlobalEval(a), n)
                for (c = 0; o = a[c++];) X.test(o.type || "") && n.push(o);
            return d
        }

        function returnTrue() {
            return !0
        }

        function returnFalse() {
            return !1
        }

        function safeActiveElement() {
            try {
                return s.activeElement
            } catch (t) {}
        }

        function on(t, e, n, i, r, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in e) on(t, s, n, i, e[s], o);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = returnFalse;
            else if (!r) return t;
            return 1 === o && (a = r, r = function(t) {
                return v().off(t), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = v.guid++)), t.each(function() {
                v.event.add(this, e, r, i, n)
            })
        }

        function manipulationTarget(t, e) {
            return v.nodeName(t, "table") && v.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function disableScript(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function restoreScript(t) {
            var e = tt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function cloneCopyEvent(t, e) {
            var n, i, r, o, a, s, l, u;
            if (1 === e.nodeType) {
                if (R.hasData(t) && (o = R.access(t), a = R.set(e, o), u = o.events)) {
                    delete a.handle, a.events = {};
                    for (r in u)
                        for (n = 0, i = u[r].length; n < i; n++) v.event.add(e, r, u[r][n])
                }
                L.hasData(t) && (s = L.access(t), l = v.extend({}, s), L.set(e, l))
            }
        }

        function fixInput(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && B.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function domManip(t, e, n, i) {
            e = u.apply([], e);
            var r, o, a, s, l, c, d = 0,
                f = t.length,
                h = f - 1,
                p = e[0],
                m = v.isFunction(p);
            if (m || f > 1 && "string" == typeof p && !g.checkClone && Z.test(p)) return t.each(function(r) {
                var o = t.eq(r);
                m && (e[0] = p.call(this, r, o.html())), domManip(o, e, n, i)
            });
            if (f && (r = buildFragment(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                for (a = v.map(getAll(r, "script"), disableScript), s = a.length; d < f; d++) l = r, d !== h && (l = v.clone(l, !0, !0), s && v.merge(a, getAll(l, "script"))), n.call(t[d], l, d);
                if (s)
                    for (c = a[a.length - 1].ownerDocument, v.map(a, restoreScript), d = 0; d < s; d++) l = a[d], X.test(l.type || "") && !R.access(l, "globalEval") && v.contains(c, l) && (l.src ? v._evalUrl && v._evalUrl(l.src) : v.globalEval(l.textContent.replace(et, "")))
            }
            return t
        }

        function remove(t, e, n) {
            for (var i, r = e ? v.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || v.cleanData(getAll(i)), i.parentNode && (n && v.contains(i.ownerDocument, i) && setGlobalEval(getAll(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function actualDisplay(t, e) {
            var n = v(e.createElement(t)).appendTo(e.body),
                i = v.css(n[0], "display");
            return n.detach(), i
        }

        function defaultDisplay(t) {
            var e = s,
                n = it[t];
            return n || (n = actualDisplay(t, e), "none" !== n && n || (nt = (nt || v("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = nt[0].contentDocument, e.write(), e.close(), n = actualDisplay(t, e), nt.detach()), it[t] = n), n
        }

        function curCSS(t, e, n) {
            var i, r, o, a, s = t.style;
            return n = n || at(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== a && void 0 !== a || v.contains(t.ownerDocument, t) || (a = v.style(t, e)), n && !g.pixelMarginRight() && ot.test(a) && rt.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 !== a ? a + "" : a
        }

        function addGetHookIf(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function vendorPropName(t) {
            if (t in ht) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = ft.length; n--;)
                if ((t = ft[n] + e) in ht) return t
        }

        function setPositiveNumber(t, e, n) {
            var i = H.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function augmentWidthOrHeight(t, e, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += v.css(t, n + j[o], !0, r)), i ? ("content" === n && (a -= v.css(t, "padding" + j[o], !0, r)), "margin" !== n && (a -= v.css(t, "border" + j[o] + "Width", !0, r))) : (a += v.css(t, "padding" + j[o], !0, r), "padding" !== n && (a += v.css(t, "border" + j[o] + "Width", !0, r)));
            return a
        }

        function getWidthOrHeight(t, e, n) {
            var i = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = at(t),
                a = "border-box" === v.css(t, "boxSizing", !1, o);
            if (r <= 0 || null == r) {
                if (r = curCSS(t, e, o), (r < 0 || null == r) && (r = t.style[e]), ot.test(r)) return r;
                i = a && (g.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + augmentWidthOrHeight(t, e, n || (a ? "border" : "content"), i, o) + "px"
        }

        function showHide(t, e) {
            for (var n, i, r, o = [], a = 0, s = t.length; a < s; a++) i = t[a], i.style && (o[a] = R.get(i, "olddisplay"), n = i.style.display, e ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && W(i) && (o[a] = R.access(i, "olddisplay", defaultDisplay(i.nodeName)))) : (r = W(i), "none" === n && r || R.set(i, "olddisplay", r ? n : v.css(i, "display"))));
            for (a = 0; a < s; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[a] || "" : "none"));
            return t
        }

        function Tween(t, e, n, i, r) {
            return new Tween.prototype.init(t, e, n, i, r)
        }

        function createFxNow() {
            return n.setTimeout(function() {
                pt = void 0
            }), pt = v.now()
        }

        function genFx(t, e) {
            var n, i = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = j[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function createTween(t, e, n) {
            for (var i, r = (Animation.tweeners[e] || []).concat(Animation.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                if (i = r[o].call(n, e, t)) return i
        }

        function defaultPrefilter(t, e, n) {
            var i, r, o, a, s, l, u, c = this,
                d = {},
                f = t.style,
                h = t.nodeType && W(t),
                p = R.get(t, "fxshow");
            n.queue || (s = v._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, v.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = v.css(t, "display"), "inline" === ("none" === u ? R.get(t, "olddisplay") || defaultDisplay(t.nodeName) : u) && "none" === v.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], vt.exec(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                        if ("show" !== r || !p || void 0 === p[i]) continue;
                        h = !0
                    }
                    d[i] = p && p[i] || v.style(t, i)
                } else u = void 0;
            if (v.isEmptyObject(d)) "inline" === ("none" === u ? defaultDisplay(t.nodeName) : u) && (f.display = u);
            else {
                p ? "hidden" in p && (h = p.hidden) : p = R.access(t, "fxshow", {}), o && (p.hidden = !h), h ? v(t).show() : c.done(function() {
                    v(t).hide()
                }), c.done(function() {
                    var e;
                    R.remove(t, "fxshow");
                    for (e in d) v.style(t, e, d[e])
                });
                for (i in d) a = createTween(h ? p[i] : 0, i, c), i in p || (p[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function propFilter(t, e) {
            var n, i, r, o, a;
            for (n in t)
                if (i = v.camelCase(n), r = e[i], o = t[n], v.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (a = v.cssHooks[i]) && "expand" in a) {
                    o = a.expand(o), delete t[i];
                    for (n in o) n in t || (t[n] = o[n], e[n] = r)
                } else e[i] = r
        }

        function Animation(t, e, n) {
            var i, r, o = 0,
                a = Animation.prefilters.length,
                s = v.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = pt || createFxNow(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; a < l; a++) u.tweens[a].run(o);
                    return s.notifyWith(t, [u, o, n]), o < 1 && l ? n : (s.resolveWith(t, [u]), !1)
                },
                u = s.promise({
                    elem: t,
                    props: v.extend({}, e),
                    opts: v.extend(!0, {
                        specialEasing: {},
                        easing: v.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: pt || createFxNow(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = v.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) u.tweens[n].run(1);
                        return e ? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (propFilter(c, u.opts.specialEasing); o < a; o++)
                if (i = Animation.prefilters[o].call(u, t, c, u.opts)) return v.isFunction(i.stop) && (v._queueHooks(u.elem, u.opts.queue).stop = v.proxy(i.stop, i)), i;
            return v.map(c, createTween, u), v.isFunction(u.opts.start) && u.opts.start.call(t, u), v.fx.timer(v.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function getClass(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function addToPrefiltersOrTransports(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    o = e.toLowerCase().match(O) || [];
                if (v.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function inspectPrefiltersOrTransports(t, e, n, i) {
            function inspect(a) {
                var s;
                return r[a] = !0, v.each(t[a] || [], function(t, a) {
                    var l = a(e, n, i);
                    return "string" != typeof l || o || r[l] ? o ? !(s = l) : void 0 : (e.dataTypes.unshift(l), inspect(l), !1)
                }), s
            }
            var r = {},
                o = t === Lt;
            return inspect(e.dataTypes[0]) || !r["*"] && inspect("*")
        }

        function ajaxExtend(t, e) {
            var n, i, r = v.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && v.extend(!0, t, i), t
        }

        function ajaxHandleResponses(t, e, n) {
            for (var i, r, o, a, s = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (r in s)
                    if (s[r] && s[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    a || (a = r)
                }
                o = o || a
            }
            if (o) return o !== l[0] && l.unshift(o), n[o]
        }

        function ajaxConvert(t, e, n, i) {
            var r, o, a, s, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
            for (o = c.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (!(a = u[l + " " + o] || u["* " + o]))
                    for (r in u)
                        if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                            !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
                            break
                        }
                if (!0 !== a)
                    if (a && t.throws) e = a(e);
                    else try {
                        e = a(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: a ? t : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function buildParams(t, e, n, i) {
            var r;
            if (v.isArray(e)) v.each(e, function(e, r) {
                n || Ht.test(t) ? i(t, r) : buildParams(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== v.type(e)) i(t, e);
            else
                for (r in e) buildParams(t + "[" + r + "]", e[r], n, i)
        }

        function getWindow(t) {
            return v.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var a = [],
            s = n.document,
            l = a.slice,
            u = a.concat,
            c = a.push,
            d = a.indexOf,
            f = {},
            h = f.toString,
            p = f.hasOwnProperty,
            g = {},
            v = function(t, e) {
                return new v.fn.init(t, e)
            },
            m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            y = /^-ms-/,
            b = /-([\da-z])/gi,
            w = function(t, e) {
                return e.toUpperCase()
            };
        v.fn = v.prototype = {
            jquery: "2.2.4",
            constructor: v,
            selector: "",
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : l.call(this)
            },
            pushStack: function(t) {
                var e = v.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return v.each(this, t)
            },
            map: function(t) {
                return this.pushStack(v.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: a.sort,
            splice: a.splice
        }, v.extend = v.fn.extend = function() {
            var t, e, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || v.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (t = arguments[s]))
                    for (e in t) n = a[e], i = t[e], a !== i && (u && i && (v.isPlainObject(i) || (r = v.isArray(i))) ? (r ? (r = !1, o = n && v.isArray(n) ? n : []) : o = n && v.isPlainObject(n) ? n : {}, a[e] = v.extend(u, o, i)) : void 0 !== i && (a[e] = i));
            return a
        }, v.extend({
            expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === v.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !v.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== v.type(t) || t.nodeType || v.isWindow(t)) return !1;
                if (t.constructor && !p.call(t, "constructor") && !p.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || p.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? f[h.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, n = eval;
                (t = v.trim(t)) && (1 === t.indexOf("use strict") ? (e = s.createElement("script"), e.text = t, s.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function(t) {
                return t.replace(y, "ms-").replace(b, w)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var n, i = 0;
                if (isArrayLike(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(m, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (isArrayLike(Object(t)) ? v.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : d.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function(t, e, n) {
                for (var i = [], r = 0, o = t.length, a = !n; r < o; r++) !e(t[r], r) !== a && i.push(t[r]);
                return i
            },
            map: function(t, e, n) {
                var i, r, o = 0,
                    a = [];
                if (isArrayLike(t))
                    for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && a.push(r);
                else
                    for (o in t) null != (r = e(t[o], o, n)) && a.push(r);
                return u.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, r;
                if ("string" == typeof e && (n = t[e], e = t, t = n), v.isFunction(t)) return i = l.call(arguments, 2), r = function() {
                    return t.apply(e || this, i.concat(l.call(arguments)))
                }, r.guid = t.guid = t.guid || v.guid++, r
            },
            now: Date.now,
            support: g
        }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = a[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            f["[object " + e + "]"] = e.toLowerCase()
        });
        var x = function(t) {
            function Sizzle(t, e, i, r) {
                var o, s, u, c, d, p, m, y, T = e && e.ownerDocument,
                    C = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return i;
                if (!r && ((e ? e.ownerDocument || e : x) !== h && f(e), e = e || h, g)) {
                    if (11 !== C && (p = J.exec(t)))
                        if (o = p[1]) {
                            if (9 === C) {
                                if (!(u = e.getElementById(o))) return i;
                                if (u.id === o) return i.push(u), i
                            } else if (T && (u = T.getElementById(o)) && b(e, u) && u.id === o) return i.push(u), i
                        } else {
                            if (p[2]) return M.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = p[3]) && n.getElementsByClassName && e.getElementsByClassName) return M.apply(i, e.getElementsByClassName(o)), i
                        }
                    if (n.qsa && !S[t + " "] && (!v || !v.test(t))) {
                        if (1 !== C) T = e, y = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((c = e.getAttribute("id")) ? c = c.replace(tt, "\\$&") : e.setAttribute("id", c = w), m = a(t), s = m.length, d = Y.test(c) ? "#" + c : "[id='" + c + "']"; s--;) m[s] = d + " " + toSelector(m[s]);
                            y = m.join(","), T = Z.test(t) && testContext(e.parentNode) || e
                        }
                        if (y) try {
                            return M.apply(i, T.querySelectorAll(y)), i
                        } catch (t) {} finally {
                            c === w && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(W, "$1"), e, i, r)
            }

            function createCache() {
                function cache(e, n) {
                    return t.push(e + " ") > i.cacheLength && delete cache[t.shift()], cache[e + " "] = n
                }
                var t = [];
                return cache
            }

            function markFunction(t) {
                return t[w] = !0, t
            }

            function assert(t) {
                var e = h.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function addHandle(t, e) {
                for (var n = t.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = e
            }

            function siblingCheck(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || A) - (~t.sourceIndex || A);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function createPositionalPseudo(t) {
                return markFunction(function(e) {
                    return e = +e, markFunction(function(n, i) {
                        for (var r, o = t([], n.length, e), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function testContext(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function setFilters() {}

            function toSelector(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function addCombinator(t, e, n) {
                var i = e.dir,
                    r = n && "parentNode" === i,
                    o = C++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) return t(e, n, o)
                } : function(e, n, a) {
                    var s, l, u, c = [T, o];
                    if (a) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, n, a)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) {
                                if (u = e[w] || (e[w] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (s = l[i]) && s[0] === T && s[1] === o) return c[2] = s[2];
                                if (l[i] = c, c[2] = t(e, n, a)) return !0
                            }
                }
            }

            function elementMatcher(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function multipleContexts(t, e, n) {
                for (var i = 0, r = e.length; i < r; i++) Sizzle(t, e[i], n);
                return n
            }

            function condense(t, e, n, i, r) {
                for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++)(o = t[s]) && (n && !n(o, i, r) || (a.push(o), u && e.push(s)));
                return a
            }

            function setMatcher(t, e, n, i, r, o) {
                return i && !i[w] && (i = setMatcher(i)), r && !r[w] && (r = setMatcher(r, o)), markFunction(function(o, a, s, l) {
                    var u, c, d, f = [],
                        h = [],
                        p = a.length,
                        g = o || multipleContexts(e || "*", s.nodeType ? [s] : s, []),
                        v = !t || !o && e ? g : condense(g, f, t, s, l),
                        m = n ? r || (o ? t : p || i) ? [] : a : v;
                    if (n && n(v, m, s, l), i)
                        for (u = condense(m, h), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (m[h[c]] = !(v[h[c]] = d));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = m.length; c--;)(d = m[c]) && u.push(v[c] = d);
                                r(null, m = [], u, l)
                            }
                            for (c = m.length; c--;)(d = m[c]) && (u = r ? R(o, d) : f[c]) > -1 && (o[u] = !(a[u] = d))
                        }
                    } else m = condense(m === a ? m.splice(p, m.length) : m), r ? r(null, a, m, l) : M.apply(a, m)
                })
            }

            function matcherFromTokens(t) {
                for (var e, n, r, o = t.length, a = i.relative[t[0].type], s = a || i.relative[" "], l = a ? 1 : 0, c = addCombinator(function(t) {
                        return t === e
                    }, s, !0), d = addCombinator(function(t) {
                        return R(e, t) > -1
                    }, s, !0), f = [function(t, n, i) {
                        var r = !a && (i || n !== u) || ((e = n).nodeType ? c(t, n, i) : d(t, n, i));
                        return e = null, r
                    }]; l < o; l++)
                    if (n = i.relative[t[l].type]) f = [addCombinator(elementMatcher(f), n)];
                    else {
                        if (n = i.filter[t[l].type].apply(null, t[l].matches), n[w]) {
                            for (r = ++l; r < o && !i.relative[t[r].type]; r++);
                            return setMatcher(l > 1 && elementMatcher(f), l > 1 && toSelector(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(W, "$1"), n, l < r && matcherFromTokens(t.slice(l, r)), r < o && matcherFromTokens(t = t.slice(r)), r < o && toSelector(t))
                        }
                        f.push(n)
                    }
                return elementMatcher(f)
            }

            function matcherFromGroupMatchers(t, e) {
                var n = e.length > 0,
                    r = t.length > 0,
                    o = function(o, a, s, l, c) {
                        var d, p, v, m = 0,
                            y = "0",
                            b = o && [],
                            w = [],
                            x = u,
                            C = o || r && i.find.TAG("*", c),
                            k = T += null == x ? 1 : Math.random() || .1,
                            E = C.length;
                        for (c && (u = a === h || a || c); y !== E && null != (d = C[y]); y++) {
                            if (r && d) {
                                for (p = 0, a || d.ownerDocument === h || (f(d), s = !g); v = t[p++];)
                                    if (v(d, a || h, s)) {
                                        l.push(d);
                                        break
                                    }
                                c && (T = k)
                            }
                            n && ((d = !v && d) && m--, o && b.push(d))
                        }
                        if (m += y, n && y !== m) {
                            for (p = 0; v = e[p++];) v(b, w, a, s);
                            if (o) {
                                if (m > 0)
                                    for (; y--;) b[y] || w[y] || (w[y] = O.call(l));
                                w = condense(w)
                            }
                            M.apply(l, w), c && !o && w.length > 0 && m + e.length > 1 && Sizzle.uniqueSort(l)
                        }
                        return c && (T = k, u = x), b
                    };
                return n ? markFunction(o) : o
            }
            var e, n, i, r, o, a, s, l, u, c, d, f, h, p, g, v, m, y, b, w = "sizzle" + 1 * new Date,
                x = t.document,
                T = 0,
                C = 0,
                k = createCache(),
                E = createCache(),
                S = createCache(),
                _ = function(t, e) {
                    return t === e && (d = !0), 0
                },
                A = 1 << 31,
                P = {}.hasOwnProperty,
                D = [],
                O = D.pop,
                N = D.push,
                M = D.push,
                I = D.slice,
                R = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                z = "[\\x20\\t\\r\\n\\f]",
                F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                q = "\\[" + z + "*(" + F + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + z + "*\\]",
                H = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                j = new RegExp(z + "+", "g"),
                W = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
                B = new RegExp("^" + z + "*," + z + "*"),
                V = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
                X = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
                $ = new RegExp(H),
                Y = new RegExp("^" + F + "$"),
                U = {
                    ID: new RegExp("^#(" + F + ")"),
                    CLASS: new RegExp("^\\.(" + F + ")"),
                    TAG: new RegExp("^(" + F + "|[*])"),
                    ATTR: new RegExp("^" + q),
                    PSEUDO: new RegExp("^" + H),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + L + ")$", "i"),
                    needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
                },
                Q = /^(?:input|select|textarea|button)$/i,
                G = /^h\d$/i,
                K = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Z = /[+~]/,
                tt = /'|\\/g,
                et = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
                nt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                it = function() {
                    f()
                };
            try {
                M.apply(D = I.call(x.childNodes), x.childNodes), D[x.childNodes.length].nodeType
            } catch (t) {
                M = {
                    apply: D.length ? function(t, e) {
                        N.apply(t, I.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            n = Sizzle.support = {}, o = Sizzle.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, f = Sizzle.setDocument = function(t) {
                var e, r, a = t ? t.ownerDocument || t : x;
                return a !== h && 9 === a.nodeType && a.documentElement ? (h = a, p = h.documentElement, g = !o(h), (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", it, !1) : r.attachEvent && r.attachEvent("onunload", it)), n.attributes = assert(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), n.getElementsByTagName = assert(function(t) {
                    return t.appendChild(h.createComment("")), !t.getElementsByTagName("*").length
                }), n.getElementsByClassName = K.test(h.getElementsByClassName), n.getById = assert(function(t) {
                    return p.appendChild(t).id = w, !h.getElementsByName || !h.getElementsByName(w).length
                }), n.getById ? (i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, i.filter.ID = function(t) {
                    var e = t.replace(et, nt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete i.find.ID, i.filter.ID = function(t) {
                    var e = t.replace(et, nt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                }, m = [], v = [], (n.qsa = K.test(h.querySelectorAll)) && (assert(function(t) {
                    p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + z + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + z + "*(?:value|" + L + ")"), t.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]")
                }), assert(function(t) {
                    var e = h.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + z + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                })), (n.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && assert(function(t) {
                    n.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), m.push("!=", H)
                }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), e = K.test(p.compareDocumentPosition), b = e || K.test(p.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, _ = e ? function(t, e) {
                    if (t === e) return d = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === h || t.ownerDocument === x && b(x, t) ? -1 : e === h || e.ownerDocument === x && b(x, e) ? 1 : c ? R(c, t) - R(c, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return d = !0, 0;
                    var n, i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        s = [e];
                    if (!r || !o) return t === h ? -1 : e === h ? 1 : r ? -1 : o ? 1 : c ? R(c, t) - R(c, e) : 0;
                    if (r === o) return siblingCheck(t, e);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (; a[i] === s[i];) i++;
                    return i ? siblingCheck(a[i], s[i]) : a[i] === x ? -1 : s[i] === x ? 1 : 0
                }, h) : h
            }, Sizzle.matches = function(t, e) {
                return Sizzle(t, null, null, e)
            }, Sizzle.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== h && f(t), e = e.replace(X, "='$1']"), n.matchesSelector && g && !S[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e))) try {
                    var i = y.call(t, e);
                    if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return Sizzle(e, h, null, [t]).length > 0
            }, Sizzle.contains = function(t, e) {
                return (t.ownerDocument || t) !== h && f(t), b(t, e)
            }, Sizzle.attr = function(t, e) {
                (t.ownerDocument || t) !== h && f(t);
                var r = i.attrHandle[e.toLowerCase()],
                    o = r && P.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
            }, Sizzle.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, Sizzle.uniqueSort = function(t) {
                var e, i = [],
                    r = 0,
                    o = 0;
                if (d = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(_), d) {
                    for (; e = t[o++];) e === t[o] && (r = i.push(o));
                    for (; r--;) t.splice(i[r], 1)
                }
                return c = null, t
            }, r = Sizzle.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += r(e);
                return n
            }, i = Sizzle.selectors = {
                cacheLength: 50,
                createPseudo: markFunction,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || Sizzle.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && Sizzle.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return U.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && $.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(et, nt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = k[t + " "];
                        return e || (e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) && k(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, n) {
                        return function(i) {
                            var r = Sizzle.attr(i, t);
                            return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(j, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, d, f, h, p, g = o !== a ? "nextSibling" : "previousSibling",
                                v = e.parentNode,
                                m = s && e.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (v) {
                                if (o) {
                                    for (; g;) {
                                        for (f = e; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                        p = g = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? v.firstChild : v.lastChild], a && y) {
                                    for (f = v, d = f[w] || (f[w] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[t] || [], h = u[0] === T && u[1], b = h && u[2], f = h && v.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop();)
                                        if (1 === f.nodeType && ++b && f === e) {
                                            c[t] = [T, h, b];
                                            break
                                        }
                                } else if (y && (f = e, d = f[w] || (f[w] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[t] || [], h = u[0] === T && u[1], b = h), !1 === b)
                                    for (;
                                        (f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++b || (y && (d = f[w] || (f[w] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[t] = [T, b]), f !== e)););
                                return (b -= r) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || Sizzle.error("unsupported pseudo: " + t);
                        return r[w] ? r(e) : r.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? markFunction(function(t, n) {
                            for (var i, o = r(t, e), a = o.length; a--;) i = R(t, o[a]), t[i] = !(n[i] = o[a])
                        }) : function(t) {
                            return r(t, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: markFunction(function(t) {
                        var e = [],
                            n = [],
                            i = s(t.replace(W, "$1"));
                        return i[w] ? markFunction(function(t, e, n, r) {
                            for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                        }) : function(t, r, o) {
                            return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: markFunction(function(t) {
                        return function(e) {
                            return Sizzle(t, e).length > 0
                        }
                    }),
                    contains: markFunction(function(t) {
                        return t = t.replace(et, nt),
                            function(e) {
                                return (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                            }
                    }),
                    lang: markFunction(function(t) {
                        return Y.test(t || "") || Sizzle.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === p
                    },
                    focus: function(t) {
                        return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !i.pseudos.empty(t)
                    },
                    header: function(t) {
                        return G.test(t.nodeName)
                    },
                    input: function(t) {
                        return Q.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: createPositionalPseudo(function() {
                        return [0]
                    }),
                    last: createPositionalPseudo(function(t, e) {
                        return [e - 1]
                    }),
                    eq: createPositionalPseudo(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: createPositionalPseudo(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: createPositionalPseudo(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: createPositionalPseudo(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: createPositionalPseudo(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, i.pseudos.nth = i.pseudos.eq;
            for (e in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) i.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) i.pseudos[e] = function(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(e);
            return setFilters.prototype = i.filters = i.pseudos, i.setFilters = new setFilters, a = Sizzle.tokenize = function(t, e) {
                var n, r, o, a, s, l, u, c = E[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (s = t, l = [], u = i.preFilter; s;) {
                    n && !(r = B.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = V.exec(s)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    }), s = s.slice(n.length));
                    for (a in i.filter) !(r = U[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return e ? s.length : s ? Sizzle.error(t) : E(t, l).slice(0)
            }, s = Sizzle.compile = function(t, e) {
                var n, i = [],
                    r = [],
                    o = S[t + " "];
                if (!o) {
                    for (e || (e = a(t)), n = e.length; n--;) o = matcherFromTokens(e[n]), o[w] ? i.push(o) : r.push(o);
                    o = S(t, matcherFromGroupMatchers(r, i)), o.selector = t
                }
                return o
            }, l = Sizzle.select = function(t, e, r, o) {
                var l, u, c, d, f, h = "function" == typeof t && t,
                    p = !o && a(t = h.selector || t);
                if (r = r || [], 1 === p.length) {
                    if (u = p[0] = p[0].slice(0), u.length > 2 && "ID" === (c = u[0]).type && n.getById && 9 === e.nodeType && g && i.relative[u[1].type]) {
                        if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return r;
                        h && (e = e.parentNode), t = t.slice(u.shift().value.length)
                    }
                    for (l = U.needsContext.test(t) ? 0 : u.length; l-- && (c = u[l], !i.relative[d = c.type]);)
                        if ((f = i.find[d]) && (o = f(c.matches[0].replace(et, nt), Z.test(u[0].type) && testContext(e.parentNode) || e))) {
                            if (u.splice(l, 1), !(t = o.length && toSelector(u))) return M.apply(r, o), r;
                            break
                        }
                }
                return (h || s(t, p))(o, e, !g, r, !e || Z.test(t) && testContext(e.parentNode) || e), r
            }, n.sortStable = w.split("").sort(_).join("") === w, n.detectDuplicates = !!d, f(), n.sortDetached = assert(function(t) {
                return 1 & t.compareDocumentPosition(h.createElement("div"))
            }), assert(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || addHandle("type|href|height|width", function(t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), n.attributes && assert(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || addHandle("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), assert(function(t) {
                return null == t.getAttribute("disabled")
            }) || addHandle(L, function(t, e, n) {
                var i;
                if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), Sizzle
        }(n);
        v.find = x, v.expr = x.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = x.uniqueSort, v.text = x.getText, v.isXMLDoc = x.isXML, v.contains = x.contains;
        var T = function(t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && v(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            C = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            k = v.expr.match.needsContext,
            E = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            S = /^.[^:#\[\.,]*$/;
        v.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? v.find.matchesSelector(i, t) ? [i] : [] : v.find.matches(t, v.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, v.fn.extend({
            find: function(t) {
                var e, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(v(t).filter(function() {
                    for (e = 0; e < n; e++)
                        if (v.contains(r[e], this)) return !0
                }));
                for (e = 0; e < n; e++) v.find(t, r[e], i);
                return i = this.pushStack(n > 1 ? v.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function(t) {
                return this.pushStack(winnow(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(winnow(this, t || [], !0))
            },
            is: function(t) {
                return !!winnow(this, "string" == typeof t && k.test(t) ? v(t) : t || [], !1).length
            }
        });
        var _, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (v.fn.init = function(t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || _, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : A.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof v ? e[0] : e, v.merge(this, v.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : s, !0)), E.test(i[1]) && v.isPlainObject(e))
                        for (i in e) v.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = s.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = s, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : v.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(v) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), v.makeArray(t, this))
        }).prototype = v.fn, _ = v(s);
        var P = /^(?:parents|prev(?:Until|All))/,
            D = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        v.fn.extend({
            has: function(t) {
                var e = v(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (v.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, r = this.length, o = [], a = k.test(t) || "string" != typeof t ? v(t, e || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? v.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? d.call(v(t), this[0]) : d.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(v.uniqueSort(v.merge(this.get(), v(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), v.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return T(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return T(t, "parentNode", n)
            },
            next: function(t) {
                return sibling(t, "nextSibling")
            },
            prev: function(t) {
                return sibling(t, "previousSibling")
            },
            nextAll: function(t) {
                return T(t, "nextSibling")
            },
            prevAll: function(t) {
                return T(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return T(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return T(t, "previousSibling", n)
            },
            siblings: function(t) {
                return C((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return C(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || v.merge([], t.childNodes)
            }
        }, function(t, e) {
            v.fn[t] = function(n, i) {
                var r = v.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = v.filter(i, r)), this.length > 1 && (D[t] || v.uniqueSort(r), P.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var O = /\S+/g;
        v.Callbacks = function(t) {
            t = "string" == typeof t ? createOptions(t) : v.extend({}, t);
            var e, n, i, r, o = [],
                a = [],
                s = -1,
                l = function() {
                    for (r = t.once, i = e = !0; a.length; s = -1)
                        for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && t.stopOnFalse && (s = o.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (o = n ? [] : "")
                },
                u = {
                    add: function() {
                        return o && (n && !e && (s = o.length - 1, a.push(n)), function add(e) {
                            v.each(e, function(e, n) {
                                v.isFunction(n) ? t.unique && u.has(n) || o.push(n) : n && n.length && "string" !== v.type(n) && add(n)
                            })
                        }(arguments), n && !e && l()), this
                    },
                    remove: function() {
                        return v.each(arguments, function(t, e) {
                            for (var n;
                                (n = v.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                        }), this
                    },
                    has: function(t) {
                        return t ? v.inArray(t, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return r = a = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return r = a = [], n || (o = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, n) {
                        return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || l()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, v.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", v.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return v.Deferred(function(n) {
                                v.each(e, function(e, o) {
                                    var a = v.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && v.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? v.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, v.each(e, function(t, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, n, i, r = 0,
                    o = l.call(arguments),
                    a = o.length,
                    s = 1 !== a || t && v.isFunction(t.promise) ? a : 0,
                    u = 1 === s ? t : v.Deferred(),
                    c = function(t, n, i) {
                        return function(r) {
                            n[t] = this, i[t] = arguments.length > 1 ? l.call(arguments) : r, i === e ? u.notifyWith(n, i) : --s || u.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && v.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, e)).done(c(r, i, o)).fail(u.reject) : --s;
                return s || u.resolveWith(i, o), u.promise()
            }
        });
        var N;
        v.fn.ready = function(t) {
            return v.ready.promise().done(t), this
        }, v.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? v.readyWait++ : v.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== t && --v.readyWait > 0 || (N.resolveWith(s, [v]), v.fn.triggerHandler && (v(s).triggerHandler("ready"), v(s).off("ready"))))
            }
        }), v.ready.promise = function(t) {
            return N || (N = v.Deferred(), "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(v.ready) : (s.addEventListener("DOMContentLoaded", completed), n.addEventListener("load", completed))), N.promise(t)
        }, v.ready.promise();
        var M = function(t, e, n, i, r, o, a) {
                var s = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === v.type(n)) {
                    r = !0;
                    for (s in n) M(t, e, s, n[s], !0, o, a)
                } else if (void 0 !== i && (r = !0, v.isFunction(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(v(t), n)
                    })), e))
                    for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
                return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
            },
            I = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        Data.uid = 1, Data.prototype = {
            register: function(t, e) {
                var n = e || {};
                return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!I(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, I(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, r = this.cache(t);
                if ("string" == typeof e) r[e] = n;
                else
                    for (i in e) r[i] = e[i];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, v.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i, r, o = t[this.expando];
                if (void 0 !== o) {
                    if (void 0 === e) this.register(t);
                    else {
                        v.isArray(e) ? i = e.concat(e.map(v.camelCase)) : (r = v.camelCase(e), e in o ? i = [e, r] : (i = r, i = i in o ? [i] : i.match(O) || [])), n = i.length;
                        for (; n--;) delete o[i[n]]
                    }(void 0 === e || v.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !v.isEmptyObject(e)
            }
        };
        var R = new Data,
            L = new Data,
            z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            F = /[A-Z]/g;
        v.extend({
            hasData: function(t) {
                return L.hasData(t) || R.hasData(t)
            },
            data: function(t, e, n) {
                return L.access(t, e, n)
            },
            removeData: function(t, e) {
                L.remove(t, e)
            },
            _data: function(t, e, n) {
                return R.access(t, e, n)
            },
            _removeData: function(t, e) {
                R.remove(t, e)
            }
        }), v.fn.extend({
            data: function(t, e) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = L.get(o), 1 === o.nodeType && !R.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = v.camelCase(i.slice(5)), dataAttr(o, i, r[i])));
                        R.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    L.set(this, t)
                }) : M(this, function(e) {
                    var n, i;
                    if (o && void 0 === e) {
                        if (void 0 !== (n = L.get(o, t) || L.get(o, t.replace(F, "-$&").toLowerCase()))) return n;
                        if (i = v.camelCase(t), void 0 !== (n = L.get(o, i))) return n;
                        if (void 0 !== (n = dataAttr(o, i, void 0))) return n
                    } else i = v.camelCase(t), this.each(function() {
                        var n = L.get(this, i);
                        L.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && L.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    L.remove(this, t)
                })
            }
        }), v.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = R.get(t, e), n && (!i || v.isArray(n) ? i = R.access(t, e, v.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = v.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = v._queueHooks(t, e),
                    a = function() {
                        v.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return R.get(t, n) || R.access(t, n, {
                    empty: v.Callbacks("once memory").add(function() {
                        R.remove(t, [e + "queue", n])
                    })
                })
            }
        }), v.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? v.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = v.queue(this, t, e);
                    v._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && v.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    v.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    r = v.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = R.get(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(e)
            }
        });
        var q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            H = new RegExp("^(?:([+-])=|)(" + q + ")([a-z%]*)$", "i"),
            j = ["Top", "Right", "Bottom", "Left"],
            W = function(t, e) {
                return t = e || t, "none" === v.css(t, "display") || !v.contains(t.ownerDocument, t)
            },
            B = /^(?:checkbox|radio)$/i,
            V = /<([\w:-]+)/,
            X = /^$|\/(?:java|ecma)script/i,
            $ = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;
        var Y = /<|&#?\w+;/;
        ! function() {
            var t = s.createDocumentFragment(),
                e = t.appendChild(s.createElement("div")),
                n = s.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), g.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var U = /^key/,
            Q = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            G = /^([^.]*)(?:\.(.+)|)/;
        v.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o, a, s, l, u, c, d, f, h, p, g, m = R.get(t);
                if (m)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = v.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                            return void 0 !== v && v.event.triggered !== e.type ? v.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(O) || [""], u = e.length; u--;) s = G.exec(e[u]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h && (d = v.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = v.event.special[h] || {}, c = v.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && v.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o), (f = l[h]) || (f = l[h] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(h, a)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), v.event.global[h] = !0)
            },
            remove: function(t, e, n, i, r) {
                var o, a, s, l, u, c, d, f, h, p, g, m = R.hasData(t) && R.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(O) || [""], u = e.length; u--;)
                        if (s = G.exec(e[u]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
                            for (d = v.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = l[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) c = f[o], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(t, c));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(t, p, m.handle) || v.removeEvent(t, h, m.handle), delete l[h])
                        } else
                            for (h in l) v.event.remove(t, h + e[u], n, i, !0);
                    v.isEmptyObject(l) && R.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = v.event.fix(t);
                var e, n, i, r, o, a = [],
                    s = l.call(arguments),
                    u = (R.get(this, "events") || {})[t.type] || [],
                    c = v.event.special[t.type] || {};
                if (s[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                    for (a = v.event.handlers.call(this, t, u), e = 0;
                        (r = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, void 0 !== (i = ((v.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, o, a = [],
                    s = e.delegateCount,
                    l = t.target;
                if (s && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (i = [], n = 0; n < s; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? v(r, this).index(l) > -1 : v.find(r, this, null, [l]).length), i[r] && i.push(o);
                            i.length && a.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return s < e.length && a.push({
                    elem: this,
                    handlers: e.slice(s)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, r, o = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || s, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[v.expando]) return t;
                var e, n, i, r = t.type,
                    o = t,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = Q.test(r) ? this.mouseHooks : U.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new v.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
                return t.target || (t.target = s), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== safeActiveElement() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === safeActiveElement() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && v.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return v.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, v.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, v.Event = function(t, e) {
            if (!(this instanceof v.Event)) return new v.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? returnTrue : returnFalse) : this.type = t, e && v.extend(this, e), this.timeStamp = t && t.timeStamp || v.now(), this[v.expando] = !0
        }, v.Event.prototype = {
            constructor: v.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = returnTrue, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = returnTrue, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, v.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            v.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return r && (r === i || v.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), v.fn.extend({
            on: function(t, e, n, i) {
                return on(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return on(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, v(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = returnFalse), this.each(function() {
                    v.event.remove(this, t, n, e)
                })
            }
        });
        var K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            J = /<script|<style|<link/i,
            Z = /checked\s*(?:[^=]|=\s*.checked.)/i,
            tt = /^true\/(.*)/,
            et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        v.extend({
            htmlPrefilter: function(t) {
                return t.replace(K, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, r, o, a, s = t.cloneNode(!0),
                    l = v.contains(t.ownerDocument, t);
                if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || v.isXMLDoc(t)))
                    for (a = getAll(s), o = getAll(t), i = 0, r = o.length; i < r; i++) fixInput(o[i], a[i]);
                if (e)
                    if (n)
                        for (o = o || getAll(t), a = a || getAll(s), i = 0, r = o.length; i < r; i++) cloneCopyEvent(o[i], a[i]);
                    else cloneCopyEvent(t, s);
                return a = getAll(s, "script"), a.length > 0 && setGlobalEval(a, !l && getAll(t, "script")), s
            },
            cleanData: function(t) {
                for (var e, n, i, r = v.event.special, o = 0; void 0 !== (n = t[o]); o++)
                    if (I(n)) {
                        if (e = n[R.expando]) {
                            if (e.events)
                                for (i in e.events) r[i] ? v.event.remove(n, i) : v.removeEvent(n, i, e.handle);
                            n[R.expando] = void 0
                        }
                        n[L.expando] && (n[L.expando] = void 0)
                    }
            }
        }), v.fn.extend({
            domManip: domManip,
            detach: function(t) {
                return remove(this, t, !0)
            },
            remove: function(t) {
                return remove(this, t)
            },
            text: function(t) {
                return M(this, function(t) {
                    return void 0 === t ? v.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return domManip(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        manipulationTarget(this, t).appendChild(t)
                    }
                })
            },
            prepend: function() {
                return domManip(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = manipulationTarget(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return domManip(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return domManip(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (v.cleanData(getAll(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return v.clone(this, t, e)
                })
            },
            html: function(t) {
                return M(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !J.test(t) && !$[(V.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = v.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (v.cleanData(getAll(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return domManip(this, arguments, function(e) {
                    var n = this.parentNode;
                    v.inArray(this, t) < 0 && (v.cleanData(getAll(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), v.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            v.fn[t] = function(t) {
                for (var n, i = [], r = v(t), o = r.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), v(r[a])[e](n), c.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var nt, it = {
                HTML: "block",
                BODY: "block"
            },
            rt = /^margin/,
            ot = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
            at = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = n), e.getComputedStyle(t)
            },
            st = function(t, e, n, i) {
                var r, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                r = n.apply(t, i || []);
                for (o in e) t.style[o] = a[o];
                return r
            },
            lt = s.documentElement;
        ! function() {
            function computeStyleTests() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", lt.appendChild(o);
                var s = n.getComputedStyle(a);
                t = "1%" !== s.top, r = "2px" === s.marginLeft, e = "4px" === s.width, a.style.marginRight = "50%", i = "4px" === s.marginRight, lt.removeChild(o)
            }
            var t, e, i, r, o = s.createElement("div"),
                a = s.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), v.extend(g, {
                pixelPosition: function() {
                    return computeStyleTests(), t
                },
                boxSizingReliable: function() {
                    return null == e && computeStyleTests(), e
                },
                pixelMarginRight: function() {
                    return null == e && computeStyleTests(), i
                },
                reliableMarginLeft: function() {
                    return null == e && computeStyleTests(), r
                },
                reliableMarginRight: function() {
                    var t, e = a.appendChild(s.createElement("div"));
                    return e.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", a.style.width = "1px", lt.appendChild(o), t = !parseFloat(n.getComputedStyle(e).marginRight), lt.removeChild(o), a.removeChild(e), t
                }
            }))
        }();
        var ut = /^(none|table(?!-c[ea]).+)/,
            ct = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            dt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ft = ["Webkit", "O", "Moz", "ms"],
            ht = s.createElement("div").style;
        v.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = curCSS(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, a, s = v.camelCase(e),
                        l = t.style;
                    if (e = v.cssProps[s] || (v.cssProps[s] = vendorPropName(s) || s), a = v.cssHooks[e] || v.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : l[e];
                    o = typeof n, "string" === o && (r = H.exec(n)) && r[1] && (n = adjustCSS(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (v.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l[e] = n))
                }
            },
            css: function(t, e, n, i) {
                var r, o, a, s = v.camelCase(e);
                return e = v.cssProps[s] || (v.cssProps[s] = vendorPropName(s) || s), a = v.cssHooks[e] || v.cssHooks[s], a && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = curCSS(t, e, i)), "normal" === r && e in dt && (r = dt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }), v.each(["height", "width"], function(t, e) {
            v.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return ut.test(v.css(t, "display")) && 0 === t.offsetWidth ? st(t, ct, function() {
                        return getWidthOrHeight(t, e, i)
                    }) : getWidthOrHeight(t, e, i)
                },
                set: function(t, n, i) {
                    var r, o = i && at(t),
                        a = i && augmentWidthOrHeight(t, e, i, "border-box" === v.css(t, "boxSizing", !1, o), o);
                    return a && (r = H.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = v.css(t, e)), setPositiveNumber(t, n, a)
                }
            }
        }), v.cssHooks.marginLeft = addGetHookIf(g.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(curCSS(t, "marginLeft")) || t.getBoundingClientRect().left - st(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), v.cssHooks.marginRight = addGetHookIf(g.reliableMarginRight, function(t, e) {
            if (e) return st(t, {
                display: "inline-block"
            }, curCSS, [t, "marginRight"])
        }), v.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            v.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + j[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, rt.test(t) || (v.cssHooks[t + e].set = setPositiveNumber)
        }), v.fn.extend({
            css: function(t, e) {
                return M(this, function(t, e, n) {
                    var i, r, o = {},
                        a = 0;
                    if (v.isArray(e)) {
                        for (i = at(t), r = e.length; a < r; a++) o[e[a]] = v.css(t, e[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? v.style(t, e, n) : v.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return showHide(this, !0)
            },
            hide: function() {
                return showHide(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    W(this) ? v(this).show() : v(this).hide()
                })
            }
        }), v.Tween = Tween, Tween.prototype = {
            constructor: Tween,
            init: function(t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || v.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (v.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = Tween.propHooks[this.prop];
                return t && t.get ? t.get(this) : Tween.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = Tween.propHooks[this.prop];
                return this.options.duration ? this.pos = e = v.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Tween.propHooks._default.set(this), this
            }
        }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = v.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    v.fx.step[t.prop] ? v.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[v.cssProps[t.prop]] && !v.cssHooks[t.prop] ? t.elem[t.prop] = t.now : v.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, v.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, v.fx = Tween.prototype.init, v.fx.step = {};
        var pt, gt, vt = /^(?:toggle|show|hide)$/,
            mt = /queueHooks$/;
        v.Animation = v.extend(Animation, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return adjustCSS(n.elem, t, H.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    v.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(O);
                    for (var n, i = 0, r = t.length; i < r; i++) n = t[i], Animation.tweeners[n] = Animation.tweeners[n] || [], Animation.tweeners[n].unshift(e)
                },
                prefilters: [defaultPrefilter],
                prefilter: function(t, e) {
                    e ? Animation.prefilters.unshift(t) : Animation.prefilters.push(t)
                }
            }), v.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? v.extend({}, t) : {
                    complete: n || !n && e || v.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !v.isFunction(e) && e
                };
                return i.duration = v.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in v.fx.speeds ? v.fx.speeds[i.duration] : v.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    v.isFunction(i.old) && i.old.call(this), i.queue && v.dequeue(this, i.queue)
                }, i
            }, v.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(W).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var r = v.isEmptyObject(t),
                        o = v.speed(e, n, i),
                        a = function() {
                            var e = Animation(this, v.extend({}, t), o);
                            (r || R.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = v.timers,
                            a = R.get(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && mt.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                        !e && n || v.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = R.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            o = v.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, v.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), v.each(["toggle", "show", "hide"], function(t, e) {
                var n = v.fn[e];
                v.fn[e] = function(t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(genFx(e, !0), t, i, r)
                }
            }), v.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                v.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), v.timers = [], v.fx.tick = function() {
                var t, e = 0,
                    n = v.timers;
                for (pt = v.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || v.fx.stop(), pt = void 0
            }, v.fx.timer = function(t) {
                v.timers.push(t), t() ? v.fx.start() : v.timers.pop()
            }, v.fx.interval = 13, v.fx.start = function() {
                gt || (gt = n.setInterval(v.fx.tick, v.fx.interval))
            }, v.fx.stop = function() {
                n.clearInterval(gt), gt = null
            }, v.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, v.fn.delay = function(t, e) {
                return t = v.fx ? v.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var r = n.setTimeout(e, t);
                    i.stop = function() {
                        n.clearTimeout(r)
                    }
                })
            },
            function() {
                var t = s.createElement("input"),
                    e = s.createElement("select"),
                    n = e.appendChild(s.createElement("option"));
                t.type = "checkbox", g.checkOn = "" !== t.value, g.optSelected = n.selected, e.disabled = !0, g.optDisabled = !n.disabled, t = s.createElement("input"), t.value = "t", t.type = "radio", g.radioValue = "t" === t.value
            }();
        var yt, bt = v.expr.attrHandle;
        v.fn.extend({
            attr: function(t, e) {
                return M(this, v.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    v.removeAttr(this, t)
                })
            }
        }), v.extend({
            attr: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? v.prop(t, e, n) : (1 === o && v.isXMLDoc(t) || (e = e.toLowerCase(), r = v.attrHooks[e] || (v.expr.match.bool.test(e) ? yt : void 0)), void 0 !== n ? null === n ? void v.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = v.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!g.radioValue && "radio" === e && v.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i, r = 0,
                    o = e && e.match(O);
                if (o && 1 === t.nodeType)
                    for (; n = o[r++];) i = v.propFix[n] || n, v.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            }
        }), yt = {
            set: function(t, e, n) {
                return !1 === e ? v.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, v.each(v.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = bt[e] || v.find.attr;
            bt[e] = function(t, e, i) {
                var r, o;
                return i || (o = bt[e], bt[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, bt[e] = o), r
            }
        });
        var wt = /^(?:input|select|textarea|button)$/i,
            xt = /^(?:a|area)$/i;
        v.fn.extend({
            prop: function(t, e) {
                return M(this, v.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[v.propFix[t] || t]
                })
            }
        }), v.extend({
            prop: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && v.isXMLDoc(t) || (e = v.propFix[e] || e, r = v.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = v.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : wt.test(t.nodeName) || xt.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), g.optSelected || (v.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            v.propFix[this.toLowerCase()] = this
        });
        var Tt = /[\t\r\n\f]/g;
        v.fn.extend({
            addClass: function(t) {
                var e, n, i, r, o, a, s, l = 0;
                if (v.isFunction(t)) return this.each(function(e) {
                    v(this).addClass(t.call(this, e, getClass(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(O) || []; n = this[l++];)
                        if (r = getClass(n), i = 1 === n.nodeType && (" " + r + " ").replace(Tt, " ")) {
                            for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            s = v.trim(i), r !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, a, s, l = 0;
                if (v.isFunction(t)) return this.each(function(e) {
                    v(this).removeClass(t.call(this, e, getClass(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(O) || []; n = this[l++];)
                        if (r = getClass(n), i = 1 === n.nodeType && (" " + r + " ").replace(Tt, " ")) {
                            for (a = 0; o = e[a++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            s = v.trim(i), r !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : v.isFunction(t) ? this.each(function(n) {
                    v(this).toggleClass(t.call(this, n, getClass(this), e), e)
                }) : this.each(function() {
                    var e, i, r, o;
                    if ("string" === n)
                        for (i = 0, r = v(this), o = t.match(O) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = getClass(this), e && R.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : R.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + getClass(n) + " ").replace(Tt, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var Ct = /\r/g,
            kt = /[\x20\t\r\n\f]+/g;
        v.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0]; {
                    if (arguments.length) return i = v.isFunction(t), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, v(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : v.isArray(r) && (r = v.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), (e = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return (e = v.valHooks[r.type] || v.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)
                }
            }
        }), v.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = v.find.attr(t, "value");
                        return null != e ? e : v.trim(v.text(t)).replace(kt, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                            if (n = i[l], (n.selected || l === r) && (g.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                                if (e = v(n).val(), o) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, o = v.makeArray(e), a = r.length; a--;) i = r[a], (i.selected = v.inArray(v.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), v.each(["radio", "checkbox"], function() {
            v.valHooks[this] = {
                set: function(t, e) {
                    if (v.isArray(e)) return t.checked = v.inArray(v(t).val(), e) > -1
                }
            }, g.checkOn || (v.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Et = /^(?:focusinfocus|focusoutblur)$/;
        v.extend(v.event, {
            trigger: function(t, e, i, r) {
                var o, a, l, u, c, d, f, h = [i || s],
                    g = p.call(t, "type") ? t.type : t,
                    m = p.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = l = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(g + v.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, t = t[v.expando] ? t : new v.Event(g, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : v.makeArray(e, [t]), f = v.event.special[g] || {}, r || !f.trigger || !1 !== f.trigger.apply(i, e))) {
                    if (!r && !f.noBubble && !v.isWindow(i)) {
                        for (u = f.delegateType || g, Et.test(u + g) || (a = a.parentNode); a; a = a.parentNode) h.push(a), l = a;
                        l === (i.ownerDocument || s) && h.push(l.defaultView || l.parentWindow || n)
                    }
                    for (o = 0;
                        (a = h[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || g, d = (R.get(a, "events") || {})[t.type] && R.get(a, "handle"), d && d.apply(a, e), (d = c && a[c]) && d.apply && I(a) && (t.result = d.apply(a, e), !1 === t.result && t.preventDefault());
                    return t.type = g, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), e) || !I(i) || c && v.isFunction(i[g]) && !v.isWindow(i) && (l = i[c], l && (i[c] = null), v.event.triggered = g, i[g](), v.event.triggered = void 0, l && (i[c] = l)), t.result
                }
            },
            simulate: function(t, e, n) {
                var i = v.extend(new v.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                v.event.trigger(i, null, e)
            }
        }), v.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    v.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return v.event.trigger(t, e, n, !0)
            }
        }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            v.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), v.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), g.focusin = "onfocusin" in n, g.focusin || v.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                v.event.simulate(e, t.target, v.event.fix(t))
            };
            v.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = R.access(i, e);
                    r || i.addEventListener(t, n, !0), R.access(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = R.access(i, e) - 1;
                    r ? R.access(i, e, r) : (i.removeEventListener(t, n, !0), R.remove(i, e))
                }
            }
        });
        var St = n.location,
            _t = v.now(),
            At = /\?/;
        v.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, v.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + t), e
        };
        var Pt = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Nt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Mt = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            Rt = {},
            Lt = {},
            zt = "*/".concat("*"),
            Ft = s.createElement("a");
        Ft.href = St.href, v.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: St.href,
                type: "GET",
                isLocal: Nt.test(St.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": zt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": v.parseJSON,
                    "text xml": v.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? ajaxExtend(ajaxExtend(t, v.ajaxSettings), e) : ajaxExtend(v.ajaxSettings, t)
            },
            ajaxPrefilter: addToPrefiltersOrTransports(Rt),
            ajaxTransport: addToPrefiltersOrTransports(Lt),
            ajax: function(t, e) {
                function done(t, e, a, s) {
                    var u, d, b, w, T, k = e;
                    2 !== x && (x = 2, l && n.clearTimeout(l), i = void 0, o = s || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, a && (w = ajaxHandleResponses(f, C, a)), w = ajaxConvert(f, w, C, u), u ? (f.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (v.lastModified[r] = T), (T = C.getResponseHeader("etag")) && (v.etag[r] = T)), 204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = w.state, d = w.data, b = w.error, u = !b)) : (b = k, !t && k || (k = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || k) + "", u ? g.resolveWith(h, [d, k, C]) : g.rejectWith(h, [C, k, b]), C.statusCode(y), y = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [C, f, u ? d : b]), m.fireWith(h, [C, k]), c && (p.trigger("ajaxComplete", [C, f]), --v.active || v.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, r, o, a, l, u, c, d, f = v.ajaxSetup({}, e),
                    h = f.context || f,
                    p = f.context && (h.nodeType || h.jquery) ? v(h) : v.event,
                    g = v.Deferred(),
                    m = v.Callbacks("once memory"),
                    y = f.statusCode || {},
                    b = {},
                    w = {},
                    x = 0,
                    T = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === x) {
                                if (!a)
                                    for (a = {}; e = Ot.exec(o);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? o : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return x || (t = w[n] = w[n] || t, b[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return x || (f.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (x < 2)
                                    for (e in t) y[e] = [y[e], t[e]];
                                else C.always(t[C.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || T;
                            return i && i.abort(e), done(0, e), this
                        }
                    };
                if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, f.url = ((t || f.url || St.href) + "").replace(Pt, "").replace(It, St.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = v.trim(f.dataType || "*").toLowerCase().match(O) || [""], null == f.crossDomain) {
                    u = s.createElement("a");
                    try {
                        u.href = f.url, u.href = u.href, f.crossDomain = Ft.protocol + "//" + Ft.host != u.protocol + "//" + u.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = v.param(f.data, f.traditional)), inspectPrefiltersOrTransports(Rt, f, e, C), 2 === x) return C;
                c = v.event && f.global, c && 0 == v.active++ && v.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Mt.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (At.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = Dt.test(r) ? r.replace(Dt, "$1_=" + _t++) : r + (At.test(r) ? "&" : "?") + "_=" + _t++)), f.ifModified && (v.lastModified[r] && C.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && C.setRequestHeader("If-None-Match", v.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : f.accepts["*"]);
                for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || 2 === x)) return C.abort();
                T = "abort";
                for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[d](f[d]);
                if (i = inspectPrefiltersOrTransports(Lt, f, e, C)) {
                    if (C.readyState = 1, c && p.trigger("ajaxSend", [C, f]), 2 === x) return C;
                    f.async && f.timeout > 0 && (l = n.setTimeout(function() {
                        C.abort("timeout")
                    }, f.timeout));
                    try {
                        x = 1, i.send(b, done)
                    } catch (t) {
                        if (!(x < 2)) throw t;
                        done(-1, t)
                    }
                } else done(-1, "No Transport");
                return C
            },
            getJSON: function(t, e, n) {
                return v.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return v.get(t, void 0, e, "script")
            }
        }), v.each(["get", "post"], function(t, e) {
            v[e] = function(t, n, i, r) {
                return v.isFunction(n) && (r = r || i, i = n, n = void 0), v.ajax(v.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, v.isPlainObject(t) && t))
            }
        }), v._evalUrl = function(t) {
            return v.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, v.fn.extend({
            wrapAll: function(t) {
                var e;
                return v.isFunction(t) ? this.each(function(e) {
                    v(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = v(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return v.isFunction(t) ? this.each(function(e) {
                    v(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = v(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = v.isFunction(t);
                return this.each(function(n) {
                    v(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
                }).end()
            }
        }), v.expr.filters.hidden = function(t) {
            return !v.expr.filters.visible(t)
        }, v.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var qt = /%20/g,
            Ht = /\[\]$/,
            jt = /\r?\n/g,
            Wt = /^(?:submit|button|image|reset|file)$/i,
            Bt = /^(?:input|select|textarea|keygen)/i;
        v.param = function(t, e) {
            var n, i = [],
                r = function(t, e) {
                    e = v.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = v.ajaxSettings && v.ajaxSettings.traditional), v.isArray(t) || t.jquery && !v.isPlainObject(t)) v.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (n in t) buildParams(n, t[n], e, r);
            return i.join("&").replace(qt, "+")
        }, v.fn.extend({
            serialize: function() {
                return v.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = v.prop(this, "elements");
                    return t ? v.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !v(this).is(":disabled") && Bt.test(this.nodeName) && !Wt.test(t) && (this.checked || !B.test(t))
                }).map(function(t, e) {
                    var n = v(this).val();
                    return null == n ? null : v.isArray(n) ? v.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(jt, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(jt, "\r\n")
                    }
                }).get()
            }
        }), v.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        };
        var Vt = {
                0: 200,
                1223: 204
            },
            Xt = v.ajaxSettings.xhr();
        g.cors = !!Xt && "withCredentials" in Xt, g.ajax = Xt = !!Xt, v.ajaxTransport(function(t) {
            var e, i;
            if (g.cors || Xt && !t.crossDomain) return {
                send: function(r, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (a in r) s.setRequestHeader(a, r[a]);
                    e = function(t) {
                        return function() {
                            e && (e = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }, s.onload = e(), i = s.onerror = e("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                        4 === s.readyState && n.setTimeout(function() {
                            e && i()
                        })
                    }, e = e("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function() {
                    e && e()
                }
            }
        }), v.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return v.globalEval(t), t
                }
            }
        }), v.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), v.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, r) {
                        e = v("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), s.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var $t = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
        v.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = $t.pop() || v.expando + "_" + _t++;
                return this[t] = !0, t
            }
        }), v.ajaxPrefilter("json jsonp", function(t, e, i) {
            var r, o, a, s = !1 !== t.jsonp && (Yt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Yt, "$1" + r) : !1 !== t.jsonp && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return a || v.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = n[r], n[r] = function() {
                a = arguments
            }, i.always(function() {
                void 0 === o ? v(n).removeProp(r) : n[r] = o, t[r] && (t.jsonpCallback = e.jsonpCallback, $t.push(r)), a && v.isFunction(o) && o(a[0]), a = o = void 0
            }), "script"
        }), v.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || s;
            var i = E.exec(t),
                r = !n && [];
            return i ? [e.createElement(i[1])] : (i = buildFragment([t], e, r), r && r.length && v(r).remove(), v.merge([], i.childNodes))
        };
        var Ut = v.fn.load;
        v.fn.load = function(t, e, n) {
            if ("string" != typeof t && Ut) return Ut.apply(this, arguments);
            var i, r, o, a = this,
                s = t.indexOf(" ");
            return s > -1 && (i = v.trim(t.slice(s)), t = t.slice(0, s)), v.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && v.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, a.html(i ? v("<div>").append(v.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                a.each(function() {
                    n.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            v.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), v.expr.filters.animated = function(t) {
            return v.grep(v.timers, function(e) {
                return t === e.elem
            }).length
        }, v.offset = {
            setOffset: function(t, e, n) {
                var i, r, o, a, s, l, u, c = v.css(t, "position"),
                    d = v(t),
                    f = {};
                "static" === c && (t.style.position = "relative"), s = d.offset(), o = v.css(t, "top"), l = v.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), v.isFunction(e) && (e = e.call(t, n, v.extend({}, s))), null != e.top && (f.top = e.top - s.top + a), null != e.left && (f.left = e.left - s.left + r), "using" in e ? e.using.call(t, f) : d.css(f)
            }
        }, v.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    v.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = i && i.ownerDocument;
                if (o) return e = o.documentElement, v.contains(e, i) ? (r = i.getBoundingClientRect(), n = getWindow(o), {
                    top: r.top + n.pageYOffset - e.clientTop,
                    left: r.left + n.pageXOffset - e.clientLeft
                }) : r
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === v.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), v.nodeName(t[0], "html") || (i = t.offset()), i.top += v.css(t[0], "borderTopWidth", !0), i.left += v.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - v.css(n, "marginTop", !0),
                        left: e.left - i.left - v.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === v.css(t, "position");) t = t.offsetParent;
                    return t || lt
                })
            }
        }), v.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            v.fn[t] = function(i) {
                return M(this, function(t, i, r) {
                    var o = getWindow(t);
                    if (void 0 === r) return o ? o[e] : t[i];
                    o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
                }, t, i, arguments.length)
            }
        }), v.each(["top", "left"], function(t, e) {
            v.cssHooks[e] = addGetHookIf(g.pixelPosition, function(t, n) {
                if (n) return n = curCSS(t, e), ot.test(n) ? v(t).position()[e] + "px" : n
            })
        }), v.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            v.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                v.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === r ? "margin" : "border");
                    return M(this, function(e, n, i) {
                        var r;
                        return v.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? v.css(e, n, a) : v.style(e, n, i, a)
                    }, e, o ? i : void 0, o, null)
                }
            })
        }), v.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            size: function() {
                return this.length
            }
        }), v.fn.andSelf = v.fn.addBack, i = [], void 0 !== (r = function() {
            return v
        }.apply(e, i)) && (t.exports = r);
        var Qt = n.jQuery,
            Gt = n.$;
        return v.noConflict = function(t) {
            return n.$ === v && (n.$ = Gt), t && n.jQuery === v && (n.jQuery = Qt), v
        }, o || (n.jQuery = n.$ = v), v
    })
}, function(t, e, n) {
    "use strict";
    (function(t) {
        function escapeHtml(t) {
            return String(t).replace(/[&<>"'\/]/g, function(t) {
                return o[t]
            })
        }

        function mousePosition(e) {
            var n = t.document.body,
                r = {
                    top: 0,
                    left: 0
                };
            return "static" !== i(n).css("position") && (r = i(n).offset()), {
                top: e.pageY - r.top,
                left: e.pageX - r.left
            }
        }
        var i = n(0),
            r = n(17).Promise,
            o = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;"
            },
            a = function() {
                if ("function" == typeof t.Gettext) {
                    var e = new t.Gettext({
                        domain: "annotator"
                    });
                    return function(t) {
                        return e.gettext(t)
                    }
                }
                return function(t) {
                    return t
                }
            }();
        e.$ = i, e.Promise = r, e.gettext = a, e.escapeHtml = escapeHtml, e.mousePosition = mousePosition
    }).call(e, n(2))
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    (function(t) {
        function Widget(t) {
            this.element = o(this.constructor.template), this.classes = o.extend({}, Widget.classes, this.constructor.classes), this.options = o.extend({}, Widget.options, this.constructor.options, t), this.extensionsInstalled = !1
        }
        var i = n(16),
            r = n(1),
            o = r.$;
        Widget.prototype.destroy = function() {
            this.element.remove()
        }, Widget.prototype.installExtensions = function() {
            if (this.options.extensions)
                for (var t = 0, e = this.options.extensions.length; t < e; t++) {
                    var n = this.options.extensions[t];
                    n(this)
                }
        }, Widget.prototype._maybeInstallExtensions = function() {
            this.extensionsInstalled || (this.extensionsInstalled = !0, this.installExtensions())
        }, Widget.prototype.attach = function() {
            this.element.appendTo(this.options.appendTo), this._maybeInstallExtensions()
        }, Widget.prototype.show = function() {
            this.element.removeClass(this.classes.hide), this.checkOrientation()
        }, Widget.prototype.hide = function() {
            o(this.element).addClass(this.classes.hide)
        }, Widget.prototype.isShown = function() {
            return !o(this.element).hasClass(this.classes.hide)
        }, Widget.prototype.checkOrientation = function() {
            this.resetOrientation();
            var e = o(t),
                n = this.element.children(":first"),
                i = n.offset(),
                r = {
                    top: e.scrollTop(),
                    right: e.width() + e.scrollLeft()
                },
                a = {
                    top: i.top,
                    right: i.left + n.width()
                };
            return a.top - r.top < 0 && this.invertY(), a.right - r.right > 0 && this.invertX(), this
        }, Widget.prototype.resetOrientation = function() {
            return this.element.removeClass(this.classes.invert.x).removeClass(this.classes.invert.y), this
        }, Widget.prototype.invertX = function() {
            return this.element.addClass(this.classes.invert.x), this
        }, Widget.prototype.invertY = function() {
            return this.element.addClass(this.classes.invert.y), this
        }, Widget.prototype.isInvertedY = function() {
            return this.element.hasClass(this.classes.invert.y)
        }, Widget.prototype.isInvertedX = function() {
            return this.element.hasClass(this.classes.invert.x)
        }, Widget.classes = {
            hide: "annotator-hide",
            invert: {
                x: "annotator-invert-x",
                y: "annotator-invert-y"
            }
        }, Widget.template = "<div></div>", Widget.options = {
            appendTo: "body"
        }, Widget.extend = i, e.Widget = Widget
    }).call(e, n(2))
}, function(t, e, n) {
    var i;
    ! function(r, o, a) {
        function _addEvent(t, e, n) {
            if (t.addEventListener) return void t.addEventListener(e, n, !1);
            t.attachEvent("on" + e, n)
        }

        function _characterFromEvent(t) {
            if ("keypress" == t.type) {
                var e = String.fromCharCode(t.which);
                return t.shiftKey || (e = e.toLowerCase()), e
            }
            return l[t.which] ? l[t.which] : u[t.which] ? u[t.which] : String.fromCharCode(t.which).toLowerCase()
        }

        function _modifiersMatch(t, e) {
            return t.sort().join(",") === e.sort().join(",")
        }

        function _eventModifiers(t) {
            var e = [];
            return t.shiftKey && e.push("shift"), t.altKey && e.push("alt"), t.ctrlKey && e.push("ctrl"), t.metaKey && e.push("meta"), e
        }

        function _preventDefault(t) {
            if (t.preventDefault) return void t.preventDefault();
            t.returnValue = !1
        }

        function _stopPropagation(t) {
            if (t.stopPropagation) return void t.stopPropagation();
            t.cancelBubble = !0
        }

        function _isModifier(t) {
            return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t
        }

        function _getReverseMap() {
            if (!s) {
                s = {};
                for (var t in l) t > 95 && t < 112 || l.hasOwnProperty(t) && (s[l[t]] = t)
            }
            return s
        }

        function _pickBestAction(t, e, n) {
            return n || (n = _getReverseMap()[t] ? "keydown" : "keypress"), "keypress" == n && e.length && (n = "keydown"), n
        }

        function _keysFromString(t) {
            return "+" === t ? ["+"] : (t = t.replace(/\+{2}/g, "+plus"), t.split("+"))
        }

        function _getKeyInfo(t, e) {
            var n, i, r, o = [];
            for (n = _keysFromString(t), r = 0; r < n.length; ++r) i = n[r], d[i] && (i = d[i]), e && "keypress" != e && c[i] && (i = c[i], o.push("shift")), _isModifier(i) && o.push(i);
            return e = _pickBestAction(i, o, e), {
                key: i,
                modifiers: o,
                action: e
            }
        }

        function _belongsTo(t, e) {
            return null !== t && t !== o && (t === e || _belongsTo(t.parentNode, e))
        }

        function Mousetrap(t) {
            function _resetSequences(t) {
                t = t || {};
                var e, n = !1;
                for (e in i) t[e] ? n = !0 : i[e] = 0;
                n || (s = !1)
            }

            function _getMatches(t, n, r, o, a, s) {
                var l, u, c = [],
                    d = r.type;
                if (!e._callbacks[t]) return [];
                for ("keyup" == d && _isModifier(t) && (n = [t]), l = 0; l < e._callbacks[t].length; ++l)
                    if (u = e._callbacks[t][l], (o || !u.seq || i[u.seq] == u.level) && d == u.action && ("keypress" == d && !r.metaKey && !r.ctrlKey || _modifiersMatch(n, u.modifiers))) {
                        var f = !o && u.combo == a,
                            h = o && u.seq == o && u.level == s;
                        (f || h) && e._callbacks[t].splice(l, 1), c.push(u)
                    }
                return c
            }

            function _fireCallback(t, n, i, r) {
                e.stopCallback(n, n.target || n.srcElement, i, r) || !1 === t(n, i) && (_preventDefault(n), _stopPropagation(n))
            }

            function _handleKeyEvent(t) {
                "number" != typeof t.which && (t.which = t.keyCode);
                var n = _characterFromEvent(t);
                if (n) return "keyup" == t.type && r === n ? void(r = !1) : void e.handleKey(n, _eventModifiers(t), t)
            }

            function _resetSequenceTimer() {
                clearTimeout(n), n = setTimeout(_resetSequences, 1e3)
            }

            function _bindSequence(t, e, n, o) {
                function _callbackAndReset(e) {
                    _fireCallback(n, e, t), "keyup" !== o && (r = _characterFromEvent(e)), setTimeout(_resetSequences, 10)
                }
                i[t] = 0;
                for (var a = 0; a < e.length; ++a) {
                    var l = a + 1 === e.length,
                        u = l ? _callbackAndReset : function(e) {
                            return function() {
                                s = e, ++i[t], _resetSequenceTimer()
                            }
                        }(o || _getKeyInfo(e[a + 1]).action);
                    _bindSingle(e[a], u, o, t, a)
                }
            }

            function _bindSingle(t, n, i, r, o) {
                e._directMap[t + ":" + i] = n, t = t.replace(/\s+/g, " ");
                var a, s = t.split(" ");
                if (s.length > 1) return void _bindSequence(t, s, n, i);
                a = _getKeyInfo(t, i), e._callbacks[a.key] = e._callbacks[a.key] || [], _getMatches(a.key, a.modifiers, {
                    type: a.action
                }, r, t, o), e._callbacks[a.key][r ? "unshift" : "push"]({
                    callback: n,
                    modifiers: a.modifiers,
                    action: a.action,
                    seq: r,
                    level: o,
                    combo: t
                })
            }
            var e = this;
            if (t = t || o, !(e instanceof Mousetrap)) return new Mousetrap(t);
            e.target = t, e._callbacks = {}, e._directMap = {};
            var n, i = {},
                r = !1,
                a = !1,
                s = !1;
            e._handleKey = function(t, e, n) {
                var i, r = _getMatches(t, e, n),
                    o = {},
                    l = 0,
                    u = !1;
                for (i = 0; i < r.length; ++i) r[i].seq && (l = Math.max(l, r[i].level));
                for (i = 0; i < r.length; ++i)
                    if (r[i].seq) {
                        if (r[i].level != l) continue;
                        u = !0, o[r[i].seq] = 1, _fireCallback(r[i].callback, n, r[i].combo, r[i].seq)
                    } else u || _fireCallback(r[i].callback, n, r[i].combo);
                var c = "keypress" == n.type && a;
                n.type != s || _isModifier(t) || c || _resetSequences(o), a = u && "keydown" == n.type
            }, e._bindMultiple = function(t, e, n) {
                for (var i = 0; i < t.length; ++i) _bindSingle(t[i], e, n)
            }, _addEvent(t, "keypress", _handleKeyEvent), _addEvent(t, "keydown", _handleKeyEvent), _addEvent(t, "keyup", _handleKeyEvent)
        }
        if (r) {
            for (var s, l = {
                    8: "backspace",
                    9: "tab",
                    13: "enter",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "ins",
                    46: "del",
                    91: "meta",
                    93: "meta",
                    224: "meta"
                }, u = {
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'"
                }, c = {
                    "~": "`",
                    "!": "1",
                    "@": "2",
                    "#": "3",
                    $: "4",
                    "%": "5",
                    "^": "6",
                    "&": "7",
                    "*": "8",
                    "(": "9",
                    ")": "0",
                    _: "-",
                    "+": "=",
                    ":": ";",
                    '"': "'",
                    "<": ",",
                    ">": ".",
                    "?": "/",
                    "|": "\\"
                }, d = {
                    option: "alt",
                    command: "meta",
                    return: "enter",
                    escape: "esc",
                    plus: "+",
                    mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
                }, f = 1; f < 20; ++f) l[111 + f] = "f" + f;
            for (f = 0; f <= 9; ++f) l[f + 96] = f.toString();
            Mousetrap.prototype.bind = function(t, e, n) {
                var i = this;
                return t = t instanceof Array ? t : [t], i._bindMultiple.call(i, t, e, n), i
            }, Mousetrap.prototype.unbind = function(t, e) {
                var n = this;
                return n.bind.call(n, t, function() {}, e)
            }, Mousetrap.prototype.trigger = function(t, e) {
                var n = this;
                return n._directMap[t + ":" + e] && n._directMap[t + ":" + e]({}, t), n
            }, Mousetrap.prototype.reset = function() {
                var t = this;
                return t._callbacks = {}, t._directMap = {}, t
            }, Mousetrap.prototype.stopCallback = function(t, e) {
                var n = this;
                return !((" " + e.className + " ").indexOf(" mousetrap ") > -1) && (!_belongsTo(e, n.target) && ("INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable))
            }, Mousetrap.prototype.handleKey = function() {
                var t = this;
                return t._handleKey.apply(t, arguments)
            }, Mousetrap.addKeycodes = function(t) {
                for (var e in t) t.hasOwnProperty(e) && (l[e] = t[e]);
                s = null
            }, Mousetrap.init = function() {
                var t = Mousetrap(o);
                for (var e in t) "_" !== e.charAt(0) && (Mousetrap[e] = function(e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                }(e))
            }, Mousetrap.init(), r.Mousetrap = Mousetrap, void 0 !== t && t.exports && (t.exports = Mousetrap), void 0 !== (i = function() {
                return Mousetrap
            }.call(e, n, e, t)) && (t.exports = i)
        }
    }("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null)
}, function(t, e, n) {
    "use strict";
    var i;
    e.acl = function() {
        var t = new i;
        return {
            configure: function(e) {
                e.registerUtility(t, "authorizationPolicy")
            }
        }
    }, i = e.AclAuthzPolicy = function() {}, i.prototype.permits = function(t, e, n) {
        var i = this.authorizedUserId(n),
            r = e.permissions;
        if (r) {
            var o = r[t];
            if (void 0 === o || null === o) return !0;
            for (var a = 0, s = o.length; a < s; a++)
                if (i === o[a]) return !0;
            return !1
        }
        return !e.user || i === e.user
    }, i.prototype.authorizedUserId = function(t) {
        return t
    }
}, function(t, e, n) {
    "use strict";
    var i;
    e.simple = function() {
        var t = new i;
        return {
            configure: function(e) {
                e.registerUtility(t, "identityPolicy")
            },
            beforeAnnotationCreated: function(e) {
                e.user = t.who()
            }
        }
    }, i = function() {
        this.identity = null
    }, e.SimpleIdentityPolicy = i, i.prototype.who = function() {
        return this.identity
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        function banner(e, n) {
            void 0 !== n && null !== n || (n = o);
            var l = r(a)[0],
                u = !1,
                c = function() {
                    u || (u = !0, r(l).removeClass(s.show).removeClass(s[n]), setTimeout(function() {
                        r(l).remove()
                    }, 500))
                };
            return r(l).addClass(s.show).addClass(s[n]).html(i.escapeHtml(e || "")).appendTo(t.document.body), r(l).on("click", c), setTimeout(c, 5e3), {
                close: c
            }
        }
        var i = n(1),
            r = i.$,
            o = "info",
            a = "<div class='annotator-notice'></div>",
            s = {
                show: "annotator-notice-show",
                info: "annotator-notice-info",
                success: "annotator-notice-success",
                error: "annotator-notice-error"
            };
        e.banner = banner, e.defaultNotifier = banner, e.INFO = o, e.SUCCESS = "success", e.ERROR = "error"
    }).call(e, n(2))
}, function(t, e, n) {
    "use strict";

    function StorageAdapter(t, e) {
        this.store = t, this.runHook = e
    }
    var i = n(1),
        r = i.$,
        o = i.gettext,
        a = i.Promise,
        s = function() {
            var t;
            return t = -1,
                function() {
                    return t += 1
                }
        }();
    e.debug = function() {
        function trace(t, e) {
            var n = JSON.parse(JSON.stringify(e));
            console.debug("annotator.storage.debug: " + t, n)
        }
        return {
            create: function(t) {
                return t.id = s(), trace("create", t), t
            },
            update: function(t) {
                return trace("update", t), t
            },
            delete: function(t) {
                return trace("destroy", t), t
            },
            query: function(t) {
                return trace("query", t), {
                    results: [],
                    meta: {
                        total: 0
                    }
                }
            },
            configure: function(t) {
                t.registerUtility(this, "storage")
            }
        }
    }, e.noop = function() {
        return {
            create: function(t) {
                return void 0 !== t.id && null !== t.id || (t.id = s()), t
            },
            update: function(t) {
                return t
            },
            delete: function(t) {
                return t
            },
            query: function() {
                return {
                    results: []
                }
            },
            configure: function(t) {
                t.registerUtility(this, "storage")
            }
        }
    };
    var l;
    e.http = function(t) {
        var e = function() {};
        void 0 !== t && null !== t || (t = {}), t.onError = t.onError || function(t, n) {
            console.error(t, n), e(t, "error")
        };
        var n = new l(t);
        return {
            configure: function(t) {
                t.registerUtility(n, "storage")
            },
            start: function(t) {
                e = t.notify
            }
        }
    }, l = e.HttpStorage = function HttpStorage(t) {
        this.options = r.extend(!0, {}, HttpStorage.options, t), this.onError = this.options.onError
    }, l.prototype.create = function(t) {
        return this._apiRequest("create", t)
    }, l.prototype.update = function(t) {
        return this._apiRequest("update", t)
    }, l.prototype.delete = function(t) {
        return this._apiRequest("destroy", t)
    }, l.prototype.query = function(t) {
        return this._apiRequest("search", t).then(function(t) {
            var e = t.rows;
            return delete t.rows, {
                results: e,
                meta: t
            }
        })
    }, l.prototype.setHeader = function(t, e) {
        this.options.headers[t] = e
    }, l.prototype._apiRequest = function(t, e) {
        var n = e && e.id,
            i = this._urlFor(t, n),
            o = this._apiRequestOptions(t, e),
            a = r.ajax(i, o);
        return a._id = n, a._action = t, a
    }, l.prototype._apiRequestOptions = function(t, e) {
        var n = this._methodFor(t),
            i = this,
            o = {
                type: n,
                dataType: "json",
                error: function() {
                    i._onError.apply(i, arguments)
                },
                headers: this.options.headers
            };
        if (!this.options.emulateHTTP || "PUT" !== n && "DELETE" !== n || (o.headers = r.extend(o.headers, {
                "X-HTTP-Method-Override": n
            }), o.type = "POST"), "search" === t) return o = r.extend(o, {
            data: e
        });
        var a = e && JSON.stringify(e);
        return this.options.emulateJSON ? (o.data = {
            json: a
        }, this.options.emulateHTTP && (o.data._method = n), o) : o = r.extend(o, {
            data: a,
            contentType: "application/json; charset=utf-8"
        })
    }, l.prototype._urlFor = function(t, e) {
        void 0 !== e && null !== e || (e = "");
        var n = "";
        return void 0 !== this.options.prefix && null !== this.options.prefix && (n = this.options.prefix), n += this.options.urls[t], n = n.replace(/idAnnotation/, e)
    }, l.prototype._methodFor = function(t) {
        return {
            create: "POST",
            update: "PUT",
            destroy: "DELETE",
            search: "GET"
        }[t]
    }, l.prototype._onError = function(t) {
        if ("function" == typeof this.onError) {
            var e;
            e = o(400 === t.status ? "The annotation store did not understand the request! (Error 400)" : 401 === t.status ? "You must be logged in to perform this operation! (Error 401)" : 403 === t.status ? "You don't have permission to perform this operation! (Error 403)" : 404 === t.status ? "Could not connect to the annotation store! (Error 404)" : 500 === t.status ? "Internal error in annotation store! (Error 500)" : "Unknown error while speaking to annotation store!"), this.onError(e, t)
        }
    }, l.options = {
        emulateHTTP: !1,
        emulateJSON: !1,
        headers: {},
        onError: function(t) {
            console.error("API request failed: " + t)
        },
        prefix: "/store",
        urls: {
            create: "/annotations",
            update: "/annotations/idAnnotation",
            destroy: "/annotations/idAnnotation",
            search: "/search"
        }
    }, StorageAdapter.prototype.create = function(t) {
        return void 0 !== t && null !== t || (t = {}), this._cycle(t, "create", "beforeAnnotationCreated", "annotationCreated")
    }, StorageAdapter.prototype.update = function(t) {
        if (void 0 === t.id || null === t.id) throw new TypeError("annotation must have an id for update()");
        return this._cycle(t, "update", "beforeAnnotationUpdated", "annotationUpdated")
    }, StorageAdapter.prototype.delete = function(t) {
        if (void 0 === t.id || null === t.id) throw new TypeError("annotation must have an id for delete()");
        return this._cycle(t, "delete", "beforeAnnotationDeleted", "annotationDeleted")
    }, StorageAdapter.prototype.query = function(t) {
        return a.resolve(this.store.query(t))
    }, StorageAdapter.prototype.load = function(t) {
        var e = this;
        return this.query(t).then(function(t) {
            e.runHook("annotationsLoaded", [t.results])
        })
    }, StorageAdapter.prototype._cycle = function(t, e, n, i) {
        var o = this;
        return this.runHook(n, [t]).then(function() {
            var n = r.extend(!0, {}, t);
            delete n._local;
            var i = o.store[e](n);
            return a.resolve(i)
        }).then(function(e) {
            for (var n in t) t.hasOwnProperty(n) && "_local" !== n && delete t[n];
            return r.extend(t, e), o.runHook(i, [t]), t
        })
    }, e.StorageAdapter = StorageAdapter
}, function(t, e, n) {
    "use strict";
    var i = n(3).Widget,
        r = n(1),
        o = r.$,
        a = r.gettext,
        s = "annotator-adder",
        l = i.extend({
            constructor: function(t) {
                i.call(this, t), this.ignoreMouseup = !1, this.annotation = null, this.onCreate = this.options.onCreate;
                var e = this;
                this.element.on("click." + s, "button", function(t) {
                    e._onClick(t)
                }).on("mousedown." + s, "button", function(t) {
                    e._onMousedown(t)
                }), this.document = this.element[0].ownerDocument, o(this.document.body).on("mouseup." + s, function(t) {
                    e._onMouseup(t)
                })
            },
            destroy: function() {
                this.element.off("." + s), o(this.document.body).off("." + s), i.prototype.destroy.call(this)
            },
            load: function(t, e) {
                this.annotation = t, this.show(e)
            },
            show: function(t) {
                void 0 !== t && null !== t && this.element.css({
                    top: t.top,
                    left: t.left
                }), i.prototype.show.call(this)
            },
            _onMousedown: function(t) {
                t.which > 1 || (t.preventDefault(), this.ignoreMouseup = !0)
            },
            _onMouseup: function(t) {
                t.which > 1 || this.ignoreMouseup && t.stopImmediatePropagation()
            },
            _onClick: function(t) {
                t.which > 1 || (t.preventDefault(), this.hide(), this.ignoreMouseup = !1, null !== this.annotation && "function" == typeof this.onCreate && this.onCreate(this.annotation, t))
            }
        });
    l.template = ['<div class="annotator-adder annotator-hide">', '  <button type="button">' + a("Annotate") + "</button>", "</div>"].join("\n"), l.options = {
        onCreate: null
    }, e.Adder = l
}, function(t, e, n) {
    "use strict";

    function preventEventDefault(t) {
        void 0 !== t && null !== t && "function" == typeof t.preventDefault && t.preventDefault()
    }
    var i = n(3).Widget,
        r = n(1),
        o = r.$,
        a = r.gettext,
        s = r.Promise,
        l = "annotator-editor",
        u = function() {
            var t;
            return t = -1,
                function() {
                    return t += 1
                }
        }(),
        c = e.dragTracker = function(t, e) {
            function mouseMove(t) {
                if (!i && null !== n) {
                    var r = {
                            y: t.pageY - n.top,
                            x: t.pageX - n.left
                        },
                        o = !0;
                    "function" == typeof e && (o = e(r)), !1 !== o && (n = {
                        top: t.pageY,
                        left: t.pageX
                    }), i = !0, setTimeout(function() {
                        i = !1
                    }, 1e3 / 60)
                }
            }

            function mouseUp() {
                n = null, o(t.ownerDocument).off("mouseup", mouseUp).off("mousemove", mouseMove)
            }

            function mouseDown(e) {
                e.target === t && (n = {
                    top: e.pageY,
                    left: e.pageX
                }, o(t.ownerDocument).on("mouseup", mouseUp).on("mousemove", mouseMove), e.preventDefault())
            }

            function destroy() {
                o(t).off("mousedown", mouseDown)
            }
            var n = null,
                i = !1;
            return o(t).on("mousedown", mouseDown), {
                destroy: destroy
            }
        },
        d = e.resizer = function(t, e, n) {
            function translate(t) {
                var e = 1,
                    i = -1;
                return "function" == typeof n.invertedX && n.invertedX() && (e = -1), "function" == typeof n.invertedY && n.invertedY() && (i = 1), {
                    x: t.x * e,
                    y: t.y * i
                }
            }

            function resize(t) {
                var e = i.height(),
                    n = i.width(),
                    r = translate(t);
                return Math.abs(r.x) > 0 && i.width(n + r.x), Math.abs(r.y) > 0 && i.height(e + r.y), i.height() !== e || i.width() !== n
            }
            var i = o(t);
            return void 0 !== n && null !== n || (n = {}), c(e, resize)
        },
        f = e.mover = function(t, e) {
            function move(e) {
                o(t).css({
                    top: parseInt(o(t).css("top"), 10) + e.y,
                    left: parseInt(o(t).css("left"), 10) + e.x
                })
            }
            return c(e, move)
        },
        h = e.Editor = i.extend({
            constructor: function(t) {
                i.call(this, t), this.fields = [], this.annotation = {}, this.options.defaultFields && this.addField({
                    type: "textarea",
                    label: a("Comments") + "…",
                    load: function(t, e) {
                        o(t).find("textarea").val(e.text || "")
                    },
                    submit: function(t, e) {
                        e.text = o(t).find("textarea").val()
                    }
                });
                var e = this;
                this.element.on("submit." + l, "form", function(t) {
                    e._onFormSubmit(t)
                }).on("click." + l, ".annotator-save", function(t) {
                    e._onSaveClick(t)
                }).on("click." + l, ".annotator-cancel", function(t) {
                    e._onCancelClick(t)
                }).on("mouseover." + l, ".annotator-cancel", function(t) {
                    e._onCancelMouseover(t)
                }).on("keydown." + l, "textarea", function(t) {
                    e._onTextareaKeydown(t)
                })
            },
            destroy: function() {
                this.element.off("." + l), i.prototype.destroy.call(this)
            },
            show: function(t) {
                void 0 !== t && null !== t && this.element.css({
                    top: t.top,
                    left: t.left
                }), this.element.find(".annotator-save").addClass(this.classes.focus), i.prototype.show.call(this), this.element.find(":input:first").focus(), this._setupDraggables()
            },
            load: function(t, e) {
                this.annotation = t;
                for (var n = 0, i = this.fields.length; n < i; n++) {
                    var r = this.fields[n];
                    r.load(r.element, this.annotation)
                }
                var o = this;
                return new s(function(t, n) {
                    o.dfd = {
                        resolve: t,
                        reject: n
                    }, o.show(e)
                })
            },
            submit: function() {
                for (var t = 0, e = this.fields.length; t < e; t++) {
                    var n = this.fields[t];
                    n.submit(n.element, this.annotation)
                }
                void 0 !== this.dfd && null !== this.dfd && this.dfd.resolve(), this.hide()
            },
            cancel: function() {
                void 0 !== this.dfd && null !== this.dfd && this.dfd.reject("editing cancelled"), this.hide()
            },
            addField: function(t) {
                var e = o.extend({
                        id: "annotator-field-" + u(),
                        type: "input",
                        label: "",
                        load: function() {},
                        submit: function() {}
                    }, t),
                    n = null,
                    i = o('<li class="annotator-item" />');
                return e.element = i[0], "textarea" === e.type ? n = o("<textarea />") : "checkbox" === e.type ? n = o('<input type="checkbox" />') : "input" === e.type ? n = o("<input />") : "select" === e.type && (n = o("<select />")), i.append(n), n.attr({
                    id: e.id,
                    placeholder: e.label
                }), "checkbox" === e.type && (i.addClass("annotator-checkbox"), i.append(o("<label />", {
                    for: e.id,
                    html: e.label
                }))), this.element.find("ul:first").append(i), this.fields.push(e), e.element
            },
            checkOrientation: function() {
                i.prototype.checkOrientation.call(this);
                var t = this.element.find("ul").first(),
                    e = this.element.find(".annotator-controls");
                return this.element.hasClass(this.classes.invert.y) ? e.insertBefore(t) : e.is(":first-child") && e.insertAfter(t), this
            },
            _onFormSubmit: function(t) {
                preventEventDefault(t), this.submit()
            },
            _onSaveClick: function(t) {
                preventEventDefault(t), this.submit()
            },
            _onCancelClick: function(t) {
                preventEventDefault(t), this.cancel()
            },
            _onCancelMouseover: function() {
                this.element.find("." + this.classes.focus).removeClass(this.classes.focus)
            },
            _onTextareaKeydown: function(t) {
                27 === t.which ? this.cancel() : 13 !== t.which || t.shiftKey || this.submit()
            },
            _setupDraggables: function() {
                void 0 !== this._resizer && null !== this._resizer && this._resizer.destroy(), void 0 !== this._mover && null !== this._mover && this._mover.destroy(), this.element.find(".annotator-resize").remove();
                var t;
                (t = this.element.hasClass(this.classes.invert.y) ? this.element.find(".annotator-item:last") : this.element.find(".annotator-item:first")) && o('<span class="annotator-resize"></span>').appendTo(t);
                var e = this.element.find(".annotator-controls")[0],
                    n = this.element.find("textarea:first")[0],
                    i = this.element.find(".annotator-resize")[0],
                    r = this;
                this._resizer = d(n, i, {
                    invertedX: function() {
                        return r.element.hasClass(r.classes.invert.x)
                    },
                    invertedY: function() {
                        return r.element.hasClass(r.classes.invert.y)
                    }
                }), this._mover = f(this.element[0], e)
            }
        });
    h.classes = {
        hide: "annotator-hide",
        focus: "annotator-focus"
    }, h.template = ['<div class="annotator-outer annotator-editor annotator-hide">', '  <form class="annotator-widget">', '    <ul class="annotator-listing"></ul>', '    <div class="annotator-controls">', '     <a href="#cancel" class="annotator-cancel">' + a("Cancel") + "</a>", '      <a href="#save"', '         class="annotator-save annotator-focus">' + a("Save") + "</a>", "    </div>", "  </form>", "</div>"].join("\n"), h.options = {
        defaultFields: !0
    }, e.standalone = function(t) {
        var n = new e.Editor(t);
        return {
            destroy: function() {
                n.destroy()
            },
            beforeAnnotationCreated: function(t) {
                return n.load(t)
            },
            beforeAnnotationUpdated: function(t) {
                return n.load(t)
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        function highlightRange(e, n) {
            void 0 !== n && null !== n || (n = "annotator-hl");
            for (var i = /^\s*$/, r = e.textNodes(), o = [], a = 0, s = r.length; a < s; a++) {
                var l = r[a];
                if (!i.test(l.nodeValue)) {
                    var u = t.document.createElement("span");
                    u.className = n, l.parentNode.replaceChild(u, l), u.appendChild(l), o.push(u)
                }
            }
            return o
        }

        function reanchorRange(t, e) {
            try {
                return i.Range.sniff(t).normalize(e)
            } catch (t) {
                if (!(t instanceof i.Range.RangeError)) throw t
            }
            return null
        }
        var i = n(18),
            r = n(1),
            o = r.$,
            a = r.Promise,
            s = e.Highlighter = function Highlighter(t, e) {
                this.element = t, this.options = o.extend(!0, {}, Highlighter.options, e)
            };
        s.prototype.destroy = function() {
            o(this.element).find("." + this.options.highlightClass).each(function(t, e) {
                o(e).contents().insertBefore(e), o(e).remove()
            })
        }, s.prototype.drawAll = function(t) {
            var e = this;
            return new a(function(n) {
                function loader(t) {
                    void 0 !== t && null !== t || (t = []);
                    for (var r = t.splice(0, e.options.chunkSize), o = 0, a = r.length; o < a; o++) i = i.concat(e.draw(r[o]));
                    t.length > 0 ? setTimeout(function() {
                        loader(t)
                    }, e.options.chunkDelay) : n(i)
                }
                var i = [];
                loader(t.slice())
            })
        }, s.prototype.draw = function(t) {
            for (var e = [], n = 0, i = t.ranges.length; n < i; n++) {
                var r = reanchorRange(t.ranges[n], this.element);
                null !== r && e.push(r)
            }
            void 0 !== t._local && null !== t._local || (t._local = {}), void 0 !== t._local.highlights && null === t._local.highlights || (t._local.highlights = []);
            for (var a = 0, s = e.length; a < s; a++) {
                var l = e[a];
                o.merge(t._local.highlights, highlightRange(l, this.options.highlightClass))
            }
            return o(t._local.highlights).data("annotation", t), void 0 !== t.id && null !== t.id && o(t._local.highlights).attr("data-annotation-id", t.id), t._local.highlights
        }, s.prototype.undraw = function(t) {
            if (void 0 !== t._local && null !== t._local && void 0 !== t._local.highlights && null !== t._local.highlights) {
                for (var e = 0, n = t._local.highlights.length; e < n; e++) {
                    var i = t._local.highlights[e];
                    null !== i.parentNode && o(i).replaceWith(i.childNodes)
                }
                delete t._local.highlights
            }
        }, s.prototype.redraw = function(t) {
            return this.undraw(t), this.draw(t)
        }, s.options = {
            highlightClass: "annotator-hl",
            chunkSize: 10,
            chunkDelay: 10
        }, e.standalone = function(t, n) {
            var i = e.Highlighter(t, n);
            return {
                destroy: function() {
                    i.destroy()
                },
                annotationsLoaded: function(t) {
                    i.drawAll(t)
                },
                annotationCreated: function(t) {
                    i.draw(t)
                },
                annotationDeleted: function(t) {
                    i.undraw(t)
                },
                annotationUpdated: function(t) {
                    i.redraw(t)
                }
            }
        }
    }).call(e, n(2))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        function isAnnotator(t) {
            return 0 !== o(t).parents().addBack().filter("[class^=annotator-]").length
        }

        function TextSelector(t, e) {
            if (this.element = t, this.options = o.extend(!0, {}, TextSelector.options, e), this.onSelection = this.options.onSelection, void 0 !== this.element.ownerDocument && null !== this.element.ownerDocument) {
                var n = this;
                this.document = this.element.ownerDocument, o(this.document.body).on("mouseup." + a, function(t) {
                    n._checkForEndSelection(t)
                })
            } else console.warn("You created an instance of the TextSelector on an element that doesn't have an ownerDocument. This won't work! Please ensure the element is added to the DOM before the plugin is configured:", this.element)
        }
        var i = n(18),
            r = n(1),
            o = r.$,
            a = "annotator-textselector";
        TextSelector.prototype.destroy = function() {
            this.document && o(this.document.body).off("." + a)
        }, TextSelector.prototype.captureDocumentSelection = function() {
            var e, n, r = [],
                o = [],
                a = t.getSelection();
            if (a.isCollapsed) return [];
            for (e = 0; e < a.rangeCount; e++) {
                var s = a.getRangeAt(e),
                    l = new i.Range.BrowserRange(s),
                    u = l.normalize().limit(this.element);
                null === u ? o.push(s) : r.push(u)
            }
            for (a.removeAllRanges(), e = 0, n = o.length; e < n; e++) a.addRange(o[e]);
            for (e = 0, n = r.length; e < n; e++) {
                var c = r[e],
                    d = this.document.createRange();
                d.setStartBefore(c.start), d.setEndAfter(c.end), a.addRange(d)
            }
            return r
        }, TextSelector.prototype._checkForEndSelection = function(t) {
            var e = this,
                n = function() {
                    "function" == typeof e.onSelection && e.onSelection([], t)
                },
                i = this.captureDocumentSelection();
            if (0 === i.length) return void n();
            for (var r = 0, a = i.length; r < a; r++) {
                var s = i[r].commonAncestor;
                if (o(s).hasClass("annotator-hl") && (s = o(s).parents("[class!=annotator-hl]")[0]), isAnnotator(s)) return void n()
            }
            "function" == typeof this.onSelection && this.onSelection(i, t)
        }, TextSelector.options = {
            onSelection: null
        }, e.TextSelector = TextSelector
    }).call(e, n(2))
}, function(t, e, n) {
    "use strict";

    function parseLinks(t, e, n) {
        n = o.extend({}, n, {
            rel: e
        });
        for (var i = [], r = 0, a = t.length; r < a; r++) {
            var s = t[r],
                l = !0;
            for (var u in n)
                if (n.hasOwnProperty(u) && s[u] !== n[u]) {
                    l = !1;
                    break
                }
            l && i.push(s)
        }
        return i
    }
    var i = n(3).Widget,
        r = n(1),
        o = r.$,
        a = r.gettext,
        s = "annotator-viewer",
        l = e.Viewer = i.extend({
            constructor: function(t) {
                i.call(this, t), this.itemTemplate = l.itemTemplate, this.fields = [], this.annotations = [], this.hideTimer = null, this.hideTimerDfd = null, this.hideTimerActivity = null, this.mouseDown = !1, this.render = function(t) {
                    return t.text ? r.escapeHtml(t.text) : "<i>" + a("No comment") + "</i>"
                };
                var e = this;
                if (this.options.defaultFields && this.addField({
                        load: function(t, n) {
                            o(t).html(e.render(n))
                        }
                    }), "function" != typeof this.options.onEdit) throw new TypeError("onEdit callback must be a function");
                if ("function" != typeof this.options.onDelete) throw new TypeError("onDelete callback must be a function");
                if ("function" != typeof this.options.permitEdit) throw new TypeError("permitEdit callback must be a function");
                if ("function" != typeof this.options.permitDelete) throw new TypeError("permitDelete callback must be a function");
                this.options.autoViewHighlights && (this.document = this.options.autoViewHighlights.ownerDocument, o(this.options.autoViewHighlights).on("mouseover." + s, ".annotator-hl", function(t) {
                    t.target === this && e._onHighlightMouseover(t)
                }).on("mouseleave." + s, ".annotator-hl", function() {
                    e._startHideTimer()
                }), o(this.document.body).on("mousedown." + s, function(t) {
                    1 === t.which && (e.mouseDown = !0)
                }).on("mouseup." + s, function(t) {
                    1 === t.which && (e.mouseDown = !1)
                })), this.element.on("click." + s, ".annotator-edit", function(t) {
                    e._onEditClick(t)
                }).on("click." + s, ".annotator-delete", function(t) {
                    e._onDeleteClick(t)
                }).on("mouseenter." + s, function() {
                    e._clearHideTimer()
                }).on("mouseleave." + s, function() {
                    e._startHideTimer()
                })
            },
            destroy: function() {
                this.options.autoViewHighlights && (o(this.options.autoViewHighlights).off("." + s), o(this.document.body).off("." + s)), this.element.off("." + s), i.prototype.destroy.call(this)
            },
            show: function(t) {
                void 0 !== t && null !== t && this.element.css({
                    top: t.top,
                    left: t.left
                });
                var e = this.element.find(".annotator-controls").addClass(this.classes.showControls),
                    n = this;
                setTimeout(function() {
                    e.removeClass(n.classes.showControls)
                }, 500), i.prototype.show.call(this)
            },
            load: function(t, e) {
                this.annotations = t || [];
                for (var n = this.element.find("ul:first").empty(), i = 0, r = this.annotations.length; i < r; i++) {
                    var o = this.annotations[i];
                    this._annotationItem(o).appendTo(n).data("annotation", o)
                }
                this.show(e)
            },
            setRenderer: function(t) {
                this.render = t
            },
            _annotationItem: function(t) {
                var e = o(this.itemTemplate).clone(),
                    n = e.find(".annotator-controls"),
                    i = n.find(".annotator-link"),
                    r = n.find(".annotator-edit"),
                    a = n.find(".annotator-delete"),
                    s = parseLinks(t.links || [], "alternate", {
                        type: "text/html"
                    });
                s.length > 0 && void 0 !== s[0].href && null !== s[0].href ? i.attr("href", s[0].href) : i.remove();
                var l = {};
                this.options.permitEdit(t) ? (l.showEdit = function() {
                    r.removeAttr("disabled")
                }, l.hideEdit = function() {
                    r.attr("disabled", "disabled")
                }) : r.remove(), this.options.permitDelete(t) ? (l.showDelete = function() {
                    a.removeAttr("disabled")
                }, l.hideDelete = function() {
                    a.attr("disabled", "disabled")
                }) : a.remove();
                for (var u = 0, c = this.fields.length; u < c; u++) {
                    var d = this.fields[u],
                        f = o(d.element).clone().appendTo(e)[0];
                    d.load(f, t, l)
                }
                return e
            },
            addField: function(t) {
                var e = o.extend({
                    load: function() {}
                }, t);
                return e.element = o("<div />")[0], this.fields.push(e), this
            },
            _onEditClick: function(t) {
                var e = o(t.target).parents(".annotator-annotation").data("annotation");
                this.hide(), this.options.onEdit(e)
            },
            _onDeleteClick: function(t) {
                if (window.confirm(a("Delete this annotation?"))) {
                    var e = o(t.target).parents(".annotator-annotation").data("annotation");
                    this.hide(), this.options.onDelete(e)
                }
            },
            _onHighlightMouseover: function(t) {
                if (!this.mouseDown) {
                    var e = this;
                    this._startHideTimer(!0).done(function() {
                        var n = o(t.target).parents(".annotator-hl").addBack().map(function(t, e) {
                            return o(e).data("annotation")
                        }).toArray();
                        e.load(n, r.mousePosition(t))
                    })
                }
            },
            _startHideTimer: function(t) {
                if (void 0 !== t && null !== t || (t = !1), this.hideTimer) {
                    if (!1 === t || this.hideTimerActivity === t) return this.hideTimerDfd;
                    this._clearHideTimer()
                }
                var e;
                if (e = t ? this.options.activityDelay : this.options.inactivityDelay, this.hideTimerDfd = o.Deferred(), this.isShown()) {
                    var n = this;
                    this.hideTimer = setTimeout(function() {
                        n.hide(), n.hideTimerDfd.resolve(), n.hideTimer = null
                    }, e), this.hideTimerActivity = Boolean(t)
                } else this.hideTimer = null, this.hideTimerDfd.resolve(), this.hideTimerActivity = null;
                return this.hideTimerDfd.promise()
            },
            _clearHideTimer: function() {
                clearTimeout(this.hideTimer), this.hideTimer = null, this.hideTimerDfd.reject(), this.hideTimerActivity = null
            }
        });
    l.classes = {
        showControls: "annotator-visible"
    }, l.template = ['<div class="annotator-outer annotator-viewer annotator-hide">', '  <ul class="annotator-widget annotator-listing"></ul>', "</div>"].join("\n"), l.itemTemplate = ['<li class="annotator-annotation annotator-item">', '  <span class="annotator-controls">', '    <a href="#"', '       title="' + a("View as webpage") + '"', '       class="annotator-link">' + a("View as webpage") + "</a>", '    <button type="button"', '            title="' + a("Edit") + '"', '            class="annotator-edit">' + a("Edit") + "</button>", '    <button type="button"', '            title="' + a("Delete") + '"', '            class="annotator-delete">' + a("Delete") + "</button>", "  </span>", "</li>"].join("\n"), l.options = {
        defaultFields: !0,
        inactivityDelay: 500,
        activityDelay: 100,
        permitEdit: function() {
            return !1
        },
        permitDelete: function() {
            return !1
        },
        autoViewHighlights: null,
        onEdit: function() {},
        onDelete: function() {}
    }, e.standalone = function(t) {
        var n;
        return void 0 !== t && null !== t || (t = {}), {
            start: function(i) {
                var r = i.registry.getUtility("identityPolicy"),
                    o = i.registry.getUtility("authorizationPolicy");
                void 0 === t.onEdit && (t.onEdit = function(t) {
                    i.annotations.update(t)
                }), void 0 === t.onDelete && (t.onDelete = function(t) {
                    i.annotations.delete(t)
                }), void 0 === t.permitEdit && (t.permitEdit = function(t) {
                    return o.permits("update", t, r.who())
                }), void 0 === t.permitDelete && (t.permitDelete = function(t) {
                    return o.permits("delete", t, r.who())
                }), n = new e.Viewer(t)
            },
            destroy: function() {
                n.destroy()
            }
        }
    }
}, function(t, e, n) {
    "use strict"
}, function(t, e, n) {
    "use strict";
    var i = n(4),
        r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i);
    r.default.bind("g u", function() {
        window.location.href = Routing.generate("homepage")
    }), r.default.bind("g s", function() {
        window.location.href = Routing.generate("starred")
    }), r.default.bind("g r", function() {
        window.location.href = Routing.generate("archive")
    }), r.default.bind("g a", function() {
        window.location.href = Routing.generate("all")
    }), r.default.bind("g t", function() {
        window.location.href = Routing.generate("tag")
    }), r.default.bind("g c", function() {
        window.location.href = Routing.generate("config")
    }), r.default.bind("g i", function() {
        window.location.href = Routing.generate("import")
    }), r.default.bind("g d", function() {
        window.location.href = Routing.generate("developer")
    }), r.default.bind("?", function() {
        window.location.href = Routing.generate("howto")
    }), r.default.bind("g l", function() {
        window.location.href = Routing.generate("fos_user_security_logout")
    })
}, function(t, e, n) {
    ! function(e) {
        t.exports = e()
    }(function() {
        "use strict";
        var t = {
            has: function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            },
            extend: function(t) {
                for (var e = 1; e < arguments.length; ++e) {
                    var n = arguments[e];
                    if (n)
                        for (var i in n) t[i] = n[i]
                }
                return t
            }
        };
        return function(e, n) {
            var i, r = this;
            i = e && t.has(e, "constructor") ? e.constructor : function() {
                return r.apply(this, arguments)
            }, t.extend(i, r, n);
            var o = function() {
                this.constructor = i
            };
            return o.prototype = r.prototype, i.prototype = new o, e && t.extend(i.prototype, e), i.__super__ = r.prototype, i
        }
    })
}, function(t, e, n) {
    (function(e, i) {
        ! function(e, n) {
            t.exports = n()
        }(0, function() {
            "use strict";

            function objectOrFunction(t) {
                return "function" == typeof t || "object" == typeof t && null !== t
            }

            function isFunction(t) {
                return "function" == typeof t
            }

            function setScheduler(t) {
                s = t
            }

            function setAsap(t) {
                l = t
            }

            function useVertxTimer() {
                return function() {
                    a(flush)
                }
            }

            function useSetTimeout() {
                var t = setTimeout;
                return function() {
                    return t(flush, 1)
                }
            }

            function flush() {
                for (var t = 0; t < o; t += 2) {
                    (0, p[t])(p[t + 1]), p[t] = void 0, p[t + 1] = void 0
                }
                o = 0
            }

            function then(t, e) {
                var n = arguments,
                    i = this,
                    r = new this.constructor(noop);
                void 0 === r[v] && makePromise(r);
                var o = i._state;
                return o ? function() {
                    var t = n[o - 1];
                    l(function() {
                        return invokeCallback(o, r, t, i._result)
                    })
                }() : subscribe(i, r, t, e), r
            }

            function resolve(t) {
                var e = this;
                if (t && "object" == typeof t && t.constructor === e) return t;
                var n = new e(noop);
                return _resolve(n, t), n
            }

            function noop() {}

            function selfFulfillment() {
                return new TypeError("You cannot resolve a promise with itself")
            }

            function cannotReturnOwn() {
                return new TypeError("A promises callback cannot return that same promise.")
            }

            function getThen(t) {
                try {
                    return t.then
                } catch (t) {
                    return w.error = t, w
                }
            }

            function tryThen(t, e, n, i) {
                try {
                    t.call(e, n, i)
                } catch (t) {
                    return t
                }
            }

            function handleForeignThenable(t, e, n) {
                l(function(t) {
                    var i = !1,
                        r = tryThen(n, e, function(n) {
                            i || (i = !0, e !== n ? _resolve(t, n) : fulfill(t, n))
                        }, function(e) {
                            i || (i = !0, _reject(t, e))
                        }, "Settle: " + (t._label || " unknown promise"));
                    !i && r && (i = !0, _reject(t, r))
                }, t)
            }

            function handleOwnThenable(t, e) {
                e._state === y ? fulfill(t, e._result) : e._state === b ? _reject(t, e._result) : subscribe(e, void 0, function(e) {
                    return _resolve(t, e)
                }, function(e) {
                    return _reject(t, e)
                })
            }

            function handleMaybeThenable(t, e, n) {
                e.constructor === t.constructor && n === then && e.constructor.resolve === resolve ? handleOwnThenable(t, e) : n === w ? _reject(t, w.error) : void 0 === n ? fulfill(t, e) : isFunction(n) ? handleForeignThenable(t, e, n) : fulfill(t, e)
            }

            function _resolve(t, e) {
                t === e ? _reject(t, selfFulfillment()) : objectOrFunction(e) ? handleMaybeThenable(t, e, getThen(e)) : fulfill(t, e)
            }

            function publishRejection(t) {
                t._onerror && t._onerror(t._result), publish(t)
            }

            function fulfill(t, e) {
                t._state === m && (t._result = e, t._state = y, 0 !== t._subscribers.length && l(publish, t))
            }

            function _reject(t, e) {
                t._state === m && (t._state = b, t._result = e, l(publishRejection, t))
            }

            function subscribe(t, e, n, i) {
                var r = t._subscribers,
                    o = r.length;
                t._onerror = null, r[o] = e, r[o + y] = n, r[o + b] = i, 0 === o && t._state && l(publish, t)
            }

            function publish(t) {
                var e = t._subscribers,
                    n = t._state;
                if (0 !== e.length) {
                    for (var i = void 0, r = void 0, o = t._result, a = 0; a < e.length; a += 3) i = e[a], r = e[a + n], i ? invokeCallback(n, i, r, o) : r(o);
                    t._subscribers.length = 0
                }
            }

            function ErrorObject() {
                this.error = null
            }

            function tryCatch(t, e) {
                try {
                    return t(e)
                } catch (t) {
                    return x.error = t, x
                }
            }

            function invokeCallback(t, e, n, i) {
                var r = isFunction(n),
                    o = void 0,
                    a = void 0,
                    s = void 0,
                    l = void 0;
                if (r) {
                    if (o = tryCatch(n, i), o === x ? (l = !0, a = o.error, o = null) : s = !0, e === o) return void _reject(e, cannotReturnOwn())
                } else o = i, s = !0;
                e._state !== m || (r && s ? _resolve(e, o) : l ? _reject(e, a) : t === y ? fulfill(e, o) : t === b && _reject(e, o))
            }

            function initializePromise(t, e) {
                try {
                    e(function(e) {
                        _resolve(t, e)
                    }, function(e) {
                        _reject(t, e)
                    })
                } catch (e) {
                    _reject(t, e)
                }
            }

            function nextId() {
                return T++
            }

            function makePromise(t) {
                t[v] = T++, t._state = void 0, t._result = void 0, t._subscribers = []
            }

            function Enumerator(t, e) {
                this._instanceConstructor = t, this.promise = new t(noop), this.promise[v] || makePromise(this.promise), r(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? fulfill(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && fulfill(this.promise, this._result))) : _reject(this.promise, validationError())
            }

            function validationError() {
                return new Error("Array Methods must be provided an Array")
            }

            function all(t) {
                return new Enumerator(this, t).promise
            }

            function race(t) {
                var e = this;
                return new e(r(t) ? function(n, i) {
                    for (var r = t.length, o = 0; o < r; o++) e.resolve(t[o]).then(n, i)
                } : function(t, e) {
                    return e(new TypeError("You must pass an array to race."))
                })
            }

            function reject(t) {
                var e = this,
                    n = new e(noop);
                return _reject(n, t), n
            }

            function needsResolver() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }

            function needsNew() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }

            function Promise(t) {
                this[v] = nextId(), this._result = this._state = void 0, this._subscribers = [], noop !== t && ("function" != typeof t && needsResolver(), this instanceof Promise ? initializePromise(this, t) : needsNew())
            }

            function polyfill() {
                var t = void 0;
                if (void 0 !== i) t = i;
                else if ("undefined" != typeof self) t = self;
                else try {
                    t = Function("return this")()
                } catch (t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var e = t.Promise;
                if (e) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(e.resolve())
                    } catch (t) {}
                    if ("[object Promise]" === n && !e.cast) return
                }
                t.Promise = Promise
            }
            var t = void 0;
            t = Array.isArray ? Array.isArray : function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
            var r = t,
                o = 0,
                a = void 0,
                s = void 0,
                l = function(t, e) {
                    p[o] = t, p[o + 1] = e, 2 === (o += 2) && (s ? s(flush) : g())
                },
                u = "undefined" != typeof window ? window : void 0,
                c = u || {},
                d = c.MutationObserver || c.WebKitMutationObserver,
                f = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                p = new Array(1e3),
                g = void 0;
            g = f ? function() {
                return function() {
                    return e.nextTick(flush)
                }
            }() : d ? function() {
                var t = 0,
                    e = new d(flush),
                    n = document.createTextNode("");
                return e.observe(n, {
                        characterData: !0
                    }),
                    function() {
                        n.data = t = ++t % 2
                    }
            }() : h ? function() {
                var t = new MessageChannel;
                return t.port1.onmessage = flush,
                    function() {
                        return t.port2.postMessage(0)
                    }
            }() : void 0 === u ? function() {
                try {
                    var t = n(39);
                    return a = t.runOnLoop || t.runOnContext, useVertxTimer()
                } catch (t) {
                    return useSetTimeout()
                }
            }() : useSetTimeout();
            var v = Math.random().toString(36).substring(16),
                m = void 0,
                y = 1,
                b = 2,
                w = new ErrorObject,
                x = new ErrorObject,
                T = 0;
            return Enumerator.prototype._enumerate = function() {
                for (var t = this.length, e = this._input, n = 0; this._state === m && n < t; n++) this._eachEntry(e[n], n)
            }, Enumerator.prototype._eachEntry = function(t, e) {
                var n = this._instanceConstructor,
                    i = n.resolve;
                if (i === resolve) {
                    var r = getThen(t);
                    if (r === then && t._state !== m) this._settledAt(t._state, e, t._result);
                    else if ("function" != typeof r) this._remaining--, this._result[e] = t;
                    else if (n === Promise) {
                        var o = new n(noop);
                        handleMaybeThenable(o, t, r), this._willSettleAt(o, e)
                    } else this._willSettleAt(new n(function(e) {
                        return e(t)
                    }), e)
                } else this._willSettleAt(i(t), e)
            }, Enumerator.prototype._settledAt = function(t, e, n) {
                var i = this.promise;
                i._state === m && (this._remaining--, t === b ? _reject(i, n) : this._result[e] = n), 0 === this._remaining && fulfill(i, this._result)
            }, Enumerator.prototype._willSettleAt = function(t, e) {
                var n = this;
                subscribe(t, void 0, function(t) {
                    return n._settledAt(y, e, t)
                }, function(t) {
                    return n._settledAt(b, e, t)
                })
            }, Promise.all = all, Promise.race = race, Promise.resolve = resolve, Promise.reject = reject, Promise._setScheduler = setScheduler, Promise._setAsap = setAsap, Promise._asap = l, Promise.prototype = {
                constructor: Promise,
                then: then,
                catch: function(t) {
                    return this.then(null, t)
                }
            }, polyfill(), Promise.polyfill = polyfill, Promise.Promise = Promise, Promise
        })
    }).call(e, n(37), n(2))
}, function(t, e, n) {
    (function() {
        t.exports = {
            xpath: n(20),
            Range: n(38)
        }
    }).call(this)
}, function(t, e, n) {
    (function() {
        var e, i;
        e = n(0), i = {}, i.NodeTypes = {
            ELEMENT_NODE: 1,
            ATTRIBUTE_NODE: 2,
            TEXT_NODE: 3,
            CDATA_SECTION_NODE: 4,
            ENTITY_REFERENCE_NODE: 5,
            ENTITY_NODE: 6,
            PROCESSING_INSTRUCTION_NODE: 7,
            COMMENT_NODE: 8,
            DOCUMENT_NODE: 9,
            DOCUMENT_TYPE_NODE: 10,
            DOCUMENT_FRAGMENT_NODE: 11,
            NOTATION_NODE: 12
        }, i.getFirstTextNodeNotBefore = function(t) {
            var e;
            switch (t.nodeType) {
                case i.NodeTypes.TEXT_NODE:
                    return t;
                case i.NodeTypes.ELEMENT_NODE:
                    if (null != t.firstChild && null != (e = i.getFirstTextNodeNotBefore(t.firstChild))) return e
            }
            return t = t.nextSibling, null != t ? i.getFirstTextNodeNotBefore(t) : null
        }, i.getLastTextNodeUpTo = function(t) {
            var e;
            switch (t.nodeType) {
                case i.NodeTypes.TEXT_NODE:
                    return t;
                case i.NodeTypes.ELEMENT_NODE:
                    if (null != t.lastChild && null != (e = i.getLastTextNodeUpTo(t.lastChild))) return e
            }
            return t = t.previousSibling, null != t ? i.getLastTextNodeUpTo(t) : null
        }, i.getTextNodes = function(t) {
            var e;
            return e = function(t) {
                var n;
                if (t && t.nodeType !== i.NodeTypes.TEXT_NODE) {
                    if (n = [], t.nodeType !== i.NodeTypes.COMMENT_NODE)
                        for (t = t.lastChild; t;) n.push(e(t)), t = t.previousSibling;
                    return n.reverse()
                }
                return t
            }, t.map(function() {
                return i.flatten(e(this))
            })
        }, i.getGlobal = function() {
            return function() {
                return this
            }()
        }, i.contains = function(t, e) {
            var n;
            for (n = e; null != n;) {
                if (n === t) return !0;
                n = n.parentNode
            }
            return !1
        }, i.flatten = function(t) {
            var n;
            return (n = function(t) {
                var i, r, o, a;
                for (r = [], o = 0, a = t.length; o < a; o++) i = t[o], r = r.concat(i && e.isArray(i) ? n(i) : i);
                return r
            })(t)
        }, t.exports = i
    }).call(this)
}, function(t, e, n) {
    (function() {
        var e, i, r, o, a, s, l, u, c, d;
        e = n(0), i = n(19), r = function(t, e, n) {
            var i, r, a, s, l, u, c, d;
            null == e && (e = document), null == n && (n = null);
            try {
                return document.evaluate("." + t, e, n, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
            } catch (n) {
                for (n, console.log("XPath evaluation failed."), console.log("Trying fallback..."), l = t.substring(1).split("/"), a = e, u = 0, c = l.length; u < c; u++) s = l[u], d = s.split("["), r = d[0], i = d[1], i = null != i ? parseInt((null != i ? i.split("]") : void 0)[0]) : 1, a = o(a, r.toLowerCase(), i);
                return a
            }
        }, u = function(t, n) {
            var r;
            return r = t.map(function() {
                var t, r, o, a;
                for (o = "", t = this;
                    (null != t ? t.nodeType : void 0) === i.NodeTypes.ELEMENT_NODE && t !== n;) a = t.tagName.replace(":", "\\:"), r = e(t.parentNode).children(a).index(t) + 1, r = "[" + r + "]", o = "/" + t.tagName.toLowerCase() + r + o, t = t.parentNode;
                return o
            }), r.get()
        }, c = function(t, e) {
            var n, i, r, o;
            return n = function(t) {
                var e, n;
                return e = s(t), n = l(t), e + "[" + n + "]"
            }, o = e, i = function(t) {
                var e;
                for (e = ""; t !== o;) {
                    if (null == t) throw new Error("Called getPathTo on a node which was not a descendant of @rootNode. " + o);
                    e = n(t) + "/" + e, t = t.parentNode
                }
                return e = "/" + e, e = e.replace(/\/$/, "")
            }, r = t.map(function() {
                return i(this)
            }), r.get()
        }, o = function(t, e, n) {
            var i, r, o, a, l;
            if (!t.hasChildNodes()) throw new Error("XPath error: node has no children!");
            for (r = t.childNodes, o = 0, a = 0, l = r.length; a < l; a++)
                if (i = r[a], s(i) === e && (o += 1) === n) return i;
            throw new Error("XPath error: wanted child not found.")
        }, s = function(t) {
            var e;
            switch (e = t.nodeName.toLowerCase()) {
                case "#text":
                    return "text()";
                case "#comment":
                    return "comment()";
                case "#cdata-section":
                    return "cdata-section()";
                default:
                    return e
            }
        }, l = function(t) {
            var e, n;
            for (e = 0, n = t; n;) n.nodeName === t.nodeName && (e += 1), n = n.previousSibling;
            return e
        }, a = function(t, e) {
            var n;
            try {
                n = u(t, e)
            } catch (i) {
                i, console.log("jQuery-based XPath construction failed! Falling back to manual."), n = c(t, e)
            }
            return n
        }, d = function(t, n) {
            var i, o, a, s;
            return null == n && (n = document), e.isXMLDoc(document.documentElement) ? (i = document.createNSResolver(null === document.ownerDocument ? document.documentElement : document.ownerDocument.documentElement), a = r(t, n, i), a || (t = function() {
                var e, n, i, r;
                for (i = t.split("/"), r = [], e = 0, n = i.length; e < n; e++) s = i[e], s && -1 === s.indexOf(":") ? r.push(s.replace(/^([a-z]+)/, "xhtml:$1")) : r.push(s);
                return r
            }().join("/"), o = document.lookupNamespaceURI(null), i = function(t) {
                return "xhtml" === t ? o : document.documentElement.getAttribute("xmlns:" + t)
            }, a = r(t, n, i)), a) : r(t, n)
        }, t.exports = {
            fromNode: a,
            toNode: d
        }
    }).call(this)
}, function(t, e, n) {
    "use strict";

    function _interopRequireDefault(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var i = n(0),
        r = _interopRequireDefault(i),
        o = n(22),
        a = _interopRequireDefault(o);
    n(34), n(33), n(31), n(14), n(15);
    var s = n(30);
    (0, r.default)(document).ready(function() {
        if ((0, r.default)("article").length) {
            var t = new a.default.App;
            t.include(a.default.ui.main, {
                element: document.querySelector("article")
            });
            var e = {
                permits: function() {
                    return !0
                }
            };
            t.registry.registerUtility(e, "authorizationPolicy");
            var n = JSON.parse((0, r.default)("#annotationroutes").html());
            t.include(a.default.storage.http, r.default.extend({}, n, {
                onError: function(t, e) {
                    if (!Object.prototype.hasOwnProperty.call(e, "responseJSON")) return void a.default.notification.banner("An error occurred", "error");
                    r.default.each(e.responseJSON.children, function(t, e) {
                        e.errors && r.default.each(e.errors, function(t, e) {
                            a.default.notification.banner(e, "error")
                        })
                    })
                }
            })), t.start().then(function() {
                t.annotations.load({
                    entry: n.entryId
                })
            }), (0, r.default)(window).scroll(function() {
                var t = (0, r.default)(window).scrollTop(),
                    e = (0, r.default)(document).height(),
                    i = t / e,
                    o = Math.round(100 * i) / 100;
                (0, s.savePercent)(n.entryId, o)
            }), (0, s.retrievePercent)(n.entryId), (0, r.default)(window).resize(function() {
                (0, s.retrievePercent)(n.entryId, !0)
            })
        }
    })
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n(35)(n(32));
        var i = n(23),
            r = n(1);
        e.App = i.App, e.authz = n(5), e.identity = n(6), e.notification = n(7), e.storage = n(8), e.ui = n(25), e.util = r, e.ext = {};
        var o = t.wgxpath;
        void 0 !== o && null !== o && "function" == typeof o.install && o.install();
        var a = t.annotator;
        e.noConflict = function() {
            return t.annotator = a, this
        }
    }).call(e, n(2))
}, function(t, e, n) {
    "use strict";

    function App() {
        this.modules = [], this.registry = new l.Registry, this._started = !1, this.registry.registerUtility(s.defaultNotifier, "notifier"), this.include(o.acl), this.include(a.simple), this.include(u.noop)
    }
    var i = n(16),
        r = n(17).Promise,
        o = n(5),
        a = n(6),
        s = n(7),
        l = n(24),
        u = n(8);
    App.prototype.include = function(t, e) {
        var n = t(e);
        return "function" == typeof n.configure && n.configure(this.registry), this.modules.push(n), this
    }, App.prototype.start = function() {
        if (!this._started) {
            this._started = !0;
            var t = this,
                e = this.registry;
            return this.authz = e.getUtility("authorizationPolicy"), this.ident = e.getUtility("identityPolicy"), this.notify = e.getUtility("notifier"), this.annotations = new u.StorageAdapter(e.getUtility("storage"), function() {
                return t.runHook.apply(t, arguments)
            }), this.runHook("start", [this])
        }
    }, App.prototype.destroy = function() {
        return this.runHook("destroy")
    }, App.prototype.runHook = function(t, e) {
        for (var n = [], i = 0, o = this.modules.length; i < o; i++) {
            var a = this.modules[i];
            "function" == typeof a[t] && n.push(a[t].apply(a, e))
        }
        return r.all(n)
    }, App.extend = i, e.App = App
}, function(t, e, n) {
    "use strict";

    function Registry() {
        this.utilities = {}
    }

    function LookupError(t) {
        this.name = "LookupError", this.message = 'No utility registered for interface "' + t + '".'
    }
    Registry.prototype.registerUtility = function(t, e) {
        this.utilities[e] = t
    }, Registry.prototype.getUtility = function(t) {
        var e = this.queryUtility(t);
        if (null === e) throw new LookupError(t);
        return e
    }, Registry.prototype.queryUtility = function(t) {
        var e = this.utilities[t];
        return void 0 === e || null === e ? null : e
    }, LookupError.prototype = Object.create(Error.prototype), LookupError.prototype.constructor = LookupError, e.LookupError = LookupError, e.Registry = Registry
}, function(t, e, n) {
    e.main = n(27).main, e.adder = n(9), e.editor = n(10), e.filter = n(26), e.highlighter = n(11), e.markdown = n(28), e.tags = n(29), e.textselector = n(12), e.viewer = n(13), e.widget = n(3)
}, function(t, e, n) {
    "use strict";
    var i = n(1),
        r = i.$,
        o = i.gettext,
        a = "annotator-filter",
        s = e.Filter = function Filter(t) {
            this.options = r.extend(!0, {}, Filter.options, t), this.classes = r.extend(!0, {}, Filter.classes), this.element = r(Filter.html.element).appendTo(this.options.appendTo), this.filter = r(Filter.html.filter), this.filters = [], this.current = 0;
            for (var e = 0, n = this.options.filters.length; e < n; e++) {
                var i = this.options.filters[e];
                this.addFilter(i)
            }
            this.updateHighlights();
            var s = ".annotator-filter-property input",
                l = this;
            this.element.on("focus." + a, s, function(t) {
                l._onFilterFocus(t)
            }).on("blur." + a, s, function(t) {
                l._onFilterBlur(t)
            }).on("keyup." + a, s, function(t) {
                l._onFilterKeyup(t)
            }).on("click." + a, ".annotator-filter-previous", function(t) {
                l._onPreviousClick(t)
            }).on("click." + a, ".annotator-filter-next", function(t) {
                l._onNextClick(t)
            }).on("click." + a, ".annotator-filter-clear", function(t) {
                l._onClearClick(t)
            }), this._insertSpacer(), this.options.addAnnotationFilter && this.addFilter({
                label: o("Annotation"),
                property: "text"
            })
        };
    s.prototype.destroy = function() {
        var t = r("html"),
            e = parseInt(t.css("padding-top"), 10) || 0;
        t.css("padding-top", e - this.element.outerHeight()), this.element.off("." + a), this.element.remove()
    }, s.prototype._insertSpacer = function() {
        var t = r("html"),
            e = parseInt(t.css("padding-top"), 10) || 0;
        return t.css("padding-top", e + this.element.outerHeight()), this
    }, s.prototype.addFilter = function(t) {
        for (var e = r.extend({
                label: "",
                property: "",
                isFiltered: this.options.isFiltered
            }, t), n = !1, i = 0, a = this.filters.length; i < a; i++) {
            if (this.filters[i].property === e.property) {
                n = !0;
                break
            }
        }
        return n || (e.id = "annotator-filter-" + e.property, e.annotations = [], e.element = this.filter.clone().appendTo(this.element), e.element.find("label").html(e.label).attr("for", e.id), e.element.find("input").attr({
            id: e.id,
            placeholder: o("Filter by ") + e.label + "…"
        }), e.element.find("button").hide(), e.element.data("filter", e), this.filters.push(e)), this
    }, s.prototype.updateFilter = function(t) {
        t.annotations = [], this.updateHighlights(), this.resetHighlights();
        var e = r.trim(t.element.find("input").val());
        if (e) {
            var n = this.highlights.map(function() {
                return r(this).data("annotation")
            });
            n = r.makeArray(n);
            for (var i = 0, o = n.length; i < o; i++) {
                var a = n[i],
                    s = a[t.property];
                t.isFiltered(e, s) && t.annotations.push(a)
            }
            this.filterHighlights()
        }
    }, s.prototype.updateHighlights = function() {
        this.highlights = r(this.options.filterElement).find(".annotator-hl:visible"), this.filtered = this.highlights.not(this.classes.hl.hide)
    }, s.prototype.filterHighlights = function() {
        var t = r.grep(this.filters, function(t) {
                return Boolean(t.annotations.length)
            }),
            e = [];
        if (t.length > 0 && (e = t[0].annotations), t.length > 1) {
            var n = [];
            r.each(t, function() {
                r.merge(n, this.annotations)
            });
            var i = [];
            e = [], r.each(n, function() {
                -1 === r.inArray(this, i) ? i.push(this) : e.push(this)
            })
        }
        for (var o = this.highlights, a = 0, s = e.length; a < s; a++) o = o.not(e[a]._local.highlights);
        return o.addClass(this.classes.hl.hide), this.filtered = this.highlights.not(this.classes.hl.hide), this
    }, s.prototype.resetHighlights = function() {
        return this.highlights.removeClass(this.classes.hl.hide), this.filtered = this.highlights, this
    }, s.prototype._onFilterFocus = function(t) {
        var e = r(t.target);
        e.parent().addClass(this.classes.active), e.next("button").show()
    }, s.prototype._onFilterBlur = function(t) {
        if (!t.target.value) {
            var e = r(t.target);
            e.parent().removeClass(this.classes.active), e.next("button").hide()
        }
    }, s.prototype._onFilterKeyup = function(t) {
        var e = r(t.target).parent().data("filter");
        e && this.updateFilter(e)
    }, s.prototype._findNextHighlight = function(t) {
        if (0 === this.highlights.length) return this;
        var e = -1,
            n = 0,
            i = "gt";
        t && (e = 0, n = -1, i = "lt");
        var r = this.highlights.not("." + this.classes.hl.hide),
            o = r.filter("." + this.classes.hl.active);
        0 === o.length && (o = r.eq(e));
        var a = o.data("annotation"),
            s = r.index(o[0]),
            l = r.filter(":" + i + "(" + s + ")").not(a._local.highlights).eq(n);
        0 === l.length && (l = r.eq(n)), this._scrollToHighlight(l.data("annotation")._local.highlights)
    }, s.prototype._onNextClick = function() {
        this._findNextHighlight()
    }, s.prototype._onPreviousClick = function() {
        this._findNextHighlight(!0)
    }, s.prototype._scrollToHighlight = function(t) {
        t = r(t), this.highlights.removeClass(this.classes.hl.active), t.addClass(this.classes.hl.active), r("html, body").animate({
            scrollTop: t.offset().top - (this.element.height() + 20)
        }, 150)
    }, s.prototype._onClearClick = function(t) {
        r(t.target).prev("input").val("").keyup().blur()
    }, s.classes = {
        active: "annotator-filter-active",
        hl: {
            hide: "annotator-hl-filtered",
            active: "annotator-hl-active"
        }
    }, s.html = {
        element: ['<div class="annotator-filter">', "  <strong>" + o("Navigate:") + "</strong>", '  <span class="annotator-filter-navigation">', '    <button type="button"', '            class="annotator-filter-previous">' + o("Previous") + "</button>", '    <button type="button"', '            class="annotator-filter-next">' + o("Next") + "</button>", "  </span>", "  <strong>" + o("Filter by:") + "</strong>", "</div>"].join("\n"),
        filter: ['<span class="annotator-filter-property">', "  <label></label>", "  <input/>", '  <button type="button"', '          class="annotator-filter-clear">' + o("Clear") + "</button>", "</span>"].join("\n")
    }, s.options = {
        appendTo: "body",
        filterElement: "body",
        filters: [],
        addAnnotationFilter: !0,
        isFiltered: function(t, e) {
            if (!t || !e) return !1;
            for (var n = t.split(/\s+/), i = 0, r = n.length; i < r; i++)
                if (-1 === e.indexOf(n[i])) return !1;
            return !0
        }
    }, e.standalone = function(t) {
        var n = new e.Filter(t);
        return {
            destroy: function() {
                n.destroy()
            },
            annotationsLoaded: function() {
                n.updateHighlights()
            },
            annotationCreated: function() {
                n.updateHighlights()
            },
            annotationUpdated: function() {
                n.updateHighlights()
            },
            annotationDeleted: function() {
                n.updateHighlights()
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    (function(t) {
        function trim(t) {
            return "function" == typeof String.prototype.trim ? String.prototype.trim.call(t) : t.replace(/^[\s\xA0]+|[\s\xA0]+$/g, "")
        }

        function annotationFactory(t, e) {
            return function(n) {
                for (var i = [], r = [], o = 0, a = n.length; o < a; o++) {
                    var s = n[o];
                    i.push(trim(s.text())), r.push(s.serialize(t, e))
                }
                return {
                    quote: i.join(" / "),
                    ranges: r
                }
            }
        }

        function maxZIndex(t) {
            for (var e = -1, n = 0, r = t.length; n < r; n++) {
                var o = i.$(t[n]);
                if ("static" !== o.css("position")) {
                    var a = parseFloat(o.css("z-index"));
                    a > e && (e = a)
                }
            }
            return e
        }

        function injectDynamicStyle() {
            i.$("#annotator-dynamic-style").remove();
            var e = maxZIndex(i.$(t.document.body).find("*:not(annotator-adder):not(annotator-outer):not(annotator-notice):not(annotator-filter)").get());
            e = Math.max(e, 1e3);
            var n = [".annotator-adder, .annotator-outer, .annotator-notice {", "  z-index: " + (e + 20) + ";", "}", ".annotator-filter {", "  z-index: " + (e + 10) + ";", "}"].join("\n");
            i.$("<style>" + n + "</style>").attr("id", "annotator-dynamic-style").attr("type", "text/css").appendTo("head")
        }

        function removeDynamicStyle() {
            i.$("#annotator-dynamic-style").remove()
        }

        function addPermissionsCheckboxes(t, e, n) {
            function createLoadCallback(t) {
                return function(r, o) {
                    r = i.$(r).show();
                    var a = e.who(),
                        s = r.find("input");
                    void 0 !== a && null !== a || r.hide(), n.permits("admin", o, a) || r.hide(), n.permits(t, o, null) ? s.attr("checked", "checked") : s.removeAttr("checked")
                }
            }

            function createSubmitCallback(t) {
                return function(r, o) {
                    var a = e.who();
                    void 0 !== a && null !== a && (o.permissions || (o.permissions = {}), i.$(r).find("input").is(":checked") ? delete o.permissions[t] : o.permissions[t] = [n.authorizedUserId(a)])
                }
            }
            t.addField({
                type: "checkbox",
                label: u("Allow anyone to <strong>view</strong> this annotation"),
                load: createLoadCallback("read"),
                submit: createSubmitCallback("read")
            }), t.addField({
                type: "checkbox",
                label: u("Allow anyone to <strong>edit</strong> this annotation"),
                load: createLoadCallback("update"),
                submit: createSubmitCallback("update")
            })
        }

        function main(e) {
            function start(t) {
                var c = t.registry.getUtility("identityPolicy"),
                    d = t.registry.getUtility("authorizationPolicy");
                u.adder = new r.Adder({
                    onCreate: function(e) {
                        t.annotations.create(e)
                    }
                }), u.adder.attach(), u.editor = new o.Editor({
                    extensions: e.editorExtensions
                }), u.editor.attach(), addPermissionsCheckboxes(u.editor, c, d), u.highlighter = new a.Highlighter(e.element), u.textselector = new s.TextSelector(e.element, {
                    onSelection: function(t, e) {
                        if (t.length > 0) {
                            var r = n(t);
                            u.interactionPoint = i.mousePosition(e), u.adder.load(r, u.interactionPoint)
                        } else u.adder.hide()
                    }
                }), u.viewer = new l.Viewer({
                    onEdit: function(e) {
                        u.interactionPoint = i.$(u.viewer.element).css(["top", "left"]), t.annotations.update(e)
                    },
                    onDelete: function(e) {
                        t.annotations.delete(e)
                    },
                    permitEdit: function(t) {
                        return d.permits("update", t, c.who())
                    },
                    permitDelete: function(t) {
                        return d.permits("delete", t, c.who())
                    },
                    autoViewHighlights: e.element,
                    extensions: e.viewerExtensions
                }), u.viewer.attach(), injectDynamicStyle()
            }
            void 0 !== e && null !== e || (e = {}), e.element = e.element || t.document.body, e.editorExtensions = e.editorExtensions || [], e.viewerExtensions = e.viewerExtensions || [];
            var n = annotationFactory(e.element, ".annotator-hl"),
                u = {
                    interactionPoint: null
                };
            return {
                start: start,
                destroy: function() {
                    u.adder.destroy(), u.editor.destroy(), u.highlighter.destroy(), u.textselector.destroy(), u.viewer.destroy(), removeDynamicStyle()
                },
                annotationsLoaded: function(t) {
                    u.highlighter.drawAll(t)
                },
                annotationCreated: function(t) {
                    u.highlighter.draw(t)
                },
                annotationDeleted: function(t) {
                    u.highlighter.undraw(t)
                },
                annotationUpdated: function(t) {
                    u.highlighter.redraw(t)
                },
                beforeAnnotationCreated: function(t) {
                    return u.editor.load(t, u.interactionPoint)
                },
                beforeAnnotationUpdated: function(t) {
                    return u.editor.load(t, u.interactionPoint)
                }
            }
        }
        var i = n(1),
            r = n(9),
            o = n(10),
            a = n(11),
            s = n(12),
            l = n(13),
            u = i.gettext;
        e.main = main
    }).call(e, n(2))
}, function(t, e, n) {
    "use strict";
    (function(t) {
        var i = n(1),
            r = i.gettext,
            o = e.render = function(e) {
                var n = i.escapeHtml;
                return t.showdown && "function" == typeof t.showdown.Converter && (n = (new t.showdown.Converter).makeHtml), e.text ? n(e.text) : "<i>" + r("No comment") + "</i>"
            };
        e.viewerExtension = function(e) {
            t.showdown && "function" == typeof t.showdown.Converter || console.warn(r("To use the Markdown plugin, you must include Showdown into the page first.")), e.setRenderer(o)
        }
    }).call(e, n(2))
}, function(t, e, n) {
    "use strict";

    function stringifyTags(t) {
        return t.join(" ")
    }

    function parseTags(t) {
        t = r.trim(t);
        var e = [];
        return t && (e = t.split(/\s+/)), e
    }
    var i = n(1),
        r = i.$,
        o = i.gettext;
    e.viewerExtension = function(t) {
        function updateViewer(t, e) {
            t = r(t), e.tags && r.isArray(e.tags) && e.tags.length ? t.addClass("annotator-tags").html(function() {
                return r.map(e.tags, function(t) {
                    return '<span class="annotator-tag">' + i.escapeHtml(t) + "</span>"
                }).join(" ")
            }) : t.remove()
        }
        t.addField({
            load: updateViewer
        })
    }, e.editorExtension = function(t) {
        function updateField(t, e) {
            var i = "";
            e.tags && (i = stringifyTags(e.tags)), n.val(i)
        }

        function setAnnotationTags(t, e) {
            e.tags = parseTags(n.val())
        }
        var e = null,
            n = null;
        e = t.addField({
            label: o("Add some tags here") + "…",
            load: updateField,
            submit: setAnnotationTags
        }), n = r(e).find(":input")
    }
}, function(t, e, n) {
    "use strict";

    function _interopRequireDefault(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function supportsLocalStorage() {
        try {
            return "localStorage" in window && null !== window.localStorage
        } catch (t) {
            return !1
        }
    }

    function savePercent(t, e) {
        return !!supportsLocalStorage() && (localStorage["wallabag.article." + t + ".percent"] = e, !0)
    }

    function retrievePercent(t, e) {
        if (!supportsLocalStorage()) return !1;
        var n = (0, r.default)(document).height(),
            i = localStorage["wallabag.article." + t + ".percent"],
            o = n * i;
        return e || (0, r.default)("html,body").animate({
            scrollTop: o
        }, "fast"), !0
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.retrievePercent = e.savePercent = void 0;
    var i = n(0),
        r = _interopRequireDefault(i);
    n(15), n(14);
    var o = n(36);
    _interopRequireDefault(o);
    e.savePercent = savePercent, e.retrievePercent = retrievePercent
}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {
    var n = {};
    t.exports = function(t, e) {
        if (!n[t]) {
            n[t] = !0;
            var i = document.createElement("style");
            i.setAttribute("type", "text/css"), "textContent" in i ? i.textContent = t : i.styleSheet.cssText = t;
            var r = document.getElementsByTagName("head")[0];
            e && e.prepend ? r.insertBefore(i, r.childNodes[0]) : r.appendChild(i)
        }
    }
}, function(t, e, n) {
    ! function(e, n) {
        t.exports = n()
    }(0, function() {
        return function(t) {
            function e(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function(t, e, n) {
            "use strict";
            t.exports = n(3)
        }, function(t, e) {
            "use strict";
            ! function() {
                Object.assign || Object.defineProperty(Object, "assign", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function(t) {
                        if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
                        for (var e = Object(t), n = 1; n < arguments.length; n++) {
                            var i = arguments[n];
                            if (void 0 !== i && null !== i) {
                                i = Object(i);
                                for (var r = Object.keys(Object(i)), o = 0, a = r.length; o < a; o++) {
                                    var s = r[o],
                                        l = Object.getOwnPropertyDescriptor(i, s);
                                    void 0 !== l && l.enumerable && (e[s] = i[s])
                                }
                            }
                        }
                        return e
                    }
                })
            }()
        }, function(t, e) {
            "use strict";
            t.exports = function() {
                var t = {};
                return t.utf16to8 = function(t) {
                    var e, n, i, r;
                    for (e = "", i = t.length, n = 0; n < i; n++) r = t.charCodeAt(n), r >= 1 && r <= 127 ? e += t.charAt(n) : r > 2047 ? (e += String.fromCharCode(224 | r >> 12 & 15), e += String.fromCharCode(128 | r >> 6 & 63), e += String.fromCharCode(128 | r >> 0 & 63)) : (e += String.fromCharCode(192 | r >> 6 & 31), e += String.fromCharCode(128 | r >> 0 & 63));
                    return e
                }, t.utf8to16 = function(t) {
                    var e, n, i, r, o, a;
                    for (e = "", i = t.length, n = 0; n < i;) switch ((r = t.charCodeAt(n++)) >> 4) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                            e += t.charAt(n - 1);
                            break;
                        case 12:
                        case 13:
                            o = t.charCodeAt(n++), e += String.fromCharCode((31 & r) << 6 | 63 & o);
                            break;
                        case 14:
                            o = t.charCodeAt(n++), a = t.charCodeAt(n++), e += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | (63 & a) << 0)
                    }
                    return e
                }, t
            }()
        }, function(e, n, i) {
            "use strict";
            i(1), i(4);
            var r = i(2),
                o = function() {
                    function t(t) {
                        var e = new QRCode(t.typeNumber, t.correctLevel);
                        e.addData(t.text), e.make();
                        var n = document.createElement("canvas");
                        n.width = t.width, n.height = t.height;
                        var i = n.getContext("2d"),
                            r = (t.width - 2 * t.padding) / e.getModuleCount(),
                            o = (t.height - 2 * t.padding) / e.getModuleCount();
                        if (t.reverse) {
                            var a = "rgba(0, 0, 0, 0)";
                            i.fillStyle = a, t.foreground = a
                        } else i.fillStyle = t.background;
                        i.fillRect(0, 0, n.width, n.height);
                        for (var s = 0; s < e.getModuleCount(); s++)
                            for (var l = 0; l < e.getModuleCount(); l++) {
                                i.fillStyle = e.isDark(s, l) ? t.foreground : t.background;
                                var u = Math.ceil((l + 1) * r) - Math.floor(l * r),
                                    c = Math.ceil((s + 1) * r) - Math.floor(s * r);
                                i.fillRect(Math.round(l * r) + t.padding, Math.round(s * o) + t.padding, u, c)
                            }
                        return n
                    }
                    var e = {};
                    return e.getQrBase64 = function(e, n) {
                        "string" != typeof e && (e = ""), "string" == typeof n ? n = {
                            text: n
                        } : "object" != typeof n && (n = {}), n = Object.assign({
                            padding: 10,
                            width: 256,
                            height: 256,
                            typeNumber: -1,
                            correctLevel: QRErrorCorrectLevel.H,
                            reverse: !1,
                            background: "#ffffff",
                            foreground: "#000000"
                        }, n);
                        try {
                            n.text = r.utf16to8(e)
                        } catch (t) {
                            n.text = "" + t
                        }
                        return t(n).toDataURL()
                    }, e.QRErrorCorrectLevel = QRErrorCorrectLevel, e
                }();
            !window.jrQrcode && (window.jrQrcode = o), e.exports = o
        }, function(t, e) {
            function r(t) {
                this.mode = s.MODE_8BIT_BYTE, this.data = t
            }

            function o(t, e) {
                this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array
            }

            function n(t, e) {
                if (void 0 == t.length) throw new Error(t.length + "/" + e);
                for (var n = 0; n < t.length && 0 == t[n];) n++;
                this.num = new Array(t.length - n + e);
                for (var i = 0; i < t.length - n; i++) this.num[i] = t[i + n]
            }

            function i(t, e) {
                this.totalCount = t, this.dataCount = e
            }

            function a() {
                this.buffer = new Array, this.length = 0
            }
            r.prototype = {
                getLength: function(t) {
                    return this.data.length
                },
                write: function(t) {
                    for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
                }
            }, o.prototype = {
                addData: function(t) {
                    var e = new r(t);
                    this.dataList.push(e), this.dataCache = null
                },
                isDark: function(t, e) {
                    if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error(t + "," + e);
                    return this.modules[t][e]
                },
                getModuleCount: function() {
                    return this.moduleCount
                },
                make: function() {
                    if (this.typeNumber < 1) {
                        var t = 1;
                        for (t = 1; t < 40; t++) {
                            for (var e = i.getRSBlocks(t, this.errorCorrectLevel), n = new a, r = 0, o = 0; o < e.length; o++) r += e[o].dataCount;
                            for (var o = 0; o < this.dataList.length; o++) {
                                var s = this.dataList[o];
                                n.put(s.mode, 4), n.put(s.getLength(), c.getLengthInBits(s.mode, t)), s.write(n)
                            }
                            if (n.getLengthInBits() <= 8 * r) break
                        }
                        this.typeNumber = t
                    }
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function(t, e) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                    for (var n = 0; n < this.moduleCount; n++) {
                        this.modules[n] = new Array(this.moduleCount);
                        for (var i = 0; i < this.moduleCount; i++) this.modules[n][i] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
                },
                setupPositionProbePattern: function(t, e) {
                    for (var n = -1; n <= 7; n++)
                        if (!(t + n <= -1 || this.moduleCount <= t + n))
                            for (var i = -1; i <= 7; i++) e + i <= -1 || this.moduleCount <= e + i || (this.modules[t + n][e + i] = 0 <= n && n <= 6 && (0 == i || 6 == i) || 0 <= i && i <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= i && i <= 4)
                },
                getBestMaskPattern: function() {
                    for (var t = 0, e = 0, n = 0; n < 8; n++) {
                        this.makeImpl(!0, n);
                        var i = c.getLostPoint(this);
                        (0 == n || t > i) && (t = i, e = n)
                    }
                    return e
                },
                createMovieClip: function(t, e, n) {
                    var i = t.createEmptyMovieClip(e, n);
                    this.make();
                    for (var r = 0; r < this.modules.length; r++)
                        for (var o = 1 * r, a = 0; a < this.modules[r].length; a++) {
                            var s = 1 * a,
                                l = this.modules[r][a];
                            l && (i.beginFill(0, 100), i.moveTo(s, o), i.lineTo(s + 1, o), i.lineTo(s + 1, o + 1), i.lineTo(s, o + 1), i.endFill())
                        }
                    return i
                },
                setupTimingPattern: function() {
                    for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
                    for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
                },
                setupPositionAdjustPattern: function() {
                    for (var t = c.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                        for (var n = 0; n < t.length; n++) {
                            var i = t[e],
                                r = t[n];
                            if (null == this.modules[i][r])
                                for (var o = -2; o <= 2; o++)
                                    for (var a = -2; a <= 2; a++) this.modules[i + o][r + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a
                        }
                },
                setupTypeNumber: function(t) {
                    for (var e = c.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                        var i = !t && 1 == (e >> n & 1);
                        this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = i
                    }
                    for (var n = 0; n < 18; n++) {
                        var i = !t && 1 == (e >> n & 1);
                        this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = i
                    }
                },
                setupTypeInfo: function(t, e) {
                    for (var n = this.errorCorrectLevel << 3 | e, i = c.getBCHTypeInfo(n), r = 0; r < 15; r++) {
                        var o = !t && 1 == (i >> r & 1);
                        r < 6 ? this.modules[r][8] = o : r < 8 ? this.modules[r + 1][8] = o : this.modules[this.moduleCount - 15 + r][8] = o
                    }
                    for (var r = 0; r < 15; r++) {
                        var o = !t && 1 == (i >> r & 1);
                        r < 8 ? this.modules[8][this.moduleCount - r - 1] = o : r < 9 ? this.modules[8][15 - r - 1 + 1] = o : this.modules[8][15 - r - 1] = o
                    }
                    this.modules[this.moduleCount - 8][8] = !t
                },
                mapData: function(t, e) {
                    for (var n = -1, i = this.moduleCount - 1, r = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2)
                        for (6 == a && a--;;) {
                            for (var s = 0; s < 2; s++)
                                if (null == this.modules[i][a - s]) {
                                    var l = !1;
                                    o < t.length && (l = 1 == (t[o] >>> r & 1));
                                    var u = c.getMask(e, i, a - s);
                                    u && (l = !l), this.modules[i][a - s] = l, -1 == --r && (o++, r = 7)
                                }
                            if ((i += n) < 0 || this.moduleCount <= i) {
                                i -= n, n = -n;
                                break
                            }
                        }
                }
            }, o.PAD0 = 236, o.PAD1 = 17, o.createData = function(t, e, n) {
                for (var r = i.getRSBlocks(t, e), s = new a, l = 0; l < n.length; l++) {
                    var u = n[l];
                    s.put(u.mode, 4), s.put(u.getLength(), c.getLengthInBits(u.mode, t)), u.write(s)
                }
                for (var d = 0, l = 0; l < r.length; l++) d += r[l].dataCount;
                if (s.getLengthInBits() > 8 * d) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * d + ")");
                for (s.getLengthInBits() + 4 <= 8 * d && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
                for (; !(s.getLengthInBits() >= 8 * d) && (s.put(o.PAD0, 8), !(s.getLengthInBits() >= 8 * d));) s.put(o.PAD1, 8);
                return o.createBytes(s, r)
            }, o.createBytes = function(t, e) {
                for (var i = 0, r = 0, o = 0, a = new Array(e.length), s = new Array(e.length), l = 0; l < e.length; l++) {
                    var u = e[l].dataCount,
                        d = e[l].totalCount - u;
                    r = Math.max(r, u), o = Math.max(o, d), a[l] = new Array(u);
                    for (var f = 0; f < a[l].length; f++) a[l][f] = 255 & t.buffer[f + i];
                    i += u;
                    var h = c.getErrorCorrectPolynomial(d),
                        p = new n(a[l], h.getLength() - 1),
                        g = p.mod(h);
                    s[l] = new Array(h.getLength() - 1);
                    for (var f = 0; f < s[l].length; f++) {
                        var v = f + g.getLength() - s[l].length;
                        s[l][f] = v >= 0 ? g.get(v) : 0
                    }
                }
                for (var m = 0, f = 0; f < e.length; f++) m += e[f].totalCount;
                for (var y = new Array(m), b = 0, f = 0; f < r; f++)
                    for (var l = 0; l < e.length; l++) f < a[l].length && (y[b++] = a[l][f]);
                for (var f = 0; f < o; f++)
                    for (var l = 0; l < e.length; l++) f < s[l].length && (y[b++] = s[l][f]);
                return y
            };
            for (var s = {
                    MODE_NUMBER: 1,
                    MODE_ALPHA_NUM: 2,
                    MODE_8BIT_BYTE: 4,
                    MODE_KANJI: 8
                }, l = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                }, u = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                }, c = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(t) {
                        for (var e = t << 10; c.getBCHDigit(e) - c.getBCHDigit(c.G15) >= 0;) e ^= c.G15 << c.getBCHDigit(e) - c.getBCHDigit(c.G15);
                        return (t << 10 | e) ^ c.G15_MASK
                    },
                    getBCHTypeNumber: function(t) {
                        for (var e = t << 12; c.getBCHDigit(e) - c.getBCHDigit(c.G18) >= 0;) e ^= c.G18 << c.getBCHDigit(e) - c.getBCHDigit(c.G18);
                        return t << 12 | e
                    },
                    getBCHDigit: function(t) {
                        for (var e = 0; 0 != t;) e++, t >>>= 1;
                        return e
                    },
                    getPatternPosition: function(t) {
                        return c.PATTERN_POSITION_TABLE[t - 1]
                    },
                    getMask: function(t, e, n) {
                        switch (t) {
                            case u.PATTERN000:
                                return (e + n) % 2 == 0;
                            case u.PATTERN001:
                                return e % 2 == 0;
                            case u.PATTERN010:
                                return n % 3 == 0;
                            case u.PATTERN011:
                                return (e + n) % 3 == 0;
                            case u.PATTERN100:
                                return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
                            case u.PATTERN101:
                                return e * n % 2 + e * n % 3 == 0;
                            case u.PATTERN110:
                                return (e * n % 2 + e * n % 3) % 2 == 0;
                            case u.PATTERN111:
                                return (e * n % 3 + (e + n) % 2) % 2 == 0;
                            default:
                                throw new Error("bad maskPattern:" + t)
                        }
                    },
                    getErrorCorrectPolynomial: function(t) {
                        for (var e = new n([1], 0), i = 0; i < t; i++) e = e.multiply(new n([1, d.gexp(i)], 0));
                        return e
                    },
                    getLengthInBits: function(t, e) {
                        if (1 <= e && e < 10) switch (t) {
                            case s.MODE_NUMBER:
                                return 10;
                            case s.MODE_ALPHA_NUM:
                                return 9;
                            case s.MODE_8BIT_BYTE:
                            case s.MODE_KANJI:
                                return 8;
                            default:
                                throw new Error("mode:" + t)
                        } else if (e < 27) switch (t) {
                            case s.MODE_NUMBER:
                                return 12;
                            case s.MODE_ALPHA_NUM:
                                return 11;
                            case s.MODE_8BIT_BYTE:
                                return 16;
                            case s.MODE_KANJI:
                                return 10;
                            default:
                                throw new Error("mode:" + t)
                        } else {
                            if (!(e < 41)) throw new Error("type:" + e);
                            switch (t) {
                                case s.MODE_NUMBER:
                                    return 14;
                                case s.MODE_ALPHA_NUM:
                                    return 13;
                                case s.MODE_8BIT_BYTE:
                                    return 16;
                                case s.MODE_KANJI:
                                    return 12;
                                default:
                                    throw new Error("mode:" + t)
                            }
                        }
                    },
                    getLostPoint: function(t) {
                        for (var e = t.getModuleCount(), n = 0, i = 0; i < e; i++)
                            for (var r = 0; r < e; r++) {
                                for (var o = 0, a = t.isDark(i, r), s = -1; s <= 1; s++)
                                    if (!(i + s < 0 || e <= i + s))
                                        for (var l = -1; l <= 1; l++) r + l < 0 || e <= r + l || 0 == s && 0 == l || a == t.isDark(i + s, r + l) && o++;
                                o > 5 && (n += 3 + o - 5)
                            }
                        for (var i = 0; i < e - 1; i++)
                            for (var r = 0; r < e - 1; r++) {
                                var u = 0;
                                t.isDark(i, r) && u++, t.isDark(i + 1, r) && u++, t.isDark(i, r + 1) && u++, t.isDark(i + 1, r + 1) && u++, 0 != u && 4 != u || (n += 3)
                            }
                        for (var i = 0; i < e; i++)
                            for (var r = 0; r < e - 6; r++) t.isDark(i, r) && !t.isDark(i, r + 1) && t.isDark(i, r + 2) && t.isDark(i, r + 3) && t.isDark(i, r + 4) && !t.isDark(i, r + 5) && t.isDark(i, r + 6) && (n += 40);
                        for (var r = 0; r < e; r++)
                            for (var i = 0; i < e - 6; i++) t.isDark(i, r) && !t.isDark(i + 1, r) && t.isDark(i + 2, r) && t.isDark(i + 3, r) && t.isDark(i + 4, r) && !t.isDark(i + 5, r) && t.isDark(i + 6, r) && (n += 40);
                        for (var c = 0, r = 0; r < e; r++)
                            for (var i = 0; i < e; i++) t.isDark(i, r) && c++;
                        return n += Math.abs(100 * c / e / e - 50) / 5 * 10
                    }
                }, d = {
                    glog: function(t) {
                        if (t < 1) throw new Error("glog(" + t + ")");
                        return d.LOG_TABLE[t]
                    },
                    gexp: function(t) {
                        for (; t < 0;) t += 255;
                        for (; t >= 256;) t -= 255;
                        return d.EXP_TABLE[t]
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                }, f = 0; f < 8; f++) d.EXP_TABLE[f] = 1 << f;
            for (var f = 8; f < 256; f++) d.EXP_TABLE[f] = d.EXP_TABLE[f - 4] ^ d.EXP_TABLE[f - 5] ^ d.EXP_TABLE[f - 6] ^ d.EXP_TABLE[f - 8];
            for (var f = 0; f < 255; f++) d.LOG_TABLE[d.EXP_TABLE[f]] = f;
            n.prototype = {
                get: function(t) {
                    return this.num[t]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(t) {
                    for (var e = new Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++)
                        for (var r = 0; r < t.getLength(); r++) e[i + r] ^= d.gexp(d.glog(this.get(i)) + d.glog(t.get(r)));
                    return new n(e, 0)
                },
                mod: function(t) {
                    if (this.getLength() - t.getLength() < 0) return this;
                    for (var e = d.glog(this.get(0)) - d.glog(t.get(0)), i = new Array(this.getLength()), r = 0; r < this.getLength(); r++) i[r] = this.get(r);
                    for (var r = 0; r < t.getLength(); r++) i[r] ^= d.gexp(d.glog(t.get(r)) + e);
                    return new n(i, 0).mod(t)
                }
            }, i.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], i.getRSBlocks = function(t, e) {
                var n = i.getRsBlockTable(t, e);
                if (void 0 == n) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
                for (var r = n.length / 3, o = new Array, a = 0; a < r; a++)
                    for (var s = n[3 * a + 0], l = n[3 * a + 1], u = n[3 * a + 2], c = 0; c < s; c++) o.push(new i(l, u));
                return o
            }, i.getRsBlockTable = function(t, e) {
                switch (e) {
                    case l.L:
                        return i.RS_BLOCK_TABLE[4 * (t - 1) + 0];
                    case l.M:
                        return i.RS_BLOCK_TABLE[4 * (t - 1) + 1];
                    case l.Q:
                        return i.RS_BLOCK_TABLE[4 * (t - 1) + 2];
                    case l.H:
                        return i.RS_BLOCK_TABLE[4 * (t - 1) + 3];
                    default:
                        return
                }
            }, a.prototype = {
                get: function(t) {
                    var e = Math.floor(t / 8);
                    return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
                },
                put: function(t, e) {
                    for (var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    var e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            }, window.QRCode = o, window.QRErrorCorrectLevel = l;
            try {
                t.exports = {
                    QRCode: o,
                    QRErrorCorrectLevel: l
                }
            } catch (t) {}
        }])
    })
}, function(t, e) {
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined")
    }

    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined")
    }

    function runTimeout(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === defaultSetTimout || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }

    function runClearTimeout(t) {
        if (i === clearTimeout) return clearTimeout(t);
        if ((i === defaultClearTimeout || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
        try {
            return i(t)
        } catch (e) {
            try {
                return i.call(null, t)
            } catch (e) {
                return i.call(this, t)
            }
        }
    }

    function cleanUpNextTick() {
        s && o && (s = !1, o.length ? a = o.concat(a) : l = -1, a.length && drainQueue())
    }

    function drainQueue() {
        if (!s) {
            var t = runTimeout(cleanUpNextTick);
            s = !0;
            for (var e = a.length; e;) {
                for (o = a, a = []; ++l < e;) o && o[l].run();
                l = -1, e = a.length
            }
            o = null, s = !1, runClearTimeout(t)
        }
    }

    function Item(t, e) {
        this.fun = t, this.array = e
    }

    function noop() {}
    var n, i, r = t.exports = {};
    ! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
        } catch (t) {
            n = defaultSetTimout
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
        } catch (t) {
            i = defaultClearTimeout
        }
    }();
    var o, a = [],
        s = !1,
        l = -1;
    r.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        a.push(new Item(t, e)), 1 !== a.length || s || runTimeout(drainQueue)
    }, Item.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = noop, r.addListener = noop, r.once = noop, r.off = noop, r.removeListener = noop, r.removeAllListeners = noop, r.emit = noop, r.prependListener = noop, r.prependOnceListener = noop, r.listeners = function(t) {
        return []
    }, r.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, r.cwd = function() {
        return "/"
    }, r.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, r.umask = function() {
        return 0
    }
}, function(t, e, n) {
    (function() {
        var e, i, r, o, a = {}.hasOwnProperty,
            s = function(t, e) {
                function ctor() {
                    this.constructor = t
                }
                for (var n in e) a.call(e, n) && (t[n] = e[n]);
                return ctor.prototype = e.prototype, t.prototype = new ctor, t.__super__ = e.prototype, t
            };
        o = n(20), r = n(19), e = n(0), i = {}, i.sniff = function(t) {
            return null != t.commonAncestorContainer ? new i.BrowserRange(t) : "string" == typeof t.start ? new i.SerializedRange(t) : t.start && "object" == typeof t.start ? new i.NormalizedRange(t) : (console.error("Could not sniff range type"), !1)
        }, i.RangeError = function(t) {
            function RangeError(t, e, n) {
                this.type = t, this.message = e, this.parent = null != n ? n : null, RangeError.__super__.constructor.call(this, this.message)
            }
            return s(RangeError, t), RangeError
        }(Error), i.BrowserRange = function() {
            function BrowserRange(t) {
                this.commonAncestorContainer = t.commonAncestorContainer, this.startContainer = t.startContainer, this.startOffset = t.startOffset, this.endContainer = t.endContainer, this.endOffset = t.endOffset
            }
            return BrowserRange.prototype.normalize = function(t) {
                var e, n;
                if (this.tainted) return console.error("You may only call normalize() once on a BrowserRange!"), !1;
                for (this.tainted = !0, n = {}, this._normalizeStart(n), this._normalizeEnd(n), e = {}, n.startOffset > 0 ? n.start.nodeValue.length > n.startOffset ? e.start = n.start.splitText(n.startOffset) : e.start = n.start.nextSibling : e.start = n.start, n.start === n.end ? (e.start.nodeValue.length > n.endOffset - n.startOffset && e.start.splitText(n.endOffset - n.startOffset), e.end = e.start) : (n.end.nodeValue.length > n.endOffset && n.end.splitText(n.endOffset), e.end = n.end), e.commonAncestor = this.commonAncestorContainer; e.commonAncestor.nodeType !== r.NodeTypes.ELEMENT_NODE;) e.commonAncestor = e.commonAncestor.parentNode;
                return new i.NormalizedRange(e)
            }, BrowserRange.prototype._normalizeStart = function(t) {
                return this.startContainer.nodeType === r.NodeTypes.ELEMENT_NODE ? (t.start = r.getFirstTextNodeNotBefore(this.startContainer.childNodes[this.startOffset]), t.startOffset = 0) : (t.start = this.startContainer, t.startOffset = this.startOffset)
            }, BrowserRange.prototype._normalizeEnd = function(t) {
                var e, n;
                if (this.endContainer.nodeType !== r.NodeTypes.ELEMENT_NODE) return t.end = this.endContainer, t.endOffset = this.endOffset;
                if (null != (n = this.endContainer.childNodes[this.endOffset])) {
                    for (e = n; null != e && e.nodeType !== r.NodeTypes.TEXT_NODE;) e = e.firstChild;
                    null != e && (t.end = e, t.endOffset = 0)
                }
                return null == t.end ? (n = this.endOffset ? this.endContainer.childNodes[this.endOffset - 1] : this.endContainer.previousSibling, t.end = r.getLastTextNodeUpTo(n), t.endOffset = t.end.nodeValue.length) : void 0
            }, BrowserRange.prototype.serialize = function(t, e) {
                return this.normalize(t).serialize(t, e)
            }, BrowserRange
        }(), i.NormalizedRange = function() {
            function NormalizedRange(t) {
                this.commonAncestor = t.commonAncestor, this.start = t.start, this.end = t.end
            }
            return NormalizedRange.prototype.normalize = function(t) {
                return this
            }, NormalizedRange.prototype.limit = function(t) {
                var n, i, r, o, a, s;
                if (n = e.grep(this.textNodes(), function(n) {
                        return n.parentNode === t || e.contains(t, n.parentNode)
                    }), !n.length) return null;
                for (this.start = n[0], this.end = n[n.length - 1], r = e(this.start).parents(), s = e(this.end).parents(), o = 0, a = s.length; o < a; o++)
                    if (i = s[o], -1 !== r.index(i)) {
                        this.commonAncestor = i;
                        break
                    }
                return this
            }, NormalizedRange.prototype.serialize = function(t, n) {
                var a, s, l;
                return s = function(i, a) {
                    var s, l, u, c, d, f, h, p;
                    for (c = n ? e(i).parents(":not(" + n + ")").eq(0) : e(i).parent(), d = o.fromNode(c, t)[0], f = r.getTextNodes(c), l = f.slice(0, f.index(i)), u = 0, h = 0, p = l.length; h < p; h++) s = l[h], u += s.nodeValue.length;
                    return a ? [d, u + i.nodeValue.length] : [d, u]
                }, l = s(this.start), a = s(this.end, !0), new i.SerializedRange({
                    start: l[0],
                    end: a[0],
                    startOffset: l[1],
                    endOffset: a[1]
                })
            }, NormalizedRange.prototype.text = function() {
                var t;
                return function() {
                    var e, n, i, r;
                    for (i = this.textNodes(), r = [], e = 0, n = i.length; e < n; e++) t = i[e], r.push(t.nodeValue);
                    return r
                }.call(this).join("")
            }, NormalizedRange.prototype.textNodes = function() {
                var t, n, i, o;
                return i = r.getTextNodes(e(this.commonAncestor)), o = [i.index(this.start), i.index(this.end)], n = o[0], t = o[1], e.makeArray(i.slice(n, +t + 1 || 9e9))
            }, NormalizedRange
        }(), i.SerializedRange = function() {
            function SerializedRange(t) {
                this.start = t.start, this.startOffset = t.startOffset, this.end = t.end, this.endOffset = t.endOffset
            }
            return SerializedRange.prototype.normalize = function(t) {
                var n, a, s, l, u, c, d, f, h, p, g, v, m, y;
                for (c = {}, m = ["start", "end"], h = 0, g = m.length; h < g; h++) {
                    u = m[h];
                    try {
                        l = o.toNode(this[u], t)
                    } catch (t) {
                        throw a = t, new i.RangeError(u, "Error while finding " + u + " node: " + this[u] + ": " + a, a)
                    }
                    if (!l) throw new i.RangeError(u, "Couldn't find " + u + " node: " + this[u]);
                    for (s = 0, d = this[u + "Offset"], "end" === u && (d -= 1), y = r.getTextNodes(e(l)), p = 0, v = y.length; p < v; p++) {
                        if (f = y[p], s + f.nodeValue.length > d) {
                            c[u + "Container"] = f, c[u + "Offset"] = this[u + "Offset"] - s;
                            break
                        }
                        s += f.nodeValue.length
                    }
                    if (null == c[u + "Offset"]) throw new i.RangeError(u + "offset", "Couldn't find offset " + this[u + "Offset"] + " in element " + this[u])
                }
                return n = null != document.compareDocumentPosition ? function(t, e) {
                    return t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY
                } : function(t, e) {
                    return t.contains(e)
                }, e(c.startContainer).parents().each(function() {
                    var t;
                    if (t = c.endContainer.nodeType === r.NodeTypes.TEXT_NODE ? c.endContainer.parentNode : c.endContainer, n(this, t)) return c.commonAncestorContainer = this, !1
                }), new i.BrowserRange(c).normalize(t)
            }, SerializedRange.prototype.serialize = function(t, e) {
                return this.normalize(t).serialize(t, e)
            }, SerializedRange.prototype.toObject = function() {
                return {
                    start: this.start,
                    startOffset: this.startOffset,
                    end: this.end,
                    endOffset: this.endOffset
                }
            }, SerializedRange
        }(), t.exports = i
    }).call(this)
}, function(t, e) {}, , , , , function(t, e, n) {
    "use strict";

    function _interopRequireDefault(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var i = n(4),
        r = _interopRequireDefault(i),
        o = n(0),
        a = _interopRequireDefault(o);
    (0, a.default)(document).ready(function() {
        (0, a.default)("#article").length > 0 && (r.default.bind("o", function() {
            (0, a.default)("ul.side-nav a.original i")[0].click()
        }), r.default.bind("f", function() {
            (0, a.default)("ul.side-nav a.favorite i")[0].click()
        }), r.default.bind("a", function() {
            (0, a.default)("ul.side-nav a.markasread i")[0].click()
        }), r.default.bind("del", function() {
            (0, a.default)("ul.side-nav a.delete i")[0].click()
        }))
    })
}, function(t, e, n) {
    "use strict";

    function _interopRequireDefault(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function toggleFocus(t) {
        t && (0, a.default)(t).toggleClass("z-depth-4")
    }
    var i = n(4),
        r = _interopRequireDefault(i),
        o = n(0),
        a = _interopRequireDefault(o);
    (0, a.default)(document).ready(function() {
        var t = (0, a.default)("#content").find(".card"),
            e = t.length,
            n = 0;
        "#prev" === window.location.hash && (n = e - 1);
        var i = t[n],
            o = (0, a.default)(".pagination");
        (0, a.default)("#content > div.quickstart").length > 0 || (0, a.default)("#username").length > 0 || (0, a.default)("#fos_user_registration_form_username").length > 0 || (0, a.default)("#username").length > 0 || (0, a.default)("#fos_user_registration_form_username").length > 0 || (toggleFocus(i), r.default.bind("g n", function() {
            return (0, a.default)("#nav-btn-add").trigger("click"), !1
        }), r.default.bind("s", function() {
            return (0, a.default)("#nav-btn-search").trigger("click"), !1
        }), r.default.bind("esc", function() {
            (0, a.default)(".close").trigger("click")
        }), r.default.bind("right", function() {
            if (n >= 0 && n < e - 1) return toggleFocus(i), n += 1, i = t[n], void toggleFocus(i);
            o.length > 0 && o.find("li.next:not(.disabled)").length > 0 && n === e - 1 && (window.location.href = window.location.origin + (0, a.default)(o).find("li.next a").attr("href"))
        }), r.default.bind("left", function() {
            if (n > 0 && n < e) return toggleFocus(i), n -= 1, i = t[n], void toggleFocus(i);
            o.length > 0 && (0, a.default)(o).find("li.prev:not(.disabled)").length > 0 && 0 === n && (window.location.href = window.location.origin + (0, a.default)(o).find("li.prev a").attr("href") + "#prev")
        }), r.default.bind("enter", function() {
            window.location.href = window.location.origin + (0, a.default)(i).find("span.card-title a").attr("href")
        }))
    })
}, function(t, e, n) {
    "use strict";

    function initFilters() {
        (0, r.default)("div").is("#filters") && ((0, r.default)("#button_filters").show(), (0, r.default)(".js-filters-action").sideNav({
            edge: "right"
        }), (0, r.default)("#clear_form_filters").on("click", function() {
            return (0, r.default)("#filters input").val(""), (0, r.default)("#filters :checked").removeAttr("checked"), !1
        }))
    }

    function initExport() {
        (0, r.default)("div").is("#export") && ((0, r.default)("#button_export").show(), (0, r.default)(".js-export-action").sideNav({
            edge: "right"
        }))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.initFilters = e.initExport = void 0;
    var i = n(0),
        r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i);
    e.initExport = initExport, e.initFilters = initFilters
}, , , function(t, e) {}, function(t, e) {}, function(e, i, a) {
    (function(d, f) {
        var h, g, g, h, b, g, b, h, T, h, b, g;
        if (void 0 === C) {
            var C;
            C = d = a(0)
        }
        C.easing.jswing = C.easing.swing, C.extend(C.easing, {
                def: "easeOutQuad",
                swing: function(t, e, n, i, r) {
                    return C.easing[C.easing.def](t, e, n, i, r)
                },
                easeInQuad: function(t, e, n, i, r) {
                    return i * (e /= r) * e + n
                },
                easeOutQuad: function(t, e, n, i, r) {
                    return -i * (e /= r) * (e - 2) + n
                },
                easeInOutQuad: function(t, e, n, i, r) {
                    return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
                },
                easeInCubic: function(t, e, n, i, r) {
                    return i * (e /= r) * e * e + n
                },
                easeOutCubic: function(t, e, n, i, r) {
                    return i * ((e = e / r - 1) * e * e + 1) + n
                },
                easeInOutCubic: function(t, e, n, i, r) {
                    return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
                },
                easeInQuart: function(t, e, n, i, r) {
                    return i * (e /= r) * e * e * e + n
                },
                easeOutQuart: function(t, e, n, i, r) {
                    return -i * ((e = e / r - 1) * e * e * e - 1) + n
                },
                easeInOutQuart: function(t, e, n, i, r) {
                    return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
                },
                easeInQuint: function(t, e, n, i, r) {
                    return i * (e /= r) * e * e * e * e + n
                },
                easeOutQuint: function(t, e, n, i, r) {
                    return i * ((e = e / r - 1) * e * e * e * e + 1) + n
                },
                easeInOutQuint: function(t, e, n, i, r) {
                    return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
                },
                easeInSine: function(t, e, n, i, r) {
                    return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
                },
                easeOutSine: function(t, e, n, i, r) {
                    return i * Math.sin(e / r * (Math.PI / 2)) + n
                },
                easeInOutSine: function(t, e, n, i, r) {
                    return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
                },
                easeInExpo: function(t, e, n, i, r) {
                    return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
                },
                easeOutExpo: function(t, e, n, i, r) {
                    return e == r ? n + i : i * (1 - Math.pow(2, -10 * e / r)) + n
                },
                easeInOutExpo: function(t, e, n, i, r) {
                    return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --e)) + n
                },
                easeInCirc: function(t, e, n, i, r) {
                    return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
                },
                easeOutCirc: function(t, e, n, i, r) {
                    return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
                },
                easeInOutCirc: function(t, e, n, i, r) {
                    return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
                },
                easeInElastic: function(t, e, n, i, r) {
                    var o = 1.70158,
                        a = 0,
                        s = i;
                    if (0 == e) return n;
                    if (1 == (e /= r)) return n + i;
                    if (a || (a = .3 * r), s < Math.abs(i)) {
                        s = i;
                        var o = a / 4
                    } else var o = a / (2 * Math.PI) * Math.asin(i / s);
                    return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / a) + n
                },
                easeOutElastic: function(t, e, n, i, r) {
                    var o = 1.70158,
                        a = 0,
                        s = i;
                    if (0 == e) return n;
                    if (1 == (e /= r)) return n + i;
                    if (a || (a = .3 * r), s < Math.abs(i)) {
                        s = i;
                        var o = a / 4
                    } else var o = a / (2 * Math.PI) * Math.asin(i / s);
                    return s * Math.pow(2, -10 * e) * Math.sin((e * r - o) * (2 * Math.PI) / a) + i + n
                },
                easeInOutElastic: function(t, e, n, i, r) {
                    var o = 1.70158,
                        a = 0,
                        s = i;
                    if (0 == e) return n;
                    if (2 == (e /= r / 2)) return n + i;
                    if (a || (a = r * (.3 * 1.5)), s < Math.abs(i)) {
                        s = i;
                        var o = a / 4
                    } else var o = a / (2 * Math.PI) * Math.asin(i / s);
                    return e < 1 ? s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / a) * -.5 + n : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / a) * .5 + i + n
                },
                easeInBack: function(t, e, n, i, r, o) {
                    return void 0 == o && (o = 1.70158), i * (e /= r) * e * ((o + 1) * e - o) + n
                },
                easeOutBack: function(t, e, n, i, r, o) {
                    return void 0 == o && (o = 1.70158), i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + n
                },
                easeInOutBack: function(t, e, n, i, r, o) {
                    return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? i / 2 * (e * e * ((1 + (o *= 1.525)) * e - o)) + n : i / 2 * ((e -= 2) * e * ((1 + (o *= 1.525)) * e + o) + 2) + n
                },
                easeInBounce: function(t, e, n, i, r) {
                    return i - C.easing.easeOutBounce(t, r - e, 0, i, r) + n
                },
                easeOutBounce: function(t, e, n, i, r) {
                    return (e /= r) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
                },
                easeInOutBounce: function(t, e, n, i, r) {
                    return e < r / 2 ? .5 * C.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * C.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
                }
            }), C.extend(C.easing, {
                easeInOutMaterial: function(t, e, n, i, r) {
                    return (e /= r / 2) < 1 ? i / 2 * e * e + n : i / 4 * ((e -= 2) * e * e + 2) + n
                }
            }), C.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(n) {
                function t(t) {
                    var e = t.length,
                        n = i.type(t);
                    return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
                }
                if (!f) {
                    var i = function(t, e) {
                        return new i.fn.init(t, e)
                    };
                    i.isWindow = function(t) {
                        return null != t && t == t.window
                    }, i.type = function(t) {
                        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? o[s.call(t)] || "object" : typeof t
                    }, i.isArray = Array.isArray || function(t) {
                        return "array" === i.type(t)
                    }, i.isPlainObject = function(t) {
                        var e;
                        if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
                        try {
                            if (t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (t) {
                            return !1
                        }
                        for (e in t);
                        return void 0 === e || a.call(t, e)
                    }, i.each = function(e, n, i) {
                        var r = 0,
                            o = e.length,
                            a = t(e);
                        if (i) {
                            if (a)
                                for (; o > r && !1 !== n.apply(e[r], i); r++);
                            else
                                for (r in e)
                                    if (!1 === n.apply(e[r], i)) break
                        } else if (a)
                            for (; o > r && !1 !== n.call(e[r], r, e[r]); r++);
                        else
                            for (r in e)
                                if (!1 === n.call(e[r], r, e[r])) break; return e
                    }, i.data = function(t, e, n) {
                        if (void 0 === n) {
                            var o = t[i.expando],
                                a = o && r[o];
                            if (void 0 === e) return a;
                            if (a && e in a) return a[e]
                        } else if (void 0 !== e) {
                            var o = t[i.expando] || (t[i.expando] = ++i.uuid);
                            return r[o] = r[o] || {}, r[o][e] = n, n
                        }
                    }, i.removeData = function(t, e) {
                        var n = t[i.expando],
                            o = n && r[n];
                        o && i.each(e, function(t, e) {
                            delete o[e]
                        })
                    }, i.extend = function() {
                        var t, e, n, r, o, a, s = arguments[0] || {},
                            l = 1,
                            u = arguments.length,
                            c = !1;
                        for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
                            if (null != (o = arguments[l]))
                                for (r in o) t = s[r], n = o[r], s !== n && (c && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, a = t && i.isArray(t) ? t : []) : a = t && i.isPlainObject(t) ? t : {}, s[r] = i.extend(c, a, n)) : void 0 !== n && (s[r] = n));
                        return s
                    }, i.queue = function(e, n, r) {
                        if (e) {
                            n = (n || "fx") + "queue";
                            var o = i.data(e, n);
                            return r ? (!o || i.isArray(r) ? o = i.data(e, n, function(e, n) {
                                var i = n || [];
                                return null != e && (t(Object(e)) ? function(t, e) {
                                    for (var n = +e.length, i = 0, r = t.length; n > i;) t[r++] = e[i++];
                                    if (n !== n)
                                        for (; void 0 !== e[i];) t[r++] = e[i++];
                                    t.length = r
                                }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                            }(r)) : o.push(r), o) : o || []
                        }
                    }, i.dequeue = function(t, e) {
                        i.each(t.nodeType ? [t] : t, function(t, n) {
                            e = e || "fx";
                            var r = i.queue(n, e),
                                o = r.shift();
                            "inprogress" === o && (o = r.shift()), o && ("fx" === e && r.unshift("inprogress"), o.call(n, function() {
                                i.dequeue(n, e)
                            }))
                        })
                    }, i.fn = i.prototype = {
                        init: function(t) {
                            if (t.nodeType) return this[0] = t, this;
                            throw new Error("Not a DOM node.")
                        },
                        offset: function() {
                            var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                                top: 0,
                                left: 0
                            };
                            return {
                                top: t.top + (n.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                                left: t.left + (n.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                            }
                        },
                        position: function() {
                            function e() {
                                for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                                return t || document
                            }
                            var t = this[0],
                                e = e.apply(t),
                                n = this.offset(),
                                r = /^(?:body|html)$/i.test(e.nodeName) ? {
                                    top: 0,
                                    left: 0
                                } : i(e).offset();
                            return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0, r.left += parseFloat(e.style.borderLeftWidth) || 0), {
                                top: n.top - r.top,
                                left: n.left - r.left
                            }
                        }
                    };
                    var r = {};
                    i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
                    for (var o = {}, a = o.hasOwnProperty, s = o.toString, l = "Boolean Number String Function Array Date RegExp Object Error".split(" "), u = 0; u < l.length; u++) o["[object " + l[u] + "]"] = l[u].toLowerCase();
                    i.fn.init.prototype = i.fn, n.Velocity = {
                        Utilities: i
                    }
                }
            }(window), function(t) {
                "object" == typeof e && "object" == typeof e.exports ? e.exports = t() : (h = t, void 0 !== (g = "function" == typeof h ? h.call(i, a, i, e) : h) && (e.exports = g))
            }(function() {
                return function(r, a, h, v) {
                    function n(t) {
                        for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                            var r = t[e];
                            r && i.push(r)
                        }
                        return i
                    }

                    function o(t) {
                        return w.isWrapped(t) ? t = [].slice.call(t) : w.isNode(t) && (t = [t]), t
                    }

                    function i(t) {
                        var e = m.data(t, "velocity");
                        return null === e ? v : e
                    }

                    function s(t) {
                        return function(e) {
                            return Math.round(e * t) * (1 / t)
                        }
                    }

                    function l(t, e, n, r) {
                        function o(t, e) {
                            return 1 - 3 * e + 3 * t
                        }

                        function i(t, e) {
                            return 3 * e - 6 * t
                        }

                        function s(t) {
                            return 3 * t
                        }

                        function l(t, e, n) {
                            return ((o(e, n) * t + i(e, n)) * t + s(e)) * t
                        }

                        function u(t, e, n) {
                            return 3 * o(e, n) * t * t + 2 * i(e, n) * t + s(e)
                        }

                        function c(e, i) {
                            for (var r = 0; h > r; ++r) {
                                var o = u(i, t, n);
                                if (0 === o) return i;
                                i -= (l(i, t, n) - e) / o
                            }
                            return i
                        }

                        function p() {
                            for (var e = 0; b > e; ++e) C[e] = l(e * w, t, n)
                        }

                        function f(e, i, r) {
                            var o, a, s = 0;
                            do {
                                a = i + (r - i) / 2, o = l(a, t, n) - e, o > 0 ? r = a : i = a
                            } while (Math.abs(o) > m && ++s < y);
                            return a
                        }

                        function d(e) {
                            for (var i = 0, r = 1, o = b - 1; r != o && C[r] <= e; ++r) i += w;
                            --r;
                            var a = (e - C[r]) / (C[r + 1] - C[r]),
                                s = i + a * w,
                                l = u(s, t, n);
                            return l >= v ? c(e, s) : 0 == l ? s : f(e, i, i + w)
                        }

                        function g() {
                            k = !0, (t != e || n != r) && p()
                        }
                        var h = 4,
                            v = .001,
                            m = 1e-7,
                            y = 10,
                            b = 11,
                            w = 1 / (b - 1),
                            x = "Float32Array" in a;
                        if (4 !== arguments.length) return !1;
                        for (var T = 0; 4 > T; ++T)
                            if ("number" != typeof arguments[T] || isNaN(arguments[T]) || !isFinite(arguments[T])) return !1;
                        t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
                        var C = x ? new Float32Array(b) : new Array(b),
                            k = !1,
                            E = function(i) {
                                return k || g(), t === e && n === r ? i : 0 === i ? 0 : 1 === i ? 1 : l(d(i), e, r)
                            };
                        E.getControlPoints = function() {
                            return [{
                                x: t,
                                y: e
                            }, {
                                x: n,
                                y: r
                            }]
                        };
                        var S = "generateBezier(" + [t, e, n, r] + ")";
                        return E.toString = function() {
                            return S
                        }, E
                    }

                    function u(t, e) {
                        var n = t;
                        return w.isString(t) ? E.Easings[t] || (n = !1) : n = w.isArray(t) && 1 === t.length ? s.apply(null, t) : w.isArray(t) && 2 === t.length ? S.apply(null, t.concat([e])) : !(!w.isArray(t) || 4 !== t.length) && l.apply(null, t), !1 === n && (n = E.Easings[E.defaults.easing] ? E.defaults.easing : k), n
                    }

                    function c(t) {
                        if (t) {
                            var e = (new Date).getTime(),
                                r = E.State.calls.length;
                            r > 1e4 && (E.State.calls = n(E.State.calls));
                            for (var o = 0; r > o; o++)
                                if (E.State.calls[o]) {
                                    var a = E.State.calls[o],
                                        s = a[0],
                                        l = a[2],
                                        u = a[3],
                                        d = !!u,
                                        f = null;
                                    u || (u = E.State.calls[o][3] = e - 16);
                                    for (var h = Math.min((e - u) / l.duration, 1), g = 0, y = s.length; y > g; g++) {
                                        var b = s[g],
                                            x = b.element;
                                        if (i(x)) {
                                            var T = !1;
                                            if (l.display !== v && null !== l.display && "none" !== l.display) {
                                                if ("flex" === l.display) {
                                                    var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                                    m.each(C, function(t, e) {
                                                        _.setPropertyValue(x, "display", e)
                                                    })
                                                }
                                                _.setPropertyValue(x, "display", l.display)
                                            }
                                            l.visibility !== v && "hidden" !== l.visibility && _.setPropertyValue(x, "visibility", l.visibility);
                                            for (var k in b)
                                                if ("element" !== k) {
                                                    var S, A = b[k],
                                                        D = w.isString(A.easing) ? E.Easings[A.easing] : A.easing;
                                                    if (1 === h) S = A.endValue;
                                                    else {
                                                        var O = A.endValue - A.startValue;
                                                        if (S = A.startValue + O * D(h, l, O), !d && S === A.currentValue) continue
                                                    }
                                                    if (A.currentValue = S, "tween" === k) f = S;
                                                    else {
                                                        if (_.Hooks.registered[k]) {
                                                            var N = _.Hooks.getRoot(k),
                                                                M = i(x).rootPropertyValueCache[N];
                                                            M && (A.rootPropertyValue = M)
                                                        }
                                                        var I = _.setPropertyValue(x, k, A.currentValue + (0 === parseFloat(S) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                                                        _.Hooks.registered[k] && (i(x).rootPropertyValueCache[N] = _.Normalizations.registered[N] ? _.Normalizations.registered[N]("extract", null, I[1]) : I[1]), "transform" === I[0] && (T = !0)
                                                    }
                                                }
                                            l.mobileHA && i(x).transformCache.translate3d === v && (i(x).transformCache.translate3d = "(0px, 0px, 0px)", T = !0), T && _.flushTransformCache(x)
                                        }
                                    }
                                    l.display !== v && "none" !== l.display && (E.State.calls[o][2].display = !1), l.visibility !== v && "hidden" !== l.visibility && (E.State.calls[o][2].visibility = !1), l.progress && l.progress.call(a[1], a[1], h, Math.max(0, u + l.duration - e), u, f), 1 === h && p(o)
                                }
                        }
                        E.State.isTicking && P(c)
                    }

                    function p(t, e) {
                        if (!E.State.calls[t]) return !1;
                        for (var n = E.State.calls[t][0], r = E.State.calls[t][1], o = E.State.calls[t][2], a = E.State.calls[t][4], s = !1, l = 0, u = n.length; u > l; l++) {
                            var c = n[l].element;
                            if (e || o.loop || ("none" === o.display && _.setPropertyValue(c, "display", o.display), "hidden" === o.visibility && _.setPropertyValue(c, "visibility", o.visibility)), !0 !== o.loop && (m.queue(c)[1] === v || !/\.velocityQueueEntryFlag/i.test(m.queue(c)[1])) && i(c)) {
                                i(c).isAnimating = !1, i(c).rootPropertyValueCache = {};
                                var d = !1;
                                m.each(_.Lists.transforms3D, function(t, e) {
                                    var n = /^scale/.test(e) ? 1 : 0,
                                        r = i(c).transformCache[e];
                                    i(c).transformCache[e] !== v && new RegExp("^\\(" + n + "[^.]").test(r) && (d = !0, delete i(c).transformCache[e])
                                }), o.mobileHA && (d = !0, delete i(c).transformCache.translate3d), d && _.flushTransformCache(c), _.Values.removeClass(c, "velocity-animating")
                            }
                            if (!e && o.complete && !o.loop && l === u - 1) try {
                                o.complete.call(r, r)
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 1)
                            }
                            a && !0 !== o.loop && a(r), i(c) && !0 === o.loop && !e && (m.each(i(c).tweensContainer, function(t, e) {
                                /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                            }), E(c, "reverse", {
                                loop: !0,
                                delay: o.delay
                            })), !1 !== o.queue && m.dequeue(c, o.queue)
                        }
                        E.State.calls[t] = !1;
                        for (var f = 0, h = E.State.calls.length; h > f; f++)
                            if (!1 !== E.State.calls[f]) {
                                s = !0;
                                break
                            }!1 === s && (E.State.isTicking = !1, delete E.State.calls, E.State.calls = [])
                    }
                    var m, y = function() {
                            if (h.documentMode) return h.documentMode;
                            for (var t = 7; t > 4; t--) {
                                var e = h.createElement("div");
                                if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length) return e = null, t
                            }
                            return v
                        }(),
                        b = function() {
                            var t = 0;
                            return a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || function(e) {
                                var n, i = (new Date).getTime();
                                return n = Math.max(0, 16 - (i - t)), t = i + n, setTimeout(function() {
                                    e(i + n)
                                }, n)
                            }
                        }(),
                        w = {
                            isString: function(t) {
                                return "string" == typeof t
                            },
                            isArray: Array.isArray || function(t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            },
                            isFunction: function(t) {
                                return "[object Function]" === Object.prototype.toString.call(t)
                            },
                            isNode: function(t) {
                                return t && t.nodeType
                            },
                            isNodeList: function(t) {
                                return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== v && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                            },
                            isWrapped: function(t) {
                                return t && (t.jquery || a.Zepto && a.Zepto.zepto.isZ(t))
                            },
                            isSVG: function(t) {
                                return a.SVGElement && t instanceof a.SVGElement
                            },
                            isEmptyObject: function(t) {
                                for (var e in t) return !1;
                                return !0
                            }
                        },
                        x = !1;
                    if (r.fn && r.fn.jquery ? (m = r, x = !0) : m = a.Velocity.Utilities, 8 >= y && !x) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
                    if (7 >= y) return void(C.fn.velocity = C.fn.animate);
                    var T = 400,
                        k = "swing",
                        E = {
                            State: {
                                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                                isAndroid: /Android/i.test(navigator.userAgent),
                                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                                isChrome: a.chrome,
                                isFirefox: /Firefox/i.test(navigator.userAgent),
                                prefixElement: h.createElement("div"),
                                prefixMatches: {},
                                scrollAnchor: null,
                                scrollPropertyLeft: null,
                                scrollPropertyTop: null,
                                isTicking: !1,
                                calls: []
                            },
                            CSS: {},
                            Utilities: m,
                            Redirects: {},
                            Easings: {},
                            Promise: a.Promise,
                            defaults: {
                                queue: "",
                                duration: T,
                                easing: k,
                                begin: v,
                                complete: v,
                                progress: v,
                                display: v,
                                visibility: v,
                                loop: !1,
                                delay: !1,
                                mobileHA: !0,
                                _cacheValues: !0
                            },
                            init: function(t) {
                                m.data(t, "velocity", {
                                    isSVG: w.isSVG(t),
                                    isAnimating: !1,
                                    computedStyle: null,
                                    tweensContainer: null,
                                    rootPropertyValueCache: {},
                                    transformCache: {}
                                })
                            },
                            hook: null,
                            mock: !1,
                            version: {
                                major: 1,
                                minor: 2,
                                patch: 2
                            },
                            debug: !1
                        };
                    a.pageYOffset !== v ? (E.State.scrollAnchor = a, E.State.scrollPropertyLeft = "pageXOffset", E.State.scrollPropertyTop = "pageYOffset") : (E.State.scrollAnchor = h.documentElement || h.body.parentNode || h.body, E.State.scrollPropertyLeft = "scrollLeft", E.State.scrollPropertyTop = "scrollTop");
                    var S = function() {
                        function e(t) {
                            return -t.tension * t.x - t.friction * t.v
                        }

                        function t(t, n, i) {
                            var r = {
                                x: t.x + i.dx * n,
                                v: t.v + i.dv * n,
                                tension: t.tension,
                                friction: t.friction
                            };
                            return {
                                dx: r.v,
                                dv: e(r)
                            }
                        }

                        function r(n, i) {
                            var r = {
                                    dx: n.v,
                                    dv: e(n)
                                },
                                o = t(n, .5 * i, r),
                                a = t(n, .5 * i, o),
                                s = t(n, i, a),
                                l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx),
                                u = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
                            return n.x = n.x + l * i, n.v = n.v + u * i, n
                        }
                        return function a(t, e, n) {
                            var i, o, s, l = {
                                    x: -1,
                                    v: 0,
                                    tension: null,
                                    friction: null
                                },
                                u = [0],
                                c = 0;
                            for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, n = n || null, l.tension = t, l.friction = e, i = null !== n, i ? (c = a(t, e), o = c / n * .016) : o = .016; s = r(s || l, o), u.push(1 + s.x), c += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                            return i ? function(t) {
                                return u[t * (u.length - 1) | 0]
                            } : c
                        }
                    }();
                    E.Easings = {
                        linear: function(t) {
                            return t
                        },
                        swing: function(t) {
                            return .5 - Math.cos(t * Math.PI) / 2
                        },
                        spring: function(t) {
                            return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                        }
                    }, m.each([
                        ["ease", [.25, .1, .25, 1]],
                        ["ease-in", [.42, 0, 1, 1]],
                        ["ease-out", [0, 0, .58, 1]],
                        ["ease-in-out", [.42, 0, .58, 1]],
                        ["easeInSine", [.47, 0, .745, .715]],
                        ["easeOutSine", [.39, .575, .565, 1]],
                        ["easeInOutSine", [.445, .05, .55, .95]],
                        ["easeInQuad", [.55, .085, .68, .53]],
                        ["easeOutQuad", [.25, .46, .45, .94]],
                        ["easeInOutQuad", [.455, .03, .515, .955]],
                        ["easeInCubic", [.55, .055, .675, .19]],
                        ["easeOutCubic", [.215, .61, .355, 1]],
                        ["easeInOutCubic", [.645, .045, .355, 1]],
                        ["easeInQuart", [.895, .03, .685, .22]],
                        ["easeOutQuart", [.165, .84, .44, 1]],
                        ["easeInOutQuart", [.77, 0, .175, 1]],
                        ["easeInQuint", [.755, .05, .855, .06]],
                        ["easeOutQuint", [.23, 1, .32, 1]],
                        ["easeInOutQuint", [.86, 0, .07, 1]],
                        ["easeInExpo", [.95, .05, .795, .035]],
                        ["easeOutExpo", [.19, 1, .22, 1]],
                        ["easeInOutExpo", [1, 0, 0, 1]],
                        ["easeInCirc", [.6, .04, .98, .335]],
                        ["easeOutCirc", [.075, .82, .165, 1]],
                        ["easeInOutCirc", [.785, .135, .15, .86]]
                    ], function(t, e) {
                        E.Easings[e[0]] = l.apply(null, e[1])
                    });
                    var _ = E.CSS = {
                        RegEx: {
                            isHex: /^#([A-f\d]{3}){1,2}$/i,
                            valueUnwrap: /^[A-z]+\((.*)\)$/i,
                            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                        },
                        Lists: {
                            colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                            transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                            transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                        },
                        Hooks: {
                            templates: {
                                textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                                boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                                clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                                backgroundPosition: ["X Y", "0% 0%"],
                                transformOrigin: ["X Y Z", "50% 50% 0px"],
                                perspectiveOrigin: ["X Y", "50% 50%"]
                            },
                            registered: {},
                            register: function() {
                                for (var t = 0; t < _.Lists.colors.length; t++) {
                                    var e = "color" === _.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                                    _.Hooks.templates[_.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                                }
                                var n, i, r;
                                if (y)
                                    for (n in _.Hooks.templates) {
                                        i = _.Hooks.templates[n], r = i[0].split(" ");
                                        var o = i[1].match(_.RegEx.valueSplit);
                                        "Color" === r[0] && (r.push(r.shift()), o.push(o.shift()), _.Hooks.templates[n] = [r.join(" "), o.join(" ")])
                                    }
                                for (n in _.Hooks.templates) {
                                    i = _.Hooks.templates[n], r = i[0].split(" ");
                                    for (var t in r) {
                                        var a = n + r[t],
                                            s = t;
                                        _.Hooks.registered[a] = [n, s]
                                    }
                                }
                            },
                            getRoot: function(t) {
                                var e = _.Hooks.registered[t];
                                return e ? e[0] : t
                            },
                            cleanRootPropertyValue: function(t, e) {
                                return _.RegEx.valueUnwrap.test(e) && (e = e.match(_.RegEx.valueUnwrap)[1]), _.Values.isCSSNullValue(e) && (e = _.Hooks.templates[t][1]), e
                            },
                            extractValue: function(t, e) {
                                var n = _.Hooks.registered[t];
                                if (n) {
                                    var i = n[0],
                                        r = n[1];
                                    return e = _.Hooks.cleanRootPropertyValue(i, e), e.toString().match(_.RegEx.valueSplit)[r]
                                }
                                return e
                            },
                            injectValue: function(t, e, n) {
                                var i = _.Hooks.registered[t];
                                if (i) {
                                    var r, o = i[0],
                                        a = i[1];
                                    return n = _.Hooks.cleanRootPropertyValue(o, n), r = n.toString().match(_.RegEx.valueSplit), r[a] = e, r.join(" ")
                                }
                                return n
                            }
                        },
                        Normalizations: {
                            registered: {
                                clip: function(t, e, n) {
                                    switch (t) {
                                        case "name":
                                            return "clip";
                                        case "extract":
                                            var i;
                                            return _.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(_.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                                        case "inject":
                                            return "rect(" + n + ")"
                                    }
                                },
                                blur: function(t, e, n) {
                                    switch (t) {
                                        case "name":
                                            return E.State.isFirefox ? "filter" : "-webkit-filter";
                                        case "extract":
                                            var i = parseFloat(n);
                                            if (!i && 0 !== i) {
                                                var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                                i = r ? r[1] : 0
                                            }
                                            return i;
                                        case "inject":
                                            return parseFloat(n) ? "blur(" + n + ")" : "none"
                                    }
                                },
                                opacity: function(t, e, n) {
                                    if (8 >= y) switch (t) {
                                        case "name":
                                            return "filter";
                                        case "extract":
                                            var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                            return n = i ? i[1] / 100 : 1;
                                        case "inject":
                                            return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                    } else switch (t) {
                                        case "name":
                                            return "opacity";
                                        case "extract":
                                        case "inject":
                                            return n
                                    }
                                }
                            },
                            register: function() {
                                9 >= y || E.State.isGingerbread || (_.Lists.transformsBase = _.Lists.transformsBase.concat(_.Lists.transforms3D));
                                for (var t = 0; t < _.Lists.transformsBase.length; t++) ! function() {
                                    var e = _.Lists.transformsBase[t];
                                    _.Normalizations.registered[e] = function(t, n, r) {
                                        switch (t) {
                                            case "name":
                                                return "transform";
                                            case "extract":
                                                return i(n) === v || i(n).transformCache[e] === v ? /^scale/i.test(e) ? 1 : 0 : i(n).transformCache[e].replace(/[()]/g, "");
                                            case "inject":
                                                var o = !1;
                                                switch (e.substr(0, e.length - 1)) {
                                                    case "translate":
                                                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                                        break;
                                                    case "scal":
                                                    case "scale":
                                                        E.State.isAndroid && i(n).transformCache[e] === v && 1 > r && (r = 1), o = !/(\d)$/i.test(r);
                                                        break;
                                                    case "skew":
                                                        o = !/(deg|\d)$/i.test(r);
                                                        break;
                                                    case "rotate":
                                                        o = !/(deg|\d)$/i.test(r)
                                                }
                                                return o || (i(n).transformCache[e] = "(" + r + ")"), i(n).transformCache[e]
                                        }
                                    }
                                }();
                                for (var t = 0; t < _.Lists.colors.length; t++) ! function() {
                                    var e = _.Lists.colors[t];
                                    _.Normalizations.registered[e] = function(t, n, i) {
                                        switch (t) {
                                            case "name":
                                                return e;
                                            case "extract":
                                                var r;
                                                if (_.RegEx.wrappedValueAlreadyExtracted.test(i)) r = i;
                                                else {
                                                    var o, a = {
                                                        black: "rgb(0, 0, 0)",
                                                        blue: "rgb(0, 0, 255)",
                                                        gray: "rgb(128, 128, 128)",
                                                        green: "rgb(0, 128, 0)",
                                                        red: "rgb(255, 0, 0)",
                                                        white: "rgb(255, 255, 255)"
                                                    };
                                                    /^[A-z]+$/i.test(i) ? o = a[i] !== v ? a[i] : a.black : _.RegEx.isHex.test(i) ? o = "rgb(" + _.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (o = a.black), r = (o || i).toString().match(_.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                                }
                                                return 8 >= y || 3 !== r.split(" ").length || (r += " 1"), r;
                                            case "inject":
                                                return 8 >= y ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= y ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                        }
                                    }
                                }()
                            }
                        },
                        Names: {
                            camelCase: function(t) {
                                return t.replace(/-(\w)/g, function(t, e) {
                                    return e.toUpperCase()
                                })
                            },
                            SVGAttribute: function(t) {
                                var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                                return (y || E.State.isAndroid && !E.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                            },
                            prefixCheck: function(t) {
                                if (E.State.prefixMatches[t]) return [E.State.prefixMatches[t], !0];
                                for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = e.length; i > n; n++) {
                                    var r;
                                    if (r = 0 === n ? t : e[n] + t.replace(/^\w/, function(t) {
                                            return t.toUpperCase()
                                        }), w.isString(E.State.prefixElement.style[r])) return E.State.prefixMatches[t] = r, [r, !0]
                                }
                                return [t, !1]
                            }
                        },
                        Values: {
                            hexToRgb: function(t) {
                                var e, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                                    i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                                return t = t.replace(n, function(t, e, n, i) {
                                    return e + e + n + n + i + i
                                }), e = i.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                            },
                            isCSSNullValue: function(t) {
                                return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                            },
                            getUnitType: function(t) {
                                return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                            },
                            getDisplayType: function(t) {
                                var e = t && t.tagName.toString().toLowerCase();
                                return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                            },
                            addClass: function(t, e) {
                                t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                            },
                            removeClass: function(t, e) {
                                t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                            }
                        },
                        getPropertyValue: function(t, e, r, o) {
                            function s(t, e) {
                                function n() {
                                    l && _.setPropertyValue(t, "display", "none")
                                }
                                var r = 0;
                                if (8 >= y) r = m.css(t, e);
                                else {
                                    var l = !1;
                                    if (/^(width|height)$/.test(e) && 0 === _.getPropertyValue(t, "display") && (l = !0, _.setPropertyValue(t, "display", _.Values.getDisplayType(t))), !o) {
                                        if ("height" === e && "border-box" !== _.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                            var u = t.offsetHeight - (parseFloat(_.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(_.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(_.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(_.getPropertyValue(t, "paddingBottom")) || 0);
                                            return n(), u
                                        }
                                        if ("width" === e && "border-box" !== _.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                            var c = t.offsetWidth - (parseFloat(_.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(_.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(_.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(_.getPropertyValue(t, "paddingRight")) || 0);
                                            return n(), c
                                        }
                                    }
                                    var d;
                                    d = i(t) === v ? a.getComputedStyle(t, null) : i(t).computedStyle ? i(t).computedStyle : i(t).computedStyle = a.getComputedStyle(t, null), "borderColor" === e && (e = "borderTopColor"), r = 9 === y && "filter" === e ? d.getPropertyValue(e) : d[e], ("" === r || null === r) && (r = t.style[e]), n()
                                }
                                if ("auto" === r && /^(top|right|bottom|left)$/i.test(e)) {
                                    var f = s(t, "position");
                                    ("fixed" === f || "absolute" === f && /top|left/i.test(e)) && (r = m(t).position()[e] + "px")
                                }
                                return r
                            }
                            var l;
                            if (_.Hooks.registered[e]) {
                                var u = e,
                                    c = _.Hooks.getRoot(u);
                                r === v && (r = _.getPropertyValue(t, _.Names.prefixCheck(c)[0])), _.Normalizations.registered[c] && (r = _.Normalizations.registered[c]("extract", t, r)), l = _.Hooks.extractValue(u, r)
                            } else if (_.Normalizations.registered[e]) {
                                var d, f;
                                d = _.Normalizations.registered[e]("name", t), "transform" !== d && (f = s(t, _.Names.prefixCheck(d)[0]), _.Values.isCSSNullValue(f) && _.Hooks.templates[e] && (f = _.Hooks.templates[e][1])), l = _.Normalizations.registered[e]("extract", t, f)
                            }
                            if (!/^[\d-]/.test(l))
                                if (i(t) && i(t).isSVG && _.Names.SVGAttribute(e))
                                    if (/^(height|width)$/i.test(e)) try {
                                        l = t.getBBox()[e]
                                    } catch (t) {
                                        l = 0
                                    } else l = t.getAttribute(e);
                                    else l = s(t, _.Names.prefixCheck(e)[0]);
                            return _.Values.isCSSNullValue(l) && (l = 0), E.debug >= 2 && console.log("Get " + e + ": " + l), l
                        },
                        setPropertyValue: function(t, e, n, r, o) {
                            var s = e;
                            if ("scroll" === e) o.container ? o.container["scroll" + o.direction] = n : "Left" === o.direction ? a.scrollTo(n, o.alternateValue) : a.scrollTo(o.alternateValue, n);
                            else if (_.Normalizations.registered[e] && "transform" === _.Normalizations.registered[e]("name", t)) _.Normalizations.registered[e]("inject", t, n), s = "transform", n = i(t).transformCache[e];
                            else {
                                if (_.Hooks.registered[e]) {
                                    var l = e,
                                        u = _.Hooks.getRoot(e);
                                    r = r || _.getPropertyValue(t, u), n = _.Hooks.injectValue(l, n, r), e = u
                                }
                                if (_.Normalizations.registered[e] && (n = _.Normalizations.registered[e]("inject", t, n), e = _.Normalizations.registered[e]("name", t)), s = _.Names.prefixCheck(e)[0], 8 >= y) try {
                                    t.style[s] = n
                                } catch (t) {
                                    E.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                                } else i(t) && i(t).isSVG && _.Names.SVGAttribute(e) ? t.setAttribute(e, n) : t.style[s] = n;
                                E.debug >= 2 && console.log("Set " + e + " (" + s + "): " + n)
                            }
                            return [s, n]
                        },
                        flushTransformCache: function(e) {
                            function t(t) {
                                return parseFloat(_.getPropertyValue(e, t))
                            }
                            var n = "";
                            if ((y || E.State.isAndroid && !E.State.isChrome) && i(e).isSVG) {
                                var r = {
                                    translate: [t("translateX"), t("translateY")],
                                    skewX: [t("skewX")],
                                    skewY: [t("skewY")],
                                    scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                    rotate: [t("rotateZ"), 0, 0]
                                };
                                m.each(i(e).transformCache, function(t) {
                                    /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), r[t] && (n += t + "(" + r[t].join(" ") + ") ", delete r[t])
                                })
                            } else {
                                var o, a;
                                m.each(i(e).transformCache, function(t) {
                                    return o = i(e).transformCache[t], "transformPerspective" === t ? (a = o, !0) : (9 === y && "rotateZ" === t && (t = "rotate"), void(n += t + o + " "))
                                }), a && (n = "perspective" + a + " " + n)
                            }
                            _.setPropertyValue(e, "transform", n)
                        }
                    };
                    _.Hooks.register(), _.Normalizations.register(), E.hook = function(t, e, n) {
                        var r = v;
                        return t = o(t), m.each(t, function(t, o) {
                            if (i(o) === v && E.init(o), n === v) r === v && (r = E.CSS.getPropertyValue(o, e));
                            else {
                                var a = E.CSS.setPropertyValue(o, e, n);
                                "transform" === a[0] && E.CSS.flushTransformCache(o), r = a
                            }
                        }), r
                    };
                    var A = function() {
                        function e() {
                            return t ? S.promise || null : r
                        }

                        function n() {
                            function e(e) {
                                function p(t, e) {
                                    var i = v,
                                        o = v,
                                        a = v;
                                    return w.isArray(t) ? (i = t[0], !w.isArray(t[1]) && /^[\d-]/.test(t[1]) || w.isFunction(t[1]) || _.RegEx.isHex.test(t[1]) ? a = t[1] : (w.isString(t[1]) && !_.RegEx.isHex.test(t[1]) || w.isArray(t[1])) && (o = e ? t[1] : u(t[1], r.duration), t[2] !== v && (a = t[2]))) : i = t, e || (o = o || r.easing), w.isFunction(i) && (i = i.call(n, x, b)), w.isFunction(a) && (a = a.call(n, x, b)), [i || 0, o, a]
                                }

                                function d(t, e) {
                                    var n, i;
                                    return i = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                        return n = t, ""
                                    }), n || (n = _.Values.getUnitType(t)), [i, n]
                                }
                                if (r.begin && 0 === x) try {
                                    r.begin.call(l, l)
                                } catch (t) {
                                    setTimeout(function() {
                                        throw t
                                    }, 1)
                                }
                                if ("scroll" === P) {
                                    var s, y, T, C = /^x$/i.test(r.axis) ? "Left" : "Top",
                                        k = parseFloat(r.offset) || 0;
                                    r.container ? w.isWrapped(r.container) || w.isNode(r.container) ? (r.container = r.container[0] || r.container, s = r.container["scroll" + C], T = s + m(n).position()[C.toLowerCase()] + k) : r.container = null : (s = E.State.scrollAnchor[E.State["scrollProperty" + C]], y = E.State.scrollAnchor[E.State["scrollProperty" + ("Left" === C ? "Top" : "Left")]], T = m(n).offset()[C.toLowerCase()] + k), o = {
                                        scroll: {
                                            rootPropertyValue: !1,
                                            startValue: s,
                                            currentValue: s,
                                            endValue: T,
                                            unitType: "",
                                            easing: r.easing,
                                            scrollData: {
                                                container: r.container,
                                                direction: C,
                                                alternateValue: y
                                            }
                                        },
                                        element: n
                                    }, E.debug && console.log("tweensContainer (scroll): ", o.scroll, n)
                                } else if ("reverse" === P) {
                                    if (!i(n).tweensContainer) return void m.dequeue(n, r.queue);
                                    "none" === i(n).opts.display && (i(n).opts.display = "auto"), "hidden" === i(n).opts.visibility && (i(n).opts.visibility = "visible"), i(n).opts.loop = !1, i(n).opts.begin = null, i(n).opts.complete = null, g.easing || delete r.easing, g.duration || delete r.duration, r = m.extend({}, i(n).opts, r);
                                    var A = m.extend(!0, {}, i(n).tweensContainer);
                                    for (var D in A)
                                        if ("element" !== D) {
                                            var O = A[D].startValue;
                                            A[D].startValue = A[D].currentValue = A[D].endValue, A[D].endValue = O, w.isEmptyObject(g) || (A[D].easing = r.easing), E.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(A[D]), n)
                                        }
                                    o = A
                                } else if ("start" === P) {
                                    var A;
                                    i(n).tweensContainer && !0 === i(n).isAnimating && (A = i(n).tweensContainer), m.each(f, function(t, e) {
                                        if (RegExp("^" + _.Lists.colors.join("$|^") + "$").test(t)) {
                                            var n = p(e, !0),
                                                i = n[0],
                                                r = n[1],
                                                o = n[2];
                                            if (_.RegEx.isHex.test(i)) {
                                                for (var a = ["Red", "Green", "Blue"], s = _.Values.hexToRgb(i), l = o ? _.Values.hexToRgb(o) : v, u = 0; u < a.length; u++) {
                                                    var c = [s[u]];
                                                    r && c.push(r), l !== v && c.push(l[u]), f[t + a[u]] = c
                                                }
                                                delete f[t]
                                            }
                                        }
                                    });
                                    for (var N in f) {
                                        var M = p(f[N]),
                                            I = M[0],
                                            z = M[1],
                                            F = M[2];
                                        N = _.Names.camelCase(N);
                                        var q = _.Hooks.getRoot(N),
                                            H = !1;
                                        if (i(n).isSVG || "tween" === q || !1 !== _.Names.prefixCheck(q)[1] || _.Normalizations.registered[q] !== v) {
                                            (r.display !== v && null !== r.display && "none" !== r.display || r.visibility !== v && "hidden" !== r.visibility) && /opacity|filter/.test(N) && !F && 0 !== I && (F = 0), r._cacheValues && A && A[N] ? (F === v && (F = A[N].endValue + A[N].unitType), H = i(n).rootPropertyValueCache[q]) : _.Hooks.registered[N] ? F === v ? (H = _.getPropertyValue(n, q), F = _.getPropertyValue(n, N, H)) : H = _.Hooks.templates[q][1] : F === v && (F = _.getPropertyValue(n, N));
                                            var j, W, B, V = !1;
                                            if (j = d(N, F), F = j[0], B = j[1], j = d(N, I), I = j[0].replace(/^([+-\/*])=/, function(t, e) {
                                                    return V = e, ""
                                                }), W = j[1], F = parseFloat(F) || 0, I = parseFloat(I) || 0, "%" === W && (/^(fontSize|lineHeight)$/.test(N) ? (I /= 100, W = "em") : /^scale/.test(N) ? (I /= 100, W = "") : /(Red|Green|Blue)$/i.test(N) && (I = I / 100 * 255, W = "")), /[\/*]/.test(V)) W = B;
                                            else if (B !== W && 0 !== F)
                                                if (0 === I) W = B;
                                                else {
                                                    t = t || function() {
                                                        var t = {
                                                                myParent: n.parentNode || h.body,
                                                                position: _.getPropertyValue(n, "position"),
                                                                fontSize: _.getPropertyValue(n, "fontSize")
                                                            },
                                                            e = t.position === R.lastPosition && t.myParent === R.lastParent,
                                                            r = t.fontSize === R.lastFontSize;
                                                        R.lastParent = t.myParent, R.lastPosition = t.position, R.lastFontSize = t.fontSize;
                                                        var o = 100,
                                                            s = {};
                                                        if (r && e) s.emToPx = R.lastEmToPx, s.percentToPxWidth = R.lastPercentToPxWidth, s.percentToPxHeight = R.lastPercentToPxHeight;
                                                        else {
                                                            var l = i(n).isSVG ? h.createElementNS("http://www.w3.org/2000/svg", "rect") : h.createElement("div");
                                                            E.init(l), t.myParent.appendChild(l), m.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                                                E.CSS.setPropertyValue(l, e, "hidden")
                                                            }), E.CSS.setPropertyValue(l, "position", t.position), E.CSS.setPropertyValue(l, "fontSize", t.fontSize), E.CSS.setPropertyValue(l, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                                                E.CSS.setPropertyValue(l, e, o + "%")
                                                            }), E.CSS.setPropertyValue(l, "paddingLeft", o + "em"), s.percentToPxWidth = R.lastPercentToPxWidth = (parseFloat(_.getPropertyValue(l, "width", null, !0)) || 1) / o, s.percentToPxHeight = R.lastPercentToPxHeight = (parseFloat(_.getPropertyValue(l, "height", null, !0)) || 1) / o, s.emToPx = R.lastEmToPx = (parseFloat(_.getPropertyValue(l, "paddingLeft")) || 1) / o, t.myParent.removeChild(l)
                                                        }
                                                        return null === R.remToPx && (R.remToPx = parseFloat(_.getPropertyValue(h.body, "fontSize")) || 16), null === R.vwToPx && (R.vwToPx = parseFloat(a.innerWidth) / 100, R.vhToPx = parseFloat(a.innerHeight) / 100), s.remToPx = R.remToPx, s.vwToPx = R.vwToPx, s.vhToPx = R.vhToPx, E.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(s), n), s
                                                    }();
                                                    var X = /margin|padding|left|right|width|text|word|letter/i.test(N) || /X$/.test(N) || "x" === N ? "x" : "y";
                                                    switch (B) {
                                                        case "%":
                                                            F *= "x" === X ? t.percentToPxWidth : t.percentToPxHeight;
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            F *= t[B + "ToPx"]
                                                    }
                                                    switch (W) {
                                                        case "%":
                                                            F *= 1 / ("x" === X ? t.percentToPxWidth : t.percentToPxHeight);
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            F *= 1 / t[W + "ToPx"]
                                                    }
                                                }
                                            switch (V) {
                                                case "+":
                                                    I = F + I;
                                                    break;
                                                case "-":
                                                    I = F - I;
                                                    break;
                                                case "*":
                                                    I *= F;
                                                    break;
                                                case "/":
                                                    I = F / I
                                            }
                                            o[N] = {
                                                rootPropertyValue: H,
                                                startValue: F,
                                                currentValue: F,
                                                endValue: I,
                                                unitType: W,
                                                easing: z
                                            }, E.debug && console.log("tweensContainer (" + N + "): " + JSON.stringify(o[N]), n)
                                        } else E.debug && console.log("Skipping [" + q + "] due to a lack of browser support.")
                                    }
                                    o.element = n
                                }
                                o.element && (_.Values.addClass(n, "velocity-animating"), L.push(o), "" === r.queue && (i(n).tweensContainer = o, i(n).opts = r), i(n).isAnimating = !0, x === b - 1 ? (E.State.calls.push([L, l, r, null, S.resolver]), !1 === E.State.isTicking && (E.State.isTicking = !0, c())) : x++)
                            }
                            var t, n = this,
                                r = m.extend({}, E.defaults, g),
                                o = {};
                            switch (i(n) === v && E.init(n), parseFloat(r.delay) && !1 !== r.queue && m.queue(n, r.queue, function(t) {
                                E.velocityQueueEntryFlag = !0, i(n).delayTimer = {
                                    setTimeout: setTimeout(t, parseFloat(r.delay)),
                                    next: t
                                }
                            }), r.duration.toString().toLowerCase()) {
                                case "fast":
                                    r.duration = 200;
                                    break;
                                case "normal":
                                    r.duration = T;
                                    break;
                                case "slow":
                                    r.duration = 600;
                                    break;
                                default:
                                    r.duration = parseFloat(r.duration) || 1
                            }!1 !== E.mock && (!0 === E.mock ? r.duration = r.delay = 1 : (r.duration *= parseFloat(E.mock) || 1, r.delay *= parseFloat(E.mock) || 1)), r.easing = u(r.easing, r.duration), r.begin && !w.isFunction(r.begin) && (r.begin = null), r.progress && !w.isFunction(r.progress) && (r.progress = null), r.complete && !w.isFunction(r.complete) && (r.complete = null), r.display !== v && null !== r.display && (r.display = r.display.toString().toLowerCase(), "auto" === r.display && (r.display = E.CSS.Values.getDisplayType(n))), r.visibility !== v && null !== r.visibility && (r.visibility = r.visibility.toString().toLowerCase()), r.mobileHA = r.mobileHA && E.State.isMobile && !E.State.isGingerbread, !1 === r.queue ? r.delay ? setTimeout(e, r.delay) : e() : m.queue(n, r.queue, function(t, n) {
                                return !0 === n ? (S.promise && S.resolver(l), !0) : (E.velocityQueueEntryFlag = !0, void e(t))
                            }), "" !== r.queue && "fx" !== r.queue || "inprogress" === m.queue(n)[0] || m.dequeue(n)
                        }
                        var t, r, s, l, f, g, y = arguments[0] && (arguments[0].p || m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || w.isString(arguments[0].properties));
                        if (w.isWrapped(this) ? (t = !1, s = 0, l = this, r = this) : (t = !0, s = 1, l = y ? arguments[0].elements || arguments[0].e : arguments[0]), l = o(l)) {
                            y ? (f = arguments[0].properties || arguments[0].p, g = arguments[0].options || arguments[0].o) : (f = arguments[s], g = arguments[s + 1]);
                            var b = l.length,
                                x = 0;
                            if (!/^(stop|finish)$/i.test(f) && !m.isPlainObject(g)) {
                                var C = s + 1;
                                g = {};
                                for (var k = C; k < arguments.length; k++) w.isArray(arguments[k]) || !/^(fast|normal|slow)$/i.test(arguments[k]) && !/^\d/.test(arguments[k]) ? w.isString(arguments[k]) || w.isArray(arguments[k]) ? g.easing = arguments[k] : w.isFunction(arguments[k]) && (g.complete = arguments[k]) : g.duration = arguments[k]
                            }
                            var S = {
                                promise: null,
                                resolver: null,
                                rejecter: null
                            };
                            t && E.Promise && (S.promise = new E.Promise(function(t, e) {
                                S.resolver = t, S.rejecter = e
                            }));
                            var P;
                            switch (f) {
                                case "scroll":
                                    P = "scroll";
                                    break;
                                case "reverse":
                                    P = "reverse";
                                    break;
                                case "finish":
                                case "stop":
                                    m.each(l, function(t, e) {
                                        i(e) && i(e).delayTimer && (clearTimeout(i(e).delayTimer.setTimeout), i(e).delayTimer.next && i(e).delayTimer.next(), delete i(e).delayTimer)
                                    });
                                    var D = [];
                                    return m.each(E.State.calls, function(t, e) {
                                        e && m.each(e[1], function(n, r) {
                                            var o = g === v ? "" : g;
                                            return !0 !== o && e[2].queue !== o && (g !== v || !1 !== e[2].queue) || void m.each(l, function(n, a) {
                                                a === r && ((!0 === g || w.isString(g)) && (m.each(m.queue(a, w.isString(g) ? g : ""), function(t, e) {
                                                    w.isFunction(e) && e(null, !0)
                                                }), m.queue(a, w.isString(g) ? g : "", [])), "stop" === f ? (i(a) && i(a).tweensContainer && !1 !== o && m.each(i(a).tweensContainer, function(t, e) {
                                                    e.endValue = e.currentValue
                                                }), D.push(t)) : "finish" === f && (e[2].duration = 1))
                                            })
                                        })
                                    }), "stop" === f && (m.each(D, function(t, e) {
                                        p(e, !0)
                                    }), S.promise && S.resolver(l)), e();
                                default:
                                    if (!m.isPlainObject(f) || w.isEmptyObject(f)) {
                                        if (w.isString(f) && E.Redirects[f]) {
                                            var O = m.extend({}, g),
                                                N = O.duration,
                                                M = O.delay || 0;
                                            return !0 === O.backwards && (l = m.extend(!0, [], l).reverse()), m.each(l, function(t, e) {
                                                parseFloat(O.stagger) ? O.delay = M + parseFloat(O.stagger) * t : w.isFunction(O.stagger) && (O.delay = M + O.stagger.call(e, t, b)), O.drag && (O.duration = parseFloat(N) || (/^(callout|transition)/.test(f) ? 1e3 : T), O.duration = Math.max(O.duration * (O.backwards ? 1 - t / b : (t + 1) / b), .75 * O.duration, 200)), E.Redirects[f].call(e, e, O || {}, t, b, l, S.promise ? S : v)
                                            }), e()
                                        }
                                        var I = "Velocity: First argument (" + f + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                        return S.promise ? S.rejecter(new Error(I)) : console.log(I), e()
                                    }
                                    P = "start"
                            }
                            var R = {
                                    lastParent: null,
                                    lastPosition: null,
                                    lastFontSize: null,
                                    lastPercentToPxWidth: null,
                                    lastPercentToPxHeight: null,
                                    lastEmToPx: null,
                                    remToPx: null,
                                    vwToPx: null,
                                    vhToPx: null
                                },
                                L = [];
                            m.each(l, function(t, e) {
                                w.isNode(e) && n.call(e)
                            });
                            var z, O = m.extend({}, E.defaults, g);
                            if (O.loop = parseInt(O.loop), z = 2 * O.loop - 1, O.loop)
                                for (var F = 0; z > F; F++) {
                                    var q = {
                                        delay: O.delay,
                                        progress: O.progress
                                    };
                                    F === z - 1 && (q.display = O.display, q.visibility = O.visibility, q.complete = O.complete), A(l, "reverse", q)
                                }
                            return e()
                        }
                    };
                    E = m.extend(A, E), E.animate = A;
                    var P = a.requestAnimationFrame || b;
                    return E.State.isMobile || h.hidden === v || h.addEventListener("visibilitychange", function() {
                        h.hidden ? (P = function(t) {
                            return setTimeout(function() {
                                t(!0)
                            }, 16)
                        }, c()) : P = a.requestAnimationFrame || b
                    }), r.Velocity = E, r !== a && (r.fn.velocity = A, r.fn.velocity.defaults = E.defaults), m.each(["Down", "Up"], function(t, e) {
                        E.Redirects["slide" + e] = function(t, n, i, r, o, a) {
                            var s = m.extend({}, n),
                                l = s.begin,
                                u = s.complete,
                                c = {
                                    height: "",
                                    marginTop: "",
                                    marginBottom: "",
                                    paddingTop: "",
                                    paddingBottom: ""
                                },
                                d = {};
                            s.display === v && (s.display = "Down" === e ? "inline" === E.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), s.begin = function() {
                                l && l.call(o, o);
                                for (var n in c) {
                                    d[n] = t.style[n];
                                    var i = E.CSS.getPropertyValue(t, n);
                                    c[n] = "Down" === e ? [i, 0] : [0, i]
                                }
                                d.overflow = t.style.overflow, t.style.overflow = "hidden"
                            }, s.complete = function() {
                                for (var e in d) t.style[e] = d[e];
                                u && u.call(o, o), a && a.resolver(o)
                            }, E(t, c, s)
                        }
                    }), m.each(["In", "Out"], function(t, e) {
                        E.Redirects["fade" + e] = function(t, n, i, r, o, a) {
                            var s = m.extend({}, n),
                                l = {
                                    opacity: "In" === e ? 1 : 0
                                },
                                u = s.complete;
                            s.complete = i !== r - 1 ? s.begin = null : function() {
                                u && u.call(o, o), a && a.resolver(o)
                            }, s.display === v && (s.display = "In" === e ? "auto" : "none"), E(this, l, s)
                        }
                    }), E
                }(f || window.Zepto || window, window, document)
            })),
            function(c, f, h, b) {
                "use strict";

                function k(t, e, n) {
                    return setTimeout(q(t, n), e)
                }

                function l(t, e, n) {
                    return !!Array.isArray(t) && (m(t, n[e], n), !0)
                }

                function m(t, e, n) {
                    var i;
                    if (t)
                        if (t.forEach) t.forEach(e, n);
                        else if (t.length !== b)
                        for (i = 0; i < t.length;) e.call(n, t[i], i, t), i++;
                    else
                        for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
                }

                function n(t, e, n) {
                    for (var i = Object.keys(e), r = 0; r < i.length;)(!n || n && t[i[r]] === b) && (t[i[r]] = e[i[r]]), r++;
                    return t
                }

                function o(t, e) {
                    return n(t, e, !0)
                }

                function p(t, e, i) {
                    var r, o = e.prototype;
                    r = t.prototype = Object.create(o), r.constructor = t, r._super = o, i && n(r, i)
                }

                function q(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function r(t, e) {
                    return typeof t == S ? t.apply(e ? e[0] || b : b, e) : t
                }

                function s(t, e) {
                    return t === b ? e : t
                }

                function t(t, e, n) {
                    m(x(e), function(e) {
                        t.addEventListener(e, n, !1)
                    })
                }

                function u(t, e, n) {
                    m(x(e), function(e) {
                        t.removeEventListener(e, n, !1)
                    })
                }

                function v(t, e) {
                    for (; t;) {
                        if (t == e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }

                function w(t, e) {
                    return t.indexOf(e) > -1
                }

                function x(t) {
                    return t.trim().split(/\s+/g)
                }

                function y(t, e, n) {
                    if (t.indexOf && !n) return t.indexOf(e);
                    for (var i = 0; i < t.length;) {
                        if (n && t[i][n] == e || !n && t[i] === e) return i;
                        i++
                    }
                    return -1
                }

                function z(t) {
                    return Array.prototype.slice.call(t, 0)
                }

                function A(t, e, n) {
                    for (var i = [], r = [], o = 0; o < t.length;) {
                        var a = e ? t[o][e] : t[o];
                        y(r, a) < 0 && i.push(t[o]), r[o] = a, o++
                    }
                    return n && (i = e ? i.sort(function(t, n) {
                        return t[e] > n[e]
                    }) : i.sort()), i
                }

                function B(t, e) {
                    for (var n, i, r = e[0].toUpperCase() + e.slice(1), o = 0; o < T.length;) {
                        if (n = T[o], (i = n ? n + r : e) in t) return i;
                        o++
                    }
                    return b
                }

                function D() {
                    return N++
                }

                function E(t) {
                    var e = t.ownerDocument;
                    return e.defaultView || e.parentWindow
                }

                function ab(t, e) {
                    var n = this;
                    this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                        r(t.options.enable, [t]) && n.handler(e)
                    }, this.init()
                }

                function bb(t) {
                    var e = t.options.inputClass;
                    return new(e || (R ? wb : L ? Eb : I ? Gb : rb))(t, cb)
                }

                function cb(t, e, n) {
                    var i = n.pointers.length,
                        r = n.changedPointers.length,
                        o = e & W && 0 == i - r,
                        a = e & (X | $) && 0 == i - r;
                    n.isFirst = !!o, n.isFinal = !!a, o && (t.session = {}), n.eventType = e, db(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
                }

                function db(t, e) {
                    var n = t.session,
                        i = e.pointers,
                        r = i.length;
                    n.firstInput || (n.firstInput = gb(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = gb(e) : 1 === r && (n.firstMultiple = !1);
                    var o = n.firstInput,
                        a = n.firstMultiple,
                        s = a ? a.center : o.center,
                        l = e.center = hb(i);
                    e.timeStamp = O(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = lb(s, l), e.distance = kb(s, l), eb(n, e), e.offsetDirection = jb(e.deltaX, e.deltaY), e.scale = a ? nb(a.pointers, i) : 1, e.rotation = a ? mb(a.pointers, i) : 0, fb(n, e);
                    var u = t.element;
                    v(e.srcEvent.target, u) && (u = e.srcEvent.target), e.target = u
                }

                function eb(t, e) {
                    var n = e.center,
                        i = t.offsetDelta || {},
                        r = t.prevDelta || {},
                        o = t.prevInput || {};
                    (e.eventType === W || o.eventType === X) && (r = t.prevDelta = {
                        x: o.deltaX || 0,
                        y: o.deltaY || 0
                    }, i = t.offsetDelta = {
                        x: n.x,
                        y: n.y
                    }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
                }

                function fb(t, e) {
                    var n, i, r, o, a = t.lastInterval || e,
                        s = e.timeStamp - a.timeStamp;
                    if (e.eventType != $ && (s > j || a.velocity === b)) {
                        var l = a.deltaX - e.deltaX,
                            u = a.deltaY - e.deltaY,
                            c = ib(s, l, u);
                        i = c.x, r = c.y, n = P(c.x) > P(c.y) ? c.x : c.y, o = jb(l, u), t.lastInterval = e
                    } else n = a.velocity, i = a.velocityX, r = a.velocityY, o = a.direction;
                    e.velocity = n, e.velocityX = i, e.velocityY = r, e.direction = o
                }

                function gb(t) {
                    for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
                        clientX: _(t.pointers[n].clientX),
                        clientY: _(t.pointers[n].clientY)
                    }, n++;
                    return {
                        timeStamp: O(),
                        pointers: e,
                        center: hb(e),
                        deltaX: t.deltaX,
                        deltaY: t.deltaY
                    }
                }

                function hb(t) {
                    var e = t.length;
                    if (1 === e) return {
                        x: _(t[0].clientX),
                        y: _(t[0].clientY)
                    };
                    for (var n = 0, i = 0, r = 0; e > r;) n += t[r].clientX, i += t[r].clientY, r++;
                    return {
                        x: _(n / e),
                        y: _(i / e)
                    }
                }

                function ib(t, e, n) {
                    return {
                        x: e / t || 0,
                        y: n / t || 0
                    }
                }

                function jb(t, e) {
                    return t === e ? Y : P(t) >= P(e) ? t > 0 ? U : Q : e > 0 ? G : K
                }

                function kb(t, e, n) {
                    n || (n = et);
                    var i = e[n[0]] - t[n[0]],
                        r = e[n[1]] - t[n[1]];
                    return Math.sqrt(i * i + r * r)
                }

                function lb(t, e, n) {
                    n || (n = et);
                    var i = e[n[0]] - t[n[0]],
                        r = e[n[1]] - t[n[1]];
                    return 180 * Math.atan2(r, i) / Math.PI
                }

                function mb(t, e) {
                    return lb(e[1], e[0], nt) - lb(t[1], t[0], nt)
                }

                function nb(t, e) {
                    return kb(e[0], e[1], nt) / kb(t[0], t[1], nt)
                }

                function rb() {
                    this.evEl = rt, this.evWin = ot, this.allow = !0, this.pressed = !1, ab.apply(this, arguments)
                }

                function wb() {
                    this.evEl = lt, this.evWin = ut, ab.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
                }

                function Ab() {
                    this.evTarget = dt, this.evWin = ft, this.started = !1, ab.apply(this, arguments)
                }

                function Bb(t, e) {
                    var n = z(t.touches),
                        i = z(t.changedTouches);
                    return e & (X | $) && (n = A(n.concat(i), "identifier", !0)), [n, i]
                }

                function Eb() {
                    this.evTarget = pt, this.targetIds = {}, ab.apply(this, arguments)
                }

                function Fb(t, e) {
                    var n = z(t.touches),
                        i = this.targetIds;
                    if (e & (W | V) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
                    var r, o, a = z(t.changedTouches),
                        s = [],
                        l = this.target;
                    if (o = n.filter(function(t) {
                            return v(t.target, l)
                        }), e === W)
                        for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
                    for (r = 0; r < a.length;) i[a[r].identifier] && s.push(a[r]), e & (X | $) && delete i[a[r].identifier], r++;
                    return s.length ? [A(o.concat(s), "identifier", !0), s] : void 0
                }

                function Gb() {
                    ab.apply(this, arguments);
                    var t = q(this.handler, this);
                    this.touch = new Eb(this.manager, t), this.mouse = new rb(this.manager, t)
                }

                function Pb(t, e) {
                    this.manager = t, this.set(e)
                }

                function Qb(t) {
                    if (w(t, wt)) return wt;
                    var e = w(t, xt),
                        n = w(t, Tt);
                    return e && n ? xt + " " + Tt : e || n ? e ? xt : Tt : w(t, bt) ? bt : yt
                }

                function Yb(t) {
                    this.id = D(), this.manager = null, this.options = o(t || {}, this.defaults), this.options.enable = s(this.options.enable, !0), this.state = Ct, this.simultaneous = {}, this.requireFail = []
                }

                function Zb(t) {
                    return t & At ? "cancel" : t & St ? "end" : t & Et ? "move" : t & kt ? "start" : ""
                }

                function $b(t) {
                    return t == K ? "down" : t == G ? "up" : t == U ? "left" : t == Q ? "right" : ""
                }

                function _b(t, e) {
                    var n = e.manager;
                    return n ? n.get(t) : t
                }

                function ac() {
                    Yb.apply(this, arguments)
                }

                function bc() {
                    ac.apply(this, arguments), this.pX = null, this.pY = null
                }

                function cc() {
                    ac.apply(this, arguments)
                }

                function dc() {
                    Yb.apply(this, arguments), this._timer = null, this._input = null
                }

                function ec() {
                    ac.apply(this, arguments)
                }

                function fc() {
                    ac.apply(this, arguments)
                }

                function gc() {
                    Yb.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
                }

                function hc(t, e) {
                    return e = e || {}, e.recognizers = s(e.recognizers, hc.defaults.preset), new kc(t, e)
                }

                function kc(t, e) {
                    e = e || {}, this.options = o(e, hc.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = bb(this), this.touchAction = new Pb(this, this.options.touchAction), lc(this, !0), m(e.recognizers, function(t) {
                        var e = this.add(new t[0](t[1]));
                        t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                    }, this)
                }

                function lc(t, e) {
                    var n = t.element;
                    m(t.options.cssProps, function(t, i) {
                        n.style[B(n.style, i)] = e ? t : ""
                    })
                }

                function mc(t, e) {
                    var n = f.createEvent("Event");
                    n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
                }
                var T = ["", "webkit", "moz", "MS", "ms", "o"],
                    C = f.createElement("div"),
                    S = "function",
                    _ = Math.round,
                    P = Math.abs,
                    O = Date.now,
                    N = 1,
                    M = /mobile|tablet|ip(ad|hone|od)|android/i,
                    I = "ontouchstart" in c,
                    R = B(c, "PointerEvent") !== b,
                    L = I && M.test(navigator.userAgent),
                    F = "touch",
                    H = "mouse",
                    j = 25,
                    W = 1,
                    V = 2,
                    X = 4,
                    $ = 8,
                    Y = 1,
                    U = 2,
                    Q = 4,
                    G = 8,
                    K = 16,
                    J = U | Q,
                    Z = G | K,
                    tt = J | Z,
                    et = ["x", "y"],
                    nt = ["clientX", "clientY"];
                ab.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && t(this.element, this.evEl, this.domHandler), this.evTarget && t(this.target, this.evTarget, this.domHandler), this.evWin && t(E(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && u(this.element, this.evEl, this.domHandler), this.evTarget && u(this.target, this.evTarget, this.domHandler), this.evWin && u(E(this.element), this.evWin, this.domHandler)
                    }
                };
                var it = {
                        mousedown: W,
                        mousemove: V,
                        mouseup: X
                    },
                    rt = "mousedown",
                    ot = "mousemove mouseup";
                p(rb, ab, {
                    handler: function(t) {
                        var e = it[t.type];
                        e & W && 0 === t.button && (this.pressed = !0), e & V && 1 !== t.which && (e = X), this.pressed && this.allow && (e & X && (this.pressed = !1), this.callback(this.manager, e, {
                            pointers: [t],
                            changedPointers: [t],
                            pointerType: H,
                            srcEvent: t
                        }))
                    }
                });
                var at = {
                        pointerdown: W,
                        pointermove: V,
                        pointerup: X,
                        pointercancel: $,
                        pointerout: $
                    },
                    st = {
                        2: F,
                        3: "pen",
                        4: H,
                        5: "kinect"
                    },
                    lt = "pointerdown",
                    ut = "pointermove pointerup pointercancel";
                c.MSPointerEvent && (lt = "MSPointerDown", ut = "MSPointerMove MSPointerUp MSPointerCancel"), p(wb, ab, {
                    handler: function(t) {
                        var e = this.store,
                            n = !1,
                            i = t.type.toLowerCase().replace("ms", ""),
                            r = at[i],
                            o = st[t.pointerType] || t.pointerType,
                            a = o == F,
                            s = y(e, t.pointerId, "pointerId");
                        r & W && (0 === t.button || a) ? 0 > s && (e.push(t), s = e.length - 1) : r & (X | $) && (n = !0), 0 > s || (e[s] = t, this.callback(this.manager, r, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: o,
                            srcEvent: t
                        }), n && e.splice(s, 1))
                    }
                });
                var ct = {
                        touchstart: W,
                        touchmove: V,
                        touchend: X,
                        touchcancel: $
                    },
                    dt = "touchstart",
                    ft = "touchstart touchmove touchend touchcancel";
                p(Ab, ab, {
                    handler: function(t) {
                        var e = ct[t.type];
                        if (e === W && (this.started = !0), this.started) {
                            var n = Bb.call(this, t, e);
                            e & (X | $) && 0 == n[0].length - n[1].length && (this.started = !1), this.callback(this.manager, e, {
                                pointers: n[0],
                                changedPointers: n[1],
                                pointerType: F,
                                srcEvent: t
                            })
                        }
                    }
                });
                var ht = {
                        touchstart: W,
                        touchmove: V,
                        touchend: X,
                        touchcancel: $
                    },
                    pt = "touchstart touchmove touchend touchcancel";
                p(Eb, ab, {
                    handler: function(t) {
                        var e = ht[t.type],
                            n = Fb.call(this, t, e);
                        n && this.callback(this.manager, e, {
                            pointers: n[0],
                            changedPointers: n[1],
                            pointerType: F,
                            srcEvent: t
                        })
                    }
                }), p(Gb, ab, {
                    handler: function(t, e, n) {
                        var i = n.pointerType == F,
                            r = n.pointerType == H;
                        if (i) this.mouse.allow = !1;
                        else if (r && !this.mouse.allow) return;
                        e & (X | $) && (this.mouse.allow = !0), this.callback(t, e, n)
                    },
                    destroy: function() {
                        this.touch.destroy(), this.mouse.destroy()
                    }
                });
                var gt = B(C.style, "touchAction"),
                    vt = gt !== b,
                    mt = "compute",
                    yt = "auto",
                    bt = "manipulation",
                    wt = "none",
                    xt = "pan-x",
                    Tt = "pan-y";
                Pb.prototype = {
                    set: function(t) {
                        t == mt && (t = this.compute()), vt && (this.manager.element.style[gt] = t), this.actions = t.toLowerCase().trim()
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var t = [];
                        return m(this.manager.recognizers, function(e) {
                            r(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                        }), Qb(t.join(" "))
                    },
                    preventDefaults: function(t) {
                        if (!vt) {
                            var e = t.srcEvent,
                                n = t.offsetDirection;
                            if (this.manager.session.prevented) return void e.preventDefault();
                            var i = this.actions,
                                r = w(i, wt),
                                o = w(i, Tt),
                                a = w(i, xt);
                            return r || o && n & J || a && n & Z ? this.preventSrc(e) : void 0
                        }
                    },
                    preventSrc: function(t) {
                        this.manager.session.prevented = !0, t.preventDefault()
                    }
                };
                var Ct = 1,
                    kt = 2,
                    Et = 4,
                    St = 8,
                    _t = St,
                    At = 16;
                Yb.prototype = {
                    defaults: {},
                    set: function(t) {
                        return n(this.options, t), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function(t) {
                        if (l(t, "recognizeWith", this)) return this;
                        var e = this.simultaneous;
                        return t = _b(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function(t) {
                        return l(t, "dropRecognizeWith", this) ? this : (t = _b(t, this), delete this.simultaneous[t.id], this)
                    },
                    requireFailure: function(t) {
                        if (l(t, "requireFailure", this)) return this;
                        var e = this.requireFail;
                        return t = _b(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
                    },
                    dropRequireFailure: function(t) {
                        if (l(t, "dropRequireFailure", this)) return this;
                        t = _b(t, this);
                        var e = y(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1), this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(t) {
                        return !!this.simultaneous[t.id]
                    },
                    emit: function(t) {
                        function d(i) {
                            e.manager.emit(e.options.event + (i ? Zb(n) : ""), t)
                        }
                        var e = this,
                            n = this.state;
                        St > n && d(!0), d(), n >= St && d(!0)
                    },
                    tryEmit: function(t) {
                        return this.canEmit() ? this.emit(t) : void(this.state = 32)
                    },
                    canEmit: function() {
                        for (var t = 0; t < this.requireFail.length;) {
                            if (!(this.requireFail[t].state & (32 | Ct))) return !1;
                            t++
                        }
                        return !0
                    },
                    recognize: function(t) {
                        var e = n({}, t);
                        return r(this.options.enable, [this, e]) ? (this.state & (_t | At | 32) && (this.state = Ct), this.state = this.process(e), void(this.state & (kt | Et | St | At) && this.tryEmit(e))) : (this.reset(), void(this.state = 32))
                    },
                    process: function() {},
                    getTouchAction: function() {},
                    reset: function() {}
                }, p(ac, Yb, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e
                    },
                    process: function(t) {
                        var e = this.state,
                            n = t.eventType,
                            i = e & (kt | Et),
                            r = this.attrTest(t);
                        return i && (n & $ || !r) ? e | At : i || r ? n & X ? e | St : e & kt ? e | Et : kt : 32
                    }
                }), p(bc, ac, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: tt
                    },
                    getTouchAction: function() {
                        var t = this.options.direction,
                            e = [];
                        return t & J && e.push(Tt), t & Z && e.push(xt), e
                    },
                    directionTest: function(t) {
                        var e = this.options,
                            n = !0,
                            i = t.distance,
                            r = t.direction,
                            o = t.deltaX,
                            a = t.deltaY;
                        return r & e.direction || (e.direction & J ? (r = 0 === o ? Y : 0 > o ? U : Q, n = o != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === a ? Y : 0 > a ? G : K, n = a != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
                    },
                    attrTest: function(t) {
                        return ac.prototype.attrTest.call(this, t) && (this.state & kt || !(this.state & kt) && this.directionTest(t))
                    },
                    emit: function(t) {
                        this.pX = t.deltaX, this.pY = t.deltaY;
                        var e = $b(t.direction);
                        e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
                    }
                }), p(cc, ac, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [wt]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & kt)
                    },
                    emit: function(t) {
                        if (this._super.emit.call(this, t), 1 !== t.scale) {
                            var e = t.scale < 1 ? "in" : "out";
                            this.manager.emit(this.options.event + e, t)
                        }
                    }
                }), p(dc, Yb, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 500,
                        threshold: 5
                    },
                    getTouchAction: function() {
                        return [yt]
                    },
                    process: function(t) {
                        var e = this.options,
                            n = t.pointers.length === e.pointers,
                            i = t.distance < e.threshold,
                            r = t.deltaTime > e.time;
                        if (this._input = t, !i || !n || t.eventType & (X | $) && !r) this.reset();
                        else if (t.eventType & W) this.reset(), this._timer = k(function() {
                            this.state = _t, this.tryEmit()
                        }, e.time, this);
                        else if (t.eventType & X) return _t;
                        return 32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(t) {
                        this.state === _t && (t && t.eventType & X ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = O(), this.manager.emit(this.options.event, this._input)))
                    }
                }), p(ec, ac, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [wt]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & kt)
                    }
                }), p(fc, ac, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .65,
                        direction: J | Z,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return bc.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(t) {
                        var e, n = this.options.direction;
                        return n & (J | Z) ? e = t.velocity : n & J ? e = t.velocityX : n & Z && (e = t.velocityY), this._super.attrTest.call(this, t) && n & t.direction && t.distance > this.options.threshold && P(e) > this.options.velocity && t.eventType & X
                    },
                    emit: function(t) {
                        var e = $b(t.direction);
                        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                    }
                }), p(gc, Yb, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 2,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return [bt]
                    },
                    process: function(t) {
                        var e = this.options,
                            n = t.pointers.length === e.pointers,
                            i = t.distance < e.threshold,
                            r = t.deltaTime < e.time;
                        if (this.reset(), t.eventType & W && 0 === this.count) return this.failTimeout();
                        if (i && r && n) {
                            if (t.eventType != X) return this.failTimeout();
                            var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                                a = !this.pCenter || kb(this.pCenter, t.center) < e.posThreshold;
                            this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
                            if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = k(function() {
                                this.state = _t, this.tryEmit()
                            }, e.interval, this), kt) : _t
                        }
                        return 32
                    },
                    failTimeout: function() {
                        return this._timer = k(function() {
                            this.state = 32
                        }, this.options.interval, this), 32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        this.state == _t && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                    }
                }), hc.VERSION = "2.0.4", hc.defaults = {
                    domEvents: !1,
                    touchAction: mt,
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [
                        [ec, {
                            enable: !1
                        }],
                        [cc, {
                                enable: !1
                            },
                            ["rotate"]
                        ],
                        [fc, {
                            direction: J
                        }],
                        [bc, {
                                direction: J
                            },
                            ["swipe"]
                        ],
                        [gc],
                        [gc, {
                                event: "doubletap",
                                taps: 2
                            },
                            ["tap"]
                        ],
                        [dc]
                    ],
                    cssProps: {
                        userSelect: "default",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                };
                kc.prototype = {
                    set: function(t) {
                        return n(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                    },
                    stop: function(t) {
                        this.session.stopped = t ? 2 : 1
                    },
                    recognize: function(t) {
                        var e = this.session;
                        if (!e.stopped) {
                            this.touchAction.preventDefaults(t);
                            var n, i = this.recognizers,
                                r = e.curRecognizer;
                            (!r || r && r.state & _t) && (r = e.curRecognizer = null);
                            for (var o = 0; o < i.length;) n = i[o], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (kt | Et | St) && (r = e.curRecognizer = n), o++
                        }
                    },
                    get: function(t) {
                        if (t instanceof Yb) return t;
                        for (var e = this.recognizers, n = 0; n < e.length; n++)
                            if (e[n].options.event == t) return e[n];
                        return null
                    },
                    add: function(t) {
                        if (l(t, "add", this)) return this;
                        var e = this.get(t.options.event);
                        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                    },
                    remove: function(t) {
                        if (l(t, "remove", this)) return this;
                        var e = this.recognizers;
                        return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this
                    },
                    on: function(t, e) {
                        var n = this.handlers;
                        return m(x(t), function(t) {
                            n[t] = n[t] || [], n[t].push(e)
                        }), this
                    },
                    off: function(t, e) {
                        var n = this.handlers;
                        return m(x(t), function(t) {
                            e ? n[t].splice(y(n[t], e), 1) : delete n[t]
                        }), this
                    },
                    emit: function(t, e) {
                        this.options.domEvents && mc(t, e);
                        var n = this.handlers[t] && this.handlers[t].slice();
                        if (n && n.length) {
                            e.type = t, e.preventDefault = function() {
                                e.srcEvent.preventDefault()
                            };
                            for (var i = 0; i < n.length;) n[i](e), i++
                        }
                    },
                    destroy: function() {
                        this.element && lc(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                    }
                }, n(hc, {
                    INPUT_START: W,
                    INPUT_MOVE: V,
                    INPUT_END: X,
                    INPUT_CANCEL: $,
                    STATE_POSSIBLE: Ct,
                    STATE_BEGAN: kt,
                    STATE_CHANGED: Et,
                    STATE_ENDED: St,
                    STATE_RECOGNIZED: _t,
                    STATE_CANCELLED: At,
                    STATE_FAILED: 32,
                    DIRECTION_NONE: Y,
                    DIRECTION_LEFT: U,
                    DIRECTION_RIGHT: Q,
                    DIRECTION_UP: G,
                    DIRECTION_DOWN: K,
                    DIRECTION_HORIZONTAL: J,
                    DIRECTION_VERTICAL: Z,
                    DIRECTION_ALL: tt,
                    Manager: kc,
                    Input: ab,
                    TouchAction: Pb,
                    TouchInput: Eb,
                    MouseInput: rb,
                    PointerEventInput: wb,
                    TouchMouseInput: Gb,
                    SingleTouchInput: Ab,
                    Recognizer: Yb,
                    AttrRecognizer: ac,
                    Tap: gc,
                    Pan: bc,
                    Swipe: fc,
                    Pinch: cc,
                    Rotate: ec,
                    Press: dc,
                    on: t,
                    off: u,
                    each: m,
                    merge: o,
                    extend: n,
                    inherit: p,
                    bindFn: q,
                    prefixed: B
                }), "function" == S && a(80) ? void 0 !== (g = function() {
                    return hc
                }.call(i, a, i, e)) && (e.exports = g) : void 0 !== e && e.exports ? e.exports = hc : c.Hammer = hc
            }(window, document),
            function(t) {
                b = [a(0), a(79)], h = t, void 0 !== (g = "function" == typeof h ? h.apply(i, b) : h) && (e.exports = g)
            }(function(t, e) {
                function hammerify(n, i) {
                    var r = t(n);
                    r.data("hammer") || r.data("hammer", new e(r[0], i))
                }
                t.fn.hammer = function(t) {
                    return this.each(function() {
                        hammerify(this, t)
                    })
                }, e.Manager.prototype.emit = function(e) {
                    return function(n, i) {
                        e.call(this, n, i), t(this.element).trigger({
                            type: n,
                            gesture: i
                        })
                    }
                }(e.Manager.prototype.emit)
            }),
            function(t) {
                t.Package ? Materialize = {} : t.Materialize = {}
            }(window),
            function(t) {
                for (var e = 0, n = ["webkit", "moz"], i = t.requestAnimationFrame, r = t.cancelAnimationFrame, o = n.length; --o >= 0 && !i;) i = t[n[o] + "RequestAnimationFrame"], r = t[n[o] + "CancelRequestAnimationFrame"];
                i && r || (i = function(t) {
                    var n = +Date.now(),
                        i = Math.max(e + 16, n);
                    return setTimeout(function() {
                        t(e = i)
                    }, i - n)
                }, r = clearTimeout), t.requestAnimationFrame = i, t.cancelAnimationFrame = r
            }(window), Materialize.objectSelectorString = function(t) {
                return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "")
            }, Materialize.guid = function() {
                function s4() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return function() {
                    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4()
                }
            }(), Materialize.escapeHash = function(t) {
                return t.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
            }, Materialize.elementOrParentIsFixed = function(t) {
                var e = d(t),
                    n = e.add(e.parents()),
                    i = !1;
                return n.each(function() {
                    if ("fixed" === d(this).css("position")) return i = !0, !1
                }), i
            };
        var S = Date.now || function() {
            return (new Date).getTime()
        };
        Materialize.throttle = function(t, e, n) {
            var i, r, o, a = null,
                s = 0;
            n || (n = {});
            var l = function() {
                s = !1 === n.leading ? 0 : S(), a = null, o = t.apply(i, r), i = r = null
            };
            return function() {
                var u = S();
                s || !1 !== n.leading || (s = u);
                var c = e - (u - s);
                return i = this, r = arguments, c <= 0 ? (clearTimeout(a), a = null, s = u, o = t.apply(i, r), i = r = null) : a || !1 === n.trailing || (a = setTimeout(l, c)), o
            }
        };
        var _;
        _ = C ? C.Velocity : d ? d.Velocity : Velocity,
            function(t) {
                t.fn.collapsible = function(e, n) {
                    var i = {
                            accordion: void 0,
                            onOpen: void 0,
                            onClose: void 0
                        },
                        r = e;
                    return e = t.extend(i, e), this.each(function() {
                        function accordionOpen(e) {
                            o = i.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                                duration: 350,
                                easing: "easeOutQuart",
                                queue: !1,
                                complete: function() {
                                    t(this).css("height", "")
                                }
                            }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                                duration: 350,
                                easing: "easeOutQuart",
                                queue: !1,
                                complete: function() {
                                    t(this).css("height", "")
                                }
                            }), o.not(e).removeClass("active").parent().removeClass("active"), o.not(e).parent().children(".collapsible-body").stop(!0, !1).each(function() {
                                t(this).is(":visible") && t(this).slideUp({
                                    duration: 350,
                                    easing: "easeOutQuart",
                                    queue: !1,
                                    complete: function() {
                                        t(this).css("height", ""), execCallbacks(t(this).siblings(".collapsible-header"))
                                    }
                                })
                            })
                        }

                        function expandableOpen(e) {
                            e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                                duration: 350,
                                easing: "easeOutQuart",
                                queue: !1,
                                complete: function() {
                                    t(this).css("height", "")
                                }
                            }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                                duration: 350,
                                easing: "easeOutQuart",
                                queue: !1,
                                complete: function() {
                                    t(this).css("height", "")
                                }
                            })
                        }

                        function collapsibleOpen(t, n) {
                            n || t.toggleClass("active"), e.accordion || "accordion" === a || void 0 === a ? accordionOpen(t) : expandableOpen(t), execCallbacks(t)
                        }

                        function execCallbacks(t) {
                            t.hasClass("active") ? "function" == typeof e.onOpen && e.onOpen.call(this, t.parent()) : "function" == typeof e.onClose && e.onClose.call(this, t.parent())
                        }

                        function isChildrenOfPanelHeader(t) {
                            return getPanelHeader(t).length > 0
                        }

                        function getPanelHeader(t) {
                            return t.closest("li > .collapsible-header")
                        }

                        function removeEventHandlers() {
                            i.off("click.collapse", "> li > .collapsible-header")
                        }
                        var i = t(this),
                            o = t(this).find("> li > .collapsible-header"),
                            a = i.data("collapsible");
                        if ("destroy" === r) return void removeEventHandlers();
                        if (n >= 0 && n < o.length) {
                            var s = o.eq(n);
                            return void(s.length && ("open" === r || "close" === r && s.hasClass("active")) && collapsibleOpen(s))
                        }
                        removeEventHandlers(), i.on("click.collapse", "> li > .collapsible-header", function(e) {
                            var n = t(e.target);
                            isChildrenOfPanelHeader(n) && (n = getPanelHeader(n)), collapsibleOpen(n)
                        }), e.accordion || "accordion" === a || void 0 === a ? collapsibleOpen(o.filter(".active").first(), !0) : o.filter(".active").each(function() {
                            collapsibleOpen(t(this), !0)
                        })
                    })
                }, t(document).ready(function() {
                    t(".collapsible").collapsible()
                })
            }(C),
            function(t) {
                t.fn.scrollTo = function(e) {
                    return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this
                }, t.fn.dropdown = function(e) {
                    var n = {
                        inDuration: 300,
                        outDuration: 225,
                        constrainWidth: !0,
                        hover: !1,
                        gutter: 0,
                        belowOrigin: !1,
                        alignment: "left",
                        stopPropagation: !1
                    };
                    return "open" === e ? (this.each(function() {
                        t(this).trigger("open")
                    }), !1) : "close" === e ? (this.each(function() {
                        t(this).trigger("close")
                    }), !1) : void this.each(function() {
                        function updateOptions() {
                            void 0 !== i.data("induration") && (r.inDuration = i.data("induration")), void 0 !== i.data("outduration") && (r.outDuration = i.data("outduration")), void 0 !== i.data("constrainwidth") && (r.constrainWidth = i.data("constrainwidth")), void 0 !== i.data("hover") && (r.hover = i.data("hover")), void 0 !== i.data("gutter") && (r.gutter = i.data("gutter")), void 0 !== i.data("beloworigin") && (r.belowOrigin = i.data("beloworigin")), void 0 !== i.data("alignment") && (r.alignment = i.data("alignment")), void 0 !== i.data("stoppropagation") && (r.stopPropagation = i.data("stoppropagation"))
                        }

                        function placeDropdown(e) {
                            "focus" === e && (o = !0), updateOptions(), a.addClass("active"), i.addClass("active"), !0 === r.constrainWidth ? a.css("width", i.outerWidth()) : a.css("white-space", "nowrap");
                            var n = window.innerHeight,
                                s = i.innerHeight(),
                                l = i.offset().left,
                                u = i.offset().top - t(window).scrollTop(),
                                c = r.alignment,
                                d = 0,
                                f = 0,
                                h = 0;
                            !0 === r.belowOrigin && (h = s);
                            var p = 0,
                                g = 0,
                                v = i.parent();
                            if (v.is("body") || (v[0].scrollHeight > v[0].clientHeight && (p = v[0].scrollTop), v[0].scrollWidth > v[0].clientWidth && (g = v[0].scrollLeft)), l + a.innerWidth() > t(window).width() ? c = "right" : l - a.innerWidth() + i.innerWidth() < 0 && (c = "left"), u + a.innerHeight() > n)
                                if (u + s - a.innerHeight() < 0) {
                                    var m = n - u - h;
                                    a.css("max-height", m)
                                } else h || (h += s), h -= a.innerHeight();
                            if ("left" === c) d = r.gutter, f = i.position().left + d;
                            else if ("right" === c) {
                                var y = i.position().left + i.outerWidth() - a.outerWidth();
                                d = -r.gutter, f = y + d
                            }
                            a.css({
                                position: "absolute",
                                top: i.position().top + h + p,
                                left: f + g
                            }), a.stop(!0, !0).css("opacity", 0).slideDown({
                                queue: !1,
                                duration: r.inDuration,
                                easing: "easeOutCubic",
                                complete: function() {
                                    t(this).css("height", "")
                                }
                            }).animate({
                                opacity: 1
                            }, {
                                queue: !1,
                                duration: r.inDuration,
                                easing: "easeOutSine"
                            }), setTimeout(function() {
                                t(document).bind("click." + a.attr("id"), function(e) {
                                    hideDropdown(), t(document).unbind("click." + a.attr("id"))
                                })
                            }, 0)
                        }

                        function hideDropdown() {
                            o = !1, a.fadeOut(r.outDuration), a.removeClass("active"), i.removeClass("active"), t(document).unbind("click." + a.attr("id")), setTimeout(function() {
                                a.css("max-height", "")
                            }, r.outDuration)
                        }
                        var i = t(this),
                            r = t.extend({}, n, e),
                            o = !1,
                            a = t("#" + i.attr("data-activates"));
                        if (updateOptions(), i.after(a), r.hover) {
                            var s = !1;
                            i.unbind("click." + i.attr("id")), i.on("mouseenter", function(t) {
                                !1 === s && (placeDropdown(), s = !0)
                            }), i.on("mouseleave", function(e) {
                                var n = e.toElement || e.relatedTarget;
                                t(n).closest(".dropdown-content").is(a) || (a.stop(!0, !0), hideDropdown(), s = !1)
                            }), a.on("mouseleave", function(e) {
                                var n = e.toElement || e.relatedTarget;
                                t(n).closest(".dropdown-button").is(i) || (a.stop(!0, !0), hideDropdown(), s = !1)
                            })
                        } else i.unbind("click." + i.attr("id")), i.bind("click." + i.attr("id"), function(e) {
                            o || (i[0] != e.currentTarget || i.hasClass("active") || 0 !== t(e.target).closest(".dropdown-content").length ? i.hasClass("active") && (hideDropdown(), t(document).unbind("click." + a.attr("id"))) : (e.preventDefault(), r.stopPropagation && e.stopPropagation(), placeDropdown("click")))
                        });
                        i.on("open", function(t, e) {
                            placeDropdown(e)
                        }), i.on("close", hideDropdown)
                    })
                }, t(document).ready(function() {
                    t(".dropdown-button").dropdown()
                })
            }(C),
            function(t) {
                var e = 0,
                    n = 0,
                    i = function() {
                        return "materialize-modal-overlay-" + ++n
                    },
                    r = {
                        init: function(n) {
                            var r = {
                                opacity: .5,
                                inDuration: 350,
                                outDuration: 250,
                                ready: void 0,
                                complete: void 0,
                                dismissible: !0,
                                startingTop: "4%",
                                endingTop: "10%"
                            };
                            return n = t.extend(r, n), this.each(function() {
                                var r = t(this),
                                    o = t(this).attr("id") || "#" + t(this).data("target"),
                                    a = function() {
                                        var i = r.data("overlay-id"),
                                            o = t("#" + i);
                                        r.removeClass("open"), t("body").css({
                                            overflow: "",
                                            width: ""
                                        }), r.find(".modal-close").off("click.close"), t(document).off("keyup.modal" + i), o.velocity({
                                            opacity: 0
                                        }, {
                                            duration: n.outDuration,
                                            queue: !1,
                                            ease: "easeOutQuart"
                                        });
                                        var a = {
                                            duration: n.outDuration,
                                            queue: !1,
                                            ease: "easeOutCubic",
                                            complete: function() {
                                                t(this).css({
                                                    display: "none"
                                                }), "function" == typeof n.complete && n.complete.call(this, r), o.remove(), e--
                                            }
                                        };
                                        r.hasClass("bottom-sheet") ? r.velocity({
                                            bottom: "-100%",
                                            opacity: 0
                                        }, a) : r.velocity({
                                            top: n.startingTop,
                                            opacity: 0,
                                            scaleX: .7
                                        }, a)
                                    },
                                    s = function(o) {
                                        var s = t("body"),
                                            l = s.innerWidth();
                                        if (s.css("overflow", "hidden"), s.width(l), !r.hasClass("open")) {
                                            var u = i(),
                                                c = t('<div class="modal-overlay"></div>');
                                            lStack = ++e, c.attr("id", u).css("z-index", 1e3 + 2 * lStack), r.data("overlay-id", u).css("z-index", 1e3 + 2 * lStack + 1), r.addClass("open"), t("body").append(c), n.dismissible && (c.click(function() {
                                                a()
                                            }), t(document).on("keyup.modal" + u, function(t) {
                                                27 === t.keyCode && a()
                                            })), r.find(".modal-close").on("click.close", function(t) {
                                                a()
                                            }), c.css({
                                                display: "block",
                                                opacity: 0
                                            }), r.css({
                                                display: "block",
                                                opacity: 0
                                            }), c.velocity({
                                                opacity: n.opacity
                                            }, {
                                                duration: n.inDuration,
                                                queue: !1,
                                                ease: "easeOutCubic"
                                            }), r.data("associated-overlay", c[0]);
                                            var d = {
                                                duration: n.inDuration,
                                                queue: !1,
                                                ease: "easeOutCubic",
                                                complete: function() {
                                                    "function" == typeof n.ready && n.ready.call(this, r, o)
                                                }
                                            };
                                            r.hasClass("bottom-sheet") ? r.velocity({
                                                bottom: "0",
                                                opacity: 1
                                            }, d) : (t.Velocity.hook(r, "scaleX", .7), r.css({
                                                top: n.startingTop
                                            }), r.velocity({
                                                top: n.endingTop,
                                                opacity: 1,
                                                scaleX: "1"
                                            }, d))
                                        }
                                    };
                                t(document).off("click.modalTrigger", 'a[href="#' + o + '"], [data-target="' + o + '"]'), t(this).off("openModal"), t(this).off("closeModal"), t(document).on("click.modalTrigger", 'a[href="#' + o + '"], [data-target="' + o + '"]', function(e) {
                                    n.startingTop = (t(this).offset().top - t(window).scrollTop()) / 1.15, s(t(this)), e.preventDefault()
                                }), t(this).on("openModal", function() {
                                    t(this).attr("href") || t(this).data("target");
                                    s()
                                }), t(this).on("closeModal", function() {
                                    a()
                                })
                            })
                        },
                        open: function() {
                            t(this).trigger("openModal")
                        },
                        close: function() {
                            t(this).trigger("closeModal")
                        }
                    };
                t.fn.modal = function(e) {
                    return r[e] ? r[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.modal") : r.init.apply(this, arguments)
                }
            }(C),
            function(t) {
                t.fn.materialbox = function() {
                    return this.each(function() {
                        function returnToOriginal() {
                            r = !1;
                            var n = a.parent(".material-placeholder"),
                                s = (window.innerWidth, window.innerHeight, a.data("width")),
                                u = a.data("height");
                            a.velocity("stop", !0), t("#materialbox-overlay").velocity("stop", !0), t(".materialbox-caption").velocity("stop", !0), t("#materialbox-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: o,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    i = !1, t(this).remove()
                                }
                            }), a.velocity({
                                width: s,
                                height: u,
                                left: 0,
                                top: 0
                            }, {
                                duration: o,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    n.css({
                                        height: "",
                                        width: "",
                                        position: "",
                                        top: "",
                                        left: ""
                                    }), a.removeAttr("style"), a.attr("style", l), a.removeClass("active"), r = !0, e && e.css("overflow", "")
                                }
                            }), t(".materialbox-caption").velocity({
                                opacity: 0
                            }, {
                                duration: o,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    t(this).remove()
                                }
                            })
                        }
                        if (!t(this).hasClass("initialized")) {
                            t(this).addClass("initialized");
                            var e, n, i = !1,
                                r = !0,
                                o = 200,
                                a = t(this),
                                s = t("<div></div>").addClass("material-placeholder"),
                                l = a.attr("style");
                            a.wrap(s), a.on("click", function() {
                                var o = a.parent(".material-placeholder"),
                                    s = window.innerWidth,
                                    l = window.innerHeight,
                                    u = a.width(),
                                    c = a.height();
                                if (!1 === r) return returnToOriginal(), !1;
                                if (i && !0 === r) return returnToOriginal(), !1;
                                r = !1, a.addClass("active"), i = !0, o.css({
                                    width: o[0].getBoundingClientRect().width,
                                    height: o[0].getBoundingClientRect().height,
                                    position: "relative",
                                    top: 0,
                                    left: 0
                                }), e = void 0, n = o[0].parentNode;
                                for (; null !== n && !t(n).is(document);) {
                                    var d = t(n);
                                    "visible" !== d.css("overflow") && (d.css("overflow", "visible"), e = void 0 === e ? d : e.add(d)), n = n.parentNode
                                }
                                a.css({
                                    position: "absolute",
                                    "z-index": 1e3,
                                    "will-change": "left, top, width, height"
                                }).data("width", u).data("height", c);
                                var f = t('<div id="materialbox-overlay"></div>').css({
                                    opacity: 0
                                }).click(function() {
                                    !0 === r && returnToOriginal()
                                });
                                a.before(f);
                                var h = f[0].getBoundingClientRect();
                                if (f.css({
                                        width: s,
                                        height: l,
                                        left: -1 * h.left,
                                        top: -1 * h.top
                                    }), f.velocity({
                                        opacity: 1
                                    }, {
                                        duration: 275,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }), "" !== a.data("caption")) {
                                    var p = t('<div class="materialbox-caption"></div>');
                                    p.text(a.data("caption")), t("body").append(p), p.css({
                                        display: "inline"
                                    }), p.velocity({
                                        opacity: 1
                                    }, {
                                        duration: 275,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    })
                                }
                                var g = 0,
                                    v = u / s,
                                    m = c / l,
                                    y = 0,
                                    b = 0;
                                v > m ? (g = c / u, y = .9 * s, b = .9 * s * g) : (g = u / c, y = .9 * l * g, b = .9 * l), a.hasClass("responsive-img") ? a.velocity({
                                    "max-width": y,
                                    width: u
                                }, {
                                    duration: 0,
                                    queue: !1,
                                    complete: function() {
                                        a.css({
                                            left: 0,
                                            top: 0
                                        }).velocity({
                                            height: b,
                                            width: y,
                                            left: t(document).scrollLeft() + s / 2 - a.parent(".material-placeholder").offset().left - y / 2,
                                            top: t(document).scrollTop() + l / 2 - a.parent(".material-placeholder").offset().top - b / 2
                                        }, {
                                            duration: 275,
                                            queue: !1,
                                            easing: "easeOutQuad",
                                            complete: function() {
                                                r = !0
                                            }
                                        })
                                    }
                                }) : a.css("left", 0).css("top", 0).velocity({
                                    height: b,
                                    width: y,
                                    left: t(document).scrollLeft() + s / 2 - a.parent(".material-placeholder").offset().left - y / 2,
                                    top: t(document).scrollTop() + l / 2 - a.parent(".material-placeholder").offset().top - b / 2
                                }, {
                                    duration: 275,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        r = !0
                                    }
                                })
                            }), t(window).scroll(function() {
                                i && returnToOriginal()
                            }), t(document).keyup(function(t) {
                                27 === t.keyCode && !0 === r && i && returnToOriginal()
                            })
                        }
                    })
                }, t(document).ready(function() {
                    t(".materialboxed").materialbox()
                })
            }(C),
            function(t) {
                t.fn.parallax = function() {
                    var e = t(window).width();
                    return this.each(function(n) {
                        function updateParallax(n) {
                            var r;
                            r = e < 601 ? i.height() > 0 ? i.height() : i.children("img").height() : i.height() > 0 ? i.height() : 500;
                            var o = i.children("img").first(),
                                a = o.height(),
                                s = a - r,
                                l = i.offset().top + r,
                                u = i.offset().top,
                                c = t(window).scrollTop(),
                                d = window.innerHeight,
                                f = c + d,
                                h = (f - u) / (r + d),
                                p = Math.round(s * h);
                            n && o.css("display", "block"), l > c && u < c + d && o.css("transform", "translate3D(-50%," + p + "px, 0)")
                        }
                        var i = t(this);
                        i.addClass("parallax"), i.children("img").one("load", function() {
                            updateParallax(!0)
                        }).each(function() {
                            this.complete && t(this).trigger("load")
                        }), t(window).scroll(function() {
                            e = t(window).width(), updateParallax(!1)
                        }), t(window).resize(function() {
                            e = t(window).width(), updateParallax(!1)
                        })
                    })
                }
            }(C),
            function(t) {
                var e = {
                    init: function(e) {
                        var n = {
                            onShow: null,
                            swipeable: !1,
                            responsiveThreshold: 1 / 0
                        };
                        e = t.extend(n, e);
                        var i = Materialize.objectSelectorString(t(this));
                        return this.each(function(n) {
                            var r, o, a, s, l, u = i + n,
                                c = t(this),
                                d = t(window).width(),
                                f = c.find("li.tab a"),
                                h = c.width(),
                                p = t(),
                                g = Math.max(h, c[0].scrollWidth) / f.length,
                                v = prev_index = 0,
                                m = !1,
                                y = function(t) {
                                    return Math.ceil(h - t.position().left - t.outerWidth() - c.scrollLeft())
                                },
                                b = function(t) {
                                    return Math.floor(t.position().left + c.scrollLeft())
                                },
                                w = function(t) {
                                    v - t >= 0 ? (s.velocity({
                                        right: y(r)
                                    }, {
                                        duration: 300,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }), s.velocity({
                                        left: b(r)
                                    }, {
                                        duration: 300,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        delay: 90
                                    })) : (s.velocity({
                                        left: b(r)
                                    }, {
                                        duration: 300,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }), s.velocity({
                                        right: y(r)
                                    }, {
                                        duration: 300,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        delay: 90
                                    }))
                                };
                            e.swipeable && d > e.responsiveThreshold && (e.swipeable = !1), r = t(f.filter('[href="' + location.hash + '"]')), 0 === r.length && (r = t(this).find("li.tab a.active").first()), 0 === r.length && (r = t(this).find("li.tab a").first()), r.addClass("active"), v = f.index(r), v < 0 && (v = 0), void 0 !== r[0] && (o = t(r[0].hash), o.addClass("active")), c.find(".indicator").length || c.append('<div class="indicator"></div>'), s = c.find(".indicator"), c.append(s), c.is(":visible") && setTimeout(function() {
                                s.css({
                                    right: y(r)
                                }), s.css({
                                    left: b(r)
                                })
                            }, 0), t(window).off("resize.tabs-" + u).on("resize.tabs-" + u, function() {
                                h = c.width(), g = Math.max(h, c[0].scrollWidth) / f.length, v < 0 && (v = 0), 0 !== g && 0 !== h && (s.css({
                                    right: y(r)
                                }), s.css({
                                    left: b(r)
                                }))
                            }), e.swipeable ? (f.each(function() {
                                var e = t(Materialize.escapeHash(this.hash));
                                e.addClass("carousel-item"), p = p.add(e)
                            }), a = p.wrapAll('<div class="tabs-content carousel"></div>'), p.css("display", ""), t(".tabs-content.carousel").carousel({
                                fullWidth: !0,
                                noWrap: !0,
                                onCycleTo: function(t) {
                                    if (!m) {
                                        var e = v;
                                        v = a.index(t), r = f.eq(v), w(e)
                                    }
                                }
                            })) : f.not(r).each(function() {
                                t(Materialize.escapeHash(this.hash)).hide()
                            }), c.off("click.tabs").on("click.tabs", "a", function(n) {
                                if (t(this).parent().hasClass("disabled")) return void n.preventDefault();
                                if (!t(this).attr("target")) {
                                    m = !0, h = c.width(), g = Math.max(h, c[0].scrollWidth) / f.length, r.removeClass("active");
                                    var i = o;
                                    r = t(this), o = t(Materialize.escapeHash(this.hash)), f = c.find("li.tab a");
                                    r.position();
                                    r.addClass("active"), prev_index = v, v = f.index(t(this)), v < 0 && (v = 0), e.swipeable ? p.length && p.carousel("set", v) : (void 0 !== o && (o.show(), o.addClass("active"), "function" == typeof e.onShow && e.onShow.call(this, o)), void 0 === i || i.is(o) || (i.hide(), i.removeClass("active"))), l = setTimeout(function() {
                                        m = !1
                                    }, 300), w(prev_index), n.preventDefault()
                                }
                            })
                        })
                    },
                    select_tab: function(t) {
                        this.find('a[href="#' + t + '"]').trigger("click")
                    }
                };
                t.fn.tabs = function(n) {
                    return e[n] ? e[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.tabs") : e.init.apply(this, arguments)
                }, t(document).ready(function() {
                    t("ul.tabs").tabs()
                })
            }(C),
            function(t) {
                t.fn.tooltip = function(n) {
                    var i = {
                        delay: 350,
                        tooltip: "",
                        position: "bottom",
                        html: !1
                    };
                    return "remove" === n ? (this.each(function() {
                        t("#" + t(this).attr("data-tooltip-id")).remove(), t(this).off("mouseenter.tooltip mouseleave.tooltip")
                    }), !1) : (n = t.extend(i, n), this.each(function() {
                        var i = Materialize.guid(),
                            r = t(this);
                        r.attr("data-tooltip-id") && t("#" + r.attr("data-tooltip-id")).remove(), r.attr("data-tooltip-id", i);
                        var o, a, s, l, u, c, d = function() {
                            o = r.attr("data-html") ? "true" === r.attr("data-html") : n.html, a = r.attr("data-delay"), a = void 0 === a || "" === a ? n.delay : a, s = r.attr("data-position"), s = void 0 === s || "" === s ? n.position : s, l = r.attr("data-tooltip"), l = void 0 === l || "" === l ? n.tooltip : l
                        };
                        d();
                        u = function() {
                            var e = t('<div class="material-tooltip"></div>');
                            return l = o ? t("<span></span>").html(l) : t("<span></span>").text(l), e.append(l).appendTo(t("body")).attr("id", i), c = t('<div class="backdrop"></div>'), c.appendTo(e), e
                        }(), r.off("mouseenter.tooltip mouseleave.tooltip");
                        var f, h = !1;
                        r.on({
                            "mouseenter.tooltip": function(t) {
                                var n = function() {
                                    d(), h = !0, u.velocity("stop"), c.velocity("stop"), u.css({
                                        visibility: "visible",
                                        left: "0px",
                                        top: "0px"
                                    });
                                    var t, n, i, o = r.outerWidth(),
                                        a = r.outerHeight(),
                                        l = u.outerHeight(),
                                        f = u.outerWidth(),
                                        p = "0px",
                                        g = "0px",
                                        v = c[0].offsetWidth,
                                        m = c[0].offsetHeight,
                                        y = 8,
                                        b = 8,
                                        w = 0;
                                    "top" === s ? (t = r.offset().top - l - 5, n = r.offset().left + o / 2 - f / 2, i = e(n, t, f, l), p = "-10px", c.css({
                                        bottom: 0,
                                        left: 0,
                                        borderRadius: "14px 14px 0 0",
                                        transformOrigin: "50% 100%",
                                        marginTop: l,
                                        marginLeft: f / 2 - v / 2
                                    })) : "left" === s ? (t = r.offset().top + a / 2 - l / 2, n = r.offset().left - f - 5, i = e(n, t, f, l), g = "-10px", c.css({
                                        top: "-7px",
                                        right: 0,
                                        width: "14px",
                                        height: "14px",
                                        borderRadius: "14px 0 0 14px",
                                        transformOrigin: "95% 50%",
                                        marginTop: l / 2,
                                        marginLeft: f
                                    })) : "right" === s ? (t = r.offset().top + a / 2 - l / 2, n = r.offset().left + o + 5, i = e(n, t, f, l), g = "+10px", c.css({
                                        top: "-7px",
                                        left: 0,
                                        width: "14px",
                                        height: "14px",
                                        borderRadius: "0 14px 14px 0",
                                        transformOrigin: "5% 50%",
                                        marginTop: l / 2,
                                        marginLeft: "0px"
                                    })) : (t = r.offset().top + r.outerHeight() + 5, n = r.offset().left + o / 2 - f / 2, i = e(n, t, f, l), p = "+10px", c.css({
                                        top: 0,
                                        left: 0,
                                        marginLeft: f / 2 - v / 2
                                    })), u.css({
                                        top: i.y,
                                        left: i.x
                                    }), y = Math.SQRT2 * f / parseInt(v), b = Math.SQRT2 * l / parseInt(m), w = Math.max(y, b), u.velocity({
                                        translateY: p,
                                        translateX: g
                                    }, {
                                        duration: 350,
                                        queue: !1
                                    }).velocity({
                                        opacity: 1
                                    }, {
                                        duration: 300,
                                        delay: 50,
                                        queue: !1
                                    }), c.css({
                                        visibility: "visible"
                                    }).velocity({
                                        opacity: 1
                                    }, {
                                        duration: 55,
                                        delay: 0,
                                        queue: !1
                                    }).velocity({
                                        scaleX: w,
                                        scaleY: w
                                    }, {
                                        duration: 300,
                                        delay: 0,
                                        queue: !1,
                                        easing: "easeInOutQuad"
                                    })
                                };
                                f = setTimeout(n, a)
                            },
                            "mouseleave.tooltip": function() {
                                h = !1, clearTimeout(f), setTimeout(function() {
                                    !0 !== h && (u.velocity({
                                        opacity: 0,
                                        translateY: 0,
                                        translateX: 0
                                    }, {
                                        duration: 225,
                                        queue: !1
                                    }), c.velocity({
                                        opacity: 0,
                                        scaleX: 1,
                                        scaleY: 1
                                    }, {
                                        duration: 225,
                                        queue: !1,
                                        complete: function() {
                                            c.css({
                                                visibility: "hidden"
                                            }), u.css({
                                                visibility: "hidden"
                                            }), h = !1
                                        }
                                    }))
                                }, 225)
                            }
                        })
                    }))
                };
                var e = function(e, n, i, r) {
                    var o = e,
                        a = n;
                    return o < 0 ? o = 4 : o + i > window.innerWidth && (o -= o + i - window.innerWidth), a < 0 ? a = 4 : a + r > window.innerHeight + t(window).scrollTop && (a -= a + r - window.innerHeight), {
                        x: o,
                        y: a
                    }
                };
                t(document).ready(function() {
                    t(".tooltipped").tooltip()
                })
            }(C),
            function(t) {
                "use strict";

                function isWindow(t) {
                    return null !== t && t === t.window
                }

                function getWindow(t) {
                    return isWindow(t) ? t : 9 === t.nodeType && t.defaultView
                }

                function offset(t) {
                    var e, n, i = {
                            top: 0,
                            left: 0
                        },
                        r = t && t.ownerDocument;
                    return e = r.documentElement, void 0 !== t.getBoundingClientRect && (i = t.getBoundingClientRect()), n = getWindow(r), {
                        top: i.top + n.pageYOffset - e.clientTop,
                        left: i.left + n.pageXOffset - e.clientLeft
                    }
                }

                function convertStyle(t) {
                    var e = "";
                    for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
                    return e
                }

                function getWavesEffectElement(t) {
                    if (!1 === r.allowEvent(t)) return null;
                    for (var e = null, n = t.target || t.srcElement; null !== n.parentElement;) {
                        if (!(n instanceof SVGElement || -1 === n.className.indexOf("waves-effect"))) {
                            e = n;
                            break
                        }
                        if (n.classList.contains("waves-effect")) {
                            e = n;
                            break
                        }
                        n = n.parentElement
                    }
                    return e
                }

                function showEffect(e) {
                    var n = getWavesEffectElement(e);
                    null !== n && (i.show(e, n), "ontouchstart" in t && (n.addEventListener("touchend", i.hide, !1), n.addEventListener("touchcancel", i.hide, !1)), n.addEventListener("mouseup", i.hide, !1), n.addEventListener("mouseleave", i.hide, !1))
                }
                var e = e || {},
                    n = document.querySelectorAll.bind(document),
                    i = {
                        duration: 750,
                        show: function(t, e) {
                            if (2 === t.button) return !1;
                            var n = e || this,
                                r = document.createElement("div");
                            r.className = "waves-ripple", n.appendChild(r);
                            var o = offset(n),
                                a = t.pageY - o.top,
                                s = t.pageX - o.left,
                                l = "scale(" + n.clientWidth / 100 * 10 + ")";
                            "touches" in t && (a = t.touches[0].pageY - o.top, s = t.touches[0].pageX - o.left), r.setAttribute("data-hold", Date.now()), r.setAttribute("data-scale", l), r.setAttribute("data-x", s), r.setAttribute("data-y", a);
                            var u = {
                                top: a + "px",
                                left: s + "px"
                            };
                            r.className = r.className + " waves-notransition", r.setAttribute("style", convertStyle(u)), r.className = r.className.replace("waves-notransition", ""), u["-webkit-transform"] = l, u["-moz-transform"] = l, u["-ms-transform"] = l, u["-o-transform"] = l, u.transform = l, u.opacity = "1", u["-webkit-transition-duration"] = i.duration + "ms", u["-moz-transition-duration"] = i.duration + "ms", u["-o-transition-duration"] = i.duration + "ms", u["transition-duration"] = i.duration + "ms", u["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", u["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", u["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", u["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", r.setAttribute("style", convertStyle(u))
                        },
                        hide: function(t) {
                            r.touchup(t);
                            var e = this,
                                n = (e.clientWidth, null),
                                o = e.getElementsByClassName("waves-ripple");
                            if (!(o.length > 0)) return !1;
                            n = o[o.length - 1];
                            var a = n.getAttribute("data-x"),
                                s = n.getAttribute("data-y"),
                                l = n.getAttribute("data-scale"),
                                u = Date.now() - Number(n.getAttribute("data-hold")),
                                c = 350 - u;
                            c < 0 && (c = 0), setTimeout(function() {
                                var t = {
                                    top: s + "px",
                                    left: a + "px",
                                    opacity: "0",
                                    "-webkit-transition-duration": i.duration + "ms",
                                    "-moz-transition-duration": i.duration + "ms",
                                    "-o-transition-duration": i.duration + "ms",
                                    "transition-duration": i.duration + "ms",
                                    "-webkit-transform": l,
                                    "-moz-transform": l,
                                    "-ms-transform": l,
                                    "-o-transform": l,
                                    transform: l
                                };
                                n.setAttribute("style", convertStyle(t)), setTimeout(function() {
                                    try {
                                        e.removeChild(n)
                                    } catch (t) {
                                        return !1
                                    }
                                }, i.duration)
                            }, c)
                        },
                        wrapInput: function(t) {
                            for (var e = 0; e < t.length; e++) {
                                var n = t[e];
                                if ("input" === n.tagName.toLowerCase()) {
                                    var i = n.parentNode;
                                    if ("i" === i.tagName.toLowerCase() && -1 !== i.className.indexOf("waves-effect")) continue;
                                    var r = document.createElement("i");
                                    r.className = n.className + " waves-input-wrapper";
                                    var o = n.getAttribute("style");
                                    o || (o = ""), r.setAttribute("style", o), n.className = "waves-button-input", n.removeAttribute("style"), i.replaceChild(r, n), r.appendChild(n)
                                }
                            }
                        }
                    },
                    r = {
                        touches: 0,
                        allowEvent: function(t) {
                            var e = !0;
                            return "touchstart" === t.type ? r.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
                                r.touches > 0 && (r.touches -= 1)
                            }, 500) : "mousedown" === t.type && r.touches > 0 && (e = !1), e
                        },
                        touchup: function(t) {
                            r.allowEvent(t)
                        }
                    };
                e.displayEffect = function(e) {
                    e = e || {}, "duration" in e && (i.duration = e.duration), i.wrapInput(n(".waves-effect")), "ontouchstart" in t && document.body.addEventListener("touchstart", showEffect, !1), document.body.addEventListener("mousedown", showEffect, !1)
                }, e.attach = function(e) {
                    "input" === e.tagName.toLowerCase() && (i.wrapInput([e]), e = e.parentElement), "ontouchstart" in t && e.addEventListener("touchstart", showEffect, !1), e.addEventListener("mousedown", showEffect, !1)
                }, t.Waves = e, document.addEventListener("DOMContentLoaded", function() {
                    e.displayEffect()
                }, !1)
            }(window), Materialize.toast = function(t, e, n, i) {
                n = n || "";
                var r = document.getElementById("toast-container");
                null === r && (r = document.createElement("div"), r.id = "toast-container", document.body.appendChild(r));
                var o = function(t) {
                    var e = document.createElement("div");
                    if (e.classList.add("toast"), n)
                        for (var r = n.split(" "), o = 0, a = r.length; o < a; o++) e.classList.add(r[o]);
                    ("object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) ? e.appendChild(t): t instanceof C ? e.appendChild(t[0]) : e.innerHTML = t;
                    var s = new Hammer(e, {
                        prevent_default: !1
                    });
                    return s.on("pan", function(t) {
                        var n = t.deltaX;
                        e.classList.contains("panning") || e.classList.add("panning");
                        var i = 1 - Math.abs(n / 80);
                        i < 0 && (i = 0), _(e, {
                            left: n,
                            opacity: i
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }), s.on("panend", function(t) {
                        var n = t.deltaX;
                        Math.abs(n) > 80 ? _(e, {
                            marginTop: "-40px"
                        }, {
                            duration: 375,
                            easing: "easeOutExpo",
                            queue: !1,
                            complete: function() {
                                "function" == typeof i && i(), e.parentNode.removeChild(e)
                            }
                        }) : (e.classList.remove("panning"), _(e, {
                            left: 0,
                            opacity: 1
                        }, {
                            duration: 300,
                            easing: "easeOutExpo",
                            queue: !1
                        }))
                    }), e
                }(t);
                t && r.appendChild(o), o.style.opacity = 0, _(o, {
                    translateY: "-35px",
                    opacity: 1
                }, {
                    duration: 300,
                    easing: "easeOutCubic",
                    queue: !1
                });
                var a, s = e;
                null != s && (a = setInterval(function() {
                    null === o.parentNode && window.clearInterval(a), o.classList.contains("panning") || (s -= 20), s <= 0 && (_(o, {
                        opacity: 0,
                        marginTop: "-40px"
                    }, {
                        duration: 375,
                        easing: "easeOutExpo",
                        queue: !1,
                        complete: function() {
                            "function" == typeof i && i(), this[0].parentNode.removeChild(this[0])
                        }
                    }), window.clearInterval(a))
                }, 20))
            },
            function(t) {
                var e = {
                    init: function(e) {
                        var n = {
                            menuWidth: 300,
                            edge: "left",
                            closeOnClick: !1,
                            draggable: !0
                        };
                        e = t.extend(n, e), t(this).each(function() {
                            var n = t(this),
                                i = n.attr("data-activates"),
                                r = t("#" + i);
                            300 != e.menuWidth && r.css("width", e.menuWidth);
                            var o = t('.drag-target[data-sidenav="' + i + '"]');
                            e.draggable ? (o.length && o.remove(), o = t('<div class="drag-target"></div>').attr("data-sidenav", i), t("body").append(o)) : o = t(), "left" == e.edge ? (r.css("transform", "translateX(-100%)"), o.css({
                                left: 0
                            })) : (r.addClass("right-aligned").css("transform", "translateX(100%)"), o.css({
                                right: 0
                            })), r.hasClass("fixed") && window.innerWidth > 992 && r.css("transform", "translateX(0)"), r.hasClass("fixed") && t(window).resize(function() {
                                window.innerWidth > 992 ? 0 !== t("#sidenav-overlay").length && l ? a(!0) : r.css("transform", "translateX(0%)") : !1 === l && ("left" === e.edge ? r.css("transform", "translateX(-100%)") : r.css("transform", "translateX(100%)"))
                            }), !0 === e.closeOnClick && r.on("click.itemclick", "a:not(.collapsible-header)", function() {
                                a()
                            });
                            var a = function(n) {
                                    s = !1, l = !1, t("body").css({
                                        overflow: "",
                                        width: ""
                                    }), t("#sidenav-overlay").velocity({
                                        opacity: 0
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        complete: function() {
                                            t(this).remove()
                                        }
                                    }), "left" === e.edge ? (o.css({
                                        width: "",
                                        right: "",
                                        left: "0"
                                    }), r.velocity({
                                        translateX: "-100%"
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutCubic",
                                        complete: function() {
                                            !0 === n && (r.removeAttr("style"), r.css("width", e.menuWidth))
                                        }
                                    })) : (o.css({
                                        width: "",
                                        right: "0",
                                        left: ""
                                    }), r.velocity({
                                        translateX: "100%"
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutCubic",
                                        complete: function() {
                                            !0 === n && (r.removeAttr("style"), r.css("width", e.menuWidth))
                                        }
                                    }))
                                },
                                s = !1,
                                l = !1;
                            e.draggable && (o.on("click", function() {
                                l && a()
                            }), o.hammer({
                                prevent_default: !1
                            }).bind("pan", function(n) {
                                if ("touch" == n.gesture.pointerType) {
                                    var i = (n.gesture.direction, n.gesture.center.x),
                                        o = (n.gesture.center.y, n.gesture.velocityX, t("body")),
                                        s = t("#sidenav-overlay"),
                                        u = o.innerWidth();
                                    if (o.css("overflow", "hidden"), o.width(u), 0 === s.length && (s = t('<div id="sidenav-overlay"></div>'), s.css("opacity", 0).click(function() {
                                            a()
                                        }), t("body").append(s)), "left" === e.edge && (i > e.menuWidth ? i = e.menuWidth : i < 0 && (i = 0)), "left" === e.edge) i < e.menuWidth / 2 ? l = !1 : i >= e.menuWidth / 2 && (l = !0), r.css("transform", "translateX(" + (i - e.menuWidth) + "px)");
                                    else {
                                        i < window.innerWidth - e.menuWidth / 2 ? l = !0 : i >= window.innerWidth - e.menuWidth / 2 && (l = !1);
                                        var c = i - e.menuWidth / 2;
                                        c < 0 && (c = 0), r.css("transform", "translateX(" + c + "px)")
                                    }
                                    var d;
                                    "left" === e.edge ? (d = i / e.menuWidth, s.velocity({
                                        opacity: d
                                    }, {
                                        duration: 10,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    })) : (d = Math.abs((i - window.innerWidth) / e.menuWidth), s.velocity({
                                        opacity: d
                                    }, {
                                        duration: 10,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }))
                                }
                            }).bind("panend", function(n) {
                                if ("touch" == n.gesture.pointerType) {
                                    var i = t("#sidenav-overlay"),
                                        a = n.gesture.velocityX,
                                        u = n.gesture.center.x,
                                        c = u - e.menuWidth,
                                        d = u - e.menuWidth / 2;
                                    c > 0 && (c = 0), d < 0 && (d = 0), s = !1, "left" === e.edge ? l && a <= .3 || a < -.5 ? (0 !== c && r.velocity({
                                        translateX: [0, c]
                                    }, {
                                        duration: 300,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }), i.velocity({
                                        opacity: 1
                                    }, {
                                        duration: 50,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }), o.css({
                                        width: "50%",
                                        right: 0,
                                        left: ""
                                    }), l = !0) : (!l || a > .3) && (t("body").css({
                                        overflow: "",
                                        width: ""
                                    }), r.velocity({
                                        translateX: [-1 * e.menuWidth - 10, c]
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }), i.velocity({
                                        opacity: 0
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        complete: function() {
                                            t(this).remove()
                                        }
                                    }), o.css({
                                        width: "10px",
                                        right: "",
                                        left: 0
                                    })) : l && a >= -.3 || a > .5 ? (0 !== d && r.velocity({
                                        translateX: [0, d]
                                    }, {
                                        duration: 300,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }), i.velocity({
                                        opacity: 1
                                    }, {
                                        duration: 50,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }), o.css({
                                        width: "50%",
                                        right: "",
                                        left: 0
                                    }), l = !0) : (!l || a < -.3) && (t("body").css({
                                        overflow: "",
                                        width: ""
                                    }), r.velocity({
                                        translateX: [e.menuWidth + 10, d]
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }), i.velocity({
                                        opacity: 0
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        complete: function() {
                                            t(this).remove()
                                        }
                                    }), o.css({
                                        width: "10px",
                                        right: 0,
                                        left: ""
                                    }))
                                }
                            })), n.off("click.sidenav").on("click.sidenav", function() {
                                if (!0 === l) l = !1, s = !1, a();
                                else {
                                    var n = t("body"),
                                        i = t('<div id="sidenav-overlay"></div>'),
                                        u = n.innerWidth();
                                    n.css("overflow", "hidden"), n.width(u), t("body").append(o), "left" === e.edge ? (o.css({
                                        width: "50%",
                                        right: 0,
                                        left: ""
                                    }), r.velocity({
                                        translateX: [0, -1 * e.menuWidth]
                                    }, {
                                        duration: 300,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    })) : (o.css({
                                        width: "50%",
                                        right: "",
                                        left: 0
                                    }), r.velocity({
                                        translateX: [0, e.menuWidth]
                                    }, {
                                        duration: 300,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    })), i.css("opacity", 0).click(function() {
                                        l = !1, s = !1, a(), i.velocity({
                                            opacity: 0
                                        }, {
                                            duration: 300,
                                            queue: !1,
                                            easing: "easeOutQuad",
                                            complete: function() {
                                                t(this).remove()
                                            }
                                        })
                                    }), t("body").append(i), i.velocity({
                                        opacity: 1
                                    }, {
                                        duration: 300,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        complete: function() {
                                            l = !0, s = !1
                                        }
                                    })
                                }
                                return !1
                            })
                        })
                    },
                    destroy: function() {
                        var e = t("#sidenav-overlay"),
                            n = t('.drag-target[data-sidenav="' + t(this).attr("data-activates") + '"]');
                        e.trigger("click"), n.remove(), t(this).off("click"), e.remove()
                    },
                    show: function() {
                        this.trigger("click")
                    },
                    hide: function() {
                        t("#sidenav-overlay").trigger("click")
                    }
                };
                t.fn.sideNav = function(n) {
                    return e[n] ? e[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments)
                }
            }(C),
            function(t) {
                function findElements(e, i, r, o) {
                    var a = t();
                    return t.each(n, function(t, n) {
                        if (n.height() > 0) {
                            var s = n.offset().top,
                                l = n.offset().left,
                                u = l + n.width(),
                                c = s + n.height();
                            !(l > i || u < o || s > r || c < e) && a.push(n)
                        }
                    }), a
                }

                function onScroll(n) {
                    ++o;
                    var r = e.scrollTop(),
                        s = e.scrollLeft(),
                        l = s + e.width(),
                        u = r + e.height(),
                        c = findElements(r + a.top + n || 200, l + a.right, u + a.bottom, s + a.left);
                    t.each(c, function(t, e) {
                        "number" != typeof e.data("scrollSpy:ticks") && e.triggerHandler("scrollSpy:enter"), e.data("scrollSpy:ticks", o)
                    }), t.each(i, function(t, e) {
                        var n = e.data("scrollSpy:ticks");
                        "number" == typeof n && n !== o && (e.triggerHandler("scrollSpy:exit"), e.data("scrollSpy:ticks", null))
                    }), i = c
                }

                function onWinSize() {
                    e.trigger("scrollSpy:winSize")
                }
                var e = t(window),
                    n = [],
                    i = [],
                    r = !1,
                    o = 0,
                    a = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                t.scrollSpy = function(i, o) {
                    var s = {
                        throttle: 100,
                        scrollOffset: 200
                    };
                    o = t.extend(s, o);
                    var l = [];
                    i = t(i), i.each(function(e, i) {
                        n.push(t(i)), t(i).data("scrollSpy:id", e), t('a[href="#' + t(i).attr("id") + '"]').click(function(e) {
                            e.preventDefault();
                            var n = t(Materialize.escapeHash(this.hash)).offset().top + 1;
                            t("html, body").animate({
                                scrollTop: n - o.scrollOffset
                            }, {
                                duration: 400,
                                queue: !1,
                                easing: "easeOutCubic"
                            })
                        })
                    }), a.top = o.offsetTop || 0, a.right = o.offsetRight || 0, a.bottom = o.offsetBottom || 0, a.left = o.offsetLeft || 0;
                    var u = Materialize.throttle(function() {
                            onScroll(o.scrollOffset)
                        }, o.throttle || 100),
                        c = function() {
                            t(document).ready(u)
                        };
                    return r || (e.on("scroll", c), e.on("resize", c), r = !0), setTimeout(c, 0), i.on("scrollSpy:enter", function() {
                        l = t.grep(l, function(t) {
                            return 0 != t.height()
                        });
                        var e = t(this);
                        l[0] ? (t('a[href="#' + l[0].attr("id") + '"]').removeClass("active"), e.data("scrollSpy:id") < l[0].data("scrollSpy:id") ? l.unshift(t(this)) : l.push(t(this))) : l.push(t(this)), t('a[href="#' + l[0].attr("id") + '"]').addClass("active")
                    }), i.on("scrollSpy:exit", function() {
                        if (l = t.grep(l, function(t) {
                                return 0 != t.height()
                            }), l[0]) {
                            t('a[href="#' + l[0].attr("id") + '"]').removeClass("active");
                            var e = t(this);
                            l = t.grep(l, function(t) {
                                return t.attr("id") != e.attr("id")
                            }), l[0] && t('a[href="#' + l[0].attr("id") + '"]').addClass("active")
                        }
                    }), i
                }, t.winSizeSpy = function(n) {
                    return t.winSizeSpy = function() {
                        return e
                    }, n = n || {
                        throttle: 100
                    }, e.on("resize", Materialize.throttle(onWinSize, n.throttle || 100))
                }, t.fn.scrollSpy = function(e) {
                    return t.scrollSpy(t(this), e)
                }
            }(C),
            function(t) {
                t(document).ready(function() {
                    function textareaAutoResize(e) {
                        var i = e.css("font-family"),
                            r = e.css("font-size"),
                            o = e.css("line-height");
                        r && n.css("font-size", r), i && n.css("font-family", i), o && n.css("line-height", o), "off" === e.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text(e.val() + "\n");
                        var a = n.html().replace(/\n/g, "<br>");
                        n.html(a), e.is(":visible") ? n.css("width", e.width()) : n.css("width", t(window).width() / 2), e.data("original-height") <= n.height() ? e.css("height", n.height()) : e.val().length < e.data("previous-length") && e.css("height", e.data("original-height")), e.data("previous-length", e.val().length)
                    }
                    Materialize.updateTextFields = function() {
                        t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(e, n) {
                            var i = t(this);
                            t(n).val().length > 0 || n.autofocus || void 0 !== i.attr("placeholder") ? i.siblings("label").addClass("active") : t(n)[0].validity ? i.siblings("label").toggleClass("active", !0 === t(n)[0].validity.badInput) : i.siblings("label").removeClass("active")
                        })
                    };
                    var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
                    t(document).on("change", e, function() {
                        0 === t(this).val().length && void 0 === t(this).attr("placeholder") || t(this).siblings("label").addClass("active"), validate_field(t(this))
                    }), t(document).ready(function() {
                        Materialize.updateTextFields()
                    }), t(document).on("reset", function(n) {
                        var i = t(n.target);
                        i.is("form") && (i.find(e).removeClass("valid").removeClass("invalid"), i.find(e).each(function() {
                            "" === t(this).attr("value") && t(this).siblings("label").removeClass("active")
                        }), i.find("select.initialized").each(function() {
                            var t = i.find("option[selected]").text();
                            i.siblings("input.select-dropdown").val(t)
                        }))
                    }), t(document).on("focus", e, function() {
                        t(this).siblings("label, .prefix").addClass("active")
                    }), t(document).on("blur", e, function() {
                        var e = t(this),
                            n = ".prefix";
                        0 === e.val().length && !0 !== e[0].validity.badInput && void 0 === e.attr("placeholder") && (n += ", label"), e.siblings(n).removeClass("active"), validate_field(e)
                    }), window.validate_field = function(t) {
                        var e = void 0 !== t.attr("data-length"),
                            n = parseInt(t.attr("data-length")),
                            i = t.val().length;
                        0 === t.val().length && !1 === t[0].validity.badInput ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && i <= n || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")))
                    };
                    t(document).on("keyup.radio", "input[type=radio], input[type=checkbox]", function(e) {
                        if (9 === e.which) {
                            t(this).addClass("tabbed");
                            return void t(this).one("blur", function(e) {
                                t(this).removeClass("tabbed")
                            })
                        }
                    });
                    var n = t(".hiddendiv").first();
                    n.length || (n = t('<div class="hiddendiv common"></div>'), t("body").append(n));
                    t(".materialize-textarea").each(function() {
                        var e = t(this);
                        e.data("original-height", e.height()), e.data("previous-length", e.val().length)
                    }), t("body").on("keyup keydown autoresize", ".materialize-textarea", function() {
                        textareaAutoResize(t(this))
                    }), t(document).on("change", '.file-field input[type="file"]', function() {
                        for (var e = t(this).closest(".file-field"), n = e.find("input.file-path"), i = t(this)[0].files, r = [], o = 0; o < i.length; o++) r.push(i[o].name);
                        n.val(r.join(", ")), n.trigger("change")
                    });
                    var i = "input[type=range]",
                        r = !1;
                    t(i).each(function() {
                        var e = t('<span class="thumb"><span class="value"></span></span>');
                        t(this).after(e)
                    });
                    var o = function(t) {
                            var e = parseInt(t.parent().css("padding-left")),
                                n = -7 + e + "px";
                            t.velocity({
                                height: "30px",
                                width: "30px",
                                top: "-30px",
                                marginLeft: n
                            }, {
                                duration: 300,
                                easing: "easeOutExpo"
                            })
                        },
                        a = function(t) {
                            var e = t.width() - 15,
                                n = parseFloat(t.attr("max")),
                                i = parseFloat(t.attr("min"));
                            return (parseFloat(t.val()) - i) / (n - i) * e
                        };
                    t(document).on("change", i, function(e) {
                        var n = t(this).siblings(".thumb");
                        n.find(".value").html(t(this).val()), n.hasClass("active") || o(n);
                        var i = a(t(this));
                        n.addClass("active").css("left", i)
                    }), t(document).on("mousedown touchstart", i, function(e) {
                        var n = t(this).siblings(".thumb");
                        if (n.length <= 0 && (n = t('<span class="thumb"><span class="value"></span></span>'), t(this).after(n)), n.find(".value").html(t(this).val()), r = !0, t(this).addClass("active"), n.hasClass("active") || o(n), "input" !== e.type) {
                            var i = a(t(this));
                            n.addClass("active").css("left", i)
                        }
                    }), t(document).on("mouseup touchend", ".range-field", function() {
                        r = !1, t(this).removeClass("active")
                    }), t(document).on("input mousemove touchmove", ".range-field", function(e) {
                        var n = t(this).children(".thumb"),
                            s = t(this).find(i);
                        if (r) {
                            n.hasClass("active") || o(n);
                            var l = a(s);
                            n.addClass("active").css("left", l), n.find(".value").html(n.siblings(i).val())
                        }
                    }), t(document).on("mouseout touchleave", ".range-field", function() {
                        if (!r) {
                            var e = t(this).children(".thumb"),
                                n = parseInt(t(this).css("padding-left")),
                                i = 7 + n + "px";
                            e.hasClass("active") && e.velocity({
                                height: "0",
                                width: "0",
                                top: "10px",
                                marginLeft: i
                            }, {
                                duration: 100
                            }), e.removeClass("active")
                        }
                    }), t.fn.autocomplete = function(e) {
                        var n = {
                            data: {},
                            limit: 1 / 0,
                            onAutocomplete: null,
                            minLength: 1
                        };
                        return e = t.extend(n, e), this.each(function() {
                            var n, i = t(this),
                                r = e.data,
                                o = 0,
                                a = -1,
                                s = i.closest(".input-field");
                            if (!t.isEmptyObject(r)) {
                                var l, u = t('<ul class="autocomplete-content dropdown-content"></ul>');
                                s.length ? (l = s.children(".autocomplete-content.dropdown-content").first(), l.length || s.append(u)) : (l = i.next(".autocomplete-content.dropdown-content"), l.length || i.after(u)), l.length && (u = l);
                                var c = function(t, e) {
                                        var n = e.find("img"),
                                            i = e.text().toLowerCase().indexOf("" + t.toLowerCase()),
                                            r = i + t.length - 1,
                                            o = e.text().slice(0, i),
                                            a = e.text().slice(i, r + 1),
                                            s = e.text().slice(r + 1);
                                        e.html("<span>" + o + "<span class='highlight'>" + a + "</span>" + s + "</span>"), n.length && e.prepend(n)
                                    },
                                    d = function() {
                                        a = -1, u.find(".active").removeClass("active")
                                    },
                                    f = function() {
                                        u.empty(), d(), n = void 0
                                    };
                                i.off("blur.autocomplete").on("blur.autocomplete", function() {
                                    f()
                                }), i.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", function(a) {
                                    o = 0;
                                    var s = i.val().toLowerCase();
                                    if (13 !== a.which && 38 !== a.which && 40 !== a.which) {
                                        if (n !== s && (f(), s.length >= e.minLength))
                                            for (var l in r)
                                                if (r.hasOwnProperty(l) && -1 !== l.toLowerCase().indexOf(s) && l.toLowerCase() !== s) {
                                                    if (o >= e.limit) break;
                                                    var d = t("<li></li>");
                                                    r[l] ? d.append('<img src="' + r[l] + '" class="right circle"><span>' + l + "</span>") : d.append("<span>" + l + "</span>"), u.append(d), c(s, d), o++
                                                }
                                        n = s
                                    }
                                }), i.off("keydown.autocomplete").on("keydown.autocomplete", function(t) {
                                    var e, n = t.which,
                                        i = u.children("li").length,
                                        r = u.children(".active").first();
                                    if (13 === n && a >= 0) return e = u.children("li").eq(a), void(e.length && (e.trigger("mousedown.autocomplete"), t.preventDefault()));
                                    38 !== n && 40 !== n || (t.preventDefault(), 38 === n && a > 0 && a--, 40 === n && a < i - 1 && a++, r.removeClass("active"), a >= 0 && u.children("li").eq(a).addClass("active"))
                                }), u.on("mousedown.autocomplete touchstart.autocomplete", "li", function() {
                                    var n = t(this).text().trim();
                                    i.val(n), i.trigger("change"), f(), "function" == typeof e.onAutocomplete && e.onAutocomplete.call(this, n)
                                })
                            }
                        })
                    }
                }), t.fn.material_select = function(e) {
                    function toggleEntryFromArray(t, e, n) {
                        var i = t.indexOf(e),
                            r = -1 === i;
                        return r ? t.push(e) : t.splice(i, 1), n.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(e).toggleClass("active"), n.find("option").eq(e).prop("selected", r), setValueToInput(t, n), r
                    }

                    function setValueToInput(t, e) {
                        for (var n = "", i = 0, r = t.length; i < r; i++) {
                            var o = e.find("option").eq(t[i]).text();
                            n += 0 === i ? o : ", " + o
                        }
                        "" === n && (n = e.find("option:disabled").eq(0).text()), e.siblings("input.select-dropdown").val(n)
                    }
                    t(this).each(function() {
                        var n = t(this);
                        if (!n.hasClass("browser-default")) {
                            var i = !!n.attr("multiple"),
                                r = n.data("select-id");
                            if (r && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), t("ul#select-options-" + r).remove()), "destroy" === e) return void n.data("select-id", null).removeClass("initialized");
                            var o = Materialize.guid();
                            n.data("select-id", o);
                            var a = t('<div class="select-wrapper"></div>');
                            a.addClass(n.attr("class"));
                            var s = t('<ul id="select-options-' + o + '" class="dropdown-content select-dropdown ' + (i ? "multiple-select-dropdown" : "") + '"></ul>'),
                                l = n.children("option, optgroup"),
                                u = [],
                                c = !1,
                                d = n.find("option:selected").html() || n.find("option:first").html() || "",
                                f = function(e, n, r) {
                                    var o = n.is(":disabled") ? "disabled " : "",
                                        a = "optgroup-option" === r ? "optgroup-option " : "",
                                        l = i ? '<input type="checkbox"' + o + "/><label></label>" : "",
                                        u = n.data("icon"),
                                        c = n.attr("class");
                                    if (u) {
                                        var d = "";
                                        return c && (d = ' class="' + c + '"'), s.append(t('<li class="' + o + a + '"><img alt="" src="' + u + '"' + d + "><span>" + l + n.html() + "</span></li>")), !0
                                    }
                                    s.append(t('<li class="' + o + a + '"><span>' + l + n.html() + "</span></li>"))
                                };
                            l.length && l.each(function() {
                                if (t(this).is("option")) i ? f(0, t(this), "multiple") : f(0, t(this));
                                else if (t(this).is("optgroup")) {
                                    var e = t(this).children("option");
                                    s.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")), e.each(function() {
                                        f(0, t(this), "optgroup-option")
                                    })
                                }
                            }), s.find("li:not(.optgroup)").each(function(r) {
                                t(this).click(function(o) {
                                    if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
                                        var a = !0;
                                        i ? (t('input[type="checkbox"]', this).prop("checked", function(t, e) {
                                            return !e
                                        }), a = toggleEntryFromArray(u, r, n), g.trigger("focus")) : (s.find("li").removeClass("active"), t(this).toggleClass("active"), g.val(t(this).text())), v(s, t(this)), n.find("option").eq(r).prop("selected", a), n.trigger("change"), void 0 !== e && e()
                                    }
                                    o.stopPropagation()
                                })
                            }), n.wrap(a);
                            var h = t('<span class="caret">&#9660;</span>');
                            n.is(":disabled") && h.addClass("disabled");
                            var p = d.replace(/"/g, "&quot;"),
                                g = t('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + o + '" value="' + p + '"/>');
                            n.before(g), g.before(h), g.after(s), n.is(":disabled") || g.dropdown({
                                hover: !1
                            }), n.attr("tabindex") && t(g[0]).attr("tabindex", n.attr("tabindex")), n.addClass("initialized"), g.on({
                                focus: function() {
                                    if (t("ul.select-dropdown").not(s[0]).is(":visible") && t("input.select-dropdown").trigger("close"), !s.is(":visible")) {
                                        t(this).trigger("open", ["focus"]);
                                        var e = t(this).val();
                                        i && e.indexOf(",") >= 0 && (e = e.split(",")[0]);
                                        var n = s.find("li").filter(function() {
                                            return t(this).text().toLowerCase() === e.toLowerCase()
                                        })[0];
                                        v(s, n, !0)
                                    }
                                },
                                click: function(t) {
                                    t.stopPropagation()
                                }
                            }), g.on("blur", function() {
                                i || t(this).trigger("close"), s.find("li.selected").removeClass("selected")
                            }), s.hover(function() {
                                c = !0
                            }, function() {
                                c = !1
                            }), t(window).on({
                                click: function() {
                                    i && (c || g.trigger("close"))
                                }
                            }), i && n.find("option:selected:not(:disabled)").each(function() {
                                var e = t(this).index();
                                toggleEntryFromArray(u, e, n), s.find("li").eq(e).find(":checkbox").prop("checked", !0)
                            });
                            var v = function(e, n, r) {
                                    if (n) {
                                        e.find("li.selected").removeClass("selected");
                                        var o = t(n);
                                        o.addClass("selected"), i && !r || s.scrollTo(o)
                                    }
                                },
                                m = [],
                                y = function(e) {
                                    if (9 == e.which) return void g.trigger("close");
                                    if (40 == e.which && !s.is(":visible")) return void g.trigger("open");
                                    if (13 != e.which || s.is(":visible")) {
                                        e.preventDefault();
                                        var n = String.fromCharCode(e.which).toLowerCase(),
                                            r = [9, 13, 27, 38, 40];
                                        if (n && -1 === r.indexOf(e.which)) {
                                            m.push(n);
                                            var o = m.join(""),
                                                a = s.find("li").filter(function() {
                                                    return 0 === t(this).text().toLowerCase().indexOf(o)
                                                })[0];
                                            a && v(s, a)
                                        }
                                        if (13 == e.which) {
                                            var l = s.find("li.selected:not(.disabled)")[0];
                                            l && (t(l).trigger("click"), i || g.trigger("close"))
                                        }
                                        40 == e.which && (a = s.find("li.selected").length ? s.find("li.selected").next("li:not(.disabled)")[0] : s.find("li:not(.disabled)")[0], v(s, a)), 27 == e.which && g.trigger("close"), 38 == e.which && (a = s.find("li.selected").prev("li:not(.disabled)")[0]) && v(s, a), setTimeout(function() {
                                            m = []
                                        }, 1e3)
                                    }
                                };
                            g.on("keydown", y)
                        }
                    })
                }
            }(C),
            function(t) {
                var e = {
                    init: function(e) {
                        var n = {
                            indicators: !0,
                            height: 400,
                            transition: 500,
                            interval: 6e3
                        };
                        return e = t.extend(n, e), this.each(function() {
                            function captionTransition(t, e) {
                                t.hasClass("center-align") ? t.velocity({
                                    opacity: 0,
                                    translateY: -100
                                }, {
                                    duration: e,
                                    queue: !1
                                }) : t.hasClass("right-align") ? t.velocity({
                                    opacity: 0,
                                    translateX: 100
                                }, {
                                    duration: e,
                                    queue: !1
                                }) : t.hasClass("left-align") && t.velocity({
                                    opacity: 0,
                                    translateX: -100
                                }, {
                                    duration: e,
                                    queue: !1
                                })
                            }

                            function moveToSlide(t) {
                                t >= s.length ? t = 0 : t < 0 && (t = s.length - 1), (l = a.find(".active").index()) != t && (n = s.eq(l), $caption = n.find(".caption"), n.removeClass("active"), n.velocity({
                                    opacity: 0
                                }, {
                                    duration: e.transition,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        s.not(".active").velocity({
                                            opacity: 0,
                                            translateX: 0,
                                            translateY: 0
                                        }, {
                                            duration: 0,
                                            queue: !1
                                        })
                                    }
                                }), captionTransition($caption, e.transition), e.indicators && i.eq(l).removeClass("active"), s.eq(t).velocity({
                                    opacity: 1
                                }, {
                                    duration: e.transition,
                                    queue: !1,
                                    easing: "easeOutQuad"
                                }), s.eq(t).find(".caption").velocity({
                                    opacity: 1,
                                    translateX: 0,
                                    translateY: 0
                                }, {
                                    duration: e.transition,
                                    delay: e.transition,
                                    queue: !1,
                                    easing: "easeOutQuad"
                                }), s.eq(t).addClass("active"), e.indicators && i.eq(t).addClass("active"))
                            }
                            var n, i, r, o = t(this),
                                a = o.find("ul.slides").first(),
                                s = a.find("> li"),
                                l = a.find(".active").index(); - 1 != l && (n = s.eq(l)), o.hasClass("fullscreen") || (e.indicators ? o.height(e.height + 40) : o.height(e.height), a.height(e.height)), s.find(".caption").each(function() {
                                captionTransition(t(this), 0)
                            }), s.find("img").each(function() {
                                var e = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                                t(this).attr("src") !== e && (t(this).css("background-image", "url(" + t(this).attr("src") + ")"), t(this).attr("src", e))
                            }), e.indicators && (i = t('<ul class="indicators"></ul>'), s.each(function(n) {
                                var o = t('<li class="indicator-item"></li>');
                                o.click(function() {
                                    moveToSlide(a.parent().find(t(this)).index()), clearInterval(r), r = setInterval(function() {
                                        l = a.find(".active").index(), s.length == l + 1 ? l = 0 : l += 1, moveToSlide(l)
                                    }, e.transition + e.interval)
                                }), i.append(o)
                            }), o.append(i), i = o.find("ul.indicators").find("li.indicator-item")), n ? n.show() : (s.first().addClass("active").velocity({
                                opacity: 1
                            }, {
                                duration: e.transition,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), l = 0, n = s.eq(l), e.indicators && i.eq(l).addClass("active")), n.find("img").each(function() {
                                n.find(".caption").velocity({
                                    opacity: 1,
                                    translateX: 0,
                                    translateY: 0
                                }, {
                                    duration: e.transition,
                                    queue: !1,
                                    easing: "easeOutQuad"
                                })
                            }), r = setInterval(function() {
                                l = a.find(".active").index(), moveToSlide(l + 1)
                            }, e.transition + e.interval);
                            var u = !1,
                                c = !1,
                                d = !1;
                            o.hammer({
                                prevent_default: !1
                            }).bind("pan", function(t) {
                                if ("touch" === t.gesture.pointerType) {
                                    clearInterval(r);
                                    var e = t.gesture.direction,
                                        n = t.gesture.deltaX,
                                        i = t.gesture.velocityX,
                                        l = t.gesture.velocityY;
                                    $curr_slide = a.find(".active"), Math.abs(i) > Math.abs(l) && $curr_slide.velocity({
                                        translateX: n
                                    }, {
                                        duration: 50,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }), 4 === e && (n > o.innerWidth() / 2 || i < -.65) ? d = !0 : 2 === e && (n < -1 * o.innerWidth() / 2 || i > .65) && (c = !0);
                                    var u;
                                    c && (u = $curr_slide.next(), 0 === u.length && (u = s.first()), u.velocity({
                                        opacity: 1
                                    }, {
                                        duration: 300,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    })), d && (u = $curr_slide.prev(), 0 === u.length && (u = s.last()), u.velocity({
                                        opacity: 1
                                    }, {
                                        duration: 300,
                                        queue: !1,
                                        easing: "easeOutQuad"
                                    }))
                                }
                            }).bind("panend", function(t) {
                                "touch" === t.gesture.pointerType && ($curr_slide = a.find(".active"), u = !1, curr_index = a.find(".active").index(), !d && !c || s.length <= 1 ? $curr_slide.velocity({
                                    translateX: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad"
                                }) : c ? (moveToSlide(curr_index + 1), $curr_slide.velocity({
                                    translateX: -1 * o.innerWidth()
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        $curr_slide.velocity({
                                            opacity: 0,
                                            translateX: 0
                                        }, {
                                            duration: 0,
                                            queue: !1
                                        })
                                    }
                                })) : d && (moveToSlide(curr_index - 1), $curr_slide.velocity({
                                    translateX: o.innerWidth()
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        $curr_slide.velocity({
                                            opacity: 0,
                                            translateX: 0
                                        }, {
                                            duration: 0,
                                            queue: !1
                                        })
                                    }
                                })), c = !1, d = !1, clearInterval(r), r = setInterval(function() {
                                    l = a.find(".active").index(), s.length == l + 1 ? l = 0 : l += 1, moveToSlide(l)
                                }, e.transition + e.interval))
                            }), o.on("sliderPause", function() {
                                clearInterval(r)
                            }), o.on("sliderStart", function() {
                                clearInterval(r), r = setInterval(function() {
                                    l = a.find(".active").index(), s.length == l + 1 ? l = 0 : l += 1, moveToSlide(l)
                                }, e.transition + e.interval)
                            }), o.on("sliderNext", function() {
                                l = a.find(".active").index(), moveToSlide(l + 1)
                            }), o.on("sliderPrev", function() {
                                l = a.find(".active").index(), moveToSlide(l - 1)
                            })
                        })
                    },
                    pause: function() {
                        t(this).trigger("sliderPause")
                    },
                    start: function() {
                        t(this).trigger("sliderStart")
                    },
                    next: function() {
                        t(this).trigger("sliderNext")
                    },
                    prev: function() {
                        t(this).trigger("sliderPrev")
                    }
                };
                t.fn.slider = function(n) {
                    return e[n] ? e[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.tooltip") : e.init.apply(this, arguments)
                }
            }(C),
            function(t) {
                t(document).ready(function() {
                    t(document).on("click.card", ".card", function(e) {
                        t(this).find("> .card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({
                            translateY: 0
                        }, {
                            duration: 225,
                            queue: !1,
                            easing: "easeInOutQuad",
                            complete: function() {
                                t(this).css({
                                    display: "none"
                                })
                            }
                        }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && (t(e.target).closest(".card").css("overflow", "hidden"), t(this).find(".card-reveal").css({
                            display: "block"
                        }).velocity("stop", !1).velocity({
                            translateY: "-100%"
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeInOutQuad"
                        })))
                    })
                })
            }(C),
            function(t) {
                var e = {
                    data: [],
                    placeholder: "",
                    secondaryPlaceholder: "",
                    autocompleteOptions: {}
                };
                t(document).ready(function() {
                    t(document).on("click", ".chip .close", function(e) {
                        t(this).closest(".chips").attr("data-initialized") || t(this).closest(".chip").remove()
                    })
                }), t.fn.material_chip = function(n) {
                    var i = this;
                    if (this.$el = t(this), this.$document = t(document), this.SELS = {
                            CHIPS: ".chips",
                            CHIP: ".chip",
                            INPUT: "input",
                            DELETE: ".material-icons",
                            SELECTED_CHIP: ".selected"
                        }, "data" === n) return this.$el.data("chips");
                    var r = t.extend({}, e, n);
                    i.hasAutocomplete = !t.isEmptyObject(r.autocompleteOptions.data), this.init = function() {
                        var e = 0;
                        i.$el.each(function() {
                            var n = t(this),
                                o = Materialize.guid();
                            i.chipId = o, r.data && r.data instanceof Array || (r.data = []), n.data("chips", r.data), n.attr("data-index", e), n.attr("data-initialized", !0), n.hasClass(i.SELS.CHIPS) || n.addClass("chips"), i.chips(n, o), e++
                        })
                    }, this.handleEvents = function() {
                        var e = i.SELS;
                        i.$document.off("click.chips-focus", e.CHIPS).on("click.chips-focus", e.CHIPS, function(n) {
                            t(n.target).find(e.INPUT).focus()
                        }), i.$document.off("click.chips-select", e.CHIP).on("click.chips-select", e.CHIP, function(n) {
                            var r = t(n.target);
                            if (r.length) {
                                var o = r.hasClass("selected"),
                                    a = r.closest(e.CHIPS);
                                t(e.CHIP).removeClass("selected"), o || i.selectChip(r.index(), a)
                            }
                        }), i.$document.off("keydown.chips").on("keydown.chips", function(n) {
                            if (!t(n.target).is("input, textarea")) {
                                var r, o = i.$document.find(e.CHIP + e.SELECTED_CHIP),
                                    a = o.closest(e.CHIPS),
                                    s = o.siblings(e.CHIP).length;
                                if (o.length)
                                    if (8 === n.which || 46 === n.which) {
                                        n.preventDefault(), r = o.index(), i.deleteChip(r, a);
                                        var l = null;
                                        r + 1 < s ? l = r : r !== s && r + 1 !== s || (l = s - 1), l < 0 && (l = null), null !== l && i.selectChip(l, a), s || a.find("input").focus()
                                    } else if (37 === n.which) {
                                    if ((r = o.index() - 1) < 0) return;
                                    t(e.CHIP).removeClass("selected"), i.selectChip(r, a)
                                } else if (39 === n.which) {
                                    if (r = o.index() + 1, t(e.CHIP).removeClass("selected"), r > s) return void a.find("input").focus();
                                    i.selectChip(r, a)
                                }
                            }
                        }), i.$document.off("focusin.chips", e.CHIPS + " " + e.INPUT).on("focusin.chips", e.CHIPS + " " + e.INPUT, function(n) {
                            var i = t(n.target).closest(e.CHIPS);
                            i.addClass("focus"), i.siblings("label, .prefix").addClass("active"), t(e.CHIP).removeClass("selected")
                        }), i.$document.off("focusout.chips", e.CHIPS + " " + e.INPUT).on("focusout.chips", e.CHIPS + " " + e.INPUT, function(n) {
                            var i = t(n.target).closest(e.CHIPS);
                            i.removeClass("focus"), i.data("chips").length || i.siblings("label").removeClass("active"), i.siblings(".prefix").removeClass("active")
                        }), i.$document.off("keydown.chips-add", e.CHIPS + " " + e.INPUT).on("keydown.chips-add", e.CHIPS + " " + e.INPUT, function(n) {
                            var r = t(n.target),
                                o = r.closest(e.CHIPS),
                                a = o.children(e.CHIP).length;
                            if (13 === n.which) {
                                if (i.hasAutocomplete && o.find(".autocomplete-content.dropdown-content").length && o.find(".autocomplete-content.dropdown-content").children().length) return;
                                return n.preventDefault(), i.addChip({
                                    tag: r.val()
                                }, o), void r.val("")
                            }
                            if ((8 === n.keyCode || 37 === n.keyCode) && "" === r.val() && a) return n.preventDefault(), i.selectChip(a - 1, o), void r.blur()
                        }), i.$document.off("click.chips-delete", e.CHIPS + " " + e.DELETE).on("click.chips-delete", e.CHIPS + " " + e.DELETE, function(n) {
                            var r = t(n.target),
                                o = r.closest(e.CHIPS),
                                a = r.closest(e.CHIP);
                            n.stopPropagation(), i.deleteChip(a.index(), o), o.find("input").focus()
                        })
                    }, this.chips = function(e, n) {
                        e.empty(), e.data("chips").forEach(function(t) {
                            e.append(i.renderChip(t))
                        }), e.append(t('<input id="' + n + '" class="input" placeholder="">')), i.setPlaceholder(e);
                        var o = e.next("label");
                        o.length && (o.attr("for", n), e.data("chips").length && o.addClass("active"));
                        var a = t("#" + n);
                        i.hasAutocomplete && (r.autocompleteOptions.onAutocomplete = function(t) {
                            i.addChip({
                                tag: t
                            }, e), a.val(""), a.focus()
                        }, a.autocomplete(r.autocompleteOptions))
                    }, this.renderChip = function(e) {
                        if (e.tag) {
                            var n = t('<div class="chip"></div>');
                            return n.text(e.tag), n.append(t('<i class="material-icons close">close</i>')), n
                        }
                    }, this.setPlaceholder = function(t) {
                        t.data("chips").length && r.placeholder ? t.find("input").prop("placeholder", r.placeholder) : !t.data("chips").length && r.secondaryPlaceholder && t.find("input").prop("placeholder", r.secondaryPlaceholder)
                    }, this.isValid = function(t, e) {
                        for (var n = t.data("chips"), i = !1, r = 0; r < n.length; r++)
                            if (n[r].tag === e.tag) return void(i = !0);
                        return "" !== e.tag && !i
                    }, this.addChip = function(t, e) {
                        if (i.isValid(e, t)) {
                            for (var n = i.renderChip(t), r = [], o = e.data("chips"), a = 0; a < o.length; a++) r.push(o[a]);
                            r.push(t), e.data("chips", r), n.insertBefore(e.find("input")), e.trigger("chip.add", t), i.setPlaceholder(e)
                        }
                    }, this.deleteChip = function(t, e) {
                        var n = e.data("chips")[t];
                        e.find(".chip").eq(t).remove();
                        for (var r = [], o = e.data("chips"), a = 0; a < o.length; a++) a !== t && r.push(o[a]);
                        e.data("chips", r), e.trigger("chip.delete", n), i.setPlaceholder(e)
                    }, this.selectChip = function(t, e) {
                        var n = e.find(".chip").eq(t);
                        n && !1 === n.hasClass("selected") && (n.addClass("selected"), e.trigger("chip.select", e.data("chips")[t]))
                    }, this.getChipsElement = function(t, e) {
                        return e.eq(t)
                    }, this.init(), this.handleEvents()
                }
            }(C),
            function(t) {
                t.fn.pushpin = function(e) {
                    var n = {
                        top: 0,
                        bottom: 1 / 0,
                        offset: 0
                    };
                    return "remove" === e ? (this.each(function() {
                        (id = t(this).data("pushpin-id")) && (t(window).off("scroll." + id), t(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))
                    }), !1) : (e = t.extend(n, e), $index = 0, this.each(function() {
                        function removePinClasses(t) {
                            t.removeClass("pin-top"), t.removeClass("pinned"), t.removeClass("pin-bottom")
                        }

                        function updateElements(n, i) {
                            n.each(function() {
                                e.top <= i && e.bottom >= i && !t(this).hasClass("pinned") && (removePinClasses(t(this)), t(this).css("top", e.offset), t(this).addClass("pinned")), i < e.top && !t(this).hasClass("pin-top") && (removePinClasses(t(this)), t(this).css("top", 0), t(this).addClass("pin-top")), i > e.bottom && !t(this).hasClass("pin-bottom") && (removePinClasses(t(this)), t(this).addClass("pin-bottom"), t(this).css("top", e.bottom - r))
                            })
                        }
                        var n = Materialize.guid(),
                            i = t(this),
                            r = t(this).offset().top;
                        t(this).data("pushpin-id", n), updateElements(i, t(window).scrollTop()), t(window).on("scroll." + n, function() {
                            var n = t(window).scrollTop() + e.offset;
                            updateElements(i, n)
                        })
                    }))
                }
            }(C),
            function(t) {
                t(document).ready(function() {
                    t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(n) {
                        var i = t(this);
                        e(i)
                    }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(e) {
                        var i = t(this);
                        n(i)
                    }), t(document).on("click.fabClickToggle", ".fixed-action-btn.click-to-toggle > a", function(i) {
                        var r = t(this),
                            o = r.parent();
                        o.hasClass("active") ? n(o) : e(o)
                    }), t(document).on("click.fabToolbar", ".fixed-action-btn.toolbar > a", function(e) {
                        var n = t(this),
                            r = n.parent();
                        i(r)
                    })
                }), t.fn.extend({
                    openFAB: function() {
                        e(t(this))
                    },
                    closeFAB: function() {
                        n(t(this))
                    },
                    openToolbar: function() {
                        i(t(this))
                    },
                    closeToolbar: function() {
                        r(t(this))
                    }
                });
                var e = function(e) {
                        var n = e;
                        if (!1 === n.hasClass("active")) {
                            var i, r, o = n.hasClass("horizontal");
                            !0 === o ? r = 40 : i = 40, n.addClass("active"), n.find("ul .btn-floating").velocity({
                                scaleY: ".4",
                                scaleX: ".4",
                                translateY: i + "px",
                                translateX: r + "px"
                            }, {
                                duration: 0
                            });
                            var a = 0;
                            n.find("ul .btn-floating").reverse().each(function() {
                                t(this).velocity({
                                    opacity: "1",
                                    scaleX: "1",
                                    scaleY: "1",
                                    translateY: "0",
                                    translateX: "0"
                                }, {
                                    duration: 80,
                                    delay: a
                                }), a += 40
                            })
                        }
                    },
                    n = function(t) {
                        var e, n, i = t,
                            r = i.hasClass("horizontal");
                        !0 === r ? n = 40 : e = 40, i.removeClass("active");
                        i.find("ul .btn-floating").velocity("stop", !0), i.find("ul .btn-floating").velocity({
                            opacity: "0",
                            scaleX: ".4",
                            scaleY: ".4",
                            translateY: e + "px",
                            translateX: n + "px"
                        }, {
                            duration: 80
                        })
                    },
                    i = function(e) {
                        if ("true" !== e.attr("data-open")) {
                            var n, i, o, a = window.innerWidth,
                                s = window.innerHeight,
                                l = e[0].getBoundingClientRect(),
                                u = e.find("> a").first(),
                                c = e.find("> ul").first(),
                                d = t('<div class="fab-backdrop"></div>'),
                                f = u.css("background-color");
                            u.append(d), n = l.left - a / 2 + l.width / 2, i = s - l.bottom, o = a / d.width(), e.attr("data-origin-bottom", l.bottom), e.attr("data-origin-left", l.left), e.attr("data-origin-width", l.width), e.addClass("active"), e.attr("data-open", !0), e.css({
                                "text-align": "center",
                                width: "100%",
                                bottom: 0,
                                left: 0,
                                transform: "translateX(" + n + "px)",
                                transition: "none"
                            }), u.css({
                                transform: "translateY(" + -i + "px)",
                                transition: "none"
                            }), d.css({
                                "background-color": f
                            }), setTimeout(function() {
                                e.css({
                                    transform: "",
                                    transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                                }), u.css({
                                    overflow: "visible",
                                    transform: "",
                                    transition: "transform .2s"
                                }), setTimeout(function() {
                                    e.css({
                                        overflow: "hidden",
                                        "background-color": f
                                    }), d.css({
                                        transform: "scale(" + o + ")",
                                        transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                                    }), c.find("> li > a").css({
                                        opacity: 1
                                    }), t(window).on("scroll.fabToolbarClose", function() {
                                        r(e), t(window).off("scroll.fabToolbarClose"), t(document).off("click.fabToolbarClose")
                                    }), t(document).on("click.fabToolbarClose", function(n) {
                                        t(n.target).closest(c).length || (r(e), t(window).off("scroll.fabToolbarClose"), t(document).off("click.fabToolbarClose"))
                                    })
                                }, 100)
                            }, 0)
                        }
                    },
                    r = function(t) {
                        if ("true" === t.attr("data-open")) {
                            var e, n, i = window.innerWidth,
                                r = window.innerHeight,
                                o = t.attr("data-origin-width"),
                                a = t.attr("data-origin-bottom"),
                                s = t.attr("data-origin-left"),
                                l = t.find("> .btn-floating").first(),
                                u = t.find("> ul").first(),
                                c = t.find(".fab-backdrop"),
                                d = l.css("background-color");
                            e = s - i / 2 + o / 2, n = r - a, i / c.width(), t.removeClass("active"), t.attr("data-open", !1), t.css({
                                "background-color": "transparent",
                                transition: "none"
                            }), l.css({
                                transition: "none"
                            }), c.css({
                                transform: "scale(0)",
                                "background-color": d
                            }), u.find("> li > a").css({
                                opacity: ""
                            }), setTimeout(function() {
                                c.remove(), t.css({
                                    "text-align": "",
                                    width: "",
                                    bottom: "",
                                    left: "",
                                    overflow: "",
                                    "background-color": "",
                                    transform: "translate3d(" + -e + "px,0,0)"
                                }), l.css({
                                    overflow: "",
                                    transform: "translate3d(0," + n + "px,0)"
                                }), setTimeout(function() {
                                    t.css({
                                        transform: "translate3d(0,0,0)",
                                        transition: "transform .2s"
                                    }), l.css({
                                        transform: "translate3d(0,0,0)",
                                        transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                                    })
                                }, 20)
                            }, 200)
                        }
                    }
            }(C),
            function(t) {
                Materialize.fadeInImage = function(e) {
                    var n;
                    if ("string" == typeof e) n = t(e);
                    else {
                        if ("object" != typeof e) return;
                        n = e
                    }
                    n.css({
                        opacity: 0
                    }), t(n).velocity({
                        opacity: 1
                    }, {
                        duration: 650,
                        queue: !1,
                        easing: "easeOutSine"
                    }), t(n).velocity({
                        opacity: 1
                    }, {
                        duration: 1300,
                        queue: !1,
                        easing: "swing",
                        step: function(e, n) {
                            n.start = 100;
                            var i = e / 100,
                                r = 150 - (100 - e) / 1.75;
                            r < 100 && (r = 100), e >= 0 && t(this).css({
                                "-webkit-filter": "grayscale(" + i + ")brightness(" + r + "%)",
                                filter: "grayscale(" + i + ")brightness(" + r + "%)"
                            })
                        }
                    })
                }, Materialize.showStaggeredList = function(e) {
                    var n;
                    if ("string" == typeof e) n = t(e);
                    else {
                        if ("object" != typeof e) return;
                        n = e
                    }
                    var i = 0;
                    n.find("li").velocity({
                        translateX: "-100px"
                    }, {
                        duration: 0
                    }), n.find("li").each(function() {
                        t(this).velocity({
                            opacity: "1",
                            translateX: "0"
                        }, {
                            duration: 800,
                            delay: i,
                            easing: [60, 10]
                        }), i += 120
                    })
                }, t(document).ready(function() {
                    var e = !1,
                        n = !1;
                    t(".dismissable").each(function() {
                        t(this).hammer({
                            prevent_default: !1
                        }).bind("pan", function(i) {
                            if ("touch" === i.gesture.pointerType) {
                                var r = t(this),
                                    o = i.gesture.direction,
                                    a = i.gesture.deltaX,
                                    s = i.gesture.velocityX;
                                r.velocity({
                                    translateX: a
                                }, {
                                    duration: 50,
                                    queue: !1,
                                    easing: "easeOutQuad"
                                }), 4 === o && (a > r.innerWidth() / 2 || s < -.75) && (e = !0), 2 === o && (a < -1 * r.innerWidth() / 2 || s > .75) && (n = !0)
                            }
                        }).bind("panend", function(i) {
                            if (Math.abs(i.gesture.deltaX) < t(this).innerWidth() / 2 && (n = !1, e = !1), "touch" === i.gesture.pointerType) {
                                var r = t(this);
                                if (e || n) {
                                    var o;
                                    o = e ? r.innerWidth() : -1 * r.innerWidth(), r.velocity({
                                        translateX: o
                                    }, {
                                        duration: 100,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        complete: function() {
                                            r.css("border", "none"), r.velocity({
                                                height: 0,
                                                padding: 0
                                            }, {
                                                duration: 200,
                                                queue: !1,
                                                easing: "easeOutQuad",
                                                complete: function() {
                                                    r.remove()
                                                }
                                            })
                                        }
                                    })
                                } else r.velocity({
                                    translateX: 0
                                }, {
                                    duration: 100,
                                    queue: !1,
                                    easing: "easeOutQuad"
                                });
                                e = !1, n = !1
                            }
                        })
                    })
                })
            }(C),
            function(t) {
                var e = !1;
                Materialize.scrollFire = function(t) {
                    var n = function() {
                            for (var e = window.pageYOffset + window.innerHeight, n = 0; n < t.length; n++) {
                                var i = t[n],
                                    r = i.selector,
                                    o = i.offset,
                                    a = i.callback,
                                    s = document.querySelector(r);
                                if (null !== s) {
                                    if (e > s.getBoundingClientRect().top + window.pageYOffset + o && !0 !== i.done) {
                                        if ("function" == typeof a) a.call(this, s);
                                        else if ("string" == typeof a) {
                                            var l = new Function(a);
                                            l(s)
                                        }
                                        i.done = !0
                                    }
                                }
                            }
                        },
                        i = Materialize.throttle(function() {
                            n()
                        }, t.throttle || 100);
                    e || (window.addEventListener("scroll", i), window.addEventListener("resize", i), e = !0), setTimeout(i, 0)
                }
            }(),
            function(t) {
                b = [a(0)], h = t, T = "function" == typeof h ? h.apply(i, b) : h
            }(function(t) {
                function PickerConstructor(e, r, o, a) {
                    function createWrappedComponent() {
                        return PickerConstructor._.node("div", PickerConstructor._.node("div", PickerConstructor._.node("div", PickerConstructor._.node("div", h.component.nodes(l.open), c.box), c.wrap), c.frame), c.holder)
                    }

                    function prepareElement() {
                        d.data(r, h).addClass(c.input).attr("tabindex", -1).val(d.data("value") ? h.get("select", u.format) : e.value), u.editable || d.on("focus." + l.id + " click." + l.id, function(t) {
                            t.preventDefault(), h.$root.eq(0).focus()
                        }).on("keydown." + l.id, handleKeydownEvent), aria(e, {
                            haspopup: !0,
                            expanded: !1,
                            readonly: !1,
                            owns: e.id + "_root"
                        })
                    }

                    function prepareElementRoot() {
                        h.$root.on({
                            keydown: handleKeydownEvent,
                            focusin: function(t) {
                                h.$root.removeClass(c.focused), t.stopPropagation()
                            },
                            "mousedown click": function(e) {
                                var n = e.target;
                                n != h.$root.children()[0] && (e.stopPropagation(), "mousedown" != e.type || t(n).is("input, select, textarea, button, option") || (e.preventDefault(), h.$root.eq(0).focus()))
                            }
                        }).on({
                            focus: function() {
                                d.addClass(c.target)
                            },
                            blur: function() {
                                d.removeClass(c.target)
                            }
                        }).on("focus.toOpen", handleFocusToOpenEvent).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                            var e = t(this),
                                n = e.data(),
                                i = e.hasClass(c.navDisabled) || e.hasClass(c.disabled),
                                r = getActiveElement();
                            r = r && (r.type || r.href), (i || r && !t.contains(h.$root[0], r)) && h.$root.eq(0).focus(), !i && n.nav ? h.set("highlight", h.component.item.highlight, {
                                nav: n.nav
                            }) : !i && "pick" in n ? h.set("select", n.pick) : n.clear ? h.clear().close(!0) : n.close && h.close(!0)
                        }), aria(h.$root[0], "hidden", !0)
                    }

                    function prepareElementHidden() {
                        var n;
                        !0 === u.hiddenName ? (n = e.name, e.name = "") : (n = ["string" == typeof u.hiddenPrefix ? u.hiddenPrefix : "", "string" == typeof u.hiddenSuffix ? u.hiddenSuffix : "_submit"], n = n[0] + e.name + n[1]), h._hidden = t('<input type=hidden name="' + n + '"' + (d.data("value") || e.value ? ' value="' + h.get("select", u.formatSubmit) + '"' : "") + ">")[0], d.on("change." + l.id, function() {
                            h._hidden.value = e.value ? h.get("select", u.formatSubmit) : ""
                        }), u.container ? t(u.container).append(h._hidden) : d.after(h._hidden)
                    }

                    function handleKeydownEvent(t) {
                        var e = t.keyCode,
                            n = /^(8|46)$/.test(e);
                        if (27 == e) return h.close(), !1;
                        (32 == e || n || !l.open && h.component.key[e]) && (t.preventDefault(), t.stopPropagation(), n ? h.clear().close() : h.open())
                    }

                    function handleFocusToOpenEvent(t) {
                        t.stopPropagation(), "focus" == t.type && h.$root.addClass(c.focused), h.open()
                    }
                    if (!e) return PickerConstructor;
                    var s = !1,
                        l = {
                            id: e.id || "P" + Math.abs(~~(Math.random() * new Date))
                        },
                        u = o ? t.extend(!0, {}, o.defaults, a) : a || {},
                        c = t.extend({}, PickerConstructor.klasses(), u.klass),
                        d = t(e),
                        f = function() {
                            return this.start()
                        },
                        h = f.prototype = {
                            constructor: f,
                            $node: d,
                            start: function() {
                                return l && l.start ? h : (l.methods = {}, l.start = !0, l.open = !1, l.type = e.type, e.autofocus = e == getActiveElement(), e.readOnly = !u.editable, e.id = e.id || l.id, "text" != e.type && (e.type = "text"), h.component = new o(h, u), h.$root = t(PickerConstructor._.node("div", createWrappedComponent(), c.picker, 'id="' + e.id + '_root" tabindex="0"')), prepareElementRoot(), u.formatSubmit && prepareElementHidden(), prepareElement(), u.container ? t(u.container).append(h.$root) : d.after(h.$root), h.on({
                                    start: h.component.onStart,
                                    render: h.component.onRender,
                                    stop: h.component.onStop,
                                    open: h.component.onOpen,
                                    close: h.component.onClose,
                                    set: h.component.onSet
                                }).on({
                                    start: u.onStart,
                                    render: u.onRender,
                                    stop: u.onStop,
                                    open: u.onOpen,
                                    close: u.onClose,
                                    set: u.onSet
                                }), s = isUsingDefaultTheme(h.$root.children()[0]), e.autofocus && h.open(), h.trigger("start").trigger("render"))
                            },
                            render: function(t) {
                                return t ? h.$root.html(createWrappedComponent()) : h.$root.find("." + c.box).html(h.component.nodes(l.open)), h.trigger("render")
                            },
                            stop: function() {
                                return l.start ? (h.close(), h._hidden && h._hidden.parentNode.removeChild(h._hidden), h.$root.remove(), d.removeClass(c.input).removeData(r), setTimeout(function() {
                                    d.off("." + l.id)
                                }, 0), e.type = l.type, e.readOnly = !1, h.trigger("stop"), l.methods = {}, l.start = !1, h) : h
                            },
                            open: function(r) {
                                return l.open ? h : (d.addClass(c.active), aria(e, "expanded", !0), setTimeout(function() {
                                    h.$root.addClass(c.opened), aria(h.$root[0], "hidden", !1)
                                }, 0), !1 !== r && (l.open = !0, s && i.css("overflow", "hidden").css("padding-right", "+=" + getScrollbarWidth()), h.$root.eq(0).focus(), n.on("click." + l.id + " focusin." + l.id, function(t) {
                                    var n = t.target;
                                    n != e && n != document && 3 != t.which && h.close(n === h.$root.children()[0])
                                }).on("keydown." + l.id, function(e) {
                                    var n = e.keyCode,
                                        i = h.component.key[n],
                                        r = e.target;
                                    27 == n ? h.close(!0) : r != h.$root[0] || !i && 13 != n ? t.contains(h.$root[0], r) && 13 == n && (e.preventDefault(), r.click()) : (e.preventDefault(), i ? PickerConstructor._.trigger(h.component.key.go, h, [PickerConstructor._.trigger(i)]) : h.$root.find("." + c.highlighted).hasClass(c.disabled) || h.set("select", h.component.item.highlight).close())
                                })), h.trigger("open"))
                            },
                            close: function(t) {
                                return t && (h.$root.off("focus.toOpen").eq(0).focus(), setTimeout(function() {
                                    h.$root.on("focus.toOpen", handleFocusToOpenEvent)
                                }, 0)), d.removeClass(c.active), aria(e, "expanded", !1), setTimeout(function() {
                                    h.$root.removeClass(c.opened + " " + c.focused), aria(h.$root[0], "hidden", !0)
                                }, 0), l.open ? (l.open = !1, s && i.css("overflow", "").css("padding-right", "-=" + getScrollbarWidth()), n.off("." + l.id), h.trigger("close")) : h
                            },
                            clear: function(t) {
                                return h.set("clear", null, t)
                            },
                            set: function(e, n, i) {
                                var r, o, a = t.isPlainObject(e),
                                    s = a ? e : {};
                                if (i = a && t.isPlainObject(n) ? n : i || {}, e) {
                                    a || (s[e] = n);
                                    for (r in s) o = s[r], r in h.component.item && (void 0 === o && (o = null), h.component.set(r, o, i)), "select" != r && "clear" != r || d.val("clear" == r ? "" : h.get(r, u.format)).trigger("change");
                                    h.render()
                                }
                                return i.muted ? h : h.trigger("set", s)
                            },
                            get: function(t, n) {
                                if (t = t || "value", null != l[t]) return l[t];
                                if ("valueSubmit" == t) {
                                    if (h._hidden) return h._hidden.value;
                                    t = "value"
                                }
                                if ("value" == t) return e.value;
                                if (t in h.component.item) {
                                    if ("string" == typeof n) {
                                        var i = h.component.get(t);
                                        return i ? PickerConstructor._.trigger(h.component.formats.toString, h.component, [n, i]) : ""
                                    }
                                    return h.component.get(t)
                                }
                            },
                            on: function(e, n, i) {
                                var r, o, a = t.isPlainObject(e),
                                    s = a ? e : {};
                                if (e) {
                                    a || (s[e] = n);
                                    for (r in s) o = s[r], i && (r = "_" + r), l.methods[r] = l.methods[r] || [], l.methods[r].push(o)
                                }
                                return h
                            },
                            off: function() {
                                var t, e, n = arguments;
                                for (t = 0, namesCount = n.length; t < namesCount; t += 1)(e = n[t]) in l.methods && delete l.methods[e];
                                return h
                            },
                            trigger: function(t, e) {
                                var n = function(t) {
                                    var n = l.methods[t];
                                    n && n.map(function(t) {
                                        PickerConstructor._.trigger(t, h, [e])
                                    })
                                };
                                return n("_" + t), n(t), h
                            }
                        };
                    return new f
                }

                function isUsingDefaultTheme(t) {
                    var e;
                    return t.currentStyle ? e = t.currentStyle.position : window.getComputedStyle && (e = getComputedStyle(t).position), "fixed" == e
                }

                function getScrollbarWidth() {
                    if (i.height() <= e.height()) return 0;
                    var n = t('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                        r = n[0].offsetWidth;
                    n.css("overflow", "scroll");
                    var o = t('<div style="width:100%" />').appendTo(n),
                        a = o[0].offsetWidth;
                    return n.remove(), r - a
                }

                function aria(e, n, i) {
                    if (t.isPlainObject(n))
                        for (var r in n) ariaSet(e, r, n[r]);
                    else ariaSet(e, n, i)
                }

                function ariaSet(t, e, n) {
                    t.setAttribute(("role" == e ? "" : "aria-") + e, n)
                }

                function ariaAttr(e, n) {
                    t.isPlainObject(e) || (e = {
                        attribute: n
                    }), n = "";
                    for (var i in e) {
                        var r = ("role" == i ? "" : "aria-") + i;
                        n += null == e[i] ? "" : r + '="' + e[i] + '"'
                    }
                    return n
                }

                function getActiveElement() {
                    try {
                        return document.activeElement
                    } catch (t) {}
                }
                var e = t(window),
                    n = t(document),
                    i = t(document.documentElement);
                return PickerConstructor.klasses = function(t) {
                    return t = t || "picker", {
                        picker: t,
                        opened: t + "--opened",
                        focused: t + "--focused",
                        input: t + "__input",
                        active: t + "__input--active",
                        target: t + "__input--target",
                        holder: t + "__holder",
                        frame: t + "__frame",
                        wrap: t + "__wrap",
                        box: t + "__box"
                    }
                }, PickerConstructor._ = {
                    group: function(t) {
                        for (var e, n = "", i = PickerConstructor._.trigger(t.min, t); i <= PickerConstructor._.trigger(t.max, t, [i]); i += t.i) e = PickerConstructor._.trigger(t.item, t, [i]), n += PickerConstructor._.node(t.node, e[0], e[1], e[2]);
                        return n
                    },
                    node: function(e, n, i, r) {
                        return n ? (n = t.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"' : "", r = r ? " " + r : "", "<" + e + i + r + ">" + n + "</" + e + ">") : ""
                    },
                    lead: function(t) {
                        return (t < 10 ? "0" : "") + t
                    },
                    trigger: function(t, e, n) {
                        return "function" == typeof t ? t.apply(e, n || []) : t
                    },
                    digits: function(t) {
                        return /\d/.test(t[1]) ? 2 : 1
                    },
                    isDate: function(t) {
                        return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
                    },
                    isInteger: function(t) {
                        return {}.toString.call(t).indexOf("Number") > -1 && t % 1 == 0
                    },
                    ariaAttr: ariaAttr
                }, PickerConstructor.extend = function(e, n) {
                    t.fn[e] = function(i, r) {
                        var o = this.data(e);
                        return "picker" == i ? o : o && "string" == typeof i ? PickerConstructor._.trigger(o[i], o, [r]) : this.each(function() {
                            t(this).data(e) || new PickerConstructor(this, e, n, i)
                        })
                    }, t.fn[e].defaults = n.defaults
                }, PickerConstructor
            }),
            function(t) {
                b = [T, a(0)], h = t, void 0 !== (g = "function" == typeof h ? h.apply(i, b) : h) && (e.exports = g)
            }(function(t, e) {
                function DatePicker(t, e) {
                    var n = this,
                        i = t.$node[0],
                        r = i.value,
                        o = t.$node.data("value"),
                        a = o || r,
                        s = o ? e.formatSubmit : e.format,
                        l = function() {
                            return i.currentStyle ? "rtl" == i.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
                        };
                    n.settings = e, n.$node = t.$node, n.queue = {
                        min: "measure create",
                        max: "measure create",
                        now: "now create",
                        select: "parse create validate",
                        highlight: "parse navigate create validate",
                        view: "parse create validate viewset",
                        disable: "deactivate",
                        enable: "activate"
                    }, n.item = {}, n.item.clear = null, n.item.disable = (e.disable || []).slice(0), n.item.enable = - function(t) {
                        return !0 === t[0] ? t.shift() : -1
                    }(n.item.disable), n.set("min", e.min).set("max", e.max).set("now"), a ? n.set("select", a, {
                        format: s
                    }) : n.set("select", null).set("highlight", n.item.now), n.key = {
                        40: 7,
                        38: -7,
                        39: function() {
                            return l() ? -1 : 1
                        },
                        37: function() {
                            return l() ? 1 : -1
                        },
                        go: function(t) {
                            var e = n.item.highlight,
                                i = new Date(e.year, e.month, e.date + t);
                            n.set("highlight", i, {
                                interval: t
                            }), this.render()
                        }
                    }, t.on("render", function() {
                        t.$root.find("." + e.klass.selectMonth).on("change", function() {
                            var n = this.value;
                            n && (t.set("highlight", [t.get("view").year, n, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
                        }), t.$root.find("." + e.klass.selectYear).on("change", function() {
                            var n = this.value;
                            n && (t.set("highlight", [n, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
                        })
                    }, 1).on("open", function() {
                        var i = "";
                        n.disabled(n.get("now")) && (i = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + i + ", select").attr("disabled", !1)
                    }, 1).on("close", function() {
                        t.$root.find("button, select").attr("disabled", !0)
                    }, 1)
                }
                var n = t._;
                DatePicker.prototype.set = function(t, e, n) {
                    var i = this,
                        r = i.item;
                    return null === e ? ("clear" == t && (t = "select"), r[t] = e, i) : (r["enable" == t ? "disable" : "flip" == t ? "enable" : t] = i.queue[t].split(" ").map(function(r) {
                        return e = i[r](t, e, n)
                    }).pop(), "select" == t ? i.set("highlight", r.select, n) : "highlight" == t ? i.set("view", r.highlight, n) : t.match(/^(flip|min|max|disable|enable)$/) && (r.select && i.disabled(r.select) && i.set("select", r.select, n), r.highlight && i.disabled(r.highlight) && i.set("highlight", r.highlight, n)), i)
                }, DatePicker.prototype.get = function(t) {
                    return this.item[t]
                }, DatePicker.prototype.create = function(t, i, r) {
                    var o, a = this;
                    return i = void 0 === i ? t : i, i == -1 / 0 || i == 1 / 0 ? o = i : e.isPlainObject(i) && n.isInteger(i.pick) ? i = i.obj : e.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = n.isDate(i) ? i : a.create().obj) : i = n.isInteger(i) || n.isDate(i) ? a.normalize(new Date(i), r) : a.now(t, i, r), {
                        year: o || i.getFullYear(),
                        month: o || i.getMonth(),
                        date: o || i.getDate(),
                        day: o || i.getDay(),
                        obj: o || i,
                        pick: o || i.getTime()
                    }
                }, DatePicker.prototype.createRange = function(t, i) {
                    var r = this,
                        o = function(t) {
                            return !0 === t || e.isArray(t) || n.isDate(t) ? r.create(t) : t
                        };
                    return n.isInteger(t) || (t = o(t)), n.isInteger(i) || (i = o(i)), n.isInteger(t) && e.isPlainObject(i) ? t = [i.year, i.month, i.date + t] : n.isInteger(i) && e.isPlainObject(t) && (i = [t.year, t.month, t.date + i]), {
                        from: o(t),
                        to: o(i)
                    }
                }, DatePicker.prototype.withinRange = function(t, e) {
                    return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
                }, DatePicker.prototype.overlapRanges = function(t, e) {
                    var n = this;
                    return t = n.createRange(t.from, t.to), e = n.createRange(e.from, e.to), n.withinRange(t, e.from) || n.withinRange(t, e.to) || n.withinRange(e, t.from) || n.withinRange(e, t.to)
                }, DatePicker.prototype.now = function(t, e, n) {
                    return e = new Date, n && n.rel && e.setDate(e.getDate() + n.rel), this.normalize(e, n)
                }, DatePicker.prototype.navigate = function(t, n, i) {
                    var r, o, a, s, l = e.isArray(n),
                        u = e.isPlainObject(n),
                        c = this.item.view;
                    if (l || u) {
                        for (u ? (o = n.year, a = n.month, s = n.date) : (o = +n[0], a = +n[1], s = +n[2]), i && i.nav && c && c.month !== a && (o = c.year, a = c.month), r = new Date(o, a + (i && i.nav ? i.nav : 0), 1), o = r.getFullYear(), a = r.getMonth(); new Date(o, a, s).getMonth() !== a;) s -= 1;
                        n = [o, a, s]
                    }
                    return n
                }, DatePicker.prototype.normalize = function(t) {
                    return t.setHours(0, 0, 0, 0), t
                }, DatePicker.prototype.measure = function(t, e) {
                    var i = this;
                    return e ? "string" == typeof e ? e = i.parse(t, e) : n.isInteger(e) && (e = i.now(t, e, {
                        rel: e
                    })) : e = "min" == t ? -1 / 0 : 1 / 0, e
                }, DatePicker.prototype.viewset = function(t, e) {
                    return this.create([e.year, e.month, 1])
                }, DatePicker.prototype.validate = function(t, i, r) {
                    var o, a, s, l, u = this,
                        c = i,
                        d = r && r.interval ? r.interval : 1,
                        f = -1 === u.item.enable,
                        h = u.item.min,
                        p = u.item.max,
                        g = f && u.item.disable.filter(function(t) {
                            if (e.isArray(t)) {
                                var r = u.create(t).pick;
                                r < i.pick ? o = !0 : r > i.pick && (a = !0)
                            }
                            return n.isInteger(t)
                        }).length;
                    if ((!r || !r.nav) && (!f && u.disabled(i) || f && u.disabled(i) && (g || o || a) || !f && (i.pick <= h.pick || i.pick >= p.pick)))
                        for (f && !g && (!a && d > 0 || !o && d < 0) && (d *= -1); u.disabled(i) && (Math.abs(d) > 1 && (i.month < c.month || i.month > c.month) && (i = c, d = d > 0 ? 1 : -1), i.pick <= h.pick ? (s = !0, d = 1, i = u.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : -1)])) : i.pick >= p.pick && (l = !0, d = -1, i = u.create([p.year, p.month, p.date + (i.pick === p.pick ? 0 : 1)])), !s || !l);) i = u.create([i.year, i.month, i.date + d]);
                    return i
                }, DatePicker.prototype.disabled = function(t) {
                    var i = this,
                        r = i.item.disable.filter(function(r) {
                            return n.isInteger(r) ? t.day === (i.settings.firstDay ? r : r - 1) % 7 : e.isArray(r) || n.isDate(r) ? t.pick === i.create(r).pick : e.isPlainObject(r) ? i.withinRange(r, t) : void 0
                        });
                    return r = r.length && !r.filter(function(t) {
                        return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
                    }).length, -1 === i.item.enable ? !r : r || t.pick < i.item.min.pick || t.pick > i.item.max.pick
                }, DatePicker.prototype.parse = function(t, e, i) {
                    var r = this,
                        o = {};
                    return e && "string" == typeof e ? (i && i.format || (i = i || {}, i.format = r.settings.format), r.formats.toArray(i.format).map(function(t) {
                        var i = r.formats[t],
                            a = i ? n.trigger(i, r, [e, o]) : t.replace(/^!/, "").length;
                        i && (o[t] = e.substr(0, a)), e = e.substr(a)
                    }), [o.yyyy || o.yy, +(o.mm || o.m) - 1, o.dd || o.d]) : e
                }, DatePicker.prototype.formats = function() {
                    function getWordLengthFromCollection(t, e, n) {
                        var i = t.match(/\w+/)[0];
                        return n.mm || n.m || (n.m = e.indexOf(i) + 1), i.length
                    }

                    function getFirstWordLength(t) {
                        return t.match(/\w+/)[0].length
                    }
                    return {
                        d: function(t, e) {
                            return t ? n.digits(t) : e.date
                        },
                        dd: function(t, e) {
                            return t ? 2 : n.lead(e.date)
                        },
                        ddd: function(t, e) {
                            return t ? getFirstWordLength(t) : this.settings.weekdaysShort[e.day]
                        },
                        dddd: function(t, e) {
                            return t ? getFirstWordLength(t) : this.settings.weekdaysFull[e.day]
                        },
                        m: function(t, e) {
                            return t ? n.digits(t) : e.month + 1
                        },
                        mm: function(t, e) {
                            return t ? 2 : n.lead(e.month + 1)
                        },
                        mmm: function(t, e) {
                            var n = this.settings.monthsShort;
                            return t ? getWordLengthFromCollection(t, n, e) : n[e.month]
                        },
                        mmmm: function(t, e) {
                            var n = this.settings.monthsFull;
                            return t ? getWordLengthFromCollection(t, n, e) : n[e.month]
                        },
                        yy: function(t, e) {
                            return t ? 2 : ("" + e.year).slice(2)
                        },
                        yyyy: function(t, e) {
                            return t ? 4 : e.year
                        },
                        toArray: function(t) {
                            return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                        },
                        toString: function(t, e) {
                            var i = this;
                            return i.formats.toArray(t).map(function(t) {
                                return n.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "")
                            }).join("")
                        }
                    }
                }(), DatePicker.prototype.isDateExact = function(t, i) {
                    var r = this;
                    return n.isInteger(t) && n.isInteger(i) || "boolean" == typeof t && "boolean" == typeof i ? t === i : (n.isDate(t) || e.isArray(t)) && (n.isDate(i) || e.isArray(i)) ? r.create(t).pick === r.create(i).pick : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && (r.isDateExact(t.from, i.from) && r.isDateExact(t.to, i.to))
                }, DatePicker.prototype.isDateOverlap = function(t, i) {
                    var r = this,
                        o = r.settings.firstDay ? 1 : 0;
                    return n.isInteger(t) && (n.isDate(i) || e.isArray(i)) ? (t = t % 7 + o) === r.create(i).day + 1 : n.isInteger(i) && (n.isDate(t) || e.isArray(t)) ? (i = i % 7 + o) === r.create(t).day + 1 : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && r.overlapRanges(t, i)
                }, DatePicker.prototype.flipEnable = function(t) {
                    var e = this.item;
                    e.enable = t || (-1 == e.enable ? 1 : -1)
                }, DatePicker.prototype.deactivate = function(t, i) {
                    var r = this,
                        o = r.item.disable.slice(0);
                    return "flip" == i ? r.flipEnable() : !1 === i ? (r.flipEnable(1), o = []) : !0 === i ? (r.flipEnable(-1), o = []) : i.map(function(t) {
                        for (var i, a = 0; a < o.length; a += 1)
                            if (r.isDateExact(t, o[a])) {
                                i = !0;
                                break
                            }
                        i || (n.isInteger(t) || n.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && o.push(t)
                    }), o
                }, DatePicker.prototype.activate = function(t, i) {
                    var r = this,
                        o = r.item.disable,
                        a = o.length;
                    return "flip" == i ? r.flipEnable() : !0 === i ? (r.flipEnable(1), o = []) : !1 === i ? (r.flipEnable(-1), o = []) : i.map(function(t) {
                        var i, s, l, u;
                        for (l = 0; l < a; l += 1) {
                            if (s = o[l], r.isDateExact(s, t)) {
                                i = o[l] = null, u = !0;
                                break
                            }
                            if (r.isDateOverlap(s, t)) {
                                e.isPlainObject(t) ? (t.inverted = !0, i = t) : e.isArray(t) ? (i = t, i[3] || i.push("inverted")) : n.isDate(t) && (i = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
                                break
                            }
                        }
                        if (i)
                            for (l = 0; l < a; l += 1)
                                if (r.isDateExact(o[l], t)) {
                                    o[l] = null;
                                    break
                                }
                        if (u)
                            for (l = 0; l < a; l += 1)
                                if (r.isDateOverlap(o[l], t)) {
                                    o[l] = null;
                                    break
                                }
                        i && o.push(i)
                    }), o.filter(function(t) {
                        return null != t
                    })
                }, DatePicker.prototype.nodes = function(t) {
                    var e = this,
                        i = e.settings,
                        r = e.item,
                        o = r.now,
                        a = r.select,
                        s = r.highlight,
                        l = r.view,
                        u = r.disable,
                        c = r.min,
                        d = r.max,
                        f = function(t, e) {
                            return i.firstDay && (t.push(t.shift()), e.push(e.shift())), n.node("thead", n.node("tr", n.group({
                                min: 0,
                                max: 6,
                                i: 1,
                                node: "th",
                                item: function(n) {
                                    return [t[n], i.klass.weekdays, 'scope=col title="' + e[n] + '"']
                                }
                            })))
                        }((i.showWeekdaysFull ? i.weekdaysFull : i.weekdaysLetter).slice(0), i.weekdaysFull.slice(0)),
                        h = function(t) {
                            return n.node("div", " ", i.klass["nav" + (t ? "Next" : "Prev")] + (t && l.year >= d.year && l.month >= d.month || !t && l.year <= c.year && l.month <= c.month ? " " + i.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + n.ariaAttr({
                                role: "button",
                                controls: e.$node[0].id + "_table"
                            }) + ' title="' + (t ? i.labelMonthNext : i.labelMonthPrev) + '"')
                        },
                        p = function(r) {
                            var o = i.showMonthsShort ? i.monthsShort : i.monthsFull;
                            return "short_months" == r && (o = i.monthsShort), i.selectMonths && void 0 == r ? n.node("select", n.group({
                                min: 0,
                                max: 11,
                                i: 1,
                                node: "option",
                                item: function(t) {
                                    return [o[t], 0, "value=" + t + (l.month == t ? " selected" : "") + (l.year == c.year && t < c.month || l.year == d.year && t > d.month ? " disabled" : "")]
                                }
                            }), i.klass.selectMonth + " browser-default", (t ? "" : "disabled") + " " + n.ariaAttr({
                                controls: e.$node[0].id + "_table"
                            }) + ' title="' + i.labelMonthSelect + '"') : "short_months" == r ? null != a ? n.node("div", o[a.month]) : n.node("div", o[l.month]) : n.node("div", o[l.month], i.klass.month)
                        },
                        g = function(r) {
                            var o = l.year,
                                a = !0 === i.selectYears ? 5 : ~~(i.selectYears / 2);
                            if (a) {
                                var s = c.year,
                                    u = d.year,
                                    f = o - a,
                                    h = o + a;
                                if (s > f && (h += s - f, f = s), u < h) {
                                    var p = f - s,
                                        g = h - u;
                                    f -= p > g ? g : p, h = u
                                }
                                if (i.selectYears && void 0 == r) return n.node("select", n.group({
                                    min: f,
                                    max: h,
                                    i: 1,
                                    node: "option",
                                    item: function(t) {
                                        return [t, 0, "value=" + t + (o == t ? " selected" : "")]
                                    }
                                }), i.klass.selectYear + " browser-default", (t ? "" : "disabled") + " " + n.ariaAttr({
                                    controls: e.$node[0].id + "_table"
                                }) + ' title="' + i.labelYearSelect + '"')
                            }
                            return "raw" == r ? n.node("div", o) : n.node("div", o, i.klass.year)
                        };
                    return createDayLabel = function() {
                        return null != a ? n.node("div", a.date) : n.node("div", o.date)
                    }, createWeekdayLabel = function() {
                        var t;
                        return t = null != a ? a.day : o.day, i.weekdaysFull[t]
                    }, n.node("div", n.node("div", createWeekdayLabel(), "picker__weekday-display") + n.node("div", p("short_months"), i.klass.month_display) + n.node("div", createDayLabel(), i.klass.day_display) + n.node("div", g("raw"), i.klass.year_display), i.klass.date_display) + n.node("div", n.node("div", (i.selectYears, p() + g() + h() + h(1)), i.klass.header) + n.node("table", f + n.node("tbody", n.group({
                        min: 0,
                        max: 5,
                        i: 1,
                        node: "tr",
                        item: function(t) {
                            var r = i.firstDay && 0 === e.create([l.year, l.month, 1]).day ? -7 : 0;
                            return [n.group({
                                min: 7 * t - l.day + r + 1,
                                max: function() {
                                    return this.min + 7 - 1
                                },
                                i: 1,
                                node: "td",
                                item: function(t) {
                                    t = e.create([l.year, l.month, t + (i.firstDay ? 1 : 0)]);
                                    var r = a && a.pick == t.pick,
                                        f = s && s.pick == t.pick,
                                        h = u && e.disabled(t) || t.pick < c.pick || t.pick > d.pick,
                                        p = n.trigger(e.formats.toString, e, [i.format, t]);
                                    return [n.node("div", t.date, function(e) {
                                        return e.push(l.month == t.month ? i.klass.infocus : i.klass.outfocus), o.pick == t.pick && e.push(i.klass.now), r && e.push(i.klass.selected), f && e.push(i.klass.highlighted), h && e.push(i.klass.disabled), e.join(" ")
                                    }([i.klass.day]), "data-pick=" + t.pick + " " + n.ariaAttr({
                                        role: "gridcell",
                                        label: p,
                                        selected: !(!r || e.$node.val() !== p) || null,
                                        activedescendant: !!f || null,
                                        disabled: !!h || null
                                    })), "", n.ariaAttr({
                                        role: "presentation"
                                    })]
                                }
                            })]
                        }
                    })), i.klass.table, 'id="' + e.$node[0].id + '_table" ' + n.ariaAttr({
                        role: "grid",
                        controls: e.$node[0].id,
                        readonly: !0
                    })), i.klass.calendar_container) + n.node("div", n.node("button", i.today, "btn-flat picker__today", "type=button data-pick=" + o.pick + (t && !e.disabled(o) ? "" : " disabled") + " " + n.ariaAttr({
                        controls: e.$node[0].id
                    })) + n.node("button", i.clear, "btn-flat picker__clear", "type=button data-clear=1" + (t ? "" : " disabled") + " " + n.ariaAttr({
                        controls: e.$node[0].id
                    })) + n.node("button", i.close, "btn-flat picker__close", "type=button data-close=true " + (t ? "" : " disabled") + " " + n.ariaAttr({
                        controls: e.$node[0].id
                    })), i.klass.footer)
                }, DatePicker.defaults = function(t) {
                    return {
                        labelMonthNext: "Next month",
                        labelMonthPrev: "Previous month",
                        labelMonthSelect: "Select a month",
                        labelYearSelect: "Select a year",
                        monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
                        today: "Today",
                        clear: "Clear",
                        close: "Close",
                        format: "d mmmm, yyyy",
                        klass: {
                            table: t + "table",
                            header: t + "header",
                            date_display: t + "date-display",
                            day_display: t + "day-display",
                            month_display: t + "month-display",
                            year_display: t + "year-display",
                            calendar_container: t + "calendar-container",
                            navPrev: t + "nav--prev",
                            navNext: t + "nav--next",
                            navDisabled: t + "nav--disabled",
                            month: t + "month",
                            year: t + "year",
                            selectMonth: t + "select--month",
                            selectYear: t + "select--year",
                            weekdays: t + "weekday",
                            day: t + "day",
                            disabled: t + "day--disabled",
                            selected: t + "day--selected",
                            highlighted: t + "day--highlighted",
                            now: t + "day--today",
                            infocus: t + "day--infocus",
                            outfocus: t + "day--outfocus",
                            footer: t + "footer",
                            buttonClear: t + "button--clear",
                            buttonToday: t + "button--today",
                            buttonClose: t + "button--close"
                        }
                    }
                }(t.klasses().picker + "__"), t.extend("pickadate", DatePicker)
            }),
            function(t) {
                function updateCounter() {
                    var e = +t(this).attr("data-length"),
                        n = +t(this).val().length,
                        i = n <= e;
                    t(this).parent().find('span[class="character-counter"]').html(n + "/" + e), addInputStyle(i, t(this))
                }

                function addCounterElement(e) {
                    var n = e.parent().find('span[class="character-counter"]');
                    n.length || (n = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), e.parent().append(n))
                }

                function removeCounterElement() {
                    t(this).parent().find('span[class="character-counter"]').html("")
                }

                function addInputStyle(t, e) {
                    var n = e.hasClass("invalid");
                    t && n ? e.removeClass("invalid") : t || n || (e.removeClass("valid"), e.addClass("invalid"))
                }
                t.fn.characterCounter = function() {
                    return this.each(function() {
                        var e = t(this);
                        e.parent().find('span[class="character-counter"]').length || void 0 !== e.attr("data-length") && (e.on("input", updateCounter), e.on("focus", updateCounter), e.on("blur", removeCounterElement), addCounterElement(e))
                    })
                }, t(document).ready(function() {
                    t("input, textarea").characterCounter()
                })
            }(C),
            function(t) {
                var e = {
                    init: function(e) {
                        var n = {
                            duration: 200,
                            dist: -100,
                            shift: 0,
                            padding: 0,
                            fullWidth: !1,
                            indicators: !1,
                            noWrap: !1,
                            onCycleTo: null
                        };
                        e = t.extend(n, e);
                        var i = Materialize.objectSelectorString(t(this));
                        return this.each(function(n) {
                            function xpos(t) {
                                return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
                            }

                            function ypos(t) {
                                return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY
                            }

                            function wrap(t) {
                                return t >= d ? t % d : t < 0 ? wrap(d + t % d) : t
                            }

                            function scroll(n) {
                                m = !0, A.hasClass("scrolling") || A.addClass("scrolling"), null != _ && window.clearTimeout(_), _ = window.setTimeout(function() {
                                    m = !1, A.removeClass("scrolling")
                                }, e.duration);
                                var i, u, f, h, p, g, v, y = l;
                                if (s = "number" == typeof n ? n : s, l = Math.floor((s + c / 2) / c), f = s - l * c, h = f < 0 ? 1 : -1, p = -h * f * 2 / c, u = d >> 1, e.fullWidth ? v = "translateX(0)" : (v = "translateX(" + (A[0].clientWidth - o) / 2 + "px) ", v += "translateY(" + (A[0].clientHeight - a) / 2 + "px)"), P) {
                                    var w = l % d,
                                        x = S.find(".indicator-item.active");
                                    x.index() !== w && (x.removeClass("active"), S.find(".indicator-item").eq(w).addClass("active"))
                                }
                                for ((!e.noWrap || l >= 0 && l < d) && (g = r[wrap(l)], t(g).hasClass("active") || (A.find(".carousel-item").removeClass("active"), t(g).addClass("active")), g.style[b] = v + " translateX(" + -f / 2 + "px) translateX(" + h * e.shift * p * i + "px) translateZ(" + e.dist * p + "px)", g.style.zIndex = 0, e.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * p, g.style.opacity = tweenedOpacity, g.style.display = "block"), i = 1; i <= u; ++i) e.fullWidth ? (zTranslation = e.dist, tweenedOpacity = i === u && f < 0 ? 1 - p : 1) : (zTranslation = e.dist * (2 * i + p * h), tweenedOpacity = 1 - .2 * (2 * i + p * h)), (!e.noWrap || l + i < d) && (g = r[wrap(l + i)], g.style[b] = v + " translateX(" + (e.shift + (c * i - f) / 2) + "px) translateZ(" + zTranslation + "px)", g.style.zIndex = -i, g.style.opacity = tweenedOpacity, g.style.display = "block"), e.fullWidth ? (zTranslation = e.dist, tweenedOpacity = i === u && f > 0 ? 1 - p : 1) : (zTranslation = e.dist * (2 * i - p * h), tweenedOpacity = 1 - .2 * (2 * i - p * h)), (!e.noWrap || l - i >= 0) && (g = r[wrap(l - i)], g.style[b] = v + " translateX(" + (-e.shift + (-c * i - f) / 2) + "px) translateZ(" + zTranslation + "px)", g.style.zIndex = -i, g.style.opacity = tweenedOpacity, g.style.display = "block");
                                if ((!e.noWrap || l >= 0 && l < d) && (g = r[wrap(l)], g.style[b] = v + " translateX(" + -f / 2 + "px) translateX(" + h * e.shift * p + "px) translateZ(" + e.dist * p + "px)", g.style.zIndex = 0, e.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * p, g.style.opacity = tweenedOpacity, g.style.display = "block"), y !== l && "function" == typeof e.onCycleTo) {
                                    var T = A.find(".carousel-item").eq(wrap(l));
                                    e.onCycleTo.call(this, T, C)
                                }
                            }

                            function track() {
                                var t, e, n, i;
                                t = Date.now(), e = t - x, x = t, n = s - w, w = s, i = 1e3 * n / (1 + e), v = .8 * i + .2 * v
                            }

                            function autoScroll() {
                                var t, n;
                                p && (t = Date.now() - x, n = p * Math.exp(-t / e.duration), n > 2 || n < -2 ? (scroll(g - n), requestAnimationFrame(autoScroll)) : scroll(g))
                            }

                            function click(n) {
                                if (C) return n.preventDefault(), n.stopPropagation(), !1;
                                if (!e.fullWidth) {
                                    var i = t(n.target).closest(".carousel-item").index();
                                    0 !== l % d - i && (n.preventDefault(), n.stopPropagation()), cycleTo(i)
                                }
                            }

                            function cycleTo(t) {
                                var n = l % d - t;
                                e.noWrap || (n < 0 ? Math.abs(n + d) < Math.abs(n) && (n += d) : n > 0 && Math.abs(n - d) < n && (n -= d)), n < 0 ? A.trigger("carouselNext", [Math.abs(n)]) : n > 0 && A.trigger("carouselPrev", [n])
                            }

                            function tap(t) {
                                t.preventDefault(), u = !0, C = !1, k = !1, f = xpos(t), h = ypos(t), v = p = 0, w = s, x = Date.now(), clearInterval(T), T = setInterval(track, 100)
                            }

                            function drag(t) {
                                var e, n;
                                if (u)
                                    if (e = xpos(t), y = ypos(t), n = f - e, Math.abs(h - y) < 30 && !k)(n > 2 || n < -2) && (C = !0, f = e, scroll(s + n));
                                    else {
                                        if (C) return t.preventDefault(), t.stopPropagation(), !1;
                                        k = !0
                                    }
                                if (C) return t.preventDefault(), t.stopPropagation(), !1
                            }

                            function release(t) {
                                if (u) return u = !1, clearInterval(T), g = s, (v > 10 || v < -10) && (p = .9 * v, g = s + p), g = Math.round(g / c) * c, e.noWrap && (g >= c * (d - 1) ? g = c * (d - 1) : g < 0 && (g = 0)), p = g - s, x = Date.now(), requestAnimationFrame(autoScroll), C && (t.preventDefault(), t.stopPropagation()), !1
                            }
                            var r, o, a, s, l, u, c, d, f, h, p, g, v, m, b, w, x, T, C, k, E = i + n,
                                S = t('<ul class="indicators"></ul>'),
                                _ = null,
                                A = t(this),
                                P = A.attr("data-indicators") || e.indicators;
                            if (e.fullWidth && (e.dist = 0, function() {
                                    var e = A.find(".carousel-item img").first();
                                    if (e.length) e.prop("complete") ? A.css("height", e.height()) : e.on("load", function() {
                                        A.css("height", t(this).height())
                                    });
                                    else {
                                        var n = A.find(".carousel-item").first().height();
                                        A.css("height", n)
                                    }
                                }(), P && A.find(".carousel-fixed-item").addClass("with-indicators")), A.hasClass("initialized")) return t(window).trigger("resize"), t(this).trigger("carouselNext", [1e-6]), !0;
                            A.addClass("initialized"), u = !1, s = g = 0, r = [], o = A.find(".carousel-item").first().innerWidth(), a = A.find(".carousel-item").first().innerHeight(), c = 2 * o + e.padding, A.find(".carousel-item").each(function(e) {
                                    if (r.push(t(this)[0]), P) {
                                        var n = t('<li class="indicator-item"></li>');
                                        0 === e && n.addClass("active"), n.click(function(e) {
                                            e.stopPropagation(), cycleTo(t(this).index())
                                        }), S.append(n)
                                    }
                                }), P && A.append(S), d = r.length, b = "transform", ["webkit", "Moz", "O", "ms"].every(function(t) {
                                    var e = t + "Transform";
                                    return void 0 === document.body.style[e] || (b = e, !1)
                                }), t(window).off("resize.carousel-" + E).on("resize.carousel-" + E, function() {
                                    e.fullWidth ? (o = A.find(".carousel-item").first().innerWidth(), a = A.find(".carousel-item").first().innerHeight(), c = 2 * o + e.padding, s = 2 * l * o, g = s) : scroll()
                                }),
                                function() {
                                    void 0 !== window.ontouchstart && (A[0].addEventListener("touchstart", tap), A[0].addEventListener("touchmove", drag), A[0].addEventListener("touchend", release)), A[0].addEventListener("mousedown", tap), A[0].addEventListener("mousemove", drag), A[0].addEventListener("mouseup", release), A[0].addEventListener("mouseleave", release), A[0].addEventListener("click", click)
                                }(), scroll(s), t(this).on("carouselNext", function(t, e) {
                                    void 0 === e && (e = 1), g = c * Math.round(s / c) + c * e, s !== g && (p = g - s, x = Date.now(), requestAnimationFrame(autoScroll))
                                }), t(this).on("carouselPrev", function(t, e) {
                                    void 0 === e && (e = 1), g = c * Math.round(s / c) - c * e, s !== g && (p = g - s, x = Date.now(), requestAnimationFrame(autoScroll))
                                }), t(this).on("carouselSet", function(t, e) {
                                    void 0 === e && (e = 0), cycleTo(e)
                                })
                        })
                    },
                    next: function(e) {
                        t(this).trigger("carouselNext", [e])
                    },
                    prev: function(e) {
                        t(this).trigger("carouselPrev", [e])
                    },
                    set: function(e) {
                        t(this).trigger("carouselSet", [e])
                    }
                };
                t.fn.carousel = function(n) {
                    return e[n] ? e[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.carousel") : e.init.apply(this, arguments)
                }
            }(C),
            function(t) {
                var e = {
                    init: function(e) {
                        return this.each(function() {
                            var n = t("#" + t(this).attr("data-activates")),
                                i = (t("body"), t(this)),
                                r = i.parent(".tap-target-wrapper"),
                                o = r.find(".tap-target-wave"),
                                a = r.find(".tap-target-origin"),
                                s = i.find(".tap-target-content");
                            r.length || (r = i.wrap(t('<div class="tap-target-wrapper"></div>')).parent()), s.length || (s = t('<div class="tap-target-content"></div>'), i.append(s)), o.length || (o = t('<div class="tap-target-wave"></div>'), a.length || (a = n.clone(!0, !0), a.addClass("tap-target-origin"), a.removeAttr("id"), a.removeAttr("style"), o.append(a)), r.append(o));
                            var l = function() {
                                    r.is(".open") && (r.removeClass("open"), a.off("click.tapTarget"), t(document).off("click.tapTarget"), t(window).off("resize.tapTarget"))
                                },
                                u = function() {
                                    var e = "fixed" === n.css("position");
                                    if (!e)
                                        for (var a = n.parents(), l = 0; l < a.length && !(e = "fixed" == t(a[l]).css("position")); l++);
                                    var u = n.outerWidth(),
                                        c = n.outerHeight(),
                                        d = e ? n.offset().top - t(document).scrollTop() : n.offset().top,
                                        f = e ? n.offset().left - t(document).scrollLeft() : n.offset().left,
                                        h = t(window).width(),
                                        p = t(window).height(),
                                        g = h / 2,
                                        v = p / 2,
                                        m = f <= g,
                                        y = f > g,
                                        b = d <= v,
                                        w = d > v,
                                        x = f >= .25 * h && f <= .75 * h,
                                        T = i.outerWidth(),
                                        C = i.outerHeight(),
                                        k = d + c / 2 - C / 2,
                                        E = f + u / 2 - T / 2,
                                        S = e ? "fixed" : "absolute",
                                        _ = x ? T : T / 2 + u,
                                        A = C / 2,
                                        P = b ? C / 2 : 0,
                                        D = m && !x ? T / 2 - u : 0,
                                        O = u,
                                        N = w ? "bottom" : "top",
                                        M = 2 * u,
                                        I = M,
                                        R = C / 2 - I / 2,
                                        L = T / 2 - M / 2,
                                        z = {};
                                    z.top = b ? k : "", z.right = y ? h - E - T : "", z.bottom = w ? p - k - C : "", z.left = m ? E : "", z.position = S, r.css(z), s.css({
                                        width: _,
                                        height: A,
                                        top: P,
                                        right: 0,
                                        bottom: 0,
                                        left: D,
                                        padding: O,
                                        verticalAlign: N
                                    }), o.css({
                                        top: R,
                                        left: L,
                                        width: M,
                                        height: I
                                    })
                                };
                            "open" == e && (u(), function() {
                                r.is(".open") || (r.addClass("open"), setTimeout(function() {
                                    a.off("click.tapTarget").on("click.tapTarget", function(t) {
                                        l(), a.off("click.tapTarget")
                                    }), t(document).off("click.tapTarget").on("click.tapTarget", function(e) {
                                        l(), t(document).off("click.tapTarget")
                                    });
                                    var e = Materialize.throttle(function() {
                                        u()
                                    }, 200);
                                    t(window).off("resize.tapTarget").on("resize.tapTarget", e)
                                }, 0))
                            }()), "close" == e && l()
                        })
                    },
                    open: function() {},
                    close: function() {}
                };
                t.fn.tapTarget = function(n) {
                    if (e[n] || "object" == typeof n) return e.init.apply(this, arguments);
                    t.error("Method " + n + " does not exist on jQuery.tap-target")
                }
            }(C)
    }).call(i, a(0), a(0))
}, , , function(t, e, n) {
    "use strict";
    var i = n(0),
        r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(i);
    n(50), n(51), n(21);
    var o = n(46);
    n(45), n(44), n(49), (0, r.default)(document).ready(function() {
        (0, r.default)(".button-collapse").sideNav(), (0, r.default)("select").material_select(), (0, r.default)(".collapsible").collapsible({
            accordion: !1
        }), (0, r.default)(".datepicker").pickadate({
            selectMonths: !0,
            selectYears: 15,
            formatSubmit: "dd/mm/yyyy",
            hiddenName: !0,
            format: "dd/mm/yyyy",
            container: "body"
        }), (0, o.initFilters)(), (0, o.initExport)();
        var t = function(t, e) {
            (0, r.default)(".nav-panel-actions").hide(100), (0, r.default)(t).show(100), (0, r.default)(".nav-panels").css("background", "white"), (0, r.default)(e).focus()
        };
        (0, r.default)("#nav-btn-add-tag").on("click", function() {
            return (0, r.default)(".nav-panel-add-tag").toggle(100), (0, r.default)(".nav-panel-menu").addClass("hidden"), (0, r.default)("#tag_label").focus(), !1
        }), (0, r.default)("#nav-btn-add").on("click", function() {
            return t(".nav-panel-add", "#entry_url"), !1
        });
        var e = (0, r.default)(".nav-panel-add");
        e.on("submit", function() {
            e.addClass("disabled"), (0, r.default)("input#entry_url", e).prop("readonly", !0).trigger("blur")
        }), (0, r.default)("#nav-btn-search").on("click", function() {
            return t(".nav-panel-search", "#search_entry_term"), !1
        }), (0, r.default)(".close").on("click", function(t) {
            return (0, r.default)(t.target).parent(".nav-panel-item").hide(100), (0, r.default)(".nav-panel-actions").show(100), (0, r.default)(".nav-panels").css("background", "transparent"), !1
        }), (0, r.default)(window).scroll(function() {
            var t = (0, r.default)(window).scrollTop(),
                e = (0, r.default)(document).height(),
                n = (0, r.default)(window).height(),
                i = t / (e - n) * 100;
            (0, r.default)(".progress .determinate").css("width", i + "%")
        })
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    var i;
    ! function(r, o, a, s) {
        "use strict";

        function setTimeoutContext(t, e, n) {
            return setTimeout(bindFn(t, n), e)
        }

        function invokeArrayArg(t, e, n) {
            return !!Array.isArray(t) && (each(t, n[e], n), !0)
        }

        function each(t, e, n) {
            var i;
            if (t)
                if (t.forEach) t.forEach(e, n);
                else if (t.length !== s)
                for (i = 0; i < t.length;) e.call(n, t[i], i, t), i++;
            else
                for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
        }

        function deprecate(t, e, n) {
            var i = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
            return function() {
                var e = new Error("get-stack-trace"),
                    n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    o = r.console && (r.console.warn || r.console.log);
                return o && o.call(r.console, i, n), t.apply(this, arguments)
            }
        }

        function inherit(t, e, n) {
            var i, r = e.prototype;
            i = t.prototype = Object.create(r), i.constructor = t, i._super = r, n && l(i, n)
        }

        function bindFn(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function boolOrFn(t, e) {
            return typeof t == d ? t.apply(e ? e[0] || s : s, e) : t
        }

        function ifUndefined(t, e) {
            return t === s ? e : t
        }

        function addEventListeners(t, e, n) {
            each(splitStr(e), function(e) {
                t.addEventListener(e, n, !1)
            })
        }

        function removeEventListeners(t, e, n) {
            each(splitStr(e), function(e) {
                t.removeEventListener(e, n, !1)
            })
        }

        function hasParent(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function inStr(t, e) {
            return t.indexOf(e) > -1
        }

        function splitStr(t) {
            return t.trim().split(/\s+/g)
        }

        function inArray(t, e, n) {
            if (t.indexOf && !n) return t.indexOf(e);
            for (var i = 0; i < t.length;) {
                if (n && t[i][n] == e || !n && t[i] === e) return i;
                i++
            }
            return -1
        }

        function toArray(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function uniqueArray(t, e, n) {
            for (var i = [], r = [], o = 0; o < t.length;) {
                var a = e ? t[o][e] : t[o];
                inArray(r, a) < 0 && i.push(t[o]), r[o] = a, o++
            }
            return n && (i = e ? i.sort(function(t, n) {
                return t[e] > n[e]
            }) : i.sort()), i
        }

        function prefixed(t, e) {
            for (var n, i, r = e[0].toUpperCase() + e.slice(1), o = 0; o < u.length;) {
                if (n = u[o], (i = n ? n + r : e) in t) return i;
                o++
            }
            return s
        }

        function uniqueId() {
            return m++
        }

        function getWindowForElement(t) {
            var e = t.ownerDocument || t;
            return e.defaultView || e.parentWindow || r
        }

        function Input(t, e) {
            var n = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                boolOrFn(t.options.enable, [t]) && n.handler(e)
            }, this.init()
        }

        function createInputInstance(t) {
            var e = t.options.inputClass;
            return new(e || (w ? PointerEventInput : x ? TouchInput : b ? TouchMouseInput : MouseInput))(t, inputHandler)
        }

        function inputHandler(t, e, n) {
            var i = n.pointers.length,
                r = n.changedPointers.length,
                o = e & C && i - r == 0,
                a = e & (E | S) && i - r == 0;
            n.isFirst = !!o, n.isFinal = !!a, o && (t.session = {}), n.eventType = e, computeInputData(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
        }

        function computeInputData(t, e) {
            var n = t.session,
                i = e.pointers,
                r = i.length;
            n.firstInput || (n.firstInput = simpleCloneInputData(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = simpleCloneInputData(e) : 1 === r && (n.firstMultiple = !1);
            var o = n.firstInput,
                a = n.firstMultiple,
                s = a ? a.center : o.center,
                l = e.center = getCenter(i);
            e.timeStamp = p(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = getAngle(s, l), e.distance = getDistance(s, l), computeDeltaXY(n, e), e.offsetDirection = getDirection(e.deltaX, e.deltaY);
            var u = getVelocity(e.deltaTime, e.deltaX, e.deltaY);
            e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = h(u.x) > h(u.y) ? u.x : u.y, e.scale = a ? getScale(a.pointers, i) : 1, e.rotation = a ? getRotation(a.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, computeIntervalInputData(n, e);
            var c = t.element;
            hasParent(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
        }

        function computeDeltaXY(t, e) {
            var n = e.center,
                i = t.offsetDelta || {},
                r = t.prevDelta || {},
                o = t.prevInput || {};
            e.eventType !== C && o.eventType !== E || (r = t.prevDelta = {
                x: o.deltaX || 0,
                y: o.deltaY || 0
            }, i = t.offsetDelta = {
                x: n.x,
                y: n.y
            }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
        }

        function computeIntervalInputData(t, e) {
            var n, i, r, o, a = t.lastInterval || e,
                l = e.timeStamp - a.timeStamp;
            if (e.eventType != S && (l > T || a.velocity === s)) {
                var u = e.deltaX - a.deltaX,
                    c = e.deltaY - a.deltaY,
                    d = getVelocity(l, u, c);
                i = d.x, r = d.y, n = h(d.x) > h(d.y) ? d.x : d.y, o = getDirection(u, c), t.lastInterval = e
            } else n = a.velocity, i = a.velocityX, r = a.velocityY, o = a.direction;
            e.velocity = n, e.velocityX = i, e.velocityY = r, e.direction = o
        }

        function simpleCloneInputData(t) {
            for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
                clientX: f(t.pointers[n].clientX),
                clientY: f(t.pointers[n].clientY)
            }, n++;
            return {
                timeStamp: p(),
                pointers: e,
                center: getCenter(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function getCenter(t) {
            var e = t.length;
            if (1 === e) return {
                x: f(t[0].clientX),
                y: f(t[0].clientY)
            };
            for (var n = 0, i = 0, r = 0; r < e;) n += t[r].clientX, i += t[r].clientY, r++;
            return {
                x: f(n / e),
                y: f(i / e)
            }
        }

        function getVelocity(t, e, n) {
            return {
                x: e / t || 0,
                y: n / t || 0
            }
        }

        function getDirection(t, e) {
            return t === e ? _ : h(t) >= h(e) ? t < 0 ? A : P : e < 0 ? D : O
        }

        function getDistance(t, e, n) {
            n || (n = R);
            var i = e[n[0]] - t[n[0]],
                r = e[n[1]] - t[n[1]];
            return Math.sqrt(i * i + r * r)
        }

        function getAngle(t, e, n) {
            n || (n = R);
            var i = e[n[0]] - t[n[0]],
                r = e[n[1]] - t[n[1]];
            return 180 * Math.atan2(r, i) / Math.PI
        }

        function getRotation(t, e) {
            return getAngle(e[1], e[0], L) + getAngle(t[1], t[0], L)
        }

        function getScale(t, e) {
            return getDistance(e[0], e[1], L) / getDistance(t[0], t[1], L)
        }

        function MouseInput() {
            this.evEl = F, this.evWin = q, this.pressed = !1, Input.apply(this, arguments)
        }

        function PointerEventInput() {
            this.evEl = W, this.evWin = B, Input.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function SingleTouchInput() {
            this.evTarget = X, this.evWin = $, this.started = !1, Input.apply(this, arguments)
        }

        function normalizeSingleTouches(t, e) {
            var n = toArray(t.touches),
                i = toArray(t.changedTouches);
            return e & (E | S) && (n = uniqueArray(n.concat(i), "identifier", !0)), [n, i]
        }

        function TouchInput() {
            this.evTarget = U, this.targetIds = {}, Input.apply(this, arguments)
        }

        function getTouches(t, e) {
            var n = toArray(t.touches),
                i = this.targetIds;
            if (e & (C | k) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
            var r, o, a = toArray(t.changedTouches),
                s = [],
                l = this.target;
            if (o = n.filter(function(t) {
                    return hasParent(t.target, l)
                }), e === C)
                for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
            for (r = 0; r < a.length;) i[a[r].identifier] && s.push(a[r]), e & (E | S) && delete i[a[r].identifier], r++;
            return s.length ? [uniqueArray(o.concat(s), "identifier", !0), s] : void 0
        }

        function TouchMouseInput() {
            Input.apply(this, arguments);
            var t = bindFn(this.handler, this);
            this.touch = new TouchInput(this.manager, t), this.mouse = new MouseInput(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function recordTouches(t, e) {
            t & C ? (this.primaryTouch = e.changedPointers[0].identifier, setLastTouch.call(this, e)) : t & (E | S) && setLastTouch.call(this, e)
        }

        function setLastTouch(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var n = {
                    x: e.clientX,
                    y: e.clientY
                };
                this.lastTouches.push(n);
                var i = this.lastTouches,
                    r = function() {
                        var t = i.indexOf(n);
                        t > -1 && i.splice(t, 1)
                    };
                setTimeout(r, Q)
            }
        }

        function isSyntheticEvent(t) {
            for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                var r = this.lastTouches[i],
                    o = Math.abs(e - r.x),
                    a = Math.abs(n - r.y);
                if (o <= G && a <= G) return !0
            }
            return !1
        }

        function TouchAction(t, e) {
            this.manager = t, this.set(e)
        }

        function cleanTouchActions(t) {
            if (inStr(t, et)) return et;
            var e = inStr(t, nt),
                n = inStr(t, it);
            return e && n ? et : e || n ? e ? nt : it : inStr(t, tt) ? tt : Z
        }

        function Recognizer(t) {
            this.options = l({}, this.defaults, t || {}), this.id = uniqueId(), this.manager = null, this.options.enable = ifUndefined(this.options.enable, !0), this.state = ot, this.simultaneous = {}, this.requireFail = []
        }

        function stateStr(t) {
            return t & ct ? "cancel" : t & lt ? "end" : t & st ? "move" : t & at ? "start" : ""
        }

        function directionStr(t) {
            return t == O ? "down" : t == D ? "up" : t == A ? "left" : t == P ? "right" : ""
        }

        function getRecognizerByNameIfManager(t, e) {
            var n = e.manager;
            return n ? n.get(t) : t
        }

        function AttrRecognizer() {
            Recognizer.apply(this, arguments)
        }

        function PanRecognizer() {
            AttrRecognizer.apply(this, arguments), this.pX = null, this.pY = null
        }

        function PinchRecognizer() {
            AttrRecognizer.apply(this, arguments)
        }

        function PressRecognizer() {
            Recognizer.apply(this, arguments), this._timer = null, this._input = null
        }

        function RotateRecognizer() {
            AttrRecognizer.apply(this, arguments)
        }

        function SwipeRecognizer() {
            AttrRecognizer.apply(this, arguments)
        }

        function TapRecognizer() {
            Recognizer.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Hammer(t, e) {
            return e = e || {}, e.recognizers = ifUndefined(e.recognizers, Hammer.defaults.preset), new Manager(t, e)
        }

        function Manager(t, e) {
            this.options = l({}, Hammer.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = createInputInstance(this), this.touchAction = new TouchAction(this, this.options.touchAction), toggleCssProps(this, !0), each(this.options.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function toggleCssProps(t, e) {
            var n = t.element;
            if (n.style) {
                var i;
                each(t.options.cssProps, function(r, o) {
                    i = prefixed(n.style, o), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = r) : n.style[i] = t.oldCssProps[i] || ""
                }), e || (t.oldCssProps = {})
            }
        }

        function triggerDomEvent(t, e) {
            var n = o.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
        }
        var l, u = ["", "webkit", "Moz", "MS", "ms", "o"],
            c = o.createElement("div"),
            d = "function",
            f = Math.round,
            h = Math.abs,
            p = Date.now;
        l = "function" != typeof Object.assign ? function(t) {
            if (t === s || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (i !== s && null !== i)
                    for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r])
            }
            return e
        } : Object.assign;
        var g = deprecate(function(t, e, n) {
                for (var i = Object.keys(e), r = 0; r < i.length;)(!n || n && t[i[r]] === s) && (t[i[r]] = e[i[r]]), r++;
                return t
            }, "extend", "Use `assign`."),
            v = deprecate(function(t, e) {
                return g(t, e, !0)
            }, "merge", "Use `assign`."),
            m = 1,
            y = /mobile|tablet|ip(ad|hone|od)|android/i,
            b = "ontouchstart" in r,
            w = prefixed(r, "PointerEvent") !== s,
            x = b && y.test(navigator.userAgent),
            T = 25,
            C = 1,
            k = 2,
            E = 4,
            S = 8,
            _ = 1,
            A = 2,
            P = 4,
            D = 8,
            O = 16,
            N = A | P,
            M = D | O,
            I = N | M,
            R = ["x", "y"],
            L = ["clientX", "clientY"];
        Input.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && addEventListeners(this.element, this.evEl, this.domHandler), this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler), this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler), this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler), this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler)
            }
        };
        var z = {
                mousedown: C,
                mousemove: k,
                mouseup: E
            },
            F = "mousedown",
            q = "mousemove mouseup";
        inherit(MouseInput, Input, {
            handler: function(t) {
                var e = z[t.type];
                e & C && 0 === t.button && (this.pressed = !0), e & k && 1 !== t.which && (e = E), this.pressed && (e & E && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: "mouse",
                    srcEvent: t
                }))
            }
        });
        var H = {
                pointerdown: C,
                pointermove: k,
                pointerup: E,
                pointercancel: S,
                pointerout: S
            },
            j = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            W = "pointerdown",
            B = "pointermove pointerup pointercancel";
        r.MSPointerEvent && !r.PointerEvent && (W = "MSPointerDown", B = "MSPointerMove MSPointerUp MSPointerCancel"), inherit(PointerEventInput, Input, {
            handler: function(t) {
                var e = this.store,
                    n = !1,
                    i = t.type.toLowerCase().replace("ms", ""),
                    r = H[i],
                    o = j[t.pointerType] || t.pointerType,
                    a = "touch" == o,
                    s = inArray(e, t.pointerId, "pointerId");
                r & C && (0 === t.button || a) ? s < 0 && (e.push(t), s = e.length - 1) : r & (E | S) && (n = !0), s < 0 || (e[s] = t, this.callback(this.manager, r, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: o,
                    srcEvent: t
                }), n && e.splice(s, 1))
            }
        });
        var V = {
                touchstart: C,
                touchmove: k,
                touchend: E,
                touchcancel: S
            },
            X = "touchstart",
            $ = "touchstart touchmove touchend touchcancel";
        inherit(SingleTouchInput, Input, {
            handler: function(t) {
                var e = V[t.type];
                if (e === C && (this.started = !0), this.started) {
                    var n = normalizeSingleTouches.call(this, t, e);
                    e & (E | S) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                        pointers: n[0],
                        changedPointers: n[1],
                        pointerType: "touch",
                        srcEvent: t
                    })
                }
            }
        });
        var Y = {
                touchstart: C,
                touchmove: k,
                touchend: E,
                touchcancel: S
            },
            U = "touchstart touchmove touchend touchcancel";
        inherit(TouchInput, Input, {
            handler: function(t) {
                var e = Y[t.type],
                    n = getTouches.call(this, t, e);
                n && this.callback(this.manager, e, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: "touch",
                    srcEvent: t
                })
            }
        });
        var Q = 2500,
            G = 25;
        inherit(TouchMouseInput, Input, {
            handler: function(t, e, n) {
                var i = "touch" == n.pointerType,
                    r = "mouse" == n.pointerType;
                if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                    if (i) recordTouches.call(this, e, n);
                    else if (r && isSyntheticEvent.call(this, n)) return;
                    this.callback(t, e, n)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var K = prefixed(c.style, "touchAction"),
            J = K !== s,
            Z = "auto",
            tt = "manipulation",
            et = "none",
            nt = "pan-x",
            it = "pan-y",
            rt = function() {
                if (!J) return !1;
                var t = {},
                    e = r.CSS && r.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
                    t[n] = !e || r.CSS.supports("touch-action", n)
                }), t
            }();
        TouchAction.prototype = {
            set: function(t) {
                "compute" == t && (t = this.compute()), J && this.manager.element.style && rt[t] && (this.manager.element.style[K] = t), this.actions = t.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var t = [];
                return each(this.manager.recognizers, function(e) {
                    boolOrFn(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }), cleanTouchActions(t.join(" "))
            },
            preventDefaults: function(t) {
                var e = t.srcEvent,
                    n = t.offsetDirection;
                if (this.manager.session.prevented) return void e.preventDefault();
                var i = this.actions,
                    r = inStr(i, et) && !rt[et],
                    o = inStr(i, it) && !rt[it],
                    a = inStr(i, nt) && !rt[nt];
                if (r) {
                    var s = 1 === t.pointers.length,
                        l = t.distance < 2,
                        u = t.deltaTime < 250;
                    if (s && l && u) return
                }
                return a && o ? void 0 : r || o && n & N || a && n & M ? this.preventSrc(e) : void 0
            },
            preventSrc: function(t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var ot = 1,
            at = 2,
            st = 4,
            lt = 8,
            ut = lt,
            ct = 16;
        Recognizer.prototype = {
            defaults: {},
            set: function(t) {
                return l(this.options, t), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(t) {
                if (invokeArrayArg(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return t = getRecognizerByNameIfManager(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
            },
            dropRecognizeWith: function(t) {
                return invokeArrayArg(t, "dropRecognizeWith", this) ? this : (t = getRecognizerByNameIfManager(t, this), delete this.simultaneous[t.id], this)
            },
            requireFailure: function(t) {
                if (invokeArrayArg(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return t = getRecognizerByNameIfManager(t, this), -1 === inArray(e, t) && (e.push(t), t.requireFailure(this)), this
            },
            dropRequireFailure: function(t) {
                if (invokeArrayArg(t, "dropRequireFailure", this)) return this;
                t = getRecognizerByNameIfManager(t, this);
                var e = inArray(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(t) {
                return !!this.simultaneous[t.id]
            },
            emit: function(t) {
                function emit(n) {
                    e.manager.emit(n, t)
                }
                var e = this,
                    n = this.state;
                n < lt && emit(e.options.event + stateStr(n)), emit(e.options.event), t.additionalEvent && emit(t.additionalEvent), n >= lt && emit(e.options.event + stateStr(n))
            },
            tryEmit: function(t) {
                if (this.canEmit()) return this.emit(t);
                this.state = 32
            },
            canEmit: function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (32 | ot))) return !1;
                    t++
                }
                return !0
            },
            recognize: function(t) {
                var e = l({}, t);
                if (!boolOrFn(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
                this.state & (ut | ct | 32) && (this.state = ot), this.state = this.process(e), this.state & (at | st | lt | ct) && this.tryEmit(e)
            },
            process: function(t) {},
            getTouchAction: function() {},
            reset: function() {}
        }, inherit(AttrRecognizer, Recognizer, {
            defaults: {
                pointers: 1
            },
            attrTest: function(t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            },
            process: function(t) {
                var e = this.state,
                    n = t.eventType,
                    i = e & (at | st),
                    r = this.attrTest(t);
                return i && (n & S || !r) ? e | ct : i || r ? n & E ? e | lt : e & at ? e | st : at : 32
            }
        }), inherit(PanRecognizer, AttrRecognizer, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: I
            },
            getTouchAction: function() {
                var t = this.options.direction,
                    e = [];
                return t & N && e.push(it), t & M && e.push(nt), e
            },
            directionTest: function(t) {
                var e = this.options,
                    n = !0,
                    i = t.distance,
                    r = t.direction,
                    o = t.deltaX,
                    a = t.deltaY;
                return r & e.direction || (e.direction & N ? (r = 0 === o ? _ : o < 0 ? A : P, n = o != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === a ? _ : a < 0 ? D : O, n = a != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
            },
            attrTest: function(t) {
                return AttrRecognizer.prototype.attrTest.call(this, t) && (this.state & at || !(this.state & at) && this.directionTest(t))
            },
            emit: function(t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = directionStr(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
            }
        }), inherit(PinchRecognizer, AttrRecognizer, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [et]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & at)
            },
            emit: function(t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e
                }
                this._super.emit.call(this, t)
            }
        }), inherit(PressRecognizer, Recognizer, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [Z]
            },
            process: function(t) {
                var e = this.options,
                    n = t.pointers.length === e.pointers,
                    i = t.distance < e.threshold,
                    r = t.deltaTime > e.time;
                if (this._input = t, !i || !n || t.eventType & (E | S) && !r) this.reset();
                else if (t.eventType & C) this.reset(), this._timer = setTimeoutContext(function() {
                    this.state = ut, this.tryEmit()
                }, e.time, this);
                else if (t.eventType & E) return ut;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(t) {
                this.state === ut && (t && t.eventType & E ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = p(), this.manager.emit(this.options.event, this._input)))
            }
        }), inherit(RotateRecognizer, AttrRecognizer, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [et]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & at)
            }
        }), inherit(SwipeRecognizer, AttrRecognizer, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: N | M,
                pointers: 1
            },
            getTouchAction: function() {
                return PanRecognizer.prototype.getTouchAction.call(this)
            },
            attrTest: function(t) {
                var e, n = this.options.direction;
                return n & (N | M) ? e = t.overallVelocity : n & N ? e = t.overallVelocityX : n & M && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && h(e) > this.options.velocity && t.eventType & E
            },
            emit: function(t) {
                var e = directionStr(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), inherit(TapRecognizer, Recognizer, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [tt]
            },
            process: function(t) {
                var e = this.options,
                    n = t.pointers.length === e.pointers,
                    i = t.distance < e.threshold,
                    r = t.deltaTime < e.time;
                if (this.reset(), t.eventType & C && 0 === this.count) return this.failTimeout();
                if (i && r && n) {
                    if (t.eventType != E) return this.failTimeout();
                    var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                        a = !this.pCenter || getDistance(this.pCenter, t.center) < e.posThreshold;
                    this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
                    if (0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = setTimeoutContext(function() {
                        this.state = ut, this.tryEmit()
                    }, e.interval, this), at) : ut
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = setTimeoutContext(function() {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == ut && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), Hammer.VERSION = "2.0.7", Hammer.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [RotateRecognizer, {
                    enable: !1
                }],
                [PinchRecognizer, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [SwipeRecognizer, {
                    direction: N
                }],
                [PanRecognizer, {
                        direction: N
                    },
                    ["swipe"]
                ],
                [TapRecognizer],
                [TapRecognizer, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [PressRecognizer]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        Manager.prototype = {
            set: function(t) {
                return l(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            },
            stop: function(t) {
                this.session.stopped = t ? 2 : 1
            },
            recognize: function(t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var n, i = this.recognizers,
                        r = e.curRecognizer;
                    (!r || r && r.state & ut) && (r = e.curRecognizer = null);
                    for (var o = 0; o < i.length;) n = i[o], 2 === e.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (at | st | lt) && (r = e.curRecognizer = n), o++
                }
            },
            get: function(t) {
                if (t instanceof Recognizer) return t;
                for (var e = this.recognizers, n = 0; n < e.length; n++)
                    if (e[n].options.event == t) return e[n];
                return null
            },
            add: function(t) {
                if (invokeArrayArg(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
            },
            remove: function(t) {
                if (invokeArrayArg(t, "remove", this)) return this;
                if (t = this.get(t)) {
                    var e = this.recognizers,
                        n = inArray(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
                }
                return this
            },
            on: function(t, e) {
                if (t !== s && e !== s) {
                    var n = this.handlers;
                    return each(splitStr(t), function(t) {
                        n[t] = n[t] || [], n[t].push(e)
                    }), this
                }
            },
            off: function(t, e) {
                if (t !== s) {
                    var n = this.handlers;
                    return each(splitStr(t), function(t) {
                        e ? n[t] && n[t].splice(inArray(n[t], e), 1) : delete n[t]
                    }), this
                }
            },
            emit: function(t, e) {
                this.options.domEvents && triggerDomEvent(t, e);
                var n = this.handlers[t] && this.handlers[t].slice();
                if (n && n.length) {
                    e.type = t, e.preventDefault = function() {
                        e.srcEvent.preventDefault()
                    };
                    for (var i = 0; i < n.length;) n[i](e), i++
                }
            },
            destroy: function() {
                this.element && toggleCssProps(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, l(Hammer, {
            INPUT_START: C,
            INPUT_MOVE: k,
            INPUT_END: E,
            INPUT_CANCEL: S,
            STATE_POSSIBLE: ot,
            STATE_BEGAN: at,
            STATE_CHANGED: st,
            STATE_ENDED: lt,
            STATE_RECOGNIZED: ut,
            STATE_CANCELLED: ct,
            STATE_FAILED: 32,
            DIRECTION_NONE: _,
            DIRECTION_LEFT: A,
            DIRECTION_RIGHT: P,
            DIRECTION_UP: D,
            DIRECTION_DOWN: O,
            DIRECTION_HORIZONTAL: N,
            DIRECTION_VERTICAL: M,
            DIRECTION_ALL: I,
            Manager: Manager,
            Input: Input,
            TouchAction: TouchAction,
            TouchInput: TouchInput,
            MouseInput: MouseInput,
            PointerEventInput: PointerEventInput,
            TouchMouseInput: TouchMouseInput,
            SingleTouchInput: SingleTouchInput,
            Recognizer: Recognizer,
            AttrRecognizer: AttrRecognizer,
            Tap: TapRecognizer,
            Pan: PanRecognizer,
            Swipe: SwipeRecognizer,
            Pinch: PinchRecognizer,
            Rotate: RotateRecognizer,
            Press: PressRecognizer,
            on: addEventListeners,
            off: removeEventListeners,
            each: each,
            merge: v,
            extend: g,
            assign: l,
            inherit: inherit,
            bindFn: bindFn,
            prefixed: prefixed
        }), (void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer = Hammer, (i = function() {
            return Hammer
        }.call(e, n, e, t)) !== s && (t.exports = i)
    }(window, document)
}, function(t, e) {
    (function(e) {
        t.exports = e
    }).call(e, {})
}]);